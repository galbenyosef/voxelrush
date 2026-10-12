// assets__index-Dp6GxvJu 98 — math
// Lines 58717-62733 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
const Ar = class Ar {
  constructor(e, t, i, s, o) {
    w(this, "vehicles", new Map());
    w(this, "allowLod", !1);
    w(this, "wrecks", []);
    w(this, "pendingEnters", new Map());
    w(this, "mine", null);
    w(this, "mineSeat", 0);
    w(this, "aboard", null);
    w(this, "aboardSeat", 0);
    w(this, "remoteView", !1);
    w(this, "camMode", 1);
    w(this, "myId", 0);
    w(this, "gravityScale", 1);
    w(this, "currentPlanet", 0);
    w(this, "passengerHullYaw", 0);
    w(this, "camYaw", 0);
    w(this, "camPitch", 0);
    w(this, "spawnCd", 0);
    w(this, "heliCargo", new Map());
    w(this, "cargoCarriers", new Map());
    w(this, "cargoRopes", new Map());
    w(this, "hooks", {
      sendState: () => {},
      sendEnter: () => {},
      sendExit: () => {},
      sendSpawn: () => {},
      sendHit: () => {},
      sendHeliCargo: () => {},
      mgFire: () => {},
      onControlReleased: () => {},
      launchRocket: () => {},
      sendExplosion: () => {},
      openMap: () => {},
      isFriendly: () => !1,
      isFriendlyName: () => !1,
    });
    w(this, "jetGlow", new vp(7839743, 0, 13, 2));
    w(this, "streamT", 0);
    w(this, "emissiveT", 0);
    w(this, "smoothCam", new k());
    w(this, "cameraCenter", new k());
    w(this, "closeCamera", !1);
    w(this, "cameraHiddenHull", null);
    w(this, "tmpMotionQuat", new Jt());
    w(this, "smoothCamInit", !1);
    w(this, "lastCam", new k());
    w(this, "aimPos", new k());
    w(this, "aimDir", new k(0, 0, -1));
    w(this, "aimValid", !1);
    w(this, "tmpDeckV", new k());
    w(this, "tmpGlueV", new k());
    w(this, "tmpGlueQ", new Jt());
    w(this, "tmpTrackForward", new k());
    w(this, "tmpSeatForward", new k());
    w(this, "tmpAircraftPos", new k());
    w(this, "planeFreeLook", !1);
    w(this, "deckGlue", new Map());
    w(this, "tracks");
    w(this, "lastRamAt", new Map());
    w(this, "sparkScratch", []);
    w(this, "seatGunCd", 0);
    w(this, "tmpGunA", new k());
    w(this, "tmpGunB", new k());
    w(this, "seatGunHeat", 0);
    w(this, "seatGunHot", !1);
    w(this, "seatGunQuiet", 9);
    w(this, "seatGunKey", -1);
    w(this, "seatGunLaid", { arc: !0, laid: !0, bearing: 0 });
    w(this, "detailEuler", new hi());
    w(this, "tmpExhaust", new k());
    w(this, "groundSurface", {
      ground: (e, t, i) =>
        Math.max(k$(this.world, e, t, i), this.deckYAt(e, i, t)),
      blocked: (e, t, i) =>
        this.world.isSolidAt(e, t, i) &&
        !$n(this.world.getBlock(Math.floor(e), Math.floor(t), Math.floor(i))),
      hazard: (e, t, i) => {
        const s = this.world.getBlock(
          Math.floor(e),
          Math.floor(t),
          Math.floor(i),
        );
        return (
          s === v.LAVA ||
          w0(s) ||
          (Do(s) &&
            !(
              this.world.getMeta(Math.floor(e), Math.floor(t), Math.floor(i)) &
              Qn
            ))
        );
      },
    });
    w(this, "gunZoom", 1);
    w(this, "zoomIdx", 0);
    w(this, "zoomVehicle", -1);
    w(this, "tmpBoreA", new k());
    w(this, "tmpAimTarget", new k());
    w(this, "tmpAimLocal", new k());
    w(this, "tmpPivot", new k());
    w(this, "tmpBallistic", new k());
    w(this, "fireCdBefore", 0);
    w(this, "fireCd2Before", 0);
    ((this.scene = e),
      (this.world = t),
      (this.effects = i),
      (this.sfx = s),
      (this.projectiles = o),
      this.scene.add(this.jetGlow),
      (this.tracks = new Wq(e, t)));
  }
  updateWrecks(e) {
    for (let t = this.wrecks.length - 1; t >= 0; t--) {
      const i = this.wrecks[t];
      i.age += e;
      const s = i.landedAt === null ? 0 : i.age - i.landedAt;
      if (i.age > 20 || s > 3.2 || i.planet !== this.currentPlanet) {
        (this.scene.remove(i.group), zh(i.group), this.wrecks.splice(t, 1));
        continue;
      }
      const o = Math.min(e, 0.05),
        a = i.group.position;
      if (i.landedAt === null) {
        ((i.vel.y -= this.gravity(9.81) * o), a.addScaledVector(i.vel, o));
        const r = this.world.groundAt(a.x, a.z, a.y + 3);
        if (a.y <= r) {
          ((a.y = r),
            i.vel.multiplyScalar(Math.exp(-o * 7)),
            (i.vel.y = 0),
            (i.landedAt = i.age),
            (i.groundY = r));
          const l = new gn().setFromObject(i.group);
          i.sinkDepth = Math.max(2, l.max.y - r + 0.7);
        } else (i.group.rotateZ(i.spin * o), i.group.rotateX(o * 0.12));
      } else {
        if (
          ((a.x += i.vel.x * o),
          (a.z += i.vel.z * o),
          i.vel.multiplyScalar(Math.exp(-o * 7)),
          s < 1.4)
        ) {
          const l = this.world.groundAt(a.x, a.z, i.groundY + 3);
          Number.isFinite(l) && (i.groundY = l);
        }
        const r = Ne((s - 1.4) / 1.8, 0, 1);
        a.y = i.groundY - i.sinkDepth * r * r * (3 - 2 * r);
      }
      ((i.smoke -= e),
        i.smoke <= 0 &&
          (this.effects.vehicleWreckTrail(
            new k(a.x, i.landedAt === null ? a.y : i.groundY, a.z),
            i.vel,
            i.age,
          ),
          (i.smoke = 0.16)));
    }
  }
  visibleRaidCount(e, t = 500) {
    let i = 0;
    const s = t * t;
    for (const o of this.vehicles.values())
      o.ownerName !== Mo ||
        o.hp <= 0 ||
        o.planet !== this.currentPlanet ||
        (o.pos.distanceToSquared(e) <= s && i++);
    return i;
  }
  thermalTargets() {
    return [...this.vehicles.values()].filter(gc).map((e) => {
      var t;
      return (t = e.lod) != null && t.visible ? e.lod : e.group;
    });
  }
  get jetSensors() {
    var e;
    return (
      ((e = this.mine) == null ? void 0 : e.type) === P.FIGHTER_JET &&
      this.mineSeat === 0
    );
  }
  get airborneFixedWing() {
    const e = this.mine;
    if (!e || !As(e.type)) return !1;
    if (this.mineSeat === 0) return !e.grounded;
    const t = this.world.groundAt(e.pos.x, e.pos.z, e.pos.y + 0.3),
      i = this.deckInfo(e.pos);
    return (
      e.pos.y >
      Math.max(t, (i == null ? void 0 : i.y) ?? -1 / 0) +
        Mm(e.type, e.quat) +
        0.15
    );
  }
  setRadioState(e, t, i) {
    var a;
    const s = this.vehicles.get(e);
    if (!s) return;
    if (
      ((s.serverAuto = !!(t & 2)),
      (s.radioActive = !!(t & 8)),
      (s.himarsBusy = !!(t & 4)),
      s.type === P.HIMARS &&
        (i !== void 0
          ? (s.himarsServerReadyAt = Date.now() + i)
          : s.himarsBusy || (s.himarsServerReadyAt = 0)),
      !(t & 1))
    ) {
      s.radioHardware && (s.radioHardware.visible = !1);
      return;
    }
    if (((a = s.radioHardware) == null ? void 0 : a.parent) === s.group) {
      s.radioHardware.visible = !0;
      return;
    }
    const o = m$(s.type);
    (s.group.add(o), (s.radioHardware = o));
  }
  setRemoteView(e, t) {
    if (!this.remoteView && e < 0) return;
    if (this.mine) {
      for (const s of this.mine.fpvHide) ol(s, !1);
      (this.mine.target.pos.copy(this.mine.pos),
        this.mine.target.quat.copy(this.mine.quat),
        this.remoteView && this.mineSeat === 0 && this.mine.motion.reset());
    }
    ((this.mine = null), (this.mineSeat = 0), (this.remoteView = e >= 0));
    const i = e < 0 ? this.aboard : this.vehicles.get(e);
    i && this.activateSeatView(i, e < 0 ? this.aboardSeat : t ? 0 : 1);
  }
  setPlanet(e) {
    (this.currentPlanet !== e && this.tracks.clear(),
      (this.currentPlanet = e),
      (this.gravityScale = e === Si.MOON ? wp : 1));
    for (const t of this.vehicles.values())
      ((t.group.visible = t.planet === e),
        t.lod && (t.lod.visible = !1),
        (t.labelAnchor.visible = t.planet === e));
  }
  clearForTransition(e = -1) {
    this.tracks.clear();
    for (const t of [...this.vehicles.keys()]) t !== e && this.onDestroy(t);
    for (const t of this.wrecks) (this.scene.remove(t.group), zh(t.group));
    ((this.wrecks = []), this.heliCargo.clear(), this.cargoCarriers.clear());
    for (const t of this.cargoRopes.values())
      (this.scene.remove(t), t.geometry.dispose(), t.material.dispose());
    (this.cargoRopes.clear(), this.deckGlue.clear());
  }
  gravity(e) {
    return e * this.gravityScale;
  }
  airDensity() {
    return this.currentPlanet === Si.MOON ? 0.18 : 1;
  }
  surfaceTraction() {
    return this.currentPlanet === Si.MOON ? 0.55 : 1;
  }
  onHeliCargo(e, t) {
    const i = this.heliCargo.get(e);
    (i !== void 0 && this.cargoCarriers.delete(i), this.heliCargo.delete(e));
    const s = this.cargoRopes.get(e);
    (s &&
      (this.scene.remove(s),
      s.geometry.dispose(),
      s.material.dispose(),
      this.cargoRopes.delete(e)),
      t !== 65535 && (this.heliCargo.set(e, t), this.cargoCarriers.set(t, e)));
  }
  cargoCandidate(e) {
    let t = null,
      i = 1 / 0;
    for (const s of this.vehicles.values()) {
      if (
        s === e ||
        !nL(s.type) ||
        s.driver !== -1 ||
        s.passengers.size > 0 ||
        s.planet !== e.planet ||
        s.serverAuto ||
        s.ownerName === Mo ||
        this.cargoCarriers.has(s.id) ||
        this.heliCargo.has(s.id)
      )
        continue;
      const o = Math.hypot(s.pos.x - e.pos.x, s.pos.z - e.pos.z),
        a = e.pos.y - s.pos.y;
      y$(e.pos, { ...s.pos, type: s.type }) &&
        o + a * 0.25 < i &&
        ((t = s), (i = o + a * 0.25));
    }
    return t;
  }
  canToggleCargo() {
    return (
      !!this.mine &&
      this.mineSeat === 0 &&
      this.mine.type === P.HELI &&
      (this.heliCargo.has(this.mine.id) || !!this.cargoCandidate(this.mine))
    );
  }
  toggleCargo() {
    if (!this.mine || this.mineSeat !== 0 || this.mine.type !== P.HELI) return;
    const e = this.heliCargo.get(this.mine.id),
      t = e === void 0 ? this.cargoCandidate(this.mine) : null;
    (e !== void 0 || t) &&
      this.hooks.sendHeliCargo(this.mine.id, e !== void 0 ? 65535 : t.id);
  }
  onSpawn(e, t, i, s, o, a, r, l, c, h = 0, d = 0, u = 0, f = 0, p = 0) {
    var _, C;
    if (!(t in lC) || this.vehicles.has(e)) return;
    const m = $w(t),
      y = c === Mo,
      g =
        ((C = (_ = this.hooks).battleSide) == null ? void 0 : C.call(_, p)) ??
        null,
      { sprite: b, canvas: S } = w6(y || !!g);
    (g && (b.userData.side = g),
      (b.position.y = MK[t] * ms(t).y + (y ? 0.3 : 0)));
    const M = y ? b : null,
      x = new pe();
    (x.add(b),
      x.position.copy(i),
      m.group.position.copy(i),
      m.group.quaternion.copy(s),
      this.scene.add(m.group),
      this.scene.add(x));
    const T = {
      id: e,
      type: t,
      pos: i.clone(),
      quat: s.clone(),
      vel: new k(),
      aux1: h,
      aux2: d,
      hp: o,
      maxHp: a,
      driver: r,
      owner: l,
      ownerName: c,
      spawnOwner: c,
      planet: f,
      passengers: new Set(),
      passengerSeats: new Map(),
      crewNames: new Map(),
      group: m.group,
      lod: null,
      labelAnchor: x,
      turret: m.turret ?? null,
      barrel: m.barrel ?? null,
      props: m.props,
      subHatch: m.subHatch ?? null,
      sprung: m.sprung ?? null,
      launcher: m.launcher ?? null,
      chassis: {
        pitch: 0,
        roll: 0,
        vp: 0,
        vr: 0,
        speed: 0,
        accel: 0,
        exhaust: Math.random(),
        bob: Math.random() * 10,
        heave: 0,
        vh: 0,
        climb: 0,
        lastY: i.y,
      },
      trackParts: m.trackParts ?? [],
      trackPhase: 0,
      motionParts: m.motionParts ?? [],
      fpvHide: m.fpvHide ?? [],
      hpBar: b,
      hpCanvas: S,
      enemyTag: M,
      headlights: null,
      camo: u,
      army: p,
      armor: 0,
      armorKit: [],
      armorGlow: 0,
      target: { pos: i.clone(), quat: s.clone() },
      motion: new RL(110, !0),
      yaw: 0,
      pitch: 0,
      roll: 0,
      speed: 0,
      throttle: 0,
      grounded: !0,
      vy: 0,
      subDepth: 0,
      subDepthReady: !1,
      fireCd: 0,
      fireCd2: 0,
      carrierReadyAt: 0,
      mgSide: 1,
      smokeT: Math.random() * 0.5,
      yawRate: 0,
      prevYaw: null,
    };
    (y && of(T),
      t === P.SPACE_ROCKET && (T.throttle = Ne(h, 0, 1)),
      T.turret &&
        (t === P.TURRET
          ? (T.turret.rotation.y = d || h)
          : (t === P.PATRIOT ||
              t === P.TANK ||
              t === P.HIMARS ||
              t === P.BTR_TURRET) &&
            (T.turret.rotation.y = h)),
      t === P.TURRET && T.props[0] && (T.props[0].rotation.y = h),
      T.barrel &&
        (t === P.TANK || t === P.HIMARS || t === P.BTR_TURRET) &&
        (T.barrel.rotation.x = d),
      this.vehicles.set(e, T));
    const A = this.pendingEnters.get(e);
    if (A) {
      this.pendingEnters.delete(e);
      for (const R of A) this.onEnter(e, R.pid, R.seat, R.ownerName);
    }
    ((T.group.visible = f === this.currentPlanet),
      (T.labelAnchor.visible = f === this.currentPlanet),
      Im(T),
      this.refreshRaidLod(T),
      of(T));
  }
  refreshRaidLod(e) {
    e.lod && (this.scene.remove(e.lod), e.lod.dispose(), (e.lod = null));
    const t = [e.turret, e.barrel, ...e.props, ...e.motionParts].filter(
      (i) => !!i,
    );
    ((e.lod = new PL(
      e.group,
      t,
      `vehicle:${e.type}:${e.camo}:${e.id % 3}:${n4()}`,
      0.2,
    )),
      (e.lod.visible = !1),
      this.scene.add(e.lod));
    for (const i of e.group.children)
      i.userData.navLight && e.lod.add(i.clone());
    if (wA(e.type))
      for (const i of [e.group, e.lod])
        i.traverse((s) => {
          const o = s.material;
          if (o)
            for (const a of Array.isArray(o) ? o : [o])
              "fog" in a && ((a.fog = !1), (a.needsUpdate = !0));
        });
  }
  setArmor(e, t, i = !1) {
    const s = this.vehicles.get(e);
    if (
      s &&
      !(s.armor === t && !i) &&
      ((s.armor = t),
      this.attachArmor(s),
      Im(s),
      this.refreshRaidLod(s),
      i && s.armorKit.length)
    ) {
      s.armorGlow = 1;
      for (const a of s.armorKit) GA(a, 1);
      const o = WA(s.armorKit, 14);
      for (const a of o) this.effects.weldSparks(a, 1.4);
      (this.effects.flash(
        s.pos.clone().add(new k(0, 1.6, 0)),
        6,
        0.5,
        12572927,
      ),
        this.effects.addTrauma(0.12),
        this.sfx.armorClank());
    }
  }
  attachArmor(e) {
    var s;
    for (const o of e.armorKit) {
      (s = o.parent) == null || s.remove(o);
      const a = e.fpvHide.indexOf(o);
      (a >= 0 && e.fpvHide.splice(a, 1), zh(o));
    }
    e.armorKit = [];
    const t = TL(e.type, e.armor, !!e.turret, !!e.launcher);
    if (!t) return;
    ((e.sprung ?? e.group).add(t.hull, t.fpv),
      t.turret && e.turret && e.turret.add(t.turret),
      t.launcher && e.launcher && e.launcher.add(t.launcher),
      e.fpvHide.push(t.fpv),
      (e.armorKit = [
        t.hull,
        t.fpv,
        ...(t.turret ? [t.turret] : []),
        ...(t.launcher ? [t.launcher] : []),
      ]));
  }
  coolArmor(e, t, i) {
    const s = e.armorGlow;
    e.armorGlow = Math.max(0, e.armorGlow - t / 3.2);
    for (const o of e.armorKit) GA(o, e.armorGlow);
    if (i && s > 0.52 && Math.random() < t * 22)
      for (const o of WA(e.armorKit, 1, this.sparkScratch))
        (this.effects.weldSparks(o, 0.8),
          Math.random() < 0.35 && this.effects.flash(o, 2.4, 0.07, 13164799));
  }
  setCamo(e, t) {
    const i = this.vehicles.get(e);
    i && ((i.camo = t), Im(i), this.refreshRaidLod(i));
  }
  rebuildModels() {
    for (const e of this.vehicles.values()) {
      const t = this.headlightsOn(e);
      for (const s of e.fpvHide) ol(s, !1);
      for (const s of e.headlights ?? []) s.dispose();
      e.headlights = null;
      const i = $w(e.type);
      (i.group.position.copy(e.group.position),
        i.group.quaternion.copy(e.group.quaternion),
        i.group.scale.copy(e.group.scale),
        this.scene.remove(e.group),
        zh(e.group),
        this.scene.add(i.group),
        (e.group = i.group),
        (e.turret = i.turret ?? null),
        (e.barrel = i.barrel ?? null),
        (e.props = i.props),
        (e.motionParts = i.motionParts ?? []),
        (e.subHatch = i.subHatch ?? null),
        (e.sprung = i.sprung ?? null),
        (e.launcher = i.launcher ?? null),
        (e.trackParts = i.trackParts ?? []),
        (e.fpvHide = i.fpvHide ?? []),
        this.setHeadlights(e, t),
        e.turret &&
          (e.turret.rotation.y = (e.type === P.TURRET && e.aux2) || e.aux1),
        e.type === P.TURRET && e.props[0] && (e.props[0].rotation.y = e.aux1),
        e.barrel &&
          (e.type === P.TANK ||
            e.type === P.HIMARS ||
            e.type === P.BTR_TURRET) &&
          (e.barrel.rotation.x = e.aux2),
        (e.armorKit = []),
        this.attachArmor(e),
        Im(e),
        this.refreshRaidLod(e),
        of(e));
    }
  }
  onState(e, t, i, s, o, a, r, l = Date.now() >>> 0) {
    const c = this.vehicles.get(e);
    (c && r !== void 0 && (c.planet = r),
      !(
        !c ||
        (c === this.mine && this.mineSeat === 0 && c.type !== P.MORTAR)
      ) &&
        (c.target.pos.copy(t),
        c.target.quat.copy(i).normalize(),
        c.motion.push(t, i, c.type === P.TURRET ? new k() : s, l),
        c.vel.copy(s),
        (c.aux1 = o),
        (c.aux2 = a),
        c.type === P.TURRET &&
          (c.turret && (c.turret.rotation.y = a),
          c.barrel && (c.barrel.rotation.x = s.y),
          c.props[0] && (c.props[0].rotation.y = o))));
  }
  onEnter(e, t, i = 0, s = "") {
    const o = this.vehicles.get(e);
    if (!o) {
      const a = this.pendingEnters.get(e) ?? [],
        r = a.find((l) => l.pid === t);
      (r
        ? ((r.seat = i), (r.ownerName = s))
        : a.push({ pid: t, seat: i, ownerName: s }),
        this.pendingEnters.set(e, a));
      return;
    }
    (o.crewNames.set(t, s),
      i === 0 ? o.passengerSeats.delete(t) : o.passengerSeats.set(t, i),
      i === 0
        ? ((o.owner = t), (o.driver = t), o.passengers.delete(t))
        : (o.driver === t && (o.driver = -1), o.passengers.add(t)),
      o.ownerName || (o.ownerName = s),
      t === this.myId &&
        ((this.aboard = o),
        (this.aboardSeat = i),
        !this.remoteView && this.activateSeatView(o, i)));
  }
  activateSeatView(e, t) {
    var i;
    if (!(this.mine === e && this.mineSeat === t)) {
      if (t > 0) {
        (this.mine === e &&
          this.mineSeat === 0 &&
          (e.target.pos.copy(e.pos),
          e.target.quat.copy(e.quat),
          e.motion.reset()),
          (this.mine = e),
          (this.mineSeat = t),
          (this.smoothCamInit = !1),
          (this.camMode = this.passengerCanShoot() || vl(e.type, t) ? 0 : 1));
        const s = new k(0, 0, -1).applyQuaternion(e.quat);
        ((this.passengerHullYaw = al(e.quat)),
          (this.camYaw =
            Math.atan2(-s.x, -s.z) +
            (e.type === P.HELI ? (t === 1 ? Math.PI / 2 : -Math.PI / 2) : 0)),
          (this.camPitch = As(e.type) ? 0.12 : 0));
        return;
      }
      {
        ((this.mine = e),
          (this.mineSeat = 0),
          (this.smoothCamInit = !1),
          e.pos.copy(e.target.pos),
          e.quat.copy(e.target.quat));
        const s = new k(0, 0, -1).applyQuaternion(e.quat);
        e.yaw = Math.atan2(-s.x, -s.z);
        const o = new hi().setFromQuaternion(e.quat, "YXZ");
        ((e.pitch = o.x),
          (e.roll = o.z),
          (e.yaw = o.y),
          (e.ride = void 0),
          (e.speed = e.vel.dot(s)),
          (e.throttle = As(e.type)
            ? Ne(e.speed / Pw[e.type], 0, 1)
            : e.type === P.SPACE_ROCKET
              ? Ne(e.aux1, 0, 1)
              : 0),
          (e.vy = e.vel.y),
          (i = e.angularVelocity) == null || i.set(0, 0, 0),
          e.motion.reset());
        const a = this.world.groundAt(e.pos.x, e.pos.z, e.pos.y + 0.3);
        ((e.grounded = a === -1 / 0 ? !1 : e.pos.y - a < 0.6),
          (this.camYaw = e.type === P.TURRET ? e.aux1 : e.yaw),
          (this.camPitch = 0),
          (this.camMode = e.type === P.DRONE ? 0 : 1));
      }
    }
  }
  onExit(e, t) {
    var o, a;
    t === this.myId &&
      ((o = this.aboard) == null ? void 0 : o.id) === e &&
      ((this.aboard = null), (this.aboardSeat = 0));
    const i = this.pendingEnters.get(e);
    if (i) {
      const r = i.filter((l) => l.pid !== t);
      r.length ? this.pendingEnters.set(e, r) : this.pendingEnters.delete(e);
    }
    const s = this.vehicles.get(e);
    if (
      (s &&
        (s.driver === t && (s.driver = -1),
        s.passengers.delete(t),
        s.passengerSeats.delete(t),
        s.crewNames.delete(t)),
      t === this.myId &&
        ((a = this.mine) == null ? void 0 : a.id) === e &&
        !this.remoteView)
    ) {
      const r = this.mine;
      this.mineSeat === 0 &&
        (r.target.pos.copy(r.pos),
        r.target.quat.copy(r.quat),
        r.vel.set(0, 0, 0));
      const l = r.type === P.DRONE ? null : this.computeExitPos(r);
      for (const c of r.fpvHide) ol(c, !1);
      (r.barrel && ol(r.barrel, !1),
        (this.gunZoom = 1),
        (this.zoomIdx = 0),
        (this.mine = null),
        (this.mineSeat = 0),
        this.hooks.onControlReleased(l));
    }
  }
  onHp(e, t) {
    const i = this.vehicles.get(e);
    i && ((i.hp = t), of(i));
  }
  onRam(e, t, i = 0, s, o = 1, a) {
    var l, c, h;
    const r = this.vehicles.get(e);
    if (
      !(!r || !Number.isFinite(t)) &&
      (((l = this.mine) == null ? void 0 : l.id) === e && (this.mine.speed = t),
      i && s && r.planet === this.currentPlanet)
    ) {
      const d = a ? s.distanceTo(a) : 1 / 0;
      d < 70 &&
        (this.effects.vehicleBreak(
          s,
          ((c = de[i]) == null ? void 0 : c.color) ?? 8947848,
          i,
          Math.abs(t),
          o,
          r.yaw,
        ),
        d < 45 && this.sfx.vehicleBreak(i, Math.abs(t)),
        ((h = this.mine) == null ? void 0 : h.id) === e &&
          !$n(i) &&
          this.effects.addTrauma(Math.min(0.22, 0.04 + Math.abs(t) * 0.018)));
    }
  }
  requestRam(e, t, i, s) {
    var a, r, l;
    if (!((a = this.hooks) != null && a.sendRam)) return;
    const o = performance.now();
    o - (this.lastRamAt.get(e.id) ?? 0) < 170 ||
      (this.lastRamAt.set(e.id, o),
      (l = (r = this.hooks) == null ? void 0 : r.sendRam) == null ||
        l.call(r, e, t, i, s));
  }
  setHeadlights(e, t) {
    const i = OL[e.type];
    if (i) {
      if (!e.headlights) {
        if (!t) return;
        e.headlights = (e.type === P.HELI ? [0] : [1, -1]).map((s) => {
          const o = new S4(e.group, {
            range: i.range * 2.5,
            angle: i.angle,
            intensity: 57,
            priority: e === this.mine ? 1 : 0,
            color: e.type === P.SUBMARINE ? 13625599 : 16773844,
          });
          return (
            o.root.position.set(i.x * s, i.y, i.z),
            (o.root.rotation.x = i.pitch),
            o
          );
        });
      }
      for (const s of e.headlights) s.setActive(t);
      e.group.traverse((s) => {
        const o = s.material;
        if (
          !o ||
          Array.isArray(o) ||
          !o.isMeshLambertMaterial ||
          !gK.has(o.userData.baseColor)
        )
          return;
        const a = t ? yK : vK;
        o.emissive.copy(a);
        const r = o.userData.entityLight;
        r && r.base.copy(a);
      });
    }
  }
  headlightsOn(e) {
    var t, i;
    return !!(
      (i = (t = e.headlights) == null ? void 0 : t[0]) != null && i.active
    );
  }
  onDestroy(e, t = !1) {
    var o;
    (this.tracks.forget(e),
      ((o = this.aboard) == null ? void 0 : o.id) === e &&
        ((this.aboard = null), (this.aboardSeat = 0)));
    for (const [a, r] of this.heliCargo)
      (a === e || r === e) && this.onHeliCargo(a, 65535);
    const i = this.vehicles.get(e);
    if (!i) return;
    for (const a of i.fpvHide) ol(a, !1);
    const s = i === this.mine;
    for (const a of i.headlights ?? []) a.dispose();
    if (((i.headlights = null), t && i.planet === this.currentPlanet))
      for (
        i.group.visible = !0,
          i.group.traverse((a) => {
            var l, c;
            (a.userData.motion === "jet-exhaust" || a.name === "rotor-blur") &&
              (a.visible = !1);
            const r = a;
            if (r.isMesh)
              for (const h of Array.isArray(r.material)
                ? r.material
                : [r.material]) {
                const d = h;
                ((l = d.color) == null || l.multiplyScalar(0.3),
                  (c = d.emissive) == null || c.setHex(1180672));
              }
          }),
          this.wrecks.push({
            group: i.group,
            vel: i.vel.clone().multiplyScalar(0.65),
            age: 0,
            smoke: 0,
            spin: (i.id % 2 ? 1 : -1) * 0.35,
            planet: i.planet,
            landedAt: null,
            groundY: 0,
            sinkDepth: 0,
          });
        this.wrecks.length > 8;
      ) {
        const a = this.wrecks.shift();
        (this.scene.remove(a.group), zh(a.group));
      }
    else (this.scene.remove(i.group), zh(i.group));
    (i.lod && (this.scene.remove(i.lod), i.lod.dispose()),
      this.scene.remove(i.labelAnchor),
      i.labelAnchor.traverse((a) => {
        var l;
        const r = a;
        r.isSprite &&
          ((l = r.material.map) == null || l.dispose(), r.material.dispose());
      }),
      this.vehicles.delete(e),
      s &&
        ((this.mine = null),
        (this.mineSeat = 0),
        this.hooks.onControlReleased(
          i.type === P.DRONE ? null : this.computeExitPos(i),
        )));
  }
  computeExitPos(e) {
    return _q(e.type, e.pos, e.quat);
  }
  launchFromHand(e, t, i, s = 0) {
    if (this.spawnCd > 0) return !1;
    const o = new k(i.x, 0, i.z);
    (o.lengthSq() < 1e-4 && o.set(0, 0, -1), o.normalize());
    for (const [a, r] of [
      [1.8, -0.3],
      [1.2, 0.2],
      [0.7, 0.8],
      [0, 1.3],
    ]) {
      const l = new k(t.x + o.x * a, t.y + r, t.z + o.z * a);
      if (!vA(e, l, (c, h, d) => this.world.isSolidAt(c, h, d)))
        return (this.hooks.sendSpawn(e, l, s), (this.spawnCd = 3), !0);
    }
    return !1;
  }
  requestSpawn(e, t, i, s = 0) {
    if (this.spawnCd > 0) return !1;
    const o = (l) => !vA(e, l, (c, h, d) => this.world.isSolidAt(c, h, d));
    if (e !== P.CARRIER && e !== P.SUBMARINE)
      for (let l = 3; l < 40; l += 0.5) {
        const c = t.x + i.x * l,
          h = t.y + i.y * l,
          d = t.z + i.z * l;
        if (this.world.isSolidAt(c, h, d)) break;
        const u = this.deckInfo(new k(c, h, d));
        if (u) {
          const f = new k(c, u.y + (e === P.DRONE ? 0.35 : 0.05), d);
          return o(f)
            ? (this.hooks.sendSpawn(e, f, s), (this.spawnCd = 3), !0)
            : !1;
        }
      }
    if (e === P.BOAT || e === P.CARRIER || e === P.SUBMARINE) {
      const l = e === P.CARRIER ? 40 : 24;
      for (let c = 3; c < l; c += 0.5) {
        const h = t.x + i.x * c,
          d = t.y + i.y * c,
          u = t.z + i.z * c;
        if (this.world.isSolidAt(h, d, u)) return !1;
        const f =
            e === P.SUBMARINE
              ? this.waterColumnAt(Math.floor(h), Math.floor(u))
              : null,
          p = f ? f.surface : this.waterYAt(Math.floor(h), Math.floor(u), d);
        if (p !== null && d <= p + 4) {
          const m = new k(
            h,
            p - (e === P.BOAT ? 0.25 : e === P.SUBMARINE ? 1.45 : 1.2),
            u,
          );
          return o(m)
            ? (this.hooks.sendSpawn(e, m, s), (this.spawnCd = 3), !0)
            : !1;
        }
      }
      return !1;
    }
    const a = this.world.raycast(t, i, 12);
    if (!a) return !1;
    const r = new k(a.bx + 0.5, a.by + 1, a.bz + 0.5);
    return (
      e === P.DRONE && (r.y += 0.3),
      o(r) ? (this.hooks.sendSpawn(e, r, s), (this.spawnCd = 3), !0) : !1
    );
  }
  nearestFree(e, t) {
    let i = null,
      s = t;
    for (const o of this.vehicles.values()) {
      if (
        !gc(o) ||
        !(o.driver === -1 || o.passengers.size < (_f[o.type] ?? 0)) ||
        this.hostile(o)
      )
        continue;
      const r = o.pos.distanceTo(e);
      r < s && ((s = r), (i = o));
    }
    return i;
  }
  hostile(e) {
    var t, i;
    return (
      e.ownerName === Mo ||
      ((i = (t = this.hooks).battleSide) == null
        ? void 0
        : i.call(t, e.army)) === "enemy"
    );
  }
  *rendered() {
    for (const e of this.vehicles.values())
      e !== this.mine &&
        e.hp > 0 &&
        e.planet === this.currentPlanet &&
        gc(e) &&
        (yield e);
  }
  aimRay() {
    return this.mine && this.aimValid
      ? { pos: this.aimPos, dir: this.aimDir }
      : null;
  }
  aimsWithCamera() {
    const e = this.mine;
    return !e || this.remoteView
      ? !1
      : this.mineSeat > 0
        ? this.passengerCanShoot() || !!this.mySeatGun()
        : e.type === P.TANK ||
          e.type === P.BTR_TURRET ||
          e.type === P.TURRET ||
          e.type === P.BOAT;
  }
  hidePlates() {
    for (const e of this.vehicles.values()) e.hpBar.visible = !1;
  }
  hideEnemyPlatesUnless(e) {
    for (const t of this.vehicles.values())
      t.hpBar.visible &&
        t.hpBar.userData.side === "enemy" &&
        !e(t) &&
        (t.hpBar.visible = !1);
  }
  tryEnter(e) {
    let t = this.nearestFree(e, 5);
    if (!t)
      for (const i of this.vehicles.values()) {
        if (
          i.planet !== this.currentPlanet ||
          i.type !== P.CARRIER ||
          i.driver !== -1
        )
          continue;
        const s = e.clone().sub(i.pos).applyQuaternion(i.quat.clone().invert());
        if (
          Math.abs(s.x) <= 9 &&
          Math.abs(s.z) <= 24 &&
          s.y >= -1.5 &&
          s.y <= 6
        ) {
          t = i;
          break;
        }
      }
    return t ? (this.hooks.sendEnter(t.id), !0) : !1;
  }
  mapVehicles() {
    return [...this.vehicles.values()]
      .filter((e) => e.hp > 0 && e.planet === this.currentPlanet)
      .map((e) => ({
        id: e.id,
        x: e.pos.x,
        y: e.pos.y,
        z: e.pos.z,
        type: e.type,
        ownerName: e.ownerName,
        spawnOwner: e.spawnOwner,
        camo: e.camo ?? 0,
        army: e.army,
      }));
  }
  canTakeDriver() {
    return (
      !!this.mine &&
      !this.remoteView &&
      this.mineSeat > 0 &&
      this.mine.driver === -1
    );
  }
  takeDriver() {
    this.canTakeDriver() && this.switchSeat(0);
  }
  switchSeat(e) {
    const t = this.mine;
    if (!t || this.remoteView || e === this.mineSeat) return;
    const i = _f[t.type] ?? 0;
    e < 0 ||
      e > i ||
      (e === 0 && t.driver !== -1) ||
      (e > 0 && [...t.passengerSeats.values()].includes(e)) ||
      (this.mineSeat === 0 && this.hooks.sendState(t),
      this.hooks.sendEnter(t.id, e));
  }
  cycleSeat() {
    const e = this.mine;
    if (!e || this.remoteView) return;
    const t = 1 + (_f[e.type] ?? 0);
    for (let i = 1; i < t; i++) {
      const s = (this.mineSeat + i) % t;
      if (
        s === 0 ? e.driver === -1 : ![...e.passengerSeats.values()].includes(s)
      ) {
        this.switchSeat(s);
        return;
      }
    }
  }
  preparePassengerShot(e, t) {
    const i = this.mine;
    if (!i || this.remoteView) return !0;
    const s = this.tmpSeatForward
      .copy(t)
      .applyQuaternion(this.tmpMotionQuat.copy(i.quat).invert());
    return l6(i.type, this.mineSeat, s)
      ? (this.seatPos(i, this.mineSeat, e),
        e.add(
          this.tmpSeatForward
            .set(0, i.type === P.HELI ? 1.55 : 0.85, 0)
            .applyQuaternion(i.quat),
        ),
        !0)
      : !1;
  }
  passengerAimClear() {
    const e = this.mine;
    if (!e || !this.passengerCanShoot()) return !1;
    const t = Math.cos(this.camPitch),
      i = this.tmpSeatForward
        .set(
          -Math.sin(this.camYaw) * t,
          Math.sin(this.camPitch),
          -Math.cos(this.camYaw) * t,
        )
        .applyQuaternion(this.tmpMotionQuat.copy(e.quat).invert());
    return l6(e.type, this.mineSeat, i);
  }
  requestExit() {
    (this.mine && delete this.mine.tankAim,
      this.mine && this.mineSeat === 0 && this.hooks.sendState(this.mine),
      this.mine && this.hooks.sendExit());
  }
  detonateDrone() {
    this.mine &&
      this.mine.type === P.DRONE &&
      this.hooks.sendHit(this.mine.id, 9999);
  }
  driving() {
    return this.mine !== null;
  }
  typeNear(e, t) {
    for (const i of this.vehicles.values())
      if (i.planet === this.currentPlanet && i.pos.distanceToSquared(e) < t * t)
        return i.type;
    return -1;
  }
  rayHit(e, t, i, s = !1) {
    let o = null;
    for (const a of this.vehicles.values()) {
      if ((!s && a === this.mine) || !gc(a)) continue;
      const r = a.quat.clone().invert(),
        l = e.clone().sub(a.pos).applyQuaternion(r),
        c = t.clone().applyQuaternion(r),
        h = new Gr(l, c);
      for (const d of io[a.type] ?? []) {
        const u = h.intersectBox(d, new k());
        if (!u) continue;
        const f = u.sub(l).length();
        f < i &&
          (!o || f < o.dist) &&
          (o = { id: a.id, dist: f, type: a.type });
      }
    }
    return o;
  }
  pointInside(e) {
    return this.projHit(e) !== null;
  }
  debugShapes(e, t) {
    const i = [];
    for (const s of this.vehicles.values())
      if (!(!gc(s) || s.pos.distanceTo(e) > t))
        for (const o of io[s.type] ?? [])
          i.push({ kind: "obb", pos: s.pos, quat: s.quat, box: o });
    return i;
  }
  projHit(e, t = -1) {
    for (const i of this.vehicles.values()) {
      if (i.id === t || i === this.mine || !gc(i)) continue;
      const s = e.clone().sub(i.pos).applyQuaternion(i.quat.clone().invert());
      if ((io[i.type] ?? []).some((o) => o.containsPoint(s)))
        return { id: i.id, type: i.type };
    }
    return null;
  }
  update(e, t, i, s, o = 0, a, r = !1) {
    var h, d, u, f;
    ((this.spawnCd = Math.max(0, this.spawnCd - e)),
      this.updateWrecks(e),
      (this.jetGlow.intensity = 0));
    let l = 4900;
    if (((this.emissiveT += e), this.emissiveT >= Vr)) {
      this.emissiveT = 0;
      for (const p of this.vehicles.values()) {
        const m = (h = p.lod) != null && h.visible ? p.lod : p.group;
        m.visible && ur(m, dr(this.world, p.pos, o, 0.8));
      }
    }
    for (const p of this.vehicles.values()) {
      const m = p === this.mine,
        y = s ? p.pos.distanceTo(s) : 0,
        g = (wA(p.type) && y <= v$) || (this.jetSensors && y <= Vd),
        b =
          p.planet === this.currentPlanet &&
          (m ||
            g ||
            !a ||
            a(p.pos.x, p.pos.z) ||
            a(p.target.pos.x, p.target.pos.z)),
        S =
          ((u = (d = this.hooks).battleSide) == null
            ? void 0
            : u.call(d, p.army)) ?? void 0;
      if (S !== p.hpBar.userData.side) {
        if (S && !p.hpBar.userData.raid) {
          const X = p.hpBar,
            { sprite: Q, canvas: ee } = w6(!0);
          (Q.position.copy(X.position),
            (Q.position.y += 0.3),
            p.labelAnchor.remove(X),
            (f = X.material.map) == null || f.dispose(),
            X.material.dispose(),
            p.labelAnchor.add(Q),
            (p.hpBar = Q),
            (p.hpCanvas = ee));
        }
        ((p.hpBar.userData.side = S), (p.hpBar.userData.relation = void 0));
      }
      const M = p.hpBar.userData.side,
        x = M
          ? M === "ally"
          : p.owner === this.myId || this.hooks.isFriendlyName(p.ownerName),
        T = s ? p.pos.distanceTo(s) : 0;
      ((p.labelAnchor.visible =
        p.planet === this.currentPlanet && (b || (x && T <= 600))),
        p.labelAnchor.position.copy(p.pos));
      const A = s ? p.pos.distanceToSquared(s) : 0,
        _ = b && A <= 19600 && !(r && p.lod && A > m6 ** 2),
        C = m
          ? p.speed
          : p.vel.dot(
              this.tmpTrackForward.set(0, 0, -1).applyQuaternion(p.quat),
            );
      if (
        (((_ && A < 8100) || m) && this.poseSeatGuns(p, e),
        _ && p.type === P.FIGHTER_JET)
      ) {
        const X = m && this.mineSeat === 0 && !this.remoteView,
          Q = X ? p.throttle : Ne(p.vel.length() / Pw[p.type], 0, 1);
        (C$(
          p.motionParts,
          e,
          Q,
          X ? p.grounded : p.vel.length() < 20,
          p.vel.length(),
        ),
          o > 0.05 &&
            Q > 0.08 &&
            A < l &&
            ((l = A),
            this.jetGlow.position
              .set(0, 1.48, 6.8)
              .applyQuaternion(p.quat)
              .add(p.pos),
            (this.jetGlow.intensity = o * Q * 28)));
      }
      _ &&
        (this.animateChassis(p, e, C, A, r && !m),
        this.animateTracks(p, e, C),
        this.detailEuler.setFromQuaternion(p.quat, "YXZ"),
        Aq(
          p.motionParts,
          e,
          C,
          this.detailEuler.x,
          this.detailEuler.z,
          p.yawRate,
        ));
      const R = p.hp / Math.max(1, p.maxHp);
      if (b && _ && R <= 0.3) {
        const X = Ne((0.3 - R) / 0.3, 0, 1);
        if (((p.smokeT -= e), p.smokeT <= 0)) {
          const ee = (SK[p.type] ?? new k(0, 1, 0))
            .clone()
            .applyQuaternion(p.quat)
            .add(p.pos);
          (this.effects.vehicleDamageSmoke(ee, X, p.vel),
            (p.smokeT = Qi(0.72, 0.09, X)));
        }
      } else p.smokeT = Math.min(p.smokeT, 0.15);
      if (
        (p.armorGlow > 0 && this.coolArmor(p, e, b && A < 8100),
        p.type === P.TANK && p.barrel)
      ) {
        p.cannonRecoil = Math.max(0, (p.cannonRecoil ?? 0) - e);
        const X =
          p.barrel.userData.restZ ??
          (p.barrel.userData.restZ = p.barrel.position.z);
        p.barrel.position.z =
          X + Math.sin(((p.cannonRecoil ?? 0) / 0.45) * Math.PI) * 0.32;
      }
      if (p.type === P.MORTAR && p.barrel) {
        p.mortarRecoil = Math.max(0, (p.mortarRecoil ?? 0) - e);
        const X =
          Math.sin(Math.min(1, (p.mortarRecoil ?? 0) / 0.32) * Math.PI) * 0.19;
        ((p.barrel.position.y = 0.65 - X),
          (p.barrel.position.z = 0.18 + X * 0.5));
      }
      if (p === this.mine && this.mineSeat === 0) {
        ((p.hpBar.visible = !1),
          p.lod && (p.lod.visible = !1),
          (p.group.visible = b));
        continue;
      }
      const L = 1 - Math.exp(-10 * e);
      if (!this.applyDeckGlue(p)) {
        const X = this.tmpAircraftPos;
        (p.motion.sample(X, this.tmpMotionQuat) ||
          (X.copy(p.pos).lerp(p.target.pos, L),
          this.tmpMotionQuat.copy(p.quat).slerp(p.target.quat, L)),
          p.pos.copy(X),
          p.quat.copy(this.tmpMotionQuat));
      }
      (p.group.position.copy(p.pos),
        p.group.quaternion.copy(p.quat),
        p.labelAnchor.position.copy(p.pos));
      const N = r ? (this.allowLod ? m6 : 120) : this.allowLod ? 110 : 260,
        D = !m && !!p.lod && !!s && p.pos.distanceToSquared(s) > N ** 2;
      if (
        ((p.group.visible = b && !D),
        p.lod && (p.lod.visible = b && D),
        p.turret)
      ) {
        let Q = (p.type === P.TURRET ? p.aux2 : p.aux1) - p.turret.rotation.y;
        if (
          ((Q = Math.atan2(Math.sin(Q), Math.cos(Q))),
          (p.turret.rotation.y += Q * L),
          p.barrel)
        ) {
          const ee =
            p.type === P.MORTAR ? 0 : p.type === P.TURRET ? p.vel.y : p.aux2;
          p.barrel.rotation.x += (ee - p.barrel.rotation.x) * L;
        }
      }
      (p.type === P.TURRET &&
        p.props[0] &&
        ((p.props[0].rotation.y = p.aux1),
        (p.props[0].visible = b && p.driver === this.myId)),
        (_ || (b && D)) && this.spinProps(p, e, p.vel.length()),
        b && D && p.lod && p.lod.sync());
      const H = !s || p.pos.distanceTo(s) <= 50,
        G = p.ownerName === Mo || M === "enemy";
      p.hpBar.visible =
        p.planet === this.currentPlanet &&
        (x
          ? T <= 600
          : M === "enemy"
            ? b && T <= 170
            : b && (H || D) && (G || p.hp < p.maxHp));
      const I = Math.max(1, Math.min(16, T / (M ? 22 : 34))),
        O = M ? 5.4 : p.hpBar.userData.raid ? 3.3 : 3;
      p.hpBar.scale.set(O * I, (O / p.hpBar.userData.aspect) * I, 1);
      const F = M ?? (x ? "ally" : G || p.ownerName ? "enemy" : "neutral");
      (p.hpBar.userData.relation !== F &&
        ((p.hpBar.userData.relation = F), of(p)),
        p.type === P.PATRIOT &&
          !p.serverAuto &&
          p.driver === -1 &&
          p.owner === this.myId &&
          this.updatePatriotDefense(p, e));
    }
    const c = this.mine;
    if (c && this.mineSeat > 0) {
      const p = al(c.quat),
        m = p - this.passengerHullYaw;
      ((this.camYaw += Math.atan2(Math.sin(m), Math.cos(m))),
        (this.passengerHullYaw = p));
      const y = this.mySeatGun() ? this.gunZoom : 1;
      if (
        (i && (this.camYaw -= (t.mdx * 0.0022) / y),
        i &&
          (this.camPitch = Ne(
            this.camPitch - (t.mdy * 0.0022) / y,
            -1.35,
            1.45,
          )),
        this.mySeatGun() && this.updateSightZoom(c, e, t, i),
        this.camMode === 0 && this.mySeatGun())
      ) {
        const g = r6(c.type);
        if (
          ((this.camPitch = Ne(this.camPitch, g.down, g.up)), g.swing < Math.PI)
        ) {
          const b = p + (this.mineSeat === 1 ? Math.PI / 2 : -Math.PI / 2),
            S = this.camYaw - b;
          this.camYaw =
            b + Ne(Math.atan2(Math.sin(S), Math.cos(S)), -g.swing, g.swing);
        }
      }
      (t.actionPressed("camera") && (this.camMode = 1 - this.camMode),
        (c.hpBar.visible = !1),
        this.fireSeatGun(c, e, t, i));
    }
    if (c && this.mineSeat === 0) {
      const p = e / Xt.vehicleReload(c.type);
      ((c.fireCd = Math.max(As(c.type) ? -e : 0, c.fireCd - p)),
        (c.fireCd2 =
          (c.type === P.CARRIER || c.type === P.MORTAR) && c.carrierReadyAt > 0
            ? Math.max(0, (c.carrierReadyAt - Date.now()) / 1e3)
            : Math.max(As(c.type) ? -e : 0, c.fireCd2 - p)),
        (this.fireCdBefore = c.fireCd),
        (this.fireCd2Before = c.fireCd2),
        this.updateSightZoom(c, e, t, i),
        t.actionPressed("camera") && (this.camMode = 1 - this.camMode),
        c.type === P.TANK
          ? this.driveTank(c, e, t, i)
          : As(c.type)
            ? this.drivePlane(c, e, t, i)
            : c.type === P.BOAT || c.type === P.CARRIER
              ? this.driveShip(c, e, t, i)
              : c.type === P.SUBMARINE
                ? this.driveShip(c, e, t, i)
                : c.type === P.HELI
                  ? this.driveHelicopter(c, e, t, i)
                  : c.type === P.MORTAR
                    ? ((this.camYaw -= t.mdx * 0.0022),
                      (this.camPitch = Ne(
                        this.camPitch - t.mdy * 0.0022,
                        -0.35,
                        1.1,
                      )),
                      (c.speed = 0),
                      c.vel.set(0, 0, 0),
                      i &&
                        (t.clickL || t.clickR) &&
                        this.hooks.openMap("himars"))
                    : c.type === P.HIMARS
                      ? this.driveHimars(c, e, t, i)
                      : c.type === P.PATRIOT
                        ? this.drivePatriot(c, e, t, i)
                        : c.type === P.TURRET
                          ? this.driveTurret(c, e, t, i)
                          : c.type === P.BTR_TURRET
                            ? this.driveBtrTurret(c, e, t, i)
                            : c.type === P.SPACE_ROCKET
                              ? this.driveRocket(c, e, t, i)
                              : this.driveDrone(c, e, t, i),
        this.practice(c, e, i),
        c.group.position.copy(c.pos),
        c.group.quaternion.copy(c.quat),
        (c.hpBar.visible = !1),
        (this.streamT += e),
        this.streamT > 1 / 15 && ((this.streamT = 0), this.hooks.sendState(c)));
    }
    for (const [p, m] of this.heliCargo) {
      const y = this.vehicles.get(p),
        g = this.vehicles.get(m);
      if (!y || !g) continue;
      (g.pos.set(
        y.pos.x,
        Math.max(
          y.pos.y - g$(g.type),
          this.world.groundAt(y.pos.x, y.pos.z, g.pos.y + 0.4),
        ),
        y.pos.z,
      ),
        g.target.pos.copy(g.pos),
        g.vel.copy(y.vel),
        g.group.position.copy(g.pos));
      let b = this.cargoRopes.get(p);
      b ||
        ((b = new Dl(
          new ci().setAttribute("position", new oi(new Float32Array(24), 3)),
          new Eo({ color: 2761756 }),
        )),
        this.scene.add(b),
        this.cargoRopes.set(p, b));
      const S = 1.25,
        M = Math.min(1.5, wK[g.type] * 0.45),
        x = b.geometry.getAttribute("position");
      let T = 0;
      for (const A of [-1, 1])
        for (const _ of [-1, 1])
          (x.setXYZ(T++, y.pos.x + A * S, y.pos.y, y.pos.z + _ * S),
            x.setXYZ(
              T++,
              g.pos.x + A * M,
              g.pos.y + m4(g.type),
              g.pos.z + _ * M,
            ));
      ((x.needsUpdate = !0),
        b.geometry.computeBoundingSphere(),
        (b.visible = y.planet === this.currentPlanet));
    }
    if (e > 0)
      for (const p of this.vehicles.values()) {
        const m = al(p.quat);
        if (p.prevYaw !== null) {
          let y = m - p.prevYaw;
          ((y = Math.atan2(Math.sin(y), Math.cos(y))),
            (p.yawRate = Qi(p.yawRate, y / e, 1 - Math.exp(-16 * e))));
        }
        p.prevYaw = m;
      }
    for (const p of this.vehicles.values())
      p.planet === this.currentPlanet &&
        this.tracks.emit(
          {
            id: p.id,
            type: p.type,
            planet: p.planet,
            x: p.pos.x,
            y: p.pos.y,
            z: p.pos.z,
            yaw: al(p.quat),
            speed: p === this.mine ? p.speed : Math.hypot(p.vel.x, p.vel.z),
          },
          s,
        );
    this.tracks.update();
  }
  tankStrike(e) {
    var i, s;
    const t = this.mine;
    !t ||
      t.type !== P.TANK ||
      this.mineSeat > 0 ||
      t.fireCd > 0 ||
      t.tankAim ||
      ((t.tankAim = { target: e.clone(), remaining: 8, origin: t.pos.clone() }),
      (s = (i = this.hooks).requestTankAim) == null || s.call(i, t.id, e));
  }
  tankAimReady(e, t, i) {
    const s = this.mine;
    if (!s || s.id !== e || !s.tankAim) return;
    if (!t || !i) {
      delete s.tankAim;
      return;
    }
    const o = Math.hypot(i.x, i.z);
    s.tankAim = {
      target: t,
      remaining: 0.8,
      origin: s.pos.clone(),
      shot: {
        vx: i.x,
        vy: i.y,
        vz: i.z,
        pitch: Math.atan2(i.y, o),
        yaw: Math.atan2(-i.x, -i.z),
        time: Math.hypot(t.x - s.pos.x, t.z - s.pos.z) / o,
      },
    };
  }
  tankLaunch(e, t, i) {
    const s = this.vehicles.get(e);
    s &&
      ((s.cannonRecoil = 0.45),
      this.kickHull(s, s.aux1, 0.55),
      this.sfx.shot("tank", t.distanceTo(i)),
      this.effects.flash(t, 5, 0.15),
      this.effects.muzzleSmoke(
        t,
        new k(
          -Math.sin(s.yaw + s.aux1),
          Math.sin(s.aux2),
          -Math.cos(s.yaw + s.aux1),
        ),
      ),
      s === this.mine && this.effects.addTrauma(0.35));
  }
  mortarStrike(e) {
    const t = this.mine;
    !t ||
      t.type !== P.MORTAR ||
      this.mineSeat > 0 ||
      Date.now() < t.carrierReadyAt ||
      Math.hypot(e.x - t.pos.x, e.z - t.pos.z) > Hd ||
      ((t.aux1 = Math.atan2(-(e.x - t.pos.x), -(e.z - t.pos.z)) - t.yaw),
      t.turret && (t.turret.rotation.y = t.aux1),
      (t.carrierReadyAt = Date.now() + Ax * 1e3),
      (t.fireCd2 = Ax),
      this.projectiles.spawn(
        pt.MISSILE,
        t.pos.clone().add(new k(0, 3.5, 0)),
        new k(0, 48, 0),
        !0,
        { guide: e, ignoreVehicle: t.id },
      ));
  }
  mortarLaunch(e, t, i) {
    const s = this.vehicles.get(e);
    s &&
      ((s.mortarRecoil = 0.32),
      this.sfx.shot("mortar", t.distanceTo(i)),
      this.effects.flash(t, 3, 0.18),
      this.effects.muzzleSmoke(t, new k(0, 1, 0)),
      s === this.mine && this.effects.addTrauma(0.2));
  }
  himarsStrike(e) {
    var s, o, a, r;
    const t = this.mine;
    if (!t || t.type !== P.HIMARS) return;
    const i =
      Math.max(t.himarsPendingUntil ?? 0, t.himarsServerReadyAt ?? 0) -
      Date.now();
    if (i > 0 || (t.himarsBusy && !t.himarsServerReadyAt)) {
      (o = (s = this.hooks).message) == null ||
        o.call(
          s,
          z.language === "en"
            ? i > 0
              ? `HIMARS: reloading ${Math.ceil(i / 1e3)} s.`
              : "HIMARS: firing salvo."
            : i > 0
              ? `HIMARS: перезарядка ${Math.ceil(i / 1e3)} с.`
              : "HIMARS: идёт залп.",
        );
      return;
    }
    if (Math.hypot(e.x - t.pos.x, e.z - t.pos.z) > nr) {
      (r = (a = this.hooks).message) == null ||
        r.call(
          a,
          z.language === "en"
            ? `HIMARS: target beyond ${nr} m.`
            : `HIMARS: цель вне радиуса ${nr} м.`,
        );
      return;
    }
    t.himarsPendingUntil = Date.now() + Tx * 1e3;
    for (let l = 0; l < 6; l++)
      window.setTimeout(() => {
        const c = this.vehicles.get(t.id);
        if (!c || this.mine !== c || this.mineSeat > 0) return;
        const h = c.pos.clone().add(new k(0, 2.4, 0)),
          d = e
            .clone()
            .add(
              new k((Math.random() - 0.5) * 6, 0, (Math.random() - 0.5) * 6),
            ),
          u = d.clone().sub(c.pos).setY(0),
          f = nr - 0.05;
        u.length() > f && d.addScaledVector(u, (f - u.length()) / u.length());
        const p = this.world.groundAt(d.x, d.z, 120);
        d.y = p === -1 / 0 ? e.y : p + 0.3;
        const m = new k(
          (Math.random() - 0.5) * 5,
          44 + l * 0.8,
          (Math.random() - 0.5) * 5,
        );
        (this.projectiles.spawn(pt.MISSILE, h, m, !0, {
          guide: d,
          speed: 48,
          ignoreVehicle: c.id,
        }),
          (c.himarsPendingUntil = Date.now() + Tx * 1e3),
          this.sfx.shot("rpg"));
      }, l * 1e3);
  }
  carrierStrike(e) {
    const t = this.mine;
    if (!t || t.type !== P.CARRIER || t.fireCd2 > 0) return;
    ((t.fireCd2 = qv), (t.carrierReadyAt = Date.now() + qv * 1e3));
    const i = new k(-3.9, 16, 10.5).applyQuaternion(t.quat).add(t.pos),
      s = e.clone(),
      o = this.world.groundAt(s.x, s.z, 120);
    s.y = o === -1 / 0 ? e.y : o + 0.5;
    const a = new k(0, GH, 0).applyQuaternion(t.quat);
    (this.projectiles.spawn(pt.TOMAHAWK, i, a, !0, {
      guide: s,
      speed: oC,
      ignoreVehicle: t.id,
    }),
      t.props[0] &&
        ((t.props[0].rotation.x = -0.8),
        window.setTimeout(() => {
          t.props[0] && (t.props[0].rotation.x = 0);
        }, 900)),
      this.sfx.tomahawkLaunch(),
      this.effects.flash(i, 6, 0.35));
  }
  nuclearStrike(e) {
    const t = this.mine;
    if (!t || t.type !== P.SUBMARINE || t.fireCd2 > 0) return;
    ((t.fireCd2 = _x), (t.carrierReadyAt = Date.now() + _x * 1e3));
    const i = new k(0, 2.65, 2.75).applyQuaternion(t.quat).add(t.pos),
      s = e.clone(),
      o = this.world.groundAt(s.x, s.z, 120);
    s.y = o === -1 / 0 ? e.y : o + 0.5;
    const a = new k(0, XH, 0).applyQuaternion(t.quat);
    (this.projectiles.spawn(pt.NUCLEAR, i, a, !0, {
      guide: s,
      speed: rC,
      ignoreVehicle: t.id,
    }),
      t.subHatch &&
        ((t.subHatch.rotation.x = -1.08),
        window.setTimeout(() => {
          t.subHatch && (t.subHatch.rotation.x = 0);
        }, 1400)),
      this.sfx.nuclearLaunch(),
      this.effects.splash(i, 10),
      this.effects.flash(i, 12, 0.55, 16771488));
  }
  waterYAt(e, t, i) {
    for (
      let s = Math.min(126, Math.floor(i) + 16);
      s >= Math.max(2, Math.floor(i) - 16);
      s--
    ) {
      const o = this.world.getBlock(e, s, t);
      if (this.world.isWaterAt(e, s, t) && !this.world.isWaterAt(e, s + 1, t))
        return s + 0.86;
      if (o !== 0 && !this.world.isWaterAt(e, s, t)) return null;
    }
    return null;
  }
  waterColumnAt(e, t) {
    const i = Math.floor(e),
      s = Math.floor(t);
    let o = -1;
    for (let r = 126; r >= 2; r--) {
      if (this.world.isWaterAt(i, r, s) && !this.world.isWaterAt(i, r + 1, s)) {
        o = r;
        break;
      }
      if (this.world.isSolidAt(i, r, s)) return null;
    }
    if (o < 0) return null;
    let a = o;
    for (; a > 1 && this.world.isWaterAt(i, a - 1, s);) a--;
    return { surface: o + 0.86, floor: a };
  }
  driveShip(e, t, i, s) {
    if (e.type === P.SUBMARINE) {
      this.driveSubmarine(e, t, i, s);
      return;
    }
    ((this.camYaw -= i.mdx * 0.0022),
      (this.camPitch = Ne(this.camPitch - i.mdy * 0.0022, -0.3, 1.25)));
    const o = e.type === P.BOAT;
    !o && s && i.clickR && e.fireCd2 <= 0 && this.hooks.openMap("carrier");
    const a = (o ? 14 : 5) * this.speedMul(e),
      r = s ? (i.action("forward") ? 1 : 0) - (i.action("back") ? 1 : 0) : 0,
      l = s ? (i.action("left") ? 1 : 0) - (i.action("right") ? 1 : 0) : 0;
    ((e.speed += Ne(
      r * (r > 0 ? a : a * 0.4) - e.speed,
      -(o ? 5 : 1.2) * t,
      (o ? 5 : 1.2) * t,
    )),
      (e.yaw += l * t * (o ? 0.9 : 0.14) * Ne(Math.abs(e.speed) / 3, 0.15, 1)));
    const c = -Math.sin(e.yaw),
      h = -Math.cos(e.yaw),
      d = e.pos.x + c * e.speed * t,
      u = e.pos.z + h * e.speed * t,
      f = o ? 3.2 : 21;
    this.waterYAt(
      Math.floor(e.pos.x + c * f * Math.sign(e.speed || 1)),
      Math.floor(e.pos.z + h * f * Math.sign(e.speed || 1)),
      e.pos.y,
    ) === null && Math.abs(e.speed) > 0.1
      ? (e.speed *= Math.max(0, 1 - 4 * t))
      : ((e.pos.x = d), (e.pos.z = u));
    const m = this.waterYAt(Math.floor(e.pos.x), Math.floor(e.pos.z), e.pos.y);
    if (
      (m !== null &&
        (e.pos.y = Qi(e.pos.y, m - (o ? 0.25 : 1.2), Math.min(1, 4 * t))),
      (e.roll = Qi(
        e.roll,
        -l * 0.06 * Ne(Math.abs(e.speed) / a, 0, 1),
        Math.min(1, 4 * t),
      )),
      e.quat.setFromEuler(new hi(0, e.yaw, e.roll, "YXZ")),
      e.vel.set(c * e.speed, e.vy, h * e.speed),
      o && e.turret)
    ) {
      let g =
        Math.atan2(
          Math.sin(this.camYaw - e.yaw),
          Math.cos(this.camYaw - e.yaw),
        ) - e.turret.rotation.y;
      if (
        ((g = Math.atan2(Math.sin(g), Math.cos(g))),
        (e.turret.rotation.y += Ne(g, -3.5 * t, 3.5 * t)),
        (e.aux1 = e.turret.rotation.y),
        (e.aux2 = Ne(this.camPitch * 0.7, -0.2, 0.7)),
        e.barrel && (e.barrel.rotation.x = e.aux2),
        s && i.mouseL && e.fireCd <= 0)
      ) {
        e.fireCd = 0.09;
        const b = e.yaw + e.aux1,
          S = e.aux2,
          M = new k(
            -Math.sin(b) * Math.cos(S),
            Math.sin(S),
            -Math.cos(b) * Math.cos(S),
          ),
          x = -Math.sin(e.yaw),
          T = -Math.cos(e.yaw),
          A = e.pos
            .clone()
            .add(new k(x * 1.4, 1.5, T * 1.4))
            .addScaledVector(M, 1.4);
        ((M.x += (Math.random() - 0.5) * 0.025),
          (M.y += (Math.random() - 0.5) * 0.025),
          (M.z += (Math.random() - 0.5) * 0.025),
          M.normalize(),
          this.hooks.mgFire(A, M));
      }
    }
  }
  driveSubmarine(e, t, i, s) {
    ((this.camYaw -= i.mdx * 0.0022),
      (this.camPitch = Ne(this.camPitch - i.mdy * 0.0022, -0.55, 1.2)),
      s && i.clickR && e.fireCd2 <= 0 && this.hooks.openMap("nuclear"));
    const o = s
        ? (i.action("forward") ? 1 : 0) - (i.action("back") ? 1 : 0)
        : 0,
      a = s ? (i.action("left") ? 1 : 0) - (i.action("right") ? 1 : 0) : 0,
      r = 8.2;
    ((e.speed += Ne(o * (o > 0 ? r : r * 0.45) - e.speed, -3.4 * t, 3.4 * t)),
      (e.yaw += a * t * 0.58 * Ne(Math.abs(e.speed) / 2.5, 0.18, 1)));
    const l = s ? (i.action("jump") ? 1 : 0) - (i.action("crouch") ? 1 : 0) : 0,
      c = -Math.sin(e.yaw),
      h = -Math.cos(e.yaw),
      d = e.pos.x + c * e.speed * t,
      u = e.pos.z + h * e.speed * t,
      f = this.waterColumnAt(e.pos.x, e.pos.z),
      p = -h,
      m = c,
      y = Math.sign(e.speed) || (o >= 0 ? 1 : -1),
      g = d + c * y * 4.8,
      b = u + h * y * 4.8,
      S = [
        this.waterColumnAt(d, u),
        this.waterColumnAt(d + p * 1.8, u + m * 1.8),
        this.waterColumnAt(d - p * 1.8, u - m * 1.8),
        this.waterColumnAt(g, b),
        this.waterColumnAt(g + p * 1.8, b + m * 1.8),
        this.waterColumnAt(g - p * 1.8, b - m * 1.8),
      ];
    if (!f) ((e.speed = 0), (e.vy = 0));
    else {
      const x = Math.max(1.05, f.surface - (f.floor + 2.25));
      (e.subDepthReady ||
        ((e.subDepth = Ne(f.surface - e.pos.y, 1.05, x)),
        (e.subDepthReady = !0)),
        (e.subDepth = Ne(e.subDepth - l * 3.1 * t, 1.05, x)));
      const T = S.every((F) => !!F),
        A = T
          ? Math.max(f.floor + 2.25, ...S.map((F) => F.floor + 2.25))
          : f.floor + 2.25,
        _ = T
          ? Math.min(f.surface - 0.82, ...S.map((F) => F.surface - 0.82))
          : f.surface - 0.82,
        C = T && A <= _,
        R = C && A > e.pos.y + 0.08;
      Math.abs(e.speed) > 0.1 && (!C || R)
        ? (e.speed *= Math.max(0, 1 - 7 * t))
        : ((e.pos.x = d), (e.pos.z = u));
      const L = this.waterColumnAt(e.pos.x, e.pos.z) ?? f,
        N = L.floor + 2.25,
        D = L.surface - 0.82,
        H = C ? A : N,
        G = Ne(Math.max(L.surface - e.subDepth, H), N, D),
        I = Ne((G - e.pos.y) * 5, -4.8, 4.8);
      e.vy += (I - e.vy) * Math.min(1, 5.5 * t);
      let O = e.pos.y + e.vy * t;
      (O < N
        ? ((O = Math.min(N, e.pos.y + 4.8 * t)),
          O >= N - 0.002 && (e.vy = Math.max(0, e.vy)))
        : O > D &&
          ((O = Math.max(D, e.pos.y - 4.8 * t)),
          O <= D + 0.002 && (e.vy = Math.min(0, e.vy))),
        (e.pos.y = O));
    }
    ((e.roll = Qi(
      e.roll,
      -a * 0.12 * Ne(Math.abs(e.speed) / r, 0, 1),
      Math.min(1, 3 * t),
    )),
      (e.pitch = Qi(
        e.pitch,
        Ne(-e.vy * 0.035, -0.18, 0.18),
        Math.min(1, 3.4 * t),
      )),
      e.quat.setFromEuler(new hi(e.pitch, e.yaw, e.roll, "YXZ")),
      e.vel.set(c * e.speed, e.vy, h * e.speed));
  }
  surfaceVel(e, t) {
    const i = e.yawRate;
    return {
      vx: e.vel.x + i * (t.z - e.pos.z),
      vz: e.vel.z - i * (t.x - e.pos.x),
    };
  }
  *contactBodies(e) {
    for (const t of Qf[e.type] ?? [])
      if (
        e.turret &&
        (e.type === P.TANK || e.type === P.BTR_TURRET) &&
        t.min.y >= 1.2
      ) {
        const i = e.turret.position.clone().multiply(ms(e.type));
        yield {
          box: t.clone().translate(i.clone().negate()),
          pos: i.clone().applyQuaternion(e.quat).add(e.pos),
          quat: e.quat.clone().multiply(e.turret.quaternion),
        };
      } else yield { box: t, pos: e.pos, quat: e.quat };
  }
  standingSurface(e, t = e) {
    let i = null;
    for (const s of this.vehicles.values())
      if (!(
        s.planet !== this.currentPlanet ||
        Math.hypot(e.x - s.pos.x, e.z - s.pos.z) > 30
      ))
        for (const o of this.contactBodies(s)) {
          const a = kf(e, o.pos, o.quat, o.box);
          a === null ||
            t.y < a - 0.18 ||
            e.y > a + 0.65 ||
            ((!i || a > i.y) && (i = { y: a, ...this.surfaceVel(s, e) }));
        }
    return i;
  }
  resolvePlayerCollision(e, t, i, s, o = e.clone()) {
    for (const a of this.vehicles.values()) {
      if (
        a === this.mine ||
        a.planet !== this.currentPlanet ||
        Math.hypot(e.x - a.pos.x, e.z - a.pos.z) > 30
      )
        continue;
      const r = [...this.contactBodies(a)].sort(
        (l, c) =>
          (kf(e, c.pos, c.quat, c.box) ?? -1 / 0) -
          (kf(e, l.pos, l.quat, l.box) ?? -1 / 0),
      );
      for (const l of r) Rq(e, t, o, l.pos, l.quat, l.box, i, s);
    }
  }
  deckInfo(e) {
    for (const t of this.vehicles.values()) {
      if (t.type !== P.CARRIER) continue;
      const i = e.clone().sub(t.pos).applyQuaternion(t.quat.clone().invert());
      if (
        Math.abs(i.x) <= 6 &&
        Math.abs(i.z) <= 21 &&
        i.y >= 2.2 &&
        i.y <= 5.5
      ) {
        const s = this.surfaceVel(t, e),
          o = kf(e, t.pos, t.quat, iL);
        if (o !== null) return { y: o, vx: s.vx, vz: s.vz };
      }
    }
    return null;
  }
  deckYAt(e, t, i) {
    const s = this.deckInfo(this.tmpDeckV.set(e, t, i));
    return s ? s.y : -1 / 0;
  }
  deckUnder(e) {
    const t = this.deckInfo(this.tmpDeckV.set(e.pos.x, e.pos.y + 0.3, e.pos.z));
    return t && Math.abs(e.pos.y - t.y) < 0.8 ? t : null;
  }
  applyDeckGlue(e) {
    if (e.driver !== -1 || e.type === P.CARRIER)
      return (this.deckGlue.delete(e.id), !1);
    for (const t of this.vehicles.values()) {
      if (t.type !== P.CARRIER) continue;
      const i = t === this.mine && this.mineSeat === 0,
        s = i ? t.pos : t.target.pos,
        o = i ? t.quat : t.target.quat,
        a = this.tmpGlueV
          .copy(e.target.pos)
          .sub(s)
          .applyQuaternion(this.tmpGlueQ.copy(o).invert());
      if (Math.abs(a.x) > 6.2 || Math.abs(a.z) > 21.2 || a.y < 2 || a.y > 6.5)
        continue;
      const r = al(e.target.quat) - al(o);
      let l = this.deckGlue.get(e.id);
      if (!l || l.carrierId !== t.id)
        ((l = { carrierId: t.id, off: a.clone(), relYaw: r }),
          this.deckGlue.set(e.id, l));
      else {
        let h = r - l.relYaw;
        ((h = Math.atan2(Math.sin(h), Math.cos(h))),
          (l.off.distanceTo(a) > 2.5 || Math.abs(h) > 0.6) &&
            (l.off.copy(a), (l.relYaw = r)));
      }
      e.pos.copy(l.off).applyQuaternion(t.quat).add(t.pos);
      const c = al(t.quat) + l.relYaw;
      return (
        e.quat.set(0, Math.sin(c / 2), 0, Math.cos(c / 2)),
        e.vel.copy(t.vel),
        !0
      );
    }
    return (this.deckGlue.delete(e.id), !1);
  }
  passengerCanShoot() {
    return this.remoteView
      ? !1
      : this.mine !== null &&
          this.mineSeat > 0 &&
          !vl(this.mine.type, this.mineSeat) &&
          (this.mine.type === P.BOAT || As(this.mine.type));
  }
  mySeatGun() {
    return this.mine && !this.remoteView && this.mineSeat > 0
      ? vl(this.mine.type, this.mineSeat)
      : null;
  }
  seatGunsOf(e) {
    var i;
    if (((i = e.seatGuns) == null ? void 0 : i.root) === e.group)
      return e.seatGuns.guns;
    const t = new Map();
    for (let s = 1; s <= (_f[e.type] ?? 0); s++) {
      const o = vl(e.type, s)
          ? e.group.getObjectByName("seat-gun-" + s)
          : void 0,
        a = o == null ? void 0 : o.getObjectByName("seat-gun-pitch");
      o && a && t.set(s, { yaw: o, pitch: a, rest: o.rotation.y, kick: 0 });
    }
    return ((e.seatGuns = { root: e.group, guns: t }), t);
  }
  poseSeatGuns(e, t) {
    var o, a, r;
    const i = this.seatGunsOf(e);
    if (!i.size) return;
    let s = !1;
    for (const [l, c] of i) {
      ((c.kick = Math.max(0, c.kick - t * 11)),
        (c.pitch.position.z = 0.05 * c.kick));
      let h = null;
      const d = e === this.mine && this.mineSeat === l && !this.remoteView;
      let u = -1;
      for (const [b, S] of e.passengerSeats) S === l && (u = b);
      d &&
        this.aimValid &&
        (h = this.tmpGunA.copy(
          this.gunAimTarget(e, vl(e.type, l).range, 90, 5),
        ));
      const f =
        u < 0 && !d ? ((o = e.seatBots) == null ? void 0 : o.get(l)) : void 0;
      if (
        (this.seatFigure(e, l, c.yaw, (f == null ? void 0 : f.state) === 1),
        (f == null ? void 0 : f.state) === 1)
      ) {
        s || (e.group.updateMatrixWorld(!0), (s = !0));
        const b = Math.cos(f.pitch);
        h = c.pitch
          .getWorldPosition(this.tmpGunA)
          .add(
            this.tmpGunB
              .set(
                -Math.sin(f.yaw) * b,
                Math.sin(f.pitch),
                -Math.cos(f.yaw) * b,
              )
              .multiplyScalar(60),
          );
      } else if (u >= 0 && !d) {
        const b = (r = (a = this.hooks).lookOf) == null ? void 0 : r.call(a, u);
        if (b) {
          s || (e.group.updateMatrixWorld(!0), (s = !0));
          const S = Math.cos(b.pitch);
          h = c.pitch
            .getWorldPosition(this.tmpGunA)
            .add(
              this.tmpGunB
                .set(
                  -Math.sin(b.yaw) * S,
                  Math.sin(b.pitch),
                  -Math.cos(b.yaw) * S,
                )
                .multiplyScalar(60),
            );
        }
      }
      const p = r6(e.type);
      let m = c.rest,
        y = e.type === P.HELI ? -0.25 : 0;
      if (h && c.yaw.parent) {
        s || (e.group.updateMatrixWorld(!0), (s = !0));
        const b = c.yaw.parent
          .worldToLocal(this.tmpGunB.copy(h))
          .sub(c.yaw.position)
          .divide(c.yaw.scale);
        ((b.y -= c.pitch.position.y),
          (m = Math.atan2(-b.x, -b.z)),
          (y = Ne(Math.atan2(b.y, Math.hypot(b.x, b.z)), p.down, p.up)),
          p.swing < Math.PI &&
            (m =
              c.rest +
              Ne(
                Math.atan2(Math.sin(m - c.rest), Math.cos(m - c.rest)),
                -p.swing,
                p.swing,
              )));
      }
      const g = Math.min(
        1,
        t * ((f == null ? void 0 : f.state) === 1 ? 9 : 18),
      );
      ((c.yaw.rotation.y +=
        Math.atan2(
          Math.sin(m - c.yaw.rotation.y),
          Math.cos(m - c.yaw.rotation.y),
        ) * g),
        (c.pitch.rotation.x += (y - c.pitch.rotation.x) * g));
    }
  }
  onSeatGun(e, t, i, s, o, a) {
    const r = this.vehicles.get(e);
    if (!r) return;
    const l = r.seatBots ?? (r.seatBots = new Map()),
      c = l.get(t);
    if (!i) {
      (c != null && c.figure && c.figure.removeFromParent(), l.delete(t));
      return;
    }
    c
      ? ((c.state = i),
        i === 1 && ((c.yaw = s), (c.pitch = o)),
        a && (c.name = a))
      : l.set(t, { state: i, name: a, yaw: s, pitch: o });
  }
  seatBot(e) {
    var t, i;
    return (i = (t = this.mine) == null ? void 0 : t.seatBots) == null
      ? void 0
      : i.get(e);
  }
  seatFigure(e, t, i, s) {
    var r, l, c;
    const o = (r = e.seatBots) == null ? void 0 : r.get(t);
    if (
      !o ||
      (o.figure &&
        (!s || o.figure.parent !== i) &&
        (o.figure.removeFromParent(), (o.figure = void 0)),
      !s || o.figure || e.type !== P.HELI)
    )
      return;
    const a = (c = (l = this.hooks).seatFigure) == null ? void 0 : c.call(l);
    a && (a.position.set(0, -0.7, 0.44), i.add(a), (o.figure = a));
  }
  botSeatShot(e) {
    var o;
    let t = null;
    for (const a of this.vehicles.values())
      if (!(
        !((o = a.seatBots) != null && o.size) || a.pos.distanceToSquared(e) > 36
      ))
        for (const [r, l] of a.seatBots) {
          if (l.state !== 1) continue;
          const c = this.seatGunsOf(a).get(r),
            h = c
              ? c.pitch.getWorldPosition(this.tmpGunA).distanceTo(e)
              : a.pos.distanceTo(e);
          h < 3.2 && (!t || h < t.d) && (t = { v: a, seat: r, d: h });
        }
    if (!t) return null;
    const i = vl(t.v.type, t.seat),
      s = this.seatGunsOf(t.v).get(t.seat);
    return (
      i &&
        s &&
        gc(t.v) &&
        t.v.group.visible &&
        (t.v.group.updateMatrixWorld(!0),
        s.pitch.localToWorld(e.set(0, 0.012, G5)),
        (s.kick = 1),
        this.effects.flash(e, i.heavy ? 2 : 1.5, 0.05, 16760944)),
      i
    );
  }
  remoteSeatShot(e, t) {
    for (const i of this.vehicles.values()) {
      const s = i.passengerSeats.get(e);
      if (!s) continue;
      const o = vl(i.type, s);
      if (!o) return null;
      const a = gc(i) && i.group.visible ? this.seatGunsOf(i).get(s) : void 0;
      return (
        a &&
          ((a.kick = 1),
          this.effects.flash(t, o.heavy ? 2 : 1.5, 0.05, 16760944)),
        o
      );
    }
    return null;
  }
  static seatGunHeatPerRound(e) {
    return e.heavy ? 1 / 72 : e.interval > 0.08 ? 1 / 88 : 1 / 112;
  }
  fireSeatGun(e, t, i, s) {
    var m, y, g, b, S, M;
    const o = this.mySeatGun(),
      a = o ? this.seatGunsOf(e).get(this.mineSeat) : void 0;
    this.seatGunCd = Math.max(0, this.seatGunCd - t);
    const r = o ? e.id * 8 + this.mineSeat : -1;
    if (
      (r !== this.seatGunKey &&
        ((this.seatGunKey = r),
        (this.seatGunHeat = 0),
        (this.seatGunHot = !1),
        (this.seatGunQuiet = 9)),
      (this.seatGunQuiet += t),
      this.seatGunQuiet > 0.28 &&
        (this.seatGunHeat = Math.max(
          0,
          this.seatGunHeat - t / Ar.SEAT_GUN_COOL,
        )),
      this.seatGunHot && this.seatGunHeat <= 0.38 && (this.seatGunHot = !1),
      !o || !a)
    )
      return;
    (e.group.position.copy(e.pos),
      e.group.quaternion.copy(e.quat),
      e.group.updateMatrixWorld(!0));
    const l = a.pitch.localToWorld(new k(0, 0.012, G5)),
      c = l
        .clone()
        .sub(a.pitch.localToWorld(new k(0, 0.012, 0)))
        .normalize(),
      h = this.tmpSeatForward
        .copy(c)
        .applyQuaternion(this.tmpMotionQuat.copy(e.quat).invert()),
      d = uK(e.type, this.mineSeat, h);
    let u = c,
      f = 0;
    if (this.aimValid) {
      const x = this.gunAimTarget(e, o.range, 90, 5).clone().sub(l).normalize();
      ((f = c.angleTo(x)), f < 0.07 && (u = x));
    }
    if (
      ((this.seatGunLaid.arc = d && f <= 0.5),
      (this.seatGunLaid.laid = f < 0.07),
      (this.seatGunLaid.bearing =
        ((((Math.atan2(h.x, -h.z) * 180) / Math.PI) % 360) + 360) % 360),
      !s ||
        !i.mouseL ||
        this.seatGunCd > 0 ||
        this.seatGunHot ||
        ((y = (m = this.hooks).seatGunBusy) != null && y.call(m)) ||
        !d ||
        f > 0.5)
    )
      return;
    ((u = u.clone()),
      (u.x += (Math.random() - 0.5) * o.spread),
      (u.y += (Math.random() - 0.5) * o.spread),
      (u.z += (Math.random() - 0.5) * o.spread),
      u.normalize(),
      (this.seatGunCd = o.interval),
      (this.seatGunQuiet = 0),
      (this.seatGunHeat = Math.min(
        1,
        this.seatGunHeat + Ar.seatGunHeatPerRound(o),
      )),
      this.seatGunHeat >= 1 &&
        ((this.seatGunHot = !0),
        (b = (g = this.hooks).seatGunOverheat) == null || b.call(g, l)),
      (a.kick = 1),
      (M = (S = this.hooks).seatGunFire) == null || M.call(S, l, u, o),
      this.effects.flash(l, o.heavy ? 2 : 1.5, 0.05, 16760944));
    const p = this.tmpGunB
      .set(1, 0.4, 0.15)
      .transformDirection(a.pitch.matrixWorld);
    (this.effects.casing(
      a.pitch.localToWorld(new k(0.06, 0, 0.05)),
      p,
      void 0,
      o.heavy ? 0.045 : 0.035,
    ),
      this.effects.addTrauma(
        this.camMode === 0
          ? (o.heavy ? 0.028 : 0.02) / Math.max(1, this.gunZoom * 0.7)
          : 0.01,
      ));
  }
  seatSight() {
    const e = this.mySeatGun(),
      t = this.mine;
    return !e || !t || this.camMode !== 0
      ? null
      : {
          gun: e,
          zoom: this.gunZoom,
          steps: Ar.zoomLevels(t.type, this.mineSeat).length,
          heat: this.seatGunHeat,
          hot: this.seatGunHot,
          cooling: this.seatGunHot
            ? Math.max(
                0,
                (this.seatGunHeat - 0.38) * Ar.SEAT_GUN_COOL +
                  Math.max(0, 0.28 - this.seatGunQuiet),
              )
            : 0,
          arc: this.seatGunLaid.arc,
          laid: this.seatGunLaid.laid,
          bearing: this.seatGunLaid.bearing,
        };
  }
  seatGunAimPoint(e) {
    const t = this.mine,
      i = this.mySeatGun(),
      s = i && t ? this.seatGunsOf(t).get(this.mineSeat) : void 0;
    if (!t || !i || !s) return !1;
    t.group.updateMatrixWorld(!0);
    const o = s.pitch.localToWorld(this.tmpGunA.set(0, 0.012, G5)),
      a = this.tmpGunB
        .copy(o)
        .sub(s.pitch.localToWorld(this.tmpBoreA.set(0, 0.012, 0)))
        .normalize(),
      r = this.world.raycast(o, a, i.range),
      l = this.rayHit(o, a, (r == null ? void 0 : r.dist) ?? i.range);
    return (
      e
        .copy(o)
        .addScaledVector(
          a,
          l && l.id !== t.id ? l.dist : ((r == null ? void 0 : r.dist) ?? 90),
        ),
      !0
    );
  }
  passengerCanRepair() {
    return this.remoteView ? !1 : this.mine !== null && this.mineSeat > 0;
  }
  static hasOpenSeats(e) {
    return z2[e] !== void 0;
  }
  seatPos(e, t, i) {
    const s = z2[e.type] ?? z2[P.BOAT];
    let o = s[(t - 1) % s.length];
    return (i.set(o[0], o[1], o[2]).applyQuaternion(e.quat).add(e.pos), i);
  }
  remoteSeatPose(e, t, i, s) {
    var r;
    const o = this.vehicles.get(e);
    if (!o || t < 0 || !Ar.hasOpenSeats(o.type)) return null;
    if (t === 0) {
      const c = {
        14: [0, 0.78, -2.8],
        0: [0, 1.15, -0.9],
        1: [0, 0.25, -0.35],
        3: [0, 1.1, -0.8],
        4: [0, 0.65, -1.4],
        6: [0, 0.45, -1.55],
        7: [-0.45, 0.6, -1.75],
        8: [-0.45, 0.6, -1.75],
        9: [0, 0.1, 0.45],
        10: [0, 1.05, -0.85],
        11: [0, 0.8, -1.6],
      }[o.type] ?? [0, 1, 0];
      return (
        i
          .set(c[0], c[1], c[2])
          .multiply(ms(o.type))
          .applyQuaternion(o.quat)
          .add(o.pos),
        s == null || s.copy(o.quat),
        al(o.quat)
      );
    }
    if (
      (this.seatPos(o, t, i),
      o.type !== P.HELI && i.add(new k(0, -0.55, 0).applyQuaternion(o.quat)),
      o.type === P.HELI)
    ) {
      const l =
        ((r = this.seatGunsOf(o).get(t)) == null ? void 0 : r.yaw.rotation.y) ??
        (t === 1 ? Math.PI / 2 : -Math.PI / 2);
      return (
        s == null ||
          s.copy(o.quat).multiply(new Jt().setFromAxisAngle($t.DEFAULT_UP, l)),
        al(o.quat) + l
      );
    }
    s == null || s.copy(o.quat);
    const a = this.tmpSeatForward.set(0, 0, -1).applyQuaternion(o.quat);
    return Math.atan2(-a.x, -a.z);
  }
  spinProps(e, t, i) {
    if (e.type !== P.TURRET) {
      if (e.type === P.CARRIER) {
        if (e.props[0]) {
          const s =
            e.carrierReadyAt > Date.now() &&
            e.carrierReadyAt - Date.now() > (qv - 3) * 1e3;
          e.props[0].rotation.x +=
            ((s ? -1.15 : 0) - e.props[0].rotation.x) * (1 - Math.exp(-4 * t));
        }
        return;
      }
      if (e.type === P.HELI) {
        const s =
          e.driver !== -1 ||
          !!e.serverAuto ||
          !!e.radioActive ||
          (e === this.mine && this.mineSeat === 0 && this.remoteView);
        e.rotorPower = Ne(
          (e.rotorPower ?? (e.vel.length() > 2 ? 1 : 0)) + (s ? t / 2 : -t / 3),
          0,
          1,
        );
      }
      for (const s of e.props) {
        const o = s.userData.axis ?? "y",
          a =
            e.type === P.SUBMARINE
              ? i * 3
              : e.driver !== -1 ||
                  e.serverAuto ||
                  e.radioActive ||
                  (e === this.mine && this.mineSeat === 0) ||
                  i > 0.2
                ? e.type === P.HELI
                  ? (o === "x" ? 105 : 35) * (e.rotorPower ?? 0)
                  : e.type === P.PLANE
                    ? 35 + Math.abs(i) * 2
                    : 85
                : 0;
        ((s.userData.rpm =
          (s.userData.rpm ?? 0) +
          (a - (s.userData.rpm ?? 0)) * (1 - Math.exp(-t * 1.8))),
          (s.rotation[o] =
            (s.rotation[o] + s.userData.rpm * t) % (Math.PI * 2)));
        const r = s.userData.blades;
        if (r) {
          const c = 0.075 * (1 - Math.min(1, s.userData.rpm / 24));
          for (const h of r) h.rotation.z = -c;
        }
        const l = s.userData.blur;
        if (l) {
          const c = l.material;
          ((c.opacity = Math.min(0.15, s.userData.rpm / 450)),
            (l.visible = c.opacity > 0.01));
        }
      }
    }
  }
  kickHull(e, t, i) {
    ((e.chassis.vp += Math.cos(t) * i), (e.chassis.vr -= Math.sin(t) * i));
  }
  animateChassis(e, t, i, s, o = !1) {
    const a = e.chassis;
    if (t <= 0) return;
    const r = Math.min(t, 1 / 30),
      l = (i - a.speed) / r;
    ((a.speed = i),
      (a.accel += (Ne(l, -12, 12) - a.accel) * (1 - Math.exp(-6 * r))));
    let c = 0,
      h = 0;
    const d = e.type === P.BOAT;
    if (d)
      ((a.bob += r),
        (c =
          Ne(Math.abs(i) / 9, 0, 1) * 0.07 +
          Math.sin(a.bob * 1.3) * 0.018 +
          a.accel * 0.004),
        (h = Math.sin(a.bob * 0.9 + 1.7) * 0.025));
    else {
      const y = e.type === P.TANK;
      ((c = Ne(a.accel * (y ? 0.006 : 0.01), -0.05, 0.05)),
        (h = Ne(
          -e.yawRate * Math.abs(i) * (y ? 0.008 : 0.014),
          -0.045,
          0.045,
        )));
    }
    const u = d ? 18 : 55,
      f = d ? 6 : 7;
    if (
      ((a.vp += ((c - a.pitch) * u - a.vp * f) * r),
      (a.vr += ((h - a.roll) * u - a.vr * f) * r),
      (a.pitch += a.vp * r),
      (a.roll += a.vr * r),
      !d)
    ) {
      const y = (e.pos.y - a.lastY) / r,
        g = Ne((y - a.climb) / r, -40, 40);
      ((a.lastY = e.pos.y),
        (a.climb = y),
        (a.vh += (-g * 0.55 - a.heave * 190 - a.vh * 13) * r),
        (a.heave = Ne(a.heave + a.vh * r, -0.11, 0.07)));
    }
    if (
      (e.sprung &&
        (e.sprung.rotation.set(a.pitch, 0, a.roll),
        (e.sprung.position.y = d ? 0 : a.heave)),
      e.launcher)
    ) {
      let y = 0;
      e.type === P.HIMARS
        ? (y =
            Date.now() <
            Math.max(e.himarsPendingUntil ?? 0, e.himarsServerReadyAt ?? 0)
              ? 0.95
              : 0)
        : (y =
            Math.abs(Math.atan2(Math.sin(e.aux1), Math.cos(e.aux1))) > 0.05 ||
            e.fireCd > 0
              ? 1
              : 0.12);
      const g =
          e.launcher.userData.elevation ?? (e.type === P.PATRIOT ? 0.12 : 0),
        b = g + Ne(y - g, -0.6 * r, 0.6 * r);
      ((e.launcher.userData.elevation = b),
        (e.launcher.rotation.x = e.type === P.HIMARS ? -b : b));
    }
    const p = HK[e.type],
      m = e.driver !== -1 || !!e.serverAuto || Math.abs(i) > 0.3;
    if (p && m && !o && yt(1) && s < 1600) {
      const y = Ne(Math.abs(a.accel) / 4 + Math.abs(i) / 12, 0, 1);
      if (((a.exhaust -= r * (1.5 + y * 7)), a.exhaust <= 0)) {
        a.exhaust = 1;
        const g = this.tmpExhaust
          .copy(p)
          .multiply(ms(e.type))
          .applyQuaternion(e.quat)
          .add(e.pos);
        this.effects.exhaust(g, e.vel, y);
      }
    }
  }
  animateTracks(e, t, i) {
    if (e.trackParts.length !== 0) {
      e.trackPhase += i * t;
      for (const s of e.trackParts) s.userData.track && wL(s, -e.trackPhase);
    }
  }
  trafficClear(e, t, i, s, o) {
    const a = { id: e.id, type: e.type, x: t.x, y: t.y, z: t.z, yaw: s },
      r = [];
    for (const l of this.vehicles.values())
      l !== e &&
        l.planet === e.planet &&
        Math.abs(l.pos.x - t.x) < 70 &&
        Math.abs(l.pos.z - t.z) < 70 &&
        Math.abs(l.pos.y - t.y) < 20 &&
        r.push({
          id: l.id,
          type: l.type,
          x: l.pos.x,
          y: l.pos.y,
          z: l.pos.z,
          yaw: l.yaw,
        });
    return aL(a, { ...a, x: i.x, y: i.y, z: i.z, yaw: o }, r, 0.35);
  }
  moveGroundHull(e, t, i) {
    var y, g;
    ((y = e.ride) == null ? void 0 : y.top) !== void 0 &&
      Math.abs(e.ride.top - e.pos.y) > 8 &&
      (e.ride = void 0);
    const s = _K.set(
      e.pos.x,
      ((g = e.ride) == null ? void 0 : g.top) !== void 0
        ? e.ride.top + 0.03
        : e.pos.y,
      e.pos.z,
    );
    (!this.trafficClear(e, e.pos, e.pos, i, e.yaw) ||
      !_A(this.groundSurface, s, e.pos.x, e.pos.z, e.yaw, e.type, 0, i)) &&
      (e.yaw = i);
    const o = e.quat.clone(),
      a = e.pos.clone(),
      r = -Math.sin(e.yaw),
      l = -Math.cos(e.yaw),
      c = e.pos.x + r * e.speed * t,
      h = e.pos.z + l * e.speed * t,
      d = _A(this.groundSurface, s, c, h, e.yaw, e.type, 0.03, e.yaw),
      u =
        !!d && this.trafficClear(e, e.pos, new k(d.x, d.y, d.z), e.yaw, e.yaw);
    if (d && u)
      (Math.abs(e.speed) > 0.01 &&
        (Y$(this.world, e.type, c, d.y, h, e.yaw).length
          ? this.requestRam(e, c, h, e.speed)
          : e.speed > 0.3 &&
              W5.has(e.type) &&
              Tm(this.world, e.type, c, e.pos.y, h, e.yaw, 1).some(
                (b) => b.tree,
              )
            ? this.requestRam(e, c, h, e.speed)
            : Math.abs(e.speed) > 2.7 &&
              Tm(
                this.world,
                e.type,
                c,
                e.pos.y,
                h,
                e.yaw,
                e.speed >= 0 ? 1 : -1,
              ).some((b) => Bo(b.id) || b.id === v.CACTUS) &&
              this.requestRam(e, c, h, e.speed)),
        (e.pos.x = d.x),
        (e.pos.z = d.z));
    else {
      const b =
          !d && Math.abs(e.speed) > 0.01
            ? Tm(
                this.world,
                e.type,
                c,
                e.pos.y,
                h,
                e.yaw,
                e.speed >= 0 ? 1 : -1,
              )
            : [],
        S = this.ramPushing(e, b);
      (!d &&
        (S || Math.abs(e.speed) > 2.7) &&
        Math.hypot(c - e.pos.x, h - e.pos.z) > 1e-4 &&
        W5.has(e.type) &&
        this.requestRam(e, c, h, e.speed),
        (e.speed = S ? this.ramPushSpeed(e) : 0));
    }
    const f =
      e.ride ??
      (e.ride = {
        y: e.pos.y,
        vy: e.vy,
        pitch: e.pitch,
        roll: e.roll,
        pitchRate: 0,
        rollRate: 0,
      });
    ((f.y = e.pos.y), (f.vy = e.vy), (f.pitch = e.pitch), (f.roll = e.roll));
    const p = zq(
      this.groundSurface,
      f,
      e.pos.x,
      e.pos.z,
      e.yaw,
      e.type,
      t,
      this.gravity(22),
      0.03,
      e.speed,
      t > 0 ? Math.atan2(Math.sin(e.yaw - i), Math.cos(e.yaw - i)) / t : 0,
    );
    (Gq(this.groundSurface, f, e.pos.x, e.pos.z, e.yaw, e.type),
      (e.pos.y = f.y),
      (e.vy = f.vy),
      (e.pitch = f.pitch),
      (e.roll = f.roll),
      p > 3 && e.chassis && (e.chassis.vh -= Math.min(2.2, p * 0.16)),
      e.quat.setFromEuler(AK.set(e.pitch, e.yaw, e.roll, "YXZ")));
    const m = (b, S, M) => this.groundSurface.blocked(b, S, M);
    if ($h(e.type, a, e.pos, o, e.quat, m)) {
      const b = a.clone();
      if (
        ((b.y = Math.max(a.y, e.pos.y)),
        b.y === a.y ||
          $h(e.type, a, b, o, o, m) ||
          $h(e.type, b, e.pos, o, e.quat, m))
      ) {
        const S =
            Math.abs(e.speed) > 0.01
              ? Tm(this.world, e.type, c, a.y, h, e.yaw, e.speed >= 0 ? 1 : -1)
              : [],
          M = this.ramPushing(e, S);
        M && W5.has(e.type) && this.requestRam(e, c, h, e.speed);
        const x = M ? this.ramPushSpeed(e) : 0;
        (e.pos.copy(a), e.quat.copy(o), (e.yaw = i), (e.speed = x), (e.vy = 0));
        const T = new hi().setFromQuaternion(o, "YXZ");
        ((e.pitch = T.x),
          (e.roll = T.z),
          e.ride && ((e.ride.pitchRate = 0), (e.ride.rollRate = 0)),
          mA(e.type, e.pos, e.quat, m));
      }
    }
    e.vel.copy(e.pos).sub(a).divideScalar(Math.max(t, 0.001));
  }
  ramPushing(e, t) {
    const i = e.pos.y + ah(e.type).step - 1;
    return (
      t.length > 0 &&
      t.some((s) => t1(s.id) || $n(s.id)) &&
      t.every((s) => cL(s.id) || s.y <= i) &&
      Math.abs(e.speed) > 0.02
    );
  }
  ramPushSpeed(e) {
    return Math.sign(e.speed) * Math.min(Math.abs(e.speed), 2.2);
  }
  static zoomLevels(e, t = 0) {
    return t > 0
      ? vl(e, t)
        ? e === P.HELI
          ? [1, 2, 3]
          : [1, 2, 4]
        : [1]
      : e === P.TANK
        ? [1, 2, 4, 8]
        : e === P.BTR_TURRET
          ? [1, 2.5, 5]
          : [1];
  }
  updateSightZoom(e, t, i, s) {
    const o = this.mineSeat,
      a = Ar.zoomLevels(e.type, o),
      r = e.id * 8 + o;
    if (
      (this.zoomVehicle !== r &&
        ((this.zoomVehicle = r), (this.zoomIdx = 0), (this.gunZoom = 1)),
      a.length < 2)
    ) {
      ((this.zoomIdx = 0), (this.gunZoom = 1));
      return;
    }
    (s &&
      i.wheel &&
      (this.zoomIdx = Ne(this.zoomIdx - Math.sign(i.wheel), 0, a.length - 1)),
      s && i.aimTap && (this.zoomIdx = (this.zoomIdx + 1) % a.length));
    const l =
        s && !i.mobile && (o > 0 || e.type === P.BTR_TURRET) && i.mouseR
          ? 1
          : 0,
      c = o > 0 && this.camMode !== 0 ? 1 : a[Math.max(this.zoomIdx, l)];
    ((this.gunZoom += (c - this.gunZoom) * (1 - Math.exp(-14 * t))),
      Math.abs(this.gunZoom - c) < 0.01 && (this.gunZoom = c));
  }
  sightZoom() {
    return this.mine &&
      !this.remoteView &&
      (this.mineSeat === 0 || this.mySeatGun())
      ? this.gunZoom
      : 1;
  }
  inGunnerSight() {
    const e = this.mine;
    return (
      !!e &&
      this.mineSeat === 0 &&
      !this.remoteView &&
      (e.type === P.TANK || e.type === P.BTR_TURRET) &&
      (this.camMode === 0 || this.gunZoom > 1.05)
    );
  }
  tankBore(e, t, i) {
    if (!e.barrel) return !1;
    e.group.updateMatrixWorld(!0);
    const s = e.type === P.TANK ? -2.4 : y6,
      o = e.barrel.localToWorld(this.tmpBoreA.set(0, 0, 0));
    return (
      e.barrel.localToWorld(t.set(0, 0, s)),
      i.copy(t).sub(o).normalize(),
      !0
    );
  }
  gunAimTarget(e, t, i, s) {
    const o = this.world.raycast(this.aimPos, this.aimDir, t);
    let a = o ? o.dist : i;
    const r = this.rayHit(this.aimPos, this.aimDir, a);
    return (
      r && r.id !== e.id && (a = r.dist),
      this.tmpAimTarget
        .copy(this.aimPos)
        .addScaledVector(this.aimDir, Math.max(a, s))
    );
  }
  tankGunSolution(e, t = !1) {
    if (!this.aimValid || !e.turret || !e.barrel || !e.turret.parent)
      return null;
    const i = this.gunAimTarget(
      e,
      t ? Rg(e.type) : 700,
      t ? 110 : 350,
      t ? 8 : 14,
    );
    e.group.updateMatrixWorld(!0);
    const s = e.barrel.getWorldPosition(this.tmpPivot),
      o = Math.hypot(i.x - s.x, i.z - s.z),
      a = i.y - s.y,
      r = em * em,
      l = sw * this.gravityScale,
      c = r * r - l * (l * o * o + 2 * a * r);
    if (!t && o > 1 && c >= 0) {
      const g = Math.atan((r - Math.sqrt(c)) / (l * o));
      i.y = s.y + Math.tan(g) * o;
    }
    const h = e.turret.parent
        .worldToLocal(this.tmpAimLocal.copy(i))
        .sub(e.turret.position),
      d = Math.atan2(-h.x, -h.z),
      u = Math.cos(-d),
      f = Math.sin(-d),
      p = h.x * -f + h.z * u,
      m = e.barrel.position,
      y = Math.atan2(h.y - m.y, -(p - m.z));
    return { yaw: d, pitch: y };
  }
  gunAimPoint(e) {
    const t = this.mine;
    if (!t || !t.barrel) return !1;
    const i = this.tmpBallistic,
      s = new k();
    if ((this.tankBore(t, i, s), t.type !== P.TANK)) {
      const c = this.world.raycast(i, s, 400);
      return (e.copy(i).addScaledVector(s, c ? c.dist : 400), !0);
    }
    const o = s.multiplyScalar(em),
      a = sw * this.gravityScale,
      r = new k(),
      l = 1 / 20;
    for (let c = 0; c < 160; c++) {
      r.copy(o).multiplyScalar(l);
      const h = r.length();
      r.divideScalar(h);
      const d = this.world.raycast(i, r, h),
        u = this.rayHit(i, r, d ? d.dist : h),
        f = u ? u.dist : d == null ? void 0 : d.dist;
      if (f !== void 0) return (e.copy(i).addScaledVector(r, f), !0);
      (i.addScaledVector(r, h), (o.y -= a * l));
    }
    return (e.copy(i), !0);
  }
  sightInfo() {
    const e = this.mine,
      t = this.seatSight();
    if (t)
      return {
        kind: "mg",
        zoom: t.zoom,
        reload: t.cooling,
        reloadMax: Ar.SEAT_GUN_COOL * 0.62,
        rounds: 0,
        magazine: 0,
        heat: t.heat,
        hot: t.hot,
      };
    if (!e || !this.inGunnerSight()) return null;
    if (e.type === P.TANK)
      return {
        kind: "tank",
        zoom: this.gunZoom,
        reload: Math.max(0, e.fireCd),
        reloadMax: 2.2,
        rounds: 0,
        magazine: 0,
      };
    const i = VA(e.type);
    return {
      kind: "btr",
      zoom: this.gunZoom,
      reload:
        !i.belt && (e.gunMagazine ?? tl) >= tl && e.fireCd > i.interval
          ? e.fireCd
          : 0,
      reloadMax: i.reload,
      rounds: e.gunMagazine ?? tl,
      magazine: tl,
    };
  }
  speedMul(e) {
    return V$(e.type, e.armor) * Xt.vehicleSpeed(e.type);
  }
  practice(e, t, i) {
    const s = $d(e.type),
      o = Math.max(Math.abs(e.speed), e.vel.length()) > 1;
    i && o && (Xt.add(s, t), Xt.stat("driveSeconds", t));
    const a = (l, c) =>
        c > l + 0.02
          ? Math.min(6, Math.max(0.15, (c - Math.max(0, l)) * 2))
          : 0,
      r = a(this.fireCdBefore, e.fireCd) + a(this.fireCd2Before, e.fireCd2);
    r > 0 && Xt.vehicleShot(e.type, r);
  }
  driveTank(e, t, i, s) {
    const o = 0.0022 / this.gunZoom;
    (s && (this.camYaw -= i.mdx * o),
      s && (this.camPitch = Ne(this.camPitch - i.mdy * o, -0.55, 1.25)));
    const a = s
        ? (i.action("forward") ? 1 : 0) - (i.action("back") ? 1 : 0)
        : 0,
      r = s ? (i.action("left") ? 1 : 0) - (i.action("right") ? 1 : 0) : 0,
      l = this.surfaceTraction(),
      c = Ne(Math.abs(e.speed) / 2.5, 0.5, 1) * l,
      h = e.yaw;
    e.yaw += r * t * 1.3 * c * (e.speed < -0.15 ? -1 : 1);
    const d = a * (a > 0 ? 5.8 : 3.1) * $v * this.speedMul(e),
      u = (a === 0 ? 3.2 : 4.4) * l;
    ((e.speed += Ne(d - e.speed, -u * t, u * t)),
      r !== 0 &&
        (e.speed *= Math.max(
          0,
          1 - 0.22 * l * Math.abs(r) * Math.abs(e.speed) * t,
        )),
      this.moveGroundHull(e, t, h));
    const f = this.deckUnder(e);
    (f && ((e.pos.x += f.vx * t), (e.pos.z += f.vz * t)),
      s && i.clickR && !i.aimTap && this.hooks.openMap("himars"),
      e.tankAim &&
        (e.pos.distanceTo(e.tankAim.origin) > 0.4 || a !== 0 || r !== 0) &&
        delete e.tankAim,
      e.tankAim &&
        !e.tankAim.shot &&
        ((e.tankAim.remaining -= t),
        e.tankAim.remaining <= 0 && delete e.tankAim));
    const p = e.tankAim,
      m = p == null ? void 0 : p.shot,
      y = Math.atan2(
        Math.sin(((m == null ? void 0 : m.yaw) ?? this.camYaw) - e.yaw),
        Math.cos(((m == null ? void 0 : m.yaw) ?? this.camYaw) - e.yaw),
      ),
      g = m ? null : this.tankGunSolution(e);
    if (e.turret) {
      let b = ((g == null ? void 0 : g.yaw) ?? y) - e.turret.rotation.y;
      b = Math.atan2(Math.sin(b), Math.cos(b));
      const S = Math.min(2.4, Math.abs(b) * 9 + 0.12) * t;
      ((e.turret.rotation.y += Ne(b, -S, S)), (e.aux1 = e.turret.rotation.y));
      const x =
          ((m == null ? void 0 : m.pitch) ??
            Ne((g == null ? void 0 : g.pitch) ?? this.camPitch, QH, JH)) -
          e.aux2,
        T = Math.min(1.3, Math.abs(x) * 9 + 0.06) * t;
      ((e.aux2 += Ne(x, -T, T)), e.barrel && (e.barrel.rotation.x = e.aux2));
    }
    if (p && m) {
      p.remaining -= t;
      const b = Math.atan2(Math.sin(y - e.aux1), Math.cos(y - e.aux1));
      p.remaining <= 0 &&
        Math.abs(b) < 0.035 &&
        Math.abs(e.aux2 - m.pitch) < 0.025 &&
        ((e.fireCd = 2.2),
        this.projectiles.spawn(
          pt.SHELL,
          e.pos.clone().add(new k(0, 1.75, 0)),
          new k(m.vx, m.vy, m.vz),
          !0,
          { guide: p.target, ignoreVehicle: e.id, serverDriven: !0 },
        ),
        delete e.tankAim);
    }
    if (s && i.mouseL && e.fireCd <= 0 && !e.tankAim) {
      e.fireCd = 2.2;
      const b = new k(),
        S = new k();
      (this.tankBore(e, b, S),
        this.projectiles.spawn(pt.SHELL, b, S.clone().multiplyScalar(em), !0),
        (e.cannonRecoil = 0.45),
        this.kickHull(e, e.aux1, 0.55),
        this.sfx.shot("tank"),
        this.effects.flash(b, 5, 0.15),
        this.effects.muzzleSmoke(b, S),
        this.effects.addTrauma(0.35));
    }
  }
  drivePlane(e, t, i, s) {
    var T;
    const o = e.quat.clone(),
      a = e.pos.clone(),
      r = e.grounded;
    (s && i.action("forward") && (e.throttle = Ne(e.throttle + t * 0.5, 0, 1)),
      s && i.action("back") && (e.throttle = Ne(e.throttle - t * 0.7, 0, 1)));
    let l = e.grounded
      ? gA(e.type, e.pos, e.quat, (A, _, C) => this.world.groundAt(A, _, C))
      : this.world.groundAt(e.pos.x, e.pos.z, e.pos.y + 0.3);
    const c = this.deckInfo(e.pos);
    c && (l = Math.max(l === -1 / 0 ? -1 / 0 : l, c.y));
    const h =
      s &&
      (e.type === P.FIGHTER_JET ? i.keys.has("KeyZ") : i.mouseR) &&
      !e.grounded;
    (h &&
      !this.planeFreeLook &&
      ((this.camYaw = e.yaw),
      (this.camPitch = this.camMode === 0 ? e.pitch : 0.35)),
      (this.planeFreeLook = h),
      h &&
        ((this.camYaw -= i.mdx * 0.0022),
        (this.camPitch = Ne(this.camPitch - i.mdy * 0.0022, -1.55, 1.55))));
    const d = e.type === P.FIGHTER_JET,
      u =
        s && !h
          ? Ne(
              -i.mdx * 0.045 * z.aircraftSensitivity +
                (i.action("left") ? 1 : 0) -
                (i.action("right") ? 1 : 0),
              -1,
              1,
            )
          : 0,
      f = d ? 0.048 : 0.04,
      p =
        s && !h
          ? Ne(
              -i.mdy * f * z.aircraftSensitivity +
                (i.action("crouch") ? 1 : 0) -
                (i.action("sprint") ? 1 : 0),
              -1,
              1,
            )
          : 0,
      m = s ? (i.keys.has("KeyQ") ? 1 : 0) - (i.keys.has("KeyE") ? 1 : 0) : 0;
    if (e.grounded) {
      e.yaw += u * t * Ne(e.vel.length() / 5, 0, 1);
      const A = new hi().setFromQuaternion(e.quat, "YXZ");
      e.quat.setFromEuler(new hi(Ne(A.x, 0, 0.35), e.yaw, 0, "YXZ"));
    }
    (w$(
      e,
      e.type,
      {
        pitch: p,
        roll: e.grounded ? 0 : u,
        yaw: m,
        brake: s && i.action("back"),
        speedMul: this.speedMul(e),
      },
      t,
      this.airDensity(),
      this.gravity(9.81),
    ),
      !e.grounded &&
        e.vel.y >= 0 &&
        Number.isFinite(l) &&
        e.pos.y < l + Mm(e.type, e.quat) &&
        new k(0, 1, 0).applyQuaternion(o).y > 0.85 &&
        (e.quat.copy(o), e.angularVelocity && (e.angularVelocity.x = 0)));
    const y = new k(0, 0, -1).applyQuaternion(e.quat),
      g = new k(0, 1, 0).applyQuaternion(e.quat),
      b = new hi().setFromQuaternion(e.quat, "YXZ");
    ((e.pitch = b.x), (e.roll = b.z), (e.yaw = b.y));
    const S = e.vel.dot(y);
    if (((e.speed = S), e.grounded)) {
      const A = y.clone();
      ((A.y = 0), A.lengthSq() > 0.001 && A.normalize());
      let _ = e.vel.x * A.x + e.vel.z * A.z;
      (s &&
        i.action("forward") &&
        _ < 6 &&
        (_ += 4 * this.surfaceTraction() * t),
        s &&
          i.action("back") &&
          e.throttle < 0.05 &&
          (_ = Math.max(_ - 4 * this.surfaceTraction() * t, -3.5)),
        (e.vel.x = A.x * _),
        (e.vel.z = A.z * _),
        e.vel.y < 0 && (e.vel.y = 0));
    }
    const M = Mm(e.type, e.quat);
    e.grounded && Number.isFinite(l) && (e.pos.y = Math.max(e.pos.y, l + M));
    const x = e.pos.clone();
    if (
      (e.pos.addScaledVector(e.vel, t),
      (l = r
        ? gA(e.type, e.pos, e.quat, (A, _) =>
            this.world.groundAt(A, _, a.y + 0.3),
          )
        : this.world.groundAt(e.pos.x, e.pos.z, x.y + 0.4)),
      c && (l = Math.max(l, c.y)),
      l !== -1 / 0 && e.pos.y <= l + M && e.vel.y <= 0.01)
    ) {
      const A = -e.vel.y;
      (e.grounded ||
        ((A > 7 || g.y < 0.88) &&
          (this.hooks.sendHit(e.id, Math.round(20 + A * 5 + Math.abs(S) * 1.2)),
          this.effects.addTrauma(0.7),
          this.sfx.explosion(0),
          e.vel.multiplyScalar(0.25),
          (e.throttle = 0)),
        (e.grounded = !0),
        (e.yaw = Math.atan2(-y.x, -y.z)),
        (e.pitch = 0),
        (e.roll = 0),
        e.quat.setFromEuler(new hi(0, e.yaw, 0))),
        (e.pos.y = l + Mm(e.type, e.quat)),
        (e.vel.y = 0));
    } else
      e.grounded &&
        (l === -1 / 0 || e.pos.y > l + M + 0.15) &&
        (e.grounded = !1);
    if (
      (e.grounded &&
        c &&
        Math.abs(e.pos.y - c.y) < 0.4 &&
        ((e.pos.x += c.vx * t), (e.pos.z += c.vz * t)),
      $h(e.type, a, e.pos, o, e.quat, (A, _, C) =>
        this.world.isSolidAt(A, _, C),
      ) &&
        !(
          r &&
          f$(e.type, a, e.pos, o, e.quat, (A, _, C) =>
            this.world.isSolidAt(A, _, C),
          )
        ))
    ) {
      const A = e.vel.length();
      (A > 7 &&
        (this.hooks.sendHit(e.id, Math.round(15 + (A - 7) * 2)),
        this.effects.addTrauma(0.6)),
        e.pos.copy(a),
        e.quat.copy(o),
        e.vel.set(0, 0, 0),
        (T = e.angularVelocity) == null || T.set(0, 0, 0),
        (e.throttle = 0),
        mA(e.type, e.pos, e.quat, (C, R, L) => this.world.isSolidAt(C, R, L)));
      const _ = new hi().setFromQuaternion(e.quat, "YXZ");
      ((e.pitch = _.x),
        (e.yaw = _.y),
        (e.roll = _.z),
        (e.grounded = r),
        (e.speed = 0),
        y.set(0, 0, -1).applyQuaternion(e.quat));
    }
    if (s && i.mouseL && e.fireCd <= 0) {
      ((e.fireCd += R5[e.type].gunInterval),
        (e.mgSide = -e.mgSide),
        new k(1, 0, 0).applyQuaternion(e.quat));
      const A = e.pos
          .clone()
          .add(
            new k(e.mgSide * (d ? 0.68 : 1.5), d ? 1.7 : 1.1, d ? -4.6 : -0.5)
              .multiply(ms(e.type))
              .applyQuaternion(e.quat),
          ),
        _ =
          !d && this.aimValid
            ? this.aimPos
                .clone()
                .addScaledVector(this.aimDir, 260)
                .sub(A)
                .normalize()
            : y.clone();
      (d && sL(e, e.mgSide, A, _),
        (_.x += (Math.random() - 0.5) * 0.02),
        (_.y += (Math.random() - 0.5) * 0.02),
        (_.z += (Math.random() - 0.5) * 0.02),
        _.normalize(),
        this.hooks.mgFire(A, _));
    }
    if (!d && s && i.action("jump") && e.fireCd2 <= 0 && !e.grounded) {
      e.fireCd2 += R5[e.type].secondaryInterval;
      const A = e.pos
        .clone()
        .add(new k(0, 0.3, 0).multiply(ms(e.type)).applyQuaternion(e.quat));
      this.projectiles.spawn(
        pt.BOMB,
        A,
        e.vel.clone().multiplyScalar(0.92),
        !0,
      );
    }
    if (d && s && i.mouseR && e.fireCd2 <= 0) {
      ((e.fireCd2 += R5[e.type].secondaryInterval),
        (e.rocketSide = -(e.rocketSide ?? 1)));
      const A = new k(),
        _ = new k();
      (oL(e, e.rocketSide, A, _),
        this.projectiles.spawn(pt.ROCKET, A, _, !0, {
          ignoreVehicle: e.id,
          serverDriven: !0,
        }),
        this.sfx.shot("rpg", 0),
        this.effects.flash(A, 3, 0.1));
    }
    ((e.aux1 = e.throttle), this.spinProps(e, t, e.speed));
  }
  driveDrone(e, t, i, s) {
    ((this.camYaw -= i.mdx * 0.0022),
      (this.camPitch = Ne(this.camPitch - i.mdy * 0.0022, -1.3, 1.3)),
      (e.yaw = this.camYaw));
    const o = Math.cos(this.camYaw),
      a = Math.sin(this.camYaw),
      r = Math.cos(this.camPitch),
      l = Math.sin(this.camPitch),
      c = new k(-a * r, l, -o * r),
      h = new k(o, 0, -a),
      d = new k();
    s &&
      (i.action("forward") && d.add(c),
      i.action("back") && d.sub(c),
      i.action("right") && d.add(h),
      i.action("left") && d.sub(h),
      i.action("jump") && (d.y += 1),
      (i.action("sprint") || i.action("crouch")) && (d.y -= 1));
    const u = d.lengthSq() > 0,
      f = this.speedMul(e);
    (u && d.normalize().multiplyScalar(45 * f),
      e.vel.addScaledVector(d, t),
      this.currentPlanet === Si.MOON && (e.vel.y -= this.gravity(9.81) * t));
    const p = this.airDensity();
    (e.vel.multiplyScalar(
      Math.max(0, 1 - (u ? 2.4 * p + 0.35 : 5 * p + 0.5) * t),
    ),
      e.vel.length() > 30 * f && e.vel.setLength(30 * f));
    const m = e.vel.length(),
      y = e.pos.clone(),
      g = e.pos.clone().addScaledVector(e.vel, t);
    if (s && m > 0.5) {
      const M = g.clone().sub(y),
        x = M.length() + 0.45,
        T = this.droneContact(e, y, M.normalize(), x);
      if (T) {
        (e.pos.copy(y).addScaledVector(M, Math.max(0, T.dist - 0.2)),
          this.detonateDrone());
        return;
      }
    }
    if (this.world.isSolidAt(g.x, g.y + 0.15, g.z)) {
      if (m > 11) {
        this.detonateDrone();
        return;
      }
      (e.vel.multiplyScalar(-0.1), e.pos.copy(y));
    } else e.pos.copy(g);
    e.pos.y < 0.5 && (e.pos.y = 0.5);
    const b = Ne(-e.vel.dot(c) * 0.022, -0.45, 0.45),
      S = Ne(-e.vel.dot(h) * 0.022, -0.45, 0.45);
    ((e.pitch = b),
      (e.roll = S),
      e.quat.setFromEuler(new hi(b, e.yaw, S, "YXZ")),
      this.spinProps(e, t, m),
      s && (i.clickL || i.actionPressed("detonate")) && this.detonateDrone());
  }
  droneContact(e, t, i, s) {
    var r;
    let o = null;
    const a = new k(i.z, 0, -i.x);
    a.lengthSq() < 1e-6 ? a.set(1, 0, 0) : a.normalize();
    for (const l of [0, 0.3, -0.3]) {
      const c = t.clone().addScaledVector(a, l),
        h = this.rayHit(c, i, s);
      !h ||
        h.id === e.id ||
        (((r = this.vehicles.get(h.id)) == null
          ? void 0
          : r.hpBar.userData.side) !== "ally" &&
          (!o || h.dist < o.dist) &&
          (o = { id: h.id, dist: h.dist }));
    }
    return o;
  }
  driveHelicopter(e, t, i, s) {
    ((this.camYaw -= i.mdx * 0.0022),
      (this.camPitch = Ne(this.camPitch - i.mdy * 0.0022, -Math.PI / 2, 1.25)),
      (e.aux1 = this.camYaw),
      (e.aux2 = this.camPitch));
    const o = (e.rotorPower ?? 0) >= 1,
      a = Math.atan2(
        Math.sin(this.camYaw - e.yaw),
        Math.cos(this.camYaw - e.yaw),
      );
    e.yaw += a * Math.min(1, 3 * t) * (o ? 1 : 0);
    const r = Math.sin(e.yaw),
      l = Math.cos(e.yaw),
      c = new k(-r, 0, -l),
      h = new k(l, 0, -r),
      d = new k();
    (s &&
      o &&
      (i.action("forward") && d.add(c),
      i.action("back") && d.sub(c),
      i.action("right") && d.add(h),
      i.action("left") && d.sub(h),
      i.action("jump") && (d.y += 1.1),
      i.action("crouch") && (d.y -= 1.1)),
      o || (e.vel.y -= this.gravity(9.81) * t));
    const u = this.heliCargo.has(e.id),
      f = this.speedMul(e);
    (d.lengthSq() > 0 && d.normalize().multiplyScalar((u ? 13 : 24) * f),
      e.vel.addScaledVector(d, t),
      this.currentPlanet === Si.MOON && (e.vel.y -= this.gravity(9.81) * t));
    const p = this.airDensity();
    ((e.vel.x *= Math.max(0, 1 - (1.4 * p + 0.18) * t)),
      (e.vel.z *= Math.max(0, 1 - (1.4 * p + 0.18) * t)),
      (e.vel.y *= Math.max(0, 1 - (2.4 * p + 0.3) * t)));
    const m = Math.hypot(e.vel.x, e.vel.z),
      y = (u ? 9.2 : 20.2) * f;
    (m > y && ((e.vel.x *= y / m), (e.vel.z *= y / m)),
      (e.vel.y = Ne(e.vel.y, u ? -8 : -14, u ? 8 : 14)));
    const g = e.pos.clone(),
      b = e.pos.clone().addScaledVector(e.vel, t);
    if (
      $h(e.type, g, b, e.quat, e.quat, (A, _, C) =>
        this.world.isSolidAt(A, _, C),
      )
    ) {
      const A = e.vel.length();
      (A > 5 &&
        (this.hooks.sendHit(e.id, Math.round((A - 4) * 8)),
        this.effects.addTrauma(Math.min(0.9, A * 0.05)),
        this.sfx.explosion(0)),
        e.vel.multiplyScalar(-0.12),
        e.pos.copy(g));
    } else e.pos.copy(b);
    const M = Math.max(
      this.world.groundAt(e.pos.x, e.pos.z, e.pos.y + 1),
      this.deckYAt(e.pos.x, e.pos.y + 0.3, e.pos.z),
    );
    if (
      (M !== -1 / 0 &&
        e.pos.y < M + 0.05 &&
        ((e.pos.y = M + 0.05), e.vel.y < 0 && (e.vel.y = 0)),
      (e.grounded = M !== -1 / 0 && e.pos.y <= M + 0.2),
      e.grounded)
    ) {
      const A = this.deckUnder(e);
      A && ((e.pos.x += A.vx * t), (e.pos.z += A.vz * t));
    }
    const x = Ne(-e.vel.dot(c) * 0.02, -0.35, 0.35),
      T = Ne(-e.vel.dot(h) * 0.02, -0.35, 0.35);
    if (
      ((e.pitch = Qi(e.pitch, x, Math.min(1, 6 * t))),
      (e.roll = Qi(e.roll, T, Math.min(1, 6 * t))),
      e.quat.setFromEuler(new hi(e.pitch, e.yaw, e.roll, "YXZ")),
      this.spinProps(e, t, 24),
      s && i.mouseL && e.fireCd <= 0)
    ) {
      ((e.fireCd = 0.08), (e.mgSide = -e.mgSide));
      const A = new k(1, 0, 0).applyQuaternion(e.quat),
        _ = e.pos
          .clone()
          .add(new k(0, 1, 0))
          .addScaledVector(A, e.mgSide * 0.4)
          .addScaledVector(c, 1.8),
        C = this.aimValid
          ? this.aimPos
              .clone()
              .addScaledVector(this.aimDir, 240)
              .sub(_)
              .normalize()
          : c.clone();
      ((C.x += (Math.random() - 0.5) * 0.02),
        (C.y += (Math.random() - 0.5) * 0.02),
        (C.z += (Math.random() - 0.5) * 0.02),
        C.normalize(),
        this.hooks.mgFire(_, C));
    }
    if (s && i.clickR && e.fireCd2 <= 0) {
      e.fireCd2 = 1.3;
      const A = new k(1, 0, 0).applyQuaternion(e.quat),
        _ = e.pos
          .clone()
          .add(new k(0, 1.2, 0))
          .addScaledVector(A, e.mgSide * 1.15)
          .addScaledVector(c, 0.5),
        C = this.aimValid
          ? this.aimPos
              .clone()
              .addScaledVector(this.aimDir, 240)
              .sub(_)
              .normalize()
          : c.clone();
      (this.hooks.launchRocket(_, C), (e.mgSide = -e.mgSide));
    }
  }
  driveRocket(e, t, i, s) {
    ((this.camYaw -= i.mdx * 0.0022),
      (this.camPitch = Ne(this.camPitch - i.mdy * 0.0022, -0.55, 1.25)));
    const o = s && (i.action("forward") || i.action("jump")),
      a = s && (i.action("back") || i.action("crouch"));
    e.throttle = Ne(e.throttle + (o ? 0.42 : a ? -0.56 : -0.035) * t, 0, 1);
    const r = 9.81 * this.gravityScale,
      l = r / 31.5,
      c = this.world.groundAt(e.pos.x, e.pos.z, 126),
      h = c === -1 / 0 ? 1 / 0 : Math.max(0, e.pos.y - c);
    e.grounded && o && (e.throttle = Math.max(e.throttle, l + 0.16));
    const d = !o && e.vel.y < 0 && h < 80;
    if (d) {
      const M = h > 42 ? -7 : h > 16 ? -4.2 : h > 5 ? -2.2 : -0.8,
        x = Math.max(0, M - e.vel.y) * 0.048;
      e.throttle = Math.max(e.throttle, Ne(l + x, 0, 0.92));
    }
    const u = s ? (i.action("left") ? 1 : 0) - (i.action("right") ? 1 : 0) : 0;
    e.yaw += u * t * (0.35 + e.throttle * 0.35);
    const f = e.grounded || (d && h < 30),
      p = s && !f ? Ne(-i.mdy * 0.0035, -0.23, 0.23) : 0,
      m = s && !f ? Ne(i.mdx * 0.0035, -0.23, 0.23) : 0;
    ((e.pitch = Qi(e.pitch, p, 1 - Math.exp(-(f ? 6.5 : 3.2) * t))),
      (e.roll = Qi(e.roll, m, 1 - Math.exp(-(f ? 6.5 : 3.2) * t))),
      e.quat.setFromEuler(new hi(e.pitch, e.yaw, e.roll, "YXZ")));
    const y = new k(0, 1, 0).applyQuaternion(e.quat),
      g = 31.5 * e.throttle;
    (e.vel.addScaledVector(y, g * t),
      (e.vel.y -= r * t),
      e.vel.multiplyScalar(
        Math.exp(-0.018 * Math.max(this.airDensity(), 0.02) * t),
      ));
    const b = e.vel.length();
    (b > 125 && e.vel.multiplyScalar(125 / b), e.pos.addScaledVector(e.vel, t));
    const S = this.world.groundAt(e.pos.x, e.pos.z, 126);
    if (S !== -1 / 0 && e.pos.y <= S) {
      const M = -e.vel.y;
      ((e.pos.y = S),
        M > 13 || Math.abs(e.pitch) > 0.18 || Math.abs(e.roll) > 0.18
          ? (this.hooks.sendExplosion(
              e.pos.clone().add(new k(0, 2, 0)),
              10,
              520,
              e.id,
              6,
            ),
            this.hooks.sendHit(e.id, 5e3),
            this.effects.flash(e.pos, 18, 0.55, 16756810))
          : (e.vel.set(0, 0, 0),
            (e.pitch *= 0.25),
            (e.roll *= 0.25),
            (e.throttle = 0),
            (e.grounded = !0)));
    } else e.grounded = !1;
    if (e.throttle > 0.08) {
      const M = e.pos.clone().add(new k(0, 0.15, 0).applyQuaternion(e.quat));
      this.effects.rocketExhaust(M, t);
    }
    (this.remoteView &&
      e.pos.y > 980 &&
      ((e.pos.y = 980),
      (e.vel.y = Math.min(0, e.vel.y)),
      (e.throttle = Math.min(e.throttle, l))),
      (e.speed = e.vel.length()),
      (e.aux1 = e.throttle));
  }
  driveHimars(e, t, i, s) {
    ((this.camYaw -= i.mdx * 0.0022),
      (this.camPitch = Ne(this.camPitch - i.mdy * 0.0022, -0.35, 1.1)),
      s && (i.clickR || i.clickL) && this.hooks.openMap("himars"));
    const o = s
        ? (i.action("forward") ? 1 : 0) - (i.action("back") ? 1 : 0)
        : 0,
      a = s ? (i.action("left") ? 1 : 0) - (i.action("right") ? 1 : 0) : 0,
      r = e.yaw;
    e.yaw +=
      a *
      t *
      0.72 *
      Ne(Math.abs(e.speed) / 2.5 + 0.2, 0.2, 1) *
      (e.speed < -0.2 ? -1 : 1);
    const l = o * (o > 0 ? 7.2 : 4) * $v * this.speedMul(e);
    ((e.speed += Ne(
      l - e.speed,
      -(o === 0 ? 3 : 4.8) * t,
      (o === 0 ? 3 : 4.8) * t,
    )),
      a !== 0 && (e.speed *= Math.max(0, 1 - 0.16 * Math.abs(e.speed) * t)),
      this.moveGroundHull(e, t, r));
    const c = this.deckUnder(e);
    c && ((e.pos.x += c.vx * t), (e.pos.z += c.vz * t));
  }
  driveGround(e, t, i, s, o, a) {
    const r = s
        ? (i.action("forward") ? 1 : 0) - (i.action("back") ? 1 : 0)
        : 0,
      l = s ? (i.action("left") ? 1 : 0) - (i.action("right") ? 1 : 0) : 0,
      c = this.surfaceTraction(),
      h = e.yaw;
    e.yaw +=
      l *
      t *
      0.72 *
      c *
      Ne(Math.abs(e.speed) / 2.5 + 0.2, 0.2, 1) *
      (e.speed < -0.2 ? -1 : 1);
    const d = r * (r > 0 ? o : a) * $v * this.speedMul(e);
    ((e.speed += Ne(
      d - e.speed,
      -(r === 0 ? 3 : 4.8) * c * t,
      (r === 0 ? 3 : 4.8) * c * t,
    )),
      l !== 0 && (e.speed *= Math.max(0, 1 - 0.14 * c * Math.abs(e.speed) * t)),
      this.moveGroundHull(e, t, h));
    const u = this.deckUnder(e);
    u && ((e.pos.x += u.vx * t), (e.pos.z += u.vz * t));
  }
  drivePatriot(e, t, i, s) {
    ((this.camYaw -= i.mdx * 0.0022),
      (this.camPitch = Ne(this.camPitch - i.mdy * 0.0022, -0.35, 1.1)),
      this.driveGround(e, t, i, s, 6, 4),
      this.updatePatriotDefense(e, t));
  }
  fireTurretGun(e, t, i) {
    var c;
    if (!i || !t.mouseL || e.fireCd > 0) return;
    const s = VA(e.type),
      o = e.gunMagazine ?? tl;
    if (
      (s.belt
        ? ((e.gunMagazine = o <= 1 ? tl : o - 1), (e.fireCd = s.interval))
        : ((e.gunMagazine = o - 1),
          (e.fireCd = e.gunMagazine <= 0 ? s.reload : s.interval),
          e.gunMagazine <= 0 && (e.gunMagazine = tl)),
      e.group.position.copy(e.pos),
      e.group.quaternion.copy(e.quat),
      e.group.updateMatrixWorld(!0),
      e.type === P.BTR_TURRET && e.barrel)
    ) {
      this.fireCannon(e, s.spread);
      return;
    }
    const a = e.barrel
        ? e.barrel.localToWorld(new k(0, 0, -1.82))
        : e.pos.clone().add(new k(0, 1.3, 0)),
      r = this.aimValid
        ? (((c = this.world.raycast(this.aimPos, this.aimDir, 180)) == null
            ? void 0
            : c.dist) ?? 180)
        : 180,
      l = this.aimValid
        ? this.aimPos.clone().addScaledVector(this.aimDir, r).sub(a).normalize()
        : new k(
            -Math.sin(this.camYaw) * Math.cos(this.camPitch),
            Math.sin(this.camPitch),
            -Math.cos(this.camYaw) * Math.cos(this.camPitch),
          );
    (s.spread &&
      ((l.x += (Math.random() - 0.5) * s.spread),
      (l.y += (Math.random() - 0.5) * s.spread),
      (l.z += (Math.random() - 0.5) * s.spread),
      l.normalize()),
      this.hooks.mgFire(a, l));
  }
  fireCannon(e, t) {
    const i = e.barrel,
      s = i.position.z;
    ((i.position.z = g6), i.updateMatrixWorld(!0));
    const o = i.localToWorld(new k(0, 0, y6)),
      a = o
        .clone()
        .sub(i.localToWorld(new k(0, 0, 0)))
        .normalize();
    i.position.z = s;
    let r = a;
    if (this.aimValid) {
      const l = this.gunAimTarget(e, Rg(e.type), 110, 8)
        .clone()
        .sub(o)
        .normalize();
      a.angleTo(l) < TK && (r = l);
    }
    if (
      ((r = r.clone()),
      t &&
        ((r.x += (Math.random() - 0.5) * t),
        (r.y += (Math.random() - 0.5) * t),
        (r.z += (Math.random() - 0.5) * t),
        r.normalize()),
      this.hooks.mgFire(o, r),
      this.effects.flash(o, 2.6, 0.07, 16760944),
      (e.gunMagazine ?? 0) % 2 === 0 && this.effects.muzzleSmoke(o, a),
      e.turret && (e.gunMagazine ?? 0) % 2 === 1)
    ) {
      const l = e.turret.localToWorld(new k(0.5, 0.02, -0.25)),
        c = new k(1, 0.35, 0.1).transformDirection(e.turret.matrixWorld);
      this.effects.casing(l, c, [9402940, 7298090], 0.06);
    }
  }
  driveTurret(e, t, i, s) {
    ((this.camYaw -= i.mdx * 0.0022),
      (this.camPitch = Ne(this.camPitch - i.mdy * 0.0022, -0.55, 0.95)),
      s &&
        ((e.aux1 = this.camYaw),
        (e.aux2 = this.camYaw),
        e.vel.set(0, this.camPitch, 0)),
      this.fireTurretGun(e, i, s),
      e.turret && (e.turret.rotation.y = e.aux2),
      e.barrel && (e.barrel.rotation.x = e.vel.y),
      e.props[0] &&
        ((e.props[0].rotation.y = e.aux1), (e.props[0].visible = !0)),
      (e.speed = 0));
    const o = this.deckUnder(e),
      a = Math.max(
        this.world.groundAt(e.pos.x, e.pos.z, e.pos.y + 0.5),
        o ? o.y : -1 / 0,
      );
    (a !== -1 / 0 && (e.pos.y = a),
      o && ((e.pos.x += o.vx * t), (e.pos.z += o.vz * t)),
      e.quat.setFromEuler(new hi(0, 0, 0, "YXZ")));
  }
  driveBtrTurret(e, t, i, s) {
    const o = 0.0022 / this.gunZoom;
    (s && (this.camYaw -= i.mdx * o),
      s && (this.camPitch = Ne(this.camPitch - i.mdy * o, -0.45, 0.9)));
    const a = e.yaw;
    if (
      (this.driveGround(e, t, i, s, 8.2, 4.5),
      this.camMode === 0 && (this.camYaw += e.yaw - a),
      e.turret)
    ) {
      const l = s ? this.tankGunSolution(e, !0) : null,
        c =
          (l == null ? void 0 : l.yaw) ??
          Math.atan2(
            Math.sin(this.camYaw - e.yaw),
            Math.cos(this.camYaw - e.yaw),
          ),
        h = Math.atan2(
          Math.sin(c - e.turret.rotation.y),
          Math.cos(c - e.turret.rotation.y),
        ),
        d = this.camMode === 0 ? 6.5 : 4.4;
      ((e.turret.rotation.y += Ne(h * Math.min(1, t * 14), -d * t, d * t)),
        (e.aux1 = e.turret.rotation.y));
      const u = Ne((l == null ? void 0 : l.pitch) ?? this.camPitch, EK, xK);
      ((e.aux2 += Ne((u - e.aux2) * Math.min(1, t * 16), -3.2 * t, 3.2 * t)),
        e.barrel && (e.barrel.rotation.x = e.aux2));
    }
    ((e.gunKick = Math.max(0, (e.gunKick ?? 0) - t * 9)),
      e.barrel && (e.barrel.position.z = g6 + 0.085 * (e.gunKick ?? 0)));
    const r = e.gunMagazine ?? tl;
    (this.fireTurretGun(e, i, s),
      (e.gunMagazine ?? tl) !== r &&
        ((e.gunKick = 1),
        this.effects.addTrauma(this.camMode === 0 ? 0.05 : 0.024),
        this.camMode === 0 &&
          (this.camPitch = Ne(
            this.camPitch + 0.0035 / this.gunZoom,
            -0.45,
            0.9,
          ))));
  }
  updatePatriotDefense(e, t) {
    e.fireCd = Math.max(0, e.fireCd - t);
    const i = this.acquireTarget(e);
    if (e.turret) {
      const s = i
          ? Math.atan2(-(i.pos.x - e.pos.x), -(i.pos.z - e.pos.z)) - e.yaw
          : 0,
        o = Math.atan2(
          Math.sin(s - e.turret.rotation.y),
          Math.cos(s - e.turret.rotation.y),
        );
      ((e.turret.rotation.y += Ne(o, -2.5 * t, 2.5 * t)),
        (e.aux1 = e.turret.rotation.y));
    }
    i && e.fireCd <= 0 && (this.fireInterceptor(e, i), (e.fireCd = qH));
  }
  acquireTarget(e) {
    const t = VH;
    let i = null,
      s = t * t;
    const o = (a, r, l, c, h) => {
      if (l === e.owner || this.hooks.isFriendly(l) || c.y - e.pos.y < 5)
        return;
      const d = c.distanceToSquared(e.pos);
      d < s &&
        ((s = d), (i = { kind: a, id: r, pos: c.clone(), vel: h.clone() }));
    };
    for (const a of this.projectiles.activeProjectiles())
      o(1, a.id, a.owner, a.pos, a.vel);
    for (const a of this.vehicles.values())
      a !== e &&
        ((!As(a.type) && a.type !== P.HELI && a.type !== P.DRONE) ||
          (a.ownerName &&
            (a.ownerName === e.ownerName ||
              this.hooks.isFriendlyName(a.ownerName))) ||
          o(2, a.id, a.owner, a.pos, a.vel));
    return i;
  }
  fireInterceptor(e, t) {
    const i = e.pos.clone().add(new k(0, 2.4, 0)),
      s = $H,
      o = Sq(i, t.pos, t.vel, s),
      a = new k(o.x, o.y, o.z),
      l = a
        .clone()
        .sub(i)
        .normalize()
        .multiplyScalar(s * 0.55)
        .add(new k(0, 22, 0));
    (this.projectiles.spawn(pt.MISSILE, i, l, !0, {
      guide: a,
      speed: s,
      serverDriven: !0,
      cruiseY: 0,
      tKind: t.kind,
      tId: t.id,
      ignoreVehicle: e.id,
    }),
      this.sfx.shot("rpg"),
      this.effects.flash(i, 3, 0.12));
  }
  cameraPose(e, t = 1 / 60) {
    (this.cameraHiddenHull &&
      ((this.cameraHiddenHull.visible = !0), (this.cameraHiddenHull = null)),
      (this.closeCamera = !1));
    const i = this.mine;
    if (!i) return !1;
    const s = new k(0, 1, 0);
    if (i.fpvHide.length) {
      const f =
        this.camMode === 0 &&
        (this.mineSeat === 0 ||
          !(i.type === P.HELI || As(i.type) || this.mySeatGun()));
      for (const p of i.fpvHide) ol(p, f);
    }
    if (
      (i.type === P.TANK &&
        i.barrel &&
        ol(i.barrel, this.mineSeat === 0 && this.gunZoom > 2.2),
      this.mineSeat === 0 &&
        i.type === P.TANK &&
        i.barrel &&
        this.gunZoom > 1.05)
    ) {
      for (const f of i.fpvHide) ol(f, !0);
      return (
        i.group.updateMatrixWorld(!0),
        e.pos.copy(i.barrel.localToWorld(new k(0, 0.3, -0.25))),
        e.quat.setFromEuler(new hi(this.camPitch, this.camYaw, 0, "YXZ")),
        (this.smoothCamInit = !1),
        this.storeAim(e),
        !0
      );
    }
    if (
      this.camMode === 0 ||
      (this.mineSeat === 0 && i.type === P.BTR_TURRET && this.gunZoom > 1.05)
    ) {
      const f =
        this.mineSeat > 0 && this.mySeatGun()
          ? this.seatGunsOf(i).get(this.mineSeat)
          : void 0;
      if (f)
        (i.group.updateMatrixWorld(!0),
          f.yaw.localToWorld(e.pos.set(0, f.pitch.position.y + 0.2, 0.5)),
          e.quat.setFromEuler(new hi(this.camPitch, this.camYaw, 0, "YXZ")));
      else if (this.mineSeat > 0)
        (this.seatPos(i, this.mineSeat, e.pos),
          e.pos.add(
            new k(0, i.type === P.HELI ? 1.55 : 0.85, 0).applyQuaternion(
              i.quat,
            ),
          ),
          e.quat.setFromEuler(new hi(this.camPitch, this.camYaw, 0, "YXZ")));
      else if (As(i.type)) {
        const p = (
          i.type === P.FIGHTER_JET
            ? new k(0, 2.32, -2.75)
            : new k(0, 1.62, -0.35).multiply(ms(i.type))
        ).applyQuaternion(i.quat);
        (e.pos.copy(i.pos).add(p),
          this.planeFreeLook
            ? e.quat.setFromEuler(new hi(this.camPitch, this.camYaw, 0, "YXZ"))
            : e.quat.copy(i.quat));
      } else if (i.type === P.BTR_TURRET && i.turret)
        (i.group.updateMatrixWorld(!0),
          e.pos.copy(i.turret.localToWorld(new k(-0.38, 0.3, -0.34))),
          e.quat.setFromEuler(new hi(this.camPitch, this.camYaw, 0, "YXZ")),
          i.barrel && ol(i.barrel, this.gunZoom > 3));
      else if (i.type === P.HIMARS || i.type === P.PATRIOT)
        (e.pos
          .copy(i.pos)
          .add(
            new k(-0.45, 2.05, -1.85)
              .multiply(ms(i.type))
              .applyQuaternion(i.quat),
          ),
          e.quat.setFromEuler(new hi(this.camPitch, this.camYaw, 0, "YXZ")));
      else if (i.type === P.TURRET && i.barrel)
        (i.group.updateMatrixWorld(!0),
          e.pos.copy(i.barrel.localToWorld(new k(0, 0.72, 0.75))),
          e.quat.setFromEuler(new hi(this.camPitch, this.camYaw, 0, "YXZ")));
      else if (i.type === P.DRONE) {
        const p = new k(0, 0.28, -0.1).applyQuaternion(i.quat);
        (e.pos.copy(i.pos).add(p),
          e.quat.setFromEuler(
            new hi(this.camPitch, this.camYaw, i.roll * 0.6, "YXZ"),
          ));
      } else if (i.type === P.HELI) {
        const p = new k(0, 1.55, -1.75)
          .multiply(ms(i.type))
          .applyQuaternion(i.quat);
        (e.pos.copy(i.pos).add(p),
          e.quat.setFromEuler(
            new hi(this.camPitch, this.camYaw, i.roll * 0.5, "YXZ"),
          ));
      } else {
        const p = {
          0: 1.92,
          3: 2.6,
          4: 1.9,
          5: 8.2,
          7: 2.2,
          8: 2.2,
          9: 1.5,
          11: 1.15,
          12: 8.15,
          13: 1.65,
        };
        (e.pos
          .copy(i.pos)
          .add(
            new k(0, p[i.type] ?? 2.15, -0.6)
              .multiply(ms(i.type))
              .applyQuaternion(i.quat),
          ),
          e.quat.setFromEuler(new hi(this.camPitch, this.camYaw, 0, "YXZ")));
      }
      return ((this.smoothCamInit = !1), this.storeAim(e), !0);
    }
    let o, a;
    if (!As(i.type) && i.type !== P.DRONE) {
      const f = {
          0: -9,
          3: -13,
          4: -11,
          5: -38,
          6: -11,
          7: -12,
          8: -12,
          9: -7,
          10: -9,
          11: -23,
          12: -22,
          13: -5,
        },
        p = {
          0: 2,
          3: 2.6,
          4: 2,
          5: 7,
          6: 2.4,
          7: 2.6,
          8: 2.6,
          9: 1.6,
          10: 2.55,
          11: 0.8,
          12: 6.2,
          13: 1.2,
        };
      o = i.pos.clone().add(new k(0, (p[i.type] ?? 2) * ms(i.type).y, 0));
      const m = Math.cos(this.camPitch),
        y = Math.sin(this.camPitch),
        g = new k(-Math.sin(this.camYaw) * m, y, -Math.cos(this.camYaw) * m),
        b = i.type === P.SUBMARINE ? 2.2 + y * 2.5 : 1 + y * 4;
      a = o
        .clone()
        .addScaledVector(g, (f[i.type] ?? -9) * ms(i.type).z)
        .add(new k(0, b, 0));
    } else if (As(i.type))
      if (this.planeFreeLook || this.mineSeat > 0) {
        o = i.pos.clone().add(new k(0, 1.2, 0));
        const f = Math.cos(this.camPitch),
          p = Math.sin(this.camPitch),
          m = new k(-Math.sin(this.camYaw) * f, p, -Math.cos(this.camYaw) * f);
        a = o
          .clone()
          .addScaledVector(m, -15)
          .add(new k(0, 1 + p * 5, 0));
      } else {
        const f = new k(0, 0, -1).applyQuaternion(i.quat);
        (s.set(0, 1, 0).applyQuaternion(i.quat),
          (o = i.pos.clone().addScaledVector(s, 1.8).addScaledVector(f, 7)),
          (a = i.pos
            .clone()
            .addScaledVector(f, i.type === P.FIGHTER_JET ? -23 : -19)
            .addScaledVector(s, 5.5)));
      }
    else {
      const f = Math.cos(this.camPitch * 0.5),
        p = new k(
          -Math.sin(this.camYaw) * f,
          Math.sin(this.camPitch * 0.5),
          -Math.cos(this.camYaw) * f,
        );
      ((o = i.pos.clone().add(new k(0, 0.4, 0))),
        (a = o
          .clone()
          .addScaledVector(p, -4.5)
          .add(new k(0, 1, 0))));
    }
    const r = a.clone().sub(o),
      l = r.length(),
      c = this.world.raycast(o, r.clone().normalize(), l);
    (c &&
      (a = o
        .clone()
        .addScaledVector(r.normalize(), Math.max(0.5, c.dist - 0.4))),
      this.smoothCamInit ||
        (this.smoothCam.copy(a),
        this.cameraCenter.copy(o),
        (this.smoothCamInit = !0)),
      this.smoothCam.add(o.clone().sub(this.cameraCenter)),
      this.cameraCenter.copy(o),
      this.smoothCam.lerp(a, 1 - Math.exp(-8 * Math.min(0.1, Math.max(0, t)))));
    const h = this.smoothCam.clone().sub(o),
      d = h.length();
    if (d > 0.001) {
      const f = this.world.raycast(o, h.clone().normalize(), d);
      f &&
        this.smoothCam
          .copy(o)
          .addScaledVector(h.normalize(), Math.max(0.5, f.dist - 0.4));
    }
    (e.pos.copy(this.smoothCam),
      (this.closeCamera = [...this.contactBodies(i)].some((f) =>
        f.box
          .clone()
          .expandByScalar(0.35)
          .containsPoint(
            e.pos.clone().sub(f.pos).applyQuaternion(f.quat.clone().invert()),
          ),
      )),
      this.closeCamera &&
        ((i.group.visible = !1), (this.cameraHiddenHull = i.group)));
    const u = new bt().lookAt(e.pos, o, s);
    return (e.quat.setFromRotationMatrix(u), this.storeAim(e), !0);
  }
  storeAim(e) {
    (this.aimPos.copy(e.pos),
      this.aimDir.set(0, 0, -1).applyQuaternion(e.quat),
      (this.aimValid = !0),
      this.lastCam.copy(e.pos));
  }
  hudInfo(e = !1) {
    const t = this.mine;
    if (!t) return null;
    const i = (s) => gs(z.binds[s], z.language);
    return {
      name:
        Zs(t.type) +
        (this.mineSeat > 0 && !e
          ? ` ${U(this.mySeatGun() ? "vehGunnerSuffix" : "vehPassengerSuffix")}`
          : ""),
      hp: t.hp,
      maxHp: t.maxHp,
      speed:
        this.mineSeat > 0 || t.type === P.DRONE || t.type === P.HELI
          ? t.vel.length()
          : Math.abs(t.speed),
      alt: Math.round(t.pos.y),
      flies:
        As(t.type) ||
        t.type === P.HELI ||
        t.type === P.DRONE ||
        t.type === P.SPACE_ROCKET,
      extra:
        this.mineSeat > 0
          ? this.mySeatGun()
            ? U(e ? "vehSeatGunTouch" : "vehSeatGun")
            : this.canTakeDriver()
              ? z.language === "en"
                ? `${e ? "Steering wheel" : i("driver")} · Take controls`
                : `${e ? "Кнопка руля" : i("driver")} · За руль`
              : this.passengerCanShoot()
                ? U("vehPassengerCanShoot")
                : U("vehPassengerViewOnly")
          : e && As(t.type)
            ? z.language === "en"
              ? "Stick: throttle/roll · drag: pitch/roll · ↑/↓: pitch · gun / ordnance"
              : "Джойстик: тяга/крен · свайп: тангаж/крен · ↑/↓: нос · пулемёт / боеприпас"
            : e
              ? t.fireCd2 > 0
                ? U("vehTouchReload", { sec: Math.ceil(t.fireCd2) })
                : U(
                    [P.HELI, P.DRONE, P.SUBMARINE, P.SPACE_ROCKET].includes(
                      t.type,
                    )
                      ? "vehTouchFly"
                      : "vehTouchDrive",
                  )
              : t.type === P.TANK
                ? U("vehTankInfo")
                : t.type === P.BOAT
                  ? U("vehBoatInfo", {
                      fwd: i("forward"),
                      back: i("back"),
                      left: i("left"),
                      right: i("right"),
                    })
                  : t.type === P.SUBMARINE
                    ? U("vehSubmarineInfo", {
                        fwd: i("forward"),
                        back: i("back"),
                        left: i("left"),
                        right: i("right"),
                        jump: i("jump"),
                        crouch: i("crouch"),
                        reload:
                          t.fireCd2 > 0
                            ? U("vehCarrierReload", {
                                sec: Math.ceil(t.fireCd2),
                              })
                            : "",
                      })
                    : t.type === P.CARRIER
                      ? U("vehCarrierInfo", {
                          fwd: i("forward"),
                          back: i("back"),
                          left: i("left"),
                          right: i("right"),
                          reload:
                            t.fireCd2 > 0
                              ? U("vehCarrierReload", {
                                  sec: Math.ceil(t.fireCd2),
                                })
                              : "",
                        })
                      : t.type === P.HELI
                        ? ((t.rotorPower ?? 0) < 1
                            ? `${z.language === "en" ? "Rotor spin-up" : "Раскрутка винтов"} ${Math.ceil((1 - (t.rotorPower ?? 0)) * 2)}${z.language === "en" ? "s" : "с"} · `
                            : "") +
                          U("vehHeliInfo", {
                            fwd: i("forward"),
                            back: i("back"),
                            left: i("left"),
                            right: i("right"),
                            jump: i("jump"),
                            crouch: i("crouch"),
                            cargo: this.heliCargo.has(t.id)
                              ? U("vehHeliCargoRelease", { use: i("cargo") })
                              : this.cargoCandidate(t)
                                ? U("vehHeliCargoAttach", { use: i("cargo") })
                                : "",
                          })
                        : t.type === P.MORTAR
                          ? U("vehMortarInfo", {
                              seconds: Math.ceil(
                                Math.max(
                                  0,
                                  (t.carrierReadyAt - Date.now()) / 1e3,
                                ),
                              ),
                            })
                          : t.type === P.HIMARS
                            ? U("vehHimarsInfo", {
                                fwd: i("forward"),
                                back: i("back"),
                                left: i("left"),
                                right: i("right"),
                                range: nr,
                              })
                            : t.type === P.PATRIOT
                              ? U("vehPatriotInfo", {
                                  fwd: i("forward"),
                                  back: i("back"),
                                  left: i("left"),
                                  right: i("right"),
                                })
                              : t.type === P.TURRET
                                ? U("vehTurretInfo")
                                : t.type === P.BTR_TURRET
                                  ? U("vehBtrInfo", {
                                      fwd: i("forward"),
                                      back: i("back"),
                                      left: i("left"),
                                      right: i("right"),
                                    })
                                  : t.type === P.SPACE_ROCKET
                                    ? U(
                                        e
                                          ? "vehRocketTouchInfo"
                                          : "vehRocketInfo",
                                        {
                                          jump: i("jump"),
                                          fwd: i("forward"),
                                          crouch: i("crouch"),
                                          back: i("back"),
                                          left: i("left"),
                                          right: i("right"),
                                          throttle: Math.round(
                                            t.throttle * 100,
                                          ),
                                        },
                                      )
                                    : t.type === P.FIGHTER_JET
                                      ? z.language === "en"
                                        ? `${i("forward")}/${i("back")} throttle · ${i("left")}/${i("right")} roll · mouse pitch/roll · Q/E rudder · Alt/Shift pitch · LMB gun · hold RMB missiles · Z free look`
                                        : e
                                          ? "Джойстик: тяга/крен · свайп: тангаж/крен · ↑: нос вверх · пулемёт / ракета"
                                          : "W/S: тяга/тормоз · A/D: крен · мышь: тангаж/крен · Q/E: руль · Alt/Shift: нос вверх/вниз · ЛКМ: пулемёт · удерживать ПКМ: залп ракет · Z: обзор"
                                      : As(t.type)
                                        ? t.grounded
                                          ? U("vehPlaneGroundInfo", {
                                              fwd: i("forward"),
                                              back: i("back"),
                                              left: i("left"),
                                              right: i("right"),
                                            })
                                          : U("vehPlaneAirInfo", {
                                              left: i("left"),
                                              right: i("right"),
                                              jump: i("jump"),
                                            })
                                        : U("vehDroneInfo", {
                                            fwd: i("forward"),
                                            back: i("back"),
                                            left: i("left"),
                                            right: i("right"),
                                            jump: i("jump"),
                                            crouch: i("crouch"),
                                            detonate: i("detonate"),
                                          }),
    };
  }
};
