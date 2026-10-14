// chunk-mesh-worker-coep-v1-BX2YFLnd 32 — math
// Lines 9894-10239 of readable/assets/chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
function M0(r, t, e, s, n, i) {
  const h = T[f.COBBLE].tex[0],
    c = [];
  for (const [o, a, u, d] of [
    [0.38, 0.4, 0.42, 0.075],
    [0.62, 0.36, 0.3, 0.07],
    [0.5, 0.64, 0.22, 0.08],
  ]) {
    const l = t + o,
      p = s + a;
    (r.box(
      l - d,
      e,
      p - d,
      l + d,
      e + u,
      p + d,
      { top: n, side: n, bottom: n },
      i,
    ),
      r.box(
        l - 0.012,
        e + u,
        p - 0.012,
        l + 0.012,
        e + u + 0.05,
        p + 0.012,
        { top: h, side: h, bottom: h },
        i,
      ),
      c.push([l, e + u + 0.02, p]));
  }
  r.animMode = 1;
  for (const [o, a, u] of c)
    (r.rawQuad(
      [
        [o - 0.065, a + 0.2, u],
        [o - 0.065, a, u],
        [o + 0.065, a + 0.2, u],
        [o + 0.065, a, u],
      ],
      [0, 0, 1],
      n,
      1,
      !0,
    ),
      r.rawQuad(
        [
          [o, a + 0.2, u - 0.065],
          [o, a, u - 0.065],
          [o, a + 0.2, u + 0.065],
          [o, a, u + 0.065],
        ],
        [1, 0, 0],
        n,
        1,
        !0,
      ));
  r.animMode = 0;
}
function S0(r, t, e, s, n) {
  ((r.animMode = mn), Oi(r, t, e, s, ln, n, 0.46), (r.animMode = 0));
  const i = 0.22 + ((t * 5 + s * 3) & 3) * 0.015,
    h = t + 0.5 + ((t * 7 + s) & 1 ? 0.06 : -0.06),
    c = s + 0.5;
  r.box(
    h - i,
    e,
    c - i,
    h + i,
    e + i * 1.7,
    c + i,
    { top: Is, side: Yt, bottom: Yt },
    n,
    !0,
  );
  const o = T[f.LOG].tex[1];
  r.box(
    h - 0.03,
    e + i * 1.7,
    c - 0.03,
    h + 0.03,
    e + i * 1.7 + 0.08,
    c + 0.03,
    { top: o, side: o, bottom: o },
    n,
  );
}
function g0(r, t, e, s, n, i) {
  r.animMode = 1;
  const c = (o, a, u, d) => {
    r.rawQuad([o, a, u, d], [0, 0, 1], n, i, !0);
  };
  (c(
    [t + 0.04, e + 0.96, s + 0.04],
    [t + 0.04, e, s + 0.04],
    [t + 0.96, e + 0.96, s + 0.96],
    [t + 0.96, e, s + 0.96],
  ),
    c(
      [t + 0.04, e + 0.96, s + 0.96],
      [t + 0.04, e, s + 0.96],
      [t + 0.96, e + 0.96, s + 0.04],
      [t + 0.96, e, s + 0.04],
    ),
    c(
      [t + 0.22, e + 0.76, s + 0.5],
      [t + 0.22, e + 0.02, s + 0.5],
      [t + 0.78, e + 0.76, s + 0.5],
      [t + 0.78, e + 0.02, s + 0.5],
    ),
    c(
      [t + 0.5, e + 0.76, s + 0.22],
      [t + 0.5, e + 0.02, s + 0.22],
      [t + 0.5, e + 0.76, s + 0.78],
      [t + 0.5, e + 0.02, s + 0.78],
    ),
    (r.animMode = 0));
}
function R0(r, t, e, s, n, i, h) {
  const c = n & 7;
  let o = 0,
    a = 0,
    u = 0;
  c === 1
    ? (o = -0.28)
    : c === 2
      ? (o = 0.28)
      : c === 3
        ? (u = -0.28)
        : c === 4
          ? (u = 0.28)
          : c === 5 && (a = 0.14);
  const d = t + 0.5 + o,
    l = s + 0.5 + u,
    p = e + 0.13 + a,
    m = e + 0.7 + a;
  (r.box(
    d - 0.2,
    p,
    l - 0.2,
    d + 0.2,
    m,
    l + 0.2,
    { top: i, side: i, bottom: i },
    h,
  ),
    r.box(
      d - 0.27,
      p - 0.05,
      l - 0.27,
      d + 0.27,
      p + 0.04,
      l + 0.27,
      { top: i, side: i, bottom: i },
      h,
    ),
    r.box(
      d - 0.27,
      m - 0.04,
      l - 0.27,
      d + 0.27,
      m + 0.05,
      l + 0.27,
      { top: i, side: i, bottom: i },
      h,
    ));
  const _ = c === 5 ? e + 1 : m + 0.22,
    y = { top: i, side: i, bottom: i };
  if (
    (r.box(d - 0.035, m, l - 0.035, d + 0.035, _, l + 0.035, y, h),
    c >= 1 && c <= 4)
  ) {
    const E = _ - 0.07,
      M = _;
    if (c === 1 || c === 2) {
      const g = c === 1 ? t : t + 1,
        L = c === 1 ? 1 : -1;
      (r.box(
        Math.min(g, g + L * 0.06),
        m - 0.08,
        l - 0.1,
        Math.max(g, g + L * 0.06),
        M + 0.08,
        l + 0.1,
        y,
        h,
      ),
        r.box(
          Math.min(g, d),
          E,
          l - 0.035,
          Math.max(g, d) + (c === 2 ? 0 : 0.035),
          M,
          l + 0.035,
          y,
          h,
        ));
    } else {
      const g = c === 3 ? s : s + 1,
        L = c === 3 ? 1 : -1;
      (r.box(
        d - 0.1,
        m - 0.08,
        Math.min(g, g + L * 0.06),
        d + 0.1,
        M + 0.08,
        Math.max(g, g + L * 0.06),
        y,
        h,
      ),
        r.box(
          d - 0.035,
          E,
          Math.min(g, l),
          d + 0.035,
          M,
          Math.max(g, l) + (c === 4 ? 0 : 0.035),
          y,
          h,
        ));
    }
  }
}
function T0(r, t, e, s, n, i, h) {
  for (const c of Lr((o, a, u) => t.getBlock(o, a, u), e, s, n))
    for (const o of Ir(c))
      r.rawQuad(
        o.points.map((a) => [e + a[0], s + a[1], n + a[2]]),
        o.normal,
        i,
        h,
      );
}
function b0(r, t, e, s, n, i, h) {
  const c = { top: i, side: i, bottom: i },
    { post1: o, post2: a, rail1: u, rail2: d, railsY: l } = Er;
  r.boxUV(e + o, s, n + o, e + a, s + 1, n + a, c, h, e, s, n);
  const p = (m, _) => {
    if (li(t.getBlock(e + m, s, n + _)))
      for (const [y, E] of l)
        if (m !== 0) {
          const M = m < 0 ? e : e + a,
            g = m < 0 ? e + o : e + 1;
          r.boxUV(M, s + y, n + u, g, s + E, n + d, c, h, e, s, n);
        } else {
          const M = _ < 0 ? n : n + a,
            g = _ < 0 ? n + o : n + 1;
          r.boxUV(e + u, s + y, M, e + d, s + E, g, c, h, e, s, n);
        }
  };
  (p(-1, 0), p(1, 0), p(0, -1), p(0, 1));
}
function O0(r, t, e, s, n, i, h) {
  const c = { top: i, side: i, bottom: i },
    o = (d, l, p, m, _, y) =>
      r.boxUV(e + d, s + l, n + p, e + m, s + _, n + y, c, h, e, s, n),
    a = 1 / 16;
  (o(6.5 * a, 0, 6.5 * a, 9.5 * a, 0.92, 9.5 * a),
    o(6 * a, 0.92, 6 * a, 10 * a, 0.98, 10 * a),
    o(7 * a, 0.98, 7 * a, 9 * a, 1.06, 9 * a),
    o(7.5 * a, 1.06, 7.5 * a, 8.5 * a, 1.13, 8.5 * a));
  const u = (d, l) => {
    (o(d - 0.5 * a, 0.05, l - 0.5 * a, d + 0.5 * a, 0.86, l + 0.5 * a),
      o(d - 0.9 * a, 0.86, l - 0.9 * a, d + 0.9 * a, 0.9, l + 0.9 * a),
      o(d - 0.45 * a, 0.9, l - 0.45 * a, d + 0.45 * a, 0.98, l + 0.45 * a));
  };
  for (const [d, l] of [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]) {
    if (!li(t.getBlock(e + d, s, n + l))) continue;
    for (const [m, _] of [
      [0.14, 0.19],
      [0.74, 0.79],
    ])
      d !== 0
        ? o(d < 0 ? 0 : 9.5 * a, m, 7.5 * a, d < 0 ? 6.5 * a : 1, _, 8.5 * a)
        : o(7.5 * a, m, l < 0 ? 0 : 9.5 * a, 8.5 * a, _, l < 0 ? 6.5 * a : 1);
    const p = d !== 0 ? (m) => u(m, 0.5) : (m) => u(0.5, m);
    d < 0 || l < 0 ? p(0.25) : (p(0.75), p(1));
  }
}
function L0(r, t, e, s, n, i, h) {
  const c = (d, l, p = 0.013) => {
      const m = new C(l[0] - d[0], l[1] - d[1], l[2] - d[2]).normalize(),
        _ = new C(0, Math.abs(m.y) < 0.9 ? 1 : 0, Math.abs(m.y) < 0.9 ? 0 : 1)
          .cross(m)
          .normalize(),
        y = m.clone().cross(_).normalize(),
        E = (M, g) => [
          M[0] + p * (_.x * Math.cos(g) + y.x * Math.sin(g)),
          M[1] + p * (_.y * Math.cos(g) + y.y * Math.sin(g)),
          M[2] + p * (_.z * Math.cos(g) + y.z * Math.sin(g)),
        ];
      for (let M = 0; M < 4; M++) {
        const g = (M * Math.PI) / 2,
          L = g + Math.PI / 2,
          I = _.clone()
            .multiplyScalar(Math.cos(g + Math.PI / 4))
            .addScaledVector(y, Math.sin(g + Math.PI / 4));
        r.rawQuad([E(d, g), E(d, L), E(l, g), E(l, L)], [I.x, I.y, I.z], i, h);
      }
    },
    o =
      t.getBlock(e - 1, s, n) === f.BARBED_WIRE ||
      t.getBlock(e + 1, s, n) === f.BARBED_WIRE,
    a =
      t.getBlock(e, s, n - 1) === f.BARBED_WIRE ||
      t.getBlock(e, s, n + 1) === f.BARBED_WIRE,
    u = (d) => {
      const l = (p) => {
        const m = p * Math.PI * 4,
          _ = 0.34;
        return d
          ? [e + p, s + 0.46 + Math.sin(m) * _, n + 0.5 + Math.cos(m) * _]
          : [e + 0.5 + Math.cos(m) * _, s + 0.46 + Math.sin(m) * _, n + p];
      };
      for (let p = 0; p < 48; p++) {
        const m = l(p / 48),
          _ = l((p + 1) / 48);
        (c(m, _),
          p % 6 === 3 &&
            (c(
              [m[0] - 0.065, m[1] - 0.055, m[2] - 0.025],
              [m[0] + 0.065, m[1] + 0.055, m[2] + 0.025],
              0.01,
            ),
            c(
              [m[0] - 0.025, m[1] - 0.055, m[2] + 0.065],
              [m[0] + 0.025, m[1] + 0.055, m[2] - 0.065],
              0.01,
            )));
      }
      for (const p of [0.22, 0.65])
        c(
          d ? [e, s + p, n + 0.5] : [e + 0.5, s + p, n],
          d ? [e + 1, s + p, n + 0.5] : [e + 0.5, s + p, n + 1],
          0.012,
        );
    };
  (u(o || !a), o && a && u(!1));
}
const I0 = (r) => (r === f.METAL_DOOR ? Se : r === f.ARMORED_DOOR ? ge : 35);
