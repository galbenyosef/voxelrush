// index-BeUlFSPp 97 — math
// Lines 59681-59919 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function FR(s, e, t, i) {
  let n = i(e.x, e.z, e.y + 0.3);
  for (const o of lo[s] ?? [])
    for (const a of [o.min.x, o.max.x])
      for (const r of [o.min.z, o.max.z])
        (N1.set(a, 0, r).applyQuaternion(t).add(e),
          (n = Math.max(n, i(N1.x, N1.z, e.y + 0.3))));
  return n;
}
const cT = new zs(new k(-0.13, 1.37, -3), new k(0.13, 1.63, -0.6));
cT.min.multiply(En(L.TANK));
cT.max.multiply(En(L.TANK));
const UR = { ...lo, [L.TANK]: [...lo[L.TANK], cT] };
function GR(s, e, t) {
  if (
    !Number.isFinite(e.x + e.y + e.z) ||
    e.y < 0 ||
    e.y > 1e6 ||
    Math.abs(e.x) > 2 ** 30 ||
    Math.abs(e.z) > 2 ** 30
  )
    return !0;
  if (UR[s]?.length) return zf(s, e, new hi(), t, UR[s]);
  const i = s === L.MORTAR ? 0.65 : 0.9,
    n = s === L.MORTAR ? 1.8 : 2;
  for (let o = Math.floor(e.x - i); o < e.x + i; o++)
    for (let a = Math.floor(e.y + 1e-5); a < e.y + n; a++)
      for (let r = Math.floor(e.z - i); r < e.z + i; r++)
        if (t(o + 0.5, a + 0.5, r + 0.5)) return !0;
  return !1;
}
const oZ = {
  [L.TANK]: [0.7, 1.33, 1.28],
  [L.PLANE]: [0, 1.48, 0.8],
  [L.FIGHTER_JET]: [0, 2.46, 0.4],
  [L.HELI]: [0.65, 2.04, 0.65],
  [L.DRONE]: [0, 0.285, 0.02],
  [L.BOAT]: [0.55, 1.51, 1.65],
  [L.CARRIER]: [4.25, 7.81, 1.8],
  [L.SUBMARINE]: [-0.48, 2.61, 0.28],
  [L.HIMARS]: [-0.65, 2.51, -1.45],
  [L.PATRIOT]: [-0.65, 2.51, -1.55],
  [L.BTR_TURRET]: [0.86, 1.5, 1.55],
  [L.TURRET]: [0.64, 0.45, 0.62],
  [L.MORTAR]: [1.02, 0.38, 0.5],
  [L.SPACE_ROCKET]: [0, 4, -1.84],
};
function aZ(s) {
  const e = new re();
  e.name = "Radio receiver";
  const t = (o, a, r, l, c = 0, h = 0, d = 0) => {
    const u = new Pi({ color: l });
    u.userData = { baseColor: l, camoEligible: !1 };
    const f = new Q(new kt(o, a, r), u);
    (f.position.set(c, h, d),
      (f.castShadow = !0),
      (f.receiveShadow = !0),
      e.add(f));
  };
  (t(0.24, 0.025, 0.2, 2371377, 0, 0.0125),
    t(0.22, 0.12, 0.18, 5400923, 0, 0.085),
    t(0.235, 0.016, 0.195, 8426371, 0, 0.153),
    t(0.12, 0.048, 0.006, 1388336, -0.025, 0.095, -0.093),
    t(0.068, 0.009, 0.007, 10675132, -0.025, 0.098, -0.097),
    t(0.015, 0.015, 0.008, 15253099, 0.074, 0.093, -0.096));
  for (let o = 0; o < 3; o++)
    t(0.006, 0.008, 0.09, 2439988, 0.113, 0.065 + o * 0.022, 0.015);
  (t(0.028, 0.04, 0.028, 2371377, 0.078, 0.18, 0.065),
    t(0.012, 0.26, 0.012, 8096387, 0.078, 0.32, 0.065));
  const i = En(s),
    n = s === L.DRONE ? 0.4 : 0.75;
  return (
    e.scale.set(n / i.x, n / i.y, n / i.z),
    e.position.set(...oZ[s]),
    s === L.SPACE_ROCKET && (e.rotation.x = -Math.PI / 2),
    e
  );
}
const WR = new Map();
function hT(s) {
  let e = WR.get(s);
  return (
    e === void 0 &&
      ((e = Math.max(0, ...(lo[s] ?? []).map((t) => t.max.y))), WR.set(s, e)),
    e
  );
}
const n7 = (s) => s !== L.CARRIER && !!lo[s],
  rZ = (s) => hT(s) + 3.5;
function lZ(s, e) {
  const t = Math.hypot(e.x - s.x, e.z - s.z),
    i = s.y - e.y - hT(e.type);
  return n7(e.type) && t <= 5 && i >= 0.25 && i <= 9;
}
const on = (s) => s === L.PLANE || s === L.FIGHTER_JET,
  cZ = 1200,
  o7 = 1e3,
  hZ = 1200,
  Iv = (s) =>
    s === L.FIGHTER_JET
      ? hs.gunRange || 600
      : s === L.TANK && hs.tankGun
        ? hs.tankGun
        : 400,
  Wb = (s) => on(s) || s === L.HELI || s === L.DRONE || s === L.SPACE_ROCKET,
  $b = {
    [L.PLANE]: { gunInterval: 0.085, secondaryInterval: 1.15 },
    [L.FIGHTER_JET]: { gunInterval: 0.05, secondaryInterval: 0.6 },
  },
  _y = { [L.PLANE]: 100 / 3.6, [L.FIGHTER_JET]: 150 / 3.6 },
  u4 = {
    [L.PLANE]: {
      thrust: 14,
      drag: 0.0085,
      stall: 12,
      pitch: 1.05,
      roll: 1.9,
      rudder: 0.48,
    },
    [L.FIGHTER_JET]: {
      thrust: 32.5,
      drag: 0.0065,
      stall: 18,
      pitch: 1.3,
      roll: 2.5,
      rudder: 0.55,
    },
  },
  hs = {
    speed: 1,
    honest: !1,
    shown: 1,
    ground: 1,
    tankGun: 0,
    shellSpeed: 0,
    gunRange: 0,
    sensorRange: 0,
  },
  f4 = (s, e) => (on(s) ? (hs.honest ? e * hs.shown : e / hs.speed) : e),
  D1 = () => hs.sensorRange || o7,
  dg = new k(),
  mu = new k(),
  ug = new k(),
  $R = new hi(),
  VR = new pi();
function dZ(s, e, t, i, n = 1, o = 9.81) {
  const a = u4[e] ?? u4[L.PLANE],
    r =
      t.stallMul && t.stallMul !== 1
        ? { ...a, stall: a.stall * t.stallMul }
        : a,
    l = (s.angularVelocity ??= new k()),
    c = Math.max(1, Math.ceil(Math.min(i, 0.1) * 120)),
    h = Math.min(i, 0.1) / c;
  for (let d = 0; d < c; d++) {
    (dg.set(0, 0, -1).applyQuaternion(s.quat),
      mu.set(0, 1, 0).applyQuaternion(s.quat),
      ug.set(1, 0, 0).applyQuaternion(s.quat));
    const u = Math.max(0, s.vel.dot(dg)),
      f = Oe(u / r.stall, 0.12, 1);
    ((l.x += (t.pitch * r.pitch * f - l.x) * (1 - Math.exp(-7 * h))),
      (l.y += (t.yaw * r.rudder * f - l.y) * (1 - Math.exp(-5 * h))),
      (l.z += (t.roll * r.roll * f - l.z) * (1 - Math.exp(-8 * h))),
      s.grounded && ((l.z = 0), u < r.stall * 0.8 && (l.x = 0)),
      VR.set(l.x * h, l.y * h, l.z * h, "XYZ"),
      $R.setFromEuler(VR),
      s.quat.multiply($R).normalize(),
      dg.set(0, 0, -1).applyQuaternion(s.quat),
      mu.set(0, 1, 0).applyQuaternion(s.quat),
      ug.set(1, 0, 0).applyQuaternion(s.quat),
      s.vel.addScaledVector(dg, s.throttle * r.thrust * (t.speedMul ?? 1) * h),
      (s.vel.y -= o * h));
    const p = Math.atan2(-s.vel.dot(mu), Math.max(1, u)),
      m = Oe(1 - Math.max(0, Math.abs(p) - 0.3) * 1.7, 0.12, 1),
      g = Math.min(34, o * (u / r.stall) ** 2 * 0.7) * m * n,
      y = Oe(o / Math.max(0.01, g), 0, 1);
    (s.vel.addScaledVector(mu, g * Math.max(y, Oe(0.35 + p * 2.4, 0, 1)) * h),
      s.vel.addScaledVector(ug, -s.vel.dot(ug) * (1 - Math.exp(-2.4 * n * h))),
      s.vel.addScaledVector(mu, -s.vel.dot(mu) * (1 - Math.exp(-1.3 * n * h))));
    const b =
      (0.06 + r.drag * s.vel.length()) * n +
      (t.brake ? (s.grounded ? 1.8 : 0.65) : 0);
    (s.vel.multiplyScalar(Math.exp(-b * h)),
      s.grounded && s.vel.y < 0 && (s.vel.y = 0),
      s.vel.clampLength(0, (_y[e] ?? 100) * (t.speedMul ?? 1)));
  }
}
function dT(s, e, t, i) {
  (t
    .set(e * 0.68, 1.7, -4.6)
    .applyQuaternion(s.quat)
    .add(s.pos),
    i.set(0, 0, -1).applyQuaternion(s.quat));
}
function a7(s, e, t, i) {
  (t
    .set(e * 2.5, 0.95, -2)
    .applyQuaternion(s.quat)
    .add(s.pos),
    i.set(0, 0, -95).applyQuaternion(s.quat).add(s.vel));
}
const Vb = (s, e) => `${s},${e}`,
  qR = 0.34,
  uZ = `
uniform float uSize;
attribute float aLevel;
varying vec2 vUv;
varying float vFade;
varying float vLevel;
void main() {
  vec4 c = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
  float d = max(0.1, -c.z);
  // pull the halo a little toward the eye so the lens dome does not cut it in half
  c.xyz += normalize(-c.xyz) * min(0.35, d * 0.5);
  // ground-level lights (runway edges, helipads) are small and dim; masts and rooftops full
  float size = uSize * mix(0.68, 1.0, aLevel) * (1.0 + d * mix(0.012, 0.018, aLevel));
  vLevel = aLevel;
  c.xy += (uv - 0.5) * vec2(size * 2.6, size);
  vUv = uv;
  vFade = 1.0 - smoothstep(320.0, 420.0, d);
  gl_Position = projectionMatrix * c;
}`,
  fZ = `
uniform float uFlash;
uniform float uGain;
varying vec2 vUv;
varying float vFade;
varying float vLevel;
void main() {
  // the quad is 2.6:1 so the core stays round while the streak runs sideways
  vec2 p = (vUv - 0.5) * vec2(2.6, 1.0) * 2.0;
  float r = length(p);
  float core = exp(-r * r * 5.5);
  float glow = exp(-r * 2.4) * 0.55;
  float streak = exp(-abs(p.y) * 26.0) * max(0.0, 1.0 - abs(p.x) / 2.6) * 0.45;
  float a = (core + glow + streak * vLevel) * uFlash * uGain * vFade * mix(0.62, 1.0, vLevel);
  vec3 col = mix(vec3(1.0, 0.07, 0.03), vec3(1.0, 0.62, 0.5), core * 0.55);
  gl_FragColor = vec4(col * a, a);
}`;
