// index-BeUlFSPp 121 — group
// Lines 70626-70968 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function xn(s = 20, e = "") {
  const t = `gc${zJ++}`;
  return `<svg class="gold-coin ${e}" width="${s}" height="${s}" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
  <defs>
    <radialGradient id="${t}f" cx="38%" cy="30%" r="75%"><stop offset="0" stop-color="#fff6c8"/><stop offset=".35" stop-color="#ffd453"/><stop offset=".75" stop-color="#e09a1c"/><stop offset="1" stop-color="#a5630e"/></radialGradient>
    <linearGradient id="${t}r" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe9a0"/><stop offset=".5" stop-color="#c47a12"/><stop offset="1" stop-color="#7a4708"/></linearGradient>
    <linearGradient id="${t}s" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".85"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <clipPath id="${t}c"><circle cx="16" cy="16" r="14"/></clipPath>
  </defs>
  <circle cx="16" cy="17" r="14.5" fill="#5a3306" opacity=".55"/>
  <circle cx="16" cy="16" r="14.5" fill="url(#${t}r)"/>
  <circle cx="16" cy="16" r="11.6" fill="url(#${t}f)" stroke="#9a5b0c" stroke-width=".9"/>
  <circle cx="16" cy="16" r="9.6" fill="none" stroke="#fff3bf" stroke-opacity=".55" stroke-width=".7" stroke-dasharray="1.2 1.4"/>
  <path d="M10.2 10.4h3.1l2.7 7.4 2.7-7.4h3.1l-4.4 11.2h-2.8z" fill="#8a4f08"/>
  <path d="M10.2 9.8h3.1l2.7 7.4 2.7-7.4h3.1l-4.4 11.2h-2.8z" fill="#fff0b0"/>
  <g clip-path="url(#${t}c)"><rect class="gold-coin-shine" x="-14" y="-4" width="9" height="40" fill="url(#${t}s)" transform="rotate(22 16 16)"/></g>
</svg>`;
}
const Nc = typeof window < "u" ? (window.VoxelRushNative ?? null) : null,
  Pn = !!Nc;
Nc?.platform;
Nc && `${Nc.version}${Nc.build}`;
async function tp(s, e = {}) {
  if (!Nc) throw new Error("not in the app");
  try {
    return await Nc.call(s, e);
  } catch (t) {
    throw new Error(t instanceof Error ? t.message : String(t));
  }
}
function z7(s) {
  Nc?.haptic(s);
}
if (Nc && typeof document < "u") {
  const s = () => void tp("ready").catch(() => {});
  document.readyState === "loading"
    ? document.addEventListener("DOMContentLoaded", s, { once: !0 })
    : s();
}
const Ly = 1e3,
  x4 = 2e4,
  K8 = 3,
  bT = ["likes", "replies", "retweets", "quotes", "bookmarks"],
  _4 = { likes: 5, replies: 10, retweets: 25, quotes: 30, bookmarks: 10 },
  wT = {
    likes: ["Likes", "Лайки"],
    replies: ["Replies", "Комментарии"],
    retweets: ["Reposts", "Репосты"],
    quotes: ["Quotes", "Цитаты"],
    bookmarks: ["Bookmarks", "Закладки"],
  };
function FJ(s) {
  const e = String(s ?? "").trim();
  if (/^\d{5,25}$/.test(e)) return e;
  let t;
  try {
    t = new URL(/^https?:\/\//i.test(e) ? e : "https://" + e);
  } catch {
    return null;
  }
  const i = t.hostname.toLowerCase().replace(/^(www|mobile|m)\./, "");
  if (
    ![
      "x.com",
      "twitter.com",
      "fxtwitter.com",
      "fixupx.com",
      "vxtwitter.com",
    ].includes(i)
  )
    return null;
  const n =
    /^\/(?:[A-Za-z0-9_]{1,15}|i(?:\/web)?)\/status(?:es)?\/(\d{5,25})(?:\/|$)/.exec(
      t.pathname,
    );
  return n ? n[1] : null;
}
const UJ = [
    { id: "invite", en: "Invite", ru: "Приглашение" },
    { id: "squad", en: "Squad", ru: "Отряд" },
    { id: "moment", en: "Battle story", ru: "Момент из боя" },
    { id: "build", en: "Base", ru: "База" },
    { id: "loot", en: "Skins", ru: "Скины" },
    { id: "challenge", en: "Challenge", ru: "Вызов" },
  ],
  _m = [
    {
      id: "invite",
      group: "invite",
      en: "found a free browser game where you can drive a tank, fly a heli and build a base in the same match. no download. come play with me",
      ru: "нашёл бесплатную браузерную игру, где в одном матче можно и на танке покататься, и на вертолёте полетать, и базу построить. ничего качать не надо, залетай",
    },
    {
      id: "invite-post",
      group: "invite",
      en: "Voxel Rush is free and runs right in this post. tanks, drones, jets. I'm online, jump in 👇",
      ru: "Voxel Rush бесплатная и открывается прямо в этом посте. танки, дроны, самолёты. я онлайн, заходи 👇",
    },
    {
      id: "invite-ten",
      group: "invite",
      en: "got 10 minutes? try Voxel Rush. it opens in the browser, nothing to install, and the battles get wild fast",
      ru: "есть 10 минут? попробуй Voxel Rush. запускается в браузере, ставить ничего не нужно, а бои разгоняются очень быстро",
    },
    {
      id: "squad",
      group: "squad",
      en: "need 3 more for my squad in Voxel Rush tonight. one pilot, one sniper and one person who doesn't mind getting run over by a tank",
      ru: "собираю отряд в Voxel Rush на вечер. нужен пилот, снайпер и тот, кто не против, что его переедет танк",
    },
    {
      id: "squad-point",
      group: "squad",
      en: "who wants to hold a capture point with me in Voxel Rush? bring friends, it's free and opens in the browser",
      ru: "кто со мной держать точку в Voxel Rush? зови друзей, игра бесплатная и открывается в браузере",
    },
    {
      id: "squad-vibes",
      group: "squad",
      en: "looking for people to play Voxel Rush with. no skill needed, just good vibes and a willingness to ride on top of an APC",
      ru: "ищу с кем погонять в Voxel Rush. скилл не важен, главное настрой и готовность кататься на крыше БТР",
    },
    {
      id: "moment-rpg",
      group: "moment",
      en: "just took down a helicopter with an RPG from a rooftop in Voxel Rush and I'm still shaking lol",
      ru: "только что сбил вертолёт из РПГ с крыши в Voxel Rush, руки до сих пор трясутся",
    },
    {
      id: "moment-chaos",
      group: "moment",
      en: "50 players, tanks on the bridge, FPV drones overhead and I'm hiding in a bush with a sniper rifle. Voxel Rush is chaos in the best way",
      ru: "50 человек, танки на мосту, FPV-дроны сверху, а я сижу в кустах со снайперкой. Voxel Rush это хаос в лучшем смысле",
    },
    {
      id: "moment-tank",
      group: "moment",
      en: "won a tank duel in Voxel Rush by parking behind a house and waiting. patience is a weapon",
      ru: "выиграл танковую дуэль в Voxel Rush, просто спрятавшись за домом и подождав. терпение тоже оружие",
    },
    {
      id: "build",
      group: "build",
      en: "spent an hour building a fortress in Voxel Rush. now someone come try to raid it, I dare you",
      ru: "час строил крепость в Voxel Rush. кто рискнёт её зарейдить?",
    },
    {
      id: "build-wall",
      group: "build",
      en: "built a whole base block by block and then some guy drove a tank through the wall in 4 seconds. Voxel Rush keeps you humble",
      ru: "строил базу блок за блоком, а потом один тип за 4 секунды проехал сквозь стену на танке. Voxel Rush учит смирению",
    },
    {
      id: "build-moat",
      group: "build",
      en: "my Voxel Rush base has two walls, a moat and zero chill. come visit",
      ru: "у моей базы в Voxel Rush две стены, ров и ни капли пощады. заходи в гости",
    },
    {
      id: "loot-case",
      group: "loot",
      en: "opened a case in Voxel Rush and got a skin I didn't even know existed. now I need all of them",
      ru: "открыл кейс в Voxel Rush и выпал скин, о котором я даже не знал. теперь хочу все",
    },
    {
      id: "loot-ak",
      group: "loot",
      en: "my AK in Voxel Rush looks better than my actual room. the skins in this game are no joke",
      ru: "мой АК в Voxel Rush выглядит лучше, чем моя комната. скины тут реально красивые",
    },
    {
      id: "loot-rate",
      group: "loot",
      en: "rate my loadout. Voxel Rush is free in the browser and the cases drop way too good skins",
      ru: "оцените мой лоадаут. Voxel Rush бесплатная в браузере, а из кейсов падают слишком красивые скины",
    },
    {
      id: "challenge-five",
      group: "challenge",
      en: "bet you can't last 5 minutes in a Voxel Rush frontline battle. free, no install, link below",
      ru: "спорим, не продержишься 5 минут во фронтовом бою Voxel Rush? бесплатно, без установки, ссылка ниже",
    },
    {
      id: "challenge-duel",
      group: "challenge",
      en: "1v1 me in Voxel Rush. loser posts a screenshot of the scoreboard",
      ru: "давай 1 на 1 в Voxel Rush. кто проиграет, тот выкладывает скрин таблицы",
    },
    {
      id: "challenge-streak",
      group: "challenge",
      en: "what's your best kill streak in Voxel Rush team deathmatch? mine is embarrassing. it's free in the browser, go try",
      ru: "какая у тебя лучшая серия в командном бою Voxel Rush? у меня стыдно сказать. игра бесплатная в браузере, попробуй",
    },
  ],
  lw = 280,
  GJ = (s) => [...s.trim()].length + 1 + 23;
function WJ(s) {
  return bT
    .filter((e) => s[e] > 0)
    .map((e) => ({ metric: e, count: s[e], rate: _4[e], gold: s[e] * _4[e] }));
}
const Y8 = {
    code: ["No personal link in the post", "В посте нет твоей личной ссылки"],
    missing: ["Post not found or deleted", "Пост не найден или удалён"],
    private: ["The post is private", "Пост скрыт"],
    timeout: ["X did not answer for too long", "X слишком долго не отвечал"],
  },
  $J = () => wi(),
  Ht = (s, e) => I(s, e),
  yo = (s) => Math.max(0, Math.floor(s)).toLocaleString(ao()),
  Gh = (s) =>
    s.replace(
      /[&<>"']/g,
      (e) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[e],
    ),
  MT = {
    likes:
      '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    replies: '<path d="M4 5h16v11H9l-5 4z"/>',
    retweets: '<path d="M7 7h10v6M17 17H7v-6M4 10l3-3 3 3M20 14l-3 3-3-3"/>',
    quotes:
      '<path d="M6 17c-1.5-1-2-2.6-2-4.5C4 9 6 7 9 6M15 17c-1.5-1-2-2.6-2-4.5C13 9 15 7 18 6"/>',
    bookmarks: '<path d="M6 3h12v18l-6-4-6 4z"/>',
  },
  qo = (s, e = "") =>
    `<svg class="sr-ico ${e}" viewBox="0 0 24 24" aria-hidden="true">${s}</svg>`,
  H1 =
    '<svg class="sr-x" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z"/></svg>',
  Ca = {
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    check: '<path d="m5 12 5 5 9-10"/>',
    shuffle:
      '<path d="M4 7h3c5 0 5 10 10 10h3M4 17h3c2 0 3-1.5 4-3.5M20 7h-3c-2 0-3 1.5-4 3.5M17 4l3 3-3 3M17 14l3 3-3 3"/>',
    refresh: '<path d="M20 8a8 8 0 1 0 .2 7M20 3v5h-5"/>',
    link: '<path d="M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1"/>',
    open: '<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>',
    clock: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
  };
let Di = null,
  is = null;
const R4 = (s, e) => {
  const t = _m.filter((i) => (!s || i.group === s) && i.id !== e);
  return (t[Math.floor(Math.random() * t.length)] ?? _m[0]).id;
};
let vu = R4(),
  ed = "",
  Op = !1,
  xl = null,
  k4 = 0,
  C4 = 0,
  cw = !1;
const F7 = "vr-social-posts",
  U7 = () => {
    try {
      is?.posts.length && localStorage.setItem(F7, "1");
    } catch {}
  };
let G7 = null;
function W7(s, e = "", t = "") {
  const i = document.createElement(s);
  return (e && (i.className = e), t && (i.innerHTML = t), i);
}
function X5(s) {
  !Number.isFinite(s) ||
    Lt.gold === s ||
    ((Lt.gold = s), window.dispatchEvent(new Event("cosmetics-changed")));
}
function br(s, e = "info", t = "claim") {
  Di?.querySelectorAll(".sr-status").forEach((i) => {
    const n = i.dataset.for === t;
    ((i.textContent = n ? s : ""), (i.dataset.kind = e));
  });
}
const ST = (s) =>
    s instanceof Error &&
    !["TimeoutError", "AbortError", "TypeError"].includes(s.name)
      ? s.message
      : Ht(
          "X is not responding right now. Please try again later",
          "X сейчас не отвечает. Попробуйте позже",
        ),
  VJ = (s) => {
    const e = _m.find((t) => t.id === s) ?? _m[0];
    return I(e.en, e.ru);
  };
function $7() {
  return `https://x.com/intent/post?text=${encodeURIComponent(ed.trim())}&url=${encodeURIComponent(is.link)}`;
}
function L4(s) {
  return s ? Math.max(0, Date.parse(s) - Date.now()) : 0;
}
function Sg(s) {
  const e = Math.ceil(s / 1e3),
    t = Math.floor(e / 3600),
    i = Math.floor((e % 3600) / 60),
    n = e % 60;
  return t
    ? `${t}:${String(i).padStart(2, "0")}:${String(n).padStart(2, "0")}`
    : `${i}:${String(n).padStart(2, "0")}`;
}
function Eg(s) {
  if (!s) return Ht("not checked yet", "ещё не проверялся");
  const e = Math.round((Date.now() - Date.parse(s)) / 1e3),
    t = new Intl.RelativeTimeFormat($J() ? "ru" : "en", { numeric: "auto" });
  return e < 60
    ? Ht("just now", "только что")
    : e < 3600
      ? t.format(-Math.round(e / 60), "minute")
      : e < 86400
        ? t.format(-Math.round(e / 3600), "hour")
        : t.format(-Math.round(e / 86400), "day");
}
async function Z5() {
  if (Pn) return;
  (Di || qJ(),
    (G7 = document.activeElement),
    Di.open || Di.showModal(),
    qc(),
    br(Ht("Loading…", "Загрузка…")));
  let s = "";
  try {
    (qe || (await If()), (is = await Vi("/me/social")), X5(is.gold), U7());
  } catch (e) {
    s = ST(e);
  }
  (qc(),
    s && br(s, "error"),
    clearInterval(k4),
    (k4 = window.setInterval(Rm, 1e3)),
    is?.unseen && (await V7()),
    Q5());
}
let hw = !1;
