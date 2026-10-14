// index-Dp6GxvJu 181 — math
// Lines 102138-102418 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const ZJ = new XJ();
class QJ {
  constructor(e) {
    w(this, "elapsed", 0);
    w(this, "check", 0);
    w(this, "site", null);
    w(this, "last", "");
    w(this, "bannerUntil", 0);
    w(this, "positions", new Float32Array(216));
    w(this, "geometry", new ci());
    w(this, "steam");
    w(this, "banner", document.createElement("div"));
    const t = document.createElement("canvas");
    t.width = t.height = 64;
    const i = t.getContext("2d"),
      s = i.createRadialGradient(32, 32, 0, 32, 32, 32);
    (s.addColorStop(0, "rgba(255,255,255,.75)"),
      s.addColorStop(0.45, "rgba(255,255,255,.28)"),
      s.addColorStop(1, "rgba(255,255,255,0)"),
      (i.fillStyle = s),
      i.fillRect(0, 0, 64, 64),
      this.geometry.setAttribute("position", new oi(this.positions, 3)),
      (this.steam = new T0(
        this.geometry,
        new Xp({
          map: new bi(t),
          size: 3.5,
          transparent: !0,
          opacity: 0.38,
          depthWrite: !1,
          color: 16055028,
        }),
      )),
      (this.steam.frustumCulled = !1),
      (this.steam.visible = !1),
      (this.steam.renderOrder = Gi.vent),
      e.add(this.steam),
      (this.banner.style.cssText =
        "position:fixed;left:50%;top:15%;transform:translateX(-50%);max-width:85vw;text-align:center;pointer-events:none;color:#fff7df;text-shadow:0 2px 12px #162829;font:500 clamp(16px,2.5vw,28px) Georgia,serif;letter-spacing:.08em;opacity:0;transition:opacity 1.2s;z-index:12;padding:12px 24px;border-top:1px solid #f5e3ab88"),
      (this.banner.className = "landmark-banner"),
      document.body.appendChild(this.banner));
  }
  update(e, t, i, s, o) {
    if (((this.elapsed += e), (this.check -= e), this.check <= 0)) {
      ((this.check = 0.5), (this.site = s ? Lp(t, i.x, i.z) : null));
      const l = this.site ? `${this.site.x},${this.site.z}` : "";
      (l &&
        l !== this.last &&
        ((this.banner.textContent = Ak[this.site.kind][o ? 1 : 0]),
        (this.bannerUntil = this.elapsed + 6)),
        (this.last = l));
    }
    this.banner.style.opacity =
      s && this.site && this.elapsed < this.bannerUntil ? "1" : "0";
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
    var t;
    (this.steam.removeFromParent(), this.geometry.dispose());
    const e = this.steam.material;
    ((t = e.map) == null || t.dispose(), e.dispose(), this.banner.remove());
  }
}
const Bf = {
    CARVE: 0,
    BREW: 1,
    WENDIGO_APPEAR: 2,
    WENDIGO_VANISH: 3,
    BLOOD_MOON: 4,
  },
  j_ = {
    [BLOCK.AUTUMN_LEAVES_ORANGE]: [14181660, 15306282, 12734490, 15771704],
    [BLOCK.AUTUMN_LEAVES_RED]: [11019806, 12991010, 9051160, 14178334],
    [BLOCK.AUTUMN_LEAVES_YELLOW]: [14856236, 15845701, 13866527, 15651690],
    [BLOCK.LEAVES]: [5212724, 6986300, 10263610, 6061100],
    [BLOCK.SAKURA_LEAVES]: [15901384, 16303324, 15239350],
    [BLOCK.TROPICAL_LEAVES]: [3115578, 5152832],
    [BLOCK.DESERT_LEAVES]: [8888394, 11052116],
  },
  X_ = {
    [BLOCK.AUTUMN_LEAVES_ORANGE]: 1,
    [BLOCK.AUTUMN_LEAVES_RED]: 1,
    [BLOCK.AUTUMN_LEAVES_YELLOW]: 1,
    [BLOCK.SAKURA_LEAVES]: 0.7,
    [BLOCK.LEAVES]: 0.09,
    [BLOCK.TROPICAL_LEAVES]: 0.05,
    [BLOCK.DESERT_LEAVES]: 0.05,
  },
  JJ = new Set([
    "forest",
    "autumn",
    "plains",
    "jungle",
    "yellowstone",
    "islands",
    "oasis",
    "savanna",
  ]),
  eee = new Set([
    "forest",
    "autumn",
    "plains",
    "jungle",
    "yellowstone",
    "savanna",
    "oasis",
  ]),
  Z_ = new Set([BLOCK.GRAVESTONE, BLOCK.GRAVE_CROSS, BLOCK.COFFIN, BLOCK.SKULL]),
  tee = new ze(12897494),
  iee = new ze(13664376),
  nee = `
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
  see = `
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
  oee = `
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
  aee = `
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
function FI(n, e = 128) {
  const t = document.createElement("canvas");
  ((t.width = t.height = e), n(t.getContext("2d"), e));
  const i = new bi(t);
  return ((i.colorSpace = vi), i);
}
function ree() {
  return FI((n, e) => {
    const t = e,
      i = e * 2;
    n.canvas.height = i;
    const s = n.createLinearGradient(0, 0, 0, i);
    (s.addColorStop(0, "rgba(226,240,255,0.95)"),
      s.addColorStop(0.55, "rgba(190,214,240,0.7)"),
      s.addColorStop(1, "rgba(160,190,230,0)"),
      (n.fillStyle = s),
      n.beginPath(),
      n.moveTo(t * 0.5, i * 0.03),
      n.bezierCurveTo(
        t * 0.86,
        i * 0.04,
        t * 0.8,
        i * 0.3,
        t * 0.84,
        i * 0.55,
      ));
    for (let o = 0; o <= 6; o++)
      n.lineTo(t * (0.9 - o * 0.133), i * (o % 2 ? 0.92 : 1));
    (n.bezierCurveTo(t * 0.2, i * 0.3, t * 0.14, i * 0.04, t * 0.5, i * 0.03),
      n.fill(),
      (n.fillStyle = "rgba(10,14,24,0.95)"));
    for (const o of [0.38, 0.62])
      (n.beginPath(),
        n.ellipse(t * o, i * 0.16, t * 0.07, i * 0.045, 0, 0, Math.PI * 2),
        n.fill());
    (n.beginPath(),
      n.ellipse(t * 0.5, i * 0.27, t * 0.08, i * 0.06, 0, 0, Math.PI * 2),
      n.fill(),
      (n.strokeStyle = "rgba(214,232,255,0.6)"),
      (n.lineWidth = t * 0.07),
      (n.lineCap = "round"),
      n.beginPath(),
      n.moveTo(t * 0.28, i * 0.36),
      n.quadraticCurveTo(t * 0.08, i * 0.44, t * 0.1, i * 0.55),
      n.stroke(),
      n.beginPath(),
      n.moveTo(t * 0.72, i * 0.36),
      n.quadraticCurveTo(t * 0.92, i * 0.44, t * 0.9, i * 0.55),
      n.stroke());
  });
}
function lee() {
  return FI((n, e) => {
    for (let t = 0; t < 9; t++) {
      const i = e * (0.25 + Math.random() * 0.5),
        s = e * (0.35 + Math.random() * 0.3),
        o = e * (0.18 + Math.random() * 0.2),
        a = n.createRadialGradient(i, s, 0, i, s, o);
      (a.addColorStop(0, "rgba(210,220,230,0.35)"),
        a.addColorStop(1, "rgba(210,220,230,0)"),
        (n.fillStyle = a),
        n.fillRect(0, 0, e, e));
    }
  });
}
