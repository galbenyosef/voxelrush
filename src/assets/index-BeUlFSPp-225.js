// index-BeUlFSPp 225 — sun
// Lines 117575-118031 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class i5 {
  constructor(e, t, i = 2) {
    ((this.scene = e),
      (this.celestialTex = i5.buildCelestialTextures(i)),
      (this.moonPhaseEnabled = i > 0),
      (this.domeMat = new Gi({
        side: Mo,
        depthWrite: !1,
        fog: !1,
        uniforms: {
          uTop: { value: WC.clone() },
          uHorizon: { value: $C.clone() },
          uSunDir: { value: new k(0, 1, 0) },
          uSunColor: { value: new Ge(1, 0.9, 0.7) },
          uPhysical: { value: 0 },
          uSkyLut: { value: null },
          uSunRadiance: { value: new Ge() },
          uCelestialSun: { value: new k(0, 1, 0) },
        },
        vertexShader: `
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,
        fragmentShader: `
        uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uSunDir; uniform vec3 uSunColor;
        uniform float uPhysical; uniform sampler2D uSkyLut; uniform vec3 uSunRadiance; uniform vec3 uCelestialSun;
        varying vec3 vDir;
        void main() {
          float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
          if (uPhysical > 0.5) {
            // Shader pack: linear HDR radiance from the scattering LUT (see shaderpack.ts), plus
            // the sun's disc with limb darkening. Bloom and lens effects supply the glare.
            vec3 d = normalize(vDir);
            float az = atan(d.z, d.x);
            float el = asin(clamp(d.y, -1.0, 1.0));
            float t = sqrt(abs(el) / 1.5707963) * sign(el);
            vec3 col = textureLod(uSkyLut, vec2(az / 6.2831853 + 0.5, t * 0.5 + 0.5), 0.0).rgb;
            float r = acos(clamp(dot(d, uCelestialSun), -1.0, 1.0)) / 0.0105;
            float limb = sqrt(max(1.0 - r * r, 0.0));
            float disc = (1.0 - smoothstep(0.86, 1.0, r)) * mix(0.45, 1.0, pow(limb, 0.5));
            col += uSunRadiance * disc * smoothstep(-0.012, 0.004, d.y);
            gl_FragColor = vec4(col * (1.0 + (dither - 0.5) / 64.0), 1.0);
            return;
          }
          float h = max(vDir.y, 0.0);
          // two stacked gradients: a wide zenith falloff plus a tight, denser haze band that
          // hugs the horizon — that layering is what makes a sky read as atmosphere with depth
          vec3 col = mix(uHorizon, uTop, pow(h, 0.55));
          col = mix(col, uHorizon, pow(1.0 - h, 9.0) * 0.75);
          float d = max(dot(vDir, uSunDir), 0.0);
          col += uSunColor * pow(d, 220.0) * 0.85;  // sun core
          col += uSunColor * pow(d, 12.0) * 0.16;   // inner halo
          col += uSunColor * pow(d, 3.0) * 0.07;    // broad forward scatter across the sky
          // ordered dither: 8-bit sky gradients band badly without it, especially at dusk
          gl_FragColor = vec4(col + (dither - 0.5) / 255.0, 1.0);
        }`,
      })));
    const n = new Q(new ws(420, 24, 16), this.domeMat);
    ((n.frustumCulled = !1), this.group.add(n));
    const o = [];
    for (let l = 0; l < 700; l++) {
      const c = Math.random() * Math.PI * 2,
        h = Math.acos(Math.random() * 0.95),
        d = 400;
      o.push(
        d * Math.sin(h) * Math.cos(c),
        d * Math.cos(h),
        d * Math.sin(h) * Math.sin(c),
      );
    }
    const a = new oi();
    (a.setAttribute("position", new Dt(o, 3)),
      (this.starsMat = new Dm({
        color: 16777215,
        size: 1.6,
        sizeAttenuation: !1,
        transparent: !0,
        opacity: 0,
        depthWrite: !1,
        fog: !1,
      })),
      (this.stars = new Ld(a, this.starsMat)),
      (this.stars.frustumCulled = !1),
      (this.stars.renderOrder = zi.celestial),
      this.group.add(this.stars));
    const r = (l, c, h, d = Rl) => {
      const u = new Zt({
        map: c,
        transparent: !0,
        depthWrite: !1,
        fog: !1,
        blending: d,
      });
      u.customProgramCacheKey = () => l;
      const f = new Q(new ms(h, h), u);
      return (
        (f.frustumCulled = !1),
        (f.renderOrder = zi.celestial),
        this.group.add(f),
        f
      );
    };
    ((this.sunSprite = r("fc-sun", this.celestialTex.sun, 78, rs)),
      (this.moonSprite = r("fc-moon", this.celestialTex.moon, 52)),
      (this.earthSprite = r("fc-earth", jre(), 76)),
      (this.earthSprite.visible = !1),
      (this.shafts = r("fc-shafts", this.celestialTex.shafts, 300, rs)),
      (this.shafts.renderOrder = zi.sunShafts),
      (this.shafts.visible = !1),
      (this.moonMat = this.moonSprite.material),
      (this.moonMat.onBeforeCompile = (l) => {
        ((l.uniforms.uPhase = { value: 0 }),
          (l.fragmentShader = (
            `uniform float uPhase;
` + l.fragmentShader
          ).replace(
            "#include <map_fragment>",
            `#include <map_fragment>
         {
           // uPhase 0 = new moon, 0.5 = full, 1 = new again. The terminator sweeps across as a
           // cosine-scaled ellipse, so the lit crescent thins and fattens the way it should.
           vec2 mp = (vMapUv - 0.5) * 2.0;
           float sweep = cos(uPhase * 6.28318530718);
           float edge = sqrt(max(1.0 - mp.y * mp.y, 0.0)) * sweep;
           float lit = uPhase < 0.5 ? step(edge, mp.x) : step(mp.x, -edge);
           lit = mix(lit, 1.0, 0.06); // earthshine keeps the dark limb faintly visible
           diffuseColor.a *= lit;
         }`,
          )),
          (this.moonShader = l));
      }),
      (this.cloudLayer.mesh.renderOrder = zi.celestial + 1),
      e.add(this.cloudLayer.mesh),
      e.add(this.group),
      (this.sun = new Dl(16777215, 1.1)),
      (this.hemi = new z0(10471407, 5522734, 0.6)),
      e.add(this.sun, this.hemi, this.target),
      (this.sun.target = this.target),
      this.applyShadows(t));
  }
  sun;
  hemi;
  dayness = 1;
  sunDir = new k(0, 1, 0);
  sunColor = new Ge(1, 1, 1);
  skyColor = new Ge(0.45, 0.68, 0.95);
  celestialSunDir = new k(0, 1, 0);
  topColor = new Ge();
  horizonColor = new Ge();
  physical = !1;
  volumetricClouds = !1;
  group = new re();
  domeMat;
  stars;
  starsMat;
  sunSprite;
  moonSprite;
  earthSprite;
  lunar = !1;
  moonMat;
  moonShader = null;
  shafts;
  shaftStrength = 1;
  moonPhaseEnabled = !0;
  dayCount = 0;
  prevTime = 0;
  celestialTex;
  cloudLayer = new Ure();
  cloudsOn = !0;
  cloudTop = new Ge();
  cloudSide = new Ge();
  cloudBottom = new Ge();
  overcast = 0;
  overcastTarget = 0;
  clearSky = 0;
  clearSkyTarget = 0;
  target = new Xt();
  static buildCelestialTextures(e) {
    const t = e >= 2 ? 512 : e >= 1 ? 256 : 128;
    return {
      sun: e === 0 ? KC("#fff7d0", "rgba(255,220,130,0.85)") : Kre(t),
      moon: e === 0 ? KC("#e8f0ff", "rgba(180,200,255,0.5)") : Yre(t, e),
      shafts: Xre(e >= 2 ? 512 : 256),
    };
  }
  setCelestialDetail(e) {
    for (const t of Object.values(this.celestialTex)) t.dispose();
    ((this.celestialTex = i5.buildCelestialTextures(e)),
      (this.sunSprite.material.map = this.celestialTex.sun),
      (this.sunSprite.material.needsUpdate = !0),
      (this.moonMat.map = this.celestialTex.moon),
      (this.moonMat.needsUpdate = !0),
      (this.shafts.material.map = this.celestialTex.shafts),
      (this.shafts.material.needsUpdate = !0),
      (this.moonPhaseEnabled = e > 0));
  }
  setSunShafts(e) {
    this.shaftStrength = Math.max(0, e);
  }
  applyShadows(e) {
    if (((this.sun.castShadow = e > 0), e > 0)) {
      (this.sun.shadow.map?.dispose(),
        (this.sun.shadow.map = null),
        this.sun.shadow.mapSize.set(e, e));
      const t = this.sun.shadow.camera,
        i = e >= 4096 ? 90 : e >= 2048 ? 72 : 52;
      ((t.left = -i),
        (t.right = i),
        (t.top = i),
        (t.bottom = -i),
        (t.near = 0.5),
        (t.far = 400),
        t.updateProjectionMatrix(),
        (this.sun.shadow.bias = -4e-4),
        (this.sun.shadow.normalBias = 0.35),
        (this.sun.shadow.radius = e >= 4096 ? 3.5 : e >= 2048 ? 2.5 : 1.5));
    }
  }
  setClouds(e) {
    ((this.cloudsOn = e), (this.cloudLayer.mesh.visible = e && !this.lunar));
  }
  setCloudDeck(e, t, i, n) {
    this.cloudLayer.setDeck(e, t, i, n);
  }
  setCloudRange(e) {
    this.cloudLayer.setRange(e);
  }
  setOvercast(e, t = !1) {
    ((this.overcastTarget = t ? 0 : Math.max(0, Math.min(1, e))),
      (this.clearSkyTarget = t ? 1 : 0));
  }
  get overcastAmount() {
    return this.overcast;
  }
  get clearSkyAmount() {
    return this.clearSky;
  }
  get isLunar() {
    return this.lunar;
  }
  setPhysical(e, t) {
    ((this.physical = !!e),
      (this.volumetricClouds = this.physical && t),
      (this.domeMat.uniforms.uPhysical.value = this.physical ? 1 : 0),
      (this.domeMat.uniforms.uSkyLut.value = e));
  }
  haze = null;
  setHaze(e, t = 0.55, i = 0.2) {
    this.haze = e ? { color: new Ge(e), horizon: t, dome: i } : null;
  }
  setLunar(e) {
    ((this.lunar = e),
      (this.earthSprite.visible = e),
      (this.moonSprite.visible = !e),
      (this.cloudLayer.mesh.visible = this.cloudsOn && !e));
  }
  moonlit = 0;
  setMoonlit(e) {
    this.moonlit = Oe(e, 0, 1);
  }
  get litness() {
    return Math.max(this.dayness, this.moonlit * 0.5 * (1 - this.dayness));
  }
  bloodMoon = 0;
  bloodMoonTarget = 0;
  setBloodMoon(e) {
    this.bloodMoonTarget = e ? 1 : 0;
  }
  update(e, t, i = 1 / 60) {
    ((this.bloodMoon +=
      (this.bloodMoonTarget - this.bloodMoon) * Math.min(1, i * 0.4)),
      (this.overcast +=
        (this.overcastTarget - this.overcast) * Math.min(1, i * 0.5)),
      (this.clearSky +=
        (this.clearSkyTarget - this.clearSky) * Math.min(1, i * 0.5)),
      e < this.prevTime - Ur * 0.5 && this.dayCount++,
      (this.prevTime = e));
    const n = Math.PI * (e / (Ur / 2)),
      o = new k(Math.cos(n), Math.sin(n), 0.3).normalize(),
      a = o.y,
      r = Oe((a + 0.08) / 0.3, 0, 1),
      l = Oe(1 - Math.abs(a) / 0.3, 0, 1) * Oe(r * 2, 0, 1),
      c = this.lunar ? new Ge(66055) : Gre.clone().lerp(WC, r),
      h = this.lunar
        ? new Ge(461072)
        : Wre.clone()
            .lerp($C, r)
            .lerp(VC, l * 0.65);
    if (this.haze && !this.lunar) {
      const b = r * (1 - l * 0.5);
      (h.lerp(this.haze.color, this.haze.horizon * b),
        c.lerp(this.haze.color, this.haze.dome * b));
    }
    if (this.overcast > 0.01) {
      const b = $re.clone().multiplyScalar(ns(0.34, 1, r)),
        S = this.overcast * 0.82;
      (c.lerp(b, S), h.lerp(b.clone().multiplyScalar(1.12), S * 0.9));
    }
    const d = this.lunar ? 0 : this.bloodMoon * (1 - r);
    (d > 0.005 && (c.lerp(Zre, d * 0.85), h.lerp(Qre, d * 0.85)),
      this.moonMat.color.setRGB(1, 1 - d * 0.72, 1 - d * 0.8),
      this.domeMat.uniforms.uTop.value.copy(c),
      this.domeMat.uniforms.uHorizon.value.copy(h),
      this.domeMat.uniforms.uSunDir.value.copy(o),
      this.domeMat.uniforms.uSunColor.value.setRGB(
        1,
        ns(0.5, 0.92, r),
        ns(0.25, 0.72, r),
      ));
    const u = this.scene.fog;
    (u && u.color.copy(h),
      (this.scene.background = null),
      (this.starsMat.opacity = this.lunar
        ? 0.98
        : Math.pow(1 - r, 1.6) * (0.85 + Math.sin(e * 0.02) * 0.08)),
      (this.stars.rotation.z = e * 3e-5),
      this.group.position.copy(t));
    {
      const b = ns(0.16, 1, r),
        S = 1 - this.overcast * 0.42;
      (this.cloudTop
        .copy(h)
        .lerp(qC, ns(0.35, 0.86, r))
        .multiplyScalar(b * S * ns(1, 1.08, r)),
        this.cloudTop.lerp(VC, l * 0.3),
        this.cloudSide
          .copy(this.cloudTop)
          .multiplyScalar(0.86)
          .lerp(h, 0.1 + l * 0.2),
        this.cloudBottom
          .copy(c)
          .lerp(h, 0.35)
          .lerp(this.cloudTop, 0.4)
          .multiplyScalar(ns(0.7, 0.8, r) * S));
      const M =
        this.cloudsOn &&
        !this.lunar &&
        this.clearSky < 0.98 &&
        !(this.physical && this.volumetricClouds);
      ((this.cloudLayer.mesh.visible = M),
        M &&
          this.cloudLayer.update(
            t,
            i,
            Math.min(1, this.overcast * 1.15),
            0.9 + this.overcast * 2.2,
            {
              top: this.cloudTop,
              side: this.cloudSide,
              bottom: this.cloudBottom,
              skyTop: c,
              skyHorizon: h,
              sunDir: o,
              sunColor: this.domeMat.uniforms.uSunColor.value,
            },
          ));
    }
    (this.sunSprite.position.copy(o).multiplyScalar(390),
      this.sunSprite.lookAt(t),
      this.moonSprite.position.copy(o).multiplyScalar(-390),
      this.moonSprite.lookAt(t),
      (this.sunSprite.material.opacity = Oe(a * 6 + 0.6, 0, 1)),
      (this.moonSprite.material.opacity = Oe(-a * 6 + 0.6, 0, 1)),
      this.lunar &&
        (this.earthSprite.position.set(-210, 235, -285),
        this.earthSprite.lookAt(t),
        (this.sun.intensity = 0.82),
        (this.hemi.intensity = 0.18),
        this.skyColor.set(592659)),
      this.moonShader &&
        (this.moonShader.uniforms.uPhase.value = this.moonPhaseEnabled
          ? (this.dayCount / 8) % 1
          : 0.5));
    const f = Oe(a * 5, 0, 1) * (1 - Oe((a - 0.35) / 0.5, 0, 1) * 0.55),
      p = Math.min(1, f * this.shaftStrength * 0.75);
    if (
      ((this.shafts.visible = !this.lunar && p > 0.004), this.shafts.visible)
    ) {
      (this.shafts.position.copy(o).multiplyScalar(392),
        this.shafts.lookAt(t),
        this.shafts.rotateZ(e * 8e-5));
      const b = this.shafts.material;
      ((b.opacity = p),
        b.color.setRGB(1, ns(0.72, 0.95, r), ns(0.44, 0.82, r)));
    }
    const m = a > -0.04,
      g = m ? o : o.clone().negate();
    (this.sun.position.copy(t).addScaledVector(g, 140),
      this.target.position.copy(t));
    const y = Oe(a * 2.6, 0, 1);
    if (
      ((this.sun.intensity = m
        ? 0.12 + Math.pow(y, 0.65) * 1.35
        : Oe(-a * 3, 0, 1) * 0.3),
      m
        ? this.sun.color.setRGB(1, ns(0.48, 0.98, y), ns(0.2, 0.92, y * y))
        : (this.sun.color.setRGB(0.62, 0.72, 1),
          d > 0.005 && this.sun.color.lerp(Jre, d * 0.85)),
      (this.hemi.intensity = 0.46 + 0.44 * r + l * 0.26),
      this.hemi.color
        .copy(c)
        .lerp(h, 0.45 + l * 0.25)
        .lerp(qC, ns(0.36, 0.22, r)),
      this.hemi.groundColor.setRGB(
        ns(0.15, 0.36, r),
        ns(0.16, 0.3, r),
        ns(0.21, 0.2, r),
      ),
      this.physical &&
        !this.lunar &&
        ((this.sun.intensity *= 1.18),
        this.sun.color.multiply(Vre),
        (this.hemi.intensity *= 0.9),
        this.hemi.color.lerp(qre, 0.35 * r)),
      this.moonlit > 0 && !m && !this.lunar)
    ) {
      const b = this.moonlit * (1 - r) * (this.physical ? 0.4 : 1);
      ((this.sun.intensity = ns(
        this.sun.intensity,
        Math.max(this.sun.intensity, 1.15),
        b,
      )),
        this.sun.color.lerp(ele, b),
        (this.hemi.intensity += 0.62 * b),
        this.hemi.color.lerp(tle, 0.55 * b),
        this.hemi.groundColor.lerp(ile, 0.6 * b));
    }
    if (
      (this.lunar
        ? ((this.sun.intensity = 0.9),
          this.sun.color.setRGB(0.82, 0.88, 1),
          (this.hemi.intensity = 0.17),
          this.hemi.color.setRGB(0.12, 0.15, 0.22),
          this.hemi.groundColor.setRGB(0.025, 0.025, 0.035),
          (this.dayness = 0.42))
        : (this.dayness = r),
      this.sunDir.copy(g),
      this.sunColor
        .copy(this.sun.color)
        .multiplyScalar(Oe(this.sun.intensity, 0, 1.2)),
      this.skyColor.copy(c).lerp(h, 0.35),
      this.celestialSunDir.copy(o),
      this.topColor.copy(c),
      this.horizonColor.copy(h),
      this.physical)
    ) {
      ((this.sunSprite.visible = !1), (this.shafts.visible = !1));
      const b = this.domeMat.uniforms;
      (b.uCelestialSun.value.copy(o),
        b.uSunRadiance.value
          .copy(this.sun.color)
          .multiplyScalar(this.lunar ? 0 : 24 * (1 - this.overcast * 0.9)));
    } else this.sunSprite.visible = !0;
  }
}
