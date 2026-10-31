// index-BeUlFSPp 170 — append
// Lines 95962-96730 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class Zse {
  constructor(e) {
    ((this.deps = e),
      (this.root = St("div", "front-end me-screen hidden")),
      this.root.setAttribute("role", "dialog"),
      addEventListener("resize", this.onResize),
      addEventListener("keydown", (t) => {
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
        const i = /^Digit([1-4])$/.exec(t.code)?.[1],
          n = i ? this.voteMsg.o[Number(i) - 1] : void 0;
        n && (t.preventDefault(), this.castVote(n[0]));
      }));
  }
  root;
  podium = null;
  plates = new Map();
  hero;
  dock;
  board;
  reel;
  nextEl;
  nextBar;
  shownAt = 0;
  next = 0;
  msg = null;
  team = 1;
  tdm = !1;
  pendingDrops = [];
  reelBusy = !1;
  bandAt = 0;
  timers = [];
  onResize = () => {
    this.bandAt = 0;
  };
  voteMsg = null;
  voteEl = null;
  voteCards = new Map();
  voteAt = 0;
  voteClock = null;
  say(e, t) {
    return I(e, t);
  }
  get open() {
    return !this.root.classList.contains("hidden");
  }
  later(e, t) {
    this.timers.push(window.setTimeout(t, e));
  }
  show(e, t, i, n = !1) {
    (this.clearTimers(),
      (this.msg = e),
      (this.team = t),
      (this.tdm = i),
      (this.shownAt = performance.now() - (n ? 6e3 : 0)),
      (this.next = e.next),
      (this.pendingDrops = []),
      (this.reelBusy = !1),
      (this.tickerQueue = []),
      (this.tickerBusy = !1));
    const o =
        e.ffa && e.me ? (e.pl ?? e.top.findIndex((u) => u[0] === e.me) + 1) : 0,
      a = e.ffa
        ? e.win === t
          ? "win"
          : o > 0 && o <= 3
            ? "draw"
            : e.me
              ? "loss"
              : "draw"
        : e.win === 0
          ? "draw"
          : e.win === t
            ? "win"
            : "loss",
      r = this.root;
    ((r.dataset.result = a),
      (r.dataset.stage = n ? "all" : "intro"),
      r.classList.toggle("me-late", n),
      r.replaceChildren(),
      r.append(St("div", "me-shade"), St("div", "me-flash")),
      (this.hero = this.buildHero(e, t, i, a)));
    const l = St("div", "me-stage"),
      c = St("div", "me-plates");
    this.plates.clear();
    for (const u of [2, 1, 3]) {
      const f = e.pod?.[u - 1];
      if (!f) continue;
      const p = this.buildPlate(f, u, e.me);
      (c.append(p), this.plates.set(u, p));
    }
    (l.append(c),
      (this.dock = this.buildDock(e, i)),
      (this.voteEl = null),
      (this.voteClock = null),
      this.voteCards.clear(),
      this.voteMsg && this.renderVote(),
      (this.board = this.buildBoard(e)),
      (this.reel = St("div", "me-reel hidden")),
      r.append(this.hero, l, this.dock, this.board, this.reel));
    const h = e.win ? mc(e.win, this.team) : "#ffb547",
      d = (e.pod ?? []).slice(0, 3).map((u, f) => ({
        place: f + 1,
        name: u.n,
        team: u.t,
        bot: !!u.b,
        cls: u.c,
        ally: u.t === t,
        character: u.ch,
        custom: u.cu,
        weaponSkin: u.ws,
        armorSkins: u.ar,
      }));
    if (
      (d.length
        ? ((this.podium ??= new Yse(this.deps.atlas(), this.deps.high())),
          this.podium.show(d, h, n, a !== "loss"))
        : this.podium?.hide(),
      r.classList.toggle("me-no-podium", !d.length),
      (this.bandAt = 0),
      n)
    ) {
      this.countUp(!0);
      for (const u of this.plates.values()) u.classList.add("on");
    } else {
      this.deps.sfx.matchEnd?.(a);
      for (const [u, f] of [
        [3, 900],
        [2, 1550],
        [1, 2250],
      ])
        this.plates.has(u) &&
          this.later(f + 380, () => {
            (this.deps.sfx.podiumHit?.(u),
              this.plates.get(u)?.classList.add("on"));
          });
      (this.later(3e3, () => {
        ((r.dataset.stage = "dock"), this.countUp());
      }),
        this.later(4300, () => {
          ((r.dataset.stage = "all"), this.flushDrops());
        }));
    }
    this.later(n ? 0 : 5200, () => this.maybeGuest());
  }
  buildHero(e, t, i, n) {
    const o = St("header", "me-hero"),
      a =
        e.ffa && e.me ? (e.pl ?? e.top.findIndex((f) => f[0] === e.me) + 1) : 0,
      r = e.ffa
        ? n === "win"
          ? this.say("VICTORY", "ПОБЕДА")
          : a > 0
            ? `#${a}`
            : this.say("MATCH OVER", "МАТЧ ОКОНЧЕН")
        : n === "win"
          ? this.say("VICTORY", "ПОБЕДА")
          : n === "loss"
            ? this.say("DEFEAT", "ПОРАЖЕНИЕ")
            : this.say("DRAW", "НИЧЬЯ"),
      l = St("h1", "me-title");
    (l.setAttribute("aria-label", r),
      [...r].forEach((f, p) => {
        const m = St("span", "", f === " " ? " " : f);
        (m.style.setProperty("--i", String(p)), l.append(m));
      }));
    const c = St("div", "me-score"),
      h = St("b", "", String(e.tk[t - 1])),
      d = St("b", "", String(e.tk[pc(t) - 1]));
    ((h.style.color = mc(t, this.team)),
      (d.style.color = mc(pc(t), this.team)),
      (h.title = Un(dv[t])),
      (d.title = Un(dv[pc(t)])),
      c.append(h, St("i", "", ":"), d),
      o.append(l, ...(e.ffa ? [] : [c])));
    const u = e.ak ?? (e.ffa ? e.ch : void 0);
    if (u) {
      const f = St("div", "me-knife");
      (f.append(
        St(
          "small",
          "",
          e.ak
            ? this.say("GOLDEN KNIFE", "ЗОЛОТОЙ НОЖ")
            : this.say("WINNER", "ПОБЕДИТЕЛЬ"),
        ),
        St("b", "", u),
      ),
        o.append(f));
    }
    return o;
  }
  buildPlate(e, t, i) {
    const n = St("div", `me-plate me-p${t}`);
    (n.style.setProperty("--team", mc(e.t, this.team)),
      i && e.n === i && n.classList.add("me-mine"));
    const o = St("div", "me-phead");
    return (
      o.append(St("i", "me-medal", String(t)), St("b", "me-pname", e.n)),
      n.append(o, St("div", "me-pscore", e.s.toLocaleString())),
      n
    );
  }
  buildDock(e, t) {
    const i = St("section", "me-dock");
    this.ticker = St("div", "me-ticker");
    const n = St("div", "me-bar"),
      o = St("div", "me-you");
    if (e.mine) {
      const [d, u, , f = 0, p = 0] = e.mine,
        m = e.top.findIndex((S) => S[0] === e.me);
      m >= 0 && o.append(St("span", "me-place", `#${m + 1}`));
      const g = St("span", "me-stats"),
        y = St("span", "me-stat me-stat-score");
      (y.append(
        this.counter(d),
        St("small", "me-long", this.say("pts", "очк.")),
      ),
        g.append(y),
        o.append(g));
      const b = (S, M, E, A) => {
        const T = St("span", "me-stat");
        return (
          T.append(
            this.counter(S),
            St("small", "me-long", this.say(M, E)),
            St("small", "me-short", A),
          ),
          (T.title = this.say(M, E)),
          T
        );
      };
      if (
        (g.append(
          b(u, "kills", "убийств", this.say("K", "У")),
          b(f, "assists", "помощь", this.say("A", "П")),
          b(p, "vehicles", "техника", this.say("V", "Т")),
        ),
        (e.rw && (e.rw[0] > 0 || e.rw[1] > 0)) || (e.xp ?? 0) > 0)
      ) {
        const S = St("span", "me-pay");
        if ((e.xp ?? 0) > 0) {
          const E = this.counter(e.xp, "xp");
          (E.classList.add("me-xp"),
            (E.title = this.say("Experience for the round", "Опыт за раунд")),
            S.append(E));
        }
        (e.rw || (e.rw = [0, 0]),
          e.rw[0] > 0 && S.append(this.counter(e.rw[0], "money")));
        const M = e.rw[1] > 0 ? Dq() : 1;
        if (e.rw[1] > 0) {
          const E = this.counter(e.rw[1] * M, "plus");
          (E.classList.add("me-gold"), S.append(E));
        }
        if (M > 1) {
          const E = St("i", "me-golden", `×${M}`);
          ((E.title = this.say(
            "Golden hour: double gold",
            "Золотой час: двойное золото",
          )),
            S.append(E));
        }
        o.append(S);
      }
    } else
      o.append(
        St(
          "span",
          "me-stat",
          this.say(
            "You joined after the whistle",
            "Вы зашли после финального свистка",
          ),
        ),
      );
    const a = St("div", "me-actions"),
      r = St("div", "me-next");
    ((this.nextEl = St("span", "me-next-text")),
      (this.nextBar = St("i", "me-next-bar")));
    const l = St("div", "me-next-track");
    (l.append(this.nextBar), r.append(this.nextEl, l));
    const c = St(
      "button",
      "me-btn",
      this.say("Leaderboard", "Таблица лидеров"),
    );
    ((c.type = "button"),
      c.addEventListener("click", () => {
        (this.board.classList.toggle("hidden"), this.deps.sfx.uiTick(!0));
      }));
    const h = St("button", "me-btn me-btn-ghost", this.say("Menu", "Меню"));
    return (
      (h.type = "button"),
      h.addEventListener("click", () => this.deps.openMenu()),
      a.append(r, c, h),
      n.append(o, a),
      i.append(this.ticker, n),
      i
    );
  }
  ticker;
  tickerQueue = [];
  tickerBusy = !1;
  counter(e, t = "") {
    const i = St(
      "b",
      "me-count",
      t === "money" ? "+$0" : t === "plus" ? "+0" : t === "xp" ? "+0 XP" : "0",
    );
    return ((i.dataset.to = String(e)), t && (i.dataset.fmt = t), i);
  }
  buildBoard(e) {
    const t = St("div", "me-board hidden"),
      i = St("div", "me-board-panel"),
      n = St("div", "me-board-head");
    n.append(St("b", "", this.say("Leaderboard", "Таблица лидеров")));
    const o = St("button", "me-x", "×");
    ((o.type = "button"),
      o.setAttribute("aria-label", this.say("Close", "Закрыть")),
      o.addEventListener("click", () => t.classList.add("hidden")),
      n.append(o));
    const a = St("div", "me-table"),
      r = St("div", "me-row me-hdr");
    for (const l of [
      "#",
      this.say("Soldier", "Боец"),
      this.say("Score", "Очки"),
      "K",
      "A",
      "D",
      this.say("Veh", "Техн."),
    ])
      r.append(St("span", "", l));
    if (
      (a.append(r),
      e.top.forEach((l, c) => {
        const h = St("div", "me-row");
        (h.style.setProperty("--team", mc(l[1], this.team)),
          e.me && l[0] === e.me && h.classList.add("me-row-mine"));
        const d = St("span", "me-row-name", l[0]);
        (l[7] && d.append(St("em", "me-tag", "AI")),
          h.append(
            St("span", "me-row-n", String(c + 1)),
            d,
            St("span", "", l[2].toLocaleString()),
            St("span", "", String(l[3])),
            St("span", "", String(l[5] ?? 0)),
            St("span", "", String(l[4])),
            St("span", "", String(l[6] ?? 0)),
          ),
          a.append(h));
      }),
      e.mine)
    ) {
      const [l, c, h, d = 0, u = 0] = e.mine,
        f = St("div", "me-board-mine"),
        p = (m, g, y) => {
          const b = St("div", "me-bm-tile");
          return (
            b.append(
              St("b", "", m.toLocaleString()),
              St("span", "", this.say(g, y)),
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
        i.append(n, f, a));
    } else i.append(n, a);
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
      n = e ? 0 : 1100,
      o = (r, l) =>
        r.dataset.fmt === "money"
          ? `+$${l.toLocaleString()}`
          : r.dataset.fmt === "plus"
            ? `+${l.toLocaleString()}`
            : r.dataset.fmt === "xp"
              ? `+${l.toLocaleString()} XP`
              : l.toLocaleString(),
      a = () => {
        const r = n ? Math.min(1, (performance.now() - i) / n) : 1,
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
    const t = io(e.sk),
      i = Xse[e.w];
    return {
      item: i ? this.say(...i) : this.deps.itemName(e.w),
      finish: t ? this.say(t.name, t.ru) : e.sk,
      rarity: t?.rarity ?? "rare",
    };
  }
  skinIcon(e, t, i = 64) {
    const n = document.createElement("canvas");
    n.width = n.height = 40;
    const o = n.getContext("2d");
    try {
      (this.deps.drawIcon(o, e), pO(o, t));
    } catch {}
    return n;
  }
  flushDrops() {
    if (this.reelBusy) return;
    const e = this.pendingDrops.findIndex((t) => t.n === this.msg?.me);
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
    const { item: i, finish: n, rarity: o } = this.dropName(e),
      a = St("div", "me-tick");
    (a.style.setProperty("--rarity", Oo[o].color),
      a.append(
        this.skinIcon(e.w, e.sk),
        St("b", "", e.n),
        St("span", "", this.say("found", "нашёл")),
        St("em", "", `${i} | ${n}`),
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
    this.reelBusy = !0;
    const { item: t, finish: i, rarity: n } = this.dropName(e),
      o = Oo[n].tier,
      a = this.reel;
    (a.replaceChildren(), a.classList.remove("hidden", "done"));
    const r = St("div", "me-reel-card");
    (r.style.setProperty("--rarity", Oo[n].color),
      r.append(
        St(
          "div",
          "me-reel-kicker",
          this.say("FIELD DROP · YOURS", "ТРОФЕЙ · ВАШ"),
        ),
      ));
    const l = St("div", "me-reel-window"),
      c = St("div", "me-reel-strip"),
      h = this.deps.mobile ? 34 : 44,
      d = h - 6;
    let u = (e.sk.length * 7919 + e.w) % 2147483647 || 1;
    const f = () => (u = (u * 16807) % 2147483647) / 2147483647,
      p = [],
      m = Array.from({ length: 9 }, () =>
        Wq(rd, (b, S) => Fq(b, [], S).weapon, f(), f(), f()),
      );
    for (let b = 0; b < h; b++) {
      const S =
          b === d
            ? { skin: e.sk, weapon: e.w, rarity: n }
            : m[Math.floor(f() * m.length)],
        M = St("div", "me-reel-cell");
      (M.style.setProperty("--rarity", Oo[S.rarity]?.color ?? "#4b69ff"),
        M.append(this.skinIcon(S.weapon, S.skin, 72)),
        c.append(M),
        p.push(M));
    }
    l.append(c, St("i", "me-reel-marker"));
    const g = St("div", "me-reel-label");
    g.append(
      St("b", "", `${t} | ${i}`),
      St("span", "", this.say(Oo[n].en, Oo[n].ru)),
    );
    const y = St("img", "me-reel-hero");
    ((y.alt = ""),
      r.append(
        l,
        y,
        g,
        St(
          "div",
          "me-reel-note",
          this.say("Added to your Armory", "Добавлено в ваш Арсенал"),
        ),
      ),
      a.append(r),
      vr("weapon", e.sk, e.w, null, !0)
        .then((b) => {
          y.src = b;
        })
        .catch(() => {}),
      requestAnimationFrame(() => {
        const b = p[0].getBoundingClientRect().width + 6,
          S = (f() - 0.5) * b * 0.6,
          M = d * b + b / 2 - l.clientWidth / 2 + S,
          E = 4400,
          A = performance.now();
        let T = -1;
        const x = (_) => 1 - Math.pow(1 - _, 4),
          R = () => {
            if (!a.isConnected) {
              this.reelBusy = !1;
              return;
            }
            const _ = Math.min(1, (performance.now() - A) / E),
              C = M * x(_);
            c.style.transform = `translate3d(${-C}px,0,0)`;
            const P = Math.floor((C + l.clientWidth / 2) / b);
            if ((P !== T && ((T = P), this.deps.sfx.reelTick?.()), _ < 1)) {
              requestAnimationFrame(R);
              return;
            }
            (a.classList.add("done"),
              r.classList.add(`t${o}`),
              this.deps.sfx.dropReveal?.(o),
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
    const t = St("div", "me-guest");
    ((t.title = this.say(
      `${e.minutes} min played as ${e.name}`,
      `${e.minutes} мин в игре как ${e.name}`,
    )),
      t.append(
        St(
          "span",
          "",
          this.say(
            "Pick a nickname to keep your progress",
            "Выберите ник, чтобы сохранить прогресс",
          ),
        ),
      ));
    const i = St(
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
    (this.clearTimers(),
      this.podium?.hide(),
      (this.msg = null),
      (this.voteMsg = null),
      (this.voteEl = null),
      (this.voteClock = null),
      this.voteCards.clear());
  }
  setVote(e) {
    const t = this.voteMsg,
      i = (n) => (n ? n.o.reduce((o, [, a]) => o + a, 0) : 0);
    ((this.voteMsg = e),
      (this.voteAt = performance.now()),
      this.msg && this.renderVote(),
      this.open &&
        (e.win && !t?.win
          ? this.deps.sfx.voteWin?.()
          : t &&
            !e.win &&
            i(e) > i(t) &&
            e.my === t.my &&
            this.deps.sfx.voteTick?.()));
  }
  castVote(e) {
    const t = this.voteMsg;
    if (!t || t.win || t.my === e) return;
    const i = t.my;
    ((t.my = e),
      (t.o = t.o.map(([n, o]) => [
        n,
        o + (n === e ? 1 : 0) - (n === i ? 1 : 0),
      ])),
      this.renderVote(),
      this.deps.sfx.voteCast
        ? this.deps.sfx.voteCast()
        : this.deps.sfx.uiTick(!0),
      this.deps.vote?.(e));
  }
  renderVote() {
    const e = this.voteMsg;
    if (!e || !this.dock) return;
    if (!this.voteEl) {
      this.voteEl = St("section", "me-vote");
      const i = St("div", "me-vote-head");
      ((this.voteClock = St("span", "me-vote-clock")),
        i.append(
          St("b", "", this.say("Next map", "Следующая карта")),
          this.voteClock,
        ));
      const n = St("div", "me-vote-cards");
      ((n.dataset.n = String(e.o.length)),
        e.o.forEach(([o], a) => {
          const r = Pa(o),
            l = St("button", "me-map");
          ((l.type = "button"),
            (l.dataset.id = o),
            l.style.setProperty("--accent", r?.accent ?? "#ffb547"),
            l.style.setProperty("--sky1", r?.sky[0] ?? "#334"),
            l.style.setProperty("--sky2", r?.sky[1] ?? "#112"));
          const c = St("i", "me-map-art");
          c.style.backgroundImage = `url(/front-maps/${o}.png)`;
          const h = St("span", "me-map-text");
          h.append(
            St("b", "me-map-name", r ? Un(r.name) : o),
            St("small", "me-map-sub"),
          );
          const d = St("span", "me-map-count"),
            u = St("i", "me-map-fill");
          (l.append(c, h, d, u, St("kbd", "me-map-key", String(a + 1))),
            l.classList.toggle("new", DV(o)),
            l.addEventListener("click", () => this.castVote(o)),
            n.append(l),
            this.voteCards.set(o, l));
        }),
        e.o.length === 2 && n.append(St("i", "me-vote-vs", "VS")),
        this.voteEl.append(i, n),
        this.dock.insertBefore(this.voteEl, this.dock.querySelector(".me-bar")),
        (this.bandAt = 0));
    }
    const t = e.o.reduce((i, [, n]) => i + n, 0);
    (this.voteEl.classList.toggle("decided", !!e.win),
      this.voteEl.classList.toggle("voted", !!e.my),
      this.tickVoteClock());
    for (const [i, n] of e.o) {
      const o = this.voteCards.get(i);
      if (!o) continue;
      const a = Pa(i);
      (o.classList.toggle("mine", e.my === i),
        o.classList.toggle("win", e.win === i),
        o.classList.toggle("lose", !!e.win && e.win !== i),
        (o.disabled = !!e.win),
        (o.querySelector(".me-map-count").textContent = String(n)),
        (o.querySelector(".me-map-fill").style.transform =
          `scaleX(${t ? n / t : 0})`));
      const r = o.querySelector(".me-map-sub");
      ((r.textContent =
        e.win === i
          ? this.say("NEXT", "ДАЛЕЕ")
          : e.my === i
            ? this.say("✓ Your vote", "✓ Ваш голос")
            : o.classList.contains("new")
              ? this.say("New map", "Новая карта")
              : i === e.cur
                ? this.say("Play again", "Ещё раз")
                : ""),
        o.setAttribute("aria-pressed", String(e.my === i)),
        (o.title = a ? Un(a.blurb) : i));
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
            Math.ceil(e.end - HV - (performance.now() - this.voteAt) / 1e3),
          ),
      n = e.win ? "" : String(i);
    (t.textContent !== n && (t.textContent = n),
      t.classList.toggle("soon", !e.win && i <= 5));
  }
  clearTimers() {
    for (const e of this.timers) clearTimeout(e);
    this.timers = [];
  }
  measure() {
    const e = innerWidth,
      t = innerHeight,
      i = this.hero.getBoundingClientRect().bottom,
      n = this.dock.getBoundingClientRect().top,
      o =
        (this.plates.get(1) ?? this.plates.get(2))?.getBoundingClientRect()
          .height ?? 60;
    this.podium?.setBand(i + 2, Math.max(i + 120, n - o * 0.55 - 6), e, t);
  }
  frame(e, t) {
    if (!this.open || !this.msg) return !1;
    const i = performance.now(),
      n = Math.max(0, this.next - (i - this.shownAt) / 1e3),
      o = this.tdm
        ? this.say(`Next match ${Math.ceil(n)}`, `Новый матч ${Math.ceil(n)}`)
        : this.say(`Next round ${Math.ceil(n)}`, `Новый раунд ${Math.ceil(n)}`);
    (this.nextEl.textContent !== o && (this.nextEl.textContent = o),
      this.tickVoteClock(),
      (this.nextBar.style.transform = `scaleX(${Math.max(0, Math.min(1, n / Math.max(1, this.next)))})`));
    const a = this.podium;
    if (!a?.visible || !e) return !1;
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
