// index-Dp6GxvJu 10 — push
// Lines 29181-29527 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
de.push(
  Fe(
    v.LEAF_LITTER,
    "leaf_litter",
    "Опавшие листья",
    1,
    [jv, jv, jv],
    12084266,
    { solid: !1, transparent: !0, shape: "litter" },
    "Fallen leaves",
  ),
);
de.push(
  Fe(v.PUMPKIN, "pumpkin", "Тыква", 20, [yy, Yl, Yl], 14711327, {}, "Pumpkin"),
);
de.push(
  Fe(
    v.JACK_O_LANTERN,
    "jack_o_lantern",
    "Светильник Джека",
    20,
    [yy, Yl, Yl],
    16753968,
    { light: 12 },
    "Jack o'lantern",
  ),
);
wn(
  v.PUMPKIN_SPROUT,
  "pumpkin_sprout",
  "Росток тыквы",
  "Pumpkin sprout",
  iz,
  7315007,
);
wn(
  v.PUMPKIN_YOUNG,
  "young_pumpkin",
  "Тыквенная плеть",
  "Pumpkin vine",
  IS,
  6131510,
);
wn(
  v.PUMPKIN_CROP,
  "pumpkin_crop",
  "Спелая тыква на грядке",
  "Ripe pumpkin vine",
  IS,
  14711327,
);
de.push(
  Fe(
    v.CANDLE,
    "candle",
    "Свечи",
    1,
    [_2, _2, _2],
    15852482,
    { solid: !1, transparent: !0, light: 8, shape: "candle" },
    "Candles",
  ),
);
de.push(
  Fe(
    v.COBWEB,
    "cobweb",
    "Паутина",
    4,
    [Xv, Xv, Xv],
    15263978,
    { solid: !1, transparent: !0, shape: "web" },
    "Cobweb",
  ),
);
de.push(
  Fe(
    v.GRAVESTONE,
    "gravestone",
    "Надгробие",
    110,
    [Jh, Jh, Jh],
    9277584,
    { transparent: !0, shape: "furniture" },
    "Gravestone",
  ),
);
de.push(
  Fe(
    v.GRAVE_CROSS,
    "grave_cross",
    "Могильный крест",
    60,
    [c0, c0, c0],
    6115655,
    { transparent: !0, shape: "furniture" },
    "Grave cross",
  ),
);
de.push(
  Fe(
    v.SKULL,
    "skull",
    "Череп",
    20,
    [_r, _r, _r],
    15130569,
    { solid: !1, transparent: !0, shape: "furniture" },
    "Skull",
  ),
);
de.push(
  Fe(
    v.CAULDRON,
    "cauldron",
    "Ведьмин котёл",
    140,
    [sa, sa, sa],
    3027252,
    { transparent: !0, shape: "furniture", light: 7, interactive: !0 },
    "Witch's cauldron",
  ),
);
de.push(
  Fe(
    v.SCARECROW,
    "scarecrow",
    "Пугало",
    20,
    [R2, R2, R2],
    11835998,
    { transparent: !0, shape: "furniture" },
    "Scarecrow",
  ),
);
de.push(
  Fe(
    v.IRON_FENCE,
    "iron_fence",
    "Кованая ограда",
    150,
    [Zv, Zv, Zv],
    2895153,
    { transparent: !0, shape: "fence" },
    "Wrought iron fence",
  ),
);
de.push(
  Fe(
    v.DARK_PLANKS,
    "dark_planks",
    "Тёмные доски",
    50,
    [Rs, Rs, Rs],
    4140064,
    {},
    "Dark planks",
  ),
);
de.push(
  Fe(
    v.DEAD_LOG,
    "dead_log",
    "Мёртвое дерево",
    55,
    [Lx, c0, Lx],
    5985357,
    {},
    "Dead wood",
  ),
);
de.push(
  Fe(
    v.MOSSY_COBBLE,
    "mossy_cobble",
    "Замшелый булыжник",
    80,
    [Qv, Qv, Qv],
    7043676,
    {},
    "Mossy cobblestone",
  ),
);
de.push(
  Fe(
    v.COFFIN,
    "coffin",
    "Гроб",
    45,
    [Rs, Rs, Rs],
    4140064,
    { transparent: !0, shape: "furniture", interactive: !0 },
    "Coffin",
  ),
);
de.push(
  Fe(
    v.POTION_SHELF,
    "potion_shelf",
    "Полка с зельями",
    40,
    [Rs, Rs, Rs],
    6176634,
    { transparent: !0, shape: "furniture", light: 6 },
    "Potion shelf",
  ),
);
de.push(
  Fe(
    v.HANGING_HERBS,
    "hanging_herbs",
    "Сушёные травы",
    1,
    [Jv, Jv, Jv],
    8161866,
    { solid: !1, transparent: !0, shape: "hanging" },
    "Drying herbs",
  ),
);
wn(v.FLY_AGARIC, "fly_agaric", "Мухомор", "Fly agaric", sz, 13775914);
wn(v.MUSHROOM, "mushroom", "Гриб", "Mushroom", oz, 9067062);
de.push(
  Fe(
    v.STAIR_DARK,
    "dark_stairs",
    "Ступенька из тёмных досок",
    50,
    [Rs, Rs, Rs],
    4140064,
    { transparent: !0, shape: "stair" },
    "Dark wood stair",
  ),
);
de.push(
  Fe(
    v.CRACKED_STONE_BRICKS,
    "cracked_stone_bricks",
    "Потрескавшийся каменный кирпич",
    100,
    [e5, e5, e5],
    8355709,
    {},
    "Cracked stone bricks",
  ),
);
wn(
  v.AUTUMN_SAPLING,
  "autumn_sapling",
  "Росток клёна",
  "Maple sapling",
  fC,
  14251818,
);
function rz(n, e, t, i) {
  if (t !== 0) return t > 0 ? yy : Yl;
  const [s, o] = xo[n & 3];
  return e === s && i === o ? LS : Yl;
}
const vy = new Set(tc.flatMap((n) => [...n.stages])),
  pC = (n) => vy.has(n);
new Set(tc.map((n) => n.stages[2]));
const mC = (n) => {
  for (const e of tc) {
    const t = e.stages.indexOf(n);
    if (t >= 0) return t;
  }
  return -1;
};
de.push(
  Fe(
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
const ds = {
  CARPET: 239,
  ROYAL_CARPET: 240,
  MARBLE: 241,
  BLACK_MARBLE: 242,
  GOLD: 243,
  VELVET: 244,
  MARQUEE: 245,
  LACQUER: 246,
  FELT: 247,
  ROULETTE: 248,
  BULBS: 249,
  CRYSTAL: 250,
  SHADE: 251,
  BOTTLES: 252,
  WALNUT: 253,
  DECK: 254,
  CHIPS: 255,
};
de.push(
  Fe(
    v.CASINO_CARPET,
    "casino_carpet",
    "Ковёр казино",
    18,
    [ds.CARPET, ds.CARPET, ds.CARPET],
    9311782,
    {},
    "Casino carpet",
  ),
);
de.push(
  Fe(
    v.ROYAL_CARPET,
    "royal_carpet",
    "Королевский ковёр",
    18,
    [ds.ROYAL_CARPET, ds.ROYAL_CARPET, ds.ROYAL_CARPET],
    3938392,
    {},
    "Royal carpet",
  ),
);
de.push(
  Fe(
    v.MARBLE,
    "marble",
    "Мрамор",
    110,
    [ds.MARBLE, ds.MARBLE, ds.MARBLE],
    15328474,
    {},
    "Marble",
  ),
);
de.push(
  Fe(
    v.BLACK_MARBLE,
    "black_marble",
    "Чёрный мрамор",
    110,
    [ds.BLACK_MARBLE, ds.BLACK_MARBLE, ds.BLACK_MARBLE],
    1907234,
    {},
    "Black marble",
  ),
);
