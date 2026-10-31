// main-C153VVJY 415 — x1bba36
// Lines 161123-161197 of readable/assets/main-C153VVJY.pretty.js (statement-aligned).
function vv(_0x1efe22, _0x130fce = _0x44a014(0xb42)) {
  const _0x3ecb25 = _0x44a014;
  if (jt || Bm) return !0x1;
  Wr && clearInterval(Wr[_0x3ecb25(0x184f)]);
  const _0x2bfd16 = {
    at: Date[_0x3ecb25(0xe89)]() + _0x1efe22 * 0x3e8,
    reason: _0x130fce,
    said: -0x1,
    timer: setInterval(() => {
      const _0x1bba36 = _0x3ecb25,
        _0x100f94 = Math[_0x1bba36(0x2af)](
          (_0x2bfd16["at"] - Date[_0x1bba36(0xe89)]()) / 0x3e8,
        );
      if (
        _0x100f94 !== _0x2bfd16[_0x1bba36(0x207a)] &&
        [0x3c, 0x1e, 0xf, 0xa, 0x5, 0x4, 0x3, 0x2, 0x1][_0x1bba36(0x175a)](
          _0x100f94,
        )
      ) {
        _0x2bfd16[_0x1bba36(0x207a)] = _0x100f94;
        for (const _0x5a693f of G[_0x1bba36(0x642)]())
          P(
            0x2,
            F7(_0x100f94, _0x130fce, _0x5a693f[_0x1bba36(0x177)] === "en"),
            _0x5a693f,
          );
      }
      Date[_0x1bba36(0xe89)]() >= _0x2bfd16["at"] && Ktt(_0x130fce);
    }, 0xc8),
  };
  return (
    (Wr = _0x2bfd16),
    Ze(Cv()),
    console[_0x3ecb25(0x1ed0)](
      _0x3ecb25(0x144a) + _0x130fce + _0x3ecb25(0x3b6) + _0x1efe22 + "\x20s",
    ),
    !0x0
  );
}
function $tt() {
  const _0x11b775 = _0x44a014;
  if (!Wr) return !0x1;
  (clearInterval(Wr["timer"]), (Wr = null), Ze(AO({ kind: "cancel" })));
  for (const _0x3317a7 of G[_0x11b775(0x642)]())
    P(
      0x1,
      _0x3317a7[_0x11b775(0x177)] === "en"
        ? "Server\x20restart\x20cancelled."
        : _0x11b775(0x19a2),
      _0x3317a7,
    );
  return !0x0;
}
function Ktt(_0x144840) {
  const _0x217752 = _0x44a014;
  if (Bm) return;
  (Wr && clearInterval(Wr[_0x217752(0x184f)]),
    (Wr = null),
    (Bm = !0x0),
    Lv(),
    Ze(AO({ kind: _0x217752(0xf92), reason: _0x144840 })));
  for (const _0x5c98cf of [...G["values"]()])
    (IA(_0x5c98cf), _0x5c98cf["ws"][_0x217752(0xe45)](G7, _0x217752(0x638)));
  console["log"]("\x0aSaving\x20world\x20before\x20restart...");
  const _0x5a0ad0 = yO();
  (console["log"](_0x217752(0x1437) + _0x5a0ad0 + "\x20chunks.\x20Restarting."),
    setTimeout(() => process[_0x217752(0x125d)](b7), 0x190));
}
(jt ||
  process["on"](_0x44a014(0x453), () => {
    vv(Number(Ft["RESTART_NOTICE_SECONDS"]) || 0xf, "update");
  }),
  process["on"](_0x44a014(0x12cc), zv),
  process["on"](_0x44a014(0x361), zv));
var Qtt = Object[_0x44a014(0x1469)]({ __proto__: null });
