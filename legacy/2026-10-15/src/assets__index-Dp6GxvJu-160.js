// assets__index-Dp6GxvJu 160 — box
// Lines 94036-94285 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function NQ(n, e, t) {
  (n.box(-17, 0, -13.1, -10.6, 0.98, -12.2, Dt.WALNUT),
    n.box(-17, 0.98, -13.2, -10.5, 1.08, -12.1, Dt.BLACK_MARBLE),
    n.box(-17, 1.08, -12.25, -10.5, 1.13, -12.1, Xi),
    n.box(-17, 0.12, -12.1, -10.6, 0.17, -12, Xi),
    n.box(-11.5, 0, -16, -10.6, 0.98, -13.1, Dt.WALNUT),
    n.box(-11.6, 0.98, -16, -10.5, 1.08, -13.1, Dt.BLACK_MARBLE));
  for (let i = -16.4; i < -11; i += 1.2)
    n.box(i, 0.3, -12.12, i + 0.6, 0.8, -12.09, Dt.VELVET);
  (t.colliders.push([-17, 0, -16, -10.5, 1.13, -12.1]),
    n.box(-17, 0, -15.8, -16.45, 2.7, -12.6, Dt.WALNUT),
    n.at(-16.44, 0, -14.2, Math.PI / 2, () => {
      (n.box(-1.5, 0.95, 0, 1.5, 1.95, 0.02, Dt.BOTTLES),
        n.box(-1.5, 1.95, 0, 1.5, 2.55, 0.02, Dt.BOTTLES, { fit: !0 }),
        n.box(-1.6, 2.6, 0, 1.6, 2.72, 0.06, Xi),
        n.box(-1.6, 0.9, 0, 1.6, 0.95, 0.12, Xi));
    }),
    n.box(-17, 0, -16, -12, 2.7, -15.55, Dt.WALNUT),
    n.at(-14.5, 0, -15.54, 0, () => {
      (n.box(-2.3, 0.95, 0, 2.3, 1.95, 0.02, Dt.BOTTLES),
        n.box(-2.3, 1.95, 0, 2.3, 2.55, 0.02, Dt.BOTTLES),
        n.box(-2.4, 2.6, 0, 2.4, 2.72, 0.06, Xi));
    }),
    Xd(n, e, -14.3, 2.9, -15.95, 0, 1.6, 0.7, "sign:BAR", 8317183));
  for (let i = 0; i < 4; i++) DQ(n, -16.1 + i * 1.45, -11.35);
}
function DQ(n, e, t) {
  (n.box(e - 0.2, 0, t - 0.2, e + 0.2, 0.05, t + 0.2, Dt.BLACK_MARBLE),
    n.box(e - 0.04, 0.05, t - 0.04, e + 0.04, 0.72, t + 0.04, Xi),
    n.box(e - 0.17, 0.3, t - 0.17, e + 0.17, 0.33, t + 0.17, Xi),
    n.box(e - 0.22, 0.72, t - 0.22, e + 0.22, 0.84, t + 0.22, Dt.VELVET));
}
function BQ(n, e, t) {
  (n.box(11, 0, -13.1, 18, 1.1, -12.2, Dt.BLACK_MARBLE),
    n.box(10.9, 1.1, -13.2, 18, 1.18, -12.05, Xi),
    t.colliders.push([10.9, 0, -13.2, 18, 2.9, -12.05]));
  for (let i = 11.05; i < 18; i += 0.24) {
    const s = (i > 12.2 && i < 13.6) || (i > 15.2 && i < 16.6);
    n.box(i, s ? 2.1 : 1.18, -12.68, i + 0.05, 2.75, -12.62, Xi);
  }
  (n.box(10.9, 2.75, -12.75, 18, 2.9, -12.55, Xi),
    n.box(10.9, 2.05, -12.75, 18, 2.12, -12.55, Xi));
  for (let i = 0; i < 6; i++)
    n.box(
      11.6 + i * 1,
      1.18,
      -13.05,
      11.95 + i * 1,
      1.18 + 0.08 * (1 + (i % 3)),
      -12.8,
      Xi,
    );
  n.box(13.1, 0, -15.95, 17.95, 2.4, -15.4, Dt.WALNUT);
  for (let i = 0; i < 8; i++)
    n.box(
      13.4 + i * 0.55,
      0.9,
      -15.4,
      12.62 + i * 0.55,
      0.9 + 0.25 + (i % 4) * 0.12,
      -15.15,
      Dt.CHIPS,
    );
  for (let i = 0; i < 6; i++)
    n.box(13.5 + i * 0.7, 1.75, -15.4, 13.95 + i * 0.7, 1.85, -15.2, Xi);
  Xd(n, e, 14.5, 2.45, -12.62, 0, 2.6, 0.65, "sign:CASHIER", 10354570);
}
function HQ(n, e, t, i) {
  n.box(e - 0.25, 0, t - 0.25, e + 0.25, 0.8, t + 0.25, Dt.WALNUT);
  for (const [s, o, a] of [
    [1.35, -0.55, 0.35],
    [1.15, 0.35, 0.65],
    [0.8, 0.65, 0.85],
  ])
    (n.box(e - s, 0.8, t + o, e + s, 0.92, t + a, Dt.WALNUT),
      n.box(
        e - s + 0.1,
        0.92,
        t + o + (o < 0 ? 0.1 : 0),
        e + s - 0.1,
        0.93,
        t + a - (a === 0.85 ? 0.1 : 0),
        Dt.FELT,
      ));
  (n.box(e - 1.37, 0.92, t - 0.57, e + 1.37, 0.95, t - 0.52, Xi),
    n.box(e + 0.45, 0.93, t - 0.52, e + 1.12, 0.945, t - 0.22, Dt.LACQUER));
  for (const [s, o, a] of [
    [1.35, -0.55, 0.35],
    [1.15, 0.35, 0.65],
    [0.8, 0.65, 0.85],
  ])
    i.colliders.push([e - s, 0.8, t + o, e + s, 0.95, t + a]);
  (i.colliders.push([e - 0.25, 0, t - 0.25, e + 0.25, 0.8, t + 0.25]),
    i.colliders.push([e - 0.26, 0, t - 1.25, e + 0.26, 1.8, t - 0.8]));
  for (let s = 0; s < 3; s++) {
    const o = (s - 1) * 0.55;
    LI(n, e + Math.sin(o) * 1.6, t + 0.35 + Math.cos(o) * 1, !1);
  }
}
function Vg(n, e, t, i, s) {
  s.colliders.push([
    e - 0.13,
    0,
    t - 0.13,
    e + 0.13,
    1.06,
    t + Math.floor((i - t) / 1.6) * 1.6 + 0.13,
  ]);
  for (let o = t; o <= i + 1e-6; o += 1.6)
    (n.box(e - 0.13, 0, o - 0.13, e + 0.13, 0.05, o + 0.13, Xi),
      n.box(e - 0.04, 0.05, o - 0.04, e + 0.04, 0.95, o + 0.04, Xi),
      n.box(e - 0.07, 0.95, o - 0.07, e + 0.07, 1.06, o + 0.07, Xi),
      o + 1.6 <= i + 1e-6 &&
        (n.box(e - 0.035, 0.8, o + 0.07, e + 0.035, 0.86, o + 0.5, Dt.VELVET),
        n.box(e - 0.035, 0.72, o + 0.5, e + 0.035, 0.78, o + 1.1, Dt.VELVET),
        n.box(e - 0.035, 0.8, o + 1.1, e + 0.035, 0.86, o + 1.53, Dt.VELVET)));
}
function zQ(n, e, t) {
  (n.box(-3.2, 3.95, 21, 4.2, 4.17, 23.6, Dt.VELVET),
    n.box(-3.3, 4.17, 21, 4.3, 4.25, 23.7, Xi),
    n.box(
      -3.3,
      3.89,
      23.55,
      4.3,
      3.9525,
      23.7,
      Dt.BULBS,
      To(16769696, 1, { uvScale: 4 }),
    ));
  for (const i of [-3.2, 4])
    (n.box(i, 0, 23.3, i + 0.2, 3.95, 23.5, Xi),
      n.box(i - 0.08, 0, 23.22, i + 0.28, 0.2, 23.58, Dt.BLACK_MARBLE));
  (Xd(n, e, 0.5, 8.4, 21, 0, 7.6, 1.9, "sign:OLYMPUS CASINO"),
    Vg(n, -2.75, 21.4, 23, t),
    Vg(n, 3.75, 21.4, 23, t));
}
function UQ(n, e, t) {
  const i = { colliders: [], anchors: [] };
  let s = n.lit.count;
  const o = (c) => {
      const h = i.colliders.length;
      n.at(0, 1, 0, 0, c);
      for (let d = h; d < i.colliders.length; d++)
        ((i.colliders[d][1] += 1), (i.colliders[d][4] += 1));
    },
    a = (c, h, d) => {
      (i.anchors.push([c, h, d, s, n.lit.count]), (s = n.lit.count));
    },
    r = [
      [0.5, -4.5, 1.25, 1.2],
      [0.5, 13.5, 1.25, 1.2],
      [-2.5, -11.5, 0.75, 0.9],
      [3.5, -11.5, 0.75, 0.9],
      [-14.5, 0.5, 0.8, 1],
      [15.5, 0.5, 0.8, 1],
      [-14.5, 8.5, 0.8, 1],
      [15.5, 8.5, 0.8, 1],
    ];
  (r.forEach(([c, h, d, u], f) => {
    (k_(n, c, 11, h, d, u, f), a(c, 8, h));
  }),
    bp.forEach((c, h) => {
      (k_(n, c.x, 11, c.z, 1.1, 1.5, r.length + h), a(c.x, 8, c.z));
    }),
    OQ(n, 0.5, 9.2, 4.5),
    a(0.5, 9, 4.5));
  for (const c of [-11, -5, 1, 7, 13])
    (Zm(n, -17, 4.5, c + 0.5, Math.PI / 2, c),
      Zm(n, 18, 4.5, c + 0.5, -Math.PI / 2, c + 3),
      a(-16.5, 4, c + 0.5),
      a(17.5, 4, c + 0.5));
  for (const c of [-12, 12])
    (Zm(n, c + 0.5, 4.5, -16, 0, c), a(c + 0.5, 4, -15.5));
  for (const c of [-11, 11])
    (Zm(n, c + 0.5, 4.5, 20, Math.PI, c), a(c + 0.5, 4, 19.5));
  (o(() => NQ(n, e, i)), a(-14, 1, -13), o(() => BQ(n, e, i)), a(14.5, 1, -13));
  for (const c of bp)
    (o(() => {
      (n.box(c.x - 2.5, 0.002, c.z - 2.2, c.x + 2.5, 0.006, c.z + 2.5, Xi),
        n.box(
          c.x - 2.42,
          0.006,
          c.z - 2.12,
          c.x + 2.42,
          0.012,
          c.z + 2.42,
          Dt.VELVET,
        ),
        HQ(n, c.x, c.z, i));
    }),
      a(c.x, 1, c.z));
  (o(() => {
    (Vg(n, -2.75, 15.2, 19.8, i), Vg(n, 3.75, 15.2, 19.8, i));
  }),
    o(() => zQ(n, e, i)),
    a(0.5, 1, 22.5));
  const l = SH;
  Xd(n, e, 0.5, 6.6, -15.95, 0, 6.4, 1.6, "sign:BLACKJACK");
  for (const c of [-3.5, 4.5]) {
    (n.box(c - 0.42, 2, -16, c + 0.42, 2.3, -15.2, Xi),
      n.box(c - 0.32, 2.3, -15.95, c + 0.32, 7.5, -15.3, Dt.MARBLE));
    for (let h = 2.8; h < 7.3; h += 0.9)
      n.box(c - 0.34, h, -15.32, c + 0.34, h + 0.08, -15.26, Xi);
    n.box(c - 0.45, 7.5, -16, c + 0.45, 7.85, -15.15, Xi);
  }
  (n.box(-4, 7.85, -16, 5, 8.2, -15.2, Xi),
    n.box(
      -3.9,
      7.9,
      -15.2,
      4.9,
      7.9625,
      -15.15,
      Dt.BULBS,
      To(16769696, 1, { uvScale: 4 }),
    ),
    n.box(
      -3.9,
      8.08,
      -15.2,
      4.9,
      8.1425,
      -15.15,
      Dt.BULBS,
      To(16769696, 2, { uvScale: 4 }),
    ),
    n.at(-6.9, 6.2, -16, 0, () => L_(n, 0, 0, 0, 0, 1), 1.5),
    n.at(7.9, 6.2, -16, 0, () => L_(n, 0, 0, 0, 0, -1), 1.5));
  for (const c of [l.x1 + 0.5, l.x2 + 0.5])
    (n.box(c - 0.18, 2, -10.7, c + 0.18, 3.3, -10.3, Xi),
      n.box(
        c - 0.14,
        3.3,
        -10.66,
        c + 0.14,
        3.6,
        -10.34,
        Dt.SHADE,
        To(16773312, 105),
      ));
  return (
    a(0.5, 2, -13),
    Xd(n, e, -17, 8.9, 4.5, Math.PI / 2, 4.2, 1.05, "sign:BLACKJACK", 16743129),
    Xd(n, e, 18, 8.9, 4.5, -Math.PI / 2, 4.2, 1.05, "sign:BLACKJACK", 8317183),
    i
  );
}
const Mc = (n) =>
  `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
