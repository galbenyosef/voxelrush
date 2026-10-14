// index-Dp6GxvJu 167 — classlist
// Lines 96912-97084 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class dJ {
  constructor() {
    w(this, "root");
    w(this, "kind", "");
    w(this, "gun");
    w(this, "zoomEl");
    w(this, "reloadBar");
    w(this, "helpEl");
    w(this, "tmp", new k());
    w(this, "zoomText", "");
    const e = document.createElement("style");
    ((e.textContent = hJ),
      document.head.append(e),
      (this.root = document.createElement("div")),
      (this.root.id = "gunner-sight"),
      document.body.append(this.root));
  }
  hide() {
    this.root.classList.remove("on");
  }
  marker(e, t) {
    if (!t) {
      this.hide();
      return;
    }
    (this.kind || this.build("tank"),
      this.root.classList.add("on", "marker-only"),
      this.root.classList.remove("zoom"),
      this.placeGun(e, t));
  }
  build(e) {
    ((this.kind = e),
      (this.zoomText = ""),
      (this.root.innerHTML = `<div class="gs-vig"></div><div class="gs-ring"></div><div class="gs-gun"></div>
      <div class="gs-panel"><span data-z></span><div class="gs-rel"><i></i></div></div><div class="gs-help"></div>`),
      (this.gun = this.root.querySelector(".gs-gun")),
      (this.zoomEl = this.root.querySelector("[data-z]")),
      (this.reloadBar = this.root.querySelector(".gs-rel")),
      (this.helpEl = this.root.querySelector(".gs-help")));
  }
  placeGun(e, t) {
    this.tmp.copy(t).project(e);
    const i =
        this.tmp.z < 1 &&
        Math.abs(this.tmp.x) < 1.2 &&
        Math.abs(this.tmp.y) < 1.2,
      s = (this.tmp.x * 0.5 + 0.5) * innerWidth,
      o = (-this.tmp.y * 0.5 + 0.5) * innerHeight,
      a = Math.hypot(s - innerWidth / 2, o - innerHeight / 2);
    ((this.gun.style.opacity = i ? "1" : "0"),
      this.gun.classList.toggle("ok", a < 7),
      (this.gun.style.transform = `translate(${s.toFixed(1)}px,${o.toFixed(1)}px)`));
  }
  update(e, t, i, s, o, a = !1) {
    if (!e) {
      this.hide();
      return;
    }
    const r = SETTINGS.language === "en";
    (this.kind !== e.kind && this.build(e.kind),
      this.root.classList.add("on"),
      this.root.classList.remove("marker-only"),
      this.root.classList.toggle("zoom", e.zoom > 1.3));
    const l = `${r ? "ZOOM" : "ЗУМ"} <b>×${e.zoom >= 1.95 ? Math.round(e.zoom * 2) / 2 : 1}</b>`,
      c = this.reloadBar.parentElement;
    if (e.kind === "mg") {
      const d = Math.max(0, Math.min(1, e.heat ?? 0)),
        u = e.hot
          ? `${r ? "OVERHEAT" : "ПЕРЕГРЕВ"} <b>${e.reload.toFixed(1)} ${r ? "s" : "с"}</b>`
          : `${l} · ${r ? "BARREL" : "СТВОЛ"}`;
      (this.zoomText !== u && (this.zoomEl.innerHTML = this.zoomText = u),
        this.reloadBar.classList.remove("busy"),
        this.reloadBar.classList.toggle("hot", !!e.hot || d > 0.85),
        this.reloadBar.classList.toggle(
          "warm",
          !e.hot && d > 0.55 && d <= 0.85,
        ),
        c.classList.toggle("hot", !!e.hot),
        (this.reloadBar.firstElementChild.style.width = `${Math.round(d * 100)}%`),
        (c.style.display = SETTINGS.vehicleInstruments ? "none" : ""));
    } else {
      this.zoomText !== l && (this.zoomEl.innerHTML = this.zoomText = l);
      const d = e.reload > 0.05,
        u = d ? 1 - e.reload / Math.max(0.1, e.reloadMax) : 1;
      (this.reloadBar.classList.remove("hot", "warm"),
        c.classList.remove("hot"),
        (c.style.display = ""),
        this.reloadBar.classList.toggle("busy", d),
        (this.reloadBar.firstElementChild.style.width = `${Math.round(Math.max(0, Math.min(1, u)) * 100)}%`));
    }
    const h = o
      ? ""
      : e.kind === "tank"
        ? r
          ? "Wheel — sight zoom"
          : "Колесо — зум прицела"
        : e.kind === "mg"
          ? r
            ? "Wheel — zoom · hold RMB — ×2"
            : "Колесо — зум · держать ПКМ — ×2"
          : r
            ? "Wheel — zoom · hold RMB — ×2.5"
            : "Колесо — зум · держать ПКМ — ×2.5";
    (this.helpEl.innerHTML !== h && (this.helpEl.innerHTML = h),
      i ? this.placeGun(t, i) : (this.gun.style.opacity = "0"),
      this.gun.classList.toggle("off", a));
  }
}
const uJ = `
#welder-menu{position:fixed;inset:0;z-index:120;display:grid;place-items:center;padding:max(10px,var(--safe-top,0px)) max(12px,var(--safe-right,0px)) max(10px,var(--safe-bottom,0px)) max(12px,var(--safe-left,0px));
  background:radial-gradient(ellipse at 50% 30%,rgba(255,140,40,.10),rgba(4,6,8,.78) 60%);backdrop-filter:blur(3px);font-family:var(--font-main,'Russo One',sans-serif);color:#e8ecef;animation:wm-in .18s ease-out}
@keyframes wm-in{from{opacity:0;transform:scale(.985)}to{opacity:1;transform:none}}
#welder-menu .wm{width:min(980px,100%);max-height:100%;overflow:auto;background:linear-gradient(160deg,#1c2126 0%,#12161a 70%);border:1px solid #3a434b;border-radius:14px;
  box-shadow:0 24px 70px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.05);position:relative}
#welder-menu .wm::before{content:'';position:absolute;inset:0 0 auto 0;height:3px;border-radius:14px 14px 0 0;background:repeating-linear-gradient(135deg,#f2b230 0 10px,#1b1b1b 10px 20px);opacity:.9}
#welder-menu .wm-head{display:flex;align-items:center;gap:14px;padding:16px 18px 10px}
#welder-menu .wm-ico{width:46px;height:46px;border-radius:12px;display:grid;place-items:center;background:linear-gradient(145deg,#ff9a3c,#c9561a);box-shadow:0 0 18px rgba(255,138,42,.45)}
#welder-menu .wm-ico svg{width:28px;height:28px;stroke:#1a0f06;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
#welder-menu .wm-kicker{font-size:11px;letter-spacing:.18em;color:#ff9b45}
#welder-menu h2{margin:2px 0 0;font-size:22px;font-weight:400;letter-spacing:.02em}
#welder-menu .wm-sub{font-size:12px;color:#8e9aa4;margin-top:2px}
#welder-menu .wm-bal{margin-left:auto;text-align:right}
#welder-menu .wm-bal b{display:block;font-size:20px;font-weight:400;color:#9fe07a}
#welder-menu .wm-bal span{font-size:11px;color:#8e9aa4;letter-spacing:.1em}
#welder-menu .wm-x{width:38px;height:38px;border-radius:10px;border:1px solid #3a434b;background:#20262c;color:#cfd6dc;font-size:18px;cursor:pointer}
#welder-menu .wm-x:hover{background:#2b333a}
#welder-menu .wm-top{display:grid;grid-template-columns:minmax(260px,1.15fr) 1fr;gap:14px;padding:0 18px 12px}
#welder-menu .wm-stage{position:relative;border-radius:12px;overflow:hidden;background:radial-gradient(ellipse at 50% 80%,#2c343b,#161a1e 70%);border:1px solid #2d353c;min-height:190px}
#welder-menu .wm-stage canvas{display:block;width:100%;height:100%;position:absolute;inset:0}
#welder-menu .wm-stage .wm-tag{position:absolute;left:10px;bottom:8px;font-size:11px;letter-spacing:.12em;color:#c6cfd6;background:rgba(10,12,14,.65);padding:4px 8px;border-radius:6px}
#welder-menu .wm-stats{display:flex;flex-direction:column;gap:10px;justify-content:center}
#welder-menu .wm-row{display:flex;justify-content:space-between;font-size:12px;color:#9aa6b0;letter-spacing:.06em}
#welder-menu .wm-row b{color:#e8ecef;font-weight:400}
#welder-menu .wm-bar{height:12px;border-radius:7px;background:#0d1013;border:1px solid #2a3238;overflow:hidden;position:relative}
#welder-menu .wm-bar i{position:absolute;inset:0 auto 0 0;border-radius:7px;transition:width .25s ease;background:linear-gradient(90deg,#d7412e,#f2a431 45%,#7bd35a)}
#welder-menu .wm-chips{display:flex;flex-wrap:wrap;gap:6px}
#welder-menu .wm-chip{font-size:11px;padding:5px 9px;border-radius:999px;background:#1f262c;border:1px solid #333d45;color:#cbd3d9}
#welder-menu .wm-chip.hot{border-color:#ff8a2a;color:#ffb36b;background:rgba(255,138,42,.08)}
#welder-menu .wm-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;padding:0 18px 18px}
#welder-menu .wm-card{position:relative;display:flex;flex-direction:column;gap:7px;padding:13px 13px 12px;border-radius:12px;background:linear-gradient(180deg,#1d2328,#171b20);border:1px solid #2e373e;transition:border-color .15s,transform .15s}
#welder-menu .wm-card:hover{border-color:#50606c;transform:translateY(-1px)}
#welder-menu .wm-card.on{border-color:#6fbf52;box-shadow:inset 0 0 0 1px rgba(111,191,82,.25)}
#welder-menu .wm-card h3{margin:0;font-size:14px;font-weight:400;letter-spacing:.03em;display:flex;align-items:center;gap:7px}
#welder-menu .wm-card h3 .k{margin-left:auto;font-size:10px;color:#6f7b85;border:1px solid #3a434b;border-radius:5px;padding:1px 5px}
#welder-menu .wm-card p{margin:0;font-size:11.5px;line-height:1.45;color:#98a4ae;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
#welder-menu .wm-mm{display:flex;gap:3px;align-items:flex-end;height:20px}
#welder-menu .wm-mm i{width:7px;border-radius:2px;background:#39434b}
#welder-menu .wm-mm i.f{background:linear-gradient(180deg,#ffb35c,#d9661e)}
#welder-menu .wm-card .wm-price{margin-top:auto;font-size:13px;color:#e8ecef}
#welder-menu .wm-card button{border:0;border-radius:9px;padding:10px 10px;font:inherit;font-size:13px;cursor:pointer;color:#170c03;background:linear-gradient(180deg,#ffa347,#e0701c);box-shadow:0 3px 0 #8f420f;transition:filter .12s,transform .08s}
#welder-menu .wm-card button:hover{filter:brightness(1.08)}
#welder-menu .wm-card button:active{transform:translateY(2px);box-shadow:0 1px 0 #8f420f}
#welder-menu .wm-card button:disabled{cursor:not-allowed;color:#78828a;background:#262d33;box-shadow:none;filter:none;transform:none}
#welder-menu .wm-card.pack button{background:linear-gradient(180deg,#8fc6ff,#4f8fd6);box-shadow:0 3px 0 #2c5585}
#welder-menu .wm-note{font-size:10.5px;color:#7c8892;font-family:system-ui,sans-serif}
#welder-menu .wm-progress{position:absolute;left:0;right:0;bottom:0;height:3px;border-radius:0 0 12px 12px;overflow:hidden}
#welder-menu .wm-progress i{display:block;height:100%;width:0;background:linear-gradient(90deg,#9cc8ff,#ffffff);box-shadow:0 0 10px #9cc8ff}
#welder-menu .wm-foot{padding:0 18px 14px;font-size:11px;color:#6f7b85;font-family:system-ui,sans-serif}
@media (max-width:820px),(max-height:520px){
  #welder-menu .wm-head{padding:12px 12px 6px;gap:10px}
  #welder-menu h2{font-size:17px}
  #welder-menu .wm-ico{width:36px;height:36px}
  #welder-menu .wm-top{grid-template-columns:1fr 1fr;padding:0 12px 8px;gap:10px}
  #welder-menu .wm-stage{min-height:120px}
  #welder-menu .wm-grid{grid-template-columns:repeat(4,minmax(150px,1fr));padding:0 12px 12px;gap:8px}
  #welder-menu .wm-card{padding:10px}
  #welder-menu .wm-card p{font-size:10.5px}
  #welder-menu .wm-foot{display:none}
}
@media (max-width:620px){#welder-menu .wm-grid{grid-template-columns:repeat(2,1fr)}#welder-menu .wm-top{grid-template-columns:1fr}}
`,
  fJ =
    '<svg viewBox="0 0 24 24"><path d="M4 20l6-6"/><path d="M9 15l-2-2 7-7 4 4-7 7z"/><path d="M14 6l2-2 4 4-2 2"/><path d="M3 21l1-1"/><path d="M17 17l1.5 1.5M19 15l2 .5M15 19l.5 2"/></svg>';
