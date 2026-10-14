// index-Dp6GxvJu 15 — color
// Lines 30684-31006 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const mg = {
  owner: { prefix: "[Owner]", color: "#ff5555", weight: "bold" },
  admin: { prefix: "[Admin]", color: "#ff5555", weight: "bold" },
  moderator: { prefix: "[Moder]", color: "#65d9ff", weight: "bold" },
  player: { prefix: "", color: "#ffffff", weight: "normal" },
};
function Ap(n, e, t) {
  return t === "computer.use" || t === "player.vanish"
    ? n === "owner" || n === "admin"
    : n === "owner" || n === "admin"
      ? !0
      : t === "operations.manage"
        ? !1
        : e.includes(t);
}
function Jz(n) {
  const e = n.trim().toLowerCase().replace(/^\//, "").split(/\s+/),
    [t, i = ""] = e;
  if (
    ["computer", "компьютер", "diff"].includes(t) ||
    (t === "give" && ["computer", "компьютер", "pc"].includes(i))
  )
    return "computer.use";
  if (t.startsWith("/")) return "world.edit";
  if (t === "tp" && (e.length === 3 || e.length === 5))
    return "player.teleport_others";
  const s = {
    help: "chat.basic",
    report: "chat.basic",
    dance: "chat.basic",
    friends: "social.friends",
    pay: "economy.pay",
    home: "travel.home",
    sethome: "travel.home",
    spawn: "travel.home",
    rtp: "travel.home",
    tpr: "travel.home",
    tpa: "travel.home",
    tpc: "travel.home",
    voicerange: "world.manage",
    shop: "shop.use",
    give: "player.give",
    setbalance: "economy.set",
    tp: "player.teleport",
    tphere: "player.teleport_others",
    fly: "player.fly",
    god: "player.god",
    gamemode: "player.creative",
    disguise: "player.disguise",
    vanish: "player.vanish",
    undisguise: "player.disguise",
    kick: "moderation.kick",
    ban: "moderation.ban",
    banip: "moderation.ban_ip",
    unban: "moderation.unban",
    mute: "moderation.mute",
    unmute: "moderation.unmute",
    debug: "debug.use",
    fx: "debug.use",
    slowmo: "debug.use",
    bombtest: "debug.use",
  };
  if (s[t]) return s[t];
  if (["casino", "казино"].includes(t) && ["", "status", "cashout"].includes(i))
    return "casino.play";
  if (t === "worldborder" && !i) return "world.inspect";
  const o = {
    mission: [
      "",
      "join",
      "stop",
      "convoy-intercept",
      "field-commander",
      "sam-hunt",
    ],
    raid: ["status", "vote", "support"],
    defense: ["", "status", "join", "ready", "support"],
    district: ["", "status", "join", "support", "air"],
    evac: ["", "status", "call"],
    evacuation: ["", "status", "call"],
  };
  return o[t]
    ? o[t].includes(i)
      ? "operations.play"
      : "operations.manage"
    : "world.manage";
}
function eU(n, e = "player") {
  const t = mg[e] ?? mg.player;
  return t.prefix ? `${t.prefix} ${n}` : n;
}
const tU = new URLSearchParams(typeof location > "u" ? "" : location.search),
  BS =
    typeof window < "u" &&
    typeof window.self < "u" &&
    (() => {
      try {
        return window.top !== window.self;
      } catch {
        return !0;
      }
    })(),
  ua = tU.get("embed") === "x" || BS,
  iU = "https://play.voxelrush.app/",
  HS = "vr-embed-token";
function nU() {
  if (!ua) return "";
  try {
    return localStorage.getItem(HS) ?? "";
  } catch {
    return "";
  }
}
function L2(n) {
  if (!(!ua || typeof n != "string" || !/^[a-zA-Z0-9_-]{43}$/.test(n))) {
    try {
      localStorage.setItem(HS, n);
    } catch {}
    zS = n;
  }
}
function sU() {
  try {
    localStorage.removeItem(HS);
  } catch {}
  zS = "";
}
let zS = "";
const gg = () => nU() || zS;
function oU(n) {
  if (!ua) return () => {};
  (document.body.classList.add("embed"),
    BS && document.body.classList.add("embed-framed"));
  const e = () =>
    document.documentElement.style.setProperty(
      "--ez",
      String(
        Math.max(
          0.6,
          Math.min(1, Math.min(innerWidth, innerHeight) / 760),
        ).toFixed(3),
      ),
    );
  (e(), addEventListener("resize", e));
  const t = document.createElement("a");
  ((t.id = "embed-full-game"),
    (t.href = iU),
    (t.target = "_blank"),
    (t.rel = "noopener"));
  const i = () => {
    const s = n();
    ((t.textContent = s ? "Полная игра ↗" : "Full game ↗"),
      (t.title = s
        ? "Открыть Voxel Rush в отдельной вкладке"
        : "Open Voxel Rush in its own tab"));
  };
  return (i(), document.body.append(t), i);
}
const c5 = {},
  BC = () =>
    typeof document < "u" && document.documentElement.lang === "ru"
      ? "ru"
      : "en",
  HC = (n, e) => (BC() === "ru" ? e : n),
  zC = String(
    (c5 == null ? void 0 : c5.VITE_PLATFORM_API_URL) ||
      "https://backend.voxelrush.app",
  );
let Me = null,
  Ca = "player",
  su = [];
const yg = new Map();
async function tn(n, e = "GET", t) {
  const i = await fetch(`${zC}/v1${n}`, {
    method: e,
    credentials: "include",
    headers: {
      "Accept-Language": BC(),
      ...(t ? { "Content-Type": "application/json" } : {}),
      ...(gg() ? { Authorization: `Bearer ${gg()}` } : {}),
    },
    body: t ? JSON.stringify(t) : void 0,
    signal: AbortSignal.timeout(1e4),
  });
  if (i.status === 204) return;
  const s = await i.json();
  if (!i.ok)
    throw Object.assign(
      new Error(
        s.error ||
          HC(
            "Service unavailable. Please try again.",
            "Сервис недоступен. Попробуйте снова.",
          ),
      ),
      { status: i.status },
    );
  return s;
}
async function $x() {
  try {
    Me = (await tn("/auth/me")).user;
  } catch (n) {
    if (n.status === 401 || n.status === 403) Me = null;
    else throw n;
  }
  return Me;
}
function dw(n) {
  ((Me = n),
    typeof window < "u" && window.dispatchEvent(new Event("account-changed")));
}
let im = null;
function _p() {
  return Me
    ? Promise.resolve(Me)
    : (im ||
        (im = tn("/auth/guest", "POST", ua ? { embed: !0 } : {})
          .then((n) => (L2(n.token), dw(n.user), n.user))
          .finally(() => {
            im = null;
          })),
      im);
}
function qx() {
  if (Me != null && Me.is_guest)
    try {
      localStorage.setItem("vr-guest-played", Me.id);
    } catch {}
}
function aU(n) {
  ((Ca = n.role), (su = n.permissions), yg.clear());
  for (const e of n.roster) yg.set(e.name, e.role);
  window.dispatchEvent(new Event("access-changed"));
}
function rU(n) {
  ((Ca = n ? "owner" : "player"), (su = n ? ["*"] : []), yg.clear(), Xz());
}
function Ja(n) {
  return Ap(Ca, su, Jz(n));
}
function uw(n) {
  const e = yg.get(n) || "player",
    t = Po(n),
    i = eU(n, e),
    s = Xa(n) ? "#65cfff" : Yz(n) ? "#68e5a2" : mg[e].color;
  return {
    ...mg[e],
    color: s,
    baseLabel: i,
    squad: t,
    label: i + (t ? " [" + t.name + "]" : ""),
  };
}
async function lU(n) {
  const e = new URL(n);
  ((e.protocol = e.protocol === "wss:" ? "https:" : "http:"),
    (e.pathname = "/api/server-info"),
    (e.search = ""));
  const t = await fetch(e, { signal: AbortSignal.timeout(6e3) });
  if (!t.ok)
    throw new Error(
      HC(
        "Could not reach the game server.",
        "Не удалось подключиться к игровому серверу.",
      ),
    );
  return (await t.json()).requireAuth === !1
    ? ""
    : (await _p(), (await tn("/game/ticket", "POST", { address: n })).ticket);
}
function fw(n = !1) {
  return n
    ? Ap(Ca, su, "world.edit")
    : !!Me && Ap(Me.role, Me.permissions, "world.edit");
}
const US = () => -new Date().getTimezoneOffset();
let Hs = null,
  Kx = 0,
  pw = !1;
const UC = new Set(),
  FC = (n) => {
    UC.add(n);
  },
  GC = () => {
    for (const n of UC) n();
    window.dispatchEvent(new Event("golden-changed"));
  },
  WC = () => Hs,
  Xl = () =>
    !!(Hs != null && Hs.enabled) && Hs.active && Date.now() < Hs.endsAt,
  cU = () => (Xl() ? Hs.multiplier : 1),
  vg = () =>
    Hs ? Math.max(0, (Xl() ? Hs.endsAt : Hs.startsAt) - Date.now()) : 0;
function VC() {
  if ((clearTimeout(Kx), !(Hs != null && Hs.enabled))) return;
  const n = (Xl() ? Hs.endsAt : Hs.startsAt) - Date.now();
  Kx = window.setTimeout(
    () => void mw(),
    Math.max(5e3, Math.min(n + 2e3, 6e5)),
  );
}
async function mw() {
  try {
    const n = Xl();
    ((Hs = await tn(`/golden?tz=${US()}`)),
      (n !== Xl() || !pw) && GC(),
      (pw = !0));
  } catch {}
  return (VC(), Hs);
}
function hU(n) {
  if (!n) return;
  const e = Xl();
  ((Hs = n), (pw = !0), e !== Xl() && GC(), VC());
}
function dU() {
  typeof window > "u" ||
    (window.setTimeout(() => void mw(), 1500),
    document.addEventListener("visibilitychange", () => {
      document.hidden || mw();
    }));
}
