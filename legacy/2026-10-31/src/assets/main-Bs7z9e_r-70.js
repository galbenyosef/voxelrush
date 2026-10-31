// main-Bs7z9e_r 70 — x1e2f51
// Lines 22772-23110 of readable/assets/main-Bs7z9e_r.pretty.js (statement-aligned).
function v8(_0x5181ec = "en") {
  const _0x50e7b5 = _0x5d322a;
  return _0x5181ec === "ru" ? _0x50e7b5(0x1029) : _0x50e7b5(0x17ba);
}
function D8(_0x466b12, _0x347941 = "en") {
  const _0x195b4f = _0x5d322a;
  return !_0x466b12[_0x195b4f(0xbaa)]()["startsWith"]("/") && C8(_0x466b12)
    ? v8(_0x347941)
    : null;
}
class B8 {
  constructor() {
    const _0x37e454 = _0x5d322a;
    throw new Error(_0x37e454(0xf07));
  }
}
let P8 = 0x0;
class PN extends Map {
  constructor(
    _0x34f89e,
    _0x4e9da8,
    _0x25f68c = () => {},
    _0x352ee6 = !0x0,
    _0x198769 = 0x8 * 0x400 * 0x400,
    _0x5eff98 = _0x5d322a(0x1de8),
  ) {
    const _0x4d9d8e = _0x5d322a;
    (super(),
      Z(this, _0x4d9d8e(0xa74)),
      Z(this, "touched", new Set()),
      Z(this, "journalBytes", 0x0),
      Z(this, "background", null),
      Z(this, _0x4d9d8e(0xcd9), !0x1),
      Z(this, _0x4d9d8e(0x1df3), 0x0),
      ((this[_0x4d9d8e(0x173d)] = _0x34f89e),
      (this[_0x4d9d8e(0x594)] = _0x4e9da8),
      (this[_0x4d9d8e(0x936)] = _0x25f68c),
      (this[_0x4d9d8e(0x1fa1)] = _0x352ee6),
      (this[_0x4d9d8e(0x90e)] = _0x198769),
      (this[_0x4d9d8e(0xb53)] = _0x5eff98),
      (this[_0x4d9d8e(0xa74)] = _0x34f89e + ".journal")));
  }
  [_0x5d322a(0x124)](_0x40773c, _0x24d7e8) {
    const _0x182cc3 = _0x5d322a;
    var _0x4b7f9a;
    return (
      super["get"](_0x40773c) !== _0x24d7e8 &&
        ((_0x4b7f9a = this[_0x182cc3(0x1ad0)]) == null ||
          _0x4b7f9a["add"](_0x40773c)),
      super[_0x182cc3(0x124)](_0x40773c, _0x24d7e8)
    );
  }
  [_0x5d322a(0x1d64)](_0x45efbd) {
    const _0xf3fafd = _0x5d322a,
      _0x118bb3 = super["delete"](_0x45efbd);
    return (
      _0x118bb3 && this["touched"][_0xf3fafd(0x1577)](_0x45efbd),
      _0x118bb3
    );
  }
  ["touch"](_0x228448) {
    const _0x3701fb = _0x5d322a;
    this[_0x3701fb(0x1ad0)][_0x3701fb(0x1577)](_0x228448);
  }
  [_0x5d322a(0xf7f)]() {
    const _0x42ac4a = _0x5d322a;
    for (const _0x9a969a of this["keys"]())
      this["touched"][_0x42ac4a(0x1577)](_0x9a969a);
  }
  [_0x5d322a(0xc8e)]() {
    const _0x3ac12a = _0x5d322a;
    this[_0x3ac12a(0x1ad0)][_0x3ac12a(0x16f0)]();
  }
  get ["pending"]() {
    const _0x3f312c = _0x5d322a;
    return this[_0x3f312c(0x1ad0)][_0x3f312c(0xe0d)];
  }
  ["replay"](_0x69a7d2, _0x439f50) {
    const _0xc7c7fa = _0x5d322a;
    let _0x543ad6 = "";
    try {
      _0x543ad6 = _0x4a80b7[_0xc7c7fa(0x1ebf)](
        this[_0xc7c7fa(0xa74)],
        _0xc7c7fa(0x157e),
      );
    } catch {
      return 0x0;
    }
    (this[_0xc7c7fa(0x1fa1)] &&
      _0x543ad6 &&
      !_0x543ad6["endsWith"]("\x0a") &&
      (_0x4a80b7["appendFileSync"](this[_0xc7c7fa(0xa74)], "\x0a"),
      (_0x543ad6 += "\x0a")),
      (this["journalBytes"] = Buffer[_0xc7c7fa(0x8c5)](_0x543ad6)));
    let _0x227b91 = 0x0;
    for (const _0x411e28 of _0x543ad6[_0xc7c7fa(0xdea)]("\x0a")) {
      if (!_0x411e28) continue;
      let _0x3b4a32;
      try {
        _0x3b4a32 = JSON["parse"](_0x411e28);
      } catch {
        continue;
      }
      if (
        typeof (_0x3b4a32 == null ? void 0x0 : _0x3b4a32["k"]) ==
        _0xc7c7fa(0xd23)
      ) {
        if (_0x3b4a32["d"]) super[_0xc7c7fa(0x1d64)](_0x3b4a32["k"]);
        else {
          const _0x385c1a = _0x69a7d2(_0x3b4a32["v"]);
          if (_0x385c1a === null) continue;
          (super[_0xc7c7fa(0x124)](_0x3b4a32["k"], _0x385c1a),
            _0x3b4a32["x"] !== void 0x0 &&
              (_0x439f50 == null || _0x439f50(_0x3b4a32["k"], _0x3b4a32["x"])));
        }
        _0x227b91++;
      }
    }
    return _0x227b91;
  }
  [_0x5d322a(0x3fe)]() {
    const _0xe207ab = _0x5d322a;
    if (!this[_0xe207ab(0x1ad0)][_0xe207ab(0xe0d)]) return 0x0;
    if (!this["journaled"]) {
      const _0x36dba2 = this[_0xe207ab(0x1ad0)][_0xe207ab(0xe0d)];
      return (
        this["writeSnapshot"](),
        this[_0xe207ab(0x1ad0)]["clear"](),
        _0x36dba2
      );
    }
    let _0x28ea6c = "";
    for (const _0x1d21ba of this[_0xe207ab(0x1ad0)]) {
      const _0x563c1a = this[_0xe207ab(0x936)](_0x1d21ba);
      _0x28ea6c +=
        JSON[_0xe207ab(0x8f9)](
          this[_0xe207ab(0x448)](_0x1d21ba)
            ? {
                k: _0x1d21ba,
                v: this[_0xe207ab(0x11b7)](_0x1d21ba),
                ...(_0x563c1a === void 0x0 ? {} : { x: _0x563c1a }),
              }
            : { k: _0x1d21ba, d: 0x1 },
        ) + "\x0a";
    }
    const _0x48b05f = this["touched"][_0xe207ab(0xe0d)];
    (_0x4a80b7[_0xe207ab(0xe6)](this[_0xe207ab(0xa74)], _0x28ea6c),
      this["touched"]["clear"]());
    const _0x3ac654 = Buffer["byteLength"](_0x28ea6c);
    return (
      (this[_0xe207ab(0x318)] += _0x3ac654),
      this[_0xe207ab(0x132)] &&
        ((this[_0xe207ab(0x132)][_0xe207ab(0xc0b)] += _0x3ac654),
        this[_0xe207ab(0x132)][_0xe207ab(0xc0b)] <= 0x100 * 0x400 &&
          this[_0xe207ab(0x132)][_0xe207ab(0x17ff)][_0xe207ab(0x124b)](
            _0x28ea6c,
          )),
      !this["suppressCompaction"] &&
        !this[_0xe207ab(0x132)] &&
        this["journalBytes"] > this["compactBytes"] &&
        Date[_0xe207ab(0x1cc6)]() >= this[_0xe207ab(0x1df3)] &&
        this[_0xe207ab(0x19b9)]()[_0xe207ab(0x1e49)]((_0xe4aae6) =>
          console["warn"](
            _0xe207ab(0x3c4) +
              this[_0xe207ab(0x173d)] +
              "\x20compaction\x20failed:",
            _0xe4aae6,
          ),
        ),
      _0x48b05f
    );
  }
  ["compactInBackground"]() {
    const _0x2b9eba = _0x5d322a;
    if (this[_0x2b9eba(0x132)]) return this[_0x2b9eba(0x132)][_0x2b9eba(0xe27)];
    if (!this[_0x2b9eba(0x1fa1)])
      return (this[_0x2b9eba(0x100a)](), Promise[_0x2b9eba(0x6d4)]());
    this[_0x2b9eba(0xcd9)] = !0x0;
    try {
      this[_0x2b9eba(0x3fe)]();
    } finally {
      this["suppressCompaction"] = !0x1;
    }
    const _0x24d2ee =
        this[_0x2b9eba(0x173d)] +
        "." +
        process[_0x2b9eba(0x18be)] +
        "." +
        ++P8 +
        _0x2b9eba(0x392),
      _0x48283b = _0x24d2ee + _0x2b9eba(0x1bdd),
      _0xc1ea05 = new B8(
        new URL(
          import.meta.url["replace"](
            /journal-store\.[cm]?[jt]s(\?.*)?$/,
            _0x2b9eba(0x1ce8),
          ),
        ),
        {
          execArgv: [],
          workerData: {
            file: this[_0x2b9eba(0x173d)],
            bytes: this[_0x2b9eba(0x318)],
            format: this[_0x2b9eba(0xb53)],
            temp: _0x24d2ee,
            tailTemp: _0x48283b,
          },
        },
      ),
      _0x4b9a77 = {
        worker: _0xc1ea05,
        tail: [],
        bytes: 0x0,
        done: Promise[_0x2b9eba(0x6d4)](),
      };
    return (
      (this[_0x2b9eba(0x132)] = _0x4b9a77),
      (_0x4b9a77[_0x2b9eba(0xe27)] = new Promise((_0x35c24f, _0x227caf) => {
        const _0x3647d8 = _0x2b9eba;
        let _0x2f186b = !0x1,
          _0x4e2ac0 = 0x0;
        const _0x2608b0 = (_0x44b8da) => {
          const _0x1808b = _0x3e87;
          _0x2f186b ||
            ((_0x2f186b = !0x0),
            this[_0x1808b(0x132)] === _0x4b9a77 &&
              (this[_0x1808b(0x132)] = null),
            _0x44b8da
              ? ((this[_0x1808b(0x1df3)] = Date["now"]() + 0x7530),
                _0x227caf(_0x44b8da))
              : _0x35c24f());
        };
        (_0xc1ea05["once"](_0x3647d8(0x1734), _0x2608b0),
          _0xc1ea05[_0x3647d8(0xd95)](_0x3647d8(0x1065), (_0x5566c1) => {
            const _0x27e2a1 = _0x3647d8;
            (_0x2608b0(
              this["background"] !== _0x4b9a77
                ? void 0x0
                : new Error(_0x27e2a1(0x207e) + _0x5566c1),
            ),
              _0x4a80b7[_0x27e2a1(0xa08)]
                ["rm"](_0x24d2ee, { force: !0x0 })
                [_0x27e2a1(0x1e49)](() => {}),
              _0x4a80b7["promises"]
                ["rm"](_0x48283b, { force: !0x0 })
                ["catch"](() => {}),
              _0x4a80b7[_0x27e2a1(0xa08)]
                ["rm"](_0x24d2ee + ".previous.tmp", { force: !0x0 })
                ["catch"](() => {}),
              _0x4a80b7[_0x27e2a1(0xa08)]
                ["rm"](_0x48283b + _0x27e2a1(0x1b91), { force: !0x0 })
                ["catch"](() => {}));
          }),
          _0xc1ea05["on"](_0x3647d8(0x16ff), (_0x23f0f9) => {
            const _0x1e2f51 = _0x3647d8;
            if (this["background"] !== _0x4b9a77) {
              _0x2608b0();
              return;
            }
            const _0x33921a = performance[_0x1e2f51(0x1cc6)]();
            try {
              if (_0x4b9a77["bytes"] > 0x100 * 0x400)
                throw new Error(_0x1e2f51(0x2a8));
              if (_0x23f0f9["phase"] === _0x1e2f51(0xb1b)) {
                ((_0x4e2ac0 = _0x4b9a77[_0x1e2f51(0x17ff)]["length"]),
                  _0xc1ea05[_0x1e2f51(0x1a54)](
                    _0x4b9a77[_0x1e2f51(0x17ff)][_0x1e2f51(0x1d54)](""),
                  ));
                return;
              }
              (_0x4b9a77["tail"][_0x1e2f51(0x18ce)] > _0x4e2ac0 &&
                _0x4a80b7["appendFileSync"](
                  _0x48283b,
                  _0x4b9a77[_0x1e2f51(0x17ff)]
                    [_0x1e2f51(0x1cf4)](_0x4e2ac0)
                    ["join"](""),
                ),
                _0x4a80b7[_0x1e2f51(0x627)](_0x24d2ee, this[_0x1e2f51(0x173d)]),
                _0x4a80b7[_0x1e2f51(0x627)](_0x48283b, this[_0x1e2f51(0xa74)]),
                (this[_0x1e2f51(0x318)] = _0x4b9a77["bytes"]),
                console[_0x1e2f51(0x38e)](
                  _0x1e2f51(0x3c4) +
                    this[_0x1e2f51(0x173d)] +
                    _0x1e2f51(0xb0d) +
                    _0x23f0f9[_0x1e2f51(0x17ca)]["toFixed"](0x1) +
                    _0x1e2f51(0x1433) +
                    _0x23f0f9["encodeMs"][_0x1e2f51(0x1c31)](0x1) +
                    "ms\x20write=" +
                    _0x23f0f9[_0x1e2f51(0xc2b)][_0x1e2f51(0x1c31)](0x1) +
                    _0x1e2f51(0x1c8) +
                    (performance[_0x1e2f51(0x1cc6)]() - _0x33921a)["toFixed"](
                      0x1,
                    ) +
                    _0x1e2f51(0x1c47) +
                    _0x4b9a77[_0x1e2f51(0xc0b)] +
                    "B",
                ),
                _0x2608b0());
            } catch (_0x4792a5) {
              (_0x2608b0(_0x4792a5), _0xc1ea05[_0x1e2f51(0x1f7f)]());
            }
          }));
      })),
      _0x4b9a77[_0x2b9eba(0xe27)]
    );
  }
  [_0x5d322a(0x100a)]() {
    const _0x31cbad = _0x5d322a;
    if (!this[_0x31cbad(0x1fa1)]) {
      (this[_0x31cbad(0x11be)](), this[_0x31cbad(0x1ad0)][_0x31cbad(0x16f0)]());
      return;
    }
    (this[_0x31cbad(0x132)] &&
      (this["background"][_0x31cbad(0x1b19)][_0x31cbad(0x1f7f)](),
      (this["background"] = null)),
      (this["suppressCompaction"] = !0x0));
    try {
      this[_0x31cbad(0x3fe)]();
    } finally {
      this[_0x31cbad(0xcd9)] = !0x1;
    }
    (this[_0x31cbad(0x11be)](),
      _0x4a80b7[_0x31cbad(0x14ce)](this["journalFile"], ""),
      (this[_0x31cbad(0x318)] = 0x0));
  }
  [_0x5d322a(0x11be)]() {
    const _0x4dce59 = _0x5d322a,
      _0x4eda68 = this[_0x4dce59(0x173d)] + _0x4dce59(0x3a4);
    (_0x4a80b7["writeFileSync"](
      _0x4eda68,
      JSON[_0x4dce59(0x8f9)](this["snapshot"](this)),
    ),
      _0x4a80b7["renameSync"](_0x4eda68, this[_0x4dce59(0x173d)]),
      !this["journaled"] &&
        this[_0x4dce59(0x318)] &&
        (_0x4a80b7[_0x4dce59(0x14ce)](this[_0x4dce59(0xa74)], ""),
        (this[_0x4dce59(0x318)] = 0x0)));
  }
}
