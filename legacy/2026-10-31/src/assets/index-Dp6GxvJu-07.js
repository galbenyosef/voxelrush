// index-Dp6GxvJu 07 — block
// Lines 28136-28481 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
BLOCKS.push(
  blockDef(
    BLOCK.LANTERN,
    "lantern",
    "Фонарь",
    8,
    [Hi + 1, Hi + 1, Hi + 1],
    16169034,
    { solid: !1, transparent: !0, light: 14, shape: "lantern" },
    "Lantern",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.CHAIN,
    "chain",
    "Цепь",
    35,
    [Hi + 2, Hi + 2, Hi + 2],
    6384242,
    { solid: !1, transparent: !0, shape: "chain" },
    "Chain",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.MILITARY_CHEST,
    "military_chest",
    "Военный сундук",
    70,
    [Hi + 3, Hi + 3, Hi + 3],
    5202991,
    { interactive: !0, transparent: !0, shape: "furniture" },
    "Military chest",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.HAY_BALE,
    "hay_bale",
    "Стог сена",
    22,
    [Hi + 4, Hi + 4, Hi + 4],
    14002729,
    {},
    "Hay bale",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.BARREL,
    "barrel",
    "Бочка",
    45,
    [Hi + 5, Hi + 5, Hi + 5],
    8411697,
    { interactive: !0 },
    "Barrel",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.FENCE_WOOD,
    "wood_fence",
    "Деревянный забор",
    45,
    [nn, nn, nn],
    10976325,
    { transparent: !0, shape: "fence" },
    "Wooden fence",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.FENCE_COBBLE,
    "cobble_fence",
    "Булыжный забор",
    85,
    [nn + 1, nn + 1, nn + 1],
    7829367,
    { transparent: !0, shape: "fence" },
    "Cobblestone fence",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.FENCE_STONE,
    "stone_fence",
    "Каменный забор",
    95,
    [nn + 2, nn + 2, nn + 2],
    8947848,
    { transparent: !0, shape: "fence" },
    "Stone fence",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.FENCE_STONE_BRICKS,
    "stone_brick_fence",
    "Забор из каменного кирпича",
    120,
    [nn + 3, nn + 3, nn + 3],
    8750469,
    { transparent: !0, shape: "fence" },
    "Stone brick fence",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.FENCE_SANDSTONE,
    "sandstone_fence",
    "Забор из песчаника",
    105,
    [nn + 4, nn + 4, nn + 4],
    14074250,
    { transparent: !0, shape: "fence" },
    "Sandstone fence",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.FENCE_GATE_WOOD,
    "wood_fence_gate",
    "Деревянная калитка",
    45,
    [nn, nn, nn],
    10976325,
    { solid: !1, transparent: !0, shape: "gate", interactive: !0 },
    "Wooden fence gate",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.BARBED_WIRE,
    "barbed_wire",
    "Колючая проволока",
    32,
    [Hi + 6, Hi + 6, Hi + 6],
    7830912,
    { solid: !1, transparent: !0, shape: "wire" },
    "Barbed wire",
  ),
);
const defineBlock = (n, e, t, i, s, o) =>
  BLOCKS.push(
    blockDef(
      n,
      e,
      t,
      1,
      [s, s, s],
      o,
      { solid: !1, transparent: !0, shape: "plant" },
      i,
    ),
  );
defineBlock(BLOCK.TALL_GRASS, "tall_grass", "Высокая трава", "Tall grass", Hi + 7, 4025648);
defineBlock(
  BLOCK.FLOWER_RED,
  "red_flower",
  "Красный цветок",
  "Red flower",
  Hi + 8,
  14171442,
);
defineBlock(
  BLOCK.FLOWER_WHITE,
  "white_flower",
  "Белый цветок",
  "White flower",
  Hi + 9,
  15789797,
);
defineBlock(
  BLOCK.FLOWER_BLUE,
  "blue_flower",
  "Синий цветок",
  "Blue flower",
  Hi + 10,
  3895256,
);
defineBlock(
  BLOCK.FLOWER_PINK,
  "pink_flower",
  "Розовый цветок",
  "Pink flower",
  Hi + 11,
  15238829,
);
defineBlock(
  BLOCK.FLOWER_YELLOW,
  "yellow_flower",
  "Жёлтый цветок",
  "Yellow flower",
  Hi + 12,
  15847224,
);
BLOCKS.push(
  blockDef(
    BLOCK.FENCE_GATE_COBBLE,
    "cobble_fence_gate",
    "Булыжная калитка",
    85,
    [nn + 1, nn + 1, nn + 1],
    7829367,
    { solid: !1, transparent: !0, shape: "gate", interactive: !0 },
    "Cobblestone fence gate",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.FENCE_GATE_STONE,
    "stone_fence_gate",
    "Каменная калитка",
    95,
    [nn + 2, nn + 2, nn + 2],
    8947848,
    { solid: !1, transparent: !0, shape: "gate", interactive: !0 },
    "Stone fence gate",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.FENCE_GATE_STONE_BRICKS,
    "stone_brick_fence_gate",
    "Калитка из каменного кирпича",
    120,
    [nn + 3, nn + 3, nn + 3],
    8750469,
    { solid: !1, transparent: !0, shape: "gate", interactive: !0 },
    "Stone brick fence gate",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.FENCE_GATE_SANDSTONE,
    "sandstone_fence_gate",
    "Калитка из песчаника",
    105,
    [nn + 4, nn + 4, nn + 4],
    14074250,
    { solid: !1, transparent: !0, shape: "gate", interactive: !0 },
    "Sandstone fence gate",
  ),
);
const Bt = 95,
  aw = 184,
  T2 = 185,
  ez = [0.0625, 0, 0.0625, 0.9375, 1, 0.9375];
BLOCKS.push(
  blockDef(
    BLOCK.TROPICAL_LOG,
    "tropical_log",
    "Тропическое бревно",
    60,
    [Bt, Bt + 1, Bt],
    9066805,
    {},
    "Tropical log",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.TROPICAL_LEAVES,
    "tropical_leaves",
    "Тропическая листва",
    8,
    [Bt + 2, Bt + 2, Bt + 2],
    2329155,
    { transparent: !0 },
    "Tropical leaves",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.DESERT_LOG,
    "desert_log",
    "Пустынное бревно",
    60,
    [Bt + 3, Bt + 4, Bt + 3],
    9986105,
    {},
    "Desert log",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.DESERT_LEAVES,
    "desert_leaves",
    "Пустынная листва",
    8,
    [Bt + 5, Bt + 5, Bt + 5],
    8100413,
    { transparent: !0 },
    "Desert leaves",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.PINE_LOG,
    "pine_log",
    "Хвойное бревно",
    65,
    [Bt + 6, Bt + 7, Bt + 6],
    6505517,
    {},
    "Pine log",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.PINE_LEAVES,
    "pine_leaves",
    "Хвоя",
    9,
    [Bt + 8, Bt + 8, Bt + 8],
    2645317,
    { transparent: !0 },
    "Pine needles",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.SAKURA_LOG,
    "sakura_log",
    "Бревно сакуры",
    58,
    [Bt + 9, Bt + 10, Bt + 9],
    7753796,
    {},
    "Sakura log",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.SAKURA_LEAVES,
    "sakura_leaves",
    "Листва сакуры",
    8,
    [Bt + 11, Bt + 11, Bt + 11],
    15306938,
    { transparent: !0 },
    "Sakura leaves",
  ),
);
