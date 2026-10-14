// assets__index-Dp6GxvJu 102 — slice
// Lines 63690-64032 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function GL(n, e) {
  const t = (Ei == null ? void 0 : Ei.gold) ?? Ot.gold + n.total,
    i = [
      ...(n.bonus
        ? [
            `<li><span>${ep}${Ht("Post published", "Публикация")}</span><b>+${Xs(n.bonus)}</b></li>`,
          ]
        : []),
      ...XK(n.gained).map(
        (d) =>
          `<li><span>${Io(T4[d.metric])}${Ht(...x4[d.metric])} <em>${Xs(d.count)} × ${d.rate}</em></span><b>+${Xs(d.gold)}</b></li>`,
      ),
    ];
  e === "claim" &&
    !n.bonus &&
    i.unshift(
      `<li class="muted"><span>${Io(Ta.clock)}${Ht("Post bonus: next one in 24 h", "Бонус за пост — снова через 24 ч")}</span><b>0</b></li>`,
    );
  const s = zL("div", "sr-reward");
  (s.setAttribute("role", "alertdialog"),
    s.setAttribute("aria-label", Ht("Reward", "Награда")));
  const o = Array.from({ length: 18 }, (d, u) => {
    const f = (u / 18) * Math.PI * 2 + Math.random() * 0.3,
      p = 120 + Math.random() * 90;
    return `<i style="--x:${(Math.cos(f) * p).toFixed(0)}px;--y:${(Math.sin(f) * p * 0.8).toFixed(0)}px;--d:${(Math.random() * 0.25).toFixed(2)}s;--s:${(0.6 + Math.random() * 0.6).toFixed(2)}">${bs(22)}</i>`;
  }).join("");
  ((s.innerHTML = `<div class="sr-reward-card">
    <div class="sr-burst"><div class="sr-rays"></div><div class="sr-coins">${o}</div><div class="sr-big-coin">${bs(108)}</div></div>
    <small>${e === "claim" || n.bonus ? Ht("THANK YOU FOR THE SUPPORT!", "СПАСИБО ЗА ПОДДЕРЖКУ!") : Ht("YOUR POSTS EARNED", "ТВОИ ПОСТЫ ПРИНЕСЛИ")}</small>
    <b class="sr-amount">+0</b>
    <span class="sr-amount-label">${Ht("gold coins", "золотых монет")}</span>
    <ul class="sr-lines">${i.join("")}</ul>
    ${n.capped ? `<p class="sr-capped">${Ht("Part of the reward hit a limit.", "Часть награды упёрлась в лимит.")}</p>` : ""}
    <p class="sr-balance">${Ht("Balance", "Баланс")}: ${bs(16)}<b>${Xs(t)}</b></p>
    <button type="button" class="sr-primary sr-collect">${Ht("Collect", "Забрать")}</button>
  </div>`),
    zt.append(s),
    s.addEventListener("click", (d) => {
      d.target === s && Qw();
    }));
  const a = s.querySelector(".sr-collect");
  ((a.onclick = Qw), a.focus());
  const r = s.querySelector(".sr-amount"),
    l = performance.now(),
    c = Math.min(1600, 500 + n.total / 4),
    h = (d) => {
      const u = Math.min(1, (d - l) / c),
        f = 1 - Math.pow(1 - u, 3);
      ((r.textContent = "+" + Xs(n.total * f)),
        u < 1 && s.isConnected
          ? requestAnimationFrame(h)
          : ((r.textContent = "+" + Xs(n.total)), By(t), WL()));
    };
  requestAnimationFrame(h);
}
function WL() {
  const n = zt == null ? void 0 : zt.querySelector(".sr-wallet b");
  n && (n.textContent = Xs(Ot.gold));
}
window.addEventListener("cosmetics-changed", WL);
const _4 = "mv5sawna-jtl2ka";
typeof window < "u" && (window.vrBuild = _4);
const Up = "vr-rejoin",
  _6 = "vr-update-attempt";
let Jw = "",
  X5 = null;
function VL() {
  return typeof fetch != "function"
    ? Promise.resolve(null)
    : (X5 ??
        (X5 = fetch(`/version.json?t=${Date.now()}`, {
          cache: "no-store",
          signal: AbortSignal.timeout(6e3),
        })
          .then((n) => (n.ok ? n.json() : null))
          .then((n) => {
            const e =
              typeof (n == null ? void 0 : n.build) == "string" &&
              /^[\w-]{4,64}$/.test(n.build)
                ? n.build
                : null;
            return (e && (Jw = e), e);
          })
          .catch(() => null)
          .finally(() => {
            X5 = null;
          })),
      X5);
}
async function R4() {
  const n = await VL();
  return !!n && n !== _4;
}
function $L(n) {
  try {
    const e = JSON.parse(sessionStorage.getItem(_6) || "null");
    if ((e == null ? void 0 : e.build) === Jw && Date.now() - e.at < 12e4)
      return !1;
    (sessionStorage.setItem(_6, JSON.stringify({ build: Jw, at: Date.now() })),
      n &&
        sessionStorage.setItem(Up, JSON.stringify({ ...n, at: Date.now() })));
  } catch {}
  return (location.reload(), !0);
}
function nY(n) {
  try {
    sessionStorage.setItem(Up, JSON.stringify({ ...n, at: Date.now() }));
  } catch {}
}
function sY() {
  try {
    sessionStorage.removeItem(Up);
  } catch {}
}
function oY() {
  try {
    const n = sessionStorage.getItem(Up);
    sessionStorage.removeItem(Up);
    const e = n ? JSON.parse(n) : null;
    return !e ||
      typeof e.address != "string" ||
      typeof e.name != "string" ||
      Date.now() - e.at > 18e4
      ? null
      : { address: e.address, name: e.name };
  } catch {
    return null;
  }
}
function aY(n) {
  const e = async () => {
    document.hidden || ((await R4()) && n());
  };
  (setInterval(e, 6e4),
    document.addEventListener("visibilitychange", () => {
      document.hidden || e();
    }),
    window.addEventListener("online", () => void e()),
    setTimeout(e, 2e4));
}
const rY = 2e4,
  R6 = "vr-first",
  Uy = "vr-acq",
  C6 = "vr-visit",
  Fy = "vr-tz",
  eM = () => -new Date().getTimezoneOffset(),
  qL = (n) => {
    try {
      return n === "local" ? localStorage : sessionStorage;
    } catch {
      return null;
    }
  },
  kr = (n, e) => {
    var t;
    try {
      return ((t = qL(n)) == null ? void 0 : t.getItem(e)) ?? null;
    } catch {
      return null;
    }
  },
  fu = (n, e, t) => {
    var i;
    try {
      (i = qL(n)) == null || i.setItem(e, t);
    } catch {}
  };
function lY() {
  const n = navigator.userAgent;
  return /iPad|Tablet|PlayBook|Silk/i.test(n) ||
    (/Android/i.test(n) && !/Mobile/i.test(n)) ||
    (/Macintosh/i.test(n) && navigator.maxTouchPoints > 1)
    ? "tablet"
    : /Mobi|iPhone|iPod|Android/i.test(n)
      ? "phone"
      : "desktop";
}
const cY =
    typeof window < "u" &&
    typeof matchMedia == "function" &&
    (navigator.standalone === !0 ||
      matchMedia(
        "(display-mode: standalone), (display-mode: minimal-ui), (display-mode: window-controls-overlay)",
      ).matches ||
      (new URLSearchParams(location.search).get("src") === "app" &&
        matchMedia("(display-mode: fullscreen)").matches)),
  u0 = () => cY;
function hY() {
  var n;
  try {
    const e = document.createElement("canvas").getContext("webgl");
    if (!e) return "none";
    const t = e.getExtension("WEBGL_debug_renderer_info"),
      i = String(
        t
          ? e.getParameter(t.UNMASKED_RENDERER_WEBGL)
          : e.getParameter(e.RENDERER),
      );
    if (
      ((n = e.getExtension("WEBGL_lose_context")) == null || n.loseContext(),
      /swiftshader|llvmpipe|softpipe|software|basic render/i.test(i))
    )
      return "software";
    for (const [s, o] of [
      [/apple/i, "apple"],
      [/nvidia|geforce|rtx|gtx|quadro/i, "nvidia"],
      [/amd|radeon/i, "amd"],
      [/intel|iris|uhd/i, "intel"],
      [/adreno/i, "adreno"],
      [/mali/i, "mali"],
      [/powervr/i, "powervr"],
    ])
      if (s.test(i)) return o;
    return "other";
  } catch {
    return "none";
  }
}
function dY() {
  var n;
  try {
    const e = (
      (n = navigator.languages) != null && n.length
        ? navigator.languages
        : [navigator.language]
    )
      .filter((s) => typeof s == "string" && s)
      .map((s) =>
        s
          .toLowerCase()
          .replace(/_/g, "-")
          .replace(/[^a-z0-9-]/g, ""),
      );
    if (!e.length) return {};
    const t = (s) => s.split("-")[0].slice(0, 3),
      i = e[0].split("-").slice(0, 2).join("-").slice(0, 10);
    return {
      bl: t(e[0]),
      loc: i,
      bls: [...new Set(e.map(t))].filter(Boolean).slice(0, 6),
    };
  } catch {
    return {};
  }
}
function uY() {
  const n = new URLSearchParams(location.search);
  let e = "";
  const t = kr("session", "vr-ref");
  try {
    e = new URL(t || document.referrer).hostname;
  } catch {}
  const i = (n.get("mode") ?? "").replace(/[^a-z0-9-]/gi, "").slice(0, 16);
  return {
    src: (n.get("src") ?? n.get("utm_source") ?? "").slice(0, 24),
    camp: n.get("ref") ? "ref" : (n.get("utm_campaign") ?? "").slice(0, 40),
    ref: e.slice(0, 80),
    embed: ua,
    xpage: kr("session", "vr-xpage") === "1" || n.has("ref"),
    pwa: u0(),
    dev: lY(),
    lang: (document.documentElement.lang || navigator.language || "en").slice(
      0,
      2,
    ),
    entry: ua ? "embed" : i ? "mode-" + i : "menu",
    ...dY(),
  };
}
const tp = [],
  F2 = [],
  Z5 = new Set();
let If = 0,
  Pf = null,
  tM = null,
  k6 = !1,
  Q5 = !1;
function ys(n) {
  tp.length < 40 && tp.push(n);
}
function KL() {
  const n = !!Me && !!tM && kr("local", Uy) !== Me.id,
    e = Me ? `${Me.id}:${eM()}` : "",
    t = !!Me && kr("local", Fy) !== e;
  if (!Pf && !tp.length && !If && !F2.length && !n && !t) return null;
  const i = {
      ...(Pf ? { visit: Pf } : {}),
      ...(n ? { bind: !0, first: tM } : {}),
      ...(t ? { tz: eM() } : {}),
      ...(tp.length ? { ev: tp.splice(0) } : {}),
      ...(If >= 1 ? { solo: Math.min(1800, Math.round(If)) } : {}),
      ...(F2.length ? { err: F2.splice(0) } : {}),
      build: _4,
    },
    s = n ? Me.id : "";
  return ((Pf = null), (If = 0), { out: i, boundTo: s, zone: t ? e : "" });
}
async function J5() {
  if (Q5) return;
  const n = KL();
  if (n) {
    Q5 = !0;
    try {
      (await tn("/t", "POST", n.out),
        n.boundTo && fu("local", Uy, n.boundTo),
        n.zone && fu("local", Fy, n.zone));
    } catch {}
    Q5 = !1;
  }
}
function L6() {
  const n = KL();
  if (n)
    try {
      (fetch(`${zC}/v1/t`, {
        method: "POST",
        keepalive: !0,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          ...(gg() ? { Authorization: `Bearer ${gg()}` } : {}),
        },
        body: JSON.stringify(n.out),
      }).catch(() => {}),
        n.boundTo && fu("local", Uy, n.boundTo),
        n.zone && fu("local", Fy, n.zone));
    } catch {}
}
let I6 = 0;
const eb = [
  [60, "min1"],
  [300, "min5"],
  [900, "min15"],
  [1800, "min30"],
];
let tb = 0;
function fY(n, e) {
  !(n > 0) ||
    n > 1 ||
    ((I6 += n),
    e && (If += n),
    tb < eb.length && I6 >= eb[tb][0] && ys(eb[tb++][1]));
}
