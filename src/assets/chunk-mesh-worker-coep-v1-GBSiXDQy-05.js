// chunk-mesh-worker-coep-v1-GBSiXDQy 05 — math
// Lines 1148-1573 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
class Ye {
  constructor(t = 0, e = 0, s = 0, n = 1) {
    ((this.isQuaternion = !0),
      (this._x = t),
      (this._y = e),
      (this._z = s),
      (this._w = n));
  }
  static slerpFlat(t, e, s, n, i, c, h) {
    let o = s[n + 0],
      a = s[n + 1],
      u = s[n + 2],
      d = s[n + 3];
    const l = i[c + 0],
      f = i[c + 1],
      m = i[c + 2],
      _ = i[c + 3];
    if (h === 0) {
      ((t[e + 0] = o), (t[e + 1] = a), (t[e + 2] = u), (t[e + 3] = d));
      return;
    }
    if (h === 1) {
      ((t[e + 0] = l), (t[e + 1] = f), (t[e + 2] = m), (t[e + 3] = _));
      return;
    }
    if (d !== _ || o !== l || a !== f || u !== m) {
      let g = 1 - h;
      const y = o * l + a * f + u * m + d * _,
        R = y >= 0 ? 1 : -1,
        E = 1 - y * y;
      if (E > Number.EPSILON) {
        const S = Math.sqrt(E),
          M = Math.atan2(S, y * R);
        ((g = Math.sin(g * M) / S), (h = Math.sin(h * M) / S));
      }
      const x = h * R;
      if (
        ((o = o * g + l * x),
        (a = a * g + f * x),
        (u = u * g + m * x),
        (d = d * g + _ * x),
        g === 1 - h)
      ) {
        const S = 1 / Math.sqrt(o * o + a * a + u * u + d * d);
        ((o *= S), (a *= S), (u *= S), (d *= S));
      }
    }
    ((t[e] = o), (t[e + 1] = a), (t[e + 2] = u), (t[e + 3] = d));
  }
  static multiplyQuaternionsFlat(t, e, s, n, i, c) {
    const h = s[n],
      o = s[n + 1],
      a = s[n + 2],
      u = s[n + 3],
      d = i[c],
      l = i[c + 1],
      f = i[c + 2],
      m = i[c + 3];
    return (
      (t[e] = h * m + u * d + o * f - a * l),
      (t[e + 1] = o * m + u * l + a * d - h * f),
      (t[e + 2] = a * m + u * f + h * l - o * d),
      (t[e + 3] = u * m - h * d - o * l - a * f),
      t
    );
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
  get w() {
    return this._w;
  }
  set w(t) {
    ((this._w = t), this._onChangeCallback());
  }
  set(t, e, s, n) {
    return (
      (this._x = t),
      (this._y = e),
      (this._z = s),
      (this._w = n),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return (
      (this._x = t.x),
      (this._y = t.y),
      (this._z = t.z),
      (this._w = t.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(t, e = !0) {
    const s = t._x,
      n = t._y,
      i = t._z,
      c = t._order,
      h = Math.cos,
      o = Math.sin,
      a = h(s / 2),
      u = h(n / 2),
      d = h(i / 2),
      l = o(s / 2),
      f = o(n / 2),
      m = o(i / 2);
    switch (c) {
      case "XYZ":
        ((this._x = l * u * d + a * f * m),
          (this._y = a * f * d - l * u * m),
          (this._z = a * u * m + l * f * d),
          (this._w = a * u * d - l * f * m));
        break;
      case "YXZ":
        ((this._x = l * u * d + a * f * m),
          (this._y = a * f * d - l * u * m),
          (this._z = a * u * m - l * f * d),
          (this._w = a * u * d + l * f * m));
        break;
      case "ZXY":
        ((this._x = l * u * d - a * f * m),
          (this._y = a * f * d + l * u * m),
          (this._z = a * u * m + l * f * d),
          (this._w = a * u * d - l * f * m));
        break;
      case "ZYX":
        ((this._x = l * u * d - a * f * m),
          (this._y = a * f * d + l * u * m),
          (this._z = a * u * m - l * f * d),
          (this._w = a * u * d + l * f * m));
        break;
      case "YZX":
        ((this._x = l * u * d + a * f * m),
          (this._y = a * f * d + l * u * m),
          (this._z = a * u * m - l * f * d),
          (this._w = a * u * d - l * f * m));
        break;
      case "XZY":
        ((this._x = l * u * d - a * f * m),
          (this._y = a * f * d - l * u * m),
          (this._z = a * u * m + l * f * d),
          (this._w = a * u * d + l * f * m));
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
            c,
        );
    }
    return (e === !0 && this._onChangeCallback(), this);
  }
  setFromAxisAngle(t, e) {
    const s = e / 2,
      n = Math.sin(s);
    return (
      (this._x = t.x * n),
      (this._y = t.y * n),
      (this._z = t.z * n),
      (this._w = Math.cos(s)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(t) {
    const e = t.elements,
      s = e[0],
      n = e[4],
      i = e[8],
      c = e[1],
      h = e[5],
      o = e[9],
      a = e[2],
      u = e[6],
      d = e[10],
      l = s + h + d;
    if (l > 0) {
      const f = 0.5 / Math.sqrt(l + 1);
      ((this._w = 0.25 / f),
        (this._x = (u - o) * f),
        (this._y = (i - a) * f),
        (this._z = (c - n) * f));
    } else if (s > h && s > d) {
      const f = 2 * Math.sqrt(1 + s - h - d);
      ((this._w = (u - o) / f),
        (this._x = 0.25 * f),
        (this._y = (n + c) / f),
        (this._z = (i + a) / f));
    } else if (h > d) {
      const f = 2 * Math.sqrt(1 + h - s - d);
      ((this._w = (i - a) / f),
        (this._x = (n + c) / f),
        (this._y = 0.25 * f),
        (this._z = (o + u) / f));
    } else {
      const f = 2 * Math.sqrt(1 + d - s - h);
      ((this._w = (c - n) / f),
        (this._x = (i + a) / f),
        (this._y = (o + u) / f),
        (this._z = 0.25 * f));
    }
    return (this._onChangeCallback(), this);
  }
  setFromUnitVectors(t, e) {
    let s = t.dot(e) + 1;
    return (
      s < Number.EPSILON
        ? ((s = 0),
          Math.abs(t.x) > Math.abs(t.z)
            ? ((this._x = -t.y), (this._y = t.x), (this._z = 0), (this._w = s))
            : ((this._x = 0), (this._y = -t.z), (this._z = t.y), (this._w = s)))
        : ((this._x = t.y * e.z - t.z * e.y),
          (this._y = t.z * e.x - t.x * e.z),
          (this._z = t.x * e.y - t.y * e.x),
          (this._w = s)),
      this.normalize()
    );
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(Ut(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const s = this.angleTo(t);
    if (s === 0) return this;
    const n = Math.min(1, e / s);
    return (this.slerp(t, n), this);
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w,
    );
  }
  normalize() {
    let t = this.length();
    return (
      t === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((t = 1 / t),
          (this._x = this._x * t),
          (this._y = this._y * t),
          (this._z = this._z * t),
          (this._w = this._w * t)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const s = t._x,
      n = t._y,
      i = t._z,
      c = t._w,
      h = e._x,
      o = e._y,
      a = e._z,
      u = e._w;
    return (
      (this._x = s * u + c * h + n * a - i * o),
      (this._y = n * u + c * o + i * h - s * a),
      (this._z = i * u + c * a + s * o - n * h),
      (this._w = c * u - s * h - n * o - i * a),
      this._onChangeCallback(),
      this
    );
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const s = this._x,
      n = this._y,
      i = this._z,
      c = this._w;
    let h = c * t._w + s * t._x + n * t._y + i * t._z;
    if (
      (h < 0
        ? ((this._w = -t._w),
          (this._x = -t._x),
          (this._y = -t._y),
          (this._z = -t._z),
          (h = -h))
        : this.copy(t),
      h >= 1)
    )
      return ((this._w = c), (this._x = s), (this._y = n), (this._z = i), this);
    const o = 1 - h * h;
    if (o <= Number.EPSILON) {
      const f = 1 - e;
      return (
        (this._w = f * c + e * this._w),
        (this._x = f * s + e * this._x),
        (this._y = f * n + e * this._y),
        (this._z = f * i + e * this._z),
        this.normalize(),
        this
      );
    }
    const a = Math.sqrt(o),
      u = Math.atan2(a, h),
      d = Math.sin((1 - e) * u) / a,
      l = Math.sin(e * u) / a;
    return (
      (this._w = c * d + this._w * l),
      (this._x = s * d + this._x * l),
      (this._y = n * d + this._y * l),
      (this._z = i * d + this._z * l),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(t, e, s) {
    return this.copy(t).slerp(e, s);
  }
  random() {
    const t = 2 * Math.PI * Math.random(),
      e = 2 * Math.PI * Math.random(),
      s = Math.random(),
      n = Math.sqrt(1 - s),
      i = Math.sqrt(s);
    return this.set(
      n * Math.sin(t),
      n * Math.cos(t),
      i * Math.sin(e),
      i * Math.cos(e),
    );
  }
  equals(t) {
    return (
      t._x === this._x &&
      t._y === this._y &&
      t._z === this._z &&
      t._w === this._w
    );
  }
  fromArray(t, e = 0) {
    return (
      (this._x = t[e]),
      (this._y = t[e + 1]),
      (this._z = t[e + 2]),
      (this._w = t[e + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this._x),
      (t[e + 1] = this._y),
      (t[e + 2] = this._z),
      (t[e + 3] = this._w),
      t
    );
  }
  fromBufferAttribute(t, e) {
    return (
      (this._x = t.getX(e)),
      (this._y = t.getY(e)),
      (this._z = t.getZ(e)),
      (this._w = t.getW(e)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return ((this._onChangeCallback = t), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._w);
  }
}
