// index-BeUlFSPp 131 — append
// Lines 75556-75904 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Ku(s, e = "rank-insignia") {
  const t = document.createElement("img");
  return (
    (t.className = e),
    (t.src = Nd(s)),
    (t.alt = Lm(s)),
    (t.title = Lm(s)),
    (t.draggable = !1),
    (t.decoding = "async"),
    t
  );
}
const K4 = { report: null },
  Mu = new Map();
async function Fee(s) {
  const e = s.toLowerCase(),
    t = Mu.get(e);
  if (t && performance.now() - t.at < 3e4) return t.value;
  let i = null;
  try {
    ((i = await Vi(`/public/profile/${encodeURIComponent(s)}`)),
      (!i || typeof i.name != "string") && (i = null));
  } catch (n) {
    if (n.status !== 404) throw (Mu.delete(e), n);
  }
  return (
    Mu.set(e, { at: performance.now(), value: i }),
    Mu.size > 64 && Mu.delete(Mu.keys().next().value),
    i
  );
}
const ui = (s, e = "", t) => {
    const i = document.createElement(s);
    return (e && (i.className = e), t !== void 0 && (i.textContent = t), i);
  },
  vo = (s) => new Intl.NumberFormat(ao()).format(Math.round(s));
let Dy = null;
const Uee = () => !!Dy;
function CT(s, e) {
  Dy?.close();
  const t = ui("div", "fc-modal pp-overlay");
  (t.setAttribute("role", "dialog"),
    t.setAttribute("aria-modal", "true"),
    t.setAttribute("aria-label", s.name));
  const i = ui("section", "pp-card"),
    n = ui("button", "pp-close", "×");
  ((n.type = "button"),
    n.setAttribute("aria-label", I("Close", "Закрыть")),
    t.append(i));
  let o = !0;
  const a = () => {
      o &&
        ((o = !1),
        (Dy = null),
        window.removeEventListener("keydown", r, !0),
        t.remove());
    },
    r = (f) => {
      f.code === "Escape" &&
        (f.preventDefault(), f.stopImmediatePropagation(), a());
    };
  (window.addEventListener("keydown", r, !0),
    (n.onclick = a),
    t.addEventListener("pointerdown", (f) => {
      f.target === t && a();
    }));
  for (const f of ["mousedown", "wheel", "touchstart"])
    i.addEventListener(f, (p) => p.stopPropagation(), { passive: !0 });
  ((Dy = { root: t, close: a }), document.body.append(t));
  let l = s.bot ? null : void 0,
    c = s.page ?? "profile";
  const h = () => l?.xp ?? s.xp ?? 0,
    d = () => (s.bot ? s.bot.rank : dm(h()).index),
    u = () => {
      if (!o) return;
      const f = d(),
        p = dm(s.bot ? pa[f].minXp : h());
      i.replaceChildren(n);
      const m = ui("header", "pp-head"),
        g = ui("img", "pp-board");
      ((g.src = Nd(f)), (g.alt = Lm(f)));
      const y = ui("div", "pp-who");
      y.append(ui("small", "pp-rank", Lm(f)), ui("h2", "pp-name", s.name));
      const b = ui("div", "pp-tags");
      if (
        (s.bot && b.append(ui("span", "pp-tag ai", I("AI soldier", "ИИ-боец"))),
        s.self && b.append(ui("span", "pp-tag you", I("You", "Вы"))),
        l?.guest && b.append(ui("span", "pp-tag", I("Guest", "Гость"))),
        b.childElementCount && y.append(b),
        m.append(g, y),
        i.append(m),
        !s.bot)
      ) {
        const E = ui("div", "pp-xp"),
          A = ui("div", "pp-track"),
          T = ui("i");
        ((T.style.width = `${(p.fraction * 100).toFixed(1)}%`), A.append(T));
        const x = ui("div", "pp-nums");
        (x.append(
          ui("b", "", p.next ? `${vo(h())} / ${vo(p.to)} XP` : `${vo(h())} XP`),
        ),
          x.append(
            ui(
              "span",
              "",
              p.next
                ? I(
                    `Next: ${I(p.next.nameEn, p.next.name)} · ${vo(p.to - h())} XP to go`,
                    `Далее: ${I(p.next.nameEn, p.next.name)} · ещё ${vo(p.to - h())} XP`,
                  )
                : I("The highest rank", "Высшее звание"),
            ),
          ),
          E.append(A, x),
          i.append(E));
      }
      const S = ui("div", "pp-tabs");
      S.setAttribute("role", "tablist");
      for (const [E, A] of [
        ["profile", I("Service record", "Послужной список")],
        ["ranks", I("All ranks", "Все звания")],
      ]) {
        const T = ui("button", "pp-tab" + (c === E ? " on" : ""), A);
        ((T.type = "button"),
          T.setAttribute("role", "tab"),
          T.setAttribute("aria-selected", String(c === E)),
          (T.onclick = () => {
            ((c = E), u());
          }),
          S.append(T));
      }
      i.append(S);
      const M = ui("div", "pp-body");
      if ((i.append(M), c === "ranks")) {
        Vee(M, f, !s.bot);
        return;
      }
      if (s.bot) {
        $ee(M, s.bot);
        return;
      }
      if (l === void 0) {
        M.append(
          ui(
            "p",
            "pp-note",
            I("Loading the service record…", "Загружаем послужной список…"),
          ),
        );
        return;
      }
      (l === null
        ? M.append(
            ui(
              "p",
              "pp-note",
              I(
                "This soldier's service record is not available here.",
                "Послужной список этого бойца здесь недоступен.",
              ),
            ),
          )
        : Wee(M, l),
        s.self || Gee(M, s.name));
    };
  (u(),
    s.bot ||
      Fee(s.name)
        .then((f) => {
          ((l = f), u());
        })
        .catch(() => {
          ((l = null), u());
        }));
}
function Gee(s, e) {
  const t = ui("div", "pp-safety"),
    i = ui(
      "button",
      "pp-action" + (Vu(e) ? " on" : ""),
      Vu(e) ? I("Unblock", "Разблокировать") : I("Block", "Заблокировать"),
    );
  if (
    ((i.type = "button"),
    (i.title = I(
      "Hide this player's chat messages and voice for you",
      "Скрыть для вас сообщения и голос этого игрока",
    )),
    (i.onclick = () => {
      const o = !Vu(e);
      (t7(e, o),
        i.classList.toggle("on", o),
        (i.textContent = o
          ? I("Unblock", "Разблокировать")
          : I("Block", "Заблокировать")),
        (n.textContent = o
          ? I(
              "Blocked: you will not see their messages or hear their voice.",
              "Заблокирован: вы не увидите его сообщений и не услышите голос.",
            )
          : ""));
    }),
    t.append(i),
    K4.report)
  ) {
    const o = ui("button", "pp-action report", I("Report", "Пожаловаться"));
    ((o.type = "button"),
      (o.title = I(
        "Send this player's recent chat to the moderators",
        "Отправить модераторам последние сообщения игрока",
      )),
      (o.onclick = () => {
        if (!K4.report?.(e)) {
          n.textContent = I(
            "Reports are sent from a game on an official server: open this card from the Tab list there.",
            "Жалобы отправляются из игры на официальном сервере: откройте эту карточку из списка игроков (Tab).",
          );
          return;
        }
        ((o.disabled = !0),
          (n.textContent = I(
            "Report sent. Thank you — moderators will review it.",
            "Жалоба отправлена. Спасибо — модераторы её рассмотрят.",
          )));
      }),
      t.append(o));
  }
  const n = ui(
    "p",
    "pp-note pp-safety-note",
    Vu(e)
      ? I(
          "Blocked: you will not see their messages or hear their voice.",
          "Заблокирован: вы не увидите его сообщений и не услышите голос.",
        )
      : "",
  );
  s.append(t, n);
}
function ar(s, e, t, i = "") {
  const n = ui("div", "pp-stat" + (i ? " " + i : ""));
  (n.append(ui("b", "", e), ui("small", "", t)), s.append(n));
}
function Wee(s, e) {
  const t = e.stats ?? {},
    i = t.kills ?? 0,
    n = t.deaths ?? 0,
    o = ui("div", "pp-stats");
  (ar(o, n ? (i / n).toFixed(2) : i ? vo(i) : "—", "K/D", "accent"),
    ar(o, vo(i), I("Kills", "Убийства")),
    ar(o, vo(n), I("Deaths", "Смерти")),
    ar(
      o,
      i ? `${Math.round(((t.headshots ?? 0) / i) * 100)}%` : "—",
      I("Headshots", "В голову"),
    ),
    ar(o, vo(t.vehicleKills ?? 0), I("Vehicles destroyed", "Техника")),
    ar(o, vo(t.battles ?? 0), I("Battles", "Бои")),
    ar(
      o,
      t.battles ? `${Math.round(((t.wins ?? 0) / t.battles) * 100)}%` : "—",
      I("Wins", "Победы"),
    ),
    ar(o, vo((t.playSeconds ?? 0) / 3600), I("Hours in action", "Часов в бою")),
    s.append(o));
  const a = ui("div", "pp-looks"),
    r = ui("figure", "pp-character"),
    l = ui("img");
  ((l.alt = ""), (l.decoding = "async"));
  const c = H0.find((f) => f.id === e.character) ?? H0[0];
  (r.append(l, ui("figcaption", "", I(c.name, c.ru))),
    vr("character", c.id, 257, null, !0)
      .then((f) => {
        l.isConnected && (l.src = f);
      })
      .catch(() => {}));
  const h = ui("div", "pp-finishes"),
    d = ui(
      "div",
      "pp-sub",
      I(
        `Weapon finishes · ${vo(e.owned?.finishes ?? 0)}`,
        `Скины оружия · ${vo(e.owned?.finishes ?? 0)}`,
      ),
    );
  h.append(d);
  const u = ui("div", "pp-finish-grid");
  for (const f of e.finishes ?? []) {
    const p = rd.find((y) => y.id === f.s);
    if (!p) continue;
    const m = ui("div", "pp-finish" + (f.on ? " on" : ""));
    m.style.setProperty("--rar", Oo[f.r]?.color ?? "#b0c3d9");
    const g = ui("img");
    ((g.alt = ""),
      (g.decoding = "async"),
      vr("weapon", f.s, f.w)
        .then((y) => {
          g.isConnected && (g.src = y);
        })
        .catch(() => {}),
      (m.title = `${fc(f.w)} | ${I(p.name, p.ru)}`),
      m.append(g, ui("span", "", I(p.name, p.ru))),
      u.append(m));
  }
  if (
    (u.childElementCount ||
      u.append(ui("p", "pp-note", I("No finishes yet", "Скинов пока нет"))),
    h.append(u),
    a.append(r, h),
    s.append(a),
    e.since)
  ) {
    const f = new Date(e.since);
    Number.isNaN(f.getTime()) ||
      s.append(
        ui(
          "p",
          "pp-since",
          I(
            `In service since ${f.toLocaleDateString(ao(), { year: "numeric", month: "long", day: "numeric" })}`,
            `На службе с ${f.toLocaleDateString(ao(), { year: "numeric", month: "long", day: "numeric" })}`,
          ),
        ),
      );
  }
}
function $ee(s, e) {
  const t = ui("div", "pp-stats");
  (ar(
    t,
    e.deaths ? (e.kills / e.deaths).toFixed(2) : String(e.kills),
    "K/D",
    "accent",
  ),
    ar(t, vo(e.kills), I("Kills this round", "Убийств за раунд")),
    ar(t, vo(e.deaths), I("Deaths this round", "Смертей за раунд")),
    ar(t, vo(e.score), I("Score", "Очки")),
    s.append(t),
    s.append(
      ui(
        "p",
        "pp-note",
        I(
          `A soldier of the AI. Its rank shows how well it fights: the higher it is, the sharper its aim and the faster it reacts. Bringing it down pays ${Gu(e.rank, 0)} XP to a Private, ${Gu(e.rank, 11)} XP to a Captain.`,
          `Боец под управлением ИИ. Звание показывает, насколько он силён: чем выше, тем точнее и быстрее он стреляет. За него рядовой получит ${Gu(e.rank, 0)} XP, капитан — ${Gu(e.rank, 11)} XP.`,
        ),
      ),
    ));
}
