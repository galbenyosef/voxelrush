// index-Dp6GxvJu 91 — add
// Lines 56836-57123 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function sK() {
  const n = new pe(),
    e = [],
    t = yt(1),
    i = yt(2),
    s = new pe();
  ((s.name = "heli-cabin"),
    s.add(ce(1.5, 0.14, 2.5, sl, 0, 0.7, 0)),
    s.add(
      Ia(
        [
          [-1.2, 1.92],
          [1.25, 1.92],
          [1.25, 2.08],
          [-1.2, 2.08],
        ],
        1.5,
        Ah,
        0,
        0.03,
      ),
    ),
    s.add(ce(1.46, 1.24, 0.1, Ah, 0, 1.36, 1.2)));
  for (const M of [-1, 1])
    (s.add(ce(0.1, 1.2, 0.14, Ah, M * 0.74, 1.34, -1.12)),
      s.add(ce(0.1, 1.2, 0.14, Ah, M * 0.74, 1.34, 1.12)),
      s.add(ce(0.12, 0.3, 2.5, sl, M * 0.77, 0.86, 0)),
      t &&
        s.add(
          ce(0.05, 0.06, 1.9, o6, M * 0.8, 1.92, 0),
          ce(0.05, 0.06, 1.9, o6, M * 0.8, 0.98, 0),
        ));
  if (t) {
    const M = new pe();
    ((M.userData.lodSkip = !0),
      s.add(M),
      M.add(ce(1.3, 0.08, 1.4, 2895656, 0, 0.79, 0.2)));
    for (const x of [-1, 1])
      M.add(ce(0.3, 0.45, 1.5, 3749421, x * 0.5, 1.05, 0.45));
  }
  (n.add(s), e.push(s));
  const o = ms(VEHICLE_KIND.HELI);
  for (const M of [-1, 1]) {
    const x = M4(M < 0 ? 1 : 2, M * 1.13, 0.98, 0.65, !1, 0.46);
    if (
      ((x.rotation.y = (-M * Math.PI) / 2),
      x.scale.set(1 / o.x, 1 / o.y, 1 / o.z),
      n.add(x, ce(0.36, 0.05, 0.07, 3816758, M * 0.96, 0.97, 0.65)),
      t)
    ) {
      const T = ce(0.34, 0.035, 0.035, 3816758, M * 0.97, 0.88, 0.65);
      ((T.rotation.z = M * 0.52), n.add(T));
    }
  }
  const a = new pe();
  ((a.name = "heli-pilot-obstructions"),
    a.add(
      Ia(
        [
          [-1.15, 1.2],
          [-1.95, 1.24],
          [-2.22, 1.42],
          [-2.2, 1.62],
          [-1.62, 2.12],
          [-1.15, 2.12],
        ],
        1.06,
        Ah,
        0,
        0.08,
      ),
    ),
    a.add(
      Ia(
        [
          [-1.2, 0.74],
          [-1.2, 1.22],
          [-1.9, 1.24],
          [-1.5, 0.8],
        ],
        1.2,
        sl,
        0,
        0.05,
      ),
    ));
  const r = [],
    l = ce(0.9, 0.04, 0.6, 2767432, 0, 1.9, -1.93);
  ((l.rotation.x = 0.72), r.push(l));
  const c = ce(0.8, 0.04, 0.26, 2767432, 0, 1.52, -2.22);
  ((c.rotation.x = 1.5), r.push(c));
  for (const M of [-1, 1]) {
    const x = ce(0.04, 0.42, 0.55, 2767432, M * 0.55, 1.72, -1.55);
    r.push(x);
  }
  const h = new pe();
  h.name = "heli-glazing";
  for (const M of r) h.add(M);
  (n.add(h), e.push(h));
  const d = (M, x, T, A, _, C, R = 0) => {
    const L = ce(M, x, T, sl, A, _, C);
    ((L.rotation.x = R), n.add(L));
  };
  if (t) {
    d(0.06, 0.06, 0.66, 0, 1.92, -1.9, 0.72);
    for (const M of [-1, 1])
      (d(0.06, 0.06, 0.7, M * 0.48, 1.9, -1.88, 0.72),
        d(0.05, 0.46, 0.05, M * 0.54, 1.72, -1.28));
  }
  const u = ce(0.9, 0.16, 0.08, 3356218, 0, 1.28, -1.88);
  if (
    ((u.rotation.x = -0.35),
    a.add(u),
    t && a.add(ce(0.94, 0.035, 0.12, 2763823, 0, 1.37, -1.9)),
    t)
  ) {
    const x = [
        new pn(0.18, 0.1).translate(-0.26, 0, 0),
        new pn(0.18, 0.1),
        new pn(0.18, 0.1).translate(0.26, 0, 0),
      ],
      T = new le(no(x, !1), new qt({ color: 1919546 }));
    (T.position.set(0, 1.285, -1.925),
      (T.rotation.x = -0.35),
      a.add(T),
      a.add(ce(0.08, 0.32, 0.08, Ln, 0, 1.08, -1.62)),
      a.add(
        ce(0.5, 0.12, 0.45, 3749421, 0, 1.12, -1.45),
        ce(0.5, 0.55, 0.1, 3749421, 0, 1.4, -1.22),
      ));
  }
  (n.add(a), e.push(a));
  const f = new pe();
  ((f.name = "chin-gun"),
    f.position.set(0, 0.92, -1.92),
    f.add(
      Dn(0.16, 0.14, sl, 0, 0, 0, 0.18, 12),
      ce(0.14, 0.14, 0.22, Ln, 0, -0.1, -0.12),
    ),
    f.add(
      Ci(0.035, 0.7, Ln, -0.03, -0.1, -0.5),
      Ci(0.035, 0.7, Ln, 0.03, -0.1, -0.5),
    ),
    n.add(f),
    e.push(f));
  const p = ce(0.16, 0.05, 0.16, uu, 0, 0.98, -2.1);
  (n.add(p), e.push(p));
  const m = new le(new mn(0.17, 12, 8), ss(2830630));
  if (
    (m.position.set(0, 1.08, -2.2),
    n.add(m),
    e.push(m),
    n.add(
      Ia(
        [
          [-0.9, 2.06],
          [1.4, 2.06],
          [1.55, 2.2],
          [1.1, 2.42],
          [-0.35, 2.44],
          [-0.85, 2.26],
        ],
        1.08,
        sl,
        0,
        0.06,
      ),
    ),
    t)
  ) {
    for (const M of [-1, 1]) {
      n.add(Ci(0.16, 0.06, Ln, M * 0.34, 2.26, -0.86, 0.16, 12));
      const x = Ci(0.14, 0.42, 1842968, M * 0.5, 2.28, 1.45, 0.17, 12);
      ((x.rotation.y = M * 0.5), n.add(x));
    }
    for (let M = 0; M < 5; M++)
      n.add(ce(0.9, 0.02, 0.06, Ln, 0, 2.43, 0.1 + M * 0.16));
  }
  (n.add(Ci(0.25, 3.1, Ah, 0, 2.02, 2.65, 0.14, 12)),
    n.add(
      Ia(
        [
          [3.7, 2],
          [4.35, 2.05],
          [4.5, 2.95],
          [4.2, 2.95],
        ],
        0.1,
        Ah,
        0,
        0.02,
      ),
    ),
    n.add(ce(1.5, 0.08, 0.5, sl, 0, 2.1, 3.72)));
  const y = new pe();
  y.name = "heli-lower-fittings";
  for (const M of [-1, 1]) {
    y.add(Ci(0.06, 3, 2368543, M * 0.9, 0.18, 0));
    const x = Ci(0.06, 0.45, 2368543, M * 0.9, 0.3, -1.66);
    ((x.rotation.x = Math.PI / 2 + 0.6), y.add(x));
    for (const T of [-0.9, 0.9]) {
      const A = Dn(0.045, 0.7, 2368543, M * 0.82, 0.5, T);
      ((A.rotation.z = M * -0.35), y.add(A));
    }
  }
  y.add(ce(2.4, 0.1, 0.7, sl, 0, 1.36, -0.2));
  for (const M of [-1, 1]) {
    if (
      (y.add(Ci(0.2, 1.2, 3093801, M * 1.15, 1.2, -0.2, 0.2, 12)),
      t && y.add(Ci(0.205, 0.1, 1316623, M * 1.15, 1.2, -0.82, 0.205, 12)),
      i)
    )
      for (let x = 0; x < 6; x++) {
        const T = (x / 6) * Math.PI * 2;
        y.add(
          Ci(
            0.04,
            0.04,
            657930,
            M * 1.15 + Math.cos(T) * 0.11,
            1.2 + Math.sin(T) * 0.11,
            -0.86,
          ),
        );
      }
    t && y.add(ce(0.08, 0.28, 0.2, sl, M * 1.15, 1.34, -0.2));
  }
  if ((n.add(y), e.push(y), i)) {
    eh(n, 0, 2, 2.3, 0.5);
    const M = ce(0.02, 0.02, 0.7, 11580584, 0.3, 1.3, -2.4);
    (n.add(M), e.push(M));
  }
  const g = new pe();
  ((g.name = "helicopter-rotor"),
    g.position.set(0, 2.62, 0),
    g.add(
      Dn(0.08, 0.3, Ln, 0, -0.12, 0),
      Dn(0.2, 0.12, 2829099, 0, 0, 0, 0.2, 10),
    ));
  const b = [];
  if (!t) g.add(ce(6.2, 0.05, 0.2, 1710618), ce(0.2, 0.05, 6.2, 1710618));
  else
    for (let M = 0; M < 4; M++) {
      const x = new pe();
      x.rotation.y = (M * Math.PI) / 2;
      const T = new pe();
      (T.add(ce(3.05, 0.04, 0.2, 1710618, 1.6, 0, 0)),
        i && T.add(ce(0.14, 0.045, 0.21, 14272372, 3.05, 0, 0)),
        x.add(T),
        g.add(x),
        b.push(T));
    }
  ((g.userData.blades = b), n.add(g));
  const S = new pe();
  S.position.set(0.18, 2.55, 4.3);
  for (let M = 0; M < 3; M++) {
    const x = ce(0.04, 0.48, 0.09, 1710618, 0, 0, 0);
    (x.geometry.translate(0, 0.24, 0),
      (x.rotation.x = (M / 3) * Math.PI * 2),
      S.add(x));
  }
  return (
    S.add(Jc(0.06, 0.1, Ln)),
    n.add(S),
    Es(n, "red", -1.33, 1.38, -0.2, 0.06),
    Es(n, "green", 1.33, 1.38, -0.2, 0.06),
    Es(n, "white", 0, 2.2, 4.48, 0.05),
    Es(n, "strobe", 0.07, 2.98, 4.36, 0.05),
    Es(n, "beacon", 0, 2.47, 1.32, 0.065),
    Es(n, "beacon", 0, 0.6, 0.4, 0.065),
    { group: n, barrel: f, props: [g, S], fpvHide: e }
  );
}
const a6 = 5069926,
  _h = 3819344,
  oK = 6188408,
  aK = 4607829,
  sf = (n = 1, e = -3.3) => [
    [-1.12 * n, 3.2],
    [1.12 * n, 3.2],
    [1.14 * n, -0.9],
    [0.95 * n, -2.1],
    [0.5 * n, -2.9],
    [0, e],
    [-0.5 * n, -2.9],
    [-0.95 * n, -2.1],
    [-1.14 * n, -0.9],
  ];
