// index-Dp6GxvJu 192 — math
// Lines 105656-106150 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class Xee {
  constructor(e, t) {
    w(this, "animals", new Map());
    w(this, "carcasses");
    w(this, "lightT", 0);
    w(this, "enabled", !0);
    ((this.scene = e), (this.world = t), (this.carcasses = new Dee(e)));
  }
  get count() {
    return this.animals.size;
  }
  setEnabled(e) {
    this.enabled = e;
    for (const t of this.animals.values()) t.group.visible = e;
  }
  clear() {
    for (const e of [...this.animals.keys()]) this.onRemove(e);
    this.carcasses.clear();
  }
  onSpawn(e, t, i, s, o, a, r, l = !1) {
    if ((this.onRemove(e), !(t in wx))) return;
    const c = WI(t, r, e, l);
    (c.group.position.set(i, s, o),
      this.scene.add(c.group),
      this.animals.set(e, {
        id: e,
        type: t,
        hp: a,
        maxHp: wx[t],
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
        target: new k(i, s, o),
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
  onState(e, t, i, s, o, a, r = 0) {
    const l = this.animals.get(e);
    if (!l) return;
    (l.target.set(t, i, s),
      (l.yaw = o),
      (l.moving = !!(a & dc.MOVING)),
      (l.loving = !!(a & dc.LOVING)),
      (l.grazing = !!(a & dc.GRAZING)),
      (l.drinking = !!(a & dc.DRINKING)),
      (l.fleeing = !!(a & dc.FLEEING)),
      (l.chewing = !!(a & dc.CHEWING)),
      (l.pitch = r));
    const c = !!(a & dc.SHEARED),
      h = !!(a & dc.BABY);
    if (h !== l.baby || c !== l.sheared) {
      const d = l.rider;
      (this.onSpawn(e, l.type, t, i, s, l.hp, h, c), this.setRider(e, d));
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
        t && t.cause !== xr.DESPAWN && this.enabled && i.group.visible)
      ) {
        (this.restoreHurt(i),
          this.carcasses.spawn(i.group, i.legs, i.head, {
            ...t,
            aquatic: Mx(i.type),
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
      e.group.traverse((s) => {
        const o = s;
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
    for (const s of e.hurtBase)
      s.mat.color.copy(s.base).lerp(jee.copy(s.base).multiply(Yee), i);
  }
  thermalTargets() {
    return [...this.animals.values()]
      .filter((e) => e.hp > 0 && e.group.visible)
      .map((e) => e.group);
  }
  update(e, t = 0, i) {
    var l, c;
    if (!this.enabled) {
      for (const h of this.animals.values()) h.group.visible = !1;
      this.carcasses.clear();
      return;
    }
    this.carcasses.update(e);
    const s = 1 - Math.exp(-6.5 * e),
      o = 1 - Math.exp(-3.2 * e),
      a = performance.now() * 0.001;
    this.lightT += e;
    const r = this.lightT >= Vr;
    r && (this.lightT = 0);
    for (const h of this.animals.values()) {
      const d = h.group.position.x,
        u = h.group.position.z;
      h.group.position.lerp(h.target, s);
      const f = Math.hypot(h.group.position.x - d, h.group.position.z - u);
      let p = h.yaw - h.group.rotation.y;
      if (
        ((p = Math.atan2(Math.sin(p), Math.cos(p))),
        (h.group.rotation.y += p * o),
        (h.group.visible = !i || i(h.target.x, h.target.z)),
        !h.group.visible)
      )
        continue;
      const m = J8(h.group.position, 3.5 * Ir(h.type, h.baby));
      if ((eC(h.group, m), !m)) continue;
      if (r) {
        const C = 0.8 * Ir(h.type, h.baby);
        ur(h.group, dr(this.world, h.group.position, t, C));
      }
      const y = h.group.position.distanceTo(h.target),
        g = f > e * 0.04 || (h.moving && y > 0.015);
      if (
        ((h.biteT = Math.max(0, h.biteT - e)), this.applyHurt(h, e), Mx(h.type))
      ) {
        this.animateSwimmer(h, e, a, y, g);
        continue;
      }
      if (h.type === Nt.WENDIGO) {
        this.animateWendigo(h, e, a, f, g);
        continue;
      }
      const b = OH(h.type);
      if (g) {
        const C = (b ? 0.38 : 0.85) * Ir(h.type, h.baby);
        h.walkT += (Math.min(f, e * 7) / C) * Math.PI * 2;
      }
      const S = h.walkT,
        M = a + h.phase,
        x = g ? Math.sin(S) * 0.6 : 0;
      if (
        (h.legs.forEach((C, R) => {
          const L =
            h.type === Nt.CAMEL
              ? R < 2
                ? 1
                : -1
              : (R & 1) ^ ((R >> 1) & 1)
                ? -1
                : 1;
          C.rotation.x += (x * L - C.rotation.x) * (1 - Math.exp(-14 * e));
          const N = C.userData.knee;
          N &&
            (N.rotation.x = g ? Math.max(0, Math.sin(S + 1.1) * L) * 0.55 : 0);
        }),
        (h.chewT = Math.max(0, h.chewT - e)),
        h.chewing && h.chewT <= 0 && (h.chewT = 1.9),
        h.head)
      ) {
        const C = h.chewT > 0 ? Math.abs(Math.sin(a * 13)) * 0.16 : 0,
          R = h.drinking
            ? 1.2
            : h.chewT > 0
              ? 1.05 + C
              : h.grazing
                ? 0.78 + Math.sin(M * 1.1) * 0.18
                : g
                  ? 0
                  : Math.max(0, Math.sin(M * 0.5) - 0.55) * 1.4,
          L = Fee(h.type);
        h.head.rotation.x +=
          (((g ? Math.sin(S * 2) * 0.07 : 0) + R) * L - h.head.rotation.x) *
          (1 - Math.exp(-7 * e));
        const N = (l = h.head.userData).baseY ?? (l.baseY = h.head.position.y);
        h.head.position.y = N - R * 0.12;
        const D = Math.sin(M * 0.16);
        h.head.rotation.y = g
          ? 0
          : Math.sign(D) * Math.max(0, Math.abs(D) - 0.55) * 0.62;
      }
      h.tail &&
        ((h.tail.rotation.x = Math.sin(M * 1.6) * 0.12),
        (h.tail.rotation.z = Math.sin(M * 2.3) * (g ? 0.3 : 0.16)));
      for (let C = 0; C < h.flaps.length; C++) {
        const R = C % 2 ? -1 : 1;
        if (b)
          h.flaps[C].rotation.z =
            R * (g ? 0.35 + Math.abs(Math.sin(S * 2)) * 0.9 : 0.12);
        else {
          const L = Math.max(0, Math.sin(M * 0.8 + C * 2.1) - 0.86) * 7,
            N =
              (c = h.flaps[C].userData).restX ??
              (c.restX = h.flaps[C].rotation.x);
          h.flaps[C].rotation.x = N + L * 0.5;
        }
      }
      const T = Ir(h.type, h.baby),
        A = h.loving ? 1 + Math.sin(a * 9 + h.id) * 0.035 : 1,
        _ = 1 + Math.sin(M * 1.1) * 0.012;
      h.group.scale.set(T * A * _, T * A, T * A * _);
    }
  }
  animateWendigo(e, t, i, s, o) {
    const a = i + e.phase,
      r = e.fleeing;
    o && (e.walkT += (Math.min(s, t * 9) / (r ? 1.9 : 1.5)) * Math.PI * 2);
    const l = e.walkT,
      c = o ? (r ? 0.75 : 0.5) : 0,
      h = 1 - Math.exp(-10 * t);
    e.legs.forEach((f, p) => {
      const m = p === 0 ? 1 : -1;
      f.rotation.x += (Math.sin(l) * c * m - f.rotation.x) * h;
      const y = f.userData.knee;
      y &&
        (y.rotation.x = o ? Math.max(0, Math.sin(l * m + 1.3 * m)) * 0.5 : 0);
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
          y =
            p === 1 && e.biteT > 0
              ? Math.sin((1 - e.biteT / 0.45) * Math.PI)
              : 0,
          g = r ? -1.05 : 0,
          b = o
            ? -Math.sin(l) * m * (r ? 0.25 : 0.45)
            : Math.sin(a * 0.6 + p) * 0.05,
          S = g + b - y * 1.9;
        ((f.rotation.x +=
          (S - f.rotation.x) * (1 - Math.exp(-(y ? 22 : 8) * t))),
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
        .multiply(zee);
  }
  animateSwimmer(e, t, i, s, o) {
    const a = e.type === Nt.SHARK,
      r = i + e.phase,
      l = (o ? Math.min(2.4, 0.8 + s * 4) : 0.45) * (e.fleeing ? 1.7 : 1);
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
    let s = null;
    for (const o of this.animals.values()) {
      const a = o.group.position,
        r = Ir(o.type, o.baby),
        l = oR(o.type),
        c = (o.type === Nt.SHARK ? 2.4 : l.hw * 1.3) * r,
        h = Vp(
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
        (!s || h < s.dist) &&
        (s = { id: o.id, dist: h, point: e.clone().addScaledVector(t, h) });
    }
    return s;
  }
  nearestMilkable(e, t) {
    let i = null,
      s = t;
    for (const o of this.animals.values()) {
      if ((o.type !== Nt.COW && o.type !== Nt.CAMEL) || o.baby) continue;
      const a = o.group.position.distanceTo(e);
      a < s && ((s = a), (i = o));
    }
    return i ? { id: i.id, dist: s } : null;
  }
  nearestShearable(e, t) {
    let i = null,
      s = t;
    for (const o of this.animals.values()) {
      if (o.type !== Nt.SHEEP || o.baby || o.sheared) continue;
      const a = o.group.position.distanceTo(e);
      a < s && ((s = a), (i = o));
    }
    return i ? { id: i.id, dist: s } : null;
  }
  onEvent(e, t) {
    const i = this.animals.get(e);
    if (
      i &&
      (t === Ra.EAT && (i.chewT = 1.9),
      t === Ra.BITE && (i.biteT = i.type === Nt.WENDIGO ? 0.45 : 0.35),
      t === Ra.SHEARED && !i.sheared)
    ) {
      const s = i.group.position;
      this.onSpawn(e, i.type, s.x, s.y, s.z, i.hp, i.baby, !0);
    }
  }
  nearbyForVoice(e, t) {
    const i = [];
    for (const s of this.animals.values()) {
      const o = s.group.position.distanceTo(e);
      o <= t &&
        i.push({
          id: s.id,
          type: s.type,
          dist: o,
          baby: s.baby,
          at: s.group.position,
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
    var t;
    return ((t = this.animals.get(e)) == null ? void 0 : t.type) ?? -1;
  }
  wendigosNear(e, t) {
    const i = [];
    for (const s of this.animals.values()) {
      if (s.type !== Nt.WENDIGO) continue;
      const o = s.group.position.distanceTo(e);
      o <= t &&
        i.push({
          id: s.id,
          dist: o,
          hunting: s.fleeing,
          moving: s.moving,
          pos: s.group.position,
        });
    }
    return i.sort((s, o) => s.dist - o.dist);
  }
  positionOf(e) {
    var t;
    return (
      ((t = this.animals.get(e)) == null ? void 0 : t.group.position) ?? null
    );
  }
  nearestRideable(e, t) {
    let i = null,
      s = t;
    for (const o of this.animals.values()) {
      if (o.type !== Nt.CAMEL || o.baby || o.rider !== -1) continue;
      const a = o.group.position.distanceTo(e);
      a < s && ((s = a), (i = o));
    }
    return i ? { id: i.id, dist: s } : null;
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
      s = t;
    for (const o of this.animals.values()) {
      const a = o.group.position.distanceTo(e);
      a < s && ((s = a), (i = o));
    }
    return i ? { id: i.id, dist: s } : null;
  }
  hitboxes() {
    return [...this.animals.values()].map((e) => {
      const t = Ir(e.type, e.baby),
        i = oR(e.type);
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
