// index-Dp6GxvJu 95 — add
// Lines 58029-58340 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function RK() {
  const n = new pe(),
    e = [];
  n.add(mL(0.9, 0.85, 4.2, 5991242, 0, 1.05, 0.1));
  for (const s of [-0.4, 0.62]) {
    n.add(
      ce(0.58, 0.13, 0.65, 2634024, 0, 1.13, s),
      ce(0.58, 0.48, 0.12, 2634024, 0, 1.4, s + 0.3),
    );
    for (const o of [-0.38, 0.38])
      n.add(ce(0.08, 0.23, 0.94, 4609082, o, 1.55, s));
  }
  (n.add(ce(7, 0.14, 1.25, 5003838, 0, 1.15, -0.525)),
    n.add(ce(2.5, 0.12, 0.55, 5003838, 0, 1.35, 1.875)),
    n.add(ce(0.12, 1, 0.65, 5003838, 0, 1.8, 1.945)));
  const t = Ci(0.32, 0.5, 3950132, 0, 1.05, -2.15);
  if ((n.add(t), yt(1))) {
    n.add(Ci(0.42, 0.55, 4476986, 0, 1.05, -1.85));
    const s = ce(0.62, 0.38, 0.06, 5404808, 0, 1.7, -0.83);
    (n.add(s),
      e.push(s),
      n.add(ce(3.4, 0.1, 1.1, 4609082, -1.9, 1.28, -0.4)),
      n.add(ce(3.4, 0.1, 1.1, 4609082, 1.9, 1.28, -0.4)));
  }
  if (yt(2)) {
    for (const s of [-0.42, 0.42])
      n.add(ce(0.12, 0.12, 0.5, 2237983, s, 1.2, -1.5));
    for (const s of [-1.6, 1.6])
      (n.add(ce(0.16, 0.24, 0.3, 3093801, s, 1.05, -0.35)),
        n.add(Ci(0.16, 0.9, 3818034, s, 0.9, -0.35)));
    (n.add(ce(0.04, 0.04, 0.5, 11580584, -3.2, 1.16, -1)),
      n.add(ce(6.9, 0.08, 0.3, 4477242, 0, 1.14, 0.2)),
      n.add(ce(2.4, 0.08, 0.25, 4477242, 0, 1.34, 2.35)));
    for (const [s, o] of [
      [-1.1, -0.7],
      [1.1, -0.7],
    ])
      n.add(ce(0.14, 0.5, 0.14, 2830118, s, 0.6, o));
  }
  const i = new pe();
  if (
    (i.position.set(0, 1.05, -2.45),
    i.add(ce(0.12, 2, 0.06, 2236962)),
    i.add(ce(2, 0.12, 0.06, 2236962)),
    yt(1))
  ) {
    const s = new le(new ma(0.18, 0.4, di(8)), ss(2830630));
    ((s.rotation.x = -Math.PI / 2), (s.position.z = -0.18), i.add(s));
  }
  n.add(i);
  for (const [s, o] of [
    [-1.1, -0.7],
    [1.1, -0.7],
    [0, 2],
  ]) {
    const a = new le(new xt(0.28, 0.28, 0.2, di(10)), ss(1842204));
    ((a.rotation.z = Math.PI / 2),
      a.position.set(s, 0.3, o),
      (a.castShadow = !0),
      n.add(a));
  }
  return (
    Es(n, "red", -3.52, 1.2, -0.6),
    Es(n, "green", 3.52, 1.2, -0.6),
    Es(n, "strobe", -3.5, 1.24, -0.42, 0.05),
    Es(n, "strobe", 3.5, 1.24, -0.42, 0.05),
    Es(n, "white", 0, 1.42, 2.3, 0.05),
    Es(n, "beacon", 0, 2.33, 2, 0.06),
    Es(n, "beacon", 0, 0.6, 0.3, 0.06),
    { group: n, props: [i], fpvHide: e }
  );
}
function CK(n = 1) {
  const e = new pe(),
    t = ss(15910187),
    i = ss(1118740),
    s = new le(new xt(0.38 * n, 0.38 * n, 0.045 * n, 18), t);
  ((s.rotation.z = Math.PI / 2), e.add(s));
  const o = new le(new xt(0.085 * n, 0.085 * n, 0.06 * n, 12), i);
  ((o.rotation.z = Math.PI / 2), (o.position.x = 0.035 * n), e.add(o));
  for (let a = 0; a < 3; a++) {
    const r = ce(0.055 * n, 0.42 * n, 0.11 * n, 1118740);
    (r.position.set(0.045 * n, 0.2 * n, 0),
      (r.rotation.x = (a * Math.PI * 2) / 3),
      e.add(r));
  }
  return e;
}
function kK() {
  const n = new pe(),
    e = new le(new mn(1, di(18), di(12)), ss(2107181));
  if (
    (e.scale.set(2.35, 1.42, 5.75),
    (e.position.y = 0),
    n.add(e),
    n.add(ce(2.6, 0.34, 8.6, 1317149, 0, -1.12, 0.45)),
    n.add(ce(2.48, 0.12, 9, 3752778, 0, 1.13, 0.2)),
    yt(1))
  ) {
    for (const r of [-1, 1])
      for (let l = -3; l <= 3; l++)
        n.add(
          ce(
            0.08,
            0.52,
            1.08,
            l % 2 ? 2897211 : 2436660,
            r * 2.25,
            0.05,
            l * 1.18,
          ),
        );
    for (const r of [-1, 1])
      for (let l = -2; l <= 2; l++)
        n.add(ce(0.12, 0.14, 0.42, 12970484, r * 2.31, 0.45, l * 1.55 - 0.2));
  }
  (n.add(mL(1.4, 1, 1.15, 3029055, 0, 0, -5.08)),
    yt(1) &&
      (n.add(ce(0.16, 1.15, 1.5, 3160641, 0, -0.05, 5.3)),
      n.add(ce(3.25, 0.14, 1.35, 3160641, 0, -0.15, 5.05)),
      n.add(ce(0.18, 1.25, 1.15, 3160641, 0, 0.28, 5.08)),
      n.add(ce(0.22, 0.72, 1.4, 2370610, -2.55, -0.25, 3.95)),
      n.add(ce(0.22, 0.72, 1.4, 2370610, 2.55, -0.25, 3.95))));
  const t = new pe();
  (t.position.set(0, 1.18, 0.65),
    t.add(ce(1.62, 1.45, 2.15, 2634296, 0, 0.55, 0)),
    t.add(ce(1.35, 0.2, 1.55, 4016207, 0, 1.32, -0.12)),
    yt(1) &&
      (t.add(ce(1.28, 0.3, 0.12, 1515556, 0, 0.78, -1.08)),
      t.add(ce(1, 0.12, 0.08, 11065055, 0, 0.82, -1.15)),
      t.add(ce(0.12, 1, 0.12, 1383200, -0.42, 1.95, 0.15)),
      t.add(ce(0.12, 1.18, 0.12, 1383200, 0.42, 2.04, 0.15))),
    yt(2) &&
      (t.add(ce(1.85, 0.12, 0.24, 1778472, 0, 0.1, 0.95)),
      t.add(ce(0.06, 0.45, 0.06, 12113887, -0.58, 2.15, 0.05)),
      t.add(ce(0.06, 0.4, 0.06, 12113887, 0.58, 2.2, 0.05)),
      t.add(ce(0.9, 0.06, 0.18, 10135984, 0, 2.4, 0.1))),
    n.add(t));
  const i = new pe();
  (i.position.set(0, 1.52, 2.75),
    i.add(ce(1.55, 0.18, 2.15, 1448993)),
    i.add(ce(1.25, 0.08, 1.8, 658703, 0, 0.12, 0)));
  for (const r of [-0.62, 0.62])
    i.add(ce(0.08, 0.06, 1.8, 14794028, r, 0.18, 0));
  const s = ce(1.48, 0.12, 0.88, 5332582, 0, 0.23, 0.45);
  (i.add(s), n.add(i));
  const o = CK(0.95);
  ((o.rotation.y = Math.PI / 2), o.position.set(2.38, 0.36, -0.35), n.add(o));
  const a = new pe();
  (a.position.set(0, -0.05, 5.62), a.add(Ci(0.18, 0.35, 10136498, 0, 0, 0.05)));
  for (let r = 0; r < 5; r++) {
    const l = ce(0.1, 0.85, 0.12, 11912394, 0, 0, -0.35);
    ((l.rotation.z = (r * Math.PI * 2) / 5), a.add(l));
  }
  return (n.add(a), { group: n, props: [a], fpvHide: [n], subHatch: s });
}
function LK() {
  const n = new pe();
  (n.add(ce(11, 2.6, 40, 5923435, 0, 1.6, 0)),
    n.add(ce(12, 0.5, 42, 7304829, 0, 3.15, 0)),
    n.add(ce(2.2, 4, 6, 4805210, 4.8, 5.4, 4)),
    n.add(ce(2.4, 0.4, 1.2, 3949644, 4.8, 7.6, 2)));
  for (let i = -18; i <= 18; i += 4)
    n.add(ce(0.5, 0.06, 2.2, 14211288, -1.5, 3.44, i));
  if (
    (yt(1) &&
      (n.add(ce(0.4, 1.2, 40, 4344402, -6, 4, 0)),
      n.add(ce(0.4, 1.2, 40, 4344402, 6, 4, 0)),
      n.add(ce(2, 2.6, 1, 3949644, 4.8, 8.9, 4)),
      n.add(ce(4, 0.3, 6, 6581364, -3.5, 3.5, -14))),
    yt(2))
  ) {
    n.add(ce(1.6, 0.12, 1.6, 12766420, 4.8, 10.3, 4));
    for (let i = -6; i <= 6; i += 4)
      n.add(ce(11.6, 0.05, 0.14, 2764596, -0.2, 3.45, i + 12));
    for (let i = -19; i <= 19; i += 6)
      (n.add(ce(0.25, 0.25, 0.25, 14733946, -5.8, 3.6, i)),
        n.add(ce(0.25, 0.25, 0.25, 14733946, 5.8, 3.6, i)));
    for (const i of [-12, 0, 12]) n.add(ce(1.4, 1, 3, 5331298, -5.9, 2.2, i));
    n.add(ce(2.6, 0.5, 2.6, 3949644, 4.8, 3.6, -8));
  }
  const e = new pe();
  (e.position.set(-3.9, 3.5, 10.5), e.add(ce(3, 0.24, 6.4, 3160387, 0, 0, 0)));
  for (const i of [-0.85, -0.28, 0.28, 0.85])
    for (const s of [-2.2, -0.75, 0.75, 2.2])
      e.add(Ci(0.16, 0.08, 1448736, i, 0.13, s));
  const t = ce(3.15, 0.12, 1.2, 5858157, 0, 0.12, -2.7);
  return (e.add(t), n.add(e), { group: n, turret: e, props: [t] });
}
function IK() {
  const n = new pe(),
    e = ce(1, 0.05, 0.09, 2236966, 0, 0.12, 0);
  e.rotation.y = Math.PI / 4;
  const t = ce(1, 0.05, 0.09, 2236966, 0, 0.12, 0);
  if (
    ((t.rotation.y = -Math.PI / 4),
    n.add(e, t),
    n.add(ce(0.3, 0.14, 0.34, 3027512, 0, 0.16, 0)),
    n.add(ce(0.12, 0.1, 0.06, 1118484, 0, 0.2, -0.2)),
    yt(1))
  ) {
    (n.add(ce(0.26, 0.06, 0.22, 1777187, 0, 0.25, 0.02)),
      n.add(ce(0.16, 0.1, 0.1, 3874848, 0, 0.12, 0.16)));
    for (const [s, o] of [
      [-0.36, -0.36],
      [0.36, -0.36],
      [-0.36, 0.36],
      [0.36, 0.36],
    ])
      n.add(ce(0.09, 0.07, 0.09, 3488063, s, 0.17, o));
  }
  if (yt(2)) {
    (n.add(ce(0.02, 0.16, 0.02, 9278105, 0, 0.34, 0.12)),
      n.add(Ci(0.035, 0.05, 723982, 0, 0.2, -0.24)));
    for (const [s, o] of [
      [-0.36, -0.36],
      [0.36, -0.36],
      [-0.36, 0.36],
      [0.36, 0.36],
    ])
      n.add(ce(0.025, 0.11, 0.025, 2237738, s, 0.06, o));
  }
  const i = [];
  for (const [s, o] of [
    [-0.36, -0.36],
    [0.36, -0.36],
    [-0.36, 0.36],
    [0.36, 0.36],
  ]) {
    const a = new pe();
    (a.position.set(s, 0.22, o),
      a.add(ce(0.42, 0.015, 0.05, 8947856)),
      yt(1) && a.add(ce(0.05, 0.015, 0.42, 8947856)),
      n.add(a),
      i.push(a));
  }
  return { group: n, props: i };
}
const PK = 55,
  OK = Math.PI / 4;
function NK(n, e, t, i) {
  const s = new pe(),
    o = 32,
    a = [];
  for (let f = 0; f <= o; f++) {
    const p = -t + 2 * t * (f / o),
      m = Math.sin(p),
      y = -Math.cos(p);
    a.push(m * n, 0, y * n, m * e, 0, y * e);
  }
  const r = [];
  for (let f = 0; f < o; f++) {
    const p = f * 2,
      m = p + 1,
      y = p + 2,
      g = p + 3;
    r.push(p, y, m, m, y, g);
  }
  const l = new ci();
  (l.setAttribute("position", new It(a, 3)), l.setIndex(r));
  const c = new le(
    l,
    new qt({
      color: i,
      transparent: !0,
      opacity: 0.13,
      side: Ai,
      depthWrite: !1,
    }),
  );
  ((c.frustumCulled = !1), s.add(c));
  const h = [0, 0, 0];
  for (let f = 0; f <= o; f++) {
    const p = -t + 2 * t * (f / o);
    h.push(Math.sin(p) * e, 0, -Math.cos(p) * e);
  }
  h.push(0, 0, 0);
  const d = new ci();
  d.setAttribute("position", new It(h, 3));
  const u = new Kc(
    d,
    new Eo({ color: i, transparent: !0, opacity: 0.55, depthWrite: !1 }),
  );
  return ((u.frustumCulled = !1), s.add(u), s);
}
function DK() {
  const n = lK(),
    e = NK(1.6, PK, OK, 16734780);
  return (
    (e.position.y = 0.12),
    (e.visible = !1),
    n.group.add(e),
    { ...n, props: [e] }
  );
}
const BK = new Set([VEHICLE_KIND.TANK, VEHICLE_KIND.BTR_TURRET, VEHICLE_KIND.HIMARS, VEHICLE_KIND.PATRIOT, VEHICLE_KIND.BOAT]),
  HK = {
    [VEHICLE_KIND.TANK]: new k(-1.15, 1.25, 1.5),
    [VEHICLE_KIND.BTR_TURRET]: new k(0.95, 1.55, 2.1),
    [VEHICLE_KIND.HIMARS]: new k(0.85, 2.5, -1.2),
    [VEHICLE_KIND.PATRIOT]: new k(0.85, 2.5, -1.2),
  };
function zK(n) {
  const e = new pe();
  e.name = "sprung-body";
  const t = (i) =>
    i.userData.motion === "wheel-set" ||
    !!i.userData.track ||
    i.userData.unsprung;
  for (const i of [...n.group.children]) t(i) || e.add(i);
  (n.group.add(e), (n.sprung = e));
}
