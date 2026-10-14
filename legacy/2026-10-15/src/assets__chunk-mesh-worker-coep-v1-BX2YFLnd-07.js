// assets__chunk-mesh-worker-coep-v1-BX2YFLnd 07 — min
// Lines 2010-2295 of readable/assets__chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
const Us = new C(),
  Tn = new Ke();
class Qe {
  constructor(
    t = new C(1 / 0, 1 / 0, 1 / 0),
    e = new C(-1 / 0, -1 / 0, -1 / 0),
  ) {
    ((this.isBox3 = !0), (this.min = t), (this.max = e));
  }
  set(t, e) {
    return (this.min.copy(t), this.max.copy(e), this);
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, s = t.length; e < s; e += 3)
      this.expandByPoint(Ot.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, s = t.count; e < s; e++)
      this.expandByPoint(Ot.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, s = t.length; e < s; e++) this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const s = Ot.copy(e).multiplyScalar(0.5);
    return (this.min.copy(t).sub(s), this.max.copy(t).add(s), this);
  }
  setFromObject(t, e = !1) {
    return (this.makeEmpty(), this.expandByObject(t, e));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return (this.min.copy(t.min), this.max.copy(t.max), this);
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(t) {
    return this.isEmpty()
      ? t.set(0, 0, 0)
      : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return (this.min.min(t), this.max.max(t), this);
  }
  expandByVector(t) {
    return (this.min.sub(t), this.max.add(t), this);
  }
  expandByScalar(t) {
    return (this.min.addScalar(-t), this.max.addScalar(t), this);
  }
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const s = t.geometry;
    if (s !== void 0) {
      const i = s.getAttribute("position");
      if (e === !0 && i !== void 0 && t.isInstancedMesh !== !0)
        for (let h = 0, c = i.count; h < c; h++)
          (t.isMesh === !0
            ? t.getVertexPosition(h, Ot)
            : Ot.fromBufferAttribute(i, h),
            Ot.applyMatrix4(t.matrixWorld),
            this.expandByPoint(Ot));
      else
        (t.boundingBox !== void 0
          ? (t.boundingBox === null && t.computeBoundingBox(),
            ns.copy(t.boundingBox))
          : (s.boundingBox === null && s.computeBoundingBox(),
            ns.copy(s.boundingBox)),
          ns.applyMatrix4(t.matrixWorld),
          this.union(ns));
    }
    const n = t.children;
    for (let i = 0, h = n.length; i < h; i++) this.expandByObject(n[i], e);
    return this;
  }
  containsPoint(t) {
    return (
      t.x >= this.min.x &&
      t.x <= this.max.x &&
      t.y >= this.min.y &&
      t.y <= this.max.y &&
      t.z >= this.min.z &&
      t.z <= this.max.z
    );
  }
  containsBox(t) {
    return (
      this.min.x <= t.min.x &&
      t.max.x <= this.max.x &&
      this.min.y <= t.min.y &&
      t.max.y <= this.max.y &&
      this.min.z <= t.min.z &&
      t.max.z <= this.max.z
    );
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z),
    );
  }
  intersectsBox(t) {
    return (
      t.max.x >= this.min.x &&
      t.min.x <= this.max.x &&
      t.max.y >= this.min.y &&
      t.min.y <= this.max.y &&
      t.max.z >= this.min.z &&
      t.min.z <= this.max.z
    );
  }
  intersectsSphere(t) {
    return (
      this.clampPoint(t.center, Ot),
      Ot.distanceToSquared(t.center) <= t.radius * t.radius
    );
  }
  intersectsPlane(t) {
    let e, s;
    return (
      t.normal.x > 0
        ? ((e = t.normal.x * this.min.x), (s = t.normal.x * this.max.x))
        : ((e = t.normal.x * this.max.x), (s = t.normal.x * this.min.x)),
      t.normal.y > 0
        ? ((e += t.normal.y * this.min.y), (s += t.normal.y * this.max.y))
        : ((e += t.normal.y * this.max.y), (s += t.normal.y * this.min.y)),
      t.normal.z > 0
        ? ((e += t.normal.z * this.min.z), (s += t.normal.z * this.max.z))
        : ((e += t.normal.z * this.max.z), (s += t.normal.z * this.min.z)),
      e <= -t.constant && s >= -t.constant
    );
  }
  intersectsTriangle(t) {
    if (this.isEmpty()) return !1;
    (this.getCenter(Pe),
      is.subVectors(this.max, Pe),
      pe.subVectors(t.a, Pe),
      me.subVectors(t.b, Pe),
      _e.subVectors(t.c, Pe),
      vt.subVectors(me, pe),
      qt.subVectors(_e, me),
      ee.subVectors(pe, _e));
    let e = [
      0,
      -vt.z,
      vt.y,
      0,
      -qt.z,
      qt.y,
      0,
      -ee.z,
      ee.y,
      vt.z,
      0,
      -vt.x,
      qt.z,
      0,
      -qt.x,
      ee.z,
      0,
      -ee.x,
      -vt.y,
      vt.x,
      0,
      -qt.y,
      qt.x,
      0,
      -ee.y,
      ee.x,
      0,
    ];
    return !Ds(e, pe, me, _e, is) ||
      ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Ds(e, pe, me, _e, is))
      ? !1
      : (rs.crossVectors(vt, qt),
        (e = [rs.x, rs.y, rs.z]),
        Ds(e, pe, me, _e, is));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, Ot).distanceTo(t);
  }
  getBoundingSphere(t) {
    return (
      this.isEmpty()
        ? t.makeEmpty()
        : (this.getCenter(t.center),
          (t.radius = this.getSize(Ot).length() * 0.5)),
      t
    );
  }
  intersect(t) {
    return (
      this.min.max(t.min),
      this.max.min(t.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(t) {
    return (this.min.min(t.min), this.max.max(t.max), this);
  }
  applyMatrix4(t) {
    return this.isEmpty()
      ? this
      : (wt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
        wt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
        wt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
        wt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
        wt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
        wt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
        wt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
        wt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
        this.setFromPoints(wt),
        this);
  }
  translate(t) {
    return (this.min.add(t), this.max.add(t), this);
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const wt = [
    new C(),
    new C(),
    new C(),
    new C(),
    new C(),
    new C(),
    new C(),
    new C(),
  ],
  Ot = new C(),
  ns = new Qe(),
  pe = new C(),
  me = new C(),
  _e = new C(),
  vt = new C(),
  qt = new C(),
  ee = new C(),
  Pe = new C(),
  is = new C(),
  rs = new C(),
  se = new C();
function Ds(r, t, e, s, n) {
  for (let i = 0, h = r.length - 3; i <= h; i += 3) {
    se.fromArray(r, i);
    const c =
        n.x * Math.abs(se.x) + n.y * Math.abs(se.y) + n.z * Math.abs(se.z),
      o = t.dot(se),
      a = e.dot(se),
      u = s.dot(se);
    if (Math.max(-Math.max(o, a, u), Math.min(o, a, u)) > c) return !1;
  }
  return !0;
}
const Di = new Qe(),
  ke = new C(),
  ws = new C();
