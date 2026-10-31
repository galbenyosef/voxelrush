// index-BeUlFSPp 217 — location
// Lines 113503-113560 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const a9 = 1012;
function dre(s) {
  try {
    const e = JSON.parse(s);
    if (
      e?.kind === "restart" &&
      Number.isFinite(e.seconds) &&
      e.seconds >= 0 &&
      e.seconds <= 3600
    )
      return {
        kind: "restart",
        seconds: e.seconds,
        reason: e.reason === "maintenance" ? "maintenance" : "update",
      };
    if (e?.kind === "cancel") return { kind: "cancel" };
    if (e?.kind === "restarting")
      return {
        kind: "restarting",
        reason: e.reason === "maintenance" ? "maintenance" : "update",
      };
  } catch {}
  return null;
}
const ure = 6e4,
  fre = 3;
function pre() {
  const e = "".trim() || (location.port === "5173" ? "8080" : "");
  return !e || e === location.port
    ? null
    : `${location.protocol === "https:" ? "wss://" : "ws://"}${location.hostname}:${e}`;
}
function mre(s) {
  const e = s.split("/")[0].split(":")[0].toLowerCase(),
    t = e === "localhost" || e === "127.0.0.1" || e === "::1";
  return location.protocol === "https:" && !t ? "wss://" : "ws://";
}
function gre(s) {
  let e = s.trim();
  if (!e) {
    const t = pre();
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
          : mre(e) + e;
}
