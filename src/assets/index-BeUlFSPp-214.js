// index-BeUlFSPp 214 — math
// Lines 112381-112868 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class lre {
  constructor(e, t) {
    ((this.scene = e), (this.world = t), (this.carcasses = new Yae(e)));
  }
  animals = new Map();
  carcasses;
  get count() {
    return this.animals.size;
  }
  lightT = 0;
  enabled = !0;
  setEnabled(e) {
    this.enabled = e;
    for (const t of this.animals.values()) t.group.visible = e;
  }
  clear() {
    for (const e of [...this.animals.keys()]) this.onRemove(e);
    this.carcasses.clear();
  }
  onSpawn(e, t, i, n, o, a, r, l = !1) {
    if ((this.onRemove(e), !(t in Cx))) return;
    const c = n9(t, r, e, l);
    (c.group.position.set(i, n, o),
      this.scene.add(c.group),
      this.animals.set(e, {
        id: e,
        type: t,
        hp: a,
        maxHp: Cx[t],
        baby: r,
        sheared: l,
        group: c.group,
        legs: c.legs,
        head: c.head,
        tail: c.tail,
        flaps: c.flaps,
        spine: c.spine,
        jaw: c.jaw,
        pitch: 0,
        biteT: 0,
        target: new k(i, n, o),
        yaw: 0,
        walkT: 0,
        moving: !1,
        loving: !1,
        grazing: !1,
        drinking: !1,
        fleeing: !1,
        chewing: !1,
        chewT: 0,
        rider: -1,
        phase: (e * 2.399963) % 6.283,
      }));
  }
  onState(e, t, i, n, o, a, r = 0) {
    const l = this.animals.get(e);
    if (!l) return;
    (l.target.set(t, i, n),
      (l.yaw = o),
      (l.moving = !!(a & s0.MOVING)),
      (l.loving = !!(a & s0.LOVING)),
      (l.grazing = !!(a & s0.GRAZING)),
      (l.drinking = !!(a & s0.DRINKING)),
      (l.fleeing = !!(a & s0.FLEEING)),
      (l.chewing = !!(a & s0.CHEWING)),
      (l.pitch = r));
    const c = !!(a & s0.SHEARED),
      h = !!(a & s0.BABY);
    if (h !== l.baby || c !== l.sheared) {
      const d = l.rider;
      (this.onSpawn(e, l.type, t, i, n, l.hp, h, c), this.setRider(e, d));
      return;
    }
  }
  onHp(e, t) {
    const i = this.animals.get(e);
    i && (t < i.hp && (i.hurtT = 0.4), (i.hp = t));
  }
  onRemove(e, t) {
    const i = this.animals.get(e);
    if (i) {
      if (
        (this.animals.delete(e),
        t && t.cause !== ml.DESPAWN && this.enabled && i.group.visible)
      ) {
        (this.restoreHurt(i),
          this.carcasses.spawn(i.group, i.legs, i.head, {
            ...t,
            aquatic: Lx(i.type),
          }));
        return;
      }
      this.scene.remove(i.group);
    }
  }
  restoreHurt(e) {
    for (const t of e.hurtBase ?? []) t.mat.color.copy(t.base);
    e.hurtT = 0;
  }
  applyHurt(e, t) {
    if (!e.hurtT) return;
    (e.hurtBase ||
      ((e.hurtBase = []),
      e.group.traverse((n) => {
        const o = n;
        if (o.isMesh)
          for (const a of Array.isArray(o.material)
            ? o.material
            : [o.material]) {
            const r = a;
            r.color &&
              !e.hurtBase.some((l) => l.mat === r) &&
              e.hurtBase.push({ mat: r, base: r.color.clone() });
          }
      })),
      (e.hurtT = Math.max(0, e.hurtT - t)));
    const i = Math.min(1, e.hurtT / 0.25);
    for (const n of e.hurtBase)
      n.mat.color.copy(n.base).lerp(rre.copy(n.base).multiply(are), i);
  }
  thermalTargets() {
    return [...this.animals.values()]
      .filter((e) => e.hp > 0 && e.group.visible)
      .map((e) => e.group);
  }
  update(e, t = 0, i) {
    if (!this.enabled) {
      for (const l of this.animals.values()) l.group.visible = !1;
      this.carcasses.clear();
      return;
    }
    this.carcasses.update(e);
    const n = 1 - Math.exp(-6.5 * e),
      o = 1 - Math.exp(-3.2 * e),
      a = performance.now() * 0.001;
    this.lightT += e;
    const r = this.lightT >= Vc;
    r && (this.lightT = 0);
    for (const l of this.animals.values()) {
      const c = l.group.position.x,
        h = l.group.position.z;
      l.group.position.lerp(l.target, n);
      const d = Math.hypot(l.group.position.x - c, l.group.position.z - h);
      let u = l.yaw - l.group.rotation.y;
      if (
        ((u = Math.atan2(Math.sin(u), Math.cos(u))),
        (l.group.rotation.y += u * o),
        (l.group.visible = !i || i(l.target.x, l.target.z)),
        !l.group.visible)
      )
        continue;
      const f = TI(l.group.position, 3.5 * Sl(l.type, l.baby));
      if ((xI(l.group, f), !f)) continue;
      if (r) {
        const T = 0.8 * Sl(l.type, l.baby);
        Pl(l.group, Il(this.world, l.group.position, t, T));
      }
      const p = l.group.position.distanceTo(l.target),
        m = d > e * 0.04 || (l.moving && p > 0.015);
      if (
        ((l.biteT = Math.max(0, l.biteT - e)), this.applyHurt(l, e), Lx(l.type))
      ) {
        this.animateSwimmer(l, e, a, p, m);
        continue;
      }
      if (l.type === Bt.WENDIGO) {
        this.animateWendigo(l, e, a, d, m);
        continue;
      }
      const g = xW(l.type);
      if (m) {
        const T = (g ? 0.38 : 0.85) * Sl(l.type, l.baby);
        l.walkT += (Math.min(d, e * 7) / T) * Math.PI * 2;
      }
      const y = l.walkT,
        b = a + l.phase,
        S = m ? Math.sin(y) * 0.6 : 0;
      if (
        (l.legs.forEach((T, x) => {
          const R =
            l.type === Bt.CAMEL
              ? x < 2
                ? 1
                : -1
              : (x & 1) ^ ((x >> 1) & 1)
                ? -1
                : 1;
          T.rotation.x += (S * R - T.rotation.x) * (1 - Math.exp(-14 * e));
          const _ = T.userData.knee;
          _ &&
            (_.rotation.x = m ? Math.max(0, Math.sin(y + 1.1) * R) * 0.55 : 0);
        }),
        (l.chewT = Math.max(0, l.chewT - e)),
        l.chewing && l.chewT <= 0 && (l.chewT = 1.9),
        l.head)
      ) {
        const T = l.chewT > 0 ? Math.abs(Math.sin(a * 13)) * 0.16 : 0,
          x = l.drinking
            ? 1.2
            : l.chewT > 0
              ? 1.05 + T
              : l.grazing
                ? 0.78 + Math.sin(b * 1.1) * 0.18
                : m
                  ? 0
                  : Math.max(0, Math.sin(b * 0.5) - 0.55) * 1.4,
          R = Jae(l.type);
        l.head.rotation.x +=
          (((m ? Math.sin(y * 2) * 0.07 : 0) + x) * R - l.head.rotation.x) *
          (1 - Math.exp(-7 * e));
        const _ = (l.head.userData.baseY ??= l.head.position.y);
        l.head.position.y = _ - x * 0.12;
        const C = Math.sin(b * 0.16);
        l.head.rotation.y = m
          ? 0
          : Math.sign(C) * Math.max(0, Math.abs(C) - 0.55) * 0.62;
      }
      l.tail &&
        ((l.tail.rotation.x = Math.sin(b * 1.6) * 0.12),
        (l.tail.rotation.z = Math.sin(b * 2.3) * (m ? 0.3 : 0.16)));
      for (let T = 0; T < l.flaps.length; T++) {
        const x = T % 2 ? -1 : 1;
        if (g)
          l.flaps[T].rotation.z =
            x * (m ? 0.35 + Math.abs(Math.sin(y * 2)) * 0.9 : 0.12);
        else {
          const R = Math.max(0, Math.sin(b * 0.8 + T * 2.1) - 0.86) * 7,
            _ = (l.flaps[T].userData.restX ??= l.flaps[T].rotation.x);
          l.flaps[T].rotation.x = _ + R * 0.5;
        }
      }
      const M = Sl(l.type, l.baby),
        E = l.loving ? 1 + Math.sin(a * 9 + l.id) * 0.035 : 1,
        A = 1 + Math.sin(b * 1.1) * 0.012;
      l.group.scale.set(M * E * A, M * E, M * E * A);
    }
  }
  animateWendigo(e, t, i, n, o) {
    const a = i + e.phase,
      r = e.fleeing;
    o && (e.walkT += (Math.min(n, t * 9) / (r ? 1.9 : 1.5)) * Math.PI * 2);
    const l = e.walkT,
      c = o ? (r ? 0.75 : 0.5) : 0,
      h = 1 - Math.exp(-10 * t);
    e.legs.forEach((f, p) => {
      const m = p === 0 ? 1 : -1;
      f.rotation.x += (Math.sin(l) * c * m - f.rotation.x) * h;
      const g = f.userData.knee;
      g &&
        (g.rotation.x = o ? Math.max(0, Math.sin(l * m + 1.3 * m)) * 0.5 : 0);
    });
    const d = e.spine[0];
    if (d) {
      const f = r ? 0.78 : o ? 0.42 : 0.3 + Math.sin(a * 0.7) * 0.03;
      ((d.rotation.x += (f - d.rotation.x) * (1 - Math.exp(-4 * t))),
        (d.rotation.z = o ? Math.sin(l) * 0.06 : Math.sin(a * 0.5) * 0.02),
        (d.position.y =
          1.88 +
          (o ? Math.abs(Math.sin(l)) * 0.08 : Math.sin(a * 1.2) * 0.015)));
    }
    if (
      (e.flaps.forEach((f, p) => {
        const m = p === 0 ? -1 : 1,
          g =
            p === 1 && e.biteT > 0
              ? Math.sin((1 - e.biteT / 0.45) * Math.PI)
              : 0,
          y = r ? -1.05 : 0,
          b = o
            ? -Math.sin(l) * m * (r ? 0.25 : 0.45)
            : Math.sin(a * 0.6 + p) * 0.05,
          S = y + b - g * 1.9;
        ((f.rotation.x +=
          (S - f.rotation.x) * (1 - Math.exp(-(g ? 22 : 8) * t))),
          (f.rotation.z = m * (r ? 0.28 : 0.12)));
        const M = f.userData.elbow;
        M &&
          (M.rotation.x = r
            ? -0.55
            : o
              ? -0.15 - Math.max(0, Math.sin(l * m)) * 0.25
              : -0.08);
      }),
      e.head)
    ) {
      const f = Math.sin(a * 1.7) > 0.93 ? Math.sin(a * 40) * 0.35 : 0;
      ((e.head.rotation.z = f + (r ? 0 : Math.sin(a * 0.4) * 0.12)),
        (e.head.rotation.y = r ? 0 : Math.sin(a * 0.23) * 0.5),
        (e.head.rotation.x = r ? 0.3 : -0.05));
    }
    e.jaw &&
      (e.jaw.rotation.x =
        r || e.biteT > 0
          ? 0.78 + Math.sin(i * 17) * 0.08
          : 0.12 + Math.max(0, Math.sin(a * 0.9) - 0.8) * 2);
    const u = e.group.userData.eyes;
    u &&
      u.color
        .setScalar(0.75 + Math.sin(a * 5.3) * 0.1 + (r ? 0.25 : 0))
        .multiply(Zae);
  }
  animateSwimmer(e, t, i, n, o) {
    const a = e.type === Bt.SHARK,
      r = i + e.phase,
      l = (o ? Math.min(2.4, 0.8 + n * 4) : 0.45) * (e.fleeing ? 1.7 : 1);
    e.walkT += t * (a ? 2.6 : 7.5) * l;
    const c = e.walkT;
    if (
      ((e.group.rotation.x +=
        (-e.pitch - e.group.rotation.x) * Math.min(1, t * 5)),
      (e.group.rotation.z +=
        ((o ? Math.sin(c * 0.5) * 0.1 : 0) - e.group.rotation.z) *
        Math.min(1, t * 3)),
      a)
    ) {
      if (
        (e.spine.forEach((h, d) => {
          h.rotation.y =
            Math.sin(c - d * 0.85) * (0.12 + d * 0.07) * (0.5 + l * 0.4);
        }),
        e.tail &&
          (e.tail.rotation.y =
            Math.sin(c - e.spine.length * 0.85) * 0.34 * (0.5 + l * 0.4)),
        e.jaw)
      ) {
        const h =
            e.biteT > 0
              ? Math.sin(Math.min(1, (0.35 - e.biteT) / 0.35) * Math.PI)
              : 0,
          d = e.fleeing ? 0.32 : 0.05;
        e.jaw.rotation.x = d + h * 0.55 + Math.sin(r * 0.6) * 0.03;
      }
      for (let h = 0; h < e.flaps.length; h++) {
        const d = h % 2 ? -1 : 1;
        e.flaps[h].rotation.z = d * (0.32 + Math.sin(r * 0.8 + h) * 0.06);
      }
      return;
    }
    (e.tail && (e.tail.rotation.y = Math.sin(c) * 0.7),
      (e.group.rotation.y += Math.sin(c - 0.7) * 0.06 * Math.min(1, l)));
    for (let h = 0; h < e.flaps.length; h++) {
      const d = h % 2 ? -1 : 1;
      e.flaps[h].rotation.y = d * Math.sin(c * 1.7 + h) * 0.45;
    }
    e.group.position.y += Math.sin(r * 1.3) * 0.006;
  }
  raycastHit(e, t, i) {
    let n = null;
    for (const o of this.animals.values()) {
      const a = o.group.position,
        r = Sl(o.type, o.baby),
        l = PC(o.type),
        c = (o.type === Bt.SHARK ? 2.4 : l.hw * 1.3) * r,
        h = Om(
          e,
          t,
          a.x - l.hw * r,
          a.y,
          a.z - c,
          a.x + l.hw * r,
          a.y + l.h * r,
          a.z + c,
        );
      h !== null &&
        h < i &&
        (!n || h < n.dist) &&
        (n = { id: o.id, dist: h, point: e.clone().addScaledVector(t, h) });
    }
    return n;
  }
  nearestMilkable(e, t) {
    let i = null,
      n = t;
    for (const o of this.animals.values()) {
      if ((o.type !== Bt.COW && o.type !== Bt.CAMEL) || o.baby) continue;
      const a = o.group.position.distanceTo(e);
      a < n && ((n = a), (i = o));
    }
    return i ? { id: i.id, dist: n } : null;
  }
  nearestShearable(e, t) {
    let i = null,
      n = t;
    for (const o of this.animals.values()) {
      if (o.type !== Bt.SHEEP || o.baby || o.sheared) continue;
      const a = o.group.position.distanceTo(e);
      a < n && ((n = a), (i = o));
    }
    return i ? { id: i.id, dist: n } : null;
  }
  onEvent(e, t) {
    const i = this.animals.get(e);
    if (
      i &&
      (t === hr.EAT && (i.chewT = 1.9),
      t === hr.BITE && (i.biteT = i.type === Bt.WENDIGO ? 0.45 : 0.35),
      t === hr.SHEARED && !i.sheared)
    ) {
      const n = i.group.position;
      this.onSpawn(e, i.type, n.x, n.y, n.z, i.hp, i.baby, !0);
    }
  }
  nearbyForVoice(e, t) {
    const i = [];
    for (const n of this.animals.values()) {
      const o = n.group.position.distanceTo(e);
      o <= t &&
        i.push({
          id: n.id,
          type: n.type,
          dist: o,
          baby: n.baby,
          at: n.group.position,
        });
    }
    return i;
  }
  voiceInfo(e) {
    const t = this.animals.get(e);
    return t
      ? { type: t.type, baby: t.baby, at: t.group.position, hp: t.hp }
      : null;
  }
  typeOf(e) {
    return this.animals.get(e)?.type ?? -1;
  }
  wendigosNear(e, t) {
    const i = [];
    for (const n of this.animals.values()) {
      if (n.type !== Bt.WENDIGO) continue;
      const o = n.group.position.distanceTo(e);
      o <= t &&
        i.push({
          id: n.id,
          dist: o,
          hunting: n.fleeing,
          moving: n.moving,
          pos: n.group.position,
        });
    }
    return i.sort((n, o) => n.dist - o.dist);
  }
  positionOf(e) {
    return this.animals.get(e)?.group.position ?? null;
  }
  nearestRideable(e, t) {
    let i = null,
      n = t;
    for (const o of this.animals.values()) {
      if (o.type !== Bt.CAMEL || o.baby || o.rider !== -1) continue;
      const a = o.group.position.distanceTo(e);
      a < n && ((n = a), (i = o));
    }
    return i ? { id: i.id, dist: n } : null;
  }
  setRider(e, t) {
    const i = this.animals.get(e);
    i && (i.rider = t);
  }
  riders() {
    const e = [];
    for (const t of this.animals.values())
      t.rider !== -1 && e.push({ animalId: t.id, playerId: t.rider });
    return e;
  }
  nearest(e, t) {
    let i = null,
      n = t;
    for (const o of this.animals.values()) {
      const a = o.group.position.distanceTo(e);
      a < n && ((n = a), (i = o));
    }
    return i ? { id: i.id, dist: n } : null;
  }
  hitboxes() {
    return [...this.animals.values()].map((e) => {
      const t = Sl(e.type, e.baby),
        i = PC(e.type);
      return {
        x: e.group.position.x,
        y: e.group.position.y,
        z: e.group.position.z,
        hw: i.hw * t,
        h: i.h * t,
      };
    });
  }
}
