// index-BeUlFSPp 192 — math
// Lines 104624-104935 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Boe {
  constructor(e) {
    ((this.scene = e),
      this.geo.setAttribute("position", new qt(this.pos, 3).setUsage(Bi)),
      this.geo.setAttribute("smoke", new qt(this.smoke, 4).setUsage(Bi)),
      this.geo.setAttribute("tint", new qt(this.tint, 4).setUsage(Bi)),
      this.geo.setIndex(new qt(this.index, 1).setUsage(Bi)),
      (this.material = new Gi({
        uniforms: { uTime: { value: 0 } },
        vertexShader: Doe,
        fragmentShader: Hoe,
        transparent: !0,
        depthWrite: !1,
        side: Mi,
        fog: !1,
      })),
      (this.mesh = new Q(this.geo, this.material)),
      (this.mesh.frustumCulled = !1),
      (this.mesh.renderOrder = 6),
      e.add(this.mesh));
    const t = document.createElement("canvas");
    t.width = t.height = 64;
    const i = t.getContext("2d"),
      n = i.createRadialGradient(32, 32, 0, 32, 32, 32);
    (n.addColorStop(0, "#ffffff"),
      n.addColorStop(0.14, "#fffbe6"),
      n.addColorStop(0.3, "#ffd27acc"),
      n.addColorStop(0.55, "#ff8a2a55"),
      n.addColorStop(1, "#ff4a0000"),
      (i.fillStyle = n),
      i.fillRect(0, 0, 64, 64),
      (this.flameTex = new Si(t)),
      (this.flameMat = new hn({
        map: this.flameTex,
        blending: rs,
        depthWrite: !1,
        fog: !1,
      })));
    const o = new Uint16Array(Yp * 6);
    for (let a = 0; a < Yp; a++)
      o.set(
        [a * 4, a * 4 + 1, a * 4 + 2, a * 4 + 2, a * 4 + 1, a * 4 + 3],
        a * 6,
      );
    (this.plume.setIndex(new qt(o, 1)),
      this.plume.setAttribute(
        "position",
        new qt(this.plumePos, 3).setUsage(Bi),
      ),
      this.plume.setAttribute("color", new qt(this.plumeCol, 4).setUsage(Bi)),
      (this.plumeMesh = new Q(
        this.plume,
        new Zt({
          vertexColors: !0,
          transparent: !0,
          depthWrite: !1,
          blending: rs,
          side: Mi,
          fog: !1,
        }),
      )),
      (this.plumeMesh.frustumCulled = !1),
      (this.plumeMesh.renderOrder = 7),
      e.add(this.plumeMesh));
  }
  trails = new Map();
  geo = new oi();
  pos = new Float32Array(Kp * 3);
  smoke = new Float32Array(Kp * 4);
  tint = new Float32Array(Kp * 4);
  index = new Uint32Array(Kp * 3);
  mesh;
  material;
  flameTex;
  flameMat;
  plume = new oi();
  plumePos = new Float32Array(Yp * 4 * 3);
  plumeCol = new Float32Array(Yp * 4 * 4);
  plumeMesh;
  t = 0;
  sun = new k(0.4, 0.8, 0.3);
  a = new k();
  b = new k();
  side = new k();
  toCam = new k();
  setSun(e) {
    this.sun.copy(e).normalize();
  }
  update(e, t, i) {
    this.t += e;
    const n = this.t;
    this.material.uniforms.uTime.value = n;
    for (const d of i) {
      let u = this.trails.get(d.id);
      if (!u) {
        const g = new Ws(this.flameMat);
        ((g.renderOrder = 7),
          this.scene.add(g),
          (u = {
            points: [],
            live: !0,
            seen: n,
            flame: g,
            last: d.pos.clone(),
            dir: new k(0, 0, -1),
            rocket: d.rocket,
            along: 0,
            seed: Math.random() * 100,
          }),
          this.trails.set(d.id, u),
          u.points.push(this.point(d.pos, n, 0)));
      }
      ((u.seen = n), (u.live = !0));
      const f = d.pos.distanceTo(u.last);
      f > 120
        ? u.points.push(this.point(d.pos, n - Jw, u.along))
        : f > 0.01 &&
          (u.dir.subVectors(d.pos, u.last).normalize(), (u.along += f));
      const p = u.points[u.points.length - 1],
        m = p ? Math.hypot(d.pos.x - p.x, d.pos.y - p.y, d.pos.z - p.z) : 1 / 0;
      ((m > Ooe || (n - p.t > Noe && m > 0.5)) &&
        (u.points.push(this.point(d.pos, n, u.along)),
        u.points.length > Poe && u.points.shift()),
        u.last.copy(d.pos),
        u.flame.position.copy(d.pos));
    }
    const o = (2 * Math.tan(ni.degToRad(t.fov) / 2)) / Math.max(1, innerHeight),
      a = t.position;
    let r = 0,
      l = 0,
      c = 0;
    for (const [d, u] of this.trails) {
      for (
        u.live && u.seen < n && ((u.live = !1), this.scene.remove(u.flame));
        u.points.length && n - u.points[0].t > Jw;
      )
        u.points.shift();
      if (!u.live && u.points.length < 2) {
        this.trails.delete(d);
        continue;
      }
      if (u.live) {
        const g = u.flame.position.distanceTo(a),
          y = g * o;
        (u.flame.scale.setScalar(
          Math.max(u.rocket ? 1.6 : 2.4, y * (u.rocket ? 7 : 10)) *
            (0.85 + Math.random() * 0.3),
        ),
          c < Yp && this.flame(c++, u, a, y));
      }
      const f = u.live
        ? [
            ...u.points,
            {
              x: u.last.x,
              y: u.last.y,
              z: u.last.z,
              t: n,
              dx: 0,
              dz: 0,
              puff: 1,
              along: u.along,
            },
          ]
        : u.points;
      if (r + f.length * 2 > Kp) break;
      const p = r,
        m = (g, y) => {
          const b = n - g.t,
            S = Math.sqrt(b);
          return y.set(
            g.x + g.dx * S + b * 0.6,
            g.y + b * 0.35,
            g.z + g.dz * S,
          );
        };
      for (let g = 0; g < f.length; g++) {
        const y = f[g],
          b = f[Math.min(f.length - 1, g + 2)],
          S = f[Math.max(0, g - 2)];
        (m(y, this.a),
          m(b, this.side),
          m(S, this.b),
          this.b.subVectors(this.side, this.b),
          this.b.lengthSq() < 1e-6 && this.b.copy(u.dir),
          this.toCam.copy(a).sub(this.a));
        const M = this.toCam.length();
        this.side.crossVectors(this.b, this.toCam).normalize();
        const E = n - y.t,
          A = E / Jw,
          T = 1 - Math.exp(-E * 1.1),
          x = Math.max(
            ((u.rocket ? 0.4 : 0.55) + T * (u.rocket ? 1.6 : 2.3) + E * 0.3) *
              y.puff,
            M * o * (u.rocket ? 1.6 : 2.1),
          ),
          R =
            Math.min(
              1,
              (1 - A) ** 1.6 *
                (u.rocket ? 0.66 : 0.78) *
                Math.min(1, (g + 1) / 2),
            ) *
            Math.min(1, (f.length - g) / 2.5 + 0.35) *
            ni.smoothstep(M, 6, 30),
          _ = this.side.dot(this.sun),
          C = Math.max(0, 1 - E / 0.12),
          P = 0.86 - A * 0.2;
        for (let O = -1; O <= 1; O += 2) {
          const B = r * 3,
            H = r * 4,
            D =
              0.86 +
              0.14 * Math.max(-1, Math.min(1, _ * O * 1.4)) +
              0.05 * this.sun.y;
          ((this.pos[B] = this.a.x + this.side.x * x * O),
            (this.pos[B + 1] = this.a.y + this.side.y * x * O),
            (this.pos[B + 2] = this.a.z + this.side.z * x * O),
            (this.smoke[H] = O),
            (this.smoke[H + 1] = y.along),
            (this.smoke[H + 2] = A),
            (this.smoke[H + 3] = u.seed));
          const U = P * D;
          ((this.tint[H] = U + C * (1 - U)),
            (this.tint[H + 1] = U + C * (0.82 - U)),
            (this.tint[H + 2] = U * 1.04 + C * (0.5 - U)),
            (this.tint[H + 3] = R),
            r++);
        }
      }
      for (let g = 0; g < f.length - 1; g++) {
        const y = p + g * 2,
          b = y + 2;
        ((this.index[l++] = y),
          (this.index[l++] = b),
          (this.index[l++] = y + 1),
          (this.index[l++] = y + 1),
          (this.index[l++] = b),
          (this.index[l++] = b + 1));
      }
    }
    this.geo.setDrawRange(0, l);
    for (const d of ["position", "smoke", "tint"]) {
      const u = this.geo.getAttribute(d);
      (u.clearUpdateRanges(),
        u.addUpdateRange(0, r * u.itemSize),
        (u.needsUpdate = !0));
    }
    const h = this.geo.getIndex();
    (h.clearUpdateRanges(),
      h.addUpdateRange(0, l),
      (h.needsUpdate = !0),
      this.plume.setDrawRange(0, c * 6));
    for (const d of ["position", "color"]) {
      const u = this.plume.getAttribute(d);
      (u.clearUpdateRanges(),
        u.addUpdateRange(0, c * 4 * u.itemSize),
        (u.needsUpdate = !0));
    }
  }
  flame(e, t, i, n) {
    const o =
        Math.max(t.rocket ? 3 : 5, n * (t.rocket ? 10 : 16)) *
        (0.8 + Math.random() * 0.4),
      a = Math.max(t.rocket ? 0.25 : 0.35, n * 1.6);
    (this.toCam.copy(i).sub(t.last),
      this.side.crossVectors(t.dir, this.toCam).normalize().multiplyScalar(a));
    for (let r = 0; r < 4; r++) {
      const l = r >= 2,
        c = r & 1 ? 1 : -1,
        h = (e * 4 + r) * 3,
        d = (e * 4 + r) * 4,
        u = l ? 0.35 : 1;
      ((this.plumePos[h] =
        t.last.x - (l ? t.dir.x * o : 0) + this.side.x * c * u),
        (this.plumePos[h + 1] =
          t.last.y - (l ? t.dir.y * o : 0) + this.side.y * c * u),
        (this.plumePos[h + 2] =
          t.last.z - (l ? t.dir.z * o : 0) + this.side.z * c * u),
        (this.plumeCol[d] = 1),
        (this.plumeCol[d + 1] = l ? 0.45 : 0.95),
        (this.plumeCol[d + 2] = l ? 0.08 : 0.75),
        (this.plumeCol[d + 3] = l ? 0 : 1));
    }
  }
  point(e, t, i) {
    const n = Math.random() * Math.PI * 2,
      o = 0.5 + Math.random() * 1.4;
    return {
      x: e.x,
      y: e.y,
      z: e.z,
      t,
      dx: Math.cos(n) * o,
      dz: Math.sin(n) * o,
      puff: 0.8 + Math.random() * 0.4,
      along: i,
    };
  }
  dispose() {
    for (const e of this.trails.values()) this.scene.remove(e.flame);
    (this.trails.clear(),
      this.scene.remove(this.mesh),
      this.scene.remove(this.plumeMesh),
      this.geo.dispose(),
      this.material.dispose(),
      this.flameMat.dispose(),
      this.flameTex.dispose(),
      this.plume.dispose(),
      this.plumeMesh.material.dispose());
  }
}
