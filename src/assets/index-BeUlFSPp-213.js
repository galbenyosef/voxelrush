// index-BeUlFSPp 213 — add
// Lines 112179-112380 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function ore(s) {
  const e = new re(),
    t = 1515035,
    i = 4410179,
    n = 13288356,
    o = 6576199,
    a = 15129803,
    r = "hide",
    l = new Zt({ color: 14677759 }),
    c = (M, E, A, T, x, R = 0.008) => {
      const _ = new k(...E),
        C = new k(...A),
        P = C.clone().sub(_),
        O = new Q(new Tt(R, T, P.length(), 5), new Pi({ color: x }));
      return (
        O.position.copy(_.add(C).multiplyScalar(0.5)),
        O.quaternion.setFromUnitVectors(new k(0, 1, 0), P.normalize()),
        M.add(O),
        O
      );
    },
    h = [],
    d = 1.72;
  for (const M of [-1, 1]) {
    const E = new re();
    E.position.set(M * 0.24, d, 0.06);
    const A = nt(0.3, 0.8, 0.32, t, 0, -0.34, -0.12, r);
    ((A.rotation.x = 0.38), E.add(A));
    const T = new re();
    (T.position.set(0, -0.66, -0.3), E.add(T));
    const x = nt(0.17, 0.7, 0.18, i, 0, -0.3, 0.16, r);
    ((x.rotation.x = -0.62), T.add(x));
    const R = new re();
    (R.position.set(0, -0.58, 0.34),
      T.add(R),
      R.add(nt(0.14, 0.5, 0.14, t, 0, -0.22, -0.06)));
    for (const _ of [-0.06, 0.06])
      R.add(nt(0.05, 0.06, 0.26, a, _, -0.47, -0.2));
    ((E.userData.knee = T), e.add(E), h.push(E));
  }
  e.add(nt(0.62, 0.34, 0.4, t, 0, d + 0.06, 0.06, r));
  const u = new re();
  (u.position.set(0, d + 0.16, 0.06),
    (u.rotation.x = 0.28),
    e.add(u),
    u.add(nt(0.5, 0.5, 0.32, i, 0, 0.28, 0, r)),
    u.add(nt(0.72, 0.66, 0.44, i, 0, 0.84, -0.02, r)));
  for (let M = 0; M < 5; M++) {
    const E = 0.6 + M * 0.11;
    u.add(nt(0.74, 0.035, 0.06, n, 0, E, -0.25));
    for (const A of [-1, 1])
      u.add(nt(0.04, 0.035, 0.36, n, A * 0.37, E, -0.04));
  }
  for (let M = 0; M < 6; M++)
    c(
      u,
      [0, 0.4 + M * 0.18, 0.22],
      [0, 0.55 + M * 0.19, 0.48 + M * 0.035],
      0.085,
      n,
    );
  for (const M of [-1, 1]) {
    (c(u, [M * 0.22, 1.22, 0], [M * 0.8, 1.52, 0.2], 0.19, t),
      c(u, [M * 0.45, 1.25, 0.12], [M * 0.96, 1.22, 0.28], 0.13, i));
    for (let E = 0; E < 5; E++)
      c(
        u,
        [M * (0.25 + E * 0.1), 1.2, 0.18],
        [M * (0.35 + E * 0.11), 0.65 - E * 0.07, 0.3],
        0.105,
        E % 2 ? t : i,
      );
  }
  u.add(nt(0.1, 0.9, 0.1, n, 0, 0.7, 0.24));
  for (let M = 0; M < 6; M++)
    u.add(nt(0.08, 0.1, 0.12, n, 0, 0.32 + M * 0.15, 0.3));
  (u.add(nt(1.04, 0.3, 0.56, t, 0, 1.2, 0, r)),
    u.add(nt(0.78, 0.34, 0.5, t, 0, 1.36, 0.08, r)));
  for (let M = 0; M < 9; M++) {
    const E = -0.48 + M * 0.12,
      A = 0.22 + ((s * 3 + M * 5) % 4) * 0.07,
      T = nt(
        0.1,
        A,
        0.1,
        M % 3 ? t : 3156004,
        E,
        1.12 - A / 2,
        -0.28 + (M % 2) * 0.05,
      );
    ((T.rotation.z = (M - 4) * 0.06), u.add(T));
  }
  for (let M = 0; M < 7; M++) {
    const E = -0.4 + M * 0.135,
      A = 0.35 + ((s + M * 7) % 5) * 0.09,
      T = nt(0.1, A, 0.06, t, E, 1.14 - A / 2, 0.22 + (M % 2) * 0.03);
    ((T.rotation.z = (M - 3) * 0.05), u.add(T));
  }
  const f = new re();
  (f.position.set(0, 1.26, -0.12), u.add(f));
  const p = nt(0.18, 0.36, 0.18, i, 0, 0.12, -0.1, r);
  ((p.rotation.x = -0.7), f.add(p));
  const m = new re();
  (m.position.set(0, 0.28, -0.28),
    f.add(m),
    m.scale.setScalar(1.25),
    m.add(nt(0.34, 0.34, 0.36, n, 0, 0, 0)),
    m.add(nt(0.24, 0.2, 0.46, n, 0, -0.06, -0.36)),
    m.add(nt(0.18, 0.12, 0.18, n, 0, -0.1, -0.6)),
    m.add(nt(0.22, 0.1, 0.36, 1052428, 0, -0.15, -0.34)));
  for (const M of [-1, 1]) {
    (c(m, [M * 0.16, 0.08, -0.08], [M * 0.21, -0.14, -0.3], 0.065, n),
      c(m, [M * 0.11, -0.08, -0.42], [M * 0.1, -0.26, -0.47], 0.03, a));
    for (let E = 0; E < 4; E++)
      c(
        m,
        [M * 0.09, -0.13, -0.19 - E * 0.095],
        [M * 0.09, -0.22, -0.21 - E * 0.095],
        0.019,
        a,
      );
  }
  const g = nt(0.016, 0.23, 0.014, 3157283, -0.025, 0.045, -0.187);
  ((g.rotation.z = 0.22),
    m.add(g),
    m.add(nt(0.36, 0.08, 0.2, 12432282, 0, 0.15, -0.1)));
  for (const M of [-1, 1])
    m.add(nt(0.06, 0.14, 0.1, n, M * 0.16, -0.04, -0.14));
  for (const M of [-1, 1]) {
    m.add(nt(0.1, 0.1, 0.04, 723208, M * 0.09, 0.04, -0.18));
    const E = new Q(new kt(0.06, 0.05, 0.02), l);
    (E.position.set(M * 0.09, 0.045, -0.2),
      (E.userData.animated = !0),
      m.add(E));
    const A = new Ws(nre());
    (A.scale.setScalar(0.55),
      A.position.set(M * 0.09, 0.045, -0.26),
      (A.userData.animated = !0),
      m.add(A),
      m.add(nt(0.04, 0.12, 0.03, 723208, M * 0.05, -0.12, -0.63)));
  }
  const y = new re();
  (y.position.set(0, -0.16, -0.1),
    m.add(y),
    y.add(nt(0.2, 0.07, 0.44, n, 0, -0.03, -0.26)));
  for (let M = 0; M < 4; M++)
    for (const E of [-1, 1])
      y.add(nt(0.025, 0.06, 0.025, a, E * 0.07, 0.03, -0.12 - M * 0.1));
  for (const M of [-1, 1]) {
    const E = [M * 0.14, 0.16, 0.04],
      A = [M * 0.55, 0.63, 0.12],
      T = [M * 0.73, 1.18, 0.23];
    (c(m, E, A, 0.11, o, 0.075),
      c(m, A, T, 0.075, o, 0.04),
      c(m, T, [M * 0.94, 1.42 + (M === 1 ? 0.08 : 0), 0.15], 0.04, n),
      c(m, [M * 0.38, 0.43, 0.09], [M * 0.32, 0.87, -0.24], 0.055, o),
      c(m, [M * 0.55, 0.63, 0.12], [M * 0.91, 0.85, -0.12], 0.055, o),
      c(m, [M * 0.65, 0.95, 0.19], [M * 0.45, 1.28, 0.04], 0.045, n),
      c(m, [M * 0.72, 1.12, 0.22], [M * 0.99, 1.17, 0.46], 0.04, o),
      c(m, [M * 0.55, 0.63, 0.12], [M * 0.57, 0.3, 0.15], 0.035, 3623730));
  }
  const b = [];
  for (const M of [-1, 1]) {
    const E = new re();
    (E.position.set(M * 0.5, 1.18, -0.02),
      u.add(E),
      E.add(nt(0.16, 0.78, 0.16, i, 0, -0.36, 0, r)));
    const A = new re();
    (A.position.set(0, -0.74, 0),
      E.add(A),
      A.add(nt(0.12, 0.76, 0.12, i, 0, -0.36, 0, r)));
    const T = new re();
    (T.position.set(0, -0.76, 0),
      A.add(T),
      T.add(nt(0.16, 0.18, 0.1, t, 0, -0.06, 0)));
    for (let x = 0; x < 4; x++) {
      const R = (x - 1.5) * 0.055,
        _ = 0.28 + (1 - Math.abs(x - 1.5) / 2) * 0.12;
      (c(T, [R, -0.12, 0], [R * 1.4, -_, -0.07], 0.028, i, 0.019),
        c(T, [R * 1.4, -_, -0.07], [R * 1.5, -_ - 0.16, -0.19], 0.021, a));
    }
    (c(T, [M * 0.09, -0.02, 0], [M * 0.19, -0.19, -0.13], 0.045, a),
      c(E, [0, -0.2, 0.06], [M * 0.17, -0.48, 0.16], 0.08, t),
      (E.userData.elbow = A),
      (E.rotation.z = M * 0.12),
      b.push(E),
      (E.userData.animated = !0));
  }
  const S = [];
  e.traverse((M) => {
    M instanceof re && S.push(M);
  });
  for (const M of S) ud(M);
  return (
    (e.userData.torso = u),
    (e.userData.neck = f),
    (e.userData.eyes = l),
    { group: e, legs: h, head: m, tail: null, flaps: b, spine: [u], jaw: y }
  );
}
const are = new Ge(1, 0.38, 0.36),
  rre = new Ge();
