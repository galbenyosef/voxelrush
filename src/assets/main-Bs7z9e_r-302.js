// main-Bs7z9e_r 302 — x495aa4
// Lines 108394-115934 of readable/assets/main-Bs7z9e_r.pretty.js (statement-aligned).
function $U(_0x1d72a3, _0x3b6e09) {
  const _0x495aa4 = _0x5d322a;
  var _0x46fc22,
    _0x51c6d2,
    _0x5d2329,
    _0x4a8416,
    _0xd242ed,
    _0xe6384b,
    _0x4ed5f1,
    _0x3c315c,
    _0x34fee5,
    _0x422faf,
    _0x3350b3,
    _0x482fb8,
    _0x24b445,
    _0x52bd66,
    _0x5ada5a,
    _0x4dbeac,
    _0x57cf86,
    _0x5183e0,
    _0x2b814a,
    _0x57c89d,
    _0x4877b8,
    _0x10f271,
    _0x1ba7c5,
    _0x43e81f,
    _0x4c24eb,
    _0x5cd9ab,
    _0x4d5d62,
    _0x59d7fd,
    _0xdf30fd,
    _0x1a48e9,
    _0x537593;
  const _0x3f4b28 = new lc(_0x3b6e09, !0x0),
    _0x32fa41 = _0x3f4b28["u8"](),
    _0x4ca573 = xr(_0x1d72a3);
  if (
    $s(
      an,
      _0x4ca573["x"],
      _0x4ca573["z"],
      _0x4ca573[_0x495aa4(0x1ed3)] ?? _0x1d72a3["planet"],
    ) &&
    [
      L[_0x495aa4(0x77a)],
      L[_0x495aa4(0x17b3)],
      L["C_HIT_VEHICLE"],
      L["C_HIT_BOT"],
      L["C_HIT_ANIMAL"],
      L[_0x495aa4(0x1762)],
      L["C_C4_THROW"],
      L[_0x495aa4(0x1c5)],
    ][_0x495aa4(0x1b5e)](_0x32fa41)
  ) {
    ie(
      _0x1d72a3,
      new W(L[_0x495aa4(0x1562)])[_0x495aa4(0x438)](
        _0x1d72a3[_0x495aa4(0x1162)] === "en"
          ? "Spawn\x20zone\x20·\x20combat\x20is\x20not\x20allowed."
          : _0x495aa4(0x1f5e),
      ),
    );
    return;
  }
  if (!(
    _0x1d72a3["downed"] &&
    ![
      L[_0x495aa4(0x1cc9)],
      L["C_MOVE"],
      L[_0x495aa4(0x16ae)],
      L["C_INV_SAVE"],
      L[_0x495aa4(0x16e2)],
      L[_0x495aa4(0x1f0c)],
      L[_0x495aa4(0x9ab)],
      L[_0x495aa4(0xb59)],
      L[_0x495aa4(0x1292)],
      L[_0x495aa4(0xca4)],
      L["C_LANGUAGE"],
      L[_0x495aa4(0x168b)],
      L[_0x495aa4(0x1bd)],
      L[_0x495aa4(0x1007)],
      L[_0x495aa4(0x203f)],
    ]["includes"](_0x32fa41)
  ))
    switch (
      ([
        L["C_SHOT"],
        L[_0x495aa4(0x840)],
        L[_0x495aa4(0x17b3)],
        L["C_HIT_BOT"],
        L["C_SET_BLOCK"],
        L[_0x495aa4(0x1a1a)],
        L[_0x495aa4(0x16ae)],
      ]["includes"](_0x32fa41) && li[_0x495aa4(0x1a88)](_0x1d72a3["id"]),
      _0x32fa41)
    ) {
      case L["C_CLAIM"]: {
        const _0x1bbf24 = vt["get"](_0x3f4b28[_0x495aa4(0x1ee5)]()),
          _0x183250 = _0x3f4b28["u8"]();
        if (
          _0x1bbf24 &&
          (_0x183250 === 0x0 || _0x183250 === 0x1) &&
          _0x1bbf24[_0x495aa4(0xca5)] === _0x1d72a3[_0x495aa4(0x1351)] &&
          _0x1d72a3[_0x495aa4(0x174b)] &&
          _0x1d72a3[_0x495aa4(0x1713)] === -0x1 &&
          _0x1bbf24[_0x495aa4(0x1ed3)] === _0x1d72a3[_0x495aa4(0x1ed3)] &&
          Math[_0x495aa4(0x1400)](
            _0x1d72a3["x"] - _0x1bbf24["x"] - 0.5,
            _0x1d72a3["y"] + 0.9 - _0x1bbf24["y"],
            _0x1d72a3["z"] - _0x1bbf24["z"] - 0.5,
          ) <= 0x7 &&
          Ce(_0x1d72a3[_0x495aa4(0x1ed3)])["getBlock"](
            _0x1bbf24["x"],
            _0x1bbf24["y"],
            _0x1bbf24["z"],
          ) === f[_0x495aa4(0xbad)] &&
          Oi(
            _0x1d72a3["x"],
            go(_0x1d72a3),
            _0x1d72a3["z"],
            _0x1bbf24["x"] + 0.5,
            _0x1bbf24["y"] + 0.5,
            _0x1bbf24["z"] + 0.5,
            _0x1d72a3["planet"],
          )
        ) {
          if (_0x183250 === 0x1) {
            const _0x3bd3dc = _0x3f4b28[_0x495aa4(0x1ac4)]();
            if (!R0(_0x1d72a3) || !MS(_0x3bd3dc)) break;
            (vt[_0x495aa4(0x1933)](_0x1bbf24["id"], _0x3bd3dc), Pl());
          }
          ie(
            _0x1d72a3,
            new W(L[_0x495aa4(0x13cc)])[_0x495aa4(0x1ee5)](_0x1bbf24["id"]),
          );
        }
        break;
      }
      case L[_0x495aa4(0x5e6)]: {
        const _0x37b573 = _0x3f4b28["u8"]();
        _0x37b573 < 0x9 &&
          (_0x1d72a3["cosmeticSlot"] !== _0x37b573 && t2(_0x1d72a3),
          (_0x1d72a3[_0x495aa4(0x1761)] = _0x37b573));
        let _0x14d89b = null;
        if (_0x3f4b28[_0x495aa4(0x1c03)]() >= 0x2)
          try {
            _0x14d89b = JSON[_0x495aa4(0x690)](_0x3f4b28[_0x495aa4(0x438)]());
          } catch {
            _0x14d89b = null;
          }
        (!Gt[_0x495aa4(0x1957)] &&
          _0x14d89b &&
          typeof _0x14d89b["character"] == _0x495aa4(0xd23) &&
          (!_0x14d89b["custom"] || $v(_0x14d89b["custom"])) &&
          (_0x1d72a3["localCosmetics"] = {
            ...CN(),
            character: _0x14d89b[_0x495aa4(0x1506)],
            custom: _0x14d89b[_0x495aa4(0x14a0)] ?? null,
            weapons: Object[_0x495aa4(0x983)](
              Object[_0x495aa4(0x1127)](_0x14d89b[_0x495aa4(0x1b83)] ?? {})[
                _0x495aa4(0x3f4)
              ](
                ([_0x3041af, _0x1e32ab]) =>
                  k0[_0x495aa4(0x1b5e)](Number(_0x3041af)) &&
                  !!Qs(String(_0x1e32ab)),
              ),
            ),
          }),
          Gt[_0x495aa4(0x1957)] &&
            (_0x14d89b == null ? void 0x0 : _0x14d89b["refresh"]) === !0x0 &&
            _0x1d72a3["identity"] &&
            performance["now"]() -
              (_0x1d72a3[_0x495aa4(0x186f)] ?? -0x3b9aca00) >
              0x7d0 &&
            ((_0x1d72a3[_0x495aa4(0x186f)] = performance["now"]()), dk()),
          pc(_0x1d72a3));
        break;
      }
      case L["C_SQUAD"]: {
        if (_0x3b6e09["length"] > 0x200) break;
        let _0x2e8350;
        try {
          _0x2e8350 = JSON[_0x495aa4(0x690)](_0x3f4b28[_0x495aa4(0x438)]());
        } catch {
          break;
        }
        if (
          (_0x2e8350 == null ? void 0x0 : _0x2e8350["action"]) ===
          _0x495aa4(0xe56)
        ) {
          cm();
          break;
        }
        if (
          (_0x2e8350 == null ? void 0x0 : _0x2e8350[_0x495aa4(0x10db)]) !==
            "waypoint" ||
          Date["now"]() - (GM[_0x495aa4(0x11b7)](_0x1d72a3["id"]) ?? 0x0) < 0x96
        )
          break;
        GM[_0x495aa4(0x124)](_0x1d72a3["id"], Date[_0x495aa4(0x1cc6)]());
        const _0x1465ff = _0x2e8350[_0x495aa4(0x1b02)];
        if (
          _0x1465ff !== null &&
          (!_0x1465ff ||
            !Number[_0x495aa4(0xb9c)](_0x1465ff["x"]) ||
            !Number["isFinite"](_0x1465ff["z"]) ||
            !Number[_0x495aa4(0x7c1)](_0x1465ff["planet"]) ||
            _0x1465ff[_0x495aa4(0x1ed3)] !== _0x1d72a3["planet"] ||
            Math[_0x495aa4(0x7a3)](_0x1465ff["x"]) > 0x1312d00 ||
            Math["abs"](_0x1465ff["z"]) > 0x1312d00 ||
            !bt(Ge, _0x1465ff["x"], _0x1465ff["z"]))
        )
          break;
        (cs[_0x495aa4(0x1af7)](
          _0x1d72a3[_0x495aa4(0x1351)],
          _0x1465ff === null
            ? null
            : {
                x: Math["round"](_0x1465ff["x"]),
                z: Math["round"](_0x1465ff["z"]),
                planet: _0x1d72a3[_0x495aa4(0x1ed3)],
              },
        ),
          am());
        break;
      }
      case L[_0x495aa4(0x1723)]: {
        const _0x2737b1 = _0x3f4b28[_0x495aa4(0xa9c)](),
          _0x1a3761 = _0x3f4b28["u8"](),
          _0x4f71a2 = _0x3f4b28["i32"]();
        let _0x459625;
        try {
          _0x459625 = JSON["parse"](
            _0x3f4b28[_0x495aa4(0x438)]()[_0x495aa4(0x1cf4)](0x0, 0x7d0),
          );
        } catch {
          break;
        }
        if (
          !_0x1d72a3[_0x495aa4(0x174b)] ||
          _0x1d72a3[_0x495aa4(0x1ed3)] !== C[_0x495aa4(0x9e2)] ||
          Math["hypot"](
            _0x1d72a3["x"] - _0x2737b1 - 0.5,
            _0x1d72a3["y"] + 0.9 - _0x1a3761,
            _0x1d72a3["z"] - _0x4f71a2 - 0.5,
          ) > 0x9 ||
          !ln(_0x1d72a3, _0x2737b1, _0x4f71a2) ||
          lf(_0x1d72a3, _0x2737b1, _0x1a3761, _0x4f71a2)
        )
          break;
        if (
          ia(_0x1d72a3[_0x495aa4(0x1ed3)], _0x2737b1, _0x4f71a2) &&
          !_0x1d72a3[_0x495aa4(0x1ec2)]
        ) {
          x2(_0x1d72a3);
          break;
        }
        if (
          !Oi(
            _0x1d72a3["x"],
            go(_0x1d72a3),
            _0x1d72a3["z"],
            _0x2737b1 + 0.5,
            _0x1a3761 + 0.5,
            _0x4f71a2 + 0.5,
            _0x1d72a3[_0x495aa4(0x1ed3)],
          )
        )
          break;
        const _0x14c56f = Ad["edit"](
          _0x2737b1,
          _0x1a3761,
          _0x4f71a2,
          _0x459625,
          (_0x16da08, _0x49d7ed, _0x15b063) =>
            ln(_0x1d72a3, _0x16da08, _0x15b063) &&
            !lf(_0x1d72a3, _0x16da08, _0x49d7ed, _0x15b063),
        );
        if (typeof _0x14c56f == _0x495aa4(0xd23)) {
          P(
            0x2,
            _0x1d72a3[_0x495aa4(0x1162)] === "ru"
              ? _0x14c56f === _0x495aa4(0x360)
                ? _0x495aa4(0xa6e)
                : _0x14c56f === _0x495aa4(0x328)
                  ? "Экран\x20превышает\x20лимит\x20в\x201024\x20панели."
                  : _0x14c56f
              : _0x14c56f,
            _0x1d72a3,
          );
          break;
        }
        _0x14c56f[_0x495aa4(0x18ce)] && ke(C[_0x495aa4(0x9e2)], ay(_0x14c56f));
        break;
      }
      case L["C_COMPUTER"]: {
        if (
          _0x3b6e09[_0x495aa4(0x18ce)] > 0x8fc ||
          !Ur(_0x1d72a3, _0x495aa4(0xa00), 0x3, 0x6)
        )
          break;
        try {
          const _0x6bc43b = JSON["parse"](_0x3f4b28[_0x495aa4(0x438)]());
          _0x6bc43b &&
            typeof _0x6bc43b == _0x495aa4(0x4c0) &&
            _0x495aa4(0x10db) in _0x6bc43b &&
            hK(_0x1d72a3, _0x6bc43b);
        } catch (_0x231e1e) {
          _0x231e1e instanceof SyntaxError ||
            console["error"](_0x495aa4(0x1afa), _0x231e1e);
        }
        break;
      }
      case L[_0x495aa4(0x203f)]: {
        if (_0x3b6e09[_0x495aa4(0x18ce)] > 0x800) break;
        try {
          const _0x23b121 = JSON["parse"](_0x3f4b28["str"]());
          if (!_0x23b121 || typeof _0x23b121["action"] != _0x495aa4(0xd23))
            break;
          if (_0x23b121[_0x495aa4(0x10db)]["startsWith"](_0x495aa4(0x1be9))) {
            $l[_0x495aa4(0x831)](_0x1d72a3, _0x23b121);
            break;
          }
          if (_0x23b121[_0x495aa4(0x10db)] === _0x495aa4(0x1569)) {
            const _0x2a1dc4 = Hi()
              [_0x495aa4(0x1247)](Hg)
              [_0x495aa4(0x8f6)](
                (_0x2b0e19) =>
                  _0x2b0e19["id"] === _0x23b121[_0x495aa4(0x101b)] &&
                  _0x2b0e19[_0x495aa4(0x10d4)] !== _0x495aa4(0x103a),
              );
            _0x2a1dc4 && M4(_0x1d72a3, _0x2a1dc4)
              ? R4(_0x1d72a3, _0x2a1dc4)
              : ie(
                  _0x1d72a3,
                  new W(L[_0x495aa4(0x1488)])["str"](
                    JSON["stringify"]({
                      type: "error",
                      message:
                        _0x1d72a3[_0x495aa4(0x1162)] === "en"
                          ? "Approach\x20a\x20free\x20chair."
                          : _0x495aa4(0x1c01),
                    }),
                  ),
                );
            break;
          }
          if (
            (_0x23b121[_0x495aa4(0x10db)] === _0x495aa4(0x2a7) &&
              (_0x46fc22 = _0x1d72a3[_0x495aa4(0x161)]) != null &&
              _0x46fc22[_0x495aa4(0xb11)] &&
              Os(_0x1d72a3),
            _0x23b121[_0x495aa4(0x10db)] === _0x495aa4(0x2a7) ||
              _0x23b121[_0x495aa4(0x10db)] === _0x495aa4(0x445))
          ) {
            const _0x29e3a1 =
                _0x23b121[_0x495aa4(0x10db)] === _0x495aa4(0x2a7)
                  ? _0x23b121[_0x495aa4(0x14da)]
                  : (_0x51c6d2 = Fs[_0x495aa4(0x30d)][_0x495aa4(0x11b7)](
                        _0x1d72a3[_0x495aa4(0x1351)],
                      )) == null
                    ? void 0x0
                    : _0x51c6d2["machine"],
              _0x41b199 = Hi()
                [_0x495aa4(0x1247)](Tl)
                ["find"]((_0x4b13f4) => _0x4b13f4["id"] === _0x29e3a1);
            if (_0x41b199 && !ln(_0x1d72a3, _0x41b199["x"], _0x41b199["z"])) {
              ie(
                _0x1d72a3,
                new W(L[_0x495aa4(0x1488)])[_0x495aa4(0x438)](
                  JSON[_0x495aa4(0x8f9)]({
                    type: _0x495aa4(0x1734),
                    message:
                      _0x1d72a3[_0x495aa4(0x1162)] === "en"
                        ? _0x495aa4(0x360)
                        : _0x495aa4(0xa6e),
                  }),
                ),
              );
              break;
            }
          }
          uK(_0x1d72a3, _0x23b121) ||
            Fs[_0x495aa4(0x831)](_0x1d72a3, _0x23b121);
        } catch (_0xbe8a7) {
          _0xbe8a7 instanceof SyntaxError ||
            console[_0x495aa4(0x1734)](_0x495aa4(0xac0), _0xbe8a7);
        }
        break;
      }
      case L[_0x495aa4(0xdb0)]:
        _0x3f4b28["u8"]() === 0x1 &&
          _0x1d72a3[_0x495aa4(0x1ed3)] === C["EARTH"] &&
          Xn[_0x495aa4(0x1834)](_r(_0x1d72a3));
        break;
      case L[_0x495aa4(0xd56)]:
        li[_0x495aa4(0xeda)](_0x1d72a3, _0x3f4b28[_0x495aa4(0x1ac4)]());
        break;
      case L[_0x495aa4(0xa05)]:
        const _0x3e973c = _0x3f4b28[_0x495aa4(0x416)](),
          _0x426c40 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x5698a9 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x213ef7 = _0x3f4b28["f32"](),
          _0x38710f = _0x3f4b28["f32"](),
          _0x55d9e8 = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x349180 = _0x3f4b28["u8"](),
          _0x20897e =
            _0x3f4b28["remaining"]() > 0x0 ? !!(_0x3f4b28["u8"]() & 0x1) : !0x1,
          _0x1de5d2 =
            _0x3f4b28[_0x495aa4(0x1c03)]() >= 0x4
              ? _0x3f4b28[_0x495aa4(0x1ee5)]()
              : 0x0,
          _0x45dcfd =
            _0x3f4b28[_0x495aa4(0x1c03)]() >= 0x4
              ? _0x3f4b28[_0x495aa4(0x1ee5)]()
              : void 0x0;
        if (
          !_0x1d72a3[_0x495aa4(0x174b)] ||
          _0x1de5d2 !== (_0x1d72a3[_0x495aa4(0x1b13)] ?? 0x0) ||
          (_0x45dcfd !== void 0x0 &&
            _0x45dcfd !== (_0x1d72a3[_0x495aa4(0xd05)] ?? 0x0)) ||
          ![_0x3e973c, _0x426c40, _0x5698a9, _0x213ef7, _0x38710f]["every"](
            Number[_0x495aa4(0xb9c)],
          )
        )
          break;
        if (!bt(Ge, _0x3e973c, _0x5698a9, 0.4)) {
          (Jf(_0x1d72a3), Al(_0x1d72a3));
          break;
        }
        if (
          ((_0x1d72a3[_0x495aa4(0x9af)] = _0x20897e),
          (!_0x1d72a3["movedSinceJoin"] ||
            Math[_0x495aa4(0x7a3)](_0x3e973c - _0x1d72a3["x"]) > 0.02 ||
            Math["abs"](_0x5698a9 - _0x1d72a3["z"]) > 0.02 ||
            Math["abs"](_0x426c40 - _0x1d72a3["y"]) > 0.02 ||
            Math[_0x495aa4(0x7a3)](_0x213ef7 - _0x1d72a3[_0x495aa4(0x17d5)]) >
              0.004 ||
            Math["abs"](_0x38710f - _0x1d72a3[_0x495aa4(0x588)]) > 0.004 ||
            _0x55d9e8 !== _0x1d72a3[_0x495aa4(0x1581)] ||
            (_0x349180 & -0x2) !== (_0x1d72a3["flags"] & -0x2)) &&
            ((_0x1d72a3["movedSinceJoin"] = !0x0), zp(_0x1d72a3)),
          _0x1d72a3[_0x495aa4(0xe3)])
        ) {
          ((_0x1d72a3[_0x495aa4(0x17d5)] = _0x213ef7),
            (_0x1d72a3[_0x495aa4(0x588)] = ge(_0x38710f, -1.2, 1.2)),
            (_0x1d72a3[_0x495aa4(0x102)] = 0x5),
            (_0x1d72a3[_0x495aa4(0x1581)] = 0x0));
          const _0x3c19a3 = _0x1d72a3["downed"],
            _0x332f60 = performance["now"](),
            _0x250795 = jB * (_0x20897e ? XB : 0x1);
          ((_0x3c19a3[_0x495aa4(0x193f)] = Math[_0x495aa4(0x48a)](
            0.25 + _0x250795 * 1.25,
            _0x3c19a3[_0x495aa4(0x193f)] +
              (Math[_0x495aa4(0x1267)](
                0x0,
                _0x332f60 - _0x3c19a3[_0x495aa4(0x1f87)],
              ) /
                0x3e8) *
                _0x250795,
          )),
            (_0x3c19a3[_0x495aa4(0x1f87)] = _0x332f60));
          const _0x4e32ab = Math["hypot"](
            _0x3e973c - _0x1d72a3["x"],
            _0x5698a9 - _0x1d72a3["z"],
          );
          _0x4e32ab <= _0x3c19a3[_0x495aa4(0x193f)] + 0.00001 &&
            XK(_0x1d72a3, _0x3e973c, _0x5698a9) &&
            ((_0x1d72a3["x"] = _0x3e973c),
            (_0x1d72a3["z"] = _0x5698a9),
            (_0x3c19a3[_0x495aa4(0x193f)] = Math[_0x495aa4(0x1267)](
              0x0,
              _0x3c19a3["moveBudget"] - _0x4e32ab,
            )));
          break;
        }
        if (
          (_0x1d72a3[_0x495aa4(0xe2f)] &&
            (_0x1d72a3[_0x495aa4(0xe2f)]["planet"] !==
              _0x1d72a3[_0x495aa4(0x1ed3)] ||
              !_0x1d72a3[_0x495aa4(0x174b)] ||
              _0x1d72a3[_0x495aa4(0x1713)] !== -0x1 ||
              _0x1d72a3[_0x495aa4(0x161)] ||
              _0x349180 & 0x3c ||
              !(_0x349180 & 0x1) ||
              Math[_0x495aa4(0x1400)](
                _0x3e973c - _0x1d72a3[_0x495aa4(0xe2f)]["x"],
                _0x426c40 - _0x1d72a3[_0x495aa4(0xe2f)]["y"],
                _0x5698a9 - _0x1d72a3[_0x495aa4(0xe2f)]["z"],
              ) > 0.18 ||
              Date[_0x495aa4(0x1cc6)]() -
                _0x1d72a3["animation"][_0x495aa4(0x1a32)] >
                (((_0x5d2329 = _S(_0x1d72a3["animation"][_0x495aa4(0xb9d)])) ==
                null
                  ? void 0x0
                  : _0x5d2329[_0x495aa4(0x1772)]) ?? 0x0) *
                  0x3e8) &&
            jc(_0x1d72a3),
          (_0x1d72a3[_0x495aa4(0x17d5)] = _0x213ef7),
          (_0x1d72a3[_0x495aa4(0x588)] = ge(
            _0x38710f,
            -Math["PI"] / 0x2,
            Math["PI"] / 0x2,
          )),
          _0x1d72a3[_0x495aa4(0x1581)] !== _0x55d9e8 && t2(_0x1d72a3),
          (_0x1d72a3[_0x495aa4(0x1581)] = _0x55d9e8),
          (_0x1d72a3[_0x495aa4(0x102)] = _0x349180),
          pc(_0x1d72a3),
          _0x1d72a3["vehicle"] !== -0x1 &&
            ((_0x4a8416 = ee[_0x495aa4(0x11b7)](
              _0x1d72a3[_0x495aa4(0x1713)],
            )) == null
              ? void 0x0
              : _0x4a8416["type"]) !== I[_0x495aa4(0x377)])
        )
          gc(_0x1d72a3);
        else {
          if (!_0x1d72a3[_0x495aa4(0x161)] && !Hn(_0x1d72a3)) {
            const _0xbd1eee = _0x1d72a3["teleportGuard"];
            if (
              _0xbd1eee &&
              performance[_0x495aa4(0x1cc6)]() < _0xbd1eee[_0x495aa4(0xf2f)] &&
              Math[_0x495aa4(0x1400)](
                _0x3e973c - _0xbd1eee["x"],
                _0x426c40 - _0xbd1eee["y"],
                _0x5698a9 - _0xbd1eee["z"],
              ) > 0xc
            )
              break;
            if ((_0xbd1eee && (_0x1d72a3[_0x495aa4(0x17e6)] = void 0x0), !it)) {
              const _0x18fa1d = Ce(_0x1d72a3[_0x495aa4(0x1ed3)]),
                _0x874baf = { x: _0x3e973c, y: _0x426c40, z: _0x5698a9 },
                _0x2136d7 =
                  performance[_0x495aa4(0x1cc6)]() <
                  (_0x1d72a3[_0x495aa4(0x18bb)] ?? 0x0),
                _0x339d16 =
                  _0x1d72a3[_0x495aa4(0x1237)] || _0x1d72a3[_0x495aa4(0x1ec2)],
                _0x30890f = gv(
                  (_0x35e917, _0xd0fff, _0x571114) =>
                    _0x18fa1d[_0x495aa4(0x4f7)](
                      _0x35e917,
                      _0xd0fff,
                      _0x571114,
                    ) !== f[_0x495aa4(0x11c6)],
                  _0x1d72a3["x"],
                  _0x1d72a3["y"],
                  _0x1d72a3["z"],
                ),
                _0x18f45b = _0x30890f ? void 0x0 : GU(_0x1d72a3),
                _0x552340 = !!_0x18f45b || _0x30890f,
                _0x444a3f = _0x2136d7
                  ? 0x3c
                  : _0x339d16
                    ? 0x20
                    : _0x1d72a3[_0x495aa4(0x157c)] !== void 0x0
                      ? 0x18
                      : 0x9 +
                        (_0x18f45b
                          ? Math["min"](
                              0x3c,
                              Math["hypot"](_0x18f45b["vx"], _0x18f45b["vz"]),
                            ) + 0x8
                          : 0x0),
                _0x1496a9 = (_0x2ef09b, _0x4dc1c6, _0x571f9d) => {
                  const _0x19a100 = _0x495aa4,
                    _0x1ab993 =
                      Q[_0x18fa1d["getBlock"](_0x2ef09b, _0x4dc1c6, _0x571f9d)];
                  return (
                    !!(_0x1ab993 != null && _0x1ab993[_0x19a100(0xfdf)]) &&
                    _0x1ab993[_0x19a100(0x1e3b)] === _0x19a100(0x1c8c) &&
                    !Tt(_0x1ab993["id"])
                  );
                },
                _0x5c55d7 = ym[_0x495aa4(0x1630)](
                  _0x1d72a3,
                  _0x1d72a3,
                  _0x874baf,
                  _0x1d72a3[_0x495aa4(0x1ed3)],
                  _0x444a3f,
                  _0x2136d7
                    ? 0x32
                    : _0x339d16
                      ? 0x1e
                      : 0xc +
                        (_0x18f45b
                          ? Math["min"](
                              0x32,
                              Math[_0x495aa4(0x7a3)](_0x18f45b["vy"]),
                            )
                          : 0x0),
                  _0x552340,
                  _0x339d16 ||
                    _0x2136d7 ||
                    _0x1d72a3[_0x495aa4(0x157c)] !== void 0x0,
                  () => Av(_0x1d72a3, _0x874baf, _0x1496a9),
                );
              if (_0x5c55d7) {
                (Au[_0x5c55d7]++,
                  performance[_0x495aa4(0x1cc6)]() -
                    (_0x1d72a3[_0x495aa4(0x1300)] ?? -0x1 / 0x0) >
                    0x12c &&
                    ((_0x1d72a3["antiCheatNoticeAt"] =
                      performance[_0x495aa4(0x1cc6)]()),
                    Jf(_0x1d72a3)));
                break;
              }
            }
            ((_0x1d72a3["x"] = _0x3e973c),
              (_0x1d72a3["y"] = _0x426c40),
              (_0x1d72a3["z"] = _0x5698a9));
          } else
            _0x1d72a3[_0x495aa4(0x161)] &&
              ((_0x1d72a3["x"] = _0x1d72a3[_0x495aa4(0x161)]["x"]),
              (_0x1d72a3["y"] = _0x1d72a3[_0x495aa4(0x161)]["y"]),
              (_0x1d72a3["z"] = _0x1d72a3[_0x495aa4(0x161)]["z"]),
              (_0x1d72a3[_0x495aa4(0x102)] |= 0x1));
        }
        EK(_0x1d72a3);
        break;
      case L[_0x495aa4(0xca4)]: {
        const _0x4cfaa7 =
            _0x3f4b28["remaining"]() >= 0x9
              ? _0x3f4b28["u8"]()
              : _0x1d72a3["planet"],
          _0x232648 = _0x3f4b28[_0x495aa4(0xa9c)](),
          _0x499551 = _0x3f4b28[_0x495aa4(0xa9c)]();
        if (
          _0x4cfaa7 !== _0x1d72a3["planet"] ||
          !fM(Ge, _0x232648 * ne, _0x499551 * ne, ne)
        )
          break;
        (jp[_0x495aa4(0x190c)](_0x1d72a3, {
          planet: _0x4cfaa7,
          cx: _0x232648,
          cz: _0x499551,
        }),
          z4());
        break;
      }
      case L["C_MAP_TILES"]: {
        const _0x1a23c6 = _0x3f4b28["u8"](),
          _0xa5e0d2 = Math[_0x495aa4(0x48a)](_0x3f4b28["u8"](), 0xc);
        if (_0x1a23c6 !== _0x1d72a3["planet"]) break;
        for (
          let _0x5b86b7 = 0x0;
          _0x5b86b7 < _0xa5e0d2 && _0x3f4b28[_0x495aa4(0x1c03)]() >= 0x9;
          _0x5b86b7++
        ) {
          const _0x2ac4c4 = Math[_0x495aa4(0x48a)](0x6, _0x3f4b28["u8"]()),
            _0x49f38a = _0x3f4b28[_0x495aa4(0xa9c)](),
            _0x17922b = _0x3f4b28["i32"]();
          fM(
            Ge,
            _0x49f38a * (0x20 << _0x2ac4c4),
            _0x17922b * (0x20 << _0x2ac4c4),
            0x20 << _0x2ac4c4,
          ) &&
            (Math[_0x495aa4(0x7a3)](_0x49f38a) > 0x186a0 ||
              Math[_0x495aa4(0x7a3)](_0x17922b) > 0x186a0 ||
              CK(_0x1d72a3, {
                planet: _0x1a23c6,
                lod: _0x2ac4c4,
                tx: _0x49f38a,
                tz: _0x17922b,
              }));
        }
        break;
      }
      case L["C_BLUEPRINT"]: {
        const _0x127ec3 = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x2c5901 = _0x3f4b28[_0x495aa4(0xa9c)](),
          _0x5bb1f0 = _0x3f4b28["u8"](),
          _0x56f77b = _0x3f4b28[_0x495aa4(0xa9c)](),
          _0x505576 = _0x3f4b28["u8"](),
          _0x23a4db = cN(_0x127ec3);
        if (
          !_0x23a4db ||
          !_0x1d72a3[_0x495aa4(0x174b)] ||
          _0x1d72a3[_0x495aa4(0x1713)] !== -0x1 ||
          _0x505576 > 0x3 ||
          _0x1d72a3[_0x495aa4(0x1581)] !== _0x127ec3
        )
          break;
        if (
          _0x23a4db["key"] === _0x495aa4(0x146e) &&
          _0x1d72a3[_0x495aa4(0x1ed3)] !== C[_0x495aa4(0x9e2)]
        ) {
          P(
            0x2,
            "Casinos\x20can\x20only\x20be\x20built\x20on\x20Earth.",
            _0x1d72a3,
          );
          break;
        }
        if (
          Math[_0x495aa4(0x1400)](
            _0x1d72a3["x"] - _0x2c5901 - 0.5,
            _0x1d72a3["y"] + 1.6 - _0x5bb1f0,
            _0x1d72a3["z"] - _0x56f77b - 0.5,
          ) > 0x7 ||
          !Oi(
            _0x1d72a3["x"],
            go(_0x1d72a3),
            _0x1d72a3["z"],
            _0x2c5901 + 0.5,
            _0x5bb1f0 + 0.5,
            _0x56f77b + 0.5,
            _0x1d72a3[_0x495aa4(0x1ed3)],
          )
        )
          break;
        const _0x5fc6c9 = Ce(_0x1d72a3[_0x495aa4(0x1ed3)]),
          _0x6b61d8 = MC(_0x23a4db, _0x2c5901, _0x5bb1f0, _0x56f77b, _0x505576);
        if (
          _0x6b61d8[_0x495aa4(0x129c)](
            (_0x54ba29) => !bt(Ge, _0x54ba29["x"] + 0.5, _0x54ba29["z"] + 0.5),
          )
        ) {
          Al(_0x1d72a3);
          break;
        }
        if (_0x1d72a3[_0x495aa4(0x1ed3)] === C[_0x495aa4(0x9e2)]) {
          const _0x1b62db = new Set(
            _0x6b61d8["map"](
              (_0x3cd58a) =>
                Math[_0x495aa4(0x17b0)](_0x3cd58a["x"] / ne) +
                "," +
                Math[_0x495aa4(0x17b0)](_0x3cd58a["z"] / ne),
            ),
          );
          for (const _0x1eec1b of _0x1b62db) {
            const [_0x327d9a, _0x2f1f28] =
              _0x1eec1b["split"](",")[_0x495aa4(0x164b)](Number);
            De == null || De[_0x495aa4(0xb39)](_0x327d9a, _0x2f1f28, !0x0);
          }
        }
        const _0x3ee17a = TC(
          _0x6b61d8,
          (_0x23fd8f, _0x1ef485, _0x4ffebe) =>
            _0x5fc6c9["getBlock"](_0x23fd8f, _0x1ef485, _0x4ffebe),
          _0x23a4db[_0x495aa4(0x1877)],
        );
        if (
          _0x1d72a3["planet"] === C[_0x495aa4(0x9e2)] &&
          _0x3ee17a[_0x495aa4(0x129c)]((_0x333112) =>
            Fu(_0x333112["x"], _0x333112["y"], _0x333112["z"]),
          )
        ) {
          P(
            0x2,
            _0x1d72a3["language"] === "en"
              ? _0x495aa4(0xbb0)
              : _0x495aa4(0xb0b),
            _0x1d72a3,
          );
          break;
        }
        if (
          _0x3ee17a[_0x495aa4(0x129c)](
            (_0x4a950c) =>
              !xf(
                _0x1d72a3["planet"],
                _0x4a950c["x"],
                _0x4a950c["y"],
                _0x4a950c["z"],
                _0x4a950c["id"],
                _0x4a950c[_0x495aa4(0x1f6)],
              ) ||
              !ln(_0x1d72a3, _0x4a950c["x"], _0x4a950c["z"], !0x1) ||
              _0x5fc6c9[_0x495aa4(0x4f7)](
                _0x4a950c["x"],
                _0x4a950c["y"],
                _0x4a950c["z"],
              ) === f[_0x495aa4(0xbad)],
          )
        ) {
          P(
            0x2,
            _0x1d72a3[_0x495aa4(0x1162)] === "en"
              ? "Blueprint\x20intersects\x20a\x20protected\x20territory\x20or\x20totem."
              : _0x495aa4(0x1d6d),
            _0x1d72a3,
          );
          break;
        }
        const _0x557f0a = xC(
          _0x3ee17a,
          _0x5bb1f0,
          (_0x16cca0, _0x1abce6, _0x46c974) =>
            _0x5fc6c9["getBlock"](_0x16cca0, _0x1abce6, _0x46c974),
          (_0x506293) => {
            const _0x2c63bb = _0x495aa4;
            for (const _0x1bc520 of $["values"]())
              if (
                _0x1bc520["alive"] &&
                _0x1bc520[_0x2c63bb(0x1ed3)] === _0x1d72a3[_0x2c63bb(0x1ed3)] &&
                _0x506293["x"] + 0x1 > _0x1bc520["x"] - 0.35 &&
                _0x506293["x"] < _0x1bc520["x"] + 0.35 &&
                _0x506293["z"] + 0x1 > _0x1bc520["z"] - 0.35 &&
                _0x506293["z"] < _0x1bc520["z"] + 0.35 &&
                _0x506293["y"] + 0x1 > _0x1bc520["y"] &&
                _0x506293["y"] < _0x1bc520["y"] + 1.9
              )
                return !0x0;
            for (const _0x175e1c of ee["values"]())
              if (
                _0x175e1c[_0x2c63bb(0x1ed3)] === _0x1d72a3[_0x2c63bb(0x1ed3)] &&
                Math[_0x2c63bb(0x7a3)](_0x175e1c["x"] - _0x506293["x"] - 0.5) <
                  0x4 &&
                Math["abs"](_0x175e1c["y"] - _0x506293["y"] - 0.5) < 0x3 &&
                Math[_0x2c63bb(0x7a3)](_0x175e1c["z"] - _0x506293["z"] - 0.5) <
                  0x4
              )
                return !0x0;
            return !0x1;
          },
        );
        if (_0x557f0a) {
          P(
            0x2,
            _C(_0x557f0a, _0x1d72a3[_0x495aa4(0x1162)] === "en"),
            _0x1d72a3,
          );
          break;
        }
        if (_0x1d72a3[_0x495aa4(0x1ed3)] === C[_0x495aa4(0x9e2)]) {
          const _0x324fd1 = Math[_0x495aa4(0x48a)](
              ..._0x6b61d8[_0x495aa4(0x164b)]((_0x56370a) => _0x56370a["x"]),
            ),
            _0x5681b5 = Math[_0x495aa4(0x1267)](
              ..._0x6b61d8[_0x495aa4(0x164b)]((_0x249607) => _0x249607["x"]),
            ),
            _0x143e7c = Math[_0x495aa4(0x48a)](
              ..._0x6b61d8[_0x495aa4(0x164b)]((_0x1143cd) => _0x1143cd["z"]),
            ),
            _0x3a6fc2 = Math[_0x495aa4(0x1267)](
              ..._0x6b61d8[_0x495aa4(0x164b)]((_0x2eabe3) => _0x2eabe3["z"]),
            );
          if (
            Hi()
              [_0x495aa4(0x1247)](Tl)
              ["some"](
                (_0x2010a1) =>
                  _0x2010a1["x"] >= _0x324fd1 - 0x1 &&
                  _0x2010a1["x"] <= _0x5681b5 + 0x2 &&
                  _0x2010a1["z"] >= _0x143e7c - 0x1 &&
                  _0x2010a1["z"] <= _0x3a6fc2 + 0x2 &&
                  _0x2010a1["y"] < _0x5bb1f0 + _0x23a4db[_0x495aa4(0xc58)] &&
                  _0x2010a1["y"] + 0x4 > _0x5bb1f0 + _0x23a4db["minY"],
              )
          ) {
            P(0x2, _0x495aa4(0x9a3), _0x1d72a3);
            break;
          }
        }
        if (!wo(_0x1d72a3, _0x127ec3)) {
          P(
            0x2,
            _0x1d72a3["language"] === "en"
              ? _0x495aa4(0x712)
              : _0x495aa4(0x1911),
            _0x1d72a3,
          );
          break;
        }
        for (const _0xfb256e of _0x3ee17a)
          (_0x5fc6c9[_0x495aa4(0x172)](
            _0xfb256e["x"],
            _0xfb256e["y"],
            _0xfb256e["z"],
            _0xfb256e["id"],
            _0xfb256e["meta"],
          ),
            bp(_0x1d72a3[_0x495aa4(0x1ed3)])[_0x495aa4(0x16bd)](
              _0xfb256e["x"],
              _0xfb256e["y"],
              _0xfb256e["z"],
              _0xfb256e["id"],
            ),
            sl(_0x1d72a3["planet"])[_0x495aa4(0x163)](
              _0xfb256e["x"],
              _0xfb256e["y"],
              _0xfb256e["z"],
            ),
            zf(_0x1d72a3["planet"])[_0x495aa4(0x163)](
              _0xfb256e["x"],
              _0xfb256e["y"],
              _0xfb256e["z"],
            ));
        for (
          let _0x4b4e70 = 0x0;
          _0x4b4e70 < _0x3ee17a[_0x495aa4(0x18ce)];
          _0x4b4e70 += 0x5dc
        ) {
          const _0x24ed77 = _0x3ee17a[_0x495aa4(0x1cf4)](
              _0x4b4e70,
              _0x4b4e70 + 0x5dc,
            ),
            _0x4418ca = new W(L[_0x495aa4(0x1126)])[_0x495aa4(0x1ac4)](
              _0x24ed77["length"],
            );
          for (const _0x255147 of _0x24ed77)
            _0x4418ca[_0x495aa4(0xa9c)](_0x255147["x"])
              ["u8"](_0x255147["y"])
              [_0x495aa4(0xa9c)](_0x255147["z"])
              ["u8"](_0x255147["id"])
              ["u8"](_0x255147["meta"]);
          ke(_0x1d72a3[_0x495aa4(0x1ed3)], _0x4418ca);
        }
        for (const _0x31ed57 of _0x6b61d8)
          if (_0x31ed57["id"] === f["SIGN"] && _0x31ed57[_0x495aa4(0x1ba5)]) {
            const _0x490f21 = sl(_0x1d72a3[_0x495aa4(0x1ed3)]);
            (_0x490f21[_0x495aa4(0x17f3)](
              _0x31ed57["x"],
              _0x31ed57["y"],
              _0x31ed57["z"],
              _0x1d72a3[_0x495aa4(0x1351)],
            ),
              _0x490f21[_0x495aa4(0x1052)](
                _0x31ed57["x"],
                _0x31ed57["y"],
                _0x31ed57["z"],
                _0x31ed57[_0x495aa4(0x1ba5)],
                _0x1d72a3[_0x495aa4(0x1351)],
              ));
          }
        if (_0x23a4db["key"] === _0x495aa4(0x146e)) {
          const [_0x287a35, _0x364cd2] = lN(0x0, -0x15, _0x505576),
            _0x367a9b = {
              id: _0x495aa4(0x1b3e) + ch(),
              x: _0x2c5901 + _0x287a35,
              y: _0x5bb1f0,
              z: _0x56f77b + _0x364cd2,
              rotation: _0x505576,
              owner: _0x1d72a3[_0x495aa4(0x1351)],
              layout: Cw,
            };
          (nc[_0x495aa4(0x124)](_0x367a9b["id"], _0x367a9b), k1(), Ws());
        }
        P(
          0x1,
          _0x1d72a3[_0x495aa4(0x1162)] === "en"
            ? _0x23a4db["labelEn"] + _0x495aa4(0x1a41)
            : _0x23a4db[_0x495aa4(0xb74)] + _0x495aa4(0x134e),
          _0x1d72a3,
        );
        break;
      }
      case L[_0x495aa4(0x191f)]: {
        const _0x5a860b = _0x3f4b28[_0x495aa4(0xa9c)](),
          _0x339977 = _0x3f4b28["u8"](),
          _0x2e5b63 = _0x3f4b28[_0x495aa4(0xa9c)](),
          _0x158fef = _0x3f4b28["u8"](),
          _0x54568f = _0x3f4b28["u8"](),
          _0x47444c = i5(
            _0x3f4b28[_0x495aa4(0x1c03)]() ? _0x3f4b28["u8"]() : 0x0,
          ),
          _0x144ef2 = Ce(_0x1d72a3[_0x495aa4(0x1ed3)]),
          _0x3dbc0a = vt[_0x495aa4(0x869)](
            _0x1d72a3[_0x495aa4(0x1ed3)],
            _0x5a860b,
            _0x339977,
            _0x2e5b63,
          );
        if (
          !it &&
          (!_0x1d72a3[_0x495aa4(0x174b)] ||
            _0x1d72a3[_0x495aa4(0xe3)] ||
            Math["hypot"](
              _0x5a860b + 0.5 - _0x1d72a3["x"],
              _0x339977 - _0x1d72a3["y"],
              _0x2e5b63 + 0.5 - _0x1d72a3["z"],
            ) > 0x8 ||
            !bt(Ge, _0x5a860b, _0x2e5b63, 0x0))
        ) {
          ie(
            _0x1d72a3,
            new W(L[_0x495aa4(0x164c)])
              [_0x495aa4(0xa9c)](_0x5a860b)
              ["u8"](_0x339977)
              ["i32"](_0x2e5b63)
              ["u8"](
                _0x144ef2[_0x495aa4(0x4f7)](_0x5a860b, _0x339977, _0x2e5b63),
              )
              ["u8"](
                _0x144ef2[_0x495aa4(0x1dfa)](_0x5a860b, _0x339977, _0x2e5b63),
              )
              ["u8"](0x1),
          );
          break;
        }
        if (
          ia(_0x1d72a3["planet"], _0x5a860b, _0x2e5b63) &&
          !xf(
            _0x1d72a3[_0x495aa4(0x1ed3)],
            _0x5a860b,
            _0x339977,
            _0x2e5b63,
            _0x158fef,
          )
        ) {
          (ie(
            _0x1d72a3,
            new W(L[_0x495aa4(0x164c)])
              [_0x495aa4(0xa9c)](_0x5a860b)
              ["u8"](_0x339977)
              [_0x495aa4(0xa9c)](_0x2e5b63)
              ["u8"](
                _0x144ef2[_0x495aa4(0x4f7)](_0x5a860b, _0x339977, _0x2e5b63),
              )
              ["u8"](
                _0x144ef2[_0x495aa4(0x1dfa)](_0x5a860b, _0x339977, _0x2e5b63),
              )
              ["u8"](0x1),
          ),
            Et(_0x1d72a3),
            x2(_0x1d72a3));
          break;
        }
        if (_0x158fef === f[_0x495aa4(0xbad)]) {
          MF(_0x1d72a3, _0x5a860b, _0x339977, _0x2e5b63);
          break;
        }
        if (
          _0x144ef2[_0x495aa4(0x4f7)](_0x5a860b, _0x339977, _0x2e5b63) ===
          f[_0x495aa4(0xbad)]
        ) {
          (_0x3dbc0a &&
          _0x158fef === f[_0x495aa4(0x11c6)] &&
          _0x1d72a3[_0x495aa4(0x174b)] &&
          _0x1d72a3[_0x495aa4(0x1713)] === -0x1 &&
          Math[_0x495aa4(0x1400)](
            _0x1d72a3["x"] - _0x5a860b - 0.5,
            _0x1d72a3["y"] + 0.9 - _0x339977,
            _0x1d72a3["z"] - _0x2e5b63 - 0.5,
          ) <= 0x7 &&
          Oi(
            _0x1d72a3["x"],
            go(_0x1d72a3),
            _0x1d72a3["z"],
            _0x5a860b + 0.5,
            _0x339977 + 0.5,
            _0x2e5b63 + 0.5,
            _0x1d72a3[_0x495aa4(0x1ed3)],
          )
            ? RF(_0x1d72a3, _0x3dbc0a)
            : _0x3dbc0a && Gu(_0x1d72a3, _0x3dbc0a["owner"], !0x0),
            ie(
              _0x1d72a3,
              new W(L["S_SET_BLOCK"])
                ["i32"](_0x5a860b)
                ["u8"](_0x339977)
                ["i32"](_0x2e5b63)
                ["u8"](_0x144ef2["getBlock"](_0x5a860b, _0x339977, _0x2e5b63))
                ["u8"](
                  _0x144ef2[_0x495aa4(0x1dfa)](_0x5a860b, _0x339977, _0x2e5b63),
                )
                ["u8"](0x1),
            ),
            Et(_0x1d72a3));
          break;
        }
        if (
          !ln(_0x1d72a3, _0x5a860b, _0x2e5b63) ||
          lf(_0x1d72a3, _0x5a860b, _0x339977, _0x2e5b63)
        ) {
          (ie(
            _0x1d72a3,
            new W(L[_0x495aa4(0x164c)])
              [_0x495aa4(0xa9c)](_0x5a860b)
              ["u8"](_0x339977)
              [_0x495aa4(0xa9c)](_0x2e5b63)
              ["u8"](
                _0x144ef2[_0x495aa4(0x4f7)](_0x5a860b, _0x339977, _0x2e5b63),
              )
              ["u8"](_0x144ef2["getMeta"](_0x5a860b, _0x339977, _0x2e5b63))
              ["u8"](0x1),
          ),
            Et(_0x1d72a3));
          break;
        }
        if (
          !it &&
          !_0x1d72a3[_0x495aa4(0x1ec2)] &&
          _0x158fef === f[_0x495aa4(0x11c6)] &&
          _0x144ef2[_0x495aa4(0x4f7)](_0x5a860b, _0x339977, _0x2e5b63) !==
            f[_0x495aa4(0x11c6)]
        ) {
          const _0x1e6b5f =
              ((_0xd242ed = Zo["get"](_0x1d72a3[_0x495aa4(0x1351)])) == null
                ? void 0x0
                : _0xd242ed["xp"]) ?? {},
            _0x9f48cd = BP(
              _0x144ef2[_0x495aa4(0x4f7)](_0x5a860b, _0x339977, _0x2e5b63),
              _0x1d72a3[_0x495aa4(0x1581)],
              V8(Ou(_0x495aa4(0x5a7), _0x1e6b5f[_0x495aa4(0x5a7)] ?? 0x0)),
              Y8(Ou(_0x495aa4(0x1336), _0x1e6b5f[_0x495aa4(0x1336)] ?? 0x0)),
              !!(_0x1d72a3[_0x495aa4(0x102)] & 0x10),
              _0x47444c,
            );
          if (
            ((Su[_0x1d72a3[_0x495aa4(0x1581)]] ||
              TE[_0x1d72a3[_0x495aa4(0x1581)]] ||
              _0x1d72a3[_0x495aa4(0x1581)] === A[_0x495aa4(0x734)]) &&
              !T0(_0x1d72a3, _0x1d72a3["held"])) ||
            !(
              (_0xe6384b = Yc[_0x495aa4(0x11b7)](
                _0x1d72a3[_0x495aa4(0x1351)],
              )) != null && _0xe6384b[_0x495aa4(0x1da6)](_0x9f48cd)
            )
          ) {
            (ie(
              _0x1d72a3,
              new W(L[_0x495aa4(0x164c)])
                [_0x495aa4(0xa9c)](_0x5a860b)
                ["u8"](_0x339977)
                [_0x495aa4(0xa9c)](_0x2e5b63)
                ["u8"](
                  _0x144ef2[_0x495aa4(0x4f7)](_0x5a860b, _0x339977, _0x2e5b63),
                )
                ["u8"](_0x144ef2["getMeta"](_0x5a860b, _0x339977, _0x2e5b63))
                ["u8"](0x1),
            ),
              Et(_0x1d72a3));
            break;
          }
        }
        if (_0x158fef === f["BED"]) {
          const [_0x460533, _0x5589c3] = ur[_0x54568f & 0x3];
          if (!ln(_0x1d72a3, _0x5a860b + _0x460533, _0x2e5b63 + _0x5589c3))
            break;
        }
        if (
          _0x158fef === f[_0x495aa4(0x11c6)] &&
          wS(
            _0x1d72a3[_0x495aa4(0x1581)],
            _0x144ef2[_0x495aa4(0x4f7)](_0x5a860b, _0x339977, _0x2e5b63),
            _0x47444c,
          )
        ) {
          const _0x5af73c = _0x144ef2[_0x495aa4(0x4f7)](
              _0x5a860b,
              _0x339977,
              _0x2e5b63,
            ),
            _0x48c8ba = _0x1d72a3[_0x495aa4(0x1761)] ?? 0x0,
            _0x50893a =
              (_0x4ed5f1 = Ke[_0x495aa4(0x11b7)](
                _0x1d72a3[_0x495aa4(0x1351)],
              )) == null
                ? void 0x0
                : _0x4ed5f1[_0x48c8ba],
            _0x31028f =
              (_0x50893a == null ? void 0x0 : _0x50893a[0x0]) ===
                _0x1d72a3["held"] && _0x50893a[0x1] === 0x1
                ? (_0x50893a[0x2] ?? co(_0x1d72a3["held"]))
                : 0x0;
          if (
            !_0x1d72a3[_0x495aa4(0x1ec2)] &&
            (_0x31028f <= 0x0 ||
              (_0x1d72a3["planet"] === C[_0x495aa4(0x465)] &&
                _0x1d72a3["held"] !== A[_0x495aa4(0xd39)]))
          ) {
            (ie(
              _0x1d72a3,
              new W(L["S_SET_BLOCK"])
                [_0x495aa4(0xa9c)](_0x5a860b)
                ["u8"](_0x339977)
                [_0x495aa4(0xa9c)](_0x2e5b63)
                ["u8"](_0x5af73c)
                ["u8"](
                  _0x144ef2[_0x495aa4(0x1dfa)](_0x5a860b, _0x339977, _0x2e5b63),
                )
                ["u8"](0x1),
            ),
              Et(_0x1d72a3));
            break;
          }
          const _0x2d4893 = DP(
            _0x5a860b,
            _0x339977,
            _0x2e5b63,
            _0x5af73c,
            (_0xe85c67, _0x3d89af, _0xf5da8c) =>
              _0x144ef2["getBlock"](_0xe85c67, _0x3d89af, _0xf5da8c),
            (_0x4f2bde, _0x20b335, _0x53c1ba) =>
              bt(Ge, _0x4f2bde, _0x53c1ba, 0x0) &&
              xf(
                _0x1d72a3[_0x495aa4(0x1ed3)],
                _0x4f2bde,
                _0x20b335,
                _0x53c1ba,
                f[_0x495aa4(0x11c6)],
              ),
            _0x1d72a3[_0x495aa4(0x1ec2)] ? 0x100 : _0x31028f,
          );
          let _0x35231a = 0x0;
          for (const [_0x2d669c, _0xd5dc34, _0x107a52] of _0x2d4893)
            (_0x1d72a3["planet"] === C["MOON"]
              ? Us(_0x2d669c, _0xd5dc34, _0x107a52, f[_0x495aa4(0x11c6)], 0x0)
              : pa(_0x2d669c, _0xd5dc34, _0x107a52),
              _0x144ef2[_0x495aa4(0x4f7)](_0x2d669c, _0xd5dc34, _0x107a52) ===
                f[_0x495aa4(0x11c6)] && _0x35231a++);
          if (_0x35231a && !_0x1d72a3[_0x495aa4(0x1ec2)]) {
            (v1(_0x1d72a3, _0x48c8ba, _0x35231a, 0x100),
              Lt[_0x495aa4(0x124)](
                _0x1d72a3[_0x495aa4(0x1351)],
                (Lt[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? 0x0) +
                  0x1,
              ));
            const _0x3fde0c = O0(_0x5af73c, 0x0),
              _0x2d4e2c = wn(
                _0x1d72a3,
                _0x3fde0c,
                _0x35231a,
                co(_0x3fde0c),
                To(_0x3fde0c),
                0xffff,
                !0x1,
              );
            (_0x2d4e2c < _0x35231a &&
              Qt(
                _0x3fde0c,
                _0x5a860b,
                _0x339977,
                _0x2e5b63,
                _0x35231a - _0x2d4e2c,
                0x0,
                !0x0,
                0xea60,
                co(_0x3fde0c),
                0x0,
                0xffff,
                _0x1d72a3[_0x495aa4(0x1ed3)],
              ),
              Yn(_0x1d72a3[_0x495aa4(0x1351)]),
              Et(_0x1d72a3));
          }
          break;
        }
        if (_0x1d72a3[_0x495aa4(0x1ed3)] === C["MOON"]) {
          const _0x300ba2 = mt["getBlock"](_0x5a860b, _0x339977, _0x2e5b63);
          if (
            _0x158fef === f[_0x495aa4(0xe0e)] ||
            _0x158fef === f[_0x495aa4(0x1e1d)]
          ) {
            const _0x2d9a09 = Xp(
              _0x158fef,
              _0x54568f,
              _0x5a860b,
              _0x339977,
              _0x2e5b63,
            );
            if (
              !_0x2d9a09 ||
              (!Xe(mt["getBlock"](..._0x2d9a09)) &&
                !(
                  _0x158fef === f[_0x495aa4(0x1e1d)] &&
                  mt[_0x495aa4(0x4f7)](..._0x2d9a09) === f[_0x495aa4(0x1e03)]
                ))
            ) {
              ie(
                _0x1d72a3,
                new W(L["S_SET_BLOCK"])
                  [_0x495aa4(0xa9c)](_0x5a860b)
                  ["u8"](_0x339977)
                  [_0x495aa4(0xa9c)](_0x2e5b63)
                  ["u8"](_0x300ba2)
                  ["u8"](mt[_0x495aa4(0x1dfa)](_0x5a860b, _0x339977, _0x2e5b63))
                  ["u8"](0x1),
              );
              break;
            }
          }
          if (
            _0x158fef !== f[_0x495aa4(0x11c6)] &&
            !fl[_0x495aa4(0x1b5e)](_0x158fef)
          )
            break;
          if (
            _0x158fef === f[_0x495aa4(0x11c6)] &&
            !_0x1d72a3[_0x495aa4(0x1ec2)] &&
            Ox[_0x495aa4(0x448)](_0x300ba2) &&
            _0x1d72a3[_0x495aa4(0x1581)] !== A[_0x495aa4(0xd39)]
          ) {
            (ie(
              _0x1d72a3,
              new W(L["S_SET_BLOCK"])
                [_0x495aa4(0xa9c)](_0x5a860b)
                ["u8"](_0x339977)
                [_0x495aa4(0xa9c)](_0x2e5b63)
                ["u8"](_0x300ba2)
                ["u8"](mt["getMeta"](_0x5a860b, _0x339977, _0x2e5b63))
                ["u8"](0x0),
            ),
              P(0x2, _0x495aa4(0x192d), _0x1d72a3));
            break;
          }
          if (
            ((_0x3c315c = Q[_0x300ba2]) == null
              ? void 0x0
              : _0x3c315c[_0x495aa4(0x587)]) < 0x0 &&
            _0x158fef === f[_0x495aa4(0x11c6)]
          ) {
            ie(
              _0x1d72a3,
              new W(L[_0x495aa4(0x164c)])
                [_0x495aa4(0xa9c)](_0x5a860b)
                ["u8"](_0x339977)
                [_0x495aa4(0xa9c)](_0x2e5b63)
                ["u8"](_0x300ba2)
                ["u8"](mt[_0x495aa4(0x1dfa)](_0x5a860b, _0x339977, _0x2e5b63))
                ["u8"](0x0),
            );
            break;
          }
          if (
            _0x158fef === f[_0x495aa4(0x11c6)] &&
            !_0x1d72a3[_0x495aa4(0x1ec2)]
          ) {
            const _0x3e536a = O0(
              _0x300ba2,
              mt[_0x495aa4(0x1dfa)](_0x5a860b, _0x339977, _0x2e5b63),
            );
            _0x3e536a > 0x0 &&
              !ou(_0x1d72a3[_0x495aa4(0x1351)], _0x3e536a, 0x1) &&
              Qt(
                _0x3e536a,
                _0x5a860b,
                _0x339977,
                _0x2e5b63,
                0x1,
                0x0,
                !0x0,
                0xea60,
                co(_0x3e536a),
                To(_0x3e536a),
                0xffff,
                C["MOON"],
              );
          }
          (Us(
            _0x5a860b,
            _0x339977,
            _0x2e5b63,
            _0x158fef,
            _0x158fef === f[_0x495aa4(0x2c8)]
              ? Wy(_0x1d72a3["x"], _0x1d72a3["z"], _0x5a860b, _0x2e5b63)
              : _0x54568f,
          ),
            _0x158fef === f[_0x495aa4(0x2f5)] &&
              Uf[_0x495aa4(0x17f3)](
                _0x5a860b,
                _0x339977,
                _0x2e5b63,
                _0x1d72a3[_0x495aa4(0x1351)],
                _0x495aa4(0x1d9),
              ),
            _0x158fef === f["SIGN"] &&
              (Ma["create"](
                _0x5a860b,
                _0x339977,
                _0x2e5b63,
                _0x1d72a3[_0x495aa4(0x1351)],
              ),
              ie(
                _0x1d72a3,
                eu(
                  _0x1d72a3[_0x495aa4(0x1ed3)],
                  Ma[_0x495aa4(0x11b7)](_0x5a860b, _0x339977, _0x2e5b63),
                  _0x5a860b,
                  _0x339977,
                  _0x2e5b63,
                  !0x0,
                ),
              )));
          break;
        }
        const _0x5813c7 = B[_0x495aa4(0x4f7)](_0x5a860b, _0x339977, _0x2e5b63);
        if (_0x158fef === f[_0x495aa4(0x11c6)]) {
          if (
            ((_0x34fee5 = Q[_0x5813c7]) == null
              ? void 0x0
              : _0x34fee5[_0x495aa4(0x587)]) < 0x0
          ) {
            ie(
              _0x1d72a3,
              new W(L[_0x495aa4(0x164c)])
                ["i32"](_0x5a860b)
                ["u8"](_0x339977)
                ["i32"](_0x2e5b63)
                ["u8"](_0x5813c7)
                ["u8"](B[_0x495aa4(0x1dfa)](_0x5a860b, _0x339977, _0x2e5b63))
                ["u8"](0x0),
            );
            break;
          }
          if (
            !_0x1d72a3["creative"] &&
            _0x5813c7 === f[_0x495aa4(0x485)] &&
            (Su[_0x1d72a3[_0x495aa4(0x1581)]] ?? 0x0) < 0x2
          ) {
            (ie(
              _0x1d72a3,
              new W(L[_0x495aa4(0x164c)])
                [_0x495aa4(0xa9c)](_0x5a860b)
                ["u8"](_0x339977)
                [_0x495aa4(0xa9c)](_0x2e5b63)
                ["u8"](_0x5813c7)
                ["u8"](B[_0x495aa4(0x1dfa)](_0x5a860b, _0x339977, _0x2e5b63))
                ["u8"](0x0),
            ),
              P(0x2, _0x495aa4(0x184d), _0x1d72a3));
            break;
          }
          const _0x48b430 = O0(
            _0x5813c7,
            B[_0x495aa4(0x1dfa)](_0x5a860b, _0x339977, _0x2e5b63),
          );
          (!_0x1d72a3[_0x495aa4(0x1ec2)] &&
            _0x48b430 > 0x0 &&
            !ou(_0x1d72a3[_0x495aa4(0x1351)], _0x48b430, 0x1) &&
            Qt(_0x48b430, _0x5a860b, _0x339977, _0x2e5b63, 0x1, 0x0, !0x0),
            (r5(
              _0x1d72a3["held"],
              _0x47444c,
              !!(_0x1d72a3[_0x495aa4(0x102)] & 0x10),
            ) &&
              Mn(_0x5813c7) &&
              zT(_0x5a860b, _0x339977, _0x2e5b63, !_0x1d72a3["creative"])) ||
              pa(_0x5a860b, _0x339977, _0x2e5b63));
          break;
        }
        if (fR[_0x158fef] !== void 0x0) {
          const _0x23a158 = B["getBlock"](
              _0x5a860b,
              _0x339977 - 0x1,
              _0x2e5b63,
            ),
            _0xcd865e = Xg(_0x158fef)(_0x23a158),
            _0x3d9e98 = !ep(_0x158fef);
          if (!(
            _0x1d72a3["held"] === fR[_0x158fef] &&
            _0x5813c7 === f[_0x495aa4(0x11c6)] &&
            _0x339977 > 0x0 &&
            _0xcd865e &&
            (!_0x3d9e98 || dR(_0x5a860b, _0x339977 - 0x1, _0x2e5b63))
          )) {
            (ie(
              _0x1d72a3,
              new W(L[_0x495aa4(0x164c)])
                [_0x495aa4(0xa9c)](_0x5a860b)
                ["u8"](_0x339977)
                ["i32"](_0x2e5b63)
                ["u8"](_0x5813c7)
                ["u8"](B[_0x495aa4(0x1dfa)](_0x5a860b, _0x339977, _0x2e5b63))
                ["u8"](0x0),
            ),
              _0xcd865e
                ? _0x3d9e98 &&
                  !dR(_0x5a860b, _0x339977 - 0x1, _0x2e5b63) &&
                  P(
                    0x2,
                    "Crops\x20need\x20water\x20within\x208\x20blocks",
                    _0x1d72a3,
                  )
                : P(
                    0x2,
                    ep(_0x158fef) ? _0x495aa4(0x6bf) : _0x495aa4(0x1995),
                    _0x1d72a3,
                  ));
            break;
          }
          Ue(_0x5a860b, _0x339977, _0x2e5b63, _0x158fef, 0x0);
          break;
        }
        if (!fl[_0x495aa4(0x1b5e)](_0x158fef)) break;
        const _0xd6d902 = (_0x1bf8f7) =>
            _0x1bf8f7 === f[_0x495aa4(0x11c6)] ||
            _0x1bf8f7 === f[_0x495aa4(0x1bb5)] ||
            _0x1bf8f7 === f[_0x495aa4(0xd36)],
          _0x1e557f = _0x5813c7 === f[_0x495aa4(0x1bb5)],
          _0xcd517f = _0x5813c7 === f[_0x495aa4(0xd36)];
        if ((_0x1e557f || _0xcd517f) && B3[_0x495aa4(0x448)](_0x158fef)) {
          (ie(
            _0x1d72a3,
            new W(L[_0x495aa4(0x164c)])
              ["i32"](_0x5a860b)
              ["u8"](_0x339977)
              ["i32"](_0x2e5b63)
              ["u8"](_0x5813c7)
              ["u8"](B["getMeta"](_0x5a860b, _0x339977, _0x2e5b63))
              ["u8"](0x0),
          ),
            P(0x2, _0x495aa4(0x11b), _0x1d72a3));
          break;
        }
        const _0x29b2cb =
          (_0x158fef === f[_0x495aa4(0x2c8)]
            ? Wy(_0x1d72a3["x"], _0x1d72a3["z"], _0x5a860b, _0x2e5b63)
            : _0x54568f & -0xc1) |
          (_0x1e557f && o1(_0x158fef) ? Kh : 0x0) |
          (_0xcd517f && o1(_0x158fef) ? fL : 0x0);
        if (_0x158fef === f[_0x495aa4(0x137e)]) {
          const [_0x4f33af, _0xb5c6b] = ur[_0x54568f & 0x3],
            _0x5b88b2 = _0x5a860b + _0x4f33af,
            _0x558fc9 = _0x2e5b63 + _0xb5c6b;
          if (
            !_0xd6d902(_0x5813c7) ||
            !_0xd6d902(B[_0x495aa4(0x4f7)](_0x5b88b2, _0x339977, _0x558fc9))
          ) {
            ie(
              _0x1d72a3,
              new W(L["S_SET_BLOCK"])
                [_0x495aa4(0xa9c)](_0x5a860b)
                ["u8"](_0x339977)
                [_0x495aa4(0xa9c)](_0x2e5b63)
                ["u8"](_0x5813c7)
                ["u8"](B[_0x495aa4(0x1dfa)](_0x5a860b, _0x339977, _0x2e5b63))
                ["u8"](0x0),
            );
            break;
          }
          (Ue(
            _0x5a860b,
            _0x339977,
            _0x2e5b63,
            f[_0x495aa4(0x137e)],
            _0x54568f & 0x3,
          ),
            Ue(
              _0x5b88b2,
              _0x339977,
              _0x558fc9,
              f[_0x495aa4(0x137e)],
              (_0x54568f & 0x3) | Tu,
            ));
          break;
        }
        if (nn(_0x158fef)) {
          if (
            _0x339977 >= 0x7e ||
            !_0xd6d902(_0x5813c7) ||
            !_0xd6d902(
              B[_0x495aa4(0x4f7)](_0x5a860b, _0x339977 + 0x1, _0x2e5b63),
            )
          ) {
            ie(
              _0x1d72a3,
              new W(L[_0x495aa4(0x164c)])
                ["i32"](_0x5a860b)
                ["u8"](_0x339977)
                ["i32"](_0x2e5b63)
                ["u8"](_0x5813c7)
                ["u8"](B[_0x495aa4(0x1dfa)](_0x5a860b, _0x339977, _0x2e5b63))
                ["u8"](0x0),
            );
            break;
          }
          const _0x324f38 = vL(
            (_0x35203b, _0x457261, _0x1b9f34) =>
              B[_0x495aa4(0x4f7)](_0x35203b, _0x457261, _0x1b9f34),
            (_0x4f613f, _0x2e14a, _0x5282ae) =>
              B[_0x495aa4(0x1dfa)](_0x4f613f, _0x2e14a, _0x5282ae),
            _0x5a860b,
            _0x339977,
            _0x2e5b63,
            _0x54568f & 0x3,
          );
          if (
            (Ue(
              _0x5a860b,
              _0x339977,
              _0x2e5b63,
              _0x158fef,
              _0x324f38[_0x495aa4(0x1f6)],
            ),
            Ue(
              _0x5a860b,
              _0x339977 + 0x1,
              _0x2e5b63,
              _0x158fef,
              _0x324f38[_0x495aa4(0x1f6)] | Pi,
            ),
            _0x324f38["flip"])
          ) {
            const [_0x18ef67, _0xf9b046, _0x130cde] =
                _0x324f38[_0x495aa4(0x17db)],
              _0x214da4 = B[_0x495aa4(0x4f7)](_0x18ef67, _0xf9b046, _0x130cde);
            (Ue(
              _0x18ef67,
              _0xf9b046,
              _0x130cde,
              _0x214da4,
              B["getMeta"](_0x18ef67, _0xf9b046, _0x130cde) | gf,
            ),
              B[_0x495aa4(0x4f7)](_0x18ef67, _0xf9b046 + 0x1, _0x130cde) ===
                _0x214da4 &&
                Ue(
                  _0x18ef67,
                  _0xf9b046 + 0x1,
                  _0x130cde,
                  _0x214da4,
                  B[_0x495aa4(0x1dfa)](_0x18ef67, _0xf9b046 + 0x1, _0x130cde) |
                    gf,
                ));
          }
          break;
        }
        if (ui(_0x158fef)) {
          const _0x2e7403 = B[_0x495aa4(0x4f7)](
              _0x5a860b,
              _0x339977 - 0x1,
              _0x2e5b63,
            ),
            _0x188081 =
              _0x158fef === f["FIRE"]
                ? _0x2e7403 > 0x0 && Q[_0x2e7403][_0x495aa4(0xfdf)]
                : _0x158fef === f[_0x495aa4(0x494)]
                  ? _0x2e7403 === f["SAND"] ||
                    _0x2e7403 === f[_0x495aa4(0x13cd)] ||
                    _0x2e7403 === f[_0x495aa4(0x1ec3)]
                  : _0x2e7403 === f[_0x495aa4(0x13cd)] ||
                    _0x2e7403 === f[_0x495aa4(0x1ec3)] ||
                    _0x2e7403 === f[_0x495aa4(0xbcb)] ||
                    (_0x158fef === f[_0x495aa4(0x1076)] &&
                      _0x2e7403 === f[_0x495aa4(0x1f6d)]);
          if (!_0xd6d902(_0x5813c7) || !_0x188081) {
            ie(
              _0x1d72a3,
              new W(L[_0x495aa4(0x164c)])
                ["i32"](_0x5a860b)
                ["u8"](_0x339977)
                [_0x495aa4(0xa9c)](_0x2e5b63)
                ["u8"](_0x5813c7)
                ["u8"](B[_0x495aa4(0x1dfa)](_0x5a860b, _0x339977, _0x2e5b63))
                ["u8"](0x0),
            );
            break;
          }
          Ue(_0x5a860b, _0x339977, _0x2e5b63, _0x158fef, 0x0);
          break;
        }
        if (
          _0x158fef === f[_0x495aa4(0x5b3)] &&
          B[_0x495aa4(0x4f7)](_0x5a860b, _0x339977 - 0x1, _0x2e5b63) !==
            f["SAND"] &&
          B[_0x495aa4(0x4f7)](_0x5a860b, _0x339977 - 0x1, _0x2e5b63) !==
            f["CACTUS"]
        ) {
          ie(
            _0x1d72a3,
            new W(L[_0x495aa4(0x164c)])
              [_0x495aa4(0xa9c)](_0x5a860b)
              ["u8"](_0x339977)
              [_0x495aa4(0xa9c)](_0x2e5b63)
              ["u8"](_0x5813c7)
              ["u8"](B[_0x495aa4(0x1dfa)](_0x5a860b, _0x339977, _0x2e5b63))
              ["u8"](0x0),
          );
          break;
        }
        const _0x59f2c0 = [
          f[_0x495aa4(0x7b9)],
          f[_0x495aa4(0x13c2)],
          f[_0x495aa4(0x79b)],
          f["PLATE"],
          f[_0x495aa4(0xac5)],
          f[_0x495aa4(0x8c2)],
          f[_0x495aa4(0xe0e)],
          f[_0x495aa4(0x1e1d)],
        ][_0x495aa4(0x1b5e)](_0x158fef)
          ? Xp(_0x158fef, _0x29b2cb, _0x5a860b, _0x339977, _0x2e5b63)
          : null;
        if (
          !_0xd6d902(_0x5813c7) ||
          (_0x59f2c0 &&
            !Xe(B[_0x495aa4(0x4f7)](..._0x59f2c0)) &&
            !(
              _0x158fef === f[_0x495aa4(0x1e1d)] &&
              B[_0x495aa4(0x4f7)](..._0x59f2c0) === f[_0x495aa4(0x1e03)]
            ))
        ) {
          ie(
            _0x1d72a3,
            new W(L["S_SET_BLOCK"])
              ["i32"](_0x5a860b)
              ["u8"](_0x339977)
              [_0x495aa4(0xa9c)](_0x2e5b63)
              ["u8"](_0x5813c7)
              ["u8"](B[_0x495aa4(0x1dfa)](_0x5a860b, _0x339977, _0x2e5b63))
              ["u8"](0x0),
          );
          break;
        }
        (Ue(_0x5a860b, _0x339977, _0x2e5b63, _0x158fef, _0x29b2cb),
          _0x158fef === f[_0x495aa4(0x2f5)] &&
            dc[_0x495aa4(0x17f3)](
              _0x5a860b,
              _0x339977,
              _0x2e5b63,
              _0x1d72a3["name"],
              _0x495aa4(0x1d9),
            ),
          _0x158fef === f[_0x495aa4(0x8c2)] &&
            (Ys[_0x495aa4(0x17f3)](
              _0x5a860b,
              _0x339977,
              _0x2e5b63,
              _0x1d72a3[_0x495aa4(0x1351)],
            ),
            ie(
              _0x1d72a3,
              eu(
                _0x1d72a3["planet"],
                Ys[_0x495aa4(0x11b7)](_0x5a860b, _0x339977, _0x2e5b63),
                _0x5a860b,
                _0x339977,
                _0x2e5b63,
                !0x0,
              ),
            )),
          _0x158fef === f[_0x495aa4(0xe66)] &&
            dl[_0x495aa4(0x124)](
              _0x5a860b + "," + _0x339977 + "," + _0x2e5b63,
              _0x1d72a3[_0x495aa4(0x1351)],
            ),
          _0x158fef === f["DYNAMITE"] &&
            ml[_0x495aa4(0x124)](
              _0x5a860b + "," + _0x339977 + "," + _0x2e5b63,
              _0x1d72a3[_0x495aa4(0x1351)],
            ));
        break;
      }
      case L["C_BLOCK_HIT"]: {
        const _0x32c54c = _0x3f4b28[_0x495aa4(0xa9c)](),
          _0x41c670 = _0x3f4b28["u8"](),
          _0x24cd90 = _0x3f4b28[_0x495aa4(0xa9c)]();
        let _0x3662cd = _0x3f4b28["u8"]();
        const _0x51e1a6 = hg(_0x3f4b28);
        if (
          ia(_0x1d72a3["planet"], _0x32c54c, _0x24cd90) ||
          !ln(_0x1d72a3, _0x32c54c, _0x24cd90) ||
          lf(_0x1d72a3, _0x32c54c, _0x41c670, _0x24cd90, !0x1) ||
          !i0(
            _0x1d72a3,
            { x: _0x32c54c + 0.5, y: _0x41c670 + 0.5, z: _0x24cd90 + 0.5 },
            !!Fh(_0x1d72a3, xr(_0x1d72a3)),
          )
        )
          break;
        if (!it) {
          const _0x2f6ac9 = xr(_0x1d72a3),
            _0x2241e8 = Wh(_0x1d72a3[_0x495aa4(0x1581)]),
            _0x5c8f86 = Fh(_0x1d72a3, _0x2f6ac9),
            _0x5dfaa3 =
              _0x2f6ac9 !== _0x1d72a3 &&
              _0x495aa4(0x58f) in _0x2f6ac9 &&
              (_0x2f6ac9[_0x495aa4(0x30c)] === _0x1d72a3["id"] ||
                Ds(_0x1d72a3, _0x2f6ac9) ||
                !!_0x5c8f86),
            _0x2a28db = {
              x: _0x2f6ac9["x"],
              y: _0x2f6ac9 === _0x1d72a3 ? go(_0x1d72a3) : _0x2f6ac9["y"] + 1.5,
              z: _0x2f6ac9["z"],
            },
            _0x2fd0be =
              (_0x51e1a6 == null ? void 0x0 : _0x51e1a6[_0x495aa4(0x106d)]) ??
              _0x2a28db,
            _0x533107 = (_0x51e1a6 == null ? void 0x0 : _0x51e1a6["point"]) ?? {
              x: _0x32c54c + 0.5,
              y: _0x41c670 + 0.5,
              z: _0x24cd90 + 0.5,
            },
            _0x58e544 = _0x5c8f86
              ? _0x5c8f86[_0x495aa4(0x484)]
              : _0x5dfaa3
                ? h1(_0x2f6ac9["type"])
                : ((_0x2241e8 == null
                    ? void 0x0
                    : _0x2241e8[_0x495aa4(0x484)]) ?? 0x4);
          if (
            !_0x1d72a3["alive"] ||
            _0x1d72a3[_0x495aa4(0xe3)] ||
            ![
              ...Object["values"](_0x2fd0be),
              ...Object[_0x495aa4(0x1e01)](_0x533107),
            ][_0x495aa4(0xe00)](Number[_0x495aa4(0xb9c)]) ||
            Math[_0x495aa4(0x1400)](
              _0x2fd0be["x"] - _0x2f6ac9["x"],
              _0x2fd0be["y"] - _0x2f6ac9["y"],
              _0x2fd0be["z"] - _0x2f6ac9["z"],
            ) > (_0x2f6ac9 === _0x1d72a3 ? 0x4 : 0x20) ||
            Math["hypot"](
              _0x533107["x"] - _0x2fd0be["x"],
              _0x533107["y"] - _0x2fd0be["y"],
              _0x533107["z"] - _0x2fd0be["z"],
            ) >
              _0x58e544 + 0.1 ||
            _0x533107["x"] < _0x32c54c - 0.002 ||
            _0x533107["x"] > _0x32c54c + 1.002 ||
            _0x533107["y"] < _0x41c670 - 0.002 ||
            _0x533107["y"] > _0x41c670 + 1.002 ||
            _0x533107["z"] < _0x24cd90 - 0.002 ||
            _0x533107["z"] > _0x24cd90 + 1.002
          )
            break;
          const _0x54c225 = (_0x4dec08, _0x129d37, _0x2fa394) =>
            Zf(_0x4dec08, _0x129d37, _0x2fa394, _0x1d72a3[_0x495aa4(0x1ed3)]);
          if (
            !f1(
              _0x2a28db["x"],
              _0x2a28db["y"],
              _0x2a28db["z"],
              _0x2fd0be["x"],
              _0x2fd0be["y"],
              _0x2fd0be["z"],
              _0x54c225,
            ) ||
            !f1(
              _0x2fd0be["x"],
              _0x2fd0be["y"],
              _0x2fd0be["z"],
              _0x533107["x"],
              _0x533107["y"],
              _0x533107["z"],
              (_0x2df66a, _0x1f9b73, _0x248123) =>
                !(
                  _0x2df66a === _0x32c54c &&
                  _0x1f9b73 === _0x41c670 &&
                  _0x248123 === _0x24cd90
                ) && _0x54c225(_0x2df66a, _0x1f9b73, _0x248123),
            )
          )
            break;
          if (_0x5dfaa3) {
            if (!Ur(_0x1d72a3, _0x495aa4(0xb77), 0x1e, 0x8)) break;
            _0x3662cd = Math[_0x495aa4(0x48a)](_0x3662cd, 0x23);
          } else {
            const _0x436b8b = z1[_0x495aa4(0x11b7)](_0x1d72a3);
            if (
              !_0x2241e8 ||
              !_0x436b8b ||
              _0x436b8b[_0x495aa4(0xcd8)] !== _0x1d72a3["held"] ||
              _0x436b8b[_0x495aa4(0xf2f)] < performance[_0x495aa4(0x1cc6)]()
            )
              break;
            const _0x57fed4 = Tt(
              Ce(_0x1d72a3[_0x495aa4(0x1ed3)])["getBlock"](
                _0x32c54c,
                _0x41c670,
                _0x24cd90,
              ),
            );
            if (_0x57fed4) {
              if (_0x436b8b[_0x495aa4(0xe1e)]-- <= 0x0) break;
            } else {
              if (_0x436b8b["hits"]-- <= 0x0) break;
              T4(_0x1d72a3, {
                x: _0x32c54c + 0.5,
                y: _0x41c670 + 0.5,
                z: _0x24cd90 + 0.5,
              });
            }
            _0x3662cd = Math[_0x495aa4(0x48a)](
              _0x3662cd,
              _0x57fed4
                ? 0xfa
                : oM(_0x1d72a3[_0x495aa4(0x1581)])[_0x495aa4(0x3aa)] *
                    (W1(_0x436b8b[_0x495aa4(0x147e)]) ? 0x3 : 0x1),
            );
          }
        }
        if (_0x1d72a3[_0x495aa4(0x1ed3)] === C[_0x495aa4(0x465)]) {
          const _0x48828f = mt[_0x495aa4(0x4f7)](
            _0x32c54c,
            _0x41c670,
            _0x24cd90,
          );
          if (
            _0x48828f === f[_0x495aa4(0x11c6)] ||
            _0x48828f === f[_0x495aa4(0x1bb5)] ||
            wx(_0x48828f) ||
            xu(_0x48828f)
          )
            break;
          if (
            _0x48828f === f[_0x495aa4(0xef6)] ||
            _0x48828f === f[_0x495aa4(0x1088)]
          ) {
            lE(
              C[_0x495aa4(0x465)],
              _0x32c54c,
              _0x41c670,
              _0x24cd90,
              _0x48828f,
              _0x1d72a3["id"],
              0x0,
            );
            break;
          }
          if (
            Ox[_0x495aa4(0x448)](_0x48828f) &&
            _0x1d72a3["held"] !== A[_0x495aa4(0xd39)] &&
            !_0x1d72a3[_0x495aa4(0x1ec2)]
          ) {
            P(
              0x2,
              "Lunar\x20blocks\x20require\x20a\x20white\x20lunar\x20drill",
              _0x1d72a3,
            );
            break;
          }
          const _0x1e9704 =
              nn(_0x48828f) &&
              mt["getMeta"](_0x32c54c, _0x41c670, _0x24cd90) & Pi
                ? _0x41c670 - 0x1
                : _0x41c670,
            _0x333912 =
              ((_0x422faf = Q[_0x48828f]) == null
                ? void 0x0
                : _0x422faf[_0x495aa4(0x587)]) ?? -0x1;
          if (
            _0x333912 < 0x0 ||
            !mt["damageBlock"](
              _0x32c54c,
              _0x1e9704,
              _0x24cd90,
              _0x3662cd,
              _0x333912,
            )
          )
            break;
          if (
            (sa(_0x48828f) &&
              pn["delete"](
                Ss(_0x32c54c, _0x1e9704, _0x24cd90, C[_0x495aa4(0x465)]),
              ),
            !_0x1d72a3["creative"])
          ) {
            const _0xec35b4 = O0(
              _0x48828f,
              mt[_0x495aa4(0x1dfa)](_0x32c54c, _0x1e9704, _0x24cd90),
            );
            _0xec35b4 > 0x0 &&
              !ou(_0x1d72a3[_0x495aa4(0x1351)], _0xec35b4, 0x1) &&
              Qt(
                _0xec35b4,
                _0x32c54c,
                _0x1e9704,
                _0x24cd90,
                0x1,
                0x0,
                !0x0,
                0xea60,
                co(_0xec35b4),
                To(_0xec35b4),
                0xffff,
                C["MOON"],
              );
          }
          Us(_0x32c54c, _0x1e9704, _0x24cd90, f["AIR"]);
          break;
        }
        const _0x1ef8c1 = B["getBlock"](_0x32c54c, _0x41c670, _0x24cd90);
        if (_0x1ef8c1 === f[_0x495aa4(0x11c6)] || _0x1ef8c1 === f["WATER"])
          break;
        if (_0x1ef8c1 === f["MINE_AP"] || _0x1ef8c1 === f[_0x495aa4(0x1088)]) {
          lE(
            C[_0x495aa4(0x9e2)],
            _0x32c54c,
            _0x41c670,
            _0x24cd90,
            _0x1ef8c1,
            _0x1d72a3["id"],
            0x0,
          );
          break;
        }
        if (wx(_0x1ef8c1) || xu(_0x1ef8c1)) break;
        const _0x1fad64 =
            nn(_0x1ef8c1) &&
            B[_0x495aa4(0x1dfa)](_0x32c54c, _0x41c670, _0x24cd90) & Pi
              ? _0x41c670 - 0x1
              : _0x41c670,
          _0x236bee = Bk(_0x32c54c, _0x1fad64, _0x24cd90, _0x1ef8c1);
        if (_0x236bee < 0x0) break;
        B[_0x495aa4(0x364)](
          _0x32c54c,
          _0x1fad64,
          _0x24cd90,
          _0x3662cd,
          _0x236bee,
        ) && pa(_0x32c54c, _0x1fad64, _0x24cd90);
        break;
      }
      case L[_0x495aa4(0x13a7)]: {
        const _0x17a9c5 = _0x3f4b28["i32"](),
          _0x5be33b = _0x3f4b28["u8"](),
          _0x41d430 = _0x3f4b28[_0x495aa4(0xa9c)]();
        if (_0x1d72a3[_0x495aa4(0x1ed3)] !== C[_0x495aa4(0x9e2)]) break;
        const _0x166053 = _0x1d72a3["x"] - (_0x17a9c5 + 0.5),
          _0x408ada = _0x1d72a3["y"] + 0.9 - _0x5be33b,
          _0x2ddfab = _0x1d72a3["z"] - (_0x41d430 + 0.5);
        if (
          _0x166053 * _0x166053 +
            _0x408ada * _0x408ada +
            _0x2ddfab * _0x2ddfab >
            0x31 ||
          !Oi(
            _0x1d72a3["x"],
            go(_0x1d72a3),
            _0x1d72a3["z"],
            _0x17a9c5 + 0.5,
            _0x5be33b + 0.5,
            _0x41d430 + 0.5,
            C[_0x495aa4(0x9e2)],
          ) ||
          (!Wa(B["getBlock"](_0x17a9c5, _0x5be33b, _0x41d430)) &&
            !ac(B["getBlock"](_0x17a9c5, _0x5be33b, _0x41d430)))
        )
          break;
        RO(_0x1d72a3, _0x17a9c5, _0x5be33b, _0x41d430);
        break;
      }
      case L[_0x495aa4(0x1ba7)]: {
        UU(_0x1d72a3, _0x3f4b28);
        break;
      }
      case L["C_SIGN"]: {
        const _0x3239fd = _0x3f4b28["u8"](),
          _0x4d2a62 = _0x3f4b28["i32"](),
          _0x3e3324 = _0x3f4b28["u8"](),
          _0x4e55cb = _0x3f4b28[_0x495aa4(0xa9c)]();
        if (
          !ln(_0x1d72a3, _0x4d2a62, _0x4e55cb) ||
          !_0x1d72a3[_0x495aa4(0x174b)] ||
          _0x1d72a3[_0x495aa4(0x1713)] !== -0x1 ||
          Math[_0x495aa4(0x1400)](
            _0x1d72a3["x"] - _0x4d2a62 - 0.5,
            _0x1d72a3["y"] + 0.9 - _0x3e3324,
            _0x1d72a3["z"] - _0x4e55cb - 0.5,
          ) > 0x7 ||
          Ce(_0x1d72a3[_0x495aa4(0x1ed3)])[_0x495aa4(0x4f7)](
            _0x4d2a62,
            _0x3e3324,
            _0x4e55cb,
          ) !== f[_0x495aa4(0x8c2)] ||
          !Oi(
            _0x1d72a3["x"],
            go(_0x1d72a3),
            _0x1d72a3["z"],
            _0x4d2a62 + 0.5,
            _0x3e3324 + 0.5,
            _0x4e55cb + 0.5,
            _0x1d72a3[_0x495aa4(0x1ed3)],
          )
        )
          break;
        const _0x17c79b = sl(_0x1d72a3[_0x495aa4(0x1ed3)]);
        if (
          (_0x17c79b[_0x495aa4(0x17f3)](
            _0x4d2a62,
            _0x3e3324,
            _0x4e55cb,
            _0x1d72a3["name"],
          ),
          _0x3239fd === 0x0)
        )
          ie(
            _0x1d72a3,
            eu(
              _0x1d72a3[_0x495aa4(0x1ed3)],
              _0x17c79b[_0x495aa4(0x11b7)](_0x4d2a62, _0x3e3324, _0x4e55cb),
              _0x4d2a62,
              _0x3e3324,
              _0x4e55cb,
              !0x0,
            ),
          );
        else {
          if (_0x3239fd === 0x1) {
            if (
              ia(_0x1d72a3[_0x495aa4(0x1ed3)], _0x4d2a62, _0x4e55cb) &&
              !_0x1d72a3[_0x495aa4(0x1ec2)]
            ) {
              x2(_0x1d72a3);
              break;
            }
            const _0x1d0075 = _0x17c79b[_0x495aa4(0x1052)](
              _0x4d2a62,
              _0x3e3324,
              _0x4e55cb,
              _0x3f4b28[_0x495aa4(0x438)](),
              _0x1d72a3[_0x495aa4(0x1351)],
            );
            _0x1d0075 && P(0x2, _0x1d0075, _0x1d72a3);
          } else {
            if (_0x3239fd === 0x2) {
              const _0x18c016 = _0x17c79b[_0x495aa4(0x10c3)](
                _0x4d2a62,
                _0x3e3324,
                _0x4e55cb,
                _0x1d72a3[_0x495aa4(0x1351)],
              );
              _0x18c016 && P(0x2, _0x18c016, _0x1d72a3);
            }
          }
        }
        break;
      }
      case L[_0x495aa4(0x2006)]: {
        const _0x2dfdee = _0x3f4b28["i32"](),
          _0x47a7a0 = _0x3f4b28["u8"](),
          _0x247c2b = _0x3f4b28["i32"]();
        if (!ln(_0x1d72a3, _0x2dfdee, _0x247c2b)) break;
        if (_0x1d72a3[_0x495aa4(0x161)]) {
          Os(_0x1d72a3);
          break;
        }
        const _0x3fe70e = _0x1d72a3["x"] - (_0x2dfdee + 0.5),
          _0x3aa478 = _0x1d72a3["y"] + 0.9 - _0x47a7a0,
          _0x4ad8c6 = _0x1d72a3["z"] - (_0x247c2b + 0.5);
        if (
          _0x3fe70e * _0x3fe70e +
            _0x3aa478 * _0x3aa478 +
            _0x4ad8c6 * _0x4ad8c6 >
            0x31 ||
          !Oi(
            _0x1d72a3["x"],
            go(_0x1d72a3),
            _0x1d72a3["z"],
            _0x2dfdee + 0.5,
            _0x47a7a0 + 0.5,
            _0x247c2b + 0.5,
            _0x1d72a3[_0x495aa4(0x1ed3)],
          )
        )
          break;
        const _0x159370 = Ce(_0x1d72a3[_0x495aa4(0x1ed3)]);
        if (
          _0x159370["getBlock"](_0x2dfdee, _0x47a7a0, _0x247c2b) ===
          f[_0x495aa4(0xbad)]
        ) {
          const _0x19a6af = vt[_0x495aa4(0x869)](
            _0x1d72a3[_0x495aa4(0x1ed3)],
            _0x2dfdee,
            _0x47a7a0,
            _0x247c2b,
          );
          (_0x19a6af == null ? void 0x0 : _0x19a6af[_0x495aa4(0xca5)]) ===
          _0x1d72a3[_0x495aa4(0x1351)]
            ? ie(
                _0x1d72a3,
                new W(L[_0x495aa4(0x13cc)])[_0x495aa4(0x1ee5)](_0x19a6af["id"]),
              )
            : _0x19a6af && Gu(_0x1d72a3, _0x19a6af[_0x495aa4(0xca5)], !0x0);
          break;
        }
        if (
          _0x159370[_0x495aa4(0x4f7)](_0x2dfdee, _0x47a7a0, _0x247c2b) ===
          f[_0x495aa4(0x8c2)]
        ) {
          const _0x4ca46b = sl(_0x1d72a3[_0x495aa4(0x1ed3)]);
          _0x4ca46b[_0x495aa4(0x17f3)](
            _0x2dfdee,
            _0x47a7a0,
            _0x247c2b,
            _0x1d72a3[_0x495aa4(0x1351)],
          );
          const _0x557d3d = _0x4ca46b[_0x495aa4(0x11b7)](
            _0x2dfdee,
            _0x47a7a0,
            _0x247c2b,
          );
          if (
            Zc(_0x557d3d[_0x495aa4(0x1ba5)]) &&
            !(_0x1d72a3["flags"] & 0x10)
          ) {
            const _0x233ad2 = _0x4ca46b[_0x495aa4(0x10c3)](
              _0x2dfdee,
              _0x47a7a0,
              _0x247c2b,
              _0x1d72a3[_0x495aa4(0x1351)],
            );
            _0x233ad2 && P(0x2, _0x233ad2, _0x1d72a3);
          } else
            ie(
              _0x1d72a3,
              eu(
                _0x1d72a3[_0x495aa4(0x1ed3)],
                _0x557d3d,
                _0x2dfdee,
                _0x47a7a0,
                _0x247c2b,
                !0x0,
              ),
            );
          break;
        }
        if (
          ho(_0x159370[_0x495aa4(0x4f7)](_0x2dfdee, _0x47a7a0, _0x247c2b)) &&
          _0x1d72a3[_0x495aa4(0x1ed3)] === C[_0x495aa4(0x9e2)]
        ) {
          const _0x2aaac1 = _0x159370[_0x495aa4(0x4f7)](
              _0x2dfdee,
              _0x47a7a0,
              _0x247c2b,
            ),
            _0x2a0162 = _0x159370["getMeta"](_0x2dfdee, _0x47a7a0, _0x247c2b);
          Ue(_0x2dfdee, _0x47a7a0, _0x247c2b, _0x2aaac1, _0x2a0162 ^ ot);
          break;
        }
        if (bp(_0x1d72a3["planet"])["use"](_0x2dfdee, _0x47a7a0, _0x247c2b))
          break;
        const _0x380192 = _0x159370[_0x495aa4(0x4f7)](
          _0x2dfdee,
          _0x47a7a0,
          _0x247c2b,
        );
        if (
          _0x380192 === f[_0x495aa4(0x408)] &&
          _0x1d72a3[_0x495aa4(0x174b)] &&
          _0x1d72a3["vehicle"] === -0x1
        ) {
          (So(_0x1d72a3),
            Vo[_0x495aa4(0x124)](_0x1d72a3["id"], {
              station: {
                x: _0x2dfdee,
                y: _0x47a7a0,
                z: _0x247c2b,
                planet: _0x1d72a3[_0x495aa4(0x1ed3)],
              },
              viewing: -0x1,
              manual: !0x1,
            }),
            Nr(_0x1d72a3));
          break;
        }
        if (Q1(_0x380192)) {
          H3(_0x1d72a3, _0x2dfdee, _0x47a7a0, _0x247c2b);
          break;
        }
        if (
          _0x1d72a3[_0x495aa4(0x1ed3)] === C[_0x495aa4(0x9e2)] &&
          Wa(_0x380192) &&
          _0x1d72a3[_0x495aa4(0x1581)] === A["FERTILIZER"]
        ) {
          const _0x3f06cd = _0x2dfdee + "," + _0x47a7a0 + "," + _0x247c2b,
            _0x74b530 = B[_0x495aa4(0x4f7)](
              _0x2dfdee,
              _0x47a7a0 - 0x1,
              _0x247c2b,
            );
          if (!Xg(_0x380192)(_0x74b530)) break;
          if (QR(_0x380192) >= 0x2) {
            P(
              0x2,
              "Crop\x20already\x20mature.\x20No\x20fertilizer\x20needed",
              _0x1d72a3,
            );
            break;
          }
          if (!wo(_0x1d72a3, A[_0x495aa4(0x1401)])) break;
          const _0xe43d00 = kT(
              _0x3f06cd,
              _0x2dfdee,
              _0x47a7a0,
              _0x247c2b,
              _0x74b530,
            ),
            _0x3f27cd = M1[_0x495aa4(0x11b7)](_0x3f06cd);
          ((_0x3f27cd[_0x495aa4(0x2b5)] =
            0x1 - (0x1 - _0xe43d00[_0x495aa4(0x2b5)]) * PC),
            _f[_0x495aa4(0x124)](_0x3f06cd, NT(_0x3f06cd)),
            lu["add"](_0x3f06cd),
            RO(_0x1d72a3, _0x2dfdee, _0x47a7a0, _0x247c2b),
            P(0x1, _0x495aa4(0x489), _0x1d72a3));
          break;
        }
        if (
          _0x1d72a3[_0x495aa4(0x1ed3)] === C[_0x495aa4(0x9e2)] &&
          _0x380192 === f[_0x495aa4(0x2b0)]
        ) {
          const _0x3215d4 = GC(_0x1d72a3[_0x495aa4(0x1581)]);
          if (_0x3215d4 <= 0x0) {
            P(0x2, _0x495aa4(0x11c8), _0x1d72a3);
            break;
          }
          if (!wo(_0x1d72a3, _0x1d72a3[_0x495aa4(0x1581)])) break;
          const _0x1da8c8 =
            ge(
              _0x159370[_0x495aa4(0x1dfa)](_0x2dfdee, _0x47a7a0, _0x247c2b),
              0x0,
              Om,
            ) + _0x3215d4;
          if (_0x1da8c8 >= Om) {
            const _0x4c057f = Math[_0x495aa4(0x17b0)](_0x1da8c8 / Om),
              _0x33d94d = _0x1da8c8 % Om;
            (Ue(
              _0x2dfdee,
              _0x47a7a0,
              _0x247c2b,
              f[_0x495aa4(0x2b0)],
              _0x33d94d,
            ),
              Qt(
                A[_0x495aa4(0x1401)],
                _0x2dfdee,
                _0x47a7a0 + 0x1,
                _0x247c2b,
                _0x4c057f * Fx,
              ),
              P(
                0x1,
                _0x495aa4(0x1fd9) +
                  _0x4c057f * Fx +
                  (_0x33d94d > 0x0 ? _0x495aa4(0x1905) + _0x33d94d + "%" : ""),
                _0x1d72a3,
              ));
          } else
            (Ue(
              _0x2dfdee,
              _0x47a7a0,
              _0x247c2b,
              f[_0x495aa4(0x2b0)],
              _0x1da8c8,
            ),
              P(0x1, "Composter:\x20" + _0x1da8c8 + "%", _0x1d72a3));
          break;
        }
        if (
          _0x1d72a3[_0x495aa4(0x1ed3)] === C[_0x495aa4(0x9e2)] &&
          _0x380192 === f[_0x495aa4(0x1f35)] &&
          (_0x1d72a3[_0x495aa4(0x1581)] === f[_0x495aa4(0x1ecf)] ||
            _0x1d72a3[_0x495aa4(0x1581)] === f[_0x495aa4(0x7c2)])
        ) {
          if (!wo(_0x1d72a3, _0x1d72a3[_0x495aa4(0x1581)])) break;
          (Ue(
            _0x2dfdee,
            _0x47a7a0,
            _0x247c2b,
            f[_0x495aa4(0x1ade)],
            Wy(_0x1d72a3["x"], _0x1d72a3["z"], _0x2dfdee, _0x247c2b),
          ),
            $t(
              new W(L[_0x495aa4(0xc64)])
                ["u8"](vu[_0x495aa4(0xbe5)])
                [_0x495aa4(0x416)](_0x2dfdee + 0.5)
                [_0x495aa4(0x416)](_0x47a7a0 + 0.5)
                [_0x495aa4(0x416)](_0x247c2b + 0.5),
            ));
          break;
        }
        if (
          _0x1d72a3[_0x495aa4(0x1ed3)] === C[_0x495aa4(0x9e2)] &&
          _0x380192 === f["CAULDRON"]
        ) {
          const _0x8099a1 = fP[_0x1d72a3["held"]];
          if (!_0x8099a1) {
            P(
              0x2,
              "Add\x20a\x20toadstool\x20for\x20a\x20potion,\x20an\x20apple\x20for\x20caramel\x20or\x20a\x20pumpkin\x20for\x20candy",
              _0x1d72a3,
            );
            break;
          }
          if (!wo(_0x1d72a3, _0x1d72a3[_0x495aa4(0x1581)])) break;
          (wn(
            _0x1d72a3,
            _0x8099a1[_0x495aa4(0x824)],
            _0x8099a1[_0x495aa4(0x2021)],
          ),
            $t(
              new W(L[_0x495aa4(0xc64)])
                ["u8"](vu[_0x495aa4(0xcf8)])
                [_0x495aa4(0x416)](_0x2dfdee + 0.5)
                ["f32"](_0x47a7a0 + 0.9)
                ["f32"](_0x247c2b + 0.5),
            ));
          break;
        }
        if (sa(_0x380192)) {
          Ch(_0x1d72a3, _0x2dfdee, _0x47a7a0, _0x247c2b);
          break;
        }
        if (_0x380192 === f[_0x495aa4(0x2c8)]) {
          if (_0x1d72a3[_0x495aa4(0x1ed3)] !== C["EARTH"]) break;
          ((_0x1d72a3[_0x495aa4(0x864)] = Ss(_0x2dfdee, _0x47a7a0, _0x247c2b)),
            x0(_0x1d72a3, _0x2dfdee, _0x47a7a0, _0x247c2b));
          break;
        }
        if (_0x380192 === f[_0x495aa4(0x1113)]) {
          if (_0x1d72a3[_0x495aa4(0x1ed3)] !== C[_0x495aa4(0x9e2)]) break;
          if (_0x1d72a3["hp"] >= _0x1d72a3[_0x495aa4(0x107e)]) {
            P(0x2, _0x495aa4(0x1859), _0x1d72a3);
            break;
          }
          const _0x4c759f = Date[_0x495aa4(0x1cc6)]();
          if ((_0x1d72a3[_0x495aa4(0x10ae)] ?? 0x0) > _0x4c759f) break;
          _0x1d72a3[_0x495aa4(0x10ae)] = _0x4c759f + dx * 0x3e8;
          const _0x11e199 =
            B[_0x495aa4(0x1dfa)](_0x2dfdee, _0x47a7a0, _0x247c2b) + 0x1;
          (_0x11e199 >= ML
            ? Ue(_0x2dfdee, _0x47a7a0, _0x247c2b, f[_0x495aa4(0x11c6)])
            : Ue(_0x2dfdee, _0x47a7a0, _0x247c2b, f["CAKE"], _0x11e199),
            (_0x1d72a3["hp"] = Math[_0x495aa4(0x48a)](
              _0x1d72a3["maxHp"],
              _0x1d72a3["hp"] + RL,
            )),
            Ci(_0x1d72a3));
          break;
        }
        if (_0x380192 === f[_0x495aa4(0x137e)]) {
          if (_0x1d72a3[_0x495aa4(0x1ed3)] !== C[_0x495aa4(0x9e2)]) break;
          (mc[_0x495aa4(0x124)](_0x1d72a3["name"], {
            x: _0x2dfdee,
            y: _0x47a7a0,
            z: _0x247c2b,
          }),
            sm(),
            P(0x1, "Spawn\x20point\x20set\x20", _0x1d72a3));
        }
        break;
      }
      case L[_0x495aa4(0x1fd6)]: {
        if (_0x3f4b28["u8"]() === 0x1) {
          Os(_0x1d72a3);
          break;
        }
        if (_0x3f4b28[_0x495aa4(0x1c03)]() < 0x9 || _0x1d72a3[_0x495aa4(0x161)])
          break;
        const _0xbcf50b = _0x3f4b28[_0x495aa4(0xa9c)](),
          _0x4c1957 = _0x3f4b28["u8"](),
          _0x550b32 = _0x3f4b28[_0x495aa4(0xa9c)]();
        if (!ln(_0x1d72a3, _0xbcf50b, _0x550b32)) break;
        const _0x73aea2 = _0x1d72a3["x"] - (_0xbcf50b + 0.5),
          _0x566990 = _0x1d72a3["y"] + 0.9 - _0x4c1957,
          _0x30a4c3 = _0x1d72a3["z"] - (_0x550b32 + 0.5);
        if (
          _0x73aea2 * _0x73aea2 +
            _0x566990 * _0x566990 +
            _0x30a4c3 * _0x30a4c3 >
            0x31 ||
          !Oi(
            _0x1d72a3["x"],
            go(_0x1d72a3),
            _0x1d72a3["z"],
            _0xbcf50b + 0.5,
            _0x4c1957 + 0.5,
            _0x550b32 + 0.5,
            _0x1d72a3[_0x495aa4(0x1ed3)],
          )
        )
          break;
        H3(_0x1d72a3, _0xbcf50b, _0x4c1957, _0x550b32);
        break;
      }
      case L[_0x495aa4(0xddf)]: {
        const _0x16687d = _0x3f4b28[_0x495aa4(0x438)]();
        if (_0x16687d[_0x495aa4(0x18ce)] > BN) break;
        gR(_0x1d72a3, _0x16687d, () => {});
        break;
      }
      case L[_0x495aa4(0xb59)]: {
        const _0x1a444a = _0x3f4b28[_0x495aa4(0x438)](),
          _0x1ee6c3 = _0x3f4b28["remaining"]() > 0x0 ? _0x3f4b28["u8"]() : 0x0,
          _0x3c1e4c =
            _0x1ee6c3 === 0x0
              ? _0x495aa4(0x1fb1)
              : he
                ? "team"
                : _0x1ee6c3 === 0x1
                  ? _0x495aa4(0x15b6)
                  : _0x495aa4(0x1fb1),
          _0x4d514d =
            D8(_0x1a444a, _0x1d72a3[_0x495aa4(0x1162)]) ??
            x8(_0x1a444a, _0x1d72a3[_0x495aa4(0x1162)]);
        if (_0x4d514d) {
          P(0x2, _0x4d514d, _0x1d72a3);
          break;
        }
        const _0x21969f = _0x1a444a[_0x495aa4(0x16cf)]();
        if (!_0x21969f) break;
        /^help$/i[_0x495aa4(0x77e)](_0x21969f)
          ? vO(_0x1d72a3, _0x495aa4(0x1ec))
          : _0x21969f[_0x495aa4(0x480)]("/")
            ? vO(_0x1d72a3, _0x21969f)
            : DU(_0x1d72a3, _0x3c1e4c) && BU(_0x1d72a3, _0x21969f, _0x3c1e4c);
        break;
      }
      case L[_0x495aa4(0x35c)]: {
        const _0x54cfc9 = _0x3f4b28["u8"](),
          _0x376b14 = _0x3f4b28[_0x495aa4(0x1ac4)]();
        if (_0x54cfc9 === 0x0) {
          jc(_0x1d72a3);
          break;
        }
        if (
          (_0x54cfc9 !== 0x1 &&
            _0x54cfc9 !== 0x2 &&
            _0x54cfc9 !== 0x3 &&
            _0x54cfc9 !== 0x4) ||
          !_0x1d72a3["alive"]
        )
          break;
        if (_0x54cfc9 === 0x4) {
          if (
            (_0x376b14 !== 0x0 && _0x376b14 !== 0xc80) ||
            (_0x376b14 > 0x0 &&
              (_0x1d72a3[_0x495aa4(0xe3)] ||
                _0x1d72a3["vehicle"] !== -0x1 ||
                !k0["includes"](I0(Pc(_0x1d72a3["held"]))))) ||
            (_0x376b14 > 0x0 &&
              Date["now"]() - (_0x1d72a3[_0x495aa4(0x11e9)] ?? 0x0) < 0x1f4)
          )
            break;
          ((_0x1d72a3["inspectStart"] = _0x376b14
            ? Date[_0x495aa4(0x1cc6)]()
            : void 0x0),
            _0x376b14 && jc(_0x1d72a3),
            ke(_0x1d72a3[_0x495aa4(0x1ed3)], Qf(_0x1d72a3, 0x4, _0x376b14)));
          break;
        }
        _0x1d72a3[_0x495aa4(0x1bee)] ??
          (_0x1d72a3[_0x495aa4(0x1bee)] = [0x0, 0x0, 0x0, 0x0]);
        const _0x38ea62 = Date["now"]();
        if (
          ((_0x54cfc9 !== 0x2 || _0x376b14 > 0x0) && zp(_0x1d72a3),
          _0x38ea62 - (_0x1d72a3["animationRate"][_0x54cfc9] ?? 0x0) <
            (_0x54cfc9 === 0x2 ? 0x4b : _0x54cfc9 === 0x3 ? 0x78 : 0x96) ||
            (_0x54cfc9 === 0x1 &&
              (_0x376b14 > 0x1770 ||
                (_0x376b14 > 0x0 &&
                  (_0x376b14 < 0x1f4 ||
                    (!kn(_0x1d72a3["held"]) &&
                      ![
                        A[_0x495aa4(0x798)],
                        A[_0x495aa4(0x1c37)],
                        A[_0x495aa4(0x8c8)],
                        A[_0x495aa4(0x3a9)],
                      ][_0x495aa4(0x1b5e)](_0x1d72a3[_0x495aa4(0x1581)])))))) ||
            (_0x54cfc9 === 0x2 && _0x376b14 > 0xff) ||
            (_0x54cfc9 === 0x3 && _0x376b14 !== 0x0))
        )
          break;
        ((_0x1d72a3[_0x495aa4(0x1bee)][_0x54cfc9] = _0x38ea62),
          _0x54cfc9 === 0x1 && _0x376b14 && (t2(_0x1d72a3), jc(_0x1d72a3)),
          ke(_0x1d72a3["planet"], Qf(_0x1d72a3, _0x54cfc9, _0x376b14)));
        break;
      }
      case L[_0x495aa4(0x77a)]: {
        ((_0x1d72a3[_0x495aa4(0xb96)] =
          ((_0x1d72a3[_0x495aa4(0xb96)] ?? 0x0) + 0x1) >>> 0x0),
          t2(_0x1d72a3),
          jc(_0x1d72a3));
        const _0x3493a8 = _0x3f4b28["u16"](),
          _0x471f74 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x2d7d2a = _0x3f4b28[_0x495aa4(0x416)](),
          _0x187025 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x275664 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x3d510a = _0x3f4b28[_0x495aa4(0x416)](),
          _0x5b21ee = _0x3f4b28[_0x495aa4(0x416)]();
        if (
          !MR(
            _0x1d72a3,
            _0x275664,
            _0x3d510a,
            _0x5b21ee,
            _0x3493a8 === A[_0x495aa4(0x152d)],
          )
        )
          break;
        {
          const _0x54e1cc =
            _0x3493a8 === A[_0x495aa4(0x152d)]
              ? Fh(_0x1d72a3, xr(_0x1d72a3))
              : null;
          if (
            _0x54e1cc &&
            !it &&
            !Ur(
              _0x1d72a3,
              _0x495aa4(0x16e0) + _0x54e1cc[_0x495aa4(0x1dd)],
              1.25 / _0x54e1cc[_0x495aa4(0x1dd)],
              0x6,
            )
          )
            break;
        }
        if (!it) {
          const _0x58f962 = xr(_0x1d72a3);
          if (
            !_0x1d72a3[_0x495aa4(0x174b)] ||
            _0x1d72a3[_0x495aa4(0xe3)] ||
            ![_0x471f74, _0x2d7d2a, _0x187025, _0x275664, _0x3d510a, _0x5b21ee][
              "every"
            ](Number["isFinite"]) ||
            Math[_0x495aa4(0x1400)](
              _0x471f74 - _0x58f962["x"],
              _0x2d7d2a - _0x58f962["y"],
              _0x187025 - _0x58f962["z"],
            ) > (_0x58f962 === _0x1d72a3 ? 0x4 : 0x1c) ||
            Math[_0x495aa4(0x7a3)](
              Math[_0x495aa4(0x1400)](_0x275664, _0x3d510a, _0x5b21ee) - 0x1,
            ) > 0.1 ||
            (_0x58f962 === _0x1d72a3 &&
              (_0x3493a8 !== _0x1d72a3[_0x495aa4(0x1581)] ||
                !T0(_0x1d72a3, _0x3493a8))) ||
            !Ur(_0x1d72a3, "shot-fx", 0x23, 0x30)
          )
            break;
        }
        if (!it && Wh(_0x3493a8)) {
          const _0x3eb653 = xr(_0x1d72a3);
          if (!(
            _0x3eb653 !== _0x1d72a3 &&
            _0x495aa4(0x58f) in _0x3eb653 &&
            (_0x3eb653[_0x495aa4(0x30c)] === _0x1d72a3["id"] ||
              Ds(_0x1d72a3, _0x3eb653))
          )) {
            const _0x19311e = Wh(_0x3493a8),
              _0x42f86b = (kn(_0x3493a8) || _0x3493a8) === A[_0x495aa4(0x1c37)],
              _0x17c272 = (Ke[_0x495aa4(0x11b7)](
                _0x1d72a3[_0x495aa4(0x1351)],
              ) ?? [])["find"](
                (_0x1f18a0) =>
                  _0x1f18a0[0x0] === _0x3493a8 && _0x1f18a0[0x1] > 0x0,
              ),
              _0x5eeb65 = kE(
                _0x3493a8,
                _0x17c272 == null ? void 0x0 : _0x17c272[0x4],
              );
            if (
              _0x3493a8 !== _0x1d72a3[_0x495aa4(0x1581)] ||
              !Ur(
                _0x1d72a3,
                _0x495aa4(0x1b40) + _0x3493a8,
                _0x42f86b
                  ? _0x19311e[_0x495aa4(0x1add)] / 0x8
                  : _0x19311e[_0x495aa4(0x1add)],
                _0x42f86b
                  ? _0x19311e[_0x495aa4(0x1bcb)] / 0x8
                  : _0x19311e[_0x495aa4(0x1bcb)],
              ) ||
              !pO(_0x1d72a3, _0x3493a8)
            ) {
              (Au["shot"]++, Et(_0x1d72a3));
              break;
            }
            z1[_0x495aa4(0x124)](_0x1d72a3, {
              weapon: _0x3493a8,
              hits: _0x42f86b ? 0x8 : 0x1,
              foliage: 0x18,
              ammo: _0x5eeb65,
              until: performance[_0x495aa4(0x1cc6)]() + yK,
            });
          }
        }
        yy(_0x1d72a3) &&
          (_0x1d72a3["held"] === _0x3493a8 ||
            ((_0x3350b3 = ee[_0x495aa4(0x11b7)](
              _0x1d72a3[_0x495aa4(0x1713)],
            )) == null
              ? void 0x0
              : _0x3350b3[_0x495aa4(0x30c)]) === _0x1d72a3["id"]) &&
          [_0x471f74, _0x2d7d2a, _0x187025, _0x275664, _0x3d510a, _0x5b21ee][
            "every"
          ](Number["isFinite"]) &&
          (Td(_0x1d72a3)["shot"](Date[_0x495aa4(0x1cc6)]()), Ay(_0x1d72a3));
        const _0x237866 = new W(L[_0x495aa4(0xe9b)]);
        if (
          (_0x237866[_0x495aa4(0x1ac4)](_0x1d72a3["id"])
            [_0x495aa4(0x1ac4)](_0x3493a8)
            [_0x495aa4(0x416)](_0x471f74)
            [_0x495aa4(0x416)](_0x2d7d2a)
            [_0x495aa4(0x416)](_0x187025)
            [_0x495aa4(0x416)](_0x275664)
            [_0x495aa4(0x416)](_0x3d510a)
            ["f32"](_0x5b21ee),
          _0x1d72a3["vanished"] ||
            ke(_0x1d72a3[_0x495aa4(0x1ed3)], _0x237866, _0x1d72a3),
          _0x1d72a3[_0x495aa4(0x1ed3)] === C[_0x495aa4(0x9e2)])
        ) {
          if (
            (UT(
              _0x471f74,
              _0x2d7d2a,
              _0x187025,
              _0x275664,
              _0x3d510a,
              _0x5b21ee,
              (_0x3bfefa) =>
                _0x3bfefa[_0x495aa4(0xfda)] ||
                (_0x3bfefa["ownerName"] !== _0x1d72a3["name"] &&
                  !un(
                    _0x1d72a3[_0x495aa4(0x1351)],
                    _0x3bfefa[_0x495aa4(0x1b8)],
                  )),
            ),
            OU(
              _0x1d72a3,
              _0x3493a8,
              _0x471f74,
              _0x2d7d2a,
              _0x187025,
              _0x275664,
              _0x3d510a,
              _0x5b21ee,
            ),
            Wt && he)
          ) {
            he["dropShield"](_0x495aa4(0x1369), _0x1d72a3["id"]);
            const _0x4bc6e3 = he[_0x495aa4(0x756)](_0x1d72a3["id"]);
            _0x4bc6e3 &&
              (_0x482fb8 = he[_0x495aa4(0xf28)][_0x495aa4(0x11b7)](
                _0x1d72a3["id"],
              )) != null &&
              _0x482fb8[_0x495aa4(0xda6)] &&
              he[_0x495aa4(0x1a35)](
                io(_0x4bc6e3),
                _0x1d72a3["x"],
                _0x1d72a3["z"],
              );
          }
          (Oe &&
            !_0x1d72a3[_0x495aa4(0x1ec2)] &&
            Jn(_0x1d72a3["x"], _0x1d72a3["z"], Oe, 0x1e) &&
            iT(_0x1d72a3, 0x6),
            hT(_0x471f74, _0x187025, _0x3493a8 === 0x0 ? 0xc : 0x2e));
        }
        break;
      }
      case L[_0x495aa4(0x17b3)]: {
        const _0x19d542 = _0x3f4b28[_0x495aa4(0x1ac4)]();
        let _0x27a9a4 = ge(_0x3f4b28["u8"](), 0x0, 0x78);
        const _0x506087 = _0x3f4b28["u16"](),
          _0x41ad46 = U_(
            _0x3f4b28[_0x495aa4(0x1c03)]() > 0x0 ? _0x3f4b28["u8"]() : 0x0,
          ),
          _0x294691 = $[_0x495aa4(0x11b7)](_0x19d542),
          _0x3aeb12 =
            _0x3f4b28[_0x495aa4(0x1c03)]() >= 0x4
              ? _0x3f4b28[_0x495aa4(0x1ee5)]()
              : 0x0,
          _0x1eb5ee = hg(_0x3f4b28);
        if (
          !_0x294691 ||
          !_0x294691["alive"] ||
          _0x294691["planet"] !== _0x1d72a3[_0x495aa4(0x1ed3)] ||
          _0x3aeb12 !== (_0x294691["movementEpoch"] ?? 0x0) ||
          (_0x294691[_0x495aa4(0x1713)] !== -0x1 &&
            ((_0x24b445 = ee[_0x495aa4(0x11b7)](
              _0x294691[_0x495aa4(0x1713)],
            )) == null
              ? void 0x0
              : _0x24b445[_0x495aa4(0x58f)]) !== I[_0x495aa4(0x377)]) ||
          !i0(
            _0x1d72a3,
            { ..._0x294691, y: _0x294691["y"] + 1.4 },
            _0x506087 === A[_0x495aa4(0x152d)],
          ) ||
          ((_0x27a9a4 = ug(
            _0x1d72a3,
            _0x506087,
            _0x27a9a4,
            _0x294691,
            _0x41ad46,
            _0x1eb5ee,
          )),
          !_0x27a9a4)
        )
          break;
        const _0x30815d = _0x294691["hp"],
          _0x25056a =
            (_0x506087 === 0x0
              ? _0x495aa4(0x10e4)
              : _0x506087 === A[_0x495aa4(0x152d)]
                ? DO(_0x1d72a3)
                : kn(_0x506087)
                  ? Gx(_0x506087)
                  : (Qi[_0x506087] ??
                    ((_0x52bd66 = Q[_0x506087]) == null
                      ? void 0x0
                      : _0x52bd66["labelEn"]) ??
                    _0x495aa4(0xcd8))) +
            TO(
              _0x1d72a3,
              _0x294691["x"],
              _0x294691["y"],
              _0x294691["z"],
              _0x506087,
            ),
          _0x4197fa = _0x506087 === 0x0 ? _0x495aa4(0x1f03) : _0x495aa4(0x5be),
          _0x304cf3 =
            (_0x506087 === 0x0
              ? _0x27a9a4 *
                (0x1 - ic(_0x294691[_0x495aa4(0xa26)])[_0x495aa4(0x492)] * 0.4)
              : _0x27a9a4) * m1[_0x41ad46];
        ((_0x1d72a3[_0x495aa4(0xd2a)] =
          _0x506087 === _0x1d72a3[_0x495aa4(0x1581)]
            ? _0x1d72a3["killingCosmetic"]
            : void 0x0),
          Dn(
            _0x294691,
            _0x304cf3,
            _0x1d72a3[_0x495aa4(0x1351)],
            _0x25056a,
            _0x4197fa,
            _0x1d72a3["id"],
            _0x41ad46,
            { x: _0x1d72a3["x"], y: _0x1d72a3["y"] + 1.4, z: _0x1d72a3["z"] },
          ),
          rl(
            _0x1d72a3,
            _0x506087,
            "p:" + _0x294691[_0x495aa4(0x1351)],
            _0x30815d - _0x294691["hp"],
            _0x294691["id"] !== _0x1d72a3["id"] &&
              !un(_0x1d72a3["name"], _0x294691[_0x495aa4(0x1351)]) &&
              !un(_0x294691[_0x495aa4(0x1351)], _0x1d72a3[_0x495aa4(0x1351)]),
          ),
          wy(_0x1d72a3[_0x495aa4(0x1351)], _0x294691["id"]));
        break;
      }
      case L[_0x495aa4(0x1c74)]: {
        const _0x2ce66c = _0x3f4b28[_0x495aa4(0x1ac4)]();
        let _0x2b4dff = ge(_0x3f4b28[_0x495aa4(0x1ac4)](), 0x0, 0x2710);
        const _0x31a191 = ee[_0x495aa4(0x11b7)](_0x2ce66c);
        if (
          _0x31a191 &&
          (_0x31a191[_0x495aa4(0x1ed3)] ?? C[_0x495aa4(0x9e2)]) ===
            _0x1d72a3[_0x495aa4(0x1ed3)]
        ) {
          if (!it) {
            if (_0x3f4b28["remaining"]() < 0xd) {
              if (
                (_0x31a191[_0x495aa4(0x30c)] !== _0x1d72a3["id"] &&
                  !Ds(_0x1d72a3, _0x31a191)) ||
                !Ur(_0x1d72a3, _0x495aa4(0x1c8d), 0x2, 0x2)
              )
                break;
              if (_0x31a191["type"] === I["DRONE"]) {
                xs[_0x495aa4(0x448)](_0x31a191["id"])
                  ? Ba(_0x31a191, 0x1)
                  : oo(_0x31a191, _0x31a191["hp"], _0x1d72a3["id"]);
                break;
              }
              if (_0x31a191[_0x495aa4(0x58f)] === I[_0x495aa4(0x11fc)]) {
                const _0x4de8f4 = Ce(_0x31a191["planet"] ?? 0x0);
                _0x31a191["y"] <=
                  _0x4de8f4[_0x495aa4(0x1fea)](
                    _0x31a191["x"],
                    _0x31a191["z"],
                    0x7e,
                  ) +
                    0x2 && oo(_0x31a191, _0x31a191["hp"], _0x1d72a3["id"]);
              } else
                oo(
                  _0x31a191,
                  Math[_0x495aa4(0x48a)](_0x2b4dff, 0xb4),
                  _0x1d72a3["id"],
                );
              break;
            }
            const _0x4c333a = _0x3b6e09[_0x3f4b28["o"]];
            if (_0x4c333a !== 0x1 && _0x4c333a !== 0x5) break;
          }
          let _0x29932e = _0x2b4dff,
            _0x3ffda6 = "other";
          if (_0x3f4b28["remaining"]() >= 0xd) {
            const _0x4e5c17 = _0x3f4b28["u8"](),
              _0x49df5a = {
                x: _0x3f4b28[_0x495aa4(0x416)](),
                y: _0x3f4b28[_0x495aa4(0x416)](),
                z: _0x3f4b28[_0x495aa4(0x416)](),
              },
              _0x2f3cd5 = _0x4e5c17 === 0x5,
              _0x185a81 = _0x2f3cd5 ? 0x1 : _0x4e5c17;
            if (
              _0x185a81 < 0x1 ||
              _0x185a81 > 0x4 ||
              !Object[_0x495aa4(0x1e01)](_0x49df5a)[_0x495aa4(0xe00)](
                Number[_0x495aa4(0xb9c)],
              ) ||
              ((_0x3ffda6 =
                _0x185a81 === 0x1
                  ? _0x2f3cd5
                    ? "he"
                    : _0x495aa4(0x5be)
                  : _0x495aa4(0x1d86)),
              _0x185a81 === 0x1 &&
                !i0(_0x1d72a3, _0x49df5a, !!Fh(_0x1d72a3, xr(_0x1d72a3))))
            )
              break;
            let _0xde7662;
            if (_0x185a81 === 0x1 && _0x3f4b28["remaining"]() >= 0xc) {
              _0xde7662 = {
                x: _0x3f4b28[_0x495aa4(0x416)](),
                y: _0x3f4b28[_0x495aa4(0x416)](),
                z: _0x3f4b28["f32"](),
              };
              const _0x52cd4e = Hn(_0x1d72a3),
                _0x19f83a =
                  _0x52cd4e != null && _0x52cd4e[_0x495aa4(0x3f3)]
                    ? (ee["get"](_0x52cd4e[_0x495aa4(0x113e)]) ??
                      Re[_0x495aa4(0x11b7)](
                        _0x52cd4e[_0x495aa4(0x113e)] - rs,
                      ) ??
                      _0x1d72a3)
                    : (ee["get"](_0x1d72a3["vehicle"]) ?? _0x1d72a3),
                _0x118081 = h1(
                  "type" in _0x19f83a ? _0x19f83a["type"] : void 0x0,
                );
              if (
                !Object[_0x495aa4(0x1e01)](_0xde7662)[_0x495aa4(0xe00)](
                  Number[_0x495aa4(0xb9c)],
                ) ||
                Math["hypot"](
                  _0xde7662["x"] - _0x19f83a["x"],
                  _0xde7662["y"] - _0x19f83a["y"],
                  _0xde7662["z"] - _0x19f83a["z"],
                ) > 0x20 ||
                Math[_0x495aa4(0x1400)](
                  _0x49df5a["x"] - _0xde7662["x"],
                  _0x49df5a["y"] - _0xde7662["y"],
                  _0x49df5a["z"] - _0xde7662["z"],
                ) >
                  _0x118081 + 0x5
              )
                break;
              const _0x17b4b6 = Ce(_0x1d72a3[_0x495aa4(0x1ed3)]);
              if (
                ai(_0xde7662, _0x49df5a, (_0x11ad49, _0x4cf97a, _0x2ef94e) => {
                  const _0x6bbb53 = _0x495aa4,
                    _0x530885 = _0x17b4b6[_0x6bbb53(0x4f7)](
                      _0x11ad49,
                      _0x4cf97a,
                      _0x2ef94e,
                    ),
                    _0xa1691d = Q[_0x530885];
                  return (
                    !!(_0xa1691d != null && _0xa1691d["solid"]) &&
                    _0xa1691d[_0x6bbb53(0x1e3b)] === _0x6bbb53(0x1c8c) &&
                    !Tt(_0x530885)
                  );
                })
              )
                break;
            }
            const _0x12bbb4 = (_0x31a191[_0x495aa4(0x12b1)] ??
              (_0x31a191["hitHistory"] = new VN()))[_0x495aa4(0x4f3)](
              _0x31a191[_0x495aa4(0x58f)],
              _0x31a191,
              _0x49df5a,
              _0x1d72a3["ping"],
            );
            if (!_0x12bbb4) break;
            if (!it) {
              const _0x123137 = xr(_0x1d72a3),
                _0x2ef762 = {
                  x: _0x123137["x"],
                  y:
                    _0x123137 === _0x1d72a3
                      ? go(_0x1d72a3)
                      : _0x123137["y"] + 2.2,
                  z: _0x123137["z"],
                };
              if (
                _0x123137 === _0x1d72a3 &&
                !Wh(_0x1d72a3[_0x495aa4(0x1581)])
              ) {
                if (
                  !_0x1d72a3[_0x495aa4(0x174b)] ||
                  _0x1d72a3[_0x495aa4(0xe3)] ||
                  _0x1d72a3[_0x495aa4(0x1713)] !== -0x1 ||
                  _0x2f3cd5 ||
                  Math[_0x495aa4(0x1400)](
                    _0x49df5a["x"] - _0x2ef762["x"],
                    _0x49df5a["y"] - _0x2ef762["y"],
                    _0x49df5a["z"] - _0x2ef762["z"],
                  ) > 3.8 ||
                  (_0x1d72a3[_0x495aa4(0x1581)] !== 0x0 &&
                    !T0(_0x1d72a3, _0x1d72a3[_0x495aa4(0x1581)])) ||
                  !et(
                    _0x2ef762["x"],
                    _0x2ef762["y"],
                    _0x2ef762["z"],
                    _0x49df5a["x"],
                    _0x49df5a["y"],
                    _0x49df5a["z"],
                    _0x1d72a3["planet"],
                  ) ||
                  !Ur(_0x1d72a3, _0x495aa4(0x1d97), 0x1 / 0.45, 0x2)
                )
                  break;
                _0x2b4dff = Math[_0x495aa4(0x48a)](_0x2b4dff, 0x2);
              } else
                _0x2b4dff = oR(
                  _0x1d72a3,
                  _0x1d72a3[_0x495aa4(0x1581)],
                  _0x2b4dff,
                  _0x31a191,
                  !0x0,
                  { point: _0x49df5a, origin: _0xde7662 ?? _0x2ef762 },
                );
              if (!_0x2b4dff) break;
            }
            const _0x4e52ac = _0x12bbb4[_0x495aa4(0xe4d)](
                new cn(
                  _0x31a191["qx"],
                  _0x31a191["qy"],
                  _0x31a191["qz"],
                  _0x31a191["qw"],
                ),
              )[_0x495aa4(0x1577)](
                new ye(_0x31a191["x"], _0x31a191["y"], _0x31a191["z"]),
              ),
              _0x4a1797 = Iu(_0x31a191, _0x4e52ac)[_0x495aa4(0x1b02)];
            if (!_0x4a1797) break;
            _0x29932e = HE(
              _0x31a191,
              Math[_0x495aa4(0x48a)](
                _0x2b4dff,
                _0x185a81 === 0x1 ? 0x3c : 0x4b0,
              ),
              _0x185a81,
              _0x4a1797,
            );
          }
          const _0xf5f6bf = _0x31a191["hp"];
          (oo(
            _0x31a191,
            _0x29932e,
            _0x1d72a3["id"],
            0x0,
            void 0x0,
            !0x1,
            _0x3ffda6,
          ),
            rl(
              _0x1d72a3,
              _0x1d72a3[_0x495aa4(0x1581)],
              "v:" + _0x31a191["id"],
              _0xf5f6bf - _0x31a191["hp"],
              !!_0x31a191[_0x495aa4(0x87e)] ||
                (!!_0x31a191[_0x495aa4(0x1b8)] &&
                  _0x31a191[_0x495aa4(0x1b8)] !==
                    _0x1d72a3[_0x495aa4(0x1351)] &&
                  !un(
                    _0x1d72a3[_0x495aa4(0x1351)],
                    _0x31a191[_0x495aa4(0x1b8)],
                  )),
            ),
            J4(_0x1d72a3[_0x495aa4(0x1351)], _0x2ce66c));
        }
        break;
      }
      case L["C_HIT_BOT"]: {
        const _0xf457c8 = _0x3f4b28["u16"]();
        let _0x414d7c = ge(_0x3f4b28["u8"](), 0x0, 0x78);
        const _0x2abc5d = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x3a8565 = U_(
            _0x3f4b28[_0x495aa4(0x1c03)]() > 0x0 ? _0x3f4b28["u8"]() : 0x0,
          ),
          _0x5e7ce9 = hg(_0x3f4b28),
          _0x53aa03 = Re[_0x495aa4(0x11b7)](_0xf457c8);
        if (
          _0x53aa03 &&
          _0x53aa03[_0x495aa4(0x1ed3)] === _0x1d72a3[_0x495aa4(0x1ed3)]
        ) {
          if (
            !i0(
              _0x1d72a3,
              { ..._0x53aa03, y: _0x53aa03["y"] + 1.4 },
              _0x2abc5d === A[_0x495aa4(0x152d)],
            )
          )
            break;
          const _0xee9a2e =
            (_0x2abc5d === 0x0
              ? _0x495aa4(0x10e4)
              : _0x2abc5d === A[_0x495aa4(0x152d)]
                ? DO(_0x1d72a3)
                : kn(_0x2abc5d)
                  ? Gx(_0x2abc5d)
                  : (Qi[_0x2abc5d] ??
                    ((_0x5ada5a = Q[_0x2abc5d]) == null
                      ? void 0x0
                      : _0x5ada5a["labelEn"]) ??
                    _0x495aa4(0xcd8))) +
            TO(
              _0x1d72a3,
              _0x53aa03["x"],
              _0x53aa03["y"],
              _0x53aa03["z"],
              _0x2abc5d,
            );
          if (
            ((_0x414d7c = ug(
              _0x1d72a3,
              _0x2abc5d,
              _0x414d7c,
              _0x53aa03,
              _0x3a8565,
              _0x5e7ce9,
            )),
            !_0x414d7c)
          )
            break;
          _0x1d72a3[_0x495aa4(0xd2a)] =
            _0x2abc5d === _0x1d72a3[_0x495aa4(0x1581)]
              ? _0x1d72a3[_0x495aa4(0xd2a)]
              : void 0x0;
          const _0x2e6b11 = _0x53aa03["hp"];
          (Tc(
            _0x53aa03,
            _0x414d7c * m1[_0x3a8565],
            _0x1d72a3,
            _0xee9a2e,
            _0x3a8565,
          ),
            rl(
              _0x1d72a3,
              _0x2abc5d,
              "b:" + _0x53aa03["id"],
              _0x2e6b11 - _0x53aa03["hp"],
              _0x53aa03["hostile"],
            ));
        }
        break;
      }
      case L[_0x495aa4(0x1cc9)]: {
        if (!it) {
          const _0x1ed952 = _0x3f4b28[_0x495aa4(0x416)](),
            _0x453a5c = _0x3f4b28["f32"](),
            _0x4f6e68 = _0x3f4b28[_0x495aa4(0x416)](),
            _0x1faf94 = nR[_0x495aa4(0x11b7)](_0x1d72a3) ?? [],
            _0x6d8fa5 = _0x1faf94[_0x495aa4(0x5de)](
              (_0x4001af) =>
                _0x4001af[_0x495aa4(0xf2f)] >
                  performance[_0x495aa4(0x1cc6)]() &&
                Math[_0x495aa4(0x1400)](
                  _0x4001af["x"] - _0x1ed952,
                  _0x4001af["y"] - _0x453a5c,
                  _0x4001af["z"] - _0x4f6e68,
                ) < 0x2,
            );
          if (_0x6d8fa5 < 0x0) break;
          const [_0x4c93c9] = _0x1faf94[_0x495aa4(0x107b)](_0x6d8fa5, 0x1);
          as(
            _0x1ed952,
            _0x453a5c,
            _0x4f6e68,
            _0x4c93c9[_0x495aa4(0xde9)],
            _0x4c93c9[_0x495aa4(0x1e6)],
            _0x1d72a3["id"],
            0x0,
            !0x0,
            -0x1,
            !0x1,
            _0x4c93c9[_0x495aa4(0xde9)],
            _0x1d72a3[_0x495aa4(0x1ed3)],
          );
          break;
        }
        const _0x4c2172 = _0x3f4b28["f32"](),
          _0x5e5262 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x4bc4c9 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x4f92d6 = ge(_0x3f4b28[_0x495aa4(0x416)](), 0.5, Za),
          _0x686af9 = ge(_0x3f4b28[_0x495aa4(0x1ac4)](), 0x0, 0xea60),
          _0x3433c7 = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x31de84 = _0x3433c7 === 0xffff ? -0x1 : _0x3433c7,
          _0x317d0c =
            _0x3f4b28[_0x495aa4(0x1c03)]() >= 0x4
              ? _0x3f4b28[_0x495aa4(0x416)]()
              : pF(_0x4f92d6, _0x686af9),
          _0x560818 = Number[_0x495aa4(0xb9c)](_0x317d0c)
            ? ge(_0x317d0c, 0.1, _0x4f92d6)
            : _0x4f92d6,
          _0x14eddf =
            _0x3f4b28[_0x495aa4(0x1c03)]() >= 0x4
              ? _0x3f4b28[_0x495aa4(0x1ee5)]()
              : 0x0,
          _0x111b2e =
            _0x3f4b28["remaining"]() >= 0x1
              ? ge(_0x3f4b28["u8"](), 0x0, lI)
              : rt[_0x495aa4(0x1573)];
        let _0x55961b = null;
        if (_0x14eddf !== 0x0) {
          const _0x48be71 = hn[_0x495aa4(0x11b7)](_0x14eddf);
          if (
            !_0x48be71 ||
            _0x48be71["owner"] !== _0x1d72a3["id"] ||
            _0x48be71["planet"] !== _0x1d72a3[_0x495aa4(0x1ed3)] ||
            ((_0x55961b = R2(
              _0x48be71[_0x495aa4(0x58f)],
              _0x48be71[_0x495aa4(0xd7d)],
            )),
            Math["hypot"](
              _0x48be71["x"] - _0x4c2172,
              _0x48be71["y"] - _0x5e5262,
              _0x48be71["z"] - _0x4bc4c9,
            ) > 0x10)
          )
            break;
          ((_0x1d72a3[_0x495aa4(0xd2a)] = _0x48be71[_0x495aa4(0x58b)]),
            Xr(_0x48be71, _0x4c2172, _0x5e5262, _0x4bc4c9, 0x0));
        }
        v0(_0x55961b, () =>
          as(
            _0x4c2172,
            _0x5e5262,
            _0x4bc4c9,
            _0x4f92d6,
            _0x686af9,
            _0x1d72a3["id"],
            0x0,
            !0x0,
            _0x31de84,
            !0x1,
            _0x560818,
            _0x1d72a3[_0x495aa4(0x1ed3)],
            !0x1,
            _0x111b2e,
          ),
        );
        break;
      }
      case L["C_VEH_SPAWN"]: {
        const _0x45a1fe = _0x3f4b28["u8"](),
          _0x181659 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x4455b0 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x2f19ce = _0x3f4b28[_0x495aa4(0x416)](),
          _0x2cb204 =
            _0x3f4b28[_0x495aa4(0x1c03)]() >= 0x4
              ? _0x3f4b28[_0x495aa4(0x1ee5)]()
              : 0x0,
          _0x14134c = (_0x31c9ac) => {
            const _0x19296d = _0x495aa4;
            (P(0x2, _0x31c9ac, _0x1d72a3),
              _0x2cb204 !== 0x0 &&
                ie(
                  _0x1d72a3,
                  new W(L[_0x19296d(0x19f3)])
                    [_0x19296d(0x1ee5)](_0x2cb204)
                    ["u8"](0x0),
                ));
          },
          _0x101f24 = () => {
            const _0x5038ca = _0x495aa4;
            _0x2cb204 !== 0x0 &&
              ie(
                _0x1d72a3,
                new W(L[_0x5038ca(0x19f3)])
                  [_0x5038ca(0x1ee5)](_0x2cb204)
                  ["u8"](0x1),
              );
          };
        if (!(_0x45a1fe in Bn)) {
          _0x14134c("Cannot\x20deploy\x20vehicle:\x20unknown\x20type");
          break;
        }
        if (
          ![_0x181659, _0x4455b0, _0x2f19ce][_0x495aa4(0xe00)](
            Number[_0x495aa4(0xb9c)],
          )
        ) {
          _0x14134c(_0x495aa4(0x152b));
          break;
        }
        if (!bt(Ge, _0x181659, _0x2f19ce, 0x1)) {
          _0x14134c(
            _0x1d72a3[_0x495aa4(0x1162)] === "en"
              ? _0x495aa4(0x2037)
              : _0x495aa4(0xc91),
          );
          break;
        }
        if ($s(an, _0x181659, _0x2f19ce, _0x1d72a3[_0x495aa4(0x1ed3)])) {
          _0x14134c(
            _0x1d72a3[_0x495aa4(0x1162)] === "en"
              ? _0x495aa4(0x85d)
              : _0x495aa4(0xc48),
          );
          break;
        }
        if (!ln(_0x1d72a3, _0x181659, _0x2f19ce)) {
          _0x14134c(
            _0x1d72a3["language"] === "en"
              ? _0x495aa4(0x1590)
              : _0x495aa4(0xfc5),
          );
          break;
        }
        if (he) {
          const _0x2e57fe = VW(_0x1d72a3, _0x45a1fe);
          if (_0x2e57fe) {
            _0x14134c(
              _0x1d72a3[_0x495aa4(0x1162)] === "en"
                ? _0x2e57fe[0x0]
                : _0x2e57fe[0x1],
            );
            break;
          }
        }
        if (!UM(_0x1d72a3)) {
          _0x2cb204 &&
            ie(
              _0x1d72a3,
              new W(L["S_VEH_SPAWN_RESULT"])
                [_0x495aa4(0x1ee5)](_0x2cb204)
                ["u8"](0x0),
            );
          break;
        }
        if (!ZF(_0x1d72a3) && JF() >= Ax) {
          _0x14134c(_0x495aa4(0x1aac) + Ax + ")");
          break;
        }
        if (
          _0x1d72a3[_0x495aa4(0x1ed3)] === C[_0x495aa4(0x465)] &&
          (_0x45a1fe === I[_0x495aa4(0x1bd0)] ||
            _0x45a1fe === I[_0x495aa4(0x15b0)] ||
            _0x45a1fe === I["CARRIER"])
        ) {
          _0x14134c(_0x495aa4(0x537));
          break;
        }
        let _0x49568d = _0x4455b0;
        if (_0x45a1fe === I[_0x495aa4(0x15b0)]) {
          const _0x40f1b0 = Xo(_0x181659, _0x2f19ce);
          if (!_0x40f1b0 || _0x40f1b0[_0x495aa4(0x1a9d)] < 0x5) {
            _0x14134c(_0x495aa4(0x141a));
            break;
          }
          _0x49568d = ge(
            _0x4455b0,
            _0x40f1b0["floor"] + 2.25,
            _0x40f1b0[_0x495aa4(0x1c58)] - 0.82,
          );
        }
        const _0x371fd4 = {
          id: Ra++,
          type: _0x45a1fe,
          x: _0x181659,
          y: _0x49568d,
          z: _0x2f19ce,
          qx: 0x0,
          qy: 0x0,
          qz: 0x0,
          qw: 0x1,
          vx: 0x0,
          vy: 0x0,
          vz: 0x0,
          aux1: 0x0,
          aux2: 0x0,
          hp: Bn[_0x45a1fe],
          driver: -0x1,
          owner: _0x1d72a3["id"],
          ownerName: _0x1d72a3[_0x495aa4(0x1351)],
          passengers: [],
          planet: _0x1d72a3[_0x495aa4(0x1ed3)],
          camo: _0x45a1fe === I[_0x495aa4(0xc54)] ? 0x1 : 0x0,
        };
        if (
          BD(
            _0x45a1fe,
            new ye(_0x181659, _0x49568d, _0x2f19ce),
            (_0x137347, _0x220bb0, _0x2a28d8) =>
              Zf(
                Math[_0x495aa4(0x17b0)](_0x137347),
                Math[_0x495aa4(0x17b0)](_0x220bb0),
                Math[_0x495aa4(0x17b0)](_0x2a28d8),
                _0x1d72a3[_0x495aa4(0x1ed3)],
              ),
          )
        ) {
          _0x14134c(
            "Blocks\x20obstruct\x20the\x20hull,\x20wings\x20or\x20turret",
          );
          break;
        }
        if (
          !Lu(
            Nf(_0x371fd4),
            Nf(_0x371fd4),
            [...ee[_0x495aa4(0x1e01)]()]["map"](Nf),
            0x0,
          )
        ) {
          _0x14134c(_0x495aa4(0x1f5a));
          break;
        }
        if (
          !it &&
          (!_0x1d72a3[_0x495aa4(0x174b)] ||
            _0x1d72a3["downed"] ||
            Math[_0x495aa4(0x1400)](
              _0x181659 - _0x1d72a3["x"],
              _0x49568d - _0x1d72a3["y"],
              _0x2f19ce - _0x1d72a3["z"],
            ) > 0x20 ||
            !wo(_0x1d72a3, i1[_0x45a1fe], !0x1))
        ) {
          (_0x14134c(_0x495aa4(0x865)), Et(_0x1d72a3));
          break;
        }
        (ee["set"](_0x371fd4["id"], _0x371fd4), (Rt = !0x0), ki());
        const _0x4d7751 = he ? xc(_0x1d72a3) : 0x0;
        (_0x4d7751 &&
          _0x371fd4[_0x495aa4(0x58f)] === I[_0x495aa4(0x377)] &&
          ((_0x371fd4[_0x495aa4(0x3b9)] = By()),
          Nn[_0x495aa4(0x124)](_0x371fd4["id"], _0x4d7751)),
          ke(
            _0x371fd4[_0x495aa4(0x1ed3)] ?? C[_0x495aa4(0x9e2)],
            th(_0x371fd4),
          ),
          _0x101f24(),
          he && YW(_0x1d72a3, _0x371fd4));
        break;
      }
      case L[_0x495aa4(0x15e9)]: {
        const _0x263152 = _0x3f4b28["f32"](),
          _0x205ef2 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x25c571 = _0x3f4b28["f32"](),
          _0x5a34bb =
            _0x3f4b28[_0x495aa4(0x1c03)]() >= 0x4
              ? _0x3f4b28[_0x495aa4(0x1ee5)]()
              : 0x0,
          _0x5ae7c9 = (_0x2057e9, _0x4ca2df) => {
            const _0x384d12 = _0x495aa4;
            (P(
              0x2,
              _0x1d72a3[_0x384d12(0x1162)] === "en" ? _0x4ca2df : _0x2057e9,
              _0x1d72a3,
            ),
              _0x5a34bb
                ? ie(
                    _0x1d72a3,
                    new W(L["S_BOT_SPAWN_RESULT"])["u32"](_0x5a34bb)["u8"](0x0),
                  )
                : Et(_0x1d72a3));
          };
        if (_0x1d72a3[_0x495aa4(0x1ed3)] !== C["EARTH"]) {
          _0x5ae7c9(_0x495aa4(0xfcc), _0x495aa4(0x23b));
          break;
        }
        if (
          ![_0x263152, _0x205ef2, _0x25c571]["every"](
            Number[_0x495aa4(0xb9c)],
          ) ||
          !bt(Ge, _0x263152, _0x25c571, 0x1)
        ) {
          _0x5ae7c9(
            _0x495aa4(0xe29),
            "Cannot\x20deploy\x20a\x20soldier\x20at\x20this\x20position.",
          );
          break;
        }
        let _0x847c0e = 0x0;
        for (const _0x471a6f of Re[_0x495aa4(0x1e01)]())
          !_0x471a6f[_0x495aa4(0xfda)] &&
            !_0x471a6f[_0x495aa4(0xa4e)] &&
            _0x471a6f[_0x495aa4(0x1b8)] === _0x1d72a3["name"] &&
            _0x471a6f["hp"] > 0x0 &&
            _0x847c0e++;
        if (_0x847c0e >= z2) {
          _0x5ae7c9(
            _0x495aa4(0x148c) + z2 + _0x495aa4(0x18a2),
            _0x495aa4(0x17dd) + z2 + _0x495aa4(0x43d),
          );
          break;
        }
        if (
          !_0x1d72a3[_0x495aa4(0x174b)] ||
          _0x1d72a3["downed"] ||
          (!it &&
            Math["hypot"](
              _0x263152 - _0x1d72a3["x"],
              _0x205ef2 - _0x1d72a3["y"],
              _0x25c571 - _0x1d72a3["z"],
            ) > 0x8) ||
          !ln(_0x1d72a3, _0x263152, _0x25c571)
        ) {
          _0x5ae7c9(_0x495aa4(0x74f), _0x495aa4(0x342));
          break;
        }
        const _0x570d90 = B["groundAt"](_0x263152, _0x25c571, _0x205ef2 + 0.5),
          _0x14cd7c = Fl(_0x1d72a3[_0x495aa4(0x1ed3)]);
        if (
          _0x570d90 < 0x1 ||
          _0x570d90 + 0x2 >= Pe ||
          Math[_0x495aa4(0x7a3)](_0x570d90 - _0x205ef2) > 1.1 ||
          [-0.27, 0.27][_0x495aa4(0x129c)]((_0x26f2a8) =>
            [-0.27, 0.27][_0x495aa4(0x129c)]((_0x17a048) =>
              [0.1, 0x1, 1.8][_0x495aa4(0x129c)]((_0x1072dd) =>
                _0x14cd7c[_0x495aa4(0x1d0c)](
                  _0x263152 + _0x26f2a8,
                  _0x570d90 + _0x1072dd,
                  _0x25c571 + _0x17a048,
                ),
              ),
            ),
          )
        ) {
          _0x5ae7c9(_0x495aa4(0x12cf), _0x495aa4(0x18a5));
          break;
        }
        if (!it && !wo(_0x1d72a3, A[_0x495aa4(0x1c82)], !0x1)) {
          _0x5ae7c9(_0x495aa4(0x1a9a), _0x495aa4(0x427));
          break;
        }
        const _0x526cd7 = {
          id: Fi++,
          ownerName: _0x1d72a3[_0x495aa4(0x1351)],
          ownerPid: _0x1d72a3["id"],
          planet: C[_0x495aa4(0x9e2)],
          hostile: !0x1,
          x: _0x263152,
          y: _0x570d90,
          z: _0x25c571,
          yaw: _0x1d72a3["yaw"],
          hp: xa,
          armor: [],
          targetPid: -0x1,
          targetVehicleId: -0x1,
          reloadT: 0x0,
          fireCd: 0x0,
          mag: 0x1e,
          spawnX: _0x263152,
          spawnZ: _0x25c571,
          ...bl(),
        };
        ((_0x526cd7[_0x495aa4(0x933)] = VT(_0x1d72a3)),
          Re[_0x495aa4(0x124)](_0x526cd7["id"], _0x526cd7),
          (vn = !0x0),
          $t(Ar(_0x526cd7)),
          _0x5a34bb &&
            ie(
              _0x1d72a3,
              new W(L[_0x495aa4(0x1296)])["u32"](_0x5a34bb)["u8"](0x1),
            ));
        break;
      }
      case L[_0x495aa4(0x51f)]: {
        _0x3f4b28[_0x495aa4(0x1c03)]() === 0x0 && j4(_0x1d72a3);
        break;
      }
      case L[_0x495aa4(0x3e8)]: {
        const _0x216a67 = ee[_0x495aa4(0x11b7)](_0x3f4b28[_0x495aa4(0x1ac4)]()),
          _0x1d28ea = _0x3f4b28["f32"](),
          _0xd9c9c8 = _0x3f4b28["f32"](),
          _0x4d73b5 = _0x3f4b28[_0x495aa4(0x416)]();
        _0x216a67 &&
          _0x3f4b28["remaining"]() === 0x0 &&
          td(_0x1d72a3, _0x216a67, _0x1d28ea, _0xd9c9c8, _0x4d73b5);
        break;
      }
      case L[_0x495aa4(0xbc1)]: {
        const _0x494ef4 = _0x3f4b28["u16"](),
          _0x42daf5 = ee[_0x495aa4(0x11b7)](_0x494ef4);
        if (
          !_0x42daf5 ||
          (_0x42daf5[_0x495aa4(0x1ed3)] ?? C[_0x495aa4(0x9e2)]) !==
            _0x1d72a3[_0x495aa4(0x1ed3)] ||
          (_0x42daf5[_0x495aa4(0x30c)] !== _0x1d72a3["id"] &&
            !Ds(_0x1d72a3, _0x42daf5))
        )
          break;
        const _0x5d301c = _0x3f4b28[_0x495aa4(0x416)](),
          _0x344ec3 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x4dc1c7 = _0x3f4b28["f32"]();
        let _0x5cd1f8 = _0x3f4b28["f32"](),
          _0x5a84af = _0x3f4b28["f32"](),
          _0x16be77 = _0x3f4b28[_0x495aa4(0x416)](),
          _0xbbd4c = _0x3f4b28[_0x495aa4(0x416)]();
        const _0x4bbd24 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x44f603 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x55dd2a = _0x3f4b28["f32"](),
          _0x22e821 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x4c6479 = _0x3f4b28["f32"]();
        if (
          ![
            _0x5d301c,
            _0x344ec3,
            _0x4dc1c7,
            _0x5cd1f8,
            _0x5a84af,
            _0x16be77,
            _0xbbd4c,
            _0x4bbd24,
            _0x44f603,
            _0x55dd2a,
            _0x22e821,
            _0x4c6479,
          ][_0x495aa4(0xe00)](Number["isFinite"])
        )
          break;
        if (!bt(Ge, _0x5d301c, _0x4dc1c7, 0x1)) {
          ((_0x42daf5["vx"] = _0x42daf5["vz"] = 0x0),
            ie(_0x1d72a3, zt(_0x42daf5)),
            ie(
              _0x1d72a3,
              new W(L[_0x495aa4(0x158f)])
                ["u16"](_0x42daf5["id"])
                [_0x495aa4(0x416)](_0x42daf5["x"])
                [_0x495aa4(0x416)](_0x42daf5["y"])
                ["f32"](_0x42daf5["z"]),
            ),
            Al(_0x1d72a3));
          break;
        }
        if (!it) {
          const _0x22bab4 = fn(_0x42daf5[_0x495aa4(0x58f)])
            ? fp[_0x42daf5[_0x495aa4(0x58f)]] * 1.25
            : _0x42daf5[_0x495aa4(0x58f)] === I[_0x495aa4(0x11fc)]
              ? 0xb4
              : [I["HELI"], I[_0x495aa4(0x377)]][_0x495aa4(0x1b5e)](
                    _0x42daf5[_0x495aa4(0x58f)],
                  )
                ? 0x46
                : 0x2d;
          if (
            cW[_0x495aa4(0x1630)](
              _0x42daf5,
              _0x42daf5,
              { x: _0x5d301c, y: _0x344ec3, z: _0x4dc1c7 },
              _0x42daf5[_0x495aa4(0x1ed3)] ?? 0x0,
              _0x22bab4,
              _0x22bab4,
              !0x0,
              !0x0,
            )
          ) {
            (ie(_0x1d72a3, zt(_0x42daf5)),
              ie(
                _0x1d72a3,
                new W(L[_0x495aa4(0x158f)])
                  ["u16"](_0x42daf5["id"])
                  [_0x495aa4(0x416)](_0x42daf5["x"])
                  [_0x495aa4(0x416)](_0x42daf5["y"])
                  [_0x495aa4(0x416)](_0x42daf5["z"]),
              ));
            break;
          }
        }
        const _0x459689 = Math[_0x495aa4(0x1400)](
          _0x5cd1f8,
          _0x5a84af,
          _0x16be77,
          _0xbbd4c,
        );
        if (_0x459689 < 0.00001) break;
        if (
          ((_0x5cd1f8 /= _0x459689),
          (_0x5a84af /= _0x459689),
          (_0x16be77 /= _0x459689),
          (_0xbbd4c /= _0x459689),
          Ds(_0x1d72a3, _0x42daf5))
        ) {
          const _0x131006 = Hn(_0x1d72a3);
          if (
            !Kn(_0x131006["station"], {
              x: _0x5d301c,
              y: _0x344ec3,
              z: _0x4dc1c7,
              planet: _0x1d72a3["planet"],
            }) ||
            _0x344ec3 >= Tm - 0xa
          ) {
            ((_0x131006["manual"] = !0x1),
              (_0x131006[_0x495aa4(0x12c)] = !0x0),
              _0x42daf5["remoteOrder"] &&
                (_0x42daf5[_0x495aa4(0x933)] =
                  Cl(_0x42daf5[_0x495aa4(0x58f)]) && !dh(_0x42daf5)
                    ? dm(_0x42daf5)
                    : {
                        ..._0x42daf5[_0x495aa4(0x933)],
                        mode: _0x495aa4(0x1564),
                      }),
              (_0x42daf5["vx"] = 0x0),
              (_0x42daf5["vz"] = 0x0),
              (Rt = !0x0),
              Nr(_0x1d72a3),
              ie(_0x1d72a3, zt(_0x42daf5)));
            break;
          }
        }
        const _0x5eb6d8 = Date[_0x495aa4(0x1cc6)]();
        if (
          (_0x42daf5[_0x495aa4(0x58f)] === I[_0x495aa4(0x11fc)] &&
            _0x5eb6d8 >= (_0x42daf5[_0x495aa4(0xb40)] ?? 0x0) &&
            _0x344ec3 < Tm - 0x78 &&
            (_0x42daf5[_0x495aa4(0xdd9)] = !0x0),
          _0x42daf5[_0x495aa4(0x58f)] === I[_0x495aa4(0x11fc)] &&
            _0x5eb6d8 >= (_0x42daf5["transferLockUntil"] ?? 0x0) &&
            (_0x42daf5[_0x495aa4(0xdd9)] ?? !0x0) &&
            _0x344ec3 >= Tm)
        ) {
          const _0x3cdba5 =
            (_0x42daf5[_0x495aa4(0x1ed3)] ?? C[_0x495aa4(0x9e2)]) ===
            C[_0x495aa4(0x9e2)]
              ? C["MOON"]
              : C[_0x495aa4(0x9e2)];
          ((_0x42daf5["planet"] = _0x3cdba5),
            (_0x42daf5["x"] = _0x5d301c),
            (_0x42daf5["z"] = _0x4dc1c7),
            (_0x42daf5["y"] = 0x70),
            (_0x42daf5["vx"] = _0x4bbd24 * 0.2),
            (_0x42daf5["vy"] = -0x5),
            (_0x42daf5["vz"] = _0x55dd2a * 0.2),
            (_0x42daf5[_0x495aa4(0x988)] = _0x22e821),
            (_0x42daf5[_0x495aa4(0x28e)] = _0x4c6479),
            (_0x42daf5["qx"] = _0x5cd1f8),
            (_0x42daf5["qy"] = _0x5a84af),
            (_0x42daf5["qz"] = _0x16be77),
            (_0x42daf5["qw"] = _0xbbd4c),
            (_0x42daf5[_0x495aa4(0xb40)] = _0x5eb6d8 + 0x1f40),
            (_0x42daf5["transferLowSeen"] = !0x1));
          for (const _0x556061 of [
            _0x42daf5[_0x495aa4(0x30c)],
            ..._0x42daf5[_0x495aa4(0x16a6)],
          ]) {
            const _0x59f2de = $[_0x495aa4(0x11b7)](_0x556061);
            _0x59f2de &&
              ((_0x59f2de["planet"] = _0x3cdba5),
              (_0x59f2de["x"] = _0x42daf5["x"]),
              (_0x59f2de["y"] = _0x42daf5["y"]),
              (_0x59f2de["z"] = _0x42daf5["z"]),
              Ts(_0x59f2de));
          }
          ((Rt = !0x0), ki(), ps());
          for (const _0x138556 of [
            _0x42daf5[_0x495aa4(0x30c)],
            ..._0x42daf5[_0x495aa4(0x16a6)],
          ]) {
            const _0x1ad3c2 = $[_0x495aa4(0x11b7)](_0x138556);
            _0x1ad3c2 &&
              ie(
                _0x1ad3c2,
                new W(L[_0x495aa4(0x2f2)])
                  ["u8"](_0x3cdba5)
                  [_0x495aa4(0x1ac4)](_0x42daf5["id"])
                  [_0x495aa4(0x416)](_0x42daf5["x"])
                  ["f32"](_0x42daf5["y"])
                  [_0x495aa4(0x416)](_0x42daf5["z"]),
              );
          }
          if (
            (en(zt(_0x42daf5)),
            ke(_0x3cdba5, th(_0x42daf5)),
            _0x42daf5["driver"] !== -0x1)
          ) {
            const _0x43158a = $[_0x495aa4(0x11b7)](_0x42daf5[_0x495aa4(0x30c)]);
            ke(
              _0x3cdba5,
              new W(L["S_VEH_ENTER"])
                [_0x495aa4(0x1ac4)](_0x42daf5["id"])
                ["u16"](_0x42daf5[_0x495aa4(0x30c)])
                ["u8"](0x0)
                [_0x495aa4(0x438)](
                  (_0x43158a == null
                    ? void 0x0
                    : _0x43158a[_0x495aa4(0x1351)]) ??
                    _0x42daf5[_0x495aa4(0x1b8)],
                ),
            );
          }
          for (
            let _0x4062e7 = 0x0;
            _0x4062e7 < _0x42daf5[_0x495aa4(0x16a6)][_0x495aa4(0x18ce)];
            _0x4062e7++
          ) {
            const _0x165b44 = $[_0x495aa4(0x11b7)](
              _0x42daf5["passengers"][_0x4062e7],
            );
            ke(
              _0x3cdba5,
              new W(L[_0x495aa4(0x334)])
                [_0x495aa4(0x1ac4)](_0x42daf5["id"])
                [_0x495aa4(0x1ac4)](_0x42daf5["passengers"][_0x4062e7])
                ["u8"](bi(_0x42daf5, _0x42daf5["passengers"][_0x4062e7]))
                ["str"](
                  (_0x165b44 == null
                    ? void 0x0
                    : _0x165b44[_0x495aa4(0x1351)]) ??
                    _0x42daf5[_0x495aa4(0x1b8)],
                ),
            );
          }
          break;
        }
        if (
          _0x42daf5["type"] === I[_0x495aa4(0x11fc)] &&
          !_0x42daf5[_0x495aa4(0xdd9)] &&
          _0x344ec3 >= Tm
        )
          break;
        let _0x50f60c = _0x344ec3;
        if (_0x42daf5[_0x495aa4(0x58f)] === I[_0x495aa4(0x15b0)]) {
          const _0x99430c = Xo(_0x5d301c, _0x4dc1c7);
          if (!_0x99430c || _0x99430c[_0x495aa4(0x1a9d)] < 0x5) break;
          const _0x1a9656 = ge(
            _0x344ec3,
            _0x99430c[_0x495aa4(0x17b0)] + 2.25,
            _0x99430c[_0x495aa4(0x1c58)] - 0.82,
          );
          _0x50f60c =
            _0x42daf5["y"] >= _0x99430c[_0x495aa4(0x17b0)] + 2.25 - 0.2 &&
            _0x42daf5["y"] <= _0x99430c[_0x495aa4(0x1c58)] - 0.82 + 0.2
              ? _0x42daf5["y"] + ge(_0x1a9656 - _0x42daf5["y"], -0.38, 0.38)
              : _0x1a9656;
        }
        if (_0x42daf5[_0x495aa4(0x58f)] === I["MORTAR"]) {
          je(_0x42daf5, zt(_0x42daf5));
          break;
        }
        ((_0x42daf5["x"] = _0x5d301c),
          (_0x42daf5["y"] = _0x50f60c),
          (_0x42daf5["z"] = _0x4dc1c7),
          (_0x42daf5["qx"] = _0x5cd1f8),
          (_0x42daf5["qy"] = _0x5a84af),
          (_0x42daf5["qz"] = _0x16be77),
          (_0x42daf5["qw"] = _0xbbd4c),
          _0x42daf5[_0x495aa4(0x18fe)] &&
            ((_0x42daf5[_0x495aa4(0x18fe)] = void 0x0),
            (_0x42daf5[_0x495aa4(0x16b1)] = void 0x0),
            (_0x42daf5["navSpeed"] = 0x0),
            (_0x42daf5[_0x495aa4(0xc93)] = 0x0)));
        const _0x2fce9d = fn(_0x42daf5["type"])
          ? Math[_0x495aa4(0x48a)](
              0x1,
              fp[_0x42daf5[_0x495aa4(0x58f)]] /
                Math[_0x495aa4(0x1267)](
                  0x1,
                  Math[_0x495aa4(0x1400)](_0x4bbd24, _0x44f603, _0x55dd2a),
                ),
            )
          : 0x1;
        ((_0x42daf5["vx"] = _0x4bbd24 * _0x2fce9d),
          (_0x42daf5["vy"] = _0x44f603 * _0x2fce9d),
          (_0x42daf5["vz"] = _0x55dd2a * _0x2fce9d),
          (_0x42daf5[_0x495aa4(0x988)] = _0x22e821),
          (_0x42daf5[_0x495aa4(0x28e)] = _0x4c6479),
          (Rt = !0x0),
          ke(
            _0x42daf5[_0x495aa4(0x1ed3)] ?? C[_0x495aa4(0x9e2)],
            zt(_0x42daf5),
            _0x1d72a3,
          ));
        break;
      }
      case L[_0x495aa4(0x1937)]: {
        const _0x15b1c3 = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x101f9d = _0x3f4b28["remaining"]() ? _0x3f4b28["u8"]() : void 0x0,
          _0x5615da = ee[_0x495aa4(0x11b7)](_0x15b1c3);
        if (
          !_0x5615da ||
          (_0x5615da[_0x495aa4(0x1ed3)] ?? C["EARTH"]) !==
            _0x1d72a3[_0x495aa4(0x1ed3)] ||
          (_0x1d72a3[_0x495aa4(0x1713)] !== -0x1 &&
            _0x1d72a3[_0x495aa4(0x1713)] !== _0x15b1c3) ||
          _0x1d72a3["chair"] ||
          !_0x1d72a3[_0x495aa4(0x174b)] ||
          Io[_0x495aa4(0x448)](_0x15b1c3)
        )
          break;
        if (!it && _0x1d72a3[_0x495aa4(0x1713)] !== _0x15b1c3) {
          const _0x55f99b = Iu(_0x5615da, {
            x: _0x1d72a3["x"],
            y: _0x1d72a3["y"] + 0x1,
            z: _0x1d72a3["z"],
          });
          if (!_0x55f99b["point"] || _0x55f99b[_0x495aa4(0x1f6b)] > 0x7) break;
        }
        if (_0x5615da[_0x495aa4(0x87e)]) {
          P(0x2, _0x495aa4(0x10d7), _0x1d72a3);
          break;
        }
        const _0x5d3bcf = Nn["get"](_0x15b1c3);
        if (he && _0x5d3bcf !== void 0x0) {
          if (he[_0x495aa4(0x756)](_0x1d72a3["id"]) !== _0x5d3bcf) {
            P(
              0x2,
              _0x1d72a3[_0x495aa4(0x1162)] === "en"
                ? _0x495aa4(0xbdb)
                : _0x495aa4(0x881),
              _0x1d72a3,
            );
            break;
          }
          if (
            xs[_0x495aa4(0x448)](_0x15b1c3) &&
            xs[_0x495aa4(0x11b7)](_0x15b1c3)["pilot"] !== _0x1d72a3["id"]
          )
            break;
          if (tn[_0x495aa4(0x448)](_0x15b1c3)) {
            if (
              _0x5615da[_0x495aa4(0x58f)] === I[_0x495aa4(0xb63)] &&
              _0x5615da["y"] -
                B["groundAt"](_0x5615da["x"], _0x5615da["z"], _0x5615da["y"]) >
                0x3
            ) {
              P(
                0x2,
                _0x1d72a3[_0x495aa4(0x1162)] === "en"
                  ? "The\x20pilot\x20is\x20in\x20the\x20air"
                  : _0x495aa4(0x4d3),
                _0x1d72a3,
              );
              break;
            }
            az(_0x5615da);
          }
        } else {
          if (
            !na(_0x1d72a3, _0x5615da) ||
            !ln(_0x1d72a3, _0x5615da["x"], _0x5615da["z"]) ||
            (!_0x5615da[_0x495aa4(0x1b8)] && !UM(_0x1d72a3))
          )
            break;
        }
        const _0xb5595d = K1[_0x5615da[_0x495aa4(0x58f)]] ?? 0x0,
          _0xbee8c7 = _0x5615da[_0x495aa4(0x30c)] === _0x1d72a3["id"],
          _0x47206f = Array["from"](
            { length: _0xb5595d },
            (_0x37d00c, _0x1c71db) => _0x1c71db + 0x1,
          )[_0x495aa4(0x3f4)](
            (_0x10ed11) =>
              !_0x5615da[_0x495aa4(0x16a6)][_0x495aa4(0x129c)](
                (_0x23bb6c) => bi(_0x5615da, _0x23bb6c) === _0x10ed11,
              ),
          ),
          _0x5225f2 =
            _0x101f9d ??
            (_0x5615da["driver"] === -0x1
              ? 0x0
              : (_0x47206f[_0x495aa4(0x8f6)](
                  (_0x16e195) => !Hy(_0x5615da, _0x16e195),
                ) ??
                _0x47206f[0x0] ??
                -0x1));
        if (!l5(_0x5615da, _0x1d72a3["id"], _0x5225f2, _0xb5595d)) break;
        if (
          (_0x5225f2 > 0x0 && he && dz(_0x5615da, _0x5225f2),
          _0x5225f2 === 0x0
            ? (Vo[_0x495aa4(0x448)](_0x1d72a3["id"]) && So(_0x1d72a3, !0x0),
              (_0x5615da[_0x495aa4(0xca5)] = _0x1d72a3["id"]),
              delete _0x5615da["remoteOrder"],
              Xi["delete"](_0x5615da["id"]),
              zi[_0x495aa4(0x1d64)](_0x5615da["id"]),
              (_0x5615da[_0x495aa4(0x867)] = 0x0),
              (_0x5615da[_0x495aa4(0x5ff)] = 0x0),
              (_0x5615da[_0x495aa4(0x1ad4)] = void 0x0),
              (_0x5615da["runTargetZ"] = void 0x0),
              (_0x5615da[_0x495aa4(0x1307)] = void 0x0),
              (_0x5615da[_0x495aa4(0x550)] = void 0x0),
              (_0x5615da[_0x495aa4(0x1d66)] = void 0x0))
            : _0xbee8c7 && PO(_0x5615da, _0x1d72a3),
          !_0x5615da[_0x495aa4(0x1b8)] &&
            _0x5d3bcf === void 0x0 &&
            (_0x5615da["ownerName"] = _0x1d72a3[_0x495aa4(0x1351)]),
          (Rt = !0x0),
          (_0x1d72a3["vehicle"] = _0x15b1c3),
          gc(_0x1d72a3),
          ie(_0x1d72a3, zt(_0x5615da)),
          Ts(_0x1d72a3),
          ki(),
          ps(),
          ke(
            _0x5615da["planet"] ?? C[_0x495aa4(0x9e2)],
            new W(L[_0x495aa4(0x334)])
              ["u16"](_0x15b1c3)
              [_0x495aa4(0x1ac4)](_0x1d72a3["id"])
              ["u8"](_0x5225f2)
              [_0x495aa4(0x438)](_0x1d72a3[_0x495aa4(0x1351)]),
          ),
          _0x5615da[_0x495aa4(0x58f)] === I[_0x495aa4(0x1ec7)] &&
            ie(
              _0x1d72a3,
              new W(L[_0x495aa4(0x17d3)])
                [_0x495aa4(0x1ac4)](_0x5615da["id"])
                [_0x495aa4(0x1ac4)](
                  Math["ceil"](
                    Math[_0x495aa4(0x1267)](
                      0x0,
                      (_0x5615da[_0x495aa4(0x1807)] ?? 0x0) -
                        Date[_0x495aa4(0x1cc6)](),
                    ) / 0x3e8,
                  ),
                ),
            ),
          _0x5615da["type"] === I[_0x495aa4(0x7b7)])
        ) {
          const _0x554f50 = Math[_0x495aa4(0x1267)](
            0x0,
            (I2["get"](_0x5615da["id"]) ?? 0x0) - Date[_0x495aa4(0x1cc6)](),
          );
          ie(
            _0x1d72a3,
            new W(L[_0x495aa4(0x17d3)])
              ["u16"](_0x5615da["id"])
              [_0x495aa4(0x1ac4)](Math[_0x495aa4(0xe53)](_0x554f50 / 0x3e8)),
          );
        } else {
          if (_0x5615da[_0x495aa4(0x58f)] === I[_0x495aa4(0x15b0)]) {
            const _0x4dba03 = Math["max"](
              0x0,
              (k2[_0x495aa4(0x11b7)](_0x5615da["id"]) ?? 0x0) -
                Date[_0x495aa4(0x1cc6)](),
            );
            ie(
              _0x1d72a3,
              new W(L["S_CARRIER_COOLDOWN"])
                ["u16"](_0x5615da["id"])
                [_0x495aa4(0x1ac4)](Math[_0x495aa4(0xe53)](_0x4dba03 / 0x3e8)),
            );
          }
        }
        break;
      }
      case L[_0x495aa4(0x1e50)]: {
        if (Vo[_0x495aa4(0x448)](_0x1d72a3["id"])) {
          (So(_0x1d72a3), Nr(_0x1d72a3));
          break;
        }
        if (_0x1d72a3[_0x495aa4(0x1713)] === -0x1) break;
        const _0x542d05 = ee[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1713)]);
        (_0x542d05 &&
          (_0x542d05[_0x495aa4(0x30c)] === _0x1d72a3["id"]
            ? ((_0x542d05[_0x495aa4(0x30c)] = -0x1), PO(_0x542d05, _0x1d72a3))
            : Z1(_0x542d05, _0x1d72a3["id"]),
          (Rt = !0x0),
          ke(
            _0x542d05["planet"] ?? C[_0x495aa4(0x9e2)],
            new W(L["S_VEH_EXIT"])
              [_0x495aa4(0x1ac4)](_0x542d05["id"])
              [_0x495aa4(0x1ac4)](_0x1d72a3["id"]),
          )),
          (_0x1d72a3[_0x495aa4(0x1713)] = -0x1),
          _0x542d05 && ok(_0x1d72a3, _0x542d05),
          Ts(_0x1d72a3),
          ki(),
          ps());
        break;
      }
      case L["C_RPG_LOCK"]: {
        const _0x3038f5 = _0x3f4b28["u8"](),
          _0x3004af = _0x3f4b28["u16"](),
          _0x424910 = Date[_0x495aa4(0x1cc6)]();
        if (!YM(_0x1d72a3, _0x3038f5, _0x3004af)) {
          ((_0x1d72a3[_0x495aa4(0x1ab0)] = void 0x0),
            ie(
              _0x1d72a3,
              new W(L[_0x495aa4(0x1b73)])
                ["u8"](0x0)
                ["u16"](0x0)
                [_0x495aa4(0x1ac4)](0x0),
            ));
          break;
        }
        (!_0x1d72a3["rpgLock"] ||
        _0x1d72a3[_0x495aa4(0x1ab0)][_0x495aa4(0x10d4)] !== _0x3038f5 ||
        _0x1d72a3[_0x495aa4(0x1ab0)]["id"] !== _0x3004af ||
        (fe - _0x1d72a3["rpgLock"][_0x495aa4(0x19f1)]) * 0x32 > RM
          ? (_0x1d72a3[_0x495aa4(0x1ab0)] = {
              kind: _0x3038f5,
              id: _0x3004af,
              since: _0x424910,
              lastTick: fe,
            })
          : (_0x1d72a3["rpgLock"][_0x495aa4(0x19f1)] = fe),
          ie(
            _0x1d72a3,
            new W(L[_0x495aa4(0x1b73)])
              ["u8"](_0x3038f5)
              [_0x495aa4(0x1ac4)](_0x3004af)
              ["u16"](
                Math[_0x495aa4(0x48a)](
                  W_ * 0x3e8,
                  _0x424910 - _0x1d72a3[_0x495aa4(0x1ab0)]["since"],
                ),
              ),
          ));
        break;
      }
      case L[_0x495aa4(0xaa1)]: {
        const _0x3d0f08 = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x4c5796 = _0x3f4b28["f32"](),
          _0x4b3378 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x15ff35 = ee[_0x495aa4(0x11b7)](_0x3d0f08),
          _0x3c779d = new W(L[_0x495aa4(0x1da0)])[_0x495aa4(0x1ac4)](_0x3d0f08);
        if (
          !_0x15ff35 ||
          _0x15ff35[_0x495aa4(0x58f)] !== I[_0x495aa4(0x16c0)] ||
          (_0x15ff35[_0x495aa4(0x1ed3)] ?? C[_0x495aa4(0x9e2)]) !==
            _0x1d72a3[_0x495aa4(0x1ed3)] ||
          !_0x1d72a3["alive"] ||
          (_0x15ff35[_0x495aa4(0x30c)] !== _0x1d72a3["id"] &&
            !Ds(_0x1d72a3, _0x15ff35)) ||
          ![_0x4c5796, _0x4b3378]["every"](Number[_0x495aa4(0xb9c)]) ||
          Math[_0x495aa4(0x1400)](
            _0x4c5796 - _0x15ff35["x"],
            _0x4b3378 - _0x15ff35["z"],
          ) > q2 ||
          Date[_0x495aa4(0x1cc6)]() < (sg[_0x495aa4(0x11b7)](_0x3d0f08) ?? 0x0)
        ) {
          ie(_0x1d72a3, _0x3c779d["u8"](0x0));
          break;
        }
        const _0x8878a6 = Ce(_0x1d72a3["planet"]),
          _0xbcb3b5 = {
            x: _0x4c5796,
            y: _0x8878a6[_0x495aa4(0x1fea)](_0x4c5796, _0x4b3378, 0x7f) + 0.02,
            z: _0x4b3378,
          },
          _0x4485d0 = SM(
            { x: _0x15ff35["x"], y: _0x15ff35["y"] + 1.75, z: _0x15ff35["z"] },
            _0xbcb3b5,
            _0x1d72a3[_0x495aa4(0x1ed3)] === C[_0x495aa4(0x465)] ? Bi : 0x1,
            (_0x36caf2, _0x548aa3) =>
              _0x8878a6[_0x495aa4(0x1fea)](_0x36caf2, _0x548aa3, 0x7f),
          );
        if (!_0x4485d0) {
          (ie(_0x1d72a3, _0x3c779d["u8"](0x0)),
            P(
              0x2,
              _0x1d72a3[_0x495aa4(0x1162)] === "en"
                ? _0x495aa4(0x1c41)
                : _0x495aa4(0x195b),
              _0x1d72a3,
            ));
          break;
        }
        ie(
          _0x1d72a3,
          _0x3c779d["u8"](0x1)
            [_0x495aa4(0x416)](_0xbcb3b5["x"])
            [_0x495aa4(0x416)](_0xbcb3b5["y"])
            [_0x495aa4(0x416)](_0xbcb3b5["z"])
            [_0x495aa4(0x416)](_0x4485d0["vx"])
            [_0x495aa4(0x416)](_0x4485d0["vy"])
            [_0x495aa4(0x416)](_0x4485d0["vz"]),
        );
        break;
      }
      case L[_0x495aa4(0x840)]: {
        const _0x3b6103 = _0x3f4b28[_0x495aa4(0x1ee5)](),
          _0x23d934 = _0x3f4b28["u8"](),
          _0x92d6f6 = _0x3f4b28["u8"](),
          _0xb22817 = _0x92d6f6 & 0x1 ? 0x9 : 0x6,
          _0x38660a = [];
        for (let _0x368fac = 0x0; _0x368fac < _0xb22817; _0x368fac++)
          _0x38660a[_0x495aa4(0x124b)](_0x3f4b28[_0x495aa4(0x416)]());
        if (
          !_0x38660a[_0x495aa4(0xe00)](Number[_0x495aa4(0xb9c)]) ||
          _0x3b6103 === 0x0 ||
          hn["has"](_0x3b6103)
        )
          break;
        if (
          $s(
            an,
            _0x4ca573["x"],
            _0x4ca573["z"],
            _0x4ca573[_0x495aa4(0x1ed3)] ?? _0x1d72a3[_0x495aa4(0x1ed3)],
          ) ||
          $s(an, _0x38660a[0x0], _0x38660a[0x2], _0x1d72a3["planet"])
        ) {
          ie(
            _0x1d72a3,
            new W(L[_0x495aa4(0x87f)])
              [_0x495aa4(0x1ee5)](_0x3b6103)
              [_0x495aa4(0x416)](_0x38660a[0x0])
              [_0x495aa4(0x416)](_0x38660a[0x1])
              [_0x495aa4(0x416)](_0x38660a[0x2])
              ["u8"](0x0),
          );
          break;
        }
        if (!MR(_0x1d72a3, _0x38660a[0x3], _0x38660a[0x4], _0x38660a[0x5])) {
          ie(
            _0x1d72a3,
            new W(L["S_PROJ_REMOVE"])
              [_0x495aa4(0x1ee5)](_0x3b6103)
              [_0x495aa4(0x416)](_0x38660a[0x0])
              [_0x495aa4(0x416)](_0x38660a[0x1])
              ["f32"](_0x38660a[0x2])
              ["u8"](0x0),
          );
          break;
        }
        const _0x50880c =
            _0x92d6f6 & 0x4
              ? { kind: _0x3f4b28["u8"](), id: _0x3f4b28["u16"]() }
              : void 0x0,
          _0x170927 =
            _0x92d6f6 & 0x8
              ? { kind: _0x3f4b28["u8"](), id: _0x3f4b28[_0x495aa4(0x1ee5)]() }
              : void 0x0;
        if (_0x50880c) {
          const _0x42edbc = _0x1d72a3[_0x495aa4(0x1ab0)];
          if (
            _0x23d934 !== we["ROCKET"] ||
            !_0x42edbc ||
            _0x42edbc["kind"] !== _0x50880c[_0x495aa4(0x10d4)] ||
            _0x42edbc["id"] !== _0x50880c["id"] ||
            Date[_0x495aa4(0x1cc6)]() - _0x42edbc[_0x495aa4(0x1b3b)] <
              W_ * 0x3e8 ||
            (fe - _0x42edbc["lastTick"]) * 0x32 > RM ||
            !YM(_0x1d72a3, _0x50880c[_0x495aa4(0x10d4)], _0x50880c["id"])
          ) {
            ie(
              _0x1d72a3,
              new W(L[_0x495aa4(0x87f)])
                [_0x495aa4(0x1ee5)](_0x3b6103)
                [_0x495aa4(0x416)](_0x38660a[0x0])
                [_0x495aa4(0x416)](_0x38660a[0x1])
                [_0x495aa4(0x416)](_0x38660a[0x2])
                ["u8"](0x0),
            );
            break;
          }
          _0x1d72a3[_0x495aa4(0x1ab0)] = void 0x0;
        }
        const _0x1df57e =
          ee["get"](
            (_0x4dbeac = Hn(_0x1d72a3)) != null && _0x4dbeac[_0x495aa4(0x3f3)]
              ? Hn(_0x1d72a3)[_0x495aa4(0x113e)]
              : _0x1d72a3["vehicle"],
          ) ??
          (_0x170927
            ? [...ee["values"]()][_0x495aa4(0x8f6)](
                (_0x219ddc) =>
                  _0x219ddc[_0x495aa4(0x58f)] === I[_0x495aa4(0x9f3)] &&
                  _0x219ddc[_0x495aa4(0x1b8)] ===
                    _0x1d72a3[_0x495aa4(0x1351)] &&
                  (_0x219ddc["planet"] ?? 0x0) === _0x1d72a3["planet"] &&
                  Math["hypot"](
                    _0x219ddc["x"] - _0x38660a[0x0],
                    _0x219ddc["y"] - _0x38660a[0x1],
                    _0x219ddc["z"] - _0x38660a[0x2],
                  ) < 0x8,
              )
            : void 0x0);
        if (!it) {
          const _0x27c598 = _0x1df57e ?? _0x1d72a3,
            _0x27cdd9 = M6(
              _0x23d934,
              _0x1d72a3[_0x495aa4(0x1581)],
              _0x1df57e == null ? void 0x0 : _0x1df57e[_0x495aa4(0x58f)],
            ),
            _0x4f5708 = () =>
              ie(
                _0x1d72a3,
                new W(L[_0x495aa4(0x87f)])
                  [_0x495aa4(0x1ee5)](_0x3b6103)
                  ["f32"](_0x38660a[0x0])
                  [_0x495aa4(0x416)](_0x38660a[0x1])
                  ["f32"](_0x38660a[0x2])
                  ["u8"](0x0),
              );
          if (
            !_0x1d72a3[_0x495aa4(0x174b)] ||
            _0x1d72a3[_0x495aa4(0xe3)] ||
            !_0x27cdd9 ||
            (_0x1df57e &&
              _0x1df57e[_0x495aa4(0x30c)] !== _0x1d72a3["id"] &&
              !Ds(_0x1d72a3, _0x1df57e) &&
              !_0x170927) ||
            (!_0x1df57e && !T0(_0x1d72a3, _0x1d72a3["held"])) ||
            Math[_0x495aa4(0x1400)](
              _0x38660a[0x0] - _0x27c598["x"],
              _0x38660a[0x1] - _0x27c598["y"],
              _0x38660a[0x2] - _0x27c598["z"],
            ) > (_0x1df57e ? 0x1c : 0x4) ||
            Math[_0x495aa4(0x1400)](
              _0x38660a[0x3],
              _0x38660a[0x4],
              _0x38660a[0x5],
            ) > _0x27cdd9[_0x495aa4(0x1a4f)] ||
            (_0x92d6f6 & 0x1 &&
              Math[_0x495aa4(0x1400)](
                _0x38660a[0x6] - _0x27c598["x"],
                _0x38660a[0x8] - _0x27c598["z"],
              ) > Kg) ||
            !Ur(
              _0x1d72a3,
              _0x495aa4(0x2bc) + _0x23d934,
              _0x27cdd9[_0x495aa4(0x1add)],
              _0x27cdd9[_0x495aa4(0x1bcb)],
            )
          ) {
            _0x4f5708();
            break;
          }
          if (!_0x1df57e) {
            if (_0x23d934 === we[_0x495aa4(0xd8a)]) {
              if (
                !_0x1d72a3["creative"] &&
                !wo(_0x1d72a3, A[_0x495aa4(0xd8a)], !0x1)
              ) {
                _0x4f5708();
                break;
              }
            } else {
              if (!pO(_0x1d72a3, _0x1d72a3[_0x495aa4(0x1581)])) {
                (_0x4f5708(), Et(_0x1d72a3));
                break;
              }
            }
          }
        }
        if (he && _0x23d934 === we["GRENADE"] && !_0x1df57e) {
          const _0x38da59 = qT(
            _0x38660a[0x0],
            _0x38660a[0x1],
            _0x38660a[0x2],
            _0x38660a[0x3],
            _0x38660a[0x4],
            _0x38660a[0x5],
          );
          jk(
            _0x38da59["x"],
            _0x38da59["y"],
            _0x38da59["z"],
            he[_0x495aa4(0x756)](_0x1d72a3["id"]) || 0x0,
          );
        }
        if (_0x170927) {
          const _0x557198 =
            _0x170927["kind"] === 0x1
              ? hn[_0x495aa4(0x11b7)](_0x170927["id"])
              : _0x170927[_0x495aa4(0x10d4)] === 0x2
                ? ee[_0x495aa4(0x11b7)](_0x170927["id"])
                : void 0x0;
          if (
            _0x23d934 !== we[_0x495aa4(0x1d45)] ||
            !_0x1df57e ||
            _0x1df57e[_0x495aa4(0x58f)] !== I[_0x495aa4(0x9f3)] ||
            !_0x557198 ||
            (_0x557198[_0x495aa4(0x1ed3)] ?? 0x0) !==
              _0x1d72a3[_0x495aa4(0x1ed3)] ||
            Math[_0x495aa4(0x1400)](
              _0x557198["x"] - _0x1df57e["x"],
              _0x557198["y"] - _0x1df57e["y"],
              _0x557198["z"] - _0x1df57e["z"],
            ) > 0xf0
          ) {
            ie(
              _0x1d72a3,
              new W(L[_0x495aa4(0x87f)])
                [_0x495aa4(0x1ee5)](_0x3b6103)
                [_0x495aa4(0x416)](_0x38660a[0x0])
                [_0x495aa4(0x416)](_0x38660a[0x1])
                [_0x495aa4(0x416)](_0x38660a[0x2])
                ["u8"](0x0),
            );
            break;
          }
        }
        if (
          (_0x1df57e == null ? void 0x0 : _0x1df57e["type"]) === I["TANK"] &&
          _0x23d934 === we["SHELL"] &&
          _0x92d6f6 & 0x1
        ) {
          if (
            (ie(
              _0x1d72a3,
              new W(L[_0x495aa4(0x87f)])
                [_0x495aa4(0x1ee5)](_0x3b6103)
                [_0x495aa4(0x416)](_0x38660a[0x0])
                ["f32"](_0x38660a[0x1])
                [_0x495aa4(0x416)](_0x38660a[0x2])
                ["u8"](0x0),
            ),
            _0x1df57e[_0x495aa4(0x30c)] !== _0x1d72a3["id"] &&
              !Ds(_0x1d72a3, _0x1df57e))
          )
            break;
          const _0x9406d7 = Date[_0x495aa4(0x1cc6)]();
          if (
            _0x9406d7 < (sg["get"](_0x1df57e["id"]) ?? 0x0) ||
            Math["hypot"](
              _0x38660a[0x6] - _0x1df57e["x"],
              _0x38660a[0x8] - _0x1df57e["z"],
            ) > q2
          )
            break;
          const _0x79fec8 = {
              x: _0x38660a[0x6],
              y:
                Ce(_0x1d72a3[_0x495aa4(0x1ed3)])[_0x495aa4(0x1fea)](
                  _0x38660a[0x6],
                  _0x38660a[0x8],
                  0x7f,
                ) + 0.02,
              z: _0x38660a[0x8],
            },
            _0x41f489 = SM(
              {
                x: _0x1df57e["x"],
                y: _0x1df57e["y"] + 1.75,
                z: _0x1df57e["z"],
              },
              _0x79fec8,
              _0x1d72a3[_0x495aa4(0x1ed3)] === C[_0x495aa4(0x465)] ? Bi : 0x1,
              (_0xcb15db, _0x1dccc5) =>
                Ce(_0x1d72a3[_0x495aa4(0x1ed3)])["groundAt"](
                  _0xcb15db,
                  _0x1dccc5,
                  0x7f,
                ),
            );
          if (!_0x41f489) break;
          (sg["set"](_0x1df57e["id"], _0x9406d7 + 0x898),
            (_0x1df57e[_0x495aa4(0x988)] =
              _0x41f489[_0x495aa4(0x17d5)] -
              0x2 * Math[_0x495aa4(0xeef)](_0x1df57e["qy"], _0x1df57e["qw"])),
            (_0x1df57e[_0x495aa4(0x28e)] = _0x41f489[_0x495aa4(0x588)]));
          const _0x1c8224 = sd++,
            _0x272415 = Math[_0x495aa4(0x1400)](
              _0x41f489["vx"],
              _0x41f489["vy"],
              _0x41f489["vz"],
            ),
            _0x5ea419 = 3.2 / _0x272415,
            _0x188834 =
              GE *
              (_0x1d72a3[_0x495aa4(0x1ed3)] === C[_0x495aa4(0x465)] ? Bi : 0x1);
          (Er(
            _0x1c8224,
            _0x23d934,
            _0x1d72a3["id"],
            _0x1d72a3[_0x495aa4(0x1ed3)],
            _0x1df57e["x"] + _0x41f489["vx"] * _0x5ea419,
            _0x1df57e["y"] +
              1.75 +
              _0x41f489["vy"] * _0x5ea419 -
              0.5 * _0x188834 * _0x5ea419 * _0x5ea419,
            _0x1df57e["z"] + _0x41f489["vz"] * _0x5ea419,
            _0x41f489["vx"],
            _0x41f489["vy"] - _0x188834 * _0x5ea419,
            _0x41f489["vz"],
            _0x79fec8,
            !0x1,
            _0x1df57e["id"],
            _0x1d72a3["name"],
            !0x0,
          ),
            (hn[_0x495aa4(0x11b7)](_0x1c8224)[_0x495aa4(0x14d7)] =
              _0x9406d7 + (_0x41f489[_0x495aa4(0x1c21)] + 0x5) * 0x3e8),
            je(_0x1df57e, zt(_0x1df57e)),
            ke(
              _0x1d72a3[_0x495aa4(0x1ed3)],
              qs(hn[_0x495aa4(0x11b7)](_0x1c8224)),
            ));
          break;
        }
        if (
          (_0x1df57e == null ? void 0x0 : _0x1df57e[_0x495aa4(0x58f)]) ===
          I[_0x495aa4(0x1ec7)]
        ) {
          const _0x2de5dd = () =>
            ie(
              _0x1d72a3,
              new W(L[_0x495aa4(0x87f)])
                ["u32"](_0x3b6103)
                [_0x495aa4(0x416)](_0x38660a[0x0])
                [_0x495aa4(0x416)](_0x38660a[0x1])
                [_0x495aa4(0x416)](_0x38660a[0x2])
                ["u8"](0x0),
            );
          if (
            _0x23d934 !== we[_0x495aa4(0x1d45)] ||
            !(_0x92d6f6 & 0x1) ||
            (_0x1df57e[_0x495aa4(0x30c)] !== _0x1d72a3["id"] &&
              !Ds(_0x1d72a3, _0x1df57e))
          ) {
            _0x2de5dd();
            break;
          }
          if (
            Math[_0x495aa4(0x1400)](
              _0x38660a[0x6] - _0x1df57e["x"],
              _0x38660a[0x8] - _0x1df57e["z"],
            ) > J0
          ) {
            _0x2de5dd();
            break;
          }
          const _0xc7de11 = {
            x: _0x38660a[0x6],
            y:
              Ce(_0x1d72a3[_0x495aa4(0x1ed3)])[_0x495aa4(0x1fea)](
                _0x38660a[0x6],
                _0x38660a[0x8],
                0x7f,
              ) + 0.3,
            z: _0x38660a[0x8],
          };
          (_0x2de5dd(), rE(_0x1df57e, _0x1d72a3, _0xc7de11));
          break;
        }
        if (
          _0x23d934 === we[_0x495aa4(0x1d45)] &&
          (_0x1df57e == null ? void 0x0 : _0x1df57e[_0x495aa4(0x58f)]) ===
            I["HIMARS"] &&
          (!(_0x92d6f6 & 0x1) ||
            !fk(_0x1df57e, { x: _0x38660a[0x6], z: _0x38660a[0x8] }))
        ) {
          ie(
            _0x1d72a3,
            new W(L[_0x495aa4(0x87f)])
              ["u32"](_0x3b6103)
              [_0x495aa4(0x416)](_0x38660a[0x0])
              [_0x495aa4(0x416)](_0x38660a[0x1])
              [_0x495aa4(0x416)](_0x38660a[0x2])
              ["u8"](0x0),
          );
          break;
        }
        if (_0x23d934 === we[_0x495aa4(0x5c9)]) {
          const _0x236cae = ee["get"](
            (_0x57cf86 = Hn(_0x1d72a3)) != null && _0x57cf86["manual"]
              ? Hn(_0x1d72a3)[_0x495aa4(0x113e)]
              : _0x1d72a3[_0x495aa4(0x1713)],
          );
          if (
            !_0x236cae ||
            _0x236cae[_0x495aa4(0x58f)] !== I[_0x495aa4(0x7b7)] ||
            (_0x236cae["driver"] !== _0x1d72a3["id"] &&
              !Ds(_0x1d72a3, _0x236cae))
          )
            break;
          const _0x56e115 = _0x38660a[0x6],
            _0x27a5b6 = _0x38660a[0x8];
          if (
            !(_0x92d6f6 & 0x1) ||
            !Number[_0x495aa4(0xb9c)](_0x56e115) ||
            !Number[_0x495aa4(0xb9c)](_0x27a5b6) ||
            Pt(_0x236cae["x"], _0x236cae["z"], _0x56e115, _0x27a5b6) > xE ** 0x2
          )
            break;
          const _0x526c6a = I2[_0x495aa4(0x11b7)](_0x236cae["id"]) ?? 0x0;
          if (Date["now"]() < _0x526c6a) break;
          (I2[_0x495aa4(0x124)](_0x236cae["id"], Date["now"]() + Fg * 0x3e8),
            je(
              _0x236cae,
              new W(L[_0x495aa4(0x17d3)])
                [_0x495aa4(0x1ac4)](_0x236cae["id"])
                ["u16"](Fg),
            ),
            Xu[_0x495aa4(0x124)](_0x3b6103, {
              hp: UR,
              owner: _0x1d72a3["id"],
              until: Date[_0x495aa4(0x1cc6)]() + 0x124f8,
              bornAt: Date[_0x495aa4(0x1cc6)](),
            }),
            je(_0x236cae, new W(L[_0x495aa4(0xd33)])["u8"](0x0)),
            P(0x1, _0x1d72a3[_0x495aa4(0x1351)] + _0x495aa4(0x1e5f)));
        } else {
          if (_0x23d934 === we[_0x495aa4(0xd3)]) {
            const _0x1c3ff8 = ee[_0x495aa4(0x11b7)](
              (_0x5183e0 = Hn(_0x1d72a3)) != null && _0x5183e0[_0x495aa4(0x3f3)]
                ? Hn(_0x1d72a3)[_0x495aa4(0x113e)]
                : _0x1d72a3[_0x495aa4(0x1713)],
            );
            if (
              !_0x1c3ff8 ||
              _0x1c3ff8[_0x495aa4(0x58f)] !== I["SUBMARINE"] ||
              (_0x1c3ff8[_0x495aa4(0x30c)] !== _0x1d72a3["id"] &&
                !Ds(_0x1d72a3, _0x1c3ff8))
            )
              break;
            const _0x5dd88c = _0x38660a[0x6],
              _0x2acac7 = _0x38660a[0x7],
              _0x1ee553 = _0x38660a[0x8];
            if (
              !(_0x92d6f6 & 0x1) ||
              !Number[_0x495aa4(0xb9c)](_0x5dd88c) ||
              !Number["isFinite"](_0x2acac7) ||
              !Number[_0x495aa4(0xb9c)](_0x1ee553) ||
              Pt(_0x1c3ff8["x"], _0x1c3ff8["z"], _0x5dd88c, _0x1ee553) >
                Kg ** 0x2
            )
              break;
            const _0x481a64 = k2[_0x495aa4(0x11b7)](_0x1c3ff8["id"]) ?? 0x0;
            if (Date[_0x495aa4(0x1cc6)]() < _0x481a64) break;
            const _0x411d09 = Date[_0x495aa4(0x1cc6)]();
            (k2["set"](_0x1c3ff8["id"], _0x411d09 + j2 * 0x3e8),
              je(
                _0x1c3ff8,
                new W(L["S_CARRIER_COOLDOWN"])
                  ["u16"](_0x1c3ff8["id"])
                  [_0x495aa4(0x1ac4)](j2),
              ),
              pr[_0x495aa4(0x124)](_0x3b6103, {
                hp: Q0,
                owner: _0x1d72a3["id"],
                until: _0x411d09 + 0x3a980,
                bornAt: _0x411d09,
              }),
              je(_0x1c3ff8, new W(L[_0x495aa4(0xd33)])["u8"](0x0)),
              P(0x1, _0x1d72a3["name"] + _0x495aa4(0x130)));
            const _0x5da3ea = N2(
              we[_0x495aa4(0xd3)],
              _0x38660a[0x0],
              _0x38660a[0x1],
              _0x38660a[0x2],
              _0x5dd88c,
              _0x2acac7,
              _0x1ee553,
            );
            ST(
              _0x3b6103,
              _0x5dd88c,
              _0x1ee553,
              Za,
              Math["ceil"](_0x5da3ea + 0x14),
            );
          }
        }
        const _0x12f38b =
          _0x92d6f6 & 0x1
            ? { x: _0x38660a[0x6], y: _0x38660a[0x7], z: _0x38660a[0x8] }
            : void 0x0;
        Er(
          _0x3b6103,
          _0x23d934,
          _0x1d72a3["id"],
          _0x1d72a3["planet"],
          _0x38660a[0x0],
          _0x38660a[0x1],
          _0x38660a[0x2],
          _0x38660a[0x3],
          _0x38660a[0x4],
          _0x38660a[0x5],
          _0x12f38b,
          !0x1,
          (_0x2b814a = Hn(_0x1d72a3)) != null && _0x2b814a[_0x495aa4(0x3f3)]
            ? Hn(_0x1d72a3)[_0x495aa4(0x113e)]
            : _0x1d72a3[_0x495aa4(0x1713)],
          _0x1d72a3[_0x495aa4(0x1351)],
          !it,
          !((_0x57c89d = Hn(_0x1d72a3)) != null && _0x57c89d["manual"]) &&
            !!(
              _0x1df57e != null &&
              _0x1df57e[_0x495aa4(0x16a6)][_0x495aa4(0x1b5e)](_0x1d72a3["id"])
            ),
        );
        const _0x1b9bee = hn[_0x495aa4(0x11b7)](_0x3b6103);
        if (
          (_0x1b9bee &&
            !_0x1df57e &&
            (_0x1b9bee[_0x495aa4(0x58b)] = Ju(_0x1d72a3)),
          (_0x1b9bee == null ? void 0x0 : _0x1b9bee[_0x495aa4(0x1c0e)]) !==
            void 0x0)
        ) {
          ((_0x1b9bee[_0x495aa4(0xe82)] = !0x0),
            ke(_0x1d72a3[_0x495aa4(0x1ed3)], qs(_0x1b9bee)));
          break;
        }
        if (
          (_0x1b9bee &&
            _0x50880c &&
            ((_0x1b9bee["homingTarget"] = _0x50880c),
            (_0x1b9bee[_0x495aa4(0x11eb)] = !0x0),
            (_0x1b9bee[_0x495aa4(0xe82)] = !0x0)),
          _0x1b9bee &&
            _0x170927 &&
            ((_0x1b9bee[_0x495aa4(0xe82)] = !0x0),
            (_0x1b9bee[_0x495aa4(0x19e3)] = _0x1df57e["id"]),
            (_0x1b9bee[_0x495aa4(0x18cc)] = 0x0),
            (_0x1b9bee[_0x495aa4(0x1a4f)] = bw),
            _0x170927[_0x495aa4(0x10d4)] === 0x1
              ? (_0x1b9bee["interceptorTarget"] = _0x170927["id"])
              : (_0x1b9bee[_0x495aa4(0x2068)] = {
                  kind: 0x1,
                  id: _0x170927["id"],
                })),
          !it && _0x1b9bee)
        ) {
          ke(_0x1d72a3["planet"], qs(_0x1b9bee));
          break;
        }
        const _0x525c85 = new W(L[_0x495aa4(0x671)]);
        _0x525c85["u16"](_0x1d72a3["id"])
          [_0x495aa4(0x1ee5)](_0x3b6103)
          ["u8"](_0x23d934)
          ["u8"](
            (_0x92d6f6 & 0x1) | (!it || _0x50880c || _0x170927 ? 0x2 : 0x0),
          );
        for (const _0x8420f6 of _0x38660a) _0x525c85["f32"](_0x8420f6);
        (_0x525c85["u8"](_0x1d72a3[_0x495aa4(0x1ed3)]),
          ke(_0x1d72a3[_0x495aa4(0x1ed3)], _0x525c85, _0x1d72a3));
        break;
      }
      case L[_0x495aa4(0x19db)]: {
        const _0x78fc9c = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x100632 = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x417b3b = ee[_0x495aa4(0x11b7)](_0x78fc9c);
        if (
          !_0x417b3b ||
          (_0x417b3b[_0x495aa4(0x1ed3)] ?? C[_0x495aa4(0x9e2)]) !==
            _0x1d72a3["planet"] ||
          _0x417b3b[_0x495aa4(0x58f)] !== I[_0x495aa4(0xb63)] ||
          (_0x417b3b[_0x495aa4(0x30c)] !== _0x1d72a3["id"] &&
            !Ds(_0x1d72a3, _0x417b3b))
        )
          break;
        if (_0x100632 === Co) {
          const _0x573a13 = Hs["get"](_0x78fc9c);
          (_0x573a13 !== void 0x0 && Io[_0x495aa4(0x1d64)](_0x573a13),
            Hs[_0x495aa4(0x1d64)](_0x78fc9c) &&
              ((Rt = !0x0),
              ki(),
              ke(
                _0x417b3b[_0x495aa4(0x1ed3)] ?? C[_0x495aa4(0x9e2)],
                new W(L[_0x495aa4(0xdb5)])
                  ["u16"](_0x78fc9c)
                  [_0x495aa4(0x1ac4)](Co),
              )));
          break;
        }
        if (Hs["has"](_0x78fc9c)) break;
        const _0x33873e = ee[_0x495aa4(0x11b7)](_0x100632),
          _0x4c3459 =
            _0x33873e &&
            SS(_0x33873e[_0x495aa4(0x58f)]) &&
            _0x33873e["id"] !== _0x78fc9c &&
            !Hs[_0x495aa4(0x448)](_0x100632) &&
            !Io[_0x495aa4(0x448)](_0x78fc9c);
        if (
          !_0x33873e ||
          (_0x33873e[_0x495aa4(0x1ed3)] ?? C["EARTH"]) !==
            (_0x417b3b[_0x495aa4(0x1ed3)] ?? C["EARTH"]) ||
          !_0x4c3459 ||
          _0x33873e[_0x495aa4(0x87e)] ||
          ir(
            (_0x4877b8 = _0x33873e[_0x495aa4(0x933)]) == null
              ? void 0x0
              : _0x4877b8[_0x495aa4(0x42a)],
          ) ||
          [...Vo[_0x495aa4(0x1e01)]()]["some"](
            (_0x7c3e97) =>
              _0x7c3e97[_0x495aa4(0x3f3)] &&
              _0x7c3e97[_0x495aa4(0x113e)] === _0x100632,
          ) ||
          _0x33873e["driver"] !== -0x1 ||
          _0x33873e["passengers"][_0x495aa4(0x18ce)] > 0x0 ||
          Io[_0x495aa4(0x448)](_0x100632) ||
          !na(_0x1d72a3, _0x33873e) ||
          !ln(_0x1d72a3, _0x33873e["x"], _0x33873e["z"]) ||
          (Math[_0x495aa4(0x1400)](
            _0x33873e["x"] - _0x417b3b["x"],
            _0x33873e["z"] - _0x417b3b["z"],
          ),
          _0x417b3b["y"] - _0x33873e["y"],
          !VD(_0x417b3b, _0x33873e))
        )
          break;
        (Hs[_0x495aa4(0x124)](_0x78fc9c, _0x100632),
          Io[_0x495aa4(0x124)](_0x100632, _0x78fc9c),
          (_0x33873e["vx"] = _0x33873e["vy"] = _0x33873e["vz"] = 0x0),
          $0["delete"](_0x100632),
          delete _0x33873e["remoteOrder"],
          (Rt = !0x0),
          ki(),
          ke(
            _0x417b3b["planet"] ?? C[_0x495aa4(0x9e2)],
            new W(L[_0x495aa4(0xdb5)])
              [_0x495aa4(0x1ac4)](_0x78fc9c)
              ["u16"](_0x100632),
          ));
        break;
      }
      case L["C_HIT_PROJ"]: {
        const _0x446145 = _0x3f4b28[_0x495aa4(0x1ee5)](),
          _0x4078b5 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x33938b = _0x3f4b28[_0x495aa4(0x416)](),
          _0x522537 = _0x3f4b28[_0x495aa4(0x416)](),
          _0xaf0c8b = ge(_0x3f4b28["u8"](), 0x1, Q0),
          _0x561d47 = hn[_0x495aa4(0x11b7)](_0x446145);
        if (
          !_0x561d47 ||
          _0x561d47[_0x495aa4(0x1ed3)] !== _0x1d72a3[_0x495aa4(0x1ed3)] ||
          Math[_0x495aa4(0x1400)](
            _0x561d47["x"] - _0x4078b5,
            _0x561d47["y"] - _0x33938b,
            _0x561d47["z"] - _0x522537,
          ) > 0x1e ||
          (!it &&
            !oR(_0x1d72a3, _0x1d72a3[_0x495aa4(0x1581)], _0xaf0c8b, _0x561d47))
        )
          break;
        cy(_0x446145, it ? _0xaf0c8b : Math[_0x495aa4(0x48a)](_0xaf0c8b, 0x8));
        break;
      }
      case L[_0x495aa4(0x1844)]: {
        const _0x5470df = ge(_0x3f4b28["u16"](), 0x0, 0xc8),
          _0x51fafc =
            _0x3f4b28["remaining"]() >= 0x4
              ? _0x3f4b28[_0x495aa4(0x416)]()
              : Number[_0x495aa4(0x1012)];
        if (
          (_0x3f4b28[_0x495aa4(0x1c03)]() >= 0x4
            ? _0x3f4b28[_0x495aa4(0x1ee5)]()
            : 0x0) !== (_0x1d72a3[_0x495aa4(0x1b13)] ?? 0x0) ||
          (_0x1d72a3["planet"] === C["MOON"] &&
            Number[_0x495aa4(0xb9c)](_0x51fafc) &&
            _0x51fafc <= 0x10)
        )
          break;
        Dn(_0x1d72a3, _0x5470df, void 0x0, "fall", "fall");
        break;
      }
      case L[_0x495aa4(0x16ae)]: {
        const _0x5a4b11 = () => {
          const _0x36c123 = _0x495aa4;
          (Lt[_0x36c123(0x124)](
            _0x1d72a3["name"],
            (Lt[_0x36c123(0x11b7)](_0x1d72a3[_0x36c123(0x1351)]) ?? 0x0) + 0x1,
          ),
            Et(_0x1d72a3),
            Ci(_0x1d72a3));
        };
        if (_0x1d72a3[_0x495aa4(0x174b)]) {
          const _0x2b7c50 = _0x3f4b28["u8"]();
          if (
            _0x1d72a3[_0x495aa4(0xe3)] ||
            _0x1d72a3["hp"] >= _0x1d72a3[_0x495aa4(0x107e)]
          ) {
            _0x5a4b11();
            break;
          }
          if (
            _0x2b7c50 === xm &&
            (_0x1d72a3[_0x495aa4(0x1581)] !== A["MILITARY_MEDKIT"] ||
              Date[_0x495aa4(0x1cc6)]() + 0x96 <
                (_0x1d72a3["militaryMedkitReadyAt"] ?? 0x0))
          ) {
            _0x5a4b11();
            break;
          }
          if (!it) {
            const _0x4241b6 =
                _0x1d72a3[_0x495aa4(0x1581)] === A[_0x495aa4(0xb71)]
                  ? xm
                  : _0x1d72a3["held"] === A[_0x495aa4(0xfa5)]
                    ? jz
                    : _0x1d72a3[_0x495aa4(0x1581)] === A[_0x495aa4(0xf80)]
                      ? Zz
                      : 0x0,
              _0x259a8e =
                _0x1d72a3["held"] === A["MILITARY_MEDKIT"]
                  ? yx
                  : _0x1d72a3[_0x495aa4(0x1581)] === A[_0x495aa4(0xfa5)]
                    ? Xz
                    : Jz;
            if (
              !_0x4241b6 ||
              _0x2b7c50 !== _0x4241b6 ||
              (!_0x1d72a3[_0x495aa4(0x1ec2)] &&
                !(Ke[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? [])[
                  "some"
                ](
                  (_0x37a414) =>
                    _0x37a414[0x0] === _0x1d72a3[_0x495aa4(0x1581)] &&
                    _0x37a414[0x1] > 0x0,
                )) ||
              !Ur(
                _0x1d72a3,
                _0x495aa4(0xa2a) + _0x1d72a3[_0x495aa4(0x1581)],
                0x1 / _0x259a8e,
                0x1 + Math[_0x495aa4(0x48a)](0.05, 0.15 / _0x259a8e),
              )
            ) {
              _0x5a4b11();
              break;
            }
            if (!wo(_0x1d72a3, _0x1d72a3[_0x495aa4(0x1581)], !0x1)) {
              _0x5a4b11();
              break;
            }
          }
          (_0x2b7c50 === xm &&
            (_0x1d72a3[_0x495aa4(0x1a10)] = Date["now"]() + yx * 0x3e8),
            (_0x1d72a3["hp"] =
              _0x2b7c50 === xm
                ? _0x1d72a3["maxHp"]
                : Math[_0x495aa4(0x48a)](
                    _0x1d72a3[_0x495aa4(0x107e)],
                    _0x1d72a3["hp"] + ge(_0x2b7c50, 0x0, 0xc8),
                  )),
            Ci(_0x1d72a3));
        } else _0x5a4b11();
        break;
      }
      case L["C_ANIMAL_RIDE"]: {
        const _0xe6cea3 = _0x3f4b28["u16"]();
        if (
          !_0x1d72a3[_0x495aa4(0x174b)] ||
          _0x1d72a3[_0x495aa4(0x1ed3)] !== C[_0x495aa4(0x9e2)] ||
          _0x1d72a3[_0x495aa4(0x161)]
        )
          break;
        const _0x39e108 =
          _0x1d72a3[_0x495aa4(0x157c)] !== void 0x0
            ? Bt[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x157c)])
            : void 0x0;
        if (_0x39e108) {
          Gl(_0x39e108);
          break;
        }
        if (_0xe6cea3 === Co) break;
        const _0x4c0a09 = Bt["get"](_0xe6cea3);
        if (
          !_0x4c0a09 ||
          _0x4c0a09[_0x495aa4(0x58f)] !== ze[_0x495aa4(0x1317)] ||
          _0x4c0a09[_0x495aa4(0x1f68)] ||
          _0x4c0a09[_0x495aa4(0x1891)] !== void 0x0 ||
          _0x1d72a3[_0x495aa4(0x1713)] !== -0x1 ||
          Math["hypot"](
            _0x4c0a09["x"] - _0x1d72a3["x"],
            _0x4c0a09["y"] - _0x1d72a3["y"],
            _0x4c0a09["z"] - _0x1d72a3["z"],
          ) > 4.5
        )
          break;
        ((_0x4c0a09[_0x495aa4(0x1891)] = _0x1d72a3["id"]),
          (_0x4c0a09[_0x495aa4(0x1a80)] = !0x0),
          (_0x1d72a3[_0x495aa4(0x157c)] = _0x4c0a09["id"]),
          (_0x4c0a09[_0x495aa4(0x1705)] = 0x0),
          (_0x4c0a09[_0x495aa4(0x1780)] = 0x0),
          (Un = !0x0),
          $t(
            new W(L[_0x495aa4(0x1ef)])
              [_0x495aa4(0x1ac4)](_0x4c0a09["id"])
              [_0x495aa4(0x1ac4)](_0x1d72a3["id"]),
          ));
        break;
      }
      case L[_0x495aa4(0x1c70)]: {
        const _0x2a27fe = Bt[_0x495aa4(0x11b7)](_0x3f4b28[_0x495aa4(0x1ac4)]());
        let _0x175ef7 = ge(_0x3f4b28["u8"](), 0x1, 0x50);
        if (
          !_0x2a27fe ||
          !_0x1d72a3["alive"] ||
          _0x1d72a3[_0x495aa4(0x1ed3)] !== C["EARTH"] ||
          Math[_0x495aa4(0x1400)](
            _0x2a27fe["x"] - _0x1d72a3["x"],
            _0x2a27fe["y"] - _0x1d72a3["y"],
            _0x2a27fe["z"] - _0x1d72a3["z"],
          ) > 0x8c ||
          !i0(
            _0x1d72a3,
            { ..._0x2a27fe, y: _0x2a27fe["y"] + 0.6 },
            !!Fh(_0x1d72a3, xr(_0x1d72a3)),
          ) ||
          ((_0x175ef7 = ug(
            _0x1d72a3,
            _0x1d72a3[_0x495aa4(0x1581)],
            _0x175ef7,
            _0x2a27fe,
          )),
          !_0x175ef7)
        )
          break;
        const _0x4d91b5 = _0x2a27fe["hp"];
        (uh(_0x2a27fe, _0x1d72a3["x"], _0x1d72a3["z"]),
          (_0x2a27fe["hp"] = Math["max"](0x0, _0x2a27fe["hp"] - _0x175ef7)),
          (Un = !0x0),
          rl(
            _0x1d72a3,
            _0x1d72a3[_0x495aa4(0x1581)],
            "a:" + _0x2a27fe["id"],
            _0x4d91b5 - _0x2a27fe["hp"],
            !_0x2a27fe[_0x495aa4(0x1a80)] &&
              _0x2a27fe[_0x495aa4(0x1891)] === void 0x0,
          ),
          (_0x2a27fe[_0x495aa4(0x97b)] = _0x1d72a3["x"]),
          (_0x2a27fe["hitFromZ"] = _0x1d72a3["z"]),
          _0x2a27fe["hp"] <= 0x0
            ? $i(_0x2a27fe)
            : (K$(
                _0x2a27fe,
                _0x1d72a3["x"],
                _0x1d72a3["z"],
                Math["hypot"](
                  _0x2a27fe["x"] - _0x1d72a3["x"],
                  _0x2a27fe["z"] - _0x1d72a3["z"],
                ) <= 4.5
                  ? 0x1
                  : 0.3,
              ),
              $t(
                new W(L[_0x495aa4(0xe9a)])
                  [_0x495aa4(0x1ac4)](_0x2a27fe["id"])
                  [_0x495aa4(0x1ac4)](_0x2a27fe["hp"]),
              )));
        break;
      }
      case L["C_USE_ITEM"]: {
        const _0x40e1f7 = _0x3f4b28[_0x495aa4(0x1ac4)]();
        if (
          !_0x1d72a3[_0x495aa4(0x174b)] ||
          (_0x1d72a3[_0x495aa4(0x1ed3)] !== C[_0x495aa4(0x9e2)] &&
            (_0x40e1f7 === A["WHEAT"] || _0x40e1f7 === A[_0x495aa4(0x734)]))
        )
          break;
        if (_0x40e1f7 === A[_0x495aa4(0xba1)]) {
          let _0x20d0ab = null,
            _0x1f2e70 = 4.5;
          for (const _0x5be3f2 of Bt["values"]()) {
            const _0x154535 = Math[_0x495aa4(0x1400)](
              _0x5be3f2["x"] - _0x1d72a3["x"],
              _0x5be3f2["y"] - _0x1d72a3["y"],
              _0x5be3f2["z"] - _0x1d72a3["z"],
            );
            !_0x5be3f2[_0x495aa4(0x1f68)] &&
              _0x5be3f2[_0x495aa4(0x120e)] <= 0x0 &&
              _0x154535 < _0x1f2e70 &&
              ((_0x20d0ab = _0x5be3f2), (_0x1f2e70 = _0x154535));
          }
          _0x20d0ab &&
            wo(_0x1d72a3, A[_0x495aa4(0xba1)]) &&
            ((_0x20d0ab[_0x495aa4(0x6c4)] = 0x1e),
            (_0x20d0ab["playerCared"] = !0x0),
            (Un = !0x0));
          break;
        }
        if (
          _0x40e1f7 === A[_0x495aa4(0x734)] ||
          _0x40e1f7 === A[_0x495aa4(0x1dcd)]
        ) {
          let _0x225c41 = null,
            _0x4eccf6 = 4.5;
          for (const _0xe48995 of Bt[_0x495aa4(0x1e01)]()) {
            if (
              _0xe48995["baby"] ||
              (_0x40e1f7 === A[_0x495aa4(0x734)]
                ? _0xe48995[_0x495aa4(0x58f)] !== ze[_0x495aa4(0x616)]
                : _0xe48995[_0x495aa4(0x58f)] !== ze[_0x495aa4(0x8f5)] &&
                  _0xe48995[_0x495aa4(0x58f)] !== ze[_0x495aa4(0x1317)])
            )
              continue;
            const _0x36e659 = Math[_0x495aa4(0x1400)](
              _0xe48995["x"] - _0x1d72a3["x"],
              _0xe48995["y"] - _0x1d72a3["y"],
              _0xe48995["z"] - _0x1d72a3["z"],
            );
            _0x36e659 < _0x4eccf6 &&
              ((_0x225c41 = _0xe48995), (_0x4eccf6 = _0x36e659));
          }
          if (!_0x225c41) break;
          if (_0x40e1f7 === A[_0x495aa4(0x734)]) {
            if (_0x225c41[_0x495aa4(0x217)]) {
              P(0x2, _0x495aa4(0xee5), _0x1d72a3);
              break;
            }
            ((_0x225c41[_0x495aa4(0x217)] = !0x0),
              (_0x225c41[_0x495aa4(0x1a80)] = !0x0),
              (_0x225c41["produceT"] = void 0x0),
              (Un = !0x0),
              Qt(
                A["WOOL"],
                Math[_0x495aa4(0x17b0)](_0x225c41["x"]),
                Math[_0x495aa4(0x17b0)](_0x225c41["y"]) + 0x1,
                Math[_0x495aa4(0x17b0)](_0x225c41["z"]),
                0x1 + Math["floor"](Math[_0x495aa4(0xf8b)]() * 0x2),
                0x0,
                !0x0,
              ),
              $t(
                new W(L[_0x495aa4(0x1194)])
                  [_0x495aa4(0x1ac4)](_0x225c41["id"])
                  ["u8"](Zi[_0x495aa4(0x2071)]),
              ));
          } else {
            const _0x41502c =
              _0x225c41[_0x495aa4(0x58f)] === ze[_0x495aa4(0x1317)];
            if (!_0x225c41[_0x495aa4(0x2073)]) {
              P(
                0x2,
                _0x41502c ? _0x495aa4(0x1373) : _0x495aa4(0x1e67),
                _0x1d72a3,
              );
              break;
            }
            if (!wo(_0x1d72a3, A["BUCKET"])) break;
            ((_0x225c41[_0x495aa4(0x2073)] = !0x1),
              (_0x225c41[_0x495aa4(0x1a80)] = !0x0),
              (_0x225c41[_0x495aa4(0x3fd)] = void 0x0),
              (Un = !0x0),
              wn(
                _0x1d72a3,
                _0x41502c ? A["CAMEL_MILK_BUCKET"] : A[_0x495aa4(0x667)],
                0x1,
              ),
              $t(
                new W(L[_0x495aa4(0x1194)])
                  [_0x495aa4(0x1ac4)](_0x225c41["id"])
                  ["u8"](Zi[_0x495aa4(0x1b1f)]),
              ));
          }
          break;
        }
        const _0x52d649 = Bz[_0x40e1f7] ?? 0x0;
        if (!_0x52d649 || _0x1d72a3["hp"] >= _0x1d72a3[_0x495aa4(0x107e)])
          break;
        const _0x209ed8 = Date[_0x495aa4(0x1cc6)]();
        if ((_0x1d72a3[_0x495aa4(0x10ae)] ?? 0x0) > _0x209ed8) {
          P(
            0x2,
            "Wait\x20" +
              Math[_0x495aa4(0xe53)](
                ((_0x1d72a3[_0x495aa4(0x10ae)] ?? 0x0) - _0x209ed8) / 0x3e8,
              ) +
              _0x495aa4(0x1897),
            _0x1d72a3,
          );
          break;
        }
        if (!wo(_0x1d72a3, _0x40e1f7)) break;
        ((_0x1d72a3[_0x495aa4(0x10ae)] = _0x209ed8 + dx * 0x3e8),
          (_0x1d72a3["hp"] = Math[_0x495aa4(0x48a)](
            _0x1d72a3[_0x495aa4(0x107e)],
            _0x1d72a3["hp"] + _0x52d649,
          )),
          Hz["has"](_0x40e1f7) && Math["random"]() < 0.16
            ? Dn(_0x1d72a3, 0x8, _0x495aa4(0x358), _0x495aa4(0x197b))
            : Ci(_0x1d72a3));
        break;
      }
      case L[_0x495aa4(0x1f91)]: {
        const _0x7e8b9a = _0x3f4b28["u8"](),
          _0x29b607 = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x33a7b7 = _0x3f4b28[_0x495aa4(0xa9c)](),
          _0x4d57eb = _0x3f4b28["u8"](),
          _0x20d839 = _0x3f4b28["i32"]();
        if (
          !ln(_0x1d72a3, _0x33a7b7, _0x20d839) ||
          lf(_0x1d72a3, _0x33a7b7, _0x4d57eb, _0x20d839) ||
          !_0x1d72a3[_0x495aa4(0x174b)] ||
          _0x4d57eb <= 0x0 ||
          _0x4d57eb >= Pe - 0x1 ||
          _0x7e8b9a >= 0x9 ||
          Math["hypot"](
            _0x1d72a3["x"] - (_0x33a7b7 + 0.5),
            _0x1d72a3["y"] + 0.9 - (_0x4d57eb + 0.5),
            _0x1d72a3["z"] - (_0x20d839 + 0.5),
          ) > 0x7
        )
          break;
        const _0x141f68 = Ke["get"](_0x1d72a3[_0x495aa4(0x1351)]),
          _0x3b4aca = _0x141f68 == null ? void 0x0 : _0x141f68[_0x7e8b9a];
        if (
          !_0x1d72a3[_0x495aa4(0x1ec2)] &&
          (!_0x3b4aca || _0x3b4aca[0x0] !== _0x29b607 || _0x3b4aca[0x1] !== 0x1)
        )
          break;
        const _0x2dac58 = Ce(_0x1d72a3[_0x495aa4(0x1ed3)]),
          _0x24d846 = _0x1d72a3[_0x495aa4(0x1ed3)] === C["MOON"] ? Us : Ue;
        let _0x8ec242 = 0x0;
        if (_0x29b607 === A[_0x495aa4(0x1dcd)]) {
          const _0x309e37 = _0x2dac58[_0x495aa4(0x4f7)](
            _0x33a7b7,
            _0x4d57eb,
            _0x20d839,
          );
          if (
            (_0x309e37 !== f[_0x495aa4(0x1bb5)] &&
              _0x309e37 !== f[_0x495aa4(0xd36)]) ||
            (_0x2dac58[_0x495aa4(0x1dfa)](_0x33a7b7, _0x4d57eb, _0x20d839) &
              0xf) !==
              0x0
          )
            break;
          ((_0x8ec242 =
            _0x309e37 === f[_0x495aa4(0x1bb5)]
              ? A[_0x495aa4(0x1419)]
              : A[_0x495aa4(0xeea)]),
            _0x24d846(
              _0x33a7b7,
              _0x4d57eb,
              _0x20d839,
              f[_0x495aa4(0x11c6)],
              0x0,
              !0x0,
            ));
        } else {
          if (
            _0x29b607 === A[_0x495aa4(0x1419)] ||
            _0x29b607 === A["LAVA_BUCKET"]
          ) {
            const _0x5c7acb =
                _0x29b607 === A[_0x495aa4(0x1419)]
                  ? f[_0x495aa4(0x1bb5)]
                  : f["LAVA"],
              _0x23592a = _0x2dac58[_0x495aa4(0x4f7)](
                _0x33a7b7,
                _0x4d57eb,
                _0x20d839,
              ),
              _0x1cb3d7 =
                _0x23592a === _0x5c7acb &&
                (_0x2dac58[_0x495aa4(0x1dfa)](_0x33a7b7, _0x4d57eb, _0x20d839) &
                  0xf) !==
                  0x0,
              _0x47ddd7 =
                _0x5c7acb === f[_0x495aa4(0x1bb5)] && B3["has"](_0x23592a);
            if (_0x23592a !== f["AIR"] && !_0x1cb3d7 && !_0x47ddd7) break;
            ((_0x8ec242 = A[_0x495aa4(0x1dcd)]),
              _0x24d846(_0x33a7b7, _0x4d57eb, _0x20d839, _0x5c7acb, 0x0, !0x0));
          } else break;
        }
        (!_0x1d72a3[_0x495aa4(0x1ec2)] &&
          _0x3b4aca &&
          (_0x3b4aca["splice"](
            0x0,
            _0x3b4aca[_0x495aa4(0x18ce)],
            _0x8ec242,
            0x1,
            0x0,
            0x0,
          ),
          Yn(_0x1d72a3["name"])),
          ie(
            _0x1d72a3,
            new W(L[_0x495aa4(0x115)])["u8"](_0x7e8b9a)["u16"](_0x8ec242),
          ));
        break;
      }
      case L["C_ITEM_WEAR"]: {
        const _0xc8052b = _0x3f4b28["u8"](),
          _0x24ff1a = _0x3f4b28["u8"](),
          _0x39f719 =
            ((_0x1ba7c5 =
              (_0x10f271 = Ke[_0x495aa4(0x11b7)](
                _0x1d72a3[_0x495aa4(0x1351)],
              )) == null
                ? void 0x0
                : _0x10f271[_0xc8052b]) == null
              ? void 0x0
              : _0x1ba7c5[0x0]) ?? 0x0;
        (it ||
          !(
            (_0x43e81f = oM(_0x39f719)) != null && _0x43e81f[_0x495aa4(0xd5e)]
          )) &&
          v1(_0x1d72a3, _0xc8052b, _0x24ff1a);
        break;
      }
      case L["C_VISION_WEAR"]: {
        if (_0x1d72a3[_0x495aa4(0x1ec2)] || !_0x1d72a3[_0x495aa4(0x174b)])
          break;
        const _0x382f89 = Math[_0x495aa4(0x1267)](
          0x0,
          Math[_0x495aa4(0x48a)](0x5, _0x3f4b28["u8"]()),
        );
        if (_0x382f89 <= 0x0) break;
        const _0x400dd5 = Ke[_0x495aa4(0x11b7)](_0x1d72a3["name"]),
          _0x4782c8 = _0x400dd5 == null ? void 0x0 : _0x400dd5[0x24],
          _0x81f329 = (_0x4782c8 == null ? void 0x0 : _0x4782c8[0x4]) ?? 0x0;
        if (
          !_0x4782c8 ||
          ((_0x4c24eb = xl[_0x4782c8[0x0]]) == null
            ? void 0x0
            : _0x4c24eb["slot"]) !== _0x495aa4(0xb48) ||
          !Bf(_0x81f329)
        )
          break;
        const _0x1f7089 = sS(_0x81f329);
        ((_0x4782c8[0x3] = Math[_0x495aa4(0x1267)](
          0x0,
          Math[_0x495aa4(0x48a)](_0x1f7089, _0x4782c8[0x3] ?? _0x1f7089) -
            _0x382f89,
        )),
          (_0x4782c8[0x3] ?? 0x0) <= 0x0 &&
            ((_0x4782c8[0x3] = 0x0),
            (_0x4782c8[0x4] = 0xffff),
            P(0x2, Qi[_0x81f329] + _0x495aa4(0x8d2), _0x1d72a3)),
          kl(_0x1d72a3[_0x495aa4(0x1351)]),
          LT(_0x1d72a3, 0x24, _0x4782c8[0x0], _0x4782c8),
          Ll(_0x1d72a3, _0x400dd5));
        break;
      }
      case L[_0x495aa4(0x1bd)]: {
        if (
          (_0x3f4b28[_0x495aa4(0x1c03)]() > 0x0
            ? _0x3f4b28["u8"]()
            : _0x1d72a3[_0x495aa4(0x1ed3)]) !== _0x1d72a3[_0x495aa4(0x1ed3)]
        )
          break;
        ZU(_0x1d72a3);
        break;
      }
      case L[_0x495aa4(0x151)]: {
        const _0x21c338 = new lc(_0x3b6e09);
        _0x21c338["u8"]();
        const _0xf6458 = _0x21c338["u8"](),
          _0x840543 = Array["from"]({ length: 0x6 }, () =>
            _0x21c338[_0x495aa4(0xa9c)](),
          ),
          _0x314c68 = _0x21c338["u8"](),
          _0x2f1fbe = _0x21c338["u8"](),
          _0x1ef79e =
            "//" +
            ([
              _0x495aa4(0x124),
              _0x495aa4(0x219),
              _0x495aa4(0x16f0),
              _0x495aa4(0x11fe),
              "restore",
              _0x495aa4(0x9c3),
            ][_0xf6458] || _0x495aa4(0x1044)) +
            "\x20" +
            _0x840543["join"]("\x20") +
            "\x20" +
            _0x314c68 +
            "\x20" +
            _0x2f1fbe;
        gR(_0x1d72a3, _0x1ef79e, () => {
          const _0x49de2b = $o;
          $o = _0x1d72a3;
          try {
            bU(_0x1d72a3, _0x3f4b28);
          } finally {
            $o = _0x49de2b;
          }
        });
        break;
      }
      case L[_0x495aa4(0x1a4)]:
        if (!_0x1d72a3["alive"]) {
          (Os(_0x1d72a3),
            (_0x1d72a3["movementEpoch"] =
              ((_0x1d72a3[_0x495aa4(0x1b13)] ?? 0x0) + 0x1) >>> 0x0),
            (_0x1d72a3[_0x495aa4(0x1d6b)] = 0x0),
            (_0x1d72a3[_0x495aa4(0x13b7)] = 0x0),
            (_0x1d72a3[_0x495aa4(0x1344)] = 0x0),
            (_0x1d72a3[_0x495aa4(0x102)] = 0x0),
            (_0x1d72a3["alive"] = !0x0),
            (_0x1d72a3["maxHp"] = V2(_0x1d72a3[_0x495aa4(0xa26)])),
            (_0x1d72a3["hp"] = _0x1d72a3[_0x495aa4(0x107e)]));
          const _0x44348a = k4(_0x1d72a3);
          ((_0x1d72a3["x"] = _0x44348a["x"]),
            (_0x1d72a3["y"] = _0x44348a["y"]),
            (_0x1d72a3["z"] = _0x44348a["z"]),
            en(
              new W(L[_0x495aa4(0xc24)])
                [_0x495aa4(0x1ac4)](_0x1d72a3["id"])
                [_0x495aa4(0x416)](_0x44348a["x"])
                [_0x495aa4(0x416)](_0x44348a["y"])
                [_0x495aa4(0x416)](_0x44348a["z"])
                [_0x495aa4(0x1ee5)](_0x1d72a3[_0x495aa4(0x1b13)] ?? 0x0),
            ),
            Ci(_0x1d72a3),
            en(Kl(_0x1d72a3)));
        }
        break;
      case L[_0x495aa4(0x1292)]: {
        const _0x38024e = _0x3f4b28[_0x495aa4(0x1ee5)]();
        ((_0x1d72a3[_0x495aa4(0xf67)] = _0x3f4b28[_0x495aa4(0x1ac4)]()),
          ie(
            _0x1d72a3,
            new W(L[_0x495aa4(0x112c)])[_0x495aa4(0x1ee5)](_0x38024e),
          ));
        break;
      }
      case L[_0x495aa4(0x9ab)]: {
        const _0x438611 = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x4d2909 = fo["get"](_0x438611);
        if (
          !_0x4d2909 ||
          _0x4d2909[_0x495aa4(0x1ed3)] !== _0x1d72a3[_0x495aa4(0x1ed3)] ||
          !_0x1d72a3[_0x495aa4(0x174b)] ||
          Date[_0x495aa4(0x1cc6)]() < _0x4d2909[_0x495aa4(0x1435)]
        )
          break;
        const _0x333583 = _0x1d72a3["x"] - _0x4d2909["x"],
          _0x1d84af = _0x1d72a3["y"] + 0.9 - _0x4d2909["y"],
          _0x1282f7 = _0x1d72a3["z"] - _0x4d2909["z"];
        if (
          _0x333583 * _0x333583 +
            _0x1d84af * _0x1d84af +
            _0x1282f7 * _0x1282f7 >
          0x24
        )
          break;
        if (_0x4d2909["cosmetic"]) {
          const _0x17c050 =
              Ke[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? [],
            _0x5dc1ab = _0x17c050[_0x495aa4(0x5de)](
              (_0xc44d03, _0x23e62a) =>
                _0x23e62a < 0x24 && (!_0xc44d03[0x0] || !_0xc44d03[0x1]),
            );
          if (_0x5dc1ab < 0x0) break;
          ((_0x17c050[_0x5dc1ab] = yn([
            _0x4d2909[_0x495aa4(0xff8)],
            0x1,
            _0x4d2909[_0x495aa4(0x4db)],
            _0x4d2909["suppressorDurability"],
            _0x4d2909["magazine"],
            ws[_0x495aa4(0xd97)](_0x4d2909[_0x495aa4(0x58b)]),
          ])),
            fo[_0x495aa4(0x1d64)](_0x438611),
            Ml(),
            Yn(_0x1d72a3[_0x495aa4(0x1351)]),
            Lt[_0x495aa4(0x124)](
              _0x1d72a3[_0x495aa4(0x1351)],
              (Lt[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? 0x0) +
                0x1,
            ),
            ke(
              _0x4d2909[_0x495aa4(0x1ed3)],
              new W(L[_0x495aa4(0xc00)])
                [_0x495aa4(0x1ac4)](_0x438611)
                ["u16"](Co),
            ),
            Et(_0x1d72a3));
          break;
        }
        if (_0x4d2909[_0x495aa4(0xff8)] !== A[_0x495aa4(0x62e)]) {
          const _0x1afa65 = wn(
            _0x1d72a3,
            _0x4d2909[_0x495aa4(0xff8)],
            _0x4d2909[_0x495aa4(0x2021)],
            _0x4d2909[_0x495aa4(0x4db)],
            _0x4d2909[_0x495aa4(0x8ba)],
            _0x4d2909[_0x495aa4(0x1ca8)],
            !0x1,
          );
          if (!_0x1afa65) break;
          if (
            (Lt[_0x495aa4(0x124)](
              _0x1d72a3[_0x495aa4(0x1351)],
              (Lt["get"](_0x1d72a3[_0x495aa4(0x1351)]) ?? 0x0) + 0x1,
            ),
            _0x1afa65 < _0x4d2909[_0x495aa4(0x2021)])
          ) {
            ((_0x4d2909[_0x495aa4(0x2021)] -= _0x1afa65),
              Et(_0x1d72a3),
              ke(_0x4d2909[_0x495aa4(0x1ed3)], ky(_0x4d2909)));
            break;
          }
        }
        (fo[_0x495aa4(0x1d64)](_0x438611),
          _0x4d2909["itemId"] === A[_0x495aa4(0x62e)]
            ? (ao(_0x1d72a3, xt(_0x1d72a3) + _0x4d2909["count"]),
              ke(
                _0x4d2909[_0x495aa4(0x1ed3)],
                new W(L["S_DROP_REMOVE"])
                  ["u16"](_0x438611)
                  [_0x495aa4(0x1ac4)](Co),
              ),
              P(0x1, _0x495aa4(0xe11) + _0x4d2909["count"], _0x1d72a3))
            : (ke(
                _0x4d2909[_0x495aa4(0x1ed3)],
                new W(L["S_DROP_REMOVE"])
                  ["u16"](_0x438611)
                  [_0x495aa4(0x1ac4)](_0x1d72a3["id"])
                  ["u8"](0x1),
              ),
              Et(_0x1d72a3),
              P(
                0x1,
                _0x495aa4(0xd92) +
                  Ji(_0x4d2909[_0x495aa4(0xff8)]) +
                  "\x20×\x20" +
                  _0x4d2909[_0x495aa4(0x2021)],
                _0x1d72a3,
              )));
        break;
      }
      case L[_0x495aa4(0xd2)]: {
        if (
          !_0x1d72a3[_0x495aa4(0x174b)] ||
          _0x1d72a3[_0x495aa4(0x1ed3)] !== C[_0x495aa4(0x9e2)]
        )
          break;
        lU(_0x1d72a3, _0x3f4b28[_0x495aa4(0x438)]());
        break;
      }
      case L["C_FISH"]: {
        const _0x27de2d = _0x3f4b28["u8"](),
          _0x64e748 = ge(_0x3f4b28["u8"](), 0x0, 0x8),
          _0x3df053 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x2f1269 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x5530f3 = _0x3f4b28["f32"](),
          _0x109229 = _0x3f4b28[_0x495aa4(0x416)](),
          _0x1e754c = _0x3f4b28[_0x495aa4(0x416)](),
          _0x1c679f = _0x3f4b28["f32"]();
        if (_0x1d72a3[_0x495aa4(0x1ed3)] !== C[_0x495aa4(0x9e2)]) {
          ca(_0x1d72a3);
          break;
        }
        _0x27de2d === 0x0
          ? sK(
              _0x1d72a3,
              _0x64e748,
              _0x3df053,
              _0x2f1269,
              _0x5530f3,
              _0x109229,
              _0x1e754c,
              _0x1c679f,
            )
          : iK(_0x1d72a3);
        break;
      }
      case L[_0x495aa4(0x8ed)]: {
        const _0x29a77f = {
            x: _0x3f4b28[_0x495aa4(0x416)](),
            y: _0x3f4b28[_0x495aa4(0x416)](),
            z: _0x3f4b28[_0x495aa4(0x416)](),
          },
          _0x4bc3e0 = {
            x: _0x3f4b28[_0x495aa4(0x416)](),
            y: _0x3f4b28[_0x495aa4(0x416)](),
            z: _0x3f4b28[_0x495aa4(0x416)](),
          };
        if (
          !_0x1d72a3[_0x495aa4(0x174b)] ||
          _0x1d72a3["vehicle"] !== -0x1 ||
          _0x1d72a3[_0x495aa4(0x1581)] !== A["EGG"] ||
          Date[_0x495aa4(0x1cc6)]() -
            (fE[_0x495aa4(0x11b7)](_0x1d72a3["id"]) ?? 0x0) <
            0x15e ||
          ![
            ...Object[_0x495aa4(0x1e01)](_0x29a77f),
            ...Object["values"](_0x4bc3e0),
          ][_0x495aa4(0xe00)](Number["isFinite"]) ||
          Math["hypot"](
            _0x29a77f["x"] - _0x1d72a3["x"],
            _0x29a77f["y"] - (_0x1d72a3["y"] + 1.4),
            _0x29a77f["z"] - _0x1d72a3["z"],
          ) > 0x2 ||
          Math[_0x495aa4(0x7a3)](
            Math[_0x495aa4(0x1400)](
              _0x4bc3e0["x"],
              _0x4bc3e0["y"],
              _0x4bc3e0["z"],
            ) - 0x1,
          ) > 0.05 ||
          F2["eggs"][_0x495aa4(0xe0d)] >= 0x100 ||
          [...F2[_0x495aa4(0x1746)][_0x495aa4(0x1e01)]()][_0x495aa4(0x3f4)](
            (_0x3bc424) => _0x3bc424[_0x495aa4(0xca5)] === _0x1d72a3["id"],
          )[_0x495aa4(0x18ce)] >= 0xc ||
          !wo(_0x1d72a3, A[_0x495aa4(0x151d)])
        )
          break;
        (fE[_0x495aa4(0x124)](_0x1d72a3["id"], Date[_0x495aa4(0x1cc6)]()),
          li[_0x495aa4(0x1a88)](_0x1d72a3["id"]),
          F2[_0x495aa4(0x6fd)](
            _0x1d72a3["id"],
            _0x1d72a3["planet"],
            _0x29a77f,
            _0x4bc3e0,
          ));
        break;
      }
      case L[_0x495aa4(0x1c5)]: {
        const _0x1e2b65 = _0x3f4b28["u16"](),
          _0x42412c = _0x3f4b28["u8"](),
          _0x5218c8 = {
            x: _0x3f4b28[_0x495aa4(0x416)](),
            y: _0x3f4b28[_0x495aa4(0x416)](),
            z: _0x3f4b28[_0x495aa4(0x416)](),
          },
          _0x3c32f6 = {
            x: _0x3f4b28[_0x495aa4(0x416)](),
            y: _0x3f4b28[_0x495aa4(0x416)](),
            z: _0x3f4b28["f32"](),
          },
          _0xf23707 = Ke[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? [],
          _0xec21ee = _0xf23707[_0x42412c];
        if (
          !_0x1d72a3[_0x495aa4(0x174b)] ||
          _0x1d72a3[_0x495aa4(0xe3)] ||
          _0x1d72a3[_0x495aa4(0x1713)] !== -0x1 ||
          _0x42412c >= 0x9 ||
          Date[_0x495aa4(0x1cc6)]() -
            (qO[_0x495aa4(0x11b7)](_0x1d72a3["id"]) ?? 0x0) <
            cB * 0x3e8 * 0.8 ||
          ![
            ...Object["values"](_0x5218c8),
            ...Object[_0x495aa4(0x1e01)](_0x3c32f6),
          ][_0x495aa4(0xe00)](Number["isFinite"]) ||
          Math["hypot"](
            _0x5218c8["x"] - _0x1d72a3["x"],
            _0x5218c8["y"] - (_0x1d72a3["y"] + 1.4),
            _0x5218c8["z"] - _0x1d72a3["z"],
          ) > 2.2 ||
          Math["abs"](
            Math[_0x495aa4(0x1400)](
              _0x3c32f6["x"],
              _0x3c32f6["y"],
              _0x3c32f6["z"],
            ) - 0x1,
          ) > 0.05 ||
          (!_0x1d72a3[_0x495aa4(0x1ec2)] &&
            (!_0xec21ee || _0xec21ee[0x0] !== Go || _0xec21ee[0x1] < 0x1))
        )
          break;
        const _0x55422d =
            _0x1d72a3[_0x495aa4(0x1ec2)] || !_0xec21ee || _0xec21ee[0x0] !== Go
              ? jo(Go)
              : (_0xec21ee[0x2] ?? jo(Go)),
          _0x2e7895 = Nk[_0x495aa4(0x6fd)](
            _0x1d72a3["id"],
            _0x1e2b65,
            _0x1d72a3[_0x495aa4(0x1ed3)],
            _0x5218c8,
            _0x3c32f6,
            _0x55422d,
          );
        if (!_0x2e7895) break;
        ((_0x2e7895["cosmetic"] = hf(_0xec21ee)),
          !_0x1d72a3["creative"] &&
            _0xec21ee &&
            ((_0xec21ee[0x0] = 0x0),
            (_0xec21ee[0x1] = 0x0),
            (_0xec21ee[0x2] = 0x0),
            (_0xec21ee[0x3] = 0x0),
            Yn(_0x1d72a3[_0x495aa4(0x1351)])),
          qO["set"](_0x1d72a3["id"], Date[_0x495aa4(0x1cc6)]()),
          li["cancel"](_0x1d72a3["id"]));
        break;
      }
      case L["C_C4_THROW"]: {
        const _0x4c6b24 = [
            _0x3f4b28["f32"](),
            _0x3f4b28[_0x495aa4(0x416)](),
            _0x3f4b28[_0x495aa4(0x416)](),
          ],
          _0x3e0f5f = [
            _0x3f4b28[_0x495aa4(0x416)](),
            _0x3f4b28[_0x495aa4(0x416)](),
            _0x3f4b28["f32"](),
          ],
          _0x5cfe03 =
            _0x3f4b28[_0x495aa4(0x1c03)]() > 0x0
              ? _0x3f4b28["u8"]() === 0x1
              : !0x1,
          _0x141670 = ee[_0x495aa4(0x11b7)](_0x1d72a3["vehicle"]),
          _0x47ed65 =
            2.5 +
            (_0x141670
              ? Math["min"](
                  0xc,
                  Math[_0x495aa4(0x1400)](
                    _0x141670["vx"],
                    _0x141670["vy"],
                    _0x141670["vz"],
                  ) * 0.25,
                )
              : 0x0);
        if (
          !_0x1d72a3["alive"] ||
          !tp(_0x1d72a3[_0x495aa4(0x1581)]) ||
          ![..._0x4c6b24, ..._0x3e0f5f][_0x495aa4(0xe00)](
            Number[_0x495aa4(0xb9c)],
          ) ||
          Math["hypot"](
            _0x4c6b24[0x0] - _0x1d72a3["x"],
            _0x4c6b24[0x1] - (_0x1d72a3["y"] + 1.5),
            _0x4c6b24[0x2] - _0x1d72a3["z"],
          ) > _0x47ed65 ||
          Math[_0x495aa4(0x7a3)](Math[_0x495aa4(0x1400)](..._0x3e0f5f) - 0x1) >
            0.05 ||
          Date[_0x495aa4(0x1cc6)]() -
            (_R[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? 0x0) <
            0x1c2 ||
          ci[_0x495aa4(0x18e7)][_0x495aa4(0xe0d)] >= 0x200 ||
          ci[_0x495aa4(0x2021)](_0x1d72a3[_0x495aa4(0x1351)]) >= 0x20
        )
          break;
        const _0x492b16 = Ju(_0x1d72a3);
        if (!wo(_0x1d72a3, _0x1d72a3[_0x495aa4(0x1581)])) break;
        _R[_0x495aa4(0x124)](
          _0x1d72a3[_0x495aa4(0x1351)],
          Date[_0x495aa4(0x1cc6)](),
        );
        const _0x380b0e = ci[_0x495aa4(0x6fd)](
          _0x1d72a3[_0x495aa4(0x1351)],
          _0x1d72a3[_0x495aa4(0x1ed3)],
          _0x4c6b24,
          _0x3e0f5f,
          _0x1d72a3[_0x495aa4(0x1581)],
          _0x5cfe03,
        );
        _0x380b0e && (_0x380b0e["cosmetic"] = _0x492b16);
        break;
      }
      case L["C_DETONATE"]: {
        if (
          !_0x1d72a3["alive"] ||
          _0x1d72a3[_0x495aa4(0x1581)] !== A[_0x495aa4(0xe66)] ||
          (!_0x1d72a3[_0x495aa4(0x1ec2)] &&
            !(Ke[_0x495aa4(0x11b7)](_0x1d72a3["name"]) ?? [])[
              _0x495aa4(0x129c)
            ](
              (_0x251b94) =>
                _0x251b94[0x0] === A[_0x495aa4(0xe66)] && _0x251b94[0x1] > 0x0,
            ))
        )
          break;
        const _0x149953 = ci["arm"](_0x1d72a3[_0x495aa4(0x1351)]);
        _0x149953 &&
          P(0x1, _0x495aa4(0xf1c) + _0x149953 + _0x495aa4(0x11fa), _0x1d72a3);
        for (const [_0xa8773d, _0x40f5e2] of [...dl]) {
          if (_0x40f5e2 !== _0x1d72a3[_0x495aa4(0x1351)]) continue;
          const [_0x8919b8, _0x46ff95, _0x144284] =
            _0xa8773d[_0x495aa4(0xdea)](",")["map"](Number);
          if (
            B[_0x495aa4(0x4f7)](_0x8919b8, _0x46ff95, _0x144284) !==
            f["DETONATOR"]
          ) {
            dl[_0x495aa4(0x1d64)](_0xa8773d);
            continue;
          }
          (Ue(_0x8919b8, _0x46ff95, _0x144284, f[_0x495aa4(0x11c6)], 0x0, !0x0),
            as(
              _0x8919b8 + 0.5,
              _0x46ff95 + 0.5,
              _0x144284 + 0.5,
              2.2,
              0x1e,
              _0x1d72a3["id"],
            ));
        }
        const _0x54bf97 = [];
        for (const [_0xf6c2b8, _0x39f505] of [...ml]) {
          if (_0x39f505 !== _0x1d72a3[_0x495aa4(0x1351)]) continue;
          const [_0xded3e5, _0x575f3b, _0x249231] =
            _0xf6c2b8[_0x495aa4(0xdea)](",")["map"](Number);
          if (
            B[_0x495aa4(0x4f7)](_0xded3e5, _0x575f3b, _0x249231) !==
            f[_0x495aa4(0x12d4)]
          ) {
            ml[_0x495aa4(0x1d64)](_0xf6c2b8);
            continue;
          }
          _0x54bf97[_0x495aa4(0x124b)]([
            _0xded3e5,
            _0x575f3b,
            _0x249231,
            Math[_0x495aa4(0x1400)](
              _0xded3e5 + 0.5 - _0x1d72a3["x"],
              _0x575f3b + 0.5 - _0x1d72a3["y"],
              _0x249231 + 0.5 - _0x1d72a3["z"],
            ),
          ]);
        }
        _0x54bf97[_0x495aa4(0x1dc4)](
          (_0x4b1a54, _0x40534a) => _0x4b1a54[0x3] - _0x40534a[0x3],
        );
        const _0x17c91a = Date[_0x495aa4(0x1cc6)](),
          _0x22b9aa = _0x54bf97["slice"](0x0, SF);
        (_0x22b9aa[_0x495aa4(0x70c)](
          ([_0x388306, _0xbdad26, _0x3f9da9], _0x438c76) => {
            const _0x33b99b = _0x495aa4;
            (Ue(
              _0x388306,
              _0xbdad26,
              _0x3f9da9,
              f[_0x33b99b(0x11c6)],
              0x0,
              !0x0,
            ),
              Cr[_0x33b99b(0x124b)]({
                x: _0x388306 + 0.5,
                y: _0xbdad26 + 0.5,
                z: _0x3f9da9 + 0.5,
                radius: 4.5,
                dmg: 0x5a,
                src: _0x1d72a3["id"],
                time:
                  _0x17c91a +
                  0xfa +
                  Math[_0x33b99b(0x48a)](0x5dc, _0x438c76 * 0x2d),
                planet: C["EARTH"],
                fx: rt[_0x33b99b(0x12d4)],
              }));
          },
        ),
          _0x22b9aa[_0x495aa4(0x18ce)] &&
            P(
              0x1,
              _0x1d72a3[_0x495aa4(0x1162)] === "ru"
                ? _0x495aa4(0x11cc) + _0x22b9aa[_0x495aa4(0x18ce)] + "."
                : _0x495aa4(0xd1c) +
                    _0x22b9aa[_0x495aa4(0x18ce)] +
                    "\x20" +
                    (_0x22b9aa[_0x495aa4(0x18ce)] === 0x1
                      ? _0x495aa4(0x117c)
                      : _0x495aa4(0x18e7)) +
                    ".",
              _0x1d72a3,
            ),
          _0x54bf97[_0x495aa4(0x18ce)] > _0x22b9aa["length"] &&
            P(
              0x2,
              _0x1d72a3[_0x495aa4(0x1162)] === "ru"
                ? _0x495aa4(0x1248) +
                    (_0x54bf97["length"] - _0x22b9aa["length"]) +
                    _0x495aa4(0xebb)
                : _0x54bf97[_0x495aa4(0x18ce)] -
                    _0x22b9aa[_0x495aa4(0x18ce)] +
                    _0x495aa4(0x15aa),
              _0x1d72a3,
            ),
          _0x22b9aa[_0x495aa4(0x18ce)] && zd());
        break;
      }
      case L[_0x495aa4(0xc9a)]: {
        const _0x43d82a = _0x3f4b28["u8"](),
          _0x2ddba7 = _0x3f4b28[_0x495aa4(0x1ee5)](),
          _0x5c0172 = _0x3f4b28[_0x495aa4(0x1ee5)]();
        let _0x501cdf = 0x0,
          _0x629cb7 = 0x0;
        if ((_0x43d82a !== 0x0 && _0x43d82a !== 0x1) || _0x1d72a3["hp"] <= 0x0)
          _0x501cdf = 0x3;
        else {
          if (
            _0x5c0172 !==
            (Lt[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? 0x0)
          )
            _0x501cdf = 0x2;
          else {
            const _0x53736a =
                Ke[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? [],
              _0x3e3c60 = OD(
                _0x53736a["map"]((_0x3273b2) => ({
                  id: _0x3273b2[0x0],
                  count: _0x3273b2[0x1],
                  durability: _0x3273b2[0x2],
                  suppressorDurability: _0x3273b2[0x3],
                })),
                _0x43d82a,
              );
            if (
              ((_0x629cb7 = _0x3e3c60[_0x495aa4(0x1290)]),
              _0x629cb7 > _0x2ddba7)
            )
              _0x501cdf = 0x2;
            else {
              if (xt(_0x1d72a3) < _0x629cb7) _0x501cdf = 0x1;
              else {
                if (_0x629cb7 > 0x0) {
                  for (const _0x54afeb of _0x3e3c60[_0x495aa4(0x1428)])
                    ((_0x53736a[_0x54afeb[_0x495aa4(0x88b)]][0x2] =
                      _0x54afeb["durability"]),
                      _0x54afeb[_0x495aa4(0x8ba)] !== void 0x0 &&
                        (_0x53736a[_0x54afeb[_0x495aa4(0x88b)]][0x3] =
                          _0x54afeb[_0x495aa4(0x8ba)]));
                  (cu[_0x495aa4(0x1d64)](_0x1d72a3[_0x495aa4(0x1351)]),
                    Lt["set"](
                      _0x1d72a3["name"],
                      (Lt[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ??
                        0x0) + 0x1,
                    ),
                    Yn(
                      _0x1d72a3["name"],
                      Math["max"](
                        Date[_0x495aa4(0x1cc6)](),
                        (Ns[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ??
                          0x0) + 0x1,
                      ),
                    ),
                    ao(_0x1d72a3, xt(_0x1d72a3) - _0x629cb7));
                }
              }
            }
          }
        }
        (Et(_0x1d72a3),
          ie(
            _0x1d72a3,
            new W(L["S_BALANCE"])
              [_0x495aa4(0x1ee5)](Math[_0x495aa4(0x17b0)](xt(_0x1d72a3)))
              [_0x495aa4(0xb27)](xt(_0x1d72a3)),
          ),
          ie(
            _0x1d72a3,
            new W(L[_0x495aa4(0x2dd)])
              ["u8"](_0x501cdf)
              [_0x495aa4(0x1ee5)](_0x629cb7),
          ));
        break;
      }
      case L[_0x495aa4(0x1ffe)]: {
        if (!_s(_0x1d72a3, "shop.use")) {
          P(0x2, _0x495aa4(0x1cdc), _0x1d72a3);
          break;
        }
        const _0x5ce8c6 = _0x3f4b28["u8"](),
          _0x401546 = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x8ee253 = ge(_0x3f4b28["u16"](), 0x1, 0x3e7),
          _0x135764 = hi(_0x401546),
          _0x2999c3 = op(_0x401546);
        if (!_0x2999c3) break;
        if (_0x5ce8c6 === 0x0) {
          if (_0x2999c3[_0x495aa4(0x9fd)] === !0x1) break;
          if (
            _0x401546 === A[_0x495aa4(0x15d6)] &&
            !_s(_0x1d72a3, _0x495aa4(0x1d26))
          ) {
            P(0x2, _0x495aa4(0x1cdc), _0x1d72a3);
            break;
          }
          const _0x5e780b = _0x135764 * _0x8ee253;
          if (!_0x1d72a3["creative"] && xt(_0x1d72a3) < _0x5e780b) {
            (P(0x2, _0x495aa4(0x955) + _0x5e780b + _0x495aa4(0x805), _0x1d72a3),
              ie(
                _0x1d72a3,
                new W(L[_0x495aa4(0x1857)])
                  [_0x495aa4(0x1ee5)](Math["floor"](xt(_0x1d72a3)))
                  [_0x495aa4(0xb27)](xt(_0x1d72a3)),
              ));
            break;
          }
          if (!ou(_0x1d72a3["name"], _0x401546, _0x8ee253)) {
            P(0x2, _0x495aa4(0xc72), _0x1d72a3);
            break;
          }
          const _0x3dfd1c =
              Ke[_0x495aa4(0x11b7)](_0x1d72a3["name"]) ??
              Array[_0x495aa4(0x1a89)]({ length: 0x28 }, () => [
                0x0, 0x0, 0x0, 0x0, 0x0,
              ]),
            _0x41a641 = Il(_0x1d72a3)[_0x495aa4(0x1b83)][I0(Pc(_0x401546))],
            _0x28366d =
              k0[_0x495aa4(0x1b5e)](I0(Pc(_0x401546))) && !ES(_0x401546)
                ? Qs(_0x41a641)
                : void 0x0;
          if (
            _0x28366d &&
            (Ke[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? [])
              [_0x495aa4(0x1cf4)](0x0, 0x24)
              [_0x495aa4(0x3f4)](
                (_0x444a67) => !_0x444a67[0x0] || !_0x444a67[0x1],
              )[_0x495aa4(0x18ce)] < _0x8ee253
          ) {
            P(0x2, _0x495aa4(0xc72), _0x1d72a3);
            break;
          }
          const _0xd43fc4 = _0x28366d ? 0x1 : Si(_0x401546);
          _0x1d72a3[_0x495aa4(0x1ec2)]
            ? ie(
                _0x1d72a3,
                new W(L["S_BALANCE"])
                  [_0x495aa4(0x1ee5)](Math[_0x495aa4(0x17b0)](xt(_0x1d72a3)))
                  [_0x495aa4(0xb27)](xt(_0x1d72a3)),
              )
            : ao(_0x1d72a3, xt(_0x1d72a3) - _0x5e780b);
          let _0x54e367 = _0x8ee253;
          for (const _0x50136b of _0x3dfd1c[_0x495aa4(0x1cf4)](0x0, 0x24)) {
            if (_0x50136b[0x0] !== _0x401546 || _0x28366d || _0x50136b[0x5])
              continue;
            const _0x50c82e = Math["min"](
              _0x54e367,
              Math[_0x495aa4(0x1267)](0x0, _0xd43fc4 - _0x50136b[0x1]),
            );
            ((_0x50136b[0x1] += _0x50c82e), (_0x54e367 -= _0x50c82e));
          }
          for (
            let _0x553f6f = 0x0;
            _0x553f6f < 0x24 && _0x54e367 > 0x0;
            _0x553f6f++
          ) {
            if (
              _0x3dfd1c[_0x553f6f] &&
              _0x3dfd1c[_0x553f6f][0x0] > 0x0 &&
              _0x3dfd1c[_0x553f6f][0x1] > 0x0
            )
              continue;
            const _0x50494c = Math["min"](_0xd43fc4, _0x54e367);
            ((_0x3dfd1c[_0x553f6f] = yn([
              _0x401546,
              _0x50494c,
              void 0x0,
              void 0x0,
              void 0x0,
              _0x28366d
                ? ws["create"](
                    _0x41a641,
                    ((_0x5cd9ab = _0x1d72a3[_0x495aa4(0x1681)]) == null
                      ? void 0x0
                      : _0x5cd9ab["id"]) ?? _0x1d72a3[_0x495aa4(0x1351)],
                    _0x1d72a3[_0x495aa4(0x1351)],
                  )
                : void 0x0,
            ])),
              (_0x54e367 -= _0x50494c));
          }
          (Ke[_0x495aa4(0x124)](_0x1d72a3[_0x495aa4(0x1351)], _0x3dfd1c),
            Lt["set"](
              _0x1d72a3[_0x495aa4(0x1351)],
              (Lt[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? 0x0) +
                0x1,
            ),
            Yn(
              _0x1d72a3[_0x495aa4(0x1351)],
              Math[_0x495aa4(0x1267)](
                Date[_0x495aa4(0x1cc6)](),
                (Ns[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? 0x0) +
                  0x1,
              ),
            ),
            Et(_0x1d72a3),
            P(
              0x1,
              _0x495aa4(0xf56) + Ji(_0x401546) + _0x495aa4(0x142c) + _0x8ee253,
              _0x1d72a3,
            ));
        } else {
          if (_0x5ce8c6 === 0x1) {
            const _0x1425ab =
                Ke[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? [],
              _0x3bff9e =
                _0x3f4b28[_0x495aa4(0x1c03)]() >= 0x2
                  ? _0x3f4b28[_0x495aa4(0x1ac4)]()
                  : 0xffff,
              _0x529d26 =
                _0x3bff9e !== 0xffff
                  ? ((_0x4d5d62 = _0x1425ab[_0x3bff9e]) == null
                      ? void 0x0
                      : _0x4d5d62[0x0]) === _0x401546 &&
                    _0x1425ab[_0x3bff9e][0x1] > 0x0
                    ? [_0x1425ab[_0x3bff9e]]
                    : []
                  : _0x1425ab[_0x495aa4(0x3f4)](
                      (_0x2fa035) =>
                        _0x2fa035[0x0] === _0x401546 && _0x2fa035[0x1] > 0x0,
                    );
            if (
              _0x529d26[_0x495aa4(0xae4)](
                (_0x5225c1, _0x5a82fa) => _0x5225c1 + _0x5a82fa[0x1],
                0x0,
              ) < _0x8ee253
            ) {
              P(0x2, _0x495aa4(0x9c2), _0x1d72a3);
              break;
            }
            let _0x45b6f6 = _0x8ee253,
              _0x35307e = 0x0;
            const _0x3b0836 = [];
            for (const _0x30f52f of _0x529d26) {
              if (_0x45b6f6 <= 0x0) break;
              const _0x40fb57 = Math[_0x495aa4(0x48a)](
                  _0x45b6f6,
                  _0x30f52f[0x1],
                ),
                _0x59b7b0 = Math[_0x495aa4(0x17b0)](
                  Uh(_0x401546) * cA(_0x401546, _0x30f52f[0x2]),
                );
              ((_0x35307e += _0x59b7b0 * _0x40fb57),
                _0x3b0836["push"]({ slot: _0x30f52f, take: _0x40fb57 }),
                (_0x45b6f6 -= _0x40fb57));
            }
            if (_0x45b6f6 > 0x0) {
              P(0x2, _0x495aa4(0x9c2), _0x1d72a3);
              break;
            }
            for (const { slot: _0x192fc0, take: _0x552d1c } of _0x3b0836)
              ((_0x192fc0[0x1] -= _0x552d1c),
                _0x192fc0[0x1] <= 0x0 &&
                  _0x192fc0[_0x495aa4(0x107b)](
                    0x0,
                    _0x192fc0[_0x495aa4(0x18ce)],
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                  ));
            (Yn(_0x1d72a3[_0x495aa4(0x1351)]),
              ao(_0x1d72a3, xt(_0x1d72a3) + _0x35307e),
              P(
                0x1,
                _0x495aa4(0x199e) +
                  Ji(_0x401546) +
                  _0x495aa4(0x142c) +
                  _0x8ee253 +
                  _0x495aa4(0xaf3) +
                  _0x35307e,
                _0x1d72a3,
              ));
          }
        }
        break;
      }
      case L["C_FRIENDS"]: {
        if (!_s(_0x1d72a3, _0x495aa4(0xbeb))) {
          P(0x2, _0x495aa4(0x1cdc), _0x1d72a3);
          break;
        }
        const _0x24c5c0 = _0x3f4b28["u8"](),
          _0x3716ed =
            _0x3f4b28[_0x495aa4(0x1c03)]() >= 0x2
              ? _0x3f4b28[_0x495aa4(0x438)]()
                  [_0x495aa4(0x16cf)]()
                  [_0x495aa4(0x1cf4)](0x0, 0x40)
              : "";
        _0x24c5c0 === 0x0
          ? F4(_0x1d72a3, _0x3716ed)
          : _0x24c5c0 === 0x1
            ? $4(_0x1d72a3, _0x3716ed)
            : qf(_0x1d72a3);
        break;
      }
      case L[_0x495aa4(0x13ba)]: {
        const _0xb56141 = ee["get"](_0x3f4b28[_0x495aa4(0x1ac4)]());
        if (
          !_0x1d72a3["alive"] ||
          _0x1d72a3[_0x495aa4(0x1713)] !== -0x1 ||
          _0x1d72a3[_0x495aa4(0x1581)] !== A["WELDER"] ||
          !_0xb56141 ||
          (_0xb56141[_0x495aa4(0x1ed3)] ?? 0x0) !== _0x1d72a3["planet"] ||
          _0xb56141[_0x495aa4(0x1b8)] !== _0x1d72a3["name"] ||
          _0xb56141[_0x495aa4(0x87e)] ||
          Math[_0x495aa4(0x1400)](
            _0x1d72a3["x"] - _0xb56141["x"],
            _0x1d72a3["y"] + 0.9 - _0xb56141["y"],
            _0x1d72a3["z"] - _0xb56141["z"],
          ) > (_0xb56141[_0x495aa4(0x58f)] === I[_0x495aa4(0x7b7)] ? 0x1e : 0xc)
        )
          break;
        if (
          _0xb56141[_0x495aa4(0x30c)] !== -0x1 ||
          _0xb56141[_0x495aa4(0x16a6)][_0x495aa4(0x18ce)] ||
          Math["hypot"](_0xb56141["vx"], _0xb56141["vy"], _0xb56141["vz"]) >
            0.3 ||
          Io[_0x495aa4(0x448)](_0xb56141["id"]) ||
          Hs[_0x495aa4(0x448)](_0xb56141["id"]) ||
          ir(
            (_0x59d7fd = _0xb56141[_0x495aa4(0x933)]) == null
              ? void 0x0
              : _0x59d7fd[_0x495aa4(0x42a)],
          ) ||
          [...Vo["values"]()][_0x495aa4(0x129c)](
            (_0x4516a2) => _0x4516a2["viewing"] === _0xb56141["id"],
          )
        ) {
          P(0x2, _0x495aa4(0x1a44), _0x1d72a3);
          break;
        }
        if (
          _0xb56141[_0x495aa4(0x58f)] === I["CARRIER"] &&
          [...ee["values"](), ...$[_0x495aa4(0x1e01)]()][_0x495aa4(0x129c)](
            (_0x406b77) =>
              _0x406b77 !== _0xb56141 &&
              _0x406b77 !== _0x1d72a3 &&
              (_0x406b77[_0x495aa4(0x1ed3)] ?? 0x0) ===
                (_0xb56141[_0x495aa4(0x1ed3)] ?? 0x0) &&
              _0x406b77["y"] > _0xb56141["y"] + 0x2 &&
              _0x406b77["y"] < _0xb56141["y"] + 0xc &&
              (() => {
                const _0x42b8c5 = _0x495aa4,
                  _0x9e16cd = Nu(_0xb56141, _0x406b77);
                return (
                  Math[_0x42b8c5(0x7a3)](_0x9e16cd["x"]) < 0x8 &&
                  Math[_0x42b8c5(0x7a3)](_0x9e16cd["z"]) < 0x18
                );
              })(),
          )
        ) {
          P(0x2, _0x495aa4(0x137f), _0x1d72a3);
          break;
        }
        if (
          [...ci[_0x495aa4(0x18e7)]["values"]()][_0x495aa4(0x129c)](
            (_0x3a23b9) =>
              _0x3a23b9[_0x495aa4(0x42a)] === 0x2 &&
              _0x3a23b9[_0x495aa4(0xe92)] === _0xb56141["id"],
          )
        ) {
          P(0x2, _0x495aa4(0x1ae1), _0x1d72a3);
          break;
        }
        if (_0xb56141["hp"] < (Bn[_0xb56141[_0x495aa4(0x58f)]] ?? 0x64)) {
          P(0x2, _0x495aa4(0x1a63), _0x1d72a3);
          break;
        }
        const _0x4b248a = WC(_0xb56141["type"]);
        if (!_0x1d72a3[_0x495aa4(0x1ec2)] && xt(_0x1d72a3) < _0x4b248a) {
          P(
            0x2,
            "Not\x20enough\x20money:\x20$" + _0x4b248a + _0x495aa4(0x805),
            _0x1d72a3,
          );
          break;
        }
        const _0x3165e9 = (Ke[_0x495aa4(0x11b7)](
            _0x1d72a3[_0x495aa4(0x1351)],
          ) ??
            Array[_0x495aa4(0x1a89)]({ length: 0x28 }, () => [
              0x0, 0x0, 0x0, 0x0, 0x0,
            ]))["map"]((_0x2f95d4) => [..._0x2f95d4]),
          _0x46408a = [
            i1[_0xb56141[_0x495aa4(0x58f)]],
            ...(_0xb56141[_0x495aa4(0xbec)] ? [A[_0x495aa4(0x1837)]] : []),
          ];
        let _0x404bf = !0x0;
        for (const _0x58f472 of _0x46408a) {
          const _0x36aa53 = _0x3165e9[_0x495aa4(0x5de)](
            (_0x147b09, _0x5a7266) =>
              _0x5a7266 < 0x24 &&
              ((_0x147b09[0x0] === _0x58f472 &&
                _0x147b09[0x1] < Si(_0x58f472)) ||
                _0x147b09[0x0] === 0x0 ||
                _0x147b09[0x1] === 0x0),
          );
          if (_0x36aa53 < 0x0) {
            _0x404bf = !0x1;
            break;
          }
          _0x3165e9[_0x36aa53][0x0] === _0x58f472 &&
          _0x3165e9[_0x36aa53][0x1] > 0x0
            ? _0x3165e9[_0x36aa53][0x1]++
            : (_0x3165e9[_0x36aa53] = yn([_0x58f472, 0x1]));
        }
        if (!_0x404bf) {
          P(0x2, _0x495aa4(0xc72), _0x1d72a3);
          break;
        }
        (Ke[_0x495aa4(0x124)](_0x1d72a3["name"], _0x3165e9),
          Lt[_0x495aa4(0x124)](
            _0x1d72a3[_0x495aa4(0x1351)],
            (Lt[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? 0x0) + 0x1,
          ),
          Yn(
            _0x1d72a3[_0x495aa4(0x1351)],
            Math[_0x495aa4(0x1267)](
              Date[_0x495aa4(0x1cc6)](),
              (Ns[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? 0x0) +
                0x1,
            ),
          ));
        const _0x7ca1ac = vB(
          _0xb56141[_0x495aa4(0x58f)],
          _0xb56141[_0x495aa4(0xa26)] ?? 0x0,
        );
        (_0x1d72a3[_0x495aa4(0x1ec2)] ||
          ao(_0x1d72a3, xt(_0x1d72a3) - _0x4b248a + _0x7ca1ac),
          ee["delete"](_0xb56141["id"]),
          il["delete"](_0xb56141["id"]),
          Xi[_0x495aa4(0x1d64)](_0xb56141["id"]),
          (Rt = !0x0),
          je(
            _0xb56141,
            new W(L["S_VEH_DESTROY"])["u16"](_0xb56141["id"])["u8"](0x0),
          ),
          Et(_0x1d72a3),
          P(
            0x1,
            _0x495aa4(0x1b17) +
              (_0x1d72a3["creative"] ? 0x0 : _0x4b248a) +
              (_0x7ca1ac && !_0x1d72a3[_0x495aa4(0x1ec2)]
                ? _0x495aa4(0x4fb) + _0x7ca1ac
                : ""),
            _0x1d72a3,
          ));
        break;
      }
      case L[_0x495aa4(0xf30)]: {
        const _0x377369 = ee[_0x495aa4(0x11b7)](_0x3f4b28["u16"]()),
          _0x11f164 = _0x3f4b28["u8"]();
        if (
          !_0x1d72a3["alive"] ||
          _0x1d72a3["held"] !== A["WELDER"] ||
          !_0x377369 ||
          (_0x377369[_0x495aa4(0x1ed3)] ?? 0x0) !==
            _0x1d72a3[_0x495aa4(0x1ed3)] ||
          !na(_0x1d72a3, _0x377369)
        )
          break;
        if (_0x377369["raid"] || _0x377369[_0x495aa4(0x1b8)] === Gg) {
          P(0x2, _0x495aa4(0xec6), _0x1d72a3);
          break;
        }
        const _0x4e503d = _0x377369["armor"] ?? 0x0,
          _0x5a859f = ZN(_0x377369[_0x495aa4(0x58f)]);
        if (!_0x5a859f) {
          P(0x2, _0x495aa4(0x545), _0x1d72a3);
          break;
        }
        if (
          _0x11f164 < 0x1 ||
          _0x11f164 > _0x5a859f ||
          _0x11f164 <= _0x4e503d
        ) {
          P(0x2, _0x495aa4(0x2e0), _0x1d72a3);
          break;
        }
        if (
          !(
            _0x1d72a3["vehicle"] === _0x377369["id"] &&
            (_0x377369[_0x495aa4(0x30c)] === _0x1d72a3["id"] ||
              _0x377369[_0x495aa4(0x16a6)][_0x495aa4(0x1b5e)](_0x1d72a3["id"]))
          ) &&
          Math[_0x495aa4(0x1400)](
            _0x1d72a3["x"] - _0x377369["x"],
            _0x1d72a3["y"] + 0.9 - _0x377369["y"],
            _0x1d72a3["z"] - _0x377369["z"],
          ) > 0xa
        ) {
          P(0x2, "Move\x20closer\x20to\x20the\x20vehicle", _0x1d72a3);
          break;
        }
        if (
          _0x377369[_0x495aa4(0x30c)] !== -0x1 &&
          _0x377369[_0x495aa4(0x30c)] !== _0x1d72a3["id"] &&
          Math[_0x495aa4(0x1400)](_0x377369["vx"], _0x377369["vz"]) > 1.5
        ) {
          P(
            0x2,
            "Stop\x20the\x20vehicle\x20to\x20weld\x20armour\x20on",
            _0x1d72a3,
          );
          break;
        }
        const _0x2d6af3 = CB(_0x377369[_0x495aa4(0x58f)], _0x4e503d, _0x11f164);
        if (!_0x1d72a3["creative"] && xt(_0x1d72a3) < _0x2d6af3) {
          (P(0x2, _0x495aa4(0x955) + _0x2d6af3 + _0x495aa4(0x805), _0x1d72a3),
            ie(
              _0x1d72a3,
              new W(L[_0x495aa4(0x1857)])
                ["u32"](Math[_0x495aa4(0x17b0)](xt(_0x1d72a3)))
                [_0x495aa4(0xb27)](xt(_0x1d72a3)),
            ));
          break;
        }
        (_0x1d72a3["creative"] || ao(_0x1d72a3, xt(_0x1d72a3) - _0x2d6af3),
          (_0x377369[_0x495aa4(0xa26)] = _0x11f164),
          (Rt = !0x0),
          ke(
            _0x377369["planet"] ?? C[_0x495aa4(0x9e2)],
            new W(L["S_VEH_ARMOR"])
              ["u16"](_0x377369["id"])
              ["u8"](_0x11f164)
              ["u8"](0x1)
              ["u16"](_0x1d72a3["id"]),
          ),
          P(
            0x1,
            DB(_0x377369[_0x495aa4(0x58f)], _0x11f164, !0x1) +
              _0x495aa4(0x206d) +
              Ls[_0x377369[_0x495aa4(0x58f)]] +
              _0x495aa4(0xc8b) +
              (_0x1d72a3[_0x495aa4(0x1ec2)] ? 0x0 : _0x2d6af3),
            _0x1d72a3,
          ));
        break;
      }
      case L["C_VEH_REPAIR"]: {
        if (
          !_0x1d72a3[_0x495aa4(0x174b)] ||
          _0x1d72a3["held"] !== A[_0x495aa4(0x1da2)]
        )
          break;
        const _0x5e699f = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x488818 = ee[_0x495aa4(0x11b7)](_0x5e699f);
        if (
          !_0x488818 ||
          (_0x488818[_0x495aa4(0x1ed3)] ?? C[_0x495aa4(0x9e2)]) !==
            _0x1d72a3["planet"] ||
          !na(_0x1d72a3, _0x488818)
        )
          break;
        if (_0x488818[_0x495aa4(0x1b8)] === Gg) {
          P(0x2, "Raid\x20vehicles\x20cannot\x20be\x20repaired", _0x1d72a3);
          break;
        }
        const _0x2037ef = Bn[_0x488818["type"]] ?? 0x64;
        if (_0x488818["hp"] >= _0x2037ef) {
          P(0x2, _0x495aa4(0xa9e), _0x1d72a3);
          break;
        }
        const _0x37c12a = _0x1d72a3["x"] - _0x488818["x"],
          _0x379b41 = _0x1d72a3["y"] + 0.9 - _0x488818["y"],
          _0x47b993 = _0x1d72a3["z"] - _0x488818["z"],
          _0x1b3736 =
            _0x488818[_0x495aa4(0x58f)] === I[_0x495aa4(0x7b7)] ? 0x1c : 0xa;
        if (
          !(
            _0x1d72a3[_0x495aa4(0x1713)] === _0x488818["id"] &&
            (_0x488818[_0x495aa4(0x30c)] === _0x1d72a3["id"] ||
              _0x488818[_0x495aa4(0x16a6)][_0x495aa4(0x1b5e)](_0x1d72a3["id"]))
          ) &&
          _0x37c12a * _0x37c12a +
            _0x379b41 * _0x379b41 +
            _0x47b993 * _0x47b993 >
            _0x1b3736 * _0x1b3736
        ) {
          P(0x2, _0x495aa4(0x192b), _0x1d72a3);
          break;
        }
        const _0x276ba9 = nS(_0x488818[_0x495aa4(0x58f)]);
        if (
          !_0x1d72a3[_0x495aa4(0x1ec2)] &&
          _0x276ba9 > 0x0 &&
          xt(_0x1d72a3) < _0x276ba9
        ) {
          (P(0x2, _0x495aa4(0x955) + _0x276ba9 + _0x495aa4(0x805), _0x1d72a3),
            ie(
              _0x1d72a3,
              new W(L[_0x495aa4(0x1857)])
                ["u32"](Math[_0x495aa4(0x17b0)](xt(_0x1d72a3)))
                [_0x495aa4(0xb27)](xt(_0x1d72a3)),
            ));
          break;
        }
        !_0x1d72a3[_0x495aa4(0x1ec2)] &&
          _0x276ba9 > 0x0 &&
          ao(_0x1d72a3, xt(_0x1d72a3) - _0x276ba9);
        const _0x297108 = pN(_0x2037ef),
          _0x5f1a5f = Math[_0x495aa4(0x48a)](
            _0x2037ef - _0x488818["hp"],
            _0x297108,
          );
        (X4(_0x1d72a3, _0x488818, _0x5f1a5f),
          (_0x488818["hp"] = Math[_0x495aa4(0x48a)](
            _0x2037ef,
            _0x488818["hp"] + _0x297108,
          )),
          ke(
            _0x488818["planet"] ?? C[_0x495aa4(0x9e2)],
            new W(L[_0x495aa4(0x1702)])
              ["u16"](_0x488818["id"])
              [_0x495aa4(0x1ac4)](_0x488818["hp"]),
          ),
          (Rt = !0x0));
        break;
      }
      case L[_0x495aa4(0x1253)]: {
        const _0x4b3c00 = _0x3f4b28["u8"](),
          _0x469350 = _0x3f4b28[_0x495aa4(0xa9c)](),
          _0xecacf0 = _0x3f4b28["u8"](),
          _0xd0ef55 = _0x3f4b28[_0x495aa4(0xa9c)](),
          _0x24c8df = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x46a572 = _0x3f4b28["u8"](),
          _0x2059e1 = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x11f945 = _0x3f4b28["u8"](),
          _0x1d9940 = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x3c9060 = _0x3f4b28["u16"](),
          _0x3b6ff4 = () =>
            yn([
              _0x3f4b28[_0x495aa4(0x1ac4)](),
              _0x3f4b28[_0x495aa4(0x1ac4)](),
              _0x3f4b28[_0x495aa4(0x1ac4)](),
              _0x3f4b28[_0x495aa4(0x1ac4)](),
              _0x3f4b28[_0x495aa4(0x1ac4)](),
            ]),
          _0xc0d070 = _0x3b6ff4(),
          _0x56e414 = _0x3b6ff4(),
          _0x5d5bf9 =
            _0x3f4b28[_0x495aa4(0x1c03)]() >= 0x2
              ? JSON[_0x495aa4(0x690)](_0x3f4b28[_0x495aa4(0x438)]())
              : null;
        if (
          !_0x1d72a3[_0x495aa4(0x174b)] ||
          _0x4b3c00 > 0x2 ||
          _0x46a572 > 0x1 ||
          _0x11f945 > 0x1 ||
          _0x3c9060 < 0x1 ||
          (_0x4b3c00 !== 0x1 && !ln(_0x1d72a3, _0x469350, _0xd0ef55))
        )
          break;
        const _0x1fef04 =
            _0x4b3c00 === 0x1 ? es[_0x495aa4(0x11b7)](_0x24c8df) : void 0x0,
          _0x4eca39 = Ce(_0x1d72a3[_0x495aa4(0x1ed3)]);
        if (
          _0x4b3c00 === 0x1 &&
          (!_0x1fef04 ||
            _0x1fef04[_0x495aa4(0x1ed3)] !== _0x1d72a3[_0x495aa4(0x1ed3)])
        )
          break;
        const _0x23171c = _0x1fef04 ?? {
          x: _0x469350 + 0.5,
          y: _0xecacf0,
          z: _0xd0ef55 + 0.5,
        };
        if (
          Math["hypot"](
            _0x1d72a3["x"] - _0x23171c["x"],
            _0x1d72a3["y"] + 0.9 - _0x23171c["y"],
            _0x1d72a3["z"] - _0x23171c["z"],
          ) > 0x8 ||
          (_0x4b3c00 === 0x0 &&
            !sa(_0x4eca39["getBlock"](_0x469350, _0xecacf0, _0xd0ef55))) ||
          (_0x4b3c00 === 0x2 &&
            (_0x1d72a3["planet"] !== C[_0x495aa4(0x9e2)] ||
              _0x4eca39[_0x495aa4(0x4f7)](_0x469350, _0xecacf0, _0xd0ef55) !==
                f["FURNACE"]))
        )
          break;
        const _0x5d52c1 = Ss(
            _0x469350,
            _0xecacf0,
            _0xd0ef55,
            _0x1d72a3["planet"],
          ),
          _0x45bb2b =
            _0x4b3c00 === 0x2 ? aR(_0x469350, _0xecacf0, _0xd0ef55) : void 0x0,
          _0x4fb7a5 =
            (_0x1fef04 == null ? void 0x0 : _0x1fef04[_0x495aa4(0xe4e)]) ??
            (_0x45bb2b == null ? void 0x0 : _0x45bb2b["slots"]) ??
            pn[_0x495aa4(0x11b7)](_0x5d52c1) ??
            Array[_0x495aa4(0x1a89)]({ length: 0x1b }, () => [
              0x0, 0x0, 0x0, 0x0, 0xffff,
            ]);
        if (
          (_0x4b3c00 === 0x0 && pn[_0x495aa4(0x124)](_0x5d52c1, _0x4fb7a5),
          _0x1fef04)
        ) {
          for (
            ;
            _0x4fb7a5["length"] <
            Math[_0x495aa4(0x1267)](
              0x1b,
              Math[_0x495aa4(0xe53)](_0x4fb7a5[_0x495aa4(0x18ce)] / 0x9) * 0x9,
            );
          )
            _0x4fb7a5[_0x495aa4(0x124b)]([0x0, 0x0, 0x0, 0x0, 0xffff]);
        }
        const _0xf442b1 =
            Ke[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? [],
          _0x4b90bc = (_0x46a572 ? _0x4fb7a5 : _0xf442b1)[_0x2059e1],
          _0x4794c2 = (_0x11f945 ? _0x4fb7a5 : _0xf442b1)[_0x1d9940],
          _0x5c64b2 = (_0x23b460, _0x41b589, _0x51d1a3 = !0x1) =>
            !!_0x23b460 &&
            yn(_0x23b460)
              [_0x495aa4(0x1cf4)](0x0, _0x51d1a3 ? 0x2 : 0x5)
              [_0x495aa4(0xe00)](
                (_0x29eb5c, _0x5513db) => _0x29eb5c === _0x41b589[_0x5513db],
              ),
          _0x465cb6 = () => {
            (Et(_0x1d72a3),
              _0x1fef04
                ? t0(_0x1d72a3, _0x1fef04)
                : _0x45bb2b
                  ? x0(_0x1d72a3, _0x469350, _0xecacf0, _0xd0ef55)
                  : Ch(_0x1d72a3, _0x469350, _0xecacf0, _0xd0ef55));
          };
        if (
          !_0x4b90bc ||
          (!_0x46a572 && _0x2059e1 >= 0x24) ||
          (!_0x11f945 && _0x1d9940 < 0xfffe && _0x1d9940 >= 0x24) ||
          !_0x5c64b2(_0x4b90bc, _0xc0d070, !!_0x45bb2b && !!_0x46a572) ||
          (_0x1d9940 < 0xfffe &&
            !_0x5c64b2(_0x4794c2, _0x56e414, !!_0x45bb2b && !!_0x11f945)) ||
          (_0x5d5bf9 &&
            ((((_0xdf30fd = _0x4b90bc[0x5]) == null
              ? void 0x0
              : _0xdf30fd[_0x495aa4(0x7a6)]) ?? null) !== _0x5d5bf9[0x0] ||
              (_0x1d9940 < 0xfffe &&
                (((_0x1a48e9 = _0x4794c2 == null ? void 0x0 : _0x4794c2[0x5]) ==
                null
                  ? void 0x0
                  : _0x1a48e9[_0x495aa4(0x7a6)]) ?? null) !== _0x5d5bf9[0x1])))
        ) {
          _0x465cb6();
          break;
        }
        const _0x2b824a = (_0x52b851) => {
            const _0x3b9c89 = yn(_0x52b851);
            return {
              id: _0x3b9c89[0x0],
              count: _0x3b9c89[0x1],
              durability: _0x3b9c89[0x2],
              suppressorDurability: _0x3b9c89[0x3],
              magazine: _0x3b9c89[0x4],
              cosmetic: hf(_0x3b9c89),
            };
          },
          _0x17d3e9 = _0xf442b1["map"](_0x2b824a),
          _0x5138cf = _0x4fb7a5[_0x495aa4(0x164b)](_0x2b824a),
          _0x1843bd = (_0x46a572 ? _0x5138cf : _0x17d3e9)[_0x2059e1],
          _0x49398c = (_0x14d90a, _0x541bdb) =>
            !_0x45bb2b ||
            (_0x14d90a === 0x0 && rR(_0x541bdb) !== 0x0) ||
            (_0x14d90a === 0x1 &&
              (_0x541bdb === A[_0x495aa4(0x1ca1)] ||
                _0x541bdb === A[_0x495aa4(0xeea)])) ||
            _0x541bdb === 0x0;
        let _0x4a46b4 = 0x0;
        if (_0x1d9940 === 0xfffe && !_0x45bb2b) {
          for (const _0x2ed912 of [
            ..._0x17d3e9[_0x495aa4(0x1cf4)](0x0, 0x24),
            ..._0x5138cf,
          ])
            _0x2ed912 !== _0x1843bd &&
              _0x2ed912["id"] === _0x1843bd["id"] &&
              (_0x4a46b4 += hM(
                _0x2ed912,
                _0x1843bd,
                _0x2ed912[_0x495aa4(0x2021)],
                Si,
                !0x1,
              ));
        } else {
          if (_0x1d9940 === 0xffff) {
            const _0x1a3b9f = (
              _0x11f945 ? _0x5138cf : _0x17d3e9[_0x495aa4(0x1cf4)](0x0, 0x24)
            )[_0x495aa4(0x3f4)](
              (_0x3e8932, _0x4bce44) =>
                !_0x11f945 || _0x49398c(_0x4bce44, _0x1843bd["id"]),
            );
            _0x4a46b4 = ND(_0x1843bd, _0x1a3b9f, Si);
          } else {
            const _0x12650a = (_0x11f945 ? _0x5138cf : _0x17d3e9)[_0x1d9940];
            _0x12650a &&
              (!_0x11f945 || _0x49398c(_0x1d9940, _0x1843bd["id"])) &&
              (!_0x46a572 ||
                !_0x12650a["id"] ||
                _0x49398c(_0x2059e1, _0x12650a["id"]) ||
                _0x12650a["id"] === _0x1843bd["id"]) &&
              (_0x4a46b4 = hM(
                _0x1843bd,
                _0x12650a,
                _0x3c9060,
                Si,
                !(_0x45bb2b && _0x46a572 && _0x2059e1 === 0x2),
              ));
          }
        }
        if (_0x4a46b4) {
          const _0x1f94e6 = (_0x395aad, _0x187f35) =>
            _0x187f35["forEach"](
              (_0x3bcad6, _0x43a049) =>
                (_0x395aad[_0x43a049] = yn([
                  _0x3bcad6["id"],
                  _0x3bcad6["count"],
                  _0x3bcad6[_0x495aa4(0x4db)] ?? 0x0,
                  _0x3bcad6[_0x495aa4(0x8ba)] ?? 0x0,
                  _0x3bcad6[_0x495aa4(0x1ca8)] ?? 0xffff,
                  _0x3bcad6[_0x495aa4(0x58b)],
                ])),
            );
          (_0x1f94e6(_0xf442b1, _0x17d3e9),
            _0x1f94e6(_0x4fb7a5, _0x5138cf),
            Ke[_0x495aa4(0x124)](_0x1d72a3[_0x495aa4(0x1351)], _0xf442b1),
            Yn(_0x1d72a3[_0x495aa4(0x1351)]),
            Lt["set"](
              _0x1d72a3["name"],
              (Lt[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? 0x0) +
                0x1,
            ),
            _0x45bb2b
              ? ((nr = !0x0),
                ((_0x46a572 && _0x2059e1 === 0x0) ||
                  (_0x11f945 && _0x1d9940 === 0x0)) &&
                  (_0x45bb2b["progress"] = 0x0))
              : _0x1fef04 || (pn["touch"](_0x5d52c1), Vp()),
            Ml());
        }
        _0x465cb6();
        break;
      }
      case L[_0x495aa4(0x1c4d)]: {
        const _0x273121 = _0x3f4b28["u8"](),
          _0x397514 = _0x3f4b28[_0x495aa4(0xa9c)](),
          _0x4a6be8 = _0x3f4b28["u8"](),
          _0x4a488f = _0x3f4b28[_0x495aa4(0xa9c)](),
          _0x3ad4a1 = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x353ae4 = _0x273121 === 0x1 ? _0x3f4b28[_0x495aa4(0x1ac4)]() : 0x0,
          _0x426db2 = ge(_0x3f4b28[_0x495aa4(0x1ac4)](), 0x1, 0x3e7);
        if (_0x273121 === 0x4) {
          Yf["close"](_0x1d72a3["id"]);
          break;
        }
        if (!ln(_0x1d72a3, _0x397514, _0x4a488f)) break;
        const _0x2da094 = _0x1d72a3["x"] - (_0x397514 + 0.5),
          _0x41e09f = _0x1d72a3["y"] + 0.9 - _0x4a6be8,
          _0x52e756 = _0x1d72a3["z"] - (_0x4a488f + 0.5),
          _0x556630 = Ce(_0x1d72a3["planet"]);
        if (
          _0x2da094 * _0x2da094 +
            _0x41e09f * _0x41e09f +
            _0x52e756 * _0x52e756 >
            0x40 ||
          !sa(_0x556630[_0x495aa4(0x4f7)](_0x397514, _0x4a6be8, _0x4a488f))
        )
          break;
        _0x273121 === 0x0 &&
          aI(_0x556630[_0x495aa4(0x4f7)](_0x397514, _0x4a6be8, _0x4a488f)) &&
          Yf[_0x495aa4(0x2a7)](
            _0x1d72a3["id"],
            _0x1d72a3[_0x495aa4(0x1ed3)],
            _0x397514,
            _0x4a6be8,
            _0x4a488f,
          );
        const _0x56c9ac = Ss(
            _0x397514,
            _0x4a6be8,
            _0x4a488f,
            _0x1d72a3[_0x495aa4(0x1ed3)],
          ),
          _0x5f47f7 =
            pn[_0x495aa4(0x11b7)](_0x56c9ac) ??
            Array["from"]({ length: 0x1b }, () => [0x0, 0x0, 0x0, 0x0, 0x0]);
        if ((pn[_0x495aa4(0x124)](_0x56c9ac, _0x5f47f7), _0x273121 === 0x1)) {
          const _0x42d58b = _0x3ad4a1,
            _0x4d2e14 = (Ke[_0x495aa4(0x11b7)](_0x1d72a3["name"]) ?? [])[
              _0x42d58b
            ],
            _0x5ab823 = _0x353ae4;
          if (
            !_0x4d2e14 ||
            _0x4d2e14[0x0] !== _0x5ab823 ||
            _0x4d2e14[0x1] < _0x426db2
          ) {
            (Et(_0x1d72a3), Ch(_0x1d72a3, _0x397514, _0x4a6be8, _0x4a488f));
            break;
          }
          if (
            _0x4d2e14[0x5] &&
            !_0x5f47f7["some"](
              (_0xd39bad) => !_0xd39bad[0x0] || !_0xd39bad[0x1],
            )
          ) {
            (Et(_0x1d72a3), Ch(_0x1d72a3, _0x397514, _0x4a6be8, _0x4a488f));
            break;
          }
          const _0x2882de = yn(_0x4d2e14);
          ((_0x4d2e14[0x1] -= _0x426db2),
            _0x4d2e14[0x1] <= 0x0 &&
              _0x4d2e14[_0x495aa4(0x107b)](
                0x0,
                _0x4d2e14[_0x495aa4(0x18ce)],
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
              ),
            Yn(_0x1d72a3[_0x495aa4(0x1351)]));
          const _0x2c51f9 = Si(_0x5ab823);
          if (_0x2c51f9 <= 0x0) break;
          let _0x5af06e = _0x426db2;
          for (const _0x1d9d1d of _0x5f47f7) {
            if (_0x5af06e <= 0x0) break;
            if (
              _0x1d9d1d[0x0] === _0x5ab823 &&
              _0x1d9d1d[0x1] < _0x2c51f9 &&
              !_0x1d9d1d[0x5] &&
              !_0x2882de[0x5]
            ) {
              const _0x1ec5d1 = Math["min"](
                _0x2c51f9 - _0x1d9d1d[0x1],
                _0x5af06e,
              );
              ((_0x1d9d1d[0x1] += _0x1ec5d1), (_0x5af06e -= _0x1ec5d1));
            }
          }
          for (const _0x2ffa7b of _0x5f47f7) {
            if (_0x5af06e <= 0x0) break;
            _0x2ffa7b[0x0] === 0x0 &&
              ((_0x2ffa7b[0x0] = _0x5ab823),
              (_0x2ffa7b[0x1] = Math["min"](_0x2c51f9, _0x5af06e)),
              (_0x2ffa7b[0x2] = _0x2882de[0x2] ?? 0x0),
              (_0x2ffa7b[0x3] = _0x2882de[0x3] ?? 0x0),
              (_0x2ffa7b[0x4] = _0x2882de[0x4] ?? 0xffff),
              (_0x2ffa7b[0x5] = _0x2882de[0x5]),
              (_0x5af06e -= _0x2ffa7b[0x1]));
          }
          (_0x5af06e > 0x0 &&
            wn(
              _0x1d72a3,
              _0x5ab823,
              _0x5af06e,
              _0x2882de[0x2] ?? 0x0,
              _0x2882de[0x3] ?? 0x0,
              _0x2882de[0x4] ?? 0xffff,
            ),
            pn[_0x495aa4(0x1254)](_0x56c9ac));
        } else {
          if (_0x273121 === 0x2) {
            const _0x3cd375 = _0x5f47f7[_0x3ad4a1];
            if (!_0x3cd375 || _0x3cd375[0x0] <= 0x0) break;
            let _0x245c0c = Math[_0x495aa4(0x48a)](_0x426db2, _0x3cd375[0x1]);
            if (_0x3cd375[0x5]) {
              (MO(_0x1d72a3, _0x3cd375) && (pn["touch"](_0x56c9ac), Vp()),
                Ch(_0x1d72a3, _0x397514, _0x4a6be8, _0x4a488f));
              break;
            }
            ((_0x245c0c = wn(
              _0x1d72a3,
              _0x3cd375[0x0],
              _0x245c0c,
              _0x3cd375[0x2] ?? 0x0,
              _0x3cd375[0x3] ?? 0x0,
              _0x3cd375[0x4] ?? 0xffff,
            )),
              (_0x3cd375[0x1] -= _0x245c0c),
              _0x3cd375[0x1] <= 0x0 &&
                _0x3cd375["splice"](
                  0x0,
                  _0x3cd375[_0x495aa4(0x18ce)],
                  0x0,
                  0x0,
                  0x0,
                  0x0,
                  0x0,
                ),
              pn[_0x495aa4(0x1254)](_0x56c9ac));
          } else {
            if (_0x273121 === 0x3) {
              const _0x3994f5 = _0x5f47f7[_0x3ad4a1];
              if (!_0x3994f5 || _0x3994f5[0x0] <= 0x0) break;
              const _0x2138c8 = Math[_0x495aa4(0x48a)](
                  _0x426db2,
                  _0x3994f5[0x1],
                ),
                _0x46c6a7 = Math[_0x495aa4(0x17b0)](
                  Uh(_0x3994f5[0x0]) * cA(_0x3994f5[0x0], _0x3994f5[0x2]),
                );
              if (_0x46c6a7 <= 0x0) break;
              (ao(_0x1d72a3, xt(_0x1d72a3) + _0x46c6a7 * _0x2138c8),
                P(
                  0x1,
                  "Sold\x20from\x20chest:\x20" +
                    Ji(_0x3994f5[0x0]) +
                    "\x20×\x20" +
                    _0x2138c8 +
                    "\x20for\x20$" +
                    _0x46c6a7 * _0x2138c8,
                  _0x1d72a3,
                ),
                (_0x3994f5[0x1] -= _0x2138c8),
                _0x3994f5[0x1] <= 0x0 &&
                  _0x3994f5["splice"](
                    0x0,
                    _0x3994f5[_0x495aa4(0x18ce)],
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                    0x0,
                  ),
                pn["touch"](_0x56c9ac));
            }
          }
        }
        Ch(_0x1d72a3, _0x397514, _0x4a6be8, _0x4a488f);
        break;
      }
      case L[_0x495aa4(0x139d)]: {
        const _0x5524a3 = _0x3f4b28["u8"](),
          _0x2b9d68 = _0x3f4b28["u16"](),
          _0x47e5f7 = _0x3f4b28["u16"](),
          _0x2f4b5b = _0x5524a3 === 0x1 ? _0x3f4b28[_0x495aa4(0x1ac4)]() : 0x0,
          _0x28e25a = ge(_0x3f4b28[_0x495aa4(0x1ac4)](), 0x1, 0x3e7),
          _0x16c2d3 = es["get"](_0x2b9d68);
        if (
          !_0x16c2d3 ||
          _0x16c2d3[_0x495aa4(0x1ed3)] !== _0x1d72a3[_0x495aa4(0x1ed3)] ||
          !_0x1d72a3["alive"]
        )
          break;
        const _0x1d817a = _0x1d72a3["x"] - _0x16c2d3["x"],
          _0x42b605 = _0x1d72a3["y"] + 0.9 - _0x16c2d3["y"],
          _0x52ab91 = _0x1d72a3["z"] - _0x16c2d3["z"];
        if (
          _0x1d817a * _0x1d817a +
            _0x42b605 * _0x42b605 +
            _0x52ab91 * _0x52ab91 >
          0x40
        )
          break;
        if (_0x5524a3 === 0x0) {
          t0(_0x1d72a3, _0x16c2d3);
          break;
        }
        if (_0x5524a3 === 0x1) {
          const _0x210021 = (Ke[_0x495aa4(0x11b7)](
            _0x1d72a3[_0x495aa4(0x1351)],
          ) ?? [])[_0x47e5f7];
          if (
            !_0x210021 ||
            _0x210021[0x0] !== _0x2f4b5b ||
            _0x210021[0x1] < _0x28e25a
          ) {
            (Et(_0x1d72a3), t0(_0x1d72a3, _0x16c2d3));
            break;
          }
          const _0x423f7d = yn(_0x210021);
          ((_0x210021[0x1] -= _0x28e25a),
            _0x210021[0x1] <= 0x0 &&
              _0x210021[_0x495aa4(0x107b)](
                0x0,
                _0x210021[_0x495aa4(0x18ce)],
                0x0,
                0x0,
                0x0,
                0x0,
                0x0,
              ));
          let _0x256365 = _0x28e25a;
          const _0x17f1d1 = Si(_0x2f4b5b);
          for (const _0x8b6702 of _0x16c2d3["slots"])
            if (
              _0x256365 > 0x0 &&
              _0x8b6702[0x0] === _0x2f4b5b &&
              _0x8b6702[0x1] < _0x17f1d1 &&
              !_0x8b6702[0x5] &&
              !_0x423f7d[0x5]
            ) {
              const _0x470ee6 = Math[_0x495aa4(0x48a)](
                _0x17f1d1 - _0x8b6702[0x1],
                _0x256365,
              );
              ((_0x8b6702[0x1] += _0x470ee6), (_0x256365 -= _0x470ee6));
            }
          for (; _0x256365 > 0x0;) {
            const _0x17fab2 = Math[_0x495aa4(0x48a)](_0x17f1d1, _0x256365);
            (_0x16c2d3["slots"]["push"]([
              _0x2f4b5b,
              _0x17fab2,
              _0x423f7d[0x2] ?? 0x0,
              _0x423f7d[0x3] ?? 0x0,
              _0x423f7d[0x4] ?? 0xffff,
              _0x423f7d[0x5],
            ]),
              (_0x256365 -= _0x17fab2));
          }
          Yn(_0x1d72a3[_0x495aa4(0x1351)]);
        } else {
          const _0x26b65f = _0x16c2d3[_0x495aa4(0xe4e)][_0x47e5f7];
          if (!_0x26b65f || _0x26b65f[0x0] <= 0x0) break;
          const _0x2dc212 = Math[_0x495aa4(0x48a)](_0x28e25a, _0x26b65f[0x1]);
          if (_0x5524a3 === 0x2) {
            if (_0x26b65f[0x5]) {
              (MO(_0x1d72a3, _0x26b65f), t0(_0x1d72a3, _0x16c2d3), Ml());
              break;
            }
            const _0x541f4f = wn(
              _0x1d72a3,
              _0x26b65f[0x0],
              _0x2dc212,
              _0x26b65f[0x2] ?? 0x0,
              _0x26b65f[0x3] ?? 0x0,
              _0x26b65f[0x4] ?? 0xffff,
            );
            _0x26b65f[0x1] -= _0x541f4f;
          } else {
            if (_0x5524a3 === 0x3) {
              const _0xc574a = Math["floor"](
                Uh(_0x26b65f[0x0]) * cA(_0x26b65f[0x0], _0x26b65f[0x2]),
              );
              if (_0xc574a <= 0x0) break;
              (ao(_0x1d72a3, xt(_0x1d72a3) + _0xc574a * _0x2dc212),
                P(
                  0x1,
                  _0x495aa4(0xf8c) +
                    Ji(_0x26b65f[0x0]) +
                    _0x495aa4(0x142c) +
                    _0x2dc212 +
                    _0x495aa4(0xaf3) +
                    _0xc574a * _0x2dc212,
                  _0x1d72a3,
                ),
                (_0x26b65f[0x1] -= _0x2dc212));
            } else break;
          }
          _0x26b65f[0x1] <= 0x0 &&
            _0x26b65f["splice"](
              0x0,
              _0x26b65f["length"],
              0x0,
              0x0,
              0x0,
              0x0,
              0x0,
            );
        }
        _0x16c2d3[_0x495aa4(0xe4e)][_0x495aa4(0xe00)](
          ([_0x2d43f0, _0x5c5bdb]) => _0x2d43f0 <= 0x0 || _0x5c5bdb <= 0x0,
        )
          ? My(_0x16c2d3["id"])
          : t0(_0x1d72a3, _0x16c2d3);
        break;
      }
      case L["C_FURNACE"]: {
        const _0x102ca0 = _0x3f4b28["u8"](),
          _0x3b501f = _0x3f4b28[_0x495aa4(0xa9c)](),
          _0x53325e = _0x3f4b28["u8"](),
          _0x53568e = _0x3f4b28["i32"](),
          _0x1f38f6 = _0x3f4b28["u8"](),
          _0x3191df = _0x3f4b28["u8"](),
          _0xcb33f5 = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x55fd72 = ge(_0x3f4b28["u16"](), 0x1, 0x3e7);
        if (_0x1d72a3[_0x495aa4(0x1ed3)] !== C[_0x495aa4(0x9e2)]) break;
        const _0x5baa3f = Ss(_0x3b501f, _0x53325e, _0x53568e);
        if (_0x102ca0 === 0x3) {
          _0x1d72a3["openFurnace"] === _0x5baa3f &&
            (_0x1d72a3[_0x495aa4(0x864)] = null);
          break;
        }
        if (!ln(_0x1d72a3, _0x3b501f, _0x53568e)) break;
        const _0x40d73d = _0x1d72a3["x"] - (_0x3b501f + 0.5),
          _0x103220 = _0x1d72a3["y"] + 0.9 - _0x53325e,
          _0x5df543 = _0x1d72a3["z"] - (_0x53568e + 0.5);
        if (
          _0x40d73d * _0x40d73d +
            _0x103220 * _0x103220 +
            _0x5df543 * _0x5df543 >
            0x40 ||
          B[_0x495aa4(0x4f7)](_0x3b501f, _0x53325e, _0x53568e) !==
            f[_0x495aa4(0x2c8)]
        )
          break;
        _0x1d72a3["openFurnace"] = _0x5baa3f;
        const _0x6b657c = aR(_0x3b501f, _0x53325e, _0x53568e);
        if (_0x102ca0 === 0x0) {
          if (
            _0x1f38f6 > 0x1 ||
            (_0x1f38f6 === 0x0 && rR(_0xcb33f5) === 0x0) ||
            (_0x1f38f6 === 0x1 &&
              _0xcb33f5 !== A[_0x495aa4(0x1ca1)] &&
              _0xcb33f5 !== A[_0x495aa4(0xeea)])
          )
            break;
          const _0x138ca7 = (Ke[_0x495aa4(0x11b7)](
            _0x1d72a3[_0x495aa4(0x1351)],
          ) ?? [])[_0x3191df];
          if (
            !_0x138ca7 ||
            _0x138ca7[0x0] !== _0xcb33f5 ||
            _0x138ca7[0x1] < _0x55fd72
          ) {
            (Et(_0x1d72a3), x0(_0x1d72a3, _0x3b501f, _0x53325e, _0x53568e));
            break;
          }
          const _0x49779a = _0x6b657c[_0x495aa4(0xe4e)][_0x1f38f6],
            _0x1537b9 = Si(_0xcb33f5),
            _0x41ec52 =
              _0x49779a[0x0] === 0x0
                ? _0x1537b9
                : _0x49779a[0x0] === _0xcb33f5
                  ? _0x1537b9 - _0x49779a[0x1]
                  : 0x0,
            _0x36c0a8 = Math[_0x495aa4(0x48a)](
              _0x55fd72,
              Math[_0x495aa4(0x1267)](0x0, _0x41ec52),
            );
          (_0x36c0a8 > 0x0 &&
            (_0x49779a[0x0] === 0x0 && (_0x49779a[0x0] = _0xcb33f5),
            (_0x49779a[0x1] += _0x36c0a8),
            (_0x138ca7[0x1] -= _0x36c0a8),
            _0x138ca7[0x1] <= 0x0 &&
              ((_0x138ca7[0x0] = 0x0), (_0x138ca7[0x1] = 0x0)),
            Yn(_0x1d72a3["name"]),
            (nr = !0x0)),
            _0x36c0a8 < _0x55fd72 && Et(_0x1d72a3));
        } else {
          if (_0x102ca0 === 0x1) {
            const _0xc6b903 = _0x6b657c[_0x495aa4(0xe4e)][_0x1f38f6];
            if (!_0xc6b903 || _0xc6b903[0x0] <= 0x0) break;
            const _0x500e1d = wn(
              _0x1d72a3,
              _0xc6b903[0x0],
              Math[_0x495aa4(0x48a)](_0x55fd72, _0xc6b903[0x1]),
            );
            ((_0xc6b903[0x1] -= _0x500e1d),
              _0xc6b903[0x1] <= 0x0 &&
                ((_0xc6b903[0x0] = 0x0), (_0xc6b903[0x1] = 0x0)),
              _0x1f38f6 === 0x0 && (_0x6b657c[_0x495aa4(0x2b5)] = 0x0),
              (nr = !0x0));
          } else {
            if (_0x102ca0 === 0x2) {
              const _0x141ef7 = _0x6b657c[_0x495aa4(0xe4e)][_0x1f38f6];
              if (!_0x141ef7 || _0x141ef7[0x0] <= 0x0) break;
              const _0x3a9e41 = Uh(_0x141ef7[0x0]);
              if (_0x3a9e41 <= 0x0) break;
              const _0x282ac7 = Math["min"](_0x55fd72, _0x141ef7[0x1]);
              (ao(_0x1d72a3, xt(_0x1d72a3) + _0x3a9e41 * _0x282ac7),
                P(
                  0x1,
                  _0x495aa4(0x145d) +
                    Ji(_0x141ef7[0x0]) +
                    _0x495aa4(0x142c) +
                    _0x282ac7 +
                    _0x495aa4(0xaf3) +
                    _0x3a9e41 * _0x282ac7,
                  _0x1d72a3,
                ),
                (_0x141ef7[0x1] -= _0x282ac7),
                _0x141ef7[0x1] <= 0x0 &&
                  ((_0x141ef7[0x0] = 0x0), (_0x141ef7[0x1] = 0x0)),
                _0x1f38f6 === 0x0 && (_0x6b657c["progress"] = 0x0),
                (nr = !0x0));
            }
          }
        }
        x0(_0x1d72a3, _0x3b501f, _0x53325e, _0x53568e);
        break;
      }
      case L[_0x495aa4(0x402)]: {
        const _0x1af101 = _0x3f4b28["u8"]();
        if (_0x1af101 > 0x28) break;
        const _0x531d49 = [];
        for (let _0x2d72f6 = 0x0; _0x2d72f6 < _0x1af101; _0x2d72f6++)
          _0x531d49["push"](
            yn([
              _0x3f4b28[_0x495aa4(0x1ac4)](),
              _0x3f4b28[_0x495aa4(0x1ac4)](),
              _0x3f4b28[_0x495aa4(0x1ac4)](),
              _0x3f4b28[_0x495aa4(0x1ac4)](),
              _0x3f4b28[_0x495aa4(0x1ac4)](),
            ]),
          );
        const _0x1ab038 =
            _0x3f4b28[_0x495aa4(0x1c03)]() >= 0x8
              ? gF(_0x3f4b28["u32"](), _0x3f4b28[_0x495aa4(0x1ee5)]())
              : 0x0,
          _0x3ab1f4 =
            _0x3f4b28[_0x495aa4(0x1c03)]() >= 0x4
              ? _0x3f4b28[_0x495aa4(0x1ee5)]()
              : void 0x0,
          _0x5e98db =
            _0x3f4b28[_0x495aa4(0x1c03)]() >= 0x2
              ? JSON[_0x495aa4(0x690)](_0x3f4b28[_0x495aa4(0x438)]())
              : [];
        if (
          (_0x3f4b28[_0x495aa4(0x1c03)]() >= 0x4 &&
            (_0x1d72a3[_0x495aa4(0x135e)] = _0x3f4b28[_0x495aa4(0x1ee5)]()),
          _0x3ab1f4 !== void 0x0 &&
            _0x3ab1f4 !==
              (Lt[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? 0x0))
        ) {
          (fg(_0x1d72a3, _0x495aa4(0x1ba1)), Et(_0x1d72a3, !0x0));
          break;
        }
        const _0x340cc7 = new Map(
            (Ke[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? [])
              [_0x495aa4(0x3f4)](
                (_0x58d4a8) => _0x58d4a8[0x1] && _0x58d4a8[0x5],
              )
              [_0x495aa4(0x164b)]((_0x4c3b5f) => [
                _0x4c3b5f[0x5][_0x495aa4(0x7a6)],
                _0x4c3b5f,
              ]),
          ),
          _0x3d46e4 = new Set();
        let _0x41b359 = !0x1;
        for (
          let _0x4b4989 = 0x0;
          _0x4b4989 < _0x531d49[_0x495aa4(0x18ce)];
          _0x4b4989++
        ) {
          const _0x5e2e9d = Array[_0x495aa4(0x1e0b)](_0x5e98db)
            ? _0x5e98db[_0x4b4989]
            : null;
          if (!_0x5e2e9d) continue;
          const _0x374de4 = _0x340cc7[_0x495aa4(0x11b7)](_0x5e2e9d);
          if (
            typeof _0x5e2e9d != _0x495aa4(0xd23) ||
            _0x3d46e4[_0x495aa4(0x448)](_0x5e2e9d) ||
            !_0x374de4 ||
            Pc(_0x374de4[0x0]) !== Pc(_0x531d49[_0x4b4989][0x0]) ||
            _0x531d49[_0x4b4989][0x1] !== 0x1
          ) {
            _0x41b359 = !0x0;
            break;
          }
          (_0x3d46e4[_0x495aa4(0x1577)](_0x5e2e9d),
            (_0x531d49[_0x4b4989][0x5] = hf(_0x374de4)));
        }
        if (_0x41b359) {
          (fg(_0x1d72a3, _0x495aa4(0x459)), Et(_0x1d72a3, !0x0));
          break;
        }
        const _0x3ceac3 = Ns["get"](_0x1d72a3["name"]) ?? 0x0;
        if (it && _0x1ab038 > 0x0 && _0x1ab038 < _0x3ceac3) {
          Et(_0x1d72a3);
          break;
        }
        const _0x3f3610 = cu[_0x495aa4(0x11b7)](_0x1d72a3["name"]);
        if (_0x3f3610) {
          const _0x142290 = Date[_0x495aa4(0x1cc6)]();
          for (const [_0x958b7f, _0xdc5121] of _0x3f3610) {
            if (
              _0xdc5121[_0x495aa4(0xf2f)] <= _0x142290 ||
              (_0x3ab1f4 !== void 0x0 &&
                _0xdc5121[_0x495aa4(0x1ba1)] !== _0x3ab1f4)
            ) {
              _0x3f3610[_0x495aa4(0x1d64)](_0x958b7f);
              continue;
            }
            const _0x4ae26a =
                kn(_0xdc5121[_0x495aa4(0x763)]) || _0xdc5121[_0x495aa4(0x763)],
              _0x4526d7 = (_0x3ee130) =>
                _0x3ee130[0x0] > 0x0 &&
                (kn(_0x3ee130[0x0]) || _0x3ee130[0x0]) === _0x4ae26a,
              _0x307f5c = Cf(_0xdc5121[_0x495aa4(0x763)]);
            let _0xff6d5c = -0x1;
            if (
              (_0x307f5c
                ? (_0xff6d5c =
                    _0x958b7f >= 0x24 &&
                    _0x958b7f < 0x28 &&
                    _0x4526d7(_0x531d49[_0x958b7f])
                      ? _0x958b7f
                      : _0x531d49[_0x495aa4(0x5de)](
                          (_0x29ac4c, _0x5d587f) =>
                            _0x5d587f >= 0x24 &&
                            _0x5d587f < 0x28 &&
                            _0x4526d7(_0x29ac4c),
                        ))
                : (_0xff6d5c =
                    _0x958b7f < _0x531d49["length"] &&
                    _0x4526d7(_0x531d49[_0x958b7f])
                      ? _0x958b7f
                      : _0x531d49[_0x495aa4(0x5de)](_0x4526d7)),
              _0xff6d5c < 0x0)
            )
              continue;
            const _0x60bf3f = yn(_0xdc5121[_0x495aa4(0xf1)]);
            if (_0x60bf3f[0x0] <= 0x0) {
              _0x531d49[_0xff6d5c] = [0x0, 0x0, 0x0, 0x0, 0x0];
              continue;
            }
            const _0xe381ae = _0x531d49[_0xff6d5c];
            ((_0xe381ae[0x2] = Math[_0x495aa4(0x48a)](
              _0xe381ae[0x2] ?? co(_0xe381ae[0x0]),
              _0x60bf3f[0x2] ?? co(_0x60bf3f[0x0]),
            )),
              Qa(_0xdc5121[_0x495aa4(0x763)])[_0x495aa4(0xf52)] &&
              !Qa(_0x60bf3f[0x0])[_0x495aa4(0xf52)]
                ? ((_0xe381ae[0x0] = uN(_0xe381ae[0x0])),
                  (_0xe381ae[0x3] = 0x0))
                : Qa(_0xe381ae[0x0])["suppressor"]
                  ? (_0xe381ae[0x3] = Math[_0x495aa4(0x48a)](
                      _0xe381ae[0x3] ?? To(_0xe381ae[0x0]),
                      _0x60bf3f[0x3] ?? To(_0x60bf3f[0x0]),
                    ))
                  : ((_0x537593 = xl[_0xe381ae[0x0]]) == null
                      ? void 0x0
                      : _0x537593[_0x495aa4(0x514)]) === "helmet" &&
                    ((_0xe381ae[0x4] = _0x60bf3f[0x4] ?? 0xffff),
                    (_0xe381ae[0x3] = _0x60bf3f[0x3] ?? 0x0)));
          }
          _0x3f3610["size"] === 0x0 &&
            cu["delete"](_0x1d72a3[_0x495aa4(0x1351)]);
        }
        for (const [_0x54664d, _0x2ea5d0] of _0x340cc7)
          if (!_0x3d46e4[_0x495aa4(0x448)](_0x54664d)) {
            const _0x51b2b7 = _0x531d49[_0x495aa4(0x5de)](
              (_0x3e2ed9, _0x97cb78) => {
                const _0x29edfd = _0x495aa4;
                var _0x2798e4;
                return (
                  !_0x3e2ed9[0x5] &&
                  _0x3e2ed9[0x1] === 0x1 &&
                  Pc(_0x3e2ed9[0x0]) === Pc(_0x2ea5d0[0x0]) &&
                  !(
                    (_0x2798e4 = (Ke[_0x29edfd(0x11b7)](
                      _0x1d72a3[_0x29edfd(0x1351)],
                    ) ?? [])[_0x97cb78]) != null && _0x2798e4[0x5]
                  )
                );
              },
            );
            _0x51b2b7 >= 0x0 &&
              ((_0x531d49[_0x51b2b7][0x5] = hf(_0x2ea5d0)),
              _0x3d46e4[_0x495aa4(0x1577)](_0x54664d));
          }
        for (; _0x531d49[_0x495aa4(0x18ce)] < 0x28;)
          _0x531d49[_0x495aa4(0x124b)]([0x0, 0x0, 0x0, 0x0, 0x0]);
        const _0x5283d2 =
          Ke[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? [];
        if (
          (!it && !_0x1d72a3[_0x495aa4(0x1ec2)] && pK(_0x5283d2, _0x531d49),
          !it &&
            !_0x1d72a3[_0x495aa4(0x1ec2)] &&
            !E6(
              _0x5283d2,
              _0x531d49,
              Wt ? (_0xbacac9) => FW(_0x1d72a3, _0xbacac9) : void 0x0,
            ))
        ) {
          if (nt["FC_DEBUG_INVENTORY"] === "1") {
            const _0x3563a5 = cc(_0x5283d2),
              _0x1584ce = cc(_0x531d49);
            console[_0x495aa4(0xc8d)](
              _0x495aa4(0x1dda),
              _0x1d72a3[_0x495aa4(0x1351)],
              JSON["stringify"](
                [..._0x1584ce]
                  [_0x495aa4(0x3f4)](
                    ([_0x2ef643, _0x5d25a2]) =>
                      _0x5d25a2 > (_0x3563a5["get"](_0x2ef643) ?? 0x0),
                  )
                  [_0x495aa4(0x164b)](([_0x329e40, _0x5ba9ea]) => [
                    _0x329e40,
                    _0x3563a5[_0x495aa4(0x11b7)](_0x329e40) ?? 0x0,
                    _0x5ba9ea,
                  ]),
              ),
              JSON[_0x495aa4(0x8f9)](
                _0x531d49[_0x495aa4(0x3f4)]((_0x4f6566) => _0x4f6566[0x0])[
                  _0x495aa4(0x164b)
                ]((_0x46bb1e) => _0x46bb1e[_0x495aa4(0x1cf4)](0x0, 0x5)),
              ),
              JSON[_0x495aa4(0x8f9)](
                _0x5283d2[_0x495aa4(0x3f4)]((_0x475d19) => _0x475d19[0x0])[
                  _0x495aa4(0x164b)
                ]((_0x19dcc8) => _0x19dcc8[_0x495aa4(0x1cf4)](0x0, 0x5)),
              ),
            );
          }
          (fg(_0x1d72a3, _0x495aa4(0xf23), _0x5283d2, _0x531d49),
            Et(_0x1d72a3, !0x0));
          break;
        }
        Wt && $W(_0x1d72a3, _0x5283d2, _0x531d49);
        const _0x53b0ba =
          _0x5283d2["length"] !== _0x531d49[_0x495aa4(0x18ce)] ||
          _0x531d49[_0x495aa4(0x129c)]((_0x240123, _0x2fd998) => {
            const _0xc068dd = _0x495aa4;
            var _0x3f714b, _0x3490a2;
            const _0xc6b713 = _0x5283d2[_0x2fd998];
            return (
              !_0xc6b713 ||
              _0xc6b713[0x0] !== _0x240123[0x0] ||
              _0xc6b713[0x1] !== _0x240123[0x1] ||
              ((_0x3f714b = _0xc6b713[0x5]) == null
                ? void 0x0
                : _0x3f714b[_0xc068dd(0x7a6)]) !==
                ((_0x3490a2 = _0x240123[0x5]) == null
                  ? void 0x0
                  : _0x3490a2[_0xc068dd(0x7a6)])
            );
          });
        Ke["set"](_0x1d72a3[_0x495aa4(0x1351)], _0x531d49);
        const _0x2afdfd =
          it && _0x1ab038 > 0x0 ? _0x1ab038 : Date[_0x495aa4(0x1cc6)]();
        (_0x53b0ba
          ? Yn(_0x1d72a3[_0x495aa4(0x1351)], _0x2afdfd)
          : kl(_0x1d72a3["name"], _0x2afdfd),
          Ll(_0x1d72a3, _0x531d49));
        break;
      }
      case L[_0x495aa4(0x1f0c)]: {
        const _0x12a7ff = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x3d8ee1 = ge(_0x3f4b28[_0x495aa4(0x1ac4)](), 0x1, 0x3e7);
        let _0x4b2895 =
            _0x3f4b28[_0x495aa4(0x1c03)]() >= 0x2
              ? _0x3f4b28[_0x495aa4(0x1ac4)]()
              : co(_0x12a7ff),
          _0xcd7286 =
            _0x3f4b28["remaining"]() >= 0x2
              ? _0x3f4b28[_0x495aa4(0x1ac4)]()
              : To(_0x12a7ff),
          _0x2ef07e =
            _0x3f4b28[_0x495aa4(0x1c03)]() >= 0x2
              ? _0x3f4b28[_0x495aa4(0x1ac4)]()
              : 0xffff;
        const _0x511ddf =
            _0x3f4b28["remaining"]() >= 0x2
              ? _0x3f4b28[_0x495aa4(0x438)]()
              : "",
          _0x49ad26 = _0x511ddf
            ? (Ke[_0x495aa4(0x11b7)](_0x1d72a3[_0x495aa4(0x1351)]) ?? [])[
                _0x495aa4(0x8f6)
              ]((_0x14a1c7) => {
                var _0x250723;
                return (
                  _0x14a1c7[0x0] === _0x12a7ff &&
                  _0x14a1c7[0x1] === 0x1 &&
                  ((_0x250723 = _0x14a1c7[0x5]) == null
                    ? void 0x0
                    : _0x250723["uid"]) === _0x511ddf
                );
              })
            : void 0x0;
        if (_0x511ddf && !_0x49ad26) break;
        const _0x4b3e41 = hf(_0x49ad26);
        if (
          (_0x4b3e41 && _0x3d8ee1 !== 0x1) ||
          (_0x12a7ff < 0x100 && !fl[_0x495aa4(0x1b5e)](_0x12a7ff)) ||
          (_0x12a7ff >= 0x100 && !Qi[_0x12a7ff] && !kn(_0x12a7ff))
        )
          break;
        if (!_0x1d72a3[_0x495aa4(0x1ec2)]) {
          const _0xf88c8e = (Ke[_0x495aa4(0x11b7)](_0x1d72a3["name"]) ?? [])[
            _0x495aa4(0x3f4)
          ]((_0x592c0d) => {
            var _0x11b75f;
            return (
              _0x592c0d[0x0] === _0x12a7ff &&
              _0x592c0d[0x1] > 0x0 &&
              (_0x511ddf
                ? ((_0x11b75f = _0x592c0d[0x5]) == null
                    ? void 0x0
                    : _0x11b75f["uid"]) === _0x511ddf
                : !_0x592c0d[0x5])
            );
          });
          if (
            _0xf88c8e[_0x495aa4(0xae4)](
              (_0x12d21e, _0x38cf13) => _0x12d21e + _0x38cf13[0x1],
              0x0,
            ) < _0x3d8ee1
          )
            break;
          const _0x2dc208 = _0xf88c8e[_0x495aa4(0x8f6)](
            (_0xc98879) => jo(_0xc98879[0x0]) > 0x0,
          );
          (_0x2dc208 && !it && (_0x2ef07e = _0x2dc208[0x4] ?? 0xffff),
            _0x2dc208 &&
              ((_0x4b2895 = Math["min"](
                _0x4b2895,
                _0x2dc208[0x2] ?? co(_0x12a7ff),
              )),
              (_0xcd7286 = Math[_0x495aa4(0x48a)](
                _0xcd7286,
                _0x2dc208[0x3] ?? To(_0x12a7ff),
              ))));
        }
        if (!it && !_0x1d72a3[_0x495aa4(0x1ec2)] && !_0x49ad26) {
          let _0x30476f = _0x3d8ee1;
          for (const _0x265a19 of Ke[_0x495aa4(0x11b7)](
            _0x1d72a3[_0x495aa4(0x1351)],
          ) ?? []) {
            if (_0x265a19[0x0] !== _0x12a7ff || _0x265a19[0x5]) continue;
            const _0x4b6b0d = Math[_0x495aa4(0x48a)](_0x30476f, _0x265a19[0x1]);
            if (
              ((_0x265a19[0x1] -= _0x4b6b0d),
              (_0x30476f -= _0x4b6b0d),
              _0x265a19[0x1] ||
                _0x265a19["splice"](
                  0x0,
                  _0x265a19[_0x495aa4(0x18ce)],
                  0x0,
                  0x0,
                  0x0,
                  0x0,
                  0x0,
                ),
              !_0x30476f)
            )
              break;
          }
          Yn(_0x1d72a3[_0x495aa4(0x1351)]);
        }
        _0x49ad26 &&
          (_0x49ad26[_0x495aa4(0x107b)](
            0x0,
            _0x49ad26[_0x495aa4(0x18ce)],
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
          ),
          Yn(_0x1d72a3[_0x495aa4(0x1351)]));
        const _0x10c9a0 = -Math[_0x495aa4(0x813)](_0x1d72a3[_0x495aa4(0x17d5)]),
          _0x5ee972 = -Math["cos"](_0x1d72a3[_0x495aa4(0x17d5)]);
        Qt(
          _0x12a7ff,
          Math[_0x495aa4(0x17b0)](_0x1d72a3["x"] + _0x10c9a0 * 1.6),
          Math["floor"](_0x1d72a3["y"] + 0x1),
          Math["floor"](_0x1d72a3["z"] + _0x5ee972 * 1.6),
          _0x3d8ee1,
          0x4b0,
          !0x1,
          0xea60,
          _0x4b2895,
          _0xcd7286,
          _0x2ef07e,
          _0x1d72a3[_0x495aa4(0x1ed3)],
          _0x4b3e41,
        );
        break;
      }
      case L[_0x495aa4(0x16e2)]: {
        Date[_0x495aa4(0x1cc6)]() -
          (Wp[_0x495aa4(0x11b7)](_0x1d72a3["id"]) ?? 0x0) >=
          0x7d0 && xd(_0x1d72a3, !0x0);
        break;
      }
      case L[_0x495aa4(0xeb)]:
        _0x1d72a3["language"] =
          _0x3f4b28[_0x495aa4(0x438)]() === "ru" ? "ru" : "en";
        break;
      case L[_0x495aa4(0x1ce7)]: {
        const _0x1b1d81 = _0x3f4b28[_0x495aa4(0x1ac4)](),
          _0x544130 = _0x3f4b28["u16"](),
          _0x4a5fbe = _0x3f4b28["u8"](),
          _0x769284 = ee[_0x495aa4(0x11b7)](_0x1b1d81),
          _0xcdb0cd = Yz[_0x544130];
        if (
          !_0x769284 ||
          (_0x769284[_0x495aa4(0x1ed3)] ?? C[_0x495aa4(0x9e2)]) !==
            _0x1d72a3[_0x495aa4(0x1ed3)] ||
          _0xcdb0cd === void 0x0 ||
          _0x4a5fbe >= 0x9 ||
          !na(_0x1d72a3, _0x769284)
        )
          break;
        const _0x35dbd6 = _0x1d72a3["x"] - _0x769284["x"],
          _0x23a1ef = _0x1d72a3["y"] - _0x769284["y"],
          _0x5da928 = _0x1d72a3["z"] - _0x769284["z"];
        if (
          _0x35dbd6 * _0x35dbd6 +
            _0x23a1ef * _0x23a1ef +
            _0x5da928 * _0x5da928 >
          0x40
        )
          break;
        if (!_0x1d72a3[_0x495aa4(0x1ec2)]) {
          const _0x3e3f54 = (Ke[_0x495aa4(0x11b7)](
            _0x1d72a3[_0x495aa4(0x1351)],
          ) ?? [])[_0x4a5fbe];
          if (
            !_0x3e3f54 ||
            _0x3e3f54[0x0] !== _0x544130 ||
            _0x3e3f54[0x1] < 0x1
          )
            break;
          (_0x3e3f54[0x1]--,
            _0x3e3f54[0x1] <= 0x0 &&
              ((_0x3e3f54[0x0] = 0x0), (_0x3e3f54[0x1] = 0x0)),
            Yn(_0x1d72a3[_0x495aa4(0x1351)]));
        }
        ((_0x769284[_0x495aa4(0x3b9)] = _0xcdb0cd),
          (Rt = !0x0),
          ke(
            _0x769284["planet"] ?? C[_0x495aa4(0x9e2)],
            new W(L[_0x495aa4(0x8cb)])["u16"](_0x769284["id"])["u8"](_0xcdb0cd),
          ));
        break;
      }
    }
}
