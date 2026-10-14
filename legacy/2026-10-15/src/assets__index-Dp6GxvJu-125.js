// assets__index-Dp6GxvJu 125 — mag
// Lines 75155-75326 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
const wl = {
    [E.GLOCK]: {
      dmg: 16,
      vehDmg: 2,
      blockDmg: 8,
      rpm: 380,
      mag: 17,
      reload: 1.3,
      range: 100,
    },
    [E.AK47]: {
      dmg: 24,
      vehDmg: 4,
      blockDmg: 12,
      rpm: 600,
      mag: 30,
      reload: 2.1,
      range: 220,
    },
    [E.AWP]: {
      dmg: 110,
      vehDmg: 30,
      blockDmg: 60,
      rpm: 42,
      mag: 5,
      reload: 2.6,
      range: 400,
    },
    [E.MINIGUN]: {
      dmg: 20,
      vehDmg: 5,
      blockDmg: 11,
      rpm: 1200,
      mag: 200,
      reload: 4.8,
      range: 220,
    },
    [E.SHOTGUN]: {
      dmg: 18,
      vehDmg: 2,
      blockDmg: 5,
      rpm: 85,
      mag: 8,
      reload: 2.4,
      range: 48,
      pellets: 8,
    },
    [E.RPG]: {
      dmg: 0,
      vehDmg: 0,
      blockDmg: 0,
      rpm: 30,
      mag: 1,
      reload: 2,
      range: 0,
    },
    [E.GRENADE_LAUNCHER]: {
      dmg: 0,
      vehDmg: 0,
      blockDmg: 0,
      rpm: 28,
      mag: 4,
      reload: 2.4,
      range: 160,
    },
    [E.GRENADE]: {
      dmg: 0,
      vehDmg: 0,
      blockDmg: 0,
      rpm: 38,
      mag: 0,
      reload: 0,
      range: 0,
    },
  },
  Qj = (n) => wl[Ti(n) || n],
  wM = (n) => {
    var e;
    return Math.round(
      (((e = Qj(n)) == null ? void 0 : e.mag) ?? 0) * (So(n).extMag ? My : 1),
    );
  },
  Jj = 64,
  eX = new Set([
    E.TANK,
    E.PLANE,
    E.FIGHTER_JET,
    E.DRONE,
    E.BOAT,
    E.CARRIER,
    E.SUBMARINE,
    E.HELI,
    E.MORTAR,
    E.HIMARS,
    E.PATRIOT,
    E.TURRET,
    E.BTR_TURRET,
    E.SPACE_ROCKET,
  ]),
  ia = (n) =>
    n <= 0 || sG(n)
      ? 0
      : n === E.RADIO_MODULE
        ? 64
        : wo(n) ||
            n === E.BUCKET ||
            n === E.WATER_BUCKET ||
            n === E.LAVA_BUCKET ||
            n === E.MILK_BUCKET ||
            n === E.CAMEL_MILK_BUCKET ||
            n === E.SHEARS ||
            n === E.FISHING_ROD ||
            n === E.COMBAT_KNIFE
          ? 1
          : n === E.GRENADE || xa(n)
            ? 16
            : n === E.MEDKIT || n === E.MILITARY_MEDKIT
              ? 4
              : n < 256 ||
                  pI(n) ||
                  n === E.BANDAGE ||
                  n === E.COAL ||
                  n === E.WHEAT_SEEDS ||
                  (n >= E.APPLE && n <= E.COOKED_BEEF) ||
                  n === E.IRON_INGOT ||
                  n === E.GOLD_INGOT ||
                  n === E.DIAMOND_INGOT ||
                  n === E.TITANIUM_INGOT ||
                  n === E.POTATO ||
                  n === E.BAKED_POTATO ||
                  n === E.CARROT ||
                  n === E.POTATO_SEEDS ||
                  n === E.CARROT_SEEDS ||
                  n === E.EGG ||
                  n === E.WOOL ||
                  n === E.FERTILIZER ||
                  n === E.RASPBERRY ||
                  n === E.BLUEBERRY ||
                  n === E.BLACKBERRY ||
                  LH.has(n) ||
                  n === E.RAW_FISH ||
                  n === E.COOKED_FISH ||
                  n === E.SHARK_TOOTH ||
                  n === E.RAW_CAMEL ||
                  n === E.COOKED_CAMEL ||
                  n in
                    {
                      [E.DYE_GREEN]: 1,
                      [E.DYE_URBAN]: 1,
                      [E.DYE_WOODLAND]: 1,
                      [E.DYE_DESERT]: 1,
                      [E.DYE_ARCTIC]: 1,
                    }
                ? Jj
                : eX.has(n) ||
                    b0[n] ||
                    Nr[n] ||
                    n === E.AXE ||
                    n === E.WELDER ||
                    n === E.DETONATOR ||
                    n === E.MILITARY_BOT ||
                    Fc(n) ||
                    Ql(n)
                  ? 1
                  : Oz(n)
                    ? 16
                    : 1,
  o_ = 64,
  Ic = 27,
  Uh = 4,
  yo = () => ({ id: 0, count: 0 }),
  fd = [...new Set([...g4.map((n) => n.id), E.DETONATOR, E.AXE])];
