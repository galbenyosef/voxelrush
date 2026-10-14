// assets__index-Dp6GxvJu 01 — math
// Lines 25943-26284 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
Li.fog_vertex = Li.fog_vertex.replace(
  "vFogDepth = - mvPosition.z;",
  "vFogDepth = length( mvPosition.xyz );",
);
Li.fog_fragment = Li.fog_fragment.replace(
  "float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );",
  "float fogFactor = pow( smoothstep( fogNear, fogFar, vFogDepth ), 1.6 );",
);
const Z8 = new bu(),
  yx = new bt(),
  Fv = new Ha();
let Q8 = !1;
function cH(n) {
  (yx.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
    Z8.setFromProjectionMatrix(yx),
    (Q8 = !0));
}
function J8(n, e) {
  return Q8
    ? (Fv.center.copy(n), (Fv.radius = e), Z8.intersectsSphere(Fv))
    : !0;
}
function eC(n, e) {
  n.matrixWorldAutoUpdate = e;
}
const hH = ["river", "kavir", "frost", "city", "cosmo"],
  dH = (n) => typeof n == "string" && hH.includes(n),
  uH = ["sirocco", "junction", "hanami"],
  fH = (n) => typeof n == "string" && uH.includes(n),
  pH = {
    river: {
      id: "river",
      name: { en: "River Crossing", ru: "Переправа" },
      blurb: {
        en: "Green valley, a bridge village and two fords",
        ru: "Зелёная долина, деревня у моста и два брода",
      },
      accent: "#7fd36b",
      sky: ["#7fb8e8", "#2b4a2e"],
      vehicles: { tanks: 2, helis: 2 },
      size: 236,
    },
    kavir: {
      id: "kavir",
      name: { en: "Kavir Citadel", ru: "Цитадель Кавир" },
      blurb: {
        en: "Desert oasis town, an old citadel on its island, a refinery",
        ru: "Город в пустыне, цитадель на острове, нефтезавод",
      },
      accent: "#ffb547",
      sky: ["#f3c98b", "#6b3d1f"],
      haze: { color: "#e6cfa4", horizon: 0.62, dome: 0.18 },
      vehicles: { tanks: 2, helis: 3, apcs: 1 },
      size: 336,
    },
    frost: {
      id: "frost",
      name: { en: "Frozen Harbor", ru: "Ледяная гавань" },
      blurb: {
        en: "A freighter locked in the ice, two capes, a harbour on each shore",
        ru: "Вмёрзший в лёд сухогруз, два мыса и порт на каждом берегу",
      },
      accent: "#8fd3ff",
      sky: ["#bcd6ec", "#3b566f"],
      haze: { color: "#dde8f1", horizon: 0.55, dome: 0.22 },
      vehicles: { tanks: 3, helis: 2 },
      size: 284,
      added: "2026-10-10",
    },
    city: {
      id: "city",
      name: { en: "Fallen City", ru: "Павший город" },
      blurb: {
        en: "Street fighting: a boulevard, the monument square, a market hall and a park",
        ru: "Уличные бои: бульвар, площадь с монументом, крытый рынок и парк",
      },
      accent: "#e8a15a",
      sky: ["#c9b9a2", "#4a3f38"],
      haze: { color: "#d3c6b2", horizon: 0.5, dome: 0.2 },
      vehicles: { tanks: 2, helis: 2, apcs: 1 },
      size: 252,
      added: "2026-10-11",
    },
    cosmo: {
      id: "cosmo",
      name: { en: "Cosmodrome", ru: "Космодром" },
      blurb: {
        en: "A rocket on the pad, the flag under its engines, two halls and two radar hills",
        ru: "Ракета на старте, флаг под её двигателями, два корпуса и два холма с антеннами",
      },
      accent: "#ff8a4c",
      sky: ["#a9c8ea", "#6a5a44"],
      haze: { color: "#dcd3bd", horizon: 0.42, dome: 0.14 },
      vehicles: { tanks: 2, helis: 2, apcs: 1 },
      size: 248,
      added: "2026-10-11",
    },
  },
  mH = {
    sirocco: {
      id: "sirocco",
      name: { en: "Sirocco", ru: "Сирокко" },
      blurb: {
        en: "A walled desert town: the long market street, the fountain plaza, the tunnels",
        ru: "Город в пустыне: длинная торговая улица, площадь с фонтаном, тоннели",
      },
      accent: "#ffc56b",
      sky: ["#f0c98f", "#7a4a26"],
      size: 124,
      labels: [
        { en: "A", ru: "A", x: 0, z: -36 },
        { en: "MID", ru: "MID", x: 0, z: 0 },
        { en: "B", ru: "B", x: 0, z: 33 },
      ],
    },
    junction: {
      id: "junction",
      name: { en: "Junction", ru: "Узловая" },
      blurb: {
        en: "A railway depot in autumn: the station, the turntable pit, the engine shed",
        ru: "Железнодорожный узел осенью: вокзал, поворотный круг, локомотивное депо",
      },
      accent: "#ff9d4d",
      sky: ["#b9c9d6", "#5a4632"],
      haze: { color: "#cfd6d8", horizon: 0.5, dome: 0.16 },
      size: 124,
      added: "2026-10-11",
      labels: [
        { en: "STATION", ru: "ВОКЗАЛ", x: 0, z: -42 },
        { en: "TURNTABLE", ru: "КРУГ", x: 0, z: -5 },
        { en: "DEPOT", ru: "ДЕПО", x: 0, z: 37 },
      ],
    },
    hanami: {
      id: "hanami",
      name: { en: "Hanami", ru: "Ханами" },
      blurb: {
        en: "A mountain shrine in cherry blossom: the torii avenue, the pagoda hill, the dojo",
        ru: "Горное святилище в цвету сакуры: аллея торий, холм с пагодой, додзё",
      },
      accent: "#ff8fb8",
      sky: ["#f3cfdc", "#5e3b4b"],
      haze: { color: "#f0dbe2", horizon: 0.5, dome: 0.16 },
      size: 124,
      added: "2026-10-12",
      petals: !0,
      labels: [
        { en: "SHRINE", ru: "ХРАМ", x: 0, z: -40 },
        { en: "PAGODA", ru: "ПАГОДА", x: 0, z: -1 },
        { en: "DOJO", ru: "ДОДЗЁ", x: 0, z: 37 },
      ],
    },
  },
  Yc = (n) => (dH(n) ? pH[n] : fH(n) ? mH[n] : null),
  gH = 21,
  yH = (n, e = Date.now()) => {
    var i;
    const t = (i = Yc(n)) == null ? void 0 : i.added;
    return !!t && e - Date.parse(t) < gH * 864e5 && e >= Date.parse(t) - 864e5;
  },
  vH = 4,
  bH = (n, e) => {
    var t;
    return ((t = Yc(n)) == null ? void 0 : t.name[e]) ?? n;
  };
function wH(n, e, t, i) {
  var y;
  (y = document.getElementById("front-map-veil")) == null || y.remove();
  const s = Yc(n),
    o = document.createElement("div");
  ((o.id = "front-map-veil"),
    o.style.setProperty(
      "--accent",
      (s == null ? void 0 : s.accent) ?? "#ffb547",
    ),
    o.style.setProperty("--sky1", (s == null ? void 0 : s.sky[0]) ?? "#334"),
    o.style.setProperty("--sky2", (s == null ? void 0 : s.sky[1]) ?? "#112"));
  const a = document.createElement("i");
  ((a.className = "fmv-art"),
    (a.style.backgroundImage = `url(/front-maps/${n}.png)`));
  const r = document.createElement("div");
  r.className = "fmv-box";
  const l = document.createElement("div");
  ((l.className = "fmv-kicker"),
    (l.textContent = t === "en" ? "NEXT BATTLEFIELD" : "СЛЕДУЮЩЕЕ ПОЛЕ БОЯ"));
  const c = document.createElement("h2");
  ((c.className = "fmv-title"),
    (c.textContent = (s == null ? void 0 : s.name[t]) ?? e));
  const h = document.createElement("div");
  ((h.className = "fmv-blurb"),
    (h.textContent = (s == null ? void 0 : s.blurb[t]) ?? ""));
  const d = document.createElement("div");
  d.className = "fmv-bar";
  const u = document.createElement("i");
  (d.append(u),
    r.append(l, c, h, d),
    o.append(a, r),
    document.body.append(o),
    requestAnimationFrame(() => o.classList.add("on")));
  const f = performance.now();
  let p = 0;
  const m = () => {
    if (!o.isConnected) return;
    const g = Math.max(0, Math.min(1, i()));
    ((p += (g - p) * 0.25),
      (u.style.transform = `scaleX(${Math.max(0.04, p)})`));
    const b = performance.now() - f;
    if ((g >= 0.999 && b > 1400) || b > 7e3) {
      ((u.style.transform = "scaleX(1)"),
        o.classList.remove("on"),
        setTimeout(() => o.remove(), 450));
      return;
    }
    setTimeout(m, 120);
  };
  m();
}
const MH = 2,
  zu = { x1: -19, x2: 19, z1: -18, z2: 21, height: 14 },
  SH = { x1: -8, x2: 8 },
  ew = (n, e, t) => {
    for (let i = 0; i < (t & 3); i++) [n, e] = [-e, n];
    return [n, e];
  };
function MS(n, e, t, i) {
  const [s, o] = ew(e - 0.5, i - 0.5, n.rotation);
  return { x: n.x + s + 0.5, y: n.y + t, z: n.z + o + 0.5 };
}
const EH = (n, e) => e - ((n.rotation & 3) * Math.PI) / 2;
function tC(n) {
  const e = ew(zu.x1, zu.z1, n.rotation),
    t = ew(zu.x2, zu.z2, n.rotation);
  return {
    x1: n.x + Math.min(e[0], t[0]),
    z1: n.z + Math.min(e[1], t[1]),
    x2: n.x + Math.max(e[0], t[0]) + 1,
    z2: n.z + Math.max(e[1], t[1]) + 1,
    y1: n.y - 4,
    y2: n.y + zu.height + 4,
  };
}
const vx = (n, e, t, i, s = 0) =>
    e >= n.x1 - s &&
    e < n.x2 + s &&
    i >= n.z1 - s &&
    i < n.z2 + s &&
    t >= n.y1 - s &&
    t < n.y2 + s,
  Q1 = 12;
function xH(n) {
  const e = tC(n);
  return {
    x1: e.x1 - Q1,
    x2: e.x2 + Q1,
    z1: e.z1 - Q1,
    z2: e.z2 + Q1,
    y1: -1 / 0,
    y2: 1 / 0,
  };
}
const TH = { x: 6.5, y: 1, z: 3.2 },
  bp = [TH, { x: -5.5, y: 1, z: 3.2 }],
  SS = (n, e) => (e === 0 ? n : `${n}/blackjack-${e + 1}`);
function AH(n) {
  if (n.game || (n.layout ?? 1) < 2) return [];
  const e = [],
    t = (i, s, o, a, r) =>
      e.push({
        id: `${n.id}/${i}/${s}`,
        site: n.id,
        kind: i,
        index: s,
        ...MS(n, o, 1, a),
        yaw: EH(n, r),
      });
  bp.forEach((i, s) => {
    for (let o = 0; o < 3; o++) {
      const a = (o - 1) * 0.55;
      t("blackjack", o, i.x + Math.sin(a) * 1.6, i.z + 0.35 + Math.cos(a), a);
      const r = e[e.length - 1];
      ((r.table = SS(n.id, s)), s > 0 && (r.id = `${r.table}/seat/${o}`));
    }
  });
  for (let i = 0; i < 4; i++) t("bar", i, -16.1 + i * 1.45, -11.35, 0);
  return e;
}
const bx = !1,
  Mu = [
    ["olympus1000", "Gates of Olympus 1000", "goo1000", 12162047, "Ω"],
    ["olympus", "Gates of Olympus", "gatesoo", 10781940, "Ω"],
    ["olympus-ss", "Gates of Olympus Super Scatter", "gooss", 16434514, "Ω"],
    ["olympus2500", "Gates of Olympus 2500", "goo2500", 7981567, "Ω"],
    ["fortune", "Fortune of Olympus", "foo-2an", 15513949, "Ω"],
    ["bonanza1000", "Sweet Bonanza 1000", "swbo1000", 16746443, "♥"],
    ["bonanza-ss", "Sweet Bonanza Super Scatter", "sbss", 16764280, "♥"],
    ["bonanza2500", "Sweet Bonanza 2500", "swbon2500", 15109119, "♥"],
    ["bonanza", "Sweet Bonanza", "swbon", 16752076, "♥"],
    ["sweet-rush", "Sweet Rush Bonanza", "srbon", 16755312, "♥"],
    ["zeus-hades", "Zeus vs Hades Gods of War", "zwhgof", 16742229, "⚡"],
    ["zeus-hades250", "Zeus vs Hades 250", "zvh250", 16758102, "⚡"],
    ["doghouse1000", "The Dog House Megaways 1000", "tdhm1000", 16764796, "♠"],
    ["doghouse-mega", "The Dog House Megaways", "dhmega", 16364921, "♠"],
    ["doghouse", "The Dog House", "tdhouse", 15701110, "♠"],
    ["starlight1000", "Starlight Princess 1000", "sp1000", 10008575, "★"],
    [
      "starlight-ss",
      "Starlight Princess Super Scatter",
      "spss-44x",
      13868031,
      "★",
    ],
    ["heaven1000", "Gates of Heaven 1000", "goh1000", 8773119, "✦"],
    ["heaven-ss", "Gates of Heaven Super Scatter", "gohss", 11921151, "✦"],
    ["sugar-ss", "Sugar Rush Super Scatter", "srss-xou", 16744651, "♥"],
    ["sugar1000", "Sugar Rush 1000", "sr1000", 14325247, "♥"],
    ["sugar", "Sugar Rush", "srush", 16755414, "♥"],
    ["joker", "Joker's Jewels", "jjewels", 16615563, "♦"],
    ["athena1000", "Wisdom of Athena 1000", "woa1000", 7789261, "Α"],
    ["angel-sinner", "Angel vs Sinner", "avsin", 15897794, "✦"],
    ["athena", "Wisdom of Athena", "woath", 10279862, "Α"],
    ["lions", "5 Lions Megaways 2", "5lmw2", 16764272, "♠"],
    ["buffalo", "Buffalo King Megaways", "bkmw", 15181168, "♠"],
    ["bass1000", "Big Bass Splash 1000", "bbs1000", 7395821, "≈"],
    ["bigger-bass", "Bigger Bass Bonanza", "bbb-6od", 8244935, "≈"],
    ["big-bass", "Big Bass Bonanza", "bigbb", 8765439, "≈"],
  ].map(([n, e, t, i, s]) => ({
    id: n,
    title: e,
    host: `${t}.pages.dev`,
    color: i,
    motif: s,
  })),
  dy = 600,
  iC = 2500,
  Tl = (n) => (Number.isInteger(n) ? Mu[n - dy] : void 0),
  _H = (n) => Mu.find((e) => e.id === n),
  J1 = (n) =>
    typeof n == "number" &&
    Number.isFinite(n) &&
    n >= 0 &&
    n <= 4294967295 &&
    Math.abs(n * 100 - Math.round(n * 100)) < 0.001;
