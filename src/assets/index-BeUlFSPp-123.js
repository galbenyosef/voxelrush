// index-BeUlFSPp 123 — queryselector
// Lines 71276-71621 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
async function jJ(s) {
  if (xl || !is) return;
  const e = Di.querySelector(".sr-claim input");
  if (!FJ(s)) {
    (br(
      Ht(
        "Paste a link like https://x.com/you/status/123…",
        "Вставь ссылку вида https://x.com/you/status/123…",
      ),
      "error",
    ),
      e.focus());
    return;
  }
  xl = "claim";
  const t = Di.querySelector(".sr-claim-btn");
  ((t.disabled = !0),
    t.classList.add("loading"),
    (e.readOnly = !0),
    br(Ht("Checking your post on X…", "Проверяем пост в X…")));
  try {
    const i = await Vi("/me/social/posts", "POST", { url: s.trim() });
    ((is = i.state),
      (xl = null),
      U7(),
      qc(),
      i.reward
        ? q7(i.reward, "claim")
        : br(
            Ht(
              "Post accepted! X is slow right now — we will verify it in the background and credit your gold automatically.",
              "Пост принят! X сейчас медлит — проверим его в фоне и начислим золото автоматически.",
            ),
            "success",
          ),
      Q5());
  } catch (i) {
    ((xl = null),
      (t.disabled = !1),
      t.classList.remove("loading"),
      (e.readOnly = !1),
      br(ST(i), "error"));
  }
  Rm();
}
async function XJ() {
  if (!(xl || !is)) {
    ((xl = "refresh"), Rm());
    try {
      ((is = (await Vi("/me/social/refresh", "POST", {})).state),
        (xl = null),
        qc(),
        br(
          Ht(
            "Your posts are first in the queue — gold arrives automatically, you can close this window.",
            "Твои посты первые в очереди — золото придёт автоматически, окно можно закрыть.",
          ),
          "success",
          "posts",
        ));
    } catch (s) {
      xl = null;
      try {
        ((is = await Vi("/me/social")), qc());
      } catch {}
      br(ST(s), "error", "posts");
    }
    (Rm(), Q5());
  }
}
function I4() {
  const s = Di?.querySelector(".sr-reward");
  s &&
    (s.classList.add("out"),
    window.setTimeout(() => s.remove(), 220),
    Di?.querySelector(".sr-wallet")?.classList.add("bump"),
    window.setTimeout(
      () => Di?.querySelector(".sr-wallet")?.classList.remove("bump"),
      700,
    ));
}
function q7(s, e) {
  const t = is?.gold ?? Lt.gold + s.total,
    i = [
      ...(s.bonus
        ? [
            `<li><span>${H1}${Ht("Post published", "Публикация")}</span><b>+${yo(s.bonus)}</b></li>`,
          ]
        : []),
      ...WJ(s.gained).map(
        (d) =>
          `<li><span>${qo(MT[d.metric])}${Ht(...wT[d.metric])} <em>${yo(d.count)} × ${d.rate}</em></span><b>+${yo(d.gold)}</b></li>`,
      ),
    ];
  e === "claim" &&
    !s.bonus &&
    i.unshift(
      `<li class="muted"><span>${qo(Ca.clock)}${Ht("Post bonus: next one in 24 h", "Бонус за пост — снова через 24 ч")}</span><b>0</b></li>`,
    );
  const n = W7("div", "sr-reward");
  (n.setAttribute("role", "alertdialog"),
    n.setAttribute("aria-label", Ht("Reward", "Награда")));
  const o = Array.from({ length: 18 }, (d, u) => {
    const f = (u / 18) * Math.PI * 2 + Math.random() * 0.3,
      p = 120 + Math.random() * 90;
    return `<i style="--x:${(Math.cos(f) * p).toFixed(0)}px;--y:${(Math.sin(f) * p * 0.8).toFixed(0)}px;--d:${(Math.random() * 0.25).toFixed(2)}s;--s:${(0.6 + Math.random() * 0.6).toFixed(2)}">${xn(22)}</i>`;
  }).join("");
  ((n.innerHTML = `<div class="sr-reward-card">
    <div class="sr-burst"><div class="sr-rays"></div><div class="sr-coins">${o}</div><div class="sr-big-coin">${xn(108)}</div></div>
    <small>${e === "claim" || s.bonus ? Ht("THANK YOU FOR THE SUPPORT!", "СПАСИБО ЗА ПОДДЕРЖКУ!") : Ht("YOUR POSTS EARNED", "ТВОИ ПОСТЫ ПРИНЕСЛИ")}</small>
    <b class="sr-amount">+0</b>
    <span class="sr-amount-label">${Ht("gold coins", "золотых монет")}</span>
    <ul class="sr-lines">${i.join("")}</ul>
    ${s.capped ? `<p class="sr-capped">${Ht("Part of the reward hit a limit.", "Часть награды упёрлась в лимит.")}</p>` : ""}
    <p class="sr-balance">${Ht("Balance", "Баланс")}: ${xn(16)}<b>${yo(t)}</b></p>
    <button type="button" class="sr-primary sr-collect">${Ht("Collect", "Забрать")}</button>
  </div>`),
    Di.append(n),
    n.addEventListener("click", (d) => {
      d.target === n && I4();
    }));
  const a = n.querySelector(".sr-collect");
  ((a.onclick = I4), a.focus());
  const r = n.querySelector(".sr-amount"),
    l = performance.now(),
    c = Math.min(1600, 500 + s.total / 4),
    h = (d) => {
      const u = Math.min(1, (d - l) / c),
        f = 1 - Math.pow(1 - u, 3);
      ((r.textContent = "+" + yo(s.total * f)),
        u < 1 && n.isConnected
          ? requestAnimationFrame(h)
          : ((r.textContent = "+" + yo(s.total)), X5(t), K7()));
    };
  requestAnimationFrame(h);
}
function K7() {
  const s = Di?.querySelector(".sr-wallet b");
  s && (s.textContent = yo(Lt.gold));
}
window.addEventListener("cosmetics-changed", K7);
const ET = "mvs8vmgl-d7keq5";
typeof window < "u" && (window.vrBuild = ET);
const km = "vr-rejoin",
  Z8 = "vr-update-attempt";
let P4 = "",
  dw = null;
function Y7() {
  return typeof fetch != "function"
    ? Promise.resolve(null)
    : ((dw ??= fetch(`/version.json?t=${Date.now()}`, {
        cache: "no-store",
        signal: AbortSignal.timeout(6e3),
      })
        .then((s) => (s.ok ? s.json() : null))
        .then((s) => {
          const e =
            typeof s?.build == "string" && /^[\w-]{4,64}$/.test(s.build)
              ? s.build
              : null;
          return (e && (P4 = e), e);
        })
        .catch(() => null)
        .finally(() => {
          dw = null;
        })),
      dw);
}
async function AT() {
  const s = await Y7();
  return !!s && s !== ET;
}
function j7(s) {
  try {
    const e = JSON.parse(sessionStorage.getItem(Z8) || "null");
    if (e?.build === P4 && Date.now() - e.at < 12e4) return !1;
    (sessionStorage.setItem(Z8, JSON.stringify({ build: P4, at: Date.now() })),
      s &&
        sessionStorage.setItem(km, JSON.stringify({ ...s, at: Date.now() })));
  } catch {}
  return (location.reload(), !0);
}
function ZJ(s) {
  try {
    sessionStorage.setItem(km, JSON.stringify({ ...s, at: Date.now() }));
  } catch {}
}
function QJ() {
  try {
    sessionStorage.removeItem(km);
  } catch {}
}
function JJ() {
  try {
    const s = sessionStorage.getItem(km);
    sessionStorage.removeItem(km);
    const e = s ? JSON.parse(s) : null;
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
function eee(s) {
  const e = async () => {
    document.hidden || ((await AT()) && s());
  };
  (setInterval(e, 6e4),
    document.addEventListener("visibilitychange", () => {
      document.hidden || e();
    }),
    window.addEventListener("online", () => void e()),
    setTimeout(e, 2e4));
}
const tee = 2e4,
  Q8 = "vr-first",
  J5 = "vr-acq",
  J8 = "vr-visit",
  e3 = "vr-tz",
  O4 = () => -new Date().getTimezoneOffset(),
  X7 = (s) => {
    try {
      return s === "local" ? localStorage : sessionStorage;
    } catch {
      return null;
    }
  },
  Ml = (s, e) => {
    try {
      return X7(s)?.getItem(e) ?? null;
    } catch {
      return null;
    }
  },
  Uf = (s, e, t) => {
    try {
      X7(s)?.setItem(e, t);
    } catch {}
  };
function Z7() {
  const s = navigator.userAgent;
  return /iPad|Tablet|PlayBook|Silk/i.test(s) ||
    (/Android/i.test(s) && !/Mobile/i.test(s)) ||
    (/Macintosh/i.test(s) && navigator.maxTouchPoints > 1)
    ? "tablet"
    : /Mobi|iPhone|iPod|Android/i.test(s)
      ? "phone"
      : "desktop";
}
const iee =
    typeof window < "u" &&
    typeof matchMedia == "function" &&
    (Pn ||
      navigator.standalone === !0 ||
      matchMedia(
        "(display-mode: standalone), (display-mode: minimal-ui), (display-mode: window-controls-overlay)",
      ).matches ||
      (new URLSearchParams(location.search).get("src") === "app" &&
        matchMedia("(display-mode: fullscreen)").matches)),
  hd = () => iee;
function see() {
  try {
    const s = document.createElement("canvas").getContext("webgl", {
      powerPreference: cP() ? "low-power" : "high-performance",
    });
    if (!s) return "none";
    const e = s.getExtension("WEBGL_debug_renderer_info"),
      t = String(
        e
          ? s.getParameter(e.UNMASKED_RENDERER_WEBGL)
          : s.getParameter(s.RENDERER),
      );
    if (
      (s.getExtension("WEBGL_lose_context")?.loseContext(),
      /swiftshader|llvmpipe|softpipe|software|basic render/i.test(t))
    )
      return "software";
    for (const [i, n] of [
      [/apple/i, "apple"],
      [/nvidia|geforce|rtx|gtx|quadro/i, "nvidia"],
      [/amd|radeon/i, "amd"],
      [/intel|iris|uhd/i, "intel"],
      [/adreno/i, "adreno"],
      [/mali/i, "mali"],
      [/powervr/i, "powervr"],
    ])
      if (i.test(t)) return n;
    return "other";
  } catch {
    return "none";
  }
}
function nee() {
  try {
    const s = (
      navigator.languages?.length ? navigator.languages : [navigator.language]
    )
      .filter((i) => typeof i == "string" && i)
      .map((i) =>
        i
          .toLowerCase()
          .replace(/_/g, "-")
          .replace(/[^a-z0-9-]/g, ""),
      );
    if (!s.length) return {};
    const e = (i) => i.split("-")[0].slice(0, 3),
      t = s[0].split("-").slice(0, 2).join("-").slice(0, 10);
    return {
      bl: e(s[0]),
      loc: t,
      bls: [...new Set(s.map(e))].filter(Boolean).slice(0, 6),
    };
  } catch {
    return {};
  }
}
function oee() {
  const s = new URLSearchParams(location.search);
  let e = "";
  const t = Ml("session", "vr-ref");
  try {
    e = new URL(t || document.referrer).hostname;
  } catch {}
  const i = (s.get("mode") ?? "").replace(/[^a-z0-9-]/gi, "").slice(0, 16);
  return {
    src: (s.get("src") ?? s.get("utm_source") ?? "").slice(0, 24),
    camp: s.get("ref") ? "ref" : (s.get("utm_campaign") ?? "").slice(0, 40),
    ref: e.slice(0, 80),
    embed: jo,
    xpage: Ml("session", "vr-xpage") === "1" || s.has("ref"),
    pwa: hd(),
    dev: Z7(),
    lang: $0(),
    lsrc: IP(),
    entry: jo ? "embed" : i ? "mode-" + i : "menu",
    ...nee(),
  };
}
const B1 = [],
  z1 = [],
  Iy = [],
  uw = new Set();
