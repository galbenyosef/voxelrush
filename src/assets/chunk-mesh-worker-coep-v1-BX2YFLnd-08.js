// chunk-mesh-worker-coep-v1-BX2YFLnd 08 — radius
// Lines 2296-2390 of readable/assets/chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
class wi {
  constructor(t = new C(), e = -1) {
    ((this.isSphere = !0), (this.center = t), (this.radius = e));
  }
  set(t, e) {
    return (this.center.copy(t), (this.radius = e), this);
  }
  setFromPoints(t, e) {
    const s = this.center;
    e !== void 0 ? s.copy(e) : Di.setFromPoints(t).getCenter(s);
    let n = 0;
    for (let i = 0, h = t.length; i < h; i++)
      n = Math.max(n, s.distanceToSquared(t[i]));
    return ((this.radius = Math.sqrt(n)), this);
  }
  copy(t) {
    return (this.center.copy(t.center), (this.radius = t.radius), this);
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return (this.center.set(0, 0, 0), (this.radius = -1), this);
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const s = this.center.distanceToSquared(t);
    return (
      e.copy(t),
      s > this.radius * this.radius &&
        (e.sub(this.center).normalize(),
        e.multiplyScalar(this.radius).add(this.center)),
      e
    );
  }
  getBoundingBox(t) {
    return this.isEmpty()
      ? (t.makeEmpty(), t)
      : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return (
      this.center.applyMatrix4(t),
      (this.radius = this.radius * t.getMaxScaleOnAxis()),
      this
    );
  }
  translate(t) {
    return (this.center.add(t), this);
  }
  expandByPoint(t) {
    if (this.isEmpty()) return (this.center.copy(t), (this.radius = 0), this);
    ke.subVectors(t, this.center);
    const e = ke.lengthSq();
    if (e > this.radius * this.radius) {
      const s = Math.sqrt(e),
        n = (s - this.radius) * 0.5;
      (this.center.addScaledVector(ke, n / s), (this.radius += n));
    }
    return this;
  }
  union(t) {
    return t.isEmpty()
      ? this
      : this.isEmpty()
        ? (this.copy(t), this)
        : (this.center.equals(t.center) === !0
            ? (this.radius = Math.max(this.radius, t.radius))
            : (ws.subVectors(t.center, this.center).setLength(t.radius),
              this.expandByPoint(ke.copy(t.center).add(ws)),
              this.expandByPoint(ke.copy(t.center).sub(ws))),
          this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
