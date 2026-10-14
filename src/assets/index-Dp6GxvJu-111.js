// index-Dp6GxvJu 111 — append
// Lines 68008-68749 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function sj() {
  const n = _t("section", "sq-summary");
  ((n.id = "menu-squad"), document.querySelector("#menu .mm-side").prepend(n));
  const e = _t("section", "sq-dock");
  ((e.id = "squad-lobby"), document.getElementById("menu").append(e));
  const t = _t("dialog", "sq-dialog");
  ((t.id = "squad-menu"),
    document.body.append(t),
    t.addEventListener("keydown", (I) => I.stopPropagation()));
  let i = !1,
    s = "",
    o = 0,
    a = !1,
    r = !1,
    l = 0,
    c = "",
    h = "",
    d = "",
    u = null,
    f = { name: "", color: cf[0], emblem: V6[0] },
    p = "";
  const m = () => {
    var I;
    return (
      ((I = Ks.squad) == null ? void 0 : I.leaderId) ===
      (Me == null ? void 0 : Me.id)
    );
  };
  function y(I) {
    const O = _t("img", "sq-avatar");
    return (
      (O.alt = I.username),
      (O.width = 96),
      (O.height = 112),
      (O.loading = "lazy"),
      s0("character", I.character, 257, I.custom)
        .then((F) => (O.src = F))
        .catch(() => {}),
      O
    );
  }
  function g() {
    ((u = document.activeElement), N(), t.open || t.showModal(), G(!0));
  }
  function b() {
    (t.close(), u == null || u.focus({ preventScroll: !0 }));
  }
  (t.addEventListener("focusout", () => {
    setTimeout(() => {
      i && t.open && N();
    }, 0);
  }),
    t.addEventListener("close", () =>
      u == null ? void 0 : u.focus({ preventScroll: !0 }),
    ));
  function S(I, O) {
    const F = _t("span", "sq-emblem");
    return ((F.innerHTML = sb(I)), (F.style.color = O), F);
  }
  function M(I) {
    const O = _t("article", "sq-invite");
    return (
      O.style.setProperty("--invite", I.color),
      O.append(
        S(I.emblem, I.color),
        _t("strong", "", I.name),
        _t(
          "span",
          "sq-muted",
          Vt(`${I.inviter} invited you`, `${I.inviter} приглашает вас`),
        ),
      ),
      O.append(
        gr(
          Vt("Accept", "Принять"),
          () => void H({ action: "accept", id: I.id }),
          "sq-button primary",
        ),
        gr(
          Vt("Decline", "Отклонить"),
          () => void H({ action: "decline", id: I.id }),
        ),
      ),
      O
    );
  }
  function x() {
    (n.replaceChildren(), e.replaceChildren(), (e.hidden = !Me || !Ks.squad));
    const I = Ks.squad,
      O = _t("div", "sq-summary-head");
    if (
      (O.append(
        S(
          (I == null ? void 0 : I.emblem) ?? "shield",
          (I == null ? void 0 : I.color) ?? cf[0],
        ),
        _t(
          "div",
          "",
          (I == null ? void 0 : I.name) ?? Vt("Your squad", "Твой отряд"),
        ),
      ),
      I && O.append(_t("small", "sq-muted", `${I.members.length} / ${bl}`)),
      n.append(O),
      n.style.setProperty("--squad", (I == null ? void 0 : I.color) ?? cf[0]),
      I && Me)
    ) {
      const F = _t("div", "sq-summary-members");
      for (const X of I.members.slice(0, 6)) {
        const Q = _t("span");
        Q.style.setProperty("--member", ip(X.slot));
        const ee = _t("i", X.servers.length || X.id === Me.id ? "" : "off");
        (Q.append(ee, document.createTextNode(X.username)),
          (Q.title =
            X.servers.map((se) => se.name).join(", ") ||
            (X.id === Me.id ? Vt("You", "Вы") : Vt("Offline", "Не в сети"))),
          F.append(Q));
      }
      (I.members.length > 6 &&
        F.append(_t("span", "", `+${I.members.length - 6}`)),
        n.append(F));
    } else
      n.append(
        _t(
          "p",
          "sq-muted",
          Me
            ? I
              ? Vt("Together on every front.", "Вместе на каждом рубеже.")
              : Vt(
                  "Find your people. Build your squad.",
                  "Найди своих. Собери отряд.",
                )
            : Vt(
                "Sign in to create or join a squad.",
                "Войди, чтобы создать отряд или вступить.",
              ),
        ),
      );
    if (
      (n.append(
        gr(
          I
            ? Vt("Manage squad", "Меню отряда")
            : Vt("Squads & invitations", "Отряды и приглашения"),
          g,
        ),
      ),
      Me && Ks.incoming.length)
    ) {
      const F = _t("div", "sq-inbox");
      ((F.id = "squad-inbox"),
        F.setAttribute("aria-live", "polite"),
        F.append(
          _t(
            "small",
            "sq-kicker",
            Vt(
              Ks.incoming.length === 1
                ? "1 INVITATION"
                : `${Ks.incoming.length} INVITATIONS`,
              `ПРИГЛАШЕНИЙ: ${Ks.incoming.length}`,
            ),
          ),
        ));
      for (const X of Ks.incoming.slice(0, 2)) F.append(M(X));
      n.append(F);
    }
    if (I && Me) {
      const F = _t("div", "sq-dock-head");
      (F.append(
        S(I.emblem, I.color),
        _t("strong", "", I.name),
        _t("span", "sq-muted", `${I.members.length} / 10`),
        gr(Vt("Open squad", "Открыть отряд"), g),
      ),
        e.append(F));
      const X = _t("div", "sq-lineup");
      X.setAttribute("aria-label", Vt("Squad members", "Участники отряда"));
      for (const Q of I.members) {
        const ee = _t("article", "sq-operator");
        (ee.style.setProperty("--member", ip(Q.slot)),
          ee.append(
            y(Q),
            _t("b", "", Q.username),
            _t(
              "small",
              "sq-muted",
              Q.id === I.leaderId
                ? Vt("Leader", "Командир")
                : Q.servers.length
                  ? Vt("Online", "В сети")
                  : Vt("Offline", "Не в сети"),
            ),
          ),
          X.append(ee));
      }
      e.append(X);
    }
  }
  function T(I, O, F, X, Q = "") {
    const ee = _t("div", "sq-identity");
    ee.style.setProperty("--squad", O);
    const se = _t("div", "sq-crest");
    se.append(S(F, O));
    const oe = _t("div", "sq-identity-text");
    return (
      oe.append(
        _t("small", "sq-kicker", Vt("SQUAD", "ОТРЯД")),
        _t("strong", "sq-identity-name", I || Vt("YOUR_SQUAD", "ТВОЙ_ОТРЯД")),
        _t(
          "span",
          "sq-muted",
          Q
            ? Vt(`${X} / ${bl} · led by ${Q}`, `${X} / ${bl} · командир ${Q}`)
            : Vt(`${X} / ${bl} operators`, `${X} / ${bl} бойцов`),
        ),
      ),
      ee.append(se, oe),
      ee
    );
  }
  function A() {
    const I = _t("ul", "sq-perks");
    for (const [O, F] of [
      ["Shared map markers and waypoints", "Общие метки и точки на карте"],
      ["Private squad chat and voice", "Свой чат и голосовой канал"],
      ["No friendly fire between squadmates", "Нет урона по своим"],
      ["Stay together across servers", "Вместе на любом сервере"],
    ])
      I.append(_t("li", "", Vt(O, F)));
    return I;
  }
  function _(I, O) {
    const F = _t("form", "sq-design"),
      X = _t("label", "sq-field", Vt("Squad name", "Имя отряда")),
      Q = _t("input");
    ((Q.name = "name"),
      (Q.id = "squad-name"),
      (Q.required = !0),
      (Q.pattern = "[A-Za-z0-9_-]{3,20}"),
      (Q.minLength = 3),
      (Q.maxLength = 20),
      (Q.value = f.name),
      (Q.autocomplete = "off"),
      (Q.spellcheck = !1),
      (Q.placeholder = "NIGHT_WOLVES"),
      (Q.oninput = () => {
        ((f.name = Q.value), O());
      }),
      X.append(
        Q,
        _t(
          "small",
          "sq-muted",
          Vt(
            "3–20 English letters, digits, - or _. Unique, no spaces.",
            "3–20 латинских букв, цифр, - или _. Уникальное, без пробелов.",
          ),
        ),
      ),
      F.append(X));
    const ee = _t("fieldset", "sq-palette");
    ee.append(_t("legend", "", Vt("Colour", "Цвет")));
    const se = [
      ["Mint", "Мятный"],
      ["Blue", "Голубой"],
      ["Violet", "Фиолетовый"],
      ["Amber", "Янтарный"],
      ["Rose", "Розовый"],
      ["Gold", "Золотой"],
      ["Lime", "Лаймовый"],
      ["Silver", "Серебристый"],
    ];
    for (const [re, Ce] of cf.entries()) {
      const Re = _t("label", "sq-color"),
        We = _t("input");
      ((We.type = "radio"),
        (We.name = "color"),
        (We.value = Ce),
        (We.checked = f.color === Ce),
        We.setAttribute("aria-label", Vt(se[re][0], se[re][1])),
        (We.onchange = () => {
          ((f.color = Ce), O());
        }),
        (Re.title = Vt(se[re][0], se[re][1])),
        Re.style.setProperty("--swatch", Ce),
        Re.append(We, _t("span")),
        ee.append(Re));
    }
    F.append(ee);
    const oe = _t("fieldset", "sq-emblems");
    oe.append(_t("legend", "", Vt("Emblem", "Герб")));
    for (const re of V6) {
      const Ce = _t("label"),
        Re = _t("input");
      ((Re.type = "radio"),
        (Re.name = "emblem"),
        (Re.value = re),
        (Re.checked = f.emblem === re),
        Re.setAttribute("aria-label", Vt(...$6[re])),
        (Re.onchange = () => {
          ((f.emblem = re), O());
        }));
      const We = S(re, "currentColor");
      ((Ce.title = Vt(...$6[re])), Ce.append(Re, We), oe.append(Ce));
    }
    F.append(oe);
    const J = gr(
      I ? Vt("Save changes", "Сохранить") : Vt("Create squad", "Создать отряд"),
      () => {},
      "sq-button primary sq-submit",
    );
    return (
      (J.type = "submit"),
      F.append(J),
      (F.onsubmit = (re) => {
        (re.preventDefault(),
          F.reportValidity() && H({ action: I ? "edit" : "create", ...f }));
      }),
      F
    );
  }
  function C(I, O, F) {
    const X = _t("div", "sq-danger");
    X.append(_t("small", "sq-muted", O));
    const Q = gr(
      I,
      () => {
        ((Q.textContent = Vt("Confirm", "Подтвердить")),
          (Q.onclick = () => void H({ action: F })),
          Q.classList.add("confirm"));
      },
      "sq-button sq-danger-button",
    );
    return (X.append(Q), X);
  }
  function R(I, O = "") {
    const F = _t("section", "sq-card " + O);
    return (F.append(_t("h3", "", I)), F);
  }
  function L(I, O) {
    const F = _t("article", "sq-member");
    ((F.dataset.username = O.username),
      F.style.setProperty("--member", ip(O.slot)));
    const X = O.id === I.leaderId,
      Q = O.servers.length > 0 || O.id === (Me == null ? void 0 : Me.id),
      ee = _t("div", "sq-portrait");
    if ((ee.append(y(O)), X)) {
      const J = _t("span", "sq-leader-crown");
      ((J.innerHTML = sb("crown")),
        (J.title = Vt("Squad leader", "Командир")),
        ee.append(J));
    }
    const se = _t("div", "sq-member-info");
    se.append(
      _t("strong", "", O.username),
      _t(
        "span",
        "sq-role",
        X ? Vt("Leader", "Командир") : Vt("Operator", "Боец"),
      ),
    );
    const oe = _t("span", "sq-presence" + (Q ? " online" : ""));
    if (
      (oe.append(
        _t("i"),
        document.createTextNode(
          O.id === (Me == null ? void 0 : Me.id)
            ? Vt("You", "Вы")
            : O.servers.map((J) => J.name).join(", ") ||
                Vt("Offline", "Не в сети"),
        ),
      ),
      se.append(oe),
      F.append(ee, se),
      m() && O.id !== (Me == null ? void 0 : Me.id))
    ) {
      const J = gr(
        Vt("Remove", "Исключить"),
        () => {
          ((J.textContent = Vt("Confirm", "Подтвердить")),
            J.classList.add("confirm"),
            (J.onclick = () =>
              void H({ action: "kick", username: O.username })));
        },
        "sq-button sq-kick",
      );
      F.append(J);
    }
    return F;
  }
  function N() {
    var re, Ce;
    if (
      document.activeElement instanceof HTMLInputElement &&
      t.contains(document.activeElement)
    ) {
      i = !0;
      return;
    }
    i = !1;
    const I =
      ((re = t.querySelector(".sq-body")) == null ? void 0 : re.scrollTop) ?? 0;
    t.replaceChildren();
    const O = Ks.squad;
    (p !== ((O == null ? void 0 : O.id) ?? "") &&
      ((p = (O == null ? void 0 : O.id) ?? ""),
      (f = {
        name: (O == null ? void 0 : O.name) ?? "",
        color: (O == null ? void 0 : O.color) ?? cf[0],
        emblem: (O == null ? void 0 : O.emblem) ?? "shield",
      })),
      t.style.setProperty(
        "--squad",
        (O == null ? void 0 : O.color) ?? f.color,
      ));
    const F = _t("header", "sq-header"),
      X = _t("div", "sq-heading");
    (X.append(
      _t("small", "sq-kicker", Vt("SQUAD COMMAND", "УПРАВЛЕНИЕ ОТРЯДОМ")),
      _t(
        "h2",
        "",
        (O == null ? void 0 : O.name) ??
          Vt("Never fight alone", "Вместе сильнее"),
      ),
    ),
      O &&
        X.append(
          _t(
            "span",
            "sq-muted",
            Vt(
              `${O.members.length} of ${bl} operators · friendly fire off`,
              `${O.members.length} из ${bl} бойцов · урон по своим выключен`,
            ),
          ),
        ));
    const Q = gr("", b, "sq-close");
    (Q.setAttribute("aria-label", Vt("Close", "Закрыть")),
      (Q.innerHTML =
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>'),
      F.append(
        S(
          (O == null ? void 0 : O.emblem) ?? f.emblem,
          (O == null ? void 0 : O.color) ?? f.color,
        ),
        X,
        Q,
      ),
      t.append(F));
    const ee = _t("p", "sq-status", h || d);
    ((ee.id = "squad-status"),
      ee.setAttribute("role", "status"),
      h && ee.classList.add("error"),
      t.append(ee));
    const se = _t("div", "sq-body");
    if ((t.append(se), !Me)) {
      const Re = R(
        Vt("Sign in to play together", "Войди, чтобы играть вместе"),
        "sq-wide",
      );
      (Re.append(
        _t(
          "p",
          "sq-muted",
          Vt(
            "Sign in from the main menu to create a squad, invite friends and stay together across servers.",
            "Войди через главное меню, чтобы создать отряд, приглашать друзей и играть вместе на разных серверах.",
          ),
        ),
        A(),
      ),
        se.append(Re));
      return;
    }
    const oe = _t("div", "sq-main"),
      J = _t("aside", "sq-aside");
    if ((se.append(oe, J), Ks.incoming.length)) {
      const Re = R(
        Vt(
          `Invitations · ${Ks.incoming.length}`,
          `Приглашения · ${Ks.incoming.length}`,
        ),
        "sq-invitations",
      );
      for (const We of Ks.incoming) Re.append(M(We));
      oe.append(Re);
    }
    if (O) {
      const Re = R(Vt("Roster", "Состав"), "sq-roster-card"),
        We = _t("div", "sq-roster");
      for (const ve of O.members) We.append(L(O, ve));
      for (
        let ve = O.members.length;
        ve < Math.min(bl, O.members.length + (m() ? 1 : 0));
        ve++
      ) {
        const Y = _t("button", "sq-member sq-open-slot");
        ((Y.type = "button"),
          Y.append(
            _t("span", "sq-plus", "+"),
            _t("small", "sq-muted", Vt("Invite a player", "Пригласить игрока")),
          ),
          (Y.onclick = () => {
            var ge;
            return (ge = t.querySelector("#squad-invite-name")) == null
              ? void 0
              : ge.focus();
          }),
          We.append(Y));
      }
      if ((Re.append(We), oe.append(Re), m())) {
        const ve = R(Vt("Invite players", "Пригласить игроков")),
          Y = _t("form", "sq-invite-form"),
          ge = _t("input");
        ((ge.id = "squad-invite-name"),
          (ge.required = !0),
          (ge.minLength = 3),
          (ge.maxLength = 24),
          (ge.placeholder = Vt("Player username", "Ник игрока")),
          ge.setAttribute("aria-label", ge.placeholder),
          (ge.autocomplete = "off"));
        const Le = gr(
          Vt("Invite", "Пригласить"),
          () => {},
          "sq-button primary",
        );
        if (
          ((Le.type = "submit"),
          Y.append(ge, Le),
          (Y.onsubmit = (Oe) => {
            (Oe.preventDefault(),
              Y.reportValidity() &&
                H({ action: "invite", username: ge.value }));
          }),
          ve.append(Y),
          Ks.outgoing.length)
        ) {
          const Oe = _t("div", "sq-pending-list");
          for (const Ve of Ks.outgoing) {
            const Qe = _t("span", "sq-chip");
            Qe.append(
              _t("span", "", Ve.username),
              _t("small", "sq-muted", Vt("pending", "ожидает")),
            );
            const Je = gr(
              "×",
              () => void H({ action: "cancel", username: Ve.username }),
              "sq-chip-x",
            );
            (Je.setAttribute(
              "aria-label",
              Vt(
                `Cancel invitation for ${Ve.username}`,
                `Отменить приглашение ${Ve.username}`,
              ),
            ),
              Qe.append(Je),
              Oe.append(Qe));
          }
          ve.append(Oe);
        }
        oe.append(ve);
      }
      const it = R(Vt("Identity", "Знамя"));
      if (
        (it.append(
          T(
            O.name,
            O.color,
            O.emblem,
            O.members.length,
            ((Ce = O.members.find((ve) => ve.id === O.leaderId)) == null
              ? void 0
              : Ce.username) ?? "",
          ),
        ),
        m())
      ) {
        const ve = _t("details", "sq-edit");
        (ve.append(
          _t(
            "summary",
            "",
            Vt("Edit name, colour & emblem", "Имя, цвет и герб"),
          ),
          _(!0, () => {
            const Y = it.querySelector(".sq-identity");
            Y == null ||
              Y.replaceWith(
                T(
                  f.name,
                  f.color,
                  f.emblem,
                  O.members.length,
                  (Me == null ? void 0 : Me.username) ?? "",
                ),
              );
          }),
        ),
          it.append(ve));
      }
      J.append(it);
      const ut = R(Vt("Squad perks", "Возможности"));
      (ut.append(A()), J.append(ut));
      const gt = R(Vt("Membership", "Участие"), "sq-zone");
      (m() &&
        gt.append(
          C(
            Vt("Delete squad", "Удалить отряд"),
            Vt(
              "Disbands the squad and cancels its invitations.",
              "Распускает отряд и отменяет приглашения.",
            ),
            "delete",
          ),
        ),
        gt.append(
          C(
            Vt("Leave squad", "Покинуть отряд"),
            m()
              ? Vt(
                  "Leaving as leader disbands your squad.",
                  "Выход командира распускает отряд.",
                )
              : Vt(
                  "You can join another squad after leaving.",
                  "После выхода можно вступить в другой отряд.",
                ),
            "leave",
          ),
        ),
        J.append(gt));
    } else {
      const Re = R(Vt("Create your squad", "Создай свой отряд"), "sq-create");
      Re.append(
        _t(
          "p",
          "sq-muted",
          Vt(
            "Pick a name, a colour and an emblem. Up to 10 players.",
            "Выбери имя, цвет и герб. До 10 игроков.",
          ),
        ),
      );
      const We = _t("div", "sq-preview-slot"),
        it = () => {
          (We.replaceChildren(T(f.name, f.color, f.emblem, 1)),
            t.style.setProperty("--squad", f.color));
          const gt = F.querySelector(".sq-emblem");
          gt && ((gt.innerHTML = sb(f.emblem)), (gt.style.color = f.color));
        };
      (Re.append(_(!1, it)), oe.append(Re));
      const ut = R(Vt("Preview", "Превью"));
      (ut.append(We, A()), J.append(ut), it());
    }
    ((se.scrollTop = I),
      t.querySelectorAll("button").forEach((Re) => (Re.disabled = r)));
  }
  function D(I) {
    const O = JSON.stringify(I);
    ((Ks = I),
      O !== c &&
        ((c = O),
        x(),
        t.open && N(),
        window.dispatchEvent(new Event("squad-changed"))));
  }
  async function H(I) {
    var X, Q;
    if (r || !Me) return;
    ((r = !0), (h = ""), (d = ""));
    const O = Me.id,
      F = ++o;
    for (const ee of [t, n])
      ee.querySelectorAll("button").forEach((se) => (se.disabled = !0));
    try {
      const ee = await tn("/me/squad", "POST", I);
      O === (Me == null ? void 0 : Me.id) &&
        F === o &&
        ((X = document.activeElement) == null || X.blur(),
        (d = Vt("Squad updated", "Отряд обновлён")),
        D(ee),
        (l = Date.now()));
    } catch (ee) {
      h = ee instanceof Error ? ee.message : String(ee);
    } finally {
      ((r = !1),
        x(),
        t.open && ((Q = document.activeElement) == null || Q.blur(), N()));
    }
  }
  async function G(I = !1) {
    if (
      (s !== ((Me == null ? void 0 : Me.id) ?? "") &&
        ((s = (Me == null ? void 0 : Me.id) ?? ""),
        o++,
        (p = ""),
        (c = ""),
        (h = ""),
        (d = ""),
        D({ squad: null, incoming: [], outgoing: [] }),
        (l = 0)),
      !Me || r || a || document.hidden || (!I && Date.now() - l < 4500))
    )
      return;
    a = !0;
    const O = Me.id,
      F = o;
    try {
      const X = await tn("/me/squad");
      O === (Me == null ? void 0 : Me.id) &&
        F === o &&
        ((h = ""), D(X), (l = Date.now()));
    } catch {
      O === (Me == null ? void 0 : Me.id) &&
        t.open &&
        ((h = Vt(
          "Squads are temporarily unavailable. Try again shortly.",
          "Отряды временно недоступны. Попробуйте чуть позже.",
        )),
        N());
    } finally {
      a = !1;
    }
  }
  return (
    setInterval(() => void G(), 5e3),
    document.addEventListener("visibilitychange", () => void G(!0)),
    window.addEventListener("focus", () => void G(!0)),
    window.addEventListener("online", () => void G(!0)),
    Vo(() => {
      (x(), t.open && N());
    }),
    x(),
    () => {
      (x(), G(!0));
    }
  );
}
