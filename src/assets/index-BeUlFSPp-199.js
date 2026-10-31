// index-BeUlFSPp 199 — math
// Lines 106259-107133 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class tae {
  canvas = document.createElement("canvas");
  ctx;
  direction = new k();
  projected = new k();
  lastDraw = 0;
  rangeAt = 0;
  range;
  agl;
  sightOrigin = new k();
  sightDirection = new k();
  sightRangeAt = 0;
  sightVehicle = -1;
  sightDistances = [600, 1200];
  sightHits = [!1, !1];
  reloadMax = 0;
  drawAir(e, t, i, n, o, a, r, l, c, h) {
    const d = i.lead;
    if (d) {
      const p = this.projected.copy(d.target).project(t);
      if (p.z > -1 && p.z < 1) {
        const m = n + p.x * n,
          g = o - p.y * o,
          y = this.projected.copy(d.pipper).project(t);
        if (y.z > -1 && y.z < 1) {
          const b = n + y.x * n,
            S = o - y.y * o,
            M = d.inRange ? (d.on ? "#ff5a4a" : "#ffe08a") : "#9fb4ad",
            E = l ? 9 : 12;
          (e.save(),
            (e.strokeStyle = M),
            (e.fillStyle = M),
            (e.lineWidth = d.on ? 2.4 : 1.6),
            e.setLineDash([4, 4]),
            e.beginPath(),
            e.moveTo(m, g),
            e.lineTo(b, S),
            e.stroke(),
            e.setLineDash([]),
            e.beginPath(),
            e.arc(b, S, E, 0, Math.PI * 2),
            e.stroke(),
            e.beginPath(),
            e.arc(b, S, 2, 0, Math.PI * 2),
            e.fill(),
            d.on &&
              d.inRange &&
              ((e.textAlign = "center"),
              h(I("FIRE", "ОГОНЬ"), b, S - E - 6, M)),
            e.restore());
        }
      }
    }
    const u = i.lock;
    if (
      u &&
      (this.projected.copy(u.pos).project(t),
      this.projected.z > -1 && this.projected.z < 1)
    ) {
      const p = n + this.projected.x * n,
        m = o - this.projected.y * o,
        g = u.locked ? "#ff5a4a" : "#ffd27a";
      (e.save(),
        (e.strokeStyle = g),
        (e.lineWidth = 2),
        u.locked
          ? (e.beginPath(),
            e.moveTo(p, m - 22),
            e.lineTo(p + 22, m),
            e.lineTo(p, m + 22),
            e.lineTo(p - 22, m),
            e.closePath(),
            e.stroke())
          : (c(p, m, 44 - 24 * u.progress),
            e.beginPath(),
            e.arc(
              p,
              m,
              30,
              -Math.PI / 2,
              -Math.PI / 2 + Math.PI * 2 * u.progress,
            ),
            e.stroke()),
        e.restore(),
        (e.textAlign = "center"),
        h(
          u.locked ? I("LOCK · RMB", "ЗАХВАТ · ПКМ") : I("SEEKING", "ЗАХВАТ…"),
          p,
          m + (l ? 40 : 48),
          g,
        ),
        (e.textAlign = "left"));
    }
    e.textAlign = "center";
    const f = l
      ? ""
      : ` · ${I("missile: lock + RMB", "ракета: захват + ПКМ")} · ${I("flares", "ловушки")} ${dr(Y.binds.driver)}`;
    if (
      (h(
        `MSL ${i.missiles} · FLR ${i.flares}${f}`,
        n,
        r - (l ? 150 : 130),
        i.missiles ? "#8ff1ca" : "#ff876c",
      ),
      i.warn)
    ) {
      const p = Math.floor(performance.now() / 160) % 2 === 0;
      (e.save(),
        (e.font = `700 ${l ? 18 : 26}px ui-monospace,monospace`),
        p && h(I("MISSILE", "РАКЕТА"), n, o - (l ? 128 : 212), "#ff3b30"),
        (e.font = `600 ${l ? 11 : 14}px ui-monospace,monospace`),
        h(
          `${Math.round(i.warn.dist)} m · ${I("FLARES", "ЛОВУШКИ")} ${dr(Y.binds.driver)}`,
          n,
          o - (l ? 110 : 188),
          "#ff6a5a",
        ));
      const m = i.warn.bearing,
        g = l ? 70 : 110;
      (e.translate(n + Math.sin(m) * g, o - Math.cos(m) * g),
        e.rotate(m),
        (e.fillStyle = "#ff3b30"),
        e.beginPath(),
        e.moveTo(0, -14),
        e.lineTo(10, 8),
        e.lineTo(-10, 8),
        e.closePath(),
        e.fill(),
        e.restore());
    }
    e.textAlign = "left";
  }
  constructor() {
    ((this.canvas.id = "tactical-hud"),
      this.canvas.setAttribute(
        "aria-label",
        I("Vehicle instruments and targeting", "Приборы техники и захват цели"),
      ),
      document.body.append(this.canvas),
      (this.ctx = this.canvas.getContext("2d")));
  }
  update(e, t, i, n, o, a = [], r) {
    const l = t.mine,
      c = !!l && t.mineSeat === 0 && Y.vehicleInstruments,
      h = !!l && t.mineSeat === 0 && l.type === L.FIGHTER_JET,
      d = i.held === w.GRENADE_LAUNCHER && !l,
      u = i.held === w.RPG && i.loadedAmmo() === w.ROCKET_GUIDED,
      f = l && !t.remoteView ? t.seatSight() : null,
      p = !!r && !!l && t.mineSeat === 0 && l.type === L.TANK,
      m = o && !Y.cinematicHud && (c || h || u || d || !!f || p);
    if (
      ((this.canvas.hidden = !m),
      document.body.classList.toggle(
        "instruments-active",
        m && (c || h || !!f),
      ),
      !m)
    )
      return;
    const g = performance.now();
    if (g - this.lastDraw < 33) return;
    this.lastDraw = g;
    const y = innerWidth,
      b = innerHeight,
      S = Math.min(devicePixelRatio || 1, 1.5);
    (this.canvas.width !== Math.round(y * S) ||
      this.canvas.height !== Math.round(b * S)) &&
      ((this.canvas.width = Math.round(y * S)),
      (this.canvas.height = Math.round(b * S)));
    const M = this.ctx;
    (M.setTransform(S, 0, 0, S, 0, 0), M.clearRect(0, 0, y, b));
    const E =
        document.body.classList.contains("mobile") ||
        document.body.classList.contains("embed"),
      A = E || y < 700,
      T = A ? 0.8 : 1,
      x = y / 2,
      R = b / 2;
    ((M.font = `600 ${A ? 11 : 14}px ui-monospace,monospace`),
      (M.lineWidth = 1.2),
      (M.strokeStyle = "#bce4d3"),
      (M.fillStyle = "#dcf1e4"),
      (M.shadowColor = "#071713"),
      (M.shadowBlur = 2),
      wi());
    const _ = (P, O, B, H = "#dcf1e4") => {
        ((M.fillStyle = H), M.fillText(P, O, B));
      },
      C = (P, O, B) => {
        for (const [H, D] of [
          [-1, -1],
          [1, -1],
          [-1, 1],
          [1, 1],
        ])
          (M.beginPath(),
            M.moveTo(P + H * B, O + D * (B - 12)),
            M.lineTo(P + H * B, O + D * B),
            M.lineTo(P + H * (B - 12), O + D * B),
            M.stroke());
      };
    if (p && l) {
      const P = [...t.vehicles.values()]
          .filter(
            (B) =>
              B !== l &&
              B.hp > 0 &&
              B.planet === l.planet &&
              B.hpBar.userData.side === "enemy",
          )
          .map((B) => ({
            o: B,
            d: B.pos.distanceTo(l.pos),
            air:
              B.type === L.FIGHTER_JET ||
              B.type === L.PLANE ||
              B.type === L.HELI,
          }))
          .filter((B) => B.d < (B.air ? 4e3 : 6e3))
          .sort((B, H) => B.d - H.d),
        O = [];
      (P.forEach((B, H) => {
        if (
          (this.projected.copy(B.o.pos).project(e),
          this.projected.z < -1 ||
            this.projected.z > 1 ||
            Math.abs(this.projected.x) > 0.95 ||
            Math.abs(this.projected.y) > 0.9)
        )
          return;
        const D = x + this.projected.x * x,
          U = R - this.projected.y * R;
        ((M.strokeStyle = B.air ? "#ff9a6b" : "#ff6b5b"),
          B.air
            ? (M.beginPath(),
              M.moveTo(D, U - 7),
              M.lineTo(D + 7, U),
              M.lineTo(D, U + 7),
              M.lineTo(D - 7, U),
              M.closePath(),
              M.stroke())
            : C(D, U, A ? 9 : 12),
          H < 4 &&
            !O.some(
              ([W, J]) => Math.abs(W - D) < 110 && Math.abs(J - U) < 24,
            ) &&
            (O.push([D, U]),
            (M.textAlign = "center"),
            _(
              `${B.air ? I("JET", "САМОЛЁТ") : I("TANK", "ТАНК")} ${B.d >= 1e3 ? (B.d / 1e3).toFixed(1) + " km" : Math.round(B.d) + " m"}`,
              D,
              U - 14,
              B.air ? "#ff9a6b" : "#ff6b5b",
            ),
            (M.textAlign = "left")));
      }),
        r?.warn &&
          ((M.textAlign = "center"),
          _(I("MISSILE", "РАКЕТА"), x, R - 120, "#ff3b30"),
          (M.textAlign = "left")));
    }
    if (h && l) {
      const P = l.id !== this.sightVehicle || g - this.sightRangeAt >= 100;
      P && ((this.sightRangeAt = g), (this.sightVehicle = l.id));
      for (let O = 0; O < 2; O++) {
        const B = O === 1,
          H = this.sightOrigin,
          D = this.sightDirection;
        (B ? a7(l, -(l.rocketSide ?? 1), H, D) : dT(l, -l.mgSide, H, D),
          D.normalize());
        const U = B ? hZ : Iv(l.type);
        if (P) {
          const be = n.raycast(H, D, U),
            oe = t.rayHit(H, D, be?.dist ?? U);
          ((this.sightDistances[O] = oe?.dist ?? be?.dist ?? U),
            (this.sightHits[O] = !!(oe || be)));
        }
        const W = !B && r?.lead ? r.lead.dist : this.sightDistances[O];
        if (
          (this.projected.copy(H).addScaledVector(D, W).project(e),
          this.projected.z < -1 ||
            this.projected.z > 1 ||
            Math.abs(this.projected.x) > 0.96 ||
            Math.abs(this.projected.y) > 0.9)
        )
          continue;
        const J = x + this.projected.x * x,
          j = R - this.projected.y * R,
          ne = B ? "#ffd58c" : "#8ff1ca",
          ge = A ? 7 : 9;
        ((M.strokeStyle = ne),
          M.beginPath(),
          B
            ? (M.moveTo(J, j - ge),
              M.lineTo(J + ge, j),
              M.lineTo(J, j + ge),
              M.lineTo(J - ge, j),
              M.closePath())
            : (M.arc(J, j, ge, 0, Math.PI * 2),
              M.moveTo(J - 3, j),
              M.lineTo(J + 3, j),
              M.moveTo(J, j - 3),
              M.lineTo(J, j + 3)),
          M.stroke(),
          (M.textAlign = A ? "right" : "center"),
          r ||
            _(
              `${B ? I("ROCKET", "РАКЕТА") : I("GUN", "ПУЛЕМЁТ")} · ${this.sightHits[O] ? "" : "≤"}${Math.round(W)} m`,
              A ? J - ge - 7 : J,
              j + (A ? (B ? 14 : -4) : B ? ge + 15 : -ge - 7),
              ne,
            ));
      }
      ((M.textAlign = "left"), (M.strokeStyle = "#bce4d3"));
    }
    if (f && l) {
      g - this.rangeAt > 100 &&
        ((this.rangeAt = g),
        (this.range = n.raycast(
          e.position,
          e.getWorldDirection(this.direction),
          1e3,
        )?.dist));
      const P = "#ff876c",
        O = "#edc987",
        H = f.arc ? (f.hot ? O : "#bce4d3") : P,
        D = E ? 0.85 : 1;
      (M.save(),
        (M.strokeStyle = H),
        (M.fillStyle = H),
        (M.lineWidth = 1.4),
        M.beginPath(),
        M.arc(x, R, 1.6, 0, Math.PI * 2),
        M.fill(),
        M.beginPath());
      for (const [ne, ge] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ])
        (M.moveTo(x + ne * 7 * D, R + ge * 7 * D),
          M.lineTo(x + ne * 20 * D, R + ge * 20 * D));
      for (const ne of [1, 2, 3]) {
        const ge = ne * 26 * D,
          be = ne === 2 ? 6 : 4;
        (M.moveTo(x + ge, R - be),
          M.lineTo(x + ge, R + be),
          M.moveTo(x - ge, R - be),
          M.lineTo(x - ge, R + be));
      }
      for (const ne of [1, 2]) {
        const ge = 20 * D + ne * 18 * D,
          be = 7 - ne * 2;
        (M.moveTo(x - be, R + ge), M.lineTo(x + be, R + ge));
      }
      (M.stroke(), E && C(x, R, 17));
      const U = Math.max(0, Math.min(1, f.heat)),
        W = E ? 30 : 44,
        J = Math.PI * 0.2,
        j = Math.PI * 0.8;
      if (
        ((!E || U > 0.18 || f.hot) &&
          ((M.lineWidth = 3),
          (M.lineCap = "round"),
          (M.shadowBlur = 0),
          (M.strokeStyle = "#0b161480"),
          M.beginPath(),
          M.arc(x, R, W, J, j),
          M.stroke(),
          (M.strokeStyle = f.hot || U > 0.85 ? P : U > 0.55 ? O : "#8ff1ca"),
          U > 0.01 &&
            (M.beginPath(), M.arc(x, R, W, j - (j - J) * U, j), M.stroke())),
        M.restore(),
        (M.textAlign = "center"),
        f.arc
          ? f.hot &&
            _(
              `${I("OVERHEAT", "ПЕРЕГРЕВ")} ${f.cooling.toFixed(1)} ${I("s", "с")}`,
              x,
              R - 34 * D,
              O,
            )
          : _(I("GUN CANNOT BEAR", "ВНЕ СЕКТОРА ПУЛЕМЁТА"), x, R - 34 * D, P),
        (M.textAlign = "left"),
        !E && Y.vehicleInstruments)
      ) {
        const ne = x - Math.min(y * 0.3, 280),
          ge = x + Math.min(y * 0.3, 280) - 110 * T,
          be = f4(l.type, l.vel.length()) * 3.6,
          oe = Math.max(0, l.hp / l.maxHp);
        (_(I("SPD / km/h", "СКОР / км/ч"), ne, R - 40),
          _(be.toFixed(0).padStart(3, "0"), ne, R - 15, "#8ff1ca"),
          _(
            `${I("HULL", "КОРПУС")} ${Math.ceil(oe * 100)}%`,
            ne,
            R + 18,
            oe < 0.3 ? P : "#dcf1e4",
          ),
          (M.fillStyle = "#22453b"),
          M.fillRect(ne, R + 28, 90, 3),
          (M.fillStyle = oe < 0.3 ? P : "#8ff1ca"),
          M.fillRect(ne, R + 28, 90 * oe, 3),
          _(
            `${I("RANGE", "ДАЛЬН")} ${this.range === void 0 ? "—" : this.range.toFixed(1)} m`,
            x - 58,
            R + 74,
          ),
          [
            [
              f.gun.heavy
                ? I("HMG 12.7", "ПУЛЕМЁТ 12,7")
                : l.type === L.HELI
                  ? I("DOOR GUN 7.62", "БОРТОВОЙ 7,62")
                  : I("MG 7.62", "ПУЛЕМЁТ 7,62"),
              "#8ff1ca",
            ],
            [
              `${I("ZOOM", "ЗУМ")} ×${f.zoom >= 1.95 ? Math.round(f.zoom * 2) / 2 : 1}`,
            ],
            [
              `${I("BARREL", "СТВОЛ")} ${Math.round(U * 100)}%`,
              f.hot || U > 0.85 ? P : U > 0.55 ? O : void 0,
            ],
            [
              `${I("BEARING", "ПЕЛЕНГ")} ${f.bearing.toFixed(0).padStart(3, "0")}°`,
            ],
            [
              f.arc
                ? f.hot
                  ? I("COOLING", "ОСТЫВАЕТ")
                  : f.laid
                    ? I("WEAPON READY", "ОРУЖИЕ ГОТОВО")
                    : I("LAYING", "НАВОДКА")
                : I("NO ARC", "ВНЕ СЕКТОРА"),
              f.arc ? (f.hot ? O : f.laid ? void 0 : O) : P,
            ],
          ].forEach(([ve, it], st) => _(ve, ge, R - 40 + st * 21, it)));
      }
    }
    if (c && l) {
      const P =
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
        (g - this.rangeAt > 100 &&
          ((this.rangeAt = g),
          (this.range = n.raycast(e.position, this.direction, 1e3)?.dist),
          (this.agl = n.isLoaded(l.pos.x, l.pos.z)
            ? Math.max(0, l.pos.y - n.groundAt(l.pos.x, l.pos.z, l.pos.y))
            : void 0)),
        l.type === L.FIGHTER_JET)
      ) {
        ((M.textAlign = "center"),
          _(
            `${A ? I("BNK", "КР") : I("BANK", "КРЕН")} ${((l.roll * 180) / Math.PI).toFixed(0)}° · ${A ? I("PIT", "ТГ") : I("PITCH", "ТАНГАЖ")} ${((l.pitch * 180) / Math.PI).toFixed(0)}°`,
            x,
            R - (A ? 92 : 140),
          ),
          (M.textAlign = "left"),
          M.save(),
          M.translate(x, R - (A ? 72 : 112)),
          M.beginPath(),
          M.rect(-65, -18, 130, 36),
          M.clip(),
          M.rotate(-l.roll));
        const ge = Math.max(-28, Math.min(28, l.pitch * 45));
        (M.beginPath(),
          M.moveTo(-65, ge),
          M.lineTo(-12, ge),
          M.moveTo(12, ge),
          M.lineTo(65, ge),
          M.stroke(),
          M.restore());
        let be = 0;
        const oe = [],
          he = (ve, it, st) => {
            const ot = ve.distanceTo(l.pos);
            if (
              ot > D1() ||
              ot < 3 ||
              (be++,
              this.projected.copy(ve).project(e),
              this.projected.z < -1 ||
                this.projected.z > 1 ||
                Math.abs(this.projected.x) > 0.93 ||
                Math.abs(this.projected.y) > 0.8)
            )
              return;
            const at = x + this.projected.x * x,
              Re = R - this.projected.y * R;
            if (A && (Re < 125 || Re > b - 110)) return;
            if (
              ((M.strokeStyle = st),
              it !== null &&
                r &&
                (oe.some(
                  ([ze, tt]) =>
                    Math.abs(ze - at) < 120 && Math.abs(tt - Re) < 26,
                ) ||
                  r.lock?.pos === ve ||
                  (r.lead && r.lead.target.distanceToSquared(ve) < 9)) &&
                (it = null),
              it === null)
            ) {
              (M.beginPath(),
                M.moveTo(at, Re - 5),
                M.lineTo(at + 5, Re),
                M.lineTo(at, Re + 5),
                M.lineTo(at - 5, Re),
                M.closePath(),
                M.stroke());
              return;
            }
            (oe.push([at, Re]), C(at, Re, A ? 9 : 13));
            let V = Re - 18;
            (Math.abs(V - (R - (A ? 92 : 140))) < 22 ||
              Math.abs(V - (R + 65)) < 20) &&
              (V = Re + 28);
            const ye =
                !A &&
                at > x + 100 &&
                at < x + 300 &&
                Re > R - 70 &&
                Re < R + 120,
              Ce =
                ot >= 1e3
                  ? `${(ot / 1e3).toFixed(1)} km`
                  : `${Math.round(ot)} m`;
            ((M.textAlign = ye ? "right" : "center"),
              _(`${A ? "" : it + " "}${Ce}`, ye ? at - 20 : at, V, st),
              (M.textAlign = "left"));
          },
          Ie = r
            ? [...t.vehicles.values()]
                .filter((ve) => ve !== l && ve.planet === l.planet && ve.hp > 0)
                .sort(
                  (ve, it) =>
                    ve.pos.distanceToSquared(l.pos) -
                    it.pos.distanceToSquared(l.pos),
                )
                .slice(0, 4)
            : null;
        if (r)
          for (const ve of t.vehicles.values()) {
            if (
              ve.type !== L.TANK ||
              ve.hp <= 0 ||
              ve.hpBar.userData.side !== "enemy"
            )
              continue;
            const it = ve.pos.distanceTo(l.pos);
            if (
              (be++,
              this.projected.copy(ve.pos).project(e),
              this.projected.z < -1 ||
                this.projected.z > 1 ||
                Math.abs(this.projected.x) > 0.95 ||
                Math.abs(this.projected.y) > 0.9)
            )
              continue;
            const st = x + this.projected.x * x,
              ot = R - this.projected.y * R;
            ((M.strokeStyle = "#ff6b5b"),
              M.strokeRect(st - 5, ot - 5, 10, 10),
              !A &&
                !oe.some(
                  ([at, Re]) =>
                    Math.abs(at - st) < 110 && Math.abs(Re - ot) < 24,
                ) &&
                (oe.push([st, ot]),
                (M.textAlign = "center"),
                _(
                  `${I("TANK", "ТАНК")} ${it >= 1e3 ? (it / 1e3).toFixed(1) + " km" : Math.round(it) + " m"}`,
                  st,
                  ot - 10,
                  "#ff6b5b",
                ),
                (M.textAlign = "left")));
          }
        for (const ve of t.vehicles.values())
          if (
            ve !== l &&
            ve.planet === l.planet &&
            ve.hp > 0 &&
            !(r && ve.type === L.TANK && ve.hpBar.userData.side === "enemy")
          ) {
            const it = r ? ve.hpBar.userData.side : void 0,
              st = r
                ? Ie.includes(ve)
                  ? it === "enemy"
                    ? I("ENEMY", "ВРАГ")
                    : it === "ally"
                      ? I("ALLY", "СВОЙ")
                      : to(ve.type)
                  : null
                : to(ve.type);
            he(
              ve.pos,
              st,
              it === "enemy"
                ? "#ff7a6b"
                : it === "ally"
                  ? "#7fc2ff"
                  : "#82dcff",
            );
          }
        for (const ve of a)
          he(
            ve.getWorldPosition(this.projected),
            I("PERSON", "ЧЕЛОВЕК"),
            "#ffc887",
          );
        ((M.textAlign = "center"),
          _(
            `${I("SENSORS", "ОБЗОР")} ${D1()} m · ${be} · NV ${A ? "●" : dr(Y.binds.vision)}`,
            x,
            A ? R + 90 : 100,
            "#8ff1ca",
          ),
          r && this.drawAir(M, e, r, x, R, y, b, A, C, _),
          !l.grounded &&
            l.vel.length() < u4[l.type].stall * hs.speed * 1.15 &&
            _(
              I("STALL · ADD THROTTLE", "СВАЛИВАНИЕ · ДОБАВЬТЕ ТЯГУ"),
              x,
              R - 72,
              "#ff876c",
            ),
          !l.grounded &&
            this.agl !== void 0 &&
            this.agl < 15 &&
            l.vel.y < -2 &&
            _(I("PULL UP", "НАБИРАЙТЕ ВЫСОТУ"), x, R - 90, "#ff876c"),
          (M.textAlign = "left"),
          (M.strokeStyle = "#bce4d3"));
      }
      if (E) {
        (h || C(x, R, 17), (M.textAlign = "center"));
        const ge = Math.max(l.fireCd, (l.carrierReadyAt - Date.now()) / 1e3, 0);
        if (
          ((this.reloadMax = ge > 0 ? Math.max(this.reloadMax, ge) : 0),
          this.reloadMax >= 0.8)
        ) {
          const be = 1 - ge / this.reloadMax,
            oe = 30;
          (M.save(),
            (M.lineWidth = 3),
            (M.lineCap = "round"),
            (M.shadowBlur = 0),
            (M.strokeStyle = "#0b161480"),
            M.beginPath(),
            M.arc(x, R, oe, 0, Math.PI * 2),
            M.stroke(),
            (M.strokeStyle = "#edc987"),
            M.beginPath(),
            M.arc(x, R, oe, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * be),
            M.stroke(),
            M.restore());
        }
        (h &&
          _(
            `${P.toFixed(0).padStart(3, "0")}° · ${I("THR", "ТЯГА")} ${Math.round(l.throttle * 100)}%`,
            x,
            R + 35,
          ),
          (l.type === L.PLANE || l.type === L.SPACE_ROCKET) &&
            _(
              `${I("THR", "ТЯГА")} ${Math.round(l.throttle * 100)}%`,
              x,
              R - 47,
            ),
          l.type === L.FIGHTER_JET &&
            _(
              `AGL ${this.agl === void 0 ? "—" : Math.round(this.agl)} m · ${I("ROCKET", "РАКЕТА")} ${l.fireCd2 > 0 ? l.fireCd2.toFixed(1) + " s" : "●"}`,
              x,
              R + 52,
            ),
          (M.textAlign = "left"));
        return;
      }
      const O = x - Math.min(y * 0.3, 280),
        B = x + Math.min(y * 0.3, 280) - 110 * T,
        H =
          f4(
            l.type,
            Math.abs(
              l.type === L.HELI || l.type === L.DRONE
                ? l.vel.length()
                : l.speed,
            ),
          ) * 3.6,
        D = this.range;
      (_(I("SPD / km/h", "СКОР / км/ч"), O, R - 40),
        _(H.toFixed(0).padStart(3, "0"), O, R - 15, "#8ff1ca"));
      const U = Math.max(0, l.hp / l.maxHp);
      (_(
        `${I("HULL", "КОРПУС")} ${Math.ceil(U * 100)}%`,
        O,
        R + 18,
        U < 0.3 ? "#ff876c" : "#dcf1e4",
      ),
        (M.fillStyle = "#22453b"),
        M.fillRect(O, R + 28, 90, 3),
        (M.fillStyle = U < 0.3 ? "#ff876c" : "#8ff1ca"),
        M.fillRect(O, R + 28, 90 * U, 3),
        h ||
          _(
            `${I("RANGE", "ДАЛЬН")} ${D === void 0 ? "—" : D.toFixed(1)} m`,
            x - 58,
            R + 65,
          ),
        h ||
          (C(x, R, 22),
          M.beginPath(),
          M.moveTo(x - 6, R),
          M.lineTo(x + 6, R),
          M.moveTo(x, R - 6),
          M.lineTo(x, R + 6),
          M.stroke()));
      const W = [
          L.FIGHTER_JET,
          L.PLANE,
          L.HELI,
          L.DRONE,
          L.SPACE_ROCKET,
        ].includes(l.type),
        J = [L.BOAT, L.CARRIER, L.SUBMARINE].includes(l.type),
        j = [];
      if (
        (W
          ? (j.push(
              `${I("ALT", "ВЫС")} ${l.pos.y.toFixed(0)} m`,
              `${I("V/S", "ВЕРТ")} ${(l.type === L.FIGHTER_JET || l.type === L.PLANE ? l.vel.y : l.vel.y || l.vy).toFixed(1)} m/s`,
              `${I("PITCH", "ТАНГ")} ${((l.pitch * 180) / Math.PI).toFixed(0)}°`,
            ),
            (l.type === L.FIGHTER_JET ||
              l.type === L.PLANE ||
              l.type === L.SPACE_ROCKET) &&
              j.push(`${I("THR", "ТЯГА")} ${Math.round(l.throttle * 100)}%`),
            l.type === L.FIGHTER_JET &&
              j.push(
                `AGL ${this.agl === void 0 ? "—" : Math.round(this.agl)} m`,
                `${I("ROCKET", "РАКЕТА")} ${l.fireCd2 > 0 ? l.fireCd2.toFixed(1) + " s" : I("READY", "ГОТОВА")}`,
              ),
            l.type === L.SPACE_ROCKET &&
              j.push(`${I("TRANSFER", "ПЕРЕХОД")} 1000 m`),
            l.type !== L.FIGHTER_JET &&
              (M.save(),
              M.translate(x, R - 90),
              M.rotate(-l.roll),
              M.beginPath(),
              M.moveTo(-55, 0),
              M.lineTo(-12, 0),
              M.moveTo(12, 0),
              M.lineTo(55, 0),
              M.stroke(),
              M.restore()))
          : J
            ? (j.push(`${I("SPEED", "ХОД")} ${(H / 1.852).toFixed(1)} kn`),
              l.type === L.SUBMARINE
                ? j.push(
                    `${I("DEPTH SET", "ГЛУБ. ЗАД")} ${l.subDepth.toFixed(1)} m`,
                  )
                : j.push(`${I("HEADING", "КУРС")} ${P.toFixed(0)}°`))
            : j.push(
                `${I("TURRET", "БАШНЯ")} ${(((l.aux1 * 180) / Math.PI) % 360).toFixed(0)}°`,
                `${I("GUN", "СТВОЛ")} ${(((l.aux2 * 180) / Math.PI) % 360).toFixed(0)}°`,
              ),
        l.type === L.MORTAR &&
          j.push(`R ${ef} m`, I("SINGLE ROCKET", "ОДНА РАКЕТА")),
        l.type === L.HIMARS)
      ) {
        const ge = Math.max(
          0,
          (Math.max(l.himarsPendingUntil ?? 0, l.himarsServerReadyAt ?? 0) -
            Date.now()) /
            1e3,
        );
        j.push(
          `R ${Vr} m`,
          ge > 0
            ? `${I("RELOAD", "ПЕРЕЗАР")} ${ge.toFixed(1)} s`
            : I("SALVO READY", "ЗАЛП ГОТОВ"),
        );
      }
      (l.type === L.PATRIOT && j.push(I("RADAR / AUTO", "РАДАР / АВТО")),
        (l.type === L.CARRIER || l.type === L.SUBMARINE) &&
          j.push(`R ${l.type === L.CARRIER ? a1 : Yh} m`));
      const ne = Math.max(l.fireCd, (l.carrierReadyAt - Date.now()) / 1e3, 0);
      (j.push(
        ne > 0.15
          ? `${I("RELOAD", "ПЕРЕЗАР")} ${ne.toFixed(1)} s`
          : I("WEAPON READY", "ОРУЖИЕ ГОТОВО"),
      ),
        j.forEach((ge, be) => _(ge, B, R - 40 + be * 21)));
    }
    if (d) {
      ((M.textAlign = "center"),
        (M.strokeStyle = "#eddbac"),
        (M.lineWidth = 1.4));
      const P = b / (2 * Math.tan((e.fov * Math.PI) / 360));
      (M.beginPath(), M.arc(x, R, 3, 0, Math.PI * 2), M.stroke());
      for (const O of [20, 40, 60, 80]) {
        const B = 0.5 * Math.asin((18 * O) / 1764),
          H = R + Math.tan(B) * P;
        if (H > b - 110) continue;
        const D = O === 20 ? 12 : 9;
        (M.beginPath(),
          M.moveTo(x - D, H),
          M.lineTo(x + D, H),
          M.stroke(),
          (M.textAlign = "left"),
          _(String(O), x + D + 6, H + 4, "#eddbac"));
      }
      ((M.textAlign = "center"),
        _(
          I("40 mm · range / m", "40 мм · дистанция / м"),
          x,
          R - 28,
          "#eddbac",
        ),
        (M.textAlign = "left"));
    }
    if (u && !c) {
      const P = i.lockTarget,
        O = i.targetLock.seconds / Ad,
        B = O >= 1 && i.lockConfirmed,
        H = P?.pos.clone().project(e),
        D = H ? x + H.x * x : x,
        U = H ? R - H.y * R : R;
      ((M.strokeStyle = B ? "#8ff1ca" : "#edc987"),
        C(D, U, 54 - 18 * O),
        M.beginPath(),
        M.arc(D, U, 46, -Math.PI / 2, -Math.PI / 2 + 2 * Math.PI * O),
        M.stroke(),
        (M.textAlign = "center"),
        _(
          B
            ? E
              ? I(
                  "TARGET LOCKED · FIRE TO LAUNCH",
                  "ЦЕЛЬ ЗАХВАЧЕНА · ОГОНЬ — ПУСК",
                )
              : I("TARGET LOCKED · LMB TO FIRE", "ЦЕЛЬ ЗАХВАЧЕНА · ЛКМ — ПУСК")
            : P
              ? I("ACQUIRING", "ЗАХВАТ ЦЕЛИ")
              : I("AIM AT A TARGET", "НАВЕДИТЕСЬ НА ЦЕЛЬ"),
          x,
          R + 92,
          B ? "#8ff1ca" : "#edc987",
        ),
        _(
          P
            ? `${P.name} · ${(Math.ceil(Math.max(0, Ad - i.targetLock.seconds) * 10) / 10).toFixed(1)} s`
            : I("Hold aim for 2 seconds", "Удерживайте прицел 2 секунды"),
          x,
          R + 114,
        ),
        _(
          `${I("GUIDED RPG", "РПГ / САМОНАВЕДЕНИЕ")} · ${I("Hold", "Удержать")} ${E ? I("Reload", "Перезарядка") : dr(Y.binds.reload)} — ${I("ammunition", "боеприпасы")}`,
          x,
          b - 175,
        ),
        (M.textAlign = "left"));
    }
  }
}
