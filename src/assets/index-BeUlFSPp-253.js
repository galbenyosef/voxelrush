// index-BeUlFSPp 253 — math
// Lines 133995-134306 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class P0e {
  constructor(e, t) {
    ((this.scene = e), (this.playSiren = t));
  }
  sites = new Map();
  visuals = new Map();
  quality = 1;
  sirenCooldown = 0;
  elapsed = 0;
  enabled = !0;
  setEnabled(e) {
    this.enabled = e;
    for (const t of this.visuals.values()) t.root.visible = e;
  }
  clear() {
    this.setSites([]);
  }
  setQuality(e) {
    e !== this.quality && ((this.quality = e), this.rebuild());
  }
  setSites(e) {
    const t = new Set(e.map((i) => i.id));
    for (const [i, n] of this.visuals)
      t.has(i) || (this.disposeVisual(n), this.visuals.delete(i));
    this.sites.clear();
    for (const i of e) {
      if ((this.sites.set(i.id, i), !ty(i))) continue;
      const n = this.visuals.get(i.id);
      if (!n) {
        this.createVisual(i);
        continue;
      }
      (n.root.position.copy(i.flag), n.flagMaterial.color.setHex(kL(i)));
    }
  }
  list() {
    return [...this.sites.values()];
  }
  nearestFlag(e, t) {
    let i = null,
      n = t;
    for (const o of this.sites.values()) {
      if (!ty(o)) continue;
      const a = o.flag.distanceTo(e);
      a <= n && ((n = a), (i = o));
    }
    return i;
  }
  nearestVillage(e, t) {
    let i = null,
      n = t;
    for (const o of this.sites.values()) {
      if (o.kind !== 0) continue;
      const a = o.command.distanceTo(e);
      a <= n && ((n = a), (i = o));
    }
    return i;
  }
  nearestCommand(e, t) {
    let i = null,
      n = t;
    for (const o of this.sites.values()) {
      if (!ty(o)) continue;
      const a = o.command.distanceTo(e);
      a <= n && ((n = a), (i = o));
    }
    return i;
  }
  lampPos = new k();
  lampAim = new k();
  update(e, t) {
    if (!this.enabled) {
      for (const n of this.visuals.values()) n.root.visible = !1;
      return;
    }
    ((this.elapsed += e),
      (this.sirenCooldown = Math.max(0, this.sirenCooldown - e)));
    let i = !1;
    for (const [n, o] of this.sites) {
      const a = this.visuals.get(n);
      if (
        !a ||
        ((a.root.visible =
          t.distanceToSquared(a.root.position) < (o.radius + 230) ** 2),
        !a.root.visible)
      )
        continue;
      const r = o.alarm ? 0.65 + Math.sin(this.elapsed * 12) * 0.35 : 0;
      if (
        ((a.beacon.visible = this.quality > 0 && o.alarm),
        (a.beacon.rotation.y += e * 6),
        (a.beacon.material.opacity = r),
        (a.beam.visible = this.quality > 0 && o.alarm),
        (a.beam.material.opacity = 0.06 + r * 0.12),
        a.lamp && (a.lamp.setActive(o.alarm), o.alarm))
      ) {
        a.lamp.setStrength((5 + r * 4) / 9);
        const l = a.lamp.root.getWorldPosition(this.lampPos);
        (this.lampAim.set(t.x, Math.max(a.root.position.y, t.y), t.z),
          a.lamp.root.lookAt(this.lampAim.subVectors(l, this.lampAim).add(l)));
      }
      ((a.flag.rotation.y = Math.sin(this.elapsed * 2.2 + o.x * 0.01) * 0.09),
        o.alarm &&
          t.distanceToSquared(a.root.position) < (o.radius + 90) ** 2 &&
          (i = !0));
    }
    i &&
      this.sirenCooldown <= 0 &&
      ((this.sirenCooldown = 9.5), this.playSiren());
  }
  rebuild() {
    for (const e of this.visuals.values()) this.disposeVisual(e);
    this.visuals.clear();
    for (const e of this.sites.values()) ty(e) && this.createVisual(e);
  }
  disposeVisual(e) {
    (e.lamp?.dispose(),
      this.scene.remove(e.root),
      e.root.traverse((t) => {
        const i = t;
        i.geometry?.dispose();
        const n = i.material
          ? Array.isArray(i.material)
            ? i.material
            : [i.material]
          : [];
        for (const o of n) o.dispose();
      }));
  }
  createVisual(e) {
    const t = new re();
    t.position.set(e.flag.x, e.flag.y, e.flag.z);
    const i = new El({ color: 7502209, metalness: 0.65, roughness: 0.4 }),
      n = new Q(new Tt(0.065, 0.09, 5.6, 7), i);
    ((n.position.y = 2.8), (n.castShadow = !0));
    const o = new Pi({ color: kL(e), side: Mi }),
      a = new Q(new ms(2.25, 1.15, 1, 1), o);
    (a.position.set(1.12, 4.75, 0), t.add(n, a));
    const r = new Zt({
        color: 16723997,
        transparent: !0,
        opacity: 0.8,
        depthWrite: !1,
      }),
      l = new Q(new Tt(0.18, 0.28, 0.34, 8), r);
    (l.position.set(0, 5.72, 0), t.add(l));
    const c = new Zt({
        color: 16730671,
        transparent: !0,
        opacity: 0.12,
        depthWrite: !1,
        side: Mi,
      }),
      h = new Q(new fa(1.5, 13, 12, 1, !0), c);
    (h.position.set(0, 11.8, 0),
      (h.rotation.z = Math.PI),
      t.add(h),
      (l.visible = h.visible = e.alarm && this.quality > 0),
      this.scene.add(t));
    let d = null;
    (this.quality >= 2 &&
      ((d = new Y5(t, {
        range: Math.max(75, e.radius * 1.2),
        angle: Math.PI / 8,
        color: 16768466,
        intensity: 9,
        priority: 1,
      })),
      d.root.position.set(0, 12, 0)),
      this.visuals.set(e.id, {
        root: t,
        flag: a,
        flagMaterial: o,
        beacon: l,
        beam: h,
        lamp: d,
      }));
  }
}
class O0e {
  constructor(e, t) {
    ((this.world = e), (this.effects = t));
  }
  detail = 1;
  windX = 0;
  windZ = 0;
  scanT = 0;
  emitT = 0;
  sources = [];
  smokePos = new k();
  setDetail(e) {
    ((this.detail = e), e === 0 && (this.sources.length = 0), (this.scanT = 0));
  }
  setWind(e, t) {
    ((this.windX = e), (this.windZ = t));
  }
  furnaceOutlet(e, t, i) {
    let n = t + 1;
    for (let o = t + 1; o < jt; o++) {
      const a = this.world.getBlock(e, o, i);
      if (a === v.WATER || a === v.LAVA || this.world.isSolidAt(e, o, i))
        return -1;
      for (const [r, l] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ])
        this.world.isSolidAt(e + r, o, i + l) && (n = Math.min(jt - 1, o + 1));
    }
    return n;
  }
  rescan(e) {
    if (((this.sources.length = 0), this.detail === 0)) return;
    const t = this.detail === 2 ? 22 : 13,
      i = this.detail === 2 ? 11 : 7,
      n = this.detail === 2 ? 15 : 10,
      o = this.detail === 2 ? 28 : 10,
      a = Math.floor(e.x),
      r = Math.floor(e.y),
      l = Math.floor(e.z),
      c = Math.max(1, r - i),
      h = Math.min(jt - 1, r + n);
    e: for (let d = a - t; d <= a + t; d++)
      for (let u = l - t; u <= l + t; u++)
        if (this.world.isLoaded(d, u))
          for (let f = c; f <= h; f++) {
            const p = this.world.getBlock(d, f, u),
              m = p === v.FURNACE && (this.world.getMeta(d, f, u) & fn) !== 0;
            if (p !== v.FIRE && p !== v.CAMPFIRE && !m) continue;
            const g = m ? this.furnaceOutlet(d, f, u) : -1;
            if (m && g >= 0) {
              if (
                (this.sources.push({
                  x: d,
                  y: f,
                  z: u,
                  emitY: g + 0.08,
                  ceilingY: g,
                  indoor: !1,
                  furnace: !0,
                  phase: Math.random() * Math.PI * 2,
                }),
                this.sources.length >= o)
              )
                break e;
              continue;
            }
            let y = f + 1;
            const b = Math.min(jt - 1, f + (this.detail === 2 ? 15 : 10));
            for (; y <= b && !this.world.isSolidAt(d, y, u);) y++;
            const S = y <= b;
            if (
              (this.sources.push({
                x: d,
                y: f,
                z: u,
                emitY: f + 1.05,
                ceilingY: S ? y : f + 1,
                indoor: S,
                furnace: m,
                phase: Math.random() * Math.PI * 2,
              }),
              this.sources.length >= o)
            )
              break e;
          }
  }
  emit(e, t) {
    if (
      (this.smokePos.set(e.x + 0.5, e.emitY, e.z + 0.5),
      this.effects.fireSmoke(
        this.smokePos,
        this.windX,
        this.windZ,
        !1,
        e.furnace ? 1.7 : 1,
      ),
      !e.indoor)
    )
      return;
    const i = t * 35e-5 + e.phase,
      n = this.detail === 2 ? 4.5 : 2.3;
    let o = e.x + Math.sin(i * 1.7) * n,
      a = e.z + Math.cos(i * 1.3) * n;
    const r = e.ceilingY - 0.42;
    for (let l = 0; l < 4 && this.world.isSolidAt(o, r, a); l++)
      ((o = (o + e.x + 0.5) * 0.5), (a = (a + e.z + 0.5) * 0.5));
    this.world.isSolidAt(o, r, a) ||
      (this.smokePos.set(o, r, a),
      this.effects.fireSmoke(
        this.smokePos,
        this.windX,
        this.windZ,
        !0,
        e.furnace ? 1.7 : 1,
      ));
  }
  update(e, t, i) {
    if (
      this.detail !== 0 &&
      ((this.scanT -= e),
      this.scanT <= 0 &&
        ((this.scanT = this.detail === 2 ? 0.75 : 1.15), this.rescan(t)),
      (this.emitT -= e),
      !(this.emitT > 0))
    ) {
      this.emitT = this.detail === 2 ? 0.14 : 0.28;
      for (const n of this.sources) this.emit(n, i);
    }
  }
}
