// sw 01 — x4a8993
// Lines 1-305 of readable/sw.pretty.js (statement-aligned).
const _0x3c3a3a = _0x322d;
(function (_0x2e426a, _0x36a1b0) {
  const _0xb64fa8 = _0x322d,
    _0x122ab2 = _0x2e426a();
  while (!![]) {
    try {
      const _0x240ae8 =
        -parseInt(_0xb64fa8(0x1e6)) / 0x1 +
        parseInt(_0xb64fa8(0x1ab)) / 0x2 +
        -parseInt(_0xb64fa8(0x1c6)) / 0x3 +
        (-parseInt(_0xb64fa8(0x1b9)) / 0x4) *
          (-parseInt(_0xb64fa8(0x1f1)) / 0x5) +
        (parseInt(_0xb64fa8(0x1c1)) / 0x6) *
          (parseInt(_0xb64fa8(0x1ec)) / 0x7) +
        -parseInt(_0xb64fa8(0x1a8)) / 0x8 +
        -parseInt(_0xb64fa8(0x1ad)) / 0x9;
      if (_0x240ae8 === _0x36a1b0) break;
      else _0x122ab2["push"](_0x122ab2["shift"]());
    } catch (_0x1c03c9) {
      _0x122ab2["push"](_0x122ab2["shift"]());
    }
  }
})(_0x4c5a, 0xaa6b1);
const BUILD_ID = _0x3c3a3a(0x1db),
  CACHE_PREFIX = _0x3c3a3a(0x1ae),
  CACHE = "" + CACHE_PREFIX + BUILD_ID,
  SHELL = [
    "/",
    _0x3c3a3a(0x1e9),
    _0x3c3a3a(0x1b0),
    _0x3c3a3a(0x1e3),
    _0x3c3a3a(0x1be),
  ],
  DEV_RESET_ORIGIN =
    self[_0x3c3a3a(0x1b1)][_0x3c3a3a(0x1e4)] === _0x3c3a3a(0x1f0) &&
    self[_0x3c3a3a(0x1b1)]["hostname"] === _0x3c3a3a(0x1b5) &&
    self[_0x3c3a3a(0x1b1)][_0x3c3a3a(0x1af)] === _0x3c3a3a(0x1e7);
async function cacheModuleGraph(_0x61dea2, _0x2e47a3) {
  const _0x4a8993 = _0x3c3a3a,
    _0x5ed2b6 = [
      new URL(_0x2e47a3, self[_0x4a8993(0x1b1)]["origin"])[_0x4a8993(0x1a2)],
    ],
    _0xdf3ead = new Set();
  while (_0x5ed2b6[_0x4a8993(0x1d2)]) {
    const _0x12e87d = _0x5ed2b6[_0x4a8993(0x1f9)]();
    if (!_0x12e87d || _0xdf3ead["has"](_0x12e87d)) continue;
    _0xdf3ead["add"](_0x12e87d);
    const _0x453e91 = await fetch(_0x12e87d, { cache: _0x4a8993(0x1bf) });
    if (!_0x453e91["ok"]) continue;
    await _0x61dea2[_0x4a8993(0x1d8)](_0x12e87d, _0x453e91[_0x4a8993(0x1d5)]());
    const _0xdf5767 = _0x453e91[_0x4a8993(0x1c7)]["get"]("content-type") || "";
    if (
      !_0xdf5767[_0x4a8993(0x1b8)](_0x4a8993(0x1e5)) &&
      !_0xdf5767[_0x4a8993(0x1b8)](_0x4a8993(0x1ac))
    )
      continue;
    const _0x70ca5c = await _0x453e91["text"]();
    for (const _0x37710d of _0x70ca5c[_0x4a8993(0x1c5)](
      /["']([^"']+\.(?:js|css))["']/g,
    )) {
      const _0x1df09e = new URL(_0x37710d[0x1], _0x12e87d);
      if (
        _0x1df09e[_0x4a8993(0x1b2)] ===
          self[_0x4a8993(0x1b1)][_0x4a8993(0x1b2)] &&
        _0x1df09e["pathname"]["startsWith"](_0x4a8993(0x1f7))
      )
        _0x5ed2b6[_0x4a8993(0x1b7)](_0x1df09e[_0x4a8993(0x1a2)]);
    }
    if (_0xdf5767[_0x4a8993(0x1b8)]("text/html"))
      for (const _0x374dee of _0x70ca5c[_0x4a8993(0x1c5)](
        /(?:src|href)=["']([^"']+)["']/g,
      )) {
        const _0xd3f80f = new URL(_0x374dee[0x1], _0x12e87d);
        if (_0xd3f80f[_0x4a8993(0x1b2)] === self["location"][_0x4a8993(0x1b2)])
          _0x5ed2b6[_0x4a8993(0x1b7)](_0xd3f80f[_0x4a8993(0x1a2)]);
      }
  }
}
function _0x4c5a() {
  const _0x3d366f = [
    "z29Sza",
    "ywXS",
    "mZiYmteYrKTNCwLP",
    "D2fPDfvUDgLS",
    "y29UDgvUDc10ExbL",
    "mJe3mJmXoeHeBNvPvG",
    "AMf2yxnJCMLWDa",
    "mti4mtu0mtvrEgrQuxa",
    "DM94zwWTCNvZAc1WD2eT",
    "Cg9YDa",
    "l2zHDMLJB24UAwnV",
    "Bg9JyxrPB24",
    "B3jPz2LU",
    "yM9KEq",
    "B3bLBLDPBMrVDW",
    "mJeYlJqZlJe1os4Ynta",
    "vM94zwWGuNvZAa",
    "ChvZAa",
    "Aw5JBhvKzxm",
    "mta4DfbMvgXP",
    "Cgf0Ag5HBwu",
    "zgf0yq",
    "l3yXl3b1C2GVy29UzMLYBq",
    "sw52ywXPzcbYzxnWB25ZzsbMB3iG",
    "l2LJB25Zl2LJB24TnteYlNbUzW",
    "CMvSB2fK",
    "Cg9ZDe1LC3nHz2u",
    "mtj4C1jRr3u",
    "BwfW",
    "Bw9Kzq",
    "zMLUza",
    "Bwf0y2HbBgW",
    "nZq5mZKXC0jRC2zx",
    "AgvHzgvYCW",
    "l3yXl3b1C2GVy2XPy2S",
    "CMvZCg9UzfDPDgG",
    "BM90AwzPy2f0Aw9Uy2XPy2S",
    "y2f0y2G",
    "CMvNAxn0CMf0Aw9U",
    "C2HVD05VDgLMAwnHDgLVBG",
    "zgvSzxrL",
    "C3rYAw5N",
    "y2XPzw50CW",
    "Bwv0Ag9K",
    "BgvUz3rO",
    "ywrKrxzLBNrmAxn0zw5LCG",
    "ywn0AxzHDgu",
    "y2XVBMu",
    "yxbWBgLJyxrPB24VANnVBG",
    "zMfIBgvJCMfMDc1WD2eT",
    "Chv0",
    "zMLSDgvY",
    "B3bLBG",
    "Bxy1C2f3BMeTANrSmMTH",
    "ANnVBG",
    "C2vHCMnO",
    "C3rYAw5NAwz5",
    "zMv0y2G",
    "Bwf0y2G",
    "DgvZDa",
    "DxjS",
    "l2LJB25Zl2LJB24TmtKYlNbUzW",
    "ChjVDg9JB2W",
    "Dgv4Dc9ODg1S",
    "mtG5ntqZrw1NAvfe",
    "nte3na",
    "A2v5CW",
    "l21HBMLMzxn0lNDLyM1HBMLMzxn0",
    "D2LUzg93",
    "ue9tva",
    "mJiYote5owL0wujKtq",
    "C2TPCfDHAxrPBMC",
    "CMvXDwvZDa",
    "C2XPy2u",
    "Ahr0CdO",
    "mtyYnJG1s3fkq2D2",
    "Dw5YzwDPC3rLCG",
    "y2XHAw0",
    "C3rHCNrZv2L0Aa",
    "BMf2AwDHDgu",
    "BM90AwzPy2f0Aw9U",
    "l2fZC2v0CY8",
    "z2v0",
    "C2HPzNq",
    "AhjLzG",
    "lZ9ZCMm9ChvZAa",
    "DgHLBG",
    "C3rHDhvZ",
  ];
  _0x4c5a = function () {
    return _0x3d366f;
  };
  return _0x4c5a();
}
(self["addEventListener"]("install", (_0x49436a) => {
  const _0x53971 = _0x3c3a3a;
  if (DEV_RESET_ORIGIN) {
    _0x49436a[_0x53971(0x1a9)](self["skipWaiting"]());
    return;
  }
  _0x49436a[_0x53971(0x1a9)](
    caches[_0x53971(0x1da)](CACHE)
      [_0x53971(0x1a4)](async (_0x430a51) => {
        (await _0x430a51["addAll"](SHELL),
          await cacheModuleGraph(_0x430a51, "/"));
      })
      [_0x53971(0x1a4)](() => self[_0x53971(0x1ed)]()),
  );
}),
  self["addEventListener"](_0x3c3a3a(0x1d4), (_0xf6de24) => {
    const _0x2f8b5f = _0x3c3a3a;
    if (DEV_RESET_ORIGIN) {
      _0xf6de24["waitUntil"](
        caches[_0x2f8b5f(0x1e8)]()
          [_0x2f8b5f(0x1a4)]((_0x12e649) =>
            Promise[_0x2f8b5f(0x1a7)](
              _0x12e649["map"]((_0x2b51b1) =>
                caches[_0x2f8b5f(0x1ce)](_0x2b51b1),
              ),
            ),
          )
          [_0x2f8b5f(0x1a4)](() => self[_0x2f8b5f(0x1d0)]["claim"]())
          ["then"](() => self[_0x2f8b5f(0x1cc)][_0x2f8b5f(0x1f2)]()),
      );
      return;
    }
    _0xf6de24[_0x2f8b5f(0x1a9)](
      caches["keys"]()
        [_0x2f8b5f(0x1a4)]((_0x137fae) =>
          Promise["all"](
            _0x137fae[_0x2f8b5f(0x1d9)](
              (_0x362101) =>
                (_0x362101[_0x2f8b5f(0x1f4)](CACHE_PREFIX) ||
                  _0x362101["startsWith"](_0x2f8b5f(0x1d7))) &&
                _0x362101 !== CACHE,
            )[_0x2f8b5f(0x1c2)]((_0x2b0cff) => caches["delete"](_0x2b0cff)),
          ),
        )
        [_0x2f8b5f(0x1a4)](() => purgePoisonedEntries())
        [_0x2f8b5f(0x1a4)](() => self[_0x2f8b5f(0x1d0)][_0x2f8b5f(0x1f3)]()),
    );
  }));
async function networkFirst(_0x13a018, _0x2b5851) {
  const _0xecee5a = _0x3c3a3a,
    _0x436657 = await caches[_0xecee5a(0x1da)](CACHE),
    _0x2d028f = new URL(_0x13a018[_0xecee5a(0x1e2)])[_0xecee5a(0x1ba)],
    _0x15eb65 =
      _0x13a018[_0xecee5a(0x1c3)] === _0xecee5a(0x1f5) &&
      !isStaticAssetRequest(_0x13a018),
    _0x2cc895 = _0x15eb65 || _0x2d028f === "/" || _0x2d028f === "/index.html";
  try {
    const _0x1c4559 = await fetch(_0x13a018),
      _0x42b66e =
        _0x1c4559[_0xecee5a(0x1c7)][_0xecee5a(0x1f8)](_0xecee5a(0x1aa)) || "",
      _0xd2a6ef =
        _0x1c4559["ok"] && _0x42b66e[_0xecee5a(0x1b8)](_0xecee5a(0x1e5));
    if (_0x1c4559["ok"] && (_0x2cc895 || !_0xd2a6ef)) {
      if (_0x1c4559[_0xecee5a(0x1a5)] !== 0xce)
        try {
          await _0x436657[_0xecee5a(0x1d8)](
            _0x13a018,
            _0x1c4559[_0xecee5a(0x1d5)](),
          );
        } catch {}
      return _0x1c4559;
    }
    throw new Error(_0xecee5a(0x1bd) + _0x13a018[_0xecee5a(0x1e2)]);
  } catch (_0x2090a2) {
    const _0x539ecf = await _0x436657["match"](_0x13a018),
      _0x2cff9f = _0x539ecf?.["headers"]["get"]("content-type") || "";
    if (_0x539ecf && (_0x2cc895 || !_0x2cff9f["includes"](_0xecee5a(0x1e5))))
      return _0x539ecf;
    if (_0x2b5851) {
      const _0x535131 = await _0x436657[_0xecee5a(0x1e0)](_0x2b5851);
      if (_0x535131) return _0x535131;
    }
    throw _0x2090a2;
  }
}
async function purgePoisonedEntries() {
  const _0x30705e = _0x3c3a3a,
    _0x4fc17c = await caches[_0x30705e(0x1da)](CACHE),
    _0x4c3510 = await _0x4fc17c[_0x30705e(0x1e8)]();
  await Promise[_0x30705e(0x1a7)](
    _0x4c3510[_0x30705e(0x1c2)](async (_0xd6865b) => {
      const _0x45a40b = _0x30705e,
        _0x54e312 = new URL(_0xd6865b["url"]);
      if (
        !/\.(?:js|mjs|css|wasm|json|map|png|webp|svg|ico|webmanifest)$/i[
          "test"
        ](_0x54e312[_0x45a40b(0x1ba)])
      )
        return;
      const _0x1d3e03 = await _0x4fc17c[_0x45a40b(0x1e0)](_0xd6865b);
      (_0x1d3e03?.[_0x45a40b(0x1c7)]["get"](_0x45a40b(0x1aa)) || "")[
        _0x45a40b(0x1b8)
      ](_0x45a40b(0x1e5)) && (await _0x4fc17c["delete"](_0xd6865b));
    }),
  );
}
function isStaticAssetRequest(_0x502bfb) {
  const _0x3d4d4c = _0x3c3a3a,
    _0x17dc23 = new URL(_0x502bfb["url"])[_0x3d4d4c(0x1ba)];
  return (
    _0x17dc23[_0x3d4d4c(0x1f4)](_0x3d4d4c(0x1f7)) ||
    /\.(?:js|mjs|css|wasm|json|map|png|webp|svg|ico|webmanifest)$/i[
      _0x3d4d4c(0x1e1)
    ](_0x17dc23)
  );
}
self["addEventListener"](_0x3c3a3a(0x1df), (_0xbedf22) => {
  const _0xe361e = _0x3c3a3a;
  if (DEV_RESET_ORIGIN) return;
  if (_0xbedf22[_0xe361e(0x1ee)][_0xe361e(0x1d1)] !== "GET") return;
  const _0x475bdb = new URL(_0xbedf22["request"][_0xe361e(0x1e2)]);
  if (_0x475bdb["origin"] !== self[_0xe361e(0x1b1)]["origin"]) return;
  if (
    _0xbedf22["request"][_0xe361e(0x1c3)] === _0xe361e(0x1f5) &&
    !isStaticAssetRequest(_0xbedf22["request"])
  ) {
    _0xbedf22[_0xe361e(0x1c9)](networkFirst(_0xbedf22["request"], "/"));
    return;
  }
  _0xbedf22[_0xe361e(0x1c9)](networkFirst(_0xbedf22[_0xe361e(0x1ee)]));
});
