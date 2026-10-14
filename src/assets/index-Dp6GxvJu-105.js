// index-Dp6GxvJu 105 — root
// Lines 66235-66557 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const vY = () => !!(qc != null && qc.isOpen),
  XL = () => z.language === "en",
  Yi = (n, e) => (XL() ? n : e),
  Ji = (n, e = "", t = "") => {
    const i = document.createElement(n);
    return (e && (i.className = e), t && (i.textContent = t), i);
  };
function js(n) {
  const e = z.binds[n] ?? "";
  return e
    ? e.startsWith("Key")
      ? e.slice(3)
      : e.startsWith("Digit")
        ? e.slice(5)
        : e === "Space"
          ? Yi("Space", "Пробел")
          : /^(Shift|Alt|Control|Meta)/.test(e)
            ? e
                .replace(/(Left|Right)$/, "")
                .replace("Control", "Ctrl")
                .replace("Meta", "⌘")
            : e.replace(/^Arrow/, "").replace("Backquote", "`")
    : "—";
}
let G2 = "",
  sM = "survival";
function oM(n, e = "") {
  G2 = n;
  const t = `${n} ${e}`.toLowerCase();
  sM = /team deathmatch|\btdm\b|tdm\.|командный бой/.test(t)
    ? "tdm"
    : /frontline|фронт/.test(t)
      ? "frontline"
      : "survival";
}
const ZL = [
    "Falling from a height? Hold the right mouse button (the parachute button on a phone) to open a parachute. Hold S to slow the descent.",
    "Падаете с высоты? Зажмите правую кнопку мыши (на телефоне — кнопку парашюта), чтобы раскрыть парашют. S — замедлить спуск.",
  ],
  QL = [
    "A match can end with a weapon or armour skin drop — rare finishes drop far less often.",
    "В конце матча может выпасть скин оружия или брони — редкие выпадают намного реже.",
  ],
  D6 = [
    "Stuck in a pit or under rubble? Shoot the blocks around you — your weapon breaks them.",
    "Застряли в яме или под завалом? Стреляйте по блокам вокруг — оружие их разрушает.",
  ],
  B6 = [
    "Out of ammo? Stand on any flag your army holds — it refills your magazines. So does the depot ring at your HQ.",
    "Кончились патроны? Встаньте на любую точку, захваченную вашей армией, — она пополнит боезапас. Склад в штабе тоже.",
  ],
  bY = [
    B6,
    D6,
    [
      "Stand inside a flag ring to capture it — the more of your soldiers there, the faster it falls.",
      "Встаньте в круг флага, чтобы захватить его — чем больше ваших бойцов рядом, тем быстрее.",
    ],
    [
      "Every death costs your army a ticket, and holding more flags drains the enemy faster.",
      "Каждая смерть стоит армии очко подкрепления, а больше флагов — быстрее тают очки врага.",
    ],
    [
      "From the deploy screen you can jump straight into a free seat of your army's tank or helicopter.",
      "С экрана высадки можно сразу сесть в свободное место танка или вертолёта своей армии.",
    ],
    B6,
    D6,
    [
      "The engineer's guided rockets lock on when you hold the sight on a vehicle.",
      "Самонаводящиеся ракеты инженера захватывают цель, если держать прицел на технике.",
    ],
    [
      "Damage an enemy and let a comrade finish him — assists and vehicle kills count on the results screen.",
      "Раньте врага, а добьёт товарищ — помощь и уничтоженная техника идут в итоговую статистику.",
    ],
    [
      "The top three soldiers of every round stand on the podium at the end.",
      "Три лучших бойца раунда в конце встают на пьедестал.",
    ],
    ZL,
    QL,
  ],
  wY = [
    [
      "The side with the most kills in ten minutes wins the match.",
      "Побеждает сторона, убившая больше врагов за десять минут.",
    ],
    [
      "A fresh soldier is shielded for a moment — until the first shot.",
      "Только что высадившийся боец защищён несколько секунд — до первого выстрела.",
    ],
    [
      "Get even: killing the soldier who killed you last scores a revenge bonus.",
      "Отомстите: убийство того, кто убил вас последним, даёт бонус за месть.",
    ],
    [
      "Ammo waits in the yellow ring at the back of your yard.",
      "Патроны — в жёлтом круге в глубине вашего двора.",
    ],
    [
      "Kill streaks are announced to everyone — and so is the end of yours.",
      "О серии убийств узнают все — и о том, кто её прервал, тоже.",
    ],
    [
      "The top three soldiers of every match stand on the podium at the end.",
      "Три лучших бойца матча в конце встают на пьедестал.",
    ],
    QL,
  ],
  H6 = [
    ZL,
    [
      "Stuck in a hole? Break the blocks around you — by hand, with a tool or by shooting them.",
      "Застряли в яме? Ломайте блоки вокруг — рукой, инструментом или выстрелами.",
    ],
    [
      "Inside the green ring around the welcome centre nobody can be hurt.",
      "Внутри зелёного круга у центра новичков никто не получает урон.",
    ],
    [
      "Mine ore and logs, then sell them in the shop to earn your first money.",
      "Добывайте руду и брёвна и продавайте их в магазине — это первые деньги.",
    ],
    [
      "Officers marked with gold diamonds on the map hand out paid missions.",
      "Офицеры с золотыми ромбами на карте выдают оплачиваемые задания.",
    ],
    [
      "An Ownership Totem protects your base from other players.",
      "Тотем владения защищает вашу базу от других игроков.",
    ],
    [
      "Sleep in a bed to respawn next to it after death.",
      "Поспите в кровати — после смерти появитесь рядом с ней.",
    ],
    [
      "/rtp drops you at a random safe spot in the wild.",
      "/rtp перенесёт вас в случайное безопасное место в мире.",
    ],
    [
      "Night is dangerous. Build a shelter before dark.",
      "Ночью опасно. Постройте укрытие до темноты.",
    ],
    [
      "Hold the flag at a military base to capture it and get supply crates.",
      "Удерживайте флаг на военной базе, чтобы захватить её и получить припасы.",
    ],
    [
      "Friends can build in your claims, and your air defence spares them.",
      "Друзья могут строить в вашем привате, а ваша ПВО их не трогает.",
    ],
    [
      "Skills grow as you play: run, mine, chop and fight to level them up.",
      "Навыки растут сами: бегайте, копайте, рубите и сражайтесь.",
    ],
  ];
class MY {
  constructor() {
    w(this, "root");
    w(this, "stage");
    w(this, "pct");
    w(this, "fill");
    w(this, "server");
    w(this, "tip");
    w(this, "tipTimer", 0);
    w(this, "hideTimer", 0);
    w(this, "tipIndex", Math.floor(Math.random() * H6.length));
    w(this, "visible", !1);
    w(this, "reported", 0);
    w(this, "shown", 0);
    w(this, "creepCap", 0);
    w(this, "creepTimer", 0);
    ((this.root = document.getElementById("loading")),
      this.root.removeAttribute("data-i18n"),
      (this.root.textContent = ""),
      this.root.setAttribute("role", "status"),
      this.root.setAttribute("aria-live", "polite"));
    const e = Ji("div", "ld-center"),
      t = Ji("div", "ld-brand");
    ((t.innerHTML = "VOXEL<span>RUSH</span>"),
      (this.server = Ji("div", "ld-server")),
      e.append(t, this.server));
    const i = Ji("div", "ld-bottom"),
      s = Ji("div", "ld-tip");
    s.append(Ji("b", "", ""), (this.tip = Ji("span")));
    const o = Ji("div", "ld-progress"),
      a = Ji("div", "ld-row");
    a.append(
      (this.stage = Ji("span", "ld-stage")),
      (this.pct = Ji("span", "ld-pct")),
    );
    const r = Ji("div", "ld-bar");
    (r.append((this.fill = Ji("i"))),
      o.append(a, r),
      i.append(s, o),
      this.root.append(Ji("div", "ld-backdrop"), e, i));
  }
  show(e, t) {
    (clearTimeout(this.hideTimer),
      t !== void 0 && (this.server.textContent = t),
      this.visible ||
        ((this.visible = !0),
        (this.shown = 0),
        (this.creepCap = 0),
        this.setProgress(0),
        this.nextTip(),
        clearInterval(this.tipTimer),
        (this.tipTimer = window.setInterval(() => this.nextTip(), 6500))),
      (this.root.querySelector(".ld-tip b").textContent = Yi("Tip", "Совет")),
      (this.stage.textContent = e),
      this.root.classList.remove("hidden", "ld-out"),
      document.documentElement.classList.remove("boot-joining"));
  }
  setProgress(e, t) {
    ((this.reported = Math.max(0, Math.min(1, e))),
      this.reported < this.shown && (this.shown = this.reported),
      this.render(),
      t && (this.stage.textContent = t));
  }
  creep(e) {
    ((this.creepCap = e),
      clearInterval(this.creepTimer),
      (this.creepTimer = window.setInterval(() => {
        this.shown < this.creepCap &&
          ((this.shown += (this.creepCap - this.shown) * 0.05), this.render());
      }, 150)));
  }
  render() {
    const e = Math.max(this.reported, this.shown);
    ((this.fill.style.width = `${(e * 100).toFixed(1)}%`),
      (this.pct.textContent = `${Math.round(e * 100)}%`));
  }
  hide(e = !1) {
    if (!this.visible) {
      this.root.classList.add("hidden");
      return;
    }
    if (
      ((this.visible = !1),
      clearInterval(this.tipTimer),
      clearInterval(this.creepTimer),
      e)
    ) {
      this.root.classList.add("hidden");
      return;
    }
    (this.setProgress(1),
      this.root.classList.add("ld-out"),
      (this.hideTimer = window.setTimeout(
        () => this.root.classList.add("hidden"),
        520,
      )));
  }
  nextTip() {
    const e = sM === "frontline" ? bY : sM === "tdm" ? wY : H6,
      [t, i] = e[this.tipIndex++ % e.length];
    ((this.tip.textContent = XL() ? t : i),
      this.tip.classList.remove("ld-tip-in"),
      this.tip.offsetWidth,
      this.tip.classList.add("ld-tip-in"));
  }
}
class SY {
  constructor() {
    w(this, "root", Ji("div", "ctp hidden"));
    w(this, "built", "");
    var e;
    ((this.root.id = "click-to-play"),
      this.root.setAttribute("aria-hidden", "true"),
      (e = document.getElementById("hud")) == null || e.append(this.root));
  }
  build() {
    const e = document.body.classList.contains("drag-look"),
      t = z.language + JSON.stringify(z.binds) + e;
    if (t === this.built) return;
    ((this.built = t), (this.root.textContent = ""));
    const i = Ji("div", "ctp-card"),
      s = Ji("div", "ctp-mouse");
    s.innerHTML =
      '<svg viewBox="0 0 24 24"><rect x="6" y="2.5" width="12" height="19" rx="6"/><path d="M12 2.5v6.5M6 9h12"/><path class="ctp-lmb" d="M12 2.5v6.5H6V8.5a6 6 0 0 1 6-6z"/></svg>';
    const o = Ji(
        "div",
        "ctp-title",
        Yi("Click to play", "Нажмите, чтобы играть"),
      ),
      a = Ji(
        "div",
        "ctp-sub",
        e
          ? Yi(
              "Hold a mouse button and drag to look. Click to act, hold to fire or mine. Esc opens the menu.",
              "Камера — зажмите кнопку мыши и ведите. Клик — действие, удержание — стрельба и добыча. Esc — меню.",
            )
          : Yi(
              "The game takes the mouse. Press Esc to get it back.",
              "Игра захватит мышь. Esc — вернуть курсор и открыть меню.",
            ),
      ),
      r = Ji("div", "ctp-keys"),
      c = [
        [
          `${js("forward")}${js("left")}${js("back")}${js("right")}`,
          Yi("Move", "Ходьба"),
        ],
        [js("jump"), Yi("Jump", "Прыжок")],
        [js("sprint"), Yi("Sprint", "Бег")],
        [js("inventory"), Yi("Inventory", "Инвентарь")],
        [js("shop"), Yi("Shop", "Магазин")],
        [js("map"), Yi("Map", "Карта")],
        [js("chat"), Yi("Chat", "Чат")],
        ["Tab", Yi("Players", "Игроки")],
      ];
    for (const [h, d] of c) {
      const u = Ji("div", "ctp-key");
      (u.append(Ji("kbd", "", h), Ji("span", "", d)), r.append(u));
    }
    (i.append(s, o, a, r), this.root.append(i));
  }
  set(e) {
    (e && this.build(), this.root.classList.toggle("hidden", !e));
  }
}
