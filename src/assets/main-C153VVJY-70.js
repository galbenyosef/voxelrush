// main-C153VVJY 70 — x44a014
// Lines 23180-23519 of readable/assets/main-C153VVJY.pretty.js (statement-aligned).
function J7(_0x5ab09b) {
  const _0x195435 = _0x44a014;
  return Z7[_0x195435(0x1eb0)]((_0x24a6d4) => _0x24a6d4["test"](_0x5ab09b));
}
function Q7(_0x1fd4d1 = "en") {
  const _0x3b5563 = _0x44a014;
  return _0x1fd4d1 === "ru"
    ? "Ссылки\x20запрещено\x20отправлять\x20в\x20чат."
    : _0x3b5563(0x1003);
}
function tH(_0x541a96, _0x132bde = "en") {
  const _0x322187 = _0x44a014;
  return !_0x541a96[_0x322187(0x1b1a)]()[_0x322187(0x1f59)]("/") &&
    J7(_0x541a96)
    ? Q7(_0x132bde)
    : null;
}
class eH {
  constructor() {
    const _0x2b5ddf = _0x44a014;
    throw new Error(_0x2b5ddf(0x7a6));
  }
}
let nH = 0x0;
class mk extends Map {
  constructor(
    _0x1ac4d8,
    _0x34254c,
    _0x4d1fc4 = () => {},
    _0x4492d8 = !0x0,
    _0x2a092f = 0x8 * 0x400 * 0x400,
    _0x2aea9c = _0x44a014(0x1394),
  ) {
    const _0x8a70f1 = _0x44a014;
    (super(),
      (this["file"] = _0x1ac4d8),
      (this[_0x8a70f1(0x17d)] = _0x34254c),
      (this["extraFor"] = _0x4d1fc4),
      (this[_0x8a70f1(0x365)] = _0x4492d8),
      (this[_0x8a70f1(0x119d)] = _0x2a092f),
      (this["format"] = _0x2aea9c),
      (this[_0x8a70f1(0xf9a)] = _0x1ac4d8 + _0x8a70f1(0x1728)));
  }
  [_0x44a014(0xf9a)];
  [_0x44a014(0x1f72)] = new Set();
  [_0x44a014(0xa03)] = 0x0;
  [_0x44a014(0x1b0b)] = null;
  [_0x44a014(0xeb6)] = !0x1;
  [_0x44a014(0x5e1)] = 0x0;
  ["set"](_0x5dfca4, _0x1d9688) {
    const _0x1c3802 = _0x44a014;
    return (
      super[_0x1c3802(0xda9)](_0x5dfca4) !== _0x1d9688 &&
        this["touched"]?.["add"](_0x5dfca4),
      super[_0x1c3802(0x1b41)](_0x5dfca4, _0x1d9688)
    );
  }
  [_0x44a014(0x367)](_0xe54b2a) {
    const _0xf5f0a7 = _0x44a014,
      _0x18658f = super["delete"](_0xe54b2a);
    return (
      _0x18658f && this[_0xf5f0a7(0x1f72)][_0xf5f0a7(0x953)](_0xe54b2a),
      _0x18658f
    );
  }
  [_0x44a014(0x1191)](_0x3997d6) {
    const _0x3dc732 = _0x44a014;
    this[_0x3dc732(0x1f72)][_0x3dc732(0x953)](_0x3997d6);
  }
  ["touchAll"]() {
    const _0x169c43 = _0x44a014;
    for (const _0x19bb69 of this[_0x169c43(0xdd8)]())
      this[_0x169c43(0x1f72)]["add"](_0x19bb69);
  }
  ["settle"]() {
    const _0x266a0e = _0x44a014;
    this[_0x266a0e(0x1f72)][_0x266a0e(0x194e)]();
  }
  get [_0x44a014(0x11e6)]() {
    const _0x2aebbe = _0x44a014;
    return this[_0x2aebbe(0x1f72)][_0x2aebbe(0x1c1e)];
  }
  [_0x44a014(0x1c33)](_0x9654f0, _0x44d38c) {
    const _0x4e3fbf = _0x44a014;
    let _0x56a412 = "";
    try {
      _0x56a412 = _0x27cf81[_0x4e3fbf(0x92d)](
        this["journalFile"],
        _0x4e3fbf(0x258),
      );
    } catch {
      return 0x0;
    }
    (this[_0x4e3fbf(0x365)] &&
      _0x56a412 &&
      !_0x56a412["endsWith"]("\x0a") &&
      (_0x27cf81[_0x4e3fbf(0x1fb7)](this[_0x4e3fbf(0xf9a)], "\x0a"),
      (_0x56a412 += "\x0a")),
      (this[_0x4e3fbf(0xa03)] = Buffer[_0x4e3fbf(0xf61)](_0x56a412)));
    let _0x5915bf = 0x0;
    for (const _0x437214 of _0x56a412[_0x4e3fbf(0x47b)]("\x0a")) {
      if (!_0x437214) continue;
      let _0x38cfe2;
      try {
        _0x38cfe2 = JSON["parse"](_0x437214);
      } catch {
        continue;
      }
      if (typeof _0x38cfe2?.["k"] == _0x4e3fbf(0x18e4)) {
        if (_0x38cfe2["d"]) super[_0x4e3fbf(0x367)](_0x38cfe2["k"]);
        else {
          const _0x496b63 = _0x9654f0(_0x38cfe2["v"]);
          if (_0x496b63 === null) continue;
          (super["set"](_0x38cfe2["k"], _0x496b63),
            _0x38cfe2["x"] !== void 0x0 &&
              _0x44d38c?.(_0x38cfe2["k"], _0x38cfe2["x"]));
        }
        _0x5915bf++;
      }
    }
    return _0x5915bf;
  }
  [_0x44a014(0x8a1)]() {
    const _0x20bd87 = _0x44a014;
    if (!this[_0x20bd87(0x1f72)][_0x20bd87(0x1c1e)]) return 0x0;
    if (!this[_0x20bd87(0x365)]) {
      const _0x37d1c6 = this[_0x20bd87(0x1f72)]["size"];
      return (
        this[_0x20bd87(0x1616)](),
        this["touched"][_0x20bd87(0x194e)](),
        _0x37d1c6
      );
    }
    let _0x140cf6 = "";
    for (const _0x3a8a71 of this["touched"]) {
      const _0x125745 = this["extraFor"](_0x3a8a71);
      _0x140cf6 +=
        JSON[_0x20bd87(0x2043)](
          this[_0x20bd87(0x97a)](_0x3a8a71)
            ? {
                k: _0x3a8a71,
                v: this["get"](_0x3a8a71),
                ...(_0x125745 === void 0x0 ? {} : { x: _0x125745 }),
              }
            : { k: _0x3a8a71, d: 0x1 },
        ) + "\x0a";
    }
    const _0x5de11e = this[_0x20bd87(0x1f72)][_0x20bd87(0x1c1e)];
    (_0x27cf81[_0x20bd87(0x1fb7)](this["journalFile"], _0x140cf6),
      this["touched"]["clear"]());
    const _0x17895f = Buffer[_0x20bd87(0xf61)](_0x140cf6);
    return (
      (this[_0x20bd87(0xa03)] += _0x17895f),
      this["background"] &&
        ((this[_0x20bd87(0x1b0b)][_0x20bd87(0x1a0d)] += _0x17895f),
        this[_0x20bd87(0x1b0b)][_0x20bd87(0x1a0d)] <= 0x100 * 0x400 &&
          this[_0x20bd87(0x1b0b)][_0x20bd87(0x1fdf)]["push"](_0x140cf6)),
      !this[_0x20bd87(0xeb6)] &&
        !this["background"] &&
        this["journalBytes"] > this["compactBytes"] &&
        Date[_0x20bd87(0xe89)]() >= this[_0x20bd87(0x5e1)] &&
        this["compactInBackground"]()[_0x20bd87(0x6f8)]((_0x3c7431) =>
          console[_0x20bd87(0x2097)](
            _0x20bd87(0x1f73) + this[_0x20bd87(0xc97)] + _0x20bd87(0x1240),
            _0x3c7431,
          ),
        ),
      _0x5de11e
    );
  }
  [_0x44a014(0x287)]() {
    const _0x5dbede = _0x44a014;
    if (this[_0x5dbede(0x1b0b)])
      return this[_0x5dbede(0x1b0b)][_0x5dbede(0x82d)];
    if (!this[_0x5dbede(0x365)])
      return (this[_0x5dbede(0x1979)](), Promise[_0x5dbede(0x602)]());
    this["suppressCompaction"] = !0x0;
    try {
      this[_0x5dbede(0x8a1)]();
    } finally {
      this[_0x5dbede(0xeb6)] = !0x1;
    }
    const _0x294c8e =
        this[_0x5dbede(0xc97)] +
        "." +
        process["pid"] +
        "." +
        ++nH +
        _0x5dbede(0x1c03),
      _0x745a38 = _0x294c8e + ".journal.tmp",
      _0x5ee234 = new eH(
        new URL(
          import.meta.url[_0x5dbede(0x1e42)](
            /journal-store\.[cm]?[jt]s(\?.*)?$/,
            _0x5dbede(0x140c),
          ),
        ),
        {
          execArgv: [],
          workerData: {
            file: this[_0x5dbede(0xc97)],
            bytes: this[_0x5dbede(0xa03)],
            format: this[_0x5dbede(0x19e4)],
            temp: _0x294c8e,
            tailTemp: _0x745a38,
          },
        },
      ),
      _0x488040 = {
        worker: _0x5ee234,
        tail: [],
        bytes: 0x0,
        done: Promise[_0x5dbede(0x602)](),
      };
    return (
      (this[_0x5dbede(0x1b0b)] = _0x488040),
      (_0x488040["done"] = new Promise((_0x59a17b, _0x58b8c4) => {
        const _0x12ffac = _0x5dbede;
        let _0x583ed7 = !0x1,
          _0x2988ad = 0x0;
        const _0x4829eb = (_0x4a1f66) => {
          const _0x1a7347 = _0x8a4a;
          _0x583ed7 ||
            ((_0x583ed7 = !0x0),
            this["background"] === _0x488040 &&
              (this[_0x1a7347(0x1b0b)] = null),
            _0x4a1f66
              ? ((this[_0x1a7347(0x5e1)] = Date[_0x1a7347(0xe89)]() + 0x7530),
                _0x58b8c4(_0x4a1f66))
              : _0x59a17b());
        };
        (_0x5ee234[_0x12ffac(0xd65)](_0x12ffac(0x1dd2), _0x4829eb),
          _0x5ee234[_0x12ffac(0xd65)](_0x12ffac(0x125d), (_0x536467) => {
            const _0x3f2bdd = _0x12ffac;
            (_0x4829eb(
              this[_0x3f2bdd(0x1b0b)] !== _0x488040
                ? void 0x0
                : new Error(_0x3f2bdd(0x1ba0) + _0x536467),
            ),
              _0x27cf81[_0x3f2bdd(0x18b1)]
                ["rm"](_0x294c8e, { force: !0x0 })
                [_0x3f2bdd(0x6f8)](() => {}),
              _0x27cf81["promises"]
                ["rm"](_0x745a38, { force: !0x0 })
                [_0x3f2bdd(0x6f8)](() => {}),
              _0x27cf81[_0x3f2bdd(0x18b1)]
                ["rm"](_0x294c8e + ".previous.tmp", { force: !0x0 })
                ["catch"](() => {}),
              _0x27cf81[_0x3f2bdd(0x18b1)]
                ["rm"](_0x745a38 + _0x3f2bdd(0xcc0), { force: !0x0 })
                ["catch"](() => {}));
          }),
          _0x5ee234["on"]("message", (_0xb75c94) => {
            const _0x5daa65 = _0x12ffac;
            if (this["background"] !== _0x488040) {
              _0x4829eb();
              return;
            }
            const _0x47b05a = performance[_0x5daa65(0xe89)]();
            try {
              if (_0x488040["bytes"] > 0x100 * 0x400)
                throw new Error(
                  "journal\x20tail\x20exceeded\x20commit\x20budget;\x20retrying\x20later",
                );
              if (_0xb75c94[_0x5daa65(0x19b8)] === _0x5daa65(0x1c1)) {
                ((_0x2988ad = _0x488040[_0x5daa65(0x1fdf)][_0x5daa65(0x1715)]),
                  _0x5ee234["postMessage"](
                    _0x488040["tail"][_0x5daa65(0x282)](""),
                  ));
                return;
              }
              (_0x488040[_0x5daa65(0x1fdf)][_0x5daa65(0x1715)] > _0x2988ad &&
                _0x27cf81[_0x5daa65(0x1fb7)](
                  _0x745a38,
                  _0x488040[_0x5daa65(0x1fdf)]
                    ["slice"](_0x2988ad)
                    [_0x5daa65(0x282)](""),
                ),
                _0x27cf81[_0x5daa65(0x738)](_0x294c8e, this["file"]),
                _0x27cf81[_0x5daa65(0x738)](_0x745a38, this[_0x5daa65(0xf9a)]),
                (this[_0x5daa65(0xa03)] = _0x488040["bytes"]),
                console[_0x5daa65(0x1ed0)](
                  _0x5daa65(0x1f73) +
                    this[_0x5daa65(0xc97)] +
                    "\x20compact\x20read=" +
                    _0xb75c94[_0x5daa65(0x1e43)][_0x5daa65(0x1fef)](0x1) +
                    _0x5daa65(0x1185) +
                    _0xb75c94[_0x5daa65(0x1f6f)][_0x5daa65(0x1fef)](0x1) +
                    _0x5daa65(0x11b) +
                    _0xb75c94[_0x5daa65(0x21f1)][_0x5daa65(0x1fef)](0x1) +
                    "ms\x20commit=" +
                    (performance[_0x5daa65(0xe89)]() - _0x47b05a)["toFixed"](
                      0x1,
                    ) +
                    _0x5daa65(0x44e) +
                    _0x488040[_0x5daa65(0x1a0d)] +
                    "B",
                ),
                _0x4829eb());
            } catch (_0x4260a4) {
              (_0x4829eb(_0x4260a4), _0x5ee234["terminate"]());
            }
          }));
      })),
      _0x488040[_0x5dbede(0x82d)]
    );
  }
  [_0x44a014(0x1979)]() {
    const _0x39019f = _0x44a014;
    if (!this[_0x39019f(0x365)]) {
      (this[_0x39019f(0x1616)](), this[_0x39019f(0x1f72)][_0x39019f(0x194e)]());
      return;
    }
    (this[_0x39019f(0x1b0b)] &&
      (this["background"][_0x39019f(0x16e9)][_0x39019f(0x9e2)](),
      (this[_0x39019f(0x1b0b)] = null)),
      (this["suppressCompaction"] = !0x0));
    try {
      this["flush"]();
    } finally {
      this[_0x39019f(0xeb6)] = !0x1;
    }
    (this[_0x39019f(0x1616)](),
      _0x27cf81[_0x39019f(0x3de)](this["journalFile"], ""),
      (this["journalBytes"] = 0x0));
  }
  [_0x44a014(0x1616)]() {
    const _0x4896e8 = _0x44a014,
      _0x41dffa = this[_0x4896e8(0xc97)] + ".tmp";
    (_0x27cf81[_0x4896e8(0x3de)](
      _0x41dffa,
      JSON[_0x4896e8(0x2043)](this[_0x4896e8(0x17d)](this)),
    ),
      _0x27cf81[_0x4896e8(0x738)](_0x41dffa, this[_0x4896e8(0xc97)]),
      !this[_0x4896e8(0x365)] &&
        this["journalBytes"] &&
        (_0x27cf81[_0x4896e8(0x3de)](this["journalFile"], ""),
        (this[_0x4896e8(0xa03)] = 0x0)));
  }
}
