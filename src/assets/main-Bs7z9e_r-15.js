// main-Bs7z9e_r 15 — x5d322a
// Lines 4274-4534 of readable/assets/main-Bs7z9e_r.pretty.js (statement-aligned).
const DL = new Set([
    f["CHEST"],
    f["MILITARY_CHEST"],
    f["BARREL"],
    f["SARCOPHAGUS"],
    f["COFFIN"],
  ]),
  sa = (_0x1d1595) => DL["has"](_0x1d1595),
  Zw = new Set([
    f[_0x5d322a(0x1328)],
    f[_0x5d322a(0x17f0)],
    f[_0x5d322a(0x1f1d)],
    f[_0x5d322a(0xd2b)],
    f[_0x5d322a(0x15b1)],
    f["IRON_FENCE"],
  ]),
  js = (_0x1460bc) => Zw["has"](_0x1460bc),
  Jw = new Set([
    f[_0x5d322a(0xb83)],
    f[_0x5d322a(0x473)],
    f[_0x5d322a(0x1909)],
    f[_0x5d322a(0x1e0d)],
    f[_0x5d322a(0x1db0)],
  ]),
  ho = (_0x5ada49) => Jw["has"](_0x5ada49),
  BL = new Set([
    f["LADDER"],
    f["STAIR_WOOD"],
    f["STAIR_STONE"],
    f["STAIR_SANDSTONE"],
    f["STAIR_COBBLE"],
    f[_0x5d322a(0xa2c)],
    f["STAIR_STONE_BRICKS"],
    f[_0x5d322a(0x16a2)],
    f[_0x5d322a(0x148a)],
    f["STAIR_DARK"],
    ...Zw,
    ...Jw,
  ]),
  o1 = (_0x2e852) => BL[_0x5d322a(0x448)](_0x2e852),
  YR = new Set([
    f["SAPLING"],
    f["TROPICAL_SAPLING"],
    f[_0x5d322a(0x494)],
    f[_0x5d322a(0x1076)],
    f["SAKURA_SAPLING"],
    f["AUTUMN_SAPLING"],
  ]),
  jg = [f[_0x5d322a(0x70f)], f["AUTUMN_LEAVES_RED"], f[_0x5d322a(0x128b)]],
  PL = new Set([
    f[_0x5d322a(0xa17)],
    f[_0x5d322a(0x8ff)],
    f[_0x5d322a(0x7ff)],
    f[_0x5d322a(0xed2)],
    f["SAKURA_LEAVES"],
    ...jg,
  ]),
  HL = new Set([
    f[_0x5d322a(0xae3)],
    f[_0x5d322a(0xb2b)],
    f[_0x5d322a(0x1b5d)],
    f["PINE_LOG"],
    f["SAKURA_LOG"],
    f["BIRCH_LOG"],
    f[_0x5d322a(0x67f)],
  ]);
function bL(_0x5eff4a) {
  const _0x500ddf = _0x5d322a;
  switch (_0x5eff4a) {
    case f["TROPICAL_LOG"]:
      return [f[_0x500ddf(0x8ff)]];
    case f[_0x500ddf(0x1b5d)]:
      return [f["DESERT_LEAVES"]];
    case f["PINE_LOG"]:
      return [f[_0x500ddf(0xed2)]];
    case f[_0x500ddf(0x1148)]:
      return [f[_0x500ddf(0x1a3f)]];
    case f["BIRCH_LOG"]:
      return [f["AUTUMN_LEAVES_YELLOW"], f[_0x500ddf(0xa17)]];
    case f[_0x500ddf(0x67f)]:
      return [];
    default:
      return [f["LEAVES"], f[_0x500ddf(0x70f)], f[_0x500ddf(0x12ec)]];
  }
}
function GL(_0x253688) {
  const _0x3aa123 = _0x5d322a;
  switch (_0x253688) {
    case f[_0x3aa123(0x8ff)]:
      return f["TROPICAL_SAPLING"];
    case f[_0x3aa123(0x7ff)]:
      return f["DESERT_SAPLING"];
    case f[_0x3aa123(0xed2)]:
      return f["PINE_SAPLING"];
    case f[_0x3aa123(0x1a3f)]:
      return f[_0x3aa123(0x1cc0)];
    case f[_0x3aa123(0x70f)]:
    case f[_0x3aa123(0x12ec)]:
    case f[_0x3aa123(0x128b)]:
      return f[_0x3aa123(0xe88)];
    default:
      return f[_0x3aa123(0x1a1e)];
  }
}
const qR = new Set([
    f[_0x5d322a(0x101)],
    f[_0x5d322a(0x1bc6)],
    f[_0x5d322a(0x62c)],
  ]),
  Qw = new Set([f["POTATO_SPROUT"], f[_0x5d322a(0x1394)], f[_0x5d322a(0xa8e)]]),
  eN = new Set([f["CARROT_SPROUT"], f["CARROT_YOUNG"], f["CARROT_CROP"]]),
  tN = new Set([f["PUMPKIN_SPROUT"], f[_0x5d322a(0x10c7)], f["PUMPKIN_CROP"]]),
  jR = new Set([...qR, ...Qw, ...eN, ...tN, ..._E]),
  Wa = (_0x427048) => jR["has"](_0x427048),
  FL = {
    [f[_0x5d322a(0x101)]]: [
      f[_0x5d322a(0x101)],
      f[_0x5d322a(0x1bc6)],
      f[_0x5d322a(0x62c)],
    ],
    [f[_0x5d322a(0x1fab)]]: [
      f["POTATO_SPROUT"],
      f["POTATO_YOUNG"],
      f[_0x5d322a(0xa8e)],
    ],
    [f[_0x5d322a(0x1bb9)]]: [
      f["CARROT_SPROUT"],
      f[_0x5d322a(0x1a9b)],
      f["CARROT_CROP"],
    ],
    [f[_0x5d322a(0x121d)]]: [
      f[_0x5d322a(0x121d)],
      f[_0x5d322a(0x10c7)],
      f[_0x5d322a(0x617)],
    ],
    ...Object["fromEntries"](
      fd["map"]((_0x4f2a42) => [
        _0x4f2a42[_0x5d322a(0x1e10)][0x0],
        [..._0x4f2a42["stages"]],
      ]),
    ),
  },
  f0 = (_0x26245d) =>
    _0x26245d === f[_0x5d322a(0xbcb)] || _0x26245d === f["FARMLAND"],
  $L = (_0x37b95e) =>
    _0x37b95e === f["GRASS"] ||
    _0x37b95e === f[_0x5d322a(0xbcb)] ||
    _0x37b95e === f[_0x5d322a(0x1143)],
  Xg = (_0x7be055) => (ep(_0x7be055) ? $L : f0),
  KL = new Set([
    ...YR,
    f[_0x5d322a(0xe1f)],
    f["DESERT_GRASS"],
    f[_0x5d322a(0xee7)],
    f[_0x5d322a(0x1c28)],
    f["FLOWER_BLUE"],
    f[_0x5d322a(0x73c)],
    f["FLOWER_YELLOW"],
    f[_0x5d322a(0x36e)],
    ...qR,
    ...Qw,
    ...eN,
    ...tN,
    f[_0x5d322a(0x612)],
    f["MUSHROOM"],
    f["LEAF_LITTER"],
    ..._E,
    ...qw,
  ]),
  ui = (_0x747802) => KL[_0x5d322a(0x448)](_0x747802),
  ac = (_0x331907) => YR[_0x5d322a(0x448)](_0x331907),
  xu = (_0x443a63) =>
    _0x443a63 === f[_0x5d322a(0x8c2)] ||
    _0x443a63 === f["RADIO_RELAY"] ||
    _0x443a63 === f[_0x5d322a(0xbad)],
  Tt = (_0x2727e0) => PL["has"](_0x2727e0),
  Mn = (_0x155efe) => HL["has"](_0x155efe),
  UL = (_0x4e5305) => qR[_0x5d322a(0x448)](_0x4e5305),
  Kr = 0x8,
  WL = 0x7;
function VL(
  _0x47854c,
  _0xd1777,
  _0x41110f,
  _0x1b4511,
  _0x2a42b5 = f[_0x5d322a(0x1bb5)],
) {
  const _0x4b8840 = _0x5d322a;
  if (_0x47854c[_0x4b8840(0x4f7)](_0xd1777, _0x41110f, _0x1b4511) !== _0x2a42b5)
    return [0x0, 0x0, 0x0];
  const _0x476322 = _0x47854c[_0x4b8840(0x1dfa)](
      _0xd1777,
      _0x41110f,
      _0x1b4511,
    ),
    _0x2ac524 = _0x476322 & 0x7;
  let _0x3e9dfb = 0x0,
    _0x8e4f53 = 0x0;
  for (const [_0x1dddb4, _0x2fbc38] of [
    [0x1, 0x0],
    [-0x1, 0x0],
    [0x0, 0x1],
    [0x0, -0x1],
  ]) {
    const _0x418a0a = _0x47854c[_0x4b8840(0x4f7)](
      _0xd1777 + _0x1dddb4,
      _0x41110f,
      _0x1b4511 + _0x2fbc38,
    );
    if (_0x418a0a === _0x2a42b5) {
      const _0x5dac0f =
        (_0x47854c["getMeta"](
          _0xd1777 + _0x1dddb4,
          _0x41110f,
          _0x1b4511 + _0x2fbc38,
        ) &
          0x7) -
        _0x2ac524;
      ((_0x3e9dfb += _0x1dddb4 * _0x5dac0f),
        (_0x8e4f53 += _0x2fbc38 * _0x5dac0f));
    } else
      _0x418a0a === f[_0x4b8840(0x11c6)] &&
        _0x47854c[_0x4b8840(0x4f7)](
          _0xd1777 + _0x1dddb4,
          _0x41110f - 0x1,
          _0x1b4511 + _0x2fbc38,
        ) === f[_0x4b8840(0x11c6)] &&
        ((_0x3e9dfb += _0x1dddb4 * (0x8 - _0x2ac524)),
        (_0x8e4f53 += _0x2fbc38 * (0x8 - _0x2ac524)));
  }
  const _0x2c5d7e = Math[_0x4b8840(0x1400)](_0x3e9dfb, _0x8e4f53);
  return (
    _0x2c5d7e > 0.001 && ((_0x3e9dfb /= _0x2c5d7e), (_0x8e4f53 /= _0x2c5d7e)),
    [_0x3e9dfb, _0x476322 & Kr ? -0x1 : 0x0, _0x8e4f53]
  );
}
const XR = (_0x5bccf7, _0x37336f) =>
    _0x5bccf7 === f[_0x5d322a(0xe6d)]
      ? _0x37336f & ot
        ? 0x0
        : 0x7
      : _0x5bccf7 === f[_0x5d322a(0x1495)]
        ? _0x37336f & ot
          ? 0xf
          : 0x0
        : _0x5bccf7 === f[_0x5d322a(0x7b9)]
          ? Ww(_0x37336f) > 0x0
            ? 0x2
            : 0x0
          : _0x5bccf7 === f["FURNACE"]
            ? _0x37336f & ot
              ? 0xd
              : 0x0
            : Q[_0x5bccf7][_0x5d322a(0x140b)],
  Rc = new Uint8Array(0x100);
for (const e of Q) Rc[e["id"]] = e[_0x5d322a(0x140b)];
((Rc[f[_0x5d322a(0x1495)]] = 0xf),
  (Rc[f[_0x5d322a(0x7b9)]] = 0x2),
  (Rc[f[_0x5d322a(0x2c8)]] = 0xd),
  (Rc[f[_0x5d322a(0x36e)]] = 0xf),
  (Rc[f[_0x5d322a(0xd36)]] = 0xf));
