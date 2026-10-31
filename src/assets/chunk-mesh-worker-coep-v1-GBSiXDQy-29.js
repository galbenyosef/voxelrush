// chunk-mesh-worker-coep-v1-GBSiXDQy 29 — math
// Lines 9002-9305 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
function Vn(r, t, e, s, n, i, c) {
  const [h, o] = Yn[n & 7] ?? Yn[0],
    a = (n & 7) !== 0,
    u = a ? 0.14 : 0,
    d = t + 0.5 + h,
    l = s + 0.5 + o,
    f = a ? t + 0.5 + h * 0.48 : d,
    m = a ? s + 0.5 + o * 0.48 : l,
    _ = e + u + 0.03,
    g = _ + 0.69,
    y = 0.145;
  (r.rawQuad(
    [
      [f - y, g, m],
      [d - y, _, l],
      [f + y, g, m],
      [d + y, _, l],
    ],
    [0, 0, 1],
    i,
    c,
    !0,
  ),
    r.rawQuad(
      [
        [f, g, m - y],
        [d, _, l - y],
        [f, g, m + y],
        [d, _, l + y],
      ],
      [1, 0, 0],
      i,
      c,
      !0,
    ));
}
function i0(r, t, e, s, n, i, c) {
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
        c,
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
        c,
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
        c,
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
        c,
        !0,
      );
      break;
  }
}
const ot = 219,
  vn = 10,
  hs = 15,
  qn = 22,
  r0 = {
    head: [
      [[0, 0, 0, 0.125, 1, 0.125], ot],
      [[0.875, 0, 0, 1, 1, 0.125], ot],
      [[-0.008, 1, -0.008, 0.133, 1.06, 0.133], ot],
      [[0.867, 1, -0.008, 1.008, 1.06, 0.133], ot],
      [[0.125, 0.84, 0.02, 0.875, 0.95, 0.105], ot],
      [[0.125, 0.3, 0.035, 0.875, 0.84, 0.09], vn],
      [[0.02, 0.12, 0.125, 0.12, 0.32, 1], ot],
      [[0.88, 0.12, 0.125, 0.98, 0.32, 1], ot],
      [[0.06, 0.25, 0.11, 0.94, 0.5, 1], hs],
      [[0.17, 0.5, 0.15, 0.83, 0.64, 0.46], hs],
      [[0.04, 0.3, 0.56, 0.96, 0.56, 1], qn],
      [[0.05, 0.5, 0.5, 0.95, 0.585, 0.61], hs],
    ],
    foot: [
      [[0, 0, 0.875, 0.125, 0.66, 1], ot],
      [[0.875, 0, 0.875, 1, 0.66, 1], ot],
      [[-0.008, 0.66, 0.867, 0.133, 0.71, 1.008], ot],
      [[0.867, 0.66, 0.867, 1.008, 0.71, 1.008], ot],
      [[0.125, 0.52, 0.89, 0.875, 0.61, 0.985], ot],
      [[0.125, 0.18, 0.905, 0.875, 0.52, 0.97], vn],
      [[0.02, 0.12, 0, 0.12, 0.32, 0.875], ot],
      [[0.88, 0.12, 0, 0.98, 0.32, 0.875], ot],
      [[0.06, 0.25, 0, 0.94, 0.5, 0.9], hs],
      [[0.04, 0.3, 0, 0.96, 0.56, 0.87], qn],
    ],
  };
function o0(r, t, e, s, n, i) {
  for (const [c, h] of r0[n & vi ? "head" : "foot"]) {
    const [o, a, u, d, l, f] = lr(c, n & 3);
    r.boxUV(
      t + o,
      e + a,
      s + u,
      t + d,
      e + l,
      s + f,
      { top: h, side: h, bottom: h },
      i,
      t,
      e,
      s,
    );
  }
}
function a0(r, t, e, s, n, i, c) {
  const h = { top: i, side: i, bottom: i };
  r.box(t, e, s, t + 1, e + 0.5, s + 1, h, c);
  const [o, a] = ae[n & 3] ?? ae[0];
  let u = t,
    d = t + 1,
    l = s,
    f = s + 1;
  (o !== 0
    ? o > 0
      ? (u = t + 0.5)
      : (d = t + 0.5)
    : a > 0
      ? (l = s + 0.5)
      : (f = s + 0.5),
    r.box(u, e + 0.5, l, d, e + 1, f, h, c));
}
function h0(r, t, e, s, n, i, c) {
  const h = Math.max(1, Math.min(8, (n & 7) + 1)) / 8;
  r.box(t, e, s, t + 1, e + h, s + 1, { top: i, side: i, bottom: i }, c);
}
const en = (r, t) => [r[0] - t[0], r[1] - t[1], r[2] - t[2]],
  sn = (r, t) => [
    r[1] * t[2] - r[2] * t[1],
    r[2] * t[0] - r[0] * t[2],
    r[0] * t[1] - r[1] * t[0],
  ],
  c0 = (r, t) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2],
  Me = (r) => {
    const t = Math.hypot(r[0], r[1], r[2]) || 1;
    return [r[0] / t, r[1] / t, r[2] / t];
  };
function gs(r, t, e, s, n, i) {
  c0(sn(en(t[1], t[0]), en(t[2], t[0])), e) < 0
    ? r.rawQuadUV([t[0], t[2], t[1], t[3]], e, s, [n[0], n[2], n[1], n[3]], i)
    : r.rawQuadUV(t, e, s, n, i);
}
function Ee(r, t, e, s, n, i, c, h, o = 0, a = 0, u = !0, d = !0) {
  const l = Me(en(e, t)),
    f = Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]);
  let m = sn(l, [0, 1, 0]);
  Math.hypot(m[0], m[1], m[2]) < 0.001 && (m = [1, 0, 0]);
  const _ = Me(m),
    g = sn(_, l),
    y = (x, S) => {
      const M = o + (S / n) * Math.PI * 2,
        A = Math.cos(M) * s,
        O = Math.sin(M) * s;
      return [
        x[0] + g[0] * A + _[0] * O,
        x[1] + g[1] * A + _[1] * O,
        x[2] + g[2] * A + _[2] * O,
      ];
    },
    R = Math.min(1, a + f);
  for (let x = 0; x < n; x++) {
    const S = o + ((x + 0.5) / n) * Math.PI * 2,
      M = Me([
        g[0] * Math.cos(S) + _[0] * Math.sin(S),
        g[1] * Math.cos(S) + _[1] * Math.sin(S),
        g[2] * Math.cos(S) + _[2] * Math.sin(S),
      ]),
      A = x / n,
      O = (x + 1) / n;
    gs(
      r,
      [y(e, x), y(t, x), y(e, x + 1), y(t, x + 1)],
      M,
      i,
      [
        [R, A],
        [a, A],
        [R, O],
        [a, O],
      ],
      h,
    );
  }
  const E = (x, S) => {
    const M = (A) => {
      const O = (A / n) * Math.PI * 2;
      return [0.5 + Math.cos(O) * 0.45, 0.5 + Math.sin(O) * 0.45];
    };
    for (let A = 0; A + 2 < n; A += 2) {
      const O = Math.min(A + 3, n);
      gs(
        r,
        [y(x, A + 1), y(x, 0), y(x, A + 2), y(x, O % n)],
        S,
        c,
        [M(A + 1), M(0), M(A + 2), M(O % n)],
        h,
      );
    }
  };
  (u && E(t, [-l[0], -l[1], -l[2]]), d && E(e, l));
}
function u0(r, t, e, s, n, i, c, h, o, a) {
  const u = Math.cos(h),
    d = Math.sin(h),
    l = (x, S, M) => [t + x * u - M * d, e + S, s + x * d + M * u],
    f = [u, 0, d],
    m = [-d, 0, u],
    _ = Math.min(1, n * 2),
    g = Math.min(1, c * 2),
    y = Math.min(1, i),
    R = 0.78;
  gs(
    r,
    [
      l(-n * R, i, c * R),
      l(n * R, i, c * R),
      l(-n * R, i, -c * R),
      l(n * R, i, -c * R),
    ],
    [0, 1, 0],
    o,
    [
      [0, g],
      [_, g],
      [0, 0],
      [_, 0],
    ],
    a,
  );
  const E = (x, S, M, A, O, I) =>
    gs(
      r,
      [x, S, M, A],
      Me([O[0], 0.35, O[2]]),
      o,
      [
        [0, y],
        [0, 0],
        [I, y],
        [I, 0],
      ],
      a,
    );
  (E(l(-n * R, i, c * R), l(-n, 0, c), l(n * R, i, c * R), l(n, 0, c), m, _),
    E(
      l(n * R, i, -c * R),
      l(n, 0, -c),
      l(-n * R, i, -c * R),
      l(-n, 0, -c),
      [-m[0], 0, -m[2]],
      _,
    ),
    E(l(n * R, i, c * R), l(n, 0, c), l(n * R, i, -c * R), l(n, 0, -c), f, g),
    E(
      l(-n * R, i, -c * R),
      l(-n, 0, -c),
      l(-n * R, i, c * R),
      l(-n, 0, c),
      [-f[0], 0, -f[2]],
      g,
    ));
}
