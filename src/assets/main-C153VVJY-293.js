// main-C153VVJY 293 — x44a014
// Lines 111713-112036 of readable/assets/main-C153VVJY.pretty.js (statement-aligned).
const BR = new Map(),
  FE = new Map(),
  $E = new Map(),
  Ha = new Map(),
  Fo = new Map(),
  li = new Map(),
  N2 = new Map(),
  HT = se["join"](Ue, "vehicles.json");
let re = !0x1;
function nr() {
  const _0x347891 = _0x44a014,
    _0x5a3c1e = [...W[_0x347891(0x642)]()]
      [_0x347891(0x1ca)]((_0x2cbd7b) => !_0x2cbd7b["raid"])
      [_0x347891(0x73a)]((_0x1c701b) => ({
        id: _0x1c701b["id"],
        type: _0x1c701b[_0x347891(0x1556)],
        x: _0x1c701b["x"],
        y: _0x1c701b["y"],
        z: _0x1c701b["z"],
        qx: _0x1c701b["qx"],
        qy: _0x1c701b["qy"],
        qz: _0x1c701b["qz"],
        qw: _0x1c701b["qw"],
        vx: _0x1c701b["vx"],
        vy: _0x1c701b["vy"],
        vz: _0x1c701b["vz"],
        aux1: _0x1c701b["aux1"],
        aux2: _0x1c701b[_0x347891(0x432)],
        hp: _0x1c701b["hp"],
        ownerName: _0x1c701b["ownerName"],
        cargoId: li[_0x347891(0xda9)](_0x1c701b["id"]),
        camo: _0x1c701b[_0x347891(0x1cbc)] ?? 0x0,
        armor: _0x1c701b[_0x347891(0x16a5)] ?? 0x0,
        planet: _0x1c701b[_0x347891(0x529)],
        transferLowSeen: _0x1c701b["transferLowSeen"],
        transferLockUntil: _0x1c701b[_0x347891(0x1390)],
        mortarReadyAt: _0x1c701b["mortarReadyAt"],
        radioModule: _0x1c701b[_0x347891(0xf3e)],
        homeX: _0x1c701b[_0x347891(0x117d)],
        homeY: _0x1c701b[_0x347891(0x691)],
        homeZ: _0x1c701b[_0x347891(0x9a8)],
        remoteOrder:
          _0x1c701b[_0x347891(0xf3e)] &&
          Df(_0x1c701b[_0x347891(0x1556)]) &&
          _0x1c701b["driver"] !== -0x1 &&
          !Ou(_0x1c701b)
            ? yp(_0x1c701b)
            : _0x1c701b["remoteOrder"],
      }));
  (Sa(HT, _0x5a3c1e), (re = !0x1));
}
if (_0x27cf81[_0x44a014(0x20e3)](HT)) {
  const t = JSON["parse"](_0x27cf81["readFileSync"](HT, "utf8"));
  for (const e of t) {
    if (e[_0x44a014(0x1556)] < 0x0 || !(e["type"] in an) || e["hp"] <= 0x0)
      continue;
    const n = {
      id: e["id"],
      type: e[_0x44a014(0x1556)],
      x: e["x"],
      y: e["y"],
      z: e["z"],
      qx: e["qx"],
      qy: e["qy"],
      qz: e["qz"],
      qw: e["qw"],
      vx: e["vx"],
      vy: e["vy"],
      vz: e["vz"],
      aux1: e[_0x44a014(0x871)],
      aux2: e["aux2"],
      hp: Math[_0x44a014(0x16e0)](e["hp"], an[e[_0x44a014(0x1556)]]),
      driver: -0x1,
      owner: -0x1,
      ownerName: e[_0x44a014(0x19d2)] || "",
      passengers: [],
      camo: tt(e[_0x44a014(0x1cbc)] ?? 0x0, 0x0, 0x4),
      armor: tt(e["armor"] ?? 0x0, 0x0, Ik(e[_0x44a014(0x1556)])),
      planet:
        e[_0x44a014(0x529)] === D[_0x44a014(0xcbd)]
          ? D[_0x44a014(0xcbd)]
          : D[_0x44a014(0xd62)],
      transferLowSeen: e[_0x44a014(0x50c)] ?? !0x0,
      transferLockUntil: e[_0x44a014(0x1390)],
      mortarReadyAt: e[_0x44a014(0x1466)],
      radioModule: e[_0x44a014(0xf3e)] === !0x0,
      remoteOrder: e[_0x44a014(0x18a)]
        ? {
            ...e["remoteOrder"],
            station: { ...e[_0x44a014(0x18a)]["station"] },
            mode:
              e["remoteOrder"][_0x44a014(0x1f30)] === _0x44a014(0x1dc3)
                ? _0x44a014(0xbe6)
                : e["remoteOrder"]["mode"],
            target:
              e[_0x44a014(0x18a)][_0x44a014(0xef6)]?.[_0x44a014(0x335)] ===
              "vehicle"
                ? e[_0x44a014(0x18a)][_0x44a014(0xef6)]
                : void 0x0,
            escort:
              e[_0x44a014(0x18a)]["escort"]?.[_0x44a014(0x335)] ===
                _0x44a014(0x17d0) && !e[_0x44a014(0x18a)][_0x44a014(0x7e2)]
                ? void 0x0
                : e[_0x44a014(0x18a)][_0x44a014(0x15b2)],
          }
        : void 0x0,
      homeX: e[_0x44a014(0x117d)],
      homeY: e[_0x44a014(0x691)],
      homeZ: e[_0x44a014(0x9a8)],
    };
    (W[_0x44a014(0x1b41)](n["id"], n),
      (jr = Math[_0x44a014(0x723)](jr, n["id"] + 0x1)));
  }
  for (const e of t) {
    const n = W["get"](e["id"]),
      o =
        e["cargoId"] === void 0x0
          ? void 0x0
          : W[_0x44a014(0xda9)](e[_0x44a014(0x5a5)]);
    !n ||
      n[_0x44a014(0x1556)] !== I["HELI"] ||
      !o ||
      o["id"] === n["id"] ||
      !yx(o["type"]) ||
      (n[_0x44a014(0x529)] ?? 0x0) !== (o[_0x44a014(0x529)] ?? 0x0) ||
      li[_0x44a014(0x97a)](o["id"]) ||
      Fo[_0x44a014(0x97a)](n["id"]) ||
      Fo[_0x44a014(0x97a)](o["id"]) ||
      (li[_0x44a014(0x1b41)](n["id"], o["id"]),
      Fo[_0x44a014(0x1b41)](o["id"], n["id"]),
      delete o[_0x44a014(0x18a)]);
  }
}
const m6 = se[_0x44a014(0x282)](Ue, _0x44a014(0xd7e));
let Pn = !0x1;
const hl = 0x64,
  KE = 0x14;
function Dg() {
  const _0x26c49b = _0x44a014,
    _0x357056 = [...rt[_0x26c49b(0x642)]()]
      [_0x26c49b(0x1ca)](
        (_0x1bbab5) =>
          !_0x1bbab5["hostile"] &&
          !_0x1bbab5[_0x26c49b(0x1e14)] &&
          !_0x1bbab5[_0x26c49b(0xdb3)] &&
          !_0x1bbab5["front"],
      )
      [_0x26c49b(0x73a)]((_0x2add7c) => ({
        id: _0x2add7c["id"],
        ownerName: _0x2add7c[_0x26c49b(0x19d2)],
        x: _0x2add7c["x"],
        y: _0x2add7c["y"],
        z: _0x2add7c["z"],
        yaw: _0x2add7c["yaw"],
        hp: _0x2add7c["hp"],
        armor: _0x2add7c[_0x26c49b(0x16a5)],
        remoteOrder: _0x2add7c["remoteOrder"],
        planet: _0x2add7c[_0x26c49b(0x529)],
      }));
  (_0x27cf81["writeFileSync"](m6, JSON[_0x26c49b(0x2043)](_0x357056)),
    (Pn = !0x1));
}
function $f(_0x39f25d) {
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
try {
  const t = JSON[_0x44a014(0x19fc)](
    _0x27cf81[_0x44a014(0x92d)](m6, _0x44a014(0x258)),
  );
  for (const e of t) {
    if (!e[_0x44a014(0x19d2)] || e["hp"] <= 0x0) continue;
    const n = {
      id: e["id"],
      ownerName: e[_0x44a014(0x19d2)],
      ownerPid: -0x1,
      planet: e[_0x44a014(0x529)] ?? D[_0x44a014(0xd62)],
      remoteOrder:
        e[_0x44a014(0x18a)]?.["mode"] === "manual"
          ? {
              ...e[_0x44a014(0x18a)],
              mode: _0x44a014(0xbe6),
              status: "Restarting\x20·\x20holding\x20position",
            }
          : e[_0x44a014(0x18a)],
      hostile: !0x1,
      x: e["x"],
      y: e["y"],
      z: e["z"],
      yaw: e[_0x44a014(0x1593)] || 0x0,
      hp: Math[_0x44a014(0x16e0)](e["hp"], hl),
      armor: e[_0x44a014(0x16a5)] ?? [],
      targetPid: -0x1,
      targetVehicleId: -0x1,
      reloadT: 0x0,
      fireCd: 0x0,
      mag: 0x1e,
      spawnX: e["x"],
      spawnZ: e["z"],
      ...$f(e["id"]),
    };
    (rt[_0x44a014(0x1b41)](n["id"], n),
      (ur = Math[_0x44a014(0x723)](ur, n["id"] + 0x1)));
  }
} catch {}
const bT = new bb(),
  p6 = se[_0x44a014(0x282)](Ue, "animals.json");
let Xn = !0x1;
function h_(_0x4d0a9d) {
  const _0x14f939 = _0x44a014;
  return new F(C[_0x14f939(0x222a)])
    [_0x14f939(0x1e72)](_0x4d0a9d["id"])
    ["u8"](_0x4d0a9d[_0x14f939(0x1556)])
    ["f32"](_0x4d0a9d["x"])
    [_0x14f939(0x1088)](_0x4d0a9d["y"])
    ["f32"](_0x4d0a9d["z"])
    ["u16"](_0x4d0a9d["hp"])
    ["u8"](_0x4d0a9d[_0x14f939(0x1f0)] ? 0x1 : 0x0);
}
function E6() {
  const _0x32d9a3 = _0x44a014;
  (_0x27cf81["writeFileSync"](
    p6,
    JSON[_0x32d9a3(0x2043)]([...Ce[_0x32d9a3(0x642)]()]),
  ),
    (Xn = !0x1));
}
try {
  const t = JSON[_0x44a014(0x19fc)](
    _0x27cf81[_0x44a014(0x92d)](p6, _0x44a014(0x258)),
  );
  for (const e of t) {
    if (
      e[_0x44a014(0x1556)] < 0x0 ||
      !(e[_0x44a014(0x1556)] in G2) ||
      e["hp"] <= 0x0
    )
      continue;
    const n = {
      id: e["id"],
      type: e[_0x44a014(0x1556)],
      x: e["x"],
      y: e["y"],
      z: e["z"],
      yaw: e["yaw"] || 0x0,
      hp: Math["min"](e["hp"], G2[e[_0x44a014(0x1556)]]),
      baby: !!e[_0x44a014(0x1f0)],
      playerCared: e[_0x44a014(0x19d9)] ?? !0x0,
      fed: Number(e[_0x44a014(0x2252)]) || 0x0,
      sheared: !!e["sheared"],
      milkReady: !!e[_0x44a014(0x5da)],
      watered: Number(e[_0x44a014(0x12c7)]) || 0x0,
      ageT: e[_0x44a014(0x6b1)] ?? 0x0,
      loveT: 0x0,
      breedCd: e[_0x44a014(0x1e9e)] ?? 0x0,
      wanderX: e["x"],
      wanderZ: e["z"],
      wanderT: 0x0,
      herdId: e[_0x44a014(0xcd9)] ?? vE++,
      behavior: 0x0,
      behaviorT: 0x1 + Math["random"]() * 0x4,
      fleeT: 0x0,
      ...(Gl(e[_0x44a014(0x1556)])
        ? { pitch: 0x0, wanderY: e["y"], airT: 0x0 }
        : {}),
    };
    (Ce[_0x44a014(0x1b41)](n["id"], n),
      (Pc = Math[_0x44a014(0x723)](Pc, n["id"] + 0x1)),
      (vE = Math[_0x44a014(0x723)](vE, (n["herdId"] ?? 0x0) + 0x1)));
  }
} catch {}
const Wu = 0x3,
  zw = 0x22,
  PR = [0x1e, 0x3c],
  HR = () => PR[0x0] + Math[_0x44a014(0x10b2)]() * (PR[0x1] - PR[0x0]),
  gj = 0.6,
  Mj = 0x12,
  GT = 0x2,
  Rj = 0x4,
  Sj = 2.6;
function Tj(_0x570a81) {
  const _0x52f709 = _0x44a014,
    _0x2eac60 = Math[_0x52f709(0x2f3)](_0x570a81["x"]),
    _0x5c5df0 = Math["floor"](_0x570a81["z"]),
    _0xff6a0e = Math[_0x52f709(0x2f3)](_0x570a81["y"]);
  for (const [_0x34c0cb, _0x2ecf3a] of [
    [0x0, 0x0],
    [0x1, 0x0],
    [-0x1, 0x0],
    [0x0, 0x1],
    [0x0, -0x1],
  ])
    for (let _0x5e9aea = -0x1; _0x5e9aea <= 0x0; _0x5e9aea++) {
      const _0x440559 = _0x2eac60 + _0x34c0cb,
        _0x130b2b = _0xff6a0e + _0x5e9aea,
        _0x491e11 = _0x5c5df0 + _0x2ecf3a;
      if (
        B[_0x52f709(0xcdd)](_0x440559, _0x130b2b, _0x491e11) ===
        l[_0x52f709(0x17f3)]
      )
        return (
          xt(_0x440559, _0x130b2b, _0x491e11, l["DIRT"], 0x0, !0x0),
          (_0x570a81[_0x52f709(0x2252)] = (_0x570a81["fed"] ?? 0x0) + 0x1),
          (_0x570a81[_0x52f709(0xb96)] = 2.2),
          (_0x570a81["grazeCd"] = 0x1a + Math[_0x52f709(0x10b2)]() * 0x18),
          (Xn = !0x0),
          !0x0
        );
    }
  return (
    (_0x570a81[_0x52f709(0x1ab1)] = 0x8 + Math[_0x52f709(0x10b2)]() * 0x8),
    !0x1
  );
}
