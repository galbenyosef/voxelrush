// index-BeUlFSPp 116 — add
// Lines 65431-65742 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function bJ() {
  const s = new re(),
    e = [];
  s.add(y7(0.9, 0.85, 4.2, 5991242, 0, 1.05, 0.1));
  for (const n of [-0.4, 0.62]) {
    s.add(
      se(0.58, 0.13, 0.65, 2634024, 0, 1.13, n),
      se(0.58, 0.48, 0.12, 2634024, 0, 1.4, n + 0.3),
    );
    for (const o of [-0.38, 0.38])
      s.add(se(0.08, 0.23, 0.94, 4609082, o, 1.55, n));
  }
  (s.add(se(7, 0.14, 1.25, 5003838, 0, 1.15, -0.525)),
    s.add(se(2.5, 0.12, 0.55, 5003838, 0, 1.35, 1.875)),
    s.add(se(0.12, 1, 0.65, 5003838, 0, 1.8, 1.945)));
  const t = Hi(0.32, 0.5, 3950132, 0, 1.05, -2.15);
  if ((s.add(t), wt(1))) {
    s.add(Hi(0.42, 0.55, 4476986, 0, 1.05, -1.85));
    const n = se(0.62, 0.38, 0.06, 5404808, 0, 1.7, -0.83);
    (s.add(n),
      e.push(n),
      s.add(se(3.4, 0.1, 1.1, 4609082, -1.9, 1.28, -0.4)),
      s.add(se(3.4, 0.1, 1.1, 4609082, 1.9, 1.28, -0.4)));
  }
  if (wt(2)) {
    for (const n of [-0.42, 0.42])
      s.add(se(0.12, 0.12, 0.5, 2237983, n, 1.2, -1.5));
    for (const n of [-1.6, 1.6])
      (s.add(se(0.16, 0.24, 0.3, 3093801, n, 1.05, -0.35)),
        s.add(Hi(0.16, 0.9, 3818034, n, 0.9, -0.35)));
    (s.add(se(0.04, 0.04, 0.5, 11580584, -3.2, 1.16, -1)),
      s.add(se(6.9, 0.08, 0.3, 4477242, 0, 1.14, 0.2)),
      s.add(se(2.4, 0.08, 0.25, 4477242, 0, 1.34, 2.35)));
    for (const [n, o] of [
      [-1.1, -0.7],
      [1.1, -0.7],
    ])
      s.add(se(0.14, 0.5, 0.14, 2830118, n, 0.6, o));
  }
  const i = new re();
  if (
    (i.position.set(0, 1.05, -2.45),
    i.add(se(0.12, 2, 0.06, 2236962)),
    i.add(se(2, 0.12, 0.06, 2236962)),
    wt(1))
  ) {
    const n = new Q(new fa(0.18, 0.4, ci(8)), wn(2830630));
    ((n.rotation.x = -Math.PI / 2), (n.position.z = -0.18), i.add(n));
  }
  s.add(i);
  for (const [n, o] of [
    [-1.1, -0.7],
    [1.1, -0.7],
    [0, 2],
  ]) {
    const a = new Q(new Tt(0.28, 0.28, 0.2, ci(10)), wn(1842204));
    ((a.rotation.z = Math.PI / 2),
      a.position.set(n, 0.3, o),
      (a.castShadow = !0),
      s.add(a));
  }
  return (
    Fn(s, "red", -3.52, 1.2, -0.6),
    Fn(s, "green", 3.52, 1.2, -0.6),
    Fn(s, "strobe", -3.5, 1.24, -0.42, 0.05),
    Fn(s, "strobe", 3.5, 1.24, -0.42, 0.05),
    Fn(s, "white", 0, 1.42, 2.3, 0.05),
    Fn(s, "beacon", 0, 2.33, 2, 0.06),
    Fn(s, "beacon", 0, 0.6, 0.3, 0.06),
    { group: s, props: [i], fpvHide: e }
  );
}
function wJ(s = 1) {
  const e = new re(),
    t = wn(15910187),
    i = wn(1118740),
    n = new Q(new Tt(0.38 * s, 0.38 * s, 0.045 * s, 18), t);
  ((n.rotation.z = Math.PI / 2), e.add(n));
  const o = new Q(new Tt(0.085 * s, 0.085 * s, 0.06 * s, 12), i);
  ((o.rotation.z = Math.PI / 2), (o.position.x = 0.035 * s), e.add(o));
  for (let a = 0; a < 3; a++) {
    const r = se(0.055 * s, 0.42 * s, 0.11 * s, 1118740);
    (r.position.set(0.045 * s, 0.2 * s, 0),
      (r.rotation.x = (a * Math.PI * 2) / 3),
      e.add(r));
  }
  return e;
}
function MJ() {
  const s = new re(),
    e = new Q(new ws(1, ci(18), ci(12)), wn(2107181));
  if (
    (e.scale.set(2.35, 1.42, 5.75),
    (e.position.y = 0),
    s.add(e),
    s.add(se(2.6, 0.34, 8.6, 1317149, 0, -1.12, 0.45)),
    s.add(se(2.48, 0.12, 9, 3752778, 0, 1.13, 0.2)),
    wt(1))
  ) {
    for (const r of [-1, 1])
      for (let l = -3; l <= 3; l++)
        s.add(
          se(
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
        s.add(se(0.12, 0.14, 0.42, 12970484, r * 2.31, 0.45, l * 1.55 - 0.2));
  }
  (s.add(y7(1.4, 1, 1.15, 3029055, 0, 0, -5.08)),
    wt(1) &&
      (s.add(se(0.16, 1.15, 1.5, 3160641, 0, -0.05, 5.3)),
      s.add(se(3.25, 0.14, 1.35, 3160641, 0, -0.15, 5.05)),
      s.add(se(0.18, 1.25, 1.15, 3160641, 0, 0.28, 5.08)),
      s.add(se(0.22, 0.72, 1.4, 2370610, -2.55, -0.25, 3.95)),
      s.add(se(0.22, 0.72, 1.4, 2370610, 2.55, -0.25, 3.95))));
  const t = new re();
  (t.position.set(0, 1.18, 0.65),
    t.add(se(1.62, 1.45, 2.15, 2634296, 0, 0.55, 0)),
    t.add(se(1.35, 0.2, 1.55, 4016207, 0, 1.32, -0.12)),
    wt(1) &&
      (t.add(se(1.28, 0.3, 0.12, 1515556, 0, 0.78, -1.08)),
      t.add(se(1, 0.12, 0.08, 11065055, 0, 0.82, -1.15)),
      t.add(se(0.12, 1, 0.12, 1383200, -0.42, 1.95, 0.15)),
      t.add(se(0.12, 1.18, 0.12, 1383200, 0.42, 2.04, 0.15))),
    wt(2) &&
      (t.add(se(1.85, 0.12, 0.24, 1778472, 0, 0.1, 0.95)),
      t.add(se(0.06, 0.45, 0.06, 12113887, -0.58, 2.15, 0.05)),
      t.add(se(0.06, 0.4, 0.06, 12113887, 0.58, 2.2, 0.05)),
      t.add(se(0.9, 0.06, 0.18, 10135984, 0, 2.4, 0.1))),
    s.add(t));
  const i = new re();
  (i.position.set(0, 1.52, 2.75),
    i.add(se(1.55, 0.18, 2.15, 1448993)),
    i.add(se(1.25, 0.08, 1.8, 658703, 0, 0.12, 0)));
  for (const r of [-0.62, 0.62])
    i.add(se(0.08, 0.06, 1.8, 14794028, r, 0.18, 0));
  const n = se(1.48, 0.12, 0.88, 5332582, 0, 0.23, 0.45);
  (i.add(n), s.add(i));
  const o = wJ(0.95);
  ((o.rotation.y = Math.PI / 2), o.position.set(2.38, 0.36, -0.35), s.add(o));
  const a = new re();
  (a.position.set(0, -0.05, 5.62), a.add(Hi(0.18, 0.35, 10136498, 0, 0, 0.05)));
  for (let r = 0; r < 5; r++) {
    const l = se(0.1, 0.85, 0.12, 11912394, 0, 0, -0.35);
    ((l.rotation.z = (r * Math.PI * 2) / 5), a.add(l));
  }
  return (s.add(a), { group: s, props: [a], fpvHide: [s], subHatch: n });
}
function SJ() {
  const s = new re();
  (s.add(se(11, 2.6, 40, 5923435, 0, 1.6, 0)),
    s.add(se(12, 0.5, 42, 7304829, 0, 3.15, 0)),
    s.add(se(2.2, 4, 6, 4805210, 4.8, 5.4, 4)),
    s.add(se(2.4, 0.4, 1.2, 3949644, 4.8, 7.6, 2)));
  for (let i = -18; i <= 18; i += 4)
    s.add(se(0.5, 0.06, 2.2, 14211288, -1.5, 3.44, i));
  if (
    (wt(1) &&
      (s.add(se(0.4, 1.2, 40, 4344402, -6, 4, 0)),
      s.add(se(0.4, 1.2, 40, 4344402, 6, 4, 0)),
      s.add(se(2, 2.6, 1, 3949644, 4.8, 8.9, 4)),
      s.add(se(4, 0.3, 6, 6581364, -3.5, 3.5, -14))),
    wt(2))
  ) {
    s.add(se(1.6, 0.12, 1.6, 12766420, 4.8, 10.3, 4));
    for (let i = -6; i <= 6; i += 4)
      s.add(se(11.6, 0.05, 0.14, 2764596, -0.2, 3.45, i + 12));
    for (let i = -19; i <= 19; i += 6)
      (s.add(se(0.25, 0.25, 0.25, 14733946, -5.8, 3.6, i)),
        s.add(se(0.25, 0.25, 0.25, 14733946, 5.8, 3.6, i)));
    for (const i of [-12, 0, 12]) s.add(se(1.4, 1, 3, 5331298, -5.9, 2.2, i));
    s.add(se(2.6, 0.5, 2.6, 3949644, 4.8, 3.6, -8));
  }
  const e = new re();
  (e.position.set(-3.9, 3.5, 10.5), e.add(se(3, 0.24, 6.4, 3160387, 0, 0, 0)));
  for (const i of [-0.85, -0.28, 0.28, 0.85])
    for (const n of [-2.2, -0.75, 0.75, 2.2])
      e.add(Hi(0.16, 0.08, 1448736, i, 0.13, n));
  const t = se(3.15, 0.12, 1.2, 5858157, 0, 0.12, -2.7);
  return (e.add(t), s.add(e), { group: s, turret: e, props: [t] });
}
function EJ() {
  const s = new re(),
    e = se(1, 0.05, 0.09, 2236966, 0, 0.12, 0);
  e.rotation.y = Math.PI / 4;
  const t = se(1, 0.05, 0.09, 2236966, 0, 0.12, 0);
  if (
    ((t.rotation.y = -Math.PI / 4),
    s.add(e, t),
    s.add(se(0.3, 0.14, 0.34, 3027512, 0, 0.16, 0)),
    s.add(se(0.12, 0.1, 0.06, 1118484, 0, 0.2, -0.2)),
    wt(1))
  ) {
    (s.add(se(0.26, 0.06, 0.22, 1777187, 0, 0.25, 0.02)),
      s.add(se(0.16, 0.1, 0.1, 3874848, 0, 0.12, 0.16)));
    for (const [n, o] of [
      [-0.36, -0.36],
      [0.36, -0.36],
      [-0.36, 0.36],
      [0.36, 0.36],
    ])
      s.add(se(0.09, 0.07, 0.09, 3488063, n, 0.17, o));
  }
  if (wt(2)) {
    (s.add(se(0.02, 0.16, 0.02, 9278105, 0, 0.34, 0.12)),
      s.add(Hi(0.035, 0.05, 723982, 0, 0.2, -0.24)));
    for (const [n, o] of [
      [-0.36, -0.36],
      [0.36, -0.36],
      [-0.36, 0.36],
      [0.36, 0.36],
    ])
      s.add(se(0.025, 0.11, 0.025, 2237738, n, 0.06, o));
  }
  const i = [];
  for (const [n, o] of [
    [-0.36, -0.36],
    [0.36, -0.36],
    [-0.36, 0.36],
    [0.36, 0.36],
  ]) {
    const a = new re();
    (a.position.set(n, 0.22, o),
      a.add(se(0.42, 0.015, 0.05, 8947856)),
      wt(1) && a.add(se(0.05, 0.015, 0.42, 8947856)),
      s.add(a),
      i.push(a));
  }
  return { group: s, props: i };
}
const AJ = 55,
  TJ = Math.PI / 4;
function xJ(s, e, t, i) {
  const n = new re(),
    o = 32,
    a = [];
  for (let f = 0; f <= o; f++) {
    const p = -t + 2 * t * (f / o),
      m = Math.sin(p),
      g = -Math.cos(p);
    a.push(m * s, 0, g * s, m * e, 0, g * e);
  }
  const r = [];
  for (let f = 0; f < o; f++) {
    const p = f * 2,
      m = p + 1,
      g = p + 2,
      y = p + 3;
    r.push(p, g, m, m, g, y);
  }
  const l = new oi();
  (l.setAttribute("position", new Dt(a, 3)), l.setIndex(r));
  const c = new Q(
    l,
    new Zt({
      color: i,
      transparent: !0,
      opacity: 0.13,
      side: Mi,
      depthWrite: !1,
    }),
  );
  ((c.frustumCulled = !1), n.add(c));
  const h = [0, 0, 0];
  for (let f = 0; f <= o; f++) {
    const p = -t + 2 * t * (f / o);
    h.push(Math.sin(p) * e, 0, -Math.cos(p) * e);
  }
  h.push(0, 0, 0);
  const d = new oi();
  d.setAttribute("position", new Dt(h, 3));
  const u = new md(
    d,
    new Zo({ color: i, transparent: !0, opacity: 0.55, depthWrite: !1 }),
  );
  return ((u.frustumCulled = !1), n.add(u), n);
}
function _J() {
  const s = JQ(),
    e = xJ(1.6, AJ, TJ, 16734780);
  return (
    (e.position.y = 0.12),
    (e.visible = !1),
    s.group.add(e),
    { ...s, props: [e] }
  );
}
const RJ = new Set([L.TANK, L.BTR_TURRET, L.HIMARS, L.PATRIOT, L.BOAT]),
  kJ = {
    [L.TANK]: new k(-1.15, 1.25, 1.5),
    [L.BTR_TURRET]: new k(0.95, 1.55, 2.1),
    [L.HIMARS]: new k(0.85, 2.5, -1.2),
    [L.PATRIOT]: new k(0.85, 2.5, -1.2),
  };
function CJ(s) {
  const e = new re();
  e.name = "sprung-body";
  const t = (i) =>
    i.userData.motion === "wheel-set" ||
    !!i.userData.track ||
    i.userData.unsprung;
  for (const i of [...s.group.children]) t(i) || e.add(i);
  (s.group.add(e), (s.sprung = e));
}
