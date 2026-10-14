// assets__index-Dp6GxvJu 08 — push
// Lines 28482-28830 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
wn(
  v.TROPICAL_SAPLING,
  "tropical_sapling",
  "Росток тропического дерева",
  "Tropical sapling",
  Bt + 12,
  3054671,
);
wn(
  v.DESERT_SAPLING,
  "desert_sapling",
  "Росток пустынного дерева",
  "Desert sapling",
  Bt + 13,
  8492870,
);
wn(
  v.PINE_SAPLING,
  "pine_sapling",
  "Росток хвойного дерева",
  "Pine sapling",
  Bt + 14,
  3238991,
);
wn(
  v.SAKURA_SAPLING,
  "sakura_sapling",
  "Росток сакуры",
  "Sakura sapling",
  Bt + 15,
  14186920,
);
de.push(
  Fe(
    v.CACTUS,
    "cactus",
    "Кактус",
    28,
    [Bt + 16, Bt + 16, Bt + 16],
    4036671,
    { transparent: !0 },
    "Cactus",
  ),
);
de.push(
  Fe(
    v.LAVA,
    "lava",
    "Лава",
    -1,
    [Bt + 17, Bt + 17, Bt + 17],
    16735e3,
    { solid: !1, transparent: !0, liquid: !0, light: 15 },
    "Lava",
  ),
);
wn(v.FIRE, "fire", "Огонь", "Fire", Bt + 18, 16747042);
de[v.FIRE].light = 15;
wn(v.WHEAT_CROP, "wheat_crop", "Пшеница", "Wheat crop", Bt + 19, 14201148);
de.push(
  Fe(
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
wn(
  v.WHEAT_SPROUT,
  "wheat_sprout",
  "Ростки пшеницы",
  "Wheat sprouts",
  Bt + 20,
  7972930,
);
wn(
  v.WHEAT_YOUNG,
  "young_wheat",
  "Молодая пшеница",
  "Young wheat",
  Bt + 21,
  11057229,
);
const Yf = Bt + 22;
de.push(
  Fe(
    v.TARGET,
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
wn(
  v.DESERT_GRASS,
  "desert_grass",
  "Пустынная трава",
  "Desert grass",
  as,
  12100700,
);
de.push(
  Fe(
    v.FARMLAND,
    "farmland",
    "Удобренная земля",
    34,
    [as + 1, as + 2, 2],
    7031332,
    {},
    "Fertilised soil",
  ),
);
wn(
  v.POTATO_SPROUT,
  "potato_sprout",
  "Ростки картофеля",
  "Potato sprouts",
  as + 3,
  7313989,
);
wn(
  v.POTATO_YOUNG,
  "young_potato",
  "Молодой картофель",
  "Young potato",
  as + 4,
  6263872,
);
wn(v.POTATO_CROP, "potato_crop", "Картофель", "Potato crop", as + 5, 5212730);
wn(
  v.CARROT_SPROUT,
  "carrot_sprout",
  "Ростки моркови",
  "Carrot sprouts",
  as + 6,
  7840330,
);
wn(
  v.CARROT_YOUNG,
  "young_carrot",
  "Молодая морковь",
  "Young carrot",
  as + 7,
  6922303,
);
wn(v.CARROT_CROP, "carrot_crop", "Морковь", "Carrot crop", as + 8, 14711592);
const Wc = as + 9,
  Cx = 7;
de.push(
  Fe(
    v.CAKE,
    "cake",
    "Торт",
    10,
    [Wc, Wc + 1, Wc + 2],
    15918292,
    { shape: "cake", solid: !1, transparent: !0, light: 8, interactive: !0 },
    "Cake",
  ),
);
de.push(
  Fe(
    v.LIGHTNING_ROD,
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
de.push(
  Fe(
    v.CAMPFIRE,
    "campfire",
    "Костёр",
    20,
    [zd, zd, zd],
    13923882,
    { solid: !1, transparent: !0, light: 12, shape: "campfire" },
    "Campfire",
  ),
);
const qo = Qp + 1;
wn(v.SEAWEED, "seaweed", "Водоросли", "Seaweed", qo, 3111498);
wn(v.SEAGRASS, "seagrass", "Морская трава", "Seagrass", qo + 1, 4168284);
wn(
  v.CORAL_PINK,
  "pink_coral",
  "Розовый коралл",
  "Pink coral",
  qo + 2,
  14967451,
);
wn(v.CORAL_BLUE, "blue_coral", "Синий коралл", "Blue coral", qo + 3, 4161504);
wn(
  v.CORAL_YELLOW,
  "yellow_coral",
  "Жёлтый коралл",
  "Yellow coral",
  qo + 4,
  15778375,
);
const _n = qo + 5;
de.push(
  Fe(
    v.HIEROGLYPH_SANDSTONE,
    "hieroglyph_sandstone",
    "Песчаник с иероглифами",
    135,
    [_n, _n + 1, _n],
    13875567,
    {},
    "Hieroglyph sandstone",
  ),
);
de.push(
  Fe(
    v.GOLD_INLAY,
    "gold_inlay",
    "Золотая инкрустация",
    150,
    [_n + 2, _n + 2, _n + 2],
    15251758,
    { light: 5 },
    "Gold inlay",
  ),
);
de.push(
  Fe(
    v.LAPIS_INLAY,
    "lapis_inlay",
    "Лазуритовая инкрустация",
    125,
    [_n + 3, _n + 3, _n + 3],
    1526944,
    {},
    "Lapis inlay",
  ),
);
de.push(
  Fe(
    v.EGYPTIAN_PILLAR,
    "egyptian_pillar",
    "Египетская колонна",
    140,
    [_n + 4, _n + 5, _n + 4],
    14205308,
    {},
    "Egyptian pillar",
  ),
);
de.push(
  Fe(
    v.SARCOPHAGUS,
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
de.push(
  Fe(
    v.LUNAR_REGOLITH,
    "lunar_regolith",
    "Лунный реголит",
    105,
    [Wi, Wi, Wi],
    10987426,
    {},
    "Lunar regolith",
  ),
);
de.push(
  Fe(
    v.LUNAR_ROCK,
    "lunar_rock",
    "Лунная порода",
    180,
    [Wi + 1, Wi + 1, Wi + 1],
    7632250,
    {},
    "Lunar rock",
  ),
);
de.push(
  Fe(
    v.LUNAR_BASALT,
    "lunar_basalt",
    "Лунный базальт",
    230,
    [Wi + 2, Wi + 2, Wi + 2],
    3750723,
    {},
    "Lunar basalt",
  ),
);
de.push(
  Fe(
    v.LUNAR_ICE,
    "lunar_ice",
    "Лунный лёд",
    150,
    [Wi + 3, Wi + 3, Wi + 3],
    12245224,
    { transparent: !0 },
    "Lunar ice",
  ),
);
de.push(
  Fe(
    v.LUNAR_ORE,
    "lunar_ore",
    "Гелий-3 руда",
    320,
    [Wi + 4, Wi + 4, Wi + 4],
    7857407,
    { light: 5 },
    "Helium-3 ore",
  ),
);
de.push(
  Fe(
    v.LUNAR_PANEL,
    "lunar_panel",
    "Панель лунной базы",
    12001,
    [Wi + 5, Wi + 5, Wi + 5],
    15001577,
    {},
    "Lunar base panel",
  ),
);
