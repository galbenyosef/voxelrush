// index-BeUlFSPp 74 — math
// Lines 52904-53250 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Lj(s, e, t, i, n, o) {
  const a = le[v.COBBLE].tex[0],
    r = [];
  for (const [l, c, h, d] of [
    [0.38, 0.4, 0.42, 0.075],
    [0.62, 0.36, 0.3, 0.07],
    [0.5, 0.64, 0.22, 0.08],
  ]) {
    const u = e + l,
      f = i + c;
    (s.box(
      u - d,
      t,
      f - d,
      u + d,
      t + h,
      f + d,
      { top: n, side: n, bottom: n },
      o,
    ),
      s.box(
        u - 0.012,
        t + h,
        f - 0.012,
        u + 0.012,
        t + h + 0.05,
        f + 0.012,
        { top: a, side: a, bottom: a },
        o,
      ),
      r.push([u, t + h + 0.02, f]));
  }
  s.animMode = 1;
  for (const [l, c, h] of r)
    (s.rawQuad(
      [
        [l - 0.065, c + 0.2, h],
        [l - 0.065, c, h],
        [l + 0.065, c + 0.2, h],
        [l + 0.065, c, h],
      ],
      [0, 0, 1],
      n,
      1,
      !0,
    ),
      s.rawQuad(
        [
          [l, c + 0.2, h - 0.065],
          [l, c, h - 0.065],
          [l, c + 0.2, h + 0.065],
          [l, c, h + 0.065],
        ],
        [1, 0, 0],
        n,
        1,
        !0,
      ));
  s.animMode = 0;
}
function Ij(s, e, t, i, n) {
  ((s.animMode = YA), GO(s, e, t, i, hA, n, 0.46), (s.animMode = 0));
  const o = 0.22 + ((e * 5 + i * 3) & 3) * 0.015,
    a = e + 0.5 + ((e * 7 + i) & 1 ? 0.06 : -0.06),
    r = i + 0.5;
  s.box(
    a - o,
    t,
    r - o,
    a + o,
    t + o * 1.7,
    r + o,
    { top: w5, side: Bc, bottom: Bc },
    n,
    !0,
  );
  const l = le[v.LOG].tex[1];
  s.box(
    a - 0.03,
    t + o * 1.7,
    r - 0.03,
    a + 0.03,
    t + o * 1.7 + 0.08,
    r + 0.03,
    { top: l, side: l, bottom: l },
    n,
  );
}
function Pj(s, e, t, i, n, o) {
  s.animMode = 1;
  const r = (l, c, h, d) => {
    s.rawQuad([l, c, h, d], [0, 0, 1], n, o, !0);
  };
  (r(
    [e + 0.04, t + 0.96, i + 0.04],
    [e + 0.04, t, i + 0.04],
    [e + 0.96, t + 0.96, i + 0.96],
    [e + 0.96, t, i + 0.96],
  ),
    r(
      [e + 0.04, t + 0.96, i + 0.96],
      [e + 0.04, t, i + 0.96],
      [e + 0.96, t + 0.96, i + 0.04],
      [e + 0.96, t, i + 0.04],
    ),
    r(
      [e + 0.22, t + 0.76, i + 0.5],
      [e + 0.22, t + 0.02, i + 0.5],
      [e + 0.78, t + 0.76, i + 0.5],
      [e + 0.78, t + 0.02, i + 0.5],
    ),
    r(
      [e + 0.5, t + 0.76, i + 0.22],
      [e + 0.5, t + 0.02, i + 0.22],
      [e + 0.5, t + 0.76, i + 0.78],
      [e + 0.5, t + 0.02, i + 0.78],
    ),
    (s.animMode = 0));
}
function Oj(s, e, t, i, n, o, a) {
  const r = n & 7;
  let l = 0,
    c = 0,
    h = 0;
  r === 1
    ? (l = -0.28)
    : r === 2
      ? (l = 0.28)
      : r === 3
        ? (h = -0.28)
        : r === 4
          ? (h = 0.28)
          : r === 5 && (c = 0.14);
  const d = e + 0.5 + l,
    u = i + 0.5 + h,
    f = t + 0.13 + c,
    p = t + 0.7 + c;
  (s.box(
    d - 0.2,
    f,
    u - 0.2,
    d + 0.2,
    p,
    u + 0.2,
    { top: o, side: o, bottom: o },
    a,
  ),
    s.box(
      d - 0.27,
      f - 0.05,
      u - 0.27,
      d + 0.27,
      f + 0.04,
      u + 0.27,
      { top: o, side: o, bottom: o },
      a,
    ),
    s.box(
      d - 0.27,
      p - 0.04,
      u - 0.27,
      d + 0.27,
      p + 0.05,
      u + 0.27,
      { top: o, side: o, bottom: o },
      a,
    ));
  const m = r === 5 ? t + 1 : p + 0.22,
    g = { top: o, side: o, bottom: o };
  if (
    (s.box(d - 0.035, p, u - 0.035, d + 0.035, m, u + 0.035, g, a),
    r >= 1 && r <= 4)
  ) {
    const y = m - 0.07,
      b = m;
    if (r === 1 || r === 2) {
      const S = r === 1 ? e : e + 1,
        M = r === 1 ? 1 : -1;
      (s.box(
        Math.min(S, S + M * 0.06),
        p - 0.08,
        u - 0.1,
        Math.max(S, S + M * 0.06),
        b + 0.08,
        u + 0.1,
        g,
        a,
      ),
        s.box(
          Math.min(S, d),
          y,
          u - 0.035,
          Math.max(S, d) + (r === 2 ? 0 : 0.035),
          b,
          u + 0.035,
          g,
          a,
        ));
    } else {
      const S = r === 3 ? i : i + 1,
        M = r === 3 ? 1 : -1;
      (s.box(
        d - 0.1,
        p - 0.08,
        Math.min(S, S + M * 0.06),
        d + 0.1,
        b + 0.08,
        Math.max(S, S + M * 0.06),
        g,
        a,
      ),
        s.box(
          d - 0.035,
          y,
          Math.min(S, u),
          d + 0.035,
          b,
          Math.max(S, u) + (r === 4 ? 0 : 0.035),
          g,
          a,
        ));
    }
  }
}
function Nj(s, e, t, i, n, o, a) {
  for (const r of kO((l, c, h) => e.getBlock(l, c, h), t, i, n))
    for (const l of CO(r))
      s.rawQuad(
        l.points.map((c) => [t + c[0], i + c[1], n + c[2]]),
        l.normal,
        o,
        a,
      );
}
function Dj(s, e, t, i, n, o, a) {
  const r = { top: o, side: o, bottom: o },
    { post1: l, post2: c, rail1: h, rail2: d, railsY: u } = FI;
  s.boxUV(t + l, i, n + l, t + c, i + 1, n + c, r, a, t, i, n);
  const f = (p, m) => {
    if (dA(e.getBlock(t + p, i, n + m)))
      for (const [g, y] of u)
        if (p !== 0) {
          const b = p < 0 ? t : t + c,
            S = p < 0 ? t + l : t + 1;
          s.boxUV(b, i + g, n + h, S, i + y, n + d, r, a, t, i, n);
        } else {
          const b = m < 0 ? n : n + c,
            S = m < 0 ? n + l : n + 1;
          s.boxUV(t + h, i + g, b, t + d, i + y, S, r, a, t, i, n);
        }
  };
  (f(-1, 0), f(1, 0), f(0, -1), f(0, 1));
}
function Hj(s, e, t, i, n, o, a) {
  const r = { top: o, side: o, bottom: o },
    l = (d, u, f, p, m, g) =>
      s.boxUV(t + d, i + u, n + f, t + p, i + m, n + g, r, a, t, i, n),
    c = 1 / 16;
  (l(6.5 * c, 0, 6.5 * c, 9.5 * c, 0.92, 9.5 * c),
    l(6 * c, 0.92, 6 * c, 10 * c, 0.98, 10 * c),
    l(7 * c, 0.98, 7 * c, 9 * c, 1.06, 9 * c),
    l(7.5 * c, 1.06, 7.5 * c, 8.5 * c, 1.13, 8.5 * c));
  const h = (d, u) => {
    (l(d - 0.5 * c, 0.05, u - 0.5 * c, d + 0.5 * c, 0.86, u + 0.5 * c),
      l(d - 0.9 * c, 0.86, u - 0.9 * c, d + 0.9 * c, 0.9, u + 0.9 * c),
      l(d - 0.45 * c, 0.9, u - 0.45 * c, d + 0.45 * c, 0.98, u + 0.45 * c));
  };
  for (const [d, u] of [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]) {
    if (!dA(e.getBlock(t + d, i, n + u))) continue;
    for (const [p, m] of [
      [0.14, 0.19],
      [0.74, 0.79],
    ])
      d !== 0
        ? l(d < 0 ? 0 : 9.5 * c, p, 7.5 * c, d < 0 ? 6.5 * c : 1, m, 8.5 * c)
        : l(7.5 * c, p, u < 0 ? 0 : 9.5 * c, 8.5 * c, m, u < 0 ? 6.5 * c : 1);
    const f = d !== 0 ? (p) => h(p, 0.5) : (p) => h(0.5, p);
    d < 0 || u < 0 ? f(0.25) : (f(0.75), f(1));
  }
}
function Bj(s, e, t, i, n, o, a) {
  const r = (d, u, f = 0.013) => {
      const p = new k(u[0] - d[0], u[1] - d[1], u[2] - d[2]).normalize(),
        m = new k(0, Math.abs(p.y) < 0.9 ? 1 : 0, Math.abs(p.y) < 0.9 ? 0 : 1)
          .cross(p)
          .normalize(),
        g = p.clone().cross(m).normalize(),
        y = (b, S) => [
          b[0] + f * (m.x * Math.cos(S) + g.x * Math.sin(S)),
          b[1] + f * (m.y * Math.cos(S) + g.y * Math.sin(S)),
          b[2] + f * (m.z * Math.cos(S) + g.z * Math.sin(S)),
        ];
      for (let b = 0; b < 4; b++) {
        const S = (b * Math.PI) / 2,
          M = S + Math.PI / 2,
          E = m
            .clone()
            .multiplyScalar(Math.cos(S + Math.PI / 4))
            .addScaledVector(g, Math.sin(S + Math.PI / 4));
        s.rawQuad([y(d, S), y(d, M), y(u, S), y(u, M)], [E.x, E.y, E.z], o, a);
      }
    },
    l =
      e.getBlock(t - 1, i, n) === v.BARBED_WIRE ||
      e.getBlock(t + 1, i, n) === v.BARBED_WIRE,
    c =
      e.getBlock(t, i, n - 1) === v.BARBED_WIRE ||
      e.getBlock(t, i, n + 1) === v.BARBED_WIRE,
    h = (d) => {
      const u = (f) => {
        const p = f * Math.PI * 4,
          m = 0.34;
        return d
          ? [t + f, i + 0.46 + Math.sin(p) * m, n + 0.5 + Math.cos(p) * m]
          : [t + 0.5 + Math.cos(p) * m, i + 0.46 + Math.sin(p) * m, n + f];
      };
      for (let f = 0; f < 48; f++) {
        const p = u(f / 48),
          m = u((f + 1) / 48);
        (r(p, m),
          f % 6 === 3 &&
            (r(
              [p[0] - 0.065, p[1] - 0.055, p[2] - 0.025],
              [p[0] + 0.065, p[1] + 0.055, p[2] + 0.025],
              0.01,
            ),
            r(
              [p[0] - 0.025, p[1] - 0.055, p[2] + 0.065],
              [p[0] + 0.025, p[1] + 0.055, p[2] - 0.065],
              0.01,
            )));
      }
      for (const f of [0.22, 0.65])
        r(
          d ? [t, i + f, n + 0.5] : [t + 0.5, i + f, n],
          d ? [t + 1, i + f, n + 0.5] : [t + 0.5, i + f, n + 1],
          0.012,
        );
    };
  (h(l || !c), l && c && h(!1));
}
const WO = (s) => (s === v.METAL_DOOR ? xc : s === v.ARMORED_DOOR ? _c : 35);
