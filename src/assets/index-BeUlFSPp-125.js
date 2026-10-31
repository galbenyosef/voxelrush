// index-BeUlFSPp 125 — queryselector
// Lines 71963-72307 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const ak = () =>
    new Date(wc.questsStart).toLocaleString(ao(), {
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    }),
  rk = (s) =>
    new Date(RV(s)).toLocaleDateString(ao(), { day: "numeric", month: "long" }),
  lk = () =>
    new Date(wc.end - 1).toLocaleDateString(ao(), {
      day: "numeric",
      month: "long",
      timeZone: "UTC",
    });
function G4(s) {
  if (s.hat) {
    const e = WS.find((t) => t.id === s.hat);
    return ps(e.en, e.ru);
  }
  if (s.finish) {
    const e = io(s.finish.id);
    return e
      ? s.finish.on === "armor"
        ? ps(`${e.name} · armour`, `${e.ru} · броня`)
        : ps(`${e.name} · all weapons`, `${e.ru} · всё оружие`)
      : "";
  }
  if (s.case) {
    const e = Tn[s.case];
    return e ? ps(e.name, e.ru) : ps("Case", "Кейс");
  }
  return `+${s.gold ?? 0}`;
}
function W4(s, e = !1) {
  const t = Qr("span", "hw-art" + (e ? " big" : "") + (s.gold ? " gold" : ""));
  if (s.gold && !s.hat && !s.finish)
    return ((t.innerHTML = xn(e ? 72 : 28)), t);
  if (s.case) {
    const o = Tn[s.case];
    return (
      t.classList.add("case"),
      (t.innerHTML = `<span class="rw-case${e ? " big" : ""}" style="--c1:${o?.colors[0] ?? "#3a2a12"};--c2:${o?.colors[1] ?? "#ffcf6a"}"><span class="ar-case-box"><i></i></span></span>`),
      t
    );
  }
  const i = Qr("img");
  return (
    (i.alt = ""),
    (i.decoding = "async"),
    t.append(i),
    (s.hat
      ? vr("hat", s.hat, 257, "ranger", e)
      : vr(
          e ? "showcase" : "weapon",
          s.finish.id,
          s.finish.on === "armor" ? 289 : 257,
          null,
          e,
        )
    )
      .then((o) => {
        i.src = o;
      })
      .catch(() => {}),
    t
  );
}
function mee() {
  ((Es = Qr("dialog", "sr-dialog hw-dialog")),
    Es.setAttribute("aria-labelledby", "hw-title"),
    Es.addEventListener("keydown", (s) => s.stopPropagation()),
    Es.addEventListener("cancel", (s) => {
      Es.querySelector(".sr-reward") && (s.preventDefault(), nN());
    }),
    Es.addEventListener("close", () => {
      (clearInterval(z4), eN?.focus?.());
    }),
    Es.addEventListener("click", (s) => {
      s.target === Es && !C0 && Es.close();
    }),
    document.body.append(Es));
}
function F1() {
  if (!Es) return;
  const s = sf[sf.length - 1];
  ((Es.innerHTML = `
  <header class="sr-head hw-head">
    <div class="sr-logo hw-logo">${U4}</div>
    <div class="sr-titles"><small>${ps(`HALLOWEEN · UNTIL ${lk().toUpperCase()}`, `ХЕЛЛОУИН · ДО ${lk().toUpperCase()}`)}</small><h2 id="hw-title">${ps("Fourteen nights to Halloween", "Четырнадцать ночей до Хеллоуина")}</h2></div>
    <button type="button" class="sr-close" aria-label="${ps("Close", "Закрыть")}">${bw(ww.close)}</button>
  </header>
  <div class="sr-body hw-body">
    <section class="hw-finale"><div class="hw-finale-text"><small>${ps("NIGHT 14 · HALLOWEEN · EXCLUSIVE · NEVER RETURNS", "НОЧЬ 14 · ХЕЛЛОУИН · ЭКСКЛЮЗИВ · БОЛЬШЕ НЕ ВЕРНЁТСЯ")}</small>
      <b>${G4(s.reward)}</b><span>${un && un.day === 0 ? ps(`The first night begins on ${ak()}. A new quest every day after it.`, `Первая ночь начнётся ${ak()}. Дальше — новое задание каждый день.`) : ps("A new night opens every day until Halloween. Missed one? It stays open: every battle counts for all of them.", "Новая ночь открывается каждый день до Хеллоуина. Пропустил? Она не сгорает: каждый бой засчитывается во все открытые.")}</span></div></section>
    <ol class="hw-quests"></ol>
    <p class="hw-foot">${ps("Battle rounds count on every official server: FRONTLINE, Team Deathmatch and Arms Race.", "Засчитываются раунды на всех официальных серверах: FRONTLINE, командный бой и гонка вооружений.")}</p>
    <p class="hw-status" role="status" aria-live="polite"></p>
  </div>
  <footer class="hw-actions"><button type="button" class="sr-primary hw-ok">${ps("Got it", "Понятно")}</button></footer>`),
    Es.querySelector(".hw-finale").prepend(W4(s.reward, !0)));
  const e = Es.querySelector(".hw-quests");
  (sf.forEach((t, i) => {
    const n = iN(i),
      o = Math.min(t.goal, un?.progress[i] ?? 0),
      a = Qr("li", `hw-quest ${n}`);
    ((a.dataset.day = String(t.day)),
      un &&
        t.day === un.day &&
        n === "open" &&
        a.setAttribute("aria-current", "step"));
    const r = un && t.day === un.day + 1 && un.nextAt,
      l =
        n === "locked"
          ? r
            ? ps(
                `Opens in ${ok(Date.parse(un.nextAt) - Date.now())}`,
                `Откроется через ${ok(Date.parse(un.nextAt) - Date.now())}`,
              )
            : ps(`Opens on ${rk(t.day)}`, `Откроется ${rk(t.day)}`)
          : "";
    a.innerHTML = `<span class="hw-night"><small>${ps("NIGHT", "НОЧЬ")}</small><b>${t.day}</b></span>
      <span class="hw-text"><b>${n === "locked" && !r ? ps("Sealed until its night", "Запечатано до своей ночи") : ps(t.en, t.ru)}</b>
        ${n === "locked" ? `<small class="hw-lock">${bw(ww.lock)}${l}</small>` : `<span class="hw-bar" style="--p:${((o / t.goal) * 100).toFixed(1)}%"><i></i></span><small>${o.toLocaleString(ao())} / ${t.goal.toLocaleString(ao())}</small>`}</span>
      <span class="hw-reward"></span>`;
    const c = a.querySelector(".hw-reward");
    if ((c.append(W4(t.reward), Qr("em", "", G4(t.reward))), n === "done")) {
      const h = Qr("button", "sr-primary hw-claim", ps("Claim", "Забрать"));
      ((h.type = "button"), (h.onclick = () => void gee(t.day)), c.append(h));
    }
    (n === "claimed" && c.append(Qr("span", "hw-done", bw(ww.check))),
      e.append(a));
  }),
    un || xT(qe ? ps("Loading…", "Загрузка…") : ""),
    (Es.querySelector(".sr-close").onclick = () => {
      C0 || Es.close();
    }),
    (Es.querySelector(".hw-ok").onclick = () => {
      C0 || Es.close();
    }));
}
async function Cm() {
  if ((Es || mee(), Es.open)) return;
  ((eN = document.activeElement), ln("halloween_open"), F1(), Es.showModal());
  let s = "";
  try {
    (qe || (await If()), await TT());
  } catch (e) {
    s = sN(e);
  }
  (F1(),
    s && xT(s, "error"),
    clearInterval(z4),
    (z4 = window.setInterval(() => {
      !C0 && !Es?.querySelector(".sr-reward") && F1();
    }, 3e4)));
}
async function gee(s) {
  if (C0 || !un) return;
  C0 = !0;
  const e = Es.querySelector(`.hw-quest[data-day="${s}"] .hw-claim`);
  e && ((e.disabled = !0), e.classList.add("loading"));
  try {
    const t = await Vi("/me/halloween/claim", "POST", { day: s });
    (ln("halloween_claim"), (un = t.event), F4());
    const { cosmeticProfile: i, refreshCosmetics: n } = await J7(
      async () => {
        const { cosmeticProfile: o, refreshCosmetics: a } =
          await Promise.resolve().then(() => lN);
        return { cosmeticProfile: o, refreshCosmetics: a };
      },
      void 0,
    );
    ((i.gold = t.profile.gold),
      (i.owned = t.profile.owned),
      t.profile.cases && (i.cases = t.profile.cases),
      window.dispatchEvent(new Event("cosmetics-changed")),
      (C0 = !1),
      F1(),
      yee(s, t.reward),
      n());
  } catch (t) {
    ((C0 = !1), await TT(), F1(), xT(sN(t), "error"));
  }
}
function nN() {
  const s = Es?.querySelector(".sr-reward");
  s &&
    (s.classList.add("out"),
    window.setTimeout(() => {
      (s.remove(), Es?.classList.remove("revealing"));
    }, 220));
}
function yee(s, e) {
  if (!Es) return;
  const t = Qr("div", "sr-reward hw-reveal");
  (t.setAttribute("role", "alertdialog"),
    t.setAttribute("aria-label", ps("Reward", "Награда")));
  const i = e.hat
    ? ps(
        "Find it in the Armory → Operators → Hats",
        "Она в Арсенале → Персонажи → Шапки",
      )
    : e.finish
      ? ps(
          "Equip it in the Armory. It is yours for good.",
          "Надень его в Арсенале. Он твой навсегда.",
        )
      : e.case
        ? ps(
            "It waits unopened in your Armory inventory.",
            "Он ждёт в инвентаре Арсенала — открой, когда захочешь.",
          )
        : ps("Added to your gold", "Добавлено к твоему золоту");
  ((t.innerHTML = `<div class="sr-reward-card hw-reveal-card"><div class="sr-burst"><div class="sr-rays"></div></div>
    <small>${ps(`NIGHT ${s} COMPLETE`, `НОЧЬ ${s} ПРОЙДЕНА`)}</small><b class="hw-reveal-name">${G4(e)}</b><p class="hw-note">${i}</p>
    <div class="hw-reveal-actions">${e.hat || e.finish || e.case ? `<button type="button" class="sr-primary hw-equip">${ps("Open the Armory", "Открыть Арсенал")}</button>` : ""}<button type="button" class="${e.hat || e.finish || e.case ? "hw-later" : "sr-primary"} sr-collect">${ps("Collect", "Забрать")}</button></div></div>`),
    t.querySelector(".sr-burst").append(W4(e, !0)),
    Es.classList.add("revealing"),
    (Es.scrollTop = 0),
    Es.append(t),
    (t.querySelector(".sr-collect").onclick = nN),
    t.querySelector(".hw-equip")?.addEventListener("click", () => {
      (t.remove(),
        Es.classList.remove("revealing"),
        Es.close(),
        J7(() => Promise.resolve().then(() => lN), void 0).then((n) =>
          e.case
            ? n.openOwnedCase(e.case)
            : n.openSkins(
                e.hat ? "character" : "loadout",
                e.finish?.on === "armor" ? 289 : 257,
              ),
        ));
    }),
    (t.querySelector(".hw-equip") ?? t.querySelector(".sr-collect")).focus());
}
function vee(s) {
  if (!Ga()) return () => {};
  document.body.classList.add("halloween");
  const e = document.querySelector("#menu .menu-hero");
  if (e && !e.querySelector(".hw-badge")) {
    const o = Qr("div", "hw-badge");
    e.prepend(o);
    const a = Qr("div", "hw-bats");
    (a.setAttribute("aria-hidden", "true"),
      (a.innerHTML = Array.from(
        { length: 5 },
        (r, l) =>
          `<i style="--i:${l}"><svg viewBox="0 0 40 16"><path d="M20 6c1-3 3-3 3-3l1 3c3-3 9-4 15-2-4 1-6 4-6 7-2-2-5-2-7 0-1-2-3-3-6-3s-5 1-6 3c-2-2-5-2-7 0 0-3-2-6-6-7 6-2 12-1 15 2l1-3s2 0 3 3z"/></svg></i>`,
      ).join("")),
      e.append(a));
  }
  const t = document.getElementById("playbtn");
  let i = document.getElementById("menuhalloween");
  t &&
    !i &&
    ((i = Qr("button", "btn secondary mm-halloween")),
    (i.id = "menuhalloween"),
    (i.type = "button"),
    t.after(i),
    (i.onclick = () => void Cm()));
  const n = () => {
    const o = document.querySelector("#menu .hw-badge");
    if (
      (o &&
        (o.innerHTML = `${U4}<span>${ps("Halloween update", "Хеллоуинское обновление")}</span>`),
      !i)
    )
      return;
    const a = pee(),
      r = un ? un.claimed.length : 0;
    (i.classList.toggle("ready", a > 0),
      (i.innerHTML = `${U4}<span class="mm-label"><b>${ps("Halloween quests", "Задания Хеллоуина")}</b><small>${ps("14 nights to Halloween · exclusive skins and hats", "14 ночей до Хеллоуина · эксклюзивные скины и шапки")}</small></span>
      <i class="mm-gain hw-gain">${a ? ps("Claim", "Забрать") : un ? `${r}/${wc.days}` : String(wc.days)}</i>`));
  };
  return (
    fee(n),
    n(),
    jo ||
      window.setTimeout(() => {
        let o = "";
        try {
          o = localStorage.getItem("vr-halloween-seen") ?? "";
        } catch {
          return;
        }
        if (!(o === wc.id || !s() || document.querySelector("dialog[open]"))) {
          try {
            localStorage.setItem("vr-halloween-seen", wc.id);
          } catch {}
          Cm();
        }
      }, 2600),
    n
  );
}
const bu = (s) => s !== w.AXE || qS();
let Lt = jS(),
  ck = "";
const Vt = (s, e) => I(s, e),
  we = Vt;
function lc(s = "store", e) {
  ((ff ??= aN()),
    (e = e === void 0 ? void 0 : gm(e)),
    ff.open(s === "weapon" ? "loadout" : s, e));
}
async function t3() {
  const s = qe?.id ?? "";
  if ((s !== ck && ((ck = s), (Lt = jS())), qe)) {
    const e = await Vi("/me/cosmetics");
    qe?.id === s && (Lt = e);
  } else
    try {
      const e = JSON.parse(
        localStorage.getItem("vr-local-cosmetics") ?? "null",
      );
      e && (Lt = { ...jS(), ...e, gold: 0, owned: [] });
    } catch {}
  return (window.dispatchEvent(new Event("cosmetics-changed")), Lt);
}
let ff;
const _T = () =>
    Object.entries(Lt.cases ?? {}).filter(([s, e]) => e > 0 && s in Tn),
  Uv = () => _T().reduce((s, [, e]) => s + e, 0);
async function oN(s) {
  ((ff ??= aN()), await ff.open("inventory"), s in Tn && ff.openOwned(s));
}
function $e(s, e = "", t = "") {
  const i = document.createElement(s);
  return (e && (i.className = e), t && (i.textContent = t), i);
}
function Yi(s, e, t) {
  const i = $e("button", s);
  return (
    (i.type = "button"),
    typeof e == "string" ? (i.textContent = e) : i.append(e),
    (i.onclick = t),
    i
  );
}
function dn(s, e, t = "span") {
  const i = $e(t, s);
  return ((i.innerHTML = e), i);
}
