// index-BeUlFSPp 16 — put
// Lines 30774-31034 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function $x(s) {
  const e = new Fs(),
    t = s === "hotel",
    i = t ? 8 : 10,
    n = 5,
    o = i * n,
    a = t ? v.SANDSTONE_SMOOTH : v.BRICK,
    r = t ? v.SANDSTONE_CHISELED : v.STONE_BRICKS,
    l = t ? qi("red") : v.PLANKS;
  ((e.foundation = v.STONE), e.fill(-11, 0, -22, 11, 0, 1, v.POLISHED_STONE));
  for (let c = 0; c < i; c++) {
    const h = c * n;
    (e.fill(-9, h, -20, 9, h, -1, v.POLISHED_STONE),
      c > 0 && e.fill(-8, h, -19, 8, h, -2, l));
    for (const [d, u, f, p] of [
      [-9, -20, 9, -20],
      [-9, -1, 9, -1],
      [-9, -20, -9, -1],
      [9, -20, 9, -1],
    ])
      e.fill(d, h + 1, u, f, h + n - 1, p, a);
    for (const d of [-9, 9])
      for (const u of [-20, -1]) e.fill(d, h + 1, u, d, h + n - 1, u, r);
    for (const d of [-7, -4, 3, 6])
      for (const u of [-20, -1]) e.fill(d, h + 2, u, d + 1, h + 3, u, v.GLASS);
    for (const d of [-18, -15, -6, -3])
      for (const u of [-9, 9]) e.fill(u, h + 2, d, u, h + 3, d + 1, v.GLASS);
    e.fill(-8, h + 1, -19, 8, h + n - 1, -2, v.AIR);
  }
  (e.fill(-9, o, -20, 9, o, -1, v.POLISHED_STONE),
    e.fill(-2, 1, -1, 1, 3, -1, v.GLASS),
    e.door(-1, 1, -1),
    e.door(0, 1, -1),
    e.fill(-3, 4, 0, 2, 4, 1, v.DARK_PLANKS),
    e.put(-3, 3, 1, v.LANTERN, 5),
    e.put(2, 3, 1, v.LANTERN, 5),
    e.door(0, 1, -20));
  for (const c of [-6, -5, -4]) e.put(c, 1, -7, v.WOOD_TABLE);
  (e.put(-5, 1, -8, v.WOOD_CHAIR, 2), e.put(-4, 2, -7, v.LANTERN));
  for (let c = -5; c <= -3; c++) e.put(-8, 1, c, v.BARREL);
  for (const c of [-7, -6, -5]) e.put(c, 1, -17, v.SOFA, 2);
  e.put(-6, 1, -15, v.WOOD_TABLE);
  for (const [c, h] of [
    [-8, -19],
    [-8, -2],
    [8, -2],
    [1, -19],
  ])
    e.put(c, 1, h, v.POTTED_PLANT);
  for (const [c, h] of [
    [-5, -11],
    [0, -4],
    [0, -15],
    [6, -16],
    [6, -4],
  ])
    e.put(c, 4, h, v.LANTERN, 5);
  t &&
    (e.put(6, 1, -4, v.WOOD_TABLE),
    e.put(7, 1, -4, v.WOOD_CHAIR, 3),
    e.put(6, 1, -17, v.WOOD_TABLE),
    e.put(7, 1, -17, v.WOOD_CHAIR, 3),
    e.put(5, 1, -17, v.WOOD_CHAIR, 1));
  for (let c = 1; c < i; c++) {
    const h = c * n;
    (e.fill(-2, h + 1, -19, -2, h + n - 1, -2, a),
      e.fill(-8, h + 1, -10, -3, h + n - 1, -10, a),
      e.fill(2, h + 1, -19, 2, h + n - 1, -13, a),
      e.fill(3, h + 1, -13, 8, h + n - 1, -13, a),
      e.fill(2, h + 1, -7, 2, h + n - 1, -2, a),
      e.fill(3, h + 1, -7, 8, h + n - 1, -7, a),
      e.door(-2, h + 1, -15, v.DOOR, 1),
      e.door(-2, h + 1, -6, v.DOOR, 1),
      e.door(2, h + 1, -16, v.DOOR, 1),
      e.door(2, h + 1, -4, v.DOOR, 1));
    for (const u of [-17, -5]) e.put(0, h + 4, u, v.LANTERN, 5);
    const d = (u, f, p, m, g, y, b) => {
      const S = u + ((p - u) >> 1);
      (e.bed(S, h + 1, y, b), (!t || c % 2) && e.bed(S + 1, h + 1, y, b));
      const M = Math.min(f, m) + 1,
        E = g < 0 ? 1 : 3;
      t
        ? (e.put(g, h + 1, M, v.WOOD_TABLE),
          e.put(g, h + 1, M + 1, v.POTTED_PLANT),
          e.put(g, h + 1, M + 2, v.BARREL))
        : (e.put(g, h + 1, M, v.KITCHEN_COUNTER, E),
          e.put(g, h + 1, M + 1, v.SINK, E),
          e.put(g, h + 1, M + 2, v.FURNACE, E));
      const A = g < 0 ? g + 3 : g - 3,
        T = M + 1;
      e.put(A, h + 1, T, v.WOOD_TABLE);
      const x = [
        [0, 1, 0],
        [0, -1, 2],
        [1, 0, 3],
        [-1, 0, 1],
      ].find(([R, _]) => !e.cells.has(`${A + R},${h + 1},${T + _}`));
      (x && e.put(A + x[0], h + 1, T + x[1], v.WOOD_CHAIR, x[2]),
        e.put(S, h + 4, Math.round((f + m) / 2), v.LANTERN, 5));
    };
    (d(-8, -19, -3, -11, -8, -18, 0),
      e.put(-3, h + 1, -19, v.BOOKSHELF),
      e.put(-4, h + 1, -11, v.SOFA, 0),
      d(-8, -9, -3, -2, -8, -3, 2),
      e.put(-3, h + 1, -9, v.POTTED_PLANT),
      d(3, -19, 8, -14, 8, -18, 0),
      e.put(3, h + 1, -19, v.BOOKSHELF),
      d(3, -6, 8, -2, 8, -3, 2));
  }
  (Id(e, 5, -8, i, n, r),
    e.lift(2, -12, gA(i, n)),
    A5(e, 4, 8, -11, -7, o + 1));
  for (const [c, h, d, u] of [
    [-9, -20, 9, -20],
    [-9, -1, 9, -1],
    [-9, -20, -9, -1],
    [9, -20, 9, -1],
  ])
    e.fill(c, o + 1, h, d, o + 1, u, v.FENCE_STONE_BRICKS);
  if (t) {
    (e.fill(-7, o + 1, -18, -2, o + 1, -12, v.POLISHED_STONE),
      e.fill(-6, o + 1, -17, -3, o + 1, -13, v.WATER));
    for (const c of [-16, -14]) e.put(-1, o + 1, c, v.WOOD_BENCH, 1);
  } else {
    e.fill(-7, o + 1, -18, -3, o + 1, -16, v.GRASS);
    for (let c = -7; c <= -3; c++)
      e.put(c, o + 2, -17, c % 2 ? v.FLOWER_RED : v.FLOWER_YELLOW);
  }
  for (const c of [-6, -3]) e.put(c, o + 1, -6, v.WOOD_BENCH, 2);
  for (const [c, h] of [
    [-8, -10],
    [7, -3],
  ])
    (e.fill(c, o + 1, h, c, o + 3, h, v.FENCE_STONE_BRICKS),
      e.put(c, o + 4, h, v.LANTERN));
  (e.fill(6, o + 1, -18, 6, o + 8, -18, v.FENCE_STONE_BRICKS),
    e.put(6, o + 9, -18, v.AVIATION_LIGHT));
  for (const c of [-9, 9])
    for (const h of [-20, -1]) e.put(c, o + 2, h, v.AVIATION_LIGHT);
  return e;
}
function s$() {
  const s = new Fs(),
    e = 12,
    t = 4,
    i = e * t;
  ((s.foundation = v.STONE), s.fill(-10, 0, -19, 10, 0, 1, v.POLISHED_STONE));
  for (let n = 0; n < e; n++) {
    const o = n * t;
    (s.fill(-8, o, -17, 8, o, -1, v.POLISHED_STONE),
      n > 0 && s.fill(-7, o, -16, 7, o, -2, qi("gray")));
    for (const [a, r, l, c] of [
      [-8, -17, 8, -17],
      [-8, -1, 8, -1],
      [-8, -17, -8, -1],
      [8, -17, 8, -1],
    ])
      s.fill(a, o + 1, r, l, o + t - 1, c, v.GLASS);
    for (const a of [-8, -4, 0, 4, 8])
      for (const r of [-17, -1])
        s.fill(a, o + 1, r, a, o + t - 1, r, v.POLISHED_STONE);
    for (const a of [-13, -9, -5])
      for (const r of [-8, 8])
        s.fill(r, o + 1, a, r, o + t - 1, a, v.POLISHED_STONE);
    s.fill(-7, o + 1, -16, 7, o + t - 1, -2, v.AIR);
  }
  (s.fill(-8, i, -17, 8, i, -1, v.POLISHED_STONE),
    s.door(-1, 1, -1, v.METAL_DOOR),
    s.door(1, 1, -1, v.METAL_DOOR),
    s.put(0, 1, -1, v.GLASS),
    s.put(0, 2, -1, v.GLASS),
    s.fill(-2, 3, 0, 2, 3, 1, v.POLISHED_STONE),
    s.put(0, 2, 1, v.LANTERN, 5),
    s.door(-3, 1, -17, v.METAL_DOOR));
  for (const n of [-4, -3, -2]) s.put(n, 1, -6, v.WOOD_TABLE);
  s.put(-3, 1, -7, v.WOOD_CHAIR, 2);
  for (const n of [-14, -13, -12]) s.put(-7, 1, n, v.SOFA, 1);
  s.put(-5, 1, -13, v.WOOD_TABLE);
  for (const [n, o] of [
    [-7, -2],
    [7, -2],
    [-7, -16],
    [2, -16],
  ])
    s.put(n, 1, o, v.POTTED_PLANT);
  for (let n = 1; n < e; n++) {
    const o = n * t;
    for (const a of [-15, -3])
      for (const r of [-6, -2])
        (s.put(r, o + 1, a, v.WOOD_TABLE),
          s.put(r + 1, o + 1, a, v.WOOD_TABLE),
          s.put(r, o + 1, a + (a < -8 ? 1 : -1), v.WOOD_CHAIR, a < -8 ? 2 : 0),
          s.put(
            r + 1,
            o + 1,
            a + (a < -8 ? 1 : -1),
            v.WOOD_CHAIR,
            a < -8 ? 2 : 0,
          ));
    if (n === e - 1) {
      (s.put(-5, o + 1, -9, v.MAP_TABLE),
        s.put(-4, o + 1, -9, v.MAP_TABLE),
        s.put(-5, o + 1, -8, v.WOOD_CHAIR, 0),
        s.put(-4, o + 1, -10, v.WOOD_CHAIR, 2),
        s.put(-7, o + 1, -9, v.WOOD_TABLE),
        s.put(-7, o + 2, -9, v.REMOTE_STATION, 1),
        s.put(-6, o + 1, -9, v.WOOD_CHAIR, 3));
      for (const a of [-12, -11]) s.put(-7, o + 1, a, v.SOFA, 1);
    } else {
      (s.put(-5, o + 1, -9, v.MAP_TABLE),
        s.put(-4, o + 1, -9, v.MAP_TABLE),
        s.put(-6, o + 1, -9, v.WOOD_CHAIR, 1),
        s.put(-3, o + 1, -9, v.WOOD_CHAIR, 3));
      for (const a of [-12, -11]) s.put(-7, o + 1, a, v.BOOKSHELF);
    }
    (s.put(7, o + 1, -16, v.POTTED_PLANT),
      s.put(-7, o + 1, -5, v.POTTED_PLANT));
    for (const [a, r] of [
      [-4, -14],
      [-4, -4],
      [-4, -9],
      [5, -14],
      [5, -4],
    ])
      s.put(a, o + 3, r, v.LANTERN, 5);
  }
  (Id(s, 4, -7, e, t, v.POLISHED_STONE),
    s.lift(0, -10, gA(e, t)),
    A5(s, 3, 7, -10, -6, i + 1, v.IRON_FENCE));
  for (const [n, o, a, r] of [
    [-8, -17, 8, -17],
    [-8, -1, 8, -1],
    [-8, -17, -8, -1],
    [8, -17, 8, -1],
  ])
    s.fill(n, i + 1, o, a, i + 1, r, v.IRON_FENCE);
  (s.fill(-7, i, -14, -7, i, -4, qi("yellow")),
    s.fill(-1, i, -14, -1, i, -4, qi("yellow")),
    s.fill(-7, i, -14, -1, i, -14, qi("yellow")),
    s.fill(-7, i, -4, -1, i, -4, qi("yellow")),
    s.fill(-5, i, -12, -5, i, -6, qi("white")),
    s.fill(-3, i, -12, -3, i, -6, qi("white")),
    s.fill(-5, i, -9, -3, i, -9, qi("white")));
  for (const [n, o] of [
    [-7, -16],
    [-7, -2],
    [7, -16],
    [7, -2],
  ])
    s.put(n, i, o, v.RGLOWSTONE);
  (s.fill(6, i + 1, -15, 6, i + 3, -15, v.IRON_FENCE),
    s.put(6, i + 4, -15, v.AVIATION_LIGHT));
  for (const [n, o] of [
    [-7, -16],
    [-7, -2],
    [7, -16],
    [7, -2],
  ])
    s.put(n, i + 1, o, v.AVIATION_LIGHT);
  return s;
}
