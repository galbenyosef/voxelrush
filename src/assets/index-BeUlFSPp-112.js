// index-BeUlFSPp 112 — add
// Lines 64237-64524 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function jQ() {
  const s = new re(),
    e = [],
    t = wt(1),
    i = wt(2),
    n = new re();
  ((n.name = "heli-cabin"),
    n.add(se(1.5, 0.14, 2.5, Yl, 0, 0.7, 0)),
    n.add(
      gr(
        [
          [-1.2, 1.92],
          [1.25, 1.92],
          [1.25, 2.08],
          [-1.2, 2.08],
        ],
        1.5,
        gh,
        0,
        0.03,
      ),
    ),
    n.add(se(1.46, 1.24, 0.1, gh, 0, 1.36, 1.2)));
  for (const M of [-1, 1])
    (n.add(se(0.1, 1.2, 0.14, gh, M * 0.74, 1.34, -1.12)),
      n.add(se(0.1, 1.2, 0.14, gh, M * 0.74, 1.34, 1.12)),
      n.add(se(0.12, 0.3, 2.5, Yl, M * 0.77, 0.86, 0)),
      t &&
        n.add(
          se(0.05, 0.06, 1.9, R8, M * 0.8, 1.92, 0),
          se(0.05, 0.06, 1.9, R8, M * 0.8, 0.98, 0),
        ));
  if (t) {
    const M = new re();
    ((M.userData.lodSkip = !0),
      n.add(M),
      M.add(se(1.3, 0.08, 1.4, 2895656, 0, 0.79, 0.2)));
    for (const E of [-1, 1])
      M.add(se(0.3, 0.45, 1.5, 3749421, E * 0.5, 1.05, 0.45));
  }
  (s.add(n), e.push(n));
  const o = En(L.HELI);
  for (const M of [-1, 1]) {
    const E = yT(M < 0 ? 1 : 2, M * 1.13, 0.98, 0.65, !1, 0.46);
    if (
      ((E.rotation.y = (-M * Math.PI) / 2),
      E.scale.set(1 / o.x, 1 / o.y, 1 / o.z),
      s.add(E, se(0.36, 0.05, 0.07, 3816758, M * 0.96, 0.97, 0.65)),
      t)
    ) {
      const A = se(0.34, 0.035, 0.035, 3816758, M * 0.97, 0.88, 0.65);
      ((A.rotation.z = M * 0.52), s.add(A));
    }
  }
  const a = new re();
  ((a.name = "heli-pilot-obstructions"),
    a.add(
      gr(
        [
          [-1.15, 1.2],
          [-1.95, 1.24],
          [-2.22, 1.42],
          [-2.2, 1.62],
          [-1.62, 2.12],
          [-1.15, 2.12],
        ],
        1.06,
        gh,
        0,
        0.08,
      ),
    ),
    a.add(
      gr(
        [
          [-1.2, 0.74],
          [-1.2, 1.22],
          [-1.9, 1.24],
          [-1.5, 0.8],
        ],
        1.2,
        Yl,
        0,
        0.05,
      ),
    ));
  const r = [],
    l = se(0.9, 0.04, 0.6, 2767432, 0, 1.9, -1.93);
  ((l.rotation.x = 0.72), r.push(l));
  const c = se(0.8, 0.04, 0.26, 2767432, 0, 1.52, -2.22);
  ((c.rotation.x = 1.5), r.push(c));
  for (const M of [-1, 1]) {
    const E = se(0.04, 0.42, 0.55, 2767432, M * 0.55, 1.72, -1.55);
    r.push(E);
  }
  const h = new re();
  h.name = "heli-glazing";
  for (const M of r) h.add(M);
  (s.add(h), e.push(h));
  const d = (M, E, A, T, x, R, _ = 0) => {
    const C = se(M, E, A, Yl, T, x, R);
    ((C.rotation.x = _), s.add(C));
  };
  if (t) {
    d(0.06, 0.06, 0.66, 0, 1.92, -1.9, 0.72);
    for (const M of [-1, 1])
      (d(0.06, 0.06, 0.7, M * 0.48, 1.9, -1.88, 0.72),
        d(0.05, 0.46, 0.05, M * 0.54, 1.72, -1.28));
  }
  const u = se(0.9, 0.16, 0.08, 3356218, 0, 1.28, -1.88);
  if (
    ((u.rotation.x = -0.35),
    a.add(u),
    t && a.add(se(0.94, 0.035, 0.12, 2763823, 0, 1.37, -1.9)),
    t)
  ) {
    const E = [
        new ms(0.18, 0.1).translate(-0.26, 0, 0),
        new ms(0.18, 0.1),
        new ms(0.18, 0.1).translate(0.26, 0, 0),
      ],
      A = new Q(Eo(E, !1), new Zt({ color: 1919546 }));
    (A.position.set(0, 1.285, -1.925),
      (A.rotation.x = -0.35),
      a.add(A),
      a.add(se(0.08, 0.32, 0.08, Ds, 0, 1.08, -1.62)),
      a.add(
        se(0.5, 0.12, 0.45, 3749421, 0, 1.12, -1.45),
        se(0.5, 0.55, 0.1, 3749421, 0, 1.4, -1.22),
      ));
  }
  (s.add(a), e.push(a));
  const f = new re();
  ((f.name = "chin-gun"),
    f.position.set(0, 0.92, -1.92),
    f.add(
      Gs(0.16, 0.14, Yl, 0, 0, 0, 0.18, 12),
      se(0.14, 0.14, 0.22, Ds, 0, -0.1, -0.12),
    ),
    f.add(
      Hi(0.035, 0.7, Ds, -0.03, -0.1, -0.5),
      Hi(0.035, 0.7, Ds, 0.03, -0.1, -0.5),
    ),
    s.add(f),
    e.push(f));
  const p = se(0.16, 0.05, 0.16, Ff, 0, 0.98, -2.1);
  (s.add(p), e.push(p));
  const m = new Q(new ws(0.17, 12, 8), wn(2830630));
  if (
    (m.position.set(0, 1.08, -2.2),
    s.add(m),
    e.push(m),
    s.add(
      gr(
        [
          [-0.9, 2.06],
          [1.4, 2.06],
          [1.55, 2.2],
          [1.1, 2.42],
          [-0.35, 2.44],
          [-0.85, 2.26],
        ],
        1.08,
        Yl,
        0,
        0.06,
      ),
    ),
    t)
  ) {
    for (const M of [-1, 1]) {
      s.add(Hi(0.16, 0.06, Ds, M * 0.34, 2.26, -0.86, 0.16, 12));
      const E = Hi(0.14, 0.42, 1842968, M * 0.5, 2.28, 1.45, 0.17, 12);
      ((E.rotation.y = M * 0.5), s.add(E));
    }
    for (let M = 0; M < 5; M++)
      s.add(se(0.9, 0.02, 0.06, Ds, 0, 2.43, 0.1 + M * 0.16));
  }
  (s.add(Hi(0.25, 3.1, gh, 0, 2.02, 2.65, 0.14, 12)),
    s.add(
      gr(
        [
          [3.7, 2],
          [4.35, 2.05],
          [4.5, 2.95],
          [4.2, 2.95],
        ],
        0.1,
        gh,
        0,
        0.02,
      ),
    ),
    s.add(se(1.5, 0.08, 0.5, Yl, 0, 2.1, 3.72)));
  const g = new re();
  g.name = "heli-lower-fittings";
  for (const M of [-1, 1]) {
    g.add(Hi(0.06, 3, 2368543, M * 0.9, 0.18, 0));
    const E = Hi(0.06, 0.45, 2368543, M * 0.9, 0.3, -1.66);
    ((E.rotation.x = Math.PI / 2 + 0.6), g.add(E));
    for (const A of [-0.9, 0.9]) {
      const T = Gs(0.045, 0.7, 2368543, M * 0.82, 0.5, A);
      ((T.rotation.z = M * -0.35), g.add(T));
    }
  }
  g.add(se(2.4, 0.1, 0.7, Yl, 0, 1.36, -0.2));
  for (const M of [-1, 1]) {
    if (
      (g.add(Hi(0.2, 1.2, 3093801, M * 1.15, 1.2, -0.2, 0.2, 12)),
      t && g.add(Hi(0.205, 0.1, 1316623, M * 1.15, 1.2, -0.82, 0.205, 12)),
      i)
    )
      for (let E = 0; E < 6; E++) {
        const A = (E / 6) * Math.PI * 2;
        g.add(
          Hi(
            0.04,
            0.04,
            657930,
            M * 1.15 + Math.cos(A) * 0.11,
            1.2 + Math.sin(A) * 0.11,
            -0.86,
          ),
        );
      }
    t && g.add(se(0.08, 0.28, 0.2, Yl, M * 1.15, 1.34, -0.2));
  }
  if ((s.add(g), e.push(g), i)) {
    j0(s, 0, 2, 2.3, 0.5);
    const M = se(0.02, 0.02, 0.7, 11580584, 0.3, 1.3, -2.4);
    (s.add(M), e.push(M));
  }
  const y = new re();
  ((y.name = "helicopter-rotor"),
    y.position.set(0, 2.62, 0),
    y.add(
      Gs(0.08, 0.3, Ds, 0, -0.12, 0),
      Gs(0.2, 0.12, 2829099, 0, 0, 0, 0.2, 10),
    ));
  const b = [];
  if (!t) y.add(se(6.2, 0.05, 0.2, 1710618), se(0.2, 0.05, 6.2, 1710618));
  else
    for (let M = 0; M < 4; M++) {
      const E = new re();
      E.rotation.y = (M * Math.PI) / 2;
      const A = new re();
      (A.add(se(3.05, 0.04, 0.2, 1710618, 1.6, 0, 0)),
        i && A.add(se(0.14, 0.045, 0.21, 14272372, 3.05, 0, 0)),
        E.add(A),
        y.add(E),
        b.push(A));
    }
  ((y.userData.blades = b), s.add(y));
  const S = new re();
  S.position.set(0.18, 2.55, 4.3);
  for (let M = 0; M < 3; M++) {
    const E = se(0.04, 0.48, 0.09, 1710618, 0, 0, 0);
    (E.geometry.translate(0, 0.24, 0),
      (E.rotation.x = (M / 3) * Math.PI * 2),
      S.add(E));
  }
  return (
    S.add(Y0(0.06, 0.1, Ds)),
    s.add(S),
    Fn(s, "red", -1.33, 1.38, -0.2, 0.06),
    Fn(s, "green", 1.33, 1.38, -0.2, 0.06),
    Fn(s, "white", 0, 2.2, 4.48, 0.05),
    Fn(s, "strobe", 0.07, 2.98, 4.36, 0.05),
    Fn(s, "beacon", 0, 2.47, 1.32, 0.065),
    Fn(s, "beacon", 0, 0.6, 0.4, 0.065),
    { group: s, barrel: f, props: [y, S], fpvHide: e }
  );
}
const k8 = 5069926,
  yh = 3819344,
  XQ = 6188408,
  ZQ = 4607829,
  Ip = (s = 1, e = -3.3) => [
    [-1.12 * s, 3.2],
    [1.12 * s, 3.2],
    [1.14 * s, -0.9],
    [0.95 * s, -2.1],
    [0.5 * s, -2.9],
    [0, e],
    [-0.5 * s, -2.9],
    [-0.95 * s, -2.1],
    [-1.14 * s, -0.9],
  ];
