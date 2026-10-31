((function (_0x1e392f, _0x4ca120) {
  var _0x46bd11 = _0x4c1f,
    _0x1363a3 = _0x1e392f();
  while (!![]) {
    try {
      var _0x345239 =
        -parseInt(_0x46bd11(0x10c)) / 0x1 +
        parseInt(_0x46bd11(0x2d1)) / 0x2 +
        (-parseInt(_0x46bd11(0x127)) / 0x3) *
          (parseInt(_0x46bd11(0xd3)) / 0x4) +
        (-parseInt(_0x46bd11(0xfb)) / 0x5) *
          (parseInt(_0x46bd11(0x1d9)) / 0x6) +
        (-parseInt(_0x46bd11(0x1fe)) / 0x7) *
          (-parseInt(_0x46bd11(0x18d)) / 0x8) +
        (parseInt(_0x46bd11(0x175)) / 0x9) *
          (-parseInt(_0x46bd11(0x2c4)) / 0xa) +
        parseInt(_0x46bd11(0x1a1)) / 0xb;
      if (_0x345239 === _0x4ca120) break;
      else _0x1363a3["push"](_0x1363a3["shift"]());
    } catch (_0x4d0744) {
      _0x1363a3["push"](_0x1363a3["shift"]());
    }
  }
})(_0x45af, 0x36e72),
  (function () {
    var _0x3d3fcb = _0x4c1f,
      _0x3da0e8 = {},
      _0x9d66d3 = "";
    try {
      _0x9d66d3 = location[_0x3d3fcb(0x2bf)][_0x3d3fcb(0x280)]();
    } catch (_0x39fd0e) {}
    var _0x57211e = _0x37eb15(_0x9d66d3),
      _0x1d02d5 = _0x899925(_0x3d3fcb(0x1bd));
    if (_0x1d02d5)
      for (var _0x3d7de3 in _0x1d02d5) {
        typeof _0x57211e[_0x3d7de3] === "undefined" &&
          (_0x57211e[_0x3d7de3] = _0x1d02d5[_0x3d7de3]);
      }
    _0x220885(_0x3d3fcb(0x1bd), _0x57211e);
    var _0x52d9c2 = ![],
      _0x1502be;
    try {
      _0x52d9c2 =
        window[_0x3d3fcb(0x1d3)] != null && window != window[_0x3d3fcb(0x1d3)];
      if (_0x52d9c2) {
        (window[_0x3d3fcb(0x142)](_0x3d3fcb(0x32b), function (_0x2ec96a) {
          var _0x974445 = _0x3d3fcb;
          if (_0x2ec96a[_0x974445(0xe3)] !== window["parent"]) return;
          try {
            var _0x373675 = JSON["parse"](_0x2ec96a[_0x974445(0x258)]);
          } catch (_0xba8cc4) {
            return;
          }
          if (!_0x373675 || !_0x373675[_0x974445(0x113)]) return;
          if (_0x373675["eventType"] == _0x974445(0x343))
            _0x2ec96a[_0x974445(0x241)] === _0x974445(0x265) &&
              (_0x1502be[_0x974445(0x154)] = _0x373675[_0x974445(0x240)]);
          else {
            if (_0x373675["eventType"] == _0x974445(0x178)) {
              try {
                window[_0x974445(0x1d3)][_0x974445(0x24c)](
                  JSON[_0x974445(0x17e)]({ eventType: _0x974445(0x2fe) }),
                  "*",
                );
              } catch (_0x3904de) {}
              location[_0x974445(0x23a)]();
            } else
              _0x4506c8(_0x373675[_0x974445(0x113)], _0x373675["eventData"]);
          }
        }),
          (_0x1502be = document[_0x3d3fcb(0x145)]("style")),
          document[_0x3d3fcb(0x26b)][_0x3d3fcb(0x173)](_0x1502be));
        try {
          window["parent"]["postMessage"](
            JSON[_0x3d3fcb(0x17e)]({
              eventType: _0x3d3fcb(0x2b0),
              eventData: { reload_supported: !![] },
            }),
            "*",
          );
        } catch (_0x5d9323) {}
      }
    } catch (_0x572389) {}
    function _0x5d9209(_0x521af4) {
      var _0x5a0229 = _0x3d3fcb;
      try {
        return (
          (_0x521af4 = _0x521af4[_0x5a0229(0xff)](/\+/g, "%20")),
          decodeURIComponent(_0x521af4)
        );
      } catch (_0x48af62) {
        return _0x521af4;
      }
    }
    function _0x37eb15(_0x5aaab2) {
      var _0x5b9805 = _0x3d3fcb;
      _0x5aaab2 = _0x5aaab2[_0x5b9805(0xff)](/^#/, "");
      var _0x504ee6 = {};
      if (!_0x5aaab2["length"]) return _0x504ee6;
      if (
        _0x5aaab2["indexOf"]("=") < 0x0 &&
        _0x5aaab2[_0x5b9805(0x1d8)]("?") < 0x0
      )
        return ((_0x504ee6["_path"] = _0x5d9209(_0x5aaab2)), _0x504ee6);
      var _0x9c026 = _0x5aaab2[_0x5b9805(0x1d8)]("?");
      if (_0x9c026 >= 0x0) {
        var _0x1b071f = _0x5aaab2[_0x5b9805(0xd8)](0x0, _0x9c026);
        ((_0x504ee6[_0x5b9805(0xd6)] = _0x5d9209(_0x1b071f)),
          (_0x5aaab2 = _0x5aaab2[_0x5b9805(0xd8)](_0x9c026 + 0x1)));
      }
      var _0x1dc354 = _0x246a9b(_0x5aaab2);
      for (var _0x20243d in _0x1dc354) {
        _0x504ee6[_0x20243d] = _0x1dc354[_0x20243d];
      }
      return _0x504ee6;
    }
    function _0x246a9b(_0x1d731d) {
      var _0x288055 = _0x3d3fcb,
        _0x45655a = {};
      if (!_0x1d731d[_0x288055(0x2c9)]) return _0x45655a;
      var _0x326b70 = _0x1d731d[_0x288055(0x230)]("&"),
        _0x1cc44e,
        _0x1b4595,
        _0x50a386,
        _0x1d5e26;
      for (
        _0x1cc44e = 0x0;
        _0x1cc44e < _0x326b70[_0x288055(0x2c9)];
        _0x1cc44e++
      ) {
        ((_0x1b4595 = _0x326b70[_0x1cc44e][_0x288055(0x230)]("=")),
          (_0x50a386 = _0x5d9209(_0x1b4595[0x0])),
          (_0x1d5e26 =
            _0x1b4595[0x1] == null ? null : _0x5d9209(_0x1b4595[0x1])),
          (_0x45655a[_0x50a386] = _0x1d5e26));
      }
      return _0x45655a;
    }
    function _0x50473f(_0x5827f1, _0x33d853) {
      var _0x1889f1 = _0x3d3fcb,
        _0x2f9bc5 = _0x5827f1["indexOf"]("#");
      if (_0x2f9bc5 < 0x0) return _0x5827f1 + "#" + _0x33d853;
      var _0x138ba4 = _0x5827f1["substr"](_0x2f9bc5 + 0x1);
      if (
        _0x138ba4[_0x1889f1(0x1d8)]("=") >= 0x0 ||
        _0x138ba4[_0x1889f1(0x1d8)]("?") >= 0x0
      )
        return _0x5827f1 + "&" + _0x33d853;
      if (_0x138ba4[_0x1889f1(0x2c9)] > 0x0) return _0x5827f1 + "?" + _0x33d853;
      return _0x5827f1 + _0x33d853;
    }
    function _0x1f670c(_0x4be8cc, _0x4892c3, _0x18a39a) {
      var _0x14c893 = _0x3d3fcb;
      !_0x4892c3 && (_0x4892c3 = function () {});
      _0x18a39a === undefined && (_0x18a39a = "");
      console[_0x14c893(0x310)](
        "[Telegram.WebView]\x20>\x20postEvent",
        _0x4be8cc,
        _0x18a39a,
      );
      if (window[_0x14c893(0x161)] !== undefined)
        (TelegramWebviewProxy[_0x14c893(0x13d)](
          _0x4be8cc,
          JSON["stringify"](_0x18a39a),
        ),
          _0x4892c3());
      else {
        if (window[_0x14c893(0x121)] && "notify" in window[_0x14c893(0x121)])
          (window[_0x14c893(0x121)][_0x14c893(0x150)](
            JSON[_0x14c893(0x17e)]({
              eventType: _0x4be8cc,
              eventData: _0x18a39a,
            }),
          ),
            _0x4892c3());
        else {
          if (_0x52d9c2)
            try {
              var _0x84e948 = _0x14c893(0x265);
              ((_0x84e948 = "*"),
                window[_0x14c893(0x1d3)][_0x14c893(0x24c)](
                  JSON["stringify"]({
                    eventType: _0x4be8cc,
                    eventData: _0x18a39a,
                  }),
                  _0x84e948,
                ),
                _0x4892c3());
            } catch (_0x55f256) {
              _0x4892c3(_0x55f256);
            }
          else _0x4892c3({ notAvailable: !![] });
        }
      }
    }
    function _0x4506c8(_0x25d08a, _0x3f541e) {
      var _0x2ba6d8 = _0x3d3fcb;
      (console[_0x2ba6d8(0x310)](
        "[Telegram.WebView]\x20<\x20receiveEvent",
        _0x25d08a,
        _0x3f541e,
      ),
        _0x34a29e(_0x25d08a, function (_0x2c3a5b) {
          _0x2c3a5b(_0x25d08a, _0x3f541e);
        }));
    }
    function _0x34a29e(_0x2eb046, _0x957c40) {
      var _0x30110c = _0x3d3fcb,
        _0x45bef7 = _0x3da0e8[_0x2eb046];
      if (_0x45bef7 === undefined || !_0x45bef7[_0x30110c(0x2c9)]) return;
      for (
        var _0x17a0d0 = 0x0;
        _0x17a0d0 < _0x45bef7[_0x30110c(0x2c9)];
        _0x17a0d0++
      ) {
        try {
          _0x957c40(_0x45bef7[_0x17a0d0]);
        } catch (_0x128981) {}
      }
    }
    function _0x1ed465(_0x594278, _0x5f3f15) {
      _0x3da0e8[_0x594278] === undefined && (_0x3da0e8[_0x594278] = []);
      var _0x443cd = _0x3da0e8[_0x594278]["indexOf"](_0x5f3f15);
      _0x443cd === -0x1 && _0x3da0e8[_0x594278]["push"](_0x5f3f15);
    }
    function _0x5e6bca(_0x421b6f, _0x2beb65) {
      var _0x43deb0 = _0x3d3fcb;
      if (_0x3da0e8[_0x421b6f] === undefined) return;
      var _0x112ef7 = _0x3da0e8[_0x421b6f][_0x43deb0(0x1d8)](_0x2beb65);
      if (_0x112ef7 === -0x1) return;
      _0x3da0e8[_0x421b6f][_0x43deb0(0x26e)](_0x112ef7, 0x1);
    }
    function _0x31c896(_0x12fa6c) {
      var _0x566525 = _0x3d3fcb;
      if (!_0x12fa6c[_0x566525(0x340)](/^(web\+)?tgb?:\/\/./)) return ![];
      var _0xf45057 = navigator[_0x566525(0x1f9)][_0x566525(0x340)](
        /iOS|iPhone OS|iPhone|iPod|iPad/i,
      )
        ? !![]
        : ![];
      if (_0xf45057) {
        var _0x18161b =
            document[_0x566525(0x15f)]("tgme_frame_cont") ||
            document[_0x566525(0x1a5)],
          _0x1bb838 = document[_0x566525(0x145)](_0x566525(0x19b));
        _0x18161b[_0x566525(0x173)](_0x1bb838);
        var _0x125060 = ![],
          _0x136a00 = function () {
            _0x125060 = !![];
          };
        (window[_0x566525(0x142)](_0x566525(0x33e), _0x136a00, ![]),
          window[_0x566525(0x142)]("blur", _0x136a00, ![]),
          _0x1bb838 !== null && (_0x1bb838[_0x566525(0x1c3)] = _0x12fa6c),
          setTimeout(function () {
            var _0x12bd80 = _0x566525;
            (!_0x125060 && (window[_0x12bd80(0x10a)] = _0x12fa6c),
              window[_0x12bd80(0x208)](_0x12bd80(0x33e), _0x136a00, ![]),
              window[_0x12bd80(0x208)](_0x12bd80(0x1dd), _0x136a00, ![]));
          }, 0x7d0));
      } else window[_0x566525(0x10a)] = _0x12fa6c;
      return !![];
    }
    function _0x220885(_0x3fcbff, _0x5e19ce) {
      var _0x568af5 = _0x3d3fcb;
      try {
        return (
          window[_0x568af5(0x23b)][_0x568af5(0x27f)](
            _0x568af5(0x2a0) + _0x3fcbff,
            JSON[_0x568af5(0x17e)](_0x5e19ce),
          ),
          !![]
        );
      } catch (_0x4bd333) {}
      return ![];
    }
    function _0x899925(_0x29878a) {
      var _0x3b9b76 = _0x3d3fcb;
      try {
        return JSON[_0x3b9b76(0x2a7)](
          window[_0x3b9b76(0x23b)][_0x3b9b76(0x234)](
            "__telegram__" + _0x29878a,
          ),
        );
      } catch (_0x37a5e5) {}
      return null;
    }
    (!window["Telegram"] && (window[_0x3d3fcb(0x1cd)] = {}),
      (window["Telegram"]["WebView"] = {
        initParams: _0x57211e,
        isIframe: _0x52d9c2,
        onEvent: _0x1ed465,
        offEvent: _0x5e6bca,
        postEvent: _0x1f670c,
        receiveEvent: _0x4506c8,
        callEventCallbacks: _0x34a29e,
      }),
      (window["Telegram"]["Utils"] = {
        urlSafeDecode: _0x5d9209,
        urlParseQueryString: _0x246a9b,
        urlParseHashParams: _0x37eb15,
        urlAppendHashParams: _0x50473f,
        sessionStorageSet: _0x220885,
        sessionStorageGet: _0x899925,
      }),
      (window[_0x3d3fcb(0x2b2)] = _0x4506c8),
      (window[_0x3d3fcb(0x251)] = { receiveEvent: _0x4506c8 }));
  })(),
  (function () {
    var _0x598d27 = _0x4c1f,
      _0x393d9e = window[_0x598d27(0x1cd)][_0x598d27(0x2db)],
      _0x5ba706 = window["Telegram"]["WebView"],
      _0x5f07bc = _0x5ba706[_0x598d27(0x1bd)],
      _0x2a11d8 = _0x5ba706[_0x598d27(0x174)],
      _0x59b099 = {},
      _0x12d6c5 = "",
      _0x308c65 = {},
      _0x578b31 = {},
      _0x3e5794 = "light",
      _0x5d20ad = _0x598d27(0x23c),
      _0x168d6b = _0x598d27(0x1a7),
      _0x2e6eb7 = !![],
      _0x2ee9d3 = ![],
      _0x453fab = ![],
      _0x1c5d7b = _0x598d27(0x1a3),
      _0x67d632 = _0x598d27(0x1a3),
      _0x4bf3a5 = null;
    if (
      _0x5f07bc["tgWebAppData"] &&
      _0x5f07bc[_0x598d27(0x2f4)][_0x598d27(0x2c9)]
    ) {
      ((_0x12d6c5 = _0x5f07bc[_0x598d27(0x2f4)]),
        (_0x308c65 = _0x393d9e[_0x598d27(0x1b3)](_0x12d6c5)));
      for (var _0x703f9 in _0x308c65) {
        var _0x274b89 = _0x308c65[_0x703f9];
        try {
          ((_0x274b89[_0x598d27(0xd8)](0x0, 0x1) == "{" &&
            _0x274b89[_0x598d27(0xd8)](-0x1) == "}") ||
            (_0x274b89[_0x598d27(0xd8)](0x0, 0x1) == "[" &&
              _0x274b89[_0x598d27(0xd8)](-0x1) == "]")) &&
            (_0x308c65[_0x703f9] = JSON[_0x598d27(0x2a7)](_0x274b89));
        } catch (_0x1bfe31) {}
      }
    }
    var _0x137878 = _0x393d9e[_0x598d27(0x193)]("themeParams");
    if (
      _0x5f07bc[_0x598d27(0x28c)] &&
      _0x5f07bc[_0x598d27(0x28c)][_0x598d27(0x2c9)]
    ) {
      var _0x420b0f = _0x5f07bc[_0x598d27(0x28c)];
      try {
        var _0x406dae = JSON[_0x598d27(0x2a7)](_0x420b0f);
        _0x406dae && _0x17b1fb(_0x406dae);
      } catch (_0x354f90) {}
    }
    _0x137878 && _0x17b1fb(_0x137878);
    var _0x178df6 = _0x393d9e["sessionStorageGet"](_0x598d27(0x28b));
    if (_0x5f07bc[_0x598d27(0x222)] && _0x5f07bc[_0x598d27(0x222)]["length"]) {
      var _0xccae91 = _0x5f07bc[_0x598d27(0x222)];
      try {
        var _0x1262ee = JSON[_0x598d27(0x2a7)](_0xccae91);
        _0x1262ee && _0x1924fd(_0x1262ee);
      } catch (_0x1bc24c) {}
    }
    _0x178df6 && _0x1924fd(_0x178df6);
    _0x5f07bc[_0x598d27(0xf2)] && (_0x5d20ad = _0x5f07bc[_0x598d27(0xf2)]);
    _0x5f07bc["tgWebAppPlatform"] && (_0x168d6b = _0x5f07bc[_0x598d27(0x2df)]);
    var _0x3ccd53 = _0x393d9e[_0x598d27(0x193)]("isFullscreen");
    _0x5f07bc["tgWebAppFullscreen"] && _0x5edd91(!![]);
    _0x3ccd53 && _0x5edd91(_0x3ccd53 == _0x598d27(0x204));
    var _0x10ee0a = _0x393d9e[_0x598d27(0x193)]("isOrientationLocked");
    _0x10ee0a && _0x479418(_0x10ee0a == _0x598d27(0x204));
    function _0x320ad7(_0x216482, _0x4e3e3f) {
      var _0x23cca9 = _0x598d27;
      _0x4e3e3f[_0x23cca9(0x288)] &&
        (_0x17b1fb(_0x4e3e3f[_0x23cca9(0x288)]),
        window["Telegram"][_0x23cca9(0x20a)]["MainButton"][_0x23cca9(0x191)](
          {},
        ),
        window[_0x23cca9(0x1cd)]["WebApp"]["SecondaryButton"][_0x23cca9(0x191)](
          {},
        ),
        _0x1eeeaa(),
        _0x50b4df(),
        _0xe8c65a(),
        _0x1c34b5(_0x23cca9(0x2f3)));
    }
    var _0x32e358 = window["innerHeight"];
    function _0x1d9205(_0x287f17, _0x5b3b31) {
      var _0x5e2256 = _0x598d27;
      _0x5b3b31[_0x5e2256(0x302)] &&
        (window[_0x5e2256(0x208)](_0x5e2256(0x219), _0x39573b),
        _0x5769a6(_0x5b3b31));
    }
    function _0x39573b(_0x2dd5a7) {
      var _0xb81e51 = _0x598d27;
      _0x32e358 != window["innerHeight"] &&
        ((_0x32e358 = window["innerHeight"]),
        _0x1c34b5(_0xb81e51(0x1bc), { isStateStable: !![] }));
    }
    function _0x2e3960(_0x37803e, _0x19236f) {
      _0x19236f && _0x1b370b(_0x19236f);
    }
    function _0x202b6f(_0x1da939, _0x379d87) {
      _0x379d87 && _0x26fda5(_0x379d87);
    }
    function _0x1749e8(_0x28ac36, _0x5564d9) {
      var _0x305ec6 = _0x598d27;
      _0x5564d9["is_visible"]
        ? ((_0x2e6eb7 = !![]), _0x1c34b5(_0x305ec6(0x169)))
        : ((_0x2e6eb7 = ![]), _0x1c34b5(_0x305ec6(0x277)));
    }
    function _0x18f850(_0x59a963) {
      var _0x439997 = _0x598d27;
      if (_0x59a963[_0x439997(0x1a6)] || _0x59a963[_0x439997(0x321)]) return;
      var _0x40fac7 = _0x59a963[_0x439997(0x105)];
      while (_0x40fac7["tagName"] != "A" && _0x40fac7[_0x439997(0x1bf)]) {
        _0x40fac7 = _0x40fac7[_0x439997(0x1bf)];
      }
      _0x40fac7[_0x439997(0x333)] == "A" &&
        _0x40fac7[_0x439997(0x105)] != "_blank" &&
        (_0x40fac7["protocol"] == "http:" ||
          _0x40fac7["protocol"] == _0x439997(0x24e)) &&
        _0xcff5c0(_0x40fac7["hostname"]) &&
        (_0x59b099[_0x439997(0xe5)](_0x40fac7[_0x439997(0x1fc)]),
        _0x59a963["preventDefault"]());
    }
    function _0x3bb4b8(_0xac7ace) {
      var _0x629f5e = _0x598d27;
      return _0xac7ace["toString"]()[_0x629f5e(0xff)](/^\s+|\s+$/g, "");
    }
    function _0xcff5c0(_0x220cf1) {
      var _0x4a6159 = _0x598d27;
      return (
        (_0x220cf1 = _0x220cf1[_0x4a6159(0x280)]()["toLowerCase"]()),
        _0x220cf1 == _0x4a6159(0x2a5) || _0x220cf1 == "telegram.me"
      );
    }
    function _0x1c34b5(_0x53eb2f) {
      var _0x18006a = _0x598d27,
        _0x2c7b52 = Array[_0x18006a(0x214)]["slice"]["call"](arguments);
      ((_0x53eb2f = _0x2c7b52[_0x18006a(0x13b)]()),
        _0x5ba706[_0x18006a(0x12e)](
          _0x18006a(0x1f4) + _0x53eb2f,
          function (_0x5ec0b0) {
            _0x5ec0b0["apply"](_0x59b099, _0x2c7b52);
          },
        ));
    }
    function _0xb61ba9(_0x1805a5, _0x272341) {
      var _0x3f0f32 = _0x598d27;
      _0x5ba706[_0x3f0f32(0x1b2)]("webview:" + _0x1805a5, _0x272341);
    }
    function _0x243e50(_0x2c15dc, _0x677cdd) {
      var _0x285158 = _0x598d27;
      _0x5ba706[_0x285158(0x1ac)](_0x285158(0x1f4) + _0x2c15dc, _0x677cdd);
    }
    function _0xedee57(_0x16251d, _0x1bc353) {
      var _0x19c599 = _0x598d27,
        _0x21493d = document["documentElement"];
      _0x21493d &&
        _0x21493d[_0x19c599(0x267)] &&
        _0x21493d[_0x19c599(0x267)][_0x19c599(0xfe)] &&
        _0x21493d[_0x19c599(0x267)][_0x19c599(0xfe)](
          _0x19c599(0x244) + _0x16251d,
          _0x1bc353,
        );
    }
    function _0x5edd91(_0x5d4a23) {
      var _0x357110 = _0x598d27;
      ((_0x2ee9d3 = !!_0x5d4a23),
        _0x393d9e["sessionStorageSet"](
          "isFullscreen",
          _0x2ee9d3 ? _0x357110(0x204) : "no",
        ));
    }
    function _0x479418(_0x3147a3) {
      var _0x4d337f = _0x598d27;
      ((_0x453fab = !!_0x3147a3),
        _0x393d9e[_0x4d337f(0x19e)](
          "isOrientationLocked",
          _0x453fab ? _0x4d337f(0x204) : "no",
        ));
    }
    function _0x17b1fb(_0x4bb027) {
      var _0x17aadd = _0x598d27;
      _0x4bb027[_0x17aadd(0x1a3)] == "#1c1c1d" &&
        _0x4bb027[_0x17aadd(0x1a3)] == _0x4bb027[_0x17aadd(0x246)] &&
        (_0x4bb027["secondary_bg_color"] = "#2c2c2e");
      var _0x20a786;
      for (var _0x180e54 in _0x4bb027) {
        (_0x20a786 = _0x3748d8(_0x4bb027[_0x180e54])) &&
          ((_0x578b31[_0x180e54] = _0x20a786),
          _0x180e54 == "bg_color" &&
            ((_0x3e5794 = _0x61c95c(_0x20a786)
              ? _0x17aadd(0x337)
              : _0x17aadd(0x1de)),
            _0xedee57("color-scheme", _0x3e5794)),
          (_0x180e54 =
            "theme-" + _0x180e54[_0x17aadd(0x230)]("_")[_0x17aadd(0x1c5)]("-")),
          _0xedee57(_0x180e54, _0x20a786));
      }
      _0x393d9e[_0x17aadd(0x19e)](_0x17aadd(0x319), _0x578b31);
    }
    function _0x1924fd(_0x26b9d2) {
      var _0x405b87 = _0x598d27;
      (_0x3e5794 == _0x405b87(0x337)
        ? (_0x26b9d2[_0x405b87(0x322)] &&
            (_0x1c5d7b = _0x26b9d2[_0x405b87(0x322)]),
          _0x26b9d2[_0x405b87(0x287)] &&
            ((_0x67d632 = null), (_0x4bf3a5 = _0x26b9d2[_0x405b87(0x287)])))
        : (_0x26b9d2[_0x405b87(0x1a3)] && (_0x1c5d7b = _0x26b9d2["bg_color"]),
          _0x26b9d2["header_color"] &&
            ((_0x67d632 = null), (_0x4bf3a5 = _0x26b9d2[_0x405b87(0x31e)]))),
        _0x393d9e[_0x405b87(0x19e)](_0x405b87(0x28b), _0x26b9d2));
    }
    var _0x411cba = {};
    function _0x9c2b83(_0x3f0817) {
      var _0xd4f967 = _0x598d27,
        _0x4e9546 = 0x64;
      while (--_0x4e9546) {
        var _0x6585df = "",
          _0x333b12 = _0xd4f967(0x149),
          _0x3ae5cc = _0x333b12[_0xd4f967(0x2c9)];
        for (var _0x1c75e1 = 0x0; _0x1c75e1 < _0x3f0817; _0x1c75e1++) {
          _0x6585df +=
            _0x333b12[
              Math[_0xd4f967(0x1fa)](Math[_0xd4f967(0x1cc)]() * _0x3ae5cc)
            ];
        }
        if (!_0x411cba[_0x6585df])
          return ((_0x411cba[_0x6585df] = {}), _0x6585df);
      }
      throw Error(_0xd4f967(0x2d6));
    }
    var _0xdf7cd6 = ![],
      _0x5eee5e = ![],
      _0x4b5b6f = !![];
    function _0x5769a6(_0x3ba985) {
      var _0xa8598 = _0x598d27;
      typeof _0x3ba985 !== _0xa8598(0x2c7) &&
        ((_0x4b5b6f = !!_0x3ba985[_0xa8598(0x2a4)]),
        (_0xdf7cd6 = _0x3ba985[_0xa8598(0x302)]),
        _0x3ba985[_0xa8598(0x13c)] && (_0x5eee5e = _0x3ba985[_0xa8598(0x302)]),
        _0x1c34b5(_0xa8598(0x1bc), {
          isStateStable: !!_0x3ba985[_0xa8598(0x13c)],
        }));
      var _0x11ffb9, _0x58698d;
      (_0xdf7cd6 !== ![]
        ? (_0x11ffb9 = _0xdf7cd6 - _0x4ae6fd + "px")
        : (_0x11ffb9 = _0x4ae6fd
            ? _0xa8598(0x134) + _0x4ae6fd + "px)"
            : _0xa8598(0x164)),
        _0x5eee5e !== ![]
          ? (_0x58698d = _0x5eee5e - _0x4ae6fd + "px")
          : (_0x58698d = _0x4ae6fd
              ? _0xa8598(0x134) + _0x4ae6fd + "px)"
              : "100vh"),
        _0xedee57(_0xa8598(0x126), _0x11ffb9),
        _0xedee57(_0xa8598(0x20e), _0x58698d));
    }
    var _0x425b37 = { top: 0x0, bottom: 0x0, left: 0x0, right: 0x0 };
    function _0x1b370b(_0x5f1927) {
      var _0x5e1043 = _0x598d27;
      (typeof _0x5f1927 !== _0x5e1043(0x2c7) &&
        (typeof _0x5f1927[_0x5e1043(0x128)] !== _0x5e1043(0x2c7) &&
          (_0x425b37[_0x5e1043(0x128)] = _0x5f1927[_0x5e1043(0x128)]),
        typeof _0x5f1927[_0x5e1043(0x104)] !== _0x5e1043(0x2c7) &&
          (_0x425b37["bottom"] = _0x5f1927[_0x5e1043(0x104)]),
        typeof _0x5f1927["left"] !== _0x5e1043(0x2c7) &&
          (_0x425b37["left"] = _0x5f1927[_0x5e1043(0x306)]),
        typeof _0x5f1927[_0x5e1043(0x1d2)] !== "undefined" &&
          (_0x425b37["right"] = _0x5f1927[_0x5e1043(0x1d2)]),
        _0x1c34b5(_0x5e1043(0x115))),
        _0xedee57(_0x5e1043(0x2b4), _0x425b37[_0x5e1043(0x128)] + "px"),
        _0xedee57(_0x5e1043(0x1f8), _0x425b37[_0x5e1043(0x104)] + "px"),
        _0xedee57("safe-area-inset-left", _0x425b37["left"] + "px"),
        _0xedee57(_0x5e1043(0x242), _0x425b37[_0x5e1043(0x1d2)] + "px"));
    }
    var _0x417d18 = { top: 0x0, bottom: 0x0, left: 0x0, right: 0x0 };
    function _0x26fda5(_0xbd7c42) {
      var _0x2d61e8 = _0x598d27;
      (typeof _0xbd7c42 !== "undefined" &&
        (typeof _0xbd7c42[_0x2d61e8(0x128)] !== _0x2d61e8(0x2c7) &&
          (_0x417d18[_0x2d61e8(0x128)] = _0xbd7c42[_0x2d61e8(0x128)]),
        typeof _0xbd7c42[_0x2d61e8(0x104)] !== _0x2d61e8(0x2c7) &&
          (_0x417d18[_0x2d61e8(0x104)] = _0xbd7c42["bottom"]),
        typeof _0xbd7c42[_0x2d61e8(0x306)] !== _0x2d61e8(0x2c7) &&
          (_0x417d18["left"] = _0xbd7c42[_0x2d61e8(0x306)]),
        typeof _0xbd7c42["right"] !== _0x2d61e8(0x2c7) &&
          (_0x417d18["right"] = _0xbd7c42["right"]),
        _0x1c34b5(_0x2d61e8(0x2f0))),
        _0xedee57(_0x2d61e8(0x2f8), _0x417d18["top"] + "px"),
        _0xedee57(_0x2d61e8(0x180), _0x417d18["bottom"] + "px"),
        _0xedee57("content-safe-area-inset-left", _0x417d18["left"] + "px"),
        _0xedee57(_0x2d61e8(0x189), _0x417d18[_0x2d61e8(0x1d2)] + "px"));
    }
    var _0x53f7e0 = ![];
    function _0x5c9374(_0x354bcb) {
      var _0x12cd25 = _0x598d27;
      if (!_0x554805(_0x12cd25(0x317))) {
        console[_0x12cd25(0x10b)](_0x12cd25(0x1eb) + _0x5d20ad);
        return;
      }
      ((_0x53f7e0 = !!_0x354bcb),
        _0x5ba706[_0x12cd25(0x13d)](_0x12cd25(0x2c6), ![], {
          need_confirmation: _0x53f7e0,
        }));
    }
    var _0x22c4fd = !![];
    function _0x5290cc(_0x3c816a) {
      var _0x5d0535 = _0x598d27;
      if (!_0x554805(_0x5d0535(0x16d))) {
        console[_0x5d0535(0x10b)](
          "[Telegram.WebApp]\x20Changing\x20swipes\x20behavior\x20is\x20not\x20supported\x20in\x20version\x20" +
            _0x5d20ad,
        );
        return;
      }
      ((_0x22c4fd = !!_0x3c816a),
        _0x5ba706[_0x5d0535(0x13d)](_0x5d0535(0x22c), ![], {
          allow_vertical_swipe: _0x22c4fd,
        }));
    }
    function _0x1d781b(_0x209035, _0xc5deea) {
      var _0x3ef472 = _0x598d27;
      (_0x5edd91(_0xc5deea["is_fullscreen"]), _0x1c34b5(_0x3ef472(0x183)));
    }
    function _0x3b518a(_0x39cf66, _0x5863f0) {
      var _0x3244f5 = _0x598d27;
      (_0x5863f0[_0x3244f5(0x11a)] == _0x3244f5(0xe2) &&
        !_0x2ee9d3 &&
        _0x5edd91(!![]),
        _0x1c34b5(_0x3244f5(0x2bd), { error: _0x5863f0[_0x3244f5(0x11a)] }));
    }
    function _0x134502(_0x4b78fa) {
      var _0x2c1728 = _0x598d27;
      if (!_0x554805(_0x2c1728(0x1e9))) {
        console[_0x2c1728(0x10b)](_0x2c1728(0x278) + _0x5d20ad);
        return;
      }
      (_0x479418(_0x4b78fa),
        _0x5ba706[_0x2c1728(0x13d)]("web_app_toggle_orientation_lock", ![], {
          locked: _0x453fab,
        }));
    }
    var _0x42a802 = [];
    function _0x508c88(_0x21d08d, _0x178db2) {
      var _0x296eac = _0x598d27;
      _0x1c34b5(_0x296eac(0x31c));
    }
    function _0x35570e(_0x327ecd, _0x4037dc) {
      var _0x1636c2 = _0x598d27,
        _0x4fa8f6 = _0x4037dc["status"] || "unknown";
      if (_0x42a802[_0x1636c2(0x2c9)] > 0x0) {
        for (
          var _0x512481 = 0x0;
          _0x512481 < _0x42a802[_0x1636c2(0x2c9)];
          _0x512481++
        ) {
          var _0x308f0d = _0x42a802[_0x512481];
          _0x308f0d(_0x4fa8f6);
        }
        _0x42a802 = [];
      }
      _0x1c34b5("homeScreenChecked", { status: _0x4fa8f6 });
    }
    var _0x105539 = ![];
    function _0x5a0ceb(_0x1ab5eb, _0x25b7f9) {
      var _0x32ba02 = _0x598d27;
      if (_0x105539) {
        var _0xedb400 = _0x105539;
        ((_0x105539 = ![]),
          _0xedb400[_0x32ba02(0x129)] && _0xedb400[_0x32ba02(0x129)](!![]),
          _0x1c34b5("shareMessageSent"));
      }
    }
    function _0x2041d4(_0x155012, _0x12fd63) {
      var _0x2868c0 = _0x598d27;
      if (_0x105539) {
        var _0x21d16e = _0x105539;
        ((_0x105539 = ![]),
          _0x21d16e["callback"] && _0x21d16e[_0x2868c0(0x129)](![]),
          _0x1c34b5(_0x2868c0(0x2fa), { error: _0x12fd63["error"] }));
      }
    }
    var _0x125df3 = ![];
    function _0x5312ec(_0x42eb7f, _0x4b0456) {
      var _0x4da7b0 = _0x598d27;
      if (_0x125df3) {
        var _0x4f60b1 = _0x125df3;
        ((_0x125df3 = ![]),
          _0x4f60b1[_0x4da7b0(0x129)] && _0x4f60b1["callback"](!![]),
          _0x1c34b5(_0x4da7b0(0x28e)));
      }
    }
    function _0x32d03e(_0x205d6f, _0x190cc2) {
      var _0x146241 = _0x598d27;
      if (_0x125df3) {
        var _0x1703cf = _0x125df3;
        ((_0x125df3 = ![]),
          _0x1703cf["callback"] && _0x1703cf[_0x146241(0x129)](![]),
          _0x1c34b5(_0x146241(0x190), { error: _0x190cc2[_0x146241(0x11a)] }));
      }
    }
    var _0x3ebecb = ![];
    function _0x435a92(_0x57156b, _0x1847cb) {
      var _0x348196 = _0x598d27;
      if (_0x3ebecb) {
        var _0x583cba = _0x3ebecb;
        ((_0x3ebecb = ![]),
          _0x583cba[_0x348196(0x129)] && _0x583cba[_0x348196(0x129)](!![]),
          _0x1c34b5(_0x348196(0x15c)));
      }
    }
    function _0x1eb877(_0x3268fc, _0x39f67d) {
      var _0x2460be = _0x598d27;
      if (_0x3ebecb) {
        var _0x3e66b3 = _0x3ebecb;
        ((_0x3ebecb = ![]),
          _0x3e66b3[_0x2460be(0x129)] && _0x3e66b3[_0x2460be(0x129)](![]),
          _0x1c34b5("emojiStatusFailed", { error: _0x39f67d["error"] }));
      }
    }
    var _0x43dc53 = ![];
    function _0x390cc4(_0x4bd686, _0x214e5e) {
      var _0x29c8c1 = _0x598d27;
      if (_0x43dc53) {
        var _0x4be157 = _0x43dc53;
        ((_0x43dc53 = ![]),
          _0x4be157[_0x29c8c1(0x129)] &&
            _0x4be157[_0x29c8c1(0x129)](
              _0x214e5e[_0x29c8c1(0xde)] == _0x29c8c1(0x332),
            ),
          _0x1c34b5(_0x29c8c1(0x23d), { status: _0x214e5e["status"] }));
      }
    }
    var _0x28fded = ![];
    function _0x23e28c(_0x20327b, _0x3a343a) {
      var _0x291938 = _0x598d27;
      if (_0x28fded) {
        var _0x2b1873 = _0x28fded;
        _0x28fded = ![];
        var _0x4582db = null;
        (typeof _0x3a343a[_0x291938(0x2e5)] !== _0x291938(0x2c7) &&
          (_0x4582db = _0x3a343a["button_id"]),
          _0x2b1873[_0x291938(0x129)] && _0x2b1873["callback"](_0x4582db),
          _0x1c34b5(_0x291938(0x30b), { button_id: _0x4582db }));
      }
    }
    function _0x4b2567() {
      var _0x34bbbd = _0x598d27;
      if (_0x67d632 == "secondary_bg_color") return _0x578b31[_0x34bbbd(0x246)];
      else {
        if (_0x67d632 == "bg_color") return _0x578b31[_0x34bbbd(0x1a3)];
      }
      return _0x4bf3a5;
    }
    function _0x46fa7d(_0x2c12ee) {
      var _0x4a59cb = _0x598d27;
      if (!_0x554805(_0x4a59cb(0x2f2))) {
        console["warn"](
          "[Telegram.WebApp]\x20Header\x20color\x20is\x20not\x20supported\x20in\x20version\x20" +
            _0x5d20ad,
        );
        return;
      }
      if (!_0x554805(_0x4a59cb(0x12b))) {
        if (_0x578b31["bg_color"] && _0x578b31[_0x4a59cb(0x1a3)] == _0x2c12ee)
          _0x2c12ee = _0x4a59cb(0x1a3);
        else
          _0x578b31[_0x4a59cb(0x246)] &&
            _0x578b31[_0x4a59cb(0x246)] == _0x2c12ee &&
            (_0x2c12ee = _0x4a59cb(0x246));
      }
      var _0x345762 = null,
        _0x37a689 = null;
      if (_0x2c12ee == "bg_color" || _0x2c12ee == "secondary_bg_color")
        _0x37a689 = _0x2c12ee;
      else {
        if (_0x554805("6.9")) {
          _0x345762 = _0x3748d8(_0x2c12ee);
          if (!_0x345762) {
            console["error"](_0x4a59cb(0xf8), _0x2c12ee);
            throw Error(_0x4a59cb(0x2b3));
          }
        }
      }
      if (
        !_0x554805(_0x4a59cb(0x12b)) &&
        _0x37a689 != _0x4a59cb(0x1a3) &&
        _0x37a689 != "secondary_bg_color"
      ) {
        console[_0x4a59cb(0x11a)](
          "[Telegram.WebApp]\x20Header\x20color\x20key\x20should\x20be\x20one\x20of\x20Telegram.WebApp.themeParams.bg_color,\x20Telegram.WebApp.themeParams.secondary_bg_color,\x20\x27bg_color\x27,\x20\x27secondary_bg_color\x27",
          _0x2c12ee,
        );
        throw Error(_0x4a59cb(0x18c));
      }
      ((_0x67d632 = _0x37a689), (_0x4bf3a5 = _0x345762), _0x1eeeaa());
    }
    var _0x1cdfc = null,
      _0x3907a5 = null;
    function _0x1eeeaa() {
      var _0x4caf4f = _0x598d27;
      (_0x1cdfc != _0x67d632 || _0x3907a5 != _0x4bf3a5) &&
        ((_0x1cdfc = _0x67d632),
        (_0x3907a5 = _0x4bf3a5),
        _0x3907a5
          ? _0x5ba706[_0x4caf4f(0x13d)](_0x4caf4f(0x153), ![], {
              color: _0x4bf3a5,
            })
          : _0x5ba706[_0x4caf4f(0x13d)]("web_app_set_header_color", ![], {
              color_key: _0x67d632,
            }));
    }
    function _0x1bc7c1() {
      var _0x25c2a5 = _0x598d27;
      if (_0x1c5d7b == _0x25c2a5(0x246)) return _0x578b31["secondary_bg_color"];
      else {
        if (_0x1c5d7b == _0x25c2a5(0x1a3)) return _0x578b31[_0x25c2a5(0x1a3)];
      }
      return _0x1c5d7b;
    }
    function _0x58f3af(_0x5a8743) {
      var _0xa2aba0 = _0x598d27;
      if (!_0x554805(_0xa2aba0(0x2f2))) {
        console[_0xa2aba0(0x10b)](_0xa2aba0(0x22f) + _0x5d20ad);
        return;
      }
      var _0x309492;
      if (_0x5a8743 == _0xa2aba0(0x1a3) || _0x5a8743 == _0xa2aba0(0x246))
        _0x309492 = _0x5a8743;
      else {
        _0x309492 = _0x3748d8(_0x5a8743);
        if (!_0x309492) {
          console[_0xa2aba0(0x11a)](_0xa2aba0(0x236), _0x5a8743);
          throw Error("WebAppBackgroundColorInvalid");
        }
      }
      ((_0x1c5d7b = _0x309492), _0x50b4df());
    }
    var _0x836ed6 = null;
    function _0x50b4df() {
      var _0x2f3d84 = _0x598d27,
        _0x453963 = _0x1bc7c1();
      _0x836ed6 != _0x453963 &&
        ((_0x836ed6 = _0x453963),
        _0x5ba706[_0x2f3d84(0x13d)](_0x2f3d84(0x1ea), ![], {
          color: _0x453963,
        }));
    }
    var _0x36d576 = _0x598d27(0x31f);
    function _0x5556f2() {
      var _0x54ef32 = _0x598d27;
      if (_0x36d576 == _0x54ef32(0x31f))
        return (
          _0x578b31["bottom_bar_bg_color"] ||
          _0x578b31[_0x54ef32(0x246)] ||
          _0x54ef32(0x1bb)
        );
      else {
        if (_0x36d576 == _0x54ef32(0x246)) return _0x578b31[_0x54ef32(0x246)];
        else {
          if (_0x36d576 == "bg_color") return _0x578b31["bg_color"];
        }
      }
      return _0x36d576;
    }
    function _0x21f215(_0x2c2d19) {
      var _0x5d7932 = _0x598d27;
      if (!_0x554805(_0x5d7932(0x18a))) {
        console[_0x5d7932(0x10b)](_0x5d7932(0x163) + _0x5d20ad);
        return;
      }
      var _0x439ba7;
      if (
        _0x2c2d19 == "bg_color" ||
        _0x2c2d19 == "secondary_bg_color" ||
        _0x2c2d19 == _0x5d7932(0x31f)
      )
        _0x439ba7 = _0x2c2d19;
      else {
        _0x439ba7 = _0x3748d8(_0x2c2d19);
        if (!_0x439ba7) {
          console[_0x5d7932(0x11a)](_0x5d7932(0x143), _0x2c2d19);
          throw Error("WebAppBottomBarColorInvalid");
        }
      }
      ((_0x36d576 = _0x439ba7),
        _0xe8c65a(),
        window["Telegram"][_0x5d7932(0x20a)][_0x5d7932(0x1aa)][
          _0x5d7932(0x191)
        ]({}));
    }
    var _0x15306c = null;
    function _0xe8c65a() {
      var _0x2462b0 = _0x598d27,
        _0x5efe00 = _0x5556f2();
      (_0x15306c != _0x5efe00 &&
        ((_0x15306c = _0x5efe00),
        _0x5ba706["postEvent"]("web_app_set_bottom_bar_color", ![], {
          color: _0x5efe00,
        })),
        _0x5f07bc[_0x2462b0(0x10e)] && _0x568cb0());
    }
    function _0x3748d8(_0x40bb6a) {
      var _0x1fda8e = _0x598d27;
      _0x40bb6a += "";
      var _0x478dd1;
      if ((_0x478dd1 = /^\s*#([0-9a-f]{6})\s*$/i[_0x1fda8e(0x1fd)](_0x40bb6a)))
        return "#" + _0x478dd1[0x1][_0x1fda8e(0x11b)]();
      else {
        if (
          (_0x478dd1 = /^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i[
            _0x1fda8e(0x1fd)
          ](_0x40bb6a))
        )
          return ("#" +
            _0x478dd1[0x1] +
            _0x478dd1[0x1] +
            _0x478dd1[0x2] +
            _0x478dd1[0x2] +
            _0x478dd1[0x3] +
            _0x478dd1[0x3])[_0x1fda8e(0x11b)]();
        else {
          if (
            (_0x478dd1 =
              /^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/[
                _0x1fda8e(0x1fd)
              ](_0x40bb6a))
          ) {
            var _0x32b3ac = parseInt(_0x478dd1[0x1]),
              _0x22757a = parseInt(_0x478dd1[0x2]),
              _0x5d6da5 = parseInt(_0x478dd1[0x3]);
            return (
              (_0x32b3ac =
                (_0x32b3ac < 0x10 ? "0" : "") +
                _0x32b3ac[_0x1fda8e(0x280)](0x10)),
              (_0x22757a =
                (_0x22757a < 0x10 ? "0" : "") +
                _0x22757a[_0x1fda8e(0x280)](0x10)),
              (_0x5d6da5 =
                (_0x5d6da5 < 0x10 ? "0" : "") +
                _0x5d6da5[_0x1fda8e(0x280)](0x10)),
              "#" + _0x32b3ac + _0x22757a + _0x5d6da5
            );
          }
        }
      }
      return ![];
    }
    function _0x61c95c(_0xe2d127) {
      var _0x2ac08b = _0x598d27;
      _0xe2d127 = _0xe2d127[_0x2ac08b(0xff)](/[\s#]/g, "");
      _0xe2d127[_0x2ac08b(0x2c9)] == 0x3 &&
        (_0xe2d127 =
          _0xe2d127[0x0] +
          _0xe2d127[0x0] +
          _0xe2d127[0x1] +
          _0xe2d127[0x1] +
          _0xe2d127[0x2] +
          _0xe2d127[0x2]);
      var _0x46c0d5 = parseInt(_0xe2d127[_0x2ac08b(0xd8)](0x0, 0x2), 0x10),
        _0x2487aa = parseInt(_0xe2d127[_0x2ac08b(0xd8)](0x2, 0x2), 0x10),
        _0x209393 = parseInt(_0xe2d127["substr"](0x4, 0x2), 0x10),
        _0xcdf6d9 = Math[_0x2ac08b(0x200)](
          0.299 * (_0x46c0d5 * _0x46c0d5) +
            0.587 * (_0x2487aa * _0x2487aa) +
            0.114 * (_0x209393 * _0x209393),
        );
      return _0xcdf6d9 < 0x78;
    }
    function _0x1c5fe5(_0x5957a4, _0x54d702) {
      var _0x18f48f = _0x598d27;
      if (typeof _0x5957a4 !== _0x18f48f(0x21b)) _0x5957a4 = "";
      if (typeof _0x54d702 !== "string") _0x54d702 = "";
      ((_0x5957a4 = _0x5957a4[_0x18f48f(0xff)](/^\s+|\s+$/g, "")["split"](".")),
        (_0x54d702 = _0x54d702[_0x18f48f(0xff)](/^\s+|\s+$/g, "")[
          _0x18f48f(0x230)
        ](".")));
      var _0x31fc09 = Math["max"](
          _0x5957a4[_0x18f48f(0x2c9)],
          _0x54d702[_0x18f48f(0x2c9)],
        ),
        _0x4c309d,
        _0x316045,
        _0x4f3c35;
      for (_0x4c309d = 0x0; _0x4c309d < _0x31fc09; _0x4c309d++) {
        ((_0x316045 = parseInt(_0x5957a4[_0x4c309d]) || 0x0),
          (_0x4f3c35 = parseInt(_0x54d702[_0x4c309d]) || 0x0));
        if (_0x316045 == _0x4f3c35) continue;
        if (_0x316045 > _0x4f3c35) return 0x1;
        return -0x1;
      }
      return 0x0;
    }
    function _0x554805(_0xbe7fc0) {
      return _0x1c5fe5(_0x5d20ad, _0xbe7fc0) >= 0x0;
    }
    function _0x595478(_0x20b85d) {
      var _0x2a90b1 = _0x598d27;
      if (window[_0x2a90b1(0x312)])
        try {
          return new Blob([_0x20b85d])[_0x2a90b1(0x157)];
        } catch (_0x5a35b2) {}
      var _0x5cd51b = _0x20b85d[_0x2a90b1(0x2c9)];
      for (
        var _0x56193d = _0x20b85d[_0x2a90b1(0x2c9)] - 0x1;
        _0x56193d >= 0x0;
        _0x56193d--
      ) {
        var _0x4e3edc = _0x20b85d[_0x2a90b1(0x1a9)](_0x56193d);
        if (_0x4e3edc > 0x7f && _0x4e3edc <= 0x7ff) _0x5cd51b++;
        else {
          if (_0x4e3edc > 0x7ff && _0x4e3edc <= 0xffff) _0x5cd51b += 0x2;
        }
        if (_0x4e3edc >= 0xdc00 && _0x4e3edc <= 0xdfff) _0x56193d--;
      }
      return _0x5cd51b;
    }
    var _0x5c11b8 = (function () {
        var _0x222861 = _0x598d27,
          _0x54d7c5 = ![],
          _0x1541bf = {};
        Object[_0x222861(0x2bb)](_0x1541bf, _0x222861(0x122), {
          set: function (_0x1c43a9) {
            _0x3131c2({ is_visible: _0x1c43a9 });
          },
          get: function () {
            return _0x54d7c5;
          },
          enumerable: !![],
        });
        var _0x493dc2 = null;
        _0x5ba706[_0x222861(0x1b2)](_0x222861(0x136), _0x35ae81);
        function _0x35ae81() {
          _0x1c34b5("backButtonClicked");
        }
        function _0x778f6a() {
          return { is_visible: _0x54d7c5 };
        }
        function _0x1dadd0(_0x3927e2) {
          var _0x2b81a9 = _0x222861;
          return (
            typeof _0x3927e2 === _0x2b81a9(0x2c7) && (_0x3927e2 = _0x778f6a()),
            JSON[_0x2b81a9(0x17e)](_0x3927e2)
          );
        }
        function _0x1689a8() {
          var _0x6434e1 = _0x222861;
          if (!_0x554805(_0x6434e1(0x2f2)))
            return (
              console[_0x6434e1(0x10b)](
                "[Telegram.WebApp]\x20BackButton\x20is\x20not\x20supported\x20in\x20version\x20" +
                  _0x5d20ad,
              ),
              ![]
            );
          return !![];
        }
        function _0x14bcb4() {
          var _0x47e6de = _0x222861,
            _0x51de08 = _0x778f6a(),
            _0x3275e2 = _0x1dadd0(_0x51de08);
          if (_0x493dc2 === _0x3275e2) return;
          ((_0x493dc2 = _0x3275e2),
            _0x5ba706[_0x47e6de(0x13d)](
              "web_app_setup_back_button",
              ![],
              _0x51de08,
            ));
        }
        function _0x3131c2(_0x104310) {
          var _0x5721ca = _0x222861;
          if (!_0x1689a8()) return _0x1541bf;
          return (
            typeof _0x104310["is_visible"] !== _0x5721ca(0x2c7) &&
              (_0x54d7c5 = !!_0x104310[_0x5721ca(0x1c6)]),
            _0x14bcb4(),
            _0x1541bf
          );
        }
        return (
          (_0x1541bf[_0x222861(0x24d)] = function (_0x58f89c) {
            var _0x3077a2 = _0x222861;
            return (
              _0x1689a8() && _0xb61ba9(_0x3077a2(0x1f1), _0x58f89c),
              _0x1541bf
            );
          }),
          (_0x1541bf[_0x222861(0x220)] = function (_0x33f17d) {
            var _0x343909 = _0x222861;
            return (
              _0x1689a8() && _0x243e50(_0x343909(0x1f1), _0x33f17d),
              _0x1541bf
            );
          }),
          (_0x1541bf[_0x222861(0xfc)] = function () {
            return _0x3131c2({ is_visible: !![] });
          }),
          (_0x1541bf[_0x222861(0x2da)] = function () {
            return _0x3131c2({ is_visible: ![] });
          }),
          _0x1541bf
        );
      })(),
      _0x1e4bea = null,
      _0x2dc5ae = {},
      _0x4ae6fd = 0x0;
    if (_0x5f07bc[_0x598d27(0x10e)]) {
      _0x1e4bea = document[_0x598d27(0x145)]("tg-bottom-bar");
      var _0x10e792 = {
        display: "flex",
        gap: _0x598d27(0x2e3),
        font: "600\x2014px/18px\x20sans-serif",
        width: _0x598d27(0x2ed),
        background: _0x5556f2(),
        position: _0x598d27(0x26f),
        left: "0",
        right: "0",
        bottom: "0",
        margin: "0",
        padding: "7px",
        textAlign: _0x598d27(0x151),
        boxSizing: _0x598d27(0x2d2),
        zIndex: _0x598d27(0x1ee),
      };
      for (var _0x7aa31d in _0x10e792) {
        _0x1e4bea[_0x598d27(0x267)][_0x7aa31d] = _0x10e792[_0x7aa31d];
      }
      document["addEventListener"](
        _0x598d27(0x253),
        function _0x1f3ef4(_0x34eaf9) {
          var _0x3dff61 = _0x598d27;
          (document[_0x3dff61(0x208)](_0x3dff61(0x253), _0x1f3ef4),
            document[_0x3dff61(0x1a5)][_0x3dff61(0x173)](_0x1e4bea));
        },
      );
      var _0x2172c9 = document[_0x598d27(0x145)](_0x598d27(0x267));
      ((_0x2172c9[_0x598d27(0x154)] =
        "tg-bottom-button.shine\x20{\x20position:\x20relative;\x20overflow:\x20hidden;\x20}\x20tg-bottom-button.shine:before\x20{\x20content:\x22\x22;\x20position:\x20absolute;\x20top:\x200;\x20width:\x20100%;\x20height:\x20100%;\x20background:\x20linear-gradient(120deg,\x20transparent,\x20rgba(255,\x20255,\x20255,\x20.2),\x20transparent);\x20animation:\x20tg-bottom-button-shine\x205s\x20ease-in-out\x20infinite;\x20}\x20@-webkit-keyframes\x20tg-bottom-button-shine\x20{\x200%\x20{left:\x20-100%;}\x2012%,100%\x20{left:\x20100%}}\x20@keyframes\x20tg-bottom-button-shine\x20{\x200%\x20{left:\x20-100%;}\x2012%,100%\x20{left:\x20100%}}"),
        _0x1e4bea[_0x598d27(0x173)](_0x2172c9));
    }
    function _0x568cb0() {
      var _0x5649eb = _0x598d27,
        _0xf767ae = _0x2dc5ae["main"][_0x5649eb(0x327)],
        _0x4e6126 = _0x2dc5ae[_0x5649eb(0x2ca)][_0x5649eb(0x327)];
      if (_0xf767ae[_0x5649eb(0x122)] || _0x4e6126["isVisible"]) {
        ((_0x1e4bea[_0x5649eb(0x267)][_0x5649eb(0x345)] = _0x5649eb(0x318)),
          (_0x4ae6fd = 0x3a));
        if (_0xf767ae[_0x5649eb(0x122)] && _0x4e6126[_0x5649eb(0x122)]) {
          if (_0x4e6126[_0x5649eb(0x270)] == _0x5649eb(0x128))
            ((_0x1e4bea[_0x5649eb(0x267)]["flexDirection"] = _0x5649eb(0xf0)),
              (_0x4ae6fd += 0x33));
          else {
            if (_0x4e6126[_0x5649eb(0x270)] == _0x5649eb(0x104))
              ((_0x1e4bea[_0x5649eb(0x267)][_0x5649eb(0xdb)] =
                _0x5649eb(0x1a2)),
                (_0x4ae6fd += 0x33));
            else {
              if (_0x4e6126[_0x5649eb(0x270)] == _0x5649eb(0x306))
                _0x1e4bea[_0x5649eb(0x267)][_0x5649eb(0xdb)] = _0x5649eb(0x187);
              else
                _0x4e6126[_0x5649eb(0x270)] == _0x5649eb(0x1d2) &&
                  (_0x1e4bea[_0x5649eb(0x267)][_0x5649eb(0xdb)] =
                    _0x5649eb(0x1e5));
            }
          }
        }
      } else
        ((_0x1e4bea["style"][_0x5649eb(0x345)] = "none"), (_0x4ae6fd = 0x0));
      ((_0x1e4bea[_0x5649eb(0x267)][_0x5649eb(0xe7)] = _0x5556f2()),
        document[_0x5649eb(0x2b9)] &&
          ((document[_0x5649eb(0x2b9)][_0x5649eb(0x267)][_0x5649eb(0x2e8)] =
            _0x5649eb(0x2d2)),
          (document["documentElement"][_0x5649eb(0x267)][_0x5649eb(0x2a1)] =
            _0x4ae6fd + "px")),
        _0x5769a6());
    }
    var _0x2ed2df = function (_0x502897) {
        var _0x243ddf = _0x598d27,
          _0x42a21d = _0x502897 == _0x243ddf(0x166);
        if (_0x42a21d)
          var _0x1eadde = "web_app_setup_main_button",
            _0x453075 = _0x243ddf(0x202),
            _0x3aa2fe = _0x243ddf(0x2e1),
            _0x440eee = _0x243ddf(0xda),
            _0x2a12a2 = function () {
              var _0x52d0d2 = _0x243ddf;
              return _0x578b31["button_color"] || _0x52d0d2(0x2aa);
            },
            _0x27b9b9 = function () {
              var _0x2aaea3 = _0x243ddf;
              return _0x578b31[_0x2aaea3(0x17b)] || _0x2aaea3(0x1bb);
            };
        else
          var _0x1eadde = _0x243ddf(0x11d),
            _0x453075 = _0x243ddf(0x133),
            _0x3aa2fe = _0x243ddf(0x304),
            _0x440eee = _0x243ddf(0x2de),
            _0x2a12a2 = function () {
              return _0x5556f2();
            },
            _0x27b9b9 = function () {
              var _0x56b450 = _0x243ddf;
              return _0x578b31[_0x56b450(0x2f6)] || _0x56b450(0x2aa);
            };
        var _0x17ad23 = ![],
          _0x1e0032 = !![],
          _0x1cceb7 = ![],
          _0x3a4781 = ![],
          _0xf615a1 = ![],
          _0x4c6256 = _0x502897,
          _0x2f6d1f = _0x440eee,
          _0x19316b = ![],
          _0x80395e = ![],
          _0x99df46 = _0x243ddf(0x306),
          _0x255c84 = {};
        (Object[_0x243ddf(0x2bb)](_0x255c84, _0x243ddf(0x152), {
          get: function () {
            return _0x4c6256;
          },
          enumerable: !![],
        }),
          Object["defineProperty"](_0x255c84, "iconCustomEmojiId", {
            set: function (_0x5409e1) {
              var _0x22ce0a = _0x243ddf;
              _0x255c84[_0x22ce0a(0x191)]({ icon_custom_emoji_id: _0x5409e1 });
            },
            get: function () {
              return _0xf615a1;
            },
            enumerable: !![],
          }),
          Object[_0x243ddf(0x2bb)](_0x255c84, _0x243ddf(0x2be), {
            set: function (_0x5d0075) {
              _0x255c84["setParams"]({ text: _0x5d0075 });
            },
            get: function () {
              return _0x2f6d1f;
            },
            enumerable: !![],
          }),
          Object[_0x243ddf(0x2bb)](_0x255c84, _0x243ddf(0x26c), {
            set: function (_0x10300e) {
              var _0x36728e = _0x243ddf;
              _0x255c84[_0x36728e(0x191)]({ color: _0x10300e });
            },
            get: function () {
              return _0x19316b || _0x2a12a2();
            },
            enumerable: !![],
          }),
          Object[_0x243ddf(0x2bb)](_0x255c84, _0x243ddf(0x268), {
            set: function (_0x363ae3) {
              var _0x3d87c7 = _0x243ddf;
              _0x255c84[_0x3d87c7(0x191)]({ text_color: _0x363ae3 });
            },
            get: function () {
              return _0x80395e || _0x27b9b9();
            },
            enumerable: !![],
          }),
          Object[_0x243ddf(0x2bb)](_0x255c84, _0x243ddf(0x122), {
            set: function (_0x5533a2) {
              var _0x545b7c = _0x243ddf;
              _0x255c84[_0x545b7c(0x191)]({ is_visible: _0x5533a2 });
            },
            get: function () {
              return _0x17ad23;
            },
            enumerable: !![],
          }),
          Object["defineProperty"](_0x255c84, _0x243ddf(0x1a4), {
            get: function () {
              return _0x3a4781;
            },
            enumerable: !![],
          }),
          Object[_0x243ddf(0x2bb)](_0x255c84, _0x243ddf(0x328), {
            set: function (_0x3404eb) {
              var _0x1a120f = _0x243ddf;
              _0x255c84[_0x1a120f(0x191)]({ is_active: _0x3404eb });
            },
            get: function () {
              return _0x1e0032;
            },
            enumerable: !![],
          }),
          Object[_0x243ddf(0x2bb)](_0x255c84, _0x243ddf(0x14b), {
            set: function (_0x1afda6) {
              var _0x52869a = _0x243ddf;
              _0x255c84[_0x52869a(0x191)]({ has_shine_effect: _0x1afda6 });
            },
            get: function () {
              return _0x1cceb7;
            },
            enumerable: !![],
          }));
        !_0x42a21d &&
          Object[_0x243ddf(0x2bb)](_0x255c84, _0x243ddf(0x270), {
            set: function (_0x158a2c) {
              var _0x320b35 = _0x243ddf;
              _0x255c84[_0x320b35(0x191)]({ position: _0x158a2c });
            },
            get: function () {
              return _0x99df46;
            },
            enumerable: !![],
          });
        var _0x59bca0 = null;
        _0x5ba706[_0x243ddf(0x1b2)](_0x453075, _0x9a1d99);
        var _0x1873e3 = null;
        if (_0x5f07bc[_0x243ddf(0x10e)]) {
          _0x1873e3 = document["createElement"](_0x243ddf(0xe9));
          var _0x2e142a = {
            display: _0x243ddf(0xf3),
            width: _0x243ddf(0x2ed),
            height: "44px",
            borderRadius: "0",
            background: _0x243ddf(0x292),
            padding: _0x243ddf(0x307),
            textAlign: _0x243ddf(0x151),
            boxSizing: _0x243ddf(0x2d2),
          };
          for (var _0x8ddea0 in _0x2e142a) {
            _0x1873e3["style"][_0x8ddea0] = _0x2e142a[_0x8ddea0];
          }
          (_0x1e4bea["appendChild"](_0x1873e3),
            _0x1873e3[_0x243ddf(0x142)]("click", _0x9a1d99, ![]),
            (_0x1873e3[_0x243ddf(0x327)] = _0x255c84),
            (_0x2dc5ae[_0x502897] = _0x1873e3));
        }
        function _0x9a1d99() {
          _0x1e0032 && _0x1c34b5(_0x3aa2fe);
        }
        function _0x3ac8c6() {
          var _0x1fbdd6 = _0x243ddf,
            _0x1b9b3a = _0x255c84[_0x1fbdd6(0x26c)],
            _0x14adca = _0x255c84[_0x1fbdd6(0x268)];
          if (_0x17ad23) {
            var _0x70fb58 = {
              is_visible: !![],
              is_active: _0x1e0032,
              is_progress_visible: _0x3a4781,
              icon_custom_emoji_id: _0xf615a1,
              text: _0x2f6d1f,
              color: _0x1b9b3a,
              text_color: _0x14adca,
              has_shine_effect: _0x1cceb7 && _0x1e0032 && !_0x3a4781,
            };
            !_0x42a21d && (_0x70fb58[_0x1fbdd6(0x270)] = _0x99df46);
          } else var _0x70fb58 = { is_visible: ![] };
          return _0x70fb58;
        }
        function _0x597005(_0x304906) {
          var _0x551bb1 = _0x243ddf;
          return (
            typeof _0x304906 === _0x551bb1(0x2c7) && (_0x304906 = _0x3ac8c6()),
            JSON[_0x551bb1(0x17e)](_0x304906)
          );
        }
        function _0x2b5e47() {
          var _0x3e2d9c = _0x243ddf,
            _0x22954b = _0x3ac8c6(),
            _0x20a729 = _0x597005(_0x22954b);
          if (_0x59bca0 === _0x20a729) return;
          ((_0x59bca0 = _0x20a729),
            _0x5ba706[_0x3e2d9c(0x13d)](_0x1eadde, ![], _0x22954b),
            _0x5f07bc["tgWebAppDebug"] && _0x598d01(_0x22954b));
        }
        function _0x598d01(_0x4c0e63) {
          var _0x3bd24a = _0x243ddf;
          (_0x4c0e63[_0x3bd24a(0x1c6)]
            ? ((_0x1873e3[_0x3bd24a(0x267)][_0x3bd24a(0x345)] =
                _0x3bd24a(0x325)),
              (_0x1873e3[_0x3bd24a(0x267)][_0x3bd24a(0xee)] = _0x4c0e63[
                _0x3bd24a(0x181)
              ]
                ? "1"
                : _0x3bd24a(0x158)),
              (_0x1873e3[_0x3bd24a(0x267)]["cursor"] = _0x4c0e63["is_active"]
                ? _0x3bd24a(0x29c)
                : _0x3bd24a(0x155)),
              (_0x1873e3[_0x3bd24a(0x235)] = !_0x4c0e63[_0x3bd24a(0x181)]),
              (_0x1873e3[_0x3bd24a(0x245)] = _0x4c0e63[_0x3bd24a(0x2be)]),
              (_0x1873e3[_0x3bd24a(0x2f9)] = _0x4c0e63[_0x3bd24a(0xe6)]
                ? _0x3bd24a(0x335)
                : ""),
              (_0x1873e3[_0x3bd24a(0x267)][_0x3bd24a(0x2dd)] = _0x4c0e63[
                _0x3bd24a(0x22b)
              ]
                ? _0x3bd24a(0x276) +
                  encodeURIComponent(
                    "<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20viewport=\x220\x200\x2048\x2048\x22\x20width=\x2248px\x22\x20height=\x2248px\x22><circle\x20cx=\x2250%\x22\x20cy=\x2250%\x22\x20stroke=\x22" +
                      _0x4c0e63["text_color"] +
                      "\x22\x20stroke-width=\x222.25\x22\x20stroke-linecap=\x22round\x22\x20fill=\x22none\x22\x20stroke-dashoffset=\x22106\x22\x20r=\x229\x22\x20stroke-dasharray=\x2256.52\x22\x20rotate=\x22-90\x22><animate\x20attributeName=\x22stroke-dashoffset\x22\x20attributeType=\x22XML\x22\x20dur=\x22360s\x22\x20from=\x220\x22\x20to=\x2212500\x22\x20repeatCount=\x22indefinite\x22></animate><animateTransform\x20attributeName=\x22transform\x22\x20attributeType=\x22XML\x22\x20type=\x22rotate\x22\x20dur=\x221s\x22\x20from=\x22-90\x2024\x2024\x22\x20to=\x22630\x2024\x2024\x22\x20repeatCount=\x22indefinite\x22></animateTransform></circle></svg>",
                  ) +
                  "\x27)"
                : _0x3bd24a(0xf3)),
              (_0x1873e3[_0x3bd24a(0x267)]["backgroundColor"] =
                _0x4c0e63[_0x3bd24a(0x26c)]),
              (_0x1873e3[_0x3bd24a(0x267)][_0x3bd24a(0x26c)] =
                _0x4c0e63[_0x3bd24a(0x25e)]))
            : (_0x1873e3["style"][_0x3bd24a(0x345)] = "none"),
            _0x568cb0());
        }
        function _0x32b10f(_0x11c1fd) {
          var _0x3f763f = _0x243ddf;
          if (typeof _0x11c1fd[_0x3f763f(0x1d5)] !== "undefined") {
            var _0x5df696 = _0x11c1fd[_0x3f763f(0x1d5)];
            (_0x5df696 === ![] || _0x5df696 === null) && (_0x5df696 = "");
            if (
              _0x5df696 !== "" &&
              !/^[0-9]{10,20}$/[_0x3f763f(0x1dc)](_0x5df696)
            ) {
              console[_0x3f763f(0x11a)](
                _0x3f763f(0x25d),
                _0x11c1fd[_0x3f763f(0x1d5)],
              );
              throw Error(_0x3f763f(0x2ab));
            }
            _0xf615a1 = _0x5df696;
          }
          if (typeof _0x11c1fd[_0x3f763f(0x2be)] !== _0x3f763f(0x2c7)) {
            var _0x37fb15 = _0x3bb4b8(_0x11c1fd[_0x3f763f(0x2be)]);
            if (!_0x37fb15[_0x3f763f(0x2c9)] && !_0xf615a1) {
              console[_0x3f763f(0x11a)](
                _0x3f763f(0x19f),
                _0x11c1fd[_0x3f763f(0x2be)],
              );
              throw Error(_0x3f763f(0x2ab));
            }
            if (_0x37fb15[_0x3f763f(0x2c9)] > 0x40) {
              console[_0x3f763f(0x11a)](_0x3f763f(0x282), _0x37fb15);
              throw Error(_0x3f763f(0x2ab));
            }
            _0x2f6d1f = _0x37fb15;
          }
          if (typeof _0x11c1fd[_0x3f763f(0x26c)] !== _0x3f763f(0x2c7)) {
            if (
              _0x11c1fd[_0x3f763f(0x26c)] === ![] ||
              _0x11c1fd["color"] === null
            )
              _0x19316b = ![];
            else {
              var _0x380b3c = _0x3748d8(_0x11c1fd[_0x3f763f(0x26c)]);
              if (!_0x380b3c) {
                console[_0x3f763f(0x11a)](_0x3f763f(0x30f), _0x11c1fd["color"]);
                throw Error(_0x3f763f(0x2ab));
              }
              _0x19316b = _0x380b3c;
            }
          }
          if (typeof _0x11c1fd["text_color"] !== _0x3f763f(0x2c7)) {
            if (
              _0x11c1fd[_0x3f763f(0x25e)] === ![] ||
              _0x11c1fd[_0x3f763f(0x25e)] === null
            )
              _0x80395e = ![];
            else {
              var _0x3c5da4 = _0x3748d8(_0x11c1fd[_0x3f763f(0x25e)]);
              if (!_0x3c5da4) {
                console[_0x3f763f(0x11a)](
                  _0x3f763f(0x31d),
                  _0x11c1fd[_0x3f763f(0x25e)],
                );
                throw Error(_0x3f763f(0x2ab));
              }
              _0x80395e = _0x3c5da4;
            }
          }
          if (typeof _0x11c1fd[_0x3f763f(0x1c6)] !== _0x3f763f(0x2c7)) {
            if (
              _0x11c1fd[_0x3f763f(0x1c6)] &&
              !_0x255c84[_0x3f763f(0x2be)][_0x3f763f(0x2c9)]
            ) {
              console[_0x3f763f(0x11a)](_0x3f763f(0x19f));
              throw Error("WebAppBottomButtonParamInvalid");
            }
            _0x17ad23 = !!_0x11c1fd[_0x3f763f(0x1c6)];
          }
          typeof _0x11c1fd[_0x3f763f(0xe6)] !== _0x3f763f(0x2c7) &&
            (_0x1cceb7 = !!_0x11c1fd[_0x3f763f(0xe6)]);
          if (
            !_0x42a21d &&
            typeof _0x11c1fd[_0x3f763f(0x270)] !== "undefined"
          ) {
            if (
              _0x11c1fd[_0x3f763f(0x270)] != _0x3f763f(0x306) &&
              _0x11c1fd[_0x3f763f(0x270)] != "right" &&
              _0x11c1fd[_0x3f763f(0x270)] != "top" &&
              _0x11c1fd[_0x3f763f(0x270)] != "bottom"
            ) {
              console[_0x3f763f(0x11a)](
                _0x3f763f(0x1c7),
                _0x11c1fd[_0x3f763f(0x270)],
              );
              throw Error("WebAppBottomButtonParamInvalid");
            }
            _0x99df46 = _0x11c1fd["position"];
          }
          return (
            typeof _0x11c1fd[_0x3f763f(0x181)] !== _0x3f763f(0x2c7) &&
              (_0x1e0032 = !!_0x11c1fd["is_active"]),
            _0x2b5e47(),
            _0x255c84
          );
        }
        return (
          (_0x255c84[_0x243ddf(0x184)] = function (_0x2f4d6b) {
            return _0x255c84["setParams"]({ text: _0x2f4d6b });
          }),
          (_0x255c84[_0x243ddf(0x24d)] = function (_0x50defd) {
            return (_0xb61ba9(_0x3aa2fe, _0x50defd), _0x255c84);
          }),
          (_0x255c84[_0x243ddf(0x220)] = function (_0x2dc46e) {
            return (_0x243e50(_0x3aa2fe, _0x2dc46e), _0x255c84);
          }),
          (_0x255c84[_0x243ddf(0xfc)] = function () {
            return _0x255c84["setParams"]({ is_visible: !![] });
          }),
          (_0x255c84[_0x243ddf(0x2da)] = function () {
            var _0x25ac4c = _0x243ddf;
            return _0x255c84[_0x25ac4c(0x191)]({ is_visible: ![] });
          }),
          (_0x255c84[_0x243ddf(0x194)] = function () {
            var _0x36e792 = _0x243ddf;
            return _0x255c84[_0x36e792(0x191)]({ is_active: !![] });
          }),
          (_0x255c84[_0x243ddf(0x2f5)] = function () {
            var _0x2f1231 = _0x243ddf;
            return _0x255c84[_0x2f1231(0x191)]({ is_active: ![] });
          }),
          (_0x255c84[_0x243ddf(0x1e6)] = function (_0x38a662) {
            return (
              (_0x1e0032 = !!_0x38a662),
              (_0x3a4781 = !![]),
              _0x2b5e47(),
              _0x255c84
            );
          }),
          (_0x255c84[_0x243ddf(0x124)] = function () {
            var _0x2fbbe9 = _0x243ddf;
            return (
              !_0x255c84[_0x2fbbe9(0x328)] && (_0x1e0032 = !![]),
              (_0x3a4781 = ![]),
              _0x2b5e47(),
              _0x255c84
            );
          }),
          (_0x255c84[_0x243ddf(0x191)] = _0x32b10f),
          _0x255c84
        );
      },
      _0x50f28e = _0x2ed2df(_0x598d27(0x166)),
      _0x9e82bb = _0x2ed2df("secondary"),
      _0x5d84d4 = (function () {
        var _0x45f881 = _0x598d27,
          _0x3f727b = ![],
          _0x6c8dd2 = {};
        Object["defineProperty"](_0x6c8dd2, "isVisible", {
          set: function (_0x1eaaa0) {
            _0x3b4140({ is_visible: _0x1eaaa0 });
          },
          get: function () {
            return _0x3f727b;
          },
          enumerable: !![],
        });
        var _0x1e4908 = null;
        _0x5ba706[_0x45f881(0x1b2)]("settings_button_pressed", _0x364f40);
        function _0x364f40() {
          var _0x5001a2 = _0x45f881;
          _0x1c34b5(_0x5001a2(0x2d8));
        }
        function _0x46f0cc() {
          return { is_visible: _0x3f727b };
        }
        function _0x2dbdd2(_0x1eee88) {
          var _0x15c7a5 = _0x45f881;
          return (
            typeof _0x1eee88 === _0x15c7a5(0x2c7) && (_0x1eee88 = _0x46f0cc()),
            JSON[_0x15c7a5(0x17e)](_0x1eee88)
          );
        }
        function _0x105280() {
          var _0x3d3c65 = _0x45f881;
          if (!_0x554805(_0x3d3c65(0x2f1)))
            return (
              console[_0x3d3c65(0x10b)](
                "[Telegram.WebApp]\x20SettingsButton\x20is\x20not\x20supported\x20in\x20version\x20" +
                  _0x5d20ad,
              ),
              ![]
            );
          return !![];
        }
        function _0x4f87cc() {
          var _0x394b5c = _0x46f0cc(),
            _0x4b2180 = _0x2dbdd2(_0x394b5c);
          if (_0x1e4908 === _0x4b2180) return;
          ((_0x1e4908 = _0x4b2180),
            _0x5ba706["postEvent"](
              "web_app_setup_settings_button",
              ![],
              _0x394b5c,
            ));
        }
        function _0x3b4140(_0x2b42c4) {
          var _0x588550 = _0x45f881;
          if (!_0x105280()) return _0x6c8dd2;
          return (
            typeof _0x2b42c4[_0x588550(0x1c6)] !== _0x588550(0x2c7) &&
              (_0x3f727b = !!_0x2b42c4[_0x588550(0x1c6)]),
            _0x4f87cc(),
            _0x6c8dd2
          );
        }
        return (
          (_0x6c8dd2[_0x45f881(0x24d)] = function (_0x658545) {
            var _0x41e21b = _0x45f881;
            return (
              _0x105280() && _0xb61ba9(_0x41e21b(0x2d8), _0x658545),
              _0x6c8dd2
            );
          }),
          (_0x6c8dd2[_0x45f881(0x220)] = function (_0x3e567a) {
            var _0x1ac9b7 = _0x45f881;
            return (
              _0x105280() && _0x243e50(_0x1ac9b7(0x2d8), _0x3e567a),
              _0x6c8dd2
            );
          }),
          (_0x6c8dd2["show"] = function () {
            return _0x3b4140({ is_visible: !![] });
          }),
          (_0x6c8dd2["hide"] = function () {
            return _0x3b4140({ is_visible: ![] });
          }),
          _0x6c8dd2
        );
      })(),
      _0x17af6e = (function () {
        var _0xab748e = _0x598d27,
          _0x165d88 = {};
        function _0x2a38db(_0x209b6f) {
          var _0x41e9b4 = _0x4c1f;
          if (!_0x554805(_0x41e9b4(0x2f2)))
            return (
              console[_0x41e9b4(0x10b)](_0x41e9b4(0x20f) + _0x5d20ad),
              _0x165d88
            );
          if (_0x209b6f[_0x41e9b4(0x152)] == _0x41e9b4(0x2eb)) {
            if (
              _0x209b6f["impact_style"] != _0x41e9b4(0x1de) &&
              _0x209b6f[_0x41e9b4(0x2ea)] != _0x41e9b4(0x147) &&
              _0x209b6f[_0x41e9b4(0x2ea)] != _0x41e9b4(0xf6) &&
              _0x209b6f[_0x41e9b4(0x2ea)] != _0x41e9b4(0xf5) &&
              _0x209b6f[_0x41e9b4(0x2ea)] != _0x41e9b4(0x252)
            ) {
              console["error"](
                "[Telegram.WebApp]\x20Haptic\x20impact\x20style\x20is\x20invalid",
                _0x209b6f[_0x41e9b4(0x2ea)],
              );
              throw Error(_0x41e9b4(0xef));
            }
          } else {
            if (_0x209b6f[_0x41e9b4(0x152)] == _0x41e9b4(0x254)) {
              if (
                _0x209b6f["notification_type"] != _0x41e9b4(0x11a) &&
                _0x209b6f[_0x41e9b4(0x264)] != _0x41e9b4(0x290) &&
                _0x209b6f[_0x41e9b4(0x264)] != _0x41e9b4(0x107)
              ) {
                console["error"](
                  _0x41e9b4(0x279),
                  _0x209b6f["notification_type"],
                );
                throw Error("WebAppHapticNotificationTypeInvalid");
              }
            } else {
              if (_0x209b6f[_0x41e9b4(0x152)] == _0x41e9b4(0xed)) {
              } else {
                console["error"](_0x41e9b4(0x32f), _0x209b6f[_0x41e9b4(0x152)]);
                throw Error("WebAppHapticFeedbackTypeInvalid");
              }
            }
          }
          return (
            _0x5ba706["postEvent"](_0x41e9b4(0x15b), ![], _0x209b6f),
            _0x165d88
          );
        }
        return (
          (_0x165d88[_0xab748e(0x125)] = function (_0x26520d) {
            var _0x5a1341 = _0xab748e;
            return _0x2a38db({
              type: _0x5a1341(0x2eb),
              impact_style: _0x26520d,
            });
          }),
          (_0x165d88[_0xab748e(0x1e2)] = function (_0x515287) {
            var _0x2cc4c1 = _0xab748e;
            return _0x2a38db({
              type: _0x2cc4c1(0x254),
              notification_type: _0x515287,
            });
          }),
          (_0x165d88[_0xab748e(0xfa)] = function () {
            return _0x2a38db({ type: "selection_change" });
          }),
          _0x165d88
        );
      })(),
      _0x33e0f5 = (function () {
        var _0x3f3d24 = _0x598d27,
          _0x32063a = {};
        function _0x164ae0(_0x1dc352, _0x54b48f, _0x719a64) {
          var _0x5a609f = _0x4c1f;
          if (!_0x554805(_0x5a609f(0x12b))) {
            console[_0x5a609f(0x11a)](
              "[Telegram.WebApp]\x20CloudStorage\x20is\x20not\x20supported\x20in\x20version\x20" +
                _0x5d20ad,
            );
            throw Error("WebAppMethodUnsupported");
          }
          return (_0x242d83(_0x1dc352, _0x54b48f, _0x719a64), _0x32063a);
        }
        return (
          (_0x32063a[_0x3f3d24(0x27f)] = function (
            _0x5a6de4,
            _0x5e8661,
            _0x562cc6,
          ) {
            var _0x20f60f = _0x3f3d24;
            return _0x164ae0(
              _0x20f60f(0x165),
              { key: _0x5a6de4, value: _0x5e8661 },
              _0x562cc6,
            );
          }),
          (_0x32063a[_0x3f3d24(0x234)] = function (_0x3b4b72, _0x3bb5e9) {
            var _0x3ad458 = _0x3f3d24;
            return _0x32063a[_0x3ad458(0x17c)](
              [_0x3b4b72],
              _0x3bb5e9
                ? function (_0x4e1b33, _0x3d7501) {
                    if (_0x4e1b33) _0x3bb5e9(_0x4e1b33);
                    else _0x3bb5e9(null, _0x3d7501[_0x3b4b72]);
                  }
                : null,
            );
          }),
          (_0x32063a["getItems"] = function (_0x2e9217, _0xe9153) {
            var _0x55019f = _0x3f3d24;
            return _0x164ae0(_0x55019f(0x205), { keys: _0x2e9217 }, _0xe9153);
          }),
          (_0x32063a[_0x3f3d24(0x1d6)] = function (_0x356dbb, _0x3839c4) {
            var _0x56244d = _0x3f3d24;
            return _0x32063a[_0x56244d(0x1ef)]([_0x356dbb], _0x3839c4);
          }),
          (_0x32063a["removeItems"] = function (_0x3901ef, _0x1721a2) {
            var _0x32db73 = _0x3f3d24;
            return _0x164ae0(_0x32db73(0x20c), { keys: _0x3901ef }, _0x1721a2);
          }),
          (_0x32063a[_0x3f3d24(0x109)] = function (_0x4512e8) {
            var _0x135484 = _0x3f3d24;
            return _0x164ae0(_0x135484(0x256), {}, _0x4512e8);
          }),
          _0x32063a
        );
      })(),
      _0x3849ad = (function () {
        var _0x1f3a16 = _0x598d27,
          _0x5b3291 = {};
        (_0x5ba706[_0x1f3a16(0x1b2)](_0x1f3a16(0x281), _0x6133ff),
          _0x5ba706["onEvent"](_0x1f3a16(0x2e7), _0x6133ff),
          _0x5ba706[_0x1f3a16(0x1b2)](_0x1f3a16(0x201), _0x6133ff),
          _0x5ba706[_0x1f3a16(0x1b2)](_0x1f3a16(0x29b), _0x6133ff));
        function _0x6133ff(_0x32cfa4, _0x579bbf) {
          var _0x2abf4e = _0x1f3a16;
          if (_0x579bbf["req_id"] && _0x411cba[_0x579bbf[_0x2abf4e(0x14e)]]) {
            var _0x370f8b = _0x411cba[_0x579bbf[_0x2abf4e(0x14e)]];
            delete _0x411cba[_0x579bbf[_0x2abf4e(0x14e)]];
            var _0x28fd10 = null,
              _0xb0431b = null;
            if (_0x32cfa4 == _0x2abf4e(0x29b))
              _0xb0431b = _0x579bbf[_0x2abf4e(0x11a)] || "UNKNOWN_ERROR";
            else
              _0x32cfa4 == _0x2abf4e(0x2e7)
                ? (_0x28fd10 = _0x579bbf["value"])
                : (_0x28fd10 = !![]);
            _0x370f8b[_0x2abf4e(0x129)] &&
              _0x370f8b[_0x2abf4e(0x129)](_0xb0431b, _0x28fd10);
          }
        }
        function _0x22ff43(_0x972040, _0x528cb9, _0x4a134d) {
          var _0x20951a = _0x1f3a16;
          if (!_0x554805(_0x20951a(0x106))) {
            console["error"](_0x20951a(0x297) + _0x5d20ad);
            throw Error("WebAppMethodUnsupported");
          }
          var _0x134df7 = _0x9c2b83(0x10),
            _0x417f80 = { req_id: _0x134df7 };
          for (var _0x1422bc in _0x528cb9) {
            _0x417f80[_0x1422bc] = _0x528cb9[_0x1422bc];
          }
          return (
            (_0x411cba[_0x134df7] = { callback: _0x4a134d }),
            _0x5ba706[_0x20951a(0x13d)](_0x972040, ![], _0x417f80),
            _0x5b3291
          );
        }
        return (
          (_0x5b3291[_0x1f3a16(0x27f)] = function (
            _0x2b0700,
            _0x595fbb,
            _0x88ff48,
          ) {
            var _0x955f24 = _0x1f3a16;
            return _0x22ff43(
              _0x955f24(0x30a),
              { key: _0x2b0700, value: _0x595fbb },
              _0x88ff48,
            );
          }),
          (_0x5b3291[_0x1f3a16(0x234)] = function (_0x3a5cbc, _0x3de55f) {
            return _0x22ff43(
              "web_app_device_storage_get_key",
              { key: _0x3a5cbc },
              _0x3de55f,
            );
          }),
          (_0x5b3291[_0x1f3a16(0x1d6)] = function (_0x40bb8f, _0x17b6e4) {
            var _0xfc3607 = _0x1f3a16;
            return _0x22ff43(
              _0xfc3607(0x30a),
              { key: _0x40bb8f, value: null },
              _0x17b6e4,
            );
          }),
          (_0x5b3291[_0x1f3a16(0x2f7)] = function (_0x449197) {
            var _0x550c6f = _0x1f3a16;
            return _0x22ff43(_0x550c6f(0x1ec), {}, _0x449197);
          }),
          _0x5b3291
        );
      })(),
      _0x5f10a5 = (function () {
        var _0x2a3e18 = _0x598d27,
          _0x23f051 = {};
        (_0x5ba706["onEvent"](_0x2a3e18(0x17a), _0x4c1c2b),
          _0x5ba706["onEvent"](_0x2a3e18(0x33d), _0x4c1c2b),
          _0x5ba706[_0x2a3e18(0x1b2)](_0x2a3e18(0x141), _0x4c1c2b),
          _0x5ba706[_0x2a3e18(0x1b2)](_0x2a3e18(0x171), _0x4c1c2b),
          _0x5ba706[_0x2a3e18(0x1b2)](_0x2a3e18(0x226), _0x4c1c2b));
        function _0x4c1c2b(_0x2e28a1, _0x565848) {
          var _0x2fd3f5 = _0x2a3e18;
          if (
            _0x565848[_0x2fd3f5(0x14e)] &&
            _0x411cba[_0x565848[_0x2fd3f5(0x14e)]]
          ) {
            var _0x211676 = _0x411cba[_0x565848[_0x2fd3f5(0x14e)]];
            delete _0x411cba[_0x565848[_0x2fd3f5(0x14e)]];
            var _0x4d2964 = null,
              _0x7ca259 = null,
              _0x4f5582 = null;
            if (_0x2e28a1 == _0x2fd3f5(0x226))
              _0x7ca259 = _0x565848[_0x2fd3f5(0x11a)] || _0x2fd3f5(0x2b1);
            else {
              if (_0x2e28a1 == _0x2fd3f5(0x33d))
                ((_0x4d2964 = _0x565848[_0x2fd3f5(0x103)]),
                  _0x565848[_0x2fd3f5(0x1fb)] && (_0x4f5582 = !![]));
              else
                _0x2e28a1 == _0x2fd3f5(0x141)
                  ? (_0x4d2964 = _0x565848[_0x2fd3f5(0x103)])
                  : (_0x4d2964 = !![]);
            }
            _0x211676[_0x2fd3f5(0x129)] &&
              _0x211676[_0x2fd3f5(0x129)](_0x7ca259, _0x4d2964, _0x4f5582);
          }
        }
        function _0x5c7d3c(_0x47a25f, _0x4486f0, _0x205f08) {
          var _0x276147 = _0x2a3e18;
          if (!_0x554805("9.0")) {
            console[_0x276147(0x11a)](_0x276147(0x311) + _0x5d20ad);
            throw Error(_0x276147(0x229));
          }
          var _0x4d6f08 = _0x9c2b83(0x10),
            _0x34985c = { req_id: _0x4d6f08 };
          for (var _0x29a1a5 in _0x4486f0) {
            _0x34985c[_0x29a1a5] = _0x4486f0[_0x29a1a5];
          }
          return (
            (_0x411cba[_0x4d6f08] = { callback: _0x205f08 }),
            _0x5ba706[_0x276147(0x13d)](_0x47a25f, ![], _0x34985c),
            _0x23f051
          );
        }
        return (
          (_0x23f051[_0x2a3e18(0x27f)] = function (
            _0x27e82a,
            _0x139cf4,
            _0x492f70,
          ) {
            var _0x5eb1e8 = _0x2a3e18;
            return _0x5c7d3c(
              _0x5eb1e8(0x313),
              { key: _0x27e82a, value: _0x139cf4 },
              _0x492f70,
            );
          }),
          (_0x23f051[_0x2a3e18(0x234)] = function (_0x11c8e2, _0x2c0f1f) {
            var _0x5d9817 = _0x2a3e18;
            return _0x5c7d3c(_0x5d9817(0x275), { key: _0x11c8e2 }, _0x2c0f1f);
          }),
          (_0x23f051["restoreItem"] = function (_0x50b802, _0x11fc7f) {
            var _0x1ffc84 = _0x2a3e18;
            return _0x5c7d3c(_0x1ffc84(0xe0), { key: _0x50b802 }, _0x11fc7f);
          }),
          (_0x23f051[_0x2a3e18(0x1d6)] = function (_0x172e2f, _0x2cb9da) {
            return _0x5c7d3c(
              "web_app_secure_storage_save_key",
              { key: _0x172e2f, value: null },
              _0x2cb9da,
            );
          }),
          (_0x23f051[_0x2a3e18(0x2f7)] = function (_0x3670f1) {
            var _0x3d8cf6 = _0x2a3e18;
            return _0x5c7d3c(_0x3d8cf6(0x33c), {}, _0x3670f1);
          }),
          _0x23f051
        );
      })(),
      _0x20cf98 = (function () {
        var _0x3a9ce5 = _0x598d27,
          _0x4f53c0 = ![],
          _0x21ac9c = ![],
          _0xc368fa = _0x3a9ce5(0x1a7),
          _0xa7539e = ![],
          _0x3e0747 = ![],
          _0x411e5a = ![],
          _0x4f87ec = "",
          _0x24e9d9 = {};
        (Object[_0x3a9ce5(0x2bb)](_0x24e9d9, "isInited", {
          get: function () {
            return _0x4f53c0;
          },
          enumerable: !![],
        }),
          Object[_0x3a9ce5(0x2bb)](_0x24e9d9, _0x3a9ce5(0x2d9), {
            get: function () {
              return _0x4f53c0 && _0x21ac9c;
            },
            enumerable: !![],
          }),
          Object["defineProperty"](_0x24e9d9, _0x3a9ce5(0x217), {
            get: function () {
              return _0xc368fa || "unknown";
            },
            enumerable: !![],
          }),
          Object[_0x3a9ce5(0x2bb)](_0x24e9d9, _0x3a9ce5(0x135), {
            get: function () {
              return _0xa7539e;
            },
            enumerable: !![],
          }),
          Object[_0x3a9ce5(0x2bb)](_0x24e9d9, "isAccessGranted", {
            get: function () {
              return _0xa7539e && _0x3e0747;
            },
            enumerable: !![],
          }),
          Object["defineProperty"](_0x24e9d9, _0x3a9ce5(0x33f), {
            get: function () {
              return _0x411e5a;
            },
            enumerable: !![],
          }),
          Object[_0x3a9ce5(0x2bb)](_0x24e9d9, _0x3a9ce5(0x213), {
            get: function () {
              return _0x4f87ec || "";
            },
            enumerable: !![],
          }));
        var _0x10d105 = { callbacks: [] },
          _0x1b511b = ![],
          _0xc02ca2 = ![],
          _0x2908cb = ![];
        (_0x5ba706[_0x3a9ce5(0x1b2)](_0x3a9ce5(0x1ab), _0x2fd2a7),
          _0x5ba706[_0x3a9ce5(0x1b2)](_0x3a9ce5(0x23f), _0x5aae93),
          _0x5ba706["onEvent"](_0x3a9ce5(0x338), _0x59cc61));
        function _0x2fd2a7(_0x28248b, _0x311255) {
          var _0x3e9eca = _0x3a9ce5;
          _0x4f53c0 = !![];
          _0x311255["available"]
            ? ((_0x21ac9c = !![]),
              (_0xc368fa = _0x311255[_0x3e9eca(0x152)] || "unknown"),
              _0x311255["access_requested"]
                ? ((_0xa7539e = !![]),
                  (_0x3e0747 = !!_0x311255[_0x3e9eca(0x215)]),
                  (_0x411e5a = !!_0x311255[_0x3e9eca(0x1ba)]))
                : ((_0xa7539e = ![]), (_0x3e0747 = ![]), (_0x411e5a = ![])))
            : ((_0x21ac9c = ![]),
              (_0xc368fa = "unknown"),
              (_0xa7539e = ![]),
              (_0x3e0747 = ![]),
              (_0x411e5a = ![]));
          _0x4f87ec = _0x311255[_0x3e9eca(0x2cc)] || "";
          if (_0x10d105["callbacks"][_0x3e9eca(0x2c9)] > 0x0) {
            for (
              var _0x38e506 = 0x0;
              _0x38e506 < _0x10d105[_0x3e9eca(0x196)][_0x3e9eca(0x2c9)];
              _0x38e506++
            ) {
              var _0x2c3935 = _0x10d105["callbacks"][_0x38e506];
              _0x2c3935();
            }
            _0x10d105[_0x3e9eca(0x196)] = [];
          }
          if (_0x1b511b) {
            var _0xbd90c6 = _0x1b511b;
            ((_0x1b511b = ![]),
              _0xbd90c6[_0x3e9eca(0x129)] &&
                _0xbd90c6[_0x3e9eca(0x129)](_0x3e0747));
          }
          _0x1c34b5(_0x3e9eca(0x225));
        }
        function _0x5aae93(_0x5c23d6, _0x57aa63) {
          var _0x528f49 = _0x3a9ce5,
            _0x507086 = _0x57aa63[_0x528f49(0xde)] == "authorized",
            _0x5ecb01 = _0x57aa63[_0x528f49(0x293)] || "";
          if (_0xc02ca2) {
            var _0x33ec4f = _0xc02ca2;
            ((_0xc02ca2 = ![]),
              _0x33ec4f[_0x528f49(0x129)] &&
                _0x33ec4f["callback"](_0x507086, _0x507086 ? _0x5ecb01 : null));
          }
          _0x1c34b5(
            _0x528f49(0x130),
            _0x507086
              ? { isAuthenticated: !![], biometricToken: _0x5ecb01 }
              : { isAuthenticated: ![] },
          );
        }
        function _0x59cc61(_0x1ddf28, _0x1f690b) {
          var _0x5bf73f = _0x3a9ce5,
            _0x58cb6b = ![];
          if (_0x21ac9c && _0xa7539e) {
            if (_0x1f690b[_0x5bf73f(0xde)] == _0x5bf73f(0xf7))
              ((_0x411e5a = !![]), (_0x58cb6b = !![]));
            else
              _0x1f690b[_0x5bf73f(0xde)] == _0x5bf73f(0x342) &&
                ((_0x411e5a = ![]), (_0x58cb6b = !![]));
          }
          if (_0x2908cb) {
            var _0x5872a4 = _0x2908cb;
            ((_0x2908cb = ![]),
              _0x5872a4[_0x5bf73f(0x129)] && _0x5872a4["callback"](_0x58cb6b));
          }
          _0x1c34b5(_0x5bf73f(0x334), { isUpdated: _0x58cb6b });
        }
        function _0x208118() {
          var _0x4a9264 = _0x3a9ce5;
          if (!_0x554805(_0x4a9264(0x1b5)))
            return (
              console[_0x4a9264(0x10b)](
                "[Telegram.WebApp]\x20BiometricManager\x20is\x20not\x20supported\x20in\x20version\x20" +
                  _0x5d20ad,
              ),
              ![]
            );
          return !![];
        }
        function _0x33fb14() {
          var _0x2c8539 = _0x3a9ce5;
          if (!_0x4f53c0) {
            console[_0x2c8539(0x11a)](_0x2c8539(0x29a));
            throw Error(_0x2c8539(0x26d));
          }
          return !![];
        }
        return (
          (_0x24e9d9[_0x3a9ce5(0x12a)] = function (_0x50f373) {
            var _0xee632e = _0x3a9ce5;
            if (!_0x208118()) return _0x24e9d9;
            if (_0x4f53c0) return _0x24e9d9;
            return (
              _0x50f373 && _0x10d105["callbacks"][_0xee632e(0x295)](_0x50f373),
              _0x5ba706[_0xee632e(0x13d)](_0xee632e(0x248), ![]),
              _0x24e9d9
            );
          }),
          (_0x24e9d9["requestAccess"] = function (_0x5d54d6, _0x214296) {
            var _0x414c94 = _0x3a9ce5;
            if (!_0x208118()) return _0x24e9d9;
            _0x33fb14();
            if (!_0x21ac9c) {
              console[_0x414c94(0x11a)](
                "[Telegram.WebApp]\x20Biometrics\x20is\x20not\x20available\x20on\x20this\x20device.",
              );
              throw Error("WebAppBiometricManagerBiometricsNotAvailable");
            }
            if (_0x1b511b) {
              console[_0x414c94(0x11a)](_0x414c94(0x1b6));
              throw Error(_0x414c94(0x2c3));
            }
            var _0x50a98 = {};
            if (typeof _0x5d54d6[_0x414c94(0x283)] !== _0x414c94(0x2c7)) {
              var _0xf92c04 = _0x3bb4b8(_0x5d54d6[_0x414c94(0x283)]);
              if (_0xf92c04[_0x414c94(0x2c9)] > 0x80) {
                console[_0x414c94(0x11a)](_0x414c94(0x223), _0xf92c04);
                throw Error(_0x414c94(0x120));
              }
              _0xf92c04[_0x414c94(0x2c9)] > 0x0 &&
                (_0x50a98[_0x414c94(0x283)] = _0xf92c04);
            }
            return (
              (_0x1b511b = { callback: _0x214296 }),
              _0x5ba706[_0x414c94(0x13d)](_0x414c94(0x188), ![], _0x50a98),
              _0x24e9d9
            );
          }),
          (_0x24e9d9[_0x3a9ce5(0x2c1)] = function (_0x3a80e5, _0x1467ad) {
            var _0xd5c28a = _0x3a9ce5;
            if (!_0x208118()) return _0x24e9d9;
            _0x33fb14();
            if (!_0x21ac9c) {
              console["error"](_0xd5c28a(0x186));
              throw Error(_0xd5c28a(0x100));
            }
            if (!_0x3e0747) {
              console[_0xd5c28a(0x11a)](
                "[Telegram.WebApp]\x20Biometric\x20access\x20was\x20not\x20granted\x20by\x20the\x20user.",
              );
              throw Error(_0xd5c28a(0x16f));
            }
            if (_0xc02ca2) {
              console[_0xd5c28a(0x11a)](
                "[Telegram.WebApp]\x20Authentication\x20request\x20is\x20already\x20in\x20progress.",
              );
              throw Error(_0xd5c28a(0x21e));
            }
            var _0x4bf440 = {};
            if (typeof _0x3a80e5[_0xd5c28a(0x283)] !== _0xd5c28a(0x2c7)) {
              var _0x7d5f66 = _0x3bb4b8(_0x3a80e5["reason"]);
              if (_0x7d5f66[_0xd5c28a(0x2c9)] > 0x80) {
                console["error"](
                  "[Telegram.WebApp]\x20Biometric\x20reason\x20is\x20too\x20long",
                  _0x7d5f66,
                );
                throw Error(_0xd5c28a(0x120));
              }
              _0x7d5f66[_0xd5c28a(0x2c9)] > 0x0 &&
                (_0x4bf440["reason"] = _0x7d5f66);
            }
            return (
              (_0xc02ca2 = { callback: _0x1467ad }),
              _0x5ba706[_0xd5c28a(0x13d)](
                "web_app_biometry_request_auth",
                ![],
                _0x4bf440,
              ),
              _0x24e9d9
            );
          }),
          (_0x24e9d9[_0x3a9ce5(0x2a6)] = function (_0x4a52e1, _0x1d5f66) {
            var _0x33ec5a = _0x3a9ce5;
            if (!_0x208118()) return _0x24e9d9;
            _0x4a52e1 = _0x4a52e1 || "";
            if (_0x4a52e1[_0x33ec5a(0x2c9)] > 0x400) {
              console[_0x33ec5a(0x11a)](_0x33ec5a(0x119), _0x4a52e1);
              throw Error("WebAppBiometricManagerTokenInvalid");
            }
            _0x33fb14();
            if (!_0x21ac9c) {
              console[_0x33ec5a(0x11a)](_0x33ec5a(0x186));
              throw Error(_0x33ec5a(0x100));
            }
            if (!_0x3e0747) {
              console[_0x33ec5a(0x11a)](_0x33ec5a(0x146));
              throw Error(_0x33ec5a(0x16f));
            }
            if (_0x2908cb) {
              console[_0x33ec5a(0x11a)](
                "[Telegram.WebApp]\x20Token\x20request\x20is\x20already\x20in\x20progress.",
              );
              throw Error("WebAppBiometricManagerTokenUpdateRequested");
            }
            return (
              (_0x2908cb = { callback: _0x1d5f66 }),
              _0x5ba706[_0x33ec5a(0x13d)](
                "web_app_biometry_update_token",
                ![],
                { token: _0x4a52e1 },
              ),
              _0x24e9d9
            );
          }),
          (_0x24e9d9[_0x3a9ce5(0x2c5)] = function () {
            var _0x38b6df = _0x3a9ce5;
            if (!_0x208118()) return _0x24e9d9;
            _0x33fb14();
            if (!_0x21ac9c) {
              console["error"](_0x38b6df(0x186));
              throw Error("WebAppBiometricManagerBiometricsNotAvailable");
            }
            if (!_0xa7539e) {
              console[_0x38b6df(0x11a)](
                "[Telegram.WebApp]\x20Biometric\x20access\x20was\x20not\x20requested\x20yet.",
              );
              throw Error(_0x38b6df(0x27d));
            }
            if (_0x3e0747)
              return (console[_0x38b6df(0x10b)](_0x38b6df(0x162)), _0x24e9d9);
            return (
              _0x5ba706[_0x38b6df(0x13d)](_0x38b6df(0x271), ![]),
              _0x24e9d9
            );
          }),
          _0x24e9d9
        );
      })(),
      _0x52789d = (function () {
        var _0x3c212a = _0x598d27,
          _0x195709 = ![],
          _0x368abd = ![],
          _0x45fdc3 = ![],
          _0x3cfa4b = ![],
          _0x48e778 = {};
        (Object[_0x3c212a(0x2bb)](_0x48e778, _0x3c212a(0x294), {
          get: function () {
            return _0x195709;
          },
          enumerable: !![],
        }),
          Object["defineProperty"](_0x48e778, _0x3c212a(0x26a), {
            get: function () {
              return _0x195709 && _0x368abd;
            },
            enumerable: !![],
          }),
          Object[_0x3c212a(0x2bb)](_0x48e778, _0x3c212a(0x135), {
            get: function () {
              return _0x45fdc3;
            },
            enumerable: !![],
          }),
          Object[_0x3c212a(0x2bb)](_0x48e778, _0x3c212a(0x2c2), {
            get: function () {
              return _0x45fdc3 && _0x3cfa4b;
            },
            enumerable: !![],
          }));
        var _0x382853 = { callbacks: [] },
          _0x5b1374 = { callbacks: [] };
        (_0x5ba706["onEvent"]("location_checked", _0x4bc7d5),
          _0x5ba706[_0x3c212a(0x1b2)]("location_requested", _0x5d89b5));
        function _0x4bc7d5(_0x55aaf1, _0x20c052) {
          var _0x44fdb6 = _0x3c212a;
          _0x195709 = !![];
          _0x20c052["available"]
            ? ((_0x368abd = !![]),
              _0x20c052[_0x44fdb6(0x2cd)]
                ? ((_0x45fdc3 = !![]),
                  (_0x3cfa4b = !!_0x20c052[_0x44fdb6(0x215)]))
                : ((_0x45fdc3 = ![]), (_0x3cfa4b = ![])))
            : ((_0x368abd = ![]), (_0x45fdc3 = ![]), (_0x3cfa4b = ![]));
          if (_0x382853[_0x44fdb6(0x196)][_0x44fdb6(0x2c9)] > 0x0) {
            for (
              var _0x426af5 = 0x0;
              _0x426af5 < _0x382853[_0x44fdb6(0x196)]["length"];
              _0x426af5++
            ) {
              var _0x1ecfb1 = _0x382853["callbacks"][_0x426af5];
              _0x1ecfb1();
            }
            _0x382853[_0x44fdb6(0x196)] = [];
          }
          _0x1c34b5(_0x44fdb6(0xd9));
        }
        function _0x5d89b5(_0x114d58, _0x4b5fb0) {
          var _0x24542b = _0x3c212a;
          if (!_0x4b5fb0[_0x24542b(0x27c)]) _0x264249 = null;
          else {
            var _0x264249 = {
              latitude: _0x4b5fb0[_0x24542b(0xd5)],
              longitude: _0x4b5fb0[_0x24542b(0x137)],
              altitude: null,
              course: null,
              speed: null,
              horizontal_accuracy: null,
              vertical_accuracy: null,
              course_accuracy: null,
              speed_accuracy: null,
            };
            (typeof _0x4b5fb0[_0x24542b(0x2dc)] !== _0x24542b(0x2c7) &&
              _0x4b5fb0["altitude"] !== null &&
              (_0x264249[_0x24542b(0x2dc)] = _0x4b5fb0[_0x24542b(0x2dc)]),
              typeof _0x4b5fb0[_0x24542b(0x118)] !== "undefined" &&
                _0x4b5fb0["course"] !== null &&
                (_0x264249[_0x24542b(0x118)] =
                  _0x4b5fb0[_0x24542b(0x118)] % 0x168),
              typeof _0x4b5fb0["speed"] !== _0x24542b(0x2c7) &&
                _0x4b5fb0[_0x24542b(0x238)] !== null &&
                (_0x264249[_0x24542b(0x238)] = _0x4b5fb0[_0x24542b(0x238)]),
              typeof _0x4b5fb0[_0x24542b(0x28d)] !== _0x24542b(0x2c7) &&
                _0x4b5fb0[_0x24542b(0x28d)] !== null &&
                (_0x264249[_0x24542b(0x28d)] = _0x4b5fb0[_0x24542b(0x28d)]),
              typeof _0x4b5fb0[_0x24542b(0x1c1)] !== _0x24542b(0x2c7) &&
                _0x4b5fb0["vertical_accuracy"] !== null &&
                (_0x264249[_0x24542b(0x1c1)] = _0x4b5fb0[_0x24542b(0x1c1)]),
              typeof _0x4b5fb0["course_accuracy"] !== _0x24542b(0x2c7) &&
                _0x4b5fb0["course_accuracy"] !== null &&
                (_0x264249[_0x24542b(0x207)] = _0x4b5fb0[_0x24542b(0x207)]),
              typeof _0x4b5fb0[_0x24542b(0x2a2)] !== "undefined" &&
                _0x4b5fb0[_0x24542b(0x2a2)] !== null &&
                (_0x264249["speed_accuracy"] = _0x4b5fb0[_0x24542b(0x2a2)]));
          }
          !_0x4b5fb0["available"] || !_0x368abd || !_0x45fdc3 || !_0x3cfa4b
            ? (_0x382853[_0x24542b(0x196)][_0x24542b(0x295)](function () {
                _0x3201c3(_0x264249);
              }),
              _0x5ba706["postEvent"]("web_app_check_location", ![]))
            : _0x3201c3(_0x264249);
        }
        function _0x3201c3(_0x23e64f) {
          var _0x595720 = _0x3c212a;
          if (_0x5b1374[_0x595720(0x196)]["length"] > 0x0) {
            for (
              var _0x48812f = 0x0;
              _0x48812f < _0x5b1374["callbacks"]["length"];
              _0x48812f++
            ) {
              var _0x4049cc = _0x5b1374[_0x595720(0x196)][_0x48812f];
              _0x4049cc(_0x23e64f);
            }
            _0x5b1374[_0x595720(0x196)] = [];
          }
          _0x23e64f !== null &&
            _0x1c34b5(_0x595720(0xcf), { locationData: _0x23e64f });
        }
        function _0x2e1bad() {
          var _0x30998d = _0x3c212a;
          if (!_0x554805(_0x30998d(0x1e9)))
            return (
              console[_0x30998d(0x10b)](_0x30998d(0x209) + _0x5d20ad),
              ![]
            );
          return !![];
        }
        function _0x4837c3() {
          var _0x345d04 = _0x3c212a;
          if (!_0x195709) {
            console[_0x345d04(0x11a)](_0x345d04(0x18e));
            throw Error("WebAppLocationManagerNotInited");
          }
          return !![];
        }
        return (
          (_0x48e778[_0x3c212a(0x12a)] = function (_0x3bd90c) {
            var _0x43f51c = _0x3c212a;
            if (!_0x2e1bad()) return _0x48e778;
            if (_0x195709) return _0x48e778;
            return (
              _0x3bd90c && _0x382853["callbacks"][_0x43f51c(0x295)](_0x3bd90c),
              _0x5ba706[_0x43f51c(0x13d)]("web_app_check_location", ![]),
              _0x48e778
            );
          }),
          (_0x48e778[_0x3c212a(0x1af)] = function (_0x5d27a8) {
            var _0x590e6c = _0x3c212a;
            if (!_0x2e1bad()) return _0x48e778;
            _0x4837c3();
            if (!_0x368abd) {
              console[_0x590e6c(0x11a)](
                "[Telegram.WebApp]\x20Location\x20is\x20not\x20available\x20on\x20this\x20device.",
              );
              throw Error("WebAppLocationManagerLocationNotAvailable");
            }
            return (
              _0x5b1374[_0x590e6c(0x196)][_0x590e6c(0x295)](_0x5d27a8),
              _0x5ba706[_0x590e6c(0x13d)](_0x590e6c(0x168)),
              _0x48e778
            );
          }),
          (_0x48e778["openSettings"] = function () {
            var _0x9f4178 = _0x3c212a;
            if (!_0x2e1bad()) return _0x48e778;
            _0x4837c3();
            if (!_0x368abd) {
              console["error"](_0x9f4178(0xdd));
              throw Error(_0x9f4178(0x1e8));
            }
            if (!_0x45fdc3) {
              console[_0x9f4178(0x11a)](_0x9f4178(0x12c));
              throw Error(_0x9f4178(0x315));
            }
            if (_0x3cfa4b)
              return (console[_0x9f4178(0x10b)](_0x9f4178(0x114)), _0x48e778);
            return (
              _0x5ba706[_0x9f4178(0x13d)](
                "web_app_open_location_settings",
                ![],
              ),
              _0x48e778
            );
          }),
          _0x48e778
        );
      })(),
      _0x68928b = (function () {
        var _0x4cafba = _0x598d27,
          _0xe619f3 = ![],
          _0x111d25 = null,
          _0x8b90a = null,
          _0x1be5ae = null,
          _0x4d83b3 = [],
          _0x27b434 = [],
          _0x3d0bc4 = {};
        (Object["defineProperty"](_0x3d0bc4, "isStarted", {
          get: function () {
            return _0xe619f3;
          },
          enumerable: !![],
        }),
          Object["defineProperty"](_0x3d0bc4, "x", {
            get: function () {
              return _0x111d25;
            },
            enumerable: !![],
          }),
          Object["defineProperty"](_0x3d0bc4, "y", {
            get: function () {
              return _0x8b90a;
            },
            enumerable: !![],
          }),
          Object[_0x4cafba(0x2bb)](_0x3d0bc4, "z", {
            get: function () {
              return _0x1be5ae;
            },
            enumerable: !![],
          }),
          _0x5ba706[_0x4cafba(0x1b2)](_0x4cafba(0x2a3), _0x2f542d),
          _0x5ba706[_0x4cafba(0x1b2)](_0x4cafba(0xcb), _0x11c037),
          _0x5ba706[_0x4cafba(0x1b2)](_0x4cafba(0x31a), _0x4dff56),
          _0x5ba706["onEvent"](_0x4cafba(0x1f2), _0x25c993));
        function _0x2f542d(_0x376ce5, _0x325971) {
          var _0x3a8971 = _0x4cafba;
          _0xe619f3 = !![];
          if (_0x4d83b3[_0x3a8971(0x2c9)] > 0x0) {
            for (
              var _0x238f89 = 0x0;
              _0x238f89 < _0x4d83b3["length"];
              _0x238f89++
            ) {
              var _0x268a90 = _0x4d83b3[_0x238f89];
              _0x268a90(!![]);
            }
            _0x4d83b3 = [];
          }
          _0x1c34b5("accelerometerStarted");
        }
        function _0x11c037(_0xab7d3f, _0xe25de3) {
          var _0x3b454b = _0x4cafba;
          _0xe619f3 = ![];
          if (_0x27b434[_0x3b454b(0x2c9)] > 0x0) {
            for (
              var _0x4919ed = 0x0;
              _0x4919ed < _0x27b434[_0x3b454b(0x2c9)];
              _0x4919ed++
            ) {
              var _0x1c0f2b = _0x27b434[_0x4919ed];
              _0x1c0f2b(!![]);
            }
            _0x27b434 = [];
          }
          _0x1c34b5(_0x3b454b(0x2ec));
        }
        function _0x4dff56(_0x2bdcc9, _0x5eff31) {
          ((_0x111d25 = _0x5eff31["x"]),
            (_0x8b90a = _0x5eff31["y"]),
            (_0x1be5ae = _0x5eff31["z"]),
            _0x1c34b5("accelerometerChanged"));
        }
        function _0x25c993(_0x2d891a, _0x1bfa73) {
          var _0x4e54a7 = _0x4cafba;
          if (_0x4d83b3["length"] > 0x0) {
            for (
              var _0x265406 = 0x0;
              _0x265406 < _0x4d83b3[_0x4e54a7(0x2c9)];
              _0x265406++
            ) {
              var _0x28d9f4 = _0x4d83b3[_0x265406];
              _0x28d9f4(![]);
            }
            _0x4d83b3 = [];
          }
          _0x1c34b5(_0x4e54a7(0x13f), { error: _0x1bfa73["error"] });
        }
        function _0x318392() {
          var _0x4bc8c3 = _0x4cafba;
          if (!_0x554805(_0x4bc8c3(0x1e9)))
            return (
              console[_0x4bc8c3(0x10b)](_0x4bc8c3(0x266) + _0x5d20ad),
              ![]
            );
          return !![];
        }
        return (
          (_0x3d0bc4[_0x4cafba(0x308)] = function (_0x4e4004, _0x383cf3) {
            var _0x12baff = _0x4cafba;
            _0x4e4004 = _0x4e4004 || {};
            if (!_0x318392()) return _0x3d0bc4;
            var _0x4fed17 = {},
              _0x5e8579 = parseInt(_0x4e4004["refresh_rate"] || 0x3e8);
            return (
              isNaN(_0x5e8579) || _0x5e8579 < 0x14 || _0x5e8579 > 0x3e8
                ? console["warn"](_0x12baff(0x19c), _0x5e8579)
                : (_0x4fed17[_0x12baff(0x14c)] = _0x5e8579),
              _0x383cf3 && _0x4d83b3[_0x12baff(0x295)](_0x383cf3),
              _0x5ba706[_0x12baff(0x13d)](_0x12baff(0x177), ![], _0x4fed17),
              _0x3d0bc4
            );
          }),
          (_0x3d0bc4["stop"] = function (_0x1731ac) {
            var _0x5d5442 = _0x4cafba;
            if (!_0x318392()) return _0x3d0bc4;
            return (
              _0x1731ac && _0x27b434[_0x5d5442(0x295)](_0x1731ac),
              _0x5ba706["postEvent"]("web_app_stop_accelerometer"),
              _0x3d0bc4
            );
          }),
          _0x3d0bc4
        );
      })(),
      _0x927c7e = (function () {
        var _0x1e2586 = _0x598d27,
          _0x13cc25 = ![],
          _0x58545a = null,
          _0x4573d8 = null,
          _0x33e1e9 = null,
          _0x5af722 = ![],
          _0x9ff722 = [],
          _0x8ea592 = [],
          _0x2046c3 = {};
        (Object[_0x1e2586(0x2bb)](_0x2046c3, "isStarted", {
          get: function () {
            return _0x13cc25;
          },
          enumerable: !![],
        }),
          Object["defineProperty"](_0x2046c3, _0x1e2586(0x30d), {
            get: function () {
              return _0x5af722;
            },
            enumerable: !![],
          }),
          Object[_0x1e2586(0x2bb)](_0x2046c3, _0x1e2586(0x2a9), {
            get: function () {
              return _0x58545a;
            },
            enumerable: !![],
          }),
          Object[_0x1e2586(0x2bb)](_0x2046c3, _0x1e2586(0x2fd), {
            get: function () {
              return _0x4573d8;
            },
            enumerable: !![],
          }),
          Object["defineProperty"](_0x2046c3, _0x1e2586(0x16b), {
            get: function () {
              return _0x33e1e9;
            },
            enumerable: !![],
          }),
          _0x5ba706["onEvent"]("device_orientation_started", _0x4fdab2),
          _0x5ba706[_0x1e2586(0x1b2)]("device_orientation_stopped", _0x4bffca),
          _0x5ba706[_0x1e2586(0x1b2)](_0x1e2586(0x30c), _0x4bb6ce),
          _0x5ba706["onEvent"](_0x1e2586(0xd4), _0x24a57a));
        function _0x4fdab2(_0x3dfe22, _0x30ad03) {
          var _0x5dd3c3 = _0x1e2586;
          _0x13cc25 = !![];
          if (_0x9ff722["length"] > 0x0) {
            for (
              var _0x490340 = 0x0;
              _0x490340 < _0x9ff722[_0x5dd3c3(0x2c9)];
              _0x490340++
            ) {
              var _0x57141a = _0x9ff722[_0x490340];
              _0x57141a(!![]);
            }
            _0x9ff722 = [];
          }
          _0x1c34b5("deviceOrientationStarted");
        }
        function _0x4bffca(_0x3eaf28, _0x4f3867) {
          var _0x2bd41d = _0x1e2586;
          _0x13cc25 = ![];
          if (_0x8ea592[_0x2bd41d(0x2c9)] > 0x0) {
            for (
              var _0x356bd0 = 0x0;
              _0x356bd0 < _0x8ea592[_0x2bd41d(0x2c9)];
              _0x356bd0++
            ) {
              var _0x160a35 = _0x8ea592[_0x356bd0];
              _0x160a35(!![]);
            }
            _0x8ea592 = [];
          }
          _0x1c34b5("deviceOrientationStopped");
        }
        function _0x4bb6ce(_0x36be6f, _0x2ba40e) {
          var _0x49a69a = _0x1e2586;
          ((_0x5af722 = !!_0x2ba40e["absolute"]),
            (_0x58545a = _0x2ba40e["alpha"]),
            (_0x4573d8 = _0x2ba40e["beta"]),
            (_0x33e1e9 = _0x2ba40e[_0x49a69a(0x16b)]),
            _0x1c34b5("deviceOrientationChanged"));
        }
        function _0x24a57a(_0x5c394f, _0x49770e) {
          var _0x3c54c9 = _0x1e2586;
          if (_0x9ff722[_0x3c54c9(0x2c9)] > 0x0) {
            for (
              var _0x2b110d = 0x0;
              _0x2b110d < _0x9ff722[_0x3c54c9(0x2c9)];
              _0x2b110d++
            ) {
              var _0xfbb78f = _0x9ff722[_0x2b110d];
              _0xfbb78f(![]);
            }
            _0x9ff722 = [];
          }
          _0x1c34b5(_0x3c54c9(0x144), { error: _0x49770e[_0x3c54c9(0x11a)] });
        }
        function _0x52c67e() {
          var _0x2382f8 = _0x1e2586;
          if (!_0x554805(_0x2382f8(0x1e9)))
            return (
              console[_0x2382f8(0x10b)](_0x2382f8(0x18b) + _0x5d20ad),
              ![]
            );
          return !![];
        }
        return (
          (_0x2046c3[_0x1e2586(0x308)] = function (_0x4ebe24, _0x3147ae) {
            var _0x57d570 = _0x1e2586;
            _0x4ebe24 = _0x4ebe24 || {};
            if (!_0x52c67e()) return _0x2046c3;
            var _0x2eac29 = {},
              _0x19ba21 = parseInt(_0x4ebe24["refresh_rate"] || 0x3e8);
            return (
              isNaN(_0x19ba21) || _0x19ba21 < 0x14 || _0x19ba21 > 0x3e8
                ? console[_0x57d570(0x10b)](_0x57d570(0x274), _0x19ba21)
                : (_0x2eac29[_0x57d570(0x14c)] = _0x19ba21),
              (_0x2eac29[_0x57d570(0x22e)] = !!_0x4ebe24[_0x57d570(0x22e)]),
              _0x3147ae && _0x9ff722[_0x57d570(0x295)](_0x3147ae),
              _0x5ba706[_0x57d570(0x13d)](_0x57d570(0x2ad), ![], _0x2eac29),
              _0x2046c3
            );
          }),
          (_0x2046c3["stop"] = function (_0x3ab9e5) {
            var _0x2880bd = _0x1e2586;
            if (!_0x52c67e()) return _0x2046c3;
            return (
              _0x3ab9e5 && _0x8ea592["push"](_0x3ab9e5),
              _0x5ba706[_0x2880bd(0x13d)](_0x2880bd(0x2d4)),
              _0x2046c3
            );
          }),
          _0x2046c3
        );
      })(),
      _0x14c7d7 = (function () {
        var _0x15cddc = _0x598d27,
          _0x40f9b1 = ![],
          _0xeede05 = null,
          _0x576681 = null,
          _0x4b2160 = null,
          _0xd86726 = [],
          _0x546255 = [],
          _0x5e29e3 = {};
        (Object["defineProperty"](_0x5e29e3, "isStarted", {
          get: function () {
            return _0x40f9b1;
          },
          enumerable: !![],
        }),
          Object["defineProperty"](_0x5e29e3, "x", {
            get: function () {
              return _0xeede05;
            },
            enumerable: !![],
          }),
          Object[_0x15cddc(0x2bb)](_0x5e29e3, "y", {
            get: function () {
              return _0x576681;
            },
            enumerable: !![],
          }),
          Object[_0x15cddc(0x2bb)](_0x5e29e3, "z", {
            get: function () {
              return _0x4b2160;
            },
            enumerable: !![],
          }),
          _0x5ba706[_0x15cddc(0x1b2)](_0x15cddc(0x30e), _0x537fda),
          _0x5ba706[_0x15cddc(0x1b2)](_0x15cddc(0x2ac), _0x45ffbe),
          _0x5ba706[_0x15cddc(0x1b2)](_0x15cddc(0x247), _0x54d7c4),
          _0x5ba706[_0x15cddc(0x1b2)]("gyroscope_failed", _0x1db144));
        function _0x537fda(_0x2fd586, _0x37d1dc) {
          var _0x449e62 = _0x15cddc;
          _0x40f9b1 = !![];
          if (_0xd86726[_0x449e62(0x2c9)] > 0x0) {
            for (
              var _0x4d0153 = 0x0;
              _0x4d0153 < _0xd86726[_0x449e62(0x2c9)];
              _0x4d0153++
            ) {
              var _0x282868 = _0xd86726[_0x4d0153];
              _0x282868(!![]);
            }
            _0xd86726 = [];
          }
          _0x1c34b5("gyroscopeStarted");
        }
        function _0x45ffbe(_0x4634e3, _0x373c3a) {
          var _0x5a521c = _0x15cddc;
          _0x40f9b1 = ![];
          if (_0x546255["length"] > 0x0) {
            for (
              var _0x3f6d5e = 0x0;
              _0x3f6d5e < _0x546255["length"];
              _0x3f6d5e++
            ) {
              var _0x46bab8 = _0x546255[_0x3f6d5e];
              _0x46bab8(!![]);
            }
            _0x546255 = [];
          }
          _0x1c34b5(_0x5a521c(0xfd));
        }
        function _0x54d7c4(_0x40af9b, _0x246eb6) {
          var _0x9e364c = _0x15cddc;
          ((_0xeede05 = _0x246eb6["x"]),
            (_0x576681 = _0x246eb6["y"]),
            (_0x4b2160 = _0x246eb6["z"]),
            _0x1c34b5(_0x9e364c(0x329)));
        }
        function _0x1db144(_0x50b0bf, _0x1074c9) {
          var _0x4d92eb = _0x15cddc;
          if (_0xd86726["length"] > 0x0) {
            for (
              var _0xf4fd32 = 0x0;
              _0xf4fd32 < _0xd86726[_0x4d92eb(0x2c9)];
              _0xf4fd32++
            ) {
              var _0x40194e = _0xd86726[_0xf4fd32];
              _0x40194e(![]);
            }
            _0xd86726 = [];
          }
          _0x1c34b5(_0x4d92eb(0x27b), { error: _0x1074c9["error"] });
        }
        function _0x24056c() {
          var _0x56ddc5 = _0x15cddc;
          if (!_0x554805(_0x56ddc5(0x1e9)))
            return (
              console[_0x56ddc5(0x10b)](_0x56ddc5(0x102) + _0x5d20ad),
              ![]
            );
          return !![];
        }
        return (
          (_0x5e29e3[_0x15cddc(0x308)] = function (_0x5126c0, _0x3df231) {
            var _0x64111d = _0x15cddc;
            _0x5126c0 = _0x5126c0 || {};
            if (!_0x24056c()) return _0x5e29e3;
            var _0x1f2991 = {},
              _0x314988 = parseInt(_0x5126c0["refresh_rate"] || 0x3e8);
            return (
              isNaN(_0x314988) || _0x314988 < 0x14 || _0x314988 > 0x3e8
                ? console[_0x64111d(0x10b)](_0x64111d(0x2b5), _0x314988)
                : (_0x1f2991[_0x64111d(0x14c)] = _0x314988),
              _0x3df231 && _0xd86726[_0x64111d(0x295)](_0x3df231),
              _0x5ba706[_0x64111d(0x13d)](_0x64111d(0x231), ![], _0x1f2991),
              _0x5e29e3
            );
          }),
          (_0x5e29e3[_0x15cddc(0x237)] = function (_0x807aff) {
            var _0x5c45ed = _0x15cddc;
            if (!_0x24056c()) return _0x5e29e3;
            return (
              _0x807aff && _0x546255[_0x5c45ed(0x295)](_0x807aff),
              _0x5ba706[_0x5c45ed(0x13d)](_0x5c45ed(0xd1)),
              _0x5e29e3
            );
          }),
          _0x5e29e3
        );
      })(),
      _0x30245a = (function () {
        var _0x50212a = _0x598d27,
          _0xba3e36 = {};
        function _0x143c1e(_0x28ca46, _0x378582, _0x4885ae) {
          var _0x523506 = _0x4c1f,
            _0x48fcf7 = new Error(_0x28ca46);
          return (
            (_0x48fcf7[_0x523506(0x21c)] = _0x523506(0x2ce)),
            (_0x48fcf7[_0x523506(0xde)] = _0x378582),
            _0x4885ae && (_0x48fcf7["parameters"] = _0x4885ae),
            _0x48fcf7
          );
        }
        function _0x473777(_0x31ce24, _0x14e65f) {
          var _0x47bb78 = _0x4c1f;
          return _0x14e65f[_0x47bb78(0x2be)]()["then"](function (_0xb73d) {
            var _0xa4585e = _0x47bb78,
              _0x46e6c5 = null;
            try {
              _0x46e6c5 = JSON["parse"](_0xb73d);
            } catch (_0x267425) {}
            if (
              !_0x46e6c5 ||
              typeof _0x46e6c5 !== _0xa4585e(0x132) ||
              typeof _0x46e6c5["ok"] !== _0xa4585e(0x12d)
            )
              throw _0x143c1e(
                _0xa4585e(0x2ba) +
                  _0x31ce24 +
                  _0xa4585e(0x192) +
                  _0x14e65f[_0xa4585e(0xde)] +
                  ")",
                _0x14e65f["status"],
              );
            if (!_0x46e6c5["ok"]) {
              var _0x4c4bbf = _0x143c1e(
                _0x46e6c5["description"] ||
                  "Endpoint\x20" +
                    _0x31ce24 +
                    "\x20failed\x20(HTTP\x20" +
                    _0x14e65f[_0xa4585e(0xde)] +
                    ")",
                _0x46e6c5[_0xa4585e(0x260)] || _0x14e65f[_0xa4585e(0xde)],
                _0x46e6c5[_0xa4585e(0x179)],
              );
              _0x4c4bbf[_0xa4585e(0x152)] = _0x46e6c5[_0xa4585e(0x1ed)] || "";
              throw _0x4c4bbf;
            }
            return _0x46e6c5["result"];
          });
        }
        return (
          (_0xba3e36[_0x50212a(0x138)] = function (
            _0x105e96,
            _0x90956c,
            _0x5b69d9,
          ) {
            var _0xcad87e = _0x50212a;
            typeof _0x90956c === _0xcad87e(0x1f0) &&
              typeof _0x5b69d9 === _0xcad87e(0x2c7) &&
              ((_0x5b69d9 = _0x90956c), (_0x90956c = undefined));
            if (typeof _0x105e96 !== _0xcad87e(0x21b)) {
              console["error"](_0xcad87e(0x15a), _0x105e96);
              throw Error("WebAppServerlessEndpointInvalid");
            }
            typeof _0x90956c === _0xcad87e(0x2c7) && (_0x90956c = {});
            if (
              typeof _0x90956c !== _0xcad87e(0x132) ||
              _0x90956c === null ||
              Array[_0xcad87e(0x176)](_0x90956c)
            ) {
              console[_0xcad87e(0x11a)](_0xcad87e(0x21d), _0x90956c);
              throw Error("WebAppServerlessInputInvalid");
            }
            if (
              typeof _0x5b69d9 !== _0xcad87e(0x2c7) &&
              typeof _0x5b69d9 !== "function"
            ) {
              console[_0xcad87e(0x11a)](_0xcad87e(0x227), _0x5b69d9);
              throw Error("WebAppServerlessCallbackInvalid");
            }
            if (!_0x12d6c5[_0xcad87e(0x2c9)]) {
              console[_0xcad87e(0x11a)](_0xcad87e(0x199));
              throw Error("WebAppServerlessInitDataUnavailable");
            }
            if (typeof fetch !== "function") {
              console[_0xcad87e(0x11a)](_0xcad87e(0x2ef));
              throw Error(_0xcad87e(0x1ad));
            }
            fetch(_0xcad87e(0x2e9) + _0x105e96, {
              method: _0xcad87e(0x11c),
              headers: {
                Authorization:
                  _0xcad87e(0x140) + window[_0xcad87e(0x1cf)](_0x12d6c5),
                "Content-Type": _0xcad87e(0x170),
              },
              body: JSON["stringify"](_0x90956c),
              credentials: _0xcad87e(0x112),
            })
              [_0xcad87e(0x289)](
                function (_0x270b25) {
                  return _0x473777(_0x105e96, _0x270b25);
                },
                function (_0x2f7341) {
                  var _0x4e5900 = _0xcad87e;
                  throw _0x143c1e(
                    "Network\x20error\x20calling\x20endpoint\x20" +
                      _0x105e96 +
                      (_0x2f7341 && _0x2f7341["message"]
                        ? ":\x20" + _0x2f7341[_0x4e5900(0x32b)]
                        : ""),
                    0x0,
                  );
                },
              )
              [_0xcad87e(0x289)](
                function (_0x578297) {
                  _0x5b69d9 && _0x5b69d9(null, _0x578297);
                },
                function (_0x11f9cf) {
                  _0x5b69d9 && _0x5b69d9(_0x11f9cf, null);
                },
              );
          }),
          _0xba3e36
        );
      })(),
      _0x2a307a = {};
    function _0x27b0c6(_0x3efbb3, _0x35afd3) {
      var _0x4e46f6 = _0x598d27;
      if (_0x35afd3["slug"] && _0x2a307a[_0x35afd3["slug"]]) {
        var _0x9f21ec = _0x2a307a[_0x35afd3["slug"]];
        (delete _0x2a307a[_0x35afd3["slug"]],
          _0x9f21ec[_0x4e46f6(0x129)] &&
            _0x9f21ec[_0x4e46f6(0x129)](_0x35afd3[_0x4e46f6(0xde)]),
          _0x1c34b5(_0x4e46f6(0x32d), {
            url: _0x9f21ec[_0x4e46f6(0xea)],
            status: _0x35afd3[_0x4e46f6(0xde)],
          }));
      }
    }
    var _0x28fded = ![];
    function _0x23e28c(_0x7e53ee, _0x20737d) {
      var _0x36c258 = _0x598d27;
      if (_0x28fded) {
        var _0xb93bf1 = _0x28fded;
        _0x28fded = ![];
        var _0x30dad6 = null;
        (typeof _0x20737d[_0x36c258(0x2e5)] !== _0x36c258(0x2c7) &&
          (_0x30dad6 = _0x20737d[_0x36c258(0x2e5)]),
          _0xb93bf1[_0x36c258(0x129)] && _0xb93bf1[_0x36c258(0x129)](_0x30dad6),
          _0x1c34b5(_0x36c258(0x30b), { button_id: _0x30dad6 }));
      }
    }
    var _0x22a1b1 = ![];
    function _0x457566(_0x283ba2, _0x267780) {
      var _0x59e8e2 = _0x598d27;
      if (_0x22a1b1) {
        var _0x314773 = _0x22a1b1,
          _0x371a2d = null;
        (typeof _0x267780[_0x59e8e2(0x258)] !== _0x59e8e2(0x2c7) &&
          (_0x371a2d = _0x267780[_0x59e8e2(0x258)]),
          _0x314773[_0x59e8e2(0x129)] &&
            _0x314773[_0x59e8e2(0x129)](_0x371a2d) &&
            ((_0x22a1b1 = ![]),
            _0x5ba706[_0x59e8e2(0x13d)]("web_app_close_scan_qr_popup", ![])),
          _0x1c34b5(_0x59e8e2(0x10d), { data: _0x371a2d }));
      }
    }
    function _0x560854(_0x2f8598, _0xb34a48) {
      var _0x46c89e = _0x598d27;
      ((_0x22a1b1 = ![]), _0x1c34b5(_0x46c89e(0x272)));
    }
    function _0x1e8872(_0x47e8f6, _0x1f82d0) {
      var _0x47044d = _0x598d27;
      if (
        _0x1f82d0[_0x47044d(0x14e)] &&
        _0x411cba[_0x1f82d0[_0x47044d(0x14e)]]
      ) {
        var _0x1ff5fe = _0x411cba[_0x1f82d0["req_id"]];
        delete _0x411cba[_0x1f82d0[_0x47044d(0x14e)]];
        var _0x5e8afd = null;
        (typeof _0x1f82d0[_0x47044d(0x258)] !== "undefined" &&
          (_0x5e8afd = _0x1f82d0["data"]),
          _0x1ff5fe[_0x47044d(0x129)] && _0x1ff5fe[_0x47044d(0x129)](_0x5e8afd),
          _0x1c34b5(_0x47044d(0x300), { data: _0x5e8afd }));
      }
    }
    var _0x3d9595 = ![];
    function _0xc4645a(_0x2f3472, _0x5527a7) {
      var _0x25a2b8 = _0x598d27;
      if (_0x3d9595) {
        var _0x2c84fe = _0x3d9595;
        ((_0x3d9595 = ![]),
          _0x2c84fe["callback"] &&
            _0x2c84fe[_0x25a2b8(0x129)](
              _0x5527a7["status"] == _0x25a2b8(0x332),
            ),
          _0x1c34b5(_0x25a2b8(0x24b), { status: _0x5527a7[_0x25a2b8(0xde)] }));
      }
    }
    function _0x203261(_0xb372c1, _0x36d4fa) {
      var _0x5d6158,
        _0xf69d17,
        _0x334e13 = 0x0,
        _0x23b08d = function () {
          var _0x23237c = _0x4c1f;
          _0x242d83(_0x23237c(0x17f), {}, function (_0x8957d, _0x4fd611) {
            var _0x3778dd = _0x23237c;
            (_0x4fd611[_0x3778dd(0xd8)](0x0, 0x1) == "\x22" &&
              _0x4fd611["substr"](-0x1) == "\x22" &&
              (_0x4fd611 = JSON["parse"](_0x4fd611)),
              _0x4fd611 && _0x4fd611["length"]
                ? (clearTimeout(_0xf69d17), _0xb372c1(_0x4fd611))
                : ((_0x334e13 += 0x32),
                  (_0x5d6158 = setTimeout(_0x23b08d, _0x334e13))));
          });
        },
        _0x3ef175 = function () {
          (clearTimeout(_0x5d6158), _0xb372c1(""));
        };
      ((_0xf69d17 = setTimeout(_0x3ef175, _0x36d4fa)), _0x23b08d());
    }
    var _0x19ff4f = ![];
    function _0x5629f5(_0x1f8c06, _0x2c9515) {
      var _0xd9d9d6 = _0x598d27;
      if (_0x19ff4f) {
        var _0x5307a0 = _0x19ff4f;
        _0x19ff4f = ![];
        var _0x2a64e8 = _0x2c9515["status"] == "sent",
          _0x15eb37 = { status: _0x2c9515[_0xd9d9d6(0xde)] };
        _0x2a64e8
          ? _0x203261(function (_0x5eef32) {
              var _0x48b481 = _0xd9d9d6;
              if (_0x5eef32 && _0x5eef32["length"]) {
                ((_0x15eb37[_0x48b481(0x2b8)] = _0x5eef32),
                  (_0x15eb37[_0x48b481(0x160)] =
                    _0x393d9e[_0x48b481(0x1b3)](_0x5eef32)));
                for (var _0x4e9d6c in _0x15eb37["responseUnsafe"]) {
                  var _0x17fa34 = _0x15eb37[_0x48b481(0x160)][_0x4e9d6c];
                  try {
                    ((_0x17fa34[_0x48b481(0xd8)](0x0, 0x1) == "{" &&
                      _0x17fa34[_0x48b481(0xd8)](-0x1) == "}") ||
                      (_0x17fa34[_0x48b481(0xd8)](0x0, 0x1) == "[" &&
                        _0x17fa34["substr"](-0x1) == "]")) &&
                      (_0x15eb37["responseUnsafe"][_0x4e9d6c] =
                        JSON[_0x48b481(0x2a7)](_0x17fa34));
                  } catch (_0x42f46a) {}
                }
              }
              (_0x5307a0[_0x48b481(0x129)] &&
                _0x5307a0[_0x48b481(0x129)](_0x2a64e8, _0x15eb37),
                _0x1c34b5("contactRequested", _0x15eb37));
            }, 0xbb8)
          : (_0x5307a0["callback"] &&
              _0x5307a0[_0xd9d9d6(0x129)](_0x2a64e8, _0x15eb37),
            _0x1c34b5(_0xd9d9d6(0x284), _0x15eb37));
      }
    }
    var _0x3fcd90 = ![];
    function _0x17235c(_0x37fc8a, _0x4e2eea) {
      var _0x268c34 = _0x598d27;
      if (_0x3fcd90) {
        var _0x2730b9 = _0x3fcd90;
        _0x3fcd90 = ![];
        var _0xa162ef = _0x4e2eea[_0x268c34(0xde)] == "downloading";
        (_0x2730b9[_0x268c34(0x129)] && _0x2730b9["callback"](_0xa162ef),
          _0x1c34b5(_0x268c34(0xf9), {
            status: _0xa162ef ? "downloading" : _0x268c34(0x2c8),
          }));
      }
    }
    function _0xfd247f(_0x2038d3, _0xc432d6) {
      var _0x57bc09 = _0x598d27;
      if (
        _0xc432d6[_0x57bc09(0x14e)] &&
        _0x411cba[_0xc432d6[_0x57bc09(0x14e)]]
      ) {
        var _0x4429d7 = _0x411cba[_0xc432d6[_0x57bc09(0x14e)]];
        delete _0x411cba[_0xc432d6["req_id"]];
        var _0x3d6cac = null,
          _0x407af4 = null;
        (typeof _0xc432d6[_0x57bc09(0x218)] !== _0x57bc09(0x2c7) &&
          (_0x3d6cac = _0xc432d6["result"]),
          typeof _0xc432d6[_0x57bc09(0x11a)] !== _0x57bc09(0x2c7) &&
            (_0x407af4 = _0xc432d6[_0x57bc09(0x11a)]),
          _0x4429d7[_0x57bc09(0x129)] &&
            _0x4429d7["callback"](_0x407af4, _0x3d6cac));
      }
    }
    function _0x242d83(_0x3bbcae, _0x51e9ae, _0x2687c8) {
      var _0x437f50 = _0x598d27;
      if (!_0x554805(_0x437f50(0x12b))) {
        console["error"](
          "[Telegram.WebApp]\x20Method\x20invokeCustomMethod\x20is\x20not\x20supported\x20in\x20version\x20" +
            _0x5d20ad,
        );
        throw Error(_0x437f50(0x229));
      }
      var _0xa50ad5 = _0x9c2b83(0x10),
        _0x5b5f96 = {
          req_id: _0xa50ad5,
          method: _0x3bbcae,
          params: _0x51e9ae || {},
        };
      ((_0x411cba[_0xa50ad5] = { callback: _0x2687c8 }),
        _0x5ba706[_0x437f50(0x13d)](_0x437f50(0x210), ![], _0x5b5f96));
    }
    (!window["Telegram"] && (window[_0x598d27(0x1cd)] = {}),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x239), {
        get: function () {
          return _0x12d6c5;
        },
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x167), {
        get: function () {
          return _0x308c65;
        },
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x1d4), {
        get: function () {
          return _0x5d20ad;
        },
        enumerable: !![],
      }),
      Object["defineProperty"](_0x59b099, _0x598d27(0x1b9), {
        get: function () {
          return _0x168d6b;
        },
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, "colorScheme", {
        get: function () {
          return _0x3e5794;
        },
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x319), {
        get: function () {
          return _0x578b31;
        },
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0xe8), {
        get: function () {
          return _0x4b5b6f;
        },
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x316), {
        get: function () {
          var _0x5046e5 = _0x598d27;
          return (
            (_0xdf7cd6 === ![] ? window[_0x5046e5(0x131)] : _0xdf7cd6) -
            _0x4ae6fd
          );
        },
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x16e), {
        get: function () {
          return (
            (_0x5eee5e === ![] ? window["innerHeight"] : _0x5eee5e) - _0x4ae6fd
          );
        },
        enumerable: !![],
      }),
      Object["defineProperty"](_0x59b099, _0x598d27(0x2bc), {
        get: function () {
          return _0x425b37;
        },
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x148), {
        get: function () {
          return _0x417d18;
        },
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x1b0), {
        set: function (_0x53a98d) {
          _0x5c9374(_0x53a98d);
        },
        get: function () {
          return _0x53f7e0;
        },
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x331), {
        set: function (_0x5bec76) {
          _0x5290cc(_0x5bec76);
        },
        get: function () {
          return _0x22c4fd;
        },
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x33a), {
        get: function () {
          return _0x2ee9d3;
        },
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x232), {
        set: function (_0x2af011) {
          _0x134502(_0x2af011);
        },
        get: function () {
          return _0x453fab;
        },
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x328), {
        get: function () {
          return _0x2e6eb7;
        },
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x2d3), {
        set: function (_0xdf4ad6) {
          _0x46fa7d(_0xdf4ad6);
        },
        get: function () {
          return _0x4b2567();
        },
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x299), {
        set: function (_0x3727f5) {
          _0x58f3af(_0x3727f5);
        },
        get: function () {
          return _0x1bc7c1();
        },
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0xd2), {
        set: function (_0x13e342) {
          _0x21f215(_0x13e342);
        },
        get: function () {
          return _0x5556f2();
        },
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, "BackButton", {
        value: _0x5c11b8,
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x19a), {
        value: _0x50f28e,
        enumerable: !![],
      }),
      Object["defineProperty"](_0x59b099, _0x598d27(0x1aa), {
        value: _0x9e82bb,
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x243), {
        value: _0x5d84d4,
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, "HapticFeedback", {
        value: _0x17af6e,
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x25b), {
        value: _0x33e0f5,
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x326), {
        value: _0x3849ad,
        enumerable: !![],
      }),
      Object["defineProperty"](_0x59b099, _0x598d27(0x301), {
        value: _0x5f10a5,
        enumerable: !![],
      }),
      Object["defineProperty"](_0x59b099, "BiometricManager", {
        value: _0x20cf98,
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x206), {
        value: _0x68928b,
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x305), {
        value: _0x927c7e,
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x172), {
        value: _0x14c7d7,
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, "LocationManager", {
        value: _0x52789d,
        enumerable: !![],
      }),
      Object[_0x598d27(0x2bb)](_0x59b099, _0x598d27(0x156), {
        value: _0x30245a,
        enumerable: !![],
      }),
      (_0x59b099[_0x598d27(0x324)] = function (_0x1bbb1c) {
        return _0x554805(_0x1bbb1c);
      }),
      (_0x59b099["setHeaderColor"] = function (_0x593643) {
        var _0x53d499 = _0x598d27;
        _0x59b099[_0x53d499(0x2d3)] = _0x593643;
      }),
      (_0x59b099[_0x598d27(0x25a)] = function (_0x4e4635) {
        var _0x1d06c8 = _0x598d27;
        _0x59b099[_0x1d06c8(0x299)] = _0x4e4635;
      }),
      (_0x59b099[_0x598d27(0x1f6)] = function (_0x48e470) {
        var _0x21dd11 = _0x598d27;
        _0x59b099[_0x21dd11(0xd2)] = _0x48e470;
      }),
      (_0x59b099[_0x598d27(0x1e3)] = function () {
        var _0xcf915b = _0x598d27;
        _0x59b099[_0xcf915b(0x1b0)] = !![];
      }),
      (_0x59b099[_0x598d27(0xce)] = function () {
        var _0x4e510d = _0x598d27;
        _0x59b099[_0x4e510d(0x1b0)] = ![];
      }),
      (_0x59b099[_0x598d27(0x261)] = function () {
        var _0x2add22 = _0x598d27;
        _0x59b099[_0x2add22(0x331)] = !![];
      }),
      (_0x59b099[_0x598d27(0x20b)] = function () {
        var _0x2840b0 = _0x598d27;
        _0x59b099[_0x2840b0(0x331)] = ![];
      }),
      (_0x59b099["lockOrientation"] = function () {
        var _0x3eff4b = _0x598d27;
        _0x59b099[_0x3eff4b(0x232)] = !![];
      }),
      (_0x59b099["unlockOrientation"] = function () {
        var _0x3201e5 = _0x598d27;
        _0x59b099[_0x3201e5(0x232)] = ![];
      }),
      (_0x59b099[_0x598d27(0x182)] = function () {
        var _0x4262c5 = _0x598d27;
        if (!_0x554805(_0x4262c5(0x1e9))) {
          console[_0x4262c5(0x11a)](_0x4262c5(0x32e) + _0x5d20ad);
          throw Error(_0x4262c5(0x229));
        }
        _0x5ba706[_0x4262c5(0x13d)]("web_app_request_fullscreen");
      }),
      (_0x59b099["exitFullscreen"] = function () {
        var _0x3d7c1c = _0x598d27;
        if (!_0x554805("8.0")) {
          console[_0x3d7c1c(0x11a)](
            "[Telegram.WebApp]\x20Method\x20exitFullscreen\x20is\x20not\x20supported\x20in\x20version\x20" +
              _0x5d20ad,
          );
          throw Error("WebAppMethodUnsupported");
        }
        _0x5ba706[_0x3d7c1c(0x13d)](_0x3d7c1c(0x2b6));
      }),
      (_0x59b099[_0x598d27(0x16a)] = function () {
        var _0x1b9426 = _0x598d27;
        if (!_0x554805(_0x1b9426(0x1e9))) {
          console["error"](_0x1b9426(0x269) + _0x5d20ad);
          throw Error(_0x1b9426(0x229));
        }
        _0x5ba706[_0x1b9426(0x13d)]("web_app_add_to_home_screen");
      }),
      (_0x59b099["checkHomeScreenStatus"] = function (_0x464b13) {
        var _0x4df92f = _0x598d27;
        if (!_0x554805(_0x4df92f(0x1e9))) {
          console["error"](_0x4df92f(0x1b4) + _0x5d20ad);
          throw Error("WebAppMethodUnsupported");
        }
        (_0x464b13 && _0x42a802["push"](_0x464b13),
          _0x5ba706[_0x4df92f(0x13d)](_0x4df92f(0x15e)));
      }),
      (_0x59b099["onEvent"] = function (_0x6c3677, _0x2a6bb7) {
        _0xb61ba9(_0x6c3677, _0x2a6bb7);
      }),
      (_0x59b099[_0x598d27(0x1ac)] = function (_0x199d9f, _0x13da81) {
        _0x243e50(_0x199d9f, _0x13da81);
      }),
      (_0x59b099["sendData"] = function (_0x5e47da) {
        var _0x280e0c = _0x598d27;
        if (!_0x5e47da || !_0x5e47da[_0x280e0c(0x2c9)]) {
          console[_0x280e0c(0x11a)](
            "[Telegram.WebApp]\x20Data\x20is\x20required",
            _0x5e47da,
          );
          throw Error(_0x280e0c(0x108));
        }
        if (_0x595478(_0x5e47da) > 0x1000) {
          console[_0x280e0c(0x11a)](_0x280e0c(0x2cf), _0x5e47da);
          throw Error(_0x280e0c(0x108));
        }
        _0x5ba706[_0x280e0c(0x13d)](_0x280e0c(0x13e), ![], { data: _0x5e47da });
      }),
      (_0x59b099[_0x598d27(0xe4)] = function (_0x47d816, _0x509156) {
        var _0x439a63 = _0x598d27;
        if (!_0x554805(_0x439a63(0x195))) {
          console[_0x439a63(0x11a)](_0x439a63(0x1ca) + _0x5d20ad);
          throw Error("WebAppMethodUnsupported");
        }
        if (!_0x5f07bc["tgWebAppBotInline"]) {
          console[_0x439a63(0x11a)](_0x439a63(0x2fb));
          throw Error("WebAppInlineModeDisabled");
        }
        _0x47d816 = _0x47d816 || "";
        if (_0x47d816["length"] > 0x100) {
          console[_0x439a63(0x11a)](_0x439a63(0x1ae), _0x47d816);
          throw Error("WebAppInlineQueryInvalid");
        }
        var _0x4fcf77 = [];
        if (_0x509156) {
          if (!Array[_0x439a63(0x176)](_0x509156)) {
            console[_0x439a63(0x11a)](_0x439a63(0x11f), _0x509156);
            throw Error(_0x439a63(0x1a8));
          }
          var _0x510780 = { users: 0x1, bots: 0x1, groups: 0x1, channels: 0x1 };
          for (
            var _0x47a976 = 0x0;
            _0x47a976 < _0x509156[_0x439a63(0x2c9)];
            _0x47a976++
          ) {
            var _0x403966 = _0x509156[_0x47a976];
            if (!_0x510780[_0x403966]) {
              console[_0x439a63(0x11a)](_0x439a63(0x2fc), _0x403966);
              throw Error(_0x439a63(0x15d));
            }
            _0x510780[_0x403966] != 0x2 &&
              ((_0x510780[_0x403966] = 0x2),
              _0x4fcf77[_0x439a63(0x295)](_0x403966));
          }
        }
        _0x5ba706["postEvent"](_0x439a63(0x2e0), ![], {
          query: _0x47d816,
          chat_types: _0x4fcf77,
        });
      }),
      (_0x59b099[_0x598d27(0x2a8)] = function (_0x1462b3, _0x505a1c) {
        var _0x4a372e = _0x598d27,
          _0x1b9ba0 = document[_0x4a372e(0x145)]("A");
        _0x1b9ba0[_0x4a372e(0x1fc)] = _0x1462b3;
        if (
          _0x1b9ba0[_0x4a372e(0x212)] != _0x4a372e(0xd7) &&
          _0x1b9ba0[_0x4a372e(0x212)] != _0x4a372e(0x24e)
        ) {
          console["error"](_0x4a372e(0x139), _0x1462b3);
          throw Error(_0x4a372e(0x330));
        }
        var _0x1462b3 = _0x1b9ba0[_0x4a372e(0x1fc)];
        _0x505a1c = _0x505a1c || {};
        if (_0x554805(_0x4a372e(0x2f2))) {
          var _0x57af79 = { url: _0x1462b3 };
          (_0x554805(_0x4a372e(0x20d)) &&
            _0x505a1c[_0x4a372e(0x2d0)] &&
            (_0x57af79["try_instant_view"] = !![]),
            _0x554805("7.6") &&
              _0x505a1c[_0x4a372e(0x2e4)] &&
              (_0x57af79[_0x4a372e(0x2e4)] = _0x505a1c["try_browser"]),
            _0x5ba706[_0x4a372e(0x13d)](_0x4a372e(0x1f5), ![], _0x57af79));
        } else window[_0x4a372e(0x1c9)](_0x1462b3, _0x4a372e(0x249));
      }),
      (_0x59b099["openTelegramLink"] = function (_0x3d7506, _0x26c872) {
        var _0x30adb9 = _0x598d27,
          _0x52dda5 = document[_0x30adb9(0x145)]("A");
        _0x52dda5[_0x30adb9(0x1fc)] = _0x3d7506;
        if (
          _0x52dda5[_0x30adb9(0x212)] != _0x30adb9(0xd7) &&
          _0x52dda5[_0x30adb9(0x212)] != _0x30adb9(0x24e)
        ) {
          console[_0x30adb9(0x11a)](
            "[Telegram.WebApp]\x20Url\x20protocol\x20is\x20not\x20supported",
            _0x3d7506,
          );
          throw Error(_0x30adb9(0x330));
        }
        if (!_0xcff5c0(_0x52dda5["hostname"])) {
          console[_0x30adb9(0x11a)](_0x30adb9(0x1b1), _0x3d7506);
          throw Error(_0x30adb9(0x330));
        }
        var _0x4b2dba =
          _0x52dda5[_0x30adb9(0x21f)] + _0x52dda5[_0x30adb9(0x250)];
        _0x26c872 = _0x26c872 || {};
        if (_0x2a11d8 || _0x554805(_0x30adb9(0x2f2))) {
          var _0x34644d = { path_full: _0x4b2dba };
          (_0x26c872[_0x30adb9(0x1a0)] && (_0x34644d[_0x30adb9(0x1a0)] = !![]),
            _0x5ba706[_0x30adb9(0x13d)](_0x30adb9(0xdc), ![], _0x34644d));
        } else location[_0x30adb9(0x1fc)] = _0x30adb9(0x2d5) + _0x4b2dba;
      }),
      (_0x59b099[_0x598d27(0x1cb)] = function (_0x6724ac, _0x33b66a) {
        var _0x5d861a = _0x598d27,
          _0x23b0ba = document[_0x5d861a(0x145)]("A"),
          _0xc40fd8,
          _0x308a22;
        _0x23b0ba[_0x5d861a(0x1fc)] = _0x6724ac;
        if (
          (_0x23b0ba[_0x5d861a(0x212)] != _0x5d861a(0xd7) &&
            _0x23b0ba[_0x5d861a(0x212)] != _0x5d861a(0x24e)) ||
          !_0xcff5c0(_0x23b0ba[_0x5d861a(0x18f)]) ||
          !(_0xc40fd8 = _0x23b0ba[_0x5d861a(0x21f)][_0x5d861a(0x340)](
            /^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/,
          )) ||
          !(_0x308a22 = _0xc40fd8[0x2])
        ) {
          console[_0x5d861a(0x11a)](_0x5d861a(0x123), _0x6724ac);
          throw Error(_0x5d861a(0x257));
        }
        if (!_0x554805(_0x5d861a(0x2f2))) {
          console[_0x5d861a(0x11a)](_0x5d861a(0xeb) + _0x5d20ad);
          throw Error("WebAppMethodUnsupported");
        }
        if (_0x2a307a[_0x308a22]) {
          console[_0x5d861a(0x11a)](_0x5d861a(0x298));
          throw Error(_0x5d861a(0x286));
        }
        ((_0x2a307a[_0x308a22] = { url: _0x6724ac, callback: _0x33b66a }),
          _0x5ba706["postEvent"](_0x5d861a(0x2ff), ![], { slug: _0x308a22 }));
      }),
      (_0x59b099[_0x598d27(0x29d)] = function (_0x3b9553, _0x3a8c03) {
        var _0x4fad15 = _0x598d27;
        if (!_0x554805(_0x4fad15(0x317))) {
          console["error"](_0x4fad15(0x2cb) + _0x5d20ad);
          throw Error(_0x4fad15(0x229));
        }
        if (_0x28fded) {
          console[_0x4fad15(0x11a)](_0x4fad15(0x1e1));
          throw Error(_0x4fad15(0x27a));
        }
        var _0x353f2c = "",
          _0x31d1dd = "",
          _0x288c7d = [],
          _0x5ea5bc = {},
          _0x40f3fe = {};
        if (typeof _0x3b9553[_0x4fad15(0xf4)] !== _0x4fad15(0x2c7)) {
          _0x353f2c = _0x3bb4b8(_0x3b9553[_0x4fad15(0xf4)]);
          if (_0x353f2c[_0x4fad15(0x2c9)] > 0x40) {
            console["error"](_0x4fad15(0x1df), _0x353f2c);
            throw Error(_0x4fad15(0x29e));
          }
          _0x353f2c["length"] > 0x0 && (_0x40f3fe["title"] = _0x353f2c);
        }
        typeof _0x3b9553[_0x4fad15(0x32b)] !== _0x4fad15(0x2c7) &&
          (_0x31d1dd = _0x3bb4b8(_0x3b9553["message"]));
        if (!_0x31d1dd[_0x4fad15(0x2c9)]) {
          console[_0x4fad15(0x11a)](
            _0x4fad15(0xf1),
            _0x3b9553[_0x4fad15(0x32b)],
          );
          throw Error(_0x4fad15(0x29e));
        }
        if (_0x31d1dd[_0x4fad15(0x2c9)] > 0x100) {
          console[_0x4fad15(0x11a)](
            "[Telegram.WebApp]\x20Popup\x20message\x20is\x20too\x20long",
            _0x31d1dd,
          );
          throw Error(_0x4fad15(0x29e));
        }
        _0x40f3fe["message"] = _0x31d1dd;
        if (typeof _0x3b9553[_0x4fad15(0x110)] !== _0x4fad15(0x2c7)) {
          if (!Array[_0x4fad15(0x176)](_0x3b9553[_0x4fad15(0x110)])) {
            console[_0x4fad15(0x11a)](
              "[Telegram.WebApp]\x20Popup\x20buttons\x20should\x20be\x20an\x20array",
              _0x3b9553[_0x4fad15(0x110)],
            );
            throw Error(_0x4fad15(0x29e));
          }
          for (
            var _0x5da117 = 0x0;
            _0x5da117 < _0x3b9553[_0x4fad15(0x110)][_0x4fad15(0x2c9)];
            _0x5da117++
          ) {
            var _0x2bf97c = _0x3b9553["buttons"][_0x5da117],
              _0x462dae = {},
              _0x401cc6 = "";
            if (typeof _0x2bf97c["id"] !== "undefined") {
              _0x401cc6 = _0x2bf97c["id"][_0x4fad15(0x280)]();
              if (_0x401cc6["length"] > 0x40) {
                console[_0x4fad15(0x11a)](_0x4fad15(0x33b), _0x401cc6);
                throw Error("WebAppPopupParamInvalid");
              }
            }
            _0x462dae["id"] = _0x401cc6;
            var _0x4e5081 = _0x2bf97c[_0x4fad15(0x152)];
            typeof _0x4e5081 === "undefined" && (_0x4e5081 = _0x4fad15(0x16c));
            _0x462dae[_0x4fad15(0x152)] = _0x4e5081;
            if (
              _0x4e5081 == "ok" ||
              _0x4e5081 == _0x4fad15(0xec) ||
              _0x4e5081 == "cancel"
            ) {
            } else {
              if (_0x4e5081 == "default" || _0x4e5081 == _0x4fad15(0xcc)) {
                var _0x2ad5c7 = "";
                typeof _0x2bf97c["text"] !== _0x4fad15(0x2c7) &&
                  (_0x2ad5c7 = _0x3bb4b8(_0x2bf97c[_0x4fad15(0x2be)]));
                if (!_0x2ad5c7["length"]) {
                  console[_0x4fad15(0x11a)](
                    _0x4fad15(0x344) + _0x4e5081,
                    _0x2bf97c[_0x4fad15(0x2be)],
                  );
                  throw Error(_0x4fad15(0x29e));
                }
                if (_0x2ad5c7[_0x4fad15(0x2c9)] > 0x40) {
                  console[_0x4fad15(0x11a)](
                    "[Telegram.WebApp]\x20Popup\x20button\x20text\x20is\x20too\x20long",
                    _0x2ad5c7,
                  );
                  throw Error(_0x4fad15(0x29e));
                }
                _0x462dae[_0x4fad15(0x2be)] = _0x2ad5c7;
              } else {
                console["error"](_0x4fad15(0xd0), _0x4e5081);
                throw Error(_0x4fad15(0x29e));
              }
            }
            _0x288c7d["push"](_0x462dae);
          }
        } else _0x288c7d[_0x4fad15(0x295)]({ id: "", type: _0x4fad15(0xec) });
        if (_0x288c7d[_0x4fad15(0x2c9)] < 0x1) {
          console[_0x4fad15(0x11a)](_0x4fad15(0x336));
          throw Error(_0x4fad15(0x29e));
        }
        if (_0x288c7d[_0x4fad15(0x2c9)] > 0x3) {
          console[_0x4fad15(0x11a)](
            "[Telegram.WebApp]\x20Popup\x20should\x20not\x20have\x20more\x20than\x203\x20buttons",
          );
          throw Error(_0x4fad15(0x29e));
        }
        ((_0x40f3fe[_0x4fad15(0x110)] = _0x288c7d),
          (_0x28fded = { callback: _0x3a8c03 }),
          _0x5ba706[_0x4fad15(0x13d)](_0x4fad15(0x320), ![], _0x40f3fe));
      }),
      (_0x59b099[_0x598d27(0x1e4)] = function (_0x19d1ec, _0x1bf4f6) {
        var _0x12716c = _0x598d27;
        _0x59b099[_0x12716c(0x29d)](
          { message: _0x19d1ec },
          _0x1bf4f6
            ? function () {
                _0x1bf4f6();
              }
            : null,
        );
      }),
      (_0x59b099[_0x598d27(0x303)] = function (_0x13b2a0, _0x4253fd) {
        var _0x1b3286 = _0x598d27;
        _0x59b099[_0x1b3286(0x29d)](
          {
            message: _0x13b2a0,
            buttons: [{ type: "ok", id: "ok" }, { type: _0x1b3286(0x2c0) }],
          },
          _0x4253fd
            ? function (_0x4a97d2) {
                _0x4253fd(_0x4a97d2 == "ok");
              }
            : null,
        );
      }),
      (_0x59b099[_0x598d27(0x1c4)] = function (_0x23f6a9, _0x41193e) {
        var _0x51c437 = _0x598d27;
        if (!_0x554805(_0x51c437(0x20d))) {
          console[_0x51c437(0x11a)](_0x51c437(0x291) + _0x5d20ad);
          throw Error(_0x51c437(0x229));
        }
        if (_0x22a1b1) {
          console[_0x51c437(0x11a)](_0x51c437(0x1e1));
          throw Error(_0x51c437(0x12f));
        }
        var _0xed6e72 = "",
          _0x5c4b09 = {};
        if (typeof _0x23f6a9[_0x51c437(0x2be)] !== _0x51c437(0x2c7)) {
          _0xed6e72 = _0x3bb4b8(_0x23f6a9[_0x51c437(0x2be)]);
          if (_0xed6e72[_0x51c437(0x2c9)] > 0x40) {
            console["error"](_0x51c437(0x197), _0xed6e72);
            throw Error(_0x51c437(0x224));
          }
          _0xed6e72[_0x51c437(0x2c9)] > 0x0 && (_0x5c4b09["text"] = _0xed6e72);
        }
        ((_0x22a1b1 = { callback: _0x41193e }),
          _0x5ba706[_0x51c437(0x13d)](_0x51c437(0x2e2), ![], _0x5c4b09));
      }),
      (_0x59b099["closeScanQrPopup"] = function () {
        var _0x18bdf1 = _0x598d27;
        if (!_0x554805(_0x18bdf1(0x20d))) {
          console[_0x18bdf1(0x11a)](_0x18bdf1(0x296) + _0x5d20ad);
          throw Error(_0x18bdf1(0x229));
        }
        ((_0x22a1b1 = ![]), _0x5ba706[_0x18bdf1(0x13d)](_0x18bdf1(0x1db), ![]));
      }),
      (_0x59b099[_0x598d27(0x159)] = function (_0x575e0a) {
        var _0x50813f = _0x598d27;
        if (!_0x554805(_0x50813f(0x20d))) {
          console[_0x50813f(0x11a)](_0x50813f(0x21a) + _0x5d20ad);
          throw Error(_0x50813f(0x229));
        }
        var _0x3267d7 = _0x9c2b83(0x10),
          _0x41768e = { req_id: _0x3267d7 };
        ((_0x411cba[_0x3267d7] = { callback: _0x575e0a }),
          _0x5ba706["postEvent"](
            "web_app_read_text_from_clipboard",
            ![],
            _0x41768e,
          ));
      }),
      (_0x59b099[_0x598d27(0x10f)] = function (_0x4019a9) {
        var _0x5e55ed = _0x598d27;
        if (!_0x554805(_0x5e55ed(0x12b))) {
          console[_0x5e55ed(0x11a)](
            "[Telegram.WebApp]\x20Method\x20requestWriteAccess\x20is\x20not\x20supported\x20in\x20version\x20" +
              _0x5d20ad,
          );
          throw Error(_0x5e55ed(0x229));
        }
        if (_0x3d9595) {
          console["error"](_0x5e55ed(0x116));
          throw Error(_0x5e55ed(0x1c2));
        }
        ((_0x3d9595 = { callback: _0x4019a9 }),
          _0x5ba706["postEvent"](_0x5e55ed(0x263)));
      }),
      (_0x59b099[_0x598d27(0x221)] = function (_0x4e9068) {
        var _0x5bea0d = _0x598d27;
        if (!_0x554805(_0x5bea0d(0x12b))) {
          console["error"](_0x5bea0d(0x11e) + _0x5d20ad);
          throw Error(_0x5bea0d(0x229));
        }
        if (_0x19ff4f) {
          console[_0x5bea0d(0x11a)](
            "[Telegram.WebApp]\x20Contact\x20is\x20already\x20requested",
          );
          throw Error("WebAppContactRequested");
        }
        ((_0x19ff4f = { callback: _0x4e9068 }),
          _0x5ba706["postEvent"]("web_app_request_phone"));
      }),
      (_0x59b099["downloadFile"] = function (_0x32e146, _0x1debbe) {
        var _0x2401fe = _0x598d27;
        if (!_0x554805(_0x2401fe(0x1e9))) {
          console[_0x2401fe(0x11a)](_0x2401fe(0x1d0) + _0x5d20ad);
          throw Error(_0x2401fe(0x229));
        }
        if (_0x3fcd90) {
          console["error"](
            "[Telegram.WebApp]\x20Popup\x20is\x20already\x20opened",
          );
          throw Error(_0x2401fe(0x2b7));
        }
        var _0xf6f0ca = document["createElement"]("A"),
          _0x263465 = {};
        if (
          !_0x32e146 ||
          !_0x32e146["url"] ||
          !_0x32e146["url"][_0x2401fe(0x2c9)]
        ) {
          console["error"](_0x2401fe(0x233));
          throw Error(_0x2401fe(0x13a));
        }
        _0xf6f0ca[_0x2401fe(0x1fc)] = _0x32e146[_0x2401fe(0xea)];
        if (_0xf6f0ca[_0x2401fe(0x212)] != "https:") {
          console["error"](_0x2401fe(0x139), url);
          throw Error(_0x2401fe(0x13a));
        }
        _0x263465["url"] = _0xf6f0ca["href"];
        if (
          !_0x32e146 ||
          !_0x32e146["file_name"] ||
          !_0x32e146["file_name"]["length"]
        ) {
          console["error"](_0x2401fe(0x198));
          throw Error(_0x2401fe(0x13a));
        }
        ((_0x263465["file_name"] = _0x32e146[_0x2401fe(0x14d)]),
          (_0x3fcd90 = { callback: _0x1debbe }),
          _0x5ba706["postEvent"](_0x2401fe(0x29f), ![], _0x263465));
      }),
      (_0x59b099[_0x598d27(0x101)] = function (_0x1bd4f5, _0x14d829) {
        var _0x5494cf = _0x598d27;
        _0x14d829 = _0x14d829 || {};
        if (!_0x554805("7.8")) {
          console[_0x5494cf(0x11a)](_0x5494cf(0x28a) + _0x5d20ad);
          throw Error(_0x5494cf(0x229));
        }
        var _0x3038b7 = document[_0x5494cf(0x145)]("A");
        _0x3038b7[_0x5494cf(0x1fc)] = _0x1bd4f5;
        if (
          _0x3038b7[_0x5494cf(0x212)] != _0x5494cf(0xd7) &&
          _0x3038b7[_0x5494cf(0x212)] != _0x5494cf(0x24e)
        ) {
          console[_0x5494cf(0x11a)](_0x5494cf(0x19d), url);
          throw Error("WebAppMediaUrlInvalid");
        }
        var _0x488a37 = {};
        _0x488a37[_0x5494cf(0x1da)] = _0x3038b7["href"];
        if (typeof _0x14d829[_0x5494cf(0x2be)] !== "undefined") {
          var _0x4d3135 = _0x3bb4b8(_0x14d829["text"]);
          if (_0x4d3135[_0x5494cf(0x2c9)] > 0x800) {
            console[_0x5494cf(0x11a)](
              "[Telegram.WebApp]\x20Text\x20is\x20too\x20long",
              _0x4d3135,
            );
            throw Error(_0x5494cf(0x2ee));
          }
          _0x4d3135["length"] > 0x0 &&
            (_0x488a37[_0x5494cf(0x2be)] = _0x4d3135);
        }
        if (typeof _0x14d829[_0x5494cf(0x28f)] !== _0x5494cf(0x2c7)) {
          ((_0x14d829[_0x5494cf(0x28f)] = _0x14d829[_0x5494cf(0x28f)] || {}),
            (_0x3038b7["href"] = _0x14d829["widget_link"][_0x5494cf(0xea)]));
          if (
            _0x3038b7[_0x5494cf(0x212)] != _0x5494cf(0xd7) &&
            _0x3038b7[_0x5494cf(0x212)] != _0x5494cf(0x24e)
          ) {
            console[_0x5494cf(0x11a)](_0x5494cf(0x24a), url);
            throw Error(_0x5494cf(0x2ee));
          }
          var _0x1c4a7e = { url: _0x3038b7[_0x5494cf(0x1fc)] };
          if (typeof _0x14d829[_0x5494cf(0x28f)]["name"] !== _0x5494cf(0x2c7)) {
            var _0x420010 = _0x3bb4b8(
              _0x14d829[_0x5494cf(0x28f)][_0x5494cf(0x21c)],
            );
            if (_0x420010[_0x5494cf(0x2c9)] > 0x30) {
              console[_0x5494cf(0x11a)](
                "[Telegram.WebApp]\x20Link\x20name\x20is\x20too\x20long",
                _0x420010,
              );
              throw Error("WebAppShareToStoryParamInvalid");
            }
            _0x420010[_0x5494cf(0x2c9)] > 0x0 &&
              (_0x1c4a7e[_0x5494cf(0x21c)] = _0x420010);
          }
          _0x488a37[_0x5494cf(0x28f)] = _0x1c4a7e;
        }
        _0x5ba706[_0x5494cf(0x13d)](_0x5494cf(0x14a), ![], _0x488a37);
      }),
      (_0x59b099[_0x598d27(0x32a)] = function (_0x1bd12b, _0x19378e) {
        var _0x468e7a = _0x598d27;
        if (!_0x554805(_0x468e7a(0x1e9))) {
          console[_0x468e7a(0x11a)](_0x468e7a(0x1b8) + _0x5d20ad);
          throw Error(_0x468e7a(0x229));
        }
        if (_0x105539) {
          console[_0x468e7a(0x11a)](_0x468e7a(0x211));
          throw Error(_0x468e7a(0x117));
        }
        ((_0x105539 = { callback: _0x19378e }),
          _0x5ba706[_0x468e7a(0x13d)](_0x468e7a(0x1d7), ![], {
            id: _0x1bd12b,
          }));
      }),
      (_0x59b099[_0x598d27(0x339)] = function (_0x5ea9f6, _0x15192e) {
        var _0x4a753f = _0x598d27;
        if (!_0x554805("9.6")) {
          console[_0x4a753f(0x11a)](_0x4a753f(0x14f) + _0x5d20ad);
          throw Error("WebAppMethodUnsupported");
        }
        if (_0x125df3) {
          console[_0x4a753f(0x11a)](_0x4a753f(0x32c));
          throw Error(_0x4a753f(0x1e0));
        }
        ((_0x125df3 = { callback: _0x15192e }),
          _0x5ba706[_0x4a753f(0x13d)]("web_app_request_chat", ![], {
            req_id: _0x5ea9f6,
          }));
      }),
      (_0x59b099[_0x598d27(0x1e7)] = function (
        _0x3064bf,
        _0x3181b1,
        _0x293df8,
      ) {
        var _0x26089b = _0x598d27;
        _0x3181b1 = _0x3181b1 || {};
        if (!_0x554805("8.0")) {
          console[_0x26089b(0x11a)](_0x26089b(0x323) + _0x5d20ad);
          throw Error(_0x26089b(0x229));
        }
        var _0x4a717a = {};
        _0x4a717a[_0x26089b(0x27e)] = _0x3064bf;
        typeof _0x3181b1[_0x26089b(0xe1)] !== _0x26089b(0x2c7) &&
          (_0x4a717a[_0x26089b(0xe1)] = _0x3181b1[_0x26089b(0xe1)]);
        if (_0x3ebecb) {
          console[_0x26089b(0x11a)](_0x26089b(0x1d1));
          throw Error("WebAppEmojiStatusRequested");
        }
        ((_0x3ebecb = { callback: _0x293df8 }),
          _0x5ba706["postEvent"](_0x26089b(0x23e), ![], _0x4a717a));
      }),
      (_0x59b099[_0x598d27(0x2ae)] = function (_0x32d4c5) {
        var _0x3fda62 = _0x598d27;
        if (!_0x554805("8.0")) {
          console[_0x3fda62(0x11a)](
            "[Telegram.WebApp]\x20Method\x20requestEmojiStatusAccess\x20is\x20not\x20supported\x20in\x20version\x20" +
              _0x5d20ad,
          );
          throw Error(_0x3fda62(0x229));
        }
        if (_0x43dc53) {
          console["error"](_0x3fda62(0x1b7));
          throw Error("WebAppEmojiStatusAccessRequested");
        }
        ((_0x43dc53 = { callback: _0x32d4c5 }),
          _0x5ba706[_0x3fda62(0x13d)](_0x3fda62(0x1ce)));
      }),
      (_0x59b099["invokeCustomMethod"] = function (
        _0x49c2f2,
        _0x29e807,
        _0x56f1a0,
      ) {
        _0x242d83(_0x49c2f2, _0x29e807, _0x56f1a0);
      }),
      (_0x59b099["hideKeyboard"] = function () {
        var _0x4c6fdd = _0x598d27;
        _0x5ba706[_0x4c6fdd(0x13d)]("web_app_hide_keyboard");
      }),
      (_0x59b099["ready"] = function () {
        var _0x5ef749 = _0x598d27;
        _0x5ba706[_0x5ef749(0x13d)](_0x5ef749(0x22a));
      }),
      (_0x59b099[_0x598d27(0x1f3)] = function () {
        var _0x1cc2a4 = _0x598d27;
        _0x5ba706["postEvent"](_0x1cc2a4(0x25f));
      }),
      (_0x59b099["close"] = function (_0x3efb05) {
        var _0x1c3afd = _0x598d27;
        _0x3efb05 = _0x3efb05 || {};
        var _0x54ba53 = {};
        (_0x554805("7.6") &&
          _0x3efb05[_0x1c3afd(0x31b)] &&
          (_0x54ba53[_0x1c3afd(0x31b)] = !![]),
          _0x5ba706[_0x1c3afd(0x13d)](_0x1c3afd(0x24f), ![], _0x54ba53));
      }),
      (window[_0x598d27(0x1cd)]["WebApp"] = _0x59b099),
      _0x1eeeaa(),
      _0x50b4df(),
      _0xe8c65a(),
      _0x5769a6(),
      _0x5f07bc[_0x598d27(0x1be)] && _0x5d84d4["show"](),
      window[_0x598d27(0x142)](_0x598d27(0x219), _0x39573b),
      _0x2a11d8 && document[_0x598d27(0x142)]("click", _0x18f850),
      _0x5ba706[_0x598d27(0x1b2)](_0x598d27(0x255), _0x320ad7),
      _0x5ba706[_0x598d27(0x1b2)](_0x598d27(0x1c8), _0x1d9205),
      _0x5ba706[_0x598d27(0x1b2)](_0x598d27(0x1f7), _0x2e3960),
      _0x5ba706[_0x598d27(0x1b2)]("content_safe_area_changed", _0x202b6f),
      _0x5ba706["onEvent"](_0x598d27(0x2d7), _0x1749e8),
      _0x5ba706[_0x598d27(0x1b2)](_0x598d27(0x185), _0x27b0c6),
      _0x5ba706[_0x598d27(0x1b2)](_0x598d27(0x216), _0x23e28c),
      _0x5ba706["onEvent"](_0x598d27(0x203), _0x457566),
      _0x5ba706["onEvent"](_0x598d27(0x262), _0x560854),
      _0x5ba706[_0x598d27(0x1b2)](_0x598d27(0x273), _0x1e8872),
      _0x5ba706[_0x598d27(0x1b2)](_0x598d27(0xcd), _0xc4645a),
      _0x5ba706[_0x598d27(0x1b2)]("phone_requested", _0x5629f5),
      _0x5ba706[_0x598d27(0x1b2)](_0x598d27(0x341), _0x17235c),
      _0x5ba706[_0x598d27(0x1b2)](_0x598d27(0x2e6), _0xfd247f),
      _0x5ba706[_0x598d27(0x1b2)](_0x598d27(0x1ff), _0x1d781b),
      _0x5ba706["onEvent"](_0x598d27(0x22d), _0x3b518a),
      _0x5ba706[_0x598d27(0x1b2)]("home_screen_added", _0x508c88),
      _0x5ba706[_0x598d27(0x1b2)](_0x598d27(0x314), _0x35570e),
      _0x5ba706[_0x598d27(0x1b2)](_0x598d27(0x2af), _0x5a0ceb),
      _0x5ba706[_0x598d27(0x1b2)](_0x598d27(0x285), _0x2041d4),
      _0x5ba706["onEvent"](_0x598d27(0x309), _0x5312ec),
      _0x5ba706[_0x598d27(0x1b2)](_0x598d27(0x228), _0x32d03e),
      _0x5ba706[_0x598d27(0x1b2)]("emoji_status_set", _0x435a92),
      _0x5ba706["onEvent"](_0x598d27(0x17d), _0x1eb877),
      _0x5ba706["onEvent"](_0x598d27(0x259), _0x390cc4),
      _0x5ba706[_0x598d27(0x13d)](_0x598d27(0xdf)),
      _0x5ba706["postEvent"](_0x598d27(0x111)),
      _0x5ba706[_0x598d27(0x13d)](_0x598d27(0x25c)),
      _0x5ba706[_0x598d27(0x13d)](_0x598d27(0x1c0)));
  })());
function _0x4c1f(_0x562005, _0x396030) {
  _0x562005 = _0x562005 - 0xcb;
  var _0x45afd4 = _0x45af();
  var _0x4c1f9a = _0x45afd4[_0x562005];
  if (_0x4c1f["mHYKmh"] === undefined) {
    var _0x2af727 = function (_0x55208f) {
      var _0x444391 =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      var _0x3da0e8 = "",
        _0x9d66d3 = "";
      for (
        var _0x57211e = 0x0, _0x1d02d5, _0x3d7de3, _0x52d9c2 = 0x0;
        (_0x3d7de3 = _0x55208f["charAt"](_0x52d9c2++));
        ~_0x3d7de3 &&
        ((_0x1d02d5 =
          _0x57211e % 0x4 ? _0x1d02d5 * 0x40 + _0x3d7de3 : _0x3d7de3),
        _0x57211e++ % 0x4)
          ? (_0x3da0e8 += String["fromCharCode"](
              0xff & (_0x1d02d5 >> ((-0x2 * _0x57211e) & 0x6)),
            ))
          : 0x0
      ) {
        _0x3d7de3 = _0x444391["indexOf"](_0x3d7de3);
      }
      for (
        var _0x1502be = 0x0, _0x5d9209 = _0x3da0e8["length"];
        _0x1502be < _0x5d9209;
        _0x1502be++
      ) {
        _0x9d66d3 +=
          "%" +
          ("00" + _0x3da0e8["charCodeAt"](_0x1502be)["toString"](0x10))[
            "slice"
          ](-0x2);
      }
      return decodeURIComponent(_0x9d66d3);
    };
    ((_0x4c1f["vubEEE"] = _0x2af727),
      (_0x4c1f["Yrnegc"] = {}),
      (_0x4c1f["mHYKmh"] = !![]));
  }
  var _0x1e10cc = _0x45afd4[0x0],
    _0x19e8fc = _0x562005 + _0x1e10cc,
    _0x131396 = _0x4c1f["Yrnegc"][_0x19e8fc];
  return (
    !_0x131396
      ? ((_0x4c1f9a = _0x4c1f["vubEEE"](_0x4c1f9a)),
        (_0x4c1f["Yrnegc"][_0x19e8fc] = _0x4c1f9a))
      : (_0x4c1f9a = _0x131396),
    _0x4c1f9a
  );
}
function _0x45af() {
  var _0x6ca763 = [
    "v2vIqxbWsw5SAw5Lq2HVB3nLq2HHDfr5CgvZsw52ywXPza",
    "y2HHCKnVzgvbDa",
    "u2vJB25Kyxj5qNv0Dg9U",
    "yMLVBwv0CNLFAw5MB19YzwnLAxzLza",
    "B2zMrxzLBNq",
    "v2vIqxbWu2vYDMvYBgvZC0zLDgnOvw5ZDxbWB3j0zwq",
    "w1rLBgvNCMfTlLDLyKfWCf0Gsw5SAw5Lihf1zxj5igLZihrVBYbSB25N",
    "z2v0tg9JyxrPB24",
    "AxndBg9ZAw5Nq29UzMLYBwf0Aw9Urw5HyMXLza",
    "w1rLBgvNCMfTlLDLyKfWCf0GvxjSigHVC3qGAxmGBM90ihn1ChbVCNrLza",
    "B25fDMvUDa",
    "DxjSugfYC2vrDwvYEvn0CMLUzW",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtwv0Ag9KignOzwnRsg9TzvnJCMvLBLn0yxr1CYbPCYbUB3qGC3vWCg9YDgvKigLUihzLCNnPB24G",
    "nY4Y",
    "w1rLBgvNCMfTlLDLyKfWCf0GqwnJzxnZigLZigfSCMvHzhKGCMvXDwvZDgvK",
    "w1rLBgvNCMfTlLDLyKfWCf0Grw1VAMKGC3rHDhvZihbLCM1PC3nPB24GAxmGywXYzwfKEsbYzxf1zxn0zwq",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtwv0Ag9KihnOyxjLtwvZC2fNzsbPCYbUB3qGC3vWCg9YDgvKigLUihzLCNnPB24G",
    "CgXHDgzVCM0",
    "Dg9Rzw5FC2f2zwq",
    "i2zMzMzMzG",
    "DMLLD3bVCNrdAgfUz2vK",
    "Aw5PDfbHCMfTCW",
    "DgDxzwjbChbtAg93u2v0DgLUz3m",
    "CgfYzw50tM9Kzq",
    "D2vIx2fWCf9Yzxf1zxn0x2nVBNrLBNrFC2fMzv9HCMvH",
    "DMvYDgLJywXFywnJDxjHy3K",
    "v2vIqxbWv3jPDgvby2nLC3nszxf1zxn0zwq",
    "C3jJ",
    "C2HVD1nJyw5rCLbVChvW",
    "AM9PBG",
    "AxnFDMLZAwjSzq",
    "w1rLBgvNCMfTlLDLyKfWCf0GqM90Dg9Tigj1DhrVBIbWB3nPAxrPB24GAxmGAw52ywXPza",
    "DMLLD3bVCNrFy2HHBMDLza",
    "B3bLBG",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtwv0Ag9Kihn3AxrJAeLUBgLUzvf1zxj5igLZig5VDcbZDxbWB3j0zwqGAw4GDMvYC2LVBIa",
    "B3bLBKLUDM9Py2u",
    "CMfUzg9T",
    "vgvSzwDYyw0",
    "D2vIx2fWCf9Yzxf1zxn0x2vTB2PPx3n0yxr1C19Hy2nLC3m",
    "yNrVyq",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtwv0Ag9KigrVD25SB2fKrMLSzsbPCYbUB3qGC3vWCg9YDgvKigLUihzLCNnPB24G",
    "w1rLBgvNCMfTlLDLyKfWCf0Grw1VAMKGC3rHDhvZigLZigfSCMvHzhKGCMvXDwvZDgvK",
    "CMLNAhq",
    "CgfYzw50",
    "DMvYC2LVBG",
    "AwnVBL9JDxn0B21Fzw1VAMLFAwq",
    "CMvTB3zLsxrLBq",
    "D2vIx2fWCf9Zzw5Kx3bYzxbHCMvKx21LC3nHz2u",
    "Aw5KzxHpzG",
    "nNHmDwPMzG",
    "BwvKAwfFDxjS",
    "D2vIx2fWCf9JBg9Zzv9Zy2fUx3fYx3bVChvW",
    "DgvZDa",
    "yMX1CG",
    "BgLNAhq",
    "w1rLBgvNCMfTlLDLyKfWCf0Gug9WDxaGDgL0BguGAxmGDg9VigXVBMC",
    "v2vIqxbWuMvXDwvZDenOyxrpCgvUzwq",
    "w1rLBgvNCMfTlLDLyKfWCf0Gug9WDxaGAxmGywXYzwfKEsbVCgvUzwq",
    "BM90AwzPy2f0Aw9Ut2nJDxjYzwq",
    "zw5HyMXLq2XVC2LUz0nVBMzPCM1HDgLVBG",
    "C2HVD0fSzxj0",
    "CM93",
    "C2HVD1bYB2DYzxnZ",
    "C2v0rw1VAMLtDgf0Dxm",
    "v2vIqxbWtg9JyxrPB25nyw5Hz2vYtg9JyxrPB25oB3rbDMfPBgfIBgu",
    "oc4W",
    "D2vIx2fWCf9ZzxrFyMfJA2DYB3vUzf9JB2XVCG",
    "w1rLBgvNCMfTlLDLyKfWCf0Gq2XVC2LUzYbJB25MAxjTyxrPB24GAxmGBM90ihn1ChbVCNrLzcbPBIb2zxjZAw9Uia",
    "D2vIx2fWCf9KzxzPy2vFC3rVCMfNzv9JBgvHCG",
    "zxjYB3jFDhLWzq",
    "mtaWmda",
    "CMvTB3zLsxrLBxm",
    "zNvUy3rPB24",
    "yMfJA0j1DhrVBKnSAwnRzwq",
    "ywnJzwXLCM9TzxrLCL9MywLSzwq",
    "zxHWyw5K",
    "D2vIDMLLDZO",
    "D2vIx2fWCf9VCgvUx2XPBMS",
    "C2v0qM90Dg9TqMfYq29SB3i",
    "C2fMzv9HCMvHx2nOyw5Nzwq",
    "C2fMzs1HCMvHlwLUC2v0lwjVDhrVBq",
    "DxnLCKfNzw50",
    "zMXVB3i",
    "y2fUx3jLC3rVCMu",
    "AhjLzG",
    "zxHLyW",
    "mtG5EKXoB2DX",
    "zNvSBhnJCMvLBL9JAgfUz2vK",
    "C3fYDa",
    "zgv2AwnLx3n0B3jHz2vFy2XLyxjLza",
    "BwfPBL9IDxr0B25FChjLC3nLza",
    "CxjFDgv4Df9YzwnLAxzLza",
    "EwvZ",
    "z2v0u3rVCMfNzvzHBhvLCW",
    "qwnJzwXLCM9TzxrLCG",
    "y291CNnLx2fJy3vYywn5",
    "CMvTB3zLrxzLBNrmAxn0zw5LCG",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtg9JyxrPB25nyw5Hz2vYigLZig5VDcbZDxbWB3j0zwqGAw4GDMvYC2LVBIa",
    "v2vIqxbW",
    "zgLZywjSzvzLCNrPy2fSu3DPCgvZ",
    "zgvSzxrLu3rVCMfNzvzHBhvLCW",
    "nI40",
    "DMLLD3bVCNqTC3rHyMXLlwHLAwDODa",
    "w1rLBgvNCMfTlLDLyKfWCf0GsgfWDgLJrMvLzgjHy2SGAxmGBM90ihn1ChbVCNrLzcbPBIb2zxjZAw9Uia",
    "D2vIx2fWCf9PBNzVA2vFy3vZDg9Tx21LDgHVza",
    "w1rLBgvNCMfTlLDLyKfWCf0Gu2HHCMuGBwvZC2fNzsbPCYbHBhjLywr5ig9Wzw5Lza",
    "ChjVDg9JB2W",
    "zgv2AwnLswq",
    "ChjVDg90ExbL",
    "ywnJzxnZx2DYyw50zwq",
    "Cg9WDxbFy2XVC2vK",
    "yMLVBwv0CMLJvhLWzq",
    "CMvZDwX0",
    "CMvZAxPL",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtwv0Ag9KihjLywruzxH0rNjVBunSAxbIB2fYzcbPCYbUB3qGC3vWCg9YDgvKigLUihzLCNnPB24G",
    "C3rYAw5N",
    "BMfTzq",
    "w1rLBgvNCMfTlLDLyKfWCf0Gu2vYDMvYBgvZCYbLBMrWB2LUDcbPBNb1DcbTDxn0igjLigfUig9IAMvJDa",
    "v2vIqxbWqMLVBwv0CMLJtwfUywDLCKf1DgHLBNrPy2f0Aw9UuMvXDwvZDgvK",
    "Cgf0Ag5HBwu",
    "B2zMq2XPy2S",
    "CMvXDwvZDenVBNrHy3q",
    "DgDxzwjbChbezwzHDwX0q29SB3jZ",
    "w1rLBgvNCMfTlLDLyKfWCf0GqMLVBwv0CMLJihjLyxnVBIbPCYb0B28GBg9UzW",
    "v2vIqxbWu2nHBLfYug9WDxbqyxjHBuLUDMfSAwq",
    "yMLVBwv0CMLJtwfUywDLCLvWzgf0zwq",
    "C2vJDxjLx3n0B3jHz2vFzMfPBgvK",
    "w1rLBgvNCMfTlLDLyKfWCf0Gu2vYDMvYBgvZCYbJywXSyMfJAYbTDxn0igjLigeGzNvUy3rPB24",
    "CMvXDwvZDgvKx2nOyxrFzMfPBgvK",
    "v2vIqxbWtwv0Ag9Kvw5ZDxbWB3j0zwq",
    "D2vIx2fWCf9YzwfKEq",
    "AxnFChjVz3jLC3nFDMLZAwjSzq",
    "D2vIx2fWCf9Zzxr1Cf9ZD2LWzv9IzwHHDMLVCG",
    "zNvSBhnJCMvLBL9MywLSzwq",
    "BMvLzf9HyNnVBhv0zq",
    "w1rLBgvNCMfTlLDLyKfWCf0GqMfJA2DYB3vUzcbJB2XVCIbPCYbUB3qGC3vWCg9YDgvKigLUihzLCNnPB24G",
    "C3bSAxq",
    "D2vIx2fWCf9ZDgfYDf9NExjVC2nVCgu",
    "AxnpCMLLBNrHDgLVBKXVy2TLza",
    "w1rLBgvNCMfTlLDLyKfWCf0GvxjSigLZihjLCxvPCMvK",
    "z2v0sxrLBq",
    "zgLZywjSzwq",
    "w1rLBgvNCMfTlLDLyKfWCf0GqMfJA2DYB3vUzcbJB2XVCIbMB3jTyxqGAxmGAw52ywXPza",
    "C3rVCa",
    "C3bLzwq",
    "Aw5PDerHDge",
    "CMvSB2fK",
    "C2vZC2LVBLn0B3jHz2u",
    "nI4W",
    "zw1VAMLtDgf0Dxnby2nLC3nszxf1zxn0zwq",
    "D2vIx2fWCf9ZzxrFzw1VAMLFC3rHDhvZ",
    "yMLVBwv0CNLFyxv0Af9Yzxf1zxn0zwq",
    "zxzLBNreyxrH",
    "B3jPz2LU",
    "C2fMzs1HCMvHlwLUC2v0lxjPz2H0",
    "u2v0DgLUz3ncDxr0B24",
    "ls10zY0",
    "Aw5UzxjuzxH0",
    "C2vJB25Kyxj5x2jNx2nVBg9Y",
    "z3LYB3nJB3bLx2nOyw5Nzwq",
    "D2vIx2fWCf9IAw9TzxrYEv9NzxrFAw5MBW",
    "x2jSyw5R",
    "w1rLBgvNCMfTlLDLyKfWCf0GtgLUAYbWCM90B2nVBcbPCYbUB3qGC3vWCg9YDgvK",
    "D3jPDgvby2nLC3nszxf1zxn0zwq",
    "Cg9ZDe1LC3nHz2u",
    "B25dBgLJAW",
    "Ahr0Chm6",
    "D2vIx2fWCf9JBg9Zzq",
    "C2vHCMnO",
    "vgvSzwDYyw1hyw1LuhjVEhK",
    "C29MDa",
    "re9nq29UDgvUDeXVywrLza",
    "BM90AwzPy2f0Aw9U",
    "DgHLBwvFy2HHBMDLza",
    "z2v0u3rVCMfNzuTLExm",
    "v2vIqxbWsw52B2LJzvvYBeLUDMfSAwq",
    "zgf0yq",
    "zw1VAMLFC3rHDhvZx2fJy2vZC19Yzxf1zxn0zwq",
    "C2v0qMfJA2DYB3vUzenVBg9Y",
    "q2XVDwrtDg9YywDL",
    "D2vIx2fWCf9Yzxf1zxn0x3nHzMvFyxjLyq",
    "w1rLBgvNCMfTlLDLyKfWCf0GqM90Dg9Tigj1DhrVBIbPy29Uign1C3rVBsbLBw9QAsbPCYbPBNzHBgLK",
    "Dgv4Df9JB2XVCG",
    "D2vIx2fWCf9LEhbHBMq",
    "zxjYB3jFy29Kzq",
    "zw5HyMXLvMvYDgLJywXtD2LWzxm",
    "C2nHBL9XCL9WB3b1Cf9JBg9Zzwq",
    "D2vIx2fWCf9Yzxf1zxn0x3DYAxrLx2fJy2vZCW",
    "BM90AwzPy2f0Aw9Ux3r5Cgu",
    "Ahr0Chm6lY93zwiUDgvSzwDYyw0UB3jN",
    "w1rLBgvNCMfTlLDLyKfWCf0GqwnJzwXLCM9TzxrLCIbPCYbUB3qGC3vWCg9YDgvKigLUihzLCNnPB24G",
    "C3r5Bgu",
    "Dgv4DenVBg9Y",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtwv0Ag9KigfKzfrVsg9TzvnJCMvLBIbPCYbUB3qGC3vWCg9YDgvKigLUihzLCNnPB24G",
    "AxnmB2nHDgLVBKf2ywLSywjSzq",
    "AgvHza",
    "y29SB3i",
    "v2vIqxbWqMLVBwv0CMLJtwfUywDLCK5VDeLUAxrLza",
    "C3bSAwnL",
    "zML4zwq",
    "Cg9ZAxrPB24",
    "D2vIx2fWCf9IAw9TzxrYEv9VCgvUx3nLDhrPBMDZ",
    "C2nHBLfYug9WDxbdBg9Zzwq",
    "y2XPCgjVyxjKx3rLEhrFCMvJzwL2zwq",
    "w1rLBgvNCMfTlLDLyKfWCf0Grgv2AwnLt3jPzw50yxrPB24GCMvMCMvZAf9YyxrLigLZigLUDMfSAwq",
    "D2vIx2fWCf9Zzwn1CMvFC3rVCMfNzv9NzxrFA2v5",
    "DxjSkcDKyxrHoMLTywDLl3n2zYT4BwWS",
    "zgvHy3rPDMf0zwq",
    "w1rLBgvNCMfTlLDLyKfWCf0Gt3jPzw50yxrPB24GBg9JA2LUzYbPCYbUB3qGC3vWCg9YDgvKigLUihzLCNnPB24G",
    "w1rLBgvNCMfTlLDLyKfWCf0GsgfWDgLJig5VDgLMAwnHDgLVBIb0ExbLigLZigLUDMfSAwq",
    "v2vIqxbWug9WDxbpCgvUzwq",
    "z3LYB3nJB3bLrMfPBgvK",
    "yxzHAwXHyMXL",
    "v2vIqxbWqMLVBwv0CMLJtwfUywDLCKjPB21LDhjPy3nby2nLC3noB3rszxf1zxn0zwq",
    "y3vZDg9Tx2vTB2PPx2LK",
    "C2v0sxrLBq",
    "Dg9tDhjPBMC",
    "zgv2AwnLx3n0B3jHz2vFA2v5x3nHDMvK",
    "w1rLBgvNCMfTlLDLyKfWCf0GqM90Dg9Tigj1DhrVBIb0zxH0igLZihrVBYbSB25N",
    "CMvHC29U",
    "y29UDgfJDfjLCxvLC3rLza",
    "ChjLCgfYzwrFBwvZC2fNzv9MywLSzwq",
    "v2vIqxbWsw52B2LJzu9Wzw5Lza",
    "AgvHzgvYx2rHCMTFy29SB3i",
    "DgHLBwvFCgfYyw1Z",
    "DgHLBG",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtwv0Ag9KihnOyxjLvg9tDg9YEsbPCYbUB3qGC3vWCg9YDgvKigLUihzLCNnPB24G",
    "zgvMyxvSDenVBg9YCW",
    "DgDxzwjbChbuAgvTzvbHCMfTCW",
    "Ag9YAxPVBNrHBf9Hy2n1CMfJEq",
    "CMvXDwvZDgvKq2HHDfnLBNq",
    "D2LKz2v0x2XPBMS",
    "C3vJy2vZCW",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtwv0Ag9KihnOB3Dty2fUuxjqB3b1CcbPCYbUB3qGC3vWCg9YDgvKigLUihzLCNnPB24G",
    "BM8TCMvWzwf0ihjPz2H0ignLBNrLCG",
    "Dg9Rzw4",
    "AxnjBML0zwq",
    "ChvZAa",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtwv0Ag9KignSB3nLu2nHBLfYug9WDxaGAxmGBM90ihn1ChbVCNrLzcbPBIb2zxjZAw9Uia",
    "w1rLBgvNCMfTlLDLyKfWCf0Grgv2AwnLu3rVCMfNzsbPCYbUB3qGC3vWCg9YDgvKigLUihzLCNnPB24G",
    "w1rLBgvNCMfTlLDLyKfWCf0Gsw52B2LJzsbPCYbHBhjLywr5ig9Wzw5Lza",
    "yMfJA2DYB3vUzenVBg9Y",
    "w1rLBgvNCMfTlLDLyKfWCf0GqMLVBwv0CMLJtwfUywDLCIbZAg91BgqGyMuGAw5PDgvKigjLzM9Yzsb1C2LUzY4",
    "zgv2AwnLx3n0B3jHz2vFzMfPBgvK",
    "Cg9PBNrLCG",
    "C2HVD1bVChvW",
    "v2vIqxbWug9WDxbqyxjHBuLUDMfSAwq",
    "D2vIx2fWCf9Yzxf1zxn0x2zPBgvFzg93BMXVywq",
    "x190zwXLz3jHBv9F",
    "CgfKzgLUz0jVDhrVBq",
    "C3bLzwrFywnJDxjHy3K",
    "ywnJzwXLCM9TzxrLCL9ZDgfYDgvK",
    "AxnFzxHWyw5Kzwq",
    "Dc5Tzq",
    "DxbKyxrLqMLVBwv0CMLJvg9Rzw4",
    "CgfYC2u",
    "B3bLBKXPBMS",
    "ywXWAge",
    "iZi0odfJyW",
    "v2vIqxbWqM90Dg9TqNv0Dg9UugfYyw1jBNzHBgLK",
    "z3LYB3nJB3bLx3n0B3bWzwq",
    "D2vIx2fWCf9ZDgfYDf9KzxzPy2vFB3jPzw50yxrPB24",
    "CMvXDwvZDevTB2PPu3rHDhvZqwnJzxnZ",
    "ChjLCgfYzwrFBwvZC2fNzv9Zzw50",
    "AwzYyw1Lx3jLywr5",
    "vu5ltK9xtL9fuLjpuG",
    "vgvSzwDYyw1hyw1LuhjVEhLFCMvJzwL2zuv2zw50",
    "v2vIqxbWsgvHzgvYq29SB3jjBNzHBgLK",
    "C2fMzs1HCMvHlwLUC2v0lxrVCa",
    "w1rLBgvNCMfTlLDLyKfWCf0Gr3LYB3nJB3bLihjLzNjLC2HFCMf0zsbPCYbPBNzHBgLK",
    "D2vIx2fWCf9LEgL0x2z1BgXZy3jLzw4",
    "v2vIqxbWrg93BMXVywrgAwXLug9WDxbpCgvUzwq",
    "CMvZCg9UC2u",
    "zg9JDw1LBNrfBgvTzw50",
    "vw5LEhbLy3rLzcbYzxnWB25ZzsbMCM9TigvUzhbVAw50ia",
    "zgvMAw5LuhjVCgvYDhK",
    "C2fMzufYzwfjBNnLDa",
    "zNvSBhnJCMvLBKzHAwXLza",
    "Dgv4Da",
    "AgfZAa",
    "y2fUy2vS",
    "yxv0AgvUDgLJyxrL",
    "Axnby2nLC3nhCMfUDgvK",
    "v2vIqxbWqMLVBwv0CMLJtwfUywDLCKfJy2vZC1jLCxvLC3rLza",
    "nZGXmZbkr0jdCgK",
    "B3bLBLnLDhrPBMDZ",
    "D2vIx2fWCf9Zzxr1Cf9JBg9ZAw5Nx2jLAgf2Aw9Y",
    "Dw5KzwzPBMvK",
    "y2fUy2vSBgvK",
    "BgvUz3rO",
    "C2vJB25Kyxj5",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtwv0Ag9KihnOB3DqB3b1CcbPCYbUB3qGC3vWCg9YDgvKigLUihzLCNnPB24G",
    "zgv2AwnLx2LK",
    "ywnJzxnZx3jLCxvLC3rLza",
    "u2vYDMvYBgvZC0vYCM9Y",
    "w1rLBgvNCMfTlLDLyKfWCf0Grgf0ysbPCYb0B28GBg9UzW",
    "Dhj5x2LUC3rHBNrFDMLLDW",
    "nZKWmZu0vwTysxPc",
    "yM9YzgvYlwjVEa",
    "AgvHzgvYq29SB3i",
    "D2vIx2fWCf9ZDg9Wx2rLDMLJzv9VCMLLBNrHDgLVBG",
    "Ahr0Chm6lY90lM1L",
    "v2vIqxbWq2fSBgjHy2TjzeDLBMvYyxrLrMfPBgvK",
    "DMLZAwjPBgL0Ev9JAgfUz2vK",
    "C2v0DgLUz3ncDxr0B25dBgLJA2vK",
    "AxncAw9TzxrYAwnbDMfPBgfIBgu",
    "AgLKzq",
    "vxrPBhm",
    "ywX0Axr1zgu",
    "yMfJA2DYB3vUzeLTywDL",
    "q2fUy2vS",
    "DgDxzwjbChbqBgf0zM9YBq",
    "D2vIx2fWCf9ZD2L0y2HFAw5SAw5Lx3f1zxj5",
    "BwfPBKj1DhrVBKnSAwnRzwq",
    "D2vIx2fWCf9VCgvUx3nJyw5FCxjFCg9WDxa",
    "n3b4",
    "Dhj5x2jYB3DZzxi",
    "yNv0Dg9Ux2LK",
    "y3vZDg9Tx21LDgHVzf9PBNzVA2vK",
    "zgv2AwnLx3n0B3jHz2vFA2v5x3jLy2vPDMvK",
    "yM94u2L6Aw5N",
    "l2fWAs8",
    "Aw1Wywn0x3n0EwXL",
    "Aw1Wywn0",
    "ywnJzwXLCM9TzxrLCLn0B3bWzwq",
    "mtaWjq",
    "v2vIqxbWu2HHCMvuB1n0B3j5ugfYyw1jBNzHBgLK",
    "w1rLBgvNCMfTlLDLyKfWCf0Gu2vYDMvYBgvZCYbLBMrWB2LUDhmGBMvLzcbMzxrJAcGP",
    "y29UDgvUDfnHzMvbCMvHq2HHBMDLza",
    "nI4Xma",
    "nI4X",
    "DgHLBwvdAgfUz2vK",
    "DgDxzwjbChbeyxrH",
    "zgLZywjSzq",
    "yNv0Dg9Ux2nVBg9Y",
    "y2XLyxi",
    "y29UDgvUDc1ZywzLlwfYzweTAw5ZzxqTDg9W",
    "y2XHC3noyw1L",
    "C2HHCMvnzxnZywDLrMfPBgvK",
    "w1rLBgvNCMfTlLDLyKfWCf0Gsw5SAw5Lig1VzguGAxmGzgLZywjSzwqGzM9YihrOAxmGyM90lIbszwfKig1VCMuGywjVDxqGAw5SAw5Lig1Vzgu6igH0DhbZoI8Vy29Yzs50zwXLz3jHBs5VCMCVyM90CY9PBMXPBMu",
    "w1rLBgvNCMfTlLDLyKfWCf0Gq2HVB3nLignOyxqGDhLWzsbPCYbPBNzHBgLK",
    "yMv0yq",
    "AwzYyw1Lx3DPBgXFCMvSB2fK",
    "D2vIx2fWCf9VCgvUx2LUDM9Py2u",
    "y2XPCgjVyxjKvgv4DfjLy2vPDMvK",
    "u2vJDxjLu3rVCMfNzq",
    "AgvPz2H0",
    "C2HVD0nVBMzPCM0",
    "C2vJB25Kyxj5qNv0Dg9Uq2XPy2TLza",
    "rgv2AwnLt3jPzw50yxrPB24",
    "BgvMDa",
    "mtnWEcaXnxb4",
    "C3rHCNq",
    "CMvXDwvZDgvKx2nOyxrFC2vUDa",
    "D2vIx2fWCf9KzxzPy2vFC3rVCMfNzv9ZyxzLx2TLEq",
    "Cg9WDxbdBg9Zzwq",
    "zgv2AwnLx29YAwvUDgf0Aw9Ux2nOyw5Nzwq",
    "ywjZB2X1Dgu",
    "z3LYB3nJB3bLx3n0yxj0zwq",
    "w1rLBgvNCMfTlLDLyKfWCf0GqM90Dg9Tigj1DhrVBIbJB2XVCIbMB3jTyxqGAxmGAw52ywXPza",
    "Bg9N",
    "w1rLBgvNCMfTlLDLyKfWCf0Gu2vJDxjLu3rVCMfNzsbPCYbUB3qGC3vWCg9YDgvKigLUihzLCNnPB24G",
    "qMXVyG",
    "D2vIx2fWCf9Zzwn1CMvFC3rVCMfNzv9ZyxzLx2TLEq",
    "Ag9Tzv9Zy3jLzw5Fy2HLy2TLza",
    "v2vIqxbWtg9JyxrPB25nyw5Hz2vYtg9JyxrPB25by2nLC3noB3rszxf1zxn0zwq",
    "DMLLD3bVCNrizwLNAhq",
    "nI4Y",
    "zMXLEa",
    "DgHLBwvqyxjHBxm",
    "ywnJzwXLCM9TzxrLCL9JAgfUz2vK",
    "CMv0DxjUx2jHy2S",
    "Ag9TzvnJCMvLBKfKzgvK",
    "w1rLBgvNCMfTlLDLyKfWCf0GqM90Dg9Tigj1DhrVBIb0zxH0ignVBg9YigzVCM1HDcbPCYbPBNzHBgLK",
    "AgvHzgvYx2nVBg9Y",
    "yM90Dg9Tx2jHCL9Iz19JB2XVCG",
    "D2vIx2fWCf9VCgvUx3bVChvW",
    "y3rYBeTLEq",
    "yMDFzgfYA19JB2XVCG",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtwv0Ag9KihnLDevTB2PPu3rHDhvZigLZig5VDcbZDxbWB3j0zwqGAw4GDMvYC2LVBIa",
    "AxnwzxjZAw9UqxrmzwfZDa",
    "yMXVy2S",
    "rgv2AwnLu3rVCMfNzq",
    "x2jVDhrVBuj1DhrVBG",
    "Axnby3rPDMu",
    "z3LYB3nJB3bLq2HHBMDLza",
    "C2HHCMvnzxnZywDL",
    "BwvZC2fNzq",
    "w1rLBgvNCMfTlLDLyKfWCf0GuMvXDwvZDcbJAgf0igLZigfSCMvHzhKGB3bLBMvK",
    "Aw52B2LJzunSB3nLza",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtwv0Ag9KihjLCxvLC3rgDwXSC2nYzwvUigLZig5VDcbZDxbWB3j0zwqGAw4GDMvYC2LVBIa",
    "w1rLBgvNCMfTlLDLyKfWCf0GsgfWDgLJigzLzwrIywnRihr5CguGAxmGAw52ywXPza",
    "v2vIqxbWvgDvCMXjBNzHBgLK",
    "Axnwzxj0AwnHBfn3AxbLC0vUywjSzwq",
    "ywXSB3DLza",
    "DgfNtMfTzq",
    "yMLVBwv0CMLJvg9Rzw5vCgrHDgvK",
    "C2HPBMu",
    "w1rLBgvNCMfTlLDLyKfWCf0Gug9WDxaGC2HVDwXKigHHDMuGyxqGBgvHC3qGB25Ligj1DhrVBG",
    "zgfYAW",
    "yMLVBwv0CNLFDg9Rzw5FDxbKyxrLza",
    "CMvXDwvZDenOyxq",
    "AxngDwXSC2nYzwvU",
    "w1rLBgvNCMfTlLDLyKfWCf0Gug9WDxaGyNv0Dg9UigLKigLZihrVBYbSB25N",
    "D2vIx2fWCf9Zzwn1CMvFC3rVCMfNzv9JBgvHCG",
    "C2vJDxjLx3n0B3jHz2vFA2v5x3jLy2vPDMvK",
    "CgfNzwHPzgu",
    "AxncAw9TzxrYAwnuB2TLBLnHDMvK",
    "Bwf0y2G",
    "zMLSzv9KB3DUBg9Hzf9Yzxf1zxn0zwq",
    "CMvTB3zLza",
    "C2v0x2n1C3rVBv9ZDhLSzq",
    "w1rLBgvNCMfTlLDLyKfWCf0Gug9WDxaGyNv0Dg9UihrLEhqGAxmGCMvXDwLYzwqGzM9Yihr5CguG",
    "zgLZCgXHEq",
    "ywnJzwXLCM9TzxrLCL9ZDg9WCgvK",
    "zgvZDhj1y3rPDMu",
    "D3jPDgvFywnJzxnZx3jLCxvLC3rLza",
    "zgLZywjSzunSB3nPBMDdB25MAxjTyxrPB24",
    "Bg9JyxrPB25szxf1zxn0zwq",
    "w1rLBgvNCMfTlLDLyKfWCf0Gug9WDxaGyNv0Dg9Uihr5CguGAxmGAw52ywXPza",
    "D2vIx2fWCf9ZDg9Wx2D5CM9Zy29Wzq",
    "yM90Dg9TqMfYq29SB3i",
    "mZeWndmYrhHQqvD6",
    "zgv2AwnLx29YAwvUDgf0Aw9Ux2zHAwXLza",
    "Bgf0Axr1zgu",
    "x3bHDgG",
    "Ahr0CdO",
    "C3vIC3rY",
    "Bg9JyxrPB25nyw5Hz2vYvxbKyxrLza",
    "q29UDgLUDwu",
    "zMXLEerPCMvJDgLVBG",
    "D2vIx2fWCf9VCgvUx3rNx2XPBMS",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtg9JyxrPB24GAxmGBM90igf2ywLSywjSzsbVBIb0AgLZigrLDMLJzs4",
    "C3rHDhvZ",
    "D2vIx2fWCf9Yzxf1zxn0x3rOzw1L",
    "D2vIx2fWCf9Zzwn1CMvFC3rVCMfNzv9Yzxn0B3jLx2TLEq",
    "zhvYyxrPB24",
    "quXsrufewv9gvuXmu0nsruvo",
    "C291CMnL",
    "C3DPDgnOsw5SAw5LuxvLCNK",
    "B3bLBLrLBgvNCMfTtgLUAW",
    "AgfZx3nOAw5Lx2vMzMvJDa",
    "yMfJA2DYB3vUza",
    "AxnfEhbHBMrLza",
    "DgCTyM90Dg9Tlwj1DhrVBG",
    "DxjS",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtwv0Ag9Kig9Wzw5jBNzVAwnLigLZig5VDcbZDxbWB3j0zwqGAw4GDMvYC2LVBIa",
    "y2XVC2u",
    "C2vSzwn0Aw9Ux2nOyw5Nzq",
    "B3bHy2L0Eq",
    "v2vIqxbWsgfWDgLJsw1Wywn0u3r5BgvjBNzHBgLK",
    "y29SDw1UlxjLDMvYC2u",
    "w1rLBgvNCMfTlLDLyKfWCf0Gug9WDxaGBwvZC2fNzsbPCYbYzxf1AxjLza",
    "DgDxzwjbChbwzxjZAw9U",
    "BM9Uzq",
    "DgL0Bgu",
    "CMLNAwq",
    "AgvHDNK",
    "DxbKyxrLza",
    "w1rLBgvNCMfTlLDLyKfWCf0GsgvHzgvYignVBg9YigzVCM1HDcbPCYbPBNzHBgLK",
    "zMLSzurVD25SB2fKuMvXDwvZDgvK",
    "C2vSzwn0Aw9Uq2HHBMDLza",
    "mtKZndKZnwzJs1PpDq",
    "C2HVDW",
    "z3LYB3nJB3bLu3rVChbLza",
    "C2v0uhjVCgvYDhK",
    "CMvWBgfJzq",
    "v2vIqxbWqMLVBwv0CMLJtwfUywDLCKjPB21LDhjPy3noB3rbDMfPBgfIBgu",
    "C2HHCMvuB1n0B3j5",
    "w1rLBgvNCMfTlLDLyKfWCf0Gr3LYB3nJB3bLigLZig5VDcbZDxbWB3j0zwqGAw4GDMvYC2LVBIa",
    "DMfSDwu",
    "yM90Dg9T",
    "DgfYz2v0",
    "os4W",
    "D2fYBMLUzW",
    "v2vIqxbWrgf0yuLUDMfSAwq",
    "z2v0s2v5CW",
    "Bg9JyxrPB24",
    "D2fYBG",
    "mtmXotu4zNfMwNDV",
    "CxjuzxH0uMvJzwL2zwq",
    "DgDxzwjbChbezwj1zW",
    "CMvXDwvZDfDYAxrLqwnJzxnZ",
    "yNv0Dg9UCW",
    "D2vIx2fWCf9Yzxf1zxn0x3zPzxDWB3j0",
    "B21PDa",
    "zxzLBNruExbL",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtg9JyxrPB24GywnJzxnZihDHCYbNCMfUDgvKigj5ihrOzsb1C2vYlcbUBYbUzwvKihrVigDVihrVihnLDhrPBMDZlG",
    "C2fMzufYzwfdAgfUz2vK",
    "w1rLBgvNCMfTlLDLyKfWCf0Gv3jPDguGywnJzxnZigLZigfSCMvHzhKGCMvXDwvZDgvK",
    "v2vIqxbWu2HHCMvnzxnZywDLt3bLBMvK",
    "y291CNnL",
    "w1rLBgvNCMfTlLDLyKfWCf0Gvg9Rzw4GAxmGDg9VigXVBMC",
    "zxjYB3i",
    "Dg9mB3DLCKnHC2u",
    "ue9tva",
    "D2vIx2fWCf9Zzxr1Cf9ZzwnVBMrHCNLFyNv0Dg9U",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtwv0Ag9KihjLCxvLC3rdB250ywn0igLZig5VDcbZDxbWB3j0zwqGAw4GDMvYC2LVBIa",
    "w1rLBgvNCMfTlLDLyKfWCf0Gq2HVB3nLignOyxqGDhLWzxmGC2HVDwXKigjLigfUigfYCMf5",
    "v2vIqxbWqMLVBwv0CMLJuMvXDwvZDefJy2vZC1bHCMfTsw52ywXPza",
    "zxH0zxjUywW",
    "AxnwAxnPyMXL",
    "w1rLBgvNCMfTlLDLyKfWCf0Gsw52B2LJzsb1CMWGAxmGAw52ywXPza",
    "AgLKzvbYB2DYzxnZ",
    "Aw1Wywn0t2nJDxjYzwq",
    "DMLLD3bVCNqTAgvPz2H0",
    "m2vmC01mwq",
    "Dg9W",
    "y2fSBgjHy2S",
    "Aw5PDa",
    "nI45",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtg9JyxrPB24GywnJzxnZihDHCYbUB3qGCMvXDwvZDgvKihLLDc4",
    "yM9VBgvHBG",
    "y2fSBev2zw50q2fSBgjHy2TZ",
    "v2vIqxbWu2nHBLfYug9WDxbpCgvUzwq",
    "yMLVBwv0CMLJqxv0AfjLCxvLC3rLza",
    "Aw5UzxjizwLNAhq",
    "B2jQzwn0",
    "C2vJB25Kyxj5x2j1DhrVBL9WCMvZC2vK",
    "y2fSyYGXmdb2AcaTia",
    "Axnby2nLC3nszxf1zxn0zwq",
    "yMfJA19IDxr0B25FChjLC3nLza",
    "Bg9Uz2L0DwrL",
    "y2fSBa",
    "w1rLBgvNCMfTlLDLyKfWCf0GvxjSihbYB3rVy29SigLZig5VDcbZDxbWB3j0zwq",
    "v2vIqxbWrg93BMXVywrgAwXLugfYyw1jBNzHBgLK",
    "C2HPzNq",
    "AxnFC3rHDgvFC3rHyMXL",
    "Cg9ZDev2zw50",
    "D2vIx2fWCf9KyxrHx3nLBMq",
    "ywnJzwXLCM9TzxrLCKzHAwXLza",
    "ve1bia",
    "C2vJDxjLx3n0B3jHz2vFA2v5x3jLC3rVCMvK",
    "ywrKrxzLBNrmAxn0zw5LCG",
    "w1rLBgvNCMfTlLDLyKfWCf0GqM90Dg9TigjHCIbJB2XVCIbMB3jTyxqGAxmGAw52ywXPza",
    "zgv2AwnLt3jPzw50yxrPB25gywLSzwq",
    "y3jLyxrLrwXLBwvUDa",
    "w1rLBgvNCMfTlLDLyKfWCf0GqMLVBwv0CMLJigfJy2vZCYb3yxmGBM90igDYyw50zwqGyNKGDgHLihvZzxiU",
    "BwvKAxvT",
    "y29UDgvUDfnHzMvbCMvHsw5Zzxq",
    "ywjJzgvMz2HPAMTSBw5VChfYC3r1DND4ExPbqKneruzhseLks0XntK9quvjtvfvwv1HzwJaXmJm0nty3odK",
    "D2vIx2fWCf9ZAgfYzv90B19ZDg9YEq",
    "AgfZu2HPBMvfzMzLy3q",
    "CMvMCMvZAf9YyxrL",
    "zMLSzv9Uyw1L",
    "CMvXx2LK",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtwv0Ag9KihjLCxvLC3rdAgf0igLZig5VDcbZDxbWB3j0zwqGAw4GDMvYC2LVBIa",
    "BM90Awz5",
    "y2vUDgvY",
    "DhLWzq",
    "D2vIx2fWCf9ZzxrFAgvHzgvYx2nVBg9Y",
    "Aw5Uzxjive1m",
    "yxv0BW",
    "u2vYDMvYBgvZCW",
    "C2L6zq",
    "mc44",
    "CMvHzfrLEhrgCM9Tq2XPCgjVyxjK",
    "w1rLBgvNCMfTlLDLyKfWCf0Gu2vYDMvYBgvZCYbLBMrWB2LUDcbUyw1LigLZigLUDMfSAwq",
    "D2vIx2fWCf90CMLNz2vYx2HHChrPy19MzwvKyMfJAW",
    "zw1VAMLtDgf0Dxntzxq",
    "v2vIqxbWsw5SAw5Lq2HVB3nLq2HHDfr5CgvjBNzHBgLK",
    "D2vIx2fWCf9JAgvJA19OB21Lx3nJCMvLBG",
    "z2v0rwXLBwvUDej5swq",
    "CMvZCg9UC2vvBNnHzMu",
    "vgvSzwDYyw1xzwj2Awv3uhjVEhK",
    "w1rLBgvNCMfTlLDLyKfWCf0GqMLVBwv0CMLJigfJy2vZCYb3yxmGz3jHBNrLzcbIEsb0AguGDxnLCIWGBM8GBMvLzcb0BYbNBYb0BYbZzxr0Aw5NCY4",
    "w1rLBgvNCMfTlLDLyKfWCf0GqM90Dg9TigjHCIbJB2XVCIbPCYbUB3qGC3vWCg9YDgvKigLUihzLCNnPB24G",
    "mtaWDMG",
    "C2f2zvn0B3jHz2vwywX1zq",
    "BwfPBG",
    "Aw5PDerHDgfvBNnHzMu",
    "D2vIx2fWCf9Yzxf1zxn0x2XVy2f0Aw9U",
    "ywn0AxzHDgvK",
    "ywrKvg9iB21Lu2nYzwvU",
    "z2fTBwe",
    "zgvMyxvSDa",
    "nY43",
    "DMLLD3bVCNrtDgfIBgvizwLNAhq",
    "v2vIqxbWqMLVBwv0CMLJtwfUywDLCKjPB21LDhjPy0fJy2vZC05VDeDYyw50zwq",
    "yxbWBgLJyxrPB24VANnVBG",
    "C2vJDxjLx3n0B3jHz2vFy2XLyxjLza",
    "r3LYB3nJB3bL",
    "yxbWzw5Kq2HPBgq",
    "AxnjzNjHBwu",
    "mJG4CLjQA3rP",
    "AxnbCNjHEq",
    "D2vIx2fWCf9ZDgfYDf9Hy2nLBgvYB21LDgvY",
    "CMvSB2fKx2LMCMfTzq",
    "CgfYyw1LDgvYCW",
    "C2vJDxjLx3n0B3jHz2vFA2v5x3nHDMvK",
    "yNv0Dg9Ux3rLEhrFy29SB3i",
    "z2v0sxrLBxm",
    "zw1VAMLFC3rHDhvZx2zHAwXLza",
    "C3rYAw5NAwz5",
    "z2v0uMvXDwvZDgvKq29UDgfJDa",
    "y29UDgvUDc1ZywzLlwfYzweTAw5ZzxqTyM90Dg9T",
    "AxnFywn0AxzL",
    "CMvXDwvZDez1BgXZy3jLzw4",
    "zNvSBhnJCMvLBKnOyw5Nzwq",
    "C2v0vgv4Da",
    "Aw52B2LJzv9JBg9Zzwq",
    "w1rLBgvNCMfTlLDLyKfWCf0GqMLVBwv0CMLJCYbPCYbUB3qGyxzHAwXHyMXLig9UihrOAxmGzgv2AwnLlG",
    "CM93lxjLDMvYC2u",
    "D2vIx2fWCf9IAw9TzxrYEv9Yzxf1zxn0x2fJy2vZCW",
    "y29UDgvUDc1ZywzLlwfYzweTAw5ZzxqTCMLNAhq",
    "nY4Xma",
    "w1rLBgvNCMfTlLDLyKfWCf0Grgv2AwnLt3jPzw50yxrPB24GAxmGBM90ihn1ChbVCNrLzcbPBIb2zxjZAw9Uia",
    "v2vIqxbWsgvHzgvYq29SB3jlzxLjBNzHBgLK",
    "nZqZnZz1seHSqxu",
    "w1rLBgvNCMfTlLDLyKfWCf0Gtg9JyxrPB25nyw5Hz2vYihnOB3vSzcbIzsbPBML0zwqGyMvMB3jLihvZAw5NlG",
    "Ag9ZDg5HBwu",
    "CMvXDwvZDgvKq2HHDezHAwXLza",
    "C2v0ugfYyw1Z",
    "icHivfrqia",
    "C2vZC2LVBLn0B3jHz2vhzxq",
    "zw5HyMXL",
    "nI42",
    "y2fSBgjHy2TZ",
    "w1rLBgvNCMfTlLDLyKfWCf0Gu2nHBIbruIbWB3b1Ccb0zxH0igLZihrVBYbSB25N",
    "w1rLBgvNCMfTlLDLyKfWCf0GrMLSzsbUyw1LigLZihjLCxvPCMvK",
    "w1rLBgvNCMfTlLDLyKfWCf0Gu2vYDMvYBgvZCYbLBMrWB2LUDhmGBMvLzcbPBML0rgf0ytSGB3bLBIb0AguGyxbWigzYB20GvgvSzwDYyw0",
    "twfPBKj1DhrVBG",
    "AwzYyw1L",
    "w1rLBgvNCMfTlLDLyKfWCf0GqwnJzwXLCM9TzxrLCIbYzwzYzxnOx3jHDguGAxmGAw52ywXPza",
    "w1rLBgvNCMfTlLDLyKfWCf0GtwvKAweGDxjSihbYB3rVy29SigLZig5VDcbZDxbWB3j0zwq",
    "C2vZC2LVBLn0B3jHz2vtzxq",
    "w1rLBgvNCMfTlLDLyKfWCf0GqM90Dg9Tigj1DhrVBIb0zxH0igLZihjLCxvPCMvK",
    "zM9Yy2vFCMvXDwvZDa",
    "ndy3nZGWnxPouhHzra",
    "y29SDw1U",
    "yMDFy29SB3i",
    "AxnqCM9NCMvZC1zPC2LIBgu",
    "yM9KEq",
    "Bwv0yuTLEq",
    "Dw5RBM93BG",
  ];
  _0x45af = function () {
    return _0x6ca763;
  };
  return _0x45af();
}
