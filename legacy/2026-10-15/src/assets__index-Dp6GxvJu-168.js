// assets__index-Dp6GxvJu 168 — host
// Lines 97085-97490 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class pJ {
  constructor(e) {
    w(this, "root", null);
    w(this, "vid", -1);
    w(this, "repair", null);
    w(this, "preview", null);
    w(this, "hoverLevel", -1);
    w(this, "renderedAt", 0);
    w(this, "onKey", (e) => {
      if (!this.root) return;
      if (
        e.code === "Escape" ||
        e.code === z.binds.inventory ||
        e.code === z.binds.use
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
    });
    this.host = e;
  }
  get isOpen() {
    return !!this.root;
  }
  get vehicleId() {
    return this.vid;
  }
  open(e) {
    if ((this.close(!0), !this.host.vehicle(e))) return;
    if (((this.vid = e), !document.getElementById("welder-menu-css"))) {
      const s = document.createElement("style");
      ((s.id = "welder-menu-css"),
        (s.textContent = uJ),
        document.head.append(s));
    }
    const i = document.createElement("div");
    ((i.id = "welder-menu"),
      (i.className = "fc-modal"),
      i.setAttribute("role", "dialog"),
      i.setAttribute("aria-modal", "true"),
      i.addEventListener("pointerdown", (s) => {
        s.target === i && this.close();
      }),
      i.addEventListener("keydown", (s) => s.stopPropagation()),
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
          b6(this.preview.model),
          (this.preview.model = null)),
        (this.preview.key = "")),
      e || this.host.closed());
  }
  update() {
    if (!this.root) return;
    const e = this.host.vehicle(this.vid);
    if (!e) {
      this.close();
      return;
    }
    const t = performance.now();
    if (this.repair) {
      const i = Dp(e.type);
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
    const s = z.language === "en",
      o = this.host.creative(),
      a = this.host.balance(),
      r = i.ownerName === Mo,
      l = i.ownerName === this.host.me(),
      c = kg(i.maxHp),
      h = Dp(i.type),
      d = Math.ceil(Math.max(0, i.maxHp - i.hp) / c),
      u = o ? 0 : d * h,
      f = LA(i.type),
      p = xu.has(i.type),
      m = (C) =>
        o ? (s ? "free" : "бесплатно") : `$${C.toLocaleString("ru-RU")}`,
      y = Oy[i.type] !== void 0 ? U$(i.type) : 0,
      g = q$(i.type, i.armor);
    e &&
      ((t.innerHTML = `<div class="wm">
        <div class="wm-head">
          <div class="wm-ico">${fJ}</div>
          <div><div class="wm-kicker">${s ? "WELDING STATION" : "СВАРОЧНЫЙ ПОСТ"}</div><h2 data-f="name"></h2><div class="wm-sub" data-f="owner"></div></div>
          <div class="wm-bal"><span>${s ? "BALANCE" : "БАЛАНС"}</span><b data-f="bal"></b></div>
          <button class="wm-x" data-act="close" aria-label="${s ? "Close" : "Закрыть"}">✕</button>
        </div>
        <div class="wm-top">
          <div class="wm-stage"><div class="wm-tag" data-f="tag"></div></div>
          <div class="wm-stats">
            <div class="wm-row"><span>${s ? "HULL INTEGRITY" : "ЦЕЛОСТНОСТЬ КОРПУСА"}</span><b data-f="hp"></b></div>
            <div class="wm-bar"><i data-f="hpbar"></i></div>
            <div class="wm-row"><span>${s ? "PROTECTION" : "ЗАЩИТА"}</span><b data-f="armorname"></b></div>
            <div class="wm-chips" data-f="chips"></div>
          </div>
        </div>
        <div class="wm-grid">
          <article class="wm-card repair"><h3>${Nn("tool")} ${s ? "Weld repair" : "Ремонт сваркой"}<span class="k">1</span></h3>
            <p data-f="repairtext"></p><div class="wm-price" data-f="repairprice"></div>
            <button data-slot="1" data-act="repair"></button><div class="wm-progress"><i data-f="rprog"></i></div></article>
          ${[1, 2]
            .map(
              (
                C,
              ) => `<article class="wm-card armor" data-level="${C}"><h3>${Nn("shield")} <span data-f="an${C}"></span><span class="k">${C + 1}</span></h3>
            <div class="wm-mm">${Array.from({ length: 6 }, (R, L) => `<i style="height:${6 + L * 3}px" class="${L < (p ? 2 : C * 3) ? "f" : ""}"></i>`).join("")}</div>
            <p data-f="as${C}"></p><div class="wm-price" data-f="ap${C}"></div>
            <button data-slot="${C + 1}" data-act="armor" data-level="${C}"></button></article>`,
            )
            .join("")}
          <article class="wm-card pack"><h3>${Nn("world")} ${s ? "Pack vehicle" : "Упаковать технику"}<span class="k">4</span></h3>
            <p data-f="packtext"></p><div class="wm-price" data-f="packprice"></div><button data-slot="4" data-act="pack"></button></article>
        </div>
        <div class="wm-foot">${lr() ? (s ? "Hold Fire with the welder aimed at a vehicle to repair it." : "Наведите сварку на технику и удерживайте «Огонь» для ремонта.") : s ? "Hold LMB with the welder on any vehicle to repair it by hand. Esc closes." : "Удерживайте ЛКМ со сваркой на технике — ремонт вручную. Esc — закрыть."}</div>
      </div>`),
      t
        .querySelectorAll("[data-act]")
        .forEach((C) => C.addEventListener("click", () => this.action(C))),
      t.querySelectorAll(".wm-card.armor").forEach((C) => {
        const R = +C.dataset.level;
        (C.addEventListener("pointerenter", () => {
          this.hoverLevel = R;
        }),
          C.addEventListener("pointerleave", () => {
            this.hoverLevel = -1;
          }));
      }),
      this.startPreview(t.querySelector(".wm-stage")));
    const b = (C, R) => {
      const L = t.querySelector(`[data-f="${C}"]`);
      L && L.textContent !== R && (L.textContent = R);
    };
    (b("name", Zs(i.type)),
      b(
        "owner",
        r
          ? s
            ? "Enemy raid vehicle"
            : "Вражеская техника рейда"
          : i.ownerName
            ? `${s ? "Owner" : "Владелец"} · ${i.ownerName}`
            : "",
      ),
      b("bal", o ? "∞" : `$${a.toLocaleString("ru-RU")}`),
      b("hp", `${i.hp} / ${i.maxHp} HP`),
      b("armorname", xm(i.type, i.armor, s)),
      b(
        "tag",
        (this.hoverLevel > 0
          ? xm(i.type, this.hoverLevel, s)
          : xm(i.type, i.armor, s)
        ).toUpperCase(),
      ));
    const S = t.querySelector('[data-f="hpbar"]');
    S &&
      (S.style.width = `${Math.round((100 * i.hp) / Math.max(1, i.maxHp))}%`);
    const M = t.querySelector('[data-f="chips"]');
    if (M) {
      const C = PA(i.type, i.armor, s)
        .split(" · ")
        .map((R) => `<span class="wm-chip${i.armor ? " hot" : ""}">${R}</span>`)
        .join("");
      M.innerHTML !== C && (M.innerHTML = C);
    }
    (b(
      "repairtext",
      i.hp >= i.maxHp
        ? s
          ? "The hull is in perfect condition."
          : "Корпус в идеальном состоянии."
        : s
          ? `${d} weld passes · +${c} HP and ${m(h)} each`
          : `${d} проходов сваркой · +${c} HP и ${m(h)} за проход`,
    ),
      b(
        "repairprice",
        i.hp >= i.maxHp ? "" : `${s ? "Total" : "Итого"}: ${m(u)}`,
      ));
    const x = t.querySelector('[data-act="repair"]');
    ((x.textContent = this.repair
      ? s
        ? "Welding… (stop)"
        : "Варим… (стоп)"
      : s
        ? "Weld everything"
        : "Заварить всё"),
      (x.disabled = r || (!this.repair && (i.hp >= i.maxHp || (!o && a < h)))));
    const T = t.querySelector('[data-f="rprog"]');
    T &&
      (T.style.width = this.repair
        ? `${Math.round((100 * i.hp) / i.maxHp)}%`
        : "0");
    for (const C of [1, 2]) {
      const R = t.querySelector(`.wm-card.armor[data-level="${C}"]`),
        L = R.querySelector("button"),
        N = C <= f;
      ((R.style.display = N || (!p && f) ? "" : "none"),
        p && C === 2 && (R.style.display = "none"),
        b(`an${C}`, xm(i.type, C, s)),
        b(
          `as${C}`,
          N
            ? PA(i.type, C, s)
            : s
              ? "Not available for this vehicle"
              : "Недоступно для этой техники",
        ));
      const D = i.armor >= C,
        H = $$(i.type, i.armor, C);
      (R.classList.toggle("on", D),
        b(
          `ap${C}`,
          N
            ? D
              ? s
                ? "✓ Installed"
                : "✓ Установлена"
              : `${i.armor ? (s ? "Upgrade" : "Апгрейд") : s ? "Price" : "Цена"}: ${m(H)}`
            : "",
        ),
        (L.textContent = D
          ? s
            ? "Welded on"
            : "Приварена"
          : s
            ? "Weld on"
            : "Приварить"),
        (L.disabled = !N || D || r || (!o && a < H)));
    }
    if (!f) {
      const C = t.querySelector('.wm-card.armor[data-level="1"]');
      ((C.style.display = ""),
        b("an1", s ? "Armour" : "Броня"),
        b(
          "as1",
          s
            ? "This vehicle cannot carry welded armour. Kits fit tanks, APCs, HIMARS, Patriot and aircraft."
            : "На эту технику броню не навесить. Комплекты подходят для танка, БТР, HIMARS, Patriot и авиации.",
        ),
        b("ap1", ""));
    }
    const A = r
      ? s
        ? "Raid vehicles cannot be packed."
        : "Технику рейда упаковать нельзя."
      : l
        ? i.hp < i.maxHp
          ? s
            ? "Repair it fully first."
            : "Сначала полностью отремонтируйте."
          : i.crewed
            ? s
              ? "Get the crew out first."
              : "Сначала высадите экипаж."
            : ""
        : s
          ? "Only the owner can pack it."
          : "Упаковать может только владелец.";
    (b(
      "packtext",
      A ||
        (s
          ? `Returns the vehicle to your inventory.${g ? ` Armour is cut off: +$${g}.` : ""}`
          : `Вернёт технику в инвентарь.${g ? ` Броня срезается: +$${g}.` : ""}`),
    ),
      b("packprice", y ? `${s ? "Fee" : "Сбор"}: ${m(y)} (10%)` : ""));
    const _ = t.querySelector('[data-act="pack"]');
    ((_.textContent = s ? "Pack" : "Упаковать"),
      (_.disabled = !!A || !y || (!o && a < y)),
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
            left: Math.ceil((t.maxHp - t.hp) / kg(t.maxHp)) + 1,
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
        i = new oy({ antialias: !0, alpha: !0 });
      } catch {
        return;
      }
      const s = new nh();
      s.add(new A0(14674160, 2762274, 1.5));
      const o = new Wr(16773596, 2.2);
      (o.position.set(4, 7, 3), s.add(o));
      const a = new Wr(10275071, 1.1);
      (a.position.set(-5, 3, -4), s.add(a));
      const r = new le(
        new Kr(6, 40),
        new qt({ color: 790290, transparent: !0, opacity: 0.55 }),
      );
      ((r.rotation.x = -Math.PI / 2), s.add(r));
      const l = new Cs(30, 1, 0.1, 100);
      this.preview = {
        renderer: i,
        scene: s,
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
        s = i.renderer.domElement,
        o = s.clientWidth,
        a = s.clientHeight;
      (o > 0 &&
        a > 0 &&
        (s.width !== Math.round(o * Math.min(2, devicePixelRatio)) ||
          s.height !== Math.round(a * Math.min(2, devicePixelRatio))) &&
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
    var u;
    const t = this.preview,
      i =
        this.hoverLevel > 0 && this.hoverLevel <= LA(e.type)
          ? this.hoverLevel
          : e.armor,
      s = `${e.type}:${e.camo}:${i}`;
    if (t.key === s) return;
    const o = ((u = t.model) == null ? void 0 : u.rotation.y) ?? -0.7;
    t.model && (t.scene.remove(t.model), b6(t.model));
    const a = Hp(e.type, e.camo, e.id, i),
      r = new pe();
    r.add(a);
    const l = new gn().setFromObject(r),
      c = l.getSize(new k()),
      h = l.getCenter(new k());
    (a.position.sub(new k(h.x, l.min.y, h.z)),
      (r.rotation.y = o),
      t.scene.add(r),
      (t.model = r),
      (t.key = s));
    const d = Math.max(c.x, c.z, c.y * 1.4) * 0.5 + 0.4;
    (t.camera.position.set(0, d * 1.05 + c.y * 0.35, d * 2.55),
      t.camera.lookAt(0, c.y * 0.42, 0));
  }
}
