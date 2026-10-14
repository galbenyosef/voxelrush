// index-Dp6GxvJu 159 — box
// Lines 93691-94035 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function IQ(n, e, t, i) {
  const s = new ze(e.color),
    o = new ze(16777215).lerp(s, 0.22),
    a = { tint: o },
    r = Dt.GOLD;
  (n.box(-0.9, 0, -0.6, 0.9, 0.12, 0.62, Dt.BLACK_MARBLE),
    n.box(-0.86, 0.12, -0.56, 0.86, 0.17, 0.58, r),
    n.box(-0.82, 0.17, -0.55, 0.82, 0.98, 0.55, Dt.LACQUER, a),
    n.box(-0.6, 0.3, 0.55, 0.6, 0.86, 0.58, r),
    n.box(-0.54, 0.36, 0.58, 0.54, 0.8, 0.595, Dt.MARQUEE, {
      glow: !0,
      tint: s.clone().lerp(new ze(16777215), 0.35),
      fit: !0,
      chase: 100 + (e.color % 7),
    }),
    n.box(-0.3, 0.19, 0.55, 0.3, 0.29, 0.74, r),
    n.box(-0.25, 0.26, 0.57, 0.25, 0.295, 0.72, Dt.BLACK),
    n.at(
      0,
      0.98,
      0.42,
      0,
      () => {
        (n.box(
          -0.84,
          0,
          0,
          0.84,
          0.12,
          0.44,
          { side: Dt.LACQUER, top: Dt.DECK },
          { fit: !0, tint: o },
        ),
          n.box(-0.86, -0.03, 0.42, 0.86, 0.13, 0.48, r),
          n.box(0.46, 0.12, 0.1, 0.68, 0.16, 0.3, Dt.MARQUEE, {
            glow: !0,
            tint: 16731486,
            fit: !0,
            chase: 103,
          }));
      },
      1,
      0.24,
    ),
    n.box(-0.82, 0.98, -0.55, 0.82, 2.18, 0.5, Dt.LACQUER, a),
    n.box(-0.69, 1.189, 0.5, 0.69, 2.051, 0.55, Dt.BLACK),
    n.box(-0.79, 2.051, 0.5, 0.79, 2.13, 0.61, r),
    n.box(-0.79, 1.11, 0.5, 0.79, 1.189, 0.61, r),
    n.box(-0.79, 1.189, 0.5, -0.69, 2.051, 0.61, r),
    n.box(0.69, 1.189, 0.5, 0.79, 2.051, 0.61, r),
    n.box(-0.88, 2.15, -0.52, 0.88, 2.21, 0.56, r),
    n.box(-0.86, 2.21, -0.5, 0.86, 2.7, 0.52, Dt.LACQUER, a),
    n.box(-0.88, 2.7, -0.52, 0.88, 2.76, 0.56, r),
    n.quad(-0.76, 2.27, 0.76, 2.64, 0.525, t, kI(`game:${e.id}`, i)));
  for (const [l, c] of [
    [2.215, 1],
    [2.645, 2],
  ])
    n.box(-0.8, l, 0.52, 0.8, l + 0.0625, 0.545, Dt.BULBS, {
      glow: !0,
      uvScale: 4,
      chase: c,
      tint: 16769696,
    });
  (n.box(-0.6, 2.76, -0.3, 0.6, 2.84, 0.4, r),
    n.box(-0.1, 2.84, -0.05, 0.1, 2.88, 0.15, r));
  for (const l of [-0.86, 0.82])
    n.box(l, 0.2, 0.5, l + 0.04, 2.7, 0.565, Dt.CRYSTAL, {
      glow: !0,
      tint: s,
      chase: 100 + (e.color % 5),
    });
  (n.box(0.82, 1.22, -0.16, 0.93, 1.46, 0.16, r),
    n.box(0.88, 1.4, -0.04, 0.94, 2.22, 0.04, Dt.CHROME),
    n.box(0.84, 2.22, -0.08, 0.98, 2.36, 0.06, Dt.RED),
    LI(n, 0, PQ));
}
const PQ = 1.5;
function LI(n, e, t, i = !0) {
  (n.box(e - 0.28, 0, t - 0.28, e + 0.28, 0.05, t + 0.28, Dt.BLACK_MARBLE),
    n.box(e - 0.05, 0.05, t - 0.05, e + 0.05, 0.45, t + 0.05, Dt.GOLD));
  for (const [s, o, a, r] of [
    [-0.2, -0.2, 0.4, 0.04],
    [-0.2, 0.16, 0.4, 0.04],
    [-0.2, -0.2, 0.04, 0.4],
    [0.16, -0.2, 0.04, 0.4],
  ])
    n.box(e + s, 0.2, t + o, e + s + a, 0.24, t + o + r, Dt.GOLD);
  if (
    (n.box(e - 0.28, 0.43, t - 0.28, e + 0.28, 0.46, t + 0.28, Dt.GOLD),
    n.box(e - 0.27, 0.46, t - 0.27, e + 0.27, 0.58, t + 0.27, Dt.VELVET),
    i)
  ) {
    n.box(e - 0.24, 0.62, t + 0.2, e + 0.24, 1.02, t + 0.28, Dt.VELVET);
    for (const s of [-0.27, 0.23])
      n.box(e + s, 0.56, t + 0.19, e + s + 0.04, 1.05, t + 0.29, Dt.GOLD);
    n.box(e - 0.27, 1.02, t + 0.19, e + 0.27, 1.06, t + 0.29, Dt.GOLD);
  }
}
const Xi = Dt.GOLD,
  To = (n, e = 0, t = {}) => ({ glow: !0, tint: n, chase: e, ...t });
function k_(n, e, t, i, s, o, a) {
  (n.box(e - 0.22, t - 0.08, i - 0.22, e + 0.22, t, i + 0.22, Xi),
    n.box(e - 0.03, t - o, i - 0.03, e + 0.03, t - 0.08, i + 0.03, Xi));
  const r = t - o;
  (n.box(e - 0.1, r - 0.55, i - 0.1, e + 0.1, r + 0.05, i + 0.1, Xi),
    n.box(
      e - 0.14,
      r - 0.75,
      i - 0.14,
      e + 0.14,
      r - 0.5,
      i + 0.14,
      Dt.CRYSTAL,
      To(14217983, 100 + a),
    ),
    (s > 1
      ? [
          [s, r - 0.2],
          [s * 0.55, r - 0.48],
        ]
      : [[s, r - 0.25]]
    ).forEach(([c, h], d) => {
      for (let u = 0; u < 8; u++) {
        const f = (u * Math.PI) / 4;
        (n.at(
          e + Math.cos(f + Math.PI / 8) * c * 0.924,
          h,
          i + Math.sin(f + Math.PI / 8) * c * 0.924,
          -(f + Math.PI / 8) + Math.PI / 2,
          () => n.box(-c * 0.4, -0.04, -0.04, c * 0.4, 0.04, 0.04, Xi),
        ),
          n.at(
            e + Math.cos(f) * c * 0.5,
            h + 0.02,
            i + Math.sin(f) * c * 0.5,
            -f + Math.PI / 2,
            () => n.box(-0.02, -0.02, -c * 0.5, 0.02, 0.02, c * 0.5, Xi),
          ));
        const p = e + Math.cos(f) * c,
          m = i + Math.sin(f) * c;
        (n.box(
          p - 0.05,
          h + 0.04,
          m - 0.05,
          p + 0.05,
          h + 0.16,
          m + 0.05,
          Dt.WHITE,
        ),
          n.box(
            p - 0.045,
            h + 0.16,
            m - 0.045,
            p + 0.045,
            h + 0.25,
            m + 0.045,
            Dt.SHADE,
            To(16765578, 100 + u + a * 3),
          ),
          n.box(
            p - 0.025,
            h - 0.34 - d * 0.1,
            m - 0.025,
            p + 0.025,
            h - 0.04,
            m + 0.025,
            Dt.CRYSTAL,
            To(15136511, 100 + u * 1.7 + a),
          ));
      }
    }));
}
function OQ(n, e, t, i) {
  for (const s of [2.3, 1.55])
    for (let o = 0; o < 12; o++) {
      const a = (o * Math.PI) / 6,
        r = a + Math.PI / 12;
      n.at(
        e + Math.cos(r) * s * 0.966,
        t + (s > 2 ? 0 : 0.35),
        i + Math.sin(r) * s * 0.966,
        -r + Math.PI / 2,
        () => n.box(-s * 0.27, -0.05, -0.05, s * 0.27, 0.05, 0.05, Xi),
      );
      const l = e + Math.cos(a) * s,
        c = i + Math.sin(a) * s,
        h = t + (s > 2 ? 0 : 0.35);
      (n.box(
        l - 0.05,
        h + 0.05,
        c - 0.05,
        l + 0.05,
        h + 0.18,
        c + 0.05,
        Dt.WHITE,
      ),
        n.box(
          l - 0.05,
          h + 0.18,
          c - 0.05,
          l + 0.05,
          h + 0.28,
          c + 0.05,
          Dt.SHADE,
          To(16765578, 100 + o),
        ),
        n.box(
          l - 0.03,
          h - 0.5,
          c - 0.03,
          l + 0.03,
          h - 0.05,
          c + 0.03,
          Dt.CRYSTAL,
          To(15136511, 101 + o * 1.3),
        ),
        o % 3 === 0 &&
          s > 2 &&
          n.at(
            e + Math.cos(a) * 1.4,
            t + 0.02,
            i + Math.sin(a) * 1.4,
            -a + Math.PI / 2,
            () => n.box(-0.03, -0.03, -1, 0.03, 0.03, 0.9, Xi),
          ));
    }
  for (let s = 0; s < 4; s++) {
    const o = (s * Math.PI) / 2 + Math.PI / 4;
    n.at(
      e + Math.cos(o) * 1.15,
      t + 1,
      i + Math.sin(o) * 1.15,
      -o + Math.PI / 2,
      () => n.box(-0.03, -0.03, -0.75, 0.03, 0.03, 0.75, Xi),
      1,
      0.85,
    );
  }
}
function Zm(n, e, t, i, s, o) {
  n.at(e, t, i, s, () => {
    (n.box(-0.2, -0.32, 0, 0.2, 0.32, 0.05, Xi),
      n.box(-0.12, -0.24, 0.05, 0.12, 0.24, 0.07, Dt.VELVET),
      n.box(-0.04, -0.06, 0.05, 0.04, 0.02, 0.38, Xi),
      n.box(-0.1, 0.02, 0.28, 0.1, 0.08, 0.48, Xi),
      n.box(
        -0.15,
        0.08,
        0.23,
        0.15,
        0.38,
        0.53,
        Dt.SHADE,
        To(16767392, 100 + o),
      ),
      n.box(
        -0.03,
        -0.22,
        0.35,
        0.03,
        0.02,
        0.41,
        Dt.CRYSTAL,
        To(15136511, 101 + o),
      ));
  });
}
function Xd(n, e, t, i, s, o, a, r, l, c = 16766826) {
  n.at(t, i, s, o, () => {
    (n.box(
      -a / 2 - 0.12,
      -r / 2 - 0.12,
      0,
      a / 2 + 0.12,
      r / 2 + 0.12,
      0.08,
      Xi,
    ),
      n.quad(-a / 2, -r / 2, a / 2, r / 2, 0.085, e, kI(l, Mu)),
      n.box(
        -a / 2 - 0.12,
        r / 2 + 0.12,
        0.02,
        a / 2 + 0.12,
        r / 2 + 0.1825,
        0.1,
        Dt.BULBS,
        To(16769696, 1, { uvScale: 4 }),
      ),
      n.box(
        -a / 2 - 0.12,
        -r / 2 - 0.1825,
        0.02,
        a / 2 + 0.12,
        -r / 2 - 0.12,
        0.1,
        Dt.BULBS,
        To(16769696, 2, { uvScale: 4 }),
      ));
    for (const h of [-a / 2 - 0.2, a / 2 + 0.12])
      n.box(
        h,
        -r / 2 - 0.12,
        0.02,
        h + 0.08,
        r / 2 + 0.12,
        0.1,
        Dt.CRYSTAL,
        To(c, 100 + a),
      );
  });
}
function L_(n, e, t, i, s, o) {
  const a = [
    [0.35, 1.6],
    [-0.2, 0.3],
    [0.3, 0.3],
    [-0.35, -1.5],
  ];
  n.at(e, t, i, s, () => {
    for (let r = 0; r < a.length - 1; r++) {
      const [l, c] = a[r],
        [h, d] = a[r + 1],
        u = Math.ceil(Math.hypot(h - l, d - c) / 0.14);
      for (let f = 0; f <= u; f++) {
        const p = f / u,
          m = (l + (h - l) * p) * o,
          y = c + (d - c) * p;
        (n.box(m - 0.11, y - 0.11, 0, m + 0.11, y + 0.11, 0.1, Xi),
          f % 2 === 0 &&
            n.box(
              m - 0.045,
              y - 0.045,
              0.1,
              m + 0.045,
              y + 0.045,
              0.13,
              Dt.MARQUEE,
              To(16773808, 100 + f + r, { fit: !0 }),
            ));
      }
    }
  });
}
