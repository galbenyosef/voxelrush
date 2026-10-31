// index-Dp6GxvJu 29 — block
// Lines 37381-37709 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function b5(n) {
  const e = new In(),
    t = n === "modern",
    i = n === "alpine",
    s = t ? 6 : 4,
    o = t ? -12 : -10;
  (e.fill(-s - 1, 0, o - 1, s + 1, 0, 0, t ? BLOCK.POLISHED_STONE : BLOCK.COBBLE),
    e.room(-s, 0, o, s, 5, -2, t || i ? BLOCK.STONE_BRICKS : BLOCK.PLANKS, BLOCK.PLANKS),
    e.door(0, 1, -2),
    e.put(0, 0, 0, BLOCK.STAIR_WOOD, 0));
  for (const a of [-s, s])
    (e.window(a, 2, o + 2, a, o + 4), e.window(a, 2, -5, a, -4));
  (e.window(-3, 2, -2, -2, -2), e.window(2, 2, -2, 3, -2));
  for (const a of [-s, s])
    for (const r of [o, -2])
      e.fill(a, 1, r, a, 5, r, t ? BLOCK.POLISHED_STONE : BLOCK.PINE_LOG);
  if (t) {
    (e.fill(-s - 1, 5, o - 1, s + 1, 5, -1, BLOCK.POLISHED_STONE),
      e.fill(-s, 6, o, s, 6, o, BLOCK.GLASS),
      e.fill(-s, 6, o, -s, 6, -2, BLOCK.GLASS),
      e.fill(s, 6, o, s, 6, -2, BLOCK.GLASS),
      e.put(-s + 1, 5, o + 1, BLOCK.AIR),
      e.fill(-s, 6, -2, s, 6, -2, BLOCK.GLASS));
    for (let a = 1; a <= 5; a++) e.put(-s + 1, a, o + 1, BLOCK.LADDER, 1);
    (e.put(3, 6, -6, BLOCK.WOOD_TABLE),
      e.put(3, 6, -7, BLOCK.WOOD_CHAIR, 2),
      e.put(3, 6, -5, BLOCK.WOOD_CHAIR, 0),
      e.put(-3, 6, -8, BLOCK.POTTED_PLANT),
      e.put(-3, 6, -4, BLOCK.POTTED_PLANT));
  } else {
    (e.gable(s + 1, o - 1, -1, 5, i ? BLOCK.STONE_BRICKS : BLOCK.PINE_LOG),
      e.fill(s - 2, 5, o + 2, s - 2, 11, o + 2, BLOCK.AIR));
    for (const [a, r] of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ])
      e.fill(s - 2 + a, 5, o + 2 + r, s - 2 + a, 10, o + 2 + r, BLOCK.BRICK);
    e.put(1, 5, -3, BLOCK.AIR);
    for (let a = 1; a <= 6; a++) e.put(1, a, -3, BLOCK.LADDER, 4);
    (e.put(0, 7, o, BLOCK.GLASS),
      e.put(0, 8, o, BLOCK.GLASS),
      e.bed(-1, 6, -7, 2),
      e.put(1, 6, o + 1, BLOCK.CHEST),
      e.put(0, 9, -5, BLOCK.LANTERN, 5));
  }
  (e.bed(-s + 2, 1, o + 3),
    e.put(t ? -3 : -s + 1, 1, o + 1, BLOCK.CHEST),
    e.put(s - 2, 1, o + 2, BLOCK.FURNACE, 2),
    e.put(s - 1, 1, o + 3, BLOCK.BARREL),
    e.put(2, 1, -5, BLOCK.WOOD_TABLE),
    e.put(2, 1, -6, BLOCK.WOOD_CHAIR, 2),
    e.put(2, 1, -4, BLOCK.WOOD_CHAIR, 0),
    e.put(-s + 1, 1, -4, BLOCK.BOOKSHELF),
    e.put(-2, 4, -3, BLOCK.LANTERN));
  for (const a of [-s, s])
    (e.fill(a, 1, -1, a, 1, 0, BLOCK.FENCE_WOOD), e.put(a, 2, 0, BLOCK.LANTERN));
  return (
    t
      ? (e.put(0, 1, o + 1, BLOCK.KITCHEN_COUNTER, 2),
        e.put(1, 1, o + 1, BLOCK.SINK, 2),
        e.put(2, 1, o + 1, BLOCK.KITCHEN_COUNTER, 2),
        e.put(2, 2, o + 1, BLOCK.POTTED_PLANT),
        e.put(-5, 1, -6, BLOCK.SOFA, 1),
        e.put(-5, 1, -5, BLOCK.SOFA, 1))
      : (e.put(1, 1, o + 1, BLOCK.KITCHEN_COUNTER, 2),
        e.put(2, 1, o + 1, BLOCK.SINK, 2)),
    i && (e.put(0, 1, -9, BLOCK.CHEST), e.bed(-1, 1, -8)),
    e
  );
}
function Ew(n) {
  const e = new In();
  if (n) {
    e.room(-5, -5, -15, 5, 5, -7, BLOCK.RSTONE, BLOCK.RSTONE);
    for (let t = 0; t <= 5; t++) {
      const i = -Math.min(t, 4),
        s = -t;
      (e.fill(-2, i - 1, s, 2, Math.max(i + 3, 1), s, BLOCK.RSTONE),
        e.fill(-1, i, s, 1, Math.max(i + 2, 2), s, BLOCK.AIR),
        e.fill(-1, i - 1, s, 1, i - 1, s, BLOCK.STAIR_RSTONE, 2));
    }
    (e.fill(-2, 3, -5, 2, 3, 0, BLOCK.RSTONE),
      e.fill(-2, -5, -7, 2, 0, -6, BLOCK.RSTONE),
      e.fill(-1, -4, -7, 1, -2, -6, BLOCK.AIR),
      e.fill(-2, 0, -15, 2, 0, -11, BLOCK.RSTONE),
      e.put(0, 1, -13, BLOCK.LANTERN),
      e.bed(-3, -4, -10),
      e.bed(-1, -4, -10),
      e.put(3, -4, -13, BLOCK.MILITARY_CHEST),
      e.put(2, -4, -10, BLOCK.MAP_TABLE),
      e.put(3, -4, -10, BLOCK.WOOD_CHAIR, 3),
      e.put(0, -1, -11, BLOCK.LANTERN));
    for (const t of [-1, 1]) e.fill(t, -4, -7, t, -2, -7, BLOCK.RSTONE);
    (e.door(0, -4, -7, BLOCK.ARMORED_DOOR),
      e.put(-3, -4, -13, BLOCK.BARREL),
      e.put(0, -2, -6, BLOCK.LANTERN, 5));
  } else {
    (e.fill(-6, 0, -12, 6, 0, 0, BLOCK.RSTONE),
      e.room(-5, 0, -11, 5, 4, -2, BLOCK.RSTONE, BLOCK.RSTONE),
      e.fill(-5, 4, -11, 5, 5, -2, BLOCK.RSTONE),
      e.door(0, 1, -2, BLOCK.ARMORED_DOOR),
      e.put(0, 0, 0, BLOCK.STAIR_RSTONE),
      e.fill(-2, 3, -1, 2, 3, 0, BLOCK.RSTONE),
      e.fill(-2, 1, -1, -2, 2, 0, BLOCK.RSTONE),
      e.fill(2, 1, -1, 2, 2, 0, BLOCK.RSTONE));
    for (const t of [-3, 3]) e.fill(t, 2, -2, t, 2, -2, BLOCK.RGLASS);
    for (const t of [-5, 5]) e.fill(t, 2, -8, t, 2, -5, BLOCK.RGLASS);
    (e.bed(-3, 1, -7),
      e.put(-3, 1, -10, BLOCK.MILITARY_CHEST),
      e.put(3, 1, -10, BLOCK.BARREL),
      e.put(2, 1, -7, BLOCK.MAP_TABLE),
      e.put(3, 1, -7, BLOCK.WOOD_CHAIR, 3),
      e.put(0, 3, -6, BLOCK.LANTERN),
      e.fill(-4, 6, -10, 4, 6, -10, BLOCK.RSTONE),
      e.put(-4, 6, -3, BLOCK.LANTERN),
      e.put(4, 6, -3, BLOCK.LANTERN));
  }
  return e;
}
function CF() {
  const n = new In();
  (n.fill(-8, 0, -16, 8, 0, 0, BLOCK.POLISHED_STONE),
    n.fill(-8, 1, -16, 8, 8, 0, BLOCK.AIR));
  for (let e = -8; e <= 8; e++)
    for (let t = -16; t <= 0; t++)
      (Math.abs(e) === 8 || t === -16 || t === 0) &&
        n.put(e, 0, t, (e + t) % 2 === 0 ? BLOCK.SANDSTONE_SMOOTH : BLOCK.RSTONE);
  for (let e = -6; e <= 6; e++)
    for (let t = -14; t <= -2; t++) {
      const i = Math.hypot(e, t + 8);
      i > 5 && i < 6.2 && n.put(e, 0, t, BLOCK.SANDSTONE_SMOOTH);
    }
  (n.fill(-2, 0, -11, -2, 0, -5, BLOCK.SANDSTONE_SMOOTH),
    n.fill(2, 0, -11, 2, 0, -5, BLOCK.SANDSTONE_SMOOTH),
    n.fill(-2, 0, -8, 2, 0, -8, BLOCK.SANDSTONE_SMOOTH));
  for (const e of [-7, 7])
    for (const t of [-15, -1]) n.put(e, 0, t, BLOCK.RGLOWSTONE);
  for (const e of [-8, 8])
    for (const t of [-16, 0]) n.put(e, 1, t, BLOCK.AVIATION_LIGHT);
  return (n.put(0, 0, 0, BLOCK.STAIR_STONE), n);
}
function kF() {
  const n = new In();
  ((n.foundation = BLOCK.RSTONE),
    n.fill(-11, 0, -27, 11, 10, 0, BLOCK.RSTONE),
    n.fill(-9, 1, -25, 9, 8, -4, BLOCK.AIR),
    n.fill(-7, 10, -21, 7, 16, -7, BLOCK.AIR),
    n.fill(-1, 1, -3, 1, 3, 0, BLOCK.AIR),
    n.door(0, 1, -3, BLOCK.ARMORED_DOOR));
  for (const e of [-1, 1]) n.fill(e, 1, -3, e, 2, -3, BLOCK.RSTONE);
  for (const e of [-2, 2]) n.fill(e, 0, -17, e, 0, -11, BLOCK.RGLOWSTONE);
  n.fill(-2, 0, -14, 2, 0, -14, BLOCK.RGLOWSTONE);
  for (const e of [-9, 9])
    for (const t of [-23, -14, -5]) n.put(e, 6, t, BLOCK.RGLOWSTONE);
  (n.put(-8, 1, -24, BLOCK.MILITARY_CHEST),
    n.put(8, 1, -24, BLOCK.BARREL),
    n.bed(8, 1, -5),
    n.put(-8, 1, -22, BLOCK.MAP_TABLE),
    n.put(-8, 1, -6, BLOCK.SIGN, 0),
    n.lift(6, -23, [1, 11]),
    (n.cells.get("-8,1,-6").text = `Helicopter hangar
[gate horizontal]
1,8,-15
15,8,-1`));
  for (const e of [-11, 11])
    for (const t of [-27, 0]) n.put(e, 11, t, BLOCK.AVIATION_LIGHT);
  return n;
}
function xT(n) {
  const e = new In(),
    t = n ? BLOCK.RSTONE : BLOCK.POLISHED_STONE,
    i = n ? BLOCK.RGLOWSTONE : BLOCK.SANDSTONE_SMOOTH;
  ((e.foundation = n ? BLOCK.RSTONE : BLOCK.STONE),
    e.fill(-8, 0, -95, 8, 0, 0, t),
    e.fill(-8, 1, -95, 8, 8, 0, BLOCK.AIR));
  for (const s of [-7, 7]) e.fill(s, 0, -94, s, 0, -1, i);
  for (let s = -87; s <= -8; s += 10) e.fill(0, 0, s, 0, 0, s + 4, i);
  for (const s of [-93, -5])
    for (const o of [-5, -3, -1, 1, 3, 5]) e.fill(o, 0, s, o, 0, s + 2, i);
  for (const s of [-8, 8])
    for (let o = -94; o < 0; o += 8)
      e.put(s, 0, o, n ? BLOCK.RGLOWSTONE : BLOCK.GLOWSTONE);
  for (const s of [0, -95])
    for (const o of [-6, -3, 3, 6]) e.put(o, 1, s, BLOCK.AVIATION_LIGHT);
  for (const s of [-8, 8])
    for (let o = -86; o <= -6; o += 16) e.put(s, 1, o, BLOCK.AVIATION_LIGHT);
  return e;
}
function TT(n) {
  const e = new In(),
    t = n ? BLOCK.RSTONE : BLOCK.STONE_BRICKS,
    i = n ? BLOCK.RSTONE : BLOCK.POLISHED_STONE,
    s = n ? BLOCK.RGLOWSTONE : BLOCK.GLOWSTONE,
    o = n ? 10 : 9;
  ((e.foundation = n ? BLOCK.RSTONE : BLOCK.STONE),
    e.fill(-12, 0, -29, 12, 0, 0, i),
    e.fill(-12, 1, -29, 12, o, -3, t),
    e.fill(-10, 1, -27, 10, 8, -4, BLOCK.AIR),
    e.fill(-12, 1, -2, 12, 8, 0, BLOCK.AIR),
    e.fill(-8, 1, -3, 8, 6, -3, t),
    e.sign(
      -10,
      1,
      -2,
      `Aircraft hangar
[Gate]
2,0,-1
18,5,-1`,
    ));
  for (const a of [-24, -16, -8]) {
    for (const r of [-10, 10]) (e.fill(r, 1, a, r, 7, a, t), e.put(r, 7, a, s));
    (e.fill(-10, 8, a, 10, 8, a, t), e.put(0, 8, a, s));
  }
  (e.door(10, 1, -3, n ? BLOCK.ARMORED_DOOR : BLOCK.METAL_DOOR),
    e.put(11, 3, -2, s),
    e.put(-9, 1, -26, BLOCK.MILITARY_CHEST),
    e.put(-8, 1, -26, BLOCK.BARREL),
    e.put(9, 1, -26, BLOCK.WOOD_TABLE),
    e.put(9, 2, -26, BLOCK.REMOTE_STATION));
  for (let a = -23; a <= 0; a += 5)
    e.put(0, 0, a, n ? BLOCK.RGLOWSTONE : BLOCK.SANDSTONE_SMOOTH);
  for (const a of [-9, 9]) e.put(a, 0, -1, s);
  return e;
}
function LF() {
  const n = new In();
  (n.fill(-8, 0, -9, 8, 0, 0, BLOCK.POLISHED_STONE),
    n.fill(-8, 1, -9, 8, 5, 0, BLOCK.AIR),
    n.room(-8, 0, -8, -3, 4, -3, BLOCK.STONE_BRICKS, BLOCK.POLISHED_STONE),
    n.door(-5, 1, -3, BLOCK.METAL_DOOR),
    n.window(-3, 2, -6, -3, -5, BLOCK.RGLASS),
    n.window(-7, 2, -3, -6, -3, BLOCK.RGLASS),
    n.put(-6, 1, -6, BLOCK.MAP_TABLE),
    n.put(-6, 1, -5, BLOCK.WOOD_CHAIR),
    n.put(-4, 1, -7, BLOCK.MILITARY_CHEST),
    n.put(-7, 3, -7, BLOCK.LANTERN));
  for (const e of [0, 6])
    (n.fill(e, 1, -5, e, 5, -5, BLOCK.RSTONE), n.put(e, 6, -5, BLOCK.LANTERN));
  return (
    n.fill(0, 5, -5, 6, 5, -5, BLOCK.RSTONE),
    n.fill(1, 1, -5, 5, 3, -5, BLOCK.RSTONE),
    n.sign(
      0,
      1,
      -3,
      `Checkpoint
[gate]
1,0,-2
5,2,-2`,
    ),
    n.fill(7, 1, -5, 8, 2, -5, BLOCK.RSTONE),
    n.fill(7, 3, -5, 8, 3, -5, BLOCK.BARBED_WIRE),
    n.put(3, 0, 0, BLOCK.STAIR_STONE),
    n
  );
}
function IF() {
  const n = new In();
  (n.fill(-6, 0, -16, 6, 0, 0, BLOCK.COBBLE),
    n.room(-5, 0, -15, 5, 5, -2, BLOCK.BRICK, BLOCK.PLANKS),
    n.gable(6, -16, -1, 5, BLOCK.STONE_BRICKS),
    n.door(0, 1, -2, BLOCK.METAL_DOOR),
    n.put(0, 0, 0, BLOCK.STAIR_STONE),
    n.put(2, 5, -3, BLOCK.AIR));
  for (let e = 1; e <= 6; e++) n.put(2, e, -3, BLOCK.LADDER, 4);
  for (const e of [-7, -11]) n.put(-1, 6, e, BLOCK.MILITARY_CHEST);
  (n.put(1, 6, -9, BLOCK.BARREL),
    n.put(0, 10, -9, BLOCK.LANTERN, 5),
    n.put(0, 8, -16, BLOCK.RGLASS));
  for (const e of [-5, -9, -13]) {
    for (const t of [-5, 5]) n.window(t, 2, e, t, e);
    for (const t of [-3, 3])
      (n.bed(t, 1, e), n.put(t, 1, e + 1, BLOCK.MILITARY_CHEST));
  }
  return (
    n.put(0, 1, -12, BLOCK.MAP_TABLE),
    n.put(1, 1, -12, BLOCK.WOOD_CHAIR, 3),
    n.put(-1, 1, -12, BLOCK.WOOD_CHAIR, 1),
    n.put(0, 4, -5, BLOCK.LANTERN),
    n.put(0, 4, -11, BLOCK.LANTERN),
    n.put(-3, 1, -3, BLOCK.BARREL),
    n
  );
}
function PF() {
  const n = new In();
  (n.fill(-3, 0, -7, 3, 0, 0, BLOCK.STONE_BRICKS),
    n.fill(-3, 1, -7, 3, 12, 0, BLOCK.AIR));
  for (const e of [-2, 2])
    for (const t of [-6, -2]) n.fill(e, 1, t, e, 10, t, BLOCK.PINE_LOG);
  n.fill(-3, 7, -7, 3, 7, -1, BLOCK.PLANKS);
  for (const e of [-3, 3]) n.fill(e, 8, -7, e, 8, -1, BLOCK.FENCE_WOOD);
  for (const e of [-7, -1]) n.fill(-3, 8, e, 3, 8, e, BLOCK.FENCE_WOOD);
  return (
    n.fill(-3, 11, -7, 3, 11, -1, BLOCK.PINE_LOG),
    n.fill(-2, 12, -6, 2, 12, -2, BLOCK.PLANKS),
    n.put(1, 6, -5, BLOCK.LANTERN, 5),
    n.fill(-1, 7, -3, -1, 7, -3, BLOCK.AIR),
    n.fill(-2, 1, -3, -2, 7, -3, BLOCK.PINE_LOG),
    n.fill(-1, 1, -3, -1, 7, -3, BLOCK.LADDER, 1),
    n.put(1, 8, -5, BLOCK.MILITARY_CHEST),
    n.put(0, 10, -4, BLOCK.LANTERN),
    n.put(0, 0, 0, BLOCK.STAIR_WOOD),
    n
  );
}
function OF() {
  const n = new In();
  (n.fill(-5, 0, -13, 5, 0, 0, BLOCK.STONE_BRICKS),
    n.room(-4, 0, -12, 4, 5, -2, BLOCK.GLASS, BLOCK.PLANKS));
  for (const e of [-4, 4])
    for (const t of [-12, -7, -2]) n.fill(e, 1, t, e, 5, t, BLOCK.PINE_LOG);
  (n.fill(-4, 1, -12, 4, 1, -12, BLOCK.STONE_BRICKS),
    n.fill(-4, 1, -2, 4, 1, -2, BLOCK.STONE_BRICKS),
    n.door(0, 1, -2),
    n.put(0, 0, 0, BLOCK.STAIR_WOOD));
  for (const e of [-3, -2, 2, 3]) n.fill(e, 0, -10, e, 0, -4, BLOCK.FARMLAND);
  for (const e of [-1, 1]) n.fill(e, 0, -10, e, 0, -4, BLOCK.WATER);
  for (const e of [-3, 3]) n.put(e, 1, -11, BLOCK.COMPOSTER);
  return (
    n.put(-2, 1, -3, BLOCK.CHEST),
    n.put(2, 1, -3, BLOCK.BARREL),
    n.put(0, 4, -5, BLOCK.LANTERN),
    n.put(0, 4, -9, BLOCK.LANTERN),
    n
  );
}
