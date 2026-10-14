// assets__main-Bs7z9e_r 261 — x5d322a
// Lines 93323-93627 of readable/assets__main-Bs7z9e_r.pretty.js (statement-aligned).
function dK(_0x23ad10, _0x55a9d0) {
  const _0x168a2a = _0x5d322a;
  var _0x5e5bb4;
  if (
    ((_0x5e5bb4 = _0x23ad10["chair"]) == null
      ? void 0x0
      : _0x5e5bb4["casino"]) === _0x55a9d0["id"]
  )
    return;
  if (_0x23ad10[_0x168a2a(0x161)]) {
    const _0x3878d3 = _0x23ad10["chair"];
    ((_0x23ad10[_0x168a2a(0x161)] = void 0x0),
      _0x3878d3[_0x168a2a(0x1a9e)] ||
        QS(
          _0x3878d3[_0x168a2a(0x1ed3)],
          Math["floor"](_0x3878d3["x"]),
          Math[_0x168a2a(0x17b0)](_0x3878d3["y"]),
          Math[_0x168a2a(0x17b0)](_0x3878d3["z"]),
        ));
  }
  const _0x295813 = vz(_0x55a9d0);
  ((_0x23ad10["chair"] = {
    x: _0x295813["x"],
    y: _0x295813["y"],
    z: _0x295813["z"],
    yaw: _0x295813[_0x168a2a(0x17d5)],
    id: 0x0,
    meta: 0x0,
    planet: C["EARTH"],
    casino: _0x55a9d0["id"],
  }),
    (_0x23ad10["x"] = _0x295813["x"]),
    (_0x23ad10["y"] = _0x295813["y"]),
    (_0x23ad10["z"] = _0x295813["z"]),
    (_0x23ad10[_0x168a2a(0x17d5)] = _0x295813[_0x168a2a(0x17d5)]),
    (_0x23ad10["pitch"] = 0x0),
    (_0x23ad10[_0x168a2a(0x102)] |= 0x1),
    ke(C[_0x168a2a(0x9e2)], hh(_0x23ad10, !0x0)));
}
function mK(_0x59867d) {
  const _0x5e3182 = _0x5d322a;
  Fs[_0x5e3182(0x1b2)](_0x59867d);
}
function M4(_0x574d6c, _0x12fdd0) {
  const _0x2046e1 = _0x5d322a;
  return (
    _0x574d6c[_0x2046e1(0x174b)] &&
    !_0x574d6c[_0x2046e1(0xe3)] &&
    _0x574d6c[_0x2046e1(0x1ed3)] === C[_0x2046e1(0x9e2)] &&
    _0x574d6c[_0x2046e1(0x1713)] === -0x1 &&
    _0x574d6c["mount"] === void 0x0 &&
    (!_0x574d6c["chair"] ||
      _0x574d6c[_0x2046e1(0x161)][_0x2046e1(0xb11)] === _0x12fdd0["id"]) &&
    Math[_0x2046e1(0x1400)](
      _0x574d6c["x"] - _0x12fdd0["x"],
      _0x574d6c["y"] - _0x12fdd0["y"],
      _0x574d6c["z"] - _0x12fdd0["z"],
    ) <= 4.5 &&
    ln(_0x574d6c, _0x12fdd0["x"], _0x12fdd0["z"]) &&
    et(
      _0x574d6c["x"],
      go(_0x574d6c),
      _0x574d6c["z"],
      _0x12fdd0["x"],
      _0x12fdd0["y"] + 0.8,
      _0x12fdd0["z"],
      C[_0x2046e1(0x9e2)],
    ) &&
    ![...$[_0x2046e1(0x1e01)]()]["some"]((_0x40112a) => {
      const _0x4d9f85 = _0x2046e1;
      var _0xded750;
      return (
        _0x40112a["id"] !== _0x574d6c["id"] &&
        ((_0xded750 = _0x40112a[_0x4d9f85(0x161)]) == null
          ? void 0x0
          : _0xded750[_0x4d9f85(0xb11)]) === _0x12fdd0["id"]
      );
    })
  );
}
function R4(_0x1ff337, _0xb34d88) {
  const _0x3a96e6 = _0x5d322a;
  (jc(_0x1ff337),
    (_0x1ff337[_0x3a96e6(0x161)] = {
      ..._0xb34d88,
      id: 0x0,
      meta: 0x0,
      planet: C["EARTH"],
      casinoFurniture: _0xb34d88["id"],
    }),
    (_0x1ff337["x"] = _0xb34d88["x"]),
    (_0x1ff337["y"] = _0xb34d88["y"]),
    (_0x1ff337["z"] = _0xb34d88["z"]),
    (_0x1ff337["yaw"] = _0xb34d88["yaw"]),
    (_0x1ff337[_0x3a96e6(0x588)] = 0x0),
    (_0x1ff337[_0x3a96e6(0x102)] |= 0x1),
    ke(C[_0x3a96e6(0x9e2)], hh(_0x1ff337, !0x0)));
}
const $l = new Ov(
    {
      seats: () => Hi()["flatMap"](Hg),
      canSit: (_0x775cc0, _0x3dcefb) => M4(_0x775cc0, _0x3dcefb),
      sit: (_0x1d6c80, _0x4fd18a) => R4(_0x1d6c80, _0x4fd18a),
      unseat: (_0xcee187) => {
        const _0x107d88 = _0x5d322a;
        var _0x45c7a5;
        (_0x45c7a5 = _0xcee187["chair"]) != null &&
          _0x45c7a5[_0x107d88(0xb11)] &&
          Os(_0xcee187);
      },
      balance: (_0x3882e7) => rr["get"](_0x3882e7) ?? 0x0,
      credit: (_0x526f47, _0x5cb366) => {
        const _0x9faa28 = _0x5d322a,
          _0x5757d2 = Zr((rr["get"](_0x526f47) ?? 0x0) + _0x5cb366),
          _0x3b2fb1 = St(_0x526f47);
        (rr[_0x9faa28(0x124)](_0x526f47, _0x5757d2),
          (Qu = !0x0),
          _0x3b2fb1 &&
            ie(
              _0x3b2fb1,
              new W(L[_0x9faa28(0x1857)])
                [_0x9faa28(0x1ee5)](
                  Math["min"](0xffffffff, Math[_0x9faa28(0x17b0)](_0x5757d2)),
                )
                [_0x9faa28(0xb27)](_0x5757d2),
            ));
      },
      save: im,
      publish: (_0x127eed) => {
        const _0x464d71 = _0x5d322a,
          _0x3b4f19 = Hi()[_0x464d71(0x8f6)]((_0x3e9cff) =>
            Hg(_0x3e9cff)[_0x464d71(0x129c)](
              (_0x2fe5e4) =>
                _0x2fe5e4[_0x464d71(0x1bbd)] === _0x127eed[_0x464d71(0x1bbd)],
            ),
          );
        for (const _0x469467 of $[_0x464d71(0x1e01)]())
          _0x469467["planet"] === C[_0x464d71(0x9e2)] &&
            (_0x127eed[_0x464d71(0x1e78)][_0x464d71(0x129c)](
              (_0x3d352d) =>
                (_0x3d352d == null
                  ? void 0x0
                  : _0x3d352d[_0x464d71(0x1351)]) ===
                _0x469467[_0x464d71(0x1351)],
            ) ||
              (_0x3b4f19 &&
                Math[_0x464d71(0x1400)](
                  _0x469467["x"] - _0x3b4f19["x"],
                  _0x469467["z"] - _0x3b4f19["z"],
                ) < 0x8c)) &&
            ie(
              _0x469467,
              new W(L[_0x464d71(0x1488)])[_0x464d71(0x438)](
                JSON[_0x464d71(0x8f9)]({
                  type: _0x464d71(0x103a),
                  state: _0x127eed,
                }),
              ),
            );
      },
      reply: (_0x718660, _0x232279) =>
        ie(
          _0x718660,
          new W(L[_0x5d322a(0x1488)])[_0x5d322a(0x438)](
            JSON[_0x5d322a(0x8f9)](_0x232279),
          ),
        ),
    },
    y4,
  ),
  Ey = new AD({
    sites: () => Hi(),
    players: () => [...$[_0x5d322a(0x1e01)]()],
    bot: (_0x4686bb) => Re[_0x5d322a(0x11b7)](_0x4686bb),
    spawnGuard: (
      _0x9c9afc,
      _0x1097ea,
      _0x107f23,
      _0x5e4810,
      _0x578bdd,
      _0x17ad76,
    ) => {
      const _0x4a3617 = _0x5d322a;
      if (Re["size"] >= 0xf0) return null;
      const _0x111b06 = {
        id: Fi++,
        ownerName: l_,
        ownerPid: -0x1,
        planet: C[_0x4a3617(0x9e2)],
        hostile: !0x1,
        npc: !0x0,
        casinoGuard: { site: _0x9c9afc["id"], post: _0x1097ea, alert: 0x0 },
        x: _0x107f23,
        y: _0x5e4810,
        z: _0x578bdd,
        yaw: _0x17ad76 + Math["PI"],
        hp: 0x1f4,
        armor: [],
        targetPid: -0x1,
        targetVehicleId: -0x1,
        reloadT: 0x0,
        fireCd: 0x0,
        mag: 0x1e,
        spawnX: _0x107f23,
        spawnZ: _0x578bdd,
        ...bl(),
      };
      return (
        Re["set"](_0x111b06["id"], _0x111b06),
        $t(Ar(_0x111b06)),
        _0x111b06
      );
    },
    despawn: (_0x589873) => eo(_0x589873, !0x1),
    moveTo: (
      _0x31bd3a,
      _0xe61fc7,
      _0x476100,
      _0x18e985,
      _0x1fd1b6,
      _0x39aa85,
    ) =>
      RW(_0x31bd3a, _0xe61fc7, _0x476100, _0x18e985, _0x1fd1b6, _0x39aa85, 0.3),
    faceTo: (_0x3d5849, _0x563735, _0xb6b9c7) =>
      Es(_0x3d5849, _0x563735, _0xb6b9c7),
    lineOfSight: (_0x94fe9, _0x4839db) =>
      et(
        _0x94fe9["x"],
        _0x94fe9["y"],
        _0x94fe9["z"],
        _0x4839db["x"],
        _0x4839db["y"],
        _0x4839db["z"],
        C["EARTH"],
      ),
    shoot: (_0xbfa06b, _0x48c017, _0x384bc8, _0x490fc4, _0x3692c4) =>
      Od(
        _0xbfa06b,
        _0x48c017,
        _0x384bc8,
        _0x490fc4,
        _0x3692c4,
        A[_0x5d322a(0x16a1)],
      ),
    hurtPlayer: (_0x48a6fb, _0x36b7a4, _0x326927) => {
      const _0x388dec = _0x5d322a,
        _0x583fe1 = $[_0x388dec(0x11b7)](_0x48a6fb["id"]);
      _0x583fe1 != null &&
        _0x583fe1[_0x388dec(0x174b)] &&
        Dn(
          _0x583fe1,
          _0x36b7a4,
          l_,
          _0x388dec(0x6ae),
          _0x388dec(0x5be),
          -0x1,
          void 0x0,
          { x: _0x326927["x"], y: _0x326927["y"] + 1.4, z: _0x326927["z"] },
        );
    },
    warn: (_0x427be8, _0x5f186c, _0x598a4a) => {
      const _0x32bbe8 = _0x5d322a,
        _0x21b461 = _0x427be8,
        _0x44d103 =
          _0x21b461[_0x32bbe8(0x1162)] === "en" ? _0x5f186c : _0x598a4a;
      (ie(_0x21b461, new W(L["S_PROTECTION"])[_0x32bbe8(0x438)](_0x44d103)),
        P(0x2, _0x44d103, _0x21b461));
    },
    changed: (_0x28ff8) => $t(Ar(_0x28ff8)),
  }),
  S4 = ht[_0x5d322a(0x1d54)](qt, _0x5d322a(0x1daa));
function Ml(_0x1538f9 = !0x1) {
  const _0x845769 = _0x5d322a;
  pT(
    S4,
    {
      drops: [...fo[_0x845769(0x1e01)]()]["filter"](
        (_0x55f4b9) => _0x55f4b9[_0x845769(0x58b)],
      ),
      backpacks: [...es[_0x845769(0x1e01)]()]["filter"]((_0x291285) =>
        _0x291285[_0x845769(0xe4e)][_0x845769(0x129c)](
          (_0x58b05a) => _0x58b05a[0x5],
        ),
      ),
    },
    _0x1538f9,
  );
}
try {
  const e = JSON["parse"](_0x4a80b7[_0x5d322a(0x1ebf)](S4, _0x5d322a(0x157e)));
  for (const t of e["drops"] ?? [])
    t[_0x5d322a(0xd2f)] > Date[_0x5d322a(0x1cc6)]() &&
      t[_0x5d322a(0x58b)] &&
      (fo[_0x5d322a(0x124)](t["id"], t),
      (F0 = Math[_0x5d322a(0x1267)](F0, t["id"] + 0x1)));
  for (const t of e["backpacks"] ?? [])
    t[_0x5d322a(0xd2f)] > Date[_0x5d322a(0x1cc6)]() &&
      ((t[_0x5d322a(0xe4e)] = t[_0x5d322a(0xe4e)][_0x5d322a(0x164b)](yn)),
      es[_0x5d322a(0x124)](t["id"], t),
      (Ca = Math[_0x5d322a(0x1267)](Ca, t["id"] + 0x1)));
} catch {}
const Lt = new Map(),
  Qm = new Map(),
  e0 = new Map();
let mO = Date[_0x5d322a(0x1cc6)]();
