// index-Dp6GxvJu 81 — math
// Lines 53703-54010 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function Dp(n) {
  const e = Oy[n];
  if (e === void 0) return 0;
  const t = Jl(e) * sC;
  return Math.max(1, Math.floor(t / nC));
}
function kg(n) {
  return Math.max(1, Math.ceil(n / nC));
}
function F$(n, e, t) {
  return Math.ceil((Math.max(0, t - e) / kg(t)) * Dp(n));
}
const rL = new Set([P.TANK, P.BTR_TURRET, P.HIMARS, P.PATRIOT]),
  xu = new Set([P.PLANE, P.HELI, P.FIGHTER_JET]);
function LA(n) {
  return rL.has(n) ? 2 : xu.has(n) ? 1 : 0;
}
const G$ = (n) => (n >> 6) & 3,
  W$ = (n) => n & 15,
  IA = (n) => (n >> 4) & 3;
function V$(n, e) {
  return e <= 0
    ? 1
    : xu.has(n)
      ? 0.95
      : rL.has(n)
        ? e === 1
          ? 0.93
          : 0.86
        : 1;
}
function zw(n, e) {
  if (e <= 0) return 0;
  const t = Oy[n];
  if (t === void 0) return 0;
  const i = xu.has(n) ? 0.35 : e === 1 ? 0.3 : 0.65;
  return Math.ceil((Jl(t) * i) / 50) * 50;
}
function $$(n, e, t) {
  return Math.max(0, zw(n, t) - zw(n, e));
}
const q$ = (n, e) => Math.floor(zw(n, e) * 0.5);
function xm(n, e, t) {
  return e <= 0
    ? t
      ? "Factory hull"
      : "Заводской корпус"
    : xu.has(n)
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
function PA(n, e, t) {
  return e <= 0
    ? t
      ? "No add-on protection"
      : "Без навесной защиты"
    : xu.has(n)
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
const lL = {
    [P.TANK]: 120,
    [P.BTR_TURRET]: 50,
    [P.HIMARS]: 35,
    [P.PATRIOT]: 35,
  },
  K$ = 4;
function cL(n) {
  return t1(n) || $n(n) || Bo(n) || n === v.CACTUS;
}
function Tm(n, e, t, i, s, o, a) {
  if (!lL[e]) return [];
  const r = ah(e),
    l = Math.cos(o),
    c = Math.sin(o),
    h = r.halfLength,
    d = [-r.halfWidth, r.halfWidth].flatMap((S) =>
      [-r.halfLength, r.halfLength].map((M) => ({
        x: t + S * l + M * c,
        z: s - S * c + M * l,
      })),
    ),
    u = Math.floor(Math.min(...d.map((S) => S.x))) - 1,
    f = Math.floor(Math.max(...d.map((S) => S.x))) + 1,
    p = Math.floor(Math.min(...d.map((S) => S.z))) - 1,
    m = Math.floor(Math.max(...d.map((S) => S.z))) + 1,
    y = [],
    g = Math.floor(i + 0.05),
    b = Math.ceil(i + r.height) - 1;
  for (let S = u; S <= f; S++)
    for (let M = p; M <= m; M++) {
      const x = S + 0.5 - t,
        T = M + 0.5 - s,
        A = x * l - T * c,
        _ = x * c + T * l;
      if (Math.abs(A) > r.halfWidth + 0.5 || Math.abs(_) > r.halfLength + 0.9)
        continue;
      const C = -_ * a,
        R = C >= Math.max(0.3, h - 1.2);
      if (C >= -0.2)
        for (let N = g; N <= b + 1; N++) {
          const D = n.getBlock(S, N, M),
            H = de[D];
          if (
            !H ||
            D === v.AIR ||
            D === v.WATER ||
            D === v.LAVA ||
            (!H.solid && !Bo(D) && !$n(D) && !w0(D) && !Do(D) && D !== v.CACTUS)
          )
            continue;
          const G = cL(D);
          if ((!R && !G) || (N > b && !$n(D))) continue;
          const I = t1(D),
            O = $n(D)
              ? 1e-5
              : Bo(D)
                ? 2
                : D === v.CACTUS
                  ? 6
                  : I
                    ? K$
                    : w0(D) || Do(D)
                      ? Math.max(18, H.hardness * 0.38)
                      : Math.max(14, H.hardness * 1.8);
          y.push({ x: S, y: N, z: M, id: D, cost: O, tree: I });
        }
    }
  return (y.sort((S, M) => S.cost - M.cost || S.y - M.y), y);
}
function Y$(n, e, t, i, s, o) {
  if (!lL[e]) return [];
  const { halfWidth: a, halfLength: r, height: l } = ah(e),
    c = Math.cos(o),
    h = Math.sin(o),
    d = Math.ceil(Math.hypot(a, r) + 0.6),
    u = [],
    f = Math.floor(i - 1.05),
    p = Math.floor(i + l + 0.45);
  for (let m = Math.floor(t) - d; m <= Math.floor(t) + d; m++)
    for (let y = Math.floor(s) - d; y <= Math.floor(s) + d; y++) {
      const g = m + 0.5 - t,
        b = y + 0.5 - s;
      if (!(
        Math.abs(g * c - b * h) > a + 0.6 || Math.abs(g * h + b * c) > r + 0.6
      ))
        for (let S = f; S <= p; S++) {
          const M = n.getBlock(m, S, y);
          $n(M) && u.push({ x: m, y: S, z: y, id: M, cost: 1e-5, tree: !1 });
        }
    }
  return u;
}
const hr = 20,
  j$ = 1.75,
  hL = ["run", "jump", "crawl", "mine", "wood", "fight", "stealth"],
  Uw = [
    E.COMBAT_KNIFE,
    E.GLOCK,
    E.AK47,
    E.AWP,
    E.SHOTGUN,
    E.MINIGUN,
    E.RPG,
    E.GRENADE_LAUNCHER,
    E.GRENADE,
  ],
  Fw = [
    P.TANK,
    P.BTR_TURRET,
    P.HIMARS,
    P.PATRIOT,
    P.HELI,
    P.PLANE,
    P.FIGHTER_JET,
    P.DRONE,
    P.BOAT,
    P.SUBMARINE,
    P.CARRIER,
    P.TURRET,
    P.MORTAR,
    P.SPACE_ROCKET,
  ],
  X$ = {
    run: 11e3,
    jump: 3200,
    crawl: 2600,
    mine: 2600,
    wood: 1300,
    fight: 700,
    stealth: 4200,
  },
  Z$ = 3200,
  Q$ = 6e3,
  Tr = (n) => `w:${n}`,
  $d = (n) => `v:${n}`;
function dL(n) {
  return n.startsWith("w:") ? Z$ : n.startsWith("v:") ? Q$ : (X$[n] ?? 1e3);
}
function J$(n) {
  if (hL.includes(n)) return !0;
  const e = /^([wv]):(\d{1,4})$/.exec(n);
  return e ? (e[1] === "w" ? Uw : Fw).includes(+e[2]) : !1;
}
function Lg(n, e) {
  return e <= 0 ? 0 : Math.round(dL(n) * Math.pow(Math.min(e, hr) / hr, j$));
}
function B2(n, e) {
  let t = 0;
  for (; t < hr && e >= Lg(n, t + 1);) t++;
  return t;
}
function eq(n, e) {
  const t = B2(n, e);
  if (t >= hr) return 1;
  const i = Lg(n, t),
    s = Lg(n, t + 1);
  return Math.max(0, Math.min(1, (e - i) / Math.max(1, s - i)));
}
const Ko = (n) => Math.max(0, Math.min(hr, n)) / hr,
  k5 = (n) => 1 + 0.15 * Ko(n),
  L5 = (n) => 1 + 0.05 * Ko(n),
  I5 = (n) => Math.sqrt(1 + 0.25 * Ko(n)),
  P5 = (n) => 1 + 0.5 * Ko(n),
  O5 = (n) => 1 + 0.6 * Ko(n),
  N5 = (n) => 1 + 0.6 * Ko(n),
  D5 = (n) => 1 + 1 * Ko(n),
  OA = (n) => 1 - 0.35 * Ko(n),
  NA = (n) => 1 - 0.3 * Ko(n),
  DA = (n) => 1 - 0.35 * Ko(n),
  BA = (n) => 1 + 0.5 * Ko(n),
  HA = (n) => 1 / (1 + 0.4 * Ko(n)),
  tq = {
    [P.TANK]: 0.15,
    [P.BTR_TURRET]: 0.15,
    [P.HIMARS]: 0.12,
    [P.PATRIOT]: 0.12,
    [P.HELI]: 0.15,
    [P.PLANE]: 0.1,
    [P.FIGHTER_JET]: 0.1,
    [P.DRONE]: 0.2,
    [P.BOAT]: 0.2,
    [P.SUBMARINE]: 0.12,
    [P.CARRIER]: 0.1,
    [P.SPACE_ROCKET]: 0.1,
  },
  uL = (n) => tq[n] ?? 0,
  zA = (n, e) => 1 + uL(n) * Ko(e),
  UA = (n) => 1 - 0.25 * Ko(n),
  iq = (n) => Math.max(0.2, Math.min(10, 360 / Math.max(1, n))),
  nq = [
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
  ];
function sq(n) {
  const e = { xp: {}, stats: {} };
  if (!n || typeof n != "object") return e;
  const t = n;
  for (const [i, s] of Object.entries(t.xp ?? {}))
    !J$(i) ||
      typeof s != "number" ||
      !Number.isFinite(s) ||
      s <= 0 ||
      (e.xp[i] = Math.min(s, dL(i) * 1.5));
  for (const [i, s] of Object.entries(t.stats ?? {}))
    !nq.includes(i) ||
      typeof s != "number" ||
      !Number.isFinite(s) ||
      s <= 0 ||
      (e.stats[i] = Math.min(s, 1e10));
  return e;
}
const B5 = () => z.language === "en",
  oq = {
    run: ["Бег", "Running"],
    jump: ["Прыжки", "Jumping"],
    crawl: ["Ползание", "Crawling"],
    mine: ["Шахтёр", "Miner"],
    wood: ["Лесоруб", "Lumberjack"],
    fight: ["Боец", "Brawler"],
    stealth: ["Скрытность", "Stealth"],
  },
  Pn = (n) =>
    `${n >= 1 ? "+" : "−"}${Math.abs(Math.round((n - 1) * 1e3) / 10)}%`;
