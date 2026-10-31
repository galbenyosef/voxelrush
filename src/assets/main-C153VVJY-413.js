// main-C153VVJY 413 — x1037a9
// Lines 160451-160792 of readable/assets/main-C153VVJY.pretty.js (statement-aligned).
let I3 = 0x0;
const pS = [];
setInterval(() => {
  const _0x512530 = _0x44a014,
    _0x55c8d7 = performance["now"]();
  for (const _0x22863a of G["values"]()) {
    const _0x4f4fef = _0x22863a["ws"][_0x512530(0xd09)];
    _0x4f4fef &&
      !_0x4f4fef["destroyed"] &&
      (_0x4f4fef["cork"](), pS["push"](_0x4f4fef));
  }
  try {
    btt();
  } finally {
    for (const _0x32f473 of pS) _0x32f473["uncork"]();
    ((pS[_0x512530(0x1715)] = 0x0),
      (I3 = performance[_0x512530(0xe89)]() - _0x55c8d7),
      Mu[_0x512530(0x1b1)](I3, _0x55c8d7));
  }
}, 0x32);
const Gtt = Object[_0x44a014(0x830)](
    Object[_0x44a014(0x1db8)](C)[_0x44a014(0x73a)](([_0x43cebc, _0x3acc36]) => [
      _0x3acc36,
      _0x43cebc,
    ]),
  ),
  Mu = (() => {
    const _0x134c67 = _0x44a014,
      _0x456a77 = [],
      _0x91c84c = [],
      _0x4274c3 = new Map(),
      _0xa72b92 = Number(Ft[_0x134c67(0x94d)] ?? 0x14),
      _0x29a659 = Math[_0x134c67(0x723)](
        0x1,
        Number(Ft["FC_PERF_SECTIONS"]) || 0x5,
      ),
      _0x4f05d2 = new Map(),
      _0x5da2a6 = [];
    let _0x6334c2 = { ms: 0x0, start: 0x0, parts: [] };
    const _0x8bcf6 = [];
    if (!jt)
      try {
        new PerformanceObserver((_0x339e56) => {
          const _0x2abc4d = _0x134c67;
          for (const _0x1f4341 of _0x339e56[_0x2abc4d(0x183a)]())
            _0x8bcf6[_0x2abc4d(0x2fb)]({
              start: _0x1f4341[_0x2abc4d(0x4f0)],
              ms: _0x1f4341[_0x2abc4d(0x21b5)],
            });
        })[_0x134c67(0x16a2)]({ entryTypes: ["gc"] });
      } catch {}
    let _0x50e5f4 = globalThis["process"]?.["cpuUsage"]?.(),
      _0x4cfb99 = performance[_0x134c67(0xe89)](),
      _0x20fbaf = _0x4cfb99 + 0x14;
    const _0x3245a2 = (_0x231840, _0x1b81ac) => {
      const _0x253d88 = _0x134c67;
      if (!_0x231840[_0x253d88(0x1715)]) return 0x0;
      const _0x118a80 = [..._0x231840][_0x253d88(0x7cc)](
        (_0x2339c5, _0x4dca65) => _0x2339c5 - _0x4dca65,
      );
      return _0x118a80[
        Math[_0x253d88(0x16e0)](
          _0x118a80[_0x253d88(0x1715)] - 0x1,
          Math[_0x253d88(0x2f3)](
            _0x1b81ac * (_0x118a80[_0x253d88(0x1715)] - 0x1),
          ),
        )
      ];
    };
    return (
      jt ||
        (setInterval(() => {
          const _0x5d464d = _0x134c67,
            _0x5023c3 = performance[_0x5d464d(0xe89)]();
          (_0x91c84c[_0x5d464d(0x2fb)](
            Math[_0x5d464d(0x723)](0x0, _0x5023c3 - _0x20fbaf),
          ),
            (_0x20fbaf = _0x5023c3 + 0x14));
        }, 0x14)[_0x134c67(0x214d)]?.(),
        setInterval(() => {
          const _0x1037a9 = _0x134c67,
            _0x2de50f = performance[_0x1037a9(0xe89)](),
            _0x8e50db = _0x2de50f - _0x4cfb99,
            _0x4ff9ef =
              globalThis[_0x1037a9(0x1a78)]?.[_0x1037a9(0x1af9)]?.(_0x50e5f4);
          ((_0x50e5f4 = globalThis[_0x1037a9(0x1a78)]?.[_0x1037a9(0x1af9)]?.()),
            (_0x4cfb99 = _0x2de50f));
          const _0x22b95f = [...G["values"]()]
            [_0x1037a9(0x73a)]((_0x2e0169) => _0x2e0169[_0x1037a9(0x1ac2)])
            [_0x1037a9(0x1ca)]((_0x581a0f) => _0x581a0f > 0x0);
          if (G[_0x1037a9(0x1c1e)]) {
            const _0x35c05b = nc[_0x1037a9(0x1c1e)],
              _0x572bfc = (_0x138d30) => _0x138d30["toFixed"](0x1),
              _0x5cf7cd = globalThis[_0x1037a9(0x1a78)]?.[_0x1037a9(0xb19)]?.(),
              _0x20f916 = (_0x2ed32c) =>
                Math[_0x1037a9(0x1f96)]((_0x2ed32c ?? 0x0) / 0x100000);
            console[_0x1037a9(0x1ed0)](
              _0x1037a9(0x208a) +
                G[_0x1037a9(0x1c1e)] +
                _0x1037a9(0x64c) +
                _0x3245a2(_0x22b95f, 0.5) +
                "\x20p95=" +
                _0x3245a2(_0x22b95f, 0.95) +
                _0x1037a9(0x1f95) +
                Math[_0x1037a9(0x723)](0x0, ..._0x22b95f) +
                _0x1037a9(0x10c3) +
                _0x572bfc(_0x3245a2(_0x456a77, 0.5)) +
                "\x20p95=" +
                _0x572bfc(_0x3245a2(_0x456a77, 0.95)) +
                _0x1037a9(0x1f95) +
                _0x572bfc(Math["max"](0x0, ..._0x456a77)) +
                _0x1037a9(0xdda) +
                _0x572bfc(_0x3245a2(_0x91c84c, 0.95)) +
                _0x1037a9(0x1f95) +
                _0x572bfc(Math[_0x1037a9(0x723)](0x0, ..._0x91c84c)) +
                _0x1037a9(0x1031) +
                (_0x4ff9ef
                  ? Math[_0x1037a9(0x1f96)](
                      (_0x4ff9ef["user"] + _0x4ff9ef["system"]) /
                        0xa /
                        _0x8e50db,
                    )
                  : "?") +
                "%\x20rss=" +
                Math[_0x1037a9(0x1f96)](
                  (_0x5cf7cd?.[_0x1037a9(0xf3b)] ?? 0x0) / 0x100000,
                ) +
                _0x1037a9(0x1e9f) +
                _0x20f916(_0x5cf7cd?.[_0x1037a9(0xcc2)]) +
                "/" +
                _0x20f916(_0x5cf7cd?.[_0x1037a9(0x158a)]) +
                _0x1037a9(0xdac) +
                _0x20f916(_0x5cf7cd?.[_0x1037a9(0xbe8)]) +
                _0x1037a9(0x1d7b) +
                _0x20f916(_0x5cf7cd?.[_0x1037a9(0xa8e)]) +
                _0x1037a9(0xa9c) +
                B[_0x1037a9(0x12ef)] +
                "+" +
                ae[_0x1037a9(0x12ef)] +
                "/" +
                B["residentChunkLimit"] +
                _0x1037a9(0x170b) +
                rt["size"] +
                _0x1037a9(0x13a5) +
                W[_0x1037a9(0x1c1e)] +
                "\x20convoys=" +
                _0x35c05b +
                _0x1037a9(0x948) +
                (n_() ? "on" : _0x1037a9(0x1a69)) +
                _0x1037a9(0x1fac) +
                ([..._0x4274c3]
                  [_0x1037a9(0x1ca)](
                    ([, _0x4e52fa]) => _0x4e52fa[_0x1037a9(0x723)] >= _0xa72b92,
                  )
                  [_0x1037a9(0x7cc)](
                    (_0x32497f, _0x15974b) =>
                      _0x15974b[0x1][_0x1037a9(0x723)] -
                      _0x32497f[0x1][_0x1037a9(0x723)],
                  )
                  [_0x1037a9(0x473)](0x0, 0x3)
                  ["map"](
                    ([_0x4eb3b8, _0x27b395]) =>
                      _0x4eb3b8 +
                      ":" +
                      _0x572bfc(_0x27b395[_0x1037a9(0x723)]) +
                      "/" +
                      _0x27b395["n"] +
                      "/" +
                      Math["round"](_0x27b395["total"]),
                  )
                  [_0x1037a9(0x282)](",") || "-") +
                "\x20gc\x20max=" +
                _0x572bfc(
                  Math[_0x1037a9(0x723)](
                    0x0,
                    ..._0x8bcf6["map"]((_0x36248d) => _0x36248d["ms"]),
                  ),
                ) +
                _0x1037a9(0x21d1) +
                Math[_0x1037a9(0x1f96)](
                  _0x8bcf6[_0x1037a9(0x5ac)](
                    (_0x2a5136, _0x1fc80b) => _0x2a5136 + _0x1fc80b["ms"],
                    0x0,
                  ),
                ) +
                _0x1037a9(0x1be2) +
                (Object[_0x1037a9(0x1db8)](Fd)
                  [_0x1037a9(0x1ca)](([, _0xe90975]) => _0xe90975 > 0x0)
                  ["map"](
                    ([_0x3f1d96, _0x2e6bf2]) => _0x3f1d96 + ":" + _0x2e6bf2,
                  )
                  [_0x1037a9(0x282)](",") || "-") +
                _0x1037a9(0xe18) +
                ([...C2]
                  [_0x1037a9(0x73a)](([_0x48f771, _0xbcb78b]) => [
                    _0x48f771,
                    _0xbcb78b,
                    [..._0xbcb78b[_0x1037a9(0x642)]()][_0x1037a9(0x5ac)](
                      (_0x58e7a7, _0x3ee461) => _0x58e7a7 + _0x3ee461,
                      0x0,
                    ),
                  ])
                  [_0x1037a9(0x7cc)](
                    (_0x44931e, _0x1af704) => _0x1af704[0x2] - _0x44931e[0x2],
                  )
                  [_0x1037a9(0x473)](0x0, 0x3)
                  [_0x1037a9(0x73a)](
                    ([_0x2e527e, _0x12d9d9]) =>
                      _0x2e527e +
                      ":" +
                      [..._0x12d9d9]
                        ["map"](
                          ([_0x451738, _0x1e6bee]) =>
                            _0x451738 + "×" + _0x1e6bee,
                        )
                        [_0x1037a9(0x282)]("+"),
                  )
                  [_0x1037a9(0x282)](",") || "-") +
                (CA
                  ? (() => {
                      const _0xdd9d4b = _0x1037a9,
                        _0x303ba1 = _0x8bcf6["filter"](
                          (_0xfdb99e) =>
                            _0xfdb99e[_0xdd9d4b(0x1229)] + _0xfdb99e["ms"] >
                              _0x6334c2["start"] &&
                            _0xfdb99e[_0xdd9d4b(0x1229)] <
                              _0x6334c2["start"] + _0x6334c2["ms"],
                        )[_0xdd9d4b(0x5ac)](
                          (_0x5f2d01, _0x52e104) => _0x5f2d01 + _0x52e104["ms"],
                          0x0,
                        );
                      return (
                        _0xdd9d4b(0x25f) +
                        _0x572bfc(_0x6334c2["ms"]) +
                        "[" +
                        [..._0x6334c2["parts"]]
                          [_0xdd9d4b(0x7cc)](
                            (_0x1d8418, _0xdac71d) =>
                              _0xdac71d[0x1] - _0x1d8418[0x1],
                          )
                          [_0xdd9d4b(0x473)](0x0, 0x4)
                          [_0xdd9d4b(0x73a)](
                            ([_0x2b708c, _0x387f28]) =>
                              _0x2b708c + ":" + _0x572bfc(_0x387f28),
                          )
                          [_0xdd9d4b(0x282)](",") +
                        (_0x303ba1
                          ? _0xdd9d4b(0x4f2) + _0x572bfc(_0x303ba1)
                          : "") +
                        _0xdd9d4b(0xc5f) +
                        [..._0x4f05d2]
                          [_0xdd9d4b(0x7cc)](
                            (_0x446f2f, _0x135015) =>
                              _0x135015[0x1][_0xdd9d4b(0x723)] -
                              _0x446f2f[0x1][_0xdd9d4b(0x723)],
                          )
                          [_0xdd9d4b(0x473)](0x0, _0x29a659)
                          [_0xdd9d4b(0x73a)](
                            ([_0x431fb0, _0x459da0]) =>
                              _0x431fb0 +
                              ":" +
                              _0x572bfc(_0x459da0[_0xdd9d4b(0x723)]) +
                              "/" +
                              Math["round"](_0x459da0[_0xdd9d4b(0x1cb5)]),
                          )
                          ["join"](",")
                      );
                    })()
                  : ""),
            );
          }
          ((_0x456a77[_0x1037a9(0x1715)] = 0x0),
            (_0x91c84c[_0x1037a9(0x1715)] = 0x0),
            _0x4274c3["clear"](),
            (_0x8bcf6[_0x1037a9(0x1715)] = 0x0),
            _0x4f05d2[_0x1037a9(0x194e)](),
            (_0x6334c2 = { ms: 0x0, start: 0x0, parts: [] }));
          for (const _0x23722c of Object[_0x1037a9(0xdd8)](Fd))
            Fd[_0x23722c] = 0x0;
          C2[_0x1037a9(0x194e)]();
        }, 0x7530)[_0x134c67(0x214d)]?.()),
      {
        tick(_0x3ea22d, _0x45af6e) {
          const _0x36d64f = _0x134c67;
          jt ||
            (_0x456a77[_0x36d64f(0x2fb)](_0x3ea22d),
            CA &&
              _0x3ea22d > _0x6334c2["ms"] &&
              (_0x6334c2 = {
                ms: _0x3ea22d,
                start: _0x45af6e,
                parts: [..._0x5da2a6],
              }),
            (_0x5da2a6[_0x36d64f(0x1715)] = 0x0));
        },
        section(_0x2d06ae, _0x4d9d8f) {
          const _0x44637c = _0x134c67;
          _0x5da2a6["push"]([_0x2d06ae, _0x4d9d8f]);
          const _0x2447fb = _0x4f05d2[_0x44637c(0xda9)](_0x2d06ae) ?? {
            total: 0x0,
            max: 0x0,
          };
          ((_0x2447fb["total"] += _0x4d9d8f),
            (_0x2447fb["max"] = Math[_0x44637c(0x723)](
              _0x2447fb[_0x44637c(0x723)],
              _0x4d9d8f,
            )),
            _0x4f05d2[_0x44637c(0x1b41)](_0x2d06ae, _0x2447fb));
        },
        span(_0x5c56e5, _0x5940d3) {
          const _0x5ef88b = _0x134c67;
          if (jt) return;
          const _0x160ab9 = _0x4274c3[_0x5ef88b(0xda9)](_0x5c56e5) ?? {
            n: 0x0,
            total: 0x0,
            max: 0x0,
          };
          (_0x160ab9["n"]++,
            (_0x160ab9["total"] += _0x5940d3),
            (_0x160ab9["max"] = Math["max"](_0x160ab9["max"], _0x5940d3)),
            _0x4274c3["set"](_0x5c56e5, _0x160ab9));
        },
      }
    );
  })();
Jx = !0x0;
try {
  for (const t of ke[_0x44a014(0x1195)]) {
    const e = pt(t[_0x44a014(0x529)]);
    e[_0x44a014(0xcdd)](t["x"], t["y"], t["z"]) !== l[_0x44a014(0xa37)] &&
      e["setBlock"](t["x"], t["y"], t["z"], l[_0x44a014(0xa37)]);
  }
} finally {
  Jx = !0x1;
}
for (const t of W[_0x44a014(0x642)]())
  t[_0x44a014(0xf3e)] &&
    Df(t[_0x44a014(0x1556)]) &&
    !Fo["has"](t["id"]) &&
    !Gr(t[_0x44a014(0x18a)]?.["mode"]) &&
    !Ou(t) &&
    (t[_0x44a014(0x18a)] = yp(t));
