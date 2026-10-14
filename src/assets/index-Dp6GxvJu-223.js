// index-Dp6GxvJu 223 — pos
// Lines 122742-123158 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class kne {
  constructor(e, t, i, s) {
    w(this, "hooks", {
      sendExplosion: () => {},
      sendSpawn: () => {},
      vehicleImpact: () => null,
      entityImpact: () => null,
      onVehicleHit: () => {},
      onHitProjectile: () => {},
    });
    w(this, "myId", 0);
    w(this, "gravityScale", 1);
    w(this, "currentPlanet", CELESTIAL.EARTH);
    w(this, "list", []);
    w(this, "idCounter", 0);
    w(this, "tmpFrom", new k());
    w(this, "trailFrom", new k());
    w(this, "audioOffset", new k());
    w(this, "audioRay", new k());
    ((this.scene = e), (this.world = t), (this.effects = i), (this.sfx = s));
  }
  get gravity() {
    return this.gravityScale;
  }
  nearestGrenade(e, t) {
    let i = null,
      s = t * t;
    for (const o of this.list) {
      if (o.type !== PROJECTILE_KIND.GRENADE) continue;
      const a = o.pos.distanceToSquared(e);
      a < s && ((s = a), (i = o));
    }
    return i ? { pos: i.pos, left: Math.max(0, ka.fuse - i.life) } : null;
  }
  hasVehicleMissiles(e) {
    return this.list.some(
      (t) => t.ignoreVehicle === e && t.type === PROJECTILE_KIND.MISSILE,
    );
  }
  setPlanet(e) {
    (this.effects.clearRocketTrails(),
      (this.currentPlanet = e),
      (this.gravityScale = e === CELESTIAL.MOON ? wp : 1));
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
  spawn(e, t, i, s, o = {}) {
    var c;
    const a = o.id === void 0,
      r = o.id ?? (s ? this.genId() : 0);
    if (o.id !== void 0) {
      const h = this.list.findIndex((d) => d.id === r);
      if (h >= 0) {
        const d = this.list[h];
        return (
          e === PROJECTILE_KIND.SHELL && o.serverDriven
            ? d.pos.copy(t)
            : d.pos.lerp(t, 0.65),
          (d.sinceSync = 0),
          (d.terrainStopped = !1),
          d.vel.copy(i),
          (d.guide = ((c = o.guide) == null ? void 0 : c.clone()) ?? null),
          (d.serverDriven = o.serverDriven),
          o.cruiseY !== void 0 &&
            ((d.cruiseY = o.cruiseY),
            (d.cruiseReached = o.cruiseReached),
            (d.terminalDive = o.terminalDive)),
          !1
        );
      }
    }
    const l = Cne(e);
    return (
      l.position.copy(t),
      this.scene.add(l),
      this.list.push({
        serverDriven: o.serverDriven,
        id: r,
        owner: o.owner ?? (s ? this.myId : 0),
        type: e,
        pos: t.clone(),
        vel: i.clone(),
        life: 0,
        mine: s,
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
        cruiseY:
          o.cruiseY ??
          (o.guide
            ? Math.max(t.y, o.guide.y) +
              (e === PROJECTILE_KIND.MISSILE && i.y > 20
                ? Math.min(65, Math.max(22, t.distanceTo(o.guide) * 0.22))
                : e === PROJECTILE_KIND.TOMAHAWK
                  ? UH
                  : e === PROJECTILE_KIND.NUCLEAR
                    ? YH
                    : 0)
            : 0),
        planet: o.planet ?? this.currentPlanet,
      }),
      s &&
        a &&
        this.hooks.sendSpawn(r, e, t, i, o.guide ?? null, o.tKind, o.tId),
      !0
    );
  }
  rayHit(e, t, i) {
    let s = null;
    for (const o of this.list) {
      if (!NUKE_PROJECTILES.has(o.type)) continue;
      const a = o.pos.clone().sub(e),
        r = a.dot(t);
      if (r < 0) continue;
      const l = 1,
        c = a.lengthSq() - r * r;
      if (c > l * l) continue;
      const h = r - Math.sqrt(l * l - c);
      h >= 0 &&
        h < i &&
        (!s || h < s.dist) &&
        (s = { id: o.id, dist: h, pos: o.pos.clone(), type: o.type });
    }
    return s;
  }
  activeProjectiles() {
    const e = [];
    for (const t of this.list)
      NUKE_PROJECTILES.has(t.type) &&
        e.push({
          id: t.id,
          owner: t.owner,
          type: t.type,
          pos: t.pos,
          vel: t.vel,
        });
    return e;
  }
  removeById(e, t, i, s, o, a = !0) {
    const r = this.list.findIndex((l) => l.id === e);
    if (
      !(r < 0) &&
      (this.scene.remove(this.list[r].mesh), this.list.splice(r, 1), a)
    ) {
      const l = new k(t, i, s),
        c = this.blastExposure(l, o);
      (this.effects.explosion(l, 1.6, o, c),
        this.sfx.explosion(l.distanceTo(o) + 6, c));
    }
  }
  blastExposure(e, t) {
    const i = e.clone().sub(t),
      s = i.length();
    return s < 1.2
      ? 1
      : (i.multiplyScalar(1 / s),
        this.world.raycast(t, i, Math.max(0, s - 0.8)) ? 0.12 : 1);
  }
  boom(e, t) {
    var i, s;
    if (
      (this.scene.remove(e.mesh),
      ((s = (i = this.hooks).allowExplosion) == null
        ? void 0
        : s.call(i, e.pos)) !== !1 && e.mine)
    ) {
      const o = Ane[e.type],
        a = this.blastExposure(e.pos, t),
        r = iX(e.type);
      (this.effects.explosion(e.pos, o.radius, t, a, r),
        this.sfx.blast(r, e.pos.distanceTo(t), a, o.radius));
      const l = NUKE_PROJECTILES.has(e.type) ? e.id : 0;
      this.hooks.sendExplosion(
        e.pos,
        o.radius,
        o.dmg,
        e.ignoreVehicle,
        o.blockRadius,
        l,
        r,
      );
    }
  }
  update(e, t, i = new k(1, 0, 0)) {
    const s = e;
    for (let o = this.list.length - 1; o >= 0; o--) {
      const a = this.list[o],
        r =
          a.type === PROJECTILE_KIND.SHELL && a.serverDriven
            ? Math.min(s, Math.max(0, 0.25 - (a.sinceSync ?? 0)))
            : s;
      if (((a.sinceSync = (a.sinceSync ?? 0) + s), a.terrainStopped)) continue;
      if (
        ((a.life += r),
        this.trailFrom.copy(a.pos),
        !a.flybyPlayed &&
          a.life > 0.2 &&
          NUKE_PROJECTILES.has(a.type) &&
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
      const c = a.id !== 0 && (a.serverDriven || NUKE_PROJECTILES.has(a.type));
      if (a.type === PROJECTILE_KIND.GRENADE) {
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
          a.type === PROJECTILE_KIND.GRENADE_40MM
            ? 18 * this.gravityScale
            : a.type === PROJECTILE_KIND.SHELL
              ? (a.guide ? Hie : sw) * this.gravityScale
              : 0;
        if (
          (a.type === PROJECTILE_KIND.BOMB && (a.vel.y -= 16 * this.gravityScale * r),
          (a.type === PROJECTILE_KIND.ROCKET ||
            a.type === PROJECTILE_KIND.MISSILE ||
            a.type === PROJECTILE_KIND.TOMAHAWK ||
            a.type === PROJECTILE_KIND.NUCLEAR) &&
            a.guide)
        ) {
          if (!a.serverDriven && a.tKind === 1 && a.type !== PROJECTILE_KIND.ROCKET) {
            const g = this.list.find((b) => b.id === a.tId);
            g ? a.guide.copy(g.pos).addScaledVector(g.vel, 0.18) : (l = !0);
          }
          a.type === PROJECTILE_KIND.MISSILE && (a.vel.y -= 4 * this.gravityScale * r);
          const f = a.guide.distanceTo(a.pos);
          let p,
            m = !1;
          if (
            a.cruiseY > 0 &&
            (a.type === PROJECTILE_KIND.TOMAHAWK ||
              a.type === PROJECTILE_KIND.NUCLEAR ||
              (a.type === PROJECTILE_KIND.MISSILE &&
                a.tKind !== 1 &&
                a.cruiseY > a.guide.y + 10))
          ) {
            const g = Eq(
              a,
              a.pos,
              a.guide,
              a.travel,
              a.type === PROJECTILE_KIND.NUCLEAR ? jH : a.type === PROJECTILE_KIND.TOMAHAWK ? FH : 28,
            );
            ((p = new k(g.x, g.y, g.z)), (m = !!a.terminalDive));
          } else p = a.guide.clone().sub(a.pos);
          const y = p.length();
          if (y > 0.01) {
            const g =
              a.type === PROJECTILE_KIND.MISSILE
                ? Math.min(a.speed, Math.max(12, f * 2.4))
                : a.speed;
            (p.multiplyScalar(g / y),
              a.vel.lerp(
                p,
                Math.min(
                  1,
                  (a.type === PROJECTILE_KIND.NUCLEAR
                    ? 4.2
                    : a.type === PROJECTILE_KIND.TOMAHAWK
                      ? 4.8
                      : 3.2) * r,
                ),
              ),
              a.vel.setLength(g));
          }
          !c &&
            f < 3 &&
            a.tKind !== 1 &&
            ((a.type !== PROJECTILE_KIND.TOMAHAWK && a.type !== PROJECTILE_KIND.NUCLEAR) || m) &&
            (l = !0);
        }
        const d = Math.max(1, Math.ceil((a.vel.length() * r) / 0.5)),
          u =
            ((a.type === PROJECTILE_KIND.TOMAHAWK || a.type === PROJECTILE_KIND.NUCLEAR) &&
              a.life < 2.3) ||
            (a.type === PROJECTILE_KIND.MISSILE && a.tKind !== 1 && a.life < 1);
        for (let f = 0; f < d && !l; f++) {
          if (
            (this.tmpFrom.copy(a.pos),
            a.pos.addScaledVector(a.vel, r / d),
            h &&
              ((a.pos.y -= 0.5 * h * (r / d) ** 2), (a.vel.y -= (h * r) / d)),
            a.type === PROJECTILE_KIND.SHELL && a.serverDriven)
          ) {
            const m = Bie(this.tmpFrom, a.pos, (y, g, b) =>
              this.world.isSolidAt(y + 0.5, g + 0.5, b + 0.5),
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
              a.travel > Rne
            ) {
              const m = this.hooks.entityImpact(this.tmpFrom, a.pos, a.mine);
              m && (a.pos.copy(m), (l = !0));
            }
            if (
              !l &&
              a.mine &&
              !a.serverDriven &&
              a.tKind === 1 &&
              a.type !== PROJECTILE_KIND.ROCKET
            ) {
              const m = this.list.find((y) => y.id === a.tId);
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
                    _ne[a.type] ?? 60,
                    a.pos,
                    Die(a.type),
                  ),
                (l = !0));
            }
          }
        }
        ((a.type === PROJECTILE_KIND.ROCKET ||
          a.type === PROJECTILE_KIND.MISSILE ||
          a.type === PROJECTILE_KIND.TOMAHAWK ||
          a.type === PROJECTILE_KIND.NUCLEAR) &&
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
              (a.type === PROJECTILE_KIND.NUCLEAR
                ? 240
                : a.type === PROJECTILE_KIND.TOMAHAWK
                  ? 70
                  : 12) &&
            (l = !0));
      }
      (a.mesh.position.copy(a.pos),
        a.vel.lengthSq() > 0.1 &&
          a.type !== PROJECTILE_KIND.GRENADE &&
          a.mesh.lookAt(
            this.tmpFrom
              .copy(a.pos)
              .addScaledVector(a.vel, NUKE_PROJECTILES.has(a.type) ? -1 : 1),
          ),
        l && (this.boom(a, t), this.list.splice(o, 1)));
    }
  }
}
