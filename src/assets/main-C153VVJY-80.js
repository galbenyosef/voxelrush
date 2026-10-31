// main-C153VVJY 80 — x44a014
// Lines 26030-26694 of readable/assets/main-C153VVJY.pretty.js (statement-aligned).
class et {
  constructor(_0xfd708e = 0x0, _0x14dc07 = 0x0, _0xab827d = 0x0) {
    const _0x3869e4 = _0x44a014;
    ((et["prototype"][_0x3869e4(0x9c1)] = !0x0),
      (this["x"] = _0xfd708e),
      (this["y"] = _0x14dc07),
      (this["z"] = _0xab827d));
  }
  [_0x44a014(0x1b41)](_0x4572ea, _0x3773f5, _0x125f34) {
    return (
      _0x125f34 === void 0x0 && (_0x125f34 = this["z"]),
      (this["x"] = _0x4572ea),
      (this["y"] = _0x3773f5),
      (this["z"] = _0x125f34),
      this
    );
  }
  [_0x44a014(0x1d0c)](_0x547484) {
    return (
      (this["x"] = _0x547484),
      (this["y"] = _0x547484),
      (this["z"] = _0x547484),
      this
    );
  }
  [_0x44a014(0x1753)](_0x13ab6e) {
    return ((this["x"] = _0x13ab6e), this);
  }
  [_0x44a014(0x236)](_0x42b68e) {
    return ((this["y"] = _0x42b68e), this);
  }
  [_0x44a014(0x185b)](_0x195796) {
    return ((this["z"] = _0x195796), this);
  }
  ["setComponent"](_0x4c1eff, _0x1d3fc9) {
    const _0x87a13b = _0x44a014;
    switch (_0x4c1eff) {
      case 0x0:
        this["x"] = _0x1d3fc9;
        break;
      case 0x1:
        this["y"] = _0x1d3fc9;
        break;
      case 0x2:
        this["z"] = _0x1d3fc9;
        break;
      default:
        throw new Error(_0x87a13b(0x6f1) + _0x4c1eff);
    }
    return this;
  }
  [_0x44a014(0xf87)](_0x2d5858) {
    const _0xa66219 = _0x44a014;
    switch (_0x2d5858) {
      case 0x0:
        return this["x"];
      case 0x1:
        return this["y"];
      case 0x2:
        return this["z"];
      default:
        throw new Error(_0xa66219(0x6f1) + _0x2d5858);
    }
  }
  [_0x44a014(0x1512)]() {
    return new this["constructor"](this["x"], this["y"], this["z"]);
  }
  [_0x44a014(0x1bfa)](_0x5d772d) {
    return (
      (this["x"] = _0x5d772d["x"]),
      (this["y"] = _0x5d772d["y"]),
      (this["z"] = _0x5d772d["z"]),
      this
    );
  }
  [_0x44a014(0x953)](_0x55d9fd) {
    return (
      (this["x"] += _0x55d9fd["x"]),
      (this["y"] += _0x55d9fd["y"]),
      (this["z"] += _0x55d9fd["z"]),
      this
    );
  }
  [_0x44a014(0x1c99)](_0x3e7489) {
    return (
      (this["x"] += _0x3e7489),
      (this["y"] += _0x3e7489),
      (this["z"] += _0x3e7489),
      this
    );
  }
  ["addVectors"](_0x414afd, _0x4034f6) {
    return (
      (this["x"] = _0x414afd["x"] + _0x4034f6["x"]),
      (this["y"] = _0x414afd["y"] + _0x4034f6["y"]),
      (this["z"] = _0x414afd["z"] + _0x4034f6["z"]),
      this
    );
  }
  ["addScaledVector"](_0x34d9b2, _0x13542e) {
    return (
      (this["x"] += _0x34d9b2["x"] * _0x13542e),
      (this["y"] += _0x34d9b2["y"] * _0x13542e),
      (this["z"] += _0x34d9b2["z"] * _0x13542e),
      this
    );
  }
  [_0x44a014(0xbcf)](_0x309aec) {
    return (
      (this["x"] -= _0x309aec["x"]),
      (this["y"] -= _0x309aec["y"]),
      (this["z"] -= _0x309aec["z"]),
      this
    );
  }
  [_0x44a014(0x510)](_0x157a78) {
    return (
      (this["x"] -= _0x157a78),
      (this["y"] -= _0x157a78),
      (this["z"] -= _0x157a78),
      this
    );
  }
  [_0x44a014(0x997)](_0x239878, _0x2c82a6) {
    return (
      (this["x"] = _0x239878["x"] - _0x2c82a6["x"]),
      (this["y"] = _0x239878["y"] - _0x2c82a6["y"]),
      (this["z"] = _0x239878["z"] - _0x2c82a6["z"]),
      this
    );
  }
  [_0x44a014(0x1cc9)](_0x45761a) {
    return (
      (this["x"] *= _0x45761a["x"]),
      (this["y"] *= _0x45761a["y"]),
      (this["z"] *= _0x45761a["z"]),
      this
    );
  }
  [_0x44a014(0x7d5)](_0x1b96ae) {
    return (
      (this["x"] *= _0x1b96ae),
      (this["y"] *= _0x1b96ae),
      (this["z"] *= _0x1b96ae),
      this
    );
  }
  ["multiplyVectors"](_0x3f5319, _0x2d8c07) {
    return (
      (this["x"] = _0x3f5319["x"] * _0x2d8c07["x"]),
      (this["y"] = _0x3f5319["y"] * _0x2d8c07["y"]),
      (this["z"] = _0x3f5319["z"] * _0x2d8c07["z"]),
      this
    );
  }
  ["applyEuler"](_0x4ffc76) {
    const _0x456320 = _0x44a014;
    return this[_0x456320(0x25b)](N5[_0x456320(0x11a4)](_0x4ffc76));
  }
  [_0x44a014(0x1f7a)](_0x301fde, _0x5f0169) {
    const _0x58e2aa = _0x44a014;
    return this["applyQuaternion"](N5[_0x58e2aa(0x9ed)](_0x301fde, _0x5f0169));
  }
  ["applyMatrix3"](_0x72e194) {
    const _0x49d14e = _0x44a014,
      _0x2b2df8 = this["x"],
      _0x1fd133 = this["y"],
      _0x15267c = this["z"],
      _0x10ec98 = _0x72e194[_0x49d14e(0x1bb6)];
    return (
      (this["x"] =
        _0x10ec98[0x0] * _0x2b2df8 +
        _0x10ec98[0x3] * _0x1fd133 +
        _0x10ec98[0x6] * _0x15267c),
      (this["y"] =
        _0x10ec98[0x1] * _0x2b2df8 +
        _0x10ec98[0x4] * _0x1fd133 +
        _0x10ec98[0x7] * _0x15267c),
      (this["z"] =
        _0x10ec98[0x2] * _0x2b2df8 +
        _0x10ec98[0x5] * _0x1fd133 +
        _0x10ec98[0x8] * _0x15267c),
      this
    );
  }
  [_0x44a014(0xcb1)](_0x23fa8e) {
    return this["applyMatrix3"](_0x23fa8e)["normalize"]();
  }
  [_0x44a014(0x211b)](_0x57a21a) {
    const _0x147be4 = _0x44a014,
      _0x22ebe3 = this["x"],
      _0x301746 = this["y"],
      _0x33cc79 = this["z"],
      _0x5402da = _0x57a21a[_0x147be4(0x1bb6)],
      _0x264928 =
        0x1 /
        (_0x5402da[0x3] * _0x22ebe3 +
          _0x5402da[0x7] * _0x301746 +
          _0x5402da[0xb] * _0x33cc79 +
          _0x5402da[0xf]);
    return (
      (this["x"] =
        (_0x5402da[0x0] * _0x22ebe3 +
          _0x5402da[0x4] * _0x301746 +
          _0x5402da[0x8] * _0x33cc79 +
          _0x5402da[0xc]) *
        _0x264928),
      (this["y"] =
        (_0x5402da[0x1] * _0x22ebe3 +
          _0x5402da[0x5] * _0x301746 +
          _0x5402da[0x9] * _0x33cc79 +
          _0x5402da[0xd]) *
        _0x264928),
      (this["z"] =
        (_0x5402da[0x2] * _0x22ebe3 +
          _0x5402da[0x6] * _0x301746 +
          _0x5402da[0xa] * _0x33cc79 +
          _0x5402da[0xe]) *
        _0x264928),
      this
    );
  }
  [_0x44a014(0x25b)](_0x2d6699) {
    const _0x3329b5 = this["x"],
      _0x4bb1a8 = this["y"],
      _0x1ae49d = this["z"],
      _0x4bfbff = _0x2d6699["x"],
      _0x86f4dc = _0x2d6699["y"],
      _0x58cc69 = _0x2d6699["z"],
      _0x478e6c = _0x2d6699["w"],
      _0x40ef55 = 0x2 * (_0x86f4dc * _0x1ae49d - _0x58cc69 * _0x4bb1a8),
      _0x49c53c = 0x2 * (_0x58cc69 * _0x3329b5 - _0x4bfbff * _0x1ae49d),
      _0x4ddda5 = 0x2 * (_0x4bfbff * _0x4bb1a8 - _0x86f4dc * _0x3329b5);
    return (
      (this["x"] =
        _0x3329b5 +
        _0x478e6c * _0x40ef55 +
        _0x86f4dc * _0x4ddda5 -
        _0x58cc69 * _0x49c53c),
      (this["y"] =
        _0x4bb1a8 +
        _0x478e6c * _0x49c53c +
        _0x58cc69 * _0x40ef55 -
        _0x4bfbff * _0x4ddda5),
      (this["z"] =
        _0x1ae49d +
        _0x478e6c * _0x4ddda5 +
        _0x4bfbff * _0x49c53c -
        _0x86f4dc * _0x40ef55),
      this
    );
  }
  [_0x44a014(0x1d27)](_0x4bd903) {
    const _0x5731cc = _0x44a014;
    return this[_0x5731cc(0x211b)](_0x4bd903[_0x5731cc(0xafd)])[
      _0x5731cc(0x211b)
    ](_0x4bd903[_0x5731cc(0xcf1)]);
  }
  [_0x44a014(0x157b)](_0x16f309) {
    const _0x516d9d = _0x44a014;
    return this[_0x516d9d(0x211b)](_0x16f309[_0x516d9d(0x490)])[
      _0x516d9d(0x211b)
    ](_0x16f309[_0x516d9d(0x8b9)]);
  }
  ["transformDirection"](_0x5b9c38) {
    const _0x8fa6d4 = _0x44a014,
      _0x20d98b = this["x"],
      _0x32d8f8 = this["y"],
      _0x385b43 = this["z"],
      _0x4e18ae = _0x5b9c38[_0x8fa6d4(0x1bb6)];
    return (
      (this["x"] =
        _0x4e18ae[0x0] * _0x20d98b +
        _0x4e18ae[0x4] * _0x32d8f8 +
        _0x4e18ae[0x8] * _0x385b43),
      (this["y"] =
        _0x4e18ae[0x1] * _0x20d98b +
        _0x4e18ae[0x5] * _0x32d8f8 +
        _0x4e18ae[0x9] * _0x385b43),
      (this["z"] =
        _0x4e18ae[0x2] * _0x20d98b +
        _0x4e18ae[0x6] * _0x32d8f8 +
        _0x4e18ae[0xa] * _0x385b43),
      this["normalize"]()
    );
  }
  [_0x44a014(0x2a6)](_0x401e16) {
    return (
      (this["x"] /= _0x401e16["x"]),
      (this["y"] /= _0x401e16["y"]),
      (this["z"] /= _0x401e16["z"]),
      this
    );
  }
  [_0x44a014(0x116f)](_0x246b5c) {
    const _0x45fe1c = _0x44a014;
    return this[_0x45fe1c(0x7d5)](0x1 / _0x246b5c);
  }
  [_0x44a014(0x16e0)](_0x57962b) {
    const _0x1286e3 = _0x44a014;
    return (
      (this["x"] = Math[_0x1286e3(0x16e0)](this["x"], _0x57962b["x"])),
      (this["y"] = Math[_0x1286e3(0x16e0)](this["y"], _0x57962b["y"])),
      (this["z"] = Math[_0x1286e3(0x16e0)](this["z"], _0x57962b["z"])),
      this
    );
  }
  [_0x44a014(0x723)](_0x5e9686) {
    const _0x5f3417 = _0x44a014;
    return (
      (this["x"] = Math[_0x5f3417(0x723)](this["x"], _0x5e9686["x"])),
      (this["y"] = Math["max"](this["y"], _0x5e9686["y"])),
      (this["z"] = Math[_0x5f3417(0x723)](this["z"], _0x5e9686["z"])),
      this
    );
  }
  [_0x44a014(0xa90)](_0x2149b2, _0x11a42a) {
    const _0x41709a = _0x44a014;
    return (
      (this["x"] = Math["max"](
        _0x2149b2["x"],
        Math[_0x41709a(0x16e0)](_0x11a42a["x"], this["x"]),
      )),
      (this["y"] = Math[_0x41709a(0x723)](
        _0x2149b2["y"],
        Math[_0x41709a(0x16e0)](_0x11a42a["y"], this["y"]),
      )),
      (this["z"] = Math[_0x41709a(0x723)](
        _0x2149b2["z"],
        Math[_0x41709a(0x16e0)](_0x11a42a["z"], this["z"]),
      )),
      this
    );
  }
  [_0x44a014(0x1226)](_0x23d166, _0x261eca) {
    const _0x2071cb = _0x44a014;
    return (
      (this["x"] = Math[_0x2071cb(0x723)](
        _0x23d166,
        Math["min"](_0x261eca, this["x"]),
      )),
      (this["y"] = Math[_0x2071cb(0x723)](
        _0x23d166,
        Math[_0x2071cb(0x16e0)](_0x261eca, this["y"]),
      )),
      (this["z"] = Math[_0x2071cb(0x723)](
        _0x23d166,
        Math[_0x2071cb(0x16e0)](_0x261eca, this["z"]),
      )),
      this
    );
  }
  ["clampLength"](_0x23dd08, _0x58c8e4) {
    const _0x44446c = _0x44a014,
      _0x373a08 = this["length"]();
    return this[_0x44446c(0x116f)](_0x373a08 || 0x1)[_0x44446c(0x7d5)](
      Math[_0x44446c(0x723)](
        _0x23dd08,
        Math[_0x44446c(0x16e0)](_0x58c8e4, _0x373a08),
      ),
    );
  }
  [_0x44a014(0x2f3)]() {
    const _0x309549 = _0x44a014;
    return (
      (this["x"] = Math[_0x309549(0x2f3)](this["x"])),
      (this["y"] = Math["floor"](this["y"])),
      (this["z"] = Math[_0x309549(0x2f3)](this["z"])),
      this
    );
  }
  [_0x44a014(0x2af)]() {
    const _0x35a5aa = _0x44a014;
    return (
      (this["x"] = Math["ceil"](this["x"])),
      (this["y"] = Math[_0x35a5aa(0x2af)](this["y"])),
      (this["z"] = Math[_0x35a5aa(0x2af)](this["z"])),
      this
    );
  }
  [_0x44a014(0x1f96)]() {
    const _0x2dccf8 = _0x44a014;
    return (
      (this["x"] = Math[_0x2dccf8(0x1f96)](this["x"])),
      (this["y"] = Math[_0x2dccf8(0x1f96)](this["y"])),
      (this["z"] = Math[_0x2dccf8(0x1f96)](this["z"])),
      this
    );
  }
  [_0x44a014(0x1018)]() {
    return (
      (this["x"] = Math["trunc"](this["x"])),
      (this["y"] = Math["trunc"](this["y"])),
      (this["z"] = Math["trunc"](this["z"])),
      this
    );
  }
  ["negate"]() {
    return (
      (this["x"] = -this["x"]),
      (this["y"] = -this["y"]),
      (this["z"] = -this["z"]),
      this
    );
  }
  [_0x44a014(0x1e01)](_0x378aa6) {
    return (
      this["x"] * _0x378aa6["x"] +
      this["y"] * _0x378aa6["y"] +
      this["z"] * _0x378aa6["z"]
    );
  }
  [_0x44a014(0x9f5)]() {
    return (
      this["x"] * this["x"] + this["y"] * this["y"] + this["z"] * this["z"]
    );
  }
  [_0x44a014(0x1715)]() {
    return Math["sqrt"](
      this["x"] * this["x"] + this["y"] * this["y"] + this["z"] * this["z"],
    );
  }
  [_0x44a014(0x205c)]() {
    const _0x2547a6 = _0x44a014;
    return (
      Math["abs"](this["x"]) +
      Math["abs"](this["y"]) +
      Math[_0x2547a6(0x1fc4)](this["z"])
    );
  }
  ["normalize"]() {
    return this["divideScalar"](this["length"]() || 0x1);
  }
  ["setLength"](_0x251200) {
    const _0x4ae14a = _0x44a014;
    return this[_0x4ae14a(0x1747)]()[_0x4ae14a(0x7d5)](_0x251200);
  }
  ["lerp"](_0x32c7b1, _0x281f18) {
    return (
      (this["x"] += (_0x32c7b1["x"] - this["x"]) * _0x281f18),
      (this["y"] += (_0x32c7b1["y"] - this["y"]) * _0x281f18),
      (this["z"] += (_0x32c7b1["z"] - this["z"]) * _0x281f18),
      this
    );
  }
  [_0x44a014(0xb6e)](_0x2524b2, _0x3e2e25, _0x701c51) {
    return (
      (this["x"] =
        _0x2524b2["x"] + (_0x3e2e25["x"] - _0x2524b2["x"]) * _0x701c51),
      (this["y"] =
        _0x2524b2["y"] + (_0x3e2e25["y"] - _0x2524b2["y"]) * _0x701c51),
      (this["z"] =
        _0x2524b2["z"] + (_0x3e2e25["z"] - _0x2524b2["z"]) * _0x701c51),
      this
    );
  }
  [_0x44a014(0x280)](_0x161d50) {
    return this["crossVectors"](this, _0x161d50);
  }
  ["crossVectors"](_0x5ebc08, _0x53b9b4) {
    const _0x1590f0 = _0x5ebc08["x"],
      _0x21fe33 = _0x5ebc08["y"],
      _0x150da1 = _0x5ebc08["z"],
      _0x40b457 = _0x53b9b4["x"],
      _0x31387d = _0x53b9b4["y"],
      _0x3fd858 = _0x53b9b4["z"];
    return (
      (this["x"] = _0x21fe33 * _0x3fd858 - _0x150da1 * _0x31387d),
      (this["y"] = _0x150da1 * _0x40b457 - _0x1590f0 * _0x3fd858),
      (this["z"] = _0x1590f0 * _0x31387d - _0x21fe33 * _0x40b457),
      this
    );
  }
  [_0x44a014(0x1bfe)](_0x3fed76) {
    const _0x36ade8 = _0x44a014,
      _0x2c1e40 = _0x3fed76["lengthSq"]();
    if (_0x2c1e40 === 0x0) return this[_0x36ade8(0x1b41)](0x0, 0x0, 0x0);
    const _0x222228 = _0x3fed76["dot"](this) / _0x2c1e40;
    return this[_0x36ade8(0x1bfa)](_0x3fed76)["multiplyScalar"](_0x222228);
  }
  ["projectOnPlane"](_0x480e90) {
    const _0x25febc = _0x44a014;
    return (
      UM["copy"](this)[_0x25febc(0x1bfe)](_0x480e90),
      this[_0x25febc(0xbcf)](UM)
    );
  }
  ["reflect"](_0x38d1c9) {
    const _0xa544de = _0x44a014;
    return this[_0xa544de(0xbcf)](
      UM[_0xa544de(0x1bfa)](_0x38d1c9)["multiplyScalar"](
        0x2 * this["dot"](_0x38d1c9),
      ),
    );
  }
  ["angleTo"](_0x31a874) {
    const _0x26c454 = _0x44a014,
      _0x122d8a = Math["sqrt"](
        this[_0x26c454(0x9f5)]() * _0x31a874[_0x26c454(0x9f5)](),
      );
    if (_0x122d8a === 0x0) return Math["PI"] / 0x2;
    const _0x2d3472 = this[_0x26c454(0x1e01)](_0x31a874) / _0x122d8a;
    return Math["acos"](zc(_0x2d3472, -0x1, 0x1));
  }
  [_0x44a014(0x1c87)](_0x2e8524) {
    const _0x1defd2 = _0x44a014;
    return Math[_0x1defd2(0xb50)](this[_0x1defd2(0x655)](_0x2e8524));
  }
  ["distanceToSquared"](_0x2cba49) {
    const _0x52d3b0 = this["x"] - _0x2cba49["x"],
      _0x3d78e4 = this["y"] - _0x2cba49["y"],
      _0x10fc00 = this["z"] - _0x2cba49["z"];
    return (
      _0x52d3b0 * _0x52d3b0 + _0x3d78e4 * _0x3d78e4 + _0x10fc00 * _0x10fc00
    );
  }
  [_0x44a014(0x4a6)](_0x3c7426) {
    const _0x453f63 = _0x44a014;
    return (
      Math[_0x453f63(0x1fc4)](this["x"] - _0x3c7426["x"]) +
      Math["abs"](this["y"] - _0x3c7426["y"]) +
      Math[_0x453f63(0x1fc4)](this["z"] - _0x3c7426["z"])
    );
  }
  [_0x44a014(0x12d8)](_0x5bfe04) {
    const _0x8a6411 = _0x44a014;
    return this["setFromSphericalCoords"](
      _0x5bfe04[_0x8a6411(0x1d1b)],
      _0x5bfe04[_0x8a6411(0x894)],
      _0x5bfe04[_0x8a6411(0xd15)],
    );
  }
  [_0x44a014(0xcb6)](_0x44cff6, _0x4333be, _0x1cb1a5) {
    const _0x1e6510 = _0x44a014,
      _0x105a4a = Math["sin"](_0x4333be) * _0x44cff6;
    return (
      (this["x"] = _0x105a4a * Math[_0x1e6510(0x1fcd)](_0x1cb1a5)),
      (this["y"] = Math["cos"](_0x4333be) * _0x44cff6),
      (this["z"] = _0x105a4a * Math["cos"](_0x1cb1a5)),
      this
    );
  }
  [_0x44a014(0x179)](_0x58c741) {
    const _0x2c3a93 = _0x44a014;
    return this["setFromCylindricalCoords"](
      _0x58c741[_0x2c3a93(0x1d1b)],
      _0x58c741[_0x2c3a93(0xd15)],
      _0x58c741["y"],
    );
  }
  [_0x44a014(0x12b0)](_0x30fc4e, _0x26f685, _0x3be02b) {
    const _0x4800fa = _0x44a014;
    return (
      (this["x"] = _0x30fc4e * Math[_0x4800fa(0x1fcd)](_0x26f685)),
      (this["y"] = _0x3be02b),
      (this["z"] = _0x30fc4e * Math[_0x4800fa(0x12df)](_0x26f685)),
      this
    );
  }
  [_0x44a014(0x174f)](_0x5b0c59) {
    const _0x1e71c9 = _0x44a014,
      _0x363f8c = _0x5b0c59[_0x1e71c9(0x1bb6)];
    return (
      (this["x"] = _0x363f8c[0xc]),
      (this["y"] = _0x363f8c[0xd]),
      (this["z"] = _0x363f8c[0xe]),
      this
    );
  }
  [_0x44a014(0x2056)](_0x58a900) {
    const _0x1dc15e = _0x44a014,
      _0x1d8162 = this[_0x1dc15e(0x574)](_0x58a900, 0x0)[_0x1dc15e(0x1715)](),
      _0x3a3793 = this[_0x1dc15e(0x574)](_0x58a900, 0x1)[_0x1dc15e(0x1715)](),
      _0x12126d = this[_0x1dc15e(0x574)](_0x58a900, 0x2)[_0x1dc15e(0x1715)]();
    return (
      (this["x"] = _0x1d8162),
      (this["y"] = _0x3a3793),
      (this["z"] = _0x12126d),
      this
    );
  }
  ["setFromMatrixColumn"](_0x250fcd, _0x388b34) {
    const _0x183316 = _0x44a014;
    return this["fromArray"](_0x250fcd[_0x183316(0x1bb6)], _0x388b34 * 0x4);
  }
  [_0x44a014(0x15a6)](_0x4751ed, _0x54f0ea) {
    const _0x359b7d = _0x44a014;
    return this[_0x359b7d(0x1951)](
      _0x4751ed[_0x359b7d(0x1bb6)],
      _0x54f0ea * 0x3,
    );
  }
  [_0x44a014(0x11a4)](_0x373504) {
    return (
      (this["x"] = _0x373504["_x"]),
      (this["y"] = _0x373504["_y"]),
      (this["z"] = _0x373504["_z"]),
      this
    );
  }
  [_0x44a014(0x1ab)](_0x5b9cee) {
    return (
      (this["x"] = _0x5b9cee["r"]),
      (this["y"] = _0x5b9cee["g"]),
      (this["z"] = _0x5b9cee["b"]),
      this
    );
  }
  [_0x44a014(0x11e5)](_0x575eeb) {
    return (
      _0x575eeb["x"] === this["x"] &&
      _0x575eeb["y"] === this["y"] &&
      _0x575eeb["z"] === this["z"]
    );
  }
  [_0x44a014(0x1951)](_0x2573a8, _0x4eabe2 = 0x0) {
    return (
      (this["x"] = _0x2573a8[_0x4eabe2]),
      (this["y"] = _0x2573a8[_0x4eabe2 + 0x1]),
      (this["z"] = _0x2573a8[_0x4eabe2 + 0x2]),
      this
    );
  }
  [_0x44a014(0x20dc)](_0x117abc = [], _0x2c85d0 = 0x0) {
    return (
      (_0x117abc[_0x2c85d0] = this["x"]),
      (_0x117abc[_0x2c85d0 + 0x1] = this["y"]),
      (_0x117abc[_0x2c85d0 + 0x2] = this["z"]),
      _0x117abc
    );
  }
  ["fromBufferAttribute"](_0x45e83f, _0x5111ec) {
    const _0x14876f = _0x44a014;
    return (
      (this["x"] = _0x45e83f[_0x14876f(0x11ae)](_0x5111ec)),
      (this["y"] = _0x45e83f[_0x14876f(0x1b4f)](_0x5111ec)),
      (this["z"] = _0x45e83f["getZ"](_0x5111ec)),
      this
    );
  }
  [_0x44a014(0x10b2)]() {
    const _0x1933d6 = _0x44a014;
    return (
      (this["x"] = Math[_0x1933d6(0x10b2)]()),
      (this["y"] = Math["random"]()),
      (this["z"] = Math[_0x1933d6(0x10b2)]()),
      this
    );
  }
  [_0x44a014(0xb7e)]() {
    const _0xae0c49 = _0x44a014,
      _0x7f4767 = Math[_0xae0c49(0x10b2)]() * Math["PI"] * 0x2,
      _0x289760 = Math["random"]() * 0x2 - 0x1,
      _0x452b89 = Math["sqrt"](0x1 - _0x289760 * _0x289760);
    return (
      (this["x"] = _0x452b89 * Math[_0xae0c49(0x12df)](_0x7f4767)),
      (this["y"] = _0x289760),
      (this["z"] = _0x452b89 * Math[_0xae0c49(0x1fcd)](_0x7f4767)),
      this
    );
  }
  *[Symbol[_0x44a014(0x45c)]]() {
    (yield this["x"], yield this["y"], yield this["z"]);
  }
}
