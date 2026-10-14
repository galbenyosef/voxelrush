// index-Dp6GxvJu 57 — math
// Lines 45738-46084 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function zW(n, e, t, i, s, o) {
  const a = de[v.COBBLE].tex[0],
    r = [];
  for (const [l, c, h, d] of [
    [0.38, 0.4, 0.42, 0.075],
    [0.62, 0.36, 0.3, 0.07],
    [0.5, 0.64, 0.22, 0.08],
  ]) {
    const u = e + l,
      f = i + c;
    (n.box(
      u - d,
      t,
      f - d,
      u + d,
      t + h,
      f + d,
      { top: s, side: s, bottom: s },
      o,
    ),
      n.box(
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
  n.animMode = 1;
  for (const [l, c, h] of r)
    (n.rawQuad(
      [
        [l - 0.065, c + 0.2, h],
        [l - 0.065, c, h],
        [l + 0.065, c + 0.2, h],
        [l + 0.065, c, h],
      ],
      [0, 0, 1],
      s,
      1,
      !0,
    ),
      n.rawQuad(
        [
          [l, c + 0.2, h - 0.065],
          [l, c, h - 0.065],
          [l, c + 0.2, h + 0.065],
          [l, c, h + 0.065],
        ],
        [1, 0, 0],
        s,
        1,
        !0,
      ));
  n.animMode = 0;
}
function UW(n, e, t, i, s) {
  ((n.animMode = t4), zk(n, e, t, i, IS, s, 0.46), (n.animMode = 0));
  const o = 0.22 + ((e * 5 + i * 3) & 3) * 0.015,
    a = e + 0.5 + ((e * 7 + i) & 1 ? 0.06 : -0.06),
    r = i + 0.5;
  n.box(
    a - o,
    t,
    r - o,
    a + o,
    t + o * 1.7,
    r + o,
    { top: yy, side: Yl, bottom: Yl },
    s,
    !0,
  );
  const l = de[v.LOG].tex[1];
  n.box(
    a - 0.03,
    t + o * 1.7,
    r - 0.03,
    a + 0.03,
    t + o * 1.7 + 0.08,
    r + 0.03,
    { top: l, side: l, bottom: l },
    s,
  );
}
function FW(n, e, t, i, s, o) {
  n.animMode = 1;
  const r = (l, c, h, d) => {
    n.rawQuad([l, c, h, d], [0, 0, 1], s, o, !0);
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
    (n.animMode = 0));
}
function GW(n, e, t, i, s, o, a) {
  const r = s & 7;
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
  (n.box(
    d - 0.2,
    f,
    u - 0.2,
    d + 0.2,
    p,
    u + 0.2,
    { top: o, side: o, bottom: o },
    a,
  ),
    n.box(
      d - 0.27,
      f - 0.05,
      u - 0.27,
      d + 0.27,
      f + 0.04,
      u + 0.27,
      { top: o, side: o, bottom: o },
      a,
    ),
    n.box(
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
    y = { top: o, side: o, bottom: o };
  if (
    (n.box(d - 0.035, p, u - 0.035, d + 0.035, m, u + 0.035, y, a),
    r >= 1 && r <= 4)
  ) {
    const g = m - 0.07,
      b = m;
    if (r === 1 || r === 2) {
      const S = r === 1 ? e : e + 1,
        M = r === 1 ? 1 : -1;
      (n.box(
        Math.min(S, S + M * 0.06),
        p - 0.08,
        u - 0.1,
        Math.max(S, S + M * 0.06),
        b + 0.08,
        u + 0.1,
        y,
        a,
      ),
        n.box(
          Math.min(S, d),
          g,
          u - 0.035,
          Math.max(S, d) + (r === 2 ? 0 : 0.035),
          b,
          u + 0.035,
          y,
          a,
        ));
    } else {
      const S = r === 3 ? i : i + 1,
        M = r === 3 ? 1 : -1;
      (n.box(
        d - 0.1,
        p - 0.08,
        Math.min(S, S + M * 0.06),
        d + 0.1,
        b + 0.08,
        Math.max(S, S + M * 0.06),
        y,
        a,
      ),
        n.box(
          d - 0.035,
          g,
          Math.min(S, u),
          d + 0.035,
          b,
          Math.max(S, u) + (r === 4 ? 0 : 0.035),
          y,
          a,
        ));
    }
  }
}
function WW(n, e, t, i, s, o, a) {
  for (const r of bk((l, c, h) => e.getBlock(l, c, h), t, i, s))
    for (const l of wk(r))
      n.rawQuad(
        l.points.map((c) => [t + c[0], i + c[1], s + c[2]]),
        l.normal,
        o,
        a,
      );
}
function VW(n, e, t, i, s, o, a) {
  const r = { top: o, side: o, bottom: o },
    { post1: l, post2: c, rail1: h, rail2: d, railsY: u } = EC;
  n.boxUV(t + l, i, s + l, t + c, i + 1, s + c, r, a, t, i, s);
  const f = (p, m) => {
    if (PS(e.getBlock(t + p, i, s + m)))
      for (const [y, g] of u)
        if (p !== 0) {
          const b = p < 0 ? t : t + c,
            S = p < 0 ? t + l : t + 1;
          n.boxUV(b, i + y, s + h, S, i + g, s + d, r, a, t, i, s);
        } else {
          const b = m < 0 ? s : s + c,
            S = m < 0 ? s + l : s + 1;
          n.boxUV(t + h, i + y, b, t + d, i + g, S, r, a, t, i, s);
        }
  };
  (f(-1, 0), f(1, 0), f(0, -1), f(0, 1));
}
function $W(n, e, t, i, s, o, a) {
  const r = { top: o, side: o, bottom: o },
    l = (d, u, f, p, m, y) =>
      n.boxUV(t + d, i + u, s + f, t + p, i + m, s + y, r, a, t, i, s),
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
    if (!PS(e.getBlock(t + d, i, s + u))) continue;
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
function qW(n, e, t, i, s, o, a) {
  const r = (d, u, f = 0.013) => {
      const p = new k(u[0] - d[0], u[1] - d[1], u[2] - d[2]).normalize(),
        m = new k(0, Math.abs(p.y) < 0.9 ? 1 : 0, Math.abs(p.y) < 0.9 ? 0 : 1)
          .cross(p)
          .normalize(),
        y = p.clone().cross(m).normalize(),
        g = (b, S) => [
          b[0] + f * (m.x * Math.cos(S) + y.x * Math.sin(S)),
          b[1] + f * (m.y * Math.cos(S) + y.y * Math.sin(S)),
          b[2] + f * (m.z * Math.cos(S) + y.z * Math.sin(S)),
        ];
      for (let b = 0; b < 4; b++) {
        const S = (b * Math.PI) / 2,
          M = S + Math.PI / 2,
          x = m
            .clone()
            .multiplyScalar(Math.cos(S + Math.PI / 4))
            .addScaledVector(y, Math.sin(S + Math.PI / 4));
        n.rawQuad([g(d, S), g(d, M), g(u, S), g(u, M)], [x.x, x.y, x.z], o, a);
      }
    },
    l =
      e.getBlock(t - 1, i, s) === v.BARBED_WIRE ||
      e.getBlock(t + 1, i, s) === v.BARBED_WIRE,
    c =
      e.getBlock(t, i, s - 1) === v.BARBED_WIRE ||
      e.getBlock(t, i, s + 1) === v.BARBED_WIRE,
    h = (d) => {
      const u = (f) => {
        const p = f * Math.PI * 4,
          m = 0.34;
        return d
          ? [t + f, i + 0.46 + Math.sin(p) * m, s + 0.5 + Math.cos(p) * m]
          : [t + 0.5 + Math.cos(p) * m, i + 0.46 + Math.sin(p) * m, s + f];
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
          d ? [t, i + f, s + 0.5] : [t + 0.5, i + f, s],
          d ? [t + 1, i + f, s + 0.5] : [t + 0.5, i + f, s + 1],
          0.012,
        );
    };
  (h(l || !c), l && c && h(!1));
}
const Uk = (n) => (n === v.METAL_DOOR ? Bl : n === v.ARMORED_DOOR ? Hl : 35);
