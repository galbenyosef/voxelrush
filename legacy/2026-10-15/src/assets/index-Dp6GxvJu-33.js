// index-Dp6GxvJu 33 — fill
// Lines 38508-38844 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function WF() {
  const n = new In(),
    e = 5,
    t = 2 * e,
    i = BLOCK.BRICK,
    s = Di("yellow");
  ((n.foundation = BLOCK.STONE), n.fill(-15, 0, -33, 15, 0, 1, BLOCK.POLISHED_STONE));
  for (let a = 0; a < 2; a++) {
    const r = a * e;
    (n.fill(-13, r, -21, 13, r, -1, BLOCK.POLISHED_STONE),
      a > 0 && n.fill(-12, r, -20, 12, r, -2, BLOCK.PLANKS));
    for (const [l, c, h, d] of [
      [-13, -21, 13, -21],
      [-13, -1, 13, -1],
      [-13, -21, -13, -1],
      [13, -21, 13, -1],
    ])
      n.fill(l, r + 1, c, h, r + e - 1, d, i);
    (n.fill(-13, r + e - 1, -21, 13, r + e - 1, -21, s),
      n.fill(-13, r + e - 1, -1, 13, r + e - 1, -1, s));
    for (const l of [-11, -7, -3, 3, 7, 10])
      for (const c of [-21, -1]) n.fill(l, r + 2, c, l + 1, r + 3, c, BLOCK.GLASS);
    (n.fill(-12, r + 1, -20, 12, r + e - 1, -2, BLOCK.AIR),
      n.fill(-12, r + 1, -13, 12, r + e - 1, -13, i),
      n.fill(-12, r + 1, -9, -3, r + e - 1, -9, i),
      n.fill(3, r + 1, -9, 12, r + e - 1, -9, i),
      n.fill(0, r + 1, -20, 0, r + e - 1, -14, i),
      n.fill(-3, r + 1, -8, -3, r + e - 1, -2, i),
      n.fill(3, r + 1, -8, 3, r + e - 1, -2, i));
    for (const l of [-6, 6]) n.fill(l, r + 1, -13, l + 1, r + 2, -13, BLOCK.AIR);
    for (const l of [-11, 10]) n.fill(l, r + 1, -9, l + 1, r + 2, -9, BLOCK.AIR);
    for (const [l, c] of [
      [-7, -11],
      [7, -11],
      [0, -11],
      [-6, -17],
      [6, -17],
      [-8, -5],
      [8, -5],
      [-1, -5],
    ])
      n.put(l, r + 4, c, BLOCK.LANTERN, 5);
  }
  const o = (a, r, l, c, h) => {
    n.fill(h[0], a + 2, l, h[1], a + 3, l, Di("green"));
    const d = (h[0] + h[1]) >> 1;
    (n.put(d, a + 1, l + c, BLOCK.WOOD_TABLE),
      n.put(d, a + 1, l + 2 * c, BLOCK.WOOD_CHAIR, c > 0 ? 0 : 2));
    for (const u of [3, 5])
      for (const f of r)
        (n.put(f, a + 1, l + u * c, BLOCK.WOOD_TABLE),
          n.put(f, a + 1, l + (u + 1) * c, BLOCK.WOOD_CHAIR, c > 0 ? 0 : 2));
  };
  for (const a of [0, e])
    (o(a, [-11, -9, -4, -2], -20, 1, [-11, -3]),
      o(a, [2, 4, 9, 11], -20, 1, [3, 11]));
  o(e, [-9, -7, -5], -2, -1, [-11, -5]);
  for (const a of [-9, -6])
    for (const r of [-6, -4])
      (n.put(a, 1, r, BLOCK.WOOD_TABLE), n.put(a + 1, 1, r, BLOCK.WOOD_TABLE));
  for (const a of [-9, -8, -6, -5]) n.put(a, 1, -7, BLOCK.WOOD_BENCH, 2);
  (n.put(-12, 1, -4, BLOCK.FURNACE, 1),
    n.put(-12, 1, -3, BLOCK.KITCHEN_COUNTER, 1),
    n.put(-12, 1, -2, BLOCK.SINK, 1));
  for (const a of [-4, -3]) n.put(12, 1, a, BLOCK.BOOKSHELF);
  (n.put(4, 1, -2, BLOCK.POTTED_PLANT),
    n.put(8, 1, -4, BLOCK.WOOD_TABLE),
    n.put(9, 1, -4, BLOCK.WOOD_CHAIR, 3));
  for (const a of [5, 7, 9, 11])
    n.fill(a, e + 1, -2, a, e + 2, -2, BLOCK.BOOKSHELF);
  for (const a of [5, 9]) n.put(a, e + 1, -5, BLOCK.WOOD_TABLE);
  for (const a of [5, 9]) n.put(a, e + 1, -6, BLOCK.WOOD_CHAIR, 0);
  (n.fill(-2, 1, -1, 1, 3, -1, BLOCK.GLASS),
    n.door(-1, 1, -1),
    n.door(0, 1, -1),
    n.fill(-3, 4, 0, 2, 4, 1, s),
    n.put(0, 3, 1, BLOCK.LANTERN, 5),
    n.door(13, 1, -11, BLOCK.DOOR, 1));
  for (const a of [0, e]) n.fill(-2, a + 1, -9, 2, a + 2, -9, BLOCK.AIR);
  (_0(n, -1, -3, 1, e, BLOCK.STONE_BRICKS),
    n.fill(-13, t, -21, 13, t, -1, BLOCK.STONE_BRICKS));
  for (const [a, r, l, c] of [
    [-13, -21, 13, -21],
    [-13, -1, 13, -1],
    [-13, -21, -13, -1],
    [13, -21, 13, -1],
  ])
    n.fill(a, t + 1, r, l, t + 1, c, BLOCK.FENCE_STONE_BRICKS);
  for (let a = -14; a <= 14; a++) n.put(a, 1, -33, BLOCK.FENCE_WOOD);
  for (let a = -32; a <= -22; a++)
    (n.put(-14, 1, a, BLOCK.FENCE_WOOD), n.put(14, 1, a, BLOCK.FENCE_WOOD));
  n.fill(-12, 0, -31, 12, 0, -23, BLOCK.GRASS);
  for (const a of [-12, 12])
    (n.fill(a, 1, -28, a, 2, -28, BLOCK.FENCE_WOOD),
      n.fill(a, 1, -26, a, 2, -26, BLOCK.FENCE_WOOD),
      n.fill(a, 3, -28, a, 3, -26, BLOCK.FENCE_WOOD));
  return (
    n.put(-4, 1, -22, BLOCK.WOOD_BENCH, 2),
    n.put(4, 1, -22, BLOCK.WOOD_BENCH, 2),
    n
  );
}
function VF() {
  const n = new In(),
    e = 6,
    t = 2 * e,
    i = Di("red"),
    s = Di("white");
  ((n.foundation = BLOCK.STONE), n.fill(-12, 0, -20, 12, 0, 1, BLOCK.POLISHED_STONE));
  for (const a of [0, e]) n.fill(-10, a, -18, 10, a, -1, BLOCK.POLISHED_STONE);
  for (let a = 0; a < 2; a++) {
    const r = a * e;
    for (const [l, c, h, d] of [
      [-10, -18, 10, -18],
      [-10, -1, 10, -1],
      [-10, -18, -10, -1],
      [10, -18, 10, -1],
    ])
      n.fill(l, r + 1, c, h, r + e - 1, d, i);
    (n.fill(-10, r + e - 1, -18, 10, r + e - 1, -18, s),
      n.fill(-10, r + e - 1, -1, 10, r + e - 1, -1, s),
      n.fill(-9, r + 1, -17, 9, r + e - 1, -2, BLOCK.AIR));
  }
  for (const [a, r] of [
    [-8, -9],
    [1, 9],
  ])
    (n.fill(a, 1, -1, a + 6, 4, -1, s),
      n.sign(
        r,
        1,
        0,
        `Gate
[Gate]
${a - r},0,-1
${a + 6 - r},3,-1`,
      ));
  n.fill(0, 1, -1, 0, 5, -1, i);
  for (let a = -8; a <= 8; a += 2) n.put(a, 1, -17, BLOCK.STORAGE_SHELF, 2);
  (n.put(-9, 1, -10, BLOCK.BARREL),
    n.put(-9, 1, -9, BLOCK.BARREL),
    n.put(-9, 1, -12, BLOCK.MILITARY_CHEST));
  for (const [a, r] of [
    [-5, -8],
    [5, -8],
    [-5, -14],
    [5, -14],
  ])
    n.put(a, 5, r, BLOCK.LANTERN, 5);
  n.door(-9, 1, -18, BLOCK.METAL_DOOR);
  const o = e;
  for (const a of [-8, -6, -4]) n.bed(a, o + 1, -16, 0);
  for (const a of [-8, -6, -4]) n.put(a, o + 1, -14, BLOCK.MILITARY_CHEST);
  (n.put(8, o + 1, -17, BLOCK.FURNACE, 2),
    n.put(7, o + 1, -17, BLOCK.KITCHEN_COUNTER, 2),
    n.put(6, o + 1, -17, BLOCK.SINK, 2),
    n.put(6, o + 1, -13, BLOCK.WOOD_TABLE),
    n.put(7, o + 1, -13, BLOCK.WOOD_TABLE));
  for (const a of [6, 7]) n.put(a, o + 1, -12, BLOCK.WOOD_CHAIR, 0);
  for (const a of [-8, -7]) n.put(a, o + 1, -3, BLOCK.SOFA, 2);
  n.put(-5, o + 1, -3, BLOCK.POTTED_PLANT);
  for (const a of [-8, -5, -2, 1, 4, 7])
    n.fill(a, o + 2, -1, a + 1, o + 3, -1, BLOCK.GLASS);
  for (const [a, r] of [
    [-5, -15],
    [6, -15],
    [0, -8],
    [-6, -4],
  ])
    n.put(a, o + e - 1, r, BLOCK.LANTERN, 5);
  (_0(n, 7, -8, 1, e, BLOCK.STONE_BRICKS),
    n.fill(-10, t, -18, 10, t, -1, BLOCK.STONE_BRICKS));
  for (let a = o + 1; a <= t; a++) n.put(-9, a, -8, BLOCK.LADDER, 1);
  for (const [a, r, l, c] of [
    [-10, -18, 10, -18],
    [-10, -1, 10, -1],
    [-10, -18, -10, -1],
    [10, -18, 10, -1],
  ])
    n.fill(a, t + 1, r, l, t + 1, c, BLOCK.FENCE_STONE_BRICKS);
  return (
    n.fill(7, t + 1, -18, 10, t + 8, -15, i),
    n.fill(8, t + 1, -17, 9, t + 7, -16, BLOCK.AIR),
    n.fill(8, t + 1, -15, 8, t + 2, -15, BLOCK.AIR),
    n.fill(7, t + 5, -17, 7, t + 6, -16, BLOCK.GLASS),
    n.fill(8, t + 8, -17, 9, t + 8, -16, s),
    n.put(8, t + 7, -16, BLOCK.LANTERN, 5),
    n
  );
}
function $F() {
  const n = new In(),
    e = 5,
    t = 2 * e,
    i = BLOCK.STONE_BRICKS,
    s = Di("blue");
  ((n.foundation = BLOCK.STONE), n.fill(-11, 0, -19, 11, 0, 1, BLOCK.POLISHED_STONE));
  for (let a = 0; a < 2; a++) {
    const r = a * e;
    n.fill(-9, r, -17, 9, r, -1, BLOCK.POLISHED_STONE);
    for (const [l, c, h, d] of [
      [-9, -17, 9, -17],
      [-9, -1, 9, -1],
      [-9, -17, -9, -1],
      [9, -17, 9, -1],
    ])
      n.fill(l, r + 1, c, h, r + e - 1, d, i);
    (n.fill(-9, r + e - 1, -17, 9, r + e - 1, -17, s),
      n.fill(-9, r + e - 1, -1, 9, r + e - 1, -1, s));
    for (const l of [-7, -4, 3, 6])
      for (const c of [-17, -1]) n.fill(l, r + 2, c, l + 1, r + 3, c, BLOCK.RGLASS);
    n.fill(-8, r + 1, -16, 8, r + e - 1, -2, BLOCK.AIR);
  }
  (n.fill(-9, t, -17, 9, t, -1, BLOCK.POLISHED_STONE),
    n.door(0, 1, -1, BLOCK.METAL_DOOR),
    n.fill(-2, 4, 0, 2, 4, 1, s),
    n.put(0, 3, 1, BLOCK.LANTERN, 5));
  for (const a of [-3, -2, -1]) n.put(a, 1, -5, BLOCK.WOOD_TABLE);
  (n.put(-2, 1, -6, BLOCK.WOOD_CHAIR, 2), n.put(-3, 2, -5, BLOCK.CANDLE));
  for (const a of [3, 4]) n.put(a, 1, -2, BLOCK.WOOD_BENCH, 2);
  n.fill(-8, 1, -12, 8, 4, -12, BLOCK.IRON_FENCE);
  for (const a of [-4, 2]) n.fill(a, 1, -16, a, 4, -13, BLOCK.IRON_FENCE);
  for (const a of [-6, 0, 6])
    (n.fill(a, 1, -12, a, 2, -12, BLOCK.AIR),
      n.door(a, 1, -12, BLOCK.METAL_DOOR, 2),
      n.bed(a - 1, 1, -15, 0),
      n.put(a + 1, 1, -16, BLOCK.SINK, 2));
  (n.fill(-8, 1, -8, -5, 4, -8, i),
    n.fill(-4, 1, -11, -4, 4, -8, i),
    n.door(-6, 1, -8, BLOCK.ARMORED_DOOR, 2));
  for (const a of [-11, -10]) n.put(-8, 1, a, BLOCK.MILITARY_CHEST);
  (n.put(-5, 1, -11, BLOCK.MILITARY_CHEST),
    n.put(7, 1, -6, BLOCK.WOOD_TABLE),
    n.put(7, 2, -6, BLOCK.REMOTE_STATION, 3),
    n.put(6, 1, -6, BLOCK.WOOD_CHAIR, 3));
  for (const [a, r] of [
    [-2, -9],
    [4, -4],
    [-6, -4],
    [-7, -14],
    [-1, -14],
    [5, -14],
  ])
    n.put(a, 4, r, BLOCK.LANTERN, 5);
  const o = e;
  (n.put(-2, o + 1, -10, BLOCK.MAP_TABLE), n.put(-1, o + 1, -10, BLOCK.MAP_TABLE));
  for (const a of [-2, -1]) n.put(a, o + 1, -9, BLOCK.WOOD_CHAIR, 0);
  for (const a of [-2, -1]) n.put(a, o + 1, -11, BLOCK.WOOD_CHAIR, 2);
  for (const a of [-7, -4]) n.put(a, o + 1, -15, BLOCK.WOOD_TABLE);
  for (const a of [-7, -4]) n.put(a, o + 1, -14, BLOCK.WOOD_CHAIR, 0);
  for (const a of [-15, -14]) n.put(8, o + 1, a, BLOCK.BOOKSHELF);
  n.put(-8, o + 1, -3, BLOCK.POTTED_PLANT);
  for (const [a, r] of [
    [-2, -13],
    [-5, -5],
    [5, -10],
  ])
    n.put(a, o + 4, r, BLOCK.LANTERN, 5);
  (_0(n, 4, -7, 2, e, s), Ay(n, 3, 7, -10, -6, t + 1, BLOCK.IRON_FENCE));
  for (const [a, r, l, c] of [
    [-9, -17, 9, -17],
    [-9, -1, 9, -1],
    [-9, -17, -9, -1],
    [9, -17, 9, -1],
  ])
    n.fill(a, t + 1, r, l, t + 1, c, BLOCK.IRON_FENCE);
  return (
    n.fill(-6, t + 1, -14, -6, t + 7, -14, BLOCK.IRON_FENCE),
    n.put(-6, t + 8, -14, BLOCK.RGLOWSTONE),
    n
  );
}
function qF() {
  const n = new In(),
    e = 4,
    t = 3,
    i = (t - 1) * e,
    s = BLOCK.POLISHED_STONE,
    o = BLOCK.FENCE_STONE_BRICKS;
  ((n.foundation = BLOCK.STONE), n.fill(-13, 0, -34, 13, 0, 1, BLOCK.POLISHED_STONE));
  for (let a = 0; a < t; a++) {
    const r = a * e;
    if (
      (n.fill(-12, r, -32, 12, r, -1, s),
      a > 0 &&
        (n.fill(-12, r + 1, -32, 12, r + 1, -32, o),
        n.fill(-12, r + 1, -32, -12, r + 1, -1, o),
        n.fill(12, r + 1, -32, 12, r + 1, -1, o),
        n.fill(-12, r + 1, -1, 12, r + 1, -1, o)),
      a < t - 1)
    )
      for (const l of [-12, -4, 4, 12])
        for (const c of [-32, -24, -16, -8, -1])
          n.fill(l, r + 1, c, l, r + e - 1, c, BLOCK.STONE_BRICKS);
    for (let l = -30; l <= -4; l += 4)
      for (const c of [-11, -5, 5, 11]) n.put(c, r, l, Di("white"));
    if (a < t - 1)
      for (const [l, c] of [
        [-8, -12],
        [-8, -24],
        [0, -12],
        [0, -24],
        [8, -28],
      ])
        n.put(l, r + e - 1, c, BLOCK.LANTERN, 5);
  }
  for (let a = 0; a < t - 1; a++) {
    const r = a % 2 === 0,
      l = r ? 6 : -11,
      c = r ? 11 : -6,
      h = a * e;
    for (let p = 1; p <= e; p++) {
      const m = r ? -10 - 2 * p : -30 + 2 * p,
        y = m + (r ? 1 : -1) * 1,
        g = Math.min(m, y),
        b = Math.max(m, y);
      (n.fill(l, h + 1, g, c, h + p, b, s),
        p < e && n.fill(l, h + p + 1, g, c, h + e, b, BLOCK.AIR));
    }
    const d = r ? -10 : -30,
      u = r ? -16 : -24,
      f = r ? l - 1 : c + 1;
    (n.fill(f, h + e + 1, Math.min(d, u), f, h + e + 1, Math.max(d, u), o),
      n.fill(Math.min(f, l), h + e + 1, d, Math.max(f, c), h + e + 1, d, o));
  }
  for (const [a, r] of [
    [0, 0],
    [8, 0],
  ])
    n.put(a, 1, r, BLOCK.LANTERN);
  (n.fill(-12, 1, -4, -9, i + 3, -1, BLOCK.STONE_BRICKS),
    n.fill(-11, 1, -3, -10, i + 2, -2, BLOCK.AIR));
  for (let a = 0; a < t; a++)
    n.fill(-10, a * e + 1, -4, -10, a * e + 2, -4, BLOCK.AIR);
  for (let a = 1; a <= i + 1; a++) n.put(-11, a, -3, BLOCK.LADDER, 1);
  return (n.put(-10, i + 2, -2, BLOCK.LANTERN, 5), n);
}
