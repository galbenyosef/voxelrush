// main-C153VVJY 53 — x44a014
// Lines 16254-16387 of readable/assets/main-C153VVJY.pretty.js (statement-aligned).
function uP(_0x21788b, _0xa3b0e2, _0x57aea4, _0x5ddbd3) {
  const _0xba311e = _0x44a014,
    _0x301304 = _0x57aea4 * U - 0x7,
    _0xb1936d = (_0x57aea4 + 0x1) * U - 0x1 + 0x7,
    _0x2c7455 = _0x5ddbd3 * U - 0x7,
    _0x4af709 = (_0x5ddbd3 + 0x1) * U - 0x1 + 0x7,
    _0x17ec43 = Math[_0xba311e(0x2f3)](_0x301304 / jc),
    _0x23adf6 = Math["floor"](_0xb1936d / jc),
    _0x52a8f3 = Math[_0xba311e(0x2f3)](_0x2c7455 / jc),
    _0x5c3a77 = Math["floor"](_0x4af709 / jc);
  for (let _0x54d4b8 = _0x17ec43; _0x54d4b8 <= _0x23adf6; _0x54d4b8++)
    for (let _0x115037 = _0x52a8f3; _0x115037 <= _0x5c3a77; _0x115037++) {
      const _0x2a6465 = nk(_0xa3b0e2, _0x54d4b8, _0x115037);
      if (
        _0x2a6465["x"] < _0x301304 ||
        _0x2a6465["x"] > _0xb1936d ||
        _0x2a6465["z"] < _0x2c7455 ||
        _0x2a6465["z"] > _0x4af709
      )
        continue;
      const _0x36f396 = gs(_0xa3b0e2, _0x2a6465["x"], _0x2a6465["z"]);
      if (!fP(_0xa3b0e2, _0x2a6465, _0x36f396)) continue;
      const _0xe3c7ce = cP(_0xa3b0e2, _0x2a6465["x"], _0x2a6465["z"]);
      if (
        _0xe3c7ce <= Qt + (_0x36f396 === _0xba311e(0x1b5b) ? 0x0 : 0x1) ||
        _0xe3c7ce >= yt - 0x1d
      )
        continue;
      const _0x32f8ab = Xd(_0xa3b0e2, _0x2a6465["x"], _0x2a6465["z"]);
      (_0x32f8ab &&
        (![l[_0xba311e(0x17f3)], l[_0xba311e(0x251)]]["includes"](
          ek(_0x32f8ab, _0x2a6465["x"], _0x2a6465["z"], _0xe3c7ce),
        ) ||
          _0xe3c7ce < sx(_0x32f8ab, _0x2a6465["x"], _0x2a6465["z"]))) ||
        hP(
          _0x21788b,
          _0xa3b0e2,
          _0x57aea4,
          _0x5ddbd3,
          _0x2a6465,
          _0x36f396,
          _0xe3c7ce,
        );
    }
}
const dP = {
    savanna: 0x3a,
    yellowstone: 0xd,
    volcanic: 0x0,
    alpine: 0x5,
    oasis: 0xa,
    islands: 0x11,
    plains: 0x14,
    forest: 0xf,
    jungle: 0x26,
    winter: 0x6,
    mountains: 0x4,
    desert: 0xa,
    ocean: 0x0,
    autumn: 0x2c,
  },
  mP = {
    savanna: 0.015,
    yellowstone: 0.12,
    volcanic: 0x0,
    alpine: 0.18,
    oasis: 0.08,
    islands: 0.1,
    plains: 0.16,
    forest: 0.1,
    jungle: 0.07,
    winter: 0.06,
    mountains: 0.05,
    desert: 0x0,
    ocean: 0x0,
    autumn: 0.05,
  },
  pP = {
    savanna: [l["FLOWER_YELLOW"]],
    yellowstone: [l["FLOWER_YELLOW"], l["FLOWER_WHITE"]],
    volcanic: [],
    alpine: [l[_0x44a014(0x363)]],
    oasis: [l[_0x44a014(0xa56)]],
    islands: [l["FLOWER_PINK"]],
    plains: [
      l[_0x44a014(0x588)],
      l[_0x44a014(0x1af4)],
      l[_0x44a014(0xa56)],
      l[_0x44a014(0xb05)],
    ],
    forest: [l[_0x44a014(0x363)], l["FLOWER_WHITE"], l[_0x44a014(0xb05)]],
    jungle: [l["FLOWER_PINK"], l["FLOWER_RED"], l[_0x44a014(0x1af4)]],
    winter: [l[_0x44a014(0xa56)], l[_0x44a014(0x363)]],
    mountains: [l[_0x44a014(0x363)], l[_0x44a014(0xa56)]],
    autumn: [l[_0x44a014(0x1af4)], l[_0x44a014(0xa56)]],
    desert: [],
    ocean: [],
  },
  EP = {
    savanna: [],
    yellowstone: [l[_0x44a014(0x116c)], l[_0x44a014(0x7d8)]],
    volcanic: [],
    alpine: [l["BLUEBERRY_BUSH_RIPE"]],
    oasis: [],
    islands: [l[_0x44a014(0x2032)]],
    plains: [l[_0x44a014(0x116c)], l["BLACKBERRY_BUSH_RIPE"]],
    forest: [
      l[_0x44a014(0x116c)],
      l["BLUEBERRY_BUSH_RIPE"],
      l[_0x44a014(0x2032)],
    ],
    jungle: [l[_0x44a014(0x2032)], l[_0x44a014(0x116c)]],
    winter: [l["BLUEBERRY_BUSH_RIPE"]],
    mountains: [l["BLUEBERRY_BUSH_RIPE"]],
    autumn: [l[_0x44a014(0x2032)], l[_0x44a014(0x116c)]],
    desert: [],
    ocean: [],
  },
  yP = {
    savanna: 0x0,
    yellowstone: 0.07,
    volcanic: 0x0,
    alpine: 0.05,
    oasis: 0x0,
    islands: 0.06,
    plains: 0.05,
    forest: 0.12,
    jungle: 0.09,
    winter: 0.06,
    mountains: 0.05,
    desert: 0x0,
    ocean: 0x0,
    autumn: 0.04,
  };
