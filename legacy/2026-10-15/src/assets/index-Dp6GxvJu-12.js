// index-Dp6GxvJu 12 — light
// Lines 29846-30186 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const xC = new Set([
    BLOCK.SAPLING,
    BLOCK.TROPICAL_SAPLING,
    BLOCK.DESERT_SAPLING,
    BLOCK.PINE_SAPLING,
    BLOCK.SAKURA_SAPLING,
    BLOCK.AUTUMN_SAPLING,
  ]),
  hw = [BLOCK.AUTUMN_LEAVES_ORANGE, BLOCK.AUTUMN_LEAVES_RED, BLOCK.AUTUMN_LEAVES_YELLOW],
  wz = new Set([
    BLOCK.LEAVES,
    BLOCK.TROPICAL_LEAVES,
    BLOCK.DESERT_LEAVES,
    BLOCK.PINE_LEAVES,
    BLOCK.SAKURA_LEAVES,
    ...hw,
  ]),
  Mz = new Set([
    BLOCK.LOG,
    BLOCK.TROPICAL_LOG,
    BLOCK.DESERT_LOG,
    BLOCK.PINE_LOG,
    BLOCK.SAKURA_LOG,
    BLOCK.BIRCH_LOG,
    BLOCK.DEAD_LOG,
  ]),
  TC = new Set([BLOCK.WHEAT_SPROUT, BLOCK.WHEAT_YOUNG, BLOCK.WHEAT_CROP]),
  AC = new Set([BLOCK.POTATO_SPROUT, BLOCK.POTATO_YOUNG, BLOCK.POTATO_CROP]),
  _C = new Set([BLOCK.CARROT_SPROUT, BLOCK.CARROT_YOUNG, BLOCK.CARROT_CROP]),
  RC = new Set([BLOCK.PUMPKIN_SPROUT, BLOCK.PUMPKIN_YOUNG, BLOCK.PUMPKIN_CROP]),
  CC = new Set([...TC, ...AC, ..._C, ...RC, ...vy]),
  yh = (n) => CC.has(n),
  Sz = {
    [BLOCK.WHEAT_SPROUT]: [BLOCK.WHEAT_SPROUT, BLOCK.WHEAT_YOUNG, BLOCK.WHEAT_CROP],
    [BLOCK.POTATO_SPROUT]: [BLOCK.POTATO_SPROUT, BLOCK.POTATO_YOUNG, BLOCK.POTATO_CROP],
    [BLOCK.CARROT_SPROUT]: [BLOCK.CARROT_SPROUT, BLOCK.CARROT_YOUNG, BLOCK.CARROT_CROP],
    [BLOCK.PUMPKIN_SPROUT]: [BLOCK.PUMPKIN_SPROUT, BLOCK.PUMPKIN_YOUNG, BLOCK.PUMPKIN_CROP],
    ...Object.fromEntries(tc.map((n) => [n.stages[0], [...n.stages]])),
  },
  Ez = (n) => n === BLOCK.DIRT || n === BLOCK.FARMLAND,
  xz = (n) => n === BLOCK.GRASS || n === BLOCK.DIRT || n === BLOCK.FARMLAND,
  zx = (n) => (pC(n) ? xz : Ez),
  Tz = new Set([
    ...xC,
    BLOCK.TALL_GRASS,
    BLOCK.DESERT_GRASS,
    BLOCK.FLOWER_RED,
    BLOCK.FLOWER_WHITE,
    BLOCK.FLOWER_BLUE,
    BLOCK.FLOWER_PINK,
    BLOCK.FLOWER_YELLOW,
    BLOCK.FIRE,
    ...TC,
    ...AC,
    ..._C,
    ...RC,
    BLOCK.FLY_AGARIC,
    BLOCK.MUSHROOM,
    BLOCK.LEAF_LITTER,
    ...vy,
    ...yC,
  ]),
  Bo = (n) => Tz.has(n),
  tm = (n) => xC.has(n),
  $n = (n) => wz.has(n),
  t1 = (n) => Mz.has(n),
  kC = 8,
  Ul = (n) => {
    if (n & kC) return 1;
    const e = n & 7;
    return e === 0 ? 0.875 : (0.875 * (8 - e)) / 8;
  };
function Az(n, e, t, i, s = BLOCK.WATER) {
  if (n.getBlock(e, t, i) !== s) return [0, 0, 0];
  const o = n.getMeta(e, t, i),
    a = o & 7;
  let r = 0,
    l = 0;
  for (const [h, d] of [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]) {
    const u = n.getBlock(e + h, t, i + d);
    if (u === s) {
      const m = (n.getMeta(e + h, t, i + d) & 7) - a;
      ((r += h * m), (l += d * m));
    } else
      u === BLOCK.AIR &&
        n.getBlock(e + h, t - 1, i + d) === BLOCK.AIR &&
        ((r += h * (8 - a)), (l += d * (8 - a)));
  }
  const c = Math.hypot(r, l);
  return (c > 0.001 && ((r /= c), (l /= c)), [r, o & kC ? -1 : 0, l]);
}
const hg = (n, e) =>
    n === BLOCK.RTORCH
      ? e & Qn
        ? 0
        : 7
      : n === BLOCK.LAMP
        ? e & Qn
          ? 15
          : 0
        : n === BLOCK.REDSTONE
          ? dC(e) > 0
            ? 2
            : 0
          : n === BLOCK.FURNACE
            ? e & Qn
              ? 13
              : 0
            : BLOCKS[n].light,
  jl = new Uint8Array(256);
for (const n of BLOCKS) jl[n.id] = n.light;
jl[BLOCK.LAMP] = 15;
jl[BLOCK.REDSTONE] = 2;
jl[BLOCK.FURNACE] = 13;
jl[BLOCK.FIRE] = 15;
jl[BLOCK.LAVA] = 15;
const _z = {
    [BLOCK.SAVANNA_GRASS]: "dirt",
    [BLOCK.GRASS]: "dirt",
    [BLOCK.DIRT]: "dirt",
    [BLOCK.SNOW]: "dirt",
    [BLOCK.SNOW_LAYER]: "dirt",
    [BLOCK.SAND]: "sand",
    [BLOCK.GRAVEL]: "sand",
    [BLOCK.KITCHEN_COUNTER]: "wood",
    [BLOCK.SINK]: "metal",
    [BLOCK.STORAGE_SHELF]: "metal",
    [BLOCK.SOFA]: "wood",
    [BLOCK.WALL_LIGHT]: "metal",
    [BLOCK.POTTED_PLANT]: "leaves",
    [BLOCK.AVIATION_LIGHT]: "metal",
    [BLOCK.WOOD_TABLE]: "wood",
    [BLOCK.WOOD_CHAIR]: "wood",
    [BLOCK.WOOD_BENCH]: "wood",
    [BLOCK.MAP_TABLE]: "wood",
    [BLOCK.LOG]: "wood",
    [BLOCK.PLANKS]: "wood",
    [BLOCK.LADDER]: "wood",
    [BLOCK.BED]: "wood",
    [BLOCK.DOOR]: "wood",
    [BLOCK.CHEST]: "wood",
    [BLOCK.MILITARY_CHEST]: "wood",
    [BLOCK.BARREL]: "wood",
    [BLOCK.BOOKSHELF]: "wood",
    [BLOCK.HAY_BALE]: "leaves",
    [BLOCK.FENCE_WOOD]: "wood",
    [BLOCK.FENCE_GATE_WOOD]: "wood",
    [BLOCK.PISTON]: "wood",
    [BLOCK.SPISTON]: "wood",
    [BLOCK.PISTON_HEAD]: "wood",
    [BLOCK.TORCH]: "wood",
    [BLOCK.LAMP]: "wood",
    [BLOCK.DYNAMITE]: "wood",
    [BLOCK.STAIR_WOOD]: "wood",
    [BLOCK.STAIR_SANDSTONE]: "sand",
    [BLOCK.STAIR_SAND]: "sand",
    [BLOCK.SAPLING]: "leaves",
    [BLOCK.TALL_GRASS]: "leaves",
    [BLOCK.FLOWER_RED]: "leaves",
    [BLOCK.FLOWER_WHITE]: "leaves",
    [BLOCK.FLOWER_BLUE]: "leaves",
    [BLOCK.FLOWER_PINK]: "leaves",
    [BLOCK.FLOWER_YELLOW]: "leaves",
    [BLOCK.LEAVES]: "leaves",
    [BLOCK.TROPICAL_LOG]: "wood",
    [BLOCK.DESERT_LOG]: "wood",
    [BLOCK.PINE_LOG]: "wood",
    [BLOCK.SAKURA_LOG]: "wood",
    [BLOCK.TROPICAL_LEAVES]: "leaves",
    [BLOCK.DESERT_LEAVES]: "leaves",
    [BLOCK.PINE_LEAVES]: "leaves",
    [BLOCK.SAKURA_LEAVES]: "leaves",
    [BLOCK.TROPICAL_SAPLING]: "leaves",
    [BLOCK.DESERT_SAPLING]: "leaves",
    [BLOCK.PINE_SAPLING]: "leaves",
    [BLOCK.SAKURA_SAPLING]: "leaves",
    [BLOCK.CACTUS]: "leaves",
    [BLOCK.FIRE]: "leaves",
    [BLOCK.WHEAT_CROP]: "leaves",
    [BLOCK.WHEAT_SPROUT]: "leaves",
    [BLOCK.WHEAT_YOUNG]: "leaves",
    [BLOCK.DESERT_GRASS]: "leaves",
    [BLOCK.FARMLAND]: "dirt",
    [BLOCK.SEAWEED]: "leaves",
    [BLOCK.SEAGRASS]: "leaves",
    [BLOCK.CORAL_PINK]: "glass",
    [BLOCK.CORAL_BLUE]: "glass",
    [BLOCK.CORAL_YELLOW]: "glass",
    [BLOCK.HIEROGLYPH_SANDSTONE]: "sand",
    [BLOCK.GOLD_INLAY]: "metal",
    [BLOCK.LAPIS_INLAY]: "ore",
    [BLOCK.EGYPTIAN_PILLAR]: "sand",
    [BLOCK.SARCOPHAGUS]: "metal",
    [BLOCK.COMPOSTER]: "wood",
    [BLOCK.POTATO_SPROUT]: "leaves",
    [BLOCK.POTATO_YOUNG]: "leaves",
    [BLOCK.POTATO_CROP]: "leaves",
    [BLOCK.CARROT_SPROUT]: "leaves",
    [BLOCK.CARROT_YOUNG]: "leaves",
    [BLOCK.CARROT_CROP]: "leaves",
    ...Object.fromEntries([...vy].map((n) => [n, "leaves"])),
    [BLOCK.GLASS]: "glass",
    [BLOCK.RGLASS]: "glass",
    [BLOCK.GLOWSTONE]: "glass",
    [BLOCK.ICE]: "glass",
    [BLOCK.RSTONE]: "metal",
    [BLOCK.STAIR_RSTONE]: "metal",
    [BLOCK.DETONATOR]: "metal",
    [BLOCK.REMOTE_STATION]: "metal",
    [BLOCK.METAL_DOOR]: "metal",
    [BLOCK.ARMORED_DOOR]: "metal",
    [BLOCK.FURNACE]: "metal",
    [BLOCK.CHAIN]: "metal",
    [BLOCK.BARBED_WIRE]: "metal",
    [BLOCK.FENCE_COBBLE]: "stone",
    [BLOCK.FENCE_STONE]: "stone",
    [BLOCK.FENCE_STONE_BRICKS]: "stone",
    [BLOCK.FENCE_SANDSTONE]: "sand",
    [BLOCK.FENCE_GATE_COBBLE]: "stone",
    [BLOCK.FENCE_GATE_STONE]: "stone",
    [BLOCK.FENCE_GATE_STONE_BRICKS]: "stone",
    [BLOCK.FENCE_GATE_SANDSTONE]: "sand",
    [BLOCK.COAL_ORE]: "ore",
    [BLOCK.IRON_ORE]: "ore",
    [BLOCK.GOLD_ORE]: "ore",
    [BLOCK.DIAMOND_ORE]: "ore",
    [BLOCK.TITANIUM_ORE]: "ore",
    [BLOCK.LUNAR_ORE]: "ore",
    [BLOCK.AUTUMN_LEAVES_ORANGE]: "leaves",
    [BLOCK.AUTUMN_LEAVES_RED]: "leaves",
    [BLOCK.AUTUMN_LEAVES_YELLOW]: "leaves",
    [BLOCK.BIRCH_LOG]: "wood",
    [BLOCK.DEAD_LOG]: "wood",
    [BLOCK.DARK_PLANKS]: "wood",
    [BLOCK.STAIR_DARK]: "wood",
    [BLOCK.COFFIN]: "wood",
    [BLOCK.POTION_SHELF]: "wood",
    [BLOCK.GRAVE_CROSS]: "wood",
    [BLOCK.SCARECROW]: "leaves",
    [BLOCK.LEAF_LITTER]: "leaves",
    [BLOCK.PUMPKIN]: "leaves",
    [BLOCK.JACK_O_LANTERN]: "leaves",
    [BLOCK.PUMPKIN_SPROUT]: "leaves",
    [BLOCK.PUMPKIN_YOUNG]: "leaves",
    [BLOCK.PUMPKIN_CROP]: "leaves",
    [BLOCK.CANDLE]: "wood",
    [BLOCK.COBWEB]: "leaves",
    [BLOCK.HANGING_HERBS]: "leaves",
    [BLOCK.FLY_AGARIC]: "leaves",
    [BLOCK.MUSHROOM]: "leaves",
    [BLOCK.AUTUMN_SAPLING]: "leaves",
    [BLOCK.SKULL]: "stone",
    [BLOCK.IRON_FENCE]: "metal",
    [BLOCK.CAULDRON]: "metal",
  },
  ca = (n) => _z[n] ?? "stone",
  n5 = (n) =>
    BLOCKS.find((e) => e.id !== 0 && !!e.label && e.name === n.toLowerCase()),
  Rz = (n) => n > 0 && BLOCKS[n].solid,
  LC = (n) => n > 0 && BLOCKS[n].solid && !BLOCKS[n].transparent,
  OS = (n) => {
    var e;
    return n > 0 && ((e = BLOCKS[n]) == null ? void 0 : e.shape) === "stair";
  },
  IC = BLOCKS
    .filter(
      (n) =>
        !!n.label &&
        n.id !== BLOCK.AIR &&
        n.id !== BLOCK.BEDROCK &&
        n.id !== BLOCK.PISTON_HEAD &&
        !CC.has(n.id),
    )
    .map((n) => n.id),
  i1 = 2048,
  HOTBAR_WEAPONS = [ITEM.GLOCK, ITEM.AK47, ITEM.AWP, ITEM.SHOTGUN],
  HOTBAR_SLOT_SIZE = 64,
  Cz = () => HOTBAR_WEAPONS.length * HOTBAR_SLOT_SIZE,
  xp = i1 + 4 * HOTBAR_SLOT_SIZE,
  WEAPON_ATTACHMENTS = ["scope", "suppressor", "laser", "mag", "light"],
  kz = {
    scope: "Прицел",
    suppressor: "Глушитель",
    laser: "Лазер",
    mag: "Магазин",
    light: "Фонарь",
  },
  Lz = {
    scope: "Scope",
    suppressor: "Suppressor",
    laser: "Laser",
    mag: "Magazine",
    light: "Light",
  },
  ATTACHMENTS_BY_WEAPON = {
    [ITEM.GLOCK]: ["scope", "suppressor", "laser", "mag", "light"],
    [ITEM.AK47]: ["scope", "suppressor", "laser", "mag", "light"],
    [ITEM.AWP]: ["scope", "suppressor", "laser", "mag", "light"],
    [ITEM.SHOTGUN]: ["light"],
  },
  PC = (n, e) => (ATTACHMENTS_BY_WEAPON[n] ?? []).includes(e),
  OC = [ITEM.SCOPE_X2, ITEM.SCOPE_X4, ITEM.SCOPE_X8, ITEM.SCOPE_X16, ITEM.SCOPE_HOLO],
  n1 = {
    [ITEM.FLASHLIGHT]: "light",
    [ITEM.SUPPRESSOR]: "suppressor",
    [ITEM.LASER_SIGHT]: "laser",
    [ITEM.SCOPE_X2]: "scope",
    [ITEM.SCOPE_X4]: "scope",
    [ITEM.SCOPE_X8]: "scope",
    [ITEM.SCOPE_X16]: "scope",
    [ITEM.SCOPE_HOLO]: "scope",
    [ITEM.EXT_MAG]: "mag",
  },
  Pz = Object.keys(n1).map(Number),
  Oz = (n) => n in n1,
  Nz = [void 0, 37, 18, 9, 4.5, void 0],
  by = 0.94,
  wy = 0.93,
  ha = [0.13, 0.15, 0.18, 0.22, 0.26, 0.1],
  NS = 0.85,
  La = 0.85,
  My = 1.6,
  Dz = { scope: 0, suppressor: !1, laser: !1, extMag: !1, light: !1 },
  Bz = (n) => n >= i1 && n < xp + Cz();
function NC(n) {
  if (!Bz(n)) return null;
  const e = n >= xp,
    t = n - (e ? xp : i1),
    i = Math.floor(t / HOTBAR_SLOT_SIZE);
  return i >= HOTBAR_WEAPONS.length ? null : { wi: i, bits: t % HOTBAR_SLOT_SIZE, light: e };
}
function Ti(n) {
  if (HOTBAR_WEAPONS.includes(n)) return n;
  const e = NC(n);
  return e ? HOTBAR_WEAPONS[e.wi] : 0;
}
