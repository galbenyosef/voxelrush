// assets__index-Dp6GxvJu 231 — math
// Lines 126743-127030 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class sse {
  constructor(e, t, i) {
    w(this, "mode", "off");
    w(this, "cockpitNightVision", !1);
    w(this, "moduleId", 0);
    w(this, "durability", 0);
    w(this, "wearAccumulator", 0);
    w(this, "opticLight", new A0(12124100, 1385242, 0));
    w(this, "heatScene", new nh());
    w(this, "heatProxies", new Map());
    w(
      this,
      "warmMaterial",
      new qt({
        color: 16753434,
        transparent: !0,
        opacity: 0.62,
        depthTest: !0,
        depthWrite: !1,
        blending: cn,
        toneMapped: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1,
      }),
    );
    w(
      this,
      "coldMaterial",
      new qt({
        color: 2727167,
        transparent: !0,
        opacity: 0.56,
        depthTest: !0,
        depthWrite: !1,
        blending: cn,
        toneMapped: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1,
      }),
    );
    ((this.renderer = e),
      (this.scene = t),
      (this.camera = i),
      this.opticLight.layers.set(0),
      this.scene.add(this.opticLight));
  }
  setCockpitNightVision(e) {
    e !== this.cockpitNightVision &&
      ((this.cockpitNightVision = e), this.setMode("off"));
  }
  sync(e, t) {
    ((this.moduleId = Ql(e) ? e : 0),
      (this.durability = this.moduleId
        ? Math.max(0, Math.min(Da(this.moduleId), t))
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
            : this.setMode(Py[this.moduleId].kind),
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
    const s = new Set(),
      o = (r, l) => {
        for (const c of r)
          c.traverse((h) => {
            const d = h;
            if (!d.isMesh || !d.visible) return;
            s.add(d);
            let u = this.heatProxies.get(d);
            if (!u) {
              if (d.isSkinnedMesh) {
                const f = d,
                  p = new U8(d.geometry, l);
                ((p.bindMode = f.bindMode),
                  p.bind(f.skeleton, f.bindMatrix),
                  p.bindMatrixInverse.copy(f.bindMatrixInverse),
                  (u = p));
              } else u = new le(d.geometry, l);
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
      s.has(r) || (this.heatScene.remove(l), this.heatProxies.delete(r));
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
      s = document.getElementById("visiondurability"),
      o = document.getElementById("visiondurabilityfill");
    (i &&
      (i.textContent = this.cockpitNightVision
        ? "JET NVG"
        : this.moduleId === E.THERMAL_GOGGLES
          ? "THERMAL"
          : "NVG"),
      s &&
        (s.textContent = this.cockpitNightVision
          ? "∞"
          : `${Math.ceil(this.durability)} s`),
      o &&
        (o.style.width = this.cockpitNightVision
          ? "100%"
          : `${Math.round((this.durability / Math.max(1, Da(this.moduleId))) * 100)}%`));
  }
}
class ose {
  constructor(e) {
    w(this, "p1", null);
    w(this, "p2", null);
    w(this, "onMsg", () => {});
    w(this, "sendOp", () => {});
    w(this, "box");
    w(this, "lines");
    const t = new Ct(1, 1, 1);
    ((this.box = new le(
      t,
      new qt({
        color: 3399167,
        transparent: !0,
        opacity: 0.14,
        depthWrite: !1,
      }),
    )),
      (this.lines = new Dl(
        new ag(t),
        new Eo({
          color: 6746367,
          depthTest: !1,
          transparent: !0,
          opacity: 0.9,
        }),
      )),
      (this.box.visible = !1),
      (this.lines.visible = !1),
      (this.box.renderOrder = Gi.editBox),
      (this.lines.renderOrder = Gi.editLines),
      e.add(this.box, this.lines));
  }
  setPoint(e, t, i, s) {
    (e === 1 ? (this.p1 = [t, i, s]) : (this.p2 = [t, i, s]),
      this.onMsg(
        1,
        `${U("wePoint", { n: e, x: t, y: i, z: s })}${this.p1 && this.p2 ? ` (${U("weVolume", { volume: this.volume() })})` : ""}`,
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
      s = [
        Math.max(e[0], t[0]) + 1,
        Math.max(e[1], t[1]) + 1,
        Math.max(e[2], t[2]) + 1,
      ];
    (this.box.position.set(
      (i[0] + s[0]) / 2,
      (i[1] + s[1]) / 2,
      (i[2] + s[2]) / 2,
    ),
      this.box.scale.set(
        s[0] - i[0] + 0.04,
        s[1] - i[1] + 0.04,
        s[2] - i[2] + 0.04,
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
    var s;
    if (!e.startsWith("//")) return !1;
    const t = e.slice(2).trim().split(/\s+/),
      i = ((s = t[0]) == null ? void 0 : s.toLowerCase()) ?? "";
    if (i === "undo") return (this.sendOp(5, [0, 0, 0], [0, 0, 0], 0, 0), !0);
    if (!["set", "replace", "clear", "walls", "restore"].includes(i))
      return (this.onMsg(2, U("weUnknownCommand", { cmd: i })), !0);
    if (!this.p1 || !this.p2)
      return (this.onMsg(2, U("weSelectRegionFirst")), !0);
    if (this.volume() > 3e5)
      return (
        this.onMsg(2, U("weRegionTooBig", { volume: this.volume() })),
        !0
      );
    if (i === "set" || i === "walls") {
      const o = n5(t[1] ?? "");
      if (!o)
        return (this.onMsg(2, U("weUnknownBlock", { block: t[1] ?? "" })), !0);
      this.sendOp(i === "set" ? 0 : 3, this.p1, this.p2, o.id, 0);
    } else if (i === "replace") {
      const o = n5(t[1] ?? ""),
        a = n5(t[2] ?? "");
      if (!o || !a) return (this.onMsg(2, U("weReplaceUsage")), !0);
      this.sendOp(1, this.p1, this.p2, o.id, a.id);
    } else
      i === "restore"
        ? this.sendOp(4, this.p1, this.p2, 0, 0)
        : this.sendOp(2, this.p1, this.p2, 0, 0);
    return !0;
  }
}
const t8 = 42,
  JM = 5,
  eS = 1,
  e3 = 6,
  fl = (JM + 3) * Pe + 4,
  pl = (eS + 3) * Pe + 4,
  ase = 11;
