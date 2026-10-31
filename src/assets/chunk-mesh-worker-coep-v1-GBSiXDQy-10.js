// chunk-mesh-worker-coep-v1-GBSiXDQy 10 — math
// Lines 3214-3425 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
const fe = new C(),
  Rt = new Nt(),
  Ui = new C(0, 0, 0),
  Di = new C(1, 1, 1),
  Yt = new C(),
  ss = new C(),
  lt = new C(),
  Tn = new Nt(),
  bn = new Ye();
class Ts {
  constructor(t = 0, e = 0, s = 0, n = Ts.DEFAULT_ORDER) {
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
      c = n[4],
      h = n[8],
      o = n[1],
      a = n[5],
      u = n[9],
      d = n[2],
      l = n[6],
      f = n[10];
    switch (e) {
      case "XYZ":
        ((this._y = Math.asin(Ut(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(-u, f)), (this._z = Math.atan2(-c, i)))
            : ((this._x = Math.atan2(l, a)), (this._z = 0)));
        break;
      case "YXZ":
        ((this._x = Math.asin(-Ut(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(h, f)), (this._z = Math.atan2(o, a)))
            : ((this._y = Math.atan2(-d, i)), (this._z = 0)));
        break;
      case "ZXY":
        ((this._x = Math.asin(Ut(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._y = Math.atan2(-d, f)), (this._z = Math.atan2(-c, a)))
            : ((this._y = 0), (this._z = Math.atan2(o, i))));
        break;
      case "ZYX":
        ((this._y = Math.asin(-Ut(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._x = Math.atan2(l, f)), (this._z = Math.atan2(o, i)))
            : ((this._x = 0), (this._z = Math.atan2(-c, a))));
        break;
      case "YZX":
        ((this._z = Math.asin(Ut(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-u, a)), (this._y = Math.atan2(-d, i)))
            : ((this._x = 0), (this._y = Math.atan2(h, f))));
        break;
      case "XZY":
        ((this._z = Math.asin(-Ut(c, -1, 1))),
          Math.abs(c) < 0.9999999
            ? ((this._x = Math.atan2(l, a)), (this._y = Math.atan2(h, i)))
            : ((this._x = Math.atan2(-u, f)), (this._y = 0)));
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
      Tn.makeRotationFromQuaternion(t),
      this.setFromRotationMatrix(Tn, e, s)
    );
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return (bn.setFromEuler(this), this.setFromQuaternion(bn, t));
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
Ts.DEFAULT_ORDER = "XYZ";
class wi {
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
let zi = 0;
const On = new C(),
  pe = new Ye(),
  kt = new Nt(),
  ns = new C(),
  Ne = new C(),
  Fi = new C(),
  Gi = new Ye(),
  Ln = new C(1, 0, 0),
  In = new C(0, 1, 0),
  Cn = new C(0, 0, 1),
  Nn = { type: "added" },
  Wi = { type: "removed" },
  me = { type: "childadded", child: null },
  ws = { type: "childremoved", child: null };
