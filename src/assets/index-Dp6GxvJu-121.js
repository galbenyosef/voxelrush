// index-Dp6GxvJu 121 — item
// Lines 73877-74184 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
for (const [n, e] of Object.entries(BLOCK_NAMES_EN)) d1.push([e, BLOCK_NAMES_RU[Number(n)]]);
for (const [n, e] of Object.entries(VEHICLE_NAMES_EN)) d1.push([e, VEHICLE_NAMES_RU[Number(n)]]);
for (const n of BLOCKS) n.labelEn && n.label && d1.push([n.labelEn, n.label]);
for (const n of RANKS) d1.push([n.nameEn, n.name]);
for (const [n, e] of d1.sort(
  (t, i) =>
    Math.max(i[0].length, i[1].length) - Math.max(t[0].length, t[1].length),
))
  if (!(!n || !e || n === e))
    for (const t of ["en", "ru"]) {
      const i = t === "en" ? e : n,
        s = t === "en" ? n : e;
      if (!/\{\d+\}/.test(i)) {
        hI[t].set(i, s);
        continue;
      }
      const o = [],
        a = i
          .split(/(\{\d+\})/g)
          .map((r) =>
            /^\{\d+\}$/.test(r)
              ? (o.push(Number(r.slice(1, -1))), "([^\\n]*?)")
              : Hj(r),
          )
          .join("");
      dI[t].push({ expression: new RegExp(`^${a}$`), target: s, slots: o });
    }
function Ns(n, e = "en", t = 0) {
  if (!n || ((n = zj(n)), e === "en" && !/[а-яё]/i.test(n))) return n;
  const i = hI[e].get(n);
  if (i !== void 0) return i;
  const s = Um[e].get(n);
  if (s !== void 0) return s;
  let o = n;
  if (t < 5)
    for (const { expression: a, target: r, slots: l } of dI[e]) {
      const c = a.exec(n);
      if (!c) continue;
      const h = new Map(l.map((d, u) => [d, Ns(c[u + 1], e, t + 1)]));
      o = r.replace(/\{(\d+)\}/g, (d, u) => h.get(Number(u)) ?? d);
      break;
    }
  return (
    o === n &&
      t < 5 &&
      /\n| · |, /.test(n) &&
      (o = n
        .split(/(\n| · |, )/)
        .map((a) => (/^(\n| · |, )$/.test(a) ? a : Ns(a, e, t + 1)))
        .join("")),
    Um[e].size > 2048 && Um[e].clear(),
    Um[e].set(n, o),
    o
  );
}
const Uj = new Set([
  "objective",
  "title",
  "subtitle",
  "detail",
  "text",
  "message",
  "note",
  "label",
  "activity",
  "tierLabel",
  "phase",
  "repTitle",
  "cityProgress",
  "nextRaid",
  "weapon",
  "armor",
  "tasks",
  "log",
  "reason",
]);
function mM(n, e, t = "") {
  return typeof n == "string"
    ? Uj.has(t)
      ? Ns(n, e)
      : n
    : Array.isArray(n)
      ? n.map((i) => mM(i, e, t))
      : n && typeof n == "object"
        ? Object.fromEntries(
            Object.entries(n).map(([i, s]) => [i, mM(s, e, i)]),
          )
        : n;
}
const Fj = {
    [ITEM.GLOCK]: 1250,
    [ITEM.AK47]: 1950,
    [ITEM.MINIGUN]: 1200,
    [ITEM.SHOTGUN]: 850,
    [ITEM.AWP]: 640,
    [ITEM.RPG]: 320,
    [ITEM.GRENADE_LAUNCHER]: 380,
    [ITEM.AXE]: 1100,
    [ITEM.WELDER]: 1250,
    [ITEM.DRILL_METAL]: 700,
    [ITEM.DRILL_DIAMOND]: 1800,
    [ITEM.DRILL_TITANIUM]: 3600,
    [ITEM.DRILL_COMPOSITE]: 7e3,
    [ITEM.DRILL_LASER]: 14e3,
    [ITEM.LUNAR_DRILL]: 24e3,
    [ITEM.SHEARS]: 300,
    [ITEM.COMBAT_KNIFE]: 160,
    [ITEM.FISHING_ROD]: 320,
    [ITEM.CHAINSAW_BASIC]: 630,
    [ITEM.CHAINSAW_PRO]: 1260,
    [ITEM.CHAINSAW_INDUSTRIAL]: 2240,
    [ITEM.HELMET_1]: 240,
    [ITEM.HELMET_2]: 480,
    [ITEM.HELMET_3]: 840,
    [ITEM.HELMET_4]: 1500,
    [ITEM.VEST_4]: 3200,
    [ITEM.PANTS_4]: 2150,
    [ITEM.BOOTS_4]: 1600,
    [ITEM.SPACE_HELMET]: 1800,
    [ITEM.VEST_1]: 500,
    [ITEM.VEST_2]: 1e3,
    [ITEM.VEST_3]: 1800,
    [ITEM.PANTS_1]: 360,
    [ITEM.PANTS_2]: 720,
    [ITEM.PANTS_3]: 1200,
    [ITEM.BOOTS_1]: 260,
    [ITEM.BOOTS_2]: 520,
    [ITEM.BOOTS_3]: 900,
  },
  gM = 650;
function or(n) {
  return Fj[Ti(n) || n] ?? 0;
}
function np(n) {
  return or(n);
}
function Vl(n) {
  return Ql(n) ? Da(n) : So(n).suppressor ? gM : 0;
}
function yM(n, e) {
  const t = or(n);
  return t <= 0 ? 1 : Math.max(0, Math.min(1, (e === void 0 ? t : e) / t));
}
function rb(n, e) {
  return or(n) <= 0 ? 1 : 0.1 + yM(n, e) * 0.9;
}
function Gj(n, e) {
  const t = [];
  return (
    n.forEach((i, s) => {
      const o = Ti(i.id) || i.id;
      if (
        i.count <= 0 ||
        (e === 0 ? s < 36 || s >= 40 || !Fc(i.id) : s >= 36 || !TOOL_ITEM_BY_BLOCK[o])
      )
        return;
      const a = or(i.id);
      if (!a) return;
      const r = Math.max(0, a - Math.max(0, i.durability ?? a)),
        l = e === 1 ? Vl(i.id) : 0,
        c = Math.max(0, l - Math.max(0, i.suppressorDurability ?? l));
      if (!r && !c) return;
      const h = Math.max(
        1,
        Math.ceil(
          sC * ((Jl(o) * r) / a + (l ? (Jl(ITEM.SUPPRESSOR) * c) / l : 0)),
        ),
      );
      t.push({
        index: s,
        durability: a,
        suppressorDurability: l || void 0,
        cost: h,
      });
    }),
    { repairs: t, count: t.length, cost: t.reduce((i, s) => i + s.cost, 0) }
  );
}
const vM = [
    "property",
    "block",
    "blueprint",
    "nature",
    "food",
    "resource",
    "weapon",
    "ammo",
    "explosive",
    "tool",
    "medical",
    "armor",
    "vehicle",
    "unit",
  ],
  i_ = [
    [ITEM.AXE, ITEM.WELDER, ITEM.SHEARS, ITEM.FISHING_ROD],
    [ITEM.BUCKET, ITEM.WATER_BUCKET, ITEM.LAVA_BUCKET],
    [
      ITEM.DRILL_METAL,
      ITEM.DRILL_DIAMOND,
      ITEM.DRILL_TITANIUM,
      ITEM.DRILL_COMPOSITE,
      ITEM.DRILL_LASER,
      ITEM.LUNAR_DRILL,
    ],
    [ITEM.CHAINSAW_BASIC, ITEM.CHAINSAW_PRO, ITEM.CHAINSAW_INDUSTRIAL],
  ];
function n_(n) {
  const { id: e, category: t } = n;
  if (t === "armor") {
    if (e === ITEM.SPACE_HELMET) return ARMOR_SLOTS.length;
    const i = ra(e);
    return i ? ARMOR_SLOTS.indexOf(i.slot) : ARMOR_SLOTS.length + 1;
  }
  if (t === "weapon") {
    const i = n1[e];
    return i ? 1 + WEAPON_ATTACHMENTS.indexOf(i) : 0;
  }
  if (t === "tool") {
    const i = i_.findIndex((s) => s.includes(e));
    return i < 0 ? i_.length : i;
  }
  return t === "block" ? (OS(e) ? 1 : w0(e) ? 2 : Do(e) ? 3 : 0) : 0;
}
function Wj(n, e, t, i) {
  const s = new Intl.Collator(i, { numeric: !0 });
  return [...n].sort((o, a) => {
    const r = vM.indexOf(o.category) - vM.indexOf(a.category);
    if (r) return r;
    const l = () => s.compare(t(o.id), t(a.id)) || o.id - a.id;
    if (e === "name") return l();
    if (e === "price") return o.price - a.price || l();
    const c = n_(o) - n_(a);
    if (c) return c;
    const h = ra(o.id),
      d = ra(a.id);
    return h && d
      ? h.level - d.level || l()
      : o.category === "block" || o.category === "nature"
        ? l()
        : o.price - a.price || l();
  });
}
const Vj = (n) =>
  Object.assign(n, {
    id: 0,
    count: 0,
    durability: 0,
    suppressorDurability: 0,
    magazine: void 0,
    cosmetic: void 0,
  });
function jh(n, e) {
  var t, i;
  return (
    ((t = n.cosmetic) == null ? void 0 : t.uid) ===
      ((i = e.cosmetic) == null ? void 0 : i.uid) &&
    n.id === e.id &&
    (n.durability ?? 0) === (e.durability ?? 0) &&
    (n.suppressorDurability ?? 0) === (e.suppressorDurability ?? 0) &&
    (!(Ti(n.id) || Fc(n.id)) || (n.magazine ?? 65535) === (e.magazine ?? 65535))
  );
}
function bM(n, e, t, i, s = !0) {
  if (n === e || !n.id || t <= 0) return 0;
  const o = Math.min(n.count, Math.floor(t));
  if (!e.id || jh(n, e)) {
    const a = Math.min(o, i(n.id) - (e.id ? e.count : 0));
    return a <= 0
      ? 0
      : (e.id || Object.assign(e, n, { count: 0 }),
        (e.count += a),
        (n.count -= a),
        n.count || Vj(n),
        a);
  }
  if (s && o === n.count && n.count <= i(n.id) && e.count <= i(e.id)) {
    const a = { ...e };
    return (Object.assign(e, n), Object.assign(n, a), o);
  }
  return 0;
}
function $j(n, e, t) {
  let i = 0;
  for (const s of [!0, !1])
    for (const o of e) {
      if (!n.id) return i;
      n === o ||
        !!o.id !== s ||
        (o.id && !jh(n, o)) ||
        (i += bM(n, o, n.count, t, !1));
    }
  return i;
}
const qj = new Set([
  ITEM.TANK,
  ITEM.DRONE,
  ITEM.HELI,
  ITEM.BOAT,
  ITEM.CARRIER,
  ITEM.SUBMARINE,
  ITEM.HIMARS,
  ITEM.PATRIOT,
  ITEM.BTR_TURRET,
  ITEM.TURRET,
  ITEM.MORTAR,
  ITEM.SPACE_ROCKET,
]);
