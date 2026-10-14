// index-Dp6GxvJu 142 — math
// Lines 87213-87364 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function Vp(n, e, t, i, s, o, a, r) {
  let l = -1 / 0,
    c = 1 / 0;
  const h = [n.x, n.y, n.z],
    d = [e.x, e.y, e.z],
    u = [t, i, s],
    f = [o, a, r];
  for (let p = 0; p < 3; p++)
    if (Math.abs(d[p]) < 1e-9) {
      if (h[p] < u[p] || h[p] > f[p]) return null;
    } else {
      let m = (u[p] - h[p]) / d[p],
        y = (f[p] - h[p]) / d[p];
      if (
        (m > y && ([m, y] = [y, m]),
        (l = Math.max(l, m)),
        (c = Math.min(c, y)),
        l > c)
      )
        return null;
    }
  return l >= 0 ? l : c >= 0 ? 0 : null;
}
const bc = {
    1: { x: 0, z: 0, h: 1.5, color: 16764749, glow: "#ffd76a", label: "1" },
    2: {
      x: -1.85,
      z: 0.35,
      h: 1,
      color: 13227750,
      glow: "#dfe9f5",
      label: "2",
    },
    3: {
      x: 1.85,
      z: 0.35,
      h: 0.66,
      color: 14716754,
      glow: "#f0a56b",
      label: "3",
    },
  },
  vd = { 3: 0.9, 2: 1.55, 1: 2.25 },
  aZ = new Set([E.AK47, E.AWP, E.SHOTGUN, E.GRENADE_LAUNCHER]),
  vb = (n) => {
    const e = Math.max(0, Math.min(1, n));
    return e * e * (3 - 2 * e);
  },
  rZ = (n) => {
    const t = Math.max(0, Math.min(1, n)) - 1;
    return 1 + (1.6 + 1) * t * t * t + 1.6 * t * t;
  };
function lZ(n, e) {
  const t = document.createElement("canvas");
  t.width = t.height = 256;
  const i = t.getContext("2d"),
    s = i.createLinearGradient(0, 0, 0, 256);
  (s.addColorStop(0, "#1d242e"),
    s.addColorStop(1, "#10151b"),
    (i.fillStyle = s),
    i.fillRect(0, 0, 256, 256),
    (i.strokeStyle = e + "55"),
    (i.lineWidth = 6),
    i.strokeRect(14, 14, 228, 228),
    (i.fillStyle = e + "22"));
  for (let a = 0; a < 6; a++)
    (i.beginPath(),
      i.moveTo(20 + a * 40, 236),
      i.lineTo(40 + a * 40, 216),
      i.lineTo(60 + a * 40, 236),
      i.fill());
  ((i.font = '200px "Russo One", Impact, system-ui, sans-serif'),
    (i.textAlign = "center"),
    (i.textBaseline = "middle"),
    (i.shadowColor = e),
    (i.shadowBlur = 26),
    (i.fillStyle = e),
    i.fillText(n, 128, 128),
    (i.shadowBlur = 0),
    (i.fillStyle = "#ffffffcc"),
    (i.font = '200px "Russo One", Impact, system-ui, sans-serif'),
    (i.globalAlpha = 0.35),
    i.fillText(n, 124, 122));
  const o = new bi(t);
  return ((o.colorSpace = vi), (o.anisotropy = 4), o);
}
function Km(n, e = 256) {
  const t = document.createElement("canvas");
  t.width = t.height = e;
  const i = t.getContext("2d"),
    s = i.createRadialGradient(e / 2, e / 2, 0, e / 2, e / 2, e / 2);
  for (const [a, r] of n) s.addColorStop(a, r);
  ((i.fillStyle = s), i.fillRect(0, 0, e, e));
  const o = new bi(t);
  return ((o.colorSpace = vi), o);
}
function cZ(n) {
  const e = document.createElement("canvas");
  e.width = e.height = 1024;
  const t = e.getContext("2d"),
    i = t.createRadialGradient(512, 512, 30, 512, 512, 512);
  (i.addColorStop(0, "#2a323d"),
    i.addColorStop(0.45, "#151b22"),
    i.addColorStop(1, "#07090c"),
    (t.fillStyle = i),
    t.fillRect(0, 0, 1024, 1024),
    (t.strokeStyle = "#ffffff10"),
    (t.lineWidth = 2));
  const s = 26,
    o = s * Math.sqrt(3);
  for (let l = 0; l < 26; l++)
    for (let c = 0; c < 26; c++) {
      const h = c * s * 1.5 + 10,
        d = l * o + (c % 2 ? o / 2 : 0) + 10;
      t.beginPath();
      for (let u = 0; u < 6; u++) {
        const f = (Math.PI / 3) * u;
        t.lineTo(h + Math.cos(f) * s * 0.92, d + Math.sin(f) * s * 0.92);
      }
      (t.closePath(), t.stroke());
    }
  const a = t.createRadialGradient(512, 512, 200, 512, 512, 512);
  (a.addColorStop(0, "#00000000"),
    a.addColorStop(1, "#07090cff"),
    (t.fillStyle = a),
    t.fillRect(0, 0, 1024, 1024),
    (t.strokeStyle = n),
    (t.globalAlpha = 0.55),
    (t.lineWidth = 5),
    t.beginPath(),
    t.arc(512, 512, 330, 0, Math.PI * 2),
    t.stroke(),
    (t.globalAlpha = 0.18),
    (t.lineWidth = 22),
    t.stroke());
  const r = new bi(e);
  return ((r.colorSpace = vi), (r.anisotropy = 8), r);
}
const hZ = `varying vec3 vPos; varying vec3 vN; varying vec3 vView;
void main(){ vPos=position; vec4 mv=modelViewMatrix*vec4(position,1.0); vView=normalize(-mv.xyz); vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*mv; }`,
  dZ = `uniform vec3 uColor; uniform float uOpacity; uniform float uHeight; varying vec3 vPos; varying vec3 vN; varying vec3 vView;
void main(){ float along=clamp(1.0-(vPos.y/uHeight+0.5),0.0,1.0); float rim=pow(abs(dot(vN,vView)),1.6);
 float a=uOpacity*rim*smoothstep(0.0,0.25,along)*(1.0-along*0.55); gl_FragColor=vec4(uColor*a,a); }`,
  uZ = `uniform vec3 uColor; uniform vec3 uColor2; uniform float uTime; varying vec2 vUv;
void main(){ float y=vUv.y; vec3 base=mix(vec3(0.02,0.025,0.035),uColor*0.42,smoothstep(0.0,0.9,y)*0.8);
 float bands=smoothstep(0.92,1.0,sin((vUv.x*36.0)+uTime*0.6)*0.5+0.5)*0.10;
 float scan=0.5+0.5*sin(y*420.0); float sweep=exp(-pow((vUv.x-fract(uTime*0.07))*7.0,2.0))*0.35;
 float hex=smoothstep(0.85,1.0,sin(vUv.x*180.0)*sin(y*90.0+uTime*0.2));
 vec3 col=base+uColor*(bands+sweep*smoothstep(0.1,0.9,y))+uColor2*hex*0.05; col*=0.82+0.18*scan;
 col*=smoothstep(0.0,0.18,y)*smoothstep(1.0,0.72,y)*1.0+0.12; gl_FragColor=vec4(col,1.0); }`,
  fZ =
    "varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }";
