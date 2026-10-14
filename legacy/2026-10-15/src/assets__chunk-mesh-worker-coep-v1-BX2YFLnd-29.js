// assets__chunk-mesh-worker-coep-v1-BX2YFLnd 29 — math
// Lines 8974-9277 of readable/assets__chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
function vn(r, t, e, s, n, i, h) {
  const [c, o] = Vn[n & 7] ?? Vn[0],
    a = (n & 7) !== 0,
    u = a ? 0.14 : 0,
    d = t + 0.5 + c,
    l = s + 0.5 + o,
    p = a ? t + 0.5 + c * 0.48 : d,
    m = a ? s + 0.5 + o * 0.48 : l,
    _ = e + u + 0.03,
    y = _ + 0.69,
    E = 0.145;
  (r.rawQuad(
    [
      [p - E, y, m],
      [d - E, _, l],
      [p + E, y, m],
      [d + E, _, l],
    ],
    [0, 0, 1],
    i,
    h,
    !0,
  ),
    r.rawQuad(
      [
        [p, y, m - E],
        [d, _, l - E],
        [p, y, m + E],
        [d, _, l + E],
      ],
      [1, 0, 0],
      i,
      h,
      !0,
    ));
}
function r0(r, t, e, s, n, i, h) {
  switch (n & 7) {
    case 1:
      r.rawQuad(
        [
          [t + 0.06, e + 1, s],
          [t + 0.06, e, s],
          [t + 0.06, e + 1, s + 1],
          [t + 0.06, e, s + 1],
        ],
        [1, 0, 0],
        i,
        h,
        !0,
      );
      break;
    case 2:
      r.rawQuad(
        [
          [t + 1 - 0.06, e + 1, s + 1],
          [t + 1 - 0.06, e, s + 1],
          [t + 1 - 0.06, e + 1, s],
          [t + 1 - 0.06, e, s],
        ],
        [-1, 0, 0],
        i,
        h,
        !0,
      );
      break;
    case 3:
      r.rawQuad(
        [
          [t, e + 1, s + 0.06],
          [t, e, s + 0.06],
          [t + 1, e + 1, s + 0.06],
          [t + 1, e, s + 0.06],
        ],
        [0, 0, 1],
        i,
        h,
        !0,
      );
      break;
    default:
      r.rawQuad(
        [
          [t + 1, e + 1, s + 1 - 0.06],
          [t + 1, e, s + 1 - 0.06],
          [t, e + 1, s + 1 - 0.06],
          [t, e, s + 1 - 0.06],
        ],
        [0, 0, -1],
        i,
        h,
        !0,
      );
      break;
  }
}
const ut = 219,
  qn = 10,
  ds = 15,
  Kn = 22,
  o0 = {
    head: [
      [[0, 0, 0, 0.125, 1, 0.125], ut],
      [[0.875, 0, 0, 1, 1, 0.125], ut],
      [[-0.008, 1, -0.008, 0.133, 1.06, 0.133], ut],
      [[0.867, 1, -0.008, 1.008, 1.06, 0.133], ut],
      [[0.125, 0.84, 0.02, 0.875, 0.95, 0.105], ut],
      [[0.125, 0.3, 0.035, 0.875, 0.84, 0.09], qn],
      [[0.02, 0.12, 0.125, 0.12, 0.32, 1], ut],
      [[0.88, 0.12, 0.125, 0.98, 0.32, 1], ut],
      [[0.06, 0.25, 0.11, 0.94, 0.5, 1], ds],
      [[0.17, 0.5, 0.15, 0.83, 0.64, 0.46], ds],
      [[0.04, 0.3, 0.56, 0.96, 0.56, 1], Kn],
      [[0.05, 0.5, 0.5, 0.95, 0.585, 0.61], ds],
    ],
    foot: [
      [[0, 0, 0.875, 0.125, 0.66, 1], ut],
      [[0.875, 0, 0.875, 1, 0.66, 1], ut],
      [[-0.008, 0.66, 0.867, 0.133, 0.71, 1.008], ut],
      [[0.867, 0.66, 0.867, 1.008, 0.71, 1.008], ut],
      [[0.125, 0.52, 0.89, 0.875, 0.61, 0.985], ut],
      [[0.125, 0.18, 0.905, 0.875, 0.52, 0.97], qn],
      [[0.02, 0.12, 0, 0.12, 0.32, 0.875], ut],
      [[0.88, 0.12, 0, 0.98, 0.32, 0.875], ut],
      [[0.06, 0.25, 0, 0.94, 0.5, 0.9], ds],
      [[0.04, 0.3, 0, 0.96, 0.56, 0.87], Kn],
    ],
  };
function a0(r, t, e, s, n, i) {
  for (const [h, c] of o0[n & Qi ? "head" : "foot"]) {
    const [o, a, u, d, l, p] = pr(h, n & 3);
    r.boxUV(
      t + o,
      e + a,
      s + u,
      t + d,
      e + l,
      s + p,
      { top: c, side: c, bottom: c },
      i,
      t,
      e,
      s,
    );
  }
}
function h0(r, t, e, s, n, i, h) {
  const c = { top: i, side: i, bottom: i };
  r.box(t, e, s, t + 1, e + 0.5, s + 1, c, h);
  const [o, a] = le[n & 3] ?? le[0];
  let u = t,
    d = t + 1,
    l = s,
    p = s + 1;
  (o !== 0
    ? o > 0
      ? (u = t + 0.5)
      : (d = t + 0.5)
    : a > 0
      ? (l = s + 0.5)
      : (p = s + 0.5),
    r.box(u, e + 0.5, l, d, e + 1, p, c, h));
}
function c0(r, t, e, s, n, i, h) {
  const c = Math.max(1, Math.min(8, (n & 7) + 1)) / 8;
  r.box(t, e, s, t + 1, e + c, s + 1, { top: i, side: i, bottom: i }, h);
}
const sn = (r, t) => [r[0] - t[0], r[1] - t[1], r[2] - t[2]],
  nn = (r, t) => [
    r[1] * t[2] - r[2] * t[1],
    r[2] * t[0] - r[0] * t[2],
    r[0] * t[1] - r[1] * t[0],
  ],
  u0 = (r, t) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2],
  Te = (r) => {
    const t = Math.hypot(r[0], r[1], r[2]) || 1;
    return [r[0] / t, r[1] / t, r[2] / t];
  };
function Rs(r, t, e, s, n, i) {
  u0(nn(sn(t[1], t[0]), sn(t[2], t[0])), e) < 0
    ? r.rawQuadUV([t[0], t[2], t[1], t[3]], e, s, [n[0], n[2], n[1], n[3]], i)
    : r.rawQuadUV(t, e, s, n, i);
}
function Me(r, t, e, s, n, i, h, c, o = 0, a = 0, u = !0, d = !0) {
  const l = Te(sn(e, t)),
    p = Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]);
  let m = nn(l, [0, 1, 0]);
  Math.hypot(m[0], m[1], m[2]) < 0.001 && (m = [1, 0, 0]);
  const _ = Te(m),
    y = nn(_, l),
    E = (L, I) => {
      const A = o + (I / n) * Math.PI * 2,
        x = Math.cos(A) * s,
        S = Math.sin(A) * s;
      return [
        L[0] + y[0] * x + _[0] * S,
        L[1] + y[1] * x + _[1] * S,
        L[2] + y[2] * x + _[2] * S,
      ];
    },
    M = Math.min(1, a + p);
  for (let L = 0; L < n; L++) {
    const I = o + ((L + 0.5) / n) * Math.PI * 2,
      A = Te([
        y[0] * Math.cos(I) + _[0] * Math.sin(I),
        y[1] * Math.cos(I) + _[1] * Math.sin(I),
        y[2] * Math.cos(I) + _[2] * Math.sin(I),
      ]),
      x = L / n,
      S = (L + 1) / n;
    Rs(
      r,
      [E(e, L), E(t, L), E(e, L + 1), E(t, L + 1)],
      A,
      i,
      [
        [M, x],
        [a, x],
        [M, S],
        [a, S],
      ],
      c,
    );
  }
  const g = (L, I) => {
    const A = (x) => {
      const S = (x / n) * Math.PI * 2;
      return [0.5 + Math.cos(S) * 0.45, 0.5 + Math.sin(S) * 0.45];
    };
    for (let x = 0; x + 2 < n; x += 2) {
      const S = Math.min(x + 3, n);
      Rs(
        r,
        [E(L, x + 1), E(L, 0), E(L, x + 2), E(L, S % n)],
        I,
        h,
        [A(x + 1), A(0), A(x + 2), A(S % n)],
        c,
      );
    }
  };
  (u && g(t, [-l[0], -l[1], -l[2]]), d && g(e, l));
}
function l0(r, t, e, s, n, i, h, c, o, a) {
  const u = Math.cos(c),
    d = Math.sin(c),
    l = (L, I, A) => [t + L * u - A * d, e + I, s + L * d + A * u],
    p = [u, 0, d],
    m = [-d, 0, u],
    _ = Math.min(1, n * 2),
    y = Math.min(1, h * 2),
    E = Math.min(1, i),
    M = 0.78;
  Rs(
    r,
    [
      l(-n * M, i, h * M),
      l(n * M, i, h * M),
      l(-n * M, i, -h * M),
      l(n * M, i, -h * M),
    ],
    [0, 1, 0],
    o,
    [
      [0, y],
      [_, y],
      [0, 0],
      [_, 0],
    ],
    a,
  );
  const g = (L, I, A, x, S, R) =>
    Rs(
      r,
      [L, I, A, x],
      Te([S[0], 0.35, S[2]]),
      o,
      [
        [0, E],
        [0, 0],
        [R, E],
        [R, 0],
      ],
      a,
    );
  (g(l(-n * M, i, h * M), l(-n, 0, h), l(n * M, i, h * M), l(n, 0, h), m, _),
    g(
      l(n * M, i, -h * M),
      l(n, 0, -h),
      l(-n * M, i, -h * M),
      l(-n, 0, -h),
      [-m[0], 0, -m[2]],
      _,
    ),
    g(l(n * M, i, h * M), l(n, 0, h), l(n * M, i, -h * M), l(n, 0, -h), p, y),
    g(
      l(-n * M, i, -h * M),
      l(-n, 0, -h),
      l(-n * M, i, h * M),
      l(-n, 0, h),
      [-p[0], 0, -p[2]],
      y,
    ));
}
