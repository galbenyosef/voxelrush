// index-BeUlFSPp 129 — root
// Lines 74863-75206 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Aee {
  root = ds("div", "ctp hidden");
  built = "";
  constructor() {
    ((this.root.id = "click-to-play"),
      this.root.setAttribute("aria-hidden", "true"),
      document.getElementById("hud")?.append(this.root));
  }
  build() {
    const e = document.body.classList.contains("drag-look"),
      t = v0() + JSON.stringify(Y.binds) + e;
    if (t === this.built) return;
    ((this.built = t), (this.root.textContent = ""));
    const i = ds("div", "ctp-card"),
      n = ds("div", "ctp-mouse");
    n.innerHTML =
      '<svg viewBox="0 0 24 24"><rect x="6" y="2.5" width="12" height="19" rx="6"/><path d="M12 2.5v6.5M6 9h12"/><path class="ctp-lmb" d="M12 2.5v6.5H6V8.5a6 6 0 0 1 6-6z"/></svg>';
    const o = ds(
        "div",
        "ctp-title",
        I("Click to play", "Нажмите, чтобы играть"),
      ),
      a = ds(
        "div",
        "ctp-sub",
        e
          ? I(
              "Hold a mouse button and drag to look. Click to act, hold to fire or mine. Esc opens the menu.",
              "Камера — зажмите кнопку мыши и ведите. Клик — действие, удержание — стрельба и добыча. Esc — меню.",
            )
          : I(
              "The game takes the mouse. Press Esc to get it back.",
              "Игра захватит мышь. Esc — вернуть курсор и открыть меню.",
            ),
      ),
      r = ds("div", "ctp-keys"),
      c = [
        [
          `${go("forward")}${go("left")}${go("back")}${go("right")}`,
          I("Move", "Ходьба"),
        ],
        [go("jump"), I("Jump", "Прыжок")],
        [go("sprint"), I("Sprint", "Бег")],
        [go("inventory"), I("Inventory", "Инвентарь")],
        [go("shop"), I("Shop", "Магазин")],
        [go("map"), I("Map", "Карта")],
        [go("chat"), I("Chat", "Чат")],
        ["Tab", I("Players", "Игроки")],
      ];
    for (const [h, d] of c) {
      const u = ds("div", "ctp-key");
      (u.append(ds("kbd", "", h), ds("span", "", d)), r.append(u));
    }
    (i.append(n, o, a, r), this.root.append(i));
  }
  set(e) {
    (e && this.build(), this.root.classList.toggle("hidden", !e));
  }
}
const Dp = [
    {
      id: "move",
      done: (s) => s.walked > 8,
      title: () => I("Look around and move", "Осмотритесь и пройдитесь"),
      detail: (s) =>
        s.mobile
          ? I(
              "Left stick walks, swipe the right side to look.",
              "Левый стик — ходьба, свайп справа — обзор.",
            )
          : document.body.classList.contains("drag-look")
            ? I(
                "Hold a mouse button and drag to look around.",
                "Зажмите кнопку мыши и ведите, чтобы осмотреться.",
              )
            : I(
                "Move the mouse to look around.",
                "Двигайте мышью, чтобы осмотреться.",
              ),
      key: (s) =>
        s.mobile
          ? ""
          : `${go("forward")}${go("left")}${go("back")}${go("right")}`,
    },
    {
      id: "map",
      done: (s) => s.mapOpened,
      title: () => I("Open the map", "Откройте карту"),
      detail: (s) =>
        s.mobile
          ? I("Tap the minimap in the corner.", "Нажмите на мини-карту в углу.")
          : I(
              "Gates, missions and players are marked on it.",
              "На ней отмечены ворота, задания и игроки.",
            ),
      key: (s) => (s.mobile ? "" : go("map")),
    },
    {
      id: "inventory",
      done: (s) => s.inventoryOpened,
      title: () => I("Check your inventory", "Загляните в инвентарь"),
      detail: () =>
        I(
          "Your rank, armour and items live here.",
          "Здесь ваше звание, броня и предметы.",
        ),
      key: (s) => (s.mobile ? "" : go("inventory")),
    },
    {
      id: "shop",
      done: (s) => s.shopOpened,
      title: () => I("Visit the shop", "Откройте магазин"),
      detail: () =>
        I(
          "Weapons, tools, blocks and vehicles. You can also sell loot here.",
          "Оружие, инструменты, блоки и техника. Здесь же продаётся добыча.",
        ),
      key: (s) => (s.mobile ? "" : go("shop")),
    },
    {
      id: "leave",
      done: (s) => s.outsideSafeZone || !s.safeZoneExists,
      title: () => I("Leave the safe zone", "Выйдите из безопасной зоны"),
      detail: () =>
        I(
          "Walk out through any gate. Outside you can mine, build and fight.",
          "Выйдите через любые ворота. Снаружи можно копать, строить и сражаться.",
        ),
    },
    {
      id: "mine",
      done: (s) => s.blocksMined >= 3,
      title: () => I("Mine 3 blocks", "Добудьте 3 блока"),
      detail: (s) =>
        (s.mobile
          ? I(
              "Hold the hand button while aiming at a block.",
              "Удерживайте кнопку руки, наведясь на блок.",
            )
          : I(
              "Hold the left mouse button on a block. Wood and ore sell best.",
              "Зажмите ЛКМ на блоке. Дерево и руда стоят дороже.",
            )) + ` (${Math.min(3, s.blocksMined)}/3)`,
      key: (s) => (s.mobile ? "" : I("LMB", "ЛКМ")),
    },
    {
      id: "sell",
      done: (s) => s.earned,
      title: () => I("Sell your loot", "Продайте добычу"),
      detail: (s) =>
        s.mobile
          ? I(
              "Open the inventory and drag an item onto the sell zone.",
              "Откройте инвентарь и перетащите предмет в зону продажи.",
            )
          : I(
              "Right-click an item in your inventory to sell it.",
              "Нажмите ПКМ по предмету в инвентаре, чтобы продать его.",
            ),
      key: (s) => (s.mobile ? "" : I("RMB", "ПКМ")),
    },
  ],
  hN = "vr-training-v1";
function Tee() {
  try {
    return JSON.parse(localStorage.getItem(hN) ?? "null");
  } catch {
    return null;
  }
}
function Hp(s) {
  try {
    localStorage.setItem(hN, JSON.stringify(s));
  } catch {}
}
class xee {
  root = ds("div", "bt hidden");
  state = Tee();
  shownStep = "";
  celebrateUntil = 0;
  active = !1;
  constructor() {
    ((this.root.id = "basic-training"),
      this.root.setAttribute("role", "status"),
      this.root.setAttribute("aria-live", "polite"),
      document.getElementById("hud")?.append(this.root));
  }
  begin(e) {
    if (this.state?.finished || this.state?.dismissed) {
      this.active = !1;
      return;
    }
    if (!this.state) {
      if (e > 0) {
        this.active = !1;
        return;
      }
      ((this.state = { done: [] }), Hp(this.state));
    }
    this.active = !0;
  }
  restart() {
    ((this.state = { done: [] }),
      Hp(this.state),
      (this.shownStep = ""),
      (this.active = !0));
  }
  dismiss() {
    (this.state || (this.state = { done: [] }),
      (this.state.dismissed = !0),
      Hp(this.state),
      (this.active = !1),
      this.root.classList.add("hidden"));
  }
  get finished() {
    return !!this.state?.finished;
  }
  update(e, t) {
    if (!this.active || !this.state) {
      this.root.classList.add("hidden");
      return;
    }
    let i = !1;
    for (const l of Dp)
      if (!this.state.done.includes(l.id)) {
        if (!l.done(e)) break;
        (this.state.done.push(l.id), (i = !0));
      }
    const n = Dp.find((l) => !this.state.done.includes(l.id));
    (i && Hp(this.state),
      !n &&
        !this.state.finished &&
        ((this.state.finished = !0),
        Hp(this.state),
        (this.celebrateUntil = performance.now() + 7e3)));
    const o = performance.now() < this.celebrateUntil;
    if (!n && !o) {
      ((this.active = !1), this.root.classList.add("hidden"));
      return;
    }
    this.root.classList.toggle("hidden", !t);
    const a = (n?.id ?? "done") + v0() + (n ? n.detail(e) : "") + e.mobile;
    if (a === this.shownStep) return;
    const r = !this.shownStep.startsWith(n?.id ?? "done");
    ((this.shownStep = a), this.render(n, e, r));
  }
  render(e, t, i) {
    this.root.textContent = "";
    const n = ds("div", "bt-head"),
      o = ds("span", "bt-label", I("Basic training", "Базовая подготовка")),
      a = ds("span", "bt-count", `${this.state.done.length}/${Dp.length}`),
      r = ds("button", "bt-close");
    ((r.type = "button"),
      (r.textContent = "×"),
      (r.title = I("Hide training", "Скрыть обучение")),
      r.setAttribute("aria-label", r.title),
      r.addEventListener("click", (h) => {
        (h.stopPropagation(), this.dismiss());
      }),
      n.append(o, a, r));
    const l = ds("div", "bt-dots");
    Dp.forEach((h, d) => {
      const u = ds("i");
      (this.state.done.includes(h.id)
        ? (u.className = "done")
        : (h === e || (!e && d === Dp.length - 1)) && (u.className = "now"),
        l.append(u));
    });
    const c = ds("div", "bt-body");
    if (e) {
      const h = ds("div", "bt-title"),
        d = e.key?.(t);
      (d && h.append(ds("kbd", "", d)),
        h.append(document.createTextNode(e.title())),
        c.append(h, ds("div", "bt-detail", e.detail(t))));
    } else
      c.append(
        ds(
          "div",
          "bt-title bt-win",
          I("Training complete!", "Подготовка пройдена!"),
        ),
        ds(
          "div",
          "bt-detail",
          I(
            "You know the basics. Find an officer on the map for your first mission. Good luck, soldier!",
            "Основы освоены. Найдите офицера на карте и возьмите первое задание. Удачи, боец!",
          ),
        ),
      );
    (this.root.append(n, l, c),
      this.root.classList.toggle("bt-complete", !e),
      i &&
        (this.root.classList.remove("bt-pop"),
        this.root.offsetWidth,
        this.root.classList.add("bt-pop")));
  }
}
const dN = 256,
  uN = 200;
function V4(s, e = "en") {
  const t = s.trimStart().startsWith("/"),
    i = t ? uN : dN;
  return s.length > i
    ? e === "ru"
      ? `Максимальная длина ${t ? "команды" : "сообщения"}: ${i} символов.`
      : `${t ? "Commands" : "Messages"} can contain at most ${i} characters.`
    : !t && /[^\p{L}\p{N} _.,:!?/*&%@\-]/u.test(s)
      ? e === "ru"
        ? "В чате разрешены только буквы, цифры, пробелы и _ - . , : ! ? / * & % @"
        : "Chat allows only letters, numbers, spaces and _ - . , : ! ? / * & % @"
      : null;
}
const mk = [
  { channel: "any", max: 10, ms: 6e4 },
  { channel: "global", max: 30, ms: 6e5 },
];
class _ee {
  sent = [];
  wait(e, t = Date.now()) {
    this.prune(t);
    let i = 0;
    for (const n of mk) {
      if (n.channel === "global" && e !== "global") continue;
      const o = this.sent.filter(
        (a) =>
          t - a.at < n.ms && (n.channel === "any" || a.channel === "global"),
      );
      o.length >= n.max && (i = Math.max(i, o[o.length - n.max].at + n.ms - t));
    }
    return i;
  }
  record(e, t = Date.now()) {
    (this.sent.push({ at: t, channel: e }), this.prune(t));
  }
  idle(e = Date.now()) {
    return (this.prune(e), this.sent.length === 0);
  }
  prune(e) {
    const t = Math.max(...mk.map((i) => i.ms));
    for (; this.sent.length && e - this.sent[0].at >= t;) this.sent.shift();
  }
}
