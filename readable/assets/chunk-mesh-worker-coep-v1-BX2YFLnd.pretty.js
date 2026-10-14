var Ii = Object.defineProperty;
var Ci = (r, t, e) =>
  t in r
    ? Ii(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (r[t] = e);
var K = (r, t, e) => Ci(r, typeof t != "symbol" ? t + "" : t, e);
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ class rn {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const s = this._listeners;
    (s[t] === void 0 && (s[t] = []), s[t].indexOf(e) === -1 && s[t].push(e));
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0) return !1;
    const s = this._listeners;
    return s[t] !== void 0 && s[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[t];
    if (n !== void 0) {
      const i = n.indexOf(e);
      i !== -1 && n.splice(i, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0) return;
    const s = this._listeners[t.type];
    if (s !== void 0) {
      t.target = this;
      const n = s.slice(0);
      for (let i = 0, h = n.length; i < h; i++) n[i].call(this, t);
      t.target = null;
    }
  }
}
const ot = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
function Ts() {
  const r = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    s = (Math.random() * 4294967295) | 0;
  return (
    ot[r & 255] +
    ot[(r >> 8) & 255] +
    ot[(r >> 16) & 255] +
    ot[(r >> 24) & 255] +
    "-" +
    ot[t & 255] +
    ot[(t >> 8) & 255] +
    "-" +
    ot[((t >> 16) & 15) | 64] +
    ot[(t >> 24) & 255] +
    "-" +
    ot[(e & 63) | 128] +
    ot[(e >> 8) & 255] +
    "-" +
    ot[(e >> 16) & 255] +
    ot[(e >> 24) & 255] +
    ot[s & 255] +
    ot[(s >> 8) & 255] +
    ot[(s >> 16) & 255] +
    ot[(s >> 24) & 255]
  ).toLowerCase();
}
function Ft(r, t, e) {
  return Math.max(t, Math.min(e, r));
}
function Be(r, t) {
  switch (t.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function ct(r, t) {
  switch (t.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Ht {
  constructor(t = 0, e = 0) {
    ((Ht.prototype.isVector2 = !0), (this.x = t), (this.y = e));
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return ((this.x = t), (this.y = e), this);
  }
  setScalar(t) {
    return ((this.x = t), (this.y = t), this);
  }
  setX(t) {
    return ((this.x = t), this);
  }
  setY(t) {
    return ((this.y = t), this);
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return ((this.x = t.x), (this.y = t.y), this);
  }
  add(t) {
    return ((this.x += t.x), (this.y += t.y), this);
  }
  addScalar(t) {
    return ((this.x += t), (this.y += t), this);
  }
  addVectors(t, e) {
    return ((this.x = t.x + e.x), (this.y = t.y + e.y), this);
  }
  addScaledVector(t, e) {
    return ((this.x += t.x * e), (this.y += t.y * e), this);
  }
  sub(t) {
    return ((this.x -= t.x), (this.y -= t.y), this);
  }
  subScalar(t) {
    return ((this.x -= t), (this.y -= t), this);
  }
  subVectors(t, e) {
    return ((this.x = t.x - e.x), (this.y = t.y - e.y), this);
  }
  multiply(t) {
    return ((this.x *= t.x), (this.y *= t.y), this);
  }
  multiplyScalar(t) {
    return ((this.x *= t), (this.y *= t), this);
  }
  divide(t) {
    return ((this.x /= t.x), (this.y /= t.y), this);
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x,
      s = this.y,
      n = t.elements;
    return (
      (this.x = n[0] * e + n[3] * s + n[6]),
      (this.y = n[1] * e + n[4] * s + n[7]),
      this
    );
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      this
    );
  }
  clampLength(t, e) {
    const s = this.length();
    return this.divideScalar(s || 1).multiplyScalar(
      Math.max(t, Math.min(e, s)),
    );
  }
  floor() {
    return ((this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this);
  }
  ceil() {
    return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this);
  }
  round() {
    return ((this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this);
  }
  roundToZero() {
    return ((this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this);
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), this);
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const s = this.dot(t) / e;
    return Math.acos(Ft(s, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x,
      s = this.y - t.y;
    return e * e + s * s;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      this
    );
  }
  lerpVectors(t, e, s) {
    return (
      (this.x = t.x + (e.x - t.x) * s),
      (this.y = t.y + (e.y - t.y) * s),
      this
    );
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return ((this.x = t[e]), (this.y = t[e + 1]), this);
  }
  toArray(t = [], e = 0) {
    return ((t[e] = this.x), (t[e + 1] = this.y), t);
  }
  fromBufferAttribute(t, e) {
    return ((this.x = t.getX(e)), (this.y = t.getY(e)), this);
  }
  rotateAround(t, e) {
    const s = Math.cos(e),
      n = Math.sin(e),
      i = this.x - t.x,
      h = this.y - t.y;
    return (
      (this.x = i * s - h * n + t.x),
      (this.y = i * n + h * s + t.y),
      this
    );
  }
  random() {
    return ((this.x = Math.random()), (this.y = Math.random()), this);
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y);
  }
}
class Ie {
  constructor(t, e, s, n, i, h, c, o, a) {
    ((Ie.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      t !== void 0 && this.set(t, e, s, n, i, h, c, o, a));
  }
  set(t, e, s, n, i, h, c, o, a) {
    const u = this.elements;
    return (
      (u[0] = t),
      (u[1] = n),
      (u[2] = c),
      (u[3] = e),
      (u[4] = i),
      (u[5] = o),
      (u[6] = s),
      (u[7] = h),
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
      h = s[0],
      c = s[3],
      o = s[6],
      a = s[1],
      u = s[4],
      d = s[7],
      l = s[2],
      p = s[5],
      m = s[8],
      _ = n[0],
      y = n[3],
      E = n[6],
      M = n[1],
      g = n[4],
      L = n[7],
      I = n[2],
      A = n[5],
      x = n[8];
    return (
      (i[0] = h * _ + c * M + o * I),
      (i[3] = h * y + c * g + o * A),
      (i[6] = h * E + c * L + o * x),
      (i[1] = a * _ + u * M + d * I),
      (i[4] = a * y + u * g + d * A),
      (i[7] = a * E + u * L + d * x),
      (i[2] = l * _ + p * M + m * I),
      (i[5] = l * y + p * g + m * A),
      (i[8] = l * E + p * L + m * x),
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
      h = t[4],
      c = t[5],
      o = t[6],
      a = t[7],
      u = t[8];
    return (
      e * h * u - e * c * a - s * i * u + s * c * o + n * i * a - n * h * o
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
      d = u * h - c * a,
      l = c * o - u * i,
      p = a * i - h * o,
      m = e * d + s * l + n * p;
    if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / m;
    return (
      (t[0] = d * _),
      (t[1] = (n * a - u * s) * _),
      (t[2] = (c * s - n * h) * _),
      (t[3] = l * _),
      (t[4] = (u * e - n * o) * _),
      (t[5] = (n * i - c * e) * _),
      (t[6] = p * _),
      (t[7] = (s * o - a * e) * _),
      (t[8] = (h * e - s * i) * _),
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
  setUvTransform(t, e, s, n, i, h, c) {
    const o = Math.cos(i),
      a = Math.sin(i);
    return (
      this.set(
        s * o,
        s * a,
        -s * (o * h + a * c) + h + t,
        -n * a,
        n * o,
        -n * (-a * h + o * c) + c + e,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(t, e) {
    return (this.premultiply(Bs.makeScale(t, e)), this);
  }
  rotate(t) {
    return (this.premultiply(Bs.makeRotation(-t)), this);
  }
  translate(t, e) {
    return (this.premultiply(Bs.makeTranslation(t, e)), this);
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
const Bs = new Ie();
function Ni(r) {
  for (let t = r.length - 1; t >= 0; --t) if (r[t] >= 65535) return !0;
  return !1;
}
function Rn(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function Ps(r) {
  return r < 0.04045
    ? r * 0.0773993808
    : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
let fe;
class Bi {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
    let e;
    if (t instanceof HTMLCanvasElement) e = t;
    else {
      (fe === void 0 && (fe = Rn("canvas")),
        (fe.width = t.width),
        (fe.height = t.height));
      const s = fe.getContext("2d");
      (t instanceof ImageData
        ? s.putImageData(t, 0, 0)
        : s.drawImage(t, 0, 0, t.width, t.height),
        (e = fe));
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
      const e = Rn("canvas");
      ((e.width = t.width), (e.height = t.height));
      const s = e.getContext("2d");
      s.drawImage(t, 0, 0, t.width, t.height);
      const n = s.getImageData(0, 0, t.width, t.height),
        i = n.data;
      for (let h = 0; h < i.length; h++) i[h] = Ps(i[h] / 255) * 255;
      return (s.putImageData(n, 0, 0), e);
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let s = 0; s < e.length; s++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray
          ? (e[s] = Math.floor(Ps(e[s] / 255) * 255))
          : (e[s] = Ps(e[s]));
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
let Pi = 0;
class ki {
  constructor(t = null) {
    ((this.isSource = !0),
      Object.defineProperty(this, "id", { value: Pi++ }),
      (this.uuid = Ts()),
      (this.data = t),
      (this.dataReady = !0),
      (this.version = 0));
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid];
    const s = { uuid: this.uuid, url: "" },
      n = this.data;
    if (n !== null) {
      let i;
      if (Array.isArray(n)) {
        i = [];
        for (let h = 0, c = n.length; h < c; h++)
          n[h].isDataTexture ? i.push(ks(n[h].image)) : i.push(ks(n[h]));
      } else i = ks(n);
      s.url = i;
    }
    return (e || (t.images[this.uuid] = s), s);
  }
}
function ks(r) {
  return (typeof HTMLImageElement < "u" && r instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && r instanceof ImageBitmap)
    ? Bi.getDataURL(r)
    : r.data
      ? {
          data: Array.from(r.data),
          width: r.width,
          height: r.height,
          type: r.data.constructor.name,
        }
      : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Ui = 0;
class he extends rn {
  constructor(
    t = he.DEFAULT_IMAGE,
    e = he.DEFAULT_MAPPING,
    s = 1001,
    n = 1001,
    i = 1006,
    h = 1008,
    c = 1023,
    o = 1009,
    a = he.DEFAULT_ANISOTROPY,
    u = "",
  ) {
    (super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: Ui++ }),
      (this.uuid = Ts()),
      (this.name = ""),
      (this.source = new ki(t)),
      (this.mipmaps = []),
      (this.mapping = e),
      (this.channel = 0),
      (this.wrapS = s),
      (this.wrapT = n),
      (this.magFilter = i),
      (this.minFilter = h),
      (this.anisotropy = a),
      (this.format = c),
      (this.internalFormat = null),
      (this.type = o),
      (this.offset = new Ht(0, 0)),
      (this.repeat = new Ht(1, 1)),
      (this.center = new Ht(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Ie()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = u),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.pmremVersion = 0));
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y,
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return (
      (this.name = t.name),
      (this.source = t.source),
      (this.mipmaps = t.mipmaps.slice(0)),
      (this.mapping = t.mapping),
      (this.channel = t.channel),
      (this.wrapS = t.wrapS),
      (this.wrapT = t.wrapT),
      (this.magFilter = t.magFilter),
      (this.minFilter = t.minFilter),
      (this.anisotropy = t.anisotropy),
      (this.format = t.format),
      (this.internalFormat = t.internalFormat),
      (this.type = t.type),
      this.offset.copy(t.offset),
      this.repeat.copy(t.repeat),
      this.center.copy(t.center),
      (this.rotation = t.rotation),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      this.matrix.copy(t.matrix),
      (this.generateMipmaps = t.generateMipmaps),
      (this.premultiplyAlpha = t.premultiplyAlpha),
      (this.flipY = t.flipY),
      (this.unpackAlignment = t.unpackAlignment),
      (this.colorSpace = t.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
    const s = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (s.userData = this.userData),
      e || (t.textures[this.uuid] = s),
      s
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== 300) return t;
    if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
      switch (this.wrapS) {
        case 1e3:
          t.x = t.x - Math.floor(t.x);
          break;
        case 1001:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(t.x) % 2) === 1
            ? (t.x = Math.ceil(t.x) - t.x)
            : (t.x = t.x - Math.floor(t.x));
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case 1e3:
          t.y = t.y - Math.floor(t.y);
          break;
        case 1001:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(t.y) % 2) === 1
            ? (t.y = Math.ceil(t.y) - t.y)
            : (t.y = t.y - Math.floor(t.y));
          break;
      }
    return (this.flipY && (t.y = 1 - t.y), t);
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
}
he.DEFAULT_IMAGE = null;
he.DEFAULT_MAPPING = 300;
he.DEFAULT_ANISOTROPY = 1;
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
class C {
  constructor(t = 0, e = 0, s = 0) {
    ((C.prototype.isVector3 = !0), (this.x = t), (this.y = e), (this.z = s));
  }
  set(t, e, s) {
    return (
      s === void 0 && (s = this.z),
      (this.x = t),
      (this.y = e),
      (this.z = s),
      this
    );
  }
  setScalar(t) {
    return ((this.x = t), (this.y = t), (this.z = t), this);
  }
  setX(t) {
    return ((this.x = t), this);
  }
  setY(t) {
    return ((this.y = t), this);
  }
  setZ(t) {
    return ((this.z = t), this);
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return ((this.x = t.x), (this.y = t.y), (this.z = t.z), this);
  }
  add(t) {
    return ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
  }
  addScalar(t) {
    return ((this.x += t), (this.y += t), (this.z += t), this);
  }
  addVectors(t, e) {
    return (
      (this.x = t.x + e.x),
      (this.y = t.y + e.y),
      (this.z = t.z + e.z),
      this
    );
  }
  addScaledVector(t, e) {
    return (
      (this.x += t.x * e),
      (this.y += t.y * e),
      (this.z += t.z * e),
      this
    );
  }
  sub(t) {
    return ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
  }
  subScalar(t) {
    return ((this.x -= t), (this.y -= t), (this.z -= t), this);
  }
  subVectors(t, e) {
    return (
      (this.x = t.x - e.x),
      (this.y = t.y - e.y),
      (this.z = t.z - e.z),
      this
    );
  }
  multiply(t) {
    return ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
  }
  multiplyScalar(t) {
    return ((this.x *= t), (this.y *= t), (this.z *= t), this);
  }
  multiplyVectors(t, e) {
    return (
      (this.x = t.x * e.x),
      (this.y = t.y * e.y),
      (this.z = t.z * e.z),
      this
    );
  }
  applyEuler(t) {
    return this.applyQuaternion(Tn.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(Tn.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x,
      s = this.y,
      n = this.z,
      i = t.elements;
    return (
      (this.x = i[0] * e + i[3] * s + i[6] * n),
      (this.y = i[1] * e + i[4] * s + i[7] * n),
      (this.z = i[2] * e + i[5] * s + i[8] * n),
      this
    );
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x,
      s = this.y,
      n = this.z,
      i = t.elements,
      h = 1 / (i[3] * e + i[7] * s + i[11] * n + i[15]);
    return (
      (this.x = (i[0] * e + i[4] * s + i[8] * n + i[12]) * h),
      (this.y = (i[1] * e + i[5] * s + i[9] * n + i[13]) * h),
      (this.z = (i[2] * e + i[6] * s + i[10] * n + i[14]) * h),
      this
    );
  }
  applyQuaternion(t) {
    const e = this.x,
      s = this.y,
      n = this.z,
      i = t.x,
      h = t.y,
      c = t.z,
      o = t.w,
      a = 2 * (h * n - c * s),
      u = 2 * (c * e - i * n),
      d = 2 * (i * s - h * e);
    return (
      (this.x = e + o * a + h * d - c * u),
      (this.y = s + o * u + c * a - i * d),
      (this.z = n + o * d + i * u - h * a),
      this
    );
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
      t.projectionMatrix,
    );
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
      t.matrixWorld,
    );
  }
  transformDirection(t) {
    const e = this.x,
      s = this.y,
      n = this.z,
      i = t.elements;
    return (
      (this.x = i[0] * e + i[4] * s + i[8] * n),
      (this.y = i[1] * e + i[5] * s + i[9] * n),
      (this.z = i[2] * e + i[6] * s + i[10] * n),
      this.normalize()
    );
  }
  divide(t) {
    return ((this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this);
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.z = Math.min(this.z, t.z)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      (this.z = Math.max(this.z, t.z)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Math.max(t.x, Math.min(e.x, this.x))),
      (this.y = Math.max(t.y, Math.min(e.y, this.y))),
      (this.z = Math.max(t.z, Math.min(e.z, this.z))),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = Math.max(t, Math.min(e, this.x))),
      (this.y = Math.max(t, Math.min(e, this.y))),
      (this.z = Math.max(t, Math.min(e, this.z))),
      this
    );
  }
  clampLength(t, e) {
    const s = this.length();
    return this.divideScalar(s || 1).multiplyScalar(
      Math.max(t, Math.min(e, s)),
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this);
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      (this.z += (t.z - this.z) * e),
      this
    );
  }
  lerpVectors(t, e, s) {
    return (
      (this.x = t.x + (e.x - t.x) * s),
      (this.y = t.y + (e.y - t.y) * s),
      (this.z = t.z + (e.z - t.z) * s),
      this
    );
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const s = t.x,
      n = t.y,
      i = t.z,
      h = e.x,
      c = e.y,
      o = e.z;
    return (
      (this.x = n * o - i * c),
      (this.y = i * h - s * o),
      (this.z = s * c - n * h),
      this
    );
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const s = t.dot(this) / e;
    return this.copy(t).multiplyScalar(s);
  }
  projectOnPlane(t) {
    return (Us.copy(this).projectOnVector(t), this.sub(Us));
  }
  reflect(t) {
    return this.sub(Us.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const s = this.dot(t) / e;
    return Math.acos(Ft(s, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x,
      s = this.y - t.y,
      n = this.z - t.z;
    return e * e + s * s + n * n;
  }
  manhattanDistanceTo(t) {
    return (
      Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    );
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, s) {
    const n = Math.sin(e) * t;
    return (
      (this.x = n * Math.sin(s)),
      (this.y = Math.cos(e) * t),
      (this.z = n * Math.cos(s)),
      this
    );
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, s) {
    return (
      (this.x = t * Math.sin(e)),
      (this.y = s),
      (this.z = t * Math.cos(e)),
      this
    );
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return ((this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this);
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(),
      s = this.setFromMatrixColumn(t, 1).length(),
      n = this.setFromMatrixColumn(t, 2).length();
    return ((this.x = e), (this.y = s), (this.z = n), this);
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return ((this.x = t._x), (this.y = t._y), (this.z = t._z), this);
  }
  setFromColor(t) {
    return ((this.x = t.r), (this.y = t.g), (this.z = t.b), this);
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return ((this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this);
  }
  toArray(t = [], e = 0) {
    return ((t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t);
  }
  fromBufferAttribute(t, e) {
    return (
      (this.x = t.getX(e)),
      (this.y = t.getY(e)),
      (this.z = t.getZ(e)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2,
      e = Math.random() * 2 - 1,
      s = Math.sqrt(1 - e * e);
    return (
      (this.x = s * Math.cos(t)),
      (this.y = e),
      (this.z = s * Math.sin(t)),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z);
  }
}
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
class Xt extends rn {
  constructor() {
    (super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Wi++ }),
      (this.uuid = Ts()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Xt.DEFAULT_UP.clone()));
    const t = new C(),
      e = new bs(),
      s = new Ke(),
      n = new C(1, 1, 1);
    function i() {
      s.setFromEuler(e, !1);
    }
    function h() {
      e.setFromQuaternion(s, void 0, !1);
    }
    (e._onChange(i),
      s._onChange(h),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: t },
        rotation: { configurable: !0, enumerable: !0, value: e },
        quaternion: { configurable: !0, enumerable: !0, value: s },
        scale: { configurable: !0, enumerable: !0, value: n },
        modelViewMatrix: { value: new Ut() },
        normalMatrix: { value: new Ie() },
      }),
      (this.matrix = new Ut()),
      (this.matrixWorld = new Ut()),
      (this.matrixAutoUpdate = Xt.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Gi()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {}));
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(t) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(t),
      this.matrix.decompose(this.position, this.quaternion, this.scale));
  }
  applyQuaternion(t) {
    return (this.quaternion.premultiply(t), this);
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return (Ae.setFromAxisAngle(t, e), this.quaternion.multiply(Ae), this);
  }
  rotateOnWorldAxis(t, e) {
    return (Ae.setFromAxisAngle(t, e), this.quaternion.premultiply(Ae), this);
  }
  rotateX(t) {
    return this.rotateOnAxis(In, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(Cn, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Nn, t);
  }
  translateOnAxis(t, e) {
    return (
      Ln.copy(t).applyQuaternion(this.quaternion),
      this.position.add(Ln.multiplyScalar(e)),
      this
    );
  }
  translateX(t) {
    return this.translateOnAxis(In, t);
  }
  translateY(t) {
    return this.translateOnAxis(Cn, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Nn, t);
  }
  localToWorld(t) {
    return (this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld));
  }
  worldToLocal(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      t.applyMatrix4(zt.copy(this.matrixWorld).invert())
    );
  }
  lookAt(t, e, s) {
    t.isVector3 ? as.copy(t) : as.set(t, e, s);
    const n = this.parent;
    (this.updateWorldMatrix(!0, !1),
      Ue.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? zt.lookAt(Ue, as, this.up)
        : zt.lookAt(as, Ue, this.up),
      this.quaternion.setFromRotationMatrix(zt),
      n &&
        (zt.extractRotation(n.matrixWorld),
        Ae.setFromRotationMatrix(zt),
        this.quaternion.premultiply(Ae.invert())));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return t === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          t,
        ),
        this)
      : (t && t.isObject3D
          ? (t.removeFromParent(),
            (t.parent = this),
            this.children.push(t),
            t.dispatchEvent(Bn),
            (ye.child = t),
            this.dispatchEvent(ye),
            (ye.child = null))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              t,
            ),
        this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let s = 0; s < arguments.length; s++) this.remove(arguments[s]);
      return this;
    }
    const e = this.children.indexOf(t);
    return (
      e !== -1 &&
        ((t.parent = null),
        this.children.splice(e, 1),
        t.dispatchEvent(Vi),
        (zs.child = t),
        this.dispatchEvent(zs),
        (zs.child = null)),
      this
    );
  }
  removeFromParent() {
    const t = this.parent;
    return (t !== null && t.remove(this), this);
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      zt.copy(this.matrixWorld).invert(),
      t.parent !== null &&
        (t.parent.updateWorldMatrix(!0, !1), zt.multiply(t.parent.matrixWorld)),
      t.applyMatrix4(zt),
      t.removeFromParent(),
      (t.parent = this),
      this.children.push(t),
      t.updateWorldMatrix(!1, !0),
      t.dispatchEvent(Bn),
      (ye.child = t),
      this.dispatchEvent(ye),
      (ye.child = null),
      this
    );
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let s = 0, n = this.children.length; s < n; s++) {
      const h = this.children[s].getObjectByProperty(t, e);
      if (h !== void 0) return h;
    }
  }
  getObjectsByProperty(t, e, s = []) {
    this[t] === e && s.push(this);
    const n = this.children;
    for (let i = 0, h = n.length; i < h; i++)
      n[i].getObjectsByProperty(t, e, s);
    return s;
  }
  getWorldPosition(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      t.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(Ue, t, Hi),
      t
    );
  }
  getWorldScale(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(Ue, Yi, t),
      t
    );
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {}
  traverse(t) {
    t(this);
    const e = this.children;
    for (let s = 0, n = e.length; s < n; s++) e[s].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const e = this.children;
    for (let s = 0, n = e.length; s < n; s++) e[s].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    (this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0));
  }
  updateMatrixWorld(t) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || t) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix,
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (t = !0)));
    const e = this.children;
    for (let s = 0, n = e.length; s < n; s++) e[s].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const s = this.parent;
    if (
      (t === !0 && s !== null && s.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix,
            )),
      e === !0)
    ) {
      const n = this.children;
      for (let i = 0, h = n.length; i < h; i++) n[i].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string",
      s = {};
    e &&
      ((t = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (s.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const n = {};
    ((n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.castShadow === !0 && (n.castShadow = !0),
      this.receiveShadow === !0 && (n.receiveShadow = !0),
      this.visible === !1 && (n.visible = !1),
      this.frustumCulled === !1 && (n.frustumCulled = !1),
      this.renderOrder !== 0 && (n.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      (n.layers = this.layers.mask),
      (n.matrix = this.matrix.toArray()),
      (n.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (n.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((n.type = "InstancedMesh"),
        (n.count = this.count),
        (n.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (n.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((n.type = "BatchedMesh"),
        (n.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (n.sortObjects = this.sortObjects),
        (n.drawRanges = this._drawRanges),
        (n.reservedRanges = this._reservedRanges),
        (n.visibility = this._visibility),
        (n.active = this._active),
        (n.bounds = this._bounds.map((c) => ({
          boxInitialized: c.boxInitialized,
          boxMin: c.box.min.toArray(),
          boxMax: c.box.max.toArray(),
          sphereInitialized: c.sphereInitialized,
          sphereRadius: c.sphere.radius,
          sphereCenter: c.sphere.center.toArray(),
        }))),
        (n.maxInstanceCount = this._maxInstanceCount),
        (n.maxVertexCount = this._maxVertexCount),
        (n.maxIndexCount = this._maxIndexCount),
        (n.geometryInitialized = this._geometryInitialized),
        (n.geometryCount = this._geometryCount),
        (n.matricesTexture = this._matricesTexture.toJSON(t)),
        this._colorsTexture !== null &&
          (n.colorsTexture = this._colorsTexture.toJSON(t)),
        this.boundingSphere !== null &&
          (n.boundingSphere = {
            center: n.boundingSphere.center.toArray(),
            radius: n.boundingSphere.radius,
          }),
        this.boundingBox !== null &&
          (n.boundingBox = {
            min: n.boundingBox.min.toArray(),
            max: n.boundingBox.max.toArray(),
          })));
    function i(c, o) {
      return (c[o.uuid] === void 0 && (c[o.uuid] = o.toJSON(t)), o.uuid);
    }
    if (this.isScene)
      (this.background &&
        (this.background.isColor
          ? (n.background = this.background.toJSON())
          : this.background.isTexture &&
            (n.background = this.background.toJSON(t).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (n.environment = this.environment.toJSON(t).uuid));
    else if (this.isMesh || this.isLine || this.isPoints) {
      n.geometry = i(t.geometries, this.geometry);
      const c = this.geometry.parameters;
      if (c !== void 0 && c.shapes !== void 0) {
        const o = c.shapes;
        if (Array.isArray(o))
          for (let a = 0, u = o.length; a < u; a++) {
            const d = o[a];
            i(t.shapes, d);
          }
        else i(t.shapes, o);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((n.bindMode = this.bindMode),
        (n.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (i(t.skeletons, this.skeleton), (n.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const c = [];
        for (let o = 0, a = this.material.length; o < a; o++)
          c.push(i(t.materials, this.material[o]));
        n.material = c;
      } else n.material = i(t.materials, this.material);
    if (this.children.length > 0) {
      n.children = [];
      for (let c = 0; c < this.children.length; c++)
        n.children.push(this.children[c].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      n.animations = [];
      for (let c = 0; c < this.animations.length; c++) {
        const o = this.animations[c];
        n.animations.push(i(t.animations, o));
      }
    }
    if (e) {
      const c = h(t.geometries),
        o = h(t.materials),
        a = h(t.textures),
        u = h(t.images),
        d = h(t.shapes),
        l = h(t.skeletons),
        p = h(t.animations),
        m = h(t.nodes);
      (c.length > 0 && (s.geometries = c),
        o.length > 0 && (s.materials = o),
        a.length > 0 && (s.textures = a),
        u.length > 0 && (s.images = u),
        d.length > 0 && (s.shapes = d),
        l.length > 0 && (s.skeletons = l),
        p.length > 0 && (s.animations = p),
        m.length > 0 && (s.nodes = m));
    }
    return ((s.object = n), s);
    function h(c) {
      const o = [];
      for (const a in c) {
        const u = c[a];
        (delete u.metadata, o.push(u));
      }
      return o;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = !0) {
    if (
      ((this.name = t.name),
      this.up.copy(t.up),
      this.position.copy(t.position),
      (this.rotation.order = t.rotation.order),
      this.quaternion.copy(t.quaternion),
      this.scale.copy(t.scale),
      this.matrix.copy(t.matrix),
      this.matrixWorld.copy(t.matrixWorld),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
      (this.layers.mask = t.layers.mask),
      (this.visible = t.visible),
      (this.castShadow = t.castShadow),
      (this.receiveShadow = t.receiveShadow),
      (this.frustumCulled = t.frustumCulled),
      (this.renderOrder = t.renderOrder),
      (this.animations = t.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      e === !0)
    )
      for (let s = 0; s < t.children.length; s++) {
        const n = t.children[s];
        this.add(n.clone());
      }
    return this;
  }
}
Xt.DEFAULT_UP = new C(0, 1, 0);
Xt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const tt = new C(),
  hs = new Ht();
class ce {
  constructor(t, e, s = !1) {
    if (Array.isArray(t))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array.",
      );
    ((this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = t),
      (this.itemSize = e),
      (this.count = t !== void 0 ? t.length / e : 0),
      (this.normalized = s),
      (this.usage = 35044),
      (this.updateRanges = []),
      (this.gpuType = 1015),
      (this.version = 0));
  }
  onUploadCallback() {}
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return ((this.usage = t), this);
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return (
      (this.name = t.name),
      (this.array = new t.array.constructor(t.array)),
      (this.itemSize = t.itemSize),
      (this.count = t.count),
      (this.normalized = t.normalized),
      (this.usage = t.usage),
      (this.gpuType = t.gpuType),
      this
    );
  }
  copyAt(t, e, s) {
    ((t *= this.itemSize), (s *= e.itemSize));
    for (let n = 0, i = this.itemSize; n < i; n++)
      this.array[t + n] = e.array[s + n];
    return this;
  }
  copyArray(t) {
    return (this.array.set(t), this);
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, s = this.count; e < s; e++)
        (hs.fromBufferAttribute(this, e),
          hs.applyMatrix3(t),
          this.setXY(e, hs.x, hs.y));
    else if (this.itemSize === 3)
      for (let e = 0, s = this.count; e < s; e++)
        (tt.fromBufferAttribute(this, e),
          tt.applyMatrix3(t),
          this.setXYZ(e, tt.x, tt.y, tt.z));
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, s = this.count; e < s; e++)
      (tt.fromBufferAttribute(this, e),
        tt.applyMatrix4(t),
        this.setXYZ(e, tt.x, tt.y, tt.z));
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, s = this.count; e < s; e++)
      (tt.fromBufferAttribute(this, e),
        tt.applyNormalMatrix(t),
        this.setXYZ(e, tt.x, tt.y, tt.z));
    return this;
  }
  transformDirection(t) {
    for (let e = 0, s = this.count; e < s; e++)
      (tt.fromBufferAttribute(this, e),
        tt.transformDirection(t),
        this.setXYZ(e, tt.x, tt.y, tt.z));
    return this;
  }
  set(t, e = 0) {
    return (this.array.set(t, e), this);
  }
  getComponent(t, e) {
    let s = this.array[t * this.itemSize + e];
    return (this.normalized && (s = Be(s, this.array)), s);
  }
  setComponent(t, e, s) {
    return (
      this.normalized && (s = ct(s, this.array)),
      (this.array[t * this.itemSize + e] = s),
      this
    );
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return (this.normalized && (e = Be(e, this.array)), e);
  }
  setX(t, e) {
    return (
      this.normalized && (e = ct(e, this.array)),
      (this.array[t * this.itemSize] = e),
      this
    );
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return (this.normalized && (e = Be(e, this.array)), e);
  }
  setY(t, e) {
    return (
      this.normalized && (e = ct(e, this.array)),
      (this.array[t * this.itemSize + 1] = e),
      this
    );
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return (this.normalized && (e = Be(e, this.array)), e);
  }
  setZ(t, e) {
    return (
      this.normalized && (e = ct(e, this.array)),
      (this.array[t * this.itemSize + 2] = e),
      this
    );
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return (this.normalized && (e = Be(e, this.array)), e);
  }
  setW(t, e) {
    return (
      this.normalized && (e = ct(e, this.array)),
      (this.array[t * this.itemSize + 3] = e),
      this
    );
  }
  setXY(t, e, s) {
    return (
      (t *= this.itemSize),
      this.normalized && ((e = ct(e, this.array)), (s = ct(s, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = s),
      this
    );
  }
  setXYZ(t, e, s, n) {
    return (
      (t *= this.itemSize),
      this.normalized &&
        ((e = ct(e, this.array)),
        (s = ct(s, this.array)),
        (n = ct(n, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = s),
      (this.array[t + 2] = n),
      this
    );
  }
  setXYZW(t, e, s, n, i) {
    return (
      (t *= this.itemSize),
      this.normalized &&
        ((e = ct(e, this.array)),
        (s = ct(s, this.array)),
        (n = ct(n, this.array)),
        (i = ct(i, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = s),
      (this.array[t + 2] = n),
      (this.array[t + 3] = i),
      this
    );
  }
  onUpload(t) {
    return ((this.onUploadCallback = t), this);
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (t.name = this.name),
      this.usage !== 35044 && (t.usage = this.usage),
      t
    );
  }
}
class vi extends ce {
  constructor(t, e, s) {
    super(new Uint16Array(t), e, s);
  }
}
class qi extends ce {
  constructor(t, e, s) {
    super(new Uint32Array(t), e, s);
  }
}
class Nt extends ce {
  constructor(t, e, s) {
    super(new Float32Array(t), e, s);
  }
}
let Ki = 0;
const yt = new Ut(),
  Fs = new Xt(),
  xe = new C(),
  _t = new Qe(),
  De = new Qe(),
  nt = new C();
class Os extends rn {
  constructor() {
    (super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Ki++ }),
      (this.uuid = Ts()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {}));
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return (
      Array.isArray(t)
        ? (this.index = new (Ni(t) ? qi : vi)(t, 1))
        : (this.index = t),
      this
    );
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return ((this.attributes[t] = e), this);
  }
  deleteAttribute(t) {
    return (delete this.attributes[t], this);
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, s = 0) {
    this.groups.push({ start: t, count: e, materialIndex: s });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    ((this.drawRange.start = t), (this.drawRange.count = e));
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), (e.needsUpdate = !0));
    const s = this.attributes.normal;
    if (s !== void 0) {
      const i = new Ie().getNormalMatrix(t);
      (s.applyNormalMatrix(i), (s.needsUpdate = !0));
    }
    const n = this.attributes.tangent;
    return (
      n !== void 0 && (n.transformDirection(t), (n.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(t) {
    return (yt.makeRotationFromQuaternion(t), this.applyMatrix4(yt), this);
  }
  rotateX(t) {
    return (yt.makeRotationX(t), this.applyMatrix4(yt), this);
  }
  rotateY(t) {
    return (yt.makeRotationY(t), this.applyMatrix4(yt), this);
  }
  rotateZ(t) {
    return (yt.makeRotationZ(t), this.applyMatrix4(yt), this);
  }
  translate(t, e, s) {
    return (yt.makeTranslation(t, e, s), this.applyMatrix4(yt), this);
  }
  scale(t, e, s) {
    return (yt.makeScale(t, e, s), this.applyMatrix4(yt), this);
  }
  lookAt(t) {
    return (
      Fs.lookAt(t),
      Fs.updateMatrix(),
      this.applyMatrix4(Fs.matrix),
      this
    );
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(xe).negate(),
      this.translate(xe.x, xe.y, xe.z),
      this
    );
  }
  setFromPoints(t) {
    const e = [];
    for (let s = 0, n = t.length; s < n; s++) {
      const i = t[s];
      e.push(i.x, i.y, i.z || 0);
    }
    return (this.setAttribute("position", new Nt(e, 3)), this);
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Qe());
    const t = this.attributes.position,
      e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      (console.error(
        "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this,
      ),
        this.boundingBox.set(
          new C(-1 / 0, -1 / 0, -1 / 0),
          new C(1 / 0, 1 / 0, 1 / 0),
        ));
      return;
    }
    if (t !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(t), e))
        for (let s = 0, n = e.length; s < n; s++) {
          const i = e[s];
          (_t.setFromBufferAttribute(i),
            this.morphTargetsRelative
              ? (nt.addVectors(this.boundingBox.min, _t.min),
                this.boundingBox.expandByPoint(nt),
                nt.addVectors(this.boundingBox.max, _t.max),
                this.boundingBox.expandByPoint(nt))
              : (this.boundingBox.expandByPoint(_t.min),
                this.boundingBox.expandByPoint(_t.max)));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this,
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new wi());
    const t = this.attributes.position,
      e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      (console.error(
        "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this,
      ),
        this.boundingSphere.set(new C(), 1 / 0));
      return;
    }
    if (t) {
      const s = this.boundingSphere.center;
      if ((_t.setFromBufferAttribute(t), e))
        for (let i = 0, h = e.length; i < h; i++) {
          const c = e[i];
          (De.setFromBufferAttribute(c),
            this.morphTargetsRelative
              ? (nt.addVectors(_t.min, De.min),
                _t.expandByPoint(nt),
                nt.addVectors(_t.max, De.max),
                _t.expandByPoint(nt))
              : (_t.expandByPoint(De.min), _t.expandByPoint(De.max)));
        }
      _t.getCenter(s);
      let n = 0;
      for (let i = 0, h = t.count; i < h; i++)
        (nt.fromBufferAttribute(t, i),
          (n = Math.max(n, s.distanceToSquared(nt))));
      if (e)
        for (let i = 0, h = e.length; i < h; i++) {
          const c = e[i],
            o = this.morphTargetsRelative;
          for (let a = 0, u = c.count; a < u; a++)
            (nt.fromBufferAttribute(c, a),
              o && (xe.fromBufferAttribute(t, a), nt.add(xe)),
              (n = Math.max(n, s.distanceToSquared(nt))));
        }
      ((this.boundingSphere.radius = Math.sqrt(n)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this,
          ));
    }
  }
  computeTangents() {
    const t = this.index,
      e = this.attributes;
    if (
      t === null ||
      e.position === void 0 ||
      e.normal === void 0 ||
      e.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)",
      );
      return;
    }
    const s = e.position,
      n = e.normal,
      i = e.uv;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new ce(new Float32Array(4 * s.count), 4));
    const h = this.getAttribute("tangent"),
      c = [],
      o = [];
    for (let S = 0; S < s.count; S++) ((c[S] = new C()), (o[S] = new C()));
    const a = new C(),
      u = new C(),
      d = new C(),
      l = new Ht(),
      p = new Ht(),
      m = new Ht(),
      _ = new C(),
      y = new C();
    function E(S, R, O) {
      (a.fromBufferAttribute(s, S),
        u.fromBufferAttribute(s, R),
        d.fromBufferAttribute(s, O),
        l.fromBufferAttribute(i, S),
        p.fromBufferAttribute(i, R),
        m.fromBufferAttribute(i, O),
        u.sub(a),
        d.sub(a),
        p.sub(l),
        m.sub(l));
      const k = 1 / (p.x * m.y - m.x * p.y);
      isFinite(k) &&
        (_.copy(u)
          .multiplyScalar(m.y)
          .addScaledVector(d, -p.y)
          .multiplyScalar(k),
        y
          .copy(d)
          .multiplyScalar(p.x)
          .addScaledVector(u, -m.x)
          .multiplyScalar(k),
        c[S].add(_),
        c[R].add(_),
        c[O].add(_),
        o[S].add(y),
        o[R].add(y),
        o[O].add(y));
    }
    let M = this.groups;
    M.length === 0 && (M = [{ start: 0, count: t.count }]);
    for (let S = 0, R = M.length; S < R; ++S) {
      const O = M[S],
        k = O.start,
        W = O.count;
      for (let H = k, X = k + W; H < X; H += 3)
        E(t.getX(H + 0), t.getX(H + 1), t.getX(H + 2));
    }
    const g = new C(),
      L = new C(),
      I = new C(),
      A = new C();
    function x(S) {
      (I.fromBufferAttribute(n, S), A.copy(I));
      const R = c[S];
      (g.copy(R),
        g.sub(I.multiplyScalar(I.dot(R))).normalize(),
        L.crossVectors(A, R));
      const k = L.dot(o[S]) < 0 ? -1 : 1;
      h.setXYZW(S, g.x, g.y, g.z, k);
    }
    for (let S = 0, R = M.length; S < R; ++S) {
      const O = M[S],
        k = O.start,
        W = O.count;
      for (let H = k, X = k + W; H < X; H += 3)
        (x(t.getX(H + 0)), x(t.getX(H + 1)), x(t.getX(H + 2)));
    }
  }
  computeVertexNormals() {
    const t = this.index,
      e = this.getAttribute("position");
    if (e !== void 0) {
      let s = this.getAttribute("normal");
      if (s === void 0)
        ((s = new ce(new Float32Array(e.count * 3), 3)),
          this.setAttribute("normal", s));
      else for (let l = 0, p = s.count; l < p; l++) s.setXYZ(l, 0, 0, 0);
      const n = new C(),
        i = new C(),
        h = new C(),
        c = new C(),
        o = new C(),
        a = new C(),
        u = new C(),
        d = new C();
      if (t)
        for (let l = 0, p = t.count; l < p; l += 3) {
          const m = t.getX(l + 0),
            _ = t.getX(l + 1),
            y = t.getX(l + 2);
          (n.fromBufferAttribute(e, m),
            i.fromBufferAttribute(e, _),
            h.fromBufferAttribute(e, y),
            u.subVectors(h, i),
            d.subVectors(n, i),
            u.cross(d),
            c.fromBufferAttribute(s, m),
            o.fromBufferAttribute(s, _),
            a.fromBufferAttribute(s, y),
            c.add(u),
            o.add(u),
            a.add(u),
            s.setXYZ(m, c.x, c.y, c.z),
            s.setXYZ(_, o.x, o.y, o.z),
            s.setXYZ(y, a.x, a.y, a.z));
        }
      else
        for (let l = 0, p = e.count; l < p; l += 3)
          (n.fromBufferAttribute(e, l + 0),
            i.fromBufferAttribute(e, l + 1),
            h.fromBufferAttribute(e, l + 2),
            u.subVectors(h, i),
            d.subVectors(n, i),
            u.cross(d),
            s.setXYZ(l + 0, u.x, u.y, u.z),
            s.setXYZ(l + 1, u.x, u.y, u.z),
            s.setXYZ(l + 2, u.x, u.y, u.z));
      (this.normalizeNormals(), (s.needsUpdate = !0));
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, s = t.count; e < s; e++)
      (nt.fromBufferAttribute(t, e),
        nt.normalize(),
        t.setXYZ(e, nt.x, nt.y, nt.z));
  }
  toNonIndexed() {
    function t(c, o) {
      const a = c.array,
        u = c.itemSize,
        d = c.normalized,
        l = new a.constructor(o.length * u);
      let p = 0,
        m = 0;
      for (let _ = 0, y = o.length; _ < y; _++) {
        c.isInterleavedBufferAttribute
          ? (p = o[_] * c.data.stride + c.offset)
          : (p = o[_] * u);
        for (let E = 0; E < u; E++) l[m++] = a[p++];
      }
      return new ce(l, u, d);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.",
        ),
        this
      );
    const e = new Os(),
      s = this.index.array,
      n = this.attributes;
    for (const c in n) {
      const o = n[c],
        a = t(o, s);
      e.setAttribute(c, a);
    }
    const i = this.morphAttributes;
    for (const c in i) {
      const o = [],
        a = i[c];
      for (let u = 0, d = a.length; u < d; u++) {
        const l = a[u],
          p = t(l, s);
        o.push(p);
      }
      e.morphAttributes[c] = o;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const h = this.groups;
    for (let c = 0, o = h.length; c < o; c++) {
      const a = h[c];
      e.addGroup(a.start, a.count, a.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((t.uuid = this.uuid),
      (t.type = this.type),
      this.name !== "" && (t.name = this.name),
      Object.keys(this.userData).length > 0 && (t.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const o = this.parameters;
      for (const a in o) o[a] !== void 0 && (t[a] = o[a]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null &&
      (t.data.index = {
        type: e.array.constructor.name,
        array: Array.prototype.slice.call(e.array),
      });
    const s = this.attributes;
    for (const o in s) {
      const a = s[o];
      t.data.attributes[o] = a.toJSON(t.data);
    }
    const n = {};
    let i = !1;
    for (const o in this.morphAttributes) {
      const a = this.morphAttributes[o],
        u = [];
      for (let d = 0, l = a.length; d < l; d++) {
        const p = a[d];
        u.push(p.toJSON(t.data));
      }
      u.length > 0 && ((n[o] = u), (i = !0));
    }
    i &&
      ((t.data.morphAttributes = n),
      (t.data.morphTargetsRelative = this.morphTargetsRelative));
    const h = this.groups;
    h.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(h)));
    const c = this.boundingSphere;
    return (
      c !== null &&
        (t.data.boundingSphere = {
          center: c.center.toArray(),
          radius: c.radius,
        }),
      t
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    ((this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null));
    const e = {};
    this.name = t.name;
    const s = t.index;
    s !== null && this.setIndex(s.clone(e));
    const n = t.attributes;
    for (const a in n) {
      const u = n[a];
      this.setAttribute(a, u.clone(e));
    }
    const i = t.morphAttributes;
    for (const a in i) {
      const u = [],
        d = i[a];
      for (let l = 0, p = d.length; l < p; l++) u.push(d[l].clone(e));
      this.morphAttributes[a] = u;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const h = t.groups;
    for (let a = 0, u = h.length; a < u; a++) {
      const d = h[a];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const c = t.boundingBox;
    c !== null && (this.boundingBox = c.clone());
    const o = t.boundingSphere;
    return (
      o !== null && (this.boundingSphere = o.clone()),
      (this.drawRange.start = t.drawRange.start),
      (this.drawRange.count = t.drawRange.count),
      (this.userData = t.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: "169" } }),
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = "169"));
const Xn = [
    ["olympus1000", "Gates of Olympus 1000", "goo1000", 12162047, "Ω"],
    ["olympus", "Gates of Olympus", "gatesoo", 10781940, "Ω"],
    ["olympus-ss", "Gates of Olympus Super Scatter", "gooss", 16434514, "Ω"],
    ["olympus2500", "Gates of Olympus 2500", "goo2500", 7981567, "Ω"],
    ["fortune", "Fortune of Olympus", "foo-2an", 15513949, "Ω"],
    ["bonanza1000", "Sweet Bonanza 1000", "swbo1000", 16746443, "♥"],
    ["bonanza-ss", "Sweet Bonanza Super Scatter", "sbss", 16764280, "♥"],
    ["bonanza2500", "Sweet Bonanza 2500", "swbon2500", 15109119, "♥"],
    ["bonanza", "Sweet Bonanza", "swbon", 16752076, "♥"],
    ["sweet-rush", "Sweet Rush Bonanza", "srbon", 16755312, "♥"],
    ["zeus-hades", "Zeus vs Hades Gods of War", "zwhgof", 16742229, "⚡"],
    ["zeus-hades250", "Zeus vs Hades 250", "zvh250", 16758102, "⚡"],
    ["doghouse1000", "The Dog House Megaways 1000", "tdhm1000", 16764796, "♠"],
    ["doghouse-mega", "The Dog House Megaways", "dhmega", 16364921, "♠"],
    ["doghouse", "The Dog House", "tdhouse", 15701110, "♠"],
    ["starlight1000", "Starlight Princess 1000", "sp1000", 10008575, "★"],
    [
      "starlight-ss",
      "Starlight Princess Super Scatter",
      "spss-44x",
      13868031,
      "★",
    ],
    ["heaven1000", "Gates of Heaven 1000", "goh1000", 8773119, "✦"],
    ["heaven-ss", "Gates of Heaven Super Scatter", "gohss", 11921151, "✦"],
    ["sugar-ss", "Sugar Rush Super Scatter", "srss-xou", 16744651, "♥"],
    ["sugar1000", "Sugar Rush 1000", "sr1000", 14325247, "♥"],
    ["sugar", "Sugar Rush", "srush", 16755414, "♥"],
    ["joker", "Joker's Jewels", "jjewels", 16615563, "♦"],
    ["athena1000", "Wisdom of Athena 1000", "woa1000", 7789261, "Α"],
    ["angel-sinner", "Angel vs Sinner", "avsin", 15897794, "✦"],
    ["athena", "Wisdom of Athena", "woath", 10279862, "Α"],
    ["lions", "5 Lions Megaways 2", "5lmw2", 16764272, "♠"],
    ["buffalo", "Buffalo King Megaways", "bkmw", 15181168, "♠"],
    ["bass1000", "Big Bass Splash 1000", "bbs1000", 7395821, "≈"],
    ["bigger-bass", "Bigger Bass Bonanza", "bbb-6od", 8244935, "≈"],
    ["big-bass", "Big Bass Bonanza", "bigbb", 8765439, "≈"],
  ].map(([r, t, e, s, n]) => ({
    id: r,
    title: t,
    host: `${e}.pages.dev`,
    color: s,
    motif: n,
  })),
  Zn = 600,
  D = 16,
  Y = 128,
  Ms = 40;
({
  ...Object.fromEntries(
    Xn.map((r, t) => [Zn + t, `Игровой автомат: ${r.title}`]),
  ),
});
({
  ...Object.fromEntries(Xn.map((r, t) => [Zn + t, `Slot machine: ${r.title}`])),
});
const We = (r, t) => r + "," + t,
  be = (r, t, e) => (t << 8) | (e << 4) | r,
  fs = (r, t, e) => (r < t ? t : r > e ? e : r),
  f = {
    AIR: 0,
    GRASS: 1,
    DIRT: 2,
    STONE: 3,
    COBBLE: 4,
    LOG: 7,
    LEAVES: 8,
    PLANKS: 9,
    WATER: 12,
    BEDROCK: 13,
    GLOWSTONE: 17,
    TORCH: 18,
    LADDER: 19,
    BED: 20,
    REDSTONE: 21,
    LEVER: 22,
    BUTTON: 23,
    PLATE: 24,
    RTORCH: 25,
    REPEATER: 26,
    LAMP: 27,
    PISTON: 28,
    SPISTON: 29,
    PISTON_HEAD: 30,
    DOOR: 31,
    DYNAMITE: 49,
    DETONATOR: 50,
    CHEST: 51,
    COAL_ORE: 52,
    IRON_ORE: 53,
    GOLD_ORE: 54,
    DIAMOND_ORE: 55,
    TITANIUM_ORE: 56,
    SANDSTONE: 57,
    SANDSTONE_SMOOTH: 58,
    SANDSTONE_CHISELED: 59,
    STONE_BRICKS: 60,
    MOSSY_STONE_BRICKS: 61,
    POLISHED_STONE: 62,
    STAIR_WOOD: 63,
    STAIR_STONE: 64,
    STAIR_SANDSTONE: 65,
    STAIR_COBBLE: 66,
    STAIR_BRICK: 67,
    STAIR_STONE_BRICKS: 68,
    STAIR_SAND: 69,
    SAPLING: 70,
    METAL_DOOR: 71,
    ARMORED_DOOR: 72,
    FURNACE: 73,
    BOOKSHELF: 74,
    LANTERN: 75,
    CHAIN: 76,
    MILITARY_CHEST: 77,
    HAY_BALE: 78,
    BARREL: 79,
    FENCE_WOOD: 80,
    FENCE_COBBLE: 81,
    FENCE_STONE: 82,
    FENCE_STONE_BRICKS: 83,
    FENCE_SANDSTONE: 84,
    FENCE_GATE_WOOD: 85,
    BARBED_WIRE: 86,
    TALL_GRASS: 87,
    FLOWER_RED: 88,
    FLOWER_WHITE: 89,
    FLOWER_BLUE: 90,
    FLOWER_PINK: 91,
    FLOWER_YELLOW: 92,
    FENCE_GATE_COBBLE: 93,
    FENCE_GATE_STONE: 94,
    FENCE_GATE_STONE_BRICKS: 95,
    FENCE_GATE_SANDSTONE: 96,
    TROPICAL_LOG: 97,
    TROPICAL_LEAVES: 98,
    DESERT_LOG: 99,
    DESERT_LEAVES: 100,
    PINE_LOG: 101,
    PINE_LEAVES: 102,
    SAKURA_LOG: 103,
    SAKURA_LEAVES: 104,
    TROPICAL_SAPLING: 105,
    DESERT_SAPLING: 106,
    PINE_SAPLING: 107,
    SAKURA_SAPLING: 108,
    CACTUS: 109,
    LAVA: 110,
    FIRE: 111,
    WHEAT_CROP: 112,
    SNOW_LAYER: 113,
    WHEAT_SPROUT: 114,
    WHEAT_YOUNG: 115,
    TARGET: 116,
    DESERT_GRASS: 117,
    FARMLAND: 118,
    POTATO_SPROUT: 119,
    POTATO_YOUNG: 120,
    POTATO_CROP: 121,
    CARROT_SPROUT: 122,
    CARROT_YOUNG: 123,
    CARROT_CROP: 124,
    CAKE: 125,
    LIGHTNING_ROD: 126,
    CAMPFIRE: 127,
    SEAWEED: 128,
    SEAGRASS: 129,
    CORAL_PINK: 130,
    CORAL_BLUE: 131,
    CORAL_YELLOW: 132,
    HIEROGLYPH_SANDSTONE: 133,
    GOLD_INLAY: 134,
    LAPIS_INLAY: 135,
    EGYPTIAN_PILLAR: 136,
    SARCOPHAGUS: 137,
    LUNAR_REGOLITH: 138,
    LUNAR_ROCK: 139,
    LUNAR_BASALT: 140,
    LUNAR_ICE: 141,
    LUNAR_ORE: 142,
    LUNAR_PANEL: 143,
    LUNAR_GLASS: 144,
    COMPOSTER: 145,
    WOOD_TABLE: 146,
    WOOD_CHAIR: 147,
    WOOD_BENCH: 148,
    MAP_TABLE: 149,
    REMOTE_STATION: 150,
    MINE_AP: 151,
    MINE_AT: 152,
    SAVANNA_GRASS: 153,
    STAIR_RSTONE: 154,
    KITCHEN_COUNTER: 155,
    SINK: 156,
    STORAGE_SHELF: 157,
    SOFA: 158,
    WALL_LIGHT: 159,
    POTTED_PLANT: 160,
    RASPBERRY_BUSH_SPROUT: 161,
    RASPBERRY_BUSH_YOUNG: 162,
    RASPBERRY_BUSH_RIPE: 163,
    BLUEBERRY_BUSH_SPROUT: 164,
    BLUEBERRY_BUSH_YOUNG: 165,
    BLUEBERRY_BUSH_RIPE: 166,
    BLACKBERRY_BUSH_SPROUT: 167,
    BLACKBERRY_BUSH_YOUNG: 168,
    BLACKBERRY_BUSH_RIPE: 169,
    RGLOWSTONE: 170,
    SIGN: 171,
    RADIO_RELAY: 172,
    AUTUMN_LEAVES_ORANGE: 173,
    AUTUMN_LEAVES_RED: 174,
    AUTUMN_LEAVES_YELLOW: 175,
    BIRCH_LOG: 176,
    LEAF_LITTER: 177,
    PUMPKIN: 178,
    JACK_O_LANTERN: 179,
    PUMPKIN_SPROUT: 180,
    PUMPKIN_YOUNG: 181,
    PUMPKIN_CROP: 182,
    CANDLE: 183,
    COBWEB: 184,
    GRAVESTONE: 185,
    GRAVE_CROSS: 186,
    SKULL: 187,
    CAULDRON: 188,
    SCARECROW: 189,
    IRON_FENCE: 190,
    DARK_PLANKS: 191,
    DEAD_LOG: 192,
    MOSSY_COBBLE: 193,
    COFFIN: 194,
    POTION_SHELF: 195,
    HANGING_HERBS: 196,
    FLY_AGARIC: 197,
    MUSHROOM: 198,
    STAIR_DARK: 199,
    CRACKED_STONE_BRICKS: 200,
    AUTUMN_SAPLING: 201,
    OWNERSHIP_TOTEM: 202,
    CASINO_CARPET: 203,
    ROYAL_CARPET: 204,
    MARBLE: 205,
    BLACK_MARBLE: 206,
    GOLD_BLOCK: 207,
    VELVET_PANEL: 208,
    MARQUEE_LIGHTS: 209,
    LED_SCREEN: 210,
    AVIATION_LIGHT: 211,
    ICE: 212,
  },
  Qi = 4,
  Tt = 8,
  Xi = 128,
  Zi = 64,
  $n = (r) => (r >> 4) & 15,
  ps = [
    [0, -1, 0],
    [0, 1, 0],
    [-1, 0, 0],
    [1, 0, 0],
    [0, 0, -1],
    [0, 0, 1],
  ],
  Bt = [
    [0, -1, 0],
    [-1, 0, 0],
    [1, 0, 0],
    [0, 0, -1],
    [0, 0, 1],
    [0, 1, 0],
  ],
  le = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ],
  b = (r, t, e, s, n, i, h = {}, c = e) => ({
    id: r,
    name: t,
    label: e,
    labelEn: c,
    hardness: s,
    tex: n,
    color: i,
    solid: !0,
    transparent: !1,
    liquid: !1,
    light: 0,
    shape: "cube",
    interactive: !1,
    ...h,
  }),
  T = [
    b(
      0,
      "air",
      "Воздух",
      0,
      [0, 0, 0],
      0,
      { solid: !1, transparent: !0 },
      "Air",
    ),
    b(1, "grass", "Трава", 30, [0, 1, 2], 5011257, {}, "Grass"),
    b(2, "dirt", "Земля", 30, [2, 2, 2], 9067051, {}, "Dirt"),
    b(3, "stone", "Камень", 90, [3, 3, 3], 9145227, {}, "Stone"),
    b(4, "cobble", "Булыжник", 80, [4, 4, 4], 8026746, {}, "Cobblestone"),
    b(5, "sand", "Песок", 25, [5, 5, 5], 14405530, {}, "Sand"),
    b(6, "gravel", "Гравий", 30, [6, 6, 6], 10129798, {}, "Gravel"),
    b(7, "log", "Бревно", 60, [7, 8, 7], 7032618, {}, "Log"),
    b(
      8,
      "leaves",
      "Листва",
      8,
      [9, 9, 9],
      4160812,
      { transparent: !0 },
      "Leaves",
    ),
    b(9, "planks", "Доски", 50, [10, 10, 10], 11570259, {}, "Planks"),
    b(10, "brick", "Кирпич", 100, [11, 11, 11], 10769711, {}, "Brick"),
    b(
      11,
      "glass",
      "Стекло",
      5,
      [12, 12, 12],
      12575983,
      { transparent: !0 },
      "Glass",
    ),
    b(
      12,
      "water",
      "Вода",
      -1,
      [13, 13, 13],
      4026321,
      { solid: !1, transparent: !0, liquid: !0 },
      "Water",
    ),
    b(13, "bedrock", "Бедрок", -1, [14, 14, 14], 3355443, {}, "Bedrock"),
    b(14, "snow", "Снег", 20, [15, 15, 15], 15791607, {}, "Snow"),
    b(
      15,
      "rstone",
      "Арм. камень",
      300,
      [16, 16, 16],
      7304320,
      {},
      "Reinforced stone",
    ),
    b(
      16,
      "rglass",
      "Арм. стекло",
      300,
      [17, 17, 17],
      12901352,
      { transparent: !0 },
      "Reinforced glass",
    ),
    b(
      17,
      "glowstone",
      "Светокамень",
      40,
      [18, 18, 18],
      16767334,
      { light: 15 },
      "Glowstone",
    ),
    b(
      18,
      "torch",
      "Факел",
      1,
      [19, 19, 19],
      16763989,
      { solid: !1, transparent: !0, light: 14, shape: "torch" },
      "Torch",
    ),
    b(
      19,
      "ladder",
      "Лестница",
      20,
      [20, 20, 20],
      11043663,
      { solid: !1, transparent: !0, shape: "ladder" },
      "Ladder",
    ),
    b(
      20,
      "bed",
      "Кровать",
      25,
      [21, 23, 10],
      12729147,
      { transparent: !0, shape: "bed", interactive: !0 },
      "Bed",
    ),
    b(
      21,
      "redstone",
      "Редстоун",
      1,
      [24, 25, 24],
      10559248,
      { solid: !1, transparent: !0, shape: "flat" },
      "Redstone",
    ),
    b(
      22,
      "lever",
      "Рычаг",
      5,
      [26, 26, 26],
      9276813,
      { solid: !1, transparent: !0, shape: "device", interactive: !0 },
      "Lever",
    ),
    b(
      23,
      "button",
      "Кнопка",
      5,
      [3, 3, 3],
      9145227,
      { solid: !1, transparent: !0, shape: "device", interactive: !0 },
      "Button",
    ),
    b(
      24,
      "plate",
      "Нажимная плита",
      5,
      [3, 3, 3],
      10197915,
      { solid: !1, transparent: !0, shape: "flat" },
      "Pressure plate",
    ),
    b(
      25,
      "rtorch",
      "Красный факел",
      1,
      [27, 28, 27],
      13648682,
      { solid: !1, transparent: !0, light: 7, shape: "torch" },
      "Redstone torch",
    ),
    b(
      26,
      "repeater",
      "Повторитель",
      5,
      [29, 29, 29],
      10132122,
      { solid: !1, transparent: !0, shape: "flat", interactive: !0 },
      "Repeater",
    ),
    b(27, "lamp", "Лампа", 30, [30, 30, 30], 14201946, {}, "Lamp"),
    b(28, "piston", "Поршень", 60, [32, 33, 33], 9075542, {}, "Piston"),
    b(
      29,
      "spiston",
      "Липкий поршень",
      60,
      [34, 33, 33],
      8101980,
      {},
      "Sticky piston",
    ),
    b(
      30,
      "phead",
      "Поршень (шток)",
      60,
      [32, 33, 33],
      9075542,
      { solid: !1, transparent: !0, shape: "device" },
      "Piston head",
    ),
    b(
      31,
      "door",
      "Дверь",
      30,
      [35, 35, 35],
      10514492,
      { solid: !1, transparent: !0, shape: "door", interactive: !0 },
      "Door",
    ),
    b(
      32,
      "retired_32",
      "",
      0,
      [0, 0, 0],
      0,
      { solid: !1, transparent: !0 },
      "",
    ),
  ],
  $i = 33,
  Jn = 38,
  on = [
    ["white_clay", "Белая глина", 15330540, "White clay"],
    ["orange_clay", "Оранжевая глина", 15758867, "Orange clay"],
    ["magenta_clay", "Пурпурная глина", 12403891, "Magenta clay"],
    ["lightblue_clay", "Голубая глина", 3846105, "Light blue clay"],
    ["yellow_clay", "Жёлтая глина", 16303655, "Yellow clay"],
    ["lime_clay", "Лаймовая глина", 7387417, "Lime clay"],
    ["pink_clay", "Розовая глина", 15568300, "Pink clay"],
    ["gray_clay", "Серая глина", 4080711, "Gray clay"],
    ["lightgray_clay", "Светло-серая глина", 9342598, "Light gray clay"],
    ["cyan_clay", "Бирюзовая глина", 1411473, "Cyan clay"],
    ["purple_clay", "Фиолетовая глина", 7940780, "Purple clay"],
    ["blue_clay", "Синяя глина", 3488157, "Blue clay"],
    ["brown_clay", "Коричневая глина", 7489320, "Brown clay"],
    ["green_clay", "Зелёная глина", 5532955, "Green clay"],
    ["red_clay", "Красная глина", 10495778, "Red clay"],
    ["black_clay", "Чёрная глина", 1316121, "Black clay"],
  ];
on.forEach(([r, t, e, s], n) => {
  const i = Jn + n;
  T.push(b($i + n, r, t, 25, [i, i, i], e, {}, s));
});
const jn = 54,
  ms = 55,
  ti = 171,
  ei = 172;
T.push(
  b(
    f.DYNAMITE,
    "dynamite",
    "Динамит",
    5,
    [ti, jn, ei],
    12727594,
    {},
    "Dynamite",
  ),
);
T.push(
  b(
    f.DETONATOR,
    "detonator",
    "Детонатор",
    5,
    [ms, ms, ms],
    3357252,
    {},
    "Detonator",
  ),
);
const _s = 56,
  at = 57;
T.push(
  b(
    f.CHEST,
    "chest",
    "Сундук",
    45,
    [_s, _s, _s],
    10119733,
    { interactive: !0, transparent: !0, shape: "furniture" },
    "Chest",
  ),
);
T.push(
  b(
    f.COAL_ORE,
    "coal_ore",
    "Угольная руда",
    100,
    [at, at, at],
    3881787,
    {},
    "Coal ore",
  ),
);
T.push(
  b(
    f.IRON_ORE,
    "iron_ore",
    "Железная руда",
    110,
    [at + 1, at + 1, at + 1],
    12683866,
    {},
    "Iron ore",
  ),
);
T.push(
  b(
    f.GOLD_ORE,
    "gold_ore",
    "Золотая руда",
    120,
    [at + 2, at + 2, at + 2],
    14728267,
    {},
    "Gold ore",
  ),
);
T.push(
  b(
    f.DIAMOND_ORE,
    "diamond_ore",
    "Алмазная руда",
    130,
    [at + 3, at + 3, at + 3],
    4839656,
    {},
    "Diamond ore",
  ),
);
T.push(
  b(
    f.TITANIUM_ORE,
    "titanium_ore",
    "Титановая руда",
    145,
    [at + 4, at + 4, at + 4],
    12043732,
    {},
    "Titanium ore",
  ),
);
const et = 62;
T.push(
  b(
    f.SANDSTONE,
    "sandstone",
    "Песчаник",
    110,
    [et, et, et],
    14206090,
    {},
    "Sandstone",
  ),
);
T.push(
  b(
    f.SANDSTONE_SMOOTH,
    "smooth_sandstone",
    "Гладкий песчаник",
    110,
    [et + 1, et + 1, et + 1],
    14732695,
    {},
    "Smooth sandstone",
  ),
);
T.push(
  b(
    f.SANDSTONE_CHISELED,
    "chiseled_sandstone",
    "Резной песчаник",
    110,
    [et + 2, et + 2, et + 2],
    14470038,
    {},
    "Chiseled sandstone",
  ),
);
T.push(
  b(
    f.STONE_BRICKS,
    "stone_bricks",
    "Каменный кирпич",
    120,
    [et + 3, et + 3, et + 3],
    9211020,
    {},
    "Stone bricks",
  ),
);
T.push(
  b(
    f.MOSSY_STONE_BRICKS,
    "mossy_stone_bricks",
    "Замшелый каменный кирпич",
    120,
    [et + 4, et + 4, et + 4],
    8162414,
    {},
    "Mossy stone bricks",
  ),
);
T.push(
  b(
    f.POLISHED_STONE,
    "polished_stone",
    "Полированный камень",
    120,
    [et + 5, et + 5, et + 5],
    11053224,
    {},
    "Polished stone",
  ),
);
T.push(
  b(
    f.STAIR_WOOD,
    "wood_stairs",
    "Деревянная ступенька",
    50,
    [10, 10, 10],
    11570259,
    { transparent: !0, shape: "stair" },
    "Wooden stair",
  ),
);
T.push(
  b(
    f.STAIR_STONE,
    "stone_stairs",
    "Каменная ступенька",
    90,
    [3, 3, 3],
    9145227,
    { transparent: !0, shape: "stair" },
    "Stone stair",
  ),
);
T.push(
  b(
    f.STAIR_SANDSTONE,
    "sandstone_stairs",
    "Ступенька из песчаника",
    110,
    [62, 62, 62],
    14206090,
    { transparent: !0, shape: "stair" },
    "Sandstone stair",
  ),
);
T.push(
  b(
    f.STAIR_COBBLE,
    "cobble_stairs",
    "Булыжная ступенька",
    80,
    [4, 4, 4],
    8026746,
    { transparent: !0, shape: "stair" },
    "Cobblestone stair",
  ),
);
T.push(
  b(
    f.STAIR_BRICK,
    "brick_stairs",
    "Кирпичная ступенька",
    100,
    [11, 11, 11],
    10769711,
    { transparent: !0, shape: "stair" },
    "Brick stair",
  ),
);
T.push(
  b(
    f.STAIR_STONE_BRICKS,
    "stone_brick_stairs",
    "Ступенька из каменного кирпича",
    120,
    [65, 65, 65],
    9211020,
    { transparent: !0, shape: "stair" },
    "Stone brick stair",
  ),
);
T.push(
  b(
    f.STAIR_SAND,
    "sand_stairs",
    "Ступенька из песка",
    25,
    [5, 5, 5],
    14405530,
    { transparent: !0, shape: "stair" },
    "Sand stair",
  ),
);
const Gs = et + 6;
T.push(
  b(
    f.SAPLING,
    "sapling",
    "Саженец дерева",
    1,
    [Gs, Gs, Gs],
    5933626,
    { solid: !1, transparent: !0, shape: "plant" },
    "Tree sapling",
  ),
);
const Se = 69,
  ge = 71,
  si = 73,
  ni = 74,
  an = 93,
  hn = 94,
  cn = 157;
function Ji(r, t, e, s) {
  if (e !== 0) return e > 0 ? an : hn;
  const [n, i] = le[r & 3];
  return t === n && s === i ? (r & Tt ? ni : si) : cn;
}
T.push(
  b(
    f.METAL_DOOR,
    "metal_door",
    "Металлическая дверь",
    90,
    [Se, Se, Se],
    7832204,
    { solid: !1, transparent: !0, shape: "door", interactive: !0 },
    "Metal door",
  ),
);
T.push(
  b(
    f.ARMORED_DOOR,
    "armored_door",
    "Армированная дверь",
    360,
    [ge, ge, ge],
    5069155,
    { solid: !1, transparent: !0, shape: "door", interactive: !0 },
    "Armored door",
  ),
);
T.push(
  b(
    f.FURNACE,
    "furnace",
    "Печка",
    100,
    [an, cn, hn],
    5857642,
    { interactive: !0 },
    "Furnace",
  ),
);
const V = 75,
  G = 88;
T.push(
  b(
    f.BOOKSHELF,
    "bookshelf",
    "Книжный блок",
    45,
    [10, V, 10],
    8081197,
    {},
    "Bookshelf",
  ),
);
T.push(
  b(
    f.LANTERN,
    "lantern",
    "Фонарь",
    8,
    [V + 1, V + 1, V + 1],
    16169034,
    { solid: !1, transparent: !0, light: 14, shape: "lantern" },
    "Lantern",
  ),
);
T.push(
  b(
    f.CHAIN,
    "chain",
    "Цепь",
    35,
    [V + 2, V + 2, V + 2],
    6384242,
    { solid: !1, transparent: !0, shape: "chain" },
    "Chain",
  ),
);
T.push(
  b(
    f.MILITARY_CHEST,
    "military_chest",
    "Военный сундук",
    70,
    [V + 3, V + 3, V + 3],
    5202991,
    { interactive: !0, transparent: !0, shape: "furniture" },
    "Military chest",
  ),
);
T.push(
  b(
    f.HAY_BALE,
    "hay_bale",
    "Стог сена",
    22,
    [V + 4, V + 4, V + 4],
    14002729,
    {},
    "Hay bale",
  ),
);
T.push(
  b(
    f.BARREL,
    "barrel",
    "Бочка",
    45,
    [V + 5, V + 5, V + 5],
    8411697,
    { interactive: !0 },
    "Barrel",
  ),
);
T.push(
  b(
    f.FENCE_WOOD,
    "wood_fence",
    "Деревянный забор",
    45,
    [G, G, G],
    10976325,
    { transparent: !0, shape: "fence" },
    "Wooden fence",
  ),
);
T.push(
  b(
    f.FENCE_COBBLE,
    "cobble_fence",
    "Булыжный забор",
    85,
    [G + 1, G + 1, G + 1],
    7829367,
    { transparent: !0, shape: "fence" },
    "Cobblestone fence",
  ),
);
T.push(
  b(
    f.FENCE_STONE,
    "stone_fence",
    "Каменный забор",
    95,
    [G + 2, G + 2, G + 2],
    8947848,
    { transparent: !0, shape: "fence" },
    "Stone fence",
  ),
);
T.push(
  b(
    f.FENCE_STONE_BRICKS,
    "stone_brick_fence",
    "Забор из каменного кирпича",
    120,
    [G + 3, G + 3, G + 3],
    8750469,
    { transparent: !0, shape: "fence" },
    "Stone brick fence",
  ),
);
T.push(
  b(
    f.FENCE_SANDSTONE,
    "sandstone_fence",
    "Забор из песчаника",
    105,
    [G + 4, G + 4, G + 4],
    14074250,
    { transparent: !0, shape: "fence" },
    "Sandstone fence",
  ),
);
T.push(
  b(
    f.FENCE_GATE_WOOD,
    "wood_fence_gate",
    "Деревянная калитка",
    45,
    [G, G, G],
    10976325,
    { solid: !1, transparent: !0, shape: "gate", interactive: !0 },
    "Wooden fence gate",
  ),
);
T.push(
  b(
    f.BARBED_WIRE,
    "barbed_wire",
    "Колючая проволока",
    32,
    [V + 6, V + 6, V + 6],
    7830912,
    { solid: !1, transparent: !0, shape: "wire" },
    "Barbed wire",
  ),
);
const z = (r, t, e, s, n, i) =>
  T.push(
    b(
      r,
      t,
      e,
      1,
      [n, n, n],
      i,
      { solid: !1, transparent: !0, shape: "plant" },
      s,
    ),
  );
z(f.TALL_GRASS, "tall_grass", "Высокая трава", "Tall grass", V + 7, 4025648);
z(f.FLOWER_RED, "red_flower", "Красный цветок", "Red flower", V + 8, 14171442);
z(
  f.FLOWER_WHITE,
  "white_flower",
  "Белый цветок",
  "White flower",
  V + 9,
  15789797,
);
z(f.FLOWER_BLUE, "blue_flower", "Синий цветок", "Blue flower", V + 10, 3895256);
z(
  f.FLOWER_PINK,
  "pink_flower",
  "Розовый цветок",
  "Pink flower",
  V + 11,
  15238829,
);
z(
  f.FLOWER_YELLOW,
  "yellow_flower",
  "Жёлтый цветок",
  "Yellow flower",
  V + 12,
  15847224,
);
T.push(
  b(
    f.FENCE_GATE_COBBLE,
    "cobble_fence_gate",
    "Булыжная калитка",
    85,
    [G + 1, G + 1, G + 1],
    7829367,
    { solid: !1, transparent: !0, shape: "gate", interactive: !0 },
    "Cobblestone fence gate",
  ),
);
T.push(
  b(
    f.FENCE_GATE_STONE,
    "stone_fence_gate",
    "Каменная калитка",
    95,
    [G + 2, G + 2, G + 2],
    8947848,
    { solid: !1, transparent: !0, shape: "gate", interactive: !0 },
    "Stone fence gate",
  ),
);
T.push(
  b(
    f.FENCE_GATE_STONE_BRICKS,
    "stone_brick_fence_gate",
    "Калитка из каменного кирпича",
    120,
    [G + 3, G + 3, G + 3],
    8750469,
    { solid: !1, transparent: !0, shape: "gate", interactive: !0 },
    "Stone brick fence gate",
  ),
);
T.push(
  b(
    f.FENCE_GATE_SANDSTONE,
    "sandstone_fence_gate",
    "Калитка из песчаника",
    105,
    [G + 4, G + 4, G + 4],
    14074250,
    { solid: !1, transparent: !0, shape: "gate", interactive: !0 },
    "Sandstone fence gate",
  ),
);
const U = 95,
  Pn = 184,
  Ws = 185;
T.push(
  b(
    f.TROPICAL_LOG,
    "tropical_log",
    "Тропическое бревно",
    60,
    [U, U + 1, U],
    9066805,
    {},
    "Tropical log",
  ),
);
T.push(
  b(
    f.TROPICAL_LEAVES,
    "tropical_leaves",
    "Тропическая листва",
    8,
    [U + 2, U + 2, U + 2],
    2329155,
    { transparent: !0 },
    "Tropical leaves",
  ),
);
T.push(
  b(
    f.DESERT_LOG,
    "desert_log",
    "Пустынное бревно",
    60,
    [U + 3, U + 4, U + 3],
    9986105,
    {},
    "Desert log",
  ),
);
T.push(
  b(
    f.DESERT_LEAVES,
    "desert_leaves",
    "Пустынная листва",
    8,
    [U + 5, U + 5, U + 5],
    8100413,
    { transparent: !0 },
    "Desert leaves",
  ),
);
T.push(
  b(
    f.PINE_LOG,
    "pine_log",
    "Хвойное бревно",
    65,
    [U + 6, U + 7, U + 6],
    6505517,
    {},
    "Pine log",
  ),
);
T.push(
  b(
    f.PINE_LEAVES,
    "pine_leaves",
    "Хвоя",
    9,
    [U + 8, U + 8, U + 8],
    2645317,
    { transparent: !0 },
    "Pine needles",
  ),
);
T.push(
  b(
    f.SAKURA_LOG,
    "sakura_log",
    "Бревно сакуры",
    58,
    [U + 9, U + 10, U + 9],
    7753796,
    {},
    "Sakura log",
  ),
);
T.push(
  b(
    f.SAKURA_LEAVES,
    "sakura_leaves",
    "Листва сакуры",
    8,
    [U + 11, U + 11, U + 11],
    15306938,
    { transparent: !0 },
    "Sakura leaves",
  ),
);
z(
  f.TROPICAL_SAPLING,
  "tropical_sapling",
  "Росток тропического дерева",
  "Tropical sapling",
  U + 12,
  3054671,
);
z(
  f.DESERT_SAPLING,
  "desert_sapling",
  "Росток пустынного дерева",
  "Desert sapling",
  U + 13,
  8492870,
);
z(
  f.PINE_SAPLING,
  "pine_sapling",
  "Росток хвойного дерева",
  "Pine sapling",
  U + 14,
  3238991,
);
z(
  f.SAKURA_SAPLING,
  "sakura_sapling",
  "Росток сакуры",
  "Sakura sapling",
  U + 15,
  14186920,
);
T.push(
  b(
    f.CACTUS,
    "cactus",
    "Кактус",
    28,
    [U + 16, U + 16, U + 16],
    4036671,
    { transparent: !0 },
    "Cactus",
  ),
);
T.push(
  b(
    f.LAVA,
    "lava",
    "Лава",
    -1,
    [U + 17, U + 17, U + 17],
    16735e3,
    { solid: !1, transparent: !0, liquid: !0, light: 15 },
    "Lava",
  ),
);
z(f.FIRE, "fire", "Огонь", "Fire", U + 18, 16747042);
T[f.FIRE].light = 15;
z(f.WHEAT_CROP, "wheat_crop", "Пшеница", "Wheat crop", U + 19, 14201148);
T.push(
  b(
    f.SNOW_LAYER,
    "snow_layer",
    "Снежный покров",
    4,
    [15, 15, 15],
    16054522,
    { solid: !1, transparent: !0, shape: "snow" },
    "Snow layer",
  ),
);
z(
  f.WHEAT_SPROUT,
  "wheat_sprout",
  "Ростки пшеницы",
  "Wheat sprouts",
  U + 20,
  7972930,
);
z(
  f.WHEAT_YOUNG,
  "young_wheat",
  "Молодая пшеница",
  "Young wheat",
  U + 21,
  11057229,
);
const Es = U + 22;
T.push(
  b(
    f.TARGET,
    "target",
    "Мишень",
    90,
    [Es, Es, Es],
    14174268,
    {},
    "Shooting target",
  ),
);
const lt = U + 23;
z(
  f.DESERT_GRASS,
  "desert_grass",
  "Пустынная трава",
  "Desert grass",
  lt,
  12100700,
);
T.push(
  b(
    f.FARMLAND,
    "farmland",
    "Удобренная земля",
    34,
    [lt + 1, lt + 2, 2],
    7031332,
    {},
    "Fertilised soil",
  ),
);
z(
  f.POTATO_SPROUT,
  "potato_sprout",
  "Ростки картофеля",
  "Potato sprouts",
  lt + 3,
  7313989,
);
z(
  f.POTATO_YOUNG,
  "young_potato",
  "Молодой картофель",
  "Young potato",
  lt + 4,
  6263872,
);
z(f.POTATO_CROP, "potato_crop", "Картофель", "Potato crop", lt + 5, 5212730);
z(
  f.CARROT_SPROUT,
  "carrot_sprout",
  "Ростки моркови",
  "Carrot sprouts",
  lt + 6,
  7840330,
);
z(
  f.CARROT_YOUNG,
  "young_carrot",
  "Молодая морковь",
  "Young carrot",
  lt + 7,
  6922303,
);
z(f.CARROT_CROP, "carrot_crop", "Морковь", "Carrot crop", lt + 8, 14711592);
const He = lt + 9,
  kn = 7;
T.push(
  b(
    f.CAKE,
    "cake",
    "Торт",
    10,
    [He, He + 1, He + 2],
    15918292,
    { shape: "cake", solid: !1, transparent: !0, light: 8, interactive: !0 },
    "Cake",
  ),
);
T.push(
  b(
    f.LIGHTNING_ROD,
    "lightning_rod",
    "Громоотвод",
    40,
    [V + 2, V + 2, V + 2],
    12088115,
    { solid: !1, transparent: !0, shape: "device" },
    "Lightning rod",
  ),
);
const Ye = He + 3,
  un = Ye + 1;
T.push(
  b(
    f.CAMPFIRE,
    "campfire",
    "Костёр",
    20,
    [Ye, Ye, Ye],
    13923882,
    { solid: !1, transparent: !0, light: 12, shape: "campfire" },
    "Campfire",
  ),
);
const Vt = un + 1;
z(f.SEAWEED, "seaweed", "Водоросли", "Seaweed", Vt, 3111498);
z(f.SEAGRASS, "seagrass", "Морская трава", "Seagrass", Vt + 1, 4168284);
z(f.CORAL_PINK, "pink_coral", "Розовый коралл", "Pink coral", Vt + 2, 14967451);
z(f.CORAL_BLUE, "blue_coral", "Синий коралл", "Blue coral", Vt + 3, 4161504);
z(
  f.CORAL_YELLOW,
  "yellow_coral",
  "Жёлтый коралл",
  "Yellow coral",
  Vt + 4,
  15778375,
);
const Q = Vt + 5;
T.push(
  b(
    f.HIEROGLYPH_SANDSTONE,
    "hieroglyph_sandstone",
    "Песчаник с иероглифами",
    135,
    [Q, Q + 1, Q],
    13875567,
    {},
    "Hieroglyph sandstone",
  ),
);
T.push(
  b(
    f.GOLD_INLAY,
    "gold_inlay",
    "Золотая инкрустация",
    150,
    [Q + 2, Q + 2, Q + 2],
    15251758,
    { light: 5 },
    "Gold inlay",
  ),
);
T.push(
  b(
    f.LAPIS_INLAY,
    "lapis_inlay",
    "Лазуритовая инкрустация",
    125,
    [Q + 3, Q + 3, Q + 3],
    1526944,
    {},
    "Lapis inlay",
  ),
);
T.push(
  b(
    f.EGYPTIAN_PILLAR,
    "egyptian_pillar",
    "Египетская колонна",
    140,
    [Q + 4, Q + 5, Q + 4],
    14205308,
    {},
    "Egyptian pillar",
  ),
);
T.push(
  b(
    f.SARCOPHAGUS,
    "sarcophagus",
    "Саркофаг",
    175,
    [Q + 6, Q + 6, Q + 6],
    12094244,
    { interactive: !0 },
    "Sarcophagus",
  ),
);
const w = Q + 7;
T.push(
  b(
    f.LUNAR_REGOLITH,
    "lunar_regolith",
    "Лунный реголит",
    105,
    [w, w, w],
    10987426,
    {},
    "Lunar regolith",
  ),
);
T.push(
  b(
    f.LUNAR_ROCK,
    "lunar_rock",
    "Лунная порода",
    180,
    [w + 1, w + 1, w + 1],
    7632250,
    {},
    "Lunar rock",
  ),
);
T.push(
  b(
    f.LUNAR_BASALT,
    "lunar_basalt",
    "Лунный базальт",
    230,
    [w + 2, w + 2, w + 2],
    3750723,
    {},
    "Lunar basalt",
  ),
);
T.push(
  b(
    f.LUNAR_ICE,
    "lunar_ice",
    "Лунный лёд",
    150,
    [w + 3, w + 3, w + 3],
    12245224,
    { transparent: !0 },
    "Lunar ice",
  ),
);
T.push(
  b(
    f.LUNAR_ORE,
    "lunar_ore",
    "Гелий-3 руда",
    320,
    [w + 4, w + 4, w + 4],
    7857407,
    { light: 5 },
    "Helium-3 ore",
  ),
);
T.push(
  b(
    f.LUNAR_PANEL,
    "lunar_panel",
    "Панель лунной базы",
    12001,
    [w + 5, w + 5, w + 5],
    15001577,
    {},
    "Lunar base panel",
  ),
);
T.push(
  b(
    f.LUNAR_GLASS,
    "lunar_glass",
    "Герметичное стекло",
    3001,
    [w + 6, w + 6, w + 6],
    9554398,
    { transparent: !0 },
    "Pressurised glass",
  ),
);
const js = w + 7,
  Ls = w + 8;
T.push(
  b(
    f.COMPOSTER,
    "composter",
    "Компостер",
    55,
    [Ls, js, js],
    9265720,
    { transparent: !0, shape: "composter", interactive: !0 },
    "Composter",
  ),
);
T.push(
  b(
    f.WOOD_TABLE,
    "wood_table",
    "Деревянный стол",
    45,
    [10, 10, 10],
    11570259,
    { transparent: !0, shape: "furniture" },
    "Wooden table",
  ),
);
T.push(
  b(
    f.WOOD_CHAIR,
    "wood_chair",
    "Стул с мягким сиденьем",
    35,
    [21, 10, 10],
    11366473,
    { transparent: !0, shape: "furniture", interactive: !0 },
    "Upholstered chair",
  ),
);
T.push(
  b(
    f.WOOD_BENCH,
    "wood_bench",
    "Деревянная скамья",
    40,
    [10, 10, 10],
    11570259,
    { transparent: !0, shape: "furniture", interactive: !0 },
    "Wooden bench",
  ),
);
T.push(
  b(
    f.MAP_TABLE,
    "map_table",
    "Штабной стол с картой",
    55,
    [T.find((r) => r.name === "green_clay").tex[0], 10, 10],
    7898715,
    { transparent: !0, shape: "furniture" },
    "Map table",
  ),
);
const Zt = Ls + 1,
  Oe = Ls + 2;
T.push(
  b(
    f.REMOTE_STATION,
    "remote_station",
    "Станция удалённого управления",
    120,
    [Zt, Zt, Zt],
    4684395,
    { transparent: !0, shape: "furniture", interactive: !0, light: 5 },
    "Remote command station",
  ),
);
T.push(
  b(
    f.MINE_AP,
    "mine_ap",
    "Противопехотная мина",
    12,
    [51, 51, 51],
    5403460,
    { solid: !1, transparent: !0, shape: "furniture" },
    "Anti-personnel mine",
  ),
);
T.push(
  b(
    f.MINE_AT,
    "mine_at",
    "Противотанковая мина",
    24,
    [50, 50, 50],
    9339218,
    { solid: !1, transparent: !0, shape: "furniture" },
    "Anti-tank mine",
  ),
);
const qe = Oe + 1,
  oe = qe + 2;
T[f.WOOD_CHAIR].tex[0] = oe;
T.push(
  b(
    f.SAVANNA_GRASS,
    "savanna_grass",
    "Сухой дёрн саванны",
    18,
    [qe, qe + 1, 2],
    11971426,
    {},
    "Savanna turf",
  ),
);
T.push(
  b(
    f.STAIR_RSTONE,
    "reinforced_stone_stairs",
    "Армированная ступенька",
    300,
    [16, 16, 16],
    7304320,
    { transparent: !0, shape: "stair" },
    "Reinforced stone stair",
  ),
);
for (const [r, t, e, s, n] of [
  [
    f.KITCHEN_COUNTER,
    "kitchen_counter",
    "Кухонная тумба",
    "Kitchen cabinet",
    10584160,
  ],
  [f.SINK, "sink", "Мойка со смесителем", "Sink and faucet", 12831182],
  [
    f.STORAGE_SHELF,
    "storage_shelf",
    "Стеллаж с припасами",
    "Supply shelving",
    7174759,
  ],
  [f.SOFA, "sofa", "Мягкий диван", "Upholstered sofa", 10448720],
  [f.WALL_LIGHT, "wall_light", "Настенный светильник", "Wall light", 16770224],
  [
    f.POTTED_PLANT,
    "potted_plant",
    "Растение в горшке",
    "Potted plant",
    6587986,
  ],
])
  T.push(
    b(
      r,
      t,
      e,
      45,
      [10, 10, 10],
      n,
      {
        transparent: !0,
        shape: "furniture",
        interactive: r === f.SOFA,
        solid: r !== f.WALL_LIGHT && r !== f.POTTED_PLANT,
        light: r === f.WALL_LIGHT ? 14 : 0,
      },
      s,
    ),
  );
const tn = 158,
  ii = 173,
  Jt = [
    {
      key: "raspberry",
      ru: "малины",
      en: "Raspberry",
      color: 12595280,
      stages: [
        f.RASPBERRY_BUSH_SPROUT,
        f.RASPBERRY_BUSH_YOUNG,
        f.RASPBERRY_BUSH_RIPE,
      ],
    },
    {
      key: "blueberry",
      ru: "черники",
      en: "Blueberry",
      color: 4872872,
      stages: [
        f.BLUEBERRY_BUSH_SPROUT,
        f.BLUEBERRY_BUSH_YOUNG,
        f.BLUEBERRY_BUSH_RIPE,
      ],
    },
    {
      key: "blackberry",
      ru: "ежевики",
      en: "Blackberry",
      color: 4008773,
      stages: [
        f.BLACKBERRY_BUSH_SPROUT,
        f.BLACKBERRY_BUSH_YOUNG,
        f.BLACKBERRY_BUSH_RIPE,
      ],
    },
  ];
Jt.forEach((r, t) => {
  const e = ["Куст", "Молодой куст", "Спелый куст"],
    s = ["bush sprout", "young bush", "ripe bush"];
  r.stages.forEach((n, i) => {
    T.push(
      b(
        n,
        `${r.key}_bush_${["sprout", "young", "ripe"][i]}`,
        `${e[i]} ${r.ru}`,
        4,
        [ii + t * 3 + i, tn + t * 3 + i, tn + t * 3 + i],
        i === 2 ? r.color : 4880952,
        { solid: !1, transparent: !0, shape: "bush" },
        `${r.en} ${s[i]}`,
      ),
    );
  });
});
const Hs = 168;
T.push(
  b(
    f.RGLOWSTONE,
    "reinforced_glowstone",
    "Армированный светокамень",
    300,
    [Hs, Hs, Hs],
    16768416,
    { light: 15 },
    "Reinforced glowstone",
  ),
);
T.push(
  b(
    f.SIGN,
    "sign",
    "Табличка",
    25,
    [10, 10, 10],
    11570259,
    { solid: !1, transparent: !0, shape: "device", interactive: !0 },
    "Sign",
  ),
);
T.push(
  b(
    f.RADIO_RELAY,
    "radio_relay",
    "Радиореле",
    35,
    [120, 120, 120],
    6327420,
    { solid: !0, transparent: !0, shape: "device", interactive: !0 },
    "Radio relay",
  ),
);
const Un = 204,
  ji = 205,
  Ys = 206,
  Is = 207,
  Yt = 208,
  ri = 209,
  tr = 210,
  ln = 211,
  As = 212,
  Vs = 213,
  ae = 214,
  Pt = 215,
  er = 216,
  ys = 217,
  vs = 218,
  st = 219,
  Dn = 220,
  ue = 221,
  qs = 222,
  Ks = 223,
  sr = 224,
  nr = 225,
  Qs = 226,
  Xs = 227,
  At = 228,
  ir = 229,
  rr = 230;
T.push(
  b(
    f.AUTUMN_LEAVES_ORANGE,
    "autumn_leaves_orange",
    "Оранжевая осенняя листва",
    8,
    [201, 201, 201],
    14251818,
    { transparent: !0 },
    "Orange autumn leaves",
  ),
);
T.push(
  b(
    f.AUTUMN_LEAVES_RED,
    "autumn_leaves_red",
    "Багряная листва",
    8,
    [202, 202, 202],
    12071466,
    { transparent: !0 },
    "Crimson autumn leaves",
  ),
);
T.push(
  b(
    f.AUTUMN_LEAVES_YELLOW,
    "autumn_leaves_yellow",
    "Золотая листва",
    8,
    [203, 203, 203],
    14923066,
    { transparent: !0 },
    "Golden autumn leaves",
  ),
);
T.push(
  b(
    f.BIRCH_LOG,
    "birch_log",
    "Берёзовое бревно",
    55,
    [Un, ji, Un],
    14999764,
    {},
    "Birch log",
  ),
);
T.push(
  b(
    f.LEAF_LITTER,
    "leaf_litter",
    "Опавшие листья",
    1,
    [Ys, Ys, Ys],
    12084266,
    { solid: !1, transparent: !0, shape: "litter" },
    "Fallen leaves",
  ),
);
T.push(
  b(f.PUMPKIN, "pumpkin", "Тыква", 20, [Is, Yt, Yt], 14711327, {}, "Pumpkin"),
);
T.push(
  b(
    f.JACK_O_LANTERN,
    "jack_o_lantern",
    "Светильник Джека",
    20,
    [Is, Yt, Yt],
    16753968,
    { light: 12 },
    "Jack o'lantern",
  ),
);
z(
  f.PUMPKIN_SPROUT,
  "pumpkin_sprout",
  "Росток тыквы",
  "Pumpkin sprout",
  tr,
  7315007,
);
z(
  f.PUMPKIN_YOUNG,
  "young_pumpkin",
  "Тыквенная плеть",
  "Pumpkin vine",
  ln,
  6131510,
);
z(
  f.PUMPKIN_CROP,
  "pumpkin_crop",
  "Спелая тыква на грядке",
  "Ripe pumpkin vine",
  ln,
  14711327,
);
T.push(
  b(
    f.CANDLE,
    "candle",
    "Свечи",
    1,
    [As, As, As],
    15852482,
    { solid: !1, transparent: !0, light: 8, shape: "candle" },
    "Candles",
  ),
);
T.push(
  b(
    f.COBWEB,
    "cobweb",
    "Паутина",
    4,
    [Vs, Vs, Vs],
    15263978,
    { solid: !1, transparent: !0, shape: "web" },
    "Cobweb",
  ),
);
T.push(
  b(
    f.GRAVESTONE,
    "gravestone",
    "Надгробие",
    110,
    [ae, ae, ae],
    9277584,
    { transparent: !0, shape: "furniture" },
    "Gravestone",
  ),
);
T.push(
  b(
    f.GRAVE_CROSS,
    "grave_cross",
    "Могильный крест",
    60,
    [ue, ue, ue],
    6115655,
    { transparent: !0, shape: "furniture" },
    "Grave cross",
  ),
);
T.push(
  b(
    f.SKULL,
    "skull",
    "Череп",
    20,
    [Pt, Pt, Pt],
    15130569,
    { solid: !1, transparent: !0, shape: "furniture" },
    "Skull",
  ),
);
T.push(
  b(
    f.CAULDRON,
    "cauldron",
    "Ведьмин котёл",
    140,
    [At, At, At],
    3027252,
    { transparent: !0, shape: "furniture", light: 7, interactive: !0 },
    "Witch's cauldron",
  ),
);
T.push(
  b(
    f.SCARECROW,
    "scarecrow",
    "Пугало",
    20,
    [ys, ys, ys],
    11835998,
    { transparent: !0, shape: "furniture" },
    "Scarecrow",
  ),
);
T.push(
  b(
    f.IRON_FENCE,
    "iron_fence",
    "Кованая ограда",
    150,
    [vs, vs, vs],
    2895153,
    { transparent: !0, shape: "fence" },
    "Wrought iron fence",
  ),
);
T.push(
  b(
    f.DARK_PLANKS,
    "dark_planks",
    "Тёмные доски",
    50,
    [st, st, st],
    4140064,
    {},
    "Dark planks",
  ),
);
T.push(
  b(
    f.DEAD_LOG,
    "dead_log",
    "Мёртвое дерево",
    55,
    [Dn, ue, Dn],
    5985357,
    {},
    "Dead wood",
  ),
);
T.push(
  b(
    f.MOSSY_COBBLE,
    "mossy_cobble",
    "Замшелый булыжник",
    80,
    [qs, qs, qs],
    7043676,
    {},
    "Mossy cobblestone",
  ),
);
T.push(
  b(
    f.COFFIN,
    "coffin",
    "Гроб",
    45,
    [st, st, st],
    4140064,
    { transparent: !0, shape: "furniture", interactive: !0 },
    "Coffin",
  ),
);
T.push(
  b(
    f.POTION_SHELF,
    "potion_shelf",
    "Полка с зельями",
    40,
    [st, st, st],
    6176634,
    { transparent: !0, shape: "furniture", light: 6 },
    "Potion shelf",
  ),
);
T.push(
  b(
    f.HANGING_HERBS,
    "hanging_herbs",
    "Сушёные травы",
    1,
    [Ks, Ks, Ks],
    8161866,
    { solid: !1, transparent: !0, shape: "hanging" },
    "Drying herbs",
  ),
);
z(f.FLY_AGARIC, "fly_agaric", "Мухомор", "Fly agaric", sr, 13775914);
z(f.MUSHROOM, "mushroom", "Гриб", "Mushroom", nr, 9067062);
T.push(
  b(
    f.STAIR_DARK,
    "dark_stairs",
    "Ступенька из тёмных досок",
    50,
    [st, st, st],
    4140064,
    { transparent: !0, shape: "stair" },
    "Dark wood stair",
  ),
);
T.push(
  b(
    f.CRACKED_STONE_BRICKS,
    "cracked_stone_bricks",
    "Потрескавшийся каменный кирпич",
    100,
    [Qs, Qs, Qs],
    8355709,
    {},
    "Cracked stone bricks",
  ),
);
z(
  f.AUTUMN_SAPLING,
  "autumn_sapling",
  "Росток клёна",
  "Maple sapling",
  ir,
  14251818,
);
function or(r, t, e, s) {
  if (e !== 0) return e > 0 ? Is : Yt;
  const [n, i] = le[r & 3];
  return t === n && s === i ? ri : Yt;
}
const dn = new Set(Jt.flatMap((r) => [...r.stages]));
new Set(Jt.map((r) => r.stages[2]));
const ar = (r) => {
  for (const t of Jt) {
    const e = t.stages.indexOf(r);
    if (e >= 0) return e;
  }
  return -1;
};
T.push(
  b(
    f.OWNERSHIP_TOTEM,
    "ownership_totem",
    "Тотем владения",
    100,
    [17, 17, 17],
    5169870,
    { transparent: !0, shape: "furniture", interactive: !0, light: 10 },
    "Ownership totem",
  ),
);
const J = {
  CARPET: 239,
  ROYAL_CARPET: 240,
  MARBLE: 241,
  BLACK_MARBLE: 242,
  GOLD: 243,
  VELVET: 244,
  MARQUEE: 245,
};
T.push(
  b(
    f.CASINO_CARPET,
    "casino_carpet",
    "Ковёр казино",
    18,
    [J.CARPET, J.CARPET, J.CARPET],
    9311782,
    {},
    "Casino carpet",
  ),
);
T.push(
  b(
    f.ROYAL_CARPET,
    "royal_carpet",
    "Королевский ковёр",
    18,
    [J.ROYAL_CARPET, J.ROYAL_CARPET, J.ROYAL_CARPET],
    3938392,
    {},
    "Royal carpet",
  ),
);
T.push(
  b(
    f.MARBLE,
    "marble",
    "Мрамор",
    110,
    [J.MARBLE, J.MARBLE, J.MARBLE],
    15328474,
    {},
    "Marble",
  ),
);
T.push(
  b(
    f.BLACK_MARBLE,
    "black_marble",
    "Чёрный мрамор",
    110,
    [J.BLACK_MARBLE, J.BLACK_MARBLE, J.BLACK_MARBLE],
    1907234,
    {},
    "Black marble",
  ),
);
T.push(
  b(
    f.GOLD_BLOCK,
    "gold_block",
    "Золотой блок",
    140,
    [J.GOLD, J.GOLD, J.GOLD],
    14856767,
    {},
    "Block of gold",
  ),
);
T.push(
  b(
    f.VELVET_PANEL,
    "velvet_panel",
    "Бархатная панель",
    30,
    [J.VELVET, J.VELVET, J.VELVET],
    7017520,
    {},
    "Velvet panel",
  ),
);
T.push(
  b(
    f.MARQUEE_LIGHTS,
    "marquee_lights",
    "Огни казино",
    35,
    [J.MARQUEE, J.MARQUEE, J.MARQUEE],
    16766842,
    { light: 15 },
    "Marquee lights",
  ),
);
const hr = 182,
  Ve = 183;
T.push(
  b(
    f.LED_SCREEN,
    "led_screen",
    "LED-экран",
    60,
    [Ve, Ve, Ve],
    1316380,
    { interactive: !0 },
    "LED screen",
  ),
);
T.push(
  b(
    f.AVIATION_LIGHT,
    "aviation_light",
    "Авиационный заградительный огонь",
    30,
    [10, 10, 10],
    14165532,
    { solid: !1, transparent: !0, shape: "furniture" },
    "Aviation obstruction light",
  ),
);
T.push(b(f.ICE, "ice", "Лёд", 60, [w + 3, w + 3, w + 3], 11128802, {}, "Ice"));
function cr(r, t, e, s) {
  if (e !== 0) return Ve;
  const [n, i] = le[r & 3];
  return t === n && s === i ? hr : Ve;
}
const ur = [f.CORAL_PINK, f.CORAL_BLUE, f.CORAL_YELLOW],
  oi = new Set([f.SEAWEED, f.SEAGRASS, ...ur]),
  gt = (r, t = 0) => oi.has(r) || (ui(r) && (t & Xi) !== 0),
  Qt = (r, t = 0) => ui(r) && (t & Zi) !== 0,
  lr = 4,
  wn = 32,
  Zs = 3 / 16,
  dr = new Set([f.DOOR, f.METAL_DOOR, f.ARMORED_DOOR]),
  ve = (r) => dr.has(r),
  ai = [0, -Math.PI / 2, Math.PI, Math.PI / 2];
function Ss(r, t, e) {
  const s = Math.round(Math.cos(e)),
    n = Math.round(Math.sin(e)),
    i = r - 0.5,
    h = t - 0.5;
  return [0.5 + i * s + h * n, 0.5 - i * n + h * s];
}
const zn = new Map();
function fr(r, t = (r & Tt) !== 0, e = Zs) {
  const s = (r & 3) | (r & wn) | (t ? 64 : 0);
  if (e === Zs) {
    const _ = zn.get(s);
    if (_) return _;
  }
  const n = (r & wn) !== 0,
    [i, h, c, o] = t ? (n ? [1 - e, 0, 1, 1] : [0, 0, e, 1]) : [0, 1 - e, 1, 1],
    a = ai[r & 3],
    [u, d] = Ss(i, h, a),
    [l, p] = Ss(c, o, a),
    m = [Math.min(u, l), 0, Math.min(d, p), Math.max(u, l), 1, Math.max(d, p)];
  return (e === Zs && zn.set(s, m), m);
}
function pr(r, t) {
  const e = ai[t & 3],
    [s, n] = Ss(r[0], r[2], e),
    [i, h] = Ss(r[3], r[5], e);
  return [
    Math.min(s, i),
    r[1],
    Math.min(n, h),
    Math.max(s, i),
    r[4],
    Math.max(n, h),
  ];
}
const hi = new Set([
    f.FENCE_WOOD,
    f.FENCE_COBBLE,
    f.FENCE_STONE,
    f.FENCE_STONE_BRICKS,
    f.FENCE_SANDSTONE,
    f.IRON_FENCE,
  ]),
  mr = (r) => hi.has(r),
  ci = new Set([
    f.FENCE_GATE_WOOD,
    f.FENCE_GATE_COBBLE,
    f.FENCE_GATE_STONE,
    f.FENCE_GATE_STONE_BRICKS,
    f.FENCE_GATE_SANDSTONE,
  ]),
  fn = (r) => ci.has(r),
  _r = new Set([
    f.LADDER,
    f.STAIR_WOOD,
    f.STAIR_STONE,
    f.STAIR_SANDSTONE,
    f.STAIR_COBBLE,
    f.STAIR_BRICK,
    f.STAIR_STONE_BRICKS,
    f.STAIR_SAND,
    f.STAIR_RSTONE,
    f.STAIR_DARK,
    ...hi,
    ...ci,
  ]),
  ui = (r) => _r.has(r),
  Er = {
    post1: 6 / 16,
    post2: 10 / 16,
    rail1: 7 / 16,
    rail2: 9 / 16,
    railsY: [
      [6 / 16, 9 / 16],
      [12 / 16, 15 / 16],
    ],
  },
  li = (r) => {
    var t, e;
    return (
      mr(r) ||
      fn(r) ||
      (r > 0 &&
        !!((t = T[r]) != null && t.solid) &&
        ((e = T[r]) == null ? void 0 : e.shape) === "cube")
    );
  },
  Ar = new Set([
    f.SAPLING,
    f.TROPICAL_SAPLING,
    f.DESERT_SAPLING,
    f.PINE_SAPLING,
    f.SAKURA_SAPLING,
    f.AUTUMN_SAPLING,
  ]),
  yr = [f.AUTUMN_LEAVES_ORANGE, f.AUTUMN_LEAVES_RED, f.AUTUMN_LEAVES_YELLOW],
  xr = new Set([
    f.LEAVES,
    f.TROPICAL_LEAVES,
    f.DESERT_LEAVES,
    f.PINE_LEAVES,
    f.SAKURA_LEAVES,
    ...yr,
  ]),
  di = new Set([f.WHEAT_SPROUT, f.WHEAT_YOUNG, f.WHEAT_CROP]),
  fi = new Set([f.POTATO_SPROUT, f.POTATO_YOUNG, f.POTATO_CROP]),
  pi = new Set([f.CARROT_SPROUT, f.CARROT_YOUNG, f.CARROT_CROP]),
  mi = new Set([f.PUMPKIN_SPROUT, f.PUMPKIN_YOUNG, f.PUMPKIN_CROP]),
  Mr = new Set([...di, ...fi, ...pi, ...mi, ...dn]);
({ ...Object.fromEntries(Jt.map((r) => [r.stages[0], [...r.stages]])) });
[
  ...Ar,
  f.TALL_GRASS,
  f.DESERT_GRASS,
  f.FLOWER_RED,
  f.FLOWER_WHITE,
  f.FLOWER_BLUE,
  f.FLOWER_PINK,
  f.FLOWER_YELLOW,
  f.FIRE,
  ...di,
  ...fi,
  ...pi,
  ...mi,
  f.FLY_AGARIC,
  f.MUSHROOM,
  f.LEAF_LITTER,
  ...dn,
  ...oi,
];
const re = (r) => xr.has(r),
  Sr = 8,
  $t = (r) => {
    if (r & Sr) return 1;
    const t = r & 7;
    return t === 0 ? 0.875 : (0.875 * (8 - t)) / 8;
  },
  _i = (r, t) =>
    r === f.RTORCH
      ? t & Tt
        ? 0
        : 7
      : r === f.LAMP
        ? t & Tt
          ? 15
          : 0
        : r === f.REDSTONE
          ? $n(t) > 0
            ? 2
            : 0
          : r === f.FURNACE
            ? t & Tt
              ? 13
              : 0
            : T[r].light,
  Ce = new Uint8Array(256);
for (const r of T) Ce[r.id] = r.light;
Ce[f.LAMP] = 15;
Ce[f.REDSTONE] = 2;
Ce[f.FURNACE] = 13;
Ce[f.FIRE] = 15;
Ce[f.LAVA] = 15;
({ ...Object.fromEntries([...dn].map((r) => [r, "leaves"])) });
const Ei = (r) => r > 0 && T[r].solid && !T[r].transparent;
T.filter(
  (r) =>
    !!r.label &&
    r.id !== f.AIR &&
    r.id !== f.BEDROCK &&
    r.id !== f.PISTON_HEAD &&
    !Mr.has(r.id),
).map((r) => r.id);
function gr(r, t = 0) {
  var s;
  if (r === f.AIR) return 0;
  if ((s = T[r]) != null && s.solid && !T[r].transparent) return 15;
  if (fn(r)) return t & Tt ? 0 : 1;
  if (ve(r)) return t & Tt ? 0 : 15;
  if (re(r) || r === f.WATER || gt(r, t)) return 2;
  const e = T[r];
  return e != null && e.solid && !e.transparent ? 15 : 0;
}
const Ge = 15,
  Et = D + Ge * 2,
  It = Et * Y,
  ne = Et * It,
  Ai = new Uint8Array(65536),
  yi = new Uint8Array(65536),
  xi = new Uint8Array(65536);
for (let r = 0; r < 256; r++)
  for (const t of T) {
    const e = (r << 8) | t.id;
    ((Ai[e] = gr(t.id, r)),
      (yi[e] = _i(t.id, r)),
      (xi[e] = Number(t.id === f.WATER || gt(t.id, r))));
  }
class Mi {
  constructor() {
    K(this, "block", new Uint8Array(ne));
    K(this, "sky", new Uint8Array(ne));
    K(this, "opacity", new Uint8Array(ne));
    K(this, "queue", new Int32Array(ne));
    K(this, "queued", new Uint8Array(ne));
  }
  compute(t, e, s) {
    const { block: n, sky: i, opacity: h, queue: c, queued: o } = this,
      a = t * D - Ge,
      u = e * D - Ge;
    (n.fill(0), i.fill(0), h.fill(15));
    let d = !1;
    for (let m = -1; m <= 1; m++)
      for (let _ = -1; _ <= 1; _++) {
        const y = s(t + m, e + _);
        if (y)
          for (let E = 0; E < D; E++)
            for (let M = 0; M < D; M++) {
              const g = m * D + E + Ge,
                L = _ * D + M + Ge;
              if (g < 0 || L < 0 || g >= Et || L >= Et) continue;
              let I = 15;
              const A = g * It + L * Y;
              for (
                let x = Y - 1, S = be(E, Y - 1, M);
                x >= 0;
                x--, S -= D * D
              ) {
                const R = A + x,
                  O = (y.meta[S] << 8) | y.data[S],
                  k = Ai[O];
                ((h[R] = k),
                  (I = xi[O] && k < 15 ? I * 0.9 : Math.max(0, I - k)),
                  (i[R] = I > 0 ? Math.max(1, Math.round(I)) : 0));
                const W = yi[O];
                ((n[R] = W), W > 1 && (d = !0));
              }
            }
      }
    const l = (m, _) => {
      let y = 0,
        E = 0,
        M = 0;
      o.fill(0);
      const g = (L) => {
        o[L] || ((o[L] = 1), (c[E] = L), (E = (E + 1) % ne), M++);
      };
      for (let L = 0; L < Et; L++)
        for (let I = 0; I < Et; I++)
          for (let A = 0; A < Y; A++) {
            const x = L * It + I * Y + A,
              S = m[x];
            S <= 1 ||
              ((!_ ||
                (L > 0 && m[x - It] < S - 1 && h[x - It] < 15) ||
                (L + 1 < Et && m[x + It] < S - 1 && h[x + It] < 15) ||
                (I > 0 && m[x - Y] < S - 1 && h[x - Y] < 15) ||
                (I + 1 < Et && m[x + Y] < S - 1 && h[x + Y] < 15) ||
                (A > 0 && m[x - 1] < S - 1 && h[x - 1] < 15)) &&
                g(x));
          }
      for (; M;) {
        const L = c[y];
        ((y = (y + 1) % ne), M--, (o[L] = 0));
        const I = L % Y,
          A = Math.floor(L / Y) % Et,
          x = Math.floor(L / It),
          S = (R) => {
            const O = m[L] - Math.max(1, h[R]);
            O > m[R] && ((m[R] = O), O > 1 && g(R));
          };
        (x > 0 && S(L - It),
          x + 1 < Et && S(L + It),
          A > 0 && S(L - Y),
          A + 1 < Et && S(L + Y),
          I > 0 && S(L - 1),
          I + 1 < Y && S(L + 1));
      }
    };
    (d && l(n, !1), l(i, !0));
    const p = (m, _, y, E) => {
      const M = Math.floor(_) - a,
        g = Math.floor(E) - u;
      return (
        (y = Math.floor(y)),
        M < 0 || g < 0 || M >= Et || g >= Et || y < 0 || y >= Y
          ? 0
          : m[M * It + g * Y + y]
      );
    };
    return {
      ox: a,
      oz: u,
      data: n,
      at: (m, _, y) => p(n, m, _, y),
      skyAt: (m, _, y) => p(i, m, _, y),
    };
  }
}
function Rr(r) {
  const t = !!(r & 4),
    e = [[0.06, 0.42, t ? 0.03 : 0.45, 0.94, 0.96, t ? 0.13 : 0.55]];
  t || e.push([0.45, 0, 0.45, 0.55, 0.42, 0.55]);
  const s = (n, i) => {
    switch (r & 3) {
      case 1:
        return [i, 1 - n];
      case 2:
        return [1 - n, 1 - i];
      case 3:
        return [1 - i, n];
      default:
        return [n, i];
    }
  };
  return e.map(([n, i, h, c, o, a]) => {
    const u = s(n, h),
      d = s(c, a);
    return [
      Math.min(u[0], d[0]),
      i,
      Math.min(u[1], d[1]),
      Math.max(u[0], d[0]),
      o,
      Math.max(u[1], d[1]),
    ];
  });
}
const Tr = (r) =>
  (r >= f.REDSTONE && r <= f.DOOR) ||
  ve(r) ||
  fn(r) ||
  r === f.SIGN ||
  r === f.RADIO_RELAY;
function we(r, t, e, s) {
  return s === 1
    ? [t, 1 - r, e]
    : s === 2
      ? [1 - t, r, e]
      : s === 3
        ? [r, 1 - e, t]
        : s === 4
          ? [r, e, 1 - t]
          : s === 5
            ? [r, 1 - t, 1 - e]
            : [r, t, e];
}
function $s(r, t) {
  const e = t(r[0], r[1], r[2]),
    s = t(r[3], r[4], r[5]);
  return [
    Math.min(e[0], s[0]),
    Math.min(e[1], s[1]),
    Math.min(e[2], s[2]),
    Math.max(e[0], s[0]),
    Math.max(e[1], s[1]),
    Math.max(e[2], s[2]),
  ];
}
function br(r, t, e, s, n) {
  var c;
  const i = Bt[t(e, s, n) & 7] ?? Bt[0],
    h = [];
  for (const o of ps) {
    const a = e + o[0],
      u = s + o[1],
      d = n + o[2];
    if (r(a, u, d) !== f.REDSTONE) continue;
    const l = Bt[t(a, u, d) & 7] ?? Bt[0];
    o[0] * i[0] + o[1] * i[1] + o[2] * i[2] === 0 &&
      i.every((p, m) => p === l[m]) &&
      h.push(o);
  }
  for (const o of Bt) {
    if (i.reduce((p, m, _) => p + m * o[_], 0) !== 0) continue;
    const a = i.map((p, m) => p - o[m]),
      u = e + a[0],
      d = s + a[1],
      l = n + a[2];
    r(u, d, l) === f.REDSTONE &&
      (Bt[t(u, d, l) & 7] ?? Bt[0]).every((p, m) => p === o[m]) &&
      h.push(a);
  }
  if ((t(e, s, n) & 7) === 0)
    for (const [o, a] of le)
      for (const u of [-1, 1])
        r(e + o, s + u, n + a) !== f.REDSTONE ||
          (t(e + o, s + u, n + a) & 7) !== 0 ||
          ((c =
            T[
              r(u > 0 ? e : e + o, s + 1 * (u > 0 ? 1 : 0), u > 0 ? n : n + a)
            ]) != null &&
            c.solid) ||
          h.push([o, u, a]);
  return h;
}
function Or(r, t, e, s, n = 0, i = 0, h = 0) {
  if (r === f.RADIO_RELAY) {
    const l = [],
      p = (m, _) => l.push({ box: m, tile: _ });
    for (const m of [0.31, 0.63])
      for (const _ of [0.35, 0.61]) p([m, 0, _, m + 0.06, 0.035, _ + 0.06], 16);
    (p([0.29, 0.035, 0.32, 0.71, 0.075, 0.68], 16),
      p([0.31, 0.075, 0.34, 0.69, 0.235, 0.66], Zt),
      p([0.3, 0.235, 0.33, 0.7, 0.26, 0.67], Zt),
      p([0.35, 0.12, 0.328, 0.55, 0.205, 0.34], 16),
      p([0.365, 0.135, 0.324, 0.535, 0.19, 0.329], t & Tt ? Oe : 16),
      p([0.59, 0.14, 0.32, 0.625, 0.18, 0.34], t & Tt ? 170 : 169));
    for (let m = 0; m < 4; m++)
      p([0.688, 0.1 + m * 0.028, 0.4, 0.701, 0.112 + m * 0.028, 0.58], 16);
    for (const m of [0.32, 0.66])
      for (const _ of [0.35, 0.63])
        p([m, 0.26, _, m + 0.02, 0.266, _ + 0.02], 16);
    return (
      p([0.605, 0.26, 0.58, 0.655, 0.3, 0.63], 16),
      p([0.621, 0.3, 0.596, 0.639, 0.62, 0.614], 16),
      p([0.618, 0.6, 0.593, 0.642, 0.65, 0.617], Zt),
      l
    );
  }
  if (r < f.REDSTONE || r > f.PISTON_HEAD || r === f.RTORCH || r === f.LAMP)
    return null;
  const c = [],
    o = !!(t & Tt),
    a = t & 7,
    u = (l, p) => c.push({ box: l, tile: p });
  let d = !0;
  if (r === f.REDSTONE) {
    const l = $n(t) ? 170 : 169;
    u([0.38, 0.012, 0.38, 0.62, 0.04, 0.62], l);
    const p = [];
    if (e && s) {
      p.push(...br(e, s, n, i, h));
      const E = Bt[a] ?? Bt[0];
      for (const M of ps)
        M[0] * E[0] + M[1] * E[1] + M[2] * E[2] === 0 &&
          Tr(e(n + M[0], i + M[1], h + M[2])) &&
          e(n + M[0], i + M[1], h + M[2]) !== f.REDSTONE &&
          p.push(M);
    } else p.push([1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1]);
    const m = we(0.5, 0, 0.5, a),
      _ = we(1, 0, 0.5, a),
      y = we(0.5, 0, 1, a);
    for (const E of p) {
      const M = E.reduce((L, I, A) => L + I * (_[A] - m[A]) * 2, 0),
        g = E.reduce((L, I, A) => L + I * (y[A] - m[A]) * 2, 0);
      if (
        (M && u([M < 0 ? 0 : 0.5, 0.012, 0.43, M > 0 ? 1 : 0.5, 0.04, 0.57], l),
        g && u([0.43, 0.012, g < 0 ? 0 : 0.5, 0.57, 0.04, g > 0 ? 1 : 0.5], l),
        a === 0 && E[1] > 0)
      ) {
        const [L, , I] = E;
        u(
          [
            L < 0 ? 0 : L > 0 ? 0.97 : 0.43,
            0.04,
            I < 0 ? 0 : I > 0 ? 0.97 : 0.43,
            L ? (L < 0 ? 0.03 : 1) : 0.57,
            1,
            I ? (I < 0 ? 0.03 : 1) : 0.57,
          ],
          l,
        );
      }
    }
  } else if (r === f.LEVER) {
    (u([0.28, 0, 0.27, 0.72, 0.12, 0.73], 26),
      u([0.42, 0.12, 0.4, 0.58, 0.2, 0.6], 16));
    for (let p = 0; p < 4; p++) {
      const m = 0.46 + (o ? -1 : 1) * p * 0.047;
      u([0.455, 0.18 + p * 0.06, m, 0.545, 0.26 + p * 0.06, m + 0.09], 8);
    }
    const l = 0.46 + (o ? -1 : 1) * 3 * 0.047;
    u([0.435, 0.39, l - 0.015, 0.565, 0.47, l + 0.105], o ? 170 : 16);
  } else if (r === f.BUTTON)
    (u([0.28, 0, 0.32, 0.72, 0.035, 0.68], 16),
      u([0.32, 0.035, 0.36, 0.68, o ? 0.065 : 0.12, 0.64], 3));
  else if (r === f.PLATE)
    ((d = !1),
      u([0.06, 0, 0.06, 0.94, 0.025, 0.94], 16),
      u([0.08, 0.025, 0.08, 0.92, o ? 0.04 : 0.09, 0.92], 3));
  else if (r === f.REPEATER) {
    ((d = !1),
      u([0.08, 0, 0.06, 0.92, 0.1, 0.94], 3),
      u([0.42, 0.1, 0.12, 0.58, 0.115, 0.88], o ? 170 : 169));
    const l = (t >> 4) & 3;
    for (const p of [0.2, 0.51 + l * 0.085])
      (u([0.44, 0.11, p - 0.055, 0.56, 0.29, p + 0.055], 8),
        u([0.42, 0.25, p - 0.075, 0.58, 0.35, p + 0.075], o ? 170 : 169));
    return c.map((p) => ({
      ...p,
      box: $s(p.box, (m, _, y) => {
        const E = t & 3;
        return E === 1
          ? [1 - y, _, m]
          : E === 2
            ? [1 - m, _, 1 - y]
            : E === 3
              ? [y, _, 1 - m]
              : [m, _, y];
      }),
    }));
  } else if (r === f.PISTON || r === f.SPISTON || r === f.PISTON_HEAD) {
    d = !1;
    const l = ps[t & 7] ?? ps[3];
    if (r !== f.PISTON_HEAD) {
      u([0, 0, 0, 1, o ? 0.72 : 0.82, 1], 33);
      for (const m of [0, 0.86])
        for (const _ of [0, 0.86]) u([m, 0, _, m + 0.14, 0.82, _ + 0.14], 16);
      o
        ? u([0.4, 0.72, 0.4, 0.6, 1, 0.6], 8)
        : u([0, 0.82, 0, 1, 1, 1], r === f.SPISTON ? 34 : 32);
    } else
      (u([0, 0.75, 0, 1, 1, 1], t & 16 ? 34 : 32),
        u([0.4, 0, 0.4, 0.6, 0.75, 0.6], 8));
    const p = Bt.findIndex(
      (m) => m[0] === -l[0] && m[1] === -l[1] && m[2] === -l[2],
    );
    return c.map((m) => ({
      ...m,
      box: $s(m.box, (_, y, E) => we(_, y, E, p)),
    }));
  } else return null;
  return d
    ? c.map((l) => ({ ...l, box: $s(l.box, (p, m, _) => we(p, m, _, a)) }))
    : c;
}
function Lr(r, t, e, s) {
  const n = [];
  return (
    (r(t - 1, e, s) === f.CHAIN || r(t + 1, e, s) === f.CHAIN) && n.push(0),
    (r(t, e - 1, s) === f.CHAIN || r(t, e + 1, s) === f.CHAIN) && n.push(1),
    (r(t, e, s - 1) === f.CHAIN || r(t, e, s + 1) === f.CHAIN) && n.push(2),
    n.length ? n : [1]
  );
}
const Js = new Map();
function Ir(r) {
  if (Js.has(r)) return Js.get(r);
  const t = [],
    e = 12,
    s = 4,
    n = (i) =>
      r === 0 ? [i[1], -i[0], i[2]] : r === 2 ? [i[0], -i[2], i[1]] : i;
  for (let i = 0; i < 4; i++) {
    const h = (c, o) => {
      const a = (c / e) * Math.PI * 2,
        u = (o / s) * Math.PI * 2,
        d = Math.cos(a) / 0.105,
        l = Math.sin(a) / 0.17,
        p = Math.hypot(d, l),
        m = 0.105 * Math.cos(a) + (0.027 * Math.cos(u) * d) / p,
        _ = 0.17 * Math.sin(a) + (0.027 * Math.cos(u) * l) / p,
        y = 0.027 * Math.sin(u),
        E = n(i % 2 ? [y, _, -m] : [m, _, y]);
      return ((E[r] += (i + 0.5) / 4 - 0.5), E.map((M) => M + 0.5));
    };
    for (let c = 0; c < e; c++)
      for (let o = 0; o < s; o++) {
        const a = [h(c, o), h(c + 1, o), h(c, o + 1), h(c + 1, o + 1)],
          u = a[1].map((m, _) => m - a[0][_]),
          d = a[2].map((m, _) => m - a[0][_]),
          l = [
            u[1] * d[2] - u[2] * d[1],
            u[2] * d[0] - u[0] * d[2],
            u[0] * d[1] - u[1] * d[0],
          ],
          p = Math.hypot(...l);
        (l.forEach((m, _) => (l[_] = m / p)), t.push({ points: a, normal: l }));
      }
  }
  return (Js.set(r, t), t);
}
function Wt(r, t, e) {
  let s = (r ^ Math.imul(t, 374761393) ^ Math.imul(e, 668265263)) >>> 0;
  return (
    (s = (s ^ (s >>> 13)) >>> 0),
    (s = Math.imul(s, 1274126177) >>> 0),
    ((s ^ (s >>> 16)) >>> 0) / 4294967296
  );
}
const Fn = (r) => r * r * (3 - 2 * r);
function Cr(r, t, e) {
  const s = Math.floor(t),
    n = Math.floor(e),
    i = Fn(t - s),
    h = Fn(e - n),
    c = Wt(r, s, n),
    o = Wt(r, s + 1, n),
    a = Wt(r, s, n + 1),
    u = Wt(r, s + 1, n + 1);
  return c + (o - c) * i + (a - c) * h + (c - o - a + u) * i * h;
}
function Rt(r, t, e, s) {
  let n = 0,
    i = 0.5,
    h = 1,
    c = 0;
  for (let o = 0; o < s; o++)
    ((n += (Cr(r + o * 1013, t * h, e * h) * 2 - 1) * i),
      (c += i),
      (i *= 0.5),
      (h *= 2));
  return n / c;
}
const Le = 640,
  ze = new Map();
function Si(r, t, e) {
  const s = `${r}:${t}:${e}`;
  if (ze.has(s)) return ze.get(s);
  const n = t * Le + 250 + Math.floor(Wt(r + 9001, t, e) * 140),
    i = e * Le + 250 + Math.floor(Wt(r + 9007, t, e) * 140),
    h = Rt(r + 301, n * 72e-5, i * 72e-5, 4),
    c = Rt(r + 401, n * 9e-4, i * 9e-4, 3),
    o = Rt(r + 501, n * 82e-5, i * 82e-5, 3),
    a = Wt(r + 9011, t, e),
    u =
      h < -0.19
        ? "islands"
        : c > 0.18 && o < 0.07
          ? "oasis"
          : c > 0 && o < 0.02 && a > 0.25
            ? "savanna"
            : a < 0.33
              ? "volcanic"
              : a < 0.66
                ? "alpine"
                : "yellowstone",
    d =
      Wt(r + 9013, t, e) < 0.22 || Math.hypot(n, i) < 280
        ? null
        : {
            kind: u,
            x: n,
            z: i,
            radius: 200,
            seed: Math.floor(Wt(r + 9019, t, e) * 2147483647),
          };
  return (ze.size >= 1024 && ze.clear(), ze.set(s, d), d);
}
function Nr(r, t, e) {
  const s = Si(r, Math.floor(t / Le), Math.floor(e / Le));
  return s && Math.hypot(t - s.x, e - s.z) < s.radius ? s : null;
}
const en = (r) => {
  const t = fs(r, 0, 1);
  return t * t * (3 - 2 * t);
};
function Br(r, t, e) {
  const s = t - r.x,
    n = e - r.z,
    i = Math.atan2(n / 24, s / 37),
    h = ((r.seed % 997) / 997) * Math.PI * 2,
    c =
      1 +
      Math.sin(i * 3 + h) * 0.16 +
      Math.sin(i * 5 - h) * 0.08 +
      Rt(r.seed + 61, t * 0.055, e * 0.055, 2) * 0.11;
  return Math.hypot(s / 37, n / 24) / c;
}
function Pr(r, t, e, s) {
  const n = t - r.x,
    i = e - r.z,
    h = Math.hypot(n, i),
    c = Rt(r.seed, t * 0.026, e * 0.026, 2);
  let o = s;
  if (r.kind === "volcanic") {
    const a = Math.atan2(i, n);
    ((o =
      47 +
      Math.max(0, 1 - h / 165) * 59 +
      Math.sin(a * 9 + h * 0.035) * Math.min(3, h * 0.07) +
      c * 2),
      h < 28 && (o = 82 + en(h / 28) * 14));
  } else if (r.kind === "yellowstone") {
    o = 49 + c * 2 + Math.max(0, h - 100) * 0.045;
    const a = kr(r, t, e);
    a < 1 ? (o = 46 - Math.floor((1 - a) * 3)) : a < 1.38 && (o = 49);
    const u = Math.hypot((n + 38) / 34, (i + 83) / 27);
    u < 1 && (o = 50 + Math.floor((1 - u) * 7));
  } else if (r.kind === "alpine") {
    o = 48 + c * 3;
    for (const [a, u, d] of [
      [-46, -22, 59],
      [38, -42, 64],
      [5, 52, 51],
    ])
      o = Math.max(
        o,
        48 +
          Math.max(
            0,
            1 -
              Math.hypot(n - a, (i - u) * 1.15) /
                (100 + Math.sin(Math.atan2(i - u, n - a) * 5) * 13),
          ) *
            d +
          c * 3,
      );
    Math.hypot((n + 65) / 25, (i - 70) / 18) < 1 && (o = 43);
  } else if (r.kind === "oasis") {
    const a = Br(r, t, e);
    o =
      a < 1
        ? 46 - (1 - a) * 7
        : 46 + (a - 1) * 5 + Math.abs(c) * Math.min(8, (a - 1) * 4);
  } else if (r.kind === "savanna")
    ((o = 48 + c * 3 + Math.abs(Rt(r.seed + 23, t * 0.009, e * 0.009, 3)) * 9),
      Math.hypot((n + 48) / 25, (i - 30) / 18) < 1 && (o = 44));
  else {
    o = Ms - 12 + c * 2;
    for (const [a, u, d, l] of [
      [-60, -22, 70, 29],
      [55, -44, 58, 22],
      [26, 74, 49, 19],
    ]) {
      const p = Math.atan2(i - u, n - a),
        m =
          Math.hypot(n - a, (i - u) * 1.1) /
          (1 + Math.sin(p * 3 + a) * 0.13 + Math.sin(p * 7) * 0.045);
      o = Math.max(o, Ms - 6 + Math.max(0, 1 - m / d) * l + c * 2);
    }
  }
  return Math.floor(s + (o - s) * en((r.radius - h) / 45));
}
function kr(r, t, e) {
  const s = t - r.x,
    n = e - r.z,
    i = (h, c, o, a) => {
      const u = Math.atan2(c, h);
      return (
        Math.hypot(h / o, c / a) /
        (1 + Math.sin(u * 5) * 0.065 + Math.sin(u * 9) * 0.025)
      );
    };
  return Math.min(
    i(s, n, 31, 23),
    i(s - 63, n + 37, 12, 16),
    i(s + 66, n - 31, 15, 11),
  );
}
function Ur(r, t, e) {
  const s = Si(r, Math.floor(t / Le), Math.floor(e / Le));
  return !s || s.kind !== "islands"
    ? 0
    : en((s.radius - Math.hypot(t - s.x, e - s.z)) / 48);
}
function Dr(r, t, e) {
  const s = Rt(r + 301, t * 72e-5, e * 72e-5, 4),
    n = Rt(r + 401, t * 9e-4, e * 9e-4, 3),
    i = Rt(r + 501, t * 82e-5, e * 82e-5, 3),
    h = Math.abs(Rt(r + 601, t * 0.00125, e * 0.00125, 4));
  return { continent: s, heat: n, wet: i, ridge: h };
}
function wr(r) {
  return r.continent < -0.14
    ? "ocean"
    : r.ridge > 0.47 || r.continent > 0.53
      ? "mountains"
      : r.heat < -0.23
        ? "winter"
        : r.heat < -0.075 && r.wet > -0.12
          ? "autumn"
          : r.heat > 0.18 && r.wet < 0.07
            ? "desert"
            : r.heat > 0 && r.wet > 0.02
              ? "jungle"
              : r.wet > -0.08
                ? "forest"
                : "plains";
}
function zr(r, t, e, s, n) {
  const i = Rt(r + 7, t * 0.011, e * 0.011, 4);
  let h;
  if (n === "ocean") {
    const c = fs((-0.14 - s.continent) / 0.55, 0, 1) ** 0.55;
    h = Ms + 1 - (2 + c * 34) + i * (1.5 + c * 4);
  } else {
    h = Ms + 5 + i * 8 + s.continent * 12;
    const c = (l) => {
        const p = fs(l, 0, 1);
        return p * p * (3 - 2 * p);
      },
      o = c(Math.max((s.ridge - 0.43) / 0.08, (s.continent - 0.49) / 0.08)),
      a =
        (1 - c((s.wet + 0.12) / 0.08)) *
        (1 - c((s.heat - 0.14) / 0.08)) *
        (1 - o),
      u = c((s.heat - 0.14) / 0.08) * (1 - c((s.wet - 0.03) / 0.08)) * (1 - o),
      d = c((s.heat + 0.04) / 0.08) * c((s.wet + 0.02) / 0.08) * (1 - o);
    ((h += a * (1 - i * 4.5 - s.continent * 6)),
      (h +=
        o *
        (Math.max(0, s.ridge - 0.47) * 118 +
          Math.max(0, s.continent - 0.53) * 52 +
          Math.abs(i) * 12)),
      (h +=
        (u > 0 ? u * Math.abs(Rt(r + 17, t * 0.018, e * 0.018, 2)) * 5 : 0) +
        d * i * 3));
  }
  return Math.floor(fs(h, 4, Y - 13));
}
let Fe = new Map(),
  Gn = new Map();
function Fr(r, t, e) {
  const s = Number.isInteger(t) && Number.isInteger(e) ? `${r}:${t}:${e}` : "",
    n = s ? (Fe.get(s) ?? Gn.get(s)) : void 0;
  if (n) return n;
  const i = Dr(r, t, e),
    h = wr(i),
    c = zr(r, t, e, i, h),
    o = Nr(r, t, e),
    a = {
      height: o ? Pr(o, t, e, c) : c,
      biome: (o == null ? void 0 : o.kind) ?? h,
      heat: i.heat,
      wet: i.wet,
    };
  return (
    s && (Fe.size >= 8192 && ((Gn = Fe), (Fe = new Map())), Fe.set(s, a)),
    a
  );
}
function Gr(r, t, e) {
  return Fr(r, t, e).biome;
}
const cs = new Map();
function us(r, t, e) {
  const s = `${r}:${t}:${e}`,
    n = cs.get(s);
  if (n) return n;
  const i = Gr(r, t * 24, e * 24),
    c = {
      desert: [1.3, 0.95, 0.48],
      savanna: [1.2, 0.95, 0.55],
      forest: [0.72, 0.91, 0.72],
      jungle: [0.65, 1, 0.68],
      autumn: [1.62, 0.9, 0.4],
      winter: [0.87, 1, 1.02],
      alpine: [0.84, 0.96, 0.95],
      oasis: [0.87, 1, 0.62],
      volcanic: [0.84, 0.78, 0.7],
    }[i] ?? [1, 1, 0.83];
  return (cs.size > 4096 && cs.clear(), cs.set(s, c), c);
}
function gi(r, t, e) {
  const s = Math.floor(t / 24),
    n = Math.floor(e / 24),
    i = t / 24 - s,
    h = e / 24 - n,
    c = us(r, s, n),
    o = us(r, s + 1, n),
    a = us(r, s, n + 1),
    u = us(r, s + 1, n + 1);
  return [0, 1, 2].map(
    (d) =>
      (c[d] * (1 - i) + o[d] * i) * (1 - h) + (a[d] * (1 - i) + u[d] * i) * h,
  );
}
const Wr = 4,
  pn = (r) => r === f.CHEST || r === f.MILITARY_CHEST,
  Hr = 231,
  Wn = 232,
  xs = 233,
  kt = 234,
  Yr = 235,
  Ri = 236,
  ls = 237,
  Vr = 238,
  vr = (() => {
    const r = [],
      t = (e, s, n = {}) => r.push({ box: e, tile: s, ...n });
    t([0.0625, 0, 0.0625, 0.9375, 0.625, 0.9375], Hr, { top: Ri });
    for (const e of [0.05, 0.86])
      for (const s of [0.05, 0.86]) t([e, 0, s, e + 0.09, 0.625, s + 0.09], xs);
    t([0.05, 0, 0.05, 0.95, 0.05, 0.95], xs);
    for (const e of [0.2, 0.73])
      t([e, 0.05, 0.055, e + 0.07, 0.625, 0.945], kt);
    (t([0.055, 0.625, 0.055, 0.945, 0.82, 0.945], Wn, { bottom: xs, lid: !0 }),
      t([0.1, 0.82, 0.1, 0.9, 0.875, 0.9], Wn, { lid: !0 }));
    for (const e of [0.2, 0.73])
      (t([e, 0.62, 0.045, e + 0.07, 0.83, 0.955], kt, { lid: !0 }),
        t([e, 0.82, 0.09, e + 0.07, 0.885, 0.91], kt, { lid: !0 }));
    for (const e of [0.045, 0.855])
      for (const s of [0.045, 0.855])
        t([e, 0.7, s, e + 0.1, 0.83, s + 0.1], kt, { lid: !0 });
    return (
      t([0.43, 0.48, 0.03, 0.57, 0.74, 0.055], Yr, { lid: !0, fit: !0 }),
      t([0.48, 0.53, 0.024, 0.52, 0.62, 0.031], kt, { lid: !0, fit: !0 }),
      {
        parts: r,
        hingeY: 0.625,
        hingeZ: 0.945,
        openAngle: 1.85,
        envelope: [0.0625, 0, 0.0625, 0.9375, 0.875, 0.9375],
      }
    );
  })(),
  qr = (() => {
    const r = [],
      t = (e, s, n = {}) => r.push({ box: e, tile: s, ...n });
    t([0.05, 0.05, 0.14, 0.95, 0.58, 0.86], ls, { top: Ri });
    for (const e of [0.1, 0.78]) t([e, 0, 0.12, e + 0.12, 0.06, 0.88], kt);
    for (const e of [0.03, 0.9]) t([e, 0.04, 0.125, e + 0.07, 0.58, 0.875], ls);
    for (const e of [0.025, 0.905])
      for (const s of [0.12, 0.83])
        t([e, 0.04, s, e + 0.07, 0.58, s + 0.05], kt);
    for (const e of [0.005, 0.965]) t([e, 0.3, 0.4, e + 0.03, 0.36, 0.6], kt);
    (t([0.3, 0.16, 0.128, 0.7, 0.44, 0.14], Vr, { fit: !0 }),
      t([0.03, 0.58, 0.12, 0.97, 0.7, 0.88], ls, { bottom: xs, lid: !0 }),
      t([0.07, 0.7, 0.16, 0.93, 0.74, 0.84], ls, { lid: !0 }),
      t([0.4, 0.74, 0.46, 0.6, 0.775, 0.54], kt, { lid: !0 }));
    for (const e of [0.18, 0.74])
      t([e, 0.46, 0.105, e + 0.08, 0.64, 0.125], kt, { lid: !0, fit: !0 });
    return {
      parts: r,
      hingeY: 0.58,
      hingeZ: 0.88,
      openAngle: 1.75,
      envelope: [0.03, 0, 0.12, 0.97, 0.775, 0.88],
    };
  })(),
  Kr = (r) => (r === f.MILITARY_CHEST ? qr : vr);
function Qr(r, t) {
  let [e, s, n, i, h, c] = r;
  for (let o = 0; o < (t & 3); o++) [e, n, i, c] = [1 - c, e, 1 - n, i];
  return [e, s, n, i, h, c];
}
function Xr(r, t, e, s, n) {
  const i = n & 3;
  if (n & Wr) return i;
  for (const h of [0, 2, 1, 3]) {
    const c = (i + h) & 3,
      [o, a] = le[c],
      u = r(t + o, e, s + a);
    if (!Ei(u) && !pn(u)) return c;
  }
  return i;
}
function Ti(r, t, e = "all") {
  const s = [];
  for (const n of Kr(r).parts)
    (e === "body" && n.lid) ||
      (e === "lid" && !n.lid) ||
      s.push({ ...n, box: Qr(n.box, t) });
  return s;
}
function Zr(r, t = 0) {
  if (pn(r)) return Ti(r, t & 3);
  const e = [],
    s = (o, a = !1) => e.push({ box: o, fabric: a }),
    n = (o) => T.find((a) => a.name === o).tex[0],
    i = (o, a = 10) => e.push({ box: o, tile: a }),
    h = n("gray_clay"),
    c = n("white_clay");
  if (r === f.OWNERSHIP_TOTEM) {
    const o = n("black_clay"),
      a = T[f.POLISHED_STONE].tex[0],
      u = n("yellow_clay"),
      d = n("cyan_clay");
    (i([0.08, 0, 0.08, 0.92, 0.09, 0.92], o),
      i([0.15, 0.09, 0.15, 0.85, 0.17, 0.85], a),
      i([0.24, 0.17, 0.24, 0.76, 0.22, 0.76], u),
      i([0.32, 0.22, 0.32, 0.68, 0.35, 0.68], o),
      i([0.22, 0.35, 0.22, 0.78, 0.39, 0.78], u),
      i([0.22, 0.8, 0.22, 0.78, 0.84, 0.78], u));
    for (const l of [0.24, 0.7])
      for (const p of [0.24, 0.7]) i([l, 0.39, p, l + 0.06, 0.8, p + 0.06], u);
    for (const [l, p, m] of [
      [0.12, 0.4, 0.05],
      [0.21, 0.45, 0.08],
      [0.26, 0.53, 0.14],
      [0.21, 0.67, 0.08],
      [0.12, 0.75, 0.045],
    ])
      i([0.5 - l / 2, p, 0.5 - l / 2, 0.5 + l / 2, p + m, 0.5 + l / 2], d);
    (i([0.33, 0.84, 0.33, 0.67, 0.89, 0.67], o),
      i([0.39, 0.89, 0.39, 0.61, 0.93, 0.61], u),
      i([0.46, 0.93, 0.46, 0.54, 0.99, 0.54], d));
    for (const l of [0.18, 0.76]) i([l, 0.22, 0.13, l + 0.06, 0.32, 0.2], u);
  } else if (r === f.KITCHEN_COUNTER || r === f.SINK) {
    (i([0.06, 0, 0.08, 0.94, 0.09, 0.92], h),
      i([0.02, 0.09, 0.08, 0.98, 0.82, 0.96]));
    for (const o of [0.055, 0.515])
      (i([o, 0.16, 0.035, o + 0.43, 0.73, 0.08]),
        i([o + 0.32, 0.52, 0.012, o + 0.365, 0.62, 0.035], h));
    r === f.KITCHEN_COUNTER
      ? (i([0, 0.82, 0, 1, 0.9, 1], c),
        i([0.035, 0.74, 0.025, 0.965, 0.81, 0.08], h))
      : (i([0, 0.82, 0, 1, 0.91, 0.17], c),
        i([0, 0.82, 0.78, 1, 0.91, 1], c),
        i([0, 0.82, 0.17, 0.15, 0.91, 0.78], c),
        i([0.85, 0.82, 0.17, 1, 0.91, 0.78], c),
        i([0.15, 0.79, 0.17, 0.85, 0.805, 0.78], h),
        i([0.46, 0.805, 0.44, 0.54, 0.812, 0.52], 10),
        i([0.66, 0.91, 0.85, 0.72, 1, 0.91], h),
        i([0.5, 0.965, 0.6, 0.72, 1, 0.91], h),
        i([0.49, 0.935, 0.59, 0.55, 1, 0.65], h));
  } else if (r === f.STORAGE_SHELF) {
    for (const o of [0.04, 0.91])
      for (const a of [0.1, 0.84]) i([o, 0, a, o + 0.05, 1, a + 0.05], h);
    for (const o of [0.06, 0.48, 0.94])
      i([0.03, o, 0.09, 0.97, o + 0.045, 0.9], h);
    for (const [o, a, u, d, l, p] of [
      [0.11, 0.105, 0.27, 0.33, 0.3, "brown_clay"],
      [0.53, 0.105, 0.36, 0.3, 0.25, "green_clay"],
      [0.12, 0.525, 0.3, 0.24, 0.3, "white_clay"],
      [0.53, 0.525, 0.4, 0.28, 0.24, "brown_clay"],
    ])
      (i([o, a, u, o + d, a + l, u + 0.35], n(p)),
        i(
          [o + d * 0.35, a + l * 0.3, u - 0.004, o + d * 0.65, a + l * 0.66, u],
          c,
        ));
  } else if (r === f.SOFA) {
    for (const o of [0.09, 0.81])
      for (const a of [0.15, 0.75]) i([o, 0, a, o + 0.1, 0.13, a + 0.1]);
    (i([0.02, 0.13, 0.12, 0.98, 0.4, 0.94]),
      i([0.035, 0.4, 0.1, 0.965, 0.58, 0.77], oe),
      i([0.035, 0.4, 0.77, 0.965, 0.95, 0.97], oe),
      i([0.08, 0.59, 0.75, 0.47, 0.88, 0.8], oe),
      i([0.53, 0.59, 0.75, 0.92, 0.88, 0.8], oe));
  } else if (r === f.WALL_LIGHT) {
    (i([0.27, 0.18, 0.91, 0.73, 0.84, 1], h),
      i([0.31, 0.23, 0.77, 0.69, 0.79, 0.91], T[f.GLOWSTONE].tex[0]));
    for (const o of [0.2, 0.43, 0.76])
      i([0.26, o, 0.75, 0.74, o + 0.035, 0.94], h);
    for (const o of [0.27, 0.695]) i([o, 0.2, 0.75, o + 0.035, 0.8, 0.94], h);
  } else if (r === f.AVIATION_LIGHT) {
    const o = n("black_clay"),
      a = n("red_clay"),
      u = n("yellow_clay");
    i([0.34, 0, 0.34, 0.66, 0.04, 0.66], o);
    for (const [d, l] of [
      [0.36, 0.36],
      [0.61, 0.36],
      [0.36, 0.61],
      [0.61, 0.61],
    ])
      i([d, 0.04, l, d + 0.03, 0.055, l + 0.03], h);
    (i([0.45, 0.04, 0.45, 0.55, 0.2, 0.55], u),
      i([0.445, 0.1, 0.445, 0.555, 0.13, 0.555], o),
      i([0.39, 0.2, 0.39, 0.61, 0.24, 0.61], o),
      i([0.41, 0.24, 0.41, 0.59, 0.4, 0.59], a),
      i([0.43, 0.4, 0.43, 0.57, 0.45, 0.57], a),
      i([0.475, 0.45, 0.475, 0.525, 0.48, 0.525], o));
  } else if (r === f.POTTED_PLANT) {
    const o = n("brown_clay"),
      a = n("green_clay");
    (i([0.3, 0, 0.3, 0.7, 0.07, 0.7], o),
      i([0.25, 0.07, 0.25, 0.75, 0.34, 0.75], o),
      i([0.22, 0.31, 0.22, 0.78, 0.39, 0.78], o),
      i([0.27, 0.39, 0.27, 0.73, 0.4, 0.73], T[f.DIRT].tex[0]),
      i([0.47, 0.4, 0.47, 0.53, 0.88, 0.53], a));
    for (const [u, d, l, p, m, _] of [
      [0.2, 0.53, 0.39, 0.49, 0.61, 0.52],
      [0.51, 0.64, 0.44, 0.86, 0.72, 0.57],
      [0.33, 0.76, 0.27, 0.52, 0.85, 0.47],
      [0.46, 0.85, 0.49, 0.67, 0.96, 0.63],
    ])
      i([u, d, l, p, m, _], a);
  } else if (r === f.MINE_AP || r === f.MINE_AT) {
    const o = r === f.MINE_AT,
      a = o ? 0.44 : 0.3,
      u = T.find((m) => m.name === (o ? "brown_clay" : "green_clay")).tex[0],
      d = T.find((m) => m.name === "gray_clay").tex[0],
      l = T.find((m) => m.name === "yellow_clay").tex[0],
      p = (m, _, y, E) => {
        for (let g = 0; g < 10; g++) {
          const L = -m + (2 * m * g) / 10,
            I = -m + (2 * m * (g + 1)) / 10,
            A =
              Math.sqrt(m * m - Math.max(Math.abs(L), Math.abs(I)) ** 2) ||
              m * 0.25;
          e.push({
            box: [0.5 - A, _, 0.5 + L, 0.5 + A, _ + y, 0.5 + I],
            tile: E,
          });
        }
      };
    (p(a, 0, 0.065, d),
      p(a * 0.94, 0.065, o ? 0.075 : 0.055, u),
      p(a * 0.68, o ? 0.14 : 0.12, 0.018, l),
      p(a * 0.61, o ? 0.158 : 0.138, t & 8 ? 0.008 : 0.035, u));
    for (let m = 0; m < 6; m++) {
      const _ = (m * Math.PI) / 3,
        y = 0.5 + Math.cos(_) * a * 0.8,
        E = 0.5 + Math.sin(_) * a * 0.8;
      e.push({
        box: [y - 0.018, 0.12, E - 0.018, y + 0.018, 0.146, E + 0.018],
        tile: d,
      });
    }
    if ((e.push({ box: [0.46, 0.175, 0.46, 0.54, 0.19, 0.54], tile: d }), o))
      for (const m of [0.08, 0.85])
        e.push({ box: [m, 0.055, 0.39, m + 0.07, 0.11, 0.61], tile: d });
  } else if (r === f.REMOTE_STATION) {
    const o = Zt,
      a = Oe,
      u = (d, l = o) => e.push({ box: d, tile: l });
    for (const d of [0.08, 0.79])
      for (const l of [0.12, 0.75]) u([d, 0, l, d + 0.12, 0.045, l + 0.12]);
    (u([0.04, 0.045, 0.08, 0.96, 0.15, 0.92]),
      u([0.07, 0.15, 0.55, 0.93, 0.74, 0.88]),
      u([0.105, 0.24, 0.535, 0.55, 0.685, 0.55], a),
      u([0.59, 0.31, 0.535, 0.885, 0.68, 0.55], a));
    for (let d = 0; d < 3; d++)
      for (let l = 0; l < 9; l++)
        u(
          [
            0.12 + l * 0.062,
            0.15,
            0.18 + d * 0.07,
            0.166 + l * 0.062,
            0.172,
            0.222 + d * 0.07,
          ],
          10,
        );
    (u([0.77, 0.15, 0.2, 0.85, 0.19, 0.28]),
      u([0.78, 0.19, 0.21, 0.84, 0.225, 0.27]),
      u([0.12, 0.17, 0.45, 0.32, 0.19, 0.48], Oe),
      u([0.91, 0.15, 0.77, 0.94, 0.98, 0.8]),
      u([0.89, 0.78, 0.75, 0.96, 0.81, 0.82]),
      u([0.025, 0.27, 0.62, 0.07, 0.6, 0.76]),
      u([0.93, 0.27, 0.62, 0.975, 0.6, 0.76]));
  } else if (r === f.WOOD_TABLE || r === f.MAP_TABLE) {
    s([0, 0.86, 0, 1, r === f.MAP_TABLE ? 0.97 : 1, 1]);
    for (const o of [0.08, 0.78])
      for (const a of [0.08, 0.78]) s([o, 0, a, o + 0.14, 0.86, a + 0.14]);
    (s([0.08, 0.68, 0.08, 0.92, 0.86, 0.2]),
      s([0.08, 0.68, 0.8, 0.92, 0.86, 0.92]));
  } else if (r === f.WOOD_CHAIR || r === f.WOOD_BENCH) {
    const o = r === f.WOOD_BENCH ? 0.03 : 0.14,
      a = 1 - o;
    (s([o, 0.42, 0.16, a, 0.54, 0.84]),
      r === f.WOOD_CHAIR &&
        e.push({
          box: [o + 0.04, 0.54, 0.2, a - 0.04, 0.6, 0.76],
          fabric: !0,
          tile: oe,
        }));
    for (const u of [o, a - 0.12])
      for (const d of [0.18, 0.7]) s([u, 0, d, u + 0.12, 0.44, d + 0.12]);
    for (const u of [o, a - 0.12]) s([u, 0.54, 0.72, u + 0.12, 1, 0.84]);
    (s([o, 0.73, 0.72, a, 0.85, 0.84]), s([o, 0.9, 0.72, a, 1, 0.84]));
  }
  if (r === f.GRAVESTONE) {
    const o = T[f.DIRT].tex[0];
    (i([0.08, 0, 0.32, 0.92, 0.12, 0.68], ae),
      i([0.14, 0.12, 0.4, 0.86, 0.78, 0.6], ae),
      i([0.2, 0.78, 0.4, 0.8, 0.86, 0.6], ae),
      i([0.32, 0.86, 0.4, 0.68, 0.92, 0.6], ae),
      i([0.18, 0, 0.03, 0.82, 0.09, 0.3], o));
  } else if (r === f.GRAVE_CROSS) {
    const o = T[f.DIRT].tex[0];
    (i([0.44, 0, 0.45, 0.56, 1, 0.57], ue),
      i([0.18, 0.62, 0.45, 0.82, 0.73, 0.57], ue),
      i([0.4, 0.6, 0.43, 0.6, 0.75, 0.45], Pt),
      i([0.2, 0, 0.04, 0.8, 0.08, 0.36], o));
  } else if (r === f.SKULL) {
    const o = n("black_clay");
    (i([0.3, 0.07, 0.34, 0.7, 0.42, 0.72], Pt),
      i([0.33, 0.02, 0.3, 0.67, 0.14, 0.52], Pt),
      i([0.36, 0, 0.32, 0.64, 0.05, 0.5], Pt),
      i([0.35, 0.19, 0.325, 0.46, 0.3, 0.34], o),
      i([0.54, 0.19, 0.325, 0.65, 0.3, 0.34], o),
      i([0.47, 0.13, 0.325, 0.53, 0.18, 0.34], o));
  } else if (r === f.CAULDRON) {
    for (const o of [0.12, 0.76])
      for (const a of [0.12, 0.76]) i([o, 0, a, o + 0.12, 0.12, a + 0.12], At);
    (i([0.12, 0.1, 0.12, 0.88, 0.2, 0.88], At),
      i([0.06, 0.18, 0.06, 0.94, 0.8, 0.16], At),
      i([0.06, 0.18, 0.84, 0.94, 0.8, 0.94], At),
      i([0.06, 0.18, 0.16, 0.16, 0.8, 0.84], At),
      i([0.84, 0.18, 0.16, 0.94, 0.8, 0.84], At),
      i([0.02, 0.76, 0.02, 0.98, 0.84, 0.1], At),
      i([0.02, 0.76, 0.9, 0.98, 0.84, 0.98], At),
      i([0.02, 0.76, 0.1, 0.1, 0.84, 0.9], At),
      i([0.9, 0.76, 0.1, 0.98, 0.84, 0.9], At),
      i([0.16, 0.64, 0.16, 0.84, 0.68, 0.84], er));
  } else if (r === f.SCARECROW) {
    const o = V + 4,
      a = n("red_clay"),
      u = n("blue_clay"),
      d = n("brown_clay");
    (e.push({ box: [0.46, 0, 0.46, 0.54, 1.5, 0.54], tile: ue, fit: !0 }),
      i([0.34, 0.16, 0.44, 0.48, 0.62, 0.58], u),
      i([0.52, 0.16, 0.44, 0.66, 0.62, 0.58], u),
      i([0.36, 0.1, 0.42, 0.46, 0.18, 0.6], o),
      i([0.54, 0.1, 0.42, 0.64, 0.18, 0.6], o),
      e.push({ box: [0.3, 0.6, 0.38, 0.7, 1.14, 0.62], tile: a, fit: !0 }),
      e.push({ box: [0, 0.98, 0.43, 1, 1.09, 0.57], tile: a, fit: !0 }),
      i([0, 0.9, 0.41, 0.07, 1, 0.59], o),
      i([0.93, 0.9, 0.41, 1, 1, 0.59], o),
      e.push({ box: [0.38, 1.12, 0.4, 0.62, 1.16, 0.6], tile: o, fit: !0 }),
      t & 4
        ? (e.push({ box: [0.3, 1.14, 0.3, 0.7, 1.52, 0.7], tile: Yt, fit: !0 }),
          e.push({
            box: [0.31, 1.15, 0.295, 0.69, 1.51, 0.3],
            tile: ri,
            fit: !0,
          }))
        : (e.push({
            box: [0.31, 1.14, 0.32, 0.69, 1.5, 0.68],
            tile: rr,
            fit: !0,
          }),
          e.push({
            box: [0.32, 1.15, 0.315, 0.68, 1.49, 0.32],
            tile: ys,
            fit: !0,
          })),
      e.push({ box: [0.2, 1.5, 0.2, 0.8, 1.54, 0.8], tile: d, fit: !0 }),
      e.push({ box: [0.33, 1.54, 0.33, 0.67, 1.76, 0.67], tile: d, fit: !0 }),
      e.push({
        box: [0.32, 1.56, 0.32, 0.68, 1.6, 0.68],
        tile: n("black_clay"),
        fit: !0,
      }));
  } else if (r === f.COFFIN) {
    (i([0.2, 0, 0.05, 0.8, 0.34, 0.95], st),
      i([0.26, 0, 0, 0.74, 0.3, 0.05], st),
      i([0.26, 0, 0.95, 0.74, 0.3, 1], st),
      i([0.16, 0.34, 0.03, 0.84, 0.42, 0.97], st),
      i([0.46, 0.42, 0.18, 0.54, 0.445, 0.72], Pt),
      i([0.34, 0.42, 0.3, 0.66, 0.445, 0.38], Pt));
    for (const o of [0.12, 0.84])
      for (const a of [0.18, 0.78])
        i([a, 0.14, o, a + 0.04, 0.2, o + 0.04], n("yellow_clay"));
  } else if (r === f.POTION_SHELF) {
    for (const d of [0.04, 0.9])
      for (const l of [0.06, 0.82]) i([d, 0, l, d + 0.06, 1, l + 0.12], st);
    for (const d of [0.04, 0.48, 0.92])
      i([0.03, d, 0.08, 0.97, d + 0.05, 0.94], st);
    i([0.03, 0.05, 0.9, 0.97, 0.95, 0.96], st);
    const o = [
        n("purple_clay"),
        n("lime_clay"),
        n("red_clay"),
        n("cyan_clay"),
        n("orange_clay"),
      ],
      a = T[f.PLANKS].tex[0];
    ([
      [0.12, 0.09, 0.3, 0.2],
      [0.33, 0.09, 0.24, 0.28],
      [0.55, 0.09, 0.34, 0.22],
      [0.74, 0.09, 0.26, 0.3],
      [0.14, 0.53, 0.26, 0.26],
      [0.38, 0.53, 0.34, 0.2],
      [0.6, 0.53, 0.22, 0.3],
      [0.8, 0.53, 0.3, 0.18],
    ].forEach(([d, l, p, m], _) => {
      const y = o[_ % o.length],
        E = 0.12;
      (i([d, l, p, d + E, l + m, p + E], y),
        i(
          [d + 0.03, l + m, p + 0.03, d + E - 0.03, l + m + 0.06, p + E - 0.03],
          y,
        ),
        i(
          [
            d + 0.035,
            l + m + 0.06,
            p + 0.035,
            d + E - 0.035,
            l + m + 0.09,
            p + E - 0.035,
          ],
          a,
        ));
    }),
      i([0.1, 0.97, 0.3, 0.3, 1, 0.6], Pt));
  }
  r === f.MAP_TABLE &&
    (e.push({
      box: [0.06, 0.97, 0.06, 0.94, 0.98, 0.94],
      tile: T[f.MAP_TABLE].tex[0],
    }),
    e.push({
      box: [0.36, 0.98, 0.1, 0.5, 0.985, 0.9],
      tile: T[f.WATER].tex[0],
    }),
    e.push({ box: [0.08, 0.985, 0.44, 0.92, 0.99, 0.49], tile: 10 }),
    e.push({ box: [0.67, 0.985, 0.08, 0.71, 0.99, 0.92], tile: 10 }));
  for (const o of e)
    for (let a = 0; a < (t & 3); a++) {
      const [u, d, l, p, m, _] = o.box;
      o.box = [1 - _, d, u, 1 - l, m, p];
    }
  return e;
}
const xt = 16,
  Gt = (r, t, e) =>
    Math.max(0, Math.min(255, Math.round(r + (e - 0.5) * 2 * t)));
function $r(r, t, e, s) {
  return (n, i, h) => {
    const c = h();
    return [Gt(r, s, c), Gt(t, s, c), Gt(e, s, c), 255];
  };
}
on.forEach(([, , r], t) => {});
const Jr = [
  [45, 45, 48],
  [196, 133, 88],
  [226, 188, 75],
  [73, 216, 232],
  [185, 197, 212],
];
Jr.forEach(([r, t, e], s) => {});
const jr = [
    [
      [8, 4, 2.2, 1.8, 0],
      [5, 8, 2.6, 1.7, 0.25],
      [11, 9, 2.6, 1.7, -0.25],
      [8, 12, 2.1, 1.5, 0],
    ],
    [
      [4, 5, 3, 2, 0.2],
      [8, 4, 3, 2.2, 0],
      [12, 5, 3, 2, -0.2],
      [4, 9, 3, 2.1, -0.2],
      [8, 8, 3.4, 2.3, 0],
      [12, 9, 3, 2.1, 0.2],
      [8, 12, 3, 1.9, 0],
    ],
    [
      [4, 4, 3.1, 2.3, 0.15],
      [8, 3, 3.3, 2.4, 0],
      [12, 4, 3.1, 2.3, -0.15],
      [3.4, 8, 3, 2.5, -0.15],
      [8, 7, 3.5, 2.6, 0],
      [12.6, 8, 3, 2.5, 0.15],
      [4, 11, 3.2, 2.2, 0.2],
      [8, 12, 3.3, 2.1, 0],
      [12, 11, 3.2, 2.2, -0.2],
    ],
  ],
  t0 = [
    [
      [6, 5, 2.6, 2.2, 0.2],
      [10, 6, 2.6, 2.2, -0.2],
      [6, 10, 2.6, 2.2, -0.2],
      [10, 10, 2.6, 2.2, 0.2],
    ],
    [
      [5, 4, 3, 2.2, 0.2],
      [10, 4, 3, 2.2, -0.2],
      [12, 8, 2.5, 3, 0],
      [10, 12, 3, 2.2, 0.2],
      [5, 12, 3, 2.2, -0.2],
      [4, 8, 2.5, 3, 0],
      [8, 8, 3, 3, 0],
    ],
    [
      [4, 4, 3, 2.4, 0.2],
      [8, 3, 3, 2.5, 0],
      [12, 4, 3, 2.4, -0.2],
      [13, 8, 2.4, 3, 0],
      [12, 12, 3, 2.4, 0.2],
      [8, 13, 3, 2.5, 0],
      [4, 12, 3, 2.4, -0.2],
      [3, 8, 2.4, 3, 0],
      [8, 8, 3.5, 3.5, 0],
    ],
  ],
  Hn = (r, t, e, s) => {
    const n = (s ? t0 : jr)[e],
      i = s
        ? [
            [5, 5],
            [11, 5],
            [5, 11],
            [11, 11],
            [8, 8],
          ]
        : [
            [4, 6],
            [11, 5],
            [5, 11],
            [12, 10],
            [8, 8],
          ];
    return (h, c, o) => {
      if (e === 2)
        for (const [l, p] of i) {
          const m = Math.hypot(h - l, c - p);
          if (m > 1.55) continue;
          const _ = m > 1.1 ? -36 : h < l && c < p ? 48 : 0;
          return [
            Gt(t[0] + _, 5, o()),
            Gt(t[1] + _, 5, o()),
            Gt(t[2] + _, 5, o()),
            255,
          ];
        }
      let a = 1 / 0,
        u,
        d = 0;
      if (
        (n.forEach((l, p) => {
          const [m, _, y, E, M] = l,
            g = h - m,
            L = c - _,
            I = ((g + L * M) / y) ** 2 + (L / E) ** 2,
            A = (h * 17 + c * 11 + p * 5) % 19 === 0 ? 0.16 : 0;
          I < 1 - A && I < a && ((a = I), (u = l), (d = p));
        }),
        u)
      ) {
        const [l, p] = u,
          m = Math.sqrt(a) > 0.82,
          _ = !s && Math.abs(c - p - (h - l) * 0.3) < 0.42 && a < 0.62,
          y =
            (h < l ? 10 : -4) +
            (c < p ? 8 : -5) +
            ((d % 3) - 1) * 5 +
            (_ ? 19 : 0) -
            (m ? 23 : 0);
        return [
          Gt(r[0] + y, 5, o()),
          Gt(r[1] + y, 6, o()),
          Gt(r[2] + y * 0.8, 5, o()),
          255,
        ];
      }
      return !s && h === 8 && c >= 8 && c <= 14
        ? $r(83, 79, 44, 6)(h, c, o)
        : [0, 0, 0, 0];
    };
  };
Jt.forEach((r, t) => {
  const e = t === 0 ? [74, 129, 56] : t === 1 ? [57, 112, 88] : [55, 104, 61],
    s = [(r.color >> 16) & 255, (r.color >> 8) & 255, r.color & 255];
  for (let n = 0; n < 3; n++) {
    const i = n === 0 ? 16 : n === 1 ? 8 : 0,
      h = [e[0] + i, e[1] + i, e[2] + i * 0.7];
    (Hn(h, s, n, !1), Hn(h, s, n, !0));
  }
});
const P = {
  0: "organic",
  1: "organic",
  2: "dirt",
  3: "stone",
  4: "rock",
  5: "sand",
  6: "rock",
  7: "wood",
  8: "bark",
  9: "organic",
  10: "wood",
  11: "stone",
  12: "glass",
  13: "liquid",
  14: "rock",
  15: "sand",
  16: "metal",
  17: "glass",
  18: "glow",
  19: "wood",
  20: "wood",
  21: "cloth",
  22: "cloth",
  23: "cloth",
  24: "smooth",
  25: "smooth",
  26: "stone",
  27: "wood",
  28: "wood",
  29: "stone",
  30: "glow",
  31: "glow",
  32: "wood",
  33: "wood",
  34: "smooth",
  35: "wood",
  36: "wood",
  37: "metal",
  [jn]: "cloth",
  [ti]: "cloth",
  [ei]: "cloth",
  [ms]: "metal",
  [_s]: "wood",
  [Se]: "metal",
  [Se + 1]: "metal",
  [ge]: "metal",
  [ge + 1]: "metal",
  [si]: "metal",
  [ni]: "metal",
  [an]: "metal",
  [hn]: "metal",
};
on.forEach((r, t) => {
  P[Jn + t] = "stone";
});
for (let r = 0; r < 5; r++) P[at + r] = "rock";
["sand", "sand", "sand", "stone", "stone", "stone", "organic"].forEach(
  (r, t) => {
    P[et + t] = r;
  },
);
[
  "wood",
  "metal",
  "metal",
  "metal",
  "organic",
  "wood",
  "metal",
  "organic",
  "organic",
  "organic",
  "organic",
  "organic",
  "organic",
].forEach((r, t) => {
  P[V + t] = r;
});
["wood", "stone", "stone", "stone", "sand"].forEach((r, t) => {
  P[G + t] = r;
});
for (let r = 0; r < 4; r++)
  ((P[U + r * 3] = "wood"),
    (P[U + r * 3 + 1] = "bark"),
    (P[U + r * 3 + 2] = "organic"));
for (let r = 12; r <= 16; r++) P[U + r] = "organic";
P[U + 17] = "liquid";
P[U + 18] = "glow";
P[U + 19] = "organic";
P[U + 20] = "organic";
P[U + 21] = "organic";
P[Es] = "cloth";
P[lt] = "organic";
P[lt + 1] = "dirt";
P[lt + 2] = "dirt";
for (let r = 3; r <= 8; r++) P[lt + r] = "organic";
for (let r = 0; r < Jt.length * 3; r++) P[tn + r] = "organic";
for (let r = 0; r < Jt.length * 3; r++) P[ii + r] = "organic";
for (let r = 0; r < 3; r++) P[He + r] = "cloth";
P[Ye] = "bark";
P[un] = "glow";
P[Vt] = "organic";
P[Vt + 1] = "organic";
for (let r = 2; r <= 4; r++) P[Vt + r] = "rock";
P[Q] = "sand";
P[Q + 1] = "sand";
P[Q + 2] = "metal";
P[Q + 3] = "rock";
P[Q + 4] = "sand";
P[Q + 5] = "sand";
P[Q + 6] = "metal";
P[w] = "sand";
P[w + 1] = "rock";
P[w + 2] = "rock";
P[w + 3] = "glass";
P[w + 4] = "rock";
P[w + 5] = "metal";
P[w + 6] = "glass";
P[oe] = "cloth";
P[Zt] = "metal";
P[Oe] = "glow";
P[cn] = "metal";
P[qe] = "organic";
P[qe + 1] = "dirt";
P[js] = "wood";
P[Ls] = "organic";
[201, 202, 203].forEach((r) => {
  P[r] = "organic";
});
Object.assign(P, {
  204: "wood",
  205: "bark",
  206: "organic",
  207: "organic",
  208: "organic",
  209: "glow",
  210: "organic",
  211: "organic",
  212: "smooth",
  213: "cloth",
  214: "stone",
  215: "smooth",
  216: "liquid",
  217: "cloth",
  218: "metal",
  219: "wood",
  220: "wood",
  221: "bark",
  222: "rock",
  223: "organic",
  224: "organic",
  225: "organic",
  226: "stone",
  227: "wood",
  228: "metal",
  229: "organic",
  230: "cloth",
});
Object.assign(P, {
  231: "wood",
  232: "wood",
  233: "wood",
  234: "metal",
  235: "metal",
  236: "wood",
  237: "wood",
  238: "smooth",
});
Object.assign(P, {
  182: "glass",
  183: "metal",
  239: "cloth",
  240: "cloth",
  241: "smooth",
  242: "smooth",
  243: "metal",
  244: "cloth",
  245: "glow",
  246: "smooth",
  247: "cloth",
  248: "smooth",
  249: "glow",
  250: "glass",
  251: "cloth",
  252: "smooth",
  253: "wood",
  254: "smooth",
  255: "smooth",
});
const gs = [
    {
      dir: [-1, 0, 0],
      corners: [
        { pos: [0, 1, 0], uv: [0, 1] },
        { pos: [0, 0, 0], uv: [0, 0] },
        { pos: [0, 1, 1], uv: [1, 1] },
        { pos: [0, 0, 1], uv: [1, 0] },
      ],
    },
    {
      dir: [1, 0, 0],
      corners: [
        { pos: [1, 1, 1], uv: [0, 1] },
        { pos: [1, 0, 1], uv: [0, 0] },
        { pos: [1, 1, 0], uv: [1, 1] },
        { pos: [1, 0, 0], uv: [1, 0] },
      ],
    },
    {
      dir: [0, -1, 0],
      corners: [
        { pos: [1, 0, 1], uv: [1, 0] },
        { pos: [0, 0, 1], uv: [0, 0] },
        { pos: [1, 0, 0], uv: [1, 1] },
        { pos: [0, 0, 0], uv: [0, 1] },
      ],
    },
    {
      dir: [0, 1, 0],
      corners: [
        { pos: [0, 1, 1], uv: [1, 1] },
        { pos: [1, 1, 1], uv: [0, 1] },
        { pos: [0, 1, 0], uv: [1, 0] },
        { pos: [1, 1, 0], uv: [0, 0] },
      ],
    },
    {
      dir: [0, 0, -1],
      corners: [
        { pos: [1, 0, 0], uv: [0, 0] },
        { pos: [0, 0, 0], uv: [1, 0] },
        { pos: [1, 1, 0], uv: [0, 1] },
        { pos: [0, 1, 0], uv: [1, 1] },
      ],
    },
    {
      dir: [0, 0, 1],
      corners: [
        { pos: [0, 0, 1], uv: [0, 0] },
        { pos: [1, 0, 1], uv: [1, 0] },
        { pos: [0, 1, 1], uv: [0, 1] },
        { pos: [1, 1, 1], uv: [1, 1] },
      ],
    },
  ],
  e0 = new Map(
    gs.map((r) => [r, gs.find((t) => t.dir.every((e, s) => e === -r.dir[s]))]),
  ),
  s0 = [1, 1, 1, 1],
  Mt = 0.02,
  Yn = 0.002,
  St = 0.003,
  bi = 5,
  mn = 7,
  n0 = new Set([f.FLY_AGARIC, f.MUSHROOM]);
class Re {
  constructor() {
    K(this, "pos", []);
    K(this, "normal", []);
    K(this, "uv", []);
    K(this, "color", []);
    K(this, "light", []);
    K(this, "sky", 1);
    K(this, "tint", [1, 1, 1]);
    K(this, "skylight", []);
    K(this, "index", []);
    K(this, "anim", []);
    K(this, "_animMode", 0);
    K(this, "hasAnim", !1);
  }
  get animMode() {
    return this._animMode;
  }
  set animMode(t) {
    ((this._animMode = t), t && (this.hasAnim = !0));
  }
  quad(t, e, s, n, i, h, c, o, a = 0.14, u) {
    const d = this.pos.length / 3,
      l = i % xt,
      p = Math.floor(i / xt);
    for (let m = 0; m < 4; m++) {
      const _ = t.corners[m];
      let y = _.pos[1];
      c && y === 1 && (y -= a);
      let E = _.pos[0],
        M = _.pos[2];
      (c &&
        t.dir[1] === 0 &&
        ((y += _.pos[1] === 1 ? Yn : -Yn),
        t.dir[0] !== 0
          ? ((E += t.dir[0] * St), (M += _.pos[2] === 1 ? St : -St))
          : ((M += t.dir[2] * St), (E += _.pos[0] === 1 ? St : -St))),
        this.pos.push(e + E, s + y, n + M),
        this.normal.push(t.dir[0], t.dir[1], t.dir[2]));
      const g = Mt + _.uv[0] * (1 - 2 * Mt),
        L = Mt + _.uv[1] * (1 - 2 * Mt);
      this.uv.push((l + g) / xt, 1 - (p + 1 - L) / xt);
      const I = 0.5 + h[m] * (0.5 / 3);
      (this.color.push(I * this.tint[0], I * this.tint[1], I * this.tint[2]),
        this.skylight.push(this.sky),
        this.light.push(u ? u[m] : o),
        this.anim.push(this.animMode >= 3 ? 3 : 0));
    }
    h[0] + h[3] > h[1] + h[2]
      ? this.index.push(d, d + 1, d + 3, d, d + 3, d + 2)
      : this.index.push(d, d + 1, d + 2, d + 2, d + 1, d + 3);
  }
  rawQuad(t, e, s, n, i = !1, h = !1) {
    const c = this.pos.length / 3,
      o = s % xt,
      a = Math.floor(s / xt),
      u = [
        [0, 1],
        [0, 0],
        [1, 1],
        [1, 0],
      ];
    let d = 0,
      l = 0,
      p = 0,
      m = 0;
    if (h) {
      ((d = l = t[0][0]), (p = m = t[0][2]));
      for (let _ = 1; _ < 4; _++)
        ((d = Math.min(d, t[_][0])),
          (l = Math.max(l, t[_][0])),
          (p = Math.min(p, t[_][2])),
          (m = Math.max(m, t[_][2])));
    }
    for (let _ = 0; _ < 4; _++) {
      let y = t[_][0],
        E = t[_][2];
      (h &&
        (Math.abs(e[0]) > 0.5
          ? ((y += e[0] * St),
            (E += t[_][2] <= p + 1e-4 ? -St : t[_][2] >= m - 1e-4 ? St : 0))
          : Math.abs(e[2]) > 0.5 &&
            ((E += e[2] * St),
            (y += t[_][0] <= d + 1e-4 ? -St : t[_][0] >= l - 1e-4 ? St : 0))),
        this.pos.push(y, t[_][1], E),
        this.normal.push(e[0], e[1], e[2]));
      const M = Mt + u[_][0] * (1 - 2 * Mt),
        g = Mt + u[_][1] * (1 - 2 * Mt);
      (this.uv.push((o + M) / xt, 1 - (a + 1 - g) / xt),
        this.color.push(this.tint[0], this.tint[1], this.tint[2]),
        this.skylight.push(this.sky),
        this.light.push(n));
      const L = u[_][1] === 1;
      this.anim.push(
        this.animMode === bi
          ? L
            ? 5
            : 4
          : this.animMode === mn
            ? L
              ? 7
              : 6
            : this.animMode === 3
              ? 3
              : this.animMode
                ? L
                  ? 2
                  : 1
                : 0,
      );
    }
    (this.index.push(c, c + 1, c + 2, c + 2, c + 1, c + 3),
      i && this.index.push(c, c + 2, c + 1, c + 1, c + 2, c + 3));
  }
  rawQuadUV(t, e, s, n, i, h = !1) {
    const c = this.pos.length / 3,
      o = s % xt,
      a = Math.floor(s / xt);
    for (let u = 0; u < 4; u++) {
      (this.pos.push(t[u][0], t[u][1], t[u][2]),
        this.normal.push(e[0], e[1], e[2]));
      const d = Mt + n[u][0] * (1 - 2 * Mt),
        l = Mt + n[u][1] * (1 - 2 * Mt);
      (this.uv.push((o + d) / xt, 1 - (a + 1 - l) / xt),
        this.color.push(this.tint[0], this.tint[1], this.tint[2]),
        this.skylight.push(this.sky),
        this.light.push(i),
        this.anim.push(0));
    }
    (this.index.push(c, c + 1, c + 2, c + 2, c + 1, c + 3),
      h && this.index.push(c, c + 2, c + 1, c + 1, c + 2, c + 3));
  }
  boxUV(t, e, s, n, i, h, c, o, a, u, d) {
    const l = (g) => Math.max(0, Math.min(1, g)),
      p = l(t - a),
      m = l(n - a),
      _ = l(e - u),
      y = l(i - u),
      E = l(s - d),
      M = l(h - d);
    (this.rawQuadUV(
      [
        [t, i, s],
        [t, e, s],
        [t, i, h],
        [t, e, h],
      ],
      [-1, 0, 0],
      c.side,
      [
        [E, y],
        [E, _],
        [M, y],
        [M, _],
      ],
      o,
    ),
      this.rawQuadUV(
        [
          [n, i, h],
          [n, e, h],
          [n, i, s],
          [n, e, s],
        ],
        [1, 0, 0],
        c.side,
        [
          [1 - M, y],
          [1 - M, _],
          [1 - E, y],
          [1 - E, _],
        ],
        o,
      ),
      this.rawQuadUV(
        [
          [t, i, h],
          [n, i, h],
          [t, i, s],
          [n, i, s],
        ],
        [0, 1, 0],
        c.top,
        [
          [p, M],
          [m, M],
          [p, E],
          [m, E],
        ],
        o,
      ),
      this.rawQuadUV(
        [
          [t, e, s],
          [n, e, s],
          [t, e, h],
          [n, e, h],
        ],
        [0, -1, 0],
        c.bottom,
        [
          [p, 1 - E],
          [m, 1 - E],
          [p, 1 - M],
          [m, 1 - M],
        ],
        o,
      ),
      this.rawQuadUV(
        [
          [n, i, s],
          [n, e, s],
          [t, i, s],
          [t, e, s],
        ],
        [0, 0, -1],
        c.side,
        [
          [1 - m, y],
          [1 - m, _],
          [1 - p, y],
          [1 - p, _],
        ],
        o,
      ),
      this.rawQuadUV(
        [
          [t, i, h],
          [t, e, h],
          [n, i, h],
          [n, e, h],
        ],
        [0, 0, 1],
        c.side,
        [
          [p, y],
          [p, _],
          [m, y],
          [m, _],
        ],
        o,
      ));
  }
  box(t, e, s, n, i, h, c, o, a = !1) {
    if (!a) {
      this.boxUV(t, e, s, n, i, h, c, o, t, e, s);
      return;
    }
    (this.rawQuad(
      [
        [t, i, s],
        [t, e, s],
        [t, i, h],
        [t, e, h],
      ],
      [-1, 0, 0],
      c.side,
      o,
    ),
      this.rawQuad(
        [
          [n, i, h],
          [n, e, h],
          [n, i, s],
          [n, e, s],
        ],
        [1, 0, 0],
        c.side,
        o,
      ),
      this.rawQuad(
        [
          [t, i, h],
          [n, i, h],
          [t, i, s],
          [n, i, s],
        ],
        [0, 1, 0],
        c.top,
        o,
      ),
      this.rawQuad(
        [
          [t, e, s],
          [n, e, s],
          [t, e, h],
          [n, e, h],
        ],
        [0, -1, 0],
        c.bottom,
        o,
      ),
      this.rawQuad(
        [
          [n, i, s],
          [n, e, s],
          [t, i, s],
          [t, e, s],
        ],
        [0, 0, -1],
        c.side,
        o,
      ),
      this.rawQuad(
        [
          [t, i, h],
          [t, e, h],
          [n, i, h],
          [n, e, h],
        ],
        [0, 0, 1],
        c.side,
        o,
      ));
  }
  build() {
    if (this.index.length === 0) return null;
    const t = new Os();
    return (
      t.setAttribute("position", new Nt(this.pos, 3)),
      t.setAttribute("normal", new Nt(this.normal, 3)),
      t.setAttribute("uv", new Nt(this.uv, 2)),
      t.setAttribute("color", new Nt(this.color, 3)),
      t.setAttribute("skylight", new Nt(this.skylight, 1)),
      t.setAttribute("blocklight", new Nt(this.light, 1)),
      this.hasAnim && t.setAttribute("anim", new Nt(this.anim, 1)),
      t.setIndex(this.index),
      t
    );
  }
}
const i0 = { 0: [1, 2], 1: [0, 2], 2: [0, 1] },
  Vn = [
    [0, 0],
    [-0.34, 0],
    [0.34, 0],
    [0, -0.34],
    [0, 0.34],
  ];
function vn(r, t, e, s, n, i, h) {
  const [c, o] = Vn[n & 7] ?? Vn[0],
    a = (n & 7) !== 0,
    u = a ? 0.14 : 0,
    d = t + 0.5 + c,
    l = s + 0.5 + o,
    p = a ? t + 0.5 + c * 0.48 : d,
    m = a ? s + 0.5 + o * 0.48 : l,
    _ = e + u + 0.03,
    y = _ + 0.69,
    E = 0.145;
  (r.rawQuad(
    [
      [p - E, y, m],
      [d - E, _, l],
      [p + E, y, m],
      [d + E, _, l],
    ],
    [0, 0, 1],
    i,
    h,
    !0,
  ),
    r.rawQuad(
      [
        [p, y, m - E],
        [d, _, l - E],
        [p, y, m + E],
        [d, _, l + E],
      ],
      [1, 0, 0],
      i,
      h,
      !0,
    ));
}
function r0(r, t, e, s, n, i, h) {
  switch (n & 7) {
    case 1:
      r.rawQuad(
        [
          [t + 0.06, e + 1, s],
          [t + 0.06, e, s],
          [t + 0.06, e + 1, s + 1],
          [t + 0.06, e, s + 1],
        ],
        [1, 0, 0],
        i,
        h,
        !0,
      );
      break;
    case 2:
      r.rawQuad(
        [
          [t + 1 - 0.06, e + 1, s + 1],
          [t + 1 - 0.06, e, s + 1],
          [t + 1 - 0.06, e + 1, s],
          [t + 1 - 0.06, e, s],
        ],
        [-1, 0, 0],
        i,
        h,
        !0,
      );
      break;
    case 3:
      r.rawQuad(
        [
          [t, e + 1, s + 0.06],
          [t, e, s + 0.06],
          [t + 1, e + 1, s + 0.06],
          [t + 1, e, s + 0.06],
        ],
        [0, 0, 1],
        i,
        h,
        !0,
      );
      break;
    default:
      r.rawQuad(
        [
          [t + 1, e + 1, s + 1 - 0.06],
          [t + 1, e, s + 1 - 0.06],
          [t, e + 1, s + 1 - 0.06],
          [t, e, s + 1 - 0.06],
        ],
        [0, 0, -1],
        i,
        h,
        !0,
      );
      break;
  }
}
const ut = 219,
  qn = 10,
  ds = 15,
  Kn = 22,
  o0 = {
    head: [
      [[0, 0, 0, 0.125, 1, 0.125], ut],
      [[0.875, 0, 0, 1, 1, 0.125], ut],
      [[-0.008, 1, -0.008, 0.133, 1.06, 0.133], ut],
      [[0.867, 1, -0.008, 1.008, 1.06, 0.133], ut],
      [[0.125, 0.84, 0.02, 0.875, 0.95, 0.105], ut],
      [[0.125, 0.3, 0.035, 0.875, 0.84, 0.09], qn],
      [[0.02, 0.12, 0.125, 0.12, 0.32, 1], ut],
      [[0.88, 0.12, 0.125, 0.98, 0.32, 1], ut],
      [[0.06, 0.25, 0.11, 0.94, 0.5, 1], ds],
      [[0.17, 0.5, 0.15, 0.83, 0.64, 0.46], ds],
      [[0.04, 0.3, 0.56, 0.96, 0.56, 1], Kn],
      [[0.05, 0.5, 0.5, 0.95, 0.585, 0.61], ds],
    ],
    foot: [
      [[0, 0, 0.875, 0.125, 0.66, 1], ut],
      [[0.875, 0, 0.875, 1, 0.66, 1], ut],
      [[-0.008, 0.66, 0.867, 0.133, 0.71, 1.008], ut],
      [[0.867, 0.66, 0.867, 1.008, 0.71, 1.008], ut],
      [[0.125, 0.52, 0.89, 0.875, 0.61, 0.985], ut],
      [[0.125, 0.18, 0.905, 0.875, 0.52, 0.97], qn],
      [[0.02, 0.12, 0, 0.12, 0.32, 0.875], ut],
      [[0.88, 0.12, 0, 0.98, 0.32, 0.875], ut],
      [[0.06, 0.25, 0, 0.94, 0.5, 0.9], ds],
      [[0.04, 0.3, 0, 0.96, 0.56, 0.87], Kn],
    ],
  };
function a0(r, t, e, s, n, i) {
  for (const [h, c] of o0[n & Qi ? "head" : "foot"]) {
    const [o, a, u, d, l, p] = pr(h, n & 3);
    r.boxUV(
      t + o,
      e + a,
      s + u,
      t + d,
      e + l,
      s + p,
      { top: c, side: c, bottom: c },
      i,
      t,
      e,
      s,
    );
  }
}
function h0(r, t, e, s, n, i, h) {
  const c = { top: i, side: i, bottom: i };
  r.box(t, e, s, t + 1, e + 0.5, s + 1, c, h);
  const [o, a] = le[n & 3] ?? le[0];
  let u = t,
    d = t + 1,
    l = s,
    p = s + 1;
  (o !== 0
    ? o > 0
      ? (u = t + 0.5)
      : (d = t + 0.5)
    : a > 0
      ? (l = s + 0.5)
      : (p = s + 0.5),
    r.box(u, e + 0.5, l, d, e + 1, p, c, h));
}
function c0(r, t, e, s, n, i, h) {
  const c = Math.max(1, Math.min(8, (n & 7) + 1)) / 8;
  r.box(t, e, s, t + 1, e + c, s + 1, { top: i, side: i, bottom: i }, h);
}
const sn = (r, t) => [r[0] - t[0], r[1] - t[1], r[2] - t[2]],
  nn = (r, t) => [
    r[1] * t[2] - r[2] * t[1],
    r[2] * t[0] - r[0] * t[2],
    r[0] * t[1] - r[1] * t[0],
  ],
  u0 = (r, t) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2],
  Te = (r) => {
    const t = Math.hypot(r[0], r[1], r[2]) || 1;
    return [r[0] / t, r[1] / t, r[2] / t];
  };
function Rs(r, t, e, s, n, i) {
  u0(nn(sn(t[1], t[0]), sn(t[2], t[0])), e) < 0
    ? r.rawQuadUV([t[0], t[2], t[1], t[3]], e, s, [n[0], n[2], n[1], n[3]], i)
    : r.rawQuadUV(t, e, s, n, i);
}
function Me(r, t, e, s, n, i, h, c, o = 0, a = 0, u = !0, d = !0) {
  const l = Te(sn(e, t)),
    p = Math.hypot(e[0] - t[0], e[1] - t[1], e[2] - t[2]);
  let m = nn(l, [0, 1, 0]);
  Math.hypot(m[0], m[1], m[2]) < 0.001 && (m = [1, 0, 0]);
  const _ = Te(m),
    y = nn(_, l),
    E = (L, I) => {
      const A = o + (I / n) * Math.PI * 2,
        x = Math.cos(A) * s,
        S = Math.sin(A) * s;
      return [
        L[0] + y[0] * x + _[0] * S,
        L[1] + y[1] * x + _[1] * S,
        L[2] + y[2] * x + _[2] * S,
      ];
    },
    M = Math.min(1, a + p);
  for (let L = 0; L < n; L++) {
    const I = o + ((L + 0.5) / n) * Math.PI * 2,
      A = Te([
        y[0] * Math.cos(I) + _[0] * Math.sin(I),
        y[1] * Math.cos(I) + _[1] * Math.sin(I),
        y[2] * Math.cos(I) + _[2] * Math.sin(I),
      ]),
      x = L / n,
      S = (L + 1) / n;
    Rs(
      r,
      [E(e, L), E(t, L), E(e, L + 1), E(t, L + 1)],
      A,
      i,
      [
        [M, x],
        [a, x],
        [M, S],
        [a, S],
      ],
      c,
    );
  }
  const g = (L, I) => {
    const A = (x) => {
      const S = (x / n) * Math.PI * 2;
      return [0.5 + Math.cos(S) * 0.45, 0.5 + Math.sin(S) * 0.45];
    };
    for (let x = 0; x + 2 < n; x += 2) {
      const S = Math.min(x + 3, n);
      Rs(
        r,
        [E(L, x + 1), E(L, 0), E(L, x + 2), E(L, S % n)],
        I,
        h,
        [A(x + 1), A(0), A(x + 2), A(S % n)],
        c,
      );
    }
  };
  (u && g(t, [-l[0], -l[1], -l[2]]), d && g(e, l));
}
function l0(r, t, e, s, n, i, h, c, o, a) {
  const u = Math.cos(c),
    d = Math.sin(c),
    l = (L, I, A) => [t + L * u - A * d, e + I, s + L * d + A * u],
    p = [u, 0, d],
    m = [-d, 0, u],
    _ = Math.min(1, n * 2),
    y = Math.min(1, h * 2),
    E = Math.min(1, i),
    M = 0.78;
  Rs(
    r,
    [
      l(-n * M, i, h * M),
      l(n * M, i, h * M),
      l(-n * M, i, -h * M),
      l(n * M, i, -h * M),
    ],
    [0, 1, 0],
    o,
    [
      [0, y],
      [_, y],
      [0, 0],
      [_, 0],
    ],
    a,
  );
  const g = (L, I, A, x, S, R) =>
    Rs(
      r,
      [L, I, A, x],
      Te([S[0], 0.35, S[2]]),
      o,
      [
        [0, E],
        [0, 0],
        [R, E],
        [R, 0],
      ],
      a,
    );
  (g(l(-n * M, i, h * M), l(-n, 0, h), l(n * M, i, h * M), l(n, 0, h), m, _),
    g(
      l(n * M, i, -h * M),
      l(n, 0, -h),
      l(-n * M, i, -h * M),
      l(-n, 0, -h),
      [-m[0], 0, -m[2]],
      _,
    ),
    g(l(n * M, i, h * M), l(n, 0, h), l(n * M, i, -h * M), l(n, 0, -h), p, y),
    g(
      l(-n * M, i, -h * M),
      l(-n, 0, -h),
      l(-n * M, i, h * M),
      l(-n, 0, h),
      [-p[0], 0, -p[2]],
      y,
    ));
}
function d0(r, t, e, s, n, i) {
  var L, I;
  const h = t + 0.5,
    c = s + 0.5;
  let o = ((t * 73856093) ^ (s * 19349663) ^ (e * 83492791)) >>> 0;
  const a = () => (
      (o = (Math.imul(o ^ (o >>> 15), 2246822507) + 2654435769) >>> 0),
      (o >>> 8) / 16777216
    ),
    u = un,
    d = [
      ((L = T[f.COBBLE]) == null ? void 0 : L.tex[1]) ?? 4,
      ((I = T[f.STONE]) == null ? void 0 : I.tex[1]) ?? 3,
    ],
    l = 9,
    p = a() * Math.PI * 2;
  for (let A = 0; A < l; A++) {
    const x = p + (A / l) * Math.PI * 2 + (a() - 0.5) * 0.25,
      S = 0.395 + (a() - 0.5) * 0.03,
      R = 0.07 + a() * 0.025,
      O = 0.055 + a() * 0.02,
      k = 0.085 + a() * 0.05;
    l0(
      r,
      h + Math.cos(x) * S,
      e,
      c + Math.sin(x) * S,
      R,
      k,
      O,
      x + Math.PI / 2 + (a() - 0.5) * 0.4,
      d[A % 2],
      i,
    );
  }
  Me(r, [h, e, c], [h, e + 0.035, c], 0.31, 8, u, u, 1, a(), 0, !1, !0);
  const m = a() * Math.PI;
  for (let A = 0; A < 2; A++) {
    const x = m + (A * Math.PI) / 2 + (a() - 0.5) * 0.3,
      S = Math.cos(x) * 0.29,
      R = Math.sin(x) * 0.29,
      O = e + 0.075 + A * 0.05;
    (Me(
      r,
      [h - S, O, c - R],
      [h - S * 0.25, O, c - R * 0.25],
      0.048,
      6,
      n,
      7,
      i,
      a(),
    ),
      Me(
        r,
        [h - S * 0.25, O, c - R * 0.25],
        [h + S * 0.25, O, c + R * 0.25],
        0.046,
        6,
        u,
        u,
        1,
        a(),
        0,
        !1,
        !1,
      ),
      Me(
        r,
        [h + S * 0.25, O, c + R * 0.25],
        [h + S, O, c + R],
        0.048,
        6,
        n,
        7,
        i,
        a(),
      ));
  }
  const _ = a() * Math.PI * 2;
  for (let A = 0; A < 4; A++) {
    const x = _ + (A * Math.PI) / 2 + (a() - 0.5) * 0.35,
      S = [h + Math.cos(x) * 0.36, e + 0.03, c + Math.sin(x) * 0.36],
      R = [
        h + Math.cos(x) * 0.045,
        e + 0.47 + a() * 0.06,
        c + Math.sin(x) * 0.045,
      ],
      O = [
        S[0] + (R[0] - S[0]) * 0.55,
        S[1] + (R[1] - S[1]) * 0.55,
        S[2] + (R[2] - S[2]) * 0.55,
      ],
      k = 0.05 + a() * 0.012,
      W = a();
    (Me(r, S, O, k, 6, n, 7, i, W, 0, !0, !1),
      Me(r, O, R, k * 0.94, 6, u, 7, 1, W, 0, !1, !0));
  }
  const y = T[f.FIRE].tex[1];
  r.animMode = 1;
  const E = e + 0.05,
    M = 0.74 + a() * 0.08,
    g = 0.29;
  for (let A = 0; A < 4; A++) {
    const x = (A * Math.PI) / 4 + 0.2,
      S = Math.cos(x) * g,
      R = Math.sin(x) * g;
    r.rawQuad(
      [
        [h - S, E + M, c - R],
        [h - S, E, c - R],
        [h + S, E + M, c + R],
        [h + S, E, c + R],
      ],
      Te([-R, 0, S]),
      y,
      1,
      !0,
    );
  }
  for (let A = 0; A < 2; A++) {
    const x = m + A * Math.PI + 0.5,
      S = h + Math.cos(x) * 0.2,
      R = c + Math.sin(x) * 0.2,
      O = Math.cos(x + 1.3) * 0.1,
      k = Math.sin(x + 1.3) * 0.1,
      W = 0.3;
    r.rawQuad(
      [
        [S - O, E + 0.05 + W, R - k],
        [S - O, E + 0.05, R - k],
        [S + O, E + 0.05 + W, R + k],
        [S + O, E + 0.05, R + k],
      ],
      Te([-k, 0, O]),
      y,
      1,
      !0,
    );
  }
  r.animMode = 0;
}
function f0(r, t, e, s, n, i, h) {
  const c = { top: i[0], side: i[1], bottom: i[2] },
    o = 0.13,
    a = 0.17,
    u = 0.9;
  for (const [m, _] of [
    [0.08, 0.08],
    [0.79, 0.08],
    [0.08, 0.79],
    [0.79, 0.79],
  ])
    r.boxUV(t + m, e, s + _, t + m + o, e + u, s + _ + o, c, h, t, e, s);
  const d = (m) => {
    for (let _ = 0; _ < 4; _++) {
      const y = a + _ * 0.17,
        E = y + 0.115;
      m
        ? (r.boxUV(
            t + y,
            e + 0.12,
            s + 0.08,
            t + E,
            e + 0.84,
            s + 0.2,
            c,
            h,
            t,
            e,
            s,
          ),
          r.boxUV(
            t + y,
            e + 0.12,
            s + 0.8,
            t + E,
            e + 0.84,
            s + 0.92,
            c,
            h,
            t,
            e,
            s,
          ))
        : (r.boxUV(
            t + 0.08,
            e + 0.12,
            s + y,
            t + 0.2,
            e + 0.84,
            s + E,
            c,
            h,
            t,
            e,
            s,
          ),
          r.boxUV(
            t + 0.8,
            e + 0.12,
            s + y,
            t + 0.92,
            e + 0.84,
            s + E,
            c,
            h,
            t,
            e,
            s,
          ));
    }
  };
  (d(!0),
    d(!1),
    r.boxUV(
      t + 0.04,
      e + 0.84,
      s + 0.04,
      t + 0.96,
      e + 0.98,
      s + 0.18,
      c,
      h,
      t,
      e,
      s,
    ),
    r.boxUV(
      t + 0.04,
      e + 0.84,
      s + 0.82,
      t + 0.96,
      e + 0.98,
      s + 0.96,
      c,
      h,
      t,
      e,
      s,
    ),
    r.boxUV(
      t + 0.04,
      e + 0.84,
      s + 0.18,
      t + 0.18,
      e + 0.98,
      s + 0.82,
      c,
      h,
      t,
      e,
      s,
    ),
    r.boxUV(
      t + 0.82,
      e + 0.84,
      s + 0.18,
      t + 0.96,
      e + 0.98,
      s + 0.82,
      c,
      h,
      t,
      e,
      s,
    ));
  const l = { top: i[0], side: i[1], bottom: i[2] };
  r.boxUV(
    t + a,
    e + 0.08,
    s + a,
    t + 1 - a,
    e + 0.12,
    s + 1 - a,
    l,
    h,
    t,
    e,
    s,
  );
  const p = Math.max(0, Math.min(100, n)) / 100;
  if (p > 0) {
    const m = 0.12 + p * 0.67;
    r.boxUV(t + a, e + 0.1, s + a, t + 1 - a, e + m, s + 1 - a, l, h, t, e, s);
  }
}
function p0(r, t, e, s, n, i) {
  const h = t + 0.5,
    c = s + 0.5,
    o = { top: n, side: n, bottom: n };
  (r.box(h - 0.22, e, c - 0.22, h + 0.22, e + 0.08, c + 0.22, o, i),
    r.box(h - 0.11, e + 0.08, c - 0.11, h + 0.11, e + 0.62, c + 0.11, o, i),
    r.box(h - 0.06, e + 0.62, c - 0.06, h + 0.06, e + 0.92, c + 0.06, o, i),
    r.box(h - 0.025, e + 0.92, c - 0.025, h + 0.025, e + 1, c + 0.025, o, i));
}
function m0(r, t, e, s, n, i, h) {
  const c = Math.max(0, Math.min(kn - 1, n)) / kn,
    o = 0.0625,
    a = 0.5,
    u = t + o + c * (1 - 2 * o),
    d = t + 1 - o,
    l = s + o,
    p = s + 1 - o;
  (r.box(u, e, l, d, e + a, p, { top: i[0], side: i[1], bottom: i[2] }, h),
    c > 0 &&
      r.rawQuad(
        [
          [u - 0.001, e + a, l],
          [u - 0.001, e, l],
          [u - 0.001, e + a, p],
          [u - 0.001, e, p],
        ],
        [-1, 0, 0],
        i[2],
        h,
      ));
  const m = [
    [0.3, 0.32],
    [0.62, 0.5],
    [0.36, 0.7],
  ];
  for (const [_, y] of m) {
    const E = u + (d - u) * _,
      M = l + (p - l) * y;
    if (E < u + 0.06 || E > d - 0.06) continue;
    (r.box(
      E - 0.035,
      e + a,
      M - 0.035,
      E + 0.035,
      e + a + 0.18,
      M + 0.035,
      { top: i[0], side: i[0], bottom: i[0] },
      h,
    ),
      (r.animMode = 1));
    const g = e + a + 0.19,
      L = T[f.FIRE].tex[1];
    (r.rawQuad(
      [
        [E - 0.05, g + 0.12, M],
        [E - 0.05, g, M],
        [E + 0.05, g + 0.12, M],
        [E + 0.05, g, M],
      ],
      [0, 0, 1],
      L,
      15,
      !0,
    ),
      r.rawQuad(
        [
          [E, g + 0.12, M - 0.05],
          [E, g, M - 0.05],
          [E, g + 0.12, M + 0.05],
          [E, g, M + 0.05],
        ],
        [1, 0, 0],
        L,
        15,
        !0,
      ),
      (r.animMode = 0));
  }
}
function Oi(r, t, e, s, n, i, h = 0.8) {
  const c = h,
    o = 0.15,
    a = 0.85;
  (r.rawQuad(
    [
      [t + o, e + c, s + o],
      [t + o, e, s + o],
      [t + a, e + c, s + a],
      [t + a, e, s + a],
    ],
    [0, 0, 1],
    n,
    i,
    !0,
  ),
    r.rawQuad(
      [
        [t + o, e + c, s + a],
        [t + o, e, s + a],
        [t + a, e + c, s + o],
        [t + a, e, s + o],
      ],
      [0, 0, 1],
      n,
      i,
      !0,
    ));
}
function _0(r, t, e, s, n, i, h, c) {
  const o = ar(n),
    a = o <= 0 ? 0.34 : o === 1 ? 0.62 : 0.92,
    u = o <= 0 ? 0.16 : o === 1 ? 0.27 : 0.36,
    d = o <= 0 ? 3 : o === 1 ? 4 : 6,
    l = t + 0.5,
    p = s + 0.5;
  r.animMode = 3;
  for (let _ = 0; _ < d; _++) {
    const y = _ * 2.399963 + ((t * 7 + s * 13) % 16) * 0.3927,
      E = Math.cos(y) * u,
      M = Math.sin(y) * u,
      g = e + a * (0.78 + 0.2 * Math.sin(y * 2 + 1)),
      L = Math.sin(y * 3) * 0.075,
      I = Math.cos(y * 2) * 0.075;
    r.rawQuad(
      [
        [l - E * 0.65 + L, g, p - M * 0.65 + I],
        [l - E, e, p - M],
        [l + E * 0.65 + L, g, p + M * 0.65 + I],
        [l + E, e, p + M],
      ],
      [0, 0, 1],
      i,
      c,
      !0,
    );
  }
  const m = u * 0.82;
  (r.rawQuad(
    [
      [l - m, e + a * 0.45, p - m],
      [l + m * 0.5, e + a * 0.92, p - m * 0.4],
      [l - m, e + a * 0.48, p + m],
      [l + m * 0.5, e + a * 0.88, p + m * 0.4],
    ],
    [0, 1, 0],
    h,
    c,
    !0,
  ),
    (r.animMode = 0));
}
function E0(r, t, e, s, n, i, h, c) {
  const o = (y, E, M, g, L, I, A, x, S) => {
    r.rawQuad(
      [
        [e + L, s + S, n + I],
        [e + y, s, n + E],
        [e + A, s + S, n + x],
        [e + M, s, n + g],
      ],
      [0, 0, 1],
      h,
      c,
      !0,
    );
  };
  if (i !== f.SEAWEED && i !== f.SEAGRASS) {
    for (const E of [0, Math.PI / 3, (2 * Math.PI) / 3]) {
      const M = Math.cos(E) * 0.42,
        g = Math.sin(E) * 0.42;
      o(
        0.5 - M,
        0.5 - g,
        0.5 + M,
        0.5 + g,
        0.5 - M,
        0.5 - g,
        0.5 + M,
        0.5 + g,
        0.92,
      );
    }
    return;
  }
  const a = i === f.SEAWEED,
    u = a ? 1 : 0.62,
    d = a && t.getBlock(e, s + 1, n) !== f.SEAWEED,
    l = 0.13,
    p = 0.87,
    m = d ? 0.36 : l,
    _ = d ? 0.64 : p;
  ((r.animMode = bi),
    o(l, l, p, p, m, m, _, _, u),
    o(l, p, p, l, m, _, _, m, u),
    (r.animMode = 0));
}
function Ct(r, t, e, s, n, i, h, c) {
  var p;
  const o = T[h],
    a = $t(0),
    u = t.getBlock(s, n + 1, i),
    d = t.getMeta(s, n + 1, i),
    l = u === h || c(u, d) ? 0 : 1 - a;
  for (const m of gs) {
    const _ = s + m.dir[0],
      y = n + m.dir[1],
      E = i + m.dir[2],
      M = y < 0 || y >= Y ? 0 : t.getBlock(_, y, E),
      g = y < 0 || y >= Y ? 0 : t.getMeta(_, y, E);
    if (
      y >= 0 &&
      y < Y &&
      !(((p = t.loaded) == null ? void 0 : p.call(t, _, E)) ?? !0)
    )
      continue;
    const L = M === h || c(M, g);
    if (m.dir[1] === 0 && L) {
      const x = M === h ? $t(g) : a;
      if (a > x + 0.001) {
        const S = Math.max(e.at(_, y, E), o.light) / 15,
          R = m.corners.map((O) => [
            s + O.pos[0],
            n + (O.pos[1] === 1 ? a : x),
            i + O.pos[2],
          ]);
        r.rawQuad(R, m.dir, o.tex[1], S, !1, !0);
      }
      continue;
    }
    if (L || !(M === 0 || !T[M].solid || T[M].liquid)) continue;
    const I = o.tex[m.dir[1] === 1 ? 0 : m.dir[1] === -1 ? 2 : 1],
      A = Math.max(e.at(_, y, E), o.light) / 15;
    r.quad(m, s, n, i, I, [3, 3, 3, 3], !0, A, m.dir[1] === 0 ? l : 1 - a);
  }
}
function A0(r, t, e, s, n, i) {
  const h = e + 0.025;
  r.rawQuadUV(
    [
      [t, h, s + 1],
      [t + 1, h, s + 1],
      [t, h, s],
      [t + 1, h, s],
    ],
    [0, 1, 0],
    n,
    [
      [
        [0, 1],
        [1, 1],
        [0, 0],
        [1, 0],
      ],
      [
        [1, 1],
        [1, 0],
        [0, 1],
        [0, 0],
      ],
      [
        [1, 0],
        [0, 0],
        [1, 1],
        [0, 1],
      ],
      [
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1],
      ],
    ][(t * 7 + s * 13) & 3],
    i,
  );
}
function y0(r, t, e, s, n, i) {
  (r.rawQuad(
    [
      [t + 0.02, e + 1, s + 0.02],
      [t + 0.02, e, s + 0.02],
      [t + 0.98, e + 1, s + 0.98],
      [t + 0.98, e, s + 0.98],
    ],
    [0, 0, 1],
    n,
    i,
    !0,
  ),
    r.rawQuad(
      [
        [t + 0.02, e + 1, s + 0.98],
        [t + 0.02, e, s + 0.98],
        [t + 0.98, e + 1, s + 0.02],
        [t + 0.98, e, s + 0.02],
      ],
      [0, 0, 1],
      n,
      i,
      !0,
    ));
}
function x0(r, t, e, s, n, i) {
  const o = e + 1,
    a = e + 0.12;
  (r.rawQuad(
    [
      [t + 0.12, o, s + 0.12],
      [t + 0.12, a, s + 0.12],
      [t + 0.88, o, s + 0.88],
      [t + 0.88, a, s + 0.88],
    ],
    [0, 0, 1],
    n,
    i,
    !0,
  ),
    r.rawQuad(
      [
        [t + 0.12, o, s + 0.88],
        [t + 0.12, a, s + 0.88],
        [t + 0.88, o, s + 0.12],
        [t + 0.88, a, s + 0.12],
      ],
      [0, 0, 1],
      n,
      i,
      !0,
    ));
}
function M0(r, t, e, s, n, i) {
  const h = T[f.COBBLE].tex[0],
    c = [];
  for (const [o, a, u, d] of [
    [0.38, 0.4, 0.42, 0.075],
    [0.62, 0.36, 0.3, 0.07],
    [0.5, 0.64, 0.22, 0.08],
  ]) {
    const l = t + o,
      p = s + a;
    (r.box(
      l - d,
      e,
      p - d,
      l + d,
      e + u,
      p + d,
      { top: n, side: n, bottom: n },
      i,
    ),
      r.box(
        l - 0.012,
        e + u,
        p - 0.012,
        l + 0.012,
        e + u + 0.05,
        p + 0.012,
        { top: h, side: h, bottom: h },
        i,
      ),
      c.push([l, e + u + 0.02, p]));
  }
  r.animMode = 1;
  for (const [o, a, u] of c)
    (r.rawQuad(
      [
        [o - 0.065, a + 0.2, u],
        [o - 0.065, a, u],
        [o + 0.065, a + 0.2, u],
        [o + 0.065, a, u],
      ],
      [0, 0, 1],
      n,
      1,
      !0,
    ),
      r.rawQuad(
        [
          [o, a + 0.2, u - 0.065],
          [o, a, u - 0.065],
          [o, a + 0.2, u + 0.065],
          [o, a, u + 0.065],
        ],
        [1, 0, 0],
        n,
        1,
        !0,
      ));
  r.animMode = 0;
}
function S0(r, t, e, s, n) {
  ((r.animMode = mn), Oi(r, t, e, s, ln, n, 0.46), (r.animMode = 0));
  const i = 0.22 + ((t * 5 + s * 3) & 3) * 0.015,
    h = t + 0.5 + ((t * 7 + s) & 1 ? 0.06 : -0.06),
    c = s + 0.5;
  r.box(
    h - i,
    e,
    c - i,
    h + i,
    e + i * 1.7,
    c + i,
    { top: Is, side: Yt, bottom: Yt },
    n,
    !0,
  );
  const o = T[f.LOG].tex[1];
  r.box(
    h - 0.03,
    e + i * 1.7,
    c - 0.03,
    h + 0.03,
    e + i * 1.7 + 0.08,
    c + 0.03,
    { top: o, side: o, bottom: o },
    n,
  );
}
function g0(r, t, e, s, n, i) {
  r.animMode = 1;
  const c = (o, a, u, d) => {
    r.rawQuad([o, a, u, d], [0, 0, 1], n, i, !0);
  };
  (c(
    [t + 0.04, e + 0.96, s + 0.04],
    [t + 0.04, e, s + 0.04],
    [t + 0.96, e + 0.96, s + 0.96],
    [t + 0.96, e, s + 0.96],
  ),
    c(
      [t + 0.04, e + 0.96, s + 0.96],
      [t + 0.04, e, s + 0.96],
      [t + 0.96, e + 0.96, s + 0.04],
      [t + 0.96, e, s + 0.04],
    ),
    c(
      [t + 0.22, e + 0.76, s + 0.5],
      [t + 0.22, e + 0.02, s + 0.5],
      [t + 0.78, e + 0.76, s + 0.5],
      [t + 0.78, e + 0.02, s + 0.5],
    ),
    c(
      [t + 0.5, e + 0.76, s + 0.22],
      [t + 0.5, e + 0.02, s + 0.22],
      [t + 0.5, e + 0.76, s + 0.78],
      [t + 0.5, e + 0.02, s + 0.78],
    ),
    (r.animMode = 0));
}
function R0(r, t, e, s, n, i, h) {
  const c = n & 7;
  let o = 0,
    a = 0,
    u = 0;
  c === 1
    ? (o = -0.28)
    : c === 2
      ? (o = 0.28)
      : c === 3
        ? (u = -0.28)
        : c === 4
          ? (u = 0.28)
          : c === 5 && (a = 0.14);
  const d = t + 0.5 + o,
    l = s + 0.5 + u,
    p = e + 0.13 + a,
    m = e + 0.7 + a;
  (r.box(
    d - 0.2,
    p,
    l - 0.2,
    d + 0.2,
    m,
    l + 0.2,
    { top: i, side: i, bottom: i },
    h,
  ),
    r.box(
      d - 0.27,
      p - 0.05,
      l - 0.27,
      d + 0.27,
      p + 0.04,
      l + 0.27,
      { top: i, side: i, bottom: i },
      h,
    ),
    r.box(
      d - 0.27,
      m - 0.04,
      l - 0.27,
      d + 0.27,
      m + 0.05,
      l + 0.27,
      { top: i, side: i, bottom: i },
      h,
    ));
  const _ = c === 5 ? e + 1 : m + 0.22,
    y = { top: i, side: i, bottom: i };
  if (
    (r.box(d - 0.035, m, l - 0.035, d + 0.035, _, l + 0.035, y, h),
    c >= 1 && c <= 4)
  ) {
    const E = _ - 0.07,
      M = _;
    if (c === 1 || c === 2) {
      const g = c === 1 ? t : t + 1,
        L = c === 1 ? 1 : -1;
      (r.box(
        Math.min(g, g + L * 0.06),
        m - 0.08,
        l - 0.1,
        Math.max(g, g + L * 0.06),
        M + 0.08,
        l + 0.1,
        y,
        h,
      ),
        r.box(
          Math.min(g, d),
          E,
          l - 0.035,
          Math.max(g, d) + (c === 2 ? 0 : 0.035),
          M,
          l + 0.035,
          y,
          h,
        ));
    } else {
      const g = c === 3 ? s : s + 1,
        L = c === 3 ? 1 : -1;
      (r.box(
        d - 0.1,
        m - 0.08,
        Math.min(g, g + L * 0.06),
        d + 0.1,
        M + 0.08,
        Math.max(g, g + L * 0.06),
        y,
        h,
      ),
        r.box(
          d - 0.035,
          E,
          Math.min(g, l),
          d + 0.035,
          M,
          Math.max(g, l) + (c === 4 ? 0 : 0.035),
          y,
          h,
        ));
    }
  }
}
function T0(r, t, e, s, n, i, h) {
  for (const c of Lr((o, a, u) => t.getBlock(o, a, u), e, s, n))
    for (const o of Ir(c))
      r.rawQuad(
        o.points.map((a) => [e + a[0], s + a[1], n + a[2]]),
        o.normal,
        i,
        h,
      );
}
function b0(r, t, e, s, n, i, h) {
  const c = { top: i, side: i, bottom: i },
    { post1: o, post2: a, rail1: u, rail2: d, railsY: l } = Er;
  r.boxUV(e + o, s, n + o, e + a, s + 1, n + a, c, h, e, s, n);
  const p = (m, _) => {
    if (li(t.getBlock(e + m, s, n + _)))
      for (const [y, E] of l)
        if (m !== 0) {
          const M = m < 0 ? e : e + a,
            g = m < 0 ? e + o : e + 1;
          r.boxUV(M, s + y, n + u, g, s + E, n + d, c, h, e, s, n);
        } else {
          const M = _ < 0 ? n : n + a,
            g = _ < 0 ? n + o : n + 1;
          r.boxUV(e + u, s + y, M, e + d, s + E, g, c, h, e, s, n);
        }
  };
  (p(-1, 0), p(1, 0), p(0, -1), p(0, 1));
}
function O0(r, t, e, s, n, i, h) {
  const c = { top: i, side: i, bottom: i },
    o = (d, l, p, m, _, y) =>
      r.boxUV(e + d, s + l, n + p, e + m, s + _, n + y, c, h, e, s, n),
    a = 1 / 16;
  (o(6.5 * a, 0, 6.5 * a, 9.5 * a, 0.92, 9.5 * a),
    o(6 * a, 0.92, 6 * a, 10 * a, 0.98, 10 * a),
    o(7 * a, 0.98, 7 * a, 9 * a, 1.06, 9 * a),
    o(7.5 * a, 1.06, 7.5 * a, 8.5 * a, 1.13, 8.5 * a));
  const u = (d, l) => {
    (o(d - 0.5 * a, 0.05, l - 0.5 * a, d + 0.5 * a, 0.86, l + 0.5 * a),
      o(d - 0.9 * a, 0.86, l - 0.9 * a, d + 0.9 * a, 0.9, l + 0.9 * a),
      o(d - 0.45 * a, 0.9, l - 0.45 * a, d + 0.45 * a, 0.98, l + 0.45 * a));
  };
  for (const [d, l] of [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]) {
    if (!li(t.getBlock(e + d, s, n + l))) continue;
    for (const [m, _] of [
      [0.14, 0.19],
      [0.74, 0.79],
    ])
      d !== 0
        ? o(d < 0 ? 0 : 9.5 * a, m, 7.5 * a, d < 0 ? 6.5 * a : 1, _, 8.5 * a)
        : o(7.5 * a, m, l < 0 ? 0 : 9.5 * a, 8.5 * a, _, l < 0 ? 6.5 * a : 1);
    const p = d !== 0 ? (m) => u(m, 0.5) : (m) => u(0.5, m);
    d < 0 || l < 0 ? p(0.25) : (p(0.75), p(1));
  }
}
function L0(r, t, e, s, n, i, h) {
  const c = (d, l, p = 0.013) => {
      const m = new C(l[0] - d[0], l[1] - d[1], l[2] - d[2]).normalize(),
        _ = new C(0, Math.abs(m.y) < 0.9 ? 1 : 0, Math.abs(m.y) < 0.9 ? 0 : 1)
          .cross(m)
          .normalize(),
        y = m.clone().cross(_).normalize(),
        E = (M, g) => [
          M[0] + p * (_.x * Math.cos(g) + y.x * Math.sin(g)),
          M[1] + p * (_.y * Math.cos(g) + y.y * Math.sin(g)),
          M[2] + p * (_.z * Math.cos(g) + y.z * Math.sin(g)),
        ];
      for (let M = 0; M < 4; M++) {
        const g = (M * Math.PI) / 2,
          L = g + Math.PI / 2,
          I = _.clone()
            .multiplyScalar(Math.cos(g + Math.PI / 4))
            .addScaledVector(y, Math.sin(g + Math.PI / 4));
        r.rawQuad([E(d, g), E(d, L), E(l, g), E(l, L)], [I.x, I.y, I.z], i, h);
      }
    },
    o =
      t.getBlock(e - 1, s, n) === f.BARBED_WIRE ||
      t.getBlock(e + 1, s, n) === f.BARBED_WIRE,
    a =
      t.getBlock(e, s, n - 1) === f.BARBED_WIRE ||
      t.getBlock(e, s, n + 1) === f.BARBED_WIRE,
    u = (d) => {
      const l = (p) => {
        const m = p * Math.PI * 4,
          _ = 0.34;
        return d
          ? [e + p, s + 0.46 + Math.sin(m) * _, n + 0.5 + Math.cos(m) * _]
          : [e + 0.5 + Math.cos(m) * _, s + 0.46 + Math.sin(m) * _, n + p];
      };
      for (let p = 0; p < 48; p++) {
        const m = l(p / 48),
          _ = l((p + 1) / 48);
        (c(m, _),
          p % 6 === 3 &&
            (c(
              [m[0] - 0.065, m[1] - 0.055, m[2] - 0.025],
              [m[0] + 0.065, m[1] + 0.055, m[2] + 0.025],
              0.01,
            ),
            c(
              [m[0] - 0.025, m[1] - 0.055, m[2] + 0.065],
              [m[0] + 0.025, m[1] + 0.055, m[2] - 0.065],
              0.01,
            )));
      }
      for (const p of [0.22, 0.65])
        c(
          d ? [e, s + p, n + 0.5] : [e + 0.5, s + p, n],
          d ? [e + 1, s + p, n + 0.5] : [e + 0.5, s + p, n + 1],
          0.012,
        );
    };
  (u(o || !a), o && a && u(!1));
}
const I0 = (r) => (r === f.METAL_DOOR ? Se : r === f.ARMORED_DOOR ? ge : 35);
function C0(r, t, e, s, n, i, h) {
  if (i & lr) return;
  const [c, , o, a, , u] = fr(i),
    d = I0(n);
  for (const l of [0, 1]) {
    const p = { top: d + l, side: d + l, bottom: d + l };
    r.box(t + c, e + l, s + o, t + a, e + l + 1, s + u, p, h);
  }
}
function N0(r, t, e, s, n, i, h, c) {
  const o = t + 0.5,
    a = s + 0.5,
    u = 0.44,
    d = 0.31,
    l = 16,
    p = !n,
    m = p ? e + 0.9 : e + 1,
    _ = p ? 0.93 : 1,
    y =
      (Math.imul(t, 73856093) ^
        Math.imul(s, 19349663) ^
        Math.imul(e, 83492791)) >>>
      0,
    E = (L, I, A) => {
      const x = (L * Math.PI * 2) / l;
      return [o + Math.cos(x) * I, A, a + Math.sin(x) * I];
    },
    M = (L) => (L % 2 ? d : u);
  for (let L = 0; L < l; L++) {
    const I = (L + 1) % l,
      A = M(L),
      x = M(I),
      S = E(L, A, e),
      R = E(L, A * _, m),
      O = E(I, x, e),
      k = E(I, x * _, m),
      W = Math.hypot(O[2] - S[2], O[0] - S[0]),
      H = [(O[2] - S[2]) / W, 0, (S[0] - O[0]) / W],
      X =
        L % 2
          ? [
              [1, 1],
              [1, 0],
              [0, 1],
              [0, 0],
            ]
          : [
              [0, 1],
              [0, 0],
              [1, 1],
              [1, 0],
            ];
    if ((r.rawQuadUV([k, O, R, S], H, h[1], X, c), p)) {
      const B = [o, e + 1, a],
        N = E(L, A * _ * 0.55, e + 0.975),
        F = E(I, x * _ * 0.55, e + 0.975),
        v = Math.atan2((R[2] + k[2]) / 2 - a, (R[0] + k[0]) / 2 - o),
        Z = [Math.cos(v) * 0.45, 0.89, Math.sin(v) * 0.45];
      (r.rawQuad([F, k, N, R], Z, h[1], c),
        r.rawQuad([B, F, N, N], [0, 1, 0], h[0], c));
    }
    i ||
      r.rawQuad(
        [[o, e, a], E(L, A, e), E(I, x, e), E(I, x, e)],
        [0, -1, 0],
        h[2],
        c,
      );
  }
  const g = 0.075;
  for (let L = 0; L < l; L += 2) {
    const I = (L * Math.PI * 2) / l,
      A = Math.cos(I),
      x = Math.sin(I),
      S = -x,
      R = A;
    for (let O = 0; O < 3; O++) {
      const k = e + 0.16 + O * 0.31 + ((L >> 1) % 2) * 0.15;
      if (k > m - 0.08) continue;
      const W = u * (p ? 1 - ((1 - _) * (k - e)) / (m - e) : 1) + 0.02,
        H = o + A * W,
        X = a + x * W;
      (r.rawQuad(
        [
          [H - S * g, k + g, X - R * g],
          [H - S * g, k - g, X - R * g],
          [H + S * g, k + g, X + R * g],
          [H + S * g, k - g, X + R * g],
        ],
        [A, 0, x],
        Pn,
        c,
        !0,
      ),
        r.rawQuad(
          [
            [H - A * g, k + g, X - x * g],
            [H - A * g, k - g, X - x * g],
            [H + A * g, k + g, X + x * g],
            [H + A * g, k - g, X + x * g],
          ],
          [S, 0, R],
          Pn,
          c,
          !0,
        ));
    }
  }
  if (p && y % 3 === 0) {
    const I = e + 0.99,
      A = ((y >> 3) % 8) * 0.4,
      x = Math.cos(A) * 0.16,
      S = Math.sin(A) * 0.16;
    (r.rawQuad(
      [
        [o - x, I + 0.16 * 1.1, a - S],
        [o - x, I, a - S],
        [o + x, I + 0.16 * 1.1, a + S],
        [o + x, I, a + S],
      ],
      [-S / 0.16, 0, x / 0.16],
      Ws,
      c,
      !0,
    ),
      r.rawQuad(
        [
          [o + S, I + 0.16 * 1.1, a - x],
          [o + S, I, a - x],
          [o - S, I + 0.16 * 1.1, a + x],
          [o - S, I, a + x],
        ],
        [x / 0.16, 0, S / 0.16],
        Ws,
        c,
        !0,
      ),
      r.rawQuadUV(
        [
          [o - 0.16, I + 0.05, a - 0.16],
          [o - 0.16, I + 0.05, a + 0.16],
          [o + 0.16, I + 0.05, a - 0.16],
          [o + 0.16, I + 0.05, a + 0.16],
        ],
        [0, 1, 0],
        Ws,
        [
          [0, 1],
          [0, 0],
          [1, 1],
          [1, 0],
        ],
        c,
        !0,
      ));
  }
}
function B0(r, t, e, s, n = !1, i = !0, h = 1337, c = !1) {
  var _, y, E;
  const o = new Re(),
    a = new Re(),
    u = new Re(),
    d = t * D,
    l = e * D,
    p = [3, 3, 3, 3],
    m = (M) => (re(M) && !i ? !0 : Ei(M));
  for (let M = 0; M < D; M++)
    for (let g = 0; g < D; g++) {
      const L = gi(h, d + M, l + g),
        I = [1, 1, 1];
      for (let A = 0; A < Y; A++) {
        const x = r.getBlock(d + M, A, l + g);
        if (x === 0) continue;
        const S = T[x];
        o.tint =
          x === f.GRASS ||
          x === f.SAVANNA_GRASS ||
          x === f.TALL_GRASS ||
          x === f.DESERT_GRASS
            ? L
            : I;
        const R = d + M,
          O = l + g,
          k = s.skyAt ? s.skyAt(R, A, O) / 15 : 1;
        o.sky = a.sky = u.sky = k;
        const W =
          S.liquid || x === f.LAMP || x === f.FURNACE || x === f.JACK_O_LANTERN
            ? r.getMeta(R, A, O)
            : 0;
        if (x === f.CACTUS) {
          const B =
            Math.max(
              s.at(R, A, O),
              s.at(R + 1, A, O),
              s.at(R - 1, A, O),
              s.at(R, A, O + 1),
              s.at(R, A, O - 1),
              s.at(R, A + 1, O),
            ) / 15;
          (s.skyAt &&
            (o.sky =
              Math.max(
                s.skyAt(R + 1, A, O),
                s.skyAt(R - 1, A, O),
                s.skyAt(R, A, O + 1),
                s.skyAt(R, A, O - 1),
                s.skyAt(R, A + 1, O),
              ) / 15),
            N0(
              o,
              R,
              A,
              O,
              r.getBlock(R, A + 1, O) === f.CACTUS,
              r.getBlock(R, A - 1, O) === f.CACTUS,
              S.tex,
              B,
            ));
          continue;
        }
        if (S.shape !== "cube" || x === f.PISTON || x === f.SPISTON) {
          const B = r.getMeta(R, A, O),
            N =
              Math.max(
                s.at(R, A, O),
                s.at(R, A + 1, O),
                s.at(R + 1, A, O),
                s.at(R - 1, A, O),
                s.at(R, A, O + 1),
                s.at(R, A, O - 1),
                _i(x, B),
              ) / 15;
          (ve(x) || x === f.PISTON || x === f.SPISTON) &&
            s.skyAt &&
            (o.sky =
              Math.max(
                s.skyAt(R + 1, A, O),
                s.skyAt(R - 1, A, O),
                s.skyAt(R, A, O + 1),
                s.skyAt(R, A, O - 1),
              ) / 15);
          const F = gt(x, B),
            v = Qt(x, B);
          if (x === f.SIGN) {
            Rr(B).forEach(([j, q, $, ht, it, dt], ft) => {
              ft === 0
                ? o.box(
                    R + j,
                    A + q,
                    O + $,
                    R + ht,
                    A + it,
                    O + dt,
                    { top: Xs, side: Xs, bottom: Xs },
                    N,
                    !0,
                  )
                : o.boxUV(
                    R + j,
                    A + q,
                    O + $,
                    R + ht,
                    A + it,
                    O + dt,
                    { top: 10, side: 10, bottom: 10 },
                    N,
                    R,
                    A,
                    O,
                  );
            });
            continue;
          }
          const Z = Or(
            x,
            B,
            (j, q, $) => r.getBlock(j, q, $),
            (j, q, $) => r.getMeta(j, q, $),
            R,
            A,
            O,
          );
          if (Z) {
            for (const {
              box: [j, q, $, ht, it, dt],
              tile: ft,
            } of Z)
              o.boxUV(
                R + j,
                A + q,
                O + $,
                R + ht,
                A + it,
                O + dt,
                { top: ft, side: ft, bottom: ft },
                N,
                R,
                A,
                O,
              );
            continue;
          }
          if (S.shape === "stair") {
            (h0(o, R, A, O, B, S.tex[1], N),
              F && Ct(a, r, s, R, A, O, f.WATER, gt),
              v && Ct(u, r, s, R, A, O, f.LAVA, Qt));
            continue;
          }
          if (S.shape === "snow") {
            c0(o, R, A, O, B, S.tex[1], N);
            continue;
          }
          if (S.shape === "plant") {
            (x === f.FIRE
              ? g0(o, R, A, O, S.tex[1], N)
              : gt(x)
                ? E0(o, r, R, A, O, x, S.tex[1], N)
                : x === f.PUMPKIN_CROP
                  ? S0(o, R, A, O, N)
                  : (n0.has(x) || (o.animMode = mn),
                    Oi(
                      o,
                      R,
                      A,
                      O,
                      S.tex[1],
                      N,
                      x === f.WHEAT_SPROUT
                        ? 0.34
                        : x === f.WHEAT_YOUNG
                          ? 0.58
                          : x === f.FLY_AGARIC || x === f.MUSHROOM
                            ? 0.52
                            : x === f.PUMPKIN_SPROUT
                              ? 0.36
                              : x === f.PUMPKIN_YOUNG
                                ? 0.5
                                : 0.8,
                    ),
                    (o.animMode = 0)),
              F && Ct(a, r, s, R, A, O, f.WATER, gt),
              v && Ct(u, r, s, R, A, O, f.LAVA, Qt));
            continue;
          }
          if (S.shape === "bush") {
            _0(o, R, A, O, x, S.tex[1], S.tex[0], N);
            continue;
          }
          if (S.shape === "litter") {
            A0(o, R, A, O, S.tex[1], N);
            continue;
          }
          if (S.shape === "web") {
            y0(o, R, A, O, S.tex[1], N);
            continue;
          }
          if (S.shape === "hanging") {
            x0(o, R, A, O, S.tex[1], N);
            continue;
          }
          if (S.shape === "candle") {
            M0(o, R, A, O, As, N);
            continue;
          }
          if (S.shape === "furniture") {
            const j = pn(x)
              ? Ti(
                  x,
                  Xr((q, $, ht) => r.getBlock(q, $, ht), R, A, O, B),
                  c ? "all" : "body",
                )
              : Zr(x, B);
            for (const q of j) {
              const [$, ht, it, dt, ft, jt] = q.box,
                rt = q.tile ?? (q.fabric ? 21 : 10);
              if (q.top !== void 0 || q.bottom !== void 0) {
                o.boxUV(
                  R + $,
                  A + ht,
                  O + it,
                  R + dt,
                  A + ft,
                  O + jt,
                  { top: q.top ?? rt, side: rt, bottom: q.bottom ?? rt },
                  N,
                  R,
                  A,
                  O,
                );
                continue;
              }
              if (rt === Oe) {
                o.box(
                  R + $,
                  A + ht,
                  O + it,
                  R + dt,
                  A + ft,
                  O + jt,
                  { top: rt, side: rt, bottom: rt },
                  Math.max(N, 0.8),
                  !0,
                );
                continue;
              }
              if (q.fit) {
                o.box(
                  R + $,
                  A + ht,
                  O + it,
                  R + dt,
                  A + ft,
                  O + jt,
                  { top: rt, side: rt, bottom: rt },
                  N,
                  !0,
                );
                continue;
              }
              o.boxUV(
                R + $,
                A + ht,
                O + it,
                R + dt,
                A + ft,
                O + jt,
                { top: rt, side: rt, bottom: rt },
                N,
                R,
                A,
                O,
              );
            }
            continue;
          }
          if (S.shape === "cake") {
            m0(o, R, A, O, B, S.tex, N);
            continue;
          }
          if (S.shape === "campfire") {
            d0(o, R, A, O, S.tex[1], N);
            continue;
          }
          if (S.shape === "composter") {
            f0(o, R, A, O, B, S.tex, N);
            continue;
          }
          if (S.shape === "lantern") {
            R0(o, R, A, O, B, S.tex[1], N);
            continue;
          }
          if (S.shape === "chain") {
            T0(o, r, R, A, O, S.tex[1], N);
            continue;
          }
          if (S.shape === "fence") {
            (x === f.IRON_FENCE
              ? O0(o, r, R, A, O, S.tex[1], N)
              : b0(o, r, R, A, O, S.tex[1], N),
              F && Ct(a, r, s, R, A, O, f.WATER, gt),
              v && Ct(u, r, s, R, A, O, f.LAVA, Qt));
            continue;
          }
          if (S.shape === "gate") {
            (F && Ct(a, r, s, R, A, O, f.WATER, gt),
              v && Ct(u, r, s, R, A, O, f.LAVA, Qt));
            continue;
          }
          if (S.shape === "wire") {
            L0(o, r, R, A, O, S.tex[1], N);
            continue;
          }
          switch (x) {
            case f.LIGHTNING_ROD:
              p0(o, R, A, O, S.tex[1], N);
              break;
            case f.TORCH:
              vn(o, R, A, O, B, S.tex[1], N);
              break;
            case f.RTORCH:
              vn(o, R, A, O, B, B & Tt ? 28 : 27, N);
              break;
            case f.LADDER:
              r0(o, R, A, O, B, S.tex[1], N);
              break;
            case f.BED:
              a0(o, R, A, O, B, N);
              break;
            case f.DOOR:
            case f.METAL_DOOR:
            case f.ARMORED_DOOR:
              c && C0(o, R, A, O, x, B, N);
              break;
          }
          if (ve(x)) continue;
          (F && Ct(a, r, s, R, A, O, f.WATER, gt),
            v && Ct(u, r, s, R, A, O, f.LAVA, Qt));
          continue;
        }
        re(x) && i && (o.animMode = 3);
        const H = S.liquid ? 1 - $t(W) : 0;
        let X = H;
        if (S.liquid) {
          const B = r.getBlock(R, A + 1, O),
            N = r.getMeta(R, A + 1, O);
          (B === x || (x === f.WATER ? gt(B, N) : Qt(B, N))) && (X = 0);
        }
        for (const B of gs) {
          const N = R + B.dir[0],
            F = A + B.dir[1],
            v = O + B.dir[2];
          if (F < 0) continue;
          const Z = F >= Y ? 0 : r.getBlock(N, F, v),
            j =
              F >= 0 &&
              F < Y &&
              (((_ = r.loaded) == null ? void 0 : _.call(r, N, v)) ?? !0);
          if (
            (S.liquid && !j) ||
            (!j && B.dir[1] === 0 && (y = r.sealed) != null && y.call(r, N, v))
          )
            continue;
          if (S.liquid && Z === x && B.dir[1] === 0) {
            const pt = $t(W),
              de = $t(r.getMeta(N, F, v));
            if (pt > de + 0.001) {
              const Ne = Math.max(s.at(N, F, v), S.light) / 15,
                Dt = B.corners.map((bt) => [
                  R + bt.pos[0],
                  A + (bt.pos[1] === 1 ? pt : de),
                  O + bt.pos[2],
                ]);
              (x === f.LAVA ? u : a).rawQuad(
                Dt,
                B.dir,
                S.tex[1],
                Ne,
                !1,
                x === f.WATER,
              );
            }
            continue;
          }
          let q;
          if (S.liquid) {
            const pt =
              x === f.WATER
                ? gt(Z, r.getMeta(N, F, v))
                : Qt(Z, r.getMeta(N, F, v));
            q = Z !== x && !pt && (Z === 0 || !T[Z].solid || T[Z].liquid);
          } else
            q =
              !m(Z) &&
              !(S.transparent && Z === x && !(i && re(x))) &&
              !(S.liquid && (E = T[Z]) != null && E.liquid);
          if (!q) continue;
          let $ = S.tex[B.dir[1] === 1 ? 0 : B.dir[1] === -1 ? 2 : 1];
          (x === f.LAMP && W & Tt && ($ = 31),
            x === f.FURNACE
              ? ($ = Ji(W, ...B.dir))
              : x === f.JACK_O_LANTERN
                ? ($ = or(W, ...B.dir))
                : x === f.LED_SCREEN && ($ = cr(W, ...B.dir)));
          let ht = p,
            it;
          if (!S.liquid) {
            ((ht = []), n && (it = []));
            const pt = B.dir[0] !== 0 ? 0 : B.dir[1] !== 0 ? 1 : 2,
              [de, Ne] = i0[pt],
              Dt = R + B.dir[0],
              bt = A + B.dir[1],
              te = O + B.dir[2];
            for (let Cs = 0; Cs < 4; Cs++) {
              const Ns = B.corners[Cs],
                _n = Ns.pos[0],
                En = Ns.pos[1],
                An = Ns.pos[2],
                Xe = de === 0 ? (_n === 1 ? 1 : -1) : 0,
                Ze = de === 1 ? (En === 1 ? 1 : -1) : 0,
                $e = de === 2 ? (An === 1 ? 1 : -1) : 0,
                Je = Ne === 0 ? (_n === 1 ? 1 : -1) : 0,
                je = Ne === 1 ? (En === 1 ? 1 : -1) : 0,
                ts = Ne === 2 ? (An === 1 ? 1 : -1) : 0,
                yn = m(r.getBlock(Dt + Xe, bt + Ze, te + $e)),
                xn = m(r.getBlock(Dt + Je, bt + je, te + ts)),
                Mn = m(r.getBlock(Dt + Xe + Je, bt + Ze + je, te + $e + ts)),
                Sn = yn ? 1 : 0,
                gn = xn ? 1 : 0,
                Li = Mn ? 1 : 0;
              if ((ht.push(Sn && gn ? 0 : 3 - (Sn + gn + Li)), it)) {
                let es = s.at(Dt, bt, te),
                  ss = 1;
                (yn || ((es += s.at(Dt + Xe, bt + Ze, te + $e)), ss++),
                  xn || ((es += s.at(Dt + Je, bt + je, te + ts)), ss++),
                  Mn ||
                    ((es += s.at(Dt + Xe + Je, bt + Ze + je, te + $e + ts)),
                    ss++),
                  it.push(Math.max(es / ss / 15, S.light / 15)));
              }
            }
          }
          const dt = ve(Z),
            ft = (pt) =>
              Math.max(
                pt(N + 1, F, v),
                pt(N - 1, F, v),
                pt(N, F, v + 1),
                pt(N, F, v - 1),
              ),
            jt =
              Math.max(
                dt ? ft(s.at) : j ? s.at(N, F, v) : s.at(R, A, O),
                S.light,
              ) / 15;
          dt && it && it.fill(jt);
          const rt = S.liquid ? (x === f.LAVA ? u : a) : o;
          if (
            ((rt.sky = s.skyAt
              ? (dt ? ft(s.skyAt) : j ? s.skyAt(N, F, v) : 15) / 15
              : 1),
            rt.quad(
              B,
              R,
              A,
              O,
              $,
              ht,
              S.liquid,
              jt,
              S.liquid && B.dir[1] === 0 ? X : H,
              it,
            ),
            i && re(x) && !re(Z))
          ) {
            const pt = e0.get(B);
            ((o.sky = k),
              o.quad(
                pt,
                N,
                F,
                v,
                $,
                s0,
                !1,
                Math.max(s.at(R, A, O), S.light) / 15,
                0,
              ));
          }
        }
        re(x) && i && (o.animMode = 0);
      }
    }
  return { opaque: o.build(), water: a.build(), lava: u.build() };
}
function P0(r, t, e, s) {
  const n = new Re(),
    i = new Re(),
    h = new Re(),
    c = t * D,
    o = e * D,
    a = new Float32Array(324),
    u = new Uint16Array(324),
    d = (l, p) => (l + 1) * 18 + p + 1;
  for (let l = -1; l <= 16; l++)
    for (let p = -1; p <= 16; p++) {
      const m = d(l, p);
      a[m] = -1;
      for (let _ = Y - 1; _ >= 0; _--) {
        const y = r.getBlock(c + l, _, o + p),
          E = T[y];
        if (!(!E || (!E.solid && !E.liquid))) {
          ((u[m] = y),
            (a[m] = _ + (E.liquid ? $t(r.getMeta(c + l, _, o + p)) : 1)));
          break;
        }
      }
    }
  for (let l = 0; l < 16; l++)
    for (let p = 0; p < 16; p++) {
      const m = d(l, p),
        _ = a[m],
        y = u[m],
        E = T[y];
      if (_ < 0 || !E) continue;
      const M = c + l,
        g = o + p,
        L = E.liquid ? (y === f.LAVA ? h : i) : n,
        I = E.light / 15;
      ((L.tint =
        y === f.GRASS || y === f.SAVANNA_GRASS ? gi(s, M, g) : [1, 1, 1]),
        L.rawQuad(
          [
            [M, _, g + 1],
            [M + 1, _, g + 1],
            [M, _, g],
            [M + 1, _, g],
          ],
          [0, 1, 0],
          E.tex[0],
          I,
        ));
      for (const [A, x] of [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ]) {
        const S = a[d(l + A, p + x)],
          R = S < 0 ? _ - 4 : S;
        if (R >= _) continue;
        const O =
          A < 0
            ? [
                [M, _, g],
                [M, R, g],
                [M, _, g + 1],
                [M, R, g + 1],
              ]
            : A > 0
              ? [
                  [M + 1, _, g + 1],
                  [M + 1, R, g + 1],
                  [M + 1, _, g],
                  [M + 1, R, g],
                ]
              : x < 0
                ? [
                    [M + 1, _, g],
                    [M + 1, R, g],
                    [M, _, g],
                    [M, R, g],
                  ]
                : [
                    [M, _, g + 1],
                    [M, R, g + 1],
                    [M + 1, _, g + 1],
                    [M + 1, R, g + 1],
                  ];
        L.rawQuad(O, [A, 0, x], E.tex[1], I);
      }
    }
  return { opaque: n.build(), water: i.build(), lava: h.build() };
}
class k0 {
  constructor(t) {
    K(this, "neighbors", new Array(9).fill(null));
    K(this, "ox", 0);
    K(this, "oz", 0);
    K(this, "sealedMask", 0);
    this.chunks = t;
  }
  setup(t, e, s = 0) {
    ((this.ox = t * D), (this.oz = e * D), (this.sealedMask = s));
    for (let n = -1; n <= 1; n++)
      for (let i = -1; i <= 1; i++)
        this.neighbors[(n + 1) * 3 + (i + 1)] =
          this.chunks.get(We(t + n, e + i)) ?? null;
  }
  getBlock(t, e, s) {
    if (e < 0 || e >= Y) return 0;
    let n = t - this.ox,
      i = s - this.oz,
      h = 4;
    (n < 0 ? ((h -= 3), (n += D)) : n >= D && ((h += 3), (n -= D)),
      i < 0 ? ((h -= 1), (i += D)) : i >= D && ((h += 1), (i -= D)));
    const c = this.neighbors[h];
    return c ? c.data[be(n, e, i)] : 0;
  }
  getMeta(t, e, s) {
    if (e < 0 || e >= Y) return 0;
    let n = t - this.ox,
      i = s - this.oz,
      h = 4;
    (n < 0 ? ((h -= 3), (n += D)) : n >= D && ((h += 3), (n -= D)),
      i < 0 ? ((h -= 1), (i += D)) : i >= D && ((h += 1), (i -= D)));
    const c = this.neighbors[h];
    return c ? c.meta[be(n, e, i)] : 0;
  }
  loaded(t, e) {
    let s = t - this.ox,
      n = e - this.oz,
      i = 4;
    return (
      s < 0 ? (i -= 3) : s >= D && (i += 3),
      n < 0 ? (i -= 1) : n >= D && (i += 1),
      this.neighbors[i] !== null
    );
  }
  sealed(t, e) {
    let s = t - this.ox,
      n = e - this.oz,
      i = 4;
    return (
      s < 0 ? (i -= 3) : s >= D && (i += 3),
      n < 0 ? (i -= 1) : n >= D && (i += 1),
      this.neighbors[i] === null && ((this.sealedMask >> i) & 1) === 1
    );
  }
}
function U0(r) {
  const t = [],
    e = [],
    s = (i) => r.data[i] === f.WATER || gt(r.data[i], r.meta[i]);
  for (let i = 0; i < D; i++)
    for (let h = 0; h < D; h++)
      for (let c = Y - 1; c >= 0; c--) {
        const o = be(i, c, h);
        if (!s(o)) continue;
        const a = c + (r.data[o] === f.WATER ? $t(r.meta[o]) : $t(0));
        let u = c;
        for (; u > 0 && s(be(i, u - 1, h));) u--;
        const d = r.cx * D + i,
          l = r.cz * D + h;
        t.push(
          d,
          a,
          l,
          d,
          a,
          l + 1,
          d + 1,
          a,
          l + 1,
          d,
          a,
          l,
          d + 1,
          a,
          l + 1,
          d + 1,
          a,
          l,
        );
        for (let p = 0; p < 6; p++) e.push(u);
        c = u;
      }
  if (!t.length) return null;
  const n = new Os();
  return (
    n.setAttribute("position", new Nt(t, 3)),
    n.setAttribute("waterFloor", new Nt(e, 1)),
    n
  );
}
const D0 = 32;
class w0 {
  constructor() {
    K(this, "chunks", new Map());
  }
  resolve(t) {
    if (!t.cacheKeys) return t;
    for (const s of t.chunks) this.chunks.set(We(s.cx, s.cz), s);
    const e = t.cacheKeys.map((s) => {
      const n = this.chunks.get(s);
      if (!n) throw Error("Missing mesh snapshot " + s);
      return (this.chunks.delete(s), this.chunks.set(s, n), n);
    });
    for (; this.chunks.size > D0;)
      this.chunks.delete(this.chunks.keys().next().value);
    return { ...t, chunks: e };
  }
}
function Qn(r, t) {
  if (!r || r.hasAttribute("azureWater")) return;
  const e = r.getAttribute("position"),
    s = new Float32Array(e.count),
    n = new Map();
  for (let i = 0; i < e.count; i++) {
    const h = e.getX(i),
      c = e.getZ(i),
      o = `${h},${c}`;
    let a = n.get(o);
    (a === void 0 && ((a = Ur(t, h, c)), n.set(o, a)), (s[i] = a));
  }
  r.setAttribute("azureWater", new ce(s, 1));
}
function ie(r) {
  var s;
  if (!r) return null;
  const t = {};
  for (const [n, i] of Object.entries(r.attributes))
    t[n] = { array: i.array, itemSize: i.itemSize, normalized: i.normalized };
  r.computeBoundingSphere();
  const e = r.boundingSphere;
  return {
    attributes: t,
    index: ((s = r.index) == null ? void 0 : s.array) ?? null,
    sphere: { center: e.center.toArray(), radius: e.radius },
  };
}
function z0(r, t = new Mi()) {
  const e = new Map(r.chunks.map((a) => [We(a.cx, a.cz), a])),
    s = new k0(e);
  s.setup(r.cx, r.cz, r.sealed ?? 0);
  const n = ie(U0(e.get(We(r.cx, r.cz))));
  if (r.surface) {
    const a = P0(s, r.cx, r.cz, r.seed);
    return (
      Qn(a.water, r.seed),
      {
        opaque: ie(a.opaque),
        water: ie(a.water),
        waterColumns: n,
        lava: ie(a.lava),
        light: new Uint8Array(),
        sky: new Uint8Array(),
      }
    );
  }
  const i = t.compute(r.cx, r.cz, (a, u) => e.get(We(a, u))),
    h = new Uint8Array(D * D * Y),
    c = new Uint8Array(h.length);
  for (let a = 0; a < D; a++)
    for (let u = 0; u < D; u++)
      for (let d = 0; d < Y; d++) {
        const l = be(a, d, u),
          p = r.cx * D + a,
          m = r.cz * D + u;
        ((h[l] = i.at(p, d, m)), (c[l] = i.skyAt(p, d, m)));
      }
  const o = B0(s, r.cx, r.cz, i, r.smooth, r.fancy, r.seed);
  return (
    Qn(o.water, r.seed),
    {
      opaque: ie(o.opaque),
      water: ie(o.water),
      waterColumns: n,
      lava: ie(o.lava),
      light: h,
      sky: c,
    }
  );
}
function F0(r) {
  const t = new Set([r.light.buffer, r.sky.buffer]);
  for (const e of [r.opaque, r.water, r.waterColumns, r.lava])
    if (e) {
      for (const s of Object.values(e.attributes)) t.add(s.array.buffer);
      e.index && t.add(e.index.buffer);
    }
  return [...t];
}
const G0 = new Mi(),
  W0 = new w0();
self.onmessage = (r) => {
  const t = z0(W0.resolve(r.data), G0);
  self.postMessage(t, F0(t));
};
