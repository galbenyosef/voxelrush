// index-Dp6GxvJu 32 — fill
// Lines 38259-38507 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function FF() {
  const n = new In(),
    e = 6,
    t = 2 * e,
    i = Di("white"),
    s = v.POLISHED_STONE;
  ((n.foundation = v.STONE), n.fill(-16, 0, -26, 16, 0, 2, v.POLISHED_STONE));
  for (const a of [0, e])
    n.fill(-14, a, -24, 14, a, -1, a ? Di("lightgray") : v.POLISHED_STONE);
  for (let a = 0; a < 2; a++) {
    const r = a * e;
    for (const [l, c, h, d] of [
      [-14, -24, 14, -24],
      [-14, -1, 14, -1],
      [-14, -24, -14, -1],
      [14, -24, 14, -1],
    ])
      n.fill(l, r + 1, c, h, r + e - 1, d, i);
    for (const l of [-14, 14])
      for (const c of [-24, -1]) n.fill(l, r + 1, c, l, r + e - 1, c, s);
    n.fill(-13, r + 1, -23, 13, r + e - 1, -2, v.AIR);
    for (const l of [-1, 1]) {
      const c = l * 8,
        h = l * 13;
      n.fill(c, r + 1, -23, c, r + e - 1, -2, s);
      for (const d of [-16, -8])
        n.fill(Math.min(c, h), r + 1, d, Math.max(c, h), r + e - 1, d, i);
      for (const d of [-20, -12, -5])
        (n.fill(c, r + 1, d, c, r + 3, d + 1, v.AIR),
          n.fill(c, r + 2, d - 2, c, r + 3, d - 2, v.GLASS),
          n.fill(c, r + 2, d + 3, c, r + 3, d + 3, v.GLASS));
      for (const d of [-19, -11, -4]) n.put(l * 11, r + e - 1, d, v.LANTERN, 5);
    }
    for (const l of [-12, -10, 10, 12])
      n.fill(l, r + 2, -24, l, r + 4, -24, v.GLASS);
  }
  (n.fill(-4, e, -19, 4, e, -5, v.AIR),
    n.fill(-14, t, -24, 14, t, -1, s),
    n.fill(-4, t, -19, 4, t, -5, v.GLASS),
    n.fill(-5, e + 1, -19, -5, e + 1, -4, v.IRON_FENCE),
    n.fill(5, e + 1, -19, 5, e + 1, -4, v.IRON_FENCE),
    n.fill(-4, e + 1, -4, 4, e + 1, -4, v.IRON_FENCE),
    n.fill(-4, e + 1, -20, -2, e + 1, -20, v.IRON_FENCE),
    n.fill(2, e + 1, -20, 4, e + 1, -20, v.IRON_FENCE),
    _0(n, -1, -14, 1, e, v.POLISHED_STONE),
    n.fill(-3, 0, -12, 3, 0, -8, v.POLISHED_STONE),
    n.fill(-2, 0, -11, 2, 0, -9, v.WATER));
  for (const a of [-12, -8]) n.put(0, 1, a, v.WOOD_BENCH, a < -10 ? 2 : 0);
  for (const a of [-3, 3]) n.put(a, 1, -10, v.WOOD_BENCH, a < 0 ? 1 : 3);
  n.put(0, 9, -10, v.LANTERN, 5);
  for (const [a, r] of [
    [-7, -22],
    [7, -22],
    [-7, -2],
    [7, -2],
  ])
    n.put(a, 1, r, v.POTTED_PLANT);
  n.fill(-6, 1, -1, 6, 3, -1, v.GLASS);
  for (const a of [-2, -1, 1, 2]) n.door(a, 1, -1, v.DOOR, 2);
  n.put(0, 3, -1, i);
  for (let a = -7; a <= 7; a++)
    n.fill(a, 4, 0, a, 4, 1, a % 2 ? Di("red") : Di("white"));
  const o = (a, r, l, c) => {
    const h = [a * 9, a * 10, a * 11, a * 12];
    if (c === "grocer") {
      for (const d of h) n.put(d, l + 1, r - 2, v.BARREL);
      (n.put(a * 12, l + 1, r + 1, v.HAY_BALE),
        n.put(a * 12, l + 1, r + 2, v.COMPOSTER),
        n.put(a * 10, l + 1, r + 2, v.WOOD_TABLE));
    } else if (c === "cafe") {
      for (const d of [-2, 1])
        (n.put(a * 11, l + 1, r + d, v.WOOD_TABLE),
          n.put(a * 12, l + 1, r + d, v.WOOD_CHAIR, a < 0 ? 1 : 3));
      n.put(a * 12, l + 1, r + 3, v.KITCHEN_COUNTER, a < 0 ? 1 : 3);
    } else if (c === "fashion") {
      for (const d of [-2, 0, 2])
        n.put(
          a * 12,
          l + 1,
          r + d,
          [Di("red"), Di("blue"), Di("yellow")][d / 2 + 1],
        );
      n.put(a * 10, l + 1, r - 2, v.WOOD_TABLE);
    } else if (c === "electronics") {
      for (const d of [-2, 0]) n.put(a * 12, l + 1, r + d, v.WOOD_TABLE);
      (n.put(a * 12, l + 2, r - 2, v.REMOTE_STATION, a < 0 ? 1 : 3),
        n.put(a * 12, l + 1, r + 2, v.STORAGE_SHELF, a < 0 ? 1 : 3));
    } else if (c === "books") {
      for (const d of [-2, -1, 1, 2]) n.put(a * 12, l + 1, r + d, v.BOOKSHELF);
      (n.put(a * 10, l + 1, r, v.WOOD_TABLE),
        n.put(a * 10, l + 1, r + 1, v.WOOD_CHAIR, 0));
    } else if (c === "pharmacy") {
      for (const d of [-2, -1, 1])
        n.put(a * 12, l + 1, r + d, v.STORAGE_SHELF, a < 0 ? 1 : 3);
      (n.put(a * 10, l + 1, r - 2, v.CHEST),
        n.put(a * 13, l + 3, r + 2, Di("red")));
    } else if (c === "food") {
      for (const d of [-2, 2])
        (n.put(a * 11, l + 1, r + d, v.WOOD_TABLE),
          n.put(a * 12, l + 1, r + d, v.WOOD_CHAIR, a < 0 ? 1 : 3),
          n.put(a * 10, l + 1, r + d, v.WOOD_CHAIR, a < 0 ? 3 : 1));
      n.put(a * 12, l + 1, r, v.FURNACE, a < 0 ? 1 : 3);
    } else if (c === "cinema") {
      n.fill(a * 13, l + 2, r - 2, a * 13, l + 4, r + 3, Di("white"));
      for (const d of [10, 11])
        n.fill(
          a * d,
          l + 1,
          r - 1,
          a * d,
          l + 1,
          r + 2,
          v.WOOD_BENCH,
          a < 0 ? 1 : 3,
        );
    }
  };
  (o(-1, -20, 0, "grocer"),
    o(-1, -12, 0, "cafe"),
    o(-1, -5, 0, "fashion"),
    o(1, -20, 0, "electronics"),
    o(1, -12, 0, "books"),
    o(1, -5, 0, "pharmacy"),
    o(-1, -20, e, "food"),
    o(-1, -12, e, "food"),
    o(-1, -5, e, "fashion"),
    o(1, -20, e, "cinema"),
    o(1, -12, e, "books"),
    o(1, -5, e, "cafe"));
  for (const [a, r, l, c] of [
    [-14, -24, 14, -24],
    [-14, -1, 14, -1],
    [-14, -24, -14, -1],
    [14, -24, 14, -1],
  ])
    n.fill(a, t + 1, r, l, t + 1, c, v.FENCE_STONE_BRICKS);
  for (const a of [-11, 9])
    n.fill(a, t + 1, -21, a + 2, t + 2, -19, v.IRON_FENCE);
  return n;
}
function GF() {
  const n = new In(),
    e = 3,
    t = 5,
    i = e * t,
    s = Di("white"),
    o = Di("lightblue");
  ((n.foundation = v.STONE), n.fill(-13, 0, -21, 13, 0, 1, v.POLISHED_STONE));
  for (let a = 0; a < e; a++) {
    const r = a * t;
    (n.fill(-11, r, -19, 11, r, -1, v.POLISHED_STONE),
      a > 0 && n.fill(-10, r, -18, 10, r, -2, Di("white")));
    for (const [l, c, h, d] of [
      [-11, -19, 11, -19],
      [-11, -1, 11, -1],
      [-11, -19, -11, -1],
      [11, -19, 11, -1],
    ])
      n.fill(l, r + 1, c, h, r + t - 1, d, s);
    for (const l of [-11, 11])
      for (const c of [-19, -1]) n.fill(l, r + 1, c, l, r + t - 1, c, o);
    (n.fill(-11, r + t - 1, -19, 11, r + t - 1, -19, o),
      n.fill(-11, r + t - 1, -1, 11, r + t - 1, -1, o));
    for (const l of [-9, -6, 4, 7])
      for (const c of [-19, -1]) n.fill(l, r + 2, c, l + 1, r + 3, c, v.GLASS);
    for (const l of [-17, -13, -7, -4])
      for (const c of [-11, 11]) n.fill(c, r + 2, l, c, r + 3, l + 1, v.GLASS);
    n.fill(-10, r + 1, -18, 10, r + t - 1, -2, v.AIR);
  }
  (n.fill(-11, i, -19, 11, i, -1, v.POLISHED_STONE),
    n.fill(-2, 1, -1, 1, 3, -1, v.GLASS),
    n.door(-1, 1, -1),
    n.door(0, 1, -1),
    n.fill(-3, 4, 0, 2, 4, 2, o),
    n.put(-3, 3, 2, v.LANTERN, 5),
    n.put(2, 3, 2, v.LANTERN, 5),
    n.fill(-1, 6, -1, 0, 10, -1, Di("red")),
    n.fill(-3, 7, -1, 2, 8, -1, Di("red")),
    n.fill(-2, 6, -1, -2, 6, -1, s),
    n.fill(1, 6, -1, 1, 6, -1, s),
    n.door(0, 1, -19));
  for (let a = 0; a < e; a++) {
    const r = a * t;
    (n.fill(-2, r + 1, -18, -2, r + t - 1, -2, s),
      n.fill(-10, r + 1, -10, -3, r + t - 1, -10, s),
      n.fill(2, r + 1, -18, 2, r + t - 1, -14, s),
      n.fill(3, r + 1, -14, 10, r + t - 1, -14, s),
      n.fill(2, r + 1, -6, 2, r + t - 1, -2, s),
      n.fill(3, r + 1, -6, 10, r + t - 1, -6, s));
    for (const l of [-14, -5]) n.fill(-2, r + 1, l, -2, r + 2, l + 1, v.AIR);
    (n.fill(2, r + 1, -17, 2, r + 2, -16, v.AIR),
      n.fill(2, r + 1, -4, 2, r + 2, -3, v.AIR));
    for (const l of [-16, -4]) n.put(0, r + 4, l, v.LANTERN, 5);
    for (const [l, c] of [
      [-6, -15],
      [-6, -6],
      [6, -17],
      [6, -4],
    ])
      n.put(l, r + 4, c, v.LANTERN, 5);
    if (a === 0) {
      for (const l of [-6, -5, -4]) n.put(l, 1, -8, v.WOOD_TABLE);
      (n.put(-5, 1, -9, v.WOOD_CHAIR, 2), n.put(-4, 2, -8, v.CANDLE));
      for (const l of [-9, -8]) n.put(l, 1, -3, v.WOOD_BENCH, 2);
      n.put(-9, 1, -8, v.POTTED_PLANT);
      for (const l of [-18, -17, -16]) n.put(-10, 1, l, v.STORAGE_SHELF, 1);
      (n.put(-5, 1, -18, v.CHEST),
        n.put(-4, 1, -18, v.CHEST),
        n.bed(6, 1, -3, 2),
        n.put(9, 1, -5, v.SINK, 3),
        n.put(9, 1, -4, v.KITCHEN_COUNTER, 3));
    } else if (a === 1) {
      (n.bed(-6, r + 1, -16, 0),
        n.put(-8, r + 1, -17, v.MAP_TABLE),
        n.put(-4, r + 1, -17, v.SINK, 2),
        n.put(-9, r + 1, -12, v.STORAGE_SHELF, 1));
      for (const l of [-9, -7, -5]) n.bed(l, r + 1, -8, 2);
      for (const l of [5, 7, 9]) n.bed(l, r + 1, -3, 2);
      (n.put(9, r + 1, -18, v.CHEST), n.put(4, r + 1, -18, v.WOOD_TABLE));
    } else {
      for (const l of [-9, -7, -5]) n.bed(l, r + 1, -17, 0);
      for (const l of [-9, -7, -5]) n.bed(l, r + 1, -8, 2);
      for (const l of [5, 7, 9]) n.bed(l, r + 1, -3, 2);
      for (const l of [5, 7]) n.bed(l, r + 1, -17, 0);
      n.put(9, r + 1, -18, v.POTTED_PLANT);
    }
  }
  (_0(n, 6, -8, e, t, o),
    n.lift(2, -12, $S(e, t)),
    Ay(n, 5, 9, -11, -7, i + 1, v.IRON_FENCE));
  for (const [a, r, l, c] of [
    [-11, -19, 11, -19],
    [-11, -1, 11, -1],
    [-11, -19, -11, -1],
    [11, -19, 11, -1],
  ])
    n.fill(a, i + 1, r, l, i + 1, c, v.IRON_FENCE);
  (n.fill(-9, i, -15, -9, i, -5, Di("red")),
    n.fill(-3, i, -15, -3, i, -5, Di("red")),
    n.fill(-9, i, -10, -3, i, -10, Di("red")));
  for (const [a, r] of [
    [-10, -18],
    [-10, -2],
    [0, -18],
    [0, -2],
  ])
    (n.put(a, i, r, v.RGLOWSTONE), n.put(a, i + 1, r, v.AVIATION_LIGHT));
  return n;
}
