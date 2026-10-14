// assets__index-Dp6GxvJu 219 — map
// Lines 121565-121896 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
w(Zg, "CHUTE_MIN_FALL", 5);
let KM = Zg;
const _ie = 22,
  Rie = new Set([
    E.RADIO_MODULE,
    E.FISHING_ROD,
    E.FERTILIZER,
    E.WHEAT_SEEDS,
    E.GRENADE_LAUNCHER,
    E.AMMO_40MM,
    E.AMMO_9MM,
    E.AMMO_762,
    E.AMMO_338,
    E.MINIGUN,
    E.SHOTGUN,
    E.AMMO_762_HE,
    E.AMMO_338_HE,
    E.AMMO_SHELL,
    E.AMMO_SHELL_HE,
    E.AK47,
    E.GLOCK,
    E.AWP,
    E.RPG,
    E.GRENADE,
    E.AXE,
    E.COMBAT_KNIFE,
    E.WELDER,
    E.DRILL_METAL,
    E.DRILL_DIAMOND,
    E.DRILL_TITANIUM,
    E.DRILL_COMPOSITE,
    E.DRILL_LASER,
    E.LUNAR_DRILL,
    E.SPACE_ROCKET,
    E.CHAINSAW_BASIC,
    E.CHAINSAW_PRO,
    E.CHAINSAW_INDUSTRIAL,
  ]),
  YM = new Map();
u4(() => YM.clear());
function Cie(n) {
  if (!Rie.has(n) && Ti(n) === 0 && !wo(n) && !xa(n)) return null;
  let e = YM.get(n);
  return (e || ((e = R0(n).group), YM.set(n, e)), e);
}
function kie(n) {
  const e = p1(n);
  return ((e.rotation.x = -0.12), e);
}
function Lie(n) {
  n.traverse((e) => {
    const t = e;
    !t.isMesh ||
      !t.material ||
      (t.material = Array.isArray(t.material)
        ? t.material.map((i) => i.clone())
        : t.material.clone());
  });
}
function Iie(n) {
  n.traverse((e) => {
    const t = e;
    if (!t.isMesh || !t.material) return;
    (Array.isArray(t.material) ? t.material : [t.material]).forEach((s) =>
      s.dispose(),
    );
  });
}
class Pie {
  constructor(e, t, i) {
    w(this, "map", new Map());
    w(this, "currentPlanet", Si.EARTH);
    w(this, "onTake", () => {});
    w(this, "blockedNearby", !1);
    ((this.scene = e), (this.atlasTex = t), (this.world = i));
  }
  setPlanet(e) {
    this.currentPlanet = e;
    for (const t of this.map.values()) t.mesh.visible = t.planet === e;
  }
  clear() {
    for (const e of [...this.map.keys()]) this.onRemove(e);
  }
  onSpawn(e, t, i, s, o, a, r = o, l = 0, c = 0, h, d = Si.EARTH, u) {
    var g;
    const f = this.map.get(e);
    if (f) {
      ((f.count = i),
        (f.durability = l),
        (f.suppressorDurability = c),
        (f.magazine = h));
      return;
    }
    let p, m;
    if (t < 256)
      ((p = d4(this.atlasTex, t, i > 1 ? 0.45 : 0.35)), (m = "block"));
    else {
      const b = Cie(t);
      b
        ? ((p = b.clone(!0)),
          p.scale.setScalar(0.55),
          (p.rotation.x = 0.35),
          t === E.COMBAT_KNIFE &&
            (p.scale.setScalar(1.1),
            (p.rotation.x = 0),
            (g = p.children[0]) == null || g.rotation.set(0, 0, Math.PI / 2)),
          (m = "weapon"))
        : ((p = kie(t)), (m = "item"));
    }
    Lie(p);
    const y = r > o + 0.02;
    (p.position.set(s, y ? r : o, a),
      p.traverse((b) => {
        const S = b;
        S.isMesh && ((S.castShadow = !0), (S.receiveShadow = !0));
      }),
      u && Ba(p, u, ""),
      this.scene.add(p),
      this.map.set(e, {
        id: e,
        itemId: t,
        count: i,
        durability: l,
        suppressorDurability: c,
        magazine: h,
        mesh: p,
        kind: m,
        baseY: o,
        fallY: y ? r : null,
        fallVel: 0,
        bounces: y ? 2 : 0,
        t: Math.random() * 6,
        requestCd: 0,
        lightT: Vr,
        planet: d,
      }));
  }
  onRemove(e) {
    var s, o;
    const t = this.map.get(e);
    if (!t)
      return { itemId: 0, count: 0, durability: 0, suppressorDurability: 0 };
    if ((this.scene.remove(t.mesh), Zl(t.mesh), t.kind === "block")) {
      const a = t.mesh;
      a.userData.sharedGeometry || (s = a.geometry) == null || s.dispose();
    }
    const i = t.mesh.getObjectByName("cosmetic-counter");
    return (
      i && ((o = i.material.map) == null || o.dispose(), i.geometry.dispose()),
      Iie(t.mesh),
      this.map.delete(e),
      {
        itemId: t.itemId,
        count: t.count,
        durability: t.durability,
        suppressorDurability: t.suppressorDurability,
        magazine: t.magazine,
      }
    );
  }
  update(e, t, i, s, o, a = () => !0) {
    let r = !1;
    for (const l of this.map.values()) {
      const c =
        l.planet === this.currentPlanet &&
        (!o || o(l.mesh.position.x, l.mesh.position.z));
      if (
        ((l.mesh.visible = c),
        !!c &&
          ((l.t += e),
          (l.requestCd = Math.max(0, l.requestCd - e)),
          (l.lightT += e),
          l.lightT >= Vr &&
            ((l.lightT = 0),
            ur(l.mesh, dr(this.world, l.mesh.position, s, 0.1))),
          l.fallY !== null &&
            ((l.fallVel -= _ie * e),
            (l.fallY += l.fallVel * e),
            l.fallY <= l.baseY &&
              (l.bounces > 0 && l.fallVel < -2.5
                ? (l.bounces--, (l.fallY = l.baseY), (l.fallVel *= -0.32))
                : ((l.fallY = null),
                  (l.fallVel = 0),
                  (l.t = 0),
                  (l.mesh.rotation.x =
                    l.kind === "weapon"
                      ? 0.35
                      : l.kind === "item"
                        ? -0.12
                        : 0)))),
          (l.mesh.position.y =
            l.fallY ?? l.baseY + (1 - Math.cos(l.t * 2.2)) * 0.045),
          (l.mesh.rotation.y = l.t * 1.6),
          l.fallY !== null && (l.mesh.rotation.x = l.t * 2.4),
          i))
      ) {
        const h = t.x - l.mesh.position.x,
          d = t.y + 0.9 - l.mesh.position.y,
          u = t.z - l.mesh.position.z;
        h * h + d * d + u * u < 2.6 &&
          (a(l.itemId, l.count)
            ? l.requestCd <= 0 && ((l.requestCd = 0.5), this.onTake(l.id))
            : (r = !0));
      }
    }
    this.blockedNearby = r;
  }
}
function Oh(n, e, t, i = [1, 1, 1], s = 0) {
  const o = new Pr({
      color: e,
      roughness: 0.72,
      metalness: s ? 0.45 : 0.08,
      emissive: s,
      emissiveIntensity: s ? 0.75 : 0,
    }),
    a = new le(n, o);
  return (
    a.position.set(...t),
    a.scale.set(...i),
    (a.castShadow = !0),
    (a.receiveShadow = !0),
    a
  );
}
function Oie() {
  const n = new pe(),
    e = new Ct(1, 1, 1);
  n.add(
    Oh(e, 7297080, [0, 0.48, 0], [0.72, 0.82, 0.38]),
    Oh(e, 4996393, [0, 0.72, -0.22], [0.68, 0.22, 0.12]),
    Oh(e, 8546627, [0, 0.29, -0.24], [0.5, 0.3, 0.14]),
    Oh(e, 2959390, [-0.25, 0.5, -0.25], [0.07, 0.72, 0.06]),
    Oh(e, 2959390, [0.25, 0.5, -0.25], [0.07, 0.72, 0.06]),
    Oh(e, 14925155, [0, 0.43, -0.33], [0.13, 0.12, 0.05], 10183960),
  );
  const t = Oh(new xs(0.18, 0.035, 6, 12, Math.PI), 3155740, [0, 0.91, 0.02]);
  return ((t.rotation.z = Math.PI), n.add(t), (n.rotation.y = Math.PI), n);
}
class Nie {
  constructor(e, t) {
    w(this, "map", new Map());
    w(this, "currentPlanet", Si.EARTH);
    w(this, "lightT", 0);
    ((this.scene = e), (this.world = t));
  }
  setPlanet(e) {
    this.currentPlanet = e;
    for (const t of this.map.values()) t.group.visible = t.planet === e;
  }
  clear() {
    for (const e of [...this.map.keys()]) this.onRemove(e);
  }
  onSpawn(e, t, i, s, o, a = Si.EARTH) {
    if (this.map.has(e)) return;
    const r = Oie();
    (r.position.set(i, s, o),
      this.scene.add(r),
      (r.visible = a === this.currentPlanet),
      this.map.set(e, {
        id: e,
        x: i,
        y: s,
        z: o,
        group: r,
        t: Math.random() * 6,
        planet: a,
      }));
  }
  onRemove(e) {
    const t = this.map.get(e);
    t &&
      (this.scene.remove(t.group),
      t.group.traverse((i) => {
        const s = i;
        if (!s.isMesh) return;
        s.geometry.dispose();
        const o = Array.isArray(s.material) ? s.material : [s.material];
        for (const a of o) a.dispose();
      }),
      this.map.delete(e));
  }
  raycastHit(e, t, i) {
    let s = null;
    for (const o of this.map.values()) {
      if (o.planet !== this.currentPlanet || !o.group.visible) continue;
      const a = o.x - e.x,
        r = o.y + 0.45 - e.y,
        l = o.z - e.z,
        c = a * t.x + r * t.y + l * t.z;
      if (c < 0 || c > i || (s && c >= s.dist)) continue;
      const h = a - t.x * c,
        d = r - t.y * c,
        u = l - t.z * c;
      h * h + d * d + u * u < 0.68 * 0.68 && (s = { id: o.id, dist: c });
    }
    return s;
  }
  update(e, t, i = 0) {
    this.lightT += e;
    const s = this.lightT >= Vr;
    s && (this.lightT = 0);
    for (const o of this.map.values())
      (s && this.world && ur(o.group, dr(this.world, o.group.position, i, 0.5)),
        (o.t += e),
        (o.group.visible =
          o.planet === this.currentPlanet && (!t || t(o.x, o.z))),
        (o.group.position.y = o.y + Math.sin(o.t * 2.2) * 0.045),
        (o.group.rotation.y = Math.PI + Math.sin(o.t * 0.8) * 0.12));
  }
}
const PR = { ROCKET: 2, SHELL: 3 },
  Die = (n) => (n === pt.SHELL ? PR.SHELL : PR.ROCKET);
function Bie(n, e, t) {
  const i = [n.x, n.y, n.z],
    s = [e.x - n.x, e.y - n.y, e.z - n.z],
    o = i.map(Math.floor),
    a = s.map(Math.sign),
    r = s.map((h) => (h === 0 ? 1 / 0 : Math.abs(1 / h))),
    l = s.map((h, d) =>
      h === 0 ? 1 / 0 : (o[d] + (h > 0 ? 1 : 0) - i[d]) / h,
    );
  let c = 0;
  for (let h = 0; h < 4096; h++) {
    if (t(o[0], o[1], o[2]))
      return { x: n.x + s[0] * c, y: n.y + s[1] * c, z: n.z + s[2] * c };
    const d = l[0] <= l[1] && l[0] <= l[2] ? 0 : l[1] <= l[2] ? 1 : 2;
    if (((c = l[d]), c > 1 || !Number.isFinite(c))) return null;
    ((o[d] += a[d]), (l[d] += r[d]));
  }
  return null;
}
