// chunk-mesh-worker-coep-v1-GBSiXDQy 19 — push
// Lines 6199-6537 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
T.push(
  b(
    p.WOOD_TABLE,
    "wood_table",
    "Деревянный стол",
    45,
    [10, 10, 10],
    11570259,
    { transparent: !0, shape: "furniture" },
    "Wooden table",
  ),
);
T.push(
  b(
    p.WOOD_CHAIR,
    "wood_chair",
    "Стул с мягким сиденьем",
    35,
    [21, 10, 10],
    11366473,
    { transparent: !0, shape: "furniture", interactive: !0 },
    "Upholstered chair",
  ),
);
T.push(
  b(
    p.WOOD_BENCH,
    "wood_bench",
    "Деревянная скамья",
    40,
    [10, 10, 10],
    11570259,
    { transparent: !0, shape: "furniture", interactive: !0 },
    "Wooden bench",
  ),
);
T.push(
  b(
    p.MAP_TABLE,
    "map_table",
    "Штабной стол с картой",
    55,
    [T.find((r) => r.name === "green_clay").tex[0], 10, 10],
    7898715,
    { transparent: !0, shape: "furniture" },
    "Map table",
  ),
);
const qt = Os + 1,
  ge = Os + 2;
T.push(
  b(
    p.REMOTE_STATION,
    "remote_station",
    "Станция удалённого управления",
    120,
    [qt, qt, qt],
    4684395,
    { transparent: !0, shape: "furniture", interactive: !0, light: 5 },
    "Remote command station",
  ),
);
T.push(
  b(
    p.MINE_AP,
    "mine_ap",
    "Противопехотная мина",
    12,
    [51, 51, 51],
    5403460,
    { solid: !1, transparent: !0, shape: "furniture" },
    "Anti-personnel mine",
  ),
);
T.push(
  b(
    p.MINE_AT,
    "mine_at",
    "Противотанковая мина",
    24,
    [50, 50, 50],
    9339218,
    { solid: !1, transparent: !0, shape: "furniture" },
    "Anti-tank mine",
  ),
);
const He = ge + 1,
  se = He + 2;
T[p.WOOD_CHAIR].tex[0] = se;
T.push(
  b(
    p.SAVANNA_GRASS,
    "savanna_grass",
    "Сухой дёрн саванны",
    18,
    [He, He + 1, 2],
    11971426,
    {},
    "Savanna turf",
  ),
);
T.push(
  b(
    p.STAIR_RSTONE,
    "reinforced_stone_stairs",
    "Армированная ступенька",
    300,
    [16, 16, 16],
    7304320,
    { transparent: !0, shape: "stair" },
    "Reinforced stone stair",
  ),
);
for (const [r, t, e, s, n] of [
  [
    p.KITCHEN_COUNTER,
    "kitchen_counter",
    "Кухонная тумба",
    "Kitchen cabinet",
    10584160,
  ],
  [p.SINK, "sink", "Мойка со смесителем", "Sink and faucet", 12831182],
  [
    p.STORAGE_SHELF,
    "storage_shelf",
    "Стеллаж с припасами",
    "Supply shelving",
    7174759,
  ],
  [p.SOFA, "sofa", "Мягкий диван", "Upholstered sofa", 10448720],
  [p.WALL_LIGHT, "wall_light", "Настенный светильник", "Wall light", 16770224],
  [
    p.POTTED_PLANT,
    "potted_plant",
    "Растение в горшке",
    "Potted plant",
    6587986,
  ],
])
  T.push(
    b(
      r,
      t,
      e,
      45,
      [10, 10, 10],
      n,
      {
        transparent: !0,
        shape: "furniture",
        interactive: r === p.SOFA,
        solid: r !== p.WALL_LIGHT && r !== p.POTTED_PLANT,
        light: r === p.WALL_LIGHT ? 14 : 0,
      },
      s,
    ),
  );
const js = 158,
  ni = 173,
  Qt = [
    {
      key: "raspberry",
      ru: "малины",
      en: "Raspberry",
      color: 12595280,
      stages: [
        p.RASPBERRY_BUSH_SPROUT,
        p.RASPBERRY_BUSH_YOUNG,
        p.RASPBERRY_BUSH_RIPE,
      ],
    },
    {
      key: "blueberry",
      ru: "черники",
      en: "Blueberry",
      color: 4872872,
      stages: [
        p.BLUEBERRY_BUSH_SPROUT,
        p.BLUEBERRY_BUSH_YOUNG,
        p.BLUEBERRY_BUSH_RIPE,
      ],
    },
    {
      key: "blackberry",
      ru: "ежевики",
      en: "Blackberry",
      color: 4008773,
      stages: [
        p.BLACKBERRY_BUSH_SPROUT,
        p.BLACKBERRY_BUSH_YOUNG,
        p.BLACKBERRY_BUSH_RIPE,
      ],
    },
  ];
Qt.forEach((r, t) => {
  const e = ["Куст", "Молодой куст", "Спелый куст"],
    s = ["bush sprout", "young bush", "ripe bush"];
  r.stages.forEach((n, i) => {
    T.push(
      b(
        n,
        `${r.key}_bush_${["sprout", "young", "ripe"][i]}`,
        `${e[i]} ${r.ru}`,
        4,
        [ni + t * 3 + i, js + t * 3 + i, js + t * 3 + i],
        i === 2 ? r.color : 4880952,
        { solid: !1, transparent: !0, shape: "bush" },
        `${r.en} ${s[i]}`,
      ),
    );
  });
});
const Ws = 168;
T.push(
  b(
    p.RGLOWSTONE,
    "reinforced_glowstone",
    "Армированный светокамень",
    300,
    [Ws, Ws, Ws],
    16768416,
    { light: 15 },
    "Reinforced glowstone",
  ),
);
T.push(
  b(
    p.SIGN,
    "sign",
    "Табличка",
    25,
    [10, 10, 10],
    11570259,
    { solid: !1, transparent: !0, shape: "device", interactive: !0 },
    "Sign",
  ),
);
T.push(
  b(
    p.RADIO_RELAY,
    "radio_relay",
    "Радиореле",
    35,
    [120, 120, 120],
    6327420,
    { solid: !0, transparent: !0, shape: "device", interactive: !0 },
    "Radio relay",
  ),
);
const kn = 204,
  Zi = 205,
  Hs = 206,
  Ls = 207,
  Ft = 208,
  ii = 209,
  $i = 210,
  un = 211,
  ps = 212,
  Ys = 213,
  ne = 214,
  It = 215,
  Ji = 216,
  ms = 217,
  Vs = 218,
  tt = 219,
  Un = 220,
  oe = 221,
  vs = 222,
  qs = 223,
  ji = 224,
  tr = 225,
  Ks = 226,
  Qs = 227,
  pt = 228,
  er = 229,
  sr = 230;
T.push(
  b(
    p.AUTUMN_LEAVES_ORANGE,
    "autumn_leaves_orange",
    "Оранжевая осенняя листва",
    8,
    [201, 201, 201],
    14251818,
    { transparent: !0 },
    "Orange autumn leaves",
  ),
);
T.push(
  b(
    p.AUTUMN_LEAVES_RED,
    "autumn_leaves_red",
    "Багряная листва",
    8,
    [202, 202, 202],
    12071466,
    { transparent: !0 },
    "Crimson autumn leaves",
  ),
);
T.push(
  b(
    p.AUTUMN_LEAVES_YELLOW,
    "autumn_leaves_yellow",
    "Золотая листва",
    8,
    [203, 203, 203],
    14923066,
    { transparent: !0 },
    "Golden autumn leaves",
  ),
);
T.push(
  b(
    p.BIRCH_LOG,
    "birch_log",
    "Берёзовое бревно",
    55,
    [kn, Zi, kn],
    14999764,
    {},
    "Birch log",
  ),
);
T.push(
  b(
    p.LEAF_LITTER,
    "leaf_litter",
    "Опавшие листья",
    1,
    [Hs, Hs, Hs],
    12084266,
    { solid: !1, transparent: !0, shape: "litter" },
    "Fallen leaves",
  ),
);
T.push(
  b(p.PUMPKIN, "pumpkin", "Тыква", 20, [Ls, Ft, Ft], 14711327, {}, "Pumpkin"),
);
