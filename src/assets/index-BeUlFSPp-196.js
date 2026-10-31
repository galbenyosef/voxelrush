// index-BeUlFSPp 196 — position
// Lines 105475-105819 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Voe {
  constructor(e, t, i = () => {}) {
    ((this.scene = e), (this.call = t), (this.requestStatus = i));
    const n = document.getElementById("raidhud");
    (n && document.body.appendChild(n),
      da(() => {
        for (const [o, a] of this.states) this.receive(o, a);
      }));
  }
  states = new Map();
  cards = new Map();
  groups = new Map();
  helicopter;
  chatChoices = null;
  time = 0;
  displayCd = 0;
  position = { x: 0, z: 0 };
  availability = -1;
  questTitle = "";
  setAvailability(e) {
    this.availability = e;
  }
  setQuest(e) {
    this.questTitle = e;
  }
  refreshAccess() {}
  receive(e, t) {
    (t ? this.states.set(e, t) : this.states.delete(e),
      document.body.classList.toggle(
        "evac-active",
        ["evac", "defense", "district"].some((l) => this.states.has(l)),
      ),
      document.body.classList.toggle(
        "raid-voting",
        !!this.states.get("raid-choice")?.voting,
      ));
    let i = this.cards.get(e);
    if (!t) {
      (i?.remove(),
        this.cards.delete(e),
        this.syncModels(),
        this.renderChatChoices());
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
      const l = i.querySelector(".op-call");
      (l.addEventListener("pointerdown", (c) => c.stopPropagation()),
        (l.onclick = (c) => {
          (c.stopPropagation(), this.call());
        }),
        this.cards.set(e, i));
    }
    i.dataset.outcome = t.outcome ?? "";
    const n = (l, c) => {
      const h = i.querySelector(l);
      h.textContent !== c && (h.textContent = c);
    };
    ((t = vV(t)),
      n(".op-title", t.title),
      n(".op-phase", t.phase),
      n(".op-objective", t.objective),
      n(".op-detail", t.detail),
      n(
        ".op-clock",
        t.seconds
          ? `${Math.floor(t.seconds / 60)}:${String(t.seconds % 60).padStart(2, "0")}`
          : "",
      ),
      n(".op-reward", t.reward ? `$${t.reward.toLocaleString(ao())}` : ""),
      (i.querySelector(".op-progress i").style.width =
        `${Math.max(0, Math.min(1, t.progress)) * 100}%`));
    const o = i.querySelector(".op-call");
    ((o.hidden = !t.action), (o.textContent = t.action ? t.action.label : ""));
    const a = i.querySelector(".op-actions"),
      r = JSON.stringify(t.actions ?? []);
    (a.dataset.signature !== r &&
      ((a.dataset.signature = r),
      a.replaceChildren(
        ...(t.actions ?? []).map((l) => {
          const c = document.createElement("button");
          return (
            (c.type = "button"),
            (c.textContent = l.label),
            (c.title = l.command),
            (c.className = "op-call"),
            c.addEventListener("pointerdown", (h) => h.stopPropagation()),
            (c.onclick = (h) => {
              (h.stopPropagation(), this.call(l.command));
            }),
            c
          );
        }),
      )),
      i.classList.toggle("urgent", t.seconds > 0 && t.seconds <= 15),
      this.syncModels(),
      this.updateDistances(),
      this.renderChatChoices());
  }
  beginChat() {
    this.chatChoices = eM(this.states.values());
  }
  endChat() {
    this.chatChoices = null;
  }
  chooseFromChat(e) {
    if (!/^\d+$/.test(e.trim())) return null;
    const t = eM(this.states.values()),
      i = this.chatChoices ?? t;
    if (!i.length && !t.length) return null;
    const n = i.find((o) => o.number === Number(e.trim()));
    return !n ||
      !t.some((o) => o.channel === n.channel && o.command === n.command)
      ? "invalid"
      : (this.call(n.command), "selected");
  }
  renderChatChoices() {
    const e = eM(this.states.values());
    wi();
    const t = dr(Y.binds.chat);
    for (const [i, n] of this.cards) {
      const o = n.querySelector(".op-chat-choices"),
        a = e.filter((c) => c.channel === i),
        r = JSON.stringify([$0(), t, a]);
      if (
        o.dataset.signature === r ||
        ((o.dataset.signature = r), o.replaceChildren(), !a.length)
      )
        continue;
      const l = document.createElement("div");
      ((l.className = "op-chat-hint"),
        (l.textContent = jr()
          ? I(
              "Open chat, enter a number and tap Send",
              "Откройте чат, введите цифру и нажмите «Отправить»",
            )
          : I(
              `Chat [${t}]: enter a number, then Enter`,
              `Чат [${t}]: введите цифру и нажмите Enter`,
            )),
        o.append(l));
      for (const c of a) {
        const h = document.createElement("div");
        h.className = "op-chat-choice";
        const d = document.createElement("b");
        d.textContent = String(c.number);
        const u = document.createElement("span");
        ((u.textContent = c.label), h.append(d, u), o.append(h));
      }
    }
  }
  interact(e) {
    const t = this.states.get("evac"),
      i = t?.points.find((n) => n.id === "exit");
    return !t?.action ||
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
    const e = new Set();
    for (const [i, n] of this.states)
      for (const o of n.points) {
        const a = `${i}:${o.id}`;
        e.add(a);
        let r = this.groups.get(a);
        if (
          (r &&
            r.userData.kind !== o.kind &&
            (this.dispose(r), this.groups.delete(a), (r = void 0)),
          !r)
        ) {
          ((r = new re()), (r.userData.kind = o.kind));
          const l = new Ge(this.color(i, o)),
            c = new Zt({
              color: l,
              transparent: !0,
              opacity: 0.6,
              depthWrite: !1,
              side: Mi,
            }),
            h = new Q(new Z0(Math.max(0.8, o.radius - 0.18), o.radius, 48), c);
          ((h.rotation.x = -Math.PI / 2), (h.position.y = 0.1), r.add(h));
          const d = new Q(new Tt(0.07, 0.07, 9, 6), c.clone());
          if (((d.position.y = 4.5), r.add(d), o.kind === "cargo")) {
            const u = new Q(new kt(1.8, 1.2, 1.15), new Pi({ color: 4609097 }));
            ((u.position.y = 0.6), r.add(u));
            for (const p of [-0.55, 0.55]) {
              const m = new Q(
                new kt(0.12, 1.24, 1.19),
                new Pi({ color: 12888676 }),
              );
              (m.position.set(p, 0.62, 0), r.add(m));
            }
            const f = new Q(new kt(0.36, 0.16, 0.08), new Zt({ color: l }));
            (f.position.set(0, 0.85, 0.6), r.add(f));
          }
          if (o.kind === "extract") {
            for (const f of [-1, 1]) {
              const p = new Q(new kt(0.22, 0.08, 3), c.clone());
              (p.position.set(f, 0.15, 0), r.add(p));
            }
            const u = new Q(new kt(2.2, 0.08, 0.22), c.clone());
            ((u.position.y = 0.15), r.add(u));
          }
          if (["defend", "radio", "sam", "hq", "captured"].includes(o.kind)) {
            const u = (f, p, m, g, y, b, S) => {
              const M = new Q(new kt(f, p, m), new Pi({ color: S }));
              (M.position.set(g, y, b), r.add(M));
            };
            if (
              (u(2.4, 1.4, 1.5, 0, 0.7, 0, 4279365),
              u(1, 0.45, 0.08, 0, 0.95, 0.8, 10268299),
              u(0.08, 4, 0.08, -1, 2.5, 0, 8623242),
              u(
                1.4,
                0.7,
                0.07,
                -0.35,
                4.1,
                0,
                o.kind === "captured"
                  ? 6740399
                  : o.kind === "defend"
                    ? 6921168
                    : 12621404,
              ),
              o.kind === "radio")
            ) {
              const f = new Q(
                new ws(1, 12, 8, 0, Math.PI),
                new Pi({ color: 11975849, side: Mi }),
              );
              ((f.rotation.x = -0.6), f.position.set(0, 2.6, 0), r.add(f));
            }
          }
          (this.scene.add(r), this.groups.set(a, r));
        }
        r.position.set(o.x, o.y, o.z);
      }
    for (const [i, n] of this.groups)
      e.has(i) || (this.dispose(n), this.groups.delete(i));
    const t = this.states.get("evac")?.transport;
    if (t && !this.helicopter) {
      ((this.helicopter = xm(L.HELI, 0, 730)),
        this.helicopter.traverse((n) => {
          n instanceof Q &&
            ((n.geometry = n.geometry.clone()),
            (n.material = Array.isArray(n.material)
              ? n.material.map((o) => o.clone())
              : n.material.clone()));
        }));
      const i = new Q(new Tt(0.035, 0.035, 14, 6), new Zt({ color: 12569028 }));
      ((i.name = "rescue-rope"),
        (i.position.y = -7),
        this.helicopter.add(i),
        this.helicopter.position.set(t.x, t.y, t.z),
        this.scene.add(this.helicopter));
    }
    !t &&
      this.helicopter &&
      (this.dispose(this.helicopter), (this.helicopter = void 0));
  }
  update(e, t) {
    ((this.time += e),
      (this.position = t),
      (this.displayCd -= e),
      this.displayCd <= 0 && ((this.displayCd = 0.2), this.updateDistances()));
    for (const n of this.groups.values()) {
      const o = n.children[0];
      ((o.material.opacity = 0.45 + Math.sin(this.time * 3) * 0.15),
        (n.visible = Math.hypot(n.position.x - t.x, n.position.z - t.z) < 1e3));
    }
    const i = this.states.get("evac")?.transport;
    if (i && this.helicopter) {
      this.helicopter.position.lerp(new k(i.x, i.y, i.z), 1 - Math.exp(-e * 3));
      const n = this.helicopter.getObjectByName("helicopter-rotor");
      n && (n.rotation.y += e * 35);
    }
  }
  updateDistances() {
    for (const [e, t] of this.states) {
      const i = t.points[0],
        n = this.cards.get(e)?.querySelector(".op-distance"),
        o = i
          ? `${i.label} · ${Math.round(Math.hypot(i.x - this.position.x, i.z - this.position.z))} ${I("m", "м")}`
          : "";
      n && n.textContent !== o && (n.textContent = o);
    }
  }
  dispose(e) {
    (this.scene.remove(e),
      e.traverse((t) => {
        if (t instanceof Q) {
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
const SE = 26,
  mC = 2 * Math.PI * SE;
