// index-BeUlFSPp 43 — localstorage
// Lines 40696-41043 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function gq(s, e) {
  return e !== 2 || (ai(s) || s) !== w.AK47
    ? s
    : co(w.M4A1, { ...so(s), grip: !0 });
}
function z5(s, e) {
  const t = Va[s];
  return e !== 2 || !t.items.some((i) => (ai(i.id) || i.id) === w.AK47)
    ? t
    : {
        ...t,
        items: t.items.map((i) => ({
          ...i,
          id: i.id === w.AMMO_762 ? w.AMMO_556 : gq(i.id, e),
        })),
      };
}
const b_ = { battery: 40 },
  Mb = { hqClear: 30, markRange: 55 },
  w_ = (s) => (s === v.MINE_AT ? "at" : s === v.MINE_AP ? "ap" : null),
  LA = (s) => Object.keys(Va).filter((e) => Va[e].mode === s);
LA("conquest");
LA("tdm");
const Sb = ["A", "B", "C", "D", "E"],
  yq = { shield: 3 },
  vq = new Set([
    w.AMMO_762,
    w.AMMO_9MM,
    w.AMMO_338,
    w.AMMO_SHELL,
    w.AMMO_556,
    w.AMMO_50AE,
  ]),
  U2 = {
    3: { en: "KILLING SPREE", ru: "СЕРИЯ УБИЙСТВ" },
    5: { en: "RAMPAGE", ru: "НЕУДЕРЖИМЫЙ" },
    7: { en: "DOMINATING", ru: "ДОМИНИРУЕТ" },
    10: { en: "UNSTOPPABLE", ru: "НЕОСТАНОВИМ" },
    15: { en: "GODLIKE", ru: "БОГ ВОЙНЫ" },
  },
  Eb = { hold: 1.5, hqCooldown: 10, flagCooldown: 45 },
  M_ = { capture: 250, assist: 50 },
  S_ = { capture: 100, killAssist: 25 },
  zi = {
    sunShafts: -4,
    celestial: -3,
    skyClouds: -2,
    water: 2,
    cloud: 3,
    tracer: 4,
    particle: 5,
    vent: 6,
    editBox: 7,
    editLines: 8,
    marker: 800,
    label: 900,
    popup: 950,
    viewmodel: 990,
    reticle: 995,
    firstPerson: 1e3,
  },
  by = 28;
function Q0(s, e = zi.label) {
  return ((s.renderOrder = e), s.layers.set(by), s);
}
let pm = "";
const uv = new Set(),
  fv = new Map();
let pv = [];
function bq(s, e) {
  ((pm = s), uv.clear());
  for (const t of e) uv.add(t.toLowerCase());
  F5();
}
function na(s) {
  return fv.get(s.toLowerCase());
}
function Br(s) {
  return !!na(pm) && na(s)?.id === na(pm)?.id;
}
function wq(s) {
  return uv.has(s.toLowerCase());
}
function Mq(s) {
  fv.clear();
  for (const e of s.roster)
    for (const t of e.members) fv.set(t.username.toLowerCase(), e);
  ((pv = s.waypoints), F5());
}
function Sq() {
  (uv.clear(), fv.clear(), (pv = []), (pm = ""), F5());
}
let ha = "global";
try {
  localStorage.getItem("vr-chat-channel") === "squad" && (ha = "squad");
} catch {}
function Zh() {
  return !!na(pm);
}
let Pc = 0;
function Eq(s) {
  s !== Pc && ((Pc = s), F5());
}
function Aq() {
  return Pc > 0 || Zh();
}
function F5() {
  (Pc > 0 && ha === "squad"
    ? wy("team")
    : ((!Pc && ha === "team") || (!Pc && !Zh() && ha === "squad")) &&
      wy("global"),
    window.dispatchEvent(new Event("squad-state-changed")));
}
function wy(s) {
  ha = s;
  try {
    s !== "team" && localStorage.setItem("vr-chat-channel", ha);
  } catch {}
  window.dispatchEvent(new Event("chat-channel-changed"));
}
function Ab() {
  wy(ha !== "global" ? "global" : Pc > 0 ? "team" : Zh() ? "squad" : "global");
}
const mv = {
  owner: { prefix: "[Owner]", color: "#ff5555", weight: "bold" },
  admin: { prefix: "[Admin]", color: "#ff5555", weight: "bold" },
  moderator: { prefix: "[Moder]", color: "#65d9ff", weight: "bold" },
  player: { prefix: "", color: "#ffffff", weight: "normal" },
};
function mm(s, e, t) {
  return t === "computer.use" || t === "player.vanish" || t === "player.noclip"
    ? s === "owner" || s === "admin"
    : s === "owner" || s === "admin"
      ? !0
      : t === "operations.manage"
        ? !1
        : e.includes(t);
}
function Tq(s) {
  const e = s.trim().toLowerCase().replace(/^\//, "").split(/\s+/),
    [t, i = ""] = e;
  if (
    ["computer", "компьютер", "diff"].includes(t) ||
    (t === "give" && ["computer", "компьютер", "pc"].includes(i))
  )
    return "computer.use";
  if (t.startsWith("/")) return "world.edit";
  if (t === "tp" && (e.length === 3 || e.length === 5))
    return "player.teleport_others";
  const n = {
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
    noclip: "player.noclip",
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
  if (n[t]) return n[t];
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
function xq(s, e = "player") {
  const t = mv[e] ?? mv.player;
  return t.prefix ? `${t.prefix} ${s}` : s;
}
const _q = new URLSearchParams(typeof location > "u" ? "" : location.search),
  IA =
    typeof window < "u" &&
    typeof window.self < "u" &&
    (() => {
      try {
        return window.top !== window.self;
      } catch {
        return !0;
      }
    })(),
  jo = _q.get("embed") === "x" || IA,
  Rq = "https://play.voxelrush.app/",
  PA = "vr-embed-token";
function kq() {
  if (!jo) return "";
  try {
    return localStorage.getItem(PA) ?? "";
  } catch {
    return "";
  }
}
function af(s) {
  if (!(!jo || typeof s != "string" || !/^[a-zA-Z0-9_-]{43}$/.test(s))) {
    try {
      localStorage.setItem(PA, s);
    } catch {}
    OA = s;
  }
}
function E_() {
  try {
    localStorage.removeItem(PA);
  } catch {}
  OA = "";
}
let OA = "";
const gv = () => kq() || OA;
function Cq(s) {
  if (!jo) return () => {};
  (document.body.classList.add("embed"),
    IA && document.body.classList.add("embed-framed"));
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
    (t.href = Rq),
    (t.target = "_blank"),
    (t.rel = "noopener"));
  const i = () => {
    (s(),
      (t.textContent = I("Full game ↗", "Полная игра ↗")),
      (t.title = I(
        "Open Voxel Rush in its own tab",
        "Открыть Voxel Rush в отдельной вкладке",
      )));
  };
  return (i(), document.body.append(t), i);
}
const Lq = {},
  Iq = () => (typeof document < "u" && wi() ? "ru" : "en"),
  KP = (s, e) => I(s, e),
  YP = String(Lq?.VITE_PLATFORM_API_URL || "https://backend.voxelrush.app");
let qe = null,
  ur = "player",
  Lf = [];
const yv = new Map();
async function Vi(s, e = "GET", t) {
  const i = await fetch(`${YP}/v1${s}`, {
    method: e,
    credentials: "include",
    headers: {
      "Accept-Language": Iq(),
      ...(t ? { "Content-Type": "application/json" } : {}),
      ...(gv() ? { Authorization: `Bearer ${gv()}` } : {}),
    },
    body: t ? JSON.stringify(t) : void 0,
    signal: AbortSignal.timeout(1e4),
  });
  if (i.status === 204) return;
  const n = await i.json();
  if (!i.ok)
    throw Object.assign(
      new Error(
        typeof n.error == "string" && n.error
          ? Po(n.error)
          : KP(
              "Service unavailable. Please try again.",
              "Сервис недоступен. Попробуйте снова.",
            ),
      ),
      { status: i.status },
    );
  return n;
}
const NA = "vr-signed-in-as";
function jP(s) {
  if (s && !s.is_guest)
    try {
      localStorage.setItem(NA, s.username);
    } catch {}
}
function A_() {
  if (qe && !qe.is_guest) return null;
  try {
    return localStorage.getItem(NA);
  } catch {
    return null;
  }
}
function Tb() {
  try {
    localStorage.removeItem(NA);
  } catch {}
}
async function G2() {
  try {
    ((qe = (await Vi("/auth/me")).user), jP(qe));
  } catch (s) {
    if (s.status === 401 || s.status === 403) qe = null;
    else throw s;
  }
  return qe;
}
