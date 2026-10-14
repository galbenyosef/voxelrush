// index-Dp6GxvJu 203 — sun
// Lines 110935-111368 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class Xg {
  constructor(e, t, i = 2) {
    w(this, "sun");
    w(this, "hemi");
    w(this, "dayness", 1);
    w(this, "sunDir", new k(0, 1, 0));
    w(this, "sunColor", new ze(1, 1, 1));
    w(this, "skyColor", new ze(0.45, 0.68, 0.95));
    w(this, "celestialSunDir", new k(0, 1, 0));
    w(this, "topColor", new ze());
    w(this, "horizonColor", new ze());
    w(this, "physical", !1);
    w(this, "volumetricClouds", !1);
    w(this, "group", new pe());
    w(this, "domeMat");
    w(this, "stars");
    w(this, "starsMat");
    w(this, "sunSprite");
    w(this, "moonSprite");
    w(this, "earthSprite");
    w(this, "lunar", !1);
    w(this, "moonMat");
    w(this, "moonShader", null);
    w(this, "shafts");
    w(this, "shaftStrength", 1);
    w(this, "moonPhaseEnabled", !0);
    w(this, "dayCount", 0);
    w(this, "prevTime", 0);
    w(this, "celestialTex");
    w(this, "cloudLayer", new _te());
    w(this, "cloudsOn", !0);
    w(this, "cloudTop", new ze());
    w(this, "cloudSide", new ze());
    w(this, "cloudBottom", new ze());
    w(this, "overcast", 0);
    w(this, "overcastTarget", 0);
    w(this, "clearSky", 0);
    w(this, "clearSkyTarget", 0);
    w(this, "target", new $t());
    w(this, "haze", null);
    w(this, "bloodMoon", 0);
    w(this, "bloodMoonTarget", 0);
    ((this.scene = e),
      (this.celestialTex = Xg.buildCelestialTextures(i)),
      (this.moonPhaseEnabled = i > 0),
      (this.domeMat = new sn({
        side: Js,
        depthWrite: !1,
        fog: !1,
        uniforms: {
          uTop: { value: gR.clone() },
          uHorizon: { value: yR.clone() },
          uSunDir: { value: new k(0, 1, 0) },
          uSunColor: { value: new ze(1, 0.9, 0.7) },
          uPhysical: { value: 0 },
          uSkyLut: { value: null },
          uSunRadiance: { value: new ze() },
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
    const s = new le(new mn(420, 24, 16), this.domeMat);
    ((s.frustumCulled = !1), this.group.add(s));
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
    const a = new ci();
    (a.setAttribute("position", new It(o, 3)),
      (this.starsMat = new Xp({
        color: 16777215,
        size: 1.6,
        sizeAttenuation: !1,
        transparent: !0,
        opacity: 0,
        depthWrite: !1,
        fog: !1,
      })),
      (this.stars = new T0(a, this.starsMat)),
      (this.stars.frustumCulled = !1),
      (this.stars.renderOrder = Gi.celestial),
      this.group.add(this.stars));
    const r = (l, c, h, d = Br) => {
      const u = new qt({
        map: c,
        transparent: !0,
        depthWrite: !1,
        fog: !1,
        blending: d,
      });
      u.customProgramCacheKey = () => l;
      const f = new le(new pn(h, h), u);
      return (
        (f.frustumCulled = !1),
        (f.renderOrder = Gi.celestial),
        this.group.add(f),
        f
      );
    };
    ((this.sunSprite = r("fc-sun", this.celestialTex.sun, 78, cn)),
      (this.moonSprite = r("fc-moon", this.celestialTex.moon, 52)),
      (this.earthSprite = r("fc-earth", Nte(), 76)),
      (this.earthSprite.visible = !1),
      (this.shafts = r("fc-shafts", this.celestialTex.shafts, 300, cn)),
      (this.shafts.renderOrder = Gi.sunShafts),
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
      (this.cloudLayer.mesh.renderOrder = Gi.celestial + 1),
      e.add(this.cloudLayer.mesh),
      e.add(this.group),
      (this.sun = new Wr(16777215, 1.1)),
      (this.hemi = new A0(10471407, 5522734, 0.6)),
      e.add(this.sun, this.hemi, this.target),
      (this.sun.target = this.target),
      this.applyShadows(t));
  }
  static buildCelestialTextures(e) {
    const t = e >= 2 ? 512 : e >= 1 ? 256 : 128;
    return {
      sun: e === 0 ? wR("#fff7d0", "rgba(255,220,130,0.85)") : Pte(t),
      moon: e === 0 ? wR("#e8f0ff", "rgba(180,200,255,0.5)") : Ote(t, e),
      shafts: Dte(e >= 2 ? 512 : 256),
    };
  }
  setCelestialDetail(e) {
    for (const t of Object.values(this.celestialTex)) t.dispose();
    ((this.celestialTex = Xg.buildCelestialTextures(e)),
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
    var t;
    if (((this.sun.castShadow = e > 0), e > 0)) {
      ((t = this.sun.shadow.map) == null || t.dispose(),
        (this.sun.shadow.map = null),
        this.sun.shadow.mapSize.set(e, e));
      const i = this.sun.shadow.camera,
        s = e >= 4096 ? 90 : e >= 2048 ? 72 : 52;
      ((i.left = -s),
        (i.right = s),
        (i.top = s),
        (i.bottom = -s),
        (i.near = 0.5),
        (i.far = 400),
        i.updateProjectionMatrix(),
        (this.sun.shadow.bias = -4e-4),
        (this.sun.shadow.normalBias = 0.35),
        (this.sun.shadow.radius = e >= 4096 ? 3.5 : e >= 2048 ? 2.5 : 1.5));
    }
  }
  setClouds(e) {
    ((this.cloudsOn = e), (this.cloudLayer.mesh.visible = e && !this.lunar));
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
  setHaze(e, t = 0.55, i = 0.2) {
    this.haze = e ? { color: new ze(e), horizon: t, dome: i } : null;
  }
  setLunar(e) {
    ((this.lunar = e),
      (this.earthSprite.visible = e),
      (this.moonSprite.visible = !e),
      (this.cloudLayer.mesh.visible = this.cloudsOn && !e));
  }
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
      e < this.prevTime - Qa * 0.5 && this.dayCount++,
      (this.prevTime = e));
    const s = Math.PI * (e / (Qa / 2)),
      o = new k(Math.cos(s), Math.sin(s), 0.3).normalize(),
      a = o.y,
      r = Ne((a + 0.08) / 0.3, 0, 1),
      l = Ne(1 - Math.abs(a) / 0.3, 0, 1) * Ne(r * 2, 0, 1),
      c = this.lunar ? new ze(66055) : Rte.clone().lerp(gR, r),
      h = this.lunar
        ? new ze(461072)
        : Cte.clone()
            .lerp(yR, r)
            .lerp(vR, l * 0.65);
    if (this.haze && !this.lunar) {
      const b = r * (1 - l * 0.5);
      (h.lerp(this.haze.color, this.haze.horizon * b),
        c.lerp(this.haze.color, this.haze.dome * b));
    }
    if (this.overcast > 0.01) {
      const b = kte.clone().multiplyScalar(Qi(0.34, 1, r)),
        S = this.overcast * 0.82;
      (c.lerp(b, S), h.lerp(b.clone().multiplyScalar(1.12), S * 0.9));
    }
    const d = this.lunar ? 0 : this.bloodMoon * (1 - r);
    (d > 0.005 && (c.lerp(Bte, d * 0.85), h.lerp(Hte, d * 0.85)),
      this.moonMat.color.setRGB(1, 1 - d * 0.72, 1 - d * 0.8),
      this.domeMat.uniforms.uTop.value.copy(c),
      this.domeMat.uniforms.uHorizon.value.copy(h),
      this.domeMat.uniforms.uSunDir.value.copy(o),
      this.domeMat.uniforms.uSunColor.value.setRGB(
        1,
        Qi(0.5, 0.92, r),
        Qi(0.25, 0.72, r),
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
      const b = Qi(0.16, 1, r),
        S = 1 - this.overcast * 0.42;
      (this.cloudTop
        .copy(h)
        .lerp(bR, Qi(0.35, 0.86, r))
        .multiplyScalar(b * S * Qi(1, 1.08, r)),
        this.cloudTop.lerp(vR, l * 0.3),
        this.cloudSide
          .copy(this.cloudTop)
          .multiplyScalar(0.86)
          .lerp(h, 0.1 + l * 0.2),
        this.cloudBottom
          .copy(c)
          .lerp(h, 0.35)
          .lerp(this.cloudTop, 0.4)
          .multiplyScalar(Qi(0.7, 0.8, r) * S));
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
      (this.sunSprite.material.opacity = Ne(a * 6 + 0.6, 0, 1)),
      (this.moonSprite.material.opacity = Ne(-a * 6 + 0.6, 0, 1)),
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
    const f = Ne(a * 5, 0, 1) * (1 - Ne((a - 0.35) / 0.5, 0, 1) * 0.55),
      p = Math.min(1, f * this.shaftStrength * 0.75);
    if (
      ((this.shafts.visible = !this.lunar && p > 0.004), this.shafts.visible)
    ) {
      (this.shafts.position.copy(o).multiplyScalar(392),
        this.shafts.lookAt(t),
        this.shafts.rotateZ(e * 8e-5));
      const b = this.shafts.material;
      ((b.opacity = p),
        b.color.setRGB(1, Qi(0.72, 0.95, r), Qi(0.44, 0.82, r)));
    }
    const m = a > -0.04,
      y = m ? o : o.clone().negate();
    (this.sun.position.copy(t).addScaledVector(y, 140),
      this.target.position.copy(t));
    const g = Ne(a * 2.6, 0, 1);
    if (
      ((this.sun.intensity = m
        ? 0.12 + Math.pow(g, 0.65) * 1.35
        : Ne(-a * 3, 0, 1) * 0.3),
      m
        ? this.sun.color.setRGB(1, Qi(0.48, 0.98, g), Qi(0.2, 0.92, g * g))
        : (this.sun.color.setRGB(0.62, 0.72, 1),
          d > 0.005 && this.sun.color.lerp(zte, d * 0.85)),
      (this.hemi.intensity = 0.46 + 0.44 * r + l * 0.26),
      this.hemi.color
        .copy(c)
        .lerp(h, 0.45 + l * 0.25)
        .lerp(bR, Qi(0.36, 0.22, r)),
      this.hemi.groundColor.setRGB(
        Qi(0.15, 0.36, r),
        Qi(0.16, 0.3, r),
        Qi(0.21, 0.2, r),
      ),
      this.physical &&
        !this.lunar &&
        ((this.sun.intensity *= 1.18),
        this.sun.color.multiply(Lte),
        (this.hemi.intensity *= 0.9),
        this.hemi.color.lerp(Ite, 0.35 * r)),
      this.lunar
        ? ((this.sun.intensity = 0.9),
          this.sun.color.setRGB(0.82, 0.88, 1),
          (this.hemi.intensity = 0.17),
          this.hemi.color.setRGB(0.12, 0.15, 0.22),
          this.hemi.groundColor.setRGB(0.025, 0.025, 0.035),
          (this.dayness = 0.42))
        : (this.dayness = r),
      this.sunDir.copy(y),
      this.sunColor
        .copy(this.sun.color)
        .multiplyScalar(Ne(this.sun.intensity, 0, 1.2)),
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
