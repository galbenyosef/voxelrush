// index-Dp6GxvJu 85 — math
// Lines 55045-55374 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function Eq(n, e, t, i, s) {
  const o = t.x - e.x,
    a = t.z - e.z,
    r = Math.hypot(o, a);
  return (
    e.y >= n.cruiseY - 2 && (n.cruiseReached = !0),
    i > 12 && e.y > t.y + 3 && r < s && (n.terminalDive = !0),
    n.terminalDive
      ? { x: o, y: t.y - e.y, z: a }
      : n.cruiseReached
        ? { x: o, y: (n.cruiseY - e.y) * 2, z: a }
        : { x: o * 0.12, y: Math.max(12, n.cruiseY - e.y), z: a * 0.12 }
  );
}
class xq {
  constructor() {
    w(this, "key", "");
    w(this, "seconds", 0);
  }
  update(e, t) {
    return (
      (!e || e !== this.key) && (this.seconds = 0),
      (this.key = e),
      e &&
        (this.seconds = Math.min(
          S0,
          this.seconds + Math.min(0.1, Math.max(0, t)),
        )),
      this.seconds >= S0
    );
  }
}
function Tq(n, e, t) {
  var h;
  const i = e.group,
    s = e.motionParts ?? (e.motionParts = []),
    o = (d, u) => ((d.name = u), (d.userData.motion = u), s.push(d), d);
  (i.traverse((d) => {
    var f;
    const u = d;
    ((f = u.geometry) == null ? void 0 : f.type) === "CylinderGeometry" &&
      Math.abs(d.rotation.z) > 1.5 &&
      d.position.y < 0.65 &&
      (o(d, "wheel"),
      (d.userData.radius = u.geometry.parameters.radiusTop),
      (d.userData.bindQuaternion = d.quaternion.toArray()));
  }),
    n === VEHICLE_KIND.HELI && e.props.length > 1 && (e.props[1].userData.axis = "x"));
  for (const d of e.props) {
    if (
      n === VEHICLE_KIND.CARRIER ||
      n === VEHICLE_KIND.TURRET ||
      ((h = d.userData).axis ??
        (h.axis = n === VEHICLE_KIND.PLANE || n === VEHICLE_KIND.SUBMARINE ? "z" : "y"),
      !yt(1) || n === VEHICLE_KIND.SUBMARINE)
    )
      continue;
    const u =
        n === VEHICLE_KIND.HELI
          ? d.userData.axis === "x"
            ? 0.65
            : 3.1
          : n === VEHICLE_KIND.PLANE
            ? 1
            : 0.23,
      f = new le(
        new sh(u * 0.2, u, 40),
        new qt({
          color: 10925237,
          transparent: !0,
          opacity: 0,
          side: Ai,
          depthWrite: !1,
        }),
      );
    ((f.name = "rotor-blur"),
      d.userData.axis === "y"
        ? (f.rotation.x = -Math.PI / 2)
        : d.userData.axis === "x" && (f.rotation.y = Math.PI / 2),
      d.add(f),
      (d.userData.blur = f));
  }
  if (!yt(1)) return;
  const a = 1710618,
    r = 3950898,
    l = 7371094,
    c = (d, u, f, p, m) => {
      d.add(t(0.035, 0.035, m, r, u, f, p));
      for (const y of [-m / 2, m / 2])
        d.add(t(0.035, 0.22, 0.035, r, u, f - 0.1, p + y));
    };
  if (n !== VEHICLE_KIND.TANK) {
    if (n === VEHICLE_KIND.PLANE) {
      for (const f of [...i.children])
        f instanceof le &&
          f.geometry instanceof Ct &&
          f.geometry.parameters.width > 2 &&
          f.geometry.parameters.height < 0.1 &&
          f.position.z > 0.15 &&
          (i.remove(f), f.geometry.dispose(), f.material.dispose());
      for (const f of [-1, 1]) {
        const p = o(new pe(), f < 0 ? "aileron-left" : "aileron-right");
        (p.position.set(f * 2.45, 1.18, 0.18),
          p.add(t(1.55, 0.065, 0.27, l, 0, 0, 0.135)),
          i.add(p),
          i.add(t(0.028, 0.016, 1.02, a, f * 1.55, 1.338, -0.4)),
          i.add(
            t(
              0.16,
              0.035,
              0.16,
              f < 0 ? 12796981 : 7714710,
              f * 3.43,
              1.35,
              -0.3,
            ),
          ));
      }
      const d = o(new pe(), "elevator");
      (d.position.set(0, 1.35, 2.17),
        d.add(t(2.4, 0.07, 0.3, l, 0, 0, 0.15)),
        i.add(d));
      const u = o(new pe(), "rudder");
      (u.position.set(0, 1.75, 2.27),
        u.add(t(0.1, 0.85, 0.22, l, 0, 0, 0.11)),
        i.add(u));
      for (const f of [-1, 1]) {
        const p = t(0.035, 0.32, 0.6, 2437946, f * 0.354, 1.62, -0.4);
        (i.add(p), (e.fpvHide ?? (e.fpvHide = [])).push(p));
      }
    } else if (n === VEHICLE_KIND.CARRIER) {
      for (const f of [-1, 1])
        for (let p = -16; p <= 16; p += 4) c(i, f * 5.7, 3.65, p, 3.5);
      {
        for (let f = -15; f < 8; f += 2)
          i.add(t(0.09, 0.025, 1.35, 14211288, 1, 3.418, f));
        for (let f = 1.6; f < 5.8; f += 0.75)
          i.add(t(0.04, 0.65, 0.58, 2437946, 5.915, 6.65, f));
      }
    } else if (n === VEHICLE_KIND.SUBMARINE) {
      for (let d = -3.8; d < 4; d += 0.65)
        for (const u of [-1, 1])
          i.add(t(0.025, 0.055, 0.28, a, u * 2.2, 0.64, d));
      (c(i, -0.7, 1.55, -1.2, 1.4), c(i, 0.7, 1.55, -1.2, 1.4));
    } else if (n === VEHICLE_KIND.DRONE) {
      for (const d of [-1, 1])
        i.add(t(0.025, 0.02, 0.28, 12634834, d * 0.1, 0.293, 0));
      i.add(t(0.05, 0.06, 0.06, 2437946, 0, 0.2, -0.253));
    } else if (n === VEHICLE_KIND.SPACE_ROCKET) {
      for (let d = 0; d < 12; d++) {
        const u = (d * Math.PI) / 6,
          f = t(
            0.045,
            4.8,
            0.045,
            12634834,
            Math.sin(u) * 1.72,
            4.1,
            Math.cos(u) * 1.72,
          );
        i.add(f);
      }
      for (const d of [-1, 1]) i.add(t(0.12, 0.5, 0.2, a, d * 1.68, 7, 0.12));
    }
  }
  i.traverse((d) => {
    d instanceof le && (d.receiveShadow = !0);
  });
}
function Aq(n, e, t, i, s, o) {
  for (const a of n) {
    const r = a.userData.motion;
    if (r === "wheel-set") {
      a.userData.phase += t * e;
      const l =
        Math.abs(t) > 0.3 ? fi.clamp(o / (Math.abs(t) + 0.5), -0.4, 0.4) : 0;
      ((a.userData.steer += (l - a.userData.steer) * (1 - Math.exp(-8 * e))),
        bL(a));
    } else if (r === "wheel")
      ((a.userData.phase =
        (a.userData.phase ?? 0) + (t * e) / Math.max(0.1, a.userData.radius)),
        a.quaternion.fromArray(a.userData.bindQuaternion),
        a.position.z < -1 &&
          Math.abs(t) > 0.3 &&
          a.rotateOnWorldAxis(
            new k(0, 1, 0),
            fi.clamp(o / (Math.abs(t) + 0.5), -0.4, 0.4),
          ),
        a.rotateY(a.userData.phase));
    else if (r === "connecting-rod")
      ((a.userData.phase = (a.userData.phase ?? 0) + (t * e) / 0.42),
        (a.position.y = a.userData.baseY + Math.sin(a.userData.phase) * 0.1),
        (a.position.z = Math.cos(a.userData.phase) * 0.1));
    else if (r === "radar") a.rotation.y += e * 0.8;
    else if (
      r === "aileron-left" ||
      r === "aileron-right" ||
      r === "elevator" ||
      r === "rudder"
    ) {
      const l =
          r === "rudder"
            ? fi.clamp(o * 0.35, -0.35, 0.35)
            : r === "elevator"
              ? fi.clamp(-i * 0.65, -0.4, 0.4)
              : fi.clamp(s * 0.55, -0.4, 0.4) * (r === "aileron-left" ? 1 : -1),
        c = r === "rudder" ? "y" : "x";
      a.rotation[c] += (l - a.rotation[c]) * (1 - Math.exp(-9 * e));
    }
  }
}
function _q(n, e, t) {
  if (n === VEHICLE_KIND.DRONE) return e.clone();
  const i = n === VEHICLE_KIND.CARRIER,
    s = new k(i ? 0 : 1, 0, i ? -1 : 0).applyQuaternion(t);
  ((s.y = 0), s.lengthSq() < 0.01 && s.set(i ? 0 : 1, 0, i ? -1 : 0));
  const o = e.clone().addScaledVector(s.normalize(), i || As(n) ? 3 : 2.4);
  return ((o.y = e.y + (i ? 3.5 : 0.4)), o);
}
function kf(n, e, t, i) {
  const s = t.clone().invert(),
    o = n.clone().sub(e).applyQuaternion(s),
    a = new k(0, 1, 0).applyQuaternion(s);
  if (a.y < 0.45) return null;
  const r = (i.max.y - o.y) / a.y,
    l = o.x + a.x * r,
    c = o.z + a.z * r;
  return l < i.min.x || l > i.max.x || c < i.min.z || c > i.max.z
    ? null
    : n.y + r;
}
function Rq(n, e, t, i, s, o, a, r) {
  const l = kf(n, i, s, o);
  if (l !== null && t.y >= l - 0.18 && n.y <= l + 0.04 && e.y <= 0.01) {
    ((n.y = l), (e.y = 0));
    return;
  }
  const c = s.clone().invert(),
    h = n.clone().sub(i).applyQuaternion(c),
    d = n
      .clone()
      .add(new k(0, r, 0))
      .sub(i)
      .applyQuaternion(c),
    u = a / 2,
    f = Math.min(h.y, d.y),
    p = Math.max(h.y, d.y);
  if (f >= o.max.y - 0.025 || p <= o.min.y + 0.025) return;
  const m = Math.min(h.x, d.x) - u,
    y = Math.max(h.x, d.x) + u,
    g = Math.min(h.z, d.z) - u,
    b = Math.max(h.z, d.z) + u;
  if (y <= o.min.x || m >= o.max.x || b <= o.min.z || g >= o.max.z) return;
  const S = [
    { d: o.max.x - m, n: new k(1, 0, 0) },
    { d: y - o.min.x, n: new k(-1, 0, 0) },
    { d: o.max.z - g, n: new k(0, 0, 1) },
    { d: b - o.min.z, n: new k(0, 0, -1) },
  ];
  S.sort((_, C) => _.d - C.d);
  const { d: M, n: x } = S[0];
  (x.applyQuaternion(s), (x.y = 0));
  const T = x.length();
  if (T < 0.1) return;
  (x.divideScalar(T), n.addScaledVector(x, (M + 0.008) / T));
  const A = e.dot(x);
  A < 0 && e.addScaledVector(x, -A);
}
const AL = 1,
  Cq = 2,
  kq = 3,
  Lq = 1.5,
  H2 = 1.6,
  Iq = 0.8,
  $A = 0.5,
  Pq = 0.18,
  qA = 1.5,
  Oq = 4,
  Nq = 0.12,
  Dq = 6,
  Bq = 12,
  KA = (n, e, t) => (e * n) / (1 - (n / t) * (n / t)),
  YA = 0.55,
  jA = new Map();
function _L(n) {
  let e = jA.get(n);
  if (e) return e;
  const t = ah(n),
    i = io[n] ?? [],
    s = Math.max(
      0.5,
      ...i.flatMap((c) => [Math.abs(c.min.x), Math.abs(c.max.x)]),
    ),
    o = Math.max(
      0.5,
      ...i.flatMap((c) => [Math.abs(c.min.z), Math.abs(c.max.z)]),
    ),
    a = Math.ceil((s * 2) / YA) + 1,
    r = Math.ceil((o * 2) / YA) + 1,
    l = (o * 2) / (r - 1);
  return (
    (e = {
      hw: s,
      hl: o,
      step: t.step,
      drop: t.drop,
      cols: a,
      rows: r,
      dr: (s * 2) / (a - 1),
      df: l,
      ext: Math.floor(H2 / l),
      stiffness: n === VEHICLE_KIND.TANK ? 8.5 : 10,
    }),
    jA.set(n, e),
    e
  );
}
const is = 32,
  Va = new Float64Array(is * is),
  XA = new Float64Array(is * is),
  ZA = new Float64Array(is * is),
  H5 = new Int32Array(is * is),
  QA = new Float64Array(is * is),
  il = new Uint8Array(is * is),
  nf = 0,
  ld = 1,
  JA = 2;
let z5 = new Float64Array(0),
  Am = new Float64Array(0),
  _m = new Float64Array(0);
