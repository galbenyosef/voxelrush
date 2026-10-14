// index-Dp6GxvJu 96 — add
// Lines 58341-58624 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function DL(n, e) {
  var i;
  for (const s of [...n.children]) s instanceof pe && DL(s, e);
  const t = new Map();
  for (const s of n.children) {
    if (!(s instanceof le) || e.has(s)) continue;
    const o = s.material;
    if (Array.isArray(o)) continue;
    const a = o.userData.baseColor;
    if (a === void 0) continue;
    const r = [
        o.type,
        a,
        o.opacity,
        o.transparent,
        o.side,
        o.userData.camoEligible,
        o.vertexColors,
        (i = o.map) == null ? void 0 : i.uuid,
      ].join(":"),
      l = t.get(r);
    l ? l.push(s) : t.set(r, [s]);
  }
  for (const s of t.values()) {
    if (s.length < 2) continue;
    const o = s.some((h) => !h.geometry.index),
      a = s.map(
        (h) => (
          h.updateMatrix(),
          (o && h.geometry.index
            ? h.geometry.toNonIndexed()
            : h.geometry.clone()
          ).applyMatrix4(h.matrix)
        ),
      ),
      r = no(a, !1);
    for (const h of a) h.dispose();
    if (!r) continue;
    const l = s[0].material.clone();
    for (const h of s)
      (n.remove(h), h.geometry.dispose(), h.material.dispose());
    const c = new le(r, l);
    ((c.castShadow = !0), n.add(c));
  }
}
const UK = {
  [VEHICLE_KIND.PLANE]: "air",
  [VEHICLE_KIND.FIGHTER_JET]: "air",
  [VEHICLE_KIND.HELI]: "air",
  [VEHICLE_KIND.DRONE]: "air",
  [VEHICLE_KIND.BOAT]: "naval",
  [VEHICLE_KIND.CARRIER]: "naval",
  [VEHICLE_KIND.SUBMARINE]: "naval",
  [VEHICLE_KIND.SPACE_ROCKET]: "air",
};
function $w(n) {
  const e = FK(n);
  Tq(n, e, ce);
  const t = new Set();
  e.barrel && t.add(e.barrel);
  for (const i of e.props) t.add(i);
  for (const i of e.motionParts ?? []) t.add(i);
  for (const i of e.fpvHide ?? []) t.add(i);
  for (const i of e.trackParts ?? []) t.add(i);
  return (
    e.subHatch && t.add(e.subHatch),
    DL(e.group, t),
    jq(e.group, UK[n] ?? "ground"),
    BK.has(n) && yt(1) && zK(e),
    (e.launcher = e.group.getObjectByName("launcher-pod") ?? void 0),
    e.group.scale.multiply(ms(n)),
    e
  );
}
function Hp(n, e = 0, t = n + 1, i = 0) {
  const s = $w(n),
    o = i > 0 ? TL(n, i, !!s.turret, !!s.launcher) : null;
  return (
    o &&
      ((s.sprung ?? s.group).add(o.hull, o.fpv),
      o.turret && s.turret && s.turret.add(o.turret),
      o.launcher && s.launcher && s.launcher.add(o.launcher)),
    NL(s.group, e, t),
    s.group
  );
}
function b6(n) {
  zh(n);
}
function FK(n) {
  switch (n) {
    case VEHICLE_KIND.TANK:
      return Qq();
    case VEHICLE_KIND.PLANE:
      return RK();
    case VEHICLE_KIND.FIGHTER_JET:
      return R$();
    case VEHICLE_KIND.BOAT:
      return rK();
    case VEHICLE_KIND.SUBMARINE:
      return kK();
    case VEHICLE_KIND.CARRIER:
      return LK();
    case VEHICLE_KIND.HELI:
      return sK();
    case VEHICLE_KIND.MORTAR:
      return GK();
    case VEHICLE_KIND.HIMARS:
      return iK();
    case VEHICLE_KIND.PATRIOT:
      return nK();
    case VEHICLE_KIND.TURRET:
      return DK();
    case VEHICLE_KIND.BTR_TURRET:
      return tK();
    case VEHICLE_KIND.SPACE_ROCKET:
      return WK();
    default:
      return IK();
  }
}
function GK() {
  const n = new pe(),
    e = new pe(),
    t = new pe(),
    i = ss(6384451),
    s = ss(3160626),
    o = ss(8620149),
    a = ss(1119762),
    r = (d, u, f, p, m, y, g) => {
      const b = new le(new xt(d, u, f, di(20)), p);
      return (b.position.set(m, y, g), (b.castShadow = !0), b);
    };
  n.add(r(0.78, 0.94, 0.16, s, 0, 0.1, 0));
  for (let d = 0; d < 8; d++) {
    const u = (d * Math.PI) / 4;
    n.add(
      ce(
        0.09,
        0.035,
        0.09,
        10527628,
        Math.cos(u) * 0.69,
        0.19,
        Math.sin(u) * 0.69,
      ),
    );
  }
  (n.add(e),
    e.add(r(0.23, 0.3, 0.48, s, 0, 0.38, 0.18)),
    t.position.set(0, 0.65, 0.18),
    e.add(t));
  const l = new pe();
  ((l.rotation.x = -0.42),
    t.add(l),
    l.add(r(0.19, 0.24, 1.65, i, 0, 0.825, 0)),
    l.add(r(0.175, 0.175, 0.025, a, 0, 1.68, 0)));
  const c = new le(new xs(0.2, 0.044, 6, di(24)), o);
  ((c.rotation.x = Math.PI / 2), (c.position.y = 1.72), l.add(c));
  for (const d of [0.22, 0.76, 1.46]) l.add(r(0.235, 0.235, 0.09, s, 0, d, 0));
  l.add(ce(0.085, 0.48, 0.08, 9607292, 0.25, 0.8, 0));
  for (const d of [-1, 1]) {
    const u = r(0.055, 0.08, 1.4, i, d * 0.45, 0.68, -0.45);
    ((u.rotation.z = d * 0.42),
      (u.rotation.x = -0.28),
      e.add(u),
      e.add(ce(0.34, 0.09, 0.28, 3160626, d * 0.75, 0.07, -0.68)),
      e.add(ce(0.12, 0.18, 0.2, 9147001, d * 0.28, 1.14, -0.32)));
  }
  const h = new le(new xs(0.16, 0.027, 5, 16), o);
  return (
    (h.rotation.y = Math.PI / 2),
    h.position.set(0.48, 1.06, -0.23),
    e.add(h),
    e.add(ce(0.22, 0.2, 0.32, 3424050, -0.38, 1.29, -0.26)),
    e.add(ce(0.09, 0.075, 0.06, 7578786, -0.38, 1.36, -0.45)),
    n.add(
      ce(0.45, 0.32, 0.65, 4937272, 1.02, 0.18, 0.44),
      ce(0.3, 0.03, 0.055, 1778973, 1.02, 0.37, 0.44),
    ),
    n.add(r(0.018, 0.024, 1.02, s, 0.82, 0.87, 0.62)),
    { group: n, turret: e, barrel: t, props: [] }
  );
}
function WK() {
  const n = new pe(),
    e = ss(15265007),
    t = ss(2107187),
    i = ss(9345699),
    s = ss(12925752),
    o = new le(new xt(1.65, 1.9, 7.5, di(24)), e);
  ((o.position.y = 5.25), (o.castShadow = !0), n.add(o));
  const a = new le(new ma(1.65, 3.8, di(24)), e);
  ((a.position.y = 10.9), (a.castShadow = !0), n.add(a));
  const r = new le(new xt(1.9, 2.25, 1.2, di(24)), i);
  ((r.position.y = 0.95), (r.castShadow = !0), n.add(r));
  for (const l of [2.15, 7.8]) {
    const c = new le(new xs(1.72, 0.09, 6, di(24)), s);
    ((c.rotation.x = Math.PI / 2), (c.position.y = l), n.add(c));
  }
  for (let l = 0; l < 4; l++) {
    const c = (l * Math.PI) / 2,
      h = ce(
        0.18,
        2.65,
        2.35,
        12925752,
        Math.sin(c) * 2.2,
        1.35,
        Math.cos(c) * 2.2,
      );
    ((h.rotation.y = c), (h.rotation.z = Math.sin(c) * -0.18), n.add(h));
    const d = ce(
      0.24,
      1.8,
      0.24,
      4739418,
      Math.sin(c) * 2.45,
      0.55,
      Math.cos(c) * 2.45,
    );
    ((d.rotation.z = Math.sin(c) * -0.28),
      n.add(d),
      n.add(
        ce(
          0.8,
          0.16,
          0.8,
          3423043,
          Math.sin(c) * 2.65,
          0.08,
          Math.cos(c) * 2.65,
        ),
      ));
  }
  for (let l = 0; l < 3; l++) {
    const c = (l * Math.PI * 2) / 3,
      h = new le(new xt(0.34, 0.34, 0.08, 20), t);
    ((h.rotation.z = Math.PI / 2),
      (h.rotation.y = -c),
      h.position.set(Math.sin(c) * 1.69, 7.15, Math.cos(c) * 1.69),
      n.add(h));
  }
  for (const l of [-0.72, 0, 0.72])
    for (const c of [-0.72, 0.72]) {
      const h = new le(new xt(0.18, 0.4, 0.85, 12), t);
      (h.position.set(l, 0.12, c), n.add(h));
    }
  if (yt(1)) {
    n.add(ce(0.85, 1.45, 0.12, 2502970, 0, 5.45, -1.72));
    for (let l = 0; l < 6; l++)
      n.add(ce(0.06, 0.06, 1.7, 7240322, -1.71, 3.1 + l * 0.72, 0));
  }
  return { group: n, props: [], fpvHide: [a] };
}
function zh(n) {
  n.traverse((e) => {
    var s;
    const t = e;
    (s = t.geometry) == null || s.dispose();
    const i = t.material;
    Array.isArray(i) ? i.forEach((o) => o.dispose()) : i == null || i.dispose();
  });
}
function w6(n = !1) {
  const e = document.createElement("canvas");
  ((e.width = n ? 384 : 256), (e.height = n ? 104 : 56));
  const t = new bi(e),
    i = new os(
      new es({
        map: t,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        toneMapped: !1,
      }),
    );
  return (
    oh(i),
    (i.userData.aspect = e.width / e.height),
    (i.userData.raid = n),
    { sprite: i, canvas: e }
  );
}
