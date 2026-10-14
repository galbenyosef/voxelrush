// index-Dp6GxvJu 76 — vehicle_kind
// Lines 52298-52516 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function gA(n, e, t, i) {
  let s = i(e.x, e.z, e.y + 0.3);
  for (const o of io[n] ?? [])
    for (const a of [o.min.x, o.max.x])
      for (const r of [o.min.z, o.max.z])
        (Jf.set(a, 0, r).applyQuaternion(t).add(e),
          (s = Math.max(s, i(Jf.x, Jf.z, e.y + 0.3))));
  return s;
}
const p4 = new gn(new k(-0.13, 1.37, -3), new k(0.13, 1.63, -0.6));
p4.min.multiply(ms(VEHICLE_KIND.TANK));
p4.max.multiply(ms(VEHICLE_KIND.TANK));
const yA = { ...io, [VEHICLE_KIND.TANK]: [...io[VEHICLE_KIND.TANK], p4] };
function vA(n, e, t) {
  var o;
  if (
    !Number.isFinite(e.x + e.y + e.z) ||
    e.y < 0 ||
    e.y > 1e6 ||
    Math.abs(e.x) > 2 ** 30 ||
    Math.abs(e.z) > 2 ** 30
  )
    return !0;
  if ((o = yA[n]) != null && o.length) return du(n, e, new Jt(), t, yA[n]);
  const i = n === VEHICLE_KIND.MORTAR ? 0.65 : 0.9,
    s = n === VEHICLE_KIND.MORTAR ? 1.8 : 2;
  for (let a = Math.floor(e.x - i); a < e.x + i; a++)
    for (let r = Math.floor(e.y + 1e-5); r < e.y + s; r++)
      for (let l = Math.floor(e.z - i); l < e.z + i; l++)
        if (t(a + 0.5, r + 0.5, l + 0.5)) return !0;
  return !1;
}
const p$ = {
  [VEHICLE_KIND.TANK]: [0.7, 1.33, 1.28],
  [VEHICLE_KIND.PLANE]: [0, 1.48, 0.8],
  [VEHICLE_KIND.FIGHTER_JET]: [0, 2.46, 0.4],
  [VEHICLE_KIND.HELI]: [0.65, 2.04, 0.65],
  [VEHICLE_KIND.DRONE]: [0, 0.285, 0.02],
  [VEHICLE_KIND.BOAT]: [0.55, 1.51, 1.65],
  [VEHICLE_KIND.CARRIER]: [4.25, 7.81, 1.8],
  [VEHICLE_KIND.SUBMARINE]: [-0.48, 2.61, 0.28],
  [VEHICLE_KIND.HIMARS]: [-0.65, 2.51, -1.45],
  [VEHICLE_KIND.PATRIOT]: [-0.65, 2.51, -1.55],
  [VEHICLE_KIND.BTR_TURRET]: [0.86, 1.5, 1.55],
  [VEHICLE_KIND.TURRET]: [0.64, 0.45, 0.62],
  [VEHICLE_KIND.MORTAR]: [1.02, 0.38, 0.5],
  [VEHICLE_KIND.SPACE_ROCKET]: [0, 4, -1.84],
};
function m$(n) {
  const e = new pe();
  e.name = "Radio receiver";
  const t = (o, a, r, l, c = 0, h = 0, d = 0) => {
    const u = new gi({ color: l });
    u.userData = { baseColor: l, camoEligible: !1 };
    const f = new le(new Ct(o, a, r), u);
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
  const i = ms(n),
    s = n === VEHICLE_KIND.DRONE ? 0.4 : 0.75;
  return (
    e.scale.set(s / i.x, s / i.y, s / i.z),
    e.position.set(...p$[n]),
    n === VEHICLE_KIND.SPACE_ROCKET && (e.rotation.x = -Math.PI / 2),
    e
  );
}
const bA = new Map();
function m4(n) {
  let e = bA.get(n);
  return (
    e === void 0 &&
      ((e = Math.max(0, ...(io[n] ?? []).map((t) => t.max.y))), bA.set(n, e)),
    e
  );
}
const nL = (n) => n !== VEHICLE_KIND.CARRIER && !!io[n],
  g$ = (n) => m4(n) + 3.5;
function y$(n, e) {
  const t = Math.hypot(e.x - n.x, e.z - n.z),
    i = n.y - e.y - m4(e.type);
  return nL(e.type) && t <= 5 && i >= 0.25 && i <= 9;
}
const As = (n) => n === VEHICLE_KIND.PLANE || n === VEHICLE_KIND.FIGHTER_JET,
  v$ = 1200,
  Vd = 1e3,
  b$ = 1200,
  Rg = (n) => (n === VEHICLE_KIND.FIGHTER_JET ? 600 : 400),
  wA = (n) => As(n) || n === VEHICLE_KIND.HELI || n === VEHICLE_KIND.DRONE || n === VEHICLE_KIND.SPACE_ROCKET,
  R5 = {
    [VEHICLE_KIND.PLANE]: { gunInterval: 0.085, secondaryInterval: 1.15 },
    [VEHICLE_KIND.FIGHTER_JET]: { gunInterval: 0.05, secondaryInterval: 0.6 },
  },
  Pw = { [VEHICLE_KIND.PLANE]: 100 / 3.6, [VEHICLE_KIND.FIGHTER_JET]: 150 / 3.6 },
  Ow = {
    [VEHICLE_KIND.PLANE]: {
      thrust: 14,
      drag: 0.0085,
      stall: 12,
      pitch: 1.05,
      roll: 1.9,
      rudder: 0.48,
    },
    [VEHICLE_KIND.FIGHTER_JET]: {
      thrust: 32.5,
      drag: 0.0065,
      stall: 18,
      pitch: 1.3,
      roll: 2.5,
      rudder: 0.55,
    },
  },
  Sm = new k(),
  rd = new k(),
  Em = new k(),
  MA = new Jt(),
  SA = new hi();
function w$(n, e, t, i, s = 1, o = 9.81) {
  const a = Ow[e] ?? Ow[VEHICLE_KIND.PLANE],
    r = n.angularVelocity ?? (n.angularVelocity = new k()),
    l = Math.max(1, Math.ceil(Math.min(i, 0.1) * 120)),
    c = Math.min(i, 0.1) / l;
  for (let h = 0; h < l; h++) {
    (Sm.set(0, 0, -1).applyQuaternion(n.quat),
      rd.set(0, 1, 0).applyQuaternion(n.quat),
      Em.set(1, 0, 0).applyQuaternion(n.quat));
    const d = Math.max(0, n.vel.dot(Sm)),
      u = clamp(d / a.stall, 0.12, 1);
    ((r.x += (t.pitch * a.pitch * u - r.x) * (1 - Math.exp(-7 * c))),
      (r.y += (t.yaw * a.rudder * u - r.y) * (1 - Math.exp(-5 * c))),
      (r.z += (t.roll * a.roll * u - r.z) * (1 - Math.exp(-8 * c))),
      n.grounded && ((r.z = 0), d < a.stall * 0.8 && (r.x = 0)),
      SA.set(r.x * c, r.y * c, r.z * c, "XYZ"),
      MA.setFromEuler(SA),
      n.quat.multiply(MA).normalize(),
      Sm.set(0, 0, -1).applyQuaternion(n.quat),
      rd.set(0, 1, 0).applyQuaternion(n.quat),
      Em.set(1, 0, 0).applyQuaternion(n.quat),
      n.vel.addScaledVector(Sm, n.throttle * a.thrust * (t.speedMul ?? 1) * c),
      (n.vel.y -= o * c));
    const f = Math.atan2(-n.vel.dot(rd), Math.max(1, d)),
      p = clamp(1 - Math.max(0, Math.abs(f) - 0.3) * 1.7, 0.12, 1),
      m = Math.min(34, o * (d / a.stall) ** 2 * 0.7) * p * s,
      y = clamp(o / Math.max(0.01, m), 0, 1);
    (n.vel.addScaledVector(rd, m * Math.max(y, clamp(0.35 + f * 2.4, 0, 1)) * c),
      n.vel.addScaledVector(Em, -n.vel.dot(Em) * (1 - Math.exp(-2.4 * s * c))),
      n.vel.addScaledVector(rd, -n.vel.dot(rd) * (1 - Math.exp(-1.3 * s * c))));
    const g =
      (0.06 + a.drag * n.vel.length()) * s +
      (t.brake ? (n.grounded ? 1.8 : 0.65) : 0);
    (n.vel.multiplyScalar(Math.exp(-g * c)),
      n.grounded && n.vel.y < 0 && (n.vel.y = 0),
      n.vel.clampLength(0, (Pw[e] ?? 100) * (t.speedMul ?? 1)));
  }
}
function sL(n, e, t, i) {
  (t
    .set(e * 0.68, 1.7, -4.6)
    .applyQuaternion(n.quat)
    .add(n.pos),
    i.set(0, 0, -1).applyQuaternion(n.quat));
}
function oL(n, e, t, i) {
  (t
    .set(e * 2.5, 0.95, -2)
    .applyQuaternion(n.quat)
    .add(n.pos),
    i.set(0, 0, -95).applyQuaternion(n.quat).add(n.vel));
}
const C5 = (n, e) => `${n},${e}`,
  EA = 0.34,
  M$ = `
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
  S$ = `
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
