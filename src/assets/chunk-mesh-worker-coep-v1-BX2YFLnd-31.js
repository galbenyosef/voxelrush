// chunk-mesh-worker-coep-v1-BX2YFLnd 31 — math
// Lines 9574-9893 of readable/assets/chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
function m0(r, t, e, s, n, i, h) {
  const c = Math.max(0, Math.min(kn - 1, n)) / kn,
    o = 0.0625,
    a = 0.5,
    u = t + o + c * (1 - 2 * o),
    d = t + 1 - o,
    l = s + o,
    p = s + 1 - o;
  (r.box(u, e, l, d, e + a, p, { top: i[0], side: i[1], bottom: i[2] }, h),
    c > 0 &&
      r.rawQuad(
        [
          [u - 0.001, e + a, l],
          [u - 0.001, e, l],
          [u - 0.001, e + a, p],
          [u - 0.001, e, p],
        ],
        [-1, 0, 0],
        i[2],
        h,
      ));
  const m = [
    [0.3, 0.32],
    [0.62, 0.5],
    [0.36, 0.7],
  ];
  for (const [_, y] of m) {
    const E = u + (d - u) * _,
      M = l + (p - l) * y;
    if (E < u + 0.06 || E > d - 0.06) continue;
    (r.box(
      E - 0.035,
      e + a,
      M - 0.035,
      E + 0.035,
      e + a + 0.18,
      M + 0.035,
      { top: i[0], side: i[0], bottom: i[0] },
      h,
    ),
      (r.animMode = 1));
    const g = e + a + 0.19,
      L = T[f.FIRE].tex[1];
    (r.rawQuad(
      [
        [E - 0.05, g + 0.12, M],
        [E - 0.05, g, M],
        [E + 0.05, g + 0.12, M],
        [E + 0.05, g, M],
      ],
      [0, 0, 1],
      L,
      15,
      !0,
    ),
      r.rawQuad(
        [
          [E, g + 0.12, M - 0.05],
          [E, g, M - 0.05],
          [E, g + 0.12, M + 0.05],
          [E, g, M + 0.05],
        ],
        [1, 0, 0],
        L,
        15,
        !0,
      ),
      (r.animMode = 0));
  }
}
function Oi(r, t, e, s, n, i, h = 0.8) {
  const c = h,
    o = 0.15,
    a = 0.85;
  (r.rawQuad(
    [
      [t + o, e + c, s + o],
      [t + o, e, s + o],
      [t + a, e + c, s + a],
      [t + a, e, s + a],
    ],
    [0, 0, 1],
    n,
    i,
    !0,
  ),
    r.rawQuad(
      [
        [t + o, e + c, s + a],
        [t + o, e, s + a],
        [t + a, e + c, s + o],
        [t + a, e, s + o],
      ],
      [0, 0, 1],
      n,
      i,
      !0,
    ));
}
function _0(r, t, e, s, n, i, h, c) {
  const o = ar(n),
    a = o <= 0 ? 0.34 : o === 1 ? 0.62 : 0.92,
    u = o <= 0 ? 0.16 : o === 1 ? 0.27 : 0.36,
    d = o <= 0 ? 3 : o === 1 ? 4 : 6,
    l = t + 0.5,
    p = s + 0.5;
  r.animMode = 3;
  for (let _ = 0; _ < d; _++) {
    const y = _ * 2.399963 + ((t * 7 + s * 13) % 16) * 0.3927,
      E = Math.cos(y) * u,
      M = Math.sin(y) * u,
      g = e + a * (0.78 + 0.2 * Math.sin(y * 2 + 1)),
      L = Math.sin(y * 3) * 0.075,
      I = Math.cos(y * 2) * 0.075;
    r.rawQuad(
      [
        [l - E * 0.65 + L, g, p - M * 0.65 + I],
        [l - E, e, p - M],
        [l + E * 0.65 + L, g, p + M * 0.65 + I],
        [l + E, e, p + M],
      ],
      [0, 0, 1],
      i,
      c,
      !0,
    );
  }
  const m = u * 0.82;
  (r.rawQuad(
    [
      [l - m, e + a * 0.45, p - m],
      [l + m * 0.5, e + a * 0.92, p - m * 0.4],
      [l - m, e + a * 0.48, p + m],
      [l + m * 0.5, e + a * 0.88, p + m * 0.4],
    ],
    [0, 1, 0],
    h,
    c,
    !0,
  ),
    (r.animMode = 0));
}
function E0(r, t, e, s, n, i, h, c) {
  const o = (y, E, M, g, L, I, A, x, S) => {
    r.rawQuad(
      [
        [e + L, s + S, n + I],
        [e + y, s, n + E],
        [e + A, s + S, n + x],
        [e + M, s, n + g],
      ],
      [0, 0, 1],
      h,
      c,
      !0,
    );
  };
  if (i !== f.SEAWEED && i !== f.SEAGRASS) {
    for (const E of [0, Math.PI / 3, (2 * Math.PI) / 3]) {
      const M = Math.cos(E) * 0.42,
        g = Math.sin(E) * 0.42;
      o(
        0.5 - M,
        0.5 - g,
        0.5 + M,
        0.5 + g,
        0.5 - M,
        0.5 - g,
        0.5 + M,
        0.5 + g,
        0.92,
      );
    }
    return;
  }
  const a = i === f.SEAWEED,
    u = a ? 1 : 0.62,
    d = a && t.getBlock(e, s + 1, n) !== f.SEAWEED,
    l = 0.13,
    p = 0.87,
    m = d ? 0.36 : l,
    _ = d ? 0.64 : p;
  ((r.animMode = bi),
    o(l, l, p, p, m, m, _, _, u),
    o(l, p, p, l, m, _, _, m, u),
    (r.animMode = 0));
}
function Ct(r, t, e, s, n, i, h, c) {
  var p;
  const o = T[h],
    a = $t(0),
    u = t.getBlock(s, n + 1, i),
    d = t.getMeta(s, n + 1, i),
    l = u === h || c(u, d) ? 0 : 1 - a;
  for (const m of gs) {
    const _ = s + m.dir[0],
      y = n + m.dir[1],
      E = i + m.dir[2],
      M = y < 0 || y >= Y ? 0 : t.getBlock(_, y, E),
      g = y < 0 || y >= Y ? 0 : t.getMeta(_, y, E);
    if (
      y >= 0 &&
      y < Y &&
      !(((p = t.loaded) == null ? void 0 : p.call(t, _, E)) ?? !0)
    )
      continue;
    const L = M === h || c(M, g);
    if (m.dir[1] === 0 && L) {
      const x = M === h ? $t(g) : a;
      if (a > x + 0.001) {
        const S = Math.max(e.at(_, y, E), o.light) / 15,
          R = m.corners.map((O) => [
            s + O.pos[0],
            n + (O.pos[1] === 1 ? a : x),
            i + O.pos[2],
          ]);
        r.rawQuad(R, m.dir, o.tex[1], S, !1, !0);
      }
      continue;
    }
    if (L || !(M === 0 || !T[M].solid || T[M].liquid)) continue;
    const I = o.tex[m.dir[1] === 1 ? 0 : m.dir[1] === -1 ? 2 : 1],
      A = Math.max(e.at(_, y, E), o.light) / 15;
    r.quad(m, s, n, i, I, [3, 3, 3, 3], !0, A, m.dir[1] === 0 ? l : 1 - a);
  }
}
function A0(r, t, e, s, n, i) {
  const h = e + 0.025;
  r.rawQuadUV(
    [
      [t, h, s + 1],
      [t + 1, h, s + 1],
      [t, h, s],
      [t + 1, h, s],
    ],
    [0, 1, 0],
    n,
    [
      [
        [0, 1],
        [1, 1],
        [0, 0],
        [1, 0],
      ],
      [
        [1, 1],
        [1, 0],
        [0, 1],
        [0, 0],
      ],
      [
        [1, 0],
        [0, 0],
        [1, 1],
        [0, 1],
      ],
      [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
      ],
    ][(t * 7 + s * 13) & 3],
    i,
  );
}
function y0(r, t, e, s, n, i) {
  (r.rawQuad(
    [
      [t + 0.02, e + 1, s + 0.02],
      [t + 0.02, e, s + 0.02],
      [t + 0.98, e + 1, s + 0.98],
      [t + 0.98, e, s + 0.98],
    ],
    [0, 0, 1],
    n,
    i,
    !0,
  ),
    r.rawQuad(
      [
        [t + 0.02, e + 1, s + 0.98],
        [t + 0.02, e, s + 0.98],
        [t + 0.98, e + 1, s + 0.02],
        [t + 0.98, e, s + 0.02],
      ],
      [0, 0, 1],
      n,
      i,
      !0,
    ));
}
function x0(r, t, e, s, n, i) {
  const o = e + 1,
    a = e + 0.12;
  (r.rawQuad(
    [
      [t + 0.12, o, s + 0.12],
      [t + 0.12, a, s + 0.12],
      [t + 0.88, o, s + 0.88],
      [t + 0.88, a, s + 0.88],
    ],
    [0, 0, 1],
    n,
    i,
    !0,
  ),
    r.rawQuad(
      [
        [t + 0.12, o, s + 0.88],
        [t + 0.12, a, s + 0.88],
        [t + 0.88, o, s + 0.12],
        [t + 0.88, a, s + 0.12],
      ],
      [0, 0, 1],
      n,
      i,
      !0,
    ));
}
