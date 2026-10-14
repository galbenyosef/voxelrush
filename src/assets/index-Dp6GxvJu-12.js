// index-Dp6GxvJu 12 — light
// Lines 29846-30186 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const xC = new Set([
    v.SAPLING,
    v.TROPICAL_SAPLING,
    v.DESERT_SAPLING,
    v.PINE_SAPLING,
    v.SAKURA_SAPLING,
    v.AUTUMN_SAPLING,
  ]),
  hw = [v.AUTUMN_LEAVES_ORANGE, v.AUTUMN_LEAVES_RED, v.AUTUMN_LEAVES_YELLOW],
  wz = new Set([
    v.LEAVES,
    v.TROPICAL_LEAVES,
    v.DESERT_LEAVES,
    v.PINE_LEAVES,
    v.SAKURA_LEAVES,
    ...hw,
  ]),
  Mz = new Set([
    v.LOG,
    v.TROPICAL_LOG,
    v.DESERT_LOG,
    v.PINE_LOG,
    v.SAKURA_LOG,
    v.BIRCH_LOG,
    v.DEAD_LOG,
  ]),
  TC = new Set([v.WHEAT_SPROUT, v.WHEAT_YOUNG, v.WHEAT_CROP]),
  AC = new Set([v.POTATO_SPROUT, v.POTATO_YOUNG, v.POTATO_CROP]),
  _C = new Set([v.CARROT_SPROUT, v.CARROT_YOUNG, v.CARROT_CROP]),
  RC = new Set([v.PUMPKIN_SPROUT, v.PUMPKIN_YOUNG, v.PUMPKIN_CROP]),
  CC = new Set([...TC, ...AC, ..._C, ...RC, ...vy]),
  yh = (n) => CC.has(n),
  Sz = {
    [v.WHEAT_SPROUT]: [v.WHEAT_SPROUT, v.WHEAT_YOUNG, v.WHEAT_CROP],
    [v.POTATO_SPROUT]: [v.POTATO_SPROUT, v.POTATO_YOUNG, v.POTATO_CROP],
    [v.CARROT_SPROUT]: [v.CARROT_SPROUT, v.CARROT_YOUNG, v.CARROT_CROP],
    [v.PUMPKIN_SPROUT]: [v.PUMPKIN_SPROUT, v.PUMPKIN_YOUNG, v.PUMPKIN_CROP],
    ...Object.fromEntries(tc.map((n) => [n.stages[0], [...n.stages]])),
  },
  Ez = (n) => n === v.DIRT || n === v.FARMLAND,
  xz = (n) => n === v.GRASS || n === v.DIRT || n === v.FARMLAND,
  zx = (n) => (pC(n) ? xz : Ez),
  Tz = new Set([
    ...xC,
    v.TALL_GRASS,
    v.DESERT_GRASS,
    v.FLOWER_RED,
    v.FLOWER_WHITE,
    v.FLOWER_BLUE,
    v.FLOWER_PINK,
    v.FLOWER_YELLOW,
    v.FIRE,
    ...TC,
    ...AC,
    ..._C,
    ...RC,
    v.FLY_AGARIC,
    v.MUSHROOM,
    v.LEAF_LITTER,
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
function Az(n, e, t, i, s = v.WATER) {
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
      u === v.AIR &&
        n.getBlock(e + h, t - 1, i + d) === v.AIR &&
        ((r += h * (8 - a)), (l += d * (8 - a)));
  }
  const c = Math.hypot(r, l);
  return (c > 0.001 && ((r /= c), (l /= c)), [r, o & kC ? -1 : 0, l]);
}
const hg = (n, e) =>
    n === v.RTORCH
      ? e & Qn
        ? 0
        : 7
      : n === v.LAMP
        ? e & Qn
          ? 15
          : 0
        : n === v.REDSTONE
          ? dC(e) > 0
            ? 2
            : 0
          : n === v.FURNACE
            ? e & Qn
              ? 13
              : 0
            : de[n].light,
  jl = new Uint8Array(256);
for (const n of de) jl[n.id] = n.light;
jl[v.LAMP] = 15;
jl[v.REDSTONE] = 2;
jl[v.FURNACE] = 13;
jl[v.FIRE] = 15;
jl[v.LAVA] = 15;
const _z = {
    [v.SAVANNA_GRASS]: "dirt",
    [v.GRASS]: "dirt",
    [v.DIRT]: "dirt",
    [v.SNOW]: "dirt",
    [v.SNOW_LAYER]: "dirt",
    [v.SAND]: "sand",
    [v.GRAVEL]: "sand",
    [v.KITCHEN_COUNTER]: "wood",
    [v.SINK]: "metal",
    [v.STORAGE_SHELF]: "metal",
    [v.SOFA]: "wood",
    [v.WALL_LIGHT]: "metal",
    [v.POTTED_PLANT]: "leaves",
    [v.AVIATION_LIGHT]: "metal",
    [v.WOOD_TABLE]: "wood",
    [v.WOOD_CHAIR]: "wood",
    [v.WOOD_BENCH]: "wood",
    [v.MAP_TABLE]: "wood",
    [v.LOG]: "wood",
    [v.PLANKS]: "wood",
    [v.LADDER]: "wood",
    [v.BED]: "wood",
    [v.DOOR]: "wood",
    [v.CHEST]: "wood",
    [v.MILITARY_CHEST]: "wood",
    [v.BARREL]: "wood",
    [v.BOOKSHELF]: "wood",
    [v.HAY_BALE]: "leaves",
    [v.FENCE_WOOD]: "wood",
    [v.FENCE_GATE_WOOD]: "wood",
    [v.PISTON]: "wood",
    [v.SPISTON]: "wood",
    [v.PISTON_HEAD]: "wood",
    [v.TORCH]: "wood",
    [v.LAMP]: "wood",
    [v.DYNAMITE]: "wood",
    [v.STAIR_WOOD]: "wood",
    [v.STAIR_SANDSTONE]: "sand",
    [v.STAIR_SAND]: "sand",
    [v.SAPLING]: "leaves",
    [v.TALL_GRASS]: "leaves",
    [v.FLOWER_RED]: "leaves",
    [v.FLOWER_WHITE]: "leaves",
    [v.FLOWER_BLUE]: "leaves",
    [v.FLOWER_PINK]: "leaves",
    [v.FLOWER_YELLOW]: "leaves",
    [v.LEAVES]: "leaves",
    [v.TROPICAL_LOG]: "wood",
    [v.DESERT_LOG]: "wood",
    [v.PINE_LOG]: "wood",
    [v.SAKURA_LOG]: "wood",
    [v.TROPICAL_LEAVES]: "leaves",
    [v.DESERT_LEAVES]: "leaves",
    [v.PINE_LEAVES]: "leaves",
    [v.SAKURA_LEAVES]: "leaves",
    [v.TROPICAL_SAPLING]: "leaves",
    [v.DESERT_SAPLING]: "leaves",
    [v.PINE_SAPLING]: "leaves",
    [v.SAKURA_SAPLING]: "leaves",
    [v.CACTUS]: "leaves",
    [v.FIRE]: "leaves",
    [v.WHEAT_CROP]: "leaves",
    [v.WHEAT_SPROUT]: "leaves",
    [v.WHEAT_YOUNG]: "leaves",
    [v.DESERT_GRASS]: "leaves",
    [v.FARMLAND]: "dirt",
    [v.SEAWEED]: "leaves",
    [v.SEAGRASS]: "leaves",
    [v.CORAL_PINK]: "glass",
    [v.CORAL_BLUE]: "glass",
    [v.CORAL_YELLOW]: "glass",
    [v.HIEROGLYPH_SANDSTONE]: "sand",
    [v.GOLD_INLAY]: "metal",
    [v.LAPIS_INLAY]: "ore",
    [v.EGYPTIAN_PILLAR]: "sand",
    [v.SARCOPHAGUS]: "metal",
    [v.COMPOSTER]: "wood",
    [v.POTATO_SPROUT]: "leaves",
    [v.POTATO_YOUNG]: "leaves",
    [v.POTATO_CROP]: "leaves",
    [v.CARROT_SPROUT]: "leaves",
    [v.CARROT_YOUNG]: "leaves",
    [v.CARROT_CROP]: "leaves",
    ...Object.fromEntries([...vy].map((n) => [n, "leaves"])),
    [v.GLASS]: "glass",
    [v.RGLASS]: "glass",
    [v.GLOWSTONE]: "glass",
    [v.ICE]: "glass",
    [v.RSTONE]: "metal",
    [v.STAIR_RSTONE]: "metal",
    [v.DETONATOR]: "metal",
    [v.REMOTE_STATION]: "metal",
    [v.METAL_DOOR]: "metal",
    [v.ARMORED_DOOR]: "metal",
    [v.FURNACE]: "metal",
    [v.CHAIN]: "metal",
    [v.BARBED_WIRE]: "metal",
    [v.FENCE_COBBLE]: "stone",
    [v.FENCE_STONE]: "stone",
    [v.FENCE_STONE_BRICKS]: "stone",
    [v.FENCE_SANDSTONE]: "sand",
    [v.FENCE_GATE_COBBLE]: "stone",
    [v.FENCE_GATE_STONE]: "stone",
    [v.FENCE_GATE_STONE_BRICKS]: "stone",
    [v.FENCE_GATE_SANDSTONE]: "sand",
    [v.COAL_ORE]: "ore",
    [v.IRON_ORE]: "ore",
    [v.GOLD_ORE]: "ore",
    [v.DIAMOND_ORE]: "ore",
    [v.TITANIUM_ORE]: "ore",
    [v.LUNAR_ORE]: "ore",
    [v.AUTUMN_LEAVES_ORANGE]: "leaves",
    [v.AUTUMN_LEAVES_RED]: "leaves",
    [v.AUTUMN_LEAVES_YELLOW]: "leaves",
    [v.BIRCH_LOG]: "wood",
    [v.DEAD_LOG]: "wood",
    [v.DARK_PLANKS]: "wood",
    [v.STAIR_DARK]: "wood",
    [v.COFFIN]: "wood",
    [v.POTION_SHELF]: "wood",
    [v.GRAVE_CROSS]: "wood",
    [v.SCARECROW]: "leaves",
    [v.LEAF_LITTER]: "leaves",
    [v.PUMPKIN]: "leaves",
    [v.JACK_O_LANTERN]: "leaves",
    [v.PUMPKIN_SPROUT]: "leaves",
    [v.PUMPKIN_YOUNG]: "leaves",
    [v.PUMPKIN_CROP]: "leaves",
    [v.CANDLE]: "wood",
    [v.COBWEB]: "leaves",
    [v.HANGING_HERBS]: "leaves",
    [v.FLY_AGARIC]: "leaves",
    [v.MUSHROOM]: "leaves",
    [v.AUTUMN_SAPLING]: "leaves",
    [v.SKULL]: "stone",
    [v.IRON_FENCE]: "metal",
    [v.CAULDRON]: "metal",
  },
  ca = (n) => _z[n] ?? "stone",
  n5 = (n) =>
    de.find((e) => e.id !== 0 && !!e.label && e.name === n.toLowerCase()),
  Rz = (n) => n > 0 && de[n].solid,
  LC = (n) => n > 0 && de[n].solid && !de[n].transparent,
  OS = (n) => {
    var e;
    return n > 0 && ((e = de[n]) == null ? void 0 : e.shape) === "stair";
  },
  IC = de
    .filter(
      (n) =>
        !!n.label &&
        n.id !== v.AIR &&
        n.id !== v.BEDROCK &&
        n.id !== v.PISTON_HEAD &&
        !CC.has(n.id),
    )
    .map((n) => n.id),
  i1 = 2048,
  M0 = [E.GLOCK, E.AK47, E.AWP, E.SHOTGUN],
  Fl = 64,
  Cz = () => M0.length * Fl,
  xp = i1 + 4 * Fl,
  h0 = ["scope", "suppressor", "laser", "mag", "light"],
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
  Iz = {
    [E.GLOCK]: ["scope", "suppressor", "laser", "mag", "light"],
    [E.AK47]: ["scope", "suppressor", "laser", "mag", "light"],
    [E.AWP]: ["scope", "suppressor", "laser", "mag", "light"],
    [E.SHOTGUN]: ["light"],
  },
  PC = (n, e) => (Iz[n] ?? []).includes(e),
  OC = [E.SCOPE_X2, E.SCOPE_X4, E.SCOPE_X8, E.SCOPE_X16, E.SCOPE_HOLO],
  n1 = {
    [E.FLASHLIGHT]: "light",
    [E.SUPPRESSOR]: "suppressor",
    [E.LASER_SIGHT]: "laser",
    [E.SCOPE_X2]: "scope",
    [E.SCOPE_X4]: "scope",
    [E.SCOPE_X8]: "scope",
    [E.SCOPE_X16]: "scope",
    [E.SCOPE_HOLO]: "scope",
    [E.EXT_MAG]: "mag",
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
    i = Math.floor(t / Fl);
  return i >= M0.length ? null : { wi: i, bits: t % Fl, light: e };
}
function Ti(n) {
  if (M0.includes(n)) return n;
  const e = NC(n);
  return e ? M0[e.wi] : 0;
}
