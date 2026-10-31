// main-C153VVJY 343 — x5e8d77
// Lines 127472-127667 of readable/assets/main-C153VVJY.pretty.js (statement-aligned).
async function l3(_0x425c7f, _0x127093, _0x27ad46) {
  const _0x5d92b6 = _0x44a014;
  if (_0x425c7f[_0x5d92b6(0x1271)]) {
    P(0x2, _0x5d92b6(0x20ce), _0x425c7f);
    return;
  }
  _0x425c7f[_0x5d92b6(0x1271)] = !0x0;
  try {
    if (_0x425c7f[_0x5d92b6(0xcfb)]) {
      const _0x2be626 = await es("command", {
        session: _0x425c7f[_0x5d92b6(0xcfb)]["gameSession"],
        command: _0x127093,
      });
      if (G["get"](_0x425c7f["id"]) !== _0x425c7f) return;
      if (!_0x2be626["allowed"]) {
        P(0x2, _0x2be626[_0x5d92b6(0x67a)] || _0x5d92b6(0x549), _0x425c7f);
        return;
      }
      if (_0x2be626[_0x5d92b6(0x1eb1)]) {
        (P(0x1, _0x2be626[_0x5d92b6(0x67a)], _0x425c7f), Lm());
        return;
      }
      ((_0x425c7f[_0x5d92b6(0xcfb)][_0x5d92b6(0x110d)] = _0x2be626["role"]),
        (_0x425c7f[_0x5d92b6(0xcfb)]["permissions"] =
          _0x2be626[_0x5d92b6(0x1c80)]));
    }
    if (!ts(_0x425c7f, hk(_0x127093))) {
      P(0x2, _0x5d92b6(0xb91), _0x425c7f);
      return;
    }
    const _0x33778c = Jo;
    Jo = _0x425c7f;
    try {
      _0x27ad46();
    } finally {
      Jo = _0x33778c;
    }
  } catch (_0xae0b2c) {
    P(
      0x2,
      _0xae0b2c instanceof Error
        ? _0xae0b2c[_0x5d92b6(0x67a)]
        : "Authentication\x20service\x20unavailable",
      _0x425c7f,
    );
  } finally {
    _0x425c7f[_0x5d92b6(0x1271)] = !0x1;
  }
}
function hN(_0x519417, _0x2af060) {
  l3(_0x519417, _0x2af060, () => BZ(_0x519417, _0x2af060));
}
let _A = !0x1;
const OA = new Map();
setInterval(() => {
  const _0x44791c = _0x44a014;
  for (const [_0x310350, _0xf932e7] of OA)
    _0xf932e7["idle"]() && OA[_0x44791c(0x367)](_0x310350);
}, 0xea60)[_0x44a014(0x214d)]?.();
function vZ(_0x3376fe, _0x5f27cf) {
  const _0x41bcbc = _0x44a014;
  if (jt) return !0x0;
  const _0x24f063 = _0x3376fe[_0x41bcbc(0x35b)][_0x41bcbc(0x397)]();
  let _0x38abb1 = OA[_0x41bcbc(0xda9)](_0x24f063);
  _0x38abb1 || OA["set"](_0x24f063, (_0x38abb1 = new W7()));
  const _0x4f162d = _0x38abb1["wait"](_0x5f27cf);
  return _0x4f162d > 0x0
    ? (P(0x2, Y7(_0x4f162d, _0x3376fe[_0x41bcbc(0x177)]), _0x3376fe), !0x1)
    : (_0x38abb1["record"](_0x5f27cf), !0x0);
}
async function DZ(_0x374509, _0x197279, _0x40c7ed = "global") {
  const _0x5e8d77 = _0x44a014;
  if (_0x374509["chatBusy"]) {
    P(0x2, _0x5e8d77(0x110e), _0x374509);
    return;
  }
  _0x374509["chatBusy"] = !0x0;
  try {
    if (_0x374509[_0x5e8d77(0xcfb)]) {
      const _0x47cd9c = await es("chat", {
        session: _0x374509[_0x5e8d77(0xcfb)][_0x5e8d77(0x12f4)],
        text: _0x197279,
      });
      if (G[_0x5e8d77(0xda9)](_0x374509["id"]) !== _0x374509) return;
      if (!_0x47cd9c[_0x5e8d77(0xf89)]) {
        ((_0x374509[_0x5e8d77(0xcfb)][_0x5e8d77(0xb9b)] =
          _0x47cd9c["mutedUntil"]),
          Z_(_0x374509),
          P(
            0x2,
            _0x47cd9c[_0x5e8d77(0xb9b)]
              ? U7(_0x47cd9c[_0x5e8d77(0xb9b)], _0x374509[_0x5e8d77(0x177)])
              : "Chat\x20is\x20unavailable\x20for\x20this\x20account",
            _0x374509,
          ));
        return;
      }
    } else {
      if (!ts(_0x374509, "chat.basic")) {
        P(0x2, _0x5e8d77(0x24c), _0x374509);
        return;
      }
    }
    if (_0x40c7ed === _0x5e8d77(0xd72) && !(await dp(!0x0))) {
      P(
        0x2,
        _0x374509[_0x5e8d77(0x177)] === "en"
          ? _0x5e8d77(0x5f7)
          : _0x5e8d77(0x1b25),
        _0x374509,
      );
      return;
    }
    if (G[_0x5e8d77(0xda9)](_0x374509["id"]) !== _0x374509) return;
    const _0x5b5d50 = _s[_0x5e8d77(0xda9)](_0x374509["name"]);
    if (_0x40c7ed === _0x5e8d77(0xd72) && !_0x5b5d50) {
      P(
        0x2,
        _0x374509[_0x5e8d77(0x177)] === "en"
          ? "Join\x20a\x20squad\x20to\x20use\x20squad\x20chat."
          : _0x5e8d77(0x1f89),
        _0x374509,
      );
      return;
    }
    const _0x5a5cfa =
      j && !j["ffa"] ? j[_0x5e8d77(0x1701)](_0x374509["id"]) : 0x0;
    if (_0x40c7ed === _0x5e8d77(0x8de) && j?.["ffa"]) {
      P(
        0x2,
        _0x374509[_0x5e8d77(0x177)] === "en"
          ? "Everyone\x20fights\x20for\x20themselves\x20here:\x20there\x20is\x20no\x20team\x20chat."
          : _0x5e8d77(0x819),
        _0x374509,
      );
      return;
    }
    if (_0x40c7ed === "team" && !_0x5a5cfa) {
      P(
        0x2,
        _0x374509[_0x5e8d77(0x177)] === "en"
          ? _0x5e8d77(0x219d)
          : "Выберите\x20сторону,\x20чтобы\x20писать\x20в\x20командный\x20чат.",
        _0x374509,
      );
      return;
    }
    const _0x5e3208 = {
        name: _0x374509[_0x5e8d77(0x35b)],
        channel: _0x40c7ed,
        squad: _0x5b5d50
          ? {
              name: _0x5b5d50[_0x5e8d77(0x35b)],
              color: _0x5b5d50[_0x5e8d77(0x4b4)],
            }
          : null,
        ...(_0x5a5cfa ? { side: _0x5a5cfa } : {}),
      },
      _0x4b19b8 =
        "" +
        h7(
          _0x374509[_0x5e8d77(0x35b)],
          _0x374509[_0x5e8d77(0xcfb)]?.[_0x5e8d77(0x110d)],
        ) +
        (_0x5b5d50 ? "\x20[" + _0x5b5d50[_0x5e8d77(0x35b)] + "]" : "") +
        ":\x20" +
        _0x197279,
      _0x372027 = new F(C[_0x5e8d77(0x626)])
        ["u8"](0x0)
        [_0x5e8d77(0x1d68)](_0x4b19b8)
        [_0x5e8d77(0x1d68)](JSON["stringify"](_0x5e3208));
    for (const _0x2a042b of G["values"]())
      (_0x40c7ed === "global" ||
        (_0x40c7ed === _0x5e8d77(0xd72) &&
          _s["same"](_0x374509["name"], _0x2a042b["name"])) ||
        (_0x40c7ed === _0x5e8d77(0x8de) &&
          j?.[_0x5e8d77(0x1701)](_0x2a042b["id"]) === _0x5a5cfa)) &&
        Z(_0x2a042b, _0x372027);
    if (_0x40c7ed !== "global") return;
    Ze(
      new F(C[_0x5e8d77(0x13a6)])
        [_0x5e8d77(0x1e72)](_0x374509["id"])
        [_0x5e8d77(0x1d68)](_0x197279),
    );
  } catch (_0x3cc762) {
    P(
      0x2,
      _0x3cc762 instanceof Error
        ? _0x3cc762[_0x5e8d77(0x67a)]
        : "Authentication\x20service\x20unavailable",
      _0x374509,
    );
  } finally {
    _0x374509["chatBusy"] = !0x1;
  }
}
