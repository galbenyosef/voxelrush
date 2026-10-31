// index-BeUlFSPp 220 — mesh
// Lines 114240-114589 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Tre {
  constructor(e, t) {
    ((this.scene = e),
      (this.world = t),
      da(() => {
        for (const i of this.records.values())
          i.generated && i.mesh && (this.dispose(i.mesh), (i.mesh = void 0));
        this.at = 0;
      }));
  }
  records = new Map();
  at = 0;
  set(e, t, i, n, o = !1) {
    const a = `${e},${t},${i}`,
      r = this.records.get(a);
    (r?.text === n && r?.generated === o) ||
      (r?.mesh && this.dispose(r.mesh),
      this.records.delete(a),
      n !== null &&
        this.records.set(a, { x: e, y: t, z: i, text: n, generated: o }),
      (this.at = 0));
  }
  dispose(e) {
    (this.scene.remove(e),
      e.geometry.dispose(),
      e.material.map?.dispose(),
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
          const a = new Si(Are(e.generated ? kf(e.text, Oa()) : e.text));
          ((a.magFilter = pn),
            (a.minFilter = za),
            (a.generateMipmaps = !0),
            (a.anisotropy = 8),
            (a.colorSpace = Ii));
          const r = new Pi({
            map: a,
            emissiveMap: a,
            transparent: !0,
            alphaTest: 0.35,
            depthWrite: !1,
            polygonOffset: !0,
            polygonOffsetFactor: -1,
          });
          ((e.mesh = new Q(new ms(0.8, 0.45), r)), this.scene.add(e.mesh));
        }
        const i = this.world.probeLight(e.x, e.y, e.z);
        e.mesh.material.emissive.setRGB(0.55 * i, 0.5 * i, 0.42 * i);
        const n = ((t & 3) * Math.PI) / 2,
          o = t & 4 ? -0.365 : 0.056;
        (e.mesh.position.set(
          e.x + 0.5 + Math.sin(n) * o,
          e.y + 0.69,
          e.z + 0.5 + Math.cos(n) * o,
        ),
          (e.mesh.rotation.y = n));
      }
    }
  }
}
const Xp = (s, e) => `${s},${e}`,
  xre = new k(1, 1, 1);
class _re {
  constructor(e, t, i) {
    ((this.scene = e), (this.material = t), (this.hooks = i));
  }
  pools = new Map();
  lids = new Map();
  byChunk = new Map();
  moving = new Set();
  pendingOpen = new Set();
  shadows = !1;
  m = new Rt();
  q = new hi();
  p = new k();
  hinge = new hi();
  turn = new hi();
  axisX = new k(1, 0, 0);
  axisY = new k(0, 1, 0);
  pool(e) {
    let t = this.pools.get(e);
    return (t || ((t = this.makePool(e, 64)), this.pools.set(e, t)), t);
  }
  makePool(e, t, i) {
    const n = i ? i.mesh.geometry : Uj(e),
      o = new cn(new Float32Array(t), 1).setUsage(Bi),
      a = new cn(new Float32Array(t), 1).setUsage(Bi);
    (n.setAttribute("blocklight", o), n.setAttribute("skylight", a));
    const r = new On(n, this.material, t);
    ((r.name = e === v.MILITARY_CHEST ? "crate-lids" : "chest-lids"),
      r.instanceMatrix.setUsage(Bi),
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
    const t = vm(e.id);
    (this.turn.setFromAxisAngle(this.axisY, (-e.facing * Math.PI) / 2),
      this.hinge.setFromAxisAngle(this.axisX, Math.max(-0.05, e.angle)),
      this.p.set(0, t.hingeY, t.hingeZ - 0.5).applyQuaternion(this.turn),
      (this.p.x += e.x + 0.5),
      (this.p.y += e.y),
      (this.p.z += e.z + 0.5),
      this.q.copy(this.turn).multiply(this.hinge),
      this.m.compose(this.p, this.q, xre),
      e.pool.mesh.setMatrixAt(e.index, this.m),
      (e.pool.mesh.instanceMatrix.needsUpdate = !0));
  }
  writeLight(e) {
    const { light: t, sky: i } = this.hooks.lighting(e.x, e.y, e.z);
    (e.pool.light.setX(e.index, t),
      e.pool.sky.setX(e.index, i),
      (e.pool.light.needsUpdate = e.pool.sky.needsUpdate = !0));
  }
  sync(e, t, i, n, o) {
    const a = `${e},${t},${i}`,
      r = this.lids.get(a);
    if (!Cl(n)) {
      r && this.remove(r);
      return;
    }
    const l = bm((f, p, m) => this.hooks.getBlock(f, p, m), e, t, i, o);
    if (r && r.id === n) {
      r.facing !== l && ((r.facing = l), this.writeMatrix(r));
      return;
    }
    r && this.remove(r);
    let c = this.pool(n);
    c.mesh.count >= c.mesh.instanceMatrix.count &&
      ((c = this.makePool(n, c.mesh.instanceMatrix.count * 2, c)),
      this.pools.set(n, c));
    const h = {
      key: a,
      id: n,
      x: e,
      y: t,
      z: i,
      cx: Math.floor(e / ke),
      cz: Math.floor(i / ke),
      facing: l,
      angle: 0,
      vel: 0,
      open: !1,
      index: c.mesh.count++,
      pool: c,
    };
    (c.lids.push(h), this.lids.set(a, h));
    const d = Xp(h.cx, h.cz);
    let u = this.byChunk.get(d);
    (u || this.byChunk.set(d, (u = new Set())),
      u.add(h),
      this.writeMatrix(h),
      this.writeLight(h),
      this.pendingOpen.delete(a) && this.setOpen(e, t, i, !0));
  }
  syncAround(e, t, i, n) {
    for (const [o, a] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const r = this.lids.get(`${e + o},${t},${i + a}`);
      r && this.sync(r.x, r.y, r.z, r.id, n(r.x, r.y, r.z));
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
    const n = Xp(e.cx, e.cz),
      o = this.byChunk.get(n);
    (o?.delete(e), o && !o.size && this.byChunk.delete(n));
  }
  syncChunk(e, t, i, n) {
    const o = new Set(),
      a = e * ke,
      r = t * ke;
    for (let l = 0; l < i.length; l++) {
      if (!Cl(i[l])) continue;
      const c = a + (l & 15),
        h = l >> 8,
        d = r + ((l >> 4) & 15);
      (o.add(`${c},${h},${d}`), this.sync(c, h, d, i[l], n[l]));
    }
    for (const l of [...(this.byChunk.get(Xp(e, t)) ?? [])])
      o.has(l.key) || this.remove(l);
  }
  removeChunk(e, t) {
    for (const i of [...(this.byChunk.get(Xp(e, t)) ?? [])]) this.remove(i);
  }
  relightChunk(e, t) {
    for (const i of this.byChunk.get(Xp(e, t)) ?? []) this.writeLight(i);
  }
  setOpen(e, t, i, n) {
    const o = `${e},${t},${i}`,
      a = this.lids.get(o);
    if (!a) {
      n ? this.pendingOpen.add(o) : this.pendingOpen.delete(o);
      return;
    }
    a.open !== n &&
      ((a.open = n), (a.vel += n ? 5.5 : -1.5), this.moving.add(a));
  }
  isOpen(e, t, i) {
    return this.lids.get(`${e},${t},${i}`)?.open ?? !1;
  }
  angle(e, t, i) {
    return this.lids.get(`${e},${t},${i}`)?.angle ?? null;
  }
  get count() {
    return this.lids.size;
  }
  setShadows(e) {
    this.shadows = e;
    for (const t of this.pools.values()) t.mesh.castShadow = e;
  }
  update(e) {
    if (!this.moving.size) return;
    const t = Math.min(e, 1 / 30);
    for (const i of this.moving) {
      const n = i.open ? vm(i.id).openAngle : 0,
        o = i.open ? 70 : 95,
        a = i.open ? 8.5 : 4;
      ((i.vel += (o * (n - i.angle) - a * i.vel) * t),
        i.open || (i.vel -= 9 * t),
        (i.angle += i.vel * t),
        !i.open &&
          i.angle <= 0 &&
          (i.vel < -1.2 && this.hooks.onSlam?.(i.x, i.y, i.z, i.id, -i.vel),
          (i.angle = 0),
          (i.vel = i.vel < -1.2 ? -i.vel * 0.22 : 0)),
        this.writeMatrix(i),
        Math.abs(i.vel) < 0.02 &&
          Math.abs(n - i.angle) < 0.004 &&
          ((i.angle = n),
          (i.vel = 0),
          this.writeMatrix(i),
          this.moving.delete(i)));
    }
  }
}
const Nr = 32,
  TE = 6,
  Rre = 12,
  kre = 300,
  xE = [
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
  j1 = 240,
  h9 = new Map(xE.map((s, e) => [s, e])),
  Cre = new Set([
    ...le.filter((s) => s?.shape === "bush").map((s) => s.id),
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
function Lre(s, e, t, i) {
  return i === v.SAVANNA_GRASS || i === v.GRASS
    ? j1 + (h9.get(Zr(s, e, t)) ?? 0)
    : i & 255;
}
function HC(s, e, t) {
  const i = Zr(s, e, t);
  return j1 + (h9.get(i) ?? 0);
}
function lM(s) {
  return s >= j1 && s < j1 + xE.length ? VY[xE[s - j1]] : (le[s]?.color ?? -1);
}
function Ire(s) {
  return Math.max(0, Math.min(TE, Math.floor(Math.log2(Math.max(1, s)))));
}
const Zp = ke * ke * jt,
  Pre = Cre,
  _E = new Set([
    v.SCARECROW,
    v.GRAVESTONE,
    v.GRAVE_CROSS,
    v.CAULDRON,
    v.COFFIN,
    v.SKULL,
    v.JACK_O_LANTERN,
    v.DEAD_LOG,
  ]),
  Ore = new Set([
    v.TALL_GRASS,
    v.FLOWER_RED,
    v.FLOWER_WHITE,
    v.FLOWER_BLUE,
    v.FLOWER_PINK,
    v.FLOWER_YELLOW,
    v.LEAF_LITTER,
    v.SAVANNA_GRASS,
    v.DESERT_GRASS,
    v.PUMPKIN,
  ]);
