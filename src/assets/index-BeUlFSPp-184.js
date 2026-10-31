// index-BeUlFSPp 184 — preview
// Lines 102282-102670 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class toe {
  constructor(e) {
    this.host = e;
  }
  root = null;
  vid = -1;
  repair = null;
  preview = null;
  hoverLevel = -1;
  renderedAt = 0;
  get isOpen() {
    return !!this.root;
  }
  get vehicleId() {
    return this.vid;
  }
  open(e) {
    if ((this.close(!0), !this.host.vehicle(e))) return;
    if (((this.vid = e), !document.getElementById("welder-menu-css"))) {
      const n = document.createElement("style");
      ((n.id = "welder-menu-css"),
        (n.textContent = Jne),
        document.head.append(n));
    }
    const i = document.createElement("div");
    ((i.id = "welder-menu"),
      (i.className = "fc-modal"),
      i.setAttribute("role", "dialog"),
      i.setAttribute("aria-modal", "true"),
      i.addEventListener("pointerdown", (n) => {
        n.target === i && this.close();
      }),
      i.addEventListener("keydown", (n) => n.stopPropagation()),
      document.body.append(i),
      (this.root = i),
      this.render(!0),
      window.addEventListener("keydown", this.onKey, !0));
  }
  close(e = !1) {
    this.root &&
      (window.removeEventListener("keydown", this.onKey, !0),
      this.root.remove(),
      (this.root = null),
      (this.repair = null),
      (this.hoverLevel = -1),
      this.preview &&
        (cancelAnimationFrame(this.preview.raf),
        this.preview.model &&
          (this.preview.scene.remove(this.preview.model),
          G8(this.preview.model),
          (this.preview.model = null)),
        (this.preview.key = "")),
      e || this.host.closed());
  }
  onKey = (e) => {
    if (!this.root) return;
    if (
      e.code === "Escape" ||
      e.code === Y.binds.inventory ||
      e.code === Y.binds.use
    ) {
      (e.preventDefault(), e.stopPropagation(), this.close());
      return;
    }
    const t = e.code.startsWith("Digit") ? +e.code.slice(5) : 0;
    if (t >= 1 && t <= 4) {
      (e.preventDefault(), e.stopPropagation());
      const i = this.root.querySelector(`[data-slot="${t}"]`);
      i && !i.disabled && i.click();
    }
  };
  update() {
    if (!this.root) return;
    const e = this.host.vehicle(this.vid);
    if (!e) {
      this.close();
      return;
    }
    const t = performance.now();
    if (this.repair) {
      const i = Am(e.type);
      e.hp >= e.maxHp ||
      this.repair.left <= 0 ||
      (!this.host.creative() && this.host.balance() < i)
        ? (this.repair = null)
        : t >= this.repair.next
          ? (this.host.repairTick(e.id),
            this.host.weldFx(e.id),
            this.repair.left--,
            (this.repair.next = t + 170))
          : Math.random() < 0.35 && this.host.weldFx(e.id);
    }
    t - this.renderedAt > 220 && this.render(!1);
  }
  render(e) {
    const t = this.root,
      i = this.host.vehicle(this.vid);
    if (!i) return;
    this.renderedAt = performance.now();
    const n = !wi(),
      o = this.host.creative(),
      a = this.host.balance(),
      r = i.ownerName === Yo,
      l = i.ownerName === this.host.me(),
      c = Ov(i.maxHp),
      h = Am(i.type),
      d = Math.ceil(Math.max(0, i.maxHp - i.hp) / c),
      u = o ? 0 : d * h,
      f = e8(i.type),
      p = ep.has(i.type),
      m = (R) => (o ? I("free", "бесплатно") : `$${R.toLocaleString("ru-RU")}`),
      g = K5[i.type] !== void 0 ? LZ(i.type) : 0,
      y = HZ(i.type, i.armor);
    e &&
      ((t.innerHTML = `<div class="wm">
        <div class="wm-head">
          <div class="wm-ico">${eoe}</div>
          <div><div class="wm-kicker">${I("WELDING STATION", "СВАРОЧНЫЙ ПОСТ")}</div><h2 data-f="name"></h2><div class="wm-sub" data-f="owner"></div></div>
          <div class="wm-bal"><span>${I("BALANCE", "БАЛАНС")}</span><b data-f="bal"></b></div>
          <button class="wm-x" data-act="close" aria-label="${I("Close", "Закрыть")}">✕</button>
        </div>
        <div class="wm-top">
          <div class="wm-stage"><div class="wm-tag" data-f="tag"></div></div>
          <div class="wm-stats">
            <div class="wm-row"><span>${I("HULL INTEGRITY", "ЦЕЛОСТНОСТЬ КОРПУСА")}</span><b data-f="hp"></b></div>
            <div class="wm-bar"><i data-f="hpbar"></i></div>
            <div class="wm-row"><span>${I("PROTECTION", "ЗАЩИТА")}</span><b data-f="armorname"></b></div>
            <div class="wm-chips" data-f="chips"></div>
          </div>
        </div>
        <div class="wm-grid">
          <article class="wm-card repair"><h3>${Ks("tool")} ${I("Weld repair", "Ремонт сваркой")}<span class="k">1</span></h3>
            <p data-f="repairtext"></p><div class="wm-price" data-f="repairprice"></div>
            <button data-slot="1" data-act="repair"></button><div class="wm-progress"><i data-f="rprog"></i></div></article>
          ${[1, 2]
            .map(
              (
                R,
              ) => `<article class="wm-card armor" data-level="${R}"><h3>${Ks("shield")} <span data-f="an${R}"></span><span class="k">${R + 1}</span></h3>
            <div class="wm-mm">${Array.from({ length: 6 }, (_, C) => `<i style="height:${6 + C * 3}px" class="${C < (p ? 2 : R * 3) ? "f" : ""}"></i>`).join("")}</div>
            <p data-f="as${R}"></p><div class="wm-price" data-f="ap${R}"></div>
            <button data-slot="${R + 1}" data-act="armor" data-level="${R}"></button></article>`,
            )
            .join("")}
          <article class="wm-card pack"><h3>${Ks("world")} ${I("Pack vehicle", "Упаковать технику")}<span class="k">4</span></h3>
            <p data-f="packtext"></p><div class="wm-price" data-f="packprice"></div><button data-slot="4" data-act="pack"></button></article>
        </div>
        <div class="wm-foot">${jr() ? I("Hold Fire with the welder aimed at a vehicle to repair it.", "Наведите сварку на технику и удерживайте «Огонь» для ремонта.") : I("Hold LMB with the welder on any vehicle to repair it by hand. Esc closes.", "Удерживайте ЛКМ со сваркой на технике — ремонт вручную. Esc — закрыть.")}</div>
      </div>`),
      t
        .querySelectorAll("[data-act]")
        .forEach((R) => R.addEventListener("click", () => this.action(R))),
      t.querySelectorAll(".wm-card.armor").forEach((R) => {
        const _ = +R.dataset.level;
        (R.addEventListener("pointerenter", () => {
          this.hoverLevel = _;
        }),
          R.addEventListener("pointerleave", () => {
            this.hoverLevel = -1;
          }));
      }),
      this.startPreview(t.querySelector(".wm-stage")));
    const b = (R, _) => {
      const C = t.querySelector(`[data-f="${R}"]`);
      C && C.textContent !== _ && (C.textContent = _);
    };
    (b("name", to(i.type)),
      b(
        "owner",
        r
          ? I("Enemy raid vehicle", "Вражеская техника рейда")
          : i.ownerName
            ? `${I("Owner", "Владелец")} · ${i.ownerName}`
            : "",
      ),
      b("bal", o ? "∞" : `$${a.toLocaleString("ru-RU")}`),
      b("hp", `${i.hp} / ${i.maxHp} HP`),
      b("armorname", Po(fg(i.type, i.armor, n))),
      b(
        "tag",
        (this.hoverLevel > 0
          ? Po(fg(i.type, this.hoverLevel, n))
          : Po(fg(i.type, i.armor, n))
        ).toUpperCase(),
      ));
    const S = t.querySelector('[data-f="hpbar"]');
    S &&
      (S.style.width = `${Math.round((100 * i.hp) / Math.max(1, i.maxHp))}%`);
    const M = t.querySelector('[data-f="chips"]');
    if (M) {
      const R = Po(i8(i.type, i.armor, n))
        .split(" · ")
        .map((_) => `<span class="wm-chip${i.armor ? " hot" : ""}">${_}</span>`)
        .join("");
      M.innerHTML !== R && (M.innerHTML = R);
    }
    (b(
      "repairtext",
      i.hp >= i.maxHp
        ? I(
            "The hull is in perfect condition.",
            "Корпус в идеальном состоянии.",
          )
        : I(
            `${d} weld passes · +${c} HP and ${m(h)} each`,
            `${d} проходов сваркой · +${c} HP и ${m(h)} за проход`,
          ),
    ),
      b(
        "repairprice",
        i.hp >= i.maxHp ? "" : `${I("Total", "Итого")}: ${m(u)}`,
      ));
    const E = t.querySelector('[data-act="repair"]');
    ((E.textContent = this.repair
      ? I("Welding… (stop)", "Варим… (стоп)")
      : I("Weld everything", "Заварить всё")),
      (E.disabled = r || (!this.repair && (i.hp >= i.maxHp || (!o && a < h)))));
    const A = t.querySelector('[data-f="rprog"]');
    A &&
      (A.style.width = this.repair
        ? `${Math.round((100 * i.hp) / i.maxHp)}%`
        : "0");
    for (const R of [1, 2]) {
      const _ = t.querySelector(`.wm-card.armor[data-level="${R}"]`),
        C = _.querySelector("button"),
        P = R <= f;
      ((_.style.display = P || (!p && f) ? "" : "none"),
        p && R === 2 && (_.style.display = "none"),
        b(`an${R}`, Po(fg(i.type, R, n))),
        b(
          `as${R}`,
          P
            ? Po(i8(i.type, R, n))
            : I(
                "Not available for this vehicle",
                "Недоступно для этой техники",
              ),
        ));
      const O = i.armor >= R,
        B = DZ(i.type, i.armor, R);
      (_.classList.toggle("on", O),
        b(
          `ap${R}`,
          P
            ? O
              ? I("✓ Installed", "✓ Установлена")
              : `${i.armor ? I("Upgrade", "Апгрейд") : I("Price", "Цена")}: ${m(B)}`
            : "",
        ),
        (C.textContent = O
          ? I("Welded on", "Приварена")
          : I("Weld on", "Приварить")),
        (C.disabled = !P || O || r || (!o && a < B)));
    }
    if (!f) {
      const R = t.querySelector('.wm-card.armor[data-level="1"]');
      ((R.style.display = ""),
        b("an1", I("Armour", "Броня")),
        b(
          "as1",
          I(
            "This vehicle cannot carry welded armour. Kits fit tanks, APCs, HIMARS, Patriot and aircraft.",
            "На эту технику броню не навесить. Комплекты подходят для танка, БТР, HIMARS, Patriot и авиации.",
          ),
        ),
        b("ap1", ""));
    }
    const T = r
      ? I("Raid vehicles cannot be packed.", "Технику рейда упаковать нельзя.")
      : l
        ? i.hp < i.maxHp
          ? I("Repair it fully first.", "Сначала полностью отремонтируйте.")
          : i.crewed
            ? I("Get the crew out first.", "Сначала высадите экипаж.")
            : ""
        : I("Only the owner can pack it.", "Упаковать может только владелец.");
    (b(
      "packtext",
      T ||
        I(
          `Returns the vehicle to your inventory.${y ? ` Armour is cut off: +$${y}.` : ""}`,
          `Вернёт технику в инвентарь.${y ? ` Броня срезается: +$${y}.` : ""}`,
        ),
    ),
      b("packprice", g ? `${I("Fee", "Сбор")}: ${m(g)} (10%)` : ""));
    const x = t.querySelector('[data-act="pack"]');
    ((x.textContent = I("Pack", "Упаковать")),
      (x.disabled = !!T || !g || (!o && a < g)),
      this.preview && this.syncPreview(i));
  }
  action(e) {
    const t = this.host.vehicle(this.vid);
    if (!t) return;
    const i = e.dataset.act;
    if (i === "close") {
      this.close();
      return;
    }
    if (i === "repair")
      this.repair
        ? (this.repair = null)
        : (this.repair = {
            left: Math.ceil((t.maxHp - t.hp) / Ov(t.maxHp)) + 1,
            next: 0,
            startHp: t.hp,
          });
    else if (i === "armor") this.host.installArmor(t.id, +e.dataset.level);
    else if (i === "pack") {
      (this.host.pack(t.id), this.close());
      return;
    }
    this.render(!1);
  }
  startPreview(e) {
    if (!this.preview) {
      let i;
      try {
        i = new h5({ antialias: !0, alpha: !0 });
      } catch {
        return;
      }
      const n = new Cd();
      n.add(new z0(14674160, 2762274, 1.5));
      const o = new Dl(16773596, 2.2);
      (o.position.set(4, 7, 3), n.add(o));
      const a = new Dl(10275071, 1.1);
      (a.position.set(-5, 3, -4), n.add(a));
      const r = new Q(
        new Bl(6, 40),
        new Zt({ color: 790290, transparent: !0, opacity: 0.55 }),
      );
      ((r.rotation.x = -Math.PI / 2), n.add(r));
      const l = new qn(30, 1, 0.1, 100);
      this.preview = {
        renderer: i,
        scene: n,
        camera: l,
        model: null,
        key: "",
        raf: 0,
      };
    }
    e.prepend(this.preview.renderer.domElement);
    const t = () => {
      if (!this.root || !this.preview) return;
      const i = this.preview,
        n = i.renderer.domElement,
        o = n.clientWidth,
        a = n.clientHeight;
      (o > 0 &&
        a > 0 &&
        (n.width !== Math.round(o * Math.min(2, devicePixelRatio)) ||
          n.height !== Math.round(a * Math.min(2, devicePixelRatio))) &&
        (i.renderer.setPixelRatio(Math.min(2, devicePixelRatio)),
        i.renderer.setSize(o, a, !1),
        (i.camera.aspect = o / a),
        i.camera.updateProjectionMatrix()),
        i.model && (i.model.rotation.y += 0.006),
        i.renderer.render(i.scene, i.camera),
        (i.raf = requestAnimationFrame(t)));
    };
    this.preview.raf = requestAnimationFrame(t);
  }
  syncPreview(e) {
    const t = this.preview,
      i =
        this.hoverLevel > 0 && this.hoverLevel <= e8(e.type)
          ? this.hoverLevel
          : e.armor,
      n = `${e.type}:${e.camo}:${i}`;
    if (t.key === n) return;
    const o = t.model?.rotation.y ?? -0.7;
    t.model && (t.scene.remove(t.model), G8(t.model));
    const a = xm(e.type, e.camo, e.id, i),
      r = new re();
    r.add(a);
    const l = new zs().setFromObject(r),
      c = l.getSize(new k()),
      h = l.getCenter(new k());
    (a.position.sub(new k(h.x, l.min.y, h.z)),
      (r.rotation.y = o),
      t.scene.add(r),
      (t.model = r),
      (t.key = n));
    const d = Math.max(c.x, c.z, c.y * 1.4) * 0.5 + 0.4;
    (t.camera.position.set(0, d * 1.05 + c.y * 0.35, d * 2.55),
      t.camera.lookAt(0, c.y * 0.42, 0));
  }
}
