// assets__chunk-mesh-worker-coep-v1-BX2YFLnd 09 — elements
// Lines 2391-3219 of readable/assets__chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
class Ut {
  constructor(t, e, s, n, i, h, c, o, a, u, d, l, p, m, _, y) {
    ((Ut.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      t !== void 0 && this.set(t, e, s, n, i, h, c, o, a, u, d, l, p, m, _, y));
  }
  set(t, e, s, n, i, h, c, o, a, u, d, l, p, m, _, y) {
    const E = this.elements;
    return (
      (E[0] = t),
      (E[4] = e),
      (E[8] = s),
      (E[12] = n),
      (E[1] = i),
      (E[5] = h),
      (E[9] = c),
      (E[13] = o),
      (E[2] = a),
      (E[6] = u),
      (E[10] = d),
      (E[14] = l),
      (E[3] = p),
      (E[7] = m),
      (E[11] = _),
      (E[15] = y),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  clone() {
    return new Ut().fromArray(this.elements);
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
      n = 1 / Ee.setFromMatrixColumn(t, 0).length(),
      i = 1 / Ee.setFromMatrixColumn(t, 1).length(),
      h = 1 / Ee.setFromMatrixColumn(t, 2).length();
    return (
      (e[0] = s[0] * n),
      (e[1] = s[1] * n),
      (e[2] = s[2] * n),
      (e[3] = 0),
      (e[4] = s[4] * i),
      (e[5] = s[5] * i),
      (e[6] = s[6] * i),
      (e[7] = 0),
      (e[8] = s[8] * h),
      (e[9] = s[9] * h),
      (e[10] = s[10] * h),
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
      h = Math.cos(s),
      c = Math.sin(s),
      o = Math.cos(n),
      a = Math.sin(n),
      u = Math.cos(i),
      d = Math.sin(i);
    if (t.order === "XYZ") {
      const l = h * u,
        p = h * d,
        m = c * u,
        _ = c * d;
      ((e[0] = o * u),
        (e[4] = -o * d),
        (e[8] = a),
        (e[1] = p + m * a),
        (e[5] = l - _ * a),
        (e[9] = -c * o),
        (e[2] = _ - l * a),
        (e[6] = m + p * a),
        (e[10] = h * o));
    } else if (t.order === "YXZ") {
      const l = o * u,
        p = o * d,
        m = a * u,
        _ = a * d;
      ((e[0] = l + _ * c),
        (e[4] = m * c - p),
        (e[8] = h * a),
        (e[1] = h * d),
        (e[5] = h * u),
        (e[9] = -c),
        (e[2] = p * c - m),
        (e[6] = _ + l * c),
        (e[10] = h * o));
    } else if (t.order === "ZXY") {
      const l = o * u,
        p = o * d,
        m = a * u,
        _ = a * d;
      ((e[0] = l - _ * c),
        (e[4] = -h * d),
        (e[8] = m + p * c),
        (e[1] = p + m * c),
        (e[5] = h * u),
        (e[9] = _ - l * c),
        (e[2] = -h * a),
        (e[6] = c),
        (e[10] = h * o));
    } else if (t.order === "ZYX") {
      const l = h * u,
        p = h * d,
        m = c * u,
        _ = c * d;
      ((e[0] = o * u),
        (e[4] = m * a - p),
        (e[8] = l * a + _),
        (e[1] = o * d),
        (e[5] = _ * a + l),
        (e[9] = p * a - m),
        (e[2] = -a),
        (e[6] = c * o),
        (e[10] = h * o));
    } else if (t.order === "YZX") {
      const l = h * o,
        p = h * a,
        m = c * o,
        _ = c * a;
      ((e[0] = o * u),
        (e[4] = _ - l * d),
        (e[8] = m * d + p),
        (e[1] = d),
        (e[5] = h * u),
        (e[9] = -c * u),
        (e[2] = -a * u),
        (e[6] = p * d + m),
        (e[10] = l - _ * d));
    } else if (t.order === "XZY") {
      const l = h * o,
        p = h * a,
        m = c * o,
        _ = c * a;
      ((e[0] = o * u),
        (e[4] = -d),
        (e[8] = a * u),
        (e[1] = l * d + _),
        (e[5] = h * u),
        (e[9] = p * d - m),
        (e[2] = m * d - p),
        (e[6] = c * u),
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
    return this.compose(zi, t, Fi);
  }
  lookAt(t, e, s) {
    const n = this.elements;
    return (
      mt.subVectors(t, e),
      mt.lengthSq() === 0 && (mt.z = 1),
      mt.normalize(),
      Kt.crossVectors(s, mt),
      Kt.lengthSq() === 0 &&
        (Math.abs(s.z) === 1 ? (mt.x += 1e-4) : (mt.z += 1e-4),
        mt.normalize(),
        Kt.crossVectors(s, mt)),
      Kt.normalize(),
      os.crossVectors(mt, Kt),
      (n[0] = Kt.x),
      (n[4] = os.x),
      (n[8] = mt.x),
      (n[1] = Kt.y),
      (n[5] = os.y),
      (n[9] = mt.y),
      (n[2] = Kt.z),
      (n[6] = os.z),
      (n[10] = mt.z),
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
      h = s[0],
      c = s[4],
      o = s[8],
      a = s[12],
      u = s[1],
      d = s[5],
      l = s[9],
      p = s[13],
      m = s[2],
      _ = s[6],
      y = s[10],
      E = s[14],
      M = s[3],
      g = s[7],
      L = s[11],
      I = s[15],
      A = n[0],
      x = n[4],
      S = n[8],
      R = n[12],
      O = n[1],
      k = n[5],
      W = n[9],
      H = n[13],
      X = n[2],
      B = n[6],
      N = n[10],
      F = n[14],
      v = n[3],
      Z = n[7],
      j = n[11],
      q = n[15];
    return (
      (i[0] = h * A + c * O + o * X + a * v),
      (i[4] = h * x + c * k + o * B + a * Z),
      (i[8] = h * S + c * W + o * N + a * j),
      (i[12] = h * R + c * H + o * F + a * q),
      (i[1] = u * A + d * O + l * X + p * v),
      (i[5] = u * x + d * k + l * B + p * Z),
      (i[9] = u * S + d * W + l * N + p * j),
      (i[13] = u * R + d * H + l * F + p * q),
      (i[2] = m * A + _ * O + y * X + E * v),
      (i[6] = m * x + _ * k + y * B + E * Z),
      (i[10] = m * S + _ * W + y * N + E * j),
      (i[14] = m * R + _ * H + y * F + E * q),
      (i[3] = M * A + g * O + L * X + I * v),
      (i[7] = M * x + g * k + L * B + I * Z),
      (i[11] = M * S + g * W + L * N + I * j),
      (i[15] = M * R + g * H + L * F + I * q),
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
      h = t[1],
      c = t[5],
      o = t[9],
      a = t[13],
      u = t[2],
      d = t[6],
      l = t[10],
      p = t[14],
      m = t[3],
      _ = t[7],
      y = t[11],
      E = t[15];
    return (
      m *
        (+i * o * d -
          n * a * d -
          i * c * l +
          s * a * l +
          n * c * p -
          s * o * p) +
      _ *
        (+e * o * p -
          e * a * l +
          i * h * l -
          n * h * p +
          n * a * u -
          i * o * u) +
      y *
        (+e * a * d -
          e * c * p -
          i * h * d +
          s * h * p +
          i * c * u -
          s * a * u) +
      E *
        (-n * c * u - e * o * d + e * c * l + n * h * d - s * h * l + s * o * u)
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
      h = t[4],
      c = t[5],
      o = t[6],
      a = t[7],
      u = t[8],
      d = t[9],
      l = t[10],
      p = t[11],
      m = t[12],
      _ = t[13],
      y = t[14],
      E = t[15],
      M = d * y * a - _ * l * a + _ * o * p - c * y * p - d * o * E + c * l * E,
      g = m * l * a - u * y * a - m * o * p + h * y * p + u * o * E - h * l * E,
      L = u * _ * a - m * d * a + m * c * p - h * _ * p - u * c * E + h * d * E,
      I = m * d * o - u * _ * o - m * c * l + h * _ * l + u * c * y - h * d * y,
      A = e * M + s * g + n * L + i * I;
    if (A === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const x = 1 / A;
    return (
      (t[0] = M * x),
      (t[1] =
        (_ * l * i -
          d * y * i -
          _ * n * p +
          s * y * p +
          d * n * E -
          s * l * E) *
        x),
      (t[2] =
        (c * y * i -
          _ * o * i +
          _ * n * a -
          s * y * a -
          c * n * E +
          s * o * E) *
        x),
      (t[3] =
        (d * o * i -
          c * l * i -
          d * n * a +
          s * l * a +
          c * n * p -
          s * o * p) *
        x),
      (t[4] = g * x),
      (t[5] =
        (u * y * i -
          m * l * i +
          m * n * p -
          e * y * p -
          u * n * E +
          e * l * E) *
        x),
      (t[6] =
        (m * o * i -
          h * y * i -
          m * n * a +
          e * y * a +
          h * n * E -
          e * o * E) *
        x),
      (t[7] =
        (h * l * i -
          u * o * i +
          u * n * a -
          e * l * a -
          h * n * p +
          e * o * p) *
        x),
      (t[8] = L * x),
      (t[9] =
        (m * d * i -
          u * _ * i -
          m * s * p +
          e * _ * p +
          u * s * E -
          e * d * E) *
        x),
      (t[10] =
        (h * _ * i -
          m * c * i +
          m * s * a -
          e * _ * a -
          h * s * E +
          e * c * E) *
        x),
      (t[11] =
        (u * c * i -
          h * d * i -
          u * s * a +
          e * d * a +
          h * s * p -
          e * c * p) *
        x),
      (t[12] = I * x),
      (t[13] =
        (u * _ * n -
          m * d * n +
          m * s * l -
          e * _ * l -
          u * s * y +
          e * d * y) *
        x),
      (t[14] =
        (m * c * n -
          h * _ * n -
          m * s * o +
          e * _ * o +
          h * s * y -
          e * c * y) *
        x),
      (t[15] =
        (h * d * n -
          u * c * n +
          u * s * o -
          e * d * o -
          h * s * l +
          e * c * l) *
        x),
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
      h = t.x,
      c = t.y,
      o = t.z,
      a = i * h,
      u = i * c;
    return (
      this.set(
        a * h + s,
        a * c - n * o,
        a * o + n * c,
        0,
        a * c + n * o,
        u * c + s,
        u * o - n * h,
        0,
        a * o - n * c,
        u * o + n * h,
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
  makeShear(t, e, s, n, i, h) {
    return (this.set(1, s, i, 0, t, 1, h, 0, e, n, 1, 0, 0, 0, 0, 1), this);
  }
  compose(t, e, s) {
    const n = this.elements,
      i = e._x,
      h = e._y,
      c = e._z,
      o = e._w,
      a = i + i,
      u = h + h,
      d = c + c,
      l = i * a,
      p = i * u,
      m = i * d,
      _ = h * u,
      y = h * d,
      E = c * d,
      M = o * a,
      g = o * u,
      L = o * d,
      I = s.x,
      A = s.y,
      x = s.z;
    return (
      (n[0] = (1 - (_ + E)) * I),
      (n[1] = (p + L) * I),
      (n[2] = (m - g) * I),
      (n[3] = 0),
      (n[4] = (p - L) * A),
      (n[5] = (1 - (l + E)) * A),
      (n[6] = (y + M) * A),
      (n[7] = 0),
      (n[8] = (m + g) * x),
      (n[9] = (y - M) * x),
      (n[10] = (1 - (l + _)) * x),
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
    let i = Ee.set(n[0], n[1], n[2]).length();
    const h = Ee.set(n[4], n[5], n[6]).length(),
      c = Ee.set(n[8], n[9], n[10]).length();
    (this.determinant() < 0 && (i = -i),
      (t.x = n[12]),
      (t.y = n[13]),
      (t.z = n[14]),
      Lt.copy(this));
    const a = 1 / i,
      u = 1 / h,
      d = 1 / c;
    return (
      (Lt.elements[0] *= a),
      (Lt.elements[1] *= a),
      (Lt.elements[2] *= a),
      (Lt.elements[4] *= u),
      (Lt.elements[5] *= u),
      (Lt.elements[6] *= u),
      (Lt.elements[8] *= d),
      (Lt.elements[9] *= d),
      (Lt.elements[10] *= d),
      e.setFromRotationMatrix(Lt),
      (s.x = i),
      (s.y = h),
      (s.z = c),
      this
    );
  }
  makePerspective(t, e, s, n, i, h, c = 2e3) {
    const o = this.elements,
      a = (2 * i) / (e - t),
      u = (2 * i) / (s - n),
      d = (e + t) / (e - t),
      l = (s + n) / (s - n);
    let p, m;
    if (c === 2e3) ((p = -(h + i) / (h - i)), (m = (-2 * h * i) / (h - i)));
    else if (c === 2001) ((p = -h / (h - i)), (m = (-h * i) / (h - i)));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + c,
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
      (o[10] = p),
      (o[14] = m),
      (o[3] = 0),
      (o[7] = 0),
      (o[11] = -1),
      (o[15] = 0),
      this
    );
  }
  makeOrthographic(t, e, s, n, i, h, c = 2e3) {
    const o = this.elements,
      a = 1 / (e - t),
      u = 1 / (s - n),
      d = 1 / (h - i),
      l = (e + t) * a,
      p = (s + n) * u;
    let m, _;
    if (c === 2e3) ((m = (h + i) * d), (_ = -2 * d));
    else if (c === 2001) ((m = i * d), (_ = -1 * d));
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + c,
      );
    return (
      (o[0] = 2 * a),
      (o[4] = 0),
      (o[8] = 0),
      (o[12] = -l),
      (o[1] = 0),
      (o[5] = 2 * u),
      (o[9] = 0),
      (o[13] = -p),
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
