// index-BeUlFSPp 242 — math
// Lines 128948-129296 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class VT {
  constructor(e, t) {
    this.solid = t;
    const i = new oi();
    (i.setAttribute("position", new qt(this.positions, 3).setUsage(Bi)),
      i.setAttribute("along", new qt(this.along, 1).setUsage(Bi)));
    const n = [];
    for (let o = 0; o < fl - 1; o++)
      n.push(o * 2, o * 2 + 1, o * 2 + 2, o * 2 + 1, o * 2 + 3, o * 2 + 2);
    (i.setIndex(n),
      (this.ribbon = new Q(
        i,
        new Gi({
          uniforms: this.uniforms,
          transparent: !0,
          depthWrite: !1,
          side: Mi,
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
      (this.ribbon.renderOrder = zi.tracer),
      (this.ringMat = new Zt({
        color: 16777215,
        transparent: !0,
        opacity: 0,
        depthWrite: !1,
        side: Mi,
        polygonOffset: !0,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2,
      })),
      (this.ring = new Q(new Z0(0.3, 0.4, 28), this.ringMat)),
      this.ring.add(new Q(new Bl(0.07, 12), this.ringMat)),
      (this.ring.renderOrder = zi.tracer),
      this.group.add(this.ribbon, this.ring),
      (this.group.visible = !1),
      e.add(this.group));
  }
  group = new re();
  ribbon;
  ring;
  positions = new Float32Array(fl * 2 * 3);
  along = new Float32Array(fl * 2);
  path = new Float32Array(fl * 3);
  uniforms = { uTime: { value: 0 }, uPower: { value: 0 }, uFade: { value: 0 } };
  ringMat;
  fade = 0;
  tmp = new k();
  side = new k();
  tangent = new k();
  normal = new k();
  static UP = new k(0, 0, 1);
  update(e, t, i, n, o, a, r = 1) {
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
      d = n.x,
      u = n.y,
      f = n.z;
    const p = Math.ceil(fr.fuse / Ah),
      m = Math.max(1, Math.floor(p / (fl - 1)));
    let g = 0,
      y = -1;
    const b = this.path,
      S = () => {
        ((b[g * 3] = l), (b[g * 3 + 1] = c), (b[g * 3 + 2] = h), g++);
      };
    S();
    for (let x = 1; x <= p && y < 0; x++) {
      u -= fr.gravity * r * Ah;
      const R = c + u * Ah;
      this.solid(l, R, h) ? (y = 1) : (c = R);
      const _ = l + d * Ah;
      y < 0 && (this.solid(_, c, h) ? (y = 0) : (l = _));
      const C = h + f * Ah;
      (y < 0 && (this.solid(l, c, C) ? (y = 2) : (h = C)),
        (y >= 0 || x % m === 0 || x === p) &&
          (g < fl
            ? S()
            : ((b[(fl - 1) * 3] = l),
              (b[(fl - 1) * 3 + 1] = c),
              (b[(fl - 1) * 3 + 2] = h))));
    }
    const M = this.positions,
      E = this.along;
    let A = 0;
    for (let x = 0; x < fl; x++) {
      const R = Math.min(x, g - 1),
        _ = Math.max(0, R - 1),
        C = Math.min(g - 1, R + 1),
        P = b[R * 3],
        O = b[R * 3 + 1],
        B = b[R * 3 + 2];
      (this.tangent.set(
        b[C * 3] - b[_ * 3],
        b[C * 3 + 1] - b[_ * 3 + 1],
        b[C * 3 + 2] - b[_ * 3 + 2],
      ),
        this.tmp.set(P - o.x, O - o.y, B - o.z));
      const H = this.tmp.length();
      (this.side.crossVectors(this.tangent, this.tmp),
        this.side.lengthSq() < 1e-8
          ? this.side.set(1, 0, 0)
          : this.side.normalize());
      const D = Math.max(0.012, H * 0.0032);
      (x > 0 &&
        x < g &&
        (A += Math.hypot(
          P - b[(R - 1) * 3],
          O - b[(R - 1) * 3 + 1],
          B - b[(R - 1) * 3 + 2],
        )),
        (M[x * 6] = P + this.side.x * D),
        (M[x * 6 + 1] = O + this.side.y * D),
        (M[x * 6 + 2] = B + this.side.z * D),
        (M[x * 6 + 3] = P - this.side.x * D),
        (M[x * 6 + 4] = O - this.side.y * D),
        (M[x * 6 + 5] = B - this.side.z * D),
        (E[x * 2] = E[x * 2 + 1] = A));
    }
    const T = this.ribbon.geometry;
    if (
      ((T.getAttribute("position").needsUpdate = !0),
      (T.getAttribute("along").needsUpdate = !0),
      this.normal.set(
        y === 0 ? -Math.sign(d) || 1 : 0,
        y === 1 ? -Math.sign(u) || 1 : 0,
        y === 2 ? -Math.sign(f) || 1 : 0,
      ),
      (this.ring.visible = y >= 0),
      y >= 0)
    ) {
      (this.ring.position.set(
        l + this.normal.x * 0.03,
        c + this.normal.y * 0.03,
        h + this.normal.z * 0.03,
      ),
        y === 1 &&
          (this.ring.position.y =
            (u < 0 ? Math.floor(c + u * Ah) + 1 : Math.ceil(c + u * Ah) - 1) +
            this.normal.y * 0.03),
        this.ring.quaternion.setFromUnitVectors(VT.UP, this.normal));
      const x = Math.max(1, Math.hypot(l - o.x, c - o.y, h - o.z) / 16);
      this.ring.scale.setScalar(x);
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
}
const fM = 14198135,
  rL = 15120524,
  sce = 12158297,
  pM = 10251591,
  nce = 4937275,
  lL = 4015921,
  oce = 5924679;
function ace(s) {
  const e = s.map(([i, n, o, a, r, l, c, h = 0, d = 0, u = 0]) => {
      const f = new kt(i, n, o).toNonIndexed();
      (f.deleteAttribute("uv"),
        f.applyMatrix4(
          new Rt().compose(
            new k(r, l, c),
            new hi().setFromEuler(new pi(h, d, u)),
            new k(1, 1, 1),
          ),
        ));
      const p = new Ge(a),
        m = new Ge(),
        g = f.getAttribute("position").count,
        y = new Float32Array(g * 3),
        b = [0.94, 0.9, 1.08, 0.78, 0.96, 1];
      for (let S = 0; S < g; S++)
        m.copy(p)
          .multiplyScalar(b[Math.floor(S / 6)])
          .toArray(y, S * 3);
      return (f.setAttribute("color", new qt(y, 3)), f);
    }),
    t = Eo(e, !1);
  for (const i of e) i.dispose();
  return (t.computeBoundingSphere(), t);
}
const rce = [
    [0.1, 0.094, 0.1, fM, 0, 0, 0],
    [0.104, 0.032, 0.028, rL, 0, 0.026, -0.045],
    [0.096, 0.036, 0.058, sce, 0, -0.039, -0.028],
    [0.03, 0.034, 0.072, fM, -0.055, -0.01, -0.012, 0, 0.12, 0],
    [0.022, 0.02, 0.03, rL, -0.055, 0.009, -0.042],
    [0.086, 0.084, 0.05, fM, 0, -0.003, 0.072],
  ],
  lce = [
    [0.004, 0.052, 0.004, pM, -0.025, -0.013, -0.06],
    [0.004, 0.052, 0.004, pM, 0, -0.013, -0.06],
    [0.004, 0.052, 0.004, pM, 0.025, -0.013, -0.06],
  ],
  cce = [
    [0.112, 0.11, 0.06, lL, 0, 0, 0.118],
    [0.104, 0.104, 0.56, nce, 0, 0, 0.42],
    [0.106, 0.022, 0.5, oce, 0, 0.044, 0.44],
    [0.02, 0.03, 0.03, lL, 0.056, 0.01, 0.2],
  ];
let cL = null,
  hL = null;
function hce() {
  return ((cL ??= ace([...rce, ...lce, ...cce])), cL);
}
function u9(s = 1.3) {
  hL ??= new oo({ vertexColors: !0, specular: 1315860, shininess: 7 });
  const e = new Q(hce(), hL);
  ((e.name = "fp-bare-arm-mesh"),
    (e.frustumCulled = !1),
    (e.userData.sharedGeometry = !0),
    (e.userData.sharedMaterial = !0),
    e.scale.setScalar(s));
  const t = new re();
  return ((t.name = "fp-bare-arm"), t.add(e), t);
}
const dL = new Rt(),
  mM = new k(),
  dce = new hi();
new k();
function f9(s, e, t, i = 0) {
  (s.position.copy(e),
    mM.set(0, 1, 0),
    dL.lookAt(t, e, mM),
    s.quaternion.setFromRotationMatrix(dL),
    i && s.quaternion.multiply(dce.setFromAxisAngle(mM.set(0, 0, 1), i)));
}
const uL = new hi(),
  fL = new hi(),
  pL = new hi(),
  uce = new k(1, 0, 0),
  fce = new k(0, 1, 0),
  pce = new k(0, 0, 1),
  mL = {
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
function mce(s, e, t) {
  if (s <= 0 || s >= 1)
    return ((t.x = t.y = t.z = t.flick = 0), t.q.identity(), t);
  const i = Math.sqrt(s),
    n = Math.sin(i * Math.PI),
    o = Math.sin(i * Math.PI * 2),
    a = Math.sin(s * Math.PI),
    r = Math.sin(s * s * Math.PI),
    l = e ? mL.jab : mL.chop;
  return (
    (t.x = l.x * n),
    (t.y = l.y * o),
    (t.z = l.z * a),
    uL.setFromAxisAngle(fce, l.ry * n),
    fL.setFromAxisAngle(uce, l.rx * n + l.rx4 * r),
    pL.setFromAxisAngle(pce, l.rz4 * r),
    t.q.copy(uL).multiply(fL).multiply(pL),
    (t.flick = l.flick * n),
    t
  );
}
const p9 = new k(0.95, -0.92, 0.05),
  LE = new k(),
  IE = new k(),
  gL = new Rt(),
  gce = new hi(),
  qh = {
    empty: { hip: [0.27, -0.22, -0.46], roll: -0.75, pivotAlong: 0.85 },
    block: {
      hip: [0.26, -0.22, -0.5],
      roll: -0.4,
      pivotAlong: 0.85,
      size: 0.18,
      at: [-0.035, 0.115, -0.085],
      rot: [0.12, Math.PI / 4, 0.02],
    },
    item: {
      hip: [0.26, -0.23, -0.5],
      roll: -0.45,
      pivotAlong: 0.85,
      scale: 0.45,
      at: [-0.01, 0.085, -0.045],
      rot: [0.05, -1.05, 0.32],
    },
    stem: { at: [-0.004, 0.058, -0.022], rot: [-0.18, Math.PI / 4, 0.1] },
    tool: { roll: -Math.PI / 2, pivotAlong: 0.8 },
  },
  yce = new Set([
    "torch",
    "plant",
    "lantern",
    "chain",
    "fence",
    "gate",
    "door",
    "candle",
    "hanging",
    "ladder",
    "rail",
    "wire",
    "web",
    "litter",
  ]);
function m9(s, e, t) {
  return (s.updateMatrix(), t.set(0, 0, e).applyMatrix4(s.matrix));
}
