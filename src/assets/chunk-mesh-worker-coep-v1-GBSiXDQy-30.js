// chunk-mesh-worker-coep-v1-GBSiXDQy 30 — math
// Lines 9306-9597 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
function l0(r, t, e, s, n, i) {
  const c = t + 0.5,
    h = s + 0.5;
  let o = ((t * 73856093) ^ (s * 19349663) ^ (e * 83492791)) >>> 0;
  const a = () => (
      (o = (Math.imul(o ^ (o >>> 15), 2246822507) + 2654435769) >>> 0),
      (o >>> 8) / 16777216
    ),
    u = cn,
    d = [T[p.COBBLE]?.tex[1] ?? 4, T[p.STONE]?.tex[1] ?? 3],
    l = 9,
    f = a() * Math.PI * 2;
  for (let x = 0; x < l; x++) {
    const S = f + (x / l) * Math.PI * 2 + (a() - 0.5) * 0.25,
      M = 0.395 + (a() - 0.5) * 0.03,
      A = 0.07 + a() * 0.025,
      O = 0.055 + a() * 0.02,
      I = 0.085 + a() * 0.05;
    u0(
      r,
      c + Math.cos(S) * M,
      e,
      h + Math.sin(S) * M,
      A,
      I,
      O,
      S + Math.PI / 2 + (a() - 0.5) * 0.4,
      d[x % 2],
      i,
    );
  }
  Ee(r, [c, e, h], [c, e + 0.035, h], 0.31, 8, u, u, 1, a(), 0, !1, !0);
  const m = a() * Math.PI;
  for (let x = 0; x < 2; x++) {
    const S = m + (x * Math.PI) / 2 + (a() - 0.5) * 0.3,
      M = Math.cos(S) * 0.29,
      A = Math.sin(S) * 0.29,
      O = e + 0.075 + x * 0.05;
    (Ee(
      r,
      [c - M, O, h - A],
      [c - M * 0.25, O, h - A * 0.25],
      0.048,
      6,
      n,
      7,
      i,
      a(),
    ),
      Ee(
        r,
        [c - M * 0.25, O, h - A * 0.25],
        [c + M * 0.25, O, h + A * 0.25],
        0.046,
        6,
        u,
        u,
        1,
        a(),
        0,
        !1,
        !1,
      ),
      Ee(
        r,
        [c + M * 0.25, O, h + A * 0.25],
        [c + M, O, h + A],
        0.048,
        6,
        n,
        7,
        i,
        a(),
      ));
  }
  const _ = a() * Math.PI * 2;
  for (let x = 0; x < 4; x++) {
    const S = _ + (x * Math.PI) / 2 + (a() - 0.5) * 0.35,
      M = [c + Math.cos(S) * 0.36, e + 0.03, h + Math.sin(S) * 0.36],
      A = [
        c + Math.cos(S) * 0.045,
        e + 0.47 + a() * 0.06,
        h + Math.sin(S) * 0.045,
      ],
      O = [
        M[0] + (A[0] - M[0]) * 0.55,
        M[1] + (A[1] - M[1]) * 0.55,
        M[2] + (A[2] - M[2]) * 0.55,
      ],
      I = 0.05 + a() * 0.012,
      k = a();
    (Ee(r, M, O, I, 6, n, 7, i, k, 0, !0, !1),
      Ee(r, O, A, I * 0.94, 6, u, 7, 1, k, 0, !1, !0));
  }
  const g = T[p.FIRE].tex[1];
  r.animMode = 1;
  const y = e + 0.05,
    R = 0.74 + a() * 0.08,
    E = 0.29;
  for (let x = 0; x < 4; x++) {
    const S = (x * Math.PI) / 4 + 0.2,
      M = Math.cos(S) * E,
      A = Math.sin(S) * E;
    r.rawQuad(
      [
        [c - M, y + R, h - A],
        [c - M, y, h - A],
        [c + M, y + R, h + A],
        [c + M, y, h + A],
      ],
      Me([-A, 0, M]),
      g,
      1,
      !0,
    );
  }
  for (let x = 0; x < 2; x++) {
    const S = m + x * Math.PI + 0.5,
      M = c + Math.cos(S) * 0.2,
      A = h + Math.sin(S) * 0.2,
      O = Math.cos(S + 1.3) * 0.1,
      I = Math.sin(S + 1.3) * 0.1,
      k = 0.3;
    r.rawQuad(
      [
        [M - O, y + 0.05 + k, A - I],
        [M - O, y + 0.05, A - I],
        [M + O, y + 0.05 + k, A + I],
        [M + O, y + 0.05, A + I],
      ],
      Me([-I, 0, O]),
      g,
      1,
      !0,
    );
  }
  r.animMode = 0;
}
function d0(r, t, e, s, n, i, c) {
  const h = { top: i[0], side: i[1], bottom: i[2] },
    o = 0.13,
    a = 0.17,
    u = 0.9;
  for (const [m, _] of [
    [0.08, 0.08],
    [0.79, 0.08],
    [0.08, 0.79],
    [0.79, 0.79],
  ])
    r.boxUV(t + m, e, s + _, t + m + o, e + u, s + _ + o, h, c, t, e, s);
  const d = (m) => {
    for (let _ = 0; _ < 4; _++) {
      const g = a + _ * 0.17,
        y = g + 0.115;
      m
        ? (r.boxUV(
            t + g,
            e + 0.12,
            s + 0.08,
            t + y,
            e + 0.84,
            s + 0.2,
            h,
            c,
            t,
            e,
            s,
          ),
          r.boxUV(
            t + g,
            e + 0.12,
            s + 0.8,
            t + y,
            e + 0.84,
            s + 0.92,
            h,
            c,
            t,
            e,
            s,
          ))
        : (r.boxUV(
            t + 0.08,
            e + 0.12,
            s + g,
            t + 0.2,
            e + 0.84,
            s + y,
            h,
            c,
            t,
            e,
            s,
          ),
          r.boxUV(
            t + 0.8,
            e + 0.12,
            s + g,
            t + 0.92,
            e + 0.84,
            s + y,
            h,
            c,
            t,
            e,
            s,
          ));
    }
  };
  (d(!0),
    d(!1),
    r.boxUV(
      t + 0.04,
      e + 0.84,
      s + 0.04,
      t + 0.96,
      e + 0.98,
      s + 0.18,
      h,
      c,
      t,
      e,
      s,
    ),
    r.boxUV(
      t + 0.04,
      e + 0.84,
      s + 0.82,
      t + 0.96,
      e + 0.98,
      s + 0.96,
      h,
      c,
      t,
      e,
      s,
    ),
    r.boxUV(
      t + 0.04,
      e + 0.84,
      s + 0.18,
      t + 0.18,
      e + 0.98,
      s + 0.82,
      h,
      c,
      t,
      e,
      s,
    ),
    r.boxUV(
      t + 0.82,
      e + 0.84,
      s + 0.18,
      t + 0.96,
      e + 0.98,
      s + 0.82,
      h,
      c,
      t,
      e,
      s,
    ));
  const l = { top: i[0], side: i[1], bottom: i[2] };
  r.boxUV(
    t + a,
    e + 0.08,
    s + a,
    t + 1 - a,
    e + 0.12,
    s + 1 - a,
    l,
    c,
    t,
    e,
    s,
  );
  const f = Math.max(0, Math.min(100, n)) / 100;
  if (f > 0) {
    const m = 0.12 + f * 0.67;
    r.boxUV(t + a, e + 0.1, s + a, t + 1 - a, e + m, s + 1 - a, l, c, t, e, s);
  }
}
function f0(r, t, e, s, n, i) {
  const c = t + 0.5,
    h = s + 0.5,
    o = { top: n, side: n, bottom: n };
  (r.box(c - 0.22, e, h - 0.22, c + 0.22, e + 0.08, h + 0.22, o, i),
    r.box(c - 0.11, e + 0.08, h - 0.11, c + 0.11, e + 0.62, h + 0.11, o, i),
    r.box(c - 0.06, e + 0.62, h - 0.06, c + 0.06, e + 0.92, h + 0.06, o, i),
    r.box(c - 0.025, e + 0.92, h - 0.025, c + 0.025, e + 1, h + 0.025, o, i));
}
