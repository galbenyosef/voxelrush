// boot.mjs — offline boot test for the VOXEL RUSH mirror.
//
// Launches its own headless Chromium with every hostname mapped to loopback
// (`--host-resolver-rules=MAP * 127.0.0.1`) and the system proxy disabled, so
// nothing the page asks for can leave the machine; serves the repository root
// with tools/serve.mjs on a port in 4700–4799 (it reproduces the origin's
// COOP/COEP headers, which the world worker needs); loads the captured entry
// document; asserts that it actually rendered; and writes the screenshot into
// docs/.
//
// The harness talks to Chromium over the DevTools protocol with the built-in
// WebSocket (Node >= 22) — no npm dependency, no browser extension, and above
// all no browser the test did not launch itself with those flags.
//
// usage: node tools/boot.mjs [--port 4751] [--session boot-voxelrush-refresh]
//                            [--out docs/boot-2026-10-31-refresh.png]
//                            [--chrome <path>]
// exit: 0 rendered, 1 not rendered / assertions failed, 2 harness error
import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PROJ = path.resolve(HERE, "..");
const arg = (f, d) => {
  const i = process.argv.indexOf(f);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : d;
};
const PORT = Number(arg("--port", "4751"));
const SESSION = arg("--session", "boot-voxelrush-refresh");
const OUT = path.resolve(PROJ, arg("--out", "docs/boot.png"));
const ENTRY = "index.html"; // capture sits at the repo root
const EXPECT_TITLE = "Voxel Rush — Free Browser FPS with Tanks, Helicopters & Drones";
const WIDTH = Number(arg("--width", "1280"));
const HEIGHT = Number(arg("--height", "800"));

if (PORT < 4700 || PORT > 4799) {
  console.error(`--port must be in 4700–4799 (the fleet's boot-test range); got ${PORT}`);
  process.exit(2);
}

const CHROME = arg(
  "--chrome",
  process.env.CHROME_PATH ||
    [
      "C:/Program Files/Google/Chrome/Application/chrome.exe",
      "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
      "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
      "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
    ].find((p) => fs.existsSync(p)) ||
    "chrome",
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------------------------------------------------------------- static server
const server = spawn(process.execPath, [path.join(HERE, "serve.mjs"), String(PORT)], {
  cwd: PROJ,
  stdio: ["ignore", "pipe", "pipe"],
});
let serverLog = "";
server.stdout.on("data", (d) => (serverLog += d.toString()));
server.stderr.on("data", (d) => (serverLog += d.toString()));
await sleep(700);
if (server.exitCode !== null) {
  console.error(`serve.mjs failed to start:\n${serverLog}`);
  process.exit(2);
}

// ---------------------------------------------------------------- chromium
const profile = path.join(PROJ, "tmp", `boot-${SESSION}`);
fs.rmSync(profile, { recursive: true, force: true });
fs.mkdirSync(profile, { recursive: true });
const dbgPort = 9330 + (PORT % 10);
const flags = [
  "--headless=new",
  `--remote-debugging-port=${dbgPort}`,
  "--remote-allow-origins=*",
  `--user-data-dir=${profile}`,
  "--host-resolver-rules=MAP * 127.0.0.1",
  "--no-proxy-server",
  "--disable-background-networking",
  "--disable-component-update",
  "--disable-default-apps",
  "--disable-sync",
  "--no-first-run",
  "--no-default-browser-check",
  "--enable-unsafe-swiftshader",
  "--use-gl=angle",
  "--use-angle=swiftshader",
  `--window-size=${WIDTH},${HEIGHT}`,
  "about:blank",
];
const chrome = spawn(CHROME, flags, { stdio: ["ignore", "pipe", "pipe"] });
let chromeErr = "";
chrome.stderr.on("data", (d) => (chromeErr += d.toString()));
// A harness bug must not leave a browser or a server behind.
process.on("exit", () => {
  try {
    chrome.kill("SIGKILL");
  } catch {
    /* already gone */
  }
  try {
    server.kill("SIGKILL");
  } catch {
    /* already gone */
  }
});

function cleanup(code) {
  try {
    chrome.kill("SIGKILL");
  } catch {
    /* already gone */
  }
  try {
    server.kill("SIGKILL");
  } catch {
    /* already gone */
  }
  setTimeout(() => {
    fs.rmSync(profile, { recursive: true, force: true });
    process.exit(code);
  }, 400);
}

// The browser endpoint, and one page target to drive.
let browserWs = null;
for (let i = 0; i < 60 && !browserWs; i++) {
  try {
    const r = await fetch(`http://127.0.0.1:${dbgPort}/json/version`);
    if (r.ok) browserWs = (await r.json()).webSocketDebuggerUrl;
  } catch {
    await sleep(250);
  }
}
if (!browserWs) {
  console.error("chromium did not expose a DevTools endpoint");
  console.error(chromeErr.slice(0, 600));
  cleanup(2);
}

// ---------------------------------------------------------------- tiny CDP client
function connect(url) {
  const ws = new WebSocket(url);
  let nextId = 1;
  const pending = new Map();
  const listeners = new Set();
  const ready = new Promise((res, rej) => {
    ws.addEventListener("open", () => res());
    ws.addEventListener("error", (e) => rej(new Error("ws error: " + (e.message || "unknown"))));
  });
  ws.addEventListener("message", (ev) => {
    const msg = JSON.parse(typeof ev.data === "string" ? ev.data : ev.data.toString());
    if (msg.id && pending.has(msg.id)) {
      const { res, rej } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) rej(new Error(`${msg.error.message} (${msg.error.code})`));
      else res(msg.result);
    } else if (msg.method) {
      for (const l of listeners) l(msg);
    }
  });
  return {
    ready,
    send(method, params = {}, sessionId) {
      const id = nextId++;
      return new Promise((res, rej) => {
        pending.set(id, { res, rej });
        ws.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
        setTimeout(() => {
          if (pending.has(id)) {
            pending.delete(id);
            rej(new Error(`${method} timed out`));
          }
        }, 30000);
      });
    },
    on(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    close() {
      try {
        ws.close();
      } catch {
        /* ignore */
      }
    },
  };
}

const browser = connect(browserWs);
await browser.ready;
const { targetId } = await browser.send("Target.createTarget", { url: "about:blank" });
const { sessionId } = await browser.send("Target.attachToTarget", { targetId, flatten: true });
const page = {
  send: (m, p) => browser.send(m, p, sessionId),
  on: (fn) => browser.on(fn),
};

// ---------------------------------------------------------------- evidence
const consoleErrors = [];
const consoleMessages = [];
const requests = [];
const responseHosts = new Map();
const failures = [];
page.on((m) => {
  if (m.method === "Runtime.exceptionThrown") {
    consoleErrors.push(m.params.exceptionDetails?.exception?.description || m.params.exceptionDetails?.text || "exception");
  }
  if (m.method === "Runtime.consoleAPICalled") {
    const text = (m.params.args || []).map((a) => a.value ?? a.description ?? a.type).join(" ");
    consoleMessages.push({ type: m.params.type, text });
    if (m.params.type === "error") consoleErrors.push(text);
  }
  if (m.method === "Network.requestWillBeSent") {
    try {
      const u = new URL(m.params.request.url);
      if (u.protocol === "http:" || u.protocol === "https:") requests.push(m.params.request.url);
    } catch {
      /* ignore */
    }
  }
  if (m.method === "Network.responseReceived") {
    try {
      const u = new URL(m.params.response.url);
      const key = `${u.host}`;
      responseHosts.set(key, (responseHosts.get(key) || 0) + 1);
      if (m.params.response.status >= 400) failures.push({ url: m.params.response.url, status: m.params.response.status });
    } catch {
      /* ignore */
    }
  }
  if (m.method === "Network.loadingFailed") {
    failures.push({ url: requests[requests.length - 1] || "(unknown)", error: m.params.errorText, blocked: !!m.params.blockedReason });
  }
});

await page.send("Page.enable");
await page.send("Runtime.enable");
await page.send("Network.enable");
await page.send("Page.setDeviceMetricsOverride", { width: WIDTH, height: HEIGHT, deviceScaleFactor: 1, mobile: false }).catch(() => {});

const url = `http://127.0.0.1:${PORT}/${ENTRY}`;
await page.send("Page.navigate", { url });
// Let the WebGL menu scene draw: the document renders continuously via rAF.
// Wait for the load event (bounded), then give the scene a settle window.
for (let i = 0; i < 30; i++) {
  await sleep(500);
  const { result } = await page.send("Runtime.evaluate", { expression: "document.readyState", returnByValue: true });
  if (result.value === "complete") break;
}
await sleep(7000);

// The redeploy opens a seasonal event modal over the menu. Dismiss it (if
// present) so the evidence screenshot shows the rendered menu behind it.
await page.send("Runtime.evaluate", {
  expression: `(() => {
    const b = [...document.querySelectorAll("button, [role=button]")].find((e) => (e.textContent || "").trim() === "Got it");
    if (b) { b.click(); return "dismissed"; }
    return "no modal";
  })()`,
  returnByValue: true,
});
await sleep(1500);

const probe = `(() => {
  const canvases = [...document.querySelectorAll("canvas")].map((c) => ({ width: c.width, height: c.height, clientWidth: c.clientWidth, clientHeight: c.clientHeight }));
  const main = [...document.querySelectorAll("canvas")].sort((a, b) => b.clientWidth * b.clientHeight - a.clientWidth * a.clientHeight)[0];
  const gl = main && (main.getContext("webgl2") || main.getContext("webgl"));
  return {
    url: location.href,
    title: document.title,
    readyState: document.readyState,
    bodyTextLength: (document.body.innerText || "").trim().length,
    bodyTextSample: (document.body.innerText || "").trim().slice(0, 160),
    canvases,
    mainCanvas: main ? { width: main.width, height: main.height, clientWidth: main.clientWidth, clientHeight: main.clientHeight } : null,
    webgl: !!gl,
    webglVersion: gl ? gl.getParameter(gl.VERSION) : null,
    scripts: document.scripts.length,
  };
})()`;
const { result: probeResult } = await page.send("Runtime.evaluate", { expression: probe, returnByValue: true });
const facts = probeResult.value;

// The offline claim, measured: explicit requests to the live origin and backend
// hosts must fail, because every hostname resolves to loopback (nothing listens
// on 443 there).
const offlineProbe = `(async () => {
  const one = async (u) => {
    try {
      const ac = new AbortController();
      setTimeout(() => ac.abort(), 4000);
      const r = await fetch(u, { mode: "no-cors", cache: "no-store", signal: ac.signal });
      return { host: new URL(u).host, blocked: false, type: r.type };
    } catch (e) {
      return { host: new URL(u).host, blocked: true, error: e.name + ": " + e.message };
    }
  };
  return Promise.all([one("https://play.voxelrush.app/"), one("https://backend.voxelrush.app/")]);
})()`;
const { result: offlineResult } = await page.send("Runtime.evaluate", {
  expression: offlineProbe,
  awaitPromise: true,
  returnByValue: true,
});
const offline = offlineResult.value;

const { data } = await page.send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, Buffer.from(data, "base64"));

const nonLoopback = [...responseHosts.keys()].filter(
  (h) => h && !/^(127\.0\.0\.1|localhost)(:\d+)?$/.test(h) && !h.startsWith("data") && !h.startsWith("blob"),
);
// /cdn-cgi/trace is Cloudflare's Insights beacon: the mirror answers an honest
// 404 for it (never captured — it is per-request infrastructure noise), so it is
// expected offline and is not a capture gap.
const sameOrigin404 = failures
  .filter((f) => typeof f.status === "number" && f.status === 404)
  .map((f) => new URL(f.url).pathname)
  .filter((p) => !p.startsWith("/cdn-cgi/"));

// ---------------------------------------------------------------- assertions
const checks = [
  ["title", facts.title === EXPECT_TITLE, facts.title],
  ["readyState complete", facts.readyState === "complete", facts.readyState],
  ["canvas present", (facts.canvases || []).length > 0, `${(facts.canvases || []).length} canvas(es)`],
  ["main canvas has area", !!facts.mainCanvas && facts.mainCanvas.clientWidth > 0 && facts.mainCanvas.clientHeight > 0, facts.mainCanvas ? `${facts.mainCanvas.clientWidth}x${facts.mainCanvas.clientHeight} (${facts.mainCanvas.width}x${facts.mainCanvas.height} backing)` : "none"],
  ["webgl context", facts.webgl === true, facts.webglVersion || "none"],
  ["body text", facts.bodyTextLength > 0, `${facts.bodyTextLength} chars`],
  ["no console errors", consoleErrors.length === 0, consoleErrors.join(" | ").slice(0, 300) || "0"],
  ["offline: live origin + backend unreachable", Array.isArray(offline) && offline.every((o) => o.blocked === true), JSON.stringify(offline)],
  ["no non-loopback response", nonLoopback.length === 0, nonLoopback.join(", ") || "all responses from 127.0.0.1"],
  ["no same-origin 404", sameOrigin404.length === 0, sameOrigin404.join(", ") || "none"],
  ["screenshot written", fs.existsSync(OUT) && fs.statSync(OUT).size > 10000, fs.existsSync(OUT) ? `${fs.statSync(OUT).size} B` : "missing"],
];

console.log(`boot test — session ${SESSION}`);
console.log(`  chrome : ${CHROME}`);
console.log(`  flags  : --host-resolver-rules="MAP * 127.0.0.1" --no-proxy-server (headless, swiftshader)`);
console.log(`  serve  : node tools/serve.mjs ${PORT} (repository root)`);
console.log(`  entry  : ${url}`);
console.log("");
for (const [name, ok, detail] of checks) console.log(`  ${ok ? "PASS" : "FAIL"}  ${name.padEnd(46)} ${detail}`);
console.log("");
console.log(`  same-origin requests from the page: ${[...responseHosts.entries()].map(([h, n]) => `${h} x${n}`).join(", ") || "(none)"}`);
console.log(`  4xx/5xx subresources: ${sameOrigin404.join(", ") || "none"}`);
console.log(`  console messages: ${consoleMessages.length}; errors: ${consoleErrors.length}`);
console.log(`  server log: ${serverLog.trim().split("\n").slice(1).join(" | ") || "(empty)"}`);
console.log(`  screenshot: ${path.relative(PROJ, OUT).split(path.sep).join("/")}`);
console.log(`  body text: ${String(facts.bodyTextSample).replace(/\s+/g, " ")}`);

const failed = checks.filter(([, ok]) => !ok);
console.log("");
console.log(failed.length ? `BOOT: NOT RENDERED — ${failed.length} check(s) failed` : "BOOT: RENDERED — every check passed");

page.send("Page.close").catch(() => {});
await browser.send("Browser.close").catch(() => {});
cleanup(failed.length ? 1 : 0);
