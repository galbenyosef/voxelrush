// index-BeUlFSPp 18 — fill
// Lines 31284-31620 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function a$() {
  const s = new Fs(),
    e = 5,
    t = 2 * e,
    i = v.BRICK,
    n = qi("yellow");
  ((s.foundation = v.STONE), s.fill(-15, 0, -33, 15, 0, 1, v.POLISHED_STONE));
  for (let a = 0; a < 2; a++) {
    const r = a * e;
    (s.fill(-13, r, -21, 13, r, -1, v.POLISHED_STONE),
      a > 0 && s.fill(-12, r, -20, 12, r, -2, v.PLANKS));
    for (const [l, c, h, d] of [
      [-13, -21, 13, -21],
      [-13, -1, 13, -1],
      [-13, -21, -13, -1],
      [13, -21, 13, -1],
    ])
      s.fill(l, r + 1, c, h, r + e - 1, d, i);
    (s.fill(-13, r + e - 1, -21, 13, r + e - 1, -21, n),
      s.fill(-13, r + e - 1, -1, 13, r + e - 1, -1, n));
    for (const l of [-11, -7, -3, 3, 7, 10])
      for (const c of [-21, -1]) s.fill(l, r + 2, c, l + 1, r + 3, c, v.GLASS);
    (s.fill(-12, r + 1, -20, 12, r + e - 1, -2, v.AIR),
      s.fill(-12, r + 1, -13, 12, r + e - 1, -13, i),
      s.fill(-12, r + 1, -9, -3, r + e - 1, -9, i),
      s.fill(3, r + 1, -9, 12, r + e - 1, -9, i),
      s.fill(0, r + 1, -20, 0, r + e - 1, -14, i),
      s.fill(-3, r + 1, -8, -3, r + e - 1, -2, i),
      s.fill(3, r + 1, -8, 3, r + e - 1, -2, i));
    for (const l of [-6, 6]) s.fill(l, r + 1, -13, l + 1, r + 2, -13, v.AIR);
    for (const l of [-11, 10]) s.fill(l, r + 1, -9, l + 1, r + 2, -9, v.AIR);
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
      s.put(l, r + 4, c, v.LANTERN, 5);
  }
  const o = (a, r, l, c, h) => {
    s.fill(h[0], a + 2, l, h[1], a + 3, l, qi("green"));
    const d = (h[0] + h[1]) >> 1;
    (s.put(d, a + 1, l + c, v.WOOD_TABLE),
      s.put(d, a + 1, l + 2 * c, v.WOOD_CHAIR, c > 0 ? 0 : 2));
    for (const u of [3, 5])
      for (const f of r)
        (s.put(f, a + 1, l + u * c, v.WOOD_TABLE),
          s.put(f, a + 1, l + (u + 1) * c, v.WOOD_CHAIR, c > 0 ? 0 : 2));
  };
  for (const a of [0, e])
    (o(a, [-11, -9, -4, -2], -20, 1, [-11, -3]),
      o(a, [2, 4, 9, 11], -20, 1, [3, 11]));
  o(e, [-9, -7, -5], -2, -1, [-11, -5]);
  for (const a of [-9, -6])
    for (const r of [-6, -4])
      (s.put(a, 1, r, v.WOOD_TABLE), s.put(a + 1, 1, r, v.WOOD_TABLE));
  for (const a of [-9, -8, -6, -5]) s.put(a, 1, -7, v.WOOD_BENCH, 2);
  (s.put(-12, 1, -4, v.FURNACE, 1),
    s.put(-12, 1, -3, v.KITCHEN_COUNTER, 1),
    s.put(-12, 1, -2, v.SINK, 1));
  for (const a of [-4, -3]) s.put(12, 1, a, v.BOOKSHELF);
  (s.put(4, 1, -2, v.POTTED_PLANT),
    s.put(8, 1, -4, v.WOOD_TABLE),
    s.put(9, 1, -4, v.WOOD_CHAIR, 3));
  for (const a of [5, 7, 9, 11])
    s.fill(a, e + 1, -2, a, e + 2, -2, v.BOOKSHELF);
  for (const a of [5, 9]) s.put(a, e + 1, -5, v.WOOD_TABLE);
  for (const a of [5, 9]) s.put(a, e + 1, -6, v.WOOD_CHAIR, 0);
  (s.fill(-2, 1, -1, 1, 3, -1, v.GLASS),
    s.door(-1, 1, -1),
    s.door(0, 1, -1),
    s.fill(-3, 4, 0, 2, 4, 1, n),
    s.put(0, 3, 1, v.LANTERN, 5),
    s.door(13, 1, -11, v.DOOR, 1));
  for (const a of [0, e]) s.fill(-2, a + 1, -9, 2, a + 2, -9, v.AIR);
  (Id(s, -1, -3, 1, e, v.STONE_BRICKS),
    s.fill(-13, t, -21, 13, t, -1, v.STONE_BRICKS));
  for (const [a, r, l, c] of [
    [-13, -21, 13, -21],
    [-13, -1, 13, -1],
    [-13, -21, -13, -1],
    [13, -21, 13, -1],
  ])
    s.fill(a, t + 1, r, l, t + 1, c, v.FENCE_STONE_BRICKS);
  for (let a = -14; a <= 14; a++) s.put(a, 1, -33, v.FENCE_WOOD);
  for (let a = -32; a <= -22; a++)
    (s.put(-14, 1, a, v.FENCE_WOOD), s.put(14, 1, a, v.FENCE_WOOD));
  s.fill(-12, 0, -31, 12, 0, -23, v.GRASS);
  for (const a of [-12, 12])
    (s.fill(a, 1, -28, a, 2, -28, v.FENCE_WOOD),
      s.fill(a, 1, -26, a, 2, -26, v.FENCE_WOOD),
      s.fill(a, 3, -28, a, 3, -26, v.FENCE_WOOD));
  return (
    s.put(-4, 1, -22, v.WOOD_BENCH, 2),
    s.put(4, 1, -22, v.WOOD_BENCH, 2),
    s
  );
}
function r$() {
  const s = new Fs(),
    e = 6,
    t = 2 * e,
    i = qi("red"),
    n = qi("white");
  ((s.foundation = v.STONE), s.fill(-12, 0, -20, 12, 0, 1, v.POLISHED_STONE));
  for (const a of [0, e]) s.fill(-10, a, -18, 10, a, -1, v.POLISHED_STONE);
  for (let a = 0; a < 2; a++) {
    const r = a * e;
    for (const [l, c, h, d] of [
      [-10, -18, 10, -18],
      [-10, -1, 10, -1],
      [-10, -18, -10, -1],
      [10, -18, 10, -1],
    ])
      s.fill(l, r + 1, c, h, r + e - 1, d, i);
    (s.fill(-10, r + e - 1, -18, 10, r + e - 1, -18, n),
      s.fill(-10, r + e - 1, -1, 10, r + e - 1, -1, n),
      s.fill(-9, r + 1, -17, 9, r + e - 1, -2, v.AIR));
  }
  for (const [a, r] of [
    [-8, -9],
    [1, 9],
  ])
    (s.fill(a, 1, -1, a + 6, 4, -1, n),
      s.sign(
        r,
        1,
        0,
        `Gate
[Gate]
${a - r},0,-1
${a + 6 - r},3,-1`,
      ));
  s.fill(0, 1, -1, 0, 5, -1, i);
  for (let a = -8; a <= 8; a += 2) s.put(a, 1, -17, v.STORAGE_SHELF, 2);
  (s.put(-9, 1, -10, v.BARREL),
    s.put(-9, 1, -9, v.BARREL),
    s.put(-9, 1, -12, v.MILITARY_CHEST));
  for (const [a, r] of [
    [-5, -8],
    [5, -8],
    [-5, -14],
    [5, -14],
  ])
    s.put(a, 5, r, v.LANTERN, 5);
  s.door(-9, 1, -18, v.METAL_DOOR);
  const o = e;
  for (const a of [-8, -6, -4]) s.bed(a, o + 1, -16, 0);
  for (const a of [-8, -6, -4]) s.put(a, o + 1, -14, v.MILITARY_CHEST);
  (s.put(8, o + 1, -17, v.FURNACE, 2),
    s.put(7, o + 1, -17, v.KITCHEN_COUNTER, 2),
    s.put(6, o + 1, -17, v.SINK, 2),
    s.put(6, o + 1, -13, v.WOOD_TABLE),
    s.put(7, o + 1, -13, v.WOOD_TABLE));
  for (const a of [6, 7]) s.put(a, o + 1, -12, v.WOOD_CHAIR, 0);
  for (const a of [-8, -7]) s.put(a, o + 1, -3, v.SOFA, 2);
  s.put(-5, o + 1, -3, v.POTTED_PLANT);
  for (const a of [-8, -5, -2, 1, 4, 7])
    s.fill(a, o + 2, -1, a + 1, o + 3, -1, v.GLASS);
  for (const [a, r] of [
    [-5, -15],
    [6, -15],
    [0, -8],
    [-6, -4],
  ])
    s.put(a, o + e - 1, r, v.LANTERN, 5);
  (Id(s, 7, -8, 1, e, v.STONE_BRICKS),
    s.fill(-10, t, -18, 10, t, -1, v.STONE_BRICKS));
  for (let a = o + 1; a <= t; a++) s.put(-9, a, -8, v.LADDER, 1);
  for (const [a, r, l, c] of [
    [-10, -18, 10, -18],
    [-10, -1, 10, -1],
    [-10, -18, -10, -1],
    [10, -18, 10, -1],
  ])
    s.fill(a, t + 1, r, l, t + 1, c, v.FENCE_STONE_BRICKS);
  return (
    s.fill(7, t + 1, -18, 10, t + 8, -15, i),
    s.fill(8, t + 1, -17, 9, t + 7, -16, v.AIR),
    s.fill(8, t + 1, -15, 8, t + 2, -15, v.AIR),
    s.fill(7, t + 5, -17, 7, t + 6, -16, v.GLASS),
    s.fill(8, t + 8, -17, 9, t + 8, -16, n),
    s.put(8, t + 7, -16, v.LANTERN, 5),
    s
  );
}
function l$() {
  const s = new Fs(),
    e = 5,
    t = 2 * e,
    i = v.STONE_BRICKS,
    n = qi("blue");
  ((s.foundation = v.STONE), s.fill(-11, 0, -19, 11, 0, 1, v.POLISHED_STONE));
  for (let a = 0; a < 2; a++) {
    const r = a * e;
    s.fill(-9, r, -17, 9, r, -1, v.POLISHED_STONE);
    for (const [l, c, h, d] of [
      [-9, -17, 9, -17],
      [-9, -1, 9, -1],
      [-9, -17, -9, -1],
      [9, -17, 9, -1],
    ])
      s.fill(l, r + 1, c, h, r + e - 1, d, i);
    (s.fill(-9, r + e - 1, -17, 9, r + e - 1, -17, n),
      s.fill(-9, r + e - 1, -1, 9, r + e - 1, -1, n));
    for (const l of [-7, -4, 3, 6])
      for (const c of [-17, -1]) s.fill(l, r + 2, c, l + 1, r + 3, c, v.RGLASS);
    s.fill(-8, r + 1, -16, 8, r + e - 1, -2, v.AIR);
  }
  (s.fill(-9, t, -17, 9, t, -1, v.POLISHED_STONE),
    s.door(0, 1, -1, v.METAL_DOOR),
    s.fill(-2, 4, 0, 2, 4, 1, n),
    s.put(0, 3, 1, v.LANTERN, 5));
  for (const a of [-3, -2, -1]) s.put(a, 1, -5, v.WOOD_TABLE);
  (s.put(-2, 1, -6, v.WOOD_CHAIR, 2), s.put(-3, 2, -5, v.CANDLE));
  for (const a of [3, 4]) s.put(a, 1, -2, v.WOOD_BENCH, 2);
  s.fill(-8, 1, -12, 8, 4, -12, v.IRON_FENCE);
  for (const a of [-4, 2]) s.fill(a, 1, -16, a, 4, -13, v.IRON_FENCE);
  for (const a of [-6, 0, 6])
    (s.fill(a, 1, -12, a, 2, -12, v.AIR),
      s.door(a, 1, -12, v.METAL_DOOR, 2),
      s.bed(a - 1, 1, -15, 0),
      s.put(a + 1, 1, -16, v.SINK, 2));
  (s.fill(-8, 1, -8, -5, 4, -8, i),
    s.fill(-4, 1, -11, -4, 4, -8, i),
    s.door(-6, 1, -8, v.ARMORED_DOOR, 2));
  for (const a of [-11, -10]) s.put(-8, 1, a, v.MILITARY_CHEST);
  (s.put(-5, 1, -11, v.MILITARY_CHEST),
    s.put(7, 1, -6, v.WOOD_TABLE),
    s.put(7, 2, -6, v.REMOTE_STATION, 3),
    s.put(6, 1, -6, v.WOOD_CHAIR, 3));
  for (const [a, r] of [
    [-2, -9],
    [4, -4],
    [-6, -4],
    [-7, -14],
    [-1, -14],
    [5, -14],
  ])
    s.put(a, 4, r, v.LANTERN, 5);
  const o = e;
  (s.put(-2, o + 1, -10, v.MAP_TABLE), s.put(-1, o + 1, -10, v.MAP_TABLE));
  for (const a of [-2, -1]) s.put(a, o + 1, -9, v.WOOD_CHAIR, 0);
  for (const a of [-2, -1]) s.put(a, o + 1, -11, v.WOOD_CHAIR, 2);
  for (const a of [-7, -4]) s.put(a, o + 1, -15, v.WOOD_TABLE);
  for (const a of [-7, -4]) s.put(a, o + 1, -14, v.WOOD_CHAIR, 0);
  for (const a of [-15, -14]) s.put(8, o + 1, a, v.BOOKSHELF);
  s.put(-8, o + 1, -3, v.POTTED_PLANT);
  for (const [a, r] of [
    [-2, -13],
    [-5, -5],
    [5, -10],
  ])
    s.put(a, o + 4, r, v.LANTERN, 5);
  (Id(s, 4, -7, 2, e, n), A5(s, 3, 7, -10, -6, t + 1, v.IRON_FENCE));
  for (const [a, r, l, c] of [
    [-9, -17, 9, -17],
    [-9, -1, 9, -1],
    [-9, -17, -9, -1],
    [9, -17, 9, -1],
  ])
    s.fill(a, t + 1, r, l, t + 1, c, v.IRON_FENCE);
  return (
    s.fill(-6, t + 1, -14, -6, t + 7, -14, v.IRON_FENCE),
    s.put(-6, t + 8, -14, v.RGLOWSTONE),
    s
  );
}
function c$() {
  const s = new Fs(),
    e = 4,
    t = 3,
    i = (t - 1) * e,
    n = v.POLISHED_STONE,
    o = v.FENCE_STONE_BRICKS;
  ((s.foundation = v.STONE), s.fill(-13, 0, -34, 13, 0, 1, v.POLISHED_STONE));
  for (let a = 0; a < t; a++) {
    const r = a * e;
    if (
      (s.fill(-12, r, -32, 12, r, -1, n),
      a > 0 &&
        (s.fill(-12, r + 1, -32, 12, r + 1, -32, o),
        s.fill(-12, r + 1, -32, -12, r + 1, -1, o),
        s.fill(12, r + 1, -32, 12, r + 1, -1, o),
        s.fill(-12, r + 1, -1, 12, r + 1, -1, o)),
      a < t - 1)
    )
      for (const l of [-12, -4, 4, 12])
        for (const c of [-32, -24, -16, -8, -1])
          s.fill(l, r + 1, c, l, r + e - 1, c, v.STONE_BRICKS);
    for (let l = -30; l <= -4; l += 4)
      for (const c of [-11, -5, 5, 11]) s.put(c, r, l, qi("white"));
    if (a < t - 1)
      for (const [l, c] of [
        [-8, -12],
        [-8, -24],
        [0, -12],
        [0, -24],
        [8, -28],
      ])
        s.put(l, r + e - 1, c, v.LANTERN, 5);
  }
  for (let a = 0; a < t - 1; a++) {
    const r = a % 2 === 0,
      l = r ? 6 : -11,
      c = r ? 11 : -6,
      h = a * e;
    for (let p = 1; p <= e; p++) {
      const m = r ? -10 - 2 * p : -30 + 2 * p,
        g = m + (r ? 1 : -1) * 1,
        y = Math.min(m, g),
        b = Math.max(m, g);
      (s.fill(l, h + 1, y, c, h + p, b, n),
        p < e && s.fill(l, h + p + 1, y, c, h + e, b, v.AIR));
    }
    const d = r ? -10 : -30,
      u = r ? -16 : -24,
      f = r ? l - 1 : c + 1;
    (s.fill(f, h + e + 1, Math.min(d, u), f, h + e + 1, Math.max(d, u), o),
      s.fill(Math.min(f, l), h + e + 1, d, Math.max(f, c), h + e + 1, d, o));
  }
  for (const [a, r] of [
    [0, 0],
    [8, 0],
  ])
    s.put(a, 1, r, v.LANTERN);
  (s.fill(-12, 1, -4, -9, i + 3, -1, v.STONE_BRICKS),
    s.fill(-11, 1, -3, -10, i + 2, -2, v.AIR));
  for (let a = 0; a < t; a++)
    s.fill(-10, a * e + 1, -4, -10, a * e + 2, -4, v.AIR);
  for (let a = 1; a <= i + 1; a++) s.put(-11, a, -3, v.LADDER, 1);
  return (s.put(-10, i + 2, -2, v.LANTERN, 5), s);
}
