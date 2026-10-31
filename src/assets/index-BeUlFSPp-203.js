// index-BeUlFSPp 203 — math
// Lines 108851-109135 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const lae = new rae();
class cae {
  elapsed = 0;
  check = 0;
  site = null;
  last = "";
  bannerUntil = 0;
  positions = new Float32Array(216);
  geometry = new oi();
  steam;
  banner = document.createElement("div");
  constructor(e) {
    const t = document.createElement("canvas");
    t.width = t.height = 64;
    const i = t.getContext("2d"),
      n = i.createRadialGradient(32, 32, 0, 32, 32, 32);
    (n.addColorStop(0, "rgba(255,255,255,.75)"),
      n.addColorStop(0.45, "rgba(255,255,255,.28)"),
      n.addColorStop(1, "rgba(255,255,255,0)"),
      (i.fillStyle = n),
      i.fillRect(0, 0, 64, 64),
      this.geometry.setAttribute("position", new qt(this.positions, 3)),
      (this.steam = new Ld(
        this.geometry,
        new Dm({
          map: new Si(t),
          size: 3.5,
          transparent: !0,
          opacity: 0.38,
          depthWrite: !1,
          color: 16055028,
        }),
      )),
      (this.steam.frustumCulled = !1),
      (this.steam.visible = !1),
      (this.steam.renderOrder = zi.vent),
      e.add(this.steam),
      (this.banner.style.cssText =
        "position:fixed;left:50%;top:15%;transform:translateX(-50%);max-width:85vw;text-align:center;pointer-events:none;color:#fff7df;text-shadow:0 2px 12px #162829;font:500 clamp(16px,2.5vw,28px) Georgia,serif;letter-spacing:.08em;opacity:0;transition:opacity 1.2s;z-index:12;padding:12px 24px;border-top:1px solid #f5e3ab88"),
      (this.banner.className = "landmark-banner"),
      document.body.appendChild(this.banner));
  }
  update(e, t, i, n, o) {
    if (((this.elapsed += e), (this.check -= e), this.check <= 0)) {
      ((this.check = 0.5), (this.site = n ? wm(t, i.x, i.z) : null));
      const l = this.site ? `${this.site.x},${this.site.z}` : "";
      (l &&
        l !== this.last &&
        ((this.banner.textContent = I(
          Av[this.site.kind][1],
          Av[this.site.kind][0],
        )),
        (this.bannerUntil = this.elapsed + 6)),
        (this.last = l));
    }
    this.banner.style.opacity =
      n && this.site && this.elapsed < this.bannerUntil ? "1" : "0";
    const a = this.site;
    if (
      ((this.steam.visible =
        !!a && (a.kind === "yellowstone" || a.kind === "volcanic")),
      !this.steam.visible || !a)
    )
      return;
    const r = a.kind === "volcanic";
    this.steam.material.color.setHex(r ? 7892327 : 16055028);
    for (let l = 0; l < 72; l++) {
      const c = Math.floor(l / 24),
        h = (this.elapsed * 0.17 + l * 0.061) % 1,
        d =
          c === 0
            ? 8 + Math.pow(Math.max(0, Math.sin(this.elapsed * 0.22)), 6) * 15
            : 6,
        u = a.x + (r ? 0 : [0, 63, -66][c]),
        f = a.z + (r ? 0 : [0, -37, 31][c]);
      ((this.positions[l * 3] =
        u + Math.sin(l * 2.4 + h * 4) * (1 + h * 3) + h * 4),
        (this.positions[l * 3 + 1] = (r ? 88 : 47) + h * (r ? 22 : d)),
        (this.positions[l * 3 + 2] =
          f + Math.cos(l * 1.7 + h * 3) * (1 + h * 2)));
    }
    this.geometry.attributes.position.needsUpdate = !0;
  }
  dispose() {
    (this.steam.removeFromParent(), this.geometry.dispose());
    const e = this.steam.material;
    (e.map?.dispose(), e.dispose(), this.banner.remove());
  }
}
const ju = {
    CARVE: 0,
    BREW: 1,
    WENDIGO_APPEAR: 2,
    WENDIGO_VANISH: 3,
    BLOOD_MOON: 4,
    FLARE: 5,
  },
  Ug = { HEIGHT: 34, BURN: 24, SINK: 1.15 },
  EC = {
    [v.AUTUMN_LEAVES_ORANGE]: [14181660, 15306282, 12734490, 15771704],
    [v.AUTUMN_LEAVES_RED]: [11019806, 12991010, 9051160, 14178334],
    [v.AUTUMN_LEAVES_YELLOW]: [14856236, 15845701, 13866527, 15651690],
    [v.LEAVES]: [5212724, 6986300, 10263610, 6061100],
    [v.SAKURA_LEAVES]: [15901384, 16303324, 15239350],
    [v.TROPICAL_LEAVES]: [3115578, 5152832],
    [v.DESERT_LEAVES]: [8888394, 11052116],
  },
  AC = {
    [v.AUTUMN_LEAVES_ORANGE]: 1,
    [v.AUTUMN_LEAVES_RED]: 1,
    [v.AUTUMN_LEAVES_YELLOW]: 1,
    [v.SAKURA_LEAVES]: 0.7,
    [v.LEAVES]: 0.09,
    [v.TROPICAL_LEAVES]: 0.05,
    [v.DESERT_LEAVES]: 0.05,
  },
  hae = new Set([
    "forest",
    "autumn",
    "plains",
    "jungle",
    "yellowstone",
    "islands",
    "oasis",
    "savanna",
  ]),
  dae = new Set([
    "forest",
    "autumn",
    "plains",
    "jungle",
    "yellowstone",
    "savanna",
    "oasis",
  ]),
  TC = new Set([v.GRAVESTONE, v.GRAVE_CROSS, v.COFFIN, v.SKULL]),
  uae = new Ge(12897494),
  fae = new Ge(13664376),
  pae = `
attribute vec4 aSpawn;
attribute vec4 aInfo;
attribute vec3 aColor;
uniform float uTime;
uniform vec2 uWind;
varying vec2 vUv;
varying vec3 vColor;
varying float vAlpha;
void main() {
  float t = uTime - aSpawn.w;
  float life = aInfo.z;
  vUv = uv;
  vColor = aColor;
  if (t < 0.0 || t > life) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); vAlpha = 0.0; return; }
  float seed = aInfo.y;
  float fall = 0.7 + fract(seed * 7.13) * 0.55;
  float tl = max(0.0, aSpawn.y - aInfo.x) / fall;
  float tm = min(t, tl);
  vec3 p = aSpawn.xyz;
  p.y -= fall * tm;
  // pendulum flutter plus a drift that follows the wind
  p.x += sin(tm * 2.1 + seed * 6.28) * 0.34 + uWind.x * tm * 0.8 + sin(tm * 0.63 + seed) * 0.22;
  p.z += cos(tm * 1.7 + seed * 4.1) * 0.3 + uWind.y * tm * 0.8;
  float landed = step(tl, t);
  float a1 = tm * (2.2 + fract(seed * 3.7) * 2.4) + seed * 6.0;
  float a2 = tm * 1.3 + seed * 2.0;
  vec3 v = vec3(position.xy * aInfo.w, 0.0);
  mat3 rx = mat3(1.0, 0.0, 0.0, 0.0, cos(a1), sin(a1), 0.0, -sin(a1), cos(a1));
  mat3 ry = mat3(cos(a2), 0.0, -sin(a2), 0.0, 1.0, 0.0, sin(a2), 0.0, cos(a2));
  vec3 tumbling = ry * rx * v;
  float s = seed * 6.28;
  vec3 lying = vec3(v.x * cos(s) - v.y * sin(s), 0.0, v.x * sin(s) + v.y * cos(s));
  vec3 local = mix(tumbling, lying, landed);
  p.y = mix(p.y, aInfo.x + 0.035 + fract(seed * 11.0) * 0.012, landed);
  vAlpha = 1.0 - smoothstep(life - 2.5, life, t);
  gl_Position = projectionMatrix * viewMatrix * vec4(p + local, 1.0);
}`,
  mae = `
uniform float uLight;
varying vec2 vUv;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec2 q = vUv * 2.0 - 1.0;
  // a pointed leaf: an ellipse pinched towards the tip, with a stalk nub at the base
  float width = 0.6 * (1.0 - q.y * q.y) * (0.75 + 0.25 * (1.0 - q.y));
  bool stalk = abs(q.x) < 0.06 && q.y < -0.75;
  if ((abs(q.x) > width && !stalk) || q.y > 0.98) discard;
  float n = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  if (n > vAlpha) discard;
  float vein = 1.0 - 0.28 * smoothstep(0.07, 0.0, abs(q.x));
  vec3 c = vColor * vein * (0.82 + 0.22 * q.y);
  gl_FragColor = vec4(c * uLight, 1.0);
  #include <colorspace_fragment>
}`,
  gae = `
attribute vec3 aColor;
attribute float aSize;
attribute float aAlpha;
uniform float uScale;
varying vec3 vColor;
varying float vAlpha;
void main() {
  vColor = aColor;
  vAlpha = aAlpha;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  // aSize is the glow's diameter in metres, so a firefly stays a firefly at arm's length
  gl_PointSize = clamp(aSize * uScale / max(0.3, -mv.z), 1.5, 72.0);
  gl_Position = projectionMatrix * mv;
}`,
  yae = `
varying vec3 vColor;
varying float vAlpha;
void main() {
  vec2 q = gl_PointCoord * 2.0 - 1.0;
  float d = dot(q, q);
  if (d > 1.0) discard;
  float core = exp(-d * 9.0), halo = exp(-d * 2.6) * 0.45;
  gl_FragColor = vec4(vColor * (core * 1.6 + halo), (core + halo) * vAlpha);
  #include <colorspace_fragment>
}`;
function s9(s, e = 128) {
  const t = document.createElement("canvas");
  ((t.width = t.height = e), s(t.getContext("2d"), e));
  const i = new Si(t);
  return ((i.colorSpace = Ii), i);
}
function vae() {
  return s9((s, e) => {
    const t = e,
      i = e * 2;
    s.canvas.height = i;
    const n = s.createLinearGradient(0, 0, 0, i);
    (n.addColorStop(0, "rgba(226,240,255,0.95)"),
      n.addColorStop(0.55, "rgba(190,214,240,0.7)"),
      n.addColorStop(1, "rgba(160,190,230,0)"),
      (s.fillStyle = n),
      s.beginPath(),
      s.moveTo(t * 0.5, i * 0.03),
      s.bezierCurveTo(
        t * 0.86,
        i * 0.04,
        t * 0.8,
        i * 0.3,
        t * 0.84,
        i * 0.55,
      ));
    for (let o = 0; o <= 6; o++)
      s.lineTo(t * (0.9 - o * 0.133), i * (o % 2 ? 0.92 : 1));
    (s.bezierCurveTo(t * 0.2, i * 0.3, t * 0.14, i * 0.04, t * 0.5, i * 0.03),
      s.fill(),
      (s.fillStyle = "rgba(10,14,24,0.95)"));
    for (const o of [0.38, 0.62])
      (s.beginPath(),
        s.ellipse(t * o, i * 0.16, t * 0.07, i * 0.045, 0, 0, Math.PI * 2),
        s.fill());
    (s.beginPath(),
      s.ellipse(t * 0.5, i * 0.27, t * 0.08, i * 0.06, 0, 0, Math.PI * 2),
      s.fill(),
      (s.strokeStyle = "rgba(214,232,255,0.6)"),
      (s.lineWidth = t * 0.07),
      (s.lineCap = "round"),
      s.beginPath(),
      s.moveTo(t * 0.28, i * 0.36),
      s.quadraticCurveTo(t * 0.08, i * 0.44, t * 0.1, i * 0.55),
      s.stroke(),
      s.beginPath(),
      s.moveTo(t * 0.72, i * 0.36),
      s.quadraticCurveTo(t * 0.92, i * 0.44, t * 0.9, i * 0.55),
      s.stroke());
  });
}
function bae() {
  return s9((s, e) => {
    for (let t = 0; t < 9; t++) {
      const i = e * (0.25 + Math.random() * 0.5),
        n = e * (0.35 + Math.random() * 0.3),
        o = e * (0.18 + Math.random() * 0.2),
        a = s.createRadialGradient(i, n, 0, i, n, o);
      (a.addColorStop(0, "rgba(210,220,230,0.35)"),
        a.addColorStop(1, "rgba(210,220,230,0)"),
        (s.fillStyle = a),
        s.fillRect(0, 0, e, e));
    }
  });
}
