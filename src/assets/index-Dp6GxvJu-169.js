// index-Dp6GxvJu 169 — root
// Lines 97491-97765 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const mJ = `
#skills-menu{position:fixed;inset:0;z-index:120;display:grid;place-items:center;padding:max(10px,var(--safe-top,0px)) max(12px,var(--safe-right,0px)) max(10px,var(--safe-bottom,0px)) max(12px,var(--safe-left,0px));
  background:radial-gradient(ellipse at 50% 20%,rgba(255,181,71,.10),rgba(3,6,10,.84) 62%);backdrop-filter:blur(3px);font-family:var(--font-main,'Russo One',sans-serif);color:#eef2f6;animation:sk-in .18s ease-out}
@keyframes sk-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
#skills-menu .sk{width:min(1040px,100%);max-height:100%;display:flex;flex-direction:column;background:linear-gradient(165deg,#182230,#0b1016 75%);border:1px solid rgba(255,255,255,.16);border-radius:14px;box-shadow:0 26px 70px rgba(0,0,0,.6);overflow:hidden}
#skills-menu .sk-head{display:flex;align-items:center;gap:14px;padding:16px 18px 12px;border-bottom:1px solid rgba(255,255,255,.09)}
#skills-menu .sk-emblem{width:48px;height:48px;border-radius:50%;display:grid;place-items:center;font-size:22px;background:radial-gradient(circle at 35% 30%,#ffd27a,#c9781a);box-shadow:0 0 0 3px rgba(255,181,71,.25),0 0 22px rgba(255,181,71,.35);color:#231d05}
#skills-menu .sk-kicker{font-size:11px;letter-spacing:.2em;color:#ffb547}
#skills-menu h2{margin:2px 0 0;font-weight:400;font-size:22px}
#skills-menu .sk-sub{font-size:12px;color:#9eabb8;margin-top:2px}
#skills-menu .sk-total{margin-left:auto;text-align:right}
#skills-menu .sk-total b{display:block;font-size:24px;font-weight:400;color:#ffd27a}
#skills-menu .sk-total span{font-size:11px;color:#9eabb8;letter-spacing:.1em}
#skills-menu .sk-x{width:38px;height:38px;border-radius:10px;border:1px solid #ffffff26;background:#ffffff0a;color:#dbe4ec;font-size:18px;cursor:pointer}
#skills-menu .sk-tabs{display:flex;gap:6px;padding:10px 18px 0;flex-wrap:wrap}
#skills-menu .sk-tab{border:1px solid #ffffff26;background:#ffffff06;color:#9eabb8;border-radius:9px 9px 0 0;padding:9px 14px;font:inherit;font-size:13px;cursor:pointer;border-bottom-color:transparent}
#skills-menu .sk-tab.on{background:#ffb5471c;color:#ffd27a;border-color:rgba(255,181,71,.5)}
#skills-menu .sk-tab .k{font-size:10px;color:#6f7d8b;margin-left:6px}
#skills-menu .sk-body{overflow:auto;padding:14px 18px 18px;border-top:1px solid rgba(255,181,71,.25);display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:10px;align-content:start}
#skills-menu .sk-card{position:relative;padding:12px 12px 11px;border-radius:12px;background:linear-gradient(180deg,#19222ecc,#10161dcc);border:1px solid #ffffff17;display:flex;flex-direction:column;gap:6px}
#skills-menu .sk-card.max{border-color:rgba(255,210,122,.6);box-shadow:inset 0 0 22px rgba(255,210,122,.08)}
#skills-menu .sk-card.fresh{border-color:#ffffff22;opacity:.72}
#skills-menu .sk-top{display:flex;align-items:center;gap:9px}
#skills-menu .sk-ico{width:34px;height:34px;border-radius:9px;display:grid;place-items:center;font-size:17px;background:#ffffff0d;border:1px solid #ffffff1f}
#skills-menu .sk-name{font-size:14px;line-height:1.15}
#skills-menu .sk-how{font-size:10.5px;color:#8592a0;font-family:system-ui,sans-serif}
#skills-menu .sk-lvl{margin-left:auto;min-width:46px;text-align:center;font-size:15px;padding:4px 7px;border-radius:8px;background:#05080c;border:1px solid #ffffff26;color:#eef2f6}
#skills-menu .sk-card.max .sk-lvl{background:linear-gradient(180deg,#ffd27a,#f08a1f);color:#231d05;border-color:#ffd27a}
#skills-menu .sk-bar{height:9px;border-radius:6px;background:#05080c;border:1px solid #ffffff14;overflow:hidden}
#skills-menu .sk-bar i{display:block;height:100%;border-radius:6px;background:linear-gradient(90deg,#f08a1f,#ffd27a);transition:width .3s}
#skills-menu .sk-card.max .sk-bar i{background:linear-gradient(90deg,#f08a1f,#ffe2a8)}
#skills-menu .sk-pips{display:flex;gap:2px}
#skills-menu .sk-pips i{flex:1;height:3px;border-radius:2px;background:#ffffff14}
#skills-menu .sk-pips i.f{background:#ffb547}
#skills-menu .sk-xp{display:flex;justify-content:space-between;font-size:10.5px;color:#8592a0;font-family:system-ui,sans-serif}
#skills-menu .sk-eff{font-size:12px;color:#c9d3dd;font-family:system-ui,sans-serif;line-height:1.35}
#skills-menu .sk-tile{padding:14px;border-radius:12px;background:linear-gradient(180deg,#19222ecc,#10161dcc);border:1px solid #ffffff17}
#skills-menu .sk-tile span{display:block;font-size:11px;letter-spacing:.1em;color:#9eabb8}
#skills-menu .sk-tile b{display:block;font-weight:400;font-size:22px;margin-top:5px;color:#eef2f6}
#skills-menu .sk-tile small{display:block;font-size:11px;color:#8592a0;margin-top:3px;font-family:system-ui,sans-serif}
#skills-menu .sk-foot{padding:0 18px 12px;font-size:11px;color:#6f7d8b;font-family:system-ui,sans-serif}
@media (max-width:820px),(max-height:520px){
  #skills-menu .sk-head{padding:10px 12px 8px;gap:10px}
  #skills-menu .sk-emblem{width:38px;height:38px;font-size:18px}
  #skills-menu h2{font-size:17px}
  #skills-menu .sk-total b{font-size:19px}
  #skills-menu .sk-tabs{padding:6px 12px 0}
  #skills-menu .sk-tab{padding:7px 10px;font-size:12px}
  #skills-menu .sk-body{padding:10px 12px 12px;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px}
  #skills-menu .sk-foot{display:none}
}
#skill-toast{position:fixed;left:50%;top:max(84px,calc(var(--safe-top,0px) + 70px));transform:translateX(-50%);z-index:90;pointer-events:none;display:flex;align-items:center;gap:12px;
  padding:10px 18px 10px 12px;border-radius:14px;background:linear-gradient(180deg,rgba(24,34,48,.96),rgba(11,16,22,.96));border:1px solid rgba(255,210,122,.65);box-shadow:0 10px 40px rgba(0,0,0,.5),0 0 30px rgba(255,210,122,.25);
  font-family:var(--font-main,'Russo One',sans-serif);color:#fff3dc;animation:sk-toast 3.6s ease forwards}
#skill-toast{box-sizing:border-box;width:max-content;max-width:calc(100vw - 32px);overflow-wrap:anywhere}
#skill-toast .t-ico{width:38px;height:38px;flex:none;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 35% 30%,#ffe2a8,#c9781a);color:#231d05}
#skill-toast .t-ico svg{display:block;width:24px;height:24px}
#skill-toast>div:last-child{min-width:0}
body.mobile #skills-menu .sk-tab .k{display:none}
#skill-toast .t-k{font-size:10px;letter-spacing:.2em;color:#ffb547}
#skill-toast .t-n{font-size:16px}
#skill-toast .t-e{font-size:11px;color:#c9d3dd;font-family:system-ui,sans-serif}
@keyframes sk-toast{0%{opacity:0;transform:translate(-50%,-14px) scale(.96)}8%{opacity:1;transform:translate(-50%,0) scale(1.02)}14%{transform:translate(-50%,0) scale(1)}82%{opacity:1}100%{opacity:0;transform:translate(-50%,-8px)}}
`;
function HI() {
  if (document.getElementById("skills-menu-css")) return;
  const n = document.createElement("style");
  ((n.id = "skills-menu-css"), (n.textContent = mJ), document.head.append(n));
}
const El = (n) =>
  n.replace(
    /[&<>"]/g,
    (e) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[e],
  );
function gJ(n, e, t, i) {
  var a;
  (HI(), (a = document.getElementById("skill-toast")) == null || a.remove());
  const s = z.language === "en",
    o = document.createElement("div");
  ((o.id = "skill-toast"),
    o.setAttribute("role", "status"),
    (o.innerHTML = `<div class="t-ico" aria-hidden="true">${Xt.icon(n)}</div><div><div class="t-k">${s ? "SKILL UP" : "НАВЫК ПОВЫШЕН"}</div><div class="t-n">${El(e)} · ${t === hr ? (s ? "MAX" : "МАКС") : `${s ? "level" : "уровень"} ${t}`}</div><div class="t-e">${El(i)}</div></div>`),
    document.body.append(o),
    setTimeout(() => o.remove(), 3700));
}
class yJ {
  constructor(e) {
    w(this, "root", null);
    w(this, "tab", "basic");
    w(this, "renderedAt", 0);
    w(this, "onKey", (e) => {
      if (!this.root) return;
      if (e.code === "Escape" || e.code === z.binds.skills) {
        (e.preventDefault(), e.stopPropagation(), this.close());
        return;
      }
      const t = ["basic", "weapons", "vehicles", "stats"],
        i = e.code.startsWith("Digit") ? +e.code.slice(5) : 0;
      i >= 1 &&
        i <= 4 &&
        (e.preventDefault(),
        e.stopPropagation(),
        (this.tab = t[i - 1]),
        this.render());
    });
    this.host = e;
  }
  get isOpen() {
    return !!this.root;
  }
  toggle() {
    this.root ? this.close() : this.open();
  }
  open(e) {
    if ((HI(), e && (this.tab = e), !this.root)) {
      const t = document.createElement("div");
      ((t.id = "skills-menu"),
        (t.className = "fc-modal"),
        t.setAttribute("role", "dialog"),
        t.setAttribute("aria-modal", "true"),
        t.addEventListener("pointerdown", (i) => {
          i.target === t && this.close();
        }),
        document.body.append(t),
        (this.root = t),
        window.addEventListener("keydown", this.onKey, !0));
    }
    this.render();
  }
  close() {
    this.root &&
      (window.removeEventListener("keydown", this.onKey, !0),
      this.root.remove(),
      (this.root = null),
      this.host.closed());
  }
  update() {
    this.root && performance.now() - this.renderedAt > 1e3 && this.render();
  }
  render() {
    var c;
    const e = this.root;
    if (!e) return;
    this.renderedAt = performance.now();
    const t = z.language === "en",
      i = [...Xt.basicKeys(), ...Uw.map(Tr), ...Fw.map($d)],
      s = i.reduce((h, d) => h + Xt.level(d), 0),
      o = Np(this.host.rankXp()),
      a =
        ((c = e.querySelector(".sk-body")) == null ? void 0 : c.scrollTop) ?? 0,
      r = [
        ["basic", t ? "Basic" : "Основные"],
        ["weapons", t ? "Weapons" : "Оружие"],
        ["vehicles", t ? "Vehicles" : "Техника"],
        ["stats", t ? "Stats" : "Показатели"],
      ];
    ((e.innerHTML = `<div class="sk">
      <div class="sk-head">
        <div class="sk-emblem">★</div>
        <div><div class="sk-kicker">${t ? "SKILLS & SERVICE RECORD" : "НАВЫКИ И ПОКАЗАТЕЛИ"}</div><h2>${El(this.host.nick())}</h2>
          <div class="sk-sub">${El(t ? o.nameEn : o.name)} · ${this.host.rankXp()} XP</div></div>
        <div class="sk-total"><span>${t ? "TOTAL SKILL LEVEL" : "ОБЩИЙ УРОВЕНЬ"}</span><b>${s} / ${i.length * hr}</b></div>
        <button class="sk-x" aria-label="${t ? "Close" : "Закрыть"}">✕</button>
      </div>
      <div class="sk-tabs">${r.map(([h, d], u) => `<button class="sk-tab${h === this.tab ? " on" : ""}" data-tab="${h}">${d}<span class="k">${u + 1}</span></button>`).join("")}</div>
      <div class="sk-body">${this.tab === "stats" ? this.statsHtml(t) : this.cardsHtml(this.tab === "basic" ? Xt.basicKeys() : this.tab === "weapons" ? Uw.map(Tr) : Fw.map($d), t)}</div>
      <div class="sk-foot">${t ? "20 levels per skill. Explore, mine and hit enemies to progress. Repeating actions in one place or against one target gives limited XP." : "20 уровней на навык. Исследуйте мир, добывайте блоки и попадайте по противникам. Повторы на одном месте или по одной цели дают ограниченный опыт."}</div>
    </div>`),
      e.querySelector(".sk-x").addEventListener("click", () => this.close()),
      e.querySelectorAll("[data-tab]").forEach((h) =>
        h.addEventListener("click", () => {
          ((this.tab = h.dataset.tab), this.render());
        }),
      ));
    const l = e.querySelector(".sk-body");
    l && (l.scrollTop = a);
  }
  cardsHtml(e, t) {
    return [...e]
      .sort((s, o) => (Xt.xp[o] ?? 0) - (Xt.xp[s] ?? 0))
      .map((s) => {
        const o = Xt.level(s),
          a = Xt.xp[s] ?? 0,
          r = o >= hr,
          l = Xt.nextAt(s),
          c = Math.round(Xt.progress(s) * 100),
          h = Array.from(
            { length: hr },
            (d, u) => `<i class="${u < o ? "f" : ""}"></i>`,
          ).join("");
        return `<div class="sk-card${r ? " max" : a <= 0 ? " fresh" : ""}">
        <div class="sk-top"><div class="sk-ico">${Xt.icon(s)}</div><div><div class="sk-name">${El(Xt.label(s))}</div><div class="sk-how">${El(Xt.howTo(s))}</div></div>
          <div class="sk-lvl">${o}</div></div>
        <div class="sk-bar"><i style="width:${r ? 100 : c}%"></i></div>
        <div class="sk-pips">${h}</div>
        <div class="sk-xp"><span>${Math.floor(a)} XP</span><span>${r ? (t ? "Mastered" : "Мастерство") : `${t ? "next" : "след."} ${l} XP`}</span></div>
        <div class="sk-eff">${El(Xt.effect(s, o))}</div>
      </div>`;
      })
      .join("");
  }
  statsHtml(e) {
    const t = Xt.stats,
      i = this.host.hp(),
      s = Math.floor((t.playSeconds ?? 0) / 3600),
      o = Math.floor(((t.playSeconds ?? 0) % 3600) / 60),
      a = Math.floor((t.driveSeconds ?? 0) / 3600),
      r = Math.floor(((t.driveSeconds ?? 0) % 3600) / 60),
      l = (t.distance ?? 0) / 1e3,
      c = Math.round(t.shots ?? 0),
      h = Math.round(t.hits ?? 0),
      d = Np(this.host.rankXp()),
      u = Qc.find((m) => m.minXp > this.host.rankXp()),
      f = (m, y, g = "") =>
        `<div class="sk-tile"><span>${m}</span><b>${y}</b>${g ? `<small>${g}</small>` : ""}</div>`,
      p = (m) => Math.round(m).toLocaleString("ru-RU");
    return [
      f(e ? "HEALTH" : "ЗДОРОВЬЕ", `${Math.round(i.hp)} / ${i.max}`),
      f(e ? "BALANCE" : "БАЛАНС", `$${p(this.host.balance())}`),
      f(
        e ? "RANK" : "ЗВАНИЕ",
        El(e ? d.nameEn : d.name),
        u
          ? `${e ? "next" : "далее"}: ${El(e ? u.nameEn : u.name)} · ${u.minXp} XP`
          : "",
      ),
      f(
        e ? "TIME IN SERVICE" : "ВРЕМЯ В ИГРЕ",
        `${s} ${e ? "h" : "ч"} ${o} ${e ? "min" : "мин"}`,
      ),
      f(
        e ? "DISTANCE ON FOOT" : "ПРОЙДЕНО ПЕШКОМ",
        `${l.toFixed(l < 10 ? 2 : 1)} ${e ? "km" : "км"}`,
      ),
      f(
        e ? "AT THE CONTROLS" : "ЗА РЫЧАГАМИ",
        `${a} ${e ? "h" : "ч"} ${r} ${e ? "min" : "мин"}`,
      ),
      f(e ? "JUMPS" : "ПРЫЖКОВ", p(t.jumps ?? 0)),
      f(e ? "BLOCKS MINED" : "БЛОКОВ ДОБЫТО", p(t.blocks ?? 0)),
      f(e ? "WOOD CHOPPED" : "ДРЕВЕСИНЫ СРУБЛЕНО", p(t.logs ?? 0)),
      f(
        e ? "SHOTS FIRED" : "ВЫСТРЕЛОВ",
        p(c),
        c
          ? `${e ? "accuracy" : "точность"} ${Math.round((100 * h) / Math.max(1, c))}%`
          : "",
      ),
      f(e ? "PUNCHES LANDED" : "УДАРОВ РУКОЙ", p(t.punches ?? 0)),
      f(e ? "LEVEL-UPS" : "ПОВЫШЕНИЙ НАВЫКОВ", p(t.levelUps ?? 0)),
    ].join("");
  }
}
const vJ = {
    [P.PLANE]:
      "M80 7 Q70 22 72 53 L12 72 V86 L72 76 V124 L48 139 V146 L80 139 L112 146 V139 L88 124 V76 L148 86 V72 L88 53 Q90 22 80 7Z",
    [P.FIGHTER_JET]:
      "M80 5 L70 36 L68 66 L18 107 V119 L68 101 L70 123 L52 141 V148 L80 137 L108 148 V141 L90 123 L92 101 L142 119 V107 L92 66 L90 36Z",
    [P.HELI]:
      "M80 13 Q59 18 58 48 V82 Q62 99 74 102 L74 140 L55 140 V147 H105 V140 H86 L86 102 Q98 99 102 82 V48 Q101 18 80 13Z M22 26 L138 118 M138 26 L22 118 M48 48 V101 M112 48 V101",
    [P.TANK]:
      "M46 37 H114 V132 H46Z M32 34 H46 V136 H32Z M114 34 H128 V136 H114Z M66 61 H94 V99 H66Z M77 61 V9 H83 V61",
    [P.BOAT]:
      "M80 9 Q39 45 39 85 L45 142 H115 L121 85 Q121 45 80 9Z M59 64 H101 V109 H59Z",
    [P.SUBMARINE]:
      "M80 9 Q61 9 61 36 V122 Q61 148 80 150 Q99 148 99 122 V36 Q99 9 80 9Z M35 51 H125 M48 127 H112 M73 60 H87 V89 H73Z",
    [P.CARRIER]:
      "M52 9 H102 L122 44 V145 H38 V44Z M53 26 V131 M95 58 H113 V110 H95Z",
    [P.SPACE_ROCKET]:
      "M80 7 Q60 29 60 51 V119 L40 144 H62 L80 130 L98 144 H120 L100 119 V51 Q100 29 80 7Z",
    [P.DRONE]:
      "M68 64 H92 V89 H68Z M36 33 L124 121 M124 33 L36 121 M20 33 H52 M108 33 H140 M20 121 H52 M108 121 H140",
  },
  bJ =
    "M47 26 H113 V132 H47Z M51 34 H109 V64 H51Z M38 44 V65 M122 44 V65 M38 103 V125 M122 103 V125 M57 79 H103 V120 H57Z";
