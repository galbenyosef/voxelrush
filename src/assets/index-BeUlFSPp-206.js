// index-BeUlFSPp 206 — math
// Lines 110013-110264 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class WT {
  constructor(e) {
    this.click = e;
  }
  wait = 1;
  rate = 0;
  static rateAt(e, t, i) {
    let n = 0;
    for (const o of e) {
      const a = Math.hypot(t - o.x, i - o.z);
      a < o.r && (n += o.rate * Math.pow(1 - a / o.r, 1.4));
    }
    return n;
  }
  update(e, t, i, n, o) {
    const a = o && t ? WT.rateAt(t, i, n) : 0;
    if (a < 0.05) {
      this.rate = 0;
      return;
    }
    (Math.abs(a - this.rate) > this.rate * 0.25 + 0.05 &&
      ((this.rate = a), (this.wait = this.draw())),
      (this.wait -= e));
    for (let r = 0; this.wait <= 0 && r < 3; r++)
      (this.click(
        Math.min(1, 1.6 / Math.sqrt(1 + a)) * (0.75 + Math.random() * 0.25),
      ),
        (this.wait += this.draw()));
    this.wait < 0 && (this.wait = this.draw());
  }
  draw() {
    return -Math.log(1 - Math.random()) / Math.max(0.05, this.rate);
  }
}
class Sae {
  constructor(e, t) {
    ((this.scene = e), (this.impact = t));
  }
  eggs = new Map();
  geometry = new ws(0.09, 10, 8);
  material = new Pi({ color: 16773074 });
  packet(e, t) {
    const i = e.u8(),
      n = e.u32(),
      o = e.u8(),
      a = new k(e.f32(), e.f32(), e.f32());
    let r = this.eggs.get(n);
    if (i) {
      (r && (r.mesh.removeFromParent(), this.eggs.delete(n)),
        o === t && this.impact(a));
      return;
    }
    if (!r) {
      const l = new Q(this.geometry, this.material);
      (l.scale.set(0.85, 1.25, 0.85),
        l.position.copy(a),
        this.scene.add(l),
        (r = { mesh: l, target: a, planet: o, at: performance.now() }),
        this.eggs.set(n, r));
    }
    (r.target.copy(a), (r.at = performance.now()), (r.mesh.visible = o === t));
  }
  update(e, t) {
    for (const [i, n] of this.eggs) {
      if (performance.now() - n.at > 1500) {
        (n.mesh.removeFromParent(), this.eggs.delete(i));
        continue;
      }
      ((n.mesh.visible = n.planet === t),
        n.mesh.position.lerp(n.target, 1 - Math.exp(-35 * e)),
        (n.mesh.rotation.x += e * 8));
    }
  }
  clear() {
    for (const e of this.eggs.values()) e.mesh.removeFromParent();
    this.eggs.clear();
  }
}
const Eae = 30,
  xC = 0.42,
  Aae = 3.3,
  Tae = 1,
  iM = 21,
  xae = 2.4,
  _ae = 24,
  _C = 0.26,
  Rae = 0.45,
  kae = 15,
  Cae = 4,
  Wy = { FLYING: 0, BROKEN: 2, HIT: 3 };
function Lae(s) {
  return { x: s.x * iM, y: s.y * iM + xae, z: s.z * iM };
}
let EE = null;
oT(() => {
  EE = null;
});
function Iae() {
  EE ??= Pd(w.COMBAT_KNIFE).group;
  const s = EE.clone();
  return (
    s.traverse((e) => {
      e.frustumCulled = !0;
    }),
    s.children[0]?.rotation.set(0, 0, 0),
    s.scale.setScalar(1.05),
    s
  );
}
const Pae = new k(0, 0, -1);
class Oae {
  constructor(e, t, i) {
    ((this.scene = e), (this.world = t), (this.fx = i));
  }
  knives = [];
  q = new hi();
  spinQ = new hi();
  axis = new k();
  dir = new k();
  next = new k();
  aim = new k();
  add(e) {
    const t = Iae();
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
  predict(e, t, i, n, o) {
    const a = Lae(o);
    this.add({
      id: 0,
      owner: e,
      token: t,
      planet: i,
      pos: n.clone(),
      vel: new k(a.x, a.y, a.z),
      server: null,
    });
  }
  packet(e) {
    const t = e.u8(),
      i = e.u32(),
      n = e.u16(),
      o = e.u16(),
      a = e.u8(),
      r = new k(e.f32(), e.f32(), e.f32()),
      l = new k(e.f32(), e.f32(), e.f32());
    let c =
      this.knives.find((h) => h.id === i && i !== 0) ??
      this.knives.find((h) => h.id === 0 && h.owner === n && h.token === o);
    if (t !== Wy.FLYING) {
      const h = e.remaining() >= 12 ? new k(e.f32(), e.f32(), e.f32()) : r;
      (c && this.remove(c), this.fx.impact(h, t));
      return;
    }
    if (
      (c ||
        (c = this.add({
          id: i,
          owner: n,
          token: o,
          planet: a,
          pos: r.clone(),
          vel: l.clone(),
          server: null,
        })),
      e.remaining() >= 2)
    ) {
      const h = JSON.parse(e.str());
      qa(c.model, h.cosmetic, h.holder);
    }
    ((c.id = i),
      (c.server = r),
      c.serverVel.copy(l),
      (c.serverAt = performance.now()));
  }
  remove(e) {
    (this.scene.remove(e.model),
      Gc(e.model),
      this.knives.splice(this.knives.indexOf(e), 1));
  }
  update(e, t) {
    for (const i of [...this.knives]) {
      if (
        ((i.age += e),
        i.age > Cae + 1.5 || (i.id === 0 && i.age > 1.2 && !i.server))
      ) {
        this.remove(i);
        continue;
      }
      if (((i.model.visible = i.planet === t), !i.stuck)) {
        const n = _ae * (i.planet === Ci.MOON ? am : 1);
        ((i.vel.y -= n * e), this.next.copy(i.pos).addScaledVector(i.vel, e));
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
            (this.aim.y -= 0.5 * n * r * r),
            i.pos.lerp(this.aim, 1 - Math.exp(-10 * e)),
            i.vel.lerp(i.serverVel, 1 - Math.exp(-6 * e)));
        }
        i.spin += kae * e;
      }
      (i.model.position.copy(i.pos),
        this.dir.copy(i.vel),
        this.dir.lengthSq() > 1e-6 &&
          this.q.setFromUnitVectors(Pae, this.dir.normalize()),
        this.axis.set(1, 0, 0),
        this.spinQ.setFromAxisAngle(this.axis, -i.spin),
        i.model.quaternion.copy(this.q).multiply(this.spinQ));
    }
  }
  clear() {
    for (const e of [...this.knives]) this.remove(e);
  }
}
const RC = (s) => s === w.DYNAMITE_SMALL || s === w.DYNAMITE_BUNDLE;
let Gg = null;
function Nae() {
  if (Gg) return Gg;
  const s = document.createElement("canvas");
  s.width = s.height = 64;
  const e = s.getContext("2d"),
    t = e.createRadialGradient(32, 32, 0, 32, 32, 32);
  return (
    t.addColorStop(0, "rgba(255,255,255,1)"),
    t.addColorStop(0.25, "rgba(255,255,255,.8)"),
    t.addColorStop(1, "rgba(255,255,255,0)"),
    (e.fillStyle = t),
    e.fillRect(0, 0, 64, 64),
    (Gg = new Si(s)),
    Gg
  );
}
