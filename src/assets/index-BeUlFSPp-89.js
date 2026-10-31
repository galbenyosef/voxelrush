// index-BeUlFSPp 89 — add
// Lines 57136-57482 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function zb(s) {
  const e = l4[s] ?? l4[0],
    t = wt(1),
    i = wt(2),
    n = new re(),
    o = 0.13,
    a = 0.074,
    r = e.barLen,
    l = 0.02,
    c = 0.028,
    h = 0.074,
    d = -0.12 - r + c;
  (n.add(
    As(
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
    n.add(
      As(
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
    n.add(me(o + 0.004, 0.018, 0.25, e.dark, 0, -0.07, 0.005, "matte")),
    t &&
      (Ll(n, 5, 0.022, o - 0.03, 0.006, 0.01, e.dark, 0, 0.106, -0.03, "matte"),
      n.add(
        me(0.004, 0.03, 0.12, e.accent, -o / 2 - 0.001, 0.035, 0, "gloss"),
      )));
  const u = new Q(new Tt(0.056, 0.056, 0.016, ci(18)), Ti(e.dark, "gloss"));
  if (
    ((u.rotation.z = Math.PI / 2),
    u.position.set(-o / 2 - 0.007, 0, 0.03),
    n.add(u),
    t)
  )
    for (let ge = 0; ge < 6; ge++) {
      const be = me(
        0.003,
        0.006,
        0.07,
        723981,
        -o / 2 - 0.016,
        -0.03 + ge * 0.012,
        0.03,
        "matte",
      );
      n.add(be);
    }
  (n.add(me(0.03, 0.012, 0.014, e.dark, -o / 2 - 0.004, 0.07, 0.07, "gloss")),
    n.add(Gt(0.013, 0.012, e.accent, -0.035, 0.09, 0.115, "gloss")),
    i && n.add(Gt(0.011, 0.012, 2829616, 0.035, 0.088, 0.118, "gloss")));
  const f = new re();
  ((f.name = "chainsaw-bar"), (f.userData.skinKeep = !0));
  const p = [
    [l, h / 2],
    [d, c],
  ];
  for (let ge = 1; ge < 12; ge++) {
    const be = Math.PI / 2 + (ge / 12) * Math.PI;
    p.push([d + Math.cos(be) * c, Math.sin(be) * c]);
  }
  p.push([d, -c], [l, -h / 2]);
  const m = Bh(p, 0.009, e.bar, "metal", 0.0012);
  if (((m.position.x = a), f.add(m), t)) {
    const ge = Bh(
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
    ((ge.position.x = a), f.add(ge));
    for (const be of [-1, 1])
      f.add(Gt(0.006, 0.002, 8226446, a + be * 0.005, 0, d, "metal"));
  }
  n.add(f);
  const g = _X(l, h / 2, d, c),
    y = 0.0095,
    b = Math.floor(g.length / y),
    S = new On(new kt(0.0034, 0.0075, 0.009), Ti(3817284, "metal"), b),
    M = new On(
      new kt(0.0062, 0.0062, 0.0072),
      Ti(15002092, "metal"),
      Math.ceil(b / 2),
    ),
    E = new re();
  ((E.name = "chainsaw-chain"),
    (E.userData.skinKeep = !0),
    (E.position.x = a),
    E.add(S, M),
    n.add(E));
  const A = new Xt();
  ((A.name = "chain-drive"), n.add(A));
  const T = new Rt(),
    x = new hi(),
    R = new k(),
    _ = new k(),
    C = new k(),
    P = new k(1, 1, 1),
    O = new k(0, 0, -1);
  let B = NaN;
  const H = () => {
    const ge = (((-A.rotation.z * 0.008) % g.length) + g.length) % g.length;
    if (ge !== B) {
      B = ge;
      for (let be = 0; be < b; be++)
        if (
          (g.at((be * y + ge) % g.length, R, _, C),
          x.setFromUnitVectors(O, _),
          S.setMatrixAt(be, T.compose(R, x, P)),
          be % 2 === 0)
        ) {
          const oe = (be >> 1) % 2 ? 1 : -1;
          (R.addScaledVector(C, 0.0042),
            (R.x += oe * 0.0024),
            M.setMatrixAt(be >> 1, T.compose(R, x, P)));
        }
      ((S.instanceMatrix.needsUpdate = !0),
        (M.instanceMatrix.needsUpdate = !0));
    }
  };
  (H(),
    (S.onBeforeRender = H),
    n.add(
      As(
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
  for (const ge of [-0.035, -0.075]) {
    const be = Gt(0.009, 0.008, 10134185, a + 0.03, -0.01, ge, "metal");
    (be.rotation.set(0, Math.PI / 2, 0), n.add(be));
  }
  if (t)
    for (let ge = 0; ge < 3; ge++) {
      const be = me(
        0.006,
        0.02,
        0.014,
        10134185,
        a - 0.012,
        0.03 - ge * 0.03,
        -0.142,
        "metal",
      );
      ((be.rotation.x = 0.3), n.add(be));
    }
  const D = new J1([
    new k(0, 0.06, 0.1),
    new k(0, 0.082, 0.17),
    new k(0, 0.07, 0.26),
    new k(0, 0, 0.29),
    new k(0, -0.06, 0.27),
    new k(0, -0.07, 0.13),
  ]);
  (n.add(new Q(new Af(D, i ? 28 : 14, 0.017, ci(8), !1), Ti(e.dark, "matte"))),
    n.add(me(0.03, 0.03, 0.09, e.body, 0, 0.068, 0.215, "gloss")),
    t &&
      Ll(n, 5, 0.016, 0.032, 0.004, 0.006, 1052946, 0, 0.085, 0.18, "matte"));
  const U = me(0.012, 0.026, 0.03, 1382170, 0, 0.043, 0.2, "metal");
  ((U.rotation.x = 0.2),
    n.add(U),
    n.add(me(0.012, 0.012, 0.03, 1382170, 0, 0.09, 0.2, "metal")),
    _i(n, "hand-r", 0, 0.072, 0.215),
    (n.getObjectByName("hand-r").userData.along = !0));
  const W = new J1([
    new k(-o / 2 + 0.005, -0.065, -0.07),
    new k(-o / 2 - 0.03, 0.02, -0.075),
    new k(-0.05, 0.14, -0.08),
    new k(0.03, 0.15, -0.075),
    new k(o / 2 - 0.006, 0.09, -0.065),
  ]);
  n.add(new Q(new Af(W, i ? 24 : 12, 0.012, ci(8), !1), Ti(1776928, "gloss")));
  const J = As(
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
    (n.add(J),
    n.add(
      me(
        0.05,
        0.05,
        0.035,
        s === 2 ? 13094611 : 2961460,
        0.025,
        -0.035,
        -0.146,
        s === 2 ? "metal" : "matte",
      ),
    ),
    t &&
      Ll(
        n,
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
    s === 2 && t)
  )
    for (let ge = 0; ge < 4; ge++) {
      const be = new Q(
        new kt(0.004, 0.006, 0.014),
        nc(ge < 3 ? 6547199 : 16738842),
      );
      (be.position.set(-o / 2 - 5e-4, 0.05, -0.04 + ge * 0.02), n.add(be));
    }
  if (s === 1 && t)
    for (let ge = 0; ge < 3; ge++)
      n.add(
        me(
          0.004,
          0.012,
          0.04,
          e.accent,
          o / 2 + 0.001,
          -0.045 + ge * 0.03,
          0.085,
          "gloss",
        ),
      );
  for (let ge = 0; ge <= s; ge++) {
    const be = me(
      0.004,
      0.012,
      0.014,
      [13950437, 7461326, 14460415][s] ?? 13950437,
      -o / 2 - 0.003,
      0.058,
      0.1 - ge * 0.022,
      "metal",
    );
    ((be.name = "tool-tier-mark"), (be.userData.skinKeep = !0), n.add(be));
  }
  const j = new Xt();
  (j.position.set(a, 0, d - c - 0.01), n.add(j));
  const ne = new re();
  return (
    (n.name = "fp-turn"),
    (n.userData.fpTurn = [-0.16, 0.6, 0.12]),
    ne.add(n),
    Hs(ne, j, null, null, A)
  );
}
function _X(s, e, t, i) {
  const o = i + 0.005,
    a = e + 0.005,
    r = new ct(s, a),
    l = new ct(t, o),
    c = r.distanceTo(l),
    h = Math.PI * o,
    d = Math.PI * a;
  return {
    length: 2 * c + h + d,
    at(f, p, m, g) {
      if (f < c) {
        const y = f / c;
        (p.set(0, a + (o - a) * y, s + (t - s) * y),
          m.set(0, o - a, t - s).normalize(),
          g.set(0, 1, 0));
      } else if ((f -= c) < h) {
        const y = Math.PI / 2 + (f / h) * Math.PI;
        (p.set(0, Math.sin(y) * o, t + Math.cos(y) * o),
          m.set(0, Math.cos(y), -Math.sin(y)),
          g.set(0, Math.sin(y), Math.cos(y)));
      } else if ((f -= h) < c) {
        const y = f / c;
        (p.set(0, -(o + (a - o) * y), t + (s - t) * y),
          m.set(0, -0.008999999999999994, s - t).normalize(),
          g.set(0, -1, 0));
      } else {
        const y = -Math.PI / 2 + ((f - c) / d) * Math.PI;
        (p.set(0, Math.sin(y) * a, s + Math.cos(y) * a),
          m.set(0, Math.cos(y), -Math.sin(y)),
          g.set(0, Math.sin(y), Math.cos(y)));
      }
    },
  };
}
function RX() {
  const s = new re(),
    e = me(0.18, 0.2, 0.08, 12159555, 0, -0.02, 0, "matte");
  ((e.rotation.z = -0.08),
    s.add(e),
    s.add(me(0.17, 0.025, 0.085, 7162406, 0, 0.09, 0)));
  for (let i = 0; i < 7; i++) {
    const n = new Q(new ws(0.012, 6, 4), Ti(13215063));
    (n.scale.set(1.8, 0.65, 0.8),
      n.position.set(
        ((i % 3) - 1) * 0.035,
        0.11 + Math.floor(i / 3) * 0.012,
        (i % 2) * 0.018,
      ),
      s.add(n));
  }
  const t = new Xt();
  return (s.add(t), Hs(s, t, null, null));
}
