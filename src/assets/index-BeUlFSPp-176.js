// index-BeUlFSPp 176 — badge
// Lines 99865-100176 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Mne {
  constructor(e) {
    ((this.scene = e),
      (this.badge.className = "world-border-notice"),
      (this.badge.hidden = !0),
      this.badge.setAttribute("role", "status"),
      document.body.append(this.badge));
    for (const t of this.walls) ((t.visible = !1), e.add(t));
  }
  border;
  edges = [];
  material = new Gi({
    transparent: !0,
    depthWrite: !1,
    side: Mi,
    uniforms: { opacity: { value: 0.45 } },
    vertexShader:
      "varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
    fragmentShader: `varying vec2 vUv; uniform float opacity;
      void main(){vec2 grid=abs(fract(vUv*vec2(48.,32.))-.5);
        float line=smoothstep(.455,.49,max(grid.x,grid.y));
        float fade=smoothstep(0.,.18,vUv.x)*(1.-smoothstep(.82,1.,vUv.x));
        gl_FragColor=vec4(.28,.77,.95,fade*opacity*(.05+.6*line));}`,
  });
  geometry = new ms(192, 128);
  walls = Array.from({ length: 4 }, () => new Q(this.geometry, this.material));
  badge = document.createElement("div");
  lastText = "";
  noticeDistance = 64;
  setBorder(e) {
    ((this.border = e),
      (this.edges = [
        e.centerX - e.radius,
        e.centerX + e.radius,
        e.centerZ - e.radius,
        e.centerZ + e.radius,
      ]));
  }
  update(e, t, i, n = 0) {
    if (!this.border?.radius || !i) {
      for (const c of this.walls) c.visible = !1;
      this.badge.hidden = !0;
      return;
    }
    const a = this.edges;
    let r = 1 / 0;
    for (let c = 0; c < 4; c++) {
      const h = c < 2,
        d = Math.abs((h ? e.x : e.z) - a[c]);
      r = Math.min(r, d);
      const u = this.walls[c];
      ((u.visible = d < 96),
        u.visible &&
          (u.position.set(h ? a[c] : e.x, e.y + 24, h ? e.z : a[c]),
          (u.rotation.y = h ? Math.PI / 2 : 0)));
    }
    if (
      ((this.material.uniforms.opacity.value =
        0.2 + 0.35 * (1 - Math.min(96, r) / 96)),
      (this.badge.hidden = r > Math.max(this.noticeDistance, n)),
      this.badge.hidden)
    )
      return;
    this.badge.classList.toggle("world-border-close", r < Math.max(8, n * 0.4));
    const l = I(
      `WORLD BOUNDARY · ${Math.max(0, Math.floor(r))} blocks`,
      `ГРАНИЦА МИРА · ${Math.max(0, Math.floor(r))} блоков`,
    );
    l !== this.lastText && ((this.badge.textContent = l), (this.lastText = l));
  }
  dispose() {
    this.badge.remove();
    for (const e of this.walls) this.scene.remove(e);
    (this.geometry.dispose(), this.material.dispose());
  }
}
function Sne(s) {
  return Number.isSafeInteger(s) && s >= 0 && s <= 1e6;
}
function Ene(s) {
  const e = s;
  return (
    !!e &&
    Sne(e.radius) &&
    Number.isFinite(e.centerX) &&
    Number.isFinite(e.centerZ)
  );
}
function vE(s, e, t, i = 0) {
  return (
    i === 0 &&
    s.radius > 0 &&
    Number.isFinite(e) &&
    Number.isFinite(t) &&
    (e - s.centerX) ** 2 + (t - s.centerZ) ** 2 <= s.radius ** 2
  );
}
function Ane(s, e, t, i = 0) {
  return !!s && vE(s, Math.floor(e) + 0.5, Math.floor(t) + 0.5, i);
}
const Tne = {
  fire: ["Weapons are holstered here", "Здесь оружие не стреляет"],
  break: ["Blocks here cannot be broken", "Здесь нельзя ломать блоки"],
  build: ["Building is not allowed here", "Здесь нельзя строить"],
  explosive: [
    "Explosives are not allowed here",
    "Здесь нельзя использовать взрывчатку",
  ],
};
function xne(s) {
  return Array.isArray(s)
    ? s
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
const Qk = 3500;
class _ne {
  zone;
  kiosks = [];
  onTeleport = () => {};
  badge = document.createElement("div");
  teleport = document.createElement("button");
  armedUntil = 0;
  armTimer = 0;
  toast = document.createElement("div");
  toastTimer = 0;
  toastKey = "";
  touch = !1;
  constructor() {
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
    const i = e + $0() + this.touch;
    if (this.toastKey !== i) {
      this.toastKey = i;
      const n = document.createElement("b"),
        o = document.createElement("span");
      if (
        ((n.textContent = I("Safe zone", "Безопасная зона")),
        (o.textContent = I(...Tne[e])),
        this.toast.replaceChildren(n, o),
        e === "build" || e === "break")
      ) {
        const a = document.createElement("em");
        ((a.textContent = this.touch
          ? I(
              "Build in the wild: tap Teleport above",
              "Строить можно в диких землях: «Телепорт» вверху",
            )
          : I(
              "Build in the wild: type /rtp or use a teleport pad",
              "Строить можно в диких землях: /rtp или платформа-телепорт",
            )),
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
    this.zone = Ene(e) ? e : void 0;
  }
  setKiosks(e) {
    this.kiosks = xne(e);
  }
  contains(e, t, i) {
    return !!this.zone && vE(this.zone, e, t, i);
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
  update(e, t, i, n, o = !1) {
    if (
      ((this.touch = o),
      (this.badge.hidden = !n || !this.zone || !vE(this.zone, e.x, e.z, t)),
      this.badge.hidden)
    ) {
      this.disarm();
      return;
    }
    const a = Date.now() < this.armedUntil,
      r = `${$0()}${o}${a}${this.zone.radius}`;
    if (this.badge.dataset.key === r) return;
    this.badge.dataset.key = r;
    const l = document.createElement("b"),
      c = document.createElement("span");
    ((l.textContent = I("Safe zone", "Безопасная зона")),
      (c.textContent = o
        ? I("No building here", "Строить нельзя")
        : I(
            "No damage or building · /rtp — to the wild, where you can build",
            "Без урона и стройки · /rtp — в дикие земли, где можно строить",
          )),
      this.badge.classList.toggle("with-teleport", o),
      this.badge.replaceChildren(l, c),
      o &&
        (this.teleport.classList.toggle("armed", a),
        (this.teleport.textContent = a
          ? I("Tap again", "Ещё раз")
          : I("Teleport", "Телепорт")),
        this.teleport.setAttribute(
          "aria-label",
          a
            ? I(
                "Tap again to teleport to a random spot in the wild",
                "Нажмите ещё раз, чтобы телепортироваться в случайное место",
              )
            : I(
                "Teleport to a random spot in the wild where you can build (/rtp)",
                "Телепорт в случайное место, где можно строить (/rtp)",
              ),
        ),
        this.badge.append(this.teleport)));
  }
  tapTeleport() {
    if (Date.now() < this.armedUntil) {
      (this.disarm(), this.onTeleport());
      return;
    }
    ((this.armedUntil = Date.now() + Qk),
      clearTimeout(this.armTimer),
      (this.armTimer = window.setTimeout(() => this.disarm(), Qk)),
      delete this.badge.dataset.key);
  }
  disarm() {
    this.armedUntil &&
      ((this.armedUntil = 0),
      clearTimeout(this.armTimer),
      delete this.badge.dataset.key);
  }
  protectedBlock(e, t, i) {
    return Ane(this.zone, e, t, i);
  }
  dispose() {
    (clearTimeout(this.toastTimer),
      clearTimeout(this.armTimer),
      this.badge.remove(),
      this.toast.remove());
  }
}
const Jk = new k(),
  Rne = new hi(),
  eC = new k();
class kne extends Xt {
  constructor(e = document.createElement("div")) {
    (super(),
      (this.isCSS3DObject = !0),
      (this.element = e),
      (this.element.style.position = "absolute"),
      (this.element.style.pointerEvents = "auto"),
      (this.element.style.userSelect = "none"),
      this.element.setAttribute("draggable", !1),
      this.addEventListener("removed", function () {
        this.traverse(function (t) {
          t.element instanceof Element &&
            t.element.parentNode !== null &&
            t.element.parentNode.removeChild(t.element);
        });
      }));
  }
  copy(e, t) {
    return (super.copy(e, t), (this.element = e.element.cloneNode(!0)), this);
  }
}
const cl = new Rt(),
  Cne = new Rt();
