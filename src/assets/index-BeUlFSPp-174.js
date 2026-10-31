// index-BeUlFSPp 174 — canvas
// Lines 99172-99514 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function une(s, e) {
  const t = s[5] === "1",
    i = s[6] === "1",
    n = document.createElement("canvas");
  ((n.width = 96), (n.height = 96));
  const o = n.getContext("2d");
  ((o.lineJoin = "round"),
    o.beginPath(),
    o.moveTo(48, 10),
    o.lineTo(88, 80),
    o.lineTo(8, 80),
    o.closePath(),
    (o.fillStyle = "#0b1118e0"),
    o.fill(),
    (o.lineWidth = 7),
    (o.strokeStyle = e),
    o.stroke(),
    (o.fillStyle = e),
    t
      ? (o.beginPath(),
        o.ellipse(48, 60, 20, 9, 0, 0, Math.PI * 2),
        o.fill(),
        o.fillRect(43, 44, 10, 10))
      : (o.beginPath(),
        o.arc(48, 58, 11, 0, Math.PI * 2),
        o.fill(),
        o.fillRect(45, 38, 6, 12)),
    i &&
      ((o.fillStyle = "#ffffff"),
      o.beginPath(),
      o.arc(48, t ? 60 : 58, 4.5, 0, Math.PI * 2),
      o.fill()));
  const a = new Si(n);
  return ((a.colorSpace = Ii), a);
}
function fne(s, e, t, i = 0, n) {
  const o = document.createElement("canvas");
  ((o.width = 128), (o.height = 128));
  const a = o.getContext("2d");
  a.translate(64, 52);
  const r = () => {
    (a.beginPath(),
      a.moveTo(0, -40),
      a.lineTo(40, 0),
      a.lineTo(0, 40),
      a.lineTo(-40, 0),
      a.closePath());
  };
  if (((a.fillStyle = "#0b1118d9"), r(), a.fill(), i > 0 && n)) {
    const c = 40 - 80 * i;
    (a.save(),
      r(),
      a.clip(),
      (a.globalAlpha = 0.72),
      (a.fillStyle = n),
      a.fillRect(-40, c, 80, 40 - c),
      (a.globalAlpha = 1),
      (a.fillStyle = "#ffffff"),
      a.fillRect(-40, c - 1, 80, 2.5),
      a.restore(),
      r());
  }
  ((a.lineWidth = 5),
    (a.strokeStyle = e),
    a.stroke(),
    (a.fillStyle = i > 0.35 ? "#ffffff" : e),
    i > 0 && ((a.shadowColor = "#000000cc"), (a.shadowBlur = 5)),
    (a.font = `${s.length > 2 ? 22 : 34}px "Russo One", system-ui, sans-serif`),
    (a.textAlign = "center"),
    (a.textBaseline = "middle"),
    a.fillText(s, 0, 2),
    (a.shadowBlur = 0),
    t &&
      ((a.font = "600 18px system-ui, sans-serif"),
      (a.fillStyle = "#eef2f6"),
      (a.strokeStyle = "#000000aa"),
      (a.lineWidth = 4),
      a.strokeText(t, 0, 62),
      a.fillText(t, 0, 62)));
  const l = new Si(o);
  return ((l.colorSpace = Ii), l);
}
let Dg = null,
  $w = 0;
function pne(s, e) {
  const t = pa[s];
  if (!t) return;
  (Dg?.remove(), clearTimeout($w));
  const i = document.createElement("div");
  ((i.className = e ? "rank-promo inline" : "rank-promo"),
    i.setAttribute("role", "status"),
    i.setAttribute("aria-live", "polite"));
  const n = document.createElement("img");
  ((n.src = Nd(s)), (n.alt = ""));
  const o = document.createElement("div"),
    a = document.createElement("small");
  a.textContent = I("NEW RANK", "НОВОЕ ЗВАНИЕ");
  const r = document.createElement("b");
  ((r.textContent = I(t.nameEn, t.name)),
    o.append(a, r),
    i.append(n, o),
    e ? e.prepend(i) : document.body.append(i),
    (Dg = i),
    lT(Math.min(6, 2 + Math.floor(s / 4))),
    ($w = window.setTimeout(() => {
      (i.classList.add("out"),
        ($w = window.setTimeout(() => {
          (i.remove(), Dg === i && (Dg = null));
        }, 600)));
    }, 4200)));
}
class mne {
  preview;
  frame = 0;
  last = 0;
  visible = !1;
  key = "";
  observer;
  canvas = document.getElementById("soldier-canvas");
  constructor() {
    ((this.preview = new j5(this.canvas)),
      (this.preview.autoRotate = !1),
      (this.observer = new ResizeObserver(() => {
        this.visible && this.resize();
      })),
      this.observer.observe(this.canvas),
      (this.canvas.onkeydown = (e) => {
        (e.code === "ArrowLeft" || e.code === "ArrowRight") &&
          (e.preventDefault(),
          e.stopPropagation(),
          this.preview.rotate(e.code === "ArrowLeft" ? -0.25 : 0.25));
      }),
      document.querySelectorAll("#soldier-preview-tools button").forEach(
        (e) =>
          (e.onclick = () => {
            const t = Number(e.dataset.turn);
            t ? this.preview.rotate(t * 0.5) : this.preview.resetRotation();
          }),
      ));
  }
  resize() {
    const e = this.canvas.getBoundingClientRect();
    e.width && e.height && this.preview.resize(e.width, e.height);
  }
  show(e, t, i, n, o = {}) {
    ((this.visible = !0), this.resize());
    const a =
      e.character === "custom"
        ? I("Your Creation", "Твоё творение")
        : I(_0(e.character).name, _0(e.character).ru);
    (this.canvas.setAttribute(
      "aria-label",
      `${a} · ${I("Drag or use arrow keys to rotate", "Вращай мышью или стрелками")}`,
    ),
      (this.canvas.title = I(
        "Drag to rotate · ← →",
        "Перетащи для вращения · ← →",
      )));
    const r = JSON.stringify([
      e,
      t.map((l) => [l.id, l.magazine, l.suppressorDurability]),
      i.id,
      i.cosmetic,
      o,
    ]);
    (r !== this.key &&
      ((this.key = r),
      this.preview.showEquippedCharacter(
        e.character,
        e.custom,
        t,
        i,
        e.owner,
        n,
        o,
      ),
      (this.canvas.dataset.skin = e.character),
      (this.canvas.dataset.armor = t.map((l) => l.id).join(","))),
      this.frame ||
        ((this.last = performance.now()),
        (this.frame = requestAnimationFrame(this.tick))));
  }
  tick = (e) => {
    if (!this.visible) {
      this.frame = 0;
      return;
    }
    const t = (e - this.last) / 1e3;
    (t >= 1 / 30 &&
      (document.hidden || this.preview.tick(Math.min(t, 0.1)), (this.last = e)),
      (this.frame = requestAnimationFrame(this.tick)));
  };
  hide() {
    ((this.visible = !1), cancelAnimationFrame(this.frame), (this.frame = 0));
  }
}
const Sn = { DEFAULT: 0, SINGLE: 1, TREE: 2, VEIN: 3 };
function VN(s, e, t = !1) {
  return !!Tl[s] && (e === Sn.TREE || (e === Sn.DEFAULT && !t));
}
const gne = new Set([
  v.COAL_ORE,
  v.IRON_ORE,
  v.GOLD_ORE,
  v.DIAMOND_ORE,
  v.TITANIUM_ORE,
  v.LUNAR_ORE,
]);
function yE(s, e, t) {
  return !!wd[s] && t === Sn.VEIN && gne.has(e);
}
function yne(s, e, t = 1, i = 1, n = !1, o = Sn.DEFAULT) {
  const a = Math.max(1, le[s]?.hardness ?? 30),
    r = wd[e] ?? 0,
    l = Tl[e] ?? 0;
  if (
    [
      v.CACTUS,
      v.TALL_GRASS,
      v.DESERT_GRASS,
      v.FLOWER_RED,
      v.FLOWER_WHITE,
      v.FLOWER_BLUE,
      v.FLOWER_PINK,
      v.FLOWER_YELLOW,
    ].includes(s)
  )
    return 0.12;
  if (e === w.SHEARS && (en(s) || ra(s))) return Oe(a / 240, 0.06, 0.4);
  if (l && Ha(s) === "wood")
    return Oe(
      ((a / (l === 3 ? 620 : l === 2 ? 410 : 260)) *
        (Fm(s) && VN(e, o, n) ? 4.7 : 1)) /
        i,
      0.18 / i,
      2.7,
    );
  const c = [23, 95, 160, 230, 340, 500, 650][r] ?? 23,
    h = Ha(s) === "wood" ? i : en(s) || ra(s) ? 1 : t;
  return (
    Oe(
      ((a / c) * (le[s]?.shape === "cube" ? 1 : 0.55)) / h,
      (r >= 5 ? 0.16 : r > 0 ? 0.25 : 0.55) / h,
      r > 0 ? 2.8 : 6.5,
    ) * (yE(e, s, o) ? 2.5 : 1)
  );
}
const Zk = "fablecraft-tool-modes";
class vne {
  saw = Sn.TREE;
  drill = Sn.SINGLE;
  timer;
  buttonKey = "";
  constructor() {
    try {
      const e = JSON.parse(localStorage.getItem(Zk) ?? "{}");
      (e.saw === Sn.SINGLE && (this.saw = e.saw),
        e.drill === Sn.VEIN && (this.drill = e.drill));
    } catch {}
  }
  supports(e) {
    return !!(Tl[e] || wd[e]);
  }
  mode(e) {
    return Tl[e] ? this.saw : wd[e] ? this.drill : Sn.DEFAULT;
  }
  label(e) {
    const t = this.mode(e);
    return (
      wi(),
      t === Sn.TREE
        ? I("Whole tree", "Всё дерево")
        : t === Sn.VEIN
          ? I("Ore vein", "Вся жила")
          : I("Single block", "Один блок")
    );
  }
  hint(e, t) {
    return (
      wi(),
      `${this.label(e)} · ${t ? I("Mode button", "Кнопка режима") : I("RMB: switch", "ПКМ: сменить")}`
    );
  }
  toggle(e) {
    if (!this.supports(e)) return;
    Tl[e]
      ? (this.saw = this.saw === Sn.TREE ? Sn.SINGLE : Sn.TREE)
      : (this.drill = this.drill === Sn.SINGLE ? Sn.VEIN : Sn.SINGLE);
    try {
      localStorage.setItem(
        Zk,
        JSON.stringify({ saw: this.saw, drill: this.drill }),
      );
    } catch {}
    const t = document.getElementById("tool-mode-toast");
    wi();
    const i = !!Tl[e];
    ((t.querySelector(".tool-mode-caption").textContent = I(
      `${i ? "Chainsaw" : "Drill"} mode selected`,
      `${i ? "Пила" : "Бур"} · выбран режим`,
    )),
      (t.querySelector("strong").textContent = this.label(e)),
      (t.querySelector(".tool-mode-detail").textContent =
        this.mode(e) === Sn.VEIN
          ? I(
              "2.5× mining time · wear per block",
              "В 2,5 раза дольше · износ за каждый блок",
            )
          : this.mode(e) === Sn.TREE
            ? I("Fell connected logs", "Валка дерева целиком")
            : I("Mine only the targeted block", "Только блок под прицелом")),
      clearTimeout(this.timer),
      t.classList.remove("hidden"),
      t.getAnimations().forEach((n) => n.cancel()),
      bne(t),
      t.animate(
        [
          { opacity: 0, transform: "translate(-50%, 8px)" },
          { opacity: 1, transform: "translate(-50%, 0)", offset: 0.1 },
          { opacity: 1, offset: 0.85 },
          { opacity: 0, transform: "translate(-50%, 0)" },
        ],
        { duration: 2e3, fill: "forwards" },
      ),
      (this.timer = setTimeout(() => t.classList.add("hidden"), 2e3)),
      this.updateButton(e));
  }
  updateButton(e) {
    const t = `${e}:${this.mode(e)}:${v0()}`;
    if (t === this.buttonKey) return;
    this.buttonKey = t;
    const i = document.getElementById("mobtoolmode"),
      n = this.label(e);
    (wi(),
      (i.querySelector(".tool-mode-label").textContent = n),
      i.setAttribute(
        "aria-label",
        `${I("Switch tool mode. Current", "Сменить режим инструмента. Сейчас")}: ${n}`,
      ),
      i.setAttribute("aria-pressed", String(this.mode(e) !== Sn.SINGLE)),
      i.classList.toggle("active", this.mode(e) !== Sn.SINGLE));
  }
}
