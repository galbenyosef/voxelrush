// index-BeUlFSPp 134 — queryselector
// Lines 76539-76829 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Ol() {
  if (!vi) return;
  const s = bs?.daily,
    e = s ? s.day : 1,
    t = pf
      .map((o, a) => {
        const r = a + 1,
          l = !!s && (r < e || (r === e && !s.claimable)),
          c = !!s && r === e && s.claimable;
        return `<li class="rw-day${l ? " done" : c ? " today" : ""}${o.case ? " case" : ""}"${c ? ' aria-current="step"' : ""}>
      <small>${ti(`Day ${r}`, `День ${r}`)}</small>
      <span class="rw-prize">${o.case ? yN("mythos") : xn(30)}</span>
      <b>${o.case ? ti("Case", "Кейс") : "+" + o.gold}</b>
      ${l ? `<i class="rw-tick">${cc(Gr.check)}</i>` : ""}</li>`;
      })
      .join(""),
    i = s ? pf[e - 1] : pf[0],
    n = ote()
      .map(
        (
          o,
        ) => `<button type="button" class="rw-task${o.done ? " done" : ""}" data-task="${o.id}"${o.done || o.disabled ? " disabled" : ""}>
      <span class="rw-task-icon">${cc(o.icon)}</span>
      <span class="rw-task-text"><b>${o.title}</b><small>${o.hint}</small></span>
      ${o.done ? `<span class="rw-task-done">${cc(Gr.check)}</span>` : `<span class="rw-gain">${xn(16)}<b>+${Wv(o.gold)}</b></span>${cc(Gr.chevron, "rw-go")}`}
    </button>`,
      )
      .join("");
  ((vi.innerHTML = `
  <header class="sr-head rw-head">
    <div class="sr-logo rw-logo">${cc(Gr.gift)}</div>
    <div class="sr-titles"><small>${ti("COME BACK EVERY DAY", "ЗАХОДИ КАЖДЫЙ ДЕНЬ")}</small><h2 id="rw-title">${ti("Rewards", "Награды")}</h2></div>
    <div class="sr-wallet" title="${ti("Your gold", "Ваше золото")}">${xn(24, "spin")}<span><b>${Wv(bs?.gold ?? Lt.gold)}</b><small>${ti("Gold", "Золото")}</small></span></div>
    <button type="button" class="sr-close" aria-label="${ti("Close", "Закрыть")}">${cc(Gr.close)}</button>
  </header>
  <div class="sr-body rw-body">
    <section class="rw-daily">
      <div class="rw-daily-head"><h3>${ti("Daily bonus", "Ежедневный бонус")}</h3>${s && s.streak > 0 ? `<span class="rw-streak">${cc(Gr.flame)}${ti(`${$v(s.streak)} in a row`, `${$v(s.streak)} подряд`)}</span>` : ""}</div>
      <ol class="rw-track" aria-label="${ti("Five-day track", "Пять дней")}">${t}</ol>
      ${bs ? (s.claimable ? `<button type="button" class="sr-primary rw-claim">${i.case ? ti("Claim the case", "Забрать кейс") : `${ti("Claim", "Забрать")} ${xn(18)} +${i.gold}`}</button>` : `<div class="rw-wait">${ti("Next bonus in", "Следующий бонус через")} <b class="rw-clock">${wN(PT(s.nextAt))}</b></div>`) : `<div class="rw-wait">${ti("Loading…", "Загрузка…")}</div>`}
    </section>
    <section class="rw-tasks">
      <h3>${ti("More gold", "Ещё золото")}</h3>
      ${ate()}
      ${n}
    </section>
    <p class="rw-status" role="status" aria-live="polite"></p>
  </div>`),
    (vi.querySelector(".sr-close").onclick = () => {
      wo || vi.close();
    }),
    vi.querySelector(".rw-claim")?.addEventListener("click", () => void lte()));
  for (const o of vi.querySelectorAll(".rw-task"))
    o.onclick = () => void hte(o.dataset.task);
  dd();
}
function rte() {
  const s = vi?.querySelector(".rw-golden-clock");
  s && (s.textContent = j4(vv()));
  const e = vi?.querySelector(".rw-clock");
  if (!e || !bs) return;
  const t = PT(bs.daily.nextAt);
  ((e.textContent = wN(t)), t <= 0 && !wo && Wf().then(Ol));
}
async function OT(s = !1) {
  if ((vi || nte(), vi.open)) return;
  ((vN = document.activeElement),
    ln(s ? "rewards_auto" : "rewards_open"),
    Ol(),
    vi.showModal(),
    dd());
  let e = "";
  try {
    qe || (await If());
    const t = await Vi(`/me/rewards?tz=${DA()}`);
    o3(t);
  } catch (t) {
    e = IT(t);
  }
  (Ol(),
    e && $o(e, "error"),
    clearInterval(Y4),
    (Y4 = window.setInterval(rte, 1e3)),
    bs && !bs.install.done && hd() && a3());
}
async function lte() {
  if (wo || !bs) return;
  wo = !0;
  const s = vi.querySelector(".rw-claim");
  s && ((s.disabled = !0), s.classList.add("loading"));
  try {
    const e = await Vi("/me/rewards/daily", "POST", {});
    (ln("daily_claim"),
      (wo = !1),
      o3(e.state),
      Ol(),
      NT(
        e.grant.case
          ? {
              kind: "case",
              collection: e.grant.case,
              label: ti(
                `DAY ${e.grant.day} · ${$v(e.grant.streak).toUpperCase()} IN A ROW`,
                `ДЕНЬ ${e.grant.day} · ${$v(e.grant.streak).toUpperCase()} ПОДРЯД`,
              ),
            }
          : {
              kind: "gold",
              gold: e.grant.gold,
              label: ti(`DAY ${e.grant.day} BONUS`, `БОНУС ДНЯ ${e.grant.day}`),
              note: cte(e.grant.day),
            },
      ));
  } catch (e) {
    ((wo = !1), await Wf(), Ol(), $o(IT(e), "error"));
  }
}
function cte(s) {
  const e = pf[s % pf.length];
  return e.case
    ? ti(
        "Tomorrow: a case with a weapon finish",
        "Завтра: кейс со скином оружия",
      )
    : ti(`Tomorrow: +${e.gold} gold`, `Завтра: +${e.gold} золота`);
}
async function a3() {
  if (!(wo || !qe)) {
    wo = !0;
    try {
      const s = await Vi("/me/rewards/install", "POST", {});
      ((wo = !1),
        o3(s.state),
        vi?.open && Ol(),
        s.granted &&
          (ln("install_ok"),
          vi?.open || (await OT(!0)),
          NT({
            kind: "gold",
            gold: s.granted,
            label: ti("GAME INSTALLED", "ИГРА УСТАНОВЛЕНА"),
            note: ti(
              "Voxel Rush is on your home screen now",
              "Voxel Rush теперь на главном экране",
            ),
          })));
    } catch (s) {
      ((wo = !1), vi?.open && $o(IT(s), "error"));
    }
  }
}
async function hte(s) {
  if (wo || !bs) return;
  if (s === "golden") {
    (vi.close(),
      ln("golden_play"),
      document.getElementById("playbtn")?.click());
    return;
  }
  if (s === "x") {
    (vi.close(), ln("social_open"), Z5());
    return;
  }
  if (s === "install") {
    if (hd()) {
      a3();
      return;
    }
    (ln("install_prompt"),
      (await gN()) !== "accepted"
        ? (ln("install_dismiss"),
          $o(
            ti(
              "Install cancelled. The bonus is waiting whenever you are ready.",
              "Установка отменена. Бонус подождёт.",
            ),
            "info",
          ))
        : $o(ti("Installing…", "Устанавливаем…")));
    return;
  }
  if (Pn && fN() === "denied") {
    Yee();
    return;
  }
  wo = !0;
  const e = vi.querySelector('[data-task="push"]');
  (e && ((e.disabled = !0), e.classList.add("loading")),
    $o(
      Pn
        ? ti(
            "Allow notifications in the iPhone prompt…",
            "Разреши уведомления в окне iPhone…",
          )
        : ti(
            "Allow notifications in the browser prompt…",
            "Разреши уведомления в окне браузера…",
          ),
    ));
  const t = bs.gold,
    i = await Qee(
      async () => (
        $o(
          ti(
            "Sending a test notification…",
            "Отправляем проверочное уведомление…",
          ),
        ),
        !!(await Wf())?.push.done
      ),
    );
  ((wo = !1), await Wf(), Ol());
  const n = (bs?.gold ?? t) - t;
  i === "confirmed"
    ? n > 0
      ? NT({
          kind: "gold",
          gold: n,
          label: ti("NOTIFICATIONS ON", "УВЕДОМЛЕНИЯ ВКЛЮЧЕНЫ"),
          note: ti(
            "You will hear about events and drops first",
            "Ты первым узнаешь о событиях и дропах",
          ),
        })
      : $o(ti("Notifications are on.", "Уведомления включены."), "success")
    : i === "denied"
      ? $o(
          Pn
            ? ti(
                "Notifications are off for Voxel Rush. Turn them on in Settings → Notifications and try again.",
                "Уведомления для Voxel Rush выключены. Включи их в Настройки → Уведомления и попробуй снова.",
              )
            : ti(
                "Notifications are blocked for this site. Allow them in the browser settings and try again.",
                "Уведомления заблокированы для сайта. Разреши их в настройках браузера и попробуй снова.",
              ),
          "error",
        )
      : i === "pending" && Pn
        ? $o(
            ti(
              "Apple did not confirm the device yet. Check your connection and try again in a minute.",
              "Apple пока не подтвердил устройство. Проверь интернет и попробуй снова через минуту.",
            ),
            "error",
          )
        : i === "pending"
          ? $o(
              ti(
                "The test notification did not arrive. Check that your browser may show notifications in the system settings, then try again.",
                "Проверочное уведомление не дошло. Проверь, что браузеру разрешены уведомления в настройках системы, и попробуй снова.",
              ),
              "error",
            )
          : i === "unsupported"
            ? $o(
                ti(
                  "This browser cannot receive notifications. On iPhone, install the game first.",
                  "Этот браузер не поддерживает уведомления. На iPhone сначала установи игру.",
                ),
                "error",
              )
            : i === "error"
              ? $o(
                  ti(
                    "Could not turn notifications on. Try again in a moment.",
                    "Не удалось включить уведомления. Попробуй чуть позже.",
                  ),
                  "error",
                )
              : i === "dismissed"
                ? $o(
                    ti(
                      "The browser did not ask or the question was closed. Look for a bell or lock icon in the address bar, allow notifications there, then press again.",
                      "Браузер не спросил или вопрос был закрыт. Найди значок колокольчика или замка в адресной строке, разреши там уведомления и нажми ещё раз.",
                    ),
                    "info",
                  )
                : $o("");
}
function X4() {
  const s = vi?.querySelector(".sr-reward");
  if (!s) return;
  (s.classList.add("out"),
    window.setTimeout(() => {
      (s.remove(), vi?.classList.remove("revealing"), dd());
    }, 220));
  const e = vi?.querySelector(".sr-wallet");
  (e?.classList.add("bump"),
    window.setTimeout(() => e?.classList.remove("bump"), 700));
}
