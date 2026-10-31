// index-BeUlFSPp 251 — math
// Lines 133528-133788 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function k0e(s) {
  if (s === w.RAW_FISH) {
    const t = o9(Bt.FISH, !1, 1 + Math.floor(Math.random() * 7));
    t.group.scale.multiplyScalar(0.62);
    const i = new re();
    return (
      (t.group.rotation.x = Math.PI / 2),
      (t.group.position.y = -0.3 * t.group.scale.y),
      i.add(t.group),
      { obj: i, tail: t.tail ?? null }
    );
  }
  return { obj: e2(s, 0.5), tail: null };
}
class C0e {
  constructor(e) {
    this.scene = e;
  }
  bobbers = new Map();
  catches = [];
  ripples = [];
  lineMat = new Zo({ color: 15002607, transparent: !0, opacity: 0.78 });
  rippleGeo = new Z0(0.82, 1, ci(16));
  lineOrder = zi.tracer;
  tmpFrom = new k();
  localState(e) {
    return this.bobbers.get(e)?.state ?? Aa.GONE;
  }
  hasLine(e) {
    return this.bobbers.has(e);
  }
  landing(e) {
    return this.catches.some((t) => t.pid === e);
  }
  positionOf(e) {
    return this.bobbers.get(e)?.group.position ?? null;
  }
  tension(e) {
    const t = this.catches.find((n) => n.pid === e);
    if (t) return 0.75 * (1 - t.t);
    const i = this.bobbers.get(e);
    return i
      ? i.state === Aa.BITE
        ? 0.5 +
          0.4 *
            Math.abs(Math.sin(i.biteT * 9)) *
            Math.max(0.35, 1 - i.biteT * 0.5)
        : i.state === Aa.FLYING
          ? 0.05
          : 0.1
      : 0;
  }
  line() {
    const e = new oi();
    e.setAttribute("position", new qt(new Float32Array((SM + 1) * 3), 3));
    const t = new md(e, this.lineMat);
    return ((t.frustumCulled = !1), (t.renderOrder = this.lineOrder), t);
  }
  ripple(e, t = 0.6, i = 1.4) {
    let n = this.ripples.find((o) => o.t >= o.life);
    if (!n) {
      if (this.ripples.length >= _0e) return;
      const o = new Q(
        this.rippleGeo,
        new Zt({
          color: 15398655,
          transparent: !0,
          opacity: 0,
          depthWrite: !1,
          side: Mi,
        }),
      );
      ((o.rotation.x = -Math.PI / 2),
        (o.renderOrder = this.lineOrder),
        (o.frustumCulled = !1),
        this.scene.add(o),
        (n = { mesh: o, t: 0, life: i, size: t }),
        this.ripples.push(n));
    }
    ((n.t = 0),
      (n.life = i),
      (n.size = t),
      n.mesh.position.set(e.x, e.y + 0.04, e.z),
      (n.mesh.visible = !0));
  }
  onState(e, t, i, n, o, a = 0) {
    if (t === Aa.GONE) {
      const c = this.bobbers.get(e);
      if (!c) return "gone";
      if (a > 0) {
        const { obj: h, tail: d } = k0e(a);
        (h.position.copy(c.group.position),
          h.traverse((u) => {
            u.frustumCulled = !1;
          }),
          this.scene.add(h),
          this.catches.push({
            pid: e,
            obj: h,
            tail: d,
            line: c.line,
            from: c.group.position.clone(),
            t: 0,
          }),
          this.ripple(c.group.position, 1.1, 1.1));
      } else (this.scene.remove(c.line), c.line.geometry.dispose());
      return (
        this.scene.remove(c.group),
        this.bobbers.delete(e),
        a > 0 ? "caught" : "gone"
      );
    }
    let r = this.bobbers.get(e);
    if (!r) {
      const c = R0e();
      c.position.set(i, n, o);
      const h = this.line();
      return (
        this.scene.add(c, h),
        (r = {
          pid: e,
          state: t,
          group: c,
          line: h,
          target: new k(i, n, o),
          restY: n,
          biteT: 0,
          phase: (e * 1.732) % 6.283,
          rippleT: 1,
        }),
        this.bobbers.set(e, r),
        "cast"
      );
    }
    const l = r.state;
    return (
      (r.state = t),
      r.target.set(i, n, o),
      t !== Aa.FLYING && (r.restY = n),
      t === Aa.BITE
        ? ((r.biteT = 0), this.ripple(r.target, 1.3, 1.2), "bite")
        : l === Aa.FLYING && t === Aa.FLOATING
          ? (this.ripple(r.target, 1, 1.3), "landed")
          : "move"
    );
  }
  clear() {
    for (const e of [...this.bobbers.keys()]) this.onState(e, Aa.GONE, 0, 0, 0);
    for (const e of this.catches) this.dropCatch(e);
    this.catches.length = 0;
  }
  dropCatch(e) {
    (this.scene.remove(e.obj, e.line), e.line.geometry.dispose());
  }
  drawLine(e, t, i, n) {
    const o = e.geometry.getAttribute("position");
    for (let a = 0; a <= SM; a++) {
      const r = a / SM,
        l = Math.sin(r * Math.PI) * n * (0.75 + 0.5 * r * (1 - r) * 2);
      o.setXYZ(
        a,
        t.x + (i.x - t.x) * r,
        t.y + (i.y - t.y) * r - l,
        t.z + (i.z - t.z) * r,
      );
    }
    o.needsUpdate = !0;
  }
  update(e, t) {
    const i = performance.now() * 0.001;
    for (const n of this.bobbers.values()) {
      const o = n.group.position;
      let a = 0;
      if (n.state === Aa.FLYING)
        (o.lerp(n.target, 1 - Math.exp(-24 * e)),
          (n.group.rotation.x += e * 9),
          (a = 0.08));
      else {
        ((n.group.rotation.x *= Math.exp(-10 * e)),
          (o.x += (n.target.x - o.x) * (1 - Math.exp(-10 * e))),
          (o.z += (n.target.z - o.z) * (1 - Math.exp(-10 * e))));
        const c = i + n.phase;
        if (n.state === Aa.BITE) {
          n.biteT += e;
          const h = Math.min(1, n.biteT * 3.4),
            d =
              Math.sin(n.biteT * 17) * 0.06 * (1 - Math.min(1, n.biteT * 0.7));
          ((o.y += (n.restY - 0.26 * h + d - o.y) * (1 - Math.exp(-18 * e))),
            (n.group.rotation.z = Math.sin(n.biteT * 21) * 0.35),
            (n.rippleT -= e),
            n.rippleT <= 0 &&
              (this.ripple(EM.set(o.x, n.restY, o.z), 0.9, 0.8),
              (n.rippleT = 0.28)),
            (a = 0.02));
        } else
          ((o.y +=
            (n.restY + Math.sin(c * 1.7) * 0.035 - o.y) *
            (1 - Math.exp(-8 * e))),
            (n.group.rotation.z = Math.sin(c * 1.3) * 0.08),
            (n.rippleT -= e),
            n.rippleT <= 0 &&
              (this.ripple(EM.set(o.x, n.restY, o.z), 0.5, 1.8),
              (n.rippleT = 2.2 + Math.random() * 1.6)),
            (a = -1));
      }
      const r = t(n.pid);
      if (!r) {
        n.line.visible = !1;
        continue;
      }
      ((n.line.visible = !0), this.tmpFrom.copy(r));
      const l = this.tmpFrom.distanceTo(o);
      ((n.group.visible = n.state !== Aa.FLYING || l > 1.6),
        a < 0 && (a = Math.min(1.1, l * 0.075)),
        this.drawLine(n.line, this.tmpFrom, RL.copy(o).setY(o.y + 0.3), a));
    }
    for (let n = this.catches.length - 1; n >= 0; n--) {
      const o = this.catches[n];
      o.t = Math.min(1, o.t + e / x0e);
      const a = t(o.pid);
      if (!a || o.t >= 1) {
        (this.dropCatch(o), this.catches.splice(n, 1));
        continue;
      }
      const r = 1 - (1 - o.t) * (1 - o.t),
        l = EM.copy(o.from)
          .sub(a)
          .setY(0)
          .normalize()
          .multiplyScalar(1.4)
          .add(a);
      ((l.y = a.y - 0.35),
        o.obj.position.lerpVectors(o.from, l, r),
        (o.obj.position.y +=
          Math.sin(o.t * Math.PI) *
          Math.min(2.2, 0.6 + o.from.distanceTo(l) * 0.12)),
        o.obj.rotation.set(
          Math.sin(i * 23) * 0.3,
          i * 2.4,
          Math.sin(i * 17) * 0.4,
        ),
        o.tail && (o.tail.rotation.y = Math.sin(i * 31) * 0.7),
        o.obj.scale.setScalar(o.t > 0.8 ? Math.max(0.05, (1 - o.t) / 0.2) : 1),
        (o.line.visible = !0),
        this.drawLine(
          o.line,
          a,
          RL.copy(o.obj.position).setY(o.obj.position.y + 0.05),
          0.01,
        ));
    }
    for (const n of this.ripples) {
      if (n.t >= n.life) continue;
      n.t += e;
      const o = Math.min(1, n.t / n.life);
      (n.mesh.scale.setScalar(0.08 + n.size * (1 - (1 - o) * (1 - o))),
        (n.mesh.material.opacity = 0.5 * (1 - o) * Math.min(1, n.t * 12)),
        o >= 1 && (n.mesh.visible = !1));
    }
  }
}
