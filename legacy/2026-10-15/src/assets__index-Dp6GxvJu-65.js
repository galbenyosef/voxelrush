// assets__index-Dp6GxvJu 65 — add
// Lines 48283-48590 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function RV() {
  const n = new pe(),
    e = new pe();
  e.name = "cosmetic-knife-body";
  const t = yt(1),
    i = yt(2),
    s = 0.0125,
    o = -0.0045,
    a = [-0.176, -0.0032],
    r = [[-0.002, s]];
  if (t)
    for (let m = -0.032; m > -0.088; m -= 0.0056)
      r.push([m, s], [m - 0.0028, s + 0.0032]);
  (r.push([-0.118, s], [-0.151, 0.0056], a, [-0.152, o], [-0.002, o]),
    e.add(Vh(r, 0.0056, 2896182, "metal", 8e-4)),
    e.add(
      Vh(
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
        Vh(
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
        Vh(
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
      Vh(
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
    const y = m / c,
      g = h + (d - h) * y,
      b = 0.0128 + 0.0022 * Math.sin(Math.PI * Math.min(1, y * 1.15)),
      S = t ? 0.0013 * Math.max(0, Math.sin(y * Math.PI * 8)) : 0;
    l.push(new tt(b - S, g));
  }
  (l.unshift(new tt(0.001, h)), l.push(new tt(0.001, d)));
  const u = new Zp(l, di(12));
  if (
    (u.rotateX(Math.PI / 2),
    u.scale(0.78, 1, 1),
    e.add(new le(u, Bi(2764587, "matte"))),
    t)
  )
    for (const m of [0.012, 0.11]) {
      const y = new le(
        new xt(0.0142, 0.0142, 0.004, di(12)),
        Bi(6120812, "metal"),
      );
      ((y.rotation.x = Math.PI / 2),
        y.scale.set(0.8, 1, 1),
        (y.position.z = m),
        e.add(y));
    }
  const f = new le(new xt(0.0118, 0.0128, 0.016, di(12)), Bi(4870744, "metal"));
  ((f.rotation.x = Math.PI / 2),
    f.scale.set(0.82, 1, 1),
    (f.position.z = 0.126),
    e.add(f),
    t && e.add(De(0.0205, 0.0042, 0.0042, 789775, 0, 0, 0.127)),
    i && e.add(De(0.019, 0.0026, 0.003, 8226446, 0, 0.0088, 0.134, "metal")),
    e.rotation.set(0.5, 0.3, -0.85),
    e.scale.set(bm[0], bm[1], bm[2]),
    n.add(e),
    ln(e, "hand-r", 0, -0.002, 0.06),
    (n.getObjectByName("hand-r").userData.along = !0));
  const p = new $t();
  return (p.position.set(0, 0, -0.17 * bm[2]), n.add(p), qn(n, p, null, null));
}
let wm = null;
function CV() {
  if (wm) return wm;
  const n = document.createElement("canvas");
  n.width = n.height = 64;
  const e = n.getContext("2d"),
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
    const s = (i / 7) * Math.PI * 2 + Math.random() * 0.5;
    (e.beginPath(),
      e.moveTo(32, 32),
      e.lineTo(
        32 + Math.cos(s) * 14 + (Math.random() - 0.5) * 5,
        32 + Math.sin(s) * 14 + (Math.random() - 0.5) * 5,
      ),
      e.lineTo(
        32 + Math.cos(s) * (20 + Math.random() * 10),
        32 + Math.sin(s) * (20 + Math.random() * 10),
      ),
      e.stroke());
  }
  return ((wm = new bi(n)), wm);
}
function kV() {
  const n = new pe(),
    e = yt(1),
    t = yt(2),
    i = 14708764,
    s = 11752730,
    o = 1842721,
    a = 12745285;
  (n.add(De(0.075, 0.095, 0.17, i, 0, 0.022, 0.035, "gloss")),
    n.add(De(0.078, 0.022, 0.15, s, 0, -0.03, 0.04, "gloss")),
    n.add(De(0.05, 0.012, 0.13, o, 0, 0.074, 0.035)),
    n.add(
      De(0.014, 0.03, 0.014, o, 0, 0.09, -0.02),
      De(0.014, 0.03, 0.014, o, 0, 0.09, 0.09),
    ),
    n.add(De(0.018, 0.014, 0.125, o, 0, 0.108, 0.035)));
  const r = De(0.036, 0.1, 0.045, o, 0, -0.07, 0.1);
  ((r.rotation.x = -0.32), n.add(r), ln(n, "hand-r", 0, -0.078, 0.105, -0.32));
  const l = De(0.012, 0.03, 0.012, 9081241, 0, -0.05, 0.06, "metal");
  ((l.rotation.x = -0.3),
    n.add(l),
    n.add(De(0.03, 0.008, 0.05, o, 0, -0.078, 0.04)));
  const c = new pp([
    new k(0, 0.02, -0.05),
    new k(0, 0.02, -0.12),
    new k(0, 0, -0.19),
    new k(0, -0.035, -0.235),
  ]);
  (n.add(new le(new nu(c, 12, 0.012, di(8), !1), Bi(2764081, "gloss"))),
    n.add(Qt(0.019, 0.03, 10134187, 0, 0.02, -0.055)));
  const h = Iy(0.012, 0.018, 0.05, a, 0, -0.045, -0.255);
  ((h.rotation.x = Math.PI / 2 - 0.62), n.add(h));
  const d = new le(new mn(0.007, 8, 6), new qt({ color: 16756832 }));
  ((d.name = "weld-tip"),
    d.position.set(0, -0.062, -0.275),
    (d.visible = !1),
    n.add(d));
  const u = new pe();
  (u.position.set(-0.039, 0.02, 0.035), (u.rotation.y = Math.PI / 2));
  const f = new le(new xt(0.036, 0.036, 0.008, di(16)), Bi(3817285, "metal"));
  ((f.rotation.x = Math.PI / 2), u.add(f));
  const p = new le(new xt(0.028, 0.028, 0.01, di(16)), Bi(12088115, "metal"));
  if (((p.rotation.x = Math.PI / 2), (p.position.z = 0.002), u.add(p), e))
    for (let x = 0; x < 3; x++) {
      const T = De(0.006, 0.05, 0.004, 6054763, 0, 0, 0.008, "metal");
      ((T.rotation.z = (x * Math.PI) / 3), u.add(T));
    }
  n.add(u);
  const m = new le(
    new Kr(0.04, di(18)),
    new Us({
      color: 10466500,
      transparent: !0,
      opacity: 0.28,
      shininess: 80,
      specular: 16777215,
    }),
  );
  (m.position.set(-0.0395, 0.02, 0.035),
    (m.rotation.y = -Math.PI / 2),
    n.add(m));
  const y = new le(new pn(0.042, 0.02), new qt({ color: 5767072 }));
  ((y.name = "weld-display"),
    y.position.set(0.012, 0.045, 0.121),
    (y.rotation.y = 0),
    n.add(y),
    n.add(De(0.07, 0.07, 0.006, o, 0, 0.035, 0.119)));
  for (const x of [-0.022, 0.03]) {
    const T = Qt(0.009, 0.012, 2829875, x, 0.012, 0.126, "gloss");
    n.add(T);
  }
  if (e) {
    zr(n, 5, 0.018, 0.002, 0.05, 0.008, 3809034, 0.0385, 0.02, 0, "matte");
    for (let x = 0; x < 4; x++)
      n.add(
        De(
          0.077,
          0.008,
          0.012,
          x % 2 ? 1842204 : 15909424,
          0,
          -0.02,
          -0.038 + x * 0.012,
        ),
      );
    n.add(De(0.002, 0.018, 0.05, 14211288, 0.039, 0.05, 0, "metal"));
  }
  const g = new pp([
    new k(0, -0.12, 0.11),
    new k(0.01, -0.18, 0.16),
    new k(0.05, -0.22, 0.2),
    new k(0.02, -0.3, 0.3),
    new k(-0.03, -0.4, 0.34),
  ]);
  (n.add(
    new le(new nu(g, t ? 20 : 10, 0.011, di(6), !1), Bi(1381912, "gloss")),
  ),
    t && n.add(Qt(0.016, 0.03, 2829875, 0, -0.12, 0.105)));
  const b = new $t();
  (b.position.set(0, -0.066, -0.282), n.add(b));
  const S = new le(
    new pn(0.16, 0.16),
    new qt({
      map: CV(),
      transparent: !0,
      blending: cn,
      depthWrite: !1,
      side: Ai,
      color: 14674687,
    }),
  );
  ((S.name = "weld-arc"), (S.visible = !1), b.add(S));
  const M = new pe();
  return (
    n.scale.setScalar(0.82),
    (n.rotation.y = -0.28),
    M.add(n),
    qn(M, b, null, null, u)
  );
}
function yl(n) {
  return new qt({ color: n, toneMapped: !1 });
}
const Cw = [
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
