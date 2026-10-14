// index-Dp6GxvJu 103 — addeventlistener
// Lines 64033-64233 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function iM(n, e = "") {
  const t = n.slice(0, 300);
  !t ||
    /ResizeObserver loop|^Script error\.?$|chrome-extension:|moz-extension:|safari-web-extension:/.test(
      t + e,
    ) ||
    Z5.has(t) ||
    Z5.size >= 8 ||
    (Z5.add(t), F2.push({ m: t, s: e.slice(0, 160) }));
}
function pY(n, e) {
  iM(`${n}: ${e instanceof Error ? `${e.name}: ${e.message}` : String(e)}`);
}
function mY() {
  if (k6 || typeof window > "u") return;
  k6 = !0;
  const n = uY();
  let e = null;
  try {
    e = JSON.parse(kr("local", R6) ?? "null");
  } catch {}
  const t =
    !!e ||
    kr("local", "vr-play-seconds") !== null ||
    kr("local", "vr-guest-played") !== null;
  ((tM = e ?? n),
    e || fu("local", R6, JSON.stringify(n)),
    kr("session", C6) !== "1" &&
      (fu("session", C6, "1"), (Pf = { ...n, new: !t, gpu: hY() })),
    window.addEventListener("error", (i) => {
      var s;
      return iM(
        String(i.message || ((s = i.error) == null ? void 0 : s.message) || ""),
        i.filename ? `${i.filename}:${i.lineno}:${i.colno}` : "",
      );
    }),
    window.addEventListener("unhandledrejection", (i) => {
      var o;
      const s = i.reason;
      iM(
        s instanceof Error ? `${s.name}: ${s.message}` : String(s ?? ""),
        s instanceof Error
          ? (((o = String(s.stack ?? "").split(`
`)[1]) == null
              ? void 0
              : o.trim()) ?? "")
          : "",
      );
    }),
    document.addEventListener(
      "click",
      (i) => {
        var r;
        const s = i.target instanceof Element ? i.target : null;
        if (!s) return;
        const o = (l) => s.closest(l),
          a = (r = o(".lm-card[data-mode]")) == null ? void 0 : r.dataset.mode;
        a
          ? ys("mode_" + a)
          : o("#playbtn")
            ? ys("play_click")
            : o("#solobtn")
              ? ys("solo_start")
              : o("#menuarmory")
                ? ys("armory_open")
                : o("#lobby-list-open")
                  ? ys("server_list")
                  : o("#menu-link-account") && ys("link_open");
      },
      !0,
    ),
    window.addEventListener("account-changed", () => {
      Me &&
        (kr("local", Uy) !== Me.id || kr("local", Fy) !== `${Me.id}:${eM()}`) &&
        window.setTimeout(() => void J5(), 500);
    }),
    window.setTimeout(() => {
      const i = document.getElementById("menu");
      (i && !i.classList.contains("hidden") && ys("menu"), J5());
    }, 2500),
    window.setInterval(() => {
      document.hidden || J5();
    }, rY),
    document.addEventListener("visibilitychange", () => {
      document.hidden && L6();
    }),
    window.addEventListener("pagehide", L6));
}
const hd = (n) => n !== E.AXE || fw();
let Ot = gw(),
  P6 = "";
const Zt = (n, e) => (z.language === "en" ? n : e),
  _e = Zt;
function Ml(n = "store", e) {
  (qc ?? (qc = jL()),
    (e = e === void 0 ? void 0 : ou(e)),
    qc.open(n === "weapon" ? "loadout" : n, e));
}
async function C4() {
  const n = (Me == null ? void 0 : Me.id) ?? "";
  if ((n !== P6 && ((P6 = n), (Ot = gw())), Me)) {
    const e = await tn("/me/cosmetics");
    (Me == null ? void 0 : Me.id) === n && (Ot = e);
  } else
    try {
      const e = JSON.parse(
        localStorage.getItem("vr-local-cosmetics") ?? "null",
      );
      e && (Ot = { ...gw(), ...e, gold: 0, owned: [] });
    } catch {}
  return (window.dispatchEvent(new Event("cosmetics-changed")), Ot);
}
let qc;
const YL = () =>
    Object.entries(Ot.cases ?? {}).filter(([n, e]) => e > 0 && n in _s),
  nM = () => YL().reduce((n, [, e]) => n + e, 0);
async function gY(n) {
  (qc ?? (qc = jL()), await qc.open("inventory"), n in _s && qc.openOwned(n));
}
function $e(n, e = "", t = "") {
  const i = document.createElement(n);
  return (e && (i.className = e), t && (i.textContent = t), i);
}
function $i(n, e, t) {
  const i = $e("button", n);
  return (
    (i.type = "button"),
    typeof e == "string" ? (i.textContent = e) : i.append(e),
    (i.onclick = t),
    i
  );
}
function ls(n, e, t = "span") {
  const i = $e(t, n);
  return ((i.innerHTML = e), i);
}
const ts = (n) => Ho[n],
  rl = (n) => _e(Ho[n].en, Ho[n].ru),
  ll = (n) => (n ? _e(n.name, n.ru) : _e("Factory Original", "Заводской вид")),
  O6 = {
    286: ["Helmets", "Шлемы"],
    289: ["Body armour", "Бронежилеты"],
    292: ["Armoured pants", "Бронештаны"],
    295: ["Combat boots", "Берцы"],
  },
  Ps = (n) =>
    n === 278
      ? _e("Drills", "Буры")
      : n === 338
        ? _e("Chainsaws", "Бензопилы")
        : O6[n]
          ? _e(...O6[n])
          : (Ki(n) ?? String(n)),
  Dm = (n) => ls("ar-price", `${bs(16)}<b>${n.toLocaleString()}</b>`),
  yY = {
    pulse: ["Pulsing glow", "Пульсирующее свечение"],
    flow: ["Live data flow", "Бегущие импульсы"],
    holo: ["Holographic", "Голографический"],
    galaxy: ["Deep space parallax", "Космический параллакс"],
    lava: ["Flowing magma", "Текущая магма"],
    electric: ["Lightning strikes", "Удары молний"],
    glitch: ["Glitch FX", "Глитч-эффект"],
    aurora: ["Shifting aurora", "Переливы сияния"],
    sparkle: ["Glints", "Блики"],
    synth: ["Scanlines", "Сканлайны"],
    frost: ["Frost glow", "Морозное свечение"],
    inferno: ["Rising flames & embers", "Восходящее пламя и искры"],
    arcane: ["Runes write themselves", "Руны вписываются светом"],
  },
  af = (n, e) => {
    var t;
    return (
      !e ||
      ((t = uo(e)) == null ? void 0 : t.price) === 0 ||
      Ot.owned.includes(yw(n, e))
    );
  },
  N6 = (n) => {
    var e;
    return n === "custom"
      ? !!Ot.custom
      : ((e = Fd.find((t) => t.id === n)) == null ? void 0 : e.price) === 0 ||
          Ot.owned.includes(`character:${n}`);
  },
  $a = (n) => Ot.weapons[ou(n)] ?? "";
function cl(n, e, t, i, s = !1) {
  const o = $e("img", "ar-thumb");
  ((o.alt = ""), (o.decoding = "async"), (o.draggable = !1));
  const a = $K(n, e, t, i);
  return (
    a
      ? (o.src = a)
      : (o.classList.add("loading"),
        s0(n, e, t, i, s)
          .then((r) => {
            ((o.src = r), o.classList.remove("loading"));
          })
          .catch(() => o.classList.remove("loading"))),
    o
  );
}
