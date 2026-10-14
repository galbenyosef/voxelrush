// assets__index-Dp6GxvJu 100 — math
// Lines 63073-63362 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function bs(n = 20, e = "") {
  const t = `gc${KK++}`;
  return `<svg class="gold-coin ${e}" width="${n}" height="${n}" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
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
const U2 = 1e3,
  Kw = 2e4,
  E6 = 3,
  E4 = ["likes", "replies", "retweets", "quotes", "bookmarks"],
  Yw = { likes: 5, replies: 10, retweets: 25, quotes: 30, bookmarks: 10 },
  x4 = {
    likes: ["Likes", "Лайки"],
    replies: ["Replies", "Комментарии"],
    retweets: ["Reposts", "Репосты"],
    quotes: ["Quotes", "Цитаты"],
    bookmarks: ["Bookmarks", "Закладки"],
  };
function YK(n) {
  const e = String(n ?? "").trim();
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
  const s =
    /^\/(?:[A-Za-z0-9_]{1,15}|i(?:\/web)?)\/status(?:es)?\/(\d{5,25})(?:\/|$)/.exec(
      t.pathname,
    );
  return s ? s[1] : null;
}
const Bg = [
    {
      id: "invite",
      en: "Playing Voxel Rush — a free multiplayer voxel war sandbox right in the browser. Tanks, jets, raids and base building. Join me 👇",
      ru: "Играю в Voxel Rush — бесплатная мультиплеерная воксельная война прямо в браузере. Танки, самолёты, рейды и базы. Залетай ко мне 👇",
    },
    {
      id: "squad",
      en: "Looking for a squad in Voxel Rush 🪖 Drive tanks, fly helicopters and hold the base with me. No download, play in this post 👇",
      ru: "Собираю отряд в Voxel Rush 🪖 Танки, вертолёты, оборона базы — без скачивания, можно играть прямо в посте 👇",
    },
    {
      id: "build",
      en: "Built a whole fortress block by block in Voxel Rush 🧱💥 Now come and try to take it. Free in your browser 👇",
      ru: "Построил целую крепость по блокам в Voxel Rush 🧱💥 Попробуй её захватить. Бесплатно в браузере 👇",
    },
  ],
  q5 = 280,
  jK = (n) => [...n.trim()].length + 1 + 23;
function XK(n) {
  return E4.filter((e) => n[e] > 0).map((e) => ({
    metric: e,
    count: n[e],
    rate: Yw[e],
    gold: n[e] * Yw[e],
  }));
}
const x6 = {
    code: ["No personal link in the post", "В посте нет твоей личной ссылки"],
    missing: ["Post not found or deleted", "Пост не найден или удалён"],
    private: ["The post is private", "Пост скрыт"],
    timeout: ["X did not answer for too long", "X слишком долго не отвечал"],
  },
  Dy = () => document.documentElement.lang === "ru",
  Ht = (n, e) => (Dy() ? e : n),
  Xs = (n) =>
    Math.max(0, Math.floor(n)).toLocaleString(Dy() ? "ru-RU" : "en-US"),
  Yh = (n) =>
    n.replace(
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
  T4 = {
    likes:
      '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    replies: '<path d="M4 5h16v11H9l-5 4z"/>',
    retweets: '<path d="M7 7h10v6M17 17H7v-6M4 10l3-3 3 3M20 14l-3 3-3-3"/>',
    quotes:
      '<path d="M6 17c-1.5-1-2-2.6-2-4.5C4 9 6 7 9 6M15 17c-1.5-1-2-2.6-2-4.5C13 9 15 7 18 6"/>',
    bookmarks: '<path d="M6 3h12v18l-6-4-6 4z"/>',
  },
  Io = (n, e = "") =>
    `<svg class="sr-ico ${e}" viewBox="0 0 24 24" aria-hidden="true">${n}</svg>`,
  ep =
    '<svg class="sr-x" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z"/></svg>',
  Ta = {
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    check: '<path d="m5 12 5 5 9-10"/>',
    refresh: '<path d="M20 8a8 8 0 1 0 .2 7M20 3v5h-5"/>',
    link: '<path d="M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1"/>',
    open: '<path d="M14 4h6v6M20 4l-9 9M18 14v6H4V6h6"/>',
    clock: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2"/>',
  };
let zt = null,
  Ei = null,
  K5 = Bg[0].id,
  o0 = "",
  Pm = !1,
  Dr = null,
  jw = 0,
  Xw = 0,
  Y5 = !1;
const BL = "vr-social-posts",
  HL = () => {
    try {
      Ei != null && Ei.posts.length && localStorage.setItem(BL, "1");
    } catch {}
  };
let xd = null;
function zL(n, e = "", t = "") {
  const i = document.createElement(n);
  return (e && (i.className = e), t && (i.innerHTML = t), i);
}
function By(n) {
  !Number.isFinite(n) ||
    Ot.gold === n ||
    ((Ot.gold = n), window.dispatchEvent(new Event("cosmetics-changed")));
}
function Oa(n, e = "info", t = "claim") {
  zt == null ||
    zt.querySelectorAll(".sr-status").forEach((i) => {
      const s = i.dataset.for === t;
      ((i.textContent = s ? n : ""), (i.dataset.kind = e));
    });
}
const A4 = (n) =>
    n instanceof Error &&
    !["TimeoutError", "AbortError", "TypeError"].includes(n.name)
      ? n.message
      : Ht(
          "X is not responding right now. Please try again later",
          "X сейчас не отвечает. Попробуйте позже",
        ),
  ZK = (n) => {
    const e = Bg.find((t) => t.id === n) ?? Bg[0];
    return Dy() ? e.ru : e.en;
  };
function UL() {
  return `https://x.com/intent/post?text=${encodeURIComponent(o0.trim())}&url=${encodeURIComponent(Ei.link)}`;
}
function Zw(n) {
  return n ? Math.max(0, Date.parse(n) - Date.now()) : 0;
}
function Om(n) {
  const e = Math.ceil(n / 1e3),
    t = Math.floor(e / 3600),
    i = Math.floor((e % 3600) / 60),
    s = e % 60;
  return t
    ? `${t}:${String(i).padStart(2, "0")}:${String(s).padStart(2, "0")}`
    : `${i}:${String(s).padStart(2, "0")}`;
}
function Nm(n) {
  if (!n) return Ht("not checked yet", "ещё не проверялся");
  const e = Math.round((Date.now() - Date.parse(n)) / 1e3),
    t = new Intl.RelativeTimeFormat(Dy() ? "ru" : "en", { numeric: "auto" });
  return e < 60
    ? Ht("just now", "только что")
    : e < 3600
      ? t.format(-Math.round(e / 60), "minute")
      : e < 86400
        ? t.format(-Math.round(e / 3600), "hour")
        : t.format(-Math.round(e / 86400), "day");
}
async function Hy() {
  (zt || QK(),
    (xd = document.activeElement),
    zt.open || zt.showModal(),
    th(),
    Oa(Ht("Loading…", "Загрузка…")));
  let n = "";
  try {
    (Me || (await _p()), (Ei = await tn("/me/social")), By(Ei.gold), HL());
  } catch (e) {
    n = A4(e);
  }
  (th(),
    n && Oa(n, "error"),
    clearInterval(jw),
    (jw = window.setInterval(zp, 1e3)),
    Ei != null && Ei.unseen && (await FL()),
    zy());
}
let j5 = !1;
async function T6() {
  try {
    if (localStorage.getItem(BL) !== "1") return;
  } catch {
    return;
  }
  if (!(!Me || Me.is_guest || (zt != null && zt.open) || j5)) {
    j5 = !0;
    try {
      const n = await tn("/me/social");
      ((Ei = n), By(n.gold), n.unseen && (await Hy()));
    } catch {}
    j5 = !1;
  }
}
async function FL() {
  var n;
  try {
    const e = await tn("/me/social/inbox", "POST", {});
    ((Ei = e.state),
      th(),
      (n = e.reward) != null && n.total && GL(e.reward, "background"));
  } catch {}
}
function zy() {
  (clearTimeout(Xw),
    !(!(zt != null && zt.open) || !Ei || !(Ei.queued > 0 || Ei.unseen > 0)) &&
      (Xw = window.setTimeout(async () => {
        if (!(!(zt != null && zt.open) || Y5)) {
          Y5 = !0;
          try {
            const n = await tn("/me/social"),
              e = (Ei == null ? void 0 : Ei.queued) ?? 0;
            ((Ei = n),
              By(n.gold),
              n.unseen
                ? await FL()
                : (th(),
                  e &&
                    !n.queued &&
                    Oa(
                      Ht(
                        "Checked: no new reactions yet. We keep counting automatically.",
                        "Проверили: новых реакций пока нет. Мы продолжаем считать автоматически.",
                      ),
                      "info",
                      "posts",
                    )));
          } catch {}
          ((Y5 = !1), zy());
        }
      }, 4e3)));
}
function QK() {
  ((zt = zL("dialog", "sr-dialog")),
    zt.setAttribute("aria-labelledby", "sr-title"),
    zt.addEventListener("keydown", (n) => n.stopPropagation()),
    zt.addEventListener("cancel", (n) => {
      zt.querySelector(".sr-reward") && (n.preventDefault(), Qw());
    }),
    zt.addEventListener("close", () => {
      var n;
      (clearInterval(jw),
        clearTimeout(Xw),
        (n = xd == null ? void 0 : xd.focus) == null || n.call(xd));
    }),
    zt.addEventListener("click", (n) => {
      n.target === zt && zt.close();
    }),
    document.body.append(zt));
}
