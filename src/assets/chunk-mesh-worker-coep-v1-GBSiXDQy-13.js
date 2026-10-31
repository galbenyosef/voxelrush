// chunk-mesh-worker-coep-v1-GBSiXDQy 13 — boundingbox
// Lines 4127-4621 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
class bs extends nn {
  constructor() {
    (super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Vi++ }),
      (this.uuid = Rs()),
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
        ? (this.index = new (Li(t) ? Yi : Hi)(t, 1))
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
      const i = new Te().getNormalMatrix(t);
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
    return (mt.makeRotationFromQuaternion(t), this.applyMatrix4(mt), this);
  }
  rotateX(t) {
    return (mt.makeRotationX(t), this.applyMatrix4(mt), this);
  }
  rotateY(t) {
    return (mt.makeRotationY(t), this.applyMatrix4(mt), this);
  }
  rotateZ(t) {
    return (mt.makeRotationZ(t), this.applyMatrix4(mt), this);
  }
  translate(t, e, s) {
    return (mt.makeTranslation(t, e, s), this.applyMatrix4(mt), this);
  }
  scale(t, e, s) {
    return (mt.makeScale(t, e, s), this.applyMatrix4(mt), this);
  }
  lookAt(t) {
    return (
      zs.lookAt(t),
      zs.updateMatrix(),
      this.applyMatrix4(zs.matrix),
      this
    );
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(_e).negate(),
      this.translate(_e.x, _e.y, _e.z),
      this
    );
  }
  setFromPoints(t) {
    const e = [];
    for (let s = 0, n = t.length; s < n; s++) {
      const i = t[s];
      e.push(i.x, i.y, i.z || 0);
    }
    return (this.setAttribute("position", new Ot(e, 3)), this);
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ve());
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
          (dt.setFromBufferAttribute(i),
            this.morphTargetsRelative
              ? (et.addVectors(this.boundingBox.min, dt.min),
                this.boundingBox.expandByPoint(et),
                et.addVectors(this.boundingBox.max, dt.max),
                this.boundingBox.expandByPoint(et))
              : (this.boundingBox.expandByPoint(dt.min),
                this.boundingBox.expandByPoint(dt.max)));
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
    this.boundingSphere === null && (this.boundingSphere = new ki());
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
      if ((dt.setFromBufferAttribute(t), e))
        for (let i = 0, c = e.length; i < c; i++) {
          const h = e[i];
          (Be.setFromBufferAttribute(h),
            this.morphTargetsRelative
              ? (et.addVectors(dt.min, Be.min),
                dt.expandByPoint(et),
                et.addVectors(dt.max, Be.max),
                dt.expandByPoint(et))
              : (dt.expandByPoint(Be.min), dt.expandByPoint(Be.max)));
        }
      dt.getCenter(s);
      let n = 0;
      for (let i = 0, c = t.count; i < c; i++)
        (et.fromBufferAttribute(t, i),
          (n = Math.max(n, s.distanceToSquared(et))));
      if (e)
        for (let i = 0, c = e.length; i < c; i++) {
          const h = e[i],
            o = this.morphTargetsRelative;
          for (let a = 0, u = h.count; a < u; a++)
            (et.fromBufferAttribute(h, a),
              o && (_e.fromBufferAttribute(t, a), et.add(_e)),
              (n = Math.max(n, s.distanceToSquared(et))));
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
      this.setAttribute("tangent", new re(new Float32Array(4 * s.count), 4));
    const c = this.getAttribute("tangent"),
      h = [],
      o = [];
    for (let O = 0; O < s.count; O++) ((h[O] = new C()), (o[O] = new C()));
    const a = new C(),
      u = new C(),
      d = new C(),
      l = new zt(),
      f = new zt(),
      m = new zt(),
      _ = new C(),
      g = new C();
    function y(O, I, k) {
      (a.fromBufferAttribute(s, O),
        u.fromBufferAttribute(s, I),
        d.fromBufferAttribute(s, k),
        l.fromBufferAttribute(i, O),
        f.fromBufferAttribute(i, I),
        m.fromBufferAttribute(i, k),
        u.sub(a),
        d.sub(a),
        f.sub(l),
        m.sub(l));
      const w = 1 / (f.x * m.y - m.x * f.y);
      isFinite(w) &&
        (_.copy(u)
          .multiplyScalar(m.y)
          .addScaledVector(d, -f.y)
          .multiplyScalar(w),
        g
          .copy(d)
          .multiplyScalar(f.x)
          .addScaledVector(u, -m.x)
          .multiplyScalar(w),
        h[O].add(_),
        h[I].add(_),
        h[k].add(_),
        o[O].add(g),
        o[I].add(g),
        o[k].add(g));
    }
    let R = this.groups;
    R.length === 0 && (R = [{ start: 0, count: t.count }]);
    for (let O = 0, I = R.length; O < I; ++O) {
      const k = R[O],
        w = k.start,
        N = k.count;
      for (let L = w, U = w + N; L < U; L += 3)
        y(t.getX(L + 0), t.getX(L + 1), t.getX(L + 2));
    }
    const E = new C(),
      x = new C(),
      S = new C(),
      M = new C();
    function A(O) {
      (S.fromBufferAttribute(n, O), M.copy(S));
      const I = h[O];
      (E.copy(I),
        E.sub(S.multiplyScalar(S.dot(I))).normalize(),
        x.crossVectors(M, I));
      const w = x.dot(o[O]) < 0 ? -1 : 1;
      c.setXYZW(O, E.x, E.y, E.z, w);
    }
    for (let O = 0, I = R.length; O < I; ++O) {
      const k = R[O],
        w = k.start,
        N = k.count;
      for (let L = w, U = w + N; L < U; L += 3)
        (A(t.getX(L + 0)), A(t.getX(L + 1)), A(t.getX(L + 2)));
    }
  }
  computeVertexNormals() {
    const t = this.index,
      e = this.getAttribute("position");
    if (e !== void 0) {
      let s = this.getAttribute("normal");
      if (s === void 0)
        ((s = new re(new Float32Array(e.count * 3), 3)),
          this.setAttribute("normal", s));
      else for (let l = 0, f = s.count; l < f; l++) s.setXYZ(l, 0, 0, 0);
      const n = new C(),
        i = new C(),
        c = new C(),
        h = new C(),
        o = new C(),
        a = new C(),
        u = new C(),
        d = new C();
      if (t)
        for (let l = 0, f = t.count; l < f; l += 3) {
          const m = t.getX(l + 0),
            _ = t.getX(l + 1),
            g = t.getX(l + 2);
          (n.fromBufferAttribute(e, m),
            i.fromBufferAttribute(e, _),
            c.fromBufferAttribute(e, g),
            u.subVectors(c, i),
            d.subVectors(n, i),
            u.cross(d),
            h.fromBufferAttribute(s, m),
            o.fromBufferAttribute(s, _),
            a.fromBufferAttribute(s, g),
            h.add(u),
            o.add(u),
            a.add(u),
            s.setXYZ(m, h.x, h.y, h.z),
            s.setXYZ(_, o.x, o.y, o.z),
            s.setXYZ(g, a.x, a.y, a.z));
        }
      else
        for (let l = 0, f = e.count; l < f; l += 3)
          (n.fromBufferAttribute(e, l + 0),
            i.fromBufferAttribute(e, l + 1),
            c.fromBufferAttribute(e, l + 2),
            u.subVectors(c, i),
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
      (et.fromBufferAttribute(t, e),
        et.normalize(),
        t.setXYZ(e, et.x, et.y, et.z));
  }
  toNonIndexed() {
    function t(h, o) {
      const a = h.array,
        u = h.itemSize,
        d = h.normalized,
        l = new a.constructor(o.length * u);
      let f = 0,
        m = 0;
      for (let _ = 0, g = o.length; _ < g; _++) {
        h.isInterleavedBufferAttribute
          ? (f = o[_] * h.data.stride + h.offset)
          : (f = o[_] * u);
        for (let y = 0; y < u; y++) l[m++] = a[f++];
      }
      return new re(l, u, d);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.",
        ),
        this
      );
    const e = new bs(),
      s = this.index.array,
      n = this.attributes;
    for (const h in n) {
      const o = n[h],
        a = t(o, s);
      e.setAttribute(h, a);
    }
    const i = this.morphAttributes;
    for (const h in i) {
      const o = [],
        a = i[h];
      for (let u = 0, d = a.length; u < d; u++) {
        const l = a[u],
          f = t(l, s);
        o.push(f);
      }
      e.morphAttributes[h] = o;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const c = this.groups;
    for (let h = 0, o = c.length; h < o; h++) {
      const a = c[h];
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
        const f = a[d];
        u.push(f.toJSON(t.data));
      }
      u.length > 0 && ((n[o] = u), (i = !0));
    }
    i &&
      ((t.data.morphAttributes = n),
      (t.data.morphTargetsRelative = this.morphTargetsRelative));
    const c = this.groups;
    c.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(c)));
    const h = this.boundingSphere;
    return (
      h !== null &&
        (t.data.boundingSphere = {
          center: h.center.toArray(),
          radius: h.radius,
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
      for (let l = 0, f = d.length; l < f; l++) u.push(d[l].clone(e));
      this.morphAttributes[a] = u;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const c = t.groups;
    for (let a = 0, u = c.length; a < u; a++) {
      const d = c[a];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const h = t.boundingBox;
    h !== null && (this.boundingBox = h.clone());
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
