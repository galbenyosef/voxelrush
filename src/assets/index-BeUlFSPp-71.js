// index-BeUlFSPp 71 — math
// Lines 51994-52297 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function dR(s, e, t, i, n, o, a) {
  const [r, l] = hR[n & 7] ?? hR[0],
    c = (n & 7) !== 0,
    h = c ? 0.14 : 0,
    d = e + 0.5 + r,
    u = i + 0.5 + l,
    f = c ? e + 0.5 + r * 0.48 : d,
    p = c ? i + 0.5 + l * 0.48 : u,
    m = t + h + 0.03,
    g = m + 0.69,
    y = 0.145;
  (s.rawQuad(
    [
      [f - y, g, p],
      [d - y, m, u],
      [f + y, g, p],
      [d + y, m, u],
    ],
    [0, 0, 1],
    o,
    a,
    !0,
  ),
    s.rawQuad(
      [
        [f, g, p - y],
        [d, m, u - y],
        [f, g, p + y],
        [d, m, u + y],
      ],
      [1, 0, 0],
      o,
      a,
      !0,
    ));
}
function mj(s, e, t, i, n, o, a) {
  switch (n & 7) {
    case 1:
      s.rawQuad(
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
      s.rawQuad(
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
      s.rawQuad(
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
      s.rawQuad(
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
const Jo = 219,
  uR = 10,
  sg = 15,
  fR = 22,
  gj = {
    head: [
      [[0, 0, 0, 0.125, 1, 0.125], Jo],
      [[0.875, 0, 0, 1, 1, 0.125], Jo],
      [[-0.008, 1, -0.008, 0.133, 1.06, 0.133], Jo],
      [[0.867, 1, -0.008, 1.008, 1.06, 0.133], Jo],
      [[0.125, 0.84, 0.02, 0.875, 0.95, 0.105], Jo],
      [[0.125, 0.3, 0.035, 0.875, 0.84, 0.09], uR],
      [[0.02, 0.12, 0.125, 0.12, 0.32, 1], Jo],
      [[0.88, 0.12, 0.125, 0.98, 0.32, 1], Jo],
      [[0.06, 0.25, 0.11, 0.94, 0.5, 1], sg],
      [[0.17, 0.5, 0.15, 0.83, 0.64, 0.46], sg],
      [[0.04, 0.3, 0.56, 0.96, 0.56, 1], fR],
      [[0.05, 0.5, 0.5, 0.95, 0.585, 0.61], sg],
    ],
    foot: [
      [[0, 0, 0.875, 0.125, 0.66, 1], Jo],
      [[0.875, 0, 0.875, 1, 0.66, 1], Jo],
      [[-0.008, 0.66, 0.867, 0.133, 0.71, 1.008], Jo],
      [[0.867, 0.66, 0.867, 1.008, 0.71, 1.008], Jo],
      [[0.125, 0.52, 0.89, 0.875, 0.61, 0.985], Jo],
      [[0.125, 0.18, 0.905, 0.875, 0.52, 0.97], uR],
      [[0.02, 0.12, 0, 0.12, 0.32, 0.875], Jo],
      [[0.88, 0.12, 0, 0.98, 0.32, 0.875], Jo],
      [[0.06, 0.25, 0, 0.94, 0.5, 0.9], sg],
      [[0.04, 0.3, 0, 0.96, 0.56, 0.87], fR],
    ],
  };
function yj(s, e, t, i, n, o) {
  for (const [a, r] of gj[n & nm ? "head" : "foot"]) {
    const [l, c, h, d, u, f] = HI(a, n & 3);
    s.boxUV(
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
function vj(s, e, t, i, n, o, a) {
  const r = { top: o, side: o, bottom: o };
  s.box(e, t, i, e + 1, t + 0.5, i + 1, r, a);
  const [l, c] = Qo[n & 3] ?? Qo[0];
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
    s.box(h, t + 0.5, u, d, t + 1, f, r, a));
}
function bj(s, e, t, i, n, o, a) {
  const r = Math.max(1, Math.min(8, (n & 7) + 1)) / 8;
  s.box(e, t, i, e + 1, t + r, i + 1, { top: o, side: o, bottom: o }, a);
}
const n4 = (s, e) => [s[0] - e[0], s[1] - e[1], s[2] - e[2]],
  o4 = (s, e) => [
    s[1] * e[2] - s[2] * e[1],
    s[2] * e[0] - s[0] * e[2],
    s[0] * e[1] - s[1] * e[0],
  ],
  wj = (s, e) => s[0] * e[0] + s[1] * e[1] + s[2] * e[2],
  cf = (s) => {
    const e = Math.hypot(s[0], s[1], s[2]) || 1;
    return [s[0] / e, s[1] / e, s[2] / e];
  };
function xv(s, e, t, i, n, o) {
  wj(o4(n4(e[1], e[0]), n4(e[2], e[0])), t) < 0
    ? s.rawQuadUV([e[0], e[2], e[1], e[3]], t, i, [n[0], n[2], n[1], n[3]], o)
    : s.rawQuadUV(e, t, i, n, o);
}
function uu(s, e, t, i, n, o, a, r, l = 0, c = 0, h = !0, d = !0) {
  const u = cf(n4(t, e)),
    f = Math.hypot(t[0] - e[0], t[1] - e[1], t[2] - e[2]);
  let p = o4(u, [0, 1, 0]);
  Math.hypot(p[0], p[1], p[2]) < 0.001 && (p = [1, 0, 0]);
  const m = cf(p),
    g = o4(m, u),
    y = (M, E) => {
      const A = l + (E / n) * Math.PI * 2,
        T = Math.cos(A) * i,
        x = Math.sin(A) * i;
      return [
        M[0] + g[0] * T + m[0] * x,
        M[1] + g[1] * T + m[1] * x,
        M[2] + g[2] * T + m[2] * x,
      ];
    },
    b = Math.min(1, c + f);
  for (let M = 0; M < n; M++) {
    const E = l + ((M + 0.5) / n) * Math.PI * 2,
      A = cf([
        g[0] * Math.cos(E) + m[0] * Math.sin(E),
        g[1] * Math.cos(E) + m[1] * Math.sin(E),
        g[2] * Math.cos(E) + m[2] * Math.sin(E),
      ]),
      T = M / n,
      x = (M + 1) / n;
    xv(
      s,
      [y(t, M), y(e, M), y(t, M + 1), y(e, M + 1)],
      A,
      o,
      [
        [b, T],
        [c, T],
        [b, x],
        [c, x],
      ],
      r,
    );
  }
  const S = (M, E) => {
    const A = (T) => {
      const x = (T / n) * Math.PI * 2;
      return [0.5 + Math.cos(x) * 0.45, 0.5 + Math.sin(x) * 0.45];
    };
    for (let T = 0; T + 2 < n; T += 2) {
      const x = Math.min(T + 3, n);
      xv(
        s,
        [y(M, T + 1), y(M, 0), y(M, T + 2), y(M, x % n)],
        E,
        a,
        [A(T + 1), A(0), A(T + 2), A(x % n)],
        r,
      );
    }
  };
  (h && S(e, [-u[0], -u[1], -u[2]]), d && S(t, u));
}
function Mj(s, e, t, i, n, o, a, r, l, c) {
  const h = Math.cos(r),
    d = Math.sin(r),
    u = (M, E, A) => [e + M * h - A * d, t + E, i + M * d + A * h],
    f = [h, 0, d],
    p = [-d, 0, h],
    m = Math.min(1, n * 2),
    g = Math.min(1, a * 2),
    y = Math.min(1, o),
    b = 0.78;
  xv(
    s,
    [
      u(-n * b, o, a * b),
      u(n * b, o, a * b),
      u(-n * b, o, -a * b),
      u(n * b, o, -a * b),
    ],
    [0, 1, 0],
    l,
    [
      [0, g],
      [m, g],
      [0, 0],
      [m, 0],
    ],
    c,
  );
  const S = (M, E, A, T, x, R) =>
    xv(
      s,
      [M, E, A, T],
      cf([x[0], 0.35, x[2]]),
      l,
      [
        [0, y],
        [0, 0],
        [R, y],
        [R, 0],
      ],
      c,
    );
  (S(u(-n * b, o, a * b), u(-n, 0, a), u(n * b, o, a * b), u(n, 0, a), p, m),
    S(
      u(n * b, o, -a * b),
      u(n, 0, -a),
      u(-n * b, o, -a * b),
      u(-n, 0, -a),
      [-p[0], 0, -p[2]],
      m,
    ),
    S(u(n * b, o, a * b), u(n, 0, a), u(n * b, o, -a * b), u(n, 0, -a), f, g),
    S(
      u(-n * b, o, -a * b),
      u(-n, 0, -a),
      u(-n * b, o, a * b),
      u(-n, 0, a),
      [-f[0], 0, -f[2]],
      g,
    ));
}
