// assets__main-Bs7z9e_r 316 — x54f6aa
// Lines 120453-121239 of readable/assets__main-Bs7z9e_r.pretty.js (statement-aligned).
FO["on"]("connection", (_0x2fb6f9, _0xdad6fd) => {
  const _0x371fb1 = _0x5d322a;
  let _0xf6193e = null,
    _0x165942 = !0x1;
  const _0x90845d = new yv();
  let _0x549439 = 0x0;
  const _0x397bdb = DN(_0xdad6fd),
    _0x267ab8 = r0[_0x371fb1(0x11b7)](_0x397bdb) ?? 0x0;
  if (!it && _0x267ab8 >= 0x20) {
    _0x2fb6f9[_0x371fb1(0x958)](0x3f0, _0x371fb1(0xf9));
    return;
  }
  if (
    (r0[_0x371fb1(0x124)](_0x397bdb, _0x267ab8 + 0x1),
    _0x2fb6f9["on"](_0x371fb1(0x958), () => {
      const _0xd131c8 = _0x371fb1,
        _0x4be30b = (r0["get"](_0x397bdb) ?? 0x1) - 0x1;
      _0x4be30b > 0x0
        ? r0["set"](_0x397bdb, _0x4be30b)
        : r0[_0xd131c8(0x1d64)](_0x397bdb);
    }),
    !it &&
      Gt["allowedOrigins"][_0x371fb1(0x18ce)] &&
      _0xdad6fd != null &&
      _0xdad6fd[_0x371fb1(0x1550)]["origin"] &&
      !Gt[_0x371fb1(0xd74)][_0x371fb1(0x1b5e)](
        _0xdad6fd[_0x371fb1(0x1550)]["origin"],
      ))
  ) {
    _0x2fb6f9[_0x371fb1(0x958)](0x3f0, _0x371fb1(0x1a0));
    return;
  }
  if (
    !it &&
    FO[_0x371fb1(0xac3)][_0x371fb1(0xe0d)] > Gt[_0x371fb1(0x9f5)] + 0x20
  ) {
    _0x2fb6f9[_0x371fb1(0x958)](0x3f5, _0x371fb1(0x1887));
    return;
  }
  const _0x1cb466 = it
    ? void 0x0
    : setTimeout(() => {
        const _0x46f81d = _0x371fb1;
        _0xf6193e || _0x2fb6f9[_0x46f81d(0x958)](0x3f0, _0x46f81d(0x946));
      }, 0x2ee0);
  let _0x315567,
    _0x2ef716 = Date[_0x371fb1(0x1cc6)](),
    _0xa9f9d5 = !0x1;
  const _0xea074b = () => {
    const _0x4d682e = _0x371fb1;
    ((_0x2ef716 = Date[_0x4d682e(0x1cc6)]()), (_0xa9f9d5 = !0x1));
  };
  (typeof _0x2fb6f9[_0x371fb1(0xf67)] == _0x371fb1(0x653) &&
    (_0x2fb6f9["on"](_0x371fb1(0x557), _0xea074b),
    (_0x315567 = setInterval(() => {
      const _0x270c60 = _0x371fb1,
        _0x3999cf = Date[_0x270c60(0x1cc6)]() - _0x2ef716;
      if (!(_0x3999cf < $O)) {
        if (!_0xa9f9d5) {
          ((_0xa9f9d5 = !0x0), _0x2fb6f9[_0x270c60(0xf67)]());
          return;
        }
        _0x3999cf < $O + fW ||
          (_0xf6193e &&
            console[_0x270c60(0x38e)](
              _0x270c60(0xc9b) +
                _0xf6193e["name"] +
                _0x270c60(0x1274) +
                Math[_0x270c60(0xa70)](_0x3999cf / 0x3e8) +
                "\x20s,\x20ping\x20unanswered",
            ),
          _0x2fb6f9[_0x270c60(0x1f7f)]());
      }
    }, 0x1388))),
    _0x2fb6f9["on"](_0x371fb1(0x16ff), async (_0xa32971, _0x3303c0) => {
      const _0x54f6aa = _0x371fb1;
      var _0x37ca5a, _0x5b0e5e;
      if ((_0xea074b(), !_0x165942)) {
        if (!it) {
          const _0x42bc61 = _0x3303c0
            ? _0x90845d[_0x54f6aa(0x1c25)](_0xa32971, !!_0xf6193e)
            : _0x54f6aa(0x1732);
          if (_0x42bc61 === _0x54f6aa(0x1732)) {
            _0x2fb6f9[_0x54f6aa(0x958)](0x3f0, _0x54f6aa(0x146d));
            return;
          }
          if (_0x42bc61 === _0x54f6aa(0x789)) {
            _0xa32971[0x0] === L[_0x54f6aa(0xb59)] &&
              _0xf6193e &&
              Date["now"]() - _0x549439 > 0x7d0 &&
              ((_0x549439 = Date[_0x54f6aa(0x1cc6)]()),
              P(
                0x2,
                _0xf6193e["language"] === "en"
                  ? _0x54f6aa(0x17bd)
                  : "Слишком\x20много\x20команд\x20или\x20сообщений.\x20Подождите\x20немного.",
                _0xf6193e,
              ));
            return;
          }
        }
        if (!(!_0x3303c0 && !(_0xa32971 instanceof Uint8Array)))
          try {
            const _0x2d3dfc = new Uint8Array(
              _0xa32971["buffer"],
              _0xa32971[_0x54f6aa(0x1b32)],
              _0xa32971[_0x54f6aa(0x8c5)],
            );
            if (!_0xf6193e) {
              const _0x23f578 = new lc(_0x2d3dfc);
              if (_0x23f578["u8"]() !== L["C_HELLO"]) return;
              let _0x564861 = (_0x23f578["str"]()["trim"]() ||
                _0x54f6aa(0x1c5b))[_0x54f6aa(0x1cf4)](0x0, 0x40);
              const _0x3a8d7a =
                  _0x23f578[_0x54f6aa(0x1c03)]() > 0x0 &&
                  _0x23f578[_0x54f6aa(0x438)]() === "ru"
                    ? "ru"
                    : "en",
                _0x2dc9e1 =
                  _0x23f578[_0x54f6aa(0x1c03)]() > 0x0
                    ? _0x23f578["str"]()["slice"](0x0, 0x80)
                    : "",
                _0x470ac3 =
                  _0x23f578[_0x54f6aa(0x1c03)]() > 0x0
                    ? _0x23f578[_0x54f6aa(0x438)]()[_0x54f6aa(0x1cf4)](
                        0x0,
                        0x80,
                      )
                    : "";
              _0x165942 = !0x0;
              let _0x2b176c;
              try {
                _0x2b176c = await qv(_0x470ac3, _0xdad6fd);
              } catch (_0x5c082b) {
                _0x2fb6f9["close"](
                  0x3f0,
                  (_0x5c082b instanceof Error
                    ? _0x5c082b[_0x54f6aa(0x16ff)]
                    : "Authentication\x20failed")[_0x54f6aa(0x1cf4)](0x0, 0x37),
                );
                return;
              } finally {
                _0x165942 = !0x1;
              }
              const _0x58e446 = performance["now"]();
              if (_0x2fb6f9[_0x54f6aa(0x737)] !== _0x28f931[_0x54f6aa(0xab2)])
                return;
              if (
                (_0x37ca5a =
                  _0x2b176c == null ? void 0x0 : _0x2b176c[_0x54f6aa(0x4cb)]) !=
                  null &&
                _0x37ca5a[_0x54f6aa(0x18ce)]
              ) {
                const _0x26169b = _0x2b176c[_0x54f6aa(0x4cb)][_0x54f6aa(0x3f4)](
                  (_0x3347ee) => pk(_0x3347ee, _0x2b176c["id"]),
                );
                _0x26169b[_0x54f6aa(0x18ce)] &&
                  is(_0x54f6aa(0x1578), {
                    ids: _0x26169b[_0x54f6aa(0x164b)](
                      (_0x120a92) => _0x120a92["id"],
                    ),
                  })[_0x54f6aa(0x1e49)](() => {});
              }
              _0x2b176c
                ? ((_0x564861 = _0x2b176c[_0x54f6aa(0x949)]),
                  mi[_0x54f6aa(0x124)](
                    _0x564861,
                    new Set(_0x2b176c[_0x54f6aa(0xf6b)] ?? []),
                  ),
                  cs["merge"](_0x2b176c[_0x54f6aa(0x1793)] ?? []))
                : A8(_0x564861) &&
                  (_0x564861 = g8(
                    Math[_0x54f6aa(0x17b0)](Math[_0x54f6aa(0xf8b)]() * 0xf4240),
                  ));
              const _0xae2c6b = [...$[_0x54f6aa(0x1e01)]()][_0x54f6aa(0x8f6)](
                (_0x2eab1b) =>
                  _0x2eab1b[_0x54f6aa(0x1351)][_0x54f6aa(0x673)]() ===
                  _0x564861[_0x54f6aa(0x673)](),
              );
              if (_0xae2c6b) {
                if (!_0x2dc9e1 || _0xae2c6b[_0x54f6aa(0xcaf)] !== _0x2dc9e1) {
                  _0x2fb6f9[_0x54f6aa(0x958)](
                    0x3f0,
                    Ed(_0x54f6aa(0x72c), _0x3a8d7a),
                  );
                  return;
                }
                (console[_0x54f6aa(0x38e)](
                  _0x54f6aa(0xc9b) +
                    _0xae2c6b[_0x54f6aa(0x1351)] +
                    "\x20rejoined\x20over\x20its\x20own\x20live\x20session",
                ),
                  aE(_0xae2c6b),
                  _0xae2c6b["ws"][_0x54f6aa(0x958)](0xfa0, _0x54f6aa(0xe84)));
              }
              if ($["size"] >= Gt[_0x54f6aa(0x9f5)]) {
                _0x2fb6f9["close"](0x3f0, _0x54f6aa(0xd88));
                return;
              }
              _0x1cb466 && clearTimeout(_0x1cb466);
              let _0x155452 = ar[_0x54f6aa(0x11b7)](_0x564861);
              if (
                (_0x155452 &&
                  (!Number["isFinite"](_0x155452["y"]) ||
                    !bt(Ge, _0x155452["x"], _0x155452["z"], 0.4)) &&
                  (_0x155452 = {
                    ..._0x155452,
                    x: wt["x"],
                    y: wt["y"],
                    z: wt["z"],
                    planet: C["EARTH"],
                    vehicleId: -0x1,
                  }),
                (_0xf6193e = {
                  id: w$++,
                  name: _0x564861,
                  ws: _0x2fb6f9,
                  identity: _0x2b176c,
                  httpSessionToken: _0x2b176c ? ch() : void 0x0,
                  sessionToken: _0x2dc9e1 || void 0x0,
                  x: (_0x155452 == null ? void 0x0 : _0x155452["x"]) ?? wt["x"],
                  y: (_0x155452 == null ? void 0x0 : _0x155452["y"]) ?? wt["y"],
                  z: (_0x155452 == null ? void 0x0 : _0x155452["z"]) ?? wt["z"],
                  yaw:
                    (_0x155452 == null
                      ? void 0x0
                      : _0x155452[_0x54f6aa(0x17d5)]) ?? 0x0,
                  pitch: 0x0,
                  held: 0x0,
                  flags: 0x0,
                  hp: X0,
                  maxHp: X0,
                  armor: [0x0, 0x0, 0x0, 0x0],
                  helmetModule: 0x0,
                  helmetModuleDurability: 0x0,
                  alive: !0x0,
                  fly:
                    (_0x155452 == null ? void 0x0 : _0x155452["fly"]) ?? !0x1,
                  god:
                    (_0x155452 == null ? void 0x0 : _0x155452["god"]) ?? !0x1,
                  ping: 0x0,
                  vehicle: -0x1,
                  creative:
                    (_0x155452 == null ? void 0x0 : _0x155452["creative"]) ??
                    !0x1,
                  xp: Ta[_0x54f6aa(0x11b7)](_0x564861) ?? 0x0,
                  openFurnace: null,
                  language: _0x3a8d7a,
                  planet:
                    (_0x155452 == null
                      ? void 0x0
                      : _0x155452[_0x54f6aa(0x1ed3)]) === C[_0x54f6aa(0x465)]
                      ? C[_0x54f6aa(0x465)]
                      : C["EARTH"],
                }),
                _s(_0xf6193e, _0x54f6aa(0x696)) ||
                  (_0xf6193e[_0x54f6aa(0x1237)] = !0x1),
                _s(_0xf6193e, _0x54f6aa(0x1edd)) || (_0xf6193e["god"] = !0x1),
                _s(_0xf6193e, "player.creative") ||
                  (_0xf6193e[_0x54f6aa(0x1ec2)] = !0x1),
                _0x2b176c != null &&
                  _0x2b176c["trusted"] &&
                  _0x2b176c[_0x54f6aa(0x2b5)])
              ) {
                const _0x1e1dfa = D1(_0xf6193e);
                us[_0x54f6aa(0xf9f)](_0x2b176c["id"], _0x1e1dfa);
                const _0x3fb4e2 = TM(_0x1e1dfa, _0x2b176c[_0x54f6aa(0x2b5)]);
                (us[_0x54f6aa(0xb94)](
                  _0x2b176c["id"],
                  _0x3fb4e2,
                  _0x1e1dfa,
                  _0x1e1dfa,
                ),
                  us[_0x54f6aa(0x1912)](),
                  (_0xf6193e["xp"] = _0x3fb4e2["xp"]),
                  Ta[_0x54f6aa(0x124)](_0x564861, _0x3fb4e2["xp"]));
                const _0x1160be = vE(_0x3fb4e2["skills"]),
                  _0x50248f = Zo["get"](_0x564861);
                (_0x50248f
                  ? ((_0x50248f["xp"] = _0x1160be["xp"]),
                    (_0x50248f[_0x54f6aa(0xc89)] = _0x1160be[_0x54f6aa(0xc89)]))
                  : Zo[_0x54f6aa(0x124)](_0x564861, _0x1160be),
                  Vf["delete"](_0x564861),
                  (Sa = zl = !0x0));
              }
              if (!Yc[_0x54f6aa(0x448)](_0x564861)) {
                if (Yc[_0x54f6aa(0xe0d)] >= 0x200) {
                  const _0x32e134 = [...Yc["keys"]()]["find"](
                    (_0x22a443) => !St(_0x22a443),
                  );
                  _0x32e134 && Yc[_0x54f6aa(0x1d64)](_0x32e134);
                }
                const _0x84b975 = new Vh(0x7, 1.05);
                (_0x84b975["take"](6.75),
                  Yc[_0x54f6aa(0x124)](_0x564861, _0x84b975));
              }
              ($[_0x54f6aa(0x124)](_0xf6193e["id"], _0xf6193e),
                zp(_0xf6193e),
                _0x155452 != null &&
                  _0x155452["vanished"] &&
                  _s(_0xf6193e, "player.vanish") &&
                  ((_0xf6193e[_0x54f6aa(0xe43)] = !0x0), rm++),
                mk());
              const _0x113f5a = NK(_0xf6193e, _0x155452);
              if (
                (_0x113f5a &&
                  (_0xf6193e["planet"] =
                    _0x113f5a[_0x54f6aa(0x1713)][_0x54f6aa(0x1ed3)] ??
                    _0xf6193e["planet"]),
                !_0x113f5a &&
                  ((_0x155452 == null
                    ? void 0x0
                    : _0x155452[_0x54f6aa(0x171a)]) ?? -0x1) >= 0x0)
              ) {
                const _0x49c72 = Ce(_0xf6193e["planet"])[_0x54f6aa(0x1fea)](
                  _0xf6193e["x"],
                  _0xf6193e["z"],
                  Pe - 0x2,
                );
                _0x49c72 !== -0x1 / 0x0 &&
                  _0xf6193e["y"] > _0x49c72 + 0x3 &&
                  (_0xf6193e["y"] = _0x49c72);
              }
              for (const _0x9e7c37 of ee["values"]())
                _0x9e7c37[_0x54f6aa(0x1b8)] === _0xf6193e[_0x54f6aa(0x1351)] &&
                  (_0x9e7c37["owner"] = _0xf6193e["id"]);
              for (const _0x541a37 of hn[_0x54f6aa(0x1e01)]())
                _0x541a37[_0x54f6aa(0x1b8)] === _0xf6193e[_0x54f6aa(0x1351)] &&
                  (_0x541a37[_0x54f6aa(0xca5)] = _0xf6193e["id"]);
              for (const [_0x37019b, _0x4f1f56] of Hs) {
                const _0x5036ad = ee[_0x54f6aa(0x11b7)](_0x37019b),
                  _0xbb014e = ee[_0x54f6aa(0x11b7)](_0x4f1f56);
                _0x5036ad &&
                  _0xbb014e &&
                  (_0x5036ad["planet"] ?? C[_0x54f6aa(0x9e2)]) ===
                    _0xf6193e[_0x54f6aa(0x1ed3)] &&
                  (_0xbb014e[_0x54f6aa(0x1ed3)] ?? C["EARTH"]) ===
                    _0xf6193e[_0x54f6aa(0x1ed3)] &&
                  ie(
                    _0xf6193e,
                    new W(L[_0x54f6aa(0xdb5)])
                      [_0x54f6aa(0x1ac4)](_0x37019b)
                      ["u16"](_0x4f1f56),
                  );
              }
              for (const _0x3b5bfe of Re["values"]())
                _0x3b5bfe[_0x54f6aa(0x1b8)] === _0xf6193e["name"] &&
                  (_0x3b5bfe[_0x54f6aa(0x1fb2)] = _0xf6193e["id"]);
              const _0x366e62 = new W(L["S_WELCOME"]);
              (_0x366e62[_0x54f6aa(0x1ac4)](_0xf6193e["id"])
                ["f32"](_0xf6193e["x"])
                [_0x54f6aa(0x416)](_0xf6193e["y"])
                ["f32"](_0xf6193e["z"])
                ["u32"](B["time"])
                [_0x54f6aa(0x1ee5)](B[_0x54f6aa(0x1f4f)])
                ["u8"](_0xf6193e[_0x54f6aa(0x1ed3)]),
                ie(_0xf6193e, _0x366e62),
                ie(_0xf6193e, Kp()),
                ie(_0xf6193e, wf()),
                _0xf6193e[_0x54f6aa(0x1ec2)] &&
                  ie(_0xf6193e, new W(L[_0x54f6aa(0x1b4f)])["u8"](0x1)),
                ie(
                  _0xf6193e,
                  new W(L[_0x54f6aa(0x1676)])["u8"](
                    _0xf6193e["fly"] ? 0x1 : 0x0,
                  ),
                ),
                ie(
                  _0xf6193e,
                  new W(L["S_BALANCE"])
                    [_0x54f6aa(0x1ee5)](Math[_0x54f6aa(0x17b0)](xt(_0xf6193e)))
                    ["f64"](xt(_0xf6193e)),
                ),
                ie(
                  _0xf6193e,
                  new W(L[_0x54f6aa(0x1aaf)])["u8"](Of ? 0x1 : 0x0),
                ),
                yI(_0xf6193e),
                qf(_0xf6193e));
              for (const _0x48fc33 of $["values"]())
                _0x48fc33 !== _0xf6193e &&
                  ie(
                    _0xf6193e,
                    new W(L[_0x54f6aa(0x1f5f)])
                      [_0x54f6aa(0x1ac4)](_0x48fc33["id"])
                      [_0x54f6aa(0x438)](_0x48fc33[_0x54f6aa(0x1351)])
                      [_0x54f6aa(0x1ee5)](_0x48fc33["xp"])
                      ["u32"](_0x48fc33[_0x54f6aa(0x1b13)] ?? 0x0),
                  );
              oE = !0x0;
              for (const _0x3029d9 of $[_0x54f6aa(0x1e01)]())
                if (
                  _0x3029d9[_0x54f6aa(0xe2f)] &&
                  _0x3029d9[_0x54f6aa(0x1ed3)] === _0xf6193e[_0x54f6aa(0x1ed3)]
                ) {
                  const _0x5e3e41 =
                    Date[_0x54f6aa(0x1cc6)]() -
                    _0x3029d9[_0x54f6aa(0xe2f)][_0x54f6aa(0x1a32)];
                  _0x5e3e41 <
                    (((_0x5b0e5e = _S(
                      _0x3029d9[_0x54f6aa(0xe2f)][_0x54f6aa(0xb9d)],
                    )) == null
                      ? void 0x0
                      : _0x5b0e5e[_0x54f6aa(0x1772)]) ?? 0x0) *
                      0x3e8 &&
                    ie(
                      _0xf6193e,
                      Qf(
                        _0x3029d9,
                        0x0,
                        _0x3029d9[_0x54f6aa(0xe2f)][_0x54f6aa(0xb9d)],
                        _0x5e3e41,
                      ),
                    );
                }
              for (const _0x13ef39 of $["values"]())
                _0x13ef39[_0x54f6aa(0x11e9)] &&
                  _0x13ef39[_0x54f6aa(0x1ed3)] ===
                    _0xf6193e[_0x54f6aa(0x1ed3)] &&
                  Date["now"]() - _0x13ef39["inspectStart"] < 0xc80 &&
                  ie(
                    _0xf6193e,
                    Qf(
                      _0x13ef39,
                      0x4,
                      0xc80,
                      Date["now"]() - _0x13ef39["inspectStart"],
                    ),
                  );
              for (const _0xa013f3 of $[_0x54f6aa(0x1e01)]())
                _0xa013f3 !== _0xf6193e &&
                  _0xa013f3[_0x54f6aa(0x1ed3)] ===
                    _0xf6193e[_0x54f6aa(0x1ed3)] &&
                  _0xa013f3[_0x54f6aa(0x161)] &&
                  ie(_0xf6193e, hh(_0xa013f3, !0x0));
              for (const _0x126627 of ee[_0x54f6aa(0x1e01)]())
                if (
                  (_0x126627["planet"] ?? C[_0x54f6aa(0x9e2)]) ===
                  _0xf6193e[_0x54f6aa(0x1ed3)]
                ) {
                  if (
                    (ie(_0xf6193e, th(_0x126627)),
                    ie(_0xf6193e, zt(_0x126627)),
                    _0x126627[_0x54f6aa(0x30c)] !== -0x1)
                  ) {
                    const _0x1d7f78 = $[_0x54f6aa(0x11b7)](
                      _0x126627[_0x54f6aa(0x30c)],
                    );
                    ie(
                      _0xf6193e,
                      new W(L[_0x54f6aa(0x334)])
                        [_0x54f6aa(0x1ac4)](_0x126627["id"])
                        [_0x54f6aa(0x1ac4)](_0x126627[_0x54f6aa(0x30c)])
                        ["u8"](0x0)
                        [_0x54f6aa(0x438)](
                          (_0x1d7f78 == null
                            ? void 0x0
                            : _0x1d7f78[_0x54f6aa(0x1351)]) ??
                            _0x126627[_0x54f6aa(0x1b8)],
                        ),
                    );
                  }
                  for (
                    let _0x5ab273 = 0x0;
                    _0x5ab273 < _0x126627[_0x54f6aa(0x16a6)][_0x54f6aa(0x18ce)];
                    _0x5ab273++
                  ) {
                    const _0x1e7be7 = $[_0x54f6aa(0x11b7)](
                      _0x126627[_0x54f6aa(0x16a6)][_0x5ab273],
                    );
                    ie(
                      _0xf6193e,
                      new W(L["S_VEH_ENTER"])
                        [_0x54f6aa(0x1ac4)](_0x126627["id"])
                        [_0x54f6aa(0x1ac4)](
                          _0x126627[_0x54f6aa(0x16a6)][_0x5ab273],
                        )
                        ["u8"](
                          bi(
                            _0x126627,
                            _0x126627[_0x54f6aa(0x16a6)][_0x5ab273],
                          ),
                        )
                        [_0x54f6aa(0x438)](
                          (_0x1e7be7 == null ? void 0x0 : _0x1e7be7["name"]) ??
                            _0x126627[_0x54f6aa(0x1b8)],
                        ),
                    );
                  }
                }
              _0xf6193e[_0x54f6aa(0x1ed3)] === C[_0x54f6aa(0x9e2)] &&
                fz(_0xf6193e);
              for (const _0xc9783e of hn[_0x54f6aa(0x1e01)]())
                _0xc9783e[_0x54f6aa(0x1ed3)] === _0xf6193e[_0x54f6aa(0x1ed3)] &&
                  ie(_0xf6193e, qs(_0xc9783e));
              for (const _0x3d2db1 of Re[_0x54f6aa(0x1e01)]())
                _0x3d2db1[_0x54f6aa(0x1ed3)] === _0xf6193e["planet"] &&
                  !_0x3d2db1[_0x54f6aa(0xabb)] &&
                  ie(_0xf6193e, Ar(_0x3d2db1));
              for (const _0x7ec6f8 of $[_0x54f6aa(0x1e01)]())
                _0x7ec6f8[_0x54f6aa(0xe3)] &&
                  _0x7ec6f8[_0x54f6aa(0x1ed3)] ===
                    _0xf6193e[_0x54f6aa(0x1ed3)] &&
                  ie(_0xf6193e, b4(_0x7ec6f8));
              if (_0xf6193e[_0x54f6aa(0x1ed3)] === C[_0x54f6aa(0x9e2)]) {
                for (const _0x621e26 of Bt["values"]())
                  (ie(_0xf6193e, cT(_0x621e26)),
                    _0x621e26["rider"] !== void 0x0 &&
                      ie(
                        _0xf6193e,
                        new W(L[_0x54f6aa(0x1ef)])
                          [_0x54f6aa(0x1ac4)](_0x621e26["id"])
                          [_0x54f6aa(0x1ac4)](_0x621e26[_0x54f6aa(0x1891)]),
                      ));
              }
              (om(_0xf6193e),
                Oe &&
                  _0xf6193e[_0x54f6aa(0x1ed3)] === C["EARTH"] &&
                  (ie(
                    _0xf6193e,
                    new W(L["S_RAID_ZONE"])
                      ["u8"](0x1)
                      [_0x54f6aa(0x416)](Oe["centerX"])
                      [_0x54f6aa(0x416)](Oe["centerZ"])
                      [_0x54f6aa(0x416)](Oe["radius"]),
                  ),
                  (Jn(_0xf6193e["x"], _0xf6193e["z"]) ||
                    Oe[_0x54f6aa(0x999)]["has"](_0xf6193e["name"])) &&
                    (Yu(_0xf6193e),
                    zI(_0xf6193e),
                    Ac(
                      _0xf6193e["id"],
                      _0x54f6aa(0x87e),
                      cr[_0x54f6aa(0xcf5)](_0xf6193e["language"] === "en"),
                    ),
                    (Oe[_0x54f6aa(0x131f)][_0x54f6aa(0x4e0)] ||
                      Oe[_0x54f6aa(0x131f)][_0x54f6aa(0x6d8)] > 0x0) &&
                      Ac(
                        _0xf6193e["id"],
                        "raid-choice",
                        Oe["overtime"][_0x54f6aa(0xcf5)](
                          _0xf6193e[_0x54f6aa(0x1162)] === "en",
                          _0xf6193e["name"],
                        ),
                      ))));
              const _0x42a010 = Date[_0x54f6aa(0x1cc6)]();
              for (const [_0x455837, _0x44d4d4] of _0xf6193e["planet"] ===
              C["EARTH"]
                ? Sc
                : []) {
                const _0x3d2d30 = Math[_0x54f6aa(0xe53)](
                  (_0x44d4d4["expiresAt"] - _0x42a010) / 0x3e8,
                );
                _0x3d2d30 > 0x0 &&
                  ie(
                    _0xf6193e,
                    Ry(
                      0x1,
                      _0x455837,
                      _0x44d4d4["x"],
                      _0x44d4d4["z"],
                      _0x44d4d4[_0x54f6aa(0xde9)],
                      _0x3d2d30,
                    ),
                  );
              }
              (_0xf6193e[_0x54f6aa(0x1ed3)] === C[_0x54f6aa(0x9e2)] &&
                (sT(_0xf6193e), Ws(_0xf6193e)),
                jt == null ||
                  jt[_0x54f6aa(0x1ef8)]({
                    id: _0xf6193e["id"],
                    name: _0xf6193e["name"],
                    x: _0xf6193e["x"],
                    y: _0xf6193e["y"],
                    z: _0xf6193e["z"],
                    alive: _0xf6193e["alive"],
                    creative: _0xf6193e[_0x54f6aa(0x1ec2)],
                    language: _0xf6193e[_0x54f6aa(0x1162)],
                  }));
              for (const _0x4f9d48 of fo["values"]())
                _0x4f9d48[_0x54f6aa(0x1ed3)] === _0xf6193e["planet"] &&
                  ie(_0xf6193e, ky(_0x4f9d48));
              for (const _0x2d7fb7 of ci[_0x54f6aa(0x18e7)][
                _0x54f6aa(0x1e01)
              ]())
                (_0x2d7fb7[_0x54f6aa(0x1ed3)] ===
                  _0xf6193e[_0x54f6aa(0x1ed3)] ||
                  _0x2d7fb7[_0x54f6aa(0xca5)] ===
                    _0xf6193e[_0x54f6aa(0x1351)]) &&
                  ie(_0xf6193e, gm(_0x2d7fb7));
              for (const _0x222ae5 of Yf["openIn"](
                _0xf6193e[_0x54f6aa(0x1ed3)],
              ))
                ie(
                  _0xf6193e,
                  yT(_0x222ae5["x"], _0x222ae5["y"], _0x222ae5["z"], !0x0),
                );
              for (const _0x542983 of es[_0x54f6aa(0x1e01)]())
                _0x542983[_0x54f6aa(0x1ed3)] === _0xf6193e[_0x54f6aa(0x1ed3)] &&
                  ie(_0xf6193e, MT(_0x542983));
              en(
                new W(L[_0x54f6aa(0x1f5f)])
                  [_0x54f6aa(0x1ac4)](_0xf6193e["id"])
                  ["str"](_0xf6193e[_0x54f6aa(0x1351)])
                  [_0x54f6aa(0x1ee5)](_0xf6193e["xp"])
                  ["u32"](_0xf6193e["movementEpoch"] ?? 0x0),
                _0xf6193e,
              );
              for (const _0x5d11a5 of $[_0x54f6aa(0x1e01)]())
                _0x5d11a5 !== _0xf6193e &&
                  _0x5d11a5["disguise"] &&
                  ie(_0xf6193e, AT(_0x5d11a5));
              (_0x113f5a &&
                je(
                  _0x113f5a["vehicle"],
                  new W(L["S_VEH_ENTER"])
                    [_0x54f6aa(0x1ac4)](_0x113f5a[_0x54f6aa(0x1713)]["id"])
                    ["u16"](_0xf6193e["id"])
                    ["u8"](_0x113f5a["seat"])
                    [_0x54f6aa(0x438)](_0xf6193e[_0x54f6aa(0x1351)]),
                ),
                ie(
                  _0xf6193e,
                  new W(L["S_PROGRESS"])
                    [_0x54f6aa(0x1ac4)](_0xf6193e["id"])
                    [_0x54f6aa(0x1ee5)](_0xf6193e["xp"]),
                ),
                ie(
                  _0xf6193e,
                  new W(L[_0x54f6aa(0xf87)])["str"](
                    JSON["stringify"](
                      Zo[_0x54f6aa(0x11b7)](_0xf6193e[_0x54f6aa(0x1351)]) ?? {
                        xp: {},
                        stats: {},
                      },
                    ),
                  ),
                ));
              {
                const _0x2236f4 = Ke[_0x54f6aa(0x11b7)](
                    _0xf6193e[_0x54f6aa(0x1351)],
                  ),
                  _0x4d66bd =
                    _0x2236f4 ??
                    Array[_0x54f6aa(0x1a89)]({ length: 0x28 }, () => [
                      0x0, 0x0, 0x0, 0x0, 0x0,
                    ]);
                for (; _0x4d66bd[_0x54f6aa(0x18ce)] < 0x28;)
                  _0x4d66bd[_0x54f6aa(0x124b)]([0x0, 0x0, 0x0, 0x0, 0x0]);
                _0x2236f4 ||
                  (Ke[_0x54f6aa(0x124)](
                    _0xf6193e[_0x54f6aa(0x1351)],
                    _0x4d66bd,
                  ),
                  Yn(_0xf6193e[_0x54f6aa(0x1351)], 0x0));
                const _0x571066 = new W(L["S_INV_LOAD"]);
                _0x571066["u8"](_0x4d66bd[_0x54f6aa(0x18ce)]);
                for (const _0x3d02f5 of _0x4d66bd) {
                  const [
                    _0x1baf8b,
                    _0x31f4ac,
                    _0x160dbc,
                    _0x1412d3,
                    _0x55ddfb,
                  ] = yn(_0x3d02f5);
                  _0x571066["u16"](_0x1baf8b)
                    [_0x54f6aa(0x1ac4)](_0x31f4ac)
                    [_0x54f6aa(0x1ac4)](_0x160dbc ?? 0x0)
                    [_0x54f6aa(0x1ac4)](_0x1412d3 ?? 0x0)
                    ["u16"](_0x55ddfb ?? 0xffff);
                }
                const [_0x159fb6, _0x250e8e] = EI(
                  Ns[_0x54f6aa(0x11b7)](_0xf6193e["name"]) ?? 0x0,
                );
                (_0x571066[_0x54f6aa(0x1ee5)](_0x159fb6)
                  [_0x54f6aa(0x1ee5)](_0x250e8e)
                  [_0x54f6aa(0x1ee5)](
                    Lt[_0x54f6aa(0x11b7)](_0xf6193e["name"]) ?? 0x0,
                  )
                  [_0x54f6aa(0x438)](my(_0x4d66bd)),
                  ie(_0xf6193e, _0x571066),
                  Ll(_0xf6193e, _0x4d66bd),
                  (_0xf6193e["hp"] = _0xf6193e[_0x54f6aa(0x107e)]),
                  Ci(_0xf6193e));
              }
              for (const _0x1f9dc3 of $[_0x54f6aa(0x1e01)]())
                (_0x1f9dc3 !== _0xf6193e && ie(_0xf6193e, Kl(_0x1f9dc3)),
                  ie(_0xf6193e, d4(_0x1f9dc3)));
              if ((pc(_0xf6193e), he)) {
                (he[_0x54f6aa(0x1d54)](
                  _0xf6193e["id"],
                  _0xf6193e[_0x54f6aa(0x1351)],
                ),
                  bk(_0xf6193e),
                  gE[_0x54f6aa(0x124)](
                    _0xf6193e["id"],
                    he["teamOfPlayer"](_0xf6193e["id"]),
                  ));
                for (const _0x19ee51 of Re[_0x54f6aa(0x1e01)]())
                  _0x19ee51[_0x54f6aa(0xabb)] &&
                    ie(_0xf6193e, tx(_0x19ee51, _0xf6193e));
              }
              (_0xf6193e[_0x54f6aa(0xe43)] &&
                P(0x1, _0x54f6aa(0x1360), _0xf6193e),
                P(0x1, _0x54f6aa(0x16d), _0xf6193e),
                _0x2b176c != null &&
                  _0x2b176c[_0x54f6aa(0x84e)] &&
                  P(
                    0x2,
                    _0xf6193e[_0x54f6aa(0x1162)] === "en"
                      ? _0x54f6aa(0x9f4) +
                          _0x2b176c[_0x54f6aa(0x949)] +
                          _0x54f6aa(0x1c05)
                      : _0x54f6aa(0x188f) +
                          _0x2b176c[_0x54f6aa(0x949)] +
                          _0x54f6aa(0x17b2),
                    _0xf6193e,
                  ));
              {
                const _0x3a411a = gz();
                _0x3a411a && ie(_0xf6193e, _0x3a411a);
              }
              (console[_0x54f6aa(0x38e)](
                _0x54f6aa(0xc06) +
                  _0xf6193e[_0x54f6aa(0x1351)] +
                  "\x20(#" +
                  _0xf6193e["id"] +
                  "),\x20online:\x20" +
                  $[_0x54f6aa(0xe0d)],
              ),
                rh["span"](
                  _0x54f6aa(0x1d54),
                  performance[_0x54f6aa(0x1cc6)]() - _0x58e446,
                ));
              return;
            }
            const _0x37fd10 = performance["now"]();
            try {
              if (_0x2d3dfc[0x0] === L[_0x54f6aa(0x168b)]) {
                YT(_0xf6193e) ||
                  Am[_0x54f6aa(0x831)](_0xf6193e, _0x2d3dfc, (_0x307d38) =>
                    ie(_0xf6193e, _0x307d38),
                  );
                return;
              }
              if (_0x2d3dfc[0x0] === L[_0x54f6aa(0x3b6)]) {
                const _0x170379 = _0xf6193e;
                mh[_0x54f6aa(0x831)](_0x170379, _0x2d3dfc, (_0x1694e3) =>
                  ie(_0x170379, _0x1694e3),
                );
                return;
              }
              ((_0xf6193e["killingCosmetic"] =
                [L[_0x54f6aa(0x17b3)], L[_0x54f6aa(0x2057)]][_0x54f6aa(0x1b5e)](
                  _0x2d3dfc[0x0],
                ) && _0xf6193e[_0x54f6aa(0x1713)] === -0x1
                  ? Ju(_0xf6193e)
                  : void 0x0),
                (_0xf6193e[_0x54f6aa(0x1fff)] = !0x0));
              try {
                FU(_0xf6193e, _0x2d3dfc);
              } finally {
                ((_0xf6193e[_0x54f6aa(0xd2a)] = void 0x0),
                  (_0xf6193e[_0x54f6aa(0x1fff)] = !0x1));
              }
            } finally {
              rh[_0x54f6aa(0xc74)](
                hY[_0x2d3dfc[0x0]] ?? _0x54f6aa(0x1de9) + _0x2d3dfc[0x0],
                performance[_0x54f6aa(0x1cc6)]() - _0x37fd10,
              );
            }
          } catch (_0x3a719f) {
            (console[_0x54f6aa(0x1734)](
              "Packet\x20processing\x20error:",
              _0x3a719f,
            ),
              it || _0x2fb6f9["close"](0x3f0, _0x54f6aa(0xc1d)));
          }
      }
    }),
    _0x2fb6f9["on"]("close", () => {
      (_0x1cb466 && clearTimeout(_0x1cb466),
        _0x315567 && clearInterval(_0x315567),
        _0xf6193e && aE(_0xf6193e));
    }),
    _0x2fb6f9["on"](_0x371fb1(0x1734), () => _0x2fb6f9[_0x371fb1(0x958)]()));
});
