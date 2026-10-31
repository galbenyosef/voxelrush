// chunk-mesh-worker-coep-v1-GBSiXDQy 33 — math
// Lines 10258-10414 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
function I0(r, t, e, s, n, i, c) {
  if (i & hr) return;
  const [h, , o, a, , u] = ur(i),
    d = L0(n);
  for (const l of [0, 1]) {
    const f = { top: d + l, side: d + l, bottom: d + l };
    r.box(t + h, e + l, s + o, t + a, e + l + 1, s + u, f, c);
  }
}
function C0(r, t, e, s, n, i, c, h) {
  const o = t + 0.5,
    a = s + 0.5,
    u = 0.44,
    d = 0.31,
    l = 16,
    f = !n,
    m = f ? e + 0.9 : e + 1,
    _ = f ? 0.93 : 1,
    g =
      (Math.imul(t, 73856093) ^
        Math.imul(s, 19349663) ^
        Math.imul(e, 83492791)) >>>
      0,
    y = (x, S, M) => {
      const A = (x * Math.PI * 2) / l;
      return [o + Math.cos(A) * S, M, a + Math.sin(A) * S];
    },
    R = (x) => (x % 2 ? d : u);
  for (let x = 0; x < l; x++) {
    const S = (x + 1) % l,
      M = R(x),
      A = R(S),
      O = y(x, M, e),
      I = y(x, M * _, m),
      k = y(S, A, e),
      w = y(S, A * _, m),
      N = Math.hypot(k[2] - O[2], k[0] - O[0]),
      L = [(k[2] - O[2]) / N, 0, (O[0] - k[0]) / N],
      U =
        x % 2
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
    if ((r.rawQuadUV([w, k, I, O], L, c[1], U, h), f)) {
      const v = [o, e + 1, a],
        q = y(x, M * _ * 0.55, e + 0.975),
        K = y(S, A * _ * 0.55, e + 0.975),
        G = Math.atan2((I[2] + w[2]) / 2 - a, (I[0] + w[0]) / 2 - o),
        V = [Math.cos(G) * 0.45, 0.89, Math.sin(G) * 0.45];
      (r.rawQuad([K, w, q, I], V, c[1], h),
        r.rawQuad([v, K, q, q], [0, 1, 0], c[0], h));
    }
    i ||
      r.rawQuad(
        [[o, e, a], y(x, M, e), y(S, A, e), y(S, A, e)],
        [0, -1, 0],
        c[2],
        h,
      );
  }
  const E = 0.075;
  for (let x = 0; x < l; x += 2) {
    const S = (x * Math.PI * 2) / l,
      M = Math.cos(S),
      A = Math.sin(S),
      O = -A,
      I = M;
    for (let k = 0; k < 3; k++) {
      const w = e + 0.16 + k * 0.31 + ((x >> 1) % 2) * 0.15;
      if (w > m - 0.08) continue;
      const N = u * (f ? 1 - ((1 - _) * (w - e)) / (m - e) : 1) + 0.02,
        L = o + M * N,
        U = a + A * N;
      (r.rawQuad(
        [
          [L - O * E, w + E, U - I * E],
          [L - O * E, w - E, U - I * E],
          [L + O * E, w + E, U + I * E],
          [L + O * E, w - E, U + I * E],
        ],
        [M, 0, A],
        Bn,
        h,
        !0,
      ),
        r.rawQuad(
          [
            [L - M * E, w + E, U - A * E],
            [L - M * E, w - E, U - A * E],
            [L + M * E, w + E, U + A * E],
            [L + M * E, w - E, U + A * E],
          ],
          [O, 0, I],
          Bn,
          h,
          !0,
        ));
    }
  }
  if (f && g % 3 === 0) {
    const S = e + 0.99,
      M = ((g >> 3) % 8) * 0.4,
      A = Math.cos(M) * 0.16,
      O = Math.sin(M) * 0.16;
    (r.rawQuad(
      [
        [o - A, S + 0.16 * 1.1, a - O],
        [o - A, S, a - O],
        [o + A, S + 0.16 * 1.1, a + O],
        [o + A, S, a + O],
      ],
      [-O / 0.16, 0, A / 0.16],
      Gs,
      h,
      !0,
    ),
      r.rawQuad(
        [
          [o + O, S + 0.16 * 1.1, a - A],
          [o + O, S, a - A],
          [o - O, S + 0.16 * 1.1, a + A],
          [o - O, S, a + A],
        ],
        [A / 0.16, 0, O / 0.16],
        Gs,
        h,
        !0,
      ),
      r.rawQuadUV(
        [
          [o - 0.16, S + 0.05, a - 0.16],
          [o - 0.16, S + 0.05, a + 0.16],
          [o + 0.16, S + 0.05, a - 0.16],
          [o + 0.16, S + 0.05, a + 0.16],
        ],
        [0, 1, 0],
        Gs,
        [
          [0, 1],
          [0, 0],
          [1, 1],
          [1, 0],
        ],
        h,
        !0,
      ));
  }
}
