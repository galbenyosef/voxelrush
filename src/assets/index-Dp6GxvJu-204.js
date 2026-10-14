// index-Dp6GxvJu 204 — filter
// Lines 111369-111634 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const Ph = 384,
  Y2 = 6.5,
  Ute = `
attribute float aBorn;
attribute float aSeed;
attribute vec3 aTint;
varying vec2 vUv;
varying float vBorn;
varying float vSeed;
varying vec3 vTint;
void main(){
  vUv = uv - 0.5; vBorn = aBorn; vSeed = aSeed; vTint = aTint;
  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
}`,
  Fte = `
uniform float uTime;
uniform float uLight;
varying vec2 vUv;
varying float vBorn;
varying float vSeed;
varying vec3 vTint;
float hash(float n){ return fract(sin(n) * 43758.5453); }
void main(){
  float age = uTime - vBorn;
  if (age < 0.0 || age > ${Y2.toFixed(1)}) discard;
  float r = length(vUv) * 2.0, a = atan(vUv.y, vUv.x);
  // irregular outline: the crater edge wobbles with angle, unique per hole
  float wob = 0.06 * sin(a * 5.0 + vSeed * 31.0) + 0.04 * sin(a * 9.0 + vSeed * 17.0);
  float core = 1.0 - smoothstep(0.11 + wob * 0.4, 0.15 + wob * 0.4, r);
  float rim = (1.0 - smoothstep(0.27 + wob, 0.34 + wob, r)) - core;
  // radial cracks: a few thin spokes of random length
  float spoke = 0.0;
  for (int i = 0; i < 5; i++) {
    float fi = float(i), ang = hash(vSeed * 7.0 + fi) * 6.2831, len = 0.45 + hash(vSeed * 3.0 + fi) * 0.45;
    float d = abs(sin(a - ang)) * r;
    float s = (1.0 - smoothstep(0.006, 0.022, d)) * step(0.0, cos(a - ang)) * (1.0 - smoothstep(len - 0.1, len, r)) * step(0.2, r);
    spoke = max(spoke, s);
  }
  float soot = (1.0 - smoothstep(0.2, 0.9, r)) * (0.55 + 0.45 * hash(floor(a * 6.0) + vSeed));
  // colour: crater nearly black, rim is the block's own colour darkened, soot greys the surface
  // crater nearly black; around it the freshly chipped material shows lighter than the surface;
  // a soft soot halo darkens the block beyond the chips
  vec3 chipped = mix(vTint, vec3(1.0), 0.28) * 1.15;
  vec3 col = mix(vTint * 0.25, chipped, rim);
  col = mix(col, vec3(0.006), core);
  col = mix(col, vTint * 0.2, spoke * (1.0 - core));
  float alpha = max(max(core, rim * 0.95), max(spoke * 0.9, soot * 0.45));
  col *= uLight;
  // hot core: glows orange-white right after the impact
  float hot = exp(-age * 7.0) * (1.0 - smoothstep(0.0, 0.3, r));
  col += vec3(1.6, 0.75, 0.25) * hot * 2.2;
  alpha = max(alpha, hot);
  // fade: soot first, crater last
  float fade = 1.0 - smoothstep(${(Y2 - 2.2).toFixed(1)} + vSeed, ${Y2.toFixed(1)}, age);
  alpha *= fade * mix(1.0, 0.9, soot);
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(col, alpha);
  #include <colorspace_fragment>
}`;
class Gte {
  constructor(e, t) {
    w(this, "mesh");
    w(this, "born");
    w(this, "seed");
    w(this, "tint");
    w(this, "cells", []);
    w(this, "next", 0);
    w(this, "checkT", 0);
    w(this, "uniforms", { uTime: { value: 0 }, uLight: { value: 1 } });
    w(this, "m", new bt());
    w(this, "q", new Jt());
    w(this, "s", new k());
    w(this, "p", new k());
    w(this, "n", new k());
    w(this, "spin", new Jt());
    w(this, "Z", new k(0, 0, 1));
    this.blockAt = t;
    const i = new pn(1, 1);
    ((this.born = new eo(new Float32Array(Ph).fill(-1e6), 1)),
      (this.seed = new eo(new Float32Array(Ph), 1)),
      (this.tint = new eo(new Float32Array(Ph * 3), 3)));
    for (const o of [this.born, this.seed, this.tint]) o.setUsage(Mn);
    (i.setAttribute("aBorn", this.born),
      i.setAttribute("aSeed", this.seed),
      i.setAttribute("aTint", this.tint));
    const s = new sn({
      vertexShader: Ute,
      fragmentShader: Fte,
      uniforms: this.uniforms,
      transparent: !0,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -4,
      polygonOffsetUnits: -4,
    });
    ((this.mesh = new hs(i, s, Ph)),
      this.mesh.instanceMatrix.setUsage(Mn),
      (this.mesh.frustumCulled = !1),
      (this.mesh.renderOrder = Gi.tracer - 1),
      (this.mesh.name = "bullet-holes"),
      this.m.makeScale(0, 0, 0));
    for (let o = 0; o < Ph; o++)
      (this.mesh.setMatrixAt(o, this.m),
        this.cells.push({ x: 0, y: 0, z: 0, block: 0, until: 0 }));
    e.add(this.mesh);
  }
  add(e, t = 1) {
    const i = de[e.block];
    if (!i || !i.solid || i.transparent || i.shape !== "cube") return !1;
    const s = this.next;
    if (
      ((this.next = (this.next + 1) % Ph),
      this.n.set(e.nx, e.ny, e.nz),
      this.n.lengthSq() < 0.5)
    )
      return !1;
    (this.q.setFromUnitVectors(this.Z, this.n),
      this.spin.setFromAxisAngle(this.Z, Math.random() * Math.PI * 2),
      this.q.multiply(this.spin));
    const o = (0.3 + Math.random() * 0.1) * t;
    (this.p.copy(e.point).addScaledVector(this.n, 0.004),
      this.m.compose(this.p, this.q, this.s.set(o, o, o)),
      this.mesh.setMatrixAt(s, this.m));
    const a = new ze(i.color ?? 7829367);
    return (
      this.tint.setXYZ(s, a.r, a.g, a.b),
      this.born.setX(s, this.uniforms.uTime.value),
      this.seed.setX(s, Math.random()),
      Object.assign(this.cells[s], {
        x: e.bx,
        y: e.by,
        z: e.bz,
        block: e.block,
        until: this.uniforms.uTime.value + Y2,
      }),
      (this.mesh.instanceMatrix.needsUpdate = !0),
      (this.born.needsUpdate =
        this.seed.needsUpdate =
        this.tint.needsUpdate =
          !0),
      !0
    );
  }
  update(e, t) {
    if (
      ((this.uniforms.uTime.value += e),
      (this.uniforms.uLight.value = Math.max(0.18, Math.min(1, t))),
      (this.checkT -= e),
      this.checkT > 0)
    )
      return;
    this.checkT = 0.25;
    const i = this.uniforms.uTime.value;
    let s = !1;
    for (let o = 0; o < Ph; o++) {
      const a = this.cells[o];
      a.until <= i ||
        !a.block ||
        (this.blockAt(a.x, a.y, a.z) !== a.block &&
          ((a.until = 0), (a.block = 0), this.born.setX(o, -1e6), (s = !0)));
    }
    s && (this.born.needsUpdate = !0);
  }
  clear() {
    (this.born.array.fill(-1e6), (this.born.needsUpdate = !0));
    for (const e of this.cells) ((e.until = 0), (e.block = 0));
  }
}
const Wte = {
  [P.TANK]: {
    root: 43,
    range: 110,
    gain: 0.48,
    filter: 650,
    pulse: 12,
    texture: 0.2,
  },
  [P.HIMARS]: {
    root: 52,
    range: 85,
    gain: 0.32,
    filter: 780,
    pulse: 17,
    texture: 0.1,
  },
  [P.PATRIOT]: {
    root: 48,
    range: 85,
    gain: 0.3,
    filter: 720,
    pulse: 16,
    texture: 0.1,
  },
  [P.BTR_TURRET]: {
    root: 58,
    range: 85,
    gain: 0.32,
    filter: 850,
    pulse: 18,
    texture: 0.14,
  },
  [P.HELI]: {
    root: 62,
    range: 180,
    gain: 0.52,
    filter: 1300,
    pulse: 14,
    texture: 0.28,
  },
  [P.FIGHTER_JET]: {
    root: 175,
    range: 290,
    gain: 0.5,
    filter: 3100,
    pulse: 75,
    texture: 1.1,
  },
  [P.PLANE]: {
    root: 95,
    range: 210,
    gain: 0.46,
    filter: 1900,
    pulse: 32,
    texture: 0.4,
  },
  [P.DRONE]: {
    root: 165,
    range: 44,
    gain: 0.17,
    filter: 2200,
    pulse: 55,
    texture: 0.04,
  },
  [P.BOAT]: {
    root: 55,
    range: 100,
    gain: 0.34,
    filter: 850,
    pulse: 20,
    texture: 0.24,
  },
  [P.CARRIER]: {
    root: 31,
    range: 170,
    gain: 0.4,
    filter: 430,
    pulse: 9,
    texture: 0.18,
  },
  [P.SUBMARINE]: {
    root: 35,
    range: 75,
    gain: 0.25,
    filter: 310,
    pulse: 7,
    texture: 0.1,
  },
  [P.SPACE_ROCKET]: {
    root: 38,
    range: 240,
    gain: 0.55,
    filter: 1600,
    pulse: 25,
    texture: 0.7,
  },
};
