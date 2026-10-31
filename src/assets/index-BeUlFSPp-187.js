// index-BeUlFSPp 187 — max
// Lines 103227-103494 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class poe {
  lines;
  position;
  color;
  heads;
  count;
  dir = new k();
  u = new k();
  w = new k();
  inverse = new hi();
  seeded = !1;
  constructor(e, t) {
    ((this.count = Math.max(0, Math.round(t))),
      (this.heads = new Float32Array(this.count * 3)));
    const i = new oi();
    ((this.position = new qt(new Float32Array(this.count * 6), 3)),
      (this.color = new qt(new Float32Array(this.count * 8), 4)),
      this.position.setUsage(Bi),
      this.color.setUsage(Bi),
      i.setAttribute("position", this.position),
      i.setAttribute("color", this.color));
    const n = new Zo({
      vertexColors: !0,
      transparent: !0,
      depthWrite: !1,
      fog: !1,
    });
    ((this.lines = new kl(i, n)),
      (this.lines.name = "speed-lines"),
      (this.lines.frustumCulled = !1),
      (this.lines.visible = !1),
      (this.lines.renderOrder = zi.tracer),
      e.add(this.lines));
  }
  seed(e, t) {
    const i = t ? 6 + Math.random() * 70 : 48 + Math.random() * 30,
      n = 5 + Math.random() * 21,
      o = Math.random() * Math.PI * 2,
      a = Math.cos(o) * n,
      r = Math.sin(o) * n,
      l = this.dir,
      c = this.u,
      h = this.w;
    ((this.heads[e * 3] = l.x * i + c.x * a + h.x * r),
      (this.heads[e * 3 + 1] = l.y * i + c.y * a + h.y * r),
      (this.heads[e * 3 + 2] = l.z * i + c.z * a + h.z * r));
  }
  update(e, t, i, n) {
    if (!this.count || i < 0.03 || t.lengthSq() < 1) {
      ((this.lines.visible = !1), (this.seeded = !1));
      return;
    }
    ((this.lines.visible = !0),
      this.lines.position.copy(e.position),
      this.lines.quaternion.copy(e.quaternion));
    const o = this.dir
      .copy(t)
      .applyQuaternion(this.inverse.copy(e.quaternion).invert())
      .normalize();
    (this.u.set(0, 1, 0).cross(o),
      this.u.lengthSq() < 1e-4 && this.u.set(1, 0, 0),
      this.u.normalize(),
      this.w.copy(o).cross(this.u));
    const a = (60 + 90 * i) * n,
      r = 2.5 + 10 * i,
      l = this.heads,
      c = this.position.array,
      h = this.color.array;
    for (let d = 0; d < this.count; d++) {
      const u = d * 3;
      (this.seeded || this.seed(d, !0),
        (l[u] -= o.x * a),
        (l[u + 1] -= o.y * a),
        (l[u + 2] -= o.z * a));
      let f = l[u] * o.x + l[u + 1] * o.y + l[u + 2] * o.z;
      f < -8 &&
        (this.seed(d, !1), (f = l[u] * o.x + l[u + 1] * o.y + l[u + 2] * o.z));
      const p = d * 6,
        m = d * 8;
      ((c[p] = l[u]),
        (c[p + 1] = l[u + 1]),
        (c[p + 2] = l[u + 2]),
        (c[p + 3] = l[u] + o.x * r),
        (c[p + 4] = l[u + 1] + o.y * r),
        (c[p + 5] = l[u + 2] + o.z * r));
      const g = Math.min(1, (78 - f) / 24) * Math.min(1, (f + 8) / 14);
      ((h[m] = 1),
        (h[m + 1] = 1),
        (h[m + 2] = 1),
        (h[m + 3] = Math.max(0, g) * i * 0.42),
        (h[m + 4] = 1),
        (h[m + 5] = 1),
        (h[m + 6] = 1),
        (h[m + 7] = 0));
    }
    ((this.seeded = !0),
      (this.position.needsUpdate = !0),
      (this.color.needsUpdate = !0));
  }
  dispose() {
    (this.lines.removeFromParent(),
      this.lines.geometry.dispose(),
      this.lines.material.dispose());
  }
}
const Qv = 2400,
  nr = 256,
  hl = (vn * 2) / nr,
  Qw = 6e4;
function JN(s, e, t = 16) {
  const i = s.width / t,
    n = s.getContext("2d", { willReadFrequently: !0 }),
    o = new Ge(0.5, 0.5, 0.5);
  if (!n || !i) return { color: o, cover: 1 };
  const a = n.getImageData((e % t) * i, Math.floor(e / t) * i, i, i).data,
    r = (u) => (
      (u /= 255),
      u <= 0.04045 ? u / 12.92 : ((u + 0.055) / 1.055) ** 2.4
    );
  let l = 0,
    c = 0,
    h = 0,
    d = 0;
  for (let u = 0; u < a.length; u += 4)
    a[u + 3] < 128 ||
      ((l += r(a[u])), (c += r(a[u + 1])), (h += r(a[u + 2])), d++);
  return (
    d && o.setRGB(l / d, c / d, h / d, Er),
    { color: o, cover: d / (a.length / 4) }
  );
}
const e9 = `
  uniform sampler2D uMask;
  uniform float uHalf, uHazeFrom, uHaze;
  uniform vec3 uSunDir, uSunColor, uSky, uGround, uHorizon, uCam, uMatchGain, uMatchGamma;
  vec4 finish(vec3 col, vec3 n, vec3 world) {
    float ndl = max(dot(n, uSunDir), 0.0);
    vec3 ambient = mix(uGround, uSky, n.y * 0.5 + 0.5);
    vec3 lit = col * (ambient * 0.62 + uSunColor * ndl * 1.18);
    float dist = length(world - uCam);
    float haze = clamp(1.0 - exp(-max(0.0, dist - uHazeFrom) * uHaze), 0.0, 0.88);
    gl_FragColor = vec4(lit, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    vec3 litOut = uMatchGain * pow(max(gl_FragColor.rgb, vec3(0.0)), uMatchGamma);
    gl_FragColor = vec4(uHorizon, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    return vec4(mix(litOut, gl_FragColor.rgb, haze), 1.0);
  }
  bool masked(vec3 world) {
    if (abs(world.x) >= uHalf || abs(world.z) >= uHalf) return false;
    return texelFetch(uMask, ivec2(floor((world.xz + uHalf) / 16.0)), 0).r > 0.5;
  }
`,
  moe = `
  attribute vec4 tree;        // x, ground top, z, trunk height
  attribute float shift;      // 1: this vertex rises with the trunk
  attribute float part;       // 0 trunk, 1 crown
  uniform float uBase, uRange;
  uniform vec3 uCam;
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying float vPart;
  void main() {
    vec3 p = position + vec3(0.0, shift * (tree.w - uBase), 0.0);
    vWorld = vec3(tree.x + 0.5, tree.y + 1.0, tree.z + 0.5) + p;
    vNormal = normal;
    vPart = part;
    // past the range nothing (the far land's woods take over)
    if (distance(vWorld.xz, uCam.xz) > uRange) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
    gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
  }
`,
  goe = `
  ${e9}
  uniform vec3 uTrunk, uCrown;
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying float vPart;
  float hash(vec3 p) { return fract(sin(dot(floor(p), vec3(127.1, 311.7, 74.7))) * 43758.5453); }
  void main() {
    if (masked(vWorld)) discard;
    vec3 n = normalize(vNormal);
    // a crown is leaves and the shade inside them: blotched block by block as the voxels are
    vec3 col = vPart > 0.5 ? uCrown * (0.82 + 0.3 * hash(vWorld + 0.5)) : uTrunk;
    gl_FragColor = finish(col, n, vWorld);
  }
`,
  yoe = `
  attribute vec3 boxMin, boxSize, sideColor, topColor;
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying vec3 vColor;
  void main() {
    vWorld = boxMin + position * boxSize;
    vNormal = normal;
    vColor = normal.y > 0.5 ? topColor : sideColor;
    gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
  }
`,
  voe = `
  ${e9}
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying vec3 vColor;
  float hash(vec3 p) { return fract(sin(dot(floor(p), vec3(127.1, 311.7, 74.7))) * 43758.5453); }
  void main() {
    if (masked(vWorld - vNormal * 0.01)) discard;
    gl_FragColor = finish(vColor * (0.93 + 0.1 * hash(vWorld - vNormal * 0.5)), normalize(vNormal), vWorld);
  }
`;
function t9(s, e) {
  const t = [],
    i = [],
    n = [],
    o = [],
    a = [];
  for (const l of s) {
    const c = new kt(
      l.max[0] - l.min[0],
      l.max[1] - l.min[1],
      l.max[2] - l.min[2],
    );
    c.translate(
      (l.min[0] + l.max[0]) / 2,
      (l.min[1] + l.max[1]) / 2,
      (l.min[2] + l.max[2]) / 2,
    );
    const h = t.length / 3,
      d = c.getAttribute("position"),
      u = c.getAttribute("normal");
    for (let f = 0; f < d.count; f++)
      (t.push(d.getX(f), d.getY(f), d.getZ(f)),
        i.push(u.getX(f), u.getY(f), u.getZ(f)),
        n.push(d.getY(f) > e ? 1 : 0),
        o.push(l.crown ? 1 : 0));
    for (const f of c.getIndex().array) a.push(h + f);
    c.dispose();
  }
  const r = new oi();
  return (
    r.setAttribute("position", new Dt(t, 3)),
    r.setAttribute("normal", new Dt(i, 3)),
    r.setAttribute("shift", new Dt(n, 1)),
    r.setAttribute("part", new Dt(o, 1)),
    r.setIndex(a),
    r
  );
}
const boe = t9(
    [
      { min: [-0.5, 0, -0.5], max: [0.5, 2, 0.5], crown: !1 },
      { min: [-2.35, 1, -2.35], max: [2.35, 4, 2.35], crown: !0 },
      { min: [-1.5, 4, -0.5], max: [1.5, 5, 0.5], crown: !0 },
      { min: [-0.5, 4, -1.5], max: [0.5, 5, 1.5], crown: !0 },
    ],
    0.5,
  ),
  woe = t9(
    [
      { min: [-0.5, 0, -0.5], max: [0.5, 2.5, 0.5], crown: !1 },
      { min: [-2.2, 2, -2.2], max: [2.2, 5, 2.2], crown: !0 },
      { min: [-1.5, 5, -1.5], max: [1.5, 6.6, 1.5], crown: !0 },
      { min: [-0.5, 6.6, -0.5], max: [0.5, 7, 0.5], crown: !0 },
    ],
    4.5,
  );
