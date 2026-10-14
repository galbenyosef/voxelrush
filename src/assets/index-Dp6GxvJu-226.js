// index-Dp6GxvJu 226 — group
// Lines 124971-125583 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class qne {
  constructor(e, t) {
    w(this, "bots", new Map());
    w(this, "cameraBot", -1);
    w(this, "lightT", 0);
    w(this, "frame", 0);
    w(this, "enabled", !0);
    w(this, "allowLod", !1);
    w(this, "view", null);
    w(this, "viewSphere", new Ha(new k(), 1.7));
    w(this, "battle", () => !1);
    w(this, "corpses", null);
    ((this.scene = e), (this.world = t));
    const i = () => {
      for (const s of this.bots.values()) this.refreshSquadLabel(s);
    };
    (Vo(i), window.addEventListener("squad-state-changed", i));
  }
  getPosition(e) {
    var t;
    return (t = this.bots.get(e)) == null ? void 0 : t.group.position;
  }
  setCameraBot(e) {
    if (this.cameraBot !== e) {
      const i = this.bots.get(this.cameraBot);
      (i && ((i.group.visible = !0), (i.labelAnchor.visible = !0)),
        (this.cameraBot = e));
    }
    const t = this.bots.get(e);
    t &&
      ((t.group.visible = !1),
      (t.labelAnchor.visible = !1),
      t.lod && (t.lod.visible = !1));
  }
  setEnabled(e) {
    this.enabled = e;
    for (const t of this.bots.values())
      ((t.group.visible = e),
        t.lod && (t.lod.visible = !1),
        (t.labelAnchor.visible = e));
  }
  clear() {
    for (const e of [...this.bots.keys()]) this.onDestroy(e);
  }
  visibleHostileCount(e, t = 500) {
    if (!this.enabled) return 0;
    let i = 0;
    const s = t * t;
    for (const o of this.bots.values())
      !o.raid || o.hp <= 0 || (o.target.pos.distanceToSquared(e) <= s && i++);
    return i;
  }
  refreshPlates() {
    for (const e of this.bots.values()) this.refreshSquadLabel(e);
  }
  refreshSquadLabel(e) {
    const t = this.battle(),
      i =
        !t && !e.hostile && !e.npc && Xa(e.ownerName)
          ? Po(e.ownerName)
          : void 0,
      s =
        i == null
          ? void 0
          : i.members.find(
              (l) => l.username.toLowerCase() === e.ownerName.toLowerCase(),
            ),
      o = s ? W2(s.slot) : void 0,
      a = i && o ? { name: i.name, color: o } : void 0,
      r = XR(e.ownerName, e.hostile, e.npc, t, a);
    (r.userData.plateKey === e.nameTag.userData.plateKey
      ? Pc(r)
      : (r.position.copy(e.nameTag.position),
        (r.visible = e.nameTag.visible),
        e.labelAnchor.remove(e.nameTag),
        Pc(e.nameTag),
        (e.nameTag = r),
        e.labelAnchor.add(r)),
      o
        ? (e.squadRing ||
            ((e.squadRing = new le(
              new sh(0.43, 0.52, 24),
              new qt({
                color: o,
                transparent: !0,
                opacity: 0.7,
                depthTest: !1,
                depthWrite: !1,
                side: Ai,
                toneMapped: !1,
              }),
            )),
            (e.squadRing.name = "squad-bot-marker"),
            (e.squadRing.rotation.x = -Math.PI / 2),
            (e.squadRing.position.y = 0.06),
            e.labelAnchor.add(e.squadRing)),
          e.squadRing.material.color.set(o))
        : e.squadRing &&
          (e.labelAnchor.remove(e.squadRing),
          e.squadRing.geometry.dispose(),
          e.squadRing.material.dispose(),
          (e.squadRing = null)));
  }
  onSpawn(e, t, i, s, o, a, r = 0, l = [], c = !1, h = 0, d = 0) {
    const u = this.bots.get(e),
      f = u ? u.group.position.clone() : null;
    if ((this.onDestroy(e), ![0, 1, 2, 7, 8, 9, 10, 18].includes(r))) return;
    const p = r === 1 || r === 7 || r === 8 || r === 9 || r === 10,
      m = r === 18,
      y = r === 2 || m,
      g = ec(
        r === 7 ? 15326912 : m ? 1512991 : y ? 4873781 : p ? 7022112 : 5662532,
      );
    (m && Nne(g), (g.group.rotation.order = "YXZ"));
    let b = 0;
    if (r === 7) (Vne(g), g.heldMesh.add($ne()));
    else if (!y) {
      const R =
        d ||
        (r === 8
          ? ITEM.AWP
          : r === 9
            ? ITEM.MINIGUN
            : r === 10
              ? ITEM.GRENADE_LAUNCHER
              : ITEM.AK47);
      b = R;
      const L = R0(R).group.clone(!0);
      if (R === ITEM.AWP) {
        const N = new le(
          new xt(0.032, 0.032, 0.23, 12),
          new gi({ color: 2436647 }),
        );
        ((N.rotation.x = Math.PI / 2),
          N.position.set(0, 0.105, -0.12),
          L.add(N));
      }
      (L.rotation.set(-Math.PI / 2, 0, 0),
        L.position.set(0.04, -0.04, 0),
        L.scale.setScalar(1.05),
        g.heldMesh.add(L));
    }
    ih(g.armorRoot, g.head, g.legL, g.legR, l);
    const S = XR(t, p, y, this.battle()),
      M = document.createElement("canvas"),
      x = Wne(M),
      T = Math.max(100, a);
    (ZR(M, a, T), (x.material.map.needsUpdate = !0));
    const A = new pe();
    (A.add(S, x),
      A.position.set(i, s, o),
      (x.visible = !y),
      g.group.position.set(i, s, o),
      this.scene.add(g.group),
      this.scene.add(A));
    const _ = p
      ? new PL(
          g.group,
          [g.head, g.armL, g.armR, g.legL, g.legR],
          `soldier:${r}:${h}:${l.join(",")}:${n4()}`,
        )
      : null;
    _ &&
      (_.position.set(i, s, o),
      (_.visible = !1),
      (_.frustumCulled = !0),
      this.scene.add(_));
    const C = new Set([
      g.group,
      g.head,
      g.armL,
      g.armR,
      g.legL,
      g.legR,
      g.heldMesh,
      ...g.heldMesh.children,
    ]);
    (g.group.traverse((R) => {
      (R.name === "pose-root" ||
        R.name === "joint" ||
        R.name === "gesture" ||
        R.name === "grip-r" ||
        R.name === "grip-l" ||
        R.name === "mag-grip" ||
        R.name === "weapon-magazine") &&
        C.add(R);
    }),
      Ine(g.group, C),
      f && (g.group.position.copy(f), A.position.copy(f)),
      this.bots.set(e, {
        id: e,
        heldMesh: g.heldMesh,
        ownerName: t,
        hostile: p,
        npc: y,
        kind: r,
        raid: c,
        hp: a,
        maxHp: T,
        tier: h,
        group: g.group,
        lod: _,
        labelAnchor: A,
        head: g.head,
        armL: g.armL,
        armR: g.armR,
        legL: g.legL,
        legR: g.legR,
        nameTag: S,
        hpBar: x,
        squadRing: null,
        hpCanvas: M,
        target: { pos: new k(i, s, o), yaw: 0 },
        lastPos: new k(i, s, o),
        speed: 0,
        sprint: 0,
        motion: new RL(Dne),
        motionStamp: 0,
        motionQuat: new Jt(),
        motionVelocity: new k(),
        walkT: 0,
        lastYaw: 0,
        moving: !1,
        prone: !1,
        visualY: f ? f.y : s,
        body: g.body,
        armorRoot: g.armorRoot,
        weapon: b,
        flagQ: [],
        smooth: (u == null ? void 0 : u.smooth) ?? !1,
        air: !1,
        airT: 0,
        brace: 0,
        land: 0,
        aiming: !1,
        stride: (u == null ? void 0 : u.stride) ?? Math.random() * 6,
        vy: 0,
        turn: 0,
        reloadT: -1,
        poseDt: 0,
      }),
      this.refreshSquadLabel(this.bots.get(e)));
  }
  onState(e, t, i, s, o, a, r = Math.round(performance.now()) >>> 0) {
    const l = this.bots.get(e);
    if (!l) return;
    const c = l.motionStamp ? ((r - l.motionStamp) | 0) / 1e3 : 0;
    if (c < 0) return;
    (l.motionVelocity.set(
      t - l.target.pos.x,
      i - l.target.pos.y,
      s - l.target.pos.z,
    ),
      c > 0 && c < 1
        ? l.motionVelocity.multiplyScalar(1 / c)
        : l.motionVelocity.set(0, 0, 0),
      (!(a & 3) || l.motionVelocity.length() > 18) &&
        l.motionVelocity.set(0, 0, 0),
      l.target.pos.set(t, i, s),
      l.motionQuat.set(0, Math.sin(o / 2), 0, Math.cos(o / 2)));
    const h = l.motion.pushed;
    (l.motion.push(l.target.pos, l.motionQuat, l.motionVelocity, r),
      (l.motionStamp = r),
      (l.target.yaw = o),
      l.motion.pushed < h && (l.flagQ.length = 0),
      l.flagQ.push({ t: l.motion.pushed, f: a }),
      l.flagQ.length > 24 && l.flagQ.shift(),
      (l.smooth = (a & 4) !== 0));
  }
  onHp(e, t) {
    const i = this.bots.get(e);
    i &&
      ((i.hp = t),
      ZR(i.hpCanvas, i.hp, i.maxHp),
      (i.hpBar.material.map.needsUpdate = !0));
  }
  onDestroy(e, t) {
    var o, a;
    const i = this.bots.get(e);
    if (!i) return;
    (i.squadRing &&
      (i.squadRing.geometry.dispose(), i.squadRing.material.dispose()),
      Pc(i.nameTag));
    const s = i.hpBar.material;
    if (
      ((o = s.map) == null || o.dispose(),
      s.dispose(),
      t &&
        this.corpses &&
        this.enabled &&
        (i.group.visible || ((a = i.lod) != null && a.visible)))
    ) {
      (i.lod && (this.scene.remove(i.lod), i.lod.dispose()),
        this.scene.remove(i.labelAnchor),
        (i.group.visible = !0),
        this.scene.add(i.group),
        this.corpses.spawn(
          i.group,
          i.group.rotation.y,
          {
            head: i.head,
            armL: i.armL,
            armR: i.armR,
            legL: i.legL,
            legR: i.legR,
            held: i.npc ? null : i.heldMesh,
          },
          { blast: t.blast, dirX: t.dirX, dirZ: t.dirZ, lying: i.prone },
        ),
        this.bots.delete(e));
      return;
    }
    (this.scene.remove(i.group),
      i.lod && (this.scene.remove(i.lod), i.lod.dispose()),
      this.scene.remove(i.labelAnchor),
      this.bots.delete(e));
  }
  list() {
    var t;
    const e = [];
    for (const i of this.bots.values())
      i.hp > 0 &&
        (i.group.visible || ((t = i.lod) != null && t.visible)) &&
        e.push({
          id: i.id,
          ownerName: i.ownerName,
          hostile: i.hostile,
          npc: i.npc,
          raid: i.raid,
          pos: i.group.position,
        });
    return e;
  }
  raidContacts(e, t, i) {
    const s = [],
      o = (i + 100) * (i + 100);
    for (const a of this.bots.values()) {
      if (!a.raid || a.hp <= 0) continue;
      const r = a.target.pos.x - e,
        l = a.target.pos.z - t;
      r * r + l * l <= o && s.push({ id: a.id, pos: a.target.pos });
    }
    return s;
  }
  thermalTargets() {
    return [...this.bots.values()]
      .filter((e) => {
        var t;
        return (
          e.hp > 0 &&
          (e.group.visible || ((t = e.lod) == null ? void 0 : t.visible))
        );
      })
      .map((e) => {
        var t;
        return (t = e.lod) != null && t.visible ? e.lod : e.group;
      });
  }
  isNpc(e) {
    const t = this.bots.get(e);
    return !!(t != null && t.npc) && t.kind !== 11;
  }
  update(e, t, i = !1, s = 0, o, a = !1) {
    if (!this.enabled) {
      for (const h of this.bots.values())
        ((h.group.visible = !1),
          h.lod && (h.lod.visible = !1),
          (h.labelAnchor.visible = !1));
      return;
    }
    const r = 1 - Math.exp(-14 * e);
    this.lightT += e;
    const l = this.lightT >= Vr;
    l && (this.lightT = 0);
    const c = this.battle();
    this.frame++;
    for (const h of this.bots.values()) {
      const d = !o || o(h.target.pos.x, h.target.pos.z);
      if (h.motion.sample(h.group.position, h.motionQuat))
        h.group.rotation.y = 2 * Math.atan2(h.motionQuat.y, h.motionQuat.w);
      else {
        h.group.position.lerp(h.target.pos, r);
        const G = h.target.yaw - h.group.rotation.y;
        h.group.rotation.y += Math.atan2(Math.sin(G), Math.cos(G)) * r;
      }
      {
        const G = h.motion.clock();
        let I = -1;
        for (; h.flagQ.length && h.flagQ[0].t <= G;) I = h.flagQ.shift().f;
        if (I >= 0) {
          const F = (I & 2) !== 0;
          (h.air &&
            !F &&
            h.airT > 0.15 &&
            (h.land = Math.min(1, Math.max(0.35, -h.vy / 9))),
            F || (h.airT = 0),
            (h.air = F),
            (h.moving = (I & 1) !== 0),
            (h.prone = (I & 32) !== 0),
            (h.aiming = (I & 8) !== 0),
            (h.reloading = !!(I & 64)),
            (h.building = !!(I & 128)));
        }
        const O =
          !h.air && h.flagQ.some((F) => (F.f & 2) !== 0 && F.t - G < 110);
        ((h.brace +=
          ((O ? 1 : 0) - h.brace) * (1 - Math.exp(-e * (O ? 26 : 16)))),
          (h.land *= Math.exp(-e * 6.5)),
          h.air && (h.airT += e));
      }
      {
        const G = h.group.position.y,
          I = G - h.visualY;
        (h.smooth || Math.abs(I) > 2.6
          ? (h.visualY = G)
          : (h.visualY += I * (1 - Math.exp(-e * (I > 0 ? 15 : 10)))),
          (h.group.position.y = h.visualY));
      }
      const u = t ? h.group.position.distanceTo(t) : 0,
        f = !!t && u > Gne,
        p =
          !!h.lod &&
          !!t &&
          (a ? u > (this.allowLod ? zne : Fne) : this.allowLod && u > Une);
      this.viewSphere.center.copy(h.group.position).y += 1;
      const m = !this.view || this.view.intersectsSphere(this.viewSphere);
      ((h.group.visible = d && !p && !f && m),
        h.group.visible && !h.group.parent
          ? this.scene.add(h.group)
          : !h.group.visible &&
            h.group.parent === this.scene &&
            this.scene.remove(h.group),
        h.lod &&
          ((h.lod.visible = d && p && !f),
          h.lod.position.copy(h.group.position),
          (h.lod.rotation.y = h.group.rotation.y)),
        (h.labelAnchor.visible = d && !f),
        h.labelAnchor.position.copy(h.group.position),
        l &&
          h.group.visible &&
          ur(h.group, dr(this.world, h.group.position, s, 1)));
      const y = c && !h.npc,
        g = p && !c,
        b = !!h.squadRing && u <= 120,
        S = y ? (h.hostile ? Fg.enemy : Fg.ally) : 50,
        M = d && (b || g || i || !t || u <= S),
        x = b || g || !h.prone || (y && !h.hostile);
      (h.squadRing && (h.squadRing.visible = d && b),
        (h.nameTag.visible = M && x),
        (h.hpBar.visible = M && !h.npc && x && !(y && h.hostile)));
      const T = d && p && !f && !!h.lod;
      if (!h.group.visible && !T) {
        (h.lastPos.copy(h.group.position), (h.lastYaw = h.group.rotation.y));
        continue;
      }
      const A = Math.hypot(
          h.group.position.x - h.lastPos.x,
          h.group.position.z - h.lastPos.z,
        ),
        _ = Math.max(e, 0.001);
      ((h.speed += (Math.min(15, A / _) - h.speed) * (1 - Math.exp(-10 * e))),
        (h.vy +=
          (Math.max(-20, Math.min(12, (h.group.position.y - h.lastPos.y) / _)) -
            h.vy) *
          (1 - Math.exp(-22 * e))));
      const C = Math.atan2(
        Math.sin(h.group.rotation.y - h.lastYaw),
        Math.cos(h.group.rotation.y - h.lastYaw),
      );
      ((h.turn +=
        (Math.max(-6, Math.min(6, C / _)) - h.turn) * (1 - Math.exp(-8 * e))),
        h.lastPos.copy(h.group.position),
        (h.lastYaw = h.group.rotation.y));
      const R = !h.prone && !h.npc && h.speed > 5.5 ? 1 : 0;
      if (
        ((h.sprint += (R - h.sprint) * (1 - Math.exp(-(R ? 7 : 11) * e))),
        h.weapon && !h.npc)
      ) {
        (!h.air && A < 2 && (h.stride += (A * Math.PI) / Hne(h.speed)),
          (h.reloadT = h.reloading ? (h.reloadT < 0 ? 0 : h.reloadT + e) : -1),
          (h.poseDt += e));
        const G = u > 90 ? 3 : u > 45 ? 2 : 1;
        if (G === 1 || (this.frame + h.id) % G === 0) {
          const F = performance.now() / 1e3;
          (Su(h, h.poseDt, F, {
            speed: h.speed,
            pitch: 0,
            held: h.building ? 0 : h.weapon,
            aiming: h.aiming && !h.building,
            prone: h.prone,
            airborne: h.air && h.airT > 0.07,
            reload:
              h.reloadT >= 0 && !h.building
                ? Math.min(0.985, h.reloadT / Bne)
                : -1,
            swing: h.building ? (F / 0.45) % 1 : -1,
            stride: h.stride,
            sprint: h.sprint,
            vy: h.vy,
            squat: Math.max(h.land, h.brace * 0.75),
            face: !1,
          }),
            (h.poseDt = 0));
        }
        const I = h.prone
          ? -Math.PI / 2
          : -0.2 * h.sprint - 0.03 * Math.min(1, h.speed / 4.6);
        h.group.rotation.x += (I - h.group.rotation.x) * r;
        const O = h.prone
          ? 0
          : Math.max(
              -0.14,
              Math.min(0.14, h.turn * Math.min(1, h.speed / 4.6) * 0.035),
            );
        ((h.group.rotation.z +=
          (O - h.group.rotation.z) * (1 - Math.exp(-9 * e))),
          d &&
            p &&
            h.lod &&
            (h.lod.sync(),
            l && ur(h.lod, dr(this.world, h.group.position, s, 1))));
        continue;
      }
      const L = Math.min(h.speed / 4.5, 1) * (0.7 + 0.28 * h.sprint);
      h.walkT += e * (4 + h.speed);
      const N = Math.sin(h.walkT * 2) * L;
      ((h.legL.rotation.x = N),
        (h.legR.rotation.x = -N),
        (h.armL.rotation.x = -N * (0.8 + 0.3 * h.sprint)),
        (h.armR.rotation.x = h.npc
          ? N * 0.8
          : h.prone
            ? 2.6
            : 1.15 - 0.6 * h.sprint + N * 0.35 * h.sprint),
        h.prone &&
          ((h.armL.rotation.x = 2.6),
          (h.armL.rotation.y = 0),
          (h.armR.rotation.y = 0),
          (h.legL.rotation.x = N * 0.2),
          (h.legR.rotation.x = -N * 0.2),
          (h.armL.rotation.x += N * 0.25),
          (h.armR.rotation.x -= N * 0.25)),
        h.reloading &&
          ((h.armR.rotation.x = 0.7),
          (h.armL.rotation.x = 1.4 + Math.sin(h.walkT * 2) * 0.25)),
        h.building &&
          ((h.armR.rotation.x = 0.5 + Math.sin(h.walkT * 3) * 0.6),
          (h.armL.rotation.x = 0.8)),
        (h.head.rotation.x = h.prone ? Math.PI / 2 : 0));
      const D = h.group.getObjectByName("pose-root");
      D && (D.position.z += ((h.prone ? 0.3 : 0) - D.position.z) * r);
      const H = h.prone && !h.npc ? -Math.PI / 2 : -0.2 * h.sprint;
      ((h.group.rotation.x += (H - h.group.rotation.x) * r),
        d &&
          p &&
          h.lod &&
          (h.lod.sync(),
          l && ur(h.lod, dr(this.world, h.group.position, s, 1))));
    }
  }
  hideLabelsUnless(e) {
    for (const t of this.bots.values())
      (!t.nameTag.visible && !t.hpBar.visible) ||
        e(t.id, t.group.position) ||
        ((t.nameTag.visible = !1), (t.hpBar.visible = !1));
  }
  hitboxes() {
    const e = [];
    for (const t of this.bots.values()) {
      if (t.hp <= 0) continue;
      const i = t.group.position.clone().add(new k(0, t.prone ? 0.3 : 0, 0)),
        s = t.group.getWorldQuaternion(new Jt());
      for (const [, o, a, r, l, c, h] of jR) {
        const d = c - a,
          u = new k((o + l) * 0.5, (a + c) * 0.5, (r + h) * 0.5)
            .applyQuaternion(s)
            .add(i);
        e.push({
          x: u.x,
          y: u.y - d * 0.5,
          z: u.z,
          hw: (l - o) * 0.5,
          hz: (h - r) * 0.5,
          h: d,
        });
      }
    }
    return e;
  }
  raycastHit(e, t, i) {
    let s = null;
    for (const o of this.bots.values()) {
      if (o.hp <= 0) continue;
      const a = o.group.position.clone().add(new k(0, o.prone ? 0.3 : 0, 0)),
        r = o.group.getWorldQuaternion(new Jt()).invert(),
        l = e.clone().sub(a).applyQuaternion(r),
        c = t.clone().applyQuaternion(r);
      for (const [h, d, u, f, p, m, y] of jR) {
        const g = Vp(l, c, d, u, f, p, m, y);
        g !== null &&
          g < i &&
          (!s || g < s.dist) &&
          (s = {
            id: o.id,
            dist: g,
            point: e.clone().addScaledVector(t, g),
            region: h,
          });
      }
    }
    return s;
  }
}
