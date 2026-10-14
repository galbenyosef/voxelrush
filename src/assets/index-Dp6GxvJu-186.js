// index-Dp6GxvJu 186 — queryselector
// Lines 103760-104465 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class Ree {
  constructor(e, t, i, s, o, a = () => null, r = () => {}) {
    w(this, "open", !1);
    w(this, "viewing", -1);
    w(this, "manual", !1);
    w(this, "selected", -1);
    w(this, "selection", new Set());
    w(this, "snapshot", { open: !1 });
    w(this, "lastPacket", 0);
    w(this, "scale", 500);
    w(this, "center", { x: 0, z: 0 });
    w(this, "mapAction", !1);
    w(this, "root", document.createElement("section"));
    w(this, "canvas");
    w(this, "drag", null);
    w(this, "viewKey", "");
    w(this, "escortOptionsKey", "");
    w(this, "fleetFilter", "squad");
    w(this, "pendingFleet", []);
    ((this.send = e),
      (this.view = t),
      (this.unlock = i),
      (this.lock = s),
      (this.sample = o),
      (this.border = a),
      (this.overlay = r),
      (this.root.id = "remote-console"),
      (this.root.hidden = !0),
      (this.root.innerHTML = this.template()),
      document.body.append(this.root),
      (this.canvas = this.root.querySelector("canvas")),
      this.root.addEventListener("click", (l) => {
        const c = l.target.closest("[data-action]");
        c && this.action(c.dataset.action);
      }),
      this.bindCanvas(),
      window.addEventListener("resize", () => this.draw()),
      window.addEventListener(
        "keydown",
        (l) => {
          this.open &&
            l.code === "Escape" &&
            (l.preventDefault(),
            l.stopImmediatePropagation(),
            this.action(this.viewing >= 0 ? "back" : "close"));
        },
        !0,
      ),
      Vo(() => {
        ((this.root.innerHTML = this.template()),
          (this.canvas = this.root.querySelector("canvas")),
          this.bindCanvas(),
          (this.escortOptionsKey = ""),
          this.open && this.render());
      }));
  }
  template() {
    return `<header><div><small>${Et("VOXEL RUSH / ТАКТИЧЕСКАЯ СЕТЬ", "VOXEL RUSH / TACTICAL NETWORK")}</small><h1>${Et("ОПЕРАТОР", "OPERATOR")} <span>01</span></h1></div><div class="rc-link">● ${Et("ЗАЩИЩЁННЫЙ КАНАЛ", "SECURE CHANNEL")}<br><small>${Et("РАДИУС 20 000 БЛОКОВ", "RANGE 20,000 BLOCKS")}</small></div><button data-action="close" aria-label="${Et("Закрыть станцию", "Close station")}">✕</button></header>
      <div class="rc-work"><aside><div class="rc-section">${Et("ВАШ ОТРЯД", "YOUR SQUAD")} <span id="rc-count">00</span></div><div class="rc-filters" role="group" aria-label="${Et("Фильтр техники и военных", "Vehicle and soldier filter")}"><button data-action="filter-mine" aria-pressed="${this.fleetFilter === "mine"}">${Et("Только моя", "Only mine")}</button><button data-action="filter-squad" aria-pressed="${this.fleetFilter === "squad"}">${Et("Техника сквада", "Squad fleet")}</button></div><div id="rc-fleet"></div><details id="rc-devices-panel" open><summary>${Et("РАДИОУСТРОЙСТВА", "RADIO DEVICES")} <span id="rc-device-count">0</span></summary><div id="rc-devices"></div><p class="rc-tip">${Et("Используйте радиомодуль: поставить реле на блок или подключить табличку ворот / моста.", "Use a radio module to place a relay on a block or link a gate / bridge sign.")}</p></details><p class="rc-tip">${Et("Солдаты сквада доступны сразу. На технику установите радиомодуль. Несколько карточек — групповой приказ.", "Squad soldiers are available right away. Fit a radio module to a vehicle. Select several cards for a group order.")}</p></aside>
      <main><div class="rc-map-head"><span>${Et("ОПЕРАТИВНАЯ КАРТА", "OPERATIONS MAP")}</span><div><button data-action="center" title="${Et("Центрировать на технике", "Centre on vehicle")}">◎</button><button data-action="out" aria-label="${Et("Отдалить карту", "Zoom out")}">−</button><button data-action="in" aria-label="${Et("Приблизить карту", "Zoom in")}">+</button><button data-action="range">20К</button></div></div><div class="rc-map"><canvas aria-label="${Et("Карта техники и целей", "Map of vehicles and targets")}"></canvas><div class="rc-map-legend">${Et("СИНИЙ — СВОИ　КРАСНЫЙ — ВРАГ　БОРДОВЫЙ — РЕЙД　⊕ СТАНЦИЯ", "BLUE — FRIENDLY　RED — ENEMY　MAROON — RAID　⊕ STATION")}</div><div id="rc-map-hint">${Et("Выберите технику · перетаскивайте карту для обзора", "Select a vehicle · drag the map to look around")}</div></div><div id="rc-detail"></div><div class="rc-actions"><button data-action="all">${Et("ВЫДЕЛИТЬ ВСЕ", "SELECT ALL")}</button><button data-action="clear">${Et("СНЯТЬ ВЫДЕЛЕНИЕ", "CLEAR SELECTION")}</button><button data-action="manual">${Et("РУЧНОЕ УПРАВЛЕНИЕ", "MANUAL CONTROL")}</button><button data-action="camera">${Et("КАМЕРА", "CAMERA")}</button><button data-action="navigate">${Et("ЗАДАТЬ МАРШРУТ", "SET ROUTE")}</button><button data-action="target">${Et("ВЫБРАТЬ ЦЕЛЬ", "PICK TARGET")}</button><button data-action="auto">${Et("АВТООБОРОНА", "AUTO-DEFENCE")}</button><select id="rc-escort-target" aria-label="${Et("Цель сопровождения", "Escort target")}"></select><button data-action="escort">${Et("СОПРОВОЖДЕНИЕ", "ESCORT")}</button><button data-action="stop">${Et("СТОП", "STOP")}</button><button data-action="repair">${Et("РЕМОНТ", "REPAIR")}</button></div></main></div>
      <footer><span id="rc-status">${Et("Ожидание телеметрии", "Waiting for telemetry")}</span><span>${Et("ЗЕЛЁНЫЙ — СВЯЗЬ / КРАСНЫЙ — ЦЕЛЬ", "GREEN — LINK / RED — TARGET")}</span></footer>
      <div class="rc-video"><div><b id="rc-video-title">LIVE FEED</b><span id="rc-video-telemetry"></span></div><button data-action="back">${Et("← К СТАНЦИИ", "← TO STATION")}</button><button data-action="pilot">${Et("ЗАХВАТ МЫШИ", "CAPTURE MOUSE")}</button></div><div class="rc-static"><strong>NO SIGNAL</strong><span>${Et("Канал потерян · техника уничтожена или вне зоны связи", "Link lost · vehicle destroyed or out of range")}</span><button data-action="back">${Et("ВЕРНУТЬСЯ К СТАНЦИИ", "RETURN TO STATION")}</button></div>`;
  }
  bindCanvas() {
    (this.canvas.addEventListener("pointerdown", (e) => {
      ((this.drag = {
        x: e.clientX,
        y: e.clientY,
        cx: this.center.x,
        cz: this.center.z,
        moved: !1,
      }),
        this.canvas.setPointerCapture(e.pointerId));
    }),
      this.canvas.addEventListener("pointermove", (e) => {
        if (!this.drag) return;
        const t = this.canvas.getBoundingClientRect(),
          i = this.drag;
        (Math.hypot(e.clientX - i.x, e.clientY - i.y) > 7 && (i.moved = !0),
          i.moved &&
            ((this.center.x =
              i.cx - ((e.clientX - i.x) / t.width) * this.scale * 2),
            (this.center.z =
              i.cz - ((e.clientY - i.y) / t.width) * this.scale * 2),
            this.draw()));
      }),
      this.canvas.addEventListener("pointerup", (e) => {
        (this.drag && !this.drag.moved && this.mapClick(e.clientX, e.clientY),
          (this.drag = null));
      }),
      this.canvas.addEventListener("pointercancel", () => (this.drag = null)),
      this.canvas.addEventListener(
        "wheel",
        (e) => {
          (e.preventDefault(),
            (this.scale = Math.max(
              40,
              Math.min(24e3, this.scale * (e.deltaY > 0 ? 1.2 : 1 / 1.2)),
            )),
            this.draw());
        },
        { passive: !1 },
      ));
  }
  get blocking() {
    return this.open && this.viewing < 0;
  }
  receive(e) {
    var o;
    if (e.fleetOffset !== void 0) {
      if (
        (e.fleetOffset === 0 && (this.pendingFleet = []),
        e.fleetOffset !== this.pendingFleet.length)
      ) {
        this.pendingFleet = [];
        return;
      }
      if ((this.pendingFleet.push(...(e.fleet ?? [])), !e.fleetComplete))
        return;
      ((e = { ...e, fleet: this.pendingFleet }), (this.pendingFleet = []));
    } else this.pendingFleet = [];
    const t = this.open;
    if (
      ((this.snapshot = e),
      (this.lastPacket = performance.now()),
      (this.open = e.open),
      (this.root.hidden = !e.open),
      !e.open)
    ) {
      ((this.viewing = -1),
        (this.manual = !1),
        (this.viewKey = ""),
        this.view(-1, !1));
      return;
    }
    (t ||
      ((this.center = { x: e.station.x, z: e.station.z }),
      (this.scale = 500),
      this.unlock()),
      (this.viewing = e.viewing ?? -1),
      (this.manual = !!e.manual));
    const i = this.visibleFleet();
    i.some((a) => a.id === this.selected) ||
      (this.selected = ((o = i[0]) == null ? void 0 : o.id) ?? -1);
    for (const a of this.selection)
      i.some((r) => r.id === a) || this.selection.delete(a);
    (t &&
      !this.selection.has(this.selected) &&
      (this.selected = [...this.selection][0] ?? -1),
      !t &&
        !this.selection.size &&
        this.selected >= 0 &&
        this.selection.add(this.selected));
    const s = `${this.viewing}:${this.manual}`;
    (s !== this.viewKey &&
      ((this.viewKey = s),
      this.view(e.lost ? -1 : this.viewing, this.manual),
      this.viewing >= 0 ? this.lock() : this.unlock()),
      this.render());
  }
  tick() {
    this.open &&
      performance.now() - this.lastPacket > 3500 &&
      (this.root.classList.add("signal-lost"),
      this.viewing >= 0 && (this.view(-1, !1), (this.viewKey = "")));
  }
  command(e, t) {
    return t >= Cl
      ? new Xe(ue.C_REMOTE)
          .u8(11)
          .u8(e)
          .u16(t - Cl)
      : new Xe(ue.C_REMOTE).u8(e).u16(t);
  }
  visibleFleet() {
    return (this.snapshot.fleet ?? []).filter(
      (e) => this.fleetFilter === "squad" || e.mine !== !1,
    );
  }
  units() {
    return this.visibleFleet().filter(
      (e) => this.selection.has(e.id) && e.signal && !e.busy,
    );
  }
  select(e) {
    (this.selection.has(e) ? this.selection.delete(e) : this.selection.add(e),
      (this.selected = this.selection.has(e)
        ? e
        : ([...this.selection][0] ?? -1)),
      this.render());
  }
  action(e) {
    var s, o, a;
    if (e === "filter-mine" || e === "filter-squad") {
      this.fleetFilter = e === "filter-mine" ? "mine" : "squad";
      const r = this.visibleFleet();
      ((this.selection = new Set(
        [...this.selection].filter((l) => r.some((c) => c.id === l)),
      )),
        (this.selected = this.selection.has(this.selected)
          ? this.selected
          : ([...this.selection][0] ?? -1)),
        (this.mapAction = !1),
        this.render());
      return;
    }
    if (e === "all") {
      ((this.selection = new Set(
        this.visibleFleet()
          .filter((r) => r.signal && !r.busy)
          .map((r) => r.id),
      )),
        (this.selected = [...this.selection][0] ?? -1),
        this.render());
      return;
    }
    if (e === "clear") {
      (this.selection.clear(), (this.selected = -1), this.render());
      return;
    }
    if (e === "close") {
      (this.send(new Xe(ue.C_REMOTE).u8(0)), this.receive({ open: !1 }));
      return;
    }
    if (e === "back") {
      (this.send(new Xe(ue.C_REMOTE).u8(8)),
        this.view(-1, !1),
        (this.viewing = -1),
        (this.manual = !1),
        (this.viewKey = ""),
        this.unlock(),
        this.render());
      return;
    }
    if (e === "pilot") {
      this.lock();
      return;
    }
    const t =
      (s = this.snapshot.fleet) == null
        ? void 0
        : s.find((r) => r.id === this.selected);
    if (e === "in" || e === "out") {
      ((this.scale = Math.max(
        40,
        Math.min(24e3, this.scale * (e === "in" ? 0.5 : 2)),
      )),
        this.draw());
      return;
    }
    if (e === "range") {
      const r = this.canvas.getBoundingClientRect();
      ((this.scale =
        (((o = this.snapshot.station) == null ? void 0 : o.range) ?? bd) *
        1.15 *
        Math.max(1, r.width / Math.max(1, r.height))),
        (this.center = {
          x: this.snapshot.station.x,
          z: this.snapshot.station.z,
        }),
        this.draw());
      return;
    }
    if (e === "center") {
      ((this.center = {
        x: (t == null ? void 0 : t.x) ?? this.snapshot.station.x,
        z: (t == null ? void 0 : t.z) ?? this.snapshot.station.z,
      }),
        this.draw());
      return;
    }
    if (!t || !t.signal || t.busy) return;
    if (e === "repair") {
      if ((a = this.snapshot.station) != null && a.mobile) return;
      for (const r of this.units().filter(
        (l) => l.kind !== "bot" && l.hp < l.maxHp,
      ))
        this.send(this.command(14, r.id));
      return;
    }
    if (e === "escort") {
      const r = this.root.querySelector("#rc-escort-target").value,
        [l, c] = r.split(":");
      if (r)
        for (const h of this.units().filter(
          (d) => d.type !== P.TURRET && d.type !== P.MORTAR,
        ))
          this.send(
            this.command(10, h.id)
              .u8(l === "vehicle" ? 0 : 2)
              .u16(Number(c)),
          );
      return;
    }
    if (e === "target") {
      ((this.mapAction = !1),
        this.hint(
          Et(
            "Нажмите на вражескую метку: техника начнёт атаку",
            "Click an enemy marker: the vehicles will attack it",
          ),
        ));
      return;
    }
    if (e === "navigate") {
      ((this.mapAction = !this.mapAction),
        this.hint(
          this.mapAction
            ? t.type === P.MORTAR
              ? Et(
                  "Укажите точку удара · 224 м · 1 ракета",
                  "Pick the impact point · 224 m · 1 rocket",
                )
              : Et(
                  "Укажите точку назначения на карте",
                  "Pick a destination on the map",
                )
            : Et(
                "Нажмите на вражескую метку для атаки",
                "Click an enemy marker to attack",
              ),
        ));
      return;
    }
    const i = { manual: 3, camera: 4, auto: 9, stop: 7 }[e];
    if (i)
      for (const r of e === "manual" || e === "camera" ? [t] : this.units())
        this.send(this.command(i, r.id));
  }
  hint(e) {
    this.root.querySelector("#rc-map-hint").textContent = e;
  }
  mapClick(e, t) {
    var d, u;
    const i = this.canvas.getBoundingClientRect(),
      s = e - i.left,
      o = t - i.top,
      a = {
        x: this.center.x + ((s - i.width / 2) / i.width) * this.scale * 2,
        z: this.center.z + ((o - i.height / 2) / i.width) * this.scale * 2,
      },
      r = ((this.scale * 2) / i.width) * 18,
      l = this.visibleFleet().find((f) => Math.hypot(f.x - a.x, f.z - a.z) < r);
    if (!this.mapAction && l) {
      this.select(l.id);
      return;
    }
    const c =
      (d = this.snapshot.fleet) == null
        ? void 0
        : d.find((f) => f.id === this.selected);
    if (!c || !c.signal || c.busy) return;
    const h =
      (u = this.snapshot.targets) == null
        ? void 0
        : u.find((f) => Math.hypot(f.x - a.x, f.z - a.z) < r);
    if (!this.mapAction && h) {
      for (const f of this.units())
        this.send(
          this.command(6, f.id)
            .u8(["vehicle", "bot", "player"].indexOf(h.kind))
            .u16(h.id),
        );
      this.hint(`${Et("Цель", "Target")}: ${Db(h)}`);
    } else if (this.mapAction) {
      const f = this.snapshot.station;
      if (Math.hypot(a.x - f.x, a.z - f.z) > (f.range ?? bd) - 32) {
        this.hint(
          Et("Точка вне радиуса связи", "Point is outside radio range"),
        );
        return;
      }
      for (const p of this.units().filter(
        (m) =>
          m.type !== P.MORTAR || this.units().every((y) => y.type === P.MORTAR),
      ))
        this.send(this.command(5, p.id).f32(a.x).f32(a.z));
      ((this.mapAction = !1),
        this.hint(
          c.type === P.MORTAR
            ? Et("Координаты удара переданы", "Strike coordinates sent")
            : Et(
                "Маршрут передан · красная цель на карте — приказ атаковать",
                "Route sent · a red map target orders an attack",
              ),
        ));
    }
  }
  renderDevices() {
    const e = this.root.querySelector("#rc-devices"),
      t = this.snapshot.devices ?? [];
    this.root.querySelector("#rc-device-count").textContent = String(t.length);
    const i = (o) => `${o.x},${o.y},${o.z}`,
      s = new Set(t.map(i));
    for (const o of [...e.children]) s.has(o.dataset.device) || o.remove();
    for (const o of t) {
      const a = i(o);
      let r = [...e.children].find((h) => h.dataset.device === a);
      if (!r) {
        ((r = document.createElement("div")),
          (r.className = "rc-device"),
          (r.dataset.device = a),
          (r.innerHTML = `<div class="rc-device-row"><button class="rc-device-expand" aria-expanded="false"><span class="rc-device-title"></span><span class="rc-device-chevron" aria-hidden="true">›</span></button><button class="rc-device-toggle"></button></div><div class="rc-device-editor" hidden><label>${Et("Название", "Name")}<input maxlength="48" aria-label="${Et("Название радиоустройства", "Radio device name")}"></label><small class="rc-device-info"></small><button class="rc-device-name">${Et("Сохранить имя", "Save name")}</button></div>`));
        const h = r.querySelector(".rc-device-expand"),
          d = r.querySelector(".rc-device-editor");
        ((h.onclick = () => {
          ((d.hidden = !d.hidden),
            h.setAttribute("aria-expanded", String(!d.hidden)));
        }),
          e.append(r));
        const u = (p) => new Xe(ue.C_REMOTE).u8(p).i32(o.x).u8(o.y).i32(o.z),
          f = r.querySelector("input");
        ((r.querySelector(".rc-device-name").onclick = () => {
          f.value.trim() && this.send(u(17).str(f.value.trim()));
        }),
          (f.onkeydown = (p) => {
            p.key === "Enter" &&
              (p.preventDefault(), r.querySelector(".rc-device-name").click());
          }),
          (r.querySelector(".rc-device-toggle").onclick = () => {
            var m;
            const p =
              (m = this.snapshot.devices) == null
                ? void 0
                : m.find((y) => i(y) === a);
            p != null && p.signal && this.send(u(16).u8(p.on ? 0 : 1));
          }));
      }
      r.querySelector(".rc-device-title").textContent = o.name;
      const l = r.querySelector("input");
      (((document.activeElement !== l && l.dataset.saved === l.value) ||
        l.dataset.saved === void 0) &&
        (l.value = o.name),
        (l.dataset.saved = o.name),
        (r.querySelector(".rc-device-info").textContent =
          `${_ee(o)} · ${o.x}, ${o.y}, ${o.z} · ${o.signal ? Et("В сети", "Online") : Et("Нет связи", "No link")}`));
      const c = r.querySelector(".rc-device-toggle");
      ((c.disabled = !o.signal),
        c.setAttribute("aria-pressed", String(o.on)),
        (c.textContent =
          o.kind === "relay"
            ? o.on
              ? Et("ВЫКЛ", "OFF")
              : Et("ВКЛ", "ON")
            : o.on
              ? Et("ЗАКРЫТЬ", "CLOSE")
              : Et("ОТКРЫТЬ", "OPEN")),
        (c.title = o.signal
          ? o.on
            ? Et("Выключить / закрыть", "Switch off / close")
            : Et("Включить / открыть", "Switch on / open")
          : Et("Нет связи", "No link")),
        (r.querySelector(".rc-device-name").disabled = !o.signal));
    }
  }
  render() {
    var f, p, m, y, g, b;
    this.renderDevices();
    const e = this.visibleFleet(),
      t = e.find((S) => S.id === this.selected),
      i =
        (f = this.snapshot.fleet) == null
          ? void 0
          : f.find((S) => S.id === this.viewing);
    (this.root
      .querySelector("[data-action=filter-mine]")
      .setAttribute("aria-pressed", String(this.fleetFilter === "mine")),
      this.root
        .querySelector("[data-action=filter-squad]")
        .setAttribute("aria-pressed", String(this.fleetFilter === "squad")),
      this.root.classList.toggle("viewing", this.viewing >= 0),
      this.root.classList.toggle(
        "signal-lost",
        this.viewing >= 0 && (!!this.snapshot.lost || !i || !i.signal),
      ),
      (this.root.querySelector("#rc-count").textContent = String(
        e.length,
      ).padStart(2, "0")));
    const s = this.root.querySelector("#rc-fleet"),
      o = e.map((S) => S.id).join(",");
    s.getAttribute("data-ids") !== o &&
      (s.setAttribute("data-ids", o),
      (s.innerHTML = e.length
        ? e
            .map((S) => `<button class="rc-unit" data-id="${S.id}"></button>`)
            .join("")
        : `<div class="rc-empty">${Et("НЕТ ПОДКЛЮЧЁННОЙ ТЕХНИКИ", "NO LINKED VEHICLES")}<br><small>${Et("Радиомодули продаются в магазине за $300.", "Radio modules are sold in the shop for $300.")}</small></div>`),
      s.querySelectorAll("button").forEach(
        (S) =>
          (S.onclick = () => {
            this.select(Number(S.dataset.id));
          }),
      ));
    for (const S of e) {
      const M = s.querySelector(`[data-id="${S.id}"]`);
      (M.classList.toggle("selected", this.selection.has(S.id)),
        (M.innerHTML = `<span><b>${wd(Ob(S))}</b><small>#${String(S.kind === "bot" ? S.id - Cl : S.id).padStart(3, "0")} · ${S.planet ? Et("ЛУНА", "MOON") : Et("ЗЕМЛЯ", "EARTH")}<br>${wd(S.mine !== !1 ? Et("Моя техника", "My unit") : (S.ownerName ?? ""))}</small></span><em class="${S.signal ? "" : "off"}">${S.signal ? "● LINK" : "○ OFFLINE"}</em><div class="rc-hp"><i style="width:${Math.max(0, Math.min(100, (S.hp / S.maxHp) * 100))}%"></i></div><small>${S.hp} / ${S.maxHp} HP　${(S.speed * 3.6).toFixed(0)} ${Et("км/ч", "km/h")}<br>${Math.round(S.x)}, ${Math.round(S.y)}, ${Math.round(S.z)} · ${wd(Nb(S.busy ? Et("Занята оператором / экипажем", "Operator / crew in control") : S.status))}</small>`));
    }
    ((this.root.querySelector("#rc-detail").innerHTML = t
      ? `<div><small>${Et("АКТИВНЫЙ КАНАЛ", "ACTIVE CHANNEL")}</small><b>${wd(Ob(t))} / ${String(t.kind === "bot" ? t.id - Cl : t.id).padStart(3, "0")}</b></div><div><small>${Et("СОСТОЯНИЕ", "STATUS")}</small><b>${wd(Nb(t.status))}</b></div><div><small>${Et("ЗАПАС ПРОЧНОСТИ", "INTEGRITY")}</small><b>${t.hp} <span>/ ${t.maxHp}</span></b></div><div><small>${Et("СКОРОСТЬ", "SPEED")}</small><b>${(t.speed * 3.6).toFixed(1)} <span>${Et("км/ч", "km/h")}</span></b></div>`
      : `<p>${Et("Подключите первую машину, чтобы открыть телеметрию и команды.", "Link your first vehicle to open telemetry and commands.")}</p>`),
      this.root
        .querySelectorAll(".rc-actions button")
        .forEach(
          (S) =>
            (S.disabled =
              !["all", "clear"].includes(S.dataset.action ?? "") &&
              (!t ||
                !t.signal ||
                t.busy ||
                (["manual", "camera"].includes(S.dataset.action ?? "") &&
                  this.selection.size !== 1))),
        ),
      (this.root.querySelector('[data-action="navigate"]').textContent =
        this.units().length > 0 &&
        this.units().every((S) => S.type === P.MORTAR)
          ? Et("ТОЧКА УДАРА", "STRIKE POINT")
          : Et("ЗАДАТЬ МАРШРУТ", "SET ROUTE")));
    const a = this.root.querySelector("[data-action=repair]"),
      r = this.units().filter((S) => S.kind !== "bot" && S.hp < S.maxHp);
    ((a.hidden = !!((p = this.snapshot.station) != null && p.mobile)),
      (a.disabled = !r.length || a.hidden),
      (a.textContent = `${Et("РЕМОНТ", "REPAIR")} · $${r.reduce((S, M) => S + F$(M.type, M.hp, M.maxHp), 0).toLocaleString(Aee())}`),
      (a.title = Et(
        "Полное восстановление выбранной техники за деньги",
        "Fully restore the selected vehicles for money",
      )));
    const l = this.root.querySelector("#rc-escort-target"),
      c = l.value,
      h = (this.snapshot.escortTargets ?? []).filter(
        (S) => S.kind !== "vehicle" || S.id !== (t == null ? void 0 : t.id),
      ),
      d = h
        .map((S) => `<option value="${S.kind}:${S.id}">${wd(Db(S))}</option>`)
        .join("");
    d !== this.escortOptionsKey &&
      ((l.innerHTML = d), (this.escortOptionsKey = d));
    const u =
      c || (t != null && t.escort ? `${t.escort.kind}:${t.escort.id}` : "");
    (h.some((S) => `${S.kind}:${S.id}` === u) && (l.value = u),
      (l.disabled = !t || !t.signal || t.busy || !h.length),
      (this.root.querySelector('[data-action="escort"]').disabled =
        l.disabled ||
        !this.units().some((S) => S.type !== P.TURRET && S.type !== P.MORTAR)),
      (this.root.querySelector(".rc-link small").textContent = Et(
        `РАДИУС ${(((m = this.snapshot.station) == null ? void 0 : m.range) ?? bd).toLocaleString("ru")} БЛОКОВ`,
        `RANGE ${(((y = this.snapshot.station) == null ? void 0 : y.range) ?? bd).toLocaleString("en")} BLOCKS`,
      )),
      (this.root.querySelector("[data-action=range]").textContent =
        `${(((g = this.snapshot.station) == null ? void 0 : g.range) ?? bd) / 1e3}${Et("К", "K")}`),
      (this.root.querySelector("#rc-status").textContent =
        `${Et("ВЫБРАНО", "SELECTED")} ${this.selection.size} · ${(b = this.snapshot.station) != null && b.planet ? Et("ЛУНА", "MOON") : Et("ЗЕМЛЯ", "EARTH")} · ${e.filter((S) => S.signal).length} ${Et("В СЕТИ · СИНХРОНИЗИРОВАНО", "ONLINE · SYNCED")}`),
      (this.root.querySelector("#rc-video-title").textContent =
        `${this.manual ? Et("MANUAL / F — ВЫХОД", "MANUAL / F — EXIT") : Et("LIVE / F — К СТАНЦИИ", "LIVE / F — TO STATION")} — ${i ? Ob(i) : Et("КАНАЛ ПОТЕРЯН", "LINK LOST")}`),
      (this.root.querySelector("#rc-video-telemetry").textContent = i
        ? `${i.hp}/${i.maxHp} HP · ${(i.speed * 3.6).toFixed(0)} ${Et("км/ч", "km/h")} · X ${i.x.toFixed(0)} / Y ${i.y.toFixed(0)} / Z ${i.z.toFixed(0)}　${Nb(i.status)}`
        : ""),
      this.draw());
  }
  draw() {
    if (!this.open || this.viewing >= 0) return;
    const e = this.canvas.getBoundingClientRect();
    if (!e.width) return;
    const t = Math.min(2, devicePixelRatio || 1);
    ((this.canvas.width = e.width * t), (this.canvas.height = e.height * t));
    const i = this.canvas.getContext("2d");
    i.scale(t, t);
    const s = e.width,
      o = e.height,
      a = s / (this.scale * 2),
      r = (u, f) => ({
        x: s / 2 + (u - this.center.x) * a,
        y: o / 2 + (f - this.center.z) * a,
      });
    ((i.fillStyle = "#0a1819"), i.fillRect(0, 0, s, o));
    const l = 5,
      c = l / a;
    for (let u = 0; u < o; u += l)
      for (let f = 0; f < s; f += l) {
        const p = this.sample(
          this.center.x + (f + l / 2 - s / 2) / a,
          this.center.z + (u + l / 2 - o / 2) / a,
          c,
        );
        p < 0 ||
          ((i.fillStyle = "#" + p.toString(16).padStart(6, "0")),
          i.fillRect(f, u, l, l));
      }
    ((i.strokeStyle = "#10251c55"), (i.lineWidth = 1));
    const h = 10 ** Math.floor(Math.log10(this.scale / 3));
    for (
      let u = Math.floor((this.center.x - this.scale) / h) * h;
      u < this.center.x + this.scale;
      u += h
    ) {
      const f = r(u, 0);
      (i.beginPath(), i.moveTo(f.x, 0), i.lineTo(f.x, o), i.stroke());
    }
    for (
      let u = Math.floor((this.center.z - this.scale) / h) * h;
      u < this.center.z + this.scale;
      u += h
    ) {
      const f = r(0, u);
      (i.beginPath(), i.moveTo(0, f.y), i.lineTo(s, f.y), i.stroke());
    }
    cI(
      i,
      s,
      o,
      this.center,
      a,
      a,
      this.border(),
      Et("ГРАНИЦА МИРА", "WORLD BOUNDARY"),
    );
    const d = this.snapshot.station;
    if (d) {
      const u = r(d.x, d.z);
      ((i.strokeStyle = "#5caa8d"),
        i.setLineDash([5, 7]),
        i.beginPath(),
        i.arc(u.x, u.y, (d.range ?? bd) * a, 0, Math.PI * 2),
        i.stroke(),
        i.setLineDash([]),
        (i.fillStyle = "#d3e5ad"),
        (i.font = "20px monospace"),
        i.fillText("⊕", u.x - 9, u.y + 6));
    }
    i.font = "11px monospace";
    for (const u of this.snapshot.targets ?? []) {
      if (u.kind === "player" && Xa(u.label)) continue;
      const f = r(u.x, u.z);
      if (f.x < 0 || f.x > s || f.y < 0 || f.y > o) continue;
      const p = u.raid ? "#9b2948" : "#ed846c";
      ((i.fillStyle = p),
        u.vehicleType !== void 0
          ? SM(
              i,
              f.x,
              f.y,
              { x: u.x, z: u.z, vehicleType: u.vehicleType, color: p },
              7,
            )
          : (i.beginPath(),
            i.arc(f.x, f.y, 5, 0, Math.PI * 2),
            i.fill(),
            (i.strokeStyle = "#f0c3cc"),
            i.stroke()),
        (i.fillStyle = p),
        this.scale < 1200 && i.fillText(Db(u).slice(0, 20), f.x + 9, f.y + 4));
    }
    for (const u of this.visibleFleet()) {
      if (u.planet !== (d == null ? void 0 : d.planet)) continue;
      const f = r(u.x, u.z);
      if (
        ((i.fillStyle = u.signal ? "#8deac4" : "#768582"),
        u.kind === "bot"
          ? (i.beginPath(),
            i.arc(f.x, f.y - 3, 3, 0, Math.PI * 2),
            i.fill(),
            i.fillRect(f.x - 4, f.y + 1, 8, 7))
          : SM(
              i,
              f.x,
              f.y,
              {
                x: u.x,
                z: u.z,
                vehicleType: u.type,
                color: u.signal ? "#68c7ff" : "#768582",
              },
              7,
            ),
        (i.font = "11px monospace"),
        i.fillText(
          `#${u.kind === "bot" ? u.id - Cl : u.id}`,
          f.x + 12,
          f.y + 3,
        ),
        this.selection.has(u.id) &&
          ((i.strokeStyle = "#d1ffe9"),
          i.strokeRect(f.x - 13, f.y - 13, 26, 26)),
        u.waypoint)
      ) {
        const p = r(u.waypoint.x, u.waypoint.z);
        ((i.strokeStyle = "#8deac4"),
          i.setLineDash([4, 4]),
          i.beginPath(),
          i.moveTo(f.x, f.y),
          i.lineTo(p.x, p.y),
          i.stroke(),
          i.setLineDash([]),
          i.fillText("×", p.x - 4, p.y + 4));
      }
    }
    (this.overlay(i, s, o, this.center, a),
      (i.fillStyle = "#a8c3b7"),
      (i.font = "10px monospace"),
      i.fillText(
        Et(`N ↑  /  СЕТКА ${h} БЛОКОВ`, `N ↑  /  GRID ${h} BLOCKS`),
        12,
        20,
      ));
  }
}
