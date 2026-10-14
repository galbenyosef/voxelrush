// index-Dp6GxvJu 227 — math
// Lines 125584-125892 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const Kne = 18,
  Dh = 9,
  Xb = 1.8,
  QR = new k(0, 1, 0),
  Sf = new k(),
  Zb = new Jt(),
  u2 = new hi(),
  Yne = new Kr(1, 14).rotateX(-Math.PI / 2);
class W4 {
  constructor(e, t) {
    w(this, "corpses", []);
    w(this, "maxCorpses", Kne);
    w(this, "viewer", null);
    w(this, "farCull", 1 / 0);
    ((this.scene = e), (this.hooks = t));
  }
  get count() {
    return this.corpses.length;
  }
  spawn(e, t, i, s = {}) {
    if (this.viewer && e.position.distanceTo(this.viewer) > this.farCull) {
      e.removeFromParent();
      return;
    }
    for (; this.corpses.length >= this.maxCorpses;)
      this.remove(this.corpses.shift());
    const o = e.position.clone(),
      a = new pe(),
      r = new pe();
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
    const h = Math.hypot(s.dirX ?? 0, s.dirZ ?? 0);
    if (h > 0.001) {
      const y = s.dirX / h,
        g = s.dirZ / h,
        b = Math.cos(-t),
        S = Math.sin(-t);
      ((l = y * b + g * S), (c = -y * S + g * b));
    }
    c += Math.sign(c || 1) * 0.35;
    const d = new k().crossVectors(QR, Sf.set(l, 0, c).normalize()).normalize(),
      u = !!s.blast,
      f = new k();
    if (u) {
      const y = h > 0.001 ? s.dirX / h : Math.sin(t),
        g = h > 0.001 ? s.dirZ / h : Math.cos(t),
        b = 5 + Math.random() * 3;
      f.set(y * b, 5.5 + Math.random() * 2.5, g * b);
    }
    const p = i.held && i.held.children.length ? i.held : null,
      m = {
        root: a,
        pivot: r,
        body: e,
        limbs: i,
        age: 0,
        axis: d,
        fall: s.lying ? Math.PI / 2 : 0,
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
        spinQ: new Jt(),
        arms: W4.armPose(),
        headRoll: (Math.random() - 0.5) * 0.9,
        legSpread: 0.12 + Math.random() * 0.25,
        weapon: p,
        weaponVel: new k(),
        weaponSpin: new k(),
        weaponRest: null,
        weaponDropAt: u ? 0 : 0.12 + Math.random() * 0.12,
        pool: null,
        groundY: this.hooks.groundAt(o.x, o.z, o.y + 1.2),
        lyingStart: !!s.lying,
      };
    (Number.isFinite(m.groundY) || (m.groundY = o.y),
      this.corpses.push(m),
      this.hooks.wound(Sf.copy(o).add(new k(0, s.lying ? 0.35 : 1.2, 0)), u));
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
    const i = Sf.copy(e.axis).cross(QR).multiplyScalar(-1);
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
    const t = new qt({
      color: 3802630,
      transparent: !0,
      opacity: 0.78,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    });
    ((e.pool = new le(Yne, t)),
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
      const s = this.corpses[i];
      s.age += e;
      const o = t ? s.root.position.distanceToSquared(t) > 25600 : !1;
      if (s.age > Dh + Xb || (o && s.age > 3)) {
        (this.remove(s), this.corpses.splice(i, 1));
        continue;
      }
      if (
        (s.blast ? this.updateBlast(s, e) : this.updateFall(s, e),
        this.poseLimbs(s),
        this.updateWeapon(s, e),
        s.pool)
      ) {
        const a = Math.min(1, (s.age - (s.blast ? 0.6 : 0.9)) / 2.6);
        (s.pool.scale.setScalar(Math.max(0.01, 0.25 + 0.75 * a) * 0.85),
          (s.pool.material.opacity =
            0.78 * (1 - Math.max(0, (s.age - Dh) / Xb))));
      }
      if (s.age > Dh) {
        const a = (s.age - Dh) / Xb;
        ((s.root.position.y = s.groundY - a * a * 1.1),
          s.weapon && (s.weapon.position.y -= e * 0.7 * a));
      }
    }
  }
  updateFall(e, t) {
    const i = e.lyingStart ? 1 : Math.min(1, e.age / 0.22),
      s = Math.PI / 2;
    (e.age > 0.12 &&
      !e.landed &&
      ((e.fallVel += (5.5 + e.fall * 9) * t),
      (e.fall += e.fallVel * t),
      e.fall >= s &&
        ((e.fall = s),
        !e.bounced && e.fallVel > 2.2 && !e.lyingStart
          ? ((e.fallVel = -e.fallVel * 0.22),
            (e.bounced = !0),
            this.impact(e, 1))
          : ((e.landed = !0),
            (e.fallVel = 0),
            e.bounced || this.impact(e, e.lyingStart ? 0.35 : 1)))),
      e.pivot.quaternion.setFromAxisAngle(e.axis, e.fall));
    const o = Math.min(1, e.fall / s);
    ((e.root.position.y =
      e.age > Dh
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
      e.age <= Dh &&
        (e.vel.multiplyScalar(Math.exp(-t * 8)),
        i.addScaledVector(Sf.set(e.vel.x, 0, e.vel.z), t),
        e.spinQ.slerp(Zb.identity(), 1 - Math.exp(-t * 7)),
        (i.y += (e.groundY + 0.16 - i.y) * (1 - Math.exp(-t * 10))));
    else {
      ((e.vel.y -= 22 * t),
        i.addScaledVector(e.vel, t),
        (e.fall = Math.min(Math.PI / 2, e.fall + t * 4.2)),
        e.spinQ.multiply(
          Zb.setFromEuler(u2.set(e.spin.x * t, e.spin.y * t, e.spin.z * t)),
        ));
      const s = this.hooks.groundAt(i.x, i.z, i.y + 1);
      (Number.isFinite(s) && (e.groundY = s),
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
      s = e.blast && !e.landed ? Math.sin(e.age * 17) * 0.5 : 0,
      o = Math.min(1, e.fall / (Math.PI / 2)),
      a = i * (0.55 + 0.45 * o),
      [r, l, c, h] = e.arms;
    (t.armL && ((t.armL.rotation.x = r * a + s), (t.armL.rotation.z = l * a)),
      t.armR && ((t.armR.rotation.x = c * a - s), (t.armR.rotation.z = h * a)));
    const d = e.lyingStart
      ? 0
      : Math.sin(Math.min(1, e.age / 0.5) * Math.PI) * 0.9;
    for (const [u, f] of [
      [t.legL, -1],
      [t.legR, 1],
    ]) {
      if (!u) continue;
      ((u.rotation.x = -d * 0.55 + (f < 0 ? 0.08 : -0.1) * o + s * f * 0.6),
        (u.rotation.z = f * e.legSpread * o));
      const p = u.getObjectByName("joint");
      p && (p.rotation.x = d * 1.1 * (1 - o * 0.8));
    }
    t.head &&
      ((t.head.rotation.x = -0.35 * o), (t.head.rotation.z = e.headRoll * o));
  }
  updateWeapon(e, t) {
    const i = e.weapon;
    if (!(!i || i.parent !== this.scene || e.age > Dh))
      if (e.weaponRest) i.quaternion.slerp(e.weaponRest, 1 - Math.exp(-t * 14));
      else {
        ((e.weaponVel.y -= 20 * t),
          i.position.addScaledVector(e.weaponVel, t),
          i.quaternion.multiply(
            Zb.setFromEuler(
              u2.set(
                e.weaponSpin.x * t,
                e.weaponSpin.y * t,
                e.weaponSpin.z * t,
              ),
            ),
          ));
        const s = this.hooks.groundAt(
          i.position.x,
          i.position.z,
          i.position.y + 0.6,
        );
        Number.isFinite(s) &&
          i.position.y <= s + 0.06 &&
          ((i.position.y = s + 0.06),
          u2.setFromQuaternion(i.quaternion, "YXZ"),
          (e.weaponRest = new Jt().setFromEuler(
            new hi(0, u2.y, Math.PI / 2, "YXZ"),
          )),
          this.hooks.impact(i.position, 0.5, !0));
      }
  }
  impact(e, t) {
    this.hooks.impact(
      Sf.set(e.root.position.x, e.groundY + 0.05, e.root.position.z),
      t,
      !1,
    );
  }
}
const Qb = 16,
  jne = 0.62,
  Xne = 14,
  Jb = new k(),
  JR = new k();
