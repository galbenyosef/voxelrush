// main-C153VVJY 370 — x4a66d9
// Lines 145896-146316 of readable/assets/main-C153VVJY.pretty.js (statement-aligned).
const zA = new Map(),
  ty = new M9({
    solid: (_0x12f98c, _0x559afa, _0x2d815c, _0x188744) => {
      const _0xfbd44b = _0x44a014,
        _0x31f996 = pt(_0x12f98c),
        _0x1847c6 = _0x31f996[_0xfbd44b(0xcdd)](
          _0x559afa,
          _0x2d815c,
          _0x188744,
        );
      return Je(_0x1847c6) || ro(_0x1847c6)
        ? !(_0x31f996[_0xfbd44b(0xdb5)](_0x559afa, _0x2d815c, _0x188744) & Vt)
        : gt(_0x1847c6);
    },
    changed: (_0x5acb41, _0x5453ea) =>
      lt(
        _0x5acb41[_0x44a014(0x529)],
        new F(C["S_EGG"])
          ["u8"](_0x5453ea ? 0x1 : 0x0)
          [_0x44a014(0x6f4)](_0x5acb41["id"])
          ["u8"](_0x5acb41[_0x44a014(0x529)])
          [_0x44a014(0x1088)](_0x5acb41["x"])
          ["f32"](_0x5acb41["y"])
          ["f32"](_0x5acb41["z"]),
      ),
    hit: (_0x212e77) => {
      const _0x30536f = _0x44a014,
        _0x5af3ad = G["get"](_0x212e77[_0x30536f(0xbe9)]),
        _0x22a80f = (_0x968131, _0x30feb3, _0x20bd7c) =>
          Math[_0x30536f(0x1fc4)](_0x212e77["x"] - _0x968131["x"]) <
            _0x30feb3 + 0.09 &&
          Math["abs"](_0x212e77["z"] - _0x968131["z"]) < _0x30feb3 + 0.09 &&
          _0x212e77["y"] >= _0x968131["y"] - 0.09 &&
          _0x212e77["y"] <= _0x968131["y"] + _0x20bd7c + 0.09;
      for (const _0x324c99 of G[_0x30536f(0x642)]())
        if (
          _0x324c99["id"] !== _0x212e77[_0x30536f(0xbe9)] &&
          _0x324c99[_0x30536f(0x529)] === _0x212e77["planet"] &&
          _0x324c99[_0x30536f(0x161)] &&
          _0x324c99[_0x30536f(0x1445)] === -0x1 &&
          _0x22a80f(
            _0x324c99,
            0.3,
            _0x324c99["flags"] & 0x4
              ? 0.55
              : _0x324c99[_0x30536f(0x10cf)] & 0x10
                ? 1.25
                : 1.8,
          )
        )
          return (
            _n(
              _0x324c99,
              0x1,
              _0x5af3ad?.[_0x30536f(0x35b)],
              _0x30536f(0x201d),
              _0x30536f(0x1fe),
              _0x212e77[_0x30536f(0xbe9)],
              void 0x0,
              _0x212e77,
            ),
            !0x0
          );
      for (const _0x51442e of rt[_0x30536f(0x642)]())
        if (
          _0x51442e[_0x30536f(0x529)] === _0x212e77[_0x30536f(0x529)] &&
          _0x51442e["hp"] > 0x0 &&
          _0x22a80f(_0x51442e, 0.3, 1.7)
        )
          return (
            _0x5af3ad &&
              pc(_0x51442e, 0x1, _0x5af3ad, _0x30536f(0x201d), void 0x0, !0x0),
            !0x0
          );
      if (_0x212e77[_0x30536f(0x529)] === D[_0x30536f(0xd62)]) {
        for (const _0x319c00 of Ce[_0x30536f(0x642)]())
          if (
            _0x319c00["hp"] > 0x0 &&
            _0x22a80f(
              _0x319c00,
              _0x319c00[_0x30536f(0x1556)] === dt[_0x30536f(0x727)]
                ? 0.2
                : 0.45,
              _0x319c00[_0x30536f(0x1556)] === dt[_0x30536f(0x727)]
                ? _0x319c00["baby"]
                  ? 0.5
                  : 0.85
                : 1.2,
            )
          )
            return (
              (_0x319c00["hp"] = Math[_0x30536f(0x723)](
                0x0,
                _0x319c00["hp"] - 0x1,
              )),
              (Xn = !0x0),
              xu(
                _0x319c00,
                _0x212e77["x"] - _0x212e77["vx"],
                _0x212e77["z"] - _0x212e77["vz"],
              ),
              _0x319c00["hp"] <= 0x0
                ? dr(_0x319c00)
                : Fe(
                    new F(C[_0x30536f(0x1e26)])
                      ["u16"](_0x319c00["id"])
                      [_0x30536f(0x1e72)](_0x319c00["hp"]),
                  ),
              !0x0
            );
      }
      for (const _0x391a5c of W["values"]())
        if (
          (_0x391a5c[_0x30536f(0x529)] ?? 0x0) ===
            _0x212e77[_0x30536f(0x529)] &&
          _0x391a5c["hp"] > 0x0
        ) {
          const _0x11fc8b =
              0x2 * Math["atan2"](_0x391a5c["qy"], _0x391a5c["qw"]),
            _0xc80410 = _0x212e77["x"] - _0x391a5c["x"],
            _0x22b184 = _0x212e77["z"] - _0x391a5c["z"],
            _0x1d468e = Math[_0x30536f(0x12df)](_0x11fc8b),
            _0x48d1d4 = Math[_0x30536f(0x1fcd)](_0x11fc8b),
            _0x581e93 = _0xc80410 * _0x1d468e - _0x22b184 * _0x48d1d4,
            _0x214b5c = _0xc80410 * _0x48d1d4 + _0x22b184 * _0x1d468e;
          if (
            (ao[_0x391a5c[_0x30536f(0x1556)]] ?? [])[_0x30536f(0x1eb0)](
              (_0x547313) =>
                _0x581e93 >= _0x547313[_0x30536f(0x16e0)]["x"] - 0.09 &&
                _0x581e93 <= _0x547313["max"]["x"] + 0.09 &&
                _0x214b5c >= _0x547313["min"]["z"] - 0.09 &&
                _0x214b5c <= _0x547313[_0x30536f(0x723)]["z"] + 0.09 &&
                _0x212e77["y"] - _0x391a5c["y"] >=
                  _0x547313[_0x30536f(0x16e0)]["y"] - 0.09 &&
                _0x212e77["y"] - _0x391a5c["y"] <= _0x547313["max"]["y"] + 0.09,
            )
          )
            return (In(_0x391a5c, 0x1, _0x212e77[_0x30536f(0xbe9)]), !0x0);
        }
      return !0x1;
    },
    hatch: (_0x4cfabc) => {
      const _0x159111 = _0x44a014;
      for (const [_0x7f601b, _0x44a4b2] of [
        [0x0, 0x0],
        [0.5, 0x0],
        [-0.5, 0x0],
        [0x0, 0.5],
        [0x0, -0.5],
        [0x1, 0x0],
        [-0x1, 0x0],
        [0x0, 0x1],
        [0x0, -0x1],
      ]) {
        const _0x3ffbfe = _0x4cfabc["x"] + _0x7f601b,
          _0x11e24d = _0x4cfabc["z"] + _0x44a4b2,
          _0x5a6363 = B["groundAt"](_0x3ffbfe, _0x11e24d, _0x4cfabc["y"] + 0x1);
        if (
          !Number["isFinite"](_0x5a6363) ||
          _0x5a6363 < _0x4cfabc["y"] - 0x4 ||
          _0x5a6363 > _0x4cfabc["y"] + 0x1
        )
          continue;
        let _0x3625fc = !0x0;
        for (const _0x4b53a0 of [-0.16, 0.16])
          for (const _0x93373b of [-0.16, 0.16])
            for (const _0x5b40a2 of [0.05, 0.55]) {
              const _0x247142 = B[_0x159111(0xcdd)](
                Math[_0x159111(0x2f3)](_0x3ffbfe + _0x4b53a0),
                Math[_0x159111(0x2f3)](_0x5a6363 + _0x5b40a2),
                Math[_0x159111(0x2f3)](_0x11e24d + _0x93373b),
              );
              (gt(_0x247142) ||
                _0x247142 === l[_0x159111(0x1c8b)] ||
                _0x247142 === l["LAVA"]) &&
                (_0x3625fc = !0x1);
            }
        if (_0x3625fc) {
          Qa(dt["CHICKEN"], _0x3ffbfe, _0x11e24d, !0x0, !0x0, _0x5a6363);
          break;
        }
      }
    },
  }),
  _N = new Map(),
  ON = (_0x367bdf, _0x33e4ec) => {
    const _0x50374b = _0x44a014,
      _0x452f75 = new F(C[_0x50374b(0xbee)])
        ["u8"](_0x33e4ec)
        [_0x50374b(0x6f4)](_0x367bdf["id"])
        [_0x50374b(0x1e72)](_0x367bdf[_0x50374b(0xbe9)])
        ["u16"](_0x367bdf[_0x50374b(0x1676)])
        ["u8"](_0x367bdf[_0x50374b(0x529)])
        [_0x50374b(0x1088)](_0x367bdf["x"])
        ["f32"](_0x367bdf["y"])
        [_0x50374b(0x1088)](_0x367bdf["z"])
        ["f32"](_0x367bdf["vx"])
        ["f32"](_0x367bdf["vy"])
        [_0x50374b(0x1088)](_0x367bdf["vz"]);
    return (
      _0x33e4ec === X0[_0x50374b(0x7aa)] &&
        _0x452f75[_0x50374b(0x1d68)](
          JSON[_0x50374b(0x2043)]({
            cosmetic: _0x367bdf[_0x50374b(0x12a1)] ?? null,
            holder:
              G["get"](_0x367bdf[_0x50374b(0xbe9)])?.["identity"]?.["id"] ??
              G[_0x50374b(0xda9)](_0x367bdf[_0x50374b(0xbe9)])?.["name"] ??
              "",
          }),
        ),
      _0x452f75
    );
  },
  wN = "Combat\x20knife",
  FC = new L9({
    solid: (_0x50b613, _0x1cf2c5, _0xd35884, _0x430575) => {
      const _0x50271f = _0x44a014,
        _0x2903c1 = pt(_0x50b613),
        _0x3226dd = _0x2903c1["getBlock"](_0x1cf2c5, _0xd35884, _0x430575);
      return Je(_0x3226dd) || ro(_0x3226dd)
        ? !(_0x2903c1[_0x50271f(0xdb5)](_0x1cf2c5, _0xd35884, _0x430575) & Vt)
        : gt(_0x3226dd);
    },
    changed: (_0x231902) =>
      lt(_0x231902[_0x44a014(0x529)], ON(_0x231902, X0["FLYING"])),
    hit: (_0x43d542) => {
      const _0x4a66d9 = _0x44a014,
        _0x4fe6c6 = G[_0x4a66d9(0xda9)](_0x43d542[_0x4a66d9(0xbe9)]),
        _0xebf6a = (_0x42e712, _0x36aecd, _0xab6a34) =>
          Math[_0x4a66d9(0x1fc4)](_0x43d542["x"] - _0x42e712["x"]) <
            _0x36aecd + 0.12 &&
          Math["abs"](_0x43d542["z"] - _0x42e712["z"]) < _0x36aecd + 0.12 &&
          _0x43d542["y"] >= _0x42e712["y"] - 0.08 &&
          _0x43d542["y"] <= _0x42e712["y"] + _0xab6a34 + 0.08,
        _0x4458d3 = (_0xd4ed6f, _0x3896fe) => {
          const _0xecd2b6 = _0x4a66d9,
            _0x3d0c51 = (_0x43d542["y"] - _0xd4ed6f["y"]) / _0x3896fe;
          return _0x3d0c51 > 0.8
            ? Tn[_0xecd2b6(0x16f0)]
            : _0x3d0c51 < 0.42
              ? Tn[_0xecd2b6(0xc29)]
              : Tn[_0xecd2b6(0x1f47)];
        };
      for (const _0x3c29e9 of G["values"]()) {
        if (
          _0x3c29e9["id"] === _0x43d542[_0x4a66d9(0xbe9)] ||
          _0x3c29e9[_0x4a66d9(0x529)] !== _0x43d542[_0x4a66d9(0x529)] ||
          !_0x3c29e9[_0x4a66d9(0x161)] ||
          _0x3c29e9[_0x4a66d9(0x1445)] !== -0x1
        )
          continue;
        const _0x11b778 =
          _0x3c29e9[_0x4a66d9(0x10cf)] & 0x4
            ? 0.6
            : _0x3c29e9[_0x4a66d9(0x10cf)] & 0x10
              ? 1.35
              : 1.8;
        if (!_0xebf6a(_0x3c29e9, 0.3, _0x11b778)) continue;
        const _0x53040d = _0x4458d3(_0x3c29e9, _0x11b778),
          _0x278b93 = _0x3c29e9["hp"];
        return (
          _m(_0x4fe6c6, _0x43d542[_0x4a66d9(0x12a1)], () =>
            _n(
              _0x3c29e9,
              jM * sm[_0x53040d],
              _0x4fe6c6?.[_0x4a66d9(0x35b)],
              wN,
              _0x4a66d9(0x605),
              _0x43d542[_0x4a66d9(0xbe9)],
              _0x53040d,
              _0x43d542,
            ),
          ),
          _0x4fe6c6 &&
            rf(
              _0x4fe6c6,
              Ho,
              "p:" + _0x3c29e9[_0x4a66d9(0x35b)],
              _0x278b93 - _0x3c29e9["hp"],
              !en(_0x4fe6c6[_0x4a66d9(0x35b)], _0x3c29e9[_0x4a66d9(0x35b)]) &&
                !en(_0x3c29e9[_0x4a66d9(0x35b)], _0x4fe6c6[_0x4a66d9(0x35b)]),
              !0x0,
            ),
          _0x4fe6c6 && Jg(_0x4fe6c6[_0x4a66d9(0x35b)], _0x3c29e9["id"]),
          !0x0
        );
      }
      for (const _0x5535ce of rt[_0x4a66d9(0x642)]()) {
        if (
          _0x5535ce[_0x4a66d9(0x529)] !== _0x43d542["planet"] ||
          _0x5535ce["hp"] <= 0x0 ||
          !_0xebf6a(_0x5535ce, 0.32, 1.75)
        )
          continue;
        const _0x35d8e7 = _0x4458d3(_0x5535ce, 1.75);
        if (_0x4fe6c6) {
          const _0x18cbd1 = _0x5535ce["hp"];
          (_m(_0x4fe6c6, _0x43d542[_0x4a66d9(0x12a1)], () =>
            pc(_0x5535ce, jM * sm[_0x35d8e7], _0x4fe6c6, wN, _0x35d8e7),
          ),
            rf(
              _0x4fe6c6,
              Ho,
              "b:" + _0x5535ce["id"],
              _0x18cbd1 - _0x5535ce["hp"],
              _0x5535ce[_0x4a66d9(0x70c)],
              !0x0,
            ));
        }
        return !0x0;
      }
      if (_0x43d542["planet"] === D["EARTH"])
        for (const _0x22eca6 of Ce["values"]()) {
          if (_0x22eca6["hp"] <= 0x0) continue;
          const _0x576faa =
              _0x22eca6["type"] === dt["CHICKEN"] ||
              _0x22eca6[_0x4a66d9(0x1556)] === dt[_0x4a66d9(0x127c)],
            _0x536bfd =
              _0x22eca6[_0x4a66d9(0x1556)] === dt[_0x4a66d9(0x20c6)] ||
              _0x22eca6[_0x4a66d9(0x1556)] === dt["CAMEL"] ||
              _0x22eca6[_0x4a66d9(0x1556)] === dt["WENDIGO"] ||
              _0x22eca6[_0x4a66d9(0x1556)] === dt["SHARK"];
          if (
            !_0xebf6a(
              _0x22eca6,
              _0x576faa ? 0.22 : _0x536bfd ? 0.6 : 0.45,
              _0x576faa ? 0.6 : _0x536bfd ? 1.7 : 1.1,
            )
          )
            continue;
          _0x4fe6c6 &&
            (xu(_0x22eca6, _0x4fe6c6["x"], _0x4fe6c6["z"]),
            (_0x22eca6["hitFromX"] = _0x4fe6c6["x"]),
            (_0x22eca6[_0x4a66d9(0xd92)] = _0x4fe6c6["z"]));
          const _0x31b440 = _0x22eca6["hp"];
          return (
            (_0x22eca6["hp"] = Math[_0x4a66d9(0x723)](
              0x0,
              _0x22eca6["hp"] - jM,
            )),
            (Xn = !0x0),
            _0x4fe6c6 &&
              rf(
                _0x4fe6c6,
                Ho,
                "a:" + _0x22eca6["id"],
                _0x31b440 - _0x22eca6["hp"],
                !_0x22eca6[_0x4a66d9(0x19d9)] &&
                  _0x22eca6["rider"] === void 0x0,
                !0x0,
              ),
            _0x22eca6["hp"] <= 0x0
              ? dr(_0x22eca6)
              : Fe(
                  new F(C["S_ANIMAL_HP"])
                    [_0x4a66d9(0x1e72)](_0x22eca6["id"])
                    [_0x4a66d9(0x1e72)](_0x22eca6["hp"]),
                ),
            !0x0
          );
        }
      return !0x1;
    },
    land: (_0x119281, _0xc70781) => {
      const _0xb6137 = _0x44a014,
        _0x10f623 =
          Math["hypot"](_0x119281["vx"], _0x119281["vy"], _0x119281["vz"]) ||
          0x1,
        _0x583302 = _0x119281["x"] - (_0x119281["vx"] / _0x10f623) * 0.06,
        _0x3f87e1 = _0x119281["y"] - (_0x119281["vy"] / _0x10f623) * 0.06,
        _0xffb0ff = _0x119281["z"] - (_0x119281["vz"] / _0x10f623) * 0.06,
        _0x3d3acb = pt(_0x119281["planet"]),
        _0x48c6c5 = _0x3d3acb["getBlock"](
          Math[_0xb6137(0x2f3)](_0x119281["x"]),
          Math[_0xb6137(0x2f3)](_0x119281["y"]),
          Math[_0xb6137(0x2f3)](_0x119281["z"]),
        ),
        _0x3a55bd =
          _0xc70781 ||
          (_0x48c6c5 > 0x0 &&
            wl(_0x48c6c5) !== _0xb6137(0x2178) &&
            wl(_0x48c6c5) !== _0xb6137(0x814) &&
            wl(_0x48c6c5) !== _0xb6137(0x1881) &&
            wl(_0x48c6c5) !== _0xb6137(0x1e65));
      _0x119281["durability"] -= O9 + (_0x3a55bd ? w9 : 0x0);
      const _0x303c35 = ON(
        _0x119281,
        _0xc70781
          ? X0[_0xb6137(0x1266)]
          : _0x119281[_0xb6137(0x1be7)] <= 0x0
            ? X0[_0xb6137(0x7dc)]
            : X0[_0xb6137(0xf4f)],
      );
      if (
        (_0x303c35["f32"](_0x583302)
          [_0xb6137(0x1088)](_0x3f87e1)
          ["f32"](_0xffb0ff),
        lt(_0x119281["planet"], _0x303c35),
        _0x119281["durability"] > 0x0)
      )
        je(
          Ho,
          Math[_0xb6137(0x2f3)](_0x583302),
          Math[_0xb6137(0x723)](0x1, Math[_0xb6137(0x2f3)](_0x3f87e1)),
          Math[_0xb6137(0x2f3)](_0xffb0ff),
          0x1,
          0x15e,
          !0x0,
          0x493e0,
          _0x119281[_0xb6137(0x1be7)],
          Eo(Ho),
          0xffff,
          _0x119281[_0xb6137(0x529)],
          _0x119281[_0xb6137(0x12a1)],
        );
      else {
        const _0x1be586 = G[_0xb6137(0xda9)](_0x119281["owner"]);
        _0x1be586 && P(0x2, "Knife\x20broken", _0x1be586);
      }
    },
  });
