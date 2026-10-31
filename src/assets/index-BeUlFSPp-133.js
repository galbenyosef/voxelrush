// index-BeUlFSPp 133 — math
// Lines 76238-76538 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
async function ete() {
  if (Pn) {
    if (!qe || (await LT()) !== "granted") return;
    try {
      if (sessionStorage.getItem("vr-push-sync") === qe.id) return;
      sessionStorage.setItem("vr-push-sync", qe.id);
    } catch {
      return;
    }
    try {
      await pN();
    } catch {}
    return;
  }
  if (!(!i3() || Notification.permission !== "granted" || !qe)) {
    try {
      if (sessionStorage.getItem("vr-push-sync") === qe.id) return;
      sessionStorage.setItem("vr-push-sync", qe.id);
    } catch {
      return;
    }
    try {
      await mN();
    } catch {}
  }
}
let Im = null;
function s3() {
  return document.getElementById("installbtn");
}
window.addEventListener("beforeinstallprompt", (s) => {
  (s.preventDefault(),
    (Im = s),
    s3()?.classList.remove("hidden"),
    window.dispatchEvent(new Event("vr-install-available")));
});
window.addEventListener("appinstalled", () => {
  ((Im = null),
    s3()?.classList.add("hidden"),
    window.dispatchEvent(new Event("vr-app-installed")));
});
const bk = () => !!Im;
async function gN() {
  const s = Im;
  if (!s) return "unavailable";
  await s.prompt();
  const { outcome: e } = await s.userChoice;
  return ((Im = null), s3()?.classList.add("hidden"), e);
}
window.addEventListener("DOMContentLoaded", () => {
  (s3()?.addEventListener("click", () => void gN()),
    document.addEventListener("selectstart", (s) => {
      s.target?.closest("input, textarea") || s.preventDefault();
    }));
});
"serviceWorker" in navigator &&
  (location.protocol === "https:" || location.hostname === "localhost") &&
  window.addEventListener("load", () => {
    const s = !!navigator.serviceWorker.controller;
    let e = !1;
    (navigator.serviceWorker.addEventListener("controllerchange", () => {
      !s ||
        e ||
        window.game?.running ||
        AT().then((t) => {
          const i = document.getElementById("loading");
          !t ||
            e ||
            (i && !i.classList.contains("hidden")) ||
            ((e = !0), location.reload());
        });
    }),
      navigator.serviceWorker
        .register("/sw.js", { updateViaCache: "none" })
        .then((t) => t.update())
        .catch((t) => console.error("Service worker registration failed:", t)));
  });
const ti = (s, e) => I(s, e),
  Wv = (s) => Math.max(0, Math.floor(s)).toLocaleString(ao()),
  $v = (s) =>
    MV(s, ["{0} day", "{0} days"], ["{0} день", "{0} дня", "{0} дней"]),
  cc = (s, e = "") =>
    `<svg class="sr-ico ${e}" viewBox="0 0 24 24" aria-hidden="true">${s}</svg>`,
  Gr = {
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
  yN = (s, e = "") => {
    const t = Tn[s];
    return `<span class="rw-case ${e}" style="--c1:${t?.colors[0] ?? "#3a2a12"};--c2:${t?.colors[1] ?? "#ffcf6a"}"><span class="ar-case-box"><i></i></span></span>`;
  };
let vi = null,
  bs = null,
  wo = !1,
  Y4 = 0,
  vN = null;
const n3 = new Set(),
  tte = () => bs;
function ite(s) {
  n3.add(s);
}
function o3(s) {
  ((bs = s),
    Hq(s.golden),
    (Lt.gold !== s.gold ||
      JSON.stringify(Lt.cases ?? {}) !== JSON.stringify(s.cases)) &&
      ((Lt.gold = s.gold),
      (Lt.cases = s.cases),
      window.dispatchEvent(new Event("cosmetics-changed"))));
  for (const e of n3) e();
}
async function Wf() {
  if (!qe) {
    bs = null;
    for (const e of n3) e();
    return null;
  }
  const s = qe.id;
  try {
    const e = await Vi(`/me/rewards?tz=${DA()}`);
    qe?.id === s && o3(e);
  } catch {}
  return bs;
}
function bN(s, e = "", t = "") {
  const i = document.createElement(s);
  return (e && (i.className = e), t && (i.innerHTML = t), i);
}
function $o(s, e = "info") {
  const t = vi?.querySelector(".rw-status");
  t && ((t.textContent = s), (t.dataset.kind = e));
}
const IT = (s) =>
    s instanceof Error &&
    !["TimeoutError", "AbortError", "TypeError"].includes(s.name)
      ? s.message
      : ti(
          "No connection. Try again in a moment",
          "Нет связи. Попробуйте чуть позже",
        ),
  PT = (s) => Math.max(0, Date.parse(s) - Date.now());
function wN(s) {
  const e = Math.ceil(s / 1e3),
    t = Math.floor(e / 3600),
    i = Math.floor((e % 3600) / 60),
    n = e % 60;
  return `${String(t).padStart(2, "0")}:${String(i).padStart(2, "0")}:${String(n).padStart(2, "0")}`;
}
function ste() {
  if (!bs) return "";
  const s = Math.ceil(PT(bs.daily.nextAt) / 6e4),
    e = Math.floor(s / 60);
  return e
    ? ti(`${e} h ${s % 60} min`, `${e} ч ${s % 60} мин`)
    : ti(`${s} min`, `${s} мин`);
}
function dd() {
  if (!vi?.open) return;
  const s = window.visualViewport,
    e = matchMedia("(max-width: 520px)").matches;
  if (!s || !e) {
    (vi.style.removeProperty("top"),
      vi.style.removeProperty("max-height"),
      vi.classList.remove("placed"));
    return;
  }
  vi.classList.add("placed");
  const t = document.createElement("div");
  ((t.style.cssText =
    "position:fixed;visibility:hidden;pointer-events:none;padding:var(--safe-top,0px) 0 var(--safe-bottom,0px)"),
    document.body.append(t));
  const i = parseFloat(getComputedStyle(t).paddingTop) || 0,
    n = parseFloat(getComputedStyle(t).paddingBottom) || 0;
  t.remove();
  const o = Math.floor(s.height) - i - n;
  vi.style.maxHeight = Math.max(240, o - 20) + "px";
  const a = vi.offsetHeight;
  vi.style.top = Math.round(s.offsetTop + i + Math.max(10, (o - a) / 2)) + "px";
}
typeof window < "u" &&
  (window.visualViewport?.addEventListener("resize", dd),
  window.visualViewport?.addEventListener("scroll", dd),
  window.addEventListener("orientationchange", () =>
    window.setTimeout(dd, 300),
  ));
function nte() {
  ((vi = bN("dialog", "sr-dialog rw-dialog")),
    vi.setAttribute("aria-labelledby", "rw-title"),
    vi.addEventListener("keydown", (s) => s.stopPropagation()),
    vi.addEventListener("cancel", (s) => {
      vi.querySelector(".sr-reward") && (s.preventDefault(), X4());
    }),
    vi.addEventListener("close", () => {
      (clearInterval(Y4), vN?.focus?.());
    }),
    vi.addEventListener("click", (s) => {
      s.target === vi && !wo && vi.close();
    }),
    document.body.append(vi));
}
function ote() {
  if (!bs) return [];
  const s = /iPhone|iPad|iPod/i.test(navigator.userAgent) && !hd(),
    e = [];
  if (
    (!jo &&
      (bs.install.done || bk() || s || hd()) &&
      e.push({
        id: "install",
        icon: Gr.install,
        title: ti("Install the game", "Установи игру"),
        gold: bs.install.gold,
        done: bs.install.done,
        hint: bs.install.done
          ? ti("Installed", "Установлена")
          : s
            ? ti(
                "Share → Add to Home Screen, then open it from there",
                "Поделиться → «На экран Домой», затем открой игру оттуда",
              )
            : ti(
                "Full screen, one tap from your home screen",
                "На весь экран, запуск в одно касание",
              ),
        disabled: !bs.install.done && !bk() && !hd(),
      }),
    bs.push.done || (bs.push.available && i3()))
  ) {
    const t = fN() === "denied";
    e.push({
      id: "push",
      icon: Gr.bell,
      title: ti("Turn on notifications", "Включи уведомления"),
      gold: bs.push.gold,
      done: bs.push.done,
      hint: bs.push.done
        ? ti(
            "On — events, drops and new maps",
            "Включены — события, дропы и новые карты",
          )
        : t
          ? Pn
            ? ti(
                "Turned off — tap to open Settings",
                "Выключены — нажми, чтобы открыть Настройки",
              )
            : ti(
                "Blocked for this site — allow them in the browser settings",
                "Заблокированы для сайта — разреши в настройках браузера",
              )
          : ti(
              "Events, drops and new maps. No spam",
              "События, дропы и новые карты. Без спама",
            ),
      disabled: !bs.push.done && t && !Pn,
    });
  }
  return (
    Pn ||
      e.push({
        id: "x",
        icon: Gr.x,
        title: ti("Post about the game on X", "Пост об игре в X"),
        gold: Ly,
        done: !1,
        hint: ti(
          "Plus gold for every like and repost",
          "Плюс золото за каждый лайк и репост",
        ),
      }),
    e
  );
}
const wk = (s) =>
  new Date(s).toLocaleTimeString(ao(), { hour: "2-digit", minute: "2-digit" });
function j4(s) {
  const e = Math.ceil(s / 1e3);
  if (e < 3600)
    return `${String(Math.floor(e / 60)).padStart(2, "0")}:${String(e % 60).padStart(2, "0")}`;
  const t = Math.ceil(e / 60),
    i = Math.floor(t / 60);
  return ti(`${i} h ${t % 60} min`, `${i} ч ${t % 60} мин`);
}
function ate() {
  const s = JP();
  if (!s?.enabled) return "";
  const e = Uc();
  return `<button type="button" class="rw-task rw-golden${e ? " on" : ""}" data-task="golden">
      <span class="rw-task-icon">${cc(Gr.sun)}</span>
      <span class="rw-task-text"><b>${ti("Golden hour", "Золотой час")}</b><small>${e ? ti("Battles pay double gold right now", "Прямо сейчас бои приносят двойное золото") : ti(`Double gold for battles, every day at ${wk(s.startsAt)}`, `Двойное золото за бои, каждый день в ${wk(s.startsAt)}`)}</small></span>
      <span class="rw-gain rw-golden-chip">${e ? `<b>×${s.multiplier}</b><i class="rw-golden-clock">${j4(vv())}</i>` : `<i>${ti("in", "через")}</i><b class="rw-golden-clock">${j4(vv())}</b>`}</span>${cc(Gr.chevron, "rw-go")}
    </button>`;
}
