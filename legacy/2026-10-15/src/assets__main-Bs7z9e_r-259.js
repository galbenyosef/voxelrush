// assets__main-Bs7z9e_r 259 — x4b9765
// Lines 92704-92987 of readable/assets__main-Bs7z9e_r.pretty.js (statement-aligned).
function JM(_0x531212) {
  const _0x33bbc2 = _0x5d322a,
    _0x10fe36 = new W(L[_0x33bbc2(0x1f72)])[_0x33bbc2(0x438)](
      JSON[_0x33bbc2(0x8f9)]({
        type: _0x33bbc2(0xfc1),
        sites: Ha[_0x33bbc2(0x594)](),
      }),
    );
  _0x531212 ? ie(_0x531212, _0x10fe36) : ke(C["EARTH"], _0x10fe36);
}
function hK(_0x1a8046, _0x1380ff) {
  const _0x4b9765 = _0x5d322a,
    _0x168b40 = (_0x4f0187, _0x335aa8) =>
      dO(_0x1a8046, {
        type: _0x4b9765(0x1734),
        message: _0x1a8046[_0x4b9765(0x1162)] === "en" ? _0x4f0187 : _0x335aa8,
      });
  if (!g4(_0x1a8046)) {
    _0x168b40(_0x4b9765(0x83f), _0x4b9765(0x12a1));
    return;
  }
  if (
    !_0x1a8046["alive"] ||
    _0x1a8046[_0x4b9765(0xe3)] ||
    _0x1a8046["planet"] !== C[_0x4b9765(0x9e2)] ||
    _0x1a8046["vehicle"] !== -0x1 ||
    _0x1a8046["chair"]
  ) {
    _0x168b40(_0x4b9765(0x1ab), _0x4b9765(0x10f5));
    return;
  }
  if (_0x1380ff[_0x4b9765(0x10db)] === _0x4b9765(0x456)) {
    const {
      x: _0x416234,
      y: _0x2ea25a,
      z: _0x542172,
      rotation: _0x149491,
    } = _0x1380ff;
    if (
      ![_0x416234, _0x2ea25a, _0x542172, _0x149491]["every"](
        Number[_0x4b9765(0xc18)],
      ) ||
      Math[_0x4b9765(0x7a3)](_0x416234) > 0xf4240 ||
      Math["abs"](_0x542172) > 0xf4240 ||
      _0x2ea25a < 0x1 ||
      _0x2ea25a > 0x7c ||
      _0x149491 < 0x0 ||
      _0x149491 > 0x3 ||
      _0x1a8046[_0x4b9765(0x1581)] !== A[_0x4b9765(0xc99)] ||
      Math[_0x4b9765(0x1400)](
        _0x1a8046["x"] - _0x416234 - 0.5,
        go(_0x1a8046) - _0x2ea25a,
        _0x1a8046["z"] - _0x542172 - 0.5,
      ) > 0x7 ||
      !bt(Ge, _0x416234, _0x542172, 0x2) ||
      !Oi(
        _0x1a8046["x"],
        go(_0x1a8046),
        _0x1a8046["z"],
        _0x416234 + 0.5,
        _0x2ea25a + 0.01,
        _0x542172 + 0.5,
        _0x1a8046[_0x4b9765(0x1ed3)],
      )
    ) {
      _0x168b40(
        _0x4b9765(0xed6),
        "Возьмите\x20компьютер\x20и\x20наведите\x20на\x20ближайший\x20пол.",
      );
      return;
    }
    if (Ha["records"][_0x4b9765(0xe0d)] >= 0x80) {
      _0x168b40("Computer\x20limit\x20reached\x20(128).", _0x4b9765(0xd3d));
      return;
    }
    for (let _0x29dc17 = -0x1; _0x29dc17 <= 0x1; _0x29dc17++)
      for (let _0x4207c5 = -0x1; _0x4207c5 <= 0x1; _0x4207c5++) {
        const _0x2ec434 =
          Q[
            B["getBlock"](
              _0x416234 + _0x29dc17,
              _0x2ea25a - 0x1,
              _0x542172 + _0x4207c5,
            )
          ];
        if (
          ia(
            _0x1a8046["planet"],
            _0x416234 + _0x29dc17,
            _0x542172 + _0x4207c5,
          ) ||
          lf(
            _0x1a8046,
            _0x416234 + _0x29dc17,
            _0x2ea25a,
            _0x542172 + _0x4207c5,
          ) ||
          !ln(_0x1a8046, _0x416234 + _0x29dc17, _0x542172 + _0x4207c5)
        ) {
          _0x168b40(_0x4b9765(0xbf3), _0x4b9765(0x150));
          return;
        }
        if (
          !(_0x2ec434 != null && _0x2ec434[_0x4b9765(0xfdf)]) ||
          _0x2ec434["liquid"]
        ) {
          _0x168b40(
            "A\x20flat,\x20solid\x203\x20×\x203\x20floor\x20is\x20required.",
            _0x4b9765(0x1d56),
          );
          return;
        }
        for (let _0x3145a3 = 0x0; _0x3145a3 < 0x3; _0x3145a3++)
          if (
            B["getBlock"](
              _0x416234 + _0x29dc17,
              _0x2ea25a + _0x3145a3,
              _0x542172 + _0x4207c5,
            ) !== f[_0x4b9765(0x11c6)]
          ) {
            _0x168b40(_0x4b9765(0x1f47), _0x4b9765(0x245));
            return;
          }
      }
    for (const _0x50589c of [
      ...Ha[_0x4b9765(0xcf6)][_0x4b9765(0x1e01)](),
      ...Hi()["flatMap"](Tl),
    ])
      if (
        Math["abs"](_0x50589c["y"] - _0x2ea25a) < 0x3 &&
        Math[_0x4b9765(0x1400)](
          _0x50589c["x"] - _0x416234 - 0.5,
          _0x50589c["z"] - _0x542172 - 0.5,
        ) < 0x3
      ) {
        _0x168b40(
          _0x4b9765(0x1421),
          "Оставьте\x20больше\x20места\x20между\x20компьютерами\x20и\x20автоматами.",
        );
        return;
      }
    for (const _0x38d128 of $[_0x4b9765(0x1e01)]())
      if (
        _0x38d128[_0x4b9765(0x174b)] &&
        _0x38d128[_0x4b9765(0x1ed3)] === _0x1a8046["planet"] &&
        Math[_0x4b9765(0x7a3)](_0x38d128["y"] - _0x2ea25a) < 0x3 &&
        Math[_0x4b9765(0x7a3)](_0x38d128["x"] - _0x416234 - 0.5) < 1.7 &&
        Math[_0x4b9765(0x7a3)](_0x38d128["z"] - _0x542172 - 0.5) < 1.3
      ) {
        _0x168b40(
          _0x4b9765(0x1c24),
          "В\x20месте\x20установки\x20стоит\x20игрок.",
        );
        return;
      }
    if (!wo(_0x1a8046, A[_0x4b9765(0xc99)])) {
      _0x168b40(_0x4b9765(0x37b), _0x4b9765(0x1f58));
      return;
    }
    (Ha[_0x4b9765(0x1577)]({
      id: _0x4b9765(0xf18) + ch(),
      x: _0x416234 + 0.5,
      y: _0x2ea25a,
      z: _0x542172 + 0.5,
      rotation: _0x149491,
      owner: _0x1a8046[_0x4b9765(0x1351)],
    }),
      JM(),
      P(
        0x1,
        _0x1a8046[_0x4b9765(0x1162)] === "en"
          ? "Computer\x20installed.\x20Use\x20the\x20monitor\x20to\x20open\x20its\x20browser."
          : "Компьютер\x20установлен.\x20Нажмите\x20использование\x20у\x20монитора,\x20чтобы\x20открыть\x20браузер.",
        _0x1a8046,
      ));
    return;
  }
  if (
    ![_0x4b9765(0x2a7), _0x4b9765(0xfce), _0x4b9765(0x29e)][_0x4b9765(0x1b5e)](
      _0x1380ff[_0x4b9765(0x10db)],
    ) ||
    !("id" in _0x1380ff) ||
    typeof _0x1380ff["id"] != _0x4b9765(0xd23)
  )
    return;
  const _0x566ea3 = Ha[_0x4b9765(0xcf6)][_0x4b9765(0x11b7)](_0x1380ff["id"]);
  if (
    !_0x566ea3 ||
    Math["hypot"](
      _0x1a8046["x"] - _0x566ea3["x"],
      _0x1a8046["y"] - _0x566ea3["y"],
      _0x1a8046["z"] - _0x566ea3["z"],
    ) > 5.5 ||
    !ln(_0x1a8046, _0x566ea3["x"], _0x566ea3["z"])
  ) {
    _0x168b40(_0x4b9765(0x10ff), _0x4b9765(0x19b3));
    return;
  }
  const _0x31fd9 = n8(_0x566ea3),
    _0x4b7ab8 =
      _0x566ea3["x"] +
      Math[_0x4b9765(0x363)](_0x31fd9) * Pd["x"] +
      Math[_0x4b9765(0x813)](_0x31fd9) * Pd["z"],
    _0x99d847 =
      _0x566ea3["z"] -
      Math["sin"](_0x31fd9) * Pd["x"] +
      Math[_0x4b9765(0x363)](_0x31fd9) * Pd["z"];
  if (
    !et(
      _0x1a8046["x"],
      go(_0x1a8046),
      _0x1a8046["z"],
      _0x4b7ab8,
      _0x566ea3["y"] + Pd["y"],
      _0x99d847,
      _0x1a8046["planet"],
    )
  ) {
    _0x168b40(_0x4b9765(0x58d), "Компьютер\x20за\x20препятствием.");
    return;
  }
  if (_0x1380ff[_0x4b9765(0x10db)] === _0x4b9765(0x29e)) {
    if (_0x1a8046[_0x4b9765(0x1581)] !== A[_0x4b9765(0x1da2)]) {
      _0x168b40(_0x4b9765(0x1e0f), _0x4b9765(0x5c0));
      return;
    }
    if (!ou(_0x1a8046[_0x4b9765(0x1351)], A[_0x4b9765(0xc99)], 0x1)) {
      _0x168b40(_0x4b9765(0x782), _0x4b9765(0x1c67));
      return;
    }
    (wn(_0x1a8046, A[_0x4b9765(0xc99)], 0x1),
      Ha["remove"](_0x566ea3["id"]),
      JM());
    return;
  }
  const _0x4cc638 =
    _0x1380ff[_0x4b9765(0x10db)] === "navigate"
      ? Ha[_0x4b9765(0xfce)](_0x566ea3["id"], _0x1380ff[_0x4b9765(0x53e)])
      : _0x566ea3[_0x4b9765(0x53e)];
  if (!_0x4cc638) {
    _0x168b40(
      "Enter\x20a\x20valid\x20HTTP\x20or\x20HTTPS\x20address.",
      _0x4b9765(0x2025),
    );
    return;
  }
  dO(_0x1a8046, {
    type: _0x1380ff[_0x4b9765(0x10db)],
    id: _0x566ea3["id"],
    url: _0x4cc638,
  });
}
try {
  const e = JSON[_0x5d322a(0x690)](
    _0x4a80b7["readFileSync"](A4, _0x5d322a(0x157e)),
  );
  if (Array[_0x5d322a(0x1e0b)](e)) {
    for (const t of e)
      t &&
        typeof t["id"] == _0x5d322a(0xd23) &&
        typeof t[_0x5d322a(0xca5)] == _0x5d322a(0xd23) &&
        [t["x"], t["y"], t["z"], t[_0x5d322a(0x14f6)]]["every"](
          Number[_0x5d322a(0xb9c)],
        ) &&
        Number[_0x5d322a(0x7c1)](t["rotation"]) &&
        t[_0x5d322a(0x14f6)] >= 0x0 &&
        t[_0x5d322a(0x14f6)] < 0x4 &&
        t["y"] >= 0x0 &&
        t["y"] < 0x80 &&
        (!t[_0x5d322a(0x1021)] || j0(t[_0x5d322a(0x1021)])) &&
        nc[_0x5d322a(0x124)](t["id"], t);
  }
} catch {}
function Hi() {
  const _0xf07697 = _0x5d322a;
  return [
    ...((De == null ? void 0x0 : De[_0xf07697(0x24e)]()) ?? []),
    ...nc[_0xf07697(0x1e01)](),
  ];
}
function k1() {
  const _0xdb1479 = _0x5d322a;
  Pr(A4, [...nc[_0xdb1479(0x1e01)]()]);
}
