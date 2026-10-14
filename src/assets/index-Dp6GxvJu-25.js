// index-Dp6GxvJu 25 — math
// Lines 36259-36607 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const cF = (n) => ({
    lift: Cf(n / 0.2) * (1 - Cf((n - 0.8) / 0.2)),
    back: Cf((n - 0.2) / 0.25) * (1 - Cf((n - 0.55) / 0.25)),
  }),
  hT = new bt(),
  hF = new bt(),
  $u = new bt(),
  sm = new k(),
  dT = new k(),
  om = new Jt(),
  uT = new Jt();
new k();
const am = new k(),
  qu = new k(),
  dF = new k(),
  p5 = new k(),
  uF = new Jt().setFromEuler(new hi(0, 0, Math.PI / 2));
class fF {
  constructor(e, t, i = !0) {
    w(this, "plan");
    w(this, "right");
    w(this, "left");
    w(this, "anchors", new Map());
    w(this, "mag");
    w(this, "magRest", new k());
    w(this, "magRestRot", 0);
    w(this, "bolt");
    w(this, "boltRest", new k());
    w(this, "pump");
    w(this, "slide");
    w(this, "shell", null);
    w(this, "emptyAtReload", !1);
    w(this, "lastReload", -1);
    w(this, "ejectNow", !1);
    w(this, "ejected", !1);
    ((this.vm = e),
      (this.base = t),
      (this.plan = Sw[t] ?? VS),
      e.group.traverse((o) => {
        o.name && this.anchors.set(o.name, o);
      }));
    const s = eF(t === ITEM.GLOCK);
    ((this.right = this.anchors.has("grip-r") ? s.right : null),
      (this.left = i && this.anchors.has("grip-l") ? s.left : null));
    for (const o of [this.right, this.left])
      o && e.group.add(o.hand, o.forearm);
    if (
      ((this.mag = e.mag),
      this.mag &&
        (this.magRest.copy(this.mag.position),
        (this.magRestRot = this.mag.rotation.x)),
      (this.bolt = this.anchors.get("weapon-bolt") ?? null),
      this.bolt && this.boltRest.copy(this.bolt.position),
      (this.pump = this.anchors.get("shotgun-pump") ?? null),
      (this.slide = e.slide),
      this.plan.shells && this.left)
    ) {
      const o = new le(
        new xt(0.013, 0.013, 0.06, 8),
        new Us({ color: 10566704, shininess: 20 }),
      );
      ((o.rotation.x = Math.PI / 2),
        o.position.set(0.01, 0.005, -0.02),
        (o.frustumCulled = !1),
        this.left.hand.add(o),
        (this.shell = o));
    }
  }
  gunOffset(e, t) {
    if (((t.rx = t.ry = t.rz = t.py = t.px = 0), e < 0)) return t;
    const [i, s, o] = kc(this.plan.tilt, e);
    return (
      (t.rx = fi.lerp(i[1], s[1], o)),
      (t.ry = fi.lerp(i[2], s[2], o)),
      (t.rz = fi.lerp(i[3], s[3], o)),
      (t.py = fi.lerp(i[4], s[4], o)),
      (t.px = fi.lerp(i[5] ?? 0, s[5] ?? 0, o)),
      t
    );
  }
  rel(e, t) {
    t.identity();
    for (let i = e; i && i !== this.vm.group; i = i.parent)
      (i.updateMatrix(), t.premultiply(i.matrix));
    return t;
  }
  target(e, t, i, s) {
    const o = this.anchors.get("grip-l") ?? this.anchors.get("grip-r");
    if (e === "off") {
      (t.set(-0.26, -1.02, -0.24).applyMatrix4(s),
        this.rel(o, hT).decompose(qu, i, p5));
      return;
    }
    const a = {
        mag: "mag-grip",
        port: "mag-grip",
        "port-in": "mag-grip",
        bolt: "weapon-bolt",
        slide: "weapon-slide",
      },
      r = this.anchors.get(a[e] ?? e) ?? o;
    (this.rel(r, hT).decompose(t, i, p5),
      e === "bolt"
        ? (i.multiply(uF), t.add(qu.set(0.034, 0.01, 0)))
        : e === "slide"
          ? (this.rel(o, hF).decompose(qu, i, p5),
            t.add(dF.set(-0.02, 0.03, 0.05)))
          : e === "port-in"
            ? t.add(qu.set(0, 0.02, 0.035))
            : e === "port" && t.add(qu.set(0, -0.015, -0.01)));
  }
  handPose(e, t, i, s, o, a) {
    if (!e || i < 0) {
      this.target(t, s, o, a);
      return;
    }
    const [r, l, c] = kc(e, i);
    (this.target(r[1], s, o, a),
      c > 0 &&
        r !== l &&
        (this.target(l[1], dT, uT, a), s.lerp(dT, c), o.slerp(uT, c)));
  }
  pose(e) {
    const t = this.plan,
      i = e.reload;
    if (
      (i >= 0 && this.lastReload < 0 && (this.emptyAtReload = e.empty),
      (this.lastReload = i),
      (this.ejectNow = !1),
      this.mag)
    ) {
      let a = 0,
        r = 0,
        l = 0,
        c = !0;
      if (i >= 0 && t.mag) {
        const [h, d, u] = kc(t.mag, i);
        ((a = fi.lerp(h[1], d[1], u)),
          (r = fi.lerp(h[2], d[2], u)),
          (l = fi.lerp(h[3], d[3], u)),
          (c = !!h[4]),
          t.roundAppears !== void 0 &&
            i < t.roundAppears &&
            this.emptyAtReload &&
            (c = !1));
      } else t.roundAppears !== void 0 && e.empty && (c = !1);
      (this.mag.position.set(
        this.magRest.x,
        this.magRest.y + a,
        this.magRest.z + r,
      ),
        (this.mag.rotation.x = this.magRestRot + l),
        (this.mag.visible = c));
    }
    let s = e.cycle;
    if (
      (i >= 0 &&
        t.boltCycle &&
        (s =
          i < t.boltCycle[0] || i > t.boltCycle[1]
            ? -1
            : (i - t.boltCycle[0]) / (t.boltCycle[1] - t.boltCycle[0])),
      this.bolt)
    )
      if (this.base === ITEM.AWP) {
        const a = s >= 0 ? cF(s) : { lift: 0, back: 0 };
        ((this.bolt.rotation.z = a.lift * 1.05),
          (this.bolt.position.z = this.boltRest.z + a.back * 0.1),
          s >= 0.42 &&
            !this.ejected &&
            ((this.ejected = !0), (this.ejectNow = !0)),
          s < 0 && (this.ejected = !1));
      } else {
        let a = Math.sin(Math.min(1, e.kick) * Math.PI) * 0.045;
        if (i >= 0 && t.bolt) {
          const [r, l, c] = kc(t.bolt, i);
          a = Math.max(a, fi.lerp(r[1], l[1], c));
        }
        this.bolt.position.z = this.boltRest.z + a;
      }
    if (this.pump) {
      let a = s >= 0 ? Math.sin(Math.min(1, s) * Math.PI) * 0.1 : 0;
      if (i >= 0 && t.pump) {
        const [r, l, c] = kc(t.pump, i);
        a = fi.lerp(r[1], l[1], c);
      }
      (s >= 0.45 &&
        !this.ejected &&
        ((this.ejected = !0), (this.ejectNow = !0)),
        s < 0 && (this.ejected = !1),
        (this.pump.position.z = a));
    }
    if (this.slide) {
      const a =
        i < 0 ? e.empty : this.emptyAtReload && i < (t.slideRelease ?? 1);
      this.slide.position.z =
        -0.06 + (a ? 0.045 : Math.sin(Math.min(1, e.kick) * Math.PI) * 0.045);
    }
    if (this.shell) {
      let a = !1;
      if (i >= 0)
        for (const [r, l] of t.shells ?? []) i >= r && i <= l && (a = !0);
      this.shell.visible = a;
    }
    const o = this.vm.group;
    if ((o.updateMatrix(), $u.copy(o.matrix).invert(), this.right)) {
      const a =
          i >= 0
            ? t.right
            : s >= 0 && this.base === ITEM.AWP
              ? [
                  [0, "grip-r"],
                  [0.12, "bolt-knob"],
                  [0.88, "bolt-knob"],
                  [1, "grip-r"],
                ]
              : void 0,
        r = i >= 0 ? i : s;
      (this.handPose(a, "grip-r", a ? r : -1, sm, om, $u),
        am
          .lerpVectors(this.right.elbowHip, this.right.elbowAds, e.ads)
          .applyMatrix4($u),
        cT(this.right, sm.clone(), om.clone(), am));
    }
    this.left &&
      (this.handPose(i >= 0 ? t.left : void 0, "grip-l", i, sm, om, $u),
      am
        .lerpVectors(this.left.elbowHip, this.left.elbowAds, e.ads)
        .applyMatrix4($u),
      cT(this.left, sm.clone(), om.clone(), am));
  }
}
const Ku = 0.325,
  m5 = 0.3,
  rm = {
    aim: [0.2, 1.47, -0.26],
    ready: [0.14, 1.34, -0.34],
    drop: 0.55,
    pivot: [0.2, 1.47, 0],
    twoHand: !0,
  },
  ck = {
    [ITEM.AK47]: rm,
    [ITEM.AWP]: { ...rm, aim: [0.2, 1.48, -0.22] },
    [ITEM.SHOTGUN]: rm,
    [ITEM.GLOCK]: {
      aim: [0.05, 1.5, -0.62],
      ready: [0.1, 1.2, -0.36],
      drop: 0.75,
      pivot: [0.1, 1.5, 0],
      twoHand: !0,
    },
    [ITEM.RPG]: {
      aim: [0.32, 1.62, -0.24],
      ready: [0.32, 1.58, -0.2],
      drop: 0.12,
      pivot: [0.32, 1.6, 0],
      twoHand: !0,
    },
    [ITEM.GRENADE_LAUNCHER]: rm,
    [ITEM.MINIGUN]: {
      aim: [0.2, 1.14, -0.24],
      ready: [0.2, 1.1, -0.22],
      drop: 0.12,
      pivot: [0.2, 1.14, 0],
      twoHand: !0,
    },
  },
  pF = (n) => (Ti(n) || n) in ck,
  g5 = new bt(),
  fT = new Jt(),
  ro = new k(),
  hk = new k(),
  lm = new k(),
  pT = new k(),
  el = new k(),
  J0 = new k(),
  ed = new k(),
  cm = new k(),
  Eh = new k(),
  y5 = new k(),
  hm = new k(),
  mT = new k(),
  gT = new bt(),
  yT = new Jt(),
  mF = new k(),
  gF = new k(),
  yF = new hi(0, 0, 0, "YXZ");
function bg(n, e, t) {
  g5.identity();
  for (let i = n; i && i !== e; i = i.parent)
    (i.updateMatrix(), g5.premultiply(i.matrix));
  return t.setFromMatrixPosition(g5);
}
function wg(n, e, t, i) {
  (lm.copy(n.position), el.subVectors(e, lm));
  const s = fi.clamp(el.length(), 0.08, Ku + m5 - 0.002);
  el.normalize();
  const o = fi.clamp((Ku * Ku + s * s - m5 * m5) / (2 * Ku * s), -1, 1);
  (J0.copy(t).addScaledVector(el, -t.dot(el)),
    J0.lengthSq() < 1e-6 && J0.set(0, -1, 0).addScaledVector(el, el.y),
    J0.normalize(),
    ed
      .copy(el)
      .multiplyScalar(o)
      .addScaledVector(J0, Math.sqrt(1 - o * o)),
    mT.copy(lm).addScaledVector(ed, Ku),
    pT.copy(lm).addScaledVector(el, s),
    cm.subVectors(pT, mT).normalize(),
    hm.copy(ed).negate(),
    Eh.copy(cm).addScaledVector(ed, -cm.dot(ed)),
    Eh.lengthSq() < 1e-6 && Eh.copy(J0).negate(),
    Eh.normalize().negate(),
    y5.crossVectors(hm, Eh).normalize(),
    Eh.crossVectors(y5, hm),
    gT.makeBasis(y5, hm, Eh),
    yT.setFromRotationMatrix(gT),
    n.quaternion.slerp(yT, i));
  let a = bT.get(n);
  if (
    (a === void 0 && bT.set(n, (a = n.getObjectByName("joint") ?? null)), a)
  ) {
    const r = Math.acos(fi.clamp(cm.dot(ed), -1, 1));
    a.rotation.x += (r - a.rotation.x) * i;
  }
}
const vT = new WeakMap(),
  bT = new WeakMap();
function vF(n) {
  let e = vT.get(n);
  return (
    e ||
      vT.set(
        n,
        (e = {
          gripR: n.getObjectByName("grip-r"),
          gripL: n.getObjectByName("grip-l"),
          mag: n.getObjectByName("weapon-magazine"),
          magGrip: n.getObjectByName("mag-grip"),
          bolt: n.getObjectByName("weapon-bolt"),
          slide: n.getObjectByName("weapon-slide"),
        }),
      ),
    e
  );
}
const dk = new k(0.5, -0.55, 0.45),
  uk = new k(-0.55, -0.6, 0.15),
  bF = new k(-0.5, -0.6, 0.3);
