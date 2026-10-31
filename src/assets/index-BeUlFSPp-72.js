// index-BeUlFSPp 72 — math
// Lines 52298-52589 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Sj(s, e, t, i, n, o) {
  const a = e + 0.5,
    r = i + 0.5;
  let l = ((e * 73856093) ^ (i * 19349663) ^ (t * 83492791)) >>> 0;
  const c = () => (
      (l = (Math.imul(l ^ (l >>> 15), 2246822507) + 2654435769) >>> 0),
      (l >>> 8) / 16777216
    ),
    h = Hm,
    d = [le[v.COBBLE]?.tex[1] ?? 4, le[v.STONE]?.tex[1] ?? 3],
    u = 9,
    f = c() * Math.PI * 2;
  for (let M = 0; M < u; M++) {
    const E = f + (M / u) * Math.PI * 2 + (c() - 0.5) * 0.25,
      A = 0.395 + (c() - 0.5) * 0.03,
      T = 0.07 + c() * 0.025,
      x = 0.055 + c() * 0.02,
      R = 0.085 + c() * 0.05;
    Mj(
      s,
      a + Math.cos(E) * A,
      t,
      r + Math.sin(E) * A,
      T,
      R,
      x,
      E + Math.PI / 2 + (c() - 0.5) * 0.4,
      d[M % 2],
      o,
    );
  }
  uu(s, [a, t, r], [a, t + 0.035, r], 0.31, 8, h, h, 1, c(), 0, !1, !0);
  const p = c() * Math.PI;
  for (let M = 0; M < 2; M++) {
    const E = p + (M * Math.PI) / 2 + (c() - 0.5) * 0.3,
      A = Math.cos(E) * 0.29,
      T = Math.sin(E) * 0.29,
      x = t + 0.075 + M * 0.05;
    (uu(
      s,
      [a - A, x, r - T],
      [a - A * 0.25, x, r - T * 0.25],
      0.048,
      6,
      n,
      7,
      o,
      c(),
    ),
      uu(
        s,
        [a - A * 0.25, x, r - T * 0.25],
        [a + A * 0.25, x, r + T * 0.25],
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
      uu(
        s,
        [a + A * 0.25, x, r + T * 0.25],
        [a + A, x, r + T],
        0.048,
        6,
        n,
        7,
        o,
        c(),
      ));
  }
  const m = c() * Math.PI * 2;
  for (let M = 0; M < 4; M++) {
    const E = m + (M * Math.PI) / 2 + (c() - 0.5) * 0.35,
      A = [a + Math.cos(E) * 0.36, t + 0.03, r + Math.sin(E) * 0.36],
      T = [
        a + Math.cos(E) * 0.045,
        t + 0.47 + c() * 0.06,
        r + Math.sin(E) * 0.045,
      ],
      x = [
        A[0] + (T[0] - A[0]) * 0.55,
        A[1] + (T[1] - A[1]) * 0.55,
        A[2] + (T[2] - A[2]) * 0.55,
      ],
      R = 0.05 + c() * 0.012,
      _ = c();
    (uu(s, A, x, R, 6, n, 7, o, _, 0, !0, !1),
      uu(s, x, T, R * 0.94, 6, h, 7, 1, _, 0, !1, !0));
  }
  const g = le[v.FIRE].tex[1];
  s.animMode = 1;
  const y = t + 0.05,
    b = 0.74 + c() * 0.08,
    S = 0.29;
  for (let M = 0; M < 4; M++) {
    const E = (M * Math.PI) / 4 + 0.2,
      A = Math.cos(E) * S,
      T = Math.sin(E) * S;
    s.rawQuad(
      [
        [a - A, y + b, r - T],
        [a - A, y, r - T],
        [a + A, y + b, r + T],
        [a + A, y, r + T],
      ],
      cf([-T, 0, A]),
      g,
      1,
      !0,
    );
  }
  for (let M = 0; M < 2; M++) {
    const E = p + M * Math.PI + 0.5,
      A = a + Math.cos(E) * 0.2,
      T = r + Math.sin(E) * 0.2,
      x = Math.cos(E + 1.3) * 0.1,
      R = Math.sin(E + 1.3) * 0.1,
      _ = 0.3;
    s.rawQuad(
      [
        [A - x, y + 0.05 + _, T - R],
        [A - x, y + 0.05, T - R],
        [A + x, y + 0.05 + _, T + R],
        [A + x, y + 0.05, T + R],
      ],
      cf([-R, 0, x]),
      g,
      1,
      !0,
    );
  }
  s.animMode = 0;
}
function Ej(s, e, t, i, n, o, a) {
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
    s.boxUV(e + p, t, i + m, e + p + l, t + h, i + m + l, r, a, e, t, i);
  const d = (p) => {
    for (let m = 0; m < 4; m++) {
      const g = c + m * 0.17,
        y = g + 0.115;
      p
        ? (s.boxUV(
            e + g,
            t + 0.12,
            i + 0.08,
            e + y,
            t + 0.84,
            i + 0.2,
            r,
            a,
            e,
            t,
            i,
          ),
          s.boxUV(
            e + g,
            t + 0.12,
            i + 0.8,
            e + y,
            t + 0.84,
            i + 0.92,
            r,
            a,
            e,
            t,
            i,
          ))
        : (s.boxUV(
            e + 0.08,
            t + 0.12,
            i + g,
            e + 0.2,
            t + 0.84,
            i + y,
            r,
            a,
            e,
            t,
            i,
          ),
          s.boxUV(
            e + 0.8,
            t + 0.12,
            i + g,
            e + 0.92,
            t + 0.84,
            i + y,
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
    s.boxUV(
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
    s.boxUV(
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
    s.boxUV(
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
    s.boxUV(
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
  s.boxUV(
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
  const f = Math.max(0, Math.min(100, n)) / 100;
  if (f > 0) {
    const p = 0.12 + f * 0.67;
    s.boxUV(e + c, t + 0.1, i + c, e + 1 - c, t + p, i + 1 - c, u, a, e, t, i);
  }
}
function Aj(s, e, t, i, n, o) {
  const a = e + 0.5,
    r = i + 0.5,
    l = { top: n, side: n, bottom: n };
  (s.box(a - 0.22, t, r - 0.22, a + 0.22, t + 0.08, r + 0.22, l, o),
    s.box(a - 0.11, t + 0.08, r - 0.11, a + 0.11, t + 0.62, r + 0.11, l, o),
    s.box(a - 0.06, t + 0.62, r - 0.06, a + 0.06, t + 0.92, r + 0.06, l, o),
    s.box(a - 0.025, t + 0.92, r - 0.025, a + 0.025, t + 1, r + 0.025, l, o));
}
