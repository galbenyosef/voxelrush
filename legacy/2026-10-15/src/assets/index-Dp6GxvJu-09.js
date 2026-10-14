// index-Dp6GxvJu 09 — push
// Lines 28831-29180 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
BLOCKS.push(
  blockDef(
    BLOCK.LUNAR_GLASS,
    "lunar_glass",
    "Герметичное стекло",
    3001,
    [Wi + 6, Wi + 6, Wi + 6],
    9554398,
    { transparent: !0 },
    "Pressurised glass",
  ),
);
const rg = Wi + 7,
  Jp = Wi + 8;
BLOCKS.push(
  blockDef(
    BLOCK.COMPOSTER,
    "composter",
    "Компостер",
    55,
    [Jp, rg, rg],
    9265720,
    { transparent: !0, shape: "composter", interactive: !0 },
    "Composter",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.WOOD_TABLE,
    "wood_table",
    "Деревянный стол",
    45,
    [10, 10, 10],
    11570259,
    { transparent: !0, shape: "furniture" },
    "Wooden table",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.WOOD_CHAIR,
    "wood_chair",
    "Стул с мягким сиденьем",
    35,
    [21, 10, 10],
    11366473,
    { transparent: !0, shape: "furniture", interactive: !0 },
    "Upholstered chair",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.WOOD_BENCH,
    "wood_bench",
    "Деревянная скамья",
    40,
    [10, 10, 10],
    11570259,
    { transparent: !0, shape: "furniture", interactive: !0 },
    "Wooden bench",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.MAP_TABLE,
    "map_table",
    "Штабной стол с картой",
    55,
    [BLOCKS.find((n) => n.name === "green_clay").tex[0], 10, 10],
    7898715,
    { transparent: !0, shape: "furniture" },
    "Map table",
  ),
);
const zl = Jp + 1,
  jc = Jp + 2;
BLOCKS.push(
  blockDef(
    BLOCK.REMOTE_STATION,
    "remote_station",
    "Станция удалённого управления",
    120,
    [zl, zl, zl],
    4684395,
    { transparent: !0, shape: "furniture", interactive: !0, light: 5 },
    "Remote command station",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.MINE_AP,
    "mine_ap",
    "Противопехотная мина",
    12,
    [51, 51, 51],
    5403460,
    { solid: !1, transparent: !0, shape: "furniture" },
    "Anti-personnel mine",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.MINE_AT,
    "mine_at",
    "Противотанковая мина",
    24,
    [50, 50, 50],
    9339218,
    { solid: !1, transparent: !0, shape: "furniture" },
    "Anti-tank mine",
  ),
);
const Xc = jc + 1,
  _c = Xc + 2;
BLOCKS[BLOCK.WOOD_CHAIR].tex[0] = _c;
BLOCKS.push(
  blockDef(
    BLOCK.SAVANNA_GRASS,
    "savanna_grass",
    "Сухой дёрн саванны",
    18,
    [Xc, Xc + 1, 2],
    11971426,
    {},
    "Savanna turf",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.STAIR_RSTONE,
    "reinforced_stone_stairs",
    "Армированная ступенька",
    300,
    [16, 16, 16],
    7304320,
    { transparent: !0, shape: "stair" },
    "Reinforced stone stair",
  ),
);
for (const [n, e, t, i, s] of [
  [
    BLOCK.KITCHEN_COUNTER,
    "kitchen_counter",
    "Кухонная тумба",
    "Kitchen cabinet",
    10584160,
  ],
  [BLOCK.SINK, "sink", "Мойка со смесителем", "Sink and faucet", 12831182],
  [
    BLOCK.STORAGE_SHELF,
    "storage_shelf",
    "Стеллаж с припасами",
    "Supply shelving",
    7174759,
  ],
  [BLOCK.SOFA, "sofa", "Мягкий диван", "Upholstered sofa", 10448720],
  [BLOCK.WALL_LIGHT, "wall_light", "Настенный светильник", "Wall light", 16770224],
  [
    BLOCK.POTTED_PLANT,
    "potted_plant",
    "Растение в горшке",
    "Potted plant",
    6587986,
  ],
])
  BLOCKS.push(
    blockDef(
      n,
      e,
      t,
      45,
      [10, 10, 10],
      s,
      {
        transparent: !0,
        shape: "furniture",
        interactive: n === BLOCK.SOFA,
        solid: n !== BLOCK.WALL_LIGHT && n !== BLOCK.POTTED_PLANT,
        light: n === BLOCK.WALL_LIGHT ? 14 : 0,
      },
      i,
    ),
  );
const lg = 158,
  kS = 173,
  tc = [
    {
      key: "raspberry",
      ru: "малины",
      en: "Raspberry",
      color: 12595280,
      stages: [
        BLOCK.RASPBERRY_BUSH_SPROUT,
        BLOCK.RASPBERRY_BUSH_YOUNG,
        BLOCK.RASPBERRY_BUSH_RIPE,
      ],
    },
    {
      key: "blueberry",
      ru: "черники",
      en: "Blueberry",
      color: 4872872,
      stages: [
        BLOCK.BLUEBERRY_BUSH_SPROUT,
        BLOCK.BLUEBERRY_BUSH_YOUNG,
        BLOCK.BLUEBERRY_BUSH_RIPE,
      ],
    },
    {
      key: "blackberry",
      ru: "ежевики",
      en: "Blackberry",
      color: 4008773,
      stages: [
        BLOCK.BLACKBERRY_BUSH_SPROUT,
        BLOCK.BLACKBERRY_BUSH_YOUNG,
        BLOCK.BLACKBERRY_BUSH_RIPE,
      ],
    },
  ];
tc.forEach((n, e) => {
  const t = ["Куст", "Молодой куст", "Спелый куст"],
    i = ["bush sprout", "young bush", "ripe bush"];
  n.stages.forEach((s, o) => {
    BLOCKS.push(
      blockDef(
        s,
        `${n.key}_bush_${["sprout", "young", "ripe"][o]}`,
        `${t[o]} ${n.ru}`,
        4,
        [kS + e * 3 + o, lg + e * 3 + o, lg + e * 3 + o],
        o === 2 ? n.color : 4880952,
        { solid: !1, transparent: !0, shape: "bush" },
        `${n.en} ${i[o]}`,
      ),
    );
  });
});
const A2 = 168;
BLOCKS.push(
  blockDef(
    BLOCK.RGLOWSTONE,
    "reinforced_glowstone",
    "Армированный светокамень",
    300,
    [A2, A2, A2],
    16768416,
    { light: 15 },
    "Reinforced glowstone",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.SIGN,
    "sign",
    "Табличка",
    25,
    [10, 10, 10],
    11570259,
    { solid: !1, transparent: !0, shape: "device", interactive: !0 },
    "Sign",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.RADIO_RELAY,
    "radio_relay",
    "Радиореле",
    35,
    [120, 120, 120],
    6327420,
    { solid: !0, transparent: !0, shape: "device", interactive: !0 },
    "Radio relay",
  ),
);
const kx = 204,
  tz = 205,
  jv = 206,
  yy = 207,
  Yl = 208,
  LS = 209,
  iz = 210,
  IS = 211,
  _2 = 212,
  Xv = 213,
  Jh = 214,
  _r = 215,
  nz = 216,
  R2 = 217,
  Zv = 218,
  Rs = 219,
  Lx = 220,
  c0 = 221,
  Qv = 222,
  Jv = 223,
  sz = 224,
  oz = 225,
  e5 = 226,
  t5 = 227,
  sa = 228,
  fC = 229,
  az = 230;
BLOCKS.push(
  blockDef(
    BLOCK.AUTUMN_LEAVES_ORANGE,
    "autumn_leaves_orange",
    "Оранжевая осенняя листва",
    8,
    [201, 201, 201],
    14251818,
    { transparent: !0 },
    "Orange autumn leaves",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.AUTUMN_LEAVES_RED,
    "autumn_leaves_red",
    "Багряная листва",
    8,
    [202, 202, 202],
    12071466,
    { transparent: !0 },
    "Crimson autumn leaves",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.AUTUMN_LEAVES_YELLOW,
    "autumn_leaves_yellow",
    "Золотая листва",
    8,
    [203, 203, 203],
    14923066,
    { transparent: !0 },
    "Golden autumn leaves",
  ),
);
BLOCKS.push(
  blockDef(
    BLOCK.BIRCH_LOG,
    "birch_log",
    "Берёзовое бревно",
    55,
    [kx, tz, kx],
    14999764,
    {},
    "Birch log",
  ),
);
