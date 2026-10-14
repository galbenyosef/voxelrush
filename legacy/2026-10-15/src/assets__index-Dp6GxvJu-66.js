// assets__index-Dp6GxvJu 66 — add
// Lines 48591-48937 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function T5(n) {
  const e = Cw[n] ?? Cw[0],
    t = yt(1),
    i = yt(2),
    s = new pe(),
    o = 0.13,
    a = 0.074,
    r = e.barLen,
    l = 0.02,
    c = 0.028,
    h = 0.074,
    d = -0.12 - r + c;
  (s.add(
    Wo(
      [
        [-0.13, -0.075],
        [-0.13, 0.025],
        [-0.1, 0.07],
        [0.07, 0.085],
        [0.125, 0.06],
        [0.14, -0.02],
        [0.12, -0.075],
      ],
      o,
      e.body,
      "gloss",
    ),
  ),
    s.add(
      Wo(
        [
          [-0.095, 0.06],
          [-0.06, 0.1],
          [0.06, 0.108],
          [0.105, 0.085],
          [0.11, 0.06],
        ],
        o - 0.012,
        e.cover,
        "gloss",
      ),
    ),
    s.add(De(o + 0.004, 0.018, 0.25, e.dark, 0, -0.07, 0.005, "matte")),
    t &&
      (zr(s, 5, 0.022, o - 0.03, 0.006, 0.01, e.dark, 0, 0.106, -0.03, "matte"),
      s.add(
        De(0.004, 0.03, 0.12, e.accent, -o / 2 - 0.001, 0.035, 0, "gloss"),
      )));
  const u = new le(new xt(0.056, 0.056, 0.016, di(18)), Bi(e.dark, "gloss"));
  if (
    ((u.rotation.z = Math.PI / 2),
    u.position.set(-o / 2 - 0.007, 0, 0.03),
    s.add(u),
    t)
  )
    for (let se = 0; se < 6; se++) {
      const oe = De(
        0.003,
        0.006,
        0.07,
        723981,
        -o / 2 - 0.016,
        -0.03 + se * 0.012,
        0.03,
        "matte",
      );
      s.add(oe);
    }
  (s.add(De(0.03, 0.012, 0.014, e.dark, -o / 2 - 0.004, 0.07, 0.07, "gloss")),
    s.add(Qt(0.013, 0.012, e.accent, -0.035, 0.09, 0.115, "gloss")),
    i && s.add(Qt(0.011, 0.012, 2829616, 0.035, 0.088, 0.118, "gloss")));
  const f = new pe();
  ((f.name = "chainsaw-bar"), (f.userData.skinKeep = !0));
  const p = [
    [l, h / 2],
    [d, c],
  ];
  for (let se = 1; se < 12; se++) {
    const oe = Math.PI / 2 + (se / 12) * Math.PI;
    p.push([d + Math.cos(oe) * c, Math.sin(oe) * c]);
  }
  p.push([d, -c], [l, -h / 2]);
  const m = Vh(p, 0.009, e.bar, "metal", 0.0012);
  if (((m.position.x = a), f.add(m), t)) {
    const se = Vh(
      [
        [-0.14, 0.012],
        [-0.14 - r * 0.45, 0.01],
        [-0.14 - r * 0.45, -0.012],
        [-0.14, -0.014],
      ],
      0.0104,
      e.decal,
      "gloss",
      3e-4,
    );
    ((se.position.x = a), f.add(se));
    for (const oe of [-1, 1])
      f.add(Qt(0.006, 0.002, 8226446, a + oe * 0.005, 0, d, "metal"));
  }
  s.add(f);
  const y = LV(l, h / 2, d, c),
    g = 0.0095,
    b = Math.floor(y.length / g),
    S = new hs(new Ct(0.0034, 0.0075, 0.009), Bi(3817284, "metal"), b),
    M = new hs(
      new Ct(0.0062, 0.0062, 0.0072),
      Bi(15002092, "metal"),
      Math.ceil(b / 2),
    ),
    x = new pe();
  ((x.name = "chainsaw-chain"),
    (x.userData.skinKeep = !0),
    (x.position.x = a),
    x.add(S, M),
    s.add(x));
  const T = new $t();
  ((T.name = "chain-drive"), s.add(T));
  const A = new bt(),
    _ = new Jt(),
    C = new k(),
    R = new k(),
    L = new k(),
    N = new k(1, 1, 1),
    D = new k(0, 0, -1);
  let H = NaN;
  const G = () => {
    const se = (((-T.rotation.z * 0.008) % y.length) + y.length) % y.length;
    if (se !== H) {
      H = se;
      for (let oe = 0; oe < b; oe++)
        if (
          (y.at((oe * g + se) % y.length, C, R, L),
          _.setFromUnitVectors(D, R),
          S.setMatrixAt(oe, A.compose(C, _, N)),
          oe % 2 === 0)
        ) {
          const J = (oe >> 1) % 2 ? 1 : -1;
          (C.addScaledVector(L, 0.0042),
            (C.x += J * 0.0024),
            M.setMatrixAt(oe >> 1, A.compose(C, _, N)));
        }
      ((S.instanceMatrix.needsUpdate = !0),
        (M.instanceMatrix.needsUpdate = !0));
    }
  };
  (G(),
    (S.onBeforeRender = G),
    s.add(
      Wo(
        [
          [-0.14, -0.06],
          [-0.14, 0.035],
          [-0.1, 0.055],
          [0.03, 0.055],
          [0.05, 0.02],
          [0.05, -0.06],
        ],
        0.022,
        e.dark,
        "gloss",
        a + 0.016,
      ),
    ));
  for (const se of [-0.035, -0.075]) {
    const oe = Qt(0.009, 0.008, 10134185, a + 0.03, -0.01, se, "metal");
    (oe.rotation.set(0, Math.PI / 2, 0), s.add(oe));
  }
  if (t)
    for (let se = 0; se < 3; se++) {
      const oe = De(
        0.006,
        0.02,
        0.014,
        10134185,
        a - 0.012,
        0.03 - se * 0.03,
        -0.142,
        "metal",
      );
      ((oe.rotation.x = 0.3), s.add(oe));
    }
  const I = new pp([
    new k(0, 0.06, 0.1),
    new k(0, 0.082, 0.17),
    new k(0, 0.07, 0.26),
    new k(0, 0, 0.29),
    new k(0, -0.06, 0.27),
    new k(0, -0.07, 0.13),
  ]);
  (s.add(new le(new nu(I, i ? 28 : 14, 0.017, di(8), !1), Bi(e.dark, "matte"))),
    s.add(De(0.03, 0.03, 0.09, e.body, 0, 0.068, 0.215, "gloss")),
    t &&
      zr(s, 5, 0.016, 0.032, 0.004, 0.006, 1052946, 0, 0.085, 0.18, "matte"));
  const O = De(0.012, 0.026, 0.03, 1382170, 0, 0.043, 0.2, "metal");
  ((O.rotation.x = 0.2),
    s.add(O),
    s.add(De(0.012, 0.012, 0.03, 1382170, 0, 0.09, 0.2, "metal")),
    ln(s, "hand-r", 0, 0.072, 0.215),
    (s.getObjectByName("hand-r").userData.along = !0));
  const F = new pp([
    new k(-o / 2 + 0.005, -0.065, -0.07),
    new k(-o / 2 - 0.03, 0.02, -0.075),
    new k(-0.05, 0.14, -0.08),
    new k(0.03, 0.15, -0.075),
    new k(o / 2 - 0.006, 0.09, -0.065),
  ]);
  s.add(new le(new nu(F, i ? 24 : 12, 0.012, di(8), !1), Bi(1776928, "gloss")));
  const X = Wo(
    [
      [-0.14, 0.05],
      [-0.15, 0.16],
      [-0.13, 0.17],
      [-0.115, 0.07],
    ],
    o - 0.02,
    e.dark,
    "gloss",
  );
  if (
    (s.add(X),
    s.add(
      De(
        0.05,
        0.05,
        0.035,
        n === 2 ? 13094611 : 2961460,
        0.025,
        -0.035,
        -0.146,
        n === 2 ? "metal" : "matte",
      ),
    ),
    t &&
      zr(
        s,
        3,
        0.012,
        0.044,
        0.004,
        0.004,
        921360,
        0.025,
        -0.035,
        -0.164,
        "matte",
      ),
    n === 2 && t)
  )
    for (let se = 0; se < 4; se++) {
      const oe = new le(
        new Ct(0.004, 0.006, 0.014),
        yl(se < 3 ? 6547199 : 16738842),
      );
      (oe.position.set(-o / 2 - 5e-4, 0.05, -0.04 + se * 0.02), s.add(oe));
    }
  if (n === 1 && t)
    for (let se = 0; se < 3; se++)
      s.add(
        De(
          0.004,
          0.012,
          0.04,
          e.accent,
          o / 2 + 0.001,
          -0.045 + se * 0.03,
          0.085,
          "gloss",
        ),
      );
  for (let se = 0; se <= n; se++) {
    const oe = De(
      0.004,
      0.012,
      0.014,
      [13950437, 7461326, 14460415][n] ?? 13950437,
      -o / 2 - 0.003,
      0.058,
      0.1 - se * 0.022,
      "metal",
    );
    ((oe.name = "tool-tier-mark"), (oe.userData.skinKeep = !0), s.add(oe));
  }
  const Q = new $t();
  (Q.position.set(a, 0, d - c - 0.01), s.add(Q));
  const ee = new pe();
  return (
    (s.name = "fp-turn"),
    (s.userData.fpTurn = [-0.16, 0.6, 0.12]),
    ee.add(s),
    qn(ee, Q, null, null, T)
  );
}
function LV(n, e, t, i) {
  const o = i + 0.005,
    a = e + 0.005,
    r = new tt(n, a),
    l = new tt(t, o),
    c = r.distanceTo(l),
    h = Math.PI * o,
    d = Math.PI * a;
  return {
    length: 2 * c + h + d,
    at(f, p, m, y) {
      if (f < c) {
        const g = f / c;
        (p.set(0, a + (o - a) * g, n + (t - n) * g),
          m.set(0, o - a, t - n).normalize(),
          y.set(0, 1, 0));
      } else if ((f -= c) < h) {
        const g = Math.PI / 2 + (f / h) * Math.PI;
        (p.set(0, Math.sin(g) * o, t + Math.cos(g) * o),
          m.set(0, Math.cos(g), -Math.sin(g)),
          y.set(0, Math.sin(g), Math.cos(g)));
      } else if ((f -= h) < c) {
        const g = f / c;
        (p.set(0, -(o + (a - o) * g), t + (n - t) * g),
          m.set(0, -0.008999999999999994, n - t).normalize(),
          y.set(0, -1, 0));
      } else {
        const g = -Math.PI / 2 + ((f - c) / d) * Math.PI;
        (p.set(0, Math.sin(g) * a, n + Math.cos(g) * a),
          m.set(0, Math.cos(g), -Math.sin(g)),
          y.set(0, Math.sin(g), Math.cos(g)));
      }
    },
  };
}
function IV() {
  const n = new pe(),
    e = De(0.18, 0.2, 0.08, 12159555, 0, -0.02, 0, "matte");
  ((e.rotation.z = -0.08),
    n.add(e),
    n.add(De(0.17, 0.025, 0.085, 7162406, 0, 0.09, 0)));
  for (let i = 0; i < 7; i++) {
    const s = new le(new mn(0.012, 6, 4), Bi(13215063));
    (s.scale.set(1.8, 0.65, 0.8),
      s.position.set(
        ((i % 3) - 1) * 0.035,
        0.11 + Math.floor(i / 3) * 0.012,
        (i % 2) * 0.018,
      ),
      n.add(s));
  }
  const t = new $t();
  return (n.add(t), qn(n, t, null, null));
}
