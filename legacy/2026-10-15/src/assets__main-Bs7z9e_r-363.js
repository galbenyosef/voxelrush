// assets__main-Bs7z9e_r 363 — x6ddfad
// Lines 143844-144192 of readable/assets__main-Bs7z9e_r.pretty.js (statement-aligned).
for (const e of ee[_0x5d322a(0x1e01)]())
  e["radioModule"] &&
    Cl(e["type"]) &&
    !Io[_0x5d322a(0x448)](e["id"]) &&
    !ir((Lw = e[_0x5d322a(0x933)]) == null ? void 0x0 : Lw[_0x5d322a(0x42a)]) &&
    !dh(e) &&
    (e["remoteOrder"] = dm(e));
function ph() {
  const _0x272a38 = _0x5d322a,
    _0x28fc35 = Oe,
    _0x3ce419 = new Set(
      [...hn[_0x272a38(0x1e01)]()]
        ["filter"]((_0x3bf2c6) => {
          const _0xa1a388 = _0x272a38;
          var _0x422212;
          return (
            _0x28fc35 &&
            (_0x28fc35[_0xa1a388(0x1187)][_0xa1a388(0x448)](
              _0x3bf2c6[_0xa1a388(0x19e3)],
            ) ||
              ((_0x422212 = pr[_0xa1a388(0x11b7)](_0x3bf2c6["id"])) == null
                ? void 0x0
                : _0x422212[_0xa1a388(0x87e)]) === _0x28fc35)
          );
        })
        [_0x272a38(0x164b)]((_0x14a39d) => _0x14a39d["id"]),
    ),
    _0x42ea75 = new Set(
      _0x28fc35
        ? [
            ..._0x28fc35[_0x272a38(0x5af)],
            ..._0x28fc35[_0x272a38(0x1dc0)],
            ...cr[_0x272a38(0x1e0a)](),
          ]
        : [],
    ),
    _0x21ce23 = {
      savedAt: Date[_0x272a38(0x1cc6)](),
      tick: fe,
      raid: _0x28fc35,
      recoveryRemaining: ga ? Lp : 0xb4,
      vehicles: [...ee[_0x272a38(0x1e01)]()]
        [_0x272a38(0x3f4)]((_0x15cb2a) =>
          _0x28fc35 == null
            ? void 0x0
            : _0x28fc35[_0x272a38(0x1187)][_0x272a38(0x448)](_0x15cb2a["id"]),
        )
        [_0x272a38(0x164b)](
          ({ hitHistory: _0x329bc5, damageBy: _0x257036, ..._0x4ee1c9 }) =>
            _0x4ee1c9,
        ),
      bots: [...Re[_0x272a38(0x1e01)]()][_0x272a38(0x3f4)]((_0x468f94) =>
        _0x42ea75["has"](_0x468f94["id"]),
      ),
      objectives: _0x28fc35
        ? cr[_0x272a38(0x594)]()
        : { task: void 0x0, rotation: 0x0 },
      projectiles: [...hn["values"]()][_0x272a38(0x3f4)]((_0x3db650) =>
        _0x3ce419[_0x272a38(0x448)](_0x3db650["id"]),
      ),
      booms: Lr["filter"](
        (_0x4cfeaf) =>
          _0x4cfeaf[_0x272a38(0x2064)] !== void 0x0 &&
          _0x3ce419[_0x272a38(0x448)](_0x4cfeaf[_0x272a38(0x2064)]),
      )[_0x272a38(0x164b)](({ nuclearRaid: _0x51869e, ..._0xe5ca43 }) => ({
        ..._0xe5ca43,
        nuclear: _0x51869e === _0x28fc35,
      })),
      markers: [...Sc]["filter"](([_0x2ecc7e]) =>
        _0x3ce419[_0x272a38(0x448)](_0x2ecc7e),
      ),
      nuclear: [...pr]
        [_0x272a38(0x3f4)](([_0x30744e]) => _0x3ce419["has"](_0x30744e))
        [_0x272a38(0x164b)](
          ([_0x4bc47f, { raid: _0x525fcb, ..._0x523884 }]) => [
            _0x4bc47f,
            _0x523884,
          ],
        ),
    };
  nF(NI, _0x21ce23);
}
function Ez(_0x487d6b) {
  const _0x213bb0 = _0x5d322a;
  for (const _0x4863e6 of Ff) {
    const _0x57f08d = hn[_0x213bb0(0x11b7)](_0x4863e6);
    _0x57f08d &&
      ((_0x57f08d["bornAt"] += _0x487d6b),
      (_0x57f08d[_0x213bb0(0x14d7)] += _0x487d6b));
    const _0x2c7464 = pr[_0x213bb0(0x11b7)](_0x4863e6);
    _0x2c7464 &&
      ((_0x2c7464["bornAt"] += _0x487d6b), (_0x2c7464["until"] += _0x487d6b));
    const _0x613797 = Sc[_0x213bb0(0x11b7)](_0x4863e6);
    _0x613797 && (_0x613797["expiresAt"] += _0x487d6b);
  }
  for (const _0x1f7f25 of Lr)
    _0x1f7f25["projectileId"] !== void 0x0 &&
      Ff[_0x213bb0(0x448)](_0x1f7f25[_0x213bb0(0x2064)]) &&
      (_0x1f7f25["time"] += _0x487d6b);
}
function uY() {
  const _0x6ddfad = _0x5d322a;
  try {
    const _0x506936 = $c;
    if (!(_0x506936 != null && _0x506936[_0x6ddfad(0x87e)])) return;
    if (!$a || ct === _0x6ddfad(0x15d5)) {
      ph();
      return;
    }
    const _0x6b98a6 = _0x506936[_0x6ddfad(0x87e)];
    if (
      !(_0x6b98a6[_0x6ddfad(0x1b33)] in nT) ||
      ![
        _0x6b98a6[_0x6ddfad(0x1c0b)],
        _0x6b98a6["centerZ"],
        _0x6b98a6[_0x6ddfad(0xde9)],
        _0x6b98a6[_0x6ddfad(0xae2)],
        _0x506936["savedAt"],
        _0x506936[_0x6ddfad(0xa1d)],
        _0x506936[_0x6ddfad(0x166d)],
      ]["every"](Number["isFinite"]) ||
      !(_0x6b98a6[_0x6ddfad(0x5af)] instanceof Set) ||
      !(_0x6b98a6["vehicleIds"] instanceof Set) ||
      !(_0x6b98a6["scores"] instanceof Map) ||
      !(_0x6b98a6[_0x6ddfad(0x1dc0)] instanceof Set) ||
      !(_0x6b98a6[_0x6ddfad(0x5ce)] instanceof Map) ||
      !(_0x6b98a6[_0x6ddfad(0x198a)] instanceof jE) ||
      !(_0x6b98a6[_0x6ddfad(0x131f)] instanceof XE) ||
      ![
        _0x506936["vehicles"],
        _0x506936[_0x6ddfad(0x1cfb)],
        _0x506936["projectiles"],
        _0x506936[_0x6ddfad(0xcc5)],
        _0x506936["markers"],
        _0x506936[_0x6ddfad(0x16df)],
      ]["every"](Array["isArray"]) ||
      !_0x506936[_0x6ddfad(0x125c)] ||
      (_0x506936["objectives"][_0x6ddfad(0x1553)] &&
        !(
          _0x506936[_0x6ddfad(0x125c)][_0x6ddfad(0x1553)]["units"] instanceof
          Set
        ))
    )
      throw new Error(_0x6ddfad(0xf05));
    for (const _0x1c439c of _0x506936["vehicles"])
      if (
        ee[_0x6ddfad(0x448)](_0x1c439c["id"]) ||
        !_0x1c439c[_0x6ddfad(0x87e)] ||
        !(_0x1c439c[_0x6ddfad(0x58f)] in Bn) ||
        ![
          _0x1c439c["id"],
          _0x1c439c["x"],
          _0x1c439c["y"],
          _0x1c439c["z"],
          _0x1c439c["hp"],
        ][_0x6ddfad(0xe00)](Number[_0x6ddfad(0xb9c)])
      )
        throw new Error(_0x6ddfad(0x54a));
    for (const _0xd13c9 of _0x506936[_0x6ddfad(0x1cfb)])
      if (
        Re[_0x6ddfad(0x448)](_0xd13c9["id"]) ||
        ![
          _0xd13c9["id"],
          _0xd13c9["x"],
          _0xd13c9["y"],
          _0xd13c9["z"],
          _0xd13c9["hp"],
        ]["every"](Number["isFinite"])
      )
        throw new Error(_0x6ddfad(0x18d4));
    ((Oe = _0x6b98a6),
      (_0x6b98a6["targetPid"] = -0x1),
      (_0x6b98a6[_0x6ddfad(0x1bf3)] = ""),
      (_0x6b98a6[_0x6ddfad(0x1b8c)] = 0x0),
      (ga = !0x0),
      (Lp = _0x506936[_0x6ddfad(0x166d)]),
      (KM = Date["now"]()));
    for (const _0x2caceb of _0x506936[_0x6ddfad(0xd0b)])
      ((_0x2caceb[_0x6ddfad(0x30c)] = _0x2caceb[_0x6ddfad(0xca5)] = -0x1),
        (_0x2caceb[_0x6ddfad(0x16a6)] = []),
        delete _0x2caceb[_0x6ddfad(0xfb8)],
        delete _0x2caceb[_0x6ddfad(0x207f)],
        delete _0x2caceb[_0x6ddfad(0x1366)],
        delete _0x2caceb["hitHistory"],
        _0x2caceb[_0x6ddfad(0x9dd)] !== void 0x0 &&
          (_0x2caceb["raidDropAt"] =
            fe +
            Math[_0x6ddfad(0x1267)](
              0x0,
              _0x2caceb[_0x6ddfad(0x9dd)] - _0x506936["tick"],
            )),
        ee["set"](_0x2caceb["id"], _0x2caceb),
        (Ra = Math[_0x6ddfad(0x1267)](Ra, _0x2caceb["id"] + 0x1)));
    for (const _0xf76a99 of _0x506936["bots"])
      ((_0xf76a99[_0x6ddfad(0xd00)] =
        _0xf76a99[_0x6ddfad(0xc28)] =
        _0xf76a99[_0x6ddfad(0x153d)] =
        _0xf76a99[_0x6ddfad(0x1fb2)] =
          -0x1),
        delete _0xf76a99[_0x6ddfad(0x1366)],
        Re[_0x6ddfad(0x124)](_0xf76a99["id"], _0xf76a99),
        (Fi = Math[_0x6ddfad(0x1267)](Fi, _0xf76a99["id"] + 0x1)));
    cr["restore"](_0x506936[_0x6ddfad(0x125c)]);
    for (const _0xc181e0 of _0x506936[_0x6ddfad(0x9a5)])
      (hn[_0x6ddfad(0x124)](_0xc181e0["id"], _0xc181e0),
        Ff[_0x6ddfad(0x1577)](_0xc181e0["id"]),
        _0xc181e0["id"] >= 0x70000000
          ? (sd = Math[_0x6ddfad(0x1267)](sd, _0xc181e0["id"] + 0x1))
          : (ua = Math[_0x6ddfad(0x1267)](ua, _0xc181e0["id"] + 0x1)));
    for (const { nuclear: _0x299120, ..._0x464511 } of _0x506936[
      _0x6ddfad(0xcc5)
    ])
      Lr["push"]({
        ..._0x464511,
        nuclearRaid: _0x299120 ? _0x6b98a6 : void 0x0,
      });
    for (const [_0x3e03eb, _0x11f7e0] of _0x506936[_0x6ddfad(0x2048)])
      Sc[_0x6ddfad(0x124)](_0x3e03eb, _0x11f7e0);
    for (const [_0x522b51, _0x23abf8] of _0x506936[_0x6ddfad(0x16df)])
      pr[_0x6ddfad(0x124)](_0x522b51, { ..._0x23abf8, raid: _0x6b98a6 });
    (Ez(Date["now"]() - _0x506936[_0x6ddfad(0x177a)]),
      console[_0x6ddfad(0x38e)](
        _0x6ddfad(0xa52) +
          _0x6b98a6[_0x6ddfad(0xae2)] +
          "/" +
          _0x6b98a6[_0x6ddfad(0x7d4)] +
          _0x6ddfad(0x1345) +
          _0x6b98a6[_0x6ddfad(0xb1e)] +
          _0x6ddfad(0x1dc7),
      ));
  } catch (_0x48e4f0) {
    console["error"]("[raid]\x20Cannot\x20restore\x20checkpoint:", _0x48e4f0);
  } finally {
    $c = void 0x0;
  }
}
(uY(),
  Em[_0x5d322a(0x43a)](C3, nt["GAME_BIND"] || _0x5d322a(0xb8c), () => {
    const _0x37ea6c = _0x5d322a;
    (console[_0x37ea6c(0x38e)](
      "Voxel\x20Rush\x20server\x20running:\x20http://localhost:" +
        C3 +
        _0x37ea6c(0x1a57) +
        B[_0x37ea6c(0x1f4f)] +
        _0x37ea6c(0xdc0) +
        qt +
        "/)",
    ),
      console[_0x37ea6c(0x38e)](
        Gt[_0x37ea6c(0x1351)] +
          ":\x20" +
          Gt[_0x37ea6c(0x9f5)] +
          "\x20slots,\x20discovery=" +
          Gt["discoverable"] +
          _0x37ea6c(0x88c) +
          Gt[_0x37ea6c(0x1957)],
      ),
      Cs && (B1(), setInterval(() => void B1(), 0x2710)));
  }));
function lx() {
  const _0x52cd18 = _0x5d322a;
  var _0x255de7;
  if ((ph(), Cs)) {
    for (const _0x27ffd4 of $[_0x52cd18(0x1e01)]())
      (_0x255de7 = _0x27ffd4[_0x52cd18(0x1681)]) != null &&
        _0x255de7[_0x52cd18(0xc88)] &&
        us[_0x52cd18(0xf9f)](_0x27ffd4[_0x52cd18(0x1681)]["id"], D1(_0x27ffd4));
    us[_0x52cd18(0x1912)]();
  }
  (Ys["save"](),
    Ma[_0x52cd18(0x1912)](),
    dc[_0x52cd18(0x1912)](),
    Uf[_0x52cd18(0x1912)](),
    Ad[_0x52cd18(0x1912)](),
    zd(),
    Ml(),
    ws[_0x52cd18(0x1912)]());
  const _0x11a094 = B[_0x52cd18(0x1912)]() + mt["save"]();
  (Ii == null || Ii[_0x52cd18(0x3fe)](!0x0), De == null || De["flush"]());
  for (const _0x511389 of $["values"]()) Ts(_0x511389);
  return (
    Ke[_0x52cd18(0x100a)](),
    ET(),
    gy(!0x0),
    (Sa = !0x0),
    Sd(!0x0),
    pn[_0x52cd18(0x100a)](),
    w4(),
    ki(),
    ly(),
    n4(),
    (ed = !0x0),
    ps(!0x0),
    Ho(),
    Ya(),
    _0x11a094
  );
}
it && (globalThis[_0x5d322a(0x37f)] = lx);
let F1 = !0x1;
const Mw = ht[_0x5d322a(0x1d54)](qt, _0x5d322a(0x19d1));
function yz() {
  const _0x551695 = _0x5d322a;
  if (he)
    try {
      const _0x4c2e49 = he["snapshot"]();
      _0x4c2e49
        ? (_0x4a80b7[_0x551695(0x14ce)](Mw, JSON[_0x551695(0x8f9)](_0x4c2e49)),
          console["log"](
            "[front]\x20round\x20" +
              _0x4c2e49[_0x551695(0xa70)] +
              "\x20saved\x20for\x20the\x20restart\x20(" +
              _0x4c2e49[_0x551695(0xf28)]["length"] +
              _0x551695(0x1286) +
              _0x4c2e49[_0x551695(0x1cfb)][_0x551695(0x18ce)] +
              "\x20bots)",
          ))
        : _0x4a80b7[_0x551695(0x10b8)](Mw, { force: !0x0 });
    } catch (_0x4bc803) {
      console[_0x551695(0xc8d)](
        "[front]\x20could\x20not\x20save\x20the\x20round",
        _0x4bc803,
      );
    }
}
function Az() {
  const _0x5ed7e5 = _0x5d322a;
  if (F1) return;
  ((F1 = !0x0), yz(), console[_0x5ed7e5(0x38e)](_0x5ed7e5(0xf57)));
  const _0x261683 = lx();
  (console[_0x5ed7e5(0x38e)](_0x5ed7e5(0x1fa6) + _0x261683 + _0x5ed7e5(0x1c63)),
    process[_0x5ed7e5(0x1065)](0x0));
}
let hr = null;
const fx = (_0x4b48ae) =>
  new W(L["S_SERVER_NOTICE"])["str"](JSON[_0x5d322a(0x8f9)](_0x4b48ae));
function gz() {
  const _0x2e51a9 = _0x5d322a;
  return hr
    ? fx({
        kind: "restart",
        seconds: Math[_0x2e51a9(0x1267)](
          0x0,
          (hr["at"] - Date[_0x2e51a9(0x1cc6)]()) / 0x3e8,
        ),
        reason: hr[_0x2e51a9(0xd96)],
      })
    : null;
}
