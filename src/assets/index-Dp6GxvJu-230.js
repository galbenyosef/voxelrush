// index-Dp6GxvJu 230 — math
// Lines 126428-126742 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class ise {
  constructor(e, t) {
    w(this, "sites", new Map());
    w(this, "visuals", new Map());
    w(this, "quality", 1);
    w(this, "sirenCooldown", 0);
    w(this, "elapsed", 0);
    w(this, "enabled", !0);
    ((this.scene = e), (this.playSiren = t));
  }
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
    for (const [i, s] of this.visuals)
      t.has(i) || (this.disposeVisual(s), this.visuals.delete(i));
    this.sites.clear();
    for (const i of e) {
      if ((this.sites.set(i.id, i), i.kind >= 5)) continue;
      const s = this.visuals.get(i.id);
      if (!s) {
        this.createVisual(i);
        continue;
      }
      (s.root.position.copy(i.flag), s.flagMaterial.color.setHex(e8(i)));
    }
  }
  list() {
    return [...this.sites.values()];
  }
  nearestFlag(e, t) {
    let i = null,
      s = t;
    for (const o of this.sites.values()) {
      if (o.kind < 1 || o.kind > 4) continue;
      const a = o.flag.distanceTo(e);
      a <= s && ((s = a), (i = o));
    }
    return i;
  }
  nearestVillage(e, t) {
    let i = null,
      s = t;
    for (const o of this.sites.values()) {
      if (o.kind !== 0) continue;
      const a = o.command.distanceTo(e);
      a <= s && ((s = a), (i = o));
    }
    return i;
  }
  nearestCommand(e, t) {
    let i = null,
      s = t;
    for (const o of this.sites.values()) {
      if (o.kind < 1 || o.kind > 4) continue;
      const a = o.command.distanceTo(e);
      a <= s && ((s = a), (i = o));
    }
    return i;
  }
  update(e, t) {
    if (!this.enabled) {
      for (const s of this.visuals.values()) s.root.visible = !1;
      return;
    }
    ((this.elapsed += e),
      (this.sirenCooldown = Math.max(0, this.sirenCooldown - e)));
    let i = !1;
    for (const [s, o] of this.sites) {
      const a = this.visuals.get(s);
      if (
        !a ||
        ((a.root.visible =
          t.distanceToSquared(a.root.position) < (o.radius + 230) ** 2),
        !a.root.visible)
      )
        continue;
      const r = o.alarm ? 0.65 + Math.sin(this.elapsed * 12) * 0.35 : 0;
      ((a.beacon.visible = this.quality > 0 && o.alarm),
        (a.beacon.rotation.y += e * 6),
        (a.beacon.material.opacity = r),
        (a.beam.visible = this.quality > 0 && o.alarm),
        (a.beam.material.opacity = 0.06 + r * 0.12),
        a.light &&
          ((a.light.visible = o.alarm),
          (a.light.intensity = o.alarm ? 5 + r * 4 : 0),
          a.target &&
            o.alarm &&
            (a.target.position.copy(t).sub(a.root.position),
            (a.target.position.y = Math.max(0, a.target.position.y)))),
        (a.flag.rotation.y = Math.sin(this.elapsed * 2.2 + o.x * 0.01) * 0.09),
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
    for (const e of this.sites.values()) e.kind !== 5 && this.createVisual(e);
  }
  disposeVisual(e) {
    (this.scene.remove(e.root),
      e.root.traverse((t) => {
        var o;
        const i = t;
        (o = i.geometry) == null || o.dispose();
        const s = i.material
          ? Array.isArray(i.material)
            ? i.material
            : [i.material]
          : [];
        for (const a of s) a.dispose();
      }));
  }
  createVisual(e) {
    const t = new pe();
    t.position.set(e.flag.x, e.flag.y, e.flag.z);
    const i = new Pr({ color: 7502209, metalness: 0.65, roughness: 0.4 }),
      s = new le(new xt(0.065, 0.09, 5.6, 7), i);
    ((s.position.y = 2.8), (s.castShadow = !0));
    const o = new gi({ color: e8(e), side: Ai }),
      a = new le(new pn(2.25, 1.15, 1, 1), o);
    (a.position.set(1.12, 4.75, 0), t.add(s, a));
    const r = new qt({
        color: 16723997,
        transparent: !0,
        opacity: 0.8,
        depthWrite: !1,
      }),
      l = new le(new xt(0.18, 0.28, 0.34, 8), r);
    (l.position.set(0, 5.72, 0), t.add(l));
    const c = new qt({
        color: 16730671,
        transparent: !0,
        opacity: 0.12,
        depthWrite: !1,
        side: Ai,
      }),
      h = new le(new ma(1.5, 13, 12, 1, !0), c);
    (h.position.set(0, 11.8, 0), (h.rotation.z = Math.PI), t.add(h));
    let d = null,
      u = null;
    (this.quality >= 2 &&
      ((d = new X8(
        16768466,
        0,
        Math.max(75, e.radius * 1.2),
        Math.PI / 8,
        0.45,
        1.2,
      )),
      d.position.set(0, 12, 0),
      (d.castShadow = !1),
      (d.visible = !1),
      (u = new $t()),
      t.add(d, u),
      (d.target = u)),
      (l.visible = h.visible = e.alarm && this.quality > 0),
      this.scene.add(t),
      this.visuals.set(e.id, {
        root: t,
        flag: a,
        flagMaterial: o,
        beacon: l,
        beam: h,
        light: d,
        target: u,
      }));
  }
}
class nse {
  constructor(e, t) {
    w(this, "detail", 1);
    w(this, "windX", 0);
    w(this, "windZ", 0);
    w(this, "scanT", 0);
    w(this, "emitT", 0);
    w(this, "sources", []);
    w(this, "smokePos", new k());
    ((this.world = e), (this.effects = t));
  }
  setDetail(e) {
    ((this.detail = e), e === 0 && (this.sources.length = 0), (this.scanT = 0));
  }
  setWind(e, t) {
    ((this.windX = e), (this.windZ = t));
  }
  furnaceOutlet(e, t, i) {
    let s = t + 1;
    for (let o = t + 1; o < Kt; o++) {
      const a = this.world.getBlock(e, o, i);
      if (a === v.WATER || a === v.LAVA || this.world.isSolidAt(e, o, i))
        return -1;
      for (const [r, l] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ])
        this.world.isSolidAt(e + r, o, i + l) && (s = Math.min(Kt - 1, o + 1));
    }
    return s;
  }
  rescan(e) {
    if (((this.sources.length = 0), this.detail === 0)) return;
    const t = this.detail === 2 ? 22 : 13,
      i = this.detail === 2 ? 11 : 7,
      s = this.detail === 2 ? 15 : 10,
      o = this.detail === 2 ? 28 : 10,
      a = Math.floor(e.x),
      r = Math.floor(e.y),
      l = Math.floor(e.z),
      c = Math.max(1, r - i),
      h = Math.min(Kt - 1, r + s);
    e: for (let d = a - t; d <= a + t; d++)
      for (let u = l - t; u <= l + t; u++)
        if (this.world.isLoaded(d, u))
          for (let f = c; f <= h; f++) {
            const p = this.world.getBlock(d, f, u),
              m = p === v.FURNACE && (this.world.getMeta(d, f, u) & Qn) !== 0;
            if (p !== v.FIRE && p !== v.CAMPFIRE && !m) continue;
            const y = m ? this.furnaceOutlet(d, f, u) : -1;
            if (m && y >= 0) {
              if (
                (this.sources.push({
                  x: d,
                  y: f,
                  z: u,
                  emitY: y + 0.08,
                  ceilingY: y,
                  indoor: !1,
                  furnace: !0,
                  phase: Math.random() * Math.PI * 2,
                }),
                this.sources.length >= o)
              )
                break e;
              continue;
            }
            let g = f + 1;
            const b = Math.min(Kt - 1, f + (this.detail === 2 ? 15 : 10));
            for (; g <= b && !this.world.isSolidAt(d, g, u);) g++;
            const S = g <= b;
            if (
              (this.sources.push({
                x: d,
                y: f,
                z: u,
                emitY: f + 1.05,
                ceilingY: S ? g : f + 1,
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
      s = this.detail === 2 ? 4.5 : 2.3;
    let o = e.x + Math.sin(i * 1.7) * s,
      a = e.z + Math.cos(i * 1.3) * s;
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
      for (const s of this.sources) this.emit(s, i);
    }
  }
}
