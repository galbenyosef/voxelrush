// index-Dp6GxvJu 23 — console
// Lines 35571-35914 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const Sh = [
    [0, { x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0 }],
    [0.5, { x: -0.16, y: 0.12, z: -0.11, rx: 0.06, ry: -0.6, rz: 0.32 }],
    [1.25, { x: -0.19, y: 0.14, z: -0.15, rx: 0.14, ry: -1.08, rz: 0.46 }],
    [1.9, { x: -0.13, y: 0.16, z: -0.14, rx: -0.04, ry: 0.42, rz: -0.28 }],
    [2.55, { x: -0.09, y: 0.1, z: -0.12, rx: 0.3, ry: 0.16, rz: -0.1 }],
    [Rp, { x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0 }],
  ],
  sT = ["x", "y", "z", "rx", "ry", "rz"];
function ak(n, e = { x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0 }) {
  for (const f of sT) e[f] = 0;
  if (n <= 0 || n >= Rp) return e;
  let t = 0;
  for (; t < Sh.length - 2 && n > Sh[t + 1][0];) t++;
  const [i, s] = Sh[t],
    [o, a] = Sh[t + 1],
    r = Sh[Math.max(0, t - 1)][1],
    l = Sh[Math.min(Sh.length - 1, t + 2)][1],
    c = (n - i) / (o - i),
    h = c * c,
    d = h * c;
  for (const f of sT)
    e[f] =
      0.5 *
      (2 * s[f] +
        (-r[f] + a[f]) * c +
        (2 * r[f] - 5 * s[f] + 4 * a[f] - l[f]) * h +
        (-r[f] + 3 * s[f] - 3 * a[f] + l[f]) * d);
  const u = o1(n);
  return (
    (e.y += Math.sin(n * 4.2) * 0.004 * u),
    (e.rz += Math.sin(n * 3.1) * 0.015 * u),
    e
  );
}
function VU(n, e, t = { x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0 }) {
  ak(n, t);
  const i = o1(n);
  return (
    (t.x *= e ? 0.65 : 0.8),
    (t.y += i * (e ? 0.035 : 0.025)),
    (t.z += i * (e ? 0.06 : 0.04)),
    (t.rx += Math.sin(Math.max(0, n - 1.25) * 2) * i * (e ? 0.12 : 0.22)),
    (t.ry *= e ? 0.65 : 0.8),
    (t.rz *= 0.75),
    t
  );
}
function no(n, e = !1) {
  const t = n[0].index !== null,
    i = new Set(Object.keys(n[0].attributes)),
    s = new Set(Object.keys(n[0].morphAttributes)),
    o = {},
    a = {},
    r = n[0].morphTargetsRelative,
    l = new ci();
  let c = 0;
  for (let h = 0; h < n.length; ++h) {
    const d = n[h];
    let u = 0;
    if (t !== (d.index !== null))
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
            h +
            ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.",
        ),
        null
      );
    for (const f in d.attributes) {
      if (!i.has(f))
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
              h +
              '. All geometries must have compatible attributes; make sure "' +
              f +
              '" attribute exists among all geometries, or in none of them.',
          ),
          null
        );
      (o[f] === void 0 && (o[f] = []), o[f].push(d.attributes[f]), u++);
    }
    if (u !== i.size)
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
            h +
            ". Make sure all geometries have the same number of attributes.",
        ),
        null
      );
    if (r !== d.morphTargetsRelative)
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
            h +
            ". .morphTargetsRelative must be consistent throughout all geometries.",
        ),
        null
      );
    for (const f in d.morphAttributes) {
      if (!s.has(f))
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
              h +
              ".  .morphAttributes must be consistent throughout all geometries.",
          ),
          null
        );
      (a[f] === void 0 && (a[f] = []), a[f].push(d.morphAttributes[f]));
    }
    if (e) {
      let f;
      if (t) f = d.index.count;
      else if (d.attributes.position !== void 0)
        f = d.attributes.position.count;
      else
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
              h +
              ". The geometry must have either an index or a position attribute",
          ),
          null
        );
      (l.addGroup(c, f, h), (c += f));
    }
  }
  if (t) {
    let h = 0;
    const d = [];
    for (let u = 0; u < n.length; ++u) {
      const f = n[u].index;
      for (let p = 0; p < f.count; ++p) d.push(f.getX(p) + h);
      h += n[u].attributes.position.count;
    }
    l.setIndex(d);
  }
  for (const h in o) {
    const d = oT(o[h]);
    if (!d)
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " +
            h +
            " attribute.",
        ),
        null
      );
    l.setAttribute(h, d);
  }
  for (const h in a) {
    const d = a[h][0].length;
    if (d === 0) break;
    ((l.morphAttributes = l.morphAttributes || {}),
      (l.morphAttributes[h] = []));
    for (let u = 0; u < d; ++u) {
      const f = [];
      for (let m = 0; m < a[h].length; ++m) f.push(a[h][m][u]);
      const p = oT(f);
      if (!p)
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " +
              h +
              " morphAttribute.",
          ),
          null
        );
      l.morphAttributes[h].push(p);
    }
  }
  return l;
}
function oT(n) {
  let e,
    t,
    i,
    s = -1,
    o = 0;
  for (let c = 0; c < n.length; ++c) {
    const h = n[c];
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
    if ((s === -1 && (s = h.gpuType), s !== h.gpuType))
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.",
        ),
        null
      );
    o += h.count * t;
  }
  const a = new e(o),
    r = new oi(a, t, i);
  let l = 0;
  for (let c = 0; c < n.length; ++c) {
    const h = n[c];
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
  return (s !== void 0 && (r.gpuType = s), r);
}
function $U(n, e = 1e-4) {
  e = Math.max(e, Number.EPSILON);
  const t = {},
    i = n.getIndex(),
    s = n.getAttribute("position"),
    o = i ? i.count : s.count;
  let a = 0;
  const r = Object.keys(n.attributes),
    l = {},
    c = {},
    h = [],
    d = ["getX", "getY", "getZ", "getW"],
    u = ["setX", "setY", "setZ", "setW"];
  for (let b = 0, S = r.length; b < S; b++) {
    const M = r[b],
      x = n.attributes[M];
    l[M] = new x.constructor(
      new x.array.constructor(x.count * x.itemSize),
      x.itemSize,
      x.normalized,
    );
    const T = n.morphAttributes[M];
    T &&
      (c[M] || (c[M] = []),
      T.forEach((A, _) => {
        const C = new A.array.constructor(A.count * A.itemSize);
        c[M][_] = new A.constructor(C, A.itemSize, A.normalized);
      }));
  }
  const f = e * 0.5,
    p = Math.log10(1 / e),
    m = Math.pow(10, p),
    y = f * m;
  for (let b = 0; b < o; b++) {
    const S = i ? i.getX(b) : b;
    let M = "";
    for (let x = 0, T = r.length; x < T; x++) {
      const A = r[x],
        _ = n.getAttribute(A),
        C = _.itemSize;
      for (let R = 0; R < C; R++) M += `${~~(_[d[R]](S) * m + y)},`;
    }
    if (M in t) h.push(t[M]);
    else {
      for (let x = 0, T = r.length; x < T; x++) {
        const A = r[x],
          _ = n.getAttribute(A),
          C = n.morphAttributes[A],
          R = _.itemSize,
          L = l[A],
          N = c[A];
        for (let D = 0; D < R; D++) {
          const H = d[D],
            G = u[D];
          if ((L[G](a, _[H](S)), C))
            for (let I = 0, O = C.length; I < O; I++) N[I][G](a, C[I][H](S));
        }
      }
      ((t[M] = a), h.push(a), a++);
    }
  }
  const g = n.clone();
  for (const b in n.attributes) {
    const S = l[b];
    if (
      (g.setAttribute(
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
        const x = c[b][M];
        g.morphAttributes[b][M] = new x.constructor(
          x.array.slice(0, a * x.itemSize),
          x.itemSize,
          x.normalized,
        );
      }
  }
  return (g.setIndex(h), g);
}
const Cc = 3881525,
  rk = 5591626,
  lk = 3093802,
  qU = 4937275,
  aT = 4015921,
  KU = 12094051;
function f5(n) {
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
        m = f.getAttribute("position").count,
        y = new Float32Array(m * 3);
      for (let g = 0; g < m; g++) p.toArray(y, g * 3);
      return (f.setAttribute("color", new oi(y, 3)), f);
    }),
    t = no(e, !1);
  for (const i of e) i.dispose();
  return t;
}
