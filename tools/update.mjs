// update.mjs — read-only drift probe against the live site. Never rewrites the
// capture. usage: node tools/update.mjs [--json]
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
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
const ORIGIN = "https://play.voxelrush.app";
const ENTRY = "index.html"; // served at the origin root
const DISK_PREFIX = ""; // capture sits at the repo root
const UA = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0" };

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

const manifest = JSON.parse(fs.readFileSync(path.join(proj, ".upstream", "manifest.json"), "utf8"));

const live = {};
const entryUrl = urlFor(ENTRY);
const entry = await getBuf(entryUrl);
if (entry.status !== 200) {
  console.error(`live entry ${entryUrl} -> HTTP ${entry.status}`);
  process.exit(2);
}
live[ENTRY] = { buf: entry.buf };

// Probe every captured file directly — the manifest is the authoritative closure.
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

const rows = [];
for (const [n, m] of Object.entries(manifest.files).sort()) {
  if (n.endsWith("_mirror-report.json")) continue;
  const l = live[n];
  if (!l) {
    rows.push({ file: n, state: "live-missing" });
    continue;
  }
  if (m.dynamic) continue; // rotating third-party payload: presence is the only stable signal
  if (n === ENTRY || n.endsWith(".html")) {
    const cap = path.join(proj, n);
    if (!fs.existsSync(cap)) continue;
    const a = normalize(l.buf.toString("utf8"));
    const b = normalize(fs.readFileSync(cap, "utf8"));
    if (a !== b) rows.push({ file: n, state: "changed" });
  } else if (m.sha256 !== sha(l.buf)) {
    rows.push({ file: n, state: "changed", mirror: m.sha256.slice(0, 12), live: sha(l.buf).slice(0, 12) });
  }
}
const changed = rows.filter((r) => r.state === "changed").length;
const missing = rows.filter((r) => r.state === "live-missing").length;
if (process.argv.includes("--json")) {
  console.log(JSON.stringify({ origin: ORIGIN, checked: Object.keys(manifest.files).length, changed, missing, rows }, null, 2));
} else if (!rows.length) {
  console.log(`up to date: ${Object.keys(manifest.files).length} captured files identical upstream`);
} else {
  console.log(`DRIFT: ${changed} changed, ${missing} live-missing (of ${Object.keys(manifest.files).length} captured)`);
  for (const r of rows.slice(0, 40)) console.log(`  ${r.state.padEnd(14)} ${r.file}`);
  process.exit(1);
}
