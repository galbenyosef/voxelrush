// index-BeUlFSPp 175 — createelement
// Lines 99515-99864 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function bne(s) {
  if (
    ((s.style.left = s.style.top = ""),
    !document.body.classList.contains("mobile"))
  )
    return;
  const e = [
      ...document.querySelectorAll(
        "#mobile-controls .mobile-action:not(.hidden), #mobile-controls .mobile-action:not(.hidden) > .m-cap, #mobile-stick-zone, #minimap",
      ),
    ]
      .map((h) => h.getBoundingClientRect())
      .filter((h) => h.width > 0 && h.height > 0),
    t = s.offsetParent?.getBoundingClientRect() ?? { left: 0, top: 0 },
    i = s.offsetWidth,
    n = s.offsetHeight,
    o = innerWidth,
    a = innerHeight,
    r = 8,
    l = (h, d) =>
      d >= r &&
      d + n <= a - r &&
      h - i / 2 >= r &&
      h + i / 2 <= o - r &&
      e.every(
        (u) =>
          h + i / 2 < u.left - 4 ||
          h - i / 2 > u.right + 4 ||
          d + n < u.top - 4 ||
          d > u.bottom + 4,
      ),
    c = t.top + s.offsetTop;
  for (const h of [c, a / 2 + 40, a / 2 - n - 40, a / 2 + 110, a / 2 - n - 110])
    for (const d of [o / 2, r + i / 2, o - r - i / 2])
      if (l(d, h)) {
        ((s.style.left = `${d - t.left}px`), (s.style.top = `${h - t.top}px`));
        return;
      }
}
class wne {
  constructor(e, t, i) {
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
    const n = document.getElementById("equipment-status"),
      o = () => {
        const a = n?.getBoundingClientRect();
        this.target.style.bottom =
          a && a.height > 0
            ? `${Math.max(150, innerHeight - a.top + 12)}px`
            : "";
      };
    ((this.layoutProperty = o),
      n &&
        ((this.equipmentObserver = new ResizeObserver(o)),
        this.equipmentObserver.observe(n)),
      window.addEventListener("resize", o),
      o());
  }
  index = new bie();
  trusted = new Set();
  shown = new Set();
  lines = new kl(
    new oi(),
    new Zo({ color: 6157526, transparent: !0, opacity: 0.72, depthWrite: !1 }),
  );
  badge = document.createElement("div");
  target = document.createElement("div");
  modal;
  menuClaim;
  closeMenu;
  syncMenuFriends;
  planet = 0;
  lastCell = "";
  current;
  lastBadge = "";
  equipmentObserver;
  layoutProperty;
  apply(e) {
    (this.index.set(e.claims),
      (this.trusted = new Set(e.trusted)),
      (this.lastCell = ""));
    for (const t of this.shown) this.index.get(t) || this.shown.delete(t);
    (this.rebuild(),
      this.menuClaim && !this.index.get(this.menuClaim) && this.closeMenu?.());
  }
  updateFriends(e) {
    this.syncMenuFriends?.(e);
  }
  ownerAllows(e) {
    return e === this.name() || this.trusted.has(e);
  }
  allowed(e, t, i) {
    const n = this.index.at(e, t, i);
    return !n || this.ownerAllows(n.owner);
  }
  canBreak(e, t, i, n) {
    const o = this.index.totem(e, t, i, n);
    return o ? o.owner === this.name() : this.allowed(e, t, n);
  }
  update(e, t, i) {
    t !== this.planet && ((this.planet = t), this.rebuild());
    const n = `${t}:${Math.floor(e.x)},${Math.floor(e.z)}`;
    n !== this.lastCell &&
      ((this.lastCell = n), (this.current = this.index.at(t, e.x, e.z)));
    const o = this.current;
    if (((this.badge.hidden = !i || !o), (this.lines.visible = i), o && i)) {
      const a = o.owner === this.name(),
        r = this.ownerAllows(o.owner);
      this.english();
      const l = `${I("PROTECTED TERRITORY", "ПРИВАТ ТЕРРИТОРИИ")} · ${o.owner}
${a ? I("Your territory", "Ваша территория") : r ? I("Friend access", "Доступ друга") : I("Visitor · interactions locked", "Гость · взаимодействия закрыты")}`;
      (l !== this.lastBadge &&
        ((this.badge.textContent = l), (this.lastBadge = l)),
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
      const n = this.index.get(i);
      if (!(!n || n.planet !== this.planet || n.owner !== this.name()))
        for (const [o, a, r, l] of Mie(this.index.effective(n))) {
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
    const t = new oi();
    (t.setAttribute("position", new Dt(e, 3)),
      t.computeBoundingSphere(),
      this.lines.geometry.dispose(),
      (this.lines.geometry = t));
  }
  open(e, t, i, n, o) {
    const a = this.index.get(e);
    if (!a || a.owner !== this.name()) return;
    (this.closeMenu?.(!1), (this.menuClaim = e));
    const r = ur === "owner" || ur === "admin";
    this.english();
    const l = document.createElement("div");
    ((l.className = "fc-modal claim-modal"),
      l.setAttribute("role", "dialog"),
      l.setAttribute("aria-modal", "true"),
      l.setAttribute("aria-labelledby", "claim-title"));
    const c = document.createElement("section");
    c.className = "claim-panel";
    const h = document.createElement("div");
    ((h.className = "claim-eyebrow"),
      (h.textContent = I("PROPERTY / TERRITORY", "ВЛАДЕНИЕ / ТЕРРИТОРИЯ")));
    const d = document.createElement("h2");
    ((d.id = "claim-title"),
      (d.textContent = I("Ownership totem", "Тотем владения")));
    const u = document.createElement("p");
    ((u.className = "claim-owner"),
      (u.textContent = `${I("Owner", "Владелец")}: ${a.owner} · ${I("Claims", "Приваты")} ${this.index.claims.filter((j) => j.owner === a.owner).length}/${r ? "∞" : oE}`));
    const f = this.index
        .effective(a)
        .reduce((j, ne) => j + (ne.x2 - ne.x1) * (ne.z2 - ne.z1), 0),
      p = aE(a) * 2 + 1,
      m = document.createElement("div");
    m.className = "claim-stats";
    for (const [j, ne] of [
      [`${p} × ${p}`, I("nominal size", "размер зоны")],
      [String(f), I("protected columns", "защищённых колонн")],
      ["0 — 127", I("all heights", "вся высота")],
    ]) {
      const ge = document.createElement("div"),
        be = document.createElement("strong"),
        oe = document.createElement("span");
      ((be.textContent = j),
        (oe.textContent = ne),
        ge.append(be, oe),
        m.append(ge));
    }
    const g = document.createElement("button");
    ((g.className = "claim-toggle"),
      g.setAttribute("aria-pressed", String(this.isShown(e))));
    const y = () => {
      g.textContent = this.isShown(e)
        ? I("◉ Boundary visible · hide", "◉ Границы показаны · скрыть")
        : I("◎ Show territory boundary", "◎ Показать границы привата");
    };
    (y(),
      (g.onclick = () => {
        (this.toggle(e),
          g.setAttribute("aria-pressed", String(this.isShown(e))),
          y());
      }));
    const b = document.createElement("p");
    ((b.className = "claim-note"),
      (b.textContent = I(
        "Only you see these lines. Earlier totems have priority in overlapping areas. Removing an earlier totem releases its area to remaining claims.",
        "Линии видите только вы. На пересечениях приоритет у более раннего тотема. После его снятия область переходит оставшимся приватам.",
      )));
    const S = document.createElement("form");
    S.className = "claim-radius";
    const M = document.createElement("label"),
      E = document.createElement("input"),
      A = document.createElement("button");
    ((M.textContent = I("Protection radius (blocks)", "Радиус защиты (блоки)")),
      (E.type = "number"),
      (E.min = "1"),
      (E.max = String(Cw)),
      (E.step = "1"),
      (E.value = String(aE(a))),
      (E.required = !0),
      (E.id = "claim-radius"),
      (M.htmlFor = E.id),
      (A.textContent = I("Apply radius", "Применить радиус")),
      (A.type = "submit"),
      S.append(M, E, A),
      (S.onsubmit = (j) => {
        (j.preventDefault(), S.reportValidity() && o?.(E.valueAsNumber));
      }),
      (S.hidden = !r));
    const T = document.createElement("p");
    ((T.className = "claim-note"),
      (T.textContent = I(
        `Default: ${nE}. Maximum: ${Cw}.`,
        `По умолчанию: ${nE}. Максимум: ${Cw}.`,
      )),
      S.append(T));
    const x = document.createElement("h3");
    x.textContent = I("Trusted friends", "Доверенные друзья");
    const R = document.createElement("p");
    ((R.className = "claim-note"),
      (R.textContent = I(
        "Accepted friends across the game can build and use your storage, doors, furnaces, signs and vehicles. Only you may remove this totem.",
        "Подтверждённые друзья во всей игре могут строить и использовать ваши сундуки, двери, печи, таблички и технику. Снять тотем можете только вы.",
      )));
    const _ = document.createElement("div");
    _.className = "claim-friends";
    const C = () => {
      if ((_.replaceChildren(), !t.length)) {
        _.textContent = I("No friends added yet", "Друзья пока не добавлены");
        return;
      }
      for (const j of t) {
        const ne = document.createElement("div"),
          ge = document.createElement("span"),
          be = document.createElement("button");
        ((ge.textContent = j),
          (be.textContent = I("Remove", "Удалить")),
          (be.onclick = () => {
            i(1, j);
          }),
          ne.append(ge, be),
          _.append(ne));
      }
    };
    (C(),
      (this.syncMenuFriends = (j) => {
        ((t = [...j]), C());
      }));
    const P = document.createElement("form");
    P.className = "claim-add-friend";
    const O = document.createElement("input");
    ((O.placeholder = I("Player nickname", "Ник игрока")),
      (O.maxLength = 64),
      O.setAttribute("aria-label", O.placeholder));
    const B = document.createElement("button");
    ((B.textContent = I("Send request", "Отправить заявку")),
      (P.onsubmit = (j) => {
        j.preventDefault();
        const ne = O.value.trim();
        ne && ne !== a.owner && !t.includes(ne) && (i(0, ne), (O.value = ""));
      }),
      P.append(O, B));
    const H = document.createElement("div");
    H.className = "claim-footer";
    const D = document.createElement("span");
    D.textContent = I(
      "Mine the totem to release this territory.",
      "Сломайте тотем, чтобы удалить приват.",
    );
    const U = document.createElement("button");
    ((U.textContent = I("Done", "Готово")), H.append(D, U));
    const W = (j = !0) => {
        (l.remove(),
          document.removeEventListener("keydown", J, !0),
          (this.modal = void 0),
          (this.menuClaim = void 0),
          (this.closeMenu = void 0),
          (this.syncMenuFriends = void 0),
          j && n());
      },
      J = (j) => {
        if (
          (j.stopPropagation(),
          j.code === "Escape" && (j.preventDefault(), W()),
          j.code === "Tab")
        ) {
          const ne = [...c.querySelectorAll("button,input")];
          j.shiftKey && document.activeElement === ne[0]
            ? (j.preventDefault(), ne.at(-1)?.focus())
            : !j.shiftKey &&
              document.activeElement === ne.at(-1) &&
              (j.preventDefault(), ne[0]?.focus());
        }
      };
    ((U.onclick = () => W()),
      (l.onclick = (j) => {
        j.target === l && W();
      }),
      (this.closeMenu = W),
      (this.modal = l),
      c.append(h, d, u, m, g, b, S, x, R, _, P, H),
      l.append(c),
      document.body.append(l),
      document.addEventListener("keydown", J, !0),
      U.focus());
  }
  dispose() {
    (this.equipmentObserver?.disconnect(),
      this.layoutProperty &&
        window.removeEventListener("resize", this.layoutProperty),
      this.closeMenu?.(),
      this.badge.remove(),
      this.target.remove(),
      this.scene.remove(this.lines),
      this.lines.geometry.dispose(),
      this.lines.material.dispose());
  }
}
