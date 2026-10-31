// chunk-mesh-worker-coep-v1-GBSiXDQy 21 — math
// Lines 6883-7162 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
T.push(
  b(
    p.MARQUEE_LIGHTS,
    "marquee_lights",
    "Огни казино",
    35,
    [Z.MARQUEE, Z.MARQUEE, Z.MARQUEE],
    16766842,
    { light: 15 },
    "Marquee lights",
  ),
);
const rr = 182,
  Ge = 183;
T.push(
  b(
    p.LED_SCREEN,
    "led_screen",
    "LED-экран",
    60,
    [Ge, Ge, Ge],
    1316380,
    { interactive: !0 },
    "LED screen",
  ),
);
T.push(
  b(
    p.AVIATION_LIGHT,
    "aviation_light",
    "Авиационный заградительный огонь",
    30,
    [10, 10, 10],
    14165532,
    { solid: !1, transparent: !0, shape: "furniture" },
    "Aviation obstruction light",
  ),
);
T.push(b(p.ICE, "ice", "Лёд", 60, [z + 3, z + 3, z + 3], 11128802, {}, "Ice"));
const As = 184,
  ys = 186,
  xs = 188;
T.push(
  b(
    p.WHEAT_FIELD,
    "wheat_field",
    "Поле спелой пшеницы",
    30,
    [As, As + 1, 2],
    13214287,
    {},
    "Ripe wheat field",
  ),
);
T.push(
  b(
    p.STUBBLE_FIELD,
    "stubble_field",
    "Жнивьё",
    30,
    [ys, ys + 1, 2],
    11770474,
    {},
    "Stubble field",
  ),
);
T.push(
  b(
    p.CROP_FIELD,
    "crop_field",
    "Поле всходов",
    30,
    [xs, xs + 1, 2],
    5798453,
    {},
    "Green crop field",
  ),
);
function or(r, t, e, s) {
  if (e !== 0) return Ge;
  const [n, i] = ae[r & 3];
  return t === n && s === i ? rr : Ge;
}
const ar = [p.CORAL_PINK, p.CORAL_BLUE, p.CORAL_YELLOW],
  ri = new Set([p.SEAWEED, p.SEAGRASS, ...ar]),
  yt = (r, t = 0) => ri.has(r) || (ci(r) && (t & qi) !== 0),
  Vt = (r, t = 0) => ci(r) && (t & Ki) !== 0,
  hr = 4,
  Dn = 32,
  Xs = 3 / 16,
  cr = new Set([p.DOOR, p.METAL_DOOR, p.ARMORED_DOOR]),
  We = (r) => cr.has(r),
  oi = [0, -Math.PI / 2, Math.PI, Math.PI / 2];
function Ms(r, t, e) {
  const s = Math.round(Math.cos(e)),
    n = Math.round(Math.sin(e)),
    i = r - 0.5,
    c = t - 0.5;
  return [0.5 + i * s + c * n, 0.5 - i * n + c * s];
}
const wn = new Map();
function ur(r, t = (r & Mt) !== 0, e = Xs) {
  const s = (r & 3) | (r & Dn) | (t ? 64 : 0);
  if (e === Xs) {
    const _ = wn.get(s);
    if (_) return _;
  }
  const n = (r & Dn) !== 0,
    [i, c, h, o] = t ? (n ? [1 - e, 0, 1, 1] : [0, 0, e, 1]) : [0, 1 - e, 1, 1],
    a = oi[r & 3],
    [u, d] = Ms(i, c, a),
    [l, f] = Ms(h, o, a),
    m = [Math.min(u, l), 0, Math.min(d, f), Math.max(u, l), 1, Math.max(d, f)];
  return (e === Xs && wn.set(s, m), m);
}
function lr(r, t) {
  const e = oi[t & 3],
    [s, n] = Ms(r[0], r[2], e),
    [i, c] = Ms(r[3], r[5], e);
  return [
    Math.min(s, i),
    r[1],
    Math.min(n, c),
    Math.max(s, i),
    r[4],
    Math.max(n, c),
  ];
}
const ai = new Set([
    p.FENCE_WOOD,
    p.FENCE_COBBLE,
    p.FENCE_STONE,
    p.FENCE_STONE_BRICKS,
    p.FENCE_SANDSTONE,
    p.IRON_FENCE,
  ]),
  dr = (r) => ai.has(r),
  hi = new Set([
    p.FENCE_GATE_WOOD,
    p.FENCE_GATE_COBBLE,
    p.FENCE_GATE_STONE,
    p.FENCE_GATE_STONE_BRICKS,
    p.FENCE_GATE_SANDSTONE,
  ]),
  dn = (r) => hi.has(r),
  fr = new Set([
    p.LADDER,
    p.STAIR_WOOD,
    p.STAIR_STONE,
    p.STAIR_SANDSTONE,
    p.STAIR_COBBLE,
    p.STAIR_BRICK,
    p.STAIR_STONE_BRICKS,
    p.STAIR_SAND,
    p.STAIR_RSTONE,
    p.STAIR_DARK,
    ...ai,
    ...hi,
  ]),
  ci = (r) => fr.has(r),
  pr = {
    post1: 6 / 16,
    post2: 10 / 16,
    rail1: 7 / 16,
    rail2: 9 / 16,
    railsY: [
      [6 / 16, 9 / 16],
      [12 / 16, 15 / 16],
    ],
  },
  ui = (r) =>
    dr(r) || dn(r) || (r > 0 && !!T[r]?.solid && T[r]?.shape === "cube"),
  mr = new Set([
    p.SAPLING,
    p.TROPICAL_SAPLING,
    p.DESERT_SAPLING,
    p.PINE_SAPLING,
    p.SAKURA_SAPLING,
    p.AUTUMN_SAPLING,
  ]),
  _r = [p.AUTUMN_LEAVES_ORANGE, p.AUTUMN_LEAVES_RED, p.AUTUMN_LEAVES_YELLOW],
  Er = new Set([
    p.LEAVES,
    p.TROPICAL_LEAVES,
    p.DESERT_LEAVES,
    p.PINE_LEAVES,
    p.SAKURA_LEAVES,
    ..._r,
  ]),
  li = new Set([p.WHEAT_SPROUT, p.WHEAT_YOUNG, p.WHEAT_CROP]),
  di = new Set([p.POTATO_SPROUT, p.POTATO_YOUNG, p.POTATO_CROP]),
  fi = new Set([p.CARROT_SPROUT, p.CARROT_YOUNG, p.CARROT_CROP]),
  pi = new Set([p.PUMPKIN_SPROUT, p.PUMPKIN_YOUNG, p.PUMPKIN_CROP]),
  Ar = new Set([...li, ...di, ...fi, ...pi, ...ln]);
({ ...Object.fromEntries(Qt.map((r) => [r.stages[0], [...r.stages]])) });
[
  ...mr,
  p.TALL_GRASS,
  p.DESERT_GRASS,
  p.FLOWER_RED,
  p.FLOWER_WHITE,
  p.FLOWER_BLUE,
  p.FLOWER_PINK,
  p.FLOWER_YELLOW,
  p.FIRE,
  ...li,
  ...di,
  ...fi,
  ...pi,
  p.FLY_AGARIC,
  p.MUSHROOM,
  p.LEAF_LITTER,
  ...ln,
  ...ri,
];
const ee = (r) => Er.has(r),
  yr = 8,
  Kt = (r) => {
    if (r & yr) return 1;
    const t = r & 7;
    return t === 0 ? 0.875 : (0.875 * (8 - t)) / 8;
  },
  mi = (r, t) =>
    r === p.RTORCH
      ? t & Mt
        ? 0
        : 7
      : r === p.LAMP
        ? t & Mt
          ? 15
          : 0
        : r === p.REDSTONE
          ? Zn(t) > 0
            ? 2
            : 0
          : r === p.FURNACE
            ? t & Mt
              ? 13
              : 0
            : T[r].light,
  be = new Uint8Array(256);
for (const r of T) be[r.id] = r.light;
be[p.LAMP] = 15;
be[p.REDSTONE] = 2;
be[p.FURNACE] = 13;
be[p.FIRE] = 15;
be[p.LAVA] = 15;
({ ...Object.fromEntries([...ln].map((r) => [r, "leaves"])) });
const _i = (r) => r > 0 && T[r].solid && !T[r].transparent;
T.filter(
  (r) =>
    !!r.label &&
    r.id !== p.AIR &&
    r.id !== p.BEDROCK &&
    r.id !== p.PISTON_HEAD &&
    !Ar.has(r.id),
).map((r) => r.id);
function xr(r, t = 0) {
  if (r === p.AIR) return 0;
  if (T[r]?.solid && !T[r].transparent) return 15;
  if (dn(r)) return t & Mt ? 0 : 1;
  if (We(r)) return t & Mt ? 0 : 15;
  if (ee(r) || r === p.WATER || yt(r, t)) return 2;
  const e = T[r];
  return e?.solid && !e.transparent ? 15 : 0;
}
const De = 15,
  ft = D + De * 2,
  Tt = ft * H,
  jt = ft * Tt,
  Ei = new Uint8Array(65536),
  Ai = new Uint8Array(65536),
  yi = new Uint8Array(65536);
for (let r = 0; r < 256; r++)
  for (const t of T) {
    const e = (r << 8) | t.id;
    ((Ei[e] = xr(t.id, r)),
      (Ai[e] = mi(t.id, r)),
      (yi[e] = Number(t.id === p.WATER || yt(t.id, r))));
  }
