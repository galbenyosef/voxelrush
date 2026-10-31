// local-server-worker-coep-v1-A1ihJuBz 38 — x2017a7
// Lines 14101-14217 of readable/assets/local-server-worker-coep-v1-A1ihJuBz.pretty.js (statement-aligned).
self[_0x208d0b(0x247)] = async (_0x54a65d) => {
  const _0x2017a7 = _0x208d0b,
    _0x5590c9 = _0x54a65d[_0x2017a7(0x387)];
  if (_0x5590c9[_0x2017a7(0x350)] === _0x2017a7(0x340)) {
    const _0x324e95 = Number[_0x2017a7(0x206)](_0x5590c9[_0x2017a7(0x295)])
      ? _0x5590c9[_0x2017a7(0x295)] >>> 0x0
      : 0x539;
    Object["assign"](globalThis, {
      process: {
        env: {
          PORT: "0",
          WORLD_DIR: _0x2017a7(0x2b5),
          SEED: String(_0x324e95),
          STRUCTURES_DIR: _0x2017a7(0x226),
          MISSIONS_DIR: _0x2017a7(0x28a),
          LOCAL_MODE: "1",
        },
        on: (_0x452712, _0x179ef3) => {
          const _0x34f359 = _0x2017a7;
          _0x452712 === _0x34f359(0x27c) && (r = _0x179ef3);
        },
        exit: () => {
          const _0x3ce68f = _0x2017a7;
          (f?.["flushLocalWorldWrites"]() ?? Promise["resolve"]())[
            _0x3ce68f(0x2a5)
          ](() => {
            const _0x237cd8 = _0x3ce68f;
            (self["postMessage"]({ type: "closed" }), self[_0x237cd8(0x359)]());
          });
        },
      },
    });
    try {
      (self[_0x2017a7(0x352)]({
        type: _0x2017a7(0x338),
        stage: _0x2017a7(0x2da),
      }),
        (f = await import("./bootstrap-B8Ot5Flt.js")[_0x2017a7(0x2be)](
          function (_0x4633a8) {
            return _0x4633a8["b"];
          },
        )),
        await f["startLocalServer"](
          _0x5590c9[_0x2017a7(0x2d7)],
          _0x5590c9[_0x2017a7(0x1fa)],
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
      for (const _0x4ffd52 of c[_0x2017a7(0x1f2)](0x0))
        f[_0x2017a7(0x29e)](_0x4ffd52);
      self["postMessage"]({ type: "ready" });
    } catch (_0x4df3f5) {
      self[_0x2017a7(0x352)]({
        type: "error",
        message:
          _0x4df3f5 instanceof Error ? _0x4df3f5["message"] : String(_0x4df3f5),
      });
    }
    return;
  }
  if (_0x5590c9["type"] === _0x2017a7(0x272))
    i && f
      ? f[_0x2017a7(0x29e)](_0x5590c9[_0x2017a7(0x387)])
      : c["push"](_0x5590c9[_0x2017a7(0x387)]);
  else {
    if (_0x5590c9[_0x2017a7(0x350)] === _0x2017a7(0x383)) {
      if (i && f)
        try {
          (await f[_0x2017a7(0x2df)](),
            self["postMessage"]({ type: _0x2017a7(0x289) }));
        } catch (_0x199032) {
          self[_0x2017a7(0x352)]({
            type: _0x2017a7(0x361),
            message:
              _0x199032 instanceof Error
                ? _0x199032[_0x2017a7(0x269)]
                : String(_0x199032),
          });
        }
    } else
      _0x5590c9["type"] === _0x2017a7(0x359) &&
        (f?.[_0x2017a7(0x2c1)](),
        r
          ? r()
          : (self["postMessage"]({ type: _0x2017a7(0x260) }),
            self[_0x2017a7(0x359)]()));
  }
};
