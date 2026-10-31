// index-BeUlFSPp 240 — pos
// Lines 128109-128614 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class $T {
  pos = new k();
  vel = new k();
  yaw = 0;
  pitch = 0;
  onGround = !1;
  flying = !1;
  noclip = !1;
  hp = 100;
  maxHp = _1;
  alive = !0;
  downed = !1;
  inWater = !1;
  submerged = 0;
  splashImpact = 0;
  sprinting = !1;
  sprintLock = !1;
  crawlingFast = !1;
  crouching = !1;
  prone = !1;
  flaring = !1;
  seated = !1;
  parachute = !1;
  gravityScale = 1;
  w = 0.6;
  eyeSmooth = 1.62;
  stepLag = 0;
  ladderMount = null;
  get h() {
    return this.seated ? 1.25 : this.prone ? 0.6 : this.crouching ? 1.35 : 1.8;
  }
  mountRise = 0;
  mountSpeed = 1;
  get eye() {
    return this.mountRise > 0
      ? 1.62 + this.mountRise
      : this.seated
        ? 1.5
        : this.prone
          ? 0.42
          : this.crouching
            ? 1.15
            : 1.62;
  }
  fallApex = 0;
  static CHUTE_MIN_FALL = 5;
  canDeployChute() {
    return (
      !this.onGround &&
      this.vel.y < -8 &&
      this.fallApex - this.pos.y >= $T.CHUTE_MIN_FALL
    );
  }
  blastSpeedAllowance = 0;
  onFallDamage = () => {};
  look(e, t, i) {
    ((this.yaw -= e * 0.0022 * i),
      (this.pitch = Oe(this.pitch - t * 0.0022 * i, -1.55, 1.55)));
  }
  eyePos(e) {
    return e.set(
      this.pos.x,
      this.pos.y + this.eyeSmooth + this.stepLag,
      this.pos.z,
    );
  }
  landOn(e) {
    ((this.pos.y = e),
      (this.vel.y = 0),
      (this.onGround = !0),
      (this.fallApex = e));
  }
  applyImpulse(e, t, i) {
    [e, t, i].every(Number.isFinite) &&
      ((this.vel.x += e),
      (this.vel.y += t),
      (this.vel.z += i),
      (this.blastSpeedAllowance = Math.min(
        14,
        this.blastSpeedAllowance + Math.hypot(e, i),
      )),
      t > 0.1 && (this.onGround = !1));
  }
  canStand(e) {
    const t = this.w / 2 - 0.01;
    for (const [i, n] of [
      [-t, -t],
      [t, -t],
      [-t, t],
      [t, t],
    ])
      for (let o = 0.7; o <= 1.8; o += 0.5)
        if (e.isSolidAt(this.pos.x + i, this.pos.y + o, this.pos.z + n))
          return !1;
    return !0;
  }
  hasFootSupport(e, t = this.pos.x, i = this.pos.y, n = this.pos.z) {
    const o = this.w / 2 - 0.05,
      a = i - 0.05;
    for (const [r, l] of [
      [-o, -o],
      [o, -o],
      [-o, o],
      [o, o],
      [0, 0],
    ])
      if (e.isSolidAt(t + r, a, n + l)) return !0;
    return !1;
  }
  stepProbe = new k();
  canStepUp(e, t) {
    const i = this.stepProbe.set(t.x, 0, t.z);
    if (i.lengthSq() < 1e-6) return !1;
    i.normalize();
    const n = this.w / 2 + 0.35,
      o = this.pos.x + i.x * n,
      a = this.pos.z + i.z * n;
    return e.boxFree(o, this.pos.y + 0.05, a, this.w, 0.4)
      ? !1
      : e.boxFree(o, this.pos.y + 1.02, a, this.w, this.h);
  }
  lookDir(e) {
    const t = Math.cos(this.pitch);
    return e.set(
      -Math.sin(this.yaw) * t,
      Math.sin(this.pitch),
      -Math.cos(this.yaw) * t,
    );
  }
  update(e, t, i, n) {
    if (!i.isLoaded(this.pos.x, this.pos.z)) return;
    if (this.seated) {
      (this.vel.set(0, 0, 0),
        (this.onGround = !0),
        (this.inWater = !1),
        (this.submerged = 0),
        (this.sprinting = !1),
        (this.crouching = !1),
        (this.prone = !1),
        (this.parachute = !1),
        (this.eyeSmooth += (this.eye - this.eyeSmooth) * Math.min(1, 12 * e)));
      return;
    }
    (this.downed &&
      ((this.prone = !0),
      (this.flying = !1),
      (this.noclip = !1),
      (this.parachute = !1),
      (this.crouching = !1),
      (this.mountRise = 0),
      (this.blastSpeedAllowance = 0)),
      (this.blastSpeedAllowance *= Math.exp(-3.8 * e)),
      !this.downed &&
      n &&
      t.actionPressed("prone") &&
      !this.flying &&
      !this.inWater
        ? this.prone
          ? this.canStand(i) && (this.prone = !1)
          : this.onGround &&
            ((this.prone = !0),
            (this.crouching = !1),
            t.releaseMobileHold("crouch", "mobcrouch"))
        : !this.downed &&
          n &&
          this.prone &&
          t.actionPressed("crouch") &&
          this.canStand(i) &&
          (this.prone = !1),
      this.prone || this.flying || this.inWater || !n
        ? (this.crouching = !1)
        : (this.crouching = t.action("crouch")),
      (this.eyeSmooth += (this.eye - this.eyeSmooth) * Math.min(1, 12 * e)));
    const o = -Math.sin(this.yaw),
      a = -Math.cos(this.yaw),
      r = Math.cos(this.yaw),
      l = -Math.sin(this.yaw),
      c = n ? (t.action("forward") ? 1 : 0) - (t.action("back") ? 1 : 0) : 0,
      h = n ? (t.action("right") ? 1 : 0) - (t.action("left") ? 1 : 0) : 0;
    ((this.crawlingFast =
      n && this.prone && t.action("sprint") && (c !== 0 || h !== 0)),
      (this.sprinting =
        n &&
        t.action("sprint") &&
        c > 0 &&
        !this.prone &&
        !this.crouching &&
        !(this.sprintLock && !this.flying)));
    const d = this.inWater;
    if (
      ((this.inWater = i.isWaterAt(this.pos.x, this.pos.y + 0.6, this.pos.z)),
      this.inWater &&
        !d &&
        this.vel.y < -3 &&
        (this.splashImpact = -this.vel.y),
      this.inWater || (this.submerged = 0),
      this.flying)
    ) {
      const U = this.sprinting ? 26 : 13,
        W = new k(
          (o * c + r * h) * U,
          ((n && t.action("jump") ? 1 : 0) -
            (n && t.action("crouch") ? 1 : 0)) *
            U *
            0.8,
          (a * c + l * h) * U,
        );
      if ((this.vel.lerp(W, 1 - Math.exp(-9 * e)), this.noclip)) {
        (this.pos.addScaledVector(this.vel, e),
          (this.onGround = !1),
          (this.fallApex = this.pos.y));
        return;
      }
      const J = i.collideMove(this.pos, this.vel, this.w, this.h, e);
      ((this.onGround = J.onGround), (this.fallApex = this.pos.y));
      return;
    }
    const u = new k(o * c + r * h, 0, a * c + l * h);
    u.lengthSq() > 1 && u.normalize();
    const f =
        i.getBlock(
          Math.floor(this.pos.x),
          Math.floor(this.pos.y + 0.35),
          Math.floor(this.pos.z),
        ) === v.BARBED_WIRE ||
        i.getBlock(
          Math.floor(this.pos.x),
          Math.floor(this.pos.y + 1.1),
          Math.floor(this.pos.z),
        ) === v.BARBED_WIRE,
      p =
        i.getBlock(
          Math.floor(this.pos.x),
          Math.floor(this.pos.y + 0.35),
          Math.floor(this.pos.z),
        ) === v.COBWEB ||
        i.getBlock(
          Math.floor(this.pos.x),
          Math.floor(this.pos.y + 1.2),
          Math.floor(this.pos.z),
        ) === v.COBWEB;
    p &&
      !this.flying &&
      ((this.vel.y = Math.max(this.vel.y, -1.2)),
      this.vel.y > 1.5 && (this.vel.y = 1.5));
    const m = this.sprinting ? 4.1 : 3,
      g =
        (this.downed
          ? Xoe * (this.crawlingFast ? bC : 1)
          : this.prone
            ? 1.3 * (this.crawlingFast ? bC : 1) * Jt.crawlMul()
            : this.crouching
              ? 1.9
              : this.inWater
                ? m
                : this.sprinting
                  ? 6.6 * Jt.runMul()
                  : 4.4 * Jt.walkMul()) *
        (f ? 0.34 : 1) *
        (p && !this.flying ? 0.22 : 1) *
        (this.mountRise > 0 ? this.mountSpeed : 1),
      y = this.parachute && !this.onGround ? (this.flaring ? 2.6 : 6.4) : 0,
      b = this.inWater ? 22 : this.onGround ? 70 : 20;
    ((this.vel.x += u.x * b * e), (this.vel.z += u.z * b * e));
    const S = Math.hypot(this.vel.x, this.vel.z),
      M = (y || g) + this.blastSpeedAllowance;
    if (
      (S > M && ((this.vel.x *= M / S), (this.vel.z *= M / S)),
      u.lengthSq() === 0)
    ) {
      const U = Math.max(
        0,
        1 - (this.onGround ? 12 : this.inWater ? 5 : 1.2) * e,
      );
      ((this.vel.x *= U), (this.vel.z *= U));
    }
    const E = (U) => {
        const W = Math.floor(this.pos.x),
          J = Math.floor(U),
          j = Math.floor(this.pos.z);
        if (i.getBlock(W, J, j) !== v.LADDER) return null;
        const ne = i.getMeta(W, J, j) & 7,
          ge = this.pos.x - W,
          be = this.pos.z - j;
        return Math.abs(
          ne === 1
            ? ge - 0.06
            : ne === 2
              ? ge - 0.94
              : ne === 3
                ? be - 0.06
                : be - 0.94,
        ) <= 0.46
          ? { meta: ne, bx: W, by: J, bz: j }
          : null;
      },
      A = E(this.pos.y + 0.05),
      T = E(this.pos.y + 1.4),
      x = !this.downed && !!(A || T);
    if (this.ladderMount) {
      const U = this.ladderMount;
      ((U.t += e),
        (!(
          n &&
          !this.downed &&
          (c > 0 || t.action("jump")) &&
          !t.action("crouch") &&
          h === 0
        ) ||
          U.t > 1.4 ||
          this.inWater ||
          Math.hypot(U.x - this.pos.x, U.z - this.pos.z) > 1.6) &&
          (this.ladderMount = null));
    }
    if (this.ladderMount) {
      const U = this.ladderMount;
      if (this.pos.y < U.y + 0.02) this.vel.set(0, 3.25, 0);
      else {
        const W = U.x - this.pos.x,
          J = U.z - this.pos.z,
          j = Math.hypot(W, J),
          ne = Math.min(3.2, j / Math.max(e, 0.001));
        (this.vel.set(
          j > 1e-4 ? (W / j) * ne : 0,
          0,
          j > 1e-4 ? (J / j) * ne : 0,
        ),
          j < 0.32 &&
            this.hasFootSupport(i, this.pos.x, U.y, this.pos.z) &&
            ((this.ladderMount = null), (this.vel.y = -1)));
      }
      this.fallApex = this.pos.y;
    } else if (this.inWater) {
      const U = i.isWaterAt(this.pos.x, this.pos.y + 1.5, this.pos.z),
        W = i.isWaterAt(this.pos.x, this.pos.y + 0.9, this.pos.z);
      this.submerged = U ? 1 : W ? 0.72 : 0.4;
      const J = 27 * this.submerged - 21;
      ((this.vel.y += J * e),
        (this.vel.y *= Math.max(0, 1 - 3.2 * e)),
        !this.downed && n && t.action("jump")
          ? (this.vel.y = Math.min(this.vel.y + 34 * e, 4.2))
          : !this.downed &&
            n &&
            (t.action("crouch") || (t.action("sprint") && !this.sprinting)) &&
            (this.vel.y = Math.max(this.vel.y - 30 * e, -4.2)),
        (this.vel.y = Oe(this.vel.y, -5, 5)));
      const [j, ne, ge] = dW(
        i,
        Math.floor(this.pos.x),
        Math.floor(this.pos.y + 0.6),
        Math.floor(this.pos.z),
      );
      ((this.vel.x += j * 3.2 * e),
        (this.vel.z += ge * 3.2 * e),
        ne < 0 && (this.vel.y += ne * 2.2 * e));
    } else if (x) {
      const U = new k(
        r * h + o * Math.min(c, 0),
        0,
        l * h + a * Math.min(c, 0),
      );
      (U.lengthSq() > 1 && U.normalize(),
        (this.vel.x = U.x * 2.2),
        (this.vel.z = U.z * 2.2));
      const W = n && (c > 0 || t.action("jump"));
      if (
        (n && t.action("crouch")
          ? (this.vel.y = 0)
          : W
            ? (this.vel.y = 3.25)
            : n && t.action("sprint")
              ? (this.vel.y = -3.2)
              : (this.vel.y = Math.max(this.vel.y - 27 * e, -0.9)),
        W && !t.action("crouch") && U.lengthSq() === 0 && !T && A)
      ) {
        const J = A.by + 1.001,
          j = -Math.sin(this.yaw),
          ne = -Math.cos(this.yaw),
          ge = (he, Ie) => {
            const ve = A.bx + 0.5 + he,
              it = A.bz + 0.5 + Ie;
            return (
              i.boxFree(ve, J, it, this.w, this.h) &&
              this.hasFootSupport(i, ve, J, it)
            );
          },
          be = (he, Ie) =>
            i.boxFree(A.bx + 0.5 + he, J, A.bz + 0.5 + Ie, 0.3, this.h),
          oe = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
          ]
            .map(([he, Ie]) => ({
              dx: he,
              dz: Ie,
              score:
                (he * j + Ie * ne) / Math.hypot(he, Ie) - (he && Ie ? 0.3 : 0),
            }))
            .sort((he, Ie) => Ie.score - he.score)
            .filter(
              ({ dx: he, dz: Ie }) =>
                (!he || !Ie || be(he, 0) || be(0, Ie)) && ge(he, Ie),
            )
            .map(({ dx: he, dz: Ie }) => ({
              x: A.bx + 0.5 + he,
              z: A.bz + 0.5 + Ie,
            }))[0];
        oe && (this.ladderMount = { x: oe.x, y: J, z: oe.z, t: 0 });
      }
      this.fallApex = this.pos.y;
    } else {
      ((this.vel.y -= 27 * this.gravityScale * e),
        (this.vel.y = Math.max(this.vel.y, -56)),
        n &&
          t.action("jump") &&
          this.onGround &&
          !this.prone &&
          !this.crouching &&
          ((this.vel.y = (this.gravityScale < 0.5 ? 7.8 : 8.4) * Jt.jumpMul()),
          Jt.add("jump", 1),
          Jt.stat("jumps", 1)));
      const U =
        !this.downed && n && (t.mouseR || t.chuteHeld) && !this.onGround;
      if (
        ((this.parachute = U && (this.parachute || this.canDeployChute())),
        (this.flaring = this.parachute && n && t.action("back")),
        this.parachute)
      ) {
        const W = this.flaring ? -2.4 : -4;
        this.vel.y < W && (this.vel.y = Math.min(this.vel.y + 42 * e, W));
      }
    }
    (this.onGround || this.inWater) && (this.parachute = !1);
    const R = -this.vel.y,
      _ = this.onGround,
      C = this.crouching && _ && !this.flying && !this.inWater && !x,
      P = this.pos.x,
      O = this.pos.y,
      B = this.pos.z,
      H = i.collideMove(this.pos, this.vel, this.w, this.h, e);
    if (
      ((this.onGround = H.onGround),
      H.stepUp > 0 && (this.stepLag = Math.max(-1.1, this.stepLag - H.stepUp)),
      (this.stepLag *= Math.exp(-16 * e)),
      this.stepLag > -0.002 && (this.stepLag = 0),
      Y.autoJump &&
        n &&
        this.onGround &&
        H.hitHoriz &&
        u.lengthSq() > 0 &&
        !this.prone &&
        !this.crouching &&
        this.canStepUp(i, u) &&
        (this.vel.y = this.gravityScale < 0.5 ? 7.8 : 8.4),
      C && (this.pos.y < O - 0.02 || !this.hasFootSupport(i)))
    ) {
      const W = this.pos.x,
        J = this.pos.y,
        j = this.pos.z;
      ((this.pos.x = P),
        (this.pos.y = O),
        (this.pos.z = B),
        this.hasFootSupport(i)
          ? ((this.vel.x = 0),
            (this.vel.z = 0),
            (this.vel.y = 0),
            (this.onGround = !0))
          : ((this.pos.x = W), (this.pos.y = J), (this.pos.z = j)));
    }
    if (
      (!this.downed &&
        this.inWater &&
        H.hitHoriz &&
        u.lengthSq() > 0 &&
        (this.vel.y = Math.max(this.vel.y, 5.8)),
      this.onGround && !_ && !this.inWater)
    ) {
      const U = Math.max(0, this.fallApex - this.pos.y),
        W = 15,
        J = this.gravityScale < 0.5 ? 16 : 4;
      U > J && R > W && this.onFallDamage(Math.round((R - W) * 8), U);
    }
    this.onGround || this.inWater
      ? (this.fallApex = this.pos.y)
      : (this.fallApex = Math.max(this.fallApex, this.pos.y));
    const D = Math.hypot(this.pos.x - P, this.pos.z - B);
    if (!this.downed && D > 0 && D < 2) {
      Jt.stat("distance", D);
      const U = D / Math.max(1e-4, e);
      (this.sprinting && this.onGround && U > 4.5 && Jt.add("run", e),
        this.prone &&
          U > 0.6 &&
          Jt.add("crawl", e * (this.crawlingFast ? 1.2 : 1)),
        (this.prone || this.crouching) &&
          this.onGround &&
          U > 0.6 &&
          Jt.add("stealth", e));
    }
  }
}
