# VOXEL RUSH — offline mirror

Full mirror of **VOXEL RUSH** (https://play.voxelrush.app/) — "Free Browser FPS
with Tanks, Helicopters & Drones".

Source: https://play.voxelrush.app/

![VOXEL RUSH](docs/cover.png)

## Stack

- **Vite production build** served at the origin root by Cloudflare — the entry
  chunk `assets/index-BeUlFSPp.js` (3,104,027 B) carries the app plus a bundled
  **three.js r169** core (content-anchored wholeFile region, never sliced)
- **the world runs in workers** — `assets/local-server-worker-coep-v1-*.js`
  (3,500,130 B) is the offline world server; it imports the obfuscated payload
  chain `./bootstrap-B8Ot5Flt.js` → `./main-C153VVJY.js` and serves its world
  data (`/world/*`, `/structures/*`, map JSON) from memory — that in-memory
  world is what makes Single player work with no backend; the terrain/mesh
  workers (`assets/air-props-worker-*`, `assets/air-terrain-worker-*`,
  `assets/chunk-mesh-worker-*`) build and render the voxel world
- **boot decision extracted** — the redeploy moved the pre-paint redirect out of
  an inline `<script>` into `boot.js` (3,973 B), referenced from the entry
  document; `vendor/telegram-web-app.js` (119,119 B) is the origin's own copy of
  the Telegram shim (captured byte-exact; the CDN reference stays external)
- **13 locale files** — `assets/<lang>-<hash>.json` for ar/de/es/fr/it/ja/ko/
  nl/pl/pt/tr plus the inlined en strings
- **cross-origin isolation required** — the origin sends
  `cross-origin-opener-policy: same-origin` +
  `cross-origin-embedder-policy: require-corp` (SharedArrayBuffer for the
  worker world); `tools/serve.mjs` sends the same headers, a plain static
  server will not boot the world
- **obfuscator.io-protected payloads** — the bootstrap/main/local-server-worker
  chunks and `sw.js` are control-flow-flattened with base64 string tables; app
  and engine strings (including the module names above) live in those tables
- **off-origin references stay external** — `telegram.org/js/telegram-web-app.js`,
  the Discord invite, Google OAuth and the `voxelrush.app` marketing pages are
  recorded in `_mirror-report.json`, never backfilled

## What this is

VOXEL RUSH (play.voxelrush.app) — "Free Browser FPS with Tanks, Helicopters &
Drones": 40-soldier battles for five flags with tanks, helicopters, FPV drones
and mines, Team Deathmatch, plus a voxel survival sandbox ("Your own world,
offline"). The client is a Vite production build whose entry chunk carries
three.js r169 inline; the offline world is simulated by the local-server worker
and rendered with a mesh worker. Captured whole, byte-exact under
`.upstream/manifest.json` (build `mvs8vmgl-d7keq5`, refreshed 2026-10-31):
**39 files, 16,137,083 bytes** — the entry document + `boot.js`, the entry chunk
(3,104,027 B) and stylesheet (404,534 B), five module/worker payloads, the
service worker, 13 locale JSON bundles, 10 images and the `/about/` + `/ru/`
static pages plus manifest/version/sitemap/robots. The runtime graph was driven
to a fixpoint by `tools/capture.mjs`; the obfuscated payload chain
(`bootstrap-B8Ot5Flt` ↔ `main-C153VVJY`) is enumerated in the capture tool so a
redeploy that hides it again in the base64 string table still boot-tests.

The 2026-10-28 redeploy dropped the dealer-bank WAVs and the old
`bootstrap-C4umvuQD → main-Bs7z9e_r → terrain-pool-Dvsi82A-` chain from the
runtime graph; those bytes are still served at their immutable URLs and are
preserved under `legacy/2026-10-31/` (never invented as "gone upstream").

Live backend (stays external — not part of the capture): online play and
account features talk to `backend.voxelrush.app`; served locally the menu shows
"Account unavailable" and online play cannot join, while Single player runs
fully from the capture. The origin answers missing paths with an HTTP 200
text/html SPA-index fallback, so the capture tool rejects any non-HTML response
that is actually the index — recorded in the report as fallback gaps, never
captured as files.

## Layout

- `index.html` + `about/` + `ru/` + `assets/` + `sw.js` + `manifest.webmanifest`
  + `version.json` + `sitemap.xml` + `robots.txt` — the capture at the origin
  root (served paths = on-disk paths; directory routes at their trailing slash)
- `.upstream/manifest.json` — sha256 + bytes for every captured file (Gen-A)
- `_mirror-report.json` — crawl record: request count, fetched paths, recorded
  gaps (404s and SPA-fallback paths), external references
- `readable/` — prettified derived layer at the **served paths** (pinned
  prettier 3.9.6, layout fixed point): 10 `*.pretty.js` + 6 `*.pretty.css` +
  `index-inline-map.json` (`readable/assets/index-BeUlFSPp.pretty.js`,
  `readable/boot.pretty.js`, `readable/sw.pretty.js`,
  `readable/about/index-inline-1.pretty.css`, …)
- `src/` + `split-spec.json` — 790 statement-aligned slices at the served paths
  (`src/assets/index-BeUlFSPp-NN.js`) with the recorded derivation spec (800
  sections, 8 wholeFile, 2 skipped export tables)
- `rename-map.json` — the recovered rename map over `src/` (currently empty:
  0 word-boundary names; see the 2026-10-31 refresh record — the old map was
  invalidated by the redeploy and the campaign is an open task)
- `legacy/2026-10-15/` — the superseded derived layers (the 2026-10-13 flat
  `readable__`/`src__` layers and the pre-rename served-path slices), archived
  byte-exact per PLAN §3/§5
- `legacy/2026-10-31/` — the refresh archive: the 4 replaced capture files
  (`index.html`, `robots.txt`, `sw.js`, `version.json`), the 26 superseded
  capture files (old bundles + the 22 dealer WAVs), both superseded payload
  chains, the replaced `_mirror-report.json` / `.upstream/manifest.json`, the
  2026-10-15 `rename-map.json` and `tools/names.json`, and every superseded
  `readable/`/`src/` file
- `docs/cover.png` — gameplay cover; `docs/boot-2026-10-13.png`,
  `docs/boot-2026-10-27.png`, `docs/boot-2026-10-31-refresh.png` — boot evidence;
  `docs/boot-harness.html` — the iframe boot harness (embed mode is a supported
  mode of the app; the capture is untouched)
- `tools/capture.mjs` — byte-exact capture + runtime-closure fetch (`--check`
  for a residual closure audit; `--out <dir>` for dry runs)
- `tools/derive.mjs` — rebuild `readable/` + `src/` + `split-spec.json`
  (`--check` re-renders and byte-compares without writing; archives superseded
  files to `legacy/<date>/`, and `ARCHIVE_DATE` selects that date)
- `tools/verify.mjs` — re-hash the capture against the manifest
- `tools/update.mjs` — drift probe (`--json`), the mandatory `--gate` trust
  gate, and the gated `--pull` refresh (see below)
- `tools/boot.mjs` — self-contained offline boot test: its own headless
  Chromium with `--host-resolver-rules=MAP * 127.0.0.1`, `serve.mjs` on
  4700–4799, render assertions, screenshot into `docs/`
- `tools/audit.js` — integrity gate for the derived layers (`AUDIT PASS`)
- `tools/check-exports.mjs` — public-export-name gate for the derived layer
  (self-contained; every public name the capture exported is still exported)
- `tools/serve.mjs` — local static server with the origin's COOP/COEP headers
  (directory-index aware; boot/play only)
- rename campaign — `tools/names.json` (reviewed), `tools/apply-names.mjs`,
  `tools/recover-scoped-map.mjs`, `tools/verify-rename.mjs`,
  `tools/check-chunk.mjs`, `tools/probe-structure.mjs`, `tools/refcheck.mjs`,
  `tools/record-manifest.mjs` and the shared `tools/engine/rename-layer.mjs`
  (acorn from `tools/.deps`, gitignored authoring dependency)

## Assets

- **audio** — none as files (the 22-file en/ru dealer voice bank was part of the
  2026-10-12 build only; the 2026-10-28 redeploy no longer references it. The
  WAVs are preserved byte-exact under `legacy/2026-10-31/assets/`)
- **images** — 10 file(s): `screens/` (4 gameplay screenshots:
  frontline-river-crossing / frontline-village-fight / frontline-kavir-citadel /
  deploy-classes), `icons/` (4 app icons incl. maskable-512), `og-image.jpg`,
  `favicon.ico`
- **data** — 15 file(s): 11 locale bundles (`assets/ar-*.json` … `assets/tr-*.json`),
  `manifest.webmanifest`, `version.json`, `sitemap.xml`, `robots.txt`
- **vendor copy** — `vendor/telegram-web-app.js` (the origin self-hosts the
  Telegram shim; captured byte-exact, the CDN reference stays external)
- **fonts** — none as files (the UI font ships base64-inlined in the entry/CSS)
- **models** — none as files (the voxel world is generated by the workers; meshes
  are built procedurally)

## Run

```
node tools/serve.mjs 8099       # serves the repo root on loopback
```

then open http://127.0.0.1:8099/ — the origin requires cross-origin isolation
(COOP same-origin + COEP require-corp), which `tools/serve.mjs` reproduces; a
plain static server without those headers boots the menu but the world worker
will fail. Single player ("Your own world, offline") works fully from the
capture; online play needs the live `backend.voxelrush.app`. For an automated,
network-severed boot run use `node tools/boot.mjs` (its own headless Chromium
with `--host-resolver-rules=MAP * 127.0.0.1`, `serve.mjs` on 4700–4799, render
assertions, screenshot). For screenshots through a normal browser the mirror
was played through `docs/boot-harness.html` — the app is a first-class embed
target and switches to pointer-lock-free drag-look when framed (the harness
loads only captured files and modifies nothing).

## Verify

```
node tools/verify.mjs            # re-hash the capture against the manifest
node tools/update.mjs --gate     # trust gate: the fetch layer reproduces the capture
node tools/audit.js              # derived-layer integrity gate → AUDIT PASS
node tools/derive.mjs --check    # re-render + byte-compare, write nothing
node tools/verify-rename.mjs --all   # rename layer: reproduces / references / bindings
node tools/check-chunk.mjs --all     # cross-slice calls still resolve
node tools/check-exports.mjs     # the derived layer still exports every public name
node tools/record-manifest.mjs --check  # capture walk agrees, no derived path leaked
node tools/capture.mjs --check   # residual closure audit → 0 new unresolved
node tools/boot.mjs --port 4751 --out docs/boot-<date>.png  # offline boot + screenshot
```

## Boot test (2026-10-27)

Entry `http://127.0.0.1:5018/`, served with `node tools/serve.mjs 5018` (the
origin's COOP/COEP headers). The headless browser was launched with the network
blocked at the resolver (`--host-resolver-rules=MAP * 127.0.0.1`) and no
upstream access.

**Outcome: rendered.** The capture boots offline and paints the VOXEL RUSH menu
over a live 3D scene.

Measured evidence after a 7 s settle on `readyState: complete`:

- title `Voxel Rush — Free Browser FPS with Tanks, Helicopters & Drones`
- body text: 394 chars
- canvases: 1262x568 (the 3D scene), 452x452, 216x216, 160x160, 300x150 plus the
  small 40x40 HUD canvases
- scripts: 5
- console messages / page errors: 0 / 0
- same-origin requests: 18, all HTTP 200 (entry document, entry chunk,
  stylesheet, manifest, favicon, icon and 12 `version.json` polls)
- same-origin 404s: none
- cross-origin requests blocked by design: 5 (`telegram.org/js/telegram-web-app.js`;
  `backend.voxelrush.app` `/v1/auth/me`, `/v1/golden`, `/v1/t` POST and its
  OPTIONS preflight) — the live backend is external to the capture

Screenshot: `docs/boot-2026-10-27.png` (verified non-blank; menu with Play
Online / Single player / Armory / Rewards / Settings, a rendered voxel
courtyard, operator model and featured AK-47 panel).

Gaps seen: the menu shows "Account unavailable" and "Sign in to create or join
a squad" because `/v1/auth/me` and `/v1/golden` are live-backend calls; online
play needs `backend.voxelrush.app`, while Single player ("Your own world,
offline") is fully served from the capture.

## Boot test (2026-10-31 refresh)

Entry `http://127.0.0.1:4751/index.html`, served by `tools/boot.mjs` through
`tools/serve.mjs 4751` (the origin's COOP/COEP headers). The harness launches
its own headless Chromium with the network severed at the resolver
(`--host-resolver-rules=MAP * 127.0.0.1`, `--no-proxy-server`), then asserts and
screenshots the result.

**Outcome: rendered.** All 11 checks passed after a 7 s settle on
`readyState: complete`:

- title `Voxel Rush — Free Browser FPS with Tanks, Helicopters & Drones`
- 477 canvases; main canvas 1280x800 client (1280x800 backing), WebGL 2.0
  (`OpenGL ES 3.0 Chromium`, swiftshader)
- body text 501 chars (Halloween event menu: Play Online / Single player /
  Armory / Rewards / Settings + squad and quest panels)
- console messages / errors: 6 / 0
- same-origin requests: all from 127.0.0.1, no 404 (the Cloudflare Insights
  `/cdn-cgi/trace` beacon is the only expected miss — infrastructure noise,
  never captured)
- offline proof: explicit fetches to `play.voxelrush.app` and
  `backend.voxelrush.app` both failed (`TypeError: Failed to fetch`)
- the seasonal modal was dismissed before capture so the menu is visible

Screenshot: `docs/boot-2026-10-31-refresh.png` (verified by reading it back: the
VOXEL RUSH menu over a rendered voxel courtyard, operator model, Halloween quest
panel and featured AK-47). Listener killed and port 4751 proven closed
(`netstat`: no LISTEN).

Gaps seen: "Account unavailable" / "Sign in to create or join a squad" — the
live backend is external, as on 2026-10-27; Single player remains fully served.

## Updating from upstream

```
node tools/update.mjs            # read-only drift probe: what changed upstream
node tools/update.mjs --gate     # trust gate only (writes nothing)
node tools/update.mjs --pull --date YYYY-MM-DD   # gated refresh
```

The probe never rewrites the capture — a mirror is a point-in-time snapshot.
The origin serves an HTTP 200 text/html SPA fallback for missing paths, so the
probe only trusts a 200 whose content type matches the file (an HTML page whose
bytes equal the entry document counts as live-missing); directory captures
(`about/index.html`, `ru/index.html`) are probed at their trailing-slash
routes.

`--pull` is the refresh path (PLAN §3) and refuses to write unless both gates
pass: **the trust gate** fetches every captured file with the capture tool's own
fallback semantics and proves the unchanged files are byte-identical (and each
drifted file is stable across two fetches), and the **closure gate** runs
`tools/capture.mjs --out` into a scratch tree and requires it to reproduce every
unchanged file still in the new closure byte-for-byte. It then archives every
replaced/removed file under `legacy/<date>/`, installs the new closure, records
superseded vs upstream-gone files honestly, and re-cuts the manifest with
`tools/record-manifest.mjs`. Re-deriving `readable/` + `src/` is then required:
`ARCHIVE_DATE=<date> node tools/derive.mjs` (and `tools/recover-scoped-map.mjs`
first if the rename map is being re-authored).

Note the drift probe only compares **captured** files: a redeploy can keep the
old hashed bundles served while the entry document points at a whole new set
(the 2026-10-31 refresh: 4 captured files changed, but the deep closure scan
found 21 new files, 26 superseded and a new payload chain). That is why the
closure gate runs `capture.mjs`, never the probe alone (PLAN §4).

### 2026-10-31 refresh (build mvs8vmgl-d7keq5)

- **Trigger** — `node tools/update.mjs` reported **4 of 47** captured files
  changed (`index.html`, `robots.txt`, `sw.js`, `version.json`), 0 live-missing.
  `version.json` moved `mv5sawna-jtl2ka` (built 2026-10-12T21:49Z) →
  `mvs8vmgl-d7keq5` (built 2026-10-28T15:04Z); `index.html` externalised the
  pre-paint boot script to `/boot.js` and gained hreflang/canonical/sitemap
  metadata; `robots.txt` gained Cloudflare's managed content-signals block;
  `sw.js` is a new build (new cache id and push handling).
- **Trust gate (before any write)** — `node tools/update.mjs --gate`:
  **43/47 unchanged captured files reproduced byte-for-byte**, 4 changed
  upstream (4/4 stable across two independent refetches), 0 live-missing.
- **Deep closure (the probe's blind spot, PLAN §4)** — `--pull` runs
  `tools/capture.mjs --out` into a scratch tree and gates it. The redeploy had
  moved the whole graph: 21 **new** files (`assets/index-BeUlFSPp.js` 3,104,027 B,
  `assets/index-BzCKlgJW.css` 404,534 B, `local-server-worker-A1ihJuBz.js`
  3,500,130 B, `bootstrap-B8Ot5Flt.js` ↔ `main-C153VVJY.js`,
  `chunk-mesh-worker-GBSiXDQy.js`, new `air-props`/`air-terrain` workers,
  11 locale JSON bundles, `boot.js`, `vendor/telegram-web-app.js`) and 26
  **superseded** files (the old entry chunk/stylesheet, old mesh + local-server
  workers and the 22 dealer WAVs — all still served at their immutable URLs, so
  recorded as superseded, never invented as "upstream-gone"). A second pass
  retired the now-unreferenced old payload chain (`bootstrap-C4umvuQD.js`,
  `main-Bs7z9e_r.js`, `terrain-pool-Dvsi82A-.js`) from `KNOWN`, leaving the
  final capture at **39 files, 16,137,083 bytes**.
- **Backup** — every replaced/removed byte went to `legacy/2026-10-31/` first:
  the 4 replaced capture files, all 29 superseded capture files, the replaced
  `_mirror-report.json` and `.upstream/manifest.json`, and the superseded
  `rename-map.json` + `tools/names.json`. Nothing was deleted without a copy
  there (or in history).
- **Re-derive** — `ARCHIVE_DATE=2026-10-31 node tools/derive.mjs` →
  **17 readable files** (10 `*.pretty.js` + 6 `*.pretty.css` + inline map),
  **790 src slices** in **800 spec sections** (8 wholeFile, 2 skipped export
  tables, 28 notRendered, 5 inline content blocks with twins + 3 inline data
  blocks). The bundled three.js r169 band is re-anchored content-wise at
  pretty lines 31–25,943 (machinery 31–30).
- **Rename campaign — explicit open task (PLAN §5).** The 2026-10-15 map is
  **invalid** for this bundle: the minifier reassigned names (the old `MAPS`
  binding `pH` is now a three.js shader chunk; the map table is `LV`), and 36 of
  the 87 rules are refused by guard (s) for occurring inside the wholeFile
  three.js band. `src/` therefore carries the new bundle's own minified names
  and `rename-map.json` records the (identity) alignment; the archived
  `legacy/2026-10-31/tools/names.json` + `rename-map.json` are the authoring
  base for re-authoring against `assets/index-BeUlFSPp.js`. This is the one
  deliberate regression in the refresh and is recorded here rather than claimed.
- **Gates (verbatim)**:
  - `node tools/verify.mjs` → `39 files checked, 0 problems`
  - `node tools/record-manifest.mjs --check` → `PASS — 39 capture file(s) recorded, walk agrees byte-for-byte, no derived path leaked`
  - `node tools/capture.mjs --check` → `closure check: 120 reference group(s), 52 unresolved (0 new vs _mirror-report.json), 7 external off-origin reference(s) (left on CDN)`
  - `node tools/derive.mjs --check` → `DERIVE CHECK PASS — readable/ + src/ + split-spec.json are current under pinned prettier 3.9.6`
  - `node tools/audit.js` → `AUDIT PASS — 800 spec sections (790/790 src↔pretty round-trips byte-exact, 16/16 pretty sources tiled contiguously, 2/2 skipped export-table sections re-verified textually, 790/790 src slices + 10/10 readable/*.pretty.js parse standalone, 16/16 pretties provably distinct, 16/16 source provenances resolve, 10 index-only wholeFile/skipped sections carry no src file, 5 inline content block(s) with twins, 3 inline data block(s) notRendered, 0/0 renameBindings, 3/8 imports resolve (5 whitelisted machinery), 16/16 pretties re-render byte-exact, capture manifest free of derived layers)`
  - `node tools/verify-rename.mjs --all` → `790/790 slice(s) reproduce byte-exact, 0 renamed slice(s), 10/10 chunk(s) references+bindings YES`
  - `node tools/check-chunk.mjs --all` → `10 chunk(s), 790 slice body(ies) substituted — all cross-slice calls resolve`
  - `node tools/check-exports.mjs` → `2 export table(s) checked; no public export name lost`
- **Boot** — `node tools/boot.mjs --port 4751 --session boot-voxelrush-refresh`
  → `BOOT: RENDERED — every check passed` (see the 2026-10-31 boot section);
  screenshot `docs/boot-2026-10-31-refresh.png`; listener killed, port proven
  closed.
- **Live backend, vendor CDNs** — unchanged policy: `backend.voxelrush.app`,
  Google OAuth and the `voxelrush.app`/Discord links stay external;
  `vendor/telegram-web-app.js` is captured only because the origin serves it
  itself (no CDN vendoring was performed).

### 2026-10-13 capture + readable/src derivation

- **Capture** (byte-exact, nothing edited): 47 files, 14,715,503 bytes. Cloudflare
  served the build `mv5sawna-jtl2ka` (`version.json`, built 2026-10-12T21:49Z);
  the recon entry copy (`index-zrKzzARX.js`) is stale — the live redeploy served
  `index-Dp6GxvJu.js`, which is what this capture carries. The origin answers
  missing paths with an HTTP 200 text/html SPA fallback; the capture tool rejects
  that fallback, so the report records 101 gap entries (the 22 build-time
  `assets/dealer/*.wav` key names whose hash-suffixed files ARE captured, 43
  serialized-world key names from the local-server worker's object table, the
  in-memory `/world/*` + `/structures/*` routes, and dev-only literals such as
  `scripts/build-about-pages.mjs` and `voxel-rush-skin.png` — all found by the
  static scan, none served as files upstream).
- **Closure cross-check (the boot test found a real gap)**: serving the first
  capture and playing it, the world boot died on
  `GET /assets/bootstrap-C4umvuQD.js` — the worker dynamic-imports it from a
  base64-encoded string table, invisible to the literal scanner. Decoding the
  obfuscated string arrays enumerated the whole chain
  (`bootstrap-C4umvuQD.js` → `main-Bs7z9e_r.js` → `terrain-pool-Dvsi82A-.js`),
  the three files were fetched, and the mirror then loaded the world with zero
  404s. `tools/capture.mjs --check` → `138 reference group(s), 62 unresolved
  (0 new vs _mirror-report.json), 6 external off-origin reference(s)`; the
  played local session requested only captured same-origin paths (plus the boot
  harness page itself).
- **readable/** — pinned prettier 3.9.6 (module API, default options, formatted
  to a layout fixed point, 1–2 passes — never the CLI, it respects `.gitignore`
  and can silently echo its input) rendered 7 captured JS files to
  `readable/<name>.pretty.js` (nested dirs flattened with `__`; largest:
  `assets__main-Bs7z9e_r.pretty.js`, 144,271 lines; the entry chunk
  `assets__index-Dp6GxvJu.pretty.js`, 139,080 lines) and the stylesheet to
  `readable/assets__index-D16eXMZ8.pretty.css` (20,802 lines). Every pretty is
  provably not a byte copy of its capture source and re-renders byte-exact
  under the pinned version (15/15).
- **Vendor region — wholeFile, never sliced**: inside the entry chunk, the
  bundled **three.js r169** core is content-anchored — from the WebGL
  constants/revision declaration carrying the Three.js Authors MIT license
  header through the `window.__THREE__` revision registration — and the Vite
  modulepreload/helper prefix before it is wholeFile machinery too
  (lines 1–36 machinery, 37–25,942 three.js of the 139,080-line pretty), both
  with positive + negative guards asserted in `derive.mjs` and re-checked by
  `audit.js`. Divergence recorded: the obfuscated payloads also embed three.js
  (math/renderer strings inside the string tables), but obfuscator.io flattens
  those statements and base64-encodes the strings, so no stable anchors exist —
  they are derived as app code and stay obfuscated (rename campaign open).
- **src/** — 682 statement-aligned slices (`src/<tag>-NN.js`, exact 2-line
  provenance header) across the 7 chunks, recorded in `split-spec.json` (695
  sections): 682/682 parse standalone (`node --input-type=module --check -`)
  and round-trip byte-exact to their readable line ranges. Cuts land only on
  top-level declaration boundaries (~250–350 line windows); oversized single
  declarations stay whole (the string tables and flattened IIFEs in the
  obfuscated payloads). Non-standalone parts are skipped sections, indexed but
  never sliced (3: the chunks' final `export {…}` tables).
- **Inline blocks** — `index.html` carries a boot `<script>`, three `<style>`
  blocks and a closing storage-cleanup `<script>`; `about/index.html` and
  `ru/index.html` each carry one `<style>`. All 7 content blocks get wholeFile
  twins + `readable/index-inline-map.json` (exact byte ranges + sha256); the 3
  `application/ld+json` data blocks are hashed notRendered records (no pretty
  pass). The off-origin `<script src="https://telegram.org/js/telegram-web-app.js">`
  is not derived (external — never captured).
- **notRendered** — 39 hashed records (22 audio, 10 images, 4 data files, 3
  inline-data blocks; bytes + sha256, no pretty pass).
- **Gates**: `node tools/verify.mjs` → `47 files checked, 0 problems`;
  `node tools/audit.js` → `AUDIT PASS — 695 spec sections (682/682 src↔pretty
  round-trips byte-exact, 15/15 pretty sources tiled contiguously, 3/3 skipped
  sections re-verified, 682/682 src slices + 9/9 readable pretties parse
  standalone, 15/15 pretties provably distinct AND re-render byte-exact,
  7 inline blocks with twins, 3 inline data blocks recorded, 7/7 imports
  resolved-or-whitelisted)`; `node tools/capture.mjs --check` → 0 new
  unresolved. Independent 3-slice round-trip check → 3/3 byte-exact. Boot test:
  mirror served on loopback, opened through opencli — the menu rendered
  (`docs/boot-2026-10-13.png`), single player built the world and entered play,
  and the cover shows live gameplay (`docs/cover.png`: first-person voxel base
  plaza, HUD, hotbar, minimap, active raid panel). Serve probe: `node
  tools/serve.mjs` on loopback, entry + entry chunk + stylesheet + `about/` over
  HTTP 200 at their recorded sizes, listener PID killed, port proven closed
  (`netstat`).
- **§0.4 fork-over-mirror checked 2026-10-13**: no public upstream source repo —
  the capture contains zero `github.com`/`gitlab.com` references; the only
  off-origin URLs are telegram.org, discord.gg, the `voxelrush.app` marketing
  domain and schema.org/w3.org namespaces inside the ld+json blocks, so the
  mirror stands.
- **Open tasks (PLAN §5)** — *closed 2026-10-15, below*: identifiers in `src/`
  — including the whole obfuscated payload chain — were the bundle's own
  (mangled) names, and the deep identifier-rename campaign was recorded here as
  an open task rather than claimed. The obfuscated string tables themselves were
  readable only by running the same decode pass used during capture; the
  2026-10-15 pass records the decoder + table as **machinery** (see below) and
  does not ship a checked-in decoded table. Rebuild the derived layers any time
  with `node tools/derive.mjs`.

### 2026-10-15 structure + rename pass (the open §5 task, closed)

**Structure, decided from bytes** (`tools/probe-structure.mjs`): the capture
carries **0 `sourceMappingURL` and 0 `*.map` files**; there are no module
factories (`__webpack_require__` / Turbopack signatures absent), so the split
stays statement-aligned. The capture sits at the repo root and **preserves the
served URL structure**, so the derived layers now **mirror the served paths**
(PLAN §5): `readable/assets/index-Dp6GxvJu.pretty.js` and
`src/assets/index-Dp6GxvJu-NN.js` (was `readable/assets__….pretty.js` /
`src/assets__…-NN.js`), `readable/sw.pretty.js`, and the inline twins at
`readable/about/index-inline-1.pretty.css` / `readable/ru/…`. The bundled
**three.js r169** core (lines 37-25,942 of the entry pretty) stays a wholeFile
**vendor** section and the Vite modulepreload prefix (lines 1-36) a wholeFile
**machinery** section, both content-anchored with the positive + negative guards
asserted in `derive.mjs` and re-checked by `audit.js`; the three `export {…}`
tables stay skipped sections. The superseded 2026-10-13 flat layers and the
pre-rename served-path slices are archived byte-exact under
`legacy/2026-10-15/` (742 files, both `readable/` and `src/`). Counts are
unchanged by the move: **readable 9 JS + 6 CSS pretties**, **src 682 slices**,
**695 spec sections**, **7 inline twins**, **39 notRendered records**.

**Rename campaign (pipeline apply -> recover -> derive -> gates)** with the full
guard set exercised — marked Function/Class declaration ids + shorthand-property
refusal at preflight ((p)), brace-depth template scanning ((r)), wholeFile-region
occurrence refusal + per-source line cache ((s)), skipped-section reach via
`sources[].renameBindings` ((t)(1)), the `of`/`in` KEYWORD-position guard in the
reconstruction binding map ((x)), per-chunk target uniqueness ((ad)), the
canonical record-manifest SKIP/NOT_CAPTURED sets ((u)), the multi-pass prettier
fixed-point re-render check ((t)(3)), the token-based import/asset specifier
extractor ((ab)) and flat-occurrence counting on the base token stream ((af)).
Guard (ag) is carried but scoped to the true whole-program IIFE shape (a flat
module with top-level call statements is **not** re-rooted — a-place-beyond's
refinement, proposal (ah)); no sliced chunk here is a whole-program IIFE.

- **The obfuscated string tables are MACHINERY, decided and recorded.** The
  five obfuscator.io payloads (`bootstrap`, `main`, `terrain-pool`,
  `local-server-worker`, `sw.js`) carry a decoder function + base64 string array
  (`const _0x43edc6 = _0x39b1;` and the shuffle IIFE) embedded inside app
  statements. That plumbing is not app code, but it has **no stable content
  anchors** to band it wholeFile (the statements are flattened and the strings
  encoded), so it is sliced as app code, **stays obfuscated and is not renamed**
  — recorded as a `names.json` review exclusion (PLAN §5). The payload chain
  `bootstrap → main → terrain-pool` the capture tool found via the browser
  network log is exactly what those tables decode; the app names inside them are
  reachable only by running the decode pass, so those chunks are an honest gap.
- Candidate enumeration (`node tools/apply-names.mjs --list
  assets/index-Dp6GxvJu.js`): **3,630 program-scope names, 2,781 ELIGIBLE, 849
  refused** (declared in, or referenced from, the wholeFile three.js/machinery
  regions — the vendor rule). `tools/names.json` = **87 reviewed names**: 86
  evidence-based program-scope bindings of the entry chunk — the item-id enum
  `ITEM` (COMPUTER/GLOCK/AK47/AWP/…), the block-id enum `BLOCK`
  (AIR/SEAWEED/WOOD_CHAIR/…), `VEHICLE_KIND`, `PROJECTILE_KIND`, the block
  registry `BLOCKS` + its factory `blockDef` + `defineBlock`, the map tables
  `MAPS`/`SMALL_MAPS` + `isMapId`/`isSmallMapId`/`resolveMap`, `SLOT_GAMES`,
  `ANIMAL_KIND`/`WATER_ANIMALS`, `BIOME`/`BIOME_BY_DYE`, `CELESTIAL`,
  `ARMOR_SLOTS`/`ARMOR_SLOTS_RU`/`ARMOR_SLOTS_EN`, `BLOCK_NAMES_RU`/`_EN`,
  `RANKS`, `RARITIES`, `WEAPON_CATEGORIES`, `WEAR_TIERS`,
  `WEAPON_ATTACHMENTS`, `EXPLOSION_RADIUS`, `NUKE_PROJECTILES`, `VEHICLE_ARMOR`,
  `ROLE_STYLES`/`roleStyle`/`roleOf`/`localRole`, `SETTINGS`/`QUALITY_PRESETS`,
  the storage keys (`SETTINGS_KEY`, `SOCIAL_POSTS_KEY`, `REJOIN_KEY`,
  `UPDATE_ATTEMPT_KEY`, `EMBED_TOKEN_KEY`, `SITE_URL`), the social/stat/emote
  tables, `KILLSTREAK_TITLES`, `TILE_KIND`, `GAMEMODES`, the math helpers
  `clamp`/`lerp`/`cellKey`/`packColor`/`cubeRootScale`, the canvas/SVG helpers
  `makeCanvas`/`svgIcon`/`wrapSvgIcon`/`X_LOGO_SVG` and `localized` — plus
  `terrain-pool`'s `H → installTerrainPool`, named from the chunk's own export
  table (`export { H as installTerrainPool }`).
- Applied **6,427 identifier splices over 178 slices**; `rename-map.json` = 464
  word-boundary names + 29 indexed names over 425 occurrences, recovered by
  token alignment over **2,238,250 identifier/token positions** (682/682 slices
  align).
- **New guard fix (proposal (ai))**: the campaign writer's scope walk returned
  early on `LabeledStatement`, leaving every identifier inside a labeled loop
  unmarked — so a program-scope name used there was renamed at some references
  and not others. `verify-rename`'s reference drift caught it live on the entry
  chunk (`e: for (…) { … v.FURNACE … }` kept `v` while its declaration became
  `BLOCK`); the walk now walks the labeled body and skips only the label.
- Gate tails (verbatim):
  - `node tools/verify.mjs` → `47 files checked, 0 problems`
  - `node tools/audit.js` → `AUDIT PASS — 695 spec sections (682/682 src↔pretty round-trips byte-exact, 178 through the recorded rename map, 15/15 pretty sources tiled contiguously, 3/3 skipped export-table sections re-verified textually, 682/682 src slices + 9/9 readable/*.pretty.js parse standalone (node --input-type=module --check -), 15/15 pretties provably distinct from their capture source, 15/15 source provenances resolve, 13 index-only wholeFile/skipped sections carry no src file, 7 inline content block(s) with twins + index-inline-map.json, 3 inline data block(s) recorded notRendered, 1/1 renameBindings name(s) re-found in skipped sections + binding map applies, 3/6 imports resolve inside the capture (3 whitelisted machinery, 0 accepted as recorded gaps), 15/15 pretties re-render byte-exact under pinned prettier 3.9.6 (fixed point), capture manifest free of derived layers)`
  - `node tools/derive.mjs --check` → `DERIVE CHECK PASS — readable/ + src/ + split-spec.json are current under pinned prettier 3.9.6`
  - `node tools/verify-rename.mjs --all` → `verify-rename: 682/682 slice(s) reproduce byte-exact, 178 renamed slice(s) (425 indexed occurrence(s)), 7/7 chunk(s) references+bindings YES`
  - `node tools/check-chunk.mjs --all` → `check-chunk: 7 chunk(s), 682 slice body(ies) substituted — all cross-slice calls resolve`
  - `node tools/apply-names.mjs --all --dry` idempotent → `apply-names: 682 file(s) visited, 0 changed, 0 rule group(s), 6427 identifier splice(s) (app: 87 name(s) over 2 chunk(s), 6427 splice(s)) (dry run)`; `node tools/recover-scoped-map.mjs` re-run byte-identical (sha256 `0befc6db098c1ef5…`)
  - `node tools/record-manifest.mjs --check` → `record-manifest --check: PASS — 47 capture file(s) recorded, walk agrees byte-for-byte, no derived path leaked`
  - `node tools/capture.mjs --check` → `closure check: 138 reference group(s), 62 unresolved (0 new vs _mirror-report.json), 6 external off-origin reference(s) (left on CDN)`
  - serve probe (`node tools/serve.mjs 8137`): `/`, `/index.html`, `/assets/index-Dp6GxvJu.js` (2,965,190 B, served sha256 prefix `86d5be80af26d437` = on-disk capture), `/assets/index-D16eXMZ8.css` (346,768 B), `/assets/bootstrap-C4umvuQD.js`, `/about/`, `/ru/` and `/assets/en-betting-fLWr_8lQ.wav` → HTTP 200; `/nope.js` → honest 404; listener PID killed, port 8137 proven closed (`netstat`).
- Honest gaps: the obfuscated payloads (main 3,063 / local-server-worker 451 /
  chunk-mesh-worker 349 / bootstrap 47 / sw 14 / terrain-pool 5 program-scope
  names) keep their mangled names — the entry chunk's 86 reviewed bindings are
  the named set, the remaining ~2,695 eligible entry-chunk names and all
  function-locals keep the minifier's names; the bundled three.js r169 vendor
  region, the machinery prefix and every stylesheet/inline twin stay unrenamed by
  the vendor/stylesheet rule. The rename-map keys are per-build token indices, so
  a future upstream refresh re-authors them from `tools/names.json` (the durable
  list).
- Fleet row unchanged and still valid below (`ver`/`upd`/`man`/`rdbl`/`src`/
  `boot`/`top` green — the 2026-10-13 boot/cover evidence stands; `tag`/`staged`
  untouched).

## Mirror conventions

- **Capture layer** — the captured files are byte-exact copies of what the
  origin served; nothing in them is edited. `.gitattributes` pins `* -text` so
  git never normalizes EOLs.
- **Vendor integrity** — three.js and every image/data file stay byte-exact as
  served (the 22 legacy dealer WAVs are preserved under `legacy/2026-10-31/`);
  `readable/` never rewrites vendor bytes (the three.js region is indexed whole,
  never sliced).
- **Readable layer** — `readable/` is derived (prettified) and never shipped to
  a browser; it exists so the bundle can actually be read.
- **Provenance** — `.upstream/manifest.json` records sha256 for each captured
  artifact, and `tools/verify.mjs` re-checks it; `_mirror-report.json` is the
  crawl record.
- **Drift** — `tools/update.mjs` is read-only by default: it reports what
  changed upstream and never rewrites the capture. The explicit `--pull` (gated
  by `--gate`'s byte-for-byte reproduction + the scratch closure gate) is the
  only writing refresh path, and it always archives what it replaces.

## Fleet status

<!-- mirror-status:start — feeds _standard/REPO-INDEX.md. Update ONLY your own mirror's block; never edit the shared index (PLAN §8). Rebuild: node _standard/build-index.mjs -->
<!-- cols: cls=classification · ver=verify 0 problems · upd=drift probe · man=manifest · rdbl=readable re-derived · src=reversed src · boot=boot test · top=offline-mirror topic · tag=backup tag · staged=staged not committed -->
| # | repo | cls | ver | upd | man | rdbl | src | boot | top | tag | staged |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 298 | voxelrush | mirror | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — | — |
<!-- mirror-status:end -->
