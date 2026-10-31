// index-BeUlFSPp 32 — minxp
// Lines 35545-35659 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const e_ = (s) => Math.round(lV(s) * rV),
  pa = [
    { name: "Рядовой", nameEn: "Private", minXp: 0, tier: "soldier" },
    { name: "Ефрейтор", nameEn: "Lance Corporal", minXp: 3e3, tier: "soldier" },
    {
      name: "Младший сержант",
      nameEn: "Junior Sergeant",
      minXp: 12e3,
      tier: "sergeant",
    },
    { name: "Сержант", nameEn: "Sergeant", minXp: 3e4, tier: "sergeant" },
    {
      name: "Старший сержант",
      nameEn: "Senior Sergeant",
      minXp: 6e4,
      tier: "sergeant",
    },
    {
      name: "Старшина",
      nameEn: "Sergeant Major",
      minXp: 105e3,
      tier: "sergeant",
    },
    {
      name: "Прапорщик",
      nameEn: "Warrant Officer",
      minXp: 17e4,
      tier: "warrant",
    },
    {
      name: "Старший прапорщик",
      nameEn: "Senior Warrant Officer",
      minXp: 26e4,
      tier: "warrant",
    },
    {
      name: "Младший лейтенант",
      nameEn: "Junior Lieutenant",
      minXp: 38e4,
      tier: "junior",
    },
    { name: "Лейтенант", nameEn: "Lieutenant", minXp: 54e4, tier: "junior" },
    {
      name: "Старший лейтенант",
      nameEn: "Senior Lieutenant",
      minXp: 75e4,
      tier: "junior",
    },
    { name: "Капитан", nameEn: "Captain", minXp: 102e4, tier: "junior" },
    { name: "Майор", nameEn: "Major", minXp: 136e4, tier: "senior" },
    {
      name: "Подполковник",
      nameEn: "Lieutenant Colonel",
      minXp: 178e4,
      tier: "senior",
    },
    { name: "Полковник", nameEn: "Colonel", minXp: 23e5, tier: "senior" },
    {
      name: "Генерал-майор",
      nameEn: "Major General",
      minXp: 295e4,
      tier: "general",
    },
    {
      name: "Генерал-лейтенант",
      nameEn: "Lieutenant General",
      minXp: 375e4,
      tier: "general",
    },
    {
      name: "Генерал-полковник",
      nameEn: "Colonel General",
      minXp: 475e4,
      tier: "general",
    },
    {
      name: "Генерал армии",
      nameEn: "General of the Army",
      minXp: 61e5,
      tier: "general",
    },
    { name: "Маршал", nameEn: "Marshal", minXp: 84e5, tier: "marshal" },
  ],
  hm = pa.length - 1;
function Rf(s) {
  let e = 0;
  for (let t = 1; t < pa.length && !(s < pa[t].minXp); t++) e = t;
  return e;
}
function zS(s) {
  return pa[Rf(s)];
}
function dm(s) {
  const e = Math.max(0, Math.floor(s || 0)),
    t = Rf(e),
    i = pa[t],
    n = pa[t + 1],
    o = i.minXp,
    a = n?.minXp ?? i.minXp;
  return {
    index: t,
    rank: i,
    next: n,
    from: o,
    to: a,
    fraction: n ? Math.max(0, Math.min(1, (e - o) / (a - o))) : 1,
  };
}
function Gu(s, e, t = !1) {
  const i = Math.max(0, Math.min(hm, s)),
    n = Math.max(0, Math.min(hm, e)),
    o = 1 + i / 10,
    a = Math.max(0.6, Math.min(1.5, 1 + (i - n) * 0.04));
  return Math.max(1, Math.round(aV * o * a * (t ? 1.2 : 1)));
}
