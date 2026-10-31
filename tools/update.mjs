// update.mjs — drift probe + gated refresh against the live site.
//
// usage:
//   node tools/update.mjs                 read-only drift probe (never writes)
//   node tools/update.mjs --json          machine-readable probe
//   node tools/update.mjs --gate          TRUST GATE only: dry-run the fetch layer
//                                         and prove it reproduces the committed
//                                         capture byte-for-byte for every file still
//                                         served; writes nothing to the capture
//   node tools/update.mjs --pull [--date YYYY-MM-DD]
//                                         gate, archive, refresh, record upstream-gone
//
// Filled constants: ORIGIN / ENTRY / DISK_PREFIX. Adapted from the fleet
// template for VOXEL RUSH's shape:
//   - disk rels map to served paths by stripping DISK_PREFIX ("" here — the
//     capture sits at the repo root, served paths = on-disk paths);
//   - the entry document is served at "/" (and mirrors /index.html); directory
//     captures (about/index.html, ru/index.html) are served at their
//     trailing-slash routes, so both forms are probed;
//   - the origin answers ANY missing path with an HTTP 200 text/html SPA index
//     fallback, so a 200 is only trusted when the content type matches the
//     file (non-HTML rel answered with text/html, or an HTML page whose bytes
//     equal the entry document, counts as live-missing);
//   - _mirror-report.json is a local capture record — never probed;
//   - entry + *.html compare NORMALIZED (rotating Cloudflare tokens).
//
// --pull (PLAN §3: drift -> backup -> refresh -> RE-DERIVE):
//   1. TRUST GATE. Every captured file is fetched with the capture tool's own
//      fallback semantics and compared against the bytes on disk. The gate
//      passes only when every unchanged file is byte-identical (sha256) and
//      every drifted file is stable across two independent fetches; the
//      committed capture is never written before that.
//   2. CLOSURE GATE. tools/capture.mjs runs with --out into a scratch tree
//      (full runtime closure from the live entry). The scratch capture must
//      contain EVERY unchanged captured file with identical bytes, the same
//      new bytes for every drifted file, and must not resurrect a live-missing
//      one. Any contradiction aborts before a single mirror file is touched.
//   3. BACKUP. Files being replaced (drifted) and files gone upstream are
//      copied to legacy/<date>/ first; nothing is deleted unless its bytes
//      remain reachable there.
//   4. INSTALL. Scratch capture -> repo root; the crawl record and the Gen-A
//      manifest are re-cut (tools/record-manifest.mjs is the walk authority).
//   5. ADDED / UPSTREAM-GONE are reported (never invented, never silently
//      dropped). readable/ + src/ MUST then be re-derived (tools/derive.mjs).
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
const ORIGIN = "https://play.voxelrush.app";
const ENTRY = "index.html"; // served at the origin root
const DISK_PREFIX = ""; // capture sits at the repo root
const UA = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0" };

const argv = process.argv.slice(2);
const GATE = argv.includes("--gate");
const PULL = argv.includes("--pull");
const dateArg = (() => {
  const i = argv.indexOf("--date");
  return i >= 0 ? argv[i + 1] : null;
})();
const ARCHIVE_DATE = dateArg || new Date().toISOString().slice(0, 10);

const sha = (b) => crypto.createHash("sha256").update(b).digest("hex");
async function getBuf(url) {
  const r = await fetch(url, { headers: UA, redirect: "manual" });
  return { status: r.status, ctype: r.headers.get("content-type") || "", buf: r.ok ? Buffer.from(await r.arrayBuffer()) : null };
}
// disk rel -> served path ("" = origin root)
const servedOf = (rel) => (rel.startsWith(DISK_PREFIX) ? rel.slice(DISK_PREFIX.length) : rel);
// disk rel -> served URL: root entry at "/", directory captures at their
// trailing-slash route, everything else verbatim.
const urlFor = (rel) =>
  rel === ENTRY
    ? ORIGIN + "/"
    : /\/index\.html$/.test(rel)
      ? ORIGIN + "/" + rel.slice(0, -"index.html".length)
      : ORIGIN + "/" + rel.split("/").map(encodeURIComponent).join("/");
// Rotating per-response noise — everything else must be byte-identical.
const normalize = (s) =>
  s
    .replace(/ nonce="[^"]*"/g, "")
    .replace(/window\.__CF\$cv\$params=\{[^}]*\}/g, "window.__CF$cv$params=<token>")
    .replace(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/g, "<uuid>");

const manifestPath = path.join(proj, ".upstream", "manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

// ── fetch the live closure-of-captured (one request per captured file) ────
const live = {};
const entryUrl = urlFor(ENTRY);
const entry = await getBuf(entryUrl);
if (entry.status !== 200) {
  console.error(`live entry ${entryUrl} -> HTTP ${entry.status}`);
  process.exit(2);
}
live[ENTRY] = { buf: entry.buf };

const rels = Object.keys(manifest.files)
  .filter((r) => r !== ENTRY && !r.endsWith("_mirror-report.json"))
  .sort();
for (const rel of rels) {
  const served = servedOf(rel);
  if (served.startsWith("cdn-cgi/")) continue;
  let r = await getBuf(urlFor(rel));
  if (r.status === 200 && !r.buf) r = { ...r, status: 0 };
  // SPA fallback: a 200 text/html for a non-HTML file is not the file
  if (r.status === 200 && /text\/html/i.test(r.ctype) && !/\.html?$/i.test(rel)) continue;
  if (r.status === 200 && /\.html?$/i.test(rel) && r.buf.equals(entry.buf)) continue; // un-routed fallback
  if (r.status === 200 && !live[rel]) live[rel] = { buf: r.buf };
}

// Compare one live buffer against the bytes committed on disk (the capture,
// not the recorded hash — this is the "reproduce the CURRENT capture" test).
const htmlRel = (rel) => rel === ENTRY || /\.html?$/i.test(rel);
function compareWithCapture(rel, buf) {
  const abs = path.join(proj, rel);
  if (!fs.existsSync(abs)) return { state: "no-capture" };
  const cap = fs.readFileSync(abs);
  const same = htmlRel(rel)
    ? normalize(buf.toString("utf8")) === normalize(cap.toString("utf8"))
    : buf.equals(cap);
  return { state: same ? "same" : "changed", captureSha: sha(cap), liveSha: sha(buf) };
}

const verdicts = new Map(); // rel -> { state, ... }
for (const [n, m] of Object.entries(manifest.files).sort()) {
  if (n.endsWith("_mirror-report.json")) continue;
  const l = live[n];
  if (!l) {
    verdicts.set(n, { state: "live-missing" });
    continue;
  }
  verdicts.set(n, m.dynamic ? { state: "same", dynamic: true } : compareWithCapture(n, l.buf));
}

const isChanged = (rel) => verdicts.get(rel)?.state === "changed";
const isMissing = (rel) => verdicts.get(rel)?.state === "live-missing";
const changedRels = [...verdicts].filter(([, v]) => v.state === "changed").map(([r]) => r).sort();
const missingRels = [...verdicts].filter(([, v]) => v.state === "live-missing").map(([r]) => r).sort();
const sameCount = [...verdicts.values()].filter((v) => v.state === "same").length;
const total = Object.keys(manifest.files).filter((r) => !r.endsWith("_mirror-report.json")).length;

// ── TRUST GATE ────────────────────────────────────────────────────────────
async function trustGate() {
  const problems = [];
  let stable = 0;
  for (const rel of changedRels) {
    const a = await getBuf(urlFor(rel));
    const b = await getBuf(urlFor(rel));
    if (a.status !== 200 || b.status !== 200) {
      problems.push(`${rel}: refetch failed (HTTP ${a.status}/${b.status})`);
      continue;
    }
    const ca = compareWithCapture(rel, a.buf);
    const cb = compareWithCapture(rel, b.buf);
    if (ca.state !== "changed" || cb.state !== "changed") problems.push(`${rel}: drift is not reproducible on refetch`);
    else if (sha(a.buf) !== sha(b.buf)) problems.push(`${rel}: live bytes unstable across two fetches`);
    else stable++;
  }
  // An unchanged file that failed to fetch is not "reproduced" — it is gone.
  for (const rel of missingRels) console.log(`  upstream-gone (not served): ${rel}`);
  console.log(
    `TRUST GATE: ${sameCount}/${total} unchanged captured file(s) reproduced byte-for-byte, ` +
      `${changedRels.length} changed upstream (${stable}/${changedRels.length} stable across refetch), ` +
      `${missingRels.length} live-missing`,
  );
  for (const rel of changedRels) {
    const v = verdicts.get(rel);
    console.log(`  changed  ${rel}  mirror ${String(v.captureSha).slice(0, 12)} -> live ${String(v.liveSha).slice(0, 12)}`);
  }
  if (problems.length) {
    for (const p of problems) console.error(`  ! ${p}`);
    console.error(`TRUST GATE: FAIL — ${problems.length} problem(s); nothing written`);
    return false;
  }
  if (!changedRels.length && !missingRels.length) console.log("TRUST GATE: PASS — up to date (no drift)");
  else console.log("TRUST GATE: PASS — the fetch layer reproduces the committed capture for every unchanged file");
  return true;
}

if (GATE) {
  const ok = await trustGate();
  process.exit(ok ? 0 : 1);
}

// ── read-only probe (default / --json) ────────────────────────────────────
if (!PULL) {
  const rows = [];
  for (const rel of [...changedRels, ...missingRels].sort())
    rows.push({ file: rel, state: verdicts.get(rel).state, ...verdicts.get(rel) });
  if (argv.includes("--json")) {
    console.log(JSON.stringify({ origin: ORIGIN, checked: total, changed: changedRels.length, missing: missingRels.length, rows }, null, 2));
  } else if (!rows.length) {
    console.log(`up to date: ${total} captured files identical upstream`);
  } else {
    console.log(`DRIFT: ${changedRels.length} changed, ${missingRels.length} live-missing (of ${total} captured)`);
    for (const r of rows.slice(0, 40)) console.log(`  ${r.state.padEnd(14)} ${r.file}`);
    process.exit(1);
  }
  process.exit(0);
}

// ── --pull: gate -> scratch closure -> compare -> backup -> install ───────
const SCRATCH = path.join(proj, ".pull-scratch");

function fail(msg) {
  console.error(`PULL: FAIL — ${msg}; nothing written`);
  fs.rmSync(SCRATCH, { recursive: true, force: true });
  process.exit(1);
}

async function pull() {
  if (!(await trustGate())) fail("trust gate did not pass");

  console.log(`\nPULL: capturing the live closure into ${path.relative(proj, SCRATCH)}/ (dry-run, gate 2)`);
  fs.rmSync(SCRATCH, { recursive: true, force: true });
  const run = spawnSync(process.execPath, [path.join(here, "capture.mjs"), "--out", SCRATCH], {
    stdio: "inherit",
    cwd: proj,
  });
  if (run.status !== 0) fail(`capture.mjs exited ${run.status}`);

  const scratchManifestPath = path.join(SCRATCH, ".upstream", "manifest.json");
  if (!fs.existsSync(scratchManifestPath)) fail("capture produced no manifest");
  const scratchManifest = JSON.parse(fs.readFileSync(scratchManifestPath, "utf8"));
  const scratchRels = new Set(Object.keys(scratchManifest.files));

  // ── CLOSURE GATE: the tool must reproduce the committed capture ─────────
  // Every file the NEW build still references must come back byte-identical
  // (unless it drifted, in which case it must equal the gate's live fetch).
  // A file that is still served upstream but that the new build no longer
  // references is SUPERSEDED — archived, never silently dropped and never
  // invented as "gone upstream". A file that is no longer served at all is
  // UPSTREAM-GONE.
  const problems = [];
  let reproduced = 0;
  const superseded = [];
  for (const rel of Object.keys(manifest.files)) {
    if (rel.endsWith("_mirror-report.json")) continue;
    if (isMissing(rel)) {
      if (scratchRels.has(rel)) problems.push(`${rel}: recorded upstream-gone but the closure walk still fetched it`);
      continue;
    }
    if (!scratchRels.has(rel)) {
      if (isChanged(rel)) problems.push(`${rel}: drifted upstream but the new build's closure does not reference it`);
      else superseded.push(rel);
      continue;
    }
    const fresh = fs.readFileSync(path.join(SCRATCH, rel));
    const cap = fs.readFileSync(path.join(proj, rel));
    if (isChanged(rel)) {
      if (sha(fresh) !== sha(live[rel].buf)) problems.push(`${rel}: closure bytes differ from the gate's live fetch`);
    } else if (!fresh.equals(cap)) {
      problems.push(`${rel}: closure walk differs from the committed capture byte-for-byte`);
    } else reproduced++;
  }
  const added = [...scratchRels].filter((r) => !Object.prototype.hasOwnProperty.call(manifest.files, r)).sort();
  const gone = missingRels.slice();
  const unchangedInClosure = sameCount - superseded.filter((r) => !isChanged(r)).length;
  console.log(
    `\nCLOSURE GATE: ${reproduced}/${unchangedInClosure} unchanged file(s) in the new closure reproduced byte-for-byte, ` +
      `${changedRels.length} drifted, ${added.length} new, ${superseded.length} superseded (still served, unreferenced), ` +
      `${gone.length} upstream-gone`,
  );
  for (const rel of added) console.log(`  added         ${rel}`);
  for (const rel of superseded) console.log(`  superseded    ${rel} (still served at its immutable URL; no longer referenced)`);
  for (const rel of gone) console.log(`  upstream-gone ${rel}`);
  if (problems.length) {
    for (const p of problems) console.error(`  ! ${p}`);
    fail(`closure gate found ${problems.length} contradiction(s)`);
  }

  // ── BACKUP: every replaced / removed capture file -> legacy/<date>/ ─────
  const legacyRoot = path.join(proj, "legacy", ARCHIVE_DATE);
  let archived = 0;
  const archive = (rel) => {
    const src = path.join(proj, rel);
    if (!fs.existsSync(src)) return;
    let dest = path.join(legacyRoot, rel);
    const bytes = fs.readFileSync(src);
    if (fs.existsSync(dest)) {
      if (fs.readFileSync(dest).equals(bytes)) return; // already preserved byte-exact
      // a different superseded generation for the same rel: never overwrite the
      // archive, keep both under a numbered sibling
      let n = 2;
      while (fs.existsSync(`${dest}.${n}`) && !fs.readFileSync(`${dest}.${n}`).equals(bytes)) n++;
      if (fs.existsSync(`${dest}.${n}`)) return;
      dest = `${dest}.${n}`;
    }
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, bytes);
    archived++;
    console.log(`  archived   ${rel} -> ${path.relative(proj, dest).split(path.sep).join("/")}`);
  };
  for (const rel of [...changedRels, ...superseded, ...gone].sort()) archive(rel);
  // the local records being re-cut are archived too (never the only copy)
  archive("_mirror-report.json");
  archive(".upstream/manifest.json");

  // ── INSTALL ─────────────────────────────────────────────────────────────
  let installed = 0;
  let bytes = 0;
  for (const rel of [...scratchRels].sort()) {
    const buf = fs.readFileSync(path.join(SCRATCH, rel));
    const dest = path.join(proj, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, buf);
    installed++;
    bytes += buf.length;
  }
  fs.copyFileSync(path.join(SCRATCH, "_mirror-report.json"), path.join(proj, "_mirror-report.json"));
  for (const rel of [...superseded, ...gone]) fs.rmSync(path.join(proj, rel), { force: true });
  fs.rmSync(SCRATCH, { recursive: true, force: true }); // never let the walk record the dry-run tree

  // re-cut the Gen-A manifest from the disk walk (record-manifest is the
  // authority and keeps the capture-time `generated`/`origin` stamp)
  const recut = spawnSync(process.execPath, [path.join(here, "record-manifest.mjs")], { stdio: "inherit", cwd: proj });
  if (recut.status !== 0) fail(`record-manifest.mjs exited ${recut.status}`);

  console.log(
    `\nPULL: ${installed} capture file(s) installed, ${bytes} bytes; ${changedRels.length} replaced, ` +
      `${added.length} added, ${superseded.length} superseded, ${gone.length} upstream-gone, ` +
      `${archived} file(s) preserved under legacy/${ARCHIVE_DATE}/`,
  );
  console.log("PULL: next — re-derive readable/ + src/ (node tools/derive.mjs), then run every gate.");
}

await pull();
