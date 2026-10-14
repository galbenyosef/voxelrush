// assets__chunk-mesh-worker-coep-v1-BX2YFLnd 30 — math
// Lines 9278-9573 of readable/assets__chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
function d0(r, t, e, s, n, i) {
  var L, I;
  const h = t + 0.5,
    c = s + 0.5;
  let o = ((t * 73856093) ^ (s * 19349663) ^ (e * 83492791)) >>> 0;
  const a = () => (
      (o = (Math.imul(o ^ (o >>> 15), 2246822507) + 2654435769) >>> 0),
      (o >>> 8) / 16777216
    ),
    u = un,
    d = [
      ((L = T[f.COBBLE]) == null ? void 0 : L.tex[1]) ?? 4,
      ((I = T[f.STONE]) == null ? void 0 : I.tex[1]) ?? 3,
    ],
    l = 9,
    p = a() * Math.PI * 2;
  for (let A = 0; A < l; A++) {
    const x = p + (A / l) * Math.PI * 2 + (a() - 0.5) * 0.25,
      S = 0.395 + (a() - 0.5) * 0.03,
      R = 0.07 + a() * 0.025,
      O = 0.055 + a() * 0.02,
      k = 0.085 + a() * 0.05;
    l0(
      r,
      h + Math.cos(x) * S,
      e,
      c + Math.sin(x) * S,
      R,
      k,
      O,
      x + Math.PI / 2 + (a() - 0.5) * 0.4,
      d[A % 2],
      i,
    );
  }
  Me(r, [h, e, c], [h, e + 0.035, c], 0.31, 8, u, u, 1, a(), 0, !1, !0);
  const m = a() * Math.PI;
  for (let A = 0; A < 2; A++) {
    const x = m + (A * Math.PI) / 2 + (a() - 0.5) * 0.3,
      S = Math.cos(x) * 0.29,
      R = Math.sin(x) * 0.29,
      O = e + 0.075 + A * 0.05;
    (Me(
      r,
      [h - S, O, c - R],
      [h - S * 0.25, O, c - R * 0.25],
      0.048,
      6,
      n,
      7,
      i,
      a(),
    ),
      Me(
        r,
        [h - S * 0.25, O, c - R * 0.25],
        [h + S * 0.25, O, c + R * 0.25],
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
      Me(
        r,
        [h + S * 0.25, O, c + R * 0.25],
        [h + S, O, c + R],
        0.048,
        6,
        n,
        7,
        i,
        a(),
      ));
  }
  const _ = a() * Math.PI * 2;
  for (let A = 0; A < 4; A++) {
    const x = _ + (A * Math.PI) / 2 + (a() - 0.5) * 0.35,
      S = [h + Math.cos(x) * 0.36, e + 0.03, c + Math.sin(x) * 0.36],
      R = [
        h + Math.cos(x) * 0.045,
        e + 0.47 + a() * 0.06,
        c + Math.sin(x) * 0.045,
      ],
      O = [
        S[0] + (R[0] - S[0]) * 0.55,
        S[1] + (R[1] - S[1]) * 0.55,
        S[2] + (R[2] - S[2]) * 0.55,
      ],
      k = 0.05 + a() * 0.012,
      W = a();
    (Me(r, S, O, k, 6, n, 7, i, W, 0, !0, !1),
      Me(r, O, R, k * 0.94, 6, u, 7, 1, W, 0, !1, !0));
  }
  const y = T[f.FIRE].tex[1];
  r.animMode = 1;
  const E = e + 0.05,
    M = 0.74 + a() * 0.08,
    g = 0.29;
  for (let A = 0; A < 4; A++) {
    const x = (A * Math.PI) / 4 + 0.2,
      S = Math.cos(x) * g,
      R = Math.sin(x) * g;
    r.rawQuad(
      [
        [h - S, E + M, c - R],
        [h - S, E, c - R],
        [h + S, E + M, c + R],
        [h + S, E, c + R],
      ],
      Te([-R, 0, S]),
      y,
      1,
      !0,
    );
  }
  for (let A = 0; A < 2; A++) {
    const x = m + A * Math.PI + 0.5,
      S = h + Math.cos(x) * 0.2,
      R = c + Math.sin(x) * 0.2,
      O = Math.cos(x + 1.3) * 0.1,
      k = Math.sin(x + 1.3) * 0.1,
      W = 0.3;
    r.rawQuad(
      [
        [S - O, E + 0.05 + W, R - k],
        [S - O, E + 0.05, R - k],
        [S + O, E + 0.05 + W, R + k],
        [S + O, E + 0.05, R + k],
      ],
      Te([-k, 0, O]),
      y,
      1,
      !0,
    );
  }
  r.animMode = 0;
}
function f0(r, t, e, s, n, i, h) {
  const c = { top: i[0], side: i[1], bottom: i[2] },
    o = 0.13,
    a = 0.17,
    u = 0.9;
  for (const [m, _] of [
    [0.08, 0.08],
    [0.79, 0.08],
    [0.08, 0.79],
    [0.79, 0.79],
  ])
    r.boxUV(t + m, e, s + _, t + m + o, e + u, s + _ + o, c, h, t, e, s);
  const d = (m) => {
    for (let _ = 0; _ < 4; _++) {
      const y = a + _ * 0.17,
        E = y + 0.115;
      m
        ? (r.boxUV(
            t + y,
            e + 0.12,
            s + 0.08,
            t + E,
            e + 0.84,
            s + 0.2,
            c,
            h,
            t,
            e,
            s,
          ),
          r.boxUV(
            t + y,
            e + 0.12,
            s + 0.8,
            t + E,
            e + 0.84,
            s + 0.92,
            c,
            h,
            t,
            e,
            s,
          ))
        : (r.boxUV(
            t + 0.08,
            e + 0.12,
            s + y,
            t + 0.2,
            e + 0.84,
            s + E,
            c,
            h,
            t,
            e,
            s,
          ),
          r.boxUV(
            t + 0.8,
            e + 0.12,
            s + y,
            t + 0.92,
            e + 0.84,
            s + E,
            c,
            h,
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
      c,
      h,
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
      c,
      h,
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
      c,
      h,
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
      c,
      h,
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
    h,
    t,
    e,
    s,
  );
  const p = Math.max(0, Math.min(100, n)) / 100;
  if (p > 0) {
    const m = 0.12 + p * 0.67;
    r.boxUV(t + a, e + 0.1, s + a, t + 1 - a, e + m, s + 1 - a, l, h, t, e, s);
  }
}
function p0(r, t, e, s, n, i) {
  const h = t + 0.5,
    c = s + 0.5,
    o = { top: n, side: n, bottom: n };
  (r.box(h - 0.22, e, c - 0.22, h + 0.22, e + 0.08, c + 0.22, o, i),
    r.box(h - 0.11, e + 0.08, c - 0.11, h + 0.11, e + 0.62, c + 0.11, o, i),
    r.box(h - 0.06, e + 0.62, c - 0.06, h + 0.06, e + 0.92, c + 0.06, o, i),
    r.box(h - 0.025, e + 0.92, c - 0.025, h + 0.025, e + 1, c + 0.025, o, i));
}
