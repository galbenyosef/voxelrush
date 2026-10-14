// index-Dp6GxvJu 238 — item
// Lines 129584-129781 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class zse {
  constructor() {
    w(this, "root");
    w(this, "ring");
    w(this, "seconds");
    w(this, "kicker");
    w(this, "title");
    w(this, "sub");
    w(this, "action");
    w(this, "bar");
    w(this, "frame", 0);
    w(this, "deadline", 0);
    w(this, "total", 15);
    w(this, "reason", "update");
    w(this, "mode", "none");
    ((this.root = document.createElement("div")),
      (this.root.id = "server-notice"),
      (this.root.className = "sn hidden"),
      this.root.setAttribute("role", "status"),
      this.root.setAttribute("aria-live", "polite"),
      (this.root.innerHTML = `<div class="sn-ring"><svg viewBox="0 0 48 48" aria-hidden="true"><circle class="sn-track" cx="24" cy="24" r="20"/><circle class="sn-arc" cx="24" cy="24" r="20" pathLength="100"/></svg><b class="sn-sec"></b><span class="sn-spin" aria-hidden="true"></span></div>
      <div class="sn-text"><small class="sn-kicker"></small><strong class="sn-title"></strong><span class="sn-sub"></span></div>
      <button type="button" class="sn-action"></button><i class="sn-bar"></i>`),
      document.body.append(this.root));
    const e = (t) => this.root.querySelector(t);
    ((this.ring = e(".sn-arc")),
      (this.seconds = e(".sn-sec")),
      (this.kicker = e(".sn-kicker")),
      (this.title = e(".sn-title")),
      (this.sub = e(".sn-sub")),
      (this.action = e(".sn-action")),
      (this.bar = e(".sn-bar")));
  }
  countdown(e, t) {
    ((this.mode = "countdown"),
      (this.reason = t),
      (this.total = Math.max(e, 1)),
      (this.deadline = performance.now() + e * 1e3),
      (this.root.className = "sn sn-restart"),
      (this.action.hidden = !0),
      (this.kicker.textContent = U(
        t === "update" ? "updateRestartTitle" : "updateMaintenanceTitle",
      )),
      cancelAnimationFrame(this.frame));
    const i = () => {
      if (this.mode !== "countdown") return;
      const s = Math.max(0, (this.deadline - performance.now()) / 1e3),
        o = Math.ceil(s),
        a = s / this.total;
      ((this.seconds.textContent = String(o)),
        (this.ring.style.strokeDashoffset = String(100 - a * 100)),
        (this.bar.style.transform = `scaleX(${a})`));
      const [r, l] = U("updateRestartIn", { s: o }).split(" · ");
      ((this.title.textContent = r),
        (this.sub.textContent = l ?? ""),
        this.root.classList.toggle("sn-urgent", s <= 5),
        s > 0 && (this.frame = requestAnimationFrame(i)));
    };
    i();
  }
  restarting(e = this.reason) {
    ((this.mode = "restarting"),
      cancelAnimationFrame(this.frame),
      (this.root.className = "sn sn-restart sn-busy"),
      (this.action.hidden = !0),
      (this.kicker.textContent = U(
        e === "update" ? "updateRestartTitle" : "updateMaintenanceTitle",
      )),
      (this.title.textContent = U("updateRestarting")),
      (this.sub.textContent = U("updateReconnecting")),
      (this.bar.style.transform = "scaleX(0)"));
  }
  offline() {
    if (this.mode === "countdown" || this.mode === "restarting") return;
    ((this.mode = "offline"),
      cancelAnimationFrame(this.frame),
      (this.root.className = "sn sn-restart sn-busy"),
      (this.action.hidden = !0));
    const [e, t] = U("connectionReconnecting").split(" — ");
    ((this.kicker.textContent = "Voxel Rush"),
      (this.title.textContent = e),
      (this.sub.textContent = t ?? ""),
      (this.bar.style.transform = "scaleX(0)"));
  }
  updateReady(e) {
    this.mode === "countdown" ||
      this.mode === "restarting" ||
      ((this.mode = "update"),
      (this.root.className = "sn sn-update"),
      (this.kicker.textContent = "Voxel Rush"),
      (this.title.textContent = U("updateAvailable")),
      (this.sub.textContent = U("updateAvailableHint")),
      (this.action.hidden = !1),
      (this.action.textContent = U("updateNow")),
      (this.action.onclick = e));
  }
  hide() {
    ((this.mode = "none"),
      cancelAnimationFrame(this.frame),
      (this.root.className = "sn hidden"));
  }
}
const i8 = "#5cb4ff";
Cee();
const Use = 65535,
  n8 = matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0,
  Fse = 2e4,
  r3 = 9e3,
  Gse = {
    [BLOCK.WHEAT_SPROUT]: ITEM.WHEAT_SEEDS,
    [BLOCK.WHEAT_YOUNG]: ITEM.WHEAT_SEEDS,
    [BLOCK.WHEAT_CROP]: ITEM.WHEAT,
    [BLOCK.POTATO_SPROUT]: ITEM.POTATO_SEEDS,
    [BLOCK.POTATO_YOUNG]: ITEM.POTATO_SEEDS,
    [BLOCK.POTATO_CROP]: ITEM.POTATO,
    [BLOCK.CARROT_SPROUT]: ITEM.CARROT_SEEDS,
    [BLOCK.CARROT_YOUNG]: ITEM.CARROT_SEEDS,
    [BLOCK.CARROT_CROP]: ITEM.CARROT,
    [BLOCK.PUMPKIN_SPROUT]: ITEM.PUMPKIN_SEEDS,
    [BLOCK.PUMPKIN_YOUNG]: ITEM.PUMPKIN_SEEDS,
    [BLOCK.PUMPKIN_CROP]: BLOCK.PUMPKIN,
    ...Object.fromEntries(
      tc.flatMap((n) => {
        const e = {
          raspberry: ITEM.RASPBERRY,
          blueberry: ITEM.BLUEBERRY,
          blackberry: ITEM.BLACKBERRY,
        }[n.key];
        return n.stages.map((t) => [t, e]);
      }),
    ),
  },
  p2 = {
    [ITEM.WHEAT_SEEDS]: BLOCK.WHEAT_SPROUT,
    [ITEM.POTATO_SEEDS]: BLOCK.POTATO_SPROUT,
    [ITEM.CARROT_SEEDS]: BLOCK.CARROT_SPROUT,
    [ITEM.PUMPKIN_SEEDS]: BLOCK.PUMPKIN_SPROUT,
    [ITEM.RASPBERRY]: BLOCK.RASPBERRY_BUSH_SPROUT,
    [ITEM.BLUEBERRY]: BLOCK.BLUEBERRY_BUSH_SPROUT,
    [ITEM.BLACKBERRY]: BLOCK.BLACKBERRY_BUSH_SPROUT,
  },
  Wse = new ze(1, 1, 1),
  s8 = 1,
  o8 = (n) => (n <= 80 ? 0.55 : 0.36),
  Vse = new ze(0.65, 0.035, 0.008),
  $se = new ze(0.045, 0.19, 0.3),
  qse = new Set([BLOCK.TORCH, BLOCK.RTORCH, BLOCK.REDSTONE, BLOCK.CAMPFIRE]);
function a8(n, e, t) {
  const i = t.x - e.x,
    s = t.y - e.y,
    o = t.z - e.z,
    a = i * i + s * s + o * o;
  if (a < 1e-6) return n.distanceTo(e);
  const r = clamp(((n.x - e.x) * i + (n.y - e.y) * s + (n.z - e.z) * o) / a, 0, 1);
  return Math.hypot(e.x + i * r - n.x, e.y + s * r - n.y, e.z + o * r - n.z);
}
function Kse(n) {
  const e = Math.max(0, Math.min(Number.MAX_SAFE_INTEGER, Math.floor(n)));
  return [Math.floor(e / 4294967296), e >>> 0];
}
function Yse(n, e) {
  return Math.min(Number.MAX_SAFE_INTEGER, (n >>> 0) * 4294967296 + (e >>> 0));
}
const l3 = {
  [ITEM.TANK]: VEHICLE_KIND.TANK,
  [ITEM.PLANE]: VEHICLE_KIND.PLANE,
  [ITEM.FIGHTER_JET]: VEHICLE_KIND.FIGHTER_JET,
  [ITEM.DRONE]: VEHICLE_KIND.DRONE,
  [ITEM.BOAT]: VEHICLE_KIND.BOAT,
  [ITEM.CARRIER]: VEHICLE_KIND.CARRIER,
  [ITEM.SUBMARINE]: VEHICLE_KIND.SUBMARINE,
  [ITEM.HELI]: VEHICLE_KIND.HELI,
  [ITEM.MORTAR]: VEHICLE_KIND.MORTAR,
  [ITEM.HIMARS]: VEHICLE_KIND.HIMARS,
  [ITEM.PATRIOT]: VEHICLE_KIND.PATRIOT,
  [ITEM.TURRET]: VEHICLE_KIND.TURRET,
  [ITEM.BTR_TURRET]: VEHICLE_KIND.BTR_TURRET,
  [ITEM.SPACE_ROCKET]: VEHICLE_KIND.SPACE_ROCKET,
};
Vo(oU(() => SETTINGS.language === "ru"));
const jse = document.documentElement.classList.contains("boot-joining"),
  V = new MM();
V.init();
mI();
let Od = null;
function aP() {
  if (Od) return;
  const n = document.getElementById("menubg");
  n && (Od = pse(n));
}
function Xse() {
  (Od == null || Od.stop(), (Od = null));
}
jse || aP();
const ml = new zse(),
  r8 = sessionStorage.getItem("fc-error");
r8 && (sessionStorage.removeItem("fc-error"), V.showMenu(r8));
const c3 = 9500;
