// sw 02 — x12c956
// Lines 306-480 of readable/sw.pretty.js (statement-aligned).
function _0x322d(_0x263d83, _0xd43f89) {
  _0x263d83 = _0x263d83 - 0x1a2;
  const _0x4c5a67 = _0x4c5a();
  let _0x322d65 = _0x4c5a67[_0x263d83];
  if (_0x322d["GlJdXb"] === undefined) {
    var _0x5effea = function (_0x1a5846) {
      const _0x2e826f =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
      let _0x61dea2 = "",
        _0x2e47a3 = "";
      for (
        let _0x5ed2b6 = 0x0, _0xdf3ead, _0x12e87d, _0x453e91 = 0x0;
        (_0x12e87d = _0x1a5846["charAt"](_0x453e91++));
        ~_0x12e87d &&
        ((_0xdf3ead =
          _0x5ed2b6 % 0x4 ? _0xdf3ead * 0x40 + _0x12e87d : _0x12e87d),
        _0x5ed2b6++ % 0x4)
          ? (_0x61dea2 += String["fromCharCode"](
              0xff & (_0xdf3ead >> ((-0x2 * _0x5ed2b6) & 0x6)),
            ))
          : 0x0
      ) {
        _0x12e87d = _0x2e826f["indexOf"](_0x12e87d);
      }
      for (
        let _0xdf5767 = 0x0, _0x70ca5c = _0x61dea2["length"];
        _0xdf5767 < _0x70ca5c;
        _0xdf5767++
      ) {
        _0x2e47a3 +=
          "%" +
          ("00" + _0x61dea2["charCodeAt"](_0xdf5767)["toString"](0x10))[
            "slice"
          ](-0x2);
      }
      return decodeURIComponent(_0x2e47a3);
    };
    ((_0x322d["nuubCk"] = _0x5effea),
      (_0x322d["cmyvDZ"] = {}),
      (_0x322d["GlJdXb"] = !![]));
  }
  const _0x5a5342 = _0x4c5a67[0x0],
    _0x267759 = _0x263d83 + _0x5a5342,
    _0x263afb = _0x322d["cmyvDZ"][_0x267759];
  return (
    !_0x263afb
      ? ((_0x322d65 = _0x322d["nuubCk"](_0x322d65)),
        (_0x322d["cmyvDZ"][_0x267759] = _0x322d65))
      : (_0x322d65 = _0x263afb),
    _0x322d65
  );
}
function platformOrigin(_0x18e4f5) {
  const _0xa3cc2 = _0x3c3a3a;
  return typeof _0x18e4f5 === "string" &&
    /^(https:\/\/[a-z0-9-]+\.voxelrush\.app|http:\/\/(localhost|127\.0\.0\.1)(:\d+)?)$/[
      _0xa3cc2(0x1e1)
    ](_0x18e4f5)
    ? _0x18e4f5
    : "";
}
async function tellClients(_0x5dfccc) {
  const _0x28e5e4 = _0x3c3a3a,
    _0x4fc166 = await self[_0x28e5e4(0x1d0)]["matchAll"]({
      type: _0x28e5e4(0x1ea),
      includeUncontrolled: !![],
    });
  for (const _0x2b4d82 of _0x4fc166) _0x2b4d82[_0x28e5e4(0x1c0)](_0x5dfccc);
}
(self[_0x3c3a3a(0x1d3)](_0x3c3a3a(0x1b7), (_0x4c8318) => {
  const _0x12c956 = _0x3c3a3a;
  let _0x404b7b = {};
  try {
    _0x404b7b = _0x4c8318[_0x12c956(0x1bb)]
      ? _0x4c8318["data"][_0x12c956(0x1dc)]()
      : {};
  } catch {}
  const _0x55d037 = platformOrigin(_0x404b7b["u"]),
    _0x456d2c = [
      self["registration"][_0x12c956(0x1cd)](
        String(_0x404b7b["title"] || _0x12c956(0x1b6))[_0x12c956(0x1ef)](
          0x0,
          0x50,
        ),
        {
          body: String(_0x404b7b[_0x12c956(0x1b3)] || "")[_0x12c956(0x1ef)](
            0x0,
            0xc8,
          ),
          icon: "/icons/icon-192.png",
          badge: "/icons/icon-192.png",
          tag:
            _0x404b7b["tag"] ||
            (_0x404b7b["c"] ? "vr-campaign-" + _0x404b7b["c"] : "vr"),
          data: {
            url:
              typeof _0x404b7b[_0x12c956(0x1e2)] === _0x12c956(0x1cf)
                ? _0x404b7b[_0x12c956(0x1e2)]
                : _0x12c956(0x1a3),
            c: Number(_0x404b7b["c"]) || 0x0,
            u: _0x55d037,
          },
        },
      ),
    ];
  (_0x55d037 &&
    typeof _0x404b7b["t"] === _0x12c956(0x1cf) &&
    _0x456d2c[_0x12c956(0x1b7)](
      fetch(_0x55d037 + _0x12c956(0x1bc), {
        method: _0x12c956(0x1eb),
        headers: { "Content-Type": _0x12c956(0x1d6) },
        body: JSON[_0x12c956(0x1de)]({ token: _0x404b7b["t"] }),
      })
        [_0x12c956(0x1a4)]((_0xef35b4) =>
          _0xef35b4["ok"] ? _0xef35b4["json"]() : null,
        )
        [_0x12c956(0x1a4)]((_0x4115c0) =>
          tellClients({
            type: "vr-push-confirmed",
            gold: _0x4115c0 ? Number(_0x4115c0[_0x12c956(0x1a6)]) || 0x0 : 0x0,
          }),
        )
        ["catch"](() => {}),
    ),
    _0x4c8318["waitUntil"](Promise[_0x12c956(0x1a7)](_0x456d2c)));
}),
  self[_0x3c3a3a(0x1d3)](_0x3c3a3a(0x1ca), (_0x159e1e) => {
    const _0x19c148 = _0x3c3a3a;
    _0x159e1e[_0x19c148(0x1f6)]["close"]();
    const _0x31ea41 = _0x159e1e[_0x19c148(0x1f6)][_0x19c148(0x1bb)] || {};
    _0x159e1e[_0x19c148(0x1a9)](
      (async () => {
        const _0x213071 = _0x19c148;
        _0x31ea41["u"] &&
          fetch(_0x31ea41["u"] + _0x213071(0x1c8), {
            method: _0x213071(0x1eb),
            keepalive: !![],
            headers: { "Content-Type": _0x213071(0x1d6) },
            body: JSON[_0x213071(0x1de)](
              _0x31ea41["c"] ? { c: _0x31ea41["c"] } : {},
            ),
          })[_0x213071(0x1cb)](() => {});
        let _0x364e7d = new URL(
          "/?src=push",
          self[_0x213071(0x1b1)][_0x213071(0x1b2)],
        );
        try {
          const _0x1729ce = new URL(
            _0x31ea41[_0x213071(0x1e2)] || "/",
            self["location"][_0x213071(0x1b2)],
          );
          if (_0x1729ce[_0x213071(0x1b2)] === self[_0x213071(0x1b1)]["origin"])
            _0x364e7d = _0x1729ce;
        } catch {}
        const _0x429641 = await self[_0x213071(0x1d0)][_0x213071(0x1c5)]({
            type: "window",
            includeUncontrolled: !![],
          }),
          _0x2ec84d = _0x429641[_0x213071(0x1c4)](
            (_0x307b03) =>
              new URL(_0x307b03["url"])[_0x213071(0x1b2)] ===
              self[_0x213071(0x1b1)][_0x213071(0x1b2)],
          );
        if (_0x2ec84d) {
          (await _0x2ec84d["focus"](),
            _0x2ec84d["postMessage"]({
              type: "vr-push-open",
              url: _0x364e7d[_0x213071(0x1ba)] + _0x364e7d[_0x213071(0x1dd)],
            }));
          return;
        }
        await self["clients"][_0x213071(0x1b4)](_0x364e7d[_0x213071(0x1a2)]);
      })(),
    );
  }));
