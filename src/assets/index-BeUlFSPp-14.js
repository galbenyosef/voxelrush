// index-BeUlFSPp 14 — put
// Lines 30107-30442 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Fs {
  foundation = v.STONE;
  cells = new Map();
  put(e, t, i, n, o = 0) {
    this.cells.set(`${e},${t},${i}`, { x: e, y: t, z: i, id: n, meta: o });
  }
  sign(e, t, i, n, o = 0) {
    (this.put(e, t, i, v.SIGN, o), (this.cells.get(`${e},${t},${i}`).text = n));
  }
  lift(e, t, i) {
    for (const n of i)
      for (let o = 0; o < 2; o++)
        (this.fill(e + o, n - 1, t, e + o, n - 1, t + 1, v.POLISHED_STONE),
          this.fill(e + o, n, t, e + o, n + 1, t + 1, v.AIR),
          this.sign(
            e + o,
            n,
            t,
            `Floor ${i.indexOf(n) + 1}
[${(o === 0 && n !== i.at(-1)) || n === i[0] ? "Lift Up" : "Lift Down"}]`,
          ));
  }
  fill(e, t, i, n, o, a, r, l = 0) {
    for (let c = t; c <= o; c++)
      for (let h = i; h <= a; h++)
        for (let d = e; d <= n; d++) this.put(d, c, h, r, l);
  }
  room(e, t, i, n, o, a, r, l) {
    (this.fill(e, t, i, n, t + o, a, r),
      this.fill(e + 1, t + 1, i + 1, n - 1, t + o - 1, a - 1, v.AIR),
      this.fill(e, t, i, n, t, a, l));
  }
  door(e, t, i, n = v.DOOR, o = 2) {
    (this.put(e, t, i, n, o), this.put(e, t + 1, i, n, o | wr));
  }
  bed(e, t, i, n = 0) {
    const [o, a] = Qo[n];
    (this.put(e, t, i, v.BED, n), this.put(e + o, t, i + a, v.BED, n | nm));
  }
  window(e, t, i, n, o, a = v.GLASS) {
    this.fill(e, t, i, n, t + 1, o, a);
  }
  gable(e, t, i, n, o) {
    for (let a = -e; a <= e; a++)
      this.fill(a, n + e - Math.abs(a), t, a, n + e - Math.abs(a), i, o);
    for (const a of [t + 1, i - 1])
      for (let r = -e + 1; r < e; r++)
        this.fill(r, n, a, r, n + e - Math.abs(r) - 1, a, v.PLANKS);
  }
}
function mb(s) {
  const e = new Fs(),
    t = s === "modern",
    i = s === "alpine",
    n = t ? 6 : 4,
    o = t ? -12 : -10;
  (e.fill(-n - 1, 0, o - 1, n + 1, 0, 0, t ? v.POLISHED_STONE : v.COBBLE),
    e.room(-n, 0, o, n, 5, -2, t || i ? v.STONE_BRICKS : v.PLANKS, v.PLANKS),
    e.door(0, 1, -2),
    e.put(0, 0, 0, v.STAIR_WOOD, 0));
  for (const a of [-n, n])
    (e.window(a, 2, o + 2, a, o + 4), e.window(a, 2, -5, a, -4));
  (e.window(-3, 2, -2, -2, -2), e.window(2, 2, -2, 3, -2));
  for (const a of [-n, n])
    for (const r of [o, -2])
      e.fill(a, 1, r, a, 5, r, t ? v.POLISHED_STONE : v.PINE_LOG);
  if (t) {
    (e.fill(-n - 1, 5, o - 1, n + 1, 5, -1, v.POLISHED_STONE),
      e.fill(-n, 6, o, n, 6, o, v.GLASS),
      e.fill(-n, 6, o, -n, 6, -2, v.GLASS),
      e.fill(n, 6, o, n, 6, -2, v.GLASS),
      e.put(-n + 1, 5, o + 1, v.AIR),
      e.fill(-n, 6, -2, n, 6, -2, v.GLASS));
    for (let a = 1; a <= 5; a++) e.put(-n + 1, a, o + 1, v.LADDER, 1);
    (e.put(3, 6, -6, v.WOOD_TABLE),
      e.put(3, 6, -7, v.WOOD_CHAIR, 2),
      e.put(3, 6, -5, v.WOOD_CHAIR, 0),
      e.put(-3, 6, -8, v.POTTED_PLANT),
      e.put(-3, 6, -4, v.POTTED_PLANT));
  } else {
    (e.gable(n + 1, o - 1, -1, 5, i ? v.STONE_BRICKS : v.PINE_LOG),
      e.fill(n - 2, 5, o + 2, n - 2, 11, o + 2, v.AIR));
    for (const [a, r] of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ])
      e.fill(n - 2 + a, 5, o + 2 + r, n - 2 + a, 10, o + 2 + r, v.BRICK);
    e.put(1, 5, -3, v.AIR);
    for (let a = 1; a <= 6; a++) e.put(1, a, -3, v.LADDER, 4);
    (e.put(0, 7, o, v.GLASS),
      e.put(0, 8, o, v.GLASS),
      e.bed(-1, 6, -7, 2),
      e.put(1, 6, o + 1, v.CHEST),
      e.put(0, 9, -5, v.LANTERN, 5));
  }
  (e.bed(-n + 2, 1, o + 3),
    e.put(t ? -3 : -n + 1, 1, o + 1, v.CHEST),
    e.put(n - 2, 1, o + 2, v.FURNACE, 2),
    e.put(n - 1, 1, o + 3, v.BARREL),
    e.put(2, 1, -5, v.WOOD_TABLE),
    e.put(2, 1, -6, v.WOOD_CHAIR, 2),
    e.put(2, 1, -4, v.WOOD_CHAIR, 0),
    e.put(-n + 1, 1, -4, v.BOOKSHELF),
    e.put(-2, 4, -3, v.LANTERN));
  for (const a of [-n, n])
    (e.fill(a, 1, -1, a, 1, 0, v.FENCE_WOOD), e.put(a, 2, 0, v.LANTERN));
  return (
    t
      ? (e.put(0, 1, o + 1, v.KITCHEN_COUNTER, 2),
        e.put(1, 1, o + 1, v.SINK, 2),
        e.put(2, 1, o + 1, v.KITCHEN_COUNTER, 2),
        e.put(2, 2, o + 1, v.POTTED_PLANT),
        e.put(-5, 1, -6, v.SOFA, 1),
        e.put(-5, 1, -5, v.SOFA, 1))
      : (e.put(1, 1, o + 1, v.KITCHEN_COUNTER, 2),
        e.put(2, 1, o + 1, v.SINK, 2)),
    i && (e.put(0, 1, -9, v.CHEST), e.bed(-1, 1, -8)),
    e
  );
}
function NS(s) {
  const e = new Fs();
  if (s) {
    e.room(-5, -5, -15, 5, 5, -7, v.RSTONE, v.RSTONE);
    for (let t = 0; t <= 5; t++) {
      const i = -Math.min(t, 4),
        n = -t;
      (e.fill(-2, i - 1, n, 2, Math.max(i + 3, 1), n, v.RSTONE),
        e.fill(-1, i, n, 1, Math.max(i + 2, 2), n, v.AIR),
        e.fill(-1, i - 1, n, 1, i - 1, n, v.STAIR_RSTONE, 2));
    }
    (e.fill(-2, 3, -5, 2, 3, 0, v.RSTONE),
      e.fill(-2, -5, -7, 2, 0, -6, v.RSTONE),
      e.fill(-1, -4, -7, 1, -2, -6, v.AIR),
      e.fill(-2, 0, -15, 2, 0, -11, v.RSTONE),
      e.put(0, 1, -13, v.LANTERN),
      e.bed(-3, -4, -10),
      e.bed(-1, -4, -10),
      e.put(3, -4, -13, v.MILITARY_CHEST),
      e.put(2, -4, -10, v.MAP_TABLE),
      e.put(3, -4, -10, v.WOOD_CHAIR, 3),
      e.put(0, -1, -11, v.LANTERN));
    for (const t of [-1, 1]) e.fill(t, -4, -7, t, -2, -7, v.RSTONE);
    (e.door(0, -4, -7, v.ARMORED_DOOR),
      e.put(-3, -4, -13, v.BARREL),
      e.put(0, -2, -6, v.LANTERN, 5));
  } else {
    (e.fill(-6, 0, -12, 6, 0, 0, v.RSTONE),
      e.room(-5, 0, -11, 5, 4, -2, v.RSTONE, v.RSTONE),
      e.fill(-5, 4, -11, 5, 5, -2, v.RSTONE),
      e.door(0, 1, -2, v.ARMORED_DOOR),
      e.put(0, 0, 0, v.STAIR_RSTONE),
      e.fill(-2, 3, -1, 2, 3, 0, v.RSTONE),
      e.fill(-2, 1, -1, -2, 2, 0, v.RSTONE),
      e.fill(2, 1, -1, 2, 2, 0, v.RSTONE));
    for (const t of [-3, 3]) e.fill(t, 2, -2, t, 2, -2, v.RGLASS);
    for (const t of [-5, 5]) e.fill(t, 2, -8, t, 2, -5, v.RGLASS);
    (e.bed(-3, 1, -7),
      e.put(-3, 1, -10, v.MILITARY_CHEST),
      e.put(3, 1, -10, v.BARREL),
      e.put(2, 1, -7, v.MAP_TABLE),
      e.put(3, 1, -7, v.WOOD_CHAIR, 3),
      e.put(0, 3, -6, v.LANTERN),
      e.fill(-4, 6, -10, 4, 6, -10, v.RSTONE),
      e.put(-4, 6, -3, v.LANTERN),
      e.put(4, 6, -3, v.LANTERN));
  }
  return e;
}
function qW() {
  const s = new Fs();
  (s.fill(-8, 0, -16, 8, 0, 0, v.POLISHED_STONE),
    s.fill(-8, 1, -16, 8, 8, 0, v.AIR));
  for (let e = -8; e <= 8; e++)
    for (let t = -16; t <= 0; t++)
      (Math.abs(e) === 8 || t === -16 || t === 0) &&
        s.put(e, 0, t, (e + t) % 2 === 0 ? v.SANDSTONE_SMOOTH : v.RSTONE);
  for (let e = -6; e <= 6; e++)
    for (let t = -14; t <= -2; t++) {
      const i = Math.hypot(e, t + 8);
      i > 5 && i < 6.2 && s.put(e, 0, t, v.SANDSTONE_SMOOTH);
    }
  (s.fill(-2, 0, -11, -2, 0, -5, v.SANDSTONE_SMOOTH),
    s.fill(2, 0, -11, 2, 0, -5, v.SANDSTONE_SMOOTH),
    s.fill(-2, 0, -8, 2, 0, -8, v.SANDSTONE_SMOOTH));
  for (const e of [-7, 7])
    for (const t of [-15, -1]) s.put(e, 0, t, v.RGLOWSTONE);
  for (const e of [-8, 8])
    for (const t of [-16, 0]) s.put(e, 1, t, v.AVIATION_LIGHT);
  return (s.put(0, 0, 0, v.STAIR_STONE), s);
}
function KW() {
  const s = new Fs();
  ((s.foundation = v.RSTONE),
    s.fill(-11, 0, -27, 11, 10, 0, v.RSTONE),
    s.fill(-9, 1, -25, 9, 8, -4, v.AIR),
    s.fill(-7, 10, -21, 7, 16, -7, v.AIR),
    s.fill(-1, 1, -3, 1, 3, 0, v.AIR),
    s.door(0, 1, -3, v.ARMORED_DOOR));
  for (const e of [-1, 1]) s.fill(e, 1, -3, e, 2, -3, v.RSTONE);
  for (const e of [-2, 2]) s.fill(e, 0, -17, e, 0, -11, v.RGLOWSTONE);
  s.fill(-2, 0, -14, 2, 0, -14, v.RGLOWSTONE);
  for (const e of [-9, 9])
    for (const t of [-23, -14, -5]) s.put(e, 6, t, v.RGLOWSTONE);
  (s.put(-8, 1, -24, v.MILITARY_CHEST),
    s.put(8, 1, -24, v.BARREL),
    s.bed(8, 1, -5),
    s.put(-8, 1, -22, v.MAP_TABLE),
    s.put(-8, 1, -6, v.SIGN, 0),
    s.lift(6, -23, [1, 11]),
    (s.cells.get("-8,1,-6").text = `Helicopter hangar
[gate horizontal]
1,8,-15
15,8,-1`));
  for (const e of [-11, 11])
    for (const t of [-27, 0]) s.put(e, 11, t, v.AVIATION_LIGHT);
  return s;
}
function zx(s) {
  const e = new Fs(),
    t = s ? v.RSTONE : v.POLISHED_STONE,
    i = s ? v.RGLOWSTONE : v.SANDSTONE_SMOOTH;
  ((e.foundation = s ? v.RSTONE : v.STONE),
    e.fill(-8, 0, -95, 8, 0, 0, t),
    e.fill(-8, 1, -95, 8, 8, 0, v.AIR));
  for (const n of [-7, 7]) e.fill(n, 0, -94, n, 0, -1, i);
  for (let n = -87; n <= -8; n += 10) e.fill(0, 0, n, 0, 0, n + 4, i);
  for (const n of [-93, -5])
    for (const o of [-5, -3, -1, 1, 3, 5]) e.fill(o, 0, n, o, 0, n + 2, i);
  for (const n of [-8, 8])
    for (let o = -94; o < 0; o += 8)
      e.put(n, 0, o, s ? v.RGLOWSTONE : v.GLOWSTONE);
  for (const n of [0, -95])
    for (const o of [-6, -3, 3, 6]) e.put(o, 1, n, v.AVIATION_LIGHT);
  for (const n of [-8, 8])
    for (let o = -86; o <= -6; o += 16) e.put(n, 1, o, v.AVIATION_LIGHT);
  return e;
}
function Fx(s) {
  const e = new Fs(),
    t = s ? v.RSTONE : v.STONE_BRICKS,
    i = s ? v.RSTONE : v.POLISHED_STONE,
    n = s ? v.RGLOWSTONE : v.GLOWSTONE,
    o = s ? 10 : 9;
  ((e.foundation = s ? v.RSTONE : v.STONE),
    e.fill(-12, 0, -29, 12, 0, 0, i),
    e.fill(-12, 1, -29, 12, o, -3, t),
    e.fill(-10, 1, -27, 10, 8, -4, v.AIR),
    e.fill(-12, 1, -2, 12, 8, 0, v.AIR),
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
    for (const r of [-10, 10]) (e.fill(r, 1, a, r, 7, a, t), e.put(r, 7, a, n));
    (e.fill(-10, 8, a, 10, 8, a, t), e.put(0, 8, a, n));
  }
  (e.door(10, 1, -3, s ? v.ARMORED_DOOR : v.METAL_DOOR),
    e.put(11, 3, -2, n),
    e.put(-9, 1, -26, v.MILITARY_CHEST),
    e.put(-8, 1, -26, v.BARREL),
    e.put(9, 1, -26, v.WOOD_TABLE),
    e.put(9, 2, -26, v.REMOTE_STATION));
  for (let a = -23; a <= 0; a += 5)
    e.put(0, 0, a, s ? v.RGLOWSTONE : v.SANDSTONE_SMOOTH);
  for (const a of [-9, 9]) e.put(a, 0, -1, n);
  return e;
}
function YW() {
  const s = new Fs();
  (s.fill(-8, 0, -9, 8, 0, 0, v.POLISHED_STONE),
    s.fill(-8, 1, -9, 8, 5, 0, v.AIR),
    s.room(-8, 0, -8, -3, 4, -3, v.STONE_BRICKS, v.POLISHED_STONE),
    s.door(-5, 1, -3, v.METAL_DOOR),
    s.window(-3, 2, -6, -3, -5, v.RGLASS),
    s.window(-7, 2, -3, -6, -3, v.RGLASS),
    s.put(-6, 1, -6, v.MAP_TABLE),
    s.put(-6, 1, -5, v.WOOD_CHAIR),
    s.put(-4, 1, -7, v.MILITARY_CHEST),
    s.put(-7, 3, -7, v.LANTERN));
  for (const e of [0, 6])
    (s.fill(e, 1, -5, e, 5, -5, v.RSTONE), s.put(e, 6, -5, v.LANTERN));
  return (
    s.fill(0, 5, -5, 6, 5, -5, v.RSTONE),
    s.fill(1, 1, -5, 5, 3, -5, v.RSTONE),
    s.sign(
      0,
      1,
      -3,
      `Checkpoint
[gate]
1,0,-2
5,2,-2`,
    ),
    s.fill(7, 1, -5, 8, 2, -5, v.RSTONE),
    s.fill(7, 3, -5, 8, 3, -5, v.BARBED_WIRE),
    s.put(3, 0, 0, v.STAIR_STONE),
    s
  );
}
function jW() {
  const s = new Fs();
  (s.fill(-6, 0, -16, 6, 0, 0, v.COBBLE),
    s.room(-5, 0, -15, 5, 5, -2, v.BRICK, v.PLANKS),
    s.gable(6, -16, -1, 5, v.STONE_BRICKS),
    s.door(0, 1, -2, v.METAL_DOOR),
    s.put(0, 0, 0, v.STAIR_STONE),
    s.put(2, 5, -3, v.AIR));
  for (let e = 1; e <= 6; e++) s.put(2, e, -3, v.LADDER, 4);
  for (const e of [-7, -11]) s.put(-1, 6, e, v.MILITARY_CHEST);
  (s.put(1, 6, -9, v.BARREL),
    s.put(0, 10, -9, v.LANTERN, 5),
    s.put(0, 8, -16, v.RGLASS));
  for (const e of [-5, -9, -13]) {
    for (const t of [-5, 5]) s.window(t, 2, e, t, e);
    for (const t of [-3, 3])
      (s.bed(t, 1, e), s.put(t, 1, e + 1, v.MILITARY_CHEST));
  }
  return (
    s.put(0, 1, -12, v.MAP_TABLE),
    s.put(1, 1, -12, v.WOOD_CHAIR, 3),
    s.put(-1, 1, -12, v.WOOD_CHAIR, 1),
    s.put(0, 4, -5, v.LANTERN),
    s.put(0, 4, -11, v.LANTERN),
    s.put(-3, 1, -3, v.BARREL),
    s
  );
}
