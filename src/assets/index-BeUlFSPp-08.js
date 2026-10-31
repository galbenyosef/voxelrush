// index-BeUlFSPp 08 — math
// Lines 28197-28532 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
le.push(
  Ye(
    v.VELVET_PANEL,
    "velvet_panel",
    "Бархатная панель",
    30,
    [Nn.VELVET, Nn.VELVET, Nn.VELVET],
    7017520,
    {},
    "Velvet panel",
  ),
);
le.push(
  Ye(
    v.MARQUEE_LIGHTS,
    "marquee_lights",
    "Огни казино",
    35,
    [Nn.MARQUEE, Nn.MARQUEE, Nn.MARQUEE],
    16766842,
    { light: 15 },
    "Marquee lights",
  ),
);
const OI = 182,
  T1 = 183;
le.push(
  Ye(
    v.LED_SCREEN,
    "led_screen",
    "LED-экран",
    60,
    [T1, T1, T1],
    1316380,
    { interactive: !0 },
    "LED screen",
  ),
);
le.push(
  Ye(
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
le.push(
  Ye(v.ICE, "ice", "Лёд", 60, [Qi + 3, Qi + 3, Qi + 3], 11128802, {}, "Ice"),
);
const yd = 184,
  vd = 186,
  bd = 188;
le.push(
  Ye(
    v.WHEAT_FIELD,
    "wheat_field",
    "Поле спелой пшеницы",
    30,
    [yd, yd + 1, 2],
    13214287,
    {},
    "Ripe wheat field",
  ),
);
le.push(
  Ye(
    v.STUBBLE_FIELD,
    "stubble_field",
    "Жнивьё",
    30,
    [vd, vd + 1, 2],
    11770474,
    {},
    "Stubble field",
  ),
);
le.push(
  Ye(
    v.CROP_FIELD,
    "crop_field",
    "Поле всходов",
    30,
    [bd, bd + 1, 2],
    5798453,
    {},
    "Green crop field",
  ),
);
const lb = 2;
function KG(s) {
  const e = ((s % lb) + lb) % lb;
  return e < 0.06 ? e / 0.06 : e < 0.5 ? 1 : Math.max(0, 1 - (e - 0.5) / 0.28);
}
function YG(s, e, t, i) {
  if (t !== 0) return T1;
  const [n, o] = Qo[s & 3];
  return e === n && i === o ? OI : T1;
}
const jG = new Set([
    v.LUNAR_REGOLITH,
    v.LUNAR_ROCK,
    v.LUNAR_BASALT,
    v.LUNAR_ICE,
    v.LUNAR_ORE,
  ]),
  xS = [v.CORAL_PINK, v.CORAL_BLUE, v.CORAL_YELLOW],
  NI = new Set([v.SEAWEED, v.SEAGRASS, ...xS]),
  ka = (s, e = 0) => NI.has(s) || (nv(s) && (e & _I) !== 0),
  i0 = (s, e = 0) => nv(s) && (e & RI) !== 0,
  _S = 5,
  DI = (s, e) => {
    const t = s - 0.5,
      i = e - 0.5,
      n = Math.sqrt(t * t + i * i) * 2;
    return Math.max(0, Math.min(_S - 1, Math.floor(n * _S)));
  },
  XG = (s, e) => (_S - DI(s, e)) * 2,
  RS = (s) => s === v.TARGET,
  wr = 4,
  $a = 32,
  x1 = 3 / 16,
  ZG = new Set([v.DOOR, v.METAL_DOOR, v.ARMORED_DOOR]),
  zn = (s) => ZG.has(s),
  zm = [0, -Math.PI / 2, Math.PI, Math.PI / 2];
function om(s, e, t) {
  const i = Math.round(Math.cos(t)),
    n = Math.round(Math.sin(t)),
    o = s - 0.5,
    a = e - 0.5;
  return [0.5 + o * i + a * n, 0.5 - o * n + a * i];
}
const wx = (s, e, t) => {
    const i = Math.round(Math.cos(t)),
      n = Math.round(Math.sin(t));
    return [s * i + e * n, -s * n + e * i];
  },
  Mx = new Map();
function o1(s, e = (s & fn) !== 0, t = x1) {
  const i = (s & 3) | (s & $a) | (e ? 64 : 0);
  if (t === x1) {
    const m = Mx.get(i);
    if (m) return m;
  }
  const n = (s & $a) !== 0,
    [o, a, r, l] = e ? (n ? [1 - t, 0, 1, 1] : [0, 0, t, 1]) : [0, 1 - t, 1, 1],
    c = zm[s & 3],
    [h, d] = om(o, a, c),
    [u, f] = om(r, l, c),
    p = [Math.min(h, u), 0, Math.min(d, f), Math.max(h, u), 1, Math.max(d, f)];
  return (t === x1 && Mx.set(i, p), p);
}
function QG(s, e, t) {
  const i = t & 3;
  if (!i) return e;
  const n = (a, r) => {
      for (let l = 0; l < i; l++) [a, r] = [-r, a];
      return [a, r];
    },
    o = le[s]?.shape;
  if (o === "ladder" || o === "torch" || s === v.LEVER || s === v.BUTTON) {
    let a = e & 7;
    o === "ladder" && (a < 1 || a > 4) && (a = 4);
    const r = oa[a];
    if (!r || r[1] !== 0) return e;
    const [l, c] = n(r[0], r[2]);
    return (e & -8) | (l < 0 ? 1 : l > 0 ? 2 : c < 0 ? 3 : 4);
  }
  if (s === v.PISTON || s === v.SPISTON || s === v.PISTON_HEAD) {
    const a = M1[e & 7];
    if (!a || a[1] !== 0) return e;
    const [r, l] = n(a[0], a[2]);
    return (e & -8) | (r < 0 ? 2 : r > 0 ? 3 : l < 0 ? 4 : 5);
  }
  return s === v.FURNACE ||
    s === v.JACK_O_LANTERN ||
    s === v.REPEATER ||
    s === v.LED_SCREEN ||
    o === "bed" ||
    o === "door" ||
    o === "stair" ||
    o === "furniture" ||
    o === "gate"
    ? (e & -4) | (((e & 3) + i) & 3)
    : e;
}
function HI(s, e) {
  const t = zm[e & 3],
    [i, n] = om(s[0], s[2], t),
    [o, a] = om(s[3], s[5], t);
  return [
    Math.min(i, o),
    s[1],
    Math.min(n, a),
    Math.max(i, o),
    s[4],
    Math.max(n, a),
  ];
}
const Sx = new Map();
function Ex(s) {
  const e = s & (3 | nm);
  let t = Sx.get(e);
  return (
    t ||
      ((t = (
        s & nm
          ? [
              [0, 0, 0, 1, 0.5625, 1],
              [0, 0, 0, 1, 1, 0.125],
            ]
          : [
              [0, 0, 0, 1, 0.5625, 1],
              [0, 0, 0.875, 1, 0.62, 1],
            ]
      ).map((n) => HI(n, s & 3))),
      Sx.set(e, t)),
    t
  );
}
function JG(s, e = x1) {
  const t = (s & $a) !== 0;
  return om(t ? 1 - e / 2 : e / 2, 1 - e / 2, zm[s & 3]);
}
const eW = (s) => (s & $a ? -1 : 1);
function kS(s) {
  const e = (s & $a) !== 0,
    t = zm[s & 3],
    i = wx(e ? 1 : -1, 0, t),
    n = wx(e ? -1 : 1, 0, t);
  return { hinge: i, free: n };
}
function Ax(s, e, t, i, n) {
  const o = e(t, i, n),
    a = o & wr ? i - 1 : i,
    r = o & wr ? e(t, a, n) : o,
    { free: l } = kS(r),
    c = t + l[0],
    h = n + l[1];
  if (!zn(s(c, a, h))) return null;
  const d = e(c, a, h);
  return d & wr || (d & 3) !== (r & 3) || ((d ^ r) & $a) === 0
    ? null
    : [c, a, h];
}
function tW(s, e, t, i, n, o) {
  const a = (d, u) => {
      if (!zn(s(t + d, i, n + u))) return null;
      const f = e(t + d, i, n + u);
      return f & wr || (f & 3) !== (o & 3) ? null : f;
    },
    r = kS(o & 3).hinge,
    l = kS(o & 3).free,
    c = a(r[0], r[1]);
  if (c !== null && !(c & $a) && !Ax(s, e, t + r[0], i, n + r[1]))
    return { meta: (o & 3) | $a, flip: null };
  const h = a(l[0], l[1]);
  return h !== null && !(h & $a) && !Ax(s, e, t + l[0], i, n + l[1])
    ? { meta: o & 3, flip: [t + l[0], i, n + l[1]] }
    : { meta: o & 3, flip: null };
}
const iW = new Set([
    v.CHEST,
    v.MILITARY_CHEST,
    v.BARREL,
    v.SARCOPHAGUS,
    v.COFFIN,
  ]),
  Tx = (s) => iW.has(s),
  BI = new Set([
    v.FENCE_WOOD,
    v.FENCE_COBBLE,
    v.FENCE_STONE,
    v.FENCE_STONE_BRICKS,
    v.FENCE_SANDSTONE,
    v.IRON_FENCE,
  ]),
  zc = (s) => BI.has(s),
  zI = new Set([
    v.FENCE_GATE_WOOD,
    v.FENCE_GATE_COBBLE,
    v.FENCE_GATE_STONE,
    v.FENCE_GATE_STONE_BRICKS,
    v.FENCE_GATE_SANDSTONE,
  ]),
  Io = (s) => zI.has(s),
  sW = new Set([
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
    ...BI,
    ...zI,
  ]),
  nv = (s) => sW.has(s),
  FI = {
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
  dA = (s) =>
    zc(s) || Io(s) || (s > 0 && !!le[s]?.solid && le[s]?.shape === "cube"),
  xx = new Map();
function nW(s, e, t, i, n = 1.5) {
  const o =
      (s ? 1 : 0) | (e ? 2 : 0) | (t ? 4 : 0) | (i ? 8 : 0) | (n > 1 ? 16 : 0),
    a = xx.get(o);
  if (a) return a;
  const r = 6 / 16,
    l = 10 / 16,
    c = [[r, 0, r, l, n, l]];
  return (
    s && c.push([0, 0, r, r, n, l]),
    e && c.push([l, 0, r, 1, n, l]),
    t && c.push([r, 0, 0, l, n, r]),
    i && c.push([r, 0, l, l, n, 1]),
    xx.set(o, c),
    c
  );
}
