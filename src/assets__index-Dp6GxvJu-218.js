// assets__index-Dp6GxvJu 218 — pos
// Lines 121071-121564 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
const Zg = class Zg {
  constructor() {
    w(this, "pos", new k());
    w(this, "vel", new k());
    w(this, "yaw", 0);
    w(this, "pitch", 0);
    w(this, "onGround", !1);
    w(this, "flying", !1);
    w(this, "hp", 100);
    w(this, "maxHp", Vf);
    w(this, "alive", !0);
    w(this, "downed", !1);
    w(this, "inWater", !1);
    w(this, "submerged", 0);
    w(this, "splashImpact", 0);
    w(this, "sprinting", !1);
    w(this, "crawlingFast", !1);
    w(this, "crouching", !1);
    w(this, "prone", !1);
    w(this, "flaring", !1);
    w(this, "seated", !1);
    w(this, "parachute", !1);
    w(this, "gravityScale", 1);
    w(this, "w", 0.6);
    w(this, "eyeSmooth", 1.62);
    w(this, "stepLag", 0);
    w(this, "ladderMount", null);
    w(this, "mountRise", 0);
    w(this, "mountSpeed", 1);
    w(this, "fallApex", 0);
    w(this, "blastSpeedAllowance", 0);
    w(this, "onFallDamage", () => {});
    w(this, "stepProbe", new k());
  }
  get h() {
    return this.seated ? 1.25 : this.prone ? 0.6 : this.crouching ? 1.35 : 1.8;
  }
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
  canDeployChute() {
    return (
      !this.onGround &&
      this.vel.y < -8 &&
      this.fallApex - this.pos.y >= Zg.CHUTE_MIN_FALL
    );
  }
  look(e, t, i) {
    ((this.yaw -= e * 0.0022 * i),
      (this.pitch = Ne(this.pitch - t * 0.0022 * i, -1.55, 1.55)));
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
    for (const [i, s] of [
      [-t, -t],
      [t, -t],
      [-t, t],
      [t, t],
    ])
      for (let o = 0.7; o <= 1.8; o += 0.5)
        if (e.isSolidAt(this.pos.x + i, this.pos.y + o, this.pos.z + s))
          return !1;
    return !0;
  }
  hasFootSupport(e, t = this.pos.x, i = this.pos.y, s = this.pos.z) {
    const o = this.w / 2 - 0.05,
      a = i - 0.05;
    for (const [r, l] of [
      [-o, -o],
      [o, -o],
      [-o, o],
      [o, o],
      [0, 0],
    ])
      if (e.isSolidAt(t + r, a, s + l)) return !0;
    return !1;
  }
  canStepUp(e, t) {
    const i = this.stepProbe.set(t.x, 0, t.z);
    if (i.lengthSq() < 1e-6) return !1;
    i.normalize();
    const s = this.w / 2 + 0.35,
      o = this.pos.x + i.x * s,
      a = this.pos.z + i.z * s;
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
  update(e, t, i, s) {
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
      (this.parachute = !1),
      (this.crouching = !1),
      (this.mountRise = 0),
      (this.blastSpeedAllowance = 0)),
      (this.blastSpeedAllowance *= Math.exp(-3.8 * e)),
      !this.downed &&
      s &&
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
          s &&
          this.prone &&
          t.actionPressed("crouch") &&
          this.canStand(i) &&
          (this.prone = !1),
      this.prone || this.flying || this.inWater || !s
        ? (this.crouching = !1)
        : (this.crouching = t.action("crouch")),
      (this.eyeSmooth += (this.eye - this.eyeSmooth) * Math.min(1, 12 * e)));
    const o = -Math.sin(this.yaw),
      a = -Math.cos(this.yaw),
      r = Math.cos(this.yaw),
      l = -Math.sin(this.yaw),
      c = s ? (t.action("forward") ? 1 : 0) - (t.action("back") ? 1 : 0) : 0,
      h = s ? (t.action("right") ? 1 : 0) - (t.action("left") ? 1 : 0) : 0;
    ((this.crawlingFast =
      s && this.prone && t.action("sprint") && (c !== 0 || h !== 0)),
      (this.sprinting =
        s && t.action("sprint") && c > 0 && !this.prone && !this.crouching));
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
      const O = this.sprinting ? 26 : 13,
        F = new k(
          (o * c + r * h) * O,
          ((s && t.action("jump") ? 1 : 0) -
            (s && t.action("crouch") ? 1 : 0)) *
            O *
            0.8,
          (a * c + l * h) * O,
        );
      this.vel.lerp(F, 1 - Math.exp(-9 * e));
      const X = i.collideMove(this.pos, this.vel, this.w, this.h, e);
      ((this.onGround = X.onGround), (this.fallApex = this.pos.y));
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
      y =
        (this.downed
          ? PJ * (this.crawlingFast ? $_ : 1)
          : this.prone
            ? 1.3 * (this.crawlingFast ? $_ : 1) * Xt.crawlMul()
            : this.crouching
              ? 1.9
              : this.inWater
                ? m
                : this.sprinting
                  ? 6.6 * Xt.runMul()
                  : 4.4 * Xt.walkMul()) *
        (f ? 0.34 : 1) *
        (p && !this.flying ? 0.22 : 1) *
        (this.mountRise > 0 ? this.mountSpeed : 1),
      g = this.parachute && !this.onGround ? (this.flaring ? 2.6 : 6.4) : 0,
      b = this.inWater ? 22 : this.onGround ? 70 : 20;
    ((this.vel.x += u.x * b * e), (this.vel.z += u.z * b * e));
    const S = Math.hypot(this.vel.x, this.vel.z),
      M = (g || y) + this.blastSpeedAllowance;
    if (
      (S > M && ((this.vel.x *= M / S), (this.vel.z *= M / S)),
      u.lengthSq() === 0)
    ) {
      const O = Math.max(
        0,
        1 - (this.onGround ? 12 : this.inWater ? 5 : 1.2) * e,
      );
      ((this.vel.x *= O), (this.vel.z *= O));
    }
    const x = (O) => {
        const F = Math.floor(this.pos.x),
          X = Math.floor(O),
          Q = Math.floor(this.pos.z);
        if (i.getBlock(F, X, Q) !== v.LADDER) return null;
        const ee = i.getMeta(F, X, Q) & 7,
          se = this.pos.x - F,
          oe = this.pos.z - Q;
        return Math.abs(
          ee === 1
            ? se - 0.06
            : ee === 2
              ? se - 0.94
              : ee === 3
                ? oe - 0.06
                : oe - 0.94,
        ) <= 0.46
          ? { meta: ee, bx: F, by: X, bz: Q }
          : null;
      },
      T = x(this.pos.y + 0.05),
      A = x(this.pos.y + 1.4),
      _ = !this.downed && !!(T || A);
    if (this.ladderMount) {
      const O = this.ladderMount;
      ((O.t += e),
        (!(
          s &&
          !this.downed &&
          (c > 0 || t.action("jump")) &&
          !t.action("crouch") &&
          h === 0
        ) ||
          O.t > 1.4 ||
          this.inWater ||
          Math.hypot(O.x - this.pos.x, O.z - this.pos.z) > 1.6) &&
          (this.ladderMount = null));
    }
    if (this.ladderMount) {
      const O = this.ladderMount;
      if (this.pos.y < O.y + 0.02) this.vel.set(0, 3.25, 0);
      else {
        const F = O.x - this.pos.x,
          X = O.z - this.pos.z,
          Q = Math.hypot(F, X),
          ee = Math.min(3.2, Q / Math.max(e, 0.001));
        (this.vel.set(
          Q > 1e-4 ? (F / Q) * ee : 0,
          0,
          Q > 1e-4 ? (X / Q) * ee : 0,
        ),
          Q < 0.32 &&
            this.hasFootSupport(i, this.pos.x, O.y, this.pos.z) &&
            ((this.ladderMount = null), (this.vel.y = -1)));
      }
      this.fallApex = this.pos.y;
    } else if (this.inWater) {
      const O = i.isWaterAt(this.pos.x, this.pos.y + 1.5, this.pos.z),
        F = i.isWaterAt(this.pos.x, this.pos.y + 0.9, this.pos.z);
      this.submerged = O ? 1 : F ? 0.72 : 0.4;
      const X = 27 * this.submerged - 21;
      ((this.vel.y += X * e),
        (this.vel.y *= Math.max(0, 1 - 3.2 * e)),
        !this.downed && s && t.action("jump")
          ? (this.vel.y = Math.min(this.vel.y + 34 * e, 4.2))
          : !this.downed &&
            s &&
            (t.action("crouch") || (t.action("sprint") && !this.sprinting)) &&
            (this.vel.y = Math.max(this.vel.y - 30 * e, -4.2)),
        (this.vel.y = Ne(this.vel.y, -5, 5)));
      const [Q, ee, se] = Az(
        i,
        Math.floor(this.pos.x),
        Math.floor(this.pos.y + 0.6),
        Math.floor(this.pos.z),
      );
      ((this.vel.x += Q * 3.2 * e),
        (this.vel.z += se * 3.2 * e),
        ee < 0 && (this.vel.y += ee * 2.2 * e));
    } else if (_) {
      const O = new k(
        r * h + o * Math.min(c, 0),
        0,
        l * h + a * Math.min(c, 0),
      );
      (O.lengthSq() > 1 && O.normalize(),
        (this.vel.x = O.x * 2.2),
        (this.vel.z = O.z * 2.2));
      const F = s && (c > 0 || t.action("jump"));
      if (
        (s && t.action("crouch")
          ? (this.vel.y = 0)
          : F
            ? (this.vel.y = 3.25)
            : s && t.action("sprint")
              ? (this.vel.y = -3.2)
              : (this.vel.y = Math.max(this.vel.y - 27 * e, -0.9)),
        F && !t.action("crouch") && O.lengthSq() === 0 && !A && T)
      ) {
        const X = T.by + 1.001,
          Q = -Math.sin(this.yaw),
          ee = -Math.cos(this.yaw),
          se = (re, Ce) => {
            const Re = T.bx + 0.5 + re,
              We = T.bz + 0.5 + Ce;
            return (
              i.boxFree(Re, X, We, this.w, this.h) &&
              this.hasFootSupport(i, Re, X, We)
            );
          },
          oe = (re, Ce) =>
            i.boxFree(T.bx + 0.5 + re, X, T.bz + 0.5 + Ce, 0.3, this.h),
          J = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
          ]
            .map(([re, Ce]) => ({
              dx: re,
              dz: Ce,
              score:
                (re * Q + Ce * ee) / Math.hypot(re, Ce) - (re && Ce ? 0.3 : 0),
            }))
            .sort((re, Ce) => Ce.score - re.score)
            .filter(
              ({ dx: re, dz: Ce }) =>
                (!re || !Ce || oe(re, 0) || oe(0, Ce)) && se(re, Ce),
            )
            .map(({ dx: re, dz: Ce }) => ({
              x: T.bx + 0.5 + re,
              z: T.bz + 0.5 + Ce,
            }))[0];
        J && (this.ladderMount = { x: J.x, y: X, z: J.z, t: 0 });
      }
      this.fallApex = this.pos.y;
    } else {
      ((this.vel.y -= 27 * this.gravityScale * e),
        (this.vel.y = Math.max(this.vel.y, -56)),
        s &&
          t.action("jump") &&
          this.onGround &&
          !this.prone &&
          !this.crouching &&
          ((this.vel.y = (this.gravityScale < 0.5 ? 7.8 : 8.4) * Xt.jumpMul()),
          Xt.add("jump", 1),
          Xt.stat("jumps", 1)));
      const O =
        !this.downed && s && (t.mouseR || t.chuteHeld) && !this.onGround;
      if (
        ((this.parachute = O && (this.parachute || this.canDeployChute())),
        (this.flaring = this.parachute && s && t.action("back")),
        this.parachute)
      ) {
        const F = this.flaring ? -2.4 : -4;
        this.vel.y < F && (this.vel.y = Math.min(this.vel.y + 42 * e, F));
      }
    }
    (this.onGround || this.inWater) && (this.parachute = !1);
    const C = -this.vel.y,
      R = this.onGround,
      L = this.crouching && R && !this.flying && !this.inWater && !_,
      N = this.pos.x,
      D = this.pos.y,
      H = this.pos.z,
      G = i.collideMove(this.pos, this.vel, this.w, this.h, e);
    if (
      ((this.onGround = G.onGround),
      G.stepUp > 0 && (this.stepLag = Math.max(-1.1, this.stepLag - G.stepUp)),
      (this.stepLag *= Math.exp(-16 * e)),
      this.stepLag > -0.002 && (this.stepLag = 0),
      z.autoJump &&
        s &&
        this.onGround &&
        G.hitHoriz &&
        u.lengthSq() > 0 &&
        !this.prone &&
        !this.crouching &&
        this.canStepUp(i, u) &&
        (this.vel.y = this.gravityScale < 0.5 ? 7.8 : 8.4),
      L && (this.pos.y < D - 0.02 || !this.hasFootSupport(i)))
    ) {
      const F = this.pos.x,
        X = this.pos.y,
        Q = this.pos.z;
      ((this.pos.x = N),
        (this.pos.y = D),
        (this.pos.z = H),
        this.hasFootSupport(i)
          ? ((this.vel.x = 0),
            (this.vel.z = 0),
            (this.vel.y = 0),
            (this.onGround = !0))
          : ((this.pos.x = F), (this.pos.y = X), (this.pos.z = Q)));
    }
    if (
      (!this.downed &&
        this.inWater &&
        G.hitHoriz &&
        u.lengthSq() > 0 &&
        (this.vel.y = Math.max(this.vel.y, 5.8)),
      this.onGround && !R && !this.inWater)
    ) {
      const O = Math.max(0, this.fallApex - this.pos.y),
        F = 15,
        X = this.gravityScale < 0.5 ? 16 : 4;
      O > X && C > F && this.onFallDamage(Math.round((C - F) * 8), O);
    }
    this.onGround || this.inWater
      ? (this.fallApex = this.pos.y)
      : (this.fallApex = Math.max(this.fallApex, this.pos.y));
    const I = Math.hypot(this.pos.x - N, this.pos.z - H);
    if (!this.downed && I > 0 && I < 2) {
      Xt.stat("distance", I);
      const O = I / Math.max(1e-4, e);
      (this.sprinting && this.onGround && O > 4.5 && Xt.add("run", e),
        this.prone &&
          O > 0.6 &&
          Xt.add("crawl", e * (this.crawlingFast ? 1.2 : 1)),
        (this.prone || this.crouching) &&
          this.onGround &&
          O > 0.6 &&
          Xt.add("stealth", e));
    }
  }
};
