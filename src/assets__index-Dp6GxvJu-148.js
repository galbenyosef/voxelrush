// assets__index-Dp6GxvJu 148 — canvas
// Lines 90487-90810 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function xZ(n, e) {
  const t = n[5] === "1",
    i = n[6] === "1",
    s = document.createElement("canvas");
  ((s.width = 96), (s.height = 96));
  const o = s.getContext("2d");
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
  const a = new bi(s);
  return ((a.colorSpace = vi), a);
}
function TZ(n, e, t, i = 0, s) {
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
  if (((a.fillStyle = "#0b1118d9"), r(), a.fill(), i > 0 && s)) {
    const c = 40 - 80 * i;
    (a.save(),
      r(),
      a.clip(),
      (a.globalAlpha = 0.72),
      (a.fillStyle = s),
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
    (a.font = `${n.length > 2 ? 22 : 34}px "Russo One", system-ui, sans-serif`),
    (a.textAlign = "center"),
    (a.textBaseline = "middle"),
    a.fillText(n, 0, 2),
    (a.shadowBlur = 0),
    t &&
      ((a.font = "600 18px system-ui, sans-serif"),
      (a.fillStyle = "#eef2f6"),
      (a.strokeStyle = "#000000aa"),
      (a.lineWidth = 4),
      a.strokeText(t, 0, 62),
      a.fillText(t, 0, 62)));
  const l = new bi(o);
  return ((l.colorSpace = vi), l);
}
class AZ {
  constructor() {
    w(this, "preview");
    w(this, "frame", 0);
    w(this, "last", 0);
    w(this, "visible", !1);
    w(this, "key", "");
    w(this, "observer");
    w(this, "canvas", document.getElementById("soldier-canvas"));
    w(this, "tick", (e) => {
      if (!this.visible) {
        this.frame = 0;
        return;
      }
      const t = (e - this.last) / 1e3;
      (t >= 1 / 30 &&
        (document.hidden || this.preview.tick(Math.min(t, 0.1)),
        (this.last = e)),
        (this.frame = requestAnimationFrame(this.tick)));
    });
    ((this.preview = new Ny(this.canvas)),
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
  show(e, t, i, s, o = {}) {
    ((this.visible = !0), this.resize());
    const a = z.language === "en",
      r =
        e.character === "custom"
          ? a
            ? "Your Creation"
            : "Твоё творение"
          : i0(e.character)[a ? "name" : "ru"];
    (this.canvas.setAttribute(
      "aria-label",
      `${r} · ${a ? "Drag or use arrow keys to rotate" : "Вращай мышью или стрелками"}`,
    ),
      (this.canvas.title = a
        ? "Drag to rotate · ← →"
        : "Перетащи для вращения · ← →"));
    const l = JSON.stringify([
      e,
      t.map((c) => [c.id, c.magazine, c.suppressorDurability]),
      i.id,
      i.cosmetic,
      o,
    ]);
    (l !== this.key &&
      ((this.key = l),
      this.preview.showEquippedCharacter(
        e.character,
        e.custom,
        t,
        i,
        e.owner,
        s,
        o,
      ),
      (this.canvas.dataset.skin = e.character),
      (this.canvas.dataset.armor = t.map((c) => c.id).join(","))),
      this.frame ||
        ((this.last = performance.now()),
        (this.frame = requestAnimationFrame(this.tick))));
  }
  hide() {
    ((this.visible = !1), cancelAnimationFrame(this.frame), (this.frame = 0));
  }
}
const cs = { DEFAULT: 0, SINGLE: 1, TREE: 2, VEIN: 3 };
function AI(n, e, t = !1) {
  return !!Nr[n] && (e === cs.TREE || (e === cs.DEFAULT && !t));
}
const _Z = new Set([
  v.COAL_ORE,
  v.IRON_ORE,
  v.GOLD_ORE,
  v.DIAMOND_ORE,
  v.TITANIUM_ORE,
  v.LUNAR_ORE,
]);
function CM(n, e, t) {
  return !!b0[n] && t === cs.VEIN && _Z.has(e);
}
function RZ(n, e, t = 1, i = 1, s = !1, o = cs.DEFAULT) {
  var d, u;
  const a = Math.max(1, ((d = de[n]) == null ? void 0 : d.hardness) ?? 30),
    r = b0[e] ?? 0,
    l = Nr[e] ?? 0;
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
    ].includes(n)
  )
    return 0.12;
  if (e === E.SHEARS && ($n(n) || Bo(n))) return Ne(a / 240, 0.06, 0.4);
  if (l && ca(n) === "wood")
    return Ne(
      ((a / (l === 3 ? 620 : l === 2 ? 410 : 260)) *
        (t1(n) && AI(e, o, s) ? 4.7 : 1)) /
        i,
      0.18 / i,
      2.7,
    );
  const c = [23, 95, 160, 230, 340, 500, 650][r] ?? 23,
    h = ca(n) === "wood" ? i : $n(n) || Bo(n) ? 1 : t;
  return (
    Ne(
      ((a / c) *
        (((u = de[n]) == null ? void 0 : u.shape) === "cube" ? 1 : 0.55)) /
        h,
      (r >= 5 ? 0.16 : r > 0 ? 0.25 : 0.55) / h,
      r > 0 ? 2.8 : 6.5,
    ) * (CM(e, n, o) ? 2.5 : 1)
  );
}
const y_ = "fablecraft-tool-modes";
class CZ {
  constructor() {
    w(this, "saw", cs.TREE);
    w(this, "drill", cs.SINGLE);
    w(this, "timer");
    w(this, "buttonKey", "");
    try {
      const e = JSON.parse(localStorage.getItem(y_) ?? "{}");
      (e.saw === cs.SINGLE && (this.saw = e.saw),
        e.drill === cs.VEIN && (this.drill = e.drill));
    } catch {}
  }
  supports(e) {
    return !!(Nr[e] || b0[e]);
  }
  mode(e) {
    return Nr[e] ? this.saw : b0[e] ? this.drill : cs.DEFAULT;
  }
  label(e) {
    const t = this.mode(e),
      i = z.language === "en";
    return t === cs.TREE
      ? i
        ? "Whole tree"
        : "Всё дерево"
      : t === cs.VEIN
        ? i
          ? "Ore vein"
          : "Вся жила"
        : i
          ? "Single block"
          : "Один блок";
  }
  hint(e, t) {
    const i = z.language === "en";
    return `${this.label(e)} · ${t ? (i ? "Mode button" : "Кнопка режима") : i ? "RMB: switch" : "ПКМ: сменить"}`;
  }
  toggle(e) {
    if (!this.supports(e)) return;
    Nr[e]
      ? (this.saw = this.saw === cs.TREE ? cs.SINGLE : cs.TREE)
      : (this.drill = this.drill === cs.SINGLE ? cs.VEIN : cs.SINGLE);
    try {
      localStorage.setItem(
        y_,
        JSON.stringify({ saw: this.saw, drill: this.drill }),
      );
    } catch {}
    const t = document.getElementById("tool-mode-toast"),
      i = z.language === "en",
      s = !!Nr[e];
    ((t.querySelector(".tool-mode-caption").textContent = i
      ? `${s ? "Chainsaw" : "Drill"} mode selected`
      : `${s ? "Пила" : "Бур"} · выбран режим`),
      (t.querySelector("strong").textContent = this.label(e)),
      (t.querySelector(".tool-mode-detail").textContent =
        this.mode(e) === cs.VEIN
          ? i
            ? "2.5× mining time · wear per block"
            : "В 2,5 раза дольше · износ за каждый блок"
          : this.mode(e) === cs.TREE
            ? i
              ? "Fell connected logs"
              : "Валка дерева целиком"
            : i
              ? "Mine only the targeted block"
              : "Только блок под прицелом"),
      clearTimeout(this.timer),
      t.classList.remove("hidden"),
      t.getAnimations().forEach((o) => o.cancel()),
      kZ(t),
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
    const t = `${e}:${this.mode(e)}:${z.language}`;
    if (t === this.buttonKey) return;
    this.buttonKey = t;
    const i = document.getElementById("mobtoolmode"),
      s = this.label(e),
      o = z.language === "en";
    ((i.querySelector(".tool-mode-label").textContent = s),
      i.setAttribute(
        "aria-label",
        `${o ? "Switch tool mode. Current" : "Сменить режим инструмента. Сейчас"}: ${s}`,
      ),
      i.setAttribute("aria-pressed", String(this.mode(e) !== cs.SINGLE)),
      i.classList.toggle("active", this.mode(e) !== cs.SINGLE));
  }
}
