// index-Dp6GxvJu 14 — count
// Lines 30338-30683 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const Al = (n) => (n === 1 ? 2 : 1),
  dg = { 1: { en: "Alpha", ru: "Альфа" }, 2: { en: "Bravo", ru: "Браво" } },
  Ud = { mine: "#3d9bff", enemy: "#ff4d42", none: "#c8d2dc" },
  Rc = (n, e) => (n ? (n === (e || 1) ? Ud.mine : Ud.enemy) : Ud.none),
  Ux = { 1: 3, 2: 14 },
  Fx = s1(ITEM.AK47, {
    scope: 5,
    suppressor: !1,
    laser: !1,
    extMag: !1,
    light: !1,
  }),
  Gx = s1(ITEM.AWP, {
    scope: 3,
    suppressor: !1,
    laser: !1,
    extMag: !1,
    light: !1,
  }),
  Jr = s1(ITEM.GLOCK, {
    scope: 0,
    suppressor: !1,
    laser: !0,
    extMag: !1,
    light: !0,
  }),
  GAMEMODES = {
    assault: {
      id: "assault",
      name: { en: "Assault", ru: "Штурмовик" },
      role: {
        en: "Rifle, grenades — takes flags",
        ru: "Автомат, гранаты — берёт флаги",
      },
      items: [
        { id: Fx, count: 1 },
        { id: ITEM.GRENADE, count: 3 },
        { id: ITEM.BANDAGE, count: 3 },
        { id: ITEM.COMBAT_KNIFE, count: 1 },
        { id: ITEM.AMMO_762, count: 210 },
      ],
      armor: [ITEM.HELMET_2, ITEM.VEST_2, ITEM.PANTS_2, ITEM.BOOTS_1],
      botRole: "rifleman",
      mode: "conquest",
    },
    medic: {
      id: "medic",
      name: { en: "Medic", ru: "Медик" },
      role: {
        en: "Shotgun, medkits — revives the fallen",
        ru: "Дробовик, аптечки — поднимает раненых",
      },
      items: [
        { id: ITEM.SHOTGUN, count: 1 },
        { id: ITEM.MILITARY_MEDKIT, count: 3 },
        { id: ITEM.BANDAGE, count: 8 },
        { id: Jr, count: 1 },
        { id: ITEM.COMBAT_KNIFE, count: 1 },
        { id: ITEM.AMMO_SHELL, count: 48 },
        { id: ITEM.AMMO_9MM, count: 68 },
      ],
      armor: [ITEM.HELMET_1, ITEM.VEST_2, ITEM.PANTS_1, ITEM.BOOTS_1],
      botRole: "rifleman",
      mode: "conquest",
    },
    engineer: {
      id: "engineer",
      name: { en: "Engineer", ru: "Инженер" },
      role: {
        en: "RPG, anti-tank mines, an FPV drone, welder — kills and fixes armour",
        ru: "РПГ, противотанковые мины, FPV-дрон, сварка — жжёт и чинит технику",
      },
      items: [
        { id: ITEM.RPG, count: 1 },
        { id: Jr, count: 1 },
        { id: ITEM.WELDER, count: 1 },
        { id: BLOCK.MINE_AT, count: 3 },
        { id: ITEM.DRONE, count: 1 },
        { id: ITEM.BANDAGE, count: 2 },
        { id: ITEM.COMBAT_KNIFE, count: 1 },
        { id: ITEM.ROCKET, count: 6 },
        { id: ITEM.ROCKET_GUIDED, count: 6 },
        { id: ITEM.AMMO_9MM, count: 85 },
      ],
      armor: [ITEM.HELMET_1, ITEM.VEST_1, ITEM.PANTS_1, ITEM.BOOTS_1],
      botRole: "grenadier",
      mode: "conquest",
    },
    grenadier: {
      id: "grenadier",
      name: { en: "Grenadier", ru: "Гранатомётчик" },
      role: {
        en: "40 mm launcher — clears trenches and rooms",
        ru: "Гранатомёт 40 мм — выкуривает из окопов и домов",
      },
      items: [
        { id: ITEM.GRENADE_LAUNCHER, count: 1 },
        { id: Jr, count: 1 },
        { id: ITEM.GRENADE, count: 2 },
        { id: ITEM.BANDAGE, count: 3 },
        { id: ITEM.COMBAT_KNIFE, count: 1 },
        { id: ITEM.AMMO_40MM, count: 14 },
        { id: ITEM.AMMO_9MM, count: 68 },
      ],
      armor: [ITEM.HELMET_2, ITEM.VEST_2, ITEM.PANTS_1, ITEM.BOOTS_1],
      botRole: "grenadier",
      mode: "conquest",
    },
    recon: {
      id: "recon",
      name: { en: "Recon", ru: "Разведчик" },
      role: {
        en: "Scoped rifle, two FPV drones, mines for his back — strikes from range",
        ru: "Снайперская винтовка, два FPV-дрона, мины за спину — бьёт издалека",
      },
      items: [
        { id: Gx, count: 1 },
        { id: Jr, count: 1 },
        { id: ITEM.DRONE, count: 2 },
        { id: BLOCK.MINE_AP, count: 2 },
        { id: ITEM.BANDAGE, count: 2 },
        { id: ITEM.COMBAT_KNIFE, count: 1 },
        { id: ITEM.AMMO_338, count: 30 },
        { id: ITEM.AMMO_9MM, count: 68 },
      ],
      armor: [ITEM.HELMET_1, ITEM.VEST_1, ITEM.PANTS_1, ITEM.BOOTS_1],
      botRole: "sniper",
      mode: "conquest",
    },
    support: {
      id: "support",
      name: { en: "Support", ru: "Пулемётчик" },
      role: {
        en: "Machine gun, heavy armour, mines — holds the line",
        ru: "Пулемёт, тяжёлая броня, мины — держит линию",
      },
      items: [
        { id: ITEM.MINIGUN, count: 1 },
        { id: ITEM.GRENADE, count: 2 },
        { id: BLOCK.MINE_AP, count: 2 },
        { id: ITEM.BANDAGE, count: 3 },
        { id: ITEM.COMBAT_KNIFE, count: 1 },
        { id: ITEM.AMMO_762, count: 600 },
      ],
      armor: [ITEM.HELMET_3, ITEM.VEST_3, ITEM.PANTS_2, ITEM.BOOTS_2],
      botRole: "gunner",
      mode: "conquest",
    },
    rifleman: {
      id: "rifleman",
      name: { en: "Rifleman", ru: "Стрелок" },
      role: {
        en: "AK-47, Glock, grenades — the all-rounder",
        ru: "АК-47, Glock, гранаты — универсал",
      },
      items: [
        { id: Fx, count: 1 },
        { id: Jr, count: 1 },
        { id: ITEM.GRENADE, count: 2 },
        { id: ITEM.COMBAT_KNIFE, count: 1 },
        { id: ITEM.AMMO_762, count: 150 },
        { id: ITEM.AMMO_9MM, count: 51 },
      ],
      armor: [ITEM.HELMET_2, ITEM.VEST_2, ITEM.PANTS_1, ITEM.BOOTS_1],
      botRole: "rifleman",
      mode: "tdm",
    },
    marksman: {
      id: "marksman",
      name: { en: "Sniper", ru: "Снайпер" },
      role: {
        en: "AWP, Glock, grenade — one shot, one kill",
        ru: "AWP, Glock, граната — один выстрел, один труп",
      },
      items: [
        { id: Gx, count: 1 },
        { id: Jr, count: 1 },
        { id: ITEM.GRENADE, count: 1 },
        { id: ITEM.COMBAT_KNIFE, count: 1 },
        { id: ITEM.AMMO_338, count: 30 },
        { id: ITEM.AMMO_9MM, count: 51 },
      ],
      armor: [ITEM.HELMET_1, ITEM.VEST_1, ITEM.PANTS_1, ITEM.BOOTS_1],
      botRole: "sniper",
      mode: "tdm",
    },
    breacher: {
      id: "breacher",
      name: { en: "Breacher", ru: "Штурмовик" },
      role: {
        en: "Shotgun, Glock, grenades — owns the tunnels",
        ru: "Дробовик, Glock, гранаты — хозяин тоннелей",
      },
      items: [
        { id: ITEM.SHOTGUN, count: 1 },
        { id: Jr, count: 1 },
        { id: ITEM.GRENADE, count: 2 },
        { id: ITEM.COMBAT_KNIFE, count: 1 },
        { id: ITEM.AMMO_SHELL, count: 40 },
        { id: ITEM.AMMO_9MM, count: 51 },
      ],
      armor: [ITEM.HELMET_2, ITEM.VEST_3, ITEM.PANTS_2, ITEM.BOOTS_1],
      botRole: "shotgunner",
      mode: "tdm",
    },
    heavy: {
      id: "heavy",
      name: { en: "Heavy", ru: "Пулемётчик" },
      role: {
        en: "Minigun, Glock, grenade — heavy armour, a wall of lead",
        ru: "Миниган, Glock, граната — тяжёлая броня, стена свинца",
      },
      items: [
        { id: ITEM.MINIGUN, count: 1 },
        { id: Jr, count: 1 },
        { id: ITEM.GRENADE, count: 1 },
        { id: ITEM.COMBAT_KNIFE, count: 1 },
        { id: ITEM.AMMO_762, count: 400 },
        { id: ITEM.AMMO_9MM, count: 34 },
      ],
      armor: [ITEM.HELMET_3, ITEM.VEST_3, ITEM.PANTS_2, ITEM.BOOTS_2],
      botRole: "gunner",
      mode: "tdm",
    },
    demo: {
      id: "demo",
      name: { en: "Grenadier", ru: "Гранатомётчик" },
      role: {
        en: "40 mm launcher, Glock, grenades — flushes out corners",
        ru: "Гранатомёт 40 мм, Glock, гранаты — выкуривает из углов",
      },
      items: [
        { id: ITEM.GRENADE_LAUNCHER, count: 1 },
        { id: Jr, count: 1 },
        { id: ITEM.GRENADE, count: 3 },
        { id: ITEM.COMBAT_KNIFE, count: 1 },
        { id: ITEM.AMMO_40MM, count: 12 },
        { id: ITEM.AMMO_9MM, count: 51 },
      ],
      armor: [ITEM.HELMET_2, ITEM.VEST_2, ITEM.PANTS_1, ITEM.BOOTS_1],
      botRole: "grenadier",
      mode: "tdm",
    },
  },
  Wx = { battery: 40 },
  s5 = { hqClear: 30, markRange: 55 },
  Vx = (n) => (n === BLOCK.MINE_AT ? "at" : n === BLOCK.MINE_AP ? "ap" : null),
  gamemodeKeys = (n) => Object.keys(GAMEMODES).filter((e) => GAMEMODES[e].mode === n);
gamemodeKeys("conquest");
gamemodeKeys("tdm");
const o5 = ["A", "B", "C", "D", "E"],
  $z = { shield: 3 },
  qz = new Set([ITEM.AMMO_762, ITEM.AMMO_9MM, ITEM.AMMO_338, ITEM.AMMO_SHELL]),
  KILLSTREAK_TITLES = {
    3: { en: "KILLING SPREE", ru: "СЕРИЯ УБИЙСТВ" },
    5: { en: "RAMPAGE", ru: "НЕУДЕРЖИМЫЙ" },
    7: { en: "DOMINATING", ru: "ДОМИНИРУЕТ" },
    10: { en: "UNSTOPPABLE", ru: "НЕОСТАНОВИМ" },
    15: { en: "GODLIKE", ru: "БОГ ВОЙНЫ" },
  },
  r5 = { hold: 1.5, hqCooldown: 10, flagCooldown: 45 },
  Gi = {
    sunShafts: -4,
    celestial: -3,
    skyClouds: -2,
    water: 2,
    cloud: 3,
    tracer: 4,
    particle: 5,
    vent: 6,
    editBox: 7,
    editLines: 8,
    marker: 800,
    label: 900,
    popup: 950,
    viewmodel: 990,
    reticle: 995,
    firstPerson: 1e3,
  },
  C2 = 28;
function oh(n, e = Gi.label) {
  return ((n.renderOrder = e), n.layers.set(C2), n);
}
let Tp = "";
const ug = new Set(),
  fg = new Map();
let pg = [];
function Kz(n, e) {
  ((Tp = n), ug.clear());
  for (const t of e) ug.add(t.toLowerCase());
  xy();
}
function Po(n) {
  return fg.get(n.toLowerCase());
}
function Xa(n) {
  var e, t;
  return (
    !!Po(Tp) &&
    ((e = Po(n)) == null ? void 0 : e.id) ===
      ((t = Po(Tp)) == null ? void 0 : t.id)
  );
}
function Yz(n) {
  return ug.has(n.toLowerCase());
}
function jz(n) {
  fg.clear();
  for (const e of n.roster)
    for (const t of e.members) fg.set(t.username.toLowerCase(), e);
  ((pg = n.waypoints), xy());
}
function Xz() {
  (ug.clear(), fg.clear(), (pg = []), (Tp = ""), xy());
}
let gamemode = "global";
try {
  localStorage.getItem("vr-chat-channel") === "squad" && (gamemode = "squad");
} catch {}
function e0() {
  return !!Po(Tp);
}
let Gl = 0;
function Zz(n) {
  n !== Gl && ((Gl = n), xy());
}
function Qz() {
  return Gl > 0 || e0();
}
function xy() {
  (Gl > 0 && gamemode === "squad"
    ? k2("team")
    : ((!Gl && gamemode === "team") || (!Gl && !e0() && gamemode === "squad")) &&
      k2("global"),
    window.dispatchEvent(new Event("squad-state-changed")));
}
function k2(n) {
  gamemode = n;
  try {
    n !== "team" && localStorage.setItem("vr-chat-channel", gamemode);
  } catch {}
  window.dispatchEvent(new Event("chat-channel-changed"));
}
function l5() {
  k2(gamemode !== "global" ? "global" : Gl > 0 ? "team" : e0() ? "squad" : "global");
}
