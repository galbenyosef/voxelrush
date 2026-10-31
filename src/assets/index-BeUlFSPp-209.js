// index-BeUlFSPp 209 — math
// Lines 111192-111537 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const Wg = {
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
function Uae() {
  document.title.includes(Wg.gameTitle) || (document.title = Wg.gameTitle);
  const s = document.documentElement;
  for (const [e, t] of Object.entries(Wg.colors))
    s.style.setProperty(
      "--" + e.replace(/[A-Z]/g, (i) => "-" + i.toLowerCase()),
      t,
    );
  document.querySelectorAll("[data-game-title]").forEach((e) => {
    e.textContent = Wg.gameTitle;
  });
}
const Gae = 24,
  Wae = 1.1,
  $ae = new Ge(1, 0.32, 0.3),
  kC = new k(),
  CC = new hi(),
  Vae = new pi(),
  LC = new zs(),
  qae = new Ge();
let $g = null;
function Kae() {
  if ($g) return $g;
  const s = new il(),
    e = 22;
  for (let t = 0; t <= e; t++) {
    const i = (t / e) * Math.PI * 2,
      n = 0.72 + 0.28 * Math.abs(Math.sin(t * 2.7) * Math.cos(t * 1.3)),
      o = Math.cos(i) * n,
      a = Math.sin(i) * n;
    t === 0 ? s.moveTo(o, a) : s.lineTo(o, a);
  }
  return (($g = new tA(s).rotateX(-Math.PI / 2)), $g);
}
class Yae {
  constructor(e) {
    this.scene = e;
  }
  list = [];
  hooks = {
    groundAt: (e, t, i) => i,
    crush: () => {},
    thud: () => {},
    poof: () => {},
  };
  get count() {
    return this.list.length;
  }
  spawn(e, t, i, n) {
    if (n.cause === ml.DESPAWN) {
      e.removeFromParent();
      return;
    }
    for (; this.list.length >= Gae;) this.remove(this.list.shift());
    const o = e.rotation.y,
      a = e.position.clone();
    (e.rotation.set(0, 0, 0),
      e.position.set(0, 0, 0),
      e.updateMatrixWorld(!0),
      LC.setFromObject(e, !0));
    const r = LC.getSize(new k()),
      l = Math.max(0.08, r.x / 2),
      c = Math.max(0.2, r.y),
      h = new re(),
      d = new re();
    (h.position.copy(a),
      (h.rotation.y = o),
      h.add(d),
      e.removeFromParent(),
      d.add(e),
      this.scene.add(h));
    const u = Math.cos(o),
      f = Math.sin(o),
      p = n.dirX * u - n.dirZ * f,
      m = Math.abs(p) > 0.15 ? Math.sign(p) : Math.random() < 0.5 ? -1 : 1;
    (d.position.set(0, c / 2, 0), e.position.set(0, -c / 2, 0));
    const g = [];
    e.traverse((E) => {
      const A = E;
      if (!A.isMesh) return;
      const T = Array.isArray(A.material) ? A.material : [A.material];
      for (const x of T)
        x.color &&
          !g.some((R) => R.mat === x) &&
          g.push({ mat: x, base: x.color.clone() });
    });
    const y = this.hooks.groundAt(a.x, a.z, a.y + 1),
      b = new k();
    let S = !1;
    if (n.cause === ml.BLAST) {
      const E = Math.min(14, Math.max(3, n.speed));
      (b.set(n.dirX * E, 3.5 + E * 0.45, n.dirZ * E), (S = !0));
    } else if (n.cause === ml.CRUSHED) {
      const E = Math.min(3, n.speed * 0.35);
      b.set(n.dirX * E, 0, n.dirZ * E);
    }
    const M = {
      root: h,
      pivot: d,
      body: e,
      legs: t,
      head: i,
      cause: n.cause,
      aquatic: n.aquatic,
      age: 0,
      angle: 0,
      angVel: n.cause === ml.KILLED ? 1.2 : 0,
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
      groundY: Number.isFinite(y) ? y : a.y,
      baseScale: e.scale.clone(),
      centre: c / 2,
      tinted: g,
      pool: null,
      poolSize: Math.max(r.x, r.z) * 0.42 + 0.22,
      hold: n.cause === ml.CRUSHED ? 7 : n.aquatic ? 2.6 : 2.4,
      sinkFrom: 0,
    };
    (this.list.push(M),
      n.cause === ml.CRUSHED &&
        (this.addPool(M, 1.25),
        this.hooks.crush(
          kC.set(a.x, a.y, a.z),
          n.dirX,
          n.dirZ,
          n.speed,
          M.groundY,
        )));
  }
  clear() {
    for (const e of this.list) this.remove(e);
    this.list = [];
  }
  addPool(e, t) {
    const i = new Pi({
        color: 6032139,
        transparent: !0,
        opacity: 0.88,
        depthWrite: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2,
      }),
      n = new Q(Kae(), i);
    (n.position.set(e.root.position.x, e.groundY + 0.015, e.root.position.z),
      (n.rotation.y = Math.random() * Math.PI * 2),
      n.scale.setScalar(0.05),
      (n.userData.target = e.poolSize * t),
      (n.renderOrder = 1),
      this.scene.add(n),
      (e.pool = n));
  }
  remove(e) {
    (e.root.removeFromParent(),
      e.body.traverse((t) => {
        const i = t;
        if (!i.isMesh) return;
        i.geometry?.dispose();
        const n = Array.isArray(i.material) ? i.material : [i.material];
        for (const o of n) o?.dispose();
      }),
      e.pool && (e.pool.removeFromParent(), e.pool.material.dispose()));
  }
  update(e) {
    for (let t = this.list.length - 1; t >= 0; t--) {
      const i = this.list[t];
      i.age += e;
      const n =
        i.cause === ml.CRUSHED
          ? Math.max(0, 1 - i.age / 0.25)
          : Math.max(0, 1 - i.age / 0.6);
      for (const o of i.tinted)
        o.mat.color.copy(o.base).lerp(qae.copy(o.base).multiply($ae), n);
      if (
        (i.aquatic
          ? this.updateSwimmer(i, e)
          : i.cause === ml.CRUSHED
            ? this.updateCrushed(i, e)
            : this.updateFall(i, e),
        i.pool)
      ) {
        const o = i.pool.userData.target,
          a = i.pool.scale.x + (o - i.pool.scale.x) * (1 - Math.exp(-2.2 * e));
        i.pool.scale.setScalar(a);
      }
      if (i.age > i.hold) {
        const o = Math.min(1, (i.age - i.hold) / Wae);
        ((i.root.position.y = i.sinkFrom - o * (i.height + 0.2)),
          i.pool && (i.pool.material.opacity = 0.88 * (1 - o)),
          o >= 1 &&
            (this.hooks.poof(
              kC.set(i.root.position.x, i.groundY + 0.3, i.root.position.z),
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
        CC.setFromEuler(Vae.set(e.spin.x * t, e.spin.y * t, e.spin.z * t)),
        e.pivot.quaternion.premultiply(CC));
      const n = this.hooks.groundAt(
        e.root.position.x,
        e.root.position.z,
        e.root.position.y + 1,
      );
      Number.isFinite(n) &&
        e.root.position.y <= n &&
        e.vel.y < 0 &&
        ((e.root.position.y = n),
        (e.groundY = n),
        (e.airborne = !1),
        this.hooks.thud(e.root.position, Math.min(1, Math.abs(e.vel.y) / 12)),
        e.pivot.quaternion.identity(),
        (e.angle = (Math.PI / 2) * 0.8),
        (e.angVel = 3),
        e.vel.set(0, 0, 0));
    } else {
      const n = Math.PI / 2;
      ((e.angle < n || e.angVel < 0) &&
        ((e.angVel += (3.5 + 16 * Math.sin(e.angle)) * t),
        (e.angle += e.angVel * t),
        e.angle >= n &&
          ((e.angle = n),
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
    (e.legs.forEach((n, o) => {
      const a = (o & 1 ? 1 : -1) * 0.35;
      n.rotation.x += (a - n.rotation.x) * i;
      const r = n.userData.knee;
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
      e.legs.forEach((n, o) => {
        n.rotation.x = (o & 2 ? 1 : -1) * 1.2 * Math.min(1, e.age / 0.1);
      }));
  }
  updateSwimmer(e, t) {
    ((e.angle = Math.min(Math.PI, e.angle + t * 3.2)),
      e.pivot.rotation.set(0, 0, e.side * e.angle),
      e.age < e.hold && (e.root.position.y += t * 0.35));
  }
}
const IC = new Map();
function jae(s) {
  if (s === "plain") return null;
  const e = IC.get(s);
  if (e) return e;
  const t = document.createElement("canvas");
  t.width = t.height = 64;
  const i = t.getContext("2d"),
    n = i.createImageData(64, 64),
    o = s === "skin" ? 17 : s === "feather" ? 31 : s === "wool" ? 47 : 73;
  for (let r = 0; r < 64; r++)
    for (let l = 0; l < 64; l++) {
      let c = Math.imul(l + o, 374761393) ^ Math.imul(r + 11, 668265263);
      c = Math.imul(c ^ (c >>> 13), 1274126177);
      const h = ((c ^ (c >>> 16)) >>> 0) / 4294967295,
        d =
          s === "feather"
            ? Math.sin((l + Math.abs((r % 16) - 8) * 0.8) * 0.7) * 10
            : s === "wool"
              ? Math.sin(l * 0.65) * Math.cos(r * 0.7) * 16
              : s === "hide"
                ? Math.sin(l * 0.18 + Math.sin(r * 0.13) * 2) * 6
                : Math.sin(r * 1.7) * 2,
        u =
          s === "skin" && h > 0.955 ? -18 : s === "hide" && h > 0.93 ? -13 : 0,
        f = Math.max(178, Math.min(255, 231 + (h - 0.5) * 24 + d + u)),
        p = (r * 64 + l) * 4;
      ((n.data[p] = n.data[p + 1] = n.data[p + 2] = f), (n.data[p + 3] = 255));
    }
  i.putImageData(n, 0, 0);
  const a = new Si(t);
  return (
    (a.wrapS = a.wrapT = Nl),
    a.repeat.set(2, 2),
    (a.magFilter = pn),
    (a.minFilter = za),
    (a.colorSpace = Ii),
    IC.set(s, a),
    a
  );
}
function c3(s, e = "plain") {
  return new Pi({ color: s, map: jae(e) });
}
