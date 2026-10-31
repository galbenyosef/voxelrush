// index-Dp6GxvJu 164 — math
// Lines 95676-96286 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class JQ {
  constructor(e, t) {
    w(this, "sites", new Map());
    w(this, "visuals", new Map());
    w(this, "css", new RI());
    w(this, "cssScene", new nh());
    w(this, "surface");
    w(this, "frame");
    w(this, "controls");
    w(this, "active");
    w(this, "pending");
    w(this, "expanded", !1);
    w(this, "elapsed", 0);
    w(this, "blend", 0);
    w(this, "savedPose");
    w(this, "viewport", "");
    w(this, "colliderKey", "");
    w(this, "loadTimer", 0);
    w(this, "frameGeneration", 0);
    w(this, "focusAfterLoad", !1);
    w(this, "onKey", (e) => {
      var t, i;
      if (!(!this.open || e.code !== "Escape")) {
        if (
          (e.preventDefault(),
          e.stopImmediatePropagation(),
          document.pointerLockElement)
        ) {
          document.exitPointerLock();
          return;
        }
        (i =
          (t = this.controls) == null
            ? void 0
            : t.querySelector(".computer-panel")) != null && i.hidden
          ? this.expanded
            ? this.toggleExpand()
            : this.close()
          : this.toggleAddress(!1);
      }
    });
    ((this.scene = e),
      (this.hooks = t),
      (this.css.domElement.className = "computer-overlay"),
      (this.css.domElement.style.display = "none"),
      document.body.append(this.css.domElement),
      document.addEventListener("keydown", this.onKey, !0));
  }
  get open() {
    return !!this.controls;
  }
  en(e, t) {
    return this.hooks.language() === "en" ? e : t;
  }
  receive(e) {
    var t;
    if (e.type === "sites") {
      const i = e.sites.filter(qQ),
        s = new Map(i.map((o) => [o.id, o]));
      for (const [o, a] of this.visuals)
        JSON.stringify(s.get(o)) !== JSON.stringify(a.site) && this.remove(o);
      this.sites.clear();
      for (const o of i)
        (this.sites.set(o.id, o), this.visuals.has(o.id) || this.build(o));
      ((this.colliderKey = ""),
        this.active && !this.sites.has(this.active) && this.close());
      return;
    }
    if (e.type === "error") {
      ((this.pending = void 0),
        this.hooks.notify(e.message),
        this.status(e.message));
      return;
    }
    !this.hooks.canUse() ||
      !this.sites.has(e.id) ||
      !P_(e.url) ||
      (e.type === "open" &&
      ((t = this.pending) == null ? void 0 : t.id) === e.id
        ? ((this.pending = void 0), this.launch(e.id, e.url))
        : e.type === "navigate" &&
          this.active === e.id &&
          this.load(e.url, !0));
  }
  build(e) {
    const t = XQ();
    (t.group.position.set(e.x, e.y, e.z),
      (t.group.rotation.y = gf(e)),
      this.scene.add(t.group),
      t.group.updateMatrixWorld(!0));
    const i = [
      [-1.3, 0, -0.66, 1.3, 1.1, 0.86],
      [-0.9, 1.16, -0.68, 0.9, 2.23, -0.35],
      [-0.9, 1.1, -0.46, 0.9, 1.2, 0.75],
    ].map(([s, o, a, r, l, c]) =>
      new gn(new k(s, o, a), new k(r, l, c)).applyMatrix4(t.group.matrixWorld),
    );
    (this.visuals.set(e.id, {
      site: e,
      model: t,
      boxes: i,
      relightAt: 0,
      light: -1,
      sky: -1,
      lid: 0,
      want: 0,
      lidT: 0,
      power: 0,
      powerT: 0,
      drawn: "",
    }),
      this.drawScreen(this.visuals.get(e.id)));
  }
  drawScreen(e) {
    const { ctx: t, canvas: i, texture: s } = e.model.screen,
      o = i.width,
      a = i.height,
      r = e.power,
      l = e.powerT,
      c =
        r <= 0
          ? "off"
          : r >= 1 && l >= Tb
            ? "ready"
            : `${r.toFixed(2)}:${l.toFixed(2)}`;
    if (c === e.drawn) return;
    if (
      ((e.drawn = c), (t.fillStyle = "#05080c"), t.fillRect(0, 0, o, a), r <= 0)
    ) {
      t.fillStyle = "#0d141c";
      for (let p = 0; p < 60; p++)
        t.fillRect(40 + p, (20 + p * 0.6) | 0, 24, 1);
      t.fillStyle = "#111a24";
      for (let p = 0; p < 40; p++)
        t.fillRect(150 + p, (10 + p * 0.6) | 0, 10, 1);
      s.needsUpdate = !0;
      return;
    }
    const h = Math.min(1, l / 0.28),
      d = Math.max(2, Math.round(a * h * h)),
      u = (a - d) >> 1,
      f = t.createLinearGradient(0, u, 0, u + d);
    if (
      (f.addColorStop(0, "#0b1a2c"),
      f.addColorStop(1, "#132f4a"),
      (t.fillStyle = f),
      t.fillRect(0, u, o, d),
      h < 1)
    )
      ((t.fillStyle = "#d9f2ff"),
        t.fillRect(
          Math.round(o * 0.5 * (1 - h * 2.2)),
          (a >> 1) - 1,
          Math.max(2, Math.round(o * Math.min(1, h * 2.2))),
          2,
        ));
    else {
      const p = Math.min(1, (l - 0.28) / (Tb - 0.45)),
        m = o / 2,
        y = a / 2 - 22,
        g = 14;
      ((t.fillStyle = "#ffb547"),
        t.beginPath(),
        t.moveTo(m, y - g),
        t.lineTo(m + g, y - g / 2),
        t.lineTo(m, y),
        t.lineTo(m - g, y - g / 2),
        t.fill(),
        (t.fillStyle = "#d4801c"),
        t.beginPath(),
        t.moveTo(m - g, y - g / 2),
        t.lineTo(m, y),
        t.lineTo(m, y + g),
        t.lineTo(m - g, y + g / 2),
        t.fill(),
        (t.fillStyle = "#9c5a10"),
        t.beginPath(),
        t.moveTo(m + g, y - g / 2),
        t.lineTo(m, y),
        t.lineTo(m, y + g),
        t.lineTo(m + g, y + g / 2),
        t.fill(),
        (t.fillStyle = "#eaf3ff"),
        (t.font = "bold 16px monospace"),
        (t.textAlign = "center"),
        t.fillText("VOXEL OS", m, y + 38),
        (t.fillStyle = "#6f8aa6"),
        (t.font = "9px monospace"),
        t.fillText(p < 1 ? "starting browser…" : "ready", m, y + 52));
      for (let b = 0; b < 16; b++)
        ((t.fillStyle = b / 16 < p ? "#ffb547" : "#1d2f44"),
          t.fillRect(m - 64 + b * 8, y + 60, 6, 5));
    }
    t.fillStyle = "#00000026";
    for (let p = 0; p < a; p += 2) t.fillRect(0, p, o, 1);
    s.needsUpdate = !0;
  }
  remove(e) {
    const t = this.visuals.get(e);
    t &&
      (t.model.group.removeFromParent(),
      t.model.group.traverse((i) => {
        i instanceof le && i.geometry.dispose();
      }),
      t.model.screen.texture.dispose(),
      t.model.display.material.dispose(),
      this.visuals.delete(e));
  }
  target(e, t, i = 5.5) {
    if (!this.hooks.canUse()) return null;
    const s = new Gr(e, t),
      o = new k();
    let a = null,
      r = i;
    for (const l of this.visuals.values()) {
      if (
        !l.model.group.visible ||
        Math.hypot(e.x - l.site.x, e.z - l.site.z) > i + 2
      )
        continue;
      if (l.lid < 0.6) {
        const p = new bt().copy(l.model.group.matrixWorld).invert(),
          m = s.clone().applyMatrix4(p),
          y = new gn(new k(-0.95, 1.08, -0.62), new k(0.95, 1.32, 0.66));
        if (m.intersectBox(y, o)) {
          o.applyMatrix4(l.model.group.matrixWorld);
          const g = e.distanceTo(o);
          if (g < r && !this.hooks.raycast(e, t, Math.max(0, g - 0.08))) {
            ((r = g), (a = l.site));
            continue;
          }
        }
      }
      const c = gf(l.site),
        h = new k(0, 0, 1).applyEuler(new hi(Vn.tilt, c, 0, "YXZ"));
      if (t.dot(h) >= -0.05) continue;
      const d = new k(Vn.x, Vn.y, Vn.z)
        .applyAxisAngle($t.DEFAULT_UP, c)
        .add(l.model.group.position);
      if (!s.intersectPlane(new Rr().setFromNormalAndCoplanarPoint(h, d), o))
        continue;
      const u = e.distanceTo(o),
        f = o
          .clone()
          .sub(d)
          .applyAxisAngle($t.DEFAULT_UP, -c)
          .applyAxisAngle(new k(1, 0, 0), -Vn.tilt);
      u > r ||
        Math.abs(f.x) > Vn.width / 2 + 0.06 ||
        Math.abs(f.y) > Vn.height / 2 + 0.06 ||
        this.hooks.raycast(e, t, Math.max(0, u - 0.08)) ||
        ((r = u), (a = l.site));
    }
    return a;
  }
  interact(e, t) {
    const i = this.target(e, t);
    return i
      ? (this.open ||
          this.pending ||
          (this.hooks.held() === ITEM.WELDER
            ? this.hooks.send({ action: "pickup", id: i.id })
            : ((this.pending = { id: i.id, at: performance.now() }),
              this.hooks.send({ action: "open", id: i.id }))),
        !0)
      : !1;
  }
  launch(e, t) {
    this.teardown();
    const i = this.visuals.get(e);
    if (!i) return;
    this.active = e;
    const s = document.createElement("div");
    s.className = "computer-screen";
    const o = document.createElement("iframe");
    ((o.title = this.en("Computer browser", "Браузер компьютера")),
      (o.referrerPolicy = "no-referrer"),
      (o.allow =
        "cross-origin-isolated *; autoplay *; fullscreen *; gamepad *; local-network-access *; local-network *; loopback-network *"),
      (o.allowFullscreen = !0),
      o.sandbox.add(
        "allow-scripts",
        "allow-same-origin",
        "allow-pointer-lock",
        "allow-forms",
        "allow-modals",
        "allow-popups",
        "allow-popups-to-escape-sandbox",
        "allow-downloads",
      ),
      s.append(o),
      (this.frame = o),
      s.classList.add("booting"),
      (this.surface = new _I(s)),
      this.surface.scale.setScalar(Vn.width / 1280),
      this.surface.rotation.set(Vn.tilt, gf(i.site), 0, "YXZ"),
      this.surface.position
        .set(
          Vn.x,
          Vn.y - 0.004 * Math.sin(Vn.tilt),
          Vn.z + 0.004 * Math.cos(Vn.tilt),
        )
        .applyAxisAngle($t.DEFAULT_UP, gf(i.site))
        .add(i.model.group.position),
      this.cssScene.add(this.surface),
      (i.want = 1));
    const a = document.createElement("div");
    ((a.className = "fc-modal computer-controls"),
      (a.innerHTML = `<div class="computer-dock" aria-label="${this.en("Computer controls", "Управление компьютером")}">
      <button data-action="address" aria-expanded="false">${this.en("Link", "Ссылка")}</button>
      <button data-action="expand" class="computer-icon" title="${this.en("Expand screen", "Развернуть экран")}" aria-label="${this.en("Expand screen", "Развернуть экран")}">⤢</button>
      <button data-action="close" class="computer-icon" title="${this.en("Back to game", "В игру")}" aria-label="${this.en("Back to game", "В игру")}">×</button></div>
      <div class="computer-panel" hidden>
        <div class="computer-panel-heading"><span>${this.en("Web address", "Адрес сайта")}</span><button data-action="address-close" class="computer-icon" aria-label="${this.en("Close address panel", "Закрыть адрес")}">×</button></div>
        <form class="computer-toolbar"><input type="text" inputmode="url" maxlength="2048" spellcheck="false" autocomplete="off" aria-label="${this.en("Web address", "Адрес сайта")}" placeholder="${$Q}">
          <button type="submit" data-action="go">${this.en("Open", "Открыть")}</button></form>
        <div class="computer-secondary"><button data-action="reload" title="${this.en("Reload page", "Перезагрузить страницу")}" aria-label="${this.en("Reload page", "Перезагрузить страницу")}">↻</button>
          <a target="_blank" rel="noopener noreferrer" data-action="external">${this.en("Open in tab", "Во вкладке")} ↗</a>
          <button data-action="fullscreen" title="${this.en("Browser fullscreen", "Полный экран браузера")}" aria-label="${this.en("Browser fullscreen", "Полный экран браузера")}">⛶</button>
          <button data-action="help">${this.en("Help", "Помощь")}</button></div>
        <span class="computer-status"></span><div class="computer-help" hidden></div></div>`),
      (this.controls = a),
      document.body.append(a),
      document.body.classList.add("computer-playing"),
      a.querySelector("form").addEventListener("submit", (r) => {
        r.preventDefault();
        const l = a.querySelector("input").value,
          c = P_(l);
        if (!c) {
          this.status(
            this.en(
              "Enter an HTTP or HTTPS address.",
              "Введите HTTP или HTTPS адрес.",
            ),
          );
          return;
        }
        (this.status(this.en("Opening…", "Открываем…")),
          this.hooks.send({ action: "navigate", id: e, url: c }));
      }),
      a
        .querySelector('[data-action="reload"]')
        .addEventListener("click", () => {
          this.frame && this.load(this.frame.src, !0, !0);
        }),
      a
        .querySelector('[data-action="expand"]')
        .addEventListener("click", () => this.toggleExpand()),
      a
        .querySelector('[data-action="close"]')
        .addEventListener("click", () => this.close()),
      a
        .querySelector('[data-action="address"]')
        .addEventListener("click", () => this.toggleAddress()),
      a
        .querySelector('[data-action="address-close"]')
        .addEventListener("click", () => this.toggleAddress(!1)),
      a
        .querySelector('[data-action="fullscreen"]')
        .addEventListener("click", () => {
          var r, l;
          (this.expanded || this.toggleExpand(),
            document.fullscreenElement
              ? document.exitFullscreen()
              : (l = (r = document.documentElement).requestFullscreen) ==
                  null ||
                l
                  .call(r)
                  .catch(() =>
                    this.status(
                      this.en(
                        "Browser fullscreen is unavailable. Expanded mode is active.",
                        "Полноэкранный режим браузера недоступен. Экран развёрнут.",
                      ),
                    ),
                  ));
        }),
      a.querySelector('[data-action="help"]').addEventListener("click", () => {
        const r = a.querySelector(".computer-help");
        r.hidden = !r.hidden;
      }),
      (a.querySelector(".computer-help").textContent = this.en(
        "127.0.0.1 means the computer running your browser: start the game on port 8080 there. Embedded games must support cross-origin isolation (COEP: require-corp). Some sites (including Google) block embedding; use Open in tab. For remote HTTP sites use HTTPS. Your browser may ask for local-network access. Esc releases a captured mouse; then click × to return to the game.",
        "127.0.0.1 — компьютер, на котором открыт ваш браузер: запустите там игру на порту 8080. Встроенная игра должна поддерживать cross-origin isolation (COEP: require-corp). Некоторые сайты (включая Google) запрещают iframe: используйте «Во вкладке». Для удалённых HTTP сайтов нужен HTTPS. Браузер может запросить доступ к локальной сети. Esc освобождает захваченную мышь; затем нажмите ×, чтобы вернуться в игру.",
      )),
      this.hooks.unlock(),
      this.load(t, !1));
  }
  load(e, t, i = !1) {
    if (!this.frame) return;
    clearTimeout(this.loadTimer);
    const s = ++this.frameGeneration;
    if (
      ((this.focusAfterLoad = t),
      (this.controls.querySelector("input").value = e),
      (this.controls.querySelector('[data-action="external"]').href = e),
      t && this.toggleAddress(!1),
      this.status(this.en("Loading page…", "Загрузка страницы…")),
      (this.frame.onload = () => {
        var o;
        s === this.frameGeneration &&
          (clearTimeout(this.loadTimer),
          this.status(
            this.en(
              "Click inside the screen to play. Esc releases the mouse.",
              "Нажмите внутри экрана, чтобы играть. Esc освобождает мышь.",
            ),
          ),
          this.focusAfterLoad && ((o = this.frame) == null || o.focus()));
      }),
      (this.frame.onerror = () =>
        this.status(
          this.en(
            "Could not open this page. Check Link → Help.",
            "Не удалось открыть страницу. Ссылка → Помощь.",
          ),
        )),
      i)
    )
      try {
        this.frame.contentWindow.location.reload();
      } catch {
        this.frame.src = e;
      }
    else this.frame.src = e;
    this.loadTimer = window.setTimeout(
      () =>
        this.status(
          this.en(
            "Still loading? Check the address or open this page in a tab.",
            "Всё ещё загружается? Проверьте адрес или откройте страницу во вкладке.",
          ),
        ),
      15e3,
    );
  }
  status(e) {
    var i;
    const t =
      (i = this.controls) == null
        ? void 0
        : i.querySelector(".computer-status");
    t && (t.textContent = e);
  }
  toggleAddress(e) {
    var i, s;
    const t =
      (i = this.controls) == null ? void 0 : i.querySelector(".computer-panel");
    if (t)
      if (
        ((t.hidden = e === void 0 ? !t.hidden : !e),
        this.controls
          .querySelector('[data-action="address"]')
          .setAttribute("aria-expanded", String(!t.hidden)),
        t.hidden)
      )
        (s = this.frame) == null || s.focus();
      else {
        const o = this.controls.querySelector("input");
        (o.focus(), o.select());
      }
  }
  toggleExpand() {
    var t;
    if (!this.surface) return;
    ((this.expanded = !this.expanded),
      this.css.domElement.classList.toggle("computer-expanded", this.expanded),
      (t = this.controls) == null ||
        t.classList.toggle("computer-expanded", this.expanded));
    const e = this.controls.querySelector('[data-action="expand"]');
    ((e.textContent = this.expanded ? "⤡" : "⤢"),
      (e.title = this.expanded
        ? this.en("Monitor screen", "Экран монитора")
        : this.en("Expand screen", "Развернуть экран")),
      e.setAttribute("aria-label", e.title));
  }
  update(e, t, i, s, o) {
    ((this.elapsed += e),
      this.pending &&
        performance.now() - this.pending.at > 1e4 &&
        ((this.pending = void 0),
        this.hooks.notify(
          this.en("Computer did not respond.", "Компьютер не ответил."),
        )),
      this.open &&
        (!s ||
          !o ||
          !this.hooks.canUse() ||
          !this.sites.has(this.active) ||
          t.distanceTo(this.visuals.get(this.active).model.group.position) >
            8) &&
        this.close());
    const a = [];
    let r = o ? "on" : "off";
    for (const [b, S] of this.visuals) {
      const M = S.model.group.position.distanceTo(t);
      if (
        ((S.model.group.visible = o && M < 100),
        o && M < 48 && (a.push(...S.boxes), (r += b)),
        S.model.group.visible && this.elapsed >= S.relightAt)
      ) {
        S.relightAt = this.elapsed + 1.5;
        const x = this.hooks.lighting(
            Math.floor(S.site.x),
            Math.floor(S.site.y + 1),
            Math.floor(S.site.z),
          ),
          T = Math.max(0.28, x.light);
        if (T !== S.light || x.sky !== S.sky) {
          ((S.light = T), (S.sky = x.sky));
          const A = S.model.body.geometry;
          for (const _ of [A, S.model.lidMesh.geometry])
            for (const [C, R] of [
              ["blocklight", T],
              ["skylight", x.sky],
            ]) {
              const L = _.getAttribute(C);
              for (let N = 0; N < L.count; N++) L.setX(N, R);
              L.needsUpdate = !0;
            }
        }
      }
    }
    r !== this.colliderKey && ((this.colliderKey = r), this.hooks.colliders(a));
    for (const b of this.visuals.values()) this.animate(b, e);
    if (!this.open || !this.surface) return;
    this.savedPose ||
      (this.savedPose = {
        position: i.position.clone(),
        quaternion: i.quaternion.clone(),
      });
    const l = this.sites.get(this.active),
      c = gf(l),
      h = new k(0, 0, 1).applyEuler(new hi(Vn.tilt, c, 0, "YXZ")),
      d = fi.degToRad(i.fov),
      u = 2 * Math.atan(Math.tan(d / 2) * i.aspect),
      f = Math.max(
        (Vn.height * 0.5) / Math.tan(d * 0.5 * 0.6),
        (Vn.width * 0.5) / Math.tan(u * 0.5 * 0.78),
      ),
      p = this.surface.position.clone().addScaledVector(h, f),
      m = new Jt().setFromRotationMatrix(
        new bt().lookAt(p, this.surface.position, $t.DEFAULT_UP),
      );
    this.blend = Math.min(1, this.blend + e * 2.2);
    const y = 1 - (1 - this.blend) ** 3;
    (i.position.lerpVectors(this.savedPose.position, p, y),
      i.quaternion.copy(this.savedPose.quaternion).slerp(m, y),
      i.updateMatrixWorld());
    const g = `${innerWidth},${innerHeight}`;
    (this.viewport !== g &&
      ((this.viewport = g), this.css.setSize(innerWidth, innerHeight)),
      (this.css.domElement.style.display = ""),
      this.expanded || this.css.render(this.cssScene, i));
  }
  animate(e, t) {
    const i = e.want;
    if (i === 1 || e.power <= 0) {
      e.lidT = i ? Math.min(xb, e.lidT + t) : Math.max(0, e.lidT - t * 1.4);
      const o = e.lidT / xb;
      ((e.lid = i ? ZQ(o) : QQ(o)), OI(e.model.lid, e.lid));
    }
    (i === 1 && e.lidT >= xb * 0.8
      ? ((e.power = 1), (e.powerT += t))
      : e.power > 0
        ? ((e.power = Math.max(0, e.power - t * 5)),
          (e.powerT = Math.min(e.powerT, 0.27 * e.power)))
        : (e.powerT = 0),
      e.model.group.visible && this.drawScreen(e),
      this.active === e.site.id &&
        this.surface &&
        e.powerT >= Tb &&
        this.surface.element.classList.remove("booting"));
  }
  close() {
    const e = this.open;
    (this.teardown(), (this.pending = void 0), e && this.hooks.lock());
  }
  teardown() {
    var t, i, s;
    (clearTimeout(this.loadTimer),
      this.frameGeneration++,
      document.pointerLockElement && document.exitPointerLock());
    const e = this.active && this.visuals.get(this.active);
    (e && (e.want = 0),
      this.frame &&
        ((this.frame.onload = null),
        (this.frame.onerror = null),
        (this.frame.src = "about:blank")),
      (t = this.surface) == null || t.removeFromParent(),
      (i = this.surface) == null || i.element.remove(),
      (s = this.controls) == null || s.remove(),
      (this.css.domElement.style.display = "none"),
      this.css.domElement.classList.remove("computer-expanded"),
      document.body.classList.remove("computer-playing"),
      (this.frame = void 0),
      (this.controls = void 0),
      (this.surface = void 0),
      (this.active = void 0),
      (this.expanded = !1),
      (this.savedPose = void 0),
      (this.blend = 0));
  }
  dispose() {
    (this.teardown(), (this.pending = void 0));
    for (const e of this.visuals.keys()) this.remove(e);
    (this.hooks.colliders([]),
      this.css.domElement.remove(),
      document.removeEventListener("keydown", this.onKey, !0));
  }
}
