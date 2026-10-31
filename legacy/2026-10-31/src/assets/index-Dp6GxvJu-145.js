// index-Dp6GxvJu 145 — append
// Lines 88059-88817 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class yZ {
  constructor(e) {
    w(this, "root");
    w(this, "podium", null);
    w(this, "plates", new Map());
    w(this, "hero");
    w(this, "dock");
    w(this, "board");
    w(this, "reel");
    w(this, "nextEl");
    w(this, "nextBar");
    w(this, "shownAt", 0);
    w(this, "next", 0);
    w(this, "msg", null);
    w(this, "team", 1);
    w(this, "tdm", !1);
    w(this, "pendingDrops", []);
    w(this, "reelBusy", !1);
    w(this, "bandAt", 0);
    w(this, "timers", []);
    w(this, "onResize", () => {
      this.bandAt = 0;
    });
    w(this, "voteMsg", null);
    w(this, "voteEl", null);
    w(this, "voteCards", new Map());
    w(this, "voteAt", 0);
    w(this, "voteClock", null);
    w(this, "ticker");
    w(this, "tickerQueue", []);
    w(this, "tickerBusy", !1);
    ((this.deps = e),
      (this.root = wt("div", "front-end me-screen hidden")),
      this.root.setAttribute("role", "dialog"),
      addEventListener("resize", this.onResize),
      addEventListener("keydown", (t) => {
        var o;
        if (
          !this.open ||
          !this.voteMsg ||
          this.voteMsg.win ||
          t.repeat ||
          t.ctrlKey ||
          t.metaKey ||
          t.altKey
        )
          return;
        const i = (o = /^Digit([1-4])$/.exec(t.code)) == null ? void 0 : o[1],
          s = i ? this.voteMsg.o[Number(i) - 1] : void 0;
        s && (t.preventDefault(), this.castVote(s[0]));
      }));
  }
  say(e, t) {
    return this.deps.lang() === "en" ? e : t;
  }
  get open() {
    return !this.root.classList.contains("hidden");
  }
  later(e, t) {
    this.timers.push(window.setTimeout(t, e));
  }
  show(e, t, i, s = !1) {
    var d, u, f, p;
    (this.clearTimers(),
      (this.msg = e),
      (this.team = t),
      (this.tdm = i),
      (this.shownAt = performance.now() - (s ? 6e3 : 0)),
      (this.next = e.next),
      (this.pendingDrops = []),
      (this.reelBusy = !1),
      (this.tickerQueue = []),
      (this.tickerBusy = !1));
    const o = e.win === 0 ? "draw" : e.win === t ? "win" : "loss",
      a = this.root;
    ((a.dataset.result = o),
      (a.dataset.stage = s ? "all" : "intro"),
      a.classList.toggle("me-late", s),
      a.replaceChildren(),
      a.append(wt("div", "me-shade"), wt("div", "me-flash")),
      (this.hero = this.buildHero(e, t, i, o)));
    const r = wt("div", "me-stage"),
      l = wt("div", "me-plates");
    this.plates.clear();
    for (const m of [2, 1, 3]) {
      const y = (d = e.pod) == null ? void 0 : d[m - 1];
      if (!y) continue;
      const g = this.buildPlate(y, m, e.me);
      (l.append(g), this.plates.set(m, g));
    }
    (r.append(l),
      (this.dock = this.buildDock(e, i)),
      (this.voteEl = null),
      (this.voteClock = null),
      this.voteCards.clear(),
      this.voteMsg && this.renderVote(),
      (this.board = this.buildBoard(e)),
      (this.reel = wt("div", "me-reel hidden")),
      a.append(this.hero, r, this.dock, this.board, this.reel));
    const c = e.win ? Rc(e.win, this.team) : "#ffb547",
      h = (e.pod ?? []).slice(0, 3).map((m, y) => ({
        place: y + 1,
        name: m.n,
        team: m.t,
        bot: !!m.b,
        cls: m.c,
        ally: m.t === t,
        character: m.ch,
        custom: m.cu,
        weaponSkin: m.ws,
        armorSkins: m.ar,
      }));
    if (
      (h.length
        ? (this.podium ??
            (this.podium = new pZ(this.deps.atlas(), this.deps.high())),
          this.podium.show(h, c, s, o !== "loss"))
        : (u = this.podium) == null || u.hide(),
      a.classList.toggle("me-no-podium", !h.length),
      (this.bandAt = 0),
      s)
    ) {
      this.countUp(!0);
      for (const m of this.plates.values()) m.classList.add("on");
    } else {
      (p = (f = this.deps.sfx).matchEnd) == null || p.call(f, o);
      for (const [m, y] of [
        [3, 900],
        [2, 1550],
        [1, 2250],
      ])
        this.plates.has(m) &&
          this.later(y + 380, () => {
            var g, b, S;
            ((b = (g = this.deps.sfx).podiumHit) == null || b.call(g, m),
              (S = this.plates.get(m)) == null || S.classList.add("on"));
          });
      (this.later(3e3, () => {
        ((a.dataset.stage = "dock"), this.countUp());
      }),
        this.later(4300, () => {
          ((a.dataset.stage = "all"), this.flushDrops());
        }));
    }
    this.later(s ? 0 : 5200, () => this.maybeGuest());
  }
  buildHero(e, t, i, s) {
    const o = wt("header", "me-hero"),
      a =
        s === "win"
          ? this.say("VICTORY", "ПОБЕДА")
          : s === "loss"
            ? this.say("DEFEAT", "ПОРАЖЕНИЕ")
            : this.say("DRAW", "НИЧЬЯ"),
      r = wt("h1", "me-title");
    (r.setAttribute("aria-label", a),
      [...a].forEach((d, u) => {
        const f = wt("span", "", d);
        (f.style.setProperty("--i", String(u)), r.append(f));
      }));
    const l = wt("div", "me-score"),
      c = wt("b", "", String(e.tk[t - 1])),
      h = wt("b", "", String(e.tk[Al(t) - 1]));
    return (
      (c.style.color = Rc(t, this.team)),
      (h.style.color = Rc(Al(t), this.team)),
      (c.title = dg[t][this.deps.lang()]),
      (h.title = dg[Al(t)][this.deps.lang()]),
      l.append(c, wt("i", "", ":"), h),
      o.append(r, l),
      o
    );
  }
  buildPlate(e, t, i) {
    const s = wt("div", `me-plate me-p${t}`);
    (s.style.setProperty("--team", Rc(e.t, this.team)),
      i && e.n === i && s.classList.add("me-mine"));
    const o = wt("div", "me-phead");
    return (
      o.append(wt("i", "me-medal", String(t)), wt("b", "me-pname", e.n)),
      s.append(o, wt("div", "me-pscore", e.s.toLocaleString())),
      s
    );
  }
  buildDock(e, t) {
    const i = wt("section", "me-dock");
    this.ticker = wt("div", "me-ticker");
    const s = wt("div", "me-bar"),
      o = wt("div", "me-you");
    if (e.mine) {
      const [d, u, , f = 0, p = 0] = e.mine,
        m = e.top.findIndex((S) => S[0] === e.me);
      m >= 0 && o.append(wt("span", "me-place", `#${m + 1}`));
      const y = wt("span", "me-stats"),
        g = wt("span", "me-stat me-stat-score");
      (g.append(
        this.counter(d),
        wt("small", "me-long", this.say("pts", "очк.")),
      ),
        y.append(g),
        o.append(y));
      const b = (S, M, x, T) => {
        const A = wt("span", "me-stat");
        return (
          A.append(
            this.counter(S),
            wt("small", "me-long", this.say(M, x)),
            wt("small", "me-short", T),
          ),
          (A.title = this.say(M, x)),
          A
        );
      };
      if (
        (y.append(
          b(u, "kills", "убийств", this.say("K", "У")),
          b(f, "assists", "помощь", this.say("A", "П")),
          b(p, "vehicles", "техника", this.say("V", "Т")),
        ),
        e.rw && (e.rw[0] > 0 || e.rw[1] > 0))
      ) {
        const S = wt("span", "me-pay");
        e.rw[0] > 0 && S.append(this.counter(e.rw[0], "money"));
        const M = e.rw[1] > 0 ? cU() : 1;
        if (e.rw[1] > 0) {
          const x = this.counter(e.rw[1] * M, "plus");
          (x.classList.add("me-gold"), S.append(x));
        }
        if (M > 1) {
          const x = wt("i", "me-golden", `×${M}`);
          ((x.title = this.say(
            "Golden hour: double gold",
            "Золотой час: двойное золото",
          )),
            S.append(x));
        }
        o.append(S);
      }
    } else
      o.append(
        wt(
          "span",
          "me-stat",
          this.say(
            "You joined after the whistle",
            "Вы зашли после финального свистка",
          ),
        ),
      );
    const a = wt("div", "me-actions"),
      r = wt("div", "me-next");
    ((this.nextEl = wt("span", "me-next-text")),
      (this.nextBar = wt("i", "me-next-bar")));
    const l = wt("div", "me-next-track");
    (l.append(this.nextBar), r.append(this.nextEl, l));
    const c = wt(
      "button",
      "me-btn",
      this.say("Leaderboard", "Таблица лидеров"),
    );
    ((c.type = "button"),
      c.addEventListener("click", () => {
        (this.board.classList.toggle("hidden"), this.deps.sfx.uiTick(!0));
      }));
    const h = wt("button", "me-btn me-btn-ghost", this.say("Menu", "Меню"));
    return (
      (h.type = "button"),
      h.addEventListener("click", () => this.deps.openMenu()),
      a.append(r, c, h),
      s.append(o, a),
      i.append(this.ticker, s),
      i
    );
  }
  counter(e, t = "") {
    const i = wt(
      "b",
      "me-count",
      t === "money" ? "+$0" : t === "plus" ? "+0" : "0",
    );
    return ((i.dataset.to = String(e)), t && (i.dataset.fmt = t), i);
  }
  buildBoard(e) {
    const t = wt("div", "me-board hidden"),
      i = wt("div", "me-board-panel"),
      s = wt("div", "me-board-head");
    s.append(wt("b", "", this.say("Leaderboard", "Таблица лидеров")));
    const o = wt("button", "me-x", "×");
    ((o.type = "button"),
      o.setAttribute("aria-label", this.say("Close", "Закрыть")),
      o.addEventListener("click", () => t.classList.add("hidden")),
      s.append(o));
    const a = wt("div", "me-table"),
      r = wt("div", "me-row me-hdr");
    for (const l of [
      "#",
      this.say("Soldier", "Боец"),
      this.say("Score", "Очки"),
      "K",
      "A",
      "D",
      this.say("Veh", "Техн."),
    ])
      r.append(wt("span", "", l));
    if (
      (a.append(r),
      e.top.forEach((l, c) => {
        const h = wt("div", "me-row");
        (h.style.setProperty("--team", Rc(l[1], this.team)),
          e.me && l[0] === e.me && h.classList.add("me-row-mine"));
        const d = wt("span", "me-row-name", l[0]);
        (l[7] && d.append(wt("em", "me-tag", "AI")),
          h.append(
            wt("span", "me-row-n", String(c + 1)),
            d,
            wt("span", "", l[2].toLocaleString()),
            wt("span", "", String(l[3])),
            wt("span", "", String(l[5] ?? 0)),
            wt("span", "", String(l[4])),
            wt("span", "", String(l[6] ?? 0)),
          ),
          a.append(h));
      }),
      e.mine)
    ) {
      const [l, c, h, d = 0, u = 0] = e.mine,
        f = wt("div", "me-board-mine"),
        p = (m, y, g) => {
          const b = wt("div", "me-bm-tile");
          return (
            b.append(
              wt("b", "", m.toLocaleString()),
              wt("span", "", this.say(y, g)),
            ),
            b
          );
        };
      (f.append(
        p(l, "Score", "Очки"),
        p(c, "Kills", "Убийства"),
        p(d, "Assists", "Помощь"),
        p(h, "Deaths", "Смерти"),
        p(u, "Vehicles", "Техника"),
      ),
        i.append(s, f, a));
    } else i.append(s, a);
    return (
      t.append(i),
      t.addEventListener("click", (l) => {
        l.target === t && t.classList.add("hidden");
      }),
      t
    );
  }
  countUp(e = !1) {
    const t = [...this.root.querySelectorAll(".me-count")],
      i = performance.now(),
      s = e ? 0 : 1100,
      o = (r, l) =>
        r.dataset.fmt === "money"
          ? `+$${l.toLocaleString()}`
          : r.dataset.fmt === "plus"
            ? `+${l.toLocaleString()}`
            : l.toLocaleString(),
      a = () => {
        const r = s ? Math.min(1, (performance.now() - i) / s) : 1,
          l = 1 - Math.pow(1 - r, 3);
        for (const c of t)
          c.textContent = o(c, Math.round(Number(c.dataset.to ?? 0) * l));
        r < 1 && this.open && requestAnimationFrame(a);
      };
    a();
  }
  addDrop(e) {
    this.msg &&
      (this.pendingDrops.push(e),
      e.n === this.msg.me && this.deps.onOwnDrop(),
      this.root.dataset.stage === "all" && this.flushDrops());
  }
  dropName(e) {
    const t = uo(e.sk),
      i = gZ[e.w];
    return {
      item: i ? this.say(...i) : this.deps.itemName(e.w),
      finish: t ? this.say(t.name, t.ru) : e.sk,
      rarity: (t == null ? void 0 : t.rarity) ?? "rare",
    };
  }
  skinIcon(e, t, i = 64) {
    const s = document.createElement("canvas");
    s.width = s.height = 40;
    const o = s.getContext("2d");
    try {
      (this.deps.drawIcon(o, e), ik(o, t));
    } catch {}
    return s;
  }
  flushDrops() {
    if (this.reelBusy) return;
    const e = this.pendingDrops.findIndex((t) => {
      var i;
      return t.n === ((i = this.msg) == null ? void 0 : i.me);
    });
    if (e >= 0) {
      const [t] = this.pendingDrops.splice(e, 1);
      this.spinReel(t);
      return;
    }
    for (; this.pendingDrops.length;) {
      const t = this.pendingDrops.shift();
      this.listDrop(t, !1);
    }
  }
  listDrop(e, t) {
    if (t) return;
    const { item: i, finish: s, rarity: o } = this.dropName(e),
      a = wt("div", "me-tick");
    (a.style.setProperty("--rarity", RARITIES[o].color),
      a.append(
        this.skinIcon(e.w, e.sk),
        wt("b", "", e.n),
        wt("span", "", this.say("found", "нашёл")),
        wt("em", "", `${i} | ${s}`),
      ),
      this.tickerQueue.push(a),
      this.pumpTicker());
  }
  pumpTicker() {
    if (this.tickerBusy) return;
    const e = this.tickerQueue.shift();
    e &&
      ((this.tickerBusy = !0),
      this.ticker.replaceChildren(e),
      this.deps.sfx.uiTick(!1),
      this.later(3200, () => {
        ((this.tickerBusy = !1),
          this.tickerQueue.length &&
            (e.classList.add("out"), this.later(250, () => this.pumpTicker())));
      }));
  }
  spinReel(e) {
    var b;
    this.reelBusy = !0;
    const { item: t, finish: i, rarity: s } = this.dropName(e),
      o = RARITIES[s].tier,
      a = this.reel;
    (a.replaceChildren(), a.classList.remove("hidden", "done"));
    const r = wt("div", "me-reel-card");
    (r.style.setProperty("--rarity", RARITIES[s].color),
      r.append(
        wt(
          "div",
          "me-reel-kicker",
          this.say("FIELD DROP · YOURS", "ТРОФЕЙ · ВАШ"),
        ),
      ));
    const l = wt("div", "me-reel-window"),
      c = wt("div", "me-reel-strip"),
      h = this.deps.mobile ? 34 : 44,
      d = h - 6;
    let u = (e.sk.length * 7919 + e.w) % 2147483647 || 1;
    const f = () => (u = (u * 16807) % 2147483647) / 2147483647,
      p = [],
      m = Array.from({ length: 9 }, () =>
        gU(Gd, (S, M) => fU(S, [], M).weapon, f(), f(), f()),
      );
    for (let S = 0; S < h; S++) {
      const M =
          S === d
            ? { skin: e.sk, weapon: e.w, rarity: s }
            : m[Math.floor(f() * m.length)],
        x = wt("div", "me-reel-cell");
      (x.style.setProperty(
        "--rarity",
        ((b = RARITIES[M.rarity]) == null ? void 0 : b.color) ?? "#4b69ff",
      ),
        x.append(this.skinIcon(M.weapon, M.skin, 72)),
        c.append(x),
        p.push(x));
    }
    l.append(c, wt("i", "me-reel-marker"));
    const y = wt("div", "me-reel-label");
    y.append(
      wt("b", "", `${t} | ${i}`),
      wt("span", "", this.say(RARITIES[s].en, RARITIES[s].ru)),
    );
    const g = wt("img", "me-reel-hero");
    ((g.alt = ""),
      r.append(
        l,
        g,
        y,
        wt(
          "div",
          "me-reel-note",
          this.say("Added to your Armory", "Добавлено в ваш Арсенал"),
        ),
      ),
      a.append(r),
      s0("weapon", e.sk, e.w, null, !0)
        .then((S) => {
          g.src = S;
        })
        .catch(() => {}),
      requestAnimationFrame(() => {
        const S = p[0].getBoundingClientRect().width + 6,
          M = (f() - 0.5) * S * 0.6,
          x = d * S + S / 2 - l.clientWidth / 2 + M,
          T = 4400,
          A = performance.now();
        let _ = -1;
        const C = (L) => 1 - Math.pow(1 - L, 4),
          R = () => {
            var H, G, I, O;
            if (!a.isConnected) {
              this.reelBusy = !1;
              return;
            }
            const L = Math.min(1, (performance.now() - A) / T),
              N = x * C(L);
            c.style.transform = `translate3d(${-N}px,0,0)`;
            const D = Math.floor((N + l.clientWidth / 2) / S);
            if (
              (D !== _ &&
                ((_ = D),
                (G = (H = this.deps.sfx).reelTick) == null || G.call(H)),
              L < 1)
            ) {
              requestAnimationFrame(R);
              return;
            }
            (a.classList.add("done"),
              r.classList.add(`t${o}`),
              (O = (I = this.deps.sfx).dropReveal) == null || O.call(I, o),
              this.later(2300, () => {
                (a.classList.add("hidden"),
                  (this.reelBusy = !1),
                  this.listDrop(e, !0),
                  this.flushDrops());
              }));
          };
        requestAnimationFrame(R);
      }));
  }
  maybeGuest() {
    const e = this.deps.guestPrompt();
    if (!e || !this.open || this.root.querySelector(".me-guest")) return;
    const t = wt("div", "me-guest");
    ((t.title = this.say(
      `${e.minutes} min played as ${e.name}`,
      `${e.minutes} мин в игре как ${e.name}`,
    )),
      t.append(
        wt(
          "span",
          "",
          this.say(
            "Pick a nickname to keep your progress",
            "Выберите ник, чтобы сохранить прогресс",
          ),
        ),
      ));
    const i = wt(
      "button",
      "me-btn me-btn-cta",
      this.say("Save progress", "Сохранить"),
    );
    ((i.type = "button"),
      i.addEventListener("click", () => {
        (this.deps.sfx.uiTick(!0),
          window.dispatchEvent(new Event("request-account-link")));
      }),
      t.append(i),
      this.dock.insertBefore(t, this.dock.querySelector(".me-bar")),
      (this.bandAt = 0));
  }
  hide() {
    var e;
    (this.clearTimers(),
      (e = this.podium) == null || e.hide(),
      (this.msg = null),
      (this.voteMsg = null),
      (this.voteEl = null),
      (this.voteClock = null),
      this.voteCards.clear());
  }
  setVote(e) {
    var s, o, a, r;
    const t = this.voteMsg,
      i = (l) => (l ? l.o.reduce((c, [, h]) => c + h, 0) : 0);
    ((this.voteMsg = e),
      (this.voteAt = performance.now()),
      this.msg && this.renderVote(),
      this.open &&
        (e.win && !(t != null && t.win)
          ? (o = (s = this.deps.sfx).voteWin) == null || o.call(s)
          : t &&
            !e.win &&
            i(e) > i(t) &&
            e.my === t.my &&
            ((r = (a = this.deps.sfx).voteTick) == null || r.call(a))));
  }
  castVote(e) {
    var s, o;
    const t = this.voteMsg;
    if (!t || t.win || t.my === e) return;
    const i = t.my;
    ((t.my = e),
      (t.o = t.o.map(([a, r]) => [
        a,
        r + (a === e ? 1 : 0) - (a === i ? 1 : 0),
      ])),
      this.renderVote(),
      this.deps.sfx.voteCast
        ? this.deps.sfx.voteCast()
        : this.deps.sfx.uiTick(!0),
      (o = (s = this.deps).vote) == null || o.call(s, e));
  }
  renderVote() {
    const e = this.voteMsg;
    if (!e || !this.dock) return;
    const t = this.deps.lang();
    if (!this.voteEl) {
      this.voteEl = wt("section", "me-vote");
      const s = wt("div", "me-vote-head");
      ((this.voteClock = wt("span", "me-vote-clock")),
        s.append(
          wt("b", "", this.say("Next map", "Следующая карта")),
          this.voteClock,
        ));
      const o = wt("div", "me-vote-cards");
      ((o.dataset.n = String(e.o.length)),
        e.o.forEach(([a], r) => {
          const l = resolveMap(a),
            c = wt("button", "me-map");
          ((c.type = "button"),
            (c.dataset.id = a),
            c.style.setProperty(
              "--accent",
              (l == null ? void 0 : l.accent) ?? "#ffb547",
            ),
            c.style.setProperty(
              "--sky1",
              (l == null ? void 0 : l.sky[0]) ?? "#334",
            ),
            c.style.setProperty(
              "--sky2",
              (l == null ? void 0 : l.sky[1]) ?? "#112",
            ));
          const h = wt("i", "me-map-art");
          h.style.backgroundImage = `url(/front-maps/${a}.png)`;
          const d = wt("span", "me-map-text");
          d.append(
            wt("b", "me-map-name", l ? l.name[t] : a),
            wt("small", "me-map-sub"),
          );
          const u = wt("span", "me-map-count"),
            f = wt("i", "me-map-fill");
          (c.append(h, d, u, f, wt("kbd", "me-map-key", String(r + 1))),
            c.classList.toggle("new", yH(a)),
            c.addEventListener("click", () => this.castVote(a)),
            o.append(c),
            this.voteCards.set(a, c));
        }),
        e.o.length === 2 && o.append(wt("i", "me-vote-vs", "VS")),
        this.voteEl.append(s, o),
        this.dock.insertBefore(this.voteEl, this.dock.querySelector(".me-bar")),
        (this.bandAt = 0));
    }
    const i = e.o.reduce((s, [, o]) => s + o, 0);
    (this.voteEl.classList.toggle("decided", !!e.win),
      this.voteEl.classList.toggle("voted", !!e.my),
      this.tickVoteClock());
    for (const [s, o] of e.o) {
      const a = this.voteCards.get(s);
      if (!a) continue;
      const r = resolveMap(s);
      (a.classList.toggle("mine", e.my === s),
        a.classList.toggle("win", e.win === s),
        a.classList.toggle("lose", !!e.win && e.win !== s),
        (a.disabled = !!e.win),
        (a.querySelector(".me-map-count").textContent = String(o)),
        (a.querySelector(".me-map-fill").style.transform =
          `scaleX(${i ? o / i : 0})`));
      const l = a.querySelector(".me-map-sub");
      ((l.textContent =
        e.win === s
          ? this.say("NEXT", "ДАЛЕЕ")
          : e.my === s
            ? this.say("✓ Your vote", "✓ Ваш голос")
            : a.classList.contains("new")
              ? this.say("New map", "Новая карта")
              : s === e.cur
                ? this.say("Play again", "Ещё раз")
                : ""),
        a.setAttribute("aria-pressed", String(e.my === s)),
        (a.title = r ? r.blurb[t] : s));
    }
  }
  tickVoteClock() {
    const e = this.voteMsg,
      t = this.voteClock;
    if (!e || !t) return;
    const i = e.win
        ? 0
        : Math.max(
            0,
            Math.ceil(e.end - vH - (performance.now() - this.voteAt) / 1e3),
          ),
      s = e.win ? "" : String(i);
    (t.textContent !== s && (t.textContent = s),
      t.classList.toggle("soon", !e.win && i <= 5));
  }
  clearTimers() {
    for (const e of this.timers) clearTimeout(e);
    this.timers = [];
  }
  measure() {
    var a, r;
    const e = innerWidth,
      t = innerHeight,
      i = this.hero.getBoundingClientRect().bottom,
      s = this.dock.getBoundingClientRect().top,
      o =
        ((a = this.plates.get(1) ?? this.plates.get(2)) == null
          ? void 0
          : a.getBoundingClientRect().height) ?? 60;
    (r = this.podium) == null ||
      r.setBand(i + 2, Math.max(i + 120, s - o * 0.55 - 6), e, t);
  }
  frame(e, t) {
    if (!this.open || !this.msg) return !1;
    const i = performance.now(),
      s = Math.max(0, this.next - (i - this.shownAt) / 1e3),
      o = this.tdm
        ? this.say(`Next match ${Math.ceil(s)}`, `Новый матч ${Math.ceil(s)}`)
        : this.say(`Next round ${Math.ceil(s)}`, `Новый раунд ${Math.ceil(s)}`);
    (this.nextEl.textContent !== o && (this.nextEl.textContent = o),
      this.tickVoteClock(),
      (this.nextBar.style.transform = `scaleX(${Math.max(0, Math.min(1, s / Math.max(1, this.next)))})`));
    const a = this.podium;
    if (!(a != null && a.visible) || !e) return !1;
    (i - this.bandAt > 400 && ((this.bandAt = i), this.measure()),
      a.update(t),
      a.render(e));
    const r = a.anchors(),
      l = Math.max(68, Math.floor(a.spacing() - 10));
    for (const [c, h] of this.plates) {
      h.dataset.room !== String(l) &&
        ((h.dataset.room = String(l)),
        (h.style.maxWidth = `${l}px`),
        h.classList.toggle("me-compact", l < 176));
      const d = r[c];
      d &&
        (h.style.transform = `translate3d(${Math.round(d.x)}px,${Math.round(d.y)}px,0) translateX(-50%)`);
    }
    return !0;
  }
}
