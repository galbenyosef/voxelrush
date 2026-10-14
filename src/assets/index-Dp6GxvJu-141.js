// index-Dp6GxvJu 141 — group
// Lines 86352-87212 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class oZ {
  constructor(e, t, i) {
    w(this, "map", new Map());
    w(this, "cosmetics", new Map());
    w(this, "pendingVehicleSeats", new Map());
    w(this, "pendingSeats", new Map());
    w(this, "lightT", 0);
    w(this, "firingUntil", new Map());
    w(this, "animations", new Map());
    w(this, "pendingArmor", new Map());
    w(this, "beamDir", new k());
    w(this, "dayness", 0);
    w(this, "disguiseFactory", null);
    w(this, "pendingDisguise", new Map());
    ((this.scene = e),
      (this.atlasTex = t),
      (this.world = i),
      Vo(() => {
        for (const [s, o] of this.map) this.setRank(s, o.xp, !0);
      }));
  }
  setCosmetics(e, t) {
    var o;
    const i = JSON.stringify(
      ((o = this.cosmetics.get(e)) == null ? void 0 : o.armor) ?? {},
    );
    this.cosmetics.set(e, t);
    const s = this.map.get(e);
    if (s) {
      Wl(s.group, t.character, t.custom);
      for (const a of s.heldMesh.children) Ba(a, t.weapon, t.owner);
      JSON.stringify(t.armor ?? {}) !== i &&
        ih(
          s.armorRoot,
          s.head,
          s.legL,
          s.legR,
          s.armor,
          s.helmetModule,
          t.armor ?? {},
        );
    }
  }
  hideTagsUnless(e) {
    for (const [t, i] of this.map)
      i.nameTag.visible && !e(t, i.group.position) && (i.nameTag.visible = !1);
  }
  respawn(e, t, i, s) {
    const o = this.map.get(e);
    o &&
      (o.target.pos.set(t, i, s),
      o.group.position.set(t, i, s),
      (o.alive = !0));
  }
  corpseOf(e) {
    const t = this.map.get(e);
    if (!t || !t.alive || t.hidden || !t.group.visible) return null;
    const i = t.group.getObjectByName("pose-root");
    if (!i) return null;
    const s = i.clone(!0),
      o = new Map(),
      a = (h, d) => {
        (o.set(h, d),
          h.children.forEach((u, f) => {
            d.children[f] && a(u, d.children[f]);
          }));
      };
    a(i, s);
    const r = new pe();
    (r.add(s),
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
  setAnimation(e, t, i, s = 0) {
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
      o.inspectStart = i ? a - s : -9;
      return;
    }
    if (t === 3) {
      o.swingAt = a;
      return;
    }
    (t === 0 && ((o.emote = i), (o.start = a - s)),
      t === 1 && ((o.reload = i), (o.reloadStart = a - s)),
      t === 2 && ((o.voice = i / 255), (o.voiceAt = a)));
  }
  onShot(e) {
    const t = this.animations.get(e);
    (t && (t.inspectStart = -9),
      this.firingUntil.set(e, performance.now() + 140));
  }
  add(e, t, i = 0) {
    if (this.map.has(e)) return;
    const s = ec(xI(e)),
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
      } = s,
      p = yb(t);
    o.add(p);
    const m = new pe();
    ((m.visible = !1), o.add(m));
    const y = new pe();
    (o.add(y),
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
        fire: y,
        lightOn: !1,
        beam: null,
        laserLine: null,
        laserDot: null,
        mountY: 0,
        vehicleId: -1,
        vehicleSeat: 0,
        lookYaw: 0,
        planet: Si.EARTH,
        disguise: null,
      }));
    const g = this.cosmetics.get(e);
    g && this.setCosmetics(e, g);
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
    const x = this.pendingArmor.get(e);
    x &&
      (this.pendingArmor.delete(e),
      this.setArmor(e, x[0], x[1], x[2], x[3], x[4], x[5]));
  }
  idByName(e) {
    for (const t of this.map.values()) if (t.name === e) return t.id;
  }
  refreshRoles() {
    for (const e of this.map.values()) {
      const t = yb(e.name);
      if (t.userData.plateKey === e.nameTag.userData.plateKey) {
        Pc(t);
        continue;
      }
      (t.position.copy(e.nameTag.position),
        (t.visible = e.nameTag.visible),
        e.group.remove(e.nameTag),
        Pc(e.nameTag),
        (e.nameTag = t),
        e.group.add(t));
    }
  }
  setRank(e, t, i = !1) {
    const s = this.map.get(e);
    if (!s || (s.xp === t && !i)) return;
    s.xp = t;
    const o = yb(s.name);
    if (o.userData.plateKey === s.nameTag.userData.plateKey) {
      Pc(o);
      return;
    }
    (o.position.copy(s.nameTag.position),
      (o.visible = s.nameTag.visible),
      s.group.remove(s.nameTag),
      Pc(s.nameTag),
      (s.nameTag = o),
      s.group.add(o));
  }
  showSpeech(e, t) {
    var s;
    const i = this.map.get(e);
    if (i) {
      if (i.speechTag) {
        i.group.remove(i.speechTag);
        const o = i.speechTag.material;
        ((s = o.map) == null || s.dispose(), o.dispose());
      }
      ((i.speechTag = XX(t)),
        (i.speechUntil = performance.now() + 5e3),
        i.group.add(i.speechTag));
    }
  }
  setArmor(e, t, i, s, o, a = 0, r = 0) {
    var h;
    const l = [t, i, s, o, a, r],
      c = this.map.get(e);
    if (!c) {
      this.pendingArmor.set(e, l);
      return;
    }
    (this.pendingArmor.delete(e),
      !(
        l.slice(0, 4).every((d, u) => d === c.armor[u]) &&
        a === c.helmetModule &&
        r === c.helmetModuleDurability
      ) &&
        ((c.armor = l.slice(0, 4)),
        (c.helmetModule = a),
        (c.helmetModuleDurability = r),
        ih(
          c.armorRoot,
          c.head,
          c.legL,
          c.legR,
          c.armor,
          a,
          ((h = this.cosmetics.get(e)) == null ? void 0 : h.armor) ?? {},
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
    var a, r, l, c;
    (this.cosmetics.delete(e), this.pendingDisguise.delete(e));
    {
      const h = this.map.get(e);
      ((a = h == null ? void 0 : h.disguise) == null || a.dispose(),
        h && (h.disguise = null));
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
    if (
      ((r = t.beam) == null || r.dispose(),
      (t.beam = null),
      this.clearHeld(t),
      t.speechTag)
    ) {
      const h = t.speechTag.material;
      ((l = h.map) == null || l.dispose(), h.dispose());
    }
    (t.laserLine &&
      (this.scene.remove(t.laserLine),
      t.laserLine.geometry.dispose(),
      t.laserLine.material.dispose()),
      t.laserDot &&
        (this.scene.remove(t.laserDot), t.laserDot.material.dispose()));
    const i = t.group.getObjectByName("voice-icon");
    i && ((c = i.material.map) == null || c.dispose(), i.material.dispose());
    const s = new Set(),
      o = new Set();
    (t.group.traverse((h) => {
      const d = h;
      if (d.isMesh) {
        d.geometry !== MI && s.add(d.geometry);
        for (const u of Array.isArray(d.material) ? d.material : [d.material])
          o.add(u);
      }
    }),
      s.forEach((h) => h.dispose()),
      o.forEach((h) => h.dispose()),
      Pc(t.nameTag),
      this.scene.remove(t.group),
      this.map.delete(e));
  }
  getName(e) {
    var t;
    return ((t = this.map.get(e)) == null ? void 0 : t.name) ?? "???";
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
    var t;
    return ((t = this.map.get(e)) == null ? void 0 : t.group.position) ?? null;
  }
  heldTipWorld(e, t, i = 0) {
    const s = this.map.get(e);
    if (!s || !s.group.visible || s.held !== E.FISHING_ROD) return null;
    const o = s.heldMesh.children[0],
      a = o == null ? void 0 : o.getObjectByName("vm-muzzle");
    return a
      ? (Yk(o, i), s.group.updateMatrixWorld(!0), a.getWorldPosition(t))
      : null;
  }
  updateLaser(e) {
    if (!(e.group.visible && e.aiming && So(e.held).laser)) {
      (e.laserLine && (e.laserLine.visible = !1),
        e.laserDot && (e.laserDot.visible = !1));
      return;
    }
    if (!e.laserLine) {
      const g = new ci();
      g.setAttribute("position", new oi(new Float32Array(6), 3));
      const b = new Eo({
        color: 16720418,
        transparent: !0,
        opacity: 0.8,
        blending: cn,
        depthWrite: !1,
      });
      ((e.laserLine = new Kc(g, b)),
        (e.laserLine.frustumCulled = !1),
        this.scene.add(e.laserLine));
      const S = new es({
        color: 16724787,
        transparent: !0,
        opacity: 0.9,
        blending: cn,
        depthWrite: !1,
      });
      ((e.laserDot = new os(S)),
        e.laserDot.scale.set(0.06, 0.06, 1),
        this.scene.add(e.laserDot));
    }
    const i = e.group.rotation.y,
      s = e.target.pitch,
      o = Math.cos(s);
    $m.set(-Math.sin(i) * o, Math.sin(s), -Math.cos(i) * o);
    const a = e.group.position;
    qm.set(a.x, a.y + (e.prone ? 0.42 : e.crouching ? 1.25 : 1.62), a.z);
    const r = this.world.raycast(qm, $m, 90);
    gd.copy(qm).addScaledVector($m, r ? r.dist : 90);
    const l =
      e.heldMesh.getObjectByName("vm-laser") ??
      e.heldMesh.getObjectByName("vm-muzzle");
    (l ? l.getWorldPosition(vc) : vc.copy(qm).addScaledVector($m, 0.3),
      ff.copy(gd).sub(vc));
    const c = ff.length();
    if (c > 0.05) {
      ff.divideScalar(c);
      const g = this.world.raycast(vc, ff, c + 0.05);
      g && gd.copy(vc).addScaledVector(ff, g.dist);
    }
    const h = vc.x,
      d = vc.y,
      u = vc.z,
      f = gd.x,
      p = gd.y,
      m = gd.z,
      y = e.laserLine.geometry.attributes.position;
    (y.setXYZ(0, h, d, u),
      y.setXYZ(1, f, p, m),
      (y.needsUpdate = !0),
      e.laserLine.geometry.computeBoundingSphere(),
      (e.laserLine.visible = !0),
      e.laserDot.position.set(f, p, m),
      (e.laserDot.visible = !0));
  }
  clearHeld(e) {
    for (; e.heldMesh.children.length > 0;) {
      const t = e.heldMesh.children[0];
      (e.heldMesh.remove(t), bI(t, e.heldKind));
    }
    e.heldKind = "none";
  }
  setHeldProp(e, t) {
    if ((this.clearHeld(e), t <= 0)) return;
    const i = wI(t, this.atlasTex);
    if (!i) return;
    (e.heldMesh.add(i.obj), (e.heldKind = i.kind));
    const s = this.cosmetics.get(e.id);
    s && Ba(i.obj, s.weapon, s.owner);
  }
  lookOf(e) {
    const t = this.map.get(e);
    return t ? { yaw: t.lookYaw, pitch: t.target.pitch } : null;
  }
  setState(e, t, i, s, o, a, r, l, c = Si.EARTH, h = 0) {
    const d = this.map.get(e);
    d &&
      ((d.planet = c),
      d.target.pos.set(t, i, s),
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
  updateBeam(e) {
    var a;
    if (!(e.lightOn && e.alive && !e.hidden && e.group.visible)) {
      (a = e.beam) == null || a.setActive(!1);
      return;
    }
    const i = e.heldMesh.getObjectByName("flashlight-mount"),
      s = !!i;
    if (
      (s &&
        !e.beam &&
        (e.beam = new S4(this.scene, { range: 80, intensity: 24 })),
      !e.beam || (e.beam.setActive(s), !s || !i))
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
  setDayness(e) {
    this.dayness = e;
  }
  setHidden(e, t) {
    const i = this.map.get(e);
    i && (i.hidden = t);
  }
  setVehicleSeat(e, t, i) {
    const s = this.map.get(e);
    if (!s) {
      this.pendingVehicleSeats.set(e, { vehicleId: t, seat: i });
      return;
    }
    ((s.vehicleId = t), (s.vehicleSeat = i));
  }
  clearVehicleSeat(e) {
    this.pendingVehicleSeats.delete(e);
    const t = this.map.get(e);
    t && ((t.vehicleId = -1), (t.vehicleSeat = 0));
  }
  setSeat(e, t, i, s, o, a) {
    const r = this.map.get(e);
    if (!r) {
      t && this.pendingSeats.set(e, { x: i, y: s, z: o, yaw: a });
      return;
    }
    ((r.seated = t),
      (r.vehicleId = -1),
      (r.vehicleSeat = 0),
      (r.mountY = 0),
      r.target.pos.set(i, s, o),
      (r.target.yaw = a),
      (r.lookYaw = a),
      (r.target.pitch = 0),
      t || this.pendingSeats.delete(e));
  }
  setMounted(e, t) {
    const i = this.map.get(e);
    i && (i.mountY = t);
  }
  setDisguise(e, t) {
    var o, a;
    const i = this.map.get(e);
    if (!i) {
      t.kind === zo.NONE
        ? this.pendingDisguise.delete(e)
        : this.pendingDisguise.set(e, t);
      return;
    }
    const s = (o = i.disguise) == null ? void 0 : o.disguise;
    (s && s.kind === t.kind && s.id === t.id && s.meta === t.meta) ||
      ((a = i.disguise) == null || a.dispose(),
      (i.disguise = null),
      (i.group.visible = !i.hidden && i.alive),
      t.kind !== zo.NONE &&
        this.disguiseFactory &&
        ((i.disguise = this.disguiseFactory(t)),
        this.scene.add(i.disguise.root)));
  }
  disguiseOf(e) {
    var t, i;
    return (
      ((i = (t = this.map.get(e)) == null ? void 0 : t.disguise) == null
        ? void 0
        : i.disguise) ?? null
    );
  }
  update(e, t, i = !1, s = 0, o, a, r, l) {
    var d;
    const c = 1 - Math.exp(-14 * e);
    this.lightT += e;
    const h = this.lightT >= Vr;
    h && (this.lightT = 0);
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
        const O = a(
          u.vehicleId,
          u.vehicleSeat,
          u.target.pos,
          u.group.quaternion,
        );
        O !== null &&
          ((u.target.yaw = O),
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
        (Math.max(-1.15, Math.min(1.15, m)) - u.head.rotation.y) * c;
      const y = !o || o(u.target.pos.x, u.target.pos.z);
      u.group.visible =
        u.alive &&
        !u.hidden &&
        y &&
        !(u.vehicleId >= 0 && l != null && l(u.vehicleId));
      const g = t ? u.group.position.distanceTo(t) : 0,
        b = Lr == null ? void 0 : Lr(u.name),
        S =
          u.crouching && !u.prone && (b == null ? void 0 : b.side) !== "ally"
            ? 5
            : ((b == null ? void 0 : b.range) ?? 50);
      if (
        ((u.nameTag.visible = u.group.visible && (i || !t || g <= S)),
        u.speechTag &&
          (u.speechTag.visible =
            u.group.visible && performance.now() < u.speechUntil),
        u.parachute &&
          !u.chute.children.length &&
          (u.group.remove(u.chute), (u.chute = nk()), u.group.add(u.chute)),
        u.burning &&
          !u.fire.children.length &&
          (u.group.remove(u.fire), (u.fire = TM()), u.group.add(u.fire)),
        (u.chute.visible = u.parachute && !p && u.group.visible),
        u.chute.visible || u.chute.userData.wasVisible)
      ) {
        const O = u.group.rotation.y,
          F = u.chute.userData.lastYaw ?? O;
        ((u.chute.userData.lastYaw = O),
          sk(
            u.chute,
            e,
            performance.now() / 1e3,
            Math.atan2(Math.sin(O - F), Math.cos(O - F)) / Math.max(0.001, e),
          ));
      }
      if (
        ((u.fire.visible = u.burning && u.group.visible),
        u.fire.visible && AM(u.fire, performance.now() / 1e3),
        p ||
          (Ch.copy(u.group.position),
          (Ch.y -= u.mountY),
          Ch.lerp(u.target.pos, c),
          u.group.position.copy(Ch),
          (u.group.position.y += u.mountY)),
        h && u.group.visible)
      ) {
        const O = dr(this.world, u.group.position, s, 1);
        (u.burning && (O.strength = Math.max(O.strength, 0.55)),
          ur(u.group, O));
      }
      let M = u.target.yaw - u.group.rotation.y;
      ((M = Math.atan2(Math.sin(M), Math.cos(M))),
        p || (u.group.rotation.y += M * c));
      const x = u.group.position.distanceTo(u.lastPos);
      ((u.speed = p
        ? 0
        : u.speed +
          (Math.min(10, x / Math.max(e, 0.001)) - u.speed) *
            (1 - Math.exp(-10 * e))),
        u.lastPos.copy(u.group.position));
      const T = !p && u.seated;
      u.group.rotation.order = "YXZ";
      const A = !p && u.prone && !T ? -Math.PI / 2 : 0;
      (p ||
        ((u.group.rotation.x += (A - u.group.rotation.x) * c),
        (u.group.rotation.z *= 1 - c)),
        u.group.scale.set(1, 1, 1));
      const _ = !p && !T && u.crouching && !u.prone,
        C = this.animations.get(u.id),
        R = performance.now() / 1e3,
        L = !u.group.visible || !!u.disguise || J8(u.group.position, 3);
      if ((eC(u.group, L), !L)) {
        (this.updateBeam(u), this.updateLaser(u));
        continue;
      }
      const N = C && C.reload > 0 ? (R - C.reloadStart) / (C.reload / 1e3) : -1;
      (Su(u, e, R, {
        speed: u.speed,
        pitch: u.target.pitch,
        held: u.held,
        aiming: u.aiming,
        reviving: u.reviving,
        airborne: !p && !u.onGround,
        seated:
          (p && !(r != null && r(u.vehicleId, u.vehicleSeat))) ||
          T ||
          u.mountY > 0,
        crouching: _,
        prone: u.prone,
        parachute: u.parachute,
        emote: u.alive && !p && !T ? (C == null ? void 0 : C.emote) : 0,
        emoteTime: C ? R - C.start : 0,
        reload: N < 1 ? N : -1,
        shot: Math.max(
          0,
          ((this.firingUntil.get(u.id) ?? 0) - performance.now()) / 140,
        ),
        inspect:
          u.alive && !u.downed && u.speed < 6.5 && N < 0 && C
            ? R - C.inspectStart
            : -1,
        voice: C && R - C.voiceAt < 0.65 ? C.voice : 0,
        swing: C ? (R - C.swingAt) / fk : -1,
      }),
        u.downed
          ? ((u.armL.rotation.x = 1.7 + Math.sin(R * 3) * 0.045),
            (u.armR.rotation.x = 2.35),
            (u.legL.rotation.x = 0.18),
            (u.legR.rotation.x = -0.1),
            (u.head.rotation.z = 0.22))
          : (u.head.rotation.z *= Math.exp(-e * 6)));
      const D =
        !!u.downed &&
        u.alive &&
        ((d = Lr == null ? void 0 : Lr(u.name)) == null ? void 0 : d.side) !==
          "enemy";
      let H = u.reviveIcon;
      if (
        (D && !H && ((H = u.reviveIcon = jX()), u.group.add(H)),
        H && ((H.visible = D), D))
      ) {
        const O = 0.052 * (1 + Math.sin(R * 5) * 0.09);
        (H.scale.set(O, O, 1), H.position.set(0, 1.35, 0));
      }
      const G = !!C && R - C.voiceAt < 0.65 && C.voice > 0.008;
      let I = u.voiceIcon;
      if (
        (G && !I && ((I = u.voiceIcon = YX()), u.group.add(I)),
        I &&
          (I.position.set(
            u.nameTag.scale.x / 2 + 0.24,
            u.nameTag.position.y,
            0,
          ),
          (I.visible = G && u.nameTag.visible),
          I.material.color.setHex(7796158)),
        this.updateBeam(u),
        this.updateLaser(u),
        u.disguise)
      ) {
        const O = u.alive && !u.hidden && y && !p && !T && u.vehicleId < 0;
        ((u.disguise.root.visible = O),
          O &&
            ((u.group.visible = !1),
            Ch.copy(u.group.position),
            (Ch.y -= u.mountY),
            u.disguise.update(e, Ch, u.target.yaw, u.speed, u.onGround, s)));
      }
    }
  }
  hitboxes() {
    var t;
    const e = [];
    for (const i of this.map.values()) {
      if ((t = i.disguise) != null && t.root.visible && i.alive) {
        const r = i.disguise.box,
          l = i.disguise.root.quaternion.clone(),
          c = r
            .getCenter(new k())
            .applyQuaternion(l)
            .add(i.disguise.root.position),
          h = r.max.y - r.min.y;
        e.push({
          x: c.x,
          y: c.y - h / 2,
          z: c.z,
          hw: (r.max.x - r.min.x) / 2,
          hz: (r.max.z - r.min.z) / 2,
          h,
          quat: l,
        });
        continue;
      }
      if (!i.alive || i.hidden || !i.group.visible) continue;
      const s = i.group.position.clone().add(new k(0, i.prone ? 0.3 : 0, 0)),
        o = i.group.getWorldQuaternion(new Jt()),
        a = i.seated ? m_ : i.crouching && !i.prone ? p_ : f_;
      for (const [, r, l, c, h, d, u] of a) {
        const f = d - l,
          p = new k((r + h) * 0.5, (l + d) * 0.5, (c + u) * 0.5)
            .applyQuaternion(o)
            .add(s);
        e.push({
          x: p.x,
          y: p.y - f * 0.5,
          z: p.z,
          hw: (h - r) * 0.5,
          hz: (u - c) * 0.5,
          h: f,
          quat: o.clone(),
        });
      }
    }
    return e;
  }
  raycastHit(e, t, i) {
    var o;
    let s = null;
    for (const a of this.map.values()) {
      if ((o = a.disguise) != null && o.root.visible && a.alive) {
        const u = a.disguise.root.quaternion.clone().invert(),
          f = e.clone().sub(a.disguise.root.position).applyQuaternion(u),
          p = t.clone().applyQuaternion(u),
          m = a.disguise.box,
          y = Vp(f, p, m.min.x, m.min.y, m.min.z, m.max.x, m.max.y, m.max.z);
        y !== null &&
          y < i &&
          (!s || y < s.dist) &&
          (s = {
            id: a.id,
            dist: y,
            point: e.clone().addScaledVector(t, y),
            region: vs.TORSO,
          });
        continue;
      }
      if (!a.alive || a.hidden || !a.group.visible) continue;
      const r = a.group.position.clone().add(new k(0, a.prone ? 0.3 : 0, 0)),
        l = a.group.getWorldQuaternion(new Jt()).invert(),
        c = e.clone().sub(r).applyQuaternion(l),
        h = t.clone().applyQuaternion(l),
        d = a.seated ? m_ : a.crouching && !a.prone ? p_ : f_;
      for (const [u, f, p, m, y, g, b] of d) {
        const S = Vp(c, h, f, p, m, y, g, b);
        S !== null &&
          S < i &&
          (!s || S < s.dist) &&
          (s = {
            id: a.id,
            dist: S,
            point: e.clone().addScaledVector(t, S),
            region: u,
          });
      }
    }
    return s;
  }
}
