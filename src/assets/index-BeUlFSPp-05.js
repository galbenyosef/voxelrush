// index-BeUlFSPp 05 — push
// Lines 27149-27497 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
Ts(
  v.TROPICAL_SAPLING,
  "tropical_sapling",
  "Росток тропического дерева",
  "Tropical sapling",
  zt + 12,
  3054671,
);
Ts(
  v.DESERT_SAPLING,
  "desert_sapling",
  "Росток пустынного дерева",
  "Desert sapling",
  zt + 13,
  8492870,
);
Ts(
  v.PINE_SAPLING,
  "pine_sapling",
  "Росток хвойного дерева",
  "Pine sapling",
  zt + 14,
  3238991,
);
Ts(
  v.SAKURA_SAPLING,
  "sakura_sapling",
  "Росток сакуры",
  "Sakura sapling",
  zt + 15,
  14186920,
);
le.push(
  Ye(
    v.CACTUS,
    "cactus",
    "Кактус",
    28,
    [zt + 16, zt + 16, zt + 16],
    4036671,
    { transparent: !0 },
    "Cactus",
  ),
);
le.push(
  Ye(
    v.LAVA,
    "lava",
    "Лава",
    -1,
    [zt + 17, zt + 17, zt + 17],
    16735e3,
    { solid: !1, transparent: !0, liquid: !0, light: 15 },
    "Lava",
  ),
);
Ts(v.FIRE, "fire", "Огонь", "Fire", zt + 18, 16747042);
le[v.FIRE].light = 15;
Ts(v.WHEAT_CROP, "wheat_crop", "Пшеница", "Wheat crop", zt + 19, 14201148);
le.push(
  Ye(
    v.SNOW_LAYER,
    "snow_layer",
    "Снежный покров",
    4,
    [15, 15, 15],
    16054522,
    { solid: !1, transparent: !0, shape: "snow" },
    "Snow layer",
  ),
);
Ts(
  v.WHEAT_SPROUT,
  "wheat_sprout",
  "Ростки пшеницы",
  "Wheat sprouts",
  zt + 20,
  7972930,
);
Ts(
  v.WHEAT_YOUNG,
  "young_wheat",
  "Молодая пшеница",
  "Young wheat",
  zt + 21,
  11057229,
);
const A1 = zt + 22;
le.push(
  Ye(
    v.TARGET,
    "target",
    "Мишень",
    90,
    [A1, A1, A1],
    14174268,
    {},
    "Shooting target",
  ),
);
const mn = zt + 23;
Ts(
  v.DESERT_GRASS,
  "desert_grass",
  "Пустынная трава",
  "Desert grass",
  mn,
  12100700,
);
le.push(
  Ye(
    v.FARMLAND,
    "farmland",
    "Удобренная земля",
    34,
    [mn + 1, mn + 2, 2],
    7031332,
    {},
    "Fertilised soil",
  ),
);
Ts(
  v.POTATO_SPROUT,
  "potato_sprout",
  "Ростки картофеля",
  "Potato sprouts",
  mn + 3,
  7313989,
);
Ts(
  v.POTATO_YOUNG,
  "young_potato",
  "Молодой картофель",
  "Young potato",
  mn + 4,
  6263872,
);
Ts(v.POTATO_CROP, "potato_crop", "Картофель", "Potato crop", mn + 5, 5212730);
Ts(
  v.CARROT_SPROUT,
  "carrot_sprout",
  "Ростки моркови",
  "Carrot sprouts",
  mn + 6,
  7840330,
);
Ts(
  v.CARROT_YOUNG,
  "young_carrot",
  "Молодая морковь",
  "Young carrot",
  mn + 7,
  6922303,
);
Ts(v.CARROT_CROP, "carrot_crop", "Морковь", "Carrot crop", mn + 8, 14711592);
const P0 = mn + 9,
  yx = 7;
le.push(
  Ye(
    v.CAKE,
    "cake",
    "Торт",
    10,
    [P0, P0 + 1, P0 + 2],
    15918292,
    { shape: "cake", solid: !1, transparent: !0, light: 8, interactive: !0 },
    "Cake",
  ),
);
le.push(
  Ye(
    v.LIGHTNING_ROD,
    "lightning_rod",
    "Громоотвод",
    40,
    [Ki + 2, Ki + 2, Ki + 2],
    12088115,
    { solid: !1, transparent: !0, shape: "device" },
    "Lightning rod",
  ),
);
const Ju = P0 + 3,
  Hm = Ju + 1;
le.push(
  Ye(
    v.CAMPFIRE,
    "campfire",
    "Костёр",
    20,
    [Ju, Ju, Ju],
    13923882,
    { solid: !1, transparent: !0, light: 12, shape: "campfire" },
    "Campfire",
  ),
);
const ma = Hm + 1;
Ts(v.SEAWEED, "seaweed", "Водоросли", "Seaweed", ma, 3111498);
Ts(v.SEAGRASS, "seagrass", "Морская трава", "Seagrass", ma + 1, 4168284);
Ts(
  v.CORAL_PINK,
  "pink_coral",
  "Розовый коралл",
  "Pink coral",
  ma + 2,
  14967451,
);
Ts(v.CORAL_BLUE, "blue_coral", "Синий коралл", "Blue coral", ma + 3, 4161504);
Ts(
  v.CORAL_YELLOW,
  "yellow_coral",
  "Жёлтый коралл",
  "Yellow coral",
  ma + 4,
  15778375,
);
const Ps = ma + 5;
le.push(
  Ye(
    v.HIEROGLYPH_SANDSTONE,
    "hieroglyph_sandstone",
    "Песчаник с иероглифами",
    135,
    [Ps, Ps + 1, Ps],
    13875567,
    {},
    "Hieroglyph sandstone",
  ),
);
le.push(
  Ye(
    v.GOLD_INLAY,
    "gold_inlay",
    "Золотая инкрустация",
    150,
    [Ps + 2, Ps + 2, Ps + 2],
    15251758,
    { light: 5 },
    "Gold inlay",
  ),
);
le.push(
  Ye(
    v.LAPIS_INLAY,
    "lapis_inlay",
    "Лазуритовая инкрустация",
    125,
    [Ps + 3, Ps + 3, Ps + 3],
    1526944,
    {},
    "Lapis inlay",
  ),
);
le.push(
  Ye(
    v.EGYPTIAN_PILLAR,
    "egyptian_pillar",
    "Египетская колонна",
    140,
    [Ps + 4, Ps + 5, Ps + 4],
    14205308,
    {},
    "Egyptian pillar",
  ),
);
le.push(
  Ye(
    v.SARCOPHAGUS,
    "sarcophagus",
    "Саркофаг",
    175,
    [Ps + 6, Ps + 6, Ps + 6],
    12094244,
    { interactive: !0 },
    "Sarcophagus",
  ),
);
const Qi = Ps + 7;
le.push(
  Ye(
    v.LUNAR_REGOLITH,
    "lunar_regolith",
    "Лунный реголит",
    105,
    [Qi, Qi, Qi],
    10987426,
    {},
    "Lunar regolith",
  ),
);
le.push(
  Ye(
    v.LUNAR_ROCK,
    "lunar_rock",
    "Лунная порода",
    180,
    [Qi + 1, Qi + 1, Qi + 1],
    7632250,
    {},
    "Lunar rock",
  ),
);
le.push(
  Ye(
    v.LUNAR_BASALT,
    "lunar_basalt",
    "Лунный базальт",
    230,
    [Qi + 2, Qi + 2, Qi + 2],
    3750723,
    {},
    "Lunar basalt",
  ),
);
le.push(
  Ye(
    v.LUNAR_ICE,
    "lunar_ice",
    "Лунный лёд",
    150,
    [Qi + 3, Qi + 3, Qi + 3],
    12245224,
    { transparent: !0 },
    "Lunar ice",
  ),
);
le.push(
  Ye(
    v.LUNAR_ORE,
    "lunar_ore",
    "Гелий-3 руда",
    320,
    [Qi + 4, Qi + 4, Qi + 4],
    7857407,
    { light: 5 },
    "Helium-3 ore",
  ),
);
le.push(
  Ye(
    v.LUNAR_PANEL,
    "lunar_panel",
    "Панель лунной базы",
    12001,
    [Qi + 5, Qi + 5, Qi + 5],
    15001577,
    {},
    "Lunar base panel",
  ),
);
