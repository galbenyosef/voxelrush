// chunk-mesh-worker-coep-v1-BX2YFLnd 10 — math
// Lines 3220-3431 of readable/assets/chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
const Ee = new C(),
  Lt = new Ut(),
  zi = new C(0, 0, 0),
  Fi = new C(1, 1, 1),
  Kt = new C(),
  os = new C(),
  mt = new C(),
  bn = new Ut(),
  On = new Ke();
class bs {
  constructor(t = 0, e = 0, s = 0, n = bs.DEFAULT_ORDER) {
    ((this.isEuler = !0),
      (this._x = t),
      (this._y = e),
      (this._z = s),
      (this._order = n));
  }
  get x() {
    return this._x;
  }
  set x(t) {
    ((this._x = t), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(t) {
    ((this._y = t), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(t) {
    ((this._z = t), this._onChangeCallback());
  }
  get order() {
    return this._order;
  }
  set order(t) {
    ((this._order = t), this._onChangeCallback());
  }
  set(t, e, s, n = this._order) {
    return (
      (this._x = t),
      (this._y = e),
      (this._z = s),
      (this._order = n),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return (
      (this._x = t._x),
      (this._y = t._y),
      (this._z = t._z),
      (this._order = t._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(t, e = this._order, s = !0) {
    const n = t.elements,
      i = n[0],
      h = n[4],
      c = n[8],
      o = n[1],
      a = n[5],
      u = n[9],
      d = n[2],
      l = n[6],
      p = n[10];
    switch (e) {
      case "XYZ":
        ((this._y = Math.asin(Ft(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(-u, p)), (this._z = Math.atan2(-h, i)))
            : ((this._x = Math.atan2(l, a)), (this._z = 0)));
        break;
      case "YXZ":
        ((this._x = Math.asin(-Ft(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(c, p)), (this._z = Math.atan2(o, a)))
            : ((this._y = Math.atan2(-d, i)), (this._z = 0)));
        break;
      case "ZXY":
        ((this._x = Math.asin(Ft(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._y = Math.atan2(-d, p)), (this._z = Math.atan2(-h, a)))
            : ((this._y = 0), (this._z = Math.atan2(o, i))));
        break;
      case "ZYX":
        ((this._y = Math.asin(-Ft(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._x = Math.atan2(l, p)), (this._z = Math.atan2(o, i)))
            : ((this._x = 0), (this._z = Math.atan2(-h, a))));
        break;
      case "YZX":
        ((this._z = Math.asin(Ft(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-u, a)), (this._y = Math.atan2(-d, i)))
            : ((this._x = 0), (this._y = Math.atan2(c, p))));
        break;
      case "XZY":
        ((this._z = Math.asin(-Ft(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(l, a)), (this._y = Math.atan2(c, i)))
            : ((this._x = Math.atan2(-u, p)), (this._y = 0)));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            e,
        );
    }
    return ((this._order = e), s === !0 && this._onChangeCallback(), this);
  }
  setFromQuaternion(t, e, s) {
    return (
      bn.makeRotationFromQuaternion(t),
      this.setFromRotationMatrix(bn, e, s)
    );
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return (On.setFromEuler(this), this.setFromQuaternion(On, t));
  }
  equals(t) {
    return (
      t._x === this._x &&
      t._y === this._y &&
      t._z === this._z &&
      t._order === this._order
    );
  }
  fromArray(t) {
    return (
      (this._x = t[0]),
      (this._y = t[1]),
      (this._z = t[2]),
      t[3] !== void 0 && (this._order = t[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this._x),
      (t[e + 1] = this._y),
      (t[e + 2] = this._z),
      (t[e + 3] = this._order),
      t
    );
  }
  _onChange(t) {
    return ((this._onChangeCallback = t), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._order);
  }
}
bs.DEFAULT_ORDER = "XYZ";
class Gi {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = ((1 << t) | 0) >>> 0;
  }
  enable(t) {
    this.mask |= (1 << t) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= (1 << t) | 0;
  }
  disable(t) {
    this.mask &= ~((1 << t) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & ((1 << t) | 0)) !== 0;
  }
}
let Wi = 0;
const Ln = new C(),
  Ae = new Ke(),
  zt = new Ut(),
  as = new C(),
  Ue = new C(),
  Hi = new C(),
  Yi = new Ke(),
  In = new C(1, 0, 0),
  Cn = new C(0, 1, 0),
  Nn = new C(0, 0, 1),
  Bn = { type: "added" },
  Vi = { type: "removed" },
  ye = { type: "childadded", child: null },
  zs = { type: "childremoved", child: null };
