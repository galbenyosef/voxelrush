// index-BeUlFSPp 98 — halo
// Lines 59920-60177 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class pZ {
  constructor(e, t = () => 0, i = 256) {
    ((this.scene = e), (this.groundAt = t));
    const n = new Tt(0.1, 0.102, 0.16, 12, 1, !0).translate(0, -0.03, 0),
      o = new ws(0.1, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2).translate(
        0,
        0.05,
        0,
      ),
      a = Eo([n.toNonIndexed(), o.toNonIndexed()], !1);
    (n.dispose(),
      o.dispose(),
      (this.lensMat = new Zt({
        color: this.off.clone(),
        toneMapped: !1,
        transparent: !0,
        opacity: 0.94,
      })),
      (this.lens = new On(a, this.lensMat, i)),
      (this.lens.name = "aviation-light-lens"),
      (this.haloMat = new Gi({
        vertexShader: uZ,
        fragmentShader: fZ,
        uniforms: {
          uFlash: { value: 0 },
          uGain: { value: 1 },
          uSize: { value: 1.7 },
        },
        transparent: !0,
        depthWrite: !1,
        blending: rs,
        toneMapped: !1,
      })));
    const r = new ms(1, 1);
    (r.setAttribute("aLevel", new cn(new Float32Array(i), 1).setUsage(Bi)),
      (this.halo = new On(r, this.haloMat, i)),
      (this.halo.name = "aviation-light-halo"));
    for (const l of [this.lens, this.halo])
      ((l.count = 0),
        (l.frustumCulled = !1),
        l.instanceMatrix.setUsage(Bi),
        e.add(l));
    this.halo.renderOrder = 6;
  }
  beacons = new Map();
  list = [];
  byChunk = new Map();
  lens;
  halo;
  lensMat;
  haloMat;
  m = new Rt();
  off = new Ge(3803142);
  on = new Ge(16722456).multiplyScalar(1.6);
  time = 0;
  enabled = !0;
  get count() {
    return this.list.length;
  }
  setEnabled(e) {
    ((this.enabled = e),
      (this.lens.visible = this.halo.visible = e && this.list.length > 0));
  }
  grow() {
    const e = this.lens.instanceMatrix.count * 2,
      t = this.halo.geometry.getAttribute("aLevel"),
      i = new cn(new Float32Array(e), 1).setUsage(Bi);
    (i.array.set(t.array), this.halo.geometry.setAttribute("aLevel", i));
    for (const n of ["lens", "halo"]) {
      const o = this[n],
        a = new On(o.geometry, o.material, e);
      (o.instanceColor &&
        ((a.instanceColor = new cn(new Float32Array(e * 3), 3)),
        a.instanceColor.array.set(o.instanceColor.array)),
        (a.name = o.name),
        (a.frustumCulled = !1),
        (a.renderOrder = o.renderOrder),
        a.instanceMatrix.setUsage(Bi),
        a.instanceMatrix.array.set(o.instanceMatrix.array),
        (a.count = o.count),
        this.scene.remove(o),
        o.dispose(),
        this.scene.add(a),
        (this[n] = a));
    }
  }
  shade = new Ge();
  write(e) {
    (this.m.makeTranslation(e.x + 0.5, e.y + qR, e.z + 0.5),
      this.lens.setMatrixAt(e.index, this.m),
      this.lens.setColorAt(
        e.index,
        this.shade.setScalar(0.75 + 0.25 * e.level),
      ),
      (this.lens.instanceColor.needsUpdate = !0));
    const t = this.halo.geometry.getAttribute("aLevel");
    (t.setX(e.index, e.level),
      (t.needsUpdate = !0),
      this.m.makeTranslation(e.x + 0.5, e.y + qR + 0.02, e.z + 0.5),
      this.halo.setMatrixAt(e.index, this.m),
      (this.lens.instanceMatrix.needsUpdate =
        this.halo.instanceMatrix.needsUpdate =
          !0));
  }
  sync(e, t, i, n) {
    const o = `${e},${t},${i}`,
      a = this.beacons.get(o);
    if (n !== v.AVIATION_LIGHT) {
      a && this.remove(a);
      return;
    }
    if (a) return;
    this.list.length >= this.lens.instanceMatrix.count && this.grow();
    const r = Vb(Math.floor(e / ke), Math.floor(i / ke)),
      l = t - this.groundAt(e, i),
      c = Math.min(1, Math.max(0, (l - 4) / 16)),
      h = {
        key: o,
        x: e,
        y: t,
        z: i,
        ck: r,
        index: this.list.length,
        level: c,
      };
    (this.list.push(h), this.beacons.set(o, h));
    let d = this.byChunk.get(r);
    (d || this.byChunk.set(r, (d = new Set())),
      d.add(h),
      (this.lens.count = this.halo.count = this.list.length),
      this.write(h));
  }
  remove(e) {
    const t = this.list[this.list.length - 1];
    (t !== e && ((this.list[e.index] = t), (t.index = e.index), this.write(t)),
      this.list.pop(),
      (this.lens.count = this.halo.count = this.list.length),
      this.beacons.delete(e.key));
    const i = this.byChunk.get(e.ck);
    (i?.delete(e), i && !i.size && this.byChunk.delete(e.ck));
  }
  syncChunk(e, t, i) {
    const n = Vb(e, t),
      o = new Set(),
      a = e * ke,
      r = t * ke;
    for (let l = 0; l < i.length; l++) {
      if (i[l] !== v.AVIATION_LIGHT) continue;
      const c = a + (l & 15),
        h = l >> 8,
        d = r + ((l >> 4) & 15);
      (o.add(`${c},${h},${d}`), this.sync(c, h, d, v.AVIATION_LIGHT));
    }
    for (const l of [...(this.byChunk.get(n) ?? [])])
      o.has(l.key) || this.remove(l);
  }
  removeChunk(e, t) {
    for (const i of [...(this.byChunk.get(Vb(e, t)) ?? [])]) this.remove(i);
  }
  update(e, t = 0) {
    this.time += e;
    const i = this.enabled && this.list.length > 0;
    if (((this.lens.visible = this.halo.visible = i), !i)) return;
    const n = KG(this.time);
    (this.lensMat.color.copy(this.off).lerp(this.on, n),
      (this.haloMat.uniforms.uFlash.value = n),
      (this.haloMat.uniforms.uGain.value =
        1.5 - Math.min(1, Math.max(0, t)) * 0.95));
  }
  dispose() {
    for (const e of [this.lens, this.halo])
      (this.scene.remove(e), e.geometry.dispose(), e.dispose());
    (this.lensMat.dispose(), this.haloMat.dispose());
  }
}
const mZ = new ws(1, 8, 6),
  gZ = (() => {
    if (typeof document > "u") return null;
    const s = document.createElement("canvas");
    s.width = s.height = 64;
    const e = s.getContext("2d"),
      t = e.createRadialGradient(32, 32, 0, 32, 32, 32);
    (t.addColorStop(0, "rgba(255,255,255,1)"),
      t.addColorStop(0.22, "rgba(255,255,255,.55)"),
      t.addColorStop(1, "rgba(255,255,255,0)"),
      (e.fillStyle = t),
      e.fillRect(0, 0, 64, 64));
    const i = new Si(s);
    return ((i.colorSpace = Ii), i);
  })(),
  p4 = {
    red: 16722458,
    green: 2883434,
    white: 16774888,
    beacon: 16720916,
    strobe: 16777215,
  },
  m4 = new Map(),
  g4 = new Map();
function yZ(s) {
  let e = m4.get(s),
    t = g4.get(s);
  return (
    e ||
      ((e = new Zt({ color: p4[s], toneMapped: !1 })),
      (e.userData = { navLight: s, camoEligible: !1 }),
      m4.set(s, e)),
    t ||
      ((t = new hn({
        map: gZ,
        color: p4[s],
        blending: rs,
        depthWrite: !1,
        transparent: !0,
        toneMapped: !1,
        opacity: s === "beacon" || s === "strobe" ? 0 : 0.55,
      })),
      g4.set(s, t)),
    { lens: e, halo: t }
  );
}
function Fn(s, e, t, i, n, o = 0.07) {
  const { lens: a, halo: r } = yZ(e),
    l = new re();
  ((l.name = `nav-light-${e}`),
    l.position.set(t, i, n),
    (l.userData.navLight = e));
  const c = new Q(mZ, a);
  (c.scale.setScalar(o), (c.castShadow = !1));
  const h = new Ws(r);
  return (
    h.scale.setScalar(o * (e === "strobe" ? 22 : 14)),
    (h.renderOrder = 6),
    l.add(c, h),
    s.add(l),
    l
  );
}
function vZ(s, e) {
  const t = 1 - Math.min(1, Math.max(0, e)),
    i = s % 1.2,
    n = i < 0.12 ? 1 : i < 0.3 ? 1 - (i - 0.12) / 0.18 : 0,
    o = (s + 0.45) % 1.2,
    a = o < 0.05 || (o > 0.16 && o < 0.21) ? 1 : 0,
    r = 0.25 + t * 0.4;
  for (const [l, c] of g4)
    c.opacity =
      l === "beacon"
        ? n * (0.45 + t * 0.55)
        : l === "strobe"
          ? a * (0.6 + t * 0.4)
          : r;
  for (const [l, c] of m4) {
    const h =
      l === "beacon" ? 0.2 + n * 1.4 : l === "strobe" ? 0.25 + a * 1.6 : 1.1;
    c.color.setHex(p4[l]).multiplyScalar(h);
  }
}
