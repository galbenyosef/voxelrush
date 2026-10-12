// assets__index-Dp6GxvJu 69 — add
// Lines 49534-49869 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function d4(n, e, t = 0.3) {
  var l;
  if (e === v.CHAIN) {
    const c = [],
      h = [],
      d = [],
      u = [],
      f = de[v.CHAIN].tex[1],
      p = f % mi,
      m = Math.floor(f / mi);
    for (const g of wk(1)) {
      const b = c.length / 3;
      (g.points.forEach((S, M) => {
        (c.push(...S.map((x) => (x - 0.5) * t)),
          h.push(...g.normal),
          d.push(
            (p + 0.02 + (M >> 1) * 0.96) / mi,
            1 - (m + 0.02 + (M % 2) * 0.96) / mi,
          ));
      }),
        u.push(b, b + 1, b + 2, b + 2, b + 1, b + 3));
    }
    const y = new ci();
    return (
      y.setAttribute("position", new It(c, 3)),
      y.setAttribute("normal", new It(h, 3)),
      y.setAttribute("uv", new It(d, 2)),
      y.setIndex(u),
      new le(y, new gi({ map: n }))
    );
  }
  if (e === v.TORCH || e === v.RTORCH) return UV(e, t);
  if (e === v.MINE_AP || e === v.MINE_AT) {
    const c = new pe();
    for (const h of ru(e)) {
      const [d, u, f, p, m, y] = h.box,
        g =
          ((l = de.find((b) => b.tex[0] === h.tile)) == null
            ? void 0
            : l.color) ?? 6648140;
      c.add(
        De(
          (p - d) * t,
          (m - u) * t,
          (y - f) * t,
          g,
          ((d + p) / 2 - 0.5) * t,
          ((u + m) / 2) * t,
          ((f + y) / 2 - 0.5) * t,
        ),
      );
    }
    return c;
  }
  const i = de[e];
  if (i && (i.shape !== "cube" || e === v.CACTUS) && !i.liquid) {
    const c =
        i.shape === "furniture" ||
        i.shape === "stair" ||
        i.shape === "door" ||
        i.shape === "gate" ||
        i.shape === "bed"
          ? 2
          : 0,
      h = Fk(e, c);
    if (h) {
      const d = new le(
          h,
          new gi({ map: n, vertexColors: !0, alphaTest: 0.5, side: Ai }),
        ),
        u = h.boundingBox,
        f = Math.max(1, u.max.y - u.min.y);
      (d.scale.setScalar(t / f),
        f > 1 && (d.position.y = (-((u.min.y + u.max.y) / 2) * t) / f),
        (d.frustumCulled = !1),
        (d.userData.sharedGeometry = !0));
      const p = new pe();
      return (p.add(d), p);
    }
  }
  const s = new Ct(t, t, t),
    o = s.getAttribute("uv"),
    a = i
      ? [i.tex[1], i.tex[1], i.tex[0], i.tex[2], i.tex[1], i.tex[1]]
      : [0, 0, 0, 0, 0, 0];
  if (e === v.FURNACE)
    for (let c = 0; c < 6; c++) {
      const h = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1],
      ][c];
      a[c] = uC(2, h[0], h[1], h[2]);
    }
  for (let c = 0; c < 6; c++) {
    const h = a[c] % mi,
      d = Math.floor(a[c] / mi);
    for (let u = 0; u < 4; u++) {
      const f = c * 4 + u,
        p = o.getX(f),
        m = o.getY(f);
      o.setXY(
        f,
        (h + 0.02 + p * 0.96) / mi,
        1 - (d + 1 - (0.02 + m * 0.96)) / mi,
      );
    }
  }
  const r = new le(s, new gi({ map: n, alphaTest: 0.5 }));
  return ((r.frustumCulled = !1), r);
}
const Kk = [];
function FV(n) {
  const e = n.getObjectByName("fp-turn"),
    t = e == null ? void 0 : e.userData.fpTurn;
  e && t && e.rotation.set(t[0], t[1], t[2]);
}
function u4(n) {
  Kk.push(n);
}
function GV() {
  for (const n of Kk) n();
}
function WV() {
  const n = new pe(),
    e = new pe();
  ((e.name = "minigun-barrels"),
    n.add(
      Qt(0.12, 0.29, 3490121, 0, 0, 0.03),
      De(0.18, 0.035, 0.3, 7438474, 0, 0.12, 0.02),
    ));
  for (let s = 0; s < 6; s++) {
    const o = (s * Math.PI) / 3,
      a = Math.cos(o) * 0.068,
      r = Math.sin(o) * 0.068;
    e.add(
      Qt(0.022, 0.57, 6517114, a, r, -0.38),
      Qt(0.015, 0.012, 1053718, a, r, -0.672),
    );
  }
  (e.add(
    Qt(0.103, 0.038, 3358275, 0, 0, -0.19),
    Qt(0.103, 0.036, 9608610, 0, 0, -0.57),
    Qt(0.026, 0.57, 2370866, 0, 0, -0.37),
  ),
    n.add(e));
  for (const s of [-0.115, 0.115])
    n.add(De(0.025, 0.14, 0.03, 5859951, s, 0.17, 0.02));
  (n.add(
    De(0.26, 0.028, 0.04, 2107691, 0, 0.24, 0.02),
    De(0.06, 0.15, 0.07, 2436398, 0.02, -0.13, 0.13),
  ),
    n.add(
      De(0.05, 0.03, 0.03, 2107691, -0.1, -0.02, -0.12),
      De(0.03, 0.12, 0.035, 2436398, -0.14, -0.07, -0.12),
    ),
    ln(n, "grip-r", 0.02, -0.13, 0.13, 0.1),
    ln(n, "grip-l", -0.14, -0.06, -0.12, 0, 0, -Math.PI / 2),
    ln(n, "eject-port", 0.09, -0.06, -0.02));
  const t = new pe();
  ((t.name = "weapon-magazine"),
    t.add(
      Qt(0.13, 0.22, 4939853, -0.15, -0.18, 0.01),
      Qt(0.105, 0.012, 7569514, -0.15, -0.18, -0.107),
    ),
    ln(t, "mag-grip", -0.15, -0.33, 0.01),
    n.add(t));
  for (let s = 0; s < 7; s++)
    n.add(
      Qt(
        0.012,
        0.075,
        13214563,
        -0.12 + s * 0.019,
        -0.085 - Math.sin((s / 6) * Math.PI) * 0.035,
        -0.12,
      ),
    );
  const i = new $t();
  return (i.position.set(0, 0, -0.69), n.add(i), qn(n, i, t, null, e));
}
function QT(n) {
  const e = new pe();
  (e.add(
    De(0.065, 0.075, 0.3, 3490378, 0, 0, 0.025),
    Qt(0.022, 0.52, 7766666, 0, 0.02, -0.35),
    Qt(0.016, 0.43, 3161411, 0, -0.026, -0.31),
  ),
    e.add(
      Qt(0.015, 0.006, 1053717, 0, 0.02, -0.614),
      De(0.009, 0.025, 0.014, 13870690, 0, 0.049, -0.57),
    ));
  const t = De(0.06, 0.095, 0.23, 8673077, 0, -0.018, 0.28, "matte");
  ((t.rotation.x = -0.14),
    e.add(t, De(0.064, 0.1, 0.022, 1844520, 0, -0.03, 0.4)));
  const i = De(0.044, 0.11, 0.058, 9790273, 0, -0.075, 0.13, "matte");
  ((i.rotation.x = -0.28),
    e.add(i),
    e.add(
      De(0.046, 0.013, 0.09, 6648440, 0, -0.095, 0.057),
      De(0.012, 0.038, 0.012, 1383713, 0, -0.065, 0.057),
    ),
    ln(e, "grip-r", 0, -0.078, 0.13, -0.2),
    ln(e, "eject-port", 0.035, 0.02, -0.02));
  const s = new pe();
  ((s.name = "shotgun-pump"),
    s.add(De(0.079, 0.064, 0.18, 9659716, 0, -0.025, -0.3, "matte")),
    ln(s, "grip-l", 0, -0.03, -0.3),
    zr(s, 8, 0.02, 0.083, 0.068, 0.004, 4075558, 0, -0.025, -0.37),
    e.add(s));
  const o = new pe();
  ((o.name = "weapon-magazine"),
    o.add(De(0.055, 0.065, 0.075, 2636346, 0, -0.07, -0.02)),
    ln(o, "mag-grip", 0, -0.13, -0.04),
    e.add(o));
  for (let r = 0; r < 4; r++)
    e.add(
      Qt(0.012, 0.056, 10764850, -0.042, 0.025, 0.11 - r * 0.035),
      Qt(0.013, 0.012, 14003803, -0.042, 0.025, 0.14 - r * 0.035),
    );
  n != null && n.light && e.add(c1(0.045, -0.03, -0.42));
  const a = new $t();
  return (a.position.set(0, 0.02, -0.625), e.add(a), qn(e, a, o, null));
}
function VV(n) {
  const e = n === E.AMMO_9MM,
    t = n === E.AMMO_338,
    i = t ? 0.035 : e ? 0.033 : 0.029,
    s = e ? 0.13 : t ? 0.26 : 0.205,
    o = e ? 0.065 : t ? 0.125 : 0.1,
    a = e ? i * 0.96 : i * 0.6,
    r = Bi(13081421, "metal"),
    l = Bi(12155728, "metal"),
    c = Bi(14793585, "metal"),
    h = Bi(5850412, "matte"),
    d = Bi(11775392, "metal"),
    u = (T) =>
      new Zp(
        T.map(([A, _]) => new tt(A, _)),
        di(16),
      ),
    f = u([
      [0, 0],
      [i, 0],
      [i, 0.013],
      [i * 0.9, 0.018],
      [i * 0.9, 0.025],
      [i, 0.03],
      [i * 0.94, e ? s : s - 0.05],
      [a, e ? s : s - 0.025],
      [a, s],
      [0, s],
    ]),
    p = u(
      e
        ? [
            [0, 0],
            [a * 0.94, 0],
            [a * 0.94, o * 0.48],
            [a * 0.86, o * 0.72],
            [a * 0.62, o * 0.9],
            [a * 0.3, o * 0.98],
            [0, o],
          ]
        : [
            [0, 0],
            [a * 0.97, 0],
            [a * 0.97, o * 0.23],
            [a * 0.8, o * 0.5],
            [a * 0.48, o * 0.77],
            [0, o],
          ],
    ),
    m = new xt(i * 0.915, i * 0.915, 0.005, di(16)),
    y = new xt(i * 1.025, i * 1.025, 0.006, di(16)),
    g = new xt(i * 0.37, i * 0.37, 0.002, di(12)),
    b = new xt(a * 1.035, a * 1.035, 0.004, di(16)),
    S = new pe();
  for (let T = 0; T < 3; T++) {
    const A = new pe();
    A.name = "standard-cartridge";
    const _ = new le(f, r),
      C = new le(p, l);
    C.position.y = s;
    const R = new le(m, h);
    R.position.y = 0.0215;
    const L = new le(y, c);
    L.position.y = 0.003;
    const N = new le(g, d);
    N.position.y = -0.001;
    const D = new le(b, c);
    ((D.position.y = s - 0.002),
      A.add(_, C, R, L, N, D),
      A.position.set(
        (T - 1) * i * 2.8,
        T === 1 ? 0.025 : 0,
        T === 1 ? -0.035 : 0,
      ),
      (A.rotation.z = (1 - T) * 0.1),
      S.add(A));
  }
  S.rotation.set(-0.22, -0.3, -0.12);
  const M = new pe();
  M.add(S);
  const x = new $t();
  return ((x.position.y = s + o), M.add(x), qn(M, x, null, null));
}
function $V(n) {
  const e = new pe(),
    t = n === E.AMMO_SHELL;
  for (let s = 0; s < 3; s++) {
    const o = (s - 1) * 0.075,
      a = (s % 2) * 0.04;
    (e.add(
      Qt(0.025, 0.15, t ? 10566704 : 12884557, o, 0, a),
      Qt(0.028, 0.02, 15056233, o, 0, a + 0.083),
    ),
      e.add(Qt(0.025, 0.025, 15846254, o, 0, a - 0.045)),
      t
        ? e.add(Qt(0.024, 0.008, 7548966, o, 0, a - 0.079))
        : e.add(
            Iy(0.014, 0.022, 0.04, 12473397, o, 0, a - 0.093),
            Il(0.014, 0.06, 14842952, o, 0, a - 0.143),
          ));
  }
  n === E.AMMO_338_HE && (e.scale.z = 1.28);
  const i = new $t();
  return (e.add(i), qn(e, i, null, null));
}
function R0(n) {
  const e = qV(n);
  return ((e.group.userData.skinItem = Ti(n) || n), e);
}
