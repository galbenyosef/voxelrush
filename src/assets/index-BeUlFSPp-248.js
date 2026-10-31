// index-BeUlFSPp 248 — group
// Lines 132271-132875 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class b0e {
  constructor(e, t) {
    ((this.scene = e), (this.world = t));
    const i = () => {
      for (const n of this.bots.values()) this.refreshSquadLabel(n);
    };
    (da(i), window.addEventListener("squad-state-changed", i));
  }
  bots = new Map();
  getPosition(e) {
    return this.bots.get(e)?.group.position;
  }
  cameraBot = -1;
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
  lightT = 0;
  frame = 0;
  enabled = !0;
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
    const n = t * t;
    for (const o of this.bots.values())
      !o.raid || o.hp <= 0 || (o.target.pos.distanceToSquared(e) <= n && i++);
    return i;
  }
  allowLod = !1;
  view = null;
  viewSphere = new Ar(new k(), 1.7);
  battle = () => !1;
  refreshPlates() {
    for (const e of this.bots.values()) this.refreshSquadLabel(e);
  }
  refreshSquadLabel(e) {
    const t = this.battle(),
      i =
        !t && !e.hostile && !e.npc && Br(e.ownerName)
          ? na(e.ownerName)
          : void 0,
      n = i?.members.find(
        (l) => l.username.toLowerCase() === e.ownerName.toLowerCase(),
      ),
      o = n ? By(n.slot) : void 0,
      a = i && o ? { name: i.name, color: o } : void 0,
      r = TL(e.ownerName, e.hostile, e.npc, t, a);
    (r.userData.plateKey === e.nameTag.userData.plateKey
      ? S0(r)
      : (r.position.copy(e.nameTag.position),
        (r.visible = e.nameTag.visible),
        e.labelAnchor.remove(e.nameTag),
        S0(e.nameTag),
        (e.nameTag = r),
        e.labelAnchor.add(r)),
      o
        ? (e.squadRing ||
            ((e.squadRing = new Q(
              new Z0(0.43, 0.52, 24),
              new Zt({
                color: o,
                transparent: !0,
                opacity: 0.7,
                depthTest: !1,
                depthWrite: !1,
                side: Mi,
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
  onSpawn(e, t, i, n, o, a, r = 0, l = [], c = !1, h = 0, d = 0, u = !1) {
    const f = this.bots.get(e),
      p = f ? f.group.position.clone() : null;
    if ((this.onDestroy(e), ![0, 1, 2, 7, 8, 9, 10, 18].includes(r))) return;
    const m = r === 1 || r === 7 || r === 8 || r === 9 || r === 10,
      g = r === 18,
      y = r === 2 || g,
      b = Kc(
        r === 7 ? 15326912 : g ? 1512991 : y ? 4873781 : m ? 7022112 : 5662532,
      );
    (g && r0e(b), (b.group.rotation.order = "YXZ"));
    let S = 0;
    if (r === 7) (y0e(b), b.heldMesh.add(v0e()));
    else if (!y) {
      const P =
        d ||
        (r === 8
          ? w.AWP
          : r === 9
            ? w.MINIGUN
            : r === 10
              ? w.GRENADE_LAUNCHER
              : w.AK47);
      S = P;
      const O = Pd(P).group.clone(!0);
      if ((P === w.COMBAT_KNIFE && u && qa(O, m0e, "", !1), P === w.AWP)) {
        const B = new Q(
          new Tt(0.032, 0.032, 0.23, 12),
          new Pi({ color: 2436647 }),
        );
        ((B.rotation.x = Math.PI / 2),
          B.position.set(0, 0.105, -0.12),
          O.add(B));
      }
      (O.rotation.set(-Math.PI / 2, 0, 0),
        O.position.set(0.04, -0.04, 0),
        O.scale.setScalar(1.05),
        b.heldMesh.add(O));
    }
    X0(b.armorRoot, b.head, b.legL, b.legR, l);
    const M = Ga() && !y && r !== 7 && (m || this.battle());
    M && Ed(b.head, "pumpkin");
    const E = TL(t, m, y, this.battle()),
      A = document.createElement("canvas"),
      T = g0e(A),
      x = Math.max(100, a);
    (xL(A, a, x), (T.material.map.needsUpdate = !0));
    const R = new re();
    (R.add(E, T),
      R.position.set(i, n, o),
      (T.visible = !y),
      b.group.position.set(i, n, o),
      this.scene.add(b.group),
      this.scene.add(R));
    const _ = m
      ? new N7(
          b.group,
          [b.head, b.armL, b.armR, b.legL, b.legR],
          `soldier:${r}:${h}:${l.join(",")}:${XA()}${M ? ":pumpkin" : ""}`,
        )
      : null;
    _ &&
      (_.position.set(i, n, o),
      (_.visible = !1),
      (_.frustumCulled = !0),
      this.scene.add(_));
    const C = new Set([
      b.group,
      b.head,
      b.armL,
      b.armR,
      b.legL,
      b.legR,
      b.heldMesh,
      ...b.heldMesh.children,
    ]);
    (b.group.traverse((P) => {
      (P.name === "pose-root" ||
        P.name === "joint" ||
        P.name === "gesture" ||
        P.name === "grip-r" ||
        P.name === "grip-l" ||
        P.name === "mag-grip" ||
        P.name === "weapon-magazine") &&
        C.add(P);
    }),
      n0e(b.group, C),
      p && (b.group.position.copy(p), R.position.copy(p)),
      this.bots.set(e, {
        id: e,
        heldMesh: b.heldMesh,
        ownerName: t,
        hostile: m,
        npc: y,
        kind: r,
        raid: c,
        hp: a,
        maxHp: x,
        tier: h,
        group: b.group,
        lod: _,
        labelAnchor: R,
        head: b.head,
        armL: b.armL,
        armR: b.armR,
        legL: b.legL,
        legR: b.legR,
        nameTag: E,
        hpBar: T,
        squadRing: null,
        hpCanvas: A,
        target: { pos: new k(i, n, o), yaw: 0 },
        lastPos: new k(i, n, o),
        speed: 0,
        sprint: 0,
        motion: new C7(l0e),
        motionStamp: 0,
        motionQuat: new hi(),
        motionVelocity: new k(),
        walkT: 0,
        lastYaw: 0,
        moving: !1,
        prone: !1,
        crouching: !1,
        visualY: p ? p.y : n,
        body: b.body,
        armorRoot: b.armorRoot,
        weapon: S,
        flagQ: [],
        smooth: f?.smooth ?? !1,
        air: !1,
        airT: 0,
        brace: 0,
        land: 0,
        aiming: !1,
        stride: f?.stride ?? Math.random() * 6,
        vy: 0,
        turn: 0,
        reloadT: -1,
        poseDt: 0,
      }),
      this.refreshSquadLabel(this.bots.get(e)));
  }
  onState(e, t, i, n, o, a, r = Math.round(performance.now()) >>> 0) {
    const l = this.bots.get(e);
    if (!l) return;
    const c = l.motionStamp ? ((r - l.motionStamp) | 0) / 1e3 : 0;
    if (c < 0) return;
    (l.motionVelocity.set(
      t - l.target.pos.x,
      i - l.target.pos.y,
      n - l.target.pos.z,
    ),
      c > 0 && c < 1
        ? l.motionVelocity.multiplyScalar(1 / c)
        : l.motionVelocity.set(0, 0, 0),
      (!(a & 3) || l.motionVelocity.length() > 18) &&
        l.motionVelocity.set(0, 0, 0),
      l.target.pos.set(t, i, n),
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
      xL(i.hpCanvas, i.hp, i.maxHp),
      (i.hpBar.material.map.needsUpdate = !0));
  }
  corpses = null;
  onDestroy(e, t) {
    const i = this.bots.get(e);
    if (!i) return;
    (i.squadRing &&
      (i.squadRing.geometry.dispose(), i.squadRing.material.dispose()),
      S0(i.nameTag));
    const n = i.hpBar.material;
    if (
      (n.map?.dispose(),
      n.dispose(),
      t && this.corpses && this.enabled && (i.group.visible || i.lod?.visible))
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
    const e = [];
    for (const t of this.bots.values())
      t.hp > 0 &&
        (t.group.visible || t.lod?.visible) &&
        e.push({
          id: t.id,
          ownerName: t.ownerName,
          hostile: t.hostile,
          npc: t.npc,
          raid: t.raid,
          pos: t.group.position,
        });
    return e;
  }
  raidContacts(e, t, i) {
    const n = [],
      o = (i + 100) * (i + 100);
    for (const a of this.bots.values()) {
      if (!a.raid || a.hp <= 0) continue;
      const r = a.target.pos.x - e,
        l = a.target.pos.z - t;
      r * r + l * l <= o && n.push({ id: a.id, pos: a.target.pos });
    }
    return n;
  }
  thermalTargets() {
    return [...this.bots.values()]
      .filter((e) => e.hp > 0 && (e.group.visible || e.lod?.visible))
      .map((e) => (e.lod?.visible ? e.lod : e.group));
  }
  isNpc(e) {
    const t = this.bots.get(e);
    return !!t?.npc && t.kind !== 11;
  }
  update(e, t, i = !1, n = 0, o, a = !1) {
    if (!this.enabled) {
      for (const h of this.bots.values())
        ((h.group.visible = !1),
          h.lod && (h.lod.visible = !1),
          (h.labelAnchor.visible = !1));
      return;
    }
    const r = 1 - Math.exp(-14 * e);
    this.lightT += e;
    const l = this.lightT >= Vc;
    l && (this.lightT = 0);
    const c = this.battle();
    this.frame++;
    for (const h of this.bots.values()) {
      const d = !o || o(h.target.pos.x, h.target.pos.z);
      if (h.motion.sample(h.group.position, h.motionQuat))
        h.group.rotation.y = 2 * Math.atan2(h.motionQuat.y, h.motionQuat.w);
      else {
        h.group.position.lerp(h.target.pos, r);
        const H = h.target.yaw - h.group.rotation.y;
        h.group.rotation.y += Math.atan2(Math.sin(H), Math.cos(H)) * r;
      }
      {
        const H = h.motion.clock();
        let D = -1;
        for (; h.flagQ.length && h.flagQ[0].t <= H;) D = h.flagQ.shift().f;
        if (D >= 0) {
          const W = (D & 2) !== 0;
          (h.air &&
            !W &&
            h.airT > 0.15 &&
            (h.land = Math.min(1, Math.max(0.35, -h.vy / 9))),
            W || (h.airT = 0),
            (h.air = W),
            (h.moving = (D & 1) !== 0),
            (h.prone = (D & 32) !== 0),
            (h.aiming = (D & 8) !== 0),
            (h.crouching = (D & 4) !== 0 && (D & 16) !== 0 && !h.prone),
            (h.reloading = !!(D & 64)),
            (h.building = !!(D & 128)));
        }
        const U =
          !h.air && h.flagQ.some((W) => (W.f & 2) !== 0 && W.t - H < 110);
        ((h.brace +=
          ((U ? 1 : 0) - h.brace) * (1 - Math.exp(-e * (U ? 26 : 16)))),
          (h.land *= Math.exp(-e * 6.5)),
          h.air && (h.airT += e));
      }
      {
        const H = h.group.position.y,
          D = H - h.visualY;
        (h.smooth || Math.abs(D) > 2.6
          ? (h.visualY = H)
          : (h.visualY += D * (1 - Math.exp(-e * (D > 0 ? 15 : 10)))),
          (h.group.position.y = h.visualY));
      }
      const u = t ? h.group.position.distanceTo(t) : 0,
        f = !!t && u > p0e,
        p =
          !!h.lod &&
          !!t &&
          (a ? u > (this.allowLod ? d0e : f0e) : this.allowLod && u > u0e);
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
          Pl(h.group, Il(this.world, h.group.position, n, 1)));
      const g = c && !h.npc,
        y = p && !c,
        b = !!h.squadRing && u <= 120,
        S = g ? (h.hostile ? Kv.enemy : Kv.ally) : 50,
        M = d && (b || y || i || !t || u <= S),
        E = b || y || !h.prone || (g && !h.hostile);
      (h.squadRing && (h.squadRing.visible = d && b),
        (h.nameTag.visible = M && E),
        (h.hpBar.visible = M && !h.npc && E && !(g && h.hostile)));
      const A = d && p && !f && !!h.lod;
      if (!h.group.visible && !A) {
        (h.lastPos.copy(h.group.position), (h.lastYaw = h.group.rotation.y));
        continue;
      }
      const T = Math.hypot(
          h.group.position.x - h.lastPos.x,
          h.group.position.z - h.lastPos.z,
        ),
        x = Math.max(e, 0.001);
      ((h.speed += (Math.min(15, T / x) - h.speed) * (1 - Math.exp(-10 * e))),
        (h.vy +=
          (Math.max(-20, Math.min(12, (h.group.position.y - h.lastPos.y) / x)) -
            h.vy) *
          (1 - Math.exp(-22 * e))));
      const R = Math.atan2(
        Math.sin(h.group.rotation.y - h.lastYaw),
        Math.cos(h.group.rotation.y - h.lastYaw),
      );
      ((h.turn +=
        (Math.max(-6, Math.min(6, R / x)) - h.turn) * (1 - Math.exp(-8 * e))),
        h.lastPos.copy(h.group.position),
        (h.lastYaw = h.group.rotation.y));
      const _ = !h.prone && !h.npc && h.speed > 5.5 ? 1 : 0;
      if (
        ((h.sprint += (_ - h.sprint) * (1 - Math.exp(-(_ ? 7 : 11) * e))),
        h.weapon && !h.npc)
      ) {
        (!h.air && T < 2 && (h.stride += (T * Math.PI) / h0e(h.speed)),
          (h.reloadT = h.reloading ? (h.reloadT < 0 ? 0 : h.reloadT + e) : -1),
          (h.poseDt += e));
        const H = u > 90 ? 3 : u > 45 ? 2 : 1;
        if (H === 1 || (this.frame + h.id) % H === 0) {
          const W = performance.now() / 1e3;
          (Xf(h, h.poseDt, W, {
            speed: h.speed,
            pitch: 0,
            held: h.building && h.weapon !== w.COMBAT_KNIFE ? 0 : h.weapon,
            aiming: h.aiming && !h.building,
            prone: h.prone,
            crouching: h.crouching && !h.air,
            airborne: h.air && h.airT > 0.07,
            reload:
              h.reloadT >= 0 && !h.building
                ? Math.min(0.985, h.reloadT / c0e)
                : -1,
            swing: h.building ? (W / 0.45) % 1 : -1,
            stride: h.stride,
            sprint: h.sprint,
            vy: h.vy,
            squat: Math.max(h.land, h.brace * 0.75),
            face: !1,
          }),
            (h.poseDt = 0));
        }
        const D = h.prone
          ? -Math.PI / 2
          : -0.2 * h.sprint - 0.03 * Math.min(1, h.speed / 4.6);
        h.group.rotation.x += (D - h.group.rotation.x) * r;
        const U = h.prone
          ? 0
          : Math.max(
              -0.14,
              Math.min(0.14, h.turn * Math.min(1, h.speed / 4.6) * 0.035),
            );
        ((h.group.rotation.z +=
          (U - h.group.rotation.z) * (1 - Math.exp(-9 * e))),
          d &&
            p &&
            h.lod &&
            (h.lod.sync(),
            l && Pl(h.lod, Il(this.world, h.group.position, n, 1))));
        continue;
      }
      const C = Math.min(h.speed / 4.5, 1) * (0.7 + 0.28 * h.sprint);
      h.walkT += e * (4 + h.speed);
      const P = Math.sin(h.walkT * 2) * C;
      ((h.legL.rotation.x = P),
        (h.legR.rotation.x = -P),
        (h.armL.rotation.x = -P * (0.8 + 0.3 * h.sprint)),
        (h.armR.rotation.x = h.npc
          ? P * 0.8
          : h.prone
            ? 2.6
            : 1.15 - 0.6 * h.sprint + P * 0.35 * h.sprint),
        h.prone &&
          ((h.armL.rotation.x = 2.6),
          (h.armL.rotation.y = 0),
          (h.armR.rotation.y = 0),
          (h.legL.rotation.x = P * 0.2),
          (h.legR.rotation.x = -P * 0.2),
          (h.armL.rotation.x += P * 0.25),
          (h.armR.rotation.x -= P * 0.25)),
        h.reloading &&
          ((h.armR.rotation.x = 0.7),
          (h.armL.rotation.x = 1.4 + Math.sin(h.walkT * 2) * 0.25)),
        h.building &&
          ((h.armR.rotation.x = 0.5 + Math.sin(h.walkT * 3) * 0.6),
          (h.armL.rotation.x = 0.8)),
        (h.head.rotation.x = h.prone ? Math.PI / 2 : 0));
      const O = h.group.getObjectByName("pose-root");
      O && (O.position.z += ((h.prone ? 0.3 : 0) - O.position.z) * r);
      const B = h.prone && !h.npc ? -Math.PI / 2 : -0.2 * h.sprint;
      ((h.group.rotation.x += (B - h.group.rotation.x) * r),
        d &&
          p &&
          h.lod &&
          (h.lod.sync(),
          l && Pl(h.lod, Il(this.world, h.group.position, n, 1))));
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
        n = t.group.getWorldQuaternion(new hi());
      for (const [, o, a, r, l, c, h] of t.crouching ? AL : EL) {
        const d = c - a,
          u = new k((o + l) * 0.5, (a + c) * 0.5, (r + h) * 0.5)
            .applyQuaternion(n)
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
    let n = null;
    for (const o of this.bots.values()) {
      if (o.hp <= 0) continue;
      {
        const h = o.group.position;
        if (!vT(e.x, e.y, e.z, t.x, t.y, t.z, h.x, h.y + 0.9, h.z, 2.6, i))
          continue;
      }
      const a = o.group.position.clone().add(new k(0, o.prone ? 0.3 : 0, 0)),
        r = o.group.getWorldQuaternion(new hi()).invert(),
        l = e.clone().sub(a).applyQuaternion(r),
        c = t.clone().applyQuaternion(r);
      for (const [h, d, u, f, p, m, g] of o.crouching ? AL : EL) {
        const y = Om(l, c, d, u, f, p, m, g);
        y !== null &&
          y < i &&
          (!n || y < n.dist) &&
          (n = {
            id: o.id,
            dist: y,
            point: e.clone().addScaledVector(t, y),
            region: h,
          });
      }
    }
    return n;
  }
}
