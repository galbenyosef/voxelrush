// index-BeUlFSPp 255 — math
// Lines 134586-134925 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class B0e {
  chunks = new Map();
  meta = new Map();
  constructor(e, t, i, n) {
    for (let o = 0; o < n; o++)
      for (let a = 0; a < n; a++)
        this.chunks.set(Xs(t + o, i + a), lj(e, t + o, i + a));
  }
  chunk(e, t) {
    const i = Math.floor(e / ke),
      n = Math.floor(t / ke);
    return { d: this.chunks.get(Xs(i, n)), lx: e - i * ke, lz: t - n * ke };
  }
  getBlock(e, t, i) {
    if (t < 0 || t >= jt) return 0;
    const { d: n, lx: o, lz: a } = this.chunk(e, i);
    return n ? n[Ai(o, t, a)] : 0;
  }
  getMeta(e, t, i) {
    return this.meta.get(`${e},${t},${i}`) ?? 0;
  }
  set(e, t, i, n, o = 0) {
    const { d: a, lx: r, lz: l } = this.chunk(e, i);
    !a ||
      t < 0 ||
      t >= jt ||
      ((a[Ai(r, t, l)] = n),
      o
        ? this.meta.set(`${e},${t},${i}`, o)
        : this.meta.delete(`${e},${t},${i}`));
  }
  top(e, t) {
    for (let i = jt - 1; i > 0; i--) {
      const n = this.getBlock(e, i, t);
      if (
        n &&
        n !== v.TALL_GRASS &&
        n !== v.LEAVES &&
        n !== v.LOG &&
        !(n >= v.FLOWER_RED && n <= v.FLOWER_YELLOW)
      )
        return i;
    }
    return 0;
  }
  level(e, t, i, n) {
    for (let a = -(n + 6); a <= n + 6; a++)
      for (let r = -(n + 6); r <= n + 6; r++) {
        const l = Math.hypot(a, r),
          c = e + a,
          h = t + r;
        if (l > n + 6) continue;
        for (let p = 1; p < jt; p++) {
          const m = this.getBlock(c, p, h);
          (m === v.LOG ||
            m === v.LEAVES ||
            m === v.PINE_LOG ||
            m === v.PINE_LEAVES ||
            m === v.TROPICAL_LOG ||
            m === v.TROPICAL_LEAVES) &&
            this.set(c, p, h, 0);
        }
        const d = this.top(c, h),
          u = Math.min(1, Math.max(0, (l - n) / 6)),
          f = Math.round(i + (d - i) * u * u * (3 - 2 * u));
        for (let p = 1; p < jt; p++) {
          const m = this.getBlock(c, p, h);
          p > f
            ? m && m !== v.WATER && this.set(c, p, h, 0)
            : p === f
              ? this.set(c, p, h, v.GRASS)
              : p > f - 3
                ? this.set(c, p, h, v.DIRT)
                : m || this.set(c, p, h, v.STONE);
        }
      }
  }
}
const M9 = new k(-0.8, 0.24, -0.42).normalize(),
  z0e = 8216154,
  S9 = new k(0.03, 0.21, -0.97).normalize(),
  F0e = 1905702;
function U0e(s = !1) {
  const e = new Gi({
      side: Mo,
      depthWrite: !1,
      fog: !1,
      defines: s ? { NIGHT: 1 } : {},
      uniforms: { uSun: { value: (s ? S9 : M9).clone() }, uTime: { value: 0 } },
      vertexShader: `
      varying vec3 vDir;
      void main() { vDir = position; vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }`,
      fragmentShader: `
      uniform vec3 uSun; uniform float uTime; varying vec3 vDir;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5453); }
      float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y); }
      float fbm(vec2 p){ float s = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { s += n2(p) * a; p = p * 2.03 + 7.1; a *= 0.5; } return s; }
      void main() {
        vec3 d = normalize(vDir); float h = d.y, s = max(dot(d, uSun), 0.0);
        #ifdef NIGHT
          // Halloween: a violet night, an orange glow low on the horizon, a big harvest moon
          vec3 zenith = vec3(0.015, 0.012, 0.045), mid = vec3(0.09, 0.045, 0.15), horizon = mix(vec3(0.3, 0.1, 0.2), vec3(0.78, 0.32, 0.1), pow(s, 3.0) * 0.6 + 0.25);
        #else
          vec3 zenith = vec3(0.07, 0.09, 0.2), mid = vec3(0.36, 0.27, 0.42), horizon = mix(vec3(0.72, 0.42, 0.4), vec3(1.0, 0.56, 0.26), pow(s, 2.5));
        #endif
        vec3 col = mix(horizon, mix(mid, zenith, smoothstep(0.18, 0.8, h)), smoothstep(0.0, 0.26, h));
        if (h < 0.0) col = mix(horizon * 0.7, vec3(0.12, 0.09, 0.1), smoothstep(0.0, -0.25, h));
        #ifdef NIGHT
          float disc = smoothstep(0.9965, 0.9972, s);
          float maria = n2(d.xy * 260.0) * 0.5 + n2(d.zy * 90.0) * 0.5;
          col = mix(col, vec3(1.0, 0.86, 0.6) * (0.85 + 0.3 * maria), disc);
          col += vec3(1.0, 0.6, 0.3) * pow(s, 90.0) * 0.55 + vec3(0.9, 0.5, 0.3) * pow(s, 10.0) * 0.18;
        #else
        col += vec3(1.0, 0.55, 0.25) * pow(s, 6.0) * 0.45 + vec3(1.0, 0.75, 0.45) * pow(s, 48.0) * 0.8 + vec3(1.0, 0.92, 0.75) * smoothstep(0.9993, 0.9997, s) * 6.0;
        #endif
        if (h > 0.0) {
          vec2 p = d.xz / (h + 0.1) * 1.3 + vec2(uTime * 0.012, uTime * 0.004);
          float c = fbm(p), cover = smoothstep(0.52, 0.82, c) * smoothstep(0.0, 0.18, h) * (1.0 - smoothstep(0.55, 0.95, h));
          #ifdef NIGHT
            vec3 lit = mix(vec3(0.05, 0.035, 0.08), vec3(0.55, 0.36, 0.3), clamp(pow(s, 6.0) * 1.6, 0.0, 1.0));
            col = mix(col, lit * (0.75 + 0.35 * fbm(p * 2.5)), cover * 0.85 * (1.0 - smoothstep(0.9965, 0.9972, s) * 0.6));
            float star = step(0.9958, h21(floor(d.xz / (h + 0.4) * 180.0))) * smoothstep(0.12, 0.6, h) * (1.0 - cover);
          #else
          vec3 lit = mix(vec3(0.42, 0.3, 0.42), vec3(1.0, 0.66, 0.42), clamp(pow(s, 3.0) * 1.4 + (1.0 - h) * 0.3, 0.0, 1.0));
          col = mix(col, lit * (0.75 + 0.35 * fbm(p * 2.5)), cover * 0.9);
          float star = step(0.9975, h21(floor(d.xz / (h + 0.4) * 180.0))) * smoothstep(0.35, 0.8, h) * (1.0 - cover);
          #endif
          col += vec3(0.9, 0.92, 1.0) * star * (0.5 + 0.5 * sin(uTime * 2.0 + h21(floor(d.xz * 300.0)) * 30.0));
        }
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
    }),
    t = new Q(new ws(400, 32, 16), e);
  return ((t.renderOrder = -10), (t.frustumCulled = !1), t);
}
function G0e() {
  const s = new re(),
    e = [
      [150, 26, 4074812, 11],
      [210, 40, 2892338, 23],
    ];
  for (const [t, i, n, o] of e) {
    const r = [],
      l = [];
    let c = o;
    const h = () => ((c = (c * 16807) % 2147483647), c / 2147483647);
    let d = 0;
    for (let p = 0; p <= 160; p++) {
      const m = (p / 160) * Math.PI * 2;
      d = d * 0.6 + h() * 0.4;
      const g =
        i * (0.35 + 0.65 * (0.5 + 0.5 * Math.sin(m * 3 + o) * 0.5 + d * 0.6));
      if (
        (r.push(
          Math.cos(m) * t,
          -10,
          Math.sin(m) * t,
          Math.cos(m) * t,
          g,
          Math.sin(m) * t,
        ),
        p < 160)
      ) {
        const y = p * 2;
        l.push(y, y + 2, y + 1, y + 1, y + 2, y + 3);
      }
    }
    const u = new oi();
    (u.setAttribute("position", new Dt(r, 3)), u.setIndex(l));
    const f = new Q(u, new Zt({ color: n, fog: !1, side: Mi }));
    ((f.renderOrder = -9), s.add(f));
  }
  return s;
}
function iy(s, e) {
  const t = document.createElement("canvas");
  t.width = t.height = 64;
  const i = t.getContext("2d"),
    n = i.createRadialGradient(32, 32, 0, 32, 32, 32);
  (n.addColorStop(0, s),
    n.addColorStop(0.35, e),
    n.addColorStop(1, "rgba(0,0,0,0)"),
    (i.fillStyle = n),
    i.fillRect(0, 0, 64, 64));
  const o = new Si(t);
  return ((o.colorSpace = Ii), o);
}
function TM(s, e, t, i, n) {
  const o = new oi();
  (o.setAttribute("position", new qt(new Float32Array(s * 3), 3)),
    o.setAttribute("alpha", new qt(new Float32Array(s), 1)));
  const a = new Gi({
      transparent: !0,
      depthWrite: !1,
      blending: i ? rs : Rl,
      uniforms: {
        uColor: { value: new Ge(e) },
        uSize: { value: t },
        uMap: { value: n },
        uScale: { value: 1 },
      },
      vertexShader: `
      attribute float alpha; varying float vA; uniform float uSize; uniform float uScale;
      void main() { vA = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = uSize * uScale / -mv.z; gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `
      uniform vec3 uColor; uniform sampler2D uMap; varying float vA;
      void main() { vec4 t = texture2D(uMap, gl_PointCoord); gl_FragColor = vec4(uColor * t.rgb, t.a * vA); }`,
    }),
    r = new Ld(o, a);
  return ((r.frustumCulled = !1), r);
}
function W0e() {
  const s = document.createElement("canvas");
  ((s.width = 256), (s.height = 160));
  const e = s.getContext("2d");
  ((e.fillStyle = "#2f3a24"),
    e.fillRect(0, 0, 256, 160),
    (e.fillStyle = "#f08a1f"),
    e.beginPath(),
    e.moveTo(0, 0),
    e.lineTo(90, 80),
    e.lineTo(0, 160),
    e.closePath(),
    e.fill(),
    (e.fillStyle = "#ffc35a"),
    e.beginPath(),
    e.moveTo(0, 22),
    e.lineTo(64, 80),
    e.lineTo(0, 138),
    e.closePath(),
    e.fill(),
    (e.font = "900 34px Arial Black, Arial, sans-serif"),
    (e.fillStyle = "#e8e2cf"),
    (e.textAlign = "center"),
    (e.textBaseline = "middle"),
    e.fillText("VOXEL", 170, 62),
    e.fillText("RUSH", 170, 102));
  const t = new Si(s);
  ((t.colorSpace = Ii), (t.anisotropy = 4));
  const i = new ms(1.9, 1.15, 18, 8);
  i.translate(0.95, 0, 0);
  const n = Float32Array.from(i.getAttribute("position").array),
    o = new Q(i, new Pi({ map: t, side: Mi }));
  o.castShadow = !0;
  const a = (r) => {
    const l = i.getAttribute("position");
    for (let c = 0; c < l.count; c++) {
      const h = n[c * 3],
        d = n[c * 3 + 1],
        u = h / 1.9;
      (l.setZ(
        c,
        Math.sin(h * 3.1 - r * 4.2 + d * 0.8) * 0.16 * u +
          Math.sin(h * 7 - r * 7.3) * 0.03 * u,
      ),
        l.setY(c, d - u * u * 0.08));
    }
    ((l.needsUpdate = !0), i.computeVertexNormals());
  };
  return (
    a(0),
    {
      mesh: o,
      animate: a,
      dispose: () => {
        (i.dispose(), o.material.dispose(), t.dispose());
      },
    }
  );
}
const $0e =
  typeof location < "u" && new URLSearchParams(location.search).has("keyart");
function V0e(s, e, t = "") {
  if ($0e) return null;
  const i = document.createElement("canvas");
  ((i.width = 512), (i.height = 112));
  const n = i.getContext("2d");
  n.font = "800 44px Inter, system-ui, sans-serif";
  const o = s.length > 16 ? s.slice(0, 15) + "…" : s,
    a = Math.min(500, n.measureText(o).width + 92);
  ((n.fillStyle = "rgba(8,12,16,0.72)"),
    n.beginPath(),
    n.roundRect(256 - a / 2, 18, a, 72, 36),
    n.fill(),
    (n.strokeStyle =
      e === "you" ? "rgba(255,195,90,0.9)" : t || "rgba(255,255,255,0.14)"),
    (n.lineWidth = e === "you" ? 3 : 4),
    n.stroke());
  const r = e === "you" ? "#ffc35a" : e === "online" ? "#4cf58f" : "#7c8794";
  ((n.fillStyle = r),
    n.beginPath(),
    n.arc(256 - a / 2 + 38, 54, 10, 0, Math.PI * 2),
    n.fill(),
    (n.fillStyle = "#f3f6f8"),
    (n.textAlign = "left"),
    (n.textBaseline = "middle"),
    n.fillText(o, 256 - a / 2 + 62, 56));
  const l = new Si(i);
  ((l.colorSpace = Ii), (l.anisotropy = 4));
  const c = new Ws(
    new hn({ map: l, transparent: !0, depthWrite: !1, fog: !1 }),
  );
  return (c.scale.set(1.55, 0.34, 1), (c.position.y = 2.42), c);
}
function i1(s) {
  s.traverse((e) => {
    const t = e;
    if (!t.isMesh && !e.isSprite) return;
    t.userData.sharedGeometry || t.geometry?.dispose();
    const i = t.material;
    for (const n of Array.isArray(i) ? i : [i])
      !n ||
        t.userData.sharedMaterial ||
        (e.isSprite && n.map?.dispose(), n.dispose());
  });
}
const xM = [
  { x: 0, z: 0, yaw: 0, held: w.AK47, head: 0.08, pose: { pitch: -0.35 } },
  { x: -1.4, z: -1, yaw: 0.22, held: w.AWP, head: 0.04, pose: { pitch: -0.5 } },
  {
    x: 1.4,
    z: -1,
    yaw: -0.22,
    held: w.SHOTGUN,
    head: 0.1,
    pose: { pitch: -0.3 },
  },
  { x: -2.75, z: -2, yaw: 0.35, held: w.RPG, head: 0.14, pose: { pitch: 0.1 } },
  {
    x: 2.75,
    z: -2,
    yaw: -0.4,
    held: w.GLOCK,
    head: 0.12,
    pose: { pitch: -0.6, crouching: !0 },
  },
];
