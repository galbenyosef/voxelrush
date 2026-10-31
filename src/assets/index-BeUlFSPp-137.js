// index-BeUlFSPp 137 — append
// Lines 77727-78075 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function pte(s) {
  const e = document.createElement("section");
  ((e.id = "menu-friends"),
    (
      document.querySelector("#menu .mm-side") ??
      document.getElementById("menu-account")
    ).append(e));
  let t = [],
    i = [],
    n = [],
    o = "",
    a = !1,
    r = !1,
    l = !1,
    c = 0,
    h = 0;
  const d = (T, x = "") => {
      const R = document.createElement(T);
      return ((R.textContent = x), R);
    },
    u = () => !document.hidden,
    f = d("aside");
  ((f.id = "friend-notifications"),
    f.setAttribute("popover", "manual"),
    f.setAttribute("aria-live", "polite"),
    document.body.append(f));
  const p = typeof f.showPopover == "function",
    m = () => {
      if (!p) {
        f.hidden = !1;
        return;
      }
      try {
        f.matches(":popover-open") || f.showPopover();
      } catch {}
    },
    g = () => {
      if (!p) {
        f.hidden = !0;
        return;
      }
      try {
        f.matches(":popover-open") && f.hidePopover();
      } catch {}
    },
    y = new Set();
  function b() {
    const T =
      [...document.querySelectorAll("dialog[open]")].at(-1) ?? document.body;
    f.parentElement !== T &&
      (g(), T.append(f), f.childElementCount && qe && m());
  }
  new MutationObserver(b).observe(document.body, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["open"],
  });
  function S() {
    const T = i.filter((x) => !y.has(x.username));
    for (const x of y) i.some((R) => R.username === x) || y.delete(x);
    f.replaceChildren();
    for (const x of T.slice(0, 3)) {
      const R = d("div"),
        _ = d(
          "p",
          I(
            `${x.username} sent you a friend request`,
            `${x.username} приглашает вас в друзья`,
          ),
        );
      R.append(_);
      for (const C of ["accept", "decline", "dismiss"]) {
        const P = d(
          "button",
          C === "accept"
            ? I("Accept", "Принять")
            : C === "decline"
              ? I("Decline", "Отклонить")
              : I("Later", "Позже"),
        );
        ((P.type = "button"),
          (P.dataset.action = C),
          (P.disabled = a),
          (P.onclick = () => {
            C === "dismiss" ? (y.add(x.username), S()) : E(x.username, C, _);
          }),
          R.append(P));
      }
      f.append(R);
    }
    (b(), T.length && qe ? m() : g());
  }
  (window.addEventListener("armory-opened", () => {
    (g(), S());
  }),
    f.addEventListener("keydown", (T) => T.stopPropagation()));
  function M() {
    S();
    const T = e.querySelector("input"),
      x = document.activeElement === T,
      R = T?.selectionStart,
      _ = e.querySelector("details")?.open ?? !1,
      C = T?.value ?? "";
    if ((e.replaceChildren(), (e.hidden = !qe), !qe)) return;
    const P = t.filter((oe) => oe.servers.length),
      O = d("h3", I("Friends", "Друзья")),
      B = d("div");
    B.className = "friends-heading";
    const H = d("b", I(`${P.length} online`, `${P.length} в сети`));
    ((H.className = "friends-count"), B.append(O, H), e.append(B));
    const D = d(
      "p",
      l
        ? I(
            "Friends are temporarily unavailable",
            "Список друзей временно недоступен",
          )
        : h === 0
          ? I("Loading friends…", "Загрузка друзей…")
          : P.length
            ? ""
            : I("No friends online", "Друзей онлайн нет"),
    );
    ((D.className = "friends-status"),
      D.setAttribute("role", "status"),
      e.append(D));
    const U = d("div");
    U.className = "friends-online";
    for (const oe of P)
      for (const he of oe.servers) {
        const Ie = d("div"),
          ve = d("strong", oe.username),
          it = d("span", he.name),
          st = d("button", I("Join", "Войти"));
        ((it.title = he.address),
          (st.type = "button"),
          st.setAttribute(
            "aria-label",
            `${I("Join", "Присоединиться")} ${oe.username} · ${he.name}`,
          ),
          (st.onclick = async () => {
            st.disabled = !0;
            try {
              qe && (await s(qe.username, he.address));
            } catch {
              D.textContent = I(
                "Could not join the server",
                "Не удалось войти на сервер",
              );
            } finally {
              st.disabled = !1;
            }
          }));
        const ot = d("i", oe.username.slice(0, 2).toUpperCase());
        ((ot.className = "friend-avatar"),
          ot.setAttribute("aria-hidden", "true"),
          Ie.append(ot, ve, it, st),
          U.append(Ie));
      }
    e.append(U);
    const W = document.createElement("details");
    (W.append(
      d(
        "summary",
        I(
          `Friends & requests · ${i.length} received`,
          `Друзья и заявки · входящих: ${i.length}`,
        ),
      ),
    ),
      (W.open = _));
    const J = d("div");
    J.className = "friends-all";
    for (const oe of t) {
      const he = d("div"),
        Ie = d("button", I("Remove", "Удалить"));
      ((Ie.type = "button"),
        (Ie.onclick = () => void E(oe.username, "remove", D)));
      const ve = d("i", oe.username.slice(0, 2).toUpperCase());
      ((ve.className = "friend-avatar" + (oe.servers.length ? " online" : "")),
        he.append(ve),
        he.append(
          d(
            "span",
            oe.username +
              (oe.servers.length ? "" : I(" · offline", " · не в сети")),
          ),
          Ie,
        ),
        J.append(he));
    }
    const j = document.createElement("form"),
      ne = document.createElement("input"),
      ge = d("button", I("Send request", "Отправить"));
    ((ne.maxLength = 24),
      (ne.required = !0),
      (ne.pattern = "[A-Za-z0-9_]{3,24}"),
      (ne.placeholder = I("Player nickname", "Ник игрока")),
      ne.setAttribute("aria-label", ne.placeholder),
      (j.className = "friends-add-form"),
      (ne.value = C),
      (ge.type = "submit"),
      j.append(ne, ge),
      (j.onsubmit = (oe) => {
        (oe.preventDefault(), E(ne.value.trim(), "request", D));
      }));
    const be = d("div");
    be.className = "friends-requests";
    for (const [oe, he] of [
      ["incoming", i],
      ["outgoing", n],
    ]) {
      const Ie = d("div");
      ((Ie.className = "friends-all"),
        Ie.append(
          d(
            "h4",
            oe === "incoming"
              ? I(`Received · ${he.length}`, `Входящие · ${he.length}`)
              : I(`Sent · ${he.length}`, `Исходящие · ${he.length}`),
          ),
        ));
      for (const ve of he) {
        const it = d("div");
        it.append(d("span", ve.username));
        for (const st of oe === "incoming"
          ? ["accept", "decline"]
          : ["cancel"]) {
          const ot = d(
            "button",
            st === "accept"
              ? I("Accept", "Принять")
              : st === "decline"
                ? I("Decline", "Отклонить")
                : I("Cancel", "Отменить"),
          );
          ((ot.type = "button"),
            (ot.dataset.action = st),
            (ot.onclick = () => void E(ve.username, st, D)),
            it.append(ot));
        }
        Ie.append(it);
      }
      be.append(Ie);
    }
    (J.prepend(d("h4", I(`Friends · ${t.length}`, `Друзья · ${t.length}`))),
      W.append(
        d(
          "p",
          I(
            "Build your squad. Explore together.",
            "Собери отряд. Исследуйте мир вместе.",
          ),
        ),
        j,
        be,
        J,
        d(
          "small",
          I(
            "Friends can access your property on every server.",
            "Друзья получают доступ к вашим владениям на всех серверах.",
          ),
        ),
      ),
      e.append(W),
      x &&
        (ne.focus({ preventScroll: !0 }),
        R != null && ne.setSelectionRange(R, R)));
  }
  async function E(T, x, R) {
    if (a) return;
    a = !0;
    const _ = qe?.id,
      C = ++c;
    (e.querySelectorAll("button").forEach((P) => (P.disabled = !0)),
      f.querySelectorAll("button").forEach((P) => (P.disabled = !0)));
    try {
      const P = await Vi(
        x === "remove" ? "/me/friends" : "/me/friends/requests",
        x === "remove" ? "DELETE" : "POST",
        { username: T, action: x },
      );
      _ === qe?.id &&
        C === c &&
        ((t = P.friends),
        (i = P.incoming ?? []),
        (n = P.outgoing ?? []),
        x === "request" && (e.querySelector("input").value = ""),
        (l = !1),
        (h = Date.now()),
        M());
    } catch (P) {
      R.textContent = P instanceof Error ? P.message : String(P);
    } finally {
      ((a = !1),
        S(),
        e.querySelectorAll("button").forEach((P) => (P.disabled = !1)));
    }
  }
  async function A(T = !1) {
    if (
      (o !== (qe?.id ?? "") &&
        ((o = qe?.id ?? ""),
        y.clear(),
        (t = []),
        (i = []),
        (n = []),
        (h = 0),
        (l = !1),
        c++,
        M()),
      !qe || a || r || !u() || (!T && Date.now() - h < 1e4))
    )
      return;
    r = !0;
    const x = qe.id,
      R = c;
    try {
      const _ = await Vi("/me/friends");
      if (x === qe?.id && R === c) {
        const C =
          JSON.stringify([t, i, n]) !==
          JSON.stringify([_.friends, _.incoming ?? [], _.outgoing ?? []]);
        ((t = _.friends), (i = _.incoming ?? []), (n = _.outgoing ?? []));
        const P = C || l || !h;
        ((l = !1), (h = Date.now()), P && M());
      }
    } catch {
      x === qe?.id && R === c && ((l = !0), (h = Date.now()), M());
    } finally {
      r = !1;
    }
  }
  return (
    setInterval(() => void A(!0), 1e4),
    new MutationObserver(() => void A()).observe(
      document.getElementById("menu"),
      { attributes: !0, attributeFilter: ["class"] },
    ),
    document.addEventListener("visibilitychange", () => void A()),
    window.addEventListener("focus", () => void A(!0)),
    window.addEventListener("online", () => void A(!0)),
    () => {
      (M(), A(!0));
    }
  );
}
