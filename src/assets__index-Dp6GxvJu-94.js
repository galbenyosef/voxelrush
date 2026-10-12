// assets__index-Dp6GxvJu 94 — math
// Lines 57710-58028 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class mK {
  constructor(e) {
    w(this, "beams", new Set());
    w(this, "lights", []);
    w(this, "candidates", []);
    w(this, "direction", new k());
    ((this.scene = e), this.setBudget(3));
  }
  setBudget(e) {
    for (e = Math.max(1, e); this.lights.length > e;) {
      const t = this.lights.pop();
      (t.removeFromParent(), t.target.removeFromParent(), t.dispose());
    }
    for (; this.lights.length < e;) {
      const t = new X8(16772810, 0, 46, Math.PI / 8, 0.8, 1.6);
      ((t.name = "pooled-lamp"),
        (t.castShadow = !1),
        (t.target.position.z = -1),
        this.scene.add(t, t.target),
        this.lights.push(t));
    }
  }
  probe(e, t, i) {
    let s = 0;
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
      s += o.intensity * p * f * f * (3 - 2 * f);
    }
    return Math.min(1, s);
  }
  update(e, t) {
    const i = performance.now();
    this.candidates.length = 0;
    for (const s of this.beams) {
      if (!s.active) continue;
      let o = s.root;
      for (; o && o !== this.scene && o.visible;) o = o.parent;
      o === this.scene &&
        (s.root.getWorldPosition(s.position),
        (s.distanceSq = s.position.distanceToSquared(e)),
        s.distanceSq <= Math.max(96, s.options.range) ** 2 &&
          this.candidates.push(s));
    }
    this.candidates.sort(
      (s, o) => o.priority - s.priority || s.distanceSq - o.distanceSq,
    );
    for (let s = 0; s < this.lights.length; s++) {
      const o = this.lights[s],
        a = this.candidates[s];
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
        (a.setReach((r == null ? void 0 : r.dist) ?? a.options.range),
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
class S4 {
  constructor(e, t = {}) {
    w(this, "root", new pe());
    w(this, "position", new k());
    w(this, "options");
    w(this, "raycastAt", -1 / 0);
    w(this, "raycastPosition", new k());
    w(this, "raycastDirection", new k());
    w(this, "distanceSq", 0);
    w(this, "priority");
    w(this, "strength", 1);
    w(this, "reach");
    w(this, "on", !1);
    w(this, "pool");
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
    ((this.pool = Lf(i)), this.pool.beams.add(this), e.add(this.root));
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
const OL = {
    [P.BOAT]: {
      x: 0.5,
      y: 2.08,
      z: 0.66,
      range: 55,
      angle: Math.PI / 7,
      pitch: -0.1,
    },
    [P.CARRIER]: {
      x: 3.5,
      y: 3.5,
      z: -20,
      range: 85,
      angle: Math.PI / 6,
      pitch: -0.16,
    },
    [P.TANK]: {
      x: 0.95,
      y: 1.08,
      z: -1.95,
      range: 55,
      angle: Math.PI / 7,
      pitch: -0.05,
    },
    [P.BTR_TURRET]: {
      x: 0.8,
      y: 1.02,
      z: -2.53,
      range: 50,
      angle: Math.PI / 7,
      pitch: -0.05,
    },
    [P.HIMARS]: {
      x: 0.78,
      y: 1.12,
      z: -2.83,
      range: 55,
      angle: Math.PI / 7,
      pitch: -0.05,
    },
    [P.PATRIOT]: {
      x: 0.78,
      y: 1.12,
      z: -2.83,
      range: 55,
      angle: Math.PI / 7,
      pitch: -0.05,
    },
    [P.HELI]: {
      x: 0,
      y: 0.98,
      z: -2.12,
      range: 100,
      angle: Math.PI / 8,
      pitch: -0.55,
    },
    [P.PLANE]: {
      x: 1.6,
      y: -0.25,
      z: -1.4,
      range: 80,
      angle: Math.PI / 9,
      pitch: -0.22,
    },
    [P.SUBMARINE]: {
      x: 0.9,
      y: 0.1,
      z: -8,
      range: 60,
      angle: Math.PI / 7,
      pitch: -0.08,
    },
  },
  gK = new Set([14931339, 15193740]),
  yK = new ze(16773312),
  vK = new ze(0),
  Lm = (n) => n in OL,
  bK = new qt({ colorWrite: !1, depthWrite: !1 });
function ol(n, e) {
  n.userData.cockpitHidden !== e &&
    ((n.userData.cockpitHidden = e),
    (n.visible = !0),
    n.traverse((t) => {
      t instanceof le &&
        (e
          ? ((t.userData.cockpitMaterial = t.material), (t.material = bK))
          : t.userData.cockpitMaterial &&
            ((t.material = t.userData.cockpitMaterial),
            delete t.userData.cockpitMaterial));
    }));
}
const wK = {
    [P.TANK]: 2.4,
    [P.FIGHTER_JET]: 7.5,
    [P.PLANE]: 5.5,
    [P.DRONE]: 0.7,
    [P.BOAT]: 2.6,
    [P.CARRIER]: 12,
    [P.HELI]: 2.8,
    [P.HIMARS]: 2.8,
    [P.MORTAR]: 1.3,
    [P.PATRIOT]: 2.8,
    [P.TURRET]: 1.5,
    [P.BTR_TURRET]: 2.8,
    [P.SUBMARINE]: 6.2,
    [P.SPACE_ROCKET]: 4.8,
  },
  MK = {
    [P.TANK]: 2.9,
    [P.FIGHTER_JET]: 4.8,
    [P.PLANE]: 3.5,
    [P.DRONE]: 0.9,
    [P.BOAT]: 2.6,
    [P.CARRIER]: 12,
    [P.HELI]: 3.2,
    [P.HIMARS]: 3.4,
    [P.MORTAR]: 2.8,
    [P.PATRIOT]: 3.6,
    [P.TURRET]: 2.1,
    [P.BTR_TURRET]: 3.4,
    [P.SUBMARINE]: 4.7,
    [P.SPACE_ROCKET]: 13.5,
  },
  SK = {
    [P.TANK]: new k(0.65, 1.35, 1.25),
    [P.FIGHTER_JET]: new k(0, 1.5, 5.5),
    [P.PLANE]: new k(0, 1.15, -1.65),
    [P.DRONE]: new k(0, 0.3, 0),
    [P.BOAT]: new k(0.7, 1.15, 2.65),
    [P.CARRIER]: new k(4.8, 8.1, 4),
    [P.HELI]: new k(0, 2.25, 0.8),
    [P.HIMARS]: new k(0.7, 1.35, 1.6),
    [P.PATRIOT]: new k(0.7, 1.35, 1.65),
    [P.TURRET]: new k(0, 1.45, 0.25),
    [P.BTR_TURRET]: new k(0.7, 1.35, 1.55),
    [P.SUBMARINE]: new k(0, 1.1, 4.8),
    [P.SPACE_ROCKET]: new k(0, 1, 0),
  },
  m6 = 40,
  g6 = -0.52,
  y6 = -1.76,
  EK = -0.3,
  xK = 0.95,
  TK = 0.045,
  W5 = new Set([P.TANK, P.BTR_TURRET, P.HIMARS, P.PATRIOT]),
  al = (n) =>
    Math.atan2(2 * (n.w * n.y + n.x * n.z), 1 - 2 * (n.y * n.y + n.z * n.z)),
  AK = new hi(),
  _K = new k(),
  gc = (n) => {
    var e;
    return n.group.visible || !!((e = n.lod) != null && e.visible);
  },
  v6 = [
    [5661763, 3950898, 7371094],
    [7567744, 3422784, 10791082],
    [5399866, 2636324, 7755834],
    [13151090, 9400389, 14731666],
    [15199470, 11451331, 6846595],
  ];
function NL(n, e, t) {
  const i = v6[e] ?? v6[0];
  n.traverse((s) => {
    if (!(s instanceof le)) return;
    const o = Array.isArray(s.material) ? s.material : [s.material];
    for (const a of o) {
      if (!a.isMeshLambertMaterial || !a.userData.camoEligible) continue;
      const r = Math.abs(Math.floor(a.userData.baseColor * 0.017 + t * 13)),
        l = i[r % i.length],
        c = a.map ? Vq(i) : null;
      (c
        ? ((a.map = c),
          a.color.setHex(16777215).lerp(new ze(l), 0.12),
          (a.userData.lodColor = l))
        : (a.color.setHex(l), delete a.userData.lodColor),
        (a.needsUpdate = !0));
    }
  });
}
function Im(n) {
  NL(n.group, n.camo, n.id);
}
