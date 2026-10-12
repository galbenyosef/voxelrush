// assets__index-Dp6GxvJu 152 — audio
// Lines 91657-91758 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
const fQ = Object.assign({
  "../assets/dealer/en-betting.wav": VZ,
  "../assets/dealer/en-blackjack.wav": $Z,
  "../assets/dealer/en-bust.wav": qZ,
  "../assets/dealer/en-deal.wav": KZ,
  "../assets/dealer/en-dealer.wav": YZ,
  "../assets/dealer/en-lose.wav": jZ,
  "../assets/dealer/en-push.wav": XZ,
  "../assets/dealer/en-result.wav": ZZ,
  "../assets/dealer/en-turn.wav": QZ,
  "../assets/dealer/en-welcome.wav": JZ,
  "../assets/dealer/en-win.wav": eQ,
  "../assets/dealer/ru-betting.wav": tQ,
  "../assets/dealer/ru-blackjack.wav": iQ,
  "../assets/dealer/ru-bust.wav": nQ,
  "../assets/dealer/ru-deal.wav": sQ,
  "../assets/dealer/ru-dealer.wav": oQ,
  "../assets/dealer/ru-lose.wav": aQ,
  "../assets/dealer/ru-push.wav": rQ,
  "../assets/dealer/ru-result.wav": lQ,
  "../assets/dealer/ru-turn.wav": cQ,
  "../assets/dealer/ru-welcome.wav": hQ,
  "../assets/dealer/ru-win.wav": dQ,
});
class pQ {
  constructor() {
    w(this, "enabled", !0);
    w(this, "audio", new Audio());
    w(this, "row", document.createElement("label"));
    w(this, "input", document.createElement("input"));
    w(this, "label", document.createTextNode(""));
    w(this, "visibility", () => {
      document.hidden && this.stop();
    });
    var e;
    try {
      this.enabled = localStorage.getItem("fc-dealer-voice") !== "off";
    } catch {}
    ((this.input.type = "checkbox"),
      (this.input.id = "dealer-voice-enabled"),
      (this.input.checked = this.enabled),
      (this.input.onchange = () => this.toggle()),
      this.row.append(this.label, this.input),
      (this.row.className = "dealer-voice-setting"),
      (e = document.querySelector('[data-settings-category="audio"]')) ==
        null || e.append(this.row),
      this.translate(),
      Vo(() => {
        (this.stop(), this.translate());
      }),
      document.addEventListener("visibilitychange", this.visibility));
  }
  translate() {
    this.label.textContent =
      z.language === "en"
        ? "Blackjack dealer voice"
        : "Голос крупье в блэкджеке";
  }
  toggle() {
    ((this.enabled = !this.enabled),
      (this.input.checked = this.enabled),
      this.stop());
    try {
      localStorage.setItem("fc-dealer-voice", this.enabled ? "on" : "off");
    } catch {}
  }
  receive(e, t, i) {
    const s = uQ(e, t, i);
    if (!s || !this.enabled || document.hidden) return;
    const o =
      fQ[`../assets/dealer/${z.language === "ru" ? "ru" : "en"}-${s}.wav`];
    o &&
      (this.stop(),
      (this.audio.src = o),
      (this.audio.volume = Math.max(0, Math.min(1, z.sfxVolume))),
      this.audio.play().catch(() => {}));
  }
  stop() {
    (this.audio.pause(), this.audio.removeAttribute("src"), this.audio.load());
  }
  dispose() {
    (this.stop(),
      this.row.remove(),
      document.removeEventListener("visibilitychange", this.visibility));
  }
}
const kh = 10,
  pf = 1e4,
  mQ = 12e3,
  gQ = 25e3;
function $p(n) {
  const e = n % 13;
  return e === 0 ? 11 : Math.min(10, e + 1);
}
function Pd(n) {
  let e = 0,
    t = 0;
  for (const i of n) i < 0 || ((e += $p(i)), i % 13 === 0 && t++);
  for (; e > 21 && t > 0;) ((e -= 10), t--);
  return { total: e, soft: t > 0 };
}
const b_ = (n) => 1 - (1 - Math.max(0, Math.min(1, n))) ** 3;
