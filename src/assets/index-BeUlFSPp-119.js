// index-BeUlFSPp 119 — math
// Lines 66131-70289 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Qn {
  constructor(e, t, i, n, o) {
    ((this.scene = e),
      (this.world = t),
      (this.effects = i),
      (this.sfx = n),
      (this.projectiles = o),
      this.scene.add(this.jetGlow),
      (this.tracks = new OQ(e, t)));
  }
  vehicles = new Map();
  allowLod = !1;
  wrecks = [];
  onWreckLanded = null;
  ownWreck = null;
  lastRide = null;
  wreckMat;
  updateWrecks(e) {
    for (let t = this.wrecks.length - 1; t >= 0; t--) {
      const i = this.wrecks[t];
      i.age += e;
      const n = i.landedAt === null ? 0 : i.age - i.landedAt;
      if (i.age > 20 || n > 3.2 || i.planet !== this.currentPlanet) {
        (this.scene.remove(i.group), Lh(i.group));
        for (const r of i.debris ?? [])
          (this.scene.remove(r.mesh), r.mesh.geometry.dispose());
        this.wrecks.splice(t, 1);
        continue;
      }
      const o = Math.min(e, 0.05),
        a = i.group.position;
      if (i.debris)
        for (const r of i.debris)
          ((r.vel.y -= 9.81 * o),
            r.vel.multiplyScalar(Math.exp(-o * 0.4)),
            r.mesh.position.addScaledVector(r.vel, o),
            (r.mesh.rotation.x += r.spin.x * o),
            (r.mesh.rotation.y += r.spin.y * o),
            (r.mesh.rotation.z += r.spin.z * o),
            r.mesh.position.y <
              this.world.groundAt(
                r.mesh.position.x,
                r.mesh.position.z,
                r.mesh.position.y + 2,
              ) && (r.vel.set(0, 0, 0), r.spin.set(0, 0, 0)));
      if (i.landedAt === null) {
        ((i.vel.y -= this.gravity(9.81) * (i.jet ? 2.2 : 1) * o),
          a.addScaledVector(i.vel, o));
        let r = this.world.groundAt(a.x, a.z, a.y + 3);
        if (
          (i.jet &&
            this.world.generatedTop &&
            !this.world.isLoaded(a.x, a.z) &&
            (r = this.world.generatedTop(a.x, a.z) + 1),
          a.y <= r)
        ) {
          (i.jet &&
            (this.effects.explosion(new k(a.x, r + 1, a.z), 7, this.lastCam, 1),
            this.sfx.explosion(a.distanceTo(this.lastCam) + 4)),
            (a.y = r),
            i.vel.multiplyScalar(Math.exp(-o * 7)),
            (i.vel.y = 0),
            (i.landedAt = i.age),
            (i.groundY = r),
            this.onWreckLanded?.(a, !!i.jet));
          const l = new zs().setFromObject(i.group);
          i.sinkDepth = Math.max(2, l.max.y - r + 0.7);
        } else
          (i.group.rotateZ(i.spin * o),
            i.group.rotateX(o * (i.jet ? -0.55 : 0.12)));
      } else {
        if (
          ((a.x += i.vel.x * o),
          (a.z += i.vel.z * o),
          i.vel.multiplyScalar(Math.exp(-o * 7)),
          n < 1.4)
        ) {
          const l = this.world.groundAt(a.x, a.z, i.groundY + 3);
          Number.isFinite(l) && (i.groundY = l);
        }
        const r = Oe((n - 1.4) / 1.8, 0, 1);
        a.y = i.groundY - i.sinkDepth * r * r * (3 - 2 * r);
      }
      ((i.smoke -= e),
        i.smoke <= 0 &&
          (this.effects.vehicleWreckTrail(
            new k(a.x, i.landedAt === null ? a.y : i.groundY, a.z),
            i.vel,
            i.jet && i.landedAt === null ? Math.min(i.age, 1) : i.age,
          ),
          (i.smoke = i.jet && i.landedAt === null ? 0.045 : 0.16)));
    }
  }
  pendingEnters = new Map();
  visibleRaidCount(e, t = 500) {
    let i = 0;
    const n = t * t;
    for (const o of this.vehicles.values())
      o.ownerName !== Yo ||
        o.hp <= 0 ||
        o.planet !== this.currentPlanet ||
        (o.pos.distanceToSquared(e) <= n && i++);
    return i;
  }
  thermalTargets() {
    return [...this.vehicles.values()]
      .filter(r0)
      .map((e) => (e.lod?.visible ? e.lod : e.group));
  }
  get jetSensors() {
    return this.mine?.type === L.FIGHTER_JET && this.mineSeat === 0;
  }
  get airborneFixedWing() {
    const e = this.mine;
    if (!e || !on(e.type)) return !1;
    if (this.mineSeat === 0) return !e.grounded;
    const t = this.world.groundAt(e.pos.x, e.pos.z, e.pos.y + 0.3),
      i = this.deckInfo(e.pos);
    return e.pos.y > Math.max(t, i?.y ?? -1 / 0) + hg(e.type, e.quat) + 0.15;
  }
  mine = null;
  mineSeat = 0;
  aboard = null;
  aboardSeat = 0;
  remoteView = !1;
  setRadioState(e, t, i) {
    const n = this.vehicles.get(e);
    if (!n) return;
    if (
      ((n.serverAuto = !!(t & 2)),
      (n.radioActive = !!(t & 8)),
      (n.himarsBusy = !!(t & 4)),
      n.type === L.HIMARS &&
        (i !== void 0
          ? (n.himarsServerReadyAt = Date.now() + i)
          : n.himarsBusy || (n.himarsServerReadyAt = 0)),
      !(t & 1))
    ) {
      n.radioHardware && (n.radioHardware.visible = !1);
      return;
    }
    if (n.radioHardware?.parent === n.group) {
      n.radioHardware.visible = !0;
      return;
    }
    const o = aZ(n.type);
    (n.group.add(o), (n.radioHardware = o));
  }
  setRemoteView(e, t) {
    if (!this.remoteView && e < 0) return;
    if (this.mine) {
      for (const n of this.mine.fpvHide) jl(n, !1);
      (this.mine.target.pos.copy(this.mine.pos),
        this.mine.target.quat.copy(this.mine.quat),
        this.remoteView && this.mineSeat === 0 && this.mine.motion.reset());
    }
    ((this.mine = null), (this.mineSeat = 0), (this.remoteView = e >= 0));
    const i = e < 0 ? this.aboard : this.vehicles.get(e);
    i && this.activateSeatView(i, e < 0 ? this.aboardSeat : t ? 0 : 1);
  }
  camMode = 1;
  myId = 0;
  gravityScale = 1;
  currentPlanet = 0;
  setPlanet(e) {
    (this.currentPlanet !== e && this.tracks.clear(),
      (this.currentPlanet = e),
      (this.gravityScale = e === Ci.MOON ? am : 1));
    for (const t of this.vehicles.values())
      ((t.group.visible = t.planet === e),
        t.lod && (t.lod.visible = !1),
        (t.labelAnchor.visible = t.planet === e));
  }
  clearForTransition(e = -1) {
    this.tracks.clear();
    for (const t of [...this.vehicles.keys()]) t !== e && this.onDestroy(t);
    for (const t of this.wrecks) (this.scene.remove(t.group), Lh(t.group));
    ((this.wrecks = []), this.heliCargo.clear(), this.cargoCarriers.clear());
    for (const t of this.cargoRopes.values())
      (this.scene.remove(t), t.geometry.dispose(), t.material.dispose());
    (this.cargoRopes.clear(), this.deckGlue.clear());
  }
  gravity(e) {
    return e * this.gravityScale;
  }
  flightCeiling;
  jetSecondary;
  thinAir(e) {
    return this.flightCeiling === void 0
      ? 1
      : Oe(1 - (e - this.flightCeiling) / 45, 0.2, 1);
  }
  airDensity() {
    return this.currentPlanet === Ci.MOON ? 0.18 : 1;
  }
  surfaceTraction() {
    return this.currentPlanet === Ci.MOON ? 0.55 : 1;
  }
  passengerHullYaw = 0;
  camYaw = 0;
  camPitch = 0;
  spawnCd = 0;
  heliCargo = new Map();
  cargoCarriers = new Map();
  cargoRopes = new Map();
  hooks = {
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
  };
  jetGlow = new Qu(7839743, 0, 13, 2);
  streamT = 0;
  emissiveT = 0;
  smoothCam = new k();
  cameraCenter = new k();
  closeCamera = !1;
  cameraHiddenHull = null;
  tmpMotionQuat = new hi();
  smoothCamInit = !1;
  lastCam = new k();
  aimPos = new k();
  aimDir = new k(0, 0, -1);
  aimValid = !1;
  tmpDeckV = new k();
  tmpGlueV = new k();
  tmpGlueQ = new hi();
  tmpTrackForward = new k();
  tmpSeatForward = new k();
  tmpAircraftPos = new k();
  planeFreeLook = !1;
  deckGlue = new Map();
  tracks;
  lastRamAt = new Map();
  onHeliCargo(e, t) {
    const i = this.heliCargo.get(e);
    (i !== void 0 && this.cargoCarriers.delete(i), this.heliCargo.delete(e));
    const n = this.cargoRopes.get(e);
    (n &&
      (this.scene.remove(n),
      n.geometry.dispose(),
      n.material.dispose(),
      this.cargoRopes.delete(e)),
      t !== 65535 && (this.heliCargo.set(e, t), this.cargoCarriers.set(t, e)));
  }
  cargoCandidate(e) {
    let t = null,
      i = 1 / 0;
    for (const n of this.vehicles.values()) {
      if (
        n === e ||
        !n7(n.type) ||
        n.driver !== -1 ||
        n.passengers.size > 0 ||
        n.planet !== e.planet ||
        n.serverAuto ||
        n.ownerName === Yo ||
        this.cargoCarriers.has(n.id) ||
        this.heliCargo.has(n.id)
      )
        continue;
      const o = Math.hypot(n.pos.x - e.pos.x, n.pos.z - e.pos.z),
        a = e.pos.y - n.pos.y;
      lZ(e.pos, { ...n.pos, type: n.type }) &&
        o + a * 0.25 < i &&
        ((t = n), (i = o + a * 0.25));
    }
    return t;
  }
  canToggleCargo() {
    return (
      !!this.mine &&
      this.mineSeat === 0 &&
      this.mine.type === L.HELI &&
      (this.heliCargo.has(this.mine.id) || !!this.cargoCandidate(this.mine))
    );
  }
  toggleCargo() {
    if (!this.mine || this.mineSeat !== 0 || this.mine.type !== L.HELI) return;
    const e = this.heliCargo.get(this.mine.id),
      t = e === void 0 ? this.cargoCandidate(this.mine) : null;
    (e !== void 0 || t) &&
      this.hooks.sendHeliCargo(this.mine.id, e !== void 0 ? 65535 : t.id);
  }
  onSpawn(e, t, i, n, o, a, r, l, c, h = 0, d = 0, u = 0, f = 0, p = 0) {
    if (!(t in nP) || this.vehicles.has(e)) return;
    const m = A4(t),
      g = c === Yo,
      y = this.hooks.battleSide?.(p) ?? null,
      { sprite: b, canvas: S } = W8(g || !!y);
    (y && (b.userData.side = y),
      (b.position.y = uJ[t] * En(t).y + (g ? 0.3 : 0)));
    const M = g ? b : null,
      E = new re();
    (E.add(b),
      E.position.copy(i),
      m.group.position.copy(i),
      m.group.quaternion.copy(n),
      this.scene.add(m.group),
      this.scene.add(E));
    const A = {
      id: e,
      type: t,
      pos: i.clone(),
      quat: n.clone(),
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
      labelAnchor: E,
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
      target: { pos: i.clone(), quat: n.clone() },
      motion: new C7(110, !0),
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
    (g && Pp(A),
      t === L.SPACE_ROCKET && (A.throttle = Oe(h, 0, 1)),
      A.turret &&
        (t === L.TURRET
          ? (A.turret.rotation.y = d || h)
          : (t === L.PATRIOT ||
              t === L.TANK ||
              t === L.HIMARS ||
              t === L.BTR_TURRET) &&
            (A.turret.rotation.y = h)),
      t === L.TURRET && A.props[0] && (A.props[0].rotation.y = h),
      A.barrel &&
        (t === L.TANK || t === L.HIMARS || t === L.BTR_TURRET) &&
        (A.barrel.rotation.x = d),
      this.vehicles.set(e, A));
    const T = this.pendingEnters.get(e);
    if (T) {
      this.pendingEnters.delete(e);
      for (const x of T) this.onEnter(e, x.pid, x.seat, x.ownerName);
    }
    ((A.group.visible = f === this.currentPlanet),
      (A.labelAnchor.visible = f === this.currentPlanet),
      Mg(A),
      this.refreshRaidLod(A),
      Pp(A));
  }
  refreshRaidLod(e) {
    e.lod && (this.scene.remove(e.lod), e.lod.dispose(), (e.lod = null));
    const t = [e.turret, e.barrel, ...e.props, ...e.motionParts].filter(
      (i) => !!i,
    );
    ((e.lod = new N7(
      e.group,
      t,
      `vehicle:${e.type}:${e.camo}:${e.id % 3}:${XA()}`,
      0.2,
    )),
      (e.lod.visible = !1),
      this.scene.add(e.lod));
    for (const i of e.group.children)
      i.userData.navLight && e.lod.add(i.clone());
    if (Wb(e.type))
      for (const i of [e.group, e.lod])
        i.traverse((n) => {
          const o = n.material;
          if (o)
            for (const a of Array.isArray(o) ? o : [o])
              "fog" in a && ((a.fog = !1), (a.needsUpdate = !0));
        });
  }
  setArmor(e, t, i = !1) {
    const n = this.vehicles.get(e);
    if (
      n &&
      !(n.armor === t && !i) &&
      ((n.armor = t),
      this.attachArmor(n),
      Mg(n),
      this.refreshRaidLod(n),
      i && n.armorKit.length)
    ) {
      n.armorGlow = 1;
      for (const a of n.armorKit) d8(a, 1);
      const o = u8(n.armorKit, 14);
      for (const a of o) this.effects.weldSparks(a, 1.4);
      (this.effects.flash(
        n.pos.clone().add(new k(0, 1.6, 0)),
        6,
        0.5,
        12572927,
      ),
        this.effects.addTrauma(0.12),
        this.sfx.armorClank());
    }
  }
  attachArmor(e) {
    for (const n of e.armorKit) {
      n.parent?.remove(n);
      const o = e.fpvHide.indexOf(n);
      (o >= 0 && e.fpvHide.splice(o, 1), Lh(n));
    }
    e.armorKit = [];
    const t = _7(e.type, e.armor, !!e.turret, !!e.launcher);
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
  sparkScratch = [];
  coolArmor(e, t, i) {
    const n = e.armorGlow;
    e.armorGlow = Math.max(0, e.armorGlow - t / 3.2);
    for (const o of e.armorKit) d8(o, e.armorGlow);
    if (i && n > 0.52 && Math.random() < t * 22)
      for (const o of u8(e.armorKit, 1, this.sparkScratch))
        (this.effects.weldSparks(o, 0.8),
          Math.random() < 0.35 && this.effects.flash(o, 2.4, 0.07, 13164799));
  }
  setCamo(e, t) {
    const i = this.vehicles.get(e);
    i && ((i.camo = t), Mg(i), this.refreshRaidLod(i));
  }
  rebuildModels() {
    for (const e of this.vehicles.values()) {
      const t = this.headlightsOn(e);
      for (const n of e.fpvHide) jl(n, !1);
      for (const n of e.headlights ?? []) n.dispose();
      e.headlights = null;
      const i = A4(e.type);
      (i.group.position.copy(e.group.position),
        i.group.quaternion.copy(e.group.quaternion),
        i.group.scale.copy(e.group.scale),
        this.scene.remove(e.group),
        Lh(e.group),
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
          (e.turret.rotation.y = (e.type === L.TURRET && e.aux2) || e.aux1),
        e.type === L.TURRET && e.props[0] && (e.props[0].rotation.y = e.aux1),
        e.barrel &&
          (e.type === L.TANK ||
            e.type === L.HIMARS ||
            e.type === L.BTR_TURRET) &&
          (e.barrel.rotation.x = e.aux2),
        (e.armorKit = []),
        this.attachArmor(e),
        Mg(e),
        this.refreshRaidLod(e),
        Pp(e));
    }
  }
  onState(e, t, i, n, o, a, r, l = Date.now() >>> 0) {
    const c = this.vehicles.get(e);
    (c && r !== void 0 && (c.planet = r),
      !(
        !c ||
        (c === this.mine && this.mineSeat === 0 && c.type !== L.MORTAR)
      ) &&
        (c.target.pos.copy(t),
        c.target.quat.copy(i).normalize(),
        c.motion.push(t, i, c.type === L.TURRET ? new k() : n, l),
        c.vel.copy(n),
        (c.aux1 = o),
        (c.aux2 = a),
        c.type === L.TURRET &&
          (c.turret && (c.turret.rotation.y = a),
          c.barrel && (c.barrel.rotation.x = n.y),
          c.props[0] && (c.props[0].rotation.y = o))));
  }
  onEnter(e, t, i = 0, n = "") {
    const o = this.vehicles.get(e);
    if (!o) {
      const a = this.pendingEnters.get(e) ?? [],
        r = a.find((l) => l.pid === t);
      (r
        ? ((r.seat = i), (r.ownerName = n))
        : a.push({ pid: t, seat: i, ownerName: n }),
        this.pendingEnters.set(e, a));
      return;
    }
    (o.crewNames.set(t, n),
      i === 0 ? o.passengerSeats.delete(t) : o.passengerSeats.set(t, i),
      i === 0
        ? ((o.owner = t), (o.driver = t), o.passengers.delete(t))
        : (o.driver === t && (o.driver = -1), o.passengers.add(t)),
      o.ownerName || (o.ownerName = n),
      t === this.myId &&
        ((this.aboard = o),
        (this.aboardSeat = i),
        !this.remoteView && this.activateSeatView(o, i)));
  }
  activateSeatView(e, t) {
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
          (this.camMode = this.passengerCanShoot() || oc(e.type, t) ? 0 : 1));
        const i = new k(0, 0, -1).applyQuaternion(e.quat);
        ((this.passengerHullYaw = Xl(e.quat)),
          (this.camYaw =
            Math.atan2(-i.x, -i.z) +
            (e.type === L.HELI ? (t === 1 ? Math.PI / 2 : -Math.PI / 2) : 0)),
          (this.camPitch = on(e.type) ? 0.12 : 0));
        return;
      }
      {
        ((this.mine = e),
          (this.mineSeat = 0),
          (this.smoothCamInit = !1),
          e.pos.copy(e.target.pos),
          e.quat.copy(e.target.quat));
        const i = new k(0, 0, -1).applyQuaternion(e.quat);
        e.yaw = Math.atan2(-i.x, -i.z);
        const n = new pi().setFromQuaternion(e.quat, "YXZ");
        ((e.pitch = n.x),
          (e.roll = n.z),
          (e.yaw = n.y),
          (e.ride = void 0),
          (e.speed = e.vel.dot(i)),
          (e.throttle = on(e.type)
            ? Oe(e.speed / (_y[e.type] * hs.speed), 0, 1)
            : e.type === L.SPACE_ROCKET
              ? Oe(e.aux1, 0, 1)
              : 0),
          (e.vy = e.vel.y),
          e.angularVelocity?.set(0, 0, 0),
          e.motion.reset());
        const o = this.world.groundAt(e.pos.x, e.pos.z, e.pos.y + 0.3);
        ((e.grounded = o === -1 / 0 ? !1 : e.pos.y - o < 0.6),
          (this.camYaw = e.type === L.TURRET ? e.aux1 : e.yaw),
          (this.camPitch = 0),
          (this.camMode = e.type === L.DRONE ? 0 : 1));
      }
    }
  }
  onExit(e, t) {
    t === this.myId &&
      this.aboard?.id === e &&
      ((this.aboard = null), (this.aboardSeat = 0));
    const i = this.pendingEnters.get(e);
    if (i) {
      const o = i.filter((a) => a.pid !== t);
      o.length ? this.pendingEnters.set(e, o) : this.pendingEnters.delete(e);
    }
    const n = this.vehicles.get(e);
    if (
      (n &&
        (n.driver === t && (n.driver = -1),
        n.passengers.delete(t),
        n.passengerSeats.delete(t),
        n.crewNames.delete(t)),
      t === this.myId && this.mine?.id === e && !this.remoteView)
    ) {
      const o = this.mine;
      this.mineSeat === 0 &&
        (o.target.pos.copy(o.pos),
        o.target.quat.copy(o.quat),
        o.vel.set(0, 0, 0));
      const a = o.type === L.DRONE ? null : this.computeExitPos(o);
      for (const r of o.fpvHide) jl(r, !1);
      (o.barrel && jl(o.barrel, !1),
        (this.gunZoom = 1),
        (this.zoomIdx = 0),
        (this.mine = null),
        (this.mineSeat = 0),
        this.hooks.onControlReleased(a));
    }
  }
  onHp(e, t) {
    const i = this.vehicles.get(e);
    if (i) {
      if (i === this.mine && t < i.hp) {
        const n = i.hp - t;
        (this.sfx.hullHit(n, (Math.random() - 0.5) * 0.5),
          this.effects.addTrauma(
            n >= 35 ? 0.45 : Math.min(0.12, 0.02 + n * 0.006),
          ));
      }
      ((i.hp = t), Pp(i));
    }
  }
  onRam(e, t, i = 0, n, o = 1, a) {
    const r = this.vehicles.get(e);
    if (
      !(!r || !Number.isFinite(t)) &&
      (this.mine?.id === e && (this.mine.speed = t),
      i && n && r.planet === this.currentPlanet)
    ) {
      const l = a ? n.distanceTo(a) : 1 / 0;
      l < 70 &&
        (this.effects.vehicleBreak(
          n,
          le[i]?.color ?? 8947848,
          i,
          Math.abs(t),
          o,
          r.yaw,
        ),
        l < 45 && this.sfx.vehicleBreak(i, Math.abs(t)),
        this.mine?.id === e &&
          !en(i) &&
          this.effects.addTrauma(Math.min(0.22, 0.04 + Math.abs(t) * 0.018)));
    }
  }
  requestRam(e, t, i, n) {
    if (!this.hooks?.sendRam) return;
    const o = performance.now();
    o - (this.lastRamAt.get(e.id) ?? 0) < 170 ||
      (this.lastRamAt.set(e.id, o), this.hooks?.sendRam?.(e, t, i, n));
  }
  setHeadlights(e, t) {
    const i = D7[e.type];
    if (i) {
      if (!e.headlights) {
        if (!t) return;
        e.headlights = (e.type === L.HELI ? [0] : [1, -1]).map((n) => {
          const o = new Y5(e.group, {
            range: i.range * 2.5,
            angle: i.angle,
            intensity: 57,
            priority: e === this.mine ? 1 : 0,
            color: e.type === L.SUBMARINE ? 13625599 : 16773844,
          });
          return (
            o.root.position.set(i.x * n, i.y, i.z),
            (o.root.rotation.x = i.pitch),
            o
          );
        });
      }
      for (const n of e.headlights) n.setActive(t);
      e.group.traverse((n) => {
        const o = n.material;
        if (
          !o ||
          Array.isArray(o) ||
          !o.isMeshLambertMaterial ||
          !rJ.has(o.userData.baseColor)
        )
          return;
        const a = t ? lJ : cJ;
        o.emissive.copy(a);
        const r = o.userData.entityLight;
        r && r.base.copy(a);
      });
    }
  }
  headlightsOn(e) {
    return !!e.headlights?.[0]?.active;
  }
  onDestroy(e, t = !1) {
    (this.tracks.forget(e),
      this.aboard?.id === e && ((this.aboard = null), (this.aboardSeat = 0)));
    for (const [a, r] of this.heliCargo)
      (a === e || r === e) && this.onHeliCargo(a, 65535);
    const i = this.vehicles.get(e);
    if (!i) return;
    for (const a of i.fpvHide) jl(a, !1);
    const n = i === this.mine,
      o =
        n ||
        (this.lastRide?.id === e &&
          performance.now() - this.lastRide.at < 2500);
    for (const a of i.headlights ?? []) a.dispose();
    if (((i.headlights = null), t && i.planet === this.currentPlanet)) {
      ((i.group.visible = !0),
        i.group.traverse((l) => {
          (l.userData.motion === "jet-exhaust" || l.name === "rotor-blur") &&
            (l.visible = !1);
          const c = l;
          if (c.isMesh)
            for (const h of Array.isArray(c.material)
              ? c.material
              : [c.material]) {
              const d = h;
              (d.color?.multiplyScalar(0.3), d.emissive?.setHex(1180672));
            }
        }));
      const a = hs.honest && on(i.type),
        r = a
          ? Array.from({ length: 7 }, (l, c) => {
              const h = new Q(
                new kt(
                  0.6 + Math.random() * 1.4,
                  0.15 + Math.random() * 0.3,
                  0.5 + Math.random() * 1.2,
                ),
                (this.wreckMat ??= new Pi({ color: 2829354 })),
              );
              (h.position
                .copy(i.pos)
                .add(
                  new k(
                    (Math.random() - 0.5) * 4,
                    (Math.random() - 0.5) * 2,
                    (Math.random() - 0.5) * 4,
                  ),
                ),
                this.scene.add(h));
              const d = new k(
                Math.random() - 0.5,
                Math.random() * 0.7,
                Math.random() - 0.5,
              )
                .normalize()
                .multiplyScalar(12 + Math.random() * 22 + c);
              return {
                mesh: h,
                vel: i.vel.clone().multiplyScalar(0.55).add(d),
                spin: new k(
                  Math.random() * 8 - 4,
                  Math.random() * 8 - 4,
                  Math.random() * 8 - 4,
                ),
              };
            })
          : void 0;
      for (
        this.wrecks.push({
          group: i.group,
          vel: i.vel.clone().multiplyScalar(a ? 0.8 : 0.65),
          age: 0,
          smoke: 0,
          spin: (i.id % 2 ? 1 : -1) * (a ? 1.9 : 0.35),
          planet: i.planet,
          landedAt: null,
          groundY: 0,
          sinkDepth: 0,
          jet: a,
          debris: r,
        }),
          o && (this.ownWreck = { group: i.group, at: performance.now() });
        this.wrecks.length > 8;
      ) {
        const l = this.wrecks.shift();
        (this.scene.remove(l.group), Lh(l.group));
      }
    } else (this.scene.remove(i.group), Lh(i.group));
    (i.lod && (this.scene.remove(i.lod), i.lod.dispose()),
      this.scene.remove(i.labelAnchor),
      i.labelAnchor.traverse((a) => {
        const r = a;
        r.isSprite && (r.material.map?.dispose(), r.material.dispose());
      }),
      this.vehicles.delete(e),
      n &&
        ((this.mine = null),
        (this.mineSeat = 0),
        this.hooks.onControlReleased(
          i.type === L.DRONE ? null : this.computeExitPos(i),
        )));
  }
  computeExitPos(e) {
    return vQ(e.type, e.pos, e.quat);
  }
  launchFromHand(e, t, i, n = 0) {
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
      if (!GR(e, l, (c, h, d) => this.world.isSolidAt(c, h, d)))
        return (this.hooks.sendSpawn(e, l, n), (this.spawnCd = 3), !0);
    }
    return !1;
  }
  requestSpawn(e, t, i, n = 0) {
    if (this.spawnCd > 0) return !1;
    const o = (l) => !GR(e, l, (c, h, d) => this.world.isSolidAt(c, h, d));
    if (e !== L.CARRIER && e !== L.SUBMARINE)
      for (let l = 3; l < 40; l += 0.5) {
        const c = t.x + i.x * l,
          h = t.y + i.y * l,
          d = t.z + i.z * l;
        if (this.world.isSolidAt(c, h, d)) break;
        const u = this.deckInfo(new k(c, h, d));
        if (u) {
          const f = new k(c, u.y + (e === L.DRONE ? 0.35 : 0.05), d);
          return o(f)
            ? (this.hooks.sendSpawn(e, f, n), (this.spawnCd = 3), !0)
            : !1;
        }
      }
    if (e === L.BOAT || e === L.CARRIER || e === L.SUBMARINE) {
      const l = e === L.CARRIER ? 40 : 24;
      for (let c = 3; c < l; c += 0.5) {
        const h = t.x + i.x * c,
          d = t.y + i.y * c,
          u = t.z + i.z * c;
        if (this.world.isSolidAt(h, d, u)) return !1;
        const f =
            e === L.SUBMARINE
              ? this.waterColumnAt(Math.floor(h), Math.floor(u))
              : null,
          p = f ? f.surface : this.waterYAt(Math.floor(h), Math.floor(u), d);
        if (p !== null && d <= p + 4) {
          const m = new k(
            h,
            p - (e === L.BOAT ? 0.25 : e === L.SUBMARINE ? 1.45 : 1.2),
            u,
          );
          return o(m)
            ? (this.hooks.sendSpawn(e, m, n), (this.spawnCd = 3), !0)
            : !1;
        }
      }
      return !1;
    }
    const a = this.world.raycast(t, i, 12);
    if (!a) return !1;
    const r = new k(a.bx + 0.5, a.by + 1, a.bz + 0.5);
    return (
      e === L.DRONE && (r.y += 0.3),
      o(r) ? (this.hooks.sendSpawn(e, r, n), (this.spawnCd = 3), !0) : !1
    );
  }
  nearestFree(e, t) {
    let i = null,
      n = t;
    for (const o of this.vehicles.values()) {
      if (
        !r0(o) ||
        !(o.driver === -1 || o.passengers.size < (r1[o.type] ?? 0)) ||
        this.hostile(o)
      )
        continue;
      const r = o.pos.distanceTo(e);
      r < n && ((n = r), (i = o));
    }
    return i;
  }
  hostile(e) {
    return e.ownerName === Yo || this.hooks.battleSide?.(e.army) === "enemy";
  }
  *rendered() {
    for (const e of this.vehicles.values())
      e !== this.mine &&
        e.hp > 0 &&
        e.planet === this.currentPlanet &&
        r0(e) &&
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
        : e.type === L.TANK ||
          e.type === L.BTR_TURRET ||
          e.type === L.TURRET ||
          e.type === L.BOAT;
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
          i.type !== L.CARRIER ||
          i.driver !== -1
        )
          continue;
        const n = e.clone().sub(i.pos).applyQuaternion(i.quat.clone().invert());
        if (
          Math.abs(n.x) <= 9 &&
          Math.abs(n.z) <= 24 &&
          n.y >= -1.5 &&
          n.y <= 6
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
    const i = r1[t.type] ?? 0;
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
    const t = 1 + (r1[e.type] ?? 0);
    for (let i = 1; i < t; i++) {
      const n = (this.mineSeat + i) % t;
      if (
        n === 0 ? e.driver === -1 : ![...e.passengerSeats.values()].includes(n)
      ) {
        this.switchSeat(n);
        return;
      }
    }
  }
  preparePassengerShot(e, t) {
    const i = this.mine;
    if (!i || this.remoteView) return !0;
    const n = this.tmpSeatForward
      .copy(t)
      .applyQuaternion(this.tmpMotionQuat.copy(i.quat).invert());
    return L8(i.type, this.mineSeat, n)
      ? (this.seatPos(i, this.mineSeat, e),
        e.add(
          this.tmpSeatForward
            .set(0, i.type === L.HELI ? 1.55 : 0.85, 0)
            .applyQuaternion(i.quat),
        ),
        !0)
      : !1;
  }
  passengerShotOrigin(e) {
    const t = this.mine;
    return !t || !this.passengerCanShoot()
      ? !1
      : (this.seatPos(t, this.mineSeat, e),
        e.add(
          this.tmpSeatForward
            .set(0, t.type === L.HELI ? 1.55 : 0.85, 0)
            .applyQuaternion(t.quat),
        ),
        !0);
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
    return L8(e.type, this.mineSeat, i);
  }
  requestExit() {
    (this.mine && delete this.mine.tankAim,
      this.mine && this.mineSeat === 0 && this.hooks.sendState(this.mine),
      this.mine && this.hooks.sendExit());
  }
  detonateDrone() {
    this.mine &&
      this.mine.type === L.DRONE &&
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
  rayHit(e, t, i, n = !1) {
    let o = null;
    for (const a of this.vehicles.values()) {
      if (
        (!n && a === this.mine) ||
        !r0(a) ||
        !vT(
          e.x,
          e.y,
          e.z,
          t.x,
          t.y,
          t.z,
          a.pos.x,
          a.pos.y,
          a.pos.z,
          NJ(a.type),
          i,
        )
      )
        continue;
      const r = a.quat.clone().invert(),
        l = e.clone().sub(a.pos).applyQuaternion(r),
        c = t.clone().applyQuaternion(r),
        h = new _d(l, c);
      for (const d of lo[a.type] ?? []) {
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
    for (const n of this.vehicles.values())
      if (!(!r0(n) || n.pos.distanceTo(e) > t))
        for (const o of lo[n.type] ?? [])
          i.push({ kind: "obb", pos: n.pos, quat: n.quat, box: o });
    return i;
  }
  projHit(e, t = -1) {
    for (const i of this.vehicles.values()) {
      if (i.id === t || i === this.mine || !r0(i)) continue;
      const n = e.clone().sub(i.pos).applyQuaternion(i.quat.clone().invert());
      if ((lo[i.type] ?? []).some((o) => o.containsPoint(n)))
        return { id: i.id, type: i.type };
    }
    return null;
  }
  update(e, t, i, n, o = 0, a, r = !1) {
    ((this.spawnCd = Math.max(0, this.spawnCd - e)),
      this.mine &&
        (this.lastRide = { id: this.mine.id, at: performance.now() }),
      this.updateWrecks(e),
      (this.jetGlow.intensity = 0));
    let l = 4900;
    if (((this.emissiveT += e), this.emissiveT >= Vc)) {
      this.emissiveT = 0;
      for (const h of this.vehicles.values()) {
        const d = h.lod?.visible ? h.lod : h.group;
        d.visible && Pl(d, Il(this.world, h.pos, o, 0.8));
      }
    }
    for (const h of this.vehicles.values()) {
      const d = h === this.mine,
        u = n ? h.pos.distanceTo(n) : 0,
        f =
          (hs.honest && u <= 9e3) ||
          (Wb(h.type) && u <= cZ) ||
          (this.jetSensors && u <= o7),
        p =
          h.planet === this.currentPlanet &&
          (d ||
            f ||
            !a ||
            a(h.pos.x, h.pos.z) ||
            a(h.target.pos.x, h.target.pos.z)),
        m = this.hooks.battleSide?.(h.army) ?? void 0;
      if (m !== h.hpBar.userData.side) {
        if (m && !h.hpBar.userData.raid) {
          const D = h.hpBar,
            { sprite: U, canvas: W } = W8(!0);
          (U.position.copy(D.position),
            (U.position.y += 0.3),
            h.labelAnchor.remove(D),
            D.material.map?.dispose(),
            D.material.dispose(),
            h.labelAnchor.add(U),
            (h.hpBar = U),
            (h.hpCanvas = W));
        }
        ((h.hpBar.userData.side = m), (h.hpBar.userData.relation = void 0));
      }
      const g = h.hpBar.userData.side,
        y = g
          ? g === "ally"
          : h.owner === this.myId || this.hooks.isFriendlyName(h.ownerName),
        b = n ? h.pos.distanceTo(n) : 0;
      ((h.labelAnchor.visible =
        h.planet === this.currentPlanet && (p || (y && b <= 600))),
        h.labelAnchor.position.copy(h.pos));
      const S = n ? h.pos.distanceToSquared(n) : 0,
        M = p && S <= 19600 && !(r && h.lod && S > B8 ** 2),
        E = d
          ? h.speed
          : h.vel.dot(
              this.tmpTrackForward.set(0, 0, -1).applyQuaternion(h.quat),
            );
      if (
        (((M && S < 8100) || d) && this.poseSeatGuns(h, e),
        M && h.type === L.FIGHTER_JET)
      ) {
        const D = d && this.mineSeat === 0 && !this.remoteView,
          U = D
            ? h.throttle
            : Oe(h.vel.length() / (_y[h.type] * hs.speed), 0, 1);
        (wZ(
          h.motionParts,
          e,
          U,
          D ? h.grounded : h.vel.length() < 20,
          h.vel.length(),
        ),
          o > 0.05 &&
            U > 0.08 &&
            S < l &&
            ((l = S),
            this.jetGlow.position
              .set(0, 1.48, 6.8)
              .applyQuaternion(h.quat)
              .add(h.pos),
            (this.jetGlow.intensity = o * U * 28)));
      }
      M &&
        (this.animateChassis(h, e, E, S, r && !d),
        this.animateTracks(h, e, E),
        this.detailEuler.setFromQuaternion(h.quat, "YXZ"),
        yQ(
          h.motionParts,
          e,
          E,
          this.detailEuler.x,
          this.detailEuler.z,
          h.yawRate,
        ));
      const A = h.hp / Math.max(1, h.maxHp);
      if (p && M && A <= 0.3) {
        const D = Oe((0.3 - A) / 0.3, 0, 1);
        if (((h.smokeT -= e), h.smokeT <= 0)) {
          const W = (fJ[h.type] ?? new k(0, 1, 0))
            .clone()
            .applyQuaternion(h.quat)
            .add(h.pos);
          (this.effects.vehicleDamageSmoke(W, D, h.vel),
            (h.smokeT = ns(0.72, 0.09, D)));
        }
      } else h.smokeT = Math.min(h.smokeT, 0.15);
      if (
        (h.armorGlow > 0 && this.coolArmor(h, e, p && S < 8100),
        h.type === L.TANK && h.barrel)
      ) {
        h.cannonRecoil = Math.max(0, (h.cannonRecoil ?? 0) - e);
        const D =
          h.barrel.userData.restZ ??
          (h.barrel.userData.restZ = h.barrel.position.z);
        h.barrel.position.z =
          D + Math.sin(((h.cannonRecoil ?? 0) / 0.45) * Math.PI) * 0.32;
      }
      if (h.type === L.MORTAR && h.barrel) {
        h.mortarRecoil = Math.max(0, (h.mortarRecoil ?? 0) - e);
        const D =
          Math.sin(Math.min(1, (h.mortarRecoil ?? 0) / 0.32) * Math.PI) * 0.19;
        ((h.barrel.position.y = 0.65 - D),
          (h.barrel.position.z = 0.18 + D * 0.5));
      }
      if (h === this.mine && this.mineSeat === 0) {
        ((h.hpBar.visible = !1),
          h.lod && (h.lod.visible = !1),
          (h.group.visible = p));
        continue;
      }
      const T = 1 - Math.exp(-10 * e);
      if (!this.applyDeckGlue(h)) {
        const D = this.tmpAircraftPos;
        (h.motion.sample(D, this.tmpMotionQuat) ||
          (D.copy(h.pos).lerp(h.target.pos, T),
          this.tmpMotionQuat.copy(h.quat).slerp(h.target.quat, T)),
          h.pos.copy(D),
          h.quat.copy(this.tmpMotionQuat));
      }
      (h.group.position.copy(h.pos),
        h.group.quaternion.copy(h.quat),
        h.labelAnchor.position.copy(h.pos));
      const x = r ? (this.allowLod ? B8 : 120) : this.allowLod ? 110 : 260,
        R = !d && !!h.lod && !!n && h.pos.distanceToSquared(n) > x ** 2;
      if (
        ((h.group.visible = p && !R),
        h.lod && (h.lod.visible = p && R),
        h.turret)
      ) {
        let U = (h.type === L.TURRET ? h.aux2 : h.aux1) - h.turret.rotation.y;
        if (
          ((U = Math.atan2(Math.sin(U), Math.cos(U))),
          (h.turret.rotation.y += U * T),
          h.barrel)
        ) {
          const W =
            h.type === L.MORTAR ? 0 : h.type === L.TURRET ? h.vel.y : h.aux2;
          h.barrel.rotation.x += (W - h.barrel.rotation.x) * T;
        }
      }
      (h.type === L.TURRET &&
        h.props[0] &&
        ((h.props[0].rotation.y = h.aux1),
        (h.props[0].visible = p && h.driver === this.myId)),
        (M || (p && R)) && this.spinProps(h, e, h.vel.length()),
        p && R && h.lod && h.lod.sync());
      const _ = !n || h.pos.distanceTo(n) <= 50,
        C = h.ownerName === Yo || g === "enemy",
        P = hs.honest;
      h.hpBar.visible =
        h.planet === this.currentPlanet &&
        (y
          ? b <= (P ? 320 : 600)
          : g === "enemy"
            ? p && b <= 170
            : p && (_ || R) && (C || h.hp < h.maxHp));
      const O =
          P && g
            ? Math.max(1, Math.min(5, b / 60))
            : Math.max(1, Math.min(16, b / (g ? 22 : 34))),
        B = g ? 5.4 : h.hpBar.userData.raid ? 3.3 : 3;
      h.hpBar.scale.set(B * O, (B / h.hpBar.userData.aspect) * O, 1);
      const H = g ?? (y ? "ally" : C || h.ownerName ? "enemy" : "neutral");
      (h.hpBar.userData.relation !== H &&
        ((h.hpBar.userData.relation = H), Pp(h)),
        h.type === L.PATRIOT &&
          !h.serverAuto &&
          h.driver === -1 &&
          h.owner === this.myId &&
          this.updatePatriotDefense(h, e));
    }
    const c = this.mine;
    if (c && this.mineSeat > 0) {
      const h = Xl(c.quat),
        d = h - this.passengerHullYaw;
      ((this.camYaw += Math.atan2(Math.sin(d), Math.cos(d))),
        (this.passengerHullYaw = h));
      const u = this.mySeatGun() ? this.gunZoom : 1;
      if (
        (i && (this.camYaw -= (t.mdx * 0.0022) / u),
        i &&
          (this.camPitch = Oe(
            this.camPitch - (t.mdy * 0.0022) / u,
            -1.35,
            1.45,
          )),
        this.mySeatGun() && this.updateSightZoom(c, e, t, i),
        this.camMode === 0 && this.mySeatGun())
      ) {
        const f = C8(c.type);
        if (
          ((this.camPitch = Oe(this.camPitch, f.down, f.up)), f.swing < Math.PI)
        ) {
          const p = h + (this.mineSeat === 1 ? Math.PI / 2 : -Math.PI / 2),
            m = this.camYaw - p;
          this.camYaw =
            p + Oe(Math.atan2(Math.sin(m), Math.cos(m)), -f.swing, f.swing);
        }
      }
      (t.actionPressed("camera") && (this.camMode = 1 - this.camMode),
        (c.hpBar.visible = !1),
        this.fireSeatGun(c, e, t, i));
    }
    if (c && this.mineSeat === 0) {
      const h = e / Jt.vehicleReload(c.type);
      ((c.fireCd = Math.max(on(c.type) ? -e : 0, c.fireCd - h)),
        (c.fireCd2 =
          (c.type === L.CARRIER || c.type === L.MORTAR) && c.carrierReadyAt > 0
            ? Math.max(0, (c.carrierReadyAt - Date.now()) / 1e3)
            : Math.max(on(c.type) ? -e : 0, c.fireCd2 - h)),
        (this.fireCdBefore = c.fireCd),
        (this.fireCd2Before = c.fireCd2),
        this.updateSightZoom(c, e, t, i),
        t.actionPressed("camera") && (this.camMode = 1 - this.camMode),
        c.type === L.TANK
          ? this.driveTank(c, e, t, i)
          : on(c.type)
            ? this.drivePlane(c, e, t, i)
            : c.type === L.BOAT || c.type === L.CARRIER
              ? this.driveShip(c, e, t, i)
              : c.type === L.SUBMARINE
                ? this.driveShip(c, e, t, i)
                : c.type === L.HELI
                  ? this.driveHelicopter(c, e, t, i)
                  : c.type === L.MORTAR
                    ? ((this.camYaw -= t.mdx * 0.0022),
                      (this.camPitch = Oe(
                        this.camPitch - t.mdy * 0.0022,
                        -0.35,
                        1.1,
                      )),
                      (c.speed = 0),
                      c.vel.set(0, 0, 0),
                      i &&
                        (t.clickL || t.clickR) &&
                        this.hooks.openMap("himars"))
                    : c.type === L.HIMARS
                      ? this.driveHimars(c, e, t, i)
                      : c.type === L.PATRIOT
                        ? this.drivePatriot(c, e, t, i)
                        : c.type === L.TURRET
                          ? this.driveTurret(c, e, t, i)
                          : c.type === L.BTR_TURRET
                            ? this.driveBtrTurret(c, e, t, i)
                            : c.type === L.SPACE_ROCKET
                              ? this.driveRocket(c, e, t, i)
                              : this.driveDrone(c, e, t, i),
        this.practice(c, e, i),
        c.group.position.copy(c.pos),
        c.group.quaternion.copy(c.quat),
        (c.hpBar.visible = !1),
        (this.streamT += e),
        this.streamT > 1 / 15 && ((this.streamT = 0), this.hooks.sendState(c)));
    }
    for (const [h, d] of this.heliCargo) {
      const u = this.vehicles.get(h),
        f = this.vehicles.get(d);
      if (!u || !f) continue;
      (f.pos.set(
        u.pos.x,
        Math.max(
          u.pos.y - rZ(f.type),
          this.world.groundAt(u.pos.x, u.pos.z, f.pos.y + 0.4),
        ),
        u.pos.z,
      ),
        f.target.pos.copy(f.pos),
        f.vel.copy(u.vel),
        f.group.position.copy(f.pos));
      let p = this.cargoRopes.get(h);
      p ||
        ((p = new kl(
          new oi().setAttribute("position", new qt(new Float32Array(24), 3)),
          new Zo({ color: 2761756 }),
        )),
        this.scene.add(p),
        this.cargoRopes.set(h, p));
      const m = 1.25,
        g = Math.min(1.5, dJ[f.type] * 0.45),
        y = p.geometry.getAttribute("position");
      let b = 0;
      for (const S of [-1, 1])
        for (const M of [-1, 1])
          (y.setXYZ(b++, u.pos.x + S * m, u.pos.y, u.pos.z + M * m),
            y.setXYZ(
              b++,
              f.pos.x + S * g,
              f.pos.y + hT(f.type),
              f.pos.z + M * g,
            ));
      ((y.needsUpdate = !0),
        p.geometry.computeBoundingSphere(),
        (p.visible = u.planet === this.currentPlanet));
    }
    if (e > 0)
      for (const h of this.vehicles.values()) {
        const d = Xl(h.quat);
        if (h.prevYaw !== null) {
          let u = d - h.prevYaw;
          ((u = Math.atan2(Math.sin(u), Math.cos(u))),
            (h.yawRate = ns(h.yawRate, u / e, 1 - Math.exp(-16 * e))));
        }
        h.prevYaw = d;
      }
    for (const h of this.vehicles.values())
      h.planet === this.currentPlanet &&
        this.tracks.emit(
          {
            id: h.id,
            type: h.type,
            planet: h.planet,
            x: h.pos.x,
            y: h.pos.y,
            z: h.pos.z,
            yaw: Xl(h.quat),
            speed: h === this.mine ? h.speed : Math.hypot(h.vel.x, h.vel.z),
          },
          n,
        );
    this.tracks.update();
  }
  tankStrike(e) {
    const t = this.mine;
    !t ||
      t.type !== L.TANK ||
      this.mineSeat > 0 ||
      t.fireCd > 0 ||
      t.tankAim ||
      ((t.tankAim = { target: e.clone(), remaining: 8, origin: t.pos.clone() }),
      this.hooks.requestTankAim?.(t.id, e));
  }
  tankAimReady(e, t, i) {
    const n = this.mine;
    if (!n || n.id !== e || !n.tankAim) return;
    if (!t || !i) {
      delete n.tankAim;
      return;
    }
    const o = Math.hypot(i.x, i.z);
    n.tankAim = {
      target: t,
      remaining: 0.8,
      origin: n.pos.clone(),
      shot: {
        vx: i.x,
        vy: i.y,
        vz: i.z,
        pitch: Math.atan2(i.y, o),
        yaw: Math.atan2(-i.x, -i.z),
        time: Math.hypot(t.x - n.pos.x, t.z - n.pos.z) / o,
      },
    };
  }
  tankLaunch(e, t, i) {
    const n = this.vehicles.get(e);
    n &&
      ((n.cannonRecoil = 0.45),
      this.kickHull(n, n.aux1, 0.55),
      this.sfx.shot("tank", t.distanceTo(i)),
      this.effects.flash(t, 5, 0.15),
      this.effects.muzzleSmoke(
        t,
        new k(
          -Math.sin(n.yaw + n.aux1),
          Math.sin(n.aux2),
          -Math.cos(n.yaw + n.aux1),
        ),
      ),
      n === this.mine && this.effects.addTrauma(0.35));
  }
  mortarStrike(e) {
    const t = this.mine;
    !t ||
      t.type !== L.MORTAR ||
      this.mineSeat > 0 ||
      Date.now() < t.carrierReadyAt ||
      Math.hypot(e.x - t.pos.x, e.z - t.pos.z) > ef ||
      ((t.aux1 = Math.atan2(-(e.x - t.pos.x), -(e.z - t.pos.z)) - t.yaw),
      t.turret && (t.turret.rotation.y = t.aux1),
      (t.carrierReadyAt = Date.now() + Dx * 1e3),
      (t.fireCd2 = Dx),
      this.projectiles.spawn(
        mt.MISSILE,
        t.pos.clone().add(new k(0, 3.5, 0)),
        new k(0, 48, 0),
        !0,
        { guide: e, ignoreVehicle: t.id },
      ));
  }
  mortarLaunch(e, t, i) {
    const n = this.vehicles.get(e);
    n &&
      ((n.mortarRecoil = 0.32),
      this.sfx.shot("mortar", t.distanceTo(i)),
      this.effects.flash(t, 3, 0.18),
      this.effects.muzzleSmoke(t, new k(0, 1, 0)),
      n === this.mine && this.effects.addTrauma(0.2));
  }
  himarsStrike(e) {
    const t = this.mine;
    if (!t || t.type !== L.HIMARS) return;
    const i =
      Math.max(t.himarsPendingUntil ?? 0, t.himarsServerReadyAt ?? 0) -
      Date.now();
    if (i > 0 || (t.himarsBusy && !t.himarsServerReadyAt)) {
      this.hooks.message?.(
        I(
          i > 0
            ? `HIMARS: reloading ${Math.ceil(i / 1e3)} s.`
            : "HIMARS: firing salvo.",
          i > 0
            ? `HIMARS: перезарядка ${Math.ceil(i / 1e3)} с.`
            : "HIMARS: идёт залп.",
        ),
      );
      return;
    }
    if (Math.hypot(e.x - t.pos.x, e.z - t.pos.z) > Vr) {
      this.hooks.message?.(
        I(
          `HIMARS: target beyond ${Vr} m.`,
          `HIMARS: цель вне радиуса ${Vr} м.`,
        ),
      );
      return;
    }
    t.himarsPendingUntil = Date.now() + Nx * 1e3;
    for (let n = 0; n < 6; n++)
      window.setTimeout(() => {
        const o = this.vehicles.get(t.id);
        if (!o || this.mine !== o || this.mineSeat > 0) return;
        const a = o.pos.clone().add(new k(0, 2.4, 0)),
          r = e
            .clone()
            .add(
              new k((Math.random() - 0.5) * 6, 0, (Math.random() - 0.5) * 6),
            ),
          l = r.clone().sub(o.pos).setY(0),
          c = Vr - 0.05;
        l.length() > c && r.addScaledVector(l, (c - l.length()) / l.length());
        const h = this.world.groundAt(r.x, r.z, 120);
        r.y = h === -1 / 0 ? e.y : h + 0.3;
        const d = new k(
          (Math.random() - 0.5) * 5,
          44 + n * 0.8,
          (Math.random() - 0.5) * 5,
        );
        (this.projectiles.spawn(mt.MISSILE, a, d, !0, {
          guide: r,
          speed: 48,
          ignoreVehicle: o.id,
        }),
          (o.himarsPendingUntil = Date.now() + Nx * 1e3),
          this.sfx.shot("rpg"));
      }, n * 1e3);
  }
  carrierStrike(e) {
    const t = this.mine;
    if (!t || t.type !== L.CARRIER || t.fireCd2 > 0) return;
    ((t.fireCd2 = pb), (t.carrierReadyAt = Date.now() + pb * 1e3));
    const i = new k(-3.9, 16, 10.5).applyQuaternion(t.quat).add(t.pos),
      n = e.clone(),
      o = this.world.groundAt(n.x, n.z, 120);
    n.y = o === -1 / 0 ? e.y : o + 0.5;
    const a = new k(0, OW, 0).applyQuaternion(t.quat);
    (this.projectiles.spawn(mt.TOMAHAWK, i, a, !0, {
      guide: n,
      speed: tP,
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
    if (!t || t.type !== L.SUBMARINE || t.fireCd2 > 0) return;
    ((t.fireCd2 = Hx), (t.carrierReadyAt = Date.now() + Hx * 1e3));
    const i = new k(0, 2.65, 2.75).applyQuaternion(t.quat).add(t.pos),
      n = e.clone(),
      o = this.world.groundAt(n.x, n.z, 120);
    n.y = o === -1 / 0 ? e.y : o + 0.5;
    const a = new k(0, GW, 0).applyQuaternion(t.quat);
    (this.projectiles.spawn(mt.NUCLEAR, i, a, !0, {
      guide: n,
      speed: sP,
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
      let n = Math.min(126, Math.floor(i) + 16);
      n >= Math.max(2, Math.floor(i) - 16);
      n--
    ) {
      const o = this.world.getBlock(e, n, t);
      if (this.world.isWaterAt(e, n, t) && !this.world.isWaterAt(e, n + 1, t))
        return n + 0.86;
      if (o !== 0 && !this.world.isWaterAt(e, n, t)) return null;
    }
    return null;
  }
  waterColumnAt(e, t) {
    const i = Math.floor(e),
      n = Math.floor(t);
    let o = -1;
    for (let r = 126; r >= 2; r--) {
      if (this.world.isWaterAt(i, r, n) && !this.world.isWaterAt(i, r + 1, n)) {
        o = r;
        break;
      }
      if (this.world.isSolidAt(i, r, n)) return null;
    }
    if (o < 0) return null;
    let a = o;
    for (; a > 1 && this.world.isWaterAt(i, a - 1, n);) a--;
    return { surface: o + 0.86, floor: a };
  }
  driveShip(e, t, i, n) {
    if (e.type === L.SUBMARINE) {
      this.driveSubmarine(e, t, i, n);
      return;
    }
    ((this.camYaw -= i.mdx * 0.0022),
      (this.camPitch = Oe(this.camPitch - i.mdy * 0.0022, -0.3, 1.25)));
    const o = e.type === L.BOAT;
    !o && n && i.clickR && e.fireCd2 <= 0 && this.hooks.openMap("carrier");
    const a = (o ? 14 : 5) * this.speedMul(e),
      r = n ? (i.action("forward") ? 1 : 0) - (i.action("back") ? 1 : 0) : 0,
      l = n ? (i.action("left") ? 1 : 0) - (i.action("right") ? 1 : 0) : 0;
    ((e.speed += Oe(
      r * (r > 0 ? a : a * 0.4) - e.speed,
      -(o ? 5 : 1.2) * t,
      (o ? 5 : 1.2) * t,
    )),
      (e.yaw += l * t * (o ? 0.9 : 0.14) * Oe(Math.abs(e.speed) / 3, 0.15, 1)));
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
        (e.pos.y = ns(e.pos.y, m - (o ? 0.25 : 1.2), Math.min(1, 4 * t))),
      (e.roll = ns(
        e.roll,
        -l * 0.06 * Oe(Math.abs(e.speed) / a, 0, 1),
        Math.min(1, 4 * t),
      )),
      e.quat.setFromEuler(new pi(0, e.yaw, e.roll, "YXZ")),
      e.vel.set(c * e.speed, e.vy, h * e.speed),
      o && e.turret)
    ) {
      let y =
        Math.atan2(
          Math.sin(this.camYaw - e.yaw),
          Math.cos(this.camYaw - e.yaw),
        ) - e.turret.rotation.y;
      if (
        ((y = Math.atan2(Math.sin(y), Math.cos(y))),
        (e.turret.rotation.y += Oe(y, -3.5 * t, 3.5 * t)),
        (e.aux1 = e.turret.rotation.y),
        (e.aux2 = Oe(this.camPitch * 0.7, -0.2, 0.7)),
        e.barrel && (e.barrel.rotation.x = e.aux2),
        n && i.mouseL && e.fireCd <= 0)
      ) {
        e.fireCd = 0.09;
        const b = e.yaw + e.aux1,
          S = e.aux2,
          M = new k(
            -Math.sin(b) * Math.cos(S),
            Math.sin(S),
            -Math.cos(b) * Math.cos(S),
          ),
          E = -Math.sin(e.yaw),
          A = -Math.cos(e.yaw),
          T = e.pos
            .clone()
            .add(new k(E * 1.4, 1.5, A * 1.4))
            .addScaledVector(M, 1.4);
        ((M.x += (Math.random() - 0.5) * 0.025),
          (M.y += (Math.random() - 0.5) * 0.025),
          (M.z += (Math.random() - 0.5) * 0.025),
          M.normalize(),
          this.hooks.mgFire(T, M));
      }
    }
  }
  driveSubmarine(e, t, i, n) {
    ((this.camYaw -= i.mdx * 0.0022),
      (this.camPitch = Oe(this.camPitch - i.mdy * 0.0022, -0.55, 1.2)),
      n && i.clickR && e.fireCd2 <= 0 && this.hooks.openMap("nuclear"));
    const o = n
        ? (i.action("forward") ? 1 : 0) - (i.action("back") ? 1 : 0)
        : 0,
      a = n ? (i.action("left") ? 1 : 0) - (i.action("right") ? 1 : 0) : 0,
      r = 8.2;
    ((e.speed += Oe(o * (o > 0 ? r : r * 0.45) - e.speed, -3.4 * t, 3.4 * t)),
      (e.yaw += a * t * 0.58 * Oe(Math.abs(e.speed) / 2.5, 0.18, 1)));
    const l = n ? (i.action("jump") ? 1 : 0) - (i.action("crouch") ? 1 : 0) : 0,
      c = -Math.sin(e.yaw),
      h = -Math.cos(e.yaw),
      d = e.pos.x + c * e.speed * t,
      u = e.pos.z + h * e.speed * t,
      f = this.waterColumnAt(e.pos.x, e.pos.z),
      p = -h,
      m = c,
      g = Math.sign(e.speed) || (o >= 0 ? 1 : -1),
      y = d + c * g * 4.8,
      b = u + h * g * 4.8,
      S = [
        this.waterColumnAt(d, u),
        this.waterColumnAt(d + p * 1.8, u + m * 1.8),
        this.waterColumnAt(d - p * 1.8, u - m * 1.8),
        this.waterColumnAt(y, b),
        this.waterColumnAt(y + p * 1.8, b + m * 1.8),
        this.waterColumnAt(y - p * 1.8, b - m * 1.8),
      ];
    if (!f) ((e.speed = 0), (e.vy = 0));
    else {
      const E = Math.max(1.05, f.surface - (f.floor + 2.25));
      (e.subDepthReady ||
        ((e.subDepth = Oe(f.surface - e.pos.y, 1.05, E)),
        (e.subDepthReady = !0)),
        (e.subDepth = Oe(e.subDepth - l * 3.1 * t, 1.05, E)));
      const A = S.every((W) => !!W),
        T = A
          ? Math.max(f.floor + 2.25, ...S.map((W) => W.floor + 2.25))
          : f.floor + 2.25,
        x = A
          ? Math.min(f.surface - 0.82, ...S.map((W) => W.surface - 0.82))
          : f.surface - 0.82,
        R = A && T <= x,
        _ = R && T > e.pos.y + 0.08;
      Math.abs(e.speed) > 0.1 && (!R || _)
        ? (e.speed *= Math.max(0, 1 - 7 * t))
        : ((e.pos.x = d), (e.pos.z = u));
      const C = this.waterColumnAt(e.pos.x, e.pos.z) ?? f,
        P = C.floor + 2.25,
        O = C.surface - 0.82,
        B = R ? T : P,
        H = Oe(Math.max(C.surface - e.subDepth, B), P, O),
        D = Oe((H - e.pos.y) * 5, -4.8, 4.8);
      e.vy += (D - e.vy) * Math.min(1, 5.5 * t);
      let U = e.pos.y + e.vy * t;
      (U < P
        ? ((U = Math.min(P, e.pos.y + 4.8 * t)),
          U >= P - 0.002 && (e.vy = Math.max(0, e.vy)))
        : U > O &&
          ((U = Math.max(O, e.pos.y - 4.8 * t)),
          U <= O + 0.002 && (e.vy = Math.min(0, e.vy))),
        (e.pos.y = U));
    }
    ((e.roll = ns(
      e.roll,
      -a * 0.12 * Oe(Math.abs(e.speed) / r, 0, 1),
      Math.min(1, 3 * t),
    )),
      (e.pitch = ns(
        e.pitch,
        Oe(-e.vy * 0.035, -0.18, 0.18),
        Math.min(1, 3.4 * t),
      )),
      e.quat.setFromEuler(new pi(e.pitch, e.yaw, e.roll, "YXZ")),
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
    for (const t of O1[e.type] ?? [])
      if (
        e.turret &&
        (e.type === L.TANK || e.type === L.BTR_TURRET) &&
        t.min.y >= 1.2
      ) {
        const i = e.turret.position.clone().multiply(En(e.type));
        yield {
          box: t.clone().translate(i.clone().negate()),
          pos: i.clone().applyQuaternion(e.quat).add(e.pos),
          quat: e.quat.clone().multiply(e.turret.quaternion),
        };
      } else yield { box: t, pos: e.pos, quat: e.quat };
  }
  standingSurface(e, t = e) {
    let i = null;
    for (const n of this.vehicles.values())
      if (!(
        n.planet !== this.currentPlanet ||
        Math.hypot(e.x - n.pos.x, e.z - n.pos.z) > 30
      ))
        for (const o of this.contactBodies(n)) {
          const a = c1(e, o.pos, o.quat, o.box);
          a === null ||
            t.y < a - 0.18 ||
            e.y > a + 0.65 ||
            ((!i || a > i.y) && (i = { y: a, ...this.surfaceVel(n, e) }));
        }
    return i;
  }
  resolvePlayerCollision(e, t, i, n, o = e.clone()) {
    for (const a of this.vehicles.values()) {
      if (
        a === this.mine ||
        a.planet !== this.currentPlanet ||
        Math.hypot(e.x - a.pos.x, e.z - a.pos.z) > 30
      )
        continue;
      const r = [...this.contactBodies(a)].sort(
        (l, c) =>
          (c1(e, c.pos, c.quat, c.box) ?? -1 / 0) -
          (c1(e, l.pos, l.quat, l.box) ?? -1 / 0),
      );
      for (const l of r) bQ(e, t, o, l.pos, l.quat, l.box, i, n);
    }
  }
  deckInfo(e) {
    for (const t of this.vehicles.values()) {
      if (t.type !== L.CARRIER) continue;
      const i = e.clone().sub(t.pos).applyQuaternion(t.quat.clone().invert());
      if (
        Math.abs(i.x) <= 6 &&
        Math.abs(i.z) <= 21 &&
        i.y >= 2.2 &&
        i.y <= 5.5
      ) {
        const n = this.surfaceVel(t, e),
          o = c1(e, t.pos, t.quat, s7);
        if (o !== null) return { y: o, vx: n.vx, vz: n.vz };
      }
    }
    return null;
  }
  deckYAt(e, t, i) {
    const n = this.deckInfo(this.tmpDeckV.set(e, t, i));
    return n ? n.y : -1 / 0;
  }
  deckUnder(e) {
    const t = this.deckInfo(this.tmpDeckV.set(e.pos.x, e.pos.y + 0.3, e.pos.z));
    return t && Math.abs(e.pos.y - t.y) < 0.8 ? t : null;
  }
  applyDeckGlue(e) {
    if (e.driver !== -1 || e.type === L.CARRIER)
      return (this.deckGlue.delete(e.id), !1);
    for (const t of this.vehicles.values()) {
      if (t.type !== L.CARRIER) continue;
      const i = t === this.mine && this.mineSeat === 0,
        n = i ? t.pos : t.target.pos,
        o = i ? t.quat : t.target.quat,
        a = this.tmpGlueV
          .copy(e.target.pos)
          .sub(n)
          .applyQuaternion(this.tmpGlueQ.copy(o).invert());
      if (Math.abs(a.x) > 6.2 || Math.abs(a.z) > 21.2 || a.y < 2 || a.y > 6.5)
        continue;
      const r = Xl(e.target.quat) - Xl(o);
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
      const c = Xl(t.quat) + l.relYaw;
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
          !oc(this.mine.type, this.mineSeat) &&
          (this.mine.type === L.BOAT || on(this.mine.type));
  }
  mySeatGun() {
    return this.mine && !this.remoteView && this.mineSeat > 0
      ? oc(this.mine.type, this.mineSeat)
      : null;
  }
  seatGunCd = 0;
  tmpGunA = new k();
  tmpGunB = new k();
  seatGunsOf(e) {
    if (e.seatGuns?.root === e.group) return e.seatGuns.guns;
    const t = new Map();
    for (let i = 1; i <= (r1[e.type] ?? 0); i++) {
      const n = oc(e.type, i)
          ? e.group.getObjectByName("seat-gun-" + i)
          : void 0,
        o = n?.getObjectByName("seat-gun-pitch");
      n && o && t.set(i, { yaw: n, pitch: o, rest: n.rotation.y, kick: 0 });
    }
    return ((e.seatGuns = { root: e.group, guns: t }), t);
  }
  poseSeatGuns(e, t) {
    const i = this.seatGunsOf(e);
    if (!i.size) return;
    let n = !1;
    for (const [o, a] of i) {
      ((a.kick = Math.max(0, a.kick - t * 11)),
        (a.pitch.position.z = 0.05 * a.kick));
      let r = null;
      const l = e === this.mine && this.mineSeat === o && !this.remoteView;
      let c = -1;
      for (const [m, g] of e.passengerSeats) g === o && (c = m);
      l &&
        this.aimValid &&
        (r = this.tmpGunA.copy(
          this.gunAimTarget(e, oc(e.type, o).range, 90, 5),
        ));
      const h = c < 0 && !l ? e.seatBots?.get(o) : void 0;
      if ((this.seatFigure(e, o, a.yaw, h?.state === 1), h?.state === 1)) {
        n || (e.group.updateMatrixWorld(!0), (n = !0));
        const m = Math.cos(h.pitch);
        r = a.pitch
          .getWorldPosition(this.tmpGunA)
          .add(
            this.tmpGunB
              .set(
                -Math.sin(h.yaw) * m,
                Math.sin(h.pitch),
                -Math.cos(h.yaw) * m,
              )
              .multiplyScalar(60),
          );
      } else if (c >= 0 && !l) {
        const m = this.hooks.lookOf?.(c);
        if (m) {
          n || (e.group.updateMatrixWorld(!0), (n = !0));
          const g = Math.cos(m.pitch);
          r = a.pitch
            .getWorldPosition(this.tmpGunA)
            .add(
              this.tmpGunB
                .set(
                  -Math.sin(m.yaw) * g,
                  Math.sin(m.pitch),
                  -Math.cos(m.yaw) * g,
                )
                .multiplyScalar(60),
            );
        }
      }
      const d = C8(e.type);
      let u = a.rest,
        f = e.type === L.HELI ? -0.25 : 0;
      if (r && a.yaw.parent) {
        n || (e.group.updateMatrixWorld(!0), (n = !0));
        const m = a.yaw.parent
          .worldToLocal(this.tmpGunB.copy(r))
          .sub(a.yaw.position)
          .divide(a.yaw.scale);
        ((m.y -= a.pitch.position.y),
          (u = Math.atan2(-m.x, -m.z)),
          (f = Oe(Math.atan2(m.y, Math.hypot(m.x, m.z)), d.down, d.up)),
          d.swing < Math.PI &&
            (u =
              a.rest +
              Oe(
                Math.atan2(Math.sin(u - a.rest), Math.cos(u - a.rest)),
                -d.swing,
                d.swing,
              )));
      }
      const p = Math.min(1, t * (h?.state === 1 ? 9 : 18));
      ((a.yaw.rotation.y +=
        Math.atan2(
          Math.sin(u - a.yaw.rotation.y),
          Math.cos(u - a.yaw.rotation.y),
        ) * p),
        (a.pitch.rotation.x += (f - a.pitch.rotation.x) * p));
    }
  }
  onSeatGun(e, t, i, n, o, a) {
    const r = this.vehicles.get(e);
    if (!r) return;
    const l = (r.seatBots ??= new Map()),
      c = l.get(t);
    if (!i) {
      (c?.figure && c.figure.removeFromParent(), l.delete(t));
      return;
    }
    c
      ? ((c.state = i),
        i === 1 && ((c.yaw = n), (c.pitch = o)),
        a && (c.name = a))
      : l.set(t, { state: i, name: a, yaw: n, pitch: o });
  }
  seatBot(e) {
    return this.mine?.seatBots?.get(e);
  }
  seatFigure(e, t, i, n) {
    const o = e.seatBots?.get(t);
    if (
      !o ||
      (o.figure &&
        (!n || o.figure.parent !== i) &&
        (o.figure.removeFromParent(), (o.figure = void 0)),
      !n || o.figure || e.type !== L.HELI)
    )
      return;
    const a = this.hooks.seatFigure?.();
    a && (a.position.set(0, -0.7, 0.44), i.add(a), (o.figure = a));
  }
  botSeatShot(e) {
    let t = null;
    for (const o of this.vehicles.values())
      if (!(!o.seatBots?.size || o.pos.distanceToSquared(e) > 36))
        for (const [a, r] of o.seatBots) {
          if (r.state !== 1) continue;
          const l = this.seatGunsOf(o).get(a),
            c = l
              ? l.pitch.getWorldPosition(this.tmpGunA).distanceTo(e)
              : o.pos.distanceTo(e);
          c < 3.2 && (!t || c < t.d) && (t = { v: o, seat: a, d: c });
        }
    if (!t) return null;
    const i = oc(t.v.type, t.seat),
      n = this.seatGunsOf(t.v).get(t.seat);
    return (
      i &&
        n &&
        r0(t.v) &&
        t.v.group.visible &&
        (t.v.group.updateMatrixWorld(!0),
        n.pitch.localToWorld(e.set(0, 0.012, nw)),
        (n.kick = 1),
        this.effects.flash(e, i.heavy ? 2 : 1.5, 0.05, 16760944)),
      i
    );
  }
  remoteSeatShot(e, t) {
    for (const i of this.vehicles.values()) {
      const n = i.passengerSeats.get(e);
      if (!n) continue;
      const o = oc(i.type, n);
      if (!o) return null;
      const a = r0(i) && i.group.visible ? this.seatGunsOf(i).get(n) : void 0;
      return (
        a &&
          ((a.kick = 1),
          this.effects.flash(t, o.heavy ? 2 : 1.5, 0.05, 16760944)),
        o
      );
    }
    return null;
  }
  seatGunHeat = 0;
  seatGunHot = !1;
  seatGunQuiet = 9;
  seatGunKey = -1;
  seatGunLaid = { arc: !0, laid: !0, bearing: 0 };
  static seatGunHeatPerRound(e) {
    return e.heavy ? 1 / 72 : e.interval > 0.08 ? 1 / 88 : 1 / 112;
  }
  static SEAT_GUN_COOL = 3.6;
  fireSeatGun(e, t, i, n) {
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
          this.seatGunHeat - t / Qn.SEAT_GUN_COOL,
        )),
      this.seatGunHot && this.seatGunHeat <= 0.38 && (this.seatGunHot = !1),
      !o || !a)
    )
      return;
    (e.group.position.copy(e.pos),
      e.group.quaternion.copy(e.quat),
      e.group.updateMatrixWorld(!0));
    const l = a.pitch.localToWorld(new k(0, 0.012, nw)),
      c = l
        .clone()
        .sub(a.pitch.localToWorld(new k(0, 0.012, 0)))
        .normalize(),
      h = this.tmpSeatForward
        .copy(c)
        .applyQuaternion(this.tmpMotionQuat.copy(e.quat).invert()),
      d = sJ(e.type, this.mineSeat, h);
    let u = c,
      f = 0;
    if (this.aimValid) {
      const m = this.gunAimTarget(e, o.range, 90, 5).clone().sub(l).normalize();
      ((f = c.angleTo(m)), f < 0.07 && (u = m));
    }
    if (
      ((this.seatGunLaid.arc = d && f <= 0.5),
      (this.seatGunLaid.laid = f < 0.07),
      (this.seatGunLaid.bearing =
        ((((Math.atan2(h.x, -h.z) * 180) / Math.PI) % 360) + 360) % 360),
      !n ||
        !i.mouseL ||
        this.seatGunCd > 0 ||
        this.seatGunHot ||
        this.hooks.seatGunBusy?.() ||
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
        this.seatGunHeat + Qn.seatGunHeatPerRound(o),
      )),
      this.seatGunHeat >= 1 &&
        ((this.seatGunHot = !0), this.hooks.seatGunOverheat?.(l)),
      (a.kick = 1),
      this.hooks.seatGunFire?.(l, u, o),
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
          steps: Qn.zoomLevels(t.type, this.mineSeat).length,
          heat: this.seatGunHeat,
          hot: this.seatGunHot,
          cooling: this.seatGunHot
            ? Math.max(
                0,
                (this.seatGunHeat - 0.38) * Qn.SEAT_GUN_COOL +
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
      n = i && t ? this.seatGunsOf(t).get(this.mineSeat) : void 0;
    if (!t || !i || !n) return !1;
    t.group.updateMatrixWorld(!0);
    const o = n.pitch.localToWorld(this.tmpGunA.set(0, 0.012, nw)),
      a = this.tmpGunB
        .copy(o)
        .sub(n.pitch.localToWorld(this.tmpBoreA.set(0, 0.012, 0)))
        .normalize(),
      r = this.world.raycast(o, a, i.range),
      l = this.rayHit(o, a, r?.dist ?? i.range);
    return (
      e
        .copy(o)
        .addScaledVector(a, l && l.id !== t.id ? l.dist : (r?.dist ?? 90)),
      !0
    );
  }
  passengerCanRepair() {
    return this.remoteView ? !1 : this.mine !== null && this.mineSeat > 0;
  }
  static hasOpenSeats(e) {
    return Cy[e] !== void 0;
  }
  seatPos(e, t, i) {
    const n = Cy[e.type] ?? Cy[L.BOAT];
    let o = n[(t - 1) % n.length];
    return (i.set(o[0], o[1], o[2]).applyQuaternion(e.quat).add(e.pos), i);
  }
  remoteSeatPose(e, t, i, n) {
    const o = this.vehicles.get(e);
    if (!o || t < 0 || !Qn.hasOpenSeats(o.type)) return null;
    if (t === 0) {
      const l = {
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
          .set(l[0], l[1], l[2])
          .multiply(En(o.type))
          .applyQuaternion(o.quat)
          .add(o.pos),
        n?.copy(o.quat),
        Xl(o.quat)
      );
    }
    if (
      (this.seatPos(o, t, i),
      o.type !== L.HELI && i.add(new k(0, -0.55, 0).applyQuaternion(o.quat)),
      o.type === L.HELI)
    ) {
      const r =
        this.seatGunsOf(o).get(t)?.yaw.rotation.y ??
        (t === 1 ? Math.PI / 2 : -Math.PI / 2);
      return (
        n?.copy(o.quat).multiply(new hi().setFromAxisAngle(Xt.DEFAULT_UP, r)),
        Xl(o.quat) + r
      );
    }
    n?.copy(o.quat);
    const a = this.tmpSeatForward.set(0, 0, -1).applyQuaternion(o.quat);
    return Math.atan2(-a.x, -a.z);
  }
  detailEuler = new pi();
  spinProps(e, t, i) {
    if (e.type !== L.TURRET) {
      if (e.type === L.CARRIER) {
        if (e.props[0]) {
          const n =
            e.carrierReadyAt > Date.now() &&
            e.carrierReadyAt - Date.now() > (pb - 3) * 1e3;
          e.props[0].rotation.x +=
            ((n ? -1.15 : 0) - e.props[0].rotation.x) * (1 - Math.exp(-4 * t));
        }
        return;
      }
      if (e.type === L.HELI) {
        const n =
          e.driver !== -1 ||
          !!e.serverAuto ||
          !!e.radioActive ||
          (e === this.mine && this.mineSeat === 0 && this.remoteView);
        e.rotorPower = Oe(
          (e.rotorPower ?? (e.vel.length() > 2 ? 1 : 0)) + (n ? t / 2 : -t / 3),
          0,
          1,
        );
      }
      for (const n of e.props) {
        const o = n.userData.axis ?? "y",
          a =
            e.type === L.SUBMARINE
              ? i * 3
              : e.driver !== -1 ||
                  e.serverAuto ||
                  e.radioActive ||
                  (e === this.mine && this.mineSeat === 0) ||
                  i > 0.2
                ? e.type === L.HELI
                  ? (o === "x" ? 105 : 35) * (e.rotorPower ?? 0)
                  : e.type === L.PLANE
                    ? 35 + Math.abs(i) * 2
                    : 85
                : 0;
        ((n.userData.rpm =
          (n.userData.rpm ?? 0) +
          (a - (n.userData.rpm ?? 0)) * (1 - Math.exp(-t * 1.8))),
          (n.rotation[o] =
            (n.rotation[o] + n.userData.rpm * t) % (Math.PI * 2)));
        const r = n.userData.blades;
        if (r) {
          const c = 0.075 * (1 - Math.min(1, n.userData.rpm / 24));
          for (const h of r) h.rotation.z = -c;
        }
        const l = n.userData.blur;
        if (l) {
          const c = l.material;
          ((c.opacity = Math.min(0.15, n.userData.rpm / 450)),
            (l.visible = c.opacity > 0.01));
        }
      }
    }
  }
  kickHull(e, t, i) {
    ((e.chassis.vp += Math.cos(t) * i), (e.chassis.vr -= Math.sin(t) * i));
  }
  animateChassis(e, t, i, n, o = !1) {
    const a = e.chassis;
    if (t <= 0) return;
    const r = Math.min(t, 1 / 30),
      l = (i - a.speed) / r;
    ((a.speed = i),
      (a.accel += (Oe(l, -12, 12) - a.accel) * (1 - Math.exp(-6 * r))));
    let c = 0,
      h = 0;
    const d = e.type === L.BOAT;
    if (d)
      ((a.bob += r),
        (c =
          Oe(Math.abs(i) / 9, 0, 1) * 0.07 +
          Math.sin(a.bob * 1.3) * 0.018 +
          a.accel * 0.004),
        (h = Math.sin(a.bob * 0.9 + 1.7) * 0.025));
    else {
      const g = e.type === L.TANK;
      ((c = Oe(a.accel * (g ? 0.006 : 0.01), -0.05, 0.05)),
        (h = Oe(
          -e.yawRate * Math.abs(i) * (g ? 0.008 : 0.014),
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
      const g = (e.pos.y - a.lastY) / r,
        y = Oe((g - a.climb) / r, -40, 40);
      ((a.lastY = e.pos.y),
        (a.climb = g),
        (a.vh += (-y * 0.55 - a.heave * 190 - a.vh * 13) * r),
        (a.heave = Oe(a.heave + a.vh * r, -0.11, 0.07)));
    }
    if (
      (e.sprung &&
        (e.sprung.rotation.set(a.pitch, 0, a.roll),
        (e.sprung.position.y = d ? 0 : a.heave)),
      e.launcher)
    ) {
      let g = 0;
      e.type === L.HIMARS
        ? (g =
            Date.now() <
            Math.max(e.himarsPendingUntil ?? 0, e.himarsServerReadyAt ?? 0)
              ? 0.95
              : 0)
        : (g =
            Math.abs(Math.atan2(Math.sin(e.aux1), Math.cos(e.aux1))) > 0.05 ||
            e.fireCd > 0
              ? 1
              : 0.12);
      const y =
          e.launcher.userData.elevation ?? (e.type === L.PATRIOT ? 0.12 : 0),
        b = y + Oe(g - y, -0.6 * r, 0.6 * r);
      ((e.launcher.userData.elevation = b),
        (e.launcher.rotation.x = e.type === L.HIMARS ? -b : b));
    }
    const p = kJ[e.type],
      m = e.driver !== -1 || !!e.serverAuto || Math.abs(i) > 0.3;
    if (p && m && !o && wt(1) && n < 1600) {
      const g = Oe(Math.abs(a.accel) / 4 + Math.abs(i) / 12, 0, 1);
      if (((a.exhaust -= r * (1.5 + g * 7)), a.exhaust <= 0)) {
        a.exhaust = 1;
        const y = this.tmpExhaust
          .copy(p)
          .multiply(En(e.type))
          .applyQuaternion(e.quat)
          .add(e.pos);
        this.effects.exhaust(y, e.vel, g);
      }
    }
  }
  tmpExhaust = new k();
  animateTracks(e, t, i) {
    if (e.trackParts.length !== 0) {
      e.trackPhase += i * t;
      for (const n of e.trackParts) n.userData.track && S7(n, -e.trackPhase);
    }
  }
  groundSurface = {
    ground: (e, t, i) =>
      Math.max(MZ(this.world, e, t, i), this.deckYAt(e, i, t)),
    blocked: (e, t, i) =>
      this.world.isSolidAt(e, t, i) &&
      !en(this.world.getBlock(Math.floor(e), Math.floor(t), Math.floor(i))),
    hazard: (e, t, i) => {
      const n = this.world.getBlock(
        Math.floor(e),
        Math.floor(t),
        Math.floor(i),
      );
      return (
        n === v.LAVA ||
        zc(n) ||
        (Io(n) &&
          !(
            this.world.getMeta(Math.floor(e), Math.floor(t), Math.floor(i)) & fn
          ))
      );
    },
  };
  trafficClear(e, t, i, n, o) {
    const a = { id: e.id, type: e.type, x: t.x, y: t.y, z: t.z, yaw: n },
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
    return r7(a, { ...a, x: i.x, y: i.y, z: i.z, yaw: o }, r, 0.35);
  }
  moveGroundHull(e, t, i) {
    e.ride?.top !== void 0 &&
      Math.abs(e.ride.top - e.pos.y) > 8 &&
      (e.ride = void 0);
    const n = vJ.set(
      e.pos.x,
      e.ride?.top !== void 0 ? e.ride.top + 0.03 : e.pos.y,
      e.pos.z,
    );
    (!this.trafficClear(e, e.pos, e.pos, i, e.yaw) ||
      !XR(this.groundSurface, n, e.pos.x, e.pos.z, e.yaw, e.type, 0, i)) &&
      (e.yaw = i);
    const o = e.quat.clone(),
      a = e.pos.clone(),
      r = -Math.sin(e.yaw),
      l = -Math.cos(e.yaw),
      c = e.pos.x + r * e.speed * t,
      h = e.pos.z + l * e.speed * t,
      d = XR(this.groundSurface, n, c, h, e.yaw, e.type, 0.03, e.yaw),
      u =
        !!d && this.trafficClear(e, e.pos, new k(d.x, d.y, d.z), e.yaw, e.yaw);
    if (d && u)
      (Math.abs(e.speed) > 0.01 &&
        (zZ(this.world, e.type, c, d.y, h, e.yaw).length
          ? this.requestRam(e, c, h, e.speed)
          : e.speed > 0.3 &&
              ow.has(e.type) &&
              pg(this.world, e.type, c, e.pos.y, h, e.yaw, 1).some(
                (g) => g.tree,
              )
            ? this.requestRam(e, c, h, e.speed)
            : Math.abs(e.speed) > 2.7 &&
              pg(
                this.world,
                e.type,
                c,
                e.pos.y,
                h,
                e.yaw,
                e.speed >= 0 ? 1 : -1,
              ).some((g) => ra(g.id) || g.id === v.CACTUS) &&
              this.requestRam(e, c, h, e.speed)),
        (e.pos.x = d.x),
        (e.pos.z = d.z));
    else {
      const g =
          !d && Math.abs(e.speed) > 0.01
            ? pg(
                this.world,
                e.type,
                c,
                e.pos.y,
                h,
                e.yaw,
                e.speed >= 0 ? 1 : -1,
              )
            : [],
        y = this.ramPushing(e, g);
      (!d &&
        (y || Math.abs(e.speed) > 2.7) &&
        Math.hypot(c - e.pos.x, h - e.pos.z) > 1e-4 &&
        ow.has(e.type) &&
        this.requestRam(e, c, h, e.speed),
        (e.speed = y ? this.ramPushSpeed(e) : 0));
    }
    const f = (e.ride ??= {
      y: e.pos.y,
      vy: e.vy,
      pitch: e.pitch,
      roll: e.roll,
      pitchRate: 0,
      rollRate: 0,
    });
    ((f.y = e.pos.y), (f.vy = e.vy), (f.pitch = e.pitch), (f.roll = e.roll));
    const p = CQ(
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
    (PQ(this.groundSurface, f, e.pos.x, e.pos.z, e.yaw, e.type),
      (e.pos.y = f.y),
      (e.vy = f.vy),
      (e.pitch = f.pitch),
      (e.roll = f.roll),
      p > 3 && e.chassis && (e.chassis.vh -= Math.min(2.2, p * 0.16)),
      e.quat.setFromEuler(yJ.set(e.pitch, e.yaw, e.roll, "YXZ")));
    const m = (g, y, b) => this.groundSurface.blocked(g, y, b);
    if (zh(e.type, a, e.pos, o, e.quat, m)) {
      const g = a.clone();
      if (
        ((g.y = Math.max(a.y, e.pos.y)),
        g.y === a.y ||
          zh(e.type, a, g, o, o, m) ||
          zh(e.type, g, e.pos, o, e.quat, m))
      ) {
        const y =
            Math.abs(e.speed) > 0.01
              ? pg(this.world, e.type, c, a.y, h, e.yaw, e.speed >= 0 ? 1 : -1)
              : [],
          b = this.ramPushing(e, y);
        b && ow.has(e.type) && this.requestRam(e, c, h, e.speed);
        const S = b ? this.ramPushSpeed(e) : 0;
        (e.pos.copy(a), e.quat.copy(o), (e.yaw = i), (e.speed = S), (e.vy = 0));
        const M = new pi().setFromQuaternion(o, "YXZ");
        ((e.pitch = M.x),
          (e.roll = M.z),
          e.ride && ((e.ride.pitchRate = 0), (e.ride.rollRate = 0)),
          zR(e.type, e.pos, e.quat, m));
      }
    }
    e.vel.copy(e.pos).sub(a).divideScalar(Math.max(t, 0.001));
  }
  ramPushing(e, t) {
    const i = e.pos.y + eh(e.type).step - 1;
    return (
      t.length > 0 &&
      t.some((n) => Fm(n.id) || en(n.id) || zc(n.id) || Io(n.id)) &&
      t.every((n) => d7(n.id) || n.y <= i) &&
      Math.abs(e.speed) > 0.02
    );
  }
  ramPushSpeed(e) {
    return Math.sign(e.speed) * Math.min(Math.abs(e.speed), 2.2);
  }
  gunZoom = 1;
  zoomIdx = 0;
  zoomVehicle = -1;
  static zoomLevels(e, t = 0) {
    return t > 0
      ? oc(e, t)
        ? e === L.HELI
          ? [1, 2, 3]
          : [1, 2, 4]
        : [1]
      : e === L.TANK
        ? hs.tankGun
          ? [1, 2, 4, 8, 16]
          : [1, 2, 4, 8]
        : e === L.BTR_TURRET
          ? [1, 2.5, 5]
          : [1];
  }
  updateSightZoom(e, t, i, n) {
    const o = this.mineSeat,
      a = Qn.zoomLevels(e.type, o),
      r = e.id * 8 + o;
    if (
      (this.zoomVehicle !== r &&
        ((this.zoomVehicle = r), (this.zoomIdx = 0), (this.gunZoom = 1)),
      a.length < 2)
    ) {
      ((this.zoomIdx = 0), (this.gunZoom = 1));
      return;
    }
    (n &&
      i.wheel &&
      (this.zoomIdx = Oe(this.zoomIdx - Math.sign(i.wheel), 0, a.length - 1)),
      n && i.aimTap && (this.zoomIdx = (this.zoomIdx + 1) % a.length));
    const l =
        n && !i.mobile && (o > 0 || e.type === L.BTR_TURRET) && i.mouseR
          ? 1
          : 0,
      c = o > 0 && this.camMode !== 0 ? 1 : a[Math.max(this.zoomIdx, l)];
    ((this.gunZoom += (c - this.gunZoom) * (1 - Math.exp(-14 * t))),
      Math.abs(this.gunZoom - c) < 0.01 && (this.gunZoom = c));
  }
  speedRush() {
    const e = this.mine;
    return !e || !on(e.type) || (hs.speed >= 1 && hs.shown <= 1)
      ? 0
      : Oe((e.vel.length() / (_y[e.type] * hs.speed) - 0.4) / 0.5, 0, 1);
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
      (e.type === L.TANK || e.type === L.BTR_TURRET) &&
      (this.camMode === 0 || this.gunZoom > 1.05)
    );
  }
  tankBore(e, t, i) {
    if (!e.barrel) return !1;
    e.group.updateMatrixWorld(!0);
    const n = e.type === L.TANK ? -2.4 : F8,
      o = e.barrel.localToWorld(this.tmpBoreA.set(0, 0, 0));
    return (
      e.barrel.localToWorld(t.set(0, 0, n)),
      i.copy(t).sub(o).normalize(),
      !0
    );
  }
  tmpBoreA = new k();
  tmpAimTarget = new k();
  tmpAimLocal = new k();
  tmpPivot = new k();
  tmpBallistic = new k();
  gunAimTarget(e, t, i, n) {
    const o = hs.tankGun && e.type === L.TANK && this.world.generatedTop;
    o && (t = 2400);
    const a = this.world.raycast(this.aimPos, this.aimDir, t);
    let r = a ? a.dist : i;
    if (!a && o) {
      const c = performance.now();
      (c - this.farRangeAt > 100 &&
        ((this.farRangeAt = c), (this.farRange = this.generatedRange(t) ?? t)),
        (r = this.farRange));
    }
    const l = this.rayHit(this.aimPos, this.aimDir, r);
    return (
      l && l.id !== e.id && (r = l.dist),
      this.tmpAimTarget
        .copy(this.aimPos)
        .addScaledVector(this.aimDir, Math.max(r, n))
    );
  }
  farRange = 350;
  farRangeAt = 0;
  generatedRange(e) {
    const t = this.world.generatedTop,
      i = this.aimPos,
      n = this.aimDir;
    let o = 0;
    for (let a = 4; a <= e; a += a < 200 ? 4 : 8) {
      const r = i.x + n.x * a,
        l = i.z + n.z * a;
      if (i.y + n.y * a <= t(r, l) + 1) {
        let c = o,
          h = a;
        for (let d = 0; d < 6; d++) {
          const u = (c + h) / 2;
          i.y + n.y * u <= t(i.x + n.x * u, i.z + n.z * u) + 1
            ? (h = u)
            : (c = u);
        }
        return h;
      }
      o = a;
    }
    return null;
  }
  tankGunSolution(e, t = !1) {
    if (!this.aimValid || !e.turret || !e.barrel || !e.turret.parent)
      return null;
    const i = this.gunAimTarget(
      e,
      t ? Iv(e.type) : 700,
      t ? 110 : 350,
      t ? 8 : 14,
    );
    e.group.updateMatrixWorld(!0);
    const n = e.barrel.getWorldPosition(this.tmpPivot),
      o = Math.hypot(i.x - n.x, i.z - n.z),
      a = i.y - n.y,
      r = hs.shellSpeed || fb,
      l = r * r,
      c = OS * this.gravityScale,
      h = l * l - c * (c * o * o + 2 * a * l);
    if (!t && o > 1 && h >= 0) {
      const b = Math.atan((l - Math.sqrt(h)) / (c * o));
      i.y = n.y + Math.tan(b) * o;
    }
    const d = e.turret.parent
        .worldToLocal(this.tmpAimLocal.copy(i))
        .sub(e.turret.position),
      u = Math.atan2(-d.x, -d.z),
      f = Math.cos(-u),
      p = Math.sin(-u),
      m = d.x * -p + d.z * f,
      g = e.barrel.position,
      y = Math.atan2(d.y - g.y, -(m - g.z));
    return { yaw: u, pitch: y };
  }
  gunAimPoint(e) {
    const t = this.mine;
    if (!t || !t.barrel) return !1;
    const i = this.tmpBallistic,
      n = new k();
    if ((this.tankBore(t, i, n), t.type !== L.TANK)) {
      const c = this.world.raycast(i, n, 400);
      return (e.copy(i).addScaledVector(n, c ? c.dist : 400), !0);
    }
    const o = n.multiplyScalar(hs.shellSpeed || fb),
      a = OS * this.gravityScale,
      r = new k(),
      l = 1 / 20;
    for (let c = 0; c < 160; c++) {
      r.copy(o).multiplyScalar(l);
      const h = r.length();
      r.divideScalar(h);
      const d = this.world.raycast(i, r, h),
        u = this.rayHit(i, r, d ? d.dist : h),
        f = u ? u.dist : d?.dist;
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
        reloadMax: Qn.SEAT_GUN_COOL * 0.62,
        rounds: 0,
        magazine: 0,
        heat: t.heat,
        hot: t.hot,
      };
    if (!e || !this.inGunnerSight()) return null;
    if (e.type === L.TANK)
      return {
        kind: "tank",
        zoom: this.gunZoom,
        reload: Math.max(0, e.fireCd),
        reloadMax: 2.2,
        rounds: 0,
        magazine: 0,
      };
    const i = f8(e.type);
    return {
      kind: "btr",
      zoom: this.gunZoom,
      reload:
        !i.belt && (e.gunMagazine ?? Vl) >= Vl && e.fireCd > i.interval
          ? e.fireCd
          : 0,
      reloadMax: i.reload,
      rounds: e.gunMagazine ?? Vl,
      magazine: Vl,
    };
  }
  fireCdBefore = 0;
  fireCd2Before = 0;
  speedMul(e) {
    return (
      NZ(e.type, e.armor) *
      Jt.vehicleSpeed(e.type) *
      (Wb(e.type) ? 1 : hs.ground)
    );
  }
  practice(e, t, i) {
    const n = df(e.type),
      o = Math.max(Math.abs(e.speed), e.vel.length()) > 1;
    i && o && (Jt.add(n, t), Jt.stat("driveSeconds", t));
    const a = (l, c) =>
        c > l + 0.02
          ? Math.min(6, Math.max(0.15, (c - Math.max(0, l)) * 2))
          : 0,
      r = a(this.fireCdBefore, e.fireCd) + a(this.fireCd2Before, e.fireCd2);
    r > 0 && Jt.vehicleShot(e.type, r);
  }
  driveTank(e, t, i, n) {
    const o = 0.0022 / this.gunZoom;
    (n && (this.camYaw -= i.mdx * o),
      n && (this.camPitch = Oe(this.camPitch - i.mdy * o, -0.55, 1.25)));
    const a = n
        ? (i.action("forward") ? 1 : 0) - (i.action("back") ? 1 : 0)
        : 0,
      r = n ? (i.action("left") ? 1 : 0) - (i.action("right") ? 1 : 0) : 0,
      l = this.surfaceTraction(),
      c = Oe(Math.abs(e.speed) / 2.5, 0.5, 1) * l,
      h = e.yaw;
    e.yaw += r * t * 1.3 * c * (e.speed < -0.15 ? -1 : 1);
    const d = a * (a > 0 ? 5.8 : 3.1) * ub * this.speedMul(e),
      u = (a === 0 ? 3.2 : 4.4) * l;
    ((e.speed += Oe(d - e.speed, -u * t, u * t)),
      r !== 0 &&
        (e.speed *= Math.max(
          0,
          1 - 0.22 * l * Math.abs(r) * Math.abs(e.speed) * t,
        )),
      this.moveGroundHull(e, t, h));
    const f = this.deckUnder(e);
    if ((f && ((e.pos.x += f.vx * t), (e.pos.z += f.vz * t)), hs.tankGun)) {
      if (n && i.mouseR && e.fireCd2 <= 0) {
        e.fireCd2 = 0.085;
        const b = new k(0, 2.5, 0.35)
            .multiply(En(e.type))
            .applyQuaternion(e.quat)
            .add(e.pos),
          S = this.aimValid
            ? this.aimPos
                .clone()
                .addScaledVector(this.aimDir, 320)
                .sub(b)
                .normalize()
            : new k(
                -Math.sin(this.camYaw) * Math.cos(this.camPitch),
                Math.sin(this.camPitch),
                -Math.cos(this.camYaw) * Math.cos(this.camPitch),
              );
        ((S.x += (Math.random() - 0.5) * 0.012),
          (S.y += (Math.random() - 0.5) * 0.012),
          (S.z += (Math.random() - 0.5) * 0.012),
          S.normalize(),
          this.hooks.mgFire(b, S));
      }
    } else n && i.clickR && !i.aimTap && this.hooks.openMap("himars");
    (e.tankAim &&
      (e.pos.distanceTo(e.tankAim.origin) > 0.4 || a !== 0 || r !== 0) &&
      delete e.tankAim,
      e.tankAim &&
        !e.tankAim.shot &&
        ((e.tankAim.remaining -= t),
        e.tankAim.remaining <= 0 && delete e.tankAim));
    const p = e.tankAim,
      m = p?.shot,
      g = Math.atan2(
        Math.sin((m?.yaw ?? this.camYaw) - e.yaw),
        Math.cos((m?.yaw ?? this.camYaw) - e.yaw),
      ),
      y = m ? null : this.tankGunSolution(e);
    if (e.turret) {
      let b = (y?.yaw ?? g) - e.turret.rotation.y;
      b = Math.atan2(Math.sin(b), Math.cos(b));
      const S = Math.min(2.4, Math.abs(b) * 9 + 0.12) * t;
      ((e.turret.rotation.y += Oe(b, -S, S)), (e.aux1 = e.turret.rotation.y));
      const E = (m?.pitch ?? Oe(y?.pitch ?? this.camPitch, $W, VW)) - e.aux2,
        A = Math.min(1.3, Math.abs(E) * 9 + 0.06) * t;
      ((e.aux2 += Oe(E, -A, A)), e.barrel && (e.barrel.rotation.x = e.aux2));
    }
    if (p && m) {
      p.remaining -= t;
      const b = Math.atan2(Math.sin(g - e.aux1), Math.cos(g - e.aux1));
      p.remaining <= 0 &&
        Math.abs(b) < 0.035 &&
        Math.abs(e.aux2 - m.pitch) < 0.025 &&
        ((e.fireCd = 2.2),
        this.projectiles.spawn(
          mt.SHELL,
          e.pos.clone().add(new k(0, 1.75, 0)),
          new k(m.vx, m.vy, m.vz),
          !0,
          { guide: p.target, ignoreVehicle: e.id, serverDriven: !0 },
        ),
        delete e.tankAim);
    }
    if (n && i.mouseL && e.fireCd <= 0 && !e.tankAim) {
      e.fireCd = 2.2;
      const b = new k(),
        S = new k();
      (this.tankBore(e, b, S),
        this.projectiles.spawn(
          mt.SHELL,
          b,
          S.clone().multiplyScalar(hs.shellSpeed || fb),
          !0,
        ),
        (e.cannonRecoil = 0.45),
        this.kickHull(e, e.aux1, 0.55),
        this.sfx.shot("tank"),
        this.effects.flash(b, 5, 0.15),
        this.effects.muzzleSmoke(b, S),
        this.effects.addTrauma(0.35));
    }
  }
  drivePlane(e, t, i, n) {
    const o = e.quat.clone(),
      a = e.pos.clone(),
      r = e.grounded;
    (n && i.action("forward") && (e.throttle = Oe(e.throttle + t * 0.5, 0, 1)),
      n && i.action("back") && (e.throttle = Oe(e.throttle - t * 0.7, 0, 1)));
    let l = e.grounded
      ? FR(e.type, e.pos, e.quat, (T, x, R) => this.world.groundAt(T, x, R))
      : this.world.groundAt(e.pos.x, e.pos.z, e.pos.y + 0.3);
    const c = this.deckInfo(e.pos);
    c && (l = Math.max(l === -1 / 0 ? -1 / 0 : l, c.y));
    const h =
      n &&
      (e.type === L.FIGHTER_JET ? i.keys.has("KeyZ") : i.mouseR) &&
      !e.grounded;
    (h &&
      !this.planeFreeLook &&
      ((this.camYaw = e.yaw),
      (this.camPitch = this.camMode === 0 ? e.pitch : 0.35)),
      (this.planeFreeLook = h),
      h &&
        ((this.camYaw -= i.mdx * 0.0022),
        (this.camPitch = Oe(this.camPitch - i.mdy * 0.0022, -1.55, 1.55))));
    const d = e.type === L.FIGHTER_JET,
      u =
        n && !h
          ? Oe(
              -i.mdx * 0.045 * Y.aircraftSensitivity +
                (i.action("left") ? 1 : 0) -
                (i.action("right") ? 1 : 0),
              -1,
              1,
            )
          : 0,
      f = d ? 0.048 : 0.04,
      p =
        n && !h
          ? Oe(
              -i.mdy * f * Y.aircraftSensitivity +
                (i.action("crouch") ? 1 : 0) -
                (i.action("sprint") ? 1 : 0),
              -1,
              1,
            )
          : 0,
      m = n ? (i.keys.has("KeyQ") ? 1 : 0) - (i.keys.has("KeyE") ? 1 : 0) : 0;
    if (e.grounded) {
      e.yaw += u * t * Oe(e.vel.length() / 5, 0, 1);
      const T = new pi().setFromQuaternion(e.quat, "YXZ");
      e.quat.setFromEuler(new pi(Oe(T.x, 0, 0.35), e.yaw, 0, "YXZ"));
    }
    const g = this.thinAir(e.pos.y);
    (dZ(
      e,
      e.type,
      {
        pitch: p,
        roll: e.grounded ? 0 : u,
        yaw: m,
        brake: n && i.action("back"),
        speedMul: this.speedMul(e) * g * hs.speed,
        stallMul: hs.speed,
      },
      t,
      this.airDensity() * g,
      this.gravity(9.81),
    ),
      !e.grounded &&
        e.vel.y >= 0 &&
        Number.isFinite(l) &&
        e.pos.y < l + hg(e.type, e.quat) &&
        new k(0, 1, 0).applyQuaternion(o).y > 0.85 &&
        (e.quat.copy(o), e.angularVelocity && (e.angularVelocity.x = 0)));
    const y = new k(0, 0, -1).applyQuaternion(e.quat),
      b = new k(0, 1, 0).applyQuaternion(e.quat),
      S = new pi().setFromQuaternion(e.quat, "YXZ");
    ((e.pitch = S.x), (e.roll = S.z), (e.yaw = S.y));
    const M = e.vel.dot(y);
    if (((e.speed = M), e.grounded)) {
      const T = y.clone();
      ((T.y = 0), T.lengthSq() > 0.001 && T.normalize());
      let x = e.vel.x * T.x + e.vel.z * T.z;
      (n &&
        i.action("forward") &&
        x < 6 &&
        (x += 4 * this.surfaceTraction() * t),
        n &&
          i.action("back") &&
          e.throttle < 0.05 &&
          (x = Math.max(x - 4 * this.surfaceTraction() * t, -3.5)),
        (e.vel.x = T.x * x),
        (e.vel.z = T.z * x),
        e.vel.y < 0 && (e.vel.y = 0));
    }
    const E = hg(e.type, e.quat);
    e.grounded && Number.isFinite(l) && (e.pos.y = Math.max(e.pos.y, l + E));
    const A = e.pos.clone();
    if (
      (e.pos.addScaledVector(e.vel, t),
      (l = r
        ? FR(e.type, e.pos, e.quat, (T, x) =>
            this.world.groundAt(T, x, a.y + 0.3),
          )
        : this.world.groundAt(e.pos.x, e.pos.z, A.y + 0.4)),
      c && (l = Math.max(l, c.y)),
      l !== -1 / 0 && e.pos.y <= l + E && e.vel.y <= 0.01)
    ) {
      const T = -e.vel.y;
      (e.grounded ||
        ((T > 7 || b.y < 0.88) &&
          (this.hooks.sendHit(e.id, Math.round(20 + T * 5 + Math.abs(M) * 1.2)),
          this.effects.addTrauma(0.7),
          this.sfx.explosion(0),
          e.vel.multiplyScalar(0.25),
          (e.throttle = 0)),
        (e.grounded = !0),
        (e.yaw = Math.atan2(-y.x, -y.z)),
        (e.pitch = 0),
        (e.roll = 0),
        e.quat.setFromEuler(new pi(0, e.yaw, 0))),
        (e.pos.y = l + hg(e.type, e.quat)),
        (e.vel.y = 0));
    } else
      e.grounded &&
        (l === -1 / 0 || e.pos.y > l + E + 0.15) &&
        (e.grounded = !1);
    if (
      (e.grounded &&
        c &&
        Math.abs(e.pos.y - c.y) < 0.4 &&
        ((e.pos.x += c.vx * t), (e.pos.z += c.vz * t)),
      zh(e.type, a, e.pos, o, e.quat, (T, x, R) =>
        this.world.isSolidAt(T, x, R),
      ) &&
        !(
          r &&
          nZ(e.type, a, e.pos, o, e.quat, (T, x, R) =>
            this.world.isSolidAt(T, x, R),
          )
        ))
    ) {
      const T = e.vel.length();
      (T > 7 &&
        (this.hooks.sendHit(e.id, Math.round(15 + (T - 7) * 2)),
        this.effects.addTrauma(0.6)),
        e.pos.copy(a),
        e.quat.copy(o),
        e.vel.set(0, 0, 0),
        e.angularVelocity?.set(0, 0, 0),
        (e.throttle = 0),
        zR(e.type, e.pos, e.quat, (R, _, C) => this.world.isSolidAt(R, _, C)));
      const x = new pi().setFromQuaternion(e.quat, "YXZ");
      ((e.pitch = x.x),
        (e.yaw = x.y),
        (e.roll = x.z),
        (e.grounded = r),
        (e.speed = 0),
        y.set(0, 0, -1).applyQuaternion(e.quat));
    }
    if (n && i.mouseL && e.fireCd <= 0) {
      ((e.fireCd += $b[e.type].gunInterval),
        (e.mgSide = -e.mgSide),
        new k(1, 0, 0).applyQuaternion(e.quat));
      const T = e.pos
          .clone()
          .add(
            new k(e.mgSide * (d ? 0.68 : 1.5), d ? 1.7 : 1.1, d ? -4.6 : -0.5)
              .multiply(En(e.type))
              .applyQuaternion(e.quat),
          ),
        x =
          !d && this.aimValid
            ? this.aimPos
                .clone()
                .addScaledVector(this.aimDir, 260)
                .sub(T)
                .normalize()
            : y.clone();
      (d && dT(e, e.mgSide, T, x),
        (x.x += (Math.random() - 0.5) * 0.02),
        (x.y += (Math.random() - 0.5) * 0.02),
        (x.z += (Math.random() - 0.5) * 0.02),
        x.normalize(),
        this.hooks.mgFire(T, x));
    }
    if (!d && n && i.action("jump") && e.fireCd2 <= 0 && !e.grounded) {
      e.fireCd2 += $b[e.type].secondaryInterval;
      const T = e.pos
        .clone()
        .add(new k(0, 0.3, 0).multiply(En(e.type)).applyQuaternion(e.quat));
      this.projectiles.spawn(
        mt.BOMB,
        T,
        e.vel.clone().multiplyScalar(0.92),
        !0,
      );
    }
    if (d && n && i.mouseR && e.fireCd2 <= 0) {
      if (
        ((e.fireCd2 += $b[e.type].secondaryInterval), this.jetSecondary?.())
      ) {
        ((e.aux1 = e.throttle), this.spinProps(e, t, e.speed));
        return;
      }
      e.rocketSide = -(e.rocketSide ?? 1);
      const T = new k(),
        x = new k();
      (a7(e, e.rocketSide, T, x),
        this.projectiles.spawn(mt.ROCKET, T, x, !0, {
          ignoreVehicle: e.id,
          serverDriven: !0,
        }),
        this.sfx.shot("rpg", 0),
        this.effects.flash(T, 3, 0.1));
    }
    ((e.aux1 = e.throttle), this.spinProps(e, t, e.speed));
  }
  driveDrone(e, t, i, n) {
    ((this.camYaw -= i.mdx * 0.0022),
      (this.camPitch = Oe(this.camPitch - i.mdy * 0.0022, -1.3, 1.3)),
      (e.yaw = this.camYaw));
    const o = Math.cos(this.camYaw),
      a = Math.sin(this.camYaw),
      r = Math.cos(this.camPitch),
      l = Math.sin(this.camPitch),
      c = new k(-a * r, l, -o * r),
      h = new k(o, 0, -a),
      d = new k();
    n &&
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
      this.currentPlanet === Ci.MOON && (e.vel.y -= this.gravity(9.81) * t));
    const p = this.airDensity();
    (e.vel.multiplyScalar(
      Math.max(0, 1 - (u ? 2.4 * p + 0.35 : 5 * p + 0.5) * t),
    ),
      e.vel.length() > 30 * f && e.vel.setLength(30 * f));
    const m = e.vel.length(),
      g = e.pos.clone(),
      y = e.pos.clone().addScaledVector(e.vel, t);
    if (n && m > 0.5) {
      const M = y.clone().sub(g),
        E = M.length() + 0.45,
        A = this.droneContact(e, g, M.normalize(), E);
      if (A) {
        (e.pos.copy(g).addScaledVector(M, Math.max(0, A.dist - 0.2)),
          this.detonateDrone());
        return;
      }
    }
    if (this.world.isSolidAt(y.x, y.y + 0.15, y.z)) {
      if (m > 11) {
        this.detonateDrone();
        return;
      }
      (e.vel.multiplyScalar(-0.1), e.pos.copy(g));
    } else e.pos.copy(y);
    e.pos.y < 0.5 && (e.pos.y = 0.5);
    const b = Oe(-e.vel.dot(c) * 0.022, -0.45, 0.45),
      S = Oe(-e.vel.dot(h) * 0.022, -0.45, 0.45);
    ((e.pitch = b),
      (e.roll = S),
      e.quat.setFromEuler(new pi(b, e.yaw, S, "YXZ")),
      this.spinProps(e, t, m),
      n && (i.clickL || i.actionPressed("detonate")) && this.detonateDrone());
  }
  droneContact(e, t, i, n) {
    let o = null;
    const a = new k(i.z, 0, -i.x);
    a.lengthSq() < 1e-6 ? a.set(1, 0, 0) : a.normalize();
    for (const r of [0, 0.3, -0.3]) {
      const l = t.clone().addScaledVector(a, r),
        c = this.rayHit(l, i, n);
      !c ||
        c.id === e.id ||
        (this.vehicles.get(c.id)?.hpBar.userData.side !== "ally" &&
          (!o || c.dist < o.dist) &&
          (o = { id: c.id, dist: c.dist }));
    }
    return o;
  }
  driveHelicopter(e, t, i, n) {
    ((this.camYaw -= i.mdx * 0.0022),
      (this.camPitch = Oe(this.camPitch - i.mdy * 0.0022, -Math.PI / 2, 1.25)),
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
    (n &&
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
      this.currentPlanet === Ci.MOON && (e.vel.y -= this.gravity(9.81) * t));
    const p = this.airDensity();
    ((e.vel.x *= Math.max(0, 1 - (1.4 * p + 0.18) * t)),
      (e.vel.z *= Math.max(0, 1 - (1.4 * p + 0.18) * t)),
      (e.vel.y *= Math.max(0, 1 - (2.4 * p + 0.3) * t)));
    const m = Math.hypot(e.vel.x, e.vel.z),
      g = (u ? 9.2 : 20.2) * f;
    (m > g && ((e.vel.x *= g / m), (e.vel.z *= g / m)),
      (e.vel.y = Oe(e.vel.y, u ? -8 : -14, u ? 8 : 14)));
    const y = e.pos.clone(),
      b = e.pos.clone().addScaledVector(e.vel, t);
    if (
      zh(e.type, y, b, e.quat, e.quat, (T, x, R) =>
        this.world.isSolidAt(T, x, R),
      )
    ) {
      const T = e.vel.length();
      (T > 5 &&
        (this.hooks.sendHit(e.id, Math.round((T - 4) * 8)),
        this.effects.addTrauma(Math.min(0.9, T * 0.05)),
        this.sfx.explosion(0)),
        e.vel.multiplyScalar(-0.12),
        e.pos.copy(y));
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
      const T = this.deckUnder(e);
      T && ((e.pos.x += T.vx * t), (e.pos.z += T.vz * t));
    }
    const E = Oe(-e.vel.dot(c) * 0.02, -0.35, 0.35),
      A = Oe(-e.vel.dot(h) * 0.02, -0.35, 0.35);
    if (
      ((e.pitch = ns(e.pitch, E, Math.min(1, 6 * t))),
      (e.roll = ns(e.roll, A, Math.min(1, 6 * t))),
      e.quat.setFromEuler(new pi(e.pitch, e.yaw, e.roll, "YXZ")),
      this.spinProps(e, t, 24),
      n && i.mouseL && e.fireCd <= 0)
    ) {
      ((e.fireCd = 0.08), (e.mgSide = -e.mgSide));
      const T = new k(1, 0, 0).applyQuaternion(e.quat),
        x = e.pos
          .clone()
          .add(new k(0, 1, 0))
          .addScaledVector(T, e.mgSide * 0.4)
          .addScaledVector(c, 1.8),
        R = this.aimValid
          ? this.aimPos
              .clone()
              .addScaledVector(this.aimDir, 240)
              .sub(x)
              .normalize()
          : c.clone();
      ((R.x += (Math.random() - 0.5) * 0.02),
        (R.y += (Math.random() - 0.5) * 0.02),
        (R.z += (Math.random() - 0.5) * 0.02),
        R.normalize(),
        this.hooks.mgFire(x, R));
    }
    if (n && i.clickR && e.fireCd2 <= 0) {
      e.fireCd2 = 1.3;
      const T = new k(1, 0, 0).applyQuaternion(e.quat),
        x = e.pos
          .clone()
          .add(new k(0, 1.2, 0))
          .addScaledVector(T, e.mgSide * 1.15)
          .addScaledVector(c, 0.5),
        R = this.aimValid
          ? this.aimPos
              .clone()
              .addScaledVector(this.aimDir, 240)
              .sub(x)
              .normalize()
          : c.clone();
      (this.hooks.launchRocket(x, R), (e.mgSide = -e.mgSide));
    }
  }
  driveRocket(e, t, i, n) {
    ((this.camYaw -= i.mdx * 0.0022),
      (this.camPitch = Oe(this.camPitch - i.mdy * 0.0022, -0.55, 1.25)));
    const o = n && (i.action("forward") || i.action("jump")),
      a = n && (i.action("back") || i.action("crouch"));
    e.throttle = Oe(e.throttle + (o ? 0.42 : a ? -0.56 : -0.035) * t, 0, 1);
    const r = 9.81 * this.gravityScale,
      l = r / 31.5,
      c = this.world.groundAt(e.pos.x, e.pos.z, 126),
      h = c === -1 / 0 ? 1 / 0 : Math.max(0, e.pos.y - c);
    e.grounded && o && (e.throttle = Math.max(e.throttle, l + 0.16));
    const d = !o && e.vel.y < 0 && h < 80;
    if (d) {
      const M = h > 42 ? -7 : h > 16 ? -4.2 : h > 5 ? -2.2 : -0.8,
        E = Math.max(0, M - e.vel.y) * 0.048;
      e.throttle = Math.max(e.throttle, Oe(l + E, 0, 0.92));
    }
    const u = n ? (i.action("left") ? 1 : 0) - (i.action("right") ? 1 : 0) : 0;
    e.yaw += u * t * (0.35 + e.throttle * 0.35);
    const f = e.grounded || (d && h < 30),
      p = n && !f ? Oe(-i.mdy * 0.0035, -0.23, 0.23) : 0,
      m = n && !f ? Oe(i.mdx * 0.0035, -0.23, 0.23) : 0;
    ((e.pitch = ns(e.pitch, p, 1 - Math.exp(-(f ? 6.5 : 3.2) * t))),
      (e.roll = ns(e.roll, m, 1 - Math.exp(-(f ? 6.5 : 3.2) * t))),
      e.quat.setFromEuler(new pi(e.pitch, e.yaw, e.roll, "YXZ")));
    const g = new k(0, 1, 0).applyQuaternion(e.quat),
      y = 31.5 * e.throttle;
    (e.vel.addScaledVector(g, y * t),
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
  driveHimars(e, t, i, n) {
    ((this.camYaw -= i.mdx * 0.0022),
      (this.camPitch = Oe(this.camPitch - i.mdy * 0.0022, -0.35, 1.1)),
      n && (i.clickR || i.clickL) && this.hooks.openMap("himars"));
    const o = n
        ? (i.action("forward") ? 1 : 0) - (i.action("back") ? 1 : 0)
        : 0,
      a = n ? (i.action("left") ? 1 : 0) - (i.action("right") ? 1 : 0) : 0,
      r = e.yaw;
    e.yaw +=
      a *
      t *
      0.72 *
      Oe(Math.abs(e.speed) / 2.5 + 0.2, 0.2, 1) *
      (e.speed < -0.2 ? -1 : 1);
    const l = o * (o > 0 ? 7.2 : 4) * ub * this.speedMul(e);
    ((e.speed += Oe(
      l - e.speed,
      -(o === 0 ? 3 : 4.8) * t,
      (o === 0 ? 3 : 4.8) * t,
    )),
      a !== 0 && (e.speed *= Math.max(0, 1 - 0.16 * Math.abs(e.speed) * t)),
      this.moveGroundHull(e, t, r));
    const c = this.deckUnder(e);
    c && ((e.pos.x += c.vx * t), (e.pos.z += c.vz * t));
  }
  driveGround(e, t, i, n, o, a) {
    const r = n
        ? (i.action("forward") ? 1 : 0) - (i.action("back") ? 1 : 0)
        : 0,
      l = n ? (i.action("left") ? 1 : 0) - (i.action("right") ? 1 : 0) : 0,
      c = this.surfaceTraction(),
      h = e.yaw;
    e.yaw +=
      l *
      t *
      0.72 *
      c *
      Oe(Math.abs(e.speed) / 2.5 + 0.2, 0.2, 1) *
      (e.speed < -0.2 ? -1 : 1);
    const d = r * (r > 0 ? o : a) * ub * this.speedMul(e);
    ((e.speed += Oe(
      d - e.speed,
      -(r === 0 ? 3 : 4.8) * c * t,
      (r === 0 ? 3 : 4.8) * c * t,
    )),
      l !== 0 && (e.speed *= Math.max(0, 1 - 0.14 * c * Math.abs(e.speed) * t)),
      this.moveGroundHull(e, t, h));
    const u = this.deckUnder(e);
    u && ((e.pos.x += u.vx * t), (e.pos.z += u.vz * t));
  }
  drivePatriot(e, t, i, n) {
    ((this.camYaw -= i.mdx * 0.0022),
      (this.camPitch = Oe(this.camPitch - i.mdy * 0.0022, -0.35, 1.1)),
      this.driveGround(e, t, i, n, 6, 4),
      this.updatePatriotDefense(e, t));
  }
  fireTurretGun(e, t, i) {
    if (!i || !t.mouseL || e.fireCd > 0) return;
    const n = f8(e.type),
      o = e.gunMagazine ?? Vl;
    if (
      (n.belt
        ? ((e.gunMagazine = o <= 1 ? Vl : o - 1), (e.fireCd = n.interval))
        : ((e.gunMagazine = o - 1),
          (e.fireCd = e.gunMagazine <= 0 ? n.reload : n.interval),
          e.gunMagazine <= 0 && (e.gunMagazine = Vl)),
      e.group.position.copy(e.pos),
      e.group.quaternion.copy(e.quat),
      e.group.updateMatrixWorld(!0),
      e.type === L.BTR_TURRET && e.barrel)
    ) {
      this.fireCannon(e, n.spread);
      return;
    }
    const a = e.barrel
        ? e.barrel.localToWorld(new k(0, 0, -1.82))
        : e.pos.clone().add(new k(0, 1.3, 0)),
      r = this.aimValid
        ? (this.world.raycast(this.aimPos, this.aimDir, 180)?.dist ?? 180)
        : 180,
      l = this.aimValid
        ? this.aimPos.clone().addScaledVector(this.aimDir, r).sub(a).normalize()
        : new k(
            -Math.sin(this.camYaw) * Math.cos(this.camPitch),
            Math.sin(this.camPitch),
            -Math.cos(this.camYaw) * Math.cos(this.camPitch),
          );
    (n.spread &&
      ((l.x += (Math.random() - 0.5) * n.spread),
      (l.y += (Math.random() - 0.5) * n.spread),
      (l.z += (Math.random() - 0.5) * n.spread),
      l.normalize()),
      this.hooks.mgFire(a, l));
  }
  fireCannon(e, t) {
    const i = e.barrel,
      n = i.position.z;
    ((i.position.z = z8), i.updateMatrixWorld(!0));
    const o = i.localToWorld(new k(0, 0, F8)),
      a = o
        .clone()
        .sub(i.localToWorld(new k(0, 0, 0)))
        .normalize();
    i.position.z = n;
    let r = a;
    if (this.aimValid) {
      const l = this.gunAimTarget(e, Iv(e.type), 110, 8)
        .clone()
        .sub(o)
        .normalize();
      a.angleTo(l) < gJ && (r = l);
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
  driveTurret(e, t, i, n) {
    ((this.camYaw -= i.mdx * 0.0022),
      (this.camPitch = Oe(this.camPitch - i.mdy * 0.0022, -0.55, 0.95)),
      n &&
        ((e.aux1 = this.camYaw),
        (e.aux2 = this.camYaw),
        e.vel.set(0, this.camPitch, 0)),
      this.fireTurretGun(e, i, n),
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
      e.quat.setFromEuler(new pi(0, 0, 0, "YXZ")));
  }
  driveBtrTurret(e, t, i, n) {
    const o = 0.0022 / this.gunZoom;
    (n && (this.camYaw -= i.mdx * o),
      n && (this.camPitch = Oe(this.camPitch - i.mdy * o, -0.45, 0.9)));
    const a = e.yaw;
    if (
      (this.driveGround(e, t, i, n, 8.2, 4.5),
      this.camMode === 0 && (this.camYaw += e.yaw - a),
      e.turret)
    ) {
      const l = n ? this.tankGunSolution(e, !0) : null,
        c =
          l?.yaw ??
          Math.atan2(
            Math.sin(this.camYaw - e.yaw),
            Math.cos(this.camYaw - e.yaw),
          ),
        h = Math.atan2(
          Math.sin(c - e.turret.rotation.y),
          Math.cos(c - e.turret.rotation.y),
        ),
        d = this.camMode === 0 ? 6.5 : 4.4;
      ((e.turret.rotation.y += Oe(h * Math.min(1, t * 14), -d * t, d * t)),
        (e.aux1 = e.turret.rotation.y));
      const u = Oe(l?.pitch ?? this.camPitch, pJ, mJ);
      ((e.aux2 += Oe((u - e.aux2) * Math.min(1, t * 16), -3.2 * t, 3.2 * t)),
        e.barrel && (e.barrel.rotation.x = e.aux2));
    }
    ((e.gunKick = Math.max(0, (e.gunKick ?? 0) - t * 9)),
      e.barrel && (e.barrel.position.z = z8 + 0.085 * (e.gunKick ?? 0)));
    const r = e.gunMagazine ?? Vl;
    (this.fireTurretGun(e, i, n),
      (e.gunMagazine ?? Vl) !== r &&
        ((e.gunKick = 1),
        this.effects.addTrauma(this.camMode === 0 ? 0.05 : 0.024),
        this.camMode === 0 &&
          (this.camPitch = Oe(
            this.camPitch + 0.0035 / this.gunZoom,
            -0.45,
            0.9,
          ))));
  }
  updatePatriotDefense(e, t) {
    e.fireCd = Math.max(0, e.fireCd - t);
    const i = this.acquireTarget(e);
    if (e.turret) {
      const n = i
          ? Math.atan2(-(i.pos.x - e.pos.x), -(i.pos.z - e.pos.z)) - e.yaw
          : 0,
        o = Math.atan2(
          Math.sin(n - e.turret.rotation.y),
          Math.cos(n - e.turret.rotation.y),
        );
      ((e.turret.rotation.y += Oe(o, -2.5 * t, 2.5 * t)),
        (e.aux1 = e.turret.rotation.y));
    }
    i && e.fireCd <= 0 && (this.fireInterceptor(e, i), (e.fireCd = BW));
  }
  acquireTarget(e) {
    const t = DW;
    let i = null,
      n = t * t;
    const o = (a, r, l, c, h) => {
      if (l === e.owner || this.hooks.isFriendly(l) || c.y - e.pos.y < 5)
        return;
      const d = c.distanceToSquared(e.pos);
      d < n &&
        ((n = d), (i = { kind: a, id: r, pos: c.clone(), vel: h.clone() }));
    };
    for (const a of this.projectiles.activeProjectiles())
      o(1, a.id, a.owner, a.pos, a.vel);
    for (const a of this.vehicles.values())
      a !== e &&
        ((!on(a.type) && a.type !== L.HELI && a.type !== L.DRONE) ||
          (a.ownerName &&
            (a.ownerName === e.ownerName ||
              this.hooks.isFriendlyName(a.ownerName))) ||
          o(2, a.id, a.owner, a.pos, a.vel));
    return i;
  }
  fireInterceptor(e, t) {
    const i = e.pos.clone().add(new k(0, 2.4, 0)),
      n = HW,
      o = fQ(i, t.pos, t.vel, n),
      a = new k(o.x, o.y, o.z),
      l = a
        .clone()
        .sub(i)
        .normalize()
        .multiplyScalar(n * 0.55)
        .add(new k(0, 22, 0));
    (this.projectiles.spawn(mt.MISSILE, i, l, !0, {
      guide: a,
      speed: n,
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
    const n = new k(0, 1, 0);
    if (i.fpvHide.length) {
      const f =
        this.camMode === 0 &&
        (this.mineSeat === 0 ||
          !(i.type === L.HELI || on(i.type) || this.mySeatGun()));
      for (const p of i.fpvHide) jl(p, f);
    }
    if (
      (i.type === L.TANK &&
        i.barrel &&
        jl(i.barrel, this.mineSeat === 0 && this.gunZoom > 2.2),
      this.mineSeat === 0 &&
        i.type === L.TANK &&
        i.barrel &&
        this.gunZoom > 1.05)
    ) {
      for (const f of i.fpvHide) jl(f, !0);
      return (
        i.group.updateMatrixWorld(!0),
        e.pos.copy(i.barrel.localToWorld(new k(0, 0.3, -0.25))),
        e.quat.setFromEuler(new pi(this.camPitch, this.camYaw, 0, "YXZ")),
        (this.smoothCamInit = !1),
        this.storeAim(e),
        !0
      );
    }
    if (
      this.camMode === 0 ||
      (this.mineSeat === 0 && i.type === L.BTR_TURRET && this.gunZoom > 1.05)
    ) {
      const f =
        this.mineSeat > 0 && this.mySeatGun()
          ? this.seatGunsOf(i).get(this.mineSeat)
          : void 0;
      if (f)
        (i.group.updateMatrixWorld(!0),
          f.yaw.localToWorld(e.pos.set(0, f.pitch.position.y + 0.2, 0.5)),
          e.quat.setFromEuler(new pi(this.camPitch, this.camYaw, 0, "YXZ")));
      else if (this.mineSeat > 0)
        (this.seatPos(i, this.mineSeat, e.pos),
          e.pos.add(
            new k(0, i.type === L.HELI ? 1.55 : 0.85, 0).applyQuaternion(
              i.quat,
            ),
          ),
          e.quat.setFromEuler(new pi(this.camPitch, this.camYaw, 0, "YXZ")));
      else if (on(i.type)) {
        const p = (
          i.type === L.FIGHTER_JET
            ? new k(0, 2.32, -2.75)
            : new k(0, 1.62, -0.35).multiply(En(i.type))
        ).applyQuaternion(i.quat);
        (e.pos.copy(i.pos).add(p),
          this.planeFreeLook
            ? e.quat.setFromEuler(new pi(this.camPitch, this.camYaw, 0, "YXZ"))
            : e.quat.copy(i.quat));
      } else if (i.type === L.BTR_TURRET && i.turret)
        (i.group.updateMatrixWorld(!0),
          e.pos.copy(i.turret.localToWorld(new k(-0.38, 0.3, -0.34))),
          e.quat.setFromEuler(new pi(this.camPitch, this.camYaw, 0, "YXZ")),
          i.barrel && jl(i.barrel, this.gunZoom > 3));
      else if (i.type === L.HIMARS || i.type === L.PATRIOT)
        (e.pos
          .copy(i.pos)
          .add(
            new k(-0.45, 2.05, -1.85)
              .multiply(En(i.type))
              .applyQuaternion(i.quat),
          ),
          e.quat.setFromEuler(new pi(this.camPitch, this.camYaw, 0, "YXZ")));
      else if (i.type === L.TURRET && i.barrel)
        (i.group.updateMatrixWorld(!0),
          e.pos.copy(i.barrel.localToWorld(new k(0, 0.72, 0.75))),
          e.quat.setFromEuler(new pi(this.camPitch, this.camYaw, 0, "YXZ")));
      else if (i.type === L.DRONE) {
        const p = new k(0, 0.28, -0.1).applyQuaternion(i.quat);
        (e.pos.copy(i.pos).add(p),
          e.quat.setFromEuler(
            new pi(this.camPitch, this.camYaw, i.roll * 0.6, "YXZ"),
          ));
      } else if (i.type === L.HELI) {
        const p = new k(0, 1.55, -1.75)
          .multiply(En(i.type))
          .applyQuaternion(i.quat);
        (e.pos.copy(i.pos).add(p),
          e.quat.setFromEuler(
            new pi(this.camPitch, this.camYaw, i.roll * 0.5, "YXZ"),
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
              .multiply(En(i.type))
              .applyQuaternion(i.quat),
          ),
          e.quat.setFromEuler(new pi(this.camPitch, this.camYaw, 0, "YXZ")));
      }
      return ((this.smoothCamInit = !1), this.storeAim(e), !0);
    }
    let o, a;
    if (!on(i.type) && i.type !== L.DRONE) {
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
      o = i.pos.clone().add(new k(0, (p[i.type] ?? 2) * En(i.type).y, 0));
      const m = Math.cos(this.camPitch),
        g = Math.sin(this.camPitch),
        y = new k(-Math.sin(this.camYaw) * m, g, -Math.cos(this.camYaw) * m),
        b = i.type === L.SUBMARINE ? 2.2 + g * 2.5 : 1 + g * 4;
      a = o
        .clone()
        .addScaledVector(y, (f[i.type] ?? -9) * En(i.type).z)
        .add(new k(0, b, 0));
    } else if (on(i.type))
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
        (n.set(0, 1, 0).applyQuaternion(i.quat),
          (o = i.pos.clone().addScaledVector(n, 1.8).addScaledVector(f, 7)),
          (a = i.pos
            .clone()
            .addScaledVector(f, i.type === L.FIGHTER_JET ? -23 : -19)
            .addScaledVector(n, 5.5)));
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
    const u = new Rt().lookAt(e.pos, o, n);
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
    const i = (n) => rr(Y.binds[n]);
    return {
      name:
        to(t.type) +
        (this.mineSeat > 0 && !e
          ? ` ${z(this.mySeatGun() ? "vehGunnerSuffix" : "vehPassengerSuffix")}`
          : ""),
      hp: t.hp,
      maxHp: t.maxHp,
      speed: f4(
        t.type,
        this.mineSeat > 0 || t.type === L.DRONE || t.type === L.HELI
          ? t.vel.length()
          : Math.abs(t.speed),
      ),
      alt: Math.round(t.pos.y),
      flies:
        on(t.type) ||
        t.type === L.HELI ||
        t.type === L.DRONE ||
        t.type === L.SPACE_ROCKET,
      extra:
        this.mineSeat > 0
          ? this.mySeatGun()
            ? z(e ? "vehSeatGunTouch" : "vehSeatGun")
            : this.canTakeDriver()
              ? I(
                  `${e ? "Steering wheel" : i("driver")} · Take controls`,
                  `${e ? "Кнопка руля" : i("driver")} · За руль`,
                )
              : this.passengerCanShoot()
                ? z("vehPassengerCanShoot")
                : z("vehPassengerViewOnly")
          : e && on(t.type)
            ? I(
                "Stick: throttle/roll · drag: pitch/roll · ↑/↓: pitch · gun / ordnance",
                "Джойстик: тяга/крен · свайп: тангаж/крен · ↑/↓: нос · пулемёт / боеприпас",
              )
            : e
              ? t.fireCd2 > 0
                ? z("vehTouchReload", { sec: Math.ceil(t.fireCd2) })
                : z(
                    [L.HELI, L.DRONE, L.SUBMARINE, L.SPACE_ROCKET].includes(
                      t.type,
                    )
                      ? "vehTouchFly"
                      : "vehTouchDrive",
                  )
              : t.type === L.TANK
                ? hs.tankGun
                  ? I(
                      `${i("forward")}/${i("back")} drive · ${i("left")}/${i("right")} turn · LMB gun · hold RMB roof machine gun (at jets)`,
                      `${i("forward")}/${i("back")} ход · ${i("left")}/${i("right")} поворот · ЛКМ пушка · удерживать ПКМ — зенитный пулемёт`,
                    )
                  : z("vehTankInfo")
                : t.type === L.BOAT
                  ? z("vehBoatInfo", {
                      fwd: i("forward"),
                      back: i("back"),
                      left: i("left"),
                      right: i("right"),
                    })
                  : t.type === L.SUBMARINE
                    ? z("vehSubmarineInfo", {
                        fwd: i("forward"),
                        back: i("back"),
                        left: i("left"),
                        right: i("right"),
                        jump: i("jump"),
                        crouch: i("crouch"),
                        reload:
                          t.fireCd2 > 0
                            ? z("vehCarrierReload", {
                                sec: Math.ceil(t.fireCd2),
                              })
                            : "",
                      })
                    : t.type === L.CARRIER
                      ? z("vehCarrierInfo", {
                          fwd: i("forward"),
                          back: i("back"),
                          left: i("left"),
                          right: i("right"),
                          reload:
                            t.fireCd2 > 0
                              ? z("vehCarrierReload", {
                                  sec: Math.ceil(t.fireCd2),
                                })
                              : "",
                        })
                      : t.type === L.HELI
                        ? ((t.rotorPower ?? 0) < 1
                            ? `${I("Rotor spin-up", "Раскрутка винтов")} ${Math.ceil((1 - (t.rotorPower ?? 0)) * 2)}${I("s", "с")} · `
                            : "") +
                          z("vehHeliInfo", {
                            fwd: i("forward"),
                            back: i("back"),
                            left: i("left"),
                            right: i("right"),
                            jump: i("jump"),
                            crouch: i("crouch"),
                            cargo: this.heliCargo.has(t.id)
                              ? z("vehHeliCargoRelease", { use: i("cargo") })
                              : this.cargoCandidate(t)
                                ? z("vehHeliCargoAttach", { use: i("cargo") })
                                : "",
                          })
                        : t.type === L.MORTAR
                          ? z("vehMortarInfo", {
                              seconds: Math.ceil(
                                Math.max(
                                  0,
                                  (t.carrierReadyAt - Date.now()) / 1e3,
                                ),
                              ),
                            })
                          : t.type === L.HIMARS
                            ? z("vehHimarsInfo", {
                                fwd: i("forward"),
                                back: i("back"),
                                left: i("left"),
                                right: i("right"),
                                range: Vr,
                              })
                            : t.type === L.PATRIOT
                              ? z("vehPatriotInfo", {
                                  fwd: i("forward"),
                                  back: i("back"),
                                  left: i("left"),
                                  right: i("right"),
                                })
                              : t.type === L.TURRET
                                ? z("vehTurretInfo")
                                : t.type === L.BTR_TURRET
                                  ? z("vehBtrInfo", {
                                      fwd: i("forward"),
                                      back: i("back"),
                                      left: i("left"),
                                      right: i("right"),
                                    })
                                  : t.type === L.SPACE_ROCKET
                                    ? z(
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
                                    : t.type === L.FIGHTER_JET
                                      ? I(
                                          `${i("forward")}/${i("back")} throttle · ${i("left")}/${i("right")} roll · mouse pitch/roll · Q/E rudder · Alt/Shift pitch · LMB gun · hold RMB missiles · Z free look`,
                                          e
                                            ? "Джойстик: тяга/крен · свайп: тангаж/крен · ↑: нос вверх · пулемёт / ракета"
                                            : "W/S: тяга/тормоз · A/D: крен · мышь: тангаж/крен · Q/E: руль · Alt/Shift: нос вверх/вниз · ЛКМ: пулемёт · удерживать ПКМ: залп ракет · Z: обзор",
                                        )
                                      : on(t.type)
                                        ? t.grounded
                                          ? z("vehPlaneGroundInfo", {
                                              fwd: i("forward"),
                                              back: i("back"),
                                              left: i("left"),
                                              right: i("right"),
                                            })
                                          : z("vehPlaneAirInfo", {
                                              left: i("left"),
                                              right: i("right"),
                                              jump: i("jump"),
                                            })
                                        : z("vehDroneInfo", {
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
}
