// chunk-mesh-worker-coep-v1-BX2YFLnd 21 — math
// Lines 6886-7135 of readable/assets/chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
T.push(
  b(
    f.MARQUEE_LIGHTS,
    "marquee_lights",
    "Огни казино",
    35,
    [J.MARQUEE, J.MARQUEE, J.MARQUEE],
    16766842,
    { light: 15 },
    "Marquee lights",
  ),
);
const hr = 182,
  Ve = 183;
T.push(
  b(
    f.LED_SCREEN,
    "led_screen",
    "LED-экран",
    60,
    [Ve, Ve, Ve],
    1316380,
    { interactive: !0 },
    "LED screen",
  ),
);
T.push(
  b(
    f.AVIATION_LIGHT,
    "aviation_light",
    "Авиационный заградительный огонь",
    30,
    [10, 10, 10],
    14165532,
    { solid: !1, transparent: !0, shape: "furniture" },
    "Aviation obstruction light",
  ),
);
T.push(b(f.ICE, "ice", "Лёд", 60, [w + 3, w + 3, w + 3], 11128802, {}, "Ice"));
function cr(r, t, e, s) {
  if (e !== 0) return Ve;
  const [n, i] = le[r & 3];
  return t === n && s === i ? hr : Ve;
}
const ur = [f.CORAL_PINK, f.CORAL_BLUE, f.CORAL_YELLOW],
  oi = new Set([f.SEAWEED, f.SEAGRASS, ...ur]),
  gt = (r, t = 0) => oi.has(r) || (ui(r) && (t & Xi) !== 0),
  Qt = (r, t = 0) => ui(r) && (t & Zi) !== 0,
  lr = 4,
  wn = 32,
  Zs = 3 / 16,
  dr = new Set([f.DOOR, f.METAL_DOOR, f.ARMORED_DOOR]),
  ve = (r) => dr.has(r),
  ai = [0, -Math.PI / 2, Math.PI, Math.PI / 2];
function Ss(r, t, e) {
  const s = Math.round(Math.cos(e)),
    n = Math.round(Math.sin(e)),
    i = r - 0.5,
    h = t - 0.5;
  return [0.5 + i * s + h * n, 0.5 - i * n + h * s];
}
const zn = new Map();
function fr(r, t = (r & Tt) !== 0, e = Zs) {
  const s = (r & 3) | (r & wn) | (t ? 64 : 0);
  if (e === Zs) {
    const _ = zn.get(s);
    if (_) return _;
  }
  const n = (r & wn) !== 0,
    [i, h, c, o] = t ? (n ? [1 - e, 0, 1, 1] : [0, 0, e, 1]) : [0, 1 - e, 1, 1],
    a = ai[r & 3],
    [u, d] = Ss(i, h, a),
    [l, p] = Ss(c, o, a),
    m = [Math.min(u, l), 0, Math.min(d, p), Math.max(u, l), 1, Math.max(d, p)];
  return (e === Zs && zn.set(s, m), m);
}
function pr(r, t) {
  const e = ai[t & 3],
    [s, n] = Ss(r[0], r[2], e),
    [i, h] = Ss(r[3], r[5], e);
  return [
    Math.min(s, i),
    r[1],
    Math.min(n, h),
    Math.max(s, i),
    r[4],
    Math.max(n, h),
  ];
}
const hi = new Set([
    f.FENCE_WOOD,
    f.FENCE_COBBLE,
    f.FENCE_STONE,
    f.FENCE_STONE_BRICKS,
    f.FENCE_SANDSTONE,
    f.IRON_FENCE,
  ]),
  mr = (r) => hi.has(r),
  ci = new Set([
    f.FENCE_GATE_WOOD,
    f.FENCE_GATE_COBBLE,
    f.FENCE_GATE_STONE,
    f.FENCE_GATE_STONE_BRICKS,
    f.FENCE_GATE_SANDSTONE,
  ]),
  fn = (r) => ci.has(r),
  _r = new Set([
    f.LADDER,
    f.STAIR_WOOD,
    f.STAIR_STONE,
    f.STAIR_SANDSTONE,
    f.STAIR_COBBLE,
    f.STAIR_BRICK,
    f.STAIR_STONE_BRICKS,
    f.STAIR_SAND,
    f.STAIR_RSTONE,
    f.STAIR_DARK,
    ...hi,
    ...ci,
  ]),
  ui = (r) => _r.has(r),
  Er = {
    post1: 6 / 16,
    post2: 10 / 16,
    rail1: 7 / 16,
    rail2: 9 / 16,
    railsY: [
      [6 / 16, 9 / 16],
      [12 / 16, 15 / 16],
    ],
  },
  li = (r) => {
    var t, e;
    return (
      mr(r) ||
      fn(r) ||
      (r > 0 &&
        !!((t = T[r]) != null && t.solid) &&
        ((e = T[r]) == null ? void 0 : e.shape) === "cube")
    );
  },
  Ar = new Set([
    f.SAPLING,
    f.TROPICAL_SAPLING,
    f.DESERT_SAPLING,
    f.PINE_SAPLING,
    f.SAKURA_SAPLING,
    f.AUTUMN_SAPLING,
  ]),
  yr = [f.AUTUMN_LEAVES_ORANGE, f.AUTUMN_LEAVES_RED, f.AUTUMN_LEAVES_YELLOW],
  xr = new Set([
    f.LEAVES,
    f.TROPICAL_LEAVES,
    f.DESERT_LEAVES,
    f.PINE_LEAVES,
    f.SAKURA_LEAVES,
    ...yr,
  ]),
  di = new Set([f.WHEAT_SPROUT, f.WHEAT_YOUNG, f.WHEAT_CROP]),
  fi = new Set([f.POTATO_SPROUT, f.POTATO_YOUNG, f.POTATO_CROP]),
  pi = new Set([f.CARROT_SPROUT, f.CARROT_YOUNG, f.CARROT_CROP]),
  mi = new Set([f.PUMPKIN_SPROUT, f.PUMPKIN_YOUNG, f.PUMPKIN_CROP]),
  Mr = new Set([...di, ...fi, ...pi, ...mi, ...dn]);
({ ...Object.fromEntries(Jt.map((r) => [r.stages[0], [...r.stages]])) });
[
  ...Ar,
  f.TALL_GRASS,
  f.DESERT_GRASS,
  f.FLOWER_RED,
  f.FLOWER_WHITE,
  f.FLOWER_BLUE,
  f.FLOWER_PINK,
  f.FLOWER_YELLOW,
  f.FIRE,
  ...di,
  ...fi,
  ...pi,
  ...mi,
  f.FLY_AGARIC,
  f.MUSHROOM,
  f.LEAF_LITTER,
  ...dn,
  ...oi,
];
const re = (r) => xr.has(r),
  Sr = 8,
  $t = (r) => {
    if (r & Sr) return 1;
    const t = r & 7;
    return t === 0 ? 0.875 : (0.875 * (8 - t)) / 8;
  },
  _i = (r, t) =>
    r === f.RTORCH
      ? t & Tt
        ? 0
        : 7
      : r === f.LAMP
        ? t & Tt
          ? 15
          : 0
        : r === f.REDSTONE
          ? $n(t) > 0
            ? 2
            : 0
          : r === f.FURNACE
            ? t & Tt
              ? 13
              : 0
            : T[r].light,
  Ce = new Uint8Array(256);
for (const r of T) Ce[r.id] = r.light;
Ce[f.LAMP] = 15;
Ce[f.REDSTONE] = 2;
Ce[f.FURNACE] = 13;
Ce[f.FIRE] = 15;
Ce[f.LAVA] = 15;
({ ...Object.fromEntries([...dn].map((r) => [r, "leaves"])) });
const Ei = (r) => r > 0 && T[r].solid && !T[r].transparent;
T.filter(
  (r) =>
    !!r.label &&
    r.id !== f.AIR &&
    r.id !== f.BEDROCK &&
    r.id !== f.PISTON_HEAD &&
    !Mr.has(r.id),
).map((r) => r.id);
function gr(r, t = 0) {
  var s;
  if (r === f.AIR) return 0;
  if ((s = T[r]) != null && s.solid && !T[r].transparent) return 15;
  if (fn(r)) return t & Tt ? 0 : 1;
  if (ve(r)) return t & Tt ? 0 : 15;
  if (re(r) || r === f.WATER || gt(r, t)) return 2;
  const e = T[r];
  return e != null && e.solid && !e.transparent ? 15 : 0;
}
const Ge = 15,
  Et = D + Ge * 2,
  It = Et * Y,
  ne = Et * It,
  Ai = new Uint8Array(65536),
  yi = new Uint8Array(65536),
  xi = new Uint8Array(65536);
for (let r = 0; r < 256; r++)
  for (const t of T) {
    const e = (r << 8) | t.id;
    ((Ai[e] = gr(t.id, r)),
      (yi[e] = _i(t.id, r)),
      (xi[e] = Number(t.id === f.WATER || gt(t.id, r))));
  }
