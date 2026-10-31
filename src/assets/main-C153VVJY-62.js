// main-C153VVJY 62 — x44a014
// Lines 19974-20062 of readable/assets/main-C153VVJY.pretty.js (statement-aligned).
function bS(_0x56d0f0) {
  const _0x1c6ee3 = _0x44a014,
    _0xa9bfce = wh(_0x56d0f0, "en"),
    _0x3d8d1c = {
      а: "a",
      б: "b",
      в: "v",
      г: "g",
      д: "d",
      е: "e",
      ё: "yo",
      ж: "zh",
      з: "z",
      и: "i",
      й: "y",
      к: "k",
      л: "l",
      м: "m",
      н: "n",
      о: "o",
      п: "p",
      р: "r",
      с: "s",
      т: "t",
      у: "u",
      ф: "f",
      х: "kh",
      ц: "ts",
      ч: "ch",
      ш: "sh",
      щ: _0x1c6ee3(0x3ae),
      ъ: "",
      ы: "y",
      ь: "",
      э: "e",
      ю: "yu",
      я: "ya",
    };
  return _0xa9bfce[_0x1c6ee3(0x1e42)](/[а-яё]/gi, (_0x38ec57) => {
    const _0x574e4d = _0x1c6ee3,
      _0x24048e = _0x3d8d1c[_0x38ec57[_0x574e4d(0x182e)]()];
    return _0x38ec57 === _0x38ec57[_0x574e4d(0x728)]()
      ? _0x24048e[_0x574e4d(0xca1)](0x0)[_0x574e4d(0x728)]() +
          _0x24048e[_0x574e4d(0x473)](0x1)
      : _0x24048e;
  });
}
const JP = new Set([
  "objective",
  _0x44a014(0x1180),
  _0x44a014(0x547),
  _0x44a014(0x1c08),
  _0x44a014(0x1178),
  _0x44a014(0x67a),
  _0x44a014(0x6b8),
  _0x44a014(0x1f93),
  "activity",
  _0x44a014(0x1efb),
  _0x44a014(0x19b8),
  _0x44a014(0x15e7),
  "cityProgress",
  _0x44a014(0xbd0),
  _0x44a014(0xc9b),
  _0x44a014(0x16a5),
  _0x44a014(0x163a),
  _0x44a014(0x1ed0),
  _0x44a014(0x332),
]);
function Sy(_0x351e67, _0x4747aa, _0x28ab90 = "") {
  const _0x3ba4d7 = _0x44a014;
  return typeof _0x351e67 == "string"
    ? JP[_0x3ba4d7(0x97a)](_0x28ab90)
      ? wh(_0x351e67, _0x4747aa)
      : _0x351e67
    : Array[_0x3ba4d7(0x15c7)](_0x351e67)
      ? _0x351e67[_0x3ba4d7(0x73a)]((_0x4a3539) =>
          Sy(_0x4a3539, _0x4747aa, _0x28ab90),
        )
      : _0x351e67 && typeof _0x351e67 == _0x3ba4d7(0xa3f)
        ? Object["fromEntries"](
            Object["entries"](_0x351e67)[_0x3ba4d7(0x73a)](
              ([_0x3d5116, _0x239707]) => [
                _0x3d5116,
                Sy(_0x239707, _0x4747aa, _0x3d5116),
              ],
            ),
          )
        : _0x351e67;
}
