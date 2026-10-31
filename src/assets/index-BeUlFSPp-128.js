// index-BeUlFSPp 128 — root
// Lines 74547-74862 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const rN = () => !!ff?.isOpen,
  lN = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        armoryOpen: rN,
        get cosmeticProfile() {
          return Lt;
        },
        cosmeticText: Vt,
        openOwnedCase: oN,
        openSkins: lc,
        ownedCaseCount: Uv,
        ownedCases: _T,
        refreshCosmetics: t3,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ds = (s, e = "", t = "") => {
    const i = document.createElement(s);
    return (e && (i.className = e), t && (i.textContent = t), i);
  };
function go(s) {
  const e = Y.binds[s] ?? "";
  return e
    ? e.startsWith("Key")
      ? e.slice(3)
      : e.startsWith("Digit")
        ? e.slice(5)
        : e === "Space"
          ? I("Space", "Пробел")
          : /^(Shift|Alt|Control|Meta)/.test(e)
            ? e
                .replace(/(Left|Right)$/, "")
                .replace("Control", "Ctrl")
                .replace("Meta", "⌘")
            : e.replace(/^Arrow/, "").replace("Backquote", "`")
    : "—";
}
let Oy = "",
  Ny = "survival";
function $4(s, e = "") {
  Oy = s;
  const t = `${s} ${e}`.toLowerCase();
  Ny = /arms ?race|гонка вооружений/.test(t)
    ? "armsrace"
    : /team deathmatch|\btdm\b|tdm\.|командный бой/.test(t)
      ? "tdm"
      : /frontline|фронт/.test(t)
        ? "frontline"
        : "survival";
}
const cN = [
    "Falling from a height? Hold the right mouse button (the parachute button on a phone) to open a parachute. Hold S to slow the descent.",
    "Падаете с высоты? Зажмите правую кнопку мыши (на телефоне — кнопку парашюта), чтобы раскрыть парашют. S — замедлить спуск.",
  ],
  RT = [
    "A match can end with a weapon or armour skin drop — rare finishes drop far less often.",
    "В конце матча может выпасть скин оружия или брони — редкие выпадают намного реже.",
  ],
  uk = [
    "Stuck in a pit or under rubble? Shoot the blocks around you — your weapon breaks them.",
    "Застряли в яме или под завалом? Стреляйте по блокам вокруг — оружие их разрушает.",
  ],
  fk = [
    "Out of ammo? Stand on any flag your army holds — it refills your magazines. So does the depot ring at your HQ.",
    "Кончились патроны? Встаньте на любую точку, захваченную вашей армией, — она пополнит боезапас. Склад в штабе тоже.",
  ],
  wee = [
    fk,
    uk,
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
    fk,
    uk,
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
    cN,
    RT,
  ],
  Mee = [
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
    RT,
  ],
  See = [
    [
      "Every kill hands you the next weapon. The first kill with the golden knife wins the match.",
      "Каждое убийство даёт следующее оружие. Первое убийство золотым ножом выигрывает матч.",
    ],
    [
      "Everyone for themselves: every other soldier is your enemy.",
      "Каждый сам за себя: любой другой боец — враг.",
    ],
    [
      "A knife kill steals a level: you climb one, your victim drops one.",
      "Убийство ножом крадёт уровень: вы поднимаетесь, жертва опускается.",
    ],
    [
      "Twelve weapons from rifles down to pistols — the leader always has the hardest one to win with.",
      "Двенадцать видов оружия, от винтовок до пистолетов: у лидера всегда самое трудное.",
    ],
    [
      "Bullets never run out here. Reload, and keep moving.",
      "Патроны здесь не кончаются. Перезаряжайтесь и не стойте на месте.",
    ],
    [
      "You are back in the fight a moment after you fall — no deploy screen.",
      "После гибели вы сразу возвращаетесь в бой — без экрана высадки.",
    ],
    RT,
  ],
  pk = [
    cN,
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
class Eee {
  root;
  stage;
  pct;
  fill;
  server;
  tip;
  tipTimer = 0;
  hideTimer = 0;
  tipIndex = Math.floor(Math.random() * pk.length);
  visible = !1;
  constructor() {
    ((this.root = document.getElementById("loading")),
      this.root.removeAttribute("data-i18n"),
      (this.root.textContent = ""),
      this.root.setAttribute("role", "status"),
      this.root.setAttribute("aria-live", "polite"));
    const e = ds("div", "ld-center"),
      t = ds("div", "ld-brand");
    ((t.innerHTML = "VOXEL<span>RUSH</span>"),
      (this.server = ds("div", "ld-server")),
      e.append(t, this.server));
    const i = ds("div", "ld-bottom"),
      n = ds("div", "ld-tip");
    n.append(ds("b", "", ""), (this.tip = ds("span")));
    const o = ds("div", "ld-progress"),
      a = ds("div", "ld-row");
    a.append(
      (this.stage = ds("span", "ld-stage")),
      (this.pct = ds("span", "ld-pct")),
    );
    const r = ds("div", "ld-bar");
    (r.append((this.fill = ds("i"))),
      o.append(a, r),
      i.append(n, o),
      this.root.append(ds("div", "ld-backdrop"), e, i));
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
      (this.root.querySelector(".ld-tip b").textContent = I("Tip", "Совет")),
      (this.stage.textContent = e),
      this.root.classList.remove("hidden", "ld-out"),
      document.documentElement.classList.remove("boot-joining"));
  }
  reported = 0;
  shown = 0;
  creepCap = 0;
  creepTimer = 0;
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
    const e =
        Ny === "frontline"
          ? wee
          : Ny === "tdm"
            ? Mee
            : Ny === "armsrace"
              ? See
              : pk,
      [t, i] = e[this.tipIndex++ % e.length];
    ((this.tip.textContent = I(t, i)),
      this.tip.classList.remove("ld-tip-in"),
      this.tip.offsetWidth,
      this.tip.classList.add("ld-tip-in"));
  }
}
