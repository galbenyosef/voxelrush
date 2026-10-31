// index-Dp6GxvJu 67 — add
// Lines 48938-49221 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function PV() {
  const n = new pe(),
    e = De(0.2, 0.23, 0.1, 14074510, 0, -0.015, 0, "matte");
  ((e.rotation.z = -0.06),
    n.add(e),
    n.add(De(0.205, 0.028, 0.105, 8413239, 0, 0.1, 0, "matte")));
  const t = new le(new mn(0.034, di(8), di(6)), Bi(5147974, "gloss"));
  (t.scale.set(1, 0.45, 0.34),
    (t.rotation.z = -0.5),
    t.position.set(0, 0.015, -0.056),
    n.add(t),
    n.add(De(0.012, 0.07, 0.012, 3106872, 0, -0.005, -0.06)));
  for (const [s, o, a] of [
    [-0.06, -0.095, -0.04],
    [0.05, -0.1, -0.035],
    [0.015, -0.105, -0.07],
  ])
    (n.add(new le(new mn(0.012, 6, 4), Bi(5323043))),
      n.children[n.children.length - 1].position.set(s, o, a));
  const i = new $t();
  return (n.add(i), qn(n, i, null, null));
}
const D2 = [
    [0.2, 0.0125, 0.0105],
    [0.2, 0.0105, 0.0088],
    [0.19, 0.0088, 0.0072],
    [0.18, 0.0072, 0.0057],
    [0.17, 0.0057, 0.0043],
    [0.16, 0.0043, 0.003],
  ],
  OV = [0.04, 0.08, 0.13, 0.2, 0.26, 0.29],
  NV = 0.42;
function DV() {
  const n = new pe(),
    e = yt(1),
    t = yt(2),
    i = 1915724,
    s = 10231588,
    o = 13214282,
    a = 12950627,
    r = 10846028,
    l = 2303530,
    c = 13226456,
    h = 15660022,
    d = new Eo({ color: h, transparent: !0, opacity: 0.85 }),
    u = di(10),
    f = (D, H, G, I, O, F = "gloss", X = m) => {
      const Q = new le(new xt(H, D, Math.abs(G - I), u), Bi(O, F));
      return (
        (Q.rotation.x = Math.PI / 2),
        (Q.position.z = (G + I) / 2),
        X.add(Q),
        Q
      );
    },
    p = (D, H, G, I) => {
      const O = I + G * 1.15;
      e &&
        (f(I + 0.0016, I + 0.0016, H + 0.016, H - 0.016, s, "gloss", D),
        D.add(De(0.0024, O - I, 0.0024, c, 0, I + (O - I) / 2, H, "metal")));
      const F = new le(
        new xs(G, Math.max(0.0018, G * 0.16), 5, t ? 14 : 9),
        Bi(c, "metal"),
      );
      if ((F.position.set(0, O + G * 0.15, H), D.add(F), t)) {
        const X = new le(
          new xs(G * 0.82, G * 0.1, 4, 12),
          Bi(1711135, "gloss"),
        );
        (X.position.copy(F.position), D.add(X));
      }
      return O + G * 0.15;
    },
    m = new pe();
  if (
    ((m.name = "rod"),
    m.rotation.set(NV, 0, 0.06),
    n.add(m),
    f(0.021, 0.021, 0.27, 0.245, 1382170, "matte"),
    e)
  )
    for (let D = 0; D < 6; D++)
      f(
        0.0195,
        0.0195,
        0.245 - D * 0.02,
        0.245 - (D + 1) * 0.02,
        D % 2 ? a : r,
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
    ln(m, "hand-r", 0, -0.004, 0.16, 0, 0, 0),
    (m.getObjectByName("hand-r").userData.along = !0));
  let y = m,
    g = -0.085;
  const b = [0.35, 0.6, 0.55, 0.5, 0.45, 0],
    S = [0.017, 0.012, 0.0085, 0.0068, 0.0055, 0];
  D2.forEach(([D, H, G], I) => {
    const O = new pe();
    ((O.name = `rod-seg-${I}`),
      (O.position.z = I === 0 ? g : -D2[I - 1][0]),
      y.add(O),
      f(H, G, 0, -D, i, "gloss", O),
      I === 0 &&
        e &&
        (f(H + 0.0012, H + 0.0012, -0.01, -0.016, o, "metal", O),
        f(H + 8e-4, H + 8e-4, -0.016, -0.05, 992048, "gloss", O),
        f(H + 0.0012, H + 0.0012, -0.05, -0.056, o, "metal", O)));
    let F = 0;
    if (S[I] > 0) {
      const X = -D * b[I];
      F = p(O, X, S[I], H + (G - H) * b[I]);
      const Q = [
        I === 0 ? new k(0, -0.058, 0.045) : new k(0, F * 0.6, 0),
        new k(0, F, X),
        new k(0, F * 0.5 + G, -D),
      ];
      O.add(new Kc(new ci().setFromPoints(Q), d));
    } else {
      const X = new le(new xs(0.004, 0.0013, 4, 10), Bi(c, "metal"));
      (X.position.set(0, 0.004, -D),
        O.add(X),
        O.add(
          new Kc(
            new ci().setFromPoints([new k(0, 0.006, 0), new k(0, 0.006, -D)]),
            d,
          ),
        ));
      const Q = new $t();
      ((Q.name = "vm-muzzle"), Q.position.set(0, 0.006, -D), O.add(Q));
    }
    ((O.userData.restX = 0), (y = O), (g = 0));
  });
  const M = new pe();
  ((M.name = "reel"),
    M.position.set(0, -0.016, 0.06),
    m.add(M),
    M.add(De(0.012, 0.004, 0.05, 2764339, 0, 0, 0, "metal")),
    M.add(De(0.01, 0.05, 0.016, 2764339, 0, -0.026, 0.004, "gloss")));
  const x = new le(new mn(0.03, u, di(8)), Bi(3159355, "gloss"));
  (x.scale.set(0.8, 1, 1.15), x.position.set(0, -0.062, 0.006), M.add(x));
  const T = new pe();
  ((T.name = "reel-rotor"), T.position.set(0, -0.062, -0.03), M.add(T));
  const A = (D, H, G, I, O, F, X) => {
    const Q = new le(new xt(H, D, G, u), Bi(O, F));
    return ((Q.rotation.x = Math.PI / 2), (Q.position.z = I), X.add(Q), Q);
  };
  if (
    (A(0.026, 0.022, 0.022, 0, 4014922, "metal", T),
    A(0.021, 0.021, 0.026, -0.024, c, "metal", T),
    A(0.019, 0.019, 0.022, -0.024, h, "matte", T),
    A(0.023, 0.023, 0.004, -0.038, c, "metal", T),
    A(0.01, 0.007, 0.012, -0.046, o, "metal", T),
    e)
  ) {
    const D = new le(new xs(0.026, 0.0017, 4, 16, Math.PI), Bi(c, "metal"));
    (D.rotation.set(0, Math.PI / 2, 0),
      (D.position.z = -0.022),
      T.add(D),
      T.add(
        De(0.006, 0.008, 0.02, 4014922, 0.026, 0, -0.008, "metal"),
        De(0.006, 0.008, 0.02, 4014922, -0.026, 0, -0.008, "metal"),
      ),
      T.add(De(0.006, 0.006, 0.006, c, -0.026, 0.004, -0.02, "metal")));
  }
  const _ = new pe();
  (_.position.set(0.024, -0.062, 0.01), (_.rotation.y = Math.PI / 2), M.add(_));
  const C = new pe();
  ((C.name = "reel-crank"),
    _.add(C),
    C.add(De(0.008, 0.05, 0.006, 9278877, 0, 0.022, 0, "metal")));
  const R = new le(new xt(0.0075, 0.0075, 0.022, di(8)), Bi(1777443, "gloss"));
  ((R.rotation.x = Math.PI / 2), R.position.set(0, 0.046, -0.012), C.add(R));
  const L = new le(new xt(0.009, 0.009, 0.008, di(8)), Bi(o, "metal"));
  ((L.rotation.x = Math.PI / 2), C.add(L));
  for (const D of [
    m,
    M,
    T,
    C,
    ...D2.map((H, G) => m.getObjectByName(`rod-seg-${G}`)),
  ])
    HV(D);
  const N = n.getObjectByName("vm-muzzle");
  return qn(n, N, null, null, C);
}
const BV = new Us({ vertexColors: !0, specular: 5922662, shininess: 34 });
function HV(n) {
  const e = n.children.filter((s) => s.isMesh && !Array.isArray(s.material));
  if (e.length < 2) return;
  const t = e.map((s) => {
      s.updateMatrix();
      const o = (
        s.geometry.index ? s.geometry.toNonIndexed() : s.geometry.clone()
      ).applyMatrix4(s.matrix);
      o.deleteAttribute("uv");
      const a = s.material.color,
        r = o.getAttribute("position").count,
        l = new Float32Array(r * 3);
      for (let c = 0; c < r; c++)
        ((l[c * 3] = a.r), (l[c * 3 + 1] = a.g), (l[c * 3 + 2] = a.b));
      return (o.setAttribute("color", new oi(l, 3)), o);
    }),
    i = no(t, !1);
  for (const s of t) s.dispose();
  if (i) {
    for (const s of e)
      (n.remove(s), s.geometry.dispose(), s.material.dispose());
    n.add(new le(i, BV));
  }
}
const kw = [
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
function ZT(n, e, t, i, s, o = "metal") {
  const a = new Ct(e, t, n, 1, 1, Math.max(8, Math.round(i * 10))),
    r = a.getAttribute("position"),
    l = new k();
  for (let c = 0; c < r.count; c++) {
    l.fromBufferAttribute(r, c);
    const h = ((l.z + n / 2) / n) * i * Math.PI * 2;
    r.setXYZ(
      c,
      l.x * Math.cos(h) - l.y * Math.sin(h),
      l.x * Math.sin(h) + l.y * Math.cos(h),
      l.z,
    );
  }
  return (a.computeVertexNormals(), new le(a, Bi(s, o)));
}
