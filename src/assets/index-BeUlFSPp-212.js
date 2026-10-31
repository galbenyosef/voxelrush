// index-BeUlFSPp 212 — add
// Lines 111988-112178 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function cr(s, e, t, i, n, o, a) {
  const r = new oi(),
    l = e > s,
    c = l
      ? [
          [-s / 2, -e / 2, -t / 2],
          [-s / 2, -e / 2, t / 2],
          [-s / 2, e / 2, t * 0.25],
          [s / 2, -e / 2, -t / 2],
          [s / 2, -e / 2, t / 2],
          [s / 2, e / 2, t * 0.25],
        ]
      : [
          [-s / 2, -e / 2, -t / 2],
          [s / 2, -e / 2, t * 0.25],
          [-s / 2, -e / 2, t / 2],
          [-s / 2, e / 2, -t / 2],
          [s / 2, e / 2, t * 0.25],
          [-s / 2, e / 2, t / 2],
        ];
  (r.setAttribute("position", new Dt(c.flat(), 3)),
    r.setAttribute("uv", new Dt([0, 0, 1, 0, 0.5, 1, 0, 0, 1, 0, 0.5, 1], 2)),
    r.setIndex([
      0, 1, 2, 3, 5, 4, 0, 4, 1, 0, 3, 4, 1, 5, 2, 1, 4, 5, 2, 3, 0, 2, 5, 3,
    ]),
    r.computeVertexNormals());
  const h = new Q(r, c3(i));
  return (
    h.position.set(n, o, a),
    (h.castShadow = !0),
    !l && n < 0 && (h.scale.x = -1),
    h
  );
}
function ire(s, e) {
  const t = new re(),
    i = [],
    n = new re(),
    o = [
      [15237690, 16184042, 2827040],
      [7321304, 14675702, 2240570],
      [4157400, 15782474, 1844288],
      [9355850, 15134665, 2896672],
    ],
    [a, r, l] = o[e % o.length];
  if (
    (t.add(nt(0.26, 0.34, 0.34, a, 0, 0.3, -0.02, "skin")),
    t.add(nt(0.2, 0.26, 0.22, a, 0, 0.3, -0.26, "skin")),
    t.add(nt(0.14, 0.2, 0.2, bi(a, 0.92), 0, 0.3, 0.18, "skin")),
    t.add(nt(0.2, 0.12, 0.3, r, 0, 0.19, -0.04, "skin")),
    wt(1) &&
      (t.add(Cs(0.045, 15921904, -0.1, 0.35, -0.32)),
      t.add(Cs(0.045, 15921904, 0.1, 0.35, -0.32)),
      t.add(Cs(0.028, l, -0.11, 0.35, -0.35)),
      t.add(Cs(0.028, l, 0.11, 0.35, -0.35)),
      t.add(cr(0.02, 0.16, 0.16, bi(a, 1.12), 0, 0.5, -0.02)),
      t.add(cr(0.16, 0.02, 0.12, bi(a, 0.88), 0, 0.14, 0.02)),
      e % o.length === 0 &&
        (t.add(nt(0.27, 0.35, 0.06, r, 0, 0.3, -0.14, "skin")),
        t.add(nt(0.21, 0.29, 0.05, r, 0, 0.3, 0.08, "skin")))),
    wt(1))
  )
    for (const d of [-1, 1])
      (t.add(nt(0.014, 0.19, 0.023, bi(a, 0.7), d * 0.108, 0.29, -0.21)),
        t.add(nt(0.015, 0.026, 0.2, bi(a, 1.12), d * 0.133, 0.32, 0.005)));
  const c = cr(0.13, 0.03, 0.1, bi(a, 1.08), -0.14, 0.29, -0.16),
    h = cr(0.13, 0.03, 0.1, bi(a, 1.08), 0.14, 0.29, -0.16);
  if (
    ((c.rotation.z = 0.3),
    (h.rotation.z = -0.3),
    t.add(c, h),
    i.push(c, h),
    n.position.set(0, 0.3, 0.26),
    n.add(cr(0.03, 0.3, 0.24, bi(a, 1.05), 0, 0, 0.12)),
    wt(1))
  ) {
    const d = cr(0.03, 0.16, 0.14, bi(a, 1.14), 0, 0.11, 0.22),
      u = cr(0.03, 0.16, 0.14, bi(a, 1.14), 0, -0.11, 0.22);
    ((d.rotation.x = -0.35), (u.rotation.x = 0.35), n.add(d, u));
  }
  t.add(n);
  for (const d of i) d.userData.animated = !0;
  return (
    ud(t),
    ud(n),
    t.scale.setScalar(Sl(Bt.FISH, s)),
    { group: t, legs: [], head: null, tail: n, flaps: i, spine: [], jaw: null }
  );
}
function sre(s, e) {
  const t = new re(),
    i = [],
    n = [],
    o = new re(),
    a = [6056564, 4938342, 7043974][e % 3],
    r = bi(a, 0.82),
    l = 15001312;
  if (
    (t.add(nt(0.78, 0.82, 1.5, a, 0, 0.66, -0.95, "skin")),
    t.add(nt(0.6, 0.5, 0.66, bi(a, 1.04), 0, 0.72, -1.85, "skin")),
    t.add(nt(0.7, 0.28, 1.3, l, 0, 0.3, -0.9, "skin")),
    t.add(nt(0.8, 0.3, 1.5, r, 0, 0.98, -0.95, "skin")),
    wt(1))
  ) {
    (t.add(Cs(0.09, 1119255, -0.3, 0.86, -1.86)),
      t.add(Cs(0.09, 1119255, 0.3, 0.86, -1.86)));
    for (let m = 0; m < 5; m++)
      (t.add(nt(0.03, 0.3, 0.05, bi(a, 0.7), -0.39, 0.62, -1.2 + m * 0.13)),
        t.add(nt(0.03, 0.3, 0.05, bi(a, 0.7), 0.39, 0.62, -1.2 + m * 0.13)));
  }
  if (
    (o.position.set(0, 0.52, -1.7),
    o.add(nt(0.52, 0.16, 0.62, bi(13216162, 0.9), 0, -0.06, -0.24, "skin")),
    wt(1))
  )
    for (let m = 0; m < 5; m++) {
      const g = -0.2 + m * 0.1;
      (o.add(nt(0.05, 0.1, 0.05, 16052972, g, 0.03, -0.48)),
        t.add(nt(0.05, 0.1, 0.05, 16052972, g, 0.5, -2.16)));
    }
  if ((t.add(o), wt(1)))
    for (const m of [-1, 1])
      for (let g = 0; g < 5; g++)
        t.add(
          nt(
            0.016,
            0.24 - g * 0.018,
            0.027,
            bi(a, 0.48),
            m * 0.435,
            0.68,
            -1.21 + g * 0.1,
          ),
        );
  const c = cr(0.72, 0.09, 0.4, bi(a, 0.9), -0.62, 0.42, -0.7),
    h = cr(0.72, 0.09, 0.4, bi(a, 0.9), 0.62, 0.42, -0.7);
  ((c.rotation.z = 0.32), (h.rotation.z = -0.32), t.add(c, h), i.push(c, h));
  const d = cr(0.11, 0.72, 0.5, r, 0, 1.36, -0.7);
  ((d.rotation.x = -0.22), t.add(d));
  let u = t;
  const f = [
    [-0.2, 0.68, 0.72, 1.1],
    [1, 0.5, 0.56, 1],
    [0.9, 0.3, 0.36, 0.9],
  ];
  for (const [m, g, y, b] of f) {
    const S = new re();
    (S.position.set(0, u === t ? 0.66 : 0, m),
      S.add(nt(g, y, b, a, 0, 0, b * 0.5, "skin")),
      S.add(nt(g * 0.9, y * 0.32, b * 0.94, l, 0, -y * 0.34, b * 0.5, "skin")),
      S.add(nt(g * 1.02, y * 0.3, b * 0.96, r, 0, y * 0.36, b * 0.5, "skin")),
      u.add(S),
      n.push(S),
      (u = S));
  }
  const p = new re();
  (p.position.set(0, 0, 0.85),
    p.add(cr(0.09, 1.15, 0.5, a, 0, 0.42, 0.22)),
    p.add(cr(0.09, 0.55, 0.36, bi(a, 0.92), 0, -0.24, 0.16)),
    u.add(p));
  for (const m of i) m.userData.animated = !0;
  return (
    ud(t),
    t.scale.setScalar(Sl(Bt.SHARK, s)),
    { group: t, legs: [], head: null, tail: p, flaps: i, spine: n, jaw: o }
  );
}
let Vg = null;
function nre() {
  if (Vg) return Vg;
  const s = document.createElement("canvas");
  s.width = s.height = 64;
  const e = s.getContext("2d"),
    t = e.createRadialGradient(32, 32, 0, 32, 32, 32);
  (t.addColorStop(0, "rgba(235,250,255,1)"),
    t.addColorStop(0.25, "rgba(170,220,255,.55)"),
    t.addColorStop(1, "rgba(120,180,255,0)"),
    (e.fillStyle = t),
    e.fillRect(0, 0, 64, 64));
  const i = new Si(s);
  return (
    (Vg = new hn({
      map: i,
      blending: rs,
      depthWrite: !1,
      transparent: !0,
      fog: !1,
    })),
    Vg
  );
}
