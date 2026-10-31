// main-Bs7z9e_r 99 — math
// Lines 32654-32964 of readable/assets/main-Bs7z9e_r.pretty.js (statement-aligned).
function KB(
  _0xa62062,
  _0x47b8f2,
  _0xe7d651,
  _0x32c5d8,
  _0x50d9d0,
  _0x4661e2,
  _0x3bb409,
) {
  const _0x4ef2ee = _0x5d322a;
  if (!bE[_0x47b8f2]) return [];
  const _0xc6ba9e = Bl(_0x47b8f2),
    _0x5e3af2 = Math["cos"](_0x4661e2),
    _0x505a8e = Math[_0x4ef2ee(0x813)](_0x4661e2),
    _0xe0c325 = _0xc6ba9e[_0x4ef2ee(0x1e2b)],
    _0x5a2f24 = [-_0xc6ba9e[_0x4ef2ee(0x1218)], _0xc6ba9e[_0x4ef2ee(0x1218)]][
      _0x4ef2ee(0x1247)
    ]((_0x418375) =>
      [-_0xc6ba9e[_0x4ef2ee(0x1e2b)], _0xc6ba9e[_0x4ef2ee(0x1e2b)]][
        _0x4ef2ee(0x164b)
      ]((_0x3d07d7) => ({
        x: _0xe7d651 + _0x418375 * _0x5e3af2 + _0x3d07d7 * _0x505a8e,
        z: _0x50d9d0 - _0x418375 * _0x505a8e + _0x3d07d7 * _0x5e3af2,
      })),
    ),
    _0x552d31 =
      Math[_0x4ef2ee(0x17b0)](
        Math["min"](
          ..._0x5a2f24[_0x4ef2ee(0x164b)]((_0xf8fd55) => _0xf8fd55["x"]),
        ),
      ) - 0x1,
    _0x54f47c =
      Math[_0x4ef2ee(0x17b0)](
        Math["max"](
          ..._0x5a2f24[_0x4ef2ee(0x164b)]((_0x4f78ab) => _0x4f78ab["x"]),
        ),
      ) + 0x1,
    _0x2e7092 =
      Math["floor"](
        Math[_0x4ef2ee(0x48a)](
          ..._0x5a2f24[_0x4ef2ee(0x164b)]((_0x5dbe34) => _0x5dbe34["z"]),
        ),
      ) - 0x1,
    _0x583c68 =
      Math["floor"](
        Math[_0x4ef2ee(0x1267)](
          ..._0x5a2f24[_0x4ef2ee(0x164b)]((_0x1ac917) => _0x1ac917["z"]),
        ),
      ) + 0x1,
    _0x7abffa = [],
    _0x52f361 = Math[_0x4ef2ee(0x17b0)](_0x32c5d8 + 0.05),
    _0x152c2b = Math["ceil"](_0x32c5d8 + _0xc6ba9e[_0x4ef2ee(0xc58)]) - 0x1;
  for (let _0x36c96c = _0x552d31; _0x36c96c <= _0x54f47c; _0x36c96c++)
    for (let _0x5ec02a = _0x2e7092; _0x5ec02a <= _0x583c68; _0x5ec02a++) {
      const _0x2b0837 = _0x36c96c + 0.5 - _0xe7d651,
        _0x420075 = _0x5ec02a + 0.5 - _0x50d9d0,
        _0x122a76 = _0x2b0837 * _0x5e3af2 - _0x420075 * _0x505a8e,
        _0x204257 = _0x2b0837 * _0x505a8e + _0x420075 * _0x5e3af2;
      if (
        Math[_0x4ef2ee(0x7a3)](_0x122a76) >
          _0xc6ba9e[_0x4ef2ee(0x1218)] + 0.5 ||
        Math[_0x4ef2ee(0x7a3)](_0x204257) > _0xc6ba9e[_0x4ef2ee(0x1e2b)] + 0.9
      )
        continue;
      const _0x207427 = -_0x204257 * _0x3bb409,
        _0x229410 = _0x207427 >= Math[_0x4ef2ee(0x1267)](0.3, _0xe0c325 - 1.2);
      if (_0x207427 >= -0.2)
        for (
          let _0x4eaf56 = _0x52f361;
          _0x4eaf56 <= _0x152c2b + 0x1;
          _0x4eaf56++
        ) {
          const _0x144a40 = _0xa62062["getBlock"](
              _0x36c96c,
              _0x4eaf56,
              _0x5ec02a,
            ),
            _0x537156 = Q[_0x144a40];
          if (
            !_0x537156 ||
            _0x144a40 === f[_0x4ef2ee(0x11c6)] ||
            _0x144a40 === f["WATER"] ||
            _0x144a40 === f["LAVA"] ||
            (!_0x537156[_0x4ef2ee(0xfdf)] &&
              !ui(_0x144a40) &&
              !Tt(_0x144a40) &&
              !js(_0x144a40) &&
              !ho(_0x144a40) &&
              _0x144a40 !== f[_0x4ef2ee(0x5b3)])
          )
            continue;
          const _0x3edb06 = bB(_0x144a40);
          if (
            (!_0x229410 && !_0x3edb06) ||
            (_0x4eaf56 > _0x152c2b && !Tt(_0x144a40))
          )
            continue;
          const _0x1494ac = Mn(_0x144a40),
            _0x64776f = Tt(_0x144a40)
              ? 0.00001
              : ui(_0x144a40)
                ? 0x2
                : _0x144a40 === f[_0x4ef2ee(0x5b3)]
                  ? 0x6
                  : _0x1494ac
                    ? HB
                    : js(_0x144a40) || ho(_0x144a40)
                      ? Math[_0x4ef2ee(0x1267)](
                          0x12,
                          _0x537156[_0x4ef2ee(0x587)] * 0.38,
                        )
                      : Math[_0x4ef2ee(0x1267)](
                          0xe,
                          _0x537156[_0x4ef2ee(0x587)] * 1.8,
                        );
          _0x7abffa[_0x4ef2ee(0x124b)]({
            x: _0x36c96c,
            y: _0x4eaf56,
            z: _0x5ec02a,
            id: _0x144a40,
            cost: _0x64776f,
            tree: _0x1494ac,
          });
        }
    }
  return (
    _0x7abffa[_0x4ef2ee(0x1dc4)](
      (_0x5c235a, _0x2e13c7) =>
        _0x5c235a[_0x4ef2ee(0x1290)] - _0x2e13c7["cost"] ||
        _0x5c235a["y"] - _0x2e13c7["y"],
    ),
    _0x7abffa
  );
}
function JN(_0x5e85d7, _0x53fbdc, _0x33f87a, _0x49a6eb, _0x3e504b, _0x3d2030) {
  const _0x293058 = _0x5d322a;
  if (!bE[_0x53fbdc]) return [];
  const {
      halfWidth: _0x4011d6,
      halfLength: _0x1fcf3c,
      height: _0x59cb30,
    } = Bl(_0x53fbdc),
    _0x5e120f = Math[_0x293058(0x363)](_0x3d2030),
    _0x2da1e3 = Math[_0x293058(0x813)](_0x3d2030),
    _0x135f90 = Math[_0x293058(0xe53)](
      Math[_0x293058(0x1400)](_0x4011d6, _0x1fcf3c) + 0.6,
    ),
    _0x4242f3 = [],
    _0x3c2e4a = Math[_0x293058(0x17b0)](_0x49a6eb - 1.05),
    _0x42ed92 = Math["floor"](_0x49a6eb + _0x59cb30 + 0.45);
  for (
    let _0x24cecb = Math[_0x293058(0x17b0)](_0x33f87a) - _0x135f90;
    _0x24cecb <= Math[_0x293058(0x17b0)](_0x33f87a) + _0x135f90;
    _0x24cecb++
  )
    for (
      let _0x417b0a = Math[_0x293058(0x17b0)](_0x3e504b) - _0x135f90;
      _0x417b0a <= Math[_0x293058(0x17b0)](_0x3e504b) + _0x135f90;
      _0x417b0a++
    ) {
      const _0x230238 = _0x24cecb + 0.5 - _0x33f87a,
        _0x1dc90a = _0x417b0a + 0.5 - _0x3e504b;
      if (!(
        Math["abs"](_0x230238 * _0x5e120f - _0x1dc90a * _0x2da1e3) >
          _0x4011d6 + 0.6 ||
        Math[_0x293058(0x7a3)](_0x230238 * _0x2da1e3 + _0x1dc90a * _0x5e120f) >
          _0x1fcf3c + 0.6
      ))
        for (let _0x3b458a = _0x3c2e4a; _0x3b458a <= _0x42ed92; _0x3b458a++) {
          const _0x39503d = _0x5e85d7[_0x293058(0x4f7)](
            _0x24cecb,
            _0x3b458a,
            _0x417b0a,
          );
          Tt(_0x39503d) &&
            _0x4242f3[_0x293058(0x124b)]({
              x: _0x24cecb,
              y: _0x3b458a,
              z: _0x417b0a,
              id: _0x39503d,
              cost: 0.00001,
              tree: !0x1,
            });
        }
    }
  return _0x4242f3;
}
const UB = {
    peace: 0x0,
    easy: 0.24,
    medium: 0.42,
    hard: 0.62,
    hardcore: 0.76,
    "ultra-hardcore": 0.87,
    "unreal-hardcore": 0.95,
  },
  WB = {
    peace: 0x0,
    easy: 0.38,
    medium: 0.46,
    hard: 0.56,
    hardcore: 0.66,
    "ultra-hardcore": 0.76,
    "unreal-hardcore": 0.86,
  };
function VB(_0x1a6b61, _0x42944c, _0x480eaa = !0x1) {
  return _0x42944c ? UB[_0x1a6b61] * (_0x480eaa ? WB[_0x1a6b61] : 0x1) : 0.44;
}
const G_ = new cn(),
  bm = new ye(),
  QN = new Map();
for (const e of [I["FIGHTER_JET"], I[_0x5d322a(0xb63)], I[_0x5d322a(0x152d)]]) {
  const t = [];
  for (const n of Qn[e])
    for (let o = 0x0; o <= 0x2; o++)
      for (let s = 0x0; s <= 0x2; s++)
        for (const i of [n[_0x5d322a(0x48a)]["y"], n[_0x5d322a(0x1267)]["y"]])
          t[_0x5d322a(0x124b)](
            new ye(
              n[_0x5d322a(0x48a)]["x"] +
                ((n[_0x5d322a(0x1267)]["x"] - n["min"]["x"]) * o) / 0x2,
              i,
              n[_0x5d322a(0x48a)]["z"] +
                ((n[_0x5d322a(0x1267)]["z"] - n[_0x5d322a(0x48a)]["z"]) * s) /
                  0x2,
            ),
          );
  QN[_0x5d322a(0x124)](e, t);
}
function YB(_0x226226, _0x3dc10f, _0x17d402 = _0x226226, _0x433664) {
  const _0x55e40e = _0x5d322a,
    _0x1659b9 = QN[_0x55e40e(0x11b7)](_0x226226["type"]);
  if (!_0x1659b9) return !0x1;
  const _0x4e03c0 = BE(_0x226226["type"]);
  if (
    _0x433664 &&
    Math[_0x55e40e(0x48a)](_0x226226["y"], _0x17d402["y"]) - _0x4e03c0 >=
      _0x433664(
        Math["min"](_0x226226["x"], _0x17d402["x"]) - _0x4e03c0,
        Math["min"](_0x226226["z"], _0x17d402["z"]) - _0x4e03c0,
        Math[_0x55e40e(0x1267)](_0x226226["x"], _0x17d402["x"]) + _0x4e03c0,
        Math[_0x55e40e(0x1267)](_0x226226["z"], _0x17d402["z"]) + _0x4e03c0,
      )
  )
    return !0x1;
  G_[_0x55e40e(0x124)](
    _0x226226["qx"],
    _0x226226["qy"],
    _0x226226["qz"],
    _0x226226["qw"],
  );
  const _0x5c581f = Math["max"](
    0x1,
    Math["min"](
      0x100,
      Math[_0x55e40e(0xe53)](
        Math[_0x55e40e(0x1400)](
          _0x226226["x"] - _0x17d402["x"],
          _0x226226["y"] - _0x17d402["y"],
          _0x226226["z"] - _0x17d402["z"],
        ) / 0.4,
      ),
    ),
  );
  for (const _0xaa3633 of _0x1659b9) {
    bm[_0x55e40e(0x1179)](_0xaa3633)[_0x55e40e(0xe4d)](G_);
    for (let _0x345432 = 0x0; _0x345432 <= _0x5c581f; _0x345432++) {
      const _0x167594 = _0x345432 / _0x5c581f,
        _0x43e951 = _0x3dc10f(
          Math["floor"](
            _0x17d402["x"] +
              (_0x226226["x"] - _0x17d402["x"]) * _0x167594 +
              bm["x"],
          ),
          Math[_0x55e40e(0x17b0)](
            _0x17d402["y"] +
              (_0x226226["y"] - _0x17d402["y"]) * _0x167594 +
              bm["y"],
          ),
          Math[_0x55e40e(0x17b0)](
            _0x17d402["z"] +
              (_0x226226["z"] - _0x17d402["z"]) * _0x167594 +
              bm["z"],
          ),
        );
      if (
        _0x43e951 === f[_0x55e40e(0x1bb5)] ||
        _0x43e951 === f[_0x55e40e(0xd36)]
      )
        return !0x0;
    }
  }
  return !0x1;
}
const qB = 0xa,
  jB = 0.65,
  XB = 1.35,
  ZB = 0.2,
  JB = 0x2,
  QB = 0x3,
  eP = 0x1e,
  tP = 0x5,
  xA = { blast: 0x6e, fall: 0x64, any: 0xfa };
function nP(_0x9bf107, _0x6bd059) {
  const _0x20cfee = _0x5d322a;
  return (
    _0x6bd059 >= xA[_0x20cfee(0x913)] ||
    (_0x9bf107 === _0x20cfee(0x1188) && _0x6bd059 >= xA[_0x20cfee(0x1d86)]) ||
    (_0x9bf107 === _0x20cfee(0xe74) && _0x6bd059 >= xA[_0x20cfee(0xe74)])
  );
}
