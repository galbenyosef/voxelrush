// assets__index-Dp6GxvJu 221 — position
// Lines 122209-122489 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
const JI = new k(0.95, -0.92, 0.05),
  XM = new k(),
  ZM = new k(),
  WR = new bt(),
  Qie = new Jt(),
  Xh = {
    empty: { hip: [0.27, -0.22, -0.46], roll: -0.75, pivotAlong: 0.85 },
    block: {
      hip: [0.26, -0.22, -0.5],
      roll: -0.4,
      pivotAlong: 0.85,
      size: 0.18,
      at: [-0.035, 0.115, -0.085],
      rot: [0.12, Math.PI / 4, 0.02],
    },
    item: {
      hip: [0.26, -0.23, -0.5],
      roll: -0.45,
      pivotAlong: 0.85,
      scale: 0.45,
      at: [-0.01, 0.085, -0.045],
      rot: [0.05, -1.05, 0.32],
    },
    stem: { at: [-0.004, 0.058, -0.022], rot: [-0.18, Math.PI / 4, 0.1] },
    tool: { roll: -Math.PI / 2, pivotAlong: 0.8 },
  },
  Jie = new Set([
    "torch",
    "plant",
    "lantern",
    "chain",
    "fence",
    "gate",
    "door",
    "candle",
    "hanging",
    "ladder",
    "rail",
    "wire",
    "web",
    "litter",
  ]);
function eP(n, e, t) {
  return (n.updateMatrix(), t.set(0, 0, e).applyMatrix4(n.matrix));
}
function ene(n, e) {
  const t = n <= 0 ? "empty" : n < 256 && de[n] ? "block" : "item",
    i = new pe();
  i.name = `fp-hold-${t}`;
  const s = ZI();
  i.add(s);
  const o = Xh[t],
    a = o.hip;
  if (
    (QI(s, XM.set(0, 0, 0), ZM.copy(JI).sub(XM.set(...a)), o.roll),
    t === "block")
  ) {
    const r = Xh.block,
      l = d4(e, n, r.size);
    l.name = "fp-held-block";
    const c = Jie.has(de[n].shape),
      h = c ? Xh.stem.at : r.at,
      d = c ? Xh.stem.rot : r.rot;
    (l.position.set(...h),
      l.rotation.set(...d, "YXZ"),
      (l.userData.restPos = l.position.clone()),
      (l.userData.restQuat = l.quaternion.clone()),
      i.add(l));
  } else if (t === "item") {
    const r = Xh.item,
      l = p1(n, r.scale);
    ((l.name = "fp-held-item"),
      l.position.set(...r.at),
      l.rotation.set(...r.rot, "YXZ"),
      (l.frustumCulled = !1),
      (l.userData.restPos = l.position.clone()),
      (l.userData.restQuat = l.quaternion.clone()),
      i.add(l));
  }
  return (
    i.traverse((r) => {
      r.frustumCulled = !1;
    }),
    { kind: t, root: i, arm: s, hip: a, pivot: eP(s, o.pivotAlong, new k()) }
  );
}
function tne(n, e, t) {
  t.identity();
  for (let i = e; i && i !== n; i = i.parent)
    (i.updateMatrix(), t.premultiply(i.matrix));
  return t;
}
function ine(n, e, t = 1.02) {
  const i = n.getObjectByName("fp-bare-arm"),
    s = i ?? ZI(t);
  i || n.add(s);
  const o = n.getObjectByName("hand-r"),
    a = new k();
  let r = Xh.tool.roll;
  if (o) (tne(n, o, WR).decompose(a, Qie, ZM), o.userData.along && (r = -0.25));
  else {
    ((s.visible = !1), n.updateMatrixWorld(!0));
    const c = new gn();
    (n.traverseVisible((f) => {
      f.isMesh && c.expandByObject(f, !0);
    }),
      (s.visible = !0));
    const h = WR.copy(n.matrixWorld).invert(),
      d = c.min.clone().applyMatrix4(h),
      u = c.max.clone().applyMatrix4(h);
    (a.set(
      (d.x + u.x) / 2 + 0.01,
      Math.min(d.y, u.y) + 0.035,
      (d.z + u.z) / 2 + 0.03,
    ),
      (r = -0.45));
  }
  const l = ZM.copy(JI).sub(XM.set(e[0], e[1], e[2]));
  return (
    QI(s, a, l, r),
    s.traverse((c) => {
      c.frustumCulled = !1;
    }),
    { arm: s, pivot: eP(s, Xh.tool.pivotAlong, new k()) }
  );
}
const Yb = new Jt(),
  nne = new k(1, 0, 0),
  d2 = new k();
function sne(n, e, t) {
  ((n.position.x += t.x),
    (n.position.y += t.y),
    (n.position.z += t.z),
    e &&
      (d2.copy(e).applyQuaternion(t.q),
      d2.subVectors(e, d2).applyQuaternion(n.quaternion),
      n.position.add(d2)),
    n.quaternion.multiply(t.q));
  const i =
    n.getObjectByName("fp-held-block") ?? n.getObjectByName("fp-held-item");
  i != null &&
    i.userData.restQuat &&
    (Yb.setFromAxisAngle(nne, t.flick),
    i.position.copy(i.userData.restPos).applyQuaternion(Yb),
    i.quaternion.copy(Yb).multiply(i.userData.restQuat));
}
function one(n) {
  return n === E.WELDER || n === E.FISHING_ROD
    ? 0.74
    : n === E.COMBAT_KNIFE
      ? 0.8
      : n === E.DRILL_METAL ||
          n === E.DRILL_DIAMOND ||
          n === E.DRILL_TITANIUM ||
          n === E.DRILL_COMPOSITE ||
          n === E.DRILL_LASER ||
          n === E.LUNAR_DRILL ||
          n === E.FLASHLIGHT
        ? 0.86
        : 1.02;
}
const VR = new Set([
    E.DRILL_METAL,
    E.DRILL_DIAMOND,
    E.DRILL_TITANIUM,
    E.DRILL_COMPOSITE,
    E.DRILL_LASER,
    E.LUNAR_DRILL,
    E.CHAINSAW_BASIC,
    E.CHAINSAW_PRO,
    E.CHAINSAW_INDUSTRIAL,
    E.WELDER,
  ]),
  j2 = 2;
function $R(n) {
  n.traverse((e) => e.layers.set(j2));
}
function ane(n) {
  return (
    n === E.MILITARY_MEDKIT ||
    wo(n) ||
    n === E.AMMO_9MM ||
    n === E.AMMO_762 ||
    n === E.AMMO_338 ||
    n === E.AMMO_762_HE ||
    n === E.AMMO_338_HE ||
    n === E.AMMO_SHELL ||
    n === E.AMMO_SHELL_HE ||
    !!Cn[n] ||
    n === E.AXE ||
    n === E.COMBAT_KNIFE ||
    n === E.WELDER ||
    n === E.DRILL_METAL ||
    n === E.DRILL_DIAMOND ||
    n === E.DRILL_TITANIUM ||
    n === E.DRILL_COMPOSITE ||
    n === E.DRILL_LASER ||
    n === E.LUNAR_DRILL ||
    n === E.SPACE_ROCKET ||
    n === E.CHAINSAW_BASIC ||
    n === E.CHAINSAW_PRO ||
    n === E.CHAINSAW_INDUSTRIAL ||
    n === E.WHEAT_SEEDS ||
    n === E.FERTILIZER ||
    n === E.FISHING_ROD ||
    xa(n) ||
    n === E.DETONATOR ||
    n === E.FLASHLIGHT ||
    n === E.RADIO_MODULE ||
    !!aa(n)
  );
}
function qR(n) {
  return n === E.CHAINSAW_BASIC ||
    n === E.CHAINSAW_PRO ||
    n === E.CHAINSAW_INDUSTRIAL
    ? [0.3, -0.22, -0.6]
    : n === E.WELDER
      ? [0.3, -0.2, -0.5]
      : n === E.AXE
        ? [0.3, -0.17, -0.6]
        : n === E.COMBAT_KNIFE
          ? [0.24, -0.2, -0.36]
          : n === E.FISHING_ROD
            ? [0.32, -0.22, -0.66]
            : [0.3, -0.19, -0.52];
}
const rne = [
    [0, 0, 0, 0, 0, 0, 0],
    [0.22, 0.07, 0.06, 0.03, 0.3, -0.3, -0.2],
    [0.5, -0.2, 0.01, -0.1, -0.3, 0.7, 0.4],
    [0.7, -0.18, -0.01, -0.06, -0.25, 0.6, 0.3],
    [1, 0, 0, 0, 0, 0, 0],
  ],
  lne = [
    [0, 0, 0, 0, 0, 0, 0],
    [0.22, -0.12, 0.06, 0.02, 0.25, 0.5, 0.3],
    [0.5, 0.1, 0.01, -0.1, -0.3, -0.5, -0.3],
    [0.7, 0.09, -0.01, -0.06, -0.22, -0.4, -0.25],
    [1, 0, 0, 0, 0, 0, 0],
  ],
  cne = [
    [0, 0, 0, 0, 0, 0, 0],
    [0.25, 0.01, -0.01, 0.08, 0.12, 0, 0],
    [0.48, -0.05, 0.03, -0.21, -0.28, 0.1, 0],
    [0.7, -0.04, 0.02, -0.16, -0.22, 0.07, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ],
  hne = [
    [0, 0, 0, 0, 0, 0, 0],
    [0.35, 0.02, 0.03, 0.03, 0.2, -0.05, -0.08],
    [1, 0.05, 0.1, 0.05, 0.72, -0.15, -0.25],
  ],
  KR = 0.3,
  dne = [
    [0, 0, 0, 0, 0, 0, 0],
    [0.38, 0.04, 0.1, 0.08, 0.6, 0.08, -0.16],
    [0.52, 0.04, 0.1, 0.07, 0.66, 0.08, -0.18],
    [0.68, -0.02, -0.02, -0.12, -0.5, -0.04, 0.05],
    [0.82, -0.01, -0.03, -0.08, -0.42, -0.02, 0.03],
    [1, 0, 0, 0, 0, 0, 0],
  ],
  une = 0.66,
  fne = 0.62,
  pne = [
    [0, 0, 0, 0, 0, 0, 0],
    [0.22, -0.01, 0.07, 0.07, 0.7, 0.04, 0.1],
    [0.45, 0, 0.05, 0.05, 0.55, 0.02, 0.06],
    [1, 0, 0, 0, 0, 0, 0],
  ],
  mne = 0.55,
  QM = (n) => n * n * (3 - 2 * n);
function jb(n, e, t) {
  let i = 0;
  for (; i < n.length - 2 && e > n[i + 1][0];) i++;
  const s = n[i],
    o = n[i + 1],
    a = QM(Ne((e - s[0]) / Math.max(1e-6, o[0] - s[0]), 0, 1));
  for (let r = 0; r < 6; r++) t[r] = s[r + 1] + (o[r + 1] - s[r + 1]) * a;
  return t;
}
