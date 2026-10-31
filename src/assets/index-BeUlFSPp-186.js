// index-BeUlFSPp 186 — math
// Lines 102949-103226 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class roe {
  el = document.createElement("section");
  key = "";
  nextUpdate = 0;
  constructor() {
    ((this.el.id = "vehicle-crew"),
      (this.el.hidden = !0),
      this.el.setAttribute("aria-label", "Crew"),
      document.body.append(this.el));
    for (const e of [
      "pointerdown",
      "pointerup",
      "touchstart",
      "touchend",
      "mousedown",
      "mouseup",
    ])
      this.el.addEventListener(e, (t) => t.stopPropagation());
  }
  update(e, t, i) {
    const n = t && !e.remoteView ? e.mine : null;
    if (((this.el.hidden = !n || Y.cinematicHud), !n)) {
      ((this.key = ""), document.body.classList.remove("crew-under"));
      return;
    }
    if (performance.now() < this.nextUpdate) return;
    ((this.nextUpdate = performance.now() + 100), wi());
    const o = r1[n.type] ?? 0,
      a = Array.from({ length: o + 1 }, (y, b) =>
        b === 0
          ? n.driver
          : ([...n.passengerSeats].find(([, S]) => S === b)?.[0] ?? -1),
      ),
      r = a.map((y) => (y === -1 ? "" : i(y) || n.crewNames.get(y) || `#${y}`)),
      l = document.body.classList.contains("mobile"),
      c =
        (parseFloat(
          document.documentElement.style.getPropertyValue("--m-util-left"),
        ) || innerWidth) -
        4 -
        146,
      h = l && o > 0 && o <= 4 && (o + 1) * 40 > c,
      d = a.map((y, b) => (y === -1 ? e.seatBot(b) : void 0)),
      u = JSON.stringify([
        n.id,
        e.mineSeat,
        a,
        r,
        $0(),
        l,
        h,
        d.map((y) => (y ? [y.state, y.name] : 0)),
      ]);
    if (
      u === this.key ||
      ((this.key = u),
      this.el.classList.toggle("crew-many", o > 4),
      this.el.classList.toggle("crew-under", h),
      document.body.classList.toggle("crew-under", h),
      this.el.replaceChildren(),
      this.el.setAttribute("aria-label", to(n.type)),
      l && o === 0)
    )
      return;
    const f = document.createElement("div");
    f.className = l ? "crew-row" : "crew-diagram";
    const p = o > 4 ? Math.min(4, Math.ceil(Math.sqrt(o + 1))) : 2,
      m = o > 4 ? p * 44 : 120,
      g = o > 4 ? Math.ceil((o + 1) / p) * 44 : 148;
    l ||
      ((f.style.width = `${m}px`),
      (f.style.height = `${g}px`),
      (f.innerHTML = `<svg viewBox="0 0 160 160" aria-hidden="true"><path d="${ooe[n.type] ?? aoe}"/></svg>`));
    for (let y = 0; y <= o; y++) {
      const b = a[y],
        S = y === e.mineSeat,
        M = b !== -1,
        E = S ? void 0 : d[y],
        A = S
          ? I("You", "Вы")
          : M
            ? r[y]
            : E?.state === 1
              ? `${E.name} · ${I("soldier at the gun (take the seat and he gets out)", "боец за пулемётом (займите место — он выйдет)")}`
              : E
                ? `${E.name} · ${I("on his way to the gun", "идёт к пулемёту")}`
                : I("Available", "Свободно"),
        T = document.createElement("button");
      ((T.type = "button"),
        (T.className =
          "crew-seat" +
          (S
            ? " current"
            : M
              ? " occupied"
              : E?.state === 1
                ? " occupied soldier"
                : E
                  ? " coming"
                  : "")),
        (T.disabled = S || M),
        T.setAttribute("aria-label", `${I("Seat", "Место")} ${y + 1} · ${A}`),
        T.setAttribute("aria-pressed", String(S)),
        (T.title = T.getAttribute("aria-label")),
        (T.dataset.seat = String(y)),
        (T.onclick = () => e.switchSeat(y)));
      const x = document.createElement("span");
      ((x.textContent = String(y + 1)), T.append(x));
      let R = 60,
        _ = o === 0 ? 74 : y === 0 ? 47 : 101;
      (n.type === L.HELI
        ? ((R = y === 0 ? 60 : y === 1 ? 30 : 90), (_ = y === 0 ? 35 : 90))
        : o > 1 &&
          o <= 4 &&
          ((R = y === 0 ? 60 : y % 2 ? 32 : 88),
          (_ = y === 0 ? 26 : 74 + Math.floor((y - 1) / 2) * 48)),
        o > 4 && ((R = 22 + (y % p) * 44), (_ = 22 + Math.floor(y / p) * 44)),
        l || ((T.style.left = `${R}px`), (T.style.top = `${_}px`)),
        f.append(T));
    }
    this.el.append(f);
  }
}
const Y1 = Math.PI / 180,
  jw = { hip: 4 * Y1, ads: 5.5 * Y1, snap: 8 * Y1 },
  Xw = { soldier: 0.5, vehicle: 0.35, ads: 0.1 },
  rC = { hip: 0.55, ads: 0.7 },
  Zw = { hip: 1.5, ads: 2.3, snap: 7 },
  loe = 0.2,
  coe = 12 * Y1,
  hoe = 3,
  doe = 150,
  uoe = 3,
  lC = (s) => (
    (s %= Math.PI * 2),
    s > Math.PI ? s - Math.PI * 2 : s < -Math.PI ? s + Math.PI * 2 : s
  ),
  ME = (s) => (s < 0 ? 0 : s > 1 ? 1 : s),
  cC = (s, e, t) => {
    const i = ME((t - s) / (e - s));
    return i * i * (3 - 2 * i);
  };
class foe {
  current = null;
  lastYaw = 0;
  lastPitch = 0;
  hasLast = !1;
  wasAds = !1;
  snap = 0;
  los = new Map();
  scored = [];
  out = { friction: 1, yaw: 0, pitch: 0, target: null };
  reset() {
    ((this.current = null),
      (this.hasLast = !1),
      (this.snap = 0),
      (this.wasAds = !1),
      this.los.size && this.los.clear());
  }
  update(e, t, i, n = performance.now()) {
    const o = this.out;
    ((o.friction = 1),
      (o.yaw = 0),
      (o.pitch = 0),
      (o.target = null),
      e.ads && !this.wasAds && (this.snap = loe),
      (this.wasAds = e.ads));
    const a = this.snap > 0;
    a && (this.snap -= e.dt);
    const r = ME(e.strength);
    if (r <= 0 || e.dt <= 0)
      return ((this.current = null), (this.hasLast = !1), o);
    const l = Math.max(1, e.zoom),
      c = (a ? jw.snap : e.ads ? jw.ads : jw.hip) / l,
      h = Math.cos(e.pitch),
      d = -Math.sin(e.yaw) * h,
      u = Math.sin(e.pitch),
      f = -Math.cos(e.yaw) * h,
      p = this.scored;
    p.length = 0;
    for (const C of t) {
      const P = C.x - e.eyeX,
        O = C.y - e.eyeY,
        B = C.z - e.eyeZ,
        H = Math.hypot(P, O, B),
        D = C.vehicle ? e.vehicleMaxDist : e.maxDist;
      if (H < 1.2 || H > D) continue;
      const U = (P * d + O * u + B * f) / H;
      if (U < 0.9) continue;
      const W = Math.acos(U > 1 ? 1 : U),
        J = Math.min(coe, Math.atan2(C.radius, H)),
        j = Math.max(0, W - J),
        ne = C.key === this.current;
      if (j > (ne ? c * 1.4 : c)) continue;
      const ge =
        j / c +
        (H / D) * 0.15 +
        (C.vehicle !== e.preferVehicles ? 0.35 : 0) -
        (ne ? 0.3 : 0);
      p.push({
        c: C,
        score: ge,
        angle: W,
        apparent: J,
        edge: j,
        yaw: Math.atan2(-P, -B),
        pitch: Math.asin(Math.max(-1, Math.min(1, O / H))),
      });
    }
    p.sort((C, P) => C.score - P.score);
    let m = null;
    for (let C = 0; C < p.length && C < uoe; C++) {
      const P = p[C];
      let O = this.los.get(P.c.key);
      if (
        ((!O || n - O.at > doe) &&
          ((O = { at: n, ok: i(P.c) }), this.los.set(P.c.key, O)),
        O.ok)
      ) {
        m = P;
        break;
      }
    }
    if ((this.los.size > 64 && this.los.clear(), !m))
      return ((this.current = null), (this.hasLast = !1), o);
    const g = m.c.key,
      y = 1 - cC(0, c, m.edge),
      b = Math.hypot(e.lookYaw, e.lookPitch) / e.dt,
      S = b > 0.02,
      M = e.firing || S || e.moving,
      E = (m.c.vehicle ? Xw.vehicle : Xw.soldier) + (e.ads ? Xw.ads : 0);
    if (
      ((o.friction = 1 - E * r * y * (1 - cC(2.5, 7, b))),
      this.hasLast && g === this.current && (M || e.ads))
    ) {
      const C = (e.ads ? rC.ads : rC.hip) * r * y * (M ? 1 : 0.4),
        P = hoe * e.dt,
        O = lC(m.yaw - this.lastYaw),
        B = m.pitch - this.lastPitch;
      Math.abs(O) < P &&
        Math.abs(B) < P &&
        ((o.yaw += O * C), (o.pitch += B * C));
    }
    const A = lC(m.yaw - e.yaw) * Math.cos(e.pitch),
      T = m.pitch - e.pitch,
      x = Math.hypot(A, T),
      R = m.apparent * (a ? 0.15 : m.c.vehicle ? 0.5 : 0.45);
    if (x > R && (M || a)) {
      let C = a
        ? Zw.snap
        : (e.ads ? Zw.ads : Zw.hip) *
          y *
          (e.firing ? 1 : e.deliberate ? 0.8 : 0.4);
      !a &&
        S &&
        e.lookYaw * Math.cos(e.pitch) * A + e.lookPitch * T < 0 &&
        (C *= e.firing ? 0.3 : 0);
      const P = x - R,
        O = Math.min(
          P,
          C * r * e.dt * (a ? 1 : ME(P / ((1.5 * Y1) / l) + 0.25)),
        ),
        B = Math.max(0.2, Math.cos(e.pitch));
      ((o.yaw += ((A / x) * O) / B), (o.pitch += (T / x) * O));
    }
    const _ = 10 * e.dt;
    return (
      (o.yaw = Math.max(-_, Math.min(_, o.yaw))),
      (o.pitch = Math.max(-_, Math.min(_, o.pitch))),
      (o.target = g),
      (this.current = g),
      (this.lastYaw = m.yaw),
      (this.lastPitch = m.pitch),
      (this.hasLast = !0),
      o
    );
  }
}
