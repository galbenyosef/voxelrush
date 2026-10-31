// index-BeUlFSPp 188 — math
// Lines 103495-103834 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Moe {
  constructor(e, t, i, n) {
    this.scene = e;
    const o = (m, g) => JN(i, le[m]?.tex[g] ?? 0),
      a = (m) => {
        const g = o(m, 0);
        return g.color.multiplyScalar(0.55 + 0.45 * g.cover);
      };
    for (const [m, g, y, b] of [
      [boe, 4, v.LOG, v.LEAVES],
      [woe, 6, v.PINE_LOG, v.PINE_LEAVES],
    ]) {
      const S = new Gi({
          uniforms: {
            ...t,
            uBase: { value: g },
            uRange: { value: Qv },
            uTrunk: { value: o(y, 1).color },
            uCrown: { value: a(b) },
          },
          vertexShader: moe,
          fragmentShader: goe,
          fog: !1,
        }),
        M = m.clone(),
        E = new cn(new Float32Array(Qw * 4), 4);
      (E.setUsage(Bi), M.setAttribute("tree", E));
      const A = new On(M, S, Qw);
      ((A.count = 0),
        (A.frustumCulled = !1),
        (A.matrixAutoUpdate = !1),
        this.kinds.push({ mesh: A, attr: E, material: S }),
        this.group.add(A));
    }
    const r = [...VP, ...Object.values(CA).flat(), ...qP].filter(
        (m) => m.id !== v.AIR,
      ),
      l = new Map(),
      c = (m) => {
        let g = l.get(m);
        if (!g) {
          const y = o(m, 1),
            b = o(m, 0);
          ((g =
            m === v.GLASS
              ? [new Ge(0.05, 0.07, 0.09), new Ge(0.05, 0.07, 0.09)]
              : [y.color, b.color]),
            l.set(m, g));
        }
        return g;
      },
      h = new kt(1, 1, 1).translate(0.5, 0.5, 0.5),
      d = new Float32Array(r.length * 3),
      u = new Float32Array(r.length * 3),
      f = new Float32Array(r.length * 3),
      p = new Float32Array(r.length * 3);
    (r.forEach((m, g) => {
      (d.set([m.x1, m.y1, m.z1], g * 3),
        u.set([m.x2 - m.x1 + 1, m.y2 - m.y1 + 1, m.z2 - m.z1 + 1], g * 3));
      const [y, b] = c(m.id);
      (f.set([y.r, y.g, y.b], g * 3), p.set([b.r, b.g, b.b], g * 3));
    }),
      h.setAttribute("boxMin", new cn(d, 3)),
      h.setAttribute("boxSize", new cn(u, 3)),
      h.setAttribute("sideColor", new cn(f, 3)),
      h.setAttribute("topColor", new cn(p, 3)),
      (this.boxes = new On(
        h,
        new Gi({
          uniforms: t,
          vertexShader: yoe,
          fragmentShader: voe,
          fog: !1,
        }),
        r.length,
      )),
      (this.boxes.frustumCulled = !1),
      (this.boxes.matrixAutoUpdate = !1),
      this.group.add(this.boxes),
      e.add(this.group));
    try {
      const m = (this.worker = new Worker(
        new URL(
          "/assets/air-props-worker-coep-v1-CWnwBjUL.js",
          import.meta.url,
        ),
        { type: "module" },
      ));
      ((m.onmessage = (g) => {
        const y = this.trees.length,
          b = g.data.data;
        this.trees.push(b);
        for (let S = 0; S < b.length / 5; S++) {
          const M = Math.floor((b[S * 5] + vn) / nr),
            E = Math.floor((b[S * 5 + 2] + vn) / nr);
          M >= 0 &&
            E >= 0 &&
            M < hl &&
            E < hl &&
            this.tiles[E * hl + M].push((y << 20) | S);
        }
        ((this.dirty = !0),
          g.data.last && (m.terminate(), (this.worker = null)));
      }),
        m.postMessage({ x: n.x, z: n.z }));
    } catch (m) {
      console.warn("[air] far trees unavailable", m);
    }
  }
  group = new re();
  trees = [];
  tiles = Array.from({ length: hl * hl }, () => []);
  kinds = [];
  boxes;
  worker = null;
  builtAt = new k(1e9, 0, 0);
  dirty = !0;
  update(e) {
    const t = e.position;
    if (
      !this.dirty &&
      Math.hypot(t.x - this.builtAt.x, t.z - this.builtAt.z) < 96
    )
      return;
    ((this.dirty = !1), this.builtAt.copy(t));
    const i = [0, 0],
      n = Qv + 200,
      o = Math.max(0, Math.floor((t.x - n + vn) / nr)),
      a = Math.min(hl - 1, Math.floor((t.x + n + vn) / nr)),
      r = Math.max(0, Math.floor((t.z - n + vn) / nr)),
      l = Math.min(hl - 1, Math.floor((t.z + n + vn) / nr)),
      c = [];
    for (let d = r; d <= l; d++)
      for (let u = o; u <= a; u++)
        Math.hypot((u + 0.5) * nr - vn - t.x, (d + 0.5) * nr - vn - t.z) <
          n + nr && c.push(d * hl + u);
    const h = (d) =>
      Math.hypot(
        ((d % hl) + 0.5) * nr - vn - t.x,
        (Math.floor(d / hl) + 0.5) * nr - vn - t.z,
      );
    c.sort((d, u) => h(d) - h(u));
    for (const d of c)
      for (const u of this.tiles[d]) {
        const f = this.trees[u >> 20],
          p = (u & 1048575) * 5,
          m = f[p + 4] > 0.5 ? 1 : 0;
        if (i[m] >= Qw) continue;
        const g = this.kinds[m].attr.array,
          y = i[m]++ * 4;
        ((g[y] = f[p]),
          (g[y + 1] = f[p + 1]),
          (g[y + 2] = f[p + 2]),
          (g[y + 3] = f[p + 3]));
      }
    this.kinds.forEach((d, u) => {
      ((d.mesh.count = i[u]),
        d.attr.clearUpdateRanges(),
        d.attr.addUpdateRange(0, i[u] * 4),
        (d.attr.needsUpdate = !0));
    });
  }
  dispose() {
    (this.worker?.terminate(), this.scene.remove(this.group));
    for (const e of this.kinds)
      (e.mesh.geometry.dispose(), e.material.dispose());
    (this.boxes.geometry.dispose(), this.boxes.material.dispose());
  }
}
const Cu = 4,
  rc = 256,
  hC = [64, 32, 16, 8, 4],
  dC = [520, 1050, 2100, 4200],
  Lu = (vn * 2) / rc,
  Or = (vn * 2) / ke,
  Soe = 460,
  Bg = [
    2906232, 13616020, 9603711, 5207096, 2903850, 8816262, 15265264, 4080711,
    9342598, 14869989, 11770474, 13214287, 5798453, 7031332, 8018490,
  ],
  Eoe = [
    -1,
    v.SAND,
    v.GRAVEL,
    v.GRASS,
    v.LEAVES,
    v.STONE,
    v.SNOW,
    sd + 7,
    sd + 8,
    sd,
    v.STUBBLE_FIELD,
    v.WHEAT_FIELD,
    v.CROP_FIELD,
    v.FARMLAND,
    v.DIRT,
  ],
  i9 = `
  uniform sampler2D uData;
  uniform float uHalf, uTexN, uStepT;
  vec4 landAt(vec2 xz) {
    ivec2 t = clamp(ivec2(floor((xz + uHalf) / uStepT + 0.5)), ivec2(0), ivec2(int(uTexN) - 1));
    return texelFetch(uData, t, 0);
  }
`,
  Aoe = `
  ${i9}
  uniform float uTile, uCell, uSea;
  attribute vec2 offset;
  varying vec3 vWorld;
  varying vec3 vNormal;
  float heightAt(vec2 xz) { float h = landAt(xz).r * 255.0; return h < uSea ? uSea - 0.1 : h + 1.0; }
  void main() {
    vec2 xz = offset + position.xz * uTile;
    float y = heightAt(xz);
    // the skirt: a curtain under each tile's edge, hiding cracks where a coarser level meets it
    y -= position.y * (uCell * 1.5 + 6.0);
    float l = heightAt(xz - vec2(uCell, 0.0)), r = heightAt(xz + vec2(uCell, 0.0));
    float d = heightAt(xz - vec2(0.0, uCell)), u = heightAt(xz + vec2(0.0, uCell));
    // (the slope a little steeper for the light than for the eye: relief reads from on high)
    vNormal = normalize(vec3((l - r) * 1.7, 2.0 * uCell, (d - u) * 1.7));
    vWorld = vec3(xz.x, y, xz.y);
    gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
  }
`,
  Toe = `
  uniform float uSea;
  varying vec3 vWorld;
  varying vec3 vNormal;
  void main() {
    vWorld = vec3(position.x, uSea - 0.1, position.z);
    vNormal = vec3(0.0, 1.0, 0.0);
    gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
  }
`,
  uC = (s) => `
  ${i9}
  uniform sampler2D uMask;
  uniform float uMaskN, uSea, uHazeFrom, uHaze, uClassView;
  uniform vec3 uPalette[15], uClassOut[15];
  uniform vec3 uSunDir, uSunColor, uSky, uGround, uHorizon, uCam, uMatchGain, uMatchGamma;
  varying vec3 vWorld;
  varying vec3 vNormal;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  void main() {
    bool land = abs(vWorld.x) < uHalf && abs(vWorld.z) < uHalf;
    ${
      s
        ? "if (land) discard;"
        : `
    // a voxel chunk is drawn here: it has the pixels
    if (land && texelFetch(uMask, ivec2(floor((vWorld.xz + uHalf) / ${ke.toFixed(1)})), 0).r > 0.5) discard;`
    }
    vec4 d = ${s ? "vec4(0.0)" : "landAt(vWorld.xz)"};
    int cls = int(d.g * 255.0 + 0.5);
    vec3 n = normalize(vNormal);
    vec3 col = uPalette[0];
    ${
      s
        ? ""
        : `
    if (vWorld.y > uSea + 0.05 || cls != 0) {
      col = uPalette[cls];
      // pines: darker, broken into crowns a few blocks across
      float forest = d.b;
      // (near enough, the trees themselves stand there: client/src/air-props.ts)
      forest *= smoothstep(${(Qv - 500).toFixed(1)}, ${(Qv - 100).toFixed(1)}, length(vWorld.xz - uCam.xz));
      if (cls == 3 && forest > 0.05) {
        float crown = hash(floor(vWorld.xz / 3.0));
        // (as thick as the voxels plant them: a copse is grass with a crown here and there, a tree line a dark seam)
        col = mix(col, uPalette[4] * (0.75 + 0.4 * crown), clamp(forest, 0.0, 1.0) * 0.4 * step(0.45, crown + forest * 0.3));
      }
      // a block-sized grain, as the voxels have up close
      col *= 0.93 + 0.1 * hash(floor(vWorld.xz));
    }`
    }
    // low ground lies in the shade of the hills round it, the heights catch the light
    col *= 0.8 + 0.32 * smoothstep(36.0, 112.0, vWorld.y);
    float ndl = max(dot(n, uSunDir), 0.0);
    vec3 ambient = mix(uGround, uSky, n.y * 0.5 + 0.5);
    vec3 lit = col * (ambient * 0.62 + uSunColor * ndl * 1.18);
    if (cls == 0 && vWorld.y <= uSea + 0.05) {
      // the sea catches the sun and the sky
      vec3 v = normalize(uCam - vWorld), h = normalize(v + uSunDir);
      float fres = pow(1.0 - max(dot(v, vec3(0.0, 1.0, 0.0)), 0.0), 4.0);
      lit = mix(lit, uHorizon, fres * 0.6) + uSunColor * pow(max(dot(h, vec3(0.0, 1.0, 0.0)), 0.0), 180.0) * 1.5;
    }
    // the air: the far land fades into the horizon's colour
    float dist = length(vWorld - uCam);
    float haze = 1.0 - exp(-max(0.0, dist - uHazeFrom) * uHaze);
    // (the sea keeps a little of its blue to the horizon: a sea horizon is a line, not a wall of haze)
    float hazeK = clamp(haze, 0.0, cls == 0 && vWorld.y <= uSea + 0.05 ? 0.7 : 0.88);
    gl_FragColor = vec4(lit, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    // the voxels' own response to light, on screen (measured: a near block reads about 0.9·far^1.6
    // in sRGB — darker and deeper in colour than a plain lit palette): the far land meets them
    // without a seam; the haze over it is the sky's and stays as it is
    vec3 litOut = uMatchGain * pow(max(gl_FragColor.rgb, vec3(0.0)), uMatchGamma);
    // (and each class's own remainder, measured on screen: setMatch)
    litOut *= uClassOut[cls];
    gl_FragColor = vec4(uHorizon, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    gl_FragColor = vec4(mix(litOut, gl_FragColor.rgb, hazeK), 1.0);
    // (calibration: the class of each pixel, for scripts/.tmp/air-match.mts)
    if (uClassView > 0.5) gl_FragColor = vec4(float(cls) / 255.0, d.b, 0.0, 1.0);
  }
`;
function xoe(s) {
  const e = [],
    t = [],
    i = s + 1;
  for (let r = 0; r <= s; r++)
    for (let l = 0; l <= s; l++) e.push(l / s, 0, r / s);
  for (let r = 0; r < s; r++)
    for (let l = 0; l < s; l++) {
      const c = r * i + l,
        h = c + 1,
        d = c + i,
        u = d + 1;
      t.push(c, d, h, h, d, u);
    }
  const n = [];
  for (let r = 0; r < s; r++) n.push(r);
  for (let r = 0; r < s; r++) n.push(r * i + s);
  for (let r = s; r > 0; r--) n.push(s * i + r);
  for (let r = s; r > 0; r--) n.push(r * i);
  const o = e.length / 3;
  for (const r of n) e.push(e[r * 3], 1, e[r * 3 + 2]);
  for (let r = 0; r < n.length; r++) {
    const l = n[r],
      c = n[(r + 1) % n.length],
      h = o + r,
      d = o + ((r + 1) % n.length);
    t.push(l, c, h, c, d, h, l, h, c, c, h, d);
  }
  const a = new oi();
  return (a.setAttribute("position", new Dt(e, 3)), a.setIndex(t), a);
}
