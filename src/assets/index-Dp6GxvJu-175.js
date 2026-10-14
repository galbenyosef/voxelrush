// index-Dp6GxvJu 175 — math
// Lines 99114-99745 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class HJ {
  constructor() {
    w(this, "canvas", document.createElement("canvas"));
    w(this, "ctx");
    w(this, "direction", new k());
    w(this, "projected", new k());
    w(this, "lastDraw", 0);
    w(this, "rangeAt", 0);
    w(this, "range");
    w(this, "agl");
    w(this, "sightOrigin", new k());
    w(this, "sightDirection", new k());
    w(this, "sightRangeAt", 0);
    w(this, "sightVehicle", -1);
    w(this, "sightDistances", [600, 1200]);
    w(this, "sightHits", [!1, !1]);
    w(this, "reloadMax", 0);
    ((this.canvas.id = "tactical-hud"),
      this.canvas.setAttribute(
        "aria-label",
        z.language === "en"
          ? "Vehicle instruments and targeting"
          : "Приборы техники и захват цели",
      ),
      document.body.append(this.canvas),
      (this.ctx = this.canvas.getContext("2d")));
  }
  update(e, t, i, s, o, a = []) {
    var L, N;
    const r = t.mine,
      l = !!r && t.mineSeat === 0 && z.vehicleInstruments,
      c = !!r && t.mineSeat === 0 && r.type === P.FIGHTER_JET,
      h = i.held === E.GRENADE_LAUNCHER && !r,
      d = i.held === E.RPG && i.loadedAmmo() === E.ROCKET_GUIDED,
      u = r && !t.remoteView ? t.seatSight() : null,
      f = o && !z.cinematicHud && (l || c || d || h || !!u);
    if (
      ((this.canvas.hidden = !f),
      document.body.classList.toggle(
        "instruments-active",
        f && (l || c || !!u),
      ),
      !f)
    )
      return;
    const p = performance.now();
    if (p - this.lastDraw < 33) return;
    this.lastDraw = p;
    const m = innerWidth,
      y = innerHeight,
      g = Math.min(devicePixelRatio || 1, 1.5);
    (this.canvas.width !== Math.round(m * g) ||
      this.canvas.height !== Math.round(y * g)) &&
      ((this.canvas.width = Math.round(m * g)),
      (this.canvas.height = Math.round(y * g)));
    const b = this.ctx;
    (b.setTransform(g, 0, 0, g, 0, 0), b.clearRect(0, 0, m, y));
    const S =
        document.body.classList.contains("mobile") ||
        document.body.classList.contains("embed"),
      M = S || m < 700,
      x = M ? 0.8 : 1,
      T = m / 2,
      A = y / 2;
    ((b.font = `600 ${M ? 11 : 14}px ui-monospace,monospace`),
      (b.lineWidth = 1.2),
      (b.strokeStyle = "#bce4d3"),
      (b.fillStyle = "#dcf1e4"),
      (b.shadowColor = "#071713"),
      (b.shadowBlur = 2));
    const _ = z.language === "en",
      C = (D, H, G, I = "#dcf1e4") => {
        ((b.fillStyle = I), b.fillText(D, H, G));
      },
      R = (D, H, G) => {
        for (const [I, O] of [
          [-1, -1],
          [1, -1],
          [-1, 1],
          [1, 1],
        ])
          (b.beginPath(),
            b.moveTo(D + I * G, H + O * (G - 12)),
            b.lineTo(D + I * G, H + O * G),
            b.lineTo(D + I * (G - 12), H + O * G),
            b.stroke());
      };
    if (c && r) {
      const D = r.id !== this.sightVehicle || p - this.sightRangeAt >= 100;
      D && ((this.sightRangeAt = p), (this.sightVehicle = r.id));
      for (let H = 0; H < 2; H++) {
        const G = H === 1,
          I = this.sightOrigin,
          O = this.sightDirection;
        (G ? oL(r, -(r.rocketSide ?? 1), I, O) : sL(r, -r.mgSide, I, O),
          O.normalize());
        const F = G ? b$ : Rg(r.type);
        if (D) {
          const J = s.raycast(I, O, F),
            re = t.rayHit(I, O, (J == null ? void 0 : J.dist) ?? F);
          ((this.sightDistances[H] =
            (re == null ? void 0 : re.dist) ??
            (J == null ? void 0 : J.dist) ??
            F),
            (this.sightHits[H] = !!(re || J)));
        }
        const X = this.sightDistances[H];
        if (
          (this.projected.copy(I).addScaledVector(O, X).project(e),
          this.projected.z < -1 ||
            this.projected.z > 1 ||
            Math.abs(this.projected.x) > 0.96 ||
            Math.abs(this.projected.y) > 0.9)
        )
          continue;
        const Q = T + this.projected.x * T,
          ee = A - this.projected.y * A,
          se = G ? "#ffd58c" : "#8ff1ca",
          oe = M ? 7 : 9;
        ((b.strokeStyle = se),
          b.beginPath(),
          G
            ? (b.moveTo(Q, ee - oe),
              b.lineTo(Q + oe, ee),
              b.lineTo(Q, ee + oe),
              b.lineTo(Q - oe, ee),
              b.closePath())
            : (b.arc(Q, ee, oe, 0, Math.PI * 2),
              b.moveTo(Q - 3, ee),
              b.lineTo(Q + 3, ee),
              b.moveTo(Q, ee - 3),
              b.lineTo(Q, ee + 3)),
          b.stroke(),
          (b.textAlign = M ? "right" : "center"),
          C(
            `${G ? (_ ? "ROCKET" : "РАКЕТА") : _ ? "GUN" : "ПУЛЕМЁТ"} · ${this.sightHits[H] ? "" : "≤"}${Math.round(X)} m`,
            M ? Q - oe - 7 : Q,
            ee + (M ? (G ? 14 : -4) : G ? oe + 15 : -oe - 7),
            se,
          ));
      }
      ((b.textAlign = "left"), (b.strokeStyle = "#bce4d3"));
    }
    if (u && r) {
      p - this.rangeAt > 100 &&
        ((this.rangeAt = p),
        (this.range =
          (L = s.raycast(
            e.position,
            e.getWorldDirection(this.direction),
            1e3,
          )) == null
            ? void 0
            : L.dist));
      const D = "#ff876c",
        H = "#edc987",
        I = u.arc ? (u.hot ? H : "#bce4d3") : D,
        O = S ? 0.85 : 1;
      (b.save(),
        (b.strokeStyle = I),
        (b.fillStyle = I),
        (b.lineWidth = 1.4),
        b.beginPath(),
        b.arc(T, A, 1.6, 0, Math.PI * 2),
        b.fill(),
        b.beginPath());
      for (const [se, oe] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ])
        (b.moveTo(T + se * 7 * O, A + oe * 7 * O),
          b.lineTo(T + se * 20 * O, A + oe * 20 * O));
      for (const se of [1, 2, 3]) {
        const oe = se * 26 * O,
          J = se === 2 ? 6 : 4;
        (b.moveTo(T + oe, A - J),
          b.lineTo(T + oe, A + J),
          b.moveTo(T - oe, A - J),
          b.lineTo(T - oe, A + J));
      }
      for (const se of [1, 2]) {
        const oe = 20 * O + se * 18 * O,
          J = 7 - se * 2;
        (b.moveTo(T - J, A + oe), b.lineTo(T + J, A + oe));
      }
      (b.stroke(), S && R(T, A, 17));
      const F = Math.max(0, Math.min(1, u.heat)),
        X = S ? 30 : 44,
        Q = Math.PI * 0.2,
        ee = Math.PI * 0.8;
      if (
        ((!S || F > 0.18 || u.hot) &&
          ((b.lineWidth = 3),
          (b.lineCap = "round"),
          (b.shadowBlur = 0),
          (b.strokeStyle = "#0b161480"),
          b.beginPath(),
          b.arc(T, A, X, Q, ee),
          b.stroke(),
          (b.strokeStyle = u.hot || F > 0.85 ? D : F > 0.55 ? H : "#8ff1ca"),
          F > 0.01 &&
            (b.beginPath(), b.arc(T, A, X, ee - (ee - Q) * F, ee), b.stroke())),
        b.restore(),
        (b.textAlign = "center"),
        u.arc
          ? u.hot &&
            C(
              `${_ ? "OVERHEAT" : "ПЕРЕГРЕВ"} ${u.cooling.toFixed(1)} ${_ ? "s" : "с"}`,
              T,
              A - 34 * O,
              H,
            )
          : C(_ ? "GUN CANNOT BEAR" : "ВНЕ СЕКТОРА ПУЛЕМЁТА", T, A - 34 * O, D),
        (b.textAlign = "left"),
        !S && z.vehicleInstruments)
      ) {
        const se = T - Math.min(m * 0.3, 280),
          oe = T + Math.min(m * 0.3, 280) - 110 * x,
          J = r.vel.length() * 3.6,
          re = Math.max(0, r.hp / r.maxHp);
        (C(_ ? "SPD / km/h" : "СКОР / км/ч", se, A - 40),
          C(J.toFixed(0).padStart(3, "0"), se, A - 15, "#8ff1ca"),
          C(
            `${_ ? "HULL" : "КОРПУС"} ${Math.ceil(re * 100)}%`,
            se,
            A + 18,
            re < 0.3 ? D : "#dcf1e4",
          ),
          (b.fillStyle = "#22453b"),
          b.fillRect(se, A + 28, 90, 3),
          (b.fillStyle = re < 0.3 ? D : "#8ff1ca"),
          b.fillRect(se, A + 28, 90 * re, 3),
          C(
            `${_ ? "RANGE" : "ДАЛЬН"} ${this.range === void 0 ? "—" : this.range.toFixed(1)} m`,
            T - 58,
            A + 74,
          ),
          [
            [
              u.gun.heavy
                ? _
                  ? "HMG 12.7"
                  : "ПУЛЕМЁТ 12,7"
                : r.type === P.HELI
                  ? _
                    ? "DOOR GUN 7.62"
                    : "БОРТОВОЙ 7,62"
                  : _
                    ? "MG 7.62"
                    : "ПУЛЕМЁТ 7,62",
              "#8ff1ca",
            ],
            [
              `${_ ? "ZOOM" : "ЗУМ"} ×${u.zoom >= 1.95 ? Math.round(u.zoom * 2) / 2 : 1}`,
            ],
            [
              `${_ ? "BARREL" : "СТВОЛ"} ${Math.round(F * 100)}%`,
              u.hot || F > 0.85 ? D : F > 0.55 ? H : void 0,
            ],
            [
              `${_ ? "BEARING" : "ПЕЛЕНГ"} ${u.bearing.toFixed(0).padStart(3, "0")}°`,
            ],
            [
              u.arc
                ? u.hot
                  ? _
                    ? "COOLING"
                    : "ОСТЫВАЕТ"
                  : u.laid
                    ? _
                      ? "WEAPON READY"
                      : "ОРУЖИЕ ГОТОВО"
                    : _
                      ? "LAYING"
                      : "НАВОДКА"
                : _
                  ? "NO ARC"
                  : "ВНЕ СЕКТОРА",
              u.arc ? (u.hot ? H : u.laid ? void 0 : H) : D,
            ],
          ].forEach(([We, it], ut) => C(We, oe, A - 40 + ut * 21, it)));
      }
    }
    if (l && r) {
      const D =
        ((((Math.atan2(
          -e.getWorldDirection(this.direction).x,
          -this.direction.z,
        ) *
          180) /
          Math.PI) %
          360) +
          360) %
        360;
      if (
        (p - this.rangeAt > 100 &&
          ((this.rangeAt = p),
          (this.range =
            (N = s.raycast(e.position, this.direction, 1e3)) == null
              ? void 0
              : N.dist),
          (this.agl = s.isLoaded(r.pos.x, r.pos.z)
            ? Math.max(0, r.pos.y - s.groundAt(r.pos.x, r.pos.z, r.pos.y))
            : void 0)),
        r.type === P.FIGHTER_JET)
      ) {
        ((b.textAlign = "center"),
          C(
            `${M ? (_ ? "BNK" : "КР") : _ ? "BANK" : "КРЕН"} ${((r.roll * 180) / Math.PI).toFixed(0)}° · ${M ? (_ ? "PIT" : "ТГ") : _ ? "PITCH" : "ТАНГАЖ"} ${((r.pitch * 180) / Math.PI).toFixed(0)}°`,
            T,
            A - (M ? 92 : 140),
          ),
          (b.textAlign = "left"),
          b.save(),
          b.translate(T, A - (M ? 72 : 112)),
          b.beginPath(),
          b.rect(-65, -18, 130, 36),
          b.clip(),
          b.rotate(-r.roll));
        const oe = Math.max(-28, Math.min(28, r.pitch * 45));
        (b.beginPath(),
          b.moveTo(-65, oe),
          b.lineTo(-12, oe),
          b.moveTo(12, oe),
          b.lineTo(65, oe),
          b.stroke(),
          b.restore());
        let J = 0;
        const re = (Ce, Re, We) => {
          const it = Ce.distanceTo(r.pos);
          if (
            it > Vd ||
            it < 3 ||
            (J++,
            this.projected.copy(Ce).project(e),
            this.projected.z < -1 ||
              this.projected.z > 1 ||
              Math.abs(this.projected.x) > 0.93 ||
              Math.abs(this.projected.y) > 0.8)
          )
            return;
          const ut = T + this.projected.x * T,
            gt = A - this.projected.y * A;
          if (M && (gt < 125 || gt > y - 110)) return;
          ((b.strokeStyle = We), R(ut, gt, M ? 9 : 13));
          let ve = gt - 18;
          (Math.abs(ve - (A - (M ? 92 : 140))) < 22 ||
            Math.abs(ve - (A + 65)) < 20) &&
            (ve = gt + 28);
          const Y =
            !M && ut > T + 100 && ut < T + 300 && gt > A - 70 && gt < A + 120;
          ((b.textAlign = Y ? "right" : "center"),
            C(
              `${M ? "" : Re + " "}${Math.round(it)} m`,
              Y ? ut - 20 : ut,
              ve,
              We,
            ),
            (b.textAlign = "left"));
        };
        for (const Ce of t.vehicles.values())
          Ce !== r &&
            Ce.planet === r.planet &&
            Ce.hp > 0 &&
            re(Ce.pos, Zs(Ce.type), "#82dcff");
        for (const Ce of a)
          re(
            Ce.getWorldPosition(this.projected),
            _ ? "PERSON" : "ЧЕЛОВЕК",
            "#ffc887",
          );
        ((b.textAlign = "center"),
          C(
            `${_ ? "SENSORS" : "ОБЗОР"} ${Vd} m · ${J} · NV ${M ? "●" : gs(z.binds.vision)}`,
            T,
            M ? A + 90 : 100,
            "#8ff1ca",
          ),
          !r.grounded &&
            r.vel.length() < Ow[r.type].stall * 1.15 &&
            C(
              _ ? "STALL · ADD THROTTLE" : "СВАЛИВАНИЕ · ДОБАВЬТЕ ТЯГУ",
              T,
              A - 72,
              "#ff876c",
            ),
          !r.grounded &&
            this.agl !== void 0 &&
            this.agl < 15 &&
            r.vel.y < -2 &&
            C(_ ? "PULL UP" : "НАБИРАЙТЕ ВЫСОТУ", T, A - 90, "#ff876c"),
          (b.textAlign = "left"),
          (b.strokeStyle = "#bce4d3"));
      }
      if (S) {
        (c || R(T, A, 17), (b.textAlign = "center"));
        const oe = Math.max(r.fireCd, (r.carrierReadyAt - Date.now()) / 1e3, 0);
        if (
          ((this.reloadMax = oe > 0 ? Math.max(this.reloadMax, oe) : 0),
          this.reloadMax >= 0.8)
        ) {
          const J = 1 - oe / this.reloadMax,
            re = 30;
          (b.save(),
            (b.lineWidth = 3),
            (b.lineCap = "round"),
            (b.shadowBlur = 0),
            (b.strokeStyle = "#0b161480"),
            b.beginPath(),
            b.arc(T, A, re, 0, Math.PI * 2),
            b.stroke(),
            (b.strokeStyle = "#edc987"),
            b.beginPath(),
            b.arc(T, A, re, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * J),
            b.stroke(),
            b.restore());
        }
        (c &&
          C(
            `${D.toFixed(0).padStart(3, "0")}° · ${_ ? "THR" : "ТЯГА"} ${Math.round(r.throttle * 100)}%`,
            T,
            A + 35,
          ),
          (r.type === P.PLANE || r.type === P.SPACE_ROCKET) &&
            C(
              `${_ ? "THR" : "ТЯГА"} ${Math.round(r.throttle * 100)}%`,
              T,
              A - 47,
            ),
          r.type === P.FIGHTER_JET &&
            C(
              `AGL ${this.agl === void 0 ? "—" : Math.round(this.agl)} m · ${_ ? "ROCKET" : "РАКЕТА"} ${r.fireCd2 > 0 ? r.fireCd2.toFixed(1) + " s" : "●"}`,
              T,
              A + 52,
            ),
          (b.textAlign = "left"));
        return;
      }
      const H = T - Math.min(m * 0.3, 280),
        G = T + Math.min(m * 0.3, 280) - 110 * x,
        I =
          Math.abs(
            r.type === P.HELI || r.type === P.DRONE ? r.vel.length() : r.speed,
          ) * 3.6,
        O = this.range;
      (C(_ ? "SPD / km/h" : "СКОР / км/ч", H, A - 40),
        C(I.toFixed(0).padStart(3, "0"), H, A - 15, "#8ff1ca"));
      const F = Math.max(0, r.hp / r.maxHp);
      (C(
        `${_ ? "HULL" : "КОРПУС"} ${Math.ceil(F * 100)}%`,
        H,
        A + 18,
        F < 0.3 ? "#ff876c" : "#dcf1e4",
      ),
        (b.fillStyle = "#22453b"),
        b.fillRect(H, A + 28, 90, 3),
        (b.fillStyle = F < 0.3 ? "#ff876c" : "#8ff1ca"),
        b.fillRect(H, A + 28, 90 * F, 3),
        C(
          `${_ ? "RANGE" : "ДАЛЬН"} ${O === void 0 ? "—" : O.toFixed(1)} m`,
          T - 58,
          A + 65,
        ),
        c ||
          (R(T, A, 22),
          b.beginPath(),
          b.moveTo(T - 6, A),
          b.lineTo(T + 6, A),
          b.moveTo(T, A - 6),
          b.lineTo(T, A + 6),
          b.stroke()));
      const X = [
          P.FIGHTER_JET,
          P.PLANE,
          P.HELI,
          P.DRONE,
          P.SPACE_ROCKET,
        ].includes(r.type),
        Q = [P.BOAT, P.CARRIER, P.SUBMARINE].includes(r.type),
        ee = [];
      if (
        (X
          ? (ee.push(
              `${_ ? "ALT" : "ВЫС"} ${r.pos.y.toFixed(0)} m`,
              `${_ ? "V/S" : "ВЕРТ"} ${(r.type === P.FIGHTER_JET || r.type === P.PLANE ? r.vel.y : r.vel.y || r.vy).toFixed(1)} m/s`,
              `${_ ? "PITCH" : "ТАНГ"} ${((r.pitch * 180) / Math.PI).toFixed(0)}°`,
            ),
            (r.type === P.FIGHTER_JET ||
              r.type === P.PLANE ||
              r.type === P.SPACE_ROCKET) &&
              ee.push(`${_ ? "THR" : "ТЯГА"} ${Math.round(r.throttle * 100)}%`),
            r.type === P.FIGHTER_JET &&
              ee.push(
                `AGL ${this.agl === void 0 ? "—" : Math.round(this.agl)} m`,
                `${_ ? "ROCKET" : "РАКЕТА"} ${r.fireCd2 > 0 ? r.fireCd2.toFixed(1) + " s" : _ ? "READY" : "ГОТОВА"}`,
              ),
            r.type === P.SPACE_ROCKET &&
              ee.push(`${_ ? "TRANSFER" : "ПЕРЕХОД"} 1000 m`),
            r.type !== P.FIGHTER_JET &&
              (b.save(),
              b.translate(T, A - 90),
              b.rotate(-r.roll),
              b.beginPath(),
              b.moveTo(-55, 0),
              b.lineTo(-12, 0),
              b.moveTo(12, 0),
              b.lineTo(55, 0),
              b.stroke(),
              b.restore()))
          : Q
            ? (ee.push(`${_ ? "SPEED" : "ХОД"} ${(I / 1.852).toFixed(1)} kn`),
              r.type === P.SUBMARINE
                ? ee.push(
                    `${_ ? "DEPTH SET" : "ГЛУБ. ЗАД"} ${r.subDepth.toFixed(1)} m`,
                  )
                : ee.push(`${_ ? "HEADING" : "КУРС"} ${D.toFixed(0)}°`))
            : ee.push(
                `${_ ? "TURRET" : "БАШНЯ"} ${(((r.aux1 * 180) / Math.PI) % 360).toFixed(0)}°`,
                `${_ ? "GUN" : "СТВОЛ"} ${(((r.aux2 * 180) / Math.PI) % 360).toFixed(0)}°`,
              ),
        r.type === P.MORTAR &&
          ee.push(`R ${Hd} m`, _ ? "SINGLE ROCKET" : "ОДНА РАКЕТА"),
        r.type === P.HIMARS)
      ) {
        const oe = Math.max(
          0,
          (Math.max(r.himarsPendingUntil ?? 0, r.himarsServerReadyAt ?? 0) -
            Date.now()) /
            1e3,
        );
        ee.push(
          `R ${nr} m`,
          oe > 0
            ? `${_ ? "RELOAD" : "ПЕРЕЗАР"} ${oe.toFixed(1)} s`
            : _
              ? "SALVO READY"
              : "ЗАЛП ГОТОВ",
        );
      }
      (r.type === P.PATRIOT && ee.push(_ ? "RADAR / AUTO" : "РАДАР / АВТО"),
        (r.type === P.CARRIER || r.type === P.SUBMARINE) &&
          ee.push(`R ${r.type === P.CARRIER ? Af : Qh} m`));
      const se = Math.max(r.fireCd, (r.carrierReadyAt - Date.now()) / 1e3, 0);
      (ee.push(
        se > 0.15
          ? `${_ ? "RELOAD" : "ПЕРЕЗАР"} ${se.toFixed(1)} s`
          : _
            ? "WEAPON READY"
            : "ОРУЖИЕ ГОТОВО",
      ),
        ee.forEach((oe, J) => C(oe, G, A - 40 + J * 21)));
    }
    if (h) {
      ((b.textAlign = "center"),
        (b.strokeStyle = "#eddbac"),
        (b.lineWidth = 1.4));
      const D = y / (2 * Math.tan((e.fov * Math.PI) / 360));
      (b.beginPath(), b.arc(T, A, 3, 0, Math.PI * 2), b.stroke());
      for (const H of [20, 40, 60, 80]) {
        const G = 0.5 * Math.asin((18 * H) / 1764),
          I = A + Math.tan(G) * D;
        if (I > y - 110) continue;
        const O = H === 20 ? 12 : 9;
        (b.beginPath(),
          b.moveTo(T - O, I),
          b.lineTo(T + O, I),
          b.stroke(),
          (b.textAlign = "left"),
          C(String(H), T + O + 6, I + 4, "#eddbac"));
      }
      ((b.textAlign = "center"),
        C(
          _ ? "40 mm · range / m" : "40 мм · дистанция / м",
          T,
          A - 28,
          "#eddbac",
        ),
        (b.textAlign = "left"));
    }
    if (d && !l) {
      const D = i.lockTarget,
        H = i.targetLock.seconds / S0,
        G = H >= 1 && i.lockConfirmed,
        I = D == null ? void 0 : D.pos.clone().project(e),
        O = I ? T + I.x * T : T,
        F = I ? A - I.y * A : A;
      ((b.strokeStyle = G ? "#8ff1ca" : "#edc987"),
        R(O, F, 54 - 18 * H),
        b.beginPath(),
        b.arc(O, F, 46, -Math.PI / 2, -Math.PI / 2 + 2 * Math.PI * H),
        b.stroke(),
        (b.textAlign = "center"),
        C(
          G
            ? S
              ? _
                ? "TARGET LOCKED · FIRE TO LAUNCH"
                : "ЦЕЛЬ ЗАХВАЧЕНА · ОГОНЬ — ПУСК"
              : _
                ? "TARGET LOCKED · LMB TO FIRE"
                : "ЦЕЛЬ ЗАХВАЧЕНА · ЛКМ — ПУСК"
            : D
              ? _
                ? "ACQUIRING"
                : "ЗАХВАТ ЦЕЛИ"
              : _
                ? "AIM AT A TARGET"
                : "НАВЕДИТЕСЬ НА ЦЕЛЬ",
          T,
          A + 92,
          G ? "#8ff1ca" : "#edc987",
        ),
        C(
          D
            ? `${D.name} · ${(Math.ceil(Math.max(0, S0 - i.targetLock.seconds) * 10) / 10).toFixed(1)} s`
            : _
              ? "Hold aim for 2 seconds"
              : "Удерживайте прицел 2 секунды",
          T,
          A + 114,
        ),
        C(
          `${_ ? "GUIDED RPG" : "РПГ / САМОНАВЕДЕНИЕ"} · ${_ ? "Hold" : "Удержать"} ${S ? (_ ? "Reload" : "Перезарядка") : gs(z.binds.reload)} — ${_ ? "ammunition" : "боеприпасы"}`,
          T,
          y - 175,
        ),
        (b.textAlign = "left"));
    }
  }
}
