// index-Dp6GxvJu 36 — item
// Lines 39433-39772 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function ZF(n) {
  const e = new Map();
  for (const t of n.blocks) {
    if (
      t.id === BLOCK.AIR ||
      (t.id === BLOCK.BED && t.meta & Sp) ||
      (Ss(t.id) && t.meta & Na)
    )
      continue;
    const i = t.id === BLOCK.WATER ? ITEM.WATER_BUCKET : t.id;
    e.set(i, (e.get(i) ?? 0) + 1);
  }
  return e;
}
function yk(n, e) {
  return [...ZF(n)].reduce((t, [i, s]) => t + e(i) * s, 0);
}
function QF(n, e, t) {
  for (let i = 0; i < (t & 3); i++) [n, e] = [-e, n];
  return [n, e];
}
function JF(n, e, t, i, s) {
  return n.blocks.map((o) => {
    const [a, r] = QF(o.x, o.z, s);
    let l =
        o.id === BLOCK.SIGN
          ? (o.meta & -4) | ((o.meta - s + 4) & 3)
          : fz(o.id, o.meta, s),
      c = o.text;
    return (
      c && (c = TF(c, s)),
      {
        ...o,
        x: e + a,
        y: t + o.y,
        z: i + r,
        meta: l,
        ...(c ? { text: c } : {}),
      }
    );
  });
}
function eG(n, e, t, i = () => !1) {
  var s;
  for (const o of n) {
    if (o.y < 1 || o.y >= 127) return "height";
    const a = t(o.x, o.y, o.z);
    if (a < 0) return "unloaded";
    if (
      a === BLOCK.CHEST ||
      a === BLOCK.MILITARY_CHEST ||
      a === BLOCK.BARREL ||
      a === BLOCK.FURNACE
    )
      return "occupied";
    if (o.id !== BLOCK.AIR && (s = BLOCKS[o.id]) != null && s.solid && i(o))
      return "entity";
  }
  return null;
}
function tG(n, e = !1) {
  return {
    occupied: e
      ? "Move storage and furnaces out of the building area"
      : "Уберите хранилища и печи из зоны строительства",
    height: e ? "Not enough vertical space" : "Не хватает места по высоте",
    entity: e
      ? "A player or vehicle is in the building area"
      : "В зоне строительства игрок или техника",
    unloaded: e ? "Wait for the terrain to load" : "Дождитесь загрузки участка",
  }[n];
}
const vs = { TORSO: 0, HEAD: 1, ARM: 2, LEG: 3 },
  iG = 32,
  nG = new Set([32, 266, 319, 359, 360, 361, 362, 363, 364, 365, 366]),
  sG = (n) => nG.has(n),
  zo = { NONE: 0, BLOCK: 1, ITEM: 2, ANIMAL: 3 },
  oG = {
    pig: ANIMAL_KIND.PIG,
    chicken: ANIMAL_KIND.CHICKEN,
    sheep: ANIMAL_KIND.SHEEP,
    cow: ANIMAL_KIND.COW,
    camel: ANIMAL_KIND.CAMEL,
    fish: ANIMAL_KIND.FISH,
    shark: ANIMAL_KIND.SHARK,
    wendigo: ANIMAL_KIND.WENDIGO,
    свинья: ANIMAL_KIND.PIG,
    курица: ANIMAL_KIND.CHICKEN,
    овца: ANIMAL_KIND.SHEEP,
    корова: ANIMAL_KIND.COW,
    верблюд: ANIMAL_KIND.CAMEL,
    рыба: ANIMAL_KIND.FISH,
    акула: ANIMAL_KIND.SHARK,
    вендиго: ANIMAL_KIND.WENDIGO,
  },
  aG = [
    "Свинья",
    "Курица",
    "Овца",
    "Корова",
    "Верблюд",
    "Рыба",
    "",
    "Акула",
    "",
    "",
    "",
    "",
    "Вендиго",
  ],
  rG = [
    "Pig",
    "Chicken",
    "Sheep",
    "Cow",
    "Camel",
    "Fish",
    "",
    "Shark",
    "",
    "",
    "",
    "",
    "Wendigo",
  ],
  lG = new Set([BLOCK.AIR, BLOCK.WATER, BLOCK.LAVA, iG]);
[
  "grass",
  "dirt",
  "stone",
  "cobblestone",
  "planks",
  "log",
  "leaves",
  "sand",
  "bricks",
  "gravel",
  "hay_bale",
  "barrel",
  "chest",
  "bookshelf",
  "pumpkin",
  "furnace",
  "stone_bricks",
  "snow",
  "cactus",
  "military_chest",
  "wooden_table",
  "tnt",
  "dynamite",
  "oak_log",
  "birch_log",
  "mossy_cobblestone",
]
  .map((n) => {
    var e;
    return (e = BLOCKS.find((t) => t.name === n)) == null ? void 0 : e.id;
  })
  .filter((n) => n !== void 0 && n > 0);
const cG = (n) =>
    n
      .trim()
      .toLowerCase()
      .replace(/ё/g, "е")
      .replace(/[\s-]+/g, "_"),
  hG = new Map();
for (const [n, e] of Object.entries(ITEM)) hG.set(cG(n), e);
function dG(n, e = !1) {
  var t, i, s;
  return n.kind === zo.BLOCK
    ? ((e
        ? (t = BLOCKS[n.id]) == null
          ? void 0
          : t.labelEn
        : (i = BLOCKS[n.id]) == null
          ? void 0
          : i.label) ??
        ((s = BLOCKS[n.id]) == null ? void 0 : s.name) ??
        "?")
    : n.kind === zo.ITEM
      ? ((e ? BLOCK_NAMES_EN[n.id] : BLOCK_NAMES_RU[n.id]) ?? BLOCK_NAMES_RU[n.id] ?? String(n.id))
      : n.kind === zo.ANIMAL
        ? ((e ? rG : aG)[n.id] ?? "?")
        : e
          ? "yourself"
          : "себя";
}
function uG() {
  const n = Object.keys(oG).filter((i) => /^[a-z]/.test(i)),
    e = BLOCKS.filter((i) => i.id > 0 && !lG.has(i.id)).map((i) => i.name),
    t = Object.keys(ITEM).map((i) => i.toLowerCase());
  return ["random", "off", ...n, ...e, ...t];
}
function vk(n) {
  const e = [],
    t = (l, c, h = 0, d = 0, u = 0) => {
      l.translate(h, d, u);
      const f = new ze(c),
        p = new Float32Array(l.getAttribute("position").count * 3);
      for (let m = 0; m < p.length; m += 3)
        ((p[m] = f.r), (p[m + 1] = f.g), (p[m + 2] = f.b));
      (l.setAttribute("color", new oi(p, 3)), e.push(l));
    },
    i = new Map([
      [ITEM.APPLE, 12399664],
      [ITEM.ORANGE, 15898146],
      [ITEM.COCONUT, 7819574],
      [ITEM.POTATO, 12096857],
      [ITEM.BAKED_POTATO, 9527358],
      [ITEM.EGG, 15655365],
    ]),
    s = new Map([
      [ITEM.IRON_INGOT, 11385026],
      [ITEM.GOLD_INGOT, 15316035],
      [ITEM.DIAMOND_INGOT, 6739684],
      [ITEM.TITANIUM_INGOT, 9673913],
    ]),
    o = new Map([
      [ITEM.BUCKET, 3423555],
      [ITEM.WATER_BUCKET, 3640761],
      [ITEM.LAVA_BUCKET, 16283938],
      [ITEM.MILK_BUCKET, 15788760],
      [ITEM.CAMEL_MILK_BUCKET, 15195068],
    ]);
  let a = !1;
  if (n === ITEM.MILITARY_MEDKIT) {
    const l = (c, h, d, u, f = 0, p = 0, m = 0) =>
      t(new Ct(c, h, d), u, f, p, m);
    (l(0.42, 0.28, 0.24, 5136963), l(0.43, 0.055, 0.25, 7570010, 0, 0.12));
    for (const c of [-0.16, 0.16]) {
      (l(0.035, 0.285, 0.254, 2702640, c),
        l(0.042, 0.045, 0.015, 12891778, c, 0.04, 0.135));
      for (const h of [-0.12, 0.12]) l(0.055, 0.04, 0.265, 2504492, c, h);
    }
    for (const c of [-0.126, 0.126])
      (l(0.145, 0.135, 0.012, 14673095, 0, -0.015, c),
        l(0.034, 0.105, 0.014, 11878453, 0, -0.015, c * 1.065),
        l(0.105, 0.034, 0.014, 11878453, 0, -0.015, c * 1.065));
    (l(0.022, 0.065, 0.032, 2701101, -0.065, 0.182),
      l(0.022, 0.065, 0.032, 2701101, 0.065, 0.182),
      l(0.15, 0.024, 0.032, 10266492, 0, 0.21),
      (a = !0));
  } else if (i.has(n)) {
    const l = new mn(0.17, 12, 8);
    if (
      (l.scale(
        1,
        n === ITEM.EGG ? 1.3 : 0.9,
        n === ITEM.POTATO || n === ITEM.BAKED_POTATO ? 0.75 : 1,
      ),
      t(l, i.get(n)),
      n === ITEM.APPLE || n === ITEM.ORANGE)
    ) {
      t(new xt(0.013, 0.017, 0.065, 6), 6574131, 0, 0.17);
      const c = new mn(0.045, 6, 4);
      (c.scale(1, 0.18, 0.45), c.rotateZ(0.3), t(c, 5540164, 0.036, 0.178));
    }
  } else if (s.has(n)) {
    const l = new xt(0.14, 0.19, 0.12, 4);
    (l.rotateY(Math.PI / 4),
      l.scale(1.6, 1, 0.8),
      t(l, s.get(n)),
      t(
        new Ct(0.105, 0.002, 0.045),
        new ze(s.get(n)).multiplyScalar(0.72).getHex(),
        0,
        0.061,
      ),
      (a = !0));
  } else if (o.has(n)) {
    (t(new xt(0.15, 0.115, 0.27, 12, 1, !0), 10135730),
      t(new xt(0.115, 0.115, 0.018, 12), 7569803, 0, -0.13));
    const l = new xs(0.15, 0.012, 4, 12);
    (l.rotateX(Math.PI / 2),
      t(l, 13884642, 0, 0.135),
      n !== ITEM.BUCKET && t(new xt(0.137, 0.137, 0.008, 12), o.get(n), 0, 0.108));
    const c = new xs(0.157, 0.009, 4, 12, Math.PI);
    (t(c, 5858669, 0, 0.12), (a = !0));
  } else return null;
  const r = no(e, !1);
  for (const l of e) l.dispose();
  return (
    r.computeBoundingSphere(),
    new le(
      r,
      new Us({
        vertexColors: !0,
        shininess: a ? 38 : 9,
        specular: a ? 6648187 : 1513239,
        side: o.has(n) ? Ai : $l,
      }),
    )
  );
}
function bk(n, e, t, i) {
  const s = [];
  return (
    (n(e - 1, t, i) === BLOCK.CHAIN || n(e + 1, t, i) === BLOCK.CHAIN) && s.push(0),
    (n(e, t - 1, i) === BLOCK.CHAIN || n(e, t + 1, i) === BLOCK.CHAIN) && s.push(1),
    (n(e, t, i - 1) === BLOCK.CHAIN || n(e, t, i + 1) === BLOCK.CHAIN) && s.push(2),
    s.length ? s : [1]
  );
}
const w5 = new Map();
function wk(n) {
  if (w5.has(n)) return w5.get(n);
  const e = [],
    t = 12,
    i = 4,
    s = (o) =>
      n === 0 ? [o[1], -o[0], o[2]] : n === 2 ? [o[0], -o[2], o[1]] : o;
  for (let o = 0; o < 4; o++) {
    const a = (r, l) => {
      const c = (r / t) * Math.PI * 2,
        h = (l / i) * Math.PI * 2,
        d = Math.cos(c) / 0.105,
        u = Math.sin(c) / 0.17,
        f = Math.hypot(d, u),
        p = 0.105 * Math.cos(c) + (0.027 * Math.cos(h) * d) / f,
        m = 0.17 * Math.sin(c) + (0.027 * Math.cos(h) * u) / f,
        y = 0.027 * Math.sin(h),
        g = s(o % 2 ? [y, m, -p] : [p, m, y]);
      return ((g[n] += (o + 0.5) / 4 - 0.5), g.map((b) => b + 0.5));
    };
    for (let r = 0; r < t; r++)
      for (let l = 0; l < i; l++) {
        const c = [a(r, l), a(r + 1, l), a(r, l + 1), a(r + 1, l + 1)],
          h = c[1].map((p, m) => p - c[0][m]),
          d = c[2].map((p, m) => p - c[0][m]),
          u = [
            h[1] * d[2] - h[2] * d[1],
            h[2] * d[0] - h[0] * d[2],
            h[0] * d[1] - h[1] * d[0],
          ],
          f = Math.hypot(...u);
        (u.forEach((p, m) => (u[m] = p / f)), e.push({ points: c, normal: u }));
      }
  }
  return (w5.set(n, e), e);
}
