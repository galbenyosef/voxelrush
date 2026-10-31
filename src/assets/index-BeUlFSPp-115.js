// index-BeUlFSPp 115 — math
// Lines 65115-65430 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class aJ {
  constructor(e) {
    ((this.scene = e), this.setBudget(3));
  }
  beams = new Set();
  lights = [];
  candidates = [];
  direction = new k();
  setBudget(e) {
    for (e = Math.max(1, e); this.lights.length > e;) {
      const t = this.lights.pop();
      (t.removeFromParent(), t.target.removeFromParent(), t.dispose());
    }
    for (; this.lights.length < e;) {
      const t = new SG(16772810, 0, 46, Math.PI / 8, 0.8, 1.6);
      ((t.name = "pooled-lamp"),
        (t.castShadow = !1),
        (t.target.position.z = -1),
        this.scene.add(t, t.target),
        this.lights.push(t));
    }
  }
  probe(e, t, i) {
    let n = 0;
    for (const o of this.lights) {
      if (o.intensity <= 0) continue;
      const a = e - o.position.x,
        r = t - o.position.y,
        l = i - o.position.z,
        c = Math.hypot(a, r, l);
      if (c < 0.01 || c >= o.distance) continue;
      this.direction.copy(o.target.position).sub(o.position).normalize();
      const h =
          (a * this.direction.x + r * this.direction.y + l * this.direction.z) /
          c,
        d = Math.cos(o.angle),
        u = Math.cos(o.angle * (1 - o.penumbra)),
        f = Math.max(0, Math.min(1, (h - d) / Math.max(0.001, u - d))),
        p =
          Math.max(0, 1 - (c / o.distance) ** 4) ** 2 /
          Math.max(1, c ** o.decay);
      n += o.intensity * p * f * f * (3 - 2 * f);
    }
    return Math.min(1, n);
  }
  update(e, t) {
    const i = performance.now();
    this.candidates.length = 0;
    for (const n of this.beams) {
      if (!n.active) continue;
      let o = n.root;
      for (; o && o !== this.scene && o.visible;) o = o.parent;
      o === this.scene &&
        (n.root.getWorldPosition(n.position),
        (n.distanceSq = n.position.distanceToSquared(e)),
        n.distanceSq <= Math.max(96, n.options.range) ** 2 &&
          this.candidates.push(n));
    }
    this.candidates.sort(
      (n, o) => o.priority - n.priority || n.distanceSq - o.distanceSq,
    );
    for (let n = 0; n < this.lights.length; n++) {
      const o = this.lights[n],
        a = this.candidates[n];
      if (!a) {
        o.intensity = 0;
        continue;
      }
      if (
        (a.root.getWorldDirection(this.direction).negate(),
        i - a.raycastAt > 100 ||
          a.raycastPosition.distanceToSquared(a.position) > 0.0625 ||
          a.raycastDirection.dot(this.direction) < 0.999)
      ) {
        const r = t(a.position, this.direction, a.options.range);
        (a.setReach(r?.dist ?? a.options.range),
          (a.raycastAt = i),
          a.raycastPosition.copy(a.position),
          a.raycastDirection.copy(this.direction));
      }
      (o.position.copy(a.position),
        o.target.position.copy(a.position).add(this.direction),
        o.color.setHex(a.options.color),
        (o.angle = a.options.angle),
        (o.distance = a.reach),
        (o.intensity = a.options.intensity * a.strength));
    }
  }
}
class Y5 {
  root = new re();
  position = new k();
  options;
  raycastAt = -1 / 0;
  raycastPosition = new k();
  raycastDirection = new k();
  distanceSq = 0;
  priority;
  strength = 1;
  reach;
  on = !1;
  pool;
  constructor(e, t = {}) {
    ((this.options = {
      range: 92,
      angle: Math.PI / 8,
      color: 16772810,
      intensity: 26,
      priority: 0,
      ...t,
    }),
      (this.priority = this.options.priority),
      (this.reach = this.options.range));
    let i = e;
    for (; i.parent;) i = i.parent;
    if (!i.isScene) throw new Error("A lamp must belong to a scene");
    ((this.pool = h1(i)), this.pool.beams.add(this), e.add(this.root));
  }
  get active() {
    return this.on;
  }
  setActive(e) {
    this.on = e;
  }
  setStrength(e) {
    this.strength = Math.max(0, e);
  }
  setReach(e) {
    this.reach = Math.min(this.options.range, Math.max(0.1, e) + 3);
  }
  dispose() {
    ((this.on = !1),
      this.pool.beams.delete(this),
      this.root.removeFromParent());
  }
}
const D7 = {
    [L.BOAT]: {
      x: 0.5,
      y: 2.08,
      z: 0.66,
      range: 55,
      angle: Math.PI / 7,
      pitch: -0.1,
    },
    [L.CARRIER]: {
      x: 3.5,
      y: 3.5,
      z: -20,
      range: 85,
      angle: Math.PI / 6,
      pitch: -0.16,
    },
    [L.TANK]: {
      x: 0.95,
      y: 1.08,
      z: -1.95,
      range: 55,
      angle: Math.PI / 7,
      pitch: -0.05,
    },
    [L.BTR_TURRET]: {
      x: 0.8,
      y: 1.02,
      z: -2.53,
      range: 50,
      angle: Math.PI / 7,
      pitch: -0.05,
    },
    [L.HIMARS]: {
      x: 0.78,
      y: 1.12,
      z: -2.83,
      range: 55,
      angle: Math.PI / 7,
      pitch: -0.05,
    },
    [L.PATRIOT]: {
      x: 0.78,
      y: 1.12,
      z: -2.83,
      range: 55,
      angle: Math.PI / 7,
      pitch: -0.05,
    },
    [L.HELI]: {
      x: 0,
      y: 0.98,
      z: -2.12,
      range: 100,
      angle: Math.PI / 8,
      pitch: -0.55,
    },
    [L.PLANE]: {
      x: 1.6,
      y: -0.25,
      z: -1.4,
      range: 80,
      angle: Math.PI / 9,
      pitch: -0.22,
    },
    [L.SUBMARINE]: {
      x: 0.9,
      y: 0.1,
      z: -8,
      range: 60,
      angle: Math.PI / 7,
      pitch: -0.08,
    },
  },
  rJ = new Set([14931339, 15193740]),
  lJ = new Ge(16773312),
  cJ = new Ge(0),
  wg = (s) => s in D7,
  hJ = new Zt({ colorWrite: !1, depthWrite: !1 });
function jl(s, e) {
  s.userData.cockpitHidden !== e &&
    ((s.userData.cockpitHidden = e),
    (s.visible = !0),
    s.traverse((t) => {
      t instanceof Q &&
        (e
          ? ((t.userData.cockpitMaterial = t.material), (t.material = hJ))
          : t.userData.cockpitMaterial &&
            ((t.material = t.userData.cockpitMaterial),
            delete t.userData.cockpitMaterial));
    }));
}
const dJ = {
    [L.TANK]: 2.4,
    [L.FIGHTER_JET]: 7.5,
    [L.PLANE]: 5.5,
    [L.DRONE]: 0.7,
    [L.BOAT]: 2.6,
    [L.CARRIER]: 12,
    [L.HELI]: 2.8,
    [L.HIMARS]: 2.8,
    [L.MORTAR]: 1.3,
    [L.PATRIOT]: 2.8,
    [L.TURRET]: 1.5,
    [L.BTR_TURRET]: 2.8,
    [L.SUBMARINE]: 6.2,
    [L.SPACE_ROCKET]: 4.8,
  },
  uJ = {
    [L.TANK]: 2.9,
    [L.FIGHTER_JET]: 4.8,
    [L.PLANE]: 3.5,
    [L.DRONE]: 0.9,
    [L.BOAT]: 2.6,
    [L.CARRIER]: 12,
    [L.HELI]: 3.2,
    [L.HIMARS]: 3.4,
    [L.MORTAR]: 2.8,
    [L.PATRIOT]: 3.6,
    [L.TURRET]: 2.1,
    [L.BTR_TURRET]: 3.4,
    [L.SUBMARINE]: 4.7,
    [L.SPACE_ROCKET]: 13.5,
  },
  fJ = {
    [L.TANK]: new k(0.65, 1.35, 1.25),
    [L.FIGHTER_JET]: new k(0, 1.5, 5.5),
    [L.PLANE]: new k(0, 1.15, -1.65),
    [L.DRONE]: new k(0, 0.3, 0),
    [L.BOAT]: new k(0.7, 1.15, 2.65),
    [L.CARRIER]: new k(4.8, 8.1, 4),
    [L.HELI]: new k(0, 2.25, 0.8),
    [L.HIMARS]: new k(0.7, 1.35, 1.6),
    [L.PATRIOT]: new k(0.7, 1.35, 1.65),
    [L.TURRET]: new k(0, 1.45, 0.25),
    [L.BTR_TURRET]: new k(0.7, 1.35, 1.55),
    [L.SUBMARINE]: new k(0, 1.1, 4.8),
    [L.SPACE_ROCKET]: new k(0, 1, 0),
  },
  B8 = 40,
  z8 = -0.52,
  F8 = -1.76,
  pJ = -0.3,
  mJ = 0.95,
  gJ = 0.045,
  ow = new Set([L.TANK, L.BTR_TURRET, L.HIMARS, L.PATRIOT]),
  Xl = (s) =>
    Math.atan2(2 * (s.w * s.y + s.x * s.z), 1 - 2 * (s.y * s.y + s.z * s.z)),
  yJ = new pi(),
  vJ = new k(),
  r0 = (s) => s.group.visible || !!s.lod?.visible,
  U8 = [
    [5661763, 3950898, 7371094],
    [7567744, 3422784, 10791082],
    [5399866, 2636324, 7755834],
    [13151090, 9400389, 14731666],
    [15199470, 11451331, 6846595],
  ];
function H7(s, e, t) {
  const i = U8[e] ?? U8[0];
  s.traverse((n) => {
    if (!(n instanceof Q)) return;
    const o = Array.isArray(n.material) ? n.material : [n.material];
    for (const a of o) {
      if (!a.isMeshLambertMaterial || !a.userData.camoEligible) continue;
      const r = Math.abs(Math.floor(a.userData.baseColor * 0.017 + t * 13)),
        l = i[r % i.length],
        c = a.map ? NQ(i) : null;
      (c
        ? ((a.map = c),
          a.color.setHex(16777215).lerp(new Ge(l), 0.12),
          (a.userData.lodColor = l))
        : (a.color.setHex(l), delete a.userData.lodColor),
        (a.needsUpdate = !0));
    }
  });
}
function Mg(s) {
  H7(s.group, s.camo, s.id);
}
