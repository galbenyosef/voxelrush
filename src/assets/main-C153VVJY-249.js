// main-C153VVJY 249 — x4a49f7
// Lines 92288-92548 of readable/assets/main-C153VVJY.pretty.js (statement-aligned).
class fY {
  constructor(_0x40c2e6) {
    const _0x1bf206 = _0x44a014;
    this[_0x1bf206(0x1e9)] = _0x40c2e6;
  }
  ["pressed"] = new Map();
  [_0x44a014(0xac2)] = new Map();
  [_0x44a014(0x1b1)](_0x55d244, _0x1a2c4f, _0x4093d4 = [], _0x222fc9 = []) {
    const _0x2608ea = _0x44a014,
      _0x5b7cf3 = new Set(),
      _0x17bef0 = new Set(),
      _0x135c0c = (
        _0x3a5583,
        _0x5eba1d,
        _0x2b5ffc,
        _0x1af1ad = _0x5eba1d ? "v" : "p",
      ) => {
        const _0x4a49f7 = _0x8a4a,
          _0x1ce44c = _0x3a5583["planet"] ?? 0x0,
          _0x420a9e = _0x1af1ad + ":" + _0x3a5583["id"],
          _0x5625de = this[_0x4a49f7(0xac2)][_0x4a49f7(0xda9)](_0x420a9e);
        (_0x17bef0[_0x4a49f7(0x953)](_0x420a9e),
          this[_0x4a49f7(0xac2)][_0x4a49f7(0x1b41)](_0x420a9e, {
            id: _0x3a5583["id"],
            x: _0x3a5583["x"],
            y: _0x3a5583["y"],
            z: _0x3a5583["z"],
            planet: _0x3a5583[_0x4a49f7(0x529)],
          }));
        const _0x3b867b =
            _0x5625de && _0x5625de[_0x4a49f7(0x529)] === _0x3a5583["planet"]
              ? Math[_0x4a49f7(0x1b0)](
                  _0x3a5583["x"] - _0x5625de["x"],
                  _0x3a5583["y"] - _0x5625de["y"],
                  _0x3a5583["z"] - _0x5625de["z"],
                )
              : 0x0,
          _0x4fa562 =
            _0x3b867b > 0x18
              ? 0x1
              : Math[_0x4a49f7(0x723)](0x1, Math["ceil"](_0x3b867b / 0.35));
        for (let _0x1ff65c = 0x1; _0x1ff65c <= _0x4fa562; _0x1ff65c++) {
          const _0x42bba1 = _0x1ff65c / _0x4fa562,
            _0x192a5e =
              _0x4fa562 > 0x1
                ? _0x5625de["x"] + (_0x3a5583["x"] - _0x5625de["x"]) * _0x42bba1
                : _0x3a5583["x"],
            _0x50a3e1 =
              _0x4fa562 > 0x1
                ? _0x5625de["y"] + (_0x3a5583["y"] - _0x5625de["y"]) * _0x42bba1
                : _0x3a5583["y"],
            _0x38ad88 =
              _0x4fa562 > 0x1
                ? _0x5625de["z"] + (_0x3a5583["z"] - _0x5625de["z"]) * _0x42bba1
                : _0x3a5583["z"];
          for (
            let _0x4be6e4 = Math[_0x4a49f7(0x2f3)](_0x192a5e - _0x2b5ffc);
            _0x4be6e4 <= Math[_0x4a49f7(0x2f3)](_0x192a5e + _0x2b5ffc);
            _0x4be6e4++
          )
            for (
              let _0x6a4086 = Math[_0x4a49f7(0x2f3)](_0x38ad88 - _0x2b5ffc);
              _0x6a4086 <= Math["floor"](_0x38ad88 + _0x2b5ffc);
              _0x6a4086++
            )
              for (
                let _0x594e21 = Math[_0x4a49f7(0x2f3)](_0x50a3e1 - 0.22);
                _0x594e21 <= Math[_0x4a49f7(0x2f3)](_0x50a3e1 + 0.12);
                _0x594e21++
              ) {
                const _0xe3e5d8 = {
                    x: _0x4be6e4,
                    y: _0x594e21,
                    z: _0x6a4086,
                    planet: _0x1ce44c,
                  },
                  _0x405f79 = this["host"]["block"](_0xe3e5d8);
                if (
                  _0x405f79 !== l[_0x4a49f7(0x185f)] &&
                  _0x405f79 !== l["MINE_AT"]
                )
                  continue;
                const _0x119d57 =
                  _0x1ce44c +
                  ":" +
                  _0x4be6e4 +
                  "," +
                  _0x594e21 +
                  "," +
                  _0x6a4086;
                if (
                  this[_0x4a49f7(0x1e9)][_0x4a49f7(0x1a49)]?.(
                    _0xe3e5d8,
                    _0x1af1ad,
                    _0x3a5583["id"],
                  )
                )
                  continue;
                _0x405f79 === l["MINE_AP"] &&
                  this[_0x4a49f7(0x1e9)][_0x4a49f7(0xcd8)](_0xe3e5d8) & Vt &&
                  !this[_0x4a49f7(0x4a7)]["has"](_0x119d57) &&
                  this[_0x4a49f7(0x4a7)][_0x4a49f7(0x1b41)](_0x119d57, {
                    ..._0xe3e5d8,
                    by: { kind: _0x1af1ad, id: _0x3a5583["id"] },
                  });
                const _0x1fb525 =
                  _0x405f79 === l[_0x4a49f7(0x1c22)] ? 0.44 : 0.3;
                if (
                  !(
                    Math[_0x4a49f7(0x1b0)](
                      Math[_0x4a49f7(0x723)](
                        0x0,
                        Math["abs"](_0x192a5e - _0x4be6e4 - 0.5) - _0x2b5ffc,
                      ),
                      Math["max"](
                        0x0,
                        Math[_0x4a49f7(0x1fc4)](_0x38ad88 - _0x6a4086 - 0.5) -
                          _0x2b5ffc,
                      ),
                    ) > _0x1fb525
                  )
                ) {
                  if (_0x5eba1d) {
                    (this["pressed"][_0x4a49f7(0x367)](_0x119d57),
                      this[_0x4a49f7(0x1e9)][_0x4a49f7(0x155d)](
                        _0xe3e5d8,
                        _0x405f79 === l["MINE_AT"],
                        { kind: _0x1af1ad, id: _0x3a5583["id"] },
                      ));
                    continue;
                  }
                  _0x405f79 !== l[_0x4a49f7(0x1c22)] &&
                    (_0x1ff65c === _0x4fa562 && _0x5b7cf3["add"](_0x119d57),
                    this[_0x4a49f7(0x4a7)][_0x4a49f7(0x97a)](_0x119d57) ||
                      (this[_0x4a49f7(0x4a7)][_0x4a49f7(0x1b41)](_0x119d57, {
                        ..._0xe3e5d8,
                        by: { kind: _0x1af1ad, id: _0x3a5583["id"] },
                      }),
                      this[_0x4a49f7(0x1e9)][_0x4a49f7(0xfb7)](_0xe3e5d8),
                      this[_0x4a49f7(0x1e9)]["warn"](
                        _0x3a5583["id"],
                        _0x1af1ad,
                      )));
                }
              }
        }
      };
    for (const _0x1d28b9 of _0x55d244)
      _0x1d28b9[_0x2608ea(0x161)] &&
        !_0x1d28b9["creative"] &&
        (_0x1d28b9["vehicle"] === void 0x0 ||
          _0x1d28b9[_0x2608ea(0x1445)] === -0x1) &&
        _0x135c0c(_0x1d28b9, !0x1, 0.27);
    for (const _0x5c861c of _0x4093d4)
      _0x5c861c["hp"] > 0x0 && _0x135c0c(_0x5c861c, !0x1, 0.27, "b");
    for (const _0x58fb87 of _0x222fc9)
      _0x58fb87["hp"] > 0x0 && _0x135c0c(_0x58fb87, !0x1, 0.27, "a");
    for (const _0x82c963 of _0x1a2c4f)
      _0x82c963["hp"] > 0x0 &&
        cY[_0x2608ea(0x97a)](_0x82c963["type"]) &&
        _0x135c0c(_0x82c963, !0x0, 1.35);
    for (const [_0x31c434, _0x16085b] of this[_0x2608ea(0x4a7)]) {
      if (
        this[_0x2608ea(0x1e9)][_0x2608ea(0x1ba4)](_0x16085b) !== l["MINE_AP"]
      ) {
        this[_0x2608ea(0x4a7)]["delete"](_0x31c434);
        continue;
      }
      _0x5b7cf3[_0x2608ea(0x97a)](_0x31c434) ||
        (this[_0x2608ea(0x4a7)][_0x2608ea(0x367)](_0x31c434),
        this["host"][_0x2608ea(0x155d)](_0x16085b, !0x1, _0x16085b["by"]));
    }
    for (const _0x20a6cd of this[_0x2608ea(0xac2)][_0x2608ea(0xdd8)]())
      _0x17bef0[_0x2608ea(0x97a)](_0x20a6cd) ||
        this["previous"][_0x2608ea(0x367)](_0x20a6cd);
  }
}
class hY {
  constructor(_0x4bcb41) {
    const _0x377179 = _0x44a014;
    this[_0x377179(0x1e9)] = _0x4bcb41;
  }
  ["armed"] = new Map();
  [_0x44a014(0x1b1)](_0x23240c, _0x4ba27b) {
    const _0x149acc = _0x44a014;
    for (const _0x3411fb of _0x4ba27b) {
      if (
        !_0x3411fb[_0x149acc(0x161)] ||
        _0x3411fb[_0x149acc(0x2b5)] ||
        _0x3411fb["planet"] !== 0x0
      )
        continue;
      const _0x48d0ae = Math[_0x149acc(0x2f3)](_0x3411fb["x"]),
        _0x25c860 = Math[_0x149acc(0x2f3)](_0x3411fb["y"] + 0.15),
        _0x221865 = Math[_0x149acc(0x2f3)](_0x3411fb["z"]),
        _0x1f54ea = _0x48d0ae + "," + _0x25c860 + "," + _0x221865;
      !this["armed"][_0x149acc(0x97a)](_0x1f54ea) &&
        this[_0x149acc(0x1e9)][_0x149acc(0x1ba4)](
          _0x48d0ae,
          _0x25c860,
          _0x221865,
        ) === l[_0x149acc(0x11a5)] &&
        this[_0x149acc(0x1e9)][_0x149acc(0x1ba4)](
          _0x48d0ae,
          _0x25c860 - 0x1,
          _0x221865,
        ) === l["DYNAMITE"] &&
        (this[_0x149acc(0x758)][_0x149acc(0x1b41)](_0x1f54ea, {
          x: _0x48d0ae,
          y: _0x25c860,
          z: _0x221865,
          at: _0x23240c + 0x708,
        }),
        this[_0x149acc(0x1e9)][_0x149acc(0x2097)](_0x3411fb["id"]));
    }
    for (const [_0x48bdfc, _0x4a41f0] of this["armed"]) {
      if (
        this[_0x149acc(0x1e9)][_0x149acc(0x1ba4)](
          _0x4a41f0["x"],
          _0x4a41f0["y"],
          _0x4a41f0["z"],
        ) !== l[_0x149acc(0x11a5)] ||
        this[_0x149acc(0x1e9)][_0x149acc(0x1ba4)](
          _0x4a41f0["x"],
          _0x4a41f0["y"] - 0x1,
          _0x4a41f0["z"],
        ) !== l[_0x149acc(0xc1b)]
      ) {
        this[_0x149acc(0x758)][_0x149acc(0x367)](_0x48bdfc);
        continue;
      }
      _0x23240c >= _0x4a41f0["at"] &&
        (this[_0x149acc(0x758)][_0x149acc(0x367)](_0x48bdfc),
        this[_0x149acc(0x1e9)]["detonate"](
          _0x4a41f0["x"],
          _0x4a41f0["y"] - 0x1,
          _0x4a41f0["z"],
        ));
    }
  }
}
function uY(_0x196ab1) {
  return {
    handler: _0x196ab1,
    listen(_0x2051f4, _0x2bfc70, _0x367dc0) {
      const _0x2c0fb5 = _0x8a4a;
      (typeof _0x2bfc70 == _0x2c0fb5(0x7e4) ? _0x2bfc70 : _0x367dc0)?.();
    },
  };
}
var dY = { createServer: uY };
const Rz = (_0x1cb410) =>
    _0x1cb410 === l[_0x44a014(0x1729)] || _0x1cb410 === l[_0x44a014(0x1487)],
  mY = 0xe7,
  nw = 0xe8,
  CE = 0xe9,
  Ga = 0xea,
  pY = 0xeb,
  Sz = 0xec,
  sE = 0xed,
  EY = 0xee;
