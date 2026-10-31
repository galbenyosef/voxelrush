// main-C153VVJY 272 — x44a014
// Lines 104684-105030 of readable/assets/main-C153VVJY.pretty.js (statement-aligned).
function dw(_0x3e9c62, _0x49f48b, _0x543d12, _0x2976b6) {
  const _0x4cd2ee = _0x44a014;
  if (
    !_0x3e9c62[_0x4cd2ee(0x161)] ||
    _0x3e9c62[_0x4cd2ee(0x1445)] !== -0x1 ||
    _0x3e9c62["mount"] !== void 0x0 ||
    _0x3e9c62["chair"]
  )
    return !0x1;
  const _0x3d865f = pt(_0x3e9c62[_0x4cd2ee(0x529)]),
    _0x18c8bf = _0x3d865f[_0x4cd2ee(0xcdd)](_0x49f48b, _0x543d12, _0x2976b6);
  if (!ep(_0x18c8bf)) return !0x1;
  const _0x12c497 = ym(_0x3e9c62["planet"], _0x49f48b, _0x543d12, _0x2976b6),
    _0x4a23b5 = Lh[_0x4cd2ee(0xda9)](_0x12c497);
  if (_0x4a23b5 !== void 0x0) {
    const _0x4735a6 = G[_0x4cd2ee(0xda9)](_0x4a23b5);
    if (
      _0x4735a6?.[_0x4cd2ee(0x1e03)] &&
      ym(
        _0x4735a6["chair"][_0x4cd2ee(0x529)],
        Math[_0x4cd2ee(0x2f3)](_0x4735a6[_0x4cd2ee(0x1e03)]["x"]),
        Math[_0x4cd2ee(0x2f3)](_0x4735a6[_0x4cd2ee(0x1e03)]["y"]),
        Math[_0x4cd2ee(0x2f3)](_0x4735a6["chair"]["z"]),
      ) === _0x12c497
    )
      return (P(0x2, _0x4cd2ee(0x7ec), _0x3e9c62), !0x1);
    Lh[_0x4cd2ee(0x367)](_0x12c497);
  }
  const _0x5dea30 = AY(
    _0x49f48b,
    _0x543d12,
    _0x2976b6,
    _0x18c8bf,
    _0x3d865f[_0x4cd2ee(0xdb5)](_0x49f48b, _0x543d12, _0x2976b6),
  );
  if (!_0x5dea30) return !0x1;
  const _0x5c2934 = {
    ..._0x5dea30,
    id: _0x18c8bf,
    meta: _0x3d865f[_0x4cd2ee(0xdb5)](_0x49f48b, _0x543d12, _0x2976b6),
    planet: _0x3e9c62[_0x4cd2ee(0x529)],
  };
  return (
    Lh[_0x4cd2ee(0x1b41)](_0x12c497, _0x3e9c62["id"]),
    (_0x3e9c62[_0x4cd2ee(0x1e03)] = _0x5c2934),
    (_0x3e9c62["x"] = _0x5dea30["x"]),
    (_0x3e9c62["y"] = _0x5dea30["y"]),
    (_0x3e9c62["z"] = _0x5dea30["z"]),
    (_0x3e9c62[_0x4cd2ee(0x1593)] = _0x5dea30["yaw"]),
    (_0x3e9c62["pitch"] = 0x0),
    (_0x3e9c62["flags"] |= 0x1),
    lt(_0x3e9c62[_0x4cd2ee(0x529)], Tu(_0x3e9c62, !0x0)),
    !0x0
  );
}
function Bz(_0x46df1e, _0x3e236e, _0x31cc71) {
  return _0x46df1e + "," + _0x3e236e + "," + _0x31cc71;
}
function LT(_0x1dc711, _0x4b8f00, _0x386bee) {
  const _0x13ab26 = _0x44a014,
    _0x33e4fb = _0x4b8f00 - 0x1;
  if (_0x33e4fb < 0x0) return;
  const _0x35888b = Bz(_0x1dc711, _0x33e4fb, _0x386bee);
  B["getBlock"](_0x1dc711, _0x4b8f00, _0x386bee) === l[_0x13ab26(0x1c8b)] &&
  B[_0x13ab26(0xcdd)](_0x1dc711, _0x33e4fb, _0x386bee) === l[_0x13ab26(0x17f3)]
    ? yf["has"](_0x35888b) ||
      yf[_0x13ab26(0x1b41)](
        _0x35888b,
        Date[_0x13ab26(0xe89)]() + Cz + Math[_0x13ab26(0x10b2)]() * vz,
      )
    : yf[_0x13ab26(0x367)](_0x35888b);
}
let El = 0x1;
const mq = 0xf * 0xea60,
  Pz = se[_0x44a014(0x282)](Ue, _0x44a014(0x18ca));
let fn = {};
try {
  fn = JSON[_0x44a014(0x19fc)](
    _0x27cf81[_0x44a014(0x92d)](Pz, _0x44a014(0x258)),
  );
} catch {}
const zR = fn[_0x44a014(0x7a3)],
  $1 = [
    _0x44a014(0x823),
    _0x44a014(0x1b34),
    _0x44a014(0x80a),
    "hard",
    _0x44a014(0x13b6),
    _0x44a014(0x1301),
    "unreal-hardcore",
  ];
let Ja = Number(Ft[_0x44a014(0x1c7e)] ?? fn[_0x44a014(0xfae)] ?? 0x12c);
if (!Number[_0x44a014(0x1142)](Ja) || Ja < 0x1 || Ja > 0xe10)
  throw Error(
    "BASE_CAPTURE_SECONDS\x20must\x20be\x20between\x201\x20and\x203600",
  );
let xg = Wv;
const Cd = Number(
  Ft["CASINO_BIG_WIN_THRESHOLD"] ?? fn["casinoBigWinThreshold"] ?? 0x3e8,
);
if (!Number[_0x44a014(0x1142)](Cd) || Cd < 0x0 || Cd > 0xffffffff)
  throw new Error(
    "CASINO_BIG_WIN_THRESHOLD\x20must\x20be\x20between\x200\x20and\x204294967295\x20(0\x20disables\x20announcements)",
  );
let vh = fn[_0x44a014(0x4bf)] ?? !0x1,
  d1 = fn[_0x44a014(0x21bc)] ?? !0x1;
const Dh = () =>
  new F(C["S_TIME"])
    [_0x44a014(0x6f4)](B[_0x44a014(0x20e9)])
    ["u8"](d1 ? 0x1 : 0x0);
let Zt = zR && $1[_0x44a014(0x175a)](zR) ? zR : _0x44a014(0x80a),
  Af = fn[_0x44a014(0x142d)] ?? !0x0,
  vd = fn["wendigo"];
const zT = () => vd ?? Ft["FC_WENDIGO"] === "1";
let m1 = fn["convoysEnabled"] ?? Ft[_0x44a014(0x8b8)] !== "0",
  Am = fn["missionsEnabled"] ?? Ft[_0x44a014(0x1c13)] !== "0",
  _g = fn[_0x44a014(0x159)];
const n_ = () => _g ?? Ft["FC_ROADS"] !== "0",
  T2 = 0x186a0;
let Bc =
  typeof fn[_0x44a014(0xf8f)] == _0x44a014(0x1012) &&
  Number["isFinite"](fn[_0x44a014(0xf8f)])
    ? Math[_0x44a014(0x723)](
        0x0,
        Math[_0x44a014(0x16e0)](
          T2,
          Math[_0x44a014(0x1f96)](fn[_0x44a014(0xf8f)]),
        ),
      )
    : void 0x0;
const pq = (() => {
    const _0x1e7774 = _0x44a014,
      _0x5c9414 = Number(Ft[_0x1e7774(0x162f)] ?? 0x1f4);
    return Number[_0x1e7774(0x1142)](_0x5c9414) && _0x5c9414 >= 0x0
      ? Math[_0x1e7774(0x16e0)](T2, Math[_0x1e7774(0x1f96)](_0x5c9414))
      : 0x1f4;
  })(),
  Hz = () => Bc ?? pq,
  bz = $1[_0x44a014(0x175a)](Ft["FC_FRONT_DIFFICULTY"])
    ? Ft[_0x44a014(0x111d)]
    : "ultra-hardcore";
rn &&
  ((Af = !0x1),
  (m1 = !0x1),
  (Am = !0x1),
  (_g = !0x1),
  (vh = !0x0),
  (xg = !0x1),
  (vd = !0x1),
  (Zt = bz));
const i2 = (() => {
    const _0x3e43ec = _0x44a014,
      _0x1561ba = Number(Ft["FC_AFK_MINUTES"] ?? 0x5);
    return Number[_0x3e43ec(0x1142)](_0x1561ba) && _0x1561ba > 0x0
      ? Math[_0x3e43ec(0x1f96)](_0x1561ba * 0xea60)
      : 0x0;
  })(),
  Eq = 0xea60,
  mw = Math[_0x44a014(0x16e0)](Eq, Math[_0x44a014(0x2f3)](i2 / 0x2));
function Qy(_0x4a6577) {
  const _0xf0b108 = _0x44a014;
  (yq &&
    performance[_0xf0b108(0xe89)]() - (_0x4a6577[_0xf0b108(0xb88)] ?? 0x0) >
      0x7d0 &&
    console[_0xf0b108(0x1ed0)](
      _0xf0b108(0x1ee2) +
        _0x4a6577[_0xf0b108(0x35b)] +
        _0xf0b108(0x1270) +
        new Error()[_0xf0b108(0x5cc)]
          ?.[_0xf0b108(0x47b)]("\x0a")[0x2]
          ?.[_0xf0b108(0x48f)](),
    ),
    (_0x4a6577[_0xf0b108(0xb88)] = performance[_0xf0b108(0xe89)]()),
    (_0x4a6577["afkWarned"] = !0x1));
}
const yq = Ft[_0x44a014(0xd27)] === "1",
  Aq = new Set([
    C["C_MOVE"],
    C[_0x44a014(0xf08)],
    C[_0x44a014(0xdc2)],
    C[_0x44a014(0x19d8)],
    C[_0x44a014(0x5f3)],
    C["C_LANGUAGE"],
    C["C_PLANET_READY"],
    C[_0x44a014(0x1d80)],
    C[_0x44a014(0x1e31)],
    C[_0x44a014(0x1b40)],
    C[_0x44a014(0x14b9)],
    C[_0x44a014(0x12b3)],
    C[_0x44a014(0x12a8)],
  ]),
  gq = {
    peace: 0x0,
    easy: 0.6,
    medium: 0x1,
    hard: 1.6,
    hardcore: 2.15,
    "ultra-hardcore": 2.8,
    "unreal-hardcore": 3.4,
  },
  Gz = {
    peace: 0x0,
    easy: 1.4,
    medium: 0.8,
    hard: 0.35,
    hardcore: 0.18,
    "ultra-hardcore": 0.05,
    "unreal-hardcore": 0.02,
  },
  Mq = {
    peace: 0x0,
    easy: 0.12,
    medium: 0.28,
    hard: 0.48,
    hardcore: 0.68,
    "ultra-hardcore": 0.86,
    "unreal-hardcore": 0.94,
  },
  Fz = {
    peace: 0x1,
    easy: 0x1,
    medium: 0x1,
    hard: 0x2,
    hardcore: 0x3,
    "ultra-hardcore": 0x3,
    "unreal-hardcore": 0x3,
  },
  Rq = {
    peace: 0x1,
    easy: 0.58,
    medium: 0.42,
    hard: 0.3,
    hardcore: 0.2,
    "ultra-hardcore": 0.12,
    "unreal-hardcore": 0.06,
  },
  Sq = {
    peace: 0x7,
    easy: 6.5,
    medium: 5.2,
    hard: 4.2,
    hardcore: 3.3,
    "ultra-hardcore": 2.4,
    "unreal-hardcore": 1.8,
  },
  Tq = {
    peace: 0.14,
    easy: 0.16,
    medium: 0.2,
    hard: 0.25,
    hardcore: 0.3,
    "ultra-hardcore": 0.36,
    "unreal-hardcore": 0.44,
  },
  xq = {
    peace: 0x0,
    easy: 0.08,
    medium: 0.2,
    hard: 0.38,
    hardcore: 0.58,
    "ultra-hardcore": 0.78,
    "unreal-hardcore": 0.9,
  },
  pw = {
    peace: 0x0,
    easy: 0.08,
    medium: 0.22,
    hard: 0.4,
    hardcore: 0.58,
    "ultra-hardcore": 0.72,
    "unreal-hardcore": 0.84,
  },
  o_ = {
    peace: 0x1,
    easy: 1.02,
    medium: 1.08,
    hard: 1.14,
    hardcore: 1.2,
    "ultra-hardcore": 1.27,
    "unreal-hardcore": 1.33,
  };
function Og(_0x20c638, _0x1db455 = !0x1) {
  return hb(Zt, _0x20c638, _0x1db455);
}
const hr = AS,
  _q = 0xb4,
  Oq = {
    easy: [0x1a4, 0x2d0],
    medium: [0x118, 0x208],
    hard: [0xb4, 0x168],
    hardcore: [0x8c, 0x104],
    "ultra-hardcore": [0x64, 0xbe],
    "unreal-hardcore": [0x4b, 0x96],
  },
  s_ = {
    easy: 0x2,
    medium: 0x3,
    hard: 0x4,
    hardcore: 0x5,
    "ultra-hardcore": 0x6,
    "unreal-hardcore": 0x7,
  },
  $z = "Major\x20General\x20Volkov",
  Kz = 0.38,
  CR = [0x2, 0x3],
  wq = [2.2, 3.6],
  Ew = [3.6, 0x5],
  Nq = [3.8, 5.4],
  Iq = [2.4, 4.2],
  kq = 0x52,
  yw = { tank: 1.2, heli: 4.5 },
  Sl = 0.72,
  Lq = {
    easy: 0x69,
    medium: 0x82,
    hard: 0xcd,
    hardcore: 0x1d6,
    "ultra-hardcore": 0x1d6,
    "unreal-hardcore": 0x1f4,
  },
  Ii = 0xe,
  Aw = 0x5a,
  z0 = new Map();
function td(_0x211778) {
  return _0x211778[0x0] + Math["random"]() * (_0x211778[0x1] - _0x211778[0x0]);
}
function zq() {
  const _0x386be6 = _0x44a014;
  switch (ut?.["level"] ?? Zt) {
    case "hardcore":
      return 1.2;
    case _0x386be6(0x1301):
      return 1.42;
    case _0x386be6(0x1b96):
      return 1.62;
    case _0x386be6(0x8f7):
      return 1.08;
    default:
      return 0x1;
  }
}
let ut = null,
  ll = !0x1,
  tA = 0xb4;
const tu = new Set();
let CT = 0x0;
const Uz = se[_0x44a014(0x282)](Ue, _0x44a014(0x184d));
