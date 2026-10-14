// assets__index-Dp6GxvJu 191 — add
// Lines 105454-105655 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function Kee(n) {
  const e = new pe(),
    t = 1515035,
    i = 4410179,
    s = 13288356,
    o = 6576199,
    a = 15129803,
    r = "hide",
    l = new qt({ color: 14677759 }),
    c = (M, x, T, A, _, C = 0.008) => {
      const R = new k(...x),
        L = new k(...T),
        N = L.clone().sub(R),
        D = new le(new xt(C, A, N.length(), 5), new gi({ color: _ }));
      return (
        D.position.copy(R.add(L).multiplyScalar(0.5)),
        D.quaternion.setFromUnitVectors(new k(0, 1, 0), N.normalize()),
        M.add(D),
        D
      );
    },
    h = [],
    d = 1.72;
  for (const M of [-1, 1]) {
    const x = new pe();
    x.position.set(M * 0.24, d, 0.06);
    const T = Ye(0.3, 0.8, 0.32, t, 0, -0.34, -0.12, r);
    ((T.rotation.x = 0.38), x.add(T));
    const A = new pe();
    (A.position.set(0, -0.66, -0.3), x.add(A));
    const _ = Ye(0.17, 0.7, 0.18, i, 0, -0.3, 0.16, r);
    ((_.rotation.x = -0.62), A.add(_));
    const C = new pe();
    (C.position.set(0, -0.58, 0.34),
      A.add(C),
      C.add(Ye(0.14, 0.5, 0.14, t, 0, -0.22, -0.06)));
    for (const R of [-0.06, 0.06])
      C.add(Ye(0.05, 0.06, 0.26, a, R, -0.47, -0.2));
    ((x.userData.knee = A), e.add(x), h.push(x));
  }
  e.add(Ye(0.62, 0.34, 0.4, t, 0, d + 0.06, 0.06, r));
  const u = new pe();
  (u.position.set(0, d + 0.16, 0.06),
    (u.rotation.x = 0.28),
    e.add(u),
    u.add(Ye(0.5, 0.5, 0.32, i, 0, 0.28, 0, r)),
    u.add(Ye(0.72, 0.66, 0.44, i, 0, 0.84, -0.02, r)));
  for (let M = 0; M < 5; M++) {
    const x = 0.6 + M * 0.11;
    u.add(Ye(0.74, 0.035, 0.06, s, 0, x, -0.25));
    for (const T of [-1, 1])
      u.add(Ye(0.04, 0.035, 0.36, s, T * 0.37, x, -0.04));
  }
  for (let M = 0; M < 6; M++)
    c(
      u,
      [0, 0.4 + M * 0.18, 0.22],
      [0, 0.55 + M * 0.19, 0.48 + M * 0.035],
      0.085,
      s,
    );
  for (const M of [-1, 1]) {
    (c(u, [M * 0.22, 1.22, 0], [M * 0.8, 1.52, 0.2], 0.19, t),
      c(u, [M * 0.45, 1.25, 0.12], [M * 0.96, 1.22, 0.28], 0.13, i));
    for (let x = 0; x < 5; x++)
      c(
        u,
        [M * (0.25 + x * 0.1), 1.2, 0.18],
        [M * (0.35 + x * 0.11), 0.65 - x * 0.07, 0.3],
        0.105,
        x % 2 ? t : i,
      );
  }
  u.add(Ye(0.1, 0.9, 0.1, s, 0, 0.7, 0.24));
  for (let M = 0; M < 6; M++)
    u.add(Ye(0.08, 0.1, 0.12, s, 0, 0.32 + M * 0.15, 0.3));
  (u.add(Ye(1.04, 0.3, 0.56, t, 0, 1.2, 0, r)),
    u.add(Ye(0.78, 0.34, 0.5, t, 0, 1.36, 0.08, r)));
  for (let M = 0; M < 9; M++) {
    const x = -0.48 + M * 0.12,
      T = 0.22 + ((n * 3 + M * 5) % 4) * 0.07,
      A = Ye(
        0.1,
        T,
        0.1,
        M % 3 ? t : 3156004,
        x,
        1.12 - T / 2,
        -0.28 + (M % 2) * 0.05,
      );
    ((A.rotation.z = (M - 4) * 0.06), u.add(A));
  }
  for (let M = 0; M < 7; M++) {
    const x = -0.4 + M * 0.135,
      T = 0.35 + ((n + M * 7) % 5) * 0.09,
      A = Ye(0.1, T, 0.06, t, x, 1.14 - T / 2, 0.22 + (M % 2) * 0.03);
    ((A.rotation.z = (M - 3) * 0.05), u.add(A));
  }
  const f = new pe();
  (f.position.set(0, 1.26, -0.12), u.add(f));
  const p = Ye(0.18, 0.36, 0.18, i, 0, 0.12, -0.1, r);
  ((p.rotation.x = -0.7), f.add(p));
  const m = new pe();
  (m.position.set(0, 0.28, -0.28),
    f.add(m),
    m.scale.setScalar(1.25),
    m.add(Ye(0.34, 0.34, 0.36, s, 0, 0, 0)),
    m.add(Ye(0.24, 0.2, 0.46, s, 0, -0.06, -0.36)),
    m.add(Ye(0.18, 0.12, 0.18, s, 0, -0.1, -0.6)),
    m.add(Ye(0.22, 0.1, 0.36, 1052428, 0, -0.15, -0.34)));
  for (const M of [-1, 1]) {
    (c(m, [M * 0.16, 0.08, -0.08], [M * 0.21, -0.14, -0.3], 0.065, s),
      c(m, [M * 0.11, -0.08, -0.42], [M * 0.1, -0.26, -0.47], 0.03, a));
    for (let x = 0; x < 4; x++)
      c(
        m,
        [M * 0.09, -0.13, -0.19 - x * 0.095],
        [M * 0.09, -0.22, -0.21 - x * 0.095],
        0.019,
        a,
      );
  }
  const y = Ye(0.016, 0.23, 0.014, 3157283, -0.025, 0.045, -0.187);
  ((y.rotation.z = 0.22),
    m.add(y),
    m.add(Ye(0.36, 0.08, 0.2, 12432282, 0, 0.15, -0.1)));
  for (const M of [-1, 1])
    m.add(Ye(0.06, 0.14, 0.1, s, M * 0.16, -0.04, -0.14));
  for (const M of [-1, 1]) {
    m.add(Ye(0.1, 0.1, 0.04, 723208, M * 0.09, 0.04, -0.18));
    const x = new le(new Ct(0.06, 0.05, 0.02), l);
    (x.position.set(M * 0.09, 0.045, -0.2),
      (x.userData.animated = !0),
      m.add(x));
    const T = new os(qee());
    (T.scale.setScalar(0.55),
      T.position.set(M * 0.09, 0.045, -0.26),
      (T.userData.animated = !0),
      m.add(T),
      m.add(Ye(0.04, 0.12, 0.03, 723208, M * 0.05, -0.12, -0.63)));
  }
  const g = new pe();
  (g.position.set(0, -0.16, -0.1),
    m.add(g),
    g.add(Ye(0.2, 0.07, 0.44, s, 0, -0.03, -0.26)));
  for (let M = 0; M < 4; M++)
    for (const x of [-1, 1])
      g.add(Ye(0.025, 0.06, 0.025, a, x * 0.07, 0.03, -0.12 - M * 0.1));
  for (const M of [-1, 1]) {
    const x = [M * 0.14, 0.16, 0.04],
      T = [M * 0.55, 0.63, 0.12],
      A = [M * 0.73, 1.18, 0.23];
    (c(m, x, T, 0.11, o, 0.075),
      c(m, T, A, 0.075, o, 0.04),
      c(m, A, [M * 0.94, 1.42 + (M === 1 ? 0.08 : 0), 0.15], 0.04, s),
      c(m, [M * 0.38, 0.43, 0.09], [M * 0.32, 0.87, -0.24], 0.055, o),
      c(m, [M * 0.55, 0.63, 0.12], [M * 0.91, 0.85, -0.12], 0.055, o),
      c(m, [M * 0.65, 0.95, 0.19], [M * 0.45, 1.28, 0.04], 0.045, s),
      c(m, [M * 0.72, 1.12, 0.22], [M * 0.99, 1.17, 0.46], 0.04, o),
      c(m, [M * 0.55, 0.63, 0.12], [M * 0.57, 0.3, 0.15], 0.035, 3623730));
  }
  const b = [];
  for (const M of [-1, 1]) {
    const x = new pe();
    (x.position.set(M * 0.5, 1.18, -0.02),
      u.add(x),
      x.add(Ye(0.16, 0.78, 0.16, i, 0, -0.36, 0, r)));
    const T = new pe();
    (T.position.set(0, -0.74, 0),
      x.add(T),
      T.add(Ye(0.12, 0.76, 0.12, i, 0, -0.36, 0, r)));
    const A = new pe();
    (A.position.set(0, -0.76, 0),
      T.add(A),
      A.add(Ye(0.16, 0.18, 0.1, t, 0, -0.06, 0)));
    for (let _ = 0; _ < 4; _++) {
      const C = (_ - 1.5) * 0.055,
        R = 0.28 + (1 - Math.abs(_ - 1.5) / 2) * 0.12;
      (c(A, [C, -0.12, 0], [C * 1.4, -R, -0.07], 0.028, i, 0.019),
        c(A, [C * 1.4, -R, -0.07], [C * 1.5, -R - 0.16, -0.19], 0.021, a));
    }
    (c(A, [M * 0.09, -0.02, 0], [M * 0.19, -0.19, -0.13], 0.045, a),
      c(x, [0, -0.2, 0.06], [M * 0.17, -0.48, 0.16], 0.08, t),
      (x.userData.elbow = T),
      (x.rotation.z = M * 0.12),
      b.push(x),
      (x.userData.animated = !0));
  }
  const S = [];
  e.traverse((M) => {
    M instanceof pe && S.push(M);
  });
  for (const M of S) p0(M);
  return (
    (e.userData.torso = u),
    (e.userData.neck = f),
    (e.userData.eyes = l),
    { group: e, legs: h, head: m, tail: null, flaps: b, spine: [u], jaw: g }
  );
}
const Yee = new ze(1, 0.38, 0.36),
  jee = new ze();
