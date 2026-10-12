// assets__index-Dp6GxvJu 55 — math
// Lines 45122-45417 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function kW(n, e, t, i, s, o) {
  var M, x;
  const a = e + 0.5,
    r = i + 0.5;
  let l = ((e * 73856093) ^ (i * 19349663) ^ (t * 83492791)) >>> 0;
  const c = () => (
      (l = (Math.imul(l ^ (l >>> 15), 2246822507) + 2654435769) >>> 0),
      (l >>> 8) / 16777216
    ),
    h = Qp,
    d = [
      ((M = de[v.COBBLE]) == null ? void 0 : M.tex[1]) ?? 4,
      ((x = de[v.STONE]) == null ? void 0 : x.tex[1]) ?? 3,
    ],
    u = 9,
    f = c() * Math.PI * 2;
  for (let T = 0; T < u; T++) {
    const A = f + (T / u) * Math.PI * 2 + (c() - 0.5) * 0.25,
      _ = 0.395 + (c() - 0.5) * 0.03,
      C = 0.07 + c() * 0.025,
      R = 0.055 + c() * 0.02,
      L = 0.085 + c() * 0.05;
    CW(
      n,
      a + Math.cos(A) * _,
      t,
      r + Math.sin(A) * _,
      C,
      L,
      R,
      A + Math.PI / 2 + (c() - 0.5) * 0.4,
      d[T % 2],
      o,
    );
  }
  nd(n, [a, t, r], [a, t + 0.035, r], 0.31, 8, h, h, 1, c(), 0, !1, !0);
  const p = c() * Math.PI;
  for (let T = 0; T < 2; T++) {
    const A = p + (T * Math.PI) / 2 + (c() - 0.5) * 0.3,
      _ = Math.cos(A) * 0.29,
      C = Math.sin(A) * 0.29,
      R = t + 0.075 + T * 0.05;
    (nd(
      n,
      [a - _, R, r - C],
      [a - _ * 0.25, R, r - C * 0.25],
      0.048,
      6,
      s,
      7,
      o,
      c(),
    ),
      nd(
        n,
        [a - _ * 0.25, R, r - C * 0.25],
        [a + _ * 0.25, R, r + C * 0.25],
        0.046,
        6,
        h,
        h,
        1,
        c(),
        0,
        !1,
        !1,
      ),
      nd(
        n,
        [a + _ * 0.25, R, r + C * 0.25],
        [a + _, R, r + C],
        0.048,
        6,
        s,
        7,
        o,
        c(),
      ));
  }
  const m = c() * Math.PI * 2;
  for (let T = 0; T < 4; T++) {
    const A = m + (T * Math.PI) / 2 + (c() - 0.5) * 0.35,
      _ = [a + Math.cos(A) * 0.36, t + 0.03, r + Math.sin(A) * 0.36],
      C = [
        a + Math.cos(A) * 0.045,
        t + 0.47 + c() * 0.06,
        r + Math.sin(A) * 0.045,
      ],
      R = [
        _[0] + (C[0] - _[0]) * 0.55,
        _[1] + (C[1] - _[1]) * 0.55,
        _[2] + (C[2] - _[2]) * 0.55,
      ],
      L = 0.05 + c() * 0.012,
      N = c();
    (nd(n, _, R, L, 6, s, 7, o, N, 0, !0, !1),
      nd(n, R, C, L * 0.94, 6, h, 7, 1, N, 0, !1, !0));
  }
  const y = de[v.FIRE].tex[1];
  n.animMode = 1;
  const g = t + 0.05,
    b = 0.74 + c() * 0.08,
    S = 0.29;
  for (let T = 0; T < 4; T++) {
    const A = (T * Math.PI) / 4 + 0.2,
      _ = Math.cos(A) * S,
      C = Math.sin(A) * S;
    n.rawQuad(
      [
        [a - _, g + b, r - C],
        [a - _, g, r - C],
        [a + _, g + b, r + C],
        [a + _, g, r + C],
      ],
      Wd([-C, 0, _]),
      y,
      1,
      !0,
    );
  }
  for (let T = 0; T < 2; T++) {
    const A = p + T * Math.PI + 0.5,
      _ = a + Math.cos(A) * 0.2,
      C = r + Math.sin(A) * 0.2,
      R = Math.cos(A + 1.3) * 0.1,
      L = Math.sin(A + 1.3) * 0.1,
      N = 0.3;
    n.rawQuad(
      [
        [_ - R, g + 0.05 + N, C - L],
        [_ - R, g + 0.05, C - L],
        [_ + R, g + 0.05 + N, C + L],
        [_ + R, g + 0.05, C + L],
      ],
      Wd([-L, 0, R]),
      y,
      1,
      !0,
    );
  }
  n.animMode = 0;
}
function LW(n, e, t, i, s, o, a) {
  const r = { top: o[0], side: o[1], bottom: o[2] },
    l = 0.13,
    c = 0.17,
    h = 0.9;
  for (const [p, m] of [
    [0.08, 0.08],
    [0.79, 0.08],
    [0.08, 0.79],
    [0.79, 0.79],
  ])
    n.boxUV(e + p, t, i + m, e + p + l, t + h, i + m + l, r, a, e, t, i);
  const d = (p) => {
    for (let m = 0; m < 4; m++) {
      const y = c + m * 0.17,
        g = y + 0.115;
      p
        ? (n.boxUV(
            e + y,
            t + 0.12,
            i + 0.08,
            e + g,
            t + 0.84,
            i + 0.2,
            r,
            a,
            e,
            t,
            i,
          ),
          n.boxUV(
            e + y,
            t + 0.12,
            i + 0.8,
            e + g,
            t + 0.84,
            i + 0.92,
            r,
            a,
            e,
            t,
            i,
          ))
        : (n.boxUV(
            e + 0.08,
            t + 0.12,
            i + y,
            e + 0.2,
            t + 0.84,
            i + g,
            r,
            a,
            e,
            t,
            i,
          ),
          n.boxUV(
            e + 0.8,
            t + 0.12,
            i + y,
            e + 0.92,
            t + 0.84,
            i + g,
            r,
            a,
            e,
            t,
            i,
          ));
    }
  };
  (d(!0),
    d(!1),
    n.boxUV(
      e + 0.04,
      t + 0.84,
      i + 0.04,
      e + 0.96,
      t + 0.98,
      i + 0.18,
      r,
      a,
      e,
      t,
      i,
    ),
    n.boxUV(
      e + 0.04,
      t + 0.84,
      i + 0.82,
      e + 0.96,
      t + 0.98,
      i + 0.96,
      r,
      a,
      e,
      t,
      i,
    ),
    n.boxUV(
      e + 0.04,
      t + 0.84,
      i + 0.18,
      e + 0.18,
      t + 0.98,
      i + 0.82,
      r,
      a,
      e,
      t,
      i,
    ),
    n.boxUV(
      e + 0.82,
      t + 0.84,
      i + 0.18,
      e + 0.96,
      t + 0.98,
      i + 0.82,
      r,
      a,
      e,
      t,
      i,
    ));
  const u = { top: o[0], side: o[1], bottom: o[2] };
  n.boxUV(
    e + c,
    t + 0.08,
    i + c,
    e + 1 - c,
    t + 0.12,
    i + 1 - c,
    u,
    a,
    e,
    t,
    i,
  );
  const f = Math.max(0, Math.min(100, s)) / 100;
  if (f > 0) {
    const p = 0.12 + f * 0.67;
    n.boxUV(e + c, t + 0.1, i + c, e + 1 - c, t + p, i + 1 - c, u, a, e, t, i);
  }
}
function IW(n, e, t, i, s, o) {
  const a = e + 0.5,
    r = i + 0.5,
    l = { top: s, side: s, bottom: s };
  (n.box(a - 0.22, t, r - 0.22, a + 0.22, t + 0.08, r + 0.22, l, o),
    n.box(a - 0.11, t + 0.08, r - 0.11, a + 0.11, t + 0.62, r + 0.11, l, o),
    n.box(a - 0.06, t + 0.62, r - 0.06, a + 0.06, t + 0.92, r + 0.06, l, o),
    n.box(a - 0.025, t + 0.92, r - 0.025, a + 0.025, t + 1, r + 0.025, l, o));
}
