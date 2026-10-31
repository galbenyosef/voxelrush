// chunk-mesh-worker-coep-v1-BX2YFLnd 20 — push
// Lines 6541-6885 of readable/assets/chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
T.push(
  b(
    f.JACK_O_LANTERN,
    "jack_o_lantern",
    "Светильник Джека",
    20,
    [Is, Yt, Yt],
    16753968,
    { light: 12 },
    "Jack o'lantern",
  ),
);
z(
  f.PUMPKIN_SPROUT,
  "pumpkin_sprout",
  "Росток тыквы",
  "Pumpkin sprout",
  tr,
  7315007,
);
z(
  f.PUMPKIN_YOUNG,
  "young_pumpkin",
  "Тыквенная плеть",
  "Pumpkin vine",
  ln,
  6131510,
);
z(
  f.PUMPKIN_CROP,
  "pumpkin_crop",
  "Спелая тыква на грядке",
  "Ripe pumpkin vine",
  ln,
  14711327,
);
T.push(
  b(
    f.CANDLE,
    "candle",
    "Свечи",
    1,
    [As, As, As],
    15852482,
    { solid: !1, transparent: !0, light: 8, shape: "candle" },
    "Candles",
  ),
);
T.push(
  b(
    f.COBWEB,
    "cobweb",
    "Паутина",
    4,
    [Vs, Vs, Vs],
    15263978,
    { solid: !1, transparent: !0, shape: "web" },
    "Cobweb",
  ),
);
T.push(
  b(
    f.GRAVESTONE,
    "gravestone",
    "Надгробие",
    110,
    [ae, ae, ae],
    9277584,
    { transparent: !0, shape: "furniture" },
    "Gravestone",
  ),
);
T.push(
  b(
    f.GRAVE_CROSS,
    "grave_cross",
    "Могильный крест",
    60,
    [ue, ue, ue],
    6115655,
    { transparent: !0, shape: "furniture" },
    "Grave cross",
  ),
);
T.push(
  b(
    f.SKULL,
    "skull",
    "Череп",
    20,
    [Pt, Pt, Pt],
    15130569,
    { solid: !1, transparent: !0, shape: "furniture" },
    "Skull",
  ),
);
T.push(
  b(
    f.CAULDRON,
    "cauldron",
    "Ведьмин котёл",
    140,
    [At, At, At],
    3027252,
    { transparent: !0, shape: "furniture", light: 7, interactive: !0 },
    "Witch's cauldron",
  ),
);
T.push(
  b(
    f.SCARECROW,
    "scarecrow",
    "Пугало",
    20,
    [ys, ys, ys],
    11835998,
    { transparent: !0, shape: "furniture" },
    "Scarecrow",
  ),
);
T.push(
  b(
    f.IRON_FENCE,
    "iron_fence",
    "Кованая ограда",
    150,
    [vs, vs, vs],
    2895153,
    { transparent: !0, shape: "fence" },
    "Wrought iron fence",
  ),
);
T.push(
  b(
    f.DARK_PLANKS,
    "dark_planks",
    "Тёмные доски",
    50,
    [st, st, st],
    4140064,
    {},
    "Dark planks",
  ),
);
T.push(
  b(
    f.DEAD_LOG,
    "dead_log",
    "Мёртвое дерево",
    55,
    [Dn, ue, Dn],
    5985357,
    {},
    "Dead wood",
  ),
);
T.push(
  b(
    f.MOSSY_COBBLE,
    "mossy_cobble",
    "Замшелый булыжник",
    80,
    [qs, qs, qs],
    7043676,
    {},
    "Mossy cobblestone",
  ),
);
T.push(
  b(
    f.COFFIN,
    "coffin",
    "Гроб",
    45,
    [st, st, st],
    4140064,
    { transparent: !0, shape: "furniture", interactive: !0 },
    "Coffin",
  ),
);
T.push(
  b(
    f.POTION_SHELF,
    "potion_shelf",
    "Полка с зельями",
    40,
    [st, st, st],
    6176634,
    { transparent: !0, shape: "furniture", light: 6 },
    "Potion shelf",
  ),
);
T.push(
  b(
    f.HANGING_HERBS,
    "hanging_herbs",
    "Сушёные травы",
    1,
    [Ks, Ks, Ks],
    8161866,
    { solid: !1, transparent: !0, shape: "hanging" },
    "Drying herbs",
  ),
);
z(f.FLY_AGARIC, "fly_agaric", "Мухомор", "Fly agaric", sr, 13775914);
z(f.MUSHROOM, "mushroom", "Гриб", "Mushroom", nr, 9067062);
T.push(
  b(
    f.STAIR_DARK,
    "dark_stairs",
    "Ступенька из тёмных досок",
    50,
    [st, st, st],
    4140064,
    { transparent: !0, shape: "stair" },
    "Dark wood stair",
  ),
);
T.push(
  b(
    f.CRACKED_STONE_BRICKS,
    "cracked_stone_bricks",
    "Потрескавшийся каменный кирпич",
    100,
    [Qs, Qs, Qs],
    8355709,
    {},
    "Cracked stone bricks",
  ),
);
z(
  f.AUTUMN_SAPLING,
  "autumn_sapling",
  "Росток клёна",
  "Maple sapling",
  ir,
  14251818,
);
function or(r, t, e, s) {
  if (e !== 0) return e > 0 ? Is : Yt;
  const [n, i] = le[r & 3];
  return t === n && s === i ? ri : Yt;
}
const dn = new Set(Jt.flatMap((r) => [...r.stages]));
new Set(Jt.map((r) => r.stages[2]));
const ar = (r) => {
  for (const t of Jt) {
    const e = t.stages.indexOf(r);
    if (e >= 0) return e;
  }
  return -1;
};
T.push(
  b(
    f.OWNERSHIP_TOTEM,
    "ownership_totem",
    "Тотем владения",
    100,
    [17, 17, 17],
    5169870,
    { transparent: !0, shape: "furniture", interactive: !0, light: 10 },
    "Ownership totem",
  ),
);
const J = {
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
    f.CASINO_CARPET,
    "casino_carpet",
    "Ковёр казино",
    18,
    [J.CARPET, J.CARPET, J.CARPET],
    9311782,
    {},
    "Casino carpet",
  ),
);
T.push(
  b(
    f.ROYAL_CARPET,
    "royal_carpet",
    "Королевский ковёр",
    18,
    [J.ROYAL_CARPET, J.ROYAL_CARPET, J.ROYAL_CARPET],
    3938392,
    {},
    "Royal carpet",
  ),
);
T.push(
  b(
    f.MARBLE,
    "marble",
    "Мрамор",
    110,
    [J.MARBLE, J.MARBLE, J.MARBLE],
    15328474,
    {},
    "Marble",
  ),
);
T.push(
  b(
    f.BLACK_MARBLE,
    "black_marble",
    "Чёрный мрамор",
    110,
    [J.BLACK_MARBLE, J.BLACK_MARBLE, J.BLACK_MARBLE],
    1907234,
    {},
    "Black marble",
  ),
);
T.push(
  b(
    f.GOLD_BLOCK,
    "gold_block",
    "Золотой блок",
    140,
    [J.GOLD, J.GOLD, J.GOLD],
    14856767,
    {},
    "Block of gold",
  ),
);
T.push(
  b(
    f.VELVET_PANEL,
    "velvet_panel",
    "Бархатная панель",
    30,
    [J.VELVET, J.VELVET, J.VELVET],
    7017520,
    {},
    "Velvet panel",
  ),
);
