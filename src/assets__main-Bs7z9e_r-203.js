// assets__main-Bs7z9e_r 203 — x50d8e1
// Lines 69079-69343 of readable/assets__main-Bs7z9e_r.pretty.js (statement-aligned).
class gG {
  constructor(_0x53594f) {
    const _0x1b0c52 = _0x5d322a;
    (Z(this, _0x1b0c52(0x1a8d), new Map()),
      Z(this, _0x1b0c52(0xe2c), new Map()),
      (this[_0x1b0c52(0x76b)] = _0x53594f));
  }
  [_0x5d322a(0xa1d)](_0x5c2e4c, _0x439261, _0x31fde3 = [], _0x5c5ba0 = []) {
    const _0x54a48a = _0x5d322a,
      _0x53078d = new Set(),
      _0x531801 = new Set(),
      _0x3074f5 = (
        _0x1ef43e,
        _0x15e4a0,
        _0x57d9a7,
        _0x9d7d29 = _0x15e4a0 ? "v" : "p",
      ) => {
        const _0x50d8e1 = _0x3e87;
        var _0x53b0a2, _0x2c08f0;
        const _0x2927ff = _0x1ef43e[_0x50d8e1(0x1ed3)] ?? 0x0,
          _0x4c9cc3 = _0x9d7d29 + ":" + _0x1ef43e["id"],
          _0x57874a = this[_0x50d8e1(0xe2c)]["get"](_0x4c9cc3);
        (_0x531801["add"](_0x4c9cc3),
          this["previous"]["set"](_0x4c9cc3, {
            id: _0x1ef43e["id"],
            x: _0x1ef43e["x"],
            y: _0x1ef43e["y"],
            z: _0x1ef43e["z"],
            planet: _0x1ef43e[_0x50d8e1(0x1ed3)],
          }));
        const _0x2fc8ed =
            _0x57874a &&
            _0x57874a[_0x50d8e1(0x1ed3)] === _0x1ef43e[_0x50d8e1(0x1ed3)]
              ? Math[_0x50d8e1(0x1400)](
                  _0x1ef43e["x"] - _0x57874a["x"],
                  _0x1ef43e["y"] - _0x57874a["y"],
                  _0x1ef43e["z"] - _0x57874a["z"],
                )
              : 0x0,
          _0x15d724 =
            _0x2fc8ed > 0x18
              ? 0x1
              : Math["max"](0x1, Math["ceil"](_0x2fc8ed / 0.35));
        for (let _0x228400 = 0x1; _0x228400 <= _0x15d724; _0x228400++) {
          const _0x4e97bb = _0x228400 / _0x15d724,
            _0x4d9098 =
              _0x15d724 > 0x1
                ? _0x57874a["x"] + (_0x1ef43e["x"] - _0x57874a["x"]) * _0x4e97bb
                : _0x1ef43e["x"],
            _0xad564b =
              _0x15d724 > 0x1
                ? _0x57874a["y"] + (_0x1ef43e["y"] - _0x57874a["y"]) * _0x4e97bb
                : _0x1ef43e["y"],
            _0x595e56 =
              _0x15d724 > 0x1
                ? _0x57874a["z"] + (_0x1ef43e["z"] - _0x57874a["z"]) * _0x4e97bb
                : _0x1ef43e["z"];
          for (
            let _0x49a098 = Math[_0x50d8e1(0x17b0)](_0x4d9098 - _0x57d9a7);
            _0x49a098 <= Math[_0x50d8e1(0x17b0)](_0x4d9098 + _0x57d9a7);
            _0x49a098++
          )
            for (
              let _0x27b8ba = Math[_0x50d8e1(0x17b0)](_0x595e56 - _0x57d9a7);
              _0x27b8ba <= Math[_0x50d8e1(0x17b0)](_0x595e56 + _0x57d9a7);
              _0x27b8ba++
            )
              for (
                let _0x15cdd9 = Math[_0x50d8e1(0x17b0)](_0xad564b - 0.22);
                _0x15cdd9 <= Math["floor"](_0xad564b + 0.12);
                _0x15cdd9++
              ) {
                const _0x5e36c6 = {
                    x: _0x49a098,
                    y: _0x15cdd9,
                    z: _0x27b8ba,
                    planet: _0x2927ff,
                  },
                  _0x8639b8 = this["host"][_0x50d8e1(0x60b)](_0x5e36c6);
                if (
                  _0x8639b8 !== f[_0x50d8e1(0xef6)] &&
                  _0x8639b8 !== f["MINE_AT"]
                )
                  continue;
                const _0x322907 =
                  _0x2927ff +
                  ":" +
                  _0x49a098 +
                  "," +
                  _0x15cdd9 +
                  "," +
                  _0x27b8ba;
                if (
                  (_0x2c08f0 = (_0x53b0a2 = this[_0x50d8e1(0x76b)])[
                    _0x50d8e1(0x1e1e)
                  ]) != null &&
                  _0x2c08f0[_0x50d8e1(0x1834)](
                    _0x53b0a2,
                    _0x5e36c6,
                    _0x9d7d29,
                    _0x1ef43e["id"],
                  )
                )
                  continue;
                _0x8639b8 === f[_0x50d8e1(0xef6)] &&
                  this[_0x50d8e1(0x76b)][_0x50d8e1(0x1f6)](_0x5e36c6) & ot &&
                  !this[_0x50d8e1(0x1a8d)][_0x50d8e1(0x448)](_0x322907) &&
                  this["pressed"]["set"](_0x322907, {
                    ..._0x5e36c6,
                    by: { kind: _0x9d7d29, id: _0x1ef43e["id"] },
                  });
                const _0x251755 =
                  _0x8639b8 === f[_0x50d8e1(0x1088)] ? 0.44 : 0.3;
                if (
                  !(
                    Math[_0x50d8e1(0x1400)](
                      Math[_0x50d8e1(0x1267)](
                        0x0,
                        Math[_0x50d8e1(0x7a3)](_0x4d9098 - _0x49a098 - 0.5) -
                          _0x57d9a7,
                      ),
                      Math["max"](
                        0x0,
                        Math[_0x50d8e1(0x7a3)](_0x595e56 - _0x27b8ba - 0.5) -
                          _0x57d9a7,
                      ),
                    ) > _0x251755
                  )
                ) {
                  if (_0x15e4a0) {
                    (this["pressed"][_0x50d8e1(0x1d64)](_0x322907),
                      this[_0x50d8e1(0x76b)][_0x50d8e1(0x9be)](
                        _0x5e36c6,
                        _0x8639b8 === f[_0x50d8e1(0x1088)],
                        { kind: _0x9d7d29, id: _0x1ef43e["id"] },
                      ));
                    continue;
                  }
                  _0x8639b8 !== f["MINE_AT"] &&
                    (_0x228400 === _0x15d724 &&
                      _0x53078d[_0x50d8e1(0x1577)](_0x322907),
                    this[_0x50d8e1(0x1a8d)][_0x50d8e1(0x448)](_0x322907) ||
                      (this["pressed"][_0x50d8e1(0x124)](_0x322907, {
                        ..._0x5e36c6,
                        by: { kind: _0x9d7d29, id: _0x1ef43e["id"] },
                      }),
                      this["host"][_0x50d8e1(0x311)](_0x5e36c6),
                      this["host"][_0x50d8e1(0xc8d)](
                        _0x1ef43e["id"],
                        _0x9d7d29,
                      )));
                }
              }
        }
      };
    for (const _0x374430 of _0x5c2e4c)
      _0x374430["alive"] &&
        !_0x374430["creative"] &&
        (_0x374430[_0x54a48a(0x1713)] === void 0x0 ||
          _0x374430[_0x54a48a(0x1713)] === -0x1) &&
        _0x3074f5(_0x374430, !0x1, 0.27);
    for (const _0x254581 of _0x31fde3)
      _0x254581["hp"] > 0x0 && _0x3074f5(_0x254581, !0x1, 0.27, "b");
    for (const _0x43f99a of _0x5c5ba0)
      _0x43f99a["hp"] > 0x0 && _0x3074f5(_0x43f99a, !0x1, 0.27, "a");
    for (const _0x1d1330 of _0x439261)
      _0x1d1330["hp"] > 0x0 &&
        AG[_0x54a48a(0x448)](_0x1d1330[_0x54a48a(0x58f)]) &&
        _0x3074f5(_0x1d1330, !0x0, 1.35);
    for (const [_0x3bfd3b, _0x180597] of this[_0x54a48a(0x1a8d)]) {
      if (this["host"][_0x54a48a(0x60b)](_0x180597) !== f["MINE_AP"]) {
        this[_0x54a48a(0x1a8d)][_0x54a48a(0x1d64)](_0x3bfd3b);
        continue;
      }
      _0x53078d[_0x54a48a(0x448)](_0x3bfd3b) ||
        (this[_0x54a48a(0x1a8d)][_0x54a48a(0x1d64)](_0x3bfd3b),
        this["host"][_0x54a48a(0x9be)](_0x180597, !0x1, _0x180597["by"]));
    }
    for (const _0x28f552 of this[_0x54a48a(0xe2c)][_0x54a48a(0x220)]())
      _0x531801[_0x54a48a(0x448)](_0x28f552) ||
        this["previous"][_0x54a48a(0x1d64)](_0x28f552);
  }
}
class MG {
  constructor(_0x323925) {
    const _0x27dd94 = _0x5d322a;
    (Z(this, _0x27dd94(0xf60), new Map()),
      (this[_0x27dd94(0x76b)] = _0x323925));
  }
  ["tick"](_0x2f6188, _0x1dc907) {
    const _0x3d8eed = _0x5d322a;
    for (const _0x57f6e7 of _0x1dc907) {
      if (
        !_0x57f6e7[_0x3d8eed(0x174b)] ||
        _0x57f6e7[_0x3d8eed(0x1ec2)] ||
        _0x57f6e7[_0x3d8eed(0x1ed3)] !== 0x0
      )
        continue;
      const _0x3ef44f = Math["floor"](_0x57f6e7["x"]),
        _0xcae7d3 = Math[_0x3d8eed(0x17b0)](_0x57f6e7["y"] + 0.15),
        _0x458843 = Math[_0x3d8eed(0x17b0)](_0x57f6e7["z"]),
        _0x17ab6e = _0x3ef44f + "," + _0xcae7d3 + "," + _0x458843;
      !this[_0x3d8eed(0xf60)]["has"](_0x17ab6e) &&
        this["host"][_0x3d8eed(0x60b)](_0x3ef44f, _0xcae7d3, _0x458843) ===
          f[_0x3d8eed(0xe30)] &&
        this[_0x3d8eed(0x76b)]["block"](
          _0x3ef44f,
          _0xcae7d3 - 0x1,
          _0x458843,
        ) === f[_0x3d8eed(0x12d4)] &&
        (this["armed"][_0x3d8eed(0x124)](_0x17ab6e, {
          x: _0x3ef44f,
          y: _0xcae7d3,
          z: _0x458843,
          at: _0x2f6188 + 0x708,
        }),
        this[_0x3d8eed(0x76b)][_0x3d8eed(0xc8d)](_0x57f6e7["id"]));
    }
    for (const [_0x59ce0b, _0x42c9cd] of this[_0x3d8eed(0xf60)]) {
      if (
        this[_0x3d8eed(0x76b)]["block"](
          _0x42c9cd["x"],
          _0x42c9cd["y"],
          _0x42c9cd["z"],
        ) !== f[_0x3d8eed(0xe30)] ||
        this[_0x3d8eed(0x76b)]["block"](
          _0x42c9cd["x"],
          _0x42c9cd["y"] - 0x1,
          _0x42c9cd["z"],
        ) !== f[_0x3d8eed(0x12d4)]
      ) {
        this[_0x3d8eed(0xf60)][_0x3d8eed(0x1d64)](_0x59ce0b);
        continue;
      }
      _0x2f6188 >= _0x42c9cd["at"] &&
        (this[_0x3d8eed(0xf60)][_0x3d8eed(0x1d64)](_0x59ce0b),
        this[_0x3d8eed(0x76b)]["detonate"](
          _0x42c9cd["x"],
          _0x42c9cd["y"] - 0x1,
          _0x42c9cd["z"],
        ));
    }
  }
}
function RG(_0xa00fbd) {
  return {
    handler: _0xa00fbd,
    listen(_0x58edab, _0x49e13e, _0x4178d1) {
      var _0x35e252;
      (_0x35e252 = typeof _0x49e13e == "function" ? _0x49e13e : _0x4178d1) ==
        null || _0x35e252();
    },
  };
}
var SG = { createServer: RG };
const aI = (_0x5173f7) =>
    _0x5173f7 === f[_0x5d322a(0x347)] || _0x5173f7 === f[_0x5d322a(0x27e)],
  TG = 0xe7,
  w3 = 0xe8,
  g2 = 0xe9,
  ta = 0xea,
  xG = 0xeb,
  cI = 0xec,
  Wm = 0xed,
  _G = 0xee;
