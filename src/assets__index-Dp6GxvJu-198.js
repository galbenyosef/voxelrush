// assets__index-Dp6GxvJu 198 — mesh
// Lines 107569-107910 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class fte {
  constructor(e, t) {
    w(this, "records", new Map());
    w(this, "at", 0);
    ((this.scene = e),
      (this.world = t),
      Vo(() => {
        for (const i of this.records.values())
          i.generated && i.mesh && (this.dispose(i.mesh), (i.mesh = void 0));
        this.at = 0;
      }));
  }
  set(e, t, i, s, o = !1) {
    const a = `${e},${t},${i}`,
      r = this.records.get(a);
    ((r == null ? void 0 : r.text) === s &&
      (r == null ? void 0 : r.generated) === o) ||
      (r != null && r.mesh && this.dispose(r.mesh),
      this.records.delete(a),
      s !== null &&
        this.records.set(a, { x: e, y: t, z: i, text: s, generated: o }),
      (this.at = 0));
  }
  dispose(e) {
    var t;
    (this.scene.remove(e),
      e.geometry.dispose(),
      (t = e.material.map) == null || t.dispose(),
      e.material.dispose());
  }
  clear() {
    for (const e of this.records.values()) e.mesh && this.dispose(e.mesh);
    this.records.clear();
  }
  update() {
    if (!(performance.now() < this.at)) {
      this.at = performance.now() + 250;
      for (const [, e] of this.records) {
        if (this.world.getBlock(e.x, e.y, e.z) !== v.SIGN) {
          e.mesh && (this.dispose(e.mesh), (e.mesh = void 0));
          continue;
        }
        const t = this.world.getMeta(e.x, e.y, e.z);
        if (!e.mesh) {
          const a = new bi(ute(e.generated ? Ns(e.text, z.language) : e.text));
          ((a.magFilter = Jn),
            (a.minFilter = Uo),
            (a.generateMipmaps = !0),
            (a.anisotropy = 8),
            (a.colorSpace = vi));
          const r = new gi({
            map: a,
            emissiveMap: a,
            transparent: !0,
            alphaTest: 0.35,
            depthWrite: !1,
            polygonOffset: !0,
            polygonOffsetFactor: -1,
          });
          ((e.mesh = new le(new pn(0.8, 0.45), r)), this.scene.add(e.mesh));
        }
        const i = this.world.probeLight(e.x, e.y, e.z);
        e.mesh.material.emissive.setRGB(0.55 * i, 0.5 * i, 0.42 * i);
        const s = ((t & 3) * Math.PI) / 2,
          o = t & 4 ? -0.365 : 0.056;
        (e.mesh.position.set(
          e.x + 0.5 + Math.sin(s) * o,
          e.y + 0.69,
          e.z + 0.5 + Math.cos(s) * o,
        ),
          (e.mesh.rotation.y = s));
      }
    }
  }
}
const bf = (n, e) => `${n},${e}`,
  pte = new k(1, 1, 1);
class mte {
  constructor(e, t, i) {
    w(this, "pools", new Map());
    w(this, "lids", new Map());
    w(this, "byChunk", new Map());
    w(this, "moving", new Set());
    w(this, "pendingOpen", new Set());
    w(this, "shadows", !1);
    w(this, "m", new bt());
    w(this, "q", new Jt());
    w(this, "p", new k());
    w(this, "hinge", new Jt());
    w(this, "turn", new Jt());
    w(this, "axisX", new k(1, 0, 0));
    w(this, "axisY", new k(0, 1, 0));
    ((this.scene = e), (this.material = t), (this.hooks = i));
  }
  pool(e) {
    let t = this.pools.get(e);
    return (t || ((t = this.makePool(e, 64)), this.pools.set(e, t)), t);
  }
  makePool(e, t, i) {
    const s = i ? i.mesh.geometry : jW(e),
      o = new eo(new Float32Array(t), 1).setUsage(Mn),
      a = new eo(new Float32Array(t), 1).setUsage(Mn);
    (s.setAttribute("blocklight", o), s.setAttribute("skylight", a));
    const r = new hs(s, this.material, t);
    ((r.name = e === v.MILITARY_CHEST ? "crate-lids" : "chest-lids"),
      r.instanceMatrix.setUsage(Mn),
      (r.frustumCulled = !1),
      (r.castShadow = this.shadows),
      (r.receiveShadow = !0),
      (r.count = 0));
    const l = { id: e, mesh: r, light: o, sky: a, lids: [] };
    if (i) {
      (r.instanceMatrix.array.set(i.mesh.instanceMatrix.array),
        o.array.set(i.light.array),
        a.array.set(i.sky.array),
        (l.lids = i.lids));
      for (const c of l.lids) c.pool = l;
      ((r.count = i.mesh.count), this.scene.remove(i.mesh), i.mesh.dispose());
    }
    return (this.scene.add(r), l);
  }
  writeMatrix(e) {
    const t = Cp(e.id);
    (this.turn.setFromAxisAngle(this.axisY, (-e.facing * Math.PI) / 2),
      this.hinge.setFromAxisAngle(this.axisX, Math.max(-0.05, e.angle)),
      this.p.set(0, t.hingeY, t.hingeZ - 0.5).applyQuaternion(this.turn),
      (this.p.x += e.x + 0.5),
      (this.p.y += e.y),
      (this.p.z += e.z + 0.5),
      this.q.copy(this.turn).multiply(this.hinge),
      this.m.compose(this.p, this.q, pte),
      e.pool.mesh.setMatrixAt(e.index, this.m),
      (e.pool.mesh.instanceMatrix.needsUpdate = !0));
  }
  writeLight(e) {
    const { light: t, sky: i } = this.hooks.lighting(e.x, e.y, e.z);
    (e.pool.light.setX(e.index, t),
      e.pool.sky.setX(e.index, i),
      (e.pool.light.needsUpdate = e.pool.sky.needsUpdate = !0));
  }
  sync(e, t, i, s, o) {
    const a = `${e},${t},${i}`,
      r = this.lids.get(a);
    if (!Hr(s)) {
      r && this.remove(r);
      return;
    }
    const l = kp((f, p, m) => this.hooks.getBlock(f, p, m), e, t, i, o);
    if (r && r.id === s) {
      r.facing !== l && ((r.facing = l), this.writeMatrix(r));
      return;
    }
    r && this.remove(r);
    let c = this.pool(s);
    c.mesh.count >= c.mesh.instanceMatrix.count &&
      ((c = this.makePool(s, c.mesh.instanceMatrix.count * 2, c)),
      this.pools.set(s, c));
    const h = {
      key: a,
      id: s,
      x: e,
      y: t,
      z: i,
      cx: Math.floor(e / Pe),
      cz: Math.floor(i / Pe),
      facing: l,
      angle: 0,
      vel: 0,
      open: !1,
      index: c.mesh.count++,
      pool: c,
    };
    (c.lids.push(h), this.lids.set(a, h));
    const d = bf(h.cx, h.cz);
    let u = this.byChunk.get(d);
    (u || this.byChunk.set(d, (u = new Set())),
      u.add(h),
      this.writeMatrix(h),
      this.writeLight(h),
      this.pendingOpen.delete(a) && this.setOpen(e, t, i, !0));
  }
  syncAround(e, t, i, s) {
    for (const [o, a] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const r = this.lids.get(`${e + o},${t},${i + a}`);
      r && this.sync(r.x, r.y, r.z, r.id, s(r.x, r.y, r.z));
    }
  }
  remove(e) {
    const t = e.pool,
      i = t.lids[t.lids.length - 1];
    (i !== e &&
      ((t.lids[e.index] = i),
      (i.index = e.index),
      this.writeMatrix(i),
      this.writeLight(i)),
      t.lids.pop(),
      (t.mesh.count = t.lids.length),
      (t.mesh.instanceMatrix.needsUpdate = !0),
      this.lids.delete(e.key),
      this.moving.delete(e));
    const s = bf(e.cx, e.cz),
      o = this.byChunk.get(s);
    (o == null || o.delete(e), o && !o.size && this.byChunk.delete(s));
  }
  syncChunk(e, t, i, s) {
    const o = new Set(),
      a = e * Pe,
      r = t * Pe;
    for (let l = 0; l < i.length; l++) {
      if (!Hr(i[l])) continue;
      const c = a + (l & 15),
        h = l >> 8,
        d = r + ((l >> 4) & 15);
      (o.add(`${c},${h},${d}`), this.sync(c, h, d, i[l], s[l]));
    }
    for (const l of [...(this.byChunk.get(bf(e, t)) ?? [])])
      o.has(l.key) || this.remove(l);
  }
  removeChunk(e, t) {
    for (const i of [...(this.byChunk.get(bf(e, t)) ?? [])]) this.remove(i);
  }
  relightChunk(e, t) {
    for (const i of this.byChunk.get(bf(e, t)) ?? []) this.writeLight(i);
  }
  setOpen(e, t, i, s) {
    const o = `${e},${t},${i}`,
      a = this.lids.get(o);
    if (!a) {
      s ? this.pendingOpen.add(o) : this.pendingOpen.delete(o);
      return;
    }
    a.open !== s &&
      ((a.open = s), (a.vel += s ? 5.5 : -1.5), this.moving.add(a));
  }
  isOpen(e, t, i) {
    var s;
    return (
      ((s = this.lids.get(`${e},${t},${i}`)) == null ? void 0 : s.open) ?? !1
    );
  }
  angle(e, t, i) {
    var s;
    return (
      ((s = this.lids.get(`${e},${t},${i}`)) == null ? void 0 : s.angle) ?? null
    );
  }
  get count() {
    return this.lids.size;
  }
  setShadows(e) {
    this.shadows = e;
    for (const t of this.pools.values()) t.mesh.castShadow = e;
  }
  update(e) {
    var i, s;
    if (!this.moving.size) return;
    const t = Math.min(e, 1 / 30);
    for (const o of this.moving) {
      const a = o.open ? Cp(o.id).openAngle : 0,
        r = o.open ? 70 : 95,
        l = o.open ? 8.5 : 4;
      ((o.vel += (r * (a - o.angle) - l * o.vel) * t),
        o.open || (o.vel -= 9 * t),
        (o.angle += o.vel * t),
        !o.open &&
          o.angle <= 0 &&
          (o.vel < -1.2 &&
            ((s = (i = this.hooks).onSlam) == null ||
              s.call(i, o.x, o.y, o.z, o.id, -o.vel)),
          (o.angle = 0),
          (o.vel = o.vel < -1.2 ? -o.vel * 0.22 : 0)),
        this.writeMatrix(o),
        Math.abs(o.vel) < 0.02 &&
          Math.abs(a - o.angle) < 0.004 &&
          ((o.angle = a),
          (o.vel = 0),
          this.writeMatrix(o),
          this.moving.delete(o)));
    }
  }
}
const qa = 32,
  UM = 6,
  gte = 12,
  yte = 300,
  FM = [
    "plains",
    "mountains",
    "ocean",
    "desert",
    "jungle",
    "forest",
    "winter",
    "yellowstone",
    "volcanic",
    "alpine",
    "oasis",
    "islands",
    "savanna",
    "autumn",
  ],
  hp = 240,
  jI = new Map(FM.map((n, e) => [n, e])),
  vte = new Set([
    ...de
      .filter((n) => (n == null ? void 0 : n.shape) === "bush")
      .map((n) => n.id),
    v.TALL_GRASS,
    v.DESERT_GRASS,
    v.FLOWER_RED,
    v.FLOWER_WHITE,
    v.FLOWER_BLUE,
    v.FLOWER_PINK,
    v.FLOWER_YELLOW,
    v.LEAF_LITTER,
    v.FLY_AGARIC,
    v.MUSHROOM,
    v.COBWEB,
  ]);
function bte(n, e, t, i) {
  return i === v.SAVANNA_GRASS || i === v.GRASS
    ? hp + (jI.get(rr(n, e, t)) ?? 0)
    : i & 255;
}
function cR(n, e, t) {
  const i = rr(n, e, t);
  return hp + (jI.get(i) ?? 0);
}
function zb(n) {
  var e;
  return n >= hp && n < hp + FM.length
    ? zG[FM[n - hp]]
    : (((e = de[n]) == null ? void 0 : e.color) ?? -1);
}
function wte(n) {
  return Math.max(0, Math.min(UM, Math.floor(Math.log2(Math.max(1, n)))));
}
