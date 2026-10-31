// index-Dp6GxvJu 201 — math
// Lines 110573-110900 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
w(Nd, "GUESS_STEPS", 8);
let WM = Nd;
function r2(n, e, t) {
  for (let i = 0; i < n.length; i++) {
    const s = n[i];
    s === e ? (n[i] = t) : s === t && (n[i] = e);
  }
}
const Ka = 12,
  fR = 4,
  Ub = 2400,
  Md = 1024,
  Tte = 24576;
function zf(n, e) {
  let t =
    Math.imul(((n % Md) + Md) % Md, 374761393) ^
    Math.imul(((e % Md) + Md) % Md, 668265263);
  return (
    (t = Math.imul(t ^ (t >>> 13), 1274126177)),
    ((t ^ (t >>> 16)) >>> 0) / 4294967296
  );
}
function pR(n) {
  return n * n * (3 - 2 * n);
}
function mR(n, e) {
  const t = Math.floor(n),
    i = Math.floor(e),
    s = pR(n - t),
    o = pR(e - i),
    a = zf(t, i),
    r = zf(t + 1, i),
    l = zf(t, i + 1),
    c = zf(t + 1, i + 1);
  return a + (r - a) * s + (l - a) * o + (a - r - l + c) * s * o;
}
function Ate(n, e) {
  return (
    mR(n / 8, e / 8) * 0.62 +
    mR(n / 3 + 17, e / 3 - 9) * 0.28 +
    zf(n * 7 + 3, e * 5 - 1) * 0.1
  );
}
class _te {
  constructor() {
    w(this, "mesh");
    w(this, "uniforms", {
      uTop: { value: new ze(1, 1, 1) },
      uSide: { value: new ze(0.9, 0.92, 0.95) },
      uBottom: { value: new ze(0.72, 0.76, 0.82) },
      uSkyTop: { value: new ze() },
      uSkyHorizon: { value: new ze() },
      uSunDir: { value: new k(0, 1, 0) },
      uSunColor: { value: new ze() },
      uCam: { value: new k() },
      uFade: { value: new tt(120, 260) },
    });
    w(this, "dummy", new $t());
    w(this, "keyX", NaN);
    w(this, "keyZ", NaN);
    w(this, "keyCover", -1);
    w(this, "keyRadius", -1);
    w(this, "scroll", 0);
    w(this, "radius", 18);
    w(this, "altitude", 150);
    const e = new Ct(1, 1, 1),
      t = new sn({
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
    ((this.mesh = new hs(e, t, Ub)),
      (this.mesh.count = 0),
      (this.mesh.frustumCulled = !1),
      (this.mesh.castShadow = this.mesh.receiveShadow = !1),
      (this.mesh.matrixAutoUpdate = !1),
      (this.mesh.name = "cloud-layer"));
  }
  setRange(e) {
    this.radius = Math.max(12, Math.min(34, Math.ceil(e / Ka)));
  }
  update(e, t, i, s, o) {
    const a = this.uniforms;
    (a.uTop.value.copy(o.top),
      a.uSide.value.copy(o.side),
      a.uBottom.value.copy(o.bottom),
      a.uSkyTop.value.copy(o.skyTop),
      a.uSkyHorizon.value.copy(o.skyHorizon),
      a.uSunDir.value.copy(o.sunDir),
      a.uSunColor.value.copy(o.sunColor),
      a.uCam.value.copy(e));
    const r = this.radius * Ka;
    (a.uFade.value.set(r * 0.62, r * 0.98),
      (this.scroll = (this.scroll + s * t) % (Tte * Ka)));
    const l = this.scroll,
      c = Math.floor((e.x - l) / Ka),
      h = Math.floor(e.z / Ka),
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
    const s = 0.6 - i * 0.42,
      o = this.radius,
      a = (o + 0.5) * (o + 0.5);
    let r = 0;
    for (let l = -o; l <= o && r < Ub; l++)
      for (let c = -o; c <= o && r < Ub; c++) {
        if (c * c + l * l > a) continue;
        const h = e + c,
          d = t + l,
          u = Ate(h, d);
        if (u < s) continue;
        const f = fR + (u - s > 0.18 ? 1.5 : 0);
        (this.dummy.position.set(
          h * Ka + Ka / 2,
          -f / 2 + fR / 2,
          d * Ka + Ka / 2,
        ),
          this.dummy.scale.set(Ka, f, Ka),
          this.dummy.updateMatrix(),
          this.mesh.setMatrixAt(r++, this.dummy.matrix));
      }
    ((this.mesh.count = r), (this.mesh.instanceMatrix.needsUpdate = !0));
  }
  dispose() {
    (this.mesh.geometry.dispose(), this.mesh.material.dispose());
  }
}
const gR = new ze(0.36, 0.6, 0.94),
  yR = new ze(0.66, 0.8, 0.96),
  Rte = new ze(0.012, 0.02, 0.06),
  Cte = new ze(0.05, 0.07, 0.14),
  kte = new ze(0.34, 0.37, 0.4),
  vR = new ze(1, 0.5, 0.25),
  bR = new ze(1, 1, 1),
  Lte = new ze(1.04, 0.99, 0.9),
  Ite = new ze(0.5, 0.66, 1);
function wR(n, e) {
  const t = document.createElement("canvas");
  t.width = t.height = 64;
  const i = t.getContext("2d"),
    s = i.createRadialGradient(32, 32, 4, 32, 32, 32);
  return (
    s.addColorStop(0, n),
    s.addColorStop(0.45, e),
    s.addColorStop(1, "rgba(0,0,0,0)"),
    (i.fillStyle = s),
    i.fillRect(0, 0, 64, 64),
    new bi(t)
  );
}
function XI(n) {
  let e = n >>> 0;
  return () => ((e = (e * 1664525 + 1013904223) >>> 0), e / 4294967296);
}
function Pte(n) {
  const e = document.createElement("canvas");
  e.width = e.height = n;
  const t = e.getContext("2d"),
    i = n / 2,
    s = n * 0.19,
    o = t.createRadialGradient(i, i, s * 0.9, i, i, i);
  (o.addColorStop(0, "rgba(255,244,214,0.95)"),
    o.addColorStop(0.12, "rgba(255,226,160,0.42)"),
    o.addColorStop(0.35, "rgba(255,190,110,0.13)"),
    o.addColorStop(0.7, "rgba(255,168,90,0.035)"),
    o.addColorStop(1, "rgba(255,150,70,0)"),
    (t.fillStyle = o),
    t.fillRect(0, 0, n, n));
  const a = t.createRadialGradient(i, i, 0, i, i, s);
  (a.addColorStop(0, "rgba(255,255,252,1)"),
    a.addColorStop(0.62, "rgba(255,250,226,1)"),
    a.addColorStop(0.9, "rgba(255,236,186,1)"),
    a.addColorStop(1, "rgba(255,222,158,0.86)"),
    (t.fillStyle = a),
    t.beginPath(),
    t.arc(i, i, s, 0, Math.PI * 2),
    t.fill());
  const r = new bi(e);
  return ((r.colorSpace = vi), r);
}
function Ote(n, e) {
  const t = document.createElement("canvas");
  t.width = t.height = n;
  const i = t.getContext("2d"),
    s = n / 2,
    o = n * 0.42,
    a = XI(20240617),
    r = i.createRadialGradient(s, s, o * 0.95, s, s, s);
  (r.addColorStop(0, "rgba(196,214,255,0.30)"),
    r.addColorStop(0.5, "rgba(150,180,255,0.07)"),
    r.addColorStop(1, "rgba(120,160,255,0)"),
    (i.fillStyle = r),
    i.fillRect(0, 0, n, n),
    i.save(),
    i.beginPath(),
    i.arc(s, s, o, 0, Math.PI * 2),
    i.clip(),
    (i.fillStyle = "#d9dee8"),
    i.fillRect(0, 0, n, n));
  for (let h = 0; h < (e >= 2 ? 7 : 4); h++) {
    const d = a() * Math.PI * 2,
      u = a() * o * 0.7,
      f = o * (0.18 + a() * 0.26),
      p = i.createRadialGradient(
        s + Math.cos(d) * u,
        s + Math.sin(d) * u,
        0,
        s + Math.cos(d) * u,
        s + Math.sin(d) * u,
        f,
      );
    (p.addColorStop(0, "rgba(150,158,175,0.5)"),
      p.addColorStop(1, "rgba(150,158,175,0)"),
      (i.fillStyle = p),
      i.fillRect(0, 0, n, n));
  }
  const l = e >= 2 ? 46 : e >= 1 ? 20 : 0;
  for (let h = 0; h < l; h++) {
    const d = a() * Math.PI * 2,
      u = Math.sqrt(a()) * o * 0.94,
      f = s + Math.cos(d) * u,
      p = s + Math.sin(d) * u,
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
  const c = new bi(t);
  return ((c.colorSpace = vi), c);
}
function Nte(n = 256) {
  const e = document.createElement("canvas");
  e.width = e.height = n;
  const t = e.getContext("2d"),
    i = n / 2,
    s = n * 0.39,
    o = t.createRadialGradient(i, i, s * 0.9, i, i, n * 0.5);
  (o.addColorStop(0, "rgba(105,175,255,.42)"),
    o.addColorStop(1, "rgba(50,120,255,0)"),
    (t.fillStyle = o),
    t.fillRect(0, 0, n, n),
    t.save(),
    t.beginPath(),
    t.arc(i, i, s, 0, Math.PI * 2),
    t.clip());
  const a = t.createRadialGradient(i * 0.72, i * 0.65, 2, i, i, s * 1.3);
  (a.addColorStop(0, "#64b8f4"),
    a.addColorStop(0.55, "#1674c4"),
    a.addColorStop(1, "#063b82"),
    (t.fillStyle = a),
    t.fillRect(0, 0, n, n),
    (t.fillStyle = "#69a957"));
  for (const [l, c, h, d, u] of [
    [0.4, 0.36, 0.17, 0.12, -0.3],
    [0.61, 0.49, 0.13, 0.2, 0.4],
    [0.42, 0.66, 0.09, 0.16, 0.2],
    [0.7, 0.28, 0.1, 0.07, -0.2],
  ])
    (t.beginPath(),
      t.ellipse(n * l, n * c, n * h, n * d, u, 0, Math.PI * 2),
      t.fill());
  ((t.strokeStyle = "rgba(255,255,255,.72)"), (t.lineWidth = n * 0.018));
  for (let l = 0; l < 7; l++)
    (t.beginPath(),
      t.arc(
        i + (l - 3) * n * 0.035,
        i + ((l % 3) - 1) * n * 0.11,
        s * (0.48 + l * 0.035),
        -0.8,
        1.7,
      ),
      t.stroke());
  t.restore();
  const r = new bi(e);
  return ((r.colorSpace = vi), r);
}
