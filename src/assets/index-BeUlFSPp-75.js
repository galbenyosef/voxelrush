// index-BeUlFSPp 75 — math
// Lines 53251-53466 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function zj(s, e, t, i, n = 0, o = 0, a = 0) {
  const r = x1,
    l = WO(e),
    c = t ? 1 - r / 2 : r / 2,
    h = 1 - r / 2,
    d = (S) => n + S - c,
    u = (S) => a + S - h;
  for (const S of [0, 1]) {
    const M = l + S,
      E = { top: M, side: M, bottom: M };
    s.boxUV(
      d(0),
      o + S,
      u(1 - r),
      d(1),
      o + S + 1,
      u(1),
      E,
      i,
      d(0),
      o + S,
      u(0),
    );
  }
  const f = e === v.DOOR ? xc : _c,
    p = { top: f, side: f, bottom: f },
    m = t ? 0.13 : 0.87,
    g = o + 0.96,
    y = 0.045,
    b = 0.07;
  (s.box(d(m - y), g - y, u(1 - r - b), d(m + y), g + y, u(1 - r), p, i),
    s.box(d(m - y), g - y, u(1), d(m + y), g + y, u(1 + b), p, i));
}
function Fj(s, e, t, i) {
  const n = new B0();
  ((n.sky = i), zj(n, s, e, t));
  const o = n.build();
  return (o.computeBoundingSphere(), o);
}
function Uj(s) {
  const e = new B0(),
    { hingeY: t, hingeZ: i } = vm(s);
  for (const o of WA(s, 0, "lid")) {
    const [a, r, l, c, h, d] = o.box,
      u = o.tile,
      f = { top: o.top ?? u, side: u, bottom: o.bottom ?? u };
    o.fit
      ? e.box(a, r, l, c, h, d, f, 0, !0)
      : e.boxUV(a, r, l, c, h, d, f, 0, 0, 0, 0);
  }
  const n = e.build();
  return (
    n.deleteAttribute("blocklight"),
    n.deleteAttribute("skylight"),
    n.translate(-0.5, -t, -i),
    n.computeBoundingSphere(),
    n
  );
}
function Gj(s, e, t, i, n, o, a) {
  if (o & wr) return;
  const [r, , l, c, , h] = o1(o),
    d = WO(n);
  for (const u of [0, 1]) {
    const f = { top: d + u, side: d + u, bottom: d + u };
    s.box(e + r, t + u, i + l, e + c, t + u + 1, i + h, f, a);
  }
}
function Wj(s, e, t, i, n, o, a, r) {
  const l = e + 0.5,
    c = i + 0.5,
    h = 0.44,
    d = 0.31,
    u = 16,
    f = !n,
    p = f ? t + 0.9 : t + 1,
    m = f ? 0.93 : 1,
    g =
      (Math.imul(e, 73856093) ^
        Math.imul(i, 19349663) ^
        Math.imul(t, 83492791)) >>>
      0,
    y = (M, E, A) => {
      const T = (M * Math.PI * 2) / u;
      return [l + Math.cos(T) * E, A, c + Math.sin(T) * E];
    },
    b = (M) => (M % 2 ? d : h);
  for (let M = 0; M < u; M++) {
    const E = (M + 1) % u,
      A = b(M),
      T = b(E),
      x = y(M, A, t),
      R = y(M, A * m, p),
      _ = y(E, T, t),
      C = y(E, T * m, p),
      P = Math.hypot(_[2] - x[2], _[0] - x[0]),
      O = [(_[2] - x[2]) / P, 0, (x[0] - _[0]) / P],
      B =
        M % 2
          ? [
              [1, 1],
              [1, 0],
              [0, 1],
              [0, 0],
            ]
          : [
              [0, 1],
              [0, 0],
              [1, 1],
              [1, 0],
            ];
    if ((s.rawQuadUV([C, _, R, x], O, a[1], B, r), f)) {
      const H = [l, t + 1, c],
        D = y(M, A * m * 0.55, t + 0.975),
        U = y(E, T * m * 0.55, t + 0.975),
        W = Math.atan2((R[2] + C[2]) / 2 - c, (R[0] + C[0]) / 2 - l),
        J = [Math.cos(W) * 0.45, 0.89, Math.sin(W) * 0.45];
      (s.rawQuad([U, C, D, R], J, a[1], r),
        s.rawQuad([H, U, D, D], [0, 1, 0], a[0], r));
    }
    o ||
      s.rawQuad(
        [[l, t, c], y(M, A, t), y(E, T, t), y(E, T, t)],
        [0, -1, 0],
        a[2],
        r,
      );
  }
  const S = 0.075;
  for (let M = 0; M < u; M += 2) {
    const E = (M * Math.PI * 2) / u,
      A = Math.cos(E),
      T = Math.sin(E),
      x = -T,
      R = A;
    for (let _ = 0; _ < 3; _++) {
      const C = t + 0.16 + _ * 0.31 + ((M >> 1) % 2) * 0.15;
      if (C > p - 0.08) continue;
      const P = h * (f ? 1 - ((1 - m) * (C - t)) / (p - t) : 1) + 0.02,
        O = l + A * P,
        B = c + T * P;
      (s.rawQuad(
        [
          [O - x * S, C + S, B - R * S],
          [O - x * S, C - S, B - R * S],
          [O + x * S, C + S, B + R * S],
          [O + x * S, C - S, B + R * S],
        ],
        [A, 0, T],
        TS,
        r,
        !0,
      ),
        s.rawQuad(
          [
            [O - A * S, C + S, B - T * S],
            [O - A * S, C - S, B - T * S],
            [O + A * S, C + S, B + T * S],
            [O + A * S, C - S, B + T * S],
          ],
          [x, 0, R],
          TS,
          r,
          !0,
        ));
    }
  }
  if (f && g % 3 === 0) {
    const E = t + 0.99,
      A = ((g >> 3) % 8) * 0.4,
      T = Math.cos(A) * 0.16,
      x = Math.sin(A) * 0.16;
    (s.rawQuad(
      [
        [l - T, E + 0.16 * 1.1, c - x],
        [l - T, E, c - x],
        [l + T, E + 0.16 * 1.1, c + x],
        [l + T, E, c + x],
      ],
      [-x / 0.16, 0, T / 0.16],
      dy,
      r,
      !0,
    ),
      s.rawQuad(
        [
          [l + x, E + 0.16 * 1.1, c - T],
          [l + x, E, c - T],
          [l - x, E + 0.16 * 1.1, c + T],
          [l - x, E, c + T],
        ],
        [T / 0.16, 0, x / 0.16],
        dy,
        r,
        !0,
      ),
      s.rawQuadUV(
        [
          [l - 0.16, E + 0.05, c - 0.16],
          [l - 0.16, E + 0.05, c + 0.16],
          [l + 0.16, E + 0.05, c - 0.16],
          [l + 0.16, E + 0.05, c + 0.16],
        ],
        [0, 1, 0],
        dy,
        [
          [0, 1],
          [0, 0],
          [1, 1],
          [1, 0],
        ],
        r,
        !0,
      ));
  }
}
