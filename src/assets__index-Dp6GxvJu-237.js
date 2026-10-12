// assets__index-Dp6GxvJu 237 — math
// Lines 128734-129583 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class Hse {
  constructor(e) {
    w(this, "supported");
    w(this, "level", 0);
    w(this, "msaa", !1);
    w(this, "clouds", !0);
    w(this, "width", 0);
    w(this, "height", 0);
    w(this, "allocated", !1);
    w(this, "frameIndex", 0);
    w(this, "savedFog", null);
    w(this, "lutKey", new Float32Array(8).fill(NaN));
    w(this, "noiseReady", !1);
    w(this, "adaptReset", !0);
    w(this, "cloudHistoryValid", !1);
    w(this, "prevViewProj", new bt());
    w(this, "wetness", 0);
    w(this, "arid", 0);
    w(this, "frame", null);
    w(this, "lightUv", new tt());
    w(this, "lightOnScreen", 0);
    w(this, "cloudsActive", !1);
    w(this, "cloudLight", new k(-1, -1, -1));
    w(this, "cloudLightDir", new k());
    w(this, "cloudWind", new tt());
    w(this, "cloudWindReady", !1);
    w(this, "cloudOffset", new tt());
    w(this, "sceneRT");
    w(this, "composeRT");
    w(this, "aoRT");
    w(this, "aoBlurRT");
    w(this, "raysRT");
    w(this, "cloudRT", []);
    w(this, "cloudShadowRT");
    w(this, "lutRT");
    w(this, "lumRT");
    w(this, "adaptRT", []);
    w(this, "bloomRT", []);
    w(this, "noiseRT", null);
    w(this, "lutPass");
    w(this, "noisePass");
    w(this, "cloudPass");
    w(this, "cloudShadowPass");
    w(this, "aoPass");
    w(this, "aoBlurPass");
    w(this, "raysPass");
    w(this, "composePass");
    w(this, "lumPass");
    w(this, "adaptPass");
    w(this, "bloomDownPass");
    w(this, "bloomUpPass");
    w(this, "finalPass");
    w(this, "placeholder", new ay(new Uint8Array([255, 255, 255, 255]), 1, 1));
    w(this, "waterDepthMat", new qt({ colorWrite: !1, side: Ai }));
    w(this, "waterMapRT", null);
    w(
      this,
      "waterMapCam",
      new ny(-Bh / 2, Bh / 2, Bh / 2, -Bh / 2, 1, Kt + 20),
    );
    w(
      this,
      "waterMapMat",
      new sn({
        vertexShader: `
      attribute float waterFloor;
      varying float vY; varying float vFloor;
      void main() { vec4 w = modelMatrix * vec4( position, 1.0 ); vY = w.y; vFloor = waterFloor; gl_Position = projectionMatrix * viewMatrix * w; }`,
        fragmentShader: `
      varying float vY; varying float vFloor;
      void main() { gl_FragColor = vec4( vY + 1.0, vFloor + 1.0, 0.0, 1.0 ); }`,
        side: Ai,
      }),
    );
    w(this, "waterMapCenter", new tt(NaN, NaN));
    w(this, "waterMapAge", 0);
    w(this, "clearColor", new ze());
    w(
      this,
      "skyClouds",
      new le(
        new pn(2, 2),
        new sn({
          uniforms: { tClouds: { value: null }, uRes: { value: new tt(1, 1) } },
          vertexShader:
            "void main() { gl_Position = vec4( position.xy, 1.0, 1.0 ); }",
          fragmentShader: `
      uniform sampler2D tClouds;
      uniform vec2 uRes;
      void main() { gl_FragColor = texture2D( tClouds, gl_FragCoord.xy / uRes ); }`,
          transparent: !0,
          depthWrite: !1,
          depthTest: !0,
          depthFunc: m0,
          fog: !1,
          toneMapped: !1,
          blending: d8,
          blendEquation: Ac,
          blendSrc: h3,
          blendDst: X2,
          blendSrcAlpha: u8,
          blendDstAlpha: h3,
        }),
      ),
    );
    ((this.renderer = e),
      (this.skyClouds.frustumCulled = !1),
      (this.skyClouds.renderOrder = Gi.skyClouds),
      (this.skyClouds.visible = !1),
      (this.skyClouds.matrixAutoUpdate = !1));
    const t = e.extensions;
    ((this.supported =
      e.capabilities.isWebGL2 &&
      (t.has("EXT_color_buffer_float") ||
        t.has("EXT_color_buffer_half_float"))),
      (this.placeholder.needsUpdate = !0));
    const i = () => ({ value: this.placeholder }),
      s = () => ({
        tNoise: { value: null },
        uCoverage: { value: 0.45 },
        uCloudTime: { value: 0 },
        uCloudOffset: { value: new tt() },
      });
    ((this.lutPass = ea(Sse, {
      uSunDir: { value: new k() },
      uMoonDir: { value: new k() },
      uSunI: { value: 24 },
      uMoonI: { value: 0 },
      uTop: { value: new ze() },
      uHorizon: { value: new ze() },
      uNight: { value: 0 },
      uOvercast: { value: 0 },
      uOvercastLevel: { value: 1 },
      uLunar: { value: 0 },
    })),
      (this.noisePass = ea(Ese, { uSlice: { value: 0 } })),
      (this.cloudPass = ea(xse, {
        ...s(),
        tSkyLut: i(),
        tHistory: i(),
        uInvProj: { value: new bt() },
        uCamWorld: { value: new bt() },
        uPrevViewProj: { value: new bt() },
        uCamPos: { value: new k() },
        uLightDir: { value: new k(0, 1, 0) },
        uLightColor: { value: new ze() },
        uSteps: { value: 24 },
        uFrame: { value: 0 },
        uHistoryWeight: { value: 0 },
        uSigma: { value: 0.085 },
        uAmbient: { value: 1.1 },
      })),
      (this.cloudShadowPass = ea(Tse, {
        ...s(),
        uCenter: { value: new tt() },
        uExtent: { value: n3 },
        uSigma: { value: 0.085 },
      })));
    const o = () => ({
      tDepth: i(),
      uInvProj: { value: new bt() },
      uCamWorld: { value: new bt() },
    });
    ((this.aoPass = ea(Ase, {
      ...o(),
      uProj: { value: new bt() },
      uTexel: { value: new tt() },
      uRadius: { value: 0.85 },
      uSamples: { value: 10 },
      uKernel: { value: Nse() },
    })),
      (this.aoBlurPass = ea(_se, {
        ...o(),
        tAO: i(),
        uTexel: { value: new tt() },
      })),
      (this.raysPass = ea(Rse, {
        tDepth: i(),
        tClouds: i(),
        uLightUv: { value: new tt() },
        uSamples: { value: 40 },
        uDensity: { value: 0.92 },
        uDecay: { value: 0.97 },
        uFrame: { value: 0 },
        uUseClouds: { value: 0 },
        uUnderwater: { value: 0 },
        uWaterY: { value: 0 },
        uInvProj: { value: new bt() },
        uCamWorld: { value: new bt() },
      })),
      (this.composePass = ea(Cse, {
        ...o(),
        tScene: i(),
        tAO: i(),
        tRays: i(),
        tClouds: i(),
        tSkyLut: i(),
        uCamPos: { value: new k() },
        uHalfTexel: { value: new tt() },
        uAoStrength: { value: 0.85 },
        uUseClouds: { value: 0 },
        uFogNear: { value: 1e4 },
        uFogFar: { value: 10001 },
        uFogColor: { value: new ze() },
        uFogOverride: { value: 0 },
        uSkyProbe: { value: 1 },
        uHaze: { value: 0.002 },
        uLightDir: { value: new k() },
        uLightColor: { value: new ze() },
        uRayColor: { value: new ze() },
        uDay: { value: 1 },
        uLightning: { value: 0 },
        uUnderwater: { value: 0 },
        uWaterSigma: { value: N2.clone() },
        uWaterScatter: { value: new ze() },
        uTime: { value: 0 },
      })),
      (this.lumPass = ea(kse, { tHdr: i() })),
      (this.adaptPass = ea(Lse, {
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
    ((this.bloomDownPass = ea(Ise, {
      ...a(),
      tSrc: i(),
      uTexel: { value: new tt() },
      uPrefilter: { value: 0 },
      uThreshold: { value: 1 },
    })),
      (this.bloomUpPass = ea(
        Pse,
        { tSrc: i(), uTexel: { value: new tt() }, uRadius: { value: 1 } },
        cn,
      )),
      (this.finalPass = ea(Ose, {
        ...a(),
        tHdr: i(),
        tBloom: i(),
        tDepth: i(),
        tClouds: i(),
        uRes: { value: new tt() },
        uBloom: { value: 0.1 },
        uVignette: { value: 0.22 },
        uGrain: { value: 0 },
        uAberration: { value: 0 },
        uTime: { value: 0 },
        uFlare: { value: 0 },
        uUseClouds: { value: 0 },
        uLightUv: { value: new tt() },
        uFlareColor: { value: new ze() },
        uSaturation: { value: 1.14 },
        uContrast: { value: 1.07 },
        uShadowTint: { value: new ze(0.97, 0.99, 1.04) },
        uHighlightTint: { value: new ze(1.03, 1, 0.96) },
      })));
  }
  get active() {
    return this.supported && this.level > 0;
  }
  get skyLut() {
    return this.active && this.allocated ? this.lutRT.texture : null;
  }
  get volumetricClouds() {
    return this.active && this.clouds;
  }
  configure(e, t) {
    const i = this.supported ? e : 0,
      s = i !== this.level || t.msaa !== this.msaa;
    ((this.level = i),
      (this.msaa = t.msaa),
      (this.clouds = t.clouds),
      tV(i),
      (s4.value = i > 0 ? 1 : 0),
      ($k.value = i > 0 ? 2.4 : 1),
      s && this.release());
  }
  release() {
    var e, t;
    if (this.allocated) {
      for (const i of [
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
        i.dispose();
      ((e = this.sceneRT.depthTexture) == null || e.dispose(),
        (this.cloudRT = []),
        (this.adaptRT = []),
        (this.bloomRT = []),
        (Tg.value = null),
        (Wn.uFxCloudShadow.value = null),
        (Wn.uFxCloudShadowParams.value.w = 0),
        (t = this.waterMapRT) == null || t.dispose(),
        (this.waterMapRT = null),
        this.waterMapCenter.set(NaN, NaN),
        (Wn.uFxWaterMap.value = null),
        (Wn.uFxWaterMapParams.value.w = 0),
        (Wn.uFxWaterClear.value = 0),
        (Wn.uFxCamUnderwater.value = 0),
        (this.allocated = !1),
        (this.width = this.height = 0));
    }
  }
  allocate(e, t) {
    (this.release(), (this.width = e), (this.height = t));
    const i = this.msaa ? 4 : 0,
      s = new pS(e, t, da);
    ((s.format = r0),
      (s.minFilter = s.magFilter = ji),
      (this.sceneRT = Ya(e, t, {
        depthBuffer: !0,
        depthTexture: s,
        samples: i,
      })),
      (this.composeRT = Ya(e, t, { depthBuffer: !0, samples: i })));
    const o = Math.min(1, 1280 / Math.ceil(e / 2)),
      a = Math.ceil(Math.ceil(e / 2) * o),
      r = Math.ceil(Math.ceil(t / 2) * o);
    ((this.aoRT = Ya(a, r, {
      format: Zh,
      type: Fo,
      minFilter: ji,
      magFilter: ji,
    })),
      (this.aoBlurRT = Ya(a, r, { format: Zh, type: Fo })),
      (this.raysRT = Ya(a, r, { format: Zh })));
    const l = Math.min(
        Math.ceil(e / (this.level >= 2 ? 2 : 4)),
        this.level >= 2 ? 960 : 480,
      ),
      c = Math.ceil((l * t) / e);
    ((this.cloudRT = [0, 1].map(() => Ya(l, c))),
      (this.cloudShadowRT = Ya(256, 256, { format: Zh, type: Fo })),
      (this.lutRT = Ya(bse, wse, { wrapS: Fr, wrapT: Oc })),
      (this.lumRT = Ya(64, 64, { minFilter: Uo, generateMipmaps: !0 })),
      (this.adaptRT = [0, 1].map(() =>
        Ya(1, 1, { minFilter: ji, magFilter: ji }),
      )));
    let h = e,
      d = t;
    for (let u = 0; u < s3; u++)
      ((h = Math.max(1, Math.ceil(h / 2))),
        (d = Math.max(1, Math.ceil(d / 2))),
        this.bloomRT.push(Ya(h, d)));
    ((this.allocated = !0),
      (this.adaptReset = !0),
      (this.cloudHistoryValid = !1),
      this.lutKey.fill(NaN));
  }
  ensureNoise() {
    if (this.noiseReady) return;
    const e = this.renderer,
      t = new vO(xf, xf, xf, {
        type: Fo,
        format: po,
        depthBuffer: !1,
        minFilter: Jn,
        magFilter: Jn,
        generateMipmaps: !1,
      });
    t.texture.wrapS = t.texture.wrapT = t.texture.wrapR = Fr;
    for (let i = 0; i < xf; i++)
      ((this.u(this.noisePass).uSlice.value = (i + 0.5) / xf),
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
    const i = t.getDrawingBufferSize(Bse),
      s = Math.max(1, Math.floor(i.x)),
      o = Math.max(1, Math.floor(i.y));
    (!this.allocated || s !== this.width || o !== this.height) &&
      this.allocate(s, o);
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
          : 28 * 0.0035 * fi.clamp(-e.sunDir.y * 4, 0, 1)),
        M.uTop.value.copy(e.skyTop).convertSRGBToLinear(),
        M.uHorizon.value.copy(e.skyHorizon).convertSRGBToLinear(),
        (M.uNight.value = (1 - fi.smoothstep(e.sunDir.y, -0.16, 0.04)) * 0.9),
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
        : fi.clamp((h + e.overcast * 0.6) * (1 - e.clearSky), 0, 1),
      u = !e.lava && e.underwater > 0.5;
    this.cloudsActive = this.clouds && d > 0.01 && !u;
    const f = e.camera;
    f.updateMatrixWorld();
    const p = e.time % 7500,
      m = Math.min(Math.max(e.dt, 0), 0.25),
      y = this.cloudWindReady ? 1 - Math.exp(-m / 8) : 1;
    ((this.cloudWindReady = !0),
      (this.cloudWind.x += (3.2 + e.windX * 1.5 - this.cloudWind.x) * y),
      (this.cloudWind.y += (1.2 + e.windZ * 1.5 - this.cloudWind.y) * y),
      this.cloudOffset.addScaledVector(this.cloudWind, m));
    const g = 0.075 + e.overcast * 0.05,
      b = fi.clamp((e.overcast - 0.75) * 4, 0, 1),
      S = a3.copy(e.lightColor).multiplyScalar(1 - b * 0.7);
    if ((e.sunDir.y < 0 && S.multiplyScalar(0.12), this.cloudsActive)) {
      this.ensureNoise();
      for (const H of [this.cloudPass, this.cloudShadowPass]) {
        const G = this.u(H);
        ((G.uCoverage.value = d),
          (G.uCloudTime.value = p),
          G.uCloudOffset.value.copy(this.cloudOffset),
          (G.uSigma.value = g));
      }
      const M = this.u(this.cloudPass),
        x = this.cloudRT[this.frameIndex & 1],
        T = this.cloudRT[(this.frameIndex + 1) & 1];
      ((M.tSkyLut.value = this.lutRT.texture),
        (M.tHistory.value = x.texture),
        M.uInvProj.value.copy(f.projectionMatrixInverse),
        M.uCamWorld.value.copy(f.matrixWorld),
        M.uPrevViewProj.value.copy(this.prevViewProj),
        M.uCamPos.value.copy(f.position),
        M.uLightDir.value.copy(e.lightDir).normalize(),
        M.uLightColor.value.copy(S),
        (M.uSteps.value = this.level >= 2 ? 40 : 26),
        (M.uAmbient.value = 1.1 * (1 - b * 0.45) + e.lightning * 4),
        (M.uFrame.value = this.frameIndex % 64));
      const A = f.position.y > Yp - 25 && f.position.y < jp + 25,
        _ =
          this.cloudLight.distanceToSquared(o3.set(S.r, S.g, S.b)) > 0.0025 ||
          this.cloudLightDir.dot(e.lightDir) < 0.9995;
      (this.cloudLight.copy(o3), this.cloudLightDir.copy(e.lightDir));
      const C = Math.exp(-Math.min(e.dt, 0.25) / (A ? 0.02 : 0.12));
      ((M.uHistoryWeight.value =
        !this.cloudHistoryValid || _ || e.lightning > 0.02
          ? 0
          : Math.min(0.9, C)),
        this.draw(this.cloudPass, T),
        (this.cloudHistoryValid = !0));
      const R = n3 / 256,
        L = this.u(this.cloudShadowPass),
        N = Math.round(f.position.x / R) * R,
        D = Math.round(f.position.z / R) * R;
      (((this.frameIndex & 1) === 0 ||
        Wn.uFxCloudShadowParams.value.w === 0 ||
        N !== L.uCenter.value.x ||
        D !== L.uCenter.value.y) &&
        (L.uCenter.value.set(N, D),
        this.draw(this.cloudShadowPass, this.cloudShadowRT)),
        (Wn.uFxCloudShadow.value = this.cloudShadowRT.texture),
        Wn.uFxCloudShadowParams.value.set(
          L.uCenter.value.x,
          L.uCenter.value.y,
          n3,
          e.sunDir.y > 0 ? 0.85 : 0.4,
        ));
    } else
      ((this.cloudHistoryValid = !1), (Wn.uFxCloudShadowParams.value.w = 0));
    (this.prevViewProj.multiplyMatrices(
      f.projectionMatrix,
      f.matrixWorldInverse,
    ),
      (this.wetness +=
        (e.wetness - this.wetness) *
        (1 - Math.exp(-e.dt / (e.wetness > this.wetness ? 12 : 45)))),
      (Wn.uFxWetness.value = this.wetness),
      Wn.uFxLightDir.value.copy(e.lightDir).normalize(),
      (Wn.uFxCloudMidY.value = (Yp + jp) / 2),
      (Wn.uFxTime.value = e.time % 3600),
      (o4.value = Math.max(0.05, e.exposure) / 0.6),
      (Tg.value = this.adaptRT[this.frameIndex & 1].texture),
      (a4.value = this.exposureKey(e)),
      Wn.uFxSkyTint.value
        .copy(this.u(this.lutPass).uTop.value)
        .lerp(this.u(this.lutPass).uHorizon.value, 0.5)
        .multiplyScalar(0.6 + l * 1.2),
      Wn.uFxWaterTint.value
        .copy(Wn.uFxSkyTint.value)
        .multiply(a3.setRGB(0.02, 0.11, 0.16)),
      (Wn.uFxCamUnderwater.value = !e.lava && e.underwater > 0.5 ? 1 : 0),
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
      s = t.camera.position,
      o = Math.round(s.x / 8) * 8,
      a = Math.round(s.z / 8) * 8,
      r = o !== this.waterMapCenter.x || a !== this.waterMapCenter.y;
    if (this.waterMapRT) {
      if (!r && ++this.waterMapAge < 20) return;
    } else {
      const p = i.extensions.has("EXT_color_buffer_float");
      this.waterMapRT = new fr(Bh, Bh, {
        type: p ? da : x0,
        format: po,
        minFilter: ji,
        magFilter: ji,
        depthBuffer: !0,
        generateMipmaps: !1,
      });
    }
    ((this.waterMapAge = 0), this.waterMapCenter.set(o, a));
    const l = this.waterMapCam;
    (l.position.set(o, Kt + 10, a),
      l.up.set(0, 0, -1),
      l.lookAt(o, 0, a),
      l.updateMatrixWorld(),
      l.layers.set(Vk));
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
    ((Wn.uFxWaterMap.value = this.waterMapRT.texture),
      Wn.uFxWaterMapParams.value.set(o, a, Bh, 1),
      (Wn.uFxWaterClear.value = 1));
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
      s = this.frame,
      o = s.camera,
      a = i.autoClear;
    i.autoClear = !1;
    const r = o.layers.mask,
      l = e.matrixWorldAutoUpdate;
    (o.layers.set(Wk),
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
      h = (C) => {
        const R = this.u(C);
        ((R.tDepth.value = c),
          R.uInvProj && R.uInvProj.value.copy(o.projectionMatrixInverse),
          R.uCamWorld && R.uCamWorld.value.copy(o.matrixWorld));
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
    const f = o3
      .copy(s.lightDir)
      .normalize()
      .multiplyScalar(1e3)
      .add(o.position);
    f.project(o);
    const p = f.x * 0.5 + 0.5,
      m = f.y * 0.5 + 0.5;
    this.lightUv.set(
      Number.isFinite(p) ? fi.clamp(p, -4, 5) : -4,
      Number.isFinite(m) ? fi.clamp(m, -4, 5) : -4,
    );
    const y = o.getWorldDirection(Dse),
      g = fi.smoothstep(y.dot(s.lightDir), -0.05, 0.45);
    this.lightOnScreen = g;
    const b = this.u(this.raysPass);
    ((b.tDepth.value = c),
      (b.tClouds.value = this.cloudRT[(this.frameIndex + 1) & 1].texture),
      (b.uUseClouds.value = this.cloudsActive ? 1 : 0),
      b.uLightUv.value.copy(this.lightUv),
      (b.uSamples.value = this.level >= 2 ? 56 : 36),
      (b.uDecay.value = this.level >= 2 ? 0.972 : 0.96),
      (b.uFrame.value = this.frameIndex % 64));
    const S = s.lava ? 0 : fi.clamp(s.underwater, 0, 1);
    ((b.uUnderwater.value = S > 0.5 ? 1 : 0),
      (b.uWaterY.value = s.waterSurfaceY),
      b.uInvProj.value.copy(o.projectionMatrixInverse),
      b.uCamWorld.value.copy(o.matrixWorld),
      g > 0.001 && s.rays > 0 && this.draw(this.raysPass, this.raysRT));
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
      (M.uFogNear.value = s.fogNear * 0.92),
      (M.uFogFar.value = s.fogFar * 0.93),
      M.uFogColor.value.copy(s.fogColor).convertSRGBToLinear());
    const x = fi.clamp(s.underwater, 0, 1),
      T = s.lava ? 0 : x;
    if (
      ((M.uFogOverride.value = s.lava ? x : 0),
      (M.uUnderwater.value = T),
      (M.uTime.value = s.time % 600),
      T > 0)
    ) {
      const C = Math.max(0, s.waterSurfaceY - o.position.y);
      M.uWaterScatter.value
        .copy(s.fogColor)
        .convertSRGBToLinear()
        .multiplyScalar(2.2 * Math.exp(-C * 0.045));
    }
    M.uSkyProbe.value = Math.max(0.015, s.skyProbe);
    const A = 1 - Math.min(1, Math.abs(s.sunDir.y) * 3.5);
    ((M.uHaze.value =
      (9e-4 + A * 0.0017 + s.overcast * 0.0017) * (s.lunar ? 0 : 1)),
      M.uLightDir.value.copy(s.lightDir).normalize(),
      M.uLightColor.value.copy(s.lightColor),
      (M.uDay.value = s.dayness),
      (M.uLightning.value = s.lightning));
    const _ =
      s.rays *
      g *
      (1 - s.overcast * 0.75) *
      (s.sunDir.y > 0 ? 1 : 0.25) *
      (this.level >= 2 ? 1.1 : 0.9);
    (M.uRayColor.value.copy(s.lightColor).multiplyScalar(_ * 0.4),
      _ <= 0 && M.uRayColor.value.setRGB(0, 0, 0),
      T > 0 &&
        M.uRayColor.value.multiply(
          a3.setRGB(1 - T * 0.6, 1 + T * 0.2, 1 + T * 0.5),
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
    const s = this.adaptRT[this.frameIndex & 1],
      o = this.adaptRT[(this.frameIndex + 1) & 1],
      a = this.u(this.adaptPass);
    ((a.tLum.value = this.lumRT.texture),
      (a.tPrev.value = s.texture),
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
    for (let y = 0; y < s3; y++)
      ((l.tSrc.value = c),
        l.uTexel.value.set(1 / h, 1 / d),
        (l.uPrefilter.value = y === 0 ? 1 : 0),
        this.draw(this.bloomDownPass, this.bloomRT[y]),
        (c = this.bloomRT[y].texture),
        (h = this.bloomRT[y].width),
        (d = this.bloomRT[y].height));
    const u = this.u(this.bloomUpPass);
    for (let y = s3 - 1; y > 0; y--)
      ((u.tSrc.value = this.bloomRT[y].texture),
        u.uTexel.value.set(
          1 / this.bloomRT[y].width,
          1 / this.bloomRT[y].height,
        ),
        (u.uRadius.value = 1),
        this.draw(this.bloomUpPass, this.bloomRT[y - 1]));
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
      fi.clamp(1 - Math.abs(t.sunDir.y) * 4, 0, 1) *
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
    return 0.3 * (1 - fi.clamp((e.overcast - 0.75) * 4, 0, 1) * 0.35);
  }
  dispose() {
    var e;
    (this.release(),
      (e = this.noiseRT) == null || e.dispose(),
      (this.noiseRT = null),
      (this.noiseReady = !1),
      this.waterDepthMat.dispose(),
      this.waterMapMat.dispose(),
      this.skyClouds.removeFromParent(),
      this.skyClouds.geometry.dispose(),
      this.skyClouds.material.dispose());
    for (const t of [
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
      (t.material.dispose(), t.dispose());
  }
}
