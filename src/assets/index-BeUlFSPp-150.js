// index-BeUlFSPp 150 — axe
// Lines 83046-83135 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const Tie = 64,
  xie = new Set([
    w.TANK,
    w.PLANE,
    w.FIGHTER_JET,
    w.DRONE,
    w.BOAT,
    w.CARRIER,
    w.SUBMARINE,
    w.HELI,
    w.MORTAR,
    w.HIMARS,
    w.PATRIOT,
    w.TURRET,
    w.BTR_TURRET,
    w.SPACE_ROCKET,
  ]),
  xa = (s) =>
    s <= 0 || dY(s)
      ? 0
      : s === w.RADIO_MODULE
        ? 64
        : Ko(s) ||
            s === w.BUCKET ||
            s === w.WATER_BUCKET ||
            s === w.LAVA_BUCKET ||
            s === w.MILK_BUCKET ||
            s === w.CAMEL_MILK_BUCKET ||
            s === w.SHEARS ||
            s === w.FISHING_ROD ||
            s === w.COMBAT_KNIFE
          ? 1
          : s === w.GRENADE || or(s)
            ? 16
            : s === w.MEDKIT || s === w.MILITARY_MEDKIT
              ? 4
              : s < 256 ||
                  CN(s) ||
                  s === w.BANDAGE ||
                  s === w.COAL ||
                  s === w.WHEAT_SEEDS ||
                  (s >= w.APPLE && s <= w.COOKED_BEEF) ||
                  s === w.IRON_INGOT ||
                  s === w.GOLD_INGOT ||
                  s === w.DIAMOND_INGOT ||
                  s === w.TITANIUM_INGOT ||
                  s === w.POTATO ||
                  s === w.BAKED_POTATO ||
                  s === w.CARROT ||
                  s === w.POTATO_SEEDS ||
                  s === w.CARROT_SEEDS ||
                  s === w.EGG ||
                  s === w.WOOL ||
                  s === w.FERTILIZER ||
                  s === w.RASPBERRY ||
                  s === w.BLUEBERRY ||
                  s === w.BLACKBERRY ||
                  EW.has(s) ||
                  s === w.RAW_FISH ||
                  s === w.COOKED_FISH ||
                  s === w.SHARK_TOOTH ||
                  s === w.RAW_CAMEL ||
                  s === w.COOKED_CAMEL ||
                  s in
                    {
                      [w.DYE_GREEN]: 1,
                      [w.DYE_URBAN]: 1,
                      [w.DYE_WOODLAND]: 1,
                      [w.DYE_DESERT]: 1,
                      [w.DYE_ARCTIC]: 1,
                    }
                ? Tie
                : xie.has(s) ||
                    wd[s] ||
                    Tl[s] ||
                    s === w.AXE ||
                    s === w.WELDER ||
                    s === w.DETONATOR ||
                    s === w.MILITARY_BOT ||
                    O0(s) ||
                    Wc(s)
                  ? 1
                  : Q$(s)
                    ? 16
                    : 1,
  Dk = 64,
  M0 = 27,
  Ph = 4,
  Fo = () => ({ id: 0, count: 0 }),
  Eu = [...new Set([...uT.map((s) => s.id), w.DETONATOR, w.AXE])];
