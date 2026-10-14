// index-Dp6GxvJu 170 — math
// Lines 97766-98053 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class wJ {
  constructor() {
    w(this, "el", document.createElement("section"));
    w(this, "key", "");
    w(this, "nextUpdate", 0);
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
    const s = t && !e.remoteView ? e.mine : null;
    if (((this.el.hidden = !s || z.cinematicHud), !s)) {
      ((this.key = ""), document.body.classList.remove("crew-under"));
      return;
    }
    if (performance.now() < this.nextUpdate) return;
    this.nextUpdate = performance.now() + 100;
    const o = z.language === "en",
      a = _f[s.type] ?? 0,
      r = Array.from({ length: a + 1 }, (b, S) => {
        var M;
        return S === 0
          ? s.driver
          : (((M = [...s.passengerSeats].find(([, x]) => x === S)) == null
              ? void 0
              : M[0]) ?? -1);
      }),
      l = r.map((b) => (b === -1 ? "" : i(b) || s.crewNames.get(b) || `#${b}`)),
      c = document.body.classList.contains("mobile"),
      h =
        (parseFloat(
          document.documentElement.style.getPropertyValue("--m-util-left"),
        ) || innerWidth) -
        4 -
        146,
      d = c && a > 0 && a <= 4 && (a + 1) * 40 > h,
      u = r.map((b, S) => (b === -1 ? e.seatBot(S) : void 0)),
      f = JSON.stringify([
        s.id,
        e.mineSeat,
        r,
        l,
        o,
        c,
        d,
        u.map((b) => (b ? [b.state, b.name] : 0)),
      ]);
    if (
      f === this.key ||
      ((this.key = f),
      this.el.classList.toggle("crew-many", a > 4),
      this.el.classList.toggle("crew-under", d),
      document.body.classList.toggle("crew-under", d),
      this.el.replaceChildren(),
      this.el.setAttribute("aria-label", Zs(s.type)),
      c && a === 0)
    )
      return;
    const p = document.createElement("div");
    p.className = c ? "crew-row" : "crew-diagram";
    const m = a > 4 ? Math.min(4, Math.ceil(Math.sqrt(a + 1))) : 2,
      y = a > 4 ? m * 44 : 120,
      g = a > 4 ? Math.ceil((a + 1) / m) * 44 : 148;
    c ||
      ((p.style.width = `${y}px`),
      (p.style.height = `${g}px`),
      (p.innerHTML = `<svg viewBox="0 0 160 160" aria-hidden="true"><path d="${vJ[s.type] ?? bJ}"/></svg>`));
    for (let b = 0; b <= a; b++) {
      const S = r[b],
        M = b === e.mineSeat,
        x = S !== -1,
        T = M ? void 0 : u[b],
        A = M
          ? o
            ? "You"
            : "Вы"
          : x
            ? l[b]
            : (T == null ? void 0 : T.state) === 1
              ? `${T.name} · ${o ? "soldier at the gun (take the seat and he gets out)" : "боец за пулемётом (займите место — он выйдет)"}`
              : T
                ? `${T.name} · ${o ? "on his way to the gun" : "идёт к пулемёту"}`
                : o
                  ? "Available"
                  : "Свободно",
        _ = document.createElement("button");
      ((_.type = "button"),
        (_.className =
          "crew-seat" +
          (M
            ? " current"
            : x
              ? " occupied"
              : (T == null ? void 0 : T.state) === 1
                ? " occupied soldier"
                : T
                  ? " coming"
                  : "")),
        (_.disabled = M || x),
        _.setAttribute("aria-label", `${o ? "Seat" : "Место"} ${b + 1} · ${A}`),
        _.setAttribute("aria-pressed", String(M)),
        (_.title = _.getAttribute("aria-label")),
        (_.dataset.seat = String(b)),
        (_.onclick = () => e.switchSeat(b)));
      const C = document.createElement("span");
      ((C.textContent = String(b + 1)), _.append(C));
      let R = 60,
        L = a === 0 ? 74 : b === 0 ? 47 : 101;
      (s.type === P.HELI
        ? ((R = b === 0 ? 60 : b === 1 ? 30 : 90), (L = b === 0 ? 35 : 90))
        : a > 1 &&
          a <= 4 &&
          ((R = b === 0 ? 60 : b % 2 ? 32 : 88),
          (L = b === 0 ? 26 : 74 + Math.floor((b - 1) / 2) * 48)),
        a > 4 && ((R = 22 + (b % m) * 44), (L = 22 + Math.floor(b / m) * 44)),
        c || ((_.style.left = `${R}px`), (_.style.top = `${L}px`)),
        p.append(_));
    }
    this.el.append(p);
  }
}
const cp = Math.PI / 180,
  _b = { hip: 4 * cp, ads: 5.5 * cp, snap: 8 * cp },
  Rb = { soldier: 0.5, vehicle: 0.35, ads: 0.1 },
  H_ = { hip: 0.55, ads: 0.7 },
  Cb = { hip: 1.5, ads: 2.3, snap: 7 },
  MJ = 0.2,
  SJ = 12 * cp,
  EJ = 3,
  xJ = 150,
  TJ = 3,
  z_ = (n) => (
    (n %= Math.PI * 2),
    n > Math.PI ? n - Math.PI * 2 : n < -Math.PI ? n + Math.PI * 2 : n
  ),
  NM = (n) => (n < 0 ? 0 : n > 1 ? 1 : n),
  U_ = (n, e, t) => {
    const i = NM((t - n) / (e - n));
    return i * i * (3 - 2 * i);
  };
class AJ {
  constructor() {
    w(this, "current", null);
    w(this, "lastYaw", 0);
    w(this, "lastPitch", 0);
    w(this, "hasLast", !1);
    w(this, "wasAds", !1);
    w(this, "snap", 0);
    w(this, "los", new Map());
    w(this, "scored", []);
    w(this, "out", { friction: 1, yaw: 0, pitch: 0, target: null });
  }
  reset() {
    ((this.current = null),
      (this.hasLast = !1),
      (this.snap = 0),
      (this.wasAds = !1),
      this.los.size && this.los.clear());
  }
  update(e, t, i, s = performance.now()) {
    const o = this.out;
    ((o.friction = 1),
      (o.yaw = 0),
      (o.pitch = 0),
      (o.target = null),
      e.ads && !this.wasAds && (this.snap = MJ),
      (this.wasAds = e.ads));
    const a = this.snap > 0;
    a && (this.snap -= e.dt);
    const r = NM(e.strength);
    if (r <= 0 || e.dt <= 0)
      return ((this.current = null), (this.hasLast = !1), o);
    const l = Math.max(1, e.zoom),
      c = (a ? _b.snap : e.ads ? _b.ads : _b.hip) / l,
      h = Math.cos(e.pitch),
      d = -Math.sin(e.yaw) * h,
      u = Math.sin(e.pitch),
      f = -Math.cos(e.yaw) * h,
      p = this.scored;
    p.length = 0;
    for (const L of t) {
      const N = L.x - e.eyeX,
        D = L.y - e.eyeY,
        H = L.z - e.eyeZ,
        G = Math.hypot(N, D, H),
        I = L.vehicle ? e.vehicleMaxDist : e.maxDist;
      if (G < 1.2 || G > I) continue;
      const O = (N * d + D * u + H * f) / G;
      if (O < 0.9) continue;
      const F = Math.acos(O > 1 ? 1 : O),
        X = Math.min(SJ, Math.atan2(L.radius, G)),
        Q = Math.max(0, F - X),
        ee = L.key === this.current;
      if (Q > (ee ? c * 1.4 : c)) continue;
      const se =
        Q / c +
        (G / I) * 0.15 +
        (L.vehicle !== e.preferVehicles ? 0.35 : 0) -
        (ee ? 0.3 : 0);
      p.push({
        c: L,
        score: se,
        angle: F,
        apparent: X,
        edge: Q,
        yaw: Math.atan2(-N, -H),
        pitch: Math.asin(Math.max(-1, Math.min(1, D / G))),
      });
    }
    p.sort((L, N) => L.score - N.score);
    let m = null;
    for (let L = 0; L < p.length && L < TJ; L++) {
      const N = p[L];
      let D = this.los.get(N.c.key);
      if (
        ((!D || s - D.at > xJ) &&
          ((D = { at: s, ok: i(N.c) }), this.los.set(N.c.key, D)),
        D.ok)
      ) {
        m = N;
        break;
      }
    }
    if ((this.los.size > 64 && this.los.clear(), !m))
      return ((this.current = null), (this.hasLast = !1), o);
    const y = m.c.key,
      g = 1 - U_(0, c, m.edge),
      b = Math.hypot(e.lookYaw, e.lookPitch) / e.dt,
      S = b > 0.02,
      M = e.firing || S || e.moving,
      x = (m.c.vehicle ? Rb.vehicle : Rb.soldier) + (e.ads ? Rb.ads : 0);
    if (
      ((o.friction = 1 - x * r * g * (1 - U_(2.5, 7, b))),
      this.hasLast && y === this.current && (M || e.ads))
    ) {
      const L = (e.ads ? H_.ads : H_.hip) * r * g * (M ? 1 : 0.4),
        N = EJ * e.dt,
        D = z_(m.yaw - this.lastYaw),
        H = m.pitch - this.lastPitch;
      Math.abs(D) < N &&
        Math.abs(H) < N &&
        ((o.yaw += D * L), (o.pitch += H * L));
    }
    const T = z_(m.yaw - e.yaw) * Math.cos(e.pitch),
      A = m.pitch - e.pitch,
      _ = Math.hypot(T, A),
      C = m.apparent * (a ? 0.15 : m.c.vehicle ? 0.5 : 0.45);
    if (_ > C && (M || a)) {
      let L = a
        ? Cb.snap
        : (e.ads ? Cb.ads : Cb.hip) *
          g *
          (e.firing ? 1 : e.deliberate ? 0.8 : 0.4);
      !a &&
        S &&
        e.lookYaw * Math.cos(e.pitch) * T + e.lookPitch * A < 0 &&
        (L *= e.firing ? 0.3 : 0);
      const N = _ - C,
        D = Math.min(
          N,
          L * r * e.dt * (a ? 1 : NM(N / ((1.5 * cp) / l) + 0.25)),
        ),
        H = Math.max(0.2, Math.cos(e.pitch));
      ((o.yaw += ((T / _) * D) / H), (o.pitch += (A / _) * D));
    }
    const R = 10 * e.dt;
    return (
      (o.yaw = Math.max(-R, Math.min(R, o.yaw))),
      (o.pitch = Math.max(-R, Math.min(R, o.pitch))),
      (o.target = y),
      (this.current = y),
      (this.lastYaw = m.yaw),
      (this.lastPitch = m.pitch),
      (this.hasLast = !0),
      o
    );
  }
}
