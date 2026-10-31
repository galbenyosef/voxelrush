// chunk-mesh-worker-coep-v1-GBSiXDQy 12 — array
// Lines 3900-4126 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
vt.DEFAULT_UP = new C(0, 1, 0);
vt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const J = new C(),
  is = new zt();
class re {
  constructor(t, e, s = !1) {
    if (Array.isArray(t))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array.",
      );
    ((this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = t),
      (this.itemSize = e),
      (this.count = t !== void 0 ? t.length / e : 0),
      (this.normalized = s),
      (this.usage = 35044),
      (this.updateRanges = []),
      (this.gpuType = 1015),
      (this.version = 0));
  }
  onUploadCallback() {}
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return ((this.usage = t), this);
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return (
      (this.name = t.name),
      (this.array = new t.array.constructor(t.array)),
      (this.itemSize = t.itemSize),
      (this.count = t.count),
      (this.normalized = t.normalized),
      (this.usage = t.usage),
      (this.gpuType = t.gpuType),
      this
    );
  }
  copyAt(t, e, s) {
    ((t *= this.itemSize), (s *= e.itemSize));
    for (let n = 0, i = this.itemSize; n < i; n++)
      this.array[t + n] = e.array[s + n];
    return this;
  }
  copyArray(t) {
    return (this.array.set(t), this);
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, s = this.count; e < s; e++)
        (is.fromBufferAttribute(this, e),
          is.applyMatrix3(t),
          this.setXY(e, is.x, is.y));
    else if (this.itemSize === 3)
      for (let e = 0, s = this.count; e < s; e++)
        (J.fromBufferAttribute(this, e),
          J.applyMatrix3(t),
          this.setXYZ(e, J.x, J.y, J.z));
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, s = this.count; e < s; e++)
      (J.fromBufferAttribute(this, e),
        J.applyMatrix4(t),
        this.setXYZ(e, J.x, J.y, J.z));
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, s = this.count; e < s; e++)
      (J.fromBufferAttribute(this, e),
        J.applyNormalMatrix(t),
        this.setXYZ(e, J.x, J.y, J.z));
    return this;
  }
  transformDirection(t) {
    for (let e = 0, s = this.count; e < s; e++)
      (J.fromBufferAttribute(this, e),
        J.transformDirection(t),
        this.setXYZ(e, J.x, J.y, J.z));
    return this;
  }
  set(t, e = 0) {
    return (this.array.set(t, e), this);
  }
  getComponent(t, e) {
    let s = this.array[t * this.itemSize + e];
    return (this.normalized && (s = Le(s, this.array)), s);
  }
  setComponent(t, e, s) {
    return (
      this.normalized && (s = rt(s, this.array)),
      (this.array[t * this.itemSize + e] = s),
      this
    );
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return (this.normalized && (e = Le(e, this.array)), e);
  }
  setX(t, e) {
    return (
      this.normalized && (e = rt(e, this.array)),
      (this.array[t * this.itemSize] = e),
      this
    );
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return (this.normalized && (e = Le(e, this.array)), e);
  }
  setY(t, e) {
    return (
      this.normalized && (e = rt(e, this.array)),
      (this.array[t * this.itemSize + 1] = e),
      this
    );
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return (this.normalized && (e = Le(e, this.array)), e);
  }
  setZ(t, e) {
    return (
      this.normalized && (e = rt(e, this.array)),
      (this.array[t * this.itemSize + 2] = e),
      this
    );
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return (this.normalized && (e = Le(e, this.array)), e);
  }
  setW(t, e) {
    return (
      this.normalized && (e = rt(e, this.array)),
      (this.array[t * this.itemSize + 3] = e),
      this
    );
  }
  setXY(t, e, s) {
    return (
      (t *= this.itemSize),
      this.normalized && ((e = rt(e, this.array)), (s = rt(s, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = s),
      this
    );
  }
  setXYZ(t, e, s, n) {
    return (
      (t *= this.itemSize),
      this.normalized &&
        ((e = rt(e, this.array)),
        (s = rt(s, this.array)),
        (n = rt(n, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = s),
      (this.array[t + 2] = n),
      this
    );
  }
  setXYZW(t, e, s, n, i) {
    return (
      (t *= this.itemSize),
      this.normalized &&
        ((e = rt(e, this.array)),
        (s = rt(s, this.array)),
        (n = rt(n, this.array)),
        (i = rt(i, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = s),
      (this.array[t + 2] = n),
      (this.array[t + 3] = i),
      this
    );
  }
  onUpload(t) {
    return ((this.onUploadCallback = t), this);
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (t.name = this.name),
      this.usage !== 35044 && (t.usage = this.usage),
      t
    );
  }
}
class Hi extends re {
  constructor(t, e, s) {
    super(new Uint16Array(t), e, s);
  }
}
class Yi extends re {
  constructor(t, e, s) {
    super(new Uint32Array(t), e, s);
  }
}
class Ot extends re {
  constructor(t, e, s) {
    super(new Float32Array(t), e, s);
  }
}
let Vi = 0;
const mt = new Nt(),
  zs = new vt(),
  _e = new C(),
  dt = new Ve(),
  Be = new Ve(),
  et = new C();
