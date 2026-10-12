// assets__main-Bs7z9e_r 02 — x1b2ace
// Lines 314-388 of readable/assets__main-Bs7z9e_r.pretty.js (statement-aligned).
function Tl(_0x1b2ace) {
  const _0x2fc270 = _0x5d322a;
  if (_0x1b2ace[_0x2fc270(0x1021)]) {
    const _0x31e5d9 = j0(_0x1b2ace[_0x2fc270(0x1021)]);
    return _0x31e5d9
      ? [
          {
            id: _0x1b2ace["id"] + "/" + _0x31e5d9["id"],
            game: _0x31e5d9,
            site: _0x1b2ace["id"],
            x: _0x1b2ace["x"],
            y: _0x1b2ace["y"],
            z: _0x1b2ace["z"],
            yaw: (-_0x1b2ace["rotation"] * Math["PI"]) / 0x2,
            scale: 0x1,
          },
        ]
      : [];
  }
  return (_0x1b2ace[_0x2fc270(0x930)] ?? 0x1) >= Cw
    ? Nz()[_0x2fc270(0x164b)]((_0x324b5a) => {
        const _0x186bec = _0x2fc270,
          _0x511113 = Lf[_0x324b5a[_0x186bec(0x1021)]],
          _0x292227 = K2(
            _0x1b2ace,
            _0x324b5a["x"],
            _0x324b5a["y"],
            _0x324b5a["z"],
          );
        return {
          id: _0x1b2ace["id"] + "/" + _0x511113["id"],
          game: _0x511113,
          site: _0x1b2ace["id"],
          ..._0x292227,
          yaw: U2(_0x1b2ace, _0x324b5a[_0x186bec(0x17d5)]),
          scale: _0x324b5a["scale"],
        };
      })
    : Lf["map"]((_0x471c7e, _0x199344) => {
        const _0x30b0eb = _0x2fc270,
          _0x3c50ec =
            _0x199344 === 0x0 ? 0x0 : (((_0x199344 - 0x1) % 0xa) - 4.5) * 3.25,
          _0x1127b9 =
            _0x199344 === 0x0
              ? -0xd
              : -0x6 + Math["floor"]((_0x199344 - 0x1) / 0xa) * 0x8,
          _0x103ebc = (_0x1b2ace[_0x30b0eb(0x14f6)] * Math["PI"]) / 0x2,
          _0x1d34eb = Math[_0x30b0eb(0x363)](_0x103ebc),
          _0x3df536 = Math[_0x30b0eb(0x813)](_0x103ebc);
        return {
          id: _0x1b2ace["id"] + "/" + _0x471c7e["id"],
          game: _0x471c7e,
          site: _0x1b2ace["id"],
          x: _0x1b2ace["x"] + _0x3c50ec * _0x1d34eb - _0x1127b9 * _0x3df536,
          y: _0x1b2ace["y"] + 0x1,
          z: _0x1b2ace["z"] + _0x3c50ec * _0x3df536 + _0x1127b9 * _0x1d34eb,
          yaw: -_0x103ebc,
          scale: 0x1,
        };
      });
}
function vz(_0x36b045) {
  const _0x32eee0 = _0x5d322a,
    _0x5a7cde = _z * _0x36b045[_0x32eee0(0x1e42)];
  return {
    x:
      _0x36b045["x"] +
      Math[_0x32eee0(0x813)](_0x36b045[_0x32eee0(0x17d5)]) * _0x5a7cde,
    y: _0x36b045["y"],
    z:
      _0x36b045["z"] +
      Math[_0x32eee0(0x363)](_0x36b045[_0x32eee0(0x17d5)]) * _0x5a7cde,
    yaw: _0x36b045["yaw"],
  };
}
