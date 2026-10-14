// index-Dp6GxvJu 172 — states
// Lines 98151-98662 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class RJ {
  constructor(e, t, i = () => {}) {
    w(this, "states", new Map());
    w(this, "cards", new Map());
    w(this, "groups", new Map());
    w(this, "helicopter");
    w(this, "chatChoices", null);
    w(this, "time", 0);
    w(this, "displayCd", 0);
    w(this, "position", { x: 0, z: 0 });
    w(this, "availability", -1);
    w(this, "questTitle", "");
    w(this, "missionMenuSignature", "");
    var o;
    ((this.scene = e), (this.call = t), (this.requestStatus = i));
    const s = document.getElementById("raidhud");
    (s && document.body.appendChild(s),
      (o = document.getElementById("missions-menu")) == null ||
        o.addEventListener("toggle", (a) => {
          a.currentTarget.open &&
            Ja("/mission") &&
            (this.requestStatus(), this.renderMissionMenu());
        }),
      Vo(() => {
        for (const [a, r] of this.states) this.receive(a, r);
        this.renderMissionMenu();
      }),
      this.renderMissionMenu());
  }
  setAvailability(e) {
    ((this.availability = e), this.renderMissionMenu());
  }
  setQuest(e) {
    ((this.questTitle = e), this.renderMissionMenu());
  }
  refreshAccess() {
    this.renderMissionMenu();
  }
  renderMissionMenu() {
    var p, m;
    const e = document.getElementById("missions-menu"),
      t = document.getElementById("missions-menu-content");
    if (!e || !t) return;
    const i = Ja("/raid start"),
      s = Ja("/mission");
    if (((e.hidden = !s), e.classList.toggle("hidden", !s), !s)) {
      ((e.open = !1), t.replaceChildren(), (this.missionMenuSignature = ""));
      return;
    }
    const o = z.language === "en",
      a = (y, g) => (o ? g : y),
      r = JSON.stringify([
        o,
        i,
        this.availability,
        this.questTitle,
        ...["raid", "defense", "district", "evac"].map((y) => {
          const g = this.states.get(y);
          return [y, !!g && !g.outcome, (g == null ? void 0 : g.actions) ?? []];
        }),
      ]);
    if (r === this.missionMenuSignature) return;
    ((this.missionMenuSignature = r), t.replaceChildren());
    const l = (y, g, b, S = !1) => {
        const M = document.createElement("button");
        ((M.type = "button"),
          (M.className = "btn small secondary"),
          (M.textContent = g),
          (M.disabled = S),
          (M.onclick = () => {
            Ja(b) && (this.call(b), this.requestStatus());
          }),
          y.append(M));
      },
      c = [
        { channel: "raid", bit: 1, title: a("Рейд", "Raid"), icon: "servers" },
        {
          channel: "defense",
          bit: 2,
          title: a("Линия обороны", "Defense line"),
          icon: "world",
        },
        {
          channel: "district",
          bit: 4,
          title: a("Захват района", "District capture"),
          icon: "world",
        },
        {
          channel: "evac",
          bit: 8,
          title: a("Эвакуация", "Evacuation"),
          icon: "logout",
        },
      ];
    for (const y of i ? c : []) {
      const g = document.createElement("section");
      g.className = "mission-menu-row";
      const b = document.createElement("div");
      b.className = "mission-menu-heading";
      const S =
          !!this.states.get(y.channel) &&
          !((p = this.states.get(y.channel)) != null && p.outcome),
        M = !!(this.availability & y.bit);
      ((b.innerHTML = Nn(y.icon)),
        b.append(
          document.createTextNode(
            `${y.title} · ${S ? a("идёт", "active") : this.availability < 0 ? "…" : M ? a("включён", "enabled") : a("выключен", "disabled")}`,
          ),
        ),
        g.append(b));
      const x = document.createElement("div");
      if (
        ((x.className = "mission-menu-actions"),
        l(
          x,
          a("Включить", "Enable"),
          `/${y.channel} on`,
          this.availability < 0 || M,
        ),
        l(
          x,
          a("Выключить", "Disable"),
          `/${y.channel} off`,
          this.availability < 0 || !M,
        ),
        l(
          x,
          a("Начать", "Start"),
          `/${y.channel} start`,
          this.availability < 0 || !M || S,
        ),
        l(x, a("Остановить", "Stop"), `/${y.channel} stop`, !S),
        S)
      ) {
        (y.channel === "evac" &&
          l(x, a("Вызвать эвакуацию", "Call extraction"), "/evac call"),
          (y.channel === "defense" || y.channel === "district") &&
            l(x, a("Присоединиться", "Join"), `/${y.channel} join`));
        for (const T of ((m = this.states.get(y.channel)) == null
          ? void 0
          : m.actions) ?? [])
          l(x, T.label, T.command);
      }
      (g.append(x), t.append(g));
    }
    const h = document.createElement("section");
    h.className = "mission-menu-row";
    const d = document.createElement("div");
    ((d.className = "mission-menu-heading"),
      (d.textContent = this.questTitle
        ? `${a("Полевое задание", "Field mission")} · ${this.questTitle}`
        : a("Полевые задания", "Field missions")),
      h.append(d));
    const u = document.createElement("p");
    ((u.textContent = a(
      "Выберите задание. Награда начисляется после выполнения боевой цели.",
      "Choose an assignment. Rewards are granted after completing the combat objective.",
    )),
      h.append(u));
    const f = document.createElement("div");
    f.className = "mission-menu-actions";
    for (const [y, g, b] of [
      ["convoy-intercept", "Перехват конвоя", "Convoy intercept"],
      ["field-commander", "Полевой командир", "Field commander"],
      ["sam-hunt", "Охота на ПВО", "SAM hunt"],
    ])
      l(f, a(g, b), `/mission ${y}`, !!this.questTitle);
    (l(
      f,
      a("Остановить задание", "Stop mission"),
      "/mission stop",
      !this.questTitle,
    ),
      h.append(f),
      t.append(h));
  }
  receive(e, t) {
    var l;
    (t ? this.states.set(e, t) : this.states.delete(e),
      document.body.classList.toggle(
        "evac-active",
        ["evac", "defense", "district"].some((c) => this.states.has(c)),
      ),
      document.body.classList.toggle(
        "raid-voting",
        !!((l = this.states.get("raid-choice")) != null && l.voting),
      ));
    let i = this.cards.get(e);
    if (!t) {
      (i == null || i.remove(),
        this.cards.delete(e),
        this.syncModels(),
        this.renderChatChoices(),
        this.renderMissionMenu());
      return;
    }
    if (!i) {
      ((i = document.createElement("section")),
        (i.id =
          e === "raid"
            ? "raidsidehud"
            : e === "raid-choice"
              ? "raidchoicehud"
              : `${e}hud`),
        (i.className = `operation-card operation-${e}`),
        i.setAttribute("aria-label", t.title),
        (i.innerHTML =
          '<div class="op-top"><span class="op-title"></span><span class="op-clock"></span></div><div class="op-phase"></div><div class="op-objective"></div><div class="op-progress"><i></i></div><div class="op-detail"></div><div class="op-footer"><span class="op-distance"></span><b class="op-reward"></b></div><button type="button" class="op-call"></button>'),
        i.insertAdjacentHTML(
          "beforeend",
          '<div class="op-actions"></div><div class="op-chat-choices"></div>',
        ),
        (e === "raid" || e === "raid-choice"
          ? (document.getElementById("raidhud") ?? document.body)
          : document.body
        ).appendChild(i));
      const c = i.querySelector(".op-call");
      (c.addEventListener("pointerdown", (h) => h.stopPropagation()),
        (c.onclick = (h) => {
          (h.stopPropagation(), this.call());
        }),
        this.cards.set(e, i));
    }
    i.dataset.outcome = t.outcome ?? "";
    const s = (c, h) => {
      const d = i.querySelector(c);
      d.textContent !== h && (d.textContent = h);
    };
    ((t = mM(t, z.language)),
      s(".op-title", t.title),
      s(".op-phase", t.phase),
      s(".op-objective", t.objective),
      s(".op-detail", t.detail),
      s(
        ".op-clock",
        t.seconds
          ? `${Math.floor(t.seconds / 60)}:${String(t.seconds % 60).padStart(2, "0")}`
          : "",
      ),
      s(
        ".op-reward",
        t.reward
          ? `$${t.reward.toLocaleString(z.language === "en" ? "en-US" : "ru-RU")}`
          : "",
      ),
      (i.querySelector(".op-progress i").style.width =
        `${Math.max(0, Math.min(1, t.progress)) * 100}%`));
    const o = i.querySelector(".op-call");
    ((o.hidden = !t.action), (o.textContent = t.action ? t.action.label : ""));
    const a = i.querySelector(".op-actions"),
      r = JSON.stringify(t.actions ?? []);
    (a.dataset.signature !== r &&
      ((a.dataset.signature = r),
      a.replaceChildren(
        ...(t.actions ?? []).map((c) => {
          const h = document.createElement("button");
          return (
            (h.type = "button"),
            (h.textContent = c.label),
            (h.title = c.command),
            (h.className = "op-call"),
            h.addEventListener("pointerdown", (d) => d.stopPropagation()),
            (h.onclick = (d) => {
              (d.stopPropagation(), this.call(c.command));
            }),
            h
          );
        }),
      )),
      i.classList.toggle("urgent", t.seconds > 0 && t.seconds <= 15),
      this.syncModels(),
      this.updateDistances(),
      this.renderChatChoices(),
      this.renderMissionMenu());
  }
  beginChat() {
    this.chatChoices = kb(this.states.values());
  }
  endChat() {
    this.chatChoices = null;
  }
  chooseFromChat(e) {
    if (!/^\d+$/.test(e.trim())) return null;
    const t = kb(this.states.values()),
      i = this.chatChoices ?? t;
    if (!i.length && !t.length) return null;
    const s = i.find((o) => o.number === Number(e.trim()));
    return !s ||
      !t.some((o) => o.channel === s.channel && o.command === s.command)
      ? "invalid"
      : (this.call(s.command), "selected");
  }
  renderChatChoices() {
    const e = kb(this.states.values()),
      t = z.language === "en",
      i = gs(z.binds.chat);
    for (const [s, o] of this.cards) {
      const a = o.querySelector(".op-chat-choices"),
        r = e.filter((h) => h.channel === s),
        l = JSON.stringify([t, i, r]);
      if (
        a.dataset.signature === l ||
        ((a.dataset.signature = l), a.replaceChildren(), !r.length)
      )
        continue;
      const c = document.createElement("div");
      ((c.className = "op-chat-hint"),
        (c.textContent = lr()
          ? t
            ? "Open chat, enter a number and tap Send"
            : "Откройте чат, введите цифру и нажмите «Отправить»"
          : t
            ? `Chat [${i}]: enter a number, then Enter`
            : `Чат [${i}]: введите цифру и нажмите Enter`),
        a.append(c));
      for (const h of r) {
        const d = document.createElement("div");
        d.className = "op-chat-choice";
        const u = document.createElement("b");
        u.textContent = String(h.number);
        const f = document.createElement("span");
        ((f.textContent = h.label), d.append(u, f), a.append(d));
      }
    }
  }
  interact(e) {
    const t = this.states.get("evac"),
      i = t == null ? void 0 : t.points.find((s) => s.id === "exit");
    return !(t != null && t.action) ||
      !i ||
      Math.hypot(e.x - i.x, e.z - i.z) > i.radius ||
      Math.abs(e.y - i.y) > 4
      ? !1
      : (this.call(), !0);
  }
  points() {
    return [...this.states.values()].flatMap((e) =>
      e.points.map((t) => ({ ...t, color: this.color(e.channel, t) })),
    );
  }
  color(e, t) {
    return t.kind === "captured"
      ? "#66f2d5"
      : t.kind === "approach" || t.kind === "enemy"
        ? "#ff8878"
        : e === "defense"
          ? "#8bbfff"
          : e === "district"
            ? "#ffcc7a"
            : e === "evac"
              ? "#66f2d5"
              : "#ffd478";
  }
  syncModels() {
    var i;
    const e = new Set();
    for (const [s, o] of this.states)
      for (const a of o.points) {
        const r = `${s}:${a.id}`;
        e.add(r);
        let l = this.groups.get(r);
        if (
          (l &&
            l.userData.kind !== a.kind &&
            (this.dispose(l), this.groups.delete(r), (l = void 0)),
          !l)
        ) {
          ((l = new pe()), (l.userData.kind = a.kind));
          const c = new ze(this.color(s, a)),
            h = new qt({
              color: c,
              transparent: !0,
              opacity: 0.6,
              depthWrite: !1,
              side: Ai,
            }),
            d = new le(new sh(Math.max(0.8, a.radius - 0.18), a.radius, 48), h);
          ((d.rotation.x = -Math.PI / 2), (d.position.y = 0.1), l.add(d));
          const u = new le(new xt(0.07, 0.07, 9, 6), h.clone());
          if (((u.position.y = 4.5), l.add(u), a.kind === "cargo")) {
            const f = new le(
              new Ct(1.8, 1.2, 1.15),
              new gi({ color: 4609097 }),
            );
            ((f.position.y = 0.6), l.add(f));
            for (const m of [-0.55, 0.55]) {
              const y = new le(
                new Ct(0.12, 1.24, 1.19),
                new gi({ color: 12888676 }),
              );
              (y.position.set(m, 0.62, 0), l.add(y));
            }
            const p = new le(new Ct(0.36, 0.16, 0.08), new qt({ color: c }));
            (p.position.set(0, 0.85, 0.6), l.add(p));
          }
          if (a.kind === "extract") {
            for (const p of [-1, 1]) {
              const m = new le(new Ct(0.22, 0.08, 3), h.clone());
              (m.position.set(p, 0.15, 0), l.add(m));
            }
            const f = new le(new Ct(2.2, 0.08, 0.22), h.clone());
            ((f.position.y = 0.15), l.add(f));
          }
          if (["defend", "radio", "sam", "hq", "captured"].includes(a.kind)) {
            const f = (p, m, y, g, b, S, M) => {
              const x = new le(new Ct(p, m, y), new gi({ color: M }));
              (x.position.set(g, b, S), l.add(x));
            };
            if (
              (f(2.4, 1.4, 1.5, 0, 0.7, 0, 4279365),
              f(1, 0.45, 0.08, 0, 0.95, 0.8, 10268299),
              f(0.08, 4, 0.08, -1, 2.5, 0, 8623242),
              f(
                1.4,
                0.7,
                0.07,
                -0.35,
                4.1,
                0,
                a.kind === "captured"
                  ? 6740399
                  : a.kind === "defend"
                    ? 6921168
                    : 12621404,
              ),
              a.kind === "radio")
            ) {
              const p = new le(
                new mn(1, 12, 8, 0, Math.PI),
                new gi({ color: 11975849, side: Ai }),
              );
              ((p.rotation.x = -0.6), p.position.set(0, 2.6, 0), l.add(p));
            }
          }
          (this.scene.add(l), this.groups.set(r, l));
        }
        l.position.set(a.x, a.y, a.z);
      }
    for (const [s, o] of this.groups)
      e.has(s) || (this.dispose(o), this.groups.delete(s));
    const t = (i = this.states.get("evac")) == null ? void 0 : i.transport;
    if (t && !this.helicopter) {
      ((this.helicopter = Hp(P.HELI, 0, 730)),
        this.helicopter.traverse((o) => {
          o instanceof le &&
            ((o.geometry = o.geometry.clone()),
            (o.material = Array.isArray(o.material)
              ? o.material.map((a) => a.clone())
              : o.material.clone()));
        }));
      const s = new le(
        new xt(0.035, 0.035, 14, 6),
        new qt({ color: 12569028 }),
      );
      ((s.name = "rescue-rope"),
        (s.position.y = -7),
        this.helicopter.add(s),
        this.helicopter.position.set(t.x, t.y, t.z),
        this.scene.add(this.helicopter));
    }
    !t &&
      this.helicopter &&
      (this.dispose(this.helicopter), (this.helicopter = void 0));
  }
  update(e, t) {
    var s;
    ((this.time += e),
      (this.position = t),
      (this.displayCd -= e),
      this.displayCd <= 0 && ((this.displayCd = 0.2), this.updateDistances()));
    for (const o of this.groups.values()) {
      const a = o.children[0];
      ((a.material.opacity = 0.45 + Math.sin(this.time * 3) * 0.15),
        (o.visible = Math.hypot(o.position.x - t.x, o.position.z - t.z) < 1e3));
    }
    const i = (s = this.states.get("evac")) == null ? void 0 : s.transport;
    if (i && this.helicopter) {
      this.helicopter.position.lerp(new k(i.x, i.y, i.z), 1 - Math.exp(-e * 3));
      const o = this.helicopter.getObjectByName("helicopter-rotor");
      o && (o.rotation.y += e * 35);
    }
  }
  updateDistances() {
    var e;
    for (const [t, i] of this.states) {
      const s = i.points[0],
        o =
          (e = this.cards.get(t)) == null
            ? void 0
            : e.querySelector(".op-distance"),
        a = s
          ? `${s.label} · ${Math.round(Math.hypot(s.x - this.position.x, s.z - this.position.z))} ${z.language === "en" ? "m" : "м"}`
          : "";
      o && o.textContent !== a && (o.textContent = a);
    }
  }
  dispose(e) {
    (this.scene.remove(e),
      e.traverse((t) => {
        if (t instanceof le) {
          t.geometry.dispose();
          for (const i of Array.isArray(t.material) ? t.material : [t.material])
            i.dispose();
        }
      }));
  }
  clear() {
    for (const e of ["raid", "evac", "defense", "district", "raid-choice"])
      this.receive(e, null);
  }
}
