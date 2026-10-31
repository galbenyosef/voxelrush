// index-BeUlFSPp 90 — add
// Lines 57483-57763 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function kX() {
  const s = new re(),
    e = me(0.2, 0.23, 0.1, 14074510, 0, -0.015, 0, "matte");
  ((e.rotation.z = -0.06),
    s.add(e),
    s.add(me(0.205, 0.028, 0.105, 8413239, 0, 0.1, 0, "matte")));
  const t = new Q(new ws(0.034, ci(8), ci(6)), Ti(5147974, "gloss"));
  (t.scale.set(1, 0.45, 0.34),
    (t.rotation.z = -0.5),
    t.position.set(0, 0.015, -0.056),
    s.add(t),
    s.add(me(0.012, 0.07, 0.012, 3106872, 0, -0.005, -0.06)));
  for (const [n, o, a] of [
    [-0.06, -0.095, -0.04],
    [0.05, -0.1, -0.035],
    [0.015, -0.105, -0.07],
  ])
    (s.add(new Q(new ws(0.012, 6, 4), Ti(5323043))),
      s.children[s.children.length - 1].position.set(n, o, a));
  const i = new Xt();
  return (s.add(i), Hs(s, i, null, null));
}
const xy = [
    [0.2, 0.0125, 0.0105],
    [0.2, 0.0105, 0.0088],
    [0.19, 0.0088, 0.0072],
    [0.18, 0.0072, 0.0057],
    [0.17, 0.0057, 0.0043],
    [0.16, 0.0043, 0.003],
  ],
  CX = [0.04, 0.08, 0.13, 0.2, 0.26, 0.29],
  LX = 0.42;
function IX() {
  const s = new re(),
    e = wt(1),
    t = wt(2),
    i = 1915724,
    n = 10231588,
    o = 13214282,
    a = 12950627,
    r = 10846028,
    l = 2303530,
    c = 13226456,
    h = 15660022,
    d = new Zo({ color: h, transparent: !0, opacity: 0.85 }),
    u = ci(10),
    f = (O, B, H, D, U, W = "gloss", J = m) => {
      const j = new Q(new Tt(B, O, Math.abs(H - D), u), Ti(U, W));
      return (
        (j.rotation.x = Math.PI / 2),
        (j.position.z = (H + D) / 2),
        J.add(j),
        j
      );
    },
    p = (O, B, H, D) => {
      const U = D + H * 1.15;
      e &&
        (f(D + 0.0016, D + 0.0016, B + 0.016, B - 0.016, n, "gloss", O),
        O.add(me(0.0024, U - D, 0.0024, c, 0, D + (U - D) / 2, B, "metal")));
      const W = new Q(
        new Gn(H, Math.max(0.0018, H * 0.16), 5, t ? 14 : 9),
        Ti(c, "metal"),
      );
      if ((W.position.set(0, U + H * 0.15, B), O.add(W), t)) {
        const J = new Q(new Gn(H * 0.82, H * 0.1, 4, 12), Ti(1711135, "gloss"));
        (J.position.copy(W.position), O.add(J));
      }
      return U + H * 0.15;
    },
    m = new re();
  if (
    ((m.name = "rod"),
    m.rotation.set(LX, 0, 0.06),
    s.add(m),
    f(0.021, 0.021, 0.27, 0.245, 1382170, "matte"),
    e)
  )
    for (let O = 0; O < 6; O++)
      f(
        0.0195,
        0.0195,
        0.245 - O * 0.02,
        0.245 - (O + 1) * 0.02,
        O % 2 ? a : r,
        "matte",
      );
  else f(0.0195, 0.0195, 0.245, 0.125, a, "matte");
  (f(0.0145, 0.0145, 0.125, 0.105, l, "matte"),
    f(0.016, 0.016, 0.105, 0.012, 2369324, "gloss"),
    f(0.0185, 0.0175, 0.105, 0.088, c, "metal"),
    f(0.0175, 0.0185, 0.03, 0.012, c, "metal"),
    e && f(0.0178, 0.0178, 0.083, 0.076, o, "metal"),
    f(0.0165, 0.0135, 0.012, -0.075, a, "matte"),
    f(0.0135, 0.0125, -0.075, -0.085, o, "metal"),
    _i(m, "hand-r", 0, -0.004, 0.16, 0, 0, 0),
    (m.getObjectByName("hand-r").userData.along = !0));
  let g = m,
    y = -0.085;
  const b = [0.35, 0.6, 0.55, 0.5, 0.45, 0],
    S = [0.017, 0.012, 0.0085, 0.0068, 0.0055, 0];
  xy.forEach(([O, B, H], D) => {
    const U = new re();
    ((U.name = `rod-seg-${D}`),
      (U.position.z = D === 0 ? y : -xy[D - 1][0]),
      g.add(U),
      f(B, H, 0, -O, i, "gloss", U),
      D === 0 &&
        e &&
        (f(B + 0.0012, B + 0.0012, -0.01, -0.016, o, "metal", U),
        f(B + 8e-4, B + 8e-4, -0.016, -0.05, 992048, "gloss", U),
        f(B + 0.0012, B + 0.0012, -0.05, -0.056, o, "metal", U)));
    let W = 0;
    if (S[D] > 0) {
      const J = -O * b[D];
      W = p(U, J, S[D], B + (H - B) * b[D]);
      const j = [
        D === 0 ? new k(0, -0.058, 0.045) : new k(0, W * 0.6, 0),
        new k(0, W, J),
        new k(0, W * 0.5 + H, -O),
      ];
      U.add(new md(new oi().setFromPoints(j), d));
    } else {
      const J = new Q(new Gn(0.004, 0.0013, 4, 10), Ti(c, "metal"));
      (J.position.set(0, 0.004, -O),
        U.add(J),
        U.add(
          new md(
            new oi().setFromPoints([new k(0, 0.006, 0), new k(0, 0.006, -O)]),
            d,
          ),
        ));
      const j = new Xt();
      ((j.name = "vm-muzzle"), j.position.set(0, 0.006, -O), U.add(j));
    }
    ((U.userData.restX = 0), (g = U), (y = 0));
  });
  const M = new re();
  ((M.name = "reel"),
    M.position.set(0, -0.016, 0.06),
    m.add(M),
    M.add(me(0.012, 0.004, 0.05, 2764339, 0, 0, 0, "metal")),
    M.add(me(0.01, 0.05, 0.016, 2764339, 0, -0.026, 0.004, "gloss")));
  const E = new Q(new ws(0.03, u, ci(8)), Ti(3159355, "gloss"));
  (E.scale.set(0.8, 1, 1.15), E.position.set(0, -0.062, 0.006), M.add(E));
  const A = new re();
  ((A.name = "reel-rotor"), A.position.set(0, -0.062, -0.03), M.add(A));
  const T = (O, B, H, D, U, W, J) => {
    const j = new Q(new Tt(B, O, H, u), Ti(U, W));
    return ((j.rotation.x = Math.PI / 2), (j.position.z = D), J.add(j), j);
  };
  if (
    (T(0.026, 0.022, 0.022, 0, 4014922, "metal", A),
    T(0.021, 0.021, 0.026, -0.024, c, "metal", A),
    T(0.019, 0.019, 0.022, -0.024, h, "matte", A),
    T(0.023, 0.023, 0.004, -0.038, c, "metal", A),
    T(0.01, 0.007, 0.012, -0.046, o, "metal", A),
    e)
  ) {
    const O = new Q(new Gn(0.026, 0.0017, 4, 16, Math.PI), Ti(c, "metal"));
    (O.rotation.set(0, Math.PI / 2, 0),
      (O.position.z = -0.022),
      A.add(O),
      A.add(
        me(0.006, 0.008, 0.02, 4014922, 0.026, 0, -0.008, "metal"),
        me(0.006, 0.008, 0.02, 4014922, -0.026, 0, -0.008, "metal"),
      ),
      A.add(me(0.006, 0.006, 0.006, c, -0.026, 0.004, -0.02, "metal")));
  }
  const x = new re();
  (x.position.set(0.024, -0.062, 0.01), (x.rotation.y = Math.PI / 2), M.add(x));
  const R = new re();
  ((R.name = "reel-crank"),
    x.add(R),
    R.add(me(0.008, 0.05, 0.006, 9278877, 0, 0.022, 0, "metal")));
  const _ = new Q(new Tt(0.0075, 0.0075, 0.022, ci(8)), Ti(1777443, "gloss"));
  ((_.rotation.x = Math.PI / 2), _.position.set(0, 0.046, -0.012), R.add(_));
  const C = new Q(new Tt(0.009, 0.009, 0.008, ci(8)), Ti(o, "metal"));
  ((C.rotation.x = Math.PI / 2), R.add(C));
  for (const O of [
    m,
    M,
    A,
    R,
    ...xy.map((B, H) => m.getObjectByName(`rod-seg-${H}`)),
  ])
    OX(O);
  const P = s.getObjectByName("vm-muzzle");
  return Hs(s, P, null, null, R);
}
const PX = new oo({ vertexColors: !0, specular: 5922662, shininess: 34 });
function OX(s) {
  const e = s.children.filter((n) => n.isMesh && !Array.isArray(n.material));
  if (e.length < 2) return;
  const t = e.map((n) => {
      n.updateMatrix();
      const o = (
        n.geometry.index ? n.geometry.toNonIndexed() : n.geometry.clone()
      ).applyMatrix4(n.matrix);
      o.deleteAttribute("uv");
      const a = n.material.color,
        r = o.getAttribute("position").count,
        l = new Float32Array(r * 3);
      for (let c = 0; c < r; c++)
        ((l[c * 3] = a.r), (l[c * 3 + 1] = a.g), (l[c * 3 + 2] = a.b));
      return (o.setAttribute("color", new qt(l, 3)), o);
    }),
    i = Eo(t, !1);
  for (const n of t) n.dispose();
  if (i) {
    for (const n of e)
      (s.remove(n), n.geometry.dispose(), n.material.dispose());
    s.add(new Q(i, PX));
  }
}
const c4 = [
  {
    body: 5988971,
    over: 15906565,
    dark: 1908772,
    bit: 12897233,
    glow: 0,
    kind: "twist",
  },
  {
    body: 1924457,
    over: 994097,
    dark: 793118,
    bit: 10482687,
    glow: 7336959,
    kind: "diamond",
  },
  {
    body: 11187649,
    over: 2963008,
    dark: 2041132,
    bit: 14266442,
    glow: 0,
    kind: "twist",
  },
  {
    body: 1776671,
    over: 16738842,
    dark: 855568,
    bit: 2829360,
    glow: 16742954,
    kind: "auger",
  },
  {
    body: 2886981,
    over: 6954912,
    dark: 1246750,
    bit: 16731637,
    glow: 16731637,
    kind: "laser",
  },
  {
    body: 15659507,
    over: 13119791,
    dark: 2832999,
    bit: 8382463,
    glow: 8382463,
    kind: "auger",
  },
];
function AR(s, e, t, i, n, o = "metal") {
  const a = new kt(e, t, s, 1, 1, Math.max(8, Math.round(i * 10))),
    r = a.getAttribute("position"),
    l = new k();
  for (let c = 0; c < r.count; c++) {
    l.fromBufferAttribute(r, c);
    const h = ((l.z + s / 2) / s) * i * Math.PI * 2;
    r.setXYZ(
      c,
      l.x * Math.cos(h) - l.y * Math.sin(h),
      l.x * Math.sin(h) + l.y * Math.cos(h),
      l.z,
    );
  }
  return (a.computeVertexNormals(), new Q(a, Ti(n, o)));
}
