// index-BeUlFSPp 193 — mesh
// Lines 104936-105065 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const zoe = 3200,
  Foe = 600,
  fC = `
  attribute vec4 puff;     // x, y, z, size
  attribute vec4 tone;     // r, g, b, opacity
  attribute float spin;
  varying vec2 vUv;
  varying vec4 vTone;
  varying float vSeed;
  void main() {
    vUv = position.xy;
    vTone = tone;
    vSeed = spin;
    vec4 view = viewMatrix * vec4(puff.xyz, 1.0);
    // a puff the camera is in (or nearly) thins away instead of filling the screen
    vTone.a *= smoothstep(puff.w * 0.5, puff.w * 1.6 + 4.0, -view.z);
    float c = cos(spin), s = sin(spin);
    view.xy += mat2(c, s, -s, c) * position.xy * puff.w;
    gl_Position = projectionMatrix * view;
  }
`,
  Uoe = `
  uniform float uLight;
  varying vec2 vUv;
  varying vec4 vTone;
  varying float vSeed;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  void main() {
    float r = length(vUv);
    if (r > 1.0) discard;
    vec2 q = vUv * 2.2 + vSeed * 3.1;
    float n = noise(q) * 0.6 + noise(q * 2.1 + 9.0) * 0.4;
    float a = vTone.a * smoothstep(1.0, 0.25, r + (n - 0.5) * 0.55);
    if (a < 0.004) discard;
    // the top of a puff in the light, its underside in its own shadow
    float shade = mix(0.72, 1.12, clamp(vUv.y * 0.5 + 0.5, 0.0, 1.0)) * (0.85 + 0.3 * n);
    gl_FragColor = vec4(vTone.rgb * shade * uLight, a);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,
  Goe = `
  varying vec2 vUv;
  varying vec4 vTone;
  void main() {
    float r = length(vUv);
    if (r > 1.0) discard;
    float a = vTone.a * pow(1.0 - r, 1.8);
    gl_FragColor = vec4(vTone.rgb * a, a);
    #include <colorspace_fragment>
  }
`;
class pC {
  constructor(e, t) {
    this.max = e;
    const i = new ms(2, 2);
    ((this.puff = new cn(new Float32Array(e * 4), 4).setUsage(Bi)),
      (this.tone = new cn(new Float32Array(e * 4), 4).setUsage(Bi)),
      (this.spin = new cn(new Float32Array(e), 1).setUsage(Bi)),
      i.setAttribute("puff", this.puff),
      i.setAttribute("tone", this.tone),
      i.setAttribute("spin", this.spin),
      (this.mesh = new On(i, t, e)),
      (this.mesh.count = 0),
      (this.mesh.frustumCulled = !1),
      (this.mesh.matrixAutoUpdate = !1));
  }
  mesh;
  puff;
  tone;
  spin;
  list = [];
  add(e) {
    this.list.length < this.max && this.list.push(e);
  }
  update(e, t, i) {
    const n = this.list;
    for (let l = n.length - 1; l >= 0; l--) {
      const c = n[l];
      if (((c.age += e), c.age >= c.life)) {
        ((n[l] = n[n.length - 1]), n.pop());
        continue;
      }
      const h = Math.exp(-e * 0.9);
      ((c.vx = t.x + (c.vx - t.x) * h),
        (c.vz = t.z + (c.vz - t.z) * h),
        (c.vy *= Math.exp(-e * 0.35)),
        (c.x += c.vx * e),
        (c.y += c.vy * e),
        (c.z += c.vz * e),
        (c.rot += c.spin * e));
    }
    n.sort(
      (l, c) =>
        (c.x - i.x) ** 2 +
        (c.y - i.y) ** 2 +
        (c.z - i.z) ** 2 -
        ((l.x - i.x) ** 2 + (l.y - i.y) ** 2 + (l.z - i.z) ** 2),
    );
    const o = this.puff.array,
      a = this.tone.array,
      r = this.spin.array;
    for (let l = 0; l < n.length; l++) {
      const c = n[l],
        h = c.age / c.life,
        d = 1 - (1 - h) ** 2.2;
      ((o[l * 4] = c.x),
        (o[l * 4 + 1] = c.y),
        (o[l * 4 + 2] = c.z),
        (o[l * 4 + 3] = c.s0 + (c.s1 - c.s0) * d));
      const u =
        Math.min(1, c.age / (c.glow ? 0.03 : 0.35)) *
        (1 - h) ** (c.glow ? 1.4 : 1.2);
      ((a[l * 4] = c.r),
        (a[l * 4 + 1] = c.g),
        (a[l * 4 + 2] = c.b),
        (a[l * 4 + 3] = c.a * u),
        (r[l] = c.rot));
    }
    this.mesh.count = n.length;
    for (const l of [this.puff, this.tone, this.spin])
      (l.clearUpdateRanges(),
        l.addUpdateRange(0, n.length * l.itemSize),
        (l.needsUpdate = !0));
  }
}
