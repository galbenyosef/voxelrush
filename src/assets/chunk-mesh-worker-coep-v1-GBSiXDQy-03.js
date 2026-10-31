// chunk-mesh-worker-coep-v1-GBSiXDQy 03 — elements
// Lines 598-927 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
class Te {
  constructor(t, e, s, n, i, c, h, o, a) {
    ((Te.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      t !== void 0 && this.set(t, e, s, n, i, c, h, o, a));
  }
  set(t, e, s, n, i, c, h, o, a) {
    const u = this.elements;
    return (
      (u[0] = t),
      (u[1] = n),
      (u[2] = h),
      (u[3] = e),
      (u[4] = i),
      (u[5] = o),
      (u[6] = s),
      (u[7] = c),
      (u[8] = a),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this);
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
      this
    );
  }
  extractBasis(t, e, s) {
    return (
      t.setFromMatrix3Column(this, 0),
      e.setFromMatrix3Column(this, 1),
      s.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return (
      this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
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
      h = s[3],
      o = s[6],
      a = s[1],
      u = s[4],
      d = s[7],
      l = s[2],
      f = s[5],
      m = s[8],
      _ = n[0],
      g = n[3],
      y = n[6],
      R = n[1],
      E = n[4],
      x = n[7],
      S = n[2],
      M = n[5],
      A = n[8];
    return (
      (i[0] = c * _ + h * R + o * S),
      (i[3] = c * g + h * E + o * M),
      (i[6] = c * y + h * x + o * A),
      (i[1] = a * _ + u * R + d * S),
      (i[4] = a * g + u * E + d * M),
      (i[7] = a * y + u * x + d * A),
      (i[2] = l * _ + f * R + m * S),
      (i[5] = l * g + f * E + m * M),
      (i[8] = l * y + f * x + m * A),
      this
    );
  }
  multiplyScalar(t) {
    const e = this.elements;
    return (
      (e[0] *= t),
      (e[3] *= t),
      (e[6] *= t),
      (e[1] *= t),
      (e[4] *= t),
      (e[7] *= t),
      (e[2] *= t),
      (e[5] *= t),
      (e[8] *= t),
      this
    );
  }
  determinant() {
    const t = this.elements,
      e = t[0],
      s = t[1],
      n = t[2],
      i = t[3],
      c = t[4],
      h = t[5],
      o = t[6],
      a = t[7],
      u = t[8];
    return (
      e * c * u - e * h * a - s * i * u + s * h * o + n * i * a - n * c * o
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
      d = u * c - h * a,
      l = h * o - u * i,
      f = a * i - c * o,
      m = e * d + s * l + n * f;
    if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / m;
    return (
      (t[0] = d * _),
      (t[1] = (n * a - u * s) * _),
      (t[2] = (h * s - n * c) * _),
      (t[3] = l * _),
      (t[4] = (u * e - n * o) * _),
      (t[5] = (n * i - h * e) * _),
      (t[6] = f * _),
      (t[7] = (s * o - a * e) * _),
      (t[8] = (c * e - s * i) * _),
      this
    );
  }
  transpose() {
    let t;
    const e = this.elements;
    return (
      (t = e[1]),
      (e[1] = e[3]),
      (e[3] = t),
      (t = e[2]),
      (e[2] = e[6]),
      (e[6] = t),
      (t = e[5]),
      (e[5] = e[7]),
      (e[7] = t),
      this
    );
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return (
      (t[0] = e[0]),
      (t[1] = e[3]),
      (t[2] = e[6]),
      (t[3] = e[1]),
      (t[4] = e[4]),
      (t[5] = e[7]),
      (t[6] = e[2]),
      (t[7] = e[5]),
      (t[8] = e[8]),
      this
    );
  }
  setUvTransform(t, e, s, n, i, c, h) {
    const o = Math.cos(i),
      a = Math.sin(i);
    return (
      this.set(
        s * o,
        s * a,
        -s * (o * c + a * h) + c + t,
        -n * a,
        n * o,
        -n * (-a * c + o * h) + h + e,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(t, e) {
    return (this.premultiply(Ns.makeScale(t, e)), this);
  }
  rotate(t) {
    return (this.premultiply(Ns.makeRotation(-t)), this);
  }
  translate(t, e) {
    return (this.premultiply(Ns.makeTranslation(t, e)), this);
  }
  makeTranslation(t, e) {
    return (
      t.isVector2
        ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1)
        : this.set(1, 0, t, 0, 1, e, 0, 0, 1),
      this
    );
  }
  makeRotation(t) {
    const e = Math.cos(t),
      s = Math.sin(t);
    return (this.set(e, -s, 0, s, e, 0, 0, 0, 1), this);
  }
  makeScale(t, e) {
    return (this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this);
  }
  equals(t) {
    const e = this.elements,
      s = t.elements;
    for (let n = 0; n < 9; n++) if (e[n] !== s[n]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let s = 0; s < 9; s++) this.elements[s] = t[s + e];
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
      t
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Ns = new Te();
function Li(r) {
  for (let t = r.length - 1; t >= 0; --t) if (r[t] >= 65535) return !0;
  return !1;
}
function gn(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function Bs(r) {
  return r < 0.04045
    ? r * 0.0773993808
    : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
let ce;
class Ii {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
    let e;
    if (t instanceof HTMLCanvasElement) e = t;
    else {
      (ce === void 0 && (ce = gn("canvas")),
        (ce.width = t.width),
        (ce.height = t.height));
      const s = ce.getContext("2d");
      (t instanceof ImageData
        ? s.putImageData(t, 0, 0)
        : s.drawImage(t, 0, 0, t.width, t.height),
        (e = ce));
    }
    return e.width > 2048 || e.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          t,
        ),
        e.toDataURL("image/jpeg", 0.6))
      : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (
      (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && t instanceof ImageBitmap)
    ) {
      const e = gn("canvas");
      ((e.width = t.width), (e.height = t.height));
      const s = e.getContext("2d");
      s.drawImage(t, 0, 0, t.width, t.height);
      const n = s.getImageData(0, 0, t.width, t.height),
        i = n.data;
      for (let c = 0; c < i.length; c++) i[c] = Bs(i[c] / 255) * 255;
      return (s.putImageData(n, 0, 0), e);
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let s = 0; s < e.length; s++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray
          ? (e[s] = Math.floor(Bs(e[s] / 255) * 255))
          : (e[s] = Bs(e[s]));
      return { data: e, width: t.width, height: t.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.",
        ),
        t
      );
  }
}
let Ci = 0;
