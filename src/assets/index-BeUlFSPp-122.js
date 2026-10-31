// index-BeUlFSPp 122 — queryselector
// Lines 70969-71275 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
async function j8() {
  try {
    if (localStorage.getItem(F7) !== "1") return;
  } catch {
    return;
  }
  if (!(!qe || qe.is_guest || Di?.open || hw)) {
    hw = !0;
    try {
      const s = await Vi("/me/social");
      ((is = s), X5(s.gold), s.unseen && (await Z5()));
    } catch {}
    hw = !1;
  }
}
async function V7() {
  try {
    const s = await Vi("/me/social/inbox", "POST", {});
    ((is = s.state), qc(), s.reward?.total && q7(s.reward, "background"));
  } catch {}
}
function Q5() {
  (clearTimeout(C4),
    !(!Di?.open || !is || !(is.queued > 0 || is.unseen > 0)) &&
      (C4 = window.setTimeout(async () => {
        if (!(!Di?.open || cw)) {
          cw = !0;
          try {
            const s = await Vi("/me/social"),
              e = is?.queued ?? 0;
            ((is = s),
              X5(s.gold),
              s.unseen
                ? await V7()
                : (qc(),
                  e &&
                    !s.queued &&
                    br(
                      Ht(
                        "Checked: no new reactions yet. We keep counting automatically.",
                        "Проверили: новых реакций пока нет. Мы продолжаем считать автоматически.",
                      ),
                      "info",
                      "posts",
                    )));
          } catch {}
          ((cw = !1), Q5());
        }
      }, 4e3)));
}
function qJ() {
  ((Di = W7("dialog", "sr-dialog")),
    Di.setAttribute("aria-labelledby", "sr-title"),
    Di.addEventListener("keydown", (s) => s.stopPropagation()),
    Di.addEventListener("cancel", (s) => {
      Di.querySelector(".sr-reward") && (s.preventDefault(), I4());
    }),
    Di.addEventListener("close", () => {
      (clearInterval(k4), clearTimeout(C4), G7?.focus?.());
    }),
    Di.addEventListener("click", (s) => {
      s.target === Di && Di.close();
    }),
    document.body.append(Di));
}
function qc() {
  if (!Di) return;
  const s = Di.querySelector(".sr-body")?.scrollTop ?? 0;
  Op || (ed = VJ(vu));
  const e = !!is && !is.canClaim;
  ((Di.innerHTML = `
  <header class="sr-head">
    <div class="sr-logo">${H1}</div>
    <div class="sr-titles"><small>${Ht("SUPPORT THE PROJECT", "ПОДДЕРЖКА ПРОЕКТА")}</small><h2 id="sr-title">${Ht("Share Voxel Rush — earn gold", "Расскажи о Voxel Rush — получи золото")}</h2></div>
    <div class="sr-wallet" title="${Ht("Your gold", "Ваше золото")}">${xn(24, "spin")}<span><b>${yo(Lt.gold)}</b><small>${Ht("Gold", "Золото")}</small></span></div>
    <button type="button" class="sr-close" aria-label="${Ht("Close", "Закрыть")}">${qo(Ca.close)}</button>
  </header>
  <div class="sr-body">
    <section class="sr-hero">
      <div class="sr-bonus">
        <div class="sr-bonus-coin">${xn(54, "spin")}</div>
        <div><b>+${yo(Ly)}</b><span class="sr-bonus-note">${Ht("for a post about the game", "за пост об игре")}</span></div>
      </div>
      <div class="sr-rates" aria-label="${Ht("Gold for each reaction", "Золото за каждую реакцию")}">
        ${bT.map((a) => `<div class="sr-rate" data-m="${a}">${qo(MT[a])}<span>${Ht(...wT[a])}</span><b>+${_4[a]}</b></div>`).join("")}
      </div>
      <p class="sr-pitch">${Ht("Every like, reply, repost, quote and bookmark on your post brings more gold — we recount your posts in the background and credit it automatically. Spend it on skins and cases in the Armory and help the game grow.", "Каждый лайк, комментарий, репост, цитата и закладка на твоём посте приносят ещё золото — мы сами пересчитываем посты в фоне и начисляем его автоматически. Трать золото на скины и кейсы в Арсенале и помогай игре расти.")}</p>
    </section>
    <div class="sr-steps">
      <section class="sr-step">
        <h3><i>1</i>${Ht("Publish a post", "Опубликуй пост")}</h3>
        <div class="sr-templates" role="radiogroup" aria-label="${Ht("Post text", "Текст поста")}">
          ${UJ.map((a) => `<button type="button" role="radio" aria-checked="${!Op && _m.find((r) => r.id === vu)?.group === a.id}" data-group="${a.id}">${Ht(a.en, a.ru)}</button>`).join("")}
          <button type="button" class="sr-shuffle" data-sound="tab" title="${Ht("Another text", "Другой текст")}" aria-label="${Ht("Another text", "Другой текст")}">${qo(Ca.shuffle)}<span>${Ht("Another", "Ещё")}</span></button>
        </div>
        <div class="sr-compose">
          <textarea class="sr-text" rows="4" maxlength="400" aria-label="${Ht("Post text", "Текст поста")}">${Gh(ed)}</textarea>
          <div class="sr-compose-foot">
            <span class="sr-linkchip" title="${Ht("Your personal link — keep it in the post", "Твоя личная ссылка — оставь её в посте")}">${qo(Ca.link)}<code>${is ? Gh(is.link.replace(/^https:\/\//, "")) : "…"}</code></span>
            <span class="sr-count"></span>
          </div>
        </div>
        <div class="sr-actions">
          <a class="sr-post" target="_blank" rel="noopener" href="#">${H1}<span>${Ht("Post on X", "Опубликовать в X")}</span></a>
          <button type="button" class="sr-copy">${qo(Ca.copy)}<span>${Ht("Copy text", "Копировать")}</span></button>
        </div>
        <p class="sr-note">${Ht("The link opens a playable card right in the post. Keep it in the text — that is how we know the post is yours.", "Ссылка превращается в карточку, где можно играть прямо в посте. Не удаляй её — по ней мы узнаём, что пост твой.")}</p>
      </section>
      <section class="sr-step">
        <h3><i>2</i>${Ht("Paste the post link", "Вставь ссылку на пост")}</h3>
        ${
          e
            ? `
        <div class="sr-guest">
          ${qo(Ca.user)}
          <p>${Ht("Gold is saved to your account. Link this guest profile (it keeps your progress) to claim rewards.", "Золото сохраняется на аккаунт. Привяжи гостевой профиль (прогресс сохранится), чтобы получать награды.")}</p>
          <button type="button" class="sr-primary sr-link-account">${Ht("Link account", "Привязать аккаунт")}</button>
        </div>`
            : `
        <form class="sr-claim" novalidate>
          <label class="sr-field">${H1}<input name="url" type="url" inputmode="url" autocomplete="off" spellcheck="false" placeholder="https://x.com/you/status/…" aria-label="${Ht("Link to your post on X", "Ссылка на твой пост в X")}"></label>
          <button type="submit" class="sr-primary sr-claim-btn">${xn(18)}<span>${Ht("Check and claim", "Проверить и получить")}</span></button>
        </form>`
        }
        <p class="sr-status" data-for="claim" role="status" aria-live="polite"></p>
        <ul class="sr-rules">
          <li>${qo(Ca.check)}${Ht(`+${yo(Ly)} gold for a post once every 24 hours`, `+${yo(Ly)} золота за пост раз в 24 часа`)}</li>
          <li>${qo(Ca.check)}${Ht(`Reactions are counted automatically for 30 days, up to ${yo(x4)} gold per post`, `Реакции считаются автоматически 30 дней, до ${yo(x4)} золота с поста`)}</li>
          <li>${qo(Ca.check)}${Ht(`Up to ${K8} posts a day; the account must be public`, `До ${K8} постов в сутки, аккаунт в X должен быть открытым`)}</li>
        </ul>
      </section>
    </div>
    <section class="sr-posts">
      <header>
        <div><h3>${Ht("My posts", "Мои посты")}</h3><small class="sr-total">${is ? Ht(`Earned in total: ${yo(is.totalEarned)} gold`, `Всего заработано: ${yo(is.totalEarned)} золота`) : ""}</small></div>
        <button type="button" class="sr-refresh">${qo(Ca.refresh)}<span></span></button>
      </header>
      <p class="sr-status" data-for="posts" role="status" aria-live="polite"></p>
      <div class="sr-list"></div>
    </section>
  </div>`),
    (Di.querySelector(".sr-close").onclick = () => Di.close()));
  for (const a of Di.querySelectorAll("[data-group]"))
    a.onclick = () => {
      ((vu = R4(a.dataset.group, vu)), (Op = !1), qc());
    };
  Di.querySelector(".sr-shuffle").onclick = () => {
    ((vu = R4(void 0, vu)), (Op = !1), qc());
  };
  const t = Di.querySelector(".sr-text");
  t.oninput = () => {
    ((ed = t.value),
      (Op = !0),
      Di.querySelectorAll("[data-group]").forEach((a) =>
        a.setAttribute("aria-checked", "false"),
      ),
      X8());
  };
  const i = Di.querySelector(".sr-post");
  ((i.onclick = (a) => {
    if (!is || i.classList.contains("disabled")) {
      a.preventDefault();
      return;
    }
    ((i.href = $7()),
      br(
        Ht(
          "Published? Copy the post link from X and paste it in step 2.",
          "Опубликовал? Скопируй ссылку на пост в X и вставь её во втором шаге.",
        ),
        "info",
      ),
      window.setTimeout(
        () => Di?.querySelector(".sr-claim input")?.focus(),
        400,
      ));
  }),
    (Di.querySelector(".sr-copy").onclick = async () => {
      if (is)
        try {
          (await navigator.clipboard.writeText(`${ed.trim()} ${is.link}`),
            br(
              Ht("Text with your link copied", "Текст со ссылкой скопирован"),
              "success",
            ));
        } catch {
          br(
            Ht(
              "Could not copy — select the text manually",
              "Не удалось скопировать — выдели текст вручную",
            ),
            "error",
          );
        }
    }),
    Di.querySelector(".sr-link-account")?.addEventListener("click", () => {
      (Di.close(), window.dispatchEvent(new Event("request-account-link")));
    }));
  const n = Di.querySelector(".sr-claim");
  (n &&
    (n.onsubmit = (a) => {
      (a.preventDefault(), jJ(n.querySelector("input").value));
    }),
    (Di.querySelector(".sr-refresh").onclick = () => void XJ()),
    X8(),
    YJ(),
    Rm());
  const o = Di.querySelector(".sr-body");
  o && (o.scrollTop = s);
}
function X8() {
  const s = GJ(ed),
    e = Di?.querySelector(".sr-count");
  e && ((e.textContent = `${s}/${lw}`), e.classList.toggle("over", s > lw));
  const t = Di?.querySelector(".sr-post");
  t &&
    (t.classList.toggle("disabled", !is || !ed.trim() || s > lw),
    is && (t.href = $7()));
}
function KJ(s) {
  return bT
    .map(
      (e) =>
        `<span class="sr-chip" data-m="${e}" title="${Ht(...wT[e])}">${qo(MT[e])}${yo(s.counts[e])}</span>`,
    )
    .join("");
}
function YJ() {
  const s = Di?.querySelector(".sr-list");
  if (s) {
    if (!is) {
      s.innerHTML =
        '<div class="sr-skeleton"></div><div class="sr-skeleton"></div>';
      return;
    }
    if (!is.posts.length) {
      s.innerHTML = `<div class="sr-empty">${H1}<b>${Ht("No posts yet", "Пока нет постов")}</b><span>${Ht("Publish your first post — the reward appears here instantly.", "Опубликуй первый пост — награда появится здесь сразу.")}</span></div>`;
      return;
    }
    s.innerHTML = is.posts
      .map((e) => {
        const t = {
            pending: Ht("Checking", "Проверяется"),
            active: Ht("Tracking", "Отслеживается"),
            ended: Ht("Finished", "Завершён"),
            deleted: Ht("Deleted", "Удалён"),
            rejected: Ht("Rejected", "Отклонён"),
          }[e.status],
          i = L4(e.nextCheckAt),
          n =
            e.status === "pending"
              ? Ht(
                  "X is slow — we will check it shortly",
                  "X медлит — проверим в ближайшее время",
                )
              : e.status === "rejected"
                ? Ht(...(Y8[e.reason ?? ""] ?? Y8.missing))
                : e.status === "active"
                  ? `${Eg(e.checkedAt)} · ${i > 0 ? Ht(`next check in ${Math.max(1, Math.round(i / 6e4))} min`, `следующая проверка через ${Math.max(1, Math.round(i / 6e4))} мин`) : Ht("checking now…", "проверяем…")}`
                  : Eg(e.checkedAt);
        return `<article class="sr-card" data-status="${e.status}">
      <div class="sr-card-head">
        <span class="sr-avatar">${Gh((e.author || "X").slice(0, 1).toUpperCase())}</span>
        <span class="sr-author"><b>${e.author ? "@" + Gh(e.author) : Ht("Your post", "Твой пост")}</b><small>${Ht(`added ${Eg(e.claimedAt)}`, `добавлен ${Eg(e.claimedAt)}`)}</small></span>
        <span class="sr-badge" data-status="${e.status}">${t}</span>
        <a class="sr-open" href="${Gh(e.url)}" target="_blank" rel="noopener" aria-label="${Ht("Open post", "Открыть пост")}">${qo(Ca.open)}</a>
      </div>
      <p class="sr-meta" data-status="${e.status}">${qo(e.status === "rejected" ? Ca.close : Ca.clock)}<span>${Gh(n)}</span></p>
      <p class="sr-excerpt">${Gh(e.text.replace(/https?:\/\/\S+/g, "").trim() || (e.status === "pending" ? Ht("Waiting for X…", "Ждём ответа X…") : "…"))}</p>
      <div class="sr-card-foot">
        <div class="sr-chips">${KJ(e)}</div>
        <div class="sr-earned">${xn(18)}<b>+${yo(e.earned + e.bonus)}</b></div>
      </div>
      <div class="sr-meter" title="${Ht("Engagement gold from this post", "Золото за активность с этого поста")}"><i style="width:${Math.min(100, (e.earned / x4) * 100).toFixed(1)}%"></i></div>
    </article>`;
      })
      .join("");
  }
}
function Rm() {
  const s = Di?.querySelector(".sr-bonus-note"),
    e = L4(is?.nextBonusAt ?? null);
  s &&
    ((s.textContent =
      e > 0
        ? Ht(`next post bonus in ${Sg(e)}`, `следующий бонус через ${Sg(e)}`)
        : Ht("for a post about the game", "за пост об игре")),
    s.classList.toggle("wait", e > 0));
  const t = Di?.querySelector(".sr-refresh");
  if (!t || !is) return;
  const i = L4(is.nextRefreshAt),
    n = is.posts.some((r) => r.status === "active"),
    o = t.querySelector("span"),
    a = xl === "refresh" || is.queued > 0;
  ((t.disabled = xl !== null || i > 0 || !n || !is.canClaim),
    t.classList.toggle("spinning", a),
    t.classList.toggle("cooldown", i > 0 && !a),
    (o.textContent = a
      ? Ht("Checking in the background…", "Проверяем в фоне…")
      : i > 0
        ? Ht(`Check again in ${Sg(i)}`, `Снова через ${Sg(i)}`)
        : Ht("Check now", "Проверить сейчас")),
    (t.title = Ht(
      "Reactions are recounted automatically. This moves your posts to the front of the queue (once every 15 minutes).",
      "Реакции пересчитываются автоматически. Кнопка ставит твои посты в начало очереди (раз в 15 минут).",
    )));
}
