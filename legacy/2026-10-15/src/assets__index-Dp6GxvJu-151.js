// assets__index-Dp6GxvJu 151 — badge
// Lines 91313-91656 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class BZ {
  constructor(e) {
    w(this, "border");
    w(this, "edges", []);
    w(
      this,
      "material",
      new sn({
        transparent: !0,
        depthWrite: !1,
        side: Ai,
        uniforms: { opacity: { value: 0.45 } },
        vertexShader:
          "varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
        fragmentShader: `varying vec2 vUv; uniform float opacity;
      void main(){vec2 grid=abs(fract(vUv*vec2(48.,32.))-.5);
        float line=smoothstep(.455,.49,max(grid.x,grid.y));
        float fade=smoothstep(0.,.18,vUv.x)*(1.-smoothstep(.82,1.,vUv.x));
        gl_FragColor=vec4(.28,.77,.95,fade*opacity*(.05+.6*line));}`,
      }),
    );
    w(this, "geometry", new pn(192, 128));
    w(
      this,
      "walls",
      Array.from({ length: 4 }, () => new le(this.geometry, this.material)),
    );
    w(this, "badge", document.createElement("div"));
    w(this, "lastText", "");
    w(this, "noticeDistance", 64);
    ((this.scene = e),
      (this.badge.className = "world-border-notice"),
      (this.badge.hidden = !0),
      this.badge.setAttribute("role", "status"),
      document.body.append(this.badge));
    for (const t of this.walls) ((t.visible = !1), e.add(t));
  }
  setBorder(e) {
    ((this.border = e),
      (this.edges = [
        e.centerX - e.radius,
        e.centerX + e.radius,
        e.centerZ - e.radius,
        e.centerZ + e.radius,
      ]));
  }
  update(e, t, i) {
    const s = this.border;
    if (!(s != null && s.radius) || !i) {
      for (const l of this.walls) l.visible = !1;
      this.badge.hidden = !0;
      return;
    }
    const o = this.edges;
    let a = 1 / 0;
    for (let l = 0; l < 4; l++) {
      const c = l < 2,
        h = Math.abs((c ? e.x : e.z) - o[l]);
      a = Math.min(a, h);
      const d = this.walls[l];
      ((d.visible = h < 96),
        d.visible &&
          (d.position.set(c ? o[l] : e.x, e.y + 24, c ? e.z : o[l]),
          (d.rotation.y = c ? Math.PI / 2 : 0)));
    }
    if (
      ((this.material.uniforms.opacity.value =
        0.2 + 0.35 * (1 - Math.min(96, a) / 96)),
      (this.badge.hidden = a > this.noticeDistance),
      this.badge.hidden)
    )
      return;
    this.badge.classList.toggle("world-border-close", a < 8);
    const r = t
      ? `WORLD BOUNDARY · ${Math.max(0, Math.floor(a))} blocks`
      : `ГРАНИЦА МИРА · ${Math.max(0, Math.floor(a))} блоков`;
    r !== this.lastText && ((this.badge.textContent = r), (this.lastText = r));
  }
  dispose() {
    this.badge.remove();
    for (const e of this.walls) this.scene.remove(e);
    (this.geometry.dispose(), this.material.dispose());
  }
}
function HZ(n) {
  return Number.isSafeInteger(n) && n >= 0 && n <= 1e6;
}
function zZ(n) {
  const e = n;
  return (
    !!e &&
    HZ(e.radius) &&
    Number.isFinite(e.centerX) &&
    Number.isFinite(e.centerZ)
  );
}
function IM(n, e, t, i = 0) {
  return (
    i === 0 &&
    n.radius > 0 &&
    Number.isFinite(e) &&
    Number.isFinite(t) &&
    (e - n.centerX) ** 2 + (t - n.centerZ) ** 2 <= n.radius ** 2
  );
}
function UZ(n, e, t, i = 0) {
  return !!n && IM(n, Math.floor(e) + 0.5, Math.floor(t) + 0.5, i);
}
const FZ = {
  fire: ["Weapons are holstered here", "Здесь оружие не стреляет"],
  break: ["Blocks here cannot be broken", "Здесь нельзя ломать блоки"],
  build: ["Building is not allowed here", "Здесь нельзя строить"],
  explosive: [
    "Explosives are not allowed here",
    "Здесь нельзя использовать взрывчатку",
  ],
};
function GZ(n) {
  return Array.isArray(n)
    ? n
        .filter(
          (e) =>
            !!e &&
            typeof e == "object" &&
            e.action === "rtp" &&
            ["x", "y", "z", "hx", "hz"].every((t) => Number.isFinite(e[t])),
        )
        .slice(0, 8)
    : [];
}
const v_ = 3500;
class WZ {
  constructor() {
    w(this, "zone");
    w(this, "kiosks", []);
    w(this, "onTeleport", () => {});
    w(this, "badge", document.createElement("div"));
    w(this, "teleport", document.createElement("button"));
    w(this, "armedUntil", 0);
    w(this, "armTimer", 0);
    w(this, "toast", document.createElement("div"));
    w(this, "toastTimer", 0);
    w(this, "toastKey", "");
    w(this, "touch", !1);
    ((this.badge.className = "world-border-notice spawn-zone-notice"),
      (this.badge.hidden = !0),
      this.badge.setAttribute("role", "status"),
      document.body.append(this.badge),
      (this.teleport.type = "button"),
      (this.teleport.className = "sz-teleport"),
      this.teleport.addEventListener("click", (e) => {
        (e.stopPropagation(), this.tapTeleport());
      }));
    for (const e of ["pointerdown", "touchstart"])
      this.teleport.addEventListener(e, (t) => t.stopPropagation(), {
        passive: !0,
      });
    ((this.toast.className = "safe-zone-toast"),
      (this.toast.hidden = !0),
      this.toast.setAttribute("role", "status"),
      this.toast.setAttribute("aria-live", "polite"),
      document.body.append(this.toast));
  }
  deny(e, t) {
    const i = e + t + this.touch;
    if (this.toastKey !== i) {
      this.toastKey = i;
      const s = document.createElement("b"),
        o = document.createElement("span");
      if (
        ((s.textContent = t ? "Safe zone" : "Безопасная зона"),
        (o.textContent = FZ[e][t ? 0 : 1]),
        this.toast.replaceChildren(s, o),
        e === "build" || e === "break")
      ) {
        const a = document.createElement("em");
        ((a.textContent = this.touch
          ? t
            ? "Build in the wild: tap Teleport above"
            : "Строить можно в диких землях: «Телепорт» вверху"
          : t
            ? "Build in the wild: type /rtp or use a teleport pad"
            : "Строить можно в диких землях: /rtp или платформа-телепорт"),
          this.toast.append(a));
      }
    }
    ((this.toast.hidden = !1),
      this.toast.classList.remove("pop"),
      this.toast.offsetWidth,
      this.toast.classList.add("pop"),
      this.badge.classList.remove("nudge"),
      this.badge.offsetWidth,
      this.badge.classList.add("nudge"),
      clearTimeout(this.toastTimer),
      (this.toastTimer = window.setTimeout(
        () => {
          this.toast.hidden = !0;
        },
        e === "build" || e === "break" ? 2600 : 1700,
      )));
  }
  get active() {
    return !!this.zone;
  }
  setZone(e) {
    this.zone = zZ(e) ? e : void 0;
  }
  setKiosks(e) {
    this.kiosks = GZ(e);
  }
  contains(e, t, i) {
    return !!this.zone && IM(this.zone, e, t, i);
  }
  kioskAt(e, t) {
    return t !== 0
      ? null
      : (this.kiosks.find(
          (i) =>
            Math.abs(e.x - i.x) <= i.hx &&
            Math.abs(e.z - i.z) <= i.hz &&
            Math.abs(e.y - i.y) < 2.5,
        ) ?? null);
  }
  update(e, t, i, s, o = !1) {
    if (
      ((this.touch = o),
      (this.badge.hidden = !s || !this.zone || !IM(this.zone, e.x, e.z, t)),
      this.badge.hidden)
    ) {
      this.disarm();
      return;
    }
    const a = Date.now() < this.armedUntil,
      r = `${i}${o}${a}${this.zone.radius}`;
    if (this.badge.dataset.key === r) return;
    this.badge.dataset.key = r;
    const l = document.createElement("b"),
      c = document.createElement("span");
    ((l.textContent = i ? "Safe zone" : "Безопасная зона"),
      (c.textContent = o
        ? i
          ? "No building here"
          : "Строить нельзя"
        : i
          ? "No damage or building · /rtp — to the wild, where you can build"
          : "Без урона и стройки · /rtp — в дикие земли, где можно строить"),
      this.badge.classList.toggle("with-teleport", o),
      this.badge.replaceChildren(l, c),
      o &&
        (this.teleport.classList.toggle("armed", a),
        (this.teleport.textContent = a
          ? i
            ? "Tap again"
            : "Ещё раз"
          : i
            ? "Teleport"
            : "Телепорт"),
        this.teleport.setAttribute(
          "aria-label",
          a
            ? i
              ? "Tap again to teleport to a random spot in the wild"
              : "Нажмите ещё раз, чтобы телепортироваться в случайное место"
            : i
              ? "Teleport to a random spot in the wild where you can build (/rtp)"
              : "Телепорт в случайное место, где можно строить (/rtp)",
        ),
        this.badge.append(this.teleport)));
  }
  tapTeleport() {
    if (Date.now() < this.armedUntil) {
      (this.disarm(), this.onTeleport());
      return;
    }
    ((this.armedUntil = Date.now() + v_),
      clearTimeout(this.armTimer),
      (this.armTimer = window.setTimeout(() => this.disarm(), v_)),
      delete this.badge.dataset.key);
  }
  disarm() {
    this.armedUntil &&
      ((this.armedUntil = 0),
      clearTimeout(this.armTimer),
      delete this.badge.dataset.key);
  }
  protectedBlock(e, t, i) {
    return UZ(this.zone, e, t, i);
  }
  dispose() {
    (clearTimeout(this.toastTimer),
      clearTimeout(this.armTimer),
      this.badge.remove(),
      this.toast.remove());
  }
}
const VZ = "/assets/en-betting-fLWr_8lQ.wav",
  $Z = "/assets/en-blackjack-CMYWU1Hz.wav",
  qZ = "/assets/en-bust-CFLuSXwu.wav",
  KZ = "/assets/en-deal-BPd_AobF.wav",
  YZ = "/assets/en-dealer-Cpqy5ae4.wav",
  jZ = "/assets/en-lose-Bnl5eKOD.wav",
  XZ = "/assets/en-push-lAFFAI5U.wav",
  ZZ = "/assets/en-result-DThJYp7t.wav",
  QZ = "/assets/en-turn-C3MYv3x4.wav",
  JZ = "/assets/en-welcome-Bz-fSXWg.wav",
  eQ = "/assets/en-win-XqIEpdQu.wav",
  tQ = "/assets/ru-betting-DkYbMmUE.wav",
  iQ = "/assets/ru-blackjack-C0d4wD-B.wav",
  nQ = "/assets/ru-bust-CmfY5Uwj.wav",
  sQ = "/assets/ru-deal-BcUhQpGY.wav",
  oQ = "/assets/ru-dealer-iH9ICF4N.wav",
  aQ = "/assets/ru-lose-BmXQQ3Nd.wav",
  rQ = "/assets/ru-push-Chw7w_Ap.wav",
  lQ = "/assets/ru-result-DmJKQTJd.wav",
  cQ = "/assets/ru-turn-B83vb7y6.wav",
  hQ = "/assets/ru-welcome-B0mS1WGt.wav",
  dQ = "/assets/ru-win-b_LEoxVr.wav";
function uQ(n, e, t) {
  const i = n.seats.findIndex(
    (s) => (s == null ? void 0 : s.player) === t && s.connected,
  );
  if (!(i < 0 || (e == null ? void 0 : e.version) === n.version)) {
    if (!(
      e != null &&
      e.seats.some((s) => (s == null ? void 0 : s.player) === t && s.connected)
    ))
      return "welcome";
    if (n.phase === "result" && e.phase !== "result") {
      const s = n.seats[i].hands;
      return s.length === 1 ? (s[0].outcome ?? "result") : "result";
    }
    if (
      n.phase === "players" &&
      n.turn === i &&
      (e.phase !== n.phase || e.turn !== i || e.hand !== n.hand)
    )
      return "turn";
    if (n.phase !== e.phase) {
      if (n.phase === "dealing") return "deal";
      if (n.phase === "dealer") return "dealer";
      if (n.phase === "waiting") return "betting";
    }
  }
}
