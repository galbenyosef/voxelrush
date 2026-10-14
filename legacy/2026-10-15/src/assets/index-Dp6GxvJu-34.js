// index-Dp6GxvJu 34 — put
// Lines 38845-38987 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function KF() {
  const n = new In();
  ((n.foundation = BLOCK.STONE), n.fill(-10, 0, -20, 10, 0, 0, BLOCK.POLISHED_STONE));
  for (let e = -10; e <= 10; e++)
    for (let t = -20; t <= 0; t++)
      (e + t) % 4 === 0 && n.put(e, 0, t, BLOCK.SANDSTONE_SMOOTH);
  (n.fill(-3, 0, -13, 3, 0, -7, BLOCK.STONE_BRICKS),
    n.fill(-3, 1, -13, 3, 1, -7, BLOCK.STONE_BRICKS),
    n.fill(-2, 1, -12, 2, 1, -8, BLOCK.WATER),
    n.fill(0, 1, -10, 0, 3, -10, BLOCK.SANDSTONE_CHISELED),
    n.put(0, 4, -10, BLOCK.LANTERN));
  for (const [e, t] of [
    [-7, -17],
    [7, -17],
    [-7, -3],
    [7, -3],
  ]) {
    (n.fill(e - 1, 0, t - 1, e + 1, 0, t + 1, BLOCK.GRASS),
      n.fill(e, 1, t, e, 4, t, BLOCK.LOG),
      n.fill(e - 2, 4, t - 2, e + 2, 5, t + 2, BLOCK.LEAVES),
      n.fill(e - 1, 6, t - 1, e + 1, 6, t + 1, BLOCK.LEAVES),
      n.put(e, 4, t, BLOCK.LOG));
    for (const [i, s] of [
      [-1, -1],
      [1, 1],
    ])
      n.put(e + i, 1, t + s, BLOCK.FLOWER_RED);
    (n.put(e + 1, 1, t - 1, BLOCK.FLOWER_YELLOW),
      n.put(e - 1, 1, t + 1, BLOCK.FLOWER_BLUE));
  }
  for (const [e, t, i] of [
    [0, -15, 2],
    [0, -5, 0],
    [-5, -10, 1],
    [5, -10, 3],
  ])
    n.put(e, 1, t, BLOCK.WOOD_BENCH, i);
  for (const [e, t] of [
    [-10, -20],
    [10, -20],
    [-10, 0],
    [10, 0],
    [-4, -4],
    [4, -16],
  ])
    (n.fill(e, 1, t, e, 3, t, BLOCK.FENCE_STONE_BRICKS), n.put(e, 4, t, BLOCK.LANTERN));
  for (const [e, t] of [
    [-9, -10],
    [9, -10],
  ])
    n.put(e, 1, t, BLOCK.BARREL);
  return n;
}
function YF() {
  const n = new In();
  ((n.foundation = BLOCK.STONE), n.fill(-6, 0, -15, 6, 0, 0, Di("gray")));
  for (let e = -15; e <= 0; e++)
    ((e % 4) + 4) % 4 < 2 && n.put(0, 0, e, Di("white"));
  for (const e of [-1, 1]) {
    (n.fill(e * 4, 0, -15, e * 6, 0, 0, BLOCK.POLISHED_STONE),
      n.fill(e * 4, 0, -15, e * 4, 0, 0, BLOCK.STONE_BRICKS));
    for (const t of [-12, -4])
      (n.fill(e * 6, 1, t, e * 6, 4, t, BLOCK.FENCE_STONE_BRICKS),
        n.put(e * 6, 5, t, BLOCK.LANTERN));
    (n.put(e * 5, 0, -8, BLOCK.GRASS),
      n.put(e * 5, 1, -8, BLOCK.POTTED_PLANT),
      n.put(e * 6, 1, -1, BLOCK.BARREL));
  }
  return n;
}
function jF() {
  const n = new In();
  ((n.foundation = BLOCK.STONE), n.fill(-6, 0, -12, 6, 0, 0, Di("gray")));
  for (const [e, t, i, s] of [
    [-6, -12, -4, -10],
    [4, -12, 6, -10],
    [-6, -2, -4, 0],
    [4, -2, 6, 0],
  ])
    (n.fill(e, 0, t, i, 0, s, BLOCK.POLISHED_STONE),
      n.put((e + i) / 2, 1, (t + s) / 2, BLOCK.FENCE_STONE_BRICKS));
  for (const [e, t] of [
    [-5, -11],
    [5, -11],
    [-5, -1],
    [5, -1],
  ])
    (n.fill(e, 1, t, e, 4, t, BLOCK.FENCE_STONE_BRICKS), n.put(e, 5, t, BLOCK.LANTERN));
  for (let e = -3; e <= 3; e += 2)
    (n.put(e, 0, -12, Di("white")),
      n.put(e, 0, -11, Di("white")),
      n.put(e, 0, 0, Di("white")),
      n.put(e, 0, -1, Di("white")));
  for (let e = -9; e <= -3; e += 2)
    (n.put(-6, 0, e, Di("white")),
      n.put(-5, 0, e, Di("white")),
      n.put(6, 0, e, Di("white")),
      n.put(5, 0, e, Di("white")));
  return n;
}
function Pi(n, e, t, i, s, o, a, r) {
  const l = (f, p, m) => {
    var y;
    return (
      ((y = r.cells.get(`${f},${p},${m}`)) == null ? void 0 : y.id) ??
      (p < 0 ? BLOCK.STONE : BLOCK.AIR)
    );
  };
  for (const f of r.cells.values()) f.meta = _F(f.id, f.meta, f.x, f.y, f.z, l);
  for (const f of [...r.cells.values()]) {
    const p = AF(f.id, f.meta, f.x, f.y, f.z, l);
    if (p.length) {
      for (const m of p) r.put(m.x, m.y, m.z, BLOCK.CHAIN);
      f.meta = 5;
    }
  }
  RF(
    [...r.cells.values()].filter((f) => f.id === BLOCK.LADDER),
    l,
    (f, p, m, y, g) => r.put(f, p, m, y, g),
  );
  const c = [...r.cells.values()].sort(
      (f, p) => f.y - p.y || f.z - p.z || f.x - p.x,
    ),
    h = c.map((f) => f.x),
    d = c.map((f) => f.y),
    u = c.map((f) => f.z);
  return {
    id: n,
    key: e,
    label: `Чертёж: ${t}`,
    labelEn: `Blueprint: ${i}`,
    description: s,
    descriptionEn: o,
    color: a,
    foundation: r.foundation,
    blocks: c,
    width: Math.max(...h) - Math.min(...h) + 1,
    depth: Math.max(...u) - Math.min(...u) + 1,
    height: Math.max(...d) - Math.min(...d) + 1,
    minY: Math.min(...d),
  };
}
