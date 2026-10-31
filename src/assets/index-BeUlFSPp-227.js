// index-BeUlFSPp 227 — gain
// Lines 118298-118642 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class rle {
  constructor(e, t, i) {
    ((this.ctx = e), (this.output = t), (this.noiseBuffer = i));
  }
  engines = new Map();
  nextAt = 0;
  get voiceCount() {
    return this.engines.size;
  }
  update(e, t, i, n, o = !0) {
    const a = this.ctx.currentTime;
    if (a < this.nextAt) return;
    this.nextAt = a + 0.12;
    const r = [];
    if (o)
      for (const h of e) {
        const d = ale[h.type];
        if (!d || h.hp <= 0 || h.planet !== n) continue;
        const u = Math.hypot(h.vel.x, h.vel.y, h.vel.z);
        if (
          !(h.type === L.FIGHTER_JET
            ? (h.aux1 ?? 0) > 0.03
            : u > 0.2 || h.driver !== -1 || h.ownerName === Yo)
        )
          continue;
        const p = Math.hypot(h.pos.x - t.x, h.pos.y - t.y, h.pos.z - t.z);
        if (p >= d.range) continue;
        const m = (d.gain * (1 - p / d.range) ** 2) / (1 + p * 0.045);
        r.push({ v: h, p: d, dist: p, speed: u, level: m });
      }
    r.sort((h, d) => d.level - h.level);
    const l = r.slice(0, 8),
      c = new Set(l.map((h) => h.v.id));
    for (const [h, d] of this.engines) {
      if (c.has(h)) {
        d.retireAt = void 0;
        continue;
      }
      (d.retireAt === void 0 &&
        (d.gain.gain.setTargetAtTime(0, a, 0.14), (d.retireAt = a + 0.65)),
        a >= d.retireAt && (this.dispose(d), this.engines.delete(h)));
    }
    for (const { v: h, p: d, dist: u, speed: f, level: p } of l) {
      let m = this.engines.get(h.id);
      if (
        (m &&
          m.type !== h.type &&
          (this.dispose(m), this.engines.delete(h.id), (m = void 0)),
        !m)
      ) {
        if (this.engines.size >= 12) continue;
        ((m = this.create(h.type, d)), this.engines.set(h.id, m));
      }
      const g =
          h.type === L.FIGHTER_JET
            ? Oe(h.aux1 ?? 0, 0, 1)
            : Oe(
                f / (h.type === L.PLANE ? 40 : h.type === L.HELI ? 18 : 12),
                0,
                1,
              ),
        y =
          ((h.pos.x - t.x) * h.vel.x +
            (h.pos.y - t.y) * h.vel.y +
            (h.pos.z - t.z) * h.vel.z) /
          Math.max(1, u),
        b = h.type === L.FIGHTER_JET,
        S = Oe(343 / (343 + y), b ? 0.7 : 0.82, b ? 1.38 : 1.2),
        M = d.root * (1 + g * 0.65) * S;
      (m.tone.frequency.setTargetAtTime(M, a, 0.18),
        m.body.frequency.setTargetAtTime(M * 0.5, a, 0.18),
        m.pulse.frequency.setTargetAtTime(d.pulse * (0.7 + g * 0.7), a, 0.2),
        m.texture.gain.setTargetAtTime(d.texture * (0.25 + g * 0.75), a, 0.18),
        m.filter.frequency.setTargetAtTime(
          (d.filter * (1 + g * 0.7)) / (1 + u * 0.012),
          a,
          0.18,
        ));
      const E =
        ((h.pos.x - t.x) * Math.cos(i) - (h.pos.z - t.z) * Math.sin(i)) /
        Math.max(3, u);
      if (
        (m.pan.pan.setTargetAtTime(Oe(E, -0.92, 0.92), a, 0.12),
        m.whine && m.whine2 && m.whineGain && m.roarFilter && m.roarGain)
      ) {
        const T = Oe(-y / 60, -1, 1),
          x = (2300 + g * 1900) * S;
        (m.whine.frequency.setTargetAtTime(x, a, 0.15),
          m.whine2.frequency.setTargetAtTime(x * 1.52, a, 0.15),
          m.whineGain.gain.setTargetAtTime(
            (0.16 * (0.25 + g * 0.75) * (1 + T * 0.7)) / (1 + u * 0.016),
            a,
            0.15,
          ),
          m.roarFilter.frequency.setTargetAtTime(
            Oe(((650 + g * 1700) * S) / (1 + u * 0.005), 120, 6e3),
            a,
            0.15,
          ),
          m.roarGain.gain.setTargetAtTime(
            0.62 * (0.3 + g * 0.7) * (1 - T * 0.3),
            a,
            0.15,
          ));
      }
      const A =
        h.type === L.HELI
          ? Math.max(h.ownerName === Yo ? 1 : 0, h.rotorPower ?? 1)
          : 1;
      (m.gain.gain.cancelScheduledValues(a),
        m.gain.gain.setTargetAtTime(p * (0.65 + g * 0.35) * A, a, 0.18),
        m.gain.gain.cancelScheduledValues(a + 0.35),
        m.gain.gain.setTargetAtTime(0, a + 0.4, 0.18));
    }
  }
  create(e, t) {
    const i = this.ctx,
      n = i.createGain(),
      o = i.createStereoPanner(),
      a = i.createBiquadFilter();
    ((n.gain.value = 0),
      (a.type = "lowpass"),
      (a.frequency.value = t.filter),
      (a.Q.value = 0.45));
    const r = i.createOscillator(),
      l = i.createOscillator(),
      c = i.createOscillator(),
      h = i.createGain(),
      d = i.createGain();
    ((r.type =
      e === L.FIGHTER_JET ? "sine" : e === L.PLANE ? "sawtooth" : "triangle"),
      (r.frequency.value = t.root),
      (l.frequency.value = t.root * 0.5),
      (d.gain.value = e === L.FIGHTER_JET ? 0.22 : 0.58),
      (h.gain.value = e === L.FIGHTER_JET ? 0.025 : e === L.HELI ? 0.36 : 0.12),
      (c.frequency.value = t.pulse),
      c.connect(h).connect(d.gain),
      r.connect(d),
      l.connect(d),
      d.connect(a));
    const u = i.createBufferSource(),
      f = i.createGain();
    ((u.buffer = this.noiseBuffer),
      (u.loop = !0),
      (f.gain.value = t.texture * 0.25),
      u.connect(f).connect(a),
      a.connect(n).connect(o).connect(this.output),
      r.start(),
      l.start(),
      c.start(),
      u.start(0, (e % 7) * 0.1));
    const p = {
      type: e,
      gain: n,
      pan: o,
      filter: a,
      tone: r,
      body: l,
      pulse: c,
      noise: u,
      texture: f,
      nodes: [n, o, a, r, l, c, u, f, h, d],
    };
    if (e === L.HELI) {
      const m = i.createGain();
      ((m.gain.value = t.texture * 0.9),
        c.connect(m).connect(f.gain),
        p.nodes.push(m));
    }
    if (e === L.FIGHTER_JET) {
      const m = i.createOscillator(),
        g = i.createOscillator(),
        y = i.createGain(),
        b = i.createGain(),
        S = i.createBiquadFilter();
      ((m.type = "sine"),
        (g.type = "triangle"),
        (m.frequency.value = 2600),
        (g.frequency.value = 3900),
        (b.gain.value = 0.3),
        (y.gain.value = 0),
        (S.type = "bandpass"),
        (S.frequency.value = 3e3),
        (S.Q.value = 0.6),
        m.connect(y),
        g.connect(b).connect(y),
        y.connect(n));
      const M = i.createBufferSource(),
        E = i.createBiquadFilter(),
        A = i.createBiquadFilter(),
        T = i.createGain();
      ((M.buffer = this.noiseBuffer),
        (M.loop = !0),
        (E.type = "lowpass"),
        (E.frequency.value = 900),
        (E.Q.value = 0.6),
        (A.type = "lowshelf"),
        (A.frequency.value = 260),
        (A.gain.value = 6),
        (T.gain.value = 0),
        M.connect(E).connect(A).connect(T).connect(n),
        m.start(),
        g.start(),
        M.start(0, 0.37),
        Object.assign(p, {
          whine: m,
          whine2: g,
          whineGain: y,
          roarFilter: E,
          roarGain: T,
        }),
        p.nodes.push(m, g, y, b, S, M, E, A, T));
    }
    return p;
  }
  dispose(e) {
    for (const t of e.nodes) t instanceof AudioScheduledSourceNode && t.stop();
    for (const t of e.nodes) t.disconnect();
  }
  stop() {
    for (const e of this.engines.values()) this.dispose(e);
    (this.engines.clear(), (this.nextAt = 0));
  }
}
class YC {
  constructor(e, t, i, n, o) {
    ((this.scene = e),
      (this.geometry = t),
      (this.material = i),
      (this.width = n),
      (this.lifetime = o),
      (this.mesh = this.makeMesh(this.life.length)));
  }
  mesh;
  life = new Float64Array(64);
  count = 0;
  transform = new Xt();
  makeMesh(e) {
    const t = new On(this.geometry, this.material, e);
    return (
      (t.name = "bullet-tracer-batch"),
      t.instanceMatrix.setUsage(Bi),
      (t.count = 0),
      (t.frustumCulled = !1),
      (t.renderOrder = zi.tracer),
      this.scene.add(t),
      t
    );
  }
  add(e, t, i) {
    if (this.count === this.life.length) {
      const n = this.mesh,
        o = new Float64Array(this.life.length * 2);
      (o.set(this.life),
        (this.life = o),
        (this.mesh = this.makeMesh(o.length)),
        this.mesh.instanceMatrix.array.set(n.instanceMatrix.array),
        this.scene.remove(n),
        n.dispose());
    }
    (this.transform.position.copy(e).add(t).multiplyScalar(0.5),
      this.transform.scale.set(this.width, this.width, i),
      this.transform.lookAt(t),
      this.transform.updateMatrix(),
      this.mesh.setMatrixAt(this.count, this.transform.matrix),
      (this.life[this.count++] = this.lifetime),
      (this.mesh.count = this.count),
      (this.mesh.instanceMatrix.needsUpdate = !0));
  }
  update(e) {
    let t = !1;
    const i = this.mesh.instanceMatrix.array;
    for (let n = this.count - 1; n >= 0; n--) {
      if (((this.life[n] -= e), this.life[n] > 0)) continue;
      const o = --this.count;
      (n !== o &&
        ((this.life[n] = this.life[o]),
        i.copyWithin(n * 16, o * 16, o * 16 + 16)),
        (t = !0));
    }
    t &&
      ((this.mesh.count = this.count),
      (this.mesh.instanceMatrix.needsUpdate = !0));
  }
}
function lle(s, e, t = !1) {
  return new Gi({
    transparent: !0,
    depthWrite: !1,
    fog: !0,
    blending: t ? rs : Rl,
    uniforms: Rd.merge([
      It.fog,
      {
        uColor: { value: new Ge(s) },
        uOpacity: { value: e },
        uTime: { value: 0 },
        uHot: { value: t ? 1 : 0 },
      },
    ]),
    vertexShader: `
      varying vec3 vCloud, vNormalWorld, vEye;
      #include <fog_pars_vertex>
      void main() {
        vCloud = position;
        vec4 world = modelMatrix * vec4(position, 1.0);
        vNormalWorld = normalize(mat3(modelMatrix) * normal);
        vEye = cameraPosition - world.xyz;
        vec4 mvPosition = viewMatrix * world;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: `
      uniform vec3 uColor;
      uniform float uOpacity, uTime, uHot;
      varying vec3 vCloud, vNormalWorld, vEye;
      #include <fog_pars_fragment>
      float hash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
      float noise(vec3 p) {
        vec3 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
          mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);
      }
      void main() {
        vec3 p = vCloud * 8.0 - vec3(0.0,uTime*.25,0.0);
        float n = noise(p)*.6 + noise(p*2.1)*.28 + noise(p*4.2)*.12;
        vec3 normal = normalize(vNormalWorld);
        float facing = max(0.0, dot(normal, normalize(vEye)));
        float smoke = smoothstep(.0,.24,facing) * (.78 + n*.22);
        float fire = smoothstep(.03,.5,facing) * smoothstep(.16,.62,n);
        float alpha = uOpacity * mix(smoke,fire,uHot);
        if(alpha < .045) discard;
        float light = .5 + max(0.0,dot(normal,normalize(vec3(.4,1,.3))))*.8;
        vec3 rgb = uColor * light * (.55 + n*1.1);
        rgb = mix(rgb, mix(vec3(.85,.07,.012),vec3(1.0,.55,.12),n),uHot);
        gl_FragColor = vec4(rgb,alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
        #ifdef USE_FOG
          gl_FragColor.a *= 1.0 - fogFactor;
        #endif
      }`,
  });
}
