// index-BeUlFSPp 07 — push
// Lines 27848-28196 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
le.push(
  Ye(
    v.LEAF_LITTER,
    "leaf_litter",
    "Опавшие листья",
    1,
    [tb, tb, tb],
    12084266,
    { solid: !1, transparent: !0, shape: "litter" },
    "Fallen leaves",
  ),
);
le.push(
  Ye(v.PUMPKIN, "pumpkin", "Тыква", 20, [w5, Bc, Bc], 14711327, {}, "Pumpkin"),
);
le.push(
  Ye(
    v.JACK_O_LANTERN,
    "jack_o_lantern",
    "Светильник Джека",
    20,
    [w5, Bc, Bc],
    16753968,
    { light: 12 },
    "Jack o'lantern",
  ),
);
Ts(
  v.PUMPKIN_SPROUT,
  "pumpkin_sprout",
  "Росток тыквы",
  "Pumpkin sprout",
  UG,
  7315007,
);
Ts(
  v.PUMPKIN_YOUNG,
  "young_pumpkin",
  "Тыквенная плеть",
  "Pumpkin vine",
  hA,
  6131510,
);
Ts(
  v.PUMPKIN_CROP,
  "pumpkin_crop",
  "Спелая тыква на грядке",
  "Ripe pumpkin vine",
  hA,
  14711327,
);
le.push(
  Ye(
    v.CANDLE,
    "candle",
    "Свечи",
    1,
    [fy, fy, fy],
    15852482,
    { solid: !1, transparent: !0, light: 8, shape: "candle" },
    "Candles",
  ),
);
le.push(
  Ye(
    v.COBWEB,
    "cobweb",
    "Паутина",
    4,
    [ib, ib, ib],
    15263978,
    { solid: !1, transparent: !0, shape: "web" },
    "Cobweb",
  ),
);
le.push(
  Ye(
    v.GRAVESTONE,
    "gravestone",
    "Надгробие",
    110,
    [Kh, Kh, Kh],
    9277584,
    { transparent: !0, shape: "furniture" },
    "Gravestone",
  ),
);
le.push(
  Ye(
    v.GRAVE_CROSS,
    "grave_cross",
    "Могильный крест",
    60,
    [nd, nd, nd],
    6115655,
    { transparent: !0, shape: "furniture" },
    "Grave cross",
  ),
);
le.push(
  Ye(
    v.SKULL,
    "skull",
    "Череп",
    20,
    [vl, vl, vl],
    15130569,
    { solid: !1, transparent: !0, shape: "furniture" },
    "Skull",
  ),
);
le.push(
  Ye(
    v.CAULDRON,
    "cauldron",
    "Ведьмин котёл",
    140,
    [Ra, Ra, Ra],
    3027252,
    { transparent: !0, shape: "furniture", light: 7, interactive: !0 },
    "Witch's cauldron",
  ),
);
le.push(
  Ye(
    v.SCARECROW,
    "scarecrow",
    "Пугало",
    20,
    [py, py, py],
    11835998,
    { transparent: !0, shape: "furniture" },
    "Scarecrow",
  ),
);
le.push(
  Ye(
    v.IRON_FENCE,
    "iron_fence",
    "Кованая ограда",
    150,
    [sb, sb, sb],
    2895153,
    { transparent: !0, shape: "fence" },
    "Wrought iron fence",
  ),
);
le.push(
  Ye(
    v.DARK_PLANKS,
    "dark_planks",
    "Тёмные доски",
    50,
    [Vn, Vn, Vn],
    4140064,
    {},
    "Dark planks",
  ),
);
le.push(
  Ye(
    v.DEAD_LOG,
    "dead_log",
    "Мёртвое дерево",
    55,
    [bx, nd, bx],
    5985357,
    {},
    "Dead wood",
  ),
);
le.push(
  Ye(
    v.MOSSY_COBBLE,
    "mossy_cobble",
    "Замшелый булыжник",
    80,
    [nb, nb, nb],
    7043676,
    {},
    "Mossy cobblestone",
  ),
);
le.push(
  Ye(
    v.COFFIN,
    "coffin",
    "Гроб",
    45,
    [Vn, Vn, Vn],
    4140064,
    { transparent: !0, shape: "furniture", interactive: !0 },
    "Coffin",
  ),
);
le.push(
  Ye(
    v.POTION_SHELF,
    "potion_shelf",
    "Полка с зельями",
    40,
    [Vn, Vn, Vn],
    6176634,
    { transparent: !0, shape: "furniture", light: 6 },
    "Potion shelf",
  ),
);
le.push(
  Ye(
    v.HANGING_HERBS,
    "hanging_herbs",
    "Сушёные травы",
    1,
    [ob, ob, ob],
    8161866,
    { solid: !1, transparent: !0, shape: "hanging" },
    "Drying herbs",
  ),
);
Ts(v.FLY_AGARIC, "fly_agaric", "Мухомор", "Fly agaric", WG, 13775914);
Ts(v.MUSHROOM, "mushroom", "Гриб", "Mushroom", $G, 9067062);
le.push(
  Ye(
    v.STAIR_DARK,
    "dark_stairs",
    "Ступенька из тёмных досок",
    50,
    [Vn, Vn, Vn],
    4140064,
    { transparent: !0, shape: "stair" },
    "Dark wood stair",
  ),
);
le.push(
  Ye(
    v.CRACKED_STONE_BRICKS,
    "cracked_stone_bricks",
    "Потрескавшийся каменный кирпич",
    100,
    [ab, ab, ab],
    8355709,
    {},
    "Cracked stone bricks",
  ),
);
Ts(
  v.AUTUMN_SAPLING,
  "autumn_sapling",
  "Росток клёна",
  "Maple sapling",
  LI,
  14251818,
);
function qG(s, e, t, i) {
  if (t !== 0) return t > 0 ? w5 : Bc;
  const [n, o] = Qo[s & 3];
  return e === n && i === o ? cA : Bc;
}
const M5 = new Set(Yc.flatMap((s) => [...s.stages])),
  II = (s) => M5.has(s);
new Set(Yc.map((s) => s.stages[2]));
const PI = (s) => {
  for (const e of Yc) {
    const t = e.stages.indexOf(s);
    if (t >= 0) return t;
  }
  return -1;
};
le.push(
  Ye(
    v.OWNERSHIP_TOTEM,
    "ownership_totem",
    "Тотем владения",
    100,
    [17, 17, 17],
    5169870,
    { transparent: !0, shape: "furniture", interactive: !0, light: 10 },
    "Ownership totem",
  ),
);
const Nn = {
  CARPET: 239,
  ROYAL_CARPET: 240,
  MARBLE: 241,
  BLACK_MARBLE: 242,
  GOLD: 243,
  VELVET: 244,
  MARQUEE: 245,
};
le.push(
  Ye(
    v.CASINO_CARPET,
    "casino_carpet",
    "Ковёр казино",
    18,
    [Nn.CARPET, Nn.CARPET, Nn.CARPET],
    9311782,
    {},
    "Casino carpet",
  ),
);
le.push(
  Ye(
    v.ROYAL_CARPET,
    "royal_carpet",
    "Королевский ковёр",
    18,
    [Nn.ROYAL_CARPET, Nn.ROYAL_CARPET, Nn.ROYAL_CARPET],
    3938392,
    {},
    "Royal carpet",
  ),
);
le.push(
  Ye(
    v.MARBLE,
    "marble",
    "Мрамор",
    110,
    [Nn.MARBLE, Nn.MARBLE, Nn.MARBLE],
    15328474,
    {},
    "Marble",
  ),
);
le.push(
  Ye(
    v.BLACK_MARBLE,
    "black_marble",
    "Чёрный мрамор",
    110,
    [Nn.BLACK_MARBLE, Nn.BLACK_MARBLE, Nn.BLACK_MARBLE],
    1907234,
    {},
    "Black marble",
  ),
);
le.push(
  Ye(
    v.GOLD_BLOCK,
    "gold_block",
    "Золотой блок",
    140,
    [Nn.GOLD, Nn.GOLD, Nn.GOLD],
    14856767,
    {},
    "Block of gold",
  ),
);
