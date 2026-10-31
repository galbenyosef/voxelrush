// index-BeUlFSPp 191 — hud
// Lines 104317-104623 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Ioe {
  constructor(e, t) {
    ((this.scene = e), (this.send = t));
  }
  targetId = -1;
  lockT = 0;
  missiles = mo.missiles;
  flares = mo.flares;
  warnUntil = 0;
  warnAt = new k();
  warnDist = 0;
  audio = null;
  beepAt = 0;
  wasLocked = !1;
  launchedAt = 0;
  lockedId = -1;
  flareFx = [];
  flareTex = null;
  fwd = new k();
  to = new k();
  hud = {
    lock: null,
    missiles: mo.missiles,
    flares: mo.flares,
    warn: null,
    lead: null,
  };
  leadState = {
    target: new k(),
    pipper: new k(),
    dist: 0,
    time: 0,
    on: !1,
    inRange: !1,
  };
  leadDir = new k();
  muzzle = new k();
  bore = new k();
  tvel = new k();
  stores(e, t) {
    ((this.missiles = e), (this.flares = t));
  }
  warn(e, t, i) {
    ((this.warnUntil = performance.now() + 450),
      (this.warnDist = e),
      this.warnAt.set(t, 0, i));
  }
  update(e, t, i, n, o, a) {
    const r = performance.now(),
      l = Array.isArray(i) ? i : [...i];
    if ((this.updateFlares(e), !t || t.type !== L.FIGHTER_JET)) {
      ((this.targetId = -1),
        (this.lockT = 0),
        (this.lockedId = -1),
        (this.wasLocked = !1),
        (this.hud.lock = null),
        (this.hud.warn = null),
        (this.hud.lead = null));
      return;
    }
    (this.updateLead(t, l, n), this.fwd.set(0, 0, -1).applyQuaternion(t.quat));
    let c = null,
      h = mo.lockCone,
      d = 0;
    for (const f of l) {
      if (
        f === t ||
        f.hp <= 0 ||
        f.planet !== t.planet ||
        !(on(f.type) || f.type === L.HELI) ||
        !n(f)
      )
        continue;
      this.to.subVectors(f.pos, t.pos);
      const p = this.to.length();
      if (p > mo.lockRange || p < 40) continue;
      const m = this.fwd.angleTo(this.to);
      m < h && ((c = f), (h = m), (d = p));
    }
    !c || t.grounded
      ? ((this.targetId = -1), (this.lockT = 0))
      : c.id !== this.targetId
        ? ((this.targetId = c.id), (this.lockT = 0))
        : (this.lockT += e);
    const u = !!c && this.lockT >= mo.lockSeconds;
    if (
      ((this.lockedId = u && c ? c.id : -1),
      (this.hud.lock = c
        ? {
            pos: c.pos,
            progress: Math.min(1, this.lockT / mo.lockSeconds),
            locked: u,
            dist: d,
          }
        : null),
      u && !this.wasLocked && this.blip(1320, 0.035, 0.09),
      (this.wasLocked = u),
      o && this.tryLaunch(),
      a &&
        (this.send({ a: "flare" }),
        this.flares > 0 && this.blip(300, 0.04, 0.12)),
      (this.hud.missiles = this.missiles),
      (this.hud.flares = this.flares),
      r < this.warnUntil)
    ) {
      const f = Math.atan2(-this.fwd.x, -this.fwd.z),
        p = Math.atan2(-(this.warnAt.x - t.pos.x), -(this.warnAt.z - t.pos.z));
      let m = f - p;
      ((m = Math.atan2(Math.sin(m), Math.cos(m))),
        (this.hud.warn = { dist: this.warnDist, bearing: m }));
    } else this.hud.warn = null;
    if (this.hud.warn) {
      const f = Math.max(110, Math.min(420, this.warnDist / 3));
      r - this.beepAt > f && ((this.beepAt = r), this.blip(980, 0.04, 0.07));
    }
  }
  updateLead(e, t, i) {
    dT(e, 1, this.muzzle, this.bore);
    let n = null,
      o = 0.36;
    for (const l of t) {
      if (l === e || l.hp <= 0 || l.planet !== e.planet || !i(l)) continue;
      this.to.subVectors(l.pos, this.muzzle);
      const c = this.to.length();
      if (c > mo.gunRange * 1.25 || c < 15) continue;
      const h =
        this.bore.angleTo(this.to) + (l.id === this.lockedId ? -0.1 : 0);
      h < o && ((o = h), (n = l));
    }
    if (!n) {
      this.hud.lead = null;
      return;
    }
    const a = this.leadState;
    (this.tvel.copy(n.vel), this.to.copy(n.pos), (this.to.y += 1));
    const r = Loe(
      this.muzzle,
      e.vel,
      this.to,
      this.tvel,
      mo.roundSpeed,
      a.pipper,
    );
    if (!r) {
      this.hud.lead = null;
      return;
    }
    ((a.target.copy(n.pos).y += 1),
      (a.dist = r.dist),
      (a.time = r.time),
      this.leadDir.subVectors(a.pipper, this.muzzle).normalize(),
      (a.on =
        this.bore.angleTo(this.leadDir) <
        Math.max(0.012, 6 / Math.max(1, r.dist))),
      (a.inRange = r.dist <= mo.gunRange),
      (this.hud.lead = a));
  }
  assist(e) {
    const t = this.hud.lead;
    if (!t || !t.inRange) return;
    e.angleTo(this.leadDir) < 0.02 && e.copy(this.leadDir);
  }
  tryLaunch() {
    const e = performance.now();
    return this.lockedId < 0 || this.missiles <= 0
      ? !1
      : (e - this.launchedAt < mo.missileInterval * 1e3 ||
          ((this.launchedAt = e),
          this.send({ a: "msl", v: this.lockedId }),
          (this.lockT = mo.lockSeconds * 0.4),
          this.blip(640, 0.05, 0.16)),
        !0);
  }
  flaresFrom(e) {
    this.flareTex ??= (() => {
      const n = document.createElement("canvas");
      n.width = n.height = 32;
      const o = n.getContext("2d"),
        a = o.createRadialGradient(16, 16, 0, 16, 16, 16);
      return (
        a.addColorStop(0, "#ffffff"),
        a.addColorStop(0.25, "#fff2b8"),
        a.addColorStop(0.6, "#ff9a3c88"),
        a.addColorStop(1, "#ff6a0000"),
        (o.fillStyle = a),
        o.fillRect(0, 0, 32, 32),
        new Si(n)
      );
    })();
    const t = new k(0, 0, 1).applyQuaternion(e.quat),
      i = new k(1, 0, 0).applyQuaternion(e.quat);
    for (let n = 0; n < 8; n++) {
      const o =
        this.flareFx.length > 64
          ? this.flareFx.shift().sprite
          : new Ws(
              new hn({
                map: this.flareTex,
                blending: rs,
                depthWrite: !1,
                fog: !1,
              }),
            );
      (o.scale.setScalar(3.2),
        (o.position.copy(e.pos).addScaledVector(t, 5).y += 1));
      const a = (n % 2 ? 1 : -1) * (0.4 + (n >> 1) * 0.25),
        r = e.vel
          .clone()
          .multiplyScalar(0.55)
          .addScaledVector(i, a * 22)
          .addScaledVector(t, 12)
          .add(new k(0, -6 - n, 0));
      ((o.material.opacity = 1),
        this.scene.add(o),
        this.flareFx.push({
          sprite: o,
          vel: r,
          life: 3.2 + Math.random() * 0.8,
        }));
    }
  }
  updateFlares(e) {
    for (let t = this.flareFx.length - 1; t >= 0; t--) {
      const i = this.flareFx[t];
      ((i.life -= e),
        i.vel.multiplyScalar(Math.exp(-e * 0.9)),
        (i.vel.y -= 9 * e),
        i.sprite.position.addScaledVector(i.vel, e),
        (i.sprite.material.opacity = Math.min(1, i.life / 1.2)),
        i.life <= 0 &&
          (this.scene.remove(i.sprite),
          i.sprite.material.dispose(),
          this.flareFx.splice(t, 1)));
    }
  }
  ctx() {
    try {
      return (
        (this.audio ??= new AudioContext()),
        this.audio.state === "suspended" && this.audio.resume(),
        this.audio
      );
    } catch {
      return null;
    }
  }
  blip(e, t, i) {
    const n = this.ctx();
    if (!n) return;
    const o = n.createOscillator(),
      a = n.createGain();
    ((o.type = "sine"),
      (o.frequency.value = e),
      a.gain.setValueAtTime(t, n.currentTime),
      a.gain.exponentialRampToValueAtTime(1e-4, n.currentTime + i),
      o.connect(a).connect(n.destination),
      o.start(),
      o.stop(n.currentTime + i));
  }
  dispose() {
    for (const e of this.flareFx)
      (this.scene.remove(e.sprite), e.sprite.material.dispose());
    this.flareFx = [];
  }
}
const Jw = 6.5,
  Poe = 260,
  Ooe = 4,
  Noe = 0.06,
  Kp = 24e3,
  Yp = 32,
  Doe = `
  attribute vec4 smoke;      // side (-1..1), distance along the trail, age (0..1), the trail's seed
  attribute vec4 tint;       // lit colour, opacity
  varying vec4 vSmoke;
  varying vec4 vTint;
  void main() {
    vSmoke = smoke; vTint = tint;
    gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0);
  }
`,
  Hoe = `
  uniform float uTime;
  varying vec4 vSmoke;
  varying vec4 vTint;
  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
  }
  void main() {
    float side = vSmoke.x, along = vSmoke.y, age = vSmoke.z, seed = vSmoke.w;
    // billows: two octaves of noise drifting through the band, coarser as the smoke spreads
    vec2 q = vec2(along * mix(0.22, 0.06, age) + seed, side * 1.7 + uTime * 0.35);
    float n = noise(q) * 0.55 + noise(q * 2.3 + 17.0) * 0.3 + noise(q * 5.1 - 4.0) * 0.15;
    // soft round edges, eaten into by the noise — a little from the start (a fresh trail is a
    // twisting rope of smoke, not a beam), more as it ages
    float edge = 1.0 - abs(side);
    float body = smoothstep(0.0, 0.7 + 0.25 * age, edge + (n - 0.5) * (0.6 + 0.8 * age));
    float a = vTint.a * body * mix(0.62 + 0.55 * n, 0.4 + 0.95 * n, age);
    if (a < 0.004) discard;
    // the billows' own shade: a little darker in their hollows
    gl_FragColor = vec4(vTint.rgb * (0.86 + 0.24 * n), a);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;
