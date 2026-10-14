// index-Dp6GxvJu 125 — mag
// Lines 75155-75326 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const wl = {
    [ITEM.GLOCK]: {
      dmg: 16,
      vehDmg: 2,
      blockDmg: 8,
      rpm: 380,
      mag: 17,
      reload: 1.3,
      range: 100,
    },
    [ITEM.AK47]: {
      dmg: 24,
      vehDmg: 4,
      blockDmg: 12,
      rpm: 600,
      mag: 30,
      reload: 2.1,
      range: 220,
    },
    [ITEM.AWP]: {
      dmg: 110,
      vehDmg: 30,
      blockDmg: 60,
      rpm: 42,
      mag: 5,
      reload: 2.6,
      range: 400,
    },
    [ITEM.MINIGUN]: {
      dmg: 20,
      vehDmg: 5,
      blockDmg: 11,
      rpm: 1200,
      mag: 200,
      reload: 4.8,
      range: 220,
    },
    [ITEM.SHOTGUN]: {
      dmg: 18,
      vehDmg: 2,
      blockDmg: 5,
      rpm: 85,
      mag: 8,
      reload: 2.4,
      range: 48,
      pellets: 8,
    },
    [ITEM.RPG]: {
      dmg: 0,
      vehDmg: 0,
      blockDmg: 0,
      rpm: 30,
      mag: 1,
      reload: 2,
      range: 0,
    },
    [ITEM.GRENADE_LAUNCHER]: {
      dmg: 0,
      vehDmg: 0,
      blockDmg: 0,
      rpm: 28,
      mag: 4,
      reload: 2.4,
      range: 160,
    },
    [ITEM.GRENADE]: {
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
    ITEM.TANK,
    ITEM.PLANE,
    ITEM.FIGHTER_JET,
    ITEM.DRONE,
    ITEM.BOAT,
    ITEM.CARRIER,
    ITEM.SUBMARINE,
    ITEM.HELI,
    ITEM.MORTAR,
    ITEM.HIMARS,
    ITEM.PATRIOT,
    ITEM.TURRET,
    ITEM.BTR_TURRET,
    ITEM.SPACE_ROCKET,
  ]),
  ia = (n) =>
    n <= 0 || sG(n)
      ? 0
      : n === ITEM.RADIO_MODULE
        ? 64
        : wo(n) ||
            n === ITEM.BUCKET ||
            n === ITEM.WATER_BUCKET ||
            n === ITEM.LAVA_BUCKET ||
            n === ITEM.MILK_BUCKET ||
            n === ITEM.CAMEL_MILK_BUCKET ||
            n === ITEM.SHEARS ||
            n === ITEM.FISHING_ROD ||
            n === ITEM.COMBAT_KNIFE
          ? 1
          : n === ITEM.GRENADE || xa(n)
            ? 16
            : n === ITEM.MEDKIT || n === ITEM.MILITARY_MEDKIT
              ? 4
              : n < 256 ||
                  pI(n) ||
                  n === ITEM.BANDAGE ||
                  n === ITEM.COAL ||
                  n === ITEM.WHEAT_SEEDS ||
                  (n >= ITEM.APPLE && n <= ITEM.COOKED_BEEF) ||
                  n === ITEM.IRON_INGOT ||
                  n === ITEM.GOLD_INGOT ||
                  n === ITEM.DIAMOND_INGOT ||
                  n === ITEM.TITANIUM_INGOT ||
                  n === ITEM.POTATO ||
                  n === ITEM.BAKED_POTATO ||
                  n === ITEM.CARROT ||
                  n === ITEM.POTATO_SEEDS ||
                  n === ITEM.CARROT_SEEDS ||
                  n === ITEM.EGG ||
                  n === ITEM.WOOL ||
                  n === ITEM.FERTILIZER ||
                  n === ITEM.RASPBERRY ||
                  n === ITEM.BLUEBERRY ||
                  n === ITEM.BLACKBERRY ||
                  PET_FOOD_ITEMS.has(n) ||
                  n === ITEM.RAW_FISH ||
                  n === ITEM.COOKED_FISH ||
                  n === ITEM.SHARK_TOOTH ||
                  n === ITEM.RAW_CAMEL ||
                  n === ITEM.COOKED_CAMEL ||
                  n in
                    {
                      [ITEM.DYE_GREEN]: 1,
                      [ITEM.DYE_URBAN]: 1,
                      [ITEM.DYE_WOODLAND]: 1,
                      [ITEM.DYE_DESERT]: 1,
                      [ITEM.DYE_ARCTIC]: 1,
                    }
                ? Jj
                : eX.has(n) ||
                    DRILL_YIELD[n] ||
                    BLOCK_DROPS[n] ||
                    n === ITEM.AXE ||
                    n === ITEM.WELDER ||
                    n === ITEM.DETONATOR ||
                    n === ITEM.MILITARY_BOT ||
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
  fd = [...new Set([...g4.map((n) => n.id), ITEM.DETONATOR, ITEM.AXE])];
