// assets__chunk-mesh-worker-coep-v1-BX2YFLnd 05 — math
// Lines 1154-1579 of readable/assets__chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
class Ke {
  constructor(t = 0, e = 0, s = 0, n = 1) {
    ((this.isQuaternion = !0),
      (this._x = t),
      (this._y = e),
      (this._z = s),
      (this._w = n));
  }
  static slerpFlat(t, e, s, n, i, h, c) {
    let o = s[n + 0],
      a = s[n + 1],
      u = s[n + 2],
      d = s[n + 3];
    const l = i[h + 0],
      p = i[h + 1],
      m = i[h + 2],
      _ = i[h + 3];
    if (c === 0) {
      ((t[e + 0] = o), (t[e + 1] = a), (t[e + 2] = u), (t[e + 3] = d));
      return;
    }
    if (c === 1) {
      ((t[e + 0] = l), (t[e + 1] = p), (t[e + 2] = m), (t[e + 3] = _));
      return;
    }
    if (d !== _ || o !== l || a !== p || u !== m) {
      let y = 1 - c;
      const E = o * l + a * p + u * m + d * _,
        M = E >= 0 ? 1 : -1,
        g = 1 - E * E;
      if (g > Number.EPSILON) {
        const I = Math.sqrt(g),
          A = Math.atan2(I, E * M);
        ((y = Math.sin(y * A) / I), (c = Math.sin(c * A) / I));
      }
      const L = c * M;
      if (
        ((o = o * y + l * L),
        (a = a * y + p * L),
        (u = u * y + m * L),
        (d = d * y + _ * L),
        y === 1 - c)
      ) {
        const I = 1 / Math.sqrt(o * o + a * a + u * u + d * d);
        ((o *= I), (a *= I), (u *= I), (d *= I));
      }
    }
    ((t[e] = o), (t[e + 1] = a), (t[e + 2] = u), (t[e + 3] = d));
  }
  static multiplyQuaternionsFlat(t, e, s, n, i, h) {
    const c = s[n],
      o = s[n + 1],
      a = s[n + 2],
      u = s[n + 3],
      d = i[h],
      l = i[h + 1],
      p = i[h + 2],
      m = i[h + 3];
    return (
      (t[e] = c * m + u * d + o * p - a * l),
      (t[e + 1] = o * m + u * l + a * d - c * p),
      (t[e + 2] = a * m + u * p + c * l - o * d),
      (t[e + 3] = u * m - c * d - o * l - a * p),
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
      h = t._order,
      c = Math.cos,
      o = Math.sin,
      a = c(s / 2),
      u = c(n / 2),
      d = c(i / 2),
      l = o(s / 2),
      p = o(n / 2),
      m = o(i / 2);
    switch (h) {
      case "XYZ":
        ((this._x = l * u * d + a * p * m),
          (this._y = a * p * d - l * u * m),
          (this._z = a * u * m + l * p * d),
          (this._w = a * u * d - l * p * m));
        break;
      case "YXZ":
        ((this._x = l * u * d + a * p * m),
          (this._y = a * p * d - l * u * m),
          (this._z = a * u * m - l * p * d),
          (this._w = a * u * d + l * p * m));
        break;
      case "ZXY":
        ((this._x = l * u * d - a * p * m),
          (this._y = a * p * d + l * u * m),
          (this._z = a * u * m + l * p * d),
          (this._w = a * u * d - l * p * m));
        break;
      case "ZYX":
        ((this._x = l * u * d - a * p * m),
          (this._y = a * p * d + l * u * m),
          (this._z = a * u * m - l * p * d),
          (this._w = a * u * d + l * p * m));
        break;
      case "YZX":
        ((this._x = l * u * d + a * p * m),
          (this._y = a * p * d + l * u * m),
          (this._z = a * u * m - l * p * d),
          (this._w = a * u * d - l * p * m));
        break;
      case "XZY":
        ((this._x = l * u * d - a * p * m),
          (this._y = a * p * d - l * u * m),
          (this._z = a * u * m + l * p * d),
          (this._w = a * u * d + l * p * m));
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
            h,
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
      h = e[1],
      c = e[5],
      o = e[9],
      a = e[2],
      u = e[6],
      d = e[10],
      l = s + c + d;
    if (l > 0) {
      const p = 0.5 / Math.sqrt(l + 1);
      ((this._w = 0.25 / p),
        (this._x = (u - o) * p),
        (this._y = (i - a) * p),
        (this._z = (h - n) * p));
    } else if (s > c && s > d) {
      const p = 2 * Math.sqrt(1 + s - c - d);
      ((this._w = (u - o) / p),
        (this._x = 0.25 * p),
        (this._y = (n + h) / p),
        (this._z = (i + a) / p));
    } else if (c > d) {
      const p = 2 * Math.sqrt(1 + c - s - d);
      ((this._w = (i - a) / p),
        (this._x = (n + h) / p),
        (this._y = 0.25 * p),
        (this._z = (o + u) / p));
    } else {
      const p = 2 * Math.sqrt(1 + d - s - c);
      ((this._w = (h - n) / p),
        (this._x = (i + a) / p),
        (this._y = (o + u) / p),
        (this._z = 0.25 * p));
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
    return 2 * Math.acos(Math.abs(Ft(this.dot(t), -1, 1)));
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
      h = t._w,
      c = e._x,
      o = e._y,
      a = e._z,
      u = e._w;
    return (
      (this._x = s * u + h * c + n * a - i * o),
      (this._y = n * u + h * o + i * c - s * a),
      (this._z = i * u + h * a + s * o - n * c),
      (this._w = h * u - s * c - n * o - i * a),
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
      h = this._w;
    let c = h * t._w + s * t._x + n * t._y + i * t._z;
    if (
      (c < 0
        ? ((this._w = -t._w),
          (this._x = -t._x),
          (this._y = -t._y),
          (this._z = -t._z),
          (c = -c))
        : this.copy(t),
      c >= 1)
    )
      return ((this._w = h), (this._x = s), (this._y = n), (this._z = i), this);
    const o = 1 - c * c;
    if (o <= Number.EPSILON) {
      const p = 1 - e;
      return (
        (this._w = p * h + e * this._w),
        (this._x = p * s + e * this._x),
        (this._y = p * n + e * this._y),
        (this._z = p * i + e * this._z),
        this.normalize(),
        this
      );
    }
    const a = Math.sqrt(o),
      u = Math.atan2(a, c),
      d = Math.sin((1 - e) * u) / a,
      l = Math.sin(e * u) / a;
    return (
      (this._w = h * d + this._w * l),
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
