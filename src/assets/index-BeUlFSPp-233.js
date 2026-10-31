// index-BeUlFSPp 233 — math
// Lines 121689-121957 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class eL {
  constructor(e = _le, t = !1) {
    ((this.capacity = e),
      (this.trail = t),
      (this.vel = new Float32Array(e * 3)),
      (this.baseColor = new Float32Array(e * 3)),
      (this.lit = new Uint8Array(e)),
      (this.life = new Float32Array(e)),
      (this.maxLife = new Float32Array(e)),
      (this.grav = new Float32Array(e)),
      (this.drag = new Float32Array(e)),
      (this.baseAlpha = new Float32Array(e)),
      (this.floor = new Float32Array(e)),
      (this.baseSize = new Float32Array(e)),
      (this.growth = new Float32Array(e)));
    const i = new oi(),
      n = new Float32Array(this.capacity * 3);
    n.fill(0);
    for (let a = 0; a < this.capacity; a++) n[a * 3 + 1] = -9999;
    ((this.posAttr = new qt(n, 3)),
      (this.colAttr = new qt(new Float32Array(this.capacity * 4), 4)),
      (this.sizeAttr = new qt(new Float32Array(this.capacity), 1)),
      (this.shadeAttr = new qt(new Float32Array(this.capacity), 1)),
      this.posAttr.setUsage(Bi),
      this.colAttr.setUsage(Bi),
      this.sizeAttr.setUsage(Bi),
      this.shadeAttr.setUsage(Bi),
      i.setAttribute("position", this.posAttr),
      i.setAttribute("aColor", this.colAttr),
      i.setAttribute("aSize", this.sizeAttr),
      i.setAttribute("aSeed", this.shadeAttr));
    const o = new Gi({
      transparent: !0,
      depthWrite: !1,
      fog: !0,
      uniforms: Rd.merge([
        It.fog,
        {
          uPixelRatio: { value: 1 },
          uTime: { value: 0 },
          uTrail: { value: t ? 1 : 0 },
        },
      ]),
      vertexShader: `
        attribute vec4 aColor;
        attribute float aSize;
        attribute float aSeed;
        uniform float uPixelRatio;
        uniform float uTrail;
        varying vec4 vColor;
        varying float vSeed;
        varying float vFogDepth;
        void main() {
          vColor = aColor;
          vSeed = aSeed;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vFogDepth = -mv.z;
          // Evaluated from the current camera every draw: driving into an old trail or
          // switching to cockpit view must not cover the sights with smoke.
          float nearFade = smoothstep(3.0, 16.0, length(mv.xyz));
          float sightFade = mix(0.28, 1.0, smoothstep(0.035, 0.20,
            length(mv.xy) / max(1.0, -mv.z)));
          vColor.a *= mix(1.0, nearFade * sightFade, uTrail);
          // gl_PointSize is in physical pixels; compensate for the renderer pixelRatio so aSize
          // is effectively a screen-space (CSS-pixel-like) size on every quality preset.
          //
          // The 1/distance term explodes at close range — standing next to a puff, a size-7
          // particle wanted to be ~840px across, which is what turned a handful of dust into a
          // screen-filling cloud. Clamping the size keeps near puffs believable without
          // affecting anything more than a couple of blocks away.
          float px = aSize * uPixelRatio * (240.0 / max(1.0, -mv.z));
          gl_PointSize = min(px, mix(70.0, 48.0, uTrail) * uPixelRatio);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        uniform vec3 fogColor;
        uniform float fogNear;
        uniform float fogFar;
        uniform float uHdr;
        uniform float uHdrExposure;
        uniform sampler2D uHdrAdapt;
        uniform float uHdrKey;
        varying vec4 vColor;
        varying float vSeed;
        varying float vFogDepth;
        ${VO}
        ${eT}
        void main() {
          if (vColor.a < 0.02) discard;
          float a = vSeed * 6.2831;
          float s = sin(a), c = cos(a);
          vec2 uv = gl_PointCoord - 0.5;
          uv = vec2(uv.x * c - uv.y * s, uv.x * s + uv.y * c);
          // main body plus two smaller offset lobes = a lumpy puff rather than a perfect disc
          float d = length(uv) * 2.0;
          float body = 1.0 - smoothstep(0.35, 1.0, d);
          float lobeA = 1.0 - smoothstep(0.1, 0.62, length(uv - vec2(0.19, 0.12)) * 2.0);
          float lobeB = 1.0 - smoothstep(0.1, 0.55, length(uv + vec2(0.15, 0.2)) * 2.0);
          float mask = clamp(body + lobeA * 0.45 + lobeB * 0.4, 0.0, 1.0);
          if (mask < 0.02) discard;
          // self-shadowing: the lower-right of each puff sits in its own shade
          float shade = 1.0 - clamp((uv.x + uv.y) * 0.55 + 0.12, 0.0, 0.45);
          float alpha = vColor.a * mask;
          vec3 rgb = vColor.rgb * shade;
          #ifdef USE_FOG
            float fogFactor = pow(smoothstep(fogNear, fogFar, vFogDepth), 1.6);
            rgb = mix(rgb, fogColor, fogFactor);
            alpha *= 1.0 - fogFactor;
          #endif
          if (alpha < 0.02) discard;
          if (uHdr > 0.5) rgb = fxInverseDisplay(rgb, uHdrExposure * fxAdaptGain(uHdrAdapt, uHdrKey));
          gl_FragColor = vec4(rgb, alpha);
        }`,
    });
    ((o.uniforms.uHdr = ZA),
      (o.uniforms.uHdrExposure = QA),
      (o.uniforms.uHdrAdapt = _v),
      (o.uniforms.uHdrKey = JA),
      (this.mat = o),
      (this.points = new Ld(i, o)),
      (this.points.frustumCulled = !1),
      (this.points.renderOrder = zi.particle),
      (this.points.visible = !1));
  }
  points;
  mat;
  posAttr;
  colAttr;
  sizeAttr;
  shadeAttr;
  vel;
  life;
  maxLife;
  grav;
  drag;
  baseAlpha;
  floor;
  baseSize;
  growth;
  head = 0;
  lit;
  baseColor;
  tmpColor = new Ge();
  setPixelRatio(e) {
    this.mat.uniforms.uPixelRatio.value = e;
  }
  clear() {
    const e = this.posAttr.array;
    this.points.visible = !1;
    for (let t = 0; t < this.capacity; t++)
      ((this.life[t] = 0), (e[t * 3 + 1] = -9999), this.colAttr.setW(t, 0));
    ((this.posAttr.needsUpdate = !0), (this.colAttr.needsUpdate = !0));
  }
  spawn(e) {
    e.count > 0 && (this.points.visible = !0);
    const t = Array.isArray(e.color) ? e.color : null;
    for (let i = 0; i < e.count; i++) {
      const n = this.head;
      this.head = (this.head + 1) % this.capacity;
      const o = n * 3,
        a = e.spread ?? 0;
      ((this.posAttr.array[o] =
        e.pos.x + (a ? (Math.random() - 0.5) * 2 * a : 0)),
        (this.posAttr.array[o + 1] =
          e.pos.y + (a ? (Math.random() - 0.5) * 2 * a : 0)),
        (this.posAttr.array[o + 2] =
          e.pos.z + (a ? (Math.random() - 0.5) * 2 * a : 0)));
      const r = e.vel ?? null;
      ((this.vel[o] = (r?.x ?? 0) + (Math.random() - 0.5) * 2 * e.speed),
        (this.vel[o + 1] = (r?.y ?? 0) + (Math.random() - 0.5) * 2 * e.speed),
        (this.vel[o + 2] = (r?.z ?? 0) + (Math.random() - 0.5) * 2 * e.speed));
      const l = e.life * (1 + (Math.random() - 0.5) * (e.lifeJitter ?? 0.4));
      ((this.life[n] = l),
        (this.maxLife[n] = l),
        (this.grav[n] = e.grav ?? 0),
        (this.drag[n] = e.drag ?? 0),
        (this.baseAlpha[n] = e.alpha ?? 1),
        (this.floor[n] = e.floorY ?? -1e9),
        this.shadeAttr.setX(n, Math.random()),
        this.tmpColor.set(
          t ? t[Math.floor(Math.random() * t.length)] : e.color,
        ));
      const c = (e.colorJitter ?? 0.15) * (Math.random() - 0.5);
      (this.colAttr.setXYZW(
        n,
        Oe(this.tmpColor.r + c, 0, 1),
        Oe(this.tmpColor.g + c, 0, 1),
        Oe(this.tmpColor.b + c, 0, 1),
        this.baseAlpha[n],
      ),
        (this.lit[n] = e.lit ? 1 : 0),
        (this.baseColor[o] = this.colAttr.getX(n)),
        (this.baseColor[o + 1] = this.colAttr.getY(n)),
        (this.baseColor[o + 2] = this.colAttr.getZ(n)));
      const h = e.size * (1 + (Math.random() - 0.5) * (e.sizeJitter ?? 0.5));
      ((this.baseSize[n] = h),
        (this.growth[n] = e.growth ?? 0),
        this.sizeAttr.setX(n, h));
    }
  }
  update(e, t) {
    if (!this.points.visible) return;
    const i = this.posAttr.array;
    let n = !1;
    for (let o = 0; o < this.capacity; o++) {
      if (this.life[o] <= 0) continue;
      this.life[o] -= e;
      const a = o * 3;
      if (this.life[o] <= 0) {
        ((i[a + 1] = -9999), this.colAttr.setW(o, 0));
        continue;
      }
      if (((n = !0), (this.vel[a + 1] -= this.grav[o] * e), this.drag[o] > 0)) {
        const h = Math.max(0, 1 - this.drag[o] * e);
        ((this.vel[a] *= h), (this.vel[a + 1] *= h), (this.vel[a + 2] *= h));
      }
      ((i[a] += this.vel[a] * e),
        (i[a + 1] += this.vel[a + 1] * e),
        (i[a + 2] += this.vel[a + 2] * e));
      const r = this.floor[o];
      if (
        (i[a + 1] < r &&
          ((i[a + 1] = r),
          (this.vel[a + 1] = 0),
          (this.vel[a] *= 1.02),
          (this.vel[a + 2] *= 1.02)),
        this.lit[o] && t)
      ) {
        const h = t(i[a], i[a + 1], i[a + 2]),
          d = Math.max(this.trail ? 0.6 : 0.025, h.ambient, h.block);
        this.colAttr.setXYZ(
          o,
          this.baseColor[a] * d,
          this.baseColor[a + 1] * d,
          this.baseColor[a + 2] * d,
        );
      }
      const l = this.life[o] / this.maxLife[o],
        c = 1 - l;
      (this.sizeAttr.setX(o, this.baseSize[o] * (1 + c * this.growth[o])),
        this.colAttr.setW(
          o,
          this.baseAlpha[o] * Math.min(1, l * 2.2) * Math.min(1, c * 8 + 0.15),
        ));
    }
    ((this.points.visible = n),
      (this.posAttr.needsUpdate = !0),
      (this.colAttr.needsUpdate = !0),
      (this.sizeAttr.needsUpdate = !0),
      (this.shadeAttr.needsUpdate = !0));
  }
}
let Xg = null;
function kle() {
  if (Xg) return Xg;
  const s = document.createElement("canvas");
  s.width = s.height = 64;
  const e = s.getContext("2d"),
    t = e.createRadialGradient(32, 32, 0, 32, 32, 32);
  return (
    t.addColorStop(0, "rgba(255,255,235,1)"),
    t.addColorStop(0.32, "rgba(255,190,110,0.85)"),
    t.addColorStop(1, "rgba(255,120,50,0)"),
    (e.fillStyle = t),
    e.fillRect(0, 0, 64, 64),
    (Xg = new Si(s)),
    Xg
  );
}
