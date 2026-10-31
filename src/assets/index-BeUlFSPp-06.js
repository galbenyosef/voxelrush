// index-BeUlFSPp 06 — push
// Lines 27498-27847 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
le.push(
  Ye(
    v.LUNAR_GLASS,
    "lunar_glass",
    "Герметичное стекло",
    3001,
    [Qi + 6, Qi + 6, Qi + 6],
    9554398,
    { transparent: !0 },
    "Pressurised glass",
  ),
);
const iv = Qi + 7,
  Bm = Qi + 8;
le.push(
  Ye(
    v.COMPOSTER,
    "composter",
    "Компостер",
    55,
    [Bm, iv, iv],
    9265720,
    { transparent: !0, shape: "composter", interactive: !0 },
    "Composter",
  ),
);
le.push(
  Ye(
    v.WOOD_TABLE,
    "wood_table",
    "Деревянный стол",
    45,
    [10, 10, 10],
    11570259,
    { transparent: !0, shape: "furniture" },
    "Wooden table",
  ),
);
le.push(
  Ye(
    v.WOOD_CHAIR,
    "wood_chair",
    "Стул с мягким сиденьем",
    35,
    [21, 10, 10],
    11366473,
    { transparent: !0, shape: "furniture", interactive: !0 },
    "Upholstered chair",
  ),
);
le.push(
  Ye(
    v.WOOD_BENCH,
    "wood_bench",
    "Деревянная скамья",
    40,
    [10, 10, 10],
    11570259,
    { transparent: !0, shape: "furniture", interactive: !0 },
    "Wooden bench",
  ),
);
le.push(
  Ye(
    v.MAP_TABLE,
    "map_table",
    "Штабной стол с картой",
    55,
    [le.find((s) => s.name === "green_clay").tex[0], 10, 10],
    7898715,
    { transparent: !0, shape: "furniture" },
    "Map table",
  ),
);
const Rc = Bm + 1,
  F0 = Bm + 2;
le.push(
  Ye(
    v.REMOTE_STATION,
    "remote_station",
    "Станция удалённого управления",
    120,
    [Rc, Rc, Rc],
    4684395,
    { transparent: !0, shape: "furniture", interactive: !0, light: 5 },
    "Remote command station",
  ),
);
le.push(
  Ye(
    v.MINE_AP,
    "mine_ap",
    "Противопехотная мина",
    12,
    [51, 51, 51],
    5403460,
    { solid: !1, transparent: !0, shape: "furniture" },
    "Anti-personnel mine",
  ),
);
le.push(
  Ye(
    v.MINE_AT,
    "mine_at",
    "Противотанковая мина",
    24,
    [50, 50, 50],
    9339218,
    { solid: !1, transparent: !0, shape: "furniture" },
    "Anti-tank mine",
  ),
);
const U0 = F0 + 1,
  y0 = U0 + 2;
le[v.WOOD_CHAIR].tex[0] = y0;
le.push(
  Ye(
    v.SAVANNA_GRASS,
    "savanna_grass",
    "Сухой дёрн саванны",
    18,
    [U0, U0 + 1, 2],
    11971426,
    {},
    "Savanna turf",
  ),
);
le.push(
  Ye(
    v.STAIR_RSTONE,
    "reinforced_stone_stairs",
    "Армированная ступенька",
    300,
    [16, 16, 16],
    7304320,
    { transparent: !0, shape: "stair" },
    "Reinforced stone stair",
  ),
);
for (const [s, e, t, i, n] of [
  [
    v.KITCHEN_COUNTER,
    "kitchen_counter",
    "Кухонная тумба",
    "Kitchen cabinet",
    10584160,
  ],
  [v.SINK, "sink", "Мойка со смесителем", "Sink and faucet", 12831182],
  [
    v.STORAGE_SHELF,
    "storage_shelf",
    "Стеллаж с припасами",
    "Supply shelving",
    7174759,
  ],
  [v.SOFA, "sofa", "Мягкий диван", "Upholstered sofa", 10448720],
  [v.WALL_LIGHT, "wall_light", "Настенный светильник", "Wall light", 16770224],
  [
    v.POTTED_PLANT,
    "potted_plant",
    "Растение в горшке",
    "Potted plant",
    6587986,
  ],
])
  le.push(
    Ye(
      s,
      e,
      t,
      45,
      [10, 10, 10],
      n,
      {
        transparent: !0,
        shape: "furniture",
        interactive: s === v.SOFA,
        solid: s !== v.WALL_LIGHT && s !== v.POTTED_PLANT,
        light: s === v.WALL_LIGHT ? 14 : 0,
      },
      i,
    ),
  );
const sv = 158,
  lA = 173,
  Yc = [
    {
      key: "raspberry",
      ru: "малины",
      en: "Raspberry",
      color: 12595280,
      stages: [
        v.RASPBERRY_BUSH_SPROUT,
        v.RASPBERRY_BUSH_YOUNG,
        v.RASPBERRY_BUSH_RIPE,
      ],
    },
    {
      key: "blueberry",
      ru: "черники",
      en: "Blueberry",
      color: 4872872,
      stages: [
        v.BLUEBERRY_BUSH_SPROUT,
        v.BLUEBERRY_BUSH_YOUNG,
        v.BLUEBERRY_BUSH_RIPE,
      ],
    },
    {
      key: "blackberry",
      ru: "ежевики",
      en: "Blackberry",
      color: 4008773,
      stages: [
        v.BLACKBERRY_BUSH_SPROUT,
        v.BLACKBERRY_BUSH_YOUNG,
        v.BLACKBERRY_BUSH_RIPE,
      ],
    },
  ];
Yc.forEach((s, e) => {
  const t = ["Куст", "Молодой куст", "Спелый куст"],
    i = ["bush sprout", "young bush", "ripe bush"];
  s.stages.forEach((n, o) => {
    le.push(
      Ye(
        n,
        `${s.key}_bush_${["sprout", "young", "ripe"][o]}`,
        `${t[o]} ${s.ru}`,
        4,
        [lA + e * 3 + o, sv + e * 3 + o, sv + e * 3 + o],
        o === 2 ? s.color : 4880952,
        { solid: !1, transparent: !0, shape: "bush" },
        `${s.en} ${i[o]}`,
      ),
    );
  });
});
const uy = 168;
le.push(
  Ye(
    v.RGLOWSTONE,
    "reinforced_glowstone",
    "Армированный светокамень",
    300,
    [uy, uy, uy],
    16768416,
    { light: 15 },
    "Reinforced glowstone",
  ),
);
le.push(
  Ye(
    v.SIGN,
    "sign",
    "Табличка",
    25,
    [10, 10, 10],
    11570259,
    { solid: !1, transparent: !0, shape: "device", interactive: !0 },
    "Sign",
  ),
);
le.push(
  Ye(
    v.RADIO_RELAY,
    "radio_relay",
    "Радиореле",
    35,
    [120, 120, 120],
    6327420,
    { solid: !0, transparent: !0, shape: "device", interactive: !0 },
    "Radio relay",
  ),
);
const vx = 204,
  FG = 205,
  tb = 206,
  w5 = 207,
  Bc = 208,
  cA = 209,
  UG = 210,
  hA = 211,
  fy = 212,
  ib = 213,
  Kh = 214,
  vl = 215,
  GG = 216,
  py = 217,
  sb = 218,
  Vn = 219,
  bx = 220,
  nd = 221,
  nb = 222,
  ob = 223,
  WG = 224,
  $G = 225,
  ab = 226,
  rb = 227,
  Ra = 228,
  LI = 229,
  VG = 230;
le.push(
  Ye(
    v.AUTUMN_LEAVES_ORANGE,
    "autumn_leaves_orange",
    "Оранжевая осенняя листва",
    8,
    [201, 201, 201],
    14251818,
    { transparent: !0 },
    "Orange autumn leaves",
  ),
);
le.push(
  Ye(
    v.AUTUMN_LEAVES_RED,
    "autumn_leaves_red",
    "Багряная листва",
    8,
    [202, 202, 202],
    12071466,
    { transparent: !0 },
    "Crimson autumn leaves",
  ),
);
le.push(
  Ye(
    v.AUTUMN_LEAVES_YELLOW,
    "autumn_leaves_yellow",
    "Золотая листва",
    8,
    [203, 203, 203],
    14923066,
    { transparent: !0 },
    "Golden autumn leaves",
  ),
);
le.push(
  Ye(
    v.BIRCH_LOG,
    "birch_log",
    "Берёзовое бревно",
    55,
    [vx, FG, vx],
    14999764,
    {},
    "Birch log",
  ),
);
