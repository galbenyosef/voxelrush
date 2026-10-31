// index-BeUlFSPp 194 — math
// Lines 105066-105378 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Woe {
  constructor(e, t) {
    ((this.scene = e),
      (this.sfx = t),
      (this.smokeMat = new Gi({
        uniforms: { uLight: { value: 1 } },
        vertexShader: fC,
        fragmentShader: Uoe,
        transparent: !0,
        depthWrite: !1,
        fog: !1,
      })),
      (this.smoke = new pC(zoe, this.smokeMat)),
      (this.glow = new pC(
        Foe,
        new Gi({
          vertexShader: fC,
          fragmentShader: Goe,
          transparent: !0,
          depthWrite: !1,
          blending: rs,
          fog: !1,
        }),
      )),
      (this.smoke.mesh.renderOrder = 5),
      (this.glow.mesh.renderOrder = 6),
      e.add(this.smoke.mesh, this.glow.mesh),
      (this.smoulder = kA
        .filter((i, n) => i.kind === "ruin" && n % 2 === 0)
        .map((i) => ({ x: i.x - 10, y: i.y + 2, z: i.z + 4, next: 0 }))));
  }
  smoke;
  glow;
  plumes = [];
  wind = new k(1.4, 0, 0.6);
  dust = new Map();
  flakT = 0;
  gunT = 4;
  smoulder;
  smokeMat;
  wreck(e, t) {
    for (
      this.plumes.push({
        x: e.x,
        y: e.y + 0.5,
        z: e.z,
        age: 0,
        life: t ? 95 : 80,
        next: 0,
        big: t,
      });
      this.plumes.length > 10;
    )
      this.plumes.shift();
    this.glow.add(
      this.puffOf(e.x, e.y + 2, e.z, 0, 4, 0, 0.5, 6, 14, 1, 0.62, 0.25, 1, !0),
    );
    for (let i = 0; i < 8; i++)
      this.smoke.add(
        this.puffOf(
          e.x,
          e.y + 2,
          e.z,
          (Math.random() - 0.5) * 10,
          5 + Math.random() * 6,
          (Math.random() - 0.5) * 10,
          5 + Math.random() * 3,
          4,
          13,
          0.09,
          0.08,
          0.075,
          0.85,
          !1,
        ),
      );
  }
  update(e, t, i) {
    const n = t.position,
      o = performance.now() / 1e3;
    this.smokeMat.uniforms.uLight.value = 0.35 + 0.65 * i.dayness;
    const a = o * 0.004;
    this.wind.set(Math.cos(a) * 1.6, 0, Math.sin(a) * 1.6);
    for (let c = this.plumes.length - 1; c >= 0; c--) {
      const h = this.plumes[c];
      if (((h.age += e), (h.next -= e), h.age > h.life)) {
        this.plumes.splice(c, 1);
        continue;
      }
      if (h.next > 0) continue;
      const d = h.age / h.life,
        u = 1 - d * 0.7,
        f = Math.hypot(h.x - n.x, h.z - n.z);
      ((h.next = (f > 1500 ? 0.3 : 0.14) / u),
        this.smoke.add(
          this.puffOf(
            h.x + (Math.random() - 0.5) * 2,
            h.y + 1.5,
            h.z + (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 1.5,
            (h.big ? 9 : 7) * u + Math.random() * 2,
            (Math.random() - 0.5) * 1.5,
            13 + Math.random() * 5,
            2.2,
            (h.big ? 24 : 18) * (0.8 + Math.random() * 0.4),
            0.075 + d * 0.08,
            0.07 + d * 0.075,
            0.066 + d * 0.075,
            0.78 * u,
            !1,
          ),
        ),
        d < 0.55 &&
          f < 2600 &&
          this.glow.add(
            this.puffOf(
              h.x + (Math.random() - 0.5) * 2.5,
              h.y + 0.8 + Math.random(),
              h.z + (Math.random() - 0.5) * 2.5,
              0,
              3 + Math.random() * 2,
              0,
              0.35 + Math.random() * 0.25,
              1.4,
              2.6 + Math.random() * 1.4,
              1,
              0.5 + Math.random() * 0.2,
              0.12,
              0.9 * (1 - d / 0.55),
              !0,
            ),
          ));
    }
    this.flakT -= e;
    const r = this.flakT <= 0;
    r && (this.flakT = 0.45 + Math.random() * 0.5);
    const l = [];
    for (const c of i.machines)
      if (!(c.hp <= 0)) {
        if ((l.push(c.pos), c.tank)) {
          const h = Math.hypot(c.vel.x, c.vel.z),
            d = c.pos.distanceTo(n);
          if (h < 2 || d > 1800 || (c.side === "me" && d < 30)) continue;
          const u = (this.dust.get(c.pos) ?? 0) - e;
          if (u > 0) {
            this.dust.set(c.pos, u);
            continue;
          }
          this.dust.set(c.pos, d > 600 ? 0.32 : 0.2);
          const f = 2.6 / h;
          for (const p of [-1.2, 1.2]) {
            const m = c.pos.x - c.vel.x * f + (c.vel.z / h) * p,
              g = c.pos.z - c.vel.z * f - (c.vel.x / h) * p;
            this.smoke.add(
              this.puffOf(
                m,
                c.pos.y + 0.4,
                g,
                -c.vel.x * 0.15 + (Math.random() - 0.5),
                0.8 + Math.random() * 0.8,
                -c.vel.z * 0.15 + (Math.random() - 0.5),
                2.4 + Math.random() * 1.6,
                1.1,
                4 + h * 0.4,
                0.5,
                0.42,
                0.31,
                0.13 + Math.min(0.14, h * 0.01),
                !1,
              ),
            );
          }
        } else if (c.jet && r)
          for (const h of i.zones)
            !h.owner ||
              !(h.owner !== i.team
                ? c.side === "ally" || c.side === "me"
                : c.side === "enemy") ||
              Math.hypot(c.pos.x - h.x, c.pos.z - h.z) > lv * 1.6 ||
              c.pos.y - h.y > fq.ceiling ||
              Math.random() < 0.35 ||
              this.flakBurst(c.pos, c.vel, n);
      }
    if (
      (this.dust.size > 64 && this.dust.clear(),
      (this.gunT -= e),
      this.gunT <= 0)
    ) {
      this.gunT = 2.5 + Math.random() * 4.5;
      const c = i.zones[Math.floor(Math.random() * i.zones.length)];
      if (c)
        for (let h = 0; h < 6; h++) {
          const d = Math.random() * Math.PI * 2,
            u = 200 + Math.random() * 600,
            f = c.x + Math.cos(d) * u,
            p = c.z + Math.sin(d) * u;
          if (Math.abs(f) > vn - 400 || Math.abs(p) > 900) continue;
          const m = Math.hypot(f - n.x, p - n.z);
          if (!(m < 650 || l.some((g) => Math.hypot(g.x - f, g.z - p) < 260))) {
            this.shellBurst(f, Math.max(Bs, vy(f, p)) + 1, p, m);
            break;
          }
        }
    }
    for (const c of this.smoulder) {
      if (((c.next -= e), c.next > 0)) continue;
      const h = Math.hypot(c.x - n.x, c.z - n.z);
      ((c.next = h > 2600 ? 2 : h > 1200 ? 0.8 : 0.45),
        !(h > 3200) &&
          this.smoke.add(
            this.puffOf(
              c.x + (Math.random() - 0.5) * 6,
              c.y,
              c.z + (Math.random() - 0.5) * 6,
              0,
              2.6 + Math.random(),
              0,
              10 + Math.random() * 4,
              2,
              11 + Math.random() * 5,
              0.3,
              0.29,
              0.28,
              0.42,
              !1,
            ),
          ));
    }
    (this.smoke.update(e, this.wind, n), this.glow.update(e, this.wind, n));
  }
  flakBurst(e, t, i) {
    const n = 0.6 + Math.random() * 0.9,
      o = 28 + Math.random() * 45,
      a = e.x + t.x * n + (Math.random() - 0.5) * o,
      r = e.y + t.y * n + (Math.random() - 0.3) * o * 0.6,
      l = e.z + t.z * n + (Math.random() - 0.5) * o;
    this.glow.add(
      this.puffOf(a, r, l, 0, 0, 0, 0.16, 3, 7, 1, 0.75, 0.4, 1, !0),
    );
    for (let h = 0; h < 5; h++)
      this.smoke.add(
        this.puffOf(
          a + (Math.random() - 0.5) * 3,
          r + (Math.random() - 0.5) * 3,
          l + (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 3,
          (Math.random() - 0.5) * 4,
          5 + Math.random() * 3,
          2.5,
          7 + Math.random() * 3,
          0.06,
          0.06,
          0.06,
          0.82,
          !1,
        ),
      );
    const c = Math.hypot(a - i.x, r - i.y, l - i.z);
    c < 1400 && this.sfx.distantRumble(c, !0);
  }
  shellBurst(e, t, i, n) {
    this.glow.add(
      this.puffOf(e, t + 2, i, 0, 0, 0, 0.22, 5, 12, 1, 0.7, 0.35, 1, !0),
    );
    for (let o = 0; o < 7; o++)
      this.smoke.add(
        this.puffOf(
          e + (Math.random() - 0.5) * 5,
          t + 1,
          i + (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 8,
          7 + Math.random() * 10,
          (Math.random() - 0.5) * 8,
          4 + Math.random() * 4,
          3,
          10 + Math.random() * 6,
          o < 3 ? 0.36 : 0.2,
          o < 3 ? 0.3 : 0.19,
          o < 3 ? 0.22 : 0.18,
          0.75,
          !1,
        ),
      );
    this.sfx.distantRumble(n);
  }
  puffOf(e, t, i, n, o, a, r, l, c, h, d, u, f, p) {
    return {
      x: e,
      y: t,
      z: i,
      vx: n,
      vy: o,
      vz: a,
      age: 0,
      life: r,
      s0: l,
      s1: c,
      r: h,
      g: d,
      b: u,
      a: f,
      rot: Math.random() * 6.28,
      spin: (Math.random() - 0.5) * 0.4,
      glow: p,
    };
  }
  dispose() {
    this.scene.remove(this.smoke.mesh, this.glow.mesh);
    for (const e of [this.smoke, this.glow])
      (e.mesh.geometry.dispose(), e.mesh.material.dispose());
  }
}
