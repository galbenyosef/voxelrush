// main-C153VVJY 253 — x236836
// Lines 94013-94913 of readable/assets/main-C153VVJY.pretty.js (statement-aligned).
class _z {
  constructor(_0xdbadbb, _0x45bb15) {
    const _0x12f2ad = _0x44a014;
    ((this[_0x12f2ad(0x2ed)] = _0xdbadbb),
      (this[_0x12f2ad(0x1ac7)] = _0x45bb15));
  }
  [_0x44a014(0x1f7b)] = new Set();
  [_0x44a014(0x18ff)] = new Set();
  [_0x44a014(0x1c5)] = new Map();
  [_0x44a014(0xd35)] = new Map();
  [_0x44a014(0xa24)] = new Set();
  ["resident"](_0x4d32d0, _0x5eed7e) {
    const _0x4b25cf = _0x44a014;
    return (
      this[_0x4b25cf(0x2ed)][_0x4b25cf(0x13ca)]?.(
        Math[_0x4b25cf(0x2f3)](_0x4d32d0 / 0x10),
        Math[_0x4b25cf(0x2f3)](_0x5eed7e / 0x10),
      ) ?? !0x0
    );
  }
  ["peek"](_0x3b9545, _0x44a5af, _0x520d45) {
    const _0x43b5d1 = _0x44a014;
    return this["resident"](_0x3b9545, _0x520d45)
      ? this[_0x43b5d1(0x2ed)][_0x43b5d1(0xcdd)](
          _0x3b9545,
          _0x44a5af,
          _0x520d45,
        )
      : l["AIR"];
  }
  ["peekMeta"](_0x51609e, _0x10001e, _0xeccf64) {
    const _0x22e33c = _0x44a014;
    return this["resident"](_0x51609e, _0xeccf64)
      ? this["world"][_0x22e33c(0xdb5)](_0x51609e, _0x10001e, _0xeccf64)
      : 0x0;
  }
  [_0x44a014(0x1d64)](_0x181005, _0x571101, _0x2bec8b, _0xc2fce7) {
    const _0x36b714 = _0x44a014,
      _0x1a3775 = $n(_0x181005, _0x571101, _0x2bec8b);
    if (
      (gd(_0xc2fce7)
        ? this[_0x36b714(0x1f7b)]["add"](_0x1a3775)
        : this[_0x36b714(0x1f7b)]["delete"](_0x1a3775),
      _0xc2fce7 === l["PLATE"]
        ? this["plates"][_0x36b714(0x953)](_0x1a3775)
        : this["plates"][_0x36b714(0x367)](_0x1a3775),
      gd(_0xc2fce7))
    ) {
      this[_0x36b714(0x18ff)][_0x36b714(0x953)](_0x1a3775);
      return;
    }
    for (const [_0x2a94d4, _0x587065, _0x485069] of xR)
      if (
        gd(
          this[_0x36b714(0x15d8)](
            _0x181005 + _0x2a94d4,
            _0x571101 + _0x587065,
            _0x2bec8b + _0x485069,
          ),
        )
      ) {
        this[_0x36b714(0x18ff)][_0x36b714(0x953)](_0x1a3775);
        return;
      }
  }
  [_0x44a014(0xc5d)](_0x2549e1, _0x4d5c84, _0x364879) {
    const _0x478d21 = _0x44a014,
      _0xb748e3 = SY();
    for (
      let _0x24bffa = 0x0;
      _0x24bffa < _0x364879[_0x478d21(0x1715)];
      _0x24bffa++
    ) {
      const _0x427f87 = _0xb748e3[_0x364879[_0x24bffa]];
      if (_0x427f87 === 0x0) continue;
      const _0x1a174c = $n(
        _0x2549e1 * 0x10 + (_0x24bffa & 0xf),
        _0x24bffa >> 0x8,
        _0x4d5c84 * 0x10 + ((_0x24bffa >> 0x4) & 0xf),
      );
      (_0x427f87 & 0x1 &&
        (this["components"][_0x478d21(0x953)](_0x1a174c),
        _0x427f87 & 0x2 &&
          this[_0x478d21(0x18ff)][_0x478d21(0x953)](_0x1a174c)),
        _0x427f87 & 0x4 && this["plates"][_0x478d21(0x953)](_0x1a174c));
    }
  }
  [_0x44a014(0x4c2)](_0x2e5484, _0x1facb0, _0x4f034b) {
    const _0x58bc22 = _0x44a014,
      _0x2fb7de = this[_0x58bc22(0x2ed)][_0x58bc22(0xcdd)](
        _0x2e5484,
        _0x1facb0,
        _0x4f034b,
      ),
      _0x3d0911 = this[_0x58bc22(0x2ed)][_0x58bc22(0xdb5)](
        _0x2e5484,
        _0x1facb0,
        _0x4f034b,
      );
    if (_0x2fb7de === l[_0x58bc22(0xb08)])
      return (
        this[_0x58bc22(0x1ac7)][_0x58bc22(0x1f7f)](
          _0x2e5484,
          _0x1facb0,
          _0x4f034b,
          _0x2fb7de,
          _0x3d0911 ^ Vt,
        ),
        this["dirty"]["add"]($n(_0x2e5484, _0x1facb0, _0x4f034b)),
        !0x0
      );
    if (_0x2fb7de === l[_0x58bc22(0x169c)])
      return (
        _0x3d0911 & Vt ||
          (this[_0x58bc22(0x1ac7)]["setBlock"](
            _0x2e5484,
            _0x1facb0,
            _0x4f034b,
            _0x2fb7de,
            _0x3d0911 | Vt,
          ),
          this[_0x58bc22(0x1c5)]["set"](
            $n(_0x2e5484, _0x1facb0, _0x4f034b),
            Date[_0x58bc22(0xe89)]() + xY,
          ),
          this[_0x58bc22(0x18ff)][_0x58bc22(0x953)](
            $n(_0x2e5484, _0x1facb0, _0x4f034b),
          )),
        !0x0
      );
    if (_0x2fb7de === l[_0x58bc22(0x94e)])
      return (
        this["hooks"][_0x58bc22(0x1f7f)](
          _0x2e5484,
          _0x1facb0,
          _0x4f034b,
          _0x2fb7de,
          (_0x3d0911 & 0xf) | ((((_0x3d0911 >> 0x4) + 0x1) & 0x3) << 0x4),
        ),
        this[_0x58bc22(0x18ff)]["add"]($n(_0x2e5484, _0x1facb0, _0x4f034b)),
        !0x0
      );
    if (Je(_0x2fb7de)) {
      const _0x387c07 = !(_0x3d0911 & Vt);
      (this[_0x58bc22(0x8f3)](
        _0x2e5484,
        _0x1facb0,
        _0x4f034b,
        _0x2fb7de,
        _0x3d0911,
        _0x387c07,
        !!(_0x3d0911 & ku),
      ),
        this[_0x58bc22(0x18ff)][_0x58bc22(0x953)](
          $n(_0x2e5484, _0x1facb0, _0x4f034b),
        ));
      const _0x3e7504 = OS(
        (_0x549fba, _0x12cd35, _0x34f417) =>
          this[_0x58bc22(0x2ed)][_0x58bc22(0xcdd)](
            _0x549fba,
            _0x12cd35,
            _0x34f417,
          ),
        (_0x58817b, _0x39c4e2, _0x3aa3a0) =>
          this["world"][_0x58bc22(0xdb5)](_0x58817b, _0x39c4e2, _0x3aa3a0),
        _0x2e5484,
        _0x1facb0,
        _0x4f034b,
      );
      if (
        _0x3e7504 &&
        (this[_0x58bc22(0x1ac7)][_0x58bc22(0xe77)]?.(
          _0x2e5484,
          _0x4f034b,
          _0x3e7504[0x0],
          _0x3e7504[0x2],
        ) ??
          !0x0)
      ) {
        const [_0x1189d6, _0x4d9982, _0x3f99be] = _0x3e7504,
          _0x55bfcb = this[_0x58bc22(0x2ed)][_0x58bc22(0xdb5)](
            _0x1189d6,
            _0x4d9982,
            _0x3f99be,
          );
        (((_0x55bfcb & Vt) !== 0x0) !== _0x387c07 &&
          this["toggleDoor"](
            _0x1189d6,
            _0x4d9982,
            _0x3f99be,
            this[_0x58bc22(0x2ed)][_0x58bc22(0xcdd)](
              _0x1189d6,
              _0x4d9982,
              _0x3f99be,
            ),
            _0x55bfcb,
            _0x387c07,
            (_0x55bfcb & ku) !== 0x0,
          ),
          this[_0x58bc22(0x18ff)][_0x58bc22(0x953)](
            $n(_0x1189d6, _0x4d9982, _0x3f99be),
          ));
      }
      return !0x0;
    }
    return !0x1;
  }
  [_0x44a014(0x8f3)](
    _0x48bdbf,
    _0x2d6e60,
    _0x3af647,
    _0x55f191,
    _0x4738b0,
    _0x3a7e31,
    _0x4f01fb,
  ) {
    const _0x1f1385 = _0x44a014,
      _0x4470e8 = _0x4738b0 & lr ? _0x2d6e60 - 0x1 : _0x2d6e60 + 0x1,
      _0x3074c6 = (_0x3a7e31 ? Vt : 0x0) | (_0x4f01fb ? ku : 0x0);
    this[_0x1f1385(0x1ac7)][_0x1f1385(0x1f7f)](
      _0x48bdbf,
      _0x2d6e60,
      _0x3af647,
      _0x55f191,
      (_0x4738b0 & -0x19) | _0x3074c6,
    );
    const _0x146383 = this[_0x1f1385(0x2ed)]["getMeta"](
      _0x48bdbf,
      _0x4470e8,
      _0x3af647,
    );
    this["world"][_0x1f1385(0xcdd)](_0x48bdbf, _0x4470e8, _0x3af647) ===
      _0x55f191 &&
      this["hooks"][_0x1f1385(0x1f7f)](
        _0x48bdbf,
        _0x4470e8,
        _0x3af647,
        _0x55f191,
        (_0x146383 & -0x19) | _0x3074c6,
      );
  }
  [_0x44a014(0x1b1)](_0x18eb73) {
    const _0x39e5d8 = _0x44a014;
    if (this[_0x39e5d8(0xa24)]["size"] > 0x0) {
      const _0x36d015 = new Set();
      for (const _0x342863 of this["hooks"][_0x39e5d8(0x14ec)]())
        (this[_0x39e5d8(0x1ac7)][_0x39e5d8(0x1f97)]?.(
          Math[_0x39e5d8(0x2f3)](_0x342863["x"]),
          Math[_0x39e5d8(0x2f3)](_0x342863["z"]),
          _0x342863,
        ) ??
          !0x0) &&
          (_0x36d015[_0x39e5d8(0x953)](
            $n(
              Math["floor"](_0x342863["x"]),
              Math[_0x39e5d8(0x2f3)](_0x342863["y"] + 0.02),
              Math[_0x39e5d8(0x2f3)](_0x342863["z"]),
            ),
          ),
          _0x36d015["add"](
            $n(
              Math["floor"](_0x342863["x"]),
              Math[_0x39e5d8(0x2f3)](_0x342863["y"] + 0.02) - 0x1,
              Math[_0x39e5d8(0x2f3)](_0x342863["z"]),
            ),
          ));
      for (const _0x1fe7c9 of this["plates"]) {
        const [_0x5bd688, _0x5bfba8, _0x2d3b3f] = iE(_0x1fe7c9);
        if (
          !this["resident"](_0x5bd688, _0x2d3b3f) ||
          this[_0x39e5d8(0x2ed)]["getBlock"](
            _0x5bd688,
            _0x5bfba8,
            _0x2d3b3f,
          ) !== l[_0x39e5d8(0x11a5)]
        ) {
          this[_0x39e5d8(0xa24)][_0x39e5d8(0x367)](_0x1fe7c9);
          continue;
        }
        const _0xa01f75 = this["world"]["getMeta"](
            _0x5bd688,
            _0x5bfba8,
            _0x2d3b3f,
          ),
          _0xb99e58 = _0x36d015[_0x39e5d8(0x97a)](_0x1fe7c9);
        _0xb99e58 !== !!(_0xa01f75 & Vt) &&
          (this["hooks"]["setBlock"](
            _0x5bd688,
            _0x5bfba8,
            _0x2d3b3f,
            l[_0x39e5d8(0x11a5)],
            _0xb99e58 ? _0xa01f75 | Vt : _0xa01f75 & ~Vt,
          ),
          this[_0x39e5d8(0x18ff)][_0x39e5d8(0x953)](_0x1fe7c9));
      }
    }
    for (const [_0x2822e2, _0x2847b4] of this[_0x39e5d8(0x1c5)]) {
      if (_0x18eb73 < _0x2847b4) continue;
      this["buttonReset"][_0x39e5d8(0x367)](_0x2822e2);
      const [_0x590a37, _0x5bf44a, _0x572630] = iE(_0x2822e2);
      this["resident"](_0x590a37, _0x572630) &&
        this[_0x39e5d8(0x2ed)][_0x39e5d8(0xcdd)](
          _0x590a37,
          _0x5bf44a,
          _0x572630,
        ) === l["BUTTON"] &&
        (this[_0x39e5d8(0x1ac7)][_0x39e5d8(0x1f7f)](
          _0x590a37,
          _0x5bf44a,
          _0x572630,
          l[_0x39e5d8(0x169c)],
          this[_0x39e5d8(0x2ed)][_0x39e5d8(0xdb5)](
            _0x590a37,
            _0x5bf44a,
            _0x572630,
          ) & ~Vt,
        ),
        this["dirty"]["add"](_0x2822e2));
    }
    for (const [_0x49f6c2, _0x2def48] of this["repeaterPending"]) {
      if (_0x18eb73 < _0x2def48["at"]) continue;
      this["repeaterPending"][_0x39e5d8(0x367)](_0x49f6c2);
      const [_0x2ccb06, _0x4ad482, _0x198000] = iE(_0x49f6c2);
      if (
        this["resident"](_0x2ccb06, _0x198000) &&
        this[_0x39e5d8(0x2ed)][_0x39e5d8(0xcdd)](
          _0x2ccb06,
          _0x4ad482,
          _0x198000,
        ) === l["REPEATER"]
      ) {
        const _0x118a7a = this[_0x39e5d8(0x2ed)]["getMeta"](
          _0x2ccb06,
          _0x4ad482,
          _0x198000,
        );
        !!(_0x118a7a & Vt) !== _0x2def48["on"] &&
          (this[_0x39e5d8(0x1ac7)]["setBlock"](
            _0x2ccb06,
            _0x4ad482,
            _0x198000,
            l["REPEATER"],
            _0x2def48["on"] ? _0x118a7a | Vt : _0x118a7a & ~Vt,
          ),
          this[_0x39e5d8(0x18ff)][_0x39e5d8(0x953)](_0x49f6c2));
      }
    }
    this[_0x39e5d8(0x18ff)][_0x39e5d8(0x1c1e)] > 0x0 &&
      this[_0x39e5d8(0x1348)](_0x18eb73);
  }
  [_0x44a014(0x1348)](_0x32e33b) {
    const _0xdf1130 = _0x44a014;
    this["dirty"][_0xdf1130(0x194e)]();
    const _0x481e07 = this[_0xdf1130(0x2ed)];
    for (let _0x4e0e52 = 0x0; _0x4e0e52 < 0x8; _0x4e0e52++) {
      const _0xdf5081 = [];
      for (const _0x176f9d of this[_0xdf1130(0x1f7b)]) {
        const [_0xddb7da, _0x34882d, _0x2cf0e0] = iE(_0x176f9d);
        if (!this[_0xdf1130(0x94c)](_0xddb7da, _0x2cf0e0)) {
          this[_0xdf1130(0x1f7b)][_0xdf1130(0x367)](_0x176f9d);
          continue;
        }
        const _0xfb4594 = _0x481e07[_0xdf1130(0xcdd)](
          _0xddb7da,
          _0x34882d,
          _0x2cf0e0,
        );
        if (!gd(_0xfb4594)) {
          this[_0xdf1130(0x1f7b)][_0xdf1130(0x367)](_0x176f9d);
          continue;
        }
        _0xdf5081[_0xdf1130(0x2fb)]({
          x: _0xddb7da,
          y: _0x34882d,
          z: _0x2cf0e0,
          id: _0xfb4594,
          meta: _0x481e07["getMeta"](_0xddb7da, _0x34882d, _0x2cf0e0),
        });
      }
      if (_0xdf5081[_0xdf1130(0x1715)] === 0x0) return;
      const _0x2d83b1 = new Set(),
        _0x20afb2 = new Set(),
        _0x2634f6 = (_0xb72fc9, _0x4be058, _0x192a03, _0x4a52bd) =>
          this[_0xdf1130(0x1ac7)][_0xdf1130(0xe77)]?.(
            _0xb72fc9,
            _0x4be058,
            _0x192a03,
            _0x4a52bd,
          ) ?? !0x0,
        _0x121443 = new Map();
      for (const _0x5919fc of _0xdf5081) {
        if (
          ((_0x5919fc["id"] === l[_0xdf1130(0x8f0)] ||
            _0x5919fc["id"] === l[_0xdf1130(0xb08)] ||
            _0x5919fc["id"] === l[_0xdf1130(0x169c)] ||
            _0x5919fc["id"] === l[_0xdf1130(0x11a5)]) &&
            _0x5919fc[_0xdf1130(0xcd8)] & Vt &&
            _0x2d83b1["add"](
              $n(_0x5919fc["x"], _0x5919fc["y"], _0x5919fc["z"]),
            ),
          _0x5919fc["id"] === l[_0xdf1130(0x173e)] && !(_0x5919fc["meta"] & Vt))
        ) {
          const _0x5516ad = $n(_0x5919fc["x"], _0x5919fc["y"], _0x5919fc["z"]);
          _0x2d83b1["add"](_0x5516ad);
          const _0x326dad = As[_0x5919fc[_0xdf1130(0xcd8)] & 0x7] ?? As[0x0];
          _0x121443[_0xdf1130(0x1b41)](
            _0x5516ad,
            $n(
              _0x5919fc["x"] + _0x326dad[0x0],
              _0x5919fc["y"] + _0x326dad[0x1],
              _0x5919fc["z"] + _0x326dad[0x2],
            ),
          );
        }
        if (
          _0x5919fc["id"] === l[_0xdf1130(0x94e)] &&
          _0x5919fc[_0xdf1130(0xcd8)] & Vt
        ) {
          const [_0x12b8bd, _0x4efcb2] = Vr[_0x5919fc[_0xdf1130(0xcd8)] & 0x3];
          _0x2634f6(
            _0x5919fc["x"],
            _0x5919fc["z"],
            _0x5919fc["x"] + _0x12b8bd,
            _0x5919fc["z"] + _0x4efcb2,
          ) &&
            _0x20afb2[_0xdf1130(0x953)](
              $n(
                _0x5919fc["x"] + _0x12b8bd,
                _0x5919fc["y"],
                _0x5919fc["z"] + _0x4efcb2,
              ),
            );
        }
      }
      const _0x21ab23 = new Map(),
        _0x2b9440 = [];
      for (const _0x29d5f9 of _0xdf5081) {
        if (_0x29d5f9["id"] !== l[_0xdf1130(0x164b)]) continue;
        let _0xf66699 = 0x0;
        const _0x2f72fc = $n(_0x29d5f9["x"], _0x29d5f9["y"], _0x29d5f9["z"]);
        if (_0x20afb2[_0xdf1130(0x97a)](_0x2f72fc)) _0xf66699 = 0xf;
        else {
          for (const [_0x42d218, _0x526aad, _0x1c5365] of xR)
            if (
              _0x2634f6(
                _0x29d5f9["x"] + _0x42d218,
                _0x29d5f9["z"] + _0x1c5365,
                _0x29d5f9["x"],
                _0x29d5f9["z"],
              ) &&
              _0x2d83b1["has"](
                $n(
                  _0x29d5f9["x"] + _0x42d218,
                  _0x29d5f9["y"] + _0x526aad,
                  _0x29d5f9["z"] + _0x1c5365,
                ),
              )
            ) {
              _0xf66699 = 0xf;
              break;
            }
        }
        (_0x21ab23[_0xdf1130(0x1b41)](_0x2f72fc, _0xf66699),
          _0xf66699 > 0x0 &&
            _0x2b9440["push"]([
              _0x29d5f9["x"],
              _0x29d5f9["y"],
              _0x29d5f9["z"],
              _0xf66699,
            ]));
      }
      for (
        let _0x2da3f6 = 0x0;
        _0x2da3f6 < _0x2b9440[_0xdf1130(0x1715)];
        _0x2da3f6++
      ) {
        const [_0x4fdc98, _0x3d10ed, _0x5a5ebf, _0x47f4ec] =
          _0x2b9440[_0x2da3f6];
        if (!(_0x47f4ec <= 0x1))
          for (const [_0x4ed95b, _0x7b7c33, _0x390c0d] of MY(
            (_0x1a875a, _0x17c1ad, _0x4a9deb) =>
              this[_0xdf1130(0x15d8)](_0x1a875a, _0x17c1ad, _0x4a9deb),
            (_0xf27a3c, _0x369c3d, _0x258cd3) =>
              this[_0xdf1130(0x18d0)](_0xf27a3c, _0x369c3d, _0x258cd3),
            _0x4fdc98,
            _0x3d10ed,
            _0x5a5ebf,
          )) {
            if (
              !_0x2634f6(
                _0x4fdc98,
                _0x5a5ebf,
                _0x4fdc98 + _0x4ed95b,
                _0x5a5ebf + _0x390c0d,
              )
            )
              continue;
            const _0x5516b2 = $n(
                _0x4fdc98 + _0x4ed95b,
                _0x3d10ed + _0x7b7c33,
                _0x5a5ebf + _0x390c0d,
              ),
              _0x3422bc = _0x21ab23[_0xdf1130(0xda9)](_0x5516b2);
            _0x3422bc !== void 0x0 &&
              _0x3422bc < _0x47f4ec - 0x1 &&
              (_0x21ab23[_0xdf1130(0x1b41)](_0x5516b2, _0x47f4ec - 0x1),
              _0x2b9440[_0xdf1130(0x2fb)]([
                _0x4fdc98 + _0x4ed95b,
                _0x3d10ed + _0x7b7c33,
                _0x5a5ebf + _0x390c0d,
                _0x47f4ec - 0x1,
              ]));
          }
      }
      const _0x2694d3 = (_0x99f9cd, _0x599f0e, _0x3ab4d3) => {
        const _0x2972fb = _0xdf1130,
          _0x3981cc = $n(_0x99f9cd, _0x599f0e, _0x3ab4d3);
        if (_0x20afb2[_0x2972fb(0x97a)](_0x3981cc)) return !0x0;
        for (const [_0x21103e, _0x595994, _0x8a670] of xR) {
          if (
            !_0x2634f6(
              _0x99f9cd + _0x21103e,
              _0x3ab4d3 + _0x8a670,
              _0x99f9cd,
              _0x3ab4d3,
            )
          )
            continue;
          const _0x97fecc = $n(
            _0x99f9cd + _0x21103e,
            _0x599f0e + _0x595994,
            _0x3ab4d3 + _0x8a670,
          );
          if (
            _0x2d83b1[_0x2972fb(0x97a)](_0x97fecc) &&
            _0x121443[_0x2972fb(0xda9)](_0x97fecc) !== _0x3981cc
          )
            return !0x0;
          const _0x3c4f1c = _0x21ab23[_0x2972fb(0xda9)](_0x97fecc);
          if (_0x3c4f1c !== void 0x0 && _0x3c4f1c > 0x0) return !0x0;
        }
        return !0x1;
      };
      let _0x5c29dc = !0x1;
      for (const _0x236836 of _0xdf5081)
        if (
          _0x481e07[_0xdf1130(0xcdd)](
            _0x236836["x"],
            _0x236836["y"],
            _0x236836["z"],
          ) === _0x236836["id"]
        )
          switch (_0x236836["id"]) {
            case l["REDSTONE"]: {
              const _0x4b241a =
                _0x21ab23[_0xdf1130(0xda9)](
                  $n(_0x236836["x"], _0x236836["y"], _0x236836["z"]),
                ) ?? 0x0;
              _0x4b241a !== RI(_0x236836["meta"]) &&
                (this[_0xdf1130(0x1ac7)]["setBlock"](
                  _0x236836["x"],
                  _0x236836["y"],
                  _0x236836["z"],
                  _0x236836["id"],
                  T8(_0x236836["meta"], _0x4b241a),
                ),
                (_0x5c29dc = !0x0));
              break;
            }
            case l["RTORCH"]: {
              const _0x534c4d =
                  As[_0x236836[_0xdf1130(0xcd8)] & 0x7] ?? As[0x0],
                _0x2370cf =
                  _0x2634f6(
                    _0x236836["x"] + _0x534c4d[0x0],
                    _0x236836["z"] + _0x534c4d[0x2],
                    _0x236836["x"],
                    _0x236836["z"],
                  ) &&
                  _0x2694d3(
                    _0x236836["x"] + _0x534c4d[0x0],
                    _0x236836["y"] + _0x534c4d[0x1],
                    _0x236836["z"] + _0x534c4d[0x2],
                  );
              _0x2370cf !== !!(_0x236836[_0xdf1130(0xcd8)] & Vt) &&
                (this[_0xdf1130(0x1ac7)][_0xdf1130(0x1f7f)](
                  _0x236836["x"],
                  _0x236836["y"],
                  _0x236836["z"],
                  _0x236836["id"],
                  _0x2370cf
                    ? _0x236836[_0xdf1130(0xcd8)] | Vt
                    : _0x236836["meta"] & ~Vt,
                ),
                (_0x5c29dc = !0x0));
              break;
            }
            case l[_0xdf1130(0x15f2)]: {
              const _0x2a1561 = _0x2694d3(
                _0x236836["x"],
                _0x236836["y"],
                _0x236836["z"],
              );
              _0x2a1561 !== !!(_0x236836[_0xdf1130(0xcd8)] & Vt) &&
                (this[_0xdf1130(0x1ac7)][_0xdf1130(0x1f7f)](
                  _0x236836["x"],
                  _0x236836["y"],
                  _0x236836["z"],
                  _0x236836["id"],
                  _0x2a1561
                    ? _0x236836[_0xdf1130(0xcd8)] | Vt
                    : _0x236836[_0xdf1130(0xcd8)] & ~Vt,
                ),
                (_0x5c29dc = !0x0));
              break;
            }
            case l[_0xdf1130(0x94e)]: {
              const [_0x31a7c6, _0x37a7d5] =
                  Vr[_0x236836[_0xdf1130(0xcd8)] & 0x3],
                _0x4085d8 = _0x236836["x"] - _0x31a7c6,
                _0x3acc5b = _0x236836["z"] - _0x37a7d5,
                _0x3a996b =
                  _0x20afb2["has"](
                    $n(_0x236836["x"], _0x236836["y"], _0x236836["z"]),
                  ) ||
                  (_0x2634f6(
                    _0x4085d8,
                    _0x3acc5b,
                    _0x236836["x"],
                    _0x236836["z"],
                  ) &&
                    (_0x2d83b1["has"](
                      $n(_0x4085d8, _0x236836["y"], _0x3acc5b),
                    ) ||
                      (_0x21ab23[_0xdf1130(0xda9)](
                        $n(_0x4085d8, _0x236836["y"], _0x3acc5b),
                      ) ?? 0x0) > 0x0));
              (_0x3a996b !== !!(_0x236836[_0xdf1130(0xcd8)] & Vt) &&
                !this[_0xdf1130(0xd35)][_0xdf1130(0x97a)](
                  $n(_0x236836["x"], _0x236836["y"], _0x236836["z"]),
                ) &&
                this[_0xdf1130(0xd35)][_0xdf1130(0x1b41)](
                  $n(_0x236836["x"], _0x236836["y"], _0x236836["z"]),
                  {
                    on: _0x3a996b,
                    at:
                      _0x32e33b +
                      0x64 *
                        (0x1 + ((_0x236836[_0xdf1130(0xcd8)] >> 0x4) & 0x3)),
                  },
                ),
                _0x3a996b === !!(_0x236836[_0xdf1130(0xcd8)] & Vt) &&
                  this[_0xdf1130(0xd35)][_0xdf1130(0x367)](
                    $n(_0x236836["x"], _0x236836["y"], _0x236836["z"]),
                  ));
              break;
            }
            case l[_0xdf1130(0x21d)]:
              this[_0xdf1130(0x1ac7)][_0xdf1130(0x1d45)]?.(
                _0x236836["x"],
                _0x236836["y"],
                _0x236836["z"],
                _0x2694d3(_0x236836["x"], _0x236836["y"], _0x236836["z"]),
              );
              break;
            case l[_0xdf1130(0x16bf)]:
            case l[_0xdf1130(0x576)]:
            case l[_0xdf1130(0x106)]:
            case l[_0xdf1130(0x1595)]:
            case l[_0xdf1130(0x1768)]: {
              const _0x2af89b = _0x2694d3(
                _0x236836["x"],
                _0x236836["y"],
                _0x236836["z"],
              );
              _0x2af89b !== !!(_0x236836[_0xdf1130(0xcd8)] & ku) &&
                (this["hooks"][_0xdf1130(0x1f7f)](
                  _0x236836["x"],
                  _0x236836["y"],
                  _0x236836["z"],
                  _0x236836["id"],
                  (_0x236836[_0xdf1130(0xcd8)] & -0x19) |
                    (_0x2af89b ? Vt | ku : 0x0),
                ),
                (_0x5c29dc = !0x0));
              break;
            }
            case l[_0xdf1130(0x18c8)]:
            case l[_0xdf1130(0x1484)]:
            case l[_0xdf1130(0xa3c)]: {
              if (_0x236836[_0xdf1130(0xcd8)] & lr) break;
              const _0x59b828 =
                  _0x2694d3(_0x236836["x"], _0x236836["y"], _0x236836["z"]) ||
                  _0x2694d3(
                    _0x236836["x"],
                    _0x236836["y"] + 0x1,
                    _0x236836["z"],
                  ),
                _0x13b260 = !!(_0x236836[_0xdf1130(0xcd8)] & ku);
              _0x59b828 && !_0x13b260
                ? (this[_0xdf1130(0x8f3)](
                    _0x236836["x"],
                    _0x236836["y"],
                    _0x236836["z"],
                    _0x236836["id"],
                    _0x236836["meta"],
                    !0x0,
                    !0x0,
                  ),
                  (_0x5c29dc = !0x0))
                : !_0x59b828 &&
                  _0x13b260 &&
                  (this["toggleDoor"](
                    _0x236836["x"],
                    _0x236836["y"],
                    _0x236836["z"],
                    _0x236836["id"],
                    _0x236836[_0xdf1130(0xcd8)],
                    !0x1,
                    !0x1,
                  ),
                  (_0x5c29dc = !0x0));
              break;
            }
            case l["PISTON"]:
            case l[_0xdf1130(0x1d2a)]: {
              const _0x3eb001 = !!(_0x236836[_0xdf1130(0xcd8)] & Vt),
                _0x420251 = _0x2694d3(
                  _0x236836["x"],
                  _0x236836["y"],
                  _0x236836["z"],
                );
              _0x420251 && !_0x3eb001
                ? (_0x5c29dc =
                    this[_0xdf1130(0x2013)](
                      _0x236836["x"],
                      _0x236836["y"],
                      _0x236836["z"],
                      _0x236836["id"],
                      _0x236836["meta"],
                    ) || _0x5c29dc)
                : !_0x420251 &&
                  _0x3eb001 &&
                  (_0x5c29dc =
                    this[_0xdf1130(0x40f)](
                      _0x236836["x"],
                      _0x236836["y"],
                      _0x236836["z"],
                      _0x236836["id"],
                      _0x236836["meta"],
                    ) || _0x5c29dc);
              break;
            }
          }
      if (!_0x5c29dc) return;
    }
  }
  ["extendPiston"](_0x3032ba, _0x71308b, _0x18bede, _0x311b10, _0x364500) {
    const _0x3c8789 = _0x44a014,
      [_0x5d1799, _0x1fdde5, _0x32821f] = $a[_0x364500 & 0x7] ?? $a[0x3],
      _0x30f0fc = this[_0x3c8789(0x2ed)],
      _0x556572 = (_0x6c94e6, _0x5446f5, _0x450c91, _0x1382d8, _0x2c466b) =>
        this[_0x3c8789(0x1ac7)][_0x3c8789(0x1f7f)](
          _0x6c94e6,
          _0x5446f5,
          _0x450c91,
          _0x1382d8,
          _0x2c466b,
          [_0x3032ba, _0x71308b, _0x18bede],
        ),
      _0x1a85dd = [];
    for (let _0x82b9a3 = 0x1; _0x82b9a3 <= 0x9; _0x82b9a3++) {
      const _0x3451f3 = _0x3032ba + _0x5d1799 * _0x82b9a3,
        _0x30f5d0 = _0x71308b + _0x1fdde5 * _0x82b9a3,
        _0x35c5d4 = _0x18bede + _0x32821f * _0x82b9a3;
      if (
        !(
          this[_0x3c8789(0x1ac7)]["canLink"]?.(
            _0x3032ba,
            _0x18bede,
            _0x3451f3,
            _0x35c5d4,
          ) ?? !0x0
        ) ||
        _0x30f5d0 < 0x0 ||
        _0x30f5d0 > 0x7f ||
        this["hooks"][_0x3c8789(0xc90)]?.(_0x3451f3, _0x30f5d0, _0x35c5d4)
      )
        return !0x1;
      const _0x2d67c4 = _0x30f0fc[_0x3c8789(0xcdd)](
        _0x3451f3,
        _0x30f5d0,
        _0x35c5d4,
      );
      if (_0x2d67c4 === l[_0x3c8789(0x1ff6)] || _0x2d67c4 === l["WATER"]) break;
      if (RY(_0x2d67c4)) {
        this[_0x3c8789(0x1ac7)]["breakFragile"](
          _0x3451f3,
          _0x30f5d0,
          _0x35c5d4,
          [_0x3032ba, _0x71308b, _0x18bede],
        );
        break;
      }
      if (_0x82b9a3 === 0x9 || !KO(_0x2d67c4)) return !0x1;
      _0x1a85dd["push"]({
        x: _0x3451f3,
        y: _0x30f5d0,
        z: _0x35c5d4,
        id: _0x2d67c4,
        meta: _0x30f0fc["getMeta"](_0x3451f3, _0x30f5d0, _0x35c5d4),
      });
    }
    for (
      let _0x5af2d5 = _0x1a85dd[_0x3c8789(0x1715)] - 0x1;
      _0x5af2d5 >= 0x0;
      _0x5af2d5--
    ) {
      const _0x2ec9d6 = _0x1a85dd[_0x5af2d5];
      _0x556572(
        _0x2ec9d6["x"] + _0x5d1799,
        _0x2ec9d6["y"] + _0x1fdde5,
        _0x2ec9d6["z"] + _0x32821f,
        _0x2ec9d6["id"],
        _0x2ec9d6[_0x3c8789(0xcd8)],
      );
    }
    return (
      _0x556572(
        _0x3032ba + _0x5d1799,
        _0x71308b + _0x1fdde5,
        _0x18bede + _0x32821f,
        l[_0x3c8789(0x6f2)],
        (_0x364500 & 0x7) | (_0x311b10 === l[_0x3c8789(0x1d2a)] ? 0x10 : 0x0),
      ),
      _0x556572(_0x3032ba, _0x71308b, _0x18bede, _0x311b10, _0x364500 | Vt),
      !0x0
    );
  }
  [_0x44a014(0x40f)](_0xdcbdbf, _0x35d0d3, _0x566376, _0x14b903, _0x3d6f6e) {
    const _0xc22268 = _0x44a014,
      [_0x3d6bb8, _0x3daec2, _0x4539cc] = $a[_0x3d6f6e & 0x7] ?? $a[0x3],
      _0x2a0f00 = this[_0xc22268(0x2ed)],
      _0x3b0ded = (_0x5d2c70, _0xc83a4a, _0x3df657, _0x126bc9, _0x41af61) =>
        this[_0xc22268(0x1ac7)][_0xc22268(0x1f7f)](
          _0x5d2c70,
          _0xc83a4a,
          _0x3df657,
          _0x126bc9,
          _0x41af61,
          [_0xdcbdbf, _0x35d0d3, _0x566376],
        ),
      _0x3af4b9 = _0xdcbdbf + _0x3d6bb8,
      _0x59e4b6 = _0x35d0d3 + _0x3daec2,
      _0x348a3f = _0x566376 + _0x4539cc;
    if (!(
      this[_0xc22268(0x1ac7)]["canLink"]?.(
        _0xdcbdbf,
        _0x566376,
        _0x3af4b9,
        _0x348a3f,
      ) ?? !0x0
    ))
      return !0x1;
    if (
      _0x2a0f00[_0xc22268(0xcdd)](_0x3af4b9, _0x59e4b6, _0x348a3f) ===
        l[_0xc22268(0x6f2)] &&
      (_0x3b0ded(_0x3af4b9, _0x59e4b6, _0x348a3f, l[_0xc22268(0x1ff6)], 0x0),
      _0x14b903 === l["SPISTON"])
    ) {
      const _0x1f5a16 = _0x3af4b9 + _0x3d6bb8,
        _0x22ec1a = _0x59e4b6 + _0x3daec2,
        _0xfe4b7a = _0x348a3f + _0x4539cc,
        _0x304387 = _0x2a0f00[_0xc22268(0xcdd)](
          _0x1f5a16,
          _0x22ec1a,
          _0xfe4b7a,
        );
      KO(_0x304387) &&
        (this["hooks"][_0xc22268(0xe77)]?.(
          _0xdcbdbf,
          _0x566376,
          _0x1f5a16,
          _0xfe4b7a,
        ) ??
          !0x0) &&
        (_0x3b0ded(
          _0x3af4b9,
          _0x59e4b6,
          _0x348a3f,
          _0x304387,
          _0x2a0f00["getMeta"](_0x1f5a16, _0x22ec1a, _0xfe4b7a),
        ),
        _0x3b0ded(_0x1f5a16, _0x22ec1a, _0xfe4b7a, l[_0xc22268(0x1ff6)], 0x0));
    }
    return (
      _0x3b0ded(_0xdcbdbf, _0x35d0d3, _0x566376, _0x14b903, _0x3d6f6e & ~Vt),
      !0x0
    );
  }
}
