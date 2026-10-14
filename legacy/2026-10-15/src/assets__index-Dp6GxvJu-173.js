// assets__index-Dp6GxvJu 173 — root
// Lines 98663-98880 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
const DM = 26,
  F_ = 2 * Math.PI * DM;
class CJ {
  constructor(e) {
    w(this, "root");
    w(this, "fill");
    w(this, "label");
    w(this, "sub");
    w(this, "state", "");
    w(this, "until", 0);
    w(this, "lastText", "");
    var t;
    ((this.en = e),
      (this.root = document.createElement("div")),
      (this.root.id = "heal-ring"),
      (this.root.className = "hidden"),
      this.root.setAttribute("aria-live", "polite"),
      (this.root.innerHTML = `<svg viewBox="0 0 64 64" aria-hidden="true"><circle class="hr-track" cx="32" cy="32" r="${DM}"/><circle class="hr-fill" cx="32" cy="32" r="${DM}"/><path class="hr-cross" d="M28 20h8v8h8v8h-8v8h-8v-8h-8v-8h8z"/><path class="hr-check" d="M21 33l7 7 15-16"/></svg><div class="hr-text"><b></b><small></small></div>`),
      (this.fill = this.root.querySelector(".hr-fill")),
      (this.fill.style.strokeDasharray = `${F_}`),
      (this.label = this.root.querySelector("b")),
      (this.sub = this.root.querySelector("small")),
      ((t = document.getElementById("hud")) == null
        ? void 0
        : t.append(this.root)) ?? document.body.append(this.root));
  }
  say(e, t) {
    return this.en() ? e : t;
  }
  set(e, t, i, s) {
    (this.state !== e &&
      ((this.state = e),
      (this.root.dataset.state = e),
      this.root.classList.toggle("hidden", !e)),
      (this.fill.style.strokeDashoffset = `${F_ * (1 - Math.max(0, Math.min(1, t)))}`));
    const o = i + "|" + s;
    o !== this.lastText &&
      ((this.lastText = o),
      (this.label.textContent = i),
      (this.sub.textContent = s));
  }
  done(e) {
    ((this.until = performance.now() + 1100),
      this.set(
        "done",
        1,
        `+${e} HP`,
        this.say("Done — you can switch", "Готово — можно переключаться"),
      ),
      this.root.classList.remove("hr-pop"),
      this.root.offsetWidth,
      this.root.classList.add("hr-pop"));
  }
  cancel() {
    this.state === "channel" &&
      ((this.until = performance.now() + 900),
      this.set(
        "cancel",
        0,
        this.say("Cancelled", "Прервано"),
        this.say(
          "Hold the item until the ring fills",
          "Держите предмет, пока круг не заполнится",
        ),
      ));
  }
  update(e, t, i, s = null) {
    const o = performance.now();
    if (t && e) {
      const a =
        e === "bandage"
          ? this.say("BANDAGING", "ПЕРЕВЯЗКА")
          : this.say("TREATING", "ЛЕЧЕНИЕ");
      this.set(
        "channel",
        t.progress,
        a,
        this.say(
          `${t.left.toFixed(1)} s · keep it in hand`,
          `${t.left.toFixed(1)} с · не переключайтесь`,
        ),
      );
      return;
    }
    if (!(
      (this.state === "done" || this.state === "cancel") &&
      o < this.until
    )) {
      if (i && i.left > 0.05) {
        const a =
          s === "bandage"
            ? this.say("BANDAGE", "БИНТ")
            : this.say("MEDKIT", "АПТЕЧКА");
        this.set(
          "cooldown",
          1 - i.left / Math.max(0.1, i.total),
          a,
          this.say(
            `ready in ${Math.ceil(i.left)} s`,
            `готов через ${Math.ceil(i.left)} с`,
          ),
        );
        return;
      }
      this.state && this.set("", 0, "", "");
    }
  }
}
const gu = 30,
  qg = 255,
  Kg = 150,
  Yg = (n, e = gu) => {
    const t = ((n - 90) * Math.PI) / 180;
    return [38 + Math.cos(t) * e, 38 + Math.sin(t) * e];
  },
  G_ = () => {
    const [n, e] = Yg(qg),
      [t, i] = Yg(qg - Kg);
    return `M${n.toFixed(2)} ${e.toFixed(2)}A${gu} ${gu} 0 0 0 ${t.toFixed(2)} ${i.toFixed(2)}`;
  },
  W_ = (2 * Math.PI * gu * Kg) / 360;
class kJ {
  constructor() {
    w(this, "root");
    w(this, "fill");
    w(this, "shown", !1);
    w(this, "full", !1);
    w(this, "last", -1);
    ((this.root = document.createElement("div")),
      (this.root.id = "throw-gauge"),
      this.root.setAttribute("aria-hidden", "true"));
    const e = [1 / 3, 2 / 3]
      .map((t) => {
        const [i, s] = Yg(qg - Kg * t, gu - 5),
          [o, a] = Yg(qg - Kg * t, gu + 5);
        return `<line class="tg-tick" x1="${i.toFixed(2)}" y1="${s.toFixed(2)}" x2="${o.toFixed(2)}" y2="${a.toFixed(2)}"/>`;
      })
      .join("");
    ((this.root.innerHTML = `<svg viewBox="0 0 76 76"><path class="tg-track" d="${G_()}"/><path class="tg-fill" d="${G_()}"/>${e}</svg>`),
      (this.fill = this.root.querySelector(".tg-fill")),
      (this.fill.style.strokeDasharray = `${W_}`),
      (document.getElementById("hud") ?? document.body).append(this.root));
  }
  update(e) {
    const t = e !== null;
    if (
      (t !== this.shown &&
        ((this.shown = t), this.root.classList.toggle("show", t)),
      e === null)
    )
      return;
    const i = Math.round(e * 100);
    if (i === this.last) return;
    ((this.last = i), (this.fill.style.strokeDashoffset = `${W_ * (1 - e)}`));
    const s = e >= 0.995;
    s !== this.full && ((this.full = s), this.root.classList.toggle("full", s));
  }
}
class LJ {
  constructor() {
    w(this, "root");
    w(this, "arm");
    w(this, "icon");
    w(this, "shown", !1);
    w(this, "near", !1);
    ((this.root = document.createElement("div")),
      (this.root.id = "nade-warn"),
      this.root.setAttribute("aria-hidden", "true"),
      (this.root.innerHTML =
        '<div class="nw-arm"><div class="nw-tip"></div><div class="nw-icon"><svg viewBox="0 0 16 16"><path d="M6 1h4v2h2v2h-1.2A5 5 0 1 1 5.2 5H4V3h2zM12.5 1.5h2v4h-1.2V2.7h-.8z"/></svg></div></div>'),
      (this.arm = this.root.querySelector(".nw-arm")),
      (this.icon = this.root.querySelector(".nw-icon")),
      (document.getElementById("hud") ?? document.body).append(this.root));
  }
  update(e, t) {
    const i = !!e;
    if (
      (i !== this.shown &&
        ((this.shown = i), this.root.classList.toggle("show", i)),
      !e)
    )
      return;
    const s = -Math.sin(t) * e.dx - Math.cos(t) * e.dz,
      o = Math.cos(t) * e.dx - Math.sin(t) * e.dz,
      a = (Math.atan2(o, s) * 180) / Math.PI;
    ((this.arm.style.transform = `rotate(${a.toFixed(1)}deg)`),
      this.icon.style.setProperty("--nw-up", `rotate(${(-a).toFixed(1)}deg)`),
      (this.icon.style.transform = `rotate(${(-a).toFixed(1)}deg)`));
    const r = e.left < 0.8;
    r !== this.near && ((this.near = r), this.root.classList.toggle("near", r));
  }
}
const ka = {
  minSpeed: 8.5,
  maxSpeed: 25,
  minLift: 2.6,
  maxLift: 4.2,
  tap: 0.13,
  charge: 0.8,
  fuse: 2.2,
  gravity: 22,
};
function Jm(n) {
  const e = Math.max(0, Math.min(1, (n - ka.tap) / ka.charge));
  return 1 - (1 - e) * (1 - e);
}
function V_(n, e, t, i) {
  const s = Math.max(0, Math.min(1, i)),
    o = ka.minSpeed + (ka.maxSpeed - ka.minSpeed) * s,
    a = ka.minLift + (ka.maxLift - ka.minLift) * s;
  return [n * o, e * o + a, t * o];
}
const IJ = { range: 13 },
  PJ = 0.65,
  $_ = 1.35,
  vf = 2,
  OJ = 3,
  NJ = (n, e = !0) => (e ? Math.max(0, Math.min(1, (10 - n) / 10)) : 0);
