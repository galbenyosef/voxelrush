// index-BeUlFSPp 130 — stars
// Lines 75207-75555 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Ree(s, e, t, i) {
  const n = s % 10,
    o = s % 100;
  return n === 1 && o !== 11
    ? e
    : n >= 2 && n <= 4 && (o < 12 || o > 14)
      ? t
      : i;
}
function kee(s, e = "en") {
  const t = Math.max(1, Math.ceil(s / 1e3)),
    i = Math.floor(t / 60),
    n = t % 60;
  return e === "ru"
    ? `Вы можете писать сообщения через ${[i ? `${i} мин` : "", n ? `${n} ${Ree(n, "секунду", "секунды", "секунд")}` : ""].filter(Boolean).join(" ")}.`
    : `You can send messages again in ${[i ? `${i} min` : "", n ? `${n} ${n === 1 ? "second" : "seconds"}` : ""].filter(Boolean).join(" ")}.`;
}
const Cee = [
    "com",
    "net",
    "org",
    "info",
    "biz",
    "xyz",
    "app",
    "dev",
    "io",
    "tv",
    "cc",
    "ly",
    "co",
    "ai",
    "gl",
    "li",
    "sh",
    "gd",
    "online",
    "site",
    "website",
    "tech",
    "icu",
    "buzz",
    "vip",
    "casino",
    "shop",
    "store",
    "pw",
    "tk",
    "ml",
    "ga",
    "cf",
    "gq",
    "ws",
    "la",
    "ru",
    "su",
    "рф",
    "ua",
    "kz",
    "uz",
    "kg",
    "tj",
    "az",
    "md",
    "ge",
    "lv",
    "lt",
    "ee",
    "pl",
    "cz",
    "sk",
    "de",
    "fr",
    "es",
    "nl",
    "uk",
    "eu",
    "cn",
    "jp",
    "kr",
    "tr",
    "il",
    "ca",
    "au",
    "nz",
    "br",
    "ar",
    "mx",
    "ch",
    "se",
    "fi",
    "dk",
    "ro",
    "hu",
    "bg",
    "rs",
    "hr",
  ],
  Lee = ["t.me", "wa.me", "vk.me", "youtu.be", "fb.me", "discord.gg", "dsc.gg"],
  Iee = "[\\p{L}\\p{N}](?:[\\p{L}\\p{N}-]*[\\p{L}\\p{N}])?",
  Pee = [
    /(?<![\p{L}\p{N}])(?:https?|ftp|www)(?![\p{L}\p{N}])/iu,
    new RegExp(
      `${Iee}(?:\\.|\\s+\\.\\s*|\\s+(?:dot|точка)\\s+)(?:${Cee.join("|")})(?![\\p{L}\\p{N}])`,
      "iu",
    ),
    new RegExp(
      `(?<![\\p{L}\\p{N}])(?:${Lee.map((s) => s.replace(".", "\\s*\\.\\s*")).join("|")})(?![\\p{L}\\p{N}])`,
      "iu",
    ),
    /(?<![\p{N}.])\d{1,3}(?:\.\d{1,3}){3}(?![\p{N}])/u,
  ];
function Oee(s) {
  return Pee.some((e) => e.test(s));
}
function Nee(s = "en") {
  return s === "ru"
    ? "Ссылки запрещено отправлять в чат."
    : "Links are not allowed in chat.";
}
function q4(s, e = "en") {
  return !s.trimStart().startsWith("/") && Oee(s) ? Nee(e) : null;
}
const kT = () => ({ xp: 0, skills: { xp: {}, stats: {} } });
function Dee(s, e, t = "max") {
  const i = (o, a) => Math.min(1e10, t === "max" ? Math.max(o, a) : o + a),
    n = kT();
  n.xp = Math.min(4294967295, i(s.xp, e.xp));
  for (const o of ["xp", "stats"])
    for (const a of new Set([
      ...Object.keys(s.skills[o]),
      ...Object.keys(e.skills[o]),
    ]))
      n.skills[o][a] = i(s.skills[o][a] ?? 0, e.skills[o][a] ?? 0);
  return n;
}
function Tg([s, e, t]) {
  let i = "";
  for (let n = 0; n < 10; n++) {
    const o = -Math.PI / 2 + (n * Math.PI) / 5,
      a = n % 2 ? t * 0.42 : t;
    i += `${n ? "L" : "M"}${(s + Math.cos(o) * a).toFixed(2)} ${(e + Math.sin(o) * a).toFixed(2)}`;
  }
  return i + "Z";
}
const zo = 5.2,
  er = 7.4,
  gk = 13,
  Hee = [
    { gold: !1, piping: !1, stars: [] },
    { gold: !1, piping: !1, bars: { thin: 1 }, stars: [] },
    { gold: !1, piping: !1, bars: { thin: 2 }, stars: [] },
    { gold: !1, piping: !1, bars: { thin: 3 }, stars: [] },
    { gold: !1, piping: !1, bars: { wide: !0 }, stars: [] },
    { gold: !1, piping: !1, long: !0, stars: [] },
    {
      gold: !1,
      piping: !0,
      stars: [
        [59, 20, zo + 0.4],
        [44, 20, zo + 0.4],
      ],
    },
    {
      gold: !1,
      piping: !0,
      stars: [
        [61, 20, zo],
        [48, 20, zo],
        [35, 20, zo],
      ],
    },
    { gold: !1, piping: !0, prosvet: 1, stars: [[52, 20, zo + 0.4]] },
    {
      gold: !1,
      piping: !0,
      prosvet: 1,
      stars: [
        [59, 11.4, zo - 0.3],
        [59, 28.6, zo - 0.3],
      ],
    },
    {
      gold: !1,
      piping: !0,
      prosvet: 1,
      stars: [
        [59, 11.4, zo - 0.3],
        [59, 28.6, zo - 0.3],
        [44, 20, zo],
      ],
    },
    {
      gold: !1,
      piping: !0,
      prosvet: 1,
      stars: [
        [59, 11.4, zo - 0.3],
        [59, 28.6, zo - 0.3],
        [45, 20, zo],
        [32, 20, zo],
      ],
    },
    { gold: !1, piping: !0, prosvet: 2, stars: [[48, 20, er + 1.4]] },
    {
      gold: !1,
      piping: !0,
      prosvet: 2,
      stars: [
        [54, 12.5, er],
        [54, 27.5, er],
      ],
    },
    {
      gold: !1,
      piping: !0,
      prosvet: 2,
      stars: [
        [58, 12.5, er - 0.4],
        [58, 27.5, er - 0.4],
        [37, 20, er - 0.4],
      ],
    },
    { gold: !0, piping: !0, stars: [[46, 20, er + 2]] },
    {
      gold: !0,
      piping: !0,
      stars: [
        [58, 20, er + 1.2],
        [37, 20, er + 1.2],
      ],
    },
    {
      gold: !0,
      piping: !0,
      stars: [
        [62, 20, er + 0.2],
        [45, 20, er + 0.2],
        [28, 20, er + 0.2],
      ],
    },
    { gold: !0, piping: !0, stars: [[45, 20, gk]] },
    { gold: !0, piping: !0, stars: [[45, 20, gk - 2.4]], wreath: !0 },
  ],
  xg = "M14 2.5 H71 Q74 2.5 74 5.5 V34.5 Q74 37.5 71 37.5 H14 L3 20 Z",
  Bee = 76;
function zee(s) {
  const e = Hee[Math.max(0, Math.min(hm, s))],
    t = `ri${s}`,
    i = [];
  if (
    (i.push(`<defs>
<linearGradient id="${t}b" x1="0" y1="0" x2="0" y2="1">${e.gold ? '<stop offset="0" stop-color="#fff0b0"/><stop offset=".45" stop-color="#e7b54a"/><stop offset="1" stop-color="#a8701f"/>' : '<stop offset="0" stop-color="#7a8a52"/><stop offset=".55" stop-color="#55633a"/><stop offset="1" stop-color="#3a4527"/>'}</linearGradient>
<linearGradient id="${t}s" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff6c4"/><stop offset=".5" stop-color="#f2c447"/><stop offset="1" stop-color="#b9821e"/></linearGradient>
<linearGradient id="${t}g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9a0"/><stop offset="1" stop-color="#c58d24"/></linearGradient>
<clipPath id="${t}c"><path d="${xg}"/></clipPath>
</defs>`),
    i.push(`<path d="${xg}" fill="url(#${t}b)"/>`),
    i.push(`<g clip-path="url(#${t}c)">`),
    e.gold)
  ) {
    let n = "";
    for (let o = 15; o < 76; o += 6)
      n += `M${o} 4 l3 4 l3 -4 M${o} 36 l3 -4 l3 4 `;
    i.push(
      `<path d="${n}" stroke="#9b6a1c" stroke-width="1.1" fill="none" opacity=".55"/>`,
    );
    for (let o = 9; o <= 31; o += 4.4)
      i.push(
        `<path d="M15 ${o.toFixed(1)} H74" stroke="#fff4c8" stroke-width=".6" opacity=".35"/>`,
      );
  } else
    for (let n = 6; n < 36; n += 3)
      i.push(
        `<path d="M6 ${n} H74" stroke="#000" stroke-width=".5" opacity=".08"/>`,
      );
  (e.prosvet === 1 &&
    i.push('<rect x="15" y="18.3" width="60" height="3.4" fill="#b8231f"/>'),
    e.prosvet === 2 &&
      i.push(
        '<rect x="15" y="10.8" width="60" height="3.4" fill="#b8231f"/><rect x="15" y="25.8" width="60" height="3.4" fill="#b8231f"/>',
      ),
    e.long &&
      i.push(
        `<rect x="15" y="14.5" width="60" height="11" fill="url(#${t}g)" stroke="#7a5512" stroke-width=".6"/>`,
      ),
    e.bars?.wide &&
      i.push(
        `<rect x="57" y="2" width="11" height="36" fill="url(#${t}g)" stroke="#7a5512" stroke-width=".6"/>`,
      ));
  for (let n = 0; n < (e.bars?.thin ?? 0); n++)
    i.push(
      `<rect x="${(64 - n * 6.5).toFixed(1)}" y="2" width="3.8" height="36" fill="url(#${t}g)" stroke="#7a5512" stroke-width=".5"/>`,
    );
  if (
    (i.push("</g>"),
    e.piping &&
      i.push(
        `<path d="${xg}" fill="none" stroke="#c8221d" stroke-width="2.2"/>`,
      ),
    i.push(
      `<path d="${xg}" fill="none" stroke="${e.gold ? "#6b4610" : "#20270f"}" stroke-width="1" opacity=".9"/>`,
    ),
    e.wreath)
  ) {
    const [n, o] = e.stars[0];
    let a = "";
    for (let r = 0; r < 7; r++) {
      const l = ((28 + r * 20) * Math.PI) / 180;
      for (const c of [-1, 1]) {
        const h = n + c * 15 * Math.sin(l),
          d = o + 15 * Math.cos(l) * 0.92,
          u = c * (90 - (l * 180) / Math.PI) + 90;
        a += `<ellipse cx="${h.toFixed(2)}" cy="${d.toFixed(2)}" rx="3" ry="1.35" transform="rotate(${u.toFixed(1)} ${h.toFixed(2)} ${d.toFixed(2)})" fill="#2f6a33" stroke="#173a19" stroke-width=".45"/>`;
      }
    }
    i.push(a);
  }
  i.push(
    `<circle cx="10.5" cy="20" r="4.4" fill="url(#${t}s)" stroke="#6b4610" stroke-width=".8"/><path d="${Tg([10.5, 20, 2.5])}" fill="#8a5c14" opacity=".75"/>`,
  );
  for (const n of e.stars)
    (i.push(
      `<path d="${Tg([n[0] + 0.5, n[1] + 0.7, n[2]])}" fill="#000" opacity=".35"/>`,
    ),
      i.push(
        `<path d="${Tg(n)}" fill="url(#${t}s)" stroke="#6b4610" stroke-width="${n[2] > 8 ? 0.9 : 0.6}" stroke-linejoin="round"/>`,
      ),
      n[2] > 5 &&
        i.push(
          `<path d="${Tg([n[0], n[1], n[2] * 0.48])}" fill="#fff8d6" opacity=".45"/>`,
        ));
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Bee} 40">${i.join("")}</svg>`;
}
const yk = new Map();
function Nd(s) {
  const e = Math.max(0, Math.min(hm, Math.floor(s) || 0));
  let t = yk.get(e);
  return (
    t ||
      ((t = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(zee(e))),
      yk.set(e, t)),
    t
  );
}
function Lm(s) {
  const e = pa[Math.max(0, Math.min(hm, s))];
  return I(e.nameEn, e.name);
}
