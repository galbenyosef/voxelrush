// index-BeUlFSPp 57 — math
// Lines 47846-48158 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class JK {
  constructor(e, t, i = !0) {
    ((this.vm = e),
      (this.base = t),
      (this.plan = wv[t] ?? UA),
      e.group.traverse((o) => {
        o.name && this.anchors.set(o.name, o);
      }));
    const n = DK(bO(t));
    ((this.right = this.anchors.has("grip-r") ? n.right : null),
      (this.left = i && this.anchors.has("grip-l") ? n.left : null));
    for (const o of [this.right, this.left])
      o && e.group.add(o.hand, o.forearm);
    if (
      ((this.mag = e.mag),
      this.mag &&
        (this.magRest.copy(this.mag.position),
        (this.magRestRot = this.mag.rotation.x)),
      (this.bolt = this.anchors.get("weapon-bolt") ?? null),
      this.bolt && this.boltRest.copy(this.bolt.position),
      (this.charge = this.anchors.get("weapon-charge") ?? null),
      this.charge && (this.chargeRest = this.charge.position.z),
      (this.hammer = this.anchors.get("weapon-hammer") ?? null),
      this.hammer && (this.hammerRest = this.hammer.rotation.x),
      (this.trigger = this.anchors.get("weapon-trigger") ?? null),
      this.trigger && (this.triggerRest = this.trigger.rotation.x),
      (this.pump = this.anchors.get("shotgun-pump") ?? null),
      (this.slide = e.slide),
      (this.slideRest = t === w.GLOCK ? -0.06 : (this.slide?.position.z ?? 0)),
      (this.slideStroke = t === w.DEAGLE ? 0.052 : 0.045),
      this.plan.shells && this.left)
    ) {
      const o = new Q(
        new Tt(0.013, 0.013, 0.06, 8),
        new oo({ color: 10566704, shininess: 20 }),
      );
      ((o.rotation.x = Math.PI / 2),
        o.position.set(0.01, 0.005, -0.02),
        (o.frustumCulled = !1),
        this.left.hand.add(o),
        (this.shell = o));
    }
  }
  plan;
  right;
  left;
  anchors = new Map();
  mag;
  magRest = new k();
  magRestRot = 0;
  bolt;
  boltRest = new k();
  charge;
  chargeRest = 0;
  hammer;
  hammerRest = 0;
  trigger;
  triggerRest = 0;
  pump;
  slide;
  slideRest;
  slideStroke;
  shell = null;
  emptyAtReload = !1;
  reloadArmed = !1;
  lastReload = -1;
  lastInspect = -1;
  ejectNow = !1;
  ejected = !1;
  onFoley = null;
  beginReload(e) {
    ((this.emptyAtReload = e), (this.reloadArmed = !0));
  }
  active() {
    return !this.emptyAtReload && this.plan.tactical
      ? this.plan.tactical
      : this.plan;
  }
  gunOffset(e, t) {
    if (((t.rx = t.ry = t.rz = t.py = t.px = 0), e < 0)) return t;
    const [i, n, o] = zr(this.active().tilt, e);
    return (
      (t.rx = ni.lerp(i[1], n[1], o)),
      (t.ry = ni.lerp(i[2], n[2], o)),
      (t.rz = ni.lerp(i[3], n[3], o)),
      (t.py = ni.lerp(i[4], n[4], o)),
      (t.px = ni.lerp(i[5] ?? 0, n[5] ?? 0, o)),
      t
    );
  }
  rel(e, t) {
    t.identity();
    for (let i = e; i && i !== this.vm.group; i = i.parent)
      (i.updateMatrix(), t.premultiply(i.matrix));
    return t;
  }
  target(e, t, i, n) {
    const o = this.anchors.get("grip-l") ?? this.anchors.get("grip-r");
    if (e === "off") {
      (t.set(-0.26, -1.02, -0.24).applyMatrix4(n),
        this.rel(o, W_).decompose(ru, i, X2));
      return;
    }
    const a = {
        mag: "mag-grip",
        port: "mag-grip",
        "port-in": "mag-grip",
        bolt: "weapon-bolt",
        slide: "weapon-slide",
        charge: "weapon-charge",
        catch: "bolt-catch",
      },
      r = this.anchors.get(a[e] ?? e) ?? o;
    (this.rel(r, W_).decompose(t, i, X2),
      e === "bolt"
        ? (i.multiply(ZK), t.add(ru.set(0.034, 0.01, 0)))
        : e === "slide"
          ? (this.rel(o, $_).decompose(ru, i, X2),
            t.add(K_.set(-0.02, 0.03, 0.05)))
          : e === "charge" || e === "catch"
            ? (this.rel(o, $_).decompose(ru, i, X2),
              i.multiply(QK),
              t.add(
                K_.set(
                  e === "charge" ? -0.03 : -0.012,
                  e === "charge" ? 0.004 : -0.004,
                  0.012,
                ),
              ))
            : e === "port-in"
              ? t.add(ru.set(0, 0.02, 0.035))
              : e === "port" && t.add(ru.set(0, -0.015, -0.01)));
  }
  handPose(e, t, i, n, o, a) {
    if (!e || i < 0) {
      this.target(t, n, o, a);
      return;
    }
    const [r, l, c] = zr(e, i);
    (this.target(r[1], n, o, a),
      c > 0 &&
        r !== l &&
        (this.target(l[1], V_, q_, a), n.lerp(V_, c), o.slerp(q_, c)));
  }
  foley(e, t, i) {
    if (!(!e || !this.onFoley || i < 0)) {
      t > i && (t = -1);
      for (const [n, o] of e) n > t && n <= i && this.onFoley(o);
    }
  }
  pose(e) {
    const t = e.reload;
    (t >= 0 &&
      this.lastReload < 0 &&
      !this.reloadArmed &&
      (this.emptyAtReload = e.empty),
      t < 0 && (this.reloadArmed = !1));
    const i = t >= 0 ? this.active() : this.plan;
    (this.foley(i.sounds, this.lastReload, t), (this.lastReload = t));
    const n =
        e.inspect !== void 0 && e.inspect >= 0 && t < 0 && this.plan.inspect
          ? Math.min(1, e.inspect / q0)
          : -1,
      o = n >= 0 ? this.plan.inspect : null;
    if (
      (this.foley(o?.sounds, this.lastInspect, n),
      (this.lastInspect = n),
      (this.ejectNow = !1),
      this.mag)
    ) {
      let c = 0,
        h = 0,
        d = 0,
        u = !0;
      const f = t >= 0 ? i.mag : o?.mag,
        p = t >= 0 ? t : n;
      if (p >= 0 && f) {
        const [m, g, y] = zr(f, p);
        ((c = ni.lerp(m[1], g[1], y)),
          (h = ni.lerp(m[2], g[2], y)),
          (d = ni.lerp(m[3], g[3], y)),
          (u = !!m[4]),
          t >= 0 &&
            i.roundAppears !== void 0 &&
            t < i.roundAppears &&
            this.emptyAtReload &&
            (u = !1));
      } else i.roundAppears !== void 0 && e.empty && (u = !1);
      (this.mag.position.set(
        this.magRest.x,
        this.magRest.y + c,
        this.magRest.z + h,
      ),
        (this.mag.rotation.x = this.magRestRot + d),
        (this.mag.visible = u));
    }
    let a = e.cycle;
    if (
      (t >= 0 &&
        i.boltCycle &&
        (a =
          t < i.boltCycle[0] || t > i.boltCycle[1]
            ? -1
            : (t - i.boltCycle[0]) / (i.boltCycle[1] - i.boltCycle[0])),
      this.bolt)
    )
      if (this.base === w.AWP) {
        const c = a >= 0 ? XK(a) : { lift: 0, back: 0 };
        ((this.bolt.rotation.z = c.lift * 1.05),
          (this.bolt.position.z = this.boltRest.z + c.back * 0.1),
          a >= 0.42 &&
            !this.ejected &&
            ((this.ejected = !0), (this.ejectNow = !0)),
          a < 0 && (this.ejected = !1));
      } else {
        let c = Math.sin(Math.min(1, e.kick) * Math.PI) * 0.045;
        if (t >= 0 && i.bolt) {
          const [h, d, u] = zr(i.bolt, t);
          c = Math.max(c, ni.lerp(h[1], d[1], u));
        } else
          t < 0 &&
            this.plan.holdOpen &&
            e.empty &&
            (c = Math.max(c, this.plan.bolt?.[0][1] ?? 0.04));
        if (o?.charge) {
          const [h, d, u] = zr(o.charge, n);
          c = Math.max(c, ni.lerp(h[1], d[1], u));
        }
        this.bolt.position.z = this.boltRest.z + c;
      }
    if (this.charge) {
      let c = 0;
      const h = t >= 0 ? i.charge : o?.charge,
        d = t >= 0 ? t : n;
      if (h && d >= 0) {
        const [u, f, p] = zr(h, d);
        c = ni.lerp(u[1], f[1], p);
      }
      this.charge.position.z = this.chargeRest + c;
    }
    if (this.pump) {
      let c = a >= 0 ? Math.sin(Math.min(1, a) * Math.PI) * 0.1 : 0;
      if (t >= 0 && i.pump) {
        const [h, d, u] = zr(i.pump, t);
        c = ni.lerp(h[1], d[1], u);
      }
      (a >= 0.45 &&
        !this.ejected &&
        ((this.ejected = !0), (this.ejectNow = !0)),
        a < 0 && (this.ejected = !1),
        (this.pump.position.z = c));
    }
    let r = 0;
    if (this.slide) {
      if (
        ((r = (
          t < 0 ? e.empty : this.emptyAtReload && t < (i.slideRelease ?? 1)
        )
          ? this.slideStroke
          : Math.sin(Math.min(1, e.kick) * Math.PI) * this.slideStroke),
        o?.slide)
      ) {
        const [h, d, u] = zr(o.slide, n);
        r = Math.max(r, ni.lerp(h[1], d[1], u));
      }
      this.slide.position.z = this.slideRest + r;
    }
    if (this.hammer) {
      const c = 1 - ni.smoothstep(e.kick, 0.02, 0.35);
      this.hammer.rotation.x =
        this.hammerRest * (1 - c) + Math.min(0.35, r * 9);
    }
    if (this.trigger) {
      const c = 1 - ni.smoothstep(e.kick, 0.3, 1);
      this.trigger.rotation.x = this.triggerRest - c * 0.32;
    }
    if (this.shell) {
      let c = !1;
      if (t >= 0)
        for (const [h, d] of i.shells ?? []) t >= h && t <= d && (c = !0);
      this.shell.visible = c;
    }
    const l = this.vm.group;
    if ((l.updateMatrix(), wp.copy(l.matrix).invert(), this.right)) {
      const c =
          t >= 0
            ? i.right
            : a >= 0 && this.base === w.AWP
              ? [
                  [0, "grip-r"],
                  [0.12, "bolt-knob"],
                  [0.88, "bolt-knob"],
                  [1, "grip-r"],
                ]
              : void 0,
        h = t >= 0 ? t : a;
      (this.handPose(c, "grip-r", c ? h : -1, K2, Y2, wp),
        j2
          .lerpVectors(this.right.elbowHip, this.right.elbowAds, e.ads)
          .applyMatrix4(wp),
        G_(this.right, K2.clone(), Y2.clone(), j2));
    }
    if (this.left) {
      const c = t >= 0 ? i.left : o?.left,
        h = t >= 0 ? t : n;
      (this.handPose(c, "grip-l", h, K2, Y2, wp),
        j2
          .lerpVectors(this.left.elbowHip, this.left.elbowAds, e.ads)
          .applyMatrix4(wp),
        G_(this.left, K2.clone(), Y2.clone(), j2));
    }
  }
}
