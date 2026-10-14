// main-Bs7z9e_r 327 — x137d7d
// Lines 124083-124511 of readable/assets/main-Bs7z9e_r.pretty.js (statement-aligned).
const fE = new Map(),
  F2 = new eB({
    solid: (_0x5a2629, _0x4d3320, _0x4a16b9, _0x5f2019) => {
      const _0x239512 = _0x5d322a,
        _0x4b6d0f = Ce(_0x5a2629),
        _0x43da6e = _0x4b6d0f[_0x239512(0x4f7)](
          _0x4d3320,
          _0x4a16b9,
          _0x5f2019,
        );
      return nn(_0x43da6e) || ho(_0x43da6e)
        ? !(_0x4b6d0f[_0x239512(0x1dfa)](_0x4d3320, _0x4a16b9, _0x5f2019) & ot)
        : Xe(_0x43da6e);
    },
    changed: (_0x523429, _0x4b55fc) =>
      ke(
        _0x523429[_0x5d322a(0x1ed3)],
        new W(L["S_EGG"])
          ["u8"](_0x4b55fc ? 0x1 : 0x0)
          [_0x5d322a(0x1ee5)](_0x523429["id"])
          ["u8"](_0x523429[_0x5d322a(0x1ed3)])
          [_0x5d322a(0x416)](_0x523429["x"])
          [_0x5d322a(0x416)](_0x523429["y"])
          ["f32"](_0x523429["z"]),
      ),
    hit: (_0x39aeaa) => {
      const _0x5e2b71 = _0x5d322a,
        _0x37c138 = $["get"](_0x39aeaa[_0x5e2b71(0xca5)]),
        _0xc9a7ef = (_0x12721c, _0x1b37f5, _0x370159) =>
          Math[_0x5e2b71(0x7a3)](_0x39aeaa["x"] - _0x12721c["x"]) <
            _0x1b37f5 + 0.09 &&
          Math["abs"](_0x39aeaa["z"] - _0x12721c["z"]) < _0x1b37f5 + 0.09 &&
          _0x39aeaa["y"] >= _0x12721c["y"] - 0.09 &&
          _0x39aeaa["y"] <= _0x12721c["y"] + _0x370159 + 0.09;
      for (const _0x36312c of $["values"]())
        if (
          _0x36312c["id"] !== _0x39aeaa["owner"] &&
          _0x36312c[_0x5e2b71(0x1ed3)] === _0x39aeaa["planet"] &&
          _0x36312c[_0x5e2b71(0x174b)] &&
          _0x36312c[_0x5e2b71(0x1713)] === -0x1 &&
          _0xc9a7ef(
            _0x36312c,
            0.3,
            _0x36312c["flags"] & 0x4
              ? 0.55
              : _0x36312c[_0x5e2b71(0x102)] & 0x10
                ? 1.25
                : 1.8,
          )
        )
          return (
            Dn(
              _0x36312c,
              0x1,
              _0x37c138 == null ? void 0x0 : _0x37c138["name"],
              _0x5e2b71(0x1b99),
              _0x5e2b71(0x1f03),
              _0x39aeaa["owner"],
              void 0x0,
              _0x39aeaa,
            ),
            !0x0
          );
      for (const _0x155073 of Re["values"]())
        if (
          _0x155073["planet"] === _0x39aeaa[_0x5e2b71(0x1ed3)] &&
          _0x155073["hp"] > 0x0 &&
          _0xc9a7ef(_0x155073, 0.3, 1.7)
        )
          return (
            _0x37c138 &&
              Tc(_0x155073, 0x1, _0x37c138, _0x5e2b71(0x1b99), void 0x0, !0x0),
            !0x0
          );
      if (_0x39aeaa[_0x5e2b71(0x1ed3)] === C[_0x5e2b71(0x9e2)]) {
        for (const _0x6e9592 of Bt[_0x5e2b71(0x1e01)]())
          if (
            _0x6e9592["hp"] > 0x0 &&
            _0xc9a7ef(
              _0x6e9592,
              _0x6e9592[_0x5e2b71(0x58f)] === ze[_0x5e2b71(0x2ac)] ? 0.2 : 0.45,
              _0x6e9592["type"] === ze["CHICKEN"]
                ? _0x6e9592[_0x5e2b71(0x1f68)]
                  ? 0.5
                  : 0.85
                : 1.2,
            )
          )
            return (
              (_0x6e9592["hp"] = Math[_0x5e2b71(0x1267)](
                0x0,
                _0x6e9592["hp"] - 0x1,
              )),
              (Un = !0x0),
              uh(
                _0x6e9592,
                _0x39aeaa["x"] - _0x39aeaa["vx"],
                _0x39aeaa["z"] - _0x39aeaa["vz"],
              ),
              _0x6e9592["hp"] <= 0x0
                ? $i(_0x6e9592)
                : $t(
                    new W(L["S_ANIMAL_HP"])
                      [_0x5e2b71(0x1ac4)](_0x6e9592["id"])
                      [_0x5e2b71(0x1ac4)](_0x6e9592["hp"]),
                  ),
              !0x0
            );
      }
      for (const _0x37d27a of ee["values"]())
        if (
          (_0x37d27a[_0x5e2b71(0x1ed3)] ?? 0x0) ===
            _0x39aeaa[_0x5e2b71(0x1ed3)] &&
          _0x37d27a["hp"] > 0x0
        ) {
          const _0x55b887 =
              0x2 * Math[_0x5e2b71(0xeef)](_0x37d27a["qy"], _0x37d27a["qw"]),
            _0x45f2cb = _0x39aeaa["x"] - _0x37d27a["x"],
            _0x211a08 = _0x39aeaa["z"] - _0x37d27a["z"],
            _0x4eb469 = Math[_0x5e2b71(0x363)](_0x55b887),
            _0x31580b = Math[_0x5e2b71(0x813)](_0x55b887),
            _0x4c3531 = _0x45f2cb * _0x4eb469 - _0x211a08 * _0x31580b,
            _0x4f8d7b = _0x45f2cb * _0x31580b + _0x211a08 * _0x4eb469;
          if (
            (Qn[_0x37d27a["type"]] ?? [])["some"](
              (_0x439631) =>
                _0x4c3531 >= _0x439631["min"]["x"] - 0.09 &&
                _0x4c3531 <= _0x439631[_0x5e2b71(0x1267)]["x"] + 0.09 &&
                _0x4f8d7b >= _0x439631[_0x5e2b71(0x48a)]["z"] - 0.09 &&
                _0x4f8d7b <= _0x439631[_0x5e2b71(0x1267)]["z"] + 0.09 &&
                _0x39aeaa["y"] - _0x37d27a["y"] >=
                  _0x439631[_0x5e2b71(0x48a)]["y"] - 0.09 &&
                _0x39aeaa["y"] - _0x37d27a["y"] <=
                  _0x439631[_0x5e2b71(0x1267)]["y"] + 0.09,
            )
          )
            return (oo(_0x37d27a, 0x1, _0x39aeaa["owner"]), !0x0);
        }
      return !0x1;
    },
    hatch: (_0x2bd88a) => {
      const _0x714464 = _0x5d322a;
      for (const [_0x28a32d, _0x58d9e7] of [
        [0x0, 0x0],
        [0.5, 0x0],
        [-0.5, 0x0],
        [0x0, 0.5],
        [0x0, -0.5],
        [0x1, 0x0],
        [-0x1, 0x0],
        [0x0, 0x1],
        [0x0, -0x1],
      ]) {
        const _0x202030 = _0x2bd88a["x"] + _0x28a32d,
          _0x5c43dd = _0x2bd88a["z"] + _0x58d9e7,
          _0x3cd2a9 = B["groundAt"](_0x202030, _0x5c43dd, _0x2bd88a["y"] + 0x1);
        if (
          !Number[_0x714464(0xb9c)](_0x3cd2a9) ||
          _0x3cd2a9 < _0x2bd88a["y"] - 0x4 ||
          _0x3cd2a9 > _0x2bd88a["y"] + 0x1
        )
          continue;
        let _0x42a64b = !0x0;
        for (const _0x339264 of [-0.16, 0.16])
          for (const _0x390d05 of [-0.16, 0.16])
            for (const _0x57190e of [0.05, 0.55]) {
              const _0x156176 = B["getBlock"](
                Math[_0x714464(0x17b0)](_0x202030 + _0x339264),
                Math[_0x714464(0x17b0)](_0x3cd2a9 + _0x57190e),
                Math[_0x714464(0x17b0)](_0x5c43dd + _0x390d05),
              );
              (Xe(_0x156176) ||
                _0x156176 === f["WATER"] ||
                _0x156176 === f[_0x714464(0xd36)]) &&
                (_0x42a64b = !0x1);
            }
        if (_0x42a64b) {
          da(ze[_0x714464(0x2ac)], _0x202030, _0x5c43dd, !0x0, !0x0, _0x3cd2a9);
          break;
        }
      }
    },
  }),
  qO = new Map(),
  jO = (_0x2a1782, _0x53a40f) => {
    const _0x24df5a = _0x5d322a;
    var _0x1a4d2b, _0x56a3c9, _0x531b4d;
    const _0x2a7f54 = new W(L[_0x24df5a(0xda1)])
      ["u8"](_0x53a40f)
      [_0x24df5a(0x1ee5)](_0x2a1782["id"])
      [_0x24df5a(0x1ac4)](_0x2a1782[_0x24df5a(0xca5)])
      [_0x24df5a(0x1ac4)](_0x2a1782[_0x24df5a(0xfd3)])
      ["u8"](_0x2a1782[_0x24df5a(0x1ed3)])
      [_0x24df5a(0x416)](_0x2a1782["x"])
      ["f32"](_0x2a1782["y"])
      [_0x24df5a(0x416)](_0x2a1782["z"])
      [_0x24df5a(0x416)](_0x2a1782["vx"])
      [_0x24df5a(0x416)](_0x2a1782["vy"])
      ["f32"](_0x2a1782["vz"]);
    return (
      _0x53a40f === d0[_0x24df5a(0x141)] &&
        _0x2a7f54["str"](
          JSON[_0x24df5a(0x8f9)]({
            cosmetic: _0x2a1782[_0x24df5a(0x58b)] ?? null,
            holder:
              ((_0x56a3c9 =
                (_0x1a4d2b = $[_0x24df5a(0x11b7)](_0x2a1782["owner"])) == null
                  ? void 0x0
                  : _0x1a4d2b["identity"]) == null
                ? void 0x0
                : _0x56a3c9["id"]) ??
              ((_0x531b4d = $[_0x24df5a(0x11b7)](_0x2a1782["owner"])) == null
                ? void 0x0
                : _0x531b4d[_0x24df5a(0x1351)]) ??
              "",
          }),
        ),
      _0x2a7f54
    );
  },
  XO = _0x5d322a(0xc78),
  Nk = new hB({
    solid: (_0x4d544a, _0x5d95ce, _0x3cbf2f, _0xa3331) => {
      const _0x51a518 = _0x5d322a,
        _0x4ada92 = Ce(_0x4d544a),
        _0x2c277d = _0x4ada92[_0x51a518(0x4f7)](_0x5d95ce, _0x3cbf2f, _0xa3331);
      return nn(_0x2c277d) || ho(_0x2c277d)
        ? !(_0x4ada92[_0x51a518(0x1dfa)](_0x5d95ce, _0x3cbf2f, _0xa3331) & ot)
        : Xe(_0x2c277d);
    },
    changed: (_0x132c44) =>
      ke(_0x132c44[_0x5d322a(0x1ed3)], jO(_0x132c44, d0[_0x5d322a(0x141)])),
    hit: (_0xf21162) => {
      const _0x137d7d = _0x5d322a,
        _0x22b93e = $[_0x137d7d(0x11b7)](_0xf21162[_0x137d7d(0xca5)]),
        _0xcaf2b5 = (_0x509fe9, _0x3738cd, _0x9fe3e9) =>
          Math[_0x137d7d(0x7a3)](_0xf21162["x"] - _0x509fe9["x"]) <
            _0x3738cd + 0.12 &&
          Math[_0x137d7d(0x7a3)](_0xf21162["z"] - _0x509fe9["z"]) <
            _0x3738cd + 0.12 &&
          _0xf21162["y"] >= _0x509fe9["y"] - 0.08 &&
          _0xf21162["y"] <= _0x509fe9["y"] + _0x9fe3e9 + 0.08,
        _0x138f94 = (_0x553811, _0xdc651e) => {
          const _0x4bfbd0 = _0x137d7d,
            _0x843146 = (_0xf21162["y"] - _0x553811["y"]) / _0xdc651e;
          return _0x843146 > 0.8
            ? gn[_0x4bfbd0(0x14d9)]
            : _0x843146 < 0.42
              ? gn[_0x4bfbd0(0x17cc)]
              : gn[_0x4bfbd0(0x1191)];
        };
      for (const _0x33e284 of $[_0x137d7d(0x1e01)]()) {
        if (
          _0x33e284["id"] === _0xf21162[_0x137d7d(0xca5)] ||
          _0x33e284[_0x137d7d(0x1ed3)] !== _0xf21162[_0x137d7d(0x1ed3)] ||
          !_0x33e284[_0x137d7d(0x174b)] ||
          _0x33e284[_0x137d7d(0x1713)] !== -0x1
        )
          continue;
        const _0x577909 =
          _0x33e284[_0x137d7d(0x102)] & 0x4
            ? 0.6
            : _0x33e284[_0x137d7d(0x102)] & 0x10
              ? 1.35
              : 1.8;
        if (!_0xcaf2b5(_0x33e284, 0.3, _0x577909)) continue;
        const _0x50708f = _0x138f94(_0x33e284, _0x577909),
          _0x8b77ef = _0x33e284["hp"];
        return (
          I1(_0x22b93e, _0xf21162[_0x137d7d(0x58b)], () =>
            Dn(
              _0x33e284,
              gA * m1[_0x50708f],
              _0x22b93e == null ? void 0x0 : _0x22b93e[_0x137d7d(0x1351)],
              XO,
              _0x137d7d(0x5be),
              _0xf21162[_0x137d7d(0xca5)],
              _0x50708f,
              _0xf21162,
            ),
          ),
          _0x22b93e &&
            rl(
              _0x22b93e,
              Go,
              "p:" + _0x33e284[_0x137d7d(0x1351)],
              _0x8b77ef - _0x33e284["hp"],
              !un(_0x22b93e[_0x137d7d(0x1351)], _0x33e284[_0x137d7d(0x1351)]) &&
                !un(_0x33e284[_0x137d7d(0x1351)], _0x22b93e["name"]),
              !0x0,
            ),
          _0x22b93e && wy(_0x22b93e["name"], _0x33e284["id"]),
          !0x0
        );
      }
      for (const _0x267d1e of Re["values"]()) {
        if (
          _0x267d1e[_0x137d7d(0x1ed3)] !== _0xf21162[_0x137d7d(0x1ed3)] ||
          _0x267d1e["hp"] <= 0x0 ||
          !_0xcaf2b5(_0x267d1e, 0.32, 1.75)
        )
          continue;
        const _0x2dc88b = _0x138f94(_0x267d1e, 1.75);
        if (_0x22b93e) {
          const _0x22a48b = _0x267d1e["hp"];
          (I1(_0x22b93e, _0xf21162[_0x137d7d(0x58b)], () =>
            Tc(_0x267d1e, gA * m1[_0x2dc88b], _0x22b93e, XO, _0x2dc88b),
          ),
            rl(
              _0x22b93e,
              Go,
              "b:" + _0x267d1e["id"],
              _0x22a48b - _0x267d1e["hp"],
              _0x267d1e[_0x137d7d(0xfda)],
              !0x0,
            ));
        }
        return !0x0;
      }
      if (_0xf21162[_0x137d7d(0x1ed3)] === C[_0x137d7d(0x9e2)])
        for (const _0x12e170 of Bt["values"]()) {
          if (_0x12e170["hp"] <= 0x0) continue;
          const _0x122b35 =
              _0x12e170[_0x137d7d(0x58f)] === ze["CHICKEN"] ||
              _0x12e170[_0x137d7d(0x58f)] === ze["FISH"],
            _0x5ada2e =
              _0x12e170["type"] === ze[_0x137d7d(0x8f5)] ||
              _0x12e170["type"] === ze[_0x137d7d(0x1317)] ||
              _0x12e170["type"] === ze[_0x137d7d(0x1227)] ||
              _0x12e170[_0x137d7d(0x58f)] === ze[_0x137d7d(0x7e0)];
          if (
            !_0xcaf2b5(
              _0x12e170,
              _0x122b35 ? 0.22 : _0x5ada2e ? 0.6 : 0.45,
              _0x122b35 ? 0.6 : _0x5ada2e ? 1.7 : 1.1,
            )
          )
            continue;
          _0x22b93e &&
            (uh(_0x12e170, _0x22b93e["x"], _0x22b93e["z"]),
            (_0x12e170[_0x137d7d(0x97b)] = _0x22b93e["x"]),
            (_0x12e170["hitFromZ"] = _0x22b93e["z"]));
          const _0x2a26d8 = _0x12e170["hp"];
          return (
            (_0x12e170["hp"] = Math[_0x137d7d(0x1267)](
              0x0,
              _0x12e170["hp"] - gA,
            )),
            (Un = !0x0),
            _0x22b93e &&
              rl(
                _0x22b93e,
                Go,
                "a:" + _0x12e170["id"],
                _0x2a26d8 - _0x12e170["hp"],
                !_0x12e170[_0x137d7d(0x1a80)] &&
                  _0x12e170[_0x137d7d(0x1891)] === void 0x0,
                !0x0,
              ),
            _0x12e170["hp"] <= 0x0
              ? $i(_0x12e170)
              : $t(
                  new W(L["S_ANIMAL_HP"])
                    ["u16"](_0x12e170["id"])
                    [_0x137d7d(0x1ac4)](_0x12e170["hp"]),
                ),
            !0x0
          );
        }
      return !0x1;
    },
    land: (_0x5a0d2c, _0x52ae6a) => {
      const _0x44e597 = _0x5d322a,
        _0x36fbce =
          Math["hypot"](_0x5a0d2c["vx"], _0x5a0d2c["vy"], _0x5a0d2c["vz"]) ||
          0x1,
        _0x351bc0 = _0x5a0d2c["x"] - (_0x5a0d2c["vx"] / _0x36fbce) * 0.06,
        _0xd285f5 = _0x5a0d2c["y"] - (_0x5a0d2c["vy"] / _0x36fbce) * 0.06,
        _0x36e626 = _0x5a0d2c["z"] - (_0x5a0d2c["vz"] / _0x36fbce) * 0.06,
        _0x1ce186 = Ce(_0x5a0d2c[_0x44e597(0x1ed3)]),
        _0x395729 = _0x1ce186[_0x44e597(0x4f7)](
          Math[_0x44e597(0x17b0)](_0x5a0d2c["x"]),
          Math["floor"](_0x5a0d2c["y"]),
          Math[_0x44e597(0x17b0)](_0x5a0d2c["z"]),
        ),
        _0x5929c7 =
          _0x52ae6a ||
          (_0x395729 > 0x0 &&
            Va(_0x395729) !== _0x44e597(0x1336) &&
            Va(_0x395729) !== _0x44e597(0x19af) &&
            Va(_0x395729) !== _0x44e597(0x1724) &&
            Va(_0x395729) !== _0x44e597(0x1ff2));
      _0x5a0d2c[_0x44e597(0x4db)] -= rB + (_0x5929c7 ? aB : 0x0);
      const _0xb3c214 = jO(
        _0x5a0d2c,
        _0x52ae6a
          ? d0[_0x44e597(0x6da)]
          : _0x5a0d2c[_0x44e597(0x4db)] <= 0x0
            ? d0[_0x44e597(0x1adf)]
            : d0[_0x44e597(0x1aa)],
      );
      if (
        (_0xb3c214[_0x44e597(0x416)](_0x351bc0)
          ["f32"](_0xd285f5)
          ["f32"](_0x36e626),
        ke(_0x5a0d2c[_0x44e597(0x1ed3)], _0xb3c214),
        _0x5a0d2c["durability"] > 0x0)
      )
        Qt(
          Go,
          Math["floor"](_0x351bc0),
          Math[_0x44e597(0x1267)](0x1, Math[_0x44e597(0x17b0)](_0xd285f5)),
          Math["floor"](_0x36e626),
          0x1,
          0x15e,
          !0x0,
          0x493e0,
          _0x5a0d2c[_0x44e597(0x4db)],
          To(Go),
          0xffff,
          _0x5a0d2c[_0x44e597(0x1ed3)],
          _0x5a0d2c[_0x44e597(0x58b)],
        );
      else {
        const _0x286d24 = $["get"](_0x5a0d2c[_0x44e597(0xca5)]);
        _0x286d24 && P(0x2, "Knife\x20broken", _0x286d24);
      }
    },
  });
