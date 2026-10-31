// index-BeUlFSPp 92 — add
// Lines 58073-58406 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function nT(s, e, t = 0.3) {
  if (e === v.CHAIN) {
    const l = [],
      c = [],
      h = [],
      d = [],
      u = le[v.CHAIN].tex[1],
      f = u % Ni,
      p = Math.floor(u / Ni);
    for (const g of CO(1)) {
      const y = l.length / 3;
      (g.points.forEach((b, S) => {
        (l.push(...b.map((M) => (M - 0.5) * t)),
          c.push(...g.normal),
          h.push(
            (f + 0.02 + (S >> 1) * 0.96) / Ni,
            1 - (p + 0.02 + (S % 2) * 0.96) / Ni,
          ));
      }),
        d.push(y, y + 1, y + 2, y + 2, y + 1, y + 3));
    }
    const m = new oi();
    return (
      m.setAttribute("position", new Dt(l, 3)),
      m.setAttribute("normal", new Dt(c, 3)),
      m.setAttribute("uv", new Dt(h, 2)),
      m.setIndex(d),
      new Q(m, new Pi({ map: s }))
    );
  }
  if (e === v.TORCH || e === v.RTORCH) return DX(e, t);
  if (e === v.MINE_AP || e === v.MINE_AT) {
    const l = new re();
    for (const c of Of(e)) {
      const [h, d, u, f, p, m] = c.box,
        g = le.find((y) => y.tex[0] === c.tile)?.color ?? 6648140;
      l.add(
        me(
          (f - h) * t,
          (p - d) * t,
          (m - u) * t,
          g,
          ((h + f) / 2 - 0.5) * t,
          ((d + p) / 2) * t,
          ((u + m) / 2 - 0.5) * t,
        ),
      );
    }
    return l;
  }
  const i = le[e];
  if (i && (i.shape !== "cube" || e === v.CACTUS) && !i.liquid) {
    const l =
        i.shape === "furniture" ||
        i.shape === "stair" ||
        i.shape === "door" ||
        i.shape === "gate" ||
        i.shape === "bed"
          ? 2
          : 0,
      c = $O(e, l);
    if (c) {
      const h = new Q(
          c,
          new Pi({ map: s, vertexColors: !0, alphaTest: 0.5, side: Mi }),
        ),
        d = c.boundingBox,
        u = Math.max(1, d.max.y - d.min.y);
      (h.scale.setScalar(t / u),
        u > 1 && (h.position.y = (-((d.min.y + d.max.y) / 2) * t) / u),
        (h.frustumCulled = !1),
        (h.userData.sharedGeometry = !0));
      const f = new re();
      return (f.add(h), f);
    }
  }
  const n = new kt(t, t, t),
    o = n.getAttribute("uv"),
    a = i
      ? [i.tex[1], i.tex[1], i.tex[0], i.tex[2], i.tex[1], i.tex[1]]
      : [0, 0, 0, 0, 0, 0];
  if (e === v.FURNACE)
    for (let l = 0; l < 6; l++) {
      const c = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1],
      ][l];
      a[l] = CI(2, c[0], c[1], c[2]);
    }
  for (let l = 0; l < 6; l++) {
    const c = a[l] % Ni,
      h = Math.floor(a[l] / Ni);
    for (let d = 0; d < 4; d++) {
      const u = l * 4 + d,
        f = o.getX(u),
        p = o.getY(u);
      o.setXY(
        u,
        (c + 0.02 + f * 0.96) / Ni,
        1 - (h + 1 - (0.02 + p * 0.96)) / Ni,
      );
    }
  }
  const r = new Q(n, new Pi({ map: s, alphaTest: 0.5 }));
  return ((r.frustumCulled = !1), r);
}
const QO = [];
function HX(s) {
  const e = s.getObjectByName("fp-turn"),
    t = e?.userData.fpTurn;
  e && t && e.rotation.set(t[0], t[1], t[2]);
}
function oT(s) {
  QO.push(s);
}
function BX() {
  for (const s of QO) s();
}
function zX() {
  const s = new re(),
    e = new re();
  ((e.name = "minigun-barrels"),
    s.add(
      Gt(0.12, 0.29, 3490121, 0, 0, 0.03),
      me(0.18, 0.035, 0.3, 7438474, 0, 0.12, 0.02),
    ));
  for (let n = 0; n < 6; n++) {
    const o = (n * Math.PI) / 3,
      a = Math.cos(o) * 0.068,
      r = Math.sin(o) * 0.068;
    e.add(
      Gt(0.022, 0.57, 6517114, a, r, -0.38),
      Gt(0.015, 0.012, 1053718, a, r, -0.672),
    );
  }
  (e.add(
    Gt(0.103, 0.038, 3358275, 0, 0, -0.19),
    Gt(0.103, 0.036, 9608610, 0, 0, -0.57),
    Gt(0.026, 0.57, 2370866, 0, 0, -0.37),
  ),
    s.add(e));
  for (const n of [-0.115, 0.115])
    s.add(me(0.025, 0.14, 0.03, 5859951, n, 0.17, 0.02));
  (s.add(
    me(0.26, 0.028, 0.04, 2107691, 0, 0.24, 0.02),
    me(0.06, 0.15, 0.07, 2436398, 0.02, -0.13, 0.13),
  ),
    s.add(
      me(0.05, 0.03, 0.03, 2107691, -0.1, -0.02, -0.12),
      me(0.03, 0.12, 0.035, 2436398, -0.14, -0.07, -0.12),
    ),
    _i(s, "grip-r", 0.02, -0.13, 0.13, 0.1),
    _i(s, "grip-l", -0.14, -0.06, -0.12, 0, 0, -Math.PI / 2),
    _i(s, "eject-port", 0.09, -0.06, -0.02));
  const t = new re();
  ((t.name = "weapon-magazine"),
    t.add(
      Gt(0.13, 0.22, 4939853, -0.15, -0.18, 0.01),
      Gt(0.105, 0.012, 7569514, -0.15, -0.18, -0.107),
    ),
    _i(t, "mag-grip", -0.15, -0.33, 0.01),
    s.add(t));
  for (let n = 0; n < 7; n++)
    s.add(
      Gt(
        0.012,
        0.075,
        13214563,
        -0.12 + n * 0.019,
        -0.085 - Math.sin((n / 6) * Math.PI) * 0.035,
        -0.12,
      ),
    );
  const i = new Xt();
  return (i.position.set(0, 0, -0.69), s.add(i), Hs(s, i, t, null, e));
}
function TR(s) {
  const e = new re();
  (e.add(
    me(0.065, 0.075, 0.3, 3490378, 0, 0, 0.025),
    Gt(0.022, 0.52, 7766666, 0, 0.02, -0.35),
    Gt(0.016, 0.43, 3161411, 0, -0.026, -0.31),
  ),
    e.add(
      Gt(0.015, 0.006, 1053717, 0, 0.02, -0.614),
      me(0.009, 0.025, 0.014, 13870690, 0, 0.049, -0.57),
    ));
  const t = me(0.06, 0.095, 0.23, 8673077, 0, -0.018, 0.28, "matte");
  ((t.rotation.x = -0.14),
    e.add(t, me(0.064, 0.1, 0.022, 1844520, 0, -0.03, 0.4)));
  const i = me(0.044, 0.11, 0.058, 9790273, 0, -0.075, 0.13, "matte");
  ((i.rotation.x = -0.28),
    e.add(i),
    e.add(
      me(0.046, 0.013, 0.09, 6648440, 0, -0.095, 0.057),
      me(0.012, 0.038, 0.012, 1383713, 0, -0.065, 0.057),
    ),
    _i(e, "grip-r", 0, -0.078, 0.13, -0.2),
    _i(e, "eject-port", 0.035, 0.02, -0.02));
  const n = new re();
  ((n.name = "shotgun-pump"),
    n.add(me(0.079, 0.064, 0.18, 9659716, 0, -0.025, -0.3, "matte")),
    _i(n, "grip-l", 0, -0.03, -0.3),
    Ll(n, 8, 0.02, 0.083, 0.068, 0.004, 4075558, 0, -0.025, -0.37),
    e.add(n));
  const o = new re();
  ((o.name = "weapon-magazine"),
    o.add(me(0.055, 0.065, 0.075, 2636346, 0, -0.07, -0.02)),
    _i(o, "mag-grip", 0, -0.13, -0.04),
    e.add(o));
  for (let r = 0; r < 4; r++)
    e.add(
      Gt(0.012, 0.056, 10764850, -0.042, 0.025, 0.11 - r * 0.035),
      Gt(0.013, 0.012, 14003803, -0.042, 0.025, 0.14 - r * 0.035),
    );
  s?.light && e.add(J0(0.045, -0.03, -0.42));
  const a = new Xt();
  return (a.position.set(0, 0.02, -0.625), e.add(a), Hs(e, a, o, null));
}
function FX(s) {
  const e = s === w.AMMO_50AE,
    t = s === w.AMMO_556,
    i = s === w.AMMO_9MM || e,
    n = s === w.AMMO_338,
    o = e ? 0.043 : t ? 0.025 : n ? 0.035 : i ? 0.033 : 0.029,
    a = e ? 0.15 : t ? 0.19 : i ? 0.13 : n ? 0.26 : 0.205,
    r = e ? 0.075 : t ? 0.09 : i ? 0.065 : n ? 0.125 : 0.1,
    l = i ? o * 0.96 : o * 0.6,
    c = Ti(13081421, "metal"),
    h = Ti(12155728, "metal"),
    d = Ti(14793585, "metal"),
    u = Ti(5850412, "matte"),
    f = Ti(11775392, "metal"),
    p = (x) =>
      new Yf(
        x.map(([R, _]) => new ct(R, _)),
        ci(16),
      ),
    m = p([
      [0, 0],
      [o, 0],
      [o, 0.013],
      [o * 0.9, 0.018],
      [o * 0.9, 0.025],
      [o, 0.03],
      [o * 0.94, i ? a : a - 0.05],
      [l, i ? a : a - 0.025],
      [l, a],
      [0, a],
    ]),
    g = p(
      i
        ? [
            [0, 0],
            [l * 0.94, 0],
            [l * 0.94, r * 0.48],
            [l * 0.86, r * 0.72],
            [l * 0.62, r * 0.9],
            [l * 0.3, r * 0.98],
            [0, r],
          ]
        : [
            [0, 0],
            [l * 0.97, 0],
            [l * 0.97, r * 0.23],
            [l * 0.8, r * 0.5],
            [l * 0.48, r * 0.77],
            [0, r],
          ],
    ),
    y = new Tt(o * 0.915, o * 0.915, 0.005, ci(16)),
    b = new Tt(o * 1.025, o * 1.025, 0.006, ci(16)),
    S = new Tt(o * 0.37, o * 0.37, 0.002, ci(12)),
    M = new Tt(l * 1.035, l * 1.035, 0.004, ci(16)),
    E = new re();
  for (let x = 0; x < 3; x++) {
    const R = new re();
    R.name = "standard-cartridge";
    const _ = new Q(m, c),
      C = new Q(g, h);
    C.position.y = a;
    const P = new Q(y, u);
    P.position.y = 0.0215;
    const O = new Q(b, d);
    O.position.y = 0.003;
    const B = new Q(S, f);
    B.position.y = -0.001;
    const H = new Q(M, d);
    ((H.position.y = a - 0.002),
      R.add(_, C, P, O, B, H),
      R.position.set(
        (x - 1) * o * 2.8,
        x === 1 ? 0.025 : 0,
        x === 1 ? -0.035 : 0,
      ),
      (R.rotation.z = (1 - x) * 0.1),
      E.add(R));
  }
  E.rotation.set(-0.22, -0.3, -0.12);
  const A = new re();
  A.add(E);
  const T = new Xt();
  return ((T.position.y = a + r), A.add(T), Hs(A, T, null, null));
}
function UX(s) {
  const e = new re(),
    t = s === w.AMMO_SHELL;
  for (let n = 0; n < 3; n++) {
    const o = (n - 1) * 0.075,
      a = (n % 2) * 0.04;
    (e.add(
      Gt(0.025, 0.15, t ? 10566704 : 12884557, o, 0, a),
      Gt(0.028, 0.02, 15056233, o, 0, a + 0.083),
    ),
      e.add(Gt(0.025, 0.025, 15846254, o, 0, a - 0.045)),
      t
        ? e.add(Gt(0.024, 0.008, 7548966, o, 0, a - 0.079))
        : e.add(
            Xm(0.014, 0.022, 0.04, 12473397, o, 0, a - 0.093),
            Sc(0.014, 0.06, 14842952, o, 0, a - 0.143),
          ));
  }
  s === w.AMMO_338_HE && (e.scale.z = 1.28);
  const i = new Xt();
  return (e.add(i), Hs(e, i, null, null));
}
function Pd(s) {
  const e = GX(s);
  return ((e.group.userData.skinItem = ai(s) || s), e);
}
