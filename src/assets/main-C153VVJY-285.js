// main-C153VVJY 285 — x945c4b
// Lines 109123-109259 of readable/assets/main-C153VVJY.pretty.js (statement-aligned).
function ij(_0x494409) {
  const _0x945c4b = _0x44a014;
  for (const _0xb70412 of W[_0x945c4b(0x642)]()) {
    if (!_0xb70412[_0x945c4b(0x139f)]) continue;
    const _0x39f33e = Xe?.[_0x945c4b(0x80c)](_0xb70412[_0x945c4b(0x139f)]);
    if (!_0x39f33e) continue;
    const _0x3c0eab = {
      centerX: _0x39f33e["x"],
      centerZ: _0x39f33e["z"],
      radius: _0x39f33e[_0x945c4b(0x1d1b)],
    };
    let _0x601409 = null,
      _0x2476be = 0x1 / 0x0;
    if (Zt !== _0x945c4b(0x823)) {
      const _0x3072e8 = { ..._0x3c0eab, id: _0x39f33e["id"] },
        _0x476ca3 = _0xb70412[_0x945c4b(0x12b1)],
        _0x50c416 =
          _0x476ca3 === void 0x0 || ((J + _0xb70412["id"]) & 0x1) === 0x0;
      if (!_0x50c416 && _0x476ca3) {
        if (_0x476ca3[_0x945c4b(0x335)] === 0x0) {
          const _0x339da5 = G["get"](_0x476ca3["id"]);
          _0x339da5 &&
            _0x339da5["planet"] === D[_0x945c4b(0xd62)] &&
            _0x339da5[_0x945c4b(0x161)] &&
            !_0x339da5["creative"] &&
            !_0x339da5[_0x945c4b(0x3ff)] &&
            g1(_0x3072e8, _0x339da5["x"], _0x339da5["z"], _0x339da5["name"]) &&
            (_0x601409 =
              _0x339da5[_0x945c4b(0x1445)] !== -0x1
                ? (W["get"](_0x339da5[_0x945c4b(0x1445)]) ?? _0x339da5)
                : _0x339da5);
        } else {
          const _0x16b53d = W["get"](_0x476ca3["id"]);
          _0x16b53d &&
            !_0x16b53d["raid"] &&
            (_0x16b53d[_0x945c4b(0x529)] ?? D[_0x945c4b(0xd62)]) ===
              D[_0x945c4b(0xd62)] &&
            _0x16b53d[_0x945c4b(0x19d2)] &&
            oo(_0x16b53d["x"], _0x16b53d["z"], _0x3c0eab) &&
            (_0x601409 = _0x16b53d);
        }
        _0x601409 || (_0xb70412[_0x945c4b(0x12b1)] = void 0x0);
      }
      if (_0x50c416) {
        let _0x424c48 = 0x0,
          _0x37edc0 = -0x1;
        const _0xcef42c = [...G[_0x945c4b(0x642)]()][_0x945c4b(0x1ca)](
            (_0x25577d) =>
              _0x25577d["planet"] === D[_0x945c4b(0xd62)] &&
              _0x25577d[_0x945c4b(0x161)] &&
              !_0x25577d[_0x945c4b(0x2b5)] &&
              !_0x25577d["vanished"] &&
              g1(
                _0x3072e8,
                _0x25577d["x"],
                _0x25577d["z"],
                _0x25577d[_0x945c4b(0x35b)],
              ) &&
              _f(_0xb70412, _0x25577d) &&
              Yl(_0xb70412, _0x25577d),
          ),
          _0x4f251a = Ig(
            _0xcef42c,
            (_0x20796c) => _0x20796c["id"],
            (_0x4e198b) =>
              ve(
                _0xb70412["x"],
                _0xb70412["z"],
                _0x4e198b["x"],
                _0x4e198b["z"],
              ),
          );
        if (
          (_0x4f251a &&
            (Ng(_0x4f251a),
            (_0x601409 =
              _0x4f251a[_0x945c4b(0x1445)] !== -0x1
                ? (W[_0x945c4b(0xda9)](_0x4f251a[_0x945c4b(0x1445)]) ??
                  _0x4f251a)
                : _0x4f251a),
            (_0x2476be = ve(
              _0xb70412["x"],
              _0xb70412["z"],
              _0x601409["x"],
              _0x601409["z"],
            )),
            (_0x424c48 = 0x0),
            (_0x37edc0 = _0x4f251a["id"])),
          (_0xb70412[_0x945c4b(0x529)] ?? D["EARTH"]) === D["EARTH"])
        )
          for (const _0x31038f of W["values"]()) {
            if (
              _0x31038f["id"] === _0xb70412["id"] ||
              _0x31038f["raid"] ||
              (_0x31038f["planet"] ?? D["EARTH"]) !== D[_0x945c4b(0xd62)] ||
              !_0x31038f[_0x945c4b(0x19d2)] ||
              !oo(_0x31038f["x"], _0x31038f["z"], _0x3c0eab) ||
              !_f(_0xb70412, _0x31038f) ||
              me(_0x31038f[_0x945c4b(0x19d2)])?.[_0x945c4b(0x2b5)]
            )
              continue;
            const _0x3180aa = ve(
              _0xb70412["x"],
              _0xb70412["z"],
              _0x31038f["x"],
              _0x31038f["z"],
            );
            _0x3180aa < _0x2476be &&
              Yl(_0xb70412, _0x31038f) &&
              ((_0x2476be = _0x3180aa),
              (_0x601409 = _0x31038f),
              (_0x424c48 = 0x1),
              (_0x37edc0 = _0x31038f["id"]));
          }
        _0xb70412[_0x945c4b(0x12b1)] = _0x601409
          ? { kind: _0x424c48, id: _0x37edc0 }
          : null;
      }
    }
    _0x601409
      ? Hh(_0xb70412, _0x601409, _0x494409, !0x1, _0x3c0eab)
      : _0xb70412[_0x945c4b(0x117d)] !== void 0x0 &&
        _0xb70412[_0x945c4b(0x691)] !== void 0x0 &&
        _0xb70412["homeZ"] !== void 0x0 &&
        Hh(
          _0xb70412,
          {
            x: _0xb70412["homeX"],
            y: _0xb70412[_0x945c4b(0x691)],
            z: _0xb70412[_0x945c4b(0x9a8)],
          },
          _0x494409,
          !0x0,
          _0x3c0eab,
        );
  }
}
