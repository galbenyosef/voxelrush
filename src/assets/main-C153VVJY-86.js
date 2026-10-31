// main-C153VVJY 86 — x44a014
// Lines 28774-29109 of readable/assets/main-C153VVJY.pretty.js (statement-aligned).
const Bu = new et(),
  ea = new Q2(),
  qH = new et(0x0, 0x0, 0x0),
  jH = new et(0x1, 0x1, 0x1),
  xc = new et(),
  Fp = new et(),
  Wi = new et(),
  I5 = new Q2(),
  k5 = new nn();
class tg {
  constructor(
    _0x2d7e26 = 0x0,
    _0x4d2ed7 = 0x0,
    _0x3eae92 = 0x0,
    _0x2aa8d2 = tg[_0x44a014(0x1137)],
  ) {
    const _0x3fd972 = _0x44a014;
    ((this[_0x3fd972(0x17a2)] = !0x0),
      (this["_x"] = _0x2d7e26),
      (this["_y"] = _0x4d2ed7),
      (this["_z"] = _0x3eae92),
      (this["_order"] = _0x2aa8d2));
  }
  get ["x"]() {
    return this["_x"];
  }
  set ["x"](_0x1df56c) {
    ((this["_x"] = _0x1df56c), this["_onChangeCallback"]());
  }
  get ["y"]() {
    return this["_y"];
  }
  set ["y"](_0x2a8fd1) {
    ((this["_y"] = _0x2a8fd1), this["_onChangeCallback"]());
  }
  get ["z"]() {
    return this["_z"];
  }
  set ["z"](_0x2a0375) {
    ((this["_z"] = _0x2a0375), this["_onChangeCallback"]());
  }
  get ["order"]() {
    const _0x83d1e3 = _0x44a014;
    return this[_0x83d1e3(0x1f9c)];
  }
  set [_0x44a014(0x21f)](_0x64f982) {
    const _0x5a48d8 = _0x44a014;
    ((this["_order"] = _0x64f982), this[_0x5a48d8(0x47f)]());
  }
  ["set"](
    _0x1aa935,
    _0x2a330a,
    _0x2b45f2,
    _0x255be4 = this[_0x44a014(0x1f9c)],
  ) {
    const _0xa94af8 = _0x44a014;
    return (
      (this["_x"] = _0x1aa935),
      (this["_y"] = _0x2a330a),
      (this["_z"] = _0x2b45f2),
      (this["_order"] = _0x255be4),
      this[_0xa94af8(0x47f)](),
      this
    );
  }
  [_0x44a014(0x1512)]() {
    const _0x20053b = _0x44a014;
    return new this[_0x20053b(0xd0d)](
      this["_x"],
      this["_y"],
      this["_z"],
      this[_0x20053b(0x1f9c)],
    );
  }
  ["copy"](_0x438260) {
    const _0x1b5660 = _0x44a014;
    return (
      (this["_x"] = _0x438260["_x"]),
      (this["_y"] = _0x438260["_y"]),
      (this["_z"] = _0x438260["_z"]),
      (this[_0x1b5660(0x1f9c)] = _0x438260[_0x1b5660(0x1f9c)]),
      this[_0x1b5660(0x47f)](),
      this
    );
  }
  [_0x44a014(0x1993)](
    _0x560bc9,
    _0x5047cd = this[_0x44a014(0x1f9c)],
    _0x941b40 = !0x0,
  ) {
    const _0x35ce5b = _0x44a014,
      _0x147055 = _0x560bc9[_0x35ce5b(0x1bb6)],
      _0x4e3def = _0x147055[0x0],
      _0x12b656 = _0x147055[0x4],
      _0x243484 = _0x147055[0x8],
      _0x27ec67 = _0x147055[0x1],
      _0x5bed0d = _0x147055[0x5],
      _0x2fcbfc = _0x147055[0x9],
      _0x89f9bc = _0x147055[0x2],
      _0x173bba = _0x147055[0x6],
      _0x192fc6 = _0x147055[0xa];
    switch (_0x5047cd) {
      case "XYZ":
        ((this["_y"] = Math[_0x35ce5b(0x1175)](zc(_0x243484, -0x1, 0x1))),
          Math[_0x35ce5b(0x1fc4)](_0x243484) < 0.9999999
            ? ((this["_x"] = Math[_0x35ce5b(0x134f)](-_0x2fcbfc, _0x192fc6)),
              (this["_z"] = Math[_0x35ce5b(0x134f)](-_0x12b656, _0x4e3def)))
            : ((this["_x"] = Math["atan2"](_0x173bba, _0x5bed0d)),
              (this["_z"] = 0x0)));
        break;
      case _0x35ce5b(0x2244):
        ((this["_x"] = Math[_0x35ce5b(0x1175)](-zc(_0x2fcbfc, -0x1, 0x1))),
          Math["abs"](_0x2fcbfc) < 0.9999999
            ? ((this["_y"] = Math[_0x35ce5b(0x134f)](_0x243484, _0x192fc6)),
              (this["_z"] = Math[_0x35ce5b(0x134f)](_0x27ec67, _0x5bed0d)))
            : ((this["_y"] = Math[_0x35ce5b(0x134f)](-_0x89f9bc, _0x4e3def)),
              (this["_z"] = 0x0)));
        break;
      case _0x35ce5b(0x19ce):
        ((this["_x"] = Math[_0x35ce5b(0x1175)](zc(_0x173bba, -0x1, 0x1))),
          Math[_0x35ce5b(0x1fc4)](_0x173bba) < 0.9999999
            ? ((this["_y"] = Math[_0x35ce5b(0x134f)](-_0x89f9bc, _0x192fc6)),
              (this["_z"] = Math[_0x35ce5b(0x134f)](-_0x12b656, _0x5bed0d)))
            : ((this["_y"] = 0x0),
              (this["_z"] = Math[_0x35ce5b(0x134f)](_0x27ec67, _0x4e3def))));
        break;
      case _0x35ce5b(0x1fd0):
        ((this["_y"] = Math["asin"](-zc(_0x89f9bc, -0x1, 0x1))),
          Math[_0x35ce5b(0x1fc4)](_0x89f9bc) < 0.9999999
            ? ((this["_x"] = Math[_0x35ce5b(0x134f)](_0x173bba, _0x192fc6)),
              (this["_z"] = Math["atan2"](_0x27ec67, _0x4e3def)))
            : ((this["_x"] = 0x0),
              (this["_z"] = Math[_0x35ce5b(0x134f)](-_0x12b656, _0x5bed0d))));
        break;
      case _0x35ce5b(0x1d3):
        ((this["_z"] = Math[_0x35ce5b(0x1175)](zc(_0x27ec67, -0x1, 0x1))),
          Math[_0x35ce5b(0x1fc4)](_0x27ec67) < 0.9999999
            ? ((this["_x"] = Math[_0x35ce5b(0x134f)](-_0x2fcbfc, _0x5bed0d)),
              (this["_y"] = Math[_0x35ce5b(0x134f)](-_0x89f9bc, _0x4e3def)))
            : ((this["_x"] = 0x0),
              (this["_y"] = Math[_0x35ce5b(0x134f)](_0x243484, _0x192fc6))));
        break;
      case _0x35ce5b(0xf51):
        ((this["_z"] = Math["asin"](-zc(_0x12b656, -0x1, 0x1))),
          Math[_0x35ce5b(0x1fc4)](_0x12b656) < 0.9999999
            ? ((this["_x"] = Math["atan2"](_0x173bba, _0x5bed0d)),
              (this["_y"] = Math[_0x35ce5b(0x134f)](_0x243484, _0x4e3def)))
            : ((this["_x"] = Math["atan2"](-_0x2fcbfc, _0x192fc6)),
              (this["_y"] = 0x0)));
        break;
      default:
        console["warn"](_0x35ce5b(0x2199) + _0x5047cd);
    }
    return (
      (this[_0x35ce5b(0x1f9c)] = _0x5047cd),
      _0x941b40 === !0x0 && this[_0x35ce5b(0x47f)](),
      this
    );
  }
  [_0x44a014(0x221c)](_0x1373b4, _0x1d623f, _0x58fe3f) {
    const _0x233169 = _0x44a014;
    return (
      I5[_0x233169(0x1e39)](_0x1373b4),
      this[_0x233169(0x1993)](I5, _0x1d623f, _0x58fe3f)
    );
  }
  ["setFromVector3"](_0x316147, _0x562f72 = this["_order"]) {
    const _0x582e4d = _0x44a014;
    return this[_0x582e4d(0x1b41)](
      _0x316147["x"],
      _0x316147["y"],
      _0x316147["z"],
      _0x562f72,
    );
  }
  [_0x44a014(0xb70)](_0x33aeaf) {
    const _0x5bc1b5 = _0x44a014;
    return (
      k5[_0x5bc1b5(0x11a4)](this),
      this[_0x5bc1b5(0x221c)](k5, _0x33aeaf)
    );
  }
  [_0x44a014(0x11e5)](_0xf89848) {
    const _0x48c915 = _0x44a014;
    return (
      _0xf89848["_x"] === this["_x"] &&
      _0xf89848["_y"] === this["_y"] &&
      _0xf89848["_z"] === this["_z"] &&
      _0xf89848[_0x48c915(0x1f9c)] === this[_0x48c915(0x1f9c)]
    );
  }
  ["fromArray"](_0x2a1520) {
    const _0xd6bbd3 = _0x44a014;
    return (
      (this["_x"] = _0x2a1520[0x0]),
      (this["_y"] = _0x2a1520[0x1]),
      (this["_z"] = _0x2a1520[0x2]),
      _0x2a1520[0x3] !== void 0x0 && (this[_0xd6bbd3(0x1f9c)] = _0x2a1520[0x3]),
      this[_0xd6bbd3(0x47f)](),
      this
    );
  }
  [_0x44a014(0x20dc)](_0x123750 = [], _0x4cacc0 = 0x0) {
    const _0xc21fc7 = _0x44a014;
    return (
      (_0x123750[_0x4cacc0] = this["_x"]),
      (_0x123750[_0x4cacc0 + 0x1] = this["_y"]),
      (_0x123750[_0x4cacc0 + 0x2] = this["_z"]),
      (_0x123750[_0x4cacc0 + 0x3] = this[_0xc21fc7(0x1f9c)]),
      _0x123750
    );
  }
  [_0x44a014(0x1300)](_0x169aa6) {
    const _0x2800ef = _0x44a014;
    return ((this[_0x2800ef(0x47f)] = _0x169aa6), this);
  }
  [_0x44a014(0x47f)]() {}
  *[Symbol["iterator"]]() {
    const _0x450593 = _0x44a014;
    (yield this["_x"],
      yield this["_y"],
      yield this["_z"],
      yield this[_0x450593(0x1f9c)]);
  }
}
((tg[_0x44a014(0x1137)] = _0x44a014(0xff3)),
  typeof __THREE_DEVTOOLS__ < "u" &&
    __THREE_DEVTOOLS__[_0x44a014(0x210d)](
      new CustomEvent(_0x44a014(0x1e47), { detail: { revision: gk } }),
    ),
  typeof window < "u" &&
    (window[_0x44a014(0xc4e)]
      ? console[_0x44a014(0x2097)](
          "WARNING:\x20Multiple\x20instances\x20of\x20Three.js\x20being\x20imported.",
        )
      : (window[_0x44a014(0xc4e)] = gk)));
const XH = {
    [I["TANK"]]: new et(1.25, 1.25, 1.65),
    [I[_0x44a014(0xa2c)]]: new et(1.5, 1.25, 1.65),
    [I[_0x44a014(0x14c6)]]: new et(1.6, 1.4, 1.6),
    [I[_0x44a014(0x197a)]]: new et(1.12, 1.12, 1.3),
    [I[_0x44a014(0xbc8)]]: new et(1.12, 1.12, 1.3),
    [I[_0x44a014(0xd69)]]: new et(1.12, 1.2, 1.4),
    [I[_0x44a014(0x1144)]]: new et(1.15, 1.15, 1.4),
    [I[_0x44a014(0xdf1)]]: new et(1.2, 1.2, 0x2),
  },
  ZH = new et(0x1, 0x1, 0x1),
  qh = (_0x506afe) => XH[_0x506afe] ?? ZH,
  JH = new Ma(new et(-0x6, -0x1, -0x15), new et(0x6, 3.4, 0x15)),
  QH = new Ma(new et(3.6, 3.4, 0.9), new et(0x6, 7.8, 7.1)),
  Le = (_0x3d394a, _0x1d1a3d, _0x15286f, _0x418e46, _0x28f8f1, _0xcddd92) =>
    new Ma(
      new et(_0x3d394a, _0x1d1a3d, _0x15286f),
      new et(_0x418e46, _0x28f8f1, _0xcddd92),
    ),
  Od = {
    [I[_0x44a014(0x18a9)]]: [
      Le(-0.7, 0.75, -6.5, 0.7, 2.15, 6.2),
      Le(-0.6, 1.9, -3.9, 0.6, 2.7, -0.9),
      Le(-2.8, 1.55, 0x4, 2.8, 1.85, 5.8),
      Le(-1.1, 1.8, 3.8, 1.1, 4.2, 5.8),
      Le(-0x2, 1.35, -1.8, 0x2, 1.6, 1.5),
      Le(-3.8, 1.35, 0.1, -0x2, 1.6, 1.95),
      Le(0x2, 1.35, 0.1, 3.8, 1.6, 1.95),
      Le(-5.2, 1.35, 1.2, -3.8, 1.6, 2.3),
      Le(3.8, 1.35, 1.2, 5.2, 1.6, 2.3),
    ],
    [I["TANK"]]: [
      Le(-1.28, 0x0, -1.9, 1.28, 1.2, 1.9),
      Le(-0.78, 1.2, -0.72, 0.78, 1.83, 0.92),
    ],
    [I[_0x44a014(0xa2c)]]: [
      Le(-0.5, 0.48, -2.15, 0.5, 1.5, 2.25),
      Le(-3.55, 1.05, -1.2, 3.55, 1.32, 0.5),
    ],
    [I[_0x44a014(0x13cf)]]: [Le(-0.46, 0x0, -0.46, 0.46, 0.55, 0.46)],
    [I[_0x44a014(0x1144)]]: [Le(-1.28, -0.42, -3.25, 1.28, 1.04, 3.25)],
    [I[_0x44a014(0x1e09)]]: [JH, QH],
    [I[_0x44a014(0x14c6)]]: [
      Le(-0.72, 0.78, -1.2, 0.72, 2.02, 1.2),
      Le(-0.53, 1.225, -1.95, 0.53, 2.175, -1.15),
      Le(-0.45, 1.05, 1.2, 0.45, 1.9, 1.6),
      Le(-0.21, 1.75, 0x1, 0.21, 2.25, 4.2),
      Le(-0.05, 1.85, 3.75, 0.05, 2.95, 4.45),
      Le(-0.75, 2.05, 3.425, 0.75, 2.15, 3.975),
      Le(-0.96, 0.15, -1.5, -0.84, 0.65, 1.5),
      Le(0.84, 0.15, -1.5, 0.96, 0.65, 1.5),
      Le(-1.36, 0.99, -0.85, -0.94, 1.41, 0.45),
      Le(0.94, 0.99, -0.85, 1.36, 1.41, 0.45),
      Le(-0.55, 1.85, -0.1, 0.55, 2.45, 1.3),
    ],
    [I[_0x44a014(0x197a)]]: [
      Le(-1.28, 0x0, -2.72, 1.28, 1.28, 2.72),
      Le(-0.95, 1.28, -1.15, 0.95, 2.25, 1.7),
    ],
    [I[_0x44a014(0xbc8)]]: [
      Le(-1.28, 0x0, -2.75, 1.28, 1.28, 2.75),
      Le(-0x1, 1.28, -1.2, 0x1, 2.5, 1.9),
    ],
    [I[_0x44a014(0x1309)]]: [
      Le(-0.85, 0x0, -0.85, 0.85, 0.4, 0.85),
      Le(-0.38, 0.4, -0.8, 0.38, 2.35, 0.4),
    ],
    [I[_0x44a014(0x1a70)]]: [Le(-0.72, 0x0, -0.72, 0.72, 1.72, 0.72)],
    [I[_0x44a014(0xd69)]]: [
      Le(-1.3, 0x0, -2.62, 1.3, 1.26, 2.62),
      Le(-0.68, 1.26, -0.7, 0.68, 1.95, 0.82),
    ],
    [I[_0x44a014(0xdf1)]]: [
      Le(-2.15, -1.35, -5.6, 2.15, 1.35, 5.6),
      Le(-1.05, 1.2, -0.35, 1.05, 2.6, 1.5),
    ],
    [I[_0x44a014(0x10a0)]]: [Le(-2.2, 0x0, -2.2, 2.2, 11.8, 2.2)],
  },
  ao = {
    ...Od,
    [I[_0x44a014(0xa2c)]]: [
      ...Od[I["PLANE"]],
      Le(-3.55, 1.05, -1.2, 3.55, 1.32, 0.5),
      Le(-1.3, 1.2, 1.55, 1.3, 1.48, 2.45),
    ],
    [I[_0x44a014(0x14c6)]]: [
      ...Od[I[_0x44a014(0x14c6)]],
      Le(-3.1, 2.42, -3.1, 3.1, 2.55, 3.1),
      Le(0.255, 1.75, 3.45, 0.305, 3.05, 4.75),
    ],
  },
  L5 = new Set();
for (const t of [Od, ao])
  for (const [e, n] of Object["entries"](t))
    for (const o of n)
      L5["has"](o) ||
        (L5[_0x44a014(0x953)](o),
        o[_0x44a014(0x16e0)][_0x44a014(0x1cc9)](qh(+e)),
        o[_0x44a014(0x723)][_0x44a014(0x1cc9)](qh(+e)));
const z5 = new Map();
