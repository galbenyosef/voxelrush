// index-BeUlFSPp 189 — math
// Lines 103835-104155 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class _oe {
  constructor(e, t = () => new k()) {
    ((this.scene = e),
      (this.focus = t),
      (this.maskTex.magFilter = this.maskTex.minFilter = as),
      (this.maskTex.needsUpdate = !0),
      (this.uniforms = {
        uData: { value: null },
        uHalf: { value: vn },
        uTexN: { value: 1 },
        uStepT: { value: Cu },
        uMask: { value: this.maskTex },
        uMaskN: { value: Or },
        uSea: { value: Bs + 1 },
        uHazeFrom: { value: Soe },
        uHaze: { value: 12e-5 },
        uClassView: { value: 0 },
        uPalette: { value: Bg.map((n) => new Ge(n)) },
        uClassOut: { value: Bg.map(() => new k(1, 1, 1)) },
        uSunDir: { value: new k(0, 1, 0) },
        uSunColor: { value: new Ge(1, 1, 1) },
        uSky: { value: new Ge(0.5, 0.6, 0.7) },
        uGround: { value: new Ge(0.3, 0.28, 0.25) },
        uHorizon: { value: new Ge(0.75, 0.82, 0.9) },
        uCam: { value: new k() },
        uMatchGain: { value: new k(0.9, 0.9, 0.9) },
        uMatchGamma: { value: new k(1.6, 1.6, 1.6) },
      }));
    for (const n of hC) {
      const o = new Gi({
          uniforms: {
            ...this.uniforms,
            uTile: { value: rc },
            uCell: { value: rc / n },
          },
          vertexShader: Aoe,
          fragmentShader: uC(!1),
          fog: !1,
        }),
        a = xoe(n),
        r = new cn(new Float32Array(Lu * Lu * 2), 2);
      (r.setUsage(Bi), a.setAttribute("offset", r));
      const l = new On(a, o, Lu * Lu);
      ((l.count = 0),
        (l.frustumCulled = !1),
        (l.matrixAutoUpdate = !1),
        this.lods.push({ mesh: l, offsets: r, material: o }),
        this.group.add(l));
    }
    const i = new ms(6e4, 6e4, 1, 1).rotateX(-Math.PI / 2);
    ((this.ocean = new Q(
      i,
      new Gi({
        uniforms: this.uniforms,
        vertexShader: Toe,
        fragmentShader: uC(!0),
        fog: !1,
      }),
    )),
      (this.ocean.frustumCulled = !1),
      this.group.add(this.ocean),
      (this.group.visible = !1),
      e.add(this.group),
      this.build());
  }
  group = new re();
  data = null;
  mask = new Uint8Array(Or * Or);
  maskTex = new Ef(this.mask, Or, Or, A0, Do);
  maskAt = 0;
  uniforms;
  lods = [];
  ocean;
  frustum = new kd();
  box = new zs();
  projView = new Rt();
  zones = new Map();
  worker = null;
  cpu = null;
  cpuN = 0;
  ready = !1;
  detailed = !1;
  build() {
    try {
      const e = (this.worker = new Worker(
        new URL(
          "/assets/air-terrain-worker-coep-v1-CPlrm8sg.js",
          import.meta.url,
        ),
        { type: "module" },
      ));
      let t = 0,
        i = !1;
      const n = (o) => {
        const a = performance.now();
        if (!o && a - t < 300) {
          i = !0;
          return;
        }
        ((t = a), (i = !1), this.data && (this.data.needsUpdate = !0));
      };
      ((e.onmessage = (o) => {
        const a = o.data;
        if (a.kind === "coarse") {
          const r = Math.round((vn * 2) / Cu),
            l = Math.round(a.step / Cu),
            c = new Uint8Array(r * r * 4);
          for (let d = 0; d < r; d++)
            for (let u = 0; u < r; u++) {
              const f =
                  (Math.min(a.n - 1, Math.floor(d / l)) * a.n +
                    Math.min(a.n - 1, Math.floor(u / l))) *
                  4,
                p = (d * r + u) * 4;
              ((c[p] = a.data[f]),
                (c[p + 1] = a.data[f + 1]),
                (c[p + 2] = a.data[f + 2]),
                (c[p + 3] = 255));
            }
          const h = new Ef(c, r, r, bo, Do);
          ((h.magFilter = h.minFilter = as),
            (h.generateMipmaps = !1),
            (h.needsUpdate = !0),
            (this.data = h),
            (this.cpu = c),
            (this.cpuN = r),
            (this.uniforms.uData.value = h),
            (this.uniforms.uTexN.value = r),
            (this.ready = !0),
            (this.group.visible = !0));
          return;
        }
        !this.cpu ||
          a.j0 === void 0 ||
          (this.cpu.set(a.data, a.j0 * a.n * 4),
          n(!!a.last),
          a.last &&
            (i && n(!0),
            e.terminate(),
            (this.worker = null),
            (this.detailed = !0)));
      }),
        e.postMessage({ step: Cu, focusZ: this.focus().z }));
    } catch (e) {
      console.warn("[air] far land unavailable", e);
    }
  }
  update(e, t, i) {
    if (!this.ready) return;
    const n = this.uniforms,
      o = e.position;
    (n.uSunDir.value.copy(t.sunDir),
      n.uSunColor.value.copy(t.sunColor),
      n.uSky.value.copy(t.hemi.color).multiplyScalar(t.hemi.intensity),
      n.uGround.value.copy(t.hemi.groundColor).multiplyScalar(t.hemi.intensity),
      n.uHorizon.value.copy(t.horizonColor),
      n.uCam.value.copy(o));
    const a = performance.now();
    (a - this.maskAt > 200 && ((this.maskAt = a), this.updateMask(i)),
      this.projView.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
      this.frustum.setFromProjectionMatrix(this.projView));
    const r = hC.map(() => 0);
    for (let l = 0; l < Lu; l++)
      for (let c = 0; c < Lu; c++) {
        const h = -vn + c * rc,
          d = -vn + l * rc;
        if (
          (this.box.min.set(h, -10, d),
          this.box.max.set(h + rc, 140, d + rc),
          !this.frustum.intersectsBox(this.box))
        )
          continue;
        const u = Math.hypot(
          h + rc / 2 - o.x,
          Math.max(0, o.y - 70),
          d + rc / 2 - o.z,
        );
        let f = 0;
        for (; f < dC.length && u > dC[f];) f++;
        const p = this.lods[f],
          m = r[f]++;
        ((p.offsets.array[m * 2] = h), (p.offsets.array[m * 2 + 1] = d));
      }
    this.lods.forEach((l, c) => {
      ((l.mesh.count = r[c]),
        (l.offsets.needsUpdate = !0),
        l.offsets.clearUpdateRanges(),
        l.offsets.addUpdateRange(0, r[c] * 2));
    });
  }
  updateMask(e) {
    const t = new Uint8Array(Or * Or),
      i = Or / 2;
    for (const o of e) {
      if (!o.mesh) continue;
      const a = o.cx + i,
        r = o.cz + i;
      a >= 0 && r >= 0 && a < Or && r < Or && (t[r * Or + a] = 255);
    }
    let n = !1;
    for (let o = 0; o < t.length; o++)
      if (t[o] !== this.mask[o]) {
        n = !0;
        break;
      }
    n && (this.mask.set(t), (this.maskTex.needsUpdate = !0));
  }
  get sharedUniforms() {
    return this.uniforms;
  }
  setAtlas(e) {
    (Eoe.forEach((t, i) => {
      if (t < 0) return;
      const n = JN(e, le[t]?.tex[0] ?? 0);
      (t === v.GRASS &&
        n.color.multiply(new Ge().setRGB(Ay[0], Ay[1], Ay[2], Er)),
        t === v.LEAVES && n.color.multiplyScalar(0.5 + 0.4 * n.cover),
        (this.basePalette[i] = n.color));
    }),
      this.applyPalette());
  }
  basePalette = [];
  applyPalette() {
    const e = this.uniforms.uPalette.value;
    this.basePalette.forEach((t, i) => {
      t && e[i].copy(t);
    });
  }
  setMatch(e, t, i = {}) {
    (this.uniforms.uMatchGain.value.set(...e),
      this.uniforms.uMatchGamma.value.set(...t),
      this.uniforms.uClassOut.value.forEach((n, o) =>
        n.set(...(i[o] ?? [1, 1, 1])),
      ));
  }
  setZones(e, t) {
    for (const i of e) {
      let n = this.zones.get(i[0]);
      if (!n) {
        const a = dq - i[6],
          r = new Tt(lv, lv, a, 96, 1, !0).translate(0, a / 2, 0),
          l = new Gi({
            uniforms: {
              uColor: { value: new Ge() },
              uH: { value: a },
              uPulse: { value: 0 },
            },
            vertexShader:
              "varying float vY; void main(){ vY = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
            fragmentShader: `uniform vec3 uColor; uniform float uH, uPulse; varying float vY;
            void main(){ float t = vY / uH; float a = (0.26 + uPulse * 0.16) * pow(1.0 - t, 1.8) + 0.08 * smoothstep(0.98, 1.0, fract(vY / 60.0));
              gl_FragColor = vec4(uColor * a, a); }`,
            transparent: !0,
            depthWrite: !1,
            side: Mi,
            blending: rs,
            fog: !1,
          });
        ((n = new Q(r, l)),
          n.position.set(i[4], i[6], i[5]),
          (n.renderOrder = 5),
          this.zones.set(i[0], n),
          this.group.add(n));
      }
      const o = n.material;
      (o.uniforms.uColor.value.set(
        i[1] ? (i[1] === (t || 1) ? Ic.mine : Ic.enemy) : Ic.none,
      ),
        (o.uniforms.uPulse.value = i[3]
          ? 0.5 + 0.5 * Math.sin(performance.now() / 180)
          : 0));
    }
  }
  colorAt(e, t) {
    const i = this.cpu,
      n = this.cpuN;
    if (!i) return null;
    const o = (f, p) =>
      Math.min(n - 1, Math.max(0, Math.round((p + vn) / Cu))) * n +
      Math.min(n - 1, Math.max(0, Math.round((f + vn) / Cu)));
    if (Math.abs(e) >= vn || Math.abs(t) >= vn) return 2775680;
    const a = o(e, t) * 4,
      r = i[a],
      l = i[a + 1],
      c = i[a + 2];
    if (r < Bs) return 2775680;
    let h = Bg[l] ?? 7829367;
    l === 3 && c > 90 && (h = Bg[4]);
    const d = i[o(e - 8, t - 8) * 4],
      u = Math.max(0.6, Math.min(1.3, 1 + (r - d) * 0.06 + (r - 60) * 0.004));
    return (
      (Math.min(255, ((h >> 16) & 255) * u) << 16) |
      (Math.min(255, ((h >> 8) & 255) * u) << 8) |
      Math.min(255, (h & 255) * u)
    );
  }
  dispose() {
    (this.worker?.terminate(), this.scene.remove(this.group));
    for (const e of this.lods)
      (e.mesh.geometry.dispose(), e.material.dispose());
    (this.ocean.geometry.dispose(), this.ocean.material.dispose());
    for (const e of this.zones.values())
      (e.geometry.dispose(), e.material.dispose());
    (this.data?.dispose(), this.maskTex.dispose());
  }
}
function Roe(s, e, t, i, n) {
  const o = t(s, e);
  if (o < Bs) return 2775680;
  const a = t(s + 12, e),
    r = t(s, e + 12),
    l = Math.max(Math.abs(a - o), Math.abs(r - o)) / 12,
    c = n(i(s, e, o, l)),
    h = Math.max(0.55, Math.min(1.25, 1 + (o - a) * 0.05 + (o - 60) * 0.004)),
    d = Math.min(255, ((c >> 16) & 255) * h),
    u = Math.min(255, ((c >> 8) & 255) * h),
    f = Math.min(255, (c & 255) * h);
  return (d << 16) | (u << 8) | f;
}
const qp = 64,
  koe = 0.022;
