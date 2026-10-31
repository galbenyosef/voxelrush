// index-BeUlFSPp 249 — math
// Lines 132876-133182 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const w0e = 18,
  Th = 9,
  vM = 1.8,
  _L = new k(0, 1, 0),
  e1 = new k(),
  bM = new hi(),
  ey = new pi(),
  M0e = new Bl(1, 14).rotateX(-Math.PI / 2);
class qT {
  constructor(e, t) {
    ((this.scene = e), (this.hooks = t));
  }
  corpses = [];
  maxCorpses = w0e;
  viewer = null;
  farCull = 1 / 0;
  get count() {
    return this.corpses.length;
  }
  spawn(e, t, i, n = {}) {
    if (this.viewer && e.position.distanceTo(this.viewer) > this.farCull) {
      e.removeFromParent();
      return;
    }
    for (
      this.hooks.spirit?.(e.position);
      this.corpses.length >= this.maxCorpses;
    )
      this.remove(this.corpses.shift());
    const o = e.position.clone(),
      a = new re(),
      r = new re();
    (a.position.copy(o),
      (a.rotation.y = t),
      a.add(r),
      e.removeFromParent(),
      e.position.set(0, 0, 0),
      e.rotation.set(0, 0, 0),
      r.add(e),
      this.scene.add(a));
    let l = 0,
      c = 1;
    const h = Math.hypot(n.dirX ?? 0, n.dirZ ?? 0);
    if (h > 0.001) {
      const g = n.dirX / h,
        y = n.dirZ / h,
        b = Math.cos(-t),
        S = Math.sin(-t);
      ((l = g * b + y * S), (c = -g * S + y * b));
    }
    c += Math.sign(c || 1) * 0.35;
    const d = new k().crossVectors(_L, e1.set(l, 0, c).normalize()).normalize(),
      u = !!n.blast,
      f = new k();
    if (u) {
      const g = h > 0.001 ? n.dirX / h : Math.sin(t),
        y = h > 0.001 ? n.dirZ / h : Math.cos(t),
        b = 5 + Math.random() * 3;
      f.set(g * b, 5.5 + Math.random() * 2.5, y * b);
    }
    const p = i.held && i.held.children.length ? i.held : null,
      m = {
        root: a,
        pivot: r,
        body: e,
        limbs: i,
        age: 0,
        axis: d,
        fall: n.lying ? Math.PI / 2 : 0,
        fallVel: 0,
        landed: !1,
        bounced: !1,
        blast: u,
        vel: f,
        spin: u
          ? new k(
              (Math.random() - 0.5) * 9,
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 9,
            )
          : new k(),
        spinQ: new hi(),
        arms: qT.armPose(),
        headRoll: (Math.random() - 0.5) * 0.9,
        legSpread: 0.12 + Math.random() * 0.25,
        weapon: p,
        weaponVel: new k(),
        weaponSpin: new k(),
        weaponRest: null,
        weaponDropAt: u ? 0 : 0.12 + Math.random() * 0.12,
        pool: null,
        groundY: this.hooks.groundAt(o.x, o.z, o.y + 1.2),
        lyingStart: !!n.lying,
      };
    (Number.isFinite(m.groundY) || (m.groundY = o.y),
      this.corpses.push(m),
      this.hooks.wound(e1.copy(o).add(new k(0, n.lying ? 0.35 : 1.2, 0)), u));
  }
  clear() {
    for (const e of this.corpses) this.remove(e);
    this.corpses = [];
  }
  static armPose() {
    const e = () => (Math.random() - 0.5) * 0.3,
      t = Math.floor(Math.random() * 3);
    return t === 0
      ? [2.95 + e(), -0.35 + e(), 2.75 + e(), 0.45 + e()]
      : t === 1
        ? [0.25 + e(), -1.4 + e(), 0.35 + e(), 1.3 + e()]
        : Math.random() < 0.5
          ? [2.85 + e(), -0.3 + e(), 0.3 + e(), 1.25 + e()]
          : [0.3 + e(), -1.25 + e(), 2.85 + e(), 0.3 + e()];
  }
  remove(e) {
    (e.root.removeFromParent(),
      e.weapon && e.weapon.removeFromParent(),
      e.pool && (e.pool.removeFromParent(), e.pool.material.dispose()));
  }
  dropWeapon(e) {
    const t = e.weapon;
    this.scene.attach(t);
    const i = e1.copy(e.axis).cross(_L).multiplyScalar(-1);
    (e.weaponVel.set(
      i.x * 1.6 + (Math.random() - 0.5),
      2 + Math.random() * 1.5,
      i.z * 1.6 + (Math.random() - 0.5),
    ),
      e.blast && e.weaponVel.add(e.vel.clone().multiplyScalar(0.8)),
      e.weaponSpin.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 10,
      ));
  }
  startPool(e) {
    if (e.pool) return;
    const t = new Zt({
      color: 3802630,
      transparent: !0,
      opacity: 0.78,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    });
    ((e.pool = new Q(M0e, t)),
      (e.pool.renderOrder = 1),
      e.pool.scale.setScalar(0.01),
      e.pool.position.set(
        e.root.position.x,
        e.groundY + 0.02,
        e.root.position.z,
      ),
      this.scene.add(e.pool));
  }
  update(e, t) {
    e = Math.min(e, 0.1);
    for (let i = this.corpses.length - 1; i >= 0; i--) {
      const n = this.corpses[i];
      n.age += e;
      const o = t ? n.root.position.distanceToSquared(t) > 25600 : !1;
      if (n.age > Th + vM || (o && n.age > 3)) {
        (this.remove(n), this.corpses.splice(i, 1));
        continue;
      }
      if (
        (n.blast ? this.updateBlast(n, e) : this.updateFall(n, e),
        this.poseLimbs(n),
        this.updateWeapon(n, e),
        n.pool)
      ) {
        const a = Math.min(1, (n.age - (n.blast ? 0.6 : 0.9)) / 2.6);
        (n.pool.scale.setScalar(Math.max(0.01, 0.25 + 0.75 * a) * 0.85),
          (n.pool.material.opacity =
            0.78 * (1 - Math.max(0, (n.age - Th) / vM))));
      }
      if (n.age > Th) {
        const a = (n.age - Th) / vM;
        ((n.root.position.y = n.groundY - a * a * 1.1),
          n.weapon && (n.weapon.position.y -= e * 0.7 * a));
      }
    }
  }
  updateFall(e, t) {
    const i = e.lyingStart ? 1 : Math.min(1, e.age / 0.22),
      n = Math.PI / 2;
    (e.age > 0.12 &&
      !e.landed &&
      ((e.fallVel += (5.5 + e.fall * 9) * t),
      (e.fall += e.fallVel * t),
      e.fall >= n &&
        ((e.fall = n),
        !e.bounced && e.fallVel > 2.2 && !e.lyingStart
          ? ((e.fallVel = -e.fallVel * 0.22),
            (e.bounced = !0),
            this.impact(e, 1))
          : ((e.landed = !0),
            (e.fallVel = 0),
            e.bounced || this.impact(e, e.lyingStart ? 0.35 : 1)))),
      e.pivot.quaternion.setFromAxisAngle(e.axis, e.fall));
    const o = Math.min(1, e.fall / n);
    ((e.root.position.y =
      e.age > Th
        ? e.root.position.y
        : e.groundY - 0.32 * i * (1 - o) + 0.16 * o),
      e.weapon &&
        e.age >= e.weaponDropAt &&
        e.weapon.parent !== this.scene &&
        this.dropWeapon(e),
      (e.landed || e.bounced) && this.startPool(e));
  }
  updateBlast(e, t) {
    e.weapon && e.weapon.parent !== this.scene && this.dropWeapon(e);
    const i = e.root.position;
    if (e.landed)
      e.age <= Th &&
        (e.vel.multiplyScalar(Math.exp(-t * 8)),
        i.addScaledVector(e1.set(e.vel.x, 0, e.vel.z), t),
        e.spinQ.slerp(bM.identity(), 1 - Math.exp(-t * 7)),
        (i.y += (e.groundY + 0.16 - i.y) * (1 - Math.exp(-t * 10))));
    else {
      ((e.vel.y -= 22 * t),
        i.addScaledVector(e.vel, t),
        (e.fall = Math.min(Math.PI / 2, e.fall + t * 4.2)),
        e.spinQ.multiply(
          bM.setFromEuler(ey.set(e.spin.x * t, e.spin.y * t, e.spin.z * t)),
        ));
      const n = this.hooks.groundAt(i.x, i.z, i.y + 1);
      (Number.isFinite(n) && (e.groundY = n),
        i.y <= e.groundY + 0.16 &&
          e.vel.y < 0 &&
          ((i.y = e.groundY + 0.16),
          !e.bounced && e.vel.y < -4
            ? ((e.vel.y *= -0.28),
              (e.vel.x *= 0.45),
              (e.vel.z *= 0.45),
              e.spin.multiplyScalar(0.4),
              (e.bounced = !0),
              this.impact(e, 1.3))
            : ((e.landed = !0), this.impact(e, 0.8), this.startPool(e))));
    }
    e.pivot.quaternion.setFromAxisAngle(e.axis, e.fall).premultiply(e.spinQ);
  }
  poseLimbs(e) {
    const t = e.limbs,
      i = Math.min(1, e.age / 0.5),
      n = e.blast && !e.landed ? Math.sin(e.age * 17) * 0.5 : 0,
      o = Math.min(1, e.fall / (Math.PI / 2)),
      a = i * (0.55 + 0.45 * o),
      [r, l, c, h] = e.arms;
    (t.armL && ((t.armL.rotation.x = r * a + n), (t.armL.rotation.z = l * a)),
      t.armR && ((t.armR.rotation.x = c * a - n), (t.armR.rotation.z = h * a)));
    const d = e.lyingStart
      ? 0
      : Math.sin(Math.min(1, e.age / 0.5) * Math.PI) * 0.9;
    for (const [u, f] of [
      [t.legL, -1],
      [t.legR, 1],
    ]) {
      if (!u) continue;
      ((u.rotation.x = -d * 0.55 + (f < 0 ? 0.08 : -0.1) * o + n * f * 0.6),
        (u.rotation.z = f * e.legSpread * o));
      const p = u.getObjectByName("joint");
      p && (p.rotation.x = d * 1.1 * (1 - o * 0.8));
    }
    t.head &&
      ((t.head.rotation.x = -0.35 * o), (t.head.rotation.z = e.headRoll * o));
  }
  updateWeapon(e, t) {
    const i = e.weapon;
    if (!(!i || i.parent !== this.scene || e.age > Th))
      if (e.weaponRest) i.quaternion.slerp(e.weaponRest, 1 - Math.exp(-t * 14));
      else {
        ((e.weaponVel.y -= 20 * t),
          i.position.addScaledVector(e.weaponVel, t),
          i.quaternion.multiply(
            bM.setFromEuler(
              ey.set(
                e.weaponSpin.x * t,
                e.weaponSpin.y * t,
                e.weaponSpin.z * t,
              ),
            ),
          ));
        const n = this.hooks.groundAt(
          i.position.x,
          i.position.z,
          i.position.y + 0.6,
        );
        Number.isFinite(n) &&
          i.position.y <= n + 0.06 &&
          ((i.position.y = n + 0.06),
          ey.setFromQuaternion(i.quaternion, "YXZ"),
          (e.weaponRest = new hi().setFromEuler(
            new pi(0, ey.y, Math.PI / 2, "YXZ"),
          )),
          this.hooks.impact(i.position, 0.5, !0));
      }
  }
  impact(e, t) {
    this.hooks.impact(
      e1.set(e.root.position.x, e.groundY + 0.05, e.root.position.z),
      t,
      !1,
    );
  }
}
