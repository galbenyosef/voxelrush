// index-BeUlFSPp 102 — math
// Lines 61111-61435 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Am(s) {
  const e = K5[s];
  if (e === void 0) return 0;
  const t = $c(e) * eP;
  return Math.max(1, Math.floor(t / JI));
}
function Ov(s) {
  return Math.max(1, Math.ceil(s / JI));
}
function IZ(s, e, t) {
  return Math.ceil((Math.max(0, t - e) / Ov(t)) * Am(s));
}
const l7 = new Set([L.TANK, L.BTR_TURRET, L.HIMARS, L.PATRIOT]),
  ep = new Set([L.PLANE, L.HELI, L.FIGHTER_JET]);
function e8(s) {
  return l7.has(s) ? 2 : ep.has(s) ? 1 : 0;
}
const PZ = (s) => (s >> 6) & 3,
  OZ = (s) => s & 15,
  t8 = (s) => (s >> 4) & 3;
function NZ(s, e) {
  return e <= 0
    ? 1
    : ep.has(s)
      ? 0.95
      : l7.has(s)
        ? e === 1
          ? 0.93
          : 0.86
        : 1;
}
function v4(s, e) {
  if (e <= 0) return 0;
  const t = K5[s];
  if (t === void 0) return 0;
  const i = ep.has(s) ? 0.35 : e === 1 ? 0.3 : 0.65;
  return Math.ceil(($c(t) * i) / 50) * 50;
}
function DZ(s, e, t) {
  return Math.max(0, v4(s, t) - v4(s, e));
}
const HZ = (s, e) => Math.floor(v4(s, e) * 0.5);
function fg(s, e, t) {
  return e <= 0
    ? t
      ? "Factory hull"
      : "Заводской корпус"
    : ep.has(s)
      ? t
        ? "Reinforced airframe"
        : "Усиленная броня"
      : e === 1
        ? t
          ? "Armour I · 12 mm steel"
          : "Броня I · 12 мм сталь"
        : t
          ? "Armour II · 40 mm composite + ERA"
          : "Броня II · 40 мм композит + ДЗ";
}
function i8(s, e, t) {
  return e <= 0
    ? t
      ? "No add-on protection"
      : "Без навесной защиты"
    : ep.has(s)
      ? t
        ? "Bullets −50% · blasts & missiles −30% · speed −5%"
        : "Пули −50% · взрывы и ракеты −30% · скорость −5%"
      : e === 1
        ? t
          ? "Bullets −80% · HE rounds −50% · speed −7% · ramming ×1.45"
          : "Пули −80% · разрывные −50% · скорость −7% · таран ×1.45"
        : t
          ? "Bullets −90% · HE −80% · rockets, shells, grenades −60% · speed −14% · ramming ×2.1"
          : "Пули −90% · разрывные −80% · ракеты, снаряды, гранаты −60% · скорость −14% · таран ×2.1";
}
const c7 = {
    [L.TANK]: 120,
    [L.BTR_TURRET]: 50,
    [L.HIMARS]: 35,
    [L.PATRIOT]: 35,
  },
  BZ = 4;
function h7(s) {
  return Fm(s) || en(s) || ra(s) || s === v.CACTUS;
}
function d7(s) {
  return h7(s) || zc(s) || Io(s);
}
function pg(s, e, t, i, n, o, a) {
  if (!c7[e]) return [];
  const r = eh(e),
    l = Math.cos(o),
    c = Math.sin(o),
    h = r.halfLength,
    d = [-r.halfWidth, r.halfWidth].flatMap((S) =>
      [-r.halfLength, r.halfLength].map((M) => ({
        x: t + S * l + M * c,
        z: n - S * c + M * l,
      })),
    ),
    u = Math.floor(Math.min(...d.map((S) => S.x))) - 1,
    f = Math.floor(Math.max(...d.map((S) => S.x))) + 1,
    p = Math.floor(Math.min(...d.map((S) => S.z))) - 1,
    m = Math.floor(Math.max(...d.map((S) => S.z))) + 1,
    g = [],
    y = Math.floor(i + 0.05),
    b = Math.ceil(i + r.height) - 1;
  for (let S = u; S <= f; S++)
    for (let M = p; M <= m; M++) {
      const E = S + 0.5 - t,
        A = M + 0.5 - n,
        T = E * l - A * c,
        x = E * c + A * l;
      if (Math.abs(T) > r.halfWidth + 0.5 || Math.abs(x) > r.halfLength + 0.9)
        continue;
      const R = -x * a,
        _ = R >= Math.max(0.3, h - 1.2);
      if (R >= -0.2)
        for (let P = y; P <= b + 1; P++) {
          const O = s.getBlock(S, P, M),
            B = le[O];
          if (
            !B ||
            O === v.AIR ||
            O === v.WATER ||
            O === v.LAVA ||
            (!B.solid &&
              !ra(O) &&
              !en(O) &&
              !zc(O) &&
              !Io(O) &&
              O !== v.CACTUS) ||
            (h7(O), !_ && !d7(O)) ||
            (P > b && !en(O))
          )
            continue;
          const H = Fm(O),
            D = en(O)
              ? 1e-5
              : ra(O)
                ? 2
                : O === v.CACTUS
                  ? 6
                  : H
                    ? BZ
                    : zc(O) || Io(O)
                      ? Math.max(18, B.hardness * 0.38)
                      : Math.max(14, B.hardness * 1.8);
          g.push({ x: S, y: P, z: M, id: O, cost: D, tree: H });
        }
    }
  return (g.sort((S, M) => S.cost - M.cost || S.y - M.y), g);
}
function zZ(s, e, t, i, n, o) {
  if (!c7[e]) return [];
  const { halfWidth: a, halfLength: r, height: l } = eh(e),
    c = Math.cos(o),
    h = Math.sin(o),
    d = Math.ceil(Math.hypot(a, r) + 0.6),
    u = [],
    f = Math.floor(i - 1.05),
    p = Math.floor(i + l + 0.45);
  for (let m = Math.floor(t) - d; m <= Math.floor(t) + d; m++)
    for (let g = Math.floor(n) - d; g <= Math.floor(n) + d; g++) {
      const y = m + 0.5 - t,
        b = g + 0.5 - n;
      if (!(
        Math.abs(y * c - b * h) > a + 0.6 || Math.abs(y * h + b * c) > r + 0.6
      ))
        for (let S = f; S <= p; S++) {
          const M = s.getBlock(m, S, g);
          en(M) && u.push({ x: m, y: S, z: g, id: M, cost: 1e-5, tree: !1 });
        }
    }
  return u;
}
const el = 20,
  FZ = 1.75,
  u7 = ["run", "jump", "crawl", "mine", "wood", "fight", "stealth"],
  b4 = [
    w.COMBAT_KNIFE,
    w.GLOCK,
    w.AK47,
    w.AWP,
    w.SHOTGUN,
    w.MINIGUN,
    w.RPG,
    w.GRENADE_LAUNCHER,
    w.GRENADE,
    w.DEAGLE,
    w.M4A1,
    w.VECTOR,
  ],
  w4 = [
    L.TANK,
    L.BTR_TURRET,
    L.HIMARS,
    L.PATRIOT,
    L.HELI,
    L.PLANE,
    L.FIGHTER_JET,
    L.DRONE,
    L.BOAT,
    L.SUBMARINE,
    L.CARRIER,
    L.TURRET,
    L.MORTAR,
    L.SPACE_ROCKET,
  ],
  UZ = {
    run: 11e3,
    jump: 3200,
    crawl: 2600,
    mine: 2600,
    wood: 1300,
    fight: 700,
    stealth: 4200,
  },
  GZ = 3200,
  WZ = 6e3,
  gl = (s) => `w:${s}`,
  df = (s) => `v:${s}`;
function f7(s) {
  return s.startsWith("w:") ? GZ : s.startsWith("v:") ? WZ : (UZ[s] ?? 1e3);
}
function $Z(s) {
  if (u7.includes(s)) return !0;
  const e = /^([wv]):(\d{1,4})$/.exec(s);
  return e ? (e[1] === "w" ? b4 : w4).includes(+e[2]) : !1;
}
function Nv(s, e) {
  return e <= 0 ? 0 : Math.round(f7(s) * Math.pow(Math.min(e, el) / el, FZ));
}
function Ry(s, e) {
  let t = 0;
  for (; t < el && e >= Nv(s, t + 1);) t++;
  return t;
}
function VZ(s, e) {
  const t = Ry(s, e);
  if (t >= el) return 1;
  const i = Nv(s, t),
    n = Nv(s, t + 1);
  return Math.max(0, Math.min(1, (e - i) / Math.max(1, n - i)));
}
const ga = (s) => Math.max(0, Math.min(el, s)) / el,
  qb = (s) => 1 + 0.15 * ga(s),
  Kb = (s) => 1 + 0.05 * ga(s),
  Yb = (s) => Math.sqrt(1 + 0.25 * ga(s)),
  jb = (s) => 1 + 0.5 * ga(s),
  Xb = (s) => 1 + 0.6 * ga(s),
  Zb = (s) => 1 + 0.6 * ga(s),
  Qb = (s) => 1 + 1 * ga(s),
  s8 = (s) => 1 - 0.35 * ga(s),
  n8 = (s) => 1 - 0.3 * ga(s),
  o8 = (s) => 1 - 0.35 * ga(s),
  a8 = (s) => 1 + 0.5 * ga(s),
  r8 = (s) => 1 / (1 + 0.4 * ga(s)),
  qZ = {
    [L.TANK]: 0.15,
    [L.BTR_TURRET]: 0.15,
    [L.HIMARS]: 0.12,
    [L.PATRIOT]: 0.12,
    [L.HELI]: 0.15,
    [L.PLANE]: 0.1,
    [L.FIGHTER_JET]: 0.1,
    [L.DRONE]: 0.2,
    [L.BOAT]: 0.2,
    [L.SUBMARINE]: 0.12,
    [L.CARRIER]: 0.1,
    [L.SPACE_ROCKET]: 0.1,
  },
  p7 = (s) => qZ[s] ?? 0,
  l8 = (s, e) => 1 + p7(s) * ga(e),
  c8 = (s) => 1 - 0.25 * ga(s),
  KZ = (s) => Math.max(0.2, Math.min(10, 360 / Math.max(1, s))),
  YZ = [
    "playSeconds",
    "distance",
    "jumps",
    "blocks",
    "logs",
    "shots",
    "hits",
    "punches",
    "driveSeconds",
    "levelUps",
    "kills",
    "deaths",
    "headshots",
    "vehicleKills",
    "battles",
    "wins",
  ];
function jZ(s) {
  const e = { xp: {}, stats: {} };
  if (!s || typeof s != "object") return e;
  const t = s;
  for (const [i, n] of Object.entries(t.xp ?? {}))
    !$Z(i) ||
      typeof n != "number" ||
      !Number.isFinite(n) ||
      n <= 0 ||
      (e.xp[i] = Math.min(n, f7(i) * 1.5));
  for (const [i, n] of Object.entries(t.stats ?? {}))
    !YZ.includes(i) ||
      typeof n != "number" ||
      !Number.isFinite(n) ||
      n <= 0 ||
      (e.stats[i] = Math.min(n, 1e10));
  return e;
}
const Jb = () => !wi(),
  XZ = {
    run: ["Бег", "Running"],
    jump: ["Прыжки", "Jumping"],
    crawl: ["Ползание", "Crawling"],
    mine: ["Шахтёр", "Miner"],
    wood: ["Лесоруб", "Lumberjack"],
    fight: ["Боец", "Brawler"],
    stealth: ["Скрытность", "Stealth"],
  },
  Us = (s) =>
    `${s >= 1 ? "+" : "−"}${Math.abs(Math.round((s - 1) * 1e3) / 10)}%`;
