// index-BeUlFSPp 19 — put
// Lines 31621-31758 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function h$() {
  const s = new Fs();
  ((s.foundation = v.STONE), s.fill(-10, 0, -20, 10, 0, 0, v.POLISHED_STONE));
  for (let e = -10; e <= 10; e++)
    for (let t = -20; t <= 0; t++)
      (e + t) % 4 === 0 && s.put(e, 0, t, v.SANDSTONE_SMOOTH);
  (s.fill(-3, 0, -13, 3, 0, -7, v.STONE_BRICKS),
    s.fill(-3, 1, -13, 3, 1, -7, v.STONE_BRICKS),
    s.fill(-2, 1, -12, 2, 1, -8, v.WATER),
    s.fill(0, 1, -10, 0, 3, -10, v.SANDSTONE_CHISELED),
    s.put(0, 4, -10, v.LANTERN));
  for (const [e, t] of [
    [-7, -17],
    [7, -17],
    [-7, -3],
    [7, -3],
  ]) {
    (s.fill(e - 1, 0, t - 1, e + 1, 0, t + 1, v.GRASS),
      s.fill(e, 1, t, e, 4, t, v.LOG),
      s.fill(e - 2, 4, t - 2, e + 2, 5, t + 2, v.LEAVES),
      s.fill(e - 1, 6, t - 1, e + 1, 6, t + 1, v.LEAVES),
      s.put(e, 4, t, v.LOG));
    for (const [i, n] of [
      [-1, -1],
      [1, 1],
    ])
      s.put(e + i, 1, t + n, v.FLOWER_RED);
    (s.put(e + 1, 1, t - 1, v.FLOWER_YELLOW),
      s.put(e - 1, 1, t + 1, v.FLOWER_BLUE));
  }
  for (const [e, t, i] of [
    [0, -15, 2],
    [0, -5, 0],
    [-5, -10, 1],
    [5, -10, 3],
  ])
    s.put(e, 1, t, v.WOOD_BENCH, i);
  for (const [e, t] of [
    [-10, -20],
    [10, -20],
    [-10, 0],
    [10, 0],
    [-4, -4],
    [4, -16],
  ])
    (s.fill(e, 1, t, e, 3, t, v.FENCE_STONE_BRICKS), s.put(e, 4, t, v.LANTERN));
  for (const [e, t] of [
    [-9, -10],
    [9, -10],
  ])
    s.put(e, 1, t, v.BARREL);
  return s;
}
function d$() {
  const s = new Fs();
  ((s.foundation = v.STONE), s.fill(-6, 0, -15, 6, 0, 0, qi("gray")));
  for (let e = -15; e <= 0; e++)
    ((e % 4) + 4) % 4 < 2 && s.put(0, 0, e, qi("white"));
  for (const e of [-1, 1]) {
    (s.fill(e * 4, 0, -15, e * 6, 0, 0, v.POLISHED_STONE),
      s.fill(e * 4, 0, -15, e * 4, 0, 0, v.STONE_BRICKS));
    for (const t of [-12, -4])
      (s.fill(e * 6, 1, t, e * 6, 4, t, v.FENCE_STONE_BRICKS),
        s.put(e * 6, 5, t, v.LANTERN));
    (s.put(e * 5, 0, -8, v.GRASS),
      s.put(e * 5, 1, -8, v.POTTED_PLANT),
      s.put(e * 6, 1, -1, v.BARREL));
  }
  return s;
}
function u$() {
  const s = new Fs();
  ((s.foundation = v.STONE), s.fill(-6, 0, -12, 6, 0, 0, qi("gray")));
  for (const [e, t, i, n] of [
    [-6, -12, -4, -10],
    [4, -12, 6, -10],
    [-6, -2, -4, 0],
    [4, -2, 6, 0],
  ])
    (s.fill(e, 0, t, i, 0, n, v.POLISHED_STONE),
      s.put((e + i) / 2, 1, (t + n) / 2, v.FENCE_STONE_BRICKS));
  for (const [e, t] of [
    [-5, -11],
    [5, -11],
    [-5, -1],
    [5, -1],
  ])
    (s.fill(e, 1, t, e, 4, t, v.FENCE_STONE_BRICKS), s.put(e, 5, t, v.LANTERN));
  for (let e = -3; e <= 3; e += 2)
    (s.put(e, 0, -12, qi("white")),
      s.put(e, 0, -11, qi("white")),
      s.put(e, 0, 0, qi("white")),
      s.put(e, 0, -1, qi("white")));
  for (let e = -9; e <= -3; e += 2)
    (s.put(-6, 0, e, qi("white")),
      s.put(-5, 0, e, qi("white")),
      s.put(6, 0, e, qi("white")),
      s.put(5, 0, e, qi("white")));
  return s;
}
function Wi(s, e, t, i, n, o, a, r) {
  const l = (f, p, m) =>
    r.cells.get(`${f},${p},${m}`)?.id ?? (p < 0 ? v.STONE : v.AIR);
  for (const f of r.cells.values()) f.meta = vW(f.id, f.meta, f.x, f.y, f.z, l);
  for (const f of [...r.cells.values()]) {
    const p = yW(f.id, f.meta, f.x, f.y, f.z, l);
    if (p.length) {
      for (const m of p) r.put(m.x, m.y, m.z, v.CHAIN);
      f.meta = 5;
    }
  }
  bW(
    [...r.cells.values()].filter((f) => f.id === v.LADDER),
    l,
    (f, p, m, g, y) => r.put(f, p, m, g, y),
  );
  const c = [...r.cells.values()].sort(
      (f, p) => f.y - p.y || f.z - p.z || f.x - p.x,
    ),
    h = c.map((f) => f.x),
    d = c.map((f) => f.y),
    u = c.map((f) => f.z);
  return {
    id: s,
    key: e,
    label: `Чертёж: ${t}`,
    labelEn: `Blueprint: ${i}`,
    description: n,
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
