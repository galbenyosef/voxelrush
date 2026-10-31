// main-Bs7z9e_r 04 — x3ac6b0
// Lines 940-963 of readable/assets/main-Bs7z9e_r.pretty.js (statement-aligned).
function ic(_0x59c5e6) {
  const _0x504cd6 = _0x5d322a;
  let _0x1d87a8 = 0x0,
    _0x267046 = 0x0,
    _0x572bc9 = 0x0,
    _0x267788 = 0x0;
  for (const _0x15aa77 of _0x59c5e6) {
    const _0x3ac6b0 = xl[_0x15aa77];
    _0x3ac6b0 &&
      ((_0x1d87a8 += _0x3ac6b0[_0x504cd6(0xbcd)]),
      (_0x267046 += _0x3ac6b0["bulletResist"]),
      (_0x572bc9 += _0x3ac6b0[_0x504cd6(0x1f8)]),
      (_0x267788 += _0x3ac6b0[_0x504cd6(0x15cf)]));
  }
  return {
    bonusHp: _0x1d87a8,
    bulletResist: Math["min"](0.78, _0x267046),
    explodeResist: Math[_0x504cd6(0x48a)](0.72, _0x572bc9),
    fallResist: Math[_0x504cd6(0x48a)](0.55, _0x267788),
  };
}
function V2(_0x16a895) {
  return X0 + ic(_0x16a895)["bonusHp"];
}
