// index-Dp6GxvJu 190 — add
// Lines 105263-105453 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function _a(n, e, t, i, s, o, a) {
  const r = new ci(),
    l = e > n,
    c = l
      ? [
          [-n / 2, -e / 2, -t / 2],
          [-n / 2, -e / 2, t / 2],
          [-n / 2, e / 2, t * 0.25],
          [n / 2, -e / 2, -t / 2],
          [n / 2, -e / 2, t / 2],
          [n / 2, e / 2, t * 0.25],
        ]
      : [
          [-n / 2, -e / 2, -t / 2],
          [n / 2, -e / 2, t * 0.25],
          [-n / 2, -e / 2, t / 2],
          [-n / 2, e / 2, -t / 2],
          [n / 2, e / 2, t * 0.25],
          [-n / 2, e / 2, t / 2],
        ];
  (r.setAttribute("position", new It(c.flat(), 3)),
    r.setAttribute("uv", new It([0, 0, 1, 0, 0.5, 1, 0, 0, 1, 0, 0.5, 1], 2)),
    r.setIndex([
      0, 1, 2, 3, 5, 4, 0, 4, 1, 0, 3, 4, 1, 5, 2, 1, 4, 5, 2, 3, 0, 2, 5, 3,
    ]),
    r.computeVertexNormals());
  const h = new le(r, Xy(i));
  return (
    h.position.set(s, o, a),
    (h.castShadow = !0),
    !l && s < 0 && (h.scale.x = -1),
    h
  );
}
function Vee(n, e) {
  const t = new pe(),
    i = [],
    s = new pe(),
    o = [
      [15237690, 16184042, 2827040],
      [7321304, 14675702, 2240570],
      [4157400, 15782474, 1844288],
      [9355850, 15134665, 2896672],
    ],
    [a, r, l] = o[e % o.length];
  if (
    (t.add(Ye(0.26, 0.34, 0.34, a, 0, 0.3, -0.02, "skin")),
    t.add(Ye(0.2, 0.26, 0.22, a, 0, 0.3, -0.26, "skin")),
    t.add(Ye(0.14, 0.2, 0.2, pi(a, 0.92), 0, 0.3, 0.18, "skin")),
    t.add(Ye(0.2, 0.12, 0.3, r, 0, 0.19, -0.04, "skin")),
    yt(1) &&
      (t.add(xn(0.045, 15921904, -0.1, 0.35, -0.32)),
      t.add(xn(0.045, 15921904, 0.1, 0.35, -0.32)),
      t.add(xn(0.028, l, -0.11, 0.35, -0.35)),
      t.add(xn(0.028, l, 0.11, 0.35, -0.35)),
      t.add(_a(0.02, 0.16, 0.16, pi(a, 1.12), 0, 0.5, -0.02)),
      t.add(_a(0.16, 0.02, 0.12, pi(a, 0.88), 0, 0.14, 0.02)),
      e % o.length === 0 &&
        (t.add(Ye(0.27, 0.35, 0.06, r, 0, 0.3, -0.14, "skin")),
        t.add(Ye(0.21, 0.29, 0.05, r, 0, 0.3, 0.08, "skin")))),
    yt(1))
  )
    for (const d of [-1, 1])
      (t.add(Ye(0.014, 0.19, 0.023, pi(a, 0.7), d * 0.108, 0.29, -0.21)),
        t.add(Ye(0.015, 0.026, 0.2, pi(a, 1.12), d * 0.133, 0.32, 0.005)));
  const c = _a(0.13, 0.03, 0.1, pi(a, 1.08), -0.14, 0.29, -0.16),
    h = _a(0.13, 0.03, 0.1, pi(a, 1.08), 0.14, 0.29, -0.16);
  if (
    ((c.rotation.z = 0.3),
    (h.rotation.z = -0.3),
    t.add(c, h),
    i.push(c, h),
    s.position.set(0, 0.3, 0.26),
    s.add(_a(0.03, 0.3, 0.24, pi(a, 1.05), 0, 0, 0.12)),
    yt(1))
  ) {
    const d = _a(0.03, 0.16, 0.14, pi(a, 1.14), 0, 0.11, 0.22),
      u = _a(0.03, 0.16, 0.14, pi(a, 1.14), 0, -0.11, 0.22);
    ((d.rotation.x = -0.35), (u.rotation.x = 0.35), s.add(d, u));
  }
  t.add(s);
  for (const d of i) d.userData.animated = !0;
  return (
    p0(t),
    p0(s),
    t.scale.setScalar(Ir(Nt.FISH, n)),
    { group: t, legs: [], head: null, tail: s, flaps: i, spine: [], jaw: null }
  );
}
function $ee(n, e) {
  const t = new pe(),
    i = [],
    s = [],
    o = new pe(),
    a = [6056564, 4938342, 7043974][e % 3],
    r = pi(a, 0.82),
    l = 15001312;
  if (
    (t.add(Ye(0.78, 0.82, 1.5, a, 0, 0.66, -0.95, "skin")),
    t.add(Ye(0.6, 0.5, 0.66, pi(a, 1.04), 0, 0.72, -1.85, "skin")),
    t.add(Ye(0.7, 0.28, 1.3, l, 0, 0.3, -0.9, "skin")),
    t.add(Ye(0.8, 0.3, 1.5, r, 0, 0.98, -0.95, "skin")),
    yt(1))
  ) {
    (t.add(xn(0.09, 1119255, -0.3, 0.86, -1.86)),
      t.add(xn(0.09, 1119255, 0.3, 0.86, -1.86)));
    for (let m = 0; m < 5; m++)
      (t.add(Ye(0.03, 0.3, 0.05, pi(a, 0.7), -0.39, 0.62, -1.2 + m * 0.13)),
        t.add(Ye(0.03, 0.3, 0.05, pi(a, 0.7), 0.39, 0.62, -1.2 + m * 0.13)));
  }
  if (
    (o.position.set(0, 0.52, -1.7),
    o.add(Ye(0.52, 0.16, 0.62, pi(13216162, 0.9), 0, -0.06, -0.24, "skin")),
    yt(1))
  )
    for (let m = 0; m < 5; m++) {
      const y = -0.2 + m * 0.1;
      (o.add(Ye(0.05, 0.1, 0.05, 16052972, y, 0.03, -0.48)),
        t.add(Ye(0.05, 0.1, 0.05, 16052972, y, 0.5, -2.16)));
    }
  if ((t.add(o), yt(1)))
    for (const m of [-1, 1])
      for (let y = 0; y < 5; y++)
        t.add(
          Ye(
            0.016,
            0.24 - y * 0.018,
            0.027,
            pi(a, 0.48),
            m * 0.435,
            0.68,
            -1.21 + y * 0.1,
          ),
        );
  const c = _a(0.72, 0.09, 0.4, pi(a, 0.9), -0.62, 0.42, -0.7),
    h = _a(0.72, 0.09, 0.4, pi(a, 0.9), 0.62, 0.42, -0.7);
  ((c.rotation.z = 0.32), (h.rotation.z = -0.32), t.add(c, h), i.push(c, h));
  const d = _a(0.11, 0.72, 0.5, r, 0, 1.36, -0.7);
  ((d.rotation.x = -0.22), t.add(d));
  let u = t;
  const f = [
    [-0.2, 0.68, 0.72, 1.1],
    [1, 0.5, 0.56, 1],
    [0.9, 0.3, 0.36, 0.9],
  ];
  for (const [m, y, g, b] of f) {
    const S = new pe();
    (S.position.set(0, u === t ? 0.66 : 0, m),
      S.add(Ye(y, g, b, a, 0, 0, b * 0.5, "skin")),
      S.add(Ye(y * 0.9, g * 0.32, b * 0.94, l, 0, -g * 0.34, b * 0.5, "skin")),
      S.add(Ye(y * 1.02, g * 0.3, b * 0.96, r, 0, g * 0.36, b * 0.5, "skin")),
      u.add(S),
      s.push(S),
      (u = S));
  }
  const p = new pe();
  (p.position.set(0, 0, 0.85),
    p.add(_a(0.09, 1.15, 0.5, a, 0, 0.42, 0.22)),
    p.add(_a(0.09, 0.55, 0.36, pi(a, 0.92), 0, -0.24, 0.16)),
    u.add(p));
  for (const m of i) m.userData.animated = !0;
  return (
    p0(t),
    t.scale.setScalar(Ir(Nt.SHARK, n)),
    { group: t, legs: [], head: null, tail: p, flaps: i, spine: s, jaw: o }
  );
}
let s2 = null;
function qee() {
  if (s2) return s2;
  const n = document.createElement("canvas");
  n.width = n.height = 64;
  const e = n.getContext("2d"),
    t = e.createRadialGradient(32, 32, 0, 32, 32, 32);
  (t.addColorStop(0, "rgba(235,250,255,1)"),
    t.addColorStop(0.25, "rgba(170,220,255,.55)"),
    t.addColorStop(1, "rgba(120,180,255,0)"),
    (e.fillStyle = t),
    e.fillRect(0, 0, 64, 64));
  const i = new bi(n);
  return (
    (s2 = new es({
      map: i,
      blending: cn,
      depthWrite: !1,
      transparent: !0,
      fog: !1,
    })),
    s2
  );
}
