// assets__index-Dp6GxvJu 220 — math
// Lines 121897-122208 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
const Hie = 18,
  Sr = 40,
  Nh = 1 / 60,
  Qg = class Qg {
    constructor(e, t) {
      w(this, "group", new pe());
      w(this, "ribbon");
      w(this, "ring");
      w(this, "positions", new Float32Array(Sr * 2 * 3));
      w(this, "along", new Float32Array(Sr * 2));
      w(this, "path", new Float32Array(Sr * 3));
      w(this, "uniforms", {
        uTime: { value: 0 },
        uPower: { value: 0 },
        uFade: { value: 0 },
      });
      w(this, "ringMat");
      w(this, "fade", 0);
      w(this, "tmp", new k());
      w(this, "side", new k());
      w(this, "tangent", new k());
      w(this, "normal", new k());
      this.solid = t;
      const i = new ci();
      (i.setAttribute("position", new oi(this.positions, 3).setUsage(Mn)),
        i.setAttribute("along", new oi(this.along, 1).setUsage(Mn)));
      const s = [];
      for (let o = 0; o < Sr - 1; o++)
        s.push(o * 2, o * 2 + 1, o * 2 + 2, o * 2 + 1, o * 2 + 3, o * 2 + 2);
      (i.setIndex(s),
        (this.ribbon = new le(
          i,
          new sn({
            uniforms: this.uniforms,
            transparent: !0,
            depthWrite: !1,
            side: Ai,
            vertexShader: `attribute float along; varying float vAlong;
        void main(){ vAlong = along; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
            fragmentShader: `uniform float uTime; uniform float uPower; uniform float uFade; varying float vAlong;
        void main(){
          float dash = smoothstep(0.42, 0.5, fract(vAlong * 1.6 - uTime * 2.2));
          float ends = smoothstep(0.0, 0.5, vAlong);
          vec3 color = mix(vec3(1.0), vec3(1.0, 0.72, 0.28), uPower);
          gl_FragColor = vec4(color, (0.25 + 0.6 * dash) * ends * uFade);
        }`,
          }),
        )),
        (this.ribbon.frustumCulled = !1),
        (this.ribbon.renderOrder = Gi.tracer),
        (this.ringMat = new qt({
          color: 16777215,
          transparent: !0,
          opacity: 0,
          depthWrite: !1,
          side: Ai,
          polygonOffset: !0,
          polygonOffsetFactor: -2,
          polygonOffsetUnits: -2,
        })),
        (this.ring = new le(new sh(0.3, 0.4, 28), this.ringMat)),
        this.ring.add(new le(new Kr(0.07, 12), this.ringMat)),
        (this.ring.renderOrder = Gi.tracer),
        this.group.add(this.ribbon, this.ring),
        (this.group.visible = !1),
        e.add(this.group));
    }
    update(e, t, i, s, o, a, r = 1) {
      if (
        ((this.fade = Math.max(
          0,
          Math.min(1, this.fade + (t ? e / 0.12 : -e / 0.1)),
        )),
        (this.group.visible = this.fade > 0.01),
        !this.group.visible || !t)
      ) {
        ((this.uniforms.uFade.value = this.fade),
          (this.ringMat.opacity = 0.85 * this.fade));
        return;
      }
      let l = i.x,
        c = i.y,
        h = i.z,
        d = s.x,
        u = s.y,
        f = s.z;
      const p = Math.ceil(ka.fuse / Nh),
        m = Math.max(1, Math.floor(p / (Sr - 1)));
      let y = 0,
        g = -1;
      const b = this.path,
        S = () => {
          ((b[y * 3] = l), (b[y * 3 + 1] = c), (b[y * 3 + 2] = h), y++);
        };
      S();
      for (let _ = 1; _ <= p && g < 0; _++) {
        u -= ka.gravity * r * Nh;
        const C = c + u * Nh;
        this.solid(l, C, h) ? (g = 1) : (c = C);
        const R = l + d * Nh;
        g < 0 && (this.solid(R, c, h) ? (g = 0) : (l = R));
        const L = h + f * Nh;
        (g < 0 && (this.solid(l, c, L) ? (g = 2) : (h = L)),
          (g >= 0 || _ % m === 0 || _ === p) &&
            (y < Sr
              ? S()
              : ((b[(Sr - 1) * 3] = l),
                (b[(Sr - 1) * 3 + 1] = c),
                (b[(Sr - 1) * 3 + 2] = h))));
      }
      const M = this.positions,
        x = this.along;
      let T = 0;
      for (let _ = 0; _ < Sr; _++) {
        const C = Math.min(_, y - 1),
          R = Math.max(0, C - 1),
          L = Math.min(y - 1, C + 1),
          N = b[C * 3],
          D = b[C * 3 + 1],
          H = b[C * 3 + 2];
        (this.tangent.set(
          b[L * 3] - b[R * 3],
          b[L * 3 + 1] - b[R * 3 + 1],
          b[L * 3 + 2] - b[R * 3 + 2],
        ),
          this.tmp.set(N - o.x, D - o.y, H - o.z));
        const G = this.tmp.length();
        (this.side.crossVectors(this.tangent, this.tmp),
          this.side.lengthSq() < 1e-8
            ? this.side.set(1, 0, 0)
            : this.side.normalize());
        const I = Math.max(0.012, G * 0.0032);
        (_ > 0 &&
          _ < y &&
          (T += Math.hypot(
            N - b[(C - 1) * 3],
            D - b[(C - 1) * 3 + 1],
            H - b[(C - 1) * 3 + 2],
          )),
          (M[_ * 6] = N + this.side.x * I),
          (M[_ * 6 + 1] = D + this.side.y * I),
          (M[_ * 6 + 2] = H + this.side.z * I),
          (M[_ * 6 + 3] = N - this.side.x * I),
          (M[_ * 6 + 4] = D - this.side.y * I),
          (M[_ * 6 + 5] = H - this.side.z * I),
          (x[_ * 2] = x[_ * 2 + 1] = T));
      }
      const A = this.ribbon.geometry;
      if (
        ((A.getAttribute("position").needsUpdate = !0),
        (A.getAttribute("along").needsUpdate = !0),
        this.normal.set(
          g === 0 ? -Math.sign(d) || 1 : 0,
          g === 1 ? -Math.sign(u) || 1 : 0,
          g === 2 ? -Math.sign(f) || 1 : 0,
        ),
        (this.ring.visible = g >= 0),
        g >= 0)
      ) {
        (this.ring.position.set(
          l + this.normal.x * 0.03,
          c + this.normal.y * 0.03,
          h + this.normal.z * 0.03,
        ),
          g === 1 &&
            (this.ring.position.y =
              (u < 0 ? Math.floor(c + u * Nh) + 1 : Math.ceil(c + u * Nh) - 1) +
              this.normal.y * 0.03),
          this.ring.quaternion.setFromUnitVectors(Qg.UP, this.normal));
        const _ = Math.max(1, Math.hypot(l - o.x, c - o.y, h - o.z) / 16);
        this.ring.scale.setScalar(_);
      }
      ((this.uniforms.uTime.value = (this.uniforms.uTime.value + e) % 1e3),
        (this.uniforms.uPower.value = a),
        (this.uniforms.uFade.value = this.fade),
        this.ringMat.color.setRGB(1, 1 - 0.28 * a, 1 - 0.72 * a),
        (this.ringMat.opacity = 0.85 * this.fade));
    }
    hide() {
      ((this.fade = 0), (this.group.visible = !1));
    }
  };
w(Qg, "UP", new k(0, 0, 1));
let jM = Qg;
const $b = 14198135,
  OR = 15120524,
  zie = 12158297,
  qb = 10251591,
  Uie = 4937275,
  NR = 4015921,
  Fie = 5924679;
function Gie(n) {
  const e = n.map(([i, s, o, a, r, l, c, h = 0, d = 0, u = 0]) => {
      const f = new Ct(i, s, o).toNonIndexed();
      (f.deleteAttribute("uv"),
        f.applyMatrix4(
          new bt().compose(
            new k(r, l, c),
            new Jt().setFromEuler(new hi(h, d, u)),
            new k(1, 1, 1),
          ),
        ));
      const p = new ze(a),
        m = new ze(),
        y = f.getAttribute("position").count,
        g = new Float32Array(y * 3),
        b = [0.94, 0.9, 1.08, 0.78, 0.96, 1];
      for (let S = 0; S < y; S++)
        m.copy(p)
          .multiplyScalar(b[Math.floor(S / 6)])
          .toArray(g, S * 3);
      return (f.setAttribute("color", new oi(g, 3)), f);
    }),
    t = no(e, !1);
  for (const i of e) i.dispose();
  return (t.computeBoundingSphere(), t);
}
const Wie = [
    [0.1, 0.094, 0.1, $b, 0, 0, 0],
    [0.104, 0.032, 0.028, OR, 0, 0.026, -0.045],
    [0.096, 0.036, 0.058, zie, 0, -0.039, -0.028],
    [0.03, 0.034, 0.072, $b, -0.055, -0.01, -0.012, 0, 0.12, 0],
    [0.022, 0.02, 0.03, OR, -0.055, 0.009, -0.042],
    [0.086, 0.084, 0.05, $b, 0, -0.003, 0.072],
  ],
  Vie = [
    [0.004, 0.052, 0.004, qb, -0.025, -0.013, -0.06],
    [0.004, 0.052, 0.004, qb, 0, -0.013, -0.06],
    [0.004, 0.052, 0.004, qb, 0.025, -0.013, -0.06],
  ],
  $ie = [
    [0.112, 0.11, 0.06, NR, 0, 0, 0.118],
    [0.104, 0.104, 0.56, Uie, 0, 0, 0.42],
    [0.106, 0.022, 0.5, Fie, 0, 0.044, 0.44],
    [0.02, 0.03, 0.03, NR, 0.056, 0.01, 0.2],
  ];
let DR = null,
  BR = null;
function qie() {
  return (DR ?? (DR = Gie([...Wie, ...Vie, ...$ie])), DR);
}
function ZI(n = 1.3) {
  BR ?? (BR = new Us({ vertexColors: !0, specular: 1315860, shininess: 7 }));
  const e = new le(qie(), BR);
  ((e.name = "fp-bare-arm-mesh"),
    (e.frustumCulled = !1),
    (e.userData.sharedGeometry = !0),
    (e.userData.sharedMaterial = !0),
    e.scale.setScalar(n));
  const t = new pe();
  return ((t.name = "fp-bare-arm"), t.add(e), t);
}
const HR = new bt(),
  Kb = new k(),
  Kie = new Jt();
new k();
function QI(n, e, t, i = 0) {
  (n.position.copy(e),
    Kb.set(0, 1, 0),
    HR.lookAt(t, e, Kb),
    n.quaternion.setFromRotationMatrix(HR),
    i && n.quaternion.multiply(Kie.setFromAxisAngle(Kb.set(0, 0, 1), i)));
}
const zR = new Jt(),
  UR = new Jt(),
  FR = new Jt(),
  Yie = new k(1, 0, 0),
  jie = new k(0, 1, 0),
  Xie = new k(0, 0, 1),
  GR = {
    jab: {
      x: -0.12,
      y: 0.05,
      z: -0.24,
      ry: 0.4,
      rx: 0.12,
      rx4: -0.05,
      rz4: 0.12,
      flick: 0,
    },
    chop: {
      x: -0.05,
      y: 0.03,
      z: -0.05,
      ry: 0.3,
      rx: -0.38,
      rx4: 0.06,
      rz4: -0.15,
      flick: -0.3,
    },
  };
function Zie(n, e, t) {
  if (n <= 0 || n >= 1)
    return ((t.x = t.y = t.z = t.flick = 0), t.q.identity(), t);
  const i = Math.sqrt(n),
    s = Math.sin(i * Math.PI),
    o = Math.sin(i * Math.PI * 2),
    a = Math.sin(n * Math.PI),
    r = Math.sin(n * n * Math.PI),
    l = e ? GR.jab : GR.chop;
  return (
    (t.x = l.x * s),
    (t.y = l.y * o),
    (t.z = l.z * a),
    zR.setFromAxisAngle(jie, l.ry * s),
    UR.setFromAxisAngle(Yie, l.rx * s + l.rx4 * r),
    FR.setFromAxisAngle(Xie, l.rz4 * r),
    t.q.copy(zR).multiply(UR).multiply(FR),
    (t.flick = l.flick * s),
    t
  );
}
