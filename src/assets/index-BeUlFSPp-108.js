// index-BeUlFSPp 108 — math
// Lines 63126-63431 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class C7 {
  constructor(e = 110, t = !1) {
    ((this.delay = e), (this.adaptive = t), (this.lag = e));
  }
  samples = [];
  stamp = 0;
  time = 0;
  origin = 0;
  interval = 0;
  lag;
  sampledAt = 0;
  reset() {
    this.samples = [];
  }
  get pushed() {
    return this.time;
  }
  clock(e = performance.now()) {
    return e - this.origin - this.lag;
  }
  push(e, t, i, n, o = performance.now()) {
    const a = this.samples.at(-1),
      r = a ? (n - this.stamp) | 0 : 0;
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
      (this.stamp = n),
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
    const n = i - this.origin - this.lag;
    for (; this.samples.length > 2 && this.samples[1].time <= n;)
      this.samples.shift();
    const o = this.samples[0],
      a = this.samples.at(-1);
    if (n <= o.time) return (e.copy(o.pos), t.copy(o.quat), !0);
    for (let l = 1; l < this.samples.length; l++) {
      const c = this.samples[l],
        h = this.samples[l - 1];
      if (n > c.time) continue;
      const d = (n - h.time) / (c.time - h.time),
        u = (c.time - h.time) / 1e3,
        f = d * d,
        p = f * d;
      for (const m of ["x", "y", "z"]) {
        const g = c.pos[m] - h.pos[m],
          y = (A) =>
            g === 0
              ? 0
              : Math.sign(g) *
                Math.min(Math.abs(g) * 3, Math.max(0, A * u * Math.sign(g)));
        let b = y(h.vel[m]),
          S = y(c.vel[m]);
        const M = Math.hypot(b, S),
          E = Math.abs(g) * 3;
        (M > E && ((b *= E / M), (S *= E / M)),
          (e[m] =
            (2 * p - 3 * f + 1) * h.pos[m] +
            (p - 2 * f + d) * b +
            (-2 * p + 3 * f) * c.pos[m] +
            (p - f) * S));
      }
      return (t.slerpQuaternions(h.quat, c.quat, d), !0);
    }
    const r = Math.min(120, Math.max(0, n - a.time)) / 1e3;
    return (e.copy(a.pos).addScaledVector(a.vel, r), t.copy(a.quat), !0);
  }
}
const Kl = 768,
  sw = 26;
class OQ {
  constructor(e, t) {
    ((this.scene = e), (this.world = t));
    const i = new oi(),
      n = new Uint16Array(Kl * 6),
      o = new Float32Array(Kl * 8);
    for (let r = 0; r < Kl; r++) {
      const l = r * 4,
        c = r * 6;
      (n.set([l, l + 1, l + 2, l + 2, l + 1, l + 3], c),
        o.set([0, 0, 1, 0, 0, 1, 1, 1], r * 8));
    }
    (i.setIndex(new qt(n, 1)),
      i.setAttribute("position", new qt(this.positions, 3).setUsage(Bi)),
      i.setAttribute("color", new qt(this.colors, 3).setUsage(Bi)),
      i.setAttribute("markAlpha", new qt(this.alphas, 1).setUsage(Bi)),
      i.setAttribute("uv", new qt(o, 2)));
    const a = new Gi({
      transparent: !0,
      depthWrite: !1,
      side: Mi,
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
      (this.mesh = new Q(i, a)),
      (this.mesh.frustumCulled = !1),
      (this.mesh.renderOrder = 1),
      e.add(this.mesh));
  }
  positions = new Float32Array(Kl * 12);
  colors = new Float32Array(Kl * 12);
  alphas = new Float32Array(Kl * 4);
  born = new Float64Array(Kl);
  cursor = 0;
  last = new Map();
  colorCache = new Map();
  mesh;
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
    const n = this.world.groundAt(e, t, i + 0.8);
    if (!Number.isFinite(n) || Math.abs(n - i) > 0.75) return null;
    const o = this.world.getBlock(
        Math.floor(e),
        Math.floor(n - 0.08),
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
    return a ? { y: n + 0.028, color: a } : null;
  }
  add(e, t, i, n, o, a, r, l) {
    const c = this.cursor++ % Kl,
      h = c * 12,
      d = c * 4,
      u = Math.hypot(i - e, n - t) || 1,
      f = ((n - t) / u) * a * 0.5,
      p = (-(i - e) / u) * a * 0.5;
    this.positions.set(
      [e - f, o, t - p, e + f, o, t + p, i - f, o, n - p, i + f, o, n + p],
      h,
    );
    let m = this.colorCache.get(r);
    m || ((m = new Ge(r)), this.colorCache.set(r, m));
    for (let g = 0; g < 4; g++)
      (this.colors.set([m.r, m.g, m.b], h + g * 3),
        (this.alphas[d + g] = 0.48));
    this.born[c] = l;
    for (const g of ["position", "color", "markAlpha"])
      this.mesh.geometry.getAttribute(g).needsUpdate = !0;
  }
  emit(e, t) {
    if (
      ![L.TANK, L.BTR_TURRET, L.HIMARS, L.PATRIOT].includes(e.type) ||
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
    const n = Math.hypot(e.x - i.x, e.z - i.z);
    if (
      n < 0.42 ||
      (this.last.set(e.id, { x: e.x, z: e.z, yaw: e.yaw }),
      n > 2.2 || Math.abs(e.yaw - i.yaw) > 0.45)
    )
      return;
    const o = eh(e.type).halfWidth * 0.72,
      a = performance.now();
    for (const r of [-1, 1]) {
      const l = i.x + Math.cos(i.yaw) * o * r,
        c = i.z - Math.sin(i.yaw) * o * r,
        h = e.x + Math.cos(e.yaw) * o * r,
        d = e.z - Math.sin(e.yaw) * o * r,
        u = this.surface(h, d, e.y);
      u &&
        this.add(l, c, h, d, u.y, e.type === L.TANK ? 0.39 : 0.25, u.color, a);
    }
  }
  update() {
    const e = performance.now();
    let t = !1;
    for (let i = 0; i < Kl; i++) {
      if (!this.born[i]) continue;
      const n = (e - this.born[i]) / 1e3,
        o = n >= sw ? 0 : 0.48 * Math.min(1, (sw - n) / 9);
      n >= sw && (this.born[i] = 0);
      for (let a = 0; a < 4; a++) this.alphas[i * 4 + a] = o;
      t = !0;
    }
    t && (this.mesh.geometry.getAttribute("markAlpha").needsUpdate = !0);
  }
}
let n0 = null;
function L7(s) {
  return () => ((s = (s * 1664525 + 1013904223) >>> 0), s / 4294967296);
}
function I7() {
  if (n0) return n0;
  const s = 256,
    e = document.createElement("canvas");
  e.width = e.height = s;
  const t = e.getContext("2d"),
    i = L7(24301);
  ((t.fillStyle = "rgb(246,246,246)"), t.fillRect(0, 0, s, s));
  for (let a = 0; a < 60; a++) {
    const r = i() * s,
      l = i() * s,
      c = 18 + i() * 46,
      h = 215 + i() * 40,
      d = t.createRadialGradient(r, l, 0, r, l, c);
    (d.addColorStop(0, `rgba(${h},${h},${h},0.45)`),
      d.addColorStop(1, `rgba(${h},${h},${h},0)`));
    for (const u of [-s, 0, s])
      for (const f of [-s, 0, s])
        (t.save(),
          t.translate(u, f),
          (t.fillStyle = d),
          t.fillRect(r - c, l - c, c * 2, c * 2),
          t.restore());
  }
  for (let a = 0; a < 70; a++) {
    const r = Math.floor(i() * s),
      l = i() * s,
      c = 20 + i() * 70,
      h = 0.05 + i() * 0.1;
    ((t.fillStyle = `rgba(70,64,52,${h})`),
      t.fillRect(r, l, 1 + Math.floor(i() * 2), c),
      l + c > s && t.fillRect(r, l - s, 1, c));
  }
  t.fillStyle = "rgba(40,40,36,0.36)";
  for (let a = 0; a < s; a += 64)
    (t.fillRect(a, 0, 1, s), t.fillRect(0, a + 32 * ((a / 64) % 2), s, 1));
  t.fillStyle = "rgba(255,255,255,0.18)";
  for (let a = 0; a < s; a += 64)
    (t.fillRect(a + 1, 0, 1, s),
      t.fillRect(0, a + 1 + 32 * ((a / 64) % 2), s, 1));
  t.fillStyle = "rgba(30,30,28,0.22)";
  for (let a = 0; a < s; a += 64)
    for (let r = 6; r < s; r += 12)
      (t.fillRect(a + 4, r, 2, 2),
        t.fillRect(r, a + 4 + 32 * ((a / 64) % 2), 2, 2));
  const n = t.getImageData(0, 0, s, s),
    o = n.data;
  for (let a = 0; a < o.length; a += 4) {
    const r = (i() - 0.5) * 16;
    ((o[a] = Math.max(0, Math.min(255, o[a] + r))),
      (o[a + 1] = Math.max(0, Math.min(255, o[a + 1] + r))),
      (o[a + 2] = Math.max(0, Math.min(255, o[a + 2] + r))));
  }
  t.putImageData(n, 0, 0);
  for (let a = 0; a < 140; a++) {
    const r = i() < 0.5 ? "rgba(255,255,255,0.22)" : "rgba(35,30,24,0.3)";
    ((t.fillStyle = r), t.fillRect(i() * s, i() * s, 1 + i() * 3, 1 + i() * 2));
  }
  return (
    (n0 = new Si(e)),
    (n0.wrapS = n0.wrapT = Nl),
    (n0.colorSpace = Ii),
    (n0.anisotropy = 4),
    n0
  );
}
const T8 = new Map();
