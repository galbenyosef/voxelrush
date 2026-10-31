// index-BeUlFSPp 252 — math
// Lines 133789-133994 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class L0e {
  constructor(e, t, i, n) {
    ((this.scene = e),
      (this.seed = t),
      (this.precipitationSurfaceY = n),
      (this.count = i ? 280 : 620),
      (this.pos = new Float32Array(this.count * 3)),
      (this.velocities = new Float32Array(this.count)),
      (this.surfaces = new Float32Array(this.count)),
      (this.recycleDelay = new Float32Array(this.count)));
    for (let a = 0; a < this.count; a++)
      ((this.pos[a * 3 + 1] = -999),
        (this.velocities[a] = 0.75 + Math.random() * 0.7));
    const o = new oi();
    (o.setAttribute("position", new qt(this.pos, 3)),
      (this.points = new Ld(
        o,
        new Dm({
          color: 11458815,
          size: i ? 0.085 : 0.065,
          transparent: !0,
          opacity: 0.72,
          depthWrite: !1,
        }),
      )),
      (this.points.frustumCulled = !1),
      (this.points.visible = !1),
      (this.points.renderOrder = zi.particle),
      e.add(this.points));
  }
  mode = 0;
  particleScale = 1;
  points;
  pos;
  velocities;
  surfaces;
  recycleDelay;
  windX = 0;
  windZ = 0;
  count;
  lightning = [];
  hdrTint = 1;
  boltBoost = 1;
  lightningFlash = 0;
  setMode(e) {
    if (((this.mode = e), this.mode <= 0)) {
      this.points.visible = !1;
      for (const t of this.lightning.splice(0))
        (this.scene.remove(t.line),
          t.line.geometry.dispose(),
          t.line.material.dispose());
    }
  }
  overcast() {
    return this.mode === 2
      ? 1
      : this.mode === 1
        ? 0.82
        : this.mode === 3
          ? 0.72
          : 0;
  }
  rainAt(e, t) {
    if (this.mode !== 1 && this.mode !== 2) return 0;
    const i = Zr(this.seed, e, t);
    return i === "desert" ||
      i === "winter" ||
      i === "mountains" ||
      i === "alpine"
      ? 0
      : 1;
  }
  setShaderLighting(e) {
    ((this.hdrTint = e ?? 1), (this.boltBoost = e === null ? 1 : 9));
  }
  setWind(e, t) {
    ((this.windX = Number.isFinite(e) ? e : 0),
      (this.windZ = Number.isFinite(t) ? t : 0));
  }
  setParticleScale(e) {
    if (
      ((this.particleScale = Math.max(0, Number.isFinite(e) ? e : 0)),
      !(this.particleScale > 0))
    ) {
      this.points.visible = !1;
      for (const t of this.lightning.splice(0))
        (this.scene.remove(t.line),
          t.line.geometry.dispose(),
          t.line.material.dispose());
    }
  }
  dispose() {
    (this.scene.remove(this.points),
      this.points.geometry.dispose(),
      this.points.material.dispose());
    for (const e of this.lightning.splice(0))
      (this.scene.remove(e.line),
        e.line.geometry.dispose(),
        e.line.material.dispose());
  }
  strike(e, t, i) {
    if (this.particleScale <= 0) return;
    const n = [];
    let o = e + (Math.random() - 0.5) * 2,
      a = i + (Math.random() - 0.5) * 2;
    n.push(o, t + 75, a);
    for (let c = t + 65; c > t; c -= 8)
      ((o += (Math.random() - 0.5) * 5),
        (a += (Math.random() - 0.5) * 5),
        n.push(o, c, a));
    n.push(e, t, i);
    const r = new oi();
    r.setAttribute("position", new Dt(n, 3));
    const l = new md(
      r,
      new Zo({
        color: new Ge(15398655).multiplyScalar(this.boltBoost),
        transparent: !0,
        opacity: 1,
      }),
    );
    ((l.frustumCulled = !1),
      (l.renderOrder = zi.particle),
      this.scene.add(l),
      this.lightning.push({ line: l, life: 0.24 }),
      (this.lightningFlash = 1));
  }
  update(e, t) {
    this.lightningFlash = Math.max(0, this.lightningFlash - e * 4);
    const i = Zr(this.seed, t.x, t.z),
      n =
        this.mode === 3 ||
        ((this.mode === 1 || this.mode === 2) &&
          (i === "winter" || i === "mountains" || i === "alpine")),
      o = this.particleScale > 0 && this.mode > 0 && (n || i !== "desert");
    if (((this.points.visible = o), o)) {
      const a = this.points.material;
      (a.color.setHex(n ? 16777215 : 10341613).multiplyScalar(this.hdrTint),
        (a.size = n ? 0.14 : 0.065));
      const r = 25,
        l = 22;
      for (let c = 0; c < this.count; c++) {
        const h = c * 3,
          d = this.pos[h + 1] < -900,
          u =
            Math.abs(this.pos[h] - t.x) <= r &&
            Math.abs(this.pos[h + 2] - t.z) <= r;
        if (d && u && this.recycleDelay[c] > 0) {
          this.recycleDelay[c] -= e;
          continue;
        }
        this.pos[h + 1] -= e * this.velocities[c] * (n ? 4.5 : 24);
        const f = n ? 2.35 : 0.7;
        ((this.pos[h] += this.windX * e * f),
          (this.pos[h + 2] += this.windZ * e * f));
        const p = Math.max(t.y - 3, this.surfaces[c] + 1.03);
        if (
          this.pos[h + 1] < p ||
          Math.abs(this.pos[h] - t.x) > r ||
          Math.abs(this.pos[h + 2] - t.z) > r
        ) {
          const m = t.x + (Math.random() - 0.5) * r * 2,
            g = t.z + (Math.random() - 0.5) * r * 2,
            y = this.precipitationSurfaceY(m, g, t.y - 4),
            b = t.y + l,
            S = Math.max(y + 1.05, t.y - 2);
          ((this.pos[h] = m),
            (this.pos[h + 2] = g),
            (this.surfaces[c] = y),
            y >= b - 0.25
              ? ((this.pos[h + 1] = -999),
                (this.recycleDelay[c] = 0.45 + Math.random() * 0.8))
              : ((this.pos[h + 1] = S + Math.random() * Math.max(1, b - S)),
                (this.recycleDelay[c] = 0)));
        } else
          n &&
            (this.pos[h] += Math.sin(performance.now() * 0.001 + c) * e * 0.3);
      }
      this.points.geometry.attributes.position.needsUpdate = !0;
    }
    for (let a = this.lightning.length - 1; a >= 0; a--) {
      const r = this.lightning[a];
      ((r.life -= e),
        (r.line.material.opacity = Math.max(0, r.life * 5)),
        r.life <= 0 &&
          (this.scene.remove(r.line),
          r.line.geometry.dispose(),
          r.line.material.dispose(),
          this.lightning.splice(a, 1)));
    }
  }
}
function I0e(s) {
  let e = 2166136261;
  for (let i = 0; i < s.length; i++)
    e = Math.imul(e ^ s.charCodeAt(i), 16777619);
  return new Ge().setHSL(((e >>> 0) % 360) / 360, 0.68, 0.52).getHex();
}
function kL(s) {
  return s.state === 2 && s.owner
    ? I0e(s.owner)
    : s.state === 1
      ? 14738920
      : 11874095;
}
const ty = (s) => s.kind >= 1 && s.kind <= 4;
