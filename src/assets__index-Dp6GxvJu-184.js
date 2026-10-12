// assets__index-Dp6GxvJu 184 — copy
// Lines 103293-103511 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class dee {
  constructor(e, t) {
    w(this, "eggs", new Map());
    w(this, "geometry", new mn(0.09, 10, 8));
    w(this, "material", new gi({ color: 16773074 }));
    ((this.scene = e), (this.impact = t));
  }
  packet(e, t) {
    const i = e.u8(),
      s = e.u32(),
      o = e.u8(),
      a = new k(e.f32(), e.f32(), e.f32());
    let r = this.eggs.get(s);
    if (i) {
      (r && (r.mesh.removeFromParent(), this.eggs.delete(s)),
        o === t && this.impact(a));
      return;
    }
    if (!r) {
      const l = new le(this.geometry, this.material);
      (l.scale.set(0.85, 1.25, 0.85),
        l.position.copy(a),
        this.scene.add(l),
        (r = { mesh: l, target: a, planet: o, at: performance.now() }),
        this.eggs.set(s, r));
    }
    (r.target.copy(a), (r.at = performance.now()), (r.mesh.visible = o === t));
  }
  update(e, t) {
    for (const [i, s] of this.eggs) {
      if (performance.now() - s.at > 1500) {
        (s.mesh.removeFromParent(), this.eggs.delete(i));
        continue;
      }
      ((s.mesh.visible = s.planet === t),
        s.mesh.position.lerp(s.target, 1 - Math.exp(-35 * e)),
        (s.mesh.rotation.x += e * 8));
    }
  }
  clear() {
    for (const e of this.eggs.values()) e.mesh.removeFromParent();
    this.eggs.clear();
  }
}
const uee = 30,
  Q_ = 0.42,
  fee = 3.3,
  pee = 1,
  Pb = 21,
  mee = 2.4,
  gee = 24,
  J_ = 0.26,
  yee = 0.45,
  vee = 15,
  bee = 4,
  K2 = { FLYING: 0, BROKEN: 2, HIT: 3 };
function wee(n) {
  return { x: n.x * Pb, y: n.y * Pb + mee, z: n.z * Pb };
}
let HM = null;
u4(() => {
  HM = null;
});
function Mee() {
  var e;
  HM ?? (HM = R0(E.COMBAT_KNIFE).group);
  const n = HM.clone();
  return (
    n.traverse((t) => {
      t.frustumCulled = !0;
    }),
    (e = n.children[0]) == null || e.rotation.set(0, 0, 0),
    n.scale.setScalar(1.05),
    n
  );
}
const See = new k(0, 0, -1);
class Eee {
  constructor(e, t, i) {
    w(this, "knives", []);
    w(this, "q", new Jt());
    w(this, "spinQ", new Jt());
    w(this, "axis", new k());
    w(this, "dir", new k());
    w(this, "next", new k());
    w(this, "aim", new k());
    ((this.scene = e), (this.world = t), (this.fx = i));
  }
  add(e) {
    const t = Mee();
    (t.position.copy(e.pos), this.scene.add(t));
    const i = {
      ...e,
      model: t,
      spin: 0,
      age: 0,
      stuck: !1,
      serverVel: e.vel.clone(),
      serverAt: performance.now(),
    };
    return (this.knives.push(i), i);
  }
  predict(e, t, i, s, o) {
    const a = wee(o);
    this.add({
      id: 0,
      owner: e,
      token: t,
      planet: i,
      pos: s.clone(),
      vel: new k(a.x, a.y, a.z),
      server: null,
    });
  }
  packet(e) {
    const t = e.u8(),
      i = e.u32(),
      s = e.u16(),
      o = e.u16(),
      a = e.u8(),
      r = new k(e.f32(), e.f32(), e.f32()),
      l = new k(e.f32(), e.f32(), e.f32());
    let c =
      this.knives.find((h) => h.id === i && i !== 0) ??
      this.knives.find((h) => h.id === 0 && h.owner === s && h.token === o);
    if (t !== K2.FLYING) {
      const h = e.remaining() >= 12 ? new k(e.f32(), e.f32(), e.f32()) : r;
      (c && this.remove(c), this.fx.impact(h, t));
      return;
    }
    if (
      (c ||
        (c = this.add({
          id: i,
          owner: s,
          token: o,
          planet: a,
          pos: r.clone(),
          vel: l.clone(),
          server: null,
        })),
      e.remaining() >= 2)
    ) {
      const h = JSON.parse(e.str());
      Ba(c.model, h.cosmetic, h.holder);
    }
    ((c.id = i),
      (c.server = r),
      c.serverVel.copy(l),
      (c.serverAt = performance.now()));
  }
  remove(e) {
    (this.scene.remove(e.model),
      Zl(e.model),
      this.knives.splice(this.knives.indexOf(e), 1));
  }
  update(e, t) {
    for (const i of [...this.knives]) {
      if (
        ((i.age += e),
        i.age > bee + 1.5 || (i.id === 0 && i.age > 1.2 && !i.server))
      ) {
        this.remove(i);
        continue;
      }
      if (((i.model.visible = i.planet === t), !i.stuck)) {
        const s = gee * (i.planet === Si.MOON ? wp : 1);
        ((i.vel.y -= s * e), this.next.copy(i.pos).addScaledVector(i.vel, e));
        const o = this.next.distanceTo(i.pos),
          a =
            o > 1e-5
              ? this.world.raycast(i.pos, this.dir.copy(i.vel).normalize(), o)
              : null;
        if (
          (a && this.world.isSolidAt(a.bx, a.by, a.bz)
            ? (i.pos.copy(a.point).addScaledVector(this.dir, -0.04),
              (i.stuck = !0))
            : i.pos.copy(this.next),
          i.server)
        ) {
          const r = Math.min(0.25, (performance.now() - i.serverAt) / 1e3);
          (this.aim.copy(i.server).addScaledVector(i.serverVel, r),
            (this.aim.y -= 0.5 * s * r * r),
            i.pos.lerp(this.aim, 1 - Math.exp(-10 * e)),
            i.vel.lerp(i.serverVel, 1 - Math.exp(-6 * e)));
        }
        i.spin += vee * e;
      }
      (i.model.position.copy(i.pos),
        this.dir.copy(i.vel),
        this.dir.lengthSq() > 1e-6 &&
          this.q.setFromUnitVectors(See, this.dir.normalize()),
        this.axis.set(1, 0, 0),
        this.spinQ.setFromAxisAngle(this.axis, -i.spin),
        i.model.quaternion.copy(this.q).multiply(this.spinQ));
    }
  }
  clear() {
    for (const e of [...this.knives]) this.remove(e);
  }
}
const eR = (n) => n === E.DYNAMITE_SMALL || n === E.DYNAMITE_BUNDLE;
let t2 = null;
function xee() {
  if (t2) return t2;
  const n = document.createElement("canvas");
  n.width = n.height = 64;
  const e = n.getContext("2d"),
    t = e.createRadialGradient(32, 32, 0, 32, 32, 32);
  return (
    t.addColorStop(0, "rgba(255,255,255,1)"),
    t.addColorStop(0.25, "rgba(255,255,255,.8)"),
    t.addColorStop(1, "rgba(255,255,255,0)"),
    (e.fillStyle = t),
    e.fillRect(0, 0, 64, 64),
    (t2 = new bi(n)),
    t2
  );
}
