// chunk-mesh-worker-coep-v1-GBSiXDQy 09 — elements
// Lines 2385-3213 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
class Nt {
  constructor(t, e, s, n, i, c, h, o, a, u, d, l, f, m, _, g) {
    ((Nt.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      t !== void 0 && this.set(t, e, s, n, i, c, h, o, a, u, d, l, f, m, _, g));
  }
  set(t, e, s, n, i, c, h, o, a, u, d, l, f, m, _, g) {
    const y = this.elements;
    return (
      (y[0] = t),
      (y[4] = e),
      (y[8] = s),
      (y[12] = n),
      (y[1] = i),
      (y[5] = c),
      (y[9] = h),
      (y[13] = o),
      (y[2] = a),
      (y[6] = u),
      (y[10] = d),
      (y[14] = l),
      (y[3] = f),
      (y[7] = m),
      (y[11] = _),
      (y[15] = g),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  clone() {
    return new Nt().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements,
      s = t.elements;
    return (
      (e[0] = s[0]),
      (e[1] = s[1]),
      (e[2] = s[2]),
      (e[3] = s[3]),
      (e[4] = s[4]),
      (e[5] = s[5]),
      (e[6] = s[6]),
      (e[7] = s[7]),
      (e[8] = s[8]),
      (e[9] = s[9]),
      (e[10] = s[10]),
      (e[11] = s[11]),
      (e[12] = s[12]),
      (e[13] = s[13]),
      (e[14] = s[14]),
      (e[15] = s[15]),
      this
    );
  }
  copyPosition(t) {
    const e = this.elements,
      s = t.elements;
    return ((e[12] = s[12]), (e[13] = s[13]), (e[14] = s[14]), this);
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return (
      this.set(
        e[0],
        e[3],
        e[6],
        0,
        e[1],
        e[4],
        e[7],
        0,
        e[2],
        e[5],
        e[8],
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractBasis(t, e, s) {
    return (
      t.setFromMatrixColumn(this, 0),
      e.setFromMatrixColumn(this, 1),
      s.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(t, e, s) {
    return (
      this.set(
        t.x,
        e.x,
        s.x,
        0,
        t.y,
        e.y,
        s.y,
        0,
        t.z,
        e.z,
        s.z,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractRotation(t) {
    const e = this.elements,
      s = t.elements,
      n = 1 / fe.setFromMatrixColumn(t, 0).length(),
      i = 1 / fe.setFromMatrixColumn(t, 1).length(),
      c = 1 / fe.setFromMatrixColumn(t, 2).length();
    return (
      (e[0] = s[0] * n),
      (e[1] = s[1] * n),
      (e[2] = s[2] * n),
      (e[3] = 0),
      (e[4] = s[4] * i),
      (e[5] = s[5] * i),
      (e[6] = s[6] * i),
      (e[7] = 0),
      (e[8] = s[8] * c),
      (e[9] = s[9] * c),
      (e[10] = s[10] * c),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1),
      this
    );
  }
  makeRotationFromEuler(t) {
    const e = this.elements,
      s = t.x,
      n = t.y,
      i = t.z,
      c = Math.cos(s),
      h = Math.sin(s),
      o = Math.cos(n),
      a = Math.sin(n),
      u = Math.cos(i),
      d = Math.sin(i);
    if (t.order === "XYZ") {
      const l = c * u,
        f = c * d,
        m = h * u,
        _ = h * d;
      ((e[0] = o * u),
        (e[4] = -o * d),
        (e[8] = a),
        (e[1] = f + m * a),
        (e[5] = l - _ * a),
        (e[9] = -h * o),
        (e[2] = _ - l * a),
        (e[6] = m + f * a),
        (e[10] = c * o));
    } else if (t.order === "YXZ") {
      const l = o * u,
        f = o * d,
        m = a * u,
        _ = a * d;
      ((e[0] = l + _ * h),
        (e[4] = m * h - f),
        (e[8] = c * a),
        (e[1] = c * d),
        (e[5] = c * u),
        (e[9] = -h),
        (e[2] = f * h - m),
        (e[6] = _ + l * h),
        (e[10] = c * o));
    } else if (t.order === "ZXY") {
      const l = o * u,
        f = o * d,
        m = a * u,
        _ = a * d;
      ((e[0] = l - _ * h),
        (e[4] = -c * d),
        (e[8] = m + f * h),
        (e[1] = f + m * h),
        (e[5] = c * u),
        (e[9] = _ - l * h),
        (e[2] = -c * a),
        (e[6] = h),
        (e[10] = c * o));
    } else if (t.order === "ZYX") {
      const l = c * u,
        f = c * d,
        m = h * u,
        _ = h * d;
      ((e[0] = o * u),
        (e[4] = m * a - f),
        (e[8] = l * a + _),
        (e[1] = o * d),
        (e[5] = _ * a + l),
        (e[9] = f * a - m),
        (e[2] = -a),
        (e[6] = h * o),
        (e[10] = c * o));
    } else if (t.order === "YZX") {
      const l = c * o,
        f = c * a,
        m = h * o,
        _ = h * a;
      ((e[0] = o * u),
        (e[4] = _ - l * d),
        (e[8] = m * d + f),
        (e[1] = d),
        (e[5] = c * u),
        (e[9] = -h * u),
        (e[2] = -a * u),
        (e[6] = f * d + m),
        (e[10] = l - _ * d));
    } else if (t.order === "XZY") {
      const l = c * o,
        f = c * a,
        m = h * o,
        _ = h * a;
      ((e[0] = o * u),
        (e[4] = -d),
        (e[8] = a * u),
        (e[1] = l * d + _),
        (e[5] = c * u),
        (e[9] = f * d - m),
        (e[2] = m * d - f),
        (e[6] = h * u),
        (e[10] = _ * d + l));
    }
    return (
      (e[3] = 0),
      (e[7] = 0),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Ui, t, Di);
  }
  lookAt(t, e, s) {
    const n = this.elements;
    return (
      lt.subVectors(t, e),
      lt.lengthSq() === 0 && (lt.z = 1),
      lt.normalize(),
      Yt.crossVectors(s, lt),
      Yt.lengthSq() === 0 &&
        (Math.abs(s.z) === 1 ? (lt.x += 1e-4) : (lt.z += 1e-4),
        lt.normalize(),
        Yt.crossVectors(s, lt)),
      Yt.normalize(),
      ss.crossVectors(lt, Yt),
      (n[0] = Yt.x),
      (n[4] = ss.x),
      (n[8] = lt.x),
      (n[1] = Yt.y),
      (n[5] = ss.y),
      (n[9] = lt.y),
      (n[2] = Yt.z),
      (n[6] = ss.z),
      (n[10] = lt.z),
      this
    );
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const s = t.elements,
      n = e.elements,
      i = this.elements,
      c = s[0],
      h = s[4],
      o = s[8],
      a = s[12],
      u = s[1],
      d = s[5],
      l = s[9],
      f = s[13],
      m = s[2],
      _ = s[6],
      g = s[10],
      y = s[14],
      R = s[3],
      E = s[7],
      x = s[11],
      S = s[15],
      M = n[0],
      A = n[4],
      O = n[8],
      I = n[12],
      k = n[1],
      w = n[5],
      N = n[9],
      L = n[13],
      U = n[2],
      v = n[6],
      q = n[10],
      K = n[14],
      G = n[3],
      V = n[7],
      $ = n[11],
      X = n[15];
    return (
      (i[0] = c * M + h * k + o * U + a * G),
      (i[4] = c * A + h * w + o * v + a * V),
      (i[8] = c * O + h * N + o * q + a * $),
      (i[12] = c * I + h * L + o * K + a * X),
      (i[1] = u * M + d * k + l * U + f * G),
      (i[5] = u * A + d * w + l * v + f * V),
      (i[9] = u * O + d * N + l * q + f * $),
      (i[13] = u * I + d * L + l * K + f * X),
      (i[2] = m * M + _ * k + g * U + y * G),
      (i[6] = m * A + _ * w + g * v + y * V),
      (i[10] = m * O + _ * N + g * q + y * $),
      (i[14] = m * I + _ * L + g * K + y * X),
      (i[3] = R * M + E * k + x * U + S * G),
      (i[7] = R * A + E * w + x * v + S * V),
      (i[11] = R * O + E * N + x * q + S * $),
      (i[15] = R * I + E * L + x * K + S * X),
      this
    );
  }
  multiplyScalar(t) {
    const e = this.elements;
    return (
      (e[0] *= t),
      (e[4] *= t),
      (e[8] *= t),
      (e[12] *= t),
      (e[1] *= t),
      (e[5] *= t),
      (e[9] *= t),
      (e[13] *= t),
      (e[2] *= t),
      (e[6] *= t),
      (e[10] *= t),
      (e[14] *= t),
      (e[3] *= t),
      (e[7] *= t),
      (e[11] *= t),
      (e[15] *= t),
      this
    );
  }
  determinant() {
    const t = this.elements,
      e = t[0],
      s = t[4],
      n = t[8],
      i = t[12],
      c = t[1],
      h = t[5],
      o = t[9],
      a = t[13],
      u = t[2],
      d = t[6],
      l = t[10],
      f = t[14],
      m = t[3],
      _ = t[7],
      g = t[11],
      y = t[15];
    return (
      m *
        (+i * o * d -
          n * a * d -
          i * h * l +
          s * a * l +
          n * h * f -
          s * o * f) +
      _ *
        (+e * o * f -
          e * a * l +
          i * c * l -
          n * c * f +
          n * a * u -
          i * o * u) +
      g *
        (+e * a * d -
          e * h * f -
          i * c * d +
          s * c * f +
          i * h * u -
          s * a * u) +
      y *
        (-n * h * u - e * o * d + e * h * l + n * c * d - s * c * l + s * o * u)
    );
  }
  transpose() {
    const t = this.elements;
    let e;
    return (
      (e = t[1]),
      (t[1] = t[4]),
      (t[4] = e),
      (e = t[2]),
      (t[2] = t[8]),
      (t[8] = e),
      (e = t[6]),
      (t[6] = t[9]),
      (t[9] = e),
      (e = t[3]),
      (t[3] = t[12]),
      (t[12] = e),
      (e = t[7]),
      (t[7] = t[13]),
      (t[13] = e),
      (e = t[11]),
      (t[11] = t[14]),
      (t[14] = e),
      this
    );
  }
  setPosition(t, e, s) {
    const n = this.elements;
    return (
      t.isVector3
        ? ((n[12] = t.x), (n[13] = t.y), (n[14] = t.z))
        : ((n[12] = t), (n[13] = e), (n[14] = s)),
      this
    );
  }
  invert() {
    const t = this.elements,
      e = t[0],
      s = t[1],
      n = t[2],
      i = t[3],
      c = t[4],
      h = t[5],
      o = t[6],
      a = t[7],
      u = t[8],
      d = t[9],
      l = t[10],
      f = t[11],
      m = t[12],
      _ = t[13],
      g = t[14],
      y = t[15],
      R = d * g * a - _ * l * a + _ * o * f - h * g * f - d * o * y + h * l * y,
      E = m * l * a - u * g * a - m * o * f + c * g * f + u * o * y - c * l * y,
      x = u * _ * a - m * d * a + m * h * f - c * _ * f - u * h * y + c * d * y,
      S = m * d * o - u * _ * o - m * h * l + c * _ * l + u * h * g - c * d * g,
      M = e * R + s * E + n * x + i * S;
    if (M === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const A = 1 / M;
    return (
      (t[0] = R * A),
      (t[1] =
        (_ * l * i -
          d * g * i -
          _ * n * f +
          s * g * f +
          d * n * y -
          s * l * y) *
        A),
      (t[2] =
        (h * g * i -
          _ * o * i +
          _ * n * a -
          s * g * a -
          h * n * y +
          s * o * y) *
        A),
      (t[3] =
        (d * o * i -
          h * l * i -
          d * n * a +
          s * l * a +
          h * n * f -
          s * o * f) *
        A),
      (t[4] = E * A),
      (t[5] =
        (u * g * i -
          m * l * i +
          m * n * f -
          e * g * f -
          u * n * y +
          e * l * y) *
        A),
      (t[6] =
        (m * o * i -
          c * g * i -
          m * n * a +
          e * g * a +
          c * n * y -
          e * o * y) *
        A),
      (t[7] =
        (c * l * i -
          u * o * i +
          u * n * a -
          e * l * a -
          c * n * f +
          e * o * f) *
        A),
      (t[8] = x * A),
      (t[9] =
        (m * d * i -
          u * _ * i -
          m * s * f +
          e * _ * f +
          u * s * y -
          e * d * y) *
        A),
      (t[10] =
        (c * _ * i -
          m * h * i +
          m * s * a -
          e * _ * a -
          c * s * y +
          e * h * y) *
        A),
      (t[11] =
        (u * h * i -
          c * d * i -
          u * s * a +
          e * d * a +
          c * s * f -
          e * h * f) *
        A),
      (t[12] = S * A),
      (t[13] =
        (u * _ * n -
          m * d * n +
          m * s * l -
          e * _ * l -
          u * s * g +
          e * d * g) *
        A),
      (t[14] =
        (m * h * n -
          c * _ * n -
          m * s * o +
          e * _ * o +
          c * s * g -
          e * h * g) *
        A),
      (t[15] =
        (c * d * n -
          u * h * n +
          u * s * o -
          e * d * o -
          c * s * l +
          e * h * l) *
        A),
      this
    );
  }
  scale(t) {
    const e = this.elements,
      s = t.x,
      n = t.y,
      i = t.z;
    return (
      (e[0] *= s),
      (e[4] *= n),
      (e[8] *= i),
      (e[1] *= s),
      (e[5] *= n),
      (e[9] *= i),
      (e[2] *= s),
      (e[6] *= n),
      (e[10] *= i),
      (e[3] *= s),
      (e[7] *= n),
      (e[11] *= i),
      this
    );
  }
  getMaxScaleOnAxis() {
    const t = this.elements,
      e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
      s = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
      n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, s, n));
  }
  makeTranslation(t, e, s) {
    return (
      t.isVector3
        ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, s, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(t) {
    const e = Math.cos(t),
      s = Math.sin(t);
    return (this.set(1, 0, 0, 0, 0, e, -s, 0, 0, s, e, 0, 0, 0, 0, 1), this);
  }
  makeRotationY(t) {
    const e = Math.cos(t),
      s = Math.sin(t);
    return (this.set(e, 0, s, 0, 0, 1, 0, 0, -s, 0, e, 0, 0, 0, 0, 1), this);
  }
  makeRotationZ(t) {
    const e = Math.cos(t),
      s = Math.sin(t);
    return (this.set(e, -s, 0, 0, s, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  makeRotationAxis(t, e) {
    const s = Math.cos(e),
      n = Math.sin(e),
      i = 1 - s,
      c = t.x,
      h = t.y,
      o = t.z,
      a = i * c,
      u = i * h;
    return (
      this.set(
        a * c + s,
        a * h - n * o,
        a * o + n * h,
        0,
        a * h + n * o,
        u * h + s,
        u * o - n * c,
        0,
        a * o - n * h,
        u * o + n * c,
        i * o * o + s,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  makeScale(t, e, s) {
    return (this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, s, 0, 0, 0, 0, 1), this);
  }
  makeShear(t, e, s, n, i, c) {
    return (this.set(1, s, i, 0, t, 1, c, 0, e, n, 1, 0, 0, 0, 0, 1), this);
  }
  compose(t, e, s) {
    const n = this.elements,
      i = e._x,
      c = e._y,
      h = e._z,
      o = e._w,
      a = i + i,
      u = c + c,
      d = h + h,
      l = i * a,
      f = i * u,
      m = i * d,
      _ = c * u,
      g = c * d,
      y = h * d,
      R = o * a,
      E = o * u,
      x = o * d,
      S = s.x,
      M = s.y,
      A = s.z;
    return (
      (n[0] = (1 - (_ + y)) * S),
      (n[1] = (f + x) * S),
      (n[2] = (m - E) * S),
      (n[3] = 0),
      (n[4] = (f - x) * M),
      (n[5] = (1 - (l + y)) * M),
      (n[6] = (g + R) * M),
      (n[7] = 0),
      (n[8] = (m + E) * A),
      (n[9] = (g - R) * A),
      (n[10] = (1 - (l + _)) * A),
      (n[11] = 0),
      (n[12] = t.x),
      (n[13] = t.y),
      (n[14] = t.z),
      (n[15] = 1),
      this
    );
  }
  decompose(t, e, s) {
    const n = this.elements;
    let i = fe.set(n[0], n[1], n[2]).length();
    const c = fe.set(n[4], n[5], n[6]).length(),
      h = fe.set(n[8], n[9], n[10]).length();
    (this.determinant() < 0 && (i = -i),
      (t.x = n[12]),
      (t.y = n[13]),
      (t.z = n[14]),
      Rt.copy(this));
    const a = 1 / i,
      u = 1 / c,
      d = 1 / h;
    return (
      (Rt.elements[0] *= a),
      (Rt.elements[1] *= a),
      (Rt.elements[2] *= a),
      (Rt.elements[4] *= u),
      (Rt.elements[5] *= u),
      (Rt.elements[6] *= u),
      (Rt.elements[8] *= d),
      (Rt.elements[9] *= d),
      (Rt.elements[10] *= d),
      e.setFromRotationMatrix(Rt),
      (s.x = i),
      (s.y = c),
      (s.z = h),
      this
    );
  }
  makePerspective(t, e, s, n, i, c, h = 2e3) {
    const o = this.elements,
      a = (2 * i) / (e - t),
      u = (2 * i) / (s - n),
      d = (e + t) / (e - t),
      l = (s + n) / (s - n);
    let f, m;
    if (h === 2e3) ((f = -(c + i) / (c - i)), (m = (-2 * c * i) / (c - i)));
    else if (h === 2001) ((f = -c / (c - i)), (m = (-c * i) / (c - i)));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + h,
      );
    return (
      (o[0] = a),
      (o[4] = 0),
      (o[8] = d),
      (o[12] = 0),
      (o[1] = 0),
      (o[5] = u),
      (o[9] = l),
      (o[13] = 0),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = f),
      (o[14] = m),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = -1),
      (o[15] = 0),
      this
    );
  }
  makeOrthographic(t, e, s, n, i, c, h = 2e3) {
    const o = this.elements,
      a = 1 / (e - t),
      u = 1 / (s - n),
      d = 1 / (c - i),
      l = (e + t) * a,
      f = (s + n) * u;
    let m, _;
    if (h === 2e3) ((m = (c + i) * d), (_ = -2 * d));
    else if (h === 2001) ((m = i * d), (_ = -1 * d));
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + h,
      );
    return (
      (o[0] = 2 * a),
      (o[4] = 0),
      (o[8] = 0),
      (o[12] = -l),
      (o[1] = 0),
      (o[5] = 2 * u),
      (o[9] = 0),
      (o[13] = -f),
      (o[2] = 0),
      (o[6] = 0),
      (o[10] = _),
      (o[14] = -m),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = 0),
      (o[15] = 1),
      this
    );
  }
  equals(t) {
    const e = this.elements,
      s = t.elements;
    for (let n = 0; n < 16; n++) if (e[n] !== s[n]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let s = 0; s < 16; s++) this.elements[s] = t[s + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const s = this.elements;
    return (
      (t[e] = s[0]),
      (t[e + 1] = s[1]),
      (t[e + 2] = s[2]),
      (t[e + 3] = s[3]),
      (t[e + 4] = s[4]),
      (t[e + 5] = s[5]),
      (t[e + 6] = s[6]),
      (t[e + 7] = s[7]),
      (t[e + 8] = s[8]),
      (t[e + 9] = s[9]),
      (t[e + 10] = s[10]),
      (t[e + 11] = s[11]),
      (t[e + 12] = s[12]),
      (t[e + 13] = s[13]),
      (t[e + 14] = s[14]),
      (t[e + 15] = s[15]),
      t
    );
  }
}
