// index-BeUlFSPp 47 — add
// Lines 42893-43236 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const nO = [
    {
      id: w.DYNAMITE_SMALL,
      radius: 2,
      damage: 45,
      terrain: 1.6,
      delay: 3,
      price: 90,
      color: 12147521,
      shape: "stick",
      description: "Точный малый взрыв",
      descriptionEn: "Compact precision blast",
    },
    {
      id: w.DYNAMITE_BUNDLE,
      radius: 3.5,
      damage: 110,
      terrain: 2.8,
      delay: 4,
      price: 240,
      color: 12138280,
      shape: "bundle",
      description: "Связка из семи шашек",
      descriptionEn: "Seven-stick demolition bundle",
    },
    {
      id: w.BREACH_CHARGE,
      radius: 4.5,
      damage: 420,
      terrain: 3.8,
      delay: 4,
      price: 520,
      color: 7573624,
      shape: "case",
      description: "Контактный заряд для укреплений",
      descriptionEn: "Contact charge for fortifications",
    },
    {
      id: w.FRAG_BOMB,
      radius: 7,
      damage: 160,
      terrain: 2.5,
      delay: 5,
      price: 850,
      color: 7176292,
      shape: "sphere",
      description: "Широкая зона поражения, малый кратер",
      descriptionEn: "Wide damage area, small crater",
    },
    {
      id: w.INCENDIARY_BOMB,
      radius: 9,
      damage: 230,
      terrain: 3.2,
      delay: 6,
      price: 1400,
      color: 13067564,
      shape: "barrel",
      description: "Огненный выброс и густой дым",
      descriptionEn: "Fire eruption and dense smoke",
    },
    {
      id: w.HEAVY_BOMB,
      radius: 14,
      damage: 650,
      terrain: 10,
      delay: 8,
      price: 3200,
      color: 5401721,
      shape: "bomb",
      description: "Мощный взрыв и глубокий кратер",
      descriptionEn: "Heavy blast and deep crater",
    },
    {
      id: w.THERMOBARIC_BOMB,
      radius: 24,
      damage: 1e3,
      terrain: 12,
      delay: 10,
      price: 8500,
      color: 13213267,
      shape: "capsule",
      description: "Огненный купол и ударная волна",
      descriptionEn: "Fire dome and pressure wave",
    },
    {
      id: w.NUCLEAR_CHARGE,
      radius: 80,
      damage: 2200,
      terrain: 24,
      delay: 15,
      price: 65e3,
      color: 13941591,
      shape: "nuclear",
      description: "Ядерная вспышка, гриб и кольцо пыли",
      descriptionEn: "Nuclear flash, mushroom cloud and dust ring",
    },
  ],
  oO = new Map(nO.map((s) => [s.id, s])),
  La = (s) => oO.get(s),
  or = (s) => s === w.C4 || oO.has(s),
  G5 = "cosmetic-hat",
  $q = "armor-helmet",
  bv = new Map(),
  lf = (s) => {
    const e = "l" + s;
    let t = bv.get(e);
    return (t || ((t = new Pi({ color: s })), bv.set(e, t)), t);
  };
let ch = null;
function Vq() {
  if (ch) return ch;
  const s = document.createElement("canvas");
  s.width = s.height = 64;
  const e = s.getContext("2d"),
    t = e.createRadialGradient(32, 34, 2, 32, 34, 34);
  (t.addColorStop(0, "#fff6c8"),
    t.addColorStop(0.45, "#ffc23a"),
    t.addColorStop(1, "#ff6a0a"),
    (e.fillStyle = t),
    e.beginPath(),
    e.moveTo(10, 26),
    e.lineTo(26, 26),
    e.lineTo(20, 12),
    e.closePath(),
    e.moveTo(38, 26),
    e.lineTo(54, 26),
    e.lineTo(44, 12),
    e.closePath(),
    e.moveTo(28, 34),
    e.lineTo(36, 34),
    e.lineTo(32, 28),
    e.closePath(),
    e.moveTo(8, 38));
  const i = [
    [8, 38],
    [16, 41],
    [20, 38],
    [26, 42],
    [32, 39],
    [38, 42],
    [44, 38],
    [48, 41],
    [56, 38],
  ];
  for (const [n, o] of i) e.lineTo(n, o);
  return (
    e.quadraticCurveTo(48, 56, 32, 56),
    e.quadraticCurveTo(16, 56, 8, 38),
    e.closePath(),
    e.fill(),
    (ch = new Si(s)),
    (ch.colorSpace = Ii),
    (ch.magFilter = as),
    (ch.minFilter = pn),
    ch
  );
}
function qq() {
  let s = bv.get("face");
  return (
    s ||
      ((s = new Zt({
        map: Vq(),
        transparent: !0,
        alphaTest: 0.4,
        toneMapped: !1,
        color: 16777215,
      })),
      bv.set("face", s)),
    s
  );
}
const C_ = new Map();
function d0(s, e, t, i, n = 0, o = 0, a = 0) {
  const r = `${s},${e},${t}`;
  let l = C_.get(r);
  l || ((l = new kt(s, e, t)), C_.set(r, l));
  const c = new Q(l, i);
  return (
    c.position.set(n, o, a),
    (c.castShadow = !0),
    (c.userData.sharedGeometry = !0),
    (c.userData.sharedMaterial = !0),
    c
  );
}
function Kq() {
  const s = new re();
  s.name = G5;
  const e = lf(15234076),
    t = lf(11817487),
    i = lf(5200676);
  s.add(d0(0.6, 0.5, 0.6, e, 0, 0.26, 0));
  for (const [o, a, r, l] of [
    [-0.21, 0, 0.14, 0.66],
    [0.21, 0, 0.14, 0.66],
    [0, -0.21, 0.66, 0.14],
    [0, 0.21, 0.66, 0.14],
  ])
    s.add(d0(r, 0.46, l, t, o, 0.26, a));
  (s.add(
    d0(0.66, 0.42, 0.4, e, 0, 0.26, 0),
    d0(0.4, 0.42, 0.66, e, 0, 0.26, 0),
  ),
    s.add(d0(0.44, 0.06, 0.44, t, 0, 0.53, 0)),
    s.add(
      d0(0.07, 0.12, 0.07, i, 0.02, 0.6, 0),
      d0(0.1, 0.04, 0.05, i, 0.07, 0.65, 0),
    ));
  const n = new Q(new ms(0.46, 0.42), qq());
  return (
    n.position.set(0, 0.26, -0.334),
    (n.rotation.y = Math.PI),
    (n.name = "hat-glow"),
    s.add(n),
    (s.userData.hatId = "pumpkin"),
    aO(s),
    s
  );
}
function Yq() {
  const s = new re();
  s.name = G5;
  const e = lf(2759994),
    t = lf(8011716),
    i = lf(14856764),
    n = new Q(new Tt(0.46, 0.46, 0.035, 20), e);
  ((n.position.y = 0.52), (n.castShadow = !0), s.add(n));
  const o = new Q(new Tt(0.19, 0.27, 0.26, 14), e);
  o.position.y = 0.66;
  const a = new Q(new Tt(0.275, 0.275, 0.07, 14), t);
  a.position.y = 0.57;
  const r = d0(0.11, 0.08, 0.03, i, 0, 0.57, -0.272),
    l = new re();
  (l.position.set(0, 0.79, 0), (l.rotation.x = 0.38));
  const c = new Q(new Tt(0.09, 0.19, 0.24, 12), e);
  c.position.y = 0.11;
  const h = new re();
  ((h.position.y = 0.22), (h.rotation.x = 0.55));
  const d = new Q(new fa(0.09, 0.2, 10), e);
  ((d.position.y = 0.09), h.add(d), l.add(c, h));
  for (const u of [o, a, c, d]) u.castShadow = !0;
  return (s.add(o, a, r, l), (s.userData.hatId = "witch"), aO(s), s);
}
function aO(s) {
  s.traverse((e) => {
    e.isMesh && (e.userData.sharedMaterial = !0);
  });
}
const jq = (s) => (s === "pumpkin" ? Kq() : Yq());
function Xq(s) {
  s.traverse((e) => {
    const t = e;
    t.isMesh &&
      !t.userData.sharedGeometry &&
      t.geometry &&
      t.geometry.dispose();
  });
}
function Ed(s, e) {
  const t = e || "";
  let i = s.getObjectByName(G5);
  (i && i.userData.hatId !== t && (s.remove(i), Xq(i), (i = void 0)),
    !i && t && ((i = jq(t)), s.add(i)),
    (s.userData.hat = t),
    FA(s));
}
function FA(s) {
  const e = s.userData.hat,
    t = s.getObjectByName(G5),
    i = s.getObjectByName($q);
  (i && (i.visible = e !== "pumpkin"),
    t && e === "witch" && (t.position.y = i ? 0.12 : 0));
  const n = s.getObjectByName("skin-hair"),
    o = s.getObjectByName("skin-ears");
  (n && (n.visible = e !== "pumpkin"),
    o && (o.visible = e !== "pumpkin" && !i));
}
let rO = null;
try {
  const s = new URLSearchParams(location.search).get("halloween");
  (s === "1" || s === "0") && sessionStorage.setItem("vr-halloween", s);
  const e = sessionStorage.getItem("vr-halloween");
  rO = e === "1" ? !0 : e === "0" ? !1 : null;
} catch {}
const Ga = () => xV(Date.now(), rO),
  ym = (s) => (xA(s) ? s : Ga() ? "pumpkin" : ""),
  Zq = 512,
  ie = Zq,
  ts = (s) => {
    const e = parseInt(s.slice(1), 16);
    return [(e >> 16) & 255, (e >> 8) & 255, e & 255];
  },
  li = (s, e, t) => [
    s[0] + (e[0] - s[0]) * t,
    s[1] + (e[1] - s[1]) * t,
    s[2] + (e[2] - s[2]) * t,
  ],
  Xi = (s, e) => [s[0] * e, s[1] * e, s[2] * e],
  bt = (s, e = 1) => `rgba(${s[0] | 0},${s[1] | 0},${s[2] | 0},${e})`,
  Hh = (s) => (s < 0 ? 0 : s > 1 ? 1 : s),
  _o = (s, e, t) => {
    const i = Hh((t - s) / (e - s));
    return i * i * (3 - 2 * i);
  };
function ja(s, e) {
  e = Hh(e) * (s.length - 1);
  const t = Math.min(s.length - 2, Math.floor(e));
  return li(s[t], s[t + 1], e - t);
}
function ls(s) {
  let e = s >>> 0 || 1;
  return () => (
    (e ^= e << 13),
    (e >>>= 0),
    (e ^= e >> 17),
    (e ^= e << 5),
    (e >>>= 0),
    e / 4294967296
  );
}
function Qq(s, e) {
  const t = ls(s),
    i = new Float32Array(e * e);
  for (let n = 0; n < i.length; n++) i[n] = t();
  return (n, o) => {
    const a = Math.floor(n),
      r = Math.floor(o),
      l = n - a,
      c = o - r,
      h = ((a % e) + e) % e,
      d = ((r % e) + e) % e,
      u = (h + 1) % e,
      f = (d + 1) % e,
      p = l * l * (3 - 2 * l),
      m = c * c * (3 - 2 * c),
      g = i[d * e + h],
      y = i[d * e + u],
      b = i[f * e + h],
      S = i[f * e + u];
    return g + (y - g) * p + (b - g) * m + (g - y - b + S) * p * m;
  };
}
