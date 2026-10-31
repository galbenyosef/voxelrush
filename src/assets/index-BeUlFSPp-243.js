// index-BeUlFSPp 243 — carry
// Lines 129297-129638 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function vce(s, e) {
  const t = s <= 0 ? "empty" : s < 256 && le[s] ? "block" : "item",
    i = new re();
  i.name = `fp-hold-${t}`;
  const n = u9();
  i.add(n);
  const o = qh[t],
    a = o.hip;
  if (
    (f9(n, LE.set(0, 0, 0), IE.copy(p9).sub(LE.set(...a)), o.roll),
    t === "block")
  ) {
    const r = qh.block,
      l = nT(e, s, r.size);
    l.name = "fp-held-block";
    const c = yce.has(le[s].shape),
      h = c ? qh.stem.at : r.at,
      d = c ? qh.stem.rot : r.rot;
    (l.position.set(...h),
      l.rotation.set(...d, "YXZ"),
      (l.userData.restPos = l.position.clone()),
      (l.userData.restQuat = l.quaternion.clone()),
      i.add(l));
  } else if (t === "item") {
    const r = qh.item,
      l = e2(s, r.scale);
    ((l.name = "fp-held-item"),
      l.position.set(...r.at),
      l.rotation.set(...r.rot, "YXZ"),
      (l.frustumCulled = !1),
      (l.userData.restPos = l.position.clone()),
      (l.userData.restQuat = l.quaternion.clone()),
      i.add(l));
  }
  return (
    i.traverse((r) => {
      r.frustumCulled = !1;
    }),
    { kind: t, root: i, arm: n, hip: a, pivot: m9(n, o.pivotAlong, new k()) }
  );
}
function bce(s, e, t) {
  t.identity();
  for (let i = e; i && i !== s; i = i.parent)
    (i.updateMatrix(), t.premultiply(i.matrix));
  return t;
}
function wce(s, e, t = 1.02) {
  const i = s.getObjectByName("fp-bare-arm"),
    n = i ?? u9(t);
  i || s.add(n);
  const o = s.getObjectByName("hand-r"),
    a = new k();
  let r = qh.tool.roll;
  if (o) (bce(s, o, gL).decompose(a, gce, IE), o.userData.along && (r = -0.25));
  else {
    ((n.visible = !1), s.updateMatrixWorld(!0));
    const c = new zs();
    (s.traverseVisible((f) => {
      f.isMesh && c.expandByObject(f, !0);
    }),
      (n.visible = !0));
    const h = gL.copy(s.matrixWorld).invert(),
      d = c.min.clone().applyMatrix4(h),
      u = c.max.clone().applyMatrix4(h);
    (a.set(
      (d.x + u.x) / 2 + 0.01,
      Math.min(d.y, u.y) + 0.035,
      (d.z + u.z) / 2 + 0.03,
    ),
      (r = -0.45));
  }
  const l = IE.copy(p9).sub(LE.set(e[0], e[1], e[2]));
  return (
    f9(n, a, l, r),
    n.traverse((c) => {
      c.frustumCulled = !1;
    }),
    { arm: n, pivot: m9(n, qh.tool.pivotAlong, new k()) }
  );
}
const gM = new hi(),
  Mce = new k(1, 0, 0),
  Qg = new k();
function Sce(s, e, t) {
  ((s.position.x += t.x),
    (s.position.y += t.y),
    (s.position.z += t.z),
    e &&
      (Qg.copy(e).applyQuaternion(t.q),
      Qg.subVectors(e, Qg).applyQuaternion(s.quaternion),
      s.position.add(Qg)),
    s.quaternion.multiply(t.q));
  const i =
    s.getObjectByName("fp-held-block") ?? s.getObjectByName("fp-held-item");
  i?.userData.restQuat &&
    (gM.setFromAxisAngle(Mce, t.flick),
    i.position.copy(i.userData.restPos).applyQuaternion(gM),
    i.quaternion.copy(gM).multiply(i.userData.restQuat));
}
function Ece(s) {
  return s === w.WELDER || s === w.FISHING_ROD
    ? 0.74
    : s === w.COMBAT_KNIFE
      ? 0.8
      : s === w.DRILL_METAL ||
          s === w.DRILL_DIAMOND ||
          s === w.DRILL_TITANIUM ||
          s === w.DRILL_COMPOSITE ||
          s === w.DRILL_LASER ||
          s === w.LUNAR_DRILL ||
          s === w.FLASHLIGHT
        ? 0.86
        : 1.02;
}
const yL = new Set([
    w.DRILL_METAL,
    w.DRILL_DIAMOND,
    w.DRILL_TITANIUM,
    w.DRILL_COMPOSITE,
    w.DRILL_LASER,
    w.LUNAR_DRILL,
    w.CHAINSAW_BASIC,
    w.CHAINSAW_PRO,
    w.CHAINSAW_INDUSTRIAL,
    w.WELDER,
  ]),
  Jg = {
    raise: 0.18,
    lower: 0.24,
    carry: [-0.105, -0.055, 0.035, -0.3, 0.62, 0.22],
    swing: 1,
    kick: [1.9, 1.3, 0.5, 0.8],
    spring: [24, 0.62],
  },
  Ace = {
    [w.AK47]: Jg,
    [w.GLOCK]: {
      raise: 0.13,
      lower: 0.2,
      carry: [-0.03, -0.06, 0.07, 0.42, 0.12, -0.1],
      swing: 1.25,
      kick: [1.8, 3.4, 0.6, 0.6],
      spring: [30, 0.55],
    },
    [w.DEAGLE]: {
      raise: 0.15,
      lower: 0.22,
      carry: [-0.03, -0.06, 0.07, 0.42, 0.12, -0.1],
      swing: 1.15,
      kick: [2.8, 5.6, 0.9, 1.3],
      spring: [21, 0.5],
    },
    [w.M4A1]: {
      raise: 0.16,
      lower: 0.22,
      carry: Jg.carry,
      swing: 1,
      kick: [1.55, 1, 0.4, 0.6],
      spring: [27, 0.66],
    },
    [w.VECTOR]: {
      raise: 0.13,
      lower: 0.2,
      carry: [-0.09, -0.05, 0.04, -0.28, 0.55, 0.2],
      swing: 1.1,
      kick: [1.05, 0.5, 0.45, 0.5],
      spring: [33, 0.7],
    },
    [w.AWP]: {
      raise: 0.24,
      lower: 0.28,
      carry: [-0.115, -0.06, 0.04, -0.3, 0.64, 0.22],
      swing: 0.85,
      kick: [2.7, 2.9, 0.5, 1.1],
      spring: [15, 0.6],
    },
    [w.SHOTGUN]: {
      raise: 0.2,
      lower: 0.25,
      carry: Jg.carry,
      swing: 1,
      kick: [2.6, 2.8, 0.7, 1.2],
      spring: [16, 0.58],
    },
    [w.MINIGUN]: {
      raise: 0.3,
      lower: 0.3,
      carry: [-0.04, -0.05, 0.02, -0.2, 0.3, 0.1],
      swing: 0.6,
      kick: [0.55, 0.28, 0.5, 0.55],
      spring: [26, 0.7],
    },
    [w.RPG]: {
      raise: 0.27,
      lower: 0.3,
      carry: [-0.03, -0.07, 0.03, -0.24, 0.2, 0.08],
      swing: 0.6,
      kick: [2.2, 1.5, 0.3, 0.9],
      spring: [12, 0.7],
    },
    [w.GRENADE_LAUNCHER]: {
      raise: 0.22,
      lower: 0.26,
      carry: Jg.carry,
      swing: 0.9,
      kick: [2.5, 2.2, 0.4, 1],
      spring: [14, 0.62],
    },
    [w.GRENADE]: {
      raise: 0.12,
      lower: 0.2,
      carry: [-0.02, -0.08, 0.04, -0.3, 0.1, 0],
      swing: 1.2,
      kick: [0, 0, 0, 0],
      spring: [24, 0.7],
    },
  },
  Tce = {
    raise: 0.14,
    lower: 0.2,
    carry: [0, 0, 0, -0.25, 0.18, 0],
    swing: 0,
    kick: [2, 1.3, 0, 0],
    spring: [22, 0.75],
  },
  vL = (s) => Ace[s] ?? Tce,
  xce = 0.12,
  _ce = 0.62,
  Rce = 0.32,
  kce = 0.45,
  Cce = 0.11;
class Lce {
  low = 0;
  stay = 0;
  update(e, t, i, n) {
    i ? (this.stay = Rce) : (this.stay = Math.max(0, this.stay - e));
    const o = t && this.stay <= 0;
    this.low = o
      ? Math.min(1, this.low + e / n.lower)
      : Math.max(0, this.low - e / n.raise);
  }
  get holdsRun() {
    return this.stay > 0;
  }
  get up() {
    return this.low <= xce;
  }
  get lowered() {
    const e = this.low;
    return e * e * (3 - 2 * e);
  }
  reset() {
    ((this.low = 0), (this.stay = 0));
  }
}
class Jp {
  x = 0;
  v = 0;
  step(e, t, i) {
    if (this.x === 0 && this.v === 0) return;
    const { x: n, v: o } = this,
      a = Math.exp(-i * t * e);
    if (i < 0.999) {
      const r = t * Math.sqrt(1 - i * i),
        l = Math.cos(r * e),
        c = Math.sin(r * e),
        h = (o + i * t * n) / r;
      ((this.x = a * (n * l + h * c)),
        (this.v = a * (o * l - (i * t * h + r * n) * c)));
    } else {
      const r = o + t * n;
      ((this.x = a * (n + r * e)), (this.v = a * (o - t * r * e)));
    }
    Math.abs(this.x) < 1e-5 &&
      Math.abs(this.v) < 1e-4 &&
      ((this.x = 0), (this.v = 0));
  }
  kick(e, t) {
    const i = e * this.x > 0 ? Math.max(0, 1 - Math.abs(this.x) / t) : 1;
    this.v += e * i;
  }
  reset() {
    ((this.x = 0), (this.v = 0));
  }
}
const y1 = 2;
function bL(s) {
  s.traverse((e) => e.layers.set(y1));
}
function Ice(s) {
  return (
    s === w.MILITARY_MEDKIT ||
    Ko(s) ||
    s === w.AMMO_9MM ||
    s === w.AMMO_762 ||
    s === w.AMMO_338 ||
    s === w.AMMO_50AE ||
    s === w.AMMO_556 ||
    s === w.AMMO_762_HE ||
    s === w.AMMO_338_HE ||
    s === w.AMMO_SHELL ||
    s === w.AMMO_SHELL_HE ||
    !!Ss[s] ||
    s === w.AXE ||
    s === w.COMBAT_KNIFE ||
    s === w.WELDER ||
    s === w.DRILL_METAL ||
    s === w.DRILL_DIAMOND ||
    s === w.DRILL_TITANIUM ||
    s === w.DRILL_COMPOSITE ||
    s === w.DRILL_LASER ||
    s === w.LUNAR_DRILL ||
    s === w.SPACE_ROCKET ||
    s === w.CHAINSAW_BASIC ||
    s === w.CHAINSAW_PRO ||
    s === w.CHAINSAW_INDUSTRIAL ||
    s === w.WHEAT_SEEDS ||
    s === w.FERTILIZER ||
    s === w.FISHING_ROD ||
    or(s) ||
    s === w.DETONATOR ||
    s === w.FLASHLIGHT ||
    s === w.RADIO_MODULE ||
    !!La(s)
  );
}
function wL(s) {
  return s === w.CHAINSAW_BASIC ||
    s === w.CHAINSAW_PRO ||
    s === w.CHAINSAW_INDUSTRIAL
    ? [0.3, -0.22, -0.6]
    : s === w.WELDER
      ? [0.3, -0.2, -0.5]
      : s === w.AXE
        ? [0.3, -0.17, -0.6]
        : s === w.COMBAT_KNIFE
          ? [0.24, -0.2, -0.36]
          : s === w.FISHING_ROD
            ? [0.32, -0.22, -0.66]
            : [0.3, -0.19, -0.52];
}
