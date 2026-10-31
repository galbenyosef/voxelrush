// index-BeUlFSPp 79 — add
// Lines 54628-54950 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function oX() {
  const s = document.createElement("canvas");
  s.width = s.height = 64;
  const e = s.getContext("2d"),
    t = e.createRadialGradient(32, 32, 2, 32, 32, 32);
  (t.addColorStop(0, "rgba(255,255,220,1)"),
    t.addColorStop(0.3, "rgba(255,200,90,0.9)"),
    t.addColorStop(1, "rgba(255,120,20,0)"),
    (e.fillStyle = t),
    e.fillRect(0, 0, 64, 64),
    (e.strokeStyle = "rgba(255,220,130,0.9)"),
    (e.lineWidth = 3));
  for (let i = 0; i < 6; i++) {
    const n = (i / 6) * Math.PI * 2;
    (e.beginPath(),
      e.moveTo(32 + Math.cos(n) * 8, 32 + Math.sin(n) * 8),
      e.lineTo(32 + Math.cos(n) * 30, 32 + Math.sin(n) * 30),
      e.stroke());
  }
  return new Si(s);
}
let Bb = null;
function aX() {
  return new Gi({
    uniforms: {
      uReticle: { value: 0 },
      uColor: { value: new Ge(1, 0.06, 0.05) },
      uHdr: ZA,
      uHdrExposure: QA,
      uHdrAdapt: _v,
      uHdrKey: JA,
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
      ${eT}
      ${VO}
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
    side: Mi,
    toneMapped: !1,
  });
}
function rX(s) {
  s.traverse((e) => {
    const t = e.material;
    e.userData.holoGlass &&
      t?.uniforms?.uReticle &&
      (t.uniforms.uReticle.value = 1);
  });
}
const lX = 1315860,
  cX = 1513239,
  og = 1382170,
  gR = 9423359;
function jO(s, e, t = 1.6) {
  ((s.scale.y = t), (s.position.y -= (e * (t - 1)) / 2));
}
function Zf(s, e, t = 0.17) {
  return an(hX(s, e, t));
}
function hX(s, e, t = 0.17) {
  return Gt(s, t, lX, e.x, e.y, e.z - t / 2);
}
function Qf(s, e, t) {
  return an(dX(s, e, t));
}
function dX(s, e, t) {
  const i = new re();
  i.add(me(0.016, 0.016, 0.06, cX));
  const n = new Q(new ws(0.0035, 6, 6), new Zt({ color: 16720418 }));
  return ((n.position.z = -0.032), i.add(n), i.position.set(s, e, t), i);
}
function J0(s, e, t) {
  return an(uX(s, e, t));
}
function uX(s, e, t) {
  const i = new re();
  ((i.name = "flashlight-mount"),
    i.add(Gt(0.017, 0.075, 1909286)),
    i.add(Gt(0.021, 0.018, 3752522, 0, 0, -0.042)));
  const n = new Q(
    new Bl(0.0165, 12),
    new Zt({ color: 16774093, toneMapped: !1 }),
  );
  return (
    (n.position.z = -0.0505),
    (n.rotation.y = Math.PI),
    i.add(n),
    i.add(me(0.03, 0.012, 0.02, 2830904, 0, 0.014, 0.01)),
    i.position.set(s, e, t),
    i
  );
}
const K0 = {
    [w.GLOCK]: 0.105,
    [w.AK47]: 0.1,
    [w.AWP]: 0.11,
    [w.DEAGLE]: 0.1,
    [w.M4A1]: 0.113,
    [w.VECTOR]: 0.105,
  },
  fu = 1777186,
  _p = 2830390,
  ag = 855568;
function fX(s = 0) {
  const e = new re();
  e.name = "holo-sight";
  const t = 0.094,
    i = 0.074,
    n = 0.007,
    o = 0.006,
    a = 0.078,
    r = -i / 2;
  (e.add(me(0.05, 0.012, 0.09, fu, 0, r - 0.012, 0.004)),
    e.add(me(t + 0.006, 0.008, a, fu, 0, r - 0.003, 0)),
    e.add(me(0.008, 0.01, 0.034, _p, 0.03, r - 0.013, 0.012, "metal")),
    e.add(Gt(0.004, 0.012, _p, -0.028, r - 0.012, -0.022)),
    s > 0 && e.add(me(0.032, s, 0.062, fu, 0, r - 0.018 - s / 2, 0.004)));
  for (const f of [-1, 1])
    (e.add(me(n, i, a, fu, f * (t / 2 - n / 2), 0, 0)),
      e.add(
        me(0.004, i * 0.62, a * 0.7, _p, f * (t / 2 + 0.002), -0.006, 0.004),
      ));
  (e.add(me(t, o, a, fu, 0, i / 2 - o / 2, 0)),
    e.add(me(t * 0.5, 0.004, a * 0.6, _p, 0, i / 2 + 0.002, 0.004)),
    e.add(me(t - n * 2, 0.013, a * 0.46, fu, 0, r + 0.0055, a * 0.27)));
  for (const [f, p] of [
    [-0.016, ag],
    [0, ag],
    [0.016, 3811858],
  ])
    e.add(me(0.01, 0.007, 0.004, p, f, r + 0.006, a / 2 + 0.002));
  const l = new Q(new Tt(0.011, 0.011, 0.012, ci(12)), Ti(_p, "metal"));
  ((l.rotation.z = Math.PI / 2),
    l.position.set(t / 2 + 0.008, r + 0.012, 0.012),
    e.add(l));
  const c = -a / 2 + 0.004;
  (e.add(me(t - n * 2, 0.004, 0.006, ag, 0, i / 2 - o - 0.002, c)),
    e.add(me(t - n * 2, 0.005, 0.006, ag, 0, r + 0.0145, c)));
  const h = i / 2 - o - 0.004,
    d = r + 0.017,
    u = new Q(new ms(t - n * 2, h - d), aX());
  return (
    u.position.set(0, (h + d) / 2, c + 0.001),
    (u.userData.holoGlass = !0),
    (u.renderOrder = zi.reticle),
    e.add(u),
    e
  );
}
function pX(s, e = 0) {
  const t = new re();
  if (s === 5) return fX(e);
  const n = [
    { len: 0.09, r: 0.019 },
    { len: 0.13, r: 0.023 },
    { len: 0.18, r: 0.028 },
    { len: 0.24, r: 0.034 },
  ][Math.max(1, Math.min(4, s)) - 1];
  return (
    t.add(Gt(n.r, n.len, og, 0, 0, 0)),
    t.add(Gt(n.r * 0.85, 0.006, gR, 0, 0, -n.len / 2 - 0.001)),
    t.add(Gt(n.r * 0.85, 0.006, gR, 0, 0, n.len / 2 + 0.001)),
    t.add(me(0.012, n.r * 1.6, 0.02, og, 0, -n.r, -n.len * 0.25)),
    t.add(me(0.012, n.r * 1.6, 0.02, og, 0, -n.r, n.len * 0.2)),
    s === 4 && t.add(Gt(n.r * 1.3, 0.02, og, 0, 0, -n.len / 2 - 0.02)),
    t
  );
}
function Jf(s, e, t, i, n = 0) {
  return an(mX(s, e, t, i, n));
}
function mX(s, e, t, i, n = 0) {
  const o = pX(s, n);
  return (o.position.set(e, t, i), o);
}
function Hs(s, e, t, i, n = null, o = null) {
  Bb || (Bb = oX());
  const a = new Q(
    new ms(0.22, 0.22),
    new Zt({
      map: Bb,
      transparent: !0,
      blending: rs,
      depthWrite: !1,
      side: Mi,
    }),
  );
  return (
    (a.visible = !1),
    e.add(a),
    e.name || (e.name = "vm-muzzle"),
    o && !o.name && (o.name = "vm-laser"),
    s.traverse((r) => {
      r.frustumCulled = !1;
    }),
    {
      group: s,
      muzzle: e,
      mag: t,
      slide: i,
      spin: n,
      flash: a,
      laserMount: o,
      lightMount: s.getObjectByName("flashlight-mount") ?? null,
    }
  );
}
const An = 2830133,
  rn = 1777186,
  tT = 9344927,
  Js = 4870232,
  ld = 1513499,
  rg = 9402968,
  u0 = 7298627,
  ca = 395016,
  XO = 13081421,
  Rp = 2435117,
  fh = 4212044;
function a4(s, e, t, i, n = "gloss") {
  const o = new il();
  (s.forEach(([l, c], h) => (h ? o.lineTo(l, c) : o.moveTo(l, c))),
    o.closePath());
  const a = wt(1),
    r = new sl(o, {
      depth: t - e - (a ? 0.004 : 0),
      bevelEnabled: a,
      bevelThickness: 0.002,
      bevelSize: 0.0012,
      bevelSegments: 1,
    });
  return (r.translate(0, 0, e + (a ? 0.002 : 0)), new Q(r, Ti(i, n)));
}
function Em(s, e, t, i, n = "matte", o = 0) {
  const a = new il();
  (s.forEach(([c, h], d) => (d ? a.lineTo(c, h) : a.moveTo(c, h))),
    a.closePath());
  for (const c of e) {
    const h = new MS();
    (c.forEach(([d, u], f) => (f ? h.lineTo(d, u) : h.moveTo(d, u))),
      h.closePath(),
      a.holes.push(h));
  }
  const r = wt(1),
    l = new sl(a, {
      depth: t - (r ? 0.006 : 0),
      bevelEnabled: r,
      bevelThickness: 0.003,
      bevelSize: 0.0018,
      bevelSegments: 1,
    });
  return (
    l.rotateY(-Math.PI / 2),
    l.translate(t / 2 - (r ? 0.003 : 0) + o, 0, 0),
    new Q(l, Ti(i, n))
  );
}
function r4(s, e, t = "metal", i = 0, n = 0) {
  const o = new Yf(
    s.map(([r, l]) => new ct(r, -l)),
    ci(14),
  );
  o.rotateX(-Math.PI / 2);
  const a = new Q(o, Ti(e, t));
  return (a.position.set(i, n, 0), a);
}
function wl(s, e, t, i, n, o, a, r = 0, l = 0, c = 0, h = "matte") {
  const d = me(s, e, t, i, n, o, a, h);
  return (d.rotation.set(r, l, c), d);
}
function Na(s, e, t, i, n, o, a = "metal") {
  const r = new Q(new Tt(s, s, e, ci(10)), Ti(t, a));
  return ((r.rotation.z = Math.PI / 2), r.position.set(i, n, o), r);
}
