// index-Dp6GxvJu 112 — append
// Lines 68750-69116 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function oj(n) {
  const e = document.createElement("section");
  ((e.id = "menu-friends"),
    (
      document.querySelector("#menu .mm-side") ??
      document.getElementById("menu-account")
    ).append(e));
  let t = [],
    i = [],
    s = [],
    o = "",
    a = !1,
    r = !1,
    l = !1,
    c = 0,
    h = 0;
  const d = (_, C = "") => {
      const R = document.createElement(_);
      return ((R.textContent = C), R);
    },
    u = () => !document.hidden,
    f = () => SETTINGS.language === "en",
    p = d("aside");
  ((p.id = "friend-notifications"),
    p.setAttribute("popover", "manual"),
    p.setAttribute("aria-live", "polite"),
    document.body.append(p));
  const m = typeof p.showPopover == "function",
    y = () => {
      if (!m) {
        p.hidden = !1;
        return;
      }
      try {
        p.matches(":popover-open") || p.showPopover();
      } catch {}
    },
    g = () => {
      if (!m) {
        p.hidden = !0;
        return;
      }
      try {
        p.matches(":popover-open") && p.hidePopover();
      } catch {}
    },
    b = new Set();
  function S() {
    const _ =
      [...document.querySelectorAll("dialog[open]")].at(-1) ?? document.body;
    p.parentElement !== _ &&
      (g(), _.append(p), p.childElementCount && Me && y());
  }
  new MutationObserver(S).observe(document.body, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["open"],
  });
  function M() {
    const _ = i.filter((C) => !b.has(C.username));
    for (const C of b) i.some((R) => R.username === C) || b.delete(C);
    p.replaceChildren();
    for (const C of _.slice(0, 3)) {
      const R = d("div"),
        L = d(
          "p",
          f()
            ? `${C.username} sent you a friend request`
            : `${C.username} приглашает вас в друзья`,
        );
      R.append(L);
      for (const N of ["accept", "decline", "dismiss"]) {
        const D = d(
          "button",
          N === "accept"
            ? f()
              ? "Accept"
              : "Принять"
            : N === "decline"
              ? f()
                ? "Decline"
                : "Отклонить"
              : f()
                ? "Later"
                : "Позже",
        );
        ((D.type = "button"),
          (D.dataset.action = N),
          (D.disabled = a),
          (D.onclick = () => {
            N === "dismiss" ? (b.add(C.username), M()) : T(C.username, N, L);
          }),
          R.append(D));
      }
      p.append(R);
    }
    (S(), _.length && Me ? y() : g());
  }
  (window.addEventListener("armory-opened", () => {
    (g(), M());
  }),
    p.addEventListener("keydown", (_) => _.stopPropagation()));
  function x() {
    var re;
    M();
    const _ = e.querySelector("input"),
      C = document.activeElement === _,
      R = _ == null ? void 0 : _.selectionStart,
      L = ((re = e.querySelector("details")) == null ? void 0 : re.open) ?? !1,
      N = (_ == null ? void 0 : _.value) ?? "";
    if ((e.replaceChildren(), (e.hidden = !Me), !Me)) return;
    const D = t.filter((Ce) => Ce.servers.length),
      H = d("h3", f() ? "Friends" : "Друзья"),
      G = d("div");
    G.className = "friends-heading";
    const I = d("b", f() ? `${D.length} online` : `${D.length} в сети`);
    ((I.className = "friends-count"), G.append(H, I), e.append(G));
    const O = d(
      "p",
      l
        ? f()
          ? "Friends are temporarily unavailable"
          : "Список друзей временно недоступен"
        : h === 0
          ? f()
            ? "Loading friends…"
            : "Загрузка друзей…"
          : D.length
            ? ""
            : f()
              ? "No friends online"
              : "Друзей онлайн нет",
    );
    ((O.className = "friends-status"),
      O.setAttribute("role", "status"),
      e.append(O));
    const F = d("div");
    F.className = "friends-online";
    for (const Ce of D)
      for (const Re of Ce.servers) {
        const We = d("div"),
          it = d("strong", Ce.username),
          ut = d("span", Re.name),
          gt = d("button", f() ? "Join" : "Войти");
        ((ut.title = Re.address),
          (gt.type = "button"),
          gt.setAttribute(
            "aria-label",
            `${f() ? "Join" : "Присоединиться"} ${Ce.username} · ${Re.name}`,
          ),
          (gt.onclick = async () => {
            gt.disabled = !0;
            try {
              Me && (await n(Me.username, Re.address));
            } catch {
              O.textContent = f()
                ? "Could not join the server"
                : "Не удалось войти на сервер";
            } finally {
              gt.disabled = !1;
            }
          }));
        const ve = d("i", Ce.username.slice(0, 2).toUpperCase());
        ((ve.className = "friend-avatar"),
          ve.setAttribute("aria-hidden", "true"),
          We.append(ve, it, ut, gt),
          F.append(We));
      }
    e.append(F);
    const X = document.createElement("details");
    (X.append(
      d(
        "summary",
        f()
          ? `Friends & requests · ${i.length} received`
          : `Друзья и заявки · входящих: ${i.length}`,
      ),
    ),
      (X.open = L));
    const Q = d("div");
    Q.className = "friends-all";
    for (const Ce of t) {
      const Re = d("div"),
        We = d("button", f() ? "Remove" : "Удалить");
      ((We.type = "button"),
        (We.onclick = () => void T(Ce.username, "remove", O)));
      const it = d("i", Ce.username.slice(0, 2).toUpperCase());
      ((it.className = "friend-avatar" + (Ce.servers.length ? " online" : "")),
        Re.append(it),
        Re.append(
          d(
            "span",
            Ce.username +
              (Ce.servers.length ? "" : f() ? " · offline" : " · не в сети"),
          ),
          We,
        ),
        Q.append(Re));
    }
    const ee = document.createElement("form"),
      se = document.createElement("input"),
      oe = d("button", f() ? "Send request" : "Отправить");
    ((se.maxLength = 24),
      (se.required = !0),
      (se.pattern = "[A-Za-z0-9_]{3,24}"),
      (se.placeholder = f() ? "Player nickname" : "Ник игрока"),
      se.setAttribute("aria-label", se.placeholder),
      (ee.className = "friends-add-form"),
      (se.value = N),
      (oe.type = "submit"),
      ee.append(se, oe),
      (ee.onsubmit = (Ce) => {
        (Ce.preventDefault(), T(se.value.trim(), "request", O));
      }));
    const J = d("div");
    J.className = "friends-requests";
    for (const [Ce, Re] of [
      ["incoming", i],
      ["outgoing", s],
    ]) {
      const We = d("div");
      ((We.className = "friends-all"),
        We.append(
          d(
            "h4",
            Ce === "incoming"
              ? f()
                ? `Received · ${Re.length}`
                : `Входящие · ${Re.length}`
              : f()
                ? `Sent · ${Re.length}`
                : `Исходящие · ${Re.length}`,
          ),
        ));
      for (const it of Re) {
        const ut = d("div");
        ut.append(d("span", it.username));
        for (const gt of Ce === "incoming"
          ? ["accept", "decline"]
          : ["cancel"]) {
          const ve = d(
            "button",
            gt === "accept"
              ? f()
                ? "Accept"
                : "Принять"
              : gt === "decline"
                ? f()
                  ? "Decline"
                  : "Отклонить"
                : f()
                  ? "Cancel"
                  : "Отменить",
          );
          ((ve.type = "button"),
            (ve.dataset.action = gt),
            (ve.onclick = () => void T(it.username, gt, O)),
            ut.append(ve));
        }
        We.append(ut);
      }
      J.append(We);
    }
    (Q.prepend(d("h4", f() ? `Friends · ${t.length}` : `Друзья · ${t.length}`)),
      X.append(
        d(
          "p",
          f()
            ? "Build your squad. Explore together."
            : "Собери отряд. Исследуйте мир вместе.",
        ),
        ee,
        J,
        Q,
        d(
          "small",
          f()
            ? "Friends can access your property on every server."
            : "Друзья получают доступ к вашим владениям на всех серверах.",
        ),
      ),
      e.append(X),
      C &&
        (se.focus({ preventScroll: !0 }),
        R != null && se.setSelectionRange(R, R)));
  }
  async function T(_, C, R) {
    if (a) return;
    a = !0;
    const L = Me == null ? void 0 : Me.id,
      N = ++c;
    (e.querySelectorAll("button").forEach((D) => (D.disabled = !0)),
      p.querySelectorAll("button").forEach((D) => (D.disabled = !0)));
    try {
      const D = await tn(
        C === "remove" ? "/me/friends" : "/me/friends/requests",
        C === "remove" ? "DELETE" : "POST",
        { username: _, action: C },
      );
      L === (Me == null ? void 0 : Me.id) &&
        N === c &&
        ((t = D.friends),
        (i = D.incoming ?? []),
        (s = D.outgoing ?? []),
        C === "request" && (e.querySelector("input").value = ""),
        (l = !1),
        (h = Date.now()),
        x());
    } catch (D) {
      R.textContent = D instanceof Error ? D.message : String(D);
    } finally {
      ((a = !1),
        M(),
        e.querySelectorAll("button").forEach((D) => (D.disabled = !1)));
    }
  }
  async function A(_ = !1) {
    if (
      (o !== ((Me == null ? void 0 : Me.id) ?? "") &&
        ((o = (Me == null ? void 0 : Me.id) ?? ""),
        b.clear(),
        (t = []),
        (i = []),
        (s = []),
        (h = 0),
        (l = !1),
        c++,
        x()),
      !Me || a || r || !u() || (!_ && Date.now() - h < 1e4))
    )
      return;
    r = !0;
    const C = Me.id,
      R = c;
    try {
      const L = await tn("/me/friends");
      if (C === (Me == null ? void 0 : Me.id) && R === c) {
        const N =
          JSON.stringify([t, i, s]) !==
          JSON.stringify([L.friends, L.incoming ?? [], L.outgoing ?? []]);
        ((t = L.friends), (i = L.incoming ?? []), (s = L.outgoing ?? []));
        const D = N || l || !h;
        ((l = !1), (h = Date.now()), D && x());
      }
    } catch {
      C === (Me == null ? void 0 : Me.id) &&
        R === c &&
        ((l = !0), (h = Date.now()), x());
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
      (x(), A(!0));
    }
  );
}
