// audit.js — integrity gate (PLAN §5), tailored to voxelrush's shape.
//
// VOXEL RUSH (https://play.voxelrush.app/) is capture-class: a Vite production
// build of a browser FPS served at the origin root by Cloudflare. There is no
// authored source in the mirror, so the derived pipeline is:
//
//   capture assets/<name>.js|css -> readable/<served path>.pretty.js|css   (pinned prettier 3.9.6, layout fixed point)
//   readable entry/app chunks    -> src/<served path>-NN.js                (statement-aligned slices)
//   readable three.js core region-> split-spec wholeFile section            (three.js r169 inside assets/index-*.js: never sliced)
//   readable machinery prefix    -> split-spec wholeFile section            (Vite modulepreload polyfill + helpers: never sliced)
//   readable export tables       -> split-spec skipped sections             (final export {…} tables: indexed, not sliced)
//   capture HTML documents       -> inline <script>/<style> scan            (twins + index-inline-map.json;
//                                                                            ld+json data blocks -> notRendered records)
//   binary payloads              -> split-spec notRendered records          (bytes + sha256, no pretty pass)
//
// split-spec.json records that pipeline and this gate keeps it honest:
//
//   1. split-spec.json parses, carries a note + renderOptions + rename section,
//      and a defaultFile exists.
//   2. Every source resolves: spec.sources maps each readable pretty to its
//      capture provenance (re-hashed against .upstream/manifest.json); file
//      captures follow the served-path naming rule
//      (readable/<served path>.pretty.{js,css}).
//   3. Every section resolves: ranged slices have a src/*.js file on disk, a readable
//      *.pretty.js|css sourceFile and in-bounds startLine/endLine; wholeFile sections
//      (three.js vendor region, machinery prefix, stylesheet, inline twins) must NOT
//      have a src file; `skipped` sections (final export tables) must NOT have a src
//      file and are re-verified textually against their recorded firstLine/lastLine.
//   4. The ranges of each sourceFile tile it exactly: first starts at line 1, each next
//      starts at previous end + 1, last ends at EOF — no gaps, no overlaps.
//   5. Byte-exact round-trip: every src slice minus its exact 2-line header
//      (`// <tag> NN — <marker>` + `// Lines A-B of <pretty> (statement-aligned).`)
//      equals its recorded sourceFile range byte for byte — THROUGH the recorded
//      rename map where the slice is renamed (the same engine application
//      tools/derive.mjs re-cuts with).
//   6. Every slice parses standalone with the exact gate command
//      `node --input-type=module --check -` (stdin), as does every readable *.pretty.js;
//      *.pretty.css gets a brace-balance sanity check.
//   7. src/*.js on disk and the spec's ranged slices are the same set — no unlisted or
//      missing reversals; wholeFile/skipped names are not on disk.
//   8. Every readable pretty is referenced by the spec, its capture source exists, is
//      recorded in .upstream/manifest.json, and is NOT byte-identical to the pretty
//      (prettier did run). Every captured .js/.css file has a readable twin
//      (layer completeness).
//   9. Inline-block provenance: readable/index-inline-map.json exists, its scanned
//      documents re-scan to the recorded block count, twins re-hash and are provably
//      not byte-copies, and notRendered records re-hash.
//  10. Derived layers never enter the capture sums: no readable/, src/, legacy/,
//      split-spec.json, rename-map.json, index-inline-map.json or _mirror-report.json
//      path may appear in .upstream/manifest.json.
//  11. Import resolution (the hard rule, TOKEN-BASED — proposal (ab)): relative
//      specifiers (static from-imports, side-effect imports, re-exports, dynamic
//      import() incl. non-interpolated template literals) resolve to files the CAPTURE
//      carries, since src/ keeps the served chunk names verbatim. A specifier whose
//      target is a reference RECORDED AS A GAP in _mirror-report.json is accepted as a
//      known gap and counted, not flagged. `node:` / `vite/*` bare specifiers and
//      root-served `/…` paths are whitelisted machinery.
//  12. Rename layer (PLAN §5 campaign): every rename-map.json record applies to its
//      slice's readable range and reproduces the committed body (mapOK); the spec's
//      rename stats match the map; every sources[].renameBindings name is re-found in
//      the chunk's index-only skipped sections and the binding map applies cleanly.
//  13. Vendor-region guards: the three.js wholeFile region (entry chunk) must contain
//      WebGLRenderer + __THREE__ + the revision registration and must NOT contain app
//      markers; the machinery prefix must contain the modulepreload polyfill and no
//      three.js code — the same guards derive.mjs asserts.
//  14. Re-render: the pinned prettier 3.9.6 is importable and every pretty is
//      re-rendered to its LAYOUT FIXED POINT (multi-pass — a single-pass check would
//      false-fail on a pass-2 fixed point, fleet (t)(3)) and byte-compared.
//
// usage: node tools/audit.js
"use strict";
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { spawnSync } = require("node:child_process");
const { pathToFileURL } = require("node:url");
const { applyRecordedMap, applyBindingMap, extractImportSpecifiers } = require("./engine/rename-layer.mjs");

const here = __dirname;
const proj = path.resolve(here, "..");
const srcDir = path.join(proj, "src");
const readableDir = path.join(proj, "readable");
const PINNED = "3.9.6";
const MAX_PASSES = 3;

const problems = [];
const problem = (msg) => problems.push(msg);

// ── helpers ─────────────────────────────────────────────────────────────
const readLines = (abs) => {
  const t = fs.readFileSync(abs, "utf8");
  const l = t.split("\n");
  if (l.length && l[l.length - 1] === "") l.pop();
  return l;
};
const linesCache = new Map();
const getLines = (abs) => {
  if (!linesCache.has(abs)) linesCache.set(abs, readLines(abs));
  return linesCache.get(abs);
};
const sha256 = (buf) => crypto.createHash("sha256").update(buf).digest("hex");

// capture rel -> readable twin (served path mirrored, PLAN §5)
const prettyForCapture = (rel) => {
  const stem = rel.replace(/\.(js|css)$/i, "");
  return "readable/" + stem + (/\.css$/i.test(rel) ? ".pretty.css" : ".pretty.js");
};

// parse check — the exact standalone gate: node --input-type=module --check - < file
function parseCheck(abs, rel) {
  const r = spawnSync(process.execPath, ["--input-type=module", "--check", "-"], {
    input: fs.readFileSync(abs),
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (r.status !== 0)
    problem(`standalone ESM parse failed: ${rel} — ${(r.stderr || "").trim().split("\n").slice(-2).join(" | ")}`);
  return r.status === 0;
}

// inline <script>/<style> scan (byte-exact, same shape as tools/derive.mjs)
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
      if (j < 0) {
        problem(`unterminated <${kind}> opened at byte ${i}`);
        break;
      }
      const tag = buf.subarray(i, tagEnd + 1).toString("utf8");
      const external = /\bsrc\s*=\s*["']/i.test(tag);
      if (!external) {
        n++;
        const dataType = (/\btype\s*=\s*["']?([^"'\s>]+)/i.exec(tag)?.[1] ?? "").toLowerCase();
        const content = buf.subarray(tagEnd + 1, j);
        blocks.push({
          kind: /\btype\s*=\s*["']importmap["']/i.test(tag) ? "importmap" : kind,
          block: n,
          type: dataType,
          contentStart: tagEnd + 1,
          contentEnd: j,
          bytes: content.length,
          sha256: sha256(content),
        });
      }
      p = j + close.length;
    }
  }
  return blocks.sort((a, b) => a.contentStart - b.contentStart);
}

// ── capture manifest ────────────────────────────────────────────────────
let manifest = null;
try {
  manifest = JSON.parse(fs.readFileSync(path.join(proj, ".upstream", "manifest.json"), "utf8"));
} catch (e) {
  problem(`.upstream/manifest.json does not parse: ${e.message}`);
}
const captured = manifest?.files ? Object.keys(manifest.files).map((r) => r.split(path.sep).join("/")).sort() : [];

// ── split-spec.json ─────────────────────────────────────────────────────
const specPath = path.join(proj, "split-spec.json");
if (!fs.existsSync(specPath)) problem("split-spec.json missing at repo root");
let spec = null;
try {
  spec = specPath && JSON.parse(fs.readFileSync(specPath, "utf8"));
} catch (e) {
  problem(`split-spec.json does not parse: ${e.message}`);
}
const sections = Array.isArray(spec?.sections) ? spec.sections : [];
if (spec && !Array.isArray(spec?.sections)) problem("split-spec.json has no sections array");
if (!String(spec?.note ?? "").trim()) problem("split-spec.json has no note (derivation record)");
if (!spec?.renderOptions || typeof spec.renderOptions !== "object")
  problem("split-spec.json records no renderOptions (prettier options for re-derivation)");
if (!Array.isArray(spec?.notRendered)) problem("split-spec.json records no notRendered array (non-code payload blocks)");
if (!spec?.rename || typeof spec.rename !== "object" || spec.rename.map !== "rename-map.json")
  problem("split-spec.json records no rename section (PLAN §5 campaign record)");
if (typeof spec?.defaultFile !== "string" || !spec.defaultFile) problem("split-spec.json has no defaultFile (stable entry point)");
else if (!fs.existsSync(path.join(proj, spec.defaultFile))) problem(`split-spec defaultFile missing on disk: ${spec.defaultFile}`);

// ── rename-map.json (the campaign record; may be absent before the campaign) ─
const renameMapPath = path.join(proj, "rename-map.json");
let renameMap = { files: {}, scoped: {} };
if (fs.existsSync(renameMapPath)) {
  try {
    const parsedMap = JSON.parse(fs.readFileSync(renameMapPath, "utf8"));
    renameMap = { files: parsedMap.files || {}, scoped: parsedMap.scoped || {} };
  } catch (e) {
    problem(`rename-map.json does not parse: ${e.message}`);
  }
}
const recordFor = (file) => {
  const files = renameMap.files[file];
  const scoped = renameMap.scoped[file];
  return files || scoped ? { files, scoped } : null;
};

// ── spec.sources -> pretty↔capture provenance ───────────────────────────
const prettyToSource = new Map();
const sources = Array.isArray(spec?.sources) ? spec.sources : [];
if (!sources.length) problem("split-spec.json has no sources array (no readable provenance)");
let sourcesOK = 0;
for (const s of sources) {
  if (typeof s.sourceFile !== "string" || !s.sourceFile) {
    problem("split-spec source entry without sourceFile");
    continue;
  }
  if (prettyToSource.has(s.sourceFile)) problem(`split-spec lists source ${s.sourceFile} twice`);
  prettyToSource.set(s.sourceFile, s);
  const prettyAbs = path.join(proj, s.sourceFile);
  if (!fs.existsSync(prettyAbs)) {
    problem(`source ${s.sourceFile}: readable pretty missing on disk`);
    continue;
  }
  if (typeof s.capture !== "string" || !s.capture) {
    problem(`source ${s.sourceFile}: no capture provenance recorded`);
    continue;
  }
  const capAbs = path.join(proj, s.capture);
  if (!fs.existsSync(capAbs)) {
    problem(`source ${s.sourceFile}: capture missing: ${s.capture}`);
    continue;
  }
  if (manifest?.files?.[s.capture]) {
    const got = sha256(fs.readFileSync(capAbs));
    if (got !== manifest.files[s.capture].sha256)
      problem(`source ${s.sourceFile}: capture ${s.capture} does not match .upstream/manifest.json`);
  } else {
    problem(`source ${s.sourceFile}: capture ${s.capture} is not in .upstream/manifest.json`);
  }
  if (String(s.captureKind).startsWith("inline-")) {
    if (typeof s.captureByteStart !== "number" || typeof s.captureByteEnd !== "number")
      problem(`source ${s.sourceFile}: inline-block provenance without byte range`);
  } else {
    const want = prettyForCapture(s.capture);
    if (want !== s.sourceFile) problem(`source ${s.sourceFile}: naming rule maps ${s.capture} to ${want}`);
  }
  sourcesOK++;
}

// ── sections resolve ────────────────────────────────────────────────────
const seen = new Set();
const rangedFiles = new Set();
const indexOnlyFiles = new Set();
for (const s of sections) {
  if (!s.file) {
    problem("split-spec section without a file");
    continue;
  }
  if (seen.has(s.file)) problem(`split-spec lists ${s.file} twice`);
  seen.add(s.file);
  const isWhole = s.wholeFile === true;
  const isSkipped = s.skipped === true;
  if (isWhole && isSkipped) problem(`section ${s.file}: both wholeFile and skipped`);
  if (typeof s.startLine !== "number" || typeof s.endLine !== "number")
    problem(`section ${s.file}: no startLine/endLine range recorded`);
  if (typeof s.sourceFile !== "string") problem(`section ${s.file}: no sourceFile provenance recorded`);
  if (isWhole || isSkipped) indexOnlyFiles.add(s.file);
  else rangedFiles.add(s.file);
}
if (!rangedFiles.size) problem("no ranged src slices in split-spec.json (no reversed layer)");

// every src slice on disk (src/<served path>-NN.js — served-path nested)
const onDisk = [];
(function walkSrc(dir) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkSrc(p);
    else if (e.name.endsWith(".js")) onDisk.push(path.relative(srcDir, p).split(path.sep).join("/"));
  }
})(srcDir);
onDisk.sort();
if (!onDisk.length) problem("src/ missing or empty (no reversed layer)");
for (const f of onDisk) if (!rangedFiles.has(f)) problem(`src/${f} exists but is not a ranged slice in split-spec.json`);
for (const f of rangedFiles) if (!onDisk.includes(f)) problem(`split-spec lists ${f} but it is not on disk`);
for (const f of indexOnlyFiles)
  if (onDisk.includes(f)) problem(`index-only section ${f} must not have a src file on disk (wholeFile/skipped)`);

// ── ranges: existence, bounds, tiling ───────────────────────────────────
const bySource = new Map();
for (const s of sections) {
  if (!s.file || typeof s.sourceFile !== "string") continue;
  const src = path.join(proj, s.sourceFile);
  if (!fs.existsSync(src)) {
    problem(`section ${s.file}: sourceFile missing: ${s.sourceFile}`);
    continue;
  }
  if (!/\.pretty\.(js|css)$/i.test(s.sourceFile)) {
    problem(`section ${s.file}: sourceFile is not a readable pretty: ${s.sourceFile}`);
    continue;
  }
  const srcLines = getLines(src);
  const A = s.startLine,
    B = s.endLine;
  if (!Number.isInteger(A) || !Number.isInteger(B) || A < 1 || B < A || B > srcLines.length) {
    problem(`section ${s.file}: bad range ${A}-${B} vs ${s.sourceFile} (${srcLines.length} lines)`);
    continue;
  }
  if (!bySource.has(s.sourceFile)) bySource.set(s.sourceFile, []);
  bySource.get(s.sourceFile).push({ s, A, B });
}
let tiledOK = 0;
for (const [sourceFile, list] of bySource) {
  let ok = true;
  list.sort((x, y) => x.A - y.A);
  const srcLines = getLines(path.join(proj, sourceFile));
  if (list[0].A !== 1) {
    problem(`${sourceFile}: first section starts at line ${list[0].A}, not 1`);
    ok = false;
  }
  for (let k = 1; k < list.length; k++) {
    if (list[k].A !== list[k - 1].B + 1) {
      problem(
        `${sourceFile}: ranges not contiguous at ${list[k].s.file} (starts ${list[k].A}, previous ends ${list[k - 1].B})`,
      );
      ok = false;
    }
  }
  if (list[list.length - 1].B !== srcLines.length) {
    problem(`${sourceFile}: last section ends at ${list[list.length - 1].B}, not ${srcLines.length}`);
    ok = false;
  }
  if (ok) tiledOK++;
}
for (const s of sources) {
  if (typeof s.sourceFile !== "string" || String(s.captureKind).startsWith("inline-")) continue;
  if (!bySource.has(s.sourceFile)) problem(`${s.sourceFile}: pretty is not tiled by any split-spec section`);
}

// ── byte-exact round-trip + header provenance (through the rename map) ──
let roundOK = 0,
  mapOK = 0,
  ranged = 0;
for (const [, list] of bySource) {
  for (const { s, A, B } of list) {
    if (s.wholeFile === true || s.skipped === true) continue;
    ranged++;
    const srcAbs = path.join(srcDir, String(s.file));
    if (!fs.existsSync(srcAbs)) continue; // already reported
    const text = fs.readFileSync(srcAbs, "utf8");
    const nl1 = text.indexOf("\n");
    const nl2 = nl1 >= 0 ? text.indexOf("\n", nl1 + 1) : -1;
    if (nl2 < 0) {
      problem(`src/${s.file}: missing 2-line header`);
      continue;
    }
    const header1 = text.slice(0, nl1);
    const header2 = text.slice(nl1 + 1, nl2);
    const nn = path.basename(String(s.file)).match(/-(\d+)\.js$/)?.[1];
    if (!nn) problem(`src/${s.file}: file name carries no -NN slice number`);
    else if (!new RegExp(`^// .+ ${nn} — .+$`).test(header1))
      problem(`src/${s.file}: header line 1 does not match "// <tag> ${nn} — <marker>": ${header1}`);
    else if (!header1.startsWith(`// ${path.basename(s.sourceFile).replace(/\.pretty\.js$/, "")} ${nn} —`))
      problem(`src/${s.file}: header line 1 tag does not match sourceFile ${s.sourceFile}: ${header1}`);
    const want2 = `// Lines ${A}-${B} of ${s.sourceFile} (statement-aligned).`;
    if (header2 !== want2) problem(`src/${s.file}: header line 2 is not the recorded range: ${header2}`);
    const body = text.slice(nl2 + 1);
    const srcLines = getLines(path.join(proj, s.sourceFile));
    const raw = srcLines.slice(A - 1, B).join("\n") + "\n";
    const record = recordFor(String(s.file));
    let expected = raw;
    try {
      expected = record ? applyRecordedMap(raw, record) : raw;
    } catch (e) {
      problem(`src/${s.file}: recorded rename map does not apply: ${e.message}`);
      continue;
    }
    if (body !== expected)
      problem(
        `src/${s.file}: body is not a byte-exact round-trip of ${s.sourceFile} lines ${A}-${B}${record ? " through the recorded rename map" : ""}`,
      );
    else {
      roundOK++;
      if (record) mapOK++;
    }
  }
}

// ── skipped sections: textual re-verification ───────────────────────────
let skippedOK = 0,
  skippedTotal = 0;
for (const s of sections) {
  if (s.skipped !== true || typeof s.sourceFile !== "string") continue;
  skippedTotal++;
  const src = path.join(proj, s.sourceFile);
  if (!fs.existsSync(src)) {
    problem(`skipped section ${s.file}: sourceFile missing: ${s.sourceFile}`);
    continue;
  }
  const lines = getLines(src);
  if (!Number.isInteger(s.startLine) || !Number.isInteger(s.endLine) || s.startLine < 1 || s.endLine > lines.length)
    continue;
  const first = lines[s.startLine - 1],
    last = lines[s.endLine - 1];
  if (typeof s.firstLine !== "string" || typeof s.lastLine !== "string")
    problem(`skipped section ${s.file}: no firstLine/lastLine recorded`);
  else if (first !== s.firstLine || last !== s.lastLine)
    problem(`skipped section ${s.file}: range text does not match the recorded first/last lines`);
  else skippedOK++;
}

// ── every src + pretty parses standalone ────────────────────────────────
let checkOK = 0;
for (const f of onDisk) if (parseCheck(path.join(srcDir, f), `src/${f}`)) checkOK++;

const prettyFiles = [];
const cssPretties = [];
(function walkPretty(dir) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkPretty(p);
    else if (/\.pretty\.js$/i.test(e.name)) prettyFiles.push(p);
    else if (/\.pretty\.css$/i.test(e.name)) cssPretties.push(p);
  }
})(readableDir);
if (!prettyFiles.length) problem("readable/ has no *.pretty.js (derived layer missing)");
if (!cssPretties.length) problem("readable/ has no *.pretty.css (stylesheet layer missing)");
let prettyOK = 0,
  prettyParsed = 0;
for (const abs of prettyFiles) {
  const rel = path.relative(proj, abs).split(path.sep).join("/");
  prettyParsed++;
  if (parseCheck(abs, rel)) prettyOK++;
}
for (const abs of cssPretties) {
  const rel = path.relative(proj, abs).split(path.sep).join("/");
  const t = fs.readFileSync(abs, "utf8");
  let depth = 0,
    i = 0,
    ok = t.trim().length > 0;
  while (i < t.length) {
    const c = t[i];
    if (c === "/" && t[i + 1] === "*") {
      const e = t.indexOf("*/", i + 2);
      i = e < 0 ? t.length : e + 2;
      continue;
    }
    if (c === '"' || c === "'") {
      const q = c;
      i++;
      while (i < t.length && t[i] !== q) i += t[i] === "\\" ? 2 : 1;
      i++;
      continue;
    }
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth < 0) {
        ok = false;
        break;
      }
    }
    i++;
  }
  if (!ok || depth !== 0) problem(`${rel}: unbalanced braces (depth ${depth})`);
}

// ── inline block twins + map (deliverable rule) ─────────────────────────
const DATA_TYPES = new Set(["application/ld+json", "application/json", "speculationrules"]);
const inlineMapPath = path.join(readableDir, "index-inline-map.json");
let inlineMap = null;
if (fs.existsSync(inlineMapPath)) {
  try {
    inlineMap = JSON.parse(fs.readFileSync(inlineMapPath, "utf8"));
  } catch (e) {
    problem(`readable/index-inline-map.json does not parse: ${e.message}`);
  }
}
const inlineTwinRels = new Set();
let inlineBlocks = 0;
let inlineDataBlocks = 0;
for (const capRel of captured) {
  if (!/\.html$/i.test(capRel)) continue;
  const buf = fs.readFileSync(path.join(proj, capRel));
  const blocks = scanBlocks(buf);
  const entryDir = capRel.includes("/") ? path.posix.dirname(capRel) : "";
  const entryTag = capRel.replace(/\.html$/i, "").split("/").pop();
  const rec = (inlineMap?.sources ?? []).find((x) => String(x.source).split(path.sep).join("/") === capRel);
  const found = blocks.filter((b) => !DATA_TYPES.has(b.type));
  if (found.length && !rec) {
    problem(`captured HTML ${capRel} has ${found.length} inline content block(s) but none are recorded in index-inline-map.json`);
  }
  for (const b of blocks) {
    if (DATA_TYPES.has(b.type)) {
      inlineDataBlocks++;
      const nr = (spec?.notRendered ?? []).find(
        (r) => r.capture === capRel && r.kind === "inline-data" && r.byteStart === b.contentStart,
      );
      if (!nr) {
        problem(`${capRel}: inline data block <script type="${b.type}"> #${b.block} is not recorded in split-spec notRendered`);
        continue;
      }
      if (nr.byteEnd !== b.contentEnd || nr.sha256 !== b.sha256)
        problem(`${capRel}: inline data block #${b.block} notRendered record does not match the capture bytes`);
      continue;
    }
    inlineBlocks++;
    const twinExt = b.kind === "style" ? "css" : b.kind === "importmap" ? "json" : "js";
    const twin = `readable/${entryDir ? entryDir + "/" : ""}${entryTag}-inline-${b.block}.pretty.${twinExt}`;
    inlineTwinRels.add(twin);
    if (!fs.existsSync(path.join(proj, twin))) problem(`${capRel}: inline ${b.kind} #${b.block} has no twin ${twin}`);
    else {
      const twinText = fs.readFileSync(path.join(proj, twin), "utf8");
      const content = buf.subarray(b.contentStart, b.contentEnd);
      if (twinText === content.toString("utf8")) problem(`${twin}: byte-identical to its capture block (prettier did not run?)`);
      if (twinExt === "json") {
        try {
          JSON.parse(twinText);
        } catch (e) {
          problem(`${twin}: does not parse as JSON: ${e.message}`);
        }
      }
      if (!prettyToSource.has(twin)) problem(`${twin}: inline twin is not listed in split-spec.json sources`);
    }
    const hit = (rec?.blocks ?? []).find((x) => x.byteStart === b.contentStart);
    if (!hit) problem(`${capRel}: inline ${b.kind} #${b.block} is missing from readable/index-inline-map.json`);
    else if (hit.byteEnd !== b.contentEnd || hit.sha256 !== b.sha256)
      problem(`${twin}: recorded inline byte range/sha256 does not match the capture bytes`);
  }
}
if (inlineMap && inlineBlocks + inlineDataBlocks === 0)
  problem("readable/index-inline-map.json exists but the capture has no inline blocks");

// ── every pretty referenced + provably derived + layer completeness ─────
let derivedOK = 0;
for (const abs of [...prettyFiles, ...cssPretties]) {
  const rel = path.relative(proj, abs).split(path.sep).join("/");
  const s = prettyToSource.get(rel);
  if (!s) {
    problem(`readable/${path.basename(rel)} exists but is not referenced by split-spec.json`);
    continue;
  }
  const capAbs = path.join(proj, s.capture);
  if (!fs.existsSync(capAbs)) continue; // already reported
  const capBuf = fs.readFileSync(capAbs);
  let source;
  if (String(s.captureKind).startsWith("inline-")) {
    if (typeof s.captureByteStart !== "number" || typeof s.captureByteEnd !== "number") continue;
    source = capBuf.subarray(s.captureByteStart, s.captureByteEnd);
  } else {
    source = capBuf;
  }
  if (source.equals(fs.readFileSync(abs)))
    problem(`${rel}: byte-identical to its capture source (prettier did not run?)`);
  else derivedOK++;
}
if (manifest) {
  for (const rel of Object.keys(manifest.files)) {
    const norm = rel.split(path.sep).join("/");
    if (!/\.(js|css)$/i.test(norm)) continue;
    const want = prettyForCapture(norm);
    if (!fs.existsSync(path.join(proj, want))) problem(`captured ${norm} has no readable twin (expected ${want})`);
  }
}

// ── vendor rule: wholeFile sections carry the recorded shape ────────────
const vendorSec = sections.find((s) => /-vendor-threejs-r\d+\.js$/.test(String(s.file)));
if (!vendorSec) problem("no three.js vendor wholeFile section in split-spec.json");
else {
  if (vendorSec.wholeFile !== true) problem(`vendor section ${vendorSec.file} is not wholeFile`);
  const text = getLines(path.join(proj, vendorSec.sourceFile)).slice(vendorSec.startLine - 1, vendorSec.endLine).join("\n");
  for (const [re, what] of [
    [/WebGLRenderer/, "WebGLRenderer"],
    [/__THREE__/, "__THREE__ registration"],
    [/=\s*"(?:1\d\d)"\s*,/, "revision declaration"],
    [/SPDX-License-Identifier: MIT/, "license header"],
  ])
    if (!re.test(text)) problem(`vendor section ${vendorSec.file}: missing ${what} — readable changed shape`);
  for (const bad of ["Play online", "menuarmory", "vr-rejoin"])
    if (text.includes(bad)) problem(`vendor section ${vendorSec.file}: app marker "${bad}" inside the three.js region`);
}
const machSec = sections.find((s) => /-machinery\.js$/.test(String(s.file)));
if (!machSec) problem("no bundler-machinery wholeFile section in split-spec.json");
else {
  if (machSec.wholeFile !== true) problem(`machinery section ${machSec.file} is not wholeFile`);
  const text = getLines(path.join(proj, machSec.sourceFile)).slice(machSec.startLine - 1, machSec.endLine).join("\n");
  if (!/modulepreload/.test(text)) problem(`machinery section ${machSec.file}: no modulepreload polyfill`);
  if (/WebGLRenderer/.test(text)) problem(`machinery section ${machSec.file}: three.js code leaked into machinery`);
}

// ── the hard rule: src/ import resolution against the capture (token-based) ─
const recordedGaps = new Set();
try {
  const report = JSON.parse(fs.readFileSync(path.join(proj, "_mirror-report.json"), "utf8"));
  for (const u of report.unresolved ?? []) recordedGaps.add(u.path);
} catch {
  /* no report: no gap allowance */
}
let checkedImports = 0,
  resolvedImports = 0,
  knownGapImports = 0,
  whitelisted = 0;
for (const f of onDisk) {
  const code = fs.readFileSync(path.join(srcDir, f), "utf8");
  const sec = sections.find((s) => s.file === f);
  const srcEntry = sec && prettyToSource.get(String(sec.sourceFile));
  const baseDir = srcEntry ? path.posix.dirname(srcEntry.capture.split(path.sep).join("/")) : null;
  for (const { spec: sp, kind } of extractImportSpecifiers(code)) {
    checkedImports++;
    if (sp.startsWith("./") || sp.startsWith("../")) {
      if (!baseDir) {
        problem(`src/${f}: ${kind} import "${sp}" but no capture provenance is known`);
        continue;
      }
      const target = path.posix.normalize(path.posix.join(baseDir, sp));
      if (!fs.existsSync(path.join(proj, target))) {
        if (recordedGaps.has(target)) {
          knownGapImports++;
          continue;
        }
        problem(`src/${f}: unresolvable ${kind} import "${sp}" (capture carries no ${target})`);
        continue;
      }
      resolvedImports++;
      continue;
    }
    if (sp.startsWith("node:") || sp.startsWith("vite/") || sp.startsWith("/")) {
      whitelisted++;
      continue;
    }
    if (/^(data|blob|file|https?):/i.test(sp) || sp.startsWith("//")) {
      whitelisted++;
      continue;
    }
    problem(`src/${f}: unresolvable ${kind} import "${sp}" — bare/URL specifier not whitelisted`);
  }
}

// ── derived layers must never enter the capture sums ────────────────────
if (manifest) {
  for (const rel of Object.keys(manifest.files)) {
    const norm = rel.split(path.sep).join("/");
    if (/(^|\/)(readable|src|legacy)\//.test(norm) || /(^|\/)(split-spec\.json|rename-map\.json|index-inline-map\.json|_mirror-report\.json)$/.test(norm))
      problem(`derived layer leaked into the capture manifest: ${rel}`);
  }
}

// ── rename layer: map ⇄ spec ⇄ committed slices (PLAN §5 campaign) ───────
{
  const flatFiles = Object.keys(renameMap.files || {});
  const scopedFiles = Object.keys(renameMap.scoped || {});
  const flatNames = Object.values(renameMap.files || {}).reduce((n, m) => n + Object.keys(m).length, 0);
  const indexedNames = Object.values(renameMap.scoped || {}).reduce((n, m) => n + Object.keys(m).length, 0);
  const indexedOccurrences = Object.values(renameMap.scoped || {}).reduce(
    (n, m) => n + Object.values(m).reduce((k, hits) => k + hits.length, 0),
    0,
  );
  for (const f of [...flatFiles, ...scopedFiles]) {
    const sec = sections.find((s) => s.file === f);
    if (!sec) problem(`rename-map.json records ${f} which is not a split-spec section`);
    else if (sec.wholeFile === true || sec.skipped === true)
      problem(`rename-map.json records ${f} which is a wholeFile/skipped section (never renamed)`);
  }
  const st = spec?.rename || {};
  if (st.map !== "rename-map.json") problem(`split-spec rename.map is ${st.map}, expected rename-map.json`);
  if (st.wordBoundaryNames !== flatNames)
    problem(`split-spec rename.wordBoundaryNames=${st.wordBoundaryNames} but rename-map.json carries ${flatNames}`);
  if (st.indexedNames !== indexedNames)
    problem(`split-spec rename.indexedNames=${st.indexedNames} but rename-map.json carries ${indexedNames}`);
  if (st.indexedOccurrences !== indexedOccurrences)
    problem(`split-spec rename.indexedOccurrences=${st.indexedOccurrences} but rename-map.json carries ${indexedOccurrences}`);
  const renamedFiles = new Set([...flatFiles, ...scopedFiles]);
  if (st.slices !== renamedFiles.size && renamedFiles.size)
    problem(`split-spec rename.slices=${st.slices} but rename-map.json records ${renamedFiles.size} file(s)`);
}

// ── sources[].renameBindings — re-found in the skipped sections ──────────
let bindingsOK = 0;
let bindingsTotal = 0;
for (const s of sources) {
  const bindings = s.renameBindings || {};
  const names = Object.keys(bindings);
  if (!names.length) continue;
  const skippedText = sections
    .filter((x) => x.skipped === true && x.sourceFile === s.sourceFile)
    .map((x) => getLines(path.join(proj, x.sourceFile)).slice(x.startLine - 1, x.endLine).join("\n"))
    .join("\n");
  if (!skippedText.trim()) {
    problem(`renameBindings recorded for ${s.sourceFile} but the chunk has no skipped section text`);
    continue;
  }
  for (const from of names) {
    bindingsTotal++;
    const re = new RegExp(`(?<![\\w$])${from.replace(/[$]/g, "\\$")}(?![\\w$])`);
    if (!re.test(skippedText)) problem(`renameBindings name "${from}" (${s.sourceFile}) is not re-found in the skipped sections`);
    else {
      try {
        applyBindingMap(skippedText, { [from]: bindings[from] });
        bindingsOK++;
      } catch (e) {
        problem(`renameBindings "${from}" (${s.sourceFile}): applyBindingMap failed: ${e.message}`);
      }
    }
  }
}

// ── best-effort: re-render every pretty to its fixed point under prettier 3.9.6 ─
const prettierCandidates = [
  process.env.PRETTIER_MJS,
  path.join(proj, "node_modules", "prettier", "index.mjs"),
  path.join(proj, "tools", "vendor", "prettier", "index.mjs"),
].filter(Boolean);
function loadPinnedPrettier() {
  for (const c of prettierCandidates) {
    if (!fs.existsSync(c)) continue;
    try {
      const pkg = JSON.parse(fs.readFileSync(path.join(path.dirname(c), "package.json"), "utf8"));
      if (pkg.version !== PINNED) continue;
      return c;
    } catch {
      /* keep looking */
    }
  }
  return null;
}

(async () => {
  let renderNote = `prettier ${PINNED} not importable — renderOptions recorded, re-render check skipped`;
  const prettierPath = loadPinnedPrettier();
  if (prettierPath) {
    const prettier = (await import(pathToFileURL(prettierPath).href)).default;
    // multi-pass prettier LAYOUT FIXED POINT (fleet (t)(3)): iterate until the
    // output stops changing; a single-pass check would false-fail on a pass-2+
    // fixed point. MAX_PASSES exhausted without stability is a problem.
    const renderFix = async (text, parser) => {
      let out = await prettier.format(text, { parser });
      let passes = 1;
      while (passes < MAX_PASSES) {
        const next = await prettier.format(out, { parser });
        if (next === out) return out;
        out = next;
        passes++;
      }
      const again = await prettier.format(out, { parser });
      if (again !== out) throw new Error(`prettier ${parser} does not reach a fixed point in ${MAX_PASSES} passes`);
      return out;
    };
    let renderOK = 0;
    let renderTotal = 0;
    for (const s of sources) {
      if (typeof s.sourceFile !== "string" || !fs.existsSync(path.join(proj, s.sourceFile))) continue;
      const capAbs = path.join(proj, s.capture ?? "");
      if (!s.capture || !fs.existsSync(capAbs)) continue;
      const buf = fs.readFileSync(capAbs);
      let input;
      let parser;
      if (String(s.captureKind).startsWith("inline-")) {
        if (typeof s.captureByteStart !== "number" || typeof s.captureByteEnd !== "number") continue;
        input = buf.subarray(s.captureByteStart, s.captureByteEnd).toString("utf8");
        parser = s.captureKind === "inline-style" ? "css" : s.captureKind === "inline-importmap" ? "json" : "babel";
      } else {
        input = buf.toString("utf8");
        parser = /\.css$/i.test(s.capture) ? "css" : "babel";
      }
      renderTotal++;
      let got;
      try {
        got = await renderFix(input, parser);
      } catch (e) {
        problem(`${s.sourceFile}: re-render threw: ${e.message}`);
        continue;
      }
      if (got === fs.readFileSync(path.join(proj, s.sourceFile), "utf8")) renderOK++;
      else problem(`${s.sourceFile}: does not re-render byte-exact under pinned prettier ${PINNED} (parser ${parser}, fixed point)`);
    }
    renderNote = `${renderOK}/${renderTotal} pretties re-render byte-exact under pinned prettier ${PINNED} (fixed point)`;
  }

  if (problems.length) {
    console.error(`AUDIT FAIL — ${problems.length} problem(s)`);
    for (const p of problems) console.error("  " + p);
    process.exit(1);
  }
  console.log(
    `AUDIT PASS — ${sections.length} spec sections (${roundOK}/${ranged} src↔pretty round-trips byte-exact${mapOK ? `, ${mapOK} through the recorded rename map` : ""}, ` +
      `${tiledOK}/${bySource.size} pretty sources tiled contiguously, ` +
      `${skippedOK}/${skippedTotal} skipped export-table sections re-verified textually, ` +
      `${checkOK}/${onDisk.length} src slices + ${prettyOK}/${prettyParsed} readable/*.pretty.js parse standalone (node --input-type=module --check -), ` +
      `${derivedOK}/${prettyFiles.length + cssPretties.length} pretties provably distinct from their capture source, ` +
      `${sourcesOK}/${sources.length} source provenances resolve, ` +
      `${indexOnlyFiles.size} index-only wholeFile/skipped sections carry no src file, ` +
      `${inlineBlocks} inline content block(s) with twins + index-inline-map.json, ` +
      `${inlineDataBlocks} inline data block(s) recorded notRendered, ` +
      `${bindingsOK}/${bindingsTotal} renameBindings name(s) re-found in skipped sections + binding map applies, ` +
      `${resolvedImports}/${checkedImports} imports resolve inside the capture (${whitelisted} whitelisted machinery, ` +
      `${knownGapImports} accepted as recorded gaps), ` +
      `${renderNote}, capture manifest free of derived layers)`,
  );
})();
