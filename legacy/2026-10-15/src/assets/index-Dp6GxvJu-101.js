// index-Dp6GxvJu 101 — queryselector
// Lines 63363-63689 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function th() {
  var a, r;
  if (!zt) return;
  const n =
    ((a = zt.querySelector(".sr-body")) == null ? void 0 : a.scrollTop) ?? 0;
  Pm || (o0 = ZK(K5));
  const e = !!Ei && !Ei.canClaim;
  ((zt.innerHTML = `
  <header class="sr-head">
    <div class="sr-logo">${X_LOGO_SVG}</div>
    <div class="sr-titles"><small>${localized("SUPPORT THE PROJECT", "ПОДДЕРЖКА ПРОЕКТА")}</small><h2 id="sr-title">${localized("Share Voxel Rush — earn gold", "Расскажи о Voxel Rush — получи золото")}</h2></div>
    <div class="sr-wallet" title="${localized("Your gold", "Ваше золото")}">${bs(24, "spin")}<span><b>${Xs(Ot.gold)}</b><small>${localized("Gold", "Золото")}</small></span></div>
    <button type="button" class="sr-close" aria-label="${localized("Close", "Закрыть")}">${wrapSvgIcon(Ta.close)}</button>
  </header>
  <div class="sr-body">
    <section class="sr-hero">
      <div class="sr-bonus">
        <div class="sr-bonus-coin">${bs(54, "spin")}</div>
        <div><b>+${Xs(U2)}</b><span class="sr-bonus-note">${localized("for a post about the game", "за пост об игре")}</span></div>
      </div>
      <div class="sr-rates" aria-label="${localized("Gold for each reaction", "Золото за каждую реакцию")}">
        ${SOCIAL_METRICS.map((l) => `<div class="sr-rate" data-m="${l}">${wrapSvgIcon(T4[l])}<span>${localized(...x4[l])}</span><b>+${SOCIAL_SCORES[l]}</b></div>`).join("")}
      </div>
      <p class="sr-pitch">${localized("Every like, reply, repost, quote and bookmark on your post brings more gold — we recount your posts in the background and credit it automatically. Spend it on skins and cases in the Armory and help the game grow.", "Каждый лайк, комментарий, репост, цитата и закладка на твоём посте приносят ещё золото — мы сами пересчитываем посты в фоне и начисляем его автоматически. Трать золото на скины и кейсы в Арсенале и помогай игре расти.")}</p>
    </section>
    <div class="sr-steps">
      <section class="sr-step">
        <h3><i>1</i>${localized("Publish a post", "Опубликуй пост")}</h3>
        <div class="sr-templates" role="radiogroup" aria-label="${localized("Post text", "Текст поста")}">
          ${Bg.map((l, c) => `<button type="button" role="radio" aria-checked="${l.id === K5 && !Pm}" data-template="${l.id}">${[localized("Invite", "Приглашение"), localized("Squad", "Отряд"), localized("Fortress", "Крепость")][c]}</button>`).join("")}
        </div>
        <div class="sr-compose">
          <textarea class="sr-text" rows="4" maxlength="400" aria-label="${localized("Post text", "Текст поста")}">${Yh(o0)}</textarea>
          <div class="sr-compose-foot">
            <span class="sr-linkchip" title="${localized("Your personal link — keep it in the post", "Твоя личная ссылка — оставь её в посте")}">${wrapSvgIcon(Ta.link)}<code>${Ei ? Yh(Ei.link.replace(/^https:\/\//, "")) : "…"}</code></span>
            <span class="sr-count"></span>
          </div>
        </div>
        <div class="sr-actions">
          <a class="sr-post" target="_blank" rel="noopener" href="#">${X_LOGO_SVG}<span>${localized("Post on X", "Опубликовать в X")}</span></a>
          <button type="button" class="sr-copy">${wrapSvgIcon(Ta.copy)}<span>${localized("Copy text", "Копировать")}</span></button>
        </div>
        <p class="sr-note">${localized("The link opens a playable card right in the post. Keep it in the text — that is how we know the post is yours.", "Ссылка превращается в карточку, где можно играть прямо в посте. Не удаляй её — по ней мы узнаём, что пост твой.")}</p>
      </section>
      <section class="sr-step">
        <h3><i>2</i>${localized("Paste the post link", "Вставь ссылку на пост")}</h3>
        ${
          e
            ? `
        <div class="sr-guest">
          ${wrapSvgIcon(Ta.user)}
          <p>${localized("Gold is saved to your account. Link this guest profile (it keeps your progress) to claim rewards.", "Золото сохраняется на аккаунт. Привяжи гостевой профиль (прогресс сохранится), чтобы получать награды.")}</p>
          <button type="button" class="sr-primary sr-link-account">${localized("Link account", "Привязать аккаунт")}</button>
        </div>`
            : `
        <form class="sr-claim" novalidate>
          <label class="sr-field">${X_LOGO_SVG}<input name="url" type="url" inputmode="url" autocomplete="off" spellcheck="false" placeholder="https://x.com/you/status/…" aria-label="${localized("Link to your post on X", "Ссылка на твой пост в X")}"></label>
          <button type="submit" class="sr-primary sr-claim-btn">${bs(18)}<span>${localized("Check and claim", "Проверить и получить")}</span></button>
        </form>`
        }
        <p class="sr-status" data-for="claim" role="status" aria-live="polite"></p>
        <ul class="sr-rules">
          <li>${wrapSvgIcon(Ta.check)}${localized(`+${Xs(U2)} gold for a post once every 24 hours`, `+${Xs(U2)} золота за пост раз в 24 часа`)}</li>
          <li>${wrapSvgIcon(Ta.check)}${localized(`Reactions are counted automatically for 30 days, up to ${Xs(Kw)} gold per post`, `Реакции считаются автоматически 30 дней, до ${Xs(Kw)} золота с поста`)}</li>
          <li>${wrapSvgIcon(Ta.check)}${localized(`Up to ${E6} posts a day; the account must be public`, `До ${E6} постов в сутки, аккаунт в X должен быть открытым`)}</li>
        </ul>
      </section>
    </div>
    <section class="sr-posts">
      <header>
        <div><h3>${localized("My posts", "Мои посты")}</h3><small class="sr-total">${Ei ? localized(`Earned in total: ${Xs(Ei.totalEarned)} gold`, `Всего заработано: ${Xs(Ei.totalEarned)} золота`) : ""}</small></div>
        <button type="button" class="sr-refresh">${wrapSvgIcon(Ta.refresh)}<span></span></button>
      </header>
      <p class="sr-status" data-for="posts" role="status" aria-live="polite"></p>
      <div class="sr-list"></div>
    </section>
  </div>`),
    (zt.querySelector(".sr-close").onclick = () => zt.close()));
  for (const l of zt.querySelectorAll("[data-template]"))
    l.onclick = () => {
      ((K5 = l.dataset.template), (Pm = !1), th());
    };
  const t = zt.querySelector(".sr-text");
  t.oninput = () => {
    ((o0 = t.value),
      (Pm = !0),
      zt
        .querySelectorAll("[data-template]")
        .forEach((l) => l.setAttribute("aria-checked", "false")),
      A6());
  };
  const i = zt.querySelector(".sr-post");
  ((i.onclick = (l) => {
    if (!Ei || i.classList.contains("disabled")) {
      l.preventDefault();
      return;
    }
    ((i.href = UL()),
      Oa(
        localized(
          "Published? Copy the post link from X and paste it in step 2.",
          "Опубликовал? Скопируй ссылку на пост в X и вставь её во втором шаге.",
        ),
        "info",
      ),
      window.setTimeout(() => {
        var c;
        return (c =
          zt == null ? void 0 : zt.querySelector(".sr-claim input")) == null
          ? void 0
          : c.focus();
      }, 400));
  }),
    (zt.querySelector(".sr-copy").onclick = async () => {
      if (Ei)
        try {
          (await navigator.clipboard.writeText(`${o0.trim()} ${Ei.link}`),
            Oa(
              localized("Text with your link copied", "Текст со ссылкой скопирован"),
              "success",
            ));
        } catch {
          Oa(
            localized(
              "Could not copy — select the text manually",
              "Не удалось скопировать — выдели текст вручную",
            ),
            "error",
          );
        }
    }),
    (r = zt.querySelector(".sr-link-account")) == null ||
      r.addEventListener("click", () => {
        (zt.close(), window.dispatchEvent(new Event("request-account-link")));
      }));
  const s = zt.querySelector(".sr-claim");
  (s &&
    (s.onsubmit = (l) => {
      (l.preventDefault(), tY(s.querySelector("input").value));
    }),
    (zt.querySelector(".sr-refresh").onclick = () => void iY()),
    A6(),
    eY(),
    zp());
  const o = zt.querySelector(".sr-body");
  o && (o.scrollTop = n);
}
function A6() {
  const n = jK(o0),
    e = zt == null ? void 0 : zt.querySelector(".sr-count");
  e && ((e.textContent = `${n}/${q5}`), e.classList.toggle("over", n > q5));
  const t = zt == null ? void 0 : zt.querySelector(".sr-post");
  t &&
    (t.classList.toggle("disabled", !Ei || !o0.trim() || n > q5),
    Ei && (t.href = UL()));
}
function JK(n) {
  return SOCIAL_METRICS.map(
    (e) =>
      `<span class="sr-chip" data-m="${e}" title="${localized(...x4[e])}">${wrapSvgIcon(T4[e])}${Xs(n.counts[e])}</span>`,
  ).join("");
}
function eY() {
  const n = zt == null ? void 0 : zt.querySelector(".sr-list");
  if (n) {
    if (!Ei) {
      n.innerHTML =
        '<div class="sr-skeleton"></div><div class="sr-skeleton"></div>';
      return;
    }
    if (!Ei.posts.length) {
      n.innerHTML = `<div class="sr-empty">${X_LOGO_SVG}<b>${localized("No posts yet", "Пока нет постов")}</b><span>${localized("Publish your first post — the reward appears here instantly.", "Опубликуй первый пост — награда появится здесь сразу.")}</span></div>`;
      return;
    }
    n.innerHTML = Ei.posts
      .map((e) => {
        const t = {
            pending: localized("Checking", "Проверяется"),
            active: localized("Tracking", "Отслеживается"),
            ended: localized("Finished", "Завершён"),
            deleted: localized("Deleted", "Удалён"),
            rejected: localized("Rejected", "Отклонён"),
          }[e.status],
          i = Zw(e.nextCheckAt),
          s =
            e.status === "pending"
              ? localized(
                  "X is slow — we will check it shortly",
                  "X медлит — проверим в ближайшее время",
                )
              : e.status === "rejected"
                ? localized(...(SOCIAL_RULES[e.reason ?? ""] ?? SOCIAL_RULES.missing))
                : e.status === "active"
                  ? `${Nm(e.checkedAt)} · ${i > 0 ? localized(`next check in ${Math.max(1, Math.round(i / 6e4))} min`, `следующая проверка через ${Math.max(1, Math.round(i / 6e4))} мин`) : localized("checking now…", "проверяем…")}`
                  : Nm(e.checkedAt);
        return `<article class="sr-card" data-status="${e.status}">
      <div class="sr-card-head">
        <span class="sr-avatar">${Yh((e.author || "X").slice(0, 1).toUpperCase())}</span>
        <span class="sr-author"><b>${e.author ? "@" + Yh(e.author) : localized("Your post", "Твой пост")}</b><small>${localized(`added ${Nm(e.claimedAt)}`, `добавлен ${Nm(e.claimedAt)}`)}</small></span>
        <span class="sr-badge" data-status="${e.status}">${t}</span>
        <a class="sr-open" href="${Yh(e.url)}" target="_blank" rel="noopener" aria-label="${localized("Open post", "Открыть пост")}">${wrapSvgIcon(Ta.open)}</a>
      </div>
      <p class="sr-meta" data-status="${e.status}">${wrapSvgIcon(e.status === "rejected" ? Ta.close : Ta.clock)}<span>${Yh(s)}</span></p>
      <p class="sr-excerpt">${Yh(e.text.replace(/https?:\/\/\S+/g, "").trim() || (e.status === "pending" ? localized("Waiting for X…", "Ждём ответа X…") : "…"))}</p>
      <div class="sr-card-foot">
        <div class="sr-chips">${JK(e)}</div>
        <div class="sr-earned">${bs(18)}<b>+${Xs(e.earned + e.bonus)}</b></div>
      </div>
      <div class="sr-meter" title="${localized("Engagement gold from this post", "Золото за активность с этого поста")}"><i style="width:${Math.min(100, (e.earned / Kw) * 100).toFixed(1)}%"></i></div>
    </article>`;
      })
      .join("");
  }
}
function zp() {
  const n = zt == null ? void 0 : zt.querySelector(".sr-bonus-note"),
    e = Zw((Ei == null ? void 0 : Ei.nextBonusAt) ?? null);
  n &&
    ((n.textContent =
      e > 0
        ? localized(`next post bonus in ${Om(e)}`, `следующий бонус через ${Om(e)}`)
        : localized("for a post about the game", "за пост об игре")),
    n.classList.toggle("wait", e > 0));
  const t = zt == null ? void 0 : zt.querySelector(".sr-refresh");
  if (!t || !Ei) return;
  const i = Zw(Ei.nextRefreshAt),
    s = Ei.posts.some((r) => r.status === "active"),
    o = t.querySelector("span"),
    a = Dr === "refresh" || Ei.queued > 0;
  ((t.disabled = Dr !== null || i > 0 || !s || !Ei.canClaim),
    t.classList.toggle("spinning", a),
    t.classList.toggle("cooldown", i > 0 && !a),
    (o.textContent = a
      ? localized("Checking in the background…", "Проверяем в фоне…")
      : i > 0
        ? localized(`Check again in ${Om(i)}`, `Снова через ${Om(i)}`)
        : localized("Check now", "Проверить сейчас")),
    (t.title = localized(
      "Reactions are recounted automatically. This moves your posts to the front of the queue (once every 15 minutes).",
      "Реакции пересчитываются автоматически. Кнопка ставит твои посты в начало очереди (раз в 15 минут).",
    )));
}
async function tY(n) {
  if (Dr || !Ei) return;
  const e = zt.querySelector(".sr-claim input");
  if (!YK(n)) {
    (Oa(
      localized(
        "Paste a link like https://x.com/you/status/123…",
        "Вставь ссылку вида https://x.com/you/status/123…",
      ),
      "error",
    ),
      e.focus());
    return;
  }
  Dr = "claim";
  const t = zt.querySelector(".sr-claim-btn");
  ((t.disabled = !0),
    t.classList.add("loading"),
    (e.readOnly = !0),
    Oa(localized("Checking your post on X…", "Проверяем пост в X…")));
  try {
    const i = await tn("/me/social/posts", "POST", { url: n.trim() });
    ((Ei = i.state),
      (Dr = null),
      HL(),
      th(),
      i.reward
        ? GL(i.reward, "claim")
        : Oa(
            localized(
              "Post accepted! X is slow right now — we will verify it in the background and credit your gold automatically.",
              "Пост принят! X сейчас медлит — проверим его в фоне и начислим золото автоматически.",
            ),
            "success",
          ),
      zy());
  } catch (i) {
    ((Dr = null),
      (t.disabled = !1),
      t.classList.remove("loading"),
      (e.readOnly = !1),
      Oa(A4(i), "error"));
  }
  zp();
}
async function iY() {
  if (!(Dr || !Ei)) {
    ((Dr = "refresh"), zp());
    try {
      ((Ei = (await tn("/me/social/refresh", "POST", {})).state),
        (Dr = null),
        th(),
        Oa(
          localized(
            "Your posts are first in the queue — gold arrives automatically, you can close this window.",
            "Твои посты первые в очереди — золото придёт автоматически, окно можно закрыть.",
          ),
          "success",
          "posts",
        ));
    } catch (n) {
      Dr = null;
      try {
        ((Ei = await tn("/me/social")), th());
      } catch {}
      Oa(A4(n), "error", "posts");
    }
    (zp(), zy());
  }
}
function Qw() {
  var e;
  const n = zt == null ? void 0 : zt.querySelector(".sr-reward");
  n &&
    (n.classList.add("out"),
    window.setTimeout(() => n.remove(), 220),
    (e = zt == null ? void 0 : zt.querySelector(".sr-wallet")) == null ||
      e.classList.add("bump"),
    window.setTimeout(() => {
      var t;
      return (t = zt == null ? void 0 : zt.querySelector(".sr-wallet")) == null
        ? void 0
        : t.classList.remove("bump");
    }, 700));
}
