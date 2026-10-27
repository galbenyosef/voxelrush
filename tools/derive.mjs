// derive.mjs — rebuild the derived layers (readable/ + src/ + split-spec.json)
// from the voxelrush capture (PLAN §3/§5). VOXEL RUSH
// (https://play.voxelrush.app/) is capture-class: a Vite production build of a
// browser FPS ("Free Browser FPS with Tanks, Helicopters & Drones": 40-soldier
// flag battles, Team Deathmatch, a voxel survival sandbox), served at the
// origin root by Cloudflare. §0.4 fork-over-mirror was checked on 2026-10-13 —
// the page and its JS reference no public source repo (see README), so the
// mirror stands. The capture is untouched; every source file is re-hashed
// against .upstream/manifest.json before it is rendered, so a drifted capture
// fails loudly instead of being silently re-derived.
//
// Structure, decided from bytes (tools/probe-structure.mjs, 2026-10-15): no
// sourceMappingURL and no *.map files anywhere in the capture; the entry chunk
// assets/index-Dp6GxvJu.js is a Vite/Rollup flat ESM module with ONE static
// from-import, a Vite modulepreload machinery prefix, the bundled three.js r169
// core and then the app — and the world payloads are the obfuscator.io chain
// assets/bootstrap-C4umvuQD.js → assets/main-Bs7z9e_r.js →
// assets/terrain-pool-Dvsi82A-.js (dynamic-imported from base64 string tables
// by the local-server worker). No module factories (no __webpack_require__ /
// Turbopack signatures), so statement-aligned slices are the true boundary.
// The derived layers MIRROR THE SERVED PATH (PLAN §5): the capture sits at the
// repo root (served paths = on-disk paths), so assets/index-Dp6GxvJu.js becomes
// readable/assets/index-Dp6GxvJu.pretty.js and slices to
// src/assets/index-Dp6GxvJu-NN.js — the served path is the truth, never
// __-flattened.
//
// Pipeline:
//   each capture *.js -> pinned prettier 3.9.6 (module API — the CLI respects
//                        .gitignore and can silently echo its input), applied to
//                        a layout FIXED POINT -> readable/<served path>.pretty.js
//                        (served dirs kept; every pretty provably NOT
//                        byte-identical to its capture).
//   the capture *.css -> readable/<served path>.pretty.css, wholeFile section
//                        (stylesheet rule: stylesheets are never sliced).
//   vendor regions     -> wholeFile sections (vendor rule): inside the entry
//                        chunk assets/index-*.js, the bundled three.js r169
//                        core is content-anchored (license/revision statement
//                        through the `window.__THREE__` registration) and the
//                        Vite modulepreload/helper prefix before it is
//                        machinery — both indexed whole, never sliced, with
//                        positive + negative guards asserted.
//   app code           -> statement-aligned slices src/<served path>-NN.js at
//                        top-level declaration boundaries, ~250-350 line
//                        windows (oversized single declarations stay whole),
//                        exact 2-line provenance header; every slice is
//                        parse-checked with `node --input-type=module
//                        --check -` and round-trips byte-exact to its readable
//                        line range — through the recorded rename map where the
//                        slice is renamed.
//   entry documents    -> inline <script>/<style> scan (byte ranges + sha256):
//                        index.html carries a boot <script>, three <style>
//                        blocks and a closing storage-cleanup <script> (plus an
//                        application/ld+json data block, recorded notRendered,
//                        no pretty pass); about/index.html and ru/index.html
//                        each carry one <style> and one ld+json block. Every
//                        inline content block gets a wholeFile twin
//                        readable/<entry>-inline-N.pretty.{js,css} + an entry
//                        in readable/index-inline-map.json (exact range +
//                        sha256).
//   binary payloads    -> hashed notRendered records (bytes + sha256, no
//                        pretty pass) for every captured image/audio/font/
//                        data payload.
//
// The obfuscated payloads (local-server-worker, main, bootstrap, terrain-pool,
// sw.js) go through the same prettier pass; their statement-aligned slices
// carry obfuscator.io-mangled identifiers. The obfuscator.io decoder + base64
// string table are MACHINERY (obfuscation plumbing, not app code) embedded
// inside app statements — no stable content anchors exist to band them
// wholeFile, so they are sliced as app code, stay obfuscated, and are recorded
// as a names.json review exclusion (PLAN §5).
//
// The rename layer (PLAN §5 campaign): tools/names.json (reviewed) ->
// tools/apply-names.mjs -> rename-map.json (recovered mechanically by
// tools/recover-scoped-map.mjs) -> re-applied here on every re-cut. The
// readable layer stays pristine; only src/ carries semantic names. The chunk's
// fired app bindings are recorded as sources[].renameBindings for the
// reconstruction gates (turfwar's (t)(1) mechanism). Pipeline order:
// apply -> recover -> derive -> gates.
//
// Superseded derived files are archived to legacy/<date>/ (proposal (o)), both
// the superseded readable/ and src/ layers — never silently dropped.
//
// Non-standalone parts are indexed but never sliced (skipped sections): a
// chunk's final `export {…}` table (the bindings live in the earlier slices).
//
// usage:
//   node tools/derive.mjs
//   node tools/derive.mjs --check   # re-render + byte-compare, write nothing
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { applyRecordedMap } from "./engine/rename-layer.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
const PINNED = "3.9.6";
const MIN_WINDOW = 250;
const MAX_WINDOW = 350;
const MAX_PASSES = 3; // prettier layout fixed point: format until stable
const TODAY = "2026-10-15"; // structure/rename pass: superseded layers archive to legacy/<date>/
const ROOT = ""; // capture root (the served site root — capture sits at the repo root)
const checkOnly = process.argv.includes("--check");

const problems = [];
const problem = (m) => {
  problems.push(m);
  console.error("  ! " + m);
};

const sha256 = (buf) => crypto.createHash("sha256").update(buf).digest("hex");
const readLines = (abs) => {
  const t = fs.readFileSync(abs, "utf8");
  const l = t.split("\n");
  if (l.length && l[l.length - 1] === "") l.pop();
  return l;
};
const linesOf = (text) => text.replace(/\n$/, "").split("\n");

// ── naming: capture rel -> served stem / readable rel / slice rel ───────
// The capture preserves the served URL structure (it sits at the repo root, so
// served paths = on-disk paths), so the derived layers mirror it (PLAN §5):
// assets/index-Dp6GxvJu.js is served at /assets/index-Dp6GxvJu.js and becomes
// readable/assets/index-Dp6GxvJu.pretty.js and src/assets/index-Dp6GxvJu-NN.js.
// The 'tag' (for slice headers) is the served basename.
const servedStem = (capRel) => capRel.replace(/\.(js|css|html)$/i, "");
const tagOf = (capRel) => servedStem(capRel).split("/").pop();
const prettyRelFor = (capRel) =>
  "readable/" + servedStem(capRel) + (/\.css$/i.test(capRel) ? ".pretty.css" : ".pretty.js");

// ── pinned prettier (module API, exactly 3.9.6) ─────────────────────────
async function loadPrettier() {
  const candidates = [
    process.env.PRETTIER_MJS,
    path.join(proj, "node_modules", "prettier", "index.mjs"),
    path.join(proj, "tools", "vendor", "prettier", "index.mjs"),
  ].filter(Boolean);
  for (const c of candidates) {
    if (!fs.existsSync(c)) continue;
    try {
      const pkg = JSON.parse(fs.readFileSync(path.join(path.dirname(c), "package.json"), "utf8"));
      if (pkg.version !== PINNED) continue;
      const mod = (await import(pathToFileURL(c).href)).default;
      if (mod.version === PINNED) return { mod, at: c };
    } catch {
      /* try next */
    }
  }
  throw new Error(`pinned prettier ${PINNED} not found (set PRETTIER_MJS to its index.mjs)`);
}

// format to a layout fixed point (multi-pass): prettier 3.9.6's member-chain
// layout is not idempotent on some optional-chain argument patterns (pass 1
// breaks `t.modules\n  .get(...)`, pass 2 keeps it joined and splits the
// arguments), so the recorded method is "format until stable"; audit re-renders
// with the same method and requires byte-equality.
async function formatFix(prettier, text, parser) {
  let out = await prettier.format(text, { parser });
  let passes = 1;
  while (passes < MAX_PASSES) {
    const next = await prettier.format(out, { parser });
    if (next === out) return { text: out, passes };
    out = next;
    passes++;
  }
  if ((await prettier.format(out, { parser })) !== out)
    throw new Error(`prettier ${parser} has no layout fixed point in ${MAX_PASSES} passes`);
  return { text: out, passes };
}

// ── parse check: the exact standalone gate (ESM stdin) ──────────────────
function parses(text) {
  const r = spawnSync(process.execPath, ["--input-type=module", "--check", "-"], {
    input: text,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  return { ok: r.status === 0, why: (r.stderr || "").trim().split("\n").slice(-3).join(" | ") };
}

// ── markers for titles (top tokens, lowercase; fleet convention) ────────
const STOP = new Set(
  ("function return typeof undefined object string number boolean prototype length value default " +
    "exports import this that with from then else case break continue delete instanceof constructor " +
    "arguments void null true false call apply name type text target window document globalthis self " +
    "require module async await yield static class const let var new for while switch throw try catch " +
    "finally extends super using debugger of in do if has own hasown get set")
    .split(" ")
    .filter(Boolean),
);
function markers(text, n = 2) {
  // URLs/identifiers living inside string literals (import paths, asset names)
  // are not code tokens — strip quoted strings before counting
  const code = text.replace(/`[^`]*`|"[^"\n]*"|'[^'\n]*'/g, " ");
  const counts = new Map();
  for (const m of code.matchAll(/[A-Za-z][A-Za-z0-9_]{2,}/g)) {
    const w = m[0].toLowerCase();
    if (STOP.has(w)) continue;
    counts.set(w, (counts.get(w) || 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, n);
}
const markerText = (ms) => ms.map(([w, c]) => `${w}(${c})`).join(", ");

// ── the SERVED chunk's own export statement (the export gate's tail) ────
/**
 * The public names of an `export { … }` list: the ALIAS, not the local — the
 * alias is the name the chunk exports.
 */
function exportListNames(text) {
  const out = new Set();
  for (const m of text.matchAll(/export\s*\{([^}]*)\}/g)) {
    for (const part of m[1].split(",")) {
      const seg = part.trim();
      if (!seg) continue;
      const as = seg.split(/\s+as\s+/);
      out.add((as.length === 2 ? as[1] : seg).trim());
    }
  }
  return out;
}

/**
 * The SERVED chunk's OWN export statement — the capture-side text the reading
 * copy's rendered table must still match.
 *
 * A skipped tail carries no file: the export list at the end of a chunk
 * references bindings declared in the earlier slices, so it does not parse
 * alone and the layer never fabricates it. The public-export-name gate
 * therefore has no derived text for that table and reports it UNCHECKED —
 * unless the tail records one. `text` is that text: the capture's own export
 * statement, so the two sides of the gate's comparison are two DIFFERENT
 * files (the served chunk's raw statement and the reading copy's rendering of
 * it) instead of the pristine compared with itself.
 *
 * The statement is matched by its PUBLIC NAMES, so a fragment of a string that
 * happens to contain `export {` is never mistaken for it, and nothing is
 * invented: when the capture carries no statement with the tail's names, the
 * tail stays a plain skipped record and the gate keeps reporting it unchecked.
 */
function captureExportStatement(captureText, tailText) {
  const want = exportListNames(tailText);
  if (!want.size) return null;
  let found = null;
  for (const m of captureText.matchAll(/export\s*\{[^}]*\}\s*;?/g)) {
    const names = exportListNames(m[0]);
    if (names.size !== want.size) continue;
    if (![...want].every((n) => names.has(n))) continue;
    found = m[0];
  }
  return found;
}

// ── windowize: cut only at statement starts; ≤350 lines, a single ───────
// ── oversized declaration is a window of its own ────────────────────────
function windowize(stmts) {
  const out = [];
  let cur = null;
  for (const s of stmts) {
    if (!cur) {
      cur = { first: s, last: s, count: 1, startLine: s.startLine, endLine: s.endLine };
      continue;
    }
    const projected = s.endLine - cur.startLine + 1;
    if (projected > MAX_WINDOW) {
      out.push(cur);
      cur = { first: s, last: s, count: 1, startLine: s.startLine, endLine: s.endLine };
    } else {
      cur.last = s;
      cur.count++;
      cur.endLine = s.endLine;
    }
  }
  if (cur) out.push(cur);
  return out;
}

// ── inline block scan (byte-exact, over the raw entry buffer) ───────────
function scanBlocks(buf) {
  const blocks = [];
  for (const [open, close, kind] of [
    ["<script", "</script", "script"],
    ["<style", "</style", "style"],
  ]) {
    let p = 0;
    let n = 0;
    while (true) {
      const i = buf.indexOf(open, p);
      if (i < 0) break;
      const after = buf[i + open.length];
      const boundary =
        after === 0x3e || after === 0x2f || after === 0x20 || after === 0x09 || after === 0x0a || after === 0x0d;
      if (!boundary) {
        p = i + open.length;
        continue;
      }
      const tagEnd = buf.indexOf(">", i);
      if (tagEnd < 0) break;
      const j = buf.indexOf(close, tagEnd + 1);
      if (j < 0) throw new Error(`unterminated <${kind}> opened at byte ${i}`);
      const tag = buf.subarray(i, tagEnd + 1).toString("utf8");
      const external = /\bsrc\s*=\s*["']/i.test(tag);
      if (external) {
        blocks.push({ kind, external: true, tag, openStart: i, contentStart: tagEnd + 1, contentEnd: j });
      } else {
        n++;
        const content = buf.subarray(tagEnd + 1, j);
        blocks.push({
          kind: /\btype\s*=\s*["']importmap["']/i.test(tag) ? "importmap" : kind,
          external: false,
          block: n,
          tag,
          openStart: i,
          contentStart: tagEnd + 1,
          contentEnd: j,
          bytes: content.length,
          sha256: sha256(content),
          text: content.toString("utf8"),
        });
      }
      p = j + close.length;
    }
  }
  return blocks.sort((a, b) => a.openStart - b.openStart);
}

// ── vendor-region locator (content-anchored, asserted) ──────────────────
// The three.js core bundled into the entry chunk starts at the huge WebGL
// constant/revision declaration that carries the "Copyright … Three.js
// Authors / SPDX-License-Identifier: MIT" license comment and ends at the
// `window.__THREE__` registration (three.js's own last executable statements).
// Everything before it is bundler machinery (Vite modulepreload polyfill +
// property helpers). Both are indexed whole; the guards below fail loudly if a
// refresh changes the shape. Obfuscated payloads (obfuscator.io string-table
// wrappers) also *contain* three.js code but their statements are flattened and
// their strings live in an encoded table, so no stable anchors exist — those
// files get no vendor region (they are sliced as app code; the README records
// this divergence).
function locateThreejs(stmts, pretty, obfuscated) {
  const text = (s) => s.text;
  const hasThreeWarn = pretty.includes("Multiple instances of Three.js being imported");
  const hasRenderer = pretty.includes("THREE.WebGLRenderer:");
  if (!hasThreeWarn && !hasRenderer) return null;
  // a chunk that only carries three.js's math/check strings (the mesh worker
  // merges three.js utilities without the renderer) has no renderer core to
  // anchor — nothing to protect as a vendor region
  if (!hasRenderer) return null;
  if (obfuscated) return null;
  const kRev = stmts.findIndex(
    (s) => /=\s*"1\d\d"\s*,/.test(text(s)) && text(s).includes("35044") && text(s).includes("300 es"),
  );
  const kEnd = stmts.findIndex((s) => text(s).includes("Multiple instances of Three.js being imported"));
  if (kRev < 0 || kEnd < 0 || kEnd <= kRev)
    throw new Error("three.js present but its vendor-region anchors did not match — shape drift");
  const rev = /=\s*"(1\d\d)"\s*,/.exec(text(stmts[kRev]))[1];
  const regionText = stmts
    .slice(kRev, kEnd + 1)
    .map((s) => text(s))
    .join("\n");
  if (!regionText.includes("WebGLRenderer"))
    throw new Error("located three.js region carries no WebGLRenderer — anchors are wrong");
  for (const bad of ["Play online", "menuarmory", "vr-rejoin"])
    if (regionText.includes(bad))
      throw new Error(`app marker "${bad}" inside the located three.js region — anchors are wrong`);
  const machineryText = stmts
    .slice(0, kRev)
    .map((s) => text(s))
    .join("\n");
  if (!machineryText.includes("modulepreload"))
    throw new Error("prefix before the three.js region is not the expected Vite modulepreload machinery");
  if (machineryText.includes("WebGLRenderer"))
    throw new Error("three.js code leaked into the machinery prefix");
  return { kRev, kEnd, rev };
}

// extend a section's start line upward over the leading block comment that
// prettier attaches to a statement but leaves outside its node range
function extendAOverComment(lines, A) {
  const isCmt = (s) => /^\s*(\*|\/\*\*?)/.test(s);
  if (A < 2) return A;
  const lineA = lines[A - 1];
  if (!/^\s*\*\/\s/.test(lineA)) return A; // comment closes on the statement's own line?
  let k = A - 2; // 0-based index of the line above
  if (k < 0 || !isCmt(lines[k])) return A;
  while (k >= 0 && isCmt(lines[k])) k--;
  return k + 2;
}

async function main() {
  const { mod: prettier, at } = await loadPrettier();
  console.log(`pinned prettier ${PINNED} (${at})${checkOnly ? " [--check: write nothing]" : ""}`);

  const manifest = JSON.parse(fs.readFileSync(path.join(proj, ".upstream", "manifest.json"), "utf8"));
  const captured = Object.keys(manifest.files).map((r) => r.split(path.sep).join("/")).sort();
  const captureBytes = (rel) => {
    const abs = path.join(proj, rel);
    if (!fs.existsSync(abs)) throw new Error(`capture file missing: ${rel}`);
    const buf = fs.readFileSync(abs);
    if (sha256(buf) !== manifest.files[rel].sha256)
      throw new Error(`${rel} on disk does not match .upstream/manifest.json — re-verify the capture first`);
    return buf;
  };

  const readableDir = path.join(proj, "readable");
  const srcDir = path.join(proj, "src");
  if (!checkOnly) {
    fs.mkdirSync(readableDir, { recursive: true });
    fs.mkdirSync(srcDir, { recursive: true });
  }
  const written = { readable: new Set(), src: new Set() }; // root-relative paths
  let archived = 0;
  // superseded derived files move to legacy/<date>/ (proposal (o): both the
  // superseded src/ and readable/ layers are archived, never silently dropped)
  const archiveSuperseded = (rel) => {
    const abs = path.join(proj, rel);
    if (!fs.existsSync(abs)) return;
    const old = fs.readFileSync(abs);
    const dest = path.join(proj, "legacy", TODAY, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (fs.existsSync(dest)) {
      if (!fs.readFileSync(dest).equals(old))
        throw new Error(`${rel}: superseded copy differs from legacy/${TODAY}/${rel} — refusing to overwrite the archive`);
      fs.rmSync(abs);
      return;
    }
    fs.renameSync(abs, dest);
    archived++;
    console.log(`SUPERSEDED ${rel} -> legacy/${TODAY}/${rel}`);
  };
  // The readable layer stays PRISTINE (the capture's own names); the rename
  // layer lives in src/ only, applied on every re-cut through the recorded map.
  const writeReadable = (rel, text) => {
    written.readable.add(rel.startsWith("readable/") ? rel.slice("readable/".length) : rel);
    if (checkOnly) {
      const abs = path.join(proj, rel);
      if (!fs.existsSync(abs) || fs.readFileSync(abs, "utf8") !== text) problem(`--check: ${rel} does not match a fresh render`);
      return;
    }
    const abs = path.join(proj, rel);
    if (fs.existsSync(abs) && fs.readFileSync(abs, "utf8") !== text) archiveSuperseded(rel);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, text);
  };
  const writeSrc = (file, text) => {
    written.src.add(file);
    if (checkOnly) {
      const abs = path.join(srcDir, file);
      if (!fs.existsSync(abs) || fs.readFileSync(abs, "utf8") !== text) problem(`--check: src/${file} does not match a fresh render`);
      return;
    }
    const abs = path.join(srcDir, file);
    if (fs.existsSync(abs) && fs.readFileSync(abs, "utf8") !== text) archiveSuperseded(path.posix.join("src", file));
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, text);
  };

  // ── recorded rename map (PLAN §5 campaign; may not exist on the first cut) ─
  const renameMapPath = path.join(proj, "rename-map.json");
  let renameMap = { files: {}, scoped: {} };
  if (fs.existsSync(renameMapPath)) {
    const parsedMap = JSON.parse(fs.readFileSync(renameMapPath, "utf8"));
    renameMap = { files: parsedMap.files || {}, scoped: parsedMap.scoped || {} };
    console.log(
      `derive: rename map: ${Object.keys(renameMap.files).length} word-boundary file(s), ${Object.keys(renameMap.scoped).length} indexed file(s)`,
    );
  }
  const recordFor = (file) => {
    const files = renameMap.files[file];
    const scoped = renameMap.scoped[file];
    return files || scoped ? { files, scoped } : null;
  };
  const renameStats = { slices: 0, flat: 0, indexed: 0, occurrences: 0 };

  const sources = [];
  const sections = [];
  const inlineMapBlocks = [];
  const notRendered = [];
  const inlineFiles = [];
  const pendingInlineSources = [];
  let slicedTotal = 0;
  let skippedTotal = 0;
  let wholeTotal = 0;

  const jsRelsAll = captured.filter((r) => /\.js$/i.test(r));
  const cssRels = captured.filter((r) => /\.css$/i.test(r));
  const htmlRels = captured.filter((r) => /\.html$/i.test(r));
  // entry chunk first (it is the game's entry point), then the small
  // bootstrap/terrain-pool pair, then the obfuscated payloads, then sw.js —
  // a reading order, not a build order
  const rank = (rel) =>
    /\/index-/.test(rel) ? 0 : /\/bootstrap-/.test(rel) ? 1 : /\/terrain-pool-/.test(rel) ? 2 : /\/sw\.js$/.test(rel) ? 9 : 5;
  const jsRels = jsRelsAll.slice().sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));

  // ── 1) JS: vendor regions -> wholeFile; app code -> statement-aligned slices
  for (const rel of jsRels) {
    const buf = captureBytes(rel);
    const text = buf.toString("utf8");
    if (!Buffer.from(text, "utf8").equals(buf)) throw new Error(`${rel} does not round-trip through utf8`);
    const { text: pretty, passes: prettyPasses } = await formatFix(prettier, text, "babel");
    if (pretty === text)
      throw new Error(`${rel}: prettier output is byte-identical to the capture — nothing to derive`);
    const sourceFile = prettyRelFor(rel);
    const tag = tagOf(rel);
    const stem = servedStem(rel);
    writeReadable(sourceFile, pretty);
    const lines = linesOf(pretty);

    const sourceMeta = {
      sourceFile,
      capture: rel,
      captureKind: "file",
      captureSha256: manifest.files[rel].sha256,
      captureBytes: buf.length,
      prettyLines: lines.length,
      prettyBytes: Buffer.byteLength(pretty, "utf8"),
      prettySha256: sha256(Buffer.from(pretty, "utf8")),
      prettyPasses,
      tag,
    };

    // ── app chunk: statement-aligned slicing ────────────────────────────
    const dbg = await prettier.__debug.parse(pretty, { parser: "babel" });
    const top = (dbg.ast.program || dbg.ast).body;
    const starts = [0];
    for (let i = 0; i < pretty.length; i++) if (pretty[i] === "\n") starts.push(i + 1);
    const lineOf = (off) => {
      let lo = 0,
        hi = starts.length - 1;
      while (lo < hi) {
        const mid = (lo + hi + 1) >> 1;
        if (starts[mid] <= off) lo = mid;
        else hi = mid - 1;
      }
      return lo + 1;
    };
    const stmts = top.map((n) => ({
      node: n,
      startLine: lineOf(n.start),
      endLine: lineOf(n.end - 1),
      text: pretty.slice(n.start, n.end),
    }));
    for (let i = 1; i < stmts.length; i++)
      if (stmts[i].startLine <= stmts[i - 1].endLine)
        throw new Error(`${rel}: statements ${i - 1}/${i} share a line — cannot slice at line boundaries`);
    if (!stmts.length) throw new Error(`${rel}: no top-level statements parsed`);

    const specials = [];
    const covered = new Array(stmts.length).fill(false);
    const claim = (a, b, block) => {
      if (a < 0 || b < a || b >= stmts.length) throw new Error(`${rel}: bad ${block.file} range ${a}-${b}`);
      for (let i = a; i <= b; i++) {
        if (covered[i]) throw new Error(`${rel}: ${block.file} overlaps another block at statement ${i}`);
        covered[i] = true;
      }
      specials.push({ ...block, A: stmts[a].startLine, B: stmts[b].endLine });
    };

    // vendor regions (content-anchored, guarded): only files that carry
    // three.js get them; the machinery prefix is wholeFile for the same reason
    let perFileWhole = 0;
    const obfuscated = /^const _0x[0-9a-f]+=_0x[0-9a-f]+;/.test(text);
    const region = locateThreejs(stmts, pretty, obfuscated);
    if (region) {
      claim(0, region.kRev - 1, {
        kind: "whole",
        file: `${stem}-machinery.js`,
        title: `${tag} — bundler machinery prefix (Vite modulepreload polyfill + helpers; whole-file, never sliced)`,
        desc: "placeholder (filled below)",
        body: "Vite modulepreload polyfill + bundler property helpers",
      });
      const machSec = specials[specials.length - 1];
      machSec.desc =
        `Lines ${machSec.A}-${machSec.B} of ${sourceFile}. The build's own machinery before the bundled ` +
        `three.js region: the Object.defineProperty helpers and the Vite modulepreload polyfill. ` +
        `Indexed whole (machinery rule), never sliced.`;
      claim(region.kRev, region.kEnd, {
        kind: "whole",
        file: `${stem}-vendor-threejs-r${region.rev}.js`,
        title: `${tag} — bundled three.js r${region.rev} core (vendor, whole-file, never sliced)`,
        desc: "placeholder (filled below)",
        body: `bundled three.js r${region.rev} core`,
      });
      const vendSec = specials[specials.length - 1];
      vendSec.A = extendAOverComment(lines, vendSec.A);
      vendSec.desc =
        `Lines ${vendSec.A}-${vendSec.B} of ${sourceFile}. The app's bundled three.js r${region.rev} core — the ` +
        `WebGL constants/revision declaration (carrying the Three.js Authors MIT license header) through the ` +
        `\`window.__THREE__\` revision registration, i.e. three.js's own last executable statements. ` +
        `Vendor rule — indexed whole-file in readable/, never sliced or rewritten; content-anchored with ` +
        `positive (WebGLRenderer / __THREE__ / revision) and negative (app markers) guards.`;
      console.log(
        `derive: ${rel}: three.js r${region.rev} vendor region lines ${vendSec.A}-${vendSec.B}, ` +
          `machinery lines ${machSec.A}-${machSec.B}`,
      );
    }

    const lastStmt = stmts[stmts.length - 1];
    if (
      lastStmt &&
      lastStmt.node.type === "ExportNamedDeclaration" &&
      !covered[stmts.length - 1] &&
      /^export\s*\{[\s\S]*\}\s*;?$/.test(lastStmt.text.trim()) &&
      !/\bfrom\b/.test(lastStmt.text)
    ) {
      // the served chunk's OWN export statement — the text the export gate
      // compares the reading copy's rendered table against. Without it the
      // gate has no derived text for this table and reports it unchecked.
      const capExport = captureExportStatement(text, lastStmt.text);
      claim(stmts.length - 1, stmts.length - 1, {
        kind: "skip",
        file: `${stem}-tail-export.js`,
        title: `${tag} — final export table (not sliced)`,
        desc: `Lines ${lastStmt.startLine}-${lastStmt.endLine}. The chunk's final export {…} table — the exported bindings live in the earlier slices; a standalone tail carries no new statements, so it is indexed only.${capExport ? ` The tail records the served chunk's own export statement (${rel}) as its text — the statement the reading copy's table must still match.` : ""}`,
        ...(capExport ? { text: capExport } : {}),
      });
    }

    // runs of uncovered statements -> windows
    const runs = [];
    for (let i = 0; i < stmts.length; i++) {
      if (covered[i]) continue;
      const run = [stmts[i]];
      while (i + 1 < stmts.length && !covered[i + 1]) run.push(stmts[++i]);
      runs.push(run);
    }
    const slices = [];
    for (const run of runs) for (const w of windowize(run)) slices.push(w);

    // blocks in line order, then re-tile so every line of the pretty is owned
    const blocks = [
      ...specials,
      ...slices.map((w) => ({ kind: "slice", A: w.startLine, B: w.endLine, count: w.count })),
    ];
    blocks.sort((a, b) => a.A - b.A);
    for (let i = 0; i < blocks.length; i++) {
      if (i === 0) blocks[i].A = 1;
      if (i + 1 < blocks.length) blocks[i].B = blocks[i + 1].A - 1;
      else blocks[i].B = lines.length;
    }

    let nn = 0;
    let perFileSkipped = 0;
    let perFileRenamed = 0;
    for (const b of blocks) {
      if (b.kind === "slice") {
        nn++;
        const num = String(nn).padStart(2, "0");
        const raw = lines.slice(b.A - 1, b.B).join("\n") + "\n";
        const file = `${stem}-${num}.js`; // src-relative served path
        const record = recordFor(file);
        let bodyText = raw;
        if (record) {
          try {
            bodyText = applyRecordedMap(raw, record);
          } catch (e) {
            throw new Error(`src/${file}: recorded rename map does not apply: ${e.message}`);
          }
          if (bodyText.split("\n").length !== raw.split("\n").length)
            throw new Error(`src/${file}: recorded rename changed the line count — refusing`);
          renameStats.slices++;
          renameStats.flat += Object.keys(record.files || {}).length;
          for (const hits of Object.values(record.scoped || {})) {
            renameStats.indexed++;
            renameStats.occurrences += hits.length;
          }
          perFileRenamed++;
        }
        const ms = markers(bodyText);
        const topWord = ms.length ? ms[0][0] : /^\s*import\b/.test(bodyText) ? "imports" : tag.toLowerCase();
        const oversized = b.count === 1 && b.B - b.A + 1 > MAX_WINDOW;
        const sliceText =
          `// ${tag} ${num} — ${topWord}\n` +
          `// Lines ${b.A}-${b.B} of ${sourceFile} (statement-aligned).\n` +
          bodyText;
        const chk = parses(sliceText);
        if (!chk.ok) throw new Error(`generated src/${file} does not parse standalone: ${chk.why}`);
        writeSrc(file, sliceText);
        sections.push({
          file,
          title: `${tag} ${num} — ${topWord}`,
          desc:
            `${oversized ? "Oversized single declaration (kept whole). " : ""}Lines ${b.A}-${b.B}. Markers: ${markerText(ms)}.` +
            (record ? " Range re-cut through the recorded semantic rename map." : ""),
          startLine: b.A,
          endLine: b.B,
          sourceFile,
        });
      } else if (b.kind === "whole") {
        perFileWhole++;
        sections.push({
          file: b.file,
          wholeFile: true,
          title: b.title,
          desc: b.desc.startsWith("Lines ") ? b.desc : `Lines ${b.A}-${b.B} of ${sourceFile}: ${b.desc}`,
          note: "whole-file region (vendor/machinery rule): indexed in readable/, never sliced",
          startLine: b.A,
          endLine: b.B,
          sourceFile,
        });
      } else {
        perFileSkipped++;
        sections.push({
          file: b.file,
          skipped: true,
          title: b.title,
          desc: b.desc,
          startLine: b.A,
          endLine: b.B,
          sourceFile,
          firstLine: lines[b.A - 1],
          lastLine: lines[b.B - 1],
          // the served chunk's own export statement, when this tail carries
          // one — the text the public-export-name gate compares the reading
          // copy's rendering against. A tail with no export table has nothing
          // to record and stays a plain index-only record.
          ...(b.text ? { text: b.text } : {}),
        });
      }
    }
    slicedTotal += nn;
    skippedTotal += perFileSkipped;
    wholeTotal += perFileWhole;
    sources.push({
      ...sourceMeta,
      slices: nn,
      derived:
        `readable + ${nn} statement-aligned slice(s)` +
        (perFileWhole ? ` + ${perFileWhole} wholeFile region(s)` : "") +
        (perFileSkipped ? ` + ${perFileSkipped} skipped section(s)` : "") +
        (perFileRenamed ? ` (${perFileRenamed} sliced through the recorded rename map)` : ""),
      what: rel === "assets/index-Dp6GxvJu.js" ? "app entry chunk" : obfuscated ? "obfuscator.io payload" : "app chunk",
      renameBindings: {}, // filled in below for chunks whose skipped sections spell renamed bindings
    });
    console.log(
      `derive: ${rel} -> ${sourceFile} (${lines.length} lines, ${nn} slices, ${perFileWhole} wholeFile, ${perFileSkipped} skipped${perFileRenamed ? `, ${perFileRenamed} renamed` : ""})`,
    );
  }

  // ── 2) CSS: readable pretty, wholeFile section (stylesheet rule) ────────
  for (const rel of cssRels) {
    const buf = captureBytes(rel);
    const text = buf.toString("utf8");
    const { text: pretty, passes: prettyPasses } = await formatFix(prettier, text, "css");
    if (pretty === text) throw new Error(`${rel}: prettier output is byte-identical to the capture`);
    const sourceFile = prettyRelFor(rel);
    writeReadable(sourceFile, pretty);
    const lines = linesOf(pretty);
    const tag = tagOf(rel);
    sections.push({
      file: `${servedStem(rel)}.css`,
      wholeFile: true,
      title: `${tag} — stylesheet (whole-file, never sliced)`,
      desc: `Lines 1-${lines.length} of ${sourceFile}. Whole-file (stylesheet rule): the capture stylesheet is indexed whole in readable/, never sliced.`,
      note: "whole-file (stylesheet, not sliced): CSS is indexed whole in readable/",
      startLine: 1,
      endLine: lines.length,
      sourceFile,
    });
    wholeTotal++;
    sources.push({
      sourceFile,
      capture: rel,
      captureKind: "file",
      captureSha256: manifest.files[rel].sha256,
      captureBytes: buf.length,
      prettyLines: lines.length,
      prettyBytes: Buffer.byteLength(pretty, "utf8"),
      prettySha256: sha256(Buffer.from(pretty, "utf8")),
      prettyPasses,
      tag,
      slices: 0,
      derived: "readable only (stylesheet, wholeFile)",
      what: "stylesheet",
      renameBindings: {},
    });
    console.log(`derive: ${rel} -> ${sourceFile} (${lines.length} lines, wholeFile stylesheet)`);
  }

  // ── 3) HTML entry documents: inline <script>/<style> scan + twins ───────
  for (const rel of htmlRels) {
    const buf = captureBytes(rel);
    const blocks = scanBlocks(buf);
    const inline = blocks.filter((b) => !b.external);
    const external = blocks.filter((b) => b.external);
    inlineFiles.push(rel);
    const entrySource = {
      source: rel,
      sourceBytes: buf.length,
      sourceSha256: sha256(buf),
      blocks: [],
      externalTags: external.map((b) => b.tag),
    };
    for (const b of external)
      console.log(`derive: ${rel}: external ${b.kind} (not derived): ${b.tag.slice(0, 90)}`);
    // served-path mirroring for inline twins: index.html -> readable/index-inline-N.pretty.*,
    // about/index.html -> readable/about/index-inline-N.pretty.*
    const entryTag = tagOf(rel);
    const entryDir = rel.includes("/") ? path.posix.dirname(rel.split(path.sep).join("/")) : "";
    for (const b of inline) {
      const isImportmap = b.kind === "importmap";
      const parser = isImportmap ? "json" : b.kind === "style" ? "css" : "babel";
      const DATA_TYPES = new Set(["application/ld+json", "application/json", "importmap", "speculationrules"]);
      const type = (/\btype\s*=\s*["']?([^"'\s>]+)/i.exec(b.tag)?.[1] ?? "").toLowerCase();
      if (b.kind === "script" && DATA_TYPES.has(type) && type !== "importmap") {
        const rec = {
          kind: b.kind,
          type,
          block: b.block,
          tagOpen: b.tag,
          byteStart: b.contentStart,
          byteEnd: b.contentEnd,
          bytes: b.bytes,
          sha256: b.sha256,
          notRendered: true,
          reason: `typed data block (<script type="${type}">) — data, not JS/CSS; recorded with range + sha256, no pretty pass`,
        };
        entrySource.blocks.push(rec);
        notRendered.push({
          capture: rel,
          kind: "inline-data",
          type,
          byteStart: b.contentStart,
          byteEnd: b.contentEnd,
          bytes: b.bytes,
          sha256: b.sha256,
          rendered: false,
          reason: rec.reason,
        });
        console.log(
          `derive: ${rel}: inline ${b.kind} #${b.block} (${type}) -> notRendered (bytes ${b.contentStart}-${b.contentEnd}, ${b.bytes} B)`,
        );
        continue;
      }
      const twinTag = `${entryTag}-inline-${b.block}`;
      const prettyRel = path.posix.join(entryDir, `${twinTag}.pretty.${isImportmap ? "json" : b.kind === "style" ? "css" : "js"}`);
      const { text: pretty, passes } = await formatFix(prettier, b.text, parser);
      if (pretty === b.text) throw new Error(`readable/${prettyRel} would be byte-identical to its capture source`);
      writeReadable("readable/" + prettyRel, pretty);
      const lines = linesOf(pretty);
      const prettyBuf = Buffer.from(pretty, "utf8");
      const rec = {
        file: `readable/${prettyRel}`,
        kind: b.kind,
        block: b.block,
        tagOpen: b.tag,
        byteStart: b.contentStart,
        byteEnd: b.contentEnd,
        bytes: b.bytes,
        sha256: b.sha256,
        parsedAs: parser,
        prettyPasses: passes,
        prettyLines: lines.length,
        prettyBytes: prettyBuf.length,
        prettySha256: sha256(prettyBuf),
        note: `${lines.length} lines prettified from ${b.bytes} B of inline ${b.kind} #${b.block} (capture bytes ${b.contentStart}-${b.contentEnd} of ${rel})`,
      };
      entrySource.blocks.push(rec);
      inlineMapBlocks.push(rec);
      sections.push({
        file: `${entryDir ? entryDir + "/" : ""}${twinTag}.${isImportmap ? "json" : b.kind === "style" ? "css" : "js"}`,
        wholeFile: true,
        title: `${twinTag} — inline ${b.kind} block (whole-file, never sliced)`,
        desc: `Lines 1-${lines.length} of readable/${prettyRel}. Whole-file: the inline ${b.kind} block (${b.bytes} B at bytes ${b.contentStart}-${b.contentEnd} of ${rel}) is indexed whole and never sliced.`,
        note: `whole-file (inline ${b.kind} block, not sliced)`,
        startLine: 1,
        endLine: lines.length,
        sourceFile: `readable/${prettyRel}`,
      });
      wholeTotal++;
      sources.push({
        sourceFile: `readable/${prettyRel}`,
        capture: rel,
        captureKind: `inline-${b.kind}`,
        captureBlock: b.block,
        captureByteStart: b.contentStart,
        captureByteEnd: b.contentEnd,
        captureSha256: b.sha256,
        captureBytes: b.bytes,
        prettyLines: lines.length,
        prettyBytes: prettyBuf.length,
        prettySha256: sha256(prettyBuf),
        prettyPasses: passes,
        tag: twinTag,
        slices: 0,
        derived: "readable only (inline block, wholeFile)",
        what: `inline ${b.kind}`,
        renameBindings: {},
      });
      console.log(
        `derive: ${rel}: inline ${b.kind} #${b.block} -> readable/${prettyRel} (${lines.length} lines, bytes ${b.contentStart}-${b.contentEnd})`,
      );
    }
    if (!inline.length) console.log(`derive: ${rel}: no inline <script>/<style> content blocks — no inline twins`);
    pendingInlineSources.push(entrySource);
  }

  // ── 4) readable/index-inline-map.json ──────────────────────────────────
  const dataBlocks = inlineMapBlocks.filter((b) => b.notRendered).length;
  const twins = inlineMapBlocks.filter((b) => b.file);
  const inlineMap = {
    note:
      "Inline <script>/<style> content blocks of the captured entry documents (PLAN §5 inline-block rule). " +
      "byteStart/byteEnd are content offsets (tags excluded, end exclusive) into the captured document; sha256 is over those " +
      "exact bytes. Real JS/CSS blocks are rendered to readable/<served dir>/<doc>-inline-N.pretty.{js,css} twins with pinned prettier " +
      "3.9.6 (module API); typed non-code data blocks (application/ld+json) are recorded as notRendered " +
      "(range + sha256, no render) — see split-spec.json notRendered.",
    scanned: inlineFiles,
    contentBlocks: inlineMapBlocks.length,
    twins: twins.map((b) => b.file),
    dataBlocks,
    sources: pendingInlineSources,
  };
  writeReadable("readable/index-inline-map.json", JSON.stringify(inlineMap, null, 2) + "\n");
  console.log(`derive: readable/index-inline-map.json (${inlineMapBlocks.length} inline block(s), ${dataBlocks} notRendered)`);

  // ── 4b) renameBindings: the chunk's fired app rules, recorded per source
  //        for the reconstruction gates (t)(1) — only names the chunk's
  //        index-only skipped sections actually spell get recorded.
  {
    const namesPath = path.join(proj, "tools", "names.json");
    if (fs.existsSync(namesPath)) {
      const appByCapture = JSON.parse(fs.readFileSync(namesPath, "utf8")).app || {};
      for (const src of sources) {
        if (!src.capture) continue;
        const app = appByCapture[src.capture] || {};
        if (!Object.keys(app).length) continue;
        const skippedText = sections
          .filter((s) => s.skipped === true && s.sourceFile === src.sourceFile)
          .map((s) => readLines(path.join(proj, s.sourceFile)).slice(s.startLine - 1, s.endLine).join("\n"))
          .join("\n");
        const bindings = {};
        for (const [from, to] of Object.entries(app)) {
          const re = new RegExp(`(?<![\\w$])${from.replace(/[$]/g, "\\$")}(?![\\w$])`);
          if (re.test(skippedText)) bindings[from] = to;
        }
        src.renameBindings = bindings;
        if (Object.keys(bindings).length)
          console.log(`derive: ${src.capture}: renameBindings (skipped-section reach): ${Object.keys(bindings).length} name(s)`);
      }
    }
  }

  // ── 3.5) non-code payloads: hashed notRendered records (no pretty pass) ─
  const KIND_OF = [
    [/\.(png|jpe?g|webp|gif|svg|avif|ico)$/i, "image"],
    [/\.(mp4|webm)$/i, "video"],
    [/\.(mp3|ogg|wav|m4a)$/i, "audio"],
    [/\.(woff2?|ttf|otf)$/i, "font"],
    [/\.(glb|gltf)$/i, "model"],
    [/\.(json|webmanifest|xml|txt)$/i, "data"],
  ];
  for (const rel of captured) {
    const kind = KIND_OF.find(([re]) => re.test(rel))?.[1];
    if (!kind) continue;
    const buf = captureBytes(rel);
    notRendered.push({
      capture: rel,
      kind,
      bytes: buf.length,
      sha256: manifest.files[rel].sha256,
      rendered: false,
      reason: `${kind} payload — the capture stays byte-exact under .upstream/manifest.json; recorded here hashed, no pretty pass`,
    });
  }

  // ── 5) prune orphan derived files: archive to legacy/<date>/ (proposal (o)) ─
  let pruned = 0;
  const walkDerived = (dir, root, keep, exts, label) => {
    if (!fs.existsSync(dir)) return;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) {
        walkDerived(p, root, keep, exts, label);
        if (!checkOnly && fs.readdirSync(p).length === 0) fs.rmSync(p, { recursive: true });
        continue;
      }
      if (!exts.test(e.name)) continue;
      const rel = path.relative(root, p).split(path.sep).join("/");
      if (keep.has(rel)) continue;
      if (checkOnly) {
        problem(`${label}/${rel} is not claimed by the plan (orphan — re-derive to archive it)`);
        continue;
      }
      archiveSuperseded(`${label}/${rel}`);
      pruned++;
      console.log(`derive: archived orphan derived file ${label}/${rel}`);
    }
  };
  walkDerived(readableDir, readableDir, written.readable, /\.pretty\.(js|css)$/, "readable");
  walkDerived(srcDir, srcDir, written.src, /\.js$/, "src");

  // ── 6) split-spec.json (2-space indent + trailing newline) ─────────────
  const appJs = sources.filter((s) => s.derived.startsWith("readable +"));
  const vendorJsS = sources.filter((s) => /wholeFile/.test(s.derived) && s.capture.endsWith(".js"));
  const cssSources = sources.filter((s) => s.sourceFile.endsWith(".pretty.css") && s.captureKind === "file");
  const inlineTwinSources = sources.filter((s) => String(s.captureKind).startsWith("inline-"));
  const firstSlice = sections.find((s) => !s.wholeFile && !s.skipped);
  const spec = {
    project: "voxelrush",
    kind: "statement-aligned-slices",
    defaultFile: `src/${firstSlice.file}`,
    note:
      "VOXEL RUSH (https://play.voxelrush.app/) is capture-class: a Vite production build of a browser FPS " +
      "('Free Browser FPS with Tanks, Helicopters & Drones': 40-soldier flag battles, Team Deathmatch, a voxel " +
      "survival sandbox) served at the origin root by Cloudflare. §0.4 fork-over-mirror was checked on " +
      "2026-10-13 — the page and its JS reference no public source repo (see README), so the mirror stands. " +
      "Structure decided from BYTES (tools/probe-structure.mjs, 2026-10-15): no sourceMappingURL and no *.map " +
      "files; no module factories (no __webpack_require__/Turbopack signatures) — the entry chunk " +
      "assets/index-Dp6GxvJu.js is a flat Vite/Rollup ESM module (one static from-import, the Vite modulepreload " +
      "machinery prefix, the bundled three.js r169 core, then the app) and the world payloads are the " +
      "obfuscator.io chain assets/bootstrap-C4umvuQD.js -> assets/main-Bs7z9e_r.js -> " +
      "assets/terrain-pool-Dvsi82A-.js (dynamic-imported from base64 string tables), so statement-aligned " +
      "slices are the true boundary. Derived pipeline (the served path is the truth, PLAN §5 served-path " +
      "mirroring): capture -> pinned prettier 3.9.6 (module API, default options, applied to a layout FIXED " +
      "POINT, prettyPasses recorded — never the CLI: it respects .gitignore and can silently echo its input) -> " +
      "readable/<served path>.pretty.js|css per captured JS/CSS file (nested dirs kept, no __-flattening: " +
      "assets/index-Dp6GxvJu.js -> readable/assets/index-Dp6GxvJu.pretty.js); every pretty is provably NOT " +
      "byte-identical to its capture source. src/: statement-aligned slices src/<served path>-NN.js of every app " +
      "chunk (top-level declaration boundaries only, ~250-350 line windows; oversized single declarations stay " +
      "whole) with an exact 2-line provenance header. Every slice parses standalone under `node --input-type=module " +
      "--check -` and round-trips byte-exact to its recorded readable line range — through the recorded rename map " +
      "where the slice is renamed. Vendor rule — wholeFile sections, never sliced, never renamed: inside " +
      "assets/index-Dp6GxvJu.js the bundled three.js r169 core is content-anchored (the WebGL constants/revision " +
      "declaration carrying the Three.js Authors MIT license through the `window.__THREE__` registration) and the " +
      "Vite modulepreload machinery prefix before it is wholeFile too, both with positive + negative guards " +
      "asserted. Stylesheet rule — assets/index-D16eXMZ8.css is wholeFile. The obfuscated payloads " +
      "(local-server-worker, main, bootstrap, terrain-pool, sw.js) are prettified and sliced like app code; their " +
      "identifiers stay obfuscator-mangled. The obfuscator.io decoder + base64 string table are MACHINERY " +
      "(obfuscation plumbing embedded inside app statements — no stable anchors exist to band them wholeFile), so " +
      "they are sliced as app code, stay obfuscated and are recorded as a names.json review exclusion (PLAN §5). " +
      "Non-standalone parts are skipped sections, indexed but never sliced: a chunk's final export {…} table. " +
      "Inline <script>/<style> scan: index.html carries a boot <script>, three <style> blocks and a closing " +
      "storage-cleanup <script> (plus an application/ld+json data block recorded notRendered, no pretty pass); " +
      "about/index.html and ru/index.html each carry one <style> and one ld+json block — every inline content " +
      "block gets a wholeFile twin readable/<entry>-inline-N.pretty.{js,css} + a readable/index-inline-map.json " +
      "entry with its exact byte range and sha256. Binary payloads (images, audio, data files) are hashed " +
      "notRendered records (bytes + sha256), never prettified. Rename layer (PLAN §5 campaign, pipeline " +
      "apply -> recover -> derive -> gates): tools/names.json (reviewed, `app` rules keyed by capture rel) -> " +
      "tools/apply-names.mjs -> rename-map.json (recovered mechanically by tools/recover-scoped-map.mjs) -> " +
      "re-applied here on every re-cut; the chunk's fired app bindings are recorded as sources[].renameBindings " +
      "for the reconstruction gates (turfwar's (t)(1) mechanism). Guards carried: marked " +
      "FunctionDeclaration/ClassDeclaration ids + shorthand-property refusal at preflight (kowloon (p) fixes), " +
      "brace-depth template scanning (vanta7 (r) fix), program-scope occurrences in wholeFile vendor regions " +
      "refused + per-source line cache (pelota (s) fixes), skipped-section reach via renameBindings ((t)(1)), " +
      "the `of`/`in` KEYWORD-position guard in the reconstruction binding-map path (dune-arrakis (x) fix), " +
      "per-chunk target uniqueness (aetherfall/rive-city (ad)), the canonical record-manifest SKIP/NOT_CAPTURED " +
      "sets with --check (proposal (u)), the multi-pass prettier fixed-point re-render check in tools/audit.js " +
      "(proposal (t)(3)) and the token-based import/asset specifier extractor (embervale-adventure, proposal " +
      "(ab)). The IIFE re-root guard (ag) is carried but scoped to the true whole-program IIFE shape (a " +
      "flat module with top-level call statements must NOT be re-rooted — a-place-beyond's refinement, proposal " +
      "(ah)); no sliced chunk here is a whole-program IIFE. Capture bytes are untouched by everything above; " +
      "superseded derived files are archived to legacy/<date>/ (proposal (o), both readable/ and src/). Re-cut " +
      "with `node tools/derive.mjs` after any capture refresh.",
    renderOptions: {
      _default:
        "prettier 3.9.6, module API, default options, applied to a layout fixed point (re-format until stable; prettyPasses in sources)",
      js: "parser babel, no plugins",
      css: "parser css, no plugins",
      json: "parser json, no plugins (inline importmap/data blocks, if any)",
      note: "The prettier CLI respects .gitignore and is never used; the module API renders every pretty.",
    },
    source:
      `readable/: ${sources.filter((s) => s.sourceFile.endsWith(".pretty.js")).length} JS pretties ` +
      `(${appJs.length} chunk(s) sliced, ${vendorJsS.length} wholeFile JS) + ` +
      `${cssSources.length} CSS pretties + ${inlineTwinSources.length} inline twin(s); ` +
      `src/: ${slicedTotal} statement-aligned slices across ${appJs.length} chunk(s); ` +
      `${skippedTotal} skipped section(s); ${wholeTotal} wholeFile section(s); ` +
      `capture: ${captured.length} files / ${(Object.values(manifest.files).reduce((a, f) => a + f.bytes, 0) / 1048576).toFixed(1)} MB under ` +
      `.upstream/manifest.json; inline scan: ${inlineFiles.join(", ")} (${inlineMapBlocks.length} inline content block(s), ${dataBlocks} notRendered).`,
    inline: {
      scanned: inlineFiles,
      contentBlocks: inlineMapBlocks.length,
      twins: twins.map((b) => b.file),
      dataBlocks,
      notRendered: notRendered.length,
      note:
        `${inlineMapBlocks.length} inline content block(s) across the captured HTML documents — readable twins + ` +
        `readable/index-inline-map.json with exact byte ranges and sha256; ld+json data blocks are recorded ` +
        `notRendered (no pretty pass)`,
    },
    rename: {
      map: "rename-map.json",
      slices: renameStats.slices,
      wordBoundaryNames: renameStats.flat,
      indexedNames: renameStats.indexed,
      indexedOccurrences: renameStats.occurrences,
      note:
        "Semantic rename layer (PLAN §5 campaign; pipeline apply -> recover -> derive -> gates). tools/names.json (reviewed) is applied by " +
        "tools/apply-names.mjs; rename-map.json is recovered mechanically by tools/recover-scoped-map.mjs and re-applied on every re-cut. The readable " +
        "layer stays pristine (the capture's own names); only src/ carries semantic names. sources[].renameBindings records the fired app bindings the " +
        "chunk's index-only skipped sections spell — the reconstruction gates (verify-rename / check-chunk) reach those sections through the binding map " +
        "(turfwar's (t)(1) mechanism). Identifiers in unrenamed slices are the bundle's own minified/obfuscated names; the obfuscator.io decoder + " +
        "base64 string table are recorded as machinery (a names.json review exclusion) and stay obfuscated.",
    },
    sources,
    sections,
    notRendered,
  };
  const specText = JSON.stringify(spec, null, 2) + "\n";
  const specPath = path.join(proj, "split-spec.json");
  if (checkOnly) {
    if (!fs.existsSync(specPath)) problem("split-spec.json missing (derive with: node tools/derive.mjs)");
    else if (fs.readFileSync(specPath, "utf8") !== specText) problem("split-spec.json is stale (re-derive with: node tools/derive.mjs)");
  } else {
    fs.writeFileSync(specPath, specText);
  }

  // ── 7) self-check (tools/audit.js is the authoritative gate) ────────────
  let bad = 0;
  const bySource = new Map();
  for (const s of sections) {
    if (!bySource.has(s.sourceFile)) bySource.set(s.sourceFile, []);
    bySource.get(s.sourceFile).push(s);
  }
  for (const [sourceFile, list] of bySource) {
    if (!fs.existsSync(path.join(proj, sourceFile))) continue;
    const lines = readLines(path.join(proj, sourceFile));
    const sorted = [...list].sort((a, b) => a.startLine - b.startLine);
    if (sorted[0].startLine !== 1) {
      console.error(`TILING FAIL ${sourceFile}: starts at line ${sorted[0].startLine}`);
      bad++;
    }
    for (let i = 1; i < sorted.length; i++)
      if (sorted[i].startLine !== sorted[i - 1].endLine + 1) {
        console.error(`TILING FAIL ${sourceFile}: gap/overlap at ${sorted[i].file}`);
        bad++;
      }
    if (sorted[sorted.length - 1].endLine !== lines.length) {
      console.error(`TILING FAIL ${sourceFile}: does not reach EOF (${lines.length})`);
      bad++;
    }
  }
  let parsed = 0;
  let ranged = 0;
  let roundOK = 0;
  for (const s of sections) {
    if (s.wholeFile || s.skipped) continue;
    ranged++;
    const abs = path.join(srcDir, s.file);
    if (!fs.existsSync(abs)) {
      console.error(`MISSING src/${s.file}`);
      bad++;
      continue;
    }
    const text = fs.readFileSync(abs, "utf8");
    const nl2 = text.indexOf("\n", text.indexOf("\n") + 1);
    const body = text.slice(nl2 + 1);
    const raw = readLines(path.join(proj, s.sourceFile)).slice(s.startLine - 1, s.endLine).join("\n") + "\n";
    const record = recordFor(s.file);
    let expected = raw;
    try {
      expected = record ? applyRecordedMap(raw, record) : raw;
    } catch (e) {
      console.error(`ROUND-TRIP FAIL src/${s.file}: recorded map does not apply: ${e.message}`);
      bad++;
      continue;
    }
    if (body !== expected) {
      console.error(`ROUND-TRIP FAIL src/${s.file}${record ? " (through the recorded rename map)" : ""}`);
      bad++;
    } else roundOK++;
    if (!parses(text).ok) {
      console.error(`PARSE FAIL src/${s.file}`);
      bad++;
    } else parsed++;
  }
  let prettyParsed = 0;
  for (const s of sources) {
    if (!s.sourceFile.endsWith(".pretty.js")) continue;
    if (!parses(fs.readFileSync(path.join(proj, s.sourceFile), "utf8")).ok) {
      console.error(`PARSE FAIL ${s.sourceFile}`);
      bad++;
    } else prettyParsed++;
  }
  console.log(
    `derive: ${written.readable.size} readable file(s), ${written.src.size} src slices ` +
      `(${parsed}/${ranged} parse standalone, ${roundOK}/${ranged} round-trip byte-exact), ` +
      `${skippedTotal} skipped, ${wholeTotal} wholeFile, ${prettyParsed} pretty js parse clean, ` +
      `${notRendered.length} notRendered, ${archived} superseded file(s) -> legacy/${TODAY}/, ${pruned} archived orphan(s), ` +
      `rename map: ${renameStats.slices} renamed slice(s) — ${renameStats.flat} word-boundary name(s), ` +
      `${renameStats.indexed} indexed name(s) over ${renameStats.occurrences} occurrence(s) — ` +
      `self-check ${bad || problems.length ? "FAILURE" : "clean"}`,
  );
  if (bad || problems.length) process.exit(1);
  if (checkOnly) console.log(`DERIVE CHECK PASS — readable/ + src/ + split-spec.json are current under pinned prettier ${PINNED}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
