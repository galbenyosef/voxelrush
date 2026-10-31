// index-BeUlFSPp 09 — map
// Lines 28533-28872 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const UI = new Set([
    v.SAPLING,
    v.TROPICAL_SAPLING,
    v.DESERT_SAPLING,
    v.PINE_SAPLING,
    v.SAKURA_SAPLING,
    v.AUTUMN_SAPLING,
  ]),
  CS = [v.AUTUMN_LEAVES_ORANGE, v.AUTUMN_LEAVES_RED, v.AUTUMN_LEAVES_YELLOW],
  oW = new Set([
    v.LEAVES,
    v.TROPICAL_LEAVES,
    v.DESERT_LEAVES,
    v.PINE_LEAVES,
    v.SAKURA_LEAVES,
    ...CS,
  ]),
  aW = new Set([
    v.LOG,
    v.TROPICAL_LOG,
    v.DESERT_LOG,
    v.PINE_LOG,
    v.SAKURA_LOG,
    v.BIRCH_LOG,
    v.DEAD_LOG,
  ]),
  GI = new Set([v.WHEAT_SPROUT, v.WHEAT_YOUNG, v.WHEAT_CROP]),
  WI = new Set([v.POTATO_SPROUT, v.POTATO_YOUNG, v.POTATO_CROP]),
  $I = new Set([v.CARROT_SPROUT, v.CARROT_YOUNG, v.CARROT_CROP]),
  VI = new Set([v.PUMPKIN_SPROUT, v.PUMPKIN_YOUNG, v.PUMPKIN_CROP]),
  qI = new Set([...GI, ...WI, ...$I, ...VI, ...M5]),
  lh = (s) => qI.has(s),
  rW = {
    [v.WHEAT_SPROUT]: [v.WHEAT_SPROUT, v.WHEAT_YOUNG, v.WHEAT_CROP],
    [v.POTATO_SPROUT]: [v.POTATO_SPROUT, v.POTATO_YOUNG, v.POTATO_CROP],
    [v.CARROT_SPROUT]: [v.CARROT_SPROUT, v.CARROT_YOUNG, v.CARROT_CROP],
    [v.PUMPKIN_SPROUT]: [v.PUMPKIN_SPROUT, v.PUMPKIN_YOUNG, v.PUMPKIN_CROP],
    ...Object.fromEntries(Yc.map((s) => [s.stages[0], [...s.stages]])),
  },
  lW = (s) => s === v.DIRT || s === v.FARMLAND,
  cW = (s) => s === v.GRASS || s === v.DIRT || s === v.FARMLAND,
  _x = (s) => (II(s) ? cW : lW),
  hW = new Set([
    ...UI,
    v.TALL_GRASS,
    v.DESERT_GRASS,
    v.FLOWER_RED,
    v.FLOWER_WHITE,
    v.FLOWER_BLUE,
    v.FLOWER_PINK,
    v.FLOWER_YELLOW,
    v.FIRE,
    ...GI,
    ...WI,
    ...$I,
    ...VI,
    v.FLY_AGARIC,
    v.MUSHROOM,
    v.LEAF_LITTER,
    ...M5,
    ...NI,
  ]),
  ra = (s) => hW.has(s),
  H2 = (s) => UI.has(s),
  en = (s) => oW.has(s),
  Fm = (s) => aW.has(s),
  KI = 8,
  kc = (s) => {
    if (s & KI) return 1;
    const e = s & 7;
    return e === 0 ? 0.875 : (0.875 * (8 - e)) / 8;
  };
function dW(s, e, t, i, n = v.WATER) {
  if (s.getBlock(e, t, i) !== n) return [0, 0, 0];
  const o = s.getMeta(e, t, i),
    a = o & 7;
  let r = 0,
    l = 0;
  for (const [h, d] of [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]) {
    const u = s.getBlock(e + h, t, i + d);
    if (u === n) {
      const m = (s.getMeta(e + h, t, i + d) & 7) - a;
      ((r += h * m), (l += d * m));
    } else
      u === v.AIR &&
        s.getBlock(e + h, t - 1, i + d) === v.AIR &&
        ((r += h * (8 - a)), (l += d * (8 - a)));
  }
  const c = Math.hypot(r, l);
  return (c > 0.001 && ((r /= c), (l /= c)), [r, o & KI ? -1 : 0, l]);
}
const ov = (s, e) =>
    s === v.RTORCH
      ? e & fn
        ? 0
        : 7
      : s === v.LAMP
        ? e & fn
          ? 15
          : 0
        : s === v.REDSTONE
          ? kI(e) > 0
            ? 2
            : 0
          : s === v.FURNACE
            ? e & fn
              ? 13
              : 0
            : le[s].light,
  Fc = new Uint8Array(256);
for (const s of le) Fc[s.id] = s.light;
Fc[v.LAMP] = 15;
Fc[v.REDSTONE] = 2;
Fc[v.FURNACE] = 13;
Fc[v.FIRE] = 15;
Fc[v.LAVA] = 15;
const uW = {
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
    [v.WHEAT_FIELD]: "dirt",
    [v.STUBBLE_FIELD]: "dirt",
    [v.CROP_FIELD]: "dirt",
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
    ...Object.fromEntries([...M5].map((s) => [s, "leaves"])),
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
  Ha = (s) => uW[s] ?? "stone",
  cb = (s) =>
    le.find((e) => e.id !== 0 && !!e.label && e.name === s.toLowerCase()),
  fW = (s) => s > 0 && le[s].solid,
  YI = (s) => s > 0 && le[s].solid && !le[s].transparent,
  uA = (s) => s > 0 && le[s]?.shape === "stair",
  jI = le
    .filter(
      (s) =>
        !!s.label &&
        s.id !== v.AIR &&
        s.id !== v.BEDROCK &&
        s.id !== v.PISTON_HEAD &&
        !qI.has(s.id),
    )
    .map((s) => s.id),
  XI = 4,
  pW = 28,
  Rx = (s) =>
    s
      .replace(/\r/g, "")
      .replace(/[\x00-\x08\x0b-\x1f\x7f]/g, "")
      .split(
        `
`,
      )
      .slice(0, XI)
      .map((e) => Array.from(e).slice(0, pW).join("")).join(`
`);
function mW(s) {
  const e = (
    s.split(`
`)[1] ?? ""
  )
    .trim()
    .toLowerCase();
  return (
    {
      "[gate]": "gate",
      "[gate vertical]": "gate",
      "[gate horizontal]": "gate horizontal",
      "[bridge]": "bridge",
      "[lift up]": "lift up",
      "[lift down]": "lift down",
      "[lift]": "lift",
    }[e] ?? ""
  );
}
function ZI(s) {
  const e = !!(s & 4),
    t = [[0.06, 0.42, e ? 0.03 : 0.45, 0.94, 0.96, e ? 0.13 : 0.55]];
  e || t.push([0.45, 0, 0.45, 0.55, 0.42, 0.55]);
  const i = (n, o) => {
    switch (s & 3) {
      case 1:
        return [o, 1 - n];
      case 2:
        return [1 - n, 1 - o];
      case 3:
        return [1 - o, n];
      default:
        return [n, o];
    }
  };
  return t.map(([n, o, a, r, l, c]) => {
    const h = i(n, a),
      d = i(r, c);
    return [
      Math.min(h[0], d[0]),
      o,
      Math.min(h[1], d[1]),
      Math.max(h[0], d[0]),
      l,
      Math.max(h[1], d[1]),
    ];
  });
}
