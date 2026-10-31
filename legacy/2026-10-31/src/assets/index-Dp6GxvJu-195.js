// index-Dp6GxvJu 195 — location
// Lines 106817-106874 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const $I = 1012;
function Jee(n) {
  try {
    const e = JSON.parse(n);
    if (
      (e == null ? void 0 : e.kind) === "restart" &&
      Number.isFinite(e.seconds) &&
      e.seconds >= 0 &&
      e.seconds <= 3600
    )
      return {
        kind: "restart",
        seconds: e.seconds,
        reason: e.reason === "maintenance" ? "maintenance" : "update",
      };
    if ((e == null ? void 0 : e.kind) === "cancel") return { kind: "cancel" };
    if ((e == null ? void 0 : e.kind) === "restarting")
      return {
        kind: "restarting",
        reason: e.reason === "maintenance" ? "maintenance" : "update",
      };
  } catch {}
  return null;
}
const ete = 6e4,
  tte = 3;
function ite() {
  const e = "".trim() || (location.port === "5173" ? "8080" : "");
  return !e || e === location.port
    ? null
    : `${location.protocol === "https:" ? "wss://" : "ws://"}${location.hostname}:${e}`;
}
function nte(n) {
  const e = n.split("/")[0].split(":")[0].toLowerCase(),
    t = e === "localhost" || e === "127.0.0.1" || e === "::1";
  return location.protocol === "https:" && !t ? "wss://" : "ws://";
}
function ste(n) {
  let e = n.trim();
  if (!e) {
    const t = ite();
    if (t) return t;
    if (location.protocol.startsWith("http") && location.port !== "5173")
      return (
        (location.protocol === "https:" ? "wss://" : "ws://") + location.host
      );
    e = "localhost:8080";
  }
  return e.startsWith("ws://") || e.startsWith("wss://")
    ? e
    : e.startsWith("https://")
      ? "wss://" + e.slice(8)
      : e.startsWith("http://")
        ? "ws://" + e.slice(7)
        : e.endsWith(".trycloudflare.com")
          ? "wss://" + e
          : nte(e) + e;
}
