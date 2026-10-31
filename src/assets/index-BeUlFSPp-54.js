// index-BeUlFSPp 54 — itemsize
// Lines 46976-47228 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function B_(s) {
  let e,
    t,
    i,
    n = -1,
    o = 0;
  for (let c = 0; c < s.length; ++c) {
    const h = s[c];
    if ((e === void 0 && (e = h.array.constructor), e !== h.array.constructor))
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.",
        ),
        null
      );
    if ((t === void 0 && (t = h.itemSize), t !== h.itemSize))
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.",
        ),
        null
      );
    if ((i === void 0 && (i = h.normalized), i !== h.normalized))
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.",
        ),
        null
      );
    if ((n === -1 && (n = h.gpuType), n !== h.gpuType))
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.",
        ),
        null
      );
    o += h.count * t;
  }
  const a = new e(o),
    r = new qt(a, t, i);
  let l = 0;
  for (let c = 0; c < s.length; ++c) {
    const h = s[c];
    if (h.isInterleavedBufferAttribute) {
      const d = l / t;
      for (let u = 0, f = h.count; u < f; u++)
        for (let p = 0; p < t; p++) {
          const m = h.getComponent(u, p);
          r.setComponent(u + d, p, m);
        }
    } else a.set(h.array, l);
    l += h.count * t;
  }
  return (n !== void 0 && (r.gpuType = n), r);
}
function _K(s, e = 1e-4) {
  e = Math.max(e, Number.EPSILON);
  const t = {},
    i = s.getIndex(),
    n = s.getAttribute("position"),
    o = i ? i.count : n.count;
  let a = 0;
  const r = Object.keys(s.attributes),
    l = {},
    c = {},
    h = [],
    d = ["getX", "getY", "getZ", "getW"],
    u = ["setX", "setY", "setZ", "setW"];
  for (let b = 0, S = r.length; b < S; b++) {
    const M = r[b],
      E = s.attributes[M];
    l[M] = new E.constructor(
      new E.array.constructor(E.count * E.itemSize),
      E.itemSize,
      E.normalized,
    );
    const A = s.morphAttributes[M];
    A &&
      (c[M] || (c[M] = []),
      A.forEach((T, x) => {
        const R = new T.array.constructor(T.count * T.itemSize);
        c[M][x] = new T.constructor(R, T.itemSize, T.normalized);
      }));
  }
  const f = e * 0.5,
    p = Math.log10(1 / e),
    m = Math.pow(10, p),
    g = f * m;
  for (let b = 0; b < o; b++) {
    const S = i ? i.getX(b) : b;
    let M = "";
    for (let E = 0, A = r.length; E < A; E++) {
      const T = r[E],
        x = s.getAttribute(T),
        R = x.itemSize;
      for (let _ = 0; _ < R; _++) M += `${~~(x[d[_]](S) * m + g)},`;
    }
    if (M in t) h.push(t[M]);
    else {
      for (let E = 0, A = r.length; E < A; E++) {
        const T = r[E],
          x = s.getAttribute(T),
          R = s.morphAttributes[T],
          _ = x.itemSize,
          C = l[T],
          P = c[T];
        for (let O = 0; O < _; O++) {
          const B = d[O],
            H = u[O];
          if ((C[H](a, x[B](S)), R))
            for (let D = 0, U = R.length; D < U; D++) P[D][H](a, R[D][B](S));
        }
      }
      ((t[M] = a), h.push(a), a++);
    }
  }
  const y = s.clone();
  for (const b in s.attributes) {
    const S = l[b];
    if (
      (y.setAttribute(
        b,
        new S.constructor(
          S.array.slice(0, a * S.itemSize),
          S.itemSize,
          S.normalized,
        ),
      ),
      b in c)
    )
      for (let M = 0; M < c[b].length; M++) {
        const E = c[b][M];
        y.morphAttributes[b][M] = new E.constructor(
          E.array.slice(0, a * E.itemSize),
          E.itemSize,
          E.normalized,
        );
      }
  }
  return (y.setIndex(h), y);
}
const b0 = 3881525,
  MO = 5591626,
  SO = 3093802,
  RK = 4937275,
  z_ = 4015921,
  kK = 12094051;
function kb(s) {
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
        m = f.getAttribute("position").count,
        g = new Float32Array(m * 3);
      for (let y = 0; y < m; y++) p.toArray(g, y * 3);
      return (f.setAttribute("color", new qt(g, 3)), f);
    }),
    t = Eo(e, !1);
  for (const i of e) i.dispose();
  return t;
}
const CK = [
    [0.03, 0.085, 0.078, b0, 0.037, 0, 0.012],
    [0.034, 0.03, 0.08, MO, 0.042, 0.032, 0.006],
    [0.072, 0.058, 0.026, b0, 0.004, -0.022, -0.036],
    [0.022, 0.058, 0.032, b0, -0.03, -0.022, -0.016],
    [0.018, 0.018, 0.052, b0, 0.012, 0.03, -0.052],
    [0.02, 0.021, 0.056, b0, -0.027, 0.036, -0.004, 0, 0.15, 0],
    [0.062, 0.058, 0.05, SO, 0.03, -0.056, 0.044, 0.35],
  ],
  LK = [
    [0.072, 0.024, 0.088, b0, -0.004, -0.034, 0],
    [0.026, 0.056, 0.082, b0, 0.034, -0.012, -0.004],
    [0.022, 0.02, 0.074, MO, 0.026, 0.02, -0.004],
    [0.018, 0.02, 0.066, b0, -0.031, 0.016, -0.012],
    [0.058, 0.054, 0.05, SO, -0.022, -0.052, 0.05, 0.3],
  ],
  IK = new k(0.03, -0.07, 0.062),
  PK = new k(-0.024, -0.066, 0.07),
  OK = [
    [0.07, 0.074, 0.4, RK, 0, 0, 0.21],
    [0.074, 0.02, 0.36, z_, 0, 0.03, 0.22],
    [0.076, 0.08, 0.045, z_, 0, 0, 0.02],
    [0.052, 0.05, 0.02, kK, 0, 0, -0.004],
  ],
  NK = 0.41;
let bp = null;
function DK(s = !1) {
  bp ??= { r: kb(CK), l: kb(LK), arm: kb(OK) };
  const e = new oo({ vertexColors: !0, specular: 1381653, shininess: 8 }),
    t = (i, n) => {
      const o = new Q(i, e);
      return (
        (o.name = n),
        (o.frustumCulled = !1),
        (o.userData.sharedGeometry = !0),
        o
      );
    };
  return {
    right: {
      hand: t(bp.r, "fp-hand-r"),
      forearm: t(bp.arm, "fp-forearm-r"),
      wrist: IK,
      elbowHip: new k(0.27, -0.64, 0.12),
      elbowAds: new k(0.2, -0.52, 0.12),
    },
    left: {
      hand: t(bp.l, "fp-hand-l"),
      forearm: t(bp.arm, "fp-forearm-l"),
      wrist: PK,
      elbowHip: s ? new k(-0.16, -0.64, 0.06) : new k(-0.2, -0.64, -0.22),
      elbowAds: s ? new k(-0.2, -0.54, 0.08) : new k(-0.25, -0.54, -0.16),
    },
  };
}
const F_ = new Rt(),
  q2 = new k(),
  U_ = new k(),
  HK = new k(0, 1, 0);
function G_(s, e, t, i) {
  (s.hand.position.copy(e),
    s.hand.quaternion.copy(t),
    q2.copy(s.wrist).applyQuaternion(t).add(e),
    s.forearm.position.copy(q2),
    U_.subVectors(i, q2));
  const n = Math.max(0.05, U_.length());
  (F_.lookAt(i, q2, HK),
    s.forearm.quaternion.setFromRotationMatrix(F_),
    s.forearm.scale.set(1, 1, Math.max(0.3, n / NK)));
}
const l1 = (s) => {
  const e = Math.min(1, Math.max(0, s));
  return e * e * (3 - 2 * e);
};
function zr(s, e) {
  if (e <= s[0][0]) return [s[0], s[0], 0];
  for (let i = 1; i < s.length; i++)
    if (e <= s[i][0]) {
      const n = s[i - 1],
        o = s[i];
      return [n, o, l1((e - n[0]) / Math.max(1e-4, o[0] - n[0]))];
    }
  const t = s[s.length - 1];
  return [t, t, 0];
}
