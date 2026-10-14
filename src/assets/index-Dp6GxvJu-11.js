// index-Dp6GxvJu 11 — math
// Lines 29528-29845 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
de.push(
  Fe(
    v.GOLD_BLOCK,
    "gold_block",
    "Золотой блок",
    140,
    [ds.GOLD, ds.GOLD, ds.GOLD],
    14856767,
    {},
    "Block of gold",
  ),
);
de.push(
  Fe(
    v.VELVET_PANEL,
    "velvet_panel",
    "Бархатная панель",
    30,
    [ds.VELVET, ds.VELVET, ds.VELVET],
    7017520,
    {},
    "Velvet panel",
  ),
);
de.push(
  Fe(
    v.MARQUEE_LIGHTS,
    "marquee_lights",
    "Огни казино",
    35,
    [ds.MARQUEE, ds.MARQUEE, ds.MARQUEE],
    16766842,
    { light: 15 },
    "Marquee lights",
  ),
);
const gC = 182,
  jf = 183;
de.push(
  Fe(
    v.LED_SCREEN,
    "led_screen",
    "LED-экран",
    60,
    [jf, jf, jf],
    1316380,
    { interactive: !0 },
    "LED screen",
  ),
);
de.push(
  Fe(
    v.AVIATION_LIGHT,
    "aviation_light",
    "Авиационный заградительный огонь",
    30,
    [10, 10, 10],
    14165532,
    { solid: !1, transparent: !0, shape: "furniture" },
    "Aviation obstruction light",
  ),
);
de.push(
  Fe(v.ICE, "ice", "Лёд", 60, [Wi + 3, Wi + 3, Wi + 3], 11128802, {}, "Ice"),
);
const i5 = 2;
function lz(n) {
  const e = ((n % i5) + i5) % i5;
  return e < 0.06 ? e / 0.06 : e < 0.5 ? 1 : Math.max(0, 1 - (e - 0.5) / 0.28);
}
function cz(n, e, t, i) {
  if (t !== 0) return jf;
  const [s, o] = xo[n & 3];
  return e === s && i === o ? gC : jf;
}
const hz = new Set([
    v.LUNAR_REGOLITH,
    v.LUNAR_ROCK,
    v.LUNAR_BASALT,
    v.LUNAR_ICE,
    v.LUNAR_ORE,
  ]),
  rw = [v.CORAL_PINK, v.CORAL_BLUE, v.CORAL_YELLOW],
  yC = new Set([v.SEAWEED, v.SEAGRASS, ...rw]),
  oa = (n, e = 0) => yC.has(n) || (cg(n) && (e & cC) !== 0),
  uc = (n, e = 0) => cg(n) && (e & hC) !== 0,
  lw = 5,
  vC = (n, e) => {
    const t = n - 0.5,
      i = e - 0.5,
      s = Math.sqrt(t * t + i * i) * 2;
    return Math.max(0, Math.min(lw - 1, Math.floor(s * lw)));
  },
  dz = (n, e) => (lw - vC(n, e)) * 2,
  bC = (n) => n === v.TARGET,
  Na = 4,
  pa = 32,
  Xf = 3 / 16,
  uz = new Set([v.DOOR, v.METAL_DOOR, v.ARMORED_DOOR]),
  Ss = (n) => uz.has(n),
  e1 = [0, -Math.PI / 2, Math.PI, Math.PI / 2];
function Ep(n, e, t) {
  const i = Math.round(Math.cos(t)),
    s = Math.round(Math.sin(t)),
    o = n - 0.5,
    a = e - 0.5;
  return [0.5 + o * i + a * s, 0.5 - o * s + a * i];
}
const Ix = (n, e, t) => {
    const i = Math.round(Math.cos(t)),
      s = Math.round(Math.sin(t));
    return [n * i + e * s, -n * s + e * i];
  },
  Px = new Map();
function Rf(n, e = (n & Qn) !== 0, t = Xf) {
  const i = (n & 3) | (n & pa) | (e ? 64 : 0);
  if (t === Xf) {
    const m = Px.get(i);
    if (m) return m;
  }
  const s = (n & pa) !== 0,
    [o, a, r, l] = e ? (s ? [1 - t, 0, 1, 1] : [0, 0, t, 1]) : [0, 1 - t, 1, 1],
    c = e1[n & 3],
    [h, d] = Ep(o, a, c),
    [u, f] = Ep(r, l, c),
    p = [Math.min(h, u), 0, Math.min(d, f), Math.max(h, u), 1, Math.max(d, f)];
  return (t === Xf && Px.set(i, p), p);
}
function fz(n, e, t) {
  var a;
  const i = t & 3;
  if (!i) return e;
  const s = (r, l) => {
      for (let c = 0; c < i; c++) [r, l] = [-l, r];
      return [r, l];
    },
    o = (a = de[n]) == null ? void 0 : a.shape;
  if (o === "ladder" || o === "torch" || n === v.LEVER || n === v.BUTTON) {
    let r = e & 7;
    o === "ladder" && (r < 1 || r > 4) && (r = 4);
    const l = Oo[r];
    if (!l || l[1] !== 0) return e;
    const [c, h] = s(l[0], l[2]);
    return (e & -8) | (c < 0 ? 1 : c > 0 ? 2 : h < 0 ? 3 : 4);
  }
  if (n === v.PISTON || n === v.SPISTON || n === v.PISTON_HEAD) {
    const r = $f[e & 7];
    if (!r || r[1] !== 0) return e;
    const [l, c] = s(r[0], r[2]);
    return (e & -8) | (l < 0 ? 2 : l > 0 ? 3 : c < 0 ? 4 : 5);
  }
  return n === v.FURNACE ||
    n === v.JACK_O_LANTERN ||
    n === v.REPEATER ||
    n === v.LED_SCREEN ||
    o === "bed" ||
    o === "door" ||
    o === "stair" ||
    o === "furniture" ||
    o === "gate"
    ? (e & -4) | (((e & 3) + i) & 3)
    : e;
}
function wC(n, e) {
  const t = e1[e & 3],
    [i, s] = Ep(n[0], n[2], t),
    [o, a] = Ep(n[3], n[5], t);
  return [
    Math.min(i, o),
    n[1],
    Math.min(s, a),
    Math.max(i, o),
    n[4],
    Math.max(s, a),
  ];
}
const Ox = new Map();
function Nx(n) {
  const e = n & (3 | Sp);
  let t = Ox.get(e);
  return (
    t ||
      ((t = (
        n & Sp
          ? [
              [0, 0, 0, 1, 0.5625, 1],
              [0, 0, 0, 1, 1, 0.125],
            ]
          : [
              [0, 0, 0, 1, 0.5625, 1],
              [0, 0, 0.875, 1, 0.62, 1],
            ]
      ).map((s) => wC(s, n & 3))),
      Ox.set(e, t)),
    t
  );
}
function pz(n, e = Xf) {
  const t = (n & pa) !== 0;
  return Ep(t ? 1 - e / 2 : e / 2, 1 - e / 2, e1[n & 3]);
}
const mz = (n) => (n & pa ? -1 : 1);
function cw(n) {
  const e = (n & pa) !== 0,
    t = e1[n & 3],
    i = Ix(e ? 1 : -1, 0, t),
    s = Ix(e ? -1 : 1, 0, t);
  return { hinge: i, free: s };
}
function Dx(n, e, t, i, s) {
  const o = e(t, i, s),
    a = o & Na ? i - 1 : i,
    r = o & Na ? e(t, a, s) : o,
    { free: l } = cw(r),
    c = t + l[0],
    h = s + l[1];
  if (!Ss(n(c, a, h))) return null;
  const d = e(c, a, h);
  return d & Na || (d & 3) !== (r & 3) || ((d ^ r) & pa) === 0
    ? null
    : [c, a, h];
}
function gz(n, e, t, i, s, o) {
  const a = (d, u) => {
      if (!Ss(n(t + d, i, s + u))) return null;
      const f = e(t + d, i, s + u);
      return f & Na || (f & 3) !== (o & 3) ? null : f;
    },
    r = cw(o & 3).hinge,
    l = cw(o & 3).free,
    c = a(r[0], r[1]);
  if (c !== null && !(c & pa) && !Dx(n, e, t + r[0], i, s + r[1]))
    return { meta: (o & 3) | pa, flip: null };
  const h = a(l[0], l[1]);
  return h !== null && !(h & pa) && !Dx(n, e, t + l[0], i, s + l[1])
    ? { meta: o & 3, flip: [t + l[0], i, s + l[1]] }
    : { meta: o & 3, flip: null };
}
const yz = new Set([
    v.CHEST,
    v.MILITARY_CHEST,
    v.BARREL,
    v.SARCOPHAGUS,
    v.COFFIN,
  ]),
  Bx = (n) => yz.has(n),
  MC = new Set([
    v.FENCE_WOOD,
    v.FENCE_COBBLE,
    v.FENCE_STONE,
    v.FENCE_STONE_BRICKS,
    v.FENCE_SANDSTONE,
    v.IRON_FENCE,
  ]),
  w0 = (n) => MC.has(n),
  SC = new Set([
    v.FENCE_GATE_WOOD,
    v.FENCE_GATE_COBBLE,
    v.FENCE_GATE_STONE,
    v.FENCE_GATE_STONE_BRICKS,
    v.FENCE_GATE_SANDSTONE,
  ]),
  Do = (n) => SC.has(n),
  vz = new Set([
    v.LADDER,
    v.STAIR_WOOD,
    v.STAIR_STONE,
    v.STAIR_SANDSTONE,
    v.STAIR_COBBLE,
    v.STAIR_BRICK,
    v.STAIR_STONE_BRICKS,
    v.STAIR_SAND,
    v.STAIR_RSTONE,
    v.STAIR_DARK,
    ...MC,
    ...SC,
  ]),
  cg = (n) => vz.has(n),
  EC = {
    post1: 6 / 16,
    post2: 10 / 16,
    rail1: 7 / 16,
    rail2: 9 / 16,
    railsY: [
      [6 / 16, 9 / 16],
      [12 / 16, 15 / 16],
    ],
    stile: 2 / 16,
    gateBottom: 5 / 16,
  },
  PS = (n) => {
    var e, t;
    return (
      w0(n) ||
      Do(n) ||
      (n > 0 &&
        !!((e = de[n]) != null && e.solid) &&
        ((t = de[n]) == null ? void 0 : t.shape) === "cube")
    );
  },
  Hx = new Map();
function bz(n, e, t, i, s = 1.5) {
  const o =
      (n ? 1 : 0) | (e ? 2 : 0) | (t ? 4 : 0) | (i ? 8 : 0) | (s > 1 ? 16 : 0),
    a = Hx.get(o);
  if (a) return a;
  const r = 6 / 16,
    l = 10 / 16,
    c = [[r, 0, r, l, s, l]];
  return (
    n && c.push([0, 0, r, r, s, l]),
    e && c.push([l, 0, r, 1, s, l]),
    t && c.push([r, 0, 0, l, s, r]),
    i && c.push([r, 0, l, l, s, 1]),
    Hx.set(o, c),
    c
  );
}
