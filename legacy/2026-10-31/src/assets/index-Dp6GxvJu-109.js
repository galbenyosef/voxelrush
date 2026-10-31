// index-Dp6GxvJu 109 — queryselector
// Lines 67528-67866 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function Ur() {
  var o;
  if (!Lt) return;
  const n = Fi == null ? void 0 : Fi.daily,
    e = n ? n.day : 1,
    t = Kd.map((a, r) => {
      const l = r + 1,
        c = !!n && (l < e || (l === e && !n.claimable)),
        h = !!n && l === e && n.claimable;
      return `<li class="rw-day${c ? " done" : h ? " today" : ""}${a.case ? " case" : ""}"${h ? ' aria-current="step"' : ""}>
      <small>${ai("Day", "День")} ${l}</small>
      <span class="rw-prize">${a.case ? sI("mythos") : bs(30)}</span>
      <b>${a.case ? ai("Case", "Кейс") : "+" + a.gold}</b>
      ${c ? `<i class="rw-tick">${Sl(er.check)}</i>` : ""}</li>`;
    }).join(""),
    i = n ? Kd[e - 1] : Kd[0],
    s = XY()
      .map(
        (
          a,
        ) => `<button type="button" class="rw-task${a.done ? " done" : ""}" data-task="${a.id}"${a.done || a.disabled ? " disabled" : ""}>
      <span class="rw-task-icon">${Sl(a.icon)}</span>
      <span class="rw-task-text"><b>${a.title}</b><small>${a.hint}</small></span>
      ${a.done ? `<span class="rw-task-done">${Sl(er.check)}</span>` : `<span class="rw-gain">${bs(16)}<b>+${Hg(a.gold)}</b></span>${Sl(er.chevron, "rw-go")}`}
    </button>`,
      )
      .join("");
  ((Lt.innerHTML = `
  <header class="sr-head rw-head">
    <div class="sr-logo rw-logo">${Sl(er.gift)}</div>
    <div class="sr-titles"><small>${ai("COME BACK EVERY DAY", "ЗАХОДИ КАЖДЫЙ ДЕНЬ")}</small><h2 id="rw-title">${ai("Rewards", "Награды")}</h2></div>
    <div class="sr-wallet" title="${ai("Your gold", "Ваше золото")}">${bs(24, "spin")}<span><b>${Hg((Fi == null ? void 0 : Fi.gold) ?? Ot.gold)}</b><small>${ai("Gold", "Золото")}</small></span></div>
    <button type="button" class="sr-close" aria-label="${ai("Close", "Закрыть")}">${Sl(er.close)}</button>
  </header>
  <div class="sr-body rw-body">
    <section class="rw-daily">
      <div class="rw-daily-head"><h3>${ai("Daily bonus", "Ежедневный бонус")}</h3>${n && n.streak > 0 ? `<span class="rw-streak">${Sl(er.flame)}${ai(`${zg(n.streak)} in a row`, `${zg(n.streak)} подряд`)}</span>` : ""}</div>
      <ol class="rw-track" aria-label="${ai("Five-day track", "Пять дней")}">${t}</ol>
      ${Fi ? (n.claimable ? `<button type="button" class="sr-primary rw-claim">${i.case ? ai("Claim the case", "Забрать кейс") : `${ai("Claim", "Забрать")} ${bs(18)} +${i.gold}`}</button>` : `<div class="rw-wait">${ai("Next bonus in", "Следующий бонус через")} <b class="rw-clock">${aI(I4(n.nextAt))}</b></div>`) : `<div class="rw-wait">${ai("Loading…", "Загрузка…")}</div>`}
    </section>
    <section class="rw-tasks">
      <h3>${ai("More gold", "Ещё золото")}</h3>
      ${ZY()}
      ${s}
    </section>
    <p class="rw-status" role="status" aria-live="polite"></p>
  </div>`),
    (Lt.querySelector(".sr-close").onclick = () => {
      Qs || Lt.close();
    }),
    (o = Lt.querySelector(".rw-claim")) == null ||
      o.addEventListener("click", () => void JY()));
  for (const a of Lt.querySelectorAll(".rw-task"))
    a.onclick = () => void tj(a.dataset.task);
  f0();
}
function QY() {
  const n = Lt == null ? void 0 : Lt.querySelector(".rw-golden-clock");
  n && (n.textContent = cM(vg()));
  const e = Lt == null ? void 0 : Lt.querySelector(".rw-clock");
  if (!e || !Fi) return;
  const t = I4(Fi.daily.nextAt);
  ((e.textContent = aI(t)), t <= 0 && !Qs && pu().then(Ur));
}
async function P4(n = !1) {
  if ((Lt || jY(), Lt.open)) return;
  ((Td = document.activeElement),
    ys(n ? "rewards_auto" : "rewards_open"),
    Ur(),
    Lt.showModal(),
    f0());
  let e = "";
  try {
    Me || (await _p());
    const t = await tn(`/me/rewards?tz=${US()}`);
    qy(t);
  } catch (t) {
    e = L4(t);
  }
  (Ur(),
    e && ko(e, "error"),
    clearInterval(lM),
    (lM = window.setInterval(QY, 1e3)),
    Fi && !Fi.install.done && u0() && Ky());
}
async function JY() {
  if (Qs || !Fi) return;
  Qs = !0;
  const n = Lt.querySelector(".rw-claim");
  n && ((n.disabled = !0), n.classList.add("loading"));
  try {
    const e = await tn("/me/rewards/daily", "POST", {});
    (ys("daily_claim"),
      (Qs = !1),
      qy(e.state),
      Ur(),
      O4(
        e.grant.case
          ? {
              kind: "case",
              collection: e.grant.case,
              label: ai(
                `DAY ${e.grant.day} · ${zg(e.grant.streak).toUpperCase()} IN A ROW`,
                `ДЕНЬ ${e.grant.day} · ${zg(e.grant.streak).toUpperCase()} ПОДРЯД`,
              ),
            }
          : {
              kind: "gold",
              gold: e.grant.gold,
              label: ai(`DAY ${e.grant.day} BONUS`, `БОНУС ДНЯ ${e.grant.day}`),
              note: ej(e.grant.day),
            },
      ));
  } catch (e) {
    ((Qs = !1), await pu(), Ur(), ko(L4(e), "error"));
  }
}
function ej(n) {
  const e = Kd[n % Kd.length];
  return e.case
    ? ai(
        "Tomorrow: a case with a weapon finish",
        "Завтра: кейс со скином оружия",
      )
    : ai(`Tomorrow: +${e.gold} gold`, `Завтра: +${e.gold} золота`);
}
async function Ky() {
  if (!(Qs || !Me)) {
    Qs = !0;
    try {
      const n = await tn("/me/rewards/install", "POST", {});
      ((Qs = !1),
        qy(n.state),
        Lt != null && Lt.open && Ur(),
        n.granted &&
          (ys("install_ok"),
          (Lt != null && Lt.open) || (await P4(!0)),
          O4({
            kind: "gold",
            gold: n.granted,
            label: ai("GAME INSTALLED", "ИГРА УСТАНОВЛЕНА"),
            note: ai(
              "Voxel Rush is on your home screen now",
              "Voxel Rush теперь на главном экране",
            ),
          })));
    } catch (n) {
      ((Qs = !1), Lt != null && Lt.open && ko(L4(n), "error"));
    }
  }
}
async function tj(n) {
  var o;
  if (Qs || !Fi) return;
  if (n === "golden") {
    (Lt.close(),
      ys("golden_play"),
      (o = document.getElementById("playbtn")) == null || o.click());
    return;
  }
  if (n === "x") {
    (Lt.close(), ys("social_open"), Hy());
    return;
  }
  if (n === "install") {
    if (u0()) {
      Ky();
      return;
    }
    (ys("install_prompt"),
      (await nI()) !== "accepted"
        ? (ys("install_dismiss"),
          ko(
            ai(
              "Install cancelled. The bonus is waiting whenever you are ready.",
              "Установка отменена. Бонус подождёт.",
            ),
            "info",
          ))
        : ko(ai("Installing…", "Устанавливаем…")));
    return;
  }
  Qs = !0;
  const e = Lt.querySelector('[data-task="push"]');
  (e && ((e.disabled = !0), e.classList.add("loading")),
    ko(
      ai(
        "Allow notifications in the browser prompt…",
        "Разреши уведомления в окне браузера…",
      ),
    ));
  const t = Fi.gold,
    i = await FY(async () => {
      var a;
      return (
        ko(
          ai(
            "Sending a test notification…",
            "Отправляем проверочное уведомление…",
          ),
        ),
        !!((a = await pu()) != null && a.push.done)
      );
    });
  ((Qs = !1), await pu(), Ur());
  const s = ((Fi == null ? void 0 : Fi.gold) ?? t) - t;
  i === "confirmed"
    ? s > 0
      ? O4({
          kind: "gold",
          gold: s,
          label: ai("NOTIFICATIONS ON", "УВЕДОМЛЕНИЯ ВКЛЮЧЕНЫ"),
          note: ai(
            "You will hear about events and drops first",
            "Ты первым узнаешь о событиях и дропах",
          ),
        })
      : ko(ai("Notifications are on.", "Уведомления включены."), "success")
    : i === "denied"
      ? ko(
          ai(
            "Notifications are blocked for this site. Allow them in the browser settings and try again.",
            "Уведомления заблокированы для сайта. Разреши их в настройках браузера и попробуй снова.",
          ),
          "error",
        )
      : i === "pending"
        ? ko(
            ai(
              "The test notification did not arrive. Check that your browser may show notifications in the system settings, then try again.",
              "Проверочное уведомление не дошло. Проверь, что браузеру разрешены уведомления в настройках системы, и попробуй снова.",
            ),
            "error",
          )
        : i === "unsupported"
          ? ko(
              ai(
                "This browser cannot receive notifications. On iPhone, install the game first.",
                "Этот браузер не поддерживает уведомления. На iPhone сначала установи игру.",
              ),
              "error",
            )
          : i === "error"
            ? ko(
                ai(
                  "Could not turn notifications on. Try again in a moment.",
                  "Не удалось включить уведомления. Попробуй чуть позже.",
                ),
                "error",
              )
            : i === "dismissed"
              ? ko(
                  ai(
                    "The browser did not ask or the question was closed. Look for a bell or lock icon in the address bar, allow notifications there, then press again.",
                    "Браузер не спросил или вопрос был закрыт. Найди значок колокольчика или замка в адресной строке, разреши там уведомления и нажми ещё раз.",
                  ),
                  "info",
                )
              : ko("");
}
function hM() {
  const n = Lt == null ? void 0 : Lt.querySelector(".sr-reward");
  if (!n) return;
  (n.classList.add("out"),
    window.setTimeout(() => {
      (n.remove(), Lt == null || Lt.classList.remove("revealing"), f0());
    }, 220));
  const e = Lt == null ? void 0 : Lt.querySelector(".sr-wallet");
  (e == null || e.classList.add("bump"),
    window.setTimeout(
      () => (e == null ? void 0 : e.classList.remove("bump")),
      700,
    ));
}
function O4(n) {
  var i;
  if (!Lt) return;
  (i = Lt.querySelector(".sr-reward")) == null || i.remove();
  const e = oI("div", "sr-reward rw-reveal");
  if (
    (e.setAttribute("role", "alertdialog"),
    e.setAttribute("aria-label", ai("Reward", "Награда")),
    n.kind === "gold")
  ) {
    const s = Array.from({ length: 14 }, (c, h) => {
      const d = (h / 14) * Math.PI * 2 + Math.random() * 0.3,
        u = 110 + Math.random() * 80;
      return `<i style="--x:${(Math.cos(d) * u).toFixed(0)}px;--y:${(Math.sin(d) * u * 0.8).toFixed(0)}px;--d:${(Math.random() * 0.25).toFixed(2)}s;--s:${(0.6 + Math.random() * 0.6).toFixed(2)}">${bs(22)}</i>`;
    }).join("");
    e.innerHTML = `<div class="sr-reward-card">
      <div class="sr-burst"><div class="sr-rays"></div><div class="sr-coins">${s}</div><div class="sr-big-coin">${bs(96)}</div></div>
      <small>${n.label}</small>
      <b class="sr-amount">+0</b>
      <span class="sr-amount-label">${ai("gold coins", "золотых монет")}</span>
      ${n.note ? `<p class="rw-note">${n.note}</p>` : ""}
      <button type="button" class="sr-primary sr-collect">${ai("Collect", "Забрать")}</button>
    </div>`;
    const o = e.querySelector(".sr-amount"),
      a = performance.now(),
      r = 900,
      l = (c) => {
        const h = Math.min(1, (c - a) / r),
          d = 1 - Math.pow(1 - h, 3);
        ((o.textContent = "+" + Hg(n.gold * d)),
          h < 1 && e.isConnected
            ? requestAnimationFrame(l)
            : (o.textContent = "+" + Hg(n.gold)));
      };
    requestAnimationFrame(l);
  } else {
    const s = _s[n.collection];
    ((e.innerHTML = `<div class="sr-reward-card rw-case-card">
      <div class="sr-burst"><div class="sr-rays"></div>${sI(n.collection, "big")}</div>
      <small>${n.label}</small>
      <b class="rw-case-name">${s ? ai(s.name, s.ru) : ai("Case", "Кейс")}</b>
      <p class="rw-note">${ai("It is in your Armory inventory. Open it now or keep it for later.", "Он в инвентаре Арсенала. Открой сейчас или оставь на потом.")}</p>
      <div class="rw-reveal-actions">
        <button type="button" class="sr-primary rw-open-case">${ai("Open now", "Открыть сейчас")}</button>
        <button type="button" class="rw-later sr-collect">${ai("Later", "Позже")}</button>
      </div>
    </div>`),
      (e.querySelector(".rw-open-case").onclick = () => {
        (e.remove(),
          Lt.classList.remove("revealing"),
          Lt.close(),
          gY(n.collection));
      }));
  }
  ((Lt.scrollTop = 0),
    Lt.classList.add("revealing"),
    Lt.append(e),
    f0(),
    e.addEventListener("click", (s) => {
      s.target === e && hM();
    }));
  const t = e.querySelector(".sr-collect");
  ((t.onclick = hM), (e.querySelector(".rw-open-case") ?? t).focus());
}
const W6 = "vr-daily-auto";
