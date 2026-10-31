// index-Dp6GxvJu 107 — skills
// Lines 66876-67214 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const RY = [
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
  CY = ["t.me", "wa.me", "vk.me", "youtu.be", "fb.me", "discord.gg", "dsc.gg"],
  kY = "[\\p{L}\\p{N}](?:[\\p{L}\\p{N}-]*[\\p{L}\\p{N}])?",
  LY = [
    new RegExp("(?<![\\p{L}\\p{N}])(?:https?|ftp|www)(?![\\p{L}\\p{N}])", "iu"),
    new RegExp(
      `${kY}(?:\\.|\\s+\\.\\s*|\\s+(?:dot|точка)\\s+)(?:${RY.join("|")})(?![\\p{L}\\p{N}])`,
      "iu",
    ),
    new RegExp(
      `(?<![\\p{L}\\p{N}])(?:${CY.map((n) => n.replace(".", "\\s*\\.\\s*")).join("|")})(?![\\p{L}\\p{N}])`,
      "iu",
    ),
    new RegExp("(?<![\\p{N}.])\\d{1,3}(?:\\.\\d{1,3}){3}(?![\\p{N}])", "u"),
  ];
function IY(n) {
  return LY.some((e) => e.test(n));
}
function PY(n = "en") {
  return n === "ru"
    ? "Ссылки запрещено отправлять в чат."
    : "Links are not allowed in chat.";
}
function rM(n, e = "en") {
  return !n.trimStart().startsWith("/") && IY(n) ? PY(e) : null;
}
const k4 = () => ({ xp: 0, skills: { xp: {}, stats: {} } });
function OY(n, e, t = "max") {
  const i = (o, a) => Math.min(1e10, t === "max" ? Math.max(o, a) : o + a),
    s = k4();
  s.xp = Math.min(4294967295, i(n.xp, e.xp));
  for (const o of ["xp", "stats"])
    for (const a of new Set([
      ...Object.keys(n.skills[o]),
      ...Object.keys(e.skills[o]),
    ]))
      s.skills[o][a] = i(n.skills[o][a] ?? 0, e.skills[o][a] ?? 0);
  return s;
}
let U6 = "",
  ib = !1,
  nb = 0,
  Fp = k4();
async function Of(n = !1) {
  var t, i;
  if (
    (U6 !== ((Me == null ? void 0 : Me.id) ?? "") &&
      ((U6 = (Me == null ? void 0 : Me.id) ?? ""),
      (Fp = k4()),
      (nb = 0),
      window.dispatchEvent(new Event("progress-changed"))),
    !Me || ib || (!n && Date.now() - nb < 15e3))
  )
    return;
  const e = Me.id;
  ib = !0;
  try {
    const s = await tn("/me/progress");
    e === (Me == null ? void 0 : Me.id) &&
      Number.isFinite(s.xp) &&
      s.xp >= 0 &&
      (t = s.skills) != null &&
      t.xp &&
      (i = s.skills) != null &&
      i.stats &&
      ((Fp = s),
      (nb = Date.now()),
      window.dispatchEvent(new Event("progress-changed")));
  } catch {
  } finally {
    ib = !1;
  }
}
function Bm() {
  const n = document.createElement("section");
  n.className = "account-rank";
  const e = Fp.xp,
    t = Np(e),
    i = RANKS.indexOf(t),
    s = RANKS[i + 1],
    o = SETTINGS.language === "en",
    a = document.createElement("span");
  ((a.className = "rank-emblem"),
    (a.textContent = i >= 8 ? "★" : "❯"),
    a.setAttribute("aria-hidden", "true"));
  const r = document.createElement("div"),
    l = document.createElement("strong"),
    c = document.createElement("small"),
    h = document.createElement("progress");
  return (
    (l.textContent = o ? t.nameEn : t.name),
    (c.textContent = s
      ? `${e.toLocaleString()} / ${s.minXp.toLocaleString()} XP · ${o ? "Next: " : "Далее: "}${o ? s.nameEn : s.name}`
      : `${e.toLocaleString()} XP · ${o ? "Maximum rank" : "Высшее звание"}`),
    (h.max = s ? s.minXp - t.minXp : 1),
    (h.value = s ? e - t.minXp : 1),
    h.setAttribute("aria-label", c.textContent),
    r.append(l, c, h),
    n.append(a, r),
    n
  );
}
async function NY(n, e) {
  if ((await Of(), !Me)) return n;
  const t = (a) => {
      var r;
      try {
        return JSON.parse(
          new TextDecoder().decode(
            (r = n.find((l) => l.path === a)) == null ? void 0 : r.data,
          ),
        );
      } catch {
        return {};
      }
    },
    i = t("world/progression.json"),
    s = t("world/skills.json"),
    o = OY({ xp: i[e] ?? 0, skills: s[e] ?? { xp: {}, stats: {} } }, Fp);
  ((i[e] = o.xp), (s[e] = o.skills));
  for (const [a, r] of [
    ["world/progression.json", i],
    ["world/skills.json", s],
  ]) {
    const l = {
        path: a,
        data: new TextEncoder().encode(JSON.stringify(r)).buffer,
      },
      c = n.findIndex((h) => h.path === a);
    c >= 0 ? (n[c] = l) : n.push(l);
  }
  return n;
}
const Kd = [
    { gold: 40 },
    { gold: 60 },
    { gold: 80 },
    { gold: 120 },
    { gold: 0, case: !0 },
  ],
  DY = (n) => new Date(n).toISOString().slice(0, 10),
  Gy = () =>
    !ua &&
    typeof window < "u" &&
    "serviceWorker" in navigator &&
    "PushManager" in window &&
    "Notification" in window,
  BY = () => (Gy() ? Notification.permission : "unsupported");
function HY(n) {
  const e = atob(
    n
      .replace(/-/g, "+")
      .replace(/_/g, "/")
      .padEnd(Math.ceil(n.length / 4) * 4, "="),
  );
  return Uint8Array.from(e, (t) => t.charCodeAt(0));
}
const zY = (n, e) =>
  !!n &&
  n.byteLength === e.length &&
  new Uint8Array(n).every((t, i) => t === e[i]);
async function UY() {
  if (!(await navigator.serviceWorker.getRegistration())) return null;
  const e = await Promise.race([
    navigator.serviceWorker.ready,
    new Promise((i) => setTimeout(() => i(null), 6e3)),
  ]);
  if (!e) return null;
  await e.update().catch(() => {});
  const t = e.installing ?? e.waiting;
  return (
    t &&
      (await new Promise((i) => {
        const s = () => {
          (t.state === "activated" || t.state === "redundant") && i();
        };
        (t.addEventListener("statechange", s), s(), setTimeout(i, 25e3));
      })),
    e
  );
}
async function iI() {
  var o, a;
  const n = await UY();
  if (!n) return null;
  const e = HY((await tn("/push/key")).key);
  let t = await n.pushManager.getSubscription();
  (t &&
    !zY(t.options.applicationServerKey, e) &&
    (await t.unsubscribe(), (t = null)),
    t ??
      (t = await n.pushManager.subscribe({
        userVisibleOnly: !0,
        applicationServerKey: e,
      })));
  const i = t.toJSON();
  return !i.endpoint ||
    !((o = i.keys) != null && o.p256dh) ||
    !((a = i.keys) != null && a.auth)
    ? null
    : (
        await tn("/me/push", "POST", {
          endpoint: i.endpoint,
          keys: { p256dh: i.keys.p256dh, auth: i.keys.auth },
          lang: document.documentElement.lang === "ru" ? "ru" : "en",
        })
      ).state;
}
let Yd = null;
typeof navigator < "u" &&
  "serviceWorker" in navigator &&
  navigator.serviceWorker.addEventListener("message", (n) => {
    var e;
    ((e = n.data) == null ? void 0 : e.type) === "vr-push-confirmed" &&
      (Yd == null || Yd(Number(n.data.gold) || 0),
      window.dispatchEvent(
        new CustomEvent("vr-push-confirmed", {
          detail: { gold: Number(n.data.gold) || 0 },
        }),
      ));
  });
async function FY(n) {
  const e = await GY(n);
  return (e !== "denied" && ys("push_" + e), e);
}
async function GY(n) {
  if (!Gy()) return "unsupported";
  try {
    ys("push_prompt");
    const e =
      Notification.permission === "default"
        ? await Notification.requestPermission()
        : Notification.permission;
    if (e !== "granted")
      return (
        e === "denied" && ys("push_denied"),
        e === "denied" ? "denied" : "dismissed"
      );
    const t = new Promise((a) => {
        Yd = () => a(!0);
      }),
      i = await iI();
    if (!i) return "unsupported";
    if (i === "verified") return "confirmed";
    const s = (async () => {
        for (let a = 0; a < 12; a++)
          if (
            (await new Promise((r) => setTimeout(r, 2e3)),
            await n().catch(() => !1))
          )
            return !0;
        return !1;
      })(),
      o = await Promise.race([t, s]);
    return ((Yd = null), o ? "confirmed" : "pending");
  } catch (e) {
    return ((Yd = null), pY("push", e), "error");
  }
}
