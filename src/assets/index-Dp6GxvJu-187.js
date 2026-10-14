// index-Dp6GxvJu 187 — math
// Lines 104466-104812 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const i2 = {
  gameTitle: "Voxel Rush",
  colors: {
    bg: "#070b10",
    panel: "rgba(14, 20, 28, 0.94)",
    panelBorder: "rgba(255, 255, 255, 0.14)",
    text: "#e6ecf2",
    textDim: "#9eabb8",
    heading: "#f3f6f9",
    accent: "#ffb547",
    primary: "#2c3a4a",
    primaryHover: "#3a4b5e",
    danger: "#c2412f",
    success: "#5be38f",
    inputBg: "#05080c",
    inputBorder: "rgba(255, 255, 255, 0.16)",
    inputFocus: "#ffb547",
  },
};
function Cee() {
  document.title.includes(i2.gameTitle) || (document.title = i2.gameTitle);
  const n = document.documentElement;
  for (const [e, t] of Object.entries(i2.colors))
    n.style.setProperty(
      "--" + e.replace(/[A-Z]/g, (i) => "-" + i.toLowerCase()),
      t,
    );
  document.querySelectorAll("[data-game-title]").forEach((e) => {
    e.textContent = i2.gameTitle;
  });
}
const kee = 24,
  Lee = 1.1,
  Iee = new ze(1, 0.32, 0.3),
  tR = new k(),
  iR = new Jt(),
  Pee = new hi(),
  nR = new gn(),
  Oee = new ze();
let n2 = null;
function Nee() {
  if (n2) return n2;
  const n = new ql(),
    e = 22;
  for (let t = 0; t <= e; t++) {
    const i = (t / e) * Math.PI * 2,
      s = 0.72 + 0.28 * Math.abs(Math.sin(t * 2.7) * Math.cos(t * 1.3)),
      o = Math.cos(i) * s,
      a = Math.sin(i) * s;
    t === 0 ? n.moveTo(o, a) : n.lineTo(o, a);
  }
  return ((n2 = new bS(n).rotateX(-Math.PI / 2)), n2);
}
class Dee {
  constructor(e) {
    w(this, "list", []);
    w(this, "hooks", {
      groundAt: (e, t, i) => i,
      crush: () => {},
      thud: () => {},
      poof: () => {},
    });
    this.scene = e;
  }
  get count() {
    return this.list.length;
  }
  spawn(e, t, i, s) {
    if (s.cause === xr.DESPAWN) {
      e.removeFromParent();
      return;
    }
    for (; this.list.length >= kee;) this.remove(this.list.shift());
    const o = e.rotation.y,
      a = e.position.clone();
    (e.rotation.set(0, 0, 0),
      e.position.set(0, 0, 0),
      e.updateMatrixWorld(!0),
      nR.setFromObject(e, !0));
    const r = nR.getSize(new k()),
      l = Math.max(0.08, r.x / 2),
      c = Math.max(0.2, r.y),
      h = new pe(),
      d = new pe();
    (h.position.copy(a),
      (h.rotation.y = o),
      h.add(d),
      e.removeFromParent(),
      d.add(e),
      this.scene.add(h));
    const u = Math.cos(o),
      f = Math.sin(o),
      p = s.dirX * u - s.dirZ * f,
      m = Math.abs(p) > 0.15 ? Math.sign(p) : Math.random() < 0.5 ? -1 : 1;
    (d.position.set(0, c / 2, 0), e.position.set(0, -c / 2, 0));
    const y = [];
    e.traverse((x) => {
      const T = x;
      if (!T.isMesh) return;
      const A = Array.isArray(T.material) ? T.material : [T.material];
      for (const _ of A)
        _.color &&
          !y.some((C) => C.mat === _) &&
          y.push({ mat: _, base: _.color.clone() });
    });
    const g = this.hooks.groundAt(a.x, a.z, a.y + 1),
      b = new k();
    let S = !1;
    if (s.cause === xr.BLAST) {
      const x = Math.min(14, Math.max(3, s.speed));
      (b.set(s.dirX * x, 3.5 + x * 0.45, s.dirZ * x), (S = !0));
    } else if (s.cause === xr.CRUSHED) {
      const x = Math.min(3, s.speed * 0.35);
      b.set(s.dirX * x, 0, s.dirZ * x);
    }
    const M = {
      root: h,
      pivot: d,
      body: e,
      legs: t,
      head: i,
      cause: s.cause,
      aquatic: s.aquatic,
      age: 0,
      angle: 0,
      angVel: s.cause === xr.KILLED ? 1.2 : 0,
      side: m,
      bounced: !1,
      vel: b,
      spin: new k(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 8,
      ),
      airborne: S,
      halfW: l,
      height: c,
      groundY: Number.isFinite(g) ? g : a.y,
      baseScale: e.scale.clone(),
      centre: c / 2,
      tinted: y,
      pool: null,
      poolSize: Math.max(r.x, r.z) * 0.42 + 0.22,
      hold: s.cause === xr.CRUSHED ? 7 : s.aquatic ? 2.6 : 2.4,
      sinkFrom: 0,
    };
    (this.list.push(M),
      s.cause === xr.CRUSHED &&
        (this.addPool(M, 1.25),
        this.hooks.crush(
          tR.set(a.x, a.y, a.z),
          s.dirX,
          s.dirZ,
          s.speed,
          M.groundY,
        )));
  }
  clear() {
    for (const e of this.list) this.remove(e);
    this.list = [];
  }
  addPool(e, t) {
    const i = new gi({
        color: 6032139,
        transparent: !0,
        opacity: 0.88,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2,
      }),
      s = new le(Nee(), i);
    (s.position.set(e.root.position.x, e.groundY + 0.015, e.root.position.z),
      (s.rotation.y = Math.random() * Math.PI * 2),
      s.scale.setScalar(0.05),
      (s.userData.target = e.poolSize * t),
      (s.renderOrder = 1),
      this.scene.add(s),
      (e.pool = s));
  }
  remove(e) {
    (e.root.removeFromParent(),
      e.body.traverse((t) => {
        var o;
        const i = t;
        if (!i.isMesh) return;
        (o = i.geometry) == null || o.dispose();
        const s = Array.isArray(i.material) ? i.material : [i.material];
        for (const a of s) a == null || a.dispose();
      }),
      e.pool && (e.pool.removeFromParent(), e.pool.material.dispose()));
  }
  update(e) {
    for (let t = this.list.length - 1; t >= 0; t--) {
      const i = this.list[t];
      i.age += e;
      const s =
        i.cause === xr.CRUSHED
          ? Math.max(0, 1 - i.age / 0.25)
          : Math.max(0, 1 - i.age / 0.6);
      for (const o of i.tinted)
        o.mat.color.copy(o.base).lerp(Oee.copy(o.base).multiply(Iee), s);
      if (
        (i.aquatic
          ? this.updateSwimmer(i, e)
          : i.cause === xr.CRUSHED
            ? this.updateCrushed(i, e)
            : this.updateFall(i, e),
        i.pool)
      ) {
        const o = i.pool.userData.target,
          a = i.pool.scale.x + (o - i.pool.scale.x) * (1 - Math.exp(-2.2 * e));
        i.pool.scale.setScalar(a);
      }
      if (i.age > i.hold) {
        const o = Math.min(1, (i.age - i.hold) / Lee);
        ((i.root.position.y = i.sinkFrom - o * (i.height + 0.2)),
          i.pool && (i.pool.material.opacity = 0.88 * (1 - o)),
          o >= 1 &&
            (this.hooks.poof(
              tR.set(i.root.position.x, i.groundY + 0.3, i.root.position.z),
              i.poolSize,
            ),
            this.remove(i),
            this.list.splice(t, 1)));
      } else i.sinkFrom = i.root.position.y;
    }
  }
  updateFall(e, t) {
    if (e.airborne) {
      ((e.vel.y -= 22 * t),
        e.root.position.addScaledVector(e.vel, t),
        iR.setFromEuler(Pee.set(e.spin.x * t, e.spin.y * t, e.spin.z * t)),
        e.pivot.quaternion.premultiply(iR));
      const s = this.hooks.groundAt(
        e.root.position.x,
        e.root.position.z,
        e.root.position.y + 1,
      );
      Number.isFinite(s) &&
        e.root.position.y <= s &&
        e.vel.y < 0 &&
        ((e.root.position.y = s),
        (e.groundY = s),
        (e.airborne = !1),
        this.hooks.thud(e.root.position, Math.min(1, Math.abs(e.vel.y) / 12)),
        e.pivot.quaternion.identity(),
        (e.angle = (Math.PI / 2) * 0.8),
        (e.angVel = 3),
        e.vel.set(0, 0, 0));
    } else {
      const s = Math.PI / 2;
      ((e.angle < s || e.angVel < 0) &&
        ((e.angVel += (3.5 + 16 * Math.sin(e.angle)) * t),
        (e.angle += e.angVel * t),
        e.angle >= s &&
          ((e.angle = s),
          !e.bounced && e.angVel > 2
            ? ((e.bounced = !0),
              (e.angVel = -e.angVel * 0.22),
              this.hooks.thud(e.root.position, Math.min(1, e.height)))
            : (e.angVel = 0))),
        e.pivot.rotation.set(0, 0, -e.side * e.angle));
      const o = Math.min(
        1,
        Math.max(0, Math.sin(Math.min(e.angle, Math.PI / 2))),
      );
      e.pivot.position.y = e.centre + (e.halfW - e.centre) * o;
    }
    const i = 1 - Math.exp(-9 * t);
    (e.legs.forEach((s, o) => {
      const a = (o & 1 ? 1 : -1) * 0.35;
      s.rotation.x += (a - s.rotation.x) * i;
      const r = s.userData.knee;
      r && (r.rotation.x += (0 - r.rotation.x) * i);
    }),
      e.head && (e.head.rotation.x += (-0.35 - e.head.rotation.x) * i));
  }
  updateCrushed(e, t) {
    const i = Math.min(1, e.age / 0.08);
    ((e.pivot.position.y = e.centre),
      e.body.scale.set(
        e.baseScale.x * (1 + 0.38 * i),
        e.baseScale.y * (1 - 0.8 * i),
        e.baseScale.z * (1 + 0.22 * i),
      ),
      e.vel.lengthSq() > 1e-4 &&
        (e.root.position.addScaledVector(e.vel, t),
        e.vel.multiplyScalar(Math.exp(-5 * t)),
        e.pool &&
          ((e.pool.position.x = e.root.position.x),
          (e.pool.position.z = e.root.position.z))),
      (e.root.position.y = e.groundY + 0.01),
      e.legs.forEach((s, o) => {
        s.rotation.x = (o & 2 ? 1 : -1) * 1.2 * Math.min(1, e.age / 0.1);
      }));
  }
  updateSwimmer(e, t) {
    ((e.angle = Math.min(Math.PI, e.angle + t * 3.2)),
      e.pivot.rotation.set(0, 0, e.side * e.angle),
      e.age < e.hold && (e.root.position.y += t * 0.35));
  }
}
const sR = new Map();
function Bee(n) {
  if (n === "plain") return null;
  const e = sR.get(n);
  if (e) return e;
  const t = document.createElement("canvas");
  t.width = t.height = 64;
  const i = t.getContext("2d"),
    s = i.createImageData(64, 64),
    o = n === "skin" ? 17 : n === "feather" ? 31 : n === "wool" ? 47 : 73;
  for (let r = 0; r < 64; r++)
    for (let l = 0; l < 64; l++) {
      let c = Math.imul(l + o, 374761393) ^ Math.imul(r + 11, 668265263);
      c = Math.imul(c ^ (c >>> 13), 1274126177);
      const h = ((c ^ (c >>> 16)) >>> 0) / 4294967295,
        d =
          n === "feather"
            ? Math.sin((l + Math.abs((r % 16) - 8) * 0.8) * 0.7) * 10
            : n === "wool"
              ? Math.sin(l * 0.65) * Math.cos(r * 0.7) * 16
              : n === "hide"
                ? Math.sin(l * 0.18 + Math.sin(r * 0.13) * 2) * 6
                : Math.sin(r * 1.7) * 2,
        u =
          n === "skin" && h > 0.955 ? -18 : n === "hide" && h > 0.93 ? -13 : 0,
        f = Math.max(178, Math.min(255, 231 + (h - 0.5) * 24 + d + u)),
        p = (r * 64 + l) * 4;
      ((s.data[p] = s.data[p + 1] = s.data[p + 2] = f), (s.data[p + 3] = 255));
    }
  i.putImageData(s, 0, 0);
  const a = new bi(t);
  return (
    (a.wrapS = a.wrapT = Fr),
    a.repeat.set(2, 2),
    (a.magFilter = Jn),
    (a.minFilter = Uo),
    (a.colorSpace = vi),
    sR.set(n, a),
    a
  );
}
function Xy(n, e = "plain") {
  return new gi({ color: n, map: Bee(e) });
}
