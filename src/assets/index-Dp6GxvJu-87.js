// index-Dp6GxvJu 87 — math
// Lines 55725-56030 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class RL {
  constructor(e = 110, t = !1) {
    w(this, "samples", []);
    w(this, "stamp", 0);
    w(this, "time", 0);
    w(this, "origin", 0);
    w(this, "interval", 0);
    w(this, "lag");
    w(this, "sampledAt", 0);
    ((this.delay = e), (this.adaptive = t), (this.lag = e));
  }
  reset() {
    this.samples = [];
  }
  get pushed() {
    return this.time;
  }
  clock(e = performance.now()) {
    return e - this.origin - this.lag;
  }
  push(e, t, i, s, o = performance.now()) {
    const a = this.samples.at(-1),
      r = a ? (s - this.stamp) | 0 : 0;
    if (a && r <= 0) return;
    const l =
      a &&
      e.distanceTo(a.pos) >
        Math.max(64, i.length() * Math.min(r / 1e3, 2) * 3 + 12);
    (!a || r > 3e3 || l
      ? ((this.samples = []), (this.time = 0), (this.origin = o))
      : ((this.time += r),
        r < 400 &&
          (this.interval = this.interval
            ? this.interval + (r - this.interval) * 0.15
            : r)),
      (this.stamp = s),
      this.samples.length &&
        (this.origin = Math.min(this.origin, o - this.time)),
      this.samples.push({
        time: this.time,
        pos: e.clone(),
        quat: t.clone().normalize(),
        vel: i.clone(),
      }),
      this.samples.length > 32 && this.samples.shift());
  }
  sample(e, t, i = performance.now()) {
    if (!this.samples.length) return !1;
    if (this.adaptive) {
      const l = Math.min(240, Math.max(this.delay, this.interval * 1.3 + 30)),
        c = this.sampledAt ? Math.min(100, Math.max(0, i - this.sampledAt)) : 0;
      ((this.sampledAt = i),
        (this.lag += Math.max(-c * 0.08, Math.min(c * 0.08, l - this.lag))));
    }
    const s = i - this.origin - this.lag;
    for (; this.samples.length > 2 && this.samples[1].time <= s;)
      this.samples.shift();
    const o = this.samples[0],
      a = this.samples.at(-1);
    if (s <= o.time) return (e.copy(o.pos), t.copy(o.quat), !0);
    for (let l = 1; l < this.samples.length; l++) {
      const c = this.samples[l],
        h = this.samples[l - 1];
      if (s > c.time) continue;
      const d = (s - h.time) / (c.time - h.time),
        u = (c.time - h.time) / 1e3,
        f = d * d,
        p = f * d;
      for (const m of ["x", "y", "z"]) {
        const y = c.pos[m] - h.pos[m],
          g = (T) =>
            y === 0
              ? 0
              : Math.sign(y) *
                Math.min(Math.abs(y) * 3, Math.max(0, T * u * Math.sign(y)));
        let b = g(h.vel[m]),
          S = g(c.vel[m]);
        const M = Math.hypot(b, S),
          x = Math.abs(y) * 3;
        (M > x && ((b *= x / M), (S *= x / M)),
          (e[m] =
            (2 * p - 3 * f + 1) * h.pos[m] +
            (p - 2 * f + d) * b +
            (-2 * p + 3 * f) * c.pos[m] +
            (p - f) * S));
      }
      return (t.slerpQuaternions(h.quat, c.quat, d), !0);
    }
    const r = Math.min(120, Math.max(0, s - a.time)) / 1e3;
    return (e.copy(a.pos).addScaledVector(a.vel, r), t.copy(a.quat), !0);
  }
}
const nl = 768,
  F5 = 26;
class Wq {
  constructor(e, t) {
    w(this, "positions", new Float32Array(nl * 12));
    w(this, "colors", new Float32Array(nl * 12));
    w(this, "alphas", new Float32Array(nl * 4));
    w(this, "born", new Float64Array(nl));
    w(this, "cursor", 0);
    w(this, "last", new Map());
    w(this, "colorCache", new Map());
    w(this, "mesh");
    ((this.scene = e), (this.world = t));
    const i = new ci(),
      s = new Uint16Array(nl * 6),
      o = new Float32Array(nl * 8);
    for (let r = 0; r < nl; r++) {
      const l = r * 4,
        c = r * 6;
      (s.set([l, l + 1, l + 2, l + 2, l + 1, l + 3], c),
        o.set([0, 0, 1, 0, 0, 1, 1, 1], r * 8));
    }
    (i.setIndex(new oi(s, 1)),
      i.setAttribute("position", new oi(this.positions, 3).setUsage(Mn)),
      i.setAttribute("color", new oi(this.colors, 3).setUsage(Mn)),
      i.setAttribute("markAlpha", new oi(this.alphas, 1).setUsage(Mn)),
      i.setAttribute("uv", new oi(o, 2)));
    const a = new sn({
      transparent: !0,
      depthWrite: !1,
      side: Ai,
      vertexShader: `attribute float markAlpha; attribute vec3 color; varying float vAlpha; varying vec3 vColor; varying vec2 vUv;
        void main(){vAlpha=markAlpha;vColor=color;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
      fragmentShader: `varying float vAlpha; varying vec3 vColor; varying vec2 vUv;
        void main(){float edge=smoothstep(0.0,0.15,vUv.x)*(1.0-smoothstep(0.85,1.0,vUv.x));
          float grain=.88+.12*sin(vUv.y*37.0+vUv.x*19.0);
          gl_FragColor=vec4(vColor,vAlpha*edge*grain);}`,
    });
    ((a.polygonOffset = !0),
      (a.polygonOffsetFactor = -1),
      (a.polygonOffsetUnits = -1),
      (this.mesh = new le(i, a)),
      (this.mesh.frustumCulled = !1),
      (this.mesh.renderOrder = 1),
      e.add(this.mesh));
  }
  clear() {
    (this.last.clear(),
      this.born.fill(0),
      this.alphas.fill(0),
      (this.mesh.geometry.getAttribute("markAlpha").needsUpdate = !0));
  }
  forget(e) {
    this.last.delete(e);
  }
  surface(e, t, i) {
    const s = this.world.groundAt(e, t, i + 0.8);
    if (!Number.isFinite(s) || Math.abs(s - i) > 0.75) return null;
    const o = this.world.getBlock(
        Math.floor(e),
        Math.floor(s - 0.08),
        Math.floor(t),
      ),
      a =
        o === v.SAND || o === v.SANDSTONE
          ? 7560768
          : o === v.SNOW || o === v.SNOW_LAYER
            ? 6452091
            : o === v.GRASS || o === v.SAVANNA_GRASS
              ? 2504487
              : o === v.DIRT || o === v.GRAVEL
                ? 4799024
                : 0;
    return a ? { y: s + 0.028, color: a } : null;
  }
  add(e, t, i, s, o, a, r, l) {
    const c = this.cursor++ % nl,
      h = c * 12,
      d = c * 4,
      u = Math.hypot(i - e, s - t) || 1,
      f = ((s - t) / u) * a * 0.5,
      p = (-(i - e) / u) * a * 0.5;
    this.positions.set(
      [e - f, o, t - p, e + f, o, t + p, i - f, o, s - p, i + f, o, s + p],
      h,
    );
    let m = this.colorCache.get(r);
    m || ((m = new ze(r)), this.colorCache.set(r, m));
    for (let y = 0; y < 4; y++)
      (this.colors.set([m.r, m.g, m.b], h + y * 3),
        (this.alphas[d + y] = 0.48));
    this.born[c] = l;
    for (const y of ["position", "color", "markAlpha"])
      this.mesh.geometry.getAttribute(y).needsUpdate = !0;
  }
  emit(e, t) {
    if (
      ![P.TANK, P.BTR_TURRET, P.HIMARS, P.PATRIOT].includes(e.type) ||
      e.planet !== 0 ||
      Math.abs(e.speed) < 1.2 ||
      (t && Math.hypot(e.x - t.x, e.z - t.z) > 85)
    ) {
      this.last.delete(e.id);
      return;
    }
    const i = this.last.get(e.id);
    if (!i) {
      this.last.set(e.id, { x: e.x, z: e.z, yaw: e.yaw });
      return;
    }
    const s = Math.hypot(e.x - i.x, e.z - i.z);
    if (
      s < 0.42 ||
      (this.last.set(e.id, { x: e.x, z: e.z, yaw: e.yaw }),
      s > 2.2 || Math.abs(e.yaw - i.yaw) > 0.45)
    )
      return;
    const o = ah(e.type).halfWidth * 0.72,
      a = performance.now();
    for (const r of [-1, 1]) {
      const l = i.x + Math.cos(i.yaw) * o * r,
        c = i.z - Math.sin(i.yaw) * o * r,
        h = e.x + Math.cos(e.yaw) * o * r,
        d = e.z - Math.sin(e.yaw) * o * r,
        u = this.surface(h, d, e.y);
      u &&
        this.add(l, c, h, d, u.y, e.type === P.TANK ? 0.39 : 0.25, u.color, a);
    }
  }
  update() {
    const e = performance.now();
    let t = !1;
    for (let i = 0; i < nl; i++) {
      if (!this.born[i]) continue;
      const s = (e - this.born[i]) / 1e3,
        o = s >= F5 ? 0 : 0.48 * Math.min(1, (F5 - s) / 9);
      s >= F5 && (this.born[i] = 0);
      for (let a = 0; a < 4; a++) this.alphas[i * 4 + a] = o;
      t = !0;
    }
    t && (this.mesh.geometry.getAttribute("markAlpha").needsUpdate = !0);
  }
}
let fc = null;
function CL(n) {
  return () => ((n = (n * 1664525 + 1013904223) >>> 0), n / 4294967296);
}
function kL() {
  if (fc) return fc;
  const n = 256,
    e = document.createElement("canvas");
  e.width = e.height = n;
  const t = e.getContext("2d"),
    i = CL(24301);
  ((t.fillStyle = "rgb(246,246,246)"), t.fillRect(0, 0, n, n));
  for (let a = 0; a < 60; a++) {
    const r = i() * n,
      l = i() * n,
      c = 18 + i() * 46,
      h = 215 + i() * 40,
      d = t.createRadialGradient(r, l, 0, r, l, c);
    (d.addColorStop(0, `rgba(${h},${h},${h},0.45)`),
      d.addColorStop(1, `rgba(${h},${h},${h},0)`));
    for (const u of [-n, 0, n])
      for (const f of [-n, 0, n])
        (t.save(),
          t.translate(u, f),
          (t.fillStyle = d),
          t.fillRect(r - c, l - c, c * 2, c * 2),
          t.restore());
  }
  for (let a = 0; a < 70; a++) {
    const r = Math.floor(i() * n),
      l = i() * n,
      c = 20 + i() * 70,
      h = 0.05 + i() * 0.1;
    ((t.fillStyle = `rgba(70,64,52,${h})`),
      t.fillRect(r, l, 1 + Math.floor(i() * 2), c),
      l + c > n && t.fillRect(r, l - n, 1, c));
  }
  t.fillStyle = "rgba(40,40,36,0.36)";
  for (let a = 0; a < n; a += 64)
    (t.fillRect(a, 0, 1, n), t.fillRect(0, a + 32 * ((a / 64) % 2), n, 1));
  t.fillStyle = "rgba(255,255,255,0.18)";
  for (let a = 0; a < n; a += 64)
    (t.fillRect(a + 1, 0, 1, n),
      t.fillRect(0, a + 1 + 32 * ((a / 64) % 2), n, 1));
  t.fillStyle = "rgba(30,30,28,0.22)";
  for (let a = 0; a < n; a += 64)
    for (let r = 6; r < n; r += 12)
      (t.fillRect(a + 4, r, 2, 2),
        t.fillRect(r, a + 4 + 32 * ((a / 64) % 2), 2, 2));
  const s = t.getImageData(0, 0, n, n),
    o = s.data;
  for (let a = 0; a < o.length; a += 4) {
    const r = (i() - 0.5) * 16;
    ((o[a] = Math.max(0, Math.min(255, o[a] + r))),
      (o[a + 1] = Math.max(0, Math.min(255, o[a + 1] + r))),
      (o[a + 2] = Math.max(0, Math.min(255, o[a + 2] + r))));
  }
  t.putImageData(s, 0, 0);
  for (let a = 0; a < 140; a++) {
    const r = i() < 0.5 ? "rgba(255,255,255,0.22)" : "rgba(35,30,24,0.3)";
    ((t.fillStyle = r), t.fillRect(i() * n, i() * n, 1 + i() * 3, 1 + i() * 2));
  }
  return (
    (fc = new bi(e)),
    (fc.wrapS = fc.wrapT = Fr),
    (fc.colorSpace = vi),
    (fc.anisotropy = 4),
    fc
  );
}
const i6 = new Map();
