// index-BeUlFSPp 31 — suppressor
// Lines 35258-35544 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const rm = 2048,
  Md = [w.GLOCK, w.AK47, w.AWP, w.SHOTGUN],
  _f = [...Md, w.DEAGLE, w.M4A1, w.VECTOR],
  Cc = 64,
  q$ = Md.length * Cc,
  lm = rm + 4 * Cc,
  Uu = lm + q$,
  tf = 256,
  K$ = 8,
  ad = ["scope", "suppressor", "laser", "mag", "light", "grip"],
  Y$ = {
    scope: "Прицел",
    suppressor: "Глушитель",
    laser: "Лазер",
    mag: "Магазин",
    light: "Фонарь",
    grip: "Рукоять",
  },
  j$ = {
    scope: "Scope",
    suppressor: "Suppressor",
    laser: "Laser",
    mag: "Magazine",
    light: "Light",
    grip: "Grip",
  },
  X$ = {
    [w.GLOCK]: ["scope", "suppressor", "laser", "mag", "light"],
    [w.AK47]: ["scope", "suppressor", "laser", "mag", "light"],
    [w.AWP]: ["scope", "suppressor", "laser", "mag", "light"],
    [w.SHOTGUN]: ["light"],
    [w.DEAGLE]: ["scope", "suppressor", "laser", "mag", "light"],
    [w.M4A1]: ["scope", "suppressor", "laser", "mag", "light", "grip"],
    [w.VECTOR]: ["scope", "suppressor", "laser", "mag", "light", "grip"],
  },
  cm = (s, e) => (X$[s] ?? []).includes(e),
  MP = [w.SCOPE_X2, w.SCOPE_X4, w.SCOPE_X8, w.SCOPE_X16, w.SCOPE_HOLO],
  Sd = {
    [w.FLASHLIGHT]: "light",
    [w.SUPPRESSOR]: "suppressor",
    [w.LASER_SIGHT]: "laser",
    [w.SCOPE_X2]: "scope",
    [w.SCOPE_X4]: "scope",
    [w.SCOPE_X8]: "scope",
    [w.SCOPE_X16]: "scope",
    [w.SCOPE_HOLO]: "scope",
    [w.EXT_MAG]: "mag",
    [w.FOREGRIP]: "grip",
  },
  Z$ = Object.keys(Sd).map(Number),
  Q$ = (s) => s in Sd,
  J$ = [void 0, 37, 18, 9, 4.5, void 0],
  L5 = 0.94,
  I5 = 0.93,
  Ba = [0.13, 0.15, 0.18, 0.22, 0.26, 0.1],
  P5 = 0.85,
  pr = 0.85,
  O5 = 1.6,
  N5 = 0.8,
  D5 = 0.9,
  eV = { scope: 0, suppressor: !1, laser: !1, extMag: !1, light: !1, grip: !1 };
function SP(s) {
  if (s >= Uu && s < Uu + K$ * tf) {
    const i = s - Uu,
      n = Md.length + Math.floor(i / tf);
    if (n >= _f.length) return null;
    const o = i % tf;
    return o === 0
      ? null
      : { wi: n, bits: o & 63, grip: (o & 64) !== 0, light: (o & 128) !== 0 };
  }
  if (s < rm || s >= Uu) return null;
  const e = s >= lm,
    t = s - (e ? lm : rm);
  return { wi: Math.floor(t / Cc), bits: t % Cc, light: e, grip: !1 };
}
function ai(s) {
  if (_f.includes(s)) return s;
  const e = SP(s);
  return e ? _f[e.wi] : 0;
}
function so(s) {
  const e = SP(s);
  return e
    ? {
        scope: e.bits & 7,
        suppressor: (e.bits & 8) !== 0,
        laser: (e.bits & 16) !== 0,
        extMag: (e.bits & 32) !== 0,
        light: e.light,
        grip: e.grip,
      }
    : { ...eV };
}
function co(s, e) {
  const t = _f.indexOf(s);
  if (t < 0) return s;
  const i =
    (e.scope & 7) |
    (e.suppressor ? 8 : 0) |
    (e.laser ? 16 : 0) |
    (e.extMag ? 32 : 0);
  if (t >= Md.length) {
    const n = i | (e.grip && cm(s, "grip") ? 64 : 0) | (e.light ? 128 : 0);
    return n === 0 ? s : Uu + (t - Md.length) * tf + n;
  }
  return e.light ? lm + t * Cc + i : i === 0 ? s : rm + t * Cc + i;
}
function Dh(s, e) {
  const t = so(s);
  return e === "scope"
    ? t.scope > 0
      ? MP[t.scope - 1]
      : 0
    : e === "suppressor"
      ? t.suppressor
        ? w.SUPPRESSOR
        : 0
      : e === "laser"
        ? t.laser
          ? w.LASER_SIGHT
          : 0
        : e === "light"
          ? t.light
            ? w.FLASHLIGHT
            : 0
          : e === "grip"
            ? t.grip
              ? w.FOREGRIP
              : 0
            : t.extMag
              ? w.EXT_MAG
              : 0;
}
function Qx(s, e) {
  const t = ai(s),
    i = Sd[e];
  if (!t || !i || !cm(t, i)) return s;
  const n = so(s);
  return (
    i === "scope"
      ? (n.scope = MP.indexOf(e) + 1)
      : i === "suppressor"
        ? (n.suppressor = !0)
        : i === "laser"
          ? (n.laser = !0)
          : i === "light"
            ? (n.light = !0)
            : i === "grip"
              ? (n.grip = !0)
              : (n.extMag = !0),
    co(t, n)
  );
}
function tV(s, e) {
  const t = ai(s);
  if (!t) return s;
  const i = so(s);
  return (
    e === "scope"
      ? (i.scope = 0)
      : e === "suppressor"
        ? (i.suppressor = !1)
        : e === "laser"
          ? (i.laser = !1)
          : e === "light"
            ? (i.light = !1)
            : e === "grip"
              ? (i.grip = !1)
              : (i.extMag = !1),
    co(t, i)
  );
}
function $m(s) {
  return ad.map((e) => Dh(s, e)).filter((e) => e > 0);
}
const iV = {
    [w.SUPPRESSOR]: `Приглушает звук выстрела и уменьшает разброс на ${Math.round((1 - L5) * 100)}%`,
    [w.LASER_SIGHT]: `Видимый луч, уменьшает разброс на ${Math.round((1 - I5) * 100)}%`,
    [w.SCOPE_X2]: `Увеличение при прицеливании ×2, разброс −${Math.round((1 - pr) * 100)}%, прицеливание ${Ba[1]} с`,
    [w.SCOPE_X4]: `Увеличение при прицеливании ×4, разброс −${Math.round((1 - pr) * 100)}%, прицеливание ${Ba[2]} с`,
    [w.SCOPE_X8]: `Увеличение при прицеливании ×8, разброс −${Math.round((1 - pr) * 100)}%, прицеливание ${Ba[3]} с`,
    [w.SCOPE_X16]: `Увеличение при прицеливании ×16, разброс −${Math.round((1 - pr) * 100)}%, прицеливание ${Ba[4]} с`,
    [w.SCOPE_HOLO]: `Самое быстрое прицеливание (${Ba[5]} с), обзор ×1.25, точка всегда в точке попадания, отдача −${Math.round((1 - P5) * 100)}%, разброс −${Math.round((1 - pr) * 100)}%`,
    [w.EXT_MAG]: `Увеличивает ёмкость магазина в ${O5}×`,
    [w.FLASHLIGHT]:
      "Подствольный фонарь: освещает то, куда направлено оружие. Отдельная клавиша включения",
    [w.FOREGRIP]: `Для M4A1 и Vector: отдача −${Math.round((1 - N5) * 100)}%, разброс от бедра −${Math.round((1 - D5) * 100)}%`,
  },
  sV = {
    [w.SUPPRESSOR]: `Muffles gunshot sound and reduces spread by ${Math.round((1 - L5) * 100)}%`,
    [w.LASER_SIGHT]: `Visible beam, reduces spread by ${Math.round((1 - I5) * 100)}%`,
    [w.SCOPE_X2]: `×2 aim zoom, spread −${Math.round((1 - pr) * 100)}%, aims in ${Ba[1]} s`,
    [w.SCOPE_X4]: `×4 aim zoom, spread −${Math.round((1 - pr) * 100)}%, aims in ${Ba[2]} s`,
    [w.SCOPE_X8]: `×8 aim zoom, spread −${Math.round((1 - pr) * 100)}%, aims in ${Ba[3]} s`,
    [w.SCOPE_X16]: `×16 aim zoom, spread −${Math.round((1 - pr) * 100)}%, aims in ${Ba[4]} s`,
    [w.SCOPE_HOLO]: `Fastest aiming (${Ba[5]} s), 1.25× view, the dot is always on the point of impact, recoil −${Math.round((1 - P5) * 100)}%, spread −${Math.round((1 - pr) * 100)}%`,
    [w.EXT_MAG]: `Increases magazine capacity by ${O5}×`,
    [w.FLASHLIGHT]:
      "Underbarrel light: illuminates wherever the weapon points. Toggled with its own key",
    [w.FOREGRIP]: `For the M4A1 and the Vector: recoil −${Math.round((1 - N5) * 100)}%, hip spread −${Math.round((1 - D5) * 100)}%`,
  },
  nV = {
    [w.SUPPRESSOR]: "глуш.",
    [w.LASER_SIGHT]: "лазер",
    [w.SCOPE_X2]: "×2",
    [w.SCOPE_X4]: "×4",
    [w.SCOPE_X8]: "×8",
    [w.SCOPE_X16]: "×16",
    [w.SCOPE_HOLO]: "голо",
    [w.EXT_MAG]: "магазин+",
    [w.FLASHLIGHT]: "фонарь",
    [w.FOREGRIP]: "рукоять",
  },
  EP = {
    [w.SUPPRESSOR]: "sup.",
    [w.LASER_SIGHT]: "laser",
    [w.SCOPE_X2]: "×2",
    [w.SCOPE_X4]: "×4",
    [w.SCOPE_X8]: "×8",
    [w.SCOPE_X16]: "×16",
    [w.SCOPE_HOLO]: "holo",
    [w.EXT_MAG]: "mag+",
    [w.FLASHLIGHT]: "light",
    [w.FOREGRIP]: "grip",
  };
function oV(s) {
  const e = ai(s);
  if (!e) return N0[s] ?? `Предмет ${s}`;
  const t = $m(s).map((i) => nV[i] ?? "");
  return t.length ? `${N0[e]} (${t.join(", ")})` : (N0[e] ?? `Предмет ${e}`);
}
function Jx(s, e) {
  if (e === "ru") return oV(s);
  const t = ai(s);
  if (!t) return od[s] ?? `Item ${s}`;
  const i = $m(s).map((n) => EP[n] ?? "");
  return i.length ? `${od[t]} (${i.join(", ")})` : (od[t] ?? `Item ${t}`);
}
function AP(s) {
  for (let e = 0; e < _f.length; e++) {
    const t = _f[e];
    if (e >= Md.length) {
      const i = cm(t, "grip"),
        n = Uu + (e - Md.length) * tf;
      for (let o = 1; o < tf; o++) (o & 7) > 5 || (!i && o & 64) || s(n + o, t);
      continue;
    }
    for (let i = 0; i < Cc; i++)
      (i & 7) > 5 || (i > 0 && s(rm + e * Cc + i, t), s(lm + e * Cc + i, t));
  }
}
AP((s, e) => {
  G0[s] = G0[e];
});
const aV = 30,
  rV = 60;
function lV(s) {
  switch (s) {
    case L.TANK:
      return 5;
    case L.HELI:
      return 6;
    case L.FIGHTER_JET:
      return 7;
    case L.PLANE:
      return 4;
    case L.BTR_TURRET:
      return 4;
    case L.HIMARS:
    case L.PATRIOT:
      return 4;
    case L.MORTAR:
      return 3;
    case L.TURRET:
      return 2;
    case L.BOAT:
      return 2;
    case L.DRONE:
      return 0.5;
    case L.CARRIER:
    case L.SUBMARINE:
      return 15;
    default:
      return 2;
  }
}
