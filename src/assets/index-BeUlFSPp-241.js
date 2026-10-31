// index-BeUlFSPp 241 — map
// Lines 128615-128947 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const Vle = 22,
  qle = new Set([
    w.RADIO_MODULE,
    w.FISHING_ROD,
    w.FERTILIZER,
    w.WHEAT_SEEDS,
    w.GRENADE_LAUNCHER,
    w.AMMO_40MM,
    w.AMMO_9MM,
    w.AMMO_762,
    w.AMMO_338,
    w.AMMO_50AE,
    w.AMMO_556,
    w.MINIGUN,
    w.SHOTGUN,
    w.AMMO_762_HE,
    w.AMMO_338_HE,
    w.AMMO_SHELL,
    w.AMMO_SHELL_HE,
    w.AK47,
    w.GLOCK,
    w.AWP,
    w.RPG,
    w.GRENADE,
    w.AXE,
    w.COMBAT_KNIFE,
    w.WELDER,
    w.DRILL_METAL,
    w.DRILL_DIAMOND,
    w.DRILL_TITANIUM,
    w.DRILL_COMPOSITE,
    w.DRILL_LASER,
    w.LUNAR_DRILL,
    w.SPACE_ROCKET,
    w.CHAINSAW_BASIC,
    w.CHAINSAW_PRO,
    w.CHAINSAW_INDUSTRIAL,
  ]),
  CE = new Map();
oT(() => CE.clear());
function Kle(s) {
  if (!qle.has(s) && ai(s) === 0 && !Ko(s) && !or(s)) return null;
  let e = CE.get(s);
  return (e || ((e = Pd(s).group), CE.set(s, e)), e);
}
function Yle(s) {
  const e = e2(s);
  return ((e.rotation.x = -0.12), e);
}
function jle(s) {
  s.traverse((e) => {
    const t = e;
    !t.isMesh ||
      !t.material ||
      (t.material = Array.isArray(t.material)
        ? t.material.map((i) => i.clone())
        : t.material.clone());
  });
}
function Xle(s) {
  s.traverse((e) => {
    const t = e;
    if (!t.isMesh || !t.material) return;
    (Array.isArray(t.material) ? t.material : [t.material]).forEach((n) =>
      n.dispose(),
    );
  });
}
class Zle {
  constructor(e, t, i) {
    ((this.scene = e), (this.atlasTex = t), (this.world = i));
  }
  map = new Map();
  currentPlanet = Ci.EARTH;
  onTake = () => {};
  blockedNearby = !1;
  setPlanet(e) {
    this.currentPlanet = e;
    for (const t of this.map.values()) t.mesh.visible = t.planet === e;
  }
  clear() {
    for (const e of [...this.map.keys()]) this.onRemove(e);
  }
  onSpawn(e, t, i, n, o, a, r = o, l = 0, c = 0, h, d = Ci.EARTH, u) {
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
      ((p = nT(this.atlasTex, t, i > 1 ? 0.45 : 0.35)), (m = "block"));
    else {
      const y = Kle(t);
      y
        ? ((p = y.clone(!0)),
          p.scale.setScalar(0.55),
          (p.rotation.x = 0.35),
          t === w.COMBAT_KNIFE &&
            (p.scale.setScalar(1.1),
            (p.rotation.x = 0),
            p.children[0]?.rotation.set(0, 0, Math.PI / 2)),
          (m = "weapon"))
        : ((p = Yle(t)), (m = "item"));
    }
    jle(p);
    const g = r > o + 0.02;
    (p.position.set(n, g ? r : o, a),
      p.traverse((y) => {
        const b = y;
        b.isMesh && ((b.castShadow = !0), (b.receiveShadow = !0));
      }),
      u && qa(p, u, ""),
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
        fallY: g ? r : null,
        fallVel: 0,
        bounces: g ? 2 : 0,
        t: Math.random() * 6,
        requestCd: 0,
        lightT: Vc,
        planet: d,
      }));
  }
  onRemove(e) {
    const t = this.map.get(e);
    if (!t)
      return { itemId: 0, count: 0, durability: 0, suppressorDurability: 0 };
    if ((this.scene.remove(t.mesh), Gc(t.mesh), t.kind === "block")) {
      const n = t.mesh;
      n.userData.sharedGeometry || n.geometry?.dispose();
    }
    const i = t.mesh.getObjectByName("cosmetic-counter");
    return (
      i && (i.material.map?.dispose(), i.geometry.dispose()),
      Xle(t.mesh),
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
  update(e, t, i, n, o, a = () => !0) {
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
          l.lightT >= Vc &&
            ((l.lightT = 0),
            Pl(l.mesh, Il(this.world, l.mesh.position, n, 0.1))),
          l.fallY !== null &&
            ((l.fallVel -= Vle * e),
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
function Eh(s, e, t, i = [1, 1, 1], n = 0) {
  const o = new El({
      color: e,
      roughness: 0.72,
      metalness: n ? 0.45 : 0.08,
      emissive: n,
      emissiveIntensity: n ? 0.75 : 0,
    }),
    a = new Q(s, o);
  return (
    a.position.set(...t),
    a.scale.set(...i),
    (a.castShadow = !0),
    (a.receiveShadow = !0),
    a
  );
}
function Qle() {
  const s = new re(),
    e = new kt(1, 1, 1);
  s.add(
    Eh(e, 7297080, [0, 0.48, 0], [0.72, 0.82, 0.38]),
    Eh(e, 4996393, [0, 0.72, -0.22], [0.68, 0.22, 0.12]),
    Eh(e, 8546627, [0, 0.29, -0.24], [0.5, 0.3, 0.14]),
    Eh(e, 2959390, [-0.25, 0.5, -0.25], [0.07, 0.72, 0.06]),
    Eh(e, 2959390, [0.25, 0.5, -0.25], [0.07, 0.72, 0.06]),
    Eh(e, 14925155, [0, 0.43, -0.33], [0.13, 0.12, 0.05], 10183960),
  );
  const t = Eh(new Gn(0.18, 0.035, 6, 12, Math.PI), 3155740, [0, 0.91, 0.02]);
  return ((t.rotation.z = Math.PI), s.add(t), (s.rotation.y = Math.PI), s);
}
class Jle {
  constructor(e, t) {
    ((this.scene = e), (this.world = t));
  }
  map = new Map();
  currentPlanet = Ci.EARTH;
  lightT = 0;
  setPlanet(e) {
    this.currentPlanet = e;
    for (const t of this.map.values()) t.group.visible = t.planet === e;
  }
  clear() {
    for (const e of [...this.map.keys()]) this.onRemove(e);
  }
  onSpawn(e, t, i, n, o, a = Ci.EARTH) {
    if (this.map.has(e)) return;
    const r = Qle();
    (r.position.set(i, n, o),
      this.scene.add(r),
      (r.visible = a === this.currentPlanet),
      this.map.set(e, {
        id: e,
        x: i,
        y: n,
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
        const n = i;
        if (!n.isMesh) return;
        n.geometry.dispose();
        const o = Array.isArray(n.material) ? n.material : [n.material];
        for (const a of o) a.dispose();
      }),
      this.map.delete(e));
  }
  raycastHit(e, t, i) {
    let n = null;
    for (const o of this.map.values()) {
      if (o.planet !== this.currentPlanet || !o.group.visible) continue;
      const a = o.x - e.x,
        r = o.y + 0.45 - e.y,
        l = o.z - e.z,
        c = a * t.x + r * t.y + l * t.z;
      if (c < 0 || c > i || (n && c >= n.dist)) continue;
      const h = a - t.x * c,
        d = r - t.y * c,
        u = l - t.z * c;
      h * h + d * d + u * u < 0.68 * 0.68 && (n = { id: o.id, dist: c });
    }
    return n;
  }
  update(e, t, i = 0) {
    this.lightT += e;
    const n = this.lightT >= Vc;
    n && (this.lightT = 0);
    for (const o of this.map.values())
      (n && this.world && Pl(o.group, Il(this.world, o.group.position, i, 0.5)),
        (o.t += e),
        (o.group.visible =
          o.planet === this.currentPlanet && (!t || t(o.x, o.z))),
        (o.group.position.y = o.y + Math.sin(o.t * 2.2) * 0.045),
        (o.group.rotation.y = Math.PI + Math.sin(o.t * 0.8) * 0.12));
  }
}
const aL = { ROCKET: 2, SHELL: 3 },
  ece = (s) => (s === mt.SHELL ? aL.SHELL : aL.ROCKET);
function tce(s, e, t) {
  const i = [s.x, s.y, s.z],
    n = [e.x - s.x, e.y - s.y, e.z - s.z],
    o = i.map(Math.floor),
    a = n.map(Math.sign),
    r = n.map((h) => (h === 0 ? 1 / 0 : Math.abs(1 / h))),
    l = n.map((h, d) =>
      h === 0 ? 1 / 0 : (o[d] + (h > 0 ? 1 : 0) - i[d]) / h,
    );
  let c = 0;
  for (let h = 0; h < 4096; h++) {
    if (t(o[0], o[1], o[2]))
      return { x: s.x + n[0] * c, y: s.y + n[1] * c, z: s.z + n[2] * c };
    const d = l[0] <= l[1] && l[0] <= l[2] ? 0 : l[1] <= l[2] ? 1 : 2;
    if (((c = l[d]), c > 1 || !Number.isFinite(c))) return null;
    ((o[d] += a[d]), (l[d] += r[d]));
  }
  return null;
}
const ice = 18,
  fl = 40,
  Ah = 1 / 60;
