// index-BeUlFSPp 254 — math
// Lines 134307-134585 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class N0e {
  constructor(e, t, i) {
    ((this.renderer = e),
      (this.scene = t),
      (this.camera = i),
      this.opticLight.layers.set(0),
      this.scene.add(this.opticLight));
  }
  mode = "off";
  cockpitNightVision = !1;
  setCockpitNightVision(e) {
    e !== this.cockpitNightVision &&
      ((this.cockpitNightVision = e), this.setMode("off"));
  }
  moduleId = 0;
  durability = 0;
  wearAccumulator = 0;
  opticLight = new z0(12124100, 1385242, 0);
  heatScene = new Cd();
  heatProxies = new Map();
  warmMaterial = new Zt({
    color: 16753434,
    transparent: !0,
    opacity: 0.62,
    depthTest: !0,
    depthWrite: !1,
    blending: rs,
    toneMapped: !1,
    polygonOffset: !0,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
  });
  coldMaterial = new Zt({
    color: 2727167,
    transparent: !0,
    opacity: 0.56,
    depthTest: !0,
    depthWrite: !1,
    blending: rs,
    toneMapped: !1,
    polygonOffset: !0,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1,
  });
  sync(e, t) {
    ((this.moduleId = Wc(e) ? e : 0),
      (this.durability = this.moduleId
        ? Math.max(0, Math.min(Sr(this.moduleId), t))
        : 0),
      !this.cockpitNightVision &&
        (!this.moduleId || this.durability <= 0) &&
        this.setMode("off"),
      this.updateHud());
  }
  toggle() {
    return this.cockpitNightVision
      ? (this.setMode(this.mode === "off" ? "nightVision" : "off"),
        this.mode !== "off")
      : !this.moduleId || this.durability <= 0
        ? (this.setMode("off"), !1)
        : (this.mode !== "off"
            ? this.setMode("off")
            : this.setMode(q5[this.moduleId].kind),
          this.mode !== "off");
  }
  setMode(e) {
    ((this.mode = e),
      document.body.classList.toggle("vision-night", e === "nightVision"),
      document.body.classList.toggle("vision-thermal", e === "thermal"),
      (this.renderer.toneMappingExposure =
        e === "nightVision" ? 1.35 : e === "thermal" ? 1.08 : 1.15),
      e === "off" && (this.opticLight.intensity = 0),
      this.updateHud());
  }
  updateLighting(e) {
    this.opticLight.intensity =
      this.mode === "nightVision"
        ? 0.18 + (1 - Math.max(0, Math.min(1, e))) * 2.4
        : this.mode === "thermal"
          ? 0.28 + (1 - Math.max(0, Math.min(1, e))) * 1
          : 0;
  }
  tick(e) {
    if (this.cockpitNightVision || this.mode === "off" || this.durability <= 0)
      return 0;
    this.wearAccumulator += e;
    const t = Math.floor(this.wearAccumulator);
    return (
      t > 0 &&
        ((this.wearAccumulator -= t),
        (this.durability = Math.max(0, this.durability - t)),
        this.durability <= 0 && this.setMode("off"),
        this.updateHud()),
      t
    );
  }
  renderThermal(e, t = [], i = !1) {
    if (this.mode !== "thermal" && !i) return;
    ((this.warmMaterial.depthTest = this.coldMaterial.depthTest = !i),
      (this.warmMaterial.opacity = i ? 0.32 : 0.62),
      (this.coldMaterial.opacity = i ? 0.22 : 0.56));
    const n = new Set(),
      o = (r, l) => {
        for (const c of r)
          c.traverse((h) => {
            const d = h;
            if (!d.isMesh || !d.visible) return;
            n.add(d);
            let u = this.heatProxies.get(d);
            if (!u) {
              if (d.isSkinnedMesh) {
                const f = d,
                  p = new uI(d.geometry, l);
                ((p.bindMode = f.bindMode),
                  p.bind(f.skeleton, f.bindMatrix),
                  p.bindMatrixInverse.copy(f.bindMatrixInverse),
                  (u = p));
              } else u = new Q(d.geometry, l);
              ((u.matrixAutoUpdate = !1),
                (u.frustumCulled = !1),
                this.heatProxies.set(d, u),
                this.heatScene.add(u));
            }
            ((u.material = l),
              (u.geometry = d.geometry),
              u.matrix.copy(d.matrixWorld));
          });
      };
    (o(e, this.warmMaterial), o(t, this.coldMaterial));
    for (const [r, l] of this.heatProxies)
      n.has(r) || (this.heatScene.remove(l), this.heatProxies.delete(r));
    const a = this.renderer.autoClear;
    ((this.renderer.autoClear = !1),
      this.renderer.render(this.heatScene, this.camera),
      (this.renderer.autoClear = a));
  }
  updateHud() {
    const e = document.getElementById("visionhud");
    if (!e) return;
    const t =
      this.mode !== "off" && (this.cockpitNightVision || this.moduleId > 0);
    (e.classList.toggle("hidden", !t),
      e.classList.toggle("thermal", this.mode === "thermal"));
    const i = document.getElementById("visionname"),
      n = document.getElementById("visiondurability"),
      o = document.getElementById("visiondurabilityfill");
    (i &&
      (i.textContent = this.cockpitNightVision
        ? "JET NVG"
        : this.moduleId === w.THERMAL_GOGGLES
          ? "THERMAL"
          : "NVG"),
      n &&
        (n.textContent = this.cockpitNightVision
          ? "∞"
          : `${Math.ceil(this.durability)} s`),
      o &&
        (o.style.width = this.cockpitNightVision
          ? "100%"
          : `${Math.round((this.durability / Math.max(1, Sr(this.moduleId))) * 100)}%`));
  }
}
class D0e {
  p1 = null;
  p2 = null;
  onMsg = () => {};
  sendOp = () => {};
  box;
  lines;
  constructor(e) {
    const t = new kt(1, 1, 1);
    ((this.box = new Q(
      t,
      new Zt({
        color: 3399167,
        transparent: !0,
        opacity: 0.14,
        depthWrite: !1,
      }),
    )),
      (this.lines = new kl(
        new tv(t),
        new Zo({
          color: 6746367,
          depthTest: !1,
          transparent: !0,
          opacity: 0.9,
        }),
      )),
      (this.box.visible = !1),
      (this.lines.visible = !1),
      (this.box.renderOrder = zi.editBox),
      (this.lines.renderOrder = zi.editLines),
      e.add(this.box, this.lines));
  }
  setPoint(e, t, i, n) {
    (e === 1 ? (this.p1 = [t, i, n]) : (this.p2 = [t, i, n]),
      this.onMsg(
        1,
        `${z("wePoint", { n: e, x: t, y: i, z: n })}${this.p1 && this.p2 ? ` (${z("weVolume", { volume: this.volume() })})` : ""}`,
      ),
      this.refresh());
  }
  volume() {
    return !this.p1 || !this.p2
      ? 0
      : (Math.abs(this.p1[0] - this.p2[0]) + 1) *
          (Math.abs(this.p1[1] - this.p2[1]) + 1) *
          (Math.abs(this.p1[2] - this.p2[2]) + 1);
  }
  refresh() {
    const e = this.p1 ?? this.p2;
    if (!e) return;
    const t = this.p1 && this.p2 ? this.p2 : e,
      i = [Math.min(e[0], t[0]), Math.min(e[1], t[1]), Math.min(e[2], t[2])],
      n = [
        Math.max(e[0], t[0]) + 1,
        Math.max(e[1], t[1]) + 1,
        Math.max(e[2], t[2]) + 1,
      ];
    (this.box.position.set(
      (i[0] + n[0]) / 2,
      (i[1] + n[1]) / 2,
      (i[2] + n[2]) / 2,
    ),
      this.box.scale.set(
        n[0] - i[0] + 0.04,
        n[1] - i[1] + 0.04,
        n[2] - i[2] + 0.04,
      ),
      this.lines.position.copy(this.box.position),
      this.lines.scale.copy(this.box.scale),
      (this.box.visible = !0),
      (this.lines.visible = !0));
  }
  clearSelection() {
    ((this.p1 = null),
      (this.p2 = null),
      (this.box.visible = !1),
      (this.lines.visible = !1));
  }
  handleCommand(e) {
    if (!e.startsWith("//")) return !1;
    const t = e.slice(2).trim().split(/\s+/),
      i = t[0]?.toLowerCase() ?? "";
    if (i === "undo") return (this.sendOp(5, [0, 0, 0], [0, 0, 0], 0, 0), !0);
    if (!["set", "replace", "clear", "walls", "restore"].includes(i))
      return (this.onMsg(2, z("weUnknownCommand", { cmd: i })), !0);
    if (!this.p1 || !this.p2)
      return (this.onMsg(2, z("weSelectRegionFirst")), !0);
    if (this.volume() > 3e5)
      return (
        this.onMsg(2, z("weRegionTooBig", { volume: this.volume() })),
        !0
      );
    if (i === "set" || i === "walls") {
      const n = cb(t[1] ?? "");
      if (!n)
        return (this.onMsg(2, z("weUnknownBlock", { block: t[1] ?? "" })), !0);
      this.sendOp(i === "set" ? 0 : 3, this.p1, this.p2, n.id, 0);
    } else if (i === "replace") {
      const n = cb(t[1] ?? ""),
        o = cb(t[2] ?? "");
      if (!n || !o) return (this.onMsg(2, z("weReplaceUsage")), !0);
      this.sendOp(1, this.p1, this.p2, n.id, o.id);
    } else
      i === "restore"
        ? this.sendOp(4, this.p1, this.p2, 0, 0)
        : this.sendOp(2, this.p1, this.p2, 0, 0);
    return !0;
  }
}
const CL = 42,
  OE = 5,
  NE = 1,
  AM = 6,
  Ma = (OE + 3) * ke + 4,
  Sa = (NE + 3) * ke + 4,
  H0e = 11;
