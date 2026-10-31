// chunk-mesh-worker-coep-v1-GBSiXDQy 20 — push
// Lines 6538-6882 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
T.push(
  b(
    p.JACK_O_LANTERN,
    "jack_o_lantern",
    "Светильник Джека",
    20,
    [Ls, Ft, Ft],
    16753968,
    { light: 12 },
    "Jack o'lantern",
  ),
);
F(
  p.PUMPKIN_SPROUT,
  "pumpkin_sprout",
  "Росток тыквы",
  "Pumpkin sprout",
  $i,
  7315007,
);
F(
  p.PUMPKIN_YOUNG,
  "young_pumpkin",
  "Тыквенная плеть",
  "Pumpkin vine",
  un,
  6131510,
);
F(
  p.PUMPKIN_CROP,
  "pumpkin_crop",
  "Спелая тыква на грядке",
  "Ripe pumpkin vine",
  un,
  14711327,
);
T.push(
  b(
    p.CANDLE,
    "candle",
    "Свечи",
    1,
    [ps, ps, ps],
    15852482,
    { solid: !1, transparent: !0, light: 8, shape: "candle" },
    "Candles",
  ),
);
T.push(
  b(
    p.COBWEB,
    "cobweb",
    "Паутина",
    4,
    [Ys, Ys, Ys],
    15263978,
    { solid: !1, transparent: !0, shape: "web" },
    "Cobweb",
  ),
);
T.push(
  b(
    p.GRAVESTONE,
    "gravestone",
    "Надгробие",
    110,
    [ne, ne, ne],
    9277584,
    { transparent: !0, shape: "furniture" },
    "Gravestone",
  ),
);
T.push(
  b(
    p.GRAVE_CROSS,
    "grave_cross",
    "Могильный крест",
    60,
    [oe, oe, oe],
    6115655,
    { transparent: !0, shape: "furniture" },
    "Grave cross",
  ),
);
T.push(
  b(
    p.SKULL,
    "skull",
    "Череп",
    20,
    [It, It, It],
    15130569,
    { solid: !1, transparent: !0, shape: "furniture" },
    "Skull",
  ),
);
T.push(
  b(
    p.CAULDRON,
    "cauldron",
    "Ведьмин котёл",
    140,
    [pt, pt, pt],
    3027252,
    { transparent: !0, shape: "furniture", light: 7, interactive: !0 },
    "Witch's cauldron",
  ),
);
T.push(
  b(
    p.SCARECROW,
    "scarecrow",
    "Пугало",
    20,
    [ms, ms, ms],
    11835998,
    { transparent: !0, shape: "furniture" },
    "Scarecrow",
  ),
);
T.push(
  b(
    p.IRON_FENCE,
    "iron_fence",
    "Кованая ограда",
    150,
    [Vs, Vs, Vs],
    2895153,
    { transparent: !0, shape: "fence" },
    "Wrought iron fence",
  ),
);
T.push(
  b(
    p.DARK_PLANKS,
    "dark_planks",
    "Тёмные доски",
    50,
    [tt, tt, tt],
    4140064,
    {},
    "Dark planks",
  ),
);
T.push(
  b(
    p.DEAD_LOG,
    "dead_log",
    "Мёртвое дерево",
    55,
    [Un, oe, Un],
    5985357,
    {},
    "Dead wood",
  ),
);
T.push(
  b(
    p.MOSSY_COBBLE,
    "mossy_cobble",
    "Замшелый булыжник",
    80,
    [vs, vs, vs],
    7043676,
    {},
    "Mossy cobblestone",
  ),
);
T.push(
  b(
    p.COFFIN,
    "coffin",
    "Гроб",
    45,
    [tt, tt, tt],
    4140064,
    { transparent: !0, shape: "furniture", interactive: !0 },
    "Coffin",
  ),
);
T.push(
  b(
    p.POTION_SHELF,
    "potion_shelf",
    "Полка с зельями",
    40,
    [tt, tt, tt],
    6176634,
    { transparent: !0, shape: "furniture", light: 6 },
    "Potion shelf",
  ),
);
T.push(
  b(
    p.HANGING_HERBS,
    "hanging_herbs",
    "Сушёные травы",
    1,
    [qs, qs, qs],
    8161866,
    { solid: !1, transparent: !0, shape: "hanging" },
    "Drying herbs",
  ),
);
F(p.FLY_AGARIC, "fly_agaric", "Мухомор", "Fly agaric", ji, 13775914);
F(p.MUSHROOM, "mushroom", "Гриб", "Mushroom", tr, 9067062);
T.push(
  b(
    p.STAIR_DARK,
    "dark_stairs",
    "Ступенька из тёмных досок",
    50,
    [tt, tt, tt],
    4140064,
    { transparent: !0, shape: "stair" },
    "Dark wood stair",
  ),
);
T.push(
  b(
    p.CRACKED_STONE_BRICKS,
    "cracked_stone_bricks",
    "Потрескавшийся каменный кирпич",
    100,
    [Ks, Ks, Ks],
    8355709,
    {},
    "Cracked stone bricks",
  ),
);
F(
  p.AUTUMN_SAPLING,
  "autumn_sapling",
  "Росток клёна",
  "Maple sapling",
  er,
  14251818,
);
function nr(r, t, e, s) {
  if (e !== 0) return e > 0 ? Ls : Ft;
  const [n, i] = ae[r & 3];
  return t === n && s === i ? ii : Ft;
}
const ln = new Set(Qt.flatMap((r) => [...r.stages]));
new Set(Qt.map((r) => r.stages[2]));
const ir = (r) => {
  for (const t of Qt) {
    const e = t.stages.indexOf(r);
    if (e >= 0) return e;
  }
  return -1;
};
T.push(
  b(
    p.OWNERSHIP_TOTEM,
    "ownership_totem",
    "Тотем владения",
    100,
    [17, 17, 17],
    5169870,
    { transparent: !0, shape: "furniture", interactive: !0, light: 10 },
    "Ownership totem",
  ),
);
const Z = {
  CARPET: 239,
  ROYAL_CARPET: 240,
  MARBLE: 241,
  BLACK_MARBLE: 242,
  GOLD: 243,
  VELVET: 244,
  MARQUEE: 245,
};
T.push(
  b(
    p.CASINO_CARPET,
    "casino_carpet",
    "Ковёр казино",
    18,
    [Z.CARPET, Z.CARPET, Z.CARPET],
    9311782,
    {},
    "Casino carpet",
  ),
);
T.push(
  b(
    p.ROYAL_CARPET,
    "royal_carpet",
    "Королевский ковёр",
    18,
    [Z.ROYAL_CARPET, Z.ROYAL_CARPET, Z.ROYAL_CARPET],
    3938392,
    {},
    "Royal carpet",
  ),
);
T.push(
  b(
    p.MARBLE,
    "marble",
    "Мрамор",
    110,
    [Z.MARBLE, Z.MARBLE, Z.MARBLE],
    15328474,
    {},
    "Marble",
  ),
);
T.push(
  b(
    p.BLACK_MARBLE,
    "black_marble",
    "Чёрный мрамор",
    110,
    [Z.BLACK_MARBLE, Z.BLACK_MARBLE, Z.BLACK_MARBLE],
    1907234,
    {},
    "Black marble",
  ),
);
T.push(
  b(
    p.GOLD_BLOCK,
    "gold_block",
    "Золотой блок",
    140,
    [Z.GOLD, Z.GOLD, Z.GOLD],
    14856767,
    {},
    "Block of gold",
  ),
);
T.push(
  b(
    p.VELVET_PANEL,
    "velvet_panel",
    "Бархатная панель",
    30,
    [Z.VELVET, Z.VELVET, Z.VELVET],
    7017520,
    {},
    "Velvet panel",
  ),
);
