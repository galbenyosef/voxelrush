// index-BeUlFSPp 245 — pos
// Lines 129985-130445 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class i0e {
  constructor(e, t, i, n) {
    ((this.scene = e), (this.world = t), (this.effects = i), (this.sfx = n));
  }
  hooks = {
    sendExplosion: () => {},
    sendSpawn: () => {},
    vehicleImpact: () => null,
    entityImpact: () => null,
    onVehicleHit: () => {},
    onHitProjectile: () => {},
  };
  myId = 0;
  gravityScale = 1;
  get gravity() {
    return this.gravityScale;
  }
  currentPlanet = Ci.EARTH;
  list = [];
  nearestGrenade(e, t) {
    let i = null,
      n = t * t;
    for (const o of this.list) {
      if (o.type !== mt.GRENADE) continue;
      const a = o.pos.distanceToSquared(e);
      a < n && ((n = a), (i = o));
    }
    return i ? { pos: i.pos, left: Math.max(0, fr.fuse - i.life) } : null;
  }
  hasVehicleMissiles(e) {
    return this.list.some(
      (t) => t.ignoreVehicle === e && t.type === mt.MISSILE,
    );
  }
  airMissiles = !1;
  homingPos = null;
  *inFlight() {
    for (const e of this.list)
      (e.type === mt.MISSILE || e.type === mt.ROCKET) &&
        (yield {
          id: e.id || -1,
          pos: e.pos,
          rocket: e.type === mt.ROCKET || e.homing === void 0,
        });
  }
  idCounter = 0;
  tmpFrom = new k();
  trailFrom = new k();
  audioOffset = new k();
  audioRay = new k();
  setPlanet(e) {
    (this.effects.clearRocketTrails(),
      (this.currentPlanet = e),
      (this.gravityScale = e === Ci.MOON ? am : 1));
    for (let t = this.list.length - 1; t >= 0; t--)
      this.list[t].planet !== e &&
        (this.scene.remove(this.list[t].mesh), this.list.splice(t, 1));
  }
  genId() {
    return (
      (this.idCounter = (this.idCounter % 65535) + 1),
      ((this.myId & 16383) << 16) | this.idCounter
    );
  }
  spawn(e, t, i, n, o = {}) {
    const a = o.id === void 0,
      r = o.id ?? (n ? this.genId() : 0);
    if (o.id !== void 0) {
      const c = this.list.findIndex((h) => h.id === r);
      if (c >= 0) {
        const h = this.list[c];
        return (
          e === mt.SHELL && o.serverDriven
            ? h.pos.copy(t)
            : h.pos.lerp(
                t,
                h.homing !== void 0 && o.homing !== void 0 ? 0.3 : 0.65,
              ),
          (h.sinceSync = 0),
          (h.homing = o.homing),
          (h.terrainStopped = !1),
          h.vel.copy(i),
          (h.guide = o.guide?.clone() ?? null),
          (h.serverDriven = o.serverDriven),
          o.cruiseY !== void 0 &&
            ((h.cruiseY = o.cruiseY),
            (h.cruiseReached = o.cruiseReached),
            (h.terminalDive = o.terminalDive)),
          !1
        );
      }
    }
    const l = t0e(e);
    return (
      this.airMissiles &&
        (e === mt.MISSILE || e === mt.ROCKET) &&
        l.scale.setScalar(e === mt.MISSILE ? 4.5 : 3),
      l.position.copy(t),
      this.scene.add(l),
      this.list.push({
        serverDriven: o.serverDriven,
        id: r,
        owner: o.owner ?? (n ? this.myId : 0),
        type: e,
        pos: t.clone(),
        vel: i.clone(),
        life: 0,
        mine: n,
        mesh: l,
        trailDistance: 0,
        speed: o.speed ?? i.length(),
        guide: o.guide ? o.guide.clone() : null,
        tKind: o.tKind ?? 0,
        tId: o.tId ?? 0,
        ignoreVehicle: o.ignoreVehicle ?? -1,
        travel: 0,
        cruiseReached: o.cruiseReached,
        terminalDive: o.terminalDive,
        homing: o.homing,
        cruiseY:
          o.cruiseY ??
          (o.guide
            ? Math.max(t.y, o.guide.y) +
              (e === mt.MISSILE && i.y > 20
                ? Math.min(65, Math.max(22, t.distanceTo(o.guide) * 0.22))
                : e === mt.TOMAHAWK
                  ? IW
                  : e === mt.NUCLEAR
                    ? FW
                    : 0)
            : 0),
        planet: o.planet ?? this.currentPlanet,
      }),
      n &&
        a &&
        this.hooks.sendSpawn(r, e, t, i, o.guide ?? null, o.tKind, o.tId),
      !0
    );
  }
  rayHit(e, t, i) {
    let n = null;
    for (const o of this.list) {
      if (!nu.has(o.type)) continue;
      const a = o.pos.clone().sub(e),
        r = a.dot(t);
      if (r < 0) continue;
      const l = this.airMissiles && o.type === mt.MISSILE ? 3.5 : 1,
        c = a.lengthSq() - r * r;
      if (c > l * l) continue;
      const h = r - Math.sqrt(l * l - c);
      h >= 0 &&
        h < i &&
        (!n || h < n.dist) &&
        (n = { id: o.id, dist: h, pos: o.pos.clone(), type: o.type });
    }
    return n;
  }
  activeProjectiles() {
    const e = [];
    for (const t of this.list)
      nu.has(t.type) &&
        e.push({
          id: t.id,
          owner: t.owner,
          type: t.type,
          pos: t.pos,
          vel: t.vel,
        });
    return e;
  }
  removeById(e, t, i, n, o, a = !0) {
    const r = this.list.findIndex((l) => l.id === e);
    if (
      !(r < 0) &&
      (this.scene.remove(this.list[r].mesh), this.list.splice(r, 1), a)
    ) {
      const l = new k(t, i, n),
        c = this.blastExposure(l, o);
      (this.effects.explosion(l, 1.6, o, c),
        this.sfx.explosion(l.distanceTo(o) + 6, c));
    }
  }
  blastExposure(e, t) {
    const i = e.clone().sub(t),
      n = i.length();
    return n < 1.2
      ? 1
      : (i.multiplyScalar(1 / n),
        this.world.raycast(t, i, Math.max(0, n - 0.8)) ? 0.12 : 1);
  }
  boom(e, t) {
    if (
      (this.scene.remove(e.mesh),
      this.hooks.allowExplosion?.(e.pos) !== !1 && e.mine)
    ) {
      const i = Qce[e.type],
        n = this.blastExposure(e.pos, t),
        o = kie(e.type);
      (this.effects.explosion(e.pos, i.radius, t, n, o),
        this.sfx.blast(o, e.pos.distanceTo(t), n, i.radius));
      const a = nu.has(e.type) ? e.id : 0;
      this.hooks.sendExplosion(
        e.pos,
        i.radius,
        i.dmg,
        e.ignoreVehicle,
        i.blockRadius,
        a,
        o,
      );
    }
  }
  update(e, t, i = new k(1, 0, 0)) {
    const n = e;
    for (let o = this.list.length - 1; o >= 0; o--) {
      const a = this.list[o],
        r =
          a.type === mt.SHELL && a.serverDriven
            ? Math.min(n, Math.max(0, 0.25 - (a.sinceSync ?? 0)))
            : n;
      if (((a.sinceSync = (a.sinceSync ?? 0) + n), a.terrainStopped)) continue;
      if (
        ((a.life += r),
        this.trailFrom.copy(a.pos),
        !a.flybyPlayed &&
          a.life > 0.2 &&
          nu.has(a.type) &&
          a.pos.distanceToSquared(t) < (18 + a.speed * (r + 0.04)) ** 2)
      ) {
        const h = this.audioOffset.copy(t).sub(a.pos),
          d = a.vel.lengthSq(),
          u = h.dot(a.vel) / Math.max(1, d);
        if (u >= 0 && u <= r + 0.04) {
          const f = this.audioOffset
              .copy(a.pos)
              .addScaledVector(a.vel, u)
              .sub(t),
            p = f.length();
          p < 18 &&
            !this.world.raycast(
              t,
              this.audioRay.copy(f).normalize(),
              Math.max(0, p - 0.5),
            ) &&
            ((a.flybyPlayed = !0),
            this.sfx.flyby(p, f.dot(i) / Math.max(1, p), u, !0));
        }
      }
      let l = !1;
      const c = a.id !== 0 && (a.serverDriven || nu.has(a.type));
      if (a.type === mt.GRENADE) {
        a.vel.y -= 22 * this.gravityScale * r;
        const h = ["y", "x", "z"];
        for (const d of h) {
          const u = Math.max(1, Math.ceil((Math.abs(a.vel[d]) * r) / 0.15));
          for (let f = 0; f < u; f++) {
            const p = a.pos[d] + (a.vel[d] * r) / u,
              m = a.pos.clone();
            if (((m[d] = p), this.world.isSolidAt(m.x, m.y, m.z))) {
              (Math.abs(a.vel[d]) > 2 && this.sfx.bounce(),
                (a.vel[d] *= -0.42),
                a.vel.multiplyScalar(0.78));
              break;
            } else a.pos[d] = p;
          }
        }
        a.life > 2.2 && (l = !0);
      } else {
        const h =
          a.type === mt.GRENADE_40MM
            ? 18 * this.gravityScale
            : a.type === mt.SHELL
              ? (a.guide ? ice : OS) * this.gravityScale
              : 0;
        if (
          (a.type === mt.BOMB && (a.vel.y -= 16 * this.gravityScale * r),
          (a.type === mt.ROCKET ||
            a.type === mt.MISSILE ||
            a.type === mt.TOMAHAWK ||
            a.type === mt.NUCLEAR) &&
            a.guide)
        ) {
          if (!a.serverDriven && a.tKind === 1 && a.type !== mt.ROCKET) {
            const b = this.list.find((S) => S.id === a.tId);
            b ? a.guide.copy(b.pos).addScaledVector(b.vel, 0.18) : (l = !0);
          }
          const f =
            this.airMissiles &&
            a.serverDriven &&
            a.type === mt.MISSILE &&
            a.homing === void 0 &&
            !(a.cruiseY > 0);
          a.type === mt.MISSILE && !f && (a.vel.y -= 4 * this.gravityScale * r);
          const p = a.guide.distanceTo(a.pos);
          if (f && p < a.speed * r + 0.5) {
            (a.pos.copy(a.guide),
              a.mesh.position.copy(a.pos),
              (a.terrainStopped = !0));
            continue;
          }
          let m,
            g = !1;
          if (
            a.cruiseY > 0 &&
            (a.type === mt.TOMAHAWK ||
              a.type === mt.NUCLEAR ||
              (a.type === mt.MISSILE &&
                a.tKind !== 1 &&
                a.cruiseY > a.guide.y + 10))
          ) {
            const b = pQ(
              a,
              a.pos,
              a.guide,
              a.travel,
              a.type === mt.NUCLEAR ? UW : a.type === mt.TOMAHAWK ? PW : 28,
            );
            ((m = new k(b.x, b.y, b.z)), (g = !!a.terminalDive));
          } else m = a.guide.clone().sub(a.pos);
          const y = m.length();
          if (y > 0.01) {
            const b =
              a.type === mt.MISSILE && !f
                ? Math.min(a.speed, Math.max(12, p * 2.4))
                : a.speed;
            (m.multiplyScalar(b / y),
              a.vel.lerp(
                m,
                Math.min(
                  1,
                  (a.type === mt.NUCLEAR
                    ? 4.2
                    : a.type === mt.TOMAHAWK
                      ? 4.8
                      : 3.2) * r,
                ),
              ),
              a.vel.setLength(b));
          }
          !c &&
            p < 3 &&
            a.tKind !== 1 &&
            ((a.type !== mt.TOMAHAWK && a.type !== mt.NUCLEAR) || g) &&
            (l = !0);
        }
        if (a.homing !== void 0 && this.homingPos) {
          const f = this.homingPos(a.homing);
          if (f) {
            const p = this.audioOffset.copy(f).sub(a.pos),
              m = p.length(),
              g = a.vel.length();
            if (m > 0.5 && g > 1) {
              const y = p.multiplyScalar(g / m),
                b = Math.min(1, (m < 60 ? 14 : 5) * r);
              a.vel.lerp(y, b).setLength(g);
            }
          }
        }
        const d = Math.max(1, Math.ceil((a.vel.length() * r) / 0.5)),
          u =
            ((a.type === mt.TOMAHAWK || a.type === mt.NUCLEAR) &&
              a.life < 2.3) ||
            (a.type === mt.MISSILE && a.tKind !== 1 && a.life < 1);
        for (let f = 0; f < d && !l; f++) {
          if (
            (this.tmpFrom.copy(a.pos),
            a.pos.addScaledVector(a.vel, r / d),
            h &&
              ((a.pos.y -= 0.5 * h * (r / d) ** 2), (a.vel.y -= (h * r) / d)),
            a.type === mt.SHELL && a.serverDriven)
          ) {
            const m = tce(this.tmpFrom, a.pos, (g, y, b) =>
              this.world.isSolidAt(g + 0.5, y + 0.5, b + 0.5),
            );
            if (m) {
              (a.pos.set(m.x, m.y, m.z), (a.terrainStopped = !0));
              break;
            }
          }
          if (
            ((a.travel += this.tmpFrom.distanceTo(a.pos)),
            (this.world.isSolidAt(a.pos.x, a.pos.y, a.pos.z) ||
              a.pos.y <= 0.2) &&
              !u &&
              !c)
          )
            l = !0;
          else {
            if (
              a.mine &&
              !a.serverDriven &&
              !u &&
              a.tKind !== 1 &&
              a.travel > e0e
            ) {
              const m = this.hooks.entityImpact(this.tmpFrom, a.pos, a.mine);
              m && (a.pos.copy(m), (l = !0));
            }
            if (
              !l &&
              a.mine &&
              !a.serverDriven &&
              a.tKind === 1 &&
              a.type !== mt.ROCKET
            ) {
              const m = this.list.find((g) => g.id === a.tId);
              m &&
                m.pos.distanceTo(a.pos) < 5.5 &&
                (this.hooks.onHitProjectile(m.id, m.pos, 3), (l = !0));
            }
            if (!l && a.mine && !a.serverDriven && !u) {
              const m = this.hooks.vehicleImpact(a.pos, a.ignoreVehicle);
              m &&
                (a.mine &&
                  this.hooks.onVehicleHit(
                    m.id,
                    Jce[a.type] ?? 60,
                    a.pos,
                    ece(a.type),
                  ),
                (l = !0));
            }
          }
        }
        ((a.type === mt.ROCKET ||
          a.type === mt.MISSILE ||
          a.type === mt.TOMAHAWK ||
          a.type === mt.NUCLEAR) &&
          !(
            this.airMissiles &&
            (a.type === mt.MISSILE || a.type === mt.ROCKET)
          ) &&
          (a.trailDistance = this.effects.rocketTrail(
            this.trailFrom,
            a.pos,
            a.vel,
            a.type,
            a.trailDistance,
            t,
          )),
          !c &&
            a.life >
              (a.type === mt.NUCLEAR
                ? 240
                : a.type === mt.TOMAHAWK
                  ? 70
                  : 12) &&
            (l = !0));
      }
      (a.mesh.position.copy(a.pos),
        a.vel.lengthSq() > 0.1 &&
          a.type !== mt.GRENADE &&
          a.mesh.lookAt(
            this.tmpFrom
              .copy(a.pos)
              .addScaledVector(a.vel, nu.has(a.type) ? -1 : 1),
          ),
        l && (this.boom(a, t), this.list.splice(o, 1)));
    }
  }
}
