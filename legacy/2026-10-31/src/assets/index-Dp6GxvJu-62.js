// index-Dp6GxvJu 62 — add
// Lines 47469-47720 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function fV() {
  const n = document.createElement("canvas");
  n.width = n.height = 64;
  const e = n.getContext("2d"),
    t = e.createRadialGradient(32, 32, 2, 32, 32, 32);
  (t.addColorStop(0, "rgba(255,255,220,1)"),
    t.addColorStop(0.3, "rgba(255,200,90,0.9)"),
    t.addColorStop(1, "rgba(255,120,20,0)"),
    (e.fillStyle = t),
    e.fillRect(0, 0, 64, 64),
    (e.strokeStyle = "rgba(255,220,130,0.9)"),
    (e.lineWidth = 3));
  for (let i = 0; i < 6; i++) {
    const s = (i / 6) * Math.PI * 2;
    (e.beginPath(),
      e.moveTo(32 + Math.cos(s) * 8, 32 + Math.sin(s) * 8),
      e.lineTo(32 + Math.cos(s) * 30, 32 + Math.sin(s) * 30),
      e.stroke());
  }
  return new bi(n);
}
let x5 = null;
function pV() {
  return new sn({
    uniforms: {
      uReticle: { value: 0 },
      uColor: { value: new ze(1, 0.06, 0.05) },
      uHdr: s4,
      uHdrExposure: o4,
      uHdrAdapt: Tg,
      uHdrKey: a4,
    },
    vertexShader: `
      varying vec3 vView;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vView = mv.xyz;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      uniform float uReticle;
      uniform vec3 uColor;
      uniform float uHdr;
      uniform float uHdrExposure;
      uniform sampler2D uHdrAdapt;
      uniform float uHdrKey;
      ${r4}
      ${Gk}
      varying vec3 vView;
      varying vec2 vUv;
      void main() {
        vec3 d = normalize(vView);
        // offset from the aim axis in tangent units (radians, near the centre)
        vec2 t = d.xy / max(1e-4, -d.z);
        float r = length(t);
        float px = max(fwidth(r), 1e-5);
        // 65-MOA-style ring with four short ticks, and a crisp centre dot — never under ~1.5 px
        const float RING = 0.0215;
        float ringW = max(0.0011, px * 1.5);
        float ring = 1.0 - smoothstep(ringW * 0.5 - px * 0.5, ringW * 0.5 + px * 0.6, abs(r - RING));
        vec2 a = abs(t);
        float tickW = max(0.0009, px * 1.3);
        float ticks = max(
          step(a.x, tickW * 0.5) * step(RING * 1.18, a.y) * step(a.y, RING * 1.55),
          step(a.y, tickW * 0.5) * step(RING * 1.18, a.x) * step(a.x, RING * 1.55));
        float dotR = max(0.0019, px * 1.6);
        float dotA = 1.0 - smoothstep(dotR - px * 0.6, dotR + px * 0.6, r);
        float halo = exp(-(r * r) / (dotR * dotR * 4.0)) * 0.1;
        float ret = clamp(max(max(ring * 0.95, ticks * 0.9), dotA) + halo, 0.0, 1.0) * uReticle;
        // a hairline of shade around ring and dot keeps them readable against sand and sky
        float rimRing = 1.0 - smoothstep(ringW * 0.5 + px * 0.8, ringW * 0.5 + px * 2.2, abs(r - RING));
        float rimDot = 1.0 - smoothstep(dotR + px * 0.8, dotR + px * 2.2, r);
        float rim = max(rimRing, rimDot) * (1.0 - ret) * 0.35 * uReticle;
        // the coating: a whisper of blue-green, a little stronger towards the frame
        vec2 e = abs(vUv - 0.5) * 2.0;
        float edge = smoothstep(0.6, 1.0, max(e.x, e.y));
        float coat = 0.012 + edge * 0.05;
        vec3 col = mix(vec3(0.2, 0.42, 0.45), vec3(0.06, 0.0, 0.0), rim / max(rim + coat, 1e-4));
        col = mix(col, uColor, ret);
        vec3 lin = uHdr > 0.5 ? fxInverseDisplay(col, uHdrExposure * fxAdaptGain(uHdrAdapt, uHdrKey)) : pow(col, vec3(2.2));
        gl_FragColor = vec4(lin, max(max(coat, rim) * (1.0 - ret), ret));
        #include <colorspace_fragment>
      }`,
    transparent: !0,
    depthWrite: !1,
    side: Ai,
    toneMapped: !1,
  });
}
function mV(n) {
  n.traverse((e) => {
    var i;
    const t = e.material;
    e.userData.holoGlass &&
      (i = t == null ? void 0 : t.uniforms) != null &&
      i.uReticle &&
      (t.uniforms.uReticle.value = 1);
  });
}
const gV = 1315860,
  yV = 1513239,
  ym = 1382170,
  qT = 9423359;
function qk(n, e, t = 1.6) {
  ((n.scale.y = t), (n.position.y -= (e * (t - 1)) / 2));
}
function l4(n, e, t = 0.17) {
  return Ly(vV(n, e, t));
}
function vV(n, e, t = 0.17) {
  return Qt(n, t, gV, e.x, e.y, e.z - t / 2);
}
function c4(n, e, t) {
  return Ly(bV(n, e, t));
}
function bV(n, e, t) {
  const i = new pe();
  i.add(De(0.016, 0.016, 0.06, yV));
  const s = new le(new mn(0.0035, 6, 6), new qt({ color: 16720418 }));
  return ((s.position.z = -0.032), i.add(s), i.position.set(n, e, t), i);
}
function c1(n, e, t) {
  return Ly(wV(n, e, t));
}
function wV(n, e, t) {
  const i = new pe();
  ((i.name = "flashlight-mount"),
    i.add(Qt(0.017, 0.075, 1909286)),
    i.add(Qt(0.021, 0.018, 3752522, 0, 0, -0.042)));
  const s = new le(
    new Kr(0.0165, 12),
    new qt({ color: 16774093, toneMapped: !1 }),
  );
  return (
    (s.position.z = -0.0505),
    (s.rotation.y = Math.PI),
    i.add(s),
    i.add(De(0.03, 0.012, 0.02, 2830904, 0, 0.014, 0.01)),
    i.position.set(n, e, t),
    i
  );
}
const Op = { [ITEM.GLOCK]: 0.105, [ITEM.AK47]: 0.1, [ITEM.AWP]: 0.11 },
  sd = 1777186,
  Ju = 2830390,
  vm = 855568;
function MV(n = 0) {
  const e = new pe();
  e.name = "holo-sight";
  const t = 0.094,
    i = 0.074,
    s = 0.007,
    o = 0.006,
    a = 0.078,
    r = -i / 2;
  (e.add(De(0.05, 0.012, 0.09, sd, 0, r - 0.012, 0.004)),
    e.add(De(t + 0.006, 0.008, a, sd, 0, r - 0.003, 0)),
    e.add(De(0.008, 0.01, 0.034, Ju, 0.03, r - 0.013, 0.012, "metal")),
    e.add(Qt(0.004, 0.012, Ju, -0.028, r - 0.012, -0.022)),
    n > 0 && e.add(De(0.032, n, 0.062, sd, 0, r - 0.018 - n / 2, 0.004)));
  for (const f of [-1, 1])
    (e.add(De(s, i, a, sd, f * (t / 2 - s / 2), 0, 0)),
      e.add(
        De(0.004, i * 0.62, a * 0.7, Ju, f * (t / 2 + 0.002), -0.006, 0.004),
      ));
  (e.add(De(t, o, a, sd, 0, i / 2 - o / 2, 0)),
    e.add(De(t * 0.5, 0.004, a * 0.6, Ju, 0, i / 2 + 0.002, 0.004)),
    e.add(De(t - s * 2, 0.013, a * 0.46, sd, 0, r + 0.0055, a * 0.27)));
  for (const [f, p] of [
    [-0.016, vm],
    [0, vm],
    [0.016, 3811858],
  ])
    e.add(De(0.01, 0.007, 0.004, p, f, r + 0.006, a / 2 + 0.002));
  const l = new le(new xt(0.011, 0.011, 0.012, di(12)), Bi(Ju, "metal"));
  ((l.rotation.z = Math.PI / 2),
    l.position.set(t / 2 + 0.008, r + 0.012, 0.012),
    e.add(l));
  const c = -a / 2 + 0.004;
  (e.add(De(t - s * 2, 0.004, 0.006, vm, 0, i / 2 - o - 0.002, c)),
    e.add(De(t - s * 2, 0.005, 0.006, vm, 0, r + 0.0145, c)));
  const h = i / 2 - o - 0.004,
    d = r + 0.017,
    u = new le(new pn(t - s * 2, h - d), pV());
  return (
    u.position.set(0, (h + d) / 2, c + 0.001),
    (u.userData.holoGlass = !0),
    (u.renderOrder = Gi.reticle),
    e.add(u),
    e
  );
}
function SV(n, e = 0) {
  const t = new pe();
  if (n === 5) return MV(e);
  const s = [
    { len: 0.09, r: 0.019 },
    { len: 0.13, r: 0.023 },
    { len: 0.18, r: 0.028 },
    { len: 0.24, r: 0.034 },
  ][Math.max(1, Math.min(4, n)) - 1];
  return (
    t.add(Qt(s.r, s.len, ym, 0, 0, 0)),
    t.add(Qt(s.r * 0.85, 0.006, qT, 0, 0, -s.len / 2 - 0.001)),
    t.add(Qt(s.r * 0.85, 0.006, qT, 0, 0, s.len / 2 + 0.001)),
    t.add(De(0.012, s.r * 1.6, 0.02, ym, 0, -s.r, -s.len * 0.25)),
    t.add(De(0.012, s.r * 1.6, 0.02, ym, 0, -s.r, s.len * 0.2)),
    n === 4 && t.add(Qt(s.r * 1.3, 0.02, ym, 0, 0, -s.len / 2 - 0.02)),
    t
  );
}
function h4(n, e, t, i, s = 0) {
  return Ly(EV(n, e, t, i, s));
}
function EV(n, e, t, i, s = 0) {
  const o = SV(n, s);
  return (o.position.set(e, t, i), o);
}
function qn(n, e, t, i, s = null, o = null) {
  x5 || (x5 = fV());
  const a = new le(
    new pn(0.22, 0.22),
    new qt({
      map: x5,
      transparent: !0,
      blending: cn,
      depthWrite: !1,
      side: Ai,
    }),
  );
  return (
    (a.visible = !1),
    e.add(a),
    e.name || (e.name = "vm-muzzle"),
    o && !o.name && (o.name = "vm-laser"),
    n.traverse((r) => {
      r.frustumCulled = !1;
    }),
    {
      group: n,
      muzzle: e,
      mag: t,
      slide: i,
      spin: s,
      flash: a,
      laserMount: o,
      lightMount: n.getObjectByName("flashlight-mount") ?? null,
    }
  );
}
