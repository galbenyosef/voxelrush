// index-BeUlFSPp 246 — math
// Lines 130446-131991 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class s0e {
  constructor(e, t, i, n, o, a, r, l) {
    ((this.scene = e),
      (this.camera = t),
      (this.world = i),
      (this.effects = n),
      (this.sfx = o),
      (this.remotes = a),
      (this.projectiles = r),
      (this.atlasTex = l),
      (this.laser = new DN(e)));
  }
  hooks = {
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
  };
  lockConfirmed = !1;
  targetLock = new mQ();
  lockTarget = null;
  lockSendAt = 0;
  held = 0;
  heldBlock = 0;
  heldInstance = -1;
  vms = new Map();
  current = null;
  holds = new Map();
  hold = null;
  toolPivot = null;
  handsAllowed = !0;
  swingDur = 0.3;
  swingOut = { x: 0, y: 0, z: 0, q: new hi(), flick: 0 };
  onSwing = () => {};
  onAmmoChange = () => {};
  reloadT = -1;
  ammoPickerOpen = !1;
  reloadHold = 0;
  reloadShare = 1;
  reloadAmmo = 0;
  pickerAmmo = 0;
  cooldown = 0;
  adsT = 0;
  crouching = !1;
  prone = !1;
  bobT = 0;
  strideBlend = 0;
  sprintBlend = 0;
  breathTime = 0;
  swayX = 0;
  swayY = 0;
  readiness = new Lce();
  handling = vL(0);
  triggerT = 0;
  kickBack = new Jp();
  kickRise = new Jp();
  kickYaw = new Jp();
  kickRoll = new Jp();
  airLag = 0;
  landDip = new Jp();
  wasAir = !1;
  fallSpeed = 0;
  heldHidden = !1;
  flashT = 0;
  slideT = 0;
  swingT = 0;
  knifeAnim = null;
  knifeCombo = 0;
  followT = 0;
  grenadeHideT = 0;
  throwHold = -1;
  throwPower = 0;
  throwLatch = !1;
  throwCock = 0;
  throwArc = null;
  throwOrigin = new k();
  throwVel = new k();
  framePitchKick = 0;
  recoilOwed = 0;
  recoilRest = 0;
  miningActive = !1;
  miningProgress = 0;
  spinVel = 0;
  minigunSpinup = 0;
  popT = 0;
  rig = null;
  drawT = 1;
  kickT = 1;
  rigOffset = { rx: 0, ry: 0, rz: 0, py: 0, px: 0 };
  tmpEject = new k();
  tmpRight = new k();
  tmpV1 = new k();
  knifeOut = [0, 0, 0, 0, 0, 0];
  rod = {
    castT: -1,
    release: null,
    strikeT: -1,
    out: 0,
    outTarget: !1,
    tension: 0,
    bend: 0,
  };
  tmpV2 = new k();
  laser;
  laserCamPos = new k();
  laserCamDir = new k();
  laserStart = new k();
  laserDir = new k();
  laserGun = new k();
  laserEnd = new k();
  tmpLamp = new k();
  get holdsRun() {
    return !!Ss[this.held] && this.readiness.holdsRun;
  }
  get carried() {
    return this.readiness.lowered;
  }
  get shouldered() {
    const e = Ss[this.held];
    return (
      !!e &&
      e.kind !== "grenade" &&
      this.reloadT < 0 &&
      (this.adsT > 0.45 || this.readiness.holdsRun)
    );
  }
  rounds(e) {
    return qv(this.hooks.getHeldMagazine(), e.mag);
  }
  setMag(e, t) {
    const i = Ss[e];
    if (!i || i.mag <= 0) return;
    const n = Math.max(0, Math.min(i.mag, Math.floor(t)));
    (this.rounds(i) === n && this.hooks.getHeldMagazine() !== void 0) ||
      (this.hooks.setHeldMagazine(mf(n, this.loadedAmmo())),
      this.onAmmoChange());
  }
  magInfo(e, t) {
    const i = Ss[e];
    return !i || i.mag <= 0 ? null : { loaded: qv(t, i.mag), max: i.mag };
  }
  setHandsAllowed(e) {
    e !== this.handsAllowed &&
      ((this.handsAllowed = e),
      this.select(this.held, this.heldBlock, this.heldInstance, !0));
  }
  cosmetic;
  cosmeticOwner = "";
  inspectT = -1;
  inspectPoseScratch = { x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0 };
  inspectSerial = 0;
  inspectKnifeQ = new hi()
    .setFromEuler(new pi(0, -1.25, 0.25))
    .multiply(new hi().setFromEuler(new pi(0.5, 0.3, -0.85)).invert());
  weaponInfoKey = "";
  resetWeaponInfo() {
    ((this.weaponInfoKey = ""), RR());
  }
  setCosmetic(e, t, i = !0) {
    ((this.cosmetic = e),
      (this.cosmeticOwner = t),
      this.current && qa(this.current.group, e, t, i));
    const n = this.held + ":" + this.heldInstance + ":" + (e?.uid ?? "");
    if (n !== this.weaponInfoKey)
      if (
        ((this.weaponInfoKey = n),
        Pf.includes(gm(ai(this.held) || this.held)) && !Lo(this.held))
      ) {
        const o = io(e?.skin);
        KX(
          this.weaponName(),
          this.weaponColor() || "#e5efcb",
          i && o?.tracking && e
            ? U5(this.held) + " " + zA(e, t, this.held)
            : "",
        );
      } else RR();
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
  select(e, t = 0, i = -1, n = !1) {
    if (
      !n &&
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
      (this.triggerT = 0),
      (this.handling = vL(ai(e) || e)),
      this.kickBack.reset(),
      this.kickRise.reset(),
      this.kickYaw.reset(),
      this.kickRoll.reset(),
      this.laser.hide(),
      (this.rig = null),
      this.current &&
        (this.camera.remove(this.current.group), (this.current = null)),
      this.hold && (this.camera.remove(this.hold.root), (this.hold = null)),
      (this.toolPivot = null),
      (this.swingT = 0),
      (this.throwHold = -1),
      (this.knifeAnim = null),
      this.rod.release?.(),
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
      e >= 256 && Ice(e))
    ) {
      let r = this.vms.get(e);
      if (
        (r ||
          ((r = Pd(e)),
          rX(r.group),
          dK(r.group),
          Ss[e]
            ? (r.group.userData.rig = new JK(
                r,
                ai(e) || e,
                Ss[e].kind !== "grenade",
              ))
            : (HX(r.group),
              (r.group.userData.toolPivot = wce(r.group, wL(e), Ece(e)).pivot)),
          this.vms.set(e, r)),
        (this.current = r),
        (this.rig = r.group.userData.rig ?? null),
        this.rig)
      ) {
        const l = this.rig.base;
        ((this.rig.onFoley = (c) => this.sfx.foley(c, l)),
          n || this.sfx.foley("draw", l));
      }
      ((this.toolPivot = r.group.userData.toolPivot ?? null),
        bL(r.group),
        this.camera.add(r.group));
      return;
    }
    if (e <= 0 && !this.handsAllowed) return;
    const o = Math.max(0, e);
    let a = this.holds.get(o);
    (a || ((a = vce(o, this.atlasTex)), this.holds.set(o, a)),
      (this.hold = a),
      bL(a.root),
      this.camera.add(a.root));
  }
  rebuildViewModel() {
    const e = this.held,
      t = this.heldBlock,
      i = this.heldInstance;
    (this.current &&
      (this.camera.remove(this.current.group), (this.current = null)),
      this.hold && (this.camera.remove(this.hold.root), (this.hold = null)));
    for (const n of this.holds.values())
      n.root.getObjectByName("fp-held-block")?.traverse((a) => {
        const r = a;
        r.isMesh &&
          (r.userData.sharedGeometry || r.geometry?.dispose(),
          r.material?.dispose());
      });
    this.holds.clear();
    for (const n of this.vms.values())
      (Gc(n.group),
        n.group.traverse((o) => {
          const a = o;
          if (
            (a.userData.sharedGeometry || a.geometry?.dispose(),
            a.userData.sharedMaterial)
          )
            return;
          const r = a.material;
          Array.isArray(r) ? r.forEach((l) => l.dispose()) : r?.dispose();
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
    if (this.held !== w.COMBAT_KNIFE) return;
    const e = [Pce, Oce, Nce][this.knifeCombo++ % 3];
    ((this.knifeAnim = {
      keys: e,
      t: 0,
      dur: 0.34 * Jt.knifeCooldown(),
      hold: !1,
    }),
      (this.swingT = 0),
      this.sfx.knifeSlash(),
      this.onSwing());
  }
  knifeWindup(e) {
    this.held === w.COMBAT_KNIFE &&
      ((this.knifeAnim = { keys: Dce, t: 0, dur: e, hold: !0 }),
      (this.swingT = 0));
  }
  knifeCancel() {
    this.knifeAnim?.hold && (this.knifeAnim = null);
  }
  knifeRelease() {
    ((this.knifeAnim = null),
      (this.followT = ML),
      this.sfx.knifeSlash(),
      this.onSwing());
  }
  get knifeBusy() {
    return !!this.knifeAnim && !this.knifeAnim.hold;
  }
  holdKind() {
    return this.rig
      ? "rig"
      : this.current
        ? "tool"
        : (this.hold?.kind ?? "none");
  }
  weldActive = !1;
  weldHeat = 0;
  setWelding(e) {
    this.weldActive = e;
  }
  setMining(e, t = 0) {
    ((this.miningActive = e), (this.miningProgress = t));
  }
  breakPop() {
    ((this.popT = 0.14), this.kickGun(1));
  }
  isReloading() {
    return this.reloadT >= 0;
  }
  reloadSeconds(e) {
    return e.reload * this.reloadShare * Jt.weaponReload(ai(e.item) || e.item);
  }
  magState() {
    const e = Ss[this.held];
    if (!e || e.mag <= 0) return null;
    const t = this.loadedAmmo(),
      i =
        this.hooks.isCreative() || (t && this.hooks.endlessAmmo?.(t))
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
    const e = Ss[this.held];
    if (!e || e.mag === 0 || this.hooks.isCreative()) return null;
    const t = this.loadedAmmo();
    return {
      rounds: this.rounds(e),
      reserve: t
        ? this.hooks.endlessAmmo?.(t)
          ? 1 / 0
          : this.hooks.countItem(t)
        : 0,
      mag: e.mag,
    };
  }
  ammoText() {
    const e = Ss[this.held];
    if (!e) return "";
    if (this.reloadT >= 0) return "▮▮▮";
    if (this.hooks.isCreative())
      return e.mag === 0 ? "∞" : `${this.rounds(e)} / ∞`;
    const t = this.held === w.GRENADE ? w.GRENADE : this.loadedAmmo(),
      i = t ? this.hooks.countItem(t) : 0;
    return e.mag === 0
      ? String(i)
      : t && this.hooks.endlessAmmo?.(t)
        ? `${this.rounds(e)} / ∞`
        : `${this.rounds(e)} / ${i}`;
  }
  weaponColor() {
    const e = io(this.cosmetic?.skin);
    return e ? Oo[e.rarity].color : "";
  }
  weaponName() {
    if (!Pf.includes(gm(ai(this.held) || this.held)) || Lo(this.held))
      return "";
    const e = ai(this.held) ? fc(this.held) : Li(this.held),
      t = io(this.cosmetic?.skin);
    return e + (t ? " | " + I(t.name, t.ru) : "");
  }
  update(e, t, i) {
    if (
      ((this.framePitchKick = 0),
      this.recoilOwed > 0 && (this.recoilRest -= e) <= 0)
    ) {
      const m = Math.min(this.recoilOwed, (this.recoilOwed * jce + 0.004) * e);
      ((this.recoilOwed -= m), (this.framePitchKick -= m));
    }
    ((this.crouching = i.crouching),
      (this.prone = i.prone),
      (this.cooldown = Math.max(0, this.cooldown - e)),
      (this.flashT = Math.max(0, this.flashT - e)),
      (this.slideT = Math.max(0, this.slideT - e)),
      (this.swingT = Math.max(0, this.swingT - e)),
      (this.grenadeHideT = Math.max(0, this.grenadeHideT - e)),
      (this.popT = Math.max(0, this.popT - e)),
      (this.triggerT = Math.max(0, this.triggerT - e)),
      (this.heldHidden = !1));
    const n = Ss[this.held],
      o = i.allowFire || !!i.allowReload,
      a = !!n && n.kind !== "grenade" && t.mouseR && this.reloadT < 0 && o;
    (a && this.adsT === 0 && this.rig && this.sfx.foley("adsIn", this.rig.base),
      (this.adsT = Oe(
        this.adsT + (a ? e / (n?.adsTime ?? Ba[0]) : -e / 0.11),
        0,
        1,
      )));
    const r = !!n?.zoomFov && this.adsT > 0.6,
      l = this.held === w.RPG && this.loadedAmmo() === w.ROCKET_GUIDED;
    this.lockTarget =
      l && a && !this.ammoPickerOpen
        ? (this.hooks.guidedTarget?.() ?? null)
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
          this.hooks.lockUpdate?.(
            this.lockTarget?.kind ?? 0,
            this.lockTarget?.id ?? 0,
          )),
      n &&
        this.reloadT >= 0 &&
        ((this.reloadT +=
          e /
          (n.reload *
            this.reloadShare *
            Jt.weaponReload(ai(n.item) || n.item))),
        this.reloadT >= 1 && ((this.reloadT = -1), this.finishReload(n))),
      n && n.mag > 0 && o)
    ) {
      if (
        (t.actionPressed("reload") &&
          !t.action("reload") &&
          this.reloadHold === 0 &&
          !this.ammoPickerOpen &&
          this.reloadT < 0 &&
          this.startReload(n),
        t.action("reload")
          ? (this.reloadHold || (this.reloadHold = performance.now()),
            performance.now() - this.reloadHold >= 380 &&
              !this.ammoPickerOpen &&
              _l(this.held).length > 1 &&
              ((this.reloadT = -1),
              (this.ammoPickerOpen = !0),
              (this.pickerAmmo = this.loadedAmmo()),
              this.showAmmoPicker()))
          : this.reloadHold > 0 &&
            (!this.ammoPickerOpen && this.reloadT < 0 && this.startReload(n),
            (this.reloadHold = 0)),
        this.ammoPickerOpen)
      ) {
        const m = _l(this.held);
        t.pressed.has("Escape") && this.closeAmmoPicker();
        for (let g = 0; g < m.length; g++)
          t.pressed.has("Digit" + (g + 1)) && this.chooseAmmo(m[g]);
        (t.wheel &&
          ((this.pickerAmmo = m[(m.indexOf(this.pickerAmmo) + 1) % m.length]),
          this.showAmmoPicker()),
          (t.pressed.has("Enter") || t.clickL) &&
            this.chooseAmmo(this.pickerAmmo));
      }
    } else ((this.reloadHold = 0), this.closeAmmoPicker());
    const h =
      this.held === w.MINIGUN &&
      t.mouseL &&
      i.allowFire &&
      !this.ammoPickerOpen &&
      this.reloadHold === 0 &&
      this.reloadT < 0 &&
      this.rounds(n) > 0;
    ((this.minigunSpinup = h ? Math.min(hb, this.minigunSpinup + e) : 0),
      n &&
        !i.allowFire &&
        i.allowReload &&
        t.clickL &&
        !this.ammoPickerOpen &&
        i.onBlockedFire?.());
    const d =
      !!n &&
      n.kind !== "grenade" &&
      i.allowFire &&
      !this.ammoPickerOpen &&
      this.reloadHold === 0 &&
      this.reloadT < 0;
    !d || n.auto ? (this.triggerT = 0) : t.clickL && (this.triggerT = kce);
    const u = n
      ? o &&
        (a ||
          this.throwHold >= 0 ||
          this.triggerT > 0 ||
          (i.allowFire && (t.mouseL || t.clickL)))
      : !!i.allowSwing &&
        (t.mouseL ||
          t.mouseR ||
          this.swingT > 0 ||
          this.miningActive ||
          this.weldActive);
    this.readiness.update(
      e,
      i.sprint && this.reloadT < 0 && !this.knifeAnim && !this.medical,
      u,
      this.handling,
    );
    const f = this.readiness.up && this.drawT >= _ce;
    if (n?.kind === "grenade") this.updateThrow(e, t, n, i.allowFire);
    else if (d) {
      const m = n.auto
        ? t.mouseL
        : this.triggerT > 0 && (!f || this.cooldown <= Cce);
      (!n.auto && !m && (this.triggerT = 0),
        m &&
          this.cooldown <= 0 &&
          (n.mag > 0 && this.rounds(n) <= 0
            ? (this.rig &&
                this.reloadT < 0 &&
                (t.clickL || this.triggerT > 0) &&
                this.sfx.foley("dry", this.rig.base),
              (this.triggerT = 0),
              this.startReload(n))
            : f &&
              (this.held !== w.MINIGUN || this.minigunSpinup >= hb) &&
              ((this.triggerT = 0), this.fire(n))));
    }
    if (
      (!n &&
        i.allowSwing &&
        !yL.has(this.held) &&
        (this.hold || this.current) &&
        (t.clickL
          ? this.swing(!0)
          : this.miningActive &&
            t.mouseL &&
            this.swingT <= 0 &&
            this.swing(!1)),
      n?.kind !== "grenade" &&
        (this.throwHold >= 0 || this.throwArc) &&
        ((this.throwHold = -1),
        this.throwArc?.update(
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
      this.animate(e, t, i, n, r),
      this.inspectT >= 0 && this.current)
    ) {
      this.inspectT += e;
      const m = this.inspectT;
      if (m >= q0) this.inspectT = -1;
      else {
        const g = jm(m),
          y = No(this.held)
            ? xK(m, No(this.held) === 338, this.inspectPoseScratch)
            : vO(m, this.inspectPoseScratch, ai(this.held) || this.held),
          b = this.current.group;
        ((b.position.x += y.x),
          (b.position.y += y.y),
          (b.position.z += y.z),
          (b.rotation.x += y.rx),
          (b.rotation.y += y.ry),
          (b.rotation.z += y.rz),
          this.held === w.COMBAT_KNIFE &&
            (this.current.group.quaternion.slerp(this.inspectKnifeQ, g),
            (this.current.group.position.x -= 0.05 * g),
            (this.current.group.position.y += 0.07 * g)));
      }
    }
    const p = n?.zoomFov ? n.zoomFov / i.baseFov : 1;
    return {
      fovScale: r
        ? p
        : ns(1, n && this.adsT > 0 ? (n.adsZoom ?? SL) : 1, this.adsT),
      sensScale: r ? p * 1.4 : ns(1, (n?.adsZoom ?? SL) * 0.92, this.adsT),
      scoped: r,
      pitchKick: this.framePitchKick,
      adsT: this.adsT,
    };
  }
  flashlightPose(e, t) {
    const i = this.current?.lightMount;
    return !i || !this.current?.group.parent
      ? !1
      : (i.getWorldPosition(e),
        i.getWorldQuaternion(t),
        e.addScaledVector(this.tmpLamp.set(0, 0, -1).applyQuaternion(t), 0.055),
        !0);
  }
  updateLaser(e, t = null, i = !0) {
    if (!e || !Ss[this.held] || !so(this.held).laser) {
      this.laser.hide();
      return;
    }
    const n = this.hooks.thirdPersonAim?.() ?? null,
      o = this.current?.laserMount ?? this.current?.muzzle ?? null,
      a = !n && i && !this.heldHidden && !!o && !!this.current?.group.parent,
      r = n ? (n.laser ?? n.muzzle) : a ? null : t;
    if (!a && !r) {
      this.laser.hide();
      return;
    }
    (this.camera.updateMatrixWorld(!0),
      this.camera.getWorldDirection(this.laserCamDir));
    const l = 150;
    let c;
    if (n) (this.laserEnd.copy(n.target), (c = n.landed ?? !0));
    else {
      this.hooks.seatOrigin?.(this.laserCamPos) ||
        this.camera.getWorldPosition(this.laserCamPos);
      const p =
        this.hooks.aimDistance?.(this.laserCamPos, this.laserCamDir, l) ??
        this.world.raycast(this.laserCamPos, this.laserCamDir, l)?.dist ??
        l;
      ((c = p < l),
        this.laserEnd
          .copy(this.laserCamPos)
          .addScaledVector(this.laserCamDir, p));
    }
    let h = 0;
    if (a) {
      (o.getWorldPosition(this.laserStart),
        o.getWorldDirection(this.laserGun).negate(),
        this.laserStart.addScaledVector(this.laserGun, 0.04));
      const p = this.laserGun.dot(this.laserCamDir);
      h = ni.smoothstep(Math.acos(Math.min(1, Math.max(-1, p))), 0.09, 0.26);
    } else this.laserStart.copy(r);
    this.laserDir.copy(this.laserEnd).sub(this.laserStart);
    const d = this.laserDir.length();
    (d < 0.001
      ? this.laserDir.copy(this.laserCamDir)
      : this.laserDir.divideScalar(d),
      h > 0 && this.laserDir.lerp(this.laserGun, h).normalize());
    const u = h > 0 ? l : d + 0.05,
      f = this.world.raycast(this.laserStart, this.laserDir, u);
    (f
      ? (this.laserEnd
          .copy(this.laserStart)
          .addScaledVector(this.laserDir, f.dist),
        (c = !0))
      : h > 0 &&
        (this.laserEnd.copy(this.laserStart).addScaledVector(this.laserDir, l),
        (c = !1)),
      this.laser.show(this.laserStart, this.laserEnd, c, this.camera));
  }
  loadedAmmo() {
    return W1(this.held, this.hooks.getHeldMagazine());
  }
  closeAmmoPicker() {
    (this.ammoPickerOpen && this.hooks.ammoPicker([], 0, () => {}),
      (this.ammoPickerOpen = !1));
  }
  showAmmoPicker() {
    this.hooks.ammoPicker(_l(this.held), this.pickerAmmo, (e) =>
      this.chooseAmmo(e),
    );
  }
  chooseAmmo(e) {
    if (
      !_l(this.held).includes(e) ||
      (!this.hooks.isCreative() && this.hooks.countItem(e) <= 0)
    )
      return;
    (this.closeAmmoPicker(), (this.reloadHold = 0));
    const t = Ss[this.held];
    t && this.startReload(t, e);
  }
  startReload(e, t = this.loadedAmmo()) {
    if (e.mag === 0) return;
    const i = this.hooks.isCreative()
      ? t
      : Nk(e.item, t, (a) => this.hooks.countItem(a));
    if (!i || (i === this.loadedAmmo() && this.rounds(e) >= e.mag)) return;
    ((this.reloadAmmo = i), (this.reloadT = 0));
    const n = this.rounds(e) <= 0,
      o = ai(e.item) || e.item;
    ((this.reloadShare = YK(o, n)),
      this.rig?.beginReload(n),
      this.rig?.plan.sounds || this.sfx.reload());
  }
  finishReload(e) {
    (this.hooks.atomic ?? ((i) => i()))(() => this.finishReloadEdit(e));
  }
  medical = null;
  medicalDoneT = 0;
  medicalDone() {
    this.medicalDoneT = 0.55;
  }
  lastReload = null;
  redoReload() {
    const e = this.lastReload,
      t = Ss[this.held];
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
      n = this.hooks.isCreative(),
      o = n
        ? this.reloadAmmo
        : Nk(e.item, this.reloadAmmo, (l) => this.hooks.countItem(l));
    if (!o) return;
    let a = i;
    if (o !== t && i > 0) {
      const l = n ? i : this.hooks.returnAmmo(t, i);
      if (((a = i - l), this.hooks.setHeldMagazine(mf(a, t)), a > 0)) {
        this.onAmmoChange();
        return;
      }
    }
    const r = n ? e.mag - a : Math.min(e.mag - a, this.hooks.countItem(o));
    r > 0 &&
      (n || this.hooks.consumeItem(o, r)) &&
      ((this.lastReload = {
        at: performance.now(),
        item: this.held,
        rounds: a + r,
      }),
      this.hooks.setHeldMagazine(mf(a + r, o)),
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
    if (!this.current?.spin) return;
    this.current.spin.rotation.z += e;
    const t =
      this.held === w.FISHING_ROD
        ? this.current.group.getObjectByName("reel-rotor")
        : null;
    t && (t.rotation.z -= e * 5.2);
  }
  rodCast(e) {
    if (this.held !== w.FISHING_ROD || !this.current) {
      e();
      return;
    }
    this.rod.castT >= 0 ||
      ((this.rod.castT = 0), (this.rod.release = e), (this.rod.strikeT = -1));
  }
  rodStrike() {
    this.held === w.FISHING_ROD && (this.rod.strikeT = 0);
  }
  rodBusy() {
    return this.rod.castT >= 0;
  }
  rodLine(e, t) {
    ((this.rod.outTarget = e), (this.rod.tension = t));
  }
  hideHeld() {
    ((this.heldHidden = !0), this.current && (this.current.group.visible = !1));
  }
  fire(e) {
    (this.hooks.atomic ?? ((i) => i()))(() => this.fireEdit(e));
  }
  fireEdit(e) {
    const t =
        e.item === w.RPG &&
        this.loadedAmmo() === w.ROCKET_GUIDED &&
        !!this.lockTarget &&
        this.targetLock.seconds >= Ad &&
        this.lockConfirmed,
      i =
        this.hooks.personalVehicle?.() === void 0
          ? (this.hooks.thirdPersonAim?.() ?? null)
          : null,
      n = i
        ? i.origin.clone()
        : this.camera.getWorldPosition(this.tmpV1.clone()),
      o = i
        ? i.target.clone().sub(i.origin).normalize()
        : this.camera.getWorldDirection(this.tmpV2.clone()),
      a = o.clone(),
      r = this.prone ? Wce : this.crouching ? Gce : 1,
      l = ai(e.item) || e.item,
      c = Jt.weaponSpread(l),
      h = ns(e.spread, e.adsSpread, this.adsT) * r * c;
    if (
      ((o.x += (Math.random() - 0.5) * 2 * h),
      (o.y += (Math.random() - 0.5) * 2 * h),
      (o.z += (Math.random() - 0.5) * 2 * h),
      o.normalize(),
      this.hooks.prepareShot?.(n, o) === !1)
    )
      return;
    if (!this.hooks.isCreative() && e.mag === 0) {
      const p = e.item === w.GRENADE ? w.GRENADE : G0[e.item];
      if (
        !p ||
        (e.item === w.GRENADE
          ? this.hooks.countItem(p) < 1
          : !this.hooks.consumeItem(p, 1))
      )
        return;
    }
    ((this.cooldown = 60 / e.rpm),
      e.mag > 0 && this.setMag(e.item, this.rounds(e) - 1),
      this.hooks.wearHeld(e.item === w.MINIGUN || e.kind === "rocket" ? 2 : 1));
    const d = this.hooks.personalVehicle?.(),
      u =
        d !== void 0
          ? n.clone().addScaledVector(o, 0.6)
          : i
            ? (i.muzzle?.clone() ?? n.clone().addScaledVector(o, 0.6))
            : this.muzzleWorld(new k()),
      f =
        e.recoil *
        ns(1, 0.6, this.adsT) *
        c *
        (this.prone ? Vce : this.crouching ? $ce : 1) *
        (Xce ? qce : 1);
    if (
      ((this.framePitchKick += f),
      (this.recoilOwed = Math.min(0.14, this.recoilOwed + f * Kce)),
      (this.recoilRest = 60 / e.rpm + Yce),
      Jt.weaponShot(l, e.rpm),
      this.kickGun(1),
      e.kind === "hitscan")
    ) {
      this.hooks.onShot(e.item, u, o);
      const p = BT(this.loadedAmmo()),
        m = p
          ? {
              ...e,
              vehDmg: e.vehDmg * 3,
              blockDmg: Math.min(250, e.blockDmg * 3),
            }
          : e;
      for (let y = 0; y < (e.pellets ?? 1); y++) {
        const b = o.clone();
        if (e.pellets) {
          const S = new k(1, 0, 0).applyQuaternion(this.camera.quaternion),
            M = new k(0, 1, 0).applyQuaternion(this.camera.quaternion),
            E = Math.random() * Math.PI * 2,
            A = Math.sqrt(Math.random()) * h;
          b.copy(a)
            .addScaledVector(S, Math.cos(E) * A)
            .addScaledVector(M, Math.sin(E) * A)
            .normalize();
        }
        (e.pellets && this.hooks.prepareShot?.(n, b) === !1) ||
          this.resolveHitscan(m, n, b, u, p);
      }
      (this.sfx.shot(e.sfx, 0, so(this.held).suppressor),
        (this.flashT = 0.05),
        this.current &&
          ((this.current.flash.visible = !0),
          (this.current.flash.rotation.z = Math.random() * Math.PI * 2)),
        this.effects.flash(u, 2.2, 0.06),
        e.item === w.GLOCK && (this.slideT = 0.09),
        (this.kickT = 0));
      const g = ai(e.item) || e.item;
      g !== w.AWP &&
        g !== w.SHOTGUN &&
        d === void 0 &&
        !i &&
        this.ejectCasing(g === w.MINIGUN);
    } else if (e.kind === "launcher")
      (this.projectiles.spawn(
        mt.GRENADE_40MM,
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
      (this.projectiles.spawn(mt.ROCKET, u, o.clone().multiplyScalar(38), !0, {
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
      const p = new k(...vC(o.x, o.y, o.z, this.throwPower));
      (this.projectiles.spawn(
        mt.GRENADE,
        n.clone().addScaledVector(o, 0.5),
        p,
        !0,
        { ignoreVehicle: d },
      ),
        this.hooks.isCreative() || this.hooks.consumeItem(w.GRENADE, 1),
        (this.swingT = this.swingDur = 0.2 + 0.08 * this.throwPower),
        (this.grenadeHideT = 0.45));
    }
  }
  updateThrow(e, t, i, n) {
    const o =
      n &&
      !this.ammoPickerOpen &&
      this.cooldown <= 0 &&
      (this.hooks.isCreative() || this.hooks.countItem(w.GRENADE) > 0);
    (!t.mouseL && !t.clickL && (this.throwLatch = !1),
      this.throwHold < 0 &&
        o &&
        !this.throwLatch &&
        (t.clickL || t.mouseL) &&
        (this.throwHold = 0),
      this.throwHold >= 0 &&
        (!n || t.clickR
          ? ((this.throwHold = -1),
            (this.throwLatch = !0),
            (this.cooldown = Math.max(this.cooldown, 0.25)))
          : t.mouseL
            ? (this.throwHold += e)
            : ((this.throwPower = zg(this.throwHold)),
              (this.throwHold = -1),
              this.fire(i))));
    const a = this.throwHold > fr.tap;
    if (a || this.throwArc) {
      const r = a ? zg(this.throwHold) : 0;
      if (a) {
        const l =
            this.hooks.personalVehicle?.() === void 0
              ? (this.hooks.thirdPersonAim?.() ?? null)
              : null,
          c = l
            ? this.tmpV2.copy(l.target).sub(l.origin).normalize()
            : this.camera.getWorldDirection(this.tmpV2);
        (l
          ? this.throwOrigin.copy(l.origin)
          : this.camera.getWorldPosition(this.throwOrigin),
          this.throwOrigin.addScaledVector(c, 0.5),
          this.throwVel.set(...vC(c.x, c.y, c.z, r)));
      }
      ((this.throwArc ??= new VT(this.scene, (l, c, h) =>
        this.world.isSolidAt(l, c, h),
      )),
        this.throwArc.update(
          e,
          a,
          this.throwOrigin,
          this.throwVel,
          this.camera.getWorldPosition(this.tmpV1),
          r,
          this.projectiles.gravity,
        ));
    }
  }
  kickGun(e) {
    const t = this.handling.kick;
    (this.kickBack.kick(t[0] * e, 0.1),
      this.kickRise.kick(t[1] * e, 0.14),
      this.kickYaw.kick((Math.random() - 0.5) * 2 * t[2] * e, 0.04),
      this.kickRoll.kick((Math.random() - 0.5) * 2 * t[3] * e, 0.06));
  }
  cancelThrow() {
    ((this.throwHold = -1), this.throwArc?.hide());
  }
  throwCharge() {
    return this.throwHold >= 0 ? zg(this.throwHold) : null;
  }
  ejectCasing(e = !1, t = !1) {
    const i = this.current?.group.getObjectByName("eject-port");
    if (i)
      if (
        (this.camera.updateMatrixWorld(),
        i.getWorldPosition(this.tmpEject),
        this.tmpRight
          .set(1, 0.25, 0.3)
          .applyQuaternion(this.camera.getWorldQuaternion(new hi()))
          .normalize(),
        t)
      )
        this.effects.casing(
          this.tmpEject,
          this.tmpRight,
          [10566704, 9056038],
          0.05,
        );
      else {
        const n = ai(this.held) || this.held;
        this.effects.casing(
          this.tmpEject,
          this.tmpRight,
          void 0,
          e || n === w.DEAGLE ? 0.045 : n === w.VECTOR ? 0.03 : 0.035,
        );
      }
  }
  resolveHitscan(e, t, i, n, o = !1) {
    const a = this.world.raycastBullet(t, i, e.range, e.punch);
    for (const b of a.torn)
      (this.hooks.onHitBlock(b.bx, b.by, b.bz, g9, b.block, b.point, t),
        this.effects.bulletImpact(b.point, le[b.block].color));
    const r = a.hit,
      l = r ? r.dist : e.range,
      c = this.remotes.raycastHit(t, i, l),
      h = this.hooks.botRay(t, i, c ? Math.min(c.dist, l) : l),
      d = this.hooks.animalRay(t, i, Math.min(c?.dist ?? l, h?.dist ?? l)),
      u = Math.min(c?.dist ?? l, h?.dist ?? l, d?.dist ?? l),
      f = this.hooks.vehicleRay(t, i, u),
      p = this.hooks.projectileRay(t, i, l);
    let m,
      g = !1;
    const y = (b) =>
      e.pellets
        ? Math.max(1, Math.round(e.dmg * Math.max(0.12, 1 - b / e.range)))
        : e.dmg;
    if (
      p &&
      (!f || p.dist < f.dist) &&
      (!c || p.dist < c.dist) &&
      (!h || p.dist < h.dist) &&
      (!d || p.dist < d.dist)
    ) {
      m = p.pos;
      const b =
        p.type === mt.NUCLEAR
          ? e.item === w.RPG
            ? zW
            : 1
          : e.item === w.RPG
            ? 3
            : 1;
      (this.hooks.onHitProjectile(p.id, p.pos, b),
        this.effects.bulletImpact(m, 16759620));
    } else if (
      f &&
      (!c || f.dist < c.dist) &&
      (!h || f.dist < h.dist) &&
      (!d || f.dist < d.dist)
    ) {
      m = t.clone().addScaledVector(i, f.dist);
      const b = Math.round(e.vehDmg * (f.type === L.DRONE ? 4 : 1));
      (this.hooks.onHitVehicle(f.id, Math.max(1, b), m, o ? 5 : 1, t),
        Jt.weaponHit(ai(e.item) || e.item, e.pellets),
        this.effects.bulletImpact(m, 16764006));
    } else
      d && (!c || d.dist < c.dist) && (!h || d.dist < h.dist)
        ? ((m = d.point),
          this.hooks.onHitAnimal(d.id, y(d.dist)),
          this.effects.bloodHit(m),
          Jt.weaponHit(ai(e.item) || e.item, e.pellets))
        : h && (!c || h.dist < c.dist)
          ? ((m = h.point),
            this.hooks.onHitBot(h.id, y(h.dist), e.item, h.region, h.point, t),
            this.effects.bloodHit(m),
            Jt.weaponHit(ai(e.item) || e.item, e.pellets))
          : c
            ? ((m = c.point),
              this.hooks.onHitPlayer(
                c.id,
                y(c.dist),
                e.item,
                c.region,
                c.point,
                t,
              ),
              this.effects.bloodHit(m),
              Jt.weaponHit(ai(e.item) || e.item, e.pellets))
            : r
              ? ((m = r.point),
                RS(r.block)
                  ? ((g = !0), this.hooks.onHitTarget(m, r.nx, r.ny, r.nz))
                  : (this.hooks.onHitBlock(
                      r.bx,
                      r.by,
                      r.bz,
                      e.blockDmg,
                      r.block,
                      r.point,
                      t,
                    ),
                    this.effects.bulletImpact(m, le[r.block].color),
                    this.hooks.onBulletHole?.(r)))
              : (m = t.clone().addScaledVector(i, e.range));
    if (o && (p || f || d || h || c || r) && !g) {
      const b = ai(e.item) || e.item,
        S = b === w.SHOTGUN;
      this.hooks.impactExplosion(
        m.clone().addScaledVector(i, -0.04),
        S ? 0.5 : b === w.AWP ? 1.2 : 0.8,
        S ? 4 : 12,
      );
    }
    this.effects.tracer(n.clone().addScaledVector(i, 0.4), m);
  }
  animateWelder(e) {
    const t = this.current.group,
      i = (t.userData.weld ??= {
        arc: t.getObjectByName("weld-arc"),
        tip: t.getObjectByName("weld-tip"),
        display: t.getObjectByName("weld-display"),
      });
    if (
      ((this.weldHeat = Oe(
        this.weldHeat + (this.weldActive ? e / 0.12 : -e / 0.9),
        0,
        1,
      )),
      i.arc)
    ) {
      i.arc.visible = this.weldActive && Math.random() > 0.07;
      const n = 0.55 + Math.random() * 0.9;
      (i.arc.scale.set(n, n * (0.8 + Math.random() * 0.4), 1),
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
      const n = this.weldActive
        ? 0.75 + Math.random() * 0.25
        : 0.55 + Math.sin(performance.now() / 700) * 0.06;
      i.display.material.color.setRGB(0.34 * n, n, 0.63 * n);
    }
  }
  animate(e, t, i, n, o) {
    const a = this.current?.group ?? this.hold?.root;
    if (!a) return;
    const r = !this.rig && !yL.has(this.held);
    if (this.current) {
      if (
        ((this.current.group.visible = !o && this.grenadeHideT <= 0),
        (this.current.flash.visible = this.flashT > 0),
        this.current.flash.visible)
      ) {
        const H =
          (0.8 + Math.random() * 0.6) *
          (this.current.group.userData.flashScale ?? 1);
        this.current.flash.scale.set(H, H, H);
      }
      if (
        (this.current.slide &&
          !this.rig &&
          (this.current.slide.position.z =
            -0.06 + Math.sin(Oe(this.slideT / 0.09, 0, 1) * Math.PI) * 0.045),
        this.current.spin)
      ) {
        const H =
          this.held === w.MINIGUN
            ? this.minigunSpinup > 0
              ? 15 + (70 * this.minigunSpinup) / hb
              : 0
            : this.held === w.WELDER
              ? this.weldActive
                ? 9
                : 0
              : this.miningActive
                ? 22 + this.miningProgress * 34
                : 0;
        ((this.spinVel += (H - this.spinVel) * (1 - Math.exp(-8 * e))),
          (this.current.spin.rotation.z -= this.spinVel * e));
      }
    }
    this.held === w.WELDER && this.current && this.animateWelder(e);
    const l = 1 - Math.exp(-14 * e);
    ((this.swayX += (-t.mdx * 0.0016 - this.swayX) * l),
      (this.swayY += (-t.mdy * 0.0016 - this.swayY) * l),
      (this.swayX = Oe(this.swayX, -0.06, 0.06)),
      (this.swayY = Oe(this.swayY, -0.06, 0.06)));
    const c = this.handling;
    (this.kickBack.step(e, c.spring[0], c.spring[1]),
      this.kickRise.step(e, c.spring[0], c.spring[1]),
      this.kickYaw.step(e, c.spring[0] * 0.8, c.spring[1]),
      this.kickRoll.step(e, c.spring[0] * 0.8, c.spring[1]),
      (this.strideBlend +=
        (Number(i.moving && i.onGround) - this.strideBlend) *
        (1 - Math.exp(-9 * e))),
      (this.sprintBlend +=
        (Number(i.sprint) - this.sprintBlend) * (1 - Math.exp(-10 * e))),
      (this.breathTime += e),
      (this.bobT += e * (7.5 + this.sprintBlend * 3.5) * this.strideBlend));
    const h = this.adsT * this.adsT * (3 - 2 * this.adsT),
      d =
        this.strideBlend * (0.012 + 0.008 * this.sprintBlend) * (1 - h * 0.85),
      u = 1 - h * 0.75,
      f = i.vy ?? 0;
    ((this.airLag +=
      ((i.onGround ? 0 : Oe(-f * 0.0045, -0.028, 0.03)) - this.airLag) *
      (1 - Math.exp(-10 * e))),
      i.onGround
        ? this.wasAir &&
          (this.landDip.kick(-Math.min(0.9, this.fallSpeed * 0.085), 0.06),
          (this.fallSpeed = 0))
        : (this.fallSpeed = Math.max(0, -f)),
      (this.wasAir = !i.onGround),
      this.landDip.step(e, 17, 0.5));
    const p =
        this.held === w.CHAINSAW_BASIC ||
        this.held === w.CHAINSAW_PRO ||
        this.held === w.CHAINSAW_INDUSTRIAL,
      m = n ? n.hipPos : this.hold ? this.hold.hip : wL(this.held),
      g = n ? n.adsPos : m;
    let y = ns(m[0], g[0], h) + Math.cos(this.bobT) * d + this.swayX * 0.4,
      b =
        ns(m[1], g[1], h) +
        (1 - Math.cos(this.bobT * 2)) * d * 0.4 +
        Math.sin(this.breathTime * 2.2) * 0.0025 * (1 - h) +
        this.swayY * 0.4,
      S = ns(m[2], g[2], h) + this.kickBack.x * (1 - h * 0.35);
    b += (this.airLag + this.landDip.x) * u;
    let M = this.swayY * u + this.kickRise.x * u + this.landDip.x * 0.9 * u,
      E = this.swayX * u + this.kickYaw.x * u,
      A = this.kickRoll.x * u;
    if (this.miningActive && !r) {
      const H = 0.0022 + this.miningProgress * 0.0045;
      ((y += (Math.random() - 0.5) * H),
        (b += (Math.random() - 0.5) * H),
        (M += (Math.random() - 0.5) * (0.006 + this.miningProgress * 0.012)),
        (A += (Math.random() - 0.5) * 0.008),
        p &&
          ((M -= 0.13 + this.miningProgress * 0.1), (E -= 0.08), (A += 0.16)));
    }
    if (this.held === w.WELDER && this.weldHeat > 0) {
      const H = this.weldHeat;
      ((M -= 0.16 * H),
        (S -= 0.035 * H),
        (b += 0.012 * H),
        this.weldActive &&
          ((y += (Math.random() - 0.5) * 0.0045),
          (b += (Math.random() - 0.5) * 0.0045),
          (A += (Math.random() - 0.5) * 0.012)));
    }
    const T = !!n && this.reloadT >= 0;
    if (this.rig) {
      const H = this.rig.gunOffset(T ? this.reloadT : -1, this.rigOffset);
      ((M += H.rx), (E += H.ry), (A += H.rz), (b += H.py), (y += H.px));
    } else if (T) {
      const H = this.reloadT,
        D = $n(H / 0.2) * $n((1 - H) / 0.2);
      ((M -= D * 0.55), (A += D * 0.35));
    }
    const x = this.current?.group.getObjectByName("launcher-breech");
    if (x) {
      const H = this.reloadT;
      x.rotation.x = H >= 0 ? -0.65 * $n(H / 0.18) * $n((1 - H) / 0.2) : 0;
    }
    ((this.drawT = Math.min(1, this.drawT + e / 0.38)),
      (this.kickT = Math.min(1, this.kickT + e / 0.07)));
    const R = (1 - this.drawT) ** 3;
    if (
      ((b -= R * 0.26),
      (M -= R * 0.95),
      (A += R * 0.35),
      (y += R * 0.04),
      this.knifeAnim)
    ) {
      const H = this.knifeAnim;
      H.t = Math.min(1, H.t + e / H.dur);
      const D = yM(H.keys, H.t, this.knifeOut);
      ((y += D[0]),
        (b += D[1]),
        (S += D[2]),
        (M += D[3]),
        (E += D[4]),
        (A += D[5]),
        H.t >= 1 && !H.hold && (this.knifeAnim = null));
    }
    if (this.held === w.FISHING_ROD && this.current) {
      const H = this.rod;
      let D = 0;
      if (
        ((H.out += ((H.outTarget ? 1 : 0) - H.out) * (1 - Math.exp(-5 * e))),
        (M -= 0.3 * H.out),
        (b -= 0.015 * H.out),
        (y -= 0.02 * H.out),
        (A += Math.sin(this.bobT * 0.5 + 1.3) * 0.015 * H.out),
        H.castT >= 0)
      ) {
        H.castT = Math.min(1, H.castT + e / zce);
        const W = yM(Hce, H.castT, this.knifeOut);
        if (
          ((y += W[0]),
          (b += W[1]),
          (S += W[2]),
          (M += W[3]),
          (E += W[4]),
          (A += W[5]),
          (D =
            H.castT < 0.55
              ? -0.5 * $n(H.castT / 0.55)
              : H.castT < 0.75
                ? -0.5 + 1.3 * $n((H.castT - 0.55) / 0.2)
                : 0.8 * (1 - $n((H.castT - 0.75) / 0.25))),
          H.castT >= Bce && H.release)
        ) {
          const J = H.release;
          ((H.release = null), J());
        }
        H.castT >= 1 && (H.castT = -1);
      }
      if (H.strikeT >= 0) {
        H.strikeT = Math.min(1, H.strikeT + e / Uce);
        const W = yM(Fce, H.strikeT, this.knifeOut);
        ((y += W[0]),
          (b += W[1]),
          (S += W[2]),
          (M += W[3]),
          (E += W[4]),
          (A += W[5]),
          this.spinReel(e * 22 * (1 - H.strikeT)),
          H.strikeT >= 1 && (H.strikeT = -1));
      }
      H.tension > 0.3 &&
        ((M -= (H.tension - 0.3) * 0.18), (b -= (H.tension - 0.3) * 0.02));
      const U = H.tension + D;
      ((H.bend += (U - H.bend) * (1 - Math.exp(-16 * e))),
        JO(this.current.group, H.bend));
    }
    if (this.followT > 0) {
      const H = PE(this.followT / ML);
      ((b -= 0.07 * H),
        (S -= 0.2 * H),
        (M -= 0.75 * H),
        (E += 0.12 * H),
        (this.followT = Math.max(0, this.followT - e)));
    }
    const _ = this.throwHold >= 0 ? 0.35 + 0.65 * zg(this.throwHold) : 0;
    if (
      ((this.throwCock +=
        (_ - this.throwCock) *
        (1 - Math.exp(-(_ > this.throwCock ? 14 : 22) * e))),
      this.throwCock > 0.002)
    ) {
      const H = this.throwCock,
        D = H > 0.97 ? Math.sin(this.breathTime * 46) * 0.004 : 0;
      ((y += 0.04 * H + D),
        (b += 0.09 * H),
        (S += 0.035 * H),
        (M += 0.5 * H),
        (A -= 0.16 * H));
    }
    const C =
      this.swingT > 0 && !this.knifeAnim ? 1 - this.swingT / this.swingDur : 0;
    if (this.swingT > 0 && this.rig) {
      const H = Math.sin(C * Math.PI);
      ((M -= H * 0.8), (S -= H * 0.18));
    }
    const P = this.medical;
    if (
      P &&
      (this.held === w.BANDAGE ||
        this.held === w.MEDKIT ||
        this.held === w.MILITARY_MEDKIT)
    ) {
      const H = PE(Oe(P.p / 0.16, 0, 1));
      if (P.kind === "bandage") {
        const D = P.p * Math.PI * 2 * 2.6;
        ((y -= 0.15 * H),
          (b += 0.03 * H),
          (S += 0.06 * H),
          (M += 0.45 * H),
          (E += 0.5 * H),
          (y += Math.sin(D) * 0.055 * H),
          (b += Math.cos(D) * 0.04 * H),
          (A += Math.sin(D) * 0.45 * H));
      } else {
        const D = Math.sin(P.p * Math.PI * 7) * (P.p > 0.25 ? 1 : 0);
        ((y -= 0.12 * H),
          (b += 0.06 * H),
          (S += 0.05 * H),
          (M -= 0.5 * H),
          (A += 0.15 * H),
          (b += D * 0.012 * H),
          (A += D * 0.05 * H));
      }
    }
    if (this.medicalDoneT > 0) {
      const H = 1 - this.medicalDoneT / 0.55,
        D = Math.sin(H * Math.PI);
      ((b -= 0.32 * D),
        (M -= 0.6 * D),
        (this.medicalDoneT = Math.max(0, this.medicalDoneT - e)));
    }
    const O = this.readiness.lowered;
    if (O > 0) {
      const H = c.carry,
        D = Math.sin(this.bobT),
        U = c.swing * O * this.strideBlend;
      ((y += H[0] * O + D * 0.012 * U),
        (b += H[1] * O - Math.abs(D) * 0.014 * U),
        (S += H[2] * O),
        (M += H[3] * O + Math.cos(this.bobT * 2) * 0.03 * U),
        (E += H[4] * O + D * 0.045 * U),
        (A += H[5] * O + D * 0.06 * U));
    }
    if (
      ((A += Math.sin(this.bobT) * d * 0.7),
      (n?.kind === "launcher" || this.held === w.MILITARY_MEDKIT) &&
      this.camera.aspect < 1
        ? (y *= ns(Math.max(0.35, this.camera.aspect), 1, h))
        : n &&
          this.camera.aspect < 1 &&
          (y *= ns(Oe(this.camera.aspect * 1.2, 0.55, 1), 1, h)),
      a.position.set(y, b, S),
      a.rotation.set(M, E, A),
      this.rig ||
        Sce(
          a,
          this.hold?.pivot ?? this.toolPivot,
          mce(C, this.hold?.kind === "empty", this.swingOut),
        ),
      this.rig && n)
    ) {
      const H = 60 / n.rpm,
        D = this.rig.base,
        U =
          this.cooldown > 0 && (D === w.AWP || D === w.SHOTGUN) && !T
            ? Oe(
                (1 - this.cooldown / H - (D === w.AWP ? 0.12 : 0.15)) /
                  (D === w.AWP ? 0.72 : 0.6),
                0,
                1,
              )
            : -1,
        W = n.mag > 0 && this.rounds(n) <= 0;
      (this.rig.pose({
        reload: T ? this.reloadT : -1,
        ads: h,
        empty: W,
        cycle: U > 0 && U < 1 ? U : -1,
        kick: this.kickT,
        inspect: this.inspectT,
      }),
        this.rig.ejectNow && this.ejectCasing(!1, D === w.SHOTGUN));
    }
    const B =
      this.popT > 0 && !this.hold
        ? Math.sin((1 - this.popT / 0.14) * Math.PI) * 0.06
        : 0;
    a.scale.setScalar(1 + B);
  }
}
