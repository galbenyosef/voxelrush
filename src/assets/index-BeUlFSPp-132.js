// index-BeUlFSPp 132 — gold
// Lines 75905-76237 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Vee(s, e, t) {
  const i = ui("ol", "pp-ladder");
  (pa.forEach((a, r) => {
    const l = ui("li", "pp-step" + (r < e ? " done" : r === e ? " here" : "")),
      c = ui("img");
    ((c.src = Nd(r)), (c.alt = ""), (c.loading = "lazy"));
    const h = ui("span", "pp-step-name", I(a.nameEn, a.name)),
      d = ui(
        "span",
        "pp-step-xp",
        r === 0 ? I("start", "старт") : `${vo(a.minXp)} XP`,
      );
    (l.append(ui("i", "pp-step-n", String(r + 1)), c, h, d), i.append(l));
  }),
    s.append(i),
    requestAnimationFrame(() =>
      i.querySelector(".here")?.scrollIntoView({ block: "center" }),
    ));
  const n = ui("div", "pp-how");
  n.append(
    ui("div", "pp-sub", I("How experience is earned", "За что дают опыт")),
  );
  const o = [
    [
      I("A kill", "Убийство"),
      `${Gu(0, 0)}–${Gu(pa.length - 1, 0)} XP · ${I("the higher the enemy's rank, the more", "чем выше звание врага, тем больше")}`,
    ],
    [I("Headshot", "В голову"), "+20%"],
    [
      I("An enemy above your rank", "Враг старше вас по званию"),
      I("up to ×1.5", "до ×1,5"),
    ],
    [I("A vehicle", "Техника"), `${e_(L.DRONE)}–${e_(L.FIGHTER_JET)} XP`],
    [I("Flag captured", "Захват флага"), `${M_.capture / 10 + S_.capture} XP`],
    [
      I("Kill assist", "Помощь в убийстве"),
      `${M_.assist / 10 + S_.killAssist} XP`,
    ],
    [I("Victory", "Победа"), "50 XP"],
  ];
  for (const [a, r] of o) {
    const l = ui("div", "pp-how-row");
    (l.append(ui("span", "", a), ui("b", "", r)), n.append(l));
  }
  (t &&
    n.append(
      ui(
        "p",
        "pp-note",
        I(
          "Ranks are earned on every official server — FRONTLINE, Team Deathmatch, Arms Race and the open world — and stay with your account.",
          "Звания растут на всех официальных серверах — FRONTLINE, командный бой, Гонка вооружений и открытый мир — и остаются в аккаунте.",
        ),
      ),
    ),
    s.append(n));
}
let vk = "",
  Mw = !1,
  Sw = 0,
  Gf = kT();
async function u1(s = !1) {
  if (
    (vk !== (qe?.id ?? "") &&
      ((vk = qe?.id ?? ""),
      (Gf = kT()),
      (Sw = 0),
      window.dispatchEvent(new Event("progress-changed"))),
    !qe || Mw || (!s && Date.now() - Sw < 15e3))
  )
    return;
  const e = qe.id;
  Mw = !0;
  try {
    const t = await Vi("/me/progress");
    e === qe?.id &&
      Number.isFinite(t.xp) &&
      t.xp >= 0 &&
      t.skills?.xp &&
      t.skills?.stats &&
      ((Gf = t),
      (Sw = Date.now()),
      window.dispatchEvent(new Event("progress-changed")));
  } catch {
  } finally {
    Mw = !1;
  }
}
function Ew() {
  const s = Math.floor(Gf.xp),
    e = dm(s),
    t = new Intl.NumberFormat(ao()),
    i = document.createElement("button");
  ((i.type = "button"), (i.className = "account-rank"));
  const n = document.createElement("img");
  ((n.className = "rank-emblem"), (n.src = Nd(e.index)), (n.alt = ""));
  const o = document.createElement("div"),
    a = document.createElement("b"),
    r = document.createElement("strong"),
    l = document.createElement("span"),
    c = document.createElement("i"),
    h = document.createElement("small");
  ((a.className = "rank-nick"),
    (a.textContent = qe?.username ?? ""),
    (r.textContent = I(e.rank.nameEn, e.rank.name)),
    (l.className = "rank-track"),
    (c.style.width = `${(e.fraction * 100).toFixed(1)}%`),
    l.append(c),
    (h.className = "rank-nums"),
    (h.innerHTML = '<span class="rank-xp-icon" aria-hidden="true">XP</span>'),
    h.append(
      document.createTextNode(
        e.next ? `${t.format(s)} / ${t.format(e.to)}` : t.format(s),
      ),
    ),
    o.append(r, a, l, h),
    i.append(n, o));
  const d = e.next
    ? `${r.textContent} · ${t.format(s)} / ${t.format(e.to)} XP · ${I("Next: ", "Далее: ")}${I(e.next.nameEn, e.next.name)}`
    : `${r.textContent} · ${t.format(s)} XP`;
  return (
    (i.title = d),
    i.setAttribute("aria-label", d),
    (i.onclick = () => {
      qe && CT({ name: qe.username, xp: s, self: !0 });
    }),
    i
  );
}
async function qee(s, e) {
  if ((await u1(), !qe)) return s;
  const t = (a) => {
      try {
        return JSON.parse(
          new TextDecoder().decode(s.find((r) => r.path === a)?.data),
        );
      } catch {
        return {};
      }
    },
    i = t("world/progression.json"),
    n = t("world/skills.json"),
    o = Dee({ xp: i[e] ?? 0, skills: n[e] ?? { xp: {}, stats: {} } }, Gf);
  ((i[e] = o.xp), (n[e] = o.skills));
  for (const [a, r] of [
    ["world/progression.json", i],
    ["world/skills.json", n],
  ]) {
    const l = {
        path: a,
        data: new TextEncoder().encode(JSON.stringify(r)).buffer,
      },
      c = s.findIndex((h) => h.path === a);
    c >= 0 ? (s[c] = l) : s.push(l);
  }
  return s;
}
const pf = [
    { gold: 40 },
    { gold: 60 },
    { gold: 80 },
    { gold: 120 },
    { gold: 0, case: !0 },
  ],
  Kee = (s) => new Date(s).toISOString().slice(0, 10),
  i3 = () =>
    Pn ||
    (!jo &&
      typeof window < "u" &&
      "serviceWorker" in navigator &&
      "PushManager" in window &&
      "Notification" in window);
let Gv = "default";
const LT = () =>
  tp("pushStatus")
    .then((s) => ((Gv = s), s))
    .catch(() => Gv);
Pn && LT();
const fN = () => (Pn ? Gv : i3() ? Notification.permission : "unsupported"),
  Yee = () => {
    Pn && tp("openSettings").catch(() => {});
  };
async function pN() {
  let s;
  try {
    s = await tp("pushRegister");
  } catch (t) {
    if ((await LT(), t instanceof Error && /denied/.test(t.message)))
      return "denied";
    throw t;
  }
  Gv = "granted";
  const e = await Vi("/me/push", "POST", { apns: s, lang: wi() ? "ru" : "en" });
  return (
    e.state === "verified" &&
      e.gold &&
      window.dispatchEvent(
        new CustomEvent("vr-push-confirmed", { detail: { gold: e.gold } }),
      ),
    { state: e.state, gold: e.gold ?? 0 }
  );
}
Pn &&
  typeof window < "u" &&
  window.addEventListener("vr-native-push-open", (s) => {
    const { url: e, c: t } = s.detail ?? { url: "/", c: 0 },
      i = Vi("/push/click", "POST", t ? { c: t } : {}).catch(() => {});
    window.game?.running ||
      typeof e != "string" ||
      !e.startsWith("/") ||
      e === location.pathname + location.search ||
      Promise.race([i, new Promise((o) => setTimeout(o, 1500))]).then(() =>
        location.assign(e),
      );
  });
function jee(s) {
  const e = atob(
    s
      .replace(/-/g, "+")
      .replace(/_/g, "/")
      .padEnd(Math.ceil(s.length / 4) * 4, "="),
  );
  return Uint8Array.from(e, (t) => t.charCodeAt(0));
}
const Xee = (s, e) =>
  !!s &&
  s.byteLength === e.length &&
  new Uint8Array(s).every((t, i) => t === e[i]);
async function Zee() {
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
        const n = () => {
          (t.state === "activated" || t.state === "redundant") && i();
        };
        (t.addEventListener("statechange", n), n(), setTimeout(i, 25e3));
      })),
    e
  );
}
async function mN() {
  const s = await Zee();
  if (!s) return null;
  const e = jee((await Vi("/push/key")).key);
  let t = await s.pushManager.getSubscription();
  (t &&
    !Xee(t.options.applicationServerKey, e) &&
    (await t.unsubscribe(), (t = null)),
    (t ??= await s.pushManager.subscribe({
      userVisibleOnly: !0,
      applicationServerKey: e,
    })));
  const i = t.toJSON();
  return !i.endpoint || !i.keys?.p256dh || !i.keys?.auth
    ? null
    : (
        await Vi("/me/push", "POST", {
          endpoint: i.endpoint,
          keys: { p256dh: i.keys.p256dh, auth: i.keys.auth },
          lang: wi() ? "ru" : "en",
        })
      ).state;
}
let Hy = null;
typeof navigator < "u" &&
  "serviceWorker" in navigator &&
  navigator.serviceWorker.addEventListener("message", (s) => {
    s.data?.type === "vr-push-confirmed" &&
      (Hy?.(Number(s.data.gold) || 0),
      window.dispatchEvent(
        new CustomEvent("vr-push-confirmed", {
          detail: { gold: Number(s.data.gold) || 0 },
        }),
      ));
  });
async function Qee(s) {
  const e = await Jee(s);
  return (e !== "denied" && ln("push_" + e), e);
}
async function Jee(s) {
  if (!i3()) return "unsupported";
  if (Pn)
    try {
      ln("push_prompt");
      const e = await pN();
      return e === "denied"
        ? (ln("push_denied"), "denied")
        : e.state === "verified" || (await s().catch(() => !1))
          ? "confirmed"
          : "pending";
    } catch (e) {
      return (B4("push", e), "error");
    }
  try {
    ln("push_prompt");
    const e =
      Notification.permission === "default"
        ? await Notification.requestPermission()
        : Notification.permission;
    if (e !== "granted")
      return (
        e === "denied" && ln("push_denied"),
        e === "denied" ? "denied" : "dismissed"
      );
    const t = new Promise((a) => {
        Hy = () => a(!0);
      }),
      i = await mN();
    if (!i) return "unsupported";
    if (i === "verified") return "confirmed";
    const n = (async () => {
        for (let a = 0; a < 12; a++)
          if (
            (await new Promise((r) => setTimeout(r, 2e3)),
            await s().catch(() => !1))
          )
            return !0;
        return !1;
      })(),
      o = await Promise.race([t, n]);
    return ((Hy = null), o ? "confirmed" : "pending");
  } catch (e) {
    return ((Hy = null), B4("push", e), "error");
  }
}
