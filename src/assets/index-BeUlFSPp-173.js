// index-BeUlFSPp 173 — say
// Lines 97168-99171 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class dne {
  constructor(e) {
    this.deps = e;
  }
  active = !1;
  mode = "conquest";
  mapId = "";
  team = 0;
  state = null;
  playerTeams = new Map();
  botTeams = new Map();
  root = null;
  hud;
  flagChips = new Map();
  ticketEls;
  phaseEl;
  timeEl;
  capEl;
  feedEl;
  popEl;
  bannerEl;
  deployEl;
  endEl;
  matchEndUi = null;
  boardEl;
  deployWaitUntil = 0;
  deployWanted = !1;
  deployShowAt = 0;
  chosenClass = "assault";
  chosenSpawn = "hq";
  boardOpen = !1;
  boardAt = 0;
  lastBoard = null;
  endAt = 0;
  endNext = 0;
  bannerT = 0;
  markers = new Map();
  mines = [];
  markerKey = new Map();
  mapCanvas = null;
  mapBg = null;
  mapBgAt = 0;
  mapW = 640;
  mapH = 360;
  mapFreshUntil = 0;
  lastZone;
  lastCapture = 0;
  sup = { at: "", hold: 0, wait: 0, full: !1, t0: 0 };
  supplyEl;
  lowAmmoEl;
  supplyToast;
  lowAmmo = "";
  ammoCheckAt = 0;
  supplyTipShown = !1;
  lastHu = "";
  tdmClock;
  tdmStatus;
  killedBy = null;
  lastStreak = 0;
  shieldUntil = 0;
  en() {
    return !wi();
  }
  col(e) {
    return mc(e, this.team);
  }
  say(e, t) {
    return I(e, t);
  }
  get classIds() {
    return LA(this.mode);
  }
  get tdm() {
    return wb(this.mode);
  }
  get arms() {
    return this.mode === "armsrace";
  }
  get air() {
    return this.mode === "air";
  }
  endlessAmmo(e) {
    return (
      this.active &&
      (this.mode === "tdm" ? vq : this.mode === "armsrace" ? YV : null)?.has(
        e,
      ) === !0
    );
  }
  armsHud = null;
  classDetail;
  lastCc = "";
  get pickerDeps() {
    return {
      drawIcon: (e, t) => this.deps.drawIcon(e, t),
      itemName: (e) => this.deps.itemName(e),
    };
  }
  armsLevel = -1;
  myName = "";
  activate(e = this.mode) {
    if (this.active) {
      this.setMode(e);
      return;
    }
    ((this.active = !0),
      (this.mode = e),
      document.body.classList.add("frontline"),
      document.body.classList.toggle("tdm", wb(e)),
      document.body.classList.toggle("arms", e === "armsrace"),
      this.loadClass(),
      this.build());
  }
  loadClass() {
    try {
      const e = localStorage.getItem(
        this.tdm ? "fc-tdm-class" : "fc-front-class",
      );
      e && e in Va && Va[e].mode === this.mode && (this.chosenClass = e);
    } catch {}
    Va[this.chosenClass].mode !== this.mode &&
      (this.chosenClass = this.classIds[0]);
  }
  setMode(e) {
    if (
      e === this.mode ||
      ((this.mode = e),
      document.body.classList.toggle("tdm", wb(e)),
      document.body.classList.toggle("arms", e === "armsrace"),
      this.loadClass(),
      !this.root)
    )
      return;
    this.mountArms();
    const t = this.deploying,
      i = this.buildDeploy();
    (this.deployEl.replaceWith(i),
      (this.deployEl = i),
      this.hud.classList.toggle("tdm", this.tdm),
      this.hud.classList.toggle("arms", this.arms),
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
    switch ((this.active || this.activate(), e.t)) {
      case "state":
        this.onState(e);
        break;
      case "teams": {
        (this.playerTeams.clear(), this.botTeams.clear());
        for (const [t, i] of e.p) this.playerTeams.set(t, i);
        for (const [t, i] of e.b) this.botTeams.set(t, i);
        this.deps.onTeamsChanged();
        break;
      }
      case "kill":
        this.addKill(e);
        break;
      case "flag": {
        const t = e.team === this.team,
          i =
            e.ev === "neutral" &&
            this.state?.f.find((n) => n[0] === e.id)?.[1] === this.team;
        (e.ev === "captured"
          ? this.banner(
              t
                ? this.say(`Flag ${e.id} captured`, `Флаг ${e.id} захвачен`)
                : this.say(`Flag ${e.id} lost`, `Флаг ${e.id} потерян`),
              t ? "good" : "bad",
            )
          : i &&
            this.banner(
              this.say(`Flag ${e.id} is falling!`, `Флаг ${e.id} под угрозой!`),
              "bad",
            ),
          this.deps.sfx.capture?.(t));
        break;
      }
      case "score":
        this.popScore(e.pts, e.why, e.xp);
        break;
      case "deploy": {
        if (e.open && this.arms && e.reason === "death") {
          (this.armsHud?.died(e.by ?? null, e.wait || h_.respawn),
            (this.deployWanted = !1));
          break;
        }
        if (e.open)
          ((this.deployWaitUntil = performance.now() + e.wait * 1e3),
            (this.deployWanted = !0),
            (this.deployShowAt =
              performance.now() +
              (e.reason === "death" ? (this.air ? 3700 : 1600) : 0)),
            (this.killedBy = e.reason === "death" && e.by ? e.by : null),
            this.renderKiller(),
            e.reason === "round" &&
              (this.showWindow(this.endEl, !1), this.matchEndUi?.hide()));
        else if (
          ((this.deployWanted = !1),
          this.closeDeploy(),
          this.armsHud?.back(),
          e.yaw !== void 0 && this.deps.face(e.yaw),
          this.tdm &&
            (this.shieldUntil =
              performance.now() + (this.arms ? h_.shield : yq.shield) * 1e3),
          this.arms && this.deps.selectSlot(0),
          !this.supplyTipShown)
        ) {
          this.supplyTipShown = !0;
          const t = this.air && this.chosenClass === "tanker";
          setTimeout(
            () =>
              this.banner(
                t
                  ? this.say(
                      "Tanks take zones too · LMB: the gun · hold RMB: the roof machine gun at low jets",
                      "Танки тоже берут зоны · ЛКМ — пушка · удерживать ПКМ — зенитный пулемёт по низким самолётам",
                    )
                  : this.air
                    ? this.say(
                        "Put the gun mark in the lead circle and fire · hold an enemy in front: lock, then RMB — a heat-seeker · X: flares",
                        "Наведите метку пушки в кружок упреждения и стреляйте · держите врага перед носом — захват, затем ПКМ — ракета · X — ловушки",
                      )
                    : this.arms
                      ? this.say(
                          "Every kill: the next weapon · golden knife kill wins",
                          "Каждое убийство — новое оружие · убийство золотым ножом — победа",
                        )
                      : this.tdm
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
          );
        }
        break;
      }
      case "end":
        this.showEnd(e);
        break;
      case "drop":
        this.matchEndUi?.addDrop(e);
        break;
      case "board":
        ((this.lastBoard = e), this.boardOpen && this.renderBoard());
        break;
      case "banner":
        this.banner(Po(e.text), e.tone ?? "info");
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
        this.matchEndUi?.setVote(e);
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
      case "level": {
        ((this.armsLevel = e.lv),
          this.mountArms(),
          this.armsHud?.change(e.lv, !!e.up, e.by, e.lk ?? 0, !!e.self),
          e.lk || this.deps.selectSlot(0));
        break;
      }
      case "race":
        this.raceEvent(e);
        break;
    }
  }
  mountArms() {
    !this.arms ||
      !this.root ||
      (this.armsHud ||
        (this.armsHud = new Yk({
          drawIcon: (e, t) => this.deps.drawIcon(e, t),
          sfx: this.deps.armsSfx,
        })),
      this.armsHud.rung.isConnected ||
        (this.hud.append(this.armsHud.rung),
        this.root.append(this.armsHud.toast, this.armsHud.dead),
        setTimeout(() => this.placeBanner(), 400)));
  }
  raceEvent(e) {
    const t = e.tm === this.team;
    if (e.ev === "knife")
      (this.banner(
        t
          ? this.say(`${e.n} has the GOLDEN KNIFE`, `${e.n} — ЗОЛОТОЙ НОЖ`)
          : this.say(
              `${e.n} has the GOLDEN KNIFE — stop them!`,
              `${e.n} — ЗОЛОТОЙ НОЖ. Не дайте ударить!`,
            ),
        t ? "good" : "bad",
      ),
        t || this.deps.armsSfx.alert());
    else if (e.ev === "close") {
      const i = Mc.length - 1 - e.lv;
      this.banner(
        this.say(
          `${e.n} is ${i} kills from the knife`,
          `${e.n}: до ножа ${i} убийства`,
        ),
        t ? "good" : "bad",
      );
    } else if (e.ev === "steal" && e.v) {
      const i = dt("div", "ff-row ff-steal"),
        n = dt("b", "", e.n);
      n.style.color = this.col(e.tm);
      const o = dt("b", "", e.v);
      ((o.style.color = this.col(2)),
        i.append(
          n,
          dt("span", "ff-w", this.say("[stole a level]", "[украл уровень]")),
          o,
        ),
        this.feedEl.prepend(i),
        setTimeout(() => i.classList.add("fade"), 5e3),
        setTimeout(() => i.remove(), 6e3));
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
      for (const c of this.team === 2 ? [...Sb].reverse() : Sb)
        l.append(this.flagChips.get(c));
    }
    const i = this.team || 1,
      n = pc(i),
      o = (l) => e.tk[l - 1];
    ((this.ticketEls.mine.textContent = String(o(i))),
      (this.ticketEls.theirs.textContent = String(o(n))),
      (this.ticketEls.mineFill.style.width = `${Math.max(0, Math.min(100, (o(i) / Math.max(1, e.tk0)) * 100))}%`),
      (this.ticketEls.theirsFill.style.width = `${Math.max(0, Math.min(100, (o(n) / Math.max(1, e.tk0)) * 100))}%`),
      this.hud.classList.toggle("low-mine", o(i) <= e.tk0 * 0.2));
    for (const l of e.f) this.paintFlagChip(l);
    for (const [l, c] of this.flagChips)
      c.style.display = e.f.some((h) => h[0] === l) ? "" : "none";
    ((this.phaseEl.textContent =
      e.ph === "warmup"
        ? this.say("DEPLOY", "ВЫСАДКА")
        : e.ph === "live"
          ? this.say("ROUND", "РАУНД") + " " + e.r
          : this.say("ROUND OVER", "РАУНД ОКОНЧЕН")),
      (this.timeEl.textContent = jk(e.tl)),
      (this.hud.dataset.phase = e.ph));
    const a = e.my.zone ? e.f.find((l) => l[0] === e.my.zone) : void 0;
    if ((this.updateCapture(a, e.ph === "live"), this.deploying)) {
      (this.renderSpawns(),
        e.hu &&
          `${e.hu}` !== this.lastHu &&
          ((this.lastHu = `${e.hu}`), this.renderDeployHeader()));
      const l = JSON.stringify(e.my.cc ?? {});
      l !== this.lastCc && ((this.lastCc = l), this.paintClasses());
    }
    const r = performance.now();
    (a &&
      a[3] &&
      this.lastZone !== a[0] &&
      r - this.lastCapture > 4e3 &&
      (this.lastCapture = r),
      (this.lastZone = a?.[0]));
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
      n = pc(i),
      o = (h) => e.tk[h - 1],
      a = Math.max(1, o(1), o(2));
    if (
      ((this.ticketEls.mine.textContent = String(o(i))),
      (this.ticketEls.theirs.textContent = String(o(n))),
      (this.ticketEls.mineFill.style.width = `${Math.round((o(i) / a) * 100)}%`),
      (this.ticketEls.theirsFill.style.width = `${Math.round((o(n) / a) * 100)}%`),
      this.hud.classList.toggle("leading", o(i) > o(n)),
      this.hud.classList.toggle("trailing", o(i) < o(n)),
      this.hud.classList.remove("low-mine"),
      (this.tdmClock.textContent =
        e.ph === "warmup" ? String(Math.max(0, e.tl)) : jk(e.tl)),
      this.tdmClock.classList.toggle("urgent", e.ph === "live" && e.tl <= 60),
      (this.phaseEl.textContent =
        e.ph === "warmup"
          ? this.say("DEPLOY", "ВЫСАДКА")
          : e.ph === "live"
            ? this.arms
              ? this.say("ARMS RACE", "ГОНКА ВООРУЖЕНИЙ")
              : this.say("TEAM DEATHMATCH", "КОМАНДНЫЙ БОЙ")
            : this.say("MATCH OVER", "МАТЧ ОКОНЧЕН")),
      this.arms)
    ) {
      this.mountArms();
      const h = e.my.lv ?? 0;
      ((this.armsLevel = h), this.armsHud?.setLevel(h, e.my.lk ?? 0));
      const d = this.armsHud.leaderLine(
        e.ld,
        this.myName,
        this.team || 1,
        e.my.pl ?? 0,
        e.n[0] + e.n[1],
      );
      (d.parentElement !== this.timeEl && this.timeEl.replaceChildren(d),
        this.timeEl.classList.remove("streak"),
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
      return;
    }
    const r = e.my.st ?? 0;
    this.lastStreak = r;
    const l = Object.keys(U2)
        .map(Number)
        .filter((h) => h <= r)
        .pop(),
      c =
        r >= 2 && e.my.deployed
          ? l
            ? `${Un(U2[l])} · ${r}`
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
  statusKey = "";
  renderStatus() {
    if (!this.tdmStatus) return;
    const e = performance.now(),
      t = Math.max(0, (this.shieldUntil - e) / 1e3),
      i = `${t > 0.05 ? t.toFixed(1) : ""}|${this.state?.my.deployed ? 1 : 0}`;
    if (i === this.statusKey) return;
    this.statusKey = i;
    const n = t > 0.05 && !!this.state?.my.deployed;
    let o = this.tdmStatus.querySelector(".ft-chip.shield");
    if (!n) {
      o?.remove();
      return;
    }
    (o ||
      ((o = dt("div", "ft-chip shield")),
      o.append(
        dt("b", "", this.say("SPAWN PROTECTION", "ЗАЩИТА ВЫСАДКИ")),
        dt("span", "ft-left"),
      ),
      this.tdmStatus.append(o)),
      (o.querySelector(".ft-left").textContent =
        `${t.toFixed(1)} ${this.say("s", "с")}`));
  }
  renderKiller() {
    const e = this.deployEl?.querySelector(".fd-killer");
    if (!e) return;
    const t = this.killedBy;
    (e.classList.toggle("hidden", !t),
      t &&
        e.replaceChildren(
          dt("span", "fk-label", this.say("KILLED BY", "ВАС УБИЛ")),
          dt("b", "fk-name", t[0]),
          dt(
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
          dt(
            "span",
            "fk-hp",
            t[3] > 0 ? this.say(`${t[3]} HP left`, `у него ${t[3]} HP`) : "",
          ),
        ));
  }
  build() {
    const e = (this.root = dt("div", "front-root"));
    e.id = "front-root";
    const t = (this.hud = dt("div", "front-hud")),
      i = dt("div", "fh-bar"),
      n = (h) => {
        const d = dt("div", `fh-side ${h}`),
          u = dt("span", "fh-team"),
          f = dt("b", "fh-tk", "0"),
          p = dt("i", "fh-track"),
          m = dt("i", "fh-fill");
        return (
          p.append(m),
          d.append(u, f, p),
          { box: d, name: u, num: f, fill: m }
        );
      },
      o = n("mine"),
      a = n("theirs"),
      r = dt("div", "fh-flags");
    for (const h of Sb) {
      const d = dt("div", "fh-flag");
      ((d.dataset.owner = "neutral"),
        d.append(dt("span", "fh-ring"), dt("b", "", h)),
        r.append(d),
        this.flagChips.set(h, d));
    }
    ((this.tdmClock = dt("div", "fh-clock", "0:00")),
      i.append(o.box, r, this.tdmClock, a.box),
      t.classList.toggle("tdm", this.tdm),
      t.classList.toggle("arms", this.arms));
    const l = dt("div", "fh-sub");
    ((this.phaseEl = dt("span", "fh-phase")),
      (this.timeEl = dt("span", "fh-time")),
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
      (this.capEl = dt("div", "front-cap hidden")),
      this.capEl.append(
        dt("div", "fc-title"),
        dt("div", "fc-track"),
        dt("div", "fc-note"),
      ),
      this.capEl.querySelector(".fc-track").append(dt("i", "fc-fill")),
      (this.feedEl = dt("div", "front-feed")),
      (this.popEl = dt("div", "front-pop")),
      (this.bannerEl = dt("div", "front-banner hidden")),
      (this.deployEl = this.buildDeploy()),
      (this.matchEndUi = new Zse({
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
      (this.boardEl = dt("div", "front-board hidden")),
      this.boardEl.addEventListener("click", () => {
        this.deps.mobile && this.toggleBoard(!1);
      }),
      (this.supplyEl = dt("div", "front-supply hidden")),
      this.supplyEl.append(dt("i", "fs-icon"), dt("div", "fs-body")),
      this.supplyEl
        .querySelector(".fs-body")
        .append(
          dt("div", "fs-title"),
          dt("div", "fs-track"),
          dt("div", "fs-note"),
        ),
      this.supplyEl.querySelector(".fs-track").append(dt("i", "fs-fill")),
      (this.lowAmmoEl = dt("div", "front-lowammo hidden")),
      (this.supplyToast = dt("div", "front-supplied")),
      (this.tdmStatus = dt("div", "front-tdm-status")));
    const c = dt("div", "front-stack");
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
      this.renderDeployHeader(),
      this.mountArms());
  }
  buildDeploy() {
    const e = dt("div", "front-deploy hidden");
    e.setAttribute("role", "dialog");
    const t = dt("div", "fd-panel"),
      i = dt("header", "fd-head");
    (i.append(
      dt("div", "fd-kicker"),
      dt("h2", "fd-title"),
      dt("button", "fd-switch"),
    ),
      (i.querySelector(".fd-switch").type = "button"),
      i
        .querySelector(".fd-switch")
        .addEventListener("click", () => this.deps.send({ a: "switch" })));
    const n = dt("button", "fd-menu");
    ((n.type = "button"),
      n.addEventListener("click", () => this.deps.openMenu()),
      i.append(n));
    const o = dt("div", "fd-body"),
      a = dt("div", "fd-classes");
    this.arms
      ? ((this.armsHud ??= new Yk({
          drawIcon: (p, m) => this.deps.drawIcon(p, m),
          sfx: this.deps.armsSfx,
        })),
        a.classList.add("fd-arms"),
        a.append(this.armsHud.ladder()))
      : (a.setAttribute("role", "radiogroup"),
        a.setAttribute("aria-label", this.say("Class", "Класс")),
        this.classIds.forEach((p, m) => {
          const g = lne(this.pickerDeps, p, m, Xk[p]);
          (g.addEventListener("click", () => this.pickClass(p)), a.append(g));
        }));
    const r = dt("div", "fd-right"),
      l = (this.mapCanvas = document.createElement("canvas"));
    ((l.className = "fd-map"),
      (l.width = 640),
      (l.height = 360),
      l.addEventListener("click", (p) => this.pickOnMap(p)),
      new ResizeObserver(() => this.fitMap()).observe(l));
    const c = dt("div", "fd-spawns"),
      h = dt("div", "fd-killer hidden");
    (r.append(h, l, c),
      (this.classDetail ??= new hne(this.pickerDeps, Xk)),
      o.append(a, this.classDetail.root, r));
    const d = dt("footer", "fd-foot"),
      u = dt("div", "fd-tip"),
      f = dt("button", "btn fd-go");
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
        m >= 1 &&
          m <= this.classIds.length &&
          (this.pickClass(this.classIds[m - 1]), p.preventDefault());
        const g = {
          ArrowLeft: -1,
          ArrowRight: 1,
          ArrowUp: -this.tilesPerRow(),
          ArrowDown: this.tilesPerRow(),
        }[p.key];
        if (g && !this.arms && this.classIds.length) {
          const y = this.classIds.indexOf(this.chosenClass),
            b = Math.max(
              0,
              Math.min(this.classIds.length - 1, (y < 0 ? 0 : y) + g),
            );
          (b !== y &&
            (this.pickClass(this.classIds[b]),
            this.deployEl
              .querySelector(`.fd-class[data-cls="${this.classIds[b]}"]`)
              ?.focus({ preventScroll: !1 })),
            p.preventDefault());
        }
        (p.code === "Space" || p.code === "Enter") &&
          (this.deploy(), p.preventDefault());
      }),
      e
    );
  }
  renderDeployHeader() {
    if (!this.root) return;
    const e = this.team || 1,
      t = this.deployEl.querySelector(".fd-head"),
      i = this.state,
      n = i?.cap ?? 0,
      o = this.mapId
        ? I(c_(this.mapId, "en"), c_(this.mapId, "ru")).toUpperCase()
        : "";
    t.querySelector(".fd-kicker").textContent = this.arms
      ? o
        ? this.say(`ARMS RACE · ${o}`, `ГОНКА ВООРУЖЕНИЙ · ${o}`)
        : this.say("ARMS RACE", "ГОНКА ВООРУЖЕНИЙ")
      : this.tdm
        ? o
          ? this.say(`TEAM DEATHMATCH · ${o}`, `КОМАНДНЫЙ БОЙ · ${o}`)
          : this.say("TEAM DEATHMATCH", "КОМАНДНЫЙ БОЙ")
        : this.air
          ? this.say(
              "AIR SUPERIORITY · SIERRA",
              "ПРЕВОСХОДСТВО В ВОЗДУХЕ · СЬЕРРА",
            )
          : o
            ? this.say(`CONQUEST · ${o}`, `ЗАХВАТ · ${o}`)
            : this.say("FRONTLINE · CONQUEST", "ЛИНИЯ ФРОНТА · ЗАХВАТ");
    const a = t.querySelector(".fd-title");
    ((a.textContent = this.arms
      ? this.say("Everyone for themselves", "Каждый сам за себя")
      : Un(dv[e])),
      (a.style.color = this.arms ? "var(--ar-gold, #ffc23a)" : this.col(e)));
    const r = t.querySelector(".fd-switch"),
      l = i?.hu,
      c = !!l && (l[2 - e] > l[e - 1] || (n > 0 && l[2 - e] >= n / 2));
    ((r.textContent = this.say("Switch side", "Сменить сторону")),
      (r.hidden = this.arms),
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
      document.documentElement.style.setProperty("--team-mine", Ic.mine),
      document.documentElement.style.setProperty("--team-enemy", Ic.enemy),
      this.paintClasses());
    const h = this.classIds.length;
    ((this.deployEl.querySelector(".fd-tip").textContent = this.arms
      ? this.deps.mobile
        ? this.say(
            "A new weapon with every kill. Golden knife kill wins",
            "Новое оружие за каждое убийство. Победа — убийство золотым ножом",
          )
        : this.say(
            "Space to deploy · a new weapon with every kill · golden knife kill wins",
            "Пробел — в бой · новое оружие за каждое убийство · победа — убийство золотым ножом",
          )
      : this.tdm
        ? this.deps.mobile
          ? this.say(
              "Pick a class. Most kills in 10 minutes wins",
              "Выберите класс. Побеждает команда, убившая больше за 10 минут",
            )
          : this.say(
              `1–${h} class · Space to deploy · most kills in 10 minutes wins`,
              `1–${h} класс · Пробел — в бой · побеждает команда, убившая больше за 10 минут`,
            )
        : this.air
          ? this.deps.mobile
            ? this.say(
                "A jet or a tank: from your base or a zone you hold",
                "Самолёт или танк: с базы или из своей зоны",
              )
            : this.say(
                "1–2 jet or tank · click the map: your base or a zone you hold · Space to deploy · jet: lock + RMB missile, X flares · tank: RMB roof gun",
                "1–2 самолёт или танк · клик по карте: база или своя зона · Пробел — в бой · самолёт: захват + ПКМ — ракета, X — ловушки · танк: ПКМ — зенитный пулемёт",
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
    const t = e !== this.chosenClass;
    this.chosenClass = e;
    try {
      localStorage.setItem(this.tdm ? "fc-tdm-class" : "fc-front-class", e);
    } catch {}
    (this.paintClasses(),
      t && this.air && this.renderSpawns(),
      t && this.deps.sfx.uiTick(!0));
  }
  paintClasses() {
    if (this.arms || !this.classDetail) return;
    const e = this.team || 0,
      t = this.state?.my.cc ?? {};
    for (const i of this.deployEl.querySelectorAll(".fd-class")) {
      const n = i.dataset.cls === this.chosenClass;
      (cne(this.pickerDeps, i, e, t[i.dataset.cls] ?? 0),
        i.classList.toggle("on", n),
        i.setAttribute("aria-checked", n ? "true" : "false"),
        (i.tabIndex = n ? 0 : -1));
    }
    this.classDetail.render(this.chosenClass, e, this.deps.lang());
  }
  tilesPerRow() {
    const e = [...this.deployEl.querySelectorAll(".fd-class")];
    if (e.length < 2) return 1;
    const t = e[0].offsetTop,
      i = e.findIndex((n) => n.offsetTop !== t);
    return i < 0 ? e.length : i;
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
        (l) => !l.startsWith("v") || !!this.spawnVehicle(l),
      ),
      i = new Map();
    for (const l of t) {
      const c = this.spawnVehicle(l);
      if (c && this.parkedAtHq(c)) {
        const h = i.get(c[1]) ?? [];
        (h.push(l), i.set(c[1], h));
      }
    }
    const n = new Set([...i.values()].flatMap((l) => l.slice(1))),
      o = t.filter((l) => !n.has(l)),
      a = (l) => [...i.values()].find((c) => c.includes(l));
    (n.has(this.chosenSpawn) && (this.chosenSpawn = a(this.chosenSpawn)[0]),
      t.includes(this.chosenSpawn) ||
        (this.chosenSpawn = o.includes("hq") ? "hq" : (o[0] ?? "hq")));
    const r =
      o.join(",") +
      "|" +
      this.chosenSpawn +
      "|" +
      this.chosenClass +
      "|" +
      (this.state.my.vs ?? []).map((l) => l[4]).join(",") +
      "|" +
      [...i.values()].map((l) => l.length).join(",");
    (e.getAttribute("data-key") !== r &&
      (e.setAttribute("data-key", r),
      e.replaceChildren(
        ...o.map((l) => {
          const c = this.spawnVehicle(l),
            h = a(l),
            d =
              this.air && this.chosenClass === "tanker"
                ? this.say("Tank park", "Танковый парк")
                : this.say("HQ", "Штаб"),
            u = dt(
              "button",
              "fd-spawn",
              l === "hq" ? d : c ? this.deps.vehicleName(c[1]) : l,
            );
          return (
            (u.type = "button"),
            c &&
              (u.classList.add("veh"),
              u.prepend(dt("i", `fd-vglyph t${c[1]}`)),
              h && h.length > 1 && u.append(dt("small", "", `×${h.length}`))),
            u.classList.toggle(
              "on",
              l === this.chosenSpawn || !!h?.includes(this.chosenSpawn),
            ),
            u.addEventListener("click", () => {
              ((this.chosenSpawn = l),
                this.renderSpawns(),
                this.deps.sfx.uiTick(!0));
            }),
            u
          );
        }),
      )),
      this.drawMap());
  }
  parkedAtHq(e) {
    const t = this.state.hq[(this.team || 1) - 1];
    return (
      Math.hypot(e[2] - t[0], e[3] - t[1]) <
      (e[1] === 1 || e[1] === 14 ? 95 : 40)
    );
  }
  spawnVehicle(e) {
    if (!e.startsWith("v")) return;
    const t = Number(e.slice(1));
    return this.state?.my.vs?.find((i) => i[0] === t);
  }
  mapTransform() {
    const e = this.state,
      t = [
        ...e.hq.map((g) => [g[0], g[1]]),
        ...e.f.map((g) => [g[4], g[5]]),
        ...(this.tdm ? this.tdmLabels().map((g) => [g.x, g.z]) : []),
      ],
      i = t.map((g) => g[0]),
      n = t.map((g) => g[1]),
      o = this.tdm ? 12 : this.air ? 420 : 30,
      a = Math.min(...i) - o,
      r = Math.max(...i) + o,
      l = Math.min(...n) - o,
      c = Math.max(...n) + o,
      h = this.mapW,
      d = this.mapH,
      u = Math.min(h / (r - a), d / (c - l)),
      f = (h - (r - a) * u) / 2,
      p = (d - (c - l) * u) / 2,
      m = Math.max(0.75, Math.min(1, Math.min(h, d) / 320));
    return {
      toScreen: (g, y) => [f + (g - a) * u, p + (y - l) * u],
      scale: u,
      minX: a,
      minZ: l,
      ox: f,
      oz: p,
      u: m,
    };
  }
  fitMap() {
    const e = this.mapCanvas;
    if (!e) return;
    const t = Math.round(e.clientWidth),
      i = Math.round(e.clientHeight);
    if (t < 40 || i < 40) return;
    const n = Math.min(2, devicePixelRatio || 1);
    (t === this.mapW && i === this.mapH && e.width === Math.round(t * n)) ||
      ((this.mapW = t),
      (this.mapH = i),
      (e.width = Math.round(t * n)),
      (e.height = Math.round(i * n)),
      (this.mapBg = null),
      this.drawMap());
  }
  drawMap() {
    const e = this.mapCanvas,
      t = this.state;
    if (!e || !t) return;
    const i = e.getContext("2d");
    i.setTransform(e.width / this.mapW, 0, 0, e.height / this.mapH, 0, 0);
    const n = this.mapW,
      o = this.mapH,
      a = this.mapTransform(),
      r = a.u;
    if (
      !this.mapBg ||
      performance.now() - this.mapBgAt >
        (performance.now() < this.mapFreshUntil ? 700 : 4e3)
    ) {
      this.mapBgAt = performance.now();
      const f = (this.mapBg ??= document.createElement("canvas"));
      ((f.width = n), (f.height = o));
      const p = f.getContext("2d"),
        m = p.createImageData(f.width, f.height),
        g = 4;
      for (let y = 0; y < f.height; y += g)
        for (let b = 0; b < f.width; b += g) {
          const S = a.minX + (b - a.ox) / a.scale,
            M = a.minZ + (y - a.oz) / a.scale,
            E = this.deps.surface(S, M),
            A = E ? (E >> 16) & 255 : 24,
            T = E ? (E >> 8) & 255 : 32,
            x = E ? E & 255 : 40;
          for (let R = 0; R < g; R++)
            for (let _ = 0; _ < g; _++) {
              const C = ((y + R) * f.width + b + _) * 4;
              C >= m.data.length ||
                ((m.data[C] = A * 0.55 + 10),
                (m.data[C + 1] = T * 0.55 + 14),
                (m.data[C + 2] = x * 0.55 + 20),
                (m.data[C + 3] = 255));
            }
        }
      p.putImageData(m, 0, 0);
    }
    (i.clearRect(0, 0, n, o),
      (i.imageSmoothingEnabled = !1),
      i.drawImage(this.mapBg, 0, 0, n, o),
      (i.strokeStyle = "#ffffff10"),
      (i.lineWidth = 1));
    for (let f = 0; f < n; f += 40)
      (i.beginPath(), i.moveTo(f, 0), i.lineTo(f, o), i.stroke());
    for (let f = 0; f < o; f += 40)
      (i.beginPath(), i.moveTo(0, f), i.lineTo(n, f), i.stroke());
    if (this.tdm) {
      this.drawTdmMap(i, a);
      return;
    }
    ((i.strokeStyle = "#ffffff30"),
      i.setLineDash([6, 6]),
      (i.lineWidth = 2),
      i.beginPath(),
      [
        [t.hq[0][0], t.hq[0][1]],
        ...t.f.map((f) => [f[4], f[5]]),
        [t.hq[1][0], t.hq[1][1]],
      ].forEach((f, p) => {
        const [m, g] = a.toScreen(f[0], f[1]);
        p ? i.lineTo(m, g) : i.moveTo(m, g);
      }),
      i.stroke(),
      i.setLineDash([]));
    const c = this.team || 1,
      h = new Set(t.my.spawns),
      d = (f, p, m, g, y, b, S = 0, M = !1) => {
        const [E, A] = a.toScreen(p, m),
          T = (b ? 17 : 15) * r,
          x = h.has(f),
          R = this.chosenSpawn === f;
        (i.save(),
          R && ((i.shadowColor = "#ffb547"), (i.shadowBlur = 18)),
          (i.fillStyle = "#0b1118e6"),
          (i.strokeStyle = R ? "#ffb547" : x ? "#ffffffcc" : "#ffffff40"),
          (i.lineWidth = R ? 3 : 2),
          i.beginPath(),
          b
            ? i.roundRect(E - T, A - T, T * 2, T * 2, 6)
            : i.arc(E, A, T, 0, Math.PI * 2),
          i.fill(),
          i.stroke(),
          i.restore(),
          (i.fillStyle = g),
          i.beginPath(),
          b
            ? i.roundRect(
                E - T + 4 * r,
                A - T + 4 * r,
                T * 2 - 8 * r,
                T * 2 - 8 * r,
                4,
              )
            : i.arc(E, A, T - 4 * r, 0, Math.PI * 2),
          i.fill(),
          S &&
            !b &&
            ((i.strokeStyle = S > 0 ? this.col(1) : this.col(2)),
            (i.lineWidth = 4),
            i.beginPath(),
            i.arc(
              E,
              A,
              T + 4,
              -Math.PI / 2,
              -Math.PI / 2 + Math.abs(S) * Math.PI * 2,
            ),
            i.stroke()),
          M &&
            ((i.strokeStyle = "#ffffff"),
            (i.lineWidth = 2),
            i.setLineDash([3, 3]),
            i.beginPath(),
            i.arc(E, A, T + 8, 0, Math.PI * 2),
            i.stroke(),
            i.setLineDash([])),
          (i.fillStyle = "#fff"),
          (i.font = `${Math.round((b ? 11 : 15) * r)}px "Russo One", sans-serif`),
          (i.textAlign = "center"),
          (i.textBaseline = "middle"),
          i.fillText(y, E, A + 1, T * 2 - 4));
      };
    d(
      "hq",
      t.hq[c - 1][0],
      t.hq[c - 1][1],
      this.col(c),
      this.say("HQ", "ШТАБ"),
      !0,
    );
    const u = pc(c);
    if (
      (d(
        "enemy-hq",
        t.hq[u - 1][0],
        t.hq[u - 1][1],
        this.col(u) + "99",
        this.say("HQ", "ШТАБ"),
        !0,
      ),
      this.air)
    )
      for (const f of t.f) {
        const [p, m] = a.toScreen(f[4], f[5]);
        ((i.fillStyle = (f[1] ? this.col(f[1]) : "#c8d2dc") + "22"),
          (i.strokeStyle = (f[1] ? this.col(f[1]) : "#c8d2dc") + "88"),
          (i.lineWidth = 1.5),
          i.beginPath(),
          i.arc(p, m, lv * a.scale, 0, Math.PI * 2),
          i.fill(),
          i.stroke());
      }
    for (const f of t.f) {
      const p = f[1] ? this.col(f[1]) : "#9aa6b2",
        m = f[1] === 0 ? f[2] / 100 : 0;
      d(f[0], f[4], f[5], p, f[0], !1, m, !!f[3]);
    }
    for (const f of t.my.vs ?? []) {
      if (this.parkedAtHq(f)) continue;
      const p = `v${f[0]}`,
        [m, g] = a.toScreen(f[2], f[3]),
        y = this.chosenSpawn === p;
      (i.save(),
        y && ((i.shadowColor = "#ffb547"), (i.shadowBlur = 16)),
        (i.fillStyle = "#0b1118ee"),
        (i.strokeStyle = y ? "#ffb547" : "#57dcbb"),
        (i.lineWidth = y ? 3 : 2),
        i.beginPath(),
        i.roundRect(m - 13 * r, g - 10 * r, 26 * r, 20 * r, 5),
        i.fill(),
        i.stroke(),
        i.restore(),
        (i.fillStyle = y ? "#ffb547" : "#8ff0d8"),
        (i.font = '11px "Russo One", sans-serif'),
        (i.textAlign = "center"),
        (i.textBaseline = "middle"),
        i.fillText(
          f[1] === 6 ? "✚" : f[1] === 1 || f[1] === 14 ? "✈" : "▬",
          m,
          g + 1,
        ));
    }
  }
  tdmLabels() {
    return Pa(this.mapId)?.labels ?? [];
  }
  drawTdmMap(e, t) {
    const i = this.state,
      n = this.team || 1,
      o = pc(n),
      a = (r, l, c, h, d) => {
        const u = (d ? 64 : Math.max(30, c.length * 11 + 14)) * t.u,
          f = (d ? 30 : 24) * t.u;
        let [p, m] = t.toScreen(r, l);
        ((p = Math.max(u / 2 + 2, Math.min(this.mapW - u / 2 - 2, p))),
          (m = Math.max(f / 2 + 2, Math.min(this.mapH - f / 2 - 2, m))),
          (e.fillStyle = "#0b1118e0"),
          (e.strokeStyle = h),
          (e.lineWidth = 2),
          e.beginPath(),
          e.roundRect(p - u / 2, m - f / 2, u, f, 7),
          e.fill(),
          e.stroke(),
          (e.fillStyle = h),
          (e.font = `${Math.round((d ? 13 : 14) * t.u)}px "Russo One", sans-serif`),
          (e.textAlign = "center"),
          (e.textBaseline = "middle"),
          e.fillText(c, p, m + 1));
      };
    for (const r of this.tdmLabels()) a(r.x, r.z, Un(r), "#ffd166", !1);
    (a(i.hq[n - 1][0], i.hq[n - 1][1], this.say("YOU", "ВЫ"), this.col(n), !0),
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
    const n = i.getBoundingClientRect(),
      o = Math.min(n.width / this.mapW, n.height / this.mapH) || 1,
      a = (e.clientX - n.left - (n.width - this.mapW * o) / 2) / o,
      r = (e.clientY - n.top - (n.height - this.mapH * o) / 2) / o,
      l = this.mapTransform(),
      c = this.team || 1,
      h = [
        ["hq", t.hq[c - 1][0], t.hq[c - 1][1]],
        ...t.f.map((f) => [f[0], f[4], f[5]]),
        ...(t.my.vs ?? [])
          .filter((f) => !this.parkedAtHq(f))
          .map((f) => [`v${f[0]}`, f[2], f[3]]),
      ];
    let d = null,
      u = 900;
    for (const [f, p, m] of h) {
      const [g, y] = l.toScreen(p, m),
        b = (g - a) ** 2 + (y - r) ** 2;
      b < u && t.my.spawns.includes(f) && ((d = f), (u = b));
    }
    d &&
      ((this.chosenSpawn = d), this.renderSpawns(), this.deps.sfx.uiTick(!0));
  }
  paintFlagChip(e) {
    const t = this.flagChips.get(e[0]);
    if (!t) return;
    const i = e[1] === 0 ? "neutral" : e[1] === this.team ? "mine" : "theirs";
    t.dataset.owner !== i && (t.dataset.owner = i);
    const n = e[2] / 100,
      o = n === 0 ? "none" : (n > 0 ? 1 : 2) === this.team ? "mine" : "theirs";
    (t.style.setProperty("--p", String(Math.abs(n))),
      (t.dataset.toward = o),
      t.classList.toggle("contested", !!e[3]),
      t.classList.toggle("here", this.state?.my.zone === e[0]));
  }
  updateCapture(e, t) {
    if (!e || !t) {
      this.capEl.classList.add("hidden");
      return;
    }
    this.capEl.classList.remove("hidden");
    const [i, n, o, a] = e,
      r = o / 100,
      l = this.team === 1 ? 1 : -1,
      c = r * l,
      h = this.capEl.querySelector(".fc-title"),
      d = this.capEl.querySelector(".fc-note"),
      u = this.capEl.querySelector(".fc-fill");
    let f, p;
    (a
      ? ((f = this.say(`CONTESTED ${i}`, `БОЙ ЗА ${i}`)), (p = "contested"))
      : n === this.team && c >= 0.999
        ? ((f = this.say(`HOLDING ${i}`, `УДЕРЖИВАЕМ ${i}`)), (p = "mine"))
        : n && n !== this.team
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
    const t = dt("div", "ff-row");
    e.me &&
      t.classList.add(e.me === "k" ? "me-k" : e.me === "a" ? "me-a" : "me-v");
    const i = (l) => (l ? this.col(l) : "var(--vr-muted)"),
      n = dt("b", "", e.k || this.say("—", "—"));
    ((n.style.color = i(e.kt)),
      e.k && e.kr !== void 0 && n.prepend(Ku(e.kr, "ff-rank")));
    const o = dt("span", "ff-w", e.w ? `[${e.w}${e.hs ? " ⊕" : ""}]` : "✕"),
      a = dt("b", "", e.v);
    if (
      ((a.style.color = i(e.vt)),
      e.vr !== void 0 && a.prepend(Ku(e.vr, "ff-rank")),
      e.k)
    ) {
      if ((t.append(n), e.a)) {
        const l = dt("b", "ff-a", `+ ${e.a}`);
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
  get popHost() {
    return this.active && this.popEl ? this.popEl : null;
  }
  popScore(e, t, i = 0) {
    const n = {
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
      "golden-knife": ["GOLDEN KNIFE", "ЗОЛОТОЙ НОЖ"],
    };
    let o;
    if (t.startsWith("capture-assist"))
      o = this.say(
        `HELPED CAPTURE ${t.slice(15)}`,
        `УЧАСТИЕ В ЗАХВАТЕ ${t.slice(15)}`,
      );
    else if (t.startsWith("capture"))
      o = this.say(
        `FLAG ${t.slice(8)} CAPTURED`,
        `ФЛАГ ${t.slice(8)} ЗАХВАЧЕН`,
      );
    else if (t.startsWith("streak:")) {
      const r = Number(t.slice(7));
      o = U2[r] ? Un(U2[r]) : this.say(`${r} KILL STREAK`, `СЕРИЯ: ${r}`);
    } else
      t.startsWith("neutralize")
        ? (o = this.say(
            `FLAG ${t.slice(11)} NEUTRALIZED`,
            `ФЛАГ ${t.slice(11)} НЕЙТРАЛИЗОВАН`,
          ))
        : (o = I(...(n[t] ?? [t, t])));
    if (!e && !o) {
      const r = dt("div", "fp-x", "✕");
      (this.popEl.append(r), setTimeout(() => r.remove(), 700));
      return;
    }
    const a = dt("div", "fp-row");
    for (
      a.append(dt("b", "", e ? `+${e}` : ""), dt("span", "", o)),
        i > 0 && a.append(dt("em", "fp-xp", `+${i} XP`)),
        this.popEl.append(a);
      this.popEl.querySelectorAll(".fp-row").length > 4;
    )
      this.popEl.querySelector(".fp-row").remove();
    (setTimeout(() => a.classList.add("fade"), 2200),
      setTimeout(() => a.remove(), 2900));
  }
  promotionBanner(e, t) {
    return !this.active ||
      !this.root ||
      !(
        document.body.classList.contains("mobile") ||
        matchMedia("(max-width: 760px), (max-height: 520px)").matches
      )
      ? !1
      : (this.banner(t, "good"),
        this.bannerEl.prepend(Ku(e, "fb-banner-rank")),
        !0);
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
      t = this.root.querySelector(".front-stack"),
      i = e && innerWidth <= innerHeight * 1.25;
    if (this.arms && e && this.armsHud?.rung.isConnected) {
      const n = Math.round(this.hud.getBoundingClientRect().bottom),
        o = document.body.classList.contains("embed");
      (document.body.style.setProperty("--ar-link-top", `${n + 6}px`),
        document.body.style.setProperty("--fs-top", `${n + (o ? 42 : 8)}px`));
    }
    if (i) {
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
    (t || tne(),
      this.armsHud?.back(),
      document.body.classList.remove("arms-knife"),
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
    const i = this.sup,
      n = this.supplyEl,
      o = !!this.state?.my.deployed && t,
      a = o && !!i.at;
    if ((n.classList.toggle("hidden", !a), a)) {
      const r = (e - i.t0) / 1e3,
        l = n.querySelector(".fs-title"),
        c = n.querySelector(".fs-note"),
        h = n.querySelector(".fs-fill"),
        d = Math.max(0, Math.ceil(i.wait - r));
      let u, f, p, m;
      (i.full
        ? ((u = "full"),
          (f = this.say("FULLY STOCKED", "БОЕЗАПАС ПОЛОН")),
          (p = this.supplyPlace(i.at)),
          (m = 1))
        : d > 0
          ? ((u = "wait"),
            (f = this.say(`Resupply in ${d} s`, `Снабжение через ${d} с`)),
            (p = this.supplyPlace(i.at)),
            (m = 1 - d / (i.at === "hq" ? Eb.hqCooldown : Eb.flagCooldown)))
          : ((u = "fill"),
            (f = this.say("RESUPPLYING…", "ПОПОЛНЕНИЕ БОЕЗАПАСА…")),
            (p =
              i.at === "hq" && !this.tdm
                ? this.say(
                    "Ammo, grenades, medical kit, armour, health",
                    "Патроны, гранаты, аптечки, броня, здоровье",
                  )
                : this.say("Ammunition and grenades", "Патроны и гранаты")),
            (m = Math.min(1, 1 - Math.max(0, i.hold - r) / Eb.hold))),
        (n.dataset.state = u),
        l.textContent !== f && (l.textContent = f),
        c.textContent !== p && (c.textContent = p),
        (h.style.width = `${Math.round(Math.max(0, m) * 100)}%`));
    }
    if (e >= this.ammoCheckAt) {
      this.ammoCheckAt = e + 300;
      const r = o && !i.at && !this.air ? this.deps.ammo() : null,
        l = r
          ? r.rounds + r.reserve === 0
            ? "out"
            : r.reserve <= r.mag
              ? "low"
              : ""
          : "";
      if (
        (l !== this.lowAmmo &&
          ((this.lowAmmo = l),
          this.lowAmmoEl.classList.toggle("hidden", !l),
          (this.lowAmmoEl.dataset.level = l),
          document.body.classList.toggle("front-ammo-low", l === "low"),
          document.body.classList.toggle("front-ammo-out", l === "out")),
        l)
      ) {
        const c = this.state?.my.dp,
          h = this.lastPos,
          d = c && h ? Math.round(Math.hypot(c[0] - h.x, c[2] - h.z)) : 0,
          u =
            this.state && h
              ? this.state.f
                  .filter((y) => y[1] === this.team && !y[3])
                  .sort(
                    (y, b) =>
                      Math.hypot(y[4] - h.x, y[5] - h.z) -
                      Math.hypot(b[4] - h.x, b[5] - h.z),
                  )[0]
              : void 0,
          f = u && h ? Math.round(Math.hypot(u[4] - h.x, u[5] - h.z)) : 0,
          p =
            l === "out"
              ? this.say("OUT OF AMMO", "НЕТ ПАТРОНОВ")
              : this.say("LOW AMMO", "МАЛО ПАТРОНОВ"),
          m =
            u && f < d
              ? this.say(`flag ${u[0]} ${f} m`, `флаг ${u[0]} ${f} м`)
              : this.say(`depot ${d} m`, `склад ${d} м`),
          g = `${p} · ${m}`;
        this.lowAmmoEl.textContent !== g && (this.lowAmmoEl.textContent = g);
      }
    }
  }
  lastPos = null;
  showSupplied(e) {
    const t = dt("div", "fsd-card");
    t.append(
      dt(
        "div",
        "fsd-title",
        e.at === "hq"
          ? this.say("RESUPPLIED AT THE DEPOT", "ПОПОЛНЕНО НА СКЛАДЕ")
          : this.say(`RESUPPLIED · FLAG ${e.at}`, `ПОПОЛНЕНО · ФЛАГ ${e.at}`),
      ),
    );
    const i = dt("div", "fsd-items");
    for (const [n, o] of e.items.slice(0, 6)) {
      const a = dt("div", "fsd-item"),
        r = document.createElement("canvas");
      ((r.width = 40), (r.height = 40));
      const l = r.getContext("2d");
      (l && this.deps.drawIcon(l, n),
        a.append(r, dt("b", "", `+${o}`)),
        (a.title = this.deps.itemName(n)),
        i.append(a));
    }
    (e.armor && i.append(dt("div", "fsd-tag", this.say("armour", "броня"))),
      e.hp && i.append(dt("div", "fsd-tag", this.say("health", "здоровье"))),
      e.svc &&
        i.append(
          dt(
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
        const a = dt("div", "fb-col"),
          r = dt("div", "fb-head");
        r.style.color = this.col(o);
        const l = this.state ? this.state.tk[o - 1] : 0;
        (r.append(
          dt(
            "b",
            "",
            `${o === t ? this.say("US", "МЫ") : this.say("ENEMY", "ВРАГ")} · ${Un(dv[o])}`,
          ),
          dt("span", "", String(l)),
        ),
          a.append(r));
        const c = dt("div", "fb-row fb-hdr");
        (c.append(
          dt("span", "", this.say("Soldier", "Боец")),
          dt(
            "span",
            "",
            this.arms ? this.say("Level", "Ур.") : this.say("Score", "Очки"),
          ),
          dt("span", "", "K"),
          dt("span", "", "D"),
          dt("span", "", "ms"),
        ),
          a.append(c));
        for (const h of e.rows.filter((d) => d[1] === o)) {
          const d = dt("div", "fb-row"),
            u = this.boardName(h);
          (h[6] && u.append(dt("i", "fb-ai", "AI")),
            h[7] &&
              (d.classList.add("fb-me"),
              d.style.setProperty("--me", this.col(o)),
              u.append(dt("i", "fb-you", this.say("YOU", "ВЫ")))),
            h[7] && (this.myName = h[0]));
          const f = this.arms
            ? dt(
                "span",
                (h[10] ?? 0) >= Mc.length - 1 ? "fb-knife" : "",
                `${(h[10] ?? 0) + 1}`,
              )
            : dt("span", "", String(h[2]));
          (d.append(
            u,
            f,
            dt("span", "", String(h[3])),
            dt("span", "", String(h[4])),
            dt("span", "fb-ping", h[6] ? "" : String(h[5])),
          ),
            a.append(d));
        }
        return a;
      },
      n = dt("button", "fb-close", "×");
    if (
      ((n.type = "button"),
      n.setAttribute("aria-label", this.say("Close", "Закрыть")),
      n.addEventListener("click", (o) => {
        (o.stopPropagation(), this.toggleBoard(!1));
      }),
      this.boardEl.classList.toggle("fb-ffa", this.arms),
      this.arms)
    ) {
      this.boardEl.replaceChildren(this.ffaBoard(e), n, this.boardHint());
      return;
    }
    this.boardEl.replaceChildren(i(t), i(pc(t)), n, this.boardHint());
  }
  boardHint() {
    return dt(
      "div",
      "fb-hint",
      document.pointerLockElement
        ? this.say(
            "Right-click to free the mouse · click a name to see the soldier's card",
            "ПКМ — освободить мышь · клик по нику — карточка бойца",
          )
        : this.say(
            "Click a name to see the soldier's card",
            "Клик по нику — карточка бойца",
          ),
    );
  }
  boardName(e) {
    const t = dt("span", "fb-name"),
      i = e[11] ?? 0;
    return (
      t.append(Ku(i, "fb-rank"), document.createTextNode(e[0])),
      (t.title = `${Lm(i)} · ${e[0]}`),
      (t.tabIndex = 0),
      t.setAttribute("role", "button"),
      t.addEventListener("click", (n) => {
        (n.stopPropagation(),
          CT(
            e[6]
              ? {
                  name: e[0],
                  bot: { rank: i, kills: e[3], deaths: e[4], score: e[2] },
                }
              : { name: e[0], xp: this.deps.xpOf?.(e[0]), self: !!e[7] },
          ));
      }),
      t
    );
  }
  ffaBoard(e) {
    const t = dt("div", "fb-col"),
      i = dt("div", "fb-head");
    (i.append(
      dt(
        "b",
        "",
        this.say(
          "ARMS RACE · EVERYONE FOR THEMSELVES",
          "ГОНКА ВООРУЖЕНИЙ · КАЖДЫЙ САМ ЗА СЕБЯ",
        ),
      ),
    ),
      t.append(i));
    const n = dt("div", "fb-row fb-hdr");
    return (
      n.append(
        dt("span", "", this.say("Soldier", "Боец")),
        dt("span", "", this.say("Level", "Ур.")),
        dt("span", "", "K"),
        dt("span", "", "D"),
        dt("span", "", "ms"),
      ),
      t.append(n),
      e.rows.forEach((o, a) => {
        const r = dt("div", "fb-row"),
          l = this.boardName(o);
        (l.prepend(dt("i", "fb-place", `${a + 1}`)),
          o[6] && l.append(dt("i", "fb-ai", "AI")),
          o[7] &&
            (r.classList.add("fb-me"),
            r.style.setProperty("--me", this.col(1)),
            l.append(dt("i", "fb-you", this.say("YOU", "ВЫ"))),
            (this.myName = o[0])));
        const c = o[10] ?? 0;
        (r.append(
          l,
          dt("span", c >= Mc.length - 1 ? "fb-knife" : "", `${c + 1}`),
          dt("span", "", String(o[3])),
          dt("span", "", String(o[4])),
          dt("span", "fb-ping", o[6] ? "" : String(o[5])),
        ),
          t.append(r));
      }),
      t
    );
  }
  update(e, t, i) {
    if (!this.active || !this.root) return;
    const n = performance.now();
    if (
      (this.deployWanted &&
        n >= this.deployShowAt &&
        this.deployEl.classList.contains("hidden") &&
        this.endEl.classList.contains("hidden") &&
        this.openDeploy(),
      this.deploying)
    ) {
      const o = this.deployEl.querySelector(".fd-go"),
        a = Math.ceil((this.deployWaitUntil - n) / 1e3),
        r =
          a > 0
            ? this.say(`Reinforcements in ${a}`, `Подкрепление через ${a}`)
            : this.say("DEPLOY", "В БОЙ");
      (o.textContent !== r && (o.textContent = r), (o.disabled = a > 0));
    }
    (this.endEl.classList.contains("hidden") ||
      (Math.max(0, Math.ceil(this.endNext - (n - this.endAt) / 1e3)) <= 0 &&
        n - this.endAt > (this.endNext + 4) * 1e3 &&
        (this.showWindow(this.endEl, !1), this.matchEndUi?.hide())),
      !this.bannerEl.classList.contains("hidden") &&
        n > this.bannerT &&
        this.bannerEl.classList.add("hidden"),
      this.boardOpen &&
        n - this.boardAt > 1e3 &&
        ((this.boardAt = n), this.deps.send({ a: "board" })),
      this.hud.classList.toggle("dead", !i),
      (this.lastPos = t),
      this.updateSupply(n, i),
      this.tdm &&
        (this.shieldUntil > n - 200 || this.tdmStatus.childElementCount) &&
        this.renderStatus(),
      this.armsHud?.frame(n),
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
    const n = new Set(),
      o = (l, c, h, d, u, f, p, m = 1, g = 0.92, y) => {
        n.add(l);
        let b = this.markers.get(l);
        const S = y ? Math.max(1, Math.round(y.share * 12)) : 0,
          M = `${u}|${f}|${p}|${S}|${y?.color ?? ""}`;
        if (
          (b ||
            ((b = new Ws(
              new hn({
                depthTest: !1,
                depthWrite: !1,
                transparent: !0,
                sizeAttenuation: !1,
                toneMapped: !1,
                fog: !1,
              }),
            )),
            Q0(b),
            (b.renderOrder = 999),
            this.deps.scene.add(b),
            this.markers.set(l, b)),
          this.markerKey.get(l) !== M)
        ) {
          this.markerKey.set(l, M);
          const x = b.material;
          (x.map?.dispose(),
            (x.map = u.startsWith("mine:")
              ? une(u, f)
              : fne(u, f, p, S / 12, y?.color)),
            (x.needsUpdate = !0));
        }
        const E = Math.hypot(c - t.x, h - t.z);
        b.position.set(c + 0.5, d, h + 0.5);
        const A = y
            ? 1 +
              (y.alarm ? 0.14 : 0.06) *
                Math.sin(performance.now() * (y.alarm ? 0.012 : 0.007))
            : 1,
          T = (this.deps.mobile ? 0.13 : 0.1) * m * A;
        (b.scale.set(T, T, 1),
          (b.material.opacity =
            E < 7 * m ? (0.3 * g) / 0.92 + (m < 1 ? 0.25 : 0) : g));
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
        g =
          p && (l[3] || m > 0.04)
            ? {
                share: Math.min(1, m),
                color: this.col(p),
                alarm: f === this.team && p !== this.team,
              }
            : void 0;
      o(`f${l[0]}`, l[4], l[5], l[6] + 11, l[0], c, `${d}m`, 1, 0.92, g);
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
      c > Mb.markRange ||
        Math.abs(l[1] - t.y) > 24 ||
        o(
          `m${l[0]},${l[1]},${l[2]}`,
          l[0],
          l[2],
          l[1] + 0.95,
          `mine:${l[3]}${l[4]}`,
          Ic.mine,
          "",
          0.44,
          Math.min(0.95, Math.max(0.15, (Mb.markRange - c) / 14)),
        );
    }
    for (const [l, c] of this.markers)
      n.has(l) ||
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
    for (const n of i.hq)
      if (Math.hypot(e + 0.5 - n[0], t + 0.5 - n[1]) < Mb.hqClear)
        return this.say(
          "No mines this close to a headquarters",
          "У штаба мины не ставят",
        );
    return null;
  }
  friendlyMineAt(e, t, i) {
    return this.mines.some((n) => n[0] === e && n[1] === t && n[2] === i);
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
