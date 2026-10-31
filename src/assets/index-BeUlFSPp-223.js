// index-BeUlFSPp 223 — math
// Lines 117202-117537 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Yg(s, e, t) {
  for (let i = 0; i < s.length; i++) {
    const n = s[i];
    n === e ? (s[i] = t) : n === t && (s[i] = e);
  }
}
const Hre = 12,
  Bre = 4,
  cM = 2400,
  Ou = 1024,
  zre = 24576;
function g1(s, e) {
  let t =
    Math.imul(((s % Ou) + Ou) % Ou, 374761393) ^
    Math.imul(((e % Ou) + Ou) % Ou, 668265263);
  return (
    (t = Math.imul(t ^ (t >>> 13), 1274126177)),
    ((t ^ (t >>> 16)) >>> 0) / 4294967296
  );
}
function UC(s) {
  return s * s * (3 - 2 * s);
}
function GC(s, e) {
  const t = Math.floor(s),
    i = Math.floor(e),
    n = UC(s - t),
    o = UC(e - i),
    a = g1(t, i),
    r = g1(t + 1, i),
    l = g1(t, i + 1),
    c = g1(t + 1, i + 1);
  return a + (r - a) * n + (l - a) * o + (a - r - l + c) * n * o;
}
function Fre(s, e) {
  return (
    GC(s / 8, e / 8) * 0.62 +
    GC(s / 3 + 17, e / 3 - 9) * 0.28 +
    g1(s * 7 + 3, e * 5 - 1) * 0.1
  );
}
class Ure {
  mesh;
  uniforms = {
    uTop: { value: new Ge(1, 1, 1) },
    uSide: { value: new Ge(0.9, 0.92, 0.95) },
    uBottom: { value: new Ge(0.72, 0.76, 0.82) },
    uSkyTop: { value: new Ge() },
    uSkyHorizon: { value: new Ge() },
    uSunDir: { value: new k(0, 1, 0) },
    uSunColor: { value: new Ge() },
    uCam: { value: new k() },
    uFade: { value: new ct(120, 260) },
  };
  dummy = new Xt();
  keyX = NaN;
  keyZ = NaN;
  keyCover = -1;
  keyRadius = -1;
  scroll = 0;
  radius = 18;
  altitude = 150;
  cell = Hre;
  thick = Bre;
  fixedRadius = 0;
  constructor() {
    const e = new kt(1, 1, 1),
      t = new Gi({
        uniforms: this.uniforms,
        fog: !1,
        vertexShader: `
        varying float vShade;
        varying vec3 vWorld;
        void main() {
          vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
          vWorld = w.xyz;
          // 1 top, 0 bottom, sides in between (east/west a touch brighter than north/south)
          vShade = normal.y > 0.5 ? 1.0 : normal.y < -0.5 ? 0.0 : (abs(normal.x) > 0.5 ? 0.6 : 0.5);
          gl_Position = projectionMatrix * viewMatrix * w;
        }`,
        fragmentShader: `
        uniform vec3 uTop, uSide, uBottom, uSkyTop, uSkyHorizon, uSunColor, uSunDir, uCam;
        uniform vec2 uFade;
        varying float vShade;
        varying vec3 vWorld;
        void main() {
          vec3 c = vShade > 0.99 ? uTop : vShade < 0.01 ? uBottom : uSide * (0.9 + (vShade - 0.5) * 1.0);
          // the dome's colour behind this point, so the far deck dissolves into the sky
          vec3 dir = normalize(vWorld - uCam);
          float h = max(dir.y, 0.0);
          vec3 sky = mix(uSkyHorizon, uSkyTop, pow(h, 0.55));
          sky = mix(sky, uSkyHorizon, pow(1.0 - h, 9.0) * 0.75);
          float sd = max(dot(dir, uSunDir), 0.0);
          sky += uSunColor * (pow(sd, 12.0) * 0.16 + pow(sd, 3.0) * 0.07);
          // clouds in front of the sun glow at their rims
          c += uSunColor * pow(sd, 8.0) * 0.18;
          float f = smoothstep(uFade.x, uFade.y, length(vWorld.xz - uCam.xz));
          gl_FragColor = vec4(mix(c, sky, f), 1.0);
        }`,
      });
    ((this.mesh = new On(e, t, cM)),
      (this.mesh.count = 0),
      (this.mesh.frustumCulled = !1),
      (this.mesh.castShadow = this.mesh.receiveShadow = !1),
      (this.mesh.matrixAutoUpdate = !1),
      (this.mesh.name = "cloud-layer"));
  }
  setRange(e) {
    this.radius =
      this.fixedRadius || Math.max(12, Math.min(34, Math.ceil(e / this.cell)));
  }
  setDeck(e, t, i, n) {
    ((this.cell = e),
      (this.thick = t),
      (this.altitude = i),
      (this.fixedRadius = n),
      (this.radius = n),
      (this.keyX = NaN));
  }
  update(e, t, i, n, o) {
    const a = this.uniforms;
    (a.uTop.value.copy(o.top),
      a.uSide.value.copy(o.side),
      a.uBottom.value.copy(o.bottom),
      a.uSkyTop.value.copy(o.skyTop),
      a.uSkyHorizon.value.copy(o.skyHorizon),
      a.uSunDir.value.copy(o.sunDir),
      a.uSunColor.value.copy(o.sunColor),
      a.uCam.value.copy(e));
    const r = this.radius * this.cell;
    (a.uFade.value.set(r * 0.62, r * 0.98),
      (this.scroll = (this.scroll + n * t) % (zre * this.cell)));
    const l = this.scroll,
      c = Math.floor((e.x - l) / this.cell),
      h = Math.floor(e.z / this.cell),
      d = Math.round(i * 20) / 20;
    ((c !== this.keyX ||
      h !== this.keyZ ||
      d !== this.keyCover ||
      this.radius !== this.keyRadius) &&
      ((this.keyX = c),
      (this.keyZ = h),
      (this.keyCover = d),
      (this.keyRadius = this.radius),
      this.rebuild(c, h, d)),
      this.mesh.position.set(l, this.altitude, 0),
      this.mesh.updateMatrix());
  }
  rebuild(e, t, i) {
    const n = 0.6 - i * 0.42,
      o = this.radius,
      a = (o + 0.5) * (o + 0.5);
    let r = 0;
    for (let l = -o; l <= o && r < cM; l++)
      for (let c = -o; c <= o && r < cM; c++) {
        if (c * c + l * l > a) continue;
        const h = e + c,
          d = t + l,
          u = Fre(h, d);
        if (u < n) continue;
        const f = this.cell,
          p = this.thick,
          m = p + (u - n > 0.18 ? p * 0.375 : 0);
        (this.dummy.position.set(h * f + f / 2, -m / 2 + p / 2, d * f + f / 2),
          this.dummy.scale.set(f, m, f),
          this.dummy.updateMatrix(),
          this.mesh.setMatrixAt(r++, this.dummy.matrix));
      }
    ((this.mesh.count = r), (this.mesh.instanceMatrix.needsUpdate = !0));
  }
  dispose() {
    (this.mesh.geometry.dispose(), this.mesh.material.dispose());
  }
}
const WC = new Ge(0.36, 0.6, 0.94),
  $C = new Ge(0.66, 0.8, 0.96),
  Gre = new Ge(0.012, 0.02, 0.06),
  Wre = new Ge(0.05, 0.07, 0.14),
  $re = new Ge(0.34, 0.37, 0.4),
  VC = new Ge(1, 0.5, 0.25),
  qC = new Ge(1, 1, 1),
  Vre = new Ge(1.04, 0.99, 0.9),
  qre = new Ge(0.5, 0.66, 1);
function KC(s, e) {
  const t = document.createElement("canvas");
  t.width = t.height = 64;
  const i = t.getContext("2d"),
    n = i.createRadialGradient(32, 32, 4, 32, 32, 32);
  return (
    n.addColorStop(0, s),
    n.addColorStop(0.45, e),
    n.addColorStop(1, "rgba(0,0,0,0)"),
    (i.fillStyle = n),
    i.fillRect(0, 0, 64, 64),
    new Si(t)
  );
}
function d9(s) {
  let e = s >>> 0;
  return () => ((e = (e * 1664525 + 1013904223) >>> 0), e / 4294967296);
}
function Kre(s) {
  const e = document.createElement("canvas");
  e.width = e.height = s;
  const t = e.getContext("2d"),
    i = s / 2,
    n = s * 0.19,
    o = t.createRadialGradient(i, i, n * 0.9, i, i, i);
  (o.addColorStop(0, "rgba(255,244,214,0.95)"),
    o.addColorStop(0.12, "rgba(255,226,160,0.42)"),
    o.addColorStop(0.35, "rgba(255,190,110,0.13)"),
    o.addColorStop(0.7, "rgba(255,168,90,0.035)"),
    o.addColorStop(1, "rgba(255,150,70,0)"),
    (t.fillStyle = o),
    t.fillRect(0, 0, s, s));
  const a = t.createRadialGradient(i, i, 0, i, i, n);
  (a.addColorStop(0, "rgba(255,255,252,1)"),
    a.addColorStop(0.62, "rgba(255,250,226,1)"),
    a.addColorStop(0.9, "rgba(255,236,186,1)"),
    a.addColorStop(1, "rgba(255,222,158,0.86)"),
    (t.fillStyle = a),
    t.beginPath(),
    t.arc(i, i, n, 0, Math.PI * 2),
    t.fill());
  const r = new Si(e);
  return ((r.colorSpace = Ii), r);
}
function Yre(s, e) {
  const t = document.createElement("canvas");
  t.width = t.height = s;
  const i = t.getContext("2d"),
    n = s / 2,
    o = s * 0.42,
    a = d9(20240617),
    r = i.createRadialGradient(n, n, o * 0.95, n, n, n);
  (r.addColorStop(0, "rgba(196,214,255,0.30)"),
    r.addColorStop(0.5, "rgba(150,180,255,0.07)"),
    r.addColorStop(1, "rgba(120,160,255,0)"),
    (i.fillStyle = r),
    i.fillRect(0, 0, s, s),
    i.save(),
    i.beginPath(),
    i.arc(n, n, o, 0, Math.PI * 2),
    i.clip(),
    (i.fillStyle = "#d9dee8"),
    i.fillRect(0, 0, s, s));
  for (let h = 0; h < (e >= 2 ? 7 : 4); h++) {
    const d = a() * Math.PI * 2,
      u = a() * o * 0.7,
      f = o * (0.18 + a() * 0.26),
      p = i.createRadialGradient(
        n + Math.cos(d) * u,
        n + Math.sin(d) * u,
        0,
        n + Math.cos(d) * u,
        n + Math.sin(d) * u,
        f,
      );
    (p.addColorStop(0, "rgba(150,158,175,0.5)"),
      p.addColorStop(1, "rgba(150,158,175,0)"),
      (i.fillStyle = p),
      i.fillRect(0, 0, s, s));
  }
  const l = e >= 2 ? 46 : e >= 1 ? 20 : 0;
  for (let h = 0; h < l; h++) {
    const d = a() * Math.PI * 2,
      u = Math.sqrt(a()) * o * 0.94,
      f = n + Math.cos(d) * u,
      p = n + Math.sin(d) * u,
      m = o * (0.025 + a() * a() * 0.13);
    ((i.fillStyle = "rgba(108,116,132,0.55)"),
      i.beginPath(),
      i.arc(f, p, m, 0, Math.PI * 2),
      i.fill(),
      (i.strokeStyle = "rgba(245,248,255,0.5)"),
      (i.lineWidth = Math.max(1, m * 0.28)),
      i.beginPath(),
      i.arc(
        f - m * 0.12,
        p - m * 0.12,
        m * 0.92,
        Math.PI * 0.75,
        Math.PI * 1.9,
      ),
      i.stroke());
  }
  i.restore();
  const c = new Si(t);
  return ((c.colorSpace = Ii), c);
}
function jre(s = 256) {
  const e = document.createElement("canvas");
  e.width = e.height = s;
  const t = e.getContext("2d"),
    i = s / 2,
    n = s * 0.39,
    o = t.createRadialGradient(i, i, n * 0.9, i, i, s * 0.5);
  (o.addColorStop(0, "rgba(105,175,255,.42)"),
    o.addColorStop(1, "rgba(50,120,255,0)"),
    (t.fillStyle = o),
    t.fillRect(0, 0, s, s),
    t.save(),
    t.beginPath(),
    t.arc(i, i, n, 0, Math.PI * 2),
    t.clip());
  const a = t.createRadialGradient(i * 0.72, i * 0.65, 2, i, i, n * 1.3);
  (a.addColorStop(0, "#64b8f4"),
    a.addColorStop(0.55, "#1674c4"),
    a.addColorStop(1, "#063b82"),
    (t.fillStyle = a),
    t.fillRect(0, 0, s, s),
    (t.fillStyle = "#69a957"));
  for (const [l, c, h, d, u] of [
    [0.4, 0.36, 0.17, 0.12, -0.3],
    [0.61, 0.49, 0.13, 0.2, 0.4],
    [0.42, 0.66, 0.09, 0.16, 0.2],
    [0.7, 0.28, 0.1, 0.07, -0.2],
  ])
    (t.beginPath(),
      t.ellipse(s * l, s * c, s * h, s * d, u, 0, Math.PI * 2),
      t.fill());
  ((t.strokeStyle = "rgba(255,255,255,.72)"), (t.lineWidth = s * 0.018));
  for (let l = 0; l < 7; l++)
    (t.beginPath(),
      t.arc(
        i + (l - 3) * s * 0.035,
        i + ((l % 3) - 1) * s * 0.11,
        n * (0.48 + l * 0.035),
        -0.8,
        1.7,
      ),
      t.stroke());
  t.restore();
  const r = new Si(e);
  return ((r.colorSpace = Ii), r);
}
