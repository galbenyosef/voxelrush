// index-Dp6GxvJu 13 — suppressor
// Lines 30187-30337 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function So(n) {
  const e = NC(n);
  return e
    ? {
        scope: e.bits & 7,
        suppressor: (e.bits & 8) !== 0,
        laser: (e.bits & 16) !== 0,
        extMag: (e.bits & 32) !== 0,
        light: e.light,
      }
    : { ...Dz };
}
function s1(n, e) {
  const t = HOTBAR_WEAPONS.indexOf(n);
  if (t < 0) return n;
  const i =
    (e.scope & 7) |
    (e.suppressor ? 8 : 0) |
    (e.laser ? 16 : 0) |
    (e.extMag ? 32 : 0);
  return e.light ? xp + t * HOTBAR_SLOT_SIZE + i : i === 0 ? n : i1 + t * HOTBAR_SLOT_SIZE + i;
}
function Cd(n, e) {
  const t = So(n);
  return e === "scope"
    ? t.scope > 0
      ? OC[t.scope - 1]
      : 0
    : e === "suppressor"
      ? t.suppressor
        ? ITEM.SUPPRESSOR
        : 0
      : e === "laser"
        ? t.laser
          ? ITEM.LASER_SIGHT
          : 0
        : e === "light"
          ? t.light
            ? ITEM.FLASHLIGHT
            : 0
          : t.extMag
            ? ITEM.EXT_MAG
            : 0;
}
function Hz(n, e) {
  const t = Ti(n),
    i = n1[e];
  if (!t || !i || !PC(t, i)) return n;
  const s = So(n);
  return (
    i === "scope"
      ? (s.scope = OC.indexOf(e) + 1)
      : i === "suppressor"
        ? (s.suppressor = !0)
        : i === "laser"
          ? (s.laser = !0)
          : i === "light"
            ? (s.light = !0)
            : (s.extMag = !0),
    s1(t, s)
  );
}
function zz(n, e) {
  const t = Ti(n);
  if (!t) return n;
  const i = So(n);
  return (
    e === "scope"
      ? (i.scope = 0)
      : e === "suppressor"
        ? (i.suppressor = !1)
        : e === "laser"
          ? (i.laser = !1)
          : e === "light"
            ? (i.light = !1)
            : (i.extMag = !1),
    s1(t, i)
  );
}
function Sy(n) {
  return WEAPON_ATTACHMENTS.map((e) => Cd(n, e)).filter((e) => e > 0);
}
const Uz = {
    [ITEM.SUPPRESSOR]: `Приглушает звук выстрела и уменьшает разброс на ${Math.round((1 - by) * 100)}%`,
    [ITEM.LASER_SIGHT]: `Видимый луч, уменьшает разброс на ${Math.round((1 - wy) * 100)}%`,
    [ITEM.SCOPE_X2]: `Увеличение при прицеливании ×2, разброс −${Math.round((1 - La) * 100)}%, прицеливание ${ha[1]} с`,
    [ITEM.SCOPE_X4]: `Увеличение при прицеливании ×4, разброс −${Math.round((1 - La) * 100)}%, прицеливание ${ha[2]} с`,
    [ITEM.SCOPE_X8]: `Увеличение при прицеливании ×8, разброс −${Math.round((1 - La) * 100)}%, прицеливание ${ha[3]} с`,
    [ITEM.SCOPE_X16]: `Увеличение при прицеливании ×16, разброс −${Math.round((1 - La) * 100)}%, прицеливание ${ha[4]} с`,
    [ITEM.SCOPE_HOLO]: `Самое быстрое прицеливание (${ha[5]} с), обзор ×1.25, точка всегда в точке попадания, отдача −${Math.round((1 - NS) * 100)}%, разброс −${Math.round((1 - La) * 100)}%`,
    [ITEM.EXT_MAG]: `Увеличивает ёмкость магазина в ${My}×`,
    [ITEM.FLASHLIGHT]:
      "Подствольный фонарь: освещает то, куда направлено оружие. Отдельная клавиша включения",
  },
  Fz = {
    [ITEM.SUPPRESSOR]: `Muffles gunshot sound and reduces spread by ${Math.round((1 - by) * 100)}%`,
    [ITEM.LASER_SIGHT]: `Visible beam, reduces spread by ${Math.round((1 - wy) * 100)}%`,
    [ITEM.SCOPE_X2]: `×2 aim zoom, spread −${Math.round((1 - La) * 100)}%, aims in ${ha[1]} s`,
    [ITEM.SCOPE_X4]: `×4 aim zoom, spread −${Math.round((1 - La) * 100)}%, aims in ${ha[2]} s`,
    [ITEM.SCOPE_X8]: `×8 aim zoom, spread −${Math.round((1 - La) * 100)}%, aims in ${ha[3]} s`,
    [ITEM.SCOPE_X16]: `×16 aim zoom, spread −${Math.round((1 - La) * 100)}%, aims in ${ha[4]} s`,
    [ITEM.SCOPE_HOLO]: `Fastest aiming (${ha[5]} s), 1.25× view, the dot is always on the point of impact, recoil −${Math.round((1 - NS) * 100)}%, spread −${Math.round((1 - La) * 100)}%`,
    [ITEM.EXT_MAG]: `Increases magazine capacity by ${My}×`,
    [ITEM.FLASHLIGHT]:
      "Underbarrel light: illuminates wherever the weapon points. Toggled with its own key",
  },
  Gz = {
    [ITEM.SUPPRESSOR]: "глуш.",
    [ITEM.LASER_SIGHT]: "лазер",
    [ITEM.SCOPE_X2]: "×2",
    [ITEM.SCOPE_X4]: "×4",
    [ITEM.SCOPE_X8]: "×8",
    [ITEM.SCOPE_X16]: "×16",
    [ITEM.SCOPE_HOLO]: "голо",
    [ITEM.EXT_MAG]: "магазин+",
    [ITEM.FLASHLIGHT]: "фонарь",
  },
  Wz = {
    [ITEM.SUPPRESSOR]: "sup.",
    [ITEM.LASER_SIGHT]: "laser",
    [ITEM.SCOPE_X2]: "×2",
    [ITEM.SCOPE_X4]: "×4",
    [ITEM.SCOPE_X8]: "×8",
    [ITEM.SCOPE_X16]: "×16",
    [ITEM.SCOPE_HOLO]: "holo",
    [ITEM.EXT_MAG]: "mag+",
    [ITEM.FLASHLIGHT]: "light",
  };
function Vz(n) {
  const e = Ti(n);
  if (!e) return BLOCK_NAMES_RU[n] ?? `Предмет ${n}`;
  const t = Sy(n).map((i) => Gz[i] ?? "");
  return t.length ? `${BLOCK_NAMES_RU[e]} (${t.join(", ")})` : (BLOCK_NAMES_RU[e] ?? `Предмет ${e}`);
}
function Ey(n, e) {
  if (e === "ru") return Vz(n);
  const t = Ti(n);
  if (!t) return BLOCK_NAMES_EN[n] ?? `Item ${n}`;
  const i = Sy(n).map((s) => Wz[s] ?? "");
  return i.length ? `${BLOCK_NAMES_EN[t]} (${i.join(", ")})` : (BLOCK_NAMES_EN[t] ?? `Item ${t}`);
}
function DC(n) {
  for (let e = 0; e < HOTBAR_WEAPONS.length; e++) {
    const t = HOTBAR_WEAPONS[e];
    for (let i = 0; i < HOTBAR_SLOT_SIZE; i++)
      (i & 7) > 5 || (i > 0 && n(i1 + e * HOTBAR_SLOT_SIZE + i, t), n(xp + e * HOTBAR_SLOT_SIZE + i, t));
  }
}
DC((n, e) => {
  TOOL_ITEM_BY_BLOCK[n] = TOOL_ITEM_BY_BLOCK[e];
});
