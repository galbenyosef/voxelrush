// chunk-mesh-worker-coep-v1-BX2YFLnd 33 — math
// Lines 10240-10396 of readable/assets/chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
function C0(r, t, e, s, n, i, h) {
  if (i & lr) return;
  const [c, , o, a, , u] = fr(i),
    d = I0(n);
  for (const l of [0, 1]) {
    const p = { top: d + l, side: d + l, bottom: d + l };
    r.box(t + c, e + l, s + o, t + a, e + l + 1, s + u, p, h);
  }
}
function N0(r, t, e, s, n, i, h, c) {
  const o = t + 0.5,
    a = s + 0.5,
    u = 0.44,
    d = 0.31,
    l = 16,
    p = !n,
    m = p ? e + 0.9 : e + 1,
    _ = p ? 0.93 : 1,
    y =
      (Math.imul(t, 73856093) ^
        Math.imul(s, 19349663) ^
        Math.imul(e, 83492791)) >>>
      0,
    E = (L, I, A) => {
      const x = (L * Math.PI * 2) / l;
      return [o + Math.cos(x) * I, A, a + Math.sin(x) * I];
    },
    M = (L) => (L % 2 ? d : u);
  for (let L = 0; L < l; L++) {
    const I = (L + 1) % l,
      A = M(L),
      x = M(I),
      S = E(L, A, e),
      R = E(L, A * _, m),
      O = E(I, x, e),
      k = E(I, x * _, m),
      W = Math.hypot(O[2] - S[2], O[0] - S[0]),
      H = [(O[2] - S[2]) / W, 0, (S[0] - O[0]) / W],
      X =
        L % 2
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
    if ((r.rawQuadUV([k, O, R, S], H, h[1], X, c), p)) {
      const B = [o, e + 1, a],
        N = E(L, A * _ * 0.55, e + 0.975),
        F = E(I, x * _ * 0.55, e + 0.975),
        v = Math.atan2((R[2] + k[2]) / 2 - a, (R[0] + k[0]) / 2 - o),
        Z = [Math.cos(v) * 0.45, 0.89, Math.sin(v) * 0.45];
      (r.rawQuad([F, k, N, R], Z, h[1], c),
        r.rawQuad([B, F, N, N], [0, 1, 0], h[0], c));
    }
    i ||
      r.rawQuad(
        [[o, e, a], E(L, A, e), E(I, x, e), E(I, x, e)],
        [0, -1, 0],
        h[2],
        c,
      );
  }
  const g = 0.075;
  for (let L = 0; L < l; L += 2) {
    const I = (L * Math.PI * 2) / l,
      A = Math.cos(I),
      x = Math.sin(I),
      S = -x,
      R = A;
    for (let O = 0; O < 3; O++) {
      const k = e + 0.16 + O * 0.31 + ((L >> 1) % 2) * 0.15;
      if (k > m - 0.08) continue;
      const W = u * (p ? 1 - ((1 - _) * (k - e)) / (m - e) : 1) + 0.02,
        H = o + A * W,
        X = a + x * W;
      (r.rawQuad(
        [
          [H - S * g, k + g, X - R * g],
          [H - S * g, k - g, X - R * g],
          [H + S * g, k + g, X + R * g],
          [H + S * g, k - g, X + R * g],
        ],
        [A, 0, x],
        Pn,
        c,
        !0,
      ),
        r.rawQuad(
          [
            [H - A * g, k + g, X - x * g],
            [H - A * g, k - g, X - x * g],
            [H + A * g, k + g, X + x * g],
            [H + A * g, k - g, X + x * g],
          ],
          [S, 0, R],
          Pn,
          c,
          !0,
        ));
    }
  }
  if (p && y % 3 === 0) {
    const I = e + 0.99,
      A = ((y >> 3) % 8) * 0.4,
      x = Math.cos(A) * 0.16,
      S = Math.sin(A) * 0.16;
    (r.rawQuad(
      [
        [o - x, I + 0.16 * 1.1, a - S],
        [o - x, I, a - S],
        [o + x, I + 0.16 * 1.1, a + S],
        [o + x, I, a + S],
      ],
      [-S / 0.16, 0, x / 0.16],
      Ws,
      c,
      !0,
    ),
      r.rawQuad(
        [
          [o + S, I + 0.16 * 1.1, a - x],
          [o + S, I, a - x],
          [o - S, I + 0.16 * 1.1, a + x],
          [o - S, I, a + x],
        ],
        [x / 0.16, 0, S / 0.16],
        Ws,
        c,
        !0,
      ),
      r.rawQuadUV(
        [
          [o - 0.16, I + 0.05, a - 0.16],
          [o - 0.16, I + 0.05, a + 0.16],
          [o + 0.16, I + 0.05, a - 0.16],
          [o + 0.16, I + 0.05, a + 0.16],
        ],
        [0, 1, 0],
        Ws,
        [
          [0, 1],
          [0, 0],
          [1, 1],
          [1, 0],
        ],
        c,
        !0,
      ));
  }
}
