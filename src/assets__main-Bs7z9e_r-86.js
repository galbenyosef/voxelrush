// assets__main-Bs7z9e_r 86 — x5d322a
// Lines 28430-28756 of readable/assets__main-Bs7z9e_r.pretty.js (statement-aligned).
const xh = new ye(),
  Rr = new l1(),
  ID = new ye(0x0, 0x0, 0x0),
  kD = new ye(0x1, 0x1, 0x1),
  zc = new ye(),
  vm = new ye(),
  yi = new ye(),
  p_ = new l1(),
  E_ = new cn();
class DE {
  constructor(
    _0x43c85e = 0x0,
    _0x171489 = 0x0,
    _0x151c28 = 0x0,
    _0x892e77 = DE[_0x5d322a(0x194b)],
  ) {
    const _0x536a2a = _0x5d322a;
    ((this[_0x536a2a(0x1062)] = !0x0),
      (this["_x"] = _0x43c85e),
      (this["_y"] = _0x171489),
      (this["_z"] = _0x151c28),
      (this[_0x536a2a(0x1ed1)] = _0x892e77));
  }
  get ["x"]() {
    return this["_x"];
  }
  set ["x"](_0xc93ec1) {
    const _0x3a6044 = _0x5d322a;
    ((this["_x"] = _0xc93ec1), this[_0x3a6044(0x40f)]());
  }
  get ["y"]() {
    return this["_y"];
  }
  set ["y"](_0x4fd0f2) {
    const _0x2a5b71 = _0x5d322a;
    ((this["_y"] = _0x4fd0f2), this[_0x2a5b71(0x40f)]());
  }
  get ["z"]() {
    return this["_z"];
  }
  set ["z"](_0x56b996) {
    const _0x57a091 = _0x5d322a;
    ((this["_z"] = _0x56b996), this[_0x57a091(0x40f)]());
  }
  get ["order"]() {
    const _0x543cfb = _0x5d322a;
    return this[_0x543cfb(0x1ed1)];
  }
  set ["order"](_0x4cf862) {
    ((this["_order"] = _0x4cf862), this["_onChangeCallback"]());
  }
  [_0x5d322a(0x124)](
    _0x1dd449,
    _0x4772ac,
    _0x4e2b6a,
    _0x449461 = this[_0x5d322a(0x1ed1)],
  ) {
    const _0x5911d7 = _0x5d322a;
    return (
      (this["_x"] = _0x1dd449),
      (this["_y"] = _0x4772ac),
      (this["_z"] = _0x4e2b6a),
      (this[_0x5911d7(0x1ed1)] = _0x449461),
      this[_0x5911d7(0x40f)](),
      this
    );
  }
  ["clone"]() {
    const _0x50c3a2 = _0x5d322a;
    return new this["constructor"](
      this["_x"],
      this["_y"],
      this["_z"],
      this[_0x50c3a2(0x1ed1)],
    );
  }
  ["copy"](_0x4bf960) {
    const _0x1ddcb2 = _0x5d322a;
    return (
      (this["_x"] = _0x4bf960["_x"]),
      (this["_y"] = _0x4bf960["_y"]),
      (this["_z"] = _0x4bf960["_z"]),
      (this[_0x1ddcb2(0x1ed1)] = _0x4bf960[_0x1ddcb2(0x1ed1)]),
      this[_0x1ddcb2(0x40f)](),
      this
    );
  }
  [_0x5d322a(0x13d9)](_0x5c3974, _0xc2f604 = this["_order"], _0x1cbdd9 = !0x0) {
    const _0x52ba5b = _0x5d322a,
      _0x442d5b = _0x5c3974[_0x52ba5b(0x1585)],
      _0x530933 = _0x442d5b[0x0],
      _0x9d4cf6 = _0x442d5b[0x4],
      _0x5418f9 = _0x442d5b[0x8],
      _0x2ab2ef = _0x442d5b[0x1],
      _0xdb4b1 = _0x442d5b[0x5],
      _0x35d829 = _0x442d5b[0x9],
      _0x3f1e8b = _0x442d5b[0x2],
      _0x1d0b52 = _0x442d5b[0x6],
      _0x52886c = _0x442d5b[0xa];
    switch (_0xc2f604) {
      case _0x52ba5b(0x374):
        ((this["_y"] = Math[_0x52ba5b(0x1768)](bc(_0x5418f9, -0x1, 0x1))),
          Math[_0x52ba5b(0x7a3)](_0x5418f9) < 0.9999999
            ? ((this["_x"] = Math[_0x52ba5b(0xeef)](-_0x35d829, _0x52886c)),
              (this["_z"] = Math[_0x52ba5b(0xeef)](-_0x9d4cf6, _0x530933)))
            : ((this["_x"] = Math[_0x52ba5b(0xeef)](_0x1d0b52, _0xdb4b1)),
              (this["_z"] = 0x0)));
        break;
      case _0x52ba5b(0x38c):
        ((this["_x"] = Math[_0x52ba5b(0x1768)](-bc(_0x35d829, -0x1, 0x1))),
          Math[_0x52ba5b(0x7a3)](_0x35d829) < 0.9999999
            ? ((this["_y"] = Math[_0x52ba5b(0xeef)](_0x5418f9, _0x52886c)),
              (this["_z"] = Math[_0x52ba5b(0xeef)](_0x2ab2ef, _0xdb4b1)))
            : ((this["_y"] = Math[_0x52ba5b(0xeef)](-_0x3f1e8b, _0x530933)),
              (this["_z"] = 0x0)));
        break;
      case _0x52ba5b(0x4a2):
        ((this["_x"] = Math[_0x52ba5b(0x1768)](bc(_0x1d0b52, -0x1, 0x1))),
          Math["abs"](_0x1d0b52) < 0.9999999
            ? ((this["_y"] = Math[_0x52ba5b(0xeef)](-_0x3f1e8b, _0x52886c)),
              (this["_z"] = Math["atan2"](-_0x9d4cf6, _0xdb4b1)))
            : ((this["_y"] = 0x0),
              (this["_z"] = Math["atan2"](_0x2ab2ef, _0x530933))));
        break;
      case "ZYX":
        ((this["_y"] = Math[_0x52ba5b(0x1768)](-bc(_0x3f1e8b, -0x1, 0x1))),
          Math["abs"](_0x3f1e8b) < 0.9999999
            ? ((this["_x"] = Math[_0x52ba5b(0xeef)](_0x1d0b52, _0x52886c)),
              (this["_z"] = Math[_0x52ba5b(0xeef)](_0x2ab2ef, _0x530933)))
            : ((this["_x"] = 0x0),
              (this["_z"] = Math[_0x52ba5b(0xeef)](-_0x9d4cf6, _0xdb4b1))));
        break;
      case _0x52ba5b(0x851):
        ((this["_z"] = Math[_0x52ba5b(0x1768)](bc(_0x2ab2ef, -0x1, 0x1))),
          Math[_0x52ba5b(0x7a3)](_0x2ab2ef) < 0.9999999
            ? ((this["_x"] = Math["atan2"](-_0x35d829, _0xdb4b1)),
              (this["_y"] = Math["atan2"](-_0x3f1e8b, _0x530933)))
            : ((this["_x"] = 0x0),
              (this["_y"] = Math["atan2"](_0x5418f9, _0x52886c))));
        break;
      case _0x52ba5b(0x2011):
        ((this["_z"] = Math[_0x52ba5b(0x1768)](-bc(_0x9d4cf6, -0x1, 0x1))),
          Math[_0x52ba5b(0x7a3)](_0x9d4cf6) < 0.9999999
            ? ((this["_x"] = Math[_0x52ba5b(0xeef)](_0x1d0b52, _0xdb4b1)),
              (this["_y"] = Math[_0x52ba5b(0xeef)](_0x5418f9, _0x530933)))
            : ((this["_x"] = Math[_0x52ba5b(0xeef)](-_0x35d829, _0x52886c)),
              (this["_y"] = 0x0)));
        break;
      default:
        console[_0x52ba5b(0xc8d)](_0x52ba5b(0x145) + _0xc2f604);
    }
    return (
      (this[_0x52ba5b(0x1ed1)] = _0xc2f604),
      _0x1cbdd9 === !0x0 && this[_0x52ba5b(0x40f)](),
      this
    );
  }
  [_0x5d322a(0xacc)](_0x441b43, _0x6675ca, _0x1977b5) {
    return (
      p_["makeRotationFromQuaternion"](_0x441b43),
      this["setFromRotationMatrix"](p_, _0x6675ca, _0x1977b5)
    );
  }
  [_0x5d322a(0x17a)](_0x4d5b57, _0x3186e4 = this["_order"]) {
    const _0x15f4ac = _0x5d322a;
    return this[_0x15f4ac(0x124)](
      _0x4d5b57["x"],
      _0x4d5b57["y"],
      _0x4d5b57["z"],
      _0x3186e4,
    );
  }
  [_0x5d322a(0x1abb)](_0xe57185) {
    const _0x4c727b = _0x5d322a;
    return (E_[_0x4c727b(0x1f6e)](this), this[_0x4c727b(0xacc)](E_, _0xe57185));
  }
  [_0x5d322a(0x3cd)](_0x45a734) {
    const _0x4a2b78 = _0x5d322a;
    return (
      _0x45a734["_x"] === this["_x"] &&
      _0x45a734["_y"] === this["_y"] &&
      _0x45a734["_z"] === this["_z"] &&
      _0x45a734[_0x4a2b78(0x1ed1)] === this[_0x4a2b78(0x1ed1)]
    );
  }
  [_0x5d322a(0x952)](_0x3181af) {
    const _0x4a5e04 = _0x5d322a;
    return (
      (this["_x"] = _0x3181af[0x0]),
      (this["_y"] = _0x3181af[0x1]),
      (this["_z"] = _0x3181af[0x2]),
      _0x3181af[0x3] !== void 0x0 && (this[_0x4a5e04(0x1ed1)] = _0x3181af[0x3]),
      this[_0x4a5e04(0x40f)](),
      this
    );
  }
  ["toArray"](_0x1301e1 = [], _0x5d50dc = 0x0) {
    const _0x9129e = _0x5d322a;
    return (
      (_0x1301e1[_0x5d50dc] = this["_x"]),
      (_0x1301e1[_0x5d50dc + 0x1] = this["_y"]),
      (_0x1301e1[_0x5d50dc + 0x2] = this["_z"]),
      (_0x1301e1[_0x5d50dc + 0x3] = this[_0x9129e(0x1ed1)]),
      _0x1301e1
    );
  }
  ["_onChange"](_0x4c98bc) {
    const _0x50541a = _0x5d322a;
    return ((this[_0x50541a(0x40f)] = _0x4c98bc), this);
  }
  ["_onChangeCallback"]() {}
  *[Symbol[_0x5d322a(0x14cf)]]() {
    (yield this["_x"],
      yield this["_y"],
      yield this["_z"],
      yield this["_order"]);
  }
}
((DE[_0x5d322a(0x194b)] = _0x5d322a(0x374)),
  typeof __THREE_DEVTOOLS__ < "u" &&
    __THREE_DEVTOOLS__[_0x5d322a(0x14a7)](
      new CustomEvent(_0x5d322a(0x12b3), { detail: { revision: $N } }),
    ),
  typeof window < "u" &&
    (window["__THREE__"]
      ? console[_0x5d322a(0xc8d)](_0x5d322a(0x919))
      : (window[_0x5d322a(0x17a2)] = $N)));
const zD = {
    [I[_0x5d322a(0x16c0)]]: new ye(1.25, 1.25, 1.65),
    [I["PLANE"]]: new ye(1.5, 1.25, 1.65),
    [I[_0x5d322a(0xb63)]]: new ye(1.6, 1.4, 1.6),
    [I["HIMARS"]]: new ye(1.12, 1.12, 1.3),
    [I[_0x5d322a(0x9f3)]]: new ye(1.12, 1.12, 1.3),
    [I[_0x5d322a(0x626)]]: new ye(1.12, 1.2, 1.4),
    [I[_0x5d322a(0x1bd0)]]: new ye(1.15, 1.15, 1.4),
    [I[_0x5d322a(0x15b0)]]: new ye(1.2, 1.2, 0x2),
  },
  LD = new ye(0x1, 0x1, 0x1),
  Hf = (_0x264b73) => zD[_0x264b73] ?? LD,
  CD = new Dr(new ye(-0x6, -0x1, -0x15), new ye(0x6, 3.4, 0x15)),
  vD = new Dr(new ye(3.6, 3.4, 0.9), new ye(0x6, 7.8, 7.1)),
  Dt = (_0x4d70c2, _0x13c6b5, _0x42b827, _0x2e1a32, _0xfdb968, _0x1af6d4) =>
    new Dr(
      new ye(_0x4d70c2, _0x13c6b5, _0x42b827),
      new ye(_0x2e1a32, _0xfdb968, _0x1af6d4),
    ),
  su = {
    [I[_0x5d322a(0xc54)]]: [
      Dt(-0.7, 0.75, -6.5, 0.7, 2.15, 6.2),
      Dt(-0.6, 1.9, -3.9, 0.6, 2.7, -0.9),
      Dt(-2.8, 1.55, 0x4, 2.8, 1.85, 5.8),
      Dt(-1.1, 1.8, 3.8, 1.1, 4.2, 5.8),
      Dt(-0x2, 1.35, -1.8, 0x2, 1.6, 1.5),
      Dt(-3.8, 1.35, 0.1, -0x2, 1.6, 1.95),
      Dt(0x2, 1.35, 0.1, 3.8, 1.6, 1.95),
      Dt(-5.2, 1.35, 1.2, -3.8, 1.6, 2.3),
      Dt(3.8, 1.35, 1.2, 5.2, 1.6, 2.3),
    ],
    [I["TANK"]]: [
      Dt(-1.28, 0x0, -1.9, 1.28, 1.2, 1.9),
      Dt(-0.78, 1.2, -0.72, 0.78, 1.83, 0.92),
    ],
    [I[_0x5d322a(0x152d)]]: [
      Dt(-0.5, 0.48, -2.15, 0.5, 1.5, 2.25),
      Dt(-3.55, 1.05, -1.2, 3.55, 1.32, 0.5),
    ],
    [I[_0x5d322a(0x377)]]: [Dt(-0.46, 0x0, -0.46, 0.46, 0.55, 0.46)],
    [I[_0x5d322a(0x1bd0)]]: [Dt(-1.28, -0.42, -3.25, 1.28, 1.04, 3.25)],
    [I[_0x5d322a(0x7b7)]]: [CD, vD],
    [I[_0x5d322a(0xb63)]]: [
      Dt(-0.72, 0.78, -1.2, 0.72, 2.02, 1.2),
      Dt(-0.53, 1.225, -1.95, 0.53, 2.175, -1.15),
      Dt(-0.45, 1.05, 1.2, 0.45, 1.9, 1.6),
      Dt(-0.21, 1.75, 0x1, 0.21, 2.25, 4.2),
      Dt(-0.05, 1.85, 3.75, 0.05, 2.95, 4.45),
      Dt(-0.75, 2.05, 3.425, 0.75, 2.15, 3.975),
      Dt(-0.96, 0.15, -1.5, -0.84, 0.65, 1.5),
      Dt(0.84, 0.15, -1.5, 0.96, 0.65, 1.5),
      Dt(-1.36, 0.99, -0.85, -0.94, 1.41, 0.45),
      Dt(0.94, 0.99, -0.85, 1.36, 1.41, 0.45),
      Dt(-0.55, 1.85, -0.1, 0.55, 2.45, 1.3),
    ],
    [I[_0x5d322a(0xe12)]]: [
      Dt(-1.28, 0x0, -2.72, 1.28, 1.28, 2.72),
      Dt(-0.95, 1.28, -1.15, 0.95, 2.25, 1.7),
    ],
    [I[_0x5d322a(0x9f3)]]: [
      Dt(-1.28, 0x0, -2.75, 1.28, 1.28, 2.75),
      Dt(-0x1, 1.28, -1.2, 0x1, 2.5, 1.9),
    ],
    [I["MORTAR"]]: [
      Dt(-0.85, 0x0, -0.85, 0.85, 0.4, 0.85),
      Dt(-0.38, 0.4, -0.8, 0.38, 2.35, 0.4),
    ],
    [I[_0x5d322a(0x6bd)]]: [Dt(-0.72, 0x0, -0.72, 0.72, 1.72, 0.72)],
    [I[_0x5d322a(0x626)]]: [
      Dt(-1.3, 0x0, -2.62, 1.3, 1.26, 2.62),
      Dt(-0.68, 1.26, -0.7, 0.68, 1.95, 0.82),
    ],
    [I["SUBMARINE"]]: [
      Dt(-2.15, -1.35, -5.6, 2.15, 1.35, 5.6),
      Dt(-1.05, 1.2, -0.35, 1.05, 2.6, 1.5),
    ],
    [I[_0x5d322a(0x11fc)]]: [Dt(-2.2, 0x0, -2.2, 2.2, 11.8, 2.2)],
  },
  Qn = {
    ...su,
    [I[_0x5d322a(0x152d)]]: [
      ...su[I[_0x5d322a(0x152d)]],
      Dt(-3.55, 1.05, -1.2, 3.55, 1.32, 0.5),
      Dt(-1.3, 1.2, 1.55, 1.3, 1.48, 2.45),
    ],
    [I["HELI"]]: [
      ...su[I["HELI"]],
      Dt(-3.1, 2.42, -3.1, 3.1, 2.55, 3.1),
      Dt(0.255, 1.75, 3.45, 0.305, 3.05, 4.75),
    ],
  },
  y_ = new Set();
for (const e of [su, Qn])
  for (const [t, n] of Object[_0x5d322a(0x1127)](e))
    for (const o of n)
      y_["has"](o) ||
        (y_["add"](o),
        o["min"][_0x5d322a(0x268)](Hf(+t)),
        o[_0x5d322a(0x1267)][_0x5d322a(0x268)](Hf(+t)));
const A_ = new Map();
