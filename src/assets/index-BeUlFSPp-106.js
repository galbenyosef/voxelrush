// index-BeUlFSPp 106 — math
// Lines 62471-62781 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class mQ {
  key = "";
  seconds = 0;
  update(e, t) {
    return (
      (!e || e !== this.key) && (this.seconds = 0),
      (this.key = e),
      e &&
        (this.seconds = Math.min(
          Ad,
          this.seconds + Math.min(0.1, Math.max(0, t)),
        )),
      this.seconds >= Ad
    );
  }
}
function gQ(s, e, t) {
  const i = e.group,
    n = (e.motionParts ??= []),
    o = (h, d) => ((h.name = d), (h.userData.motion = d), n.push(h), h);
  (i.traverse((h) => {
    const d = h;
    d.geometry?.type === "CylinderGeometry" &&
      Math.abs(h.rotation.z) > 1.5 &&
      h.position.y < 0.65 &&
      (o(h, "wheel"),
      (h.userData.radius = d.geometry.parameters.radiusTop),
      (h.userData.bindQuaternion = h.quaternion.toArray()));
  }),
    s === L.HELI && e.props.length > 1 && (e.props[1].userData.axis = "x"));
  for (const h of e.props) {
    if (
      s === L.CARRIER ||
      s === L.TURRET ||
      ((h.userData.axis ??= s === L.PLANE || s === L.SUBMARINE ? "z" : "y"),
      !wt(1) || s === L.SUBMARINE)
    )
      continue;
    const d =
        s === L.HELI
          ? h.userData.axis === "x"
            ? 0.65
            : 3.1
          : s === L.PLANE
            ? 1
            : 0.23,
      u = new Q(
        new Z0(d * 0.2, d, 40),
        new Zt({
          color: 10925237,
          transparent: !0,
          opacity: 0,
          side: Mi,
          depthWrite: !1,
        }),
      );
    ((u.name = "rotor-blur"),
      h.userData.axis === "y"
        ? (u.rotation.x = -Math.PI / 2)
        : h.userData.axis === "x" && (u.rotation.y = Math.PI / 2),
      h.add(u),
      (h.userData.blur = u));
  }
  if (!wt(1)) return;
  const a = 1710618,
    r = 3950898,
    l = 7371094,
    c = (h, d, u, f, p) => {
      h.add(t(0.035, 0.035, p, r, d, u, f));
      for (const m of [-p / 2, p / 2])
        h.add(t(0.035, 0.22, 0.035, r, d, u - 0.1, f + m));
    };
  if (s !== L.TANK) {
    if (s === L.PLANE) {
      for (const u of [...i.children])
        u instanceof Q &&
          u.geometry instanceof kt &&
          u.geometry.parameters.width > 2 &&
          u.geometry.parameters.height < 0.1 &&
          u.position.z > 0.15 &&
          (i.remove(u), u.geometry.dispose(), u.material.dispose());
      for (const u of [-1, 1]) {
        const f = o(new re(), u < 0 ? "aileron-left" : "aileron-right");
        (f.position.set(u * 2.45, 1.18, 0.18),
          f.add(t(1.55, 0.065, 0.27, l, 0, 0, 0.135)),
          i.add(f),
          i.add(t(0.028, 0.016, 1.02, a, u * 1.55, 1.338, -0.4)),
          i.add(
            t(
              0.16,
              0.035,
              0.16,
              u < 0 ? 12796981 : 7714710,
              u * 3.43,
              1.35,
              -0.3,
            ),
          ));
      }
      const h = o(new re(), "elevator");
      (h.position.set(0, 1.35, 2.17),
        h.add(t(2.4, 0.07, 0.3, l, 0, 0, 0.15)),
        i.add(h));
      const d = o(new re(), "rudder");
      (d.position.set(0, 1.75, 2.27),
        d.add(t(0.1, 0.85, 0.22, l, 0, 0, 0.11)),
        i.add(d));
      for (const u of [-1, 1]) {
        const f = t(0.035, 0.32, 0.6, 2437946, u * 0.354, 1.62, -0.4);
        (i.add(f), (e.fpvHide ??= []).push(f));
      }
    } else if (s === L.CARRIER) {
      for (const u of [-1, 1])
        for (let f = -16; f <= 16; f += 4) c(i, u * 5.7, 3.65, f, 3.5);
      {
        for (let u = -15; u < 8; u += 2)
          i.add(t(0.09, 0.025, 1.35, 14211288, 1, 3.418, u));
        for (let u = 1.6; u < 5.8; u += 0.75)
          i.add(t(0.04, 0.65, 0.58, 2437946, 5.915, 6.65, u));
      }
    } else if (s === L.SUBMARINE) {
      for (let h = -3.8; h < 4; h += 0.65)
        for (const d of [-1, 1])
          i.add(t(0.025, 0.055, 0.28, a, d * 2.2, 0.64, h));
      (c(i, -0.7, 1.55, -1.2, 1.4), c(i, 0.7, 1.55, -1.2, 1.4));
    } else if (s === L.DRONE) {
      for (const h of [-1, 1])
        i.add(t(0.025, 0.02, 0.28, 12634834, h * 0.1, 0.293, 0));
      i.add(t(0.05, 0.06, 0.06, 2437946, 0, 0.2, -0.253));
    } else if (s === L.SPACE_ROCKET) {
      for (let h = 0; h < 12; h++) {
        const d = (h * Math.PI) / 6,
          u = t(
            0.045,
            4.8,
            0.045,
            12634834,
            Math.sin(d) * 1.72,
            4.1,
            Math.cos(d) * 1.72,
          );
        i.add(u);
      }
      for (const h of [-1, 1]) i.add(t(0.12, 0.5, 0.2, a, h * 1.68, 7, 0.12));
    }
  }
  i.traverse((h) => {
    h instanceof Q && (h.receiveShadow = !0);
  });
}
function yQ(s, e, t, i, n, o) {
  for (const a of s) {
    const r = a.userData.motion;
    if (r === "wheel-set") {
      a.userData.phase += t * e;
      const l =
        Math.abs(t) > 0.3 ? ni.clamp(o / (Math.abs(t) + 0.5), -0.4, 0.4) : 0;
      ((a.userData.steer += (l - a.userData.steer) * (1 - Math.exp(-8 * e))),
        M7(a));
    } else if (r === "wheel")
      ((a.userData.phase =
        (a.userData.phase ?? 0) + (t * e) / Math.max(0.1, a.userData.radius)),
        a.quaternion.fromArray(a.userData.bindQuaternion),
        a.position.z < -1 &&
          Math.abs(t) > 0.3 &&
          a.rotateOnWorldAxis(
            new k(0, 1, 0),
            ni.clamp(o / (Math.abs(t) + 0.5), -0.4, 0.4),
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
            ? ni.clamp(o * 0.35, -0.35, 0.35)
            : r === "elevator"
              ? ni.clamp(-i * 0.65, -0.4, 0.4)
              : ni.clamp(n * 0.55, -0.4, 0.4) * (r === "aileron-left" ? 1 : -1),
        c = r === "rudder" ? "y" : "x";
      a.rotation[c] += (l - a.rotation[c]) * (1 - Math.exp(-9 * e));
    }
  }
}
function vQ(s, e, t) {
  if (s === L.DRONE) return e.clone();
  const i = s === L.CARRIER,
    n = new k(i ? 0 : 1, 0, i ? -1 : 0).applyQuaternion(t);
  ((n.y = 0), n.lengthSq() < 0.01 && n.set(i ? 0 : 1, 0, i ? -1 : 0));
  const o = e.clone().addScaledVector(n.normalize(), i || on(s) ? 3 : 2.4);
  return ((o.y = e.y + (i ? 3.5 : 0.4)), o);
}
function c1(s, e, t, i) {
  const n = t.clone().invert(),
    o = s.clone().sub(e).applyQuaternion(n),
    a = new k(0, 1, 0).applyQuaternion(n);
  if (a.y < 0.45) return null;
  const r = (i.max.y - o.y) / a.y,
    l = o.x + a.x * r,
    c = o.z + a.z * r;
  return l < i.min.x || l > i.max.x || c < i.min.z || c > i.max.z
    ? null
    : s.y + r;
}
function bQ(s, e, t, i, n, o, a, r) {
  const l = c1(s, i, n, o);
  if (l !== null && t.y >= l - 0.18 && s.y <= l + 0.04 && e.y <= 0.01) {
    ((s.y = l), (e.y = 0));
    return;
  }
  const c = n.clone().invert(),
    h = s.clone().sub(i).applyQuaternion(c),
    d = s
      .clone()
      .add(new k(0, r, 0))
      .sub(i)
      .applyQuaternion(c),
    u = a / 2,
    f = Math.min(h.y, d.y),
    p = Math.max(h.y, d.y);
  if (f >= o.max.y - 0.025 || p <= o.min.y + 0.025) return;
  const m = Math.min(h.x, d.x) - u,
    g = Math.max(h.x, d.x) + u,
    y = Math.min(h.z, d.z) - u,
    b = Math.max(h.z, d.z) + u;
  if (g <= o.min.x || m >= o.max.x || b <= o.min.z || y >= o.max.z) return;
  const S = [
    { d: o.max.x - m, n: new k(1, 0, 0) },
    { d: g - o.min.x, n: new k(-1, 0, 0) },
    { d: o.max.z - y, n: new k(0, 0, 1) },
    { d: b - o.min.z, n: new k(0, 0, -1) },
  ];
  S.sort((x, R) => x.d - R.d);
  const { d: M, n: E } = S[0];
  (E.applyQuaternion(n), (E.y = 0));
  const A = E.length();
  if (A < 0.1) return;
  (E.divideScalar(A), s.addScaledVector(E, (M + 0.008) / A));
  const T = e.dot(E);
  T < 0 && e.addScaledVector(E, -T);
}
const R7 = 1,
  wQ = 2,
  MQ = 3,
  SQ = 1.5,
  ky = 1.6,
  EQ = 0.8,
  p8 = 0.5,
  AQ = 0.18,
  m8 = 1.5,
  TQ = 4,
  xQ = 0.12,
  _Q = 6,
  RQ = 12,
  g8 = (s, e, t) => (e * s) / (1 - (s / t) * (s / t)),
  y8 = 0.55,
  v8 = new Map();
function k7(s) {
  let e = v8.get(s);
  if (e) return e;
  const t = eh(s),
    i = lo[s] ?? [],
    n = Math.max(
      0.5,
      ...i.flatMap((c) => [Math.abs(c.min.x), Math.abs(c.max.x)]),
    ),
    o = Math.max(
      0.5,
      ...i.flatMap((c) => [Math.abs(c.min.z), Math.abs(c.max.z)]),
    ),
    a = Math.ceil((n * 2) / y8) + 1,
    r = Math.ceil((o * 2) / y8) + 1,
    l = (o * 2) / (r - 1);
  return (
    (e = {
      hw: n,
      hl: o,
      step: t.step,
      drop: t.drop,
      cols: a,
      rows: r,
      dr: (n * 2) / (a - 1),
      df: l,
      ext: Math.floor(ky / l),
      stiffness: s === L.TANK ? 8.5 : 10,
    }),
    v8.set(s, e),
    e
  );
}
const yn = 32,
  Ir = new Float64Array(yn * yn),
  b8 = new Float64Array(yn * yn),
  w8 = new Float64Array(yn * yn),
  ew = new Int32Array(yn * yn),
  M8 = new Float64Array(yn * yn),
  ql = new Uint8Array(yn * yn),
  Lp = 0,
  gu = 1,
  S8 = 2;
let tw = new Float64Array(0),
  mg = new Float64Array(0),
  gg = new Float64Array(0);
