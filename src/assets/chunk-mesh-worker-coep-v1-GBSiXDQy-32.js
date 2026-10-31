// chunk-mesh-worker-coep-v1-GBSiXDQy 32 — math
// Lines 9912-10257 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
function x0(r, t, e, s, n, i) {
  const c = T[p.COBBLE].tex[0],
    h = [];
  for (const [o, a, u, d] of [
    [0.38, 0.4, 0.42, 0.075],
    [0.62, 0.36, 0.3, 0.07],
    [0.5, 0.64, 0.22, 0.08],
  ]) {
    const l = t + o,
      f = s + a;
    (r.box(
      l - d,
      e,
      f - d,
      l + d,
      e + u,
      f + d,
      { top: n, side: n, bottom: n },
      i,
    ),
      r.box(
        l - 0.012,
        e + u,
        f - 0.012,
        l + 0.012,
        e + u + 0.05,
        f + 0.012,
        { top: c, side: c, bottom: c },
        i,
      ),
      h.push([l, e + u + 0.02, f]));
  }
  r.animMode = 1;
  for (const [o, a, u] of h)
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
function M0(r, t, e, s, n) {
  ((r.animMode = pn), bi(r, t, e, s, un, n, 0.46), (r.animMode = 0));
  const i = 0.22 + ((t * 5 + s * 3) & 3) * 0.015,
    c = t + 0.5 + ((t * 7 + s) & 1 ? 0.06 : -0.06),
    h = s + 0.5;
  r.box(
    c - i,
    e,
    h - i,
    c + i,
    e + i * 1.7,
    h + i,
    { top: Ls, side: Ft, bottom: Ft },
    n,
    !0,
  );
  const o = T[p.LOG].tex[1];
  r.box(
    c - 0.03,
    e + i * 1.7,
    h - 0.03,
    c + 0.03,
    e + i * 1.7 + 0.08,
    h + 0.03,
    { top: o, side: o, bottom: o },
    n,
  );
}
function S0(r, t, e, s, n, i) {
  r.animMode = 1;
  const h = (o, a, u, d) => {
    r.rawQuad([o, a, u, d], [0, 0, 1], n, i, !0);
  };
  (h(
    [t + 0.04, e + 0.96, s + 0.04],
    [t + 0.04, e, s + 0.04],
    [t + 0.96, e + 0.96, s + 0.96],
    [t + 0.96, e, s + 0.96],
  ),
    h(
      [t + 0.04, e + 0.96, s + 0.96],
      [t + 0.04, e, s + 0.96],
      [t + 0.96, e + 0.96, s + 0.04],
      [t + 0.96, e, s + 0.04],
    ),
    h(
      [t + 0.22, e + 0.76, s + 0.5],
      [t + 0.22, e + 0.02, s + 0.5],
      [t + 0.78, e + 0.76, s + 0.5],
      [t + 0.78, e + 0.02, s + 0.5],
    ),
    h(
      [t + 0.5, e + 0.76, s + 0.22],
      [t + 0.5, e + 0.02, s + 0.22],
      [t + 0.5, e + 0.76, s + 0.78],
      [t + 0.5, e + 0.02, s + 0.78],
    ),
    (r.animMode = 0));
}
function g0(r, t, e, s, n, i, c) {
  const h = n & 7;
  let o = 0,
    a = 0,
    u = 0;
  h === 1
    ? (o = -0.28)
    : h === 2
      ? (o = 0.28)
      : h === 3
        ? (u = -0.28)
        : h === 4
          ? (u = 0.28)
          : h === 5 && (a = 0.14);
  const d = t + 0.5 + o,
    l = s + 0.5 + u,
    f = e + 0.13 + a,
    m = e + 0.7 + a;
  (r.box(
    d - 0.2,
    f,
    l - 0.2,
    d + 0.2,
    m,
    l + 0.2,
    { top: i, side: i, bottom: i },
    c,
  ),
    r.box(
      d - 0.27,
      f - 0.05,
      l - 0.27,
      d + 0.27,
      f + 0.04,
      l + 0.27,
      { top: i, side: i, bottom: i },
      c,
    ),
    r.box(
      d - 0.27,
      m - 0.04,
      l - 0.27,
      d + 0.27,
      m + 0.05,
      l + 0.27,
      { top: i, side: i, bottom: i },
      c,
    ));
  const _ = h === 5 ? e + 1 : m + 0.22,
    g = { top: i, side: i, bottom: i };
  if (
    (r.box(d - 0.035, m, l - 0.035, d + 0.035, _, l + 0.035, g, c),
    h >= 1 && h <= 4)
  ) {
    const y = _ - 0.07,
      R = _;
    if (h === 1 || h === 2) {
      const E = h === 1 ? t : t + 1,
        x = h === 1 ? 1 : -1;
      (r.box(
        Math.min(E, E + x * 0.06),
        m - 0.08,
        l - 0.1,
        Math.max(E, E + x * 0.06),
        R + 0.08,
        l + 0.1,
        g,
        c,
      ),
        r.box(
          Math.min(E, d),
          y,
          l - 0.035,
          Math.max(E, d) + (h === 2 ? 0 : 0.035),
          R,
          l + 0.035,
          g,
          c,
        ));
    } else {
      const E = h === 3 ? s : s + 1,
        x = h === 3 ? 1 : -1;
      (r.box(
        d - 0.1,
        m - 0.08,
        Math.min(E, E + x * 0.06),
        d + 0.1,
        R + 0.08,
        Math.max(E, E + x * 0.06),
        g,
        c,
      ),
        r.box(
          d - 0.035,
          y,
          Math.min(E, l),
          d + 0.035,
          R,
          Math.max(E, l) + (h === 4 ? 0 : 0.035),
          g,
          c,
        ));
    }
  }
}
function R0(r, t, e, s, n, i, c) {
  for (const h of Tr((o, a, u) => t.getBlock(o, a, u), e, s, n))
    for (const o of br(h))
      r.rawQuad(
        o.points.map((a) => [e + a[0], s + a[1], n + a[2]]),
        o.normal,
        i,
        c,
      );
}
function T0(r, t, e, s, n, i, c) {
  const h = { top: i, side: i, bottom: i },
    { post1: o, post2: a, rail1: u, rail2: d, railsY: l } = pr;
  r.boxUV(e + o, s, n + o, e + a, s + 1, n + a, h, c, e, s, n);
  const f = (m, _) => {
    if (ui(t.getBlock(e + m, s, n + _)))
      for (const [g, y] of l)
        if (m !== 0) {
          const R = m < 0 ? e : e + a,
            E = m < 0 ? e + o : e + 1;
          r.boxUV(R, s + g, n + u, E, s + y, n + d, h, c, e, s, n);
        } else {
          const R = _ < 0 ? n : n + a,
            E = _ < 0 ? n + o : n + 1;
          r.boxUV(e + u, s + g, R, e + d, s + y, E, h, c, e, s, n);
        }
  };
  (f(-1, 0), f(1, 0), f(0, -1), f(0, 1));
}
function b0(r, t, e, s, n, i, c) {
  const h = { top: i, side: i, bottom: i },
    o = (d, l, f, m, _, g) =>
      r.boxUV(e + d, s + l, n + f, e + m, s + _, n + g, h, c, e, s, n),
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
    if (!ui(t.getBlock(e + d, s, n + l))) continue;
    for (const [m, _] of [
      [0.14, 0.19],
      [0.74, 0.79],
    ])
      d !== 0
        ? o(d < 0 ? 0 : 9.5 * a, m, 7.5 * a, d < 0 ? 6.5 * a : 1, _, 8.5 * a)
        : o(7.5 * a, m, l < 0 ? 0 : 9.5 * a, 8.5 * a, _, l < 0 ? 6.5 * a : 1);
    const f = d !== 0 ? (m) => u(m, 0.5) : (m) => u(0.5, m);
    d < 0 || l < 0 ? f(0.25) : (f(0.75), f(1));
  }
}
function O0(r, t, e, s, n, i, c) {
  const h = (d, l, f = 0.013) => {
      const m = new C(l[0] - d[0], l[1] - d[1], l[2] - d[2]).normalize(),
        _ = new C(0, Math.abs(m.y) < 0.9 ? 1 : 0, Math.abs(m.y) < 0.9 ? 0 : 1)
          .cross(m)
          .normalize(),
        g = m.clone().cross(_).normalize(),
        y = (R, E) => [
          R[0] + f * (_.x * Math.cos(E) + g.x * Math.sin(E)),
          R[1] + f * (_.y * Math.cos(E) + g.y * Math.sin(E)),
          R[2] + f * (_.z * Math.cos(E) + g.z * Math.sin(E)),
        ];
      for (let R = 0; R < 4; R++) {
        const E = (R * Math.PI) / 2,
          x = E + Math.PI / 2,
          S = _.clone()
            .multiplyScalar(Math.cos(E + Math.PI / 4))
            .addScaledVector(g, Math.sin(E + Math.PI / 4));
        r.rawQuad([y(d, E), y(d, x), y(l, E), y(l, x)], [S.x, S.y, S.z], i, c);
      }
    },
    o =
      t.getBlock(e - 1, s, n) === p.BARBED_WIRE ||
      t.getBlock(e + 1, s, n) === p.BARBED_WIRE,
    a =
      t.getBlock(e, s, n - 1) === p.BARBED_WIRE ||
      t.getBlock(e, s, n + 1) === p.BARBED_WIRE,
    u = (d) => {
      const l = (f) => {
        const m = f * Math.PI * 4,
          _ = 0.34;
        return d
          ? [e + f, s + 0.46 + Math.sin(m) * _, n + 0.5 + Math.cos(m) * _]
          : [e + 0.5 + Math.cos(m) * _, s + 0.46 + Math.sin(m) * _, n + f];
      };
      for (let f = 0; f < 48; f++) {
        const m = l(f / 48),
          _ = l((f + 1) / 48);
        (h(m, _),
          f % 6 === 3 &&
            (h(
              [m[0] - 0.065, m[1] - 0.055, m[2] - 0.025],
              [m[0] + 0.065, m[1] + 0.055, m[2] + 0.025],
              0.01,
            ),
            h(
              [m[0] - 0.025, m[1] - 0.055, m[2] + 0.065],
              [m[0] + 0.025, m[1] + 0.055, m[2] - 0.065],
              0.01,
            )));
      }
      for (const f of [0.22, 0.65])
        h(
          d ? [e, s + f, n + 0.5] : [e + 0.5, s + f, n],
          d ? [e + 1, s + f, n + 0.5] : [e + 0.5, s + f, n + 1],
          0.012,
        );
    };
  (u(o || !a), o && a && u(!1));
}
const L0 = (r) => (r === p.METAL_DOOR ? Ae : r === p.ARMORED_DOOR ? ye : 35);
