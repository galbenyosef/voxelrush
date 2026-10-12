// assets__main-Bs7z9e_r 239 — x5843e0
// Lines 86323-86465 of readable/assets__main-Bs7z9e_r.pretty.js (statement-aligned).
function p$(_0x295ca7) {
  const _0x5843e0 = _0x5d322a;
  for (const _0x16eee1 of ee["values"]()) {
    if (!_0x16eee1[_0x5843e0(0x3cb)]) continue;
    const _0x260ff5 =
      De == null ? void 0x0 : De["guardZone"](_0x16eee1[_0x5843e0(0x3cb)]);
    if (!_0x260ff5) continue;
    const _0x5d0984 = {
      centerX: _0x260ff5["x"],
      centerZ: _0x260ff5["z"],
      radius: _0x260ff5[_0x5843e0(0xde9)],
    };
    let _0x37658d = null,
      _0x3d7631 = 0x1 / 0x0;
    if (ct !== _0x5843e0(0x15d5)) {
      const _0x2f6fd9 = { ..._0x5d0984, id: _0x260ff5["id"] },
        _0x1e3216 = _0x16eee1[_0x5843e0(0xdb6)],
        _0x201e6c =
          _0x1e3216 === void 0x0 || ((fe + _0x16eee1["id"]) & 0x1) === 0x0;
      if (!_0x201e6c && _0x1e3216) {
        if (_0x1e3216[_0x5843e0(0x10d4)] === 0x0) {
          const _0xcbd90e = $["get"](_0x1e3216["id"]);
          _0xcbd90e &&
            _0xcbd90e[_0x5843e0(0x1ed3)] === C[_0x5843e0(0x9e2)] &&
            _0xcbd90e["alive"] &&
            !_0xcbd90e[_0x5843e0(0x1ec2)] &&
            !_0xcbd90e[_0x5843e0(0xe43)] &&
            ju(
              _0x2f6fd9,
              _0xcbd90e["x"],
              _0xcbd90e["z"],
              _0xcbd90e[_0x5843e0(0x1351)],
            ) &&
            (_0x37658d =
              _0xcbd90e[_0x5843e0(0x1713)] !== -0x1
                ? (ee["get"](_0xcbd90e[_0x5843e0(0x1713)]) ?? _0xcbd90e)
                : _0xcbd90e);
        } else {
          const _0x3ae94d = ee[_0x5843e0(0x11b7)](_0x1e3216["id"]);
          _0x3ae94d &&
            !_0x3ae94d[_0x5843e0(0x87e)] &&
            (_0x3ae94d["planet"] ?? C["EARTH"]) === C[_0x5843e0(0x9e2)] &&
            _0x3ae94d["ownerName"] &&
            Jn(_0x3ae94d["x"], _0x3ae94d["z"], _0x5d0984) &&
            (_0x37658d = _0x3ae94d);
        }
        _0x37658d || (_0x16eee1[_0x5843e0(0xdb6)] = void 0x0);
      }
      if (_0x201e6c) {
        let _0x276bb0 = 0x0,
          _0x445a23 = -0x1;
        const _0x11bd82 = [...$[_0x5843e0(0x1e01)]()][_0x5843e0(0x3f4)](
            (_0x266e9d) =>
              _0x266e9d[_0x5843e0(0x1ed3)] === C[_0x5843e0(0x9e2)] &&
              _0x266e9d[_0x5843e0(0x174b)] &&
              !_0x266e9d[_0x5843e0(0x1ec2)] &&
              !_0x266e9d[_0x5843e0(0xe43)] &&
              ju(
                _0x2f6fd9,
                _0x266e9d["x"],
                _0x266e9d["z"],
                _0x266e9d[_0x5843e0(0x1351)],
              ) &&
              _l(_0x16eee1, _0x266e9d) &&
              uc(_0x16eee1, _0x266e9d),
          ),
          _0x2e19ce = oy(
            _0x11bd82,
            (_0x52a51e) => _0x52a51e["id"],
            (_0x4ae812) =>
              Pt(
                _0x16eee1["x"],
                _0x16eee1["z"],
                _0x4ae812["x"],
                _0x4ae812["z"],
              ),
          );
        if (
          (_0x2e19ce &&
            (ny(_0x2e19ce),
            (_0x37658d =
              _0x2e19ce[_0x5843e0(0x1713)] !== -0x1
                ? (ee[_0x5843e0(0x11b7)](_0x2e19ce["vehicle"]) ?? _0x2e19ce)
                : _0x2e19ce),
            (_0x3d7631 = Pt(
              _0x16eee1["x"],
              _0x16eee1["z"],
              _0x37658d["x"],
              _0x37658d["z"],
            )),
            (_0x276bb0 = 0x0),
            (_0x445a23 = _0x2e19ce["id"])),
          (_0x16eee1[_0x5843e0(0x1ed3)] ?? C["EARTH"]) === C[_0x5843e0(0x9e2)])
        )
          for (const _0xdd427 of ee[_0x5843e0(0x1e01)]()) {
            if (
              _0xdd427["id"] === _0x16eee1["id"] ||
              _0xdd427["raid"] ||
              (_0xdd427[_0x5843e0(0x1ed3)] ?? C["EARTH"]) !==
                C[_0x5843e0(0x9e2)] ||
              !_0xdd427[_0x5843e0(0x1b8)] ||
              !Jn(_0xdd427["x"], _0xdd427["z"], _0x5d0984) ||
              !_l(_0x16eee1, _0xdd427)
            )
              continue;
            const _0x40205d = St(_0xdd427[_0x5843e0(0x1b8)]);
            if (_0x40205d != null && _0x40205d[_0x5843e0(0x1ec2)]) continue;
            const _0x484308 = Pt(
              _0x16eee1["x"],
              _0x16eee1["z"],
              _0xdd427["x"],
              _0xdd427["z"],
            );
            _0x484308 < _0x3d7631 &&
              uc(_0x16eee1, _0xdd427) &&
              ((_0x3d7631 = _0x484308),
              (_0x37658d = _0xdd427),
              (_0x276bb0 = 0x1),
              (_0x445a23 = _0xdd427["id"]));
          }
        _0x16eee1[_0x5843e0(0xdb6)] = _0x37658d
          ? { kind: _0x276bb0, id: _0x445a23 }
          : null;
      }
    }
    _0x37658d
      ? kf(_0x16eee1, _0x37658d, _0x295ca7, !0x1, _0x5d0984)
      : _0x16eee1[_0x5843e0(0x1307)] !== void 0x0 &&
        _0x16eee1["homeY"] !== void 0x0 &&
        _0x16eee1[_0x5843e0(0x1d66)] !== void 0x0 &&
        kf(
          _0x16eee1,
          {
            x: _0x16eee1[_0x5843e0(0x1307)],
            y: _0x16eee1[_0x5843e0(0x550)],
            z: _0x16eee1[_0x5843e0(0x1d66)],
          },
          _0x295ca7,
          !0x0,
          _0x5d0984,
        );
  }
}
