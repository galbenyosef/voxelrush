// index-BeUlFSPp 250 — math
// Lines 133183-133527 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const xh = 24,
  v9 = 3.4,
  b9 = 0.35,
  S0e = `
  attribute vec4 aGhost;   // xyz where the body fell, w birth time
  attribute float aSeed;
  uniform float uTime;
  varying vec2 vUv;
  varying float vAge;
  varying float vSeed;
  #include <fog_pars_vertex>
  void main() {
    float age = (uTime - aGhost.w - ${b9.toFixed(2)}) / ${v9.toFixed(2)};
    vAge = age; vSeed = aSeed; vUv = uv;
    if (age < 0.0 || age > 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
    float rise = 1.0 - pow(1.0 - age, 2.2);
    vec3 center = aGhost.xyz + vec3(sin(age * 5.0 + aSeed * 6.0) * 0.28, 0.75 + rise * 3.4, cos(age * 3.7 + aSeed * 4.0) * 0.18);
    vec4 mv = modelViewMatrix * vec4(center, 1.0);
    // camera-facing; the hem trails behind the rise and ripples sideways
    vec2 p = position.xy;
    float hem = 1.0 - uv.y;
    p.x += sin(uv.y * 5.0 - uTime * 6.0 + aSeed * 9.0) * 0.07 * hem;
    p.y -= hem * hem * 0.35 * (1.0 - age);
    float size = mix(0.85, 1.25, smoothstep(0.0, 0.3, age));
    mv.xy += p * size;
    vec4 mvPosition = mv;
    gl_Position = projectionMatrix * mv;
    #include <fog_vertex>
  }`,
  E0e = `
  uniform float uTime;
  uniform float uAlpha;
  varying vec2 vUv;
  varying float vAge;
  varying float vSeed;
  #include <fog_pars_fragment>
  float sdEllipse(vec2 p, vec2 c, vec2 r) { return length((p - c) / r) - 1.0; }
  void main() {
    vec2 p = vUv;
    // the shape: a round head on a sheet that widens a little and ends in a ragged, waving hem
    float hemY = 0.12 + 0.05 * sin(p.x * 21.0 - uTime * 7.0 + vSeed * 13.0) + 0.03 * sin(p.x * 9.0 + uTime * 3.0);
    float head = sdEllipse(p, vec2(0.5, 0.66), vec2(0.27, 0.25));
    float halfW = mix(0.30, 0.25, smoothstep(0.15, 0.66, p.y));
    float sheet = max(abs(p.x - 0.5) - halfW, max(hemY - p.y, p.y - 0.66)) * 6.0;
    float d = min(head, sheet);
    float body = 1.0 - smoothstep(-0.08, 0.04, d);
    // eyes and the moaning mouth: hollow, dark
    float eyes = min(sdEllipse(p, vec2(0.40, 0.70), vec2(0.055, 0.075)), sdEllipse(p, vec2(0.60, 0.70), vec2(0.055, 0.075)));
    float open = 0.05 + 0.03 * sin(uTime * 3.0 + vSeed * 7.0);
    float mouth = sdEllipse(p, vec2(0.5, 0.55), vec2(0.06, open));
    float hollow = 1.0 - smoothstep(-0.15, 0.1, min(eyes, mouth));
    // light: brightest in the middle, a cold rim, a halo round it all
    float core = 1.0 - smoothstep(-0.9, 0.0, d);
    vec3 col = mix(vec3(0.55, 0.85, 1.0), vec3(0.92, 1.0, 1.0), core);
    col = mix(col, vec3(0.02, 0.05, 0.09), hollow);
    float halo = exp(-max(d, 0.0) * 7.0) * 0.32 * (1.0 - body);
    float fade = smoothstep(0.0, 0.12, vAge) * (1.0 - smoothstep(0.6, 1.0, vAge));
    float alpha = (body * (0.62 + 0.3 * hollow) + halo) * fade * uAlpha;
    if (alpha < 0.01) discard;
    gl_FragColor = vec4(col * (1.0 + halo * 2.0), alpha);
    #include <fog_fragment>
  }`;
class w9 {
  constructor(e, t) {
    this.sound = t;
    const i = new ms(1, 1.35),
      n = new SI();
    ((n.index = i.index),
      n.setAttribute("position", i.getAttribute("position")),
      n.setAttribute("uv", i.getAttribute("uv")));
    for (let l = 0; l < xh; l++) this.data[l * 4 + 3] = -1e6;
    ((this.ghostAttr = new cn(this.data, 4)),
      this.ghostAttr.setUsage(Bi),
      n.setAttribute("aGhost", this.ghostAttr));
    for (let l = 0; l < xh; l++) this.seeds[l] = Math.random();
    (n.setAttribute("aSeed", new cn(this.seeds, 1)), (n.instanceCount = xh));
    const o = Rd.merge([It.fog, { uTime: { value: 0 }, uAlpha: { value: 1 } }]),
      a = new Gi({
        vertexShader: S0e,
        fragmentShader: E0e,
        transparent: !0,
        depthWrite: !1,
        fog: !0,
        uniforms: o,
      });
    ((a.toneMapped = !1),
      (this.mesh = new Q(n, a)),
      (this.mesh.frustumCulled = !1),
      (this.mesh.renderOrder = zi.particle),
      (this.mesh.visible = !1),
      (this.mesh.name = "kill-ghosts"));
    const r = a.clone();
    ((r.uniforms = { ...o, uAlpha: { value: 0.4 } }),
      (r.depthTest = !1),
      (r.toneMapped = !1),
      (this.through = new Q(n, r)),
      (this.through.frustumCulled = !1),
      (this.through.renderOrder = zi.particle - 1),
      (this.through.visible = !1),
      (this.through.name = "kill-ghosts-through"),
      e.add(this.through, this.mesh));
  }
  mesh;
  through;
  data = new Float32Array(xh * 4);
  seeds = new Float32Array(xh);
  ghostAttr;
  cursor = 0;
  lastBirth = -1e9;
  time = 0;
  spawn(e) {
    const t = this.cursor;
    ((this.cursor = (this.cursor + 1) % xh),
      (this.data[t * 4] = e.x),
      (this.data[t * 4 + 1] = e.y),
      (this.data[t * 4 + 2] = e.z),
      (this.data[t * 4 + 3] = this.time),
      this.ghostAttr.clearUpdateRanges(),
      this.ghostAttr.addUpdateRange(t * 4, 4),
      (this.ghostAttr.needsUpdate = !0),
      (this.lastBirth = this.time),
      (this.mesh.visible = this.through.visible = !0),
      this.sound?.(e));
  }
  update(e) {
    ((this.time += e),
      (this.mesh.material.uniforms.uTime.value = this.time),
      this.mesh.visible &&
        this.time - this.lastBirth > v9 + b9 + 0.1 &&
        (this.mesh.visible = this.through.visible = !1));
  }
  clear() {
    for (let e = 0; e < xh; e++) this.data[e * 4 + 3] = -1e6;
    (this.ghostAttr.clearUpdateRanges(),
      (this.ghostAttr.needsUpdate = !0),
      (this.mesh.visible = this.through.visible = !1));
  }
}
const wM = 1.5,
  MM = (s) =>
    new hn({
      map: A0e(),
      color: 16777215,
      transparent: !0,
      opacity: s,
      blending: rs,
      depthWrite: !1,
      fog: !1,
      toneMapped: !1,
    });
let t1 = null;
function A0e() {
  if (t1) return t1;
  const s = document.createElement("canvas");
  s.width = s.height = 64;
  const e = s.getContext("2d"),
    t = e.createRadialGradient(32, 32, 0, 32, 32, 32);
  return (
    t.addColorStop(0, "rgba(255,255,245,1)"),
    t.addColorStop(0.18, "rgba(255,236,200,.85)"),
    t.addColorStop(0.5, "rgba(255,170,110,.25)"),
    t.addColorStop(1, "rgba(0,0,0,0)"),
    (e.fillStyle = t),
    e.fillRect(0, 0, 64, 64),
    (t1 = new Si(s)),
    (t1.colorSpace = Ii),
    t1
  );
}
class T0e {
  constructor(e, t, i, n) {
    ((this.scene = e), (this.sfx = t), (this.scare = i), (this.light = n));
  }
  flares = [];
  prototype = [];
  chuteGeo = new ws(0.7, 10, 5, 0, Math.PI * 2, 0, Math.PI / 2);
  chuteMat = new Pi({ color: 14275524, side: Mi });
  active = !1;
  scareIn = 90 + Math.random() * 60;
  setActive(e) {
    if (e !== this.active)
      if (((this.active = e), e)) {
        this.scareIn = 90 + Math.random() * 60;
        const t = new Ws(MM(1)),
          i = new Q(this.chuteGeo, this.chuteMat);
        for (const n of [t, i]) ((n.visible = !1), (n.name = "haunted-warmup"));
        ((this.prototype = [t, i]), this.scene.add(t, i));
      } else {
        for (const t of [...this.flares]) this.drop(t);
        for (const t of this.prototype)
          (this.scene.remove(t), t instanceof Ws && t.material.dispose());
        this.prototype = [];
      }
  }
  get isActive() {
    return this.active;
  }
  flare(e, t, i, n) {
    if (!this.active) return;
    const o = Math.random() * Math.PI * 2,
      a = new k(e + Math.cos(o) * 9, t - Ug.HEIGHT, i + Math.sin(o) * 9),
      r = new Ws(MM(1)),
      l = new Ws(MM(0.5));
    (r.scale.setScalar(0.9),
      l.scale.setScalar(5),
      l.material.color.set(16756848),
      (r.renderOrder = l.renderOrder = zi.particle));
    const c = new Q(this.chuteGeo, this.chuteMat);
    for (
      c.visible = !1,
        this.scene.add(r, l, c),
        r.position.copy(a),
        l.position.copy(a),
        this.flares.push({
          from: a,
          at: new k(e, t, i),
          age: 0,
          seed: Math.random() * 100,
          core: r,
          halo: l,
          chute: c,
          popped: !1,
        });
      this.flares.length > 4;
    )
      this.drop(this.flares[0]);
    this.sfx.flareLaunch(a.distanceTo(n));
  }
  update(e, t) {
    for (const i of [...this.flares]) {
      if (((i.age += e), i.age < wM)) {
        const c = i.age / wM,
          h = 1 - (1 - c) * (1 - c);
        (i.core.position.lerpVectors(i.from, i.at, h),
          (i.core.position.y = i.from.y + (i.at.y - i.from.y) * h),
          i.halo.position.copy(i.core.position),
          i.halo.scale.setScalar(1.6),
          (i.halo.material.opacity = 0.35));
        continue;
      }
      i.popped ||
        ((i.popped = !0),
        (i.chute.visible = !0),
        this.sfx.flarePop(i.at.distanceTo(t.camera)));
      const n = i.age - wM;
      if (n > Ug.BURN) {
        this.drop(i);
        continue;
      }
      const o = Math.sin(n * 1.3 + i.seed) * 0.8,
        a = i.core.position.set(
          i.at.x + o,
          i.at.y - n * Ug.SINK,
          i.at.z + Math.cos(n * 1.1 + i.seed) * 0.6,
        ),
        r =
          0.82 +
          0.1 * Math.sin(n * 23 + i.seed) +
          0.08 * Math.sin(n * 41 + i.seed * 2),
        l = Math.min(1, n / 0.25) * (1 - Math.max(0, (n - (Ug.BURN - 4)) / 4));
      (i.core.scale.setScalar(1.4 * r),
        (i.core.material.opacity = l),
        i.halo.position.copy(a),
        i.halo.scale.setScalar(9 * r),
        (i.halo.material.opacity = 0.55 * l),
        i.chute.position.set(a.x, a.y + 2.1, a.z),
        (i.chute.rotation.z = o * 0.12),
        l > 0.01 &&
          this.light(i, this.lightAt.set(a.x, a.y - 0.4, a.z), 260 * r * l));
    }
    ((this.scareIn -= e),
      this.scareIn <= 0 &&
        (t.screamers && t.calm && this.scare()
          ? (this.scareIn = 300 + Math.random() * 240)
          : (this.scareIn = 15)));
  }
  lightAt = new k();
  drop(e) {
    (this.scene.remove(e.core, e.halo, e.chute),
      e.core.material.dispose(),
      e.halo.material.dispose(),
      this.flares.splice(this.flares.indexOf(e), 1));
  }
}
const SM = 16,
  x0e = 0.62,
  _0e = 14,
  EM = new k(),
  RL = new k();
function R0e() {
  const s = new re(),
    e = wt(1),
    t = (i, n) =>
      new Q(
        new Yf(
          i.map(([o, a]) => new ct(o, a)),
          ci(10),
        ),
        new Pi({ color: n }),
      );
  if (
    (s.add(
      t(
        [
          [0.001, -0.15],
          [0.03, -0.12],
          [0.07, -0.06],
          [0.088, 0],
        ],
        15921126,
      ),
    ),
    s.add(
      t(
        [
          [0.088, 0],
          [0.078, 0.05],
          [0.05, 0.085],
          [0.012, 0.1],
          [0.001, 0.102],
        ],
        14169386,
      ),
    ),
    e)
  ) {
    const i = new Q(
      new Tt(0.089, 0.089, 0.012, ci(10)),
      new Pi({ color: 1908514 }),
    );
    s.add(i);
    const n = new Q(new Tt(0.008, 0.01, 0.16, 6), new Pi({ color: 15921126 }));
    ((n.position.y = 0.18), s.add(n));
    const o = new Q(new Tt(0.011, 0.009, 0.05, 6), new Zt({ color: 16765498 }));
    ((o.position.y = 0.28), s.add(o));
    const a = new Q(new Gn(0.012, 0.003, 4, 8), new Pi({ color: 10134443 }));
    ((a.position.y = 0.31), s.add(a));
  }
  return (
    s.traverse((i) => {
      i.frustumCulled = !1;
    }),
    s
  );
}
