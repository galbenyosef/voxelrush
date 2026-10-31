// index-BeUlFSPp 232 — float32array
// Lines 121468-121688 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function xle(s, e, t, i, n, o) {
  const a = Tle(s, e, t, i, n);
  return a
    ? Ale(
        a.map((r, l) => ({
          at: r.at,
          gain: r.gain,
          samples: Ele(r.spec, o, t * 31 + i * 7 + l),
        })),
        o,
      )
    : null;
}
const _le = 3e3,
  js = 800;
class Rle {
  mesh;
  n = 0;
  lighting = new cn(new Float32Array(js * 2), 2).setUsage(Bi);
  px = new Float32Array(js);
  py = new Float32Array(js);
  pz = new Float32Array(js);
  vx = new Float32Array(js);
  vy = new Float32Array(js);
  vz = new Float32Array(js);
  rx = new Float32Array(js);
  ry = new Float32Array(js);
  rz = new Float32Array(js);
  ax = new Float32Array(js);
  ay = new Float32Array(js);
  az = new Float32Array(js);
  size = new Float32Array(js);
  life = new Float32Array(js);
  maxLife = new Float32Array(js);
  grav = new Float32Array(js);
  drag = new Float32Array(js);
  floor = new Float32Array(js);
  bounce = new Float32Array(js);
  col = new Float32Array(js * 3);
  lightValid = new Uint8Array(js);
  colorDirty = new Uint8Array(js);
  lightFrame = 0;
  shape = new Uint8Array(js);
  dummy = new Xt();
  tmpColor = new Ge();
  constructor() {
    const e = new kt(1, 1, 1),
      t = new Pi({ vertexColors: !1 });
    (e.setAttribute("debrisLight", this.lighting),
      (t.onBeforeCompile = (i) => {
        ((i.vertexShader =
          `attribute vec2 debrisLight; varying vec2 vDebrisLight;
` + i.vertexShader),
          (i.vertexShader = i.vertexShader.replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
vDebrisLight=debrisLight;`,
          )),
          (i.fragmentShader =
            `varying vec2 vDebrisLight;
` + i.fragmentShader),
          (i.fragmentShader = Fv(i.fragmentShader, "vDebrisLight.x")),
          (i.fragmentShader = i.fragmentShader.replace(
            "#include <lights_fragment_end>",
            `#include <lights_fragment_end>
totalEmissiveRadiance += diffuseColor.rgb * vDebrisLight.y * vec3(1.0,0.88,0.62);`,
          )));
      }),
      (t.customProgramCacheKey = () => "debris-local-light-v1"),
      (this.mesh = new On(e, t, js)),
      this.mesh.instanceMatrix.setUsage(Bi),
      this.mesh.setColorAt(0, this.tmpColor.setRGB(1, 1, 1)),
      this.mesh.instanceColor.setUsage(Bi),
      (this.mesh.count = 0),
      (this.mesh.frustumCulled = !1),
      (this.mesh.castShadow = !1),
      (this.mesh.receiveShadow = !1));
  }
  clear() {
    ((this.n = 0), (this.mesh.count = 0));
  }
  spawn(e, t) {
    const i = Array.isArray(e.color) ? e.color : [e.color],
      n = e.spread ?? 0;
    for (let o = 0; o < e.count; o++) {
      if (this.n >= js) return;
      const a = this.n++;
      ((this.px[a] = e.pos.x + (Math.random() - 0.5) * 2 * n),
        (this.py[a] = e.pos.y + (Math.random() - 0.5) * 2 * n),
        (this.pz[a] = e.pos.z + (Math.random() - 0.5) * 2 * n));
      const r = e.vel;
      ((this.vx[a] = (r?.x ?? 0) + (Math.random() - 0.5) * 2 * e.speed),
        (this.vy[a] = (r?.y ?? 0) + (Math.random() - 0.5) * 2 * e.speed),
        (this.vz[a] = (r?.z ?? 0) + (Math.random() - 0.5) * 2 * e.speed),
        (this.rx[a] = Math.random() * 6.28),
        (this.ry[a] = Math.random() * 6.28),
        (this.rz[a] = Math.random() * 6.28));
      const l = e.spin ?? 9;
      ((this.ax[a] = (Math.random() - 0.5) * 2 * l),
        (this.ay[a] = (Math.random() - 0.5) * 2 * l),
        (this.az[a] = (Math.random() - 0.5) * 2 * l),
        (this.size[a] =
          e.size * t * (1 + (Math.random() - 0.5) * (e.sizeJitter ?? 0.6))));
      const c = e.life * (1 + (Math.random() - 0.5) * (e.lifeJitter ?? 0.4));
      ((this.life[a] = c),
        (this.maxLife[a] = c),
        (this.grav[a] = e.grav ?? 20),
        (this.drag[a] = e.drag ?? 0),
        (this.floor[a] = e.floorY ?? -1e9),
        (this.bounce[a] = e.bounce ?? 0.32),
        (this.shape[a] = e.shape === "blade" ? 1 : 0),
        this.tmpColor.set(i[Math.floor(Math.random() * i.length)]));
      const h = (e.colorJitter ?? 0.15) * (Math.random() - 0.5);
      ((this.col[a * 3] = Oe(this.tmpColor.r + h, 0, 1)),
        (this.col[a * 3 + 1] = Oe(this.tmpColor.g + h, 0, 1)),
        (this.col[a * 3 + 2] = Oe(this.tmpColor.b + h, 0, 1)),
        (this.lightValid[a] = 0),
        (this.colorDirty[a] = 1));
    }
  }
  move(e, t) {
    ((this.px[e] = this.px[t]),
      (this.py[e] = this.py[t]),
      (this.pz[e] = this.pz[t]),
      (this.vx[e] = this.vx[t]),
      (this.vy[e] = this.vy[t]),
      (this.vz[e] = this.vz[t]),
      (this.rx[e] = this.rx[t]),
      (this.ry[e] = this.ry[t]),
      (this.rz[e] = this.rz[t]),
      (this.ax[e] = this.ax[t]),
      (this.ay[e] = this.ay[t]),
      (this.az[e] = this.az[t]),
      (this.size[e] = this.size[t]),
      (this.life[e] = this.life[t]),
      (this.maxLife[e] = this.maxLife[t]),
      (this.grav[e] = this.grav[t]),
      (this.drag[e] = this.drag[t]),
      (this.floor[e] = this.floor[t]),
      (this.bounce[e] = this.bounce[t]),
      (this.shape[e] = this.shape[t]),
      (this.col[e * 3] = this.col[t * 3]),
      (this.col[e * 3 + 1] = this.col[t * 3 + 1]),
      (this.col[e * 3 + 2] = this.col[t * 3 + 2]),
      (this.lightValid[e] = this.lightValid[t]),
      this.lighting.setXY(e, this.lighting.getX(t), this.lighting.getY(t)),
      (this.colorDirty[e] = 1));
  }
  update(e, t) {
    this.lightFrame++;
    for (let a = 0; a < this.n; a++) {
      if (((this.life[a] -= e), this.life[a] <= 0)) {
        (this.move(a, --this.n), a--);
        continue;
      }
      if (((this.vy[a] -= this.grav[a] * e), this.drag[a] > 0)) {
        const l = Math.max(0, 1 - this.drag[a] * e);
        ((this.vx[a] *= l), (this.vy[a] *= l), (this.vz[a] *= l));
      }
      ((this.px[a] += this.vx[a] * e),
        (this.py[a] += this.vy[a] * e),
        (this.pz[a] += this.vz[a] * e));
      const r = this.floor[a] + this.size[a] * 0.5;
      (this.py[a] < r &&
        ((this.py[a] = r),
        this.vy[a] < -1.1
          ? ((this.vy[a] *= -this.bounce[a]),
            (this.vx[a] *= 0.66),
            (this.vz[a] *= 0.66),
            (this.ax[a] *= 0.5),
            (this.ay[a] *= 0.5),
            (this.az[a] *= 0.5))
          : ((this.vy[a] = 0),
            (this.vx[a] *= 0.8),
            (this.vz[a] *= 0.8),
            (this.ax[a] *= 0.72),
            (this.ay[a] *= 0.72),
            (this.az[a] *= 0.72))),
        (this.rx[a] += this.ax[a] * e),
        (this.ry[a] += this.ay[a] * e),
        (this.rz[a] += this.az[a] * e));
    }
    const i = this.dummy;
    let n = !1,
      o = !1;
    for (let a = 0; a < this.n; a++) {
      const r = this.life[a] / this.maxLife[a],
        l = this.size[a] * (r < 0.33 ? r / 0.33 : 1);
      if (
        (i.position.set(this.px[a], this.py[a], this.pz[a]),
        i.rotation.set(this.rx[a], this.ry[a], this.rz[a]),
        this.shape[a] === 1
          ? i.scale.set(l * 0.32, l * 2.8, l * 0.14)
          : i.scale.set(l, l, l),
        i.updateMatrix(),
        this.mesh.setMatrixAt(a, i.matrix),
        this.colorDirty[a] &&
          (this.tmpColor.setRGB(
            this.col[a * 3],
            this.col[a * 3 + 1],
            this.col[a * 3 + 2],
          ),
          this.mesh.setColorAt(a, this.tmpColor),
          (this.colorDirty[a] = 0),
          (n = !0)),
        !this.lightValid[a] || (a + this.lightFrame) % 4 === 0)
      ) {
        const c = t?.(i.position.x, i.position.y, i.position.z);
        (this.lighting.setXY(a, c?.sky ?? 1, c?.block ?? 0),
          (this.lightValid[a] = 1),
          (o = !0));
      }
    }
    (o && (this.lighting.needsUpdate = !0),
      (this.mesh.count = this.n),
      (this.mesh.instanceMatrix.needsUpdate = !0),
      n &&
        this.mesh.instanceColor &&
        (this.mesh.instanceColor.needsUpdate = !0));
  }
}
