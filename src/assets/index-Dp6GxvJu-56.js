// index-Dp6GxvJu 56 — math
// Lines 45418-45737 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function PW(n, e, t, i, s, o, a) {
  const r = Math.max(0, Math.min(Cx - 1, s)) / Cx,
    l = 0.0625,
    c = 0.5,
    h = e + l + r * (1 - 2 * l),
    d = e + 1 - l,
    u = i + l,
    f = i + 1 - l;
  (n.box(h, t, u, d, t + c, f, { top: o[0], side: o[1], bottom: o[2] }, a),
    r > 0 &&
      n.rawQuad(
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
  for (const [m, y] of p) {
    const g = h + (d - h) * m,
      b = u + (f - u) * y;
    if (g < h + 0.06 || g > d - 0.06) continue;
    (n.box(
      g - 0.035,
      t + c,
      b - 0.035,
      g + 0.035,
      t + c + 0.18,
      b + 0.035,
      { top: o[0], side: o[0], bottom: o[0] },
      a,
    ),
      (n.animMode = 1));
    const S = t + c + 0.19,
      M = de[v.FIRE].tex[1];
    (n.rawQuad(
      [
        [g - 0.05, S + 0.12, b],
        [g - 0.05, S, b],
        [g + 0.05, S + 0.12, b],
        [g + 0.05, S, b],
      ],
      [0, 0, 1],
      M,
      15,
      !0,
    ),
      n.rawQuad(
        [
          [g, S + 0.12, b - 0.05],
          [g, S, b - 0.05],
          [g, S + 0.12, b + 0.05],
          [g, S, b + 0.05],
        ],
        [1, 0, 0],
        M,
        15,
        !0,
      ),
      (n.animMode = 0));
  }
}
function zk(n, e, t, i, s, o, a = 0.8) {
  const r = a,
    l = 0.15,
    c = 0.85;
  (n.rawQuad(
    [
      [e + l, t + r, i + l],
      [e + l, t, i + l],
      [e + c, t + r, i + c],
      [e + c, t, i + c],
    ],
    [0, 0, 1],
    s,
    o,
    !0,
  ),
    n.rawQuad(
      [
        [e + l, t + r, i + c],
        [e + l, t, i + c],
        [e + c, t + r, i + l],
        [e + c, t, i + l],
      ],
      [0, 0, 1],
      s,
      o,
      !0,
    ));
}
function OW(n, e, t, i, s, o, a, r) {
  const l = mC(s),
    c = l <= 0 ? 0.34 : l === 1 ? 0.62 : 0.92,
    h = l <= 0 ? 0.16 : l === 1 ? 0.27 : 0.36,
    d = l <= 0 ? 3 : l === 1 ? 4 : 6,
    u = e + 0.5,
    f = i + 0.5;
  n.animMode = 3;
  for (let m = 0; m < d; m++) {
    const y = m * 2.399963 + ((e * 7 + i * 13) % 16) * 0.3927,
      g = Math.cos(y) * h,
      b = Math.sin(y) * h,
      S = t + c * (0.78 + 0.2 * Math.sin(y * 2 + 1)),
      M = Math.sin(y * 3) * 0.075,
      x = Math.cos(y * 2) * 0.075;
    n.rawQuad(
      [
        [u - g * 0.65 + M, S, f - b * 0.65 + x],
        [u - g, t, f - b],
        [u + g * 0.65 + M, S, f + b * 0.65 + x],
        [u + g, t, f + b],
      ],
      [0, 0, 1],
      o,
      r,
      !0,
    );
  }
  const p = h * 0.82;
  (n.rawQuad(
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
    (n.animMode = 0));
}
function NW(n, e, t, i, s, o, a, r) {
  const l = (y, g, b, S, M, x, T, A, _) => {
    n.rawQuad(
      [
        [t + M, i + _, s + x],
        [t + y, i, s + g],
        [t + T, i + _, s + A],
        [t + b, i, s + S],
      ],
      [0, 0, 1],
      a,
      r,
      !0,
    );
  };
  if (o !== v.SEAWEED && o !== v.SEAGRASS) {
    for (const g of [0, Math.PI / 3, (2 * Math.PI) / 3]) {
      const b = Math.cos(g) * 0.42,
        S = Math.sin(g) * 0.42;
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
    d = c && e.getBlock(t, i + 1, s) !== v.SEAWEED,
    u = 0.13,
    f = 0.87,
    p = d ? 0.36 : u,
    m = d ? 0.64 : f;
  ((n.animMode = Hk),
    l(u, u, f, f, p, p, m, m, h),
    l(u, f, f, u, p, m, m, p, h),
    (n.animMode = 0));
}
function mr(n, e, t, i, s, o, a, r) {
  var f;
  const l = de[a],
    c = Ul(0),
    h = e.getBlock(i, s + 1, o),
    d = e.getMeta(i, s + 1, o),
    u = h === a || r(h, d) ? 0 : 1 - c;
  for (const p of Eg) {
    const m = i + p.dir[0],
      y = s + p.dir[1],
      g = o + p.dir[2],
      b = y < 0 || y >= Kt ? 0 : e.getBlock(m, y, g),
      S = y < 0 || y >= Kt ? 0 : e.getMeta(m, y, g);
    if (
      y >= 0 &&
      y < Kt &&
      !(((f = e.loaded) == null ? void 0 : f.call(e, m, g)) ?? !0)
    )
      continue;
    const M = b === a || r(b, S);
    if (p.dir[1] === 0 && M) {
      const A = b === a ? Ul(S) : c;
      if (c > A + 0.001) {
        const _ = Math.max(t.at(m, y, g), l.light) / 15,
          C = p.corners.map((R) => [
            i + R.pos[0],
            s + (R.pos[1] === 1 ? c : A),
            o + R.pos[2],
          ]);
        n.rawQuad(C, p.dir, l.tex[1], _, !1, !0);
      }
      continue;
    }
    if (M || !(b === 0 || !de[b].solid || de[b].liquid)) continue;
    const x = l.tex[p.dir[1] === 1 ? 0 : p.dir[1] === -1 ? 2 : 1],
      T = Math.max(t.at(m, y, g), l.light) / 15;
    n.quad(p, i, s, o, x, [3, 3, 3, 3], !0, T, p.dir[1] === 0 ? u : 1 - c);
  }
}
function DW(n, e, t, i, s, o) {
  const a = t + 0.025;
  n.rawQuadUV(
    [
      [e, a, i + 1],
      [e + 1, a, i + 1],
      [e, a, i],
      [e + 1, a, i],
    ],
    [0, 1, 0],
    s,
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
function BW(n, e, t, i, s, o) {
  (n.rawQuad(
    [
      [e + 0.02, t + 1, i + 0.02],
      [e + 0.02, t, i + 0.02],
      [e + 0.98, t + 1, i + 0.98],
      [e + 0.98, t, i + 0.98],
    ],
    [0, 0, 1],
    s,
    o,
    !0,
  ),
    n.rawQuad(
      [
        [e + 0.02, t + 1, i + 0.98],
        [e + 0.02, t, i + 0.98],
        [e + 0.98, t + 1, i + 0.02],
        [e + 0.98, t, i + 0.02],
      ],
      [0, 0, 1],
      s,
      o,
      !0,
    ));
}
function HW(n, e, t, i, s, o) {
  const l = t + 1,
    c = t + 0.12;
  (n.rawQuad(
    [
      [e + 0.12, l, i + 0.12],
      [e + 0.12, c, i + 0.12],
      [e + 0.88, l, i + 0.88],
      [e + 0.88, c, i + 0.88],
    ],
    [0, 0, 1],
    s,
    o,
    !0,
  ),
    n.rawQuad(
      [
        [e + 0.12, l, i + 0.88],
        [e + 0.12, c, i + 0.88],
        [e + 0.88, l, i + 0.12],
        [e + 0.88, c, i + 0.12],
      ],
      [0, 0, 1],
      s,
      o,
      !0,
    ));
}
