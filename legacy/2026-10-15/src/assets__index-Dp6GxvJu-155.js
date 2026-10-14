// assets__index-Dp6GxvJu 155 — math
// Lines 92269-92762 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class wQ {
  constructor(e, t) {
    w(this, "models", new Map());
    w(this, "states", new Map());
    w(this, "seats", []);
    w(this, "speech", new pQ());
    w(this, "panel");
    w(this, "current");
    w(this, "time", 0);
    w(this, "lights", new WeakMap());
    w(this, "position", new k());
    w(this, "pendingAt", 0);
    w(this, "pending", !1);
    w(this, "nextList", 0);
    w(this, "wasNear", !1);
    w(this, "amount", 25);
    w(this, "chipFresh", !0);
    w(this, "lastRound", -1);
    w(this, "offset", 0);
    w(this, "blend", 0);
    w(this, "enabled", !0);
    w(this, "pose");
    w(this, "onKey", (e) => {
      var i, s, o;
      if (
        !this.open ||
        this.hooks.chatOpen() ||
        ((i = e.target) != null &&
          i.closest("input,textarea,select,[contenteditable]"))
      )
        return;
      if (e.code === z.binds.chat || e.code === "Enter" || e.code === "Slash") {
        (e.preventDefault(),
          e.stopImmediatePropagation(),
          this.hooks.openChat(e.code === "Slash" ? "/" : ""));
        return;
      }
      if (e.code === "Escape") {
        (e.preventDefault(),
          e.stopImmediatePropagation(),
          this.act("bj-leave"));
        return;
      }
      if ((s = e.target) != null && s.closest("input")) return;
      const t = {
        KeyB: "bj-bet",
        KeyH: "bj-hit",
        KeyS: "bj-stand",
        KeyD: "bj-double",
        KeyP: "bj-split",
      };
      if (t[e.code]) {
        (e.preventDefault(), e.stopImmediatePropagation());
        const a =
          (o = this.panel) == null
            ? void 0
            : o.querySelector(`[data-action="${t[e.code]}"]`);
        a && !a.disabled && this.act(t[e.code]);
      }
    });
    ((this.scene = e),
      (this.hooks = t),
      document.addEventListener("keydown", this.onKey, !0));
  }
  get open() {
    return !!this.panel;
  }
  setSites(e) {
    this.seats = e.flatMap(AH);
    for (const [t, i] of this.models)
      e.some(
        (s) =>
          s.id === i.site.id && JSON.stringify(s) === JSON.stringify(i.site),
      ) || (i.dispose(), this.models.delete(t));
    for (const t of e)
      !t.game &&
        (t.layout ?? 1) >= 2 &&
        bp.forEach((i, s) => {
          const o = SS(t.id, s);
          if (this.models.has(o)) return;
          const a = new yQ(t, s);
          (this.models.set(o, a), this.scene.add(a.group));
          const r = this.states.get(o);
          r && a.receive(r, this.time);
        });
  }
  target(e, t) {
    if (!this.enabled || this.open) return null;
    const i = new Gr(e, t),
      s = new k();
    let o = 4.5,
      a = null;
    for (const r of this.seats) {
      if (Math.hypot(r.x - e.x, r.z - e.z) > 5) continue;
      const l = new gn(
        new k(r.x - 0.34, r.y + 0.08, r.z - 0.34),
        new k(r.x + 0.34, r.y + 1.08, r.z + 0.34),
      );
      if (!i.intersectBox(l, s)) continue;
      const c = e.distanceTo(s);
      c < o &&
        !this.hooks.raycast(e, t, Math.max(0, c - 0.08)) &&
        ((o = c), (a = r));
    }
    if (!a)
      for (const [r, l] of this.models) {
        const c = l.group.worldToLocal(e.clone()),
          h = t
            .clone()
            .transformDirection(new bt().copy(l.group.matrixWorld).invert());
        if (
          !new Gr(c, h).intersectBox(
            new gn(new k(-1.35, 0.8, -0.55), new k(1.35, 1, 0.85)),
            s,
          )
        )
          continue;
        l.group.localToWorld(s);
        const d = e.distanceTo(s);
        if (d >= o || this.hooks.raycast(e, t, d - 0.08)) continue;
        const u = this.seats.filter((f) => {
          var p;
          return (
            f.table === r &&
            f.kind === "blackjack" &&
            !((p = this.states.get(r)) != null && p.seats[f.index])
          );
        });
        (u.sort(
          (f, p) =>
            Math.hypot(f.x - e.x, f.z - e.z) - Math.hypot(p.x - e.x, p.z - e.z),
        ),
          u[0] && ((o = d), (a = u[0])));
      }
    return a;
  }
  interact(e, t) {
    const i = this.target(e, t);
    return i
      ? (this.pending ||
          ((this.pending = !0),
          (this.pendingAt = performance.now()),
          this.hooks.send({
            action: i.kind === "blackjack" ? "bj-seat" : "casino-seat",
            seat: i.id,
          })),
        !0)
      : !1;
  }
  receive(e) {
    var a, r, l;
    if (e.type === "blackjack-error") {
      ((this.pending = !1), this.hooks.notify(e.message), this.render());
      return;
    }
    if (e.type !== "blackjack") return;
    const t = e.state,
      i = this.states.get(t.table);
    if (i && t.version < i.version) return;
    (this.states.set(t.table, t), (this.offset = t.serverTime - Date.now()));
    const s = this.models.get(t.table);
    if (
      (s == null || s.receive(t, this.time),
      i && t.version !== i.version && s && this.enabled)
    ) {
      const c = s.position.distanceTo(this.position);
      if (c < 18) {
        const h =
          t.event === "bet"
            ? "chips"
            : t.event === "deal"
              ? "card"
              : t.event === "result"
                ? "win"
                : t.event === "shuffle"
                  ? "shuffle"
                  : t.event === "turn"
                    ? "turn"
                    : null;
        h && ((r = (a = this.hooks).sound) == null || r.call(a, h, c));
      }
    }
    const o = t.seats.some(
      (c) =>
        (c == null ? void 0 : c.player) === this.hooks.playerId() &&
        c.connected,
    );
    (o &&
      this.panel &&
      (i == null ? void 0 : i.version) === t.version &&
      !this.pending) ||
      (o
        ? (this.speech.receive(t, i, this.hooks.playerId()),
          (this.current = t),
          (this.pending = !1),
          this.panel || this.show(),
          this.render())
        : ((l = this.current) == null ? void 0 : l.table) === t.table &&
          this.close());
  }
  en(e, t) {
    return this.hooks.language() === "en" ? e : t;
  }
  show() {
    ((this.panel = document.createElement("div")),
      (this.panel.className = "fc-modal blackjack-panel"),
      this.panel.setAttribute("role", "region"),
      this.panel.setAttribute(
        "aria-label",
        this.en("Blackjack table", "Стол блэкджека"),
      ),
      document.body.append(this.panel),
      this.panel.addEventListener("pointerdown", (e) => e.stopPropagation()),
      this.panel.addEventListener("mousedown", (e) => e.stopPropagation()),
      this.panel.addEventListener("click", (e) => {
        const t = e.target.closest("button");
        if (!(!t || t.disabled)) {
          if ((e.stopPropagation(), t.dataset.chat !== void 0)) {
            this.hooks.openChat();
            return;
          }
          if (t.dataset.speech !== void 0) {
            (this.speech.toggle(), this.render());
            return;
          }
          if (t.dataset.bet) {
            const i = Number(t.dataset.bet);
            ((this.amount = Math.min(pf, this.chipFresh ? i : this.amount + i)),
              (this.chipFresh = !1),
              this.render());
            return;
          }
          if (t.dataset.betop) {
            const i = t.dataset.betop;
            ((this.amount =
              i === "clear"
                ? kh
                : i === "double"
                  ? Math.min(pf, this.amount * 2)
                  : i === "half"
                    ? Math.max(kh, Math.floor(this.amount / 2))
                    : Math.max(
                        kh,
                        Math.min(pf, Math.floor(this.hooks.balance())),
                      )),
              (this.chipFresh = i === "clear"),
              this.render());
            return;
          }
          t.dataset.action && this.act(t.dataset.action);
        }
      }),
      document.body.classList.add("blackjack-playing"),
      this.hooks.unlock(),
      (this.blend = 0));
  }
  act(e) {
    var i;
    if (!this.current || this.pending || e === "bj-list" || e === "bj-seat")
      return;
    const t = (i = this.panel) == null ? void 0 : i.querySelector("input");
    (t && (this.amount = Number(t.value)),
      (this.pending = !0),
      (this.pendingAt = performance.now()),
      this.hooks.send({
        action: e,
        table: this.current.table,
        round: this.current.round,
        version: this.current.version,
        amount: this.amount,
      }),
      this.render());
  }
  render() {
    var S, M;
    const e = this.panel,
      t = this.current;
    if (!e || !t) return;
    const i = t.seats.findIndex(
        (x) => (x == null ? void 0 : x.player) === this.hooks.playerId(),
      ),
      s = t.seats[i];
    if (!s) return;
    t.round !== this.lastRound &&
      ((this.lastRound = t.round), (this.chipFresh = !0));
    const o = s.hands[t.hand] ?? s.hands[0],
      a = t.phase === "players" && t.turn === i,
      r = {
        waiting: this.en("Place your bet", "Сделайте ставку"),
        betting: this.en("Bets are open", "Приём ставок"),
        dealing: this.en("Dealer is dealing", "Крупье раздаёт карты"),
        players: a
          ? this.en("Your move", "Ваш ход")
          : this.en("Waiting for ", "Ход игрока ") +
            (((S = t.seats[t.turn]) == null ? void 0 : S.name) ?? ""),
        dealer: this.en("Dealer reveals", "Ход крупье"),
        result: this.en("Round complete", "Раздача завершена"),
      }[t.phase],
      l = (x, T, A, _, C = !1) =>
        `<button class="bj-act ${_}" data-action="${x}" ${C || this.pending ? "disabled" : ""}><b>${T}</b><kbd>${A}</kbd></button>`,
      c = ["waiting", "betting"].includes(t.phase) && !s.hands.length,
      h = this.hooks.balance(),
      d = Math.max(kh, Math.min(pf, this.amount || kh)),
      u =
        a &&
        (o == null ? void 0 : o.cards.length) === 2 &&
        h >= ((o == null ? void 0 : o.bet) ?? 0),
      f =
        a &&
        s.hands.length === 1 &&
        (o == null ? void 0 : o.cards.length) === 2 &&
        $p(o.cards[0]) === $p(o.cards[1]) &&
        h >= ((o == null ? void 0 : o.bet) ?? 0),
      p =
        a && o && t.dealer[0] !== void 0 && t.dealer[0] >= 0
          ? bQ(o.cards, t.dealer[0], !!u, !!f)
          : null,
      m = p
        ? {
            hit: this.en("Hit", "Ещё"),
            stand: this.en("Stand", "Хватит"),
            double: this.en("Double", "Удвоить"),
            split: this.en("Split", "Разделить"),
          }[p]
        : "",
      y = t.dealer.includes(-1)
        ? t.dealer.filter((x) => x >= 0).length
          ? Pd(t.dealer.filter((x) => x >= 0)).total + "+?"
          : "?"
        : t.dealer.length
          ? String(Pd(t.dealer).total)
          : "",
      g = s.hands
        .map((x, T) => {
          const A = Pd(x.cards),
            _ = A.total > 21;
          return `<div class="bj-hand ${a && t.hand === T ? "active" : ""} ${x.outcome ?? ""}"><div class="bj-hand-head"><small>${this.en("YOUR HAND", "ВАША РУКА")}${s.hands.length > 1 ? " " + (T + 1) : ""}</small><span class="bj-bet-tag">${mf(x.bet)}</span></div><div class="bj-cards">${x.cards.map(w_).join("") || '<span class="bj-card empty"></span>'}</div><span class="bj-total ${_ ? "bust" : ""}">${x.cards.length ? (A.soft && A.total < 21 ? this.en("Soft ", "Мягкие ") + A.total : A.total) : "—"}</span>${x.outcome ? `<span class="bj-outcome">${this.outcome(x.outcome)}${x.payout ? ` · +${mf(x.payout)}` : ""}</span>` : ""}</div>`;
        })
        .join("");
    ((e.innerHTML = `<div class="bj-heading"><div class="bj-brand"><small>OLYMPUS CASINO</small><strong>BLACKJACK</strong><em>${this.en("pays 3:2", "выплата 3:2")}</em></div><div class="bj-wallet"><small>${this.en("WALLET", "КОШЕЛЁК")}</small><b>${mf(h)}</b></div><div class="bj-tools"><button data-chat title="${this.en("Chat · Enter", "Чат · Enter")}">${this.en("Chat", "Чат")}</button><button data-speech aria-pressed="${this.speech.enabled}" title="${this.en("Dealer voice", "Голос крупье")}">${this.speech.enabled ? "🔊" : "🔇"}</button><button class="bj-leave" data-action="bj-leave" ${this.pending ? "disabled" : ""}>${this.en("Stand up", "Встать")}<kbd>Esc</kbd></button></div></div>
      <div class="bj-dock"><div class="bj-banner ${a ? "yours" : ""} phase-${t.phase}"><svg class="bj-ring" viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="15.5"/><circle class="bj-ring-fill" cx="18" cy="18" r="15.5"/></svg><time></time><span class="bj-phase"></span></div>
        <div class="bj-players"></div>
        <div class="bj-table"><div class="bj-hand dealer"><div class="bj-hand-head"><small>${this.en("DEALER", "КРУПЬЕ")}</small><span class="bj-rule">${this.en("stands on 17", "стоп на 17")}</span></div><div class="bj-cards">${t.dealer.map(w_).join("") || '<span class="bj-card empty"></span>'}</div><span class="bj-total ${!t.dealer.includes(-1) && Pd(t.dealer).total > 21 ? "bust" : ""}">${y || "—"}</span></div>${g || `<div class="bj-hand"><div class="bj-hand-head"><small>${this.en("YOUR HAND", "ВАША РУКА")}</small></div><div class="bj-cards"><span class="bj-card empty"></span></div><span class="bj-total">—</span></div>`}</div>
        ${
          c
            ? `<div class="bj-bets"><div class="bj-chips">${vQ.map((x) => `<button class="bj-chip c${x}" data-bet="${x}" ${x > h ? "disabled" : ""} aria-label="${this.en("Add", "Добавить")} ${mf(x)}"><span>${x >= 1e3 ? x / 1e3 + "K" : x}</span></button>`).join("")}</div><div class="bj-bet-row"><label class="bj-bet-amount"><small>${this.en("YOUR BET", "СТАВКА")}</small><input type="number" min="${kh}" max="${pf}" step="1" value="${d}" aria-label="${this.en("Bet amount", "Размер ставки")}"></label><div class="bj-bet-ops"><button data-betop="half">½</button><button data-betop="double">×2</button><button data-betop="max">${this.en("Max", "Макс")}</button><button data-betop="clear">${this.en("Clear", "Сброс")}</button></div>${l("bj-bet", this.en("Deal", "Ставка"), "B", "primary", h < kh || d > h)}</div></div>`
            : `<div class="bj-actions">${l("bj-hit", this.en("Hit", "Ещё"), "H", "hit", !a)}${l("bj-stand", this.en("Stand", "Хватит"), "S", "stand", !a)}${l("bj-double", this.en("Double", "Удвоить"), "D", "double", !u)}${l("bj-split", this.en("Split", "Разделить"), "P", "split", !f)}</div>
        <p class="bj-tip">${p ? `${this.en("Basic strategy suggests", "Базовая стратегия советует")}: <b data-tip="${p}">${m}</b>` : ""}</p>`
        }
        <details><summary>${this.en("Table rules", "Правила стола")}</summary><p>${this.en("Six decks · Blackjack pays 3:2 · Dealer stands on soft 17 · Double on any first two cards · One split, split aces receive one card · No insurance · 25 seconds per turn, then automatic stand. Leaving before the deal refunds your bet; after the deal your hands stand and the server settles them. In-game money only.", "Шесть колод · Блэкджек 3:2 · Крупье останавливается на мягких 17 · Удвоение на первых двух картах · Одно разделение; разделённым тузам — по одной карте · Без страховки · 25 секунд на ход, затем «хватит». До раздачи выход возвращает ставку; после раздачи сервер завершает ваши руки и начисляет выигрыш. Только игровые деньги.")}</p></details></div>`),
      (e.querySelector(".bj-phase").textContent = r));
    const b = e.querySelector(".bj-players");
    (t.seats.forEach((x, T) => {
      if (!x || x.player === this.hooks.playerId()) return;
      const A = document.createElement("span");
      ((A.textContent =
        x.name + " · " + mf(x.hands.reduce((_, C) => _ + C.bet, 0))),
        A.classList.toggle("active", t.turn === T),
        b.append(A));
    }),
      (M = e.querySelector("input")) == null ||
        M.addEventListener("change", (x) => {
          ((this.amount = Number(x.target.value)), (this.chipFresh = !1));
        }));
  }
  outcome(e) {
    const t = {
      blackjack: "БЛЭКДЖЕК",
      win: "ПОБЕДА",
      push: "ВОЗВРАТ",
      lose: "ПРОИГРЫШ",
      bust: "ПЕРЕБОР",
    };
    return this.en(e.toUpperCase(), t[e] ?? e);
  }
  update(e, t, i, s, o) {
    var T;
    ((this.time = performance.now() / 1e3),
      (this.enabled = o),
      this.position.copy(t),
      this.pending &&
        performance.now() - this.pendingAt > 4e3 &&
        ((this.pending = !1), this.render()));
    let a = !1;
    for (const A of this.models.values()) {
      const _ = A.position.distanceTo(t);
      if (((A.group.visible = o && _ < 65), A.group.visible)) {
        let C = this.lights.get(A);
        ((!C || this.time - C.at >= 0.15) &&
          ((C = {
            at: this.time,
            probe: this.hooks.entityLighting(
              A.position.x,
              A.position.y + 1,
              A.position.z,
            ),
          }),
          this.lights.set(A, C)),
          A.update(
            this.time,
            C.probe,
            ((T = this.current) == null ? void 0 : T.table) === A.table,
          ));
      }
      o && _ < 35 && (a = !0);
    }
    if (
      (a &&
        s &&
        (!this.wasNear || this.time > this.nextList) &&
        ((this.nextList = this.time + 10),
        this.hooks.send({ action: "bj-list" })),
      (this.wasNear = a),
      this.open && (!s || !o))
    ) {
      this.close();
      return;
    }
    if (!this.open || !this.current) return;
    const r = this.panel.querySelector("time"),
      l = this.current.deadline
        ? Math.max(
            0,
            Math.ceil((this.current.deadline - Date.now() - this.offset) / 1e3),
          )
        : 0;
    ((r.textContent = l ? String(l) : ""),
      r.classList.toggle("urgent", l > 0 && l <= 5));
    const c = this.current.phase === "players" ? gQ : mQ,
      h = this.panel.querySelector(".bj-ring-fill");
    if (h) {
      const A = this.current.deadline
        ? Math.max(0, this.current.deadline - Date.now() - this.offset)
        : 0;
      ((h.style.strokeDashoffset = String(97.4 * (1 - Math.min(1, A / c)))),
        h.parentElement.classList.toggle("idle", !A));
    }
    const d = this.models.get(this.current.table);
    if (!d) return;
    if (d.position.distanceTo(t) > 7) {
      this.close();
      return;
    }
    this.pose ||
      (this.pose = {
        position: i.position.clone(),
        quaternion: i.quaternion.clone(),
      });
    const u = this.current.seats.findIndex(
        (A) => (A == null ? void 0 : A.player) === this.hooks.playerId(),
      ),
      f = this.seats.find(
        (A) =>
          A.table === this.current.table &&
          A.kind === "blackjack" &&
          A.index === u,
      );
    if (!f) return;
    const p = Math.tan(fi.degToRad(i.fov) * 0.5) * i.aspect,
      m = Math.max(2.45, 1.6 / p),
      y = 1.8,
      g = new k(f.x - d.position.x, 0, f.z - d.position.z).normalize(),
      b = d.position.clone().add(new k(0, 1.04, 0)),
      S = d.position.clone().addScaledVector(g, y);
    S.y = b.y + Math.min(7, Math.sqrt(Math.max(0, m * m - y * y)));
    const M = new Jt().setFromRotationMatrix(
      new bt().lookAt(S, b, new k(0, 1, 0)),
    );
    this.blend = Math.min(1, this.blend + e * 2);
    const x = 1 - (1 - this.blend) ** 3;
    (i.position.lerpVectors(this.pose.position, S, x),
      i.quaternion.copy(this.pose.quaternion).slerp(M, x),
      i.updateMatrixWorld());
  }
  close() {
    var t;
    this.speech.stop();
    const e = this.open;
    (e && document.body.classList.remove("blackjack-playing"),
      (t = this.panel) == null || t.remove(),
      (this.panel = void 0),
      (this.current = void 0),
      (this.pose = void 0),
      (this.pending = !1),
      e && this.hooks.lock());
  }
  dispose() {
    (this.close(),
      this.speech.dispose(),
      this.models.forEach((e) => e.dispose()),
      this.models.clear(),
      document.removeEventListener("keydown", this.onKey, !0));
  }
}
