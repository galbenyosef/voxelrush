// local-server-worker-coep-v1-CTlf9c4s 38 — x510d58
// Lines 14087-14202 of readable/assets/local-server-worker-coep-v1-CTlf9c4s.pretty.js (statement-aligned).
self[_0x136782(0x2bb)] = async (_0xed8fae) => {
  const _0x510d58 = _0x136782,
    _0x2401d1 = _0xed8fae["data"];
  if (_0x2401d1[_0x510d58(0x2df)] === _0x510d58(0x2e6)) {
    const _0x339718 = Number[_0x510d58(0x379)](_0x2401d1[_0x510d58(0x320)])
      ? _0x2401d1[_0x510d58(0x320)] >>> 0x0
      : 0x539;
    Object[_0x510d58(0x1ef)](globalThis, {
      process: {
        env: {
          PORT: "0",
          WORLD_DIR: "world",
          SEED: String(_0x339718),
          STRUCTURES_DIR: _0x510d58(0x30d),
          MISSIONS_DIR: _0x510d58(0x307),
          LOCAL_MODE: "1",
        },
        on: (_0x477554, _0x3d96e9) => {
          const _0x25542b = _0x510d58;
          _0x477554 === _0x25542b(0x300) && (r = _0x3d96e9);
        },
        exit: () => {
          const _0xd459fa = _0x510d58;
          ((o == null ? void 0x0 : o[_0xd459fa(0x28c)]()) ??
            Promise[_0xd459fa(0x245)]())[_0xd459fa(0x247)](() => {
            const _0x375e8f = _0xd459fa;
            (self[_0x375e8f(0x2f0)]({ type: _0x375e8f(0x2f3) }),
              self[_0x375e8f(0x339)]());
          });
        },
      },
    });
    try {
      (self[_0x510d58(0x2f0)]({
        type: _0x510d58(0x27c),
        stage: _0x510d58(0x29f),
      }),
        (o = await import(_0x510d58(0x364))["then"](function (_0x34ec91) {
          return _0x34ec91["b"];
        })),
        await o[_0x510d58(0x252)](
          _0x2401d1["worldId"],
          _0x2401d1[_0x510d58(0x382)],
          {
            "command-bunker.json": Il,
            "deep-mine.json": l1,
            "savanna-gold-mine.json": u,
            "military-base.json": v1,
            "airbase.json": V1,
            "naval-base.json": af,
            "fortress.json": Rf,
            "forward-base.json": ot,
            "village.json": yt,
            "abandoned-house.json": Pt,
            "checkpoint.json": ti,
            "gas-station.json": ui,
            "olympus-casino.json": Ri,
            "mine.json": Yi,
            "underground-shelter.json": nr,
            "great-pyramid.json": Or,
            "spawn-hub.json": Xr,
            "city-new-york.json": G,
            "city-paris.json": to,
            "ranger-lodge.json": yo,
            "alpine-refuge.json": No,
            "oasis-caravanserai.json": Qo,
            "island-lighthouse.json": nl,
          },
          {
            "convoy-intercept.json": ic,
            "field-commander.json": sc,
            "sam-hunt.json": xc,
          },
        ),
        (i = !0x0));
      for (const _0x23dcb5 of c[_0x510d58(0x31b)](0x0))
        o[_0x510d58(0x336)](_0x23dcb5);
      self[_0x510d58(0x2f0)]({ type: _0x510d58(0x302) });
    } catch (_0x24d44b) {
      self[_0x510d58(0x2f0)]({
        type: "error",
        message:
          _0x24d44b instanceof Error
            ? _0x24d44b[_0x510d58(0x208)]
            : String(_0x24d44b),
      });
    }
    return;
  }
  if (_0x2401d1[_0x510d58(0x2df)] === _0x510d58(0x366))
    i && o
      ? o[_0x510d58(0x336)](_0x2401d1[_0x510d58(0x243)])
      : c["push"](_0x2401d1["data"]);
  else {
    if (_0x2401d1["type"] === _0x510d58(0x349)) {
      if (i && o)
        try {
          (await o[_0x510d58(0x30a)](),
            self["postMessage"]({ type: _0x510d58(0x2bd) }));
        } catch (_0x419d63) {
          self["postMessage"]({
            type: _0x510d58(0x2c5),
            message:
              _0x419d63 instanceof Error
                ? _0x419d63[_0x510d58(0x208)]
                : String(_0x419d63),
          });
        }
    } else
      _0x2401d1[_0x510d58(0x2df)] === "close" &&
        (o == null || o["closeLocalClient"](),
        r
          ? r()
          : (self["postMessage"]({ type: _0x510d58(0x2f3) }), self["close"]()));
  }
};
