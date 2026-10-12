// assets__index-Dp6GxvJu 232 — math
// Lines 127031-127348 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class rse {
  constructor(e, t, i, s) {
    w(this, "chunks", new Map());
    w(this, "meta", new Map());
    for (let o = 0; o < s; o++)
      for (let a = 0; a < s; a++)
        this.chunks.set(Gn(t + o, i + a), iW(e, t + o, i + a));
  }
  chunk(e, t) {
    const i = Math.floor(e / Pe),
      s = Math.floor(t / Pe);
    return { d: this.chunks.get(Gn(i, s)), lx: e - i * Pe, lz: t - s * Pe };
  }
  getBlock(e, t, i) {
    if (t < 0 || t >= Kt) return 0;
    const { d: s, lx: o, lz: a } = this.chunk(e, i);
    return s ? s[Ri(o, t, a)] : 0;
  }
  getMeta(e, t, i) {
    return this.meta.get(`${e},${t},${i}`) ?? 0;
  }
  set(e, t, i, s, o = 0) {
    const { d: a, lx: r, lz: l } = this.chunk(e, i);
    !a ||
      t < 0 ||
      t >= Kt ||
      ((a[Ri(r, t, l)] = s),
      o
        ? this.meta.set(`${e},${t},${i}`, o)
        : this.meta.delete(`${e},${t},${i}`));
  }
  top(e, t) {
    for (let i = Kt - 1; i > 0; i--) {
      const s = this.getBlock(e, i, t);
      if (
        s &&
        s !== v.TALL_GRASS &&
        s !== v.LEAVES &&
        s !== v.LOG &&
        !(s >= v.FLOWER_RED && s <= v.FLOWER_YELLOW)
      )
        return i;
    }
    return 0;
  }
  level(e, t, i, s) {
    for (let a = -(s + 6); a <= s + 6; a++)
      for (let r = -(s + 6); r <= s + 6; r++) {
        const l = Math.hypot(a, r),
          c = e + a,
          h = t + r;
        if (l > s + 6) continue;
        for (let p = 1; p < Kt; p++) {
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
          u = Math.min(1, Math.max(0, (l - s) / 6)),
          f = Math.round(i + (d - i) * u * u * (3 - 2 * u));
        for (let p = 1; p < Kt; p++) {
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
const nP = new k(-0.8, 0.24, -0.42).normalize(),
  lse = 8216154;
function cse() {
  const n = new sn({
      side: Js,
      depthWrite: !1,
      fog: !1,
      uniforms: { uSun: { value: nP.clone() }, uTime: { value: 0 } },
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
        vec3 zenith = vec3(0.07, 0.09, 0.2), mid = vec3(0.36, 0.27, 0.42), horizon = mix(vec3(0.72, 0.42, 0.4), vec3(1.0, 0.56, 0.26), pow(s, 2.5));
        vec3 col = mix(horizon, mix(mid, zenith, smoothstep(0.18, 0.8, h)), smoothstep(0.0, 0.26, h));
        if (h < 0.0) col = mix(horizon * 0.7, vec3(0.12, 0.09, 0.1), smoothstep(0.0, -0.25, h));
        col += vec3(1.0, 0.55, 0.25) * pow(s, 6.0) * 0.45 + vec3(1.0, 0.75, 0.45) * pow(s, 48.0) * 0.8 + vec3(1.0, 0.92, 0.75) * smoothstep(0.9993, 0.9997, s) * 6.0;
        if (h > 0.0) {
          vec2 p = d.xz / (h + 0.1) * 1.3 + vec2(uTime * 0.012, uTime * 0.004);
          float c = fbm(p), cover = smoothstep(0.52, 0.82, c) * smoothstep(0.0, 0.18, h) * (1.0 - smoothstep(0.55, 0.95, h));
          vec3 lit = mix(vec3(0.42, 0.3, 0.42), vec3(1.0, 0.66, 0.42), clamp(pow(s, 3.0) * 1.4 + (1.0 - h) * 0.3, 0.0, 1.0));
          col = mix(col, lit * (0.75 + 0.35 * fbm(p * 2.5)), cover * 0.9);
          float star = step(0.9975, h21(floor(d.xz / (h + 0.4) * 180.0))) * smoothstep(0.35, 0.8, h) * (1.0 - cover);
          col += vec3(0.9, 0.92, 1.0) * star * (0.5 + 0.5 * sin(uTime * 2.0 + h21(floor(d.xz * 300.0)) * 30.0));
        }
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
    }),
    e = new le(new mn(400, 32, 16), n);
  return ((e.renderOrder = -10), (e.frustumCulled = !1), e);
}
function hse() {
  const n = new pe(),
    e = [
      [150, 26, 4074812, 11],
      [210, 40, 2892338, 23],
    ];
  for (const [t, i, s, o] of e) {
    const r = [],
      l = [];
    let c = o;
    const h = () => ((c = (c * 16807) % 2147483647), c / 2147483647);
    let d = 0;
    for (let p = 0; p <= 160; p++) {
      const m = (p / 160) * Math.PI * 2;
      d = d * 0.6 + h() * 0.4;
      const y =
        i * (0.35 + 0.65 * (0.5 + 0.5 * Math.sin(m * 3 + o) * 0.5 + d * 0.6));
      if (
        (r.push(
          Math.cos(m) * t,
          -10,
          Math.sin(m) * t,
          Math.cos(m) * t,
          y,
          Math.sin(m) * t,
        ),
        p < 160)
      ) {
        const g = p * 2;
        l.push(g, g + 2, g + 1, g + 1, g + 2, g + 3);
      }
    }
    const u = new ci();
    (u.setAttribute("position", new It(r, 3)), u.setIndex(l));
    const f = new le(u, new qt({ color: s, fog: !1, side: Ai }));
    ((f.renderOrder = -9), n.add(f));
  }
  return n;
}
function f2(n, e) {
  const t = document.createElement("canvas");
  t.width = t.height = 64;
  const i = t.getContext("2d"),
    s = i.createRadialGradient(32, 32, 0, 32, 32, 32);
  (s.addColorStop(0, n),
    s.addColorStop(0.35, e),
    s.addColorStop(1, "rgba(0,0,0,0)"),
    (i.fillStyle = s),
    i.fillRect(0, 0, 64, 64));
  const o = new bi(t);
  return ((o.colorSpace = vi), o);
}
function t3(n, e, t, i, s) {
  const o = new ci();
  (o.setAttribute("position", new oi(new Float32Array(n * 3), 3)),
    o.setAttribute("alpha", new oi(new Float32Array(n), 1)));
  const a = new sn({
      transparent: !0,
      depthWrite: !1,
      blending: i ? cn : Br,
      uniforms: {
        uColor: { value: new ze(e) },
        uSize: { value: t },
        uMap: { value: s },
        uScale: { value: 1 },
      },
      vertexShader: `
      attribute float alpha; varying float vA; uniform float uSize; uniform float uScale;
      void main() { vA = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = uSize * uScale / -mv.z; gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `
      uniform vec3 uColor; uniform sampler2D uMap; varying float vA;
      void main() { vec4 t = texture2D(uMap, gl_PointCoord); gl_FragColor = vec4(uColor * t.rgb, t.a * vA); }`,
    }),
    r = new T0(o, a);
  return ((r.frustumCulled = !1), r);
}
function dse() {
  const n = document.createElement("canvas");
  ((n.width = 256), (n.height = 160));
  const e = n.getContext("2d");
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
  const t = new bi(n);
  ((t.colorSpace = vi), (t.anisotropy = 4));
  const i = new pn(1.9, 1.15, 18, 8);
  i.translate(0.95, 0, 0);
  const s = Float32Array.from(i.getAttribute("position").array),
    o = new le(i, new gi({ map: t, side: Ai }));
  o.castShadow = !0;
  const a = (r) => {
    const l = i.getAttribute("position");
    for (let c = 0; c < l.count; c++) {
      const h = s[c * 3],
        d = s[c * 3 + 1],
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
const use =
  typeof location < "u" && new URLSearchParams(location.search).has("keyart");
function fse(n, e, t = "") {
  if (use) return null;
  const i = document.createElement("canvas");
  ((i.width = 512), (i.height = 112));
  const s = i.getContext("2d");
  s.font = "800 44px Inter, system-ui, sans-serif";
  const o = n.length > 16 ? n.slice(0, 15) + "…" : n,
    a = Math.min(500, s.measureText(o).width + 92);
  ((s.fillStyle = "rgba(8,12,16,0.72)"),
    s.beginPath(),
    s.roundRect(256 - a / 2, 18, a, 72, 36),
    s.fill(),
    (s.strokeStyle =
      e === "you" ? "rgba(255,195,90,0.9)" : t || "rgba(255,255,255,0.14)"),
    (s.lineWidth = e === "you" ? 3 : 4),
    s.stroke());
  const r = e === "you" ? "#ffc35a" : e === "online" ? "#4cf58f" : "#7c8794";
  ((s.fillStyle = r),
    s.beginPath(),
    s.arc(256 - a / 2 + 38, 54, 10, 0, Math.PI * 2),
    s.fill(),
    (s.fillStyle = "#f3f6f8"),
    (s.textAlign = "left"),
    (s.textBaseline = "middle"),
    s.fillText(o, 256 - a / 2 + 62, 56));
  const l = new bi(i);
  ((l.colorSpace = vi), (l.anisotropy = 4));
  const c = new os(
    new es({ map: l, transparent: !0, depthWrite: !1, fog: !1 }),
  );
  return (c.scale.set(1.55, 0.34, 1), (c.position.y = 2.42), c);
}
function Ef(n) {
  n.traverse((e) => {
    var s, o;
    const t = e;
    if (!t.isMesh && !e.isSprite) return;
    t.userData.sharedGeometry || (s = t.geometry) == null || s.dispose();
    const i = t.material;
    for (const a of Array.isArray(i) ? i : [i])
      a && (e.isSprite && ((o = a.map) == null || o.dispose()), a.dispose());
  });
}
const i3 = [
  { x: 0, z: 0, yaw: 0, held: E.AK47, head: 0.08, pose: { pitch: -0.35 } },
  { x: -1.4, z: -1, yaw: 0.22, held: E.AWP, head: 0.04, pose: { pitch: -0.5 } },
  {
    x: 1.4,
    z: -1,
    yaw: -0.22,
    held: E.SHOTGUN,
    head: 0.1,
    pose: { pitch: -0.3 },
  },
  { x: -2.75, z: -2, yaw: 0.35, held: E.RPG, head: 0.14, pose: { pitch: 0.1 } },
  {
    x: 2.75,
    z: -2,
    yaw: -0.4,
    held: E.GLOCK,
    head: 0.12,
    pose: { pitch: -0.6, crouching: !0 },
  },
];
