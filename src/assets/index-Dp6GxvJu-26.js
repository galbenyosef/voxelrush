// index-Dp6GxvJu 26 — position
// Lines 36608-36733 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function wF(n, e, t, i, s, o, a, r) {
  var N, D;
  const l = Ti(s) || s,
    c = ck[l],
    h = i.children[0];
  if (!c || !h) return !1;
  (i.parent !== n && n.add(i),
    (N = h.userData).wristPose ??
      (N.wristPose = { p: h.position.clone(), r: h.rotation.clone() }),
    h.position.set(0, 0, 0),
    h.rotation.set(0, 0, 0));
  const d = o.aiming ? 1 : 0,
    u = o.reload >= 0,
    f = u ? 0.35 : d,
    p = r - 1.15;
  ro.set(
    fi.lerp(c.ready[0], c.aim[0], f),
    fi.lerp(c.ready[1], c.aim[1], f) + p,
    fi.lerp(c.ready[2], c.aim[2], f),
  );
  const m = lF(l, o.reload);
  let y = fi.clamp(o.pitch, -1.1, 1.1) * (d ? 1 : 0.5) - (1 - f) * c.drop;
  const g = c.pivot[1] + p,
    b = ro.y - g,
    S = ro.z - c.pivot[2],
    M = o.pitch * (d ? 0.9 : 0.4),
    x = Math.cos(M),
    T = Math.sin(M);
  ((ro.y = g + b * x + S * T),
    (ro.z = c.pivot[2] + S * x - b * T),
    (ro.x += m.px * 0.6),
    (ro.y += m.py * 0.6),
    (ro.z += o.shot * 0.05),
    (y += o.shot * 0.08),
    o.prone &&
      (ro.set(c.aim[0], 1.9, -0.28), (y = Math.PI / 2 + o.pitch * 0.5)));
  const A = !o.aiming && !u ? o1(o.inspect ?? -1) : 0;
  (A &&
    ((ro.x += (0.02 - ro.x) * A),
    (ro.y += (1.49 + p - ro.y) * A),
    (ro.z += (-0.43 - ro.z) * A),
    (y += (-0.1 - y) * A)),
    i.position.lerp(ro, a),
    fT.setFromEuler(
      yF.set(
        y + m.rx * 0.7,
        m.ry * 0.7 +
          (d || o.prone ? 0 : 0.22) +
          A * (0.8 + Math.sin((o.inspect ?? 0) * 1.8) * 0.3),
        m.rz * 0.8 - 0.42 * A,
        "YXZ",
      ),
    ),
    i.quaternion.slerp(fT, a),
    i.scale.setScalar(1));
  const _ = vF(h),
    C = _.mag;
  if (C) {
    (D = C.userData).rest ??
      (D.rest = { y: C.position.y, z: C.position.z, rx: C.rotation.x });
    const H = C.userData.rest;
    ((C.position.y = H.y + m.magY),
      (C.position.z = H.z + m.magZ),
      (C.rotation.x = H.rx + m.magRx),
      (C.rotation.z = 0),
      (C.visible = m.magVisible));
  }
  ((e.position.x += (-0.31 - e.position.x) * a),
    (e.position.z += (-0.16 - e.position.z) * a),
    i.updateMatrix());
  const R = _.gripR,
    L = _.gripL;
  if ((R && wg(t, bg(R, n, hk), dk, a), L && c.twoHand)) {
    const H = (I, O) => {
        if (I === "off") return O.set(-0.3, 0.95 + p, -0.05);
        const F =
          I === "mag" || I === "port" || I === "port-in"
            ? _.magGrip
            : I === "bolt"
              ? _.bolt
              : I === "slide"
                ? _.slide
                : L;
        return bg(F ?? L, n, O);
      },
      G = H(u ? m.from : "grip-l", mF);
    (u && m.w > 0 && G.lerp(H(m.to, gF), m.w),
      wg(e, G, l === E.GLOCK ? bF : uk, a));
  }
  return !0;
}
function MF(n, e, t) {
  if (((n.position.x = -0.39), (n.position.z = 0), t.parent === e)) return;
  e.add(t);
  const i = t.children[0],
    s = i == null ? void 0 : i.userData.wristPose;
  (s && (i.position.copy(s.p), i.rotation.copy(s.r)),
    t.quaternion.identity(),
    t.scale.setScalar(1));
}
function v5(n, e, t, i, s, o, a, r) {
  var d;
  const l = i.children[0];
  if (!l) return !1;
  (i.parent !== n && n.add(i),
    (d = l.userData).wristPose ??
      (d.wristPose = { p: l.position.clone(), r: l.rotation.clone() }),
    l.position.set(0, 0, 0),
    l.rotation.set(0, 0, 0),
    i.position.lerp(s, a),
    i.quaternion.slerp(o, a),
    i.scale.setScalar(1),
    (e.position.x += ((r ? -0.31 : -0.39) - e.position.x) * a),
    (e.position.z += ((r ? -0.16 : 0) - e.position.z) * a),
    i.updateMatrix());
  const c = i.getObjectByName("grip-r"),
    h = i.getObjectByName("grip-l");
  return (
    c && wg(t, bg(c, n, hk), dk, a),
    h && r && wg(e, bg(h, n, new k()), uk, a),
    !0
  );
}
const fk = 0.3,
  wT = new WeakMap(),
  MT = new WeakMap();
