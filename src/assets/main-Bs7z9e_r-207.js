// main-Bs7z9e_r 207 — x5359c7
// Lines 70859-71804 of readable/assets/main-Bs7z9e_r.pretty.js (statement-aligned).
class hI {
  constructor(_0x5dac39, _0x521ff4) {
    const _0x1bc67f = _0x5d322a;
    (Z(this, "components", new Set()),
      Z(this, "dirty", new Set()),
      Z(this, "buttonReset", new Map()),
      Z(this, _0x1bc67f(0x13a1), new Map()),
      Z(this, _0x1bc67f(0xc60), new Set()),
      ((this[_0x1bc67f(0xe3a)] = _0x5dac39),
      (this[_0x1bc67f(0x809)] = _0x521ff4)));
  }
  [_0x5d322a(0x1109)](_0x325151, _0x1455fc) {
    const _0x54bdaf = _0x5d322a;
    var _0x26ce4b, _0x2879ba;
    return (
      ((_0x2879ba = (_0x26ce4b = this[_0x54bdaf(0xe3a)])["isChunkResident"]) ==
      null
        ? void 0x0
        : _0x2879ba[_0x54bdaf(0x1834)](
            _0x26ce4b,
            Math["floor"](_0x325151 / 0x10),
            Math[_0x54bdaf(0x17b0)](_0x1455fc / 0x10),
          )) ?? !0x0
    );
  }
  [_0x5d322a(0x10c8)](_0x4e4a05, _0x5f56e5, _0x1e3fc5) {
    const _0x17b545 = _0x5d322a;
    return this["resident"](_0x4e4a05, _0x1e3fc5)
      ? this[_0x17b545(0xe3a)]["getBlock"](_0x4e4a05, _0x5f56e5, _0x1e3fc5)
      : f[_0x17b545(0x11c6)];
  }
  [_0x5d322a(0xa0b)](_0x414e6d, _0xa77f4a, _0x13e2cb) {
    const _0x3bece2 = _0x5d322a;
    return this[_0x3bece2(0x1109)](_0x414e6d, _0x13e2cb)
      ? this["world"][_0x3bece2(0x1dfa)](_0x414e6d, _0xa77f4a, _0x13e2cb)
      : 0x0;
  }
  ["onBlockChanged"](_0x15d0d5, _0x152431, _0x508d7a, _0x165ebf) {
    const _0x438a7a = _0x5d322a,
      _0x5ce505 = Pn(_0x15d0d5, _0x152431, _0x508d7a);
    if (
      (Jh(_0x165ebf)
        ? this[_0x438a7a(0x1d68)][_0x438a7a(0x1577)](_0x5ce505)
        : this["components"]["delete"](_0x5ce505),
      _0x165ebf === f[_0x438a7a(0xe30)]
        ? this[_0x438a7a(0xc60)][_0x438a7a(0x1577)](_0x5ce505)
        : this[_0x438a7a(0xc60)]["delete"](_0x5ce505),
      Jh(_0x165ebf))
    ) {
      this[_0x438a7a(0xb33)][_0x438a7a(0x1577)](_0x5ce505);
      return;
    }
    for (const [_0x5ecd38, _0x598c92, _0x19dbd4] of VA)
      if (
        Jh(
          this["peek"](
            _0x15d0d5 + _0x5ecd38,
            _0x152431 + _0x598c92,
            _0x508d7a + _0x19dbd4,
          ),
        )
      ) {
        this[_0x438a7a(0xb33)][_0x438a7a(0x1577)](_0x5ce505);
        return;
      }
  }
  [_0x5d322a(0xec8)](_0x5cef1b, _0x49f8a5, _0x4c51f1) {
    const _0x178fb4 = _0x5d322a,
      _0x22ec95 = zG();
    for (let _0x49c5e2 = 0x0; _0x49c5e2 < _0x4c51f1["length"]; _0x49c5e2++) {
      const _0x48e9be = _0x22ec95[_0x4c51f1[_0x49c5e2]];
      if (_0x48e9be === 0x0) continue;
      const _0x114f94 = Pn(
        _0x5cef1b * 0x10 + (_0x49c5e2 & 0xf),
        _0x49c5e2 >> 0x8,
        _0x49f8a5 * 0x10 + ((_0x49c5e2 >> 0x4) & 0xf),
      );
      (_0x48e9be & 0x1 &&
        (this[_0x178fb4(0x1d68)][_0x178fb4(0x1577)](_0x114f94),
        _0x48e9be & 0x2 &&
          this[_0x178fb4(0xb33)][_0x178fb4(0x1577)](_0x114f94)),
        _0x48e9be & 0x4 && this["plates"][_0x178fb4(0x1577)](_0x114f94));
    }
  }
  ["use"](_0xb31eb9, _0x57c5a2, _0x11d7e3) {
    const _0x5cb792 = _0x5d322a;
    var _0x3c46a8, _0x3958e6;
    const _0x168059 = this[_0x5cb792(0xe3a)]["getBlock"](
        _0xb31eb9,
        _0x57c5a2,
        _0x11d7e3,
      ),
      _0x10c9a5 = this[_0x5cb792(0xe3a)][_0x5cb792(0x1dfa)](
        _0xb31eb9,
        _0x57c5a2,
        _0x11d7e3,
      );
    if (_0x168059 === f[_0x5cb792(0x13c2)])
      return (
        this[_0x5cb792(0x809)]["setBlock"](
          _0xb31eb9,
          _0x57c5a2,
          _0x11d7e3,
          _0x168059,
          _0x10c9a5 ^ ot,
        ),
        this[_0x5cb792(0xb33)][_0x5cb792(0x1577)](
          Pn(_0xb31eb9, _0x57c5a2, _0x11d7e3),
        ),
        !0x0
      );
    if (_0x168059 === f[_0x5cb792(0x79b)])
      return (
        _0x10c9a5 & ot ||
          (this[_0x5cb792(0x809)]["setBlock"](
            _0xb31eb9,
            _0x57c5a2,
            _0x11d7e3,
            _0x168059,
            _0x10c9a5 | ot,
          ),
          this["buttonReset"][_0x5cb792(0x124)](
            Pn(_0xb31eb9, _0x57c5a2, _0x11d7e3),
            Date[_0x5cb792(0x1cc6)]() + CG,
          ),
          this["dirty"][_0x5cb792(0x1577)](
            Pn(_0xb31eb9, _0x57c5a2, _0x11d7e3),
          )),
        !0x0
      );
    if (_0x168059 === f[_0x5cb792(0xac5)])
      return (
        this[_0x5cb792(0x809)]["setBlock"](
          _0xb31eb9,
          _0x57c5a2,
          _0x11d7e3,
          _0x168059,
          (_0x10c9a5 & 0xf) | ((((_0x10c9a5 >> 0x4) + 0x1) & 0x3) << 0x4),
        ),
        this[_0x5cb792(0xb33)][_0x5cb792(0x1577)](
          Pn(_0xb31eb9, _0x57c5a2, _0x11d7e3),
        ),
        !0x0
      );
    if (nn(_0x168059)) {
      const _0x59c205 = !(_0x10c9a5 & ot);
      (this[_0x5cb792(0x34c)](
        _0xb31eb9,
        _0x57c5a2,
        _0x11d7e3,
        _0x168059,
        _0x10c9a5,
        _0x59c205,
        !!(_0x10c9a5 & Ah),
      ),
        this[_0x5cb792(0xb33)][_0x5cb792(0x1577)](
          Pn(_0xb31eb9, _0x57c5a2, _0x11d7e3),
        ));
      const _0x123e32 = qg(
        (_0x3a4c9e, _0x3331cb, _0x15bf8f) =>
          this[_0x5cb792(0xe3a)][_0x5cb792(0x4f7)](
            _0x3a4c9e,
            _0x3331cb,
            _0x15bf8f,
          ),
        (_0x53bfaa, _0x55c9e0, _0x4984d9) =>
          this["world"]["getMeta"](_0x53bfaa, _0x55c9e0, _0x4984d9),
        _0xb31eb9,
        _0x57c5a2,
        _0x11d7e3,
      );
      if (
        _0x123e32 &&
        (((_0x3958e6 = (_0x3c46a8 = this[_0x5cb792(0x809)])[
          _0x5cb792(0xd6c)
        ]) == null
          ? void 0x0
          : _0x3958e6[_0x5cb792(0x1834)](
              _0x3c46a8,
              _0xb31eb9,
              _0x11d7e3,
              _0x123e32[0x0],
              _0x123e32[0x2],
            )) ??
          !0x0)
      ) {
        const [_0x16ad4f, _0x275dc2, _0xf9b26c] = _0x123e32,
          _0x49eea0 = this["world"]["getMeta"](_0x16ad4f, _0x275dc2, _0xf9b26c);
        (((_0x49eea0 & ot) !== 0x0) !== _0x59c205 &&
          this["toggleDoor"](
            _0x16ad4f,
            _0x275dc2,
            _0xf9b26c,
            this[_0x5cb792(0xe3a)][_0x5cb792(0x4f7)](
              _0x16ad4f,
              _0x275dc2,
              _0xf9b26c,
            ),
            _0x49eea0,
            _0x59c205,
            (_0x49eea0 & Ah) !== 0x0,
          ),
          this[_0x5cb792(0xb33)][_0x5cb792(0x1577)](
            Pn(_0x16ad4f, _0x275dc2, _0xf9b26c),
          ));
      }
      return !0x0;
    }
    return !0x1;
  }
  [_0x5d322a(0x34c)](
    _0x11bddc,
    _0x16712e,
    _0x2e63fa,
    _0x24b2db,
    _0x328eca,
    _0x358374,
    _0x46a554,
  ) {
    const _0x18064b = _0x5d322a,
      _0x40c5be = _0x328eca & Pi ? _0x16712e - 0x1 : _0x16712e + 0x1,
      _0x3a7380 = (_0x358374 ? ot : 0x0) | (_0x46a554 ? Ah : 0x0);
    this[_0x18064b(0x809)]["setBlock"](
      _0x11bddc,
      _0x16712e,
      _0x2e63fa,
      _0x24b2db,
      (_0x328eca & -0x19) | _0x3a7380,
    );
    const _0x250d71 = this["world"][_0x18064b(0x1dfa)](
      _0x11bddc,
      _0x40c5be,
      _0x2e63fa,
    );
    this[_0x18064b(0xe3a)][_0x18064b(0x4f7)](
      _0x11bddc,
      _0x40c5be,
      _0x2e63fa,
    ) === _0x24b2db &&
      this[_0x18064b(0x809)][_0x18064b(0x172)](
        _0x11bddc,
        _0x40c5be,
        _0x2e63fa,
        _0x24b2db,
        (_0x250d71 & -0x19) | _0x3a7380,
      );
  }
  ["tick"](_0x4559eb) {
    const _0x3c7e2a = _0x5d322a;
    var _0x42d348, _0x5dabff;
    if (this[_0x3c7e2a(0xc60)][_0x3c7e2a(0xe0d)] > 0x0) {
      const _0x459136 = new Set();
      for (const _0x174d97 of this[_0x3c7e2a(0x809)][_0x3c7e2a(0x11f3)]())
        (((_0x5dabff = (_0x42d348 = this[_0x3c7e2a(0x809)])[
          _0x3c7e2a(0x1610)
        ]) == null
          ? void 0x0
          : _0x5dabff["call"](
              _0x42d348,
              Math["floor"](_0x174d97["x"]),
              Math["floor"](_0x174d97["z"]),
              _0x174d97,
            )) ??
          !0x0) &&
          (_0x459136[_0x3c7e2a(0x1577)](
            Pn(
              Math[_0x3c7e2a(0x17b0)](_0x174d97["x"]),
              Math["floor"](_0x174d97["y"] + 0.02),
              Math[_0x3c7e2a(0x17b0)](_0x174d97["z"]),
            ),
          ),
          _0x459136["add"](
            Pn(
              Math[_0x3c7e2a(0x17b0)](_0x174d97["x"]),
              Math[_0x3c7e2a(0x17b0)](_0x174d97["y"] + 0.02) - 0x1,
              Math[_0x3c7e2a(0x17b0)](_0x174d97["z"]),
            ),
          ));
      for (const _0xabba6 of this[_0x3c7e2a(0xc60)]) {
        const [_0x429ff1, _0x45b419, _0x50b3f4] = Vm(_0xabba6);
        if (
          !this[_0x3c7e2a(0x1109)](_0x429ff1, _0x50b3f4) ||
          this[_0x3c7e2a(0xe3a)][_0x3c7e2a(0x4f7)](
            _0x429ff1,
            _0x45b419,
            _0x50b3f4,
          ) !== f[_0x3c7e2a(0xe30)]
        ) {
          this[_0x3c7e2a(0xc60)]["delete"](_0xabba6);
          continue;
        }
        const _0x30b1bb = this[_0x3c7e2a(0xe3a)][_0x3c7e2a(0x1dfa)](
            _0x429ff1,
            _0x45b419,
            _0x50b3f4,
          ),
          _0x47bf21 = _0x459136["has"](_0xabba6);
        _0x47bf21 !== !!(_0x30b1bb & ot) &&
          (this[_0x3c7e2a(0x809)][_0x3c7e2a(0x172)](
            _0x429ff1,
            _0x45b419,
            _0x50b3f4,
            f[_0x3c7e2a(0xe30)],
            _0x47bf21 ? _0x30b1bb | ot : _0x30b1bb & ~ot,
          ),
          this[_0x3c7e2a(0xb33)][_0x3c7e2a(0x1577)](_0xabba6));
      }
    }
    for (const [_0x49f081, _0x4245db] of this["buttonReset"]) {
      if (_0x4559eb < _0x4245db) continue;
      this[_0x3c7e2a(0x2ee)][_0x3c7e2a(0x1d64)](_0x49f081);
      const [_0x12a145, _0x21c469, _0x1333e2] = Vm(_0x49f081);
      this[_0x3c7e2a(0x1109)](_0x12a145, _0x1333e2) &&
        this[_0x3c7e2a(0xe3a)][_0x3c7e2a(0x4f7)](
          _0x12a145,
          _0x21c469,
          _0x1333e2,
        ) === f[_0x3c7e2a(0x79b)] &&
        (this[_0x3c7e2a(0x809)][_0x3c7e2a(0x172)](
          _0x12a145,
          _0x21c469,
          _0x1333e2,
          f["BUTTON"],
          this[_0x3c7e2a(0xe3a)][_0x3c7e2a(0x1dfa)](
            _0x12a145,
            _0x21c469,
            _0x1333e2,
          ) & ~ot,
        ),
        this[_0x3c7e2a(0xb33)][_0x3c7e2a(0x1577)](_0x49f081));
    }
    for (const [_0x4da4ce, _0x4f50be] of this[_0x3c7e2a(0x13a1)]) {
      if (_0x4559eb < _0x4f50be["at"]) continue;
      this[_0x3c7e2a(0x13a1)][_0x3c7e2a(0x1d64)](_0x4da4ce);
      const [_0x1398e0, _0x3ce42b, _0x50c807] = Vm(_0x4da4ce);
      if (
        this[_0x3c7e2a(0x1109)](_0x1398e0, _0x50c807) &&
        this[_0x3c7e2a(0xe3a)][_0x3c7e2a(0x4f7)](
          _0x1398e0,
          _0x3ce42b,
          _0x50c807,
        ) === f[_0x3c7e2a(0xac5)]
      ) {
        const _0x14c861 = this[_0x3c7e2a(0xe3a)][_0x3c7e2a(0x1dfa)](
          _0x1398e0,
          _0x3ce42b,
          _0x50c807,
        );
        !!(_0x14c861 & ot) !== _0x4f50be["on"] &&
          (this[_0x3c7e2a(0x809)][_0x3c7e2a(0x172)](
            _0x1398e0,
            _0x3ce42b,
            _0x50c807,
            f["REPEATER"],
            _0x4f50be["on"] ? _0x14c861 | ot : _0x14c861 & ~ot,
          ),
          this[_0x3c7e2a(0xb33)][_0x3c7e2a(0x1577)](_0x4da4ce));
      }
    }
    this[_0x3c7e2a(0xb33)]["size"] > 0x0 && this[_0x3c7e2a(0x1948)](_0x4559eb);
  }
  ["solve"](_0x1e068c) {
    const _0x210d5b = _0x5d322a;
    var _0x549548, _0x54ea65;
    this["dirty"]["clear"]();
    const _0x46508c = this["world"];
    for (let _0x26c0de = 0x0; _0x26c0de < 0x8; _0x26c0de++) {
      const _0x258f3f = [];
      for (const _0x44b3ad of this["components"]) {
        const [_0x1958c8, _0x1b08b5, _0x5d2433] = Vm(_0x44b3ad);
        if (!this["resident"](_0x1958c8, _0x5d2433)) {
          this[_0x210d5b(0x1d68)][_0x210d5b(0x1d64)](_0x44b3ad);
          continue;
        }
        const _0x10dcdd = _0x46508c[_0x210d5b(0x4f7)](
          _0x1958c8,
          _0x1b08b5,
          _0x5d2433,
        );
        if (!Jh(_0x10dcdd)) {
          this[_0x210d5b(0x1d68)][_0x210d5b(0x1d64)](_0x44b3ad);
          continue;
        }
        _0x258f3f[_0x210d5b(0x124b)]({
          x: _0x1958c8,
          y: _0x1b08b5,
          z: _0x5d2433,
          id: _0x10dcdd,
          meta: _0x46508c["getMeta"](_0x1958c8, _0x1b08b5, _0x5d2433),
        });
      }
      if (_0x258f3f["length"] === 0x0) return;
      const _0x5b9f3b = new Set(),
        _0x26ebf5 = new Set(),
        _0x428b2f = (_0x3f854b, _0x28f98b, _0x40c283, _0xfd4a4f) => {
          const _0x50f0af = _0x210d5b;
          var _0x4ed718, _0x1c0fd8;
          return (
            ((_0x1c0fd8 = (_0x4ed718 = this[_0x50f0af(0x809)])["canLink"]) ==
            null
              ? void 0x0
              : _0x1c0fd8[_0x50f0af(0x1834)](
                  _0x4ed718,
                  _0x3f854b,
                  _0x28f98b,
                  _0x40c283,
                  _0xfd4a4f,
                )) ?? !0x0
          );
        },
        _0x33bfe7 = new Map();
      for (const _0xeabb68 of _0x258f3f) {
        if (
          ((_0xeabb68["id"] === f[_0x210d5b(0x2f5)] ||
            _0xeabb68["id"] === f[_0x210d5b(0x13c2)] ||
            _0xeabb68["id"] === f[_0x210d5b(0x79b)] ||
            _0xeabb68["id"] === f[_0x210d5b(0xe30)]) &&
            _0xeabb68[_0x210d5b(0x1f6)] & ot &&
            _0x5b9f3b[_0x210d5b(0x1577)](
              Pn(_0xeabb68["x"], _0xeabb68["y"], _0xeabb68["z"]),
            ),
          _0xeabb68["id"] === f[_0x210d5b(0xe6d)] &&
            !(_0xeabb68[_0x210d5b(0x1f6)] & ot))
        ) {
          const _0x4b2a3e = Pn(_0xeabb68["x"], _0xeabb68["y"], _0xeabb68["z"]);
          _0x5b9f3b[_0x210d5b(0x1577)](_0x4b2a3e);
          const _0x442acc = os[_0xeabb68[_0x210d5b(0x1f6)] & 0x7] ?? os[0x0];
          _0x33bfe7[_0x210d5b(0x124)](
            _0x4b2a3e,
            Pn(
              _0xeabb68["x"] + _0x442acc[0x0],
              _0xeabb68["y"] + _0x442acc[0x1],
              _0xeabb68["z"] + _0x442acc[0x2],
            ),
          );
        }
        if (
          _0xeabb68["id"] === f[_0x210d5b(0xac5)] &&
          _0xeabb68[_0x210d5b(0x1f6)] & ot
        ) {
          const [_0x164dfa, _0x3895fb] = ur[_0xeabb68[_0x210d5b(0x1f6)] & 0x3];
          _0x428b2f(
            _0xeabb68["x"],
            _0xeabb68["z"],
            _0xeabb68["x"] + _0x164dfa,
            _0xeabb68["z"] + _0x3895fb,
          ) &&
            _0x26ebf5[_0x210d5b(0x1577)](
              Pn(
                _0xeabb68["x"] + _0x164dfa,
                _0xeabb68["y"],
                _0xeabb68["z"] + _0x3895fb,
              ),
            );
        }
      }
      const _0x40add5 = new Map(),
        _0x412335 = [];
      for (const _0x366f3d of _0x258f3f) {
        if (_0x366f3d["id"] !== f[_0x210d5b(0x7b9)]) continue;
        let _0x7e28df = 0x0;
        const _0x35312f = Pn(_0x366f3d["x"], _0x366f3d["y"], _0x366f3d["z"]);
        if (_0x26ebf5[_0x210d5b(0x448)](_0x35312f)) _0x7e28df = 0xf;
        else {
          for (const [_0x40a00b, _0x32904f, _0x1ee266] of VA)
            if (
              _0x428b2f(
                _0x366f3d["x"] + _0x40a00b,
                _0x366f3d["z"] + _0x1ee266,
                _0x366f3d["x"],
                _0x366f3d["z"],
              ) &&
              _0x5b9f3b["has"](
                Pn(
                  _0x366f3d["x"] + _0x40a00b,
                  _0x366f3d["y"] + _0x32904f,
                  _0x366f3d["z"] + _0x1ee266,
                ),
              )
            ) {
              _0x7e28df = 0xf;
              break;
            }
        }
        (_0x40add5[_0x210d5b(0x124)](_0x35312f, _0x7e28df),
          _0x7e28df > 0x0 &&
            _0x412335["push"]([
              _0x366f3d["x"],
              _0x366f3d["y"],
              _0x366f3d["z"],
              _0x7e28df,
            ]));
      }
      for (
        let _0x18664e = 0x0;
        _0x18664e < _0x412335[_0x210d5b(0x18ce)];
        _0x18664e++
      ) {
        const [_0x218196, _0x1f0435, _0x382503, _0x403a43] =
          _0x412335[_0x18664e];
        if (!(_0x403a43 <= 0x1))
          for (const [_0xda9b4f, _0xac8a7e, _0x5c1fc6] of IG(
            (_0x2b5888, _0x381506, _0x2d68c9) =>
              this["peek"](_0x2b5888, _0x381506, _0x2d68c9),
            (_0x2b4fcd, _0x8cfc2d, _0x54dcbc) =>
              this["peekMeta"](_0x2b4fcd, _0x8cfc2d, _0x54dcbc),
            _0x218196,
            _0x1f0435,
            _0x382503,
          )) {
            if (
              !_0x428b2f(
                _0x218196,
                _0x382503,
                _0x218196 + _0xda9b4f,
                _0x382503 + _0x5c1fc6,
              )
            )
              continue;
            const _0x1a18ca = Pn(
                _0x218196 + _0xda9b4f,
                _0x1f0435 + _0xac8a7e,
                _0x382503 + _0x5c1fc6,
              ),
              _0xe8d733 = _0x40add5["get"](_0x1a18ca);
            _0xe8d733 !== void 0x0 &&
              _0xe8d733 < _0x403a43 - 0x1 &&
              (_0x40add5[_0x210d5b(0x124)](_0x1a18ca, _0x403a43 - 0x1),
              _0x412335[_0x210d5b(0x124b)]([
                _0x218196 + _0xda9b4f,
                _0x1f0435 + _0xac8a7e,
                _0x382503 + _0x5c1fc6,
                _0x403a43 - 0x1,
              ]));
          }
      }
      const _0x151f22 = (_0x243add, _0x1b2539, _0x522f8f) => {
        const _0x205fb2 = _0x210d5b,
          _0x33000a = Pn(_0x243add, _0x1b2539, _0x522f8f);
        if (_0x26ebf5["has"](_0x33000a)) return !0x0;
        for (const [_0x3bab34, _0xe9223e, _0x1d6a6a] of VA) {
          if (
            !_0x428b2f(
              _0x243add + _0x3bab34,
              _0x522f8f + _0x1d6a6a,
              _0x243add,
              _0x522f8f,
            )
          )
            continue;
          const _0x5bcd15 = Pn(
            _0x243add + _0x3bab34,
            _0x1b2539 + _0xe9223e,
            _0x522f8f + _0x1d6a6a,
          );
          if (
            _0x5b9f3b[_0x205fb2(0x448)](_0x5bcd15) &&
            _0x33bfe7[_0x205fb2(0x11b7)](_0x5bcd15) !== _0x33000a
          )
            return !0x0;
          const _0x33f7df = _0x40add5[_0x205fb2(0x11b7)](_0x5bcd15);
          if (_0x33f7df !== void 0x0 && _0x33f7df > 0x0) return !0x0;
        }
        return !0x1;
      };
      let _0x4d43a3 = !0x1;
      for (const _0x5359c7 of _0x258f3f)
        if (
          _0x46508c[_0x210d5b(0x4f7)](
            _0x5359c7["x"],
            _0x5359c7["y"],
            _0x5359c7["z"],
          ) === _0x5359c7["id"]
        )
          switch (_0x5359c7["id"]) {
            case f[_0x210d5b(0x7b9)]: {
              const _0x541bf0 =
                _0x40add5[_0x210d5b(0x11b7)](
                  Pn(_0x5359c7["x"], _0x5359c7["y"], _0x5359c7["z"]),
                ) ?? 0x0;
              _0x541bf0 !== Ww(_0x5359c7[_0x210d5b(0x1f6)]) &&
                (this[_0x210d5b(0x809)][_0x210d5b(0x172)](
                  _0x5359c7["x"],
                  _0x5359c7["y"],
                  _0x5359c7["z"],
                  _0x5359c7["id"],
                  hL(_0x5359c7["meta"], _0x541bf0),
                ),
                (_0x4d43a3 = !0x0));
              break;
            }
            case f[_0x210d5b(0xe6d)]: {
              const _0x104774 =
                  os[_0x5359c7[_0x210d5b(0x1f6)] & 0x7] ?? os[0x0],
                _0x3b2149 =
                  _0x428b2f(
                    _0x5359c7["x"] + _0x104774[0x0],
                    _0x5359c7["z"] + _0x104774[0x2],
                    _0x5359c7["x"],
                    _0x5359c7["z"],
                  ) &&
                  _0x151f22(
                    _0x5359c7["x"] + _0x104774[0x0],
                    _0x5359c7["y"] + _0x104774[0x1],
                    _0x5359c7["z"] + _0x104774[0x2],
                  );
              _0x3b2149 !== !!(_0x5359c7["meta"] & ot) &&
                (this["hooks"][_0x210d5b(0x172)](
                  _0x5359c7["x"],
                  _0x5359c7["y"],
                  _0x5359c7["z"],
                  _0x5359c7["id"],
                  _0x3b2149
                    ? _0x5359c7[_0x210d5b(0x1f6)] | ot
                    : _0x5359c7[_0x210d5b(0x1f6)] & ~ot,
                ),
                (_0x4d43a3 = !0x0));
              break;
            }
            case f[_0x210d5b(0x1495)]: {
              const _0xc47855 = _0x151f22(
                _0x5359c7["x"],
                _0x5359c7["y"],
                _0x5359c7["z"],
              );
              _0xc47855 !== !!(_0x5359c7["meta"] & ot) &&
                (this[_0x210d5b(0x809)][_0x210d5b(0x172)](
                  _0x5359c7["x"],
                  _0x5359c7["y"],
                  _0x5359c7["z"],
                  _0x5359c7["id"],
                  _0xc47855
                    ? _0x5359c7[_0x210d5b(0x1f6)] | ot
                    : _0x5359c7[_0x210d5b(0x1f6)] & ~ot,
                ),
                (_0x4d43a3 = !0x0));
              break;
            }
            case f[_0x210d5b(0xac5)]: {
              const [_0x513046, _0x5b53aa] = ur[_0x5359c7["meta"] & 0x3],
                _0xe5191 = _0x5359c7["x"] - _0x513046,
                _0x29feaf = _0x5359c7["z"] - _0x5b53aa,
                _0x4a0845 =
                  _0x26ebf5["has"](
                    Pn(_0x5359c7["x"], _0x5359c7["y"], _0x5359c7["z"]),
                  ) ||
                  (_0x428b2f(
                    _0xe5191,
                    _0x29feaf,
                    _0x5359c7["x"],
                    _0x5359c7["z"],
                  ) &&
                    (_0x5b9f3b[_0x210d5b(0x448)](
                      Pn(_0xe5191, _0x5359c7["y"], _0x29feaf),
                    ) ||
                      (_0x40add5[_0x210d5b(0x11b7)](
                        Pn(_0xe5191, _0x5359c7["y"], _0x29feaf),
                      ) ?? 0x0) > 0x0));
              (_0x4a0845 !== !!(_0x5359c7[_0x210d5b(0x1f6)] & ot) &&
                !this[_0x210d5b(0x13a1)]["has"](
                  Pn(_0x5359c7["x"], _0x5359c7["y"], _0x5359c7["z"]),
                ) &&
                this["repeaterPending"][_0x210d5b(0x124)](
                  Pn(_0x5359c7["x"], _0x5359c7["y"], _0x5359c7["z"]),
                  {
                    on: _0x4a0845,
                    at:
                      _0x1e068c +
                      0x64 *
                        (0x1 + ((_0x5359c7[_0x210d5b(0x1f6)] >> 0x4) & 0x3)),
                  },
                ),
                _0x4a0845 === !!(_0x5359c7[_0x210d5b(0x1f6)] & ot) &&
                  this[_0x210d5b(0x13a1)][_0x210d5b(0x1d64)](
                    Pn(_0x5359c7["x"], _0x5359c7["y"], _0x5359c7["z"]),
                  ));
              break;
            }
            case f["SIGN"]:
              (_0x54ea65 = (_0x549548 = this[_0x210d5b(0x809)])[
                _0x210d5b(0xe26)
              ]) == null ||
                _0x54ea65[_0x210d5b(0x1834)](
                  _0x549548,
                  _0x5359c7["x"],
                  _0x5359c7["y"],
                  _0x5359c7["z"],
                  _0x151f22(_0x5359c7["x"], _0x5359c7["y"], _0x5359c7["z"]),
                );
              break;
            case f[_0x210d5b(0xb83)]:
            case f["FENCE_GATE_COBBLE"]:
            case f[_0x210d5b(0x1909)]:
            case f[_0x210d5b(0x1e0d)]:
            case f[_0x210d5b(0x1db0)]: {
              const _0x186066 = _0x151f22(
                _0x5359c7["x"],
                _0x5359c7["y"],
                _0x5359c7["z"],
              );
              _0x186066 !== !!(_0x5359c7[_0x210d5b(0x1f6)] & Ah) &&
                (this[_0x210d5b(0x809)][_0x210d5b(0x172)](
                  _0x5359c7["x"],
                  _0x5359c7["y"],
                  _0x5359c7["z"],
                  _0x5359c7["id"],
                  (_0x5359c7[_0x210d5b(0x1f6)] & -0x19) |
                    (_0x186066 ? ot | Ah : 0x0),
                ),
                (_0x4d43a3 = !0x0));
              break;
            }
            case f[_0x210d5b(0x1b70)]:
            case f[_0x210d5b(0x586)]:
            case f[_0x210d5b(0x743)]: {
              if (_0x5359c7[_0x210d5b(0x1f6)] & Pi) break;
              const _0x48a379 =
                  _0x151f22(_0x5359c7["x"], _0x5359c7["y"], _0x5359c7["z"]) ||
                  _0x151f22(
                    _0x5359c7["x"],
                    _0x5359c7["y"] + 0x1,
                    _0x5359c7["z"],
                  ),
                _0x1938c1 = !!(_0x5359c7["meta"] & Ah);
              _0x48a379 && !_0x1938c1
                ? (this["toggleDoor"](
                    _0x5359c7["x"],
                    _0x5359c7["y"],
                    _0x5359c7["z"],
                    _0x5359c7["id"],
                    _0x5359c7[_0x210d5b(0x1f6)],
                    !0x0,
                    !0x0,
                  ),
                  (_0x4d43a3 = !0x0))
                : !_0x48a379 &&
                  _0x1938c1 &&
                  (this[_0x210d5b(0x34c)](
                    _0x5359c7["x"],
                    _0x5359c7["y"],
                    _0x5359c7["z"],
                    _0x5359c7["id"],
                    _0x5359c7[_0x210d5b(0x1f6)],
                    !0x1,
                    !0x1,
                  ),
                  (_0x4d43a3 = !0x0));
              break;
            }
            case f["PISTON"]:
            case f[_0x210d5b(0x907)]: {
              const _0x264f70 = !!(_0x5359c7[_0x210d5b(0x1f6)] & ot),
                _0x59000a = _0x151f22(
                  _0x5359c7["x"],
                  _0x5359c7["y"],
                  _0x5359c7["z"],
                );
              _0x59000a && !_0x264f70
                ? (_0x4d43a3 =
                    this[_0x210d5b(0x204)](
                      _0x5359c7["x"],
                      _0x5359c7["y"],
                      _0x5359c7["z"],
                      _0x5359c7["id"],
                      _0x5359c7[_0x210d5b(0x1f6)],
                    ) || _0x4d43a3)
                : !_0x59000a &&
                  _0x264f70 &&
                  (_0x4d43a3 =
                    this[_0x210d5b(0x176f)](
                      _0x5359c7["x"],
                      _0x5359c7["y"],
                      _0x5359c7["z"],
                      _0x5359c7["id"],
                      _0x5359c7[_0x210d5b(0x1f6)],
                    ) || _0x4d43a3);
              break;
            }
          }
      if (!_0x4d43a3) return;
    }
  }
  [_0x5d322a(0x204)](_0xf76778, _0x3950c7, _0xd4f946, _0x572411, _0xa5353d) {
    const _0x53aa49 = _0x5d322a;
    var _0x25f13b, _0x11f41e, _0x2b1914, _0x15fa7b;
    const [_0x5added, _0x1d60bd, _0x3e1a32] = oa[_0xa5353d & 0x7] ?? oa[0x3],
      _0x5e5859 = this[_0x53aa49(0xe3a)],
      _0x502db8 = (_0x1599c1, _0x3575ee, _0x1292bf, _0x30721e, _0x2054a6) =>
        this[_0x53aa49(0x809)][_0x53aa49(0x172)](
          _0x1599c1,
          _0x3575ee,
          _0x1292bf,
          _0x30721e,
          _0x2054a6,
          [_0xf76778, _0x3950c7, _0xd4f946],
        ),
      _0x5c04a8 = [];
    for (let _0x1ae5be = 0x1; _0x1ae5be <= 0x9; _0x1ae5be++) {
      const _0xe42e24 = _0xf76778 + _0x5added * _0x1ae5be,
        _0x1f9cbe = _0x3950c7 + _0x1d60bd * _0x1ae5be,
        _0x57ac19 = _0xd4f946 + _0x3e1a32 * _0x1ae5be;
      if (
        !(
          ((_0x11f41e = (_0x25f13b = this[_0x53aa49(0x809)])["canLink"]) == null
            ? void 0x0
            : _0x11f41e[_0x53aa49(0x1834)](
                _0x25f13b,
                _0xf76778,
                _0xd4f946,
                _0xe42e24,
                _0x57ac19,
              )) ?? !0x0
        ) ||
        _0x1f9cbe < 0x0 ||
        _0x1f9cbe > 0x7f ||
        ((_0x15fa7b = (_0x2b1914 = this[_0x53aa49(0x809)])["blockedByBody"]) !=
          null &&
          _0x15fa7b[_0x53aa49(0x1834)](
            _0x2b1914,
            _0xe42e24,
            _0x1f9cbe,
            _0x57ac19,
          ))
      )
        return !0x1;
      const _0xc0ac53 = _0x5e5859[_0x53aa49(0x4f7)](
        _0xe42e24,
        _0x1f9cbe,
        _0x57ac19,
      );
      if (_0xc0ac53 === f["AIR"] || _0xc0ac53 === f["WATER"]) break;
      if (kG(_0xc0ac53)) {
        this[_0x53aa49(0x809)]["breakFragile"](
          _0xe42e24,
          _0x1f9cbe,
          _0x57ac19,
          [_0xf76778, _0x3950c7, _0xd4f946],
        );
        break;
      }
      if (_0x1ae5be === 0x9 || !kx(_0xc0ac53)) return !0x1;
      _0x5c04a8[_0x53aa49(0x124b)]({
        x: _0xe42e24,
        y: _0x1f9cbe,
        z: _0x57ac19,
        id: _0xc0ac53,
        meta: _0x5e5859[_0x53aa49(0x1dfa)](_0xe42e24, _0x1f9cbe, _0x57ac19),
      });
    }
    for (
      let _0x547b68 = _0x5c04a8[_0x53aa49(0x18ce)] - 0x1;
      _0x547b68 >= 0x0;
      _0x547b68--
    ) {
      const _0x53da5d = _0x5c04a8[_0x547b68];
      _0x502db8(
        _0x53da5d["x"] + _0x5added,
        _0x53da5d["y"] + _0x1d60bd,
        _0x53da5d["z"] + _0x3e1a32,
        _0x53da5d["id"],
        _0x53da5d[_0x53aa49(0x1f6)],
      );
    }
    return (
      _0x502db8(
        _0xf76778 + _0x5added,
        _0x3950c7 + _0x1d60bd,
        _0xd4f946 + _0x3e1a32,
        f["PISTON_HEAD"],
        (_0xa5353d & 0x7) | (_0x572411 === f[_0x53aa49(0x907)] ? 0x10 : 0x0),
      ),
      _0x502db8(_0xf76778, _0x3950c7, _0xd4f946, _0x572411, _0xa5353d | ot),
      !0x0
    );
  }
  [_0x5d322a(0x176f)](_0x478f18, _0x27f8f2, _0x30a8fd, _0x35571a, _0x1886ab) {
    const _0x34ec16 = _0x5d322a;
    var _0x4c36d9, _0x18fedd, _0x3c6663, _0x54523d;
    const [_0x1bc0e7, _0x2131e4, _0x3af398] = oa[_0x1886ab & 0x7] ?? oa[0x3],
      _0x244edb = this[_0x34ec16(0xe3a)],
      _0x47ebe2 = (_0x5be556, _0x1f6410, _0x384359, _0x189fef, _0x5b5bae) =>
        this["hooks"]["setBlock"](
          _0x5be556,
          _0x1f6410,
          _0x384359,
          _0x189fef,
          _0x5b5bae,
          [_0x478f18, _0x27f8f2, _0x30a8fd],
        ),
      _0x5de6ed = _0x478f18 + _0x1bc0e7,
      _0x417d0a = _0x27f8f2 + _0x2131e4,
      _0x28118e = _0x30a8fd + _0x3af398;
    if (!(
      ((_0x18fedd = (_0x4c36d9 = this["hooks"])[_0x34ec16(0xd6c)]) == null
        ? void 0x0
        : _0x18fedd["call"](
            _0x4c36d9,
            _0x478f18,
            _0x30a8fd,
            _0x5de6ed,
            _0x28118e,
          )) ?? !0x0
    ))
      return !0x1;
    if (
      _0x244edb[_0x34ec16(0x4f7)](_0x5de6ed, _0x417d0a, _0x28118e) ===
        f[_0x34ec16(0x2e3)] &&
      (_0x47ebe2(_0x5de6ed, _0x417d0a, _0x28118e, f[_0x34ec16(0x11c6)], 0x0),
      _0x35571a === f["SPISTON"])
    ) {
      const _0x4a891f = _0x5de6ed + _0x1bc0e7,
        _0x200078 = _0x417d0a + _0x2131e4,
        _0x4929fa = _0x28118e + _0x3af398,
        _0x1dc752 = _0x244edb[_0x34ec16(0x4f7)](
          _0x4a891f,
          _0x200078,
          _0x4929fa,
        );
      kx(_0x1dc752) &&
        (((_0x54523d = (_0x3c6663 = this[_0x34ec16(0x809)])[
          _0x34ec16(0xd6c)
        ]) == null
          ? void 0x0
          : _0x54523d[_0x34ec16(0x1834)](
              _0x3c6663,
              _0x478f18,
              _0x30a8fd,
              _0x4a891f,
              _0x4929fa,
            )) ??
          !0x0) &&
        (_0x47ebe2(
          _0x5de6ed,
          _0x417d0a,
          _0x28118e,
          _0x1dc752,
          _0x244edb[_0x34ec16(0x1dfa)](_0x4a891f, _0x200078, _0x4929fa),
        ),
        _0x47ebe2(_0x4a891f, _0x200078, _0x4929fa, f["AIR"], 0x0));
    }
    return (
      _0x47ebe2(_0x478f18, _0x27f8f2, _0x30a8fd, _0x35571a, _0x1886ab & ~ot),
      !0x0
    );
  }
}
