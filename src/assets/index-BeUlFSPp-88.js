// index-BeUlFSPp 88 — add
// Lines 56830-57135 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function AX() {
  const s = new re(),
    e = new re();
  e.name = "cosmetic-knife-body";
  const t = wt(1),
    i = wt(2),
    n = 0.0125,
    o = -0.0045,
    a = [-0.176, -0.0032],
    r = [[-0.002, n]];
  if (t)
    for (let m = -0.032; m > -0.088; m -= 0.0056)
      r.push([m, n], [m - 0.0028, n + 0.0032]);
  (r.push([-0.118, n], [-0.151, 0.0056], a, [-0.152, o], [-0.002, o]),
    e.add(Bh(r, 0.0056, 2896182, "metal", 8e-4)),
    e.add(
      Bh(
        [
          [-0.016, o],
          [-0.152, o],
          a,
          [-0.161, -0.0102],
          [-0.131, -0.0157],
          [-0.082, -0.0173],
          [-0.036, -0.0168],
          [-0.021, -0.0146],
          [-0.016, -0.0098],
        ],
        0.0026,
        13884126,
        "metal",
        7e-4,
      ),
    ),
    t &&
      (e.add(
        Bh(
          [
            [-0.024, 0.0018],
            [-0.098, 0.0018],
            [-0.102, 0.0045],
            [-0.098, 0.0062],
            [-0.024, 0.0062],
          ],
          0.0064,
          1448220,
          "gloss",
          2e-4,
        ),
      ),
      e.add(
        Bh(
          [
            [-0.005, -5e-4],
            [-0.013, -5e-4],
            [-0.013, 0.0045],
            [-0.005, 0.0045],
          ],
          0.0062,
          7041914,
          "metal",
          2e-4,
        ),
      )),
    e.add(
      Bh(
        [
          [0.003, -0.026],
          [-0.004, -0.031],
          [-0.009, -0.029],
          [-0.007, -0.022],
          [-0.007, 0.019],
          [-0.004, 0.023],
          [0.003, 0.021],
        ],
        0.017,
        5265503,
        "metal",
        0.0016,
      ),
    ));
  const l = [],
    c = i ? 30 : t ? 18 : 8,
    h = 0.004,
    d = 0.118;
  for (let m = 0; m <= c; m++) {
    const g = m / c,
      y = h + (d - h) * g,
      b = 0.0128 + 0.0022 * Math.sin(Math.PI * Math.min(1, g * 1.15)),
      S = t ? 0.0013 * Math.max(0, Math.sin(g * Math.PI * 8)) : 0;
    l.push(new ct(b - S, y));
  }
  (l.unshift(new ct(0.001, h)), l.push(new ct(0.001, d)));
  const u = new Yf(l, ci(12));
  if (
    (u.rotateX(Math.PI / 2),
    u.scale(0.78, 1, 1),
    e.add(new Q(u, Ti(2764587, "matte"))),
    t)
  )
    for (const m of [0.012, 0.11]) {
      const g = new Q(
        new Tt(0.0142, 0.0142, 0.004, ci(12)),
        Ti(6120812, "metal"),
      );
      ((g.rotation.x = Math.PI / 2),
        g.scale.set(0.8, 1, 1),
        (g.position.z = m),
        e.add(g));
    }
  const f = new Q(new Tt(0.0118, 0.0128, 0.016, ci(12)), Ti(4870744, "metal"));
  ((f.rotation.x = Math.PI / 2),
    f.scale.set(0.82, 1, 1),
    (f.position.z = 0.126),
    e.add(f),
    t && e.add(me(0.0205, 0.0042, 0.0042, 789775, 0, 0, 0.127)),
    i && e.add(me(0.019, 0.0026, 0.003, 8226446, 0, 0.0088, 0.134, "metal")),
    e.rotation.set(0.5, 0.3, -0.85),
    e.scale.set(lg[0], lg[1], lg[2]),
    s.add(e),
    _i(e, "hand-r", 0, -0.002, 0.06),
    (s.getObjectByName("hand-r").userData.along = !0));
  const p = new Xt();
  return (p.position.set(0, 0, -0.17 * lg[2]), s.add(p), Hs(s, p, null, null));
}
let cg = null;
function TX() {
  if (cg) return cg;
  const s = document.createElement("canvas");
  s.width = s.height = 64;
  const e = s.getContext("2d"),
    t = e.createRadialGradient(32, 32, 1, 32, 32, 32);
  (t.addColorStop(0, "rgba(255,255,255,1)"),
    t.addColorStop(0.18, "rgba(220,236,255,0.95)"),
    t.addColorStop(0.45, "rgba(120,160,255,0.45)"),
    t.addColorStop(1, "rgba(90,60,255,0)"),
    (e.fillStyle = t),
    e.fillRect(0, 0, 64, 64),
    (e.strokeStyle = "rgba(235,245,255,0.8)"),
    (e.lineWidth = 1.2));
  for (let i = 0; i < 7; i++) {
    const n = (i / 7) * Math.PI * 2 + Math.random() * 0.5;
    (e.beginPath(),
      e.moveTo(32, 32),
      e.lineTo(
        32 + Math.cos(n) * 14 + (Math.random() - 0.5) * 5,
        32 + Math.sin(n) * 14 + (Math.random() - 0.5) * 5,
      ),
      e.lineTo(
        32 + Math.cos(n) * (20 + Math.random() * 10),
        32 + Math.sin(n) * (20 + Math.random() * 10),
      ),
      e.stroke());
  }
  return ((cg = new Si(s)), cg);
}
function xX() {
  const s = new re(),
    e = wt(1),
    t = wt(2),
    i = 14708764,
    n = 11752730,
    o = 1842721,
    a = 12745285;
  (s.add(me(0.075, 0.095, 0.17, i, 0, 0.022, 0.035, "gloss")),
    s.add(me(0.078, 0.022, 0.15, n, 0, -0.03, 0.04, "gloss")),
    s.add(me(0.05, 0.012, 0.13, o, 0, 0.074, 0.035)),
    s.add(
      me(0.014, 0.03, 0.014, o, 0, 0.09, -0.02),
      me(0.014, 0.03, 0.014, o, 0, 0.09, 0.09),
    ),
    s.add(me(0.018, 0.014, 0.125, o, 0, 0.108, 0.035)));
  const r = me(0.036, 0.1, 0.045, o, 0, -0.07, 0.1);
  ((r.rotation.x = -0.32), s.add(r), _i(s, "hand-r", 0, -0.078, 0.105, -0.32));
  const l = me(0.012, 0.03, 0.012, 9081241, 0, -0.05, 0.06, "metal");
  ((l.rotation.x = -0.3),
    s.add(l),
    s.add(me(0.03, 0.008, 0.05, o, 0, -0.078, 0.04)));
  const c = new J1([
    new k(0, 0.02, -0.05),
    new k(0, 0.02, -0.12),
    new k(0, 0, -0.19),
    new k(0, -0.035, -0.235),
  ]);
  (s.add(new Q(new Af(c, 12, 0.012, ci(8), !1), Ti(2764081, "gloss"))),
    s.add(Gt(0.019, 0.03, 10134187, 0, 0.02, -0.055)));
  const h = Xm(0.012, 0.018, 0.05, a, 0, -0.045, -0.255);
  ((h.rotation.x = Math.PI / 2 - 0.62), s.add(h));
  const d = new Q(new ws(0.007, 8, 6), new Zt({ color: 16756832 }));
  ((d.name = "weld-tip"),
    d.position.set(0, -0.062, -0.275),
    (d.visible = !1),
    s.add(d));
  const u = new re();
  (u.position.set(-0.039, 0.02, 0.035), (u.rotation.y = Math.PI / 2));
  const f = new Q(new Tt(0.036, 0.036, 0.008, ci(16)), Ti(3817285, "metal"));
  ((f.rotation.x = Math.PI / 2), u.add(f));
  const p = new Q(new Tt(0.028, 0.028, 0.01, ci(16)), Ti(12088115, "metal"));
  if (((p.rotation.x = Math.PI / 2), (p.position.z = 0.002), u.add(p), e))
    for (let E = 0; E < 3; E++) {
      const A = me(0.006, 0.05, 0.004, 6054763, 0, 0, 0.008, "metal");
      ((A.rotation.z = (E * Math.PI) / 3), u.add(A));
    }
  s.add(u);
  const m = new Q(
    new Bl(0.04, ci(18)),
    new oo({
      color: 10466500,
      transparent: !0,
      opacity: 0.28,
      shininess: 80,
      specular: 16777215,
    }),
  );
  (m.position.set(-0.0395, 0.02, 0.035),
    (m.rotation.y = -Math.PI / 2),
    s.add(m));
  const g = new Q(new ms(0.042, 0.02), new Zt({ color: 5767072 }));
  ((g.name = "weld-display"),
    g.position.set(0.012, 0.045, 0.121),
    (g.rotation.y = 0),
    s.add(g),
    s.add(me(0.07, 0.07, 0.006, o, 0, 0.035, 0.119)));
  for (const E of [-0.022, 0.03]) {
    const A = Gt(0.009, 0.012, 2829875, E, 0.012, 0.126, "gloss");
    s.add(A);
  }
  if (e) {
    Ll(s, 5, 0.018, 0.002, 0.05, 0.008, 3809034, 0.0385, 0.02, 0, "matte");
    for (let E = 0; E < 4; E++)
      s.add(
        me(
          0.077,
          0.008,
          0.012,
          E % 2 ? 1842204 : 15909424,
          0,
          -0.02,
          -0.038 + E * 0.012,
        ),
      );
    s.add(me(0.002, 0.018, 0.05, 14211288, 0.039, 0.05, 0, "metal"));
  }
  const y = new J1([
    new k(0, -0.12, 0.11),
    new k(0.01, -0.18, 0.16),
    new k(0.05, -0.22, 0.2),
    new k(0.02, -0.3, 0.3),
    new k(-0.03, -0.4, 0.34),
  ]);
  (s.add(new Q(new Af(y, t ? 20 : 10, 0.011, ci(6), !1), Ti(1381912, "gloss"))),
    t && s.add(Gt(0.016, 0.03, 2829875, 0, -0.12, 0.105)));
  const b = new Xt();
  (b.position.set(0, -0.066, -0.282), s.add(b));
  const S = new Q(
    new ms(0.16, 0.16),
    new Zt({
      map: TX(),
      transparent: !0,
      blending: rs,
      depthWrite: !1,
      side: Mi,
      color: 14674687,
    }),
  );
  ((S.name = "weld-arc"), (S.visible = !1), b.add(S));
  const M = new re();
  return (
    s.scale.setScalar(0.82),
    (s.rotation.y = -0.28),
    M.add(s),
    Hs(M, b, null, null, u)
  );
}
function nc(s) {
  return new Zt({ color: s, toneMapped: !1 });
}
const l4 = [
  {
    body: 15233821,
    cover: 15658214,
    dark: 2500393,
    accent: 15658214,
    bar: 12173767,
    decal: 15233821,
    barLen: 0.44,
  },
  {
    body: 3107387,
    cover: 1777693,
    dark: 1316886,
    accent: 15909424,
    bar: 11581630,
    decal: 15909424,
    barLen: 0.52,
  },
  {
    body: 4739419,
    cover: 15909424,
    dark: 1316634,
    accent: 16738842,
    bar: 13949662,
    decal: 1316634,
    barLen: 0.6,
  },
];
