// assets__index-Dp6GxvJu 54 — math
// Lines 44818-45121 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function FT(n, e, t, i, s, o, a) {
  const [r, l] = UT[s & 7] ?? UT[0],
    c = (s & 7) !== 0,
    h = c ? 0.14 : 0,
    d = e + 0.5 + r,
    u = i + 0.5 + l,
    f = c ? e + 0.5 + r * 0.48 : d,
    p = c ? i + 0.5 + l * 0.48 : u,
    m = t + h + 0.03,
    y = m + 0.69,
    g = 0.145;
  (n.rawQuad(
    [
      [f - g, y, p],
      [d - g, m, u],
      [f + g, y, p],
      [d + g, m, u],
    ],
    [0, 0, 1],
    o,
    a,
    !0,
  ),
    n.rawQuad(
      [
        [f, y, p - g],
        [d, m, u - g],
        [f, y, p + g],
        [d, m, u + g],
      ],
      [1, 0, 0],
      o,
      a,
      !0,
    ));
}
function EW(n, e, t, i, s, o, a) {
  switch (s & 7) {
    case 1:
      n.rawQuad(
        [
          [e + 0.06, t + 1, i],
          [e + 0.06, t, i],
          [e + 0.06, t + 1, i + 1],
          [e + 0.06, t, i + 1],
        ],
        [1, 0, 0],
        o,
        a,
        !0,
      );
      break;
    case 2:
      n.rawQuad(
        [
          [e + 1 - 0.06, t + 1, i + 1],
          [e + 1 - 0.06, t, i + 1],
          [e + 1 - 0.06, t + 1, i],
          [e + 1 - 0.06, t, i],
        ],
        [-1, 0, 0],
        o,
        a,
        !0,
      );
      break;
    case 3:
      n.rawQuad(
        [
          [e, t + 1, i + 0.06],
          [e, t, i + 0.06],
          [e + 1, t + 1, i + 0.06],
          [e + 1, t, i + 0.06],
        ],
        [0, 0, 1],
        o,
        a,
        !0,
      );
      break;
    default:
      n.rawQuad(
        [
          [e + 1, t + 1, i + 1 - 0.06],
          [e + 1, t, i + 1 - 0.06],
          [e, t + 1, i + 1 - 0.06],
          [e, t, i + 1 - 0.06],
        ],
        [0, 0, -1],
        o,
        a,
        !0,
      );
      break;
  }
}
const Ao = 219,
  GT = 10,
  mm = 15,
  WT = 22,
  xW = {
    head: [
      [[0, 0, 0, 0.125, 1, 0.125], Ao],
      [[0.875, 0, 0, 1, 1, 0.125], Ao],
      [[-0.008, 1, -0.008, 0.133, 1.06, 0.133], Ao],
      [[0.867, 1, -0.008, 1.008, 1.06, 0.133], Ao],
      [[0.125, 0.84, 0.02, 0.875, 0.95, 0.105], Ao],
      [[0.125, 0.3, 0.035, 0.875, 0.84, 0.09], GT],
      [[0.02, 0.12, 0.125, 0.12, 0.32, 1], Ao],
      [[0.88, 0.12, 0.125, 0.98, 0.32, 1], Ao],
      [[0.06, 0.25, 0.11, 0.94, 0.5, 1], mm],
      [[0.17, 0.5, 0.15, 0.83, 0.64, 0.46], mm],
      [[0.04, 0.3, 0.56, 0.96, 0.56, 1], WT],
      [[0.05, 0.5, 0.5, 0.95, 0.585, 0.61], mm],
    ],
    foot: [
      [[0, 0, 0.875, 0.125, 0.66, 1], Ao],
      [[0.875, 0, 0.875, 1, 0.66, 1], Ao],
      [[-0.008, 0.66, 0.867, 0.133, 0.71, 1.008], Ao],
      [[0.867, 0.66, 0.867, 1.008, 0.71, 1.008], Ao],
      [[0.125, 0.52, 0.89, 0.875, 0.61, 0.985], Ao],
      [[0.125, 0.18, 0.905, 0.875, 0.52, 0.97], GT],
      [[0.02, 0.12, 0, 0.12, 0.32, 0.875], Ao],
      [[0.88, 0.12, 0, 0.98, 0.32, 0.875], Ao],
      [[0.06, 0.25, 0, 0.94, 0.5, 0.9], mm],
      [[0.04, 0.3, 0, 0.96, 0.56, 0.87], WT],
    ],
  };
function TW(n, e, t, i, s, o) {
  for (const [a, r] of xW[s & Sp ? "head" : "foot"]) {
    const [l, c, h, d, u, f] = wC(a, s & 3);
    n.boxUV(
      e + l,
      t + c,
      i + h,
      e + d,
      t + u,
      i + f,
      { top: r, side: r, bottom: r },
      o,
      e,
      t,
      i,
    );
  }
}
function AW(n, e, t, i, s, o, a) {
  const r = { top: o, side: o, bottom: o };
  n.box(e, t, i, e + 1, t + 0.5, i + 1, r, a);
  const [l, c] = xo[s & 3] ?? xo[0];
  let h = e,
    d = e + 1,
    u = i,
    f = i + 1;
  (l !== 0
    ? l > 0
      ? (h = e + 0.5)
      : (d = e + 0.5)
    : c > 0
      ? (u = i + 0.5)
      : (f = i + 0.5),
    n.box(h, t + 0.5, u, d, t + 1, f, r, a));
}
function _W(n, e, t, i, s, o, a) {
  const r = Math.max(1, Math.min(8, (s & 7) + 1)) / 8;
  n.box(e, t, i, e + 1, t + r, i + 1, { top: o, side: o, bottom: o }, a);
}
const _w = (n, e) => [n[0] - e[0], n[1] - e[1], n[2] - e[2]],
  Rw = (n, e) => [
    n[1] * e[2] - n[2] * e[1],
    n[2] * e[0] - n[0] * e[2],
    n[0] * e[1] - n[1] * e[0],
  ],
  RW = (n, e) => n[0] * e[0] + n[1] * e[1] + n[2] * e[2],
  Wd = (n) => {
    const e = Math.hypot(n[0], n[1], n[2]) || 1;
    return [n[0] / e, n[1] / e, n[2] / e];
  };
function xg(n, e, t, i, s, o) {
  RW(Rw(_w(e[1], e[0]), _w(e[2], e[0])), t) < 0
    ? n.rawQuadUV([e[0], e[2], e[1], e[3]], t, i, [s[0], s[2], s[1], s[3]], o)
    : n.rawQuadUV(e, t, i, s, o);
}
function nd(n, e, t, i, s, o, a, r, l = 0, c = 0, h = !0, d = !0) {
  const u = Wd(_w(t, e)),
    f = Math.hypot(t[0] - e[0], t[1] - e[1], t[2] - e[2]);
  let p = Rw(u, [0, 1, 0]);
  Math.hypot(p[0], p[1], p[2]) < 0.001 && (p = [1, 0, 0]);
  const m = Wd(p),
    y = Rw(m, u),
    g = (M, x) => {
      const T = l + (x / s) * Math.PI * 2,
        A = Math.cos(T) * i,
        _ = Math.sin(T) * i;
      return [
        M[0] + y[0] * A + m[0] * _,
        M[1] + y[1] * A + m[1] * _,
        M[2] + y[2] * A + m[2] * _,
      ];
    },
    b = Math.min(1, c + f);
  for (let M = 0; M < s; M++) {
    const x = l + ((M + 0.5) / s) * Math.PI * 2,
      T = Wd([
        y[0] * Math.cos(x) + m[0] * Math.sin(x),
        y[1] * Math.cos(x) + m[1] * Math.sin(x),
        y[2] * Math.cos(x) + m[2] * Math.sin(x),
      ]),
      A = M / s,
      _ = (M + 1) / s;
    xg(
      n,
      [g(t, M), g(e, M), g(t, M + 1), g(e, M + 1)],
      T,
      o,
      [
        [b, A],
        [c, A],
        [b, _],
        [c, _],
      ],
      r,
    );
  }
  const S = (M, x) => {
    const T = (A) => {
      const _ = (A / s) * Math.PI * 2;
      return [0.5 + Math.cos(_) * 0.45, 0.5 + Math.sin(_) * 0.45];
    };
    for (let A = 0; A + 2 < s; A += 2) {
      const _ = Math.min(A + 3, s);
      xg(
        n,
        [g(M, A + 1), g(M, 0), g(M, A + 2), g(M, _ % s)],
        x,
        a,
        [T(A + 1), T(0), T(A + 2), T(_ % s)],
        r,
      );
    }
  };
  (h && S(e, [-u[0], -u[1], -u[2]]), d && S(t, u));
}
function CW(n, e, t, i, s, o, a, r, l, c) {
  const h = Math.cos(r),
    d = Math.sin(r),
    u = (M, x, T) => [e + M * h - T * d, t + x, i + M * d + T * h],
    f = [h, 0, d],
    p = [-d, 0, h],
    m = Math.min(1, s * 2),
    y = Math.min(1, a * 2),
    g = Math.min(1, o),
    b = 0.78;
  xg(
    n,
    [
      u(-s * b, o, a * b),
      u(s * b, o, a * b),
      u(-s * b, o, -a * b),
      u(s * b, o, -a * b),
    ],
    [0, 1, 0],
    l,
    [
      [0, y],
      [m, y],
      [0, 0],
      [m, 0],
    ],
    c,
  );
  const S = (M, x, T, A, _, C) =>
    xg(
      n,
      [M, x, T, A],
      Wd([_[0], 0.35, _[2]]),
      l,
      [
        [0, g],
        [0, 0],
        [C, g],
        [C, 0],
      ],
      c,
    );
  (S(u(-s * b, o, a * b), u(-s, 0, a), u(s * b, o, a * b), u(s, 0, a), p, m),
    S(
      u(s * b, o, -a * b),
      u(s, 0, -a),
      u(-s * b, o, -a * b),
      u(-s, 0, -a),
      [-p[0], 0, -p[2]],
      m,
    ),
    S(u(s * b, o, a * b), u(s, 0, a), u(s * b, o, -a * b), u(s, 0, -a), f, y),
    S(
      u(-s * b, o, -a * b),
      u(-s, 0, -a),
      u(-s * b, o, a * b),
      u(-s, 0, a),
      [-f[0], 0, -f[2]],
      y,
    ));
}
