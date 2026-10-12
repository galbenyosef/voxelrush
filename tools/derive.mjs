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
// Pipeline:
//   each capture *.js -> pinned prettier 3.9.6 (module API — the CLI respects
//                        .gitignore and can silently echo its input), formatted
//                        to a layout fixed point (1-2 passes; the member-chain
//                        layout is not idempotent on every optional-chain
//                        argument pattern) -> readable/<name>.pretty.js
//                        (capture-root-relative name, nested dirs flattened
//                        with __; the capture sits at the repo root).
//   the capture *.css -> readable/<name>.pretty.css, wholeFile section
//                        (stylesheet rule: stylesheets are never sliced).
//   vendor regions     -> wholeFile sections (vendor rule): inside the entry
//                        chunk assets/index-*.js, the bundled three.js r169
//                        core is content-anchored (license/revision statement
//                        through the `window.__THREE__` registration) and the
//                        Vite modulepreload/helper prefix before it is
//                        machinery — both indexed whole, never sliced, with
//                        positive + negative guards asserted.
//   app code           -> statement-aligned slices src/<name>-NN.js at
//                        top-level declaration boundaries, ~250-350 line
//                        windows (oversized single declarations stay whole),
//                        exact 2-line provenance header; every slice is
//                        parse-checked with `node --input-type=module
//                        --check -` and round-trips byte-exact to its readable
//                        line range.
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
// carry obfuscator.io-mangled identifiers — identification by readable names is
// the rename campaign (PLAN §5), recorded as an open task in README.md.
//
// Non-standalone parts are indexed but never sliced (skipped sections): a
// chunk's final `export {…}` table (the bindings live in the earlier slices).
//
// usage:
//   node tools/derive.mjs
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const proj = path.resolve(here, "..");
const PINNED = "3.9.6";
const MIN_WINDOW = 250;
const MAX_WINDOW = 350;
const TODAY = "2026-10-13";
const ROOT = ""; // capture root (the served site root — capture sits at the repo root)

const sha256 = (buf) => crypto.createHash("sha256").update(buf).digest("hex");
const readLines = (abs) => {
  const t = fs.readFileSync(abs, "utf8");
  const l = t.split("\n");
  if (l.length && l[l.length - 1] === "") l.pop();
  return l;
};
const linesOf = (text) => text.replace(/\n$/, "").split("\n");
const lineOf = (text, offset) => text.slice(0, offset).split("\n").length;

// capture-relative name -> readable twin name (capture root stripped, dirs flattened)
const tagOf = (capRel) => {
  const rel = capRel.startsWith(ROOT) ? capRel.slice(ROOT.length) : capRel;
  return rel.replace(/\.(js|css)$/i, "").split("/").join("__");
};
const prettyRelFor = (capRel) =>
  "readable/" + tagOf(capRel) + (/\.css$/i.test(capRel) ? ".pretty.css" : ".pretty.js");

// ── pinned prettier (module API, exactly 3.9.6) ─────────────────────────
async function loadPrettier() {
  const candidates = [
    process.env.PRETTIER_MJS,
    path.join(proj, "node_modules", "prettier", "index.mjs"),
    "D:/repos/mirrors/metropolygonia/node_modules/prettier/index.mjs",
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

// format to a layout fixed point: prettier 3.9.6's member-chain layout is not
// idempotent on some optional-chain argument patterns (pass 1 breaks
// `t.modules\n  .get(...)`, pass 2 keeps it joined and splits the arguments),
// so the recorded method is "format to a fixed point (1 or 2 passes)" — the
// returned text is always a layout fixed point of the pinned version, and
// audit re-renders with the same method and requires byte-equality.
async function formatFix(prettier, text, parser) {
  const p1 = await prettier.format(text, { parser });
  const p2 = await prettier.format(p1, { parser });
  if (p2 === p1) return { text: p1, passes: 1 };
  const p3 = await prettier.format(p2, { parser });
  if (p3 !== p2) throw new Error(`prettier ${parser} has no layout fixed point in 3 passes`);
  return { text: p2, passes: 2 };
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
  console.log(`pinned prettier ${PINNED} (${at})`);

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
  fs.mkdirSync(readableDir, { recursive: true });
  fs.mkdirSync(srcDir, { recursive: true });
  const written = { readable: new Set(), src: new Set() };

  const sources = [];
  const sections = [];
  const notRendered = [];
  let inlineFiles = [];
  let slicedTotal = 0;
  let skippedTotal = 0;

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
    fs.writeFileSync(path.join(proj, sourceFile), pretty);
    written.readable.add(path.basename(sourceFile));
    const lines = linesOf(pretty);
    const tag = tagOf(rel);

    // ── app chunk: statement-aligned slicing ────────────────────────────
    const dbg = await prettier.__debug.parse(pretty, { parser: "babel" });
    const top = (dbg.ast.program || dbg.ast).body;
    const stmts = top.map((n) => ({
      node: n,
      startLine: lineOf(pretty, n.start),
      endLine: lineOf(pretty, n.end),
      text: pretty.slice(n.start, n.end),
    }));
    for (let i = 1; i < stmts.length; i++)
      if (stmts[i].startLine <= stmts[i - 1].endLine)
        throw new Error(`${rel}: statements ${i - 1}/${i} share a line — cannot slice at line boundaries`);

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
    let wholeFileRegions = 0;
    const obfuscated = /^const _0x[0-9a-f]+=_0x[0-9a-f]+;/.test(text);
    const region = locateThreejs(stmts, pretty, obfuscated);
    if (region) {
      claim(0, region.kRev - 1, {
        kind: "whole",
        file: `${tag}-machinery.js`,
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
        file: `${tag}-vendor-threejs-r${region.rev}.js`,
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
      wholeFileRegions = 2;
      console.log(
        `derive: ${rel}: three.js r${region.rev} vendor region lines ${vendSec.A}-${vendSec.B}, ` +
          `machinery lines ${machSec.A}-${machSec.B}`,
      );
    }

    let exportSkip = null;
    const lastStmt = stmts[stmts.length - 1];
    if (
      lastStmt &&
      lastStmt.node.type === "ExportNamedDeclaration" &&
      !covered[stmts.length - 1] &&
      /^export\s*\{[\s\S]*\}\s*;?$/.test(lastStmt.text.trim()) &&
      !/\bfrom\b/.test(lastStmt.text)
    ) {
      claim(stmts.length - 1, stmts.length - 1, {
        kind: "skip",
        file: `${tag}-tail-export.js`,
        title: `${tag} — final export table (not sliced)`,
        desc: `Lines ${lastStmt.startLine}-${lastStmt.endLine}. The chunk's final export {…} table — the exported bindings live in the earlier slices; a standalone tail carries no new statements, so it is indexed only.`,
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
    let perFileVendor = 0;
    for (const b of blocks) {
      if (b.kind === "slice") {
        nn++;
        const num = String(nn).padStart(2, "0");
        const body = lines.slice(b.A - 1, b.B).join("\n") + "\n";
        const ms = markers(body);
        const topWord = ms.length ? ms[0][0] : /^\s*import\b/.test(body) ? "imports" : tag.toLowerCase();
        const oversized = b.count === 1 && b.B - b.A + 1 > MAX_WINDOW;
        const file = `${tag}-${num}.js`;
        const sliceText =
          `// ${tag} ${num} — ${topWord}\n` +
          `// Lines ${b.A}-${b.B} of ${sourceFile} (statement-aligned).\n` +
          body;
        const chk = parses(sliceText);
        if (!chk.ok) throw new Error(`generated src/${file} does not parse standalone: ${chk.why}`);
        fs.writeFileSync(path.join(srcDir, file), sliceText);
        written.src.add(file);
        sections.push({
          file,
          title: `${tag} ${num} — ${topWord}`,
          desc: `${oversized ? "Oversized single declaration (kept whole). " : ""}Lines ${b.A}-${b.B}. Markers: ${markerText(ms)}.`,
          startLine: b.A,
          endLine: b.B,
          sourceFile,
        });
      } else if (b.kind === "whole") {
        perFileVendor++;
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
        });
      }
    }
    slicedTotal += nn;
    skippedTotal += perFileSkipped;
    sources.push({
      sourceFile,
      capture: rel,
      captureKind: "file",
      captureSha256: manifest.files[rel].sha256,
      captureBytes: buf.length,
      prettyLines: lines.length,
      prettyBytes: Buffer.byteLength(pretty, "utf8"),
      prettyPasses,
      idempotent: true,
      tag,
      slices: nn,
      derived:
        `readable + ${nn} statement-aligned slice(s)` +
        (perFileVendor ? ` + ${perFileVendor} wholeFile region(s)` : "") +
        (perFileSkipped ? ` + ${perFileSkipped} skipped section(s)` : ""),
    });
    console.log(
      `derive: ${rel} -> ${sourceFile} (${lines.length} lines, ${nn} slices, ${perFileVendor} wholeFile, ${perFileSkipped} skipped)`,
    );
  }

  // ── 2) CSS: readable pretty, wholeFile section (stylesheet rule) ────────
  for (const rel of cssRels) {
    const buf = captureBytes(rel);
    const text = buf.toString("utf8");
    const { text: pretty, passes: prettyPasses } = await formatFix(prettier, text, "css");
    if (pretty === text) throw new Error(`${rel}: prettier output is byte-identical to the capture`);
    const sourceFile = prettyRelFor(rel);
    fs.writeFileSync(path.join(proj, sourceFile), pretty);
    written.readable.add(path.basename(sourceFile));
    const lines = linesOf(pretty);
    const tag = tagOf(rel);
    sections.push({
      file: `${tag}.css`,
      wholeFile: true,
      title: `${tag} — stylesheet (whole-file, never sliced)`,
      desc: `Lines 1-${lines.length} of ${sourceFile}. Whole-file (stylesheet rule): the capture stylesheet is indexed whole in readable/, never sliced.`,
      note: "whole-file (stylesheet, not sliced): CSS is indexed whole in readable/",
      startLine: 1,
      endLine: lines.length,
      sourceFile,
    });
    sources.push({
      sourceFile,
      capture: rel,
      captureKind: "file",
      captureSha256: manifest.files[rel].sha256,
      captureBytes: buf.length,
      prettyLines: lines.length,
      prettyBytes: Buffer.byteLength(pretty, "utf8"),
      prettyPasses,
      idempotent: true,
      tag,
      slices: 0,
      derived: "readable only (stylesheet, wholeFile)",
    });
    console.log(`derive: ${rel} -> ${sourceFile} (${lines.length} lines, wholeFile stylesheet)`);
  }

  // ── 3) HTML entry documents: inline <script>/<style> scan + twins ───────
  const inlineMapBlocks = [];
  for (const rel of htmlRels) {
    const buf = captureBytes(rel);
    const blocks = scanBlocks(buf);
    const inline = blocks.filter((b) => !b.external);
    const external = blocks.filter((b) => b.external);
    inlineFiles.push(rel);
    for (const b of external)
      console.log(`derive: ${rel}: external ${b.kind} (not derived): ${b.tag.slice(0, 90)}`);
    if (!inline.length) {
      console.log(`derive: ${rel}: no inline <script>/<style> content blocks — no inline twins`);
      continue;
    }
    const entryTag = rel.replace(/\.html$/i, "").split("/").join("__");
    for (const b of inline) {
      const isImportmap = b.kind === "importmap";
      const parser = isImportmap ? "json" : b.kind === "style" ? "css" : "babel";
      const DATA_TYPES = new Set(["application/ld+json", "application/json", "importmap", "speculationrules"]);
      const type = (/\btype\s*=\s*["']?([^"'\s>]+)/i.exec(b.tag)?.[1] ?? "").toLowerCase();
      if (b.kind === "script" && DATA_TYPES.has(type) && type !== "importmap") {
        notRendered.push({
          capture: rel,
          kind: "inline-data",
          type,
          byteStart: b.contentStart,
          byteEnd: b.contentEnd,
          bytes: b.bytes,
          sha256: b.sha256,
          rendered: false,
          reason: `typed data block (<script type="${type}">) — data, not JS/CSS; recorded with range + sha256, no pretty pass`,
        });
        continue;
      }
      const tag = `${entryTag}-inline-${b.block}`;
      const prettyFile = `${tag}.pretty.${isImportmap ? "json" : b.kind === "style" ? "css" : "js"}`;
      const pretty = (await formatFix(prettier, b.text, parser)).text;
      if (pretty === b.text)
        throw new Error(`readable/${prettyFile} would be byte-identical to its capture source`);
      fs.writeFileSync(path.join(readableDir, prettyFile), pretty);
      written.readable.add(prettyFile);
      const lines = linesOf(pretty);
      const prettyBuf = Buffer.from(pretty, "utf8");
      inlineMapBlocks.push({
        file: `readable/${prettyFile}`,
        source: rel,
        kind: b.kind,
        byteStart: b.contentStart,
        byteEnd: b.contentEnd,
        bytes: b.bytes,
        sha256: b.sha256,
        prettyFile: `readable/${prettyFile}`,
        prettyBytes: prettyBuf.length,
      });
      sections.push({
        file: `${tag}.${isImportmap ? "json" : b.kind === "style" ? "css" : "js"}`,
        wholeFile: true,
        title: `${tag} — inline ${b.kind} block (whole-file, never sliced)`,
        desc: `Lines 1-${lines.length} of readable/${prettyFile}. Whole-file: the inline ${b.kind} block (${b.bytes} B at bytes ${b.contentStart}-${b.contentEnd} of ${rel}) is indexed whole and never sliced.`,
        note: `whole-file (inline ${b.kind} block, not sliced)`,
        startLine: 1,
        endLine: lines.length,
        sourceFile: `readable/${prettyFile}`,
      });
      sources.push({
        sourceFile: `readable/${prettyFile}`,
        capture: rel,
        captureKind: `inline-${b.kind}`,
        captureByteStart: b.contentStart,
        captureByteEnd: b.contentEnd,
        captureSha256: b.sha256,
        captureBytes: b.bytes,
        prettyLines: lines.length,
        prettyBytes: prettyBuf.length,
        prettySha256: sha256(prettyBuf),
        tag,
        slices: 0,
        derived: "readable only (inline block, wholeFile)",
      });
    }
  }
  if (inlineMapBlocks.length) {
    fs.writeFileSync(
      path.join(readableDir, "index-inline-map.json"),
      JSON.stringify(
        {
          note:
            "byte ranges (into the captured HTML documents) + sha256 for every inline <script>/<style> content block, " +
            "with its readable twin; generated by tools/derive.mjs",
          blocks: inlineMapBlocks,
        },
        null,
        2,
      ) + "\n",
    );
    console.log(`derive: wrote readable/index-inline-map.json (${inlineMapBlocks.length} inline block(s))`);
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

  // ── 4) prune orphan derived files (capture untouched) ──────────────────
  let pruned = 0;
  for (const [dir, keep, exts] of [
    [readableDir, written.readable, /\.(pretty\.js|pretty\.css)$/],
    [srcDir, written.src, /\.js$/],
  ]) {
    for (const f of fs.readdirSync(dir)) {
      if (exts.test(f) && !keep.has(f)) {
        fs.rmSync(path.join(dir, f));
        pruned++;
        console.log(`derive: pruned orphan derived file ${path.join(path.basename(dir), f)}`);
      }
    }
  }

  // ── 5) split-spec.json (2-space indent + trailing newline) ─────────────
  const appJs = sources.filter((s) => s.derived.startsWith("readable +"));
  const vendorJsS = sources.filter((s) => /wholeFile/.test(s.derived) && s.capture.endsWith(".js"));
  const cssSources = sources.filter((s) => s.sourceFile.endsWith(".pretty.css"));
  const spec = {
    project: "voxelrush",
    kind: "statement-aligned-slices",
    defaultFile: `src/${sections.find((s) => !s.wholeFile && !s.skipped).file}`,
    note:
      "VOXEL RUSH (https://play.voxelrush.app/) is capture-class: a Vite production build of a browser FPS " +
      "('Free Browser FPS with Tanks, Helicopters & Drones': 40-soldier flag battles, Team Deathmatch, a voxel " +
      "survival sandbox) served at the origin root by Cloudflare. §0.4 fork-over-mirror was checked on " +
      "2026-10-13 — the page and its JS reference no public source repo (see README), so the mirror stands. " +
      "Derived pipeline: capture → pinned prettier 3.9.6 (module API, default options, formatted to a layout " +
      "fixed point, 1-2 passes — never the CLI: it respects .gitignore and can silently echo its input) → " +
      "readable/<name>.pretty.js|css per captured JS/CSS file (capture-root-relative name, nested dirs " +
      "flattened with __; every pretty provably NOT byte-identical to its capture source) → statement-aligned " +
      "slices src/<name>-NN.js of every app chunk (top-level declaration boundaries only, ~250-350 line " +
      "windows; oversized single declarations stay whole) with an exact 2-line provenance header. Every slice " +
      "parses standalone under `node --input-type=module --check -` and round-trips byte-exact to its recorded " +
      "readable line range. Vendor rule — wholeFile sections, never sliced: inside assets/index-*.js the " +
      "bundled three.js r169 core is content-anchored (the WebGL constants/revision declaration carrying the " +
      "Three.js Authors MIT license through the `window.__THREE__` registration) and the Vite modulepreload " +
      "machinery prefix before it is wholeFile too, both with positive + negative guards asserted. Stylesheet " +
      "rule — assets/index-*.css is wholeFile. The obfuscated payloads (local-server-worker, main, bootstrap, " +
      "terrain-pool, sw.js) are prettified and sliced like app code; their identifiers stay obfuscator-mangled " +
      "(the rename campaign, PLAN §5, is recorded as an open task in README.md). Non-standalone parts are " +
      "skipped sections, indexed but never sliced: a chunk's final export {…} table. Inline <script>/<style> " +
      "scan: index.html carries a boot <script>, three <style> blocks and a closing storage-cleanup <script> " +
      "(plus an application/ld+json data block recorded notRendered, no pretty pass); about/index.html and " +
      "ru/index.html each carry one <style> and one ld+json block — every inline content block gets a " +
      "wholeFile twin readable/<entry>-inline-N.pretty.{js,css} + a readable/index-inline-map.json entry with " +
      "its exact byte range and sha256. Binary payloads (images, audio, data files) are hashed notRendered " +
      "records (bytes + sha256), never prettified. Capture bytes are untouched by everything above; re-cut " +
      "with `node tools/derive.mjs` after any capture refresh. `node tools/audit.js` is the gate.",
    renderOptions: {
      _default:
        "prettier 3.9.6, module API, default options, formatted to a layout fixed point (1 or 2 passes; prettier 3.9.6 member-chain layout is not idempotent on some optional-chain argument patterns — the recorded method is format-to-fixed-point, and audit re-renders with it) — never the CLI: it respects .gitignore and can silently echo its input",
      js: "parser babel, no plugins",
      css: "parser css, no plugins",
      json: "parser json, no plugins (inline importmap/data blocks, if any)",
    },
    source:
      `readable/: ${sources.filter((s) => s.sourceFile?.endsWith(".pretty.js")).length} JS pretties ` +
      `(${appJs.length} chunk(s) sliced, ${vendorJsS.length} wholeFile JS) + ` +
      `${cssSources.length} CSS pretties ` +
      `(incl. ${inlineMapBlocks.length} inline twin(s)); ` +
      `src/: ${appJs.reduce((n, s) => n + s.slices, 0)} statement-aligned slices across ${appJs.length} chunk(s); ` +
      `${sections.filter((s) => s.skipped).length} skipped section(s); ` +
      `${sections.filter((s) => s.wholeFile).length} wholeFile section(s); ` +
      `capture: ${captured.length} files under .upstream/manifest.json; inline scan: ${inlineFiles.join(", ")} ` +
      `(${inlineMapBlocks.length} inline content block(s)).`,
    inline: {
      scanned: inlineFiles,
      contentBlocks: inlineMapBlocks.length,
      notRendered: notRendered.length,
      note:
        `${inlineMapBlocks.length} inline content block(s) across the captured HTML documents — readable twins + ` +
        `readable/index-inline-map.json with exact byte ranges and sha256; ld+json data blocks are recorded ` +
        `notRendered (no pretty pass)`,
    },
    sources,
    sections,
    notRendered,
  };
  fs.writeFileSync(path.join(proj, "split-spec.json"), JSON.stringify(spec, null, 2) + "\n");

  // ── 6) self-check (tools/audit.js is the authoritative gate) ────────────
  let bad = 0;
  const bySource = new Map();
  for (const s of sections) {
    if (!bySource.has(s.sourceFile)) bySource.set(s.sourceFile, []);
    bySource.get(s.sourceFile).push(s);
  }
  for (const [sourceFile, list] of bySource) {
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
    const text = fs.readFileSync(abs, "utf8");
    const nl2 = text.indexOf("\n", text.indexOf("\n") + 1);
    const body = text.slice(nl2 + 1);
    const expected = readLines(path.join(proj, s.sourceFile)).slice(s.startLine - 1, s.endLine).join("\n") + "\n";
    if (body !== expected) {
      console.error(`ROUND-TRIP FAIL ${s.file}`);
      bad++;
    } else roundOK++;
    if (!parses(text).ok) {
      console.error(`PARSE FAIL src/${s.file}`);
      bad++;
    } else parsed++;
  }
  let prettyParsed = 0;
  for (const s of sources) {
    if (!s.sourceFile?.endsWith(".pretty.js")) continue;
    if (!parses(fs.readFileSync(path.join(proj, s.sourceFile), "utf8")).ok) {
      console.error(`PARSE FAIL ${s.sourceFile}`);
      bad++;
    } else prettyParsed++;
  }
  console.log(
    `derive: ${written.readable.size} readable file(s), ${written.src.size} src slices ` +
      `(${parsed}/${ranged} parse standalone, ${roundOK}/${ranged} round-trip byte-exact), ` +
      `${skippedTotal} skipped, ${sections.filter((s) => s.wholeFile).length} wholeFile, ` +
      `${prettyParsed} pretty js parse clean, ${notRendered.length} notRendered, ${pruned} orphan(s) pruned — ` +
      `self-check ${bad ? bad + " FAILURE(S)" : "clean"}`,
  );
  if (bad) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
