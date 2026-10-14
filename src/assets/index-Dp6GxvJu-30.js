// index-Dp6GxvJu 30 — fill
// Lines 37710-37997 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function xw(n) {
  const e = new In(),
    t = n ? 5 : 4,
    i = n ? -12 : -9;
  if (
    (e.fill(-t - 1, 0, i - 1, t + 1, 0, 0, v.RSTONE),
    e.room(-t, 0, i, t, 4, -2, v.RSTONE, v.RSTONE),
    e.fill(-t, 4, i, t, 5, -2, v.RSTONE),
    e.fill(-2, 2, i, 2, 2, i, v.AIR),
    n)
  )
    for (const s of [-t, t]) e.fill(s, 2, i + 3, s, 2, -5, v.AIR);
  (e.door(0, 1, -2, v.ARMORED_DOOR), e.fill(-2, 3, -1, 2, 3, 0, v.RSTONE));
  for (const s of [-2, 2]) e.fill(s, 1, -1, s, 2, 0, v.RSTONE);
  return (
    e.put(0, 0, 0, v.STAIR_RSTONE),
    e.put(-t + 1, 1, -4, v.MILITARY_CHEST),
    e.put(t - 1, 1, -4, v.BARREL),
    e.put(0, 3, -4, v.LANTERN),
    e
  );
}
function AT(n) {
  const e = new In(),
    t = n ? 7 : 6,
    i = n ? -18 : -16;
  (e.fill(-t - 1, 0, i - 1, t + 1, 0, 0, v.RSTONE),
    e.room(-t, 0, i, t, 5, -2, v.RSTONE, v.RSTONE),
    e.room(-t + 1, 0, i + 1, t - 1, 5, -3, v.RSTONE, v.RSTONE),
    e.fill(-t, 5, i, t, 6, -2, v.RSTONE),
    e.fill(0, 1, -3, 0, 2, -3, v.AIR),
    e.door(0, 1, -2, v.ARMORED_DOOR),
    e.fill(-2, 3, -1, 2, 3, 0, v.RSTONE));
  for (const s of [-2, 2]) e.fill(s, 1, -1, s, 2, 0, v.RSTONE);
  (e.put(0, 0, 0, v.STAIR_RSTONE),
    e.fill(-t + 2, 1, -9, t - 2, 4, -9, v.RSTONE),
    e.door(0, 1, -9, v.ARMORED_DOOR));
  for (const s of [-3, 3])
    (e.bed(s, 1, i + 4), e.put(s, 1, i + 2, v.MILITARY_CHEST));
  if (
    (e.put(2, 1, -6, v.MAP_TABLE),
    e.put(3, 1, -6, v.WOOD_CHAIR, 3),
    e.put(-3, 1, -5, v.BARREL),
    e.put(2, 2, -6, v.REMOTE_STATION),
    e.put(-t + 2, 1, i + 3, v.STORAGE_SHELF, 1),
    e.put(0, 4, -6, v.LANTERN),
    e.put(0, 4, i + 4, v.LANTERN),
    n)
  ) {
    e.fill(-t + 1, 1, -1, -t + 1, 6, -1, v.LADDER, 3);
    for (const s of [-t, t]) e.fill(s, 7, i, s, 7, -2, v.RSTONE);
    for (const s of [i, -2]) e.fill(-t, 7, s, t, 7, s, v.RSTONE);
    (e.put(-t + 1, 7, -2, v.AIR), e.put(t - 1, 7, i + 1, v.LANTERN));
  }
  return e;
}
function _T(n) {
  const e = new In(),
    t = n ? 12 : 8;
  (e.fill(-4, 0, -9, 4, 0, 0, v.RSTONE),
    e.fill(-4, 1, -9, 4, t + 5, 0, v.AIR),
    e.room(-3, 0, -8, 3, t, -2, v.RSTONE, v.RSTONE),
    e.door(0, 1, -2, v.ARMORED_DOOR),
    e.put(0, 0, 0, v.STAIR_RSTONE),
    n && e.fill(-2, 6, -7, 2, 6, -3, v.RSTONE),
    e.fill(-2, 1, -4, -2, t, -4, v.LADDER, 1),
    e.fill(-4, t, -9, 4, t, -1, v.RSTONE),
    e.put(-2, t, -4, v.LADDER, 1),
    e.put(-3, t, -4, v.RSTONE));
  for (const i of [-4, 4]) e.fill(i, t + 1, -9, i, t + 1, -1, v.RSTONE);
  for (const i of [-9, -1]) e.fill(-4, t + 1, i, 4, t + 1, i, v.RSTONE);
  for (const i of [-4, 4])
    for (const s of [-9, -1]) e.fill(i, t + 2, s, i, t + 3, s, v.RSTONE);
  return (
    e.fill(-4, t + 4, -9, 4, t + 4, -1, v.RSTONE),
    e.put(0, t + 3, -5, v.LANTERN),
    e.put(2, t + 1, -7, v.MILITARY_CHEST),
    e.put(2, 1, -7, v.BARREL),
    e.put(0, t - 1, -5, v.LANTERN),
    e.put(1, 1, -7, v.LANTERN),
    n && e.put(1, 7, -7, v.LANTERN),
    e.put(0, t + 5, -5, v.AVIATION_LIGHT),
    e
  );
}
function NF() {
  const n = new In();
  (n.fill(-9, 0, -24, 9, 0, 0, v.RSTONE), n.fill(-9, 1, -24, 9, 10, 0, v.AIR));
  for (const e of [-9, 8]) n.fill(e, 1, -24, e + 1, 6, -1, v.RSTONE);
  n.fill(-9, 1, -24, 9, 6, -23, v.RSTONE);
  for (const e of [-9, 4]) n.fill(e, 1, -2, e + 5, 6, -1, v.RSTONE);
  n.fill(-3, 0, 0, 3, 0, 0, v.STAIR_RSTONE);
  for (const e of [-6, 6]) n.fill(e, 0, -21, e, 0, -4, v.SANDSTONE_SMOOTH);
  for (const e of [-8, 8]) for (const t of [-23, -1]) n.put(e, 7, t, v.LANTERN);
  return (n.put(-7, 1, -22, v.MILITARY_CHEST), n.put(7, 1, -22, v.BARREL), n);
}
function DF() {
  const n = new In();
  (n.fill(-7, 0, -14, 7, 0, 0, v.RSTONE),
    n.fill(-7, 1, -14, 7, 5, 0, v.AIR),
    n.fill(-7, 1, -14, 7, 2, -13, v.RSTONE));
  for (const e of [-7, 6]) n.fill(e, 1, -14, e + 1, 2, -2, v.RSTONE);
  for (const e of [-7, 2]) n.fill(e, 1, -2, e + 5, 2, -1, v.RSTONE);
  n.fill(-5, 4, -13, 5, 4, -9, v.RSTONE);
  for (const e of [-5, 5]) n.fill(e, 1, -9, e, 3, -9, v.RSTONE);
  return (
    n.put(-4, 1, -12, v.MILITARY_CHEST),
    n.put(4, 1, -12, v.BARREL),
    n.put(0, 3, -11, v.LANTERN),
    n.put(0, 0, 0, v.STAIR_RSTONE),
    n
  );
}
function BF() {
  const n = new In();
  (n.fill(-7, 0, -16, 7, 0, 0, v.RSTONE),
    n.fill(-7, 1, -16, 7, 8, 0, v.AIR),
    n.fill(-7, 1, -16, 7, 2, -15, v.RSTONE));
  for (const e of [-7, 6]) n.fill(e, 1, -16, e + 1, 2, -1, v.RSTONE);
  for (const e of [-7, 2]) n.fill(e, 1, -2, e + 5, 2, -1, v.RSTONE);
  (n.room(-5, 0, -14, 0, 4, -10, v.RSTONE, v.RSTONE),
    n.door(-3, 1, -10, v.ARMORED_DOOR),
    n.put(-3, 1, -12, v.MAP_TABLE),
    n.put(-3, 2, -12, v.REMOTE_STATION),
    n.put(-4, 1, -11, v.WOOD_CHAIR, 1),
    n.put(-1, 1, -13, v.MILITARY_CHEST),
    n.put(-4, 3, -13, v.LANTERN));
  for (let e = -1; e <= 5; e++)
    for (let t = -9; t <= -3; t++) {
      const i = Math.hypot(e - 2, t + 6);
      i > 2 && i < 3.2 && n.put(e, 0, t, v.SANDSTONE_SMOOTH);
    }
  (n.put(2, 0, -6, v.POLISHED_STONE),
    n.put(5, 1, -14, v.BARREL),
    n.put(5, 1, -12, v.MILITARY_CHEST));
  for (const e of [-6, 6]) n.put(e, 3, -1, v.LANTERN);
  return (n.put(0, 0, 0, v.STAIR_RSTONE), n);
}
function dm(n) {
  const e = new In(),
    t = n === "apartments" ? 9 : 6,
    i = -16,
    s = n === "townhouse" ? 3 : 2,
    o =
      n === "townhouse"
        ? v.BRICK
        : n === "cafe"
          ? v.SANDSTONE_SMOOTH
          : v.STONE_BRICKS;
  (e.fill(-t - 1, 0, i - 1, t + 1, 0, 0, v.POLISHED_STONE),
    e.room(-t, 0, i, t, s * 5, -2, o, v.PLANKS));
  for (let a = 0; a < s; a++) {
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
  for (let a = 0; a < s; a++)
    for (let r = 0; r < 5; r++) {
      const l = a * 5 + r + 1,
        c = -5 - r;
      (e.fill(t - 2, l + 1, c, t - 1, l + 3, c, v.AIR),
        e.fill(t - 2, l, c, t - 1, l, c, v.STAIR_STONE, 0));
    }
  e.fill(-t, s * 5 + 1, i, t, s * 5 + 1, i, v.FENCE_STONE);
  for (const a of [-t, t])
    e.fill(a, s * 5 + 1, i, a, s * 5 + 1, -2, v.FENCE_STONE);
  (e.fill(-t, s * 5 + 1, -2, t, s * 5 + 1, -2, v.FENCE_STONE),
    e.put(-3, s * 5 + 1, -7, v.WOOD_TABLE),
    e.put(-4, s * 5 + 1, -7, v.WOOD_CHAIR, 1));
  for (const a of [-t + 1, t - 1]) e.put(a, s * 5 + 1, -15, v.POTTED_PLANT);
  if (n === "cafe") {
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
      de.find((a) => a.name === "red_clay").id,
    );
    for (let a = -t; a <= t; a += 2)
      e.put(a, 4, 0, de.find((r) => r.name === "white_clay").id);
  }
  if (n === "apartments")
    for (let a = 0; a < s; a++)
      (e.fill(-t + 1, a * 5 + 1, -9, -2, a * 5 + 4, -9, o),
        e.door(-2, a * 5 + 1, -9),
        e.bed(-t + 2, a * 5 + 1, -6),
        e.put(-t + 1, a * 5 + 1, -3, v.KITCHEN_COUNTER));
  if (
    (e.lift(
      t - 3,
      -12,
      Array.from({ length: s + 1 }, (a, r) => r * 5 + 1),
    ),
    n === "duplex")
  ) {
    e.fill(-t - 1, 0, -21, t + 1, 0, -18, v.GRASS);
    for (const a of [-t - 1, t + 1]) e.fill(a, 1, -21, a, 1, -17, v.FENCE_WOOD);
    (e.fill(-t - 1, 1, -21, t + 1, 1, -21, v.FENCE_WOOD),
      e.put(-3, 1, -19, v.WOOD_BENCH),
      e.put(3, 1, -19, v.POTTED_PLANT));
  }
  return e;
}
function RT(n) {
  const e = new In();
  (e.room(-4, 0, -16, 4, 6, 0, v.RSTONE, v.RSTONE),
    e.fill(-3, 1, -16, 3, 5, 0, v.RSTONE),
    e.fill(-2, 1, -16, 2, 4, 0, v.AIR),
    n &&
      (e.fill(-8, 0, -12, 8, 6, -4, v.RSTONE),
      e.fill(-8, 1, -10, 8, 4, -6, v.AIR),
      e.fill(-2, 1, -16, 2, 4, 0, v.AIR)));
  for (const t of [-4, -12])
    (e.put(0, 5, t, v.RGLOWSTONE), e.put(-3, 2, t, v.RSTONE));
  return e;
}
function HF() {
  const n = Ew(!0);
  (n.room(-6, -5, -27, 6, 5, -16, v.RSTONE, v.RSTONE),
    n.fill(-1, -4, -16, 1, -2, -15, v.AIR));
  for (const e of [-1, 1]) n.fill(e, -4, -16, e, -2, -16, v.RSTONE);
  n.door(0, -4, -16, v.ARMORED_DOOR);
  for (const e of [-4, 3]) for (const t of [-24, -20]) n.bed(e, -4, t);
  return (
    n.put(0, -4, -24, v.MAP_TABLE),
    n.put(4, -4, -26, v.STORAGE_SHELF),
    n.put(-4, -4, -26, v.CHEST),
    n.put(0, -1, -20, v.LANTERN),
    n.put(0, -1, -25, v.LANTERN),
    n
  );
}
function zF() {
  const n = xw(!0);
  (n.room(-3, 5, -10, 3, 4, -4, v.RSTONE, v.RSTONE),
    n.fill(-1, 7, -10, 1, 7, -10, v.AIR));
  for (const e of [-3, 3]) n.fill(e, 7, -8, e, 7, -6, v.AIR);
  for (let e = 1; e <= 5; e++) n.put(-2, e, -5, v.LADDER, 4);
  return (
    n.fill(-2, 1, -4, -2, 5, -4, v.RSTONE),
    n.put(1, 6, -5, v.MILITARY_CHEST),
    n
  );
}
const Di = (n) => de.find((e) => e.name === `${n}_clay`).id;
function _0(n, e, t, i, s, o) {
  for (let a = 0; a < i; a++)
    for (let r = 0; r < s; r++) {
      const l = a * s + r + 1,
        c = t - r;
      (n.fill(e, l + 1, c, e + 2, l + s - 1, c, v.AIR),
        n.fill(e, l, c, e + 2, l, c, v.STAIR_STONE, 0),
        r > 0 && n.fill(e, l - 1, c, e + 2, l - 1, c, o));
    }
}
const $S = (n, e, t = !0) =>
  Array.from({ length: n + (t ? 1 : 0) }, (i, s) => s * e + 1);
function Ay(n, e, t, i, s, o, a = v.FENCE_STONE_BRICKS) {
  (n.fill(e, o, i, e, o, s, a),
    n.fill(t, o, i, t, o, s, a),
    n.fill(e, o, s, t, o, s, a));
}
