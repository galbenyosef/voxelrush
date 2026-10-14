// index-Dp6GxvJu 161 — math
// Lines 94286-95195 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class FQ {
  constructor(e, t) {
    w(this, "blackjack");
    w(this, "machines", new Map());
    w(this, "visuals", new Map());
    w(this, "machineSite", new Map());
    w(this, "sites", []);
    w(this, "states", new Map());
    w(this, "css", new RI());
    w(this, "cssScene", new nh());
    w(this, "surface");
    w(this, "frame");
    w(this, "controls");
    w(this, "expanded", !1);
    w(this, "session");
    w(this, "requestPending", !1);
    w(this, "pendingAt", 0);
    w(this, "ready", !1);
    w(this, "loaded", !1);
    w(this, "busy", !0);
    w(this, "amount", 0);
    w(this, "shownAmount", 0);
    w(this, "initial", 0);
    w(this, "lastWin", 0);
    w(this, "ack", 0);
    w(this, "sequence", 0);
    w(this, "queued", !1);
    w(this, "sending", !1);
    w(this, "closing", !1);
    w(this, "enabled", !0);
    w(this, "playingEnabled", bx);
    w(this, "elapsed", 0);
    w(this, "loadTimer", 0);
    w(this, "savedPose");
    w(this, "cameraBlend", 0);
    w(this, "viewportWidth", 0);
    w(this, "viewportHeight", 0);
    w(this, "chimeT", 3);
    w(this, "colliderKey", "");
    w(this, "beaconColor", new ze());
    w(this, "tmpM", new bt());
    w(this, "litMaterial");
    w(this, "onMessage", (e) => {
      var a, r;
      const t = this.session,
        i = this.frame,
        s = e.data;
      if (
        !t ||
        !i ||
        e.source !== i.contentWindow ||
        e.origin !== new URL(i.src).origin ||
        !s ||
        s.source !== "goo" ||
        typeof s.type != "string"
      )
        return;
      const o = s.payload;
      if (!(!o || typeof o != "object"))
        if (s.type === "goo:game-ready") {
          if (!J1(o.balance) || o.player !== `fable-${t.token}`) {
            this.status(
              this.en(
                "The game could not confirm this session.",
                "Игра не подтвердила баланс или идентификатор сессии.",
              ),
              !0,
            );
            return;
          }
          if (((this.ready = !0), o.balance !== this.amount)) {
            ((this.ready = !1),
              this.status(
                this.en(
                  "Balance mismatch. Session stopped.",
                  "Сохранённый баланс демо не совпадает с сервером. Сессия остановлена.",
                ),
                !0,
              ),
              (this.frame.src = "about:blank"));
            return;
          }
          this.renderControls();
        } else if (s.type === "goo:balance" && this.ready) {
          if (!J1(o.balance) || !J1(Math.abs(o.delta ?? 0))) return;
          ((this.amount = o.balance),
            (this.busy = !0),
            o.delta > 0
              ? ((this.lastWin = o.delta), this.celebrate(o.delta))
              : o.delta < 0 && (this.lastWin = 0),
            this.queueSync(),
            this.renderControls());
        } else if (s.type === "goo:game-state" && this.ready) {
          if (!J1(o.balance)) return;
          ((this.amount = o.balance),
            (this.busy = !!(o.pendingRound || o.freeSpins)),
            (this.loaded = !0),
            (r =
              (a = this.controls) == null
                ? void 0
                : a.querySelector(".casino-load-card")) == null || r.remove(),
            clearTimeout(this.loadTimer),
            this.queueSync(),
            this.renderControls(),
            this.status(
              this.busy
                ? this.en(
                    "Round in progress · Stand up saves your session.",
                    "Раунд идёт · «Встать» сохраняет сессию.",
                  )
                : this.en(
                    "Play on the cabinet screen, or expand it. Cash out returns funds to your game wallet.",
                    "Играйте на экране автомата или разверните его. «Забрать баланс» вернёт средства в игровой кошелёк.",
                  ),
            ));
        } else
          s.type === "goo:game-event" &&
            o.common === "EVT_OPEN_LOBBY" &&
            this.cashOut();
    });
    w(this, "pendingPark", !1);
    w(this, "onKey", (e) => {
      this.open &&
        e.code === "Escape" &&
        (e.preventDefault(),
        e.stopImmediatePropagation(),
        this.expanded ? this.toggleExpand() : this.park());
    });
    w(this, "beaconUpdateAt", 0);
    ((this.scene = e),
      (this.hooks = t),
      (this.blackjack = new wQ(e, { ...t, sound: t.tableSound })),
      (this.css.domElement.className = "casino-webgl-overlay"),
      (this.css.domElement.style.display = "none"),
      document.body.append(this.css.domElement),
      window.addEventListener("message", this.onMessage),
      document.addEventListener("keydown", this.onKey, !0));
  }
  get open() {
    return !!this.controls;
  }
  get siteList() {
    return this.sites;
  }
  setSites(e) {
    if (
      ((e = e.filter((s) => !s.game)),
      JSON.stringify(this.sites) === JSON.stringify(e))
    )
      return;
    const t = new Set(e.map((s) => JSON.stringify(s)));
    for (const [s, o] of this.visuals)
      t.has(JSON.stringify(o.site)) || this.removeSite(s);
    ((this.sites = e), this.blackjack.setSites(e));
    for (const s of e) this.visuals.has(s.id) || this.buildSite(s);
    this.colliderKey = "";
    const i = [...this.states.values()];
    ((this.states = new Map()),
      this.setStates(i),
      this.playingEnabled || this.setPlayingEnabled(!1));
  }
  buildSite(e) {
    const t = [],
      i = Mu,
      s = CI(i),
      o = new x_(),
      a = new x_(),
      r = [],
      l = [],
      c = (H, G, I, O) => {
        const F = o.lit.count;
        (O(),
          r.push({
            x: H,
            y: G,
            z: I,
            start: F,
            end: o.lit.count,
            light: -1,
            sky: -1,
          }));
      };
    for (const H of t) {
      c(H.x, H.y + 1, H.z, () =>
        o.at(H.x, H.y, H.z, H.yaw, () => IQ(o, H.game, a.glow, i), H.scale),
      );
      const G = Math.abs(Math.cos(H.yaw)),
        I = Math.abs(Math.sin(H.yaw)),
        O = 0.9 * H.scale,
        F = 0.68 * H.scale,
        X = H.x + Math.sin(H.yaw) * 0.07 * H.scale,
        Q = H.z + Math.cos(H.yaw) * 0.07 * H.scale,
        ee = O * G + F * I,
        se = O * I + F * G;
      l.push(
        new gn(
          new k(X - ee, H.y, Q - se),
          new k(X + ee, H.y + 2.9 * H.scale, Q + se),
        ),
      );
    }
    let h = null;
    if (!e.game) {
      h = tC(e);
      const H = (I, O, F) => MS(e, I, O, F),
        G = (I) =>
          o.at(
            e.x + 0.5,
            e.y,
            e.z + 0.5,
            (-(e.rotation & 3) * Math.PI) / 2,
            () => o.at(-0.5, 0, -0.5, 0, I),
          );
      if ((e.layout ?? 1) >= MH) {
        let I;
        (o.lit.count,
          G(() => {
            I = UQ(o, a.glow);
          }));
        for (const [O, F, X, Q, ee] of I.anchors)
          ee > Q &&
            r.push({ ...H(O, F, X), start: Q, end: ee, light: -1, sky: -1 });
        for (const [O, F, X, Q, ee, se] of I.colliders) {
          const oe = H(O, F, X),
            J = H(Q, ee, se);
          l.push(
            new gn(
              new k(Math.min(oe.x, J.x), oe.y, Math.min(oe.z, J.z)),
              new k(Math.max(oe.x, J.x), J.y, Math.max(oe.z, J.z)),
            ),
          );
        }
      } else {
        const I = o.lit.count;
        G(() => VQ(o));
        const O = H(0.5, 8, 0.5);
        r.push({ ...O, start: I, end: o.lit.count, light: -1, sky: -1 });
      }
    }
    const d = new pe();
    d.name = `casino:${e.id}`;
    const u = Mb(o.lit, !0),
      f = Mb(o.glow, !1),
      p = Mb(a.glow, !1);
    let m = null;
    (u &&
      ((m = new le(u, this.hooks.chunkMaterial())),
      (m.castShadow = !0),
      (m.receiveShadow = !0),
      d.add(m)),
      f && d.add(new le(f, xQ(this.hooks.atlas()))),
      p && d.add(new le(p, WQ(s.texture))));
    const y = new pn(br.width, br.height),
      g = new Float32Array(t.length * 3),
      b = new Float32Array(t.length * 4);
    (t.forEach((H, G) => {
      const I = new ze(H.game.color);
      (g.set([I.r, I.g, I.b], G * 3),
        b.set([0, 0, (G * 7.31 + H.x * 0.13) % 17, 0], G * 4));
    }),
      y.setAttribute("aAccent", new eo(g, 3)));
    const S = new eo(b, 4);
    (S.setUsage(Mn), y.setAttribute("aState", S));
    const M = new hs(y, LQ(), t.length),
      x = new hs(
        new Ct(0.16, 0.16, 0.16),
        new qt({ toneMapped: !1 }),
        t.length,
      ),
      T = new Jt(),
      A = new k(),
      _ = new k();
    (t.forEach((H, G) => {
      (T.setFromAxisAngle(new k(0, 1, 0), H.yaw),
        A.set(0, br.y * H.scale, (br.z + 0.004) * H.scale)
          .applyQuaternion(T)
          .add(new k(H.x, H.y, H.z)),
        M.setMatrixAt(G, this.tmpM.compose(A, T, _.setScalar(H.scale))),
        A.set(0, 2.97 * H.scale, 0.05 * H.scale)
          .applyQuaternion(T)
          .add(new k(H.x, H.y, H.z)),
        x.setMatrixAt(G, this.tmpM.compose(A, T, _.setScalar(H.scale))),
        x.setColorAt(G, new ze(H.game.color)),
        this.machines.set(H.id, H));
    }),
      M.computeBoundingSphere(),
      x.computeBoundingSphere(),
      d.add(M, x));
    const C = t.filter((H) => H.scale > 1);
    if (C.length && !e.game) {
      const H = new xt(0.35, 1.55, 1, 12, 1, !0).translate(0, -0.5, 0),
        G = new hs(H, GQ(), C.length);
      (C.forEach((I, O) => {
        const F = e.y + 10.95,
          X = I.y + 0.05;
        G.setMatrixAt(
          O,
          this.tmpM.compose(new k(I.x, F, I.z), new Jt(), new k(1, F - X, 1)),
        );
      }),
        G.computeBoundingSphere(),
        (G.renderOrder = 5),
        d.add(G));
    }
    const R = new gn();
    for (const H of t) R.expandByPoint(new k(H.x, H.y, H.z));
    h &&
      R.expandByPoint(new k(h.x1, e.y, h.z1)).expandByPoint(
        new k(h.x2, e.y + 12, h.z2),
      );
    const L = R.getCenter(new k()),
      N = R.getSize(new k()).length() / 2 + 2,
      D = {
        site: e,
        group: d,
        lit: m,
        center: L,
        radius: N,
        screens: M,
        beacons: x,
        machines: t,
        stateAttr: S,
        anchors: r,
        colliders: l,
        relightAt: 0,
        hall: h,
      };
    (t.forEach((H, G) => this.machineSite.set(H.id, { visual: D, index: G })),
      this.visuals.set(e.id, D),
      this.scene.add(d));
  }
  removeSite(e) {
    const t = this.visuals.get(e);
    if (t) {
      for (const i of t.machines)
        (this.machines.delete(i.id), this.machineSite.delete(i.id));
      (t.group.traverse((i) => {
        i instanceof le && i.geometry.dispose();
      }),
        t.beacons.material.dispose(),
        t.group.removeFromParent(),
        this.visuals.delete(e));
    }
  }
  hallAt(e, t, i) {
    for (const s of this.visuals.values())
      if (s.hall && vx(xH(s.site), e + 0.5, t + 0.5, i + 0.5)) return !0;
    return !1;
  }
  setStates(e) {
    const t = this.states;
    this.states = new Map(e.filter((s) => s.active).map((s) => [s.machine, s]));
    const i = new Set();
    for (const [s, o] of this.machineSite) {
      const a = this.states.get(s),
        r = t.get(s);
      ((r == null ? void 0 : r.owner) === (a == null ? void 0 : a.owner) &&
        (r == null ? void 0 : r.busy) === (a == null ? void 0 : a.busy) &&
        (r == null ? void 0 : r.win) === (a == null ? void 0 : a.win)) ||
        (this.writeState(o.visual, o.index, a), i.add(o.visual));
    }
    for (const s of i) s.stateAttr.needsUpdate = !0;
  }
  writeState(e, t, i) {
    const s = e.stateAttr.array;
    ((s[t * 4] = this.playingEnabled ? (i ? (i.busy ? 2 : 1) : 0) : 3),
      (s[t * 4 + 1] = i != null && i.win ? Math.round(i.win) : 0),
      (s[t * 4 + 3] = i != null && i.win ? 1 : 0));
  }
  setEnabled(e) {
    this.enabled !== e &&
      ((this.enabled = e),
      !e && this.open && this.park(),
      (this.colliderKey = ""));
  }
  setPlayingEnabled(e) {
    ((e = e && bx),
      (this.playingEnabled = e),
      e ||
        ((this.requestPending = !1),
        this.open &&
          (this.frame && (this.frame.src = "about:blank"), this.park())));
    for (const t of this.machineSite.values())
      this.writeState(
        t.visual,
        t.index,
        this.states.get(t.visual.machines[t.index].id),
      );
    for (const t of this.visuals.values()) t.stateAttr.needsUpdate = !0;
  }
  target(e, t, i = 5.5) {
    if (!this.enabled || !this.playingEnabled) return null;
    const s = new Gr(e, t);
    let o = null,
      a = i;
    const r = new k();
    for (const l of this.machines.values()) {
      if (Math.hypot(e.x - l.x, e.z - l.z) > i + 2) continue;
      const c = l.scale,
        h = new k(Math.sin(l.yaw), 0, Math.cos(l.yaw));
      if (t.dot(h) >= -0.05) continue;
      const d = new k(l.x, l.y + 1.5 * c, l.z).addScaledVector(h, 0.6 * c);
      if (!s.intersectPlane(new Rr().setFromNormalAndCoplanarPoint(h, d), r))
        continue;
      const u = e.distanceTo(r),
        f = r
          .clone()
          .sub(d)
          .applyAxisAngle(new k(0, 1, 0), -l.yaw);
      u > a * Math.max(1, c) ||
        Math.abs(f.x) > 0.93 * c ||
        f.y < -1.5 * c ||
        f.y > 1.4 * c ||
        this.hooks.raycast(e, t, Math.max(0, u - 0.08)) ||
        ((a = u), (o = l));
    }
    return o;
  }
  interact(e, t) {
    if (this.blackjack.interact(e, t)) return !0;
    const i = this.target(e, t);
    return i
      ? this.open || this.requestPending
        ? !0
        : this.hooks.held() === E.WELDER
          ? (this.hooks.send({ action: "pickup", machine: i.id }), !0)
          : ((this.requestPending = !0),
            (this.pendingAt = performance.now()),
            this.hooks.send({ action: "open", machine: i.id }),
            !0)
      : !1;
  }
  receive(e) {
    if ((this.blackjack.receive(e), e.type === "sites")) {
      this.setSites(e.sites);
      return;
    }
    if (e.type === "states") {
      this.setStates(e.states);
      return;
    }
    if (e.type === "error") {
      ((this.requestPending = !1),
        (this.closing = !1),
        this.hooks.notify(e.message),
        this.status(e.message, !0));
      return;
    }
    if (e.type === "session") {
      if (!this.playingEnabled) return;
      ((this.requestPending = !1), this.launch(e.session, e.resume));
      return;
    }
    if (e.type === "ack") {
      if (
        ((this.ack = e.sequence),
        (this.sending = !1),
        !this.queued &&
          e.sequence === this.sequence &&
          e.balance !== this.amount)
      ) {
        this.status(
          this.en(
            "Session balance mismatch. Close and reopen the game.",
            "Баланс сессии не совпадает. Остановите игру и перезагрузите экран.",
          ),
          !0,
        );
        return;
      }
      (this.queued
        ? this.flush()
        : this.pendingPark
          ? ((this.pendingPark = !1), this.finishPark())
          : this.closing && this.finishClose(),
        this.renderControls());
      return;
    }
    e.type === "closed" &&
      (this.teardown(),
      this.hooks.notify(
        e.parked
          ? this.en(
              "Session saved. Return to the same cabinet to continue.",
              "Сессия сохранена. Вернитесь к этому автомату, чтобы продолжить.",
            )
          : this.en(
              `Session balance returned to your wallet: ${Mc(e.balance)}`,
              `Баланс сессии возвращён в кошелёк: ${Mc(e.balance)}`,
            ),
      ),
      this.hooks.lock());
  }
  en(e, t) {
    return this.hooks.language() === "en" ? e : t;
  }
  launch(e, t) {
    var c, h;
    (this.teardown(),
      (this.session = e),
      (this.amount = this.shownAmount = e.balance),
      (this.initial = e.initial),
      (this.sequence = this.ack = e.sequence),
      (this.ready = this.loaded = !1),
      (this.busy = e.busy),
      (this.lastWin = e.win),
      (this.cameraBlend = 0));
    const i = this.machines.get(e.machine);
    if (!i) {
      this.hooks.send({ action: "park", token: e.token });
      return;
    }
    (this.hooks.unlock(),
      (h = (c = this.hooks).sound) == null || h.call(c, "sit"));
    const s = document.createElement("div");
    s.className = "casino-screen";
    const o = document.createElement("iframe");
    ((o.title = i.game.title),
      (o.allow = "autoplay; fullscreen"),
      (o.referrerPolicy = "no-referrer"),
      o.setAttribute("credentialless", ""),
      s.append(o),
      (this.frame = o));
    const a = i.scale;
    ((this.surface = new _I(s)),
      this.surface.scale.setScalar((br.width * a) / 1280),
      (this.surface.rotation.y = i.yaw),
      this.surface.position.set(
        i.x + Math.sin(i.yaw) * (br.z + 0.012) * a,
        i.y + br.y * a,
        i.z + Math.cos(i.yaw) * (br.z + 0.012) * a,
      ),
      this.cssScene.add(this.surface));
    const r = document.createElement("div");
    r.className = "fc-modal casino-controls";
    const l = `#${i.game.color.toString(16).padStart(6, "0")}`;
    (r.style.setProperty("--casino-accent", l),
      (r.innerHTML = `<div class="casino-vignette"></div>
      <div class="casino-marquee"><div class="casino-bulbs"></div><div class="casino-marquee-inner"><div class="casino-eyebrow">OLYMPUS CASINO · ${this.en("DEMO", "ДЕМО")}</div><div class="casino-title"></div></div></div>
      <div class="casino-wallet"><div class="casino-funds"><small>${this.en("SESSION BALANCE", "БАЛАНС СЕССИИ")}</small><strong></strong></div>
        <div class="casino-stats"><span class="casino-pl"></span><span class="casino-lastwin"></span></div></div>
      <div class="casino-dock"><div class="casino-status"></div><div class="casino-actions">
        <button data-action="expand"><i>⤢</i><span>${this.en("Expand", "Развернуть")}</span></button>
        <button data-action="close" class="casino-cash"><i>$</i><span>${this.en("Cash out", "Забрать баланс")}</span></button>
        <button data-action="park"><i>⏏</i><span>${this.en("Stand up", "Встать")}</span><kbd>Esc</kbd></button></div></div>
      <div class="casino-win" hidden><div class="casino-win-label"></div><div class="casino-win-amount"></div></div>
      <div class="casino-load-card"><div class="casino-reels"><span></span><span></span><span></span></div><b>${this.en("Opening the gates…", "Открываем врата…")}</b><br>${this.en("Loading the hosted game. The first launch can take a minute.", "Загружаем игру. Первый запуск может занять минуту.")}</div>`),
      (r.querySelector(".casino-title").textContent = i.game.title),
      r
        .querySelector('[data-action="expand"]')
        .addEventListener("click", () => this.toggleExpand()),
      r
        .querySelector('[data-action="close"]')
        .addEventListener("click", () => this.cashOut()),
      r
        .querySelector('[data-action="park"]')
        .addEventListener("click", () => this.park()),
      (this.controls = r),
      document.body.classList.add("casino-playing"),
      document.body.append(r),
      this.status(
        t
          ? this.en(
              "Resuming your saved session…",
              "Продолжаем сохранённую сессию…",
            )
          : this.en(
              "Your wallet funds are reserved for this session.",
              "Средства кошелька переведены на баланс этой сессии.",
            ),
      ),
      this.renderControls(),
      (o.src = RH(e, this.hooks.language())),
      (this.loadTimer = window.setTimeout(() => {
        var u, f;
        if (this.loaded) return;
        this.status(
          this.en(
            "The game is still loading. Check your connection; you can leave and resume this session.",
            "Игра ещё загружается. Проверьте соединение; можно выйти и продолжить эту сессию позже.",
          ),
          !0,
        );
        const d =
          (u = this.controls) == null
            ? void 0
            : u.querySelector(".casino-load-card");
        d &&
          ((f = d.querySelector(".casino-reels")) == null || f.remove(),
          (d.querySelector("b").textContent = this.en(
            "Waiting for the game",
            "Ожидаем загрузку игры",
          )));
      }, 6e4)));
  }
  celebrate(e) {
    var s, o, a;
    const t =
      (s = this.controls) == null ? void 0 : s.querySelector(".casino-win");
    if (!t) return;
    const i = e >= Math.max(1e3, this.initial * 0.5);
    ((t.querySelector(".casino-win-label").textContent = i
      ? this.en("BIG WIN!", "КРУПНЫЙ ВЫИГРЫШ!")
      : this.en("WIN", "ВЫИГРЫШ")),
      (t.querySelector(".casino-win-amount").textContent = `+${Mc(e)}`),
      (t.hidden = !1),
      t.classList.remove("casino-win-show", "casino-win-big"),
      t.offsetWidth,
      t.classList.add("casino-win-show"),
      i && t.classList.add("casino-win-big"));
    for (const r of t.querySelectorAll(".casino-coin")) r.remove();
    for (let r = 0; r < (i ? 36 : 14); r++) {
      const l = document.createElement("i");
      ((l.className = "casino-coin"),
        l.style.setProperty("--dx", `${(Math.random() - 0.5) * 520}px`),
        l.style.setProperty("--dy", `${140 + Math.random() * 260}px`),
        l.style.setProperty("--d", `${Math.random() * 0.35}s`),
        l.style.setProperty("--r", `${(Math.random() - 0.5) * 720}deg`),
        t.append(l));
    }
    ((a = (o = this.hooks).sound) == null || a.call(o, i ? "bigwin" : "win"),
      clearTimeout(t._t),
      (t._t = setTimeout(
        () => {
          t.hidden = !0;
        },
        i ? 3600 : 2200,
      )));
  }
  queueSync() {
    ((this.queued = !0), this.flush());
  }
  flush() {
    this.sending ||
      !this.queued ||
      !this.session ||
      !this.hooks.connected() ||
      ((this.queued = !1),
      (this.sending = !0),
      this.sequence++,
      this.hooks.send({
        action: "sync",
        token: this.session.token,
        sequence: this.sequence,
        balance: this.amount,
        busy: this.busy,
        win: this.lastWin,
      }));
  }
  cashOut() {
    !this.session || this.busy || ((this.closing = !0), this.finishClose());
  }
  finishClose() {
    !this.session ||
      this.sending ||
      this.queued ||
      (this.frame && (this.frame.src = "about:blank"),
      this.hooks.send({ action: "close", token: this.session.token }),
      this.renderControls());
  }
  park() {
    if (!(!this.session || this.closing)) {
      if (((this.closing = !0), this.sending || this.queued)) {
        (this.status(
          this.en(
            "Saving the latest result…",
            "Сохраняем последний результат…",
          ),
        ),
          (this.pendingPark = !0));
        return;
      }
      this.finishPark();
    }
  }
  finishPark() {
    this.session &&
      (this.frame && (this.frame.src = "about:blank"),
      this.hooks.send({ action: "park", token: this.session.token }));
  }
  renderControls() {
    if (!this.controls) return;
    const e = this.amount - this.initial,
      t = this.controls.querySelector(".casino-pl");
    ((t.textContent = `${this.en("P/L", "Итог")} ${e >= 0 ? "+" : "−"}${Mc(Math.abs(e))}`),
      (t.dataset.sign = e > 0.004 ? "up" : e < -0.004 ? "down" : "flat"),
      (this.controls.querySelector(".casino-lastwin").textContent =
        this.lastWin > 0
          ? `${this.en("Last win", "Выигрыш")} ${Mc(this.lastWin)}`
          : ""));
    const i = this.controls.querySelector('[data-action="close"]');
    ((i.disabled = this.busy || this.sending || this.closing),
      (i.title = this.busy
        ? this.en(
            "Finish the current round first.",
            "Сначала завершите текущий раунд.",
          )
        : ""));
  }
  status(e, t = !1) {
    var s;
    const i =
      (s = this.controls) == null ? void 0 : s.querySelector(".casino-status");
    i && ((i.textContent = e), i.classList.toggle("casino-failed", t));
  }
  toggleExpand() {
    var t, i;
    if (!this.surface) return;
    ((this.expanded = !this.expanded),
      this.css.domElement.classList.toggle(
        "casino-webgl-expanded",
        this.expanded,
      ),
      (t = this.controls) == null ||
        t.classList.toggle("casino-expanded", this.expanded));
    const e =
      (i = this.controls) == null
        ? void 0
        : i.querySelector('[data-action="expand"] span');
    e &&
      (e.textContent = this.expanded
        ? this.en("Cabinet screen", "Экран автомата")
        : this.en("Expand", "Развернуть"));
  }
  update(e, t, i, s) {
    var b, S;
    ((this.elapsed += e), (F4.value = this.elapsed));
    const o = this.elapsed >= this.beaconUpdateAt;
    (o && (this.beaconUpdateAt = this.elapsed + 0.1),
      this.blackjack.update(e, t, i, s, this.enabled),
      this.requestPending &&
        performance.now() - this.pendingAt > 1e4 &&
        ((this.requestPending = !1),
        this.hooks.notify(
          this.en(
            "Casino did not respond. This feature requires an updated Node server.",
            "Казино не ответило. Нужен обновлённый Node-сервер.",
          ),
        )),
      this.open &&
        !s &&
        (this.teardown(),
        this.hooks.notify(
          this.en(
            "Session saved on the server. Reconnect and return to this cabinet.",
            "Сессия сохранена на сервере. После подключения вернитесь к автомату.",
          ),
        )));
    const a = [];
    let r = this.enabled ? "" : "off",
      l = 1 / 0;
    for (const M of this.visuals.values()) {
      const x = M.center.distanceTo(t) - M.radius;
      if (
        ((M.group.visible = this.enabled && x < 110),
        this.enabled && x < 48 && (a.push(...M.colliders), (r += M.site.id)),
        M.group.visible &&
          x < 70 &&
          this.elapsed >= M.relightAt &&
          this.relight(M),
        M.group.visible)
      ) {
        for (let T = 0; T < M.machines.length; T++) {
          const A = this.states.get(M.machines[T].id),
            _ =
              A != null && A.busy
                ? 0.75 + 0.5 * Math.max(0, Math.sin(this.elapsed * 8 + T))
                : A
                  ? 1
                  : 0.55;
          (o &&
            M.beacons.setColorAt(
              T,
              this.beaconColor.set(M.machines[T].game.color).multiplyScalar(_),
            ),
            A &&
              Math.hypot(M.machines[T].x - t.x, M.machines[T].z - t.z) < l &&
              (l = Math.hypot(M.machines[T].x - t.x, M.machines[T].z - t.z)));
        }
        (o &&
          M.beacons.instanceColor &&
          (M.beacons.instanceColor.needsUpdate = !0),
          M.hall &&
            vx(M.hall, t.x, t.y, t.z) &&
            (l = Math.min(l, 6 + Math.random() * 8)));
      }
    }
    if (
      (r !== this.colliderKey &&
        ((this.colliderKey = r), this.hooks.colliders(a)),
      (this.chimeT -= e),
      this.chimeT <= 0 &&
        ((this.chimeT = 2.5 + Math.random() * 5),
        l < 20 &&
          !this.open &&
          ((S = (b = this.hooks).sound) == null ||
            S.call(b, "chime", l, Math.floor(Math.random() * 5)))),
      this.pendingPark &&
        this.session &&
        !this.sending &&
        !this.queued &&
        ((this.pendingPark = !1), this.finishPark()),
      !this.open || !this.surface || !this.session)
    )
      return;
    const c = this.machines.get(this.session.machine);
    if (!c) return;
    if (Math.hypot(t.x - c.x, t.y - c.y, t.z - c.z) > 8 * c.scale) {
      this.park();
      return;
    }
    if (this.controls) {
      const M = this.controls.querySelector(".casino-funds strong"),
        x = this.amount - this.shownAmount;
      Math.abs(x) > 0.004
        ? ((this.shownAmount += x * Math.min(1, e * 7)),
          Math.abs(this.amount - this.shownAmount) < 0.01 &&
            (this.shownAmount = this.amount),
          (M.textContent = Mc(this.shownAmount)),
          M.classList.toggle("casino-counting", !0))
        : M.textContent !== Mc(this.amount) &&
          ((M.textContent = Mc(this.amount)),
          M.classList.remove("casino-counting"));
    }
    (this.savedPose ||
      (this.savedPose = {
        position: i.position.clone(),
        quaternion: i.quaternion.clone(),
      }),
      (this.cameraBlend = Math.min(1, this.cameraBlend + e * 1.6)));
    const h = new k(Math.sin(c.yaw), 0, Math.cos(c.yaw)),
      d = fi.degToRad(i.fov),
      u = 2 * Math.atan(Math.tan(d / 2) * i.aspect),
      f = Math.max(
        (br.height * c.scale * 0.5) / Math.tan(d * 0.5 * 0.7),
        (br.width * c.scale * 0.5) / Math.tan(u * 0.5 * 0.78),
      ),
      p = this.surface.position,
      m = p.clone().addScaledVector(h, f);
    m.y = p.y - 0.04 * c.scale;
    const y = 1 - (1 - this.cameraBlend) ** 3;
    i.position.lerpVectors(this.savedPose.position, m, y);
    const g = new Jt().setFromRotationMatrix(
      new bt().lookAt(m, p, new k(0, 1, 0)),
    );
    (i.quaternion.copy(this.savedPose.quaternion).slerp(g, y),
      i.updateMatrixWorld(),
      (this.viewportWidth !== innerWidth ||
        this.viewportHeight !== innerHeight) &&
        ((this.viewportWidth = innerWidth),
        (this.viewportHeight = innerHeight),
        this.css.setSize(innerWidth, innerHeight)),
      this.expanded ||
        ((this.css.domElement.style.display = ""),
        this.css.render(this.cssScene, i)));
  }
  relight(e) {
    var a;
    e.relightAt = this.elapsed + 1.5;
    const t = (a = e.lit) == null ? void 0 : a.geometry;
    if (!t) return;
    const i = t.getAttribute("blocklight"),
      s = t.getAttribute("skylight");
    let o = !1;
    for (const r of e.anchors) {
      const l = this.hooks.lighting(
        Math.floor(r.x),
        Math.floor(r.y),
        Math.floor(r.z),
      );
      if (
        (l.light <= 0 && l.sky <= 0) ||
        (Math.abs(l.light - r.light) < 0.02 && Math.abs(l.sky - r.sky) < 0.02)
      )
        continue;
      ((r.light = l.light), (r.sky = l.sky));
      const c = Math.max(l.light, 0.55),
        h = l.sky;
      for (let d = r.start; d < r.end; d++) (i.setX(d, c), s.setX(d, h));
      o = !0;
    }
    o && ((i.needsUpdate = !0), (s.needsUpdate = !0));
  }
  teardown() {
    var e, t, i;
    (document.body.classList.remove("casino-playing"),
      clearTimeout(this.loadTimer),
      (this.css.domElement.style.display = "none"),
      (e = this.surface) == null || e.removeFromParent(),
      (t = this.surface) == null || t.element.remove(),
      this.frame && (this.frame.src = "about:blank"),
      (this.frame = void 0),
      (i = this.controls) == null || i.remove(),
      (this.controls = void 0),
      this.css.domElement.classList.remove("casino-webgl-expanded"),
      (this.expanded = !1),
      (this.surface = void 0),
      (this.session = void 0),
      (this.savedPose = void 0),
      (this.sending = this.queued = this.closing = this.pendingPark = !1));
  }
  dispose() {
    (this.blackjack.dispose(), this.teardown());
    for (const e of [...this.visuals.keys()]) this.removeSite(e);
    (this.hooks.colliders([]),
      this.css.domElement.remove(),
      window.removeEventListener("message", this.onMessage),
      document.removeEventListener("keydown", this.onKey, !0));
  }
}
