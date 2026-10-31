// index-Dp6GxvJu 228 — math
// Lines 125893-126220 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function Zne() {
  const n = new pe(),
    e = yt(1),
    t = (i, s) =>
      new le(
        new Zp(
          i.map(([o, a]) => new tt(o, a)),
          di(10),
        ),
        new gi({ color: s }),
      );
  if (
    (n.add(
      t(
        [
          [0.001, -0.15],
          [0.03, -0.12],
          [0.07, -0.06],
          [0.088, 0],
        ],
        15921126,
      ),
    ),
    n.add(
      t(
        [
          [0.088, 0],
          [0.078, 0.05],
          [0.05, 0.085],
          [0.012, 0.1],
          [0.001, 0.102],
        ],
        14169386,
      ),
    ),
    e)
  ) {
    const i = new le(
      new xt(0.089, 0.089, 0.012, di(10)),
      new gi({ color: 1908514 }),
    );
    n.add(i);
    const s = new le(new xt(0.008, 0.01, 0.16, 6), new gi({ color: 15921126 }));
    ((s.position.y = 0.18), n.add(s));
    const o = new le(
      new xt(0.011, 0.009, 0.05, 6),
      new qt({ color: 16765498 }),
    );
    ((o.position.y = 0.28), n.add(o));
    const a = new le(new xs(0.012, 0.003, 4, 8), new gi({ color: 10134443 }));
    ((a.position.y = 0.31), n.add(a));
  }
  return (
    n.traverse((i) => {
      i.frustumCulled = !1;
    }),
    n
  );
}
function Qne(n) {
  if (n === ITEM.RAW_FISH) {
    const t = VI(ANIMAL_KIND.FISH, !1, 1 + Math.floor(Math.random() * 7));
    t.group.scale.multiplyScalar(0.62);
    const i = new pe();
    return (
      (t.group.rotation.x = Math.PI / 2),
      (t.group.position.y = -0.3 * t.group.scale.y),
      i.add(t.group),
      { obj: i, tail: t.tail ?? null }
    );
  }
  return { obj: p1(n, 0.5), tail: null };
}
class Jne {
  constructor(e) {
    w(this, "bobbers", new Map());
    w(this, "catches", []);
    w(this, "ripples", []);
    w(
      this,
      "lineMat",
      new Eo({ color: 15002607, transparent: !0, opacity: 0.78 }),
    );
    w(this, "rippleGeo", new sh(0.82, 1, di(16)));
    w(this, "lineOrder", Gi.tracer);
    w(this, "tmpFrom", new k());
    this.scene = e;
  }
  localState(e) {
    var t;
    return ((t = this.bobbers.get(e)) == null ? void 0 : t.state) ?? ta.GONE;
  }
  hasLine(e) {
    return this.bobbers.has(e);
  }
  landing(e) {
    return this.catches.some((t) => t.pid === e);
  }
  positionOf(e) {
    var t;
    return (
      ((t = this.bobbers.get(e)) == null ? void 0 : t.group.position) ?? null
    );
  }
  tension(e) {
    const t = this.catches.find((s) => s.pid === e);
    if (t) return 0.75 * (1 - t.t);
    const i = this.bobbers.get(e);
    return i
      ? i.state === ta.BITE
        ? 0.5 +
          0.4 *
            Math.abs(Math.sin(i.biteT * 9)) *
            Math.max(0.35, 1 - i.biteT * 0.5)
        : i.state === ta.FLYING
          ? 0.05
          : 0.1
      : 0;
  }
  line() {
    const e = new ci();
    e.setAttribute("position", new oi(new Float32Array((Qb + 1) * 3), 3));
    const t = new Kc(e, this.lineMat);
    return ((t.frustumCulled = !1), (t.renderOrder = this.lineOrder), t);
  }
  ripple(e, t = 0.6, i = 1.4) {
    let s = this.ripples.find((o) => o.t >= o.life);
    if (!s) {
      if (this.ripples.length >= Xne) return;
      const o = new le(
        this.rippleGeo,
        new qt({
          color: 15398655,
          transparent: !0,
          opacity: 0,
          depthWrite: !1,
          side: Ai,
        }),
      );
      ((o.rotation.x = -Math.PI / 2),
        (o.renderOrder = this.lineOrder),
        (o.frustumCulled = !1),
        this.scene.add(o),
        (s = { mesh: o, t: 0, life: i, size: t }),
        this.ripples.push(s));
    }
    ((s.t = 0),
      (s.life = i),
      (s.size = t),
      s.mesh.position.set(e.x, e.y + 0.04, e.z),
      (s.mesh.visible = !0));
  }
  onState(e, t, i, s, o, a = 0) {
    if (t === ta.GONE) {
      const c = this.bobbers.get(e);
      if (!c) return "gone";
      if (a > 0) {
        const { obj: h, tail: d } = Qne(a);
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
      const c = Zne();
      c.position.set(i, s, o);
      const h = this.line();
      return (
        this.scene.add(c, h),
        (r = {
          pid: e,
          state: t,
          group: c,
          line: h,
          target: new k(i, s, o),
          restY: s,
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
      r.target.set(i, s, o),
      t !== ta.FLYING && (r.restY = s),
      t === ta.BITE
        ? ((r.biteT = 0), this.ripple(r.target, 1.3, 1.2), "bite")
        : l === ta.FLYING && t === ta.FLOATING
          ? (this.ripple(r.target, 1, 1.3), "landed")
          : "move"
    );
  }
  clear() {
    for (const e of [...this.bobbers.keys()]) this.onState(e, ta.GONE, 0, 0, 0);
    for (const e of this.catches) this.dropCatch(e);
    this.catches.length = 0;
  }
  dropCatch(e) {
    (this.scene.remove(e.obj, e.line), e.line.geometry.dispose());
  }
  drawLine(e, t, i, s) {
    const o = e.geometry.getAttribute("position");
    for (let a = 0; a <= Qb; a++) {
      const r = a / Qb,
        l = Math.sin(r * Math.PI) * s * (0.75 + 0.5 * r * (1 - r) * 2);
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
    for (const s of this.bobbers.values()) {
      const o = s.group.position;
      let a = 0;
      if (s.state === ta.FLYING)
        (o.lerp(s.target, 1 - Math.exp(-24 * e)),
          (s.group.rotation.x += e * 9),
          (a = 0.08));
      else {
        ((s.group.rotation.x *= Math.exp(-10 * e)),
          (o.x += (s.target.x - o.x) * (1 - Math.exp(-10 * e))),
          (o.z += (s.target.z - o.z) * (1 - Math.exp(-10 * e))));
        const c = i + s.phase;
        if (s.state === ta.BITE) {
          s.biteT += e;
          const h = Math.min(1, s.biteT * 3.4),
            d =
              Math.sin(s.biteT * 17) * 0.06 * (1 - Math.min(1, s.biteT * 0.7));
          ((o.y += (s.restY - 0.26 * h + d - o.y) * (1 - Math.exp(-18 * e))),
            (s.group.rotation.z = Math.sin(s.biteT * 21) * 0.35),
            (s.rippleT -= e),
            s.rippleT <= 0 &&
              (this.ripple(Jb.set(o.x, s.restY, o.z), 0.9, 0.8),
              (s.rippleT = 0.28)),
            (a = 0.02));
        } else
          ((o.y +=
            (s.restY + Math.sin(c * 1.7) * 0.035 - o.y) *
            (1 - Math.exp(-8 * e))),
            (s.group.rotation.z = Math.sin(c * 1.3) * 0.08),
            (s.rippleT -= e),
            s.rippleT <= 0 &&
              (this.ripple(Jb.set(o.x, s.restY, o.z), 0.5, 1.8),
              (s.rippleT = 2.2 + Math.random() * 1.6)),
            (a = -1));
      }
      const r = t(s.pid);
      if (!r) {
        s.line.visible = !1;
        continue;
      }
      ((s.line.visible = !0), this.tmpFrom.copy(r));
      const l = this.tmpFrom.distanceTo(o);
      ((s.group.visible = s.state !== ta.FLYING || l > 1.6),
        a < 0 && (a = Math.min(1.1, l * 0.075)),
        this.drawLine(s.line, this.tmpFrom, JR.copy(o).setY(o.y + 0.3), a));
    }
    for (let s = this.catches.length - 1; s >= 0; s--) {
      const o = this.catches[s];
      o.t = Math.min(1, o.t + e / jne);
      const a = t(o.pid);
      if (!a || o.t >= 1) {
        (this.dropCatch(o), this.catches.splice(s, 1));
        continue;
      }
      const r = 1 - (1 - o.t) * (1 - o.t),
        l = Jb.copy(o.from)
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
          JR.copy(o.obj.position).setY(o.obj.position.y + 0.05),
          0.01,
        ));
    }
    for (const s of this.ripples) {
      if (s.t >= s.life) continue;
      s.t += e;
      const o = Math.min(1, s.t / s.life);
      (s.mesh.scale.setScalar(0.08 + s.size * (1 - (1 - o) * (1 - o))),
        (s.mesh.material.opacity = 0.5 * (1 - o) * Math.min(1, s.t * 12)),
        o >= 1 && (s.mesh.visible = !1));
    }
  }
}
