// assets__main-Bs7z9e_r 247 — x5d322a
// Lines 88905-89234 of readable/assets__main-Bs7z9e_r.pretty.js (statement-aligned).
const sg = new Map(),
  I2 = new Map(),
  k2 = new Map(),
  il = new Map(),
  Io = new Map(),
  Hs = new Map(),
  $0 = new Map(),
  qM = ht[_0x5d322a(0x1d54)](qt, _0x5d322a(0x5d4));
let Rt = !0x1;
function ki() {
  const _0x5de219 = _0x5d322a,
    _0x29100d = [...ee[_0x5de219(0x1e01)]()]
      [_0x5de219(0x3f4)]((_0xa2a5d3) => !_0xa2a5d3[_0x5de219(0x87e)])
      [_0x5de219(0x164b)]((_0x15a2dc) => ({
        id: _0x15a2dc["id"],
        type: _0x15a2dc[_0x5de219(0x58f)],
        x: _0x15a2dc["x"],
        y: _0x15a2dc["y"],
        z: _0x15a2dc["z"],
        qx: _0x15a2dc["qx"],
        qy: _0x15a2dc["qy"],
        qz: _0x15a2dc["qz"],
        qw: _0x15a2dc["qw"],
        vx: _0x15a2dc["vx"],
        vy: _0x15a2dc["vy"],
        vz: _0x15a2dc["vz"],
        aux1: _0x15a2dc["aux1"],
        aux2: _0x15a2dc[_0x5de219(0x28e)],
        hp: _0x15a2dc["hp"],
        ownerName: _0x15a2dc[_0x5de219(0x1b8)],
        cargoId: Hs[_0x5de219(0x11b7)](_0x15a2dc["id"]),
        camo: _0x15a2dc[_0x5de219(0x3b9)] ?? 0x0,
        armor: _0x15a2dc[_0x5de219(0xa26)] ?? 0x0,
        planet: _0x15a2dc[_0x5de219(0x1ed3)],
        transferLowSeen: _0x15a2dc[_0x5de219(0xdd9)],
        transferLockUntil: _0x15a2dc[_0x5de219(0xb40)],
        mortarReadyAt: _0x15a2dc[_0x5de219(0x1807)],
        radioModule: _0x15a2dc[_0x5de219(0xbec)],
        homeX: _0x15a2dc["homeX"],
        homeY: _0x15a2dc["homeY"],
        homeZ: _0x15a2dc[_0x5de219(0x1d66)],
        remoteOrder:
          _0x15a2dc[_0x5de219(0xbec)] &&
          Cl(_0x15a2dc["type"]) &&
          _0x15a2dc["driver"] !== -0x1 &&
          !dh(_0x15a2dc)
            ? dm(_0x15a2dc)
            : _0x15a2dc[_0x5de219(0x933)],
      }));
  (Pr(qM, _0x29100d), (Rt = !0x1));
}
var xw, _w;
if (_0x4a80b7[_0x5d322a(0x1dbc)](qM)) {
  const e = JSON[_0x5d322a(0x690)](
    _0x4a80b7["readFileSync"](qM, _0x5d322a(0x157e)),
  );
  for (const t of e) {
    if (
      t[_0x5d322a(0x58f)] < 0x0 ||
      !(t[_0x5d322a(0x58f)] in Bn) ||
      t["hp"] <= 0x0
    )
      continue;
    const n = {
      id: t["id"],
      type: t[_0x5d322a(0x58f)],
      x: t["x"],
      y: t["y"],
      z: t["z"],
      qx: t["qx"],
      qy: t["qy"],
      qz: t["qz"],
      qw: t["qw"],
      vx: t["vx"],
      vy: t["vy"],
      vz: t["vz"],
      aux1: t["aux1"],
      aux2: t[_0x5d322a(0x28e)],
      hp: Math["min"](t["hp"], Bn[t[_0x5d322a(0x58f)]]),
      driver: -0x1,
      owner: -0x1,
      ownerName: t[_0x5d322a(0x1b8)] || "",
      passengers: [],
      camo: ge(t[_0x5d322a(0x3b9)] ?? 0x0, 0x0, 0x4),
      armor: ge(t["armor"] ?? 0x0, 0x0, ZN(t[_0x5d322a(0x58f)])),
      planet:
        t[_0x5d322a(0x1ed3)] === C[_0x5d322a(0x465)]
          ? C[_0x5d322a(0x465)]
          : C["EARTH"],
      transferLowSeen: t[_0x5d322a(0xdd9)] ?? !0x0,
      transferLockUntil: t[_0x5d322a(0xb40)],
      mortarReadyAt: t[_0x5d322a(0x1807)],
      radioModule: t[_0x5d322a(0xbec)] === !0x0,
      remoteOrder: t["remoteOrder"]
        ? {
            ...t["remoteOrder"],
            station: { ...t[_0x5d322a(0x933)][_0x5d322a(0x135d)] },
            mode:
              t[_0x5d322a(0x933)][_0x5d322a(0x42a)] === "manual"
                ? _0x5d322a(0x1564)
                : t[_0x5d322a(0x933)][_0x5d322a(0x42a)],
            target:
              ((xw = t[_0x5d322a(0x933)][_0x5d322a(0xe92)]) == null
                ? void 0x0
                : xw[_0x5d322a(0x10d4)]) === _0x5d322a(0x1713)
                ? t[_0x5d322a(0x933)][_0x5d322a(0xe92)]
                : void 0x0,
            escort:
              ((_w = t[_0x5d322a(0x933)][_0x5d322a(0x70a)]) == null
                ? void 0x0
                : _w[_0x5d322a(0x10d4)]) === _0x5d322a(0x1369) &&
              !t["remoteOrder"][_0x5d322a(0x1f34)]
                ? void 0x0
                : t["remoteOrder"][_0x5d322a(0x70a)],
          }
        : void 0x0,
      homeX: t["homeX"],
      homeY: t["homeY"],
      homeZ: t["homeZ"],
    };
    (ee[_0x5d322a(0x124)](n["id"], n),
      (Ra = Math[_0x5d322a(0x1267)](Ra, n["id"] + 0x1)));
  }
  for (const t of e) {
    const n = ee[_0x5d322a(0x11b7)](t["id"]),
      o =
        t["cargoId"] === void 0x0
          ? void 0x0
          : ee[_0x5d322a(0x11b7)](t["cargoId"]);
    !n ||
      n[_0x5d322a(0x58f)] !== I[_0x5d322a(0xb63)] ||
      !o ||
      o["id"] === n["id"] ||
      !SS(o[_0x5d322a(0x58f)]) ||
      (n["planet"] ?? 0x0) !== (o[_0x5d322a(0x1ed3)] ?? 0x0) ||
      Hs[_0x5d322a(0x448)](o["id"]) ||
      Io[_0x5d322a(0x448)](n["id"]) ||
      Io[_0x5d322a(0x448)](o["id"]) ||
      (Hs[_0x5d322a(0x124)](n["id"], o["id"]),
      Io[_0x5d322a(0x124)](o["id"], n["id"]),
      delete o[_0x5d322a(0x933)]);
  }
}
const e4 = ht["join"](qt, _0x5d322a(0x383));
let vn = !0x1;
const xa = 0x64,
  z2 = 0x14;
function ly() {
  const _0x929034 = _0x5d322a,
    _0x3930ee = [...Re[_0x929034(0x1e01)]()]
      [_0x929034(0x3f4)](
        (_0x22230e) =>
          !_0x22230e[_0x929034(0xfda)] &&
          !_0x22230e[_0x929034(0xa4e)] &&
          !_0x22230e["operationAlly"] &&
          !_0x22230e[_0x929034(0xabb)],
      )
      ["map"]((_0x522fd8) => ({
        id: _0x522fd8["id"],
        ownerName: _0x522fd8[_0x929034(0x1b8)],
        x: _0x522fd8["x"],
        y: _0x522fd8["y"],
        z: _0x522fd8["z"],
        yaw: _0x522fd8[_0x929034(0x17d5)],
        hp: _0x522fd8["hp"],
        armor: _0x522fd8["armor"],
        remoteOrder: _0x522fd8[_0x929034(0x933)],
        planet: _0x522fd8[_0x929034(0x1ed3)],
      }));
  (_0x4a80b7[_0x929034(0x14ce)](e4, JSON[_0x929034(0x8f9)](_0x3930ee)),
    (vn = !0x1));
}
function bl(_0x4c6499) {
  return {
    targetBotId: -0x1,
    aggroT: 0x0,
    reactT: 0x0,
    burstLeft: 0x0,
    burstPauseT: 0x0,
    wanderTarget: null,
    wanderT: 0x0,
    prone: !0x1,
    proneT: 0x0,
    proneCd: 0x0,
  };
}
var Ow;
try {
  const e = JSON[_0x5d322a(0x690)](
    _0x4a80b7["readFileSync"](e4, _0x5d322a(0x157e)),
  );
  for (const t of e) {
    if (!t[_0x5d322a(0x1b8)] || t["hp"] <= 0x0) continue;
    const n = {
      id: t["id"],
      ownerName: t["ownerName"],
      ownerPid: -0x1,
      planet: t[_0x5d322a(0x1ed3)] ?? C[_0x5d322a(0x9e2)],
      remoteOrder:
        ((Ow = t[_0x5d322a(0x933)]) == null
          ? void 0x0
          : Ow[_0x5d322a(0x42a)]) === _0x5d322a(0x3f3)
          ? {
              ...t[_0x5d322a(0x933)],
              mode: "idle",
              status: "Restarting\x20·\x20holding\x20position",
            }
          : t[_0x5d322a(0x933)],
      hostile: !0x1,
      x: t["x"],
      y: t["y"],
      z: t["z"],
      yaw: t[_0x5d322a(0x17d5)] || 0x0,
      hp: Math[_0x5d322a(0x48a)](t["hp"], xa),
      armor: t[_0x5d322a(0xa26)] ?? [],
      targetPid: -0x1,
      targetVehicleId: -0x1,
      reloadT: 0x0,
      fireCd: 0x0,
      mag: 0x1e,
      spawnX: t["x"],
      spawnZ: t["z"],
      ...bl(t["id"]),
    };
    (Re["set"](n["id"], n), (Fi = Math["max"](Fi, n["id"] + 0x1)));
  }
} catch {}
const jM = new cP(),
  t4 = ht["join"](qt, _0x5d322a(0x1bce));
let Un = !0x1;
function cT(_0x50c6df) {
  const _0x53bf74 = _0x5d322a;
  return new W(L[_0x53bf74(0x81b)])
    [_0x53bf74(0x1ac4)](_0x50c6df["id"])
    ["u8"](_0x50c6df[_0x53bf74(0x58f)])
    [_0x53bf74(0x416)](_0x50c6df["x"])
    ["f32"](_0x50c6df["y"])
    ["f32"](_0x50c6df["z"])
    [_0x53bf74(0x1ac4)](_0x50c6df["hp"])
    ["u8"](_0x50c6df["baby"] ? 0x1 : 0x0);
}
function n4() {
  const _0x583569 = _0x5d322a;
  (_0x4a80b7[_0x583569(0x14ce)](
    t4,
    JSON["stringify"]([...Bt[_0x583569(0x1e01)]()]),
  ),
    (Un = !0x1));
}
try {
  const e = JSON["parse"](_0x4a80b7["readFileSync"](t4, _0x5d322a(0x157e)));
  for (const t of e) {
    if (t[_0x5d322a(0x58f)] < 0x0 || !(t["type"] in Z0) || t["hp"] <= 0x0)
      continue;
    const n = {
      id: t["id"],
      type: t[_0x5d322a(0x58f)],
      x: t["x"],
      y: t["y"],
      z: t["z"],
      yaw: t[_0x5d322a(0x17d5)] || 0x0,
      hp: Math[_0x5d322a(0x48a)](t["hp"], Z0[t[_0x5d322a(0x58f)]]),
      baby: !!t[_0x5d322a(0x1f68)],
      playerCared: t[_0x5d322a(0x1a80)] ?? !0x0,
      fed: Number(t["fed"]) || 0x0,
      sheared: !!t["sheared"],
      milkReady: !!t[_0x5d322a(0x2073)],
      watered: Number(t["watered"]) || 0x0,
      ageT: t["ageT"] ?? 0x0,
      loveT: 0x0,
      breedCd: t["breedCd"] ?? 0x0,
      wanderX: t["x"],
      wanderZ: t["z"],
      wanderT: 0x0,
      herdId: t[_0x5d322a(0x16bc)] ?? S2++,
      behavior: 0x0,
      behaviorT: 0x1 + Math[_0x5d322a(0xf8b)]() * 0x4,
      fleeT: 0x0,
      ...(sc(t[_0x5d322a(0x58f)])
        ? { pitch: 0x0, wanderY: t["y"], airT: 0x0 }
        : {}),
    };
    (Bt[_0x5d322a(0x124)](n["id"], n),
      (Kc = Math["max"](Kc, n["id"] + 0x1)),
      (S2 = Math[_0x5d322a(0x1267)](S2, (n["herdId"] ?? 0x0) + 0x1)));
  }
} catch {}
const Lh = 0x3,
  oO = 0x22,
  ig = [0x1e, 0x3c],
  rg = () => ig[0x0] + Math[_0x5d322a(0xf8b)]() * (ig[0x1] - ig[0x0]),
  I$ = 0.6,
  k$ = 0x12,
  XM = 0x2,
  z$ = 0x4,
  L$ = 2.6;
function C$(_0x3f86d2) {
  const _0x297b1d = _0x5d322a,
    _0x174f3f = Math[_0x297b1d(0x17b0)](_0x3f86d2["x"]),
    _0x3ff4e4 = Math[_0x297b1d(0x17b0)](_0x3f86d2["z"]),
    _0x529b0a = Math[_0x297b1d(0x17b0)](_0x3f86d2["y"]);
  for (const [_0x2a2069, _0x240738] of [
    [0x0, 0x0],
    [0x1, 0x0],
    [-0x1, 0x0],
    [0x0, 0x1],
    [0x0, -0x1],
  ])
    for (let _0x581b91 = -0x1; _0x581b91 <= 0x0; _0x581b91++) {
      const _0x5399c3 = _0x174f3f + _0x2a2069,
        _0x3472fa = _0x529b0a + _0x581b91,
        _0x126c03 = _0x3ff4e4 + _0x240738;
      if (
        B["getBlock"](_0x5399c3, _0x3472fa, _0x126c03) === f[_0x297b1d(0x13cd)]
      )
        return (
          Ue(_0x5399c3, _0x3472fa, _0x126c03, f[_0x297b1d(0xbcb)], 0x0, !0x0),
          (_0x3f86d2[_0x297b1d(0x693)] = (_0x3f86d2["fed"] ?? 0x0) + 0x1),
          (_0x3f86d2[_0x297b1d(0x86d)] = 2.2),
          (_0x3f86d2[_0x297b1d(0x9bc)] =
            0x1a + Math[_0x297b1d(0xf8b)]() * 0x18),
          (Un = !0x0),
          !0x0
        );
    }
  return (
    (_0x3f86d2[_0x297b1d(0x9bc)] = 0x8 + Math[_0x297b1d(0xf8b)]() * 0x8),
    !0x1
  );
}
