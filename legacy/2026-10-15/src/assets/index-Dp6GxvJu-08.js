// index-Dp6GxvJu 08 — push
// Lines 28482-28830 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
defineBlock(
  BLOCK.TROPICAL_SAPLING,
  "tropical_sapling",
  "Росток тропического дерева",
  "Tropical sapling",
  Bt + 12,
  3054671,
);
defineBlock(
  BLOCK.DESERT_SAPLING,
  "desert_sapling",
  "Росток пустынного дерева",
  "Desert sapling",
  Bt + 13,
  8492870,
);
defineBlock(
  BLOCK.PINE_SAPLING,
  "pine_sapling",
  "Росток хвойного дерева",
  "Pine sapling",
  Bt + 14,
  3238991,
);
defineBlock(
  BLOCK.SAKURA_SAPLING,
  "sakura_sapling",
  "Росток сакуры",
  "Sakura sapling",
  Bt + 15,
  14186920,
);
BLOCKS.push(
  blockDef(
    BLOCK.CACTUS,
    "cactus",
    "Кактус",
    28,
    [Bt + 16, Bt + 16, Bt + 16],
    4036671,
    { transparent: !0 },
    "Cactus",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.LAVA,
    "lava",
    "Лава",
    -1,
    [Bt + 17, Bt + 17, Bt + 17],
    16735e3,
    { solid: !1, transparent: !0, liquid: !0, light: 15 },
    "Lava",
  ),
);
defineBlock(BLOCK.FIRE, "fire", "Огонь", "Fire", Bt + 18, 16747042);
BLOCKS[BLOCK.FIRE].light = 15;
defineBlock(BLOCK.WHEAT_CROP, "wheat_crop", "Пшеница", "Wheat crop", Bt + 19, 14201148);
BLOCKS.push(
  blockDef(
    BLOCK.SNOW_LAYER,
    "snow_layer",
    "Снежный покров",
    4,
    [15, 15, 15],
    16054522,
    { solid: !1, transparent: !0, shape: "snow" },
    "Snow layer",
  ),
);
defineBlock(
  BLOCK.WHEAT_SPROUT,
  "wheat_sprout",
  "Ростки пшеницы",
  "Wheat sprouts",
  Bt + 20,
  7972930,
);
defineBlock(
  BLOCK.WHEAT_YOUNG,
  "young_wheat",
  "Молодая пшеница",
  "Young wheat",
  Bt + 21,
  11057229,
);
const Yf = Bt + 22;
BLOCKS.push(
  blockDef(
    BLOCK.TARGET,
    "target",
    "Мишень",
    90,
    [Yf, Yf, Yf],
    14174268,
    {},
    "Shooting target",
  ),
);
const as = Bt + 23;
defineBlock(
  BLOCK.DESERT_GRASS,
  "desert_grass",
  "Пустынная трава",
  "Desert grass",
  as,
  12100700,
);
BLOCKS.push(
  blockDef(
    BLOCK.FARMLAND,
    "farmland",
    "Удобренная земля",
    34,
    [as + 1, as + 2, 2],
    7031332,
    {},
    "Fertilised soil",
  ),
);
defineBlock(
  BLOCK.POTATO_SPROUT,
  "potato_sprout",
  "Ростки картофеля",
  "Potato sprouts",
  as + 3,
  7313989,
);
defineBlock(
  BLOCK.POTATO_YOUNG,
  "young_potato",
  "Молодой картофель",
  "Young potato",
  as + 4,
  6263872,
);
defineBlock(BLOCK.POTATO_CROP, "potato_crop", "Картофель", "Potato crop", as + 5, 5212730);
defineBlock(
  BLOCK.CARROT_SPROUT,
  "carrot_sprout",
  "Ростки моркови",
  "Carrot sprouts",
  as + 6,
  7840330,
);
defineBlock(
  BLOCK.CARROT_YOUNG,
  "young_carrot",
  "Молодая морковь",
  "Young carrot",
  as + 7,
  6922303,
);
defineBlock(BLOCK.CARROT_CROP, "carrot_crop", "Морковь", "Carrot crop", as + 8, 14711592);
const Wc = as + 9,
  Cx = 7;
BLOCKS.push(
  blockDef(
    BLOCK.CAKE,
    "cake",
    "Торт",
    10,
    [Wc, Wc + 1, Wc + 2],
    15918292,
    { shape: "cake", solid: !1, transparent: !0, light: 8, interactive: !0 },
    "Cake",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.LIGHTNING_ROD,
    "lightning_rod",
    "Громоотвод",
    40,
    [Hi + 2, Hi + 2, Hi + 2],
    12088115,
    { solid: !1, transparent: !0, shape: "device" },
    "Lightning rod",
  ),
);
const zd = Wc + 3,
  Qp = zd + 1;
BLOCKS.push(
  blockDef(
    BLOCK.CAMPFIRE,
    "campfire",
    "Костёр",
    20,
    [zd, zd, zd],
    13923882,
    { solid: !1, transparent: !0, light: 12, shape: "campfire" },
    "Campfire",
  ),
);
const BLOCK_ID_SEAWEED = Qp + 1;
defineBlock(BLOCK.SEAWEED, "seaweed", "Водоросли", "Seaweed", BLOCK_ID_SEAWEED, 3111498);
defineBlock(BLOCK.SEAGRASS, "seagrass", "Морская трава", "Seagrass", BLOCK_ID_SEAWEED + 1, 4168284);
defineBlock(
  BLOCK.CORAL_PINK,
  "pink_coral",
  "Розовый коралл",
  "Pink coral",
  BLOCK_ID_SEAWEED + 2,
  14967451,
);
defineBlock(BLOCK.CORAL_BLUE, "blue_coral", "Синий коралл", "Blue coral", BLOCK_ID_SEAWEED + 3, 4161504);
defineBlock(
  BLOCK.CORAL_YELLOW,
  "yellow_coral",
  "Жёлтый коралл",
  "Yellow coral",
  BLOCK_ID_SEAWEED + 4,
  15778375,
);
const _n = BLOCK_ID_SEAWEED + 5;
BLOCKS.push(
  blockDef(
    BLOCK.HIEROGLYPH_SANDSTONE,
    "hieroglyph_sandstone",
    "Песчаник с иероглифами",
    135,
    [_n, _n + 1, _n],
    13875567,
    {},
    "Hieroglyph sandstone",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.GOLD_INLAY,
    "gold_inlay",
    "Золотая инкрустация",
    150,
    [_n + 2, _n + 2, _n + 2],
    15251758,
    { light: 5 },
    "Gold inlay",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.LAPIS_INLAY,
    "lapis_inlay",
    "Лазуритовая инкрустация",
    125,
    [_n + 3, _n + 3, _n + 3],
    1526944,
    {},
    "Lapis inlay",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.EGYPTIAN_PILLAR,
    "egyptian_pillar",
    "Египетская колонна",
    140,
    [_n + 4, _n + 5, _n + 4],
    14205308,
    {},
    "Egyptian pillar",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.SARCOPHAGUS,
    "sarcophagus",
    "Саркофаг",
    175,
    [_n + 6, _n + 6, _n + 6],
    12094244,
    { interactive: !0 },
    "Sarcophagus",
  ),
);
const Wi = _n + 7;
BLOCKS.push(
  blockDef(
    BLOCK.LUNAR_REGOLITH,
    "lunar_regolith",
    "Лунный реголит",
    105,
    [Wi, Wi, Wi],
    10987426,
    {},
    "Lunar regolith",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.LUNAR_ROCK,
    "lunar_rock",
    "Лунная порода",
    180,
    [Wi + 1, Wi + 1, Wi + 1],
    7632250,
    {},
    "Lunar rock",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.LUNAR_BASALT,
    "lunar_basalt",
    "Лунный базальт",
    230,
    [Wi + 2, Wi + 2, Wi + 2],
    3750723,
    {},
    "Lunar basalt",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.LUNAR_ICE,
    "lunar_ice",
    "Лунный лёд",
    150,
    [Wi + 3, Wi + 3, Wi + 3],
    12245224,
    { transparent: !0 },
    "Lunar ice",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.LUNAR_ORE,
    "lunar_ore",
    "Гелий-3 руда",
    320,
    [Wi + 4, Wi + 4, Wi + 4],
    7857407,
    { light: 5 },
    "Helium-3 ore",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.LUNAR_PANEL,
    "lunar_panel",
    "Панель лунной базы",
    12001,
    [Wi + 5, Wi + 5, Wi + 5],
    15001577,
    {},
    "Lunar base panel",
  ),
);
