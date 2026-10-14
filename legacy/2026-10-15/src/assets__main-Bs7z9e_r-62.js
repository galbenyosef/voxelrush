// assets__main-Bs7z9e_r 62 — x5d322a
// Lines 19533-19852 of readable/assets__main-Bs7z9e_r.pretty.js (statement-aligned).
function rp(_0x2edd09) {
  const _0x13c3aa = _0x5d322a;
  switch (_0x2edd09) {
    case I[_0x13c3aa(0x16c0)]:
      return 0x5;
    case I[_0x13c3aa(0xb63)]:
      return 0x6;
    case I[_0x13c3aa(0xc54)]:
      return 0x7;
    case I[_0x13c3aa(0x152d)]:
      return 0x4;
    case I[_0x13c3aa(0x626)]:
      return 0x4;
    case I[_0x13c3aa(0xe12)]:
    case I[_0x13c3aa(0x9f3)]:
      return 0x4;
    case I[_0x13c3aa(0x1ec7)]:
      return 0x3;
    case I[_0x13c3aa(0x6bd)]:
      return 0x2;
    case I[_0x13c3aa(0x1bd0)]:
      return 0x2;
    case I["DRONE"]:
      return 0.5;
    case I["CARRIER"]:
    case I["SUBMARINE"]:
      return 0xf;
    default:
      return 0x2;
  }
}
const e_ = (_0x473871) => Math[_0x5d322a(0xa70)](rp(_0x473871) * kv);
function IN(_0x147e94, _0x41601c, _0x233573, _0x344423 = 0.5) {
  const _0x3322a5 = _0x5d322a,
    _0x5e4898 = [];
  for (const [_0x1a154f, _0x1f8af4] of _0x147e94) {
    if (_0x1a154f === _0x41601c) continue;
    const _0x34782e = Math[_0x3322a5(0x48a)](
      0x1,
      _0x1f8af4 / Math[_0x3322a5(0x1267)](0x1, _0x233573),
    );
    _0x34782e >= 0.1 &&
      _0x5e4898[_0x3322a5(0x124b)]({
        who: _0x1a154f,
        share: _0x34782e * _0x344423,
      });
  }
  return _0x5e4898;
}
const rM = 0x12c,
  zv = 0x4,
  ap = [
    { name: _0x5d322a(0x17dc), nameEn: _0x5d322a(0x1249), minXp: 0x0 },
    { name: "Рядовой", nameEn: _0x5d322a(0xbbc), minXp: 0x64 },
    { name: _0x5d322a(0xc6c), nameEn: "Corporal", minXp: 0x12c },
    { name: "Младший\x20сержант", nameEn: _0x5d322a(0x1a9), minXp: 0x258 },
    { name: _0x5d322a(0x1f23), nameEn: "Sergeant", minXp: 0x3e8 },
    { name: _0x5d322a(0xc5b), nameEn: _0x5d322a(0x910), minXp: 0x5dc },
    { name: _0x5d322a(0x1cc7), nameEn: _0x5d322a(0x36c), minXp: 0x898 },
    { name: _0x5d322a(0x1b11), nameEn: _0x5d322a(0x4cf), minXp: 0xbb8 },
    { name: _0x5d322a(0x4d1), nameEn: "Lieutenant", minXp: 0xfa0 },
    { name: _0x5d322a(0xcb4), nameEn: _0x5d322a(0x1c09), minXp: 0x157c },
    { name: _0x5d322a(0x16bf), nameEn: "Major", minXp: 0x1d4c },
    { name: "Полковник", nameEn: _0x5d322a(0x178f), minXp: 0x2710 },
    { name: _0x5d322a(0x9a6), nameEn: _0x5d322a(0xd1f), minXp: 0x3a98 },
  ];
function t_(_0x29669) {
  const _0x2a292a = _0x5d322a;
  let _0x473689 = ap[0x0];
  for (const _0x5bdb44 of ap) {
    if (_0x29669 < _0x5bdb44[_0x2a292a(0x1d39)]) break;
    _0x473689 = _0x5bdb44;
  }
  return _0x473689;
}
const kN = { en: new Map(), ru: new Map() },
  zN = { en: [], ru: [] },
  wm = { en: new Map(), ru: new Map() },
  Lv = (_0x5127a3) =>
    _0x5127a3["replace"](/[.*+?^${}()|[\]\\]/g, _0x5d322a(0xc44)),
  aM = (_0x7a6799) =>
    _0x7a6799["replace"](
      new RegExp("\x5cp{Extended_Pictographic}\x5cuFE0F?\x5cs?", "gu"),
      "",
    )[_0x5d322a(0x219)](/\uFE0F/g, ""),
  V1 = wv["map"](([_0x470e90, _0xe28ba9]) => [_0x470e90, _0xe28ba9]);
for (const [e, t] of Object["entries"](Qi)) V1["push"]([t, vf[Number(e)]]);
for (const [e, t] of Object[_0x5d322a(0x1127)](Ls))
  V1[_0x5d322a(0x124b)]([t, bg[Number(e)]]);
for (const e of Q)
  e[_0x5d322a(0x1d09)] &&
    e[_0x5d322a(0xb74)] &&
    V1["push"]([e[_0x5d322a(0x1d09)], e[_0x5d322a(0xb74)]]);
for (const e of ap)
  V1[_0x5d322a(0x124b)]([e[_0x5d322a(0x177)], e[_0x5d322a(0x1351)]]);
for (const [e, t] of V1[_0x5d322a(0x1dc4)](
  (_0x44a7b1, _0x333194) =>
    Math[_0x5d322a(0x1267)](
      _0x333194[0x0]["length"],
      _0x333194[0x1][_0x5d322a(0x18ce)],
    ) -
    Math[_0x5d322a(0x1267)](
      _0x44a7b1[0x0]["length"],
      _0x44a7b1[0x1][_0x5d322a(0x18ce)],
    ),
))
  if (!(!e || !t || e === t))
    for (const n of ["en", "ru"]) {
      const o = n === "en" ? t : e,
        s = n === "en" ? e : t;
      if (!/\{\d+\}/["test"](o)) {
        kN[n][_0x5d322a(0x124)](o, s);
        continue;
      }
      const i = [],
        r = o[_0x5d322a(0xdea)](/(\{\d+\})/g)
          [_0x5d322a(0x164b)]((_0x3668d5) =>
            /^\{\d+\}$/["test"](_0x3668d5)
              ? (i[_0x5d322a(0x124b)](
                  Number(_0x3668d5[_0x5d322a(0x1cf4)](0x1, -0x1)),
                ),
                _0x5d322a(0xcb9))
              : Lv(_0x3668d5),
          )
          ["join"]("");
      zN[n][_0x5d322a(0x124b)]({
        expression: new RegExp("^" + r + "$"),
        target: s,
        slots: i,
      });
    }
function Mf(_0x118bfc, _0x604fa6 = "en", _0x1ed20c = 0x0) {
  const _0x4e4c97 = _0x5d322a;
  if (
    !_0x118bfc ||
    ((_0x118bfc = aM(_0x118bfc)),
    _0x604fa6 === "en" && !/[а-яё]/i["test"](_0x118bfc))
  )
    return _0x118bfc;
  const _0x2aaf09 = kN[_0x604fa6][_0x4e4c97(0x11b7)](_0x118bfc);
  if (_0x2aaf09 !== void 0x0) return _0x2aaf09;
  const _0x1b4736 = wm[_0x604fa6][_0x4e4c97(0x11b7)](_0x118bfc);
  if (_0x1b4736 !== void 0x0) return _0x1b4736;
  let _0x399bd1 = _0x118bfc;
  if (_0x1ed20c < 0x5)
    for (const {
      expression: _0x4e951b,
      target: _0x24ac1f,
      slots: _0x403b64,
    } of zN[_0x604fa6]) {
      const _0x5201e1 = _0x4e951b[_0x4e4c97(0xfec)](_0x118bfc);
      if (!_0x5201e1) continue;
      const _0x563418 = new Map(
        _0x403b64[_0x4e4c97(0x164b)]((_0x43b07a, _0x113e41) => [
          _0x43b07a,
          Mf(_0x5201e1[_0x113e41 + 0x1], _0x604fa6, _0x1ed20c + 0x1),
        ]),
      );
      _0x399bd1 = _0x24ac1f["replace"](
        /\{(\d+)\}/g,
        (_0x202ada, _0xf40f8f) =>
          _0x563418[_0x4e4c97(0x11b7)](Number(_0xf40f8f)) ?? _0x202ada,
      );
      break;
    }
  return (
    _0x399bd1 === _0x118bfc &&
      _0x1ed20c < 0x5 &&
      /\n| · |, /[_0x4e4c97(0x77e)](_0x118bfc) &&
      (_0x399bd1 = _0x118bfc["split"](/(\n| · |, )/)
        [_0x4e4c97(0x164b)]((_0x898dbd) =>
          /^(\n| · |, )$/["test"](_0x898dbd)
            ? _0x898dbd
            : Mf(_0x898dbd, _0x604fa6, _0x1ed20c + 0x1),
        )
        [_0x4e4c97(0x1d54)]("")),
    wm[_0x604fa6][_0x4e4c97(0xe0d)] > 0x800 && wm[_0x604fa6]["clear"](),
    wm[_0x604fa6][_0x4e4c97(0x124)](_0x118bfc, _0x399bd1),
    _0x399bd1
  );
}
function _0x3e87(_0x2c6d73, _0xb4592d) {
  _0x2c6d73 = _0x2c6d73 - 0xc3;
  const _0x4d0348 = _0x4d03();
  let _0x3e8700 = _0x4d0348[_0x2c6d73];
  if (_0x3e87["roUSUB"] === undefined) {
    var _0x32fca2 = function (_0x58ff32) {
      const _0x1578da =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let _0x18b622 = "",
        _0x4a80b7 = "";
      for (
        let _0x24f3ac = 0x0, _0x28f931, _0x3c0341, _0x2a0da1 = 0x0;
        (_0x3c0341 = _0x58ff32["charAt"](_0x2a0da1++));
        ~_0x3c0341 &&
        ((_0x28f931 =
          _0x24f3ac % 0x4 ? _0x28f931 * 0x40 + _0x3c0341 : _0x3c0341),
        _0x24f3ac++ % 0x4)
          ? (_0x18b622 += String["fromCharCode"](
              0xff & (_0x28f931 >> ((-0x2 * _0x24f3ac) & 0x6)),
            ))
          : 0x0
      ) {
        _0x3c0341 = _0x1578da["indexOf"](_0x3c0341);
      }
      for (
        let _0x41e4f = 0x0, _0x357c9f = _0x18b622["length"];
        _0x41e4f < _0x357c9f;
        _0x41e4f++
      ) {
        _0x4a80b7 +=
          "%" +
          ("00" + _0x18b622["charCodeAt"](_0x41e4f)["toString"](0x10))["slice"](
            -0x2,
          );
      }
      return decodeURIComponent(_0x4a80b7);
    };
    ((_0x3e87["vbxqkN"] = _0x32fca2),
      (_0x3e87["XEKDTL"] = {}),
      (_0x3e87["roUSUB"] = !![]));
  }
  const _0x176e3a = _0x4d0348[0x0],
    _0x3b78e2 = _0x2c6d73 + _0x176e3a,
    _0x526a87 = _0x3e87["XEKDTL"][_0x3b78e2];
  return (
    !_0x526a87
      ? ((_0x3e8700 = _0x3e87["vbxqkN"](_0x3e8700)),
        (_0x3e87["XEKDTL"][_0x3b78e2] = _0x3e8700))
      : (_0x3e8700 = _0x526a87),
    _0x3e8700
  );
}
function cM(_0x1c4475) {
  const _0x5f1252 = _0x5d322a,
    _0x4f3216 = Mf(_0x1c4475, "en"),
    _0x436e8f = {
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
      щ: _0x5f1252(0xa6a),
      ъ: "",
      ы: "y",
      ь: "",
      э: "e",
      ю: "yu",
      я: "ya",
    };
  return _0x4f3216["replace"](/[а-яё]/gi, (_0x29c166) => {
    const _0xce631e = _0x5f1252,
      _0x33b4e2 = _0x436e8f[_0x29c166[_0xce631e(0x1902)]()];
    return _0x29c166 === _0x29c166[_0xce631e(0x1ce1)]()
      ? _0x33b4e2["charAt"](0x0)[_0xce631e(0x1ce1)]() +
          _0x33b4e2[_0xce631e(0x1cf4)](0x1)
      : _0x33b4e2;
  });
}
const Cv = new Set([
  _0x5d322a(0x1500),
  _0x5d322a(0x1bec),
  _0x5d322a(0x1440),
  _0x5d322a(0x17d9),
  _0x5d322a(0x1ba5),
  _0x5d322a(0x16ff),
  _0x5d322a(0x1f45),
  _0x5d322a(0xb74),
  "activity",
  _0x5d322a(0x50a),
  "phase",
  _0x5d322a(0x1f97),
  _0x5d322a(0x1554),
  "nextRaid",
  "weapon",
  _0x5d322a(0xa26),
  _0x5d322a(0x8c0),
  _0x5d322a(0x38e),
  _0x5d322a(0xd96),
]);
function cp(_0x1d0635, _0x540f96, _0x1496d7 = "") {
  const _0x4d893c = _0x5d322a;
  return typeof _0x1d0635 == "string"
    ? Cv[_0x4d893c(0x448)](_0x1496d7)
      ? Mf(_0x1d0635, _0x540f96)
      : _0x1d0635
    : Array[_0x4d893c(0x1e0b)](_0x1d0635)
      ? _0x1d0635["map"]((_0x75e57f) => cp(_0x75e57f, _0x540f96, _0x1496d7))
      : _0x1d0635 && typeof _0x1d0635 == _0x4d893c(0x4c0)
        ? Object[_0x4d893c(0x983)](
            Object["entries"](_0x1d0635)[_0x4d893c(0x164b)](
              ([_0x4e6da4, _0x283096]) => [
                _0x4e6da4,
                cp(_0x283096, _0x540f96, _0x4e6da4),
              ],
            ),
          )
        : _0x1d0635;
}
