// chunk-mesh-worker-coep-v1-GBSiXDQy 31 — math
// Lines 9598-9911 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
function p0(r, t, e, s, n, i, c) {
  const h = Math.max(0, Math.min(Pn - 1, n)) / Pn,
    o = 0.0625,
    a = 0.5,
    u = t + o + h * (1 - 2 * o),
    d = t + 1 - o,
    l = s + o,
    f = s + 1 - o;
  (r.box(u, e, l, d, e + a, f, { top: i[0], side: i[1], bottom: i[2] }, c),
    h > 0 &&
      r.rawQuad(
        [
          [u - 0.001, e + a, l],
          [u - 0.001, e, l],
          [u - 0.001, e + a, f],
          [u - 0.001, e, f],
        ],
        [-1, 0, 0],
        i[2],
        c,
      ));
  const m = [
    [0.3, 0.32],
    [0.62, 0.5],
    [0.36, 0.7],
  ];
  for (const [_, g] of m) {
    const y = u + (d - u) * _,
      R = l + (f - l) * g;
    if (y < u + 0.06 || y > d - 0.06) continue;
    (r.box(
      y - 0.035,
      e + a,
      R - 0.035,
      y + 0.035,
      e + a + 0.18,
      R + 0.035,
      { top: i[0], side: i[0], bottom: i[0] },
      c,
    ),
      (r.animMode = 1));
    const E = e + a + 0.19,
      x = T[p.FIRE].tex[1];
    (r.rawQuad(
      [
        [y - 0.05, E + 0.12, R],
        [y - 0.05, E, R],
        [y + 0.05, E + 0.12, R],
        [y + 0.05, E, R],
      ],
      [0, 0, 1],
      x,
      15,
      !0,
    ),
      r.rawQuad(
        [
          [y, E + 0.12, R - 0.05],
          [y, E, R - 0.05],
          [y, E + 0.12, R + 0.05],
          [y, E, R + 0.05],
        ],
        [1, 0, 0],
        x,
        15,
        !0,
      ),
      (r.animMode = 0));
  }
}
function bi(r, t, e, s, n, i, c = 0.8) {
  const h = c,
    o = 0.15,
    a = 0.85;
  (r.rawQuad(
    [
      [t + o, e + h, s + o],
      [t + o, e, s + o],
      [t + a, e + h, s + a],
      [t + a, e, s + a],
    ],
    [0, 0, 1],
    n,
    i,
    !0,
  ),
    r.rawQuad(
      [
        [t + o, e + h, s + a],
        [t + o, e, s + a],
        [t + a, e + h, s + o],
        [t + a, e, s + o],
      ],
      [0, 0, 1],
      n,
      i,
      !0,
    ));
}
function m0(r, t, e, s, n, i, c, h) {
  const o = ir(n),
    a = o <= 0 ? 0.34 : o === 1 ? 0.62 : 0.92,
    u = o <= 0 ? 0.16 : o === 1 ? 0.27 : 0.36,
    d = o <= 0 ? 3 : o === 1 ? 4 : 6,
    l = t + 0.5,
    f = s + 0.5;
  r.animMode = 3;
  for (let _ = 0; _ < d; _++) {
    const g = _ * 2.399963 + ((t * 7 + s * 13) % 16) * 0.3927,
      y = Math.cos(g) * u,
      R = Math.sin(g) * u,
      E = e + a * (0.78 + 0.2 * Math.sin(g * 2 + 1)),
      x = Math.sin(g * 3) * 0.075,
      S = Math.cos(g * 2) * 0.075;
    r.rawQuad(
      [
        [l - y * 0.65 + x, E, f - R * 0.65 + S],
        [l - y, e, f - R],
        [l + y * 0.65 + x, E, f + R * 0.65 + S],
        [l + y, e, f + R],
      ],
      [0, 0, 1],
      i,
      h,
      !0,
    );
  }
  const m = u * 0.82;
  (r.rawQuad(
    [
      [l - m, e + a * 0.45, f - m],
      [l + m * 0.5, e + a * 0.92, f - m * 0.4],
      [l - m, e + a * 0.48, f + m],
      [l + m * 0.5, e + a * 0.88, f + m * 0.4],
    ],
    [0, 1, 0],
    c,
    h,
    !0,
  ),
    (r.animMode = 0));
}
function _0(r, t, e, s, n, i, c, h) {
  const o = (g, y, R, E, x, S, M, A, O) => {
    r.rawQuad(
      [
        [e + x, s + O, n + S],
        [e + g, s, n + y],
        [e + M, s + O, n + A],
        [e + R, s, n + E],
      ],
      [0, 0, 1],
      c,
      h,
      !0,
    );
  };
  if (i !== p.SEAWEED && i !== p.SEAGRASS) {
    for (const y of [0, Math.PI / 3, (2 * Math.PI) / 3]) {
      const R = Math.cos(y) * 0.42,
        E = Math.sin(y) * 0.42;
      o(
        0.5 - R,
        0.5 - E,
        0.5 + R,
        0.5 + E,
        0.5 - R,
        0.5 - E,
        0.5 + R,
        0.5 + E,
        0.92,
      );
    }
    return;
  }
  const a = i === p.SEAWEED,
    u = a ? 1 : 0.62,
    d = a && t.getBlock(e, s + 1, n) !== p.SEAWEED,
    l = 0.13,
    f = 0.87,
    m = d ? 0.36 : l,
    _ = d ? 0.64 : f;
  ((r.animMode = Ti),
    o(l, l, f, f, m, m, _, _, u),
    o(l, f, f, l, m, _, _, m, u),
    (r.animMode = 0));
}
function bt(r, t, e, s, n, i, c, h) {
  const o = T[c],
    a = Kt(0),
    u = t.getBlock(s, n + 1, i),
    d = t.getMeta(s, n + 1, i),
    l = u === c || h(u, d) ? 0 : 1 - a;
  for (const f of Ss) {
    const m = s + f.dir[0],
      _ = n + f.dir[1],
      g = i + f.dir[2],
      y = _ < 0 || _ >= H ? 0 : t.getBlock(m, _, g),
      R = _ < 0 || _ >= H ? 0 : t.getMeta(m, _, g);
    if (_ >= 0 && _ < H && !(t.loaded?.(m, g) ?? !0)) continue;
    const E = y === c || h(y, R);
    if (f.dir[1] === 0 && E) {
      const M = y === c ? Kt(R) : a;
      if (a > M + 0.001) {
        const A = Math.max(e.at(m, _, g), o.light) / 15,
          O = f.corners.map((I) => [
            s + I.pos[0],
            n + (I.pos[1] === 1 ? a : M),
            i + I.pos[2],
          ]);
        r.rawQuad(O, f.dir, o.tex[1], A, !1, !0);
      }
      continue;
    }
    if (E || !(y === 0 || !T[y].solid || T[y].liquid)) continue;
    const x = o.tex[f.dir[1] === 1 ? 0 : f.dir[1] === -1 ? 2 : 1],
      S = Math.max(e.at(m, _, g), o.light) / 15;
    r.quad(f, s, n, i, x, [3, 3, 3, 3], !0, S, f.dir[1] === 0 ? l : 1 - a);
  }
}
function E0(r, t, e, s, n, i) {
  const c = e + 0.025;
  r.rawQuadUV(
    [
      [t, c, s + 1],
      [t + 1, c, s + 1],
      [t, c, s],
      [t + 1, c, s],
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
function A0(r, t, e, s, n, i) {
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
function y0(r, t, e, s, n, i) {
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
