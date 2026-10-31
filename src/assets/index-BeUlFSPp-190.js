// index-BeUlFSPp 190 — pos
// Lines 104156-104316 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Coe {
  constructor(e, t, i) {
    ((this.scene = e), (this.speed = t), (this.range = i));
    const n = new Uint16Array(qp * 6);
    for (let o = 0; o < qp; o++)
      n.set(
        [o * 4, o * 4 + 1, o * 4 + 2, o * 4 + 2, o * 4 + 1, o * 4 + 3],
        o * 6,
      );
    (this.geo.setIndex(new qt(n, 1)),
      this.geo.setAttribute("position", new qt(this.pos, 3).setUsage(Bi)),
      this.geo.setAttribute("color", new qt(this.col, 4).setUsage(Bi)),
      (this.mesh = new Q(
        this.geo,
        new Zt({
          vertexColors: !0,
          transparent: !0,
          depthWrite: !1,
          blending: rs,
          side: Mi,
          fog: !1,
        }),
      )),
      (this.mesh.frustumCulled = !1),
      (this.mesh.renderOrder = 7),
      e.add(this.mesh));
  }
  rounds = [];
  spare = [];
  from = new k();
  dir = new k();
  side = new k();
  toCam = new k();
  fired = 0;
  geo = new oi();
  pos = new Float32Array(qp * 4 * 3);
  col = new Float32Array(qp * 4 * 4);
  mesh;
  fire(e, t, i) {
    const n = this.spare.pop() ?? {
      pos: new k(),
      vel: new k(),
      origin: new k(),
      life: 0,
      tracer: !1,
      age: 0,
    };
    (n.pos.copy(e),
      n.origin.copy(e),
      n.vel.copy(t).multiplyScalar(this.speed).add(i),
      (n.life = this.range / this.speed + 0.05),
      (n.tracer = (this.fired++ & 2) === 0),
      (n.age = 0),
      this.rounds.push(n));
  }
  update(e, t, i) {
    for (let n = this.rounds.length - 1; n >= 0; n--) {
      const o = this.rounds[n],
        a = Math.min(e, o.life);
      this.from.copy(o.pos);
      const r = o.vel.length() * a;
      this.dir.copy(o.vel).normalize();
      const l = r > 0.01 ? t(this.from, this.dir, r, o.origin) : null;
      (l ? o.pos.copy(l) : o.pos.addScaledVector(o.vel, a),
        (o.life -= a),
        (o.age += a),
        (l || o.life <= 0) && (this.rounds.splice(n, 1), this.spare.push(o)));
    }
    this.draw(i);
  }
  draw(e) {
    const t = (2 * Math.tan(ni.degToRad(e.fov) / 2)) / Math.max(1, innerHeight),
      i = e.position;
    let n = 0;
    for (const o of this.rounds) {
      if (!o.tracer || n >= qp) continue;
      const a = o.vel.length(),
        r = Math.min(a * koe, a * o.age);
      if (r < 0.5) continue;
      (this.dir.copy(o.vel).multiplyScalar(1 / a),
        this.toCam.copy(i).sub(o.pos));
      const l = this.toCam.length(),
        c = Math.max(0.12, l * t * 1.1);
      this.side
        .crossVectors(this.dir, this.toCam)
        .normalize()
        .multiplyScalar(c);
      const h = Math.min(1, o.life / 0.15),
        d = n * 4;
      for (let u = 0; u < 4; u++) {
        const f = u >= 2,
          p = u & 1 ? 1 : -1,
          m = (d + u) * 3,
          g = (d + u) * 4;
        ((this.pos[m] =
          o.pos.x - (f ? this.dir.x * r : 0) + this.side.x * p * (f ? 0.5 : 1)),
          (this.pos[m + 1] =
            o.pos.y -
            (f ? this.dir.y * r : 0) +
            this.side.y * p * (f ? 0.5 : 1)),
          (this.pos[m + 2] =
            o.pos.z -
            (f ? this.dir.z * r : 0) +
            this.side.z * p * (f ? 0.5 : 1)),
          (this.col[g] = f ? 0.55 : 1),
          (this.col[g + 1] = f ? 0.22 : 0.93),
          (this.col[g + 2] = f ? 0.05 : 0.7),
          (this.col[g + 3] = (f ? 0 : 1) * h));
      }
      n++;
    }
    this.geo.setDrawRange(0, n * 6);
    for (const o of ["position", "color"]) {
      const a = this.geo.getAttribute(o);
      (a.clearUpdateRanges(),
        a.addUpdateRange(0, n * 4 * a.itemSize),
        (a.needsUpdate = !0));
    }
  }
  clear() {
    (this.spare.push(...this.rounds),
      (this.rounds.length = 0),
      this.geo.setDrawRange(0, 0));
  }
  dispose() {
    (this.scene.remove(this.mesh),
      this.geo.dispose(),
      this.mesh.material.dispose());
  }
}
function Loe(s, e, t, i, n, o) {
  const a = t.x - s.x,
    r = t.y - s.y,
    l = t.z - s.z,
    c = i.x - e.x,
    h = i.y - e.y,
    d = i.z - e.z,
    u = c * c + h * h + d * d - n * n,
    f = 2 * (a * c + r * h + l * d),
    p = a * a + r * r + l * l;
  let m;
  if (Math.abs(u) < 1e-6) m = f < 0 ? -p / f : -1;
  else {
    const y = f * f - 4 * u * p;
    if (y < 0) return null;
    const b = Math.sqrt(y),
      S = (-f - b) / (2 * u),
      M = (-f + b) / (2 * u);
    m = S > 0 && M > 0 ? Math.min(S, M) : Math.max(S, M);
  }
  if (!(m > 0)) return null;
  o.set(a + c * m, r + h * m, l + d * m);
  const g = o.length();
  return (
    o
      .multiplyScalar(1 / g)
      .multiplyScalar(Math.hypot(a, r, l))
      .add(s),
    { time: m, dist: g }
  );
}
