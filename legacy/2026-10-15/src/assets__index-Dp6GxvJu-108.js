// assets__index-Dp6GxvJu 108 — addeventlistener
// Lines 67215-67527 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
async function WY() {
  if (!(!Gy() || Notification.permission !== "granted" || !Me)) {
    try {
      if (sessionStorage.getItem("vr-push-sync") === Me.id) return;
      sessionStorage.setItem("vr-push-sync", Me.id);
    } catch {
      return;
    }
    try {
      await iI();
    } catch {}
  }
}
let Gp = null;
function Wy() {
  return document.getElementById("installbtn");
}
const VY =
  location.protocol === "http:" &&
  location.hostname === "212.43.159.250" &&
  location.port === "5174";
window.addEventListener("beforeinstallprompt", (n) => {
  var e;
  (n.preventDefault(),
    (Gp = n),
    (e = Wy()) == null || e.classList.remove("hidden"),
    window.dispatchEvent(new Event("vr-install-available")));
});
window.addEventListener("appinstalled", () => {
  var n;
  ((Gp = null),
    (n = Wy()) == null || n.classList.add("hidden"),
    window.dispatchEvent(new Event("vr-app-installed")));
});
const F6 = () => !!Gp;
async function nI() {
  var t;
  const n = Gp;
  if (!n) return "unavailable";
  await n.prompt();
  const { outcome: e } = await n.userChoice;
  return ((Gp = null), (t = Wy()) == null || t.classList.add("hidden"), e);
}
window.addEventListener("DOMContentLoaded", () => {
  var n;
  ((n = Wy()) == null || n.addEventListener("click", () => void nI()),
    document.addEventListener("selectstart", (e) => {
      const t = e.target;
      (t != null && t.closest("input, textarea")) || e.preventDefault();
    }));
});
VY && "serviceWorker" in navigator
  ? window.addEventListener("load", () => {
      (async () => {
        const n = await navigator.serviceWorker.getRegistrations();
        (await Promise.all(n.map((e) => e.unregister())),
          "caches" in window &&
            (await Promise.all(
              (await caches.keys()).map((e) => caches.delete(e)),
            )));
      })();
    })
  : "serviceWorker" in navigator &&
    (location.protocol === "https:" || location.hostname === "localhost") &&
    window.addEventListener("load", () => {
      const n = !!navigator.serviceWorker.controller;
      let e = !1;
      (navigator.serviceWorker.addEventListener("controllerchange", () => {
        var t;
        !n ||
          e ||
          ((t = window.game) != null && t.running) ||
          R4().then((i) => {
            const s = document.getElementById("loading");
            !i ||
              e ||
              (s && !s.classList.contains("hidden")) ||
              ((e = !0), location.reload());
          });
      }),
        navigator.serviceWorker
          .register("/sw.js", { updateViaCache: "none" })
          .then((t) => t.update())
          .catch((t) =>
            console.error("Service worker registration failed:", t),
          ));
    });
const Vy = () => document.documentElement.lang === "ru",
  ai = (n, e) => (Vy() ? e : n),
  Hg = (n) =>
    Math.max(0, Math.floor(n)).toLocaleString(Vy() ? "ru-RU" : "en-US"),
  $Y = (n, e, t, i) => {
    const s = n % 100,
      o = n % 10;
    return s > 10 && s < 20 ? i : o === 1 ? e : o >= 2 && o <= 4 ? t : i;
  },
  zg = (n) =>
    Vy()
      ? `${n} ${$Y(n, "день", "дня", "дней")}`
      : `${n} ${n === 1 ? "day" : "days"}`,
  Sl = (n, e = "") =>
    `<svg class="sr-ico ${e}" viewBox="0 0 24 24" aria-hidden="true">${n}</svg>`,
  er = {
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    check: '<path d="m5 12 5 5 9-10"/>',
    chevron: '<path d="m9 6 6 6-6 6"/>',
    gift: '<path d="M4 11h16v9H4zM3 7h18v4H3zM12 7v13M12 7c-1-3-5-3.5-5-1s3 1 5 1zm0 0c1-3 5-3.5 5-1s-3 1-5 1z"/>',
    install: '<path d="M12 3v11m0 0-4-4m4 4 4-4M5 17v3h14v-3"/>',
    bell: '<path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15zM10 20a2 2 0 0 0 4 0"/>',
    flame:
      '<path d="M12 3c.5 3 4 4.5 4 9a4 4 0 0 1-8 0c0-1.6.7-2.8 1.5-3.6.3 1.2 1 1.9 1.6 2C11.3 8 11.2 5.5 12 3z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
    x: '<path fill="currentColor" stroke="none" d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L2 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z"/>',
  },
  sI = (n, e = "") => {
    const t = _s[n];
    return `<span class="rw-case ${e}" style="--c1:${(t == null ? void 0 : t.colors[0]) ?? "#3a2a12"};--c2:${(t == null ? void 0 : t.colors[1]) ?? "#ffcf6a"}"><span class="ar-case-box"><i></i></span></span>`;
  };
let Lt = null,
  Fi = null,
  Qs = !1,
  lM = 0,
  Td = null;
const $y = new Set(),
  qY = () => Fi;
function KY(n) {
  $y.add(n);
}
function qy(n) {
  ((Fi = n),
    hU(n.golden),
    (Ot.gold !== n.gold ||
      JSON.stringify(Ot.cases ?? {}) !== JSON.stringify(n.cases)) &&
      ((Ot.gold = n.gold),
      (Ot.cases = n.cases),
      window.dispatchEvent(new Event("cosmetics-changed"))));
  for (const e of $y) e();
}
async function pu() {
  if (!Me) {
    Fi = null;
    for (const e of $y) e();
    return null;
  }
  const n = Me.id;
  try {
    const e = await tn(`/me/rewards?tz=${US()}`);
    (Me == null ? void 0 : Me.id) === n && qy(e);
  } catch {}
  return Fi;
}
function oI(n, e = "", t = "") {
  const i = document.createElement(n);
  return (e && (i.className = e), t && (i.innerHTML = t), i);
}
function ko(n, e = "info") {
  const t = Lt == null ? void 0 : Lt.querySelector(".rw-status");
  t && ((t.textContent = n), (t.dataset.kind = e));
}
const L4 = (n) =>
    n instanceof Error &&
    !["TimeoutError", "AbortError", "TypeError"].includes(n.name)
      ? n.message
      : ai(
          "No connection. Try again in a moment",
          "Нет связи. Попробуйте чуть позже",
        ),
  I4 = (n) => Math.max(0, Date.parse(n) - Date.now());
function aI(n) {
  const e = Math.ceil(n / 1e3),
    t = Math.floor(e / 3600),
    i = Math.floor((e % 3600) / 60),
    s = e % 60;
  return `${String(t).padStart(2, "0")}:${String(i).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function YY() {
  if (!Fi) return "";
  const n = Math.ceil(I4(Fi.daily.nextAt) / 6e4),
    e = Math.floor(n / 60);
  return e
    ? ai(`${e} h ${n % 60} min`, `${e} ч ${n % 60} мин`)
    : ai(`${n} min`, `${n} мин`);
}
function f0() {
  if (!(Lt != null && Lt.open)) return;
  const n = window.visualViewport,
    e = matchMedia("(max-width: 520px)").matches;
  if (!n || !e) {
    (Lt.style.removeProperty("top"),
      Lt.style.removeProperty("max-height"),
      Lt.classList.remove("placed"));
    return;
  }
  (Lt.classList.add("placed"),
    (Lt.style.maxHeight = Math.max(240, Math.floor(n.height) - 20) + "px"));
  const t = Lt.offsetHeight;
  Lt.style.top =
    Math.round(n.offsetTop + Math.max(10, (n.height - t) / 2)) + "px";
}
var l8, c8;
typeof window < "u" &&
  ((l8 = window.visualViewport) == null || l8.addEventListener("resize", f0),
  (c8 = window.visualViewport) == null || c8.addEventListener("scroll", f0),
  window.addEventListener("orientationchange", () =>
    window.setTimeout(f0, 300),
  ));
function jY() {
  ((Lt = oI("dialog", "sr-dialog rw-dialog")),
    Lt.setAttribute("aria-labelledby", "rw-title"),
    Lt.addEventListener("keydown", (n) => n.stopPropagation()),
    Lt.addEventListener("cancel", (n) => {
      Lt.querySelector(".sr-reward") && (n.preventDefault(), hM());
    }),
    Lt.addEventListener("close", () => {
      var n;
      (clearInterval(lM),
        (n = Td == null ? void 0 : Td.focus) == null || n.call(Td));
    }),
    Lt.addEventListener("click", (n) => {
      n.target === Lt && !Qs && Lt.close();
    }),
    document.body.append(Lt));
}
function XY() {
  if (!Fi) return [];
  const n = /iPhone|iPad|iPod/i.test(navigator.userAgent) && !u0(),
    e = [];
  if (
    (!ua &&
      (Fi.install.done || F6() || n || u0()) &&
      e.push({
        id: "install",
        icon: er.install,
        title: ai("Install the game", "Установи игру"),
        gold: Fi.install.gold,
        done: Fi.install.done,
        hint: Fi.install.done
          ? ai("Installed", "Установлена")
          : n
            ? ai(
                "Share → Add to Home Screen, then open it from there",
                "Поделиться → «На экран Домой», затем открой игру оттуда",
              )
            : ai(
                "Full screen, one tap from your home screen",
                "На весь экран, запуск в одно касание",
              ),
        disabled: !Fi.install.done && !F6() && !u0(),
      }),
    Fi.push.done || (Fi.push.available && Gy()))
  ) {
    const t = BY() === "denied";
    e.push({
      id: "push",
      icon: er.bell,
      title: ai("Turn on notifications", "Включи уведомления"),
      gold: Fi.push.gold,
      done: Fi.push.done,
      hint: Fi.push.done
        ? ai(
            "On — events, drops and new maps",
            "Включены — события, дропы и новые карты",
          )
        : t
          ? ai(
              "Blocked for this site — allow them in the browser settings",
              "Заблокированы для сайта — разреши в настройках браузера",
            )
          : ai(
              "Events, drops and new maps. No spam",
              "События, дропы и новые карты. Без спама",
            ),
      disabled: !Fi.push.done && t,
    });
  }
  return (
    e.push({
      id: "x",
      icon: er.x,
      title: ai("Post about the game on X", "Пост об игре в X"),
      gold: U2,
      done: !1,
      hint: ai(
        "Plus gold for every like and repost",
        "Плюс золото за каждый лайк и репост",
      ),
    }),
    e
  );
}
const G6 = (n) =>
  new Date(n).toLocaleTimeString(Vy() ? "ru-RU" : "en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
function cM(n) {
  const e = Math.ceil(n / 1e3);
  if (e < 3600)
    return `${String(Math.floor(e / 60)).padStart(2, "0")}:${String(e % 60).padStart(2, "0")}`;
  const t = Math.ceil(e / 60),
    i = Math.floor(t / 60);
  return ai(`${i} h ${t % 60} min`, `${i} ч ${t % 60} мин`);
}
function ZY() {
  const n = WC();
  if (!(n != null && n.enabled)) return "";
  const e = Xl();
  return `<button type="button" class="rw-task rw-golden${e ? " on" : ""}" data-task="golden">
      <span class="rw-task-icon">${Sl(er.sun)}</span>
      <span class="rw-task-text"><b>${ai("Golden hour", "Золотой час")}</b><small>${e ? ai("Battles pay double gold right now", "Прямо сейчас бои приносят двойное золото") : ai(`Double gold for battles, every day at ${G6(n.startsAt)}`, `Двойное золото за бои, каждый день в ${G6(n.startsAt)}`)}</small></span>
      <span class="rw-gain rw-golden-chip">${e ? `<b>×${n.multiplier}</b><i class="rw-golden-clock">${cM(vg())}</i>` : `<i>${ai("in", "через")}</i><b class="rw-golden-clock">${cM(vg())}</b>`}</span>${Sl(er.chevron, "rw-go")}
    </button>`;
}
