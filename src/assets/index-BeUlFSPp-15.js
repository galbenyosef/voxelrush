// index-BeUlFSPp 15 — fill
// Lines 30443-30773 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function XW() {
  const s = new Fs();
  (s.fill(-3, 0, -7, 3, 0, 0, v.STONE_BRICKS),
    s.fill(-3, 1, -7, 3, 12, 0, v.AIR));
  for (const e of [-2, 2])
    for (const t of [-6, -2]) s.fill(e, 1, t, e, 10, t, v.PINE_LOG);
  s.fill(-3, 7, -7, 3, 7, -1, v.PLANKS);
  for (const e of [-3, 3]) s.fill(e, 8, -7, e, 8, -1, v.FENCE_WOOD);
  for (const e of [-7, -1]) s.fill(-3, 8, e, 3, 8, e, v.FENCE_WOOD);
  return (
    s.fill(-3, 11, -7, 3, 11, -1, v.PINE_LOG),
    s.fill(-2, 12, -6, 2, 12, -2, v.PLANKS),
    s.put(1, 6, -5, v.LANTERN, 5),
    s.fill(-1, 7, -3, -1, 7, -3, v.AIR),
    s.fill(-2, 1, -3, -2, 7, -3, v.PINE_LOG),
    s.fill(-1, 1, -3, -1, 7, -3, v.LADDER, 1),
    s.put(1, 8, -5, v.MILITARY_CHEST),
    s.put(0, 10, -4, v.LANTERN),
    s.put(0, 0, 0, v.STAIR_WOOD),
    s
  );
}
function ZW() {
  const s = new Fs();
  (s.fill(-5, 0, -13, 5, 0, 0, v.STONE_BRICKS),
    s.room(-4, 0, -12, 4, 5, -2, v.GLASS, v.PLANKS));
  for (const e of [-4, 4])
    for (const t of [-12, -7, -2]) s.fill(e, 1, t, e, 5, t, v.PINE_LOG);
  (s.fill(-4, 1, -12, 4, 1, -12, v.STONE_BRICKS),
    s.fill(-4, 1, -2, 4, 1, -2, v.STONE_BRICKS),
    s.door(0, 1, -2),
    s.put(0, 0, 0, v.STAIR_WOOD));
  for (const e of [-3, -2, 2, 3]) s.fill(e, 0, -10, e, 0, -4, v.FARMLAND);
  for (const e of [-1, 1]) s.fill(e, 0, -10, e, 0, -4, v.WATER);
  for (const e of [-3, 3]) s.put(e, 1, -11, v.COMPOSTER);
  return (
    s.put(-2, 1, -3, v.CHEST),
    s.put(2, 1, -3, v.BARREL),
    s.put(0, 4, -5, v.LANTERN),
    s.put(0, 4, -9, v.LANTERN),
    s
  );
}
function DS(s) {
  const e = new Fs(),
    t = s ? 5 : 4,
    i = s ? -12 : -9;
  if (
    (e.fill(-t - 1, 0, i - 1, t + 1, 0, 0, v.RSTONE),
    e.room(-t, 0, i, t, 4, -2, v.RSTONE, v.RSTONE),
    e.fill(-t, 4, i, t, 5, -2, v.RSTONE),
    e.fill(-2, 2, i, 2, 2, i, v.AIR),
    s)
  )
    for (const n of [-t, t]) e.fill(n, 2, i + 3, n, 2, -5, v.AIR);
  (e.door(0, 1, -2, v.ARMORED_DOOR), e.fill(-2, 3, -1, 2, 3, 0, v.RSTONE));
  for (const n of [-2, 2]) e.fill(n, 1, -1, n, 2, 0, v.RSTONE);
  return (
    e.put(0, 0, 0, v.STAIR_RSTONE),
    e.put(-t + 1, 1, -4, v.MILITARY_CHEST),
    e.put(t - 1, 1, -4, v.BARREL),
    e.put(0, 3, -4, v.LANTERN),
    e
  );
}
function Ux(s) {
  const e = new Fs(),
    t = s ? 7 : 6,
    i = s ? -18 : -16;
  (e.fill(-t - 1, 0, i - 1, t + 1, 0, 0, v.RSTONE),
    e.room(-t, 0, i, t, 5, -2, v.RSTONE, v.RSTONE),
    e.room(-t + 1, 0, i + 1, t - 1, 5, -3, v.RSTONE, v.RSTONE),
    e.fill(-t, 5, i, t, 6, -2, v.RSTONE),
    e.fill(0, 1, -3, 0, 2, -3, v.AIR),
    e.door(0, 1, -2, v.ARMORED_DOOR),
    e.fill(-2, 3, -1, 2, 3, 0, v.RSTONE));
  for (const n of [-2, 2]) e.fill(n, 1, -1, n, 2, 0, v.RSTONE);
  (e.put(0, 0, 0, v.STAIR_RSTONE),
    e.fill(-t + 2, 1, -9, t - 2, 4, -9, v.RSTONE),
    e.door(0, 1, -9, v.ARMORED_DOOR));
  for (const n of [-3, 3])
    (e.bed(n, 1, i + 4), e.put(n, 1, i + 2, v.MILITARY_CHEST));
  if (
    (e.put(2, 1, -6, v.MAP_TABLE),
    e.put(3, 1, -6, v.WOOD_CHAIR, 3),
    e.put(-3, 1, -5, v.BARREL),
    e.put(2, 2, -6, v.REMOTE_STATION),
    e.put(-t + 2, 1, i + 3, v.STORAGE_SHELF, 1),
    e.put(0, 4, -6, v.LANTERN),
    e.put(0, 4, i + 4, v.LANTERN),
    s)
  ) {
    e.fill(-t + 1, 1, -1, -t + 1, 6, -1, v.LADDER, 3);
    for (const n of [-t, t]) e.fill(n, 7, i, n, 7, -2, v.RSTONE);
    for (const n of [i, -2]) e.fill(-t, 7, n, t, 7, n, v.RSTONE);
    (e.put(-t + 1, 7, -2, v.AIR), e.put(t - 1, 7, i + 1, v.LANTERN));
  }
  return e;
}
function Gx(s) {
  const e = new Fs(),
    t = s ? 12 : 8;
  (e.fill(-4, 0, -9, 4, 0, 0, v.RSTONE),
    e.fill(-4, 1, -9, 4, t + 5, 0, v.AIR),
    e.room(-3, 0, -8, 3, t, -2, v.RSTONE, v.RSTONE),
    e.door(0, 1, -2, v.ARMORED_DOOR),
    e.put(0, 0, 0, v.STAIR_RSTONE),
    s && e.fill(-2, 6, -7, 2, 6, -3, v.RSTONE),
    e.fill(-2, 1, -4, -2, t, -4, v.LADDER, 1),
    e.fill(-4, t, -9, 4, t, -1, v.RSTONE),
    e.put(-2, t, -4, v.LADDER, 1),
    e.put(-3, t, -4, v.RSTONE));
  for (const i of [-4, 4]) e.fill(i, t + 1, -9, i, t + 1, -1, v.RSTONE);
  for (const i of [-9, -1]) e.fill(-4, t + 1, i, 4, t + 1, i, v.RSTONE);
  for (const i of [-4, 4])
    for (const n of [-9, -1]) e.fill(i, t + 2, n, i, t + 3, n, v.RSTONE);
  return (
    e.fill(-4, t + 4, -9, 4, t + 4, -1, v.RSTONE),
    e.put(0, t + 3, -5, v.LANTERN),
    e.put(2, t + 1, -7, v.MILITARY_CHEST),
    e.put(2, 1, -7, v.BARREL),
    e.put(0, t - 1, -5, v.LANTERN),
    e.put(1, 1, -7, v.LANTERN),
    s && e.put(1, 7, -7, v.LANTERN),
    e.put(0, t + 5, -5, v.AVIATION_LIGHT),
    e
  );
}
function QW() {
  const s = new Fs();
  (s.fill(-9, 0, -24, 9, 0, 0, v.RSTONE), s.fill(-9, 1, -24, 9, 10, 0, v.AIR));
  for (const e of [-9, 8]) s.fill(e, 1, -24, e + 1, 6, -1, v.RSTONE);
  s.fill(-9, 1, -24, 9, 6, -23, v.RSTONE);
  for (const e of [-9, 4]) s.fill(e, 1, -2, e + 5, 6, -1, v.RSTONE);
  s.fill(-3, 0, 0, 3, 0, 0, v.STAIR_RSTONE);
  for (const e of [-6, 6]) s.fill(e, 0, -21, e, 0, -4, v.SANDSTONE_SMOOTH);
  for (const e of [-8, 8]) for (const t of [-23, -1]) s.put(e, 7, t, v.LANTERN);
  return (s.put(-7, 1, -22, v.MILITARY_CHEST), s.put(7, 1, -22, v.BARREL), s);
}
function JW() {
  const s = new Fs();
  (s.fill(-7, 0, -14, 7, 0, 0, v.RSTONE),
    s.fill(-7, 1, -14, 7, 5, 0, v.AIR),
    s.fill(-7, 1, -14, 7, 2, -13, v.RSTONE));
  for (const e of [-7, 6]) s.fill(e, 1, -14, e + 1, 2, -2, v.RSTONE);
  for (const e of [-7, 2]) s.fill(e, 1, -2, e + 5, 2, -1, v.RSTONE);
  s.fill(-5, 4, -13, 5, 4, -9, v.RSTONE);
  for (const e of [-5, 5]) s.fill(e, 1, -9, e, 3, -9, v.RSTONE);
  return (
    s.put(-4, 1, -12, v.MILITARY_CHEST),
    s.put(4, 1, -12, v.BARREL),
    s.put(0, 3, -11, v.LANTERN),
    s.put(0, 0, 0, v.STAIR_RSTONE),
    s
  );
}
function e$() {
  const s = new Fs();
  (s.fill(-7, 0, -16, 7, 0, 0, v.RSTONE),
    s.fill(-7, 1, -16, 7, 8, 0, v.AIR),
    s.fill(-7, 1, -16, 7, 2, -15, v.RSTONE));
  for (const e of [-7, 6]) s.fill(e, 1, -16, e + 1, 2, -1, v.RSTONE);
  for (const e of [-7, 2]) s.fill(e, 1, -2, e + 5, 2, -1, v.RSTONE);
  (s.room(-5, 0, -14, 0, 4, -10, v.RSTONE, v.RSTONE),
    s.door(-3, 1, -10, v.ARMORED_DOOR),
    s.put(-3, 1, -12, v.MAP_TABLE),
    s.put(-3, 2, -12, v.REMOTE_STATION),
    s.put(-4, 1, -11, v.WOOD_CHAIR, 1),
    s.put(-1, 1, -13, v.MILITARY_CHEST),
    s.put(-4, 3, -13, v.LANTERN));
  for (let e = -1; e <= 5; e++)
    for (let t = -9; t <= -3; t++) {
      const i = Math.hypot(e - 2, t + 6);
      i > 2 && i < 3.2 && s.put(e, 0, t, v.SANDSTONE_SMOOTH);
    }
  (s.put(2, 0, -6, v.POLISHED_STONE),
    s.put(5, 1, -14, v.BARREL),
    s.put(5, 1, -12, v.MILITARY_CHEST));
  for (const e of [-6, 6]) s.put(e, 3, -1, v.LANTERN);
  return (s.put(0, 0, 0, v.STAIR_RSTONE), s);
}
function B2(s) {
  const e = new Fs(),
    t = s === "apartments" ? 9 : 6,
    i = -16,
    n = s === "townhouse" ? 3 : 2,
    o =
      s === "townhouse"
        ? v.BRICK
        : s === "cafe"
          ? v.SANDSTONE_SMOOTH
          : v.STONE_BRICKS;
  (e.fill(-t - 1, 0, i - 1, t + 1, 0, 0, v.POLISHED_STONE),
    e.room(-t, 0, i, t, n * 5, -2, o, v.PLANKS));
  for (let a = 0; a < n; a++) {
    const r = a * 5;
    e.fill(-t, r, i, t, r, -2, v.PLANKS);
    for (const l of [-t, t]) e.window(l, r + 2, -13, l, -10);
    for (const l of [-t + 2, 2])
      (e.window(l, r + 2, -2, l + 1, -2), e.window(l, r + 2, i, l + 1, i));
    (e.fill(-1, r + 1, i + 1, -1, r + 4, -3, o),
      e.door(-1, r + 1, -8, v.DOOR, 1),
      e.bed(-t + 2, r + 1, -13),
      e.put(-t + 1, r + 1, -4, v.BOOKSHELF),
      e.put(-t + 2, r + 1, -5, v.CHEST),
      e.put(-3, r + 1, -10, v.WOOD_TABLE),
      e.put(-3, r + 1, -9, v.WOOD_CHAIR),
      e.put(-3, r + 4, -7, v.LANTERN),
      e.put(1, r + 1, -14, v.KITCHEN_COUNTER),
      e.put(2, r + 1, -14, v.SINK),
      e.put(3, r + 1, -14, v.FURNACE),
      e.put(1, r + 4, -5, v.LANTERN),
      a > 0 &&
        (e.fill(-t + 1, r, -1, -2, r, 0, v.POLISHED_STONE),
        e.fill(-t + 1, r + 1, 0, -2, r + 1, 0, v.FENCE_STONE),
        e.door(-3, r + 1, -2)));
  }
  (e.door(0, 1, -2), e.door(0, 1, i), e.put(0, 0, 0, v.STAIR_STONE));
  for (let a = 0; a < n; a++)
    for (let r = 0; r < 5; r++) {
      const l = a * 5 + r + 1,
        c = -5 - r;
      (e.fill(t - 2, l + 1, c, t - 1, l + 3, c, v.AIR),
        e.fill(t - 2, l, c, t - 1, l, c, v.STAIR_STONE, 0));
    }
  e.fill(-t, n * 5 + 1, i, t, n * 5 + 1, i, v.FENCE_STONE);
  for (const a of [-t, t])
    e.fill(a, n * 5 + 1, i, a, n * 5 + 1, -2, v.FENCE_STONE);
  (e.fill(-t, n * 5 + 1, -2, t, n * 5 + 1, -2, v.FENCE_STONE),
    e.put(-3, n * 5 + 1, -7, v.WOOD_TABLE),
    e.put(-4, n * 5 + 1, -7, v.WOOD_CHAIR, 1));
  for (const a of [-t + 1, t - 1]) e.put(a, n * 5 + 1, -15, v.POTTED_PLANT);
  if (s === "cafe") {
    e.fill(-t + 1, 1, -15, -2, 2, -4, v.AIR);
    for (const a of [-12, -7])
      (e.put(-4, 1, a, v.WOOD_TABLE),
        e.put(-4, 1, a + 1, v.WOOD_CHAIR),
        e.put(-4, 1, a - 1, v.WOOD_CHAIR, 2));
    e.fill(
      -t - 1,
      4,
      -1,
      t + 1,
      4,
      0,
      le.find((a) => a.name === "red_clay").id,
    );
    for (let a = -t; a <= t; a += 2)
      e.put(a, 4, 0, le.find((r) => r.name === "white_clay").id);
  }
  if (s === "apartments")
    for (let a = 0; a < n; a++)
      (e.fill(-t + 1, a * 5 + 1, -9, -2, a * 5 + 4, -9, o),
        e.door(-2, a * 5 + 1, -9),
        e.bed(-t + 2, a * 5 + 1, -6),
        e.put(-t + 1, a * 5 + 1, -3, v.KITCHEN_COUNTER));
  if (
    (e.lift(
      t - 3,
      -12,
      Array.from({ length: n + 1 }, (a, r) => r * 5 + 1),
    ),
    s === "duplex")
  ) {
    e.fill(-t - 1, 0, -21, t + 1, 0, -18, v.GRASS);
    for (const a of [-t - 1, t + 1]) e.fill(a, 1, -21, a, 1, -17, v.FENCE_WOOD);
    (e.fill(-t - 1, 1, -21, t + 1, 1, -21, v.FENCE_WOOD),
      e.put(-3, 1, -19, v.WOOD_BENCH),
      e.put(3, 1, -19, v.POTTED_PLANT));
  }
  return e;
}
function Wx(s) {
  const e = new Fs();
  (e.room(-4, 0, -16, 4, 6, 0, v.RSTONE, v.RSTONE),
    e.fill(-3, 1, -16, 3, 5, 0, v.RSTONE),
    e.fill(-2, 1, -16, 2, 4, 0, v.AIR),
    s &&
      (e.fill(-8, 0, -12, 8, 6, -4, v.RSTONE),
      e.fill(-8, 1, -10, 8, 4, -6, v.AIR),
      e.fill(-2, 1, -16, 2, 4, 0, v.AIR)));
  for (const t of [-4, -12])
    (e.put(0, 5, t, v.RGLOWSTONE), e.put(-3, 2, t, v.RSTONE));
  return e;
}
function t$() {
  const s = NS(!0);
  (s.room(-6, -5, -27, 6, 5, -16, v.RSTONE, v.RSTONE),
    s.fill(-1, -4, -16, 1, -2, -15, v.AIR));
  for (const e of [-1, 1]) s.fill(e, -4, -16, e, -2, -16, v.RSTONE);
  s.door(0, -4, -16, v.ARMORED_DOOR);
  for (const e of [-4, 3]) for (const t of [-24, -20]) s.bed(e, -4, t);
  return (
    s.put(0, -4, -24, v.MAP_TABLE),
    s.put(4, -4, -26, v.STORAGE_SHELF),
    s.put(-4, -4, -26, v.CHEST),
    s.put(0, -1, -20, v.LANTERN),
    s.put(0, -1, -25, v.LANTERN),
    s
  );
}
function i$() {
  const s = DS(!0);
  (s.room(-3, 5, -10, 3, 4, -4, v.RSTONE, v.RSTONE),
    s.fill(-1, 7, -10, 1, 7, -10, v.AIR));
  for (const e of [-3, 3]) s.fill(e, 7, -8, e, 7, -6, v.AIR);
  for (let e = 1; e <= 5; e++) s.put(-2, e, -5, v.LADDER, 4);
  return (
    s.fill(-2, 1, -4, -2, 5, -4, v.RSTONE),
    s.put(1, 6, -5, v.MILITARY_CHEST),
    s
  );
}
const qi = (s) => le.find((e) => e.name === `${s}_clay`).id;
function Id(s, e, t, i, n, o) {
  for (let a = 0; a < i; a++)
    for (let r = 0; r < n; r++) {
      const l = a * n + r + 1,
        c = t - r;
      (s.fill(e, l + 1, c, e + 2, l + n - 1, c, v.AIR),
        s.fill(e, l, c, e + 2, l, c, v.STAIR_STONE, 0),
        r > 0 && s.fill(e, l - 1, c, e + 2, l - 1, c, o));
    }
}
const gA = (s, e, t = !0) =>
  Array.from({ length: s + (t ? 1 : 0) }, (i, n) => n * e + 1);
function A5(s, e, t, i, n, o, a = v.FENCE_STONE_BRICKS) {
  (s.fill(e, o, i, e, o, n, a),
    s.fill(t, o, i, t, o, n, a),
    s.fill(e, o, n, t, o, n, a));
}
