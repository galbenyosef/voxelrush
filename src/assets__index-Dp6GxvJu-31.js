// assets__index-Dp6GxvJu 31 — put
// Lines 37998-38258 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function CT(n) {
  const e = new In(),
    t = n === "hotel",
    i = t ? 8 : 10,
    s = 5,
    o = i * s,
    a = t ? v.SANDSTONE_SMOOTH : v.BRICK,
    r = t ? v.SANDSTONE_CHISELED : v.STONE_BRICKS,
    l = t ? Di("red") : v.PLANKS;
  ((e.foundation = v.STONE), e.fill(-11, 0, -22, 11, 0, 1, v.POLISHED_STONE));
  for (let c = 0; c < i; c++) {
    const h = c * s;
    (e.fill(-9, h, -20, 9, h, -1, v.POLISHED_STONE),
      c > 0 && e.fill(-8, h, -19, 8, h, -2, l));
    for (const [d, u, f, p] of [
      [-9, -20, 9, -20],
      [-9, -1, 9, -1],
      [-9, -20, -9, -1],
      [9, -20, 9, -1],
    ])
      e.fill(d, h + 1, u, f, h + s - 1, p, a);
    for (const d of [-9, 9])
      for (const u of [-20, -1]) e.fill(d, h + 1, u, d, h + s - 1, u, r);
    for (const d of [-7, -4, 3, 6])
      for (const u of [-20, -1]) e.fill(d, h + 2, u, d + 1, h + 3, u, v.GLASS);
    for (const d of [-18, -15, -6, -3])
      for (const u of [-9, 9]) e.fill(u, h + 2, d, u, h + 3, d + 1, v.GLASS);
    e.fill(-8, h + 1, -19, 8, h + s - 1, -2, v.AIR);
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
    const h = c * s;
    (e.fill(-2, h + 1, -19, -2, h + s - 1, -2, a),
      e.fill(-8, h + 1, -10, -3, h + s - 1, -10, a),
      e.fill(2, h + 1, -19, 2, h + s - 1, -13, a),
      e.fill(3, h + 1, -13, 8, h + s - 1, -13, a),
      e.fill(2, h + 1, -7, 2, h + s - 1, -2, a),
      e.fill(3, h + 1, -7, 8, h + s - 1, -7, a),
      e.door(-2, h + 1, -15, v.DOOR, 1),
      e.door(-2, h + 1, -6, v.DOOR, 1),
      e.door(2, h + 1, -16, v.DOOR, 1),
      e.door(2, h + 1, -4, v.DOOR, 1));
    for (const u of [-17, -5]) e.put(0, h + 4, u, v.LANTERN, 5);
    const d = (u, f, p, m, y, g, b) => {
      const S = u + ((p - u) >> 1);
      (e.bed(S, h + 1, g, b), (!t || c % 2) && e.bed(S + 1, h + 1, g, b));
      const M = Math.min(f, m) + 1,
        x = y < 0 ? 1 : 3;
      t
        ? (e.put(y, h + 1, M, v.WOOD_TABLE),
          e.put(y, h + 1, M + 1, v.POTTED_PLANT),
          e.put(y, h + 1, M + 2, v.BARREL))
        : (e.put(y, h + 1, M, v.KITCHEN_COUNTER, x),
          e.put(y, h + 1, M + 1, v.SINK, x),
          e.put(y, h + 1, M + 2, v.FURNACE, x));
      const T = y < 0 ? y + 3 : y - 3,
        A = M + 1;
      e.put(T, h + 1, A, v.WOOD_TABLE);
      const _ = [
        [0, 1, 0],
        [0, -1, 2],
        [1, 0, 3],
        [-1, 0, 1],
      ].find(([C, R]) => !e.cells.has(`${T + C},${h + 1},${A + R}`));
      (_ && e.put(T + _[0], h + 1, A + _[1], v.WOOD_CHAIR, _[2]),
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
  (_0(e, 5, -8, i, s, r),
    e.lift(2, -12, $S(i, s)),
    Ay(e, 4, 8, -11, -7, o + 1));
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
function UF() {
  const n = new In(),
    e = 12,
    t = 4,
    i = e * t;
  ((n.foundation = v.STONE), n.fill(-10, 0, -19, 10, 0, 1, v.POLISHED_STONE));
  for (let s = 0; s < e; s++) {
    const o = s * t;
    (n.fill(-8, o, -17, 8, o, -1, v.POLISHED_STONE),
      s > 0 && n.fill(-7, o, -16, 7, o, -2, Di("gray")));
    for (const [a, r, l, c] of [
      [-8, -17, 8, -17],
      [-8, -1, 8, -1],
      [-8, -17, -8, -1],
      [8, -17, 8, -1],
    ])
      n.fill(a, o + 1, r, l, o + t - 1, c, v.GLASS);
    for (const a of [-8, -4, 0, 4, 8])
      for (const r of [-17, -1])
        n.fill(a, o + 1, r, a, o + t - 1, r, v.POLISHED_STONE);
    for (const a of [-13, -9, -5])
      for (const r of [-8, 8])
        n.fill(r, o + 1, a, r, o + t - 1, a, v.POLISHED_STONE);
    n.fill(-7, o + 1, -16, 7, o + t - 1, -2, v.AIR);
  }
  (n.fill(-8, i, -17, 8, i, -1, v.POLISHED_STONE),
    n.door(-1, 1, -1, v.METAL_DOOR),
    n.door(1, 1, -1, v.METAL_DOOR),
    n.put(0, 1, -1, v.GLASS),
    n.put(0, 2, -1, v.GLASS),
    n.fill(-2, 3, 0, 2, 3, 1, v.POLISHED_STONE),
    n.put(0, 2, 1, v.LANTERN, 5),
    n.door(-3, 1, -17, v.METAL_DOOR));
  for (const s of [-4, -3, -2]) n.put(s, 1, -6, v.WOOD_TABLE);
  n.put(-3, 1, -7, v.WOOD_CHAIR, 2);
  for (const s of [-14, -13, -12]) n.put(-7, 1, s, v.SOFA, 1);
  n.put(-5, 1, -13, v.WOOD_TABLE);
  for (const [s, o] of [
    [-7, -2],
    [7, -2],
    [-7, -16],
    [2, -16],
  ])
    n.put(s, 1, o, v.POTTED_PLANT);
  for (let s = 1; s < e; s++) {
    const o = s * t;
    for (const a of [-15, -3])
      for (const r of [-6, -2])
        (n.put(r, o + 1, a, v.WOOD_TABLE),
          n.put(r + 1, o + 1, a, v.WOOD_TABLE),
          n.put(r, o + 1, a + (a < -8 ? 1 : -1), v.WOOD_CHAIR, a < -8 ? 2 : 0),
          n.put(
            r + 1,
            o + 1,
            a + (a < -8 ? 1 : -1),
            v.WOOD_CHAIR,
            a < -8 ? 2 : 0,
          ));
    if (s === e - 1) {
      (n.put(-5, o + 1, -9, v.MAP_TABLE),
        n.put(-4, o + 1, -9, v.MAP_TABLE),
        n.put(-5, o + 1, -8, v.WOOD_CHAIR, 0),
        n.put(-4, o + 1, -10, v.WOOD_CHAIR, 2),
        n.put(-7, o + 1, -9, v.WOOD_TABLE),
        n.put(-7, o + 2, -9, v.REMOTE_STATION, 1),
        n.put(-6, o + 1, -9, v.WOOD_CHAIR, 3));
      for (const a of [-12, -11]) n.put(-7, o + 1, a, v.SOFA, 1);
    } else {
      (n.put(-5, o + 1, -9, v.MAP_TABLE),
        n.put(-4, o + 1, -9, v.MAP_TABLE),
        n.put(-6, o + 1, -9, v.WOOD_CHAIR, 1),
        n.put(-3, o + 1, -9, v.WOOD_CHAIR, 3));
      for (const a of [-12, -11]) n.put(-7, o + 1, a, v.BOOKSHELF);
    }
    (n.put(7, o + 1, -16, v.POTTED_PLANT),
      n.put(-7, o + 1, -5, v.POTTED_PLANT));
    for (const [a, r] of [
      [-4, -14],
      [-4, -4],
      [-4, -9],
      [5, -14],
      [5, -4],
    ])
      n.put(a, o + 3, r, v.LANTERN, 5);
  }
  (_0(n, 4, -7, e, t, v.POLISHED_STONE),
    n.lift(0, -10, $S(e, t)),
    Ay(n, 3, 7, -10, -6, i + 1, v.IRON_FENCE));
  for (const [s, o, a, r] of [
    [-8, -17, 8, -17],
    [-8, -1, 8, -1],
    [-8, -17, -8, -1],
    [8, -17, 8, -1],
  ])
    n.fill(s, i + 1, o, a, i + 1, r, v.IRON_FENCE);
  (n.fill(-7, i, -14, -7, i, -4, Di("yellow")),
    n.fill(-1, i, -14, -1, i, -4, Di("yellow")),
    n.fill(-7, i, -14, -1, i, -14, Di("yellow")),
    n.fill(-7, i, -4, -1, i, -4, Di("yellow")),
    n.fill(-5, i, -12, -5, i, -6, Di("white")),
    n.fill(-3, i, -12, -3, i, -6, Di("white")),
    n.fill(-5, i, -9, -3, i, -9, Di("white")));
  for (const [s, o] of [
    [-7, -16],
    [-7, -2],
    [7, -16],
    [7, -2],
  ])
    n.put(s, i, o, v.RGLOWSTONE);
  (n.fill(6, i + 1, -15, 6, i + 3, -15, v.IRON_FENCE),
    n.put(6, i + 4, -15, v.AVIATION_LIGHT));
  for (const [s, o] of [
    [-7, -16],
    [-7, -2],
    [7, -16],
    [7, -2],
  ])
    n.put(s, i + 1, o, v.AVIATION_LIGHT);
  return n;
}
