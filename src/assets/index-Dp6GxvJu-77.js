// index-Dp6GxvJu 77 — halo
// Lines 52517-52774 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class E$ {
  constructor(e, t = () => 0, i = 256) {
    w(this, "beacons", new Map());
    w(this, "list", []);
    w(this, "byChunk", new Map());
    w(this, "lens");
    w(this, "halo");
    w(this, "lensMat");
    w(this, "haloMat");
    w(this, "m", new bt());
    w(this, "off", new ze(3803142));
    w(this, "on", new ze(16722456).multiplyScalar(1.6));
    w(this, "time", 0);
    w(this, "enabled", !0);
    w(this, "shade", new ze());
    ((this.scene = e), (this.groundAt = t));
    const s = new xt(0.1, 0.102, 0.16, 12, 1, !0).translate(0, -0.03, 0),
      o = new mn(0.1, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2).translate(
        0,
        0.05,
        0,
      ),
      a = no([s.toNonIndexed(), o.toNonIndexed()], !1);
    (s.dispose(),
      o.dispose(),
      (this.lensMat = new qt({
        color: this.off.clone(),
        toneMapped: !1,
        transparent: !0,
        opacity: 0.94,
      })),
      (this.lens = new hs(a, this.lensMat, i)),
      (this.lens.name = "aviation-light-lens"),
      (this.haloMat = new sn({
        vertexShader: M$,
        fragmentShader: S$,
        uniforms: {
          uFlash: { value: 0 },
          uGain: { value: 1 },
          uSize: { value: 1.7 },
        },
        transparent: !0,
        depthWrite: !1,
        blending: cn,
        toneMapped: !1,
      })));
    const r = new pn(1, 1);
    (r.setAttribute("aLevel", new eo(new Float32Array(i), 1).setUsage(Mn)),
      (this.halo = new hs(r, this.haloMat, i)),
      (this.halo.name = "aviation-light-halo"));
    for (const l of [this.lens, this.halo])
      ((l.count = 0),
        (l.frustumCulled = !1),
        l.instanceMatrix.setUsage(Mn),
        e.add(l));
    this.halo.renderOrder = 6;
  }
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
      i = new eo(new Float32Array(e), 1).setUsage(Mn);
    (i.array.set(t.array), this.halo.geometry.setAttribute("aLevel", i));
    for (const s of ["lens", "halo"]) {
      const o = this[s],
        a = new hs(o.geometry, o.material, e);
      (o.instanceColor &&
        ((a.instanceColor = new eo(new Float32Array(e * 3), 3)),
        a.instanceColor.array.set(o.instanceColor.array)),
        (a.name = o.name),
        (a.frustumCulled = !1),
        (a.renderOrder = o.renderOrder),
        a.instanceMatrix.setUsage(Mn),
        a.instanceMatrix.array.set(o.instanceMatrix.array),
        (a.count = o.count),
        this.scene.remove(o),
        o.dispose(),
        this.scene.add(a),
        (this[s] = a));
    }
  }
  write(e) {
    (this.m.makeTranslation(e.x + 0.5, e.y + EA, e.z + 0.5),
      this.lens.setMatrixAt(e.index, this.m),
      this.lens.setColorAt(
        e.index,
        this.shade.setScalar(0.75 + 0.25 * e.level),
      ),
      (this.lens.instanceColor.needsUpdate = !0));
    const t = this.halo.geometry.getAttribute("aLevel");
    (t.setX(e.index, e.level),
      (t.needsUpdate = !0),
      this.m.makeTranslation(e.x + 0.5, e.y + EA + 0.02, e.z + 0.5),
      this.halo.setMatrixAt(e.index, this.m),
      (this.lens.instanceMatrix.needsUpdate =
        this.halo.instanceMatrix.needsUpdate =
          !0));
  }
  sync(e, t, i, s) {
    const o = `${e},${t},${i}`,
      a = this.beacons.get(o);
    if (s !== BLOCK.AVIATION_LIGHT) {
      a && this.remove(a);
      return;
    }
    if (a) return;
    this.list.length >= this.lens.instanceMatrix.count && this.grow();
    const r = C5(Math.floor(e / Pe), Math.floor(i / Pe)),
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
    (i == null || i.delete(e), i && !i.size && this.byChunk.delete(e.ck));
  }
  syncChunk(e, t, i) {
    const s = C5(e, t),
      o = new Set(),
      a = e * Pe,
      r = t * Pe;
    for (let l = 0; l < i.length; l++) {
      if (i[l] !== BLOCK.AVIATION_LIGHT) continue;
      const c = a + (l & 15),
        h = l >> 8,
        d = r + ((l >> 4) & 15);
      (o.add(`${c},${h},${d}`), this.sync(c, h, d, BLOCK.AVIATION_LIGHT));
    }
    for (const l of [...(this.byChunk.get(s) ?? [])])
      o.has(l.key) || this.remove(l);
  }
  removeChunk(e, t) {
    for (const i of [...(this.byChunk.get(C5(e, t)) ?? [])]) this.remove(i);
  }
  update(e, t = 0) {
    this.time += e;
    const i = this.enabled && this.list.length > 0;
    if (((this.lens.visible = this.halo.visible = i), !i)) return;
    const s = lz(this.time);
    (this.lensMat.color.copy(this.off).lerp(this.on, s),
      (this.haloMat.uniforms.uFlash.value = s),
      (this.haloMat.uniforms.uGain.value =
        1.5 - Math.min(1, Math.max(0, t)) * 0.95));
  }
  dispose() {
    for (const e of [this.lens, this.halo])
      (this.scene.remove(e), e.geometry.dispose(), e.dispose());
    (this.lensMat.dispose(), this.haloMat.dispose());
  }
}
const x$ = new mn(1, 8, 6),
  T$ = (() => {
    if (typeof document > "u") return null;
    const n = document.createElement("canvas");
    n.width = n.height = 64;
    const e = n.getContext("2d"),
      t = e.createRadialGradient(32, 32, 0, 32, 32, 32);
    (t.addColorStop(0, "rgba(255,255,255,1)"),
      t.addColorStop(0.22, "rgba(255,255,255,.55)"),
      t.addColorStop(1, "rgba(255,255,255,0)"),
      (e.fillStyle = t),
      e.fillRect(0, 0, 64, 64));
    const i = new bi(n);
    return ((i.colorSpace = vi), i);
  })(),
  Nw = {
    red: 16722458,
    green: 2883434,
    white: 16774888,
    beacon: 16720916,
    strobe: 16777215,
  },
  Dw = new Map(),
  Bw = new Map();
function A$(n) {
  let e = Dw.get(n),
    t = Bw.get(n);
  return (
    e ||
      ((e = new qt({ color: Nw[n], toneMapped: !1 })),
      (e.userData = { navLight: n, camoEligible: !1 }),
      Dw.set(n, e)),
    t ||
      ((t = new es({
        map: T$,
        color: Nw[n],
        blending: cn,
        depthWrite: !1,
        transparent: !0,
        toneMapped: !1,
        opacity: n === "beacon" || n === "strobe" ? 0 : 0.55,
      })),
      Bw.set(n, t)),
    { lens: e, halo: t }
  );
}
function Es(n, e, t, i, s, o = 0.07) {
  const { lens: a, halo: r } = A$(e),
    l = new pe();
  ((l.name = `nav-light-${e}`),
    l.position.set(t, i, s),
    (l.userData.navLight = e));
  const c = new le(x$, a);
  (c.scale.setScalar(o), (c.castShadow = !1));
  const h = new os(r);
  return (
    h.scale.setScalar(o * (e === "strobe" ? 22 : 14)),
    (h.renderOrder = 6),
    l.add(c, h),
    n.add(l),
    l
  );
}
function _$(n, e) {
  const t = 1 - Math.min(1, Math.max(0, e)),
    i = n % 1.2,
    s = i < 0.12 ? 1 : i < 0.3 ? 1 - (i - 0.12) / 0.18 : 0,
    o = (n + 0.45) % 1.2,
    a = o < 0.05 || (o > 0.16 && o < 0.21) ? 1 : 0,
    r = 0.25 + t * 0.4;
  for (const [l, c] of Bw)
    c.opacity =
      l === "beacon"
        ? s * (0.45 + t * 0.55)
        : l === "strobe"
          ? a * (0.6 + t * 0.4)
          : r;
  for (const [l, c] of Dw) {
    const h =
      l === "beacon" ? 0.2 + s * 1.4 : l === "strobe" ? 0.25 + a * 1.6 : 1.1;
    c.color.setHex(Nw[l]).multiplyScalar(h);
  }
}
