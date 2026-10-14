// index-Dp6GxvJu 224 — math
// Lines 123159-124691 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class Lne {
  constructor(e, t, i, s, o, a, r, l) {
    w(this, "hooks", {
      onShot: () => {},
      onHitPlayer: () => {},
      onHitVehicle: () => {},
      onHitBot: () => {},
      onHitAnimal: () => {},
      onHitBlock: () => {},
      onHitTarget: () => {},
      vehicleRay: () => null,
      botRay: () => null,
      animalRay: () => null,
      projectileRay: () => null,
      onHitProjectile: () => {},
      isCreative: () => !1,
      countItem: () => 0,
      consumeItem: () => !1,
      returnAmmo: () => 0,
      ammoPicker: () => {},
      impactExplosion: () => {},
      getHeldMagazine: () => {},
      setHeldMagazine: () => {},
      wearHeld: () => {},
    });
    w(this, "lockConfirmed", !1);
    w(this, "targetLock", new xq());
    w(this, "lockTarget", null);
    w(this, "lockSendAt", 0);
    w(this, "held", 0);
    w(this, "heldBlock", 0);
    w(this, "heldInstance", -1);
    w(this, "vms", new Map());
    w(this, "current", null);
    w(this, "holds", new Map());
    w(this, "hold", null);
    w(this, "toolPivot", null);
    w(this, "handsAllowed", !0);
    w(this, "swingDur", 0.3);
    w(this, "swingOut", { x: 0, y: 0, z: 0, q: new Jt(), flick: 0 });
    w(this, "onSwing", () => {});
    w(this, "onAmmoChange", () => {});
    w(this, "reloadT", -1);
    w(this, "ammoPickerOpen", !1);
    w(this, "reloadHold", 0);
    w(this, "reloadAmmo", 0);
    w(this, "pickerAmmo", 0);
    w(this, "cooldown", 0);
    w(this, "adsT", 0);
    w(this, "crouching", !1);
    w(this, "prone", !1);
    w(this, "bobT", 0);
    w(this, "strideBlend", 0);
    w(this, "sprintBlend", 0);
    w(this, "breathTime", 0);
    w(this, "swayX", 0);
    w(this, "swayY", 0);
    w(this, "recoilZ", 0);
    w(this, "recoilRX", 0);
    w(this, "flashT", 0);
    w(this, "slideT", 0);
    w(this, "swingT", 0);
    w(this, "knifeAnim", null);
    w(this, "knifeCombo", 0);
    w(this, "followT", 0);
    w(this, "grenadeHideT", 0);
    w(this, "throwHold", -1);
    w(this, "throwPower", 0);
    w(this, "throwLatch", !1);
    w(this, "throwCock", 0);
    w(this, "throwArc", null);
    w(this, "throwOrigin", new k());
    w(this, "throwVel", new k());
    w(this, "framePitchKick", 0);
    w(this, "recoilOwed", 0);
    w(this, "recoilRest", 0);
    w(this, "miningActive", !1);
    w(this, "miningProgress", 0);
    w(this, "spinVel", 0);
    w(this, "minigunSpinup", 0);
    w(this, "popT", 0);
    w(this, "rig", null);
    w(this, "drawT", 1);
    w(this, "kickT", 1);
    w(this, "rigOffset", { rx: 0, ry: 0, rz: 0, py: 0, px: 0 });
    w(this, "tmpEject", new k());
    w(this, "tmpRight", new k());
    w(this, "tmpV1", new k());
    w(this, "knifeOut", [0, 0, 0, 0, 0, 0]);
    w(this, "rod", {
      castT: -1,
      release: null,
      strikeT: -1,
      out: 0,
      outTarget: !1,
      tension: 0,
      bend: 0,
    });
    w(this, "tmpV2", new k());
    w(this, "laserLine", null);
    w(this, "laserDot", null);
    w(this, "laserCamPos", new k());
    w(this, "laserCamDir", new k());
    w(this, "laserRight", new k());
    w(this, "laserStart", new k());
    w(this, "laserDir", new k());
    w(this, "laserEnd", new k());
    w(this, "cosmetic");
    w(this, "cosmeticOwner", "");
    w(this, "inspectT", -1);
    w(this, "inspectPoseScratch", { x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0 });
    w(this, "inspectSerial", 0);
    w(
      this,
      "inspectKnifeQ",
      new Jt()
        .setFromEuler(new hi(0, -1.25, 0.25))
        .multiply(new Jt().setFromEuler(new hi(0.5, 0.3, -0.85)).invert()),
    );
    w(this, "weaponInfoKey", "");
    w(this, "weldActive", !1);
    w(this, "weldHeat", 0);
    w(this, "medical", null);
    w(this, "medicalDoneT", 0);
    w(this, "lastReload", null);
    ((this.scene = e),
      (this.camera = t),
      (this.world = i),
      (this.effects = s),
      (this.sfx = o),
      (this.remotes = a),
      (this.projectiles = r),
      (this.atlasTex = l));
  }
  rounds(e) {
    return Ug(this.hooks.getHeldMagazine(), e.mag);
  }
  setMag(e, t) {
    const i = Cn[e];
    if (!i || i.mag <= 0) return;
    const s = Math.max(0, Math.min(i.mag, Math.floor(t)));
    (this.rounds(i) === s && this.hooks.getHeldMagazine() !== void 0) ||
      (this.hooks.setHeldMagazine(jd(s, this.loadedAmmo())),
      this.onAmmoChange());
  }
  magInfo(e, t) {
    const i = Cn[e];
    return !i || i.mag <= 0 ? null : { loaded: Ug(t, i.mag), max: i.mag };
  }
  setHandsAllowed(e) {
    e !== this.handsAllowed &&
      ((this.handsAllowed = e),
      this.select(this.held, this.heldBlock, this.heldInstance, !0));
  }
  resetWeaponInfo() {
    ((this.weaponInfoKey = ""), tA());
  }
  setCosmetic(e, t) {
    ((this.cosmetic = e),
      (this.cosmeticOwner = t),
      this.current && Ba(this.current.group, e, t));
    const i =
      this.held +
      ":" +
      this.heldInstance +
      ":" +
      ((e == null ? void 0 : e.uid) ?? "");
    if (i !== this.weaponInfoKey)
      if (
        ((this.weaponInfoKey = i),
        au.includes(ou(Ti(this.held) || this.held)) && !ho(this.held))
      ) {
        const s = uo(e == null ? void 0 : e.skin);
        YV(
          this.weaponName(),
          this.weaponColor() || "#e5efcb",
          s != null && s.tracking && e
            ? Ty(this.held) + " " + WS(e, t, this.held)
            : "",
        );
      } else tA();
  }
  get inspectTime() {
    return this.inspectT;
  }
  get inspectSequence() {
    return this.inspectSerial;
  }
  cancelInspect() {
    this.inspectT = -1;
  }
  inspect() {
    !this.current ||
      this.reloadT >= 0 ||
      this.inspectT >= 0 ||
      ((this.inspectT = 0), this.inspectSerial++);
  }
  select(e, t = 0, i = -1, s = !1) {
    var r, l;
    if (
      !s &&
      e === this.held &&
      t === this.heldBlock &&
      i === this.heldInstance
    )
      return;
    if (
      ((this.inspectT = -1),
      this.closeAmmoPicker(),
      this.targetLock.update("", 0),
      (this.lockTarget = null),
      (this.lockConfirmed = !1),
      (this.reloadHold = 0),
      (this.minigunSpinup = 0),
      (this.spinVel = 0),
      (this.held = e),
      (this.heldBlock = t),
      (this.heldInstance = i),
      (this.reloadT = -1),
      (this.adsT = 0),
      (this.rig = null),
      this.current &&
        (this.camera.remove(this.current.group), (this.current = null)),
      this.hold && (this.camera.remove(this.hold.root), (this.hold = null)),
      (this.toolPivot = null),
      (this.swingT = 0),
      (this.throwHold = -1),
      (this.knifeAnim = null),
      (l = (r = this.rod).release) == null || l.call(r),
      (this.rod = {
        castT: -1,
        release: null,
        strikeT: -1,
        out: 0,
        outTarget: !1,
        tension: 0,
        bend: 0,
      }),
      (this.drawT = this.followT > 0 ? 1 : 0),
      e >= 256 && ane(e))
    ) {
      let c = this.vms.get(e);
      (c ||
        ((c = R0(e)),
        mV(c.group),
        LU(c.group),
        Cn[e]
          ? (c.group.userData.rig = new fF(
              c,
              Ti(e) || e,
              Cn[e].kind !== "grenade",
            ))
          : (FV(c.group),
            (c.group.userData.toolPivot = ine(c.group, qR(e), one(e)).pivot)),
        this.vms.set(e, c)),
        (this.current = c),
        (this.rig = c.group.userData.rig ?? null),
        (this.toolPivot = c.group.userData.toolPivot ?? null),
        $R(c.group),
        this.camera.add(c.group));
      return;
    }
    if (e <= 0 && !this.handsAllowed) return;
    const o = Math.max(0, e);
    let a = this.holds.get(o);
    (a || ((a = ene(o, this.atlasTex)), this.holds.set(o, a)),
      (this.hold = a),
      $R(a.root),
      this.camera.add(a.root));
  }
  rebuildViewModel() {
    const e = this.held,
      t = this.heldBlock,
      i = this.heldInstance;
    (this.current &&
      (this.camera.remove(this.current.group), (this.current = null)),
      this.hold && (this.camera.remove(this.hold.root), (this.hold = null)));
    for (const s of this.holds.values()) {
      const o = s.root.getObjectByName("fp-held-block");
      o == null ||
        o.traverse((a) => {
          var l, c;
          const r = a;
          r.isMesh &&
            (r.userData.sharedGeometry ||
              (l = r.geometry) == null ||
              l.dispose(),
            (c = r.material) == null || c.dispose());
        });
    }
    this.holds.clear();
    for (const s of this.vms.values())
      (Zl(s.group),
        s.group.traverse((o) => {
          var l;
          const a = o;
          if (
            (a.userData.sharedGeometry ||
              (l = a.geometry) == null ||
              l.dispose(),
            a.userData.sharedMaterial)
          )
            return;
          const r = a.material;
          Array.isArray(r)
            ? r.forEach((c) => c.dispose())
            : r == null || r.dispose();
        }));
    (this.vms.clear(),
      (this.held = -1),
      this.select(e, t, i),
      this.setCosmetic(this.cosmetic, this.cosmeticOwner));
  }
  swing(e = !1) {
    const t = this.rig ? 0.25 : 0.3;
    this.swingT > t * 0.5 ||
      ((this.swingDur = t),
      (this.swingT = t),
      e && !this.rig && this.sfx.swish(),
      this.onSwing());
  }
  knifeStrike() {
    if (this.held !== ITEM.COMBAT_KNIFE) return;
    const e = [rne, lne, cne][this.knifeCombo++ % 3];
    ((this.knifeAnim = {
      keys: e,
      t: 0,
      dur: 0.34 * Xt.knifeCooldown(),
      hold: !1,
    }),
      (this.swingT = 0),
      this.sfx.knifeSlash(),
      this.onSwing());
  }
  knifeWindup(e) {
    this.held === ITEM.COMBAT_KNIFE &&
      ((this.knifeAnim = { keys: hne, t: 0, dur: e, hold: !0 }),
      (this.swingT = 0));
  }
  knifeCancel() {
    var e;
    (e = this.knifeAnim) != null && e.hold && (this.knifeAnim = null);
  }
  knifeRelease() {
    ((this.knifeAnim = null),
      (this.followT = KR),
      this.sfx.knifeSlash(),
      this.onSwing());
  }
  get knifeBusy() {
    return !!this.knifeAnim && !this.knifeAnim.hold;
  }
  holdKind() {
    var e;
    return this.rig
      ? "rig"
      : this.current
        ? "tool"
        : (((e = this.hold) == null ? void 0 : e.kind) ?? "none");
  }
  setWelding(e) {
    this.weldActive = e;
  }
  setMining(e, t = 0) {
    ((this.miningActive = e), (this.miningProgress = t));
  }
  breakPop() {
    ((this.popT = 0.14), (this.recoilZ += 0.045), (this.recoilRX += 0.03));
  }
  isReloading() {
    return this.reloadT >= 0;
  }
  magState() {
    var s, o;
    const e = Cn[this.held];
    if (!e || e.mag <= 0) return null;
    const t = this.loadedAmmo(),
      i =
        this.hooks.isCreative() ||
        (t && (o = (s = this.hooks).endlessAmmo) != null && o.call(s, t))
          ? 1 / 0
          : t
            ? this.hooks.countItem(t)
            : 0;
    return {
      rounds: this.rounds(e),
      reserve: i,
      reloading: this.reloadT >= 0 ? Math.min(1, this.reloadT) : -1,
    };
  }
  ammoStatus() {
    var i, s;
    const e = Cn[this.held];
    if (!e || e.mag === 0 || this.hooks.isCreative()) return null;
    const t = this.loadedAmmo();
    return {
      rounds: this.rounds(e),
      reserve: t
        ? (s = (i = this.hooks).endlessAmmo) != null && s.call(i, t)
          ? 1 / 0
          : this.hooks.countItem(t)
        : 0,
      mag: e.mag,
    };
  }
  ammoText() {
    var s, o;
    const e = Cn[this.held];
    if (!e) return "";
    if (this.reloadT >= 0) return "▮▮▮";
    if (this.hooks.isCreative())
      return e.mag === 0 ? "∞" : `${this.rounds(e)} / ∞`;
    const t = this.held === ITEM.GRENADE ? ITEM.GRENADE : this.loadedAmmo(),
      i = t ? this.hooks.countItem(t) : 0;
    return e.mag === 0
      ? String(i)
      : t && (o = (s = this.hooks).endlessAmmo) != null && o.call(s, t)
        ? `${this.rounds(e)} / ∞`
        : `${this.rounds(e)} / ${i}`;
  }
  weaponColor() {
    var t;
    const e = uo((t = this.cosmetic) == null ? void 0 : t.skin);
    return e ? RARITIES[e.rarity].color : "";
  }
  weaponName() {
    var i;
    if (!au.includes(ou(Ti(this.held) || this.held)) || ho(this.held))
      return "";
    const e = Ti(this.held) ? Ey(this.held, SETTINGS.language) : Ki(this.held),
      t = uo((i = this.cosmetic) == null ? void 0 : i.skin);
    return e + (t ? " | " + (SETTINGS.language === "en" ? t.name : t.ru) : "");
  }
  update(e, t, i) {
    var u, f, p, m, y, g, b, S;
    if (
      ((this.framePitchKick = 0),
      this.recoilOwed > 0 && (this.recoilRest -= e) <= 0)
    ) {
      const M = Math.min(this.recoilOwed, (this.recoilOwed * Ene + 0.004) * e);
      ((this.recoilOwed -= M), (this.framePitchKick -= M));
    }
    ((this.crouching = i.crouching),
      (this.prone = i.prone),
      (this.cooldown = Math.max(0, this.cooldown - e)),
      (this.flashT = Math.max(0, this.flashT - e)),
      (this.slideT = Math.max(0, this.slideT - e)),
      (this.swingT = Math.max(0, this.swingT - e)),
      (this.grenadeHideT = Math.max(0, this.grenadeHideT - e)),
      (this.popT = Math.max(0, this.popT - e)));
    const s = Cn[this.held],
      o = i.allowFire || !!i.allowReload,
      a = !!s && s.kind !== "grenade" && t.mouseR && this.reloadT < 0 && o;
    this.adsT = clamp(
      this.adsT +
        (a ? e / ((s == null ? void 0 : s.adsTime) ?? ha[0]) : -e / 0.11),
      0,
      1,
    );
    const r = !!(s != null && s.zoomFov) && this.adsT > 0.6,
      l = this.held === ITEM.RPG && this.loadedAmmo() === ITEM.ROCKET_GUIDED;
    this.lockTarget =
      l && a && !this.ammoPickerOpen
        ? (((f = (u = this.hooks).guidedTarget) == null ? void 0 : f.call(u)) ??
          null)
        : null;
    const c = this.lockTarget
      ? `${this.lockTarget.kind}:${this.lockTarget.id}`
      : "";
    if (
      (c !== this.targetLock.key && (this.lockConfirmed = !1),
      this.targetLock.update(c, 0),
      performance.now() - this.lockSendAt >= 100 &&
        ((this.lockSendAt = performance.now()),
        (l || this.lockTarget) &&
          ((g = (y = this.hooks).lockUpdate) == null ||
            g.call(
              y,
              ((p = this.lockTarget) == null ? void 0 : p.kind) ?? 0,
              ((m = this.lockTarget) == null ? void 0 : m.id) ?? 0,
            ))),
      s &&
        this.reloadT >= 0 &&
        ((this.reloadT +=
          e / (s.reload * Xt.weaponReload(Ti(s.item) || s.item))),
        this.reloadT >= 1 && ((this.reloadT = -1), this.finishReload(s))),
      s && s.mag > 0 && o)
    ) {
      if (
        (t.actionPressed("reload") &&
          !t.action("reload") &&
          this.reloadHold === 0 &&
          !this.ammoPickerOpen &&
          this.reloadT < 0 &&
          this.startReload(s),
        t.action("reload")
          ? (this.reloadHold || (this.reloadHold = performance.now()),
            performance.now() - this.reloadHold >= 380 &&
              !this.ammoPickerOpen &&
              Hc(this.held).length > 1 &&
              ((this.reloadT = -1),
              (this.ammoPickerOpen = !0),
              (this.pickerAmmo = this.loadedAmmo()),
              this.showAmmoPicker()))
          : this.reloadHold > 0 &&
            (!this.ammoPickerOpen && this.reloadT < 0 && this.startReload(s),
            (this.reloadHold = 0)),
        this.ammoPickerOpen)
      ) {
        const M = Hc(this.held);
        t.pressed.has("Escape") && this.closeAmmoPicker();
        for (let x = 0; x < M.length; x++)
          t.pressed.has("Digit" + (x + 1)) && this.chooseAmmo(M[x]);
        (t.wheel &&
          ((this.pickerAmmo = M[(M.indexOf(this.pickerAmmo) + 1) % M.length]),
          this.showAmmoPicker()),
          (t.pressed.has("Enter") || t.clickL) &&
            this.chooseAmmo(this.pickerAmmo));
      }
    } else ((this.reloadHold = 0), this.closeAmmoPicker());
    const h =
      this.held === ITEM.MINIGUN &&
      t.mouseL &&
      i.allowFire &&
      !this.ammoPickerOpen &&
      this.reloadHold === 0 &&
      this.reloadT < 0 &&
      this.rounds(s) > 0;
    if (
      ((this.minigunSpinup = h ? Math.min(Gv, this.minigunSpinup + e) : 0),
      s &&
        !i.allowFire &&
        i.allowReload &&
        t.clickL &&
        !this.ammoPickerOpen &&
        ((b = i.onBlockedFire) == null || b.call(i)),
      (s == null ? void 0 : s.kind) === "grenade"
        ? this.updateThrow(e, t, s, i.allowFire)
        : s &&
          i.allowFire &&
          !this.ammoPickerOpen &&
          this.reloadHold === 0 &&
          this.reloadT < 0 &&
          this.cooldown <= 0 &&
          (s.auto ? t.mouseL : t.clickL) &&
          (s.mag > 0 && this.rounds(s) <= 0
            ? this.startReload(s)
            : (this.held !== ITEM.MINIGUN || this.minigunSpinup >= Gv) &&
              this.fire(s)),
      !s &&
        i.allowSwing &&
        !VR.has(this.held) &&
        (this.hold || this.current) &&
        (t.clickL
          ? this.swing(!0)
          : this.miningActive &&
            t.mouseL &&
            this.swingT <= 0 &&
            this.swing(!1)),
      (s == null ? void 0 : s.kind) !== "grenade" &&
        (this.throwHold >= 0 || this.throwArc) &&
        ((this.throwHold = -1),
        (S = this.throwArc) == null ||
          S.update(
            e,
            !1,
            this.throwOrigin,
            this.throwVel,
            this.throwOrigin,
            0,
          )),
      (i.allowFire || i.allowSwing) &&
        t.actionPressed("inspect") &&
        this.inspect(),
      ((!i.allowFire && !i.allowSwing) ||
        t.mouseL ||
        t.mouseR ||
        this.reloadT >= 0 ||
        i.sprint) &&
        (this.inspectT = -1),
      this.animate(e, t, i, s, r),
      this.inspectT >= 0 && this.current)
    ) {
      this.inspectT += e;
      const M = this.inspectT;
      if (M >= Rp) this.inspectT = -1;
      else {
        const x = o1(M),
          T = fo(this.held)
            ? VU(M, fo(this.held) === 338, this.inspectPoseScratch)
            : ak(M, this.inspectPoseScratch),
          A = this.current.group;
        ((A.position.x += T.x),
          (A.position.y += T.y),
          (A.position.z += T.z),
          (A.rotation.x += T.rx),
          (A.rotation.y += T.ry),
          (A.rotation.z += T.rz),
          this.held === ITEM.COMBAT_KNIFE &&
            (this.current.group.quaternion.slerp(this.inspectKnifeQ, x),
            (this.current.group.position.x -= 0.05 * x),
            (this.current.group.position.y += 0.07 * x)));
      }
    }
    const d = s != null && s.zoomFov ? s.zoomFov / i.baseFov : 1;
    return {
      fovScale: r
        ? d
        : lerp(1, s && this.adsT > 0 ? (s.adsZoom ?? YR) : 1, this.adsT),
      sensScale: r
        ? d * 1.4
        : lerp(1, ((s == null ? void 0 : s.adsZoom) ?? YR) * 0.92, this.adsT),
      scoped: r,
      pitchKick: this.framePitchKick,
      adsT: this.adsT,
    };
  }
  ensureLaser() {
    if (this.laserLine) return;
    const e = new ci();
    e.setAttribute("position", new oi(new Float32Array(6), 3));
    const t = new Eo({
      color: 16720418,
      transparent: !0,
      opacity: 0.85,
      blending: cn,
      depthWrite: !1,
    });
    ((this.laserLine = new Kc(e, t)),
      (this.laserLine.frustumCulled = !1),
      (this.laserLine.renderOrder = Gi.tracer),
      this.scene.add(this.laserLine));
    const i = new es({
      color: 16724787,
      transparent: !0,
      opacity: 0.9,
      blending: cn,
      depthWrite: !1,
    });
    ((this.laserDot = new os(i)),
      this.laserDot.scale.set(0.05, 0.05, 1),
      this.scene.add(this.laserDot));
  }
  flashlightPose(e, t) {
    var s, o;
    const i = (s = this.current) == null ? void 0 : s.lightMount;
    return !i || !((o = this.current) != null && o.group.parent)
      ? !1
      : (i.getWorldPosition(e),
        i.getWorldQuaternion(t),
        e.addScaledVector(
          this.laserDir.set(0, 0, -1).applyQuaternion(t),
          0.055,
        ),
        !0);
  }
  updateLaser(e) {
    var r, l, c, h, d;
    if (!(
      e &&
      !!Cn[this.held] &&
      So(this.held).laser &&
      !!((r = this.current) != null && r.group.parent)
    )) {
      (this.laserLine && (this.laserLine.visible = !1),
        this.laserDot && (this.laserDot.visible = !1));
      return;
    }
    (this.ensureLaser(),
      this.camera.updateMatrixWorld(!0),
      this.camera.getWorldPosition(this.laserCamPos),
      this.camera.getWorldDirection(this.laserCamDir));
    const i =
        ((c = (l = this.hooks).thirdPersonAim) == null ? void 0 : c.call(l)) ??
        null,
      s =
        ((h = this.current) == null ? void 0 : h.laserMount) ??
        ((d = this.current) == null ? void 0 : d.muzzle) ??
        null;
    i
      ? (this.laserStart.copy(i.laser ?? i.muzzle ?? i.origin),
        this.laserDir.copy(i.target).sub(this.laserStart),
        this.laserDir.lengthSq() < 1e-6 && this.laserDir.copy(this.laserCamDir),
        this.laserDir.normalize())
      : s
        ? (s.getWorldPosition(this.laserStart),
          s.getWorldDirection(this.laserDir).negate(),
          this.laserStart.addScaledVector(this.laserDir, 0.04))
        : (this.laserRight
            .crossVectors(this.laserCamDir, this.camera.up)
            .normalize(),
          this.laserStart
            .copy(this.laserCamPos)
            .addScaledVector(this.laserRight, 0.13)
            .addScaledVector(this.laserCamDir, 0.2),
          (this.laserStart.y -= 0.1),
          this.laserDir.copy(this.laserCamDir));
    const o = this.world.raycast(this.laserStart, this.laserDir, 120);
    o
      ? this.laserEnd.copy(o.point)
      : this.laserEnd.copy(this.laserStart).addScaledVector(this.laserDir, 120);
    const a = this.laserLine.geometry.attributes.position;
    (a.setXYZ(0, this.laserStart.x, this.laserStart.y, this.laserStart.z),
      a.setXYZ(1, this.laserEnd.x, this.laserEnd.y, this.laserEnd.z),
      (a.needsUpdate = !0),
      (this.laserLine.visible = !0),
      this.laserDot.position.copy(this.laserEnd),
      (this.laserDot.visible = !!o));
  }
  loadedAmmo() {
    return sp(this.held, this.hooks.getHeldMagazine());
  }
  closeAmmoPicker() {
    (this.ammoPickerOpen && this.hooks.ammoPicker([], 0, () => {}),
      (this.ammoPickerOpen = !1));
  }
  showAmmoPicker() {
    this.hooks.ammoPicker(Hc(this.held), this.pickerAmmo, (e) =>
      this.chooseAmmo(e),
    );
  }
  chooseAmmo(e) {
    if (
      !Hc(this.held).includes(e) ||
      (!this.hooks.isCreative() && this.hooks.countItem(e) <= 0)
    )
      return;
    (this.closeAmmoPicker(), (this.reloadHold = 0));
    const t = Cn[this.held];
    t && this.startReload(t, e);
  }
  startReload(e, t = this.loadedAmmo()) {
    if (e.mag === 0) return;
    const i = this.hooks.isCreative()
      ? t
      : s_(e.item, t, (s) => this.hooks.countItem(s));
    !i ||
      (i === this.loadedAmmo() && this.rounds(e) >= e.mag) ||
      ((this.reloadAmmo = i), (this.reloadT = 0), this.sfx.reload());
  }
  finishReload(e) {
    (this.hooks.atomic ?? ((i) => i()))(() => this.finishReloadEdit(e));
  }
  medicalDone() {
    this.medicalDoneT = 0.55;
  }
  redoReload() {
    const e = this.lastReload,
      t = Cn[this.held];
    ((this.lastReload = null),
      !(
        !e ||
        !t ||
        performance.now() - e.at > 4e3 ||
        e.item !== this.held ||
        this.reloadT >= 0
      ) &&
        (this.rounds(t) >= e.rounds || this.finishReload(t)));
  }
  finishReloadEdit(e) {
    const t = this.loadedAmmo(),
      i = this.rounds(e),
      s = this.hooks.isCreative(),
      o = s
        ? this.reloadAmmo
        : s_(e.item, this.reloadAmmo, (l) => this.hooks.countItem(l));
    if (!o) return;
    let a = i;
    if (o !== t && i > 0) {
      const l = s ? i : this.hooks.returnAmmo(t, i);
      if (((a = i - l), this.hooks.setHeldMagazine(jd(a, t)), a > 0)) {
        this.onAmmoChange();
        return;
      }
    }
    const r = s ? e.mag - a : Math.min(e.mag - a, this.hooks.countItem(o));
    r > 0 &&
      (s || this.hooks.consumeItem(o, r)) &&
      ((this.lastReload = {
        at: performance.now(),
        item: this.held,
        rounds: a + r,
      }),
      this.hooks.setHeldMagazine(jd(a + r, o)),
      this.onAmmoChange());
  }
  muzzleWorld(e) {
    return (
      this.camera.updateMatrixWorld(),
      this.current
        ? this.current.muzzle.getWorldPosition(e)
        : this.camera.getWorldPosition(e)
    );
  }
  tipWorld(e) {
    return this.current
      ? (this.camera.updateMatrixWorld(),
        this.current.muzzle.getWorldPosition(e))
      : null;
  }
  spinReel(e) {
    var i;
    if (!((i = this.current) != null && i.spin)) return;
    this.current.spin.rotation.z += e;
    const t =
      this.held === ITEM.FISHING_ROD
        ? this.current.group.getObjectByName("reel-rotor")
        : null;
    t && (t.rotation.z -= e * 5.2);
  }
  rodCast(e) {
    if (this.held !== ITEM.FISHING_ROD || !this.current) {
      e();
      return;
    }
    this.rod.castT >= 0 ||
      ((this.rod.castT = 0), (this.rod.release = e), (this.rod.strikeT = -1));
  }
  rodStrike() {
    this.held === ITEM.FISHING_ROD && (this.rod.strikeT = 0);
  }
  rodBusy() {
    return this.rod.castT >= 0;
  }
  rodLine(e, t) {
    ((this.rod.outTarget = e), (this.rod.tension = t));
  }
  hideHeld() {
    this.current && (this.current.group.visible = !1);
  }
  fire(e) {
    (this.hooks.atomic ?? ((i) => i()))(() => this.fireEdit(e));
  }
  fireEdit(e) {
    var p, m, y, g, b, S, M, x, T, A, _;
    const t =
        e.item === ITEM.RPG &&
        this.loadedAmmo() === ITEM.ROCKET_GUIDED &&
        !!this.lockTarget &&
        this.targetLock.seconds >= S0 &&
        this.lockConfirmed,
      i =
        ((m = (p = this.hooks).personalVehicle) == null
          ? void 0
          : m.call(p)) === void 0
          ? (((g = (y = this.hooks).thirdPersonAim) == null
              ? void 0
              : g.call(y)) ?? null)
          : null,
      s = i
        ? i.origin.clone()
        : this.camera.getWorldPosition(this.tmpV1.clone()),
      o = i
        ? i.target.clone().sub(i.origin).normalize()
        : this.camera.getWorldDirection(this.tmpV2.clone()),
      a = o.clone(),
      r = this.prone ? yne : this.crouching ? gne : 1,
      l = Ti(e.item) || e.item,
      c = Xt.weaponSpread(l),
      h = lerp(e.spread, e.adsSpread, this.adsT) * r * c;
    if (
      ((o.x += (Math.random() - 0.5) * 2 * h),
      (o.y += (Math.random() - 0.5) * 2 * h),
      (o.z += (Math.random() - 0.5) * 2 * h),
      o.normalize(),
      ((S = (b = this.hooks).prepareShot) == null
        ? void 0
        : S.call(b, s, o)) === !1)
    )
      return;
    if (!this.hooks.isCreative() && e.mag === 0) {
      const C = e.item === ITEM.GRENADE ? ITEM.GRENADE : TOOL_ITEM_BY_BLOCK[e.item];
      if (
        !C ||
        (e.item === ITEM.GRENADE
          ? this.hooks.countItem(C) < 1
          : !this.hooks.consumeItem(C, 1))
      )
        return;
    }
    ((this.cooldown = 60 / e.rpm),
      e.mag > 0 && this.setMag(e.item, this.rounds(e) - 1),
      this.hooks.wearHeld(e.item === ITEM.MINIGUN || e.kind === "rocket" ? 2 : 1));
    const d =
        (x = (M = this.hooks).personalVehicle) == null ? void 0 : x.call(M),
      u =
        d !== void 0
          ? s.clone().addScaledVector(o, 0.6)
          : i
            ? (((T = i.muzzle) == null ? void 0 : T.clone()) ??
              s.clone().addScaledVector(o, 0.6))
            : this.muzzleWorld(new k()),
      f =
        e.recoil *
        lerp(1, 0.6, this.adsT) *
        c *
        (this.prone ? bne : this.crouching ? vne : 1) *
        (xne ? wne : 1);
    if (
      ((this.framePitchKick += f),
      (this.recoilOwed = Math.min(0.14, this.recoilOwed + f * Mne)),
      (this.recoilRest = 60 / e.rpm + Sne),
      Xt.weaponShot(l, e.rpm),
      (this.recoilZ = Math.min(0.16, this.recoilZ)),
      (this.recoilZ += e.kind === "hitscan" ? 0.06 : 0.1),
      (this.recoilRX += 0.05),
      e.kind === "hitscan")
    ) {
      this.hooks.onShot(e.item, u, o);
      const C = B4(this.loadedAmmo()),
        R = C
          ? {
              ...e,
              vehDmg: e.vehDmg * 3,
              blockDmg: Math.min(250, e.blockDmg * 3),
            }
          : e;
      for (let N = 0; N < (e.pellets ?? 1); N++) {
        const D = o.clone();
        if (e.pellets) {
          const H = new k(1, 0, 0).applyQuaternion(this.camera.quaternion),
            G = new k(0, 1, 0).applyQuaternion(this.camera.quaternion),
            I = Math.random() * Math.PI * 2,
            O = Math.sqrt(Math.random()) * h;
          D.copy(a)
            .addScaledVector(H, Math.cos(I) * O)
            .addScaledVector(G, Math.sin(I) * O)
            .normalize();
        }
        (e.pellets &&
          ((_ = (A = this.hooks).prepareShot) == null
            ? void 0
            : _.call(A, s, D)) === !1) ||
          this.resolveHitscan(R, s, D, u, C);
      }
      (this.sfx.shot(e.sfx, 0, So(this.held).suppressor),
        (this.flashT = 0.05),
        this.current &&
          ((this.current.flash.visible = !0),
          (this.current.flash.rotation.z = Math.random() * Math.PI * 2)),
        this.effects.flash(u, 2.2, 0.06),
        e.item === ITEM.GLOCK && (this.slideT = 0.09),
        (this.kickT = 0));
      const L = Ti(e.item) || e.item;
      L !== ITEM.AWP &&
        L !== ITEM.SHOTGUN &&
        d === void 0 &&
        !i &&
        this.ejectCasing(L === ITEM.MINIGUN);
    } else if (e.kind === "launcher")
      (this.projectiles.spawn(
        PROJECTILE_KIND.GRENADE_40MM,
        u,
        o.clone().multiplyScalar(42),
        !0,
        { ignoreVehicle: d },
      ),
        this.hooks.onShot(e.item, u, o),
        this.sfx.shot("rpg"),
        this.effects.flash(u, 2, 0.08),
        this.effects.muzzleSmoke(u, o),
        this.rounds(e) === 0 && this.startReload(e));
    else if (e.kind === "rocket")
      (this.projectiles.spawn(PROJECTILE_KIND.ROCKET, u, o.clone().multiplyScalar(38), !0, {
        ignoreVehicle: d,
        ...(t && this.lockTarget
          ? {
              guide: this.lockTarget.pos,
              tKind: this.lockTarget.kind,
              tId: this.lockTarget.id,
              serverDriven: !0,
            }
          : {}),
      }),
        this.targetLock.update("", 0),
        this.sfx.shot("rpg"),
        this.effects.flash(u, 3, 0.15),
        this.effects.muzzleSmoke(u, o.clone().negate()),
        this.startReload(e));
    else {
      const C = new k(...V_(o.x, o.y, o.z, this.throwPower));
      (this.projectiles.spawn(
        PROJECTILE_KIND.GRENADE,
        s.clone().addScaledVector(o, 0.5),
        C,
        !0,
        { ignoreVehicle: d },
      ),
        this.hooks.isCreative() || this.hooks.consumeItem(ITEM.GRENADE, 1),
        (this.swingT = this.swingDur = 0.2 + 0.08 * this.throwPower),
        (this.grenadeHideT = 0.45));
    }
  }
  updateThrow(e, t, i, s) {
    var r, l, c, h;
    const o =
      s &&
      !this.ammoPickerOpen &&
      this.cooldown <= 0 &&
      (this.hooks.isCreative() || this.hooks.countItem(ITEM.GRENADE) > 0);
    (!t.mouseL && !t.clickL && (this.throwLatch = !1),
      this.throwHold < 0 &&
        o &&
        !this.throwLatch &&
        (t.clickL || t.mouseL) &&
        (this.throwHold = 0),
      this.throwHold >= 0 &&
        (!s || t.clickR
          ? ((this.throwHold = -1),
            (this.throwLatch = !0),
            (this.cooldown = Math.max(this.cooldown, 0.25)))
          : t.mouseL
            ? (this.throwHold += e)
            : ((this.throwPower = Jm(this.throwHold)),
              (this.throwHold = -1),
              this.fire(i))));
    const a = this.throwHold > ka.tap;
    if (a || this.throwArc) {
      const d = a ? Jm(this.throwHold) : 0;
      if (a) {
        const u =
            ((l = (r = this.hooks).personalVehicle) == null
              ? void 0
              : l.call(r)) === void 0
              ? (((h = (c = this.hooks).thirdPersonAim) == null
                  ? void 0
                  : h.call(c)) ?? null)
              : null,
          f = u
            ? this.tmpV2.copy(u.target).sub(u.origin).normalize()
            : this.camera.getWorldDirection(this.tmpV2);
        (u
          ? this.throwOrigin.copy(u.origin)
          : this.camera.getWorldPosition(this.throwOrigin),
          this.throwOrigin.addScaledVector(f, 0.5),
          this.throwVel.set(...V_(f.x, f.y, f.z, d)));
      }
      (this.throwArc ??
        (this.throwArc = new jM(this.scene, (u, f, p) =>
          this.world.isSolidAt(u, f, p),
        )),
        this.throwArc.update(
          e,
          a,
          this.throwOrigin,
          this.throwVel,
          this.camera.getWorldPosition(this.tmpV1),
          d,
          this.projectiles.gravity,
        ));
    }
  }
  cancelThrow() {
    var e;
    ((this.throwHold = -1), (e = this.throwArc) == null || e.hide());
  }
  throwCharge() {
    return this.throwHold >= 0 ? Jm(this.throwHold) : null;
  }
  ejectCasing(e = !1, t = !1) {
    var s;
    const i =
      (s = this.current) == null
        ? void 0
        : s.group.getObjectByName("eject-port");
    i &&
      (this.camera.updateMatrixWorld(),
      i.getWorldPosition(this.tmpEject),
      this.tmpRight
        .set(1, 0.25, 0.3)
        .applyQuaternion(this.camera.getWorldQuaternion(new Jt()))
        .normalize(),
      t
        ? this.effects.casing(
            this.tmpEject,
            this.tmpRight,
            [10566704, 9056038],
            0.05,
          )
        : this.effects.casing(
            this.tmpEject,
            this.tmpRight,
            void 0,
            e ? 0.045 : 0.035,
          ));
  }
  resolveHitscan(e, t, i, s, o = !1) {
    var b, S;
    const a = this.world.raycastBullet(t, i, e.range, e.punch);
    for (const M of a.torn)
      (this.hooks.onHitBlock(M.bx, M.by, M.bz, tP, M.block, M.point, t),
        this.effects.bulletImpact(M.point, BLOCKS[M.block].color));
    const r = a.hit,
      l = r ? r.dist : e.range,
      c = this.remotes.raycastHit(t, i, l),
      h = this.hooks.botRay(t, i, c ? Math.min(c.dist, l) : l),
      d = this.hooks.animalRay(
        t,
        i,
        Math.min(
          (c == null ? void 0 : c.dist) ?? l,
          (h == null ? void 0 : h.dist) ?? l,
        ),
      ),
      u = Math.min(
        (c == null ? void 0 : c.dist) ?? l,
        (h == null ? void 0 : h.dist) ?? l,
        (d == null ? void 0 : d.dist) ?? l,
      ),
      f = this.hooks.vehicleRay(t, i, u),
      p = this.hooks.projectileRay(t, i, l);
    let m,
      y = !1;
    const g = (M) =>
      e.pellets
        ? Math.max(1, Math.round(e.dmg * Math.max(0.12, 1 - M / e.range)))
        : e.dmg;
    if (
      p &&
      (!f || p.dist < f.dist) &&
      (!c || p.dist < c.dist) &&
      (!h || p.dist < h.dist) &&
      (!d || p.dist < d.dist)
    ) {
      m = p.pos;
      const M =
        p.type === PROJECTILE_KIND.NUCLEAR
          ? e.item === ITEM.RPG
            ? KH
            : 1
          : e.item === ITEM.RPG
            ? 3
            : 1;
      (this.hooks.onHitProjectile(p.id, p.pos, M),
        this.effects.bulletImpact(m, 16759620));
    } else if (
      f &&
      (!c || f.dist < c.dist) &&
      (!h || f.dist < h.dist) &&
      (!d || f.dist < d.dist)
    ) {
      m = t.clone().addScaledVector(i, f.dist);
      const M = Math.round(e.vehDmg * (f.type === VEHICLE_KIND.DRONE ? 4 : 1));
      (this.hooks.onHitVehicle(f.id, Math.max(1, M), m, o ? 5 : 1, t),
        Xt.weaponHit(Ti(e.item) || e.item, e.pellets),
        this.effects.bulletImpact(m, 16764006));
    } else
      d && (!c || d.dist < c.dist) && (!h || d.dist < h.dist)
        ? ((m = d.point),
          this.hooks.onHitAnimal(d.id, g(d.dist)),
          this.effects.bloodHit(m),
          Xt.weaponHit(Ti(e.item) || e.item, e.pellets))
        : h && (!c || h.dist < c.dist)
          ? ((m = h.point),
            this.hooks.onHitBot(h.id, g(h.dist), e.item, h.region, h.point, t),
            this.effects.bloodHit(m),
            Xt.weaponHit(Ti(e.item) || e.item, e.pellets))
          : c
            ? ((m = c.point),
              this.hooks.onHitPlayer(
                c.id,
                g(c.dist),
                e.item,
                c.region,
                c.point,
                t,
              ),
              this.effects.bloodHit(m),
              Xt.weaponHit(Ti(e.item) || e.item, e.pellets))
            : r
              ? ((m = r.point),
                bC(r.block)
                  ? ((y = !0), this.hooks.onHitTarget(m, r.nx, r.ny, r.nz))
                  : (this.hooks.onHitBlock(
                      r.bx,
                      r.by,
                      r.bz,
                      e.blockDmg,
                      r.block,
                      r.point,
                      t,
                    ),
                    this.effects.bulletImpact(m, BLOCKS[r.block].color),
                    (S = (b = this.hooks).onBulletHole) == null ||
                      S.call(b, r)))
              : (m = t.clone().addScaledVector(i, e.range));
    if (o && (p || f || d || h || c || r) && !y) {
      const M = Ti(e.item) || e.item,
        x = M === ITEM.SHOTGUN;
      this.hooks.impactExplosion(
        m.clone().addScaledVector(i, -0.04),
        x ? 0.5 : M === ITEM.AWP ? 1.2 : 0.8,
        x ? 4 : 12,
      );
    }
    this.effects.tracer(s.clone().addScaledVector(i, 0.4), m);
  }
  animateWelder(e) {
    var s;
    const t = this.current.group,
      i =
        (s = t.userData).weld ??
        (s.weld = {
          arc: t.getObjectByName("weld-arc"),
          tip: t.getObjectByName("weld-tip"),
          display: t.getObjectByName("weld-display"),
        });
    if (
      ((this.weldHeat = clamp(
        this.weldHeat + (this.weldActive ? e / 0.12 : -e / 0.9),
        0,
        1,
      )),
      i.arc)
    ) {
      i.arc.visible = this.weldActive && Math.random() > 0.07;
      const o = 0.55 + Math.random() * 0.9;
      (i.arc.scale.set(o, o * (0.8 + Math.random() * 0.4), 1),
        (i.arc.rotation.z = Math.random() * Math.PI * 2));
    }
    if (
      (i.tip &&
        ((i.tip.visible = this.weldHeat > 0.02),
        i.tip.material.color.setRGB(
          1,
          0.45 + 0.5 * this.weldHeat,
          0.2 + 0.6 * this.weldHeat * this.weldHeat,
        )),
      i.display)
    ) {
      const o = this.weldActive
        ? 0.75 + Math.random() * 0.25
        : 0.55 + Math.sin(performance.now() / 700) * 0.06;
      i.display.material.color.setRGB(0.34 * o, o, 0.63 * o);
    }
  }
  animate(e, t, i, s, o) {
    var L, N, D, H, G;
    const a =
      ((L = this.current) == null ? void 0 : L.group) ??
      ((N = this.hold) == null ? void 0 : N.root);
    if (!a) return;
    const r = !this.rig && !VR.has(this.held);
    if (this.current) {
      if (
        ((this.current.group.visible = !o && this.grenadeHideT <= 0),
        (this.current.flash.visible = this.flashT > 0),
        this.current.flash.visible)
      ) {
        const I = 0.8 + Math.random() * 0.6;
        this.current.flash.scale.set(I, I, I);
      }
      if (
        (this.current.slide &&
          !this.rig &&
          (this.current.slide.position.z =
            -0.06 + Math.sin(clamp(this.slideT / 0.09, 0, 1) * Math.PI) * 0.045),
        this.current.spin)
      ) {
        const I =
          this.held === ITEM.MINIGUN
            ? this.minigunSpinup > 0
              ? 15 + (70 * this.minigunSpinup) / Gv
              : 0
            : this.held === ITEM.WELDER
              ? this.weldActive
                ? 9
                : 0
              : this.miningActive
                ? 22 + this.miningProgress * 34
                : 0;
        ((this.spinVel += (I - this.spinVel) * (1 - Math.exp(-8 * e))),
          (this.current.spin.rotation.z -= this.spinVel * e));
      }
    }
    this.held === ITEM.WELDER && this.current && this.animateWelder(e);
    const l = 1 - Math.exp(-14 * e);
    ((this.swayX += (-t.mdx * 0.0016 - this.swayX) * l),
      (this.swayY += (-t.mdy * 0.0016 - this.swayY) * l),
      (this.swayX = clamp(this.swayX, -0.06, 0.06)),
      (this.swayY = clamp(this.swayY, -0.06, 0.06)),
      (this.recoilZ *= Math.exp(-9 * e)),
      (this.recoilRX *= Math.exp(-9 * e)),
      (this.strideBlend +=
        (Number(i.moving && i.onGround) - this.strideBlend) *
        (1 - Math.exp(-9 * e))),
      (this.sprintBlend +=
        (Number(i.sprint && this.adsT < 0.3) - this.sprintBlend) *
        (1 - Math.exp(-10 * e))),
      (this.breathTime += e),
      (this.bobT += e * (7.5 + this.sprintBlend * 3.5) * this.strideBlend));
    const c = this.adsT * this.adsT * (3 - 2 * this.adsT),
      h =
        this.strideBlend * (0.012 + 0.008 * this.sprintBlend) * (1 - c * 0.85),
      d =
        this.held === ITEM.CHAINSAW_BASIC ||
        this.held === ITEM.CHAINSAW_PRO ||
        this.held === ITEM.CHAINSAW_INDUSTRIAL,
      u = s ? s.hipPos : this.hold ? this.hold.hip : qR(this.held),
      f = s ? s.adsPos : u;
    let p = lerp(u[0], f[0], c) + Math.cos(this.bobT) * h + this.swayX * 0.4,
      m =
        lerp(u[1], f[1], c) +
        (1 - Math.cos(this.bobT * 2)) * h * 0.4 +
        Math.sin(this.breathTime * 2.2) * 0.0025 * (1 - c) +
        this.swayY * 0.4,
      y = lerp(u[2], f[2], c) + this.recoilZ,
      g = this.swayY + this.recoilRX,
      b = this.swayX,
      S = 0;
    if (this.miningActive && !r) {
      const I = 0.0022 + this.miningProgress * 0.0045;
      ((p += (Math.random() - 0.5) * I),
        (m += (Math.random() - 0.5) * I),
        (g += (Math.random() - 0.5) * (0.006 + this.miningProgress * 0.012)),
        (S += (Math.random() - 0.5) * 0.008),
        d &&
          ((g -= 0.13 + this.miningProgress * 0.1), (b -= 0.08), (S += 0.16)));
    }
    if (this.held === ITEM.WELDER && this.weldHeat > 0) {
      const I = this.weldHeat;
      ((g -= 0.16 * I),
        (y -= 0.035 * I),
        (m += 0.012 * I),
        this.weldActive &&
          ((p += (Math.random() - 0.5) * 0.0045),
          (m += (Math.random() - 0.5) * 0.0045),
          (S += (Math.random() - 0.5) * 0.012)));
    }
    const M = !!s && this.reloadT >= 0;
    if (this.rig) {
      const I = this.rig.gunOffset(M ? this.reloadT : -1, this.rigOffset);
      ((g += I.rx), (b += I.ry), (S += I.rz), (m += I.py), (p += I.px));
    } else if (M) {
      const I = this.reloadT,
        O = Ms(I / 0.2) * Ms((1 - I) / 0.2);
      ((g -= O * 0.55), (S += O * 0.35));
    }
    const x =
      (D = this.current) == null
        ? void 0
        : D.group.getObjectByName("launcher-breech");
    if (x) {
      const I = this.reloadT;
      x.rotation.x = I >= 0 ? -0.65 * Ms(I / 0.18) * Ms((1 - I) / 0.2) : 0;
    }
    ((this.drawT = Math.min(1, this.drawT + e / 0.38)),
      (this.kickT = Math.min(1, this.kickT + e / 0.07)));
    const T = 1 - Ms(this.drawT);
    if (
      ((m -= T * 0.26),
      (g -= T * 0.95),
      (S += T * 0.35),
      (p += T * 0.04),
      this.knifeAnim)
    ) {
      const I = this.knifeAnim;
      I.t = Math.min(1, I.t + e / I.dur);
      const O = jb(I.keys, I.t, this.knifeOut);
      ((p += O[0]),
        (m += O[1]),
        (y += O[2]),
        (g += O[3]),
        (b += O[4]),
        (S += O[5]),
        I.t >= 1 && !I.hold && (this.knifeAnim = null));
    }
    if (this.held === ITEM.FISHING_ROD && this.current) {
      const I = this.rod;
      let O = 0;
      if (
        ((I.out += ((I.outTarget ? 1 : 0) - I.out) * (1 - Math.exp(-5 * e))),
        (g -= 0.3 * I.out),
        (m -= 0.015 * I.out),
        (p -= 0.02 * I.out),
        (S += Math.sin(this.bobT * 0.5 + 1.3) * 0.015 * I.out),
        I.castT >= 0)
      ) {
        I.castT = Math.min(1, I.castT + e / fne);
        const X = jb(dne, I.castT, this.knifeOut);
        if (
          ((p += X[0]),
          (m += X[1]),
          (y += X[2]),
          (g += X[3]),
          (b += X[4]),
          (S += X[5]),
          (O =
            I.castT < 0.55
              ? -0.5 * Ms(I.castT / 0.55)
              : I.castT < 0.75
                ? -0.5 + 1.3 * Ms((I.castT - 0.55) / 0.2)
                : 0.8 * (1 - Ms((I.castT - 0.75) / 0.25))),
          I.castT >= une && I.release)
        ) {
          const Q = I.release;
          ((I.release = null), Q());
        }
        I.castT >= 1 && (I.castT = -1);
      }
      if (I.strikeT >= 0) {
        I.strikeT = Math.min(1, I.strikeT + e / mne);
        const X = jb(pne, I.strikeT, this.knifeOut);
        ((p += X[0]),
          (m += X[1]),
          (y += X[2]),
          (g += X[3]),
          (b += X[4]),
          (S += X[5]),
          this.spinReel(e * 22 * (1 - I.strikeT)),
          I.strikeT >= 1 && (I.strikeT = -1));
      }
      I.tension > 0.3 &&
        ((g -= (I.tension - 0.3) * 0.18), (m -= (I.tension - 0.3) * 0.02));
      const F = I.tension + O;
      ((I.bend += (F - I.bend) * (1 - Math.exp(-16 * e))),
        Yk(this.current.group, I.bend));
    }
    if (this.followT > 0) {
      const I = QM(this.followT / KR);
      ((m -= 0.07 * I),
        (y -= 0.2 * I),
        (g -= 0.75 * I),
        (b += 0.12 * I),
        (this.followT = Math.max(0, this.followT - e)));
    }
    const A = this.throwHold >= 0 ? 0.35 + 0.65 * Jm(this.throwHold) : 0;
    if (
      ((this.throwCock +=
        (A - this.throwCock) *
        (1 - Math.exp(-(A > this.throwCock ? 14 : 22) * e))),
      this.throwCock > 0.002)
    ) {
      const I = this.throwCock,
        O = I > 0.97 ? Math.sin(this.breathTime * 46) * 0.004 : 0;
      ((p += 0.04 * I + O),
        (m += 0.09 * I),
        (y += 0.035 * I),
        (g += 0.5 * I),
        (S -= 0.16 * I));
    }
    const _ =
      this.swingT > 0 && !this.knifeAnim ? 1 - this.swingT / this.swingDur : 0;
    if (this.swingT > 0 && this.rig) {
      const I = Math.sin(_ * Math.PI);
      ((g -= I * 0.8), (y -= I * 0.18));
    }
    const C = this.medical;
    if (
      C &&
      (this.held === ITEM.BANDAGE ||
        this.held === ITEM.MEDKIT ||
        this.held === ITEM.MILITARY_MEDKIT)
    ) {
      const I = QM(clamp(C.p / 0.16, 0, 1));
      if (C.kind === "bandage") {
        const O = C.p * Math.PI * 2 * 2.6;
        ((p -= 0.15 * I),
          (m += 0.03 * I),
          (y += 0.06 * I),
          (g += 0.45 * I),
          (b += 0.5 * I),
          (p += Math.sin(O) * 0.055 * I),
          (m += Math.cos(O) * 0.04 * I),
          (S += Math.sin(O) * 0.45 * I));
      } else {
        const O = Math.sin(C.p * Math.PI * 7) * (C.p > 0.25 ? 1 : 0);
        ((p -= 0.12 * I),
          (m += 0.06 * I),
          (y += 0.05 * I),
          (g -= 0.5 * I),
          (S += 0.15 * I),
          (m += O * 0.012 * I),
          (S += O * 0.05 * I));
      }
    }
    if (this.medicalDoneT > 0) {
      const I = 1 - this.medicalDoneT / 0.55,
        O = Math.sin(I * Math.PI);
      ((m -= 0.32 * O),
        (g -= 0.6 * O),
        (this.medicalDoneT = Math.max(0, this.medicalDoneT - e)));
    }
    if (
      ((g -= 0.25 * this.sprintBlend),
      (b += 0.18 * this.sprintBlend),
      (S += Math.sin(this.bobT) * h * 0.7),
      ((s == null ? void 0 : s.kind) === "launcher" ||
        this.held === ITEM.MILITARY_MEDKIT) &&
        this.camera.aspect < 1 &&
        (p *= lerp(Math.max(0.35, this.camera.aspect), 1, c)),
      a.position.set(p, m, y),
      a.rotation.set(g, b, S),
      this.rig ||
        sne(
          a,
          ((H = this.hold) == null ? void 0 : H.pivot) ?? this.toolPivot,
          Zie(
            _,
            ((G = this.hold) == null ? void 0 : G.kind) === "empty",
            this.swingOut,
          ),
        ),
      this.rig && s)
    ) {
      const I = 60 / s.rpm,
        O = this.rig.base,
        F =
          this.cooldown > 0 && (O === ITEM.AWP || O === ITEM.SHOTGUN) && !M
            ? clamp(
                (1 - this.cooldown / I - (O === ITEM.AWP ? 0.12 : 0.15)) /
                  (O === ITEM.AWP ? 0.72 : 0.6),
                0,
                1,
              )
            : -1,
        X = s.mag > 0 && this.rounds(s) <= 0;
      (this.rig.pose({
        reload: M ? this.reloadT : -1,
        ads: c,
        empty: X,
        cycle: F > 0 && F < 1 ? F : -1,
        kick: this.kickT,
      }),
        this.rig.ejectNow && this.ejectCasing(!1, O === ITEM.SHOTGUN));
    }
    const R =
      this.popT > 0 && !this.hold
        ? Math.sin((1 - this.popT / 0.14) * Math.PI) * 0.06
        : 0;
    a.scale.setScalar(1 + R);
  }
}
