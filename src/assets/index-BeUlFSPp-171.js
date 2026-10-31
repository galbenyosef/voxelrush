// index-BeUlFSPp 171 — append
// Lines 96731-97067 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const WN = "vr-play-seconds",
  fE = "vr-finished-matches",
  UT = (s) => {
    try {
      return Math.max(0, Number(localStorage.getItem(s)) || 0);
    } catch {
      return 0;
    }
  };
let pE = UT(WN),
  Ww = 0;
function Qse(s) {
  if (!(!(s > 0) || s > 1) && ((pE += s), (Ww += s), Ww >= 20)) {
    Ww = 0;
    try {
      localStorage.setItem(WN, String(Math.round(pE)));
    } catch {}
  }
}
const Jse = () => pE,
  ene = () => UT(fE);
function tne() {
  try {
    localStorage.setItem(fE, String(UT(fE) + 1));
  } catch {}
}
const os = (s, e, t) => {
  const i = document.createElement(s);
  return (e && (i.className = e), t !== void 0 && (i.textContent = t), i);
};
function ine(s, e, t) {
  const i = document.createElement("canvas");
  ((i.width = i.height = 40), (i.className = t));
  const n = i.getContext("2d");
  try {
    s.drawIcon(n, e);
  } catch {}
  return (n.clearRect(0, 31, 40, 9), i);
}
class Yk {
  constructor(e) {
    this.deps = e;
    const t = os("div", "ar-badge");
    t.append(os("b", "ar-lv"), os("small", "ar-of"));
    const i = os("div", "ar-now");
    i.append(
      os("span", "ar-icon"),
      os("b", "ar-name"),
      os("small", "ar-need hidden"),
    );
    const n = os("div", "ar-next");
    n.append(os("i", "ar-arrow", "›"), os("span", "ar-icon"));
    const o = os("div", "ar-pips");
    for (let r = 0; r < Mc.length; r++)
      o.append(os("i", r === Wu ? "knife" : ""));
    const a = os("div", "ar-row");
    (a.append(t, i, n),
      this.rung.append(a, o),
      this.dead.append(
        os("span", "ar-dlabel"),
        os("b", "ar-dname"),
        os("span", "ar-dmeta"),
        os("span", "ar-dback"),
      ));
  }
  rung = os("div", "ar-rung");
  toast = os("div", "ar-toast hidden");
  dead = os("div", "ar-dead hidden");
  lv = -1;
  lk = -1;
  icons = new Map();
  toastT = 0;
  deadUntil = 0;
  leadKey = "";
  leadEl = os("span", "ar-lead");
  icon(e) {
    let t = this.icons.get(e);
    return (
      t || ((t = ine(this.deps, e, "ar-ic")), this.icons.set(e, t)),
      t.cloneNode(!1)
    );
  }
  paint(e, t) {
    const i = this.icon(t);
    (i.getContext("2d").drawImage(this.icons.get(t), 0, 0),
      e.replaceChildren(i));
  }
  setLevel(e, t = 0) {
    if (e === this.lv && t === this.lk) return;
    const i = yp(e).kills ?? 1,
      n = this.rung.querySelector(".ar-need");
    if (
      (n.classList.toggle("hidden", i < 2),
      (n.textContent = `${t}/${i}`),
      (this.lk = t),
      e === this.lv)
    )
      return;
    this.lv = e;
    const o = yp(e),
      a = e >= Wu;
    (this.rung.classList.toggle("knife", a),
      (this.rung.querySelector(".ar-lv").textContent = String(e + 1)),
      (this.rung.querySelector(".ar-of").textContent = `/${Mc.length}`),
      (this.rung.querySelector(".ar-name").textContent = Un(o.name)),
      this.paint(this.rung.querySelector(".ar-now .ar-icon"), o.base));
    const r = this.rung.querySelector(".ar-next");
    (r.classList.toggle("hidden", a),
      a || this.paint(r.querySelector(".ar-icon"), yp(e + 1).base),
      this.rung.querySelectorAll(".ar-pips i").forEach((l, c) => {
        (l.classList.toggle("on", c < e), l.classList.toggle("here", c === e));
      }),
      document.body.classList.toggle("arms-knife", a));
  }
  leaderLine(e, t, i, n = 0, o = 0) {
    const a = e?.[0] && e[0][2] > 0 ? e[0] : void 0,
      r = `${a ? `${a[0]}|${a[1]}|${a[2]}` : ""}|${t}|${i}|${this.lv}|${n}|${o}`;
    if (r === this.leadKey) return this.leadEl;
    ((this.leadKey = r), this.leadEl.replaceChildren());
    const l = !!a && (a[0] === t || a[2] <= this.lv) && this.lv >= 0;
    if (l) this.leadEl.append(os("b", "ar-you", I("YOU LEAD", "ВЫ ЛИДЕР")));
    else if (a) {
      const c = os("b", "ar-who", a[0]);
      ((c.style.color = mc(a[1], i)),
        this.leadEl.append(
          os("span", "ar-tag", I("LEADER", "ЛИДЕР")),
          c,
          os("span", "ar-at", `${a[2] + 1}/${Mc.length}`),
        ));
    }
    return (
      n > 0 &&
        o > 0 &&
        !l &&
        this.leadEl.append(os("span", "ar-place", `#${n}/${o}`)),
      this.leadEl
    );
  }
  change(e, t, i, n = 0, o = !1) {
    this.setLevel(e, n);
    const a = yp(e).kills ?? 1,
      r = e >= Wu,
      l = yp(e),
      c = this.toast;
    (c.replaceChildren(), (c.dataset.kind = t ? (r ? "knife" : "up") : "down"));
    const h = os("div", "ar-tart");
    (h.append(this.icon(l.base)),
      h.firstChild.getContext("2d").drawImage(this.icons.get(l.base), 0, 0));
    const d = os("div", "ar-ttext"),
      u = e + 1,
      f = a - n;
    (d.append(
      os(
        "small",
        "ar-tkick",
        t
          ? n > 0
            ? I(
                `${n}/${a} · ${f} MORE KILL${f > 1 ? "S" : ""}`,
                `${n}/${a} · ЕЩЁ ${f} УБИЙСТВО`,
              )
            : r
              ? I("ONE KILL TO WIN", "ОДНО УБИЙСТВО ДО ПОБЕДЫ")
              : a > 1
                ? I(`LEVEL ${u} · ${a} KILLS`, `УРОВЕНЬ ${u} · ${a} УБИЙСТВА`)
                : I(`LEVEL ${u}`, `УРОВЕНЬ ${u}`)
          : o
            ? I("YOUR OWN DEATH · LEVEL LOST", "САМОУБИЙСТВО · УРОВЕНЬ ПОТЕРЯН")
            : i
              ? I(`KNIFED BY ${i} · LEVEL LOST`, `НОЖ — ${i} · УРОВЕНЬ ПОТЕРЯН`)
              : I("KNIFED · LEVEL LOST", "НОЖ · УРОВЕНЬ ПОТЕРЯН"),
      ),
      os("b", "ar-tname", Un(l.name).toUpperCase()),
    ),
      c.append(h, d),
      c.classList.remove("hidden", "show"),
      c.offsetWidth,
      c.classList.add("show"),
      (this.toastT = performance.now() + (r ? 2600 : 1500)),
      this.deps.sfx.level(t ? (r ? "knife" : "up") : "down"));
  }
  died(e, t) {
    this.deadUntil = performance.now() + Math.max(0.3, t) * 1e3;
    const i = this.dead;
    ((i.querySelector(".ar-dlabel").textContent = e
      ? I("KILLED BY", "ВАС УБИЛ")
      : I("DOWN", "ВЫБЫЛИ")),
      (i.querySelector(".ar-dname").textContent = e?.[0] ?? ""),
      (i.querySelector(".ar-dmeta").textContent = e
        ? [
            e[1],
            `${e[2]} ${I("m", "м")}`,
            e[4] ? I("headshot", "в голову") : "",
          ]
            .filter(Boolean)
            .join(" · ")
        : ""),
      i.classList.remove("hidden"));
  }
  back() {
    ((this.deadUntil = 0), this.dead.classList.add("hidden"));
  }
  frame(e) {
    if (
      (!this.toast.classList.contains("hidden") &&
        e > this.toastT &&
        this.toast.classList.add("hidden"),
      !this.dead.classList.contains("hidden"))
    ) {
      const t = Math.max(0, (this.deadUntil - e) / 1e3),
        i =
          t > 0.05
            ? I(`Back in ${t.toFixed(1)}`, `Снова в бою через ${t.toFixed(1)}`)
            : I("Back in the fight…", "Возвращаемся…"),
        n = this.dead.querySelector(".ar-dback");
      n.textContent !== i && (n.textContent = i);
    }
  }
  ladder() {
    const e = os("div", "ar-ladder");
    e.append(os("div", "ar-lhead", I("THE LADDER", "ЛЕСТНИЦА ОРУЖИЯ")));
    const t = os("ol", "ar-list");
    return (
      Mc.forEach((i, n) => {
        const o = os("li", n === Wu ? "knife" : ""),
          a = this.icon(i.base);
        (a.getContext("2d").drawImage(this.icons.get(i.base), 0, 0),
          o.append(
            os("i", "ar-ln", String(n + 1)),
            a,
            os("span", "ar-lname", Un(i.name)),
          ),
          t.append(o));
      }),
      e.append(
        t,
        os(
          "p",
          "ar-lrule",
          I(
            "Everyone for themselves. A kill: the next weapon. A knife kill: steal a level. Golden knife kill: win.",
            "Каждый сам за себя. Убийство — следующее оружие. Убийство ножом — украсть уровень. Убийство золотым ножом — победа.",
          ),
        ),
      ),
      e
    );
  }
}
const mE = (s, e) =>
    s.itemName(e) || s.itemName(ai(e) || e) || (e < 256 ? jh(le[e]) : ""),
  Ln = (s, e, t) => {
    const i = document.createElement(s);
    return (e && (i.className = e), t !== void 0 && (i.textContent = t), i);
  },
  sne = new Set([
    w.AMMO_762,
    w.AMMO_556,
    w.AMMO_9MM,
    w.AMMO_338,
    w.AMMO_SHELL,
    w.AMMO_50AE,
    w.AMMO_40MM,
    w.ROCKET,
    w.ROCKET_GUIDED,
  ]),
  nne = {
    [w.RPG]: { fire: 0.9, range: 0.55 },
    [w.GRENADE_LAUNCHER]: { fire: 0.8, range: 0.62 },
  },
  one = 178;
function ane(s, e) {
  const t = Va[s].show;
  if (t) return { fire: t.fire, range: t.range, armour: t.armour };
  const i = z5(s, e),
    n = i.items[0]?.id ?? 0,
    o = ai(n) || n,
    a = R1(i.armor) - 100,
    r = Math.max(...Object.values(Va).map((y) => R1(y.armor) - 100), 1),
    l = Math.max(0.08, Math.min(1, a / r)),
    c = nne[o];
  if (c) return { ...c, armour: l };
  const h = wO(n);
  if (!h?.rpm || !h.dmg) return { fire: 0.3, range: 0.3, armour: l };
  const d = h.dmg * (h.pellets ?? 1),
    u = Math.ceil(one / d),
    f = ((u - 1) * 60) / h.rpm,
    p = Math.max(0.15, Math.min(1, 0.35 / Math.max(0.35, f))),
    m = so(n).scope,
    g = Math.max(
      0.15,
      Math.min(1, Math.sqrt(h.range / 400) + (m > 0 && m < 5 ? 0.08 : 0)),
    );
  return { fire: p, range: g, armour: l };
}
const rne = (s) => {
  const e = Un(Va[s].role);
  return e.split(" — ").pop() ?? e;
};
function gE(s, e, t) {
  const i = document.createElement("canvas");
  ((i.width = i.height = 40), (i.className = t));
  try {
    s.drawIcon(i.getContext("2d"), e);
  } catch {}
  return (
    e >= 256 && i.getContext("2d").clearRect(0, 31, 40, 9),
    (i.title = mE(s, e)),
    i
  );
}
function $N(s, e) {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  (t.setAttribute("viewBox", "0 0 24 24"),
    t.setAttribute("aria-hidden", "true"),
    t.classList.add(e));
  const i = document.createElementNS("http://www.w3.org/2000/svg", "path");
  return (i.setAttribute("d", s), t.append(i), t);
}
function lne(s, e, t, i) {
  const n = Ln("button", "fd-class");
  ((n.type = "button"),
    (n.dataset.cls = e),
    n.setAttribute("role", "radio"),
    n.setAttribute("aria-checked", "false"));
  const o = Ln("span", "fd-gun");
  return (
    n.append(
      $N(i, "fd-glyph"),
      Ln("b", "fd-cname"),
      o,
      Ln("kbd", "fd-key", String(t + 1)),
      Ln("span", "fd-count"),
    ),
    n
  );
}
