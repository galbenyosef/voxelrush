// index-BeUlFSPp 58 — position
// Lines 48159-48404 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const Mp = 0.325,
  Cb = 0.3,
  lu = {
    aim: [0.2, 1.47, -0.26],
    ready: [0.14, 1.34, -0.34],
    drop: 0.55,
    pivot: [0.2, 1.47, 0],
    twoHand: !0,
  },
  EO = {
    [w.AK47]: lu,
    [w.AWP]: { ...lu, aim: [0.2, 1.48, -0.22] },
    [w.SHOTGUN]: lu,
    [w.GLOCK]: {
      aim: [0.05, 1.5, -0.62],
      ready: [0.1, 1.2, -0.36],
      drop: 0.75,
      pivot: [0.1, 1.5, 0],
      twoHand: !0,
    },
    [w.DEAGLE]: {
      aim: [0.05, 1.5, -0.6],
      ready: [0.1, 1.2, -0.36],
      drop: 0.75,
      pivot: [0.1, 1.5, 0],
      twoHand: !0,
    },
    [w.M4A1]: lu,
    [w.VECTOR]: { ...lu, aim: [0.19, 1.47, -0.32], ready: [0.13, 1.34, -0.38] },
    [w.RPG]: {
      aim: [0.32, 1.62, -0.24],
      ready: [0.32, 1.58, -0.2],
      drop: 0.12,
      pivot: [0.32, 1.6, 0],
      twoHand: !0,
    },
    [w.GRENADE_LAUNCHER]: lu,
    [w.MINIGUN]: {
      aim: [0.2, 1.14, -0.24],
      ready: [0.2, 1.1, -0.22],
      drop: 0.12,
      pivot: [0.2, 1.14, 0],
      twoHand: !0,
    },
  },
  eY = (s) => (ai(s) || s) in EO,
  Lb = new Rt(),
  Y_ = new hi(),
  ko = new k(),
  AO = new k(),
  Z2 = new k(),
  j_ = new k(),
  $l = new k(),
  cu = new k(),
  hu = new k(),
  Q2 = new k(),
  uh = new k(),
  Ib = new k(),
  J2 = new k(),
  X_ = new k(),
  Z_ = new Rt(),
  Q_ = new hi(),
  tY = new k(),
  iY = new k(),
  sY = new pi(0, 0, 0, "YXZ");
function Mv(s, e, t) {
  Lb.identity();
  for (let i = s; i && i !== e; i = i.parent)
    (i.updateMatrix(), Lb.premultiply(i.matrix));
  return t.setFromMatrixPosition(Lb);
}
function Sv(s, e, t, i) {
  (Z2.copy(s.position), $l.subVectors(e, Z2));
  const n = ni.clamp($l.length(), 0.08, Mp + Cb - 0.002);
  $l.normalize();
  const o = ni.clamp((Mp * Mp + n * n - Cb * Cb) / (2 * Mp * n), -1, 1);
  (cu.copy(t).addScaledVector($l, -t.dot($l)),
    cu.lengthSq() < 1e-6 && cu.set(0, -1, 0).addScaledVector($l, $l.y),
    cu.normalize(),
    hu
      .copy($l)
      .multiplyScalar(o)
      .addScaledVector(cu, Math.sqrt(1 - o * o)),
    X_.copy(Z2).addScaledVector(hu, Mp),
    j_.copy(Z2).addScaledVector($l, n),
    Q2.subVectors(j_, X_).normalize(),
    J2.copy(hu).negate(),
    uh.copy(Q2).addScaledVector(hu, -Q2.dot(hu)),
    uh.lengthSq() < 1e-6 && uh.copy(cu).negate(),
    uh.normalize().negate(),
    Ib.crossVectors(J2, uh).normalize(),
    uh.crossVectors(Ib, J2),
    Z_.makeBasis(Ib, J2, uh),
    Q_.setFromRotationMatrix(Z_),
    s.quaternion.slerp(Q_, i));
  let a = eR.get(s);
  if (
    (a === void 0 && eR.set(s, (a = s.getObjectByName("joint") ?? null)), a)
  ) {
    const r = Math.acos(ni.clamp(Q2.dot(hu), -1, 1));
    a.rotation.x += (r - a.rotation.x) * i;
  }
}
const J_ = new WeakMap(),
  eR = new WeakMap();
function nY(s) {
  let e = J_.get(s);
  return (
    e ||
      J_.set(
        s,
        (e = {
          gripR: s.getObjectByName("grip-r"),
          gripL: s.getObjectByName("grip-l"),
          mag: s.getObjectByName("weapon-magazine"),
          magGrip: s.getObjectByName("mag-grip"),
          bolt: s.getObjectByName("weapon-bolt"),
          slide: s.getObjectByName("weapon-slide"),
        }),
      ),
    e
  );
}
const TO = new k(0.5, -0.55, 0.45),
  xO = new k(-0.55, -0.6, 0.15),
  oY = new k(-0.5, -0.6, 0.3);
function aY(s, e, t, i, n, o, a, r) {
  const l = ai(n) || n,
    c = EO[l],
    h = i.children[0];
  if (!c || !h) return !1;
  (i.parent !== s && s.add(i),
    (h.userData.wristPose ??= { p: h.position.clone(), r: h.rotation.clone() }),
    h.position.set(0, 0, 0),
    h.rotation.set(0, 0, 0));
  const d = o.aiming ? 1 : 0,
    u = o.reload >= 0,
    f = u ? 0.35 : d,
    p = r - 1.15;
  ko.set(
    ni.lerp(c.ready[0], c.aim[0], f),
    ni.lerp(c.ready[1], c.aim[1], f) + p,
    ni.lerp(c.ready[2], c.aim[2], f),
  );
  const m = jK(l, o.reload);
  let g = ni.clamp(o.pitch, -1.1, 1.1) * (d ? 1 : 0.5) - (1 - f) * c.drop;
  const y = c.pivot[1] + p,
    b = ko.y - y,
    S = ko.z - c.pivot[2],
    M = o.pitch * (d ? 0.9 : 0.4),
    E = Math.cos(M),
    A = Math.sin(M);
  ((ko.y = y + b * E + S * A),
    (ko.z = c.pivot[2] + S * E - b * A),
    (ko.x += m.px * 0.6),
    (ko.y += m.py * 0.6),
    (ko.z += o.shot * 0.05),
    (g += o.shot * 0.08),
    o.prone &&
      (ko.set(c.aim[0], 1.9, -0.28), (g = Math.PI / 2 + o.pitch * 0.5)));
  const T = !o.aiming && !u ? jm(o.inspect ?? -1) : 0;
  (T &&
    ((ko.x += (0.02 - ko.x) * T),
    (ko.y += (1.49 + p - ko.y) * T),
    (ko.z += (-0.43 - ko.z) * T),
    (g += (-0.1 - g) * T)),
    i.position.lerp(ko, a),
    Y_.setFromEuler(
      sY.set(
        g + m.rx * 0.7,
        m.ry * 0.7 +
          (d || o.prone ? 0 : 0.22) +
          T * (0.8 + Math.sin((o.inspect ?? 0) * 1.8) * 0.3),
        m.rz * 0.8 - 0.42 * T,
        "YXZ",
      ),
    ),
    i.quaternion.slerp(Y_, a),
    i.scale.setScalar(1));
  const x = nY(h),
    R = x.mag;
  if (R) {
    R.userData.rest ??= { y: R.position.y, z: R.position.z, rx: R.rotation.x };
    const P = R.userData.rest;
    ((R.position.y = P.y + m.magY),
      (R.position.z = P.z + m.magZ),
      (R.rotation.x = P.rx + m.magRx),
      (R.rotation.z = 0),
      (R.visible = m.magVisible));
  }
  ((e.position.x += (-0.31 - e.position.x) * a),
    (e.position.z += (-0.16 - e.position.z) * a),
    i.updateMatrix());
  const _ = x.gripR,
    C = x.gripL;
  if ((_ && Sv(t, Mv(_, s, AO), TO, a), C && c.twoHand)) {
    const P = (B, H) => {
        if (B === "off") return H.set(-0.3, 0.95 + p, -0.05);
        const D =
          B === "mag" || B === "port" || B === "port-in"
            ? x.magGrip
            : B === "bolt"
              ? x.bolt
              : B === "slide"
                ? x.slide
                : C;
        return Mv(D ?? C, s, H);
      },
      O = P(u ? m.from : "grip-l", tY);
    (u && m.w > 0 && O.lerp(P(m.to, iY), m.w), Sv(e, O, bO(l) ? oY : xO, a));
  }
  return !0;
}
function rY(s, e, t) {
  if (((s.position.x = -0.39), (s.position.z = 0), t.parent === e)) return;
  e.add(t);
  const i = t.children[0],
    n = i?.userData.wristPose;
  (n && (i.position.copy(n.p), i.rotation.copy(n.r)),
    t.quaternion.identity(),
    t.scale.setScalar(1));
}
function Pb(s, e, t, i, n, o, a, r) {
  const l = i.children[0];
  if (!l) return !1;
  (i.parent !== s && s.add(i),
    (l.userData.wristPose ??= { p: l.position.clone(), r: l.rotation.clone() }),
    l.position.set(0, 0, 0),
    l.rotation.set(0, 0, 0),
    i.position.lerp(n, a),
    i.quaternion.slerp(o, a),
    i.scale.setScalar(1),
    (e.position.x += ((r ? -0.31 : -0.39) - e.position.x) * a),
    (e.position.z += ((r ? -0.16 : 0) - e.position.z) * a),
    i.updateMatrix());
  const c = i.getObjectByName("grip-r"),
    h = i.getObjectByName("grip-l");
  return (
    c && Sv(t, Mv(c, s, AO), TO, a),
    h && r && Sv(e, Mv(h, s, new k()), xO, a),
    !0
  );
}
const _O = 0.3,
  tR = new WeakMap(),
  iR = new WeakMap();
