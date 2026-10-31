// index-BeUlFSPp 117 — add
// Lines 65743-66024 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function B7(s, e) {
  for (const i of [...s.children]) i instanceof re && B7(i, e);
  const t = new Map();
  for (const i of s.children) {
    if (!(i instanceof Q) || e.has(i)) continue;
    const n = i.material;
    if (Array.isArray(n)) continue;
    const o = n.userData.baseColor;
    if (o === void 0) continue;
    const a = [
        n.type,
        o,
        n.opacity,
        n.transparent,
        n.side,
        n.userData.camoEligible,
        n.vertexColors,
        n.map?.uuid,
      ].join(":"),
      r = t.get(a);
    r ? r.push(i) : t.set(a, [i]);
  }
  for (const i of t.values()) {
    if (i.length < 2) continue;
    const n = i.some((c) => !c.geometry.index),
      o = i.map(
        (c) => (
          c.updateMatrix(),
          (n && c.geometry.index
            ? c.geometry.toNonIndexed()
            : c.geometry.clone()
          ).applyMatrix4(c.matrix)
        ),
      ),
      a = Eo(o, !1);
    for (const c of o) c.dispose();
    if (!a) continue;
    const r = i[0].material.clone();
    for (const c of i)
      (s.remove(c), c.geometry.dispose(), c.material.dispose());
    const l = new Q(a, r);
    ((l.castShadow = !0), s.add(l));
  }
}
const LJ = {
  [L.PLANE]: "air",
  [L.FIGHTER_JET]: "air",
  [L.HELI]: "air",
  [L.DRONE]: "air",
  [L.BOAT]: "naval",
  [L.CARRIER]: "naval",
  [L.SUBMARINE]: "naval",
  [L.SPACE_ROCKET]: "air",
};
function A4(s) {
  const e = IJ(s);
  gQ(s, e, se);
  const t = new Set();
  e.barrel && t.add(e.barrel);
  for (const i of e.props) t.add(i);
  for (const i of e.motionParts ?? []) t.add(i);
  for (const i of e.fpvHide ?? []) t.add(i);
  for (const i of e.trackParts ?? []) t.add(i);
  return (
    e.subHatch && t.add(e.subHatch),
    B7(e.group, t),
    FQ(e.group, LJ[s] ?? "ground"),
    RJ.has(s) && wt(1) && CJ(e),
    (e.launcher = e.group.getObjectByName("launcher-pod") ?? void 0),
    e.group.scale.multiply(En(s)),
    e
  );
}
function xm(s, e = 0, t = s + 1, i = 0) {
  const n = A4(s),
    o = i > 0 ? _7(s, i, !!n.turret, !!n.launcher) : null;
  return (
    o &&
      ((n.sprung ?? n.group).add(o.hull, o.fpv),
      o.turret && n.turret && n.turret.add(o.turret),
      o.launcher && n.launcher && n.launcher.add(o.launcher)),
    H7(n.group, e, t),
    n.group
  );
}
function G8(s) {
  Lh(s);
}
function IJ(s) {
  switch (s) {
    case L.TANK:
      return WQ();
    case L.PLANE:
      return bJ();
    case L.FIGHTER_JET:
      return bZ();
    case L.BOAT:
      return QQ();
    case L.SUBMARINE:
      return MJ();
    case L.CARRIER:
      return SJ();
    case L.HELI:
      return jQ();
    case L.MORTAR:
      return PJ();
    case L.HIMARS:
      return KQ();
    case L.PATRIOT:
      return YQ();
    case L.TURRET:
      return _J();
    case L.BTR_TURRET:
      return qQ();
    case L.SPACE_ROCKET:
      return OJ();
    default:
      return EJ();
  }
}
function PJ() {
  const s = new re(),
    e = new re(),
    t = new re(),
    i = wn(6384451),
    n = wn(3160626),
    o = wn(8620149),
    a = wn(1119762),
    r = (d, u, f, p, m, g, y) => {
      const b = new Q(new Tt(d, u, f, ci(20)), p);
      return (b.position.set(m, g, y), (b.castShadow = !0), b);
    };
  s.add(r(0.78, 0.94, 0.16, n, 0, 0.1, 0));
  for (let d = 0; d < 8; d++) {
    const u = (d * Math.PI) / 4;
    s.add(
      se(
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
  (s.add(e),
    e.add(r(0.23, 0.3, 0.48, n, 0, 0.38, 0.18)),
    t.position.set(0, 0.65, 0.18),
    e.add(t));
  const l = new re();
  ((l.rotation.x = -0.42),
    t.add(l),
    l.add(r(0.19, 0.24, 1.65, i, 0, 0.825, 0)),
    l.add(r(0.175, 0.175, 0.025, a, 0, 1.68, 0)));
  const c = new Q(new Gn(0.2, 0.044, 6, ci(24)), o);
  ((c.rotation.x = Math.PI / 2), (c.position.y = 1.72), l.add(c));
  for (const d of [0.22, 0.76, 1.46]) l.add(r(0.235, 0.235, 0.09, n, 0, d, 0));
  l.add(se(0.085, 0.48, 0.08, 9607292, 0.25, 0.8, 0));
  for (const d of [-1, 1]) {
    const u = r(0.055, 0.08, 1.4, i, d * 0.45, 0.68, -0.45);
    ((u.rotation.z = d * 0.42),
      (u.rotation.x = -0.28),
      e.add(u),
      e.add(se(0.34, 0.09, 0.28, 3160626, d * 0.75, 0.07, -0.68)),
      e.add(se(0.12, 0.18, 0.2, 9147001, d * 0.28, 1.14, -0.32)));
  }
  const h = new Q(new Gn(0.16, 0.027, 5, 16), o);
  return (
    (h.rotation.y = Math.PI / 2),
    h.position.set(0.48, 1.06, -0.23),
    e.add(h),
    e.add(se(0.22, 0.2, 0.32, 3424050, -0.38, 1.29, -0.26)),
    e.add(se(0.09, 0.075, 0.06, 7578786, -0.38, 1.36, -0.45)),
    s.add(
      se(0.45, 0.32, 0.65, 4937272, 1.02, 0.18, 0.44),
      se(0.3, 0.03, 0.055, 1778973, 1.02, 0.37, 0.44),
    ),
    s.add(r(0.018, 0.024, 1.02, n, 0.82, 0.87, 0.62)),
    { group: s, turret: e, barrel: t, props: [] }
  );
}
function OJ() {
  const s = new re(),
    e = wn(15265007),
    t = wn(2107187),
    i = wn(9345699),
    n = wn(12925752),
    o = new Q(new Tt(1.65, 1.9, 7.5, ci(24)), e);
  ((o.position.y = 5.25), (o.castShadow = !0), s.add(o));
  const a = new Q(new fa(1.65, 3.8, ci(24)), e);
  ((a.position.y = 10.9), (a.castShadow = !0), s.add(a));
  const r = new Q(new Tt(1.9, 2.25, 1.2, ci(24)), i);
  ((r.position.y = 0.95), (r.castShadow = !0), s.add(r));
  for (const l of [2.15, 7.8]) {
    const c = new Q(new Gn(1.72, 0.09, 6, ci(24)), n);
    ((c.rotation.x = Math.PI / 2), (c.position.y = l), s.add(c));
  }
  for (let l = 0; l < 4; l++) {
    const c = (l * Math.PI) / 2,
      h = se(
        0.18,
        2.65,
        2.35,
        12925752,
        Math.sin(c) * 2.2,
        1.35,
        Math.cos(c) * 2.2,
      );
    ((h.rotation.y = c), (h.rotation.z = Math.sin(c) * -0.18), s.add(h));
    const d = se(
      0.24,
      1.8,
      0.24,
      4739418,
      Math.sin(c) * 2.45,
      0.55,
      Math.cos(c) * 2.45,
    );
    ((d.rotation.z = Math.sin(c) * -0.28),
      s.add(d),
      s.add(
        se(
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
      h = new Q(new Tt(0.34, 0.34, 0.08, 20), t);
    ((h.rotation.z = Math.PI / 2),
      (h.rotation.y = -c),
      h.position.set(Math.sin(c) * 1.69, 7.15, Math.cos(c) * 1.69),
      s.add(h));
  }
  for (const l of [-0.72, 0, 0.72])
    for (const c of [-0.72, 0.72]) {
      const h = new Q(new Tt(0.18, 0.4, 0.85, 12), t);
      (h.position.set(l, 0.12, c), s.add(h));
    }
  if (wt(1)) {
    s.add(se(0.85, 1.45, 0.12, 2502970, 0, 5.45, -1.72));
    for (let l = 0; l < 6; l++)
      s.add(se(0.06, 0.06, 1.7, 7240322, -1.71, 3.1 + l * 0.72, 0));
  }
  return { group: s, props: [], fpvHide: [a] };
}
function Lh(s) {
  s.traverse((e) => {
    const t = e;
    t.geometry?.dispose();
    const i = t.material;
    Array.isArray(i) ? i.forEach((n) => n.dispose()) : i?.dispose();
  });
}
function W8(s = !1) {
  const e = document.createElement("canvas");
  ((e.width = s ? 384 : 256), (e.height = s ? 104 : 56));
  const t = new Si(e),
    i = new Ws(
      new hn({
        map: t,
        depthTest: !1,
        depthWrite: !1,
        fog: !1,
        toneMapped: !1,
      }),
    );
  return (
    Q0(i),
    (i.userData.aspect = e.width / e.height),
    (i.userData.raid = s),
    { sprite: i, canvas: e }
  );
}
