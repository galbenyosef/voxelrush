// assets__index-Dp6GxvJu 58 — math
// Lines 46085-46300 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function KW(n, e, t, i, s = 0, o = 0, a = 0) {
  const r = Xf,
    l = Uk(e),
    c = t ? 1 - r / 2 : r / 2,
    h = 1 - r / 2,
    d = (S) => s + S - c,
    u = (S) => a + S - h;
  for (const S of [0, 1]) {
    const M = l + S,
      x = { top: M, side: M, bottom: M };
    n.boxUV(
      d(0),
      o + S,
      u(1 - r),
      d(1),
      o + S + 1,
      u(1),
      x,
      i,
      d(0),
      o + S,
      u(0),
    );
  }
  const f = e === v.DOOR ? Bl : Hl,
    p = { top: f, side: f, bottom: f },
    m = t ? 0.13 : 0.87,
    y = o + 0.96,
    g = 0.045,
    b = 0.07;
  (n.box(d(m - g), y - g, u(1 - r - b), d(m + g), y + g, u(1 - r), p, i),
    n.box(d(m - g), y - g, u(1), d(m + g), y + g, u(1 + b), p, i));
}
function YW(n, e, t, i) {
  const s = new $c();
  ((s.sky = i), KW(s, n, e, t));
  const o = s.build();
  return (o.computeBoundingSphere(), o);
}
function jW(n) {
  const e = new $c(),
    { hingeY: t, hingeZ: i } = Cp(n);
  for (const o of KS(n, 0, "lid")) {
    const [a, r, l, c, h, d] = o.box,
      u = o.tile,
      f = { top: o.top ?? u, side: u, bottom: o.bottom ?? u };
    o.fit
      ? e.box(a, r, l, c, h, d, f, 0, !0)
      : e.boxUV(a, r, l, c, h, d, f, 0, 0, 0, 0);
  }
  const s = e.build();
  return (
    s.deleteAttribute("blocklight"),
    s.deleteAttribute("skylight"),
    s.translate(-0.5, -t, -i),
    s.computeBoundingSphere(),
    s
  );
}
function XW(n, e, t, i, s, o, a) {
  if (o & Na) return;
  const [r, , l, c, , h] = Rf(o),
    d = Uk(s);
  for (const u of [0, 1]) {
    const f = { top: d + u, side: d + u, bottom: d + u };
    n.box(e + r, t + u, i + l, e + c, t + u + 1, i + h, f, a);
  }
}
function ZW(n, e, t, i, s, o, a, r) {
  const l = e + 0.5,
    c = i + 0.5,
    h = 0.44,
    d = 0.31,
    u = 16,
    f = !s,
    p = f ? t + 0.9 : t + 1,
    m = f ? 0.93 : 1,
    y =
      (Math.imul(e, 73856093) ^
        Math.imul(i, 19349663) ^
        Math.imul(t, 83492791)) >>>
      0,
    g = (M, x, T) => {
      const A = (M * Math.PI * 2) / u;
      return [l + Math.cos(A) * x, T, c + Math.sin(A) * x];
    },
    b = (M) => (M % 2 ? d : h);
  for (let M = 0; M < u; M++) {
    const x = (M + 1) % u,
      T = b(M),
      A = b(x),
      _ = g(M, T, t),
      C = g(M, T * m, p),
      R = g(x, A, t),
      L = g(x, A * m, p),
      N = Math.hypot(R[2] - _[2], R[0] - _[0]),
      D = [(R[2] - _[2]) / N, 0, (_[0] - R[0]) / N],
      H =
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
    if ((n.rawQuadUV([L, R, C, _], D, a[1], H, r), f)) {
      const G = [l, t + 1, c],
        I = g(M, T * m * 0.55, t + 0.975),
        O = g(x, A * m * 0.55, t + 0.975),
        F = Math.atan2((C[2] + L[2]) / 2 - c, (C[0] + L[0]) / 2 - l),
        X = [Math.cos(F) * 0.45, 0.89, Math.sin(F) * 0.45];
      (n.rawQuad([O, L, I, C], X, a[1], r),
        n.rawQuad([G, O, I, I], [0, 1, 0], a[0], r));
    }
    o ||
      n.rawQuad(
        [[l, t, c], g(M, T, t), g(x, A, t), g(x, A, t)],
        [0, -1, 0],
        a[2],
        r,
      );
  }
  const S = 0.075;
  for (let M = 0; M < u; M += 2) {
    const x = (M * Math.PI * 2) / u,
      T = Math.cos(x),
      A = Math.sin(x),
      _ = -A,
      C = T;
    for (let R = 0; R < 3; R++) {
      const L = t + 0.16 + R * 0.31 + ((M >> 1) % 2) * 0.15;
      if (L > p - 0.08) continue;
      const N = h * (f ? 1 - ((1 - m) * (L - t)) / (p - t) : 1) + 0.02,
        D = l + T * N,
        H = c + A * N;
      (n.rawQuad(
        [
          [D - _ * S, L + S, H - C * S],
          [D - _ * S, L - S, H - C * S],
          [D + _ * S, L + S, H + C * S],
          [D + _ * S, L - S, H + C * S],
        ],
        [T, 0, A],
        aw,
        r,
        !0,
      ),
        n.rawQuad(
          [
            [D - T * S, L + S, H - A * S],
            [D - T * S, L - S, H - A * S],
            [D + T * S, L + S, H + A * S],
            [D + T * S, L - S, H + A * S],
          ],
          [_, 0, C],
          aw,
          r,
          !0,
        ));
    }
  }
  if (f && y % 3 === 0) {
    const x = t + 0.99,
      T = ((y >> 3) % 8) * 0.4,
      A = Math.cos(T) * 0.16,
      _ = Math.sin(T) * 0.16;
    (n.rawQuad(
      [
        [l - A, x + 0.16 * 1.1, c - _],
        [l - A, x, c - _],
        [l + A, x + 0.16 * 1.1, c + _],
        [l + A, x, c + _],
      ],
      [-_ / 0.16, 0, A / 0.16],
      T2,
      r,
      !0,
    ),
      n.rawQuad(
        [
          [l + _, x + 0.16 * 1.1, c - A],
          [l + _, x, c - A],
          [l - _, x + 0.16 * 1.1, c + A],
          [l - _, x, c + A],
        ],
        [A / 0.16, 0, _ / 0.16],
        T2,
        r,
        !0,
      ),
      n.rawQuadUV(
        [
          [l - 0.16, x + 0.05, c - 0.16],
          [l - 0.16, x + 0.05, c + 0.16],
          [l + 0.16, x + 0.05, c - 0.16],
          [l + 0.16, x + 0.05, c + 0.16],
        ],
        [0, 1, 0],
        T2,
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
