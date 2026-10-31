// index-BeUlFSPp 136 — append
// Lines 77035-77726 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function fte() {
  const s = Ct("section", "sq-summary");
  ((s.id = "menu-squad"), document.querySelector("#menu .mm-side").prepend(s));
  const e = Ct("section", "sq-dock");
  ((e.id = "squad-lobby"), document.getElementById("menu").append(e));
  const t = Ct("dialog", "sq-dialog");
  ((t.id = "squad-menu"),
    document.body.append(t),
    t.addEventListener("keydown", (D) => D.stopPropagation()));
  let i = !1,
    n = "",
    o = 0,
    a = !1,
    r = !1,
    l = 0,
    c = "",
    h = "",
    d = "",
    u = null,
    f = { name: "", color: Bp[0], emblem: Sk[0] },
    p = "";
  const m = () => fo.squad?.leaderId === qe?.id;
  function g(D) {
    const U = Ct("img", "sq-avatar");
    return (
      (U.alt = D.username),
      (U.width = 96),
      (U.height = 112),
      (U.loading = "lazy"),
      vr("character", D.character, 257, D.custom)
        .then((W) => (U.src = W))
        .catch(() => {}),
      U
    );
  }
  function y() {
    ((u = document.activeElement), P(), t.open || t.showModal(), H(!0));
  }
  function b() {
    (t.close(), u?.focus({ preventScroll: !0 }));
  }
  (t.addEventListener("focusout", () => {
    setTimeout(() => {
      i && t.open && P();
    }, 0);
  }),
    t.addEventListener("close", () => u?.focus({ preventScroll: !0 })));
  function S(D, U) {
    const W = Ct("span", "sq-emblem");
    return ((W.innerHTML = Aw(D)), (W.style.color = U), W);
  }
  function M(D) {
    const U = Ct("article", "sq-invite");
    return (
      U.style.setProperty("--invite", D.color),
      U.append(
        S(D.emblem, D.color),
        Ct("strong", "", D.name),
        Ct(
          "span",
          "sq-muted",
          Kt(`${D.inviter} invited you`, `${D.inviter} приглашает вас`),
        ),
      ),
      U.append(
        ll(
          Kt("Accept", "Принять"),
          () => void B({ action: "accept", id: D.id }),
          "sq-button primary",
        ),
        ll(
          Kt("Decline", "Отклонить"),
          () => void B({ action: "decline", id: D.id }),
        ),
      ),
      U
    );
  }
  function E() {
    (s.replaceChildren(), e.replaceChildren(), (e.hidden = !qe || !fo.squad));
    const D = fo.squad,
      U = Ct("div", "sq-summary-head");
    if (
      (U.append(
        S(D?.emblem ?? "shield", D?.color ?? Bp[0]),
        Ct("div", "", D?.name ?? Kt("Your squad", "Твой отряд")),
      ),
      D && U.append(Ct("small", "sq-muted", `${D.members.length} / ${ac}`)),
      s.append(U),
      s.style.setProperty("--squad", D?.color ?? Bp[0]),
      D && qe)
    ) {
      const W = Ct("div", "sq-summary-members");
      for (const J of D.members.slice(0, 6)) {
        const j = Ct("span");
        j.style.setProperty("--member", U1(J.slot));
        const ne = Ct("i", J.servers.length || J.id === qe.id ? "" : "off");
        (j.append(ne, document.createTextNode(J.username)),
          (j.title =
            J.servers.map((ge) => ge.name).join(", ") ||
            (J.id === qe.id ? Kt("You", "Вы") : Kt("Offline", "Не в сети"))),
          W.append(j));
      }
      (D.members.length > 6 &&
        W.append(Ct("span", "", `+${D.members.length - 6}`)),
        s.append(W));
    } else
      s.append(
        Ct(
          "p",
          "sq-muted",
          qe
            ? D
              ? Kt("Together on every front.", "Вместе на каждом рубеже.")
              : Kt(
                  "Find your people. Build your squad.",
                  "Найди своих. Собери отряд.",
                )
            : Kt(
                "Sign in to create or join a squad.",
                "Войди, чтобы создать отряд или вступить.",
              ),
        ),
      );
    if (
      (s.append(
        ll(
          D
            ? Kt("Manage squad", "Меню отряда")
            : Kt("Squads & invitations", "Отряды и приглашения"),
          y,
        ),
      ),
      qe && fo.incoming.length)
    ) {
      const W = Ct("div", "sq-inbox");
      ((W.id = "squad-inbox"),
        W.setAttribute("aria-live", "polite"),
        W.append(
          Ct(
            "small",
            "sq-kicker",
            Kt(
              fo.incoming.length === 1
                ? "1 INVITATION"
                : `${fo.incoming.length} INVITATIONS`,
              `ПРИГЛАШЕНИЙ: ${fo.incoming.length}`,
            ),
          ),
        ));
      for (const J of fo.incoming.slice(0, 2)) W.append(M(J));
      s.append(W);
    }
    if (D && qe) {
      const W = Ct("div", "sq-dock-head");
      (W.append(
        S(D.emblem, D.color),
        Ct("strong", "", D.name),
        Ct("span", "sq-muted", `${D.members.length} / 10`),
        ll(Kt("Open squad", "Открыть отряд"), y),
      ),
        e.append(W));
      const J = Ct("div", "sq-lineup");
      J.setAttribute("aria-label", Kt("Squad members", "Участники отряда"));
      for (const j of D.members) {
        const ne = Ct("article", "sq-operator");
        (ne.style.setProperty("--member", U1(j.slot)),
          ne.append(
            g(j),
            Ct("b", "", j.username),
            Ct(
              "small",
              "sq-muted",
              j.id === D.leaderId
                ? Kt("Leader", "Командир")
                : j.servers.length
                  ? Kt("Online", "В сети")
                  : Kt("Offline", "Не в сети"),
            ),
          ),
          J.append(ne));
      }
      e.append(J);
    }
  }
  function A(D, U, W, J, j = "") {
    const ne = Ct("div", "sq-identity");
    ne.style.setProperty("--squad", U);
    const ge = Ct("div", "sq-crest");
    ge.append(S(W, U));
    const be = Ct("div", "sq-identity-text");
    return (
      be.append(
        Ct("small", "sq-kicker", Kt("SQUAD", "ОТРЯД")),
        Ct("strong", "sq-identity-name", D || Kt("YOUR_SQUAD", "ТВОЙ_ОТРЯД")),
        Ct(
          "span",
          "sq-muted",
          j
            ? Kt(`${J} / ${ac} · led by ${j}`, `${J} / ${ac} · командир ${j}`)
            : Kt(`${J} / ${ac} operators`, `${J} / ${ac} бойцов`),
        ),
      ),
      ne.append(ge, be),
      ne
    );
  }
  function T() {
    const D = Ct("ul", "sq-perks");
    for (const [U, W] of [
      ["Shared map markers and waypoints", "Общие метки и точки на карте"],
      ["Private squad chat and voice", "Свой чат и голосовой канал"],
      ["No friendly fire between squadmates", "Нет урона по своим"],
      ["Stay together across servers", "Вместе на любом сервере"],
    ])
      D.append(Ct("li", "", Kt(U, W)));
    return D;
  }
  function x(D, U) {
    const W = Ct("form", "sq-design"),
      J = Ct("label", "sq-field", Kt("Squad name", "Имя отряда")),
      j = Ct("input");
    ((j.name = "name"),
      (j.id = "squad-name"),
      (j.required = !0),
      (j.pattern = "[A-Za-z0-9_-]{3,20}"),
      (j.minLength = 3),
      (j.maxLength = 20),
      (j.value = f.name),
      (j.autocomplete = "off"),
      (j.spellcheck = !1),
      (j.placeholder = "NIGHT_WOLVES"),
      (j.oninput = () => {
        ((f.name = j.value), U());
      }),
      J.append(
        j,
        Ct(
          "small",
          "sq-muted",
          Kt(
            "3–20 English letters, digits, - or _. Unique, no spaces.",
            "3–20 латинских букв, цифр, - или _. Уникальное, без пробелов.",
          ),
        ),
      ),
      W.append(J));
    const ne = Ct("fieldset", "sq-palette");
    ne.append(Ct("legend", "", Kt("Colour", "Цвет")));
    const ge = [
      ["Mint", "Мятный"],
      ["Blue", "Голубой"],
      ["Violet", "Фиолетовый"],
      ["Amber", "Янтарный"],
      ["Rose", "Розовый"],
      ["Gold", "Золотой"],
      ["Lime", "Лаймовый"],
      ["Silver", "Серебристый"],
    ];
    for (const [he, Ie] of Bp.entries()) {
      const ve = Ct("label", "sq-color"),
        it = Ct("input");
      ((it.type = "radio"),
        (it.name = "color"),
        (it.value = Ie),
        (it.checked = f.color === Ie),
        it.setAttribute("aria-label", Kt(ge[he][0], ge[he][1])),
        (it.onchange = () => {
          ((f.color = Ie), U());
        }),
        (ve.title = Kt(ge[he][0], ge[he][1])),
        ve.style.setProperty("--swatch", Ie),
        ve.append(it, Ct("span")),
        ne.append(ve));
    }
    W.append(ne);
    const be = Ct("fieldset", "sq-emblems");
    be.append(Ct("legend", "", Kt("Emblem", "Герб")));
    for (const he of Sk) {
      const Ie = Ct("label"),
        ve = Ct("input");
      ((ve.type = "radio"),
        (ve.name = "emblem"),
        (ve.value = he),
        (ve.checked = f.emblem === he),
        ve.setAttribute("aria-label", Kt(...Ek[he])),
        (ve.onchange = () => {
          ((f.emblem = he), U());
        }));
      const it = S(he, "currentColor");
      ((Ie.title = Kt(...Ek[he])), Ie.append(ve, it), be.append(Ie));
    }
    W.append(be);
    const oe = ll(
      D ? Kt("Save changes", "Сохранить") : Kt("Create squad", "Создать отряд"),
      () => {},
      "sq-button primary sq-submit",
    );
    return (
      (oe.type = "submit"),
      W.append(oe),
      (W.onsubmit = (he) => {
        (he.preventDefault(),
          W.reportValidity() && B({ action: D ? "edit" : "create", ...f }));
      }),
      W
    );
  }
  function R(D, U, W) {
    const J = Ct("div", "sq-danger");
    J.append(Ct("small", "sq-muted", U));
    const j = ll(
      D,
      () => {
        ((j.textContent = Kt("Confirm", "Подтвердить")),
          (j.onclick = () => void B({ action: W })),
          j.classList.add("confirm"));
      },
      "sq-button sq-danger-button",
    );
    return (J.append(j), J);
  }
  function _(D, U = "") {
    const W = Ct("section", "sq-card " + U);
    return (W.append(Ct("h3", "", D)), W);
  }
  function C(D, U) {
    const W = Ct("article", "sq-member");
    ((W.dataset.username = U.username),
      W.style.setProperty("--member", U1(U.slot)));
    const J = U.id === D.leaderId,
      j = U.servers.length > 0 || U.id === qe?.id,
      ne = Ct("div", "sq-portrait");
    if ((ne.append(g(U)), J)) {
      const oe = Ct("span", "sq-leader-crown");
      ((oe.innerHTML = Aw("crown")),
        (oe.title = Kt("Squad leader", "Командир")),
        ne.append(oe));
    }
    const ge = Ct("div", "sq-member-info");
    ge.append(
      Ct("strong", "", U.username),
      Ct(
        "span",
        "sq-role",
        J ? Kt("Leader", "Командир") : Kt("Operator", "Боец"),
      ),
    );
    const be = Ct("span", "sq-presence" + (j ? " online" : ""));
    if (
      (be.append(
        Ct("i"),
        document.createTextNode(
          U.id === qe?.id
            ? Kt("You", "Вы")
            : U.servers.map((oe) => oe.name).join(", ") ||
                Kt("Offline", "Не в сети"),
        ),
      ),
      ge.append(be),
      W.append(ne, ge),
      m() && U.id !== qe?.id)
    ) {
      const oe = ll(
        Kt("Remove", "Исключить"),
        () => {
          ((oe.textContent = Kt("Confirm", "Подтвердить")),
            oe.classList.add("confirm"),
            (oe.onclick = () =>
              void B({ action: "kick", username: U.username })));
        },
        "sq-button sq-kick",
      );
      W.append(oe);
    }
    return W;
  }
  function P() {
    if (
      document.activeElement instanceof HTMLInputElement &&
      t.contains(document.activeElement)
    ) {
      i = !0;
      return;
    }
    i = !1;
    const D = t.querySelector(".sq-body")?.scrollTop ?? 0;
    t.replaceChildren();
    const U = fo.squad;
    (p !== (U?.id ?? "") &&
      ((p = U?.id ?? ""),
      (f = {
        name: U?.name ?? "",
        color: U?.color ?? Bp[0],
        emblem: U?.emblem ?? "shield",
      })),
      t.style.setProperty("--squad", U?.color ?? f.color));
    const W = Ct("header", "sq-header"),
      J = Ct("div", "sq-heading");
    (J.append(
      Ct("small", "sq-kicker", Kt("SQUAD COMMAND", "УПРАВЛЕНИЕ ОТРЯДОМ")),
      Ct("h2", "", U?.name ?? Kt("Never fight alone", "Вместе сильнее")),
    ),
      U &&
        J.append(
          Ct(
            "span",
            "sq-muted",
            Kt(
              `${U.members.length} of ${ac} operators · friendly fire off`,
              `${U.members.length} из ${ac} бойцов · урон по своим выключен`,
            ),
          ),
        ));
    const j = ll("", b, "sq-close");
    (j.setAttribute("aria-label", Kt("Close", "Закрыть")),
      (j.innerHTML =
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>'),
      W.append(S(U?.emblem ?? f.emblem, U?.color ?? f.color), J, j),
      t.append(W));
    const ne = Ct("p", "sq-status", h || d);
    ((ne.id = "squad-status"),
      ne.setAttribute("role", "status"),
      h && ne.classList.add("error"),
      t.append(ne));
    const ge = Ct("div", "sq-body");
    if ((t.append(ge), !qe)) {
      const he = _(
        Kt("Sign in to play together", "Войди, чтобы играть вместе"),
        "sq-wide",
      );
      (he.append(
        Ct(
          "p",
          "sq-muted",
          Kt(
            "Sign in from the main menu to create a squad, invite friends and stay together across servers.",
            "Войди через главное меню, чтобы создать отряд, приглашать друзей и играть вместе на разных серверах.",
          ),
        ),
        T(),
      ),
        ge.append(he));
      return;
    }
    const be = Ct("div", "sq-main"),
      oe = Ct("aside", "sq-aside");
    if ((ge.append(be, oe), fo.incoming.length)) {
      const he = _(
        Kt(
          `Invitations · ${fo.incoming.length}`,
          `Приглашения · ${fo.incoming.length}`,
        ),
        "sq-invitations",
      );
      for (const Ie of fo.incoming) he.append(M(Ie));
      be.append(he);
    }
    if (U) {
      const he = _(Kt("Roster", "Состав"), "sq-roster-card"),
        Ie = Ct("div", "sq-roster");
      for (const ot of U.members) Ie.append(C(U, ot));
      for (
        let ot = U.members.length;
        ot < Math.min(ac, U.members.length + (m() ? 1 : 0));
        ot++
      ) {
        const at = Ct("button", "sq-member sq-open-slot");
        ((at.type = "button"),
          at.append(
            Ct("span", "sq-plus", "+"),
            Ct("small", "sq-muted", Kt("Invite a player", "Пригласить игрока")),
          ),
          (at.onclick = () => t.querySelector("#squad-invite-name")?.focus()),
          Ie.append(at));
      }
      if ((he.append(Ie), be.append(he), m())) {
        const ot = _(Kt("Invite players", "Пригласить игроков")),
          at = Ct("form", "sq-invite-form"),
          Re = Ct("input");
        ((Re.id = "squad-invite-name"),
          (Re.required = !0),
          (Re.minLength = 3),
          (Re.maxLength = 24),
          (Re.placeholder = Kt("Player username", "Ник игрока")),
          Re.setAttribute("aria-label", Re.placeholder),
          (Re.autocomplete = "off"));
        const V = ll(Kt("Invite", "Пригласить"), () => {}, "sq-button primary");
        if (
          ((V.type = "submit"),
          at.append(Re, V),
          (at.onsubmit = (ye) => {
            (ye.preventDefault(),
              at.reportValidity() &&
                B({ action: "invite", username: Re.value }));
          }),
          ot.append(at),
          fo.outgoing.length)
        ) {
          const ye = Ct("div", "sq-pending-list");
          for (const Ce of fo.outgoing) {
            const ze = Ct("span", "sq-chip");
            ze.append(
              Ct("span", "", Ce.username),
              Ct("small", "sq-muted", Kt("pending", "ожидает")),
            );
            const tt = ll(
              "×",
              () => void B({ action: "cancel", username: Ce.username }),
              "sq-chip-x",
            );
            (tt.setAttribute(
              "aria-label",
              Kt(
                `Cancel invitation for ${Ce.username}`,
                `Отменить приглашение ${Ce.username}`,
              ),
            ),
              ze.append(tt),
              ye.append(ze));
          }
          ot.append(ye);
        }
        be.append(ot);
      }
      const ve = _(Kt("Identity", "Знамя"));
      if (
        (ve.append(
          A(
            U.name,
            U.color,
            U.emblem,
            U.members.length,
            U.members.find((ot) => ot.id === U.leaderId)?.username ?? "",
          ),
        ),
        m())
      ) {
        const ot = Ct("details", "sq-edit");
        (ot.append(
          Ct(
            "summary",
            "",
            Kt("Edit name, colour & emblem", "Имя, цвет и герб"),
          ),
          x(!0, () => {
            ve.querySelector(".sq-identity")?.replaceWith(
              A(
                f.name,
                f.color,
                f.emblem,
                U.members.length,
                qe?.username ?? "",
              ),
            );
          }),
        ),
          ve.append(ot));
      }
      oe.append(ve);
      const it = _(Kt("Squad perks", "Возможности"));
      (it.append(T()), oe.append(it));
      const st = _(Kt("Membership", "Участие"), "sq-zone");
      (m() &&
        st.append(
          R(
            Kt("Delete squad", "Удалить отряд"),
            Kt(
              "Disbands the squad and cancels its invitations.",
              "Распускает отряд и отменяет приглашения.",
            ),
            "delete",
          ),
        ),
        st.append(
          R(
            Kt("Leave squad", "Покинуть отряд"),
            m()
              ? Kt(
                  "Leaving as leader disbands your squad.",
                  "Выход командира распускает отряд.",
                )
              : Kt(
                  "You can join another squad after leaving.",
                  "После выхода можно вступить в другой отряд.",
                ),
            "leave",
          ),
        ),
        oe.append(st));
    } else {
      const he = _(Kt("Create your squad", "Создай свой отряд"), "sq-create");
      he.append(
        Ct(
          "p",
          "sq-muted",
          Kt(
            "Pick a name, a colour and an emblem. Up to 10 players.",
            "Выбери имя, цвет и герб. До 10 игроков.",
          ),
        ),
      );
      const Ie = Ct("div", "sq-preview-slot"),
        ve = () => {
          (Ie.replaceChildren(A(f.name, f.color, f.emblem, 1)),
            t.style.setProperty("--squad", f.color));
          const st = W.querySelector(".sq-emblem");
          st && ((st.innerHTML = Aw(f.emblem)), (st.style.color = f.color));
        };
      (he.append(x(!1, ve)), be.append(he));
      const it = _(Kt("Preview", "Превью"));
      (it.append(Ie, T()), oe.append(it), ve());
    }
    ((ge.scrollTop = D),
      t.querySelectorAll("button").forEach((he) => (he.disabled = r)));
  }
  function O(D) {
    const U = JSON.stringify(D);
    ((fo = D),
      U !== c &&
        ((c = U),
        E(),
        t.open && P(),
        window.dispatchEvent(new Event("squad-changed"))));
  }
  async function B(D) {
    if (r || !qe) return;
    ((r = !0), (h = ""), (d = ""));
    const U = qe.id,
      W = ++o;
    for (const J of [t, s])
      J.querySelectorAll("button").forEach((j) => (j.disabled = !0));
    try {
      const J = await Vi("/me/squad", "POST", D);
      U === qe?.id &&
        W === o &&
        (document.activeElement?.blur(),
        (d = Kt("Squad updated", "Отряд обновлён")),
        O(J),
        (l = Date.now()));
    } catch (J) {
      h = J instanceof Error ? J.message : String(J);
    } finally {
      ((r = !1), E(), t.open && (document.activeElement?.blur(), P()));
    }
  }
  async function H(D = !1) {
    if (
      (n !== (qe?.id ?? "") &&
        ((n = qe?.id ?? ""),
        o++,
        (p = ""),
        (c = ""),
        (h = ""),
        (d = ""),
        O({ squad: null, incoming: [], outgoing: [] }),
        (l = 0)),
      !qe || r || a || document.hidden || (!D && Date.now() - l < 4500))
    )
      return;
    a = !0;
    const U = qe.id,
      W = o;
    try {
      const J = await Vi("/me/squad");
      U === qe?.id && W === o && ((h = ""), O(J), (l = Date.now()));
    } catch {
      U === qe?.id &&
        t.open &&
        ((h = Kt(
          "Squads are temporarily unavailable. Try again shortly.",
          "Отряды временно недоступны. Попробуйте чуть позже.",
        )),
        P());
    } finally {
      a = !1;
    }
  }
  return (
    setInterval(() => void H(), 5e3),
    document.addEventListener("visibilitychange", () => void H(!0)),
    window.addEventListener("focus", () => void H(!0)),
    window.addEventListener("online", () => void H(!0)),
    da(() => {
      (E(), t.open && P());
    }),
    E(),
    () => {
      (E(), H(!0));
    }
  );
}
