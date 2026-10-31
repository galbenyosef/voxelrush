// index-BeUlFSPp 261 — root
// Lines 137254-137495 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class bhe {
  root;
  ring;
  seconds;
  kicker;
  title;
  sub;
  action;
  bar;
  frame = 0;
  deadline = 0;
  total = 15;
  reason = "update";
  mode = "none";
  constructor() {
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
      (this.kicker.textContent = z(
        t === "update" ? "updateRestartTitle" : "updateMaintenanceTitle",
      )),
      cancelAnimationFrame(this.frame));
    const i = () => {
      if (this.mode !== "countdown") return;
      const n = Math.max(0, (this.deadline - performance.now()) / 1e3),
        o = Math.ceil(n),
        a = n / this.total;
      ((this.seconds.textContent = String(o)),
        (this.ring.style.strokeDashoffset = String(100 - a * 100)),
        (this.bar.style.transform = `scaleX(${a})`));
      const [r, l] = z("updateRestartIn", { s: o }).split(" · ");
      ((this.title.textContent = r),
        (this.sub.textContent = l ?? ""),
        this.root.classList.toggle("sn-urgent", n <= 5),
        n > 0 && (this.frame = requestAnimationFrame(i)));
    };
    i();
  }
  restarting(e = this.reason) {
    ((this.mode = "restarting"),
      cancelAnimationFrame(this.frame),
      (this.root.className = "sn sn-restart sn-busy"),
      (this.action.hidden = !0),
      (this.kicker.textContent = z(
        e === "update" ? "updateRestartTitle" : "updateMaintenanceTitle",
      )),
      (this.title.textContent = z("updateRestarting")),
      (this.sub.textContent = z("updateReconnecting")),
      (this.bar.style.transform = "scaleX(0)"));
  }
  offline() {
    if (this.mode === "countdown" || this.mode === "restarting") return;
    ((this.mode = "offline"),
      cancelAnimationFrame(this.frame),
      (this.root.className = "sn sn-restart sn-busy"),
      (this.action.hidden = !0));
    const [e, t] = z("connectionReconnecting").split(" — ");
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
      (this.title.textContent = z("updateAvailable")),
      (this.sub.textContent = z("updateAvailableHint")),
      (this.action.hidden = !1),
      (this.action.textContent = z("updateNow")),
      (this.action.onclick = e));
  }
  hide() {
    ((this.mode = "none"),
      cancelAnimationFrame(this.frame),
      (this.root.className = "sn hidden"));
  }
}
function whe(s) {
  try {
    const e = s.getExtension("WEBGL_debug_renderer_info");
    return String(
      e
        ? s.getParameter(e.UNMASKED_RENDERER_WEBGL)
        : s.getParameter(s.RENDERER),
    );
  } catch {
    return "";
  }
}
function Mhe(s) {
  let e = s.replace(/^ANGLE \([^,]+, /, "");
  for (const t of [" (0x", " Direct3D", " OpenGL", " Vulkan", ", "]) {
    const i = e.indexOf(t);
    i > 0 && (e = e.slice(0, i));
  }
  return e
    .replace(/^ANGLE Metal Renderer: /, "")
    .replace(/\)$/, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 60);
}
function She(s) {
  return /intel/i.test(s)
    ? !/Arc\(TM\) [AB]\d{3}|Arc [AB]\d{3}/i.test(s)
    : /amd|radeon/i.test(s)
      ? /Radeon\(TM\) Graphics|Radeon Graphics|Vega \d+|Radeon\(TM\) \d{3}M|Radeon \d{3}M/i.test(
          s,
        )
      : !1;
}
const Ehe = () => typeof navigator < "u" && /Windows/.test(navigator.userAgent),
  LL = "#5cb4ff",
  Ahe = (s) => wW;
Uae();
const The = 65535;
QX();
const xhe = {
    uid: "arms-golden-knife",
    skin: DP,
    owner: "",
    ownerName: "",
    kills: 0,
  },
  _he = matchMedia("(pointer: coarse)").matches || navigator.maxTouchPoints > 0,
  Rhe = 2e4,
  LM = 9e3,
  khe = {
    [v.WHEAT_SPROUT]: w.WHEAT_SEEDS,
    [v.WHEAT_YOUNG]: w.WHEAT_SEEDS,
    [v.WHEAT_CROP]: w.WHEAT,
    [v.POTATO_SPROUT]: w.POTATO_SEEDS,
    [v.POTATO_YOUNG]: w.POTATO_SEEDS,
    [v.POTATO_CROP]: w.POTATO,
    [v.CARROT_SPROUT]: w.CARROT_SEEDS,
    [v.CARROT_YOUNG]: w.CARROT_SEEDS,
    [v.CARROT_CROP]: w.CARROT,
    [v.PUMPKIN_SPROUT]: w.PUMPKIN_SEEDS,
    [v.PUMPKIN_YOUNG]: w.PUMPKIN_SEEDS,
    [v.PUMPKIN_CROP]: v.PUMPKIN,
    ...Object.fromEntries(
      Yc.flatMap((s) => {
        const e = {
          raspberry: w.RASPBERRY,
          blueberry: w.BLUEBERRY,
          blackberry: w.BLACKBERRY,
        }[s.key];
        return s.stages.map((t) => [t, e]);
      }),
    ),
  },
  sy = {
    [w.WHEAT_SEEDS]: v.WHEAT_SPROUT,
    [w.POTATO_SEEDS]: v.POTATO_SPROUT,
    [w.CARROT_SEEDS]: v.CARROT_SPROUT,
    [w.PUMPKIN_SEEDS]: v.PUMPKIN_SPROUT,
    [w.RASPBERRY]: v.RASPBERRY_BUSH_SPROUT,
    [w.BLUEBERRY]: v.BLUEBERRY_BUSH_SPROUT,
    [w.BLACKBERRY]: v.BLACKBERRY_BUSH_SPROUT,
  },
  Che = new Ge(1, 1, 1),
  IL = 1,
  PL = (s) => (s <= 80 ? 0.55 : 0.36),
  Lhe = new Ge(0.65, 0.035, 0.008),
  Ihe = new Ge(0.045, 0.19, 0.3),
  Phe = new Set([v.TORCH, v.RTORCH, v.REDSTONE, v.CAMPFIRE]);
function OL(s, e, t) {
  const i = t.x - e.x,
    n = t.y - e.y,
    o = t.z - e.z,
    a = i * i + n * n + o * o;
  if (a < 1e-6) return s.distanceTo(e);
  const r = Oe(((s.x - e.x) * i + (s.y - e.y) * n + (s.z - e.z) * o) / a, 0, 1);
  return Math.hypot(e.x + i * r - s.x, e.y + n * r - s.y, e.z + o * r - s.z);
}
function Ohe(s) {
  const e = Math.max(0, Math.min(Number.MAX_SAFE_INTEGER, Math.floor(s)));
  return [Math.floor(e / 4294967296), e >>> 0];
}
function Nhe(s, e) {
  return Math.min(Number.MAX_SAFE_INTEGER, (s >>> 0) * 4294967296 + (e >>> 0));
}
const IM = {
  [w.TANK]: L.TANK,
  [w.PLANE]: L.PLANE,
  [w.FIGHTER_JET]: L.FIGHTER_JET,
  [w.DRONE]: L.DRONE,
  [w.BOAT]: L.BOAT,
  [w.CARRIER]: L.CARRIER,
  [w.SUBMARINE]: L.SUBMARINE,
  [w.HELI]: L.HELI,
  [w.MORTAR]: L.MORTAR,
  [w.HIMARS]: L.HIMARS,
  [w.PATRIOT]: L.PATRIOT,
  [w.TURRET]: L.TURRET,
  [w.BTR_TURRET]: L.BTR_TURRET,
  [w.SPACE_ROCKET]: L.SPACE_ROCKET,
};
da(Cq(() => wi()));
const Dhe = document.documentElement.classList.contains("boot-joining"),
  G = new Wo();
G.init();
LN();
let s5 = null;
function x9() {
  if (s5) return;
  const s = document.getElementById("menubg");
  s && (s5 = q0e(s));
}
function Hhe() {
  (s5?.stop(), (s5 = null));
}
Dhe || x9();
const ic = new bhe(),
  NL = sessionStorage.getItem("fc-error");
NL && (sessionStorage.removeItem("fc-error"), G.showMenu(NL));
const PM = 9500;
