// index-Dp6GxvJu 106 — state
// Lines 66558-66875 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const rf = [
    {
      id: "move",
      done: (n) => n.walked > 8,
      title: () => Yi("Look around and move", "Осмотритесь и пройдитесь"),
      detail: (n) =>
        n.mobile
          ? Yi(
              "Left stick walks, swipe the right side to look.",
              "Левый стик — ходьба, свайп справа — обзор.",
            )
          : document.body.classList.contains("drag-look")
            ? Yi(
                "Hold a mouse button and drag to look around.",
                "Зажмите кнопку мыши и ведите, чтобы осмотреться.",
              )
            : Yi(
                "Move the mouse to look around.",
                "Двигайте мышью, чтобы осмотреться.",
              ),
      key: (n) =>
        n.mobile
          ? ""
          : `${js("forward")}${js("left")}${js("back")}${js("right")}`,
    },
    {
      id: "map",
      done: (n) => n.mapOpened,
      title: () => Yi("Open the map", "Откройте карту"),
      detail: (n) =>
        n.mobile
          ? Yi(
              "Tap the minimap in the corner.",
              "Нажмите на мини-карту в углу.",
            )
          : Yi(
              "Gates, missions and players are marked on it.",
              "На ней отмечены ворота, задания и игроки.",
            ),
      key: (n) => (n.mobile ? "" : js("map")),
    },
    {
      id: "inventory",
      done: (n) => n.inventoryOpened,
      title: () => Yi("Check your inventory", "Загляните в инвентарь"),
      detail: () =>
        Yi(
          "Your rank, armour and items live here.",
          "Здесь ваше звание, броня и предметы.",
        ),
      key: (n) => (n.mobile ? "" : js("inventory")),
    },
    {
      id: "shop",
      done: (n) => n.shopOpened,
      title: () => Yi("Visit the shop", "Откройте магазин"),
      detail: () =>
        Yi(
          "Weapons, tools, blocks and vehicles. You can also sell loot here.",
          "Оружие, инструменты, блоки и техника. Здесь же продаётся добыча.",
        ),
      key: (n) => (n.mobile ? "" : js("shop")),
    },
    {
      id: "leave",
      done: (n) => n.outsideSafeZone || !n.safeZoneExists,
      title: () => Yi("Leave the safe zone", "Выйдите из безопасной зоны"),
      detail: () =>
        Yi(
          "Walk out through any gate. Outside you can mine, build and fight.",
          "Выйдите через любые ворота. Снаружи можно копать, строить и сражаться.",
        ),
    },
    {
      id: "mine",
      done: (n) => n.blocksMined >= 3,
      title: () => Yi("Mine 3 blocks", "Добудьте 3 блока"),
      detail: (n) =>
        (n.mobile
          ? Yi(
              "Hold the hand button while aiming at a block.",
              "Удерживайте кнопку руки, наведясь на блок.",
            )
          : Yi(
              "Hold the left mouse button on a block. Wood and ore sell best.",
              "Зажмите ЛКМ на блоке. Дерево и руда стоят дороже.",
            )) + ` (${Math.min(3, n.blocksMined)}/3)`,
      key: (n) => (n.mobile ? "" : Yi("LMB", "ЛКМ")),
    },
    {
      id: "sell",
      done: (n) => n.earned,
      title: () => Yi("Sell your loot", "Продайте добычу"),
      detail: (n) =>
        n.mobile
          ? Yi(
              "Open the inventory and drag an item onto the sell zone.",
              "Откройте инвентарь и перетащите предмет в зону продажи.",
            )
          : Yi(
              "Right-click an item in your inventory to sell it.",
              "Нажмите ПКМ по предмету в инвентаре, чтобы продать его.",
            ),
      key: (n) => (n.mobile ? "" : Yi("RMB", "ПКМ")),
    },
  ],
  JL = "vr-training-v1";
function EY() {
  try {
    return JSON.parse(localStorage.getItem(JL) ?? "null");
  } catch {
    return null;
  }
}
function lf(n) {
  try {
    localStorage.setItem(JL, JSON.stringify(n));
  } catch {}
}
class xY {
  constructor() {
    w(this, "root", Ji("div", "bt hidden"));
    w(this, "state", EY());
    w(this, "shownStep", "");
    w(this, "celebrateUntil", 0);
    w(this, "active", !1);
    var e;
    ((this.root.id = "basic-training"),
      this.root.setAttribute("role", "status"),
      this.root.setAttribute("aria-live", "polite"),
      (e = document.getElementById("hud")) == null || e.append(this.root));
  }
  begin(e) {
    var t, i;
    if (
      ((t = this.state) != null && t.finished) ||
      ((i = this.state) != null && i.dismissed)
    ) {
      this.active = !1;
      return;
    }
    if (!this.state) {
      if (e > 0) {
        this.active = !1;
        return;
      }
      ((this.state = { done: [] }), lf(this.state));
    }
    this.active = !0;
  }
  restart() {
    ((this.state = { done: [] }),
      lf(this.state),
      (this.shownStep = ""),
      (this.active = !0));
  }
  dismiss() {
    (this.state || (this.state = { done: [] }),
      (this.state.dismissed = !0),
      lf(this.state),
      (this.active = !1),
      this.root.classList.add("hidden"));
  }
  get finished() {
    var e;
    return !!((e = this.state) != null && e.finished);
  }
  update(e, t) {
    if (!this.active || !this.state) {
      this.root.classList.add("hidden");
      return;
    }
    let i = !1;
    for (const l of rf)
      if (!this.state.done.includes(l.id)) {
        if (!l.done(e)) break;
        (this.state.done.push(l.id), (i = !0));
      }
    const s = rf.find((l) => !this.state.done.includes(l.id));
    (i && lf(this.state),
      !s &&
        !this.state.finished &&
        ((this.state.finished = !0),
        lf(this.state),
        (this.celebrateUntil = performance.now() + 7e3)));
    const o = performance.now() < this.celebrateUntil;
    if (!s && !o) {
      ((this.active = !1), this.root.classList.add("hidden"));
      return;
    }
    this.root.classList.toggle("hidden", !t);
    const a =
      ((s == null ? void 0 : s.id) ?? "done") +
      SETTINGS.language +
      (s ? s.detail(e) : "") +
      e.mobile;
    if (a === this.shownStep) return;
    const r = !this.shownStep.startsWith((s == null ? void 0 : s.id) ?? "done");
    ((this.shownStep = a), this.render(s, e, r));
  }
  render(e, t, i) {
    var h;
    this.root.textContent = "";
    const s = Ji("div", "bt-head"),
      o = Ji("span", "bt-label", Yi("Basic training", "Базовая подготовка")),
      a = Ji("span", "bt-count", `${this.state.done.length}/${rf.length}`),
      r = Ji("button", "bt-close");
    ((r.type = "button"),
      (r.textContent = "×"),
      (r.title = Yi("Hide training", "Скрыть обучение")),
      r.setAttribute("aria-label", r.title),
      r.addEventListener("click", (d) => {
        (d.stopPropagation(), this.dismiss());
      }),
      s.append(o, a, r));
    const l = Ji("div", "bt-dots");
    rf.forEach((d, u) => {
      const f = Ji("i");
      (this.state.done.includes(d.id)
        ? (f.className = "done")
        : (d === e || (!e && u === rf.length - 1)) && (f.className = "now"),
        l.append(f));
    });
    const c = Ji("div", "bt-body");
    if (e) {
      const d = Ji("div", "bt-title"),
        u = (h = e.key) == null ? void 0 : h.call(e, t);
      (u && d.append(Ji("kbd", "", u)),
        d.append(document.createTextNode(e.title())),
        c.append(d, Ji("div", "bt-detail", e.detail(t))));
    } else
      c.append(
        Ji(
          "div",
          "bt-title bt-win",
          Yi("Training complete!", "Подготовка пройдена!"),
        ),
        Ji(
          "div",
          "bt-detail",
          Yi(
            "You know the basics. Find an officer on the map for your first mission. Good luck, soldier!",
            "Основы освоены. Найдите офицера на карте и возьмите первое задание. Удачи, боец!",
          ),
        ),
      );
    (this.root.append(s, l, c),
      this.root.classList.toggle("bt-complete", !e),
      i &&
        (this.root.classList.remove("bt-pop"),
        this.root.offsetWidth,
        this.root.classList.add("bt-pop")));
  }
}
const eI = 256,
  tI = 200;
function aM(n, e = "en") {
  const t = n.trimStart().startsWith("/"),
    i = t ? tI : eI;
  return n.length > i
    ? e === "ru"
      ? `Максимальная длина ${t ? "команды" : "сообщения"}: ${i} символов.`
      : `${t ? "Commands" : "Messages"} can contain at most ${i} characters.`
    : !t && /[^\p{L}\p{N} _.,:!?/*&%@\-]/u.test(n)
      ? e === "ru"
        ? "В чате разрешены только буквы, цифры, пробелы и _ - . , : ! ? / * & % @"
        : "Chat allows only letters, numbers, spaces and _ - . , : ! ? / * & % @"
      : null;
}
const z6 = [
  { channel: "any", max: 10, ms: 6e4 },
  { channel: "global", max: 30, ms: 6e5 },
];
class TY {
  constructor() {
    w(this, "sent", []);
  }
  wait(e, t = Date.now()) {
    this.prune(t);
    let i = 0;
    for (const s of z6) {
      if (s.channel === "global" && e !== "global") continue;
      const o = this.sent.filter(
        (a) =>
          t - a.at < s.ms && (s.channel === "any" || a.channel === "global"),
      );
      o.length >= s.max && (i = Math.max(i, o[o.length - s.max].at + s.ms - t));
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
    const t = Math.max(...z6.map((i) => i.ms));
    for (; this.sent.length && e - this.sent[0].at >= t;) this.sent.shift();
  }
}
function AY(n, e, t, i) {
  const s = n % 10,
    o = n % 100;
  return s === 1 && o !== 11
    ? e
    : s >= 2 && s <= 4 && (o < 12 || o > 14)
      ? t
      : i;
}
function _Y(n, e = "en") {
  const t = Math.max(1, Math.ceil(n / 1e3)),
    i = Math.floor(t / 60),
    s = t % 60;
  return e === "ru"
    ? `Вы можете писать сообщения через ${[i ? `${i} мин` : "", s ? `${s} ${AY(s, "секунду", "секунды", "секунд")}` : ""].filter(Boolean).join(" ")}.`
    : `You can send messages again in ${[i ? `${i} min` : "", s ? `${s} ${s === 1 ? "second" : "seconds"}` : ""].filter(Boolean).join(" ")}.`;
}
