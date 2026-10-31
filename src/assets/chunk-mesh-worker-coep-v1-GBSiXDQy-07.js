// chunk-mesh-worker-coep-v1-GBSiXDQy 07 — min
// Lines 2004-2289 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
const ks = new C(),
  Rn = new Ye();
class Ve {
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
      this.expandByPoint(gt.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, s = t.count; e < s; e++)
      this.expandByPoint(gt.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, s = t.length; e < s; e++) this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const s = gt.copy(e).multiplyScalar(0.5);
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
        for (let c = 0, h = i.count; c < h; c++)
          (t.isMesh === !0
            ? t.getVertexPosition(c, gt)
            : gt.fromBufferAttribute(i, c),
            gt.applyMatrix4(t.matrixWorld),
            this.expandByPoint(gt));
      else
        (t.boundingBox !== void 0
          ? (t.boundingBox === null && t.computeBoundingBox(),
            je.copy(t.boundingBox))
          : (s.boundingBox === null && s.computeBoundingBox(),
            je.copy(s.boundingBox)),
          je.applyMatrix4(t.matrixWorld),
          this.union(je));
    }
    const n = t.children;
    for (let i = 0, c = n.length; i < c; i++) this.expandByObject(n[i], e);
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
      this.clampPoint(t.center, gt),
      gt.distanceToSquared(t.center) <= t.radius * t.radius
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
    (this.getCenter(Ie),
      ts.subVectors(this.max, Ie),
      ue.subVectors(t.a, Ie),
      le.subVectors(t.b, Ie),
      de.subVectors(t.c, Ie),
      Wt.subVectors(le, ue),
      Ht.subVectors(de, le),
      $t.subVectors(ue, de));
    let e = [
      0,
      -Wt.z,
      Wt.y,
      0,
      -Ht.z,
      Ht.y,
      0,
      -$t.z,
      $t.y,
      Wt.z,
      0,
      -Wt.x,
      Ht.z,
      0,
      -Ht.x,
      $t.z,
      0,
      -$t.x,
      -Wt.y,
      Wt.x,
      0,
      -Ht.y,
      Ht.x,
      0,
      -$t.y,
      $t.x,
      0,
    ];
    return !Us(e, ue, le, de, ts) ||
      ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Us(e, ue, le, de, ts))
      ? !1
      : (es.crossVectors(Wt, Ht),
        (e = [es.x, es.y, es.z]),
        Us(e, ue, le, de, ts));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, gt).distanceTo(t);
  }
  getBoundingSphere(t) {
    return (
      this.isEmpty()
        ? t.makeEmpty()
        : (this.getCenter(t.center),
          (t.radius = this.getSize(gt).length() * 0.5)),
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
      : (Pt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
        Pt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
        Pt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
        Pt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
        Pt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
        Pt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
        Pt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
        Pt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
        this.setFromPoints(Pt),
        this);
  }
  translate(t) {
    return (this.min.add(t), this.max.add(t), this);
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const Pt = [
    new C(),
    new C(),
    new C(),
    new C(),
    new C(),
    new C(),
    new C(),
    new C(),
  ],
  gt = new C(),
  je = new Ve(),
  ue = new C(),
  le = new C(),
  de = new C(),
  Wt = new C(),
  Ht = new C(),
  $t = new C(),
  Ie = new C(),
  ts = new C(),
  es = new C(),
  Jt = new C();
function Us(r, t, e, s, n) {
  for (let i = 0, c = r.length - 3; i <= c; i += 3) {
    Jt.fromArray(r, i);
    const h =
        n.x * Math.abs(Jt.x) + n.y * Math.abs(Jt.y) + n.z * Math.abs(Jt.z),
      o = t.dot(Jt),
      a = e.dot(Jt),
      u = s.dot(Jt);
    if (Math.max(-Math.max(o, a, u), Math.min(o, a, u)) > h) return !1;
  }
  return !0;
}
const Pi = new Ve(),
  Ce = new C(),
  Ds = new C();
