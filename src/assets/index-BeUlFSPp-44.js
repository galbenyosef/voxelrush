// index-BeUlFSPp 44 — date
// Lines 41044-41158 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function rf(s) {
  ((qe = s),
    jP(s),
    typeof window < "u" && window.dispatchEvent(new Event("account-changed")));
}
let W2 = null;
function If() {
  return qe
    ? Promise.resolve(qe)
    : (W2 ||
        (W2 = Vi("/auth/guest", "POST", jo ? { embed: !0 } : {})
          .then((s) => (af(s.token), rf(s.user), s.user))
          .finally(() => {
            W2 = null;
          })),
      W2);
}
function T_() {
  if (qe?.is_guest)
    try {
      localStorage.setItem("vr-guest-played", qe.id);
    } catch {}
}
function Pq(s) {
  ((ur = s.role), (Lf = s.permissions), yv.clear());
  for (const e of s.roster) yv.set(e.name, e.role);
  window.dispatchEvent(new Event("access-changed"));
}
function Oq(s) {
  ((ur = s ? "owner" : "player"), (Lf = s ? ["*"] : []), yv.clear(), Sq());
}
function Ch(s) {
  return mm(ur, Lf, Tq(s));
}
function VS(s) {
  const e = yv.get(s) || "player",
    t = na(s),
    i = xq(s, e),
    n = Br(s) ? "#65cfff" : wq(s) ? "#68e5a2" : mv[e].color;
  return {
    ...mv[e],
    color: n,
    baseLabel: i,
    squad: t,
    label: i + (t ? " [" + t.name + "]" : ""),
  };
}
async function Nq(s) {
  const e = new URL(s);
  ((e.protocol = e.protocol === "wss:" ? "https:" : "http:"),
    (e.pathname = "/api/server-info"),
    (e.search = ""));
  const t = await fetch(e, { signal: AbortSignal.timeout(6e3) });
  if (!t.ok)
    throw new Error(
      KP(
        "Could not reach the game server.",
        "Не удалось подключиться к игровому серверу.",
      ),
    );
  return (await t.json()).requireAuth === !1
    ? ""
    : (await If(), (await Vi("/game/ticket", "POST", { address: s })).ticket);
}
function qS(s = !1) {
  return s
    ? mm(ur, Lf, "world.edit")
    : !!qe && mm(qe.role, qe.permissions, "world.edit");
}
const DA = () => -new Date().getTimezoneOffset();
let ua = null,
  x_ = 0,
  KS = !1;
const XP = new Set(),
  ZP = (s) => {
    XP.add(s);
  },
  QP = () => {
    for (const s of XP) s();
    window.dispatchEvent(new Event("golden-changed"));
  },
  JP = () => ua,
  Uc = () => !!ua?.enabled && ua.active && Date.now() < ua.endsAt,
  Dq = () => (Uc() ? ua.multiplier : 1),
  vv = () =>
    ua ? Math.max(0, (Uc() ? ua.endsAt : ua.startsAt) - Date.now()) : 0;
function eO() {
  if ((clearTimeout(x_), !ua?.enabled)) return;
  const s = (Uc() ? ua.endsAt : ua.startsAt) - Date.now();
  x_ = window.setTimeout(
    () => void YS(),
    Math.max(5e3, Math.min(s + 2e3, 6e5)),
  );
}
async function YS() {
  try {
    const s = Uc();
    ((ua = await Vi(`/golden?tz=${DA()}`)),
      (s !== Uc() || !KS) && QP(),
      (KS = !0));
  } catch {}
  return (eO(), ua);
}
function Hq(s) {
  if (!s) return;
  const e = Uc();
  ((ua = s), (KS = !0), e !== Uc() && QP(), eO());
}
function Bq() {
  typeof window > "u" ||
    (window.setTimeout(() => void YS(), 1500),
    document.addEventListener("visibilitychange", () => {
      document.hidden || YS();
    }));
}
