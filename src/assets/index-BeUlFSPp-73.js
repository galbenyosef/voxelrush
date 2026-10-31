// index-BeUlFSPp 73 — math
// Lines 52590-52903 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Tj(s, e, t, i, n, o, a) {
  const r = Math.max(0, Math.min(yx - 1, n)) / yx,
    l = 0.0625,
    c = 0.5,
    h = e + l + r * (1 - 2 * l),
    d = e + 1 - l,
    u = i + l,
    f = i + 1 - l;
  (s.box(h, t, u, d, t + c, f, { top: o[0], side: o[1], bottom: o[2] }, a),
    r > 0 &&
      s.rawQuad(
        [
          [h - 0.001, t + c, u],
          [h - 0.001, t, u],
          [h - 0.001, t + c, f],
          [h - 0.001, t, f],
        ],
        [-1, 0, 0],
        o[2],
        a,
      ));
  const p = [
    [0.3, 0.32],
    [0.62, 0.5],
    [0.36, 0.7],
  ];
  for (const [m, g] of p) {
    const y = h + (d - h) * m,
      b = u + (f - u) * g;
    if (y < h + 0.06 || y > d - 0.06) continue;
    (s.box(
      y - 0.035,
      t + c,
      b - 0.035,
      y + 0.035,
      t + c + 0.18,
      b + 0.035,
      { top: o[0], side: o[0], bottom: o[0] },
      a,
    ),
      (s.animMode = 1));
    const S = t + c + 0.19,
      M = le[v.FIRE].tex[1];
    (s.rawQuad(
      [
        [y - 0.05, S + 0.12, b],
        [y - 0.05, S, b],
        [y + 0.05, S + 0.12, b],
        [y + 0.05, S, b],
      ],
      [0, 0, 1],
      M,
      15,
      !0,
    ),
      s.rawQuad(
        [
          [y, S + 0.12, b - 0.05],
          [y, S, b - 0.05],
          [y, S + 0.12, b + 0.05],
          [y, S, b + 0.05],
        ],
        [1, 0, 0],
        M,
        15,
        !0,
      ),
      (s.animMode = 0));
  }
}
function GO(s, e, t, i, n, o, a = 0.8) {
  const r = a,
    l = 0.15,
    c = 0.85;
  (s.rawQuad(
    [
      [e + l, t + r, i + l],
      [e + l, t, i + l],
      [e + c, t + r, i + c],
      [e + c, t, i + c],
    ],
    [0, 0, 1],
    n,
    o,
    !0,
  ),
    s.rawQuad(
      [
        [e + l, t + r, i + c],
        [e + l, t, i + c],
        [e + c, t + r, i + l],
        [e + c, t, i + l],
      ],
      [0, 0, 1],
      n,
      o,
      !0,
    ));
}
function xj(s, e, t, i, n, o, a, r) {
  const l = PI(n),
    c = l <= 0 ? 0.34 : l === 1 ? 0.62 : 0.92,
    h = l <= 0 ? 0.16 : l === 1 ? 0.27 : 0.36,
    d = l <= 0 ? 3 : l === 1 ? 4 : 6,
    u = e + 0.5,
    f = i + 0.5;
  s.animMode = 3;
  for (let m = 0; m < d; m++) {
    const g = m * 2.399963 + ((e * 7 + i * 13) % 16) * 0.3927,
      y = Math.cos(g) * h,
      b = Math.sin(g) * h,
      S = t + c * (0.78 + 0.2 * Math.sin(g * 2 + 1)),
      M = Math.sin(g * 3) * 0.075,
      E = Math.cos(g * 2) * 0.075;
    s.rawQuad(
      [
        [u - y * 0.65 + M, S, f - b * 0.65 + E],
        [u - y, t, f - b],
        [u + y * 0.65 + M, S, f + b * 0.65 + E],
        [u + y, t, f + b],
      ],
      [0, 0, 1],
      o,
      r,
      !0,
    );
  }
  const p = h * 0.82;
  (s.rawQuad(
    [
      [u - p, t + c * 0.45, f - p],
      [u + p * 0.5, t + c * 0.92, f - p * 0.4],
      [u - p, t + c * 0.48, f + p],
      [u + p * 0.5, t + c * 0.88, f + p * 0.4],
    ],
    [0, 1, 0],
    a,
    r,
    !0,
  ),
    (s.animMode = 0));
}
function _j(s, e, t, i, n, o, a, r) {
  const l = (g, y, b, S, M, E, A, T, x) => {
    s.rawQuad(
      [
        [t + M, i + x, n + E],
        [t + g, i, n + y],
        [t + A, i + x, n + T],
        [t + b, i, n + S],
      ],
      [0, 0, 1],
      a,
      r,
      !0,
    );
  };
  if (o !== v.SEAWEED && o !== v.SEAGRASS) {
    for (const y of [0, Math.PI / 3, (2 * Math.PI) / 3]) {
      const b = Math.cos(y) * 0.42,
        S = Math.sin(y) * 0.42;
      l(
        0.5 - b,
        0.5 - S,
        0.5 + b,
        0.5 + S,
        0.5 - b,
        0.5 - S,
        0.5 + b,
        0.5 + S,
        0.92,
      );
    }
    return;
  }
  const c = o === v.SEAWEED,
    h = c ? 1 : 0.62,
    d = c && e.getBlock(t, i + 1, n) !== v.SEAWEED,
    u = 0.13,
    f = 0.87,
    p = d ? 0.36 : u,
    m = d ? 0.64 : f;
  ((s.animMode = UO),
    l(u, u, f, f, p, p, m, m, h),
    l(u, f, f, u, p, m, m, p, h),
    (s.animMode = 0));
}
function al(s, e, t, i, n, o, a, r) {
  const l = le[a],
    c = kc(0),
    h = e.getBlock(i, n + 1, o),
    d = e.getMeta(i, n + 1, o),
    u = h === a || r(h, d) ? 0 : 1 - c;
  for (const f of Tv) {
    const p = i + f.dir[0],
      m = n + f.dir[1],
      g = o + f.dir[2],
      y = m < 0 || m >= jt ? 0 : e.getBlock(p, m, g),
      b = m < 0 || m >= jt ? 0 : e.getMeta(p, m, g);
    if (m >= 0 && m < jt && !(e.loaded?.(p, g) ?? !0)) continue;
    const S = y === a || r(y, b);
    if (f.dir[1] === 0 && S) {
      const A = y === a ? kc(b) : c;
      if (c > A + 0.001) {
        const T = Math.max(t.at(p, m, g), l.light) / 15,
          x = f.corners.map((R) => [
            i + R.pos[0],
            n + (R.pos[1] === 1 ? c : A),
            o + R.pos[2],
          ]);
        s.rawQuad(x, f.dir, l.tex[1], T, !1, !0);
      }
      continue;
    }
    if (S || !(y === 0 || !le[y].solid || le[y].liquid)) continue;
    const M = l.tex[f.dir[1] === 1 ? 0 : f.dir[1] === -1 ? 2 : 1],
      E = Math.max(t.at(p, m, g), l.light) / 15;
    s.quad(f, i, n, o, M, [3, 3, 3, 3], !0, E, f.dir[1] === 0 ? u : 1 - c);
  }
}
function Rj(s, e, t, i, n, o) {
  const a = t + 0.025;
  s.rawQuadUV(
    [
      [e, a, i + 1],
      [e + 1, a, i + 1],
      [e, a, i],
      [e + 1, a, i],
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
    ][(e * 7 + i * 13) & 3],
    o,
  );
}
function kj(s, e, t, i, n, o) {
  (s.rawQuad(
    [
      [e + 0.02, t + 1, i + 0.02],
      [e + 0.02, t, i + 0.02],
      [e + 0.98, t + 1, i + 0.98],
      [e + 0.98, t, i + 0.98],
    ],
    [0, 0, 1],
    n,
    o,
    !0,
  ),
    s.rawQuad(
      [
        [e + 0.02, t + 1, i + 0.98],
        [e + 0.02, t, i + 0.98],
        [e + 0.98, t + 1, i + 0.02],
        [e + 0.98, t, i + 0.02],
      ],
      [0, 0, 1],
      n,
      o,
      !0,
    ));
}
function Cj(s, e, t, i, n, o) {
  const l = t + 1,
    c = t + 0.12;
  (s.rawQuad(
    [
      [e + 0.12, l, i + 0.12],
      [e + 0.12, c, i + 0.12],
      [e + 0.88, l, i + 0.88],
      [e + 0.88, c, i + 0.88],
    ],
    [0, 0, 1],
    n,
    o,
    !0,
  ),
    s.rawQuad(
      [
        [e + 0.12, l, i + 0.88],
        [e + 0.12, c, i + 0.88],
        [e + 0.88, l, i + 0.12],
        [e + 0.88, c, i + 0.12],
      ],
      [0, 0, 1],
      n,
      o,
      !0,
    ));
}
