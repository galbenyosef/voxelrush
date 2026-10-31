// index-BeUlFSPp 166 — group
// Lines 94311-95124 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class zse {
  constructor(e, t, i) {
    ((this.scene = e),
      (this.atlasTex = t),
      (this.world = i),
      da(() => {
        for (const [n, o] of this.map) this.setRank(n, o.xp, !0);
      }));
  }
  map = new Map();
  cosmetics = new Map();
  setCosmetics(e, t) {
    const i = JSON.stringify(this.cosmetics.get(e)?.armor ?? {});
    this.cosmetics.set(e, t);
    const n = this.map.get(e);
    if (n) {
      Oc(n.group, t.character, t.custom);
      for (const o of n.heldMesh.children) qa(o, t.weapon, t.owner);
      (JSON.stringify(t.armor ?? {}) !== i &&
        X0(
          n.armorRoot,
          n.head,
          n.legL,
          n.legR,
          n.armor,
          n.helmetModule,
          t.armor ?? {},
        ),
        Ed(n.head, ym(t.hat)));
    }
  }
  hideTagsUnless(e) {
    for (const [t, i] of this.map)
      i.nameTag.visible && !e(t, i.group.position) && (i.nameTag.visible = !1);
  }
  respawn(e, t, i, n) {
    const o = this.map.get(e);
    o &&
      (o.target.pos.set(t, i, n),
      o.group.position.set(t, i, n),
      (o.alive = !0));
  }
  corpseOf(e) {
    const t = this.map.get(e);
    if (!t || !t.alive || t.hidden || !t.group.visible) return null;
    const i = t.group.getObjectByName("pose-root");
    if (!i) return null;
    const n = i.clone(!0),
      o = new Map(),
      a = (h, d) => {
        (o.set(h, d),
          h.children.forEach((u, f) => {
            d.children[f] && a(u, d.children[f]);
          }));
      };
    a(i, n);
    const r = new re();
    (r.add(n),
      r.position.copy(t.group.position),
      r.traverse((h) => {
        const d = h;
        d.isLight && (d.visible = !1);
      }));
    const l = t.group.rotation.y,
      c = !!(t.downed || t.prone);
    return (
      (t.alive = !1),
      (t.group.visible = !1),
      {
        body: r,
        yaw: l,
        lying: c,
        limbs: {
          head: o.get(t.head),
          armL: o.get(t.armL),
          armR: o.get(t.armR),
          legL: o.get(t.legL),
          legR: o.get(t.legR),
          held: o.get(t.heldMesh) ?? null,
        },
      }
    );
  }
  pendingVehicleSeats = new Map();
  pendingSeats = new Map();
  lightT = 0;
  firingUntil = new Map();
  animations = new Map();
  setAnimation(e, t, i, n = 0) {
    let o = this.animations.get(e);
    o ||
      ((o = {
        emote: 0,
        start: 0,
        reload: 0,
        reloadStart: 0,
        voice: 0,
        voiceAt: 0,
        swingAt: -9,
        inspectStart: -9,
      }),
      this.animations.set(e, o));
    const a = performance.now() / 1e3;
    if (t === 4) {
      o.inspectStart = i ? a - n : -9;
      return;
    }
    if (t === 3) {
      o.swingAt = a;
      return;
    }
    (t === 0 && ((o.emote = i), (o.start = a - n)),
      t === 1 && ((o.reload = i), (o.reloadStart = a - n)),
      t === 2 && ((o.voice = i / 255), (o.voiceAt = a)));
  }
  onShot(e) {
    const t = this.animations.get(e);
    (t && (t.inspectStart = -9),
      this.firingUntil.set(e, performance.now() + 140));
  }
  add(e, t, i = 0) {
    if (this.map.has(e)) return;
    const n = Kc(GN(e)),
      {
        group: o,
        head: a,
        body: r,
        armL: l,
        armR: c,
        legL: h,
        legR: d,
        heldMesh: u,
        armorRoot: f,
      } = n,
      p = Uw(t);
    o.add(p);
    const m = new re();
    ((m.visible = !1), o.add(m));
    const g = new re();
    (o.add(g),
      this.scene.add(o),
      this.map.set(e, {
        id: e,
        name: t,
        group: o,
        head: a,
        body: r,
        armL: l,
        armR: c,
        legL: h,
        legR: d,
        heldMesh: u,
        heldKind: "none",
        armorRoot: f,
        armor: [0, 0, 0, 0],
        helmetModule: 0,
        helmetModuleDurability: 0,
        nameTag: p,
        xp: i,
        speechTag: null,
        speechUntil: 0,
        target: { pos: new k(), yaw: 0, pitch: 0 },
        lastPos: new k(),
        speed: 0,
        walkT: 0,
        alive: !0,
        onGround: !0,
        hidden: !1,
        held: 0,
        prone: !1,
        crouching: !1,
        seated: !1,
        aiming: !1,
        parachute: !1,
        chute: m,
        burning: !1,
        fire: g,
        lightOn: !1,
        beam: null,
        laser: null,
        raised: !1,
        mountY: 0,
        vehicleId: -1,
        vehicleSeat: 0,
        lookYaw: 0,
        planet: Ci.EARTH,
        disguise: null,
      }));
    const y = this.cosmetics.get(e);
    y ? this.setCosmetics(e, y) : Ed(a, ym(""));
    const b = this.pendingDisguise.get(e);
    b && (this.pendingDisguise.delete(e), this.setDisguise(e, b));
    const S = this.pendingVehicleSeats.get(e);
    S &&
      (this.pendingVehicleSeats.delete(e),
      (this.map.get(e).vehicleId = S.vehicleId),
      (this.map.get(e).vehicleSeat = S.seat));
    const M = this.pendingSeats.get(e);
    M &&
      (this.pendingSeats.delete(e), this.setSeat(e, !0, M.x, M.y, M.z, M.yaw));
    const E = this.pendingArmor.get(e);
    E &&
      (this.pendingArmor.delete(e),
      this.setArmor(e, E[0], E[1], E[2], E[3], E[4], E[5]));
  }
  idByName(e) {
    for (const t of this.map.values()) if (t.name === e) return t.id;
  }
  refreshRoles() {
    for (const e of this.map.values()) {
      const t = Uw(e.name);
      if (t.userData.plateKey === e.nameTag.userData.plateKey) {
        S0(t);
        continue;
      }
      (t.position.copy(e.nameTag.position),
        (t.visible = e.nameTag.visible),
        e.group.remove(e.nameTag),
        S0(e.nameTag),
        (e.nameTag = t),
        e.group.add(t));
    }
  }
  setRank(e, t, i = !1) {
    const n = this.map.get(e);
    if (!n || (n.xp === t && !i)) return;
    n.xp = t;
    const o = Uw(n.name);
    if (o.userData.plateKey === n.nameTag.userData.plateKey) {
      S0(o);
      return;
    }
    (o.position.copy(n.nameTag.position),
      (o.visible = n.nameTag.visible),
      n.group.remove(n.nameTag),
      S0(n.nameTag),
      (n.nameTag = o),
      n.group.add(o));
  }
  showSpeech(e, t) {
    const i = this.map.get(e);
    if (i) {
      if (i.speechTag) {
        i.group.remove(i.speechTag);
        const n = i.speechTag.material;
        (n.map?.dispose(), n.dispose());
      }
      ((i.speechTag = kse(t)),
        (i.speechUntil = performance.now() + 5e3),
        i.group.add(i.speechTag));
    }
  }
  pendingArmor = new Map();
  setArmor(e, t, i, n, o, a = 0, r = 0) {
    const l = [t, i, n, o, a, r],
      c = this.map.get(e);
    if (!c) {
      this.pendingArmor.set(e, l);
      return;
    }
    (this.pendingArmor.delete(e),
      !(
        l.slice(0, 4).every((h, d) => h === c.armor[d]) &&
        a === c.helmetModule &&
        r === c.helmetModuleDurability
      ) &&
        ((c.armor = l.slice(0, 4)),
        (c.helmetModule = a),
        (c.helmetModuleDurability = r),
        X0(
          c.armorRoot,
          c.head,
          c.legL,
          c.legR,
          c.armor,
          a,
          this.cosmetics.get(e)?.armor ?? {},
        )));
  }
  thermalTargets() {
    return [...this.map.values()]
      .filter((e) => e.alive && !e.hidden && e.group.visible)
      .map((e) => e.group);
  }
  clear() {
    for (const e of [...this.map.keys()]) this.remove(e);
  }
  remove(e) {
    (this.cosmetics.delete(e), this.pendingDisguise.delete(e));
    {
      const a = this.map.get(e);
      (a?.disguise?.dispose(), a && (a.disguise = null));
    }
    (this.firingUntil.delete(e), this.animations.delete(e));
    const t = this.map.get(e);
    if (
      (this.pendingArmor.delete(e),
      this.pendingVehicleSeats.delete(e),
      this.pendingSeats.delete(e),
      !t)
    )
      return;
    if ((t.beam?.dispose(), (t.beam = null), this.clearHeld(t), t.speechTag)) {
      const a = t.speechTag.material;
      (a.map?.dispose(), a.dispose());
    }
    (t.laser?.dispose(), (t.laser = null));
    const i = t.group.getObjectByName("voice-icon");
    (i && (i.material.map?.dispose(), i.material.dispose()),
      t.head.getObjectByName("cosmetic-hat")?.removeFromParent());
    const n = new Set(),
      o = new Set();
    (t.group.traverse((a) => {
      const r = a;
      if (r.isMesh) {
        r.geometry !== zN && n.add(r.geometry);
        for (const l of Array.isArray(r.material) ? r.material : [r.material])
          o.add(l);
      }
    }),
      n.forEach((a) => a.dispose()),
      o.forEach((a) => a.dispose()),
      S0(t.nameTag),
      this.scene.remove(t.group),
      this.map.delete(e));
  }
  getName(e) {
    return this.map.get(e)?.name ?? "???";
  }
  byName(e) {
    for (const [t, i] of this.map)
      if (i.name === e)
        return { id: t, xp: i.xp, looks: this.cosmetics.get(t) };
  }
  mapPlayers() {
    return [...this.map.values()]
      .filter((e) => e.alive)
      .map((e) => ({
        id: e.id,
        name: e.name,
        pos: e.target.pos,
        planet: e.planet,
        heading: e.target.yaw,
        visible: !e.hidden && e.group.visible,
      }));
  }
  list() {
    const e = [];
    for (const t of this.map.values())
      t.alive &&
        !t.hidden &&
        t.group.visible &&
        e.push({
          id: t.id,
          name: t.name,
          pos: t.group.position,
          planet: t.planet,
        });
    return e;
  }
  getPos(e) {
    return this.map.get(e)?.group.position ?? null;
  }
  heldTipWorld(e, t, i = 0) {
    const n = this.map.get(e);
    if (!n || !n.group.visible || n.held !== w.FISHING_ROD) return null;
    const o = n.heldMesh.children[0],
      a = o?.getObjectByName("vm-muzzle");
    return a
      ? (JO(o, i), n.group.updateMatrixWorld(!0), a.getWorldPosition(t))
      : null;
  }
  updateLaser(e, t, i) {
    if (
      !t ||
      !e.group.visible ||
      !e.raised ||
      e.disguise ||
      !so(e.held).laser
    ) {
      e.laser?.hide();
      return;
    }
    const n = e.vehicleId >= 0 ? e.lookYaw : e.group.rotation.y,
      o = e.target.pitch,
      a = Math.cos(o);
    Pg.set(-Math.sin(n) * a, Math.sin(o), -Math.cos(n) * a);
    const r = e.group.position;
    Gp.set(r.x, r.y + (e.prone ? 0.42 : e.crouching ? 1.25 : 1.62), r.z);
    const l = this.world.raycast(Gp, Pg, 90);
    Og.copy(Gp).addScaledVector(Pg, l ? l.dist : 90);
    const c = i
      ? (e.heldMesh.getObjectByName("vm-laser") ??
        e.heldMesh.getObjectByName("vm-muzzle"))
      : null;
    (c
      ? c.getWorldPosition(_u)
      : _u
          .copy(Gp)
          .addScaledVector(Pg, 0.45)
          .setY(Gp.y - 0.14),
      Wp.copy(Og).sub(_u));
    const h = Wp.length();
    let d = !!l;
    if (h > 0.05) {
      Wp.divideScalar(h);
      const u = this.world.raycast(_u, Wp, h + 0.05);
      u && (Og.copy(_u).addScaledVector(Wp, u.dist), (d = !0));
    }
    (e.laser ??= new DN(this.scene)).show(_u, Og, d, t);
  }
  clearHeld(e) {
    for (; e.heldMesh.children.length > 0;) {
      const t = e.heldMesh.children[0];
      (e.heldMesh.remove(t), HN(t, e.heldKind));
    }
    e.heldKind = "none";
  }
  setHeldProp(e, t) {
    if ((this.clearHeld(e), t <= 0)) return;
    const i = BN(t, this.atlasTex);
    if (!i) return;
    (e.heldMesh.add(i.obj), (e.heldKind = i.kind));
    const n = this.cosmetics.get(e.id);
    n && qa(i.obj, n.weapon, n.owner);
  }
  lookOf(e) {
    const t = this.map.get(e);
    return t ? { yaw: t.lookYaw, pitch: t.target.pitch } : null;
  }
  setState(e, t, i, n, o, a, r, l, c = Ci.EARTH, h = 0) {
    const d = this.map.get(e);
    d &&
      ((d.planet = c),
      d.target.pos.set(t, i, n),
      (d.target.yaw = o),
      (d.lookYaw = o),
      (d.target.pitch = a),
      (d.alive = (l & 2) !== 0),
      (d.onGround = (l & 1) !== 0),
      (d.prone = (l & 4) !== 0),
      (d.parachute = (l & 8) !== 0),
      (d.crouching = (l & 16) !== 0),
      (d.seated = (l & 128) !== 0),
      (d.aiming = (l & 32) !== 0),
      (d.burning = (l & 64) !== 0),
      (d.lightOn = (h & 1) !== 0),
      (d.reviving = !!(h & 4)),
      (d.downed = !!(h & 2)),
      d.downed && ((d.prone = !0), (d.aiming = !1)),
      d.held !== r && ((d.held = r), this.setHeldProp(d, r)));
  }
  beamDir = new k();
  updateBeam(e) {
    if (!(e.lightOn && e.alive && !e.hidden && e.group.visible)) {
      e.beam?.setActive(!1);
      return;
    }
    const i = e.heldMesh.getObjectByName("flashlight-mount"),
      n = !!i;
    if (
      (n &&
        !e.beam &&
        (e.beam = new Y5(this.scene, { range: 80, intensity: 24 })),
      !e.beam || (e.beam.setActive(n), !n || !i))
    )
      return;
    (i.getWorldPosition(e.beam.root.position),
      i.getWorldQuaternion(e.beam.root.quaternion),
      i.getWorldDirection(this.beamDir).negate(),
      e.beam.root.position.addScaledVector(this.beamDir, 0.055));
    const o = this.world.probeSky(
      e.group.position.x,
      e.group.position.y + 1.5,
      e.group.position.z,
    );
    e.beam.setStrength(Math.max(0.3, 1 - o * this.dayness * 0.8));
  }
  dayness = 0;
  setDayness(e) {
    this.dayness = e;
  }
  setHidden(e, t) {
    const i = this.map.get(e);
    i && (i.hidden = t);
  }
  setVehicleSeat(e, t, i) {
    const n = this.map.get(e);
    if (!n) {
      this.pendingVehicleSeats.set(e, { vehicleId: t, seat: i });
      return;
    }
    ((n.vehicleId = t), (n.vehicleSeat = i));
  }
  clearVehicleSeat(e) {
    this.pendingVehicleSeats.delete(e);
    const t = this.map.get(e);
    t && ((t.vehicleId = -1), (t.vehicleSeat = 0));
  }
  setSeat(e, t, i, n, o, a) {
    const r = this.map.get(e);
    if (!r) {
      t && this.pendingSeats.set(e, { x: i, y: n, z: o, yaw: a });
      return;
    }
    ((r.seated = t),
      (r.vehicleId = -1),
      (r.vehicleSeat = 0),
      (r.mountY = 0),
      r.target.pos.set(i, n, o),
      (r.target.yaw = a),
      (r.lookYaw = a),
      (r.target.pitch = 0),
      t || this.pendingSeats.delete(e));
  }
  setMounted(e, t) {
    const i = this.map.get(e);
    i && (i.mountY = t);
  }
  disguiseFactory = null;
  pendingDisguise = new Map();
  setDisguise(e, t) {
    const i = this.map.get(e);
    if (!i) {
      t.kind === la.NONE
        ? this.pendingDisguise.delete(e)
        : this.pendingDisguise.set(e, t);
      return;
    }
    const n = i.disguise?.disguise;
    (n && n.kind === t.kind && n.id === t.id && n.meta === t.meta) ||
      (i.disguise?.dispose(),
      (i.disguise = null),
      (i.group.visible = !i.hidden && i.alive),
      t.kind !== la.NONE &&
        this.disguiseFactory &&
        ((i.disguise = this.disguiseFactory(t)),
        this.scene.add(i.disguise.root)));
  }
  disguiseOf(e) {
    return this.map.get(e)?.disguise?.disguise ?? null;
  }
  update(e, t, i = !1, n = 0, o, a, r, l, c) {
    const h = 1 - Math.exp(-14 * e);
    this.lightT += e;
    const d = this.lightT >= Vc;
    d && (this.lightT = 0);
    for (const u of this.map.values()) {
      u.barrelsFor !== u.held &&
        ((u.barrelsFor = u.held),
        (u.barrels = u.heldMesh.getObjectByName("minigun-barrels") ?? null));
      const f = u.barrels;
      f &&
        (this.firingUntil.get(u.id) ?? 0) > performance.now() &&
        (f.rotation.z -= 85 * e);
      let p = !1;
      if (u.vehicleId >= 0 && u.vehicleSeat >= 0 && a) {
        const U = a(
          u.vehicleId,
          u.vehicleSeat,
          u.target.pos,
          u.group.quaternion,
        );
        U !== null &&
          ((u.target.yaw = U),
          (u.target.pitch = Math.max(-0.8, Math.min(0.8, u.target.pitch))),
          u.group.position.copy(u.target.pos),
          (p = !0));
      }
      const m = p
        ? Math.atan2(
            Math.sin(u.lookYaw - u.target.yaw),
            Math.cos(u.lookYaw - u.target.yaw),
          )
        : 0;
      u.head.rotation.y +=
        (Math.max(-1.15, Math.min(1.15, m)) - u.head.rotation.y) * h;
      const g = !o || o(u.target.pos.x, u.target.pos.z);
      u.group.visible =
        u.alive && !u.hidden && g && !(u.vehicleId >= 0 && l?.(u.vehicleId));
      const y = t ? u.group.position.distanceTo(t) : 0,
        b = jv?.(u.name),
        S =
          u.crouching && !u.prone && b?.side !== "ally" ? 5 : (b?.range ?? 50);
      if (
        ((u.nameTag.visible = u.group.visible && (i || !t || y <= S)),
        u.speechTag &&
          (u.speechTag.visible =
            u.group.visible && performance.now() < u.speechUntil),
        u.parachute &&
          !u.chute.children.length &&
          (u.group.remove(u.chute), (u.chute = mO()), u.group.add(u.chute)),
        u.burning &&
          !u.fire.children.length &&
          (u.group.remove(u.fire), (u.fire = dE()), u.group.add(u.fire)),
        (u.chute.visible = u.parachute && !p && u.group.visible),
        u.chute.visible || u.chute.userData.wasVisible)
      ) {
        const U = u.group.rotation.y,
          W = u.chute.userData.lastYaw ?? U;
        ((u.chute.userData.lastYaw = U),
          gO(
            u.chute,
            e,
            performance.now() / 1e3,
            Math.atan2(Math.sin(U - W), Math.cos(U - W)) / Math.max(0.001, e),
          ));
      }
      if (
        ((u.fire.visible = u.burning && u.group.visible),
        u.fire.visible && uE(u.fire, performance.now() / 1e3),
        p ||
          (bh.copy(u.group.position),
          (bh.y -= u.mountY),
          bh.lerp(u.target.pos, h),
          u.group.position.copy(bh),
          (u.group.position.y += u.mountY)),
        d && u.group.visible)
      ) {
        const U = Il(this.world, u.group.position, n, 1);
        (u.burning && (U.strength = Math.max(U.strength, 0.55)),
          Pl(u.group, U));
      }
      let M = u.target.yaw - u.group.rotation.y;
      ((M = Math.atan2(Math.sin(M), Math.cos(M))),
        p || (u.group.rotation.y += M * h));
      const E = u.group.position.distanceTo(u.lastPos);
      ((u.speed = p
        ? 0
        : u.speed +
          (Math.min(10, E / Math.max(e, 0.001)) - u.speed) *
            (1 - Math.exp(-10 * e))),
        u.lastPos.copy(u.group.position));
      const A = !p && u.seated;
      u.group.rotation.order = "YXZ";
      const T = !p && u.prone && !A ? -Math.PI / 2 : 0;
      (p ||
        ((u.group.rotation.x += (T - u.group.rotation.x) * h),
        (u.group.rotation.z *= 1 - h)),
        u.group.scale.set(1, 1, 1));
      const x = !p && !A && u.crouching && !u.prone,
        R = this.animations.get(u.id),
        _ = performance.now() / 1e3,
        C = !u.group.visible || !!u.disguise || TI(u.group.position, 3);
      xI(u.group, C);
      const P = R && R.reload > 0 ? (_ - R.reloadStart) / (R.reload / 1e3) : -1;
      if (
        ((u.raised =
          u.aiming ||
          ((P < 0 || P >= 1) &&
            performance.now() < (this.firingUntil.get(u.id) ?? 0) + Ise)),
        !C)
      ) {
        (this.updateBeam(u), this.updateLaser(u, c, !1));
        continue;
      }
      (Xf(u, e, _, {
        speed: u.speed,
        pitch: u.target.pitch,
        held: u.held,
        aiming: u.raised,
        reviving: u.reviving,
        airborne: !p && !u.onGround,
        seated: (p && !r?.(u.vehicleId, u.vehicleSeat)) || A || u.mountY > 0,
        crouching: x,
        prone: u.prone,
        parachute: u.parachute,
        emote: u.alive && !p && !A ? R?.emote : 0,
        emoteTime: R ? _ - R.start : 0,
        reload: P < 1 ? P : -1,
        shot: Math.max(
          0,
          ((this.firingUntil.get(u.id) ?? 0) - performance.now()) / 140,
        ),
        inspect:
          u.alive && !u.downed && u.speed < 6.5 && P < 0 && R
            ? _ - R.inspectStart
            : -1,
        voice: R && _ - R.voiceAt < 0.65 ? R.voice : 0,
        swing: R ? (_ - R.swingAt) / _O : -1,
      }),
        u.downed
          ? ((u.armL.rotation.x = 1.7 + Math.sin(_ * 3) * 0.045),
            (u.armR.rotation.x = 2.35),
            (u.legL.rotation.x = 0.18),
            (u.legR.rotation.x = -0.1),
            (u.head.rotation.z = 0.22))
          : (u.head.rotation.z *= Math.exp(-e * 6)));
      const O = !!u.downed && u.alive && jv?.(u.name)?.side !== "enemy";
      let B = u.reviveIcon;
      if (
        (O && !B && ((B = u.reviveIcon = Rse()), u.group.add(B)),
        B && ((B.visible = O), O))
      ) {
        const U = 0.052 * (1 + Math.sin(_ * 5) * 0.09);
        (B.scale.set(U, U, 1), B.position.set(0, 1.35, 0));
      }
      const H = !!R && _ - R.voiceAt < 0.65 && R.voice > 0.008;
      let D = u.voiceIcon;
      if (
        (H && !D && ((D = u.voiceIcon = _se()), u.group.add(D)),
        D &&
          (D.position.set(
            u.nameTag.scale.x / 2 + 0.24,
            u.nameTag.position.y,
            0,
          ),
          (D.visible = H && u.nameTag.visible),
          D.material.color.setHex(7796158)),
        this.updateBeam(u),
        this.updateLaser(u, c, !0),
        u.disguise)
      ) {
        const U = u.alive && !u.hidden && g && !p && !A && u.vehicleId < 0;
        ((u.disguise.root.visible = U),
          U &&
            ((u.group.visible = !1),
            bh.copy(u.group.position),
            (bh.y -= u.mountY),
            u.disguise.update(e, bh, u.target.yaw, u.speed, u.onGround, n)));
      }
    }
  }
  hitboxes() {
    const e = [];
    for (const t of this.map.values()) {
      if (t.disguise?.root.visible && t.alive) {
        const a = t.disguise.box,
          r = t.disguise.root.quaternion.clone(),
          l = a
            .getCenter(new k())
            .applyQuaternion(r)
            .add(t.disguise.root.position),
          c = a.max.y - a.min.y;
        e.push({
          x: l.x,
          y: l.y - c / 2,
          z: l.z,
          hw: (a.max.x - a.min.x) / 2,
          hz: (a.max.z - a.min.z) / 2,
          h: c,
          quat: r,
        });
        continue;
      }
      if (!t.alive || t.hidden || !t.group.visible) continue;
      const i = t.group.position.clone().add(new k(0, t.prone ? 0.3 : 0, 0)),
        n = t.group.getWorldQuaternion(new hi()),
        o = t.seated ? Kk : t.crouching && !t.prone ? qk : Vk;
      for (const [, a, r, l, c, h, d] of o) {
        const u = h - r,
          f = new k((a + c) * 0.5, (r + h) * 0.5, (l + d) * 0.5)
            .applyQuaternion(n)
            .add(i);
        e.push({
          x: f.x,
          y: f.y - u * 0.5,
          z: f.z,
          hw: (c - a) * 0.5,
          hz: (d - l) * 0.5,
          h: u,
          quat: n.clone(),
        });
      }
    }
    return e;
  }
  raycastHit(e, t, i) {
    let n = null;
    for (const o of this.map.values()) {
      if (o.disguise?.root.visible && o.alive) {
        const d = o.disguise.root.quaternion.clone().invert(),
          u = e.clone().sub(o.disguise.root.position).applyQuaternion(d),
          f = t.clone().applyQuaternion(d),
          p = o.disguise.box,
          m = Om(u, f, p.min.x, p.min.y, p.min.z, p.max.x, p.max.y, p.max.z);
        m !== null &&
          m < i &&
          (!n || m < n.dist) &&
          (n = {
            id: o.id,
            dist: m,
            point: e.clone().addScaledVector(t, m),
            region: tn.TORSO,
          });
        continue;
      }
      if (!o.alive || o.hidden || !o.group.visible) continue;
      {
        const d = o.group.position;
        if (!vT(e.x, e.y, e.z, t.x, t.y, t.z, d.x, d.y + 0.9, d.z, 2.6, i))
          continue;
      }
      const a = o.group.position.clone().add(new k(0, o.prone ? 0.3 : 0, 0)),
        r = o.group.getWorldQuaternion(new hi()).invert(),
        l = e.clone().sub(a).applyQuaternion(r),
        c = t.clone().applyQuaternion(r),
        h = o.seated ? Kk : o.crouching && !o.prone ? qk : Vk;
      for (const [d, u, f, p, m, g, y] of h) {
        const b = Om(l, c, u, f, p, m, g, y);
        b !== null &&
          b < i &&
          (!n || b < n.dist) &&
          (n = {
            id: o.id,
            dist: b,
            point: e.clone().addScaledVector(t, b),
            region: d,
          });
      }
    }
    return n;
  }
}
