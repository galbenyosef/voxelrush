// assets__index-Dp6GxvJu 147 — say
// Lines 88865-90486 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class EZ {
  constructor(e) {
    w(this, "active", !1);
    w(this, "mode", "conquest");
    w(this, "mapId", "");
    w(this, "team", 0);
    w(this, "state", null);
    w(this, "playerTeams", new Map());
    w(this, "botTeams", new Map());
    w(this, "root", null);
    w(this, "hud");
    w(this, "flagChips", new Map());
    w(this, "ticketEls");
    w(this, "phaseEl");
    w(this, "timeEl");
    w(this, "capEl");
    w(this, "feedEl");
    w(this, "popEl");
    w(this, "bannerEl");
    w(this, "deployEl");
    w(this, "endEl");
    w(this, "matchEndUi", null);
    w(this, "boardEl");
    w(this, "deployWaitUntil", 0);
    w(this, "deployWanted", !1);
    w(this, "deployShowAt", 0);
    w(this, "chosenClass", "assault");
    w(this, "chosenSpawn", "hq");
    w(this, "boardOpen", !1);
    w(this, "boardAt", 0);
    w(this, "lastBoard", null);
    w(this, "endAt", 0);
    w(this, "endNext", 0);
    w(this, "bannerT", 0);
    w(this, "markers", new Map());
    w(this, "mines", []);
    w(this, "markerKey", new Map());
    w(this, "mapCanvas", null);
    w(this, "mapBg", null);
    w(this, "mapBgAt", 0);
    w(this, "mapFreshUntil", 0);
    w(this, "lastZone");
    w(this, "lastCapture", 0);
    w(this, "sup", { at: "", hold: 0, wait: 0, full: !1, t0: 0 });
    w(this, "supplyEl");
    w(this, "lowAmmoEl");
    w(this, "supplyToast");
    w(this, "lowAmmo", "");
    w(this, "ammoCheckAt", 0);
    w(this, "supplyTipShown", !1);
    w(this, "lastHu", "");
    w(this, "tdmClock");
    w(this, "tdmStatus");
    w(this, "killedBy", null);
    w(this, "lastStreak", 0);
    w(this, "shieldUntil", 0);
    w(this, "statusKey", "");
    w(this, "lastPos", null);
    this.deps = e;
  }
  en() {
    return this.deps.lang() === "en";
  }
  col(e) {
    return Rc(e, this.team);
  }
  say(e, t) {
    return this.en() ? e : t;
  }
  get classIds() {
    return DS(this.mode);
  }
  get tdm() {
    return this.mode === "tdm";
  }
  endlessAmmo(e) {
    return this.active && this.mode === "tdm" && qz.has(e);
  }
  activate(e = this.mode) {
    if (this.active) {
      this.setMode(e);
      return;
    }
    ((this.active = !0),
      (this.mode = e),
      document.body.classList.add("frontline"),
      document.body.classList.toggle("tdm", e === "tdm"),
      this.loadClass(),
      this.build());
  }
  loadClass() {
    try {
      const e = localStorage.getItem(
        this.tdm ? "fc-tdm-class" : "fc-front-class",
      );
      e && e in _l && _l[e].mode === this.mode && (this.chosenClass = e);
    } catch {}
    _l[this.chosenClass].mode !== this.mode &&
      (this.chosenClass = this.classIds[0]);
  }
  setMode(e) {
    if (
      e === this.mode ||
      ((this.mode = e),
      document.body.classList.toggle("tdm", e === "tdm"),
      this.loadClass(),
      !this.root)
    )
      return;
    const t = this.deploying,
      i = this.buildDeploy();
    (this.deployEl.replaceWith(i),
      (this.deployEl = i),
      this.hud.classList.toggle("tdm", this.tdm),
      t && this.showWindow(this.deployEl, !0),
      this.renderDeployHeader());
  }
  get overlayOpen() {
    return (
      !!this.root &&
      (!this.deployEl.classList.contains("hidden") ||
        !this.endEl.classList.contains("hidden"))
    );
  }
  get overlayElement() {
    return this.root
      ? this.deployEl.classList.contains("hidden")
        ? this.endEl.classList.contains("hidden")
          ? void 0
          : this.endEl
        : this.deployEl
      : void 0;
  }
  get deploying() {
    return !!this.root && !this.deployEl.classList.contains("hidden");
  }
  receive(e) {
    var t, i, s, o, a, r, l;
    switch ((this.active || this.activate(), e.t)) {
      case "state":
        this.onState(e);
        break;
      case "teams": {
        (this.playerTeams.clear(), this.botTeams.clear());
        for (const [c, h] of e.p) this.playerTeams.set(c, h);
        for (const [c, h] of e.b) this.botTeams.set(c, h);
        this.deps.onTeamsChanged();
        break;
      }
      case "kill":
        this.addKill(e);
        break;
      case "flag": {
        const c = e.team === this.team,
          h =
            e.ev === "neutral" &&
            ((i =
              (t = this.state) == null
                ? void 0
                : t.f.find((d) => d[0] === e.id)) == null
              ? void 0
              : i[1]) === this.team;
        (e.ev === "captured"
          ? this.banner(
              c
                ? this.say(`Flag ${e.id} captured`, `Флаг ${e.id} захвачен`)
                : this.say(`Flag ${e.id} lost`, `Флаг ${e.id} потерян`),
              c ? "good" : "bad",
            )
          : h &&
            this.banner(
              this.say(`Flag ${e.id} is falling!`, `Флаг ${e.id} под угрозой!`),
              "bad",
            ),
          (o = (s = this.deps.sfx).capture) == null || o.call(s, c));
        break;
      }
      case "score":
        this.popScore(e.pts, e.why);
        break;
      case "deploy": {
        e.open
          ? ((this.deployWaitUntil = performance.now() + e.wait * 1e3),
            (this.deployWanted = !0),
            (this.deployShowAt =
              performance.now() + (e.reason === "death" ? 1600 : 0)),
            (this.killedBy = e.reason === "death" && e.by ? e.by : null),
            this.renderKiller(),
            e.reason === "round" &&
              (this.showWindow(this.endEl, !1),
              (a = this.matchEndUi) == null || a.hide()))
          : ((this.deployWanted = !1),
            this.closeDeploy(),
            e.yaw !== void 0 && this.deps.face(e.yaw),
            this.tdm &&
              (this.shieldUntil = performance.now() + $z.shield * 1e3),
            this.supplyTipShown ||
              ((this.supplyTipShown = !0),
              setTimeout(
                () =>
                  this.banner(
                    this.tdm
                      ? this.say(
                          "Bullets never run out · grenades come back with time",
                          "Патроны не кончаются · гранаты возвращаются со временем",
                        )
                      : this.say(
                          "Ammo: the HQ depot ring or your own flags",
                          "Патроны: круг склада в штабе или ваши флаги",
                        ),
                    "info",
                  ),
                3500,
              )));
        break;
      }
      case "end":
        this.showEnd(e);
        break;
      case "drop":
        (r = this.matchEndUi) == null || r.addDrop(e);
        break;
      case "board":
        ((this.lastBoard = e), this.boardOpen && this.renderBoard());
        break;
      case "banner":
        this.banner(e.text, e.tone ?? "info");
        break;
      case "sup":
        this.sup = {
          at: e.at,
          hold: e.hold,
          wait: e.wait,
          full: !!e.full,
          t0: performance.now(),
        };
        break;
      case "vote":
        (l = this.matchEndUi) == null || l.setVote(e);
        break;
      case "map": {
        ((this.mapId = e.id),
          (this.mapBg = null),
          (this.mapBgAt = 0),
          (this.mapFreshUntil = performance.now() + 2e4),
          this.renderDeployHeader(),
          this.deps.onMapChange(e.id, e.n));
        break;
      }
      case "supplied":
        this.showSupplied(e);
        break;
      case "regen":
        this.deps.regen(e.i, e.n);
        break;
      case "mines":
        this.mines = e.m;
        break;
    }
  }
  onState(e) {
    if (
      ((e.md ?? "conquest") !== this.mode && this.setMode(e.md ?? "conquest"),
      e.mp &&
        e.mp !== this.mapId &&
        ((this.mapId = e.mp),
        (this.mapBg = null),
        (this.mapBgAt = 0),
        this.renderDeployHeader()),
      this.tdm)
    ) {
      this.onTdmState(e);
      return;
    }
    const t = this.team;
    if (((this.state = e), (this.team = e.my.team), t !== this.team)) {
      ((document.body.dataset.frontTeam = String(this.team)),
        this.renderDeployHeader(),
        this.deps.onTeamsChanged());
      const l = this.hud.querySelector(".fh-flags");
      for (const c of this.team === 2 ? [...o5].reverse() : o5)
        l.append(this.flagChips.get(c));
    }
    const i = this.team || 1,
      s = Al(i),
      o = (l) => e.tk[l - 1];
    ((this.ticketEls.mine.textContent = String(o(i))),
      (this.ticketEls.theirs.textContent = String(o(s))),
      (this.ticketEls.mineFill.style.width = `${Math.max(0, Math.min(100, (o(i) / Math.max(1, e.tk0)) * 100))}%`),
      (this.ticketEls.theirsFill.style.width = `${Math.max(0, Math.min(100, (o(s) / Math.max(1, e.tk0)) * 100))}%`),
      this.hud.classList.toggle("low-mine", o(i) <= e.tk0 * 0.2));
    for (const l of e.f) this.paintFlagChip(l);
    ((this.phaseEl.textContent =
      e.ph === "warmup"
        ? this.say("DEPLOY", "ВЫСАДКА")
        : e.ph === "live"
          ? this.say("ROUND", "РАУНД") + " " + e.r
          : this.say("ROUND OVER", "РАУНД ОКОНЧЕН")),
      (this.timeEl.textContent = g_(e.tl)),
      (this.hud.dataset.phase = e.ph));
    const a = e.my.zone ? e.f.find((l) => l[0] === e.my.zone) : void 0;
    (this.updateCapture(a, e.ph === "live"),
      this.deploying &&
        (this.renderSpawns(),
        e.hu &&
          `${e.hu}` !== this.lastHu &&
          ((this.lastHu = `${e.hu}`), this.renderDeployHeader())));
    const r = performance.now();
    (a &&
      a[3] &&
      this.lastZone !== a[0] &&
      r - this.lastCapture > 4e3 &&
      (this.lastCapture = r),
      (this.lastZone = a == null ? void 0 : a[0]));
  }
  onTdmState(e) {
    const t = this.team;
    ((this.state = e),
      (this.team = e.my.team),
      t !== this.team &&
        ((document.body.dataset.frontTeam = String(this.team)),
        this.renderDeployHeader(),
        this.deps.onTeamsChanged()));
    const i = this.team || 1,
      s = Al(i),
      o = (h) => e.tk[h - 1],
      a = Math.max(1, o(1), o(2));
    ((this.ticketEls.mine.textContent = String(o(i))),
      (this.ticketEls.theirs.textContent = String(o(s))),
      (this.ticketEls.mineFill.style.width = `${Math.round((o(i) / a) * 100)}%`),
      (this.ticketEls.theirsFill.style.width = `${Math.round((o(s) / a) * 100)}%`),
      this.hud.classList.toggle("leading", o(i) > o(s)),
      this.hud.classList.toggle("trailing", o(i) < o(s)),
      this.hud.classList.remove("low-mine"),
      (this.tdmClock.textContent =
        e.ph === "warmup" ? String(Math.max(0, e.tl)) : g_(e.tl)),
      this.tdmClock.classList.toggle("urgent", e.ph === "live" && e.tl <= 60),
      (this.phaseEl.textContent =
        e.ph === "warmup"
          ? this.say("DEPLOY", "ВЫСАДКА")
          : e.ph === "live"
            ? this.say("TEAM DEATHMATCH", "КОМАНДНЫЙ БОЙ")
            : this.say("MATCH OVER", "МАТЧ ОКОНЧЕН")));
    const r = e.my.st ?? 0;
    this.lastStreak = r;
    const l = Object.keys(a5)
        .map(Number)
        .filter((h) => h <= r)
        .pop(),
      c =
        r >= 2 && e.my.deployed
          ? l
            ? `${a5[l][this.deps.lang()]} · ${r}`
            : this.say(`${r} KILLS IN A ROW`, `УБИЙСТВ ПОДРЯД: ${r}`)
          : this.say(
              `${e.n[0] + e.n[1]} soldiers`,
              `бойцов: ${e.n[0] + e.n[1]}`,
            );
    (this.timeEl.textContent !== c && (this.timeEl.textContent = c),
      this.timeEl.classList.toggle("streak", r >= 2 && e.my.deployed),
      (this.hud.dataset.phase = e.ph),
      e.my.sh
        ? (this.shieldUntil = performance.now() + e.my.sh * 1e3)
        : e.my.deployed &&
          (this.shieldUntil = Math.min(this.shieldUntil, performance.now())),
      this.renderStatus(),
      this.deploying &&
        e.hu &&
        `${e.hu}` !== this.lastHu &&
        ((this.lastHu = `${e.hu}`), this.renderDeployHeader()),
      this.deploying && this.drawMap());
  }
  renderStatus() {
    var a, r;
    if (!this.tdmStatus) return;
    const e = performance.now(),
      t = Math.max(0, (this.shieldUntil - e) / 1e3),
      i = `${t > 0.05 ? t.toFixed(1) : ""}|${(a = this.state) != null && a.my.deployed ? 1 : 0}`;
    if (i === this.statusKey) return;
    this.statusKey = i;
    const s = t > 0.05 && !!((r = this.state) != null && r.my.deployed);
    let o = this.tdmStatus.querySelector(".ft-chip.shield");
    if (!s) {
      o == null || o.remove();
      return;
    }
    (o ||
      ((o = mt("div", "ft-chip shield")),
      o.append(
        mt("b", "", this.say("SPAWN PROTECTION", "ЗАЩИТА ВЫСАДКИ")),
        mt("span", "ft-left"),
      ),
      this.tdmStatus.append(o)),
      (o.querySelector(".ft-left").textContent =
        `${t.toFixed(1)} ${this.say("s", "с")}`));
  }
  renderKiller() {
    var i;
    const e =
      (i = this.deployEl) == null ? void 0 : i.querySelector(".fd-killer");
    if (!e) return;
    const t = this.killedBy;
    (e.classList.toggle("hidden", !t),
      t &&
        e.replaceChildren(
          mt("span", "fk-label", this.say("KILLED BY", "ВАС УБИЛ")),
          mt("b", "fk-name", t[0]),
          mt(
            "span",
            "fk-meta",
            [
              t[1],
              `${t[2]} ${this.say("m", "м")}`,
              t[4] ? this.say("headshot", "в голову") : "",
            ]
              .filter(Boolean)
              .join(" · "),
          ),
          mt(
            "span",
            "fk-hp",
            t[3] > 0 ? this.say(`${t[3]} HP left`, `у него ${t[3]} HP`) : "",
          ),
        ));
  }
  build() {
    const e = (this.root = mt("div", "front-root"));
    e.id = "front-root";
    const t = (this.hud = mt("div", "front-hud")),
      i = mt("div", "fh-bar"),
      s = (h) => {
        const d = mt("div", `fh-side ${h}`),
          u = mt("span", "fh-team"),
          f = mt("b", "fh-tk", "0"),
          p = mt("i", "fh-track"),
          m = mt("i", "fh-fill");
        return (
          p.append(m),
          d.append(u, f, p),
          { box: d, name: u, num: f, fill: m }
        );
      },
      o = s("mine"),
      a = s("theirs"),
      r = mt("div", "fh-flags");
    for (const h of o5) {
      const d = mt("div", "fh-flag");
      ((d.dataset.owner = "neutral"),
        d.append(mt("span", "fh-ring"), mt("b", "", h)),
        r.append(d),
        this.flagChips.set(h, d));
    }
    ((this.tdmClock = mt("div", "fh-clock", "0:00")),
      i.append(o.box, r, this.tdmClock, a.box),
      t.classList.toggle("tdm", this.tdm));
    const l = mt("div", "fh-sub");
    ((this.phaseEl = mt("span", "fh-phase")),
      (this.timeEl = mt("span", "fh-time")),
      l.append(this.phaseEl, this.timeEl),
      t.append(i, l),
      (this.ticketEls = {
        mine: o.num,
        theirs: a.num,
        mineFill: o.fill,
        theirsFill: a.fill,
        mineName: o.name,
        theirsName: a.name,
      }),
      (this.capEl = mt("div", "front-cap hidden")),
      this.capEl.append(
        mt("div", "fc-title"),
        mt("div", "fc-track"),
        mt("div", "fc-note"),
      ),
      this.capEl.querySelector(".fc-track").append(mt("i", "fc-fill")),
      (this.feedEl = mt("div", "front-feed")),
      (this.popEl = mt("div", "front-pop")),
      (this.bannerEl = mt("div", "front-banner hidden")),
      (this.deployEl = this.buildDeploy()),
      (this.matchEndUi = new yZ({
        lang: () => this.deps.lang(),
        mobile: this.deps.mobile,
        openMenu: () => this.deps.openMenu(),
        drawIcon: (h, d) => this.deps.drawIcon(h, d),
        itemName: (h) => this.deps.itemName(h),
        atlas: this.deps.matchEnd.atlas,
        high: this.deps.matchEnd.high,
        guestPrompt: this.deps.matchEnd.guestPrompt,
        onOwnDrop: this.deps.matchEnd.onOwnDrop,
        vote: (h) => this.deps.send({ a: "vote", m: h }),
        sfx: {
          ...this.deps.matchEnd.sfx,
          uiTick: (h) => this.deps.sfx.uiTick(h),
        },
      })),
      (this.endEl = this.matchEndUi.root),
      (this.boardEl = mt("div", "front-board hidden")),
      this.boardEl.addEventListener("click", () => {
        this.deps.mobile && this.toggleBoard(!1);
      }),
      (this.supplyEl = mt("div", "front-supply hidden")),
      this.supplyEl.append(mt("i", "fs-icon"), mt("div", "fs-body")),
      this.supplyEl
        .querySelector(".fs-body")
        .append(
          mt("div", "fs-title"),
          mt("div", "fs-track"),
          mt("div", "fs-note"),
        ),
      this.supplyEl.querySelector(".fs-track").append(mt("i", "fs-fill")),
      (this.lowAmmoEl = mt("div", "front-lowammo hidden")),
      (this.supplyToast = mt("div", "front-supplied")),
      (this.tdmStatus = mt("div", "front-tdm-status")));
    const c = mt("div", "front-stack");
    (c.append(
      this.capEl,
      this.supplyEl,
      this.lowAmmoEl,
      this.supplyToast,
      this.feedEl,
    ),
      e.append(t, this.tdmStatus, c, this.popEl, this.bannerEl, this.boardEl),
      document.body.append(e, this.endEl, this.deployEl),
      addEventListener("resize", () => this.placeBanner()),
      this.placeBanner(),
      this.renderDeployHeader());
  }
  buildDeploy() {
    const e = mt("div", "front-deploy hidden");
    e.setAttribute("role", "dialog");
    const t = mt("div", "fd-panel"),
      i = mt("header", "fd-head");
    (i.append(
      mt("div", "fd-kicker"),
      mt("h2", "fd-title"),
      mt("button", "fd-switch"),
    ),
      (i.querySelector(".fd-switch").type = "button"),
      i
        .querySelector(".fd-switch")
        .addEventListener("click", () => this.deps.send({ a: "switch" })));
    const s = mt("button", "fd-menu");
    ((s.type = "button"),
      s.addEventListener("click", () => this.deps.openMenu()),
      i.append(s));
    const o = mt("div", "fd-body"),
      a = mt("div", "fd-classes");
    this.classIds.forEach((p, m) => {
      const y = _l[p],
        g = mt("button", "fd-class");
      ((g.type = "button"), (g.dataset.cls = p));
      const b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      (b.setAttribute("viewBox", "0 0 24 24"), b.classList.add("fd-glyph"));
      const S = document.createElementNS("http://www.w3.org/2000/svg", "path");
      (S.setAttribute("d", SZ[p]), b.append(S));
      const M = mt("div", "fd-ctext");
      M.append(mt("b", "fd-cname"), mt("span", "fd-crole"));
      const x = mt("div", "fd-kit");
      for (const A of y.items.slice(0, 4)) {
        const _ = document.createElement("canvas");
        ((_.width = _.height = 40), (_.className = "fd-item"));
        try {
          this.deps.drawIcon(_.getContext("2d"), A.id);
        } catch {}
        ((_.title = this.deps.itemName(A.id)), x.append(_));
      }
      const T = mt("kbd", "fd-key", String(m + 1));
      (g.append(T, b, M, x),
        g.addEventListener("click", () => this.pickClass(p)),
        a.append(g));
    });
    const r = mt("div", "fd-right"),
      l = (this.mapCanvas = document.createElement("canvas"));
    ((l.className = "fd-map"),
      (l.width = 640),
      (l.height = 360),
      l.addEventListener("click", (p) => this.pickOnMap(p)));
    const c = mt("div", "fd-spawns"),
      h = mt("div", "fd-killer hidden");
    (r.append(h, l, c), o.append(a, r));
    const d = mt("footer", "fd-foot"),
      u = mt("div", "fd-tip"),
      f = mt("button", "btn fd-go");
    return (
      (f.type = "button"),
      f.addEventListener("click", () => this.deploy()),
      d.append(u, f),
      t.append(i, o, d),
      e.append(t),
      document.addEventListener("keydown", (p) => {
        if (
          !this.deploying ||
          document.querySelector(
            "#pause:not(.hidden), #settings:not(.hidden), dialog[open]",
          ) ||
          e !== this.deployEl
        )
          return;
        const m = Number(p.key);
        (m >= 1 &&
          m <= this.classIds.length &&
          (this.pickClass(this.classIds[m - 1]), p.preventDefault()),
          (p.code === "Space" || p.code === "Enter") &&
            (this.deploy(), p.preventDefault()));
      }),
      e
    );
  }
  renderDeployHeader() {
    if (!this.root) return;
    const e = this.team || 1,
      t = this.deployEl.querySelector(".fd-head"),
      i = this.state,
      s = (i == null ? void 0 : i.cap) ?? 0,
      o = this.mapId ? bH(this.mapId, this.deps.lang()).toUpperCase() : "";
    t.querySelector(".fd-kicker").textContent = this.tdm
      ? o
        ? this.say(`TEAM DEATHMATCH · ${o}`, `КОМАНДНЫЙ БОЙ · ${o}`)
        : this.say("TEAM DEATHMATCH", "КОМАНДНЫЙ БОЙ")
      : o
        ? this.say(`CONQUEST · ${o}`, `ЗАХВАТ · ${o}`)
        : this.say("FRONTLINE · CONQUEST", "ЛИНИЯ ФРОНТА · ЗАХВАТ");
    const a = t.querySelector(".fd-title");
    ((a.textContent = dg[e][this.deps.lang()]), (a.style.color = this.col(e)));
    const r = t.querySelector(".fd-switch"),
      l = i == null ? void 0 : i.hu,
      c = !!l && (l[2 - e] > l[e - 1] || (s > 0 && l[2 - e] >= s / 2));
    ((r.textContent = this.say("Switch side", "Сменить сторону")),
      (r.disabled = c),
      (r.title = c
        ? this.say(
            "The other side already has more players",
            "У другой стороны уже больше игроков",
          )
        : ""),
      (t.querySelector(".fd-menu").textContent = this.say("Menu", "Меню")),
      (this.ticketEls.mineName.textContent = this.say("US", "МЫ")),
      (this.ticketEls.theirsName.textContent = this.say("ENEMY", "ВРАГ")),
      document.documentElement.style.setProperty("--team-mine", Ud.mine),
      document.documentElement.style.setProperty("--team-enemy", Ud.enemy));
    for (const d of this.deployEl.querySelectorAll(".fd-class")) {
      const u = _l[d.dataset.cls];
      ((d.querySelector(".fd-cname").textContent = u.name[this.deps.lang()]),
        (d.querySelector(".fd-crole").textContent = u.role[this.deps.lang()]),
        d.classList.toggle("on", u.id === this.chosenClass));
    }
    const h = this.classIds.length;
    ((this.deployEl.querySelector(".fd-tip").textContent = this.tdm
      ? this.deps.mobile
        ? this.say(
            "Pick a class. Most kills in 10 minutes wins",
            "Выберите класс. Побеждает команда, убившая больше за 10 минут",
          )
        : this.say(
            `1–${h} class · Space to deploy · most kills in 10 minutes wins`,
            `1–${h} класс · Пробел — в бой · побеждает команда, убившая больше за 10 минут`,
          )
      : this.deps.mobile
        ? this.say(
            "Pick a class and a spawn point on the map",
            "Выберите класс и точку высадки на карте",
          )
        : this.say(
            `1–${h} class · click the map to choose where · Space to deploy`,
            `1–${h} класс · клик по карте — точка высадки · Пробел — в бой`,
          )),
      this.renderKiller());
  }
  pickClass(e) {
    this.chosenClass = e;
    try {
      localStorage.setItem(this.tdm ? "fc-tdm-class" : "fc-front-class", e);
    } catch {}
    for (const t of this.deployEl.querySelectorAll(".fd-class"))
      t.classList.toggle("on", t.dataset.cls === e);
    this.deps.sfx.uiTick(!0);
  }
  showWindow(e, t) {
    (e.classList.toggle("hidden", !t), e.classList.toggle("fc-modal", t));
  }
  openDeploy() {
    this.root &&
      (this.showWindow(this.deployEl, !0),
      this.renderDeployHeader(),
      this.renderSpawns(),
      this.deps.unlockInput());
  }
  closeDeploy() {
    !this.root ||
      this.deployEl.classList.contains("hidden") ||
      (this.showWindow(this.deployEl, !1), this.deps.lockInput());
  }
  deploy() {
    !this.state ||
      performance.now() < this.deployWaitUntil ||
      (this.state.my.spawns.includes(this.chosenSpawn) ||
        (this.chosenSpawn = "hq"),
      this.deps.send({ a: "deploy", s: this.chosenSpawn, c: this.chosenClass }),
      this.deps.sfx.uiTick(!0),
      this.showWindow(this.deployEl, !1),
      this.deps.lockInput(),
      (this.deployShowAt = performance.now() + 1500));
  }
  renderSpawns() {
    if (!this.state || !this.root) return;
    const e = this.deployEl.querySelector(".fd-spawns");
    if (this.tdm) {
      (e.replaceChildren(), (this.chosenSpawn = "hq"), this.drawMap());
      return;
    }
    const t = this.state.my.spawns.filter(
        (c) => !c.startsWith("v") || !!this.spawnVehicle(c),
      ),
      i = this.state.hq[(this.team || 1) - 1],
      s = new Map();
    for (const c of t) {
      const h = this.spawnVehicle(c);
      if (h && Math.hypot(h[2] - i[0], h[3] - i[1]) < 40) {
        const d = s.get(h[1]) ?? [];
        (d.push(c), s.set(h[1], d));
      }
    }
    const o = new Set([...s.values()].flatMap((c) => c.slice(1))),
      a = t.filter((c) => !o.has(c)),
      r = (c) => [...s.values()].find((h) => h.includes(c));
    (o.has(this.chosenSpawn) && (this.chosenSpawn = r(this.chosenSpawn)[0]),
      t.includes(this.chosenSpawn) ||
        (this.chosenSpawn = a.includes("hq") ? "hq" : (a[0] ?? "hq")));
    const l =
      a.join(",") +
      "|" +
      this.chosenSpawn +
      "|" +
      (this.state.my.vs ?? []).map((c) => c[4]).join(",") +
      "|" +
      [...s.values()].map((c) => c.length).join(",");
    (e.getAttribute("data-key") !== l &&
      (e.setAttribute("data-key", l),
      e.replaceChildren(
        ...a.map((c) => {
          const h = this.spawnVehicle(c),
            d = r(c),
            u = mt(
              "button",
              "fd-spawn",
              c === "hq"
                ? this.say("HQ", "Штаб")
                : h
                  ? this.deps.vehicleName(h[1])
                  : c,
            );
          return (
            (u.type = "button"),
            h &&
              (u.classList.add("veh"),
              u.prepend(mt("i", `fd-vglyph t${h[1]}`)),
              d && d.length > 1 && u.append(mt("small", "", `×${d.length}`))),
            u.classList.toggle(
              "on",
              c === this.chosenSpawn ||
                !!(d != null && d.includes(this.chosenSpawn)),
            ),
            u.addEventListener("click", () => {
              ((this.chosenSpawn = c),
                this.renderSpawns(),
                this.deps.sfx.uiTick(!0));
            }),
            u
          );
        }),
      )),
      this.drawMap());
  }
  spawnVehicle(e) {
    var i, s;
    if (!e.startsWith("v")) return;
    const t = Number(e.slice(1));
    return (s = (i = this.state) == null ? void 0 : i.my.vs) == null
      ? void 0
      : s.find((o) => o[0] === t);
  }
  mapTransform() {
    const e = this.state,
      t = [
        ...e.hq.map((p) => [p[0], p[1]]),
        ...e.f.map((p) => [p[4], p[5]]),
        ...(this.tdm ? this.tdmLabels().map((p) => [p.x, p.z]) : []),
      ],
      i = t.map((p) => p[0]),
      s = t.map((p) => p[1]),
      o = this.tdm ? 12 : 30,
      a = Math.min(...i) - o,
      r = Math.max(...i) + o,
      l = Math.min(...s) - o,
      c = Math.max(...s) + o,
      h = this.mapCanvas,
      d = Math.min(h.width / (r - a), h.height / (c - l)),
      u = (h.width - (r - a) * d) / 2,
      f = (h.height - (c - l) * d) / 2;
    return {
      toScreen: (p, m) => [u + (p - a) * d, f + (m - l) * d],
      scale: d,
      minX: a,
      minZ: l,
      ox: u,
      oz: f,
    };
  }
  drawMap() {
    const e = this.mapCanvas,
      t = this.state;
    if (!e || !t) return;
    const i = e.getContext("2d"),
      s = this.mapTransform();
    if (
      !this.mapBg ||
      performance.now() - this.mapBgAt >
        (performance.now() < this.mapFreshUntil ? 700 : 4e3)
    ) {
      this.mapBgAt = performance.now();
      const h = this.mapBg ?? (this.mapBg = document.createElement("canvas"));
      ((h.width = e.width), (h.height = e.height));
      const d = h.getContext("2d"),
        u = d.createImageData(h.width, h.height),
        f = 4;
      for (let p = 0; p < h.height; p += f)
        for (let m = 0; m < h.width; m += f) {
          const y = s.minX + (m - s.ox) / s.scale,
            g = s.minZ + (p - s.oz) / s.scale,
            b = this.deps.surface(y, g),
            S = b ? (b >> 16) & 255 : 24,
            M = b ? (b >> 8) & 255 : 32,
            x = b ? b & 255 : 40;
          for (let T = 0; T < f; T++)
            for (let A = 0; A < f; A++) {
              const _ = ((p + T) * h.width + m + A) * 4;
              _ >= u.data.length ||
                ((u.data[_] = S * 0.55 + 10),
                (u.data[_ + 1] = M * 0.55 + 14),
                (u.data[_ + 2] = x * 0.55 + 20),
                (u.data[_ + 3] = 255));
            }
        }
      d.putImageData(u, 0, 0);
    }
    (i.clearRect(0, 0, e.width, e.height),
      i.drawImage(this.mapBg, 0, 0),
      (i.strokeStyle = "#ffffff10"),
      (i.lineWidth = 1));
    for (let h = 0; h < e.width; h += 40)
      (i.beginPath(), i.moveTo(h, 0), i.lineTo(h, e.height), i.stroke());
    for (let h = 0; h < e.height; h += 40)
      (i.beginPath(), i.moveTo(0, h), i.lineTo(e.width, h), i.stroke());
    if (this.tdm) {
      this.drawTdmMap(i, s);
      return;
    }
    ((i.strokeStyle = "#ffffff30"),
      i.setLineDash([6, 6]),
      (i.lineWidth = 2),
      i.beginPath(),
      [
        [t.hq[0][0], t.hq[0][1]],
        ...t.f.map((h) => [h[4], h[5]]),
        [t.hq[1][0], t.hq[1][1]],
      ].forEach((h, d) => {
        const [u, f] = s.toScreen(h[0], h[1]);
        d ? i.lineTo(u, f) : i.moveTo(u, f);
      }),
      i.stroke(),
      i.setLineDash([]));
    const a = this.team || 1,
      r = new Set(t.my.spawns),
      l = (h, d, u, f, p, m, y = 0, g = !1) => {
        const [b, S] = s.toScreen(d, u),
          M = m ? 17 : 15,
          x = r.has(h),
          T = this.chosenSpawn === h;
        (i.save(),
          T && ((i.shadowColor = "#ffb547"), (i.shadowBlur = 18)),
          (i.fillStyle = "#0b1118e6"),
          (i.strokeStyle = T ? "#ffb547" : x ? "#ffffffcc" : "#ffffff40"),
          (i.lineWidth = T ? 3 : 2),
          i.beginPath(),
          m
            ? i.roundRect(b - M, S - M, M * 2, M * 2, 6)
            : i.arc(b, S, M, 0, Math.PI * 2),
          i.fill(),
          i.stroke(),
          i.restore(),
          (i.fillStyle = f),
          i.beginPath(),
          m
            ? i.roundRect(b - M + 4, S - M + 4, M * 2 - 8, M * 2 - 8, 4)
            : i.arc(b, S, M - 4, 0, Math.PI * 2),
          i.fill(),
          y &&
            !m &&
            ((i.strokeStyle = y > 0 ? this.col(1) : this.col(2)),
            (i.lineWidth = 4),
            i.beginPath(),
            i.arc(
              b,
              S,
              M + 4,
              -Math.PI / 2,
              -Math.PI / 2 + Math.abs(y) * Math.PI * 2,
            ),
            i.stroke()),
          g &&
            ((i.strokeStyle = "#ffffff"),
            (i.lineWidth = 2),
            i.setLineDash([3, 3]),
            i.beginPath(),
            i.arc(b, S, M + 8, 0, Math.PI * 2),
            i.stroke(),
            i.setLineDash([])),
          (i.fillStyle = "#fff"),
          (i.font = `${m ? 11 : 15}px "Russo One", sans-serif`),
          (i.textAlign = "center"),
          (i.textBaseline = "middle"),
          i.fillText(p, b, S + 1));
      };
    l(
      "hq",
      t.hq[a - 1][0],
      t.hq[a - 1][1],
      this.col(a),
      this.say("HQ", "ШТАБ"),
      !0,
    );
    const c = Al(a);
    l(
      "enemy-hq",
      t.hq[c - 1][0],
      t.hq[c - 1][1],
      this.col(c) + "99",
      this.say("HQ", "ШТАБ"),
      !0,
    );
    for (const h of t.f) {
      const d = h[1] ? this.col(h[1]) : "#9aa6b2",
        u = h[1] === 0 ? h[2] / 100 : 0;
      l(h[0], h[4], h[5], d, h[0], !1, u, !!h[3]);
    }
    for (const h of t.my.vs ?? []) {
      const d = `v${h[0]}`,
        [u, f] = s.toScreen(h[2], h[3]),
        p = this.chosenSpawn === d;
      (i.save(),
        p && ((i.shadowColor = "#ffb547"), (i.shadowBlur = 16)),
        (i.fillStyle = "#0b1118ee"),
        (i.strokeStyle = p ? "#ffb547" : "#57dcbb"),
        (i.lineWidth = p ? 3 : 2),
        i.beginPath(),
        i.roundRect(u - 13, f - 10, 26, 20, 5),
        i.fill(),
        i.stroke(),
        i.restore(),
        (i.fillStyle = p ? "#ffb547" : "#8ff0d8"),
        (i.font = '11px "Russo One", sans-serif'),
        (i.textAlign = "center"),
        (i.textBaseline = "middle"),
        i.fillText(h[1] === 6 ? "✚" : "▬", u, f + 1));
    }
  }
  tdmLabels() {
    var e;
    return ((e = Yc(this.mapId)) == null ? void 0 : e.labels) ?? [];
  }
  drawTdmMap(e, t) {
    const i = this.state,
      s = this.team || 1,
      o = Al(s),
      a = (r, l, c, h, d) => {
        const [u, f] = t.toScreen(r, l),
          p = d ? 64 : Math.max(30, c.length * 11 + 14),
          m = d ? 30 : 24;
        ((e.fillStyle = "#0b1118e0"),
          (e.strokeStyle = h),
          (e.lineWidth = 2),
          e.beginPath(),
          e.roundRect(u - p / 2, f - m / 2, p, m, 7),
          e.fill(),
          e.stroke(),
          (e.fillStyle = h),
          (e.font = `${d ? 13 : 14}px "Russo One", sans-serif`),
          (e.textAlign = "center"),
          (e.textBaseline = "middle"),
          e.fillText(c, u, f + 1));
      };
    for (const r of this.tdmLabels())
      a(r.x, r.z, r[this.deps.lang()], "#ffd166", !1);
    (a(i.hq[s - 1][0], i.hq[s - 1][1], this.say("YOU", "ВЫ"), this.col(s), !0),
      a(
        i.hq[o - 1][0],
        i.hq[o - 1][1],
        this.say("ENEMY", "ВРАГ"),
        this.col(o),
        !0,
      ));
  }
  pickOnMap(e) {
    const t = this.state,
      i = this.mapCanvas;
    if (!t || !i || this.tdm) return;
    const s = i.getBoundingClientRect(),
      o = Math.min(s.width / i.width, s.height / i.height) || 1,
      a = (e.clientX - s.left - (s.width - i.width * o) / 2) / o,
      r = (e.clientY - s.top - (s.height - i.height * o) / 2) / o,
      l = this.mapTransform(),
      c = this.team || 1,
      h = [
        ["hq", t.hq[c - 1][0], t.hq[c - 1][1]],
        ...t.f.map((f) => [f[0], f[4], f[5]]),
        ...(t.my.vs ?? []).map((f) => [`v${f[0]}`, f[2], f[3]]),
      ];
    let d = null,
      u = 900;
    for (const [f, p, m] of h) {
      const [y, g] = l.toScreen(p, m),
        b = (y - a) ** 2 + (g - r) ** 2;
      b < u && t.my.spawns.includes(f) && ((d = f), (u = b));
    }
    d &&
      ((this.chosenSpawn = d), this.renderSpawns(), this.deps.sfx.uiTick(!0));
  }
  paintFlagChip(e) {
    var a;
    const t = this.flagChips.get(e[0]);
    if (!t) return;
    const i = e[1] === 0 ? "neutral" : e[1] === this.team ? "mine" : "theirs";
    t.dataset.owner !== i && (t.dataset.owner = i);
    const s = e[2] / 100,
      o = s === 0 ? "none" : (s > 0 ? 1 : 2) === this.team ? "mine" : "theirs";
    (t.style.setProperty("--p", String(Math.abs(s))),
      (t.dataset.toward = o),
      t.classList.toggle("contested", !!e[3]),
      t.classList.toggle(
        "here",
        ((a = this.state) == null ? void 0 : a.my.zone) === e[0],
      ));
  }
  updateCapture(e, t) {
    if (!e || !t) {
      this.capEl.classList.add("hidden");
      return;
    }
    this.capEl.classList.remove("hidden");
    const [i, s, o, a] = e,
      r = o / 100,
      l = this.team === 1 ? 1 : -1,
      c = r * l,
      h = this.capEl.querySelector(".fc-title"),
      d = this.capEl.querySelector(".fc-note"),
      u = this.capEl.querySelector(".fc-fill");
    let f, p;
    (a
      ? ((f = this.say(`CONTESTED ${i}`, `БОЙ ЗА ${i}`)), (p = "contested"))
      : s === this.team && c >= 0.999
        ? ((f = this.say(`HOLDING ${i}`, `УДЕРЖИВАЕМ ${i}`)), (p = "mine"))
        : s && s !== this.team
          ? ((f = this.say(`NEUTRALIZING ${i}`, `НЕЙТРАЛИЗАЦИЯ ${i}`)),
            (p = "theirs"))
          : ((f = this.say(`CAPTURING ${i}`, `ЗАХВАТ ${i}`)), (p = "mine")),
      h.textContent !== f && (h.textContent = f),
      (this.capEl.dataset.tone = p),
      (u.style.width = `${Math.round(Math.abs(c) * 100)}%`),
      (u.style.background = c >= 0 ? "var(--team-mine)" : "var(--team-enemy)"),
      (d.textContent = a
        ? this.say(
            "Clear the enemy out of the zone",
            "Выбейте противника из зоны",
          )
        : ""));
  }
  addKill(e) {
    const t = mt("div", "ff-row");
    e.me &&
      t.classList.add(e.me === "k" ? "me-k" : e.me === "a" ? "me-a" : "me-v");
    const i = (l) => (l ? this.col(l) : "var(--vr-muted)"),
      s = mt("b", "", e.k || this.say("—", "—"));
    s.style.color = i(e.kt);
    const o = mt("span", "ff-w", e.w ? `[${e.w}${e.hs ? " ⊕" : ""}]` : "✕"),
      a = mt("b", "", e.v);
    if (((a.style.color = i(e.vt)), e.k)) {
      if ((t.append(s), e.a)) {
        const l = mt("b", "ff-a", `+ ${e.a}`);
        ((l.style.color = i(e.at ?? 0)), t.append(l));
      }
      t.append(o, a);
    } else t.append(o, a);
    this.feedEl.prepend(t);
    const r = matchMedia("(max-width: 760px), (max-height: 520px)").matches
      ? 4
      : 6;
    for (; this.feedEl.children.length > r;)
      this.feedEl.lastElementChild.remove();
    (setTimeout(() => t.classList.add("fade"), 6e3),
      setTimeout(() => t.remove(), 7e3),
      e.me === "k" && this.popScore(0, e.hs ? "headshot-kill" : "kill-mark"));
  }
  popScore(e, t) {
    var a;
    const i = {
      kill: ["ENEMY KILLED", "ВРАГ УНИЧТОЖЕН"],
      headshot: ["HEADSHOT", "В ГОЛОВУ"],
      defend: ["FLAG DEFENDED", "ЗАЩИТА ФЛАГА"],
      victory: ["VICTORY", "ПОБЕДА"],
      vehicle: ["VEHICLE DESTROYED", "ТЕХНИКА УНИЧТОЖЕНА"],
      "vehicle-assist": [
        "VEHICLE DESTROYED · ASSIST",
        "ПОМОЩЬ В УНИЧТОЖЕНИИ ТЕХНИКИ",
      ],
      assist: ["KILL ASSIST", "ПОМОЩЬ В УБИЙСТВЕ"],
      "kill-mark": ["", ""],
      "headshot-kill": ["", ""],
      "first-blood": ["FIRST BLOOD", "ПЕРВАЯ КРОВЬ"],
      revenge: ["REVENGE", "МЕСТЬ"],
      knife: ["KNIFE KILL", "УБИЙСТВО НОЖОМ"],
    };
    let s;
    if (t.startsWith("capture-assist"))
      s = this.say(
        `HELPED CAPTURE ${t.slice(15)}`,
        `УЧАСТИЕ В ЗАХВАТЕ ${t.slice(15)}`,
      );
    else if (t.startsWith("capture"))
      s = this.say(
        `FLAG ${t.slice(8)} CAPTURED`,
        `ФЛАГ ${t.slice(8)} ЗАХВАЧЕН`,
      );
    else if (t.startsWith("streak:")) {
      const r = Number(t.slice(7));
      s =
        ((a = a5[r]) == null ? void 0 : a[this.deps.lang()]) ??
        this.say(`${r} KILL STREAK`, `СЕРИЯ: ${r}`);
    } else
      t.startsWith("neutralize")
        ? (s = this.say(
            `FLAG ${t.slice(11)} NEUTRALIZED`,
            `ФЛАГ ${t.slice(11)} НЕЙТРАЛИЗОВАН`,
          ))
        : (s = (i[t] ?? [t, t])[this.en() ? 0 : 1]);
    if (!e && !s) {
      const r = mt("div", "fp-x", "✕");
      (this.popEl.append(r), setTimeout(() => r.remove(), 700));
      return;
    }
    const o = mt("div", "fp-row");
    for (
      o.append(mt("b", "", e ? `+${e}` : ""), mt("span", "", s)),
        this.popEl.append(o);
      this.popEl.querySelectorAll(".fp-row").length > 4;
    )
      this.popEl.querySelector(".fp-row").remove();
    (setTimeout(() => o.classList.add("fade"), 2200),
      setTimeout(() => o.remove(), 2900));
  }
  banner(e, t) {
    ((this.bannerEl.textContent = e),
      (this.bannerEl.dataset.tone = t),
      this.placeBanner(),
      this.bannerEl.classList.remove("hidden", "show"),
      this.bannerEl.offsetWidth,
      this.bannerEl.classList.add("show"),
      (this.bannerT = performance.now() + 3200));
  }
  placeBanner() {
    if (!this.root) return;
    const e =
        document.body.classList.contains("mobile") ||
        matchMedia("(max-width: 760px), (max-height: 520px)").matches,
      t = this.root.querySelector(".front-stack");
    if (e && innerWidth <= innerHeight * 1.25) {
      (this.tdmStatus.parentElement !== t && t.prepend(this.tdmStatus),
        (this.bannerEl.parentElement !== t ||
          t.firstElementChild !== this.bannerEl) &&
          t.prepend(this.bannerEl),
        (this.bannerEl.style.top = ""));
      return;
    }
    (this.tdmStatus.parentElement !== this.root &&
      this.root.insertBefore(this.tdmStatus, t),
      this.bannerEl.parentElement !== this.root &&
        this.root.append(this.bannerEl),
      (this.bannerEl.style.top = e
        ? `${Math.round(this.hud.getBoundingClientRect().bottom + 6)}px`
        : ""));
  }
  showEnd(e) {
    (this.closeDeploy(),
      (this.endAt = performance.now()),
      (this.endNext = e.next));
    const t = !e.mine;
    (t || MZ(),
      this.matchEndUi.show(e, this.team || 1, this.tdm, t),
      this.showWindow(this.endEl, !0),
      this.deps.unlockInput());
  }
  renderResults(e, t) {
    return !this.matchEndUi || this.endEl.classList.contains("hidden")
      ? !1
      : this.matchEndUi.frame(e, t);
  }
  supplyPlace(e) {
    return e === "hq"
      ? this.tdm
        ? this.say("YARD AMMO DEPOT", "СКЛАД БОЕПРИПАСОВ")
        : this.say("HQ SUPPLY DEPOT", "СКЛАД ШТАБА")
      : this.say(`FLAG ${e} · FIELD CACHE`, `ФЛАГ ${e} · ПОЛЕВОЙ ЗАПАС`);
  }
  updateSupply(e, t) {
    var r, l;
    const i = this.sup,
      s = this.supplyEl,
      o = !!((r = this.state) != null && r.my.deployed) && t,
      a = o && !!i.at;
    if ((s.classList.toggle("hidden", !a), a)) {
      const c = (e - i.t0) / 1e3,
        h = s.querySelector(".fs-title"),
        d = s.querySelector(".fs-note"),
        u = s.querySelector(".fs-fill"),
        f = Math.max(0, Math.ceil(i.wait - c));
      let p, m, y, g;
      (i.full
        ? ((p = "full"),
          (m = this.say("FULLY STOCKED", "БОЕЗАПАС ПОЛОН")),
          (y = this.supplyPlace(i.at)),
          (g = 1))
        : f > 0
          ? ((p = "wait"),
            (m = this.say(`Resupply in ${f} s`, `Снабжение через ${f} с`)),
            (y = this.supplyPlace(i.at)),
            (g = 1 - f / (i.at === "hq" ? r5.hqCooldown : r5.flagCooldown)))
          : ((p = "fill"),
            (m = this.say("RESUPPLYING…", "ПОПОЛНЕНИЕ БОЕЗАПАСА…")),
            (y =
              i.at === "hq" && !this.tdm
                ? this.say(
                    "Ammo, grenades, medical kit, armour, health",
                    "Патроны, гранаты, аптечки, броня, здоровье",
                  )
                : this.say("Ammunition and grenades", "Патроны и гранаты")),
            (g = Math.min(1, 1 - Math.max(0, i.hold - c) / r5.hold))),
        (s.dataset.state = p),
        h.textContent !== m && (h.textContent = m),
        d.textContent !== y && (d.textContent = y),
        (u.style.width = `${Math.round(Math.max(0, g) * 100)}%`));
    }
    if (e >= this.ammoCheckAt) {
      this.ammoCheckAt = e + 300;
      const c = o && !i.at ? this.deps.ammo() : null,
        h = c
          ? c.rounds + c.reserve === 0
            ? "out"
            : c.reserve <= c.mag
              ? "low"
              : ""
          : "";
      if (
        (h !== this.lowAmmo &&
          ((this.lowAmmo = h),
          this.lowAmmoEl.classList.toggle("hidden", !h),
          (this.lowAmmoEl.dataset.level = h),
          document.body.classList.toggle("front-ammo-low", h === "low"),
          document.body.classList.toggle("front-ammo-out", h === "out")),
        h)
      ) {
        const d = (l = this.state) == null ? void 0 : l.my.dp,
          u = this.lastPos,
          f = d && u ? Math.round(Math.hypot(d[0] - u.x, d[2] - u.z)) : 0,
          p =
            this.state && u
              ? this.state.f
                  .filter((S) => S[1] === this.team && !S[3])
                  .sort(
                    (S, M) =>
                      Math.hypot(S[4] - u.x, S[5] - u.z) -
                      Math.hypot(M[4] - u.x, M[5] - u.z),
                  )[0]
              : void 0,
          m = p && u ? Math.round(Math.hypot(p[4] - u.x, p[5] - u.z)) : 0,
          y =
            h === "out"
              ? this.say("OUT OF AMMO", "НЕТ ПАТРОНОВ")
              : this.say("LOW AMMO", "МАЛО ПАТРОНОВ"),
          g =
            p && m < f
              ? this.say(`flag ${p[0]} ${m} m`, `флаг ${p[0]} ${m} м`)
              : this.say(`depot ${f} m`, `склад ${f} м`),
          b = `${y} · ${g}`;
        this.lowAmmoEl.textContent !== b && (this.lowAmmoEl.textContent = b);
      }
    }
  }
  showSupplied(e) {
    const t = mt("div", "fsd-card");
    t.append(
      mt(
        "div",
        "fsd-title",
        e.at === "hq"
          ? this.say("RESUPPLIED AT THE DEPOT", "ПОПОЛНЕНО НА СКЛАДЕ")
          : this.say(`RESUPPLIED · FLAG ${e.at}`, `ПОПОЛНЕНО · ФЛАГ ${e.at}`),
      ),
    );
    const i = mt("div", "fsd-items");
    for (const [s, o] of e.items.slice(0, 6)) {
      const a = mt("div", "fsd-item"),
        r = document.createElement("canvas");
      ((r.width = 40), (r.height = 40));
      const l = r.getContext("2d");
      (l && this.deps.drawIcon(l, s),
        a.append(r, mt("b", "", `+${o}`)),
        (a.title = this.deps.itemName(s)),
        i.append(a));
    }
    (e.armor && i.append(mt("div", "fsd-tag", this.say("armour", "броня"))),
      e.hp && i.append(mt("div", "fsd-tag", this.say("health", "здоровье"))),
      e.svc &&
        i.append(
          mt(
            "div",
            "fsd-tag",
            this.say("weapons serviced", "оружие обслужено"),
          ),
        ),
      t.append(i),
      this.supplyToast.replaceChildren(t),
      this.deps.sfx.uiTick(!0),
      setTimeout(() => {
        t.isConnected && t.classList.add("out");
      }, 2600),
      setTimeout(() => {
        t.isConnected && t.remove();
      }, 3200));
  }
  toggleBoard(e = !this.boardOpen) {
    ((this.boardOpen = e),
      this.boardEl.classList.toggle("hidden", !e),
      e && ((this.boardAt = 0), this.lastBoard && this.renderBoard()));
  }
  get boardIsOpen() {
    return this.boardOpen;
  }
  renderBoard() {
    const e = this.lastBoard;
    if (!e) return;
    const t = this.team || 1,
      i = (o) => {
        const a = mt("div", "fb-col"),
          r = mt("div", "fb-head");
        r.style.color = this.col(o);
        const l = this.state ? this.state.tk[o - 1] : 0;
        (r.append(
          mt(
            "b",
            "",
            `${o === t ? this.say("US", "МЫ") : this.say("ENEMY", "ВРАГ")} · ${dg[o][this.deps.lang()]}`,
          ),
          mt("span", "", String(l)),
        ),
          a.append(r));
        const c = mt("div", "fb-row fb-hdr");
        (c.append(
          mt("span", "", this.say("Soldier", "Боец")),
          mt("span", "", this.say("Score", "Очки")),
          mt("span", "", "K"),
          mt("span", "", "D"),
          mt("span", "", "ms"),
        ),
          a.append(c));
        for (const h of e.rows.filter((d) => d[1] === o)) {
          const d = mt("div", "fb-row"),
            u = mt("span", "fb-name", h[0]);
          (h[6] && u.append(mt("i", "fb-ai", "AI")),
            h[7] &&
              (d.classList.add("fb-me"),
              d.style.setProperty("--me", this.col(o)),
              u.append(mt("i", "fb-you", this.say("YOU", "ВЫ")))),
            d.append(
              u,
              mt("span", "", String(h[2])),
              mt("span", "", String(h[3])),
              mt("span", "", String(h[4])),
              mt("span", "fb-ping", h[6] ? "" : String(h[5])),
            ),
            a.append(d));
        }
        return a;
      },
      s = mt("button", "fb-close", "×");
    ((s.type = "button"),
      s.setAttribute("aria-label", this.say("Close", "Закрыть")),
      s.addEventListener("click", (o) => {
        (o.stopPropagation(), this.toggleBoard(!1));
      }),
      this.boardEl.replaceChildren(i(t), i(Al(t)), s));
  }
  update(e, t, i) {
    var o;
    if (!this.active || !this.root) return;
    const s = performance.now();
    if (
      (this.deployWanted &&
        s >= this.deployShowAt &&
        this.deployEl.classList.contains("hidden") &&
        this.endEl.classList.contains("hidden") &&
        this.openDeploy(),
      this.deploying)
    ) {
      const a = this.deployEl.querySelector(".fd-go"),
        r = Math.ceil((this.deployWaitUntil - s) / 1e3),
        l =
          r > 0
            ? this.say(`Reinforcements in ${r}`, `Подкрепление через ${r}`)
            : this.say("DEPLOY", "В БОЙ");
      (a.textContent !== l && (a.textContent = l), (a.disabled = r > 0));
    }
    (this.endEl.classList.contains("hidden") ||
      (Math.max(0, Math.ceil(this.endNext - (s - this.endAt) / 1e3)) <= 0 &&
        s - this.endAt > (this.endNext + 4) * 1e3 &&
        (this.showWindow(this.endEl, !1),
        (o = this.matchEndUi) == null || o.hide())),
      !this.bannerEl.classList.contains("hidden") &&
        s > this.bannerT &&
        this.bannerEl.classList.add("hidden"),
      this.boardOpen &&
        s - this.boardAt > 1e3 &&
        ((this.boardAt = s), this.deps.send({ a: "board" })),
      this.hud.classList.toggle("dead", !i),
      (this.lastPos = t),
      this.updateSupply(s, i),
      this.tdm &&
        (this.shieldUntil > s - 200 || this.tdmStatus.childElementCount) &&
        this.renderStatus(),
      this.updateMarkers(e, t));
  }
  updateMarkers(e, t) {
    const i = this.state;
    if (!i) return;
    if (document.body.classList.contains("cinematic-hud")) {
      for (const [l, c] of this.markers)
        (this.deps.scene.remove(c),
          this.markers.delete(l),
          this.markerKey.delete(l));
      return;
    }
    const s = new Set(),
      o = (l, c, h, d, u, f, p, m = 1, y = 0.92, g) => {
        var _;
        s.add(l);
        let b = this.markers.get(l);
        const S = g ? Math.max(1, Math.round(g.share * 12)) : 0,
          M = `${u}|${f}|${p}|${S}|${(g == null ? void 0 : g.color) ?? ""}`;
        if (
          (b ||
            ((b = new os(
              new es({
                depthTest: !1,
                depthWrite: !1,
                transparent: !0,
                sizeAttenuation: !1,
                toneMapped: !1,
                fog: !1,
              }),
            )),
            oh(b),
            (b.renderOrder = 999),
            this.deps.scene.add(b),
            this.markers.set(l, b)),
          this.markerKey.get(l) !== M)
        ) {
          this.markerKey.set(l, M);
          const C = b.material;
          ((_ = C.map) == null || _.dispose(),
            (C.map = u.startsWith("mine:")
              ? xZ(u, f)
              : TZ(u, f, p, S / 12, g == null ? void 0 : g.color)),
            (C.needsUpdate = !0));
        }
        const x = Math.hypot(c - t.x, h - t.z);
        b.position.set(c + 0.5, d, h + 0.5);
        const T = g
            ? 1 +
              (g.alarm ? 0.14 : 0.06) *
                Math.sin(performance.now() * (g.alarm ? 0.012 : 0.007))
            : 1,
          A = (this.deps.mobile ? 0.13 : 0.1) * m * T;
        (b.scale.set(A, A, 1),
          (b.material.opacity =
            x < 7 * m ? (0.3 * y) / 0.92 + (m < 1 ? 0.25 : 0) : y));
      };
    for (const l of this.tdm ? [] : i.f) {
      const c = this.col(l[1]),
        h = Math.hypot(l[4] - t.x, l[5] - t.z),
        d = h < 60 ? Math.round(h / 5) * 5 : Math.round(h / 10) * 10,
        u = l[2] / 100,
        f = l[1],
        p =
          f === 1
            ? u < 0.995
              ? 2
              : 0
            : f === 2
              ? u > -0.995
                ? 1
                : 0
              : u > 0.005
                ? 1
                : u < -0.005
                  ? 2
                  : 0,
        m = f === 1 ? 1 - u : f === 2 ? 1 + u : Math.abs(u),
        y =
          p && (l[3] || m > 0.04)
            ? {
                share: Math.min(1, m),
                color: this.col(p),
                alarm: f === this.team && p !== this.team,
              }
            : void 0;
      o(`f${l[0]}`, l[4], l[5], l[6] + 11, l[0], c, `${d}m`, 1, 0.92, y);
    }
    const a = this.team || 1;
    this.tdm ||
      o(
        "hq",
        i.hq[a - 1][0],
        i.hq[a - 1][1],
        i.hq[a - 1][2] + 14,
        this.say("HQ", "ШТАБ"),
        this.col(a),
        "",
      );
    const r = i.my.dp;
    if (r) {
      const l = Math.hypot(r[0] - t.x, r[2] - t.z);
      (this.lowAmmo || l < 40) &&
        o(
          "depot",
          r[0] - 0.5,
          r[2] - 0.5,
          r[1] + 4,
          this.say("AMMO", "БК"),
          "#ffd166",
          l < 40 ? "" : `${Math.round(l / 10) * 10}m`,
        );
    }
    for (const l of this.mines) {
      const c = Math.hypot(l[0] + 0.5 - t.x, l[2] + 0.5 - t.z);
      c > s5.markRange ||
        Math.abs(l[1] - t.y) > 24 ||
        o(
          `m${l[0]},${l[1]},${l[2]}`,
          l[0],
          l[2],
          l[1] + 0.95,
          `mine:${l[3]}${l[4]}`,
          Ud.mine,
          "",
          0.44,
          Math.min(0.95, Math.max(0.15, (s5.markRange - c) / 14)),
        );
    }
    for (const [l, c] of this.markers)
      s.has(l) ||
        (this.deps.scene.remove(c),
        this.markers.delete(l),
        this.markerKey.delete(l));
  }
  compassMarkers() {
    if (!this.state) return [];
    const e = (this.tdm ? [] : this.state.f).map((i) => ({
        x: i[4],
        z: i[5],
        color: this.col(i[1]),
        label: i[0],
      })),
      t = this.state.my.dp;
    return (
      t &&
        this.lowAmmo &&
        e.push({
          x: t[0],
          z: t[2],
          color: "#ffd166",
          label: this.say("AMMO", "БК"),
        }),
      e
    );
  }
  mineRefusal(e, t) {
    const i = this.state;
    if (!i || this.tdm) return this.say("Not now", "Сейчас нельзя");
    if (i.ph !== "live")
      return this.say(
        "Mines are laid once the battle is on",
        "Мины ставят, когда бой начался",
      );
    for (const s of i.hq)
      if (Math.hypot(e + 0.5 - s[0], t + 0.5 - s[1]) < s5.hqClear)
        return this.say(
          "No mines this close to a headquarters",
          "У штаба мины не ставят",
        );
    return null;
  }
  friendlyMineAt(e, t, i) {
    return this.mines.some((s) => s[0] === e && s[1] === t && s[2] === i);
  }
  onLocalDeath() {}
  isEnemyPlayer(e) {
    const t = this.playerTeams.get(e);
    return !!t && !!this.team && t !== this.team;
  }
  isFriendPlayer(e) {
    const t = this.playerTeams.get(e);
    return !!t && t === this.team;
  }
}
