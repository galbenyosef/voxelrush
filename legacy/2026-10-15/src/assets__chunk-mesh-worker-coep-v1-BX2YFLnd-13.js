// assets__chunk-mesh-worker-coep-v1-BX2YFLnd 13 — boundingbox
// Lines 4133-4627 of readable/assets__chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
class Os extends rn {
  constructor() {
    (super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Ki++ }),
      (this.uuid = Ts()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {}));
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return (
      Array.isArray(t)
        ? (this.index = new (Ni(t) ? qi : vi)(t, 1))
        : (this.index = t),
      this
    );
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return ((this.attributes[t] = e), this);
  }
  deleteAttribute(t) {
    return (delete this.attributes[t], this);
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, s = 0) {
    this.groups.push({ start: t, count: e, materialIndex: s });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    ((this.drawRange.start = t), (this.drawRange.count = e));
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), (e.needsUpdate = !0));
    const s = this.attributes.normal;
    if (s !== void 0) {
      const i = new Ie().getNormalMatrix(t);
      (s.applyNormalMatrix(i), (s.needsUpdate = !0));
    }
    const n = this.attributes.tangent;
    return (
      n !== void 0 && (n.transformDirection(t), (n.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(t) {
    return (yt.makeRotationFromQuaternion(t), this.applyMatrix4(yt), this);
  }
  rotateX(t) {
    return (yt.makeRotationX(t), this.applyMatrix4(yt), this);
  }
  rotateY(t) {
    return (yt.makeRotationY(t), this.applyMatrix4(yt), this);
  }
  rotateZ(t) {
    return (yt.makeRotationZ(t), this.applyMatrix4(yt), this);
  }
  translate(t, e, s) {
    return (yt.makeTranslation(t, e, s), this.applyMatrix4(yt), this);
  }
  scale(t, e, s) {
    return (yt.makeScale(t, e, s), this.applyMatrix4(yt), this);
  }
  lookAt(t) {
    return (
      Fs.lookAt(t),
      Fs.updateMatrix(),
      this.applyMatrix4(Fs.matrix),
      this
    );
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(xe).negate(),
      this.translate(xe.x, xe.y, xe.z),
      this
    );
  }
  setFromPoints(t) {
    const e = [];
    for (let s = 0, n = t.length; s < n; s++) {
      const i = t[s];
      e.push(i.x, i.y, i.z || 0);
    }
    return (this.setAttribute("position", new Nt(e, 3)), this);
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Qe());
    const t = this.attributes.position,
      e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      (console.error(
        "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this,
      ),
        this.boundingBox.set(
          new C(-1 / 0, -1 / 0, -1 / 0),
          new C(1 / 0, 1 / 0, 1 / 0),
        ));
      return;
    }
    if (t !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(t), e))
        for (let s = 0, n = e.length; s < n; s++) {
          const i = e[s];
          (_t.setFromBufferAttribute(i),
            this.morphTargetsRelative
              ? (nt.addVectors(this.boundingBox.min, _t.min),
                this.boundingBox.expandByPoint(nt),
                nt.addVectors(this.boundingBox.max, _t.max),
                this.boundingBox.expandByPoint(nt))
              : (this.boundingBox.expandByPoint(_t.min),
                this.boundingBox.expandByPoint(_t.max)));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this,
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new wi());
    const t = this.attributes.position,
      e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      (console.error(
        "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this,
      ),
        this.boundingSphere.set(new C(), 1 / 0));
      return;
    }
    if (t) {
      const s = this.boundingSphere.center;
      if ((_t.setFromBufferAttribute(t), e))
        for (let i = 0, h = e.length; i < h; i++) {
          const c = e[i];
          (De.setFromBufferAttribute(c),
            this.morphTargetsRelative
              ? (nt.addVectors(_t.min, De.min),
                _t.expandByPoint(nt),
                nt.addVectors(_t.max, De.max),
                _t.expandByPoint(nt))
              : (_t.expandByPoint(De.min), _t.expandByPoint(De.max)));
        }
      _t.getCenter(s);
      let n = 0;
      for (let i = 0, h = t.count; i < h; i++)
        (nt.fromBufferAttribute(t, i),
          (n = Math.max(n, s.distanceToSquared(nt))));
      if (e)
        for (let i = 0, h = e.length; i < h; i++) {
          const c = e[i],
            o = this.morphTargetsRelative;
          for (let a = 0, u = c.count; a < u; a++)
            (nt.fromBufferAttribute(c, a),
              o && (xe.fromBufferAttribute(t, a), nt.add(xe)),
              (n = Math.max(n, s.distanceToSquared(nt))));
        }
      ((this.boundingSphere.radius = Math.sqrt(n)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this,
          ));
    }
  }
  computeTangents() {
    const t = this.index,
      e = this.attributes;
    if (
      t === null ||
      e.position === void 0 ||
      e.normal === void 0 ||
      e.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)",
      );
      return;
    }
    const s = e.position,
      n = e.normal,
      i = e.uv;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new ce(new Float32Array(4 * s.count), 4));
    const h = this.getAttribute("tangent"),
      c = [],
      o = [];
    for (let S = 0; S < s.count; S++) ((c[S] = new C()), (o[S] = new C()));
    const a = new C(),
      u = new C(),
      d = new C(),
      l = new Ht(),
      p = new Ht(),
      m = new Ht(),
      _ = new C(),
      y = new C();
    function E(S, R, O) {
      (a.fromBufferAttribute(s, S),
        u.fromBufferAttribute(s, R),
        d.fromBufferAttribute(s, O),
        l.fromBufferAttribute(i, S),
        p.fromBufferAttribute(i, R),
        m.fromBufferAttribute(i, O),
        u.sub(a),
        d.sub(a),
        p.sub(l),
        m.sub(l));
      const k = 1 / (p.x * m.y - m.x * p.y);
      isFinite(k) &&
        (_.copy(u)
          .multiplyScalar(m.y)
          .addScaledVector(d, -p.y)
          .multiplyScalar(k),
        y
          .copy(d)
          .multiplyScalar(p.x)
          .addScaledVector(u, -m.x)
          .multiplyScalar(k),
        c[S].add(_),
        c[R].add(_),
        c[O].add(_),
        o[S].add(y),
        o[R].add(y),
        o[O].add(y));
    }
    let M = this.groups;
    M.length === 0 && (M = [{ start: 0, count: t.count }]);
    for (let S = 0, R = M.length; S < R; ++S) {
      const O = M[S],
        k = O.start,
        W = O.count;
      for (let H = k, X = k + W; H < X; H += 3)
        E(t.getX(H + 0), t.getX(H + 1), t.getX(H + 2));
    }
    const g = new C(),
      L = new C(),
      I = new C(),
      A = new C();
    function x(S) {
      (I.fromBufferAttribute(n, S), A.copy(I));
      const R = c[S];
      (g.copy(R),
        g.sub(I.multiplyScalar(I.dot(R))).normalize(),
        L.crossVectors(A, R));
      const k = L.dot(o[S]) < 0 ? -1 : 1;
      h.setXYZW(S, g.x, g.y, g.z, k);
    }
    for (let S = 0, R = M.length; S < R; ++S) {
      const O = M[S],
        k = O.start,
        W = O.count;
      for (let H = k, X = k + W; H < X; H += 3)
        (x(t.getX(H + 0)), x(t.getX(H + 1)), x(t.getX(H + 2)));
    }
  }
  computeVertexNormals() {
    const t = this.index,
      e = this.getAttribute("position");
    if (e !== void 0) {
      let s = this.getAttribute("normal");
      if (s === void 0)
        ((s = new ce(new Float32Array(e.count * 3), 3)),
          this.setAttribute("normal", s));
      else for (let l = 0, p = s.count; l < p; l++) s.setXYZ(l, 0, 0, 0);
      const n = new C(),
        i = new C(),
        h = new C(),
        c = new C(),
        o = new C(),
        a = new C(),
        u = new C(),
        d = new C();
      if (t)
        for (let l = 0, p = t.count; l < p; l += 3) {
          const m = t.getX(l + 0),
            _ = t.getX(l + 1),
            y = t.getX(l + 2);
          (n.fromBufferAttribute(e, m),
            i.fromBufferAttribute(e, _),
            h.fromBufferAttribute(e, y),
            u.subVectors(h, i),
            d.subVectors(n, i),
            u.cross(d),
            c.fromBufferAttribute(s, m),
            o.fromBufferAttribute(s, _),
            a.fromBufferAttribute(s, y),
            c.add(u),
            o.add(u),
            a.add(u),
            s.setXYZ(m, c.x, c.y, c.z),
            s.setXYZ(_, o.x, o.y, o.z),
            s.setXYZ(y, a.x, a.y, a.z));
        }
      else
        for (let l = 0, p = e.count; l < p; l += 3)
          (n.fromBufferAttribute(e, l + 0),
            i.fromBufferAttribute(e, l + 1),
            h.fromBufferAttribute(e, l + 2),
            u.subVectors(h, i),
            d.subVectors(n, i),
            u.cross(d),
            s.setXYZ(l + 0, u.x, u.y, u.z),
            s.setXYZ(l + 1, u.x, u.y, u.z),
            s.setXYZ(l + 2, u.x, u.y, u.z));
      (this.normalizeNormals(), (s.needsUpdate = !0));
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, s = t.count; e < s; e++)
      (nt.fromBufferAttribute(t, e),
        nt.normalize(),
        t.setXYZ(e, nt.x, nt.y, nt.z));
  }
  toNonIndexed() {
    function t(c, o) {
      const a = c.array,
        u = c.itemSize,
        d = c.normalized,
        l = new a.constructor(o.length * u);
      let p = 0,
        m = 0;
      for (let _ = 0, y = o.length; _ < y; _++) {
        c.isInterleavedBufferAttribute
          ? (p = o[_] * c.data.stride + c.offset)
          : (p = o[_] * u);
        for (let E = 0; E < u; E++) l[m++] = a[p++];
      }
      return new ce(l, u, d);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.",
        ),
        this
      );
    const e = new Os(),
      s = this.index.array,
      n = this.attributes;
    for (const c in n) {
      const o = n[c],
        a = t(o, s);
      e.setAttribute(c, a);
    }
    const i = this.morphAttributes;
    for (const c in i) {
      const o = [],
        a = i[c];
      for (let u = 0, d = a.length; u < d; u++) {
        const l = a[u],
          p = t(l, s);
        o.push(p);
      }
      e.morphAttributes[c] = o;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const h = this.groups;
    for (let c = 0, o = h.length; c < o; c++) {
      const a = h[c];
      e.addGroup(a.start, a.count, a.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((t.uuid = this.uuid),
      (t.type = this.type),
      this.name !== "" && (t.name = this.name),
      Object.keys(this.userData).length > 0 && (t.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const o = this.parameters;
      for (const a in o) o[a] !== void 0 && (t[a] = o[a]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null &&
      (t.data.index = {
        type: e.array.constructor.name,
        array: Array.prototype.slice.call(e.array),
      });
    const s = this.attributes;
    for (const o in s) {
      const a = s[o];
      t.data.attributes[o] = a.toJSON(t.data);
    }
    const n = {};
    let i = !1;
    for (const o in this.morphAttributes) {
      const a = this.morphAttributes[o],
        u = [];
      for (let d = 0, l = a.length; d < l; d++) {
        const p = a[d];
        u.push(p.toJSON(t.data));
      }
      u.length > 0 && ((n[o] = u), (i = !0));
    }
    i &&
      ((t.data.morphAttributes = n),
      (t.data.morphTargetsRelative = this.morphTargetsRelative));
    const h = this.groups;
    h.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(h)));
    const c = this.boundingSphere;
    return (
      c !== null &&
        (t.data.boundingSphere = {
          center: c.center.toArray(),
          radius: c.radius,
        }),
      t
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    ((this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null));
    const e = {};
    this.name = t.name;
    const s = t.index;
    s !== null && this.setIndex(s.clone(e));
    const n = t.attributes;
    for (const a in n) {
      const u = n[a];
      this.setAttribute(a, u.clone(e));
    }
    const i = t.morphAttributes;
    for (const a in i) {
      const u = [],
        d = i[a];
      for (let l = 0, p = d.length; l < p; l++) u.push(d[l].clone(e));
      this.morphAttributes[a] = u;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const h = t.groups;
    for (let a = 0, u = h.length; a < u; a++) {
      const d = h[a];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const c = t.boundingBox;
    c !== null && (this.boundingBox = c.clone());
    const o = t.boundingSphere;
    return (
      o !== null && (this.boundingSphere = o.clone()),
      (this.drawRange.start = t.drawRange.start),
      (this.drawRange.count = t.drawRange.count),
      (this.userData = t.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
