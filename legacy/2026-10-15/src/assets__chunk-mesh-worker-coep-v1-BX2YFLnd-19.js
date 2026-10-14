// assets__chunk-mesh-worker-coep-v1-BX2YFLnd 19 — push
// Lines 6202-6540 of readable/assets__chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
T.push(
  b(
    f.WOOD_TABLE,
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
    f.WOOD_CHAIR,
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
    f.WOOD_BENCH,
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
    f.MAP_TABLE,
    "map_table",
    "Штабной стол с картой",
    55,
    [T.find((r) => r.name === "green_clay").tex[0], 10, 10],
    7898715,
    { transparent: !0, shape: "furniture" },
    "Map table",
  ),
);
const Zt = Ls + 1,
  Oe = Ls + 2;
T.push(
  b(
    f.REMOTE_STATION,
    "remote_station",
    "Станция удалённого управления",
    120,
    [Zt, Zt, Zt],
    4684395,
    { transparent: !0, shape: "furniture", interactive: !0, light: 5 },
    "Remote command station",
  ),
);
T.push(
  b(
    f.MINE_AP,
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
    f.MINE_AT,
    "mine_at",
    "Противотанковая мина",
    24,
    [50, 50, 50],
    9339218,
    { solid: !1, transparent: !0, shape: "furniture" },
    "Anti-tank mine",
  ),
);
const qe = Oe + 1,
  oe = qe + 2;
T[f.WOOD_CHAIR].tex[0] = oe;
T.push(
  b(
    f.SAVANNA_GRASS,
    "savanna_grass",
    "Сухой дёрн саванны",
    18,
    [qe, qe + 1, 2],
    11971426,
    {},
    "Savanna turf",
  ),
);
T.push(
  b(
    f.STAIR_RSTONE,
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
    f.KITCHEN_COUNTER,
    "kitchen_counter",
    "Кухонная тумба",
    "Kitchen cabinet",
    10584160,
  ],
  [f.SINK, "sink", "Мойка со смесителем", "Sink and faucet", 12831182],
  [
    f.STORAGE_SHELF,
    "storage_shelf",
    "Стеллаж с припасами",
    "Supply shelving",
    7174759,
  ],
  [f.SOFA, "sofa", "Мягкий диван", "Upholstered sofa", 10448720],
  [f.WALL_LIGHT, "wall_light", "Настенный светильник", "Wall light", 16770224],
  [
    f.POTTED_PLANT,
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
        interactive: r === f.SOFA,
        solid: r !== f.WALL_LIGHT && r !== f.POTTED_PLANT,
        light: r === f.WALL_LIGHT ? 14 : 0,
      },
      s,
    ),
  );
const tn = 158,
  ii = 173,
  Jt = [
    {
      key: "raspberry",
      ru: "малины",
      en: "Raspberry",
      color: 12595280,
      stages: [
        f.RASPBERRY_BUSH_SPROUT,
        f.RASPBERRY_BUSH_YOUNG,
        f.RASPBERRY_BUSH_RIPE,
      ],
    },
    {
      key: "blueberry",
      ru: "черники",
      en: "Blueberry",
      color: 4872872,
      stages: [
        f.BLUEBERRY_BUSH_SPROUT,
        f.BLUEBERRY_BUSH_YOUNG,
        f.BLUEBERRY_BUSH_RIPE,
      ],
    },
    {
      key: "blackberry",
      ru: "ежевики",
      en: "Blackberry",
      color: 4008773,
      stages: [
        f.BLACKBERRY_BUSH_SPROUT,
        f.BLACKBERRY_BUSH_YOUNG,
        f.BLACKBERRY_BUSH_RIPE,
      ],
    },
  ];
Jt.forEach((r, t) => {
  const e = ["Куст", "Молодой куст", "Спелый куст"],
    s = ["bush sprout", "young bush", "ripe bush"];
  r.stages.forEach((n, i) => {
    T.push(
      b(
        n,
        `${r.key}_bush_${["sprout", "young", "ripe"][i]}`,
        `${e[i]} ${r.ru}`,
        4,
        [ii + t * 3 + i, tn + t * 3 + i, tn + t * 3 + i],
        i === 2 ? r.color : 4880952,
        { solid: !1, transparent: !0, shape: "bush" },
        `${r.en} ${s[i]}`,
      ),
    );
  });
});
const Hs = 168;
T.push(
  b(
    f.RGLOWSTONE,
    "reinforced_glowstone",
    "Армированный светокамень",
    300,
    [Hs, Hs, Hs],
    16768416,
    { light: 15 },
    "Reinforced glowstone",
  ),
);
T.push(
  b(
    f.SIGN,
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
    f.RADIO_RELAY,
    "radio_relay",
    "Радиореле",
    35,
    [120, 120, 120],
    6327420,
    { solid: !0, transparent: !0, shape: "device", interactive: !0 },
    "Radio relay",
  ),
);
const Un = 204,
  ji = 205,
  Ys = 206,
  Is = 207,
  Yt = 208,
  ri = 209,
  tr = 210,
  ln = 211,
  As = 212,
  Vs = 213,
  ae = 214,
  Pt = 215,
  er = 216,
  ys = 217,
  vs = 218,
  st = 219,
  Dn = 220,
  ue = 221,
  qs = 222,
  Ks = 223,
  sr = 224,
  nr = 225,
  Qs = 226,
  Xs = 227,
  At = 228,
  ir = 229,
  rr = 230;
T.push(
  b(
    f.AUTUMN_LEAVES_ORANGE,
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
    f.AUTUMN_LEAVES_RED,
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
    f.AUTUMN_LEAVES_YELLOW,
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
    f.BIRCH_LOG,
    "birch_log",
    "Берёзовое бревно",
    55,
    [Un, ji, Un],
    14999764,
    {},
    "Birch log",
  ),
);
T.push(
  b(
    f.LEAF_LITTER,
    "leaf_litter",
    "Опавшие листья",
    1,
    [Ys, Ys, Ys],
    12084266,
    { solid: !1, transparent: !0, shape: "litter" },
    "Fallen leaves",
  ),
);
T.push(
  b(f.PUMPKIN, "pumpkin", "Тыква", 20, [Is, Yt, Yt], 14711327, {}, "Pumpkin"),
);
