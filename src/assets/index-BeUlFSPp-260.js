// index-BeUlFSPp 260 — math
// Lines 136409-137253 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class vhe {
  constructor(e) {
    ((this.renderer = e),
      (this.skyClouds.frustumCulled = !1),
      (this.skyClouds.renderOrder = zi.skyClouds),
      (this.skyClouds.visible = !1),
      (this.skyClouds.matrixAutoUpdate = !1));
    const t = e.extensions;
    ((this.supported =
      e.capabilities.isWebGL2 &&
      (t.has("EXT_color_buffer_float") ||
        t.has("EXT_color_buffer_half_float"))),
      (this.placeholder.needsUpdate = !0));
    const i = () => ({ value: this.placeholder }),
      n = () => ({
        tNoise: { value: null },
        uCoverage: { value: 0.45 },
        uCloudTime: { value: 0 },
        uCloudOffset: { value: new ct() },
        uCloudBottom: yl.bottom,
        uCloudTop: yl.top,
      });
    ((this.lutPass = Ea(ihe, {
      uSunDir: { value: new k() },
      uMoonDir: { value: new k() },
      uSunI: { value: 24 },
      uMoonI: { value: 0 },
      uTop: { value: new Ge() },
      uHorizon: { value: new Ge() },
      uNight: { value: 0 },
      uOvercast: { value: 0 },
      uOvercastLevel: { value: 1 },
      uLunar: { value: 0 },
    })),
      (this.noisePass = Ea(she, { uSlice: { value: 0 } })),
      (this.cloudPass = Ea(nhe, {
        ...n(),
        tSkyLut: i(),
        tHistory: i(),
        uInvProj: { value: new Rt() },
        uCamWorld: { value: new Rt() },
        uPrevViewProj: { value: new Rt() },
        uCamPos: { value: new k() },
        uLightDir: { value: new k(0, 1, 0) },
        uLightColor: { value: new Ge() },
        uSteps: { value: 24 },
        uFrame: { value: 0 },
        uHistoryWeight: { value: 0 },
        uSigma: { value: 0.085 },
        uAmbient: { value: 1.1 },
      })),
      (this.cloudShadowPass = Ea(ohe, {
        ...n(),
        uCenter: { value: new ct() },
        uExtent: { value: _M },
        uSigma: { value: 0.085 },
      })));
    const o = () => ({
      tDepth: i(),
      uInvProj: { value: new Rt() },
      uCamWorld: { value: new Rt() },
    });
    ((this.aoPass = Ea(ahe, {
      ...o(),
      uProj: { value: new Rt() },
      uTexel: { value: new ct() },
      uRadius: { value: 0.85 },
      uSamples: { value: 10 },
      uKernel: { value: mhe() },
    })),
      (this.aoBlurPass = Ea(rhe, {
        ...o(),
        tAO: i(),
        uTexel: { value: new ct() },
      })),
      (this.raysPass = Ea(lhe, {
        tDepth: i(),
        tClouds: i(),
        uLightUv: { value: new ct() },
        uSamples: { value: 40 },
        uDensity: { value: 0.92 },
        uDecay: { value: 0.97 },
        uFrame: { value: 0 },
        uUseClouds: { value: 0 },
        uUnderwater: { value: 0 },
        uWaterY: { value: 0 },
        uInvProj: { value: new Rt() },
        uCamWorld: { value: new Rt() },
      })),
      (this.composePass = Ea(che, {
        ...o(),
        tScene: i(),
        tAO: i(),
        tRays: i(),
        tClouds: i(),
        tSkyLut: i(),
        uCamPos: { value: new k() },
        uHalfTexel: { value: new ct() },
        uAoStrength: { value: 0.85 },
        uUseClouds: { value: 0 },
        uCloudBottom: yl.bottom,
        uCloudTop: yl.top,
        uFogNear: { value: 1e4 },
        uFogFar: { value: 10001 },
        uFogColor: { value: new Ge() },
        uFogOverride: { value: 0 },
        uSkyProbe: { value: 1 },
        uHaze: { value: 0.002 },
        uLightDir: { value: new k() },
        uLightColor: { value: new Ge() },
        uRayColor: { value: new Ge() },
        uDay: { value: 1 },
        uLightning: { value: 0 },
        uUnderwater: { value: 0 },
        uWaterSigma: { value: Ty.clone() },
        uWaterScatter: { value: new Ge() },
        uTime: { value: 0 },
      })),
      (this.lumPass = Ea(hhe, { tHdr: i() })),
      (this.adaptPass = Ea(dhe, {
        tLum: i(),
        tPrev: i(),
        uDt: { value: 0.016 },
        uReset: { value: 1 },
      })));
    const a = () => ({
      tAdapt: i(),
      uExposure: { value: 1.15 },
      uKey: { value: 0.3 },
    });
    ((this.bloomDownPass = Ea(uhe, {
      ...a(),
      tSrc: i(),
      uTexel: { value: new ct() },
      uPrefilter: { value: 0 },
      uThreshold: { value: 1 },
    })),
      (this.bloomUpPass = Ea(
        fhe,
        { tSrc: i(), uTexel: { value: new ct() }, uRadius: { value: 1 } },
        rs,
      )),
      (this.finalPass = Ea(phe, {
        ...a(),
        tHdr: i(),
        tBloom: i(),
        tDepth: i(),
        tClouds: i(),
        uRes: { value: new ct() },
        uBloom: { value: 0.1 },
        uVignette: { value: 0.22 },
        uGrain: { value: 0 },
        uAberration: { value: 0 },
        uTime: { value: 0 },
        uFlare: { value: 0 },
        uUseClouds: { value: 0 },
        uLightUv: { value: new ct() },
        uFlareColor: { value: new Ge() },
        uSaturation: { value: 1.14 },
        uContrast: { value: 1.07 },
        uShadowTint: { value: new Ge(0.97, 0.99, 1.04) },
        uHighlightTint: { value: new Ge(1.03, 1, 0.96) },
      })));
  }
  supported;
  level = 0;
  msaa = !1;
  clouds = !0;
  width = 0;
  height = 0;
  allocated = !1;
  frameIndex = 0;
  savedFog = null;
  lutKey = new Float32Array(8).fill(NaN);
  noiseReady = !1;
  adaptReset = !0;
  cloudHistoryValid = !1;
  prevViewProj = new Rt();
  wetness = 0;
  arid = 0;
  frame = null;
  lightUv = new ct();
  lightOnScreen = 0;
  cloudsActive = !1;
  cloudLight = new k(-1, -1, -1);
  cloudLightDir = new k();
  cloudWind = new ct();
  cloudWindReady = !1;
  cloudOffset = new ct();
  sceneRT;
  composeRT;
  aoRT;
  aoBlurRT;
  raysRT;
  cloudRT = [];
  cloudShadowRT;
  lutRT;
  lumRT;
  adaptRT = [];
  bloomRT = [];
  noiseRT = null;
  lutPass;
  noisePass;
  cloudPass;
  cloudShadowPass;
  aoPass;
  aoBlurPass;
  raysPass;
  composePass;
  lumPass;
  adaptPass;
  bloomDownPass;
  bloomUpPass;
  finalPass;
  placeholder = new Ef(new Uint8Array([255, 255, 255, 255]), 1, 1);
  waterDepthMat = new Zt({ colorWrite: !1, side: Mi });
  waterMapRT = null;
  waterMapCam = new l5(-_h / 2, _h / 2, _h / 2, -_h / 2, 1, jt + 20);
  waterMapMat = new Gi({
    vertexShader: `
      attribute float waterFloor;
      varying float vY; varying float vFloor;
      void main() { vec4 w = modelMatrix * vec4( position, 1.0 ); vY = w.y; vFloor = waterFloor; gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: `
      varying float vY; varying float vFloor;
      void main() { gl_FragColor = vec4( vY + 1.0, vFloor + 1.0, 0.0, 1.0 ); }`,
    side: Mi,
  });
  waterMapCenter = new ct(NaN, NaN);
  waterMapAge = 0;
  clearColor = new Ge();
  skyClouds = new Q(
    new ms(2, 2),
    new Gi({
      uniforms: { tClouds: { value: null }, uRes: { value: new ct(1, 1) } },
      vertexShader:
        "void main() { gl_Position = vec4( position.xy, 1.0, 1.0 ); }",
      fragmentShader: `
      uniform sampler2D tClouds;
      uniform vec2 uRes;
      void main() { gl_FragColor = texture2D( tClouds, gl_FragCoord.xy / uRes ); }`,
      transparent: !0,
      depthWrite: !1,
      depthTest: !0,
      depthFunc: fd,
      fog: !1,
      toneMapped: !1,
      blending: HL,
      blendEquation: g0,
      blendSrc: OM,
      blendDst: Vy,
      blendSrcAlpha: BL,
      blendDstAlpha: OM,
    }),
  );
  get active() {
    return this.supported && this.level > 0;
  }
  get worldTarget() {
    return this.active && this.allocated ? this.sceneRT : null;
  }
  get skyLut() {
    return this.active && this.allocated ? this.lutRT.texture : null;
  }
  get volumetricClouds() {
    return this.active && this.clouds;
  }
  configure(e, t) {
    const i = this.supported ? e : 0,
      n = i !== this.level || t.msaa !== this.msaa;
    ((this.level = i),
      (this.msaa = t.msaa),
      (this.clouds = t.clouds),
      Kj(i),
      (ZA.value = i > 0 ? 1 : 0),
      (YO.value = i > 0 ? 2.4 : 1),
      n && this.release());
  }
  release() {
    if (this.allocated) {
      for (const e of [
        this.sceneRT,
        this.composeRT,
        this.aoRT,
        this.aoBlurRT,
        this.raysRT,
        this.cloudShadowRT,
        this.lutRT,
        this.lumRT,
        ...this.cloudRT,
        ...this.adaptRT,
        ...this.bloomRT,
      ])
        e.dispose();
      (this.sceneRT.depthTexture?.dispose(),
        (this.cloudRT = []),
        (this.adaptRT = []),
        (this.bloomRT = []),
        (_v.value = null),
        (Zs.uFxCloudShadow.value = null),
        (Zs.uFxCloudShadowParams.value.w = 0),
        this.waterMapRT?.dispose(),
        (this.waterMapRT = null),
        this.waterMapCenter.set(NaN, NaN),
        (Zs.uFxWaterMap.value = null),
        (Zs.uFxWaterMapParams.value.w = 0),
        (Zs.uFxWaterClear.value = 0),
        (Zs.uFxCamUnderwater.value = 0),
        (this.allocated = !1),
        (this.width = this.height = 0));
    }
  }
  allocate(e, t) {
    (this.release(), (this.width = e), (this.height = t));
    const i = this.msaa ? 4 : 0,
      n = new XE(e, t, Fa);
    ((n.format = id),
      (n.minFilter = n.magFilter = as),
      (this.sceneRT = Dr(e, t, {
        depthBuffer: !0,
        depthTexture: n,
        samples: i,
      })),
      (this.composeRT = Dr(e, t, { depthBuffer: !0, samples: i })));
    const o = Math.min(1, 1280 / Math.ceil(e / 2)),
      a = Math.ceil(Math.ceil(e / 2) * o),
      r = Math.ceil(Math.ceil(t / 2) * o);
    ((this.aoRT = Dr(a, r, {
      format: A0,
      type: Do,
      minFilter: as,
      magFilter: as,
    })),
      (this.aoBlurRT = Dr(a, r, { format: A0, type: Do })),
      (this.raysRT = Dr(a, r, { format: A0 })));
    const l = Math.min(
        Math.ceil(e / (this.level >= 2 ? 2 : 4)),
        this.level >= 2 ? 960 : 480,
      ),
      c = Math.ceil((l * t) / e);
    ((this.cloudRT = [0, 1].map(() => Dr(l, c))),
      (this.cloudShadowRT = Dr(256, 256, { format: A0, type: Do })),
      (this.lutRT = Dr(J0e, ehe, { wrapS: Nl, wrapT: E0 })),
      (this.lumRT = Dr(64, 64, { minFilter: za, generateMipmaps: !0 })),
      (this.adaptRT = [0, 1].map(() =>
        Dr(1, 1, { minFilter: as, magFilter: as }),
      )));
    let h = e,
      d = t;
    for (let u = 0; u < RM; u++)
      ((h = Math.max(1, Math.ceil(h / 2))),
        (d = Math.max(1, Math.ceil(d / 2))),
        this.bloomRT.push(Dr(h, d)));
    ((this.allocated = !0),
      (this.adaptReset = !0),
      (this.cloudHistoryValid = !1),
      this.lutKey.fill(NaN));
  }
  ensureNoise() {
    if (this.noiseReady) return;
    const e = this.renderer,
      t = new DD(s1, s1, s1, {
        type: Do,
        format: bo,
        depthBuffer: !1,
        minFilter: pn,
        magFilter: pn,
        generateMipmaps: !1,
      });
    t.texture.wrapS = t.texture.wrapT = t.texture.wrapR = Nl;
    for (let i = 0; i < s1; i++)
      ((this.u(this.noisePass).uSlice.value = (i + 0.5) / s1),
        e.setRenderTarget(t, i),
        this.noisePass.render(e));
    ((this.noiseRT = t), (this.noiseReady = !0));
    for (const i of [this.cloudPass, this.cloudShadowPass])
      i.material.uniforms.tNoise.value = t.texture;
  }
  u(e) {
    return e.material.uniforms;
  }
  draw(e, t) {
    (this.renderer.setRenderTarget(t), e.render(this.renderer));
  }
  prepare(e) {
    if (!this.active) return;
    const t = this.renderer;
    ((this.frame = e), this.frameIndex++);
    const i = t.getDrawingBufferSize(yhe),
      n = Math.max(1, Math.floor(i.x)),
      o = Math.max(1, Math.floor(i.y));
    (!this.allocated || n !== this.width || o !== this.height) &&
      this.allocate(n, o);
    const a = t.getRenderTarget(),
      r = t.autoClear;
    t.autoClear = !1;
    const l = e.dayness,
      c = this.lutKey;
    if (
      Math.abs(c[0] - e.sunDir.x) > 5e-4 ||
      Math.abs(c[1] - e.sunDir.y) > 5e-4 ||
      Math.abs(c[2] - e.overcast) > 0.005 ||
      c[3] !== (e.lunar ? 1 : 0) ||
      Math.abs(c[4] - l) > 0.005 ||
      Math.abs(c[5] - e.skyHorizon.r) > 0.004 ||
      Math.abs(c[6] - e.skyHorizon.g) > 0.004 ||
      Math.abs(c[7] - e.skyTop.b) > 0.004
    ) {
      ((c[0] = e.sunDir.x),
        (c[1] = e.sunDir.y),
        (c[2] = e.overcast),
        (c[3] = e.lunar ? 1 : 0),
        (c[4] = l),
        (c[5] = e.skyHorizon.r),
        (c[6] = e.skyHorizon.g),
        (c[7] = e.skyTop.b));
      const M = this.u(this.lutPass);
      (M.uSunDir.value.copy(e.sunDir).normalize(),
        M.uMoonDir.value.copy(e.sunDir).negate().normalize(),
        (M.uSunI.value = e.lunar ? 0 : 28),
        (M.uMoonI.value = e.lunar
          ? 0
          : 28 * 0.0035 * ni.clamp(-e.sunDir.y * 4, 0, 1)),
        M.uTop.value.copy(e.skyTop).convertSRGBToLinear(),
        M.uHorizon.value.copy(e.skyHorizon).convertSRGBToLinear(),
        (M.uNight.value = (1 - ni.smoothstep(e.sunDir.y, -0.16, 0.04)) * 0.9),
        (M.uOvercast.value = Math.min(1, e.overcast * 0.95)),
        (M.uOvercastLevel.value = 2.6 - Math.max(0, e.overcast - 0.6) * 2.6),
        (M.uLunar.value = e.lunar ? 1 : 0),
        this.draw(this.lutPass, this.lutRT));
    }
    this.arid +=
      (e.arid - this.arid) * (1 - Math.exp(-Math.min(e.dt, 0.25) / 6));
    const h = 0.4 - this.arid * 0.14,
      d = e.lunar
        ? 0
        : ni.clamp((h + e.overcast * 0.6) * (1 - e.clearSky), 0, 1),
      u = !e.lava && e.underwater > 0.5;
    this.cloudsActive = this.clouds && d > 0.01 && !u;
    const f = e.camera;
    f.updateMatrixWorld();
    const p = e.time % 7500,
      m = Math.min(Math.max(e.dt, 0), 0.25),
      g = this.cloudWindReady ? 1 - Math.exp(-m / 8) : 1;
    ((this.cloudWindReady = !0),
      (this.cloudWind.x += (3.2 + e.windX * 1.5 - this.cloudWind.x) * g),
      (this.cloudWind.y += (1.2 + e.windZ * 1.5 - this.cloudWind.y) * g),
      this.cloudOffset.addScaledVector(this.cloudWind, m));
    const y = 0.075 + e.overcast * 0.05,
      b = ni.clamp((e.overcast - 0.75) * 4, 0, 1),
      S = CM.copy(e.lightColor).multiplyScalar(1 - b * 0.7);
    if ((e.sunDir.y < 0 && S.multiplyScalar(0.12), this.cloudsActive)) {
      this.ensureNoise();
      for (const B of [this.cloudPass, this.cloudShadowPass]) {
        const H = this.u(B);
        ((H.uCoverage.value = d),
          (H.uCloudTime.value = p),
          H.uCloudOffset.value.copy(this.cloudOffset),
          (H.uSigma.value = y));
      }
      const M = this.u(this.cloudPass),
        E = this.cloudRT[this.frameIndex & 1],
        A = this.cloudRT[(this.frameIndex + 1) & 1];
      ((M.tSkyLut.value = this.lutRT.texture),
        (M.tHistory.value = E.texture),
        M.uInvProj.value.copy(f.projectionMatrixInverse),
        M.uCamWorld.value.copy(f.matrixWorld),
        M.uPrevViewProj.value.copy(this.prevViewProj),
        M.uCamPos.value.copy(f.position),
        M.uLightDir.value.copy(e.lightDir).normalize(),
        M.uLightColor.value.copy(S),
        (M.uSteps.value = this.level >= 2 ? 40 : 26),
        (M.uAmbient.value = 1.1 * (1 - b * 0.45) + e.lightning * 4),
        (M.uFrame.value = this.frameIndex % 64));
      const T =
          f.position.y > yl.bottom.value - 25 &&
          f.position.y < yl.top.value + 25,
        x =
          this.cloudLight.distanceToSquared(kM.set(S.r, S.g, S.b)) > 0.0025 ||
          this.cloudLightDir.dot(e.lightDir) < 0.9995;
      (this.cloudLight.copy(kM), this.cloudLightDir.copy(e.lightDir));
      const R = Math.exp(-Math.min(e.dt, 0.25) / (T ? 0.02 : 0.12));
      ((M.uHistoryWeight.value =
        !this.cloudHistoryValid || x || e.lightning > 0.02
          ? 0
          : Math.min(0.9, R)),
        this.draw(this.cloudPass, A),
        (this.cloudHistoryValid = !0));
      const _ = _M / 256,
        C = this.u(this.cloudShadowPass),
        P = Math.round(f.position.x / _) * _,
        O = Math.round(f.position.z / _) * _;
      (((this.frameIndex & 1) === 0 ||
        Zs.uFxCloudShadowParams.value.w === 0 ||
        P !== C.uCenter.value.x ||
        O !== C.uCenter.value.y) &&
        (C.uCenter.value.set(P, O),
        this.draw(this.cloudShadowPass, this.cloudShadowRT)),
        (Zs.uFxCloudShadow.value = this.cloudShadowRT.texture),
        Zs.uFxCloudShadowParams.value.set(
          C.uCenter.value.x,
          C.uCenter.value.y,
          _M,
          e.sunDir.y > 0 ? 0.85 : 0.4,
        ));
    } else
      ((this.cloudHistoryValid = !1), (Zs.uFxCloudShadowParams.value.w = 0));
    (this.prevViewProj.multiplyMatrices(
      f.projectionMatrix,
      f.matrixWorldInverse,
    ),
      (this.wetness +=
        (e.wetness - this.wetness) *
        (1 - Math.exp(-e.dt / (e.wetness > this.wetness ? 12 : 45)))),
      (Zs.uFxWetness.value = this.wetness),
      Zs.uFxLightDir.value.copy(e.lightDir).normalize(),
      (Zs.uFxCloudMidY.value = (yl.bottom.value + yl.top.value) / 2),
      (Zs.uFxTime.value = e.time % 3600),
      (QA.value = Math.max(0.05, e.exposure) / 0.6),
      (_v.value = this.adaptRT[this.frameIndex & 1].texture),
      (JA.value = this.exposureKey(e)),
      Zs.uFxSkyTint.value
        .copy(this.u(this.lutPass).uTop.value)
        .lerp(this.u(this.lutPass).uHorizon.value, 0.5)
        .multiplyScalar(0.6 + l * 1.2),
      Zs.uFxWaterTint.value
        .copy(Zs.uFxSkyTint.value)
        .multiply(CM.setRGB(0.02, 0.11, 0.16)),
      (Zs.uFxCamUnderwater.value = !e.lava && e.underwater > 0.5 ? 1 : 0),
      t.setRenderTarget(a),
      (t.autoClear = r));
  }
  beginWorld(e) {
    if (!this.active || !this.allocated) return;
    this.updateWaterMap(e);
    const t = e.fog;
    if (
      (t &&
        ((this.savedFog = [t.near, t.far]),
        (t.near = 1e8),
        (t.far = 100000001)),
      this.skyClouds.parent !== e && e.add(this.skyClouds),
      (this.skyClouds.visible = this.cloudsActive),
      this.cloudsActive)
    ) {
      const i = this.skyClouds.material;
      ((i.uniforms.tClouds.value =
        this.cloudRT[(this.frameIndex + 1) & 1].texture),
        i.uniforms.uRes.value.set(this.width, this.height));
    }
    this.renderer.setRenderTarget(this.sceneRT);
  }
  updateWaterMap(e) {
    const t = this.frame;
    if (!t) return;
    const i = this.renderer,
      n = t.camera.position,
      o = Math.round(n.x / 8) * 8,
      a = Math.round(n.z / 8) * 8,
      r = o !== this.waterMapCenter.x || a !== this.waterMapCenter.y;
    if (this.waterMapRT) {
      if (!r && ++this.waterMapAge < 20) return;
    } else {
      const p = i.extensions.has("EXT_color_buffer_float");
      this.waterMapRT = new tl(_h, _h, {
        type: p ? Fa : xd,
        format: bo,
        minFilter: as,
        magFilter: as,
        depthBuffer: !0,
        generateMipmaps: !1,
      });
    }
    ((this.waterMapAge = 0), this.waterMapCenter.set(o, a));
    const l = this.waterMapCam;
    (l.position.set(o, jt + 10, a),
      l.up.set(0, 0, -1),
      l.lookAt(o, 0, a),
      l.updateMatrixWorld(),
      l.layers.set(KO));
    const c = i.getRenderTarget(),
      h = i.autoClear,
      d = i.getClearAlpha();
    i.getClearColor(this.clearColor);
    const u = e.matrixWorldAutoUpdate,
      f = i.shadowMap.autoUpdate;
    ((e.overrideMaterial = this.waterMapMat),
      (e.matrixWorldAutoUpdate = !1),
      (i.shadowMap.autoUpdate = !1));
    try {
      (i.setRenderTarget(this.waterMapRT),
        i.setClearColor(0, 0),
        i.clear(!0, !0, !1),
        (i.autoClear = !1),
        i.render(e, l));
    } finally {
      ((e.overrideMaterial = null),
        (e.matrixWorldAutoUpdate = u),
        (i.shadowMap.autoUpdate = f),
        i.setClearColor(this.clearColor, d),
        (i.autoClear = h),
        i.setRenderTarget(c));
    }
    ((Zs.uFxWaterMap.value = this.waterMapRT.texture),
      Zs.uFxWaterMapParams.value.set(o, a, _h, 1),
      (Zs.uFxWaterClear.value = 1));
  }
  endWorld(e) {
    if (
      ((this.skyClouds.visible = !1),
      !this.active || !this.allocated || !this.frame)
    )
      return;
    const t = e.fog;
    (t && this.savedFog && ([t.near, t.far] = this.savedFog),
      (this.savedFog = null));
    const i = this.renderer,
      n = this.frame,
      o = n.camera,
      a = i.autoClear;
    i.autoClear = !1;
    const r = o.layers.mask,
      l = e.matrixWorldAutoUpdate;
    (o.layers.set(qO),
      (e.overrideMaterial = this.waterDepthMat),
      (e.matrixWorldAutoUpdate = !1));
    try {
      i.render(e, o);
    } finally {
      ((e.overrideMaterial = null),
        (e.matrixWorldAutoUpdate = l),
        (o.layers.mask = r));
    }
    const c = this.sceneRT.depthTexture,
      h = (R) => {
        const _ = this.u(R);
        ((_.tDepth.value = c),
          _.uInvProj && _.uInvProj.value.copy(o.projectionMatrixInverse),
          _.uCamWorld && _.uCamWorld.value.copy(o.matrixWorld));
      },
      d = this.u(this.aoPass);
    (h(this.aoPass),
      d.uProj.value.copy(o.projectionMatrix),
      d.uTexel.value.set(1 / this.width, 1 / this.height),
      (d.uSamples.value = this.level >= 2 ? 16 : 10),
      this.draw(this.aoPass, this.aoRT));
    const u = this.u(this.aoBlurPass);
    (h(this.aoBlurPass),
      (u.tAO.value = this.aoRT.texture),
      u.uTexel.value.set(1 / this.aoRT.width, 1 / this.aoRT.height),
      this.draw(this.aoBlurPass, this.aoBlurRT));
    const f = kM
      .copy(n.lightDir)
      .normalize()
      .multiplyScalar(1e3)
      .add(o.position);
    f.project(o);
    const p = f.x * 0.5 + 0.5,
      m = f.y * 0.5 + 0.5;
    this.lightUv.set(
      Number.isFinite(p) ? ni.clamp(p, -4, 5) : -4,
      Number.isFinite(m) ? ni.clamp(m, -4, 5) : -4,
    );
    const g = o.getWorldDirection(ghe),
      y = ni.smoothstep(g.dot(n.lightDir), -0.05, 0.45);
    this.lightOnScreen = y;
    const b = this.u(this.raysPass);
    ((b.tDepth.value = c),
      (b.tClouds.value = this.cloudRT[(this.frameIndex + 1) & 1].texture),
      (b.uUseClouds.value = this.cloudsActive ? 1 : 0),
      b.uLightUv.value.copy(this.lightUv),
      (b.uSamples.value = this.level >= 2 ? 56 : 36),
      (b.uDecay.value = this.level >= 2 ? 0.972 : 0.96),
      (b.uFrame.value = this.frameIndex % 64));
    const S = n.lava ? 0 : ni.clamp(n.underwater, 0, 1);
    ((b.uUnderwater.value = S > 0.5 ? 1 : 0),
      (b.uWaterY.value = n.waterSurfaceY),
      b.uInvProj.value.copy(o.projectionMatrixInverse),
      b.uCamWorld.value.copy(o.matrixWorld),
      y > 0.001 && n.rays > 0 && this.draw(this.raysPass, this.raysRT));
    const M = this.u(this.composePass);
    (h(this.composePass),
      (M.tScene.value = this.sceneRT.texture),
      (M.tAO.value = this.aoBlurRT.texture),
      (M.tRays.value = this.raysRT.texture),
      (M.tClouds.value = this.cloudRT[(this.frameIndex + 1) & 1].texture),
      (M.tSkyLut.value = this.lutRT.texture),
      (M.uUseClouds.value = this.cloudsActive ? 1 : 0),
      M.uCamPos.value.copy(o.position),
      M.uHalfTexel.value.set(1 / this.aoBlurRT.width, 1 / this.aoBlurRT.height),
      (M.uAoStrength.value = this.level >= 2 ? 0.75 : 0.65),
      (M.uFogNear.value = n.fogNear * 0.92),
      (M.uFogFar.value = n.fogFar * 0.93),
      M.uFogColor.value.copy(n.fogColor).convertSRGBToLinear());
    const E = ni.clamp(n.underwater, 0, 1),
      A = n.lava ? 0 : E;
    if (
      ((M.uFogOverride.value = n.lava ? E : 0),
      (M.uUnderwater.value = A),
      (M.uTime.value = n.time % 600),
      A > 0)
    ) {
      const R = Math.max(0, n.waterSurfaceY - o.position.y);
      M.uWaterScatter.value
        .copy(n.fogColor)
        .convertSRGBToLinear()
        .multiplyScalar(2.2 * Math.exp(-R * 0.045));
    }
    M.uSkyProbe.value = Math.max(0.015, n.skyProbe);
    const T = 1 - Math.min(1, Math.abs(n.sunDir.y) * 3.5);
    ((M.uHaze.value =
      (9e-4 + T * 0.0017 + n.overcast * 0.0017) * (n.lunar ? 0 : 1) * E9),
      M.uLightDir.value.copy(n.lightDir).normalize(),
      M.uLightColor.value.copy(n.lightColor),
      (M.uDay.value = n.dayness),
      (M.uLightning.value = n.lightning));
    const x =
      n.rays *
      y *
      (1 - n.overcast * 0.75) *
      (n.sunDir.y > 0 ? 1 : 0.25) *
      (this.level >= 2 ? 1.1 : 0.9);
    (M.uRayColor.value.copy(n.lightColor).multiplyScalar(x * 0.4),
      x <= 0 && M.uRayColor.value.setRGB(0, 0, 0),
      A > 0 &&
        M.uRayColor.value.multiply(
          CM.setRGB(1 - A * 0.6, 1 + A * 0.2, 1 + A * 0.5),
        ),
      this.draw(this.composePass, this.composeRT),
      i.setRenderTarget(this.composeRT),
      (i.autoClear = a));
  }
  present() {
    if (!this.active || !this.allocated || !this.frame) return;
    const e = this.renderer,
      t = this.frame,
      i = e.autoClear;
    ((e.autoClear = !1),
      (this.u(this.lumPass).tHdr.value = this.composeRT.texture),
      this.draw(this.lumPass, this.lumRT));
    const n = this.adaptRT[this.frameIndex & 1],
      o = this.adaptRT[(this.frameIndex + 1) & 1],
      a = this.u(this.adaptPass);
    ((a.tLum.value = this.lumRT.texture),
      (a.tPrev.value = n.texture),
      (a.uDt.value = Math.min(0.25, t.dt)),
      (a.uReset.value = this.adaptReset ? 1 : 0),
      this.draw(this.adaptPass, o),
      (this.adaptReset = !1));
    const r = this.exposureKey(t),
      l = this.u(this.bloomDownPass);
    ((l.tAdapt.value = o.texture),
      (l.uExposure.value = t.exposure),
      (l.uKey.value = r),
      (l.uThreshold.value = 0.95));
    let c = this.composeRT.texture,
      h = this.width,
      d = this.height;
    for (let g = 0; g < RM; g++)
      ((l.tSrc.value = c),
        l.uTexel.value.set(1 / h, 1 / d),
        (l.uPrefilter.value = g === 0 ? 1 : 0),
        this.draw(this.bloomDownPass, this.bloomRT[g]),
        (c = this.bloomRT[g].texture),
        (h = this.bloomRT[g].width),
        (d = this.bloomRT[g].height));
    const u = this.u(this.bloomUpPass);
    for (let g = RM - 1; g > 0; g--)
      ((u.tSrc.value = this.bloomRT[g].texture),
        u.uTexel.value.set(
          1 / this.bloomRT[g].width,
          1 / this.bloomRT[g].height,
        ),
        (u.uRadius.value = 1),
        this.draw(this.bloomUpPass, this.bloomRT[g - 1]));
    const f = this.u(this.finalPass);
    ((f.tHdr.value = this.composeRT.texture),
      (f.tBloom.value = this.bloomRT[0].texture),
      (f.tAdapt.value = o.texture),
      (f.tDepth.value = this.sceneRT.depthTexture),
      (f.tClouds.value = this.cloudRT[(this.frameIndex + 1) & 1].texture),
      (f.uUseClouds.value = this.cloudsActive ? 1 : 0),
      (f.uExposure.value = t.exposure),
      (f.uKey.value = r),
      f.uRes.value.set(this.width, this.height),
      (f.uBloom.value = this.level >= 2 ? 0.075 : 0.06),
      (f.uVignette.value = this.level >= 2 ? 0.26 : 0.18),
      (f.uGrain.value = this.level >= 2 ? 0.012 : 0),
      (f.uAberration.value = this.level >= 2 ? 0.0028 : 0),
      (f.uTime.value = t.time));
    const p = t.sunDir.y > 0 && !t.lunar;
    ((f.uFlare.value =
      this.level >= 2 && p && t.underwater < 0.5
        ? this.lightOnScreen * (1 - t.overcast * 0.85)
        : 0),
      f.uLightUv.value.copy(this.lightUv),
      f.uFlareColor.value.copy(t.lightColor));
    const m =
      ni.clamp(1 - Math.abs(t.sunDir.y) * 4, 0, 1) *
      (t.sunDir.y > -0.05 ? 1 : 0);
    (f.uHighlightTint.value.setRGB(
      1.02 + m * 0.05,
      1 - m * 0.025,
      0.97 - m * 0.06,
    ),
      f.uShadowTint.value.setRGB(
        0.97,
        0.99 + (1 - t.dayness) * 0.01,
        1.03 + (1 - t.dayness) * 0.04 + t.overcast * 0.02,
      ),
      (f.uSaturation.value = 1.14 - t.overcast * 0.14),
      this.draw(this.finalPass, null),
      (e.autoClear = i));
  }
  exposureKey(e) {
    return 0.3 * (1 - ni.clamp((e.overcast - 0.75) * 4, 0, 1) * 0.35);
  }
  dispose() {
    (this.release(),
      this.noiseRT?.dispose(),
      (this.noiseRT = null),
      (this.noiseReady = !1),
      this.waterDepthMat.dispose(),
      this.waterMapMat.dispose(),
      this.skyClouds.removeFromParent(),
      this.skyClouds.geometry.dispose(),
      this.skyClouds.material.dispose());
    for (const e of [
      this.lutPass,
      this.noisePass,
      this.cloudPass,
      this.cloudShadowPass,
      this.aoPass,
      this.aoBlurPass,
      this.raysPass,
      this.composePass,
      this.lumPass,
      this.adaptPass,
      this.bloomDownPass,
      this.bloomUpPass,
      this.finalPass,
    ])
      (e.material.dispose(), e.dispose());
  }
}
