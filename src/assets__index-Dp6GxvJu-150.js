// assets__index-Dp6GxvJu 150 — createelement
// Lines 90983-91312 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class DZ {
  constructor(e, t, i) {
    w(this, "index", new PZ());
    w(this, "trusted", new Set());
    w(this, "shown", new Set());
    w(
      this,
      "lines",
      new Dl(
        new ci(),
        new Eo({
          color: 6157526,
          transparent: !0,
          opacity: 0.72,
          depthWrite: !1,
        }),
      ),
    );
    w(this, "badge", document.createElement("div"));
    w(this, "target", document.createElement("div"));
    w(this, "modal");
    w(this, "menuClaim");
    w(this, "closeMenu");
    w(this, "syncMenuFriends");
    w(this, "planet", 0);
    w(this, "lastCell", "");
    w(this, "current");
    w(this, "lastBadge", "");
    w(this, "equipmentObserver");
    w(this, "layoutProperty");
    ((this.scene = e),
      (this.name = t),
      (this.english = i),
      (this.badge.className = "claim-notice"),
      (this.target.className = "property-notice"));
    for (const a of [this.badge, this.target])
      ((a.hidden = !0),
        a.setAttribute("role", "status"),
        document.body.append(a));
    (e.add(this.lines), (this.lines.frustumCulled = !0));
    const s = document.getElementById("equipment-status"),
      o = () => {
        const a = s == null ? void 0 : s.getBoundingClientRect();
        this.target.style.bottom =
          a && a.height > 0
            ? `${Math.max(150, innerHeight - a.top + 12)}px`
            : "";
      };
    ((this.layoutProperty = o),
      s &&
        ((this.equipmentObserver = new ResizeObserver(o)),
        this.equipmentObserver.observe(s)),
      window.addEventListener("resize", o),
      o());
  }
  apply(e) {
    var t;
    (this.index.set(e.claims),
      (this.trusted = new Set(e.trusted)),
      (this.lastCell = ""));
    for (const i of this.shown) this.index.get(i) || this.shown.delete(i);
    (this.rebuild(),
      this.menuClaim &&
        !this.index.get(this.menuClaim) &&
        ((t = this.closeMenu) == null || t.call(this)));
  }
  updateFriends(e) {
    var t;
    (t = this.syncMenuFriends) == null || t.call(this, e);
  }
  ownerAllows(e) {
    return e === this.name() || this.trusted.has(e);
  }
  allowed(e, t, i) {
    const s = this.index.at(e, t, i);
    return !s || this.ownerAllows(s.owner);
  }
  canBreak(e, t, i, s) {
    const o = this.index.totem(e, t, i, s);
    return o ? o.owner === this.name() : this.allowed(e, t, s);
  }
  update(e, t, i) {
    t !== this.planet && ((this.planet = t), this.rebuild());
    const s = `${t}:${Math.floor(e.x)},${Math.floor(e.z)}`;
    s !== this.lastCell &&
      ((this.lastCell = s), (this.current = this.index.at(t, e.x, e.z)));
    const o = this.current;
    if (((this.badge.hidden = !i || !o), (this.lines.visible = i), o && i)) {
      const a = o.owner === this.name(),
        r = this.ownerAllows(o.owner),
        l = this.english(),
        c = `${l ? "PROTECTED TERRITORY" : "ПРИВАТ ТЕРРИТОРИИ"} · ${o.owner}
${a ? (l ? "Your territory" : "Ваша территория") : r ? (l ? "Friend access" : "Доступ друга") : l ? "Visitor · interactions locked" : "Гость · взаимодействия закрыты"}`;
      (c !== this.lastBadge &&
        ((this.badge.textContent = c), (this.lastBadge = c)),
        (this.badge.dataset.access = r ? "yes" : "no"));
    }
    i || (this.target.hidden = !0);
  }
  showProperty(e) {
    (this.target.textContent !== e && (this.target.textContent = e),
      (this.target.hidden = !e));
  }
  toggle(e) {
    (this.shown.has(e) ? this.shown.delete(e) : this.shown.add(e),
      this.rebuild());
  }
  isShown(e) {
    return this.shown.has(e);
  }
  rebuild() {
    const e = [];
    for (const i of this.shown) {
      const s = this.index.get(i);
      if (!(!s || s.planet !== this.planet || s.owner !== this.name()))
        for (const [o, a, r, l] of NZ(this.index.effective(s))) {
          for (let d = 0; d <= 128; d += 4) e.push(o, d, a, r, d, l);
          const c = Math.hypot(r - o, l - a),
            h = Math.ceil(c / 8);
          for (let d = 0; d <= h; d++) {
            const u = d / h,
              f = o + (r - o) * u,
              p = a + (l - a) * u;
            e.push(f, 0, p, f, 128, p);
          }
        }
    }
    const t = new ci();
    (t.setAttribute("position", new It(e, 3)),
      t.computeBoundingSphere(),
      this.lines.geometry.dispose(),
      (this.lines.geometry = t));
  }
  open(e, t, i, s, o) {
    var ee;
    const a = this.index.get(e);
    if (!a || a.owner !== this.name()) return;
    ((ee = this.closeMenu) == null || ee.call(this, !1), (this.menuClaim = e));
    const r = Ca === "owner" || Ca === "admin",
      l = this.english(),
      c = document.createElement("div");
    ((c.className = "fc-modal claim-modal"),
      c.setAttribute("role", "dialog"),
      c.setAttribute("aria-modal", "true"),
      c.setAttribute("aria-labelledby", "claim-title"));
    const h = document.createElement("section");
    h.className = "claim-panel";
    const d = document.createElement("div");
    ((d.className = "claim-eyebrow"),
      (d.textContent = l ? "PROPERTY / TERRITORY" : "ВЛАДЕНИЕ / ТЕРРИТОРИЯ"));
    const u = document.createElement("h2");
    ((u.id = "claim-title"),
      (u.textContent = l ? "Ownership totem" : "Тотем владения"));
    const f = document.createElement("p");
    ((f.className = "claim-owner"),
      (f.textContent = `${l ? "Owner" : "Владелец"}: ${a.owner} · ${l ? "Claims" : "Приваты"} ${this.index.claims.filter((se) => se.owner === a.owner).length}/${r ? "∞" : LZ}`));
    const p = this.index
        .effective(a)
        .reduce((se, oe) => se + (oe.x2 - oe.x1) * (oe.z2 - oe.z1), 0),
      m = LM(a) * 2 + 1,
      y = document.createElement("div");
    y.className = "claim-stats";
    for (const [se, oe] of [
      [`${m} × ${m}`, l ? "nominal size" : "размер зоны"],
      [String(p), l ? "protected columns" : "защищённых колонн"],
      ["0 — 127", l ? "all heights" : "вся высота"],
    ]) {
      const J = document.createElement("div"),
        re = document.createElement("strong"),
        Ce = document.createElement("span");
      ((re.textContent = se),
        (Ce.textContent = oe),
        J.append(re, Ce),
        y.append(J));
    }
    const g = document.createElement("button");
    ((g.className = "claim-toggle"),
      g.setAttribute("aria-pressed", String(this.isShown(e))));
    const b = () => {
      g.textContent = this.isShown(e)
        ? l
          ? "◉ Boundary visible · hide"
          : "◉ Границы показаны · скрыть"
        : l
          ? "◎ Show territory boundary"
          : "◎ Показать границы привата";
    };
    (b(),
      (g.onclick = () => {
        (this.toggle(e),
          g.setAttribute("aria-pressed", String(this.isShown(e))),
          b());
      }));
    const S = document.createElement("p");
    ((S.className = "claim-note"),
      (S.textContent = l
        ? "Only you see these lines. Earlier totems have priority in overlapping areas. Removing an earlier totem releases its area to remaining claims."
        : "Линии видите только вы. На пересечениях приоритет у более раннего тотема. После его снятия область переходит оставшимся приватам."));
    const M = document.createElement("form");
    M.className = "claim-radius";
    const x = document.createElement("label"),
      T = document.createElement("input"),
      A = document.createElement("button");
    ((x.textContent = l
      ? "Protection radius (blocks)"
      : "Радиус защиты (блоки)"),
      (T.type = "number"),
      (T.min = "1"),
      (T.max = String(wb)),
      (T.step = "1"),
      (T.value = String(LM(a))),
      (T.required = !0),
      (T.id = "claim-radius"),
      (x.htmlFor = T.id),
      (A.textContent = l ? "Apply radius" : "Применить радиус"),
      (A.type = "submit"),
      M.append(x, T, A),
      (M.onsubmit = (se) => {
        (se.preventDefault(),
          M.reportValidity() && (o == null || o(T.valueAsNumber)));
      }),
      (M.hidden = !r));
    const _ = document.createElement("p");
    ((_.className = "claim-note"),
      (_.textContent = l
        ? `Default: ${kM}. Maximum: ${wb}.`
        : `По умолчанию: ${kM}. Максимум: ${wb}.`),
      M.append(_));
    const C = document.createElement("h3");
    C.textContent = l ? "Trusted friends" : "Доверенные друзья";
    const R = document.createElement("p");
    ((R.className = "claim-note"),
      (R.textContent = l
        ? "Accepted friends across the game can build and use your storage, doors, furnaces, signs and vehicles. Only you may remove this totem."
        : "Подтверждённые друзья во всей игре могут строить и использовать ваши сундуки, двери, печи, таблички и технику. Снять тотем можете только вы."));
    const L = document.createElement("div");
    L.className = "claim-friends";
    const N = () => {
      if ((L.replaceChildren(), !t.length)) {
        L.textContent = l ? "No friends added yet" : "Друзья пока не добавлены";
        return;
      }
      for (const se of t) {
        const oe = document.createElement("div"),
          J = document.createElement("span"),
          re = document.createElement("button");
        ((J.textContent = se),
          (re.textContent = l ? "Remove" : "Удалить"),
          (re.onclick = () => {
            i(1, se);
          }),
          oe.append(J, re),
          L.append(oe));
      }
    };
    (N(),
      (this.syncMenuFriends = (se) => {
        ((t = [...se]), N());
      }));
    const D = document.createElement("form");
    D.className = "claim-add-friend";
    const H = document.createElement("input");
    ((H.placeholder = l ? "Player nickname" : "Ник игрока"),
      (H.maxLength = 64),
      H.setAttribute("aria-label", H.placeholder));
    const G = document.createElement("button");
    ((G.textContent = l ? "Send request" : "Отправить заявку"),
      (D.onsubmit = (se) => {
        se.preventDefault();
        const oe = H.value.trim();
        oe && oe !== a.owner && !t.includes(oe) && (i(0, oe), (H.value = ""));
      }),
      D.append(H, G));
    const I = document.createElement("div");
    I.className = "claim-footer";
    const O = document.createElement("span");
    O.textContent = l
      ? "Mine the totem to release this territory."
      : "Сломайте тотем, чтобы удалить приват.";
    const F = document.createElement("button");
    ((F.textContent = l ? "Done" : "Готово"), I.append(O, F));
    const X = (se = !0) => {
        (c.remove(),
          document.removeEventListener("keydown", Q, !0),
          (this.modal = void 0),
          (this.menuClaim = void 0),
          (this.closeMenu = void 0),
          (this.syncMenuFriends = void 0),
          se && s());
      },
      Q = (se) => {
        var oe, J;
        if (
          (se.stopPropagation(),
          se.code === "Escape" && (se.preventDefault(), X()),
          se.code === "Tab")
        ) {
          const re = [...h.querySelectorAll("button,input")];
          se.shiftKey && document.activeElement === re[0]
            ? (se.preventDefault(), (oe = re.at(-1)) == null || oe.focus())
            : !se.shiftKey &&
              document.activeElement === re.at(-1) &&
              (se.preventDefault(), (J = re[0]) == null || J.focus());
        }
      };
    ((F.onclick = () => X()),
      (c.onclick = (se) => {
        se.target === c && X();
      }),
      (this.closeMenu = X),
      (this.modal = c),
      h.append(d, u, f, y, g, S, M, C, R, L, D, I),
      c.append(h),
      document.body.append(c),
      document.addEventListener("keydown", Q, !0),
      F.focus());
  }
  dispose() {
    var e, t;
    ((e = this.equipmentObserver) == null || e.disconnect(),
      this.layoutProperty &&
        window.removeEventListener("resize", this.layoutProperty),
      (t = this.closeMenu) == null || t.call(this),
      this.badge.remove(),
      this.target.remove(),
      this.scene.remove(this.lines),
      this.lines.geometry.dispose(),
      this.lines.material.dispose());
  }
}
