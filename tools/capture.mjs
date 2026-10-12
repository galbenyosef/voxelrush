// capture.mjs — byte-exact capture + runtime-closure fetch for Voxel Rush.
//
// VOXEL RUSH (https://play.voxelrush.app/) is a Vite production build of a
// browser FPS ("Free Browser FPS with Tanks, Helicopters & Drones": 40-soldier
// flag battles, Team Deathmatch and a voxel survival sandbox), served at the
// origin root by Cloudflare. The entry document carries inline boot scripts and
// three inline <style> blocks plus one application/ld+json data block, loads
// the hashed module entry /assets/index-*.js (three.js in the graph) and one
// stylesheet, plus two off-origin scripts (telegram.org web-app shim and the
// Cloudflare Insights beacon) that stay external. The origin also serves the
// static /about/ + /ru/ pages, /sitemap.xml, /manifest.webmanifest, /sw.js,
// /robots.txt and the icon/screenshot images.
//
// This tool fetches the entry document, then iterates the runtime closure to a
// fixpoint over every captured HTML/JS/CSS/JSON/XML text file:
//
//   - HTML: src/href/poster/srcset attributes, inline <script>/<style> bodies,
//     quoted asset-path literals (og:image, screens, icons), comments
//   - JS:   dynamic import("…"), bare import "…", static from "…",
//           new URL("…", import.meta.url), __vite__mapDeps chunk tables, and
//           asset-path string literals (.js/.css/.png/.jpg/… extensions)
//   - CSS:  url(…) and @import "…"
//   - JSON: asset-path string literals (manifest.webmanifest icons)
//   - XML:  <loc> URLs and full-origin URLs (sitemap.xml lists the pages and
//           screenshot images)
//
// Directory routes keep their trailing slash: a reference to /about/ maps to
// disk rel about/index.html and is fetched at /about/ (the origin 301s the
// slash-less form), so page routes are captured as their served directory
// index and re-serve correctly from a static mirror root.
//
// Relative paths in JS are ambiguous at capture time (fetch()/img.src resolve
// against the document, new URL(…, import.meta.url) against the module), so
// each relative candidate is probed at both bases — module dir first, then the
// origin root — and the first HTTP 200 wins. Only if every base 404s is the
// reference recorded as an unresolved gap. Runtime-instantiated template
// literals that the static scanner cannot resolve are enumerated explicitly
// (KNOWN below).
//
// Every referenced-but-missing same-origin file is fetched until a scan round
// finds none; 404s are recorded as unresolved gaps in _mirror-report.json (and
// the README) — never fabricated. External (off-origin) references are recorded
// as `external` and left on the CDN (telegram.org web-app shim, Cloudflare
// Insights beacon, the voxelrush.app marketing domain).
//
// Output (all byte-exact, nothing edited):
//   <mirror root>/…            captured files as served (entry index.html at root)
//   _mirror-report.json        crawl record (dead-world shape)
//   .upstream/manifest.json    Gen-A { generated, origin, files: { rel: {bytes, sha256} } }
//
// usage: node tools/capture.mjs [--check] [--report-only]
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
const ORIGIN = "https://play.voxelrush.app";
const ENTRY = "index.html"; // served at the origin root; capture at repo root (DISK_PREFIX = "")
const UA = { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/126.0" };

// references the static scanner cannot see, enumerated explicitly (each one is
// evidence-backed, discovered by playing the served mirror in a browser and
// decoding the obfuscated string arrays the build ships):
//   - assets/bootstrap-C4umvuQD.js — `local-server-worker-coep-v1-*.js` dynamic-
//     imports it as "./bootstrap-C4umvuQD.js" from its base64-encoded string
//     table (invisible to the literal scanner; the first boot-test failure was
//     exactly this fetch).
//   - assets/main-Bs7z9e_r.js  — bootstrap's own encoded string table imports it.
//   - assets/terrain-pool-Dvsi82A-.js — main's encoded string table imports it.
// The decoded tables also name the in-memory world routes the local-server
// worker serves itself (/world/*, /structures/* — SPA-fallback upstream, no
// static files; documented in README, deliberately not captured).
// robots.txt is a conventional root file the entry does not reference; recorded
// explicitly for site completeness.
const KNOWN = [
  "assets/bootstrap-C4umvuQD.js",
  "assets/main-Bs7z9e_r.js",
  "assets/terrain-pool-Dvsi82A-.js",
  "robots.txt",
];

// strings that look like asset paths but are not fetched refs (empty for
// VOXEL RUSH after the closure rounds; kept for refresh-time exclusions)
const EXCLUDE = new Set();

// extra resolution bases for JSON manifests whose entries are rooted at the
// bank root, not the manifest's own directory (none for VOXEL RUSH today)
const JSON_BASE_HINTS = {};

const sha256 = (buf) => crypto.createHash("sha256").update(buf).digest("hex");
const EXT =
  "js|mjs|css|png|jpe?g|webp|gif|svg|avif|ico|ktx2|basis|mp3|ogg|wav|m4a|mp4|webm|json|webmanifest|wasm|data|bin|glb|gltf|woff2?|ttf|otf|hdr|exr|txt|csv|glsl|vert|frag|map|xml|webmanifest";

// quoted-string scanner used for both HTML attributes/URLs and JS literals
const RE_QUOTED = new RegExp(`["'\`]([^"'\`\\n\\r]{1,300}?\\.(?:${EXT}))(?:\\?[^"'\`\\n\\r]*)?["'\`]`, "gi");
const RE_SPECIFIER = /\b(?:import|from)\s*\(?\s*["'`]([^"'`\n\r]+)["'`]/g;
const RE_NEW_URL = /\bnew\s+URL\s*\(\s*["'`]([^"'`\n\r]+)["'`]/g;
const RE_CSS_URL = /url\(\s*["']?([^"')]+)["']?\s*\)/g;
const RE_CSS_IMPORT = /@import\s+(?:url\(\s*)?["']([^"']+)["']/g;
const RE_SRC_HREF = /\b(?:src|href|poster)\s*=\s*["']([^"']+)["']/gi;
const RE_SRCSET = /\bsrcset\s*=\s*["']([^"']+)["']/gi;
// a captured URL must look like a sane relative path: no spaces, quotes,
// interpolation, operators or query syntax (kills minifier-expression artifacts)
const SANE = (s) => s.length > 0 && s.length <= 250 && !/[\s"'`&?!=<>|;(){}$,:\\]/.test(s);

const normalize = (p) => {
  const out = [];
  for (const part of p.split("/")) {
    if (!part || part === ".") continue;
    if (part === "..") out.pop();
    else out.push(part);
  }
  return out.join("/");
};

function classifyUrl(raw, baseDir, extHint) {
  let s = raw.trim();
  if (!s || s.includes("${")) return null;
  if (/^(data:|blob:|javascript:|mailto:|tel:|#)/i.test(s)) return null;
  if (s.startsWith("http://") || s.startsWith("https://")) {
    if (s.startsWith(ORIGIN + "/")) s = s.slice(ORIGIN.length);
    else if (s === ORIGIN) return { paths: ["index.html"] };
    else return { external: s };
  }
  if (s.startsWith("//")) return { external: s };
  if (!SANE(s)) return null;
  // a trailing slash is a directory route -> its served directory index
  if (s.endsWith("/")) {
    const dir = normalize(s.replace(/^\/+/, ""));
    return { path: (dir ? dir + "/" : "") + "index.html" };
  }
  if (s.startsWith("/")) return { path: normalize(s.replace(/^\//, "")) };
  // relative: try module-dir base first, then the origin root (document base)
  const mod = baseDir && baseDir !== "." ? normalize(path.posix.join(baseDir, s)) : normalize(s);
  const root = normalize(s);
  const paths = [...new Set([mod, root])];
  return { paths };
}

// extract candidate references from a captured text file; each entry is a
// candidate-base GROUP for one reference (probe() closes it if any base works)
function refsOf(relPath, text, external) {
  const groups = [];
  const add = (r) => {
    if (!r) return;
    if (r.external) {
      external.add(r.external);
      return;
    }
    const paths = (r.paths ?? [r.path]).filter((p) => p && !EXCLUDE.has(p));
    if (paths.length) groups.push(paths);
  };
  // merge several classify results for ONE reference into a single group, so a
  // candidate that resolves under any known base closes the whole reference
  const addMany = (results) => {
    const paths = [];
    for (const r of results) {
      if (!r) continue;
      if (r.external) {
        external.add(r.external);
        continue;
      }
      for (const p of r.paths ?? [r.path]) if (p && !EXCLUDE.has(p) && !paths.includes(p)) paths.push(p);
    }
    if (paths.length) groups.push(paths);
  };
  const baseDir = path.posix.dirname(relPath);
  const isHtml = /\.html?$/i.test(relPath);
  const isCss = /\.css$/i.test(relPath);
  const isJs = /\.(js|mjs)$/i.test(relPath);
  const isJson = /\.(json|webmanifest)$/i.test(relPath);
  const isXml = /\.xml$/i.test(relPath);

  if (isHtml) {
    for (const m of text.matchAll(RE_SRC_HREF)) add(classifyUrl(m[1], "", ""));
    for (const m of text.matchAll(RE_SRCSET))
      for (const part of m[1].split(",")) add(classifyUrl(part.trim().split(/\s+/)[0], "", ""));
    for (const m of text.matchAll(RE_QUOTED)) {
      const v = m[1];
      if (/\.(js|css|png|jpg|jpeg|mp4|webp|woff2?|json|webmanifest|wasm|xml)$/i.test(v) || v.startsWith("/"))
        add(classifyUrl(v, "", ""));
    }
    // HTML comments can carry loader hints
    for (const m of text.matchAll(/<!--([\s\S]*?)-->/g))
      for (const t of m[1].matchAll(new RegExp(`([A-Za-z0-9_./-]{1,200}\\.(?:${EXT}))`, "gi")))
        add(classifyUrl(t[1], "", ""));
  }
  if (isJson) {
    const hint = JSON_BASE_HINTS[relPath];
    for (const m of text.matchAll(RE_QUOTED)) {
      const results = [classifyUrl(m[1], baseDir, "")];
      if (hint && !m[1].startsWith("/")) results.push(classifyUrl(m[1], hint, ""));
      addMany(results);
    }
  }
  if (isXml) {
    // sitemap <loc>/<image:loc> entries + full-origin URLs
    for (const m of text.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)) add(classifyUrl(m[1], baseDir, ""));
    for (const m of text.matchAll(new RegExp(`${ORIGIN.replace(/\./g, "\\.")}(/[^"'<>\\s]*)`, "g")))
      add(classifyUrl(m[1], baseDir, ""));
    for (const m of text.matchAll(/\bhref\s*=\s*["']([^"']+)["']/gi)) add(classifyUrl(m[1], baseDir, ""));
  }
  if (isCss) {
    for (const m of text.matchAll(RE_CSS_URL)) add(classifyUrl(m[1], baseDir, ""));
    for (const m of text.matchAll(RE_CSS_IMPORT)) add(classifyUrl(m[1], baseDir, ""));
  }
  if (isJs) {
    for (const m of text.matchAll(RE_QUOTED)) add(classifyUrl(m[1], baseDir, ""));
    for (const m of text.matchAll(RE_SPECIFIER)) {
      const v = m[1];
      if (/^(\.{0,2}\/)/.test(v) || /\.(js|mjs|css|json|wasm|webmanifest)(\?|$)/i.test(v)) add(classifyUrl(v, baseDir, ""));
    }
    for (const m of text.matchAll(RE_NEW_URL)) {
      const v = m[1];
      if (!v.includes("${")) add(classifyUrl(v, baseDir, ""));
    }
  }
  const seen = new Set();
  return groups.filter((g) => {
    const k = g.join("|");
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

const external = new Set();
const state = {
  start: ORIGIN + "/",
  origin: ORIGIN,
  gated: false,
  sessionRenewal: "none",
  requests: 0,
  fetched: new Map(), // rel -> { bytes, sha256, buf }
  unresolved: [],
  unreachable: [],
};

const unresolvedSeen = new Set();
const unreachableSeen = new Set();
const probedFailed = new Map(); // candidate rel -> last failure (status or "spa-fallback")
const badStatus = (res, rel) => {
  // presence in the report is idempotent across rounds
  if (res.fallback) {
    if (!unresolvedSeen.has(rel)) {
      unresolvedSeen.add(rel);
      state.unresolved.push({
        status: 200,
        fallback: true,
        note: "HTTP 200 text/html SPA index fallback — the file itself is not served",
        path: rel,
        probes: 1,
      });
    }
  } else if (res.status === 404 && !unresolvedSeen.has(rel)) {
    unresolvedSeen.add(rel);
    state.unresolved.push({ status: res.status, path: rel, probes: 1 });
  } else if (res.status !== 404 && !res.fallback && !unreachableSeen.has(rel)) {
    unreachableSeen.add(rel);
    state.unreachable.push({ status: res.status, path: rel, probes: 1 });
  }
};

// disk rel -> served URL: the root entry is served at "/", directory-index
// captures (about/index.html) at their trailing-slash route; everything else
// verbatim at its served path.
const relToUrl = (rel) =>
  rel === "index.html"
    ? ORIGIN + "/"
    : /\/index\.html$/.test(rel)
      ? ORIGIN + "/" + rel.slice(0, -"index.html".length)
      : ORIGIN + "/" + rel.split("/").map(encodeURIComponent).join("/");

// The origin serves a SPA index fallback (HTTP 200 + text/html) for any path
// it does not have, so a 200 alone does NOT mean the file exists. Rejection
// rules (a rejected candidate is handled exactly like a 404 gap):
//   - a non-.html rel answered with text/html -> fallback, not the file;
//   - an .html rel (other than the entry) whose bytes equal the entry
//     document's bytes -> un-routed fallback, not a real page.
let entryBuf = null;
const looksLikeFallback = (rel, ctype, buf) => {
  const html = /text\/html/i.test(ctype);
  if (!html) return false;
  if (!/\.html?$/i.test(rel)) return true;
  return entryBuf !== null && rel !== ENTRY && buf.equals(entryBuf);
};

// one raw fetch; never records — probe() decides what a failure means.
async function tryFetch(rel) {
  const url = relToUrl(rel);
  state.requests++;
  let r;
  try {
    r = await fetch(url, { headers: UA, redirect: "manual" });
  } catch (e) {
    return { status: `net:${e.message}`, buf: null };
  }
  if (r.status !== 200) return { status: r.status, buf: null };
  const buf = Buffer.from(await r.arrayBuffer());
  const ctype = r.headers.get("content-type") || "";
  if (looksLikeFallback(rel, ctype, buf))
    return { status: 200, buf: null, fallback: true, ctype };
  return { status: 200, buf, ctype };
}

// probe one reference: try every candidate base path; a reference is a gap only
// when EVERY base 404s (then each probed form is recorded, dead-world style);
// once any base is captured the reference is closed
async function probe(paths) {
  if (paths.some((p) => state.fetched.has(p))) return true;
  const fresh = paths.filter((p) => !probedFailed.has(p));
  if (!fresh.length) return false;
  const failed = [];
  for (const rel of fresh) {
    const res = await tryFetch(rel);
    if (res.buf) {
      state.fetched.set(rel, { bytes: res.buf.length, sha256: sha256(res.buf), buf: res.buf });
      return true;
    }
    probedFailed.set(rel, res.fallback ? "spa-fallback" : res.status);
    failed.push({ status: res.status, fallback: res.fallback, rel });
  }
  for (const f of failed) badStatus(f, f.rel);
  return false;
}

async function fetchEntry(rel) {
  const res = await tryFetch(rel);
  if (!res.buf) throw new Error(`entry ${rel} not fetchable (HTTP ${res.status})`);
  entryBuf = res.buf;
  state.fetched.set(rel, { bytes: res.buf.length, sha256: sha256(res.buf), buf: res.buf });
  return res.buf;
}

// --check: residual closure audit. Every reference scanned out of the captured
// text files must resolve to a captured file (any candidate base) or be a gap
// already recorded in _mirror-report.json — run after a capture to prove the
// runtime graph is closed.
function checkClosure() {
  const manifestPath = path.join(proj, ".upstream", "manifest.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const have = new Set(Object.keys(manifest.files));
  const recorded = new Set();
  try {
    const rep = JSON.parse(fs.readFileSync(path.join(proj, "_mirror-report.json"), "utf8"));
    for (const u of rep.unresolved ?? []) recorded.add(u.path);
  } catch {
    /* no report yet: every unresolved reference counts as new */
  }
  const ext = new Set();
  let groups = 0;
  const missing = [];
  const scanExternal = new Set();
  for (const rel of Object.keys(manifest.files).filter((r) => /\.(html?|js|mjs|css|json|webmanifest|xml)$/i.test(r))) {
    const text = fs.readFileSync(path.join(proj, rel), "utf8");
    for (const g of refsOf(rel, text, scanExternal)) {
      groups++;
      const k = g.join("|");
      if (ext.has(k)) continue;
      ext.add(k);
      if (!g.some((p) => have.has(p))) missing.push({ from: rel, candidates: g });
    }
  }
  const novel = missing.filter((m) => !m.candidates.some((c) => recorded.has(c)));
  for (const m of missing)
    console.log(
      `UNRESOLVED ${m.from} -> ${m.candidates.join(" | ")}` +
        (m.candidates.some((c) => recorded.has(c)) ? "  (recorded gap)" : "  (NEW)"),
    );
  console.log(
    `closure check: ${groups} reference group(s), ${missing.length} unresolved (${novel.length} new vs _mirror-report.json), ` +
      `${scanExternal.size} external off-origin reference(s) (left on CDN)`,
  );
  for (const e of [...scanExternal].sort()) console.log(`  external: ${e}`);
  process.exit(novel.length ? 1 : 0);
}

async function main() {
  if (process.argv.includes("--check")) return checkClosure();
  if (process.argv.includes("--report-only")) {
    console.log("report-only: no fetch performed");
    return;
  }

  // round 0: entry + runtime-instantiated template targets
  if (!state.fetched.has(ENTRY)) await fetchEntry(ENTRY);
  for (const rel of KNOWN) if (!state.fetched.has(rel)) await probe([rel]);

  // iterate closure to fixpoint
  let round = 0;
  let newRefs = 0;
  do {
    newRefs = 0;
    round++;
    for (const [rel, rec] of [...state.fetched.entries()].sort()) {
      if (!/\.(html?|js|mjs|css|json|webmanifest|xml)$/i.test(rel)) continue;
      const text = rec.buf.toString("utf8");
      if (!Buffer.from(text, "utf8").equals(rec.buf)) continue; // non-utf8, not scannable
      for (const group of refsOf(rel, text, external)) {
        if (group.some((p) => state.fetched.has(p))) continue;
        if (group.every((p) => probedFailed.has(p))) continue;
        newRefs++;
        await probe(group);
      }
    }
    console.log(`round ${round}: ${newRefs} new reference(s) probed, ${state.fetched.size} file(s) in closure`);
  } while (newRefs > 0);

  // write every captured file byte-exact at the capture root
  let bytes = 0;
  for (const [rel, rec] of [...state.fetched.entries()].sort()) {
    const abs = path.join(proj, rel);
    if (!path.resolve(abs).startsWith(path.resolve(proj) + path.sep) && path.resolve(abs) !== path.resolve(proj))
      throw new Error(`path escapes capture root: ${rel}`);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, rec.buf);
    bytes += rec.bytes;
  }
  state.bytes = bytes;

  // crawl record
  const report = {
    start: state.start,
    origin: state.origin,
    gated: state.gated,
    sessionRenewal: state.sessionRenewal,
    requests: state.requests,
    fetched: state.fetched.size,
    bytes: state.bytes,
    paths: [...state.fetched.keys()].sort(),
    unresolved: state.unresolved.sort((a, b) => a.path.localeCompare(b.path)),
    unreachable: state.unreachable.sort((a, b) => a.path.localeCompare(b.path)),
    external: [...external].sort(),
  };
  fs.writeFileSync(path.join(proj, "_mirror-report.json"), JSON.stringify(report, null, 2) + "\n");

  // Gen-A manifest over EVERY captured file
  const files = {};
  for (const [rel, rec] of [...state.fetched.entries()].sort()) files[rel] = { bytes: rec.bytes, sha256: rec.sha256 };
  fs.mkdirSync(path.join(proj, ".upstream"), { recursive: true });
  fs.writeFileSync(
    path.join(proj, ".upstream", "manifest.json"),
    JSON.stringify({ generated: new Date().toISOString(), origin: ORIGIN, files }, null, 2) + "\n",
  );

  console.log(
    `capture: ${state.fetched.size} file(s), ${bytes} bytes, ${state.requests} request(s), ` +
      `${state.unresolved.length} unresolved 404, ${state.unreachable.length} unreachable, ${external.size} external`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
