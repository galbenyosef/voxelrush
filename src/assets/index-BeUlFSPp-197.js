// index-BeUlFSPp 197 — root
// Lines 105820-106033 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class qoe {
  constructor(e) {
    ((this.en = e),
      (this.root = document.createElement("div")),
      (this.root.id = "heal-ring"),
      (this.root.className = "hidden"),
      this.root.setAttribute("aria-live", "polite"),
      (this.root.innerHTML = `<svg viewBox="0 0 64 64" aria-hidden="true"><circle class="hr-track" cx="32" cy="32" r="${SE}"/><circle class="hr-fill" cx="32" cy="32" r="${SE}"/><path class="hr-cross" d="M28 20h8v8h8v8h-8v8h-8v-8h-8v-8h8z"/><path class="hr-check" d="M21 33l7 7 15-16"/></svg><div class="hr-text"><b></b><small></small></div>`),
      (this.fill = this.root.querySelector(".hr-fill")),
      (this.fill.style.strokeDasharray = `${mC}`),
      (this.label = this.root.querySelector("b")),
      (this.sub = this.root.querySelector("small")),
      document.getElementById("hud")?.append(this.root) ??
        document.body.append(this.root));
  }
  root;
  fill;
  label;
  sub;
  state = "";
  until = 0;
  lastText = "";
  say(e, t) {
    return I(e, t);
  }
  set(e, t, i, n) {
    (this.state !== e &&
      ((this.state = e),
      (this.root.dataset.state = e),
      this.root.classList.toggle("hidden", !e)),
      (this.fill.style.strokeDashoffset = `${mC * (1 - Math.max(0, Math.min(1, t)))}`));
    const o = i + "|" + n;
    o !== this.lastText &&
      ((this.lastText = o),
      (this.label.textContent = i),
      (this.sub.textContent = n));
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
  update(e, t, i, n = null) {
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
          n === "bandage"
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
const Vf = 30,
  Jv = 255,
  e5 = 150,
  t5 = (s, e = Vf) => {
    const t = ((s - 90) * Math.PI) / 180;
    return [38 + Math.cos(t) * e, 38 + Math.sin(t) * e];
  },
  gC = () => {
    const [s, e] = t5(Jv),
      [t, i] = t5(Jv - e5);
    return `M${s.toFixed(2)} ${e.toFixed(2)}A${Vf} ${Vf} 0 0 0 ${t.toFixed(2)} ${i.toFixed(2)}`;
  },
  yC = (2 * Math.PI * Vf * e5) / 360;
class Koe {
  root;
  fill;
  shown = !1;
  full = !1;
  last = -1;
  constructor() {
    ((this.root = document.createElement("div")),
      (this.root.id = "throw-gauge"),
      this.root.setAttribute("aria-hidden", "true"));
    const e = [1 / 3, 2 / 3]
      .map((t) => {
        const [i, n] = t5(Jv - e5 * t, Vf - 5),
          [o, a] = t5(Jv - e5 * t, Vf + 5);
        return `<line class="tg-tick" x1="${i.toFixed(2)}" y1="${n.toFixed(2)}" x2="${o.toFixed(2)}" y2="${a.toFixed(2)}"/>`;
      })
      .join("");
    ((this.root.innerHTML = `<svg viewBox="0 0 76 76"><path class="tg-track" d="${gC()}"/><path class="tg-fill" d="${gC()}"/>${e}</svg>`),
      (this.fill = this.root.querySelector(".tg-fill")),
      (this.fill.style.strokeDasharray = `${yC}`),
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
    ((this.last = i), (this.fill.style.strokeDashoffset = `${yC * (1 - e)}`));
    const n = e >= 0.995;
    n !== this.full && ((this.full = n), this.root.classList.toggle("full", n));
  }
}
class Yoe {
  root;
  arm;
  icon;
  shown = !1;
  near = !1;
  constructor() {
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
    const n = -Math.sin(t) * e.dx - Math.cos(t) * e.dz,
      o = Math.cos(t) * e.dx - Math.sin(t) * e.dz,
      a = (Math.atan2(o, n) * 180) / Math.PI;
    ((this.arm.style.transform = `rotate(${a.toFixed(1)}deg)`),
      this.icon.style.setProperty("--nw-up", `rotate(${(-a).toFixed(1)}deg)`),
      (this.icon.style.transform = `rotate(${(-a).toFixed(1)}deg)`));
    const r = e.left < 0.8;
    r !== this.near && ((this.near = r), this.root.classList.toggle("near", r));
  }
}
const fr = {
  minSpeed: 8.5,
  maxSpeed: 25,
  minLift: 2.6,
  maxLift: 4.2,
  tap: 0.13,
  charge: 0.8,
  fuse: 2.2,
  gravity: 22,
};
function zg(s) {
  const e = Math.max(0, Math.min(1, (s - fr.tap) / fr.charge));
  return 1 - (1 - e) * (1 - e);
}
function vC(s, e, t, i) {
  const n = Math.max(0, Math.min(1, i)),
    o = fr.minSpeed + (fr.maxSpeed - fr.minSpeed) * n,
    a = fr.minLift + (fr.maxLift - fr.minLift) * n;
  return [s * o, e * o + a, t * o];
}
const joe = { range: 13 },
  Xoe = 0.65,
  bC = 1.35,
  jp = 2,
  Zoe = 3,
  Qoe = (s, e = !0) => (e ? Math.max(0, Math.min(1, (10 - s) / 10)) : 0);
