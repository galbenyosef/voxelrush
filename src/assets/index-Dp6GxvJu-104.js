// index-Dp6GxvJu 104 — append
// Lines 64234-66234 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function jL() {
  const n = $e("dialog", "armory");
  ((n.id = "skins-menu"),
    n.setAttribute("aria-label", "Armory"),
    document.body.append(n));
  let e = 278,
    t = 0;
  const i = (B) =>
    fo(B) ? (fo(e) === B ? e : B) : ho(B) && ho(t) === B ? t : B;
  let s = "store",
    o = 257,
    a = "",
    r = "ranger",
    l = !1,
    c = "",
    h = "",
    d = "rarity",
    u = !1,
    f = 0.02,
    p = null,
    m = 257,
    y,
    g = 0,
    b = 0,
    S = null,
    M = "",
    x = "",
    T = [],
    A = [];
  const _ = $e("canvas", "ar-hero-canvas");
  ((_.id = "skin-preview"), (_.tabIndex = 0));
  const C = $e("p", "ar-status");
  (C.setAttribute("role", "status"), C.setAttribute("aria-live", "polite"));
  const R = (B, $ = "info") => {
    ((C.textContent = B),
      (C.dataset.kind = $),
      B &&
        (clearTimeout(R.timer),
        (R.timer = setTimeout(() => {
          C.textContent === B && (C.textContent = "");
        }, 4500))));
  };
  function L(B) {
    ((Ot = B),
      localStorage.setItem(
        "vr-local-cosmetics",
        JSON.stringify({ ...B, gold: 0, owned: [] }),
      ),
      window.dispatchEvent(new Event("cosmetics-changed")));
  }
  async function N(
    B,
    $,
    he,
    fe = _e("Saved to your account", "Сохранено в аккаунте"),
  ) {
    if (!l) {
      ((l = !0),
        R(_e("Working…", "Секунду…")),
        n
          .querySelectorAll(".ar-primary, .ar-card, .ar-case-open")
          .forEach((be) => (be.disabled = !0)));
      try {
        const be = Me == null ? void 0 : Me.id,
          Se = await tn(B, $, he);
        return (Me == null ? void 0 : Me.id) !== be
          ? void 0
          : ((Ot = {
              gold: Se.gold,
              owned: Se.owned,
              character: Se.character,
              custom: Se.custom,
              weapons: Se.weapons,
              cases: Se.cases ?? Ot.cases,
            }),
            window.dispatchEvent(new Event("cosmetics-changed")),
            B.endsWith("/custom") && (x = he.pixels),
            R(fe, "success"),
            Se);
      } catch (be) {
        R(be instanceof Error ? be.message : String(be), "error");
      } finally {
        ((l = !1), O());
      }
    }
  }
  async function D(B, $) {
    if (!Me) {
      const he = { ...Ot, weapons: { ...Ot.weapons, [B]: $ } };
      (L(he),
        R(
          _e("Equipped on this device", "Выбрано на этом устройстве"),
          "success",
        ),
        J());
      return;
    }
    (await N(
      "/me/cosmetics/equip",
      "PUT",
      { kind: "weapon", skin: $, weapon: B },
      ho(B)
        ? _e(
            `Equipped — every tier of your ${Ps(B).toLowerCase()} now wears this finish`,
            `Готово — все уровни: ${Ps(B).toLowerCase()} теперь с этим скином`,
          )
        : _e(
            `Equipped — your next ${Ps(B)} from the shop gets this finish`,
            `Готово — следующий ${Ps(B)} из магазина будет с этим скином`,
          ),
    ),
      J());
  }
  async function H(B) {
    if (!Me) {
      (L({ ...Ot, character: B }),
        R(_e("Equipped", "Персонаж выбран"), "success"),
        J());
      return;
    }
    (await N(
      "/me/cosmetics/equip",
      "PUT",
      { kind: "character", skin: B },
      _e(
        "Operator equipped — applied in game right away",
        "Персонаж выбран — сразу применится в игре",
      ),
    ),
      J());
  }
  function G() {
    if (!l) {
      if (s === "editor" && M !== x) {
        I(
          _e("Keep your drawing?", "Сохранить рисунок?"),
          _e(
            "Your draft stays on this device.",
            "Черновик останется на этом устройстве.",
          ),
          [
            [_e("Continue editing", "Продолжить"), () => {}],
            [_e("Close", "Закрыть"), () => n.close()],
          ],
        );
        return;
      }
      n.close();
    }
  }
  (n.addEventListener("cancel", (B) => {
    (B.preventDefault(), !n.querySelector(".ar-sheet, .ar-roll") && G());
  }),
    n.addEventListener("close", () => {
      (cancelAnimationFrame(g),
        y == null || y.dispose(),
        (y = void 0),
        S == null || S.focus(),
        window.dispatchEvent(new Event("armory-closed")));
    }),
    n.addEventListener("keydown", (B) => B.stopPropagation()));
  function I(B, $, he, fe) {
    var Ze, ct;
    (Ze = n.querySelector(".ar-sheet")) == null || Ze.remove();
    const be = $e("div", "ar-sheet"),
      Se = $e("div", "ar-sheet-card");
    (Se.append($e("h3", "", B)),
      $ && Se.append($e("p", "", $)),
      fe && Se.append(fe));
    const et = $e("div", "ar-sheet-actions");
    for (const [ae, qe, Ae] of he)
      et.append(
        $i(Ae ?? "ar-ghost", ae, () => {
          (be.remove(), qe());
        }),
      );
    (Se.append(et),
      be.append(Se),
      (be.onclick = (ae) => {
        ae.target === be && be.remove();
      }),
      n.append(be),
      (ct = et.querySelector("button")) == null || ct.focus());
  }
  function O() {
    const B = n.querySelector(".ar-wallet");
    if (!B) return;
    B.innerHTML = `${bs(26, "spin")}<span><b>${Ot.gold.toLocaleString()}</b><small>${_e("Gold", "Золото")}</small></span>`;
    const $ = $i("ar-wallet-add", "+", () =>
      I(
        _e("Gold coins", "Золотые монеты"),
        _e(
          "Gold is the premium currency for skins and cases. It is never earned or lost in matches. Support the project: post about the game on X and get gold for the post and for every like, reply and repost on it.",
          "Золото — премиальная валюта для скинов и кейсов. В матчах оно не выдаётся и не теряется. Поддержи проект: опубликуй пост об игре в X и получай золото за сам пост и за каждый лайк, комментарий и репост.",
        ),
        [
          [
            _e("Earn gold on X", "Получить золото за пост"),
            () => void Hy(),
            "ar-primary",
          ],
          [_e("Later", "Позже"), () => {}],
        ],
      ),
    );
    ($.setAttribute("aria-label", _e("Get gold", "Получить золото")),
      B.append($));
  }
  const F = new Set([
    "ar-grid",
    "ar-owned-list",
    "ar-inspect",
    "ar-market",
    "ar-loadout-side",
  ]);
  function X() {
    const B = [],
      $ = new Map();
    for (const he of n.querySelectorAll("*")) {
      if (!he.scrollTop && !he.scrollLeft) continue;
      const fe = he.classList[0] ?? he.tagName,
        be = $.get(fe) ?? 0;
      ($.set(fe, be + 1), B.push([`${fe}#${be}`, he.scrollTop, he.scrollLeft]));
    }
    return B;
  }
  function Q(B, $) {
    if (!B.length) return;
    const he = new Map(),
      fe = new Map();
    for (const be of n.querySelectorAll("*")) {
      const Se = be.classList[0] ?? be.tagName;
      if (!B.some(([Ze]) => Ze.startsWith(Se + "#"))) continue;
      const et = fe.get(Se) ?? 0;
      (fe.set(Se, et + 1), he.set(`${Se}#${et}`, be));
    }
    for (const [be, Se, et] of B) {
      if ($ === "nav" && F.has(be.slice(0, be.lastIndexOf("#")))) continue;
      const Ze = he.get(be);
      Ze && ((Ze.scrollTop = Se), (Ze.scrollLeft = et));
    }
  }
  function ee() {
    const B = document.activeElement;
    if (!B || B === n || !n.contains(B) || !B.classList[0]) return null;
    const $ = B.classList[0],
      he = [...n.querySelectorAll("." + $)];
    return {
      role: $,
      n: he.indexOf(B),
      skin: B.dataset.skin,
      weapon: B.dataset.weapon,
    };
  }
  function se(B) {
    const $ = [...n.querySelectorAll("." + B.role)],
      he =
        $.find(
          (fe) =>
            (B.skin !== void 0 && fe.dataset.skin === B.skin) ||
            (B.weapon !== void 0 && fe.dataset.weapon === B.weapon),
        ) ?? $[B.n];
    he == null || he.focus({ preventScroll: !0 });
  }
  function oe() {
    const B = n.querySelector(".ar-rail-item.active"),
      $ = B == null ? void 0 : B.parentElement;
    if (!B || !$) return;
    const he = B.getBoundingClientRect(),
      fe = $.getBoundingClientRect();
    ($.scrollWidth > $.clientWidth + 1 &&
      ($.scrollLeft +=
        he.left < fe.left
          ? he.left - fe.left - 12
          : he.right > fe.right
            ? he.right - fe.right + 12
            : 0),
      $.scrollHeight > $.clientHeight + 1 &&
        ($.scrollTop +=
          he.top < fe.top
            ? he.top - fe.top - 12
            : he.bottom > fe.bottom
              ? he.bottom - fe.bottom + 12
              : 0));
  }
  function J(B = "all") {
    (hd(o) || (o = 257), hd(m) || (m = 257));
    const $ = B === "none" ? [] : X(),
      he = B === "none" ? null : ee();
    (Re.disconnect(), n.replaceChildren());
    const fe = $e("header", "ar-top"),
      be = ls(
        "ar-brand",
        `<span class="ar-logo"><i></i></span><span><small>VOXEL RUSH</small><b>${_e("ARMORY", "АРСЕНАЛ")}</b></span>`,
        "div",
      ),
      Se = $e("nav", "ar-tabs");
    Se.setAttribute("role", "tablist");
    const et = [
      [
        "store",
        _e("Store", "Магазин"),
        "M3 7h18l-2 12H5zM8 7V5a4 4 0 0 1 8 0v2",
      ],
      ["cases", _e("Cases", "Кейсы"), "M3 8h18v12H3zM3 8l2-4h14l2 4M10 12h4"],
      [
        "inventory",
        _e("Inventory", "Инвентарь"),
        "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
      ],
      [
        "loadout",
        _e("Loadout", "Снаряжение"),
        "M4 14h10l3-3h3v3l-3 3H9l-2 3H4z",
      ],
      [
        "character",
        _e("Operators", "Персонажи"),
        "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0",
      ],
      [
        "editor",
        _e("Workshop", "Мастерская"),
        "M14 4l6 6-10 10H4v-6zM12 6l6 6",
      ],
    ];
    for (const [Ae, K, te] of et) {
      const me = $i("ar-tab" + (s === Ae ? " active" : ""), "", () => {
        ((s = Ae),
          (p = null),
          (a = $a(Ae === "loadout" ? m : o)),
          (r = Ot.character),
          (f = 0.02),
          Ae === "editor" && ht(),
          J("none"));
      });
      if (
        (me.setAttribute("role", "tab"),
        me.setAttribute("aria-selected", String(s === Ae)),
        (me.dataset.tab = Ae),
        (me.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${te}"/></svg><span>${K}</span>`),
        Ae === "cases" &&
          me.append($e("i", "ar-tab-badge", _e("NEW", "НОВОЕ"))),
        Ae === "inventory" && nM())
      ) {
        const xe = $e("i", "ar-tab-badge ar-tab-count", String(nM()));
        ((xe.title = _e("Unopened cases", "Неоткрытые кейсы")), me.append(xe));
      }
      Se.append(me);
    }
    const Ze = $e("div", "ar-wallet");
    Ze.title = _e("Premium currency", "Премиальная валюта");
    const ct = $i("ar-close", "", G);
    ((ct.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>'),
      ct.setAttribute("aria-label", _e("Close", "Закрыть")),
      fe.append(be, Se, Ze, ct));
    const ae = $e("div", "ar-body tab-" + s);
    (n.append(fe, ae, C),
      O(),
      s === "store"
        ? gt(ae)
        : s === "cases"
          ? Ve(ae)
          : s === "inventory"
            ? W(ae)
            : s === "loadout"
              ? Ue(ae)
              : s === "character"
                ? je(ae)
                : lt(ae),
      Q($, B === "none" ? "all" : B),
      he && se(he),
      B === "none" && oe());
    const qe = n.querySelector("#skin-preview");
    qe && (Re.observe(qe), requestAnimationFrame(re));
  }
  function re() {
    const B = n.querySelector("#skin-preview");
    if (B)
      try {
        y ?? (y = new Ny(B));
        const $ = B.getBoundingClientRect();
        (y.resize(Math.max(200, $.width), Math.max(180, $.height)),
          s === "editor"
            ? y.showCharacter("custom", M)
            : s === "character"
              ? y.showCharacter(r, Ot.custom)
              : s === "loadout"
                ? y.showWeapon(i(m), a, f)
                : y.showWeapon(i(o), a, f));
      } catch {
        R(
          _e(
            "3D preview unavailable on this device",
            "3D-просмотр недоступен на этом устройстве",
          ),
          "error",
        );
      }
  }
  function Ce(B) {
    n.open &&
      (document.hidden || y == null || y.tick(Math.min(0.05, (B - b) / 1e3)),
      (b = B),
      (g = requestAnimationFrame(Ce)));
  }
  const Re = new ResizeObserver(() => {
    const B = n.querySelector("#skin-preview");
    if (B && y) {
      const $ = B.getBoundingClientRect();
      y.resize(Math.max(1, $.width), Math.max(1, $.height));
    }
  });
  function We(B, $, he) {
    const fe = $e("aside", "ar-rail");
    fe.setAttribute("aria-label", _e("Weapons", "Оружие"));
    for (const be of jx) {
      fe.append($e("h4", "", _e(be.en, be.ru)));
      for (const Se of be.items.filter(hd)) {
        const et = $i("ar-rail-item" + (Se === B ? " active" : ""), "", () =>
          $(Se),
        );
        ((et.dataset.weapon = String(Se)),
          et.setAttribute("aria-pressed", String(Se === B)));
        const Ze = $a(Se),
          ct = uo(Ze);
        (et.append(
          cl("weapon", Ze, Se),
          ls(
            "ar-rail-label",
            `<b>${Ps(Se)}</b><small style="color:${ct ? ts(ct.rarity).color : ""}">${(he == null ? void 0 : he(Se)) ?? ll(ct)}</small>`,
          ),
        ),
          fe.append(et));
      }
    }
    return fe;
  }
  function it() {
    let B = [null, ...Gd];
    const $ = h.trim().toLowerCase();
    B = B.filter(
      (fe) =>
        (!c || (fe == null ? void 0 : fe.rarity) === c) &&
        (!u || af(o, (fe == null ? void 0 : fe.id) ?? "")) &&
        (!$ ||
          `${(fe == null ? void 0 : fe.name) ?? "factory"} ${(fe == null ? void 0 : fe.ru) ?? "заводской"} ${fe ? _s[fe.collection].name : ""}`
            .toLowerCase()
            .includes($)),
    );
    const he = (fe) => (fe ? ts(fe.rarity).tier : -1);
    return (
      B.sort((fe, be) =>
        d === "price-asc"
          ? ((fe == null ? void 0 : fe.price) ?? 0) -
            ((be == null ? void 0 : be.price) ?? 0)
          : d === "price-desc"
            ? ((be == null ? void 0 : be.price) ?? 0) -
              ((fe == null ? void 0 : fe.price) ?? 0)
            : d === "name"
              ? ll(fe ?? void 0).localeCompare(ll(be ?? void 0))
              : he(be) - he(fe) ||
                ((be == null ? void 0 : be.price) ?? 0) -
                  ((fe == null ? void 0 : fe.price) ?? 0),
      ),
      B
    );
  }
  function ut(B, $, he, fe) {
    const be = ts(B ? B.rarity : "common"),
      Se = $i("ar-card" + (he ? " selected" : ""), "", fe);
    ((Se.dataset.skin = (B == null ? void 0 : B.id) ?? ""),
      Se.style.setProperty("--r", be.color),
      Se.setAttribute("aria-pressed", String(he)));
    const et = af($, (B == null ? void 0 : B.id) ?? ""),
      Ze = $a($) === ((B == null ? void 0 : B.id) ?? ""),
      ct = $e("span", "ar-card-flags");
    (B &&
      B.fx !== "none" &&
      ct.append($e("i", "fx", _e("ANIMATED", "АНИМАЦИЯ"))),
      B != null && B.tracking && !ho($) && ct.append($e("i", "kt", Ty($))),
      Se.append(
        $e("span", "ar-card-bg"),
        cl("weapon", (B == null ? void 0 : B.id) ?? "", $),
        ct,
      ));
    const ae = $e("span", "ar-card-info");
    return (
      ae.append(
        $e("small", "", B ? rl(B.rarity) : _e("Default", "По умолчанию")),
        $e("b", "", ll(B ?? void 0)),
      ),
      ae.append(
        Ze
          ? $e("em", "ar-equipped", _e("✓ Equipped", "✓ Выбрано"))
          : et
            ? $e(
                "em",
                "ar-owned",
                B != null && B.price
                  ? _e("Owned", "Куплено")
                  : _e("Free", "Бесплатно"),
              )
            : Dm(B.price),
      ),
      Se.append(ae),
      Se
    );
  }
  function gt(B) {
    B.append(
      We(
        o,
        (Ae) => {
          ((o = Ae), (a = $a(Ae)), J("nav"));
        },
        (Ae) => {
          const K = Gd.filter((te) => af(Ae, te.id)).length;
          return _e(`${K} owned`, `${K} в коллекции`);
        },
      ),
    );
    const $ = $e("section", "ar-market"),
      he = $e("div", "ar-market-head");
    he.append(
      ls(
        "ar-title",
        `<small>${ho(o) ? _e("ARMOUR FINISHES", "СКИНЫ БРОНИ") : _e("WEAPON & TOOL FINISHES", "СКИНЫ ОРУЖИЯ И ИНСТРУМЕНТОВ")}</small><b>${Ps(o)}</b>`,
        "div",
      ),
    );
    const fe = $e("div", "ar-tools"),
      be = $e("input", "ar-search");
    ((be.type = "search"),
      (be.placeholder = _e("Search finishes…", "Поиск скинов…")),
      (be.value = h),
      be.setAttribute("aria-label", be.placeholder),
      (be.oninput = () => {
        ((h = be.value), qe());
      }));
    const Se = $e("select", "ar-sort");
    Se.setAttribute("aria-label", _e("Sort", "Сортировка"));
    for (const [Ae, K] of [
      ["rarity", _e("Rarity", "По редкости")],
      ["price-desc", _e("Price: high to low", "Сначала дорогие")],
      ["price-asc", _e("Price: low to high", "Сначала дешёвые")],
      ["name", _e("Name", "По названию")],
    ]) {
      const te = $e("option", "", K);
      ((te.value = Ae), Se.append(te));
    }
    ((Se.value = d),
      (Se.onchange = () => {
        ((d = Se.value), qe());
      }));
    const et = $i(
      "ar-toggle" + (u ? " active" : ""),
      _e("Owned", "Мои"),
      () => {
        ((u = !u),
          et.classList.toggle("active", u),
          et.setAttribute("aria-pressed", String(u)),
          qe());
      },
    );
    (et.setAttribute("aria-pressed", String(u)),
      fe.append(be, Se, et),
      he.append(fe));
    const Ze = $e("div", "ar-chips");
    Ze.setAttribute("aria-label", _e("Rarity", "Редкость"));
    const ct = (Ae, K) => {
      const te = $i("ar-chip" + (c === Ae ? " active" : ""), K, () => {
        ((c = Ae),
          Ze.querySelectorAll(".ar-chip").forEach((me) =>
            me.classList.toggle("active", me === te),
          ),
          qe());
      });
      (Ae && te.style.setProperty("--r", ts(Ae).color), Ze.append(te));
    };
    ct("", _e("All", "Все"));
    for (const Ae of Object.keys(Ho)) Ae !== "common" && ct(Ae, rl(Ae));
    const ae = $e("div", "ar-grid");
    ($.append(he, Ze, ae), B.append($, Y(o)));
    function qe() {
      ae.replaceChildren();
      const Ae = it();
      for (const K of Ae)
        ae.append(
          ut(K, o, ((K == null ? void 0 : K.id) ?? "") === a, () => {
            ((a = (K == null ? void 0 : K.id) ?? ""),
              (f = 0.02),
              ve(),
              ae.querySelectorAll(".ar-card").forEach((te) => {
                const me = te.dataset.skin === a;
                (te.classList.toggle("selected", me),
                  te.setAttribute("aria-pressed", String(me)));
              }));
          }),
        );
      Ae.length ||
        ae.append(
          $e(
            "p",
            "ar-empty",
            _e(
              "No finishes match these filters.",
              "По этим фильтрам ничего нет.",
            ),
          ),
        );
    }
    qe();
  }
  function ve() {
    const B = n.querySelector(".ar-inspect");
    B && (B.replaceWith(Y(s === "loadout" ? m : o)), re());
  }
  function Y(B) {
    const $ = uo(a),
      he = ts($ ? $.rarity : "common"),
      fe = $e("aside", "ar-inspect");
    fe.style.setProperty("--r", he.color);
    const be = $e("div", "ar-stage");
    (be.append(
      _,
      $e("span", "ar-stage-hint", _e("Drag to rotate", "Тяни, чтобы вращать")),
    ),
      fe.append(be));
    const Se = $e("div", "ar-inspect-title");
    if (
      (Se.append(
        $e(
          "small",
          "ar-rarity",
          $ ? rl($.rarity) : _e("Default", "По умолчанию"),
        ),
        $e("h2", "", `${Ps(B)} | ${ll($)}`),
      ),
      $ &&
        Se.append(
          $e(
            "span",
            "ar-collection",
            _e(_s[$.collection].name, _s[$.collection].ru),
          ),
        ),
      fe.append(Se),
      fo(B))
    ) {
      fe.append(
        $e(
          "p",
          "ar-note",
          _e(
            "One finish for every tier. Factory cutting heads and tier marks stay visible. BlockTrack counts blocks broken in survival by the original owner.",
            "Один скин для всех уровней. Заводские режущие части и отметки уровня сохраняются. BlockTrack считает блоки, сломанные первоначальным владельцем в выживании.",
          ),
        ),
      );
      const ae = $e("select", "ar-sort");
      (ae.setAttribute(
        "aria-label",
        _e("Preview tool tier", "Уровень инструмента в превью"),
      ),
        (ae.dataset.toolTier = ""));
      for (const qe of B === 278 ? FS : GS) {
        const Ae = $e("option", "", Ki(qe));
        ((Ae.value = String(qe)), ae.append(Ae));
      }
      ((ae.value = String(i(B))),
        (ae.onchange = () => {
          ((e = Number(ae.value)), re());
        }),
        fe.append(ae));
    }
    if (ho(B)) {
      fe.append(
        $e(
          "p",
          "ar-note",
          _e(
            "One finish for every armour tier (I–IV). Steel plates, tier-coloured trims and the tier pips stay factory, so everyone still sees which tier you wear.",
            "Один скин для всех уровней брони (I–IV). Стальные пластины, цветная отделка и метки уровня остаются заводскими — всем видно, какой у тебя уровень брони.",
          ),
        ),
      );
      const ae = $e("select", "ar-sort");
      (ae.setAttribute(
        "aria-label",
        _e("Preview armour tier", "Уровень брони в превью"),
      ),
        (ae.dataset.armorTier = ""));
      const qe = Object.values($C).find((Ae) => Ae[0] === B) ?? [B];
      for (const Ae of qe) {
        const K = $e("option", "", Ki(Ae));
        ((K.value = String(Ae)), ae.append(K));
      }
      ((ae.value = String(i(B))),
        (ae.onchange = () => {
          ((t = Number(ae.value)), re());
        }),
        fe.append(ae));
    }
    if ($) {
      fe.append($e("p", "ar-desc", _e($.desc[0], $.desc[1])));
      const ae = $e("div", "ar-tags");
      ($.fx !== "none" && ae.append($e("span", "fx", _e(...yY[$.fx]))),
        $.tracking &&
          !ho(B) &&
          ae.append(
            $e(
              "span",
              "kt",
              fo(B)
                ? _e(
                    "BlockTrack™ · blocks broken",
                    "BlockTrack™ · сломанные блоки",
                  )
                : _e("KillTrack™ counter", "Счётчик KillTrack™"),
            ),
          ),
        $.metal > 0.8 &&
          ae.append(
            $e("span", "", _e("Polished metal", "Полированный металл")),
          ),
        fe.append(ae));
      const qe = $e("div", "ar-wear");
      qe.append($e("small", "", _e("Condition preview", "Износ (превью)")));
      const Ae = $e("div", "ar-wear-row");
      for (const [K, [te, me, xe]] of Xx.entries()) {
        const nt = K === 0 ? 0.02 : (Xx[K - 1][0] + Math.min(te, 0.9)) / 2,
          ne = $i(
            "ar-wear-btn" + (Math.abs(f - nt) < 0.001 ? " active" : ""),
            ["FN", "MW", "FT", "WW", "BS"][K],
            () => {
              ((f = nt),
                y == null || y.setWear(nt),
                Ae.querySelectorAll("button").forEach((Ee) =>
                  Ee.classList.toggle("active", Ee === ne),
                ));
            },
          );
        ((ne.title = _e(me, xe)), Ae.append(ne));
      }
      (qe.append(
        Ae,
        $e(
          "small",
          "ar-wear-note",
          _e(
            "Each weapon gets a random condition and pattern seed.",
            "Каждое оружие получает случайный износ и узор.",
          ),
        ),
      ),
        ho(B) || fe.append(qe));
    }
    const et = af(B, a),
      Ze = $a(B) === a,
      ct = $e("div", "ar-actions");
    if (!et && $) {
      ct.append(Dm($.price));
      const ae = $i("ar-primary", _e("Buy", "Купить"), () => Le($, B));
      ct.append(ae);
    } else {
      const ae = $i(
        "ar-primary",
        Ze ? _e("✓ Equipped", "✓ Выбрано") : _e("Equip", "Выбрать"),
        () => void D(B, a),
      );
      ((ae.disabled = Ze),
        ct.append(ae),
        Me && $ && $.price > 0 && ct.append(ge("weapon", $, B)));
    }
    return (
      fe.append(
        ct,
        ho(B)
          ? $e(
              "p",
              "ar-note",
              _e(
                "Applies right away to every armour piece of this slot you wear, at any tier — other players see it too.",
                "Сразу применяется ко всей броне этого слота любого уровня — другие игроки тоже это видят.",
              ),
            )
          : $e(
              "p",
              "ar-note",
              _e(
                "Applies to the next weapons or tools you buy in the in-game shop. The finish stays with that exact weapon — drops, trades, repairs. Press I in game to inspect.",
                "Применяется к следующему оружию или инструменту из внутриигрового магазина. Скин остаётся на этом экземпляре — при выпадении, передаче и ремонте. В игре нажми I для осмотра.",
              ),
            ),
      ),
      fe
    );
  }
  function ge(B, $, he) {
    const fe = qC($);
    return $i(
      "ar-ghost ar-sell",
      _e(`Sell · +${fe} gold`, `Продать · +${fe} золота`),
      () => {
        l ||
          I(
            _e("Sell skin?", "Продать скин?"),
            _e(
              `${_e($.name, $.ru)}: receive ${fe} gold (80% of its store price). One copy is removed; equipped skins reset only when the last copy is sold. Existing weapons keep their finish.`,
              `${_e($.name, $.ru)}: вы получите ${fe} золота (80% цены в магазине). Будет продана одна копия; выбранный скин сбросится только при продаже последней. Уже созданное оружие сохранит свой вид.`,
            ),
            [
              [
                _e("Sell skin", "Продать скин"),
                () =>
                  void (async () => {
                    ((await N(
                      "/me/cosmetics/sell",
                      "POST",
                      { kind: B, skin: $.id, weapon: he },
                      _e(
                        `Skin sold · +${fe} gold`,
                        `Скин продан · +${fe} золота`,
                      ),
                    )) && ((a = $a(he ?? o)), (r = Ot.character)),
                      J());
                  })(),
                "ar-primary",
              ],
              [_e("Cancel", "Отмена"), () => {}],
            ],
          );
      },
    );
  }
  function Le(B, $) {
    if (!Me) {
      R(
        _e("Sign in to buy skins", "Войди в аккаунт, чтобы покупать скины"),
        "error",
      );
      return;
    }
    const he = Ot.gold >= B.price,
      fe = ls(
        "ar-sheet-summary",
        `<span style="--r:${ts(B.rarity).color}"><small>${rl(B.rarity)}</small><b>${Ps($)} | ${ll(B)}</b></span><span class="ar-price">${bs(18)}<b>${B.price.toLocaleString()}</b></span>`,
        "div",
      );
    (fe.prepend(cl("weapon", B.id, $, null, !0)),
      I(
        _e("Confirm purchase", "Подтверди покупку"),
        he
          ? _e(
              `Balance after purchase: ${(Ot.gold - B.price).toLocaleString()} gold`,
              `После покупки останется: ${(Ot.gold - B.price).toLocaleString()} золота`,
            )
          : _e("Not enough gold.", "Недостаточно золота."),
        he
          ? [
              [
                _e("Buy and equip", "Купить и надеть"),
                () =>
                  void (async () => {
                    (await N(
                      "/me/cosmetics/purchase",
                      "POST",
                      { kind: "weapon", skin: B.id, weapon: $ },
                      _e("Purchased!", "Куплено!"),
                    )) && (Oe(B.rarity), await D($, B.id));
                  })(),
                "ar-primary",
              ],
              [_e("Cancel", "Отмена"), () => {}],
            ]
          : [[_e("OK", "Понятно"), () => {}, "ar-primary"]],
        fe,
      ));
  }
  function Oe(B) {
    const $ = $e("div", "ar-burst");
    ($.style.setProperty("--r", ts(B).color),
      n.append($),
      setTimeout(() => $.remove(), 1400));
  }
  function Ve(B) {
    var Ae, K;
    if (!p) {
      const te = ls(
          "ar-cases-intro",
          `<small>${_e("CASES", "КЕЙСЫ")}</small><h2>${_e("Open a case. Find a legend.", "Открой кейс. Найди легенду.")}</h2><p>${_e("Every case drops a Military-grade or better finish on a random weapon. Duplicates stay in your inventory to sell or gift.", "Каждый кейс даёт скин армейского класса или выше на случайное оружие. Дубликаты остаются в инвентаре: их можно продать или подарить.")}</p>`,
          "div",
        ),
        me = $e("div", "ar-case-row");
      for (const [xe, nt] of Object.entries(_s)) {
        const ne = $i("ar-case-card", "", () => {
          ((p = xe), J("none"));
        });
        ((ne.dataset.case = xe),
          ne.style.setProperty("--c1", nt.colors[0]),
          ne.style.setProperty("--c2", nt.colors[1]));
        const Ee = $e("span", "ar-case-fan");
        (I2(xe)
          .sort((st, Ut) => ts(Ut.rarity).tier - ts(st.rarity).tier)
          .slice(0, 3)
          .forEach((st, Ut) => {
            var ri;
            const xi = cl(
              "weapon",
              st.id,
              (nt.weapons ?? [257, 258, 398])[
                Ut % (((ri = nt.weapons) == null ? void 0 : ri.length) ?? 3)
              ],
            );
            (xi.style.setProperty("--i", String(Ut)), Ee.append(xi));
          }),
          ne.append(
            ls("ar-case-box", "<i></i>"),
            Ee,
            ls(
              "ar-case-info",
              `<b>${_e(nt.name, nt.ru)}</b><small>${_e(...nt.tagline)}</small><span class="ar-price">${bs(18)}<b>${nt.price}</b></span>`,
            ),
          ),
          me.append(ne));
      }
      B.append(te, me);
      return;
    }
    const $ = _s[p],
      he = I2(p).sort((te, me) => ts(me.rarity).tier - ts(te.rarity).tier),
      fe = $e("aside", "ar-case-side");
    (fe.style.setProperty("--c1", $.colors[0]),
      fe.style.setProperty("--c2", $.colors[1]),
      fe.append(
        $i("ar-back", _e("← All cases", "← Все кейсы"), () => {
          ((p = null), J("none"));
        }),
        ls("ar-case-box big", "<i></i>"),
        $e("h2", "", _e($.name, $.ru)),
        $e("p", "", _e(...$.tagline)),
      ));
    const be = ((Ae = Ot.cases) == null ? void 0 : Ae[p]) ?? 0,
      Se = $i("ar-primary ar-case-open", "", () => void Qe(p, be > 0));
    ((Se.innerHTML =
      be > 0
        ? `${_e("Open", "Открыть")} <b>· ${_e(`you have ${be}`, `у тебя ${be}`)}</b>`
        : `${_e("Open for", "Открыть за")} ${bs(18)} <b>${$.price}</b>`),
      Me || (Se.disabled = !0),
      fe.append(Se),
      Me ||
        fe.append(
          $e(
            "p",
            "ar-note",
            _e(
              "Sign in to open cases.",
              "Войди в аккаунт, чтобы открывать кейсы.",
            ),
          ),
        ));
    const et = $e("div", "ar-odds");
    et.append($e("small", "", _e("Drop odds", "Шансы выпадения")));
    const Ze = [...new Set(he.map((te) => te.rarity))],
      ct = Ze.reduce((te, me) => te + (t0[me] ?? 0), 0);
    for (const te of Ze)
      et.append(
        ls(
          "ar-odd",
          `<i style="background:${ts(te).color}"></i><span>${rl(te)}</span><b>${(((t0[te] ?? 0) / ct) * 100).toFixed(2)}%</b>`,
          "div",
        ),
      );
    fe.append(
      et,
      $e(
        "p",
        "ar-note",
        $.weapons
          ? $.weapons.map(Ps).join(" · ")
          : _e("Weapons and explosives.", "Оружие и взрывчатка."),
      ),
    );
    const ae = $e("section", "ar-case-contents");
    ae.append(
      ls(
        "ar-title",
        `<small>${_e("CONTAINS", "СОДЕРЖИМОЕ")}</small><b>${he.length} ${_e("finishes", "скинов")}</b>`,
        "div",
      ),
    );
    const qe = $e("div", "ar-grid");
    for (const te of he)
      qe.append(
        ut(te, ((K = $.weapons) == null ? void 0 : K[0]) ?? 257, !1, () => {
          var me;
          ((s = "store"),
            (o = ((me = $.weapons) == null ? void 0 : me[0]) ?? 257),
            (a = te.id),
            J("none"));
        }),
      );
    (ae.append(qe), B.append(fe, ae));
  }
  async function Qe(B, $ = !1) {
    const he = _s[B];
    if (!$ && Ot.gold < he.price) {
      R(_e("Not enough gold", "Недостаточно золота"), "error");
      return;
    }
    const fe = Ot.gold,
      be = await N(
        "/me/cosmetics/case",
        "POST",
        $ ? { collection: B, owned: !0 } : { collection: B },
        "",
      );
    if (!(be != null && be.drop)) return;
    ys("case_roll");
    const Se = Ot.gold;
    if (((Ot.gold = fe), O(), (Ot.gold = Se), await Je(B, be.drop), O(), $)) {
      const et = n.querySelector(".ar-reveal");
      (J(), et && n.append(et));
    }
  }
  function Je(B, $) {
    return new Promise((he) => {
      const fe = I2(B),
        be = 46,
        Se = 54,
        et = () => {
          const vt = Math.random();
          let rt = 0;
          const Tt = [...new Set(fe.map((jt) => jt.rarity))],
            Yt = Tt.reduce((jt, St) => jt + (t0[St] ?? 0), 0);
          for (const jt of Tt)
            if (((rt += (t0[jt] ?? 0) / Yt), vt < rt)) {
              const St = fe.filter((li) => li.rarity === jt);
              return St[Math.floor(Math.random() * St.length)];
            }
          return fe[0];
        },
        Ze = Array.from({ length: Se }, (vt, rt) =>
          rt === be
            ? { f: uo($.skin), w: $.weapon }
            : {
                f: et(),
                w: (() => {
                  const Tt = (
                    _s[B].weapons ?? [257, 258, 256, 398, 376, 375]
                  ).filter((Yt) => Yt !== E.AXE);
                  return Tt[Math.floor(Math.random() * Tt.length)];
                })(),
              },
        ),
        ct = $e("div", "ar-roll"),
        ae = $e("div", "ar-roll-frame"),
        qe = $e("div", "ar-roll-strip");
      for (const vt of Ze) {
        const rt = $e("div", "ar-roll-item");
        (rt.style.setProperty("--r", ts(vt.f.rarity).color),
          rt.append(
            cl("weapon", vt.f.id, vt.w),
            $e("b", "", ll(vt.f)),
            $e("small", "", Ps(vt.w)),
          ),
          qe.append(rt));
      }
      const Ae = $i("ar-ghost ar-roll-skip", _e("Skip", "Пропустить"), () =>
        ri(),
      );
      (ae.append(qe, $e("i", "ar-roll-marker")),
        ct.append(
          ls(
            "ar-roll-title",
            `<small>${_e("OPENING", "ОТКРЫВАЕМ")}</small><b>${_e(_s[B].name, _s[B].ru)}</b>`,
            "div",
          ),
          ae,
          Ae,
        ),
        n.append(ct));
      const K = 172,
        te =
          be * K + K / 2 - ae.clientWidth / 2 + (Math.random() - 0.5) * K * 0.7,
        me = matchMedia("(prefers-reduced-motion: reduce)").matches;
      let xe = !1,
        nt = 0,
        ne = -1;
      const Ee = performance.now(),
        at = me ? 600 : 6200,
        st = (() => {
          try {
            return new AudioContext();
          } catch {
            return null;
          }
        })(),
        Ut = () => {
          if (!st) return;
          const vt = st.createOscillator(),
            rt = st.createGain();
          ((vt.frequency.value = 1800),
            (vt.type = "square"),
            rt.gain.setValueAtTime(0.04, st.currentTime),
            rt.gain.exponentialRampToValueAtTime(1e-4, st.currentTime + 0.03),
            vt.connect(rt).connect(st.destination),
            vt.start(),
            vt.stop(st.currentTime + 0.035));
        },
        xi = (vt) => {
          if (xe) return;
          const rt = Math.min(1, (vt - Ee) / at),
            Tt = 1 - Math.pow(1 - rt, 4),
            Yt = te * Tt;
          qe.style.transform = `translateX(${-Yt}px)`;
          const jt = Math.floor((Yt + ae.clientWidth / 2) / K);
          (jt !== ne && ((ne = jt), Ut()),
            rt < 1 ? (nt = requestAnimationFrame(xi)) : ri());
        };
      nt = requestAnimationFrame(xi);
      function ri() {
        var vt;
        xe ||
          ((xe = !0),
          cancelAnimationFrame(nt),
          st == null || st.close(),
          (qe.style.transform = `translateX(${-te}px)`),
          (vt = qe.children[be]) == null || vt.classList.add("won"),
          setTimeout(
            () => {
              (ct.remove(), Z($), he());
            },
            me ? 200 : 900,
          ));
      }
    });
  }
  function Z(B) {
    var Ze;
    const $ = uo(B.skin),
      he = ts($.rarity);
    Oe($.rarity);
    const fe = $e("div", "ar-sheet ar-reveal"),
      be = $e("div", "ar-sheet-card");
    (be.style.setProperty("--r", he.color),
      be.append(
        ls("ar-reveal-ray", "", "div"),
        cl("weapon", $.id, B.weapon, null, !0),
      ),
      be.append(
        $e("small", "ar-rarity", rl($.rarity)),
        $e("h3", "", `${Ps(B.weapon)} | ${ll($)}`),
      ),
      be.append(
        $e(
          "p",
          "",
          B.duplicate
            ? _e(
                "Another copy added to your inventory. Sell it or send it to a friend.",
                "Ещё одна копия в инвентаре. Продай её или отправь другу.",
              )
            : _e("Added to your collection.", "Добавлено в коллекцию."),
        ),
      ));
    const Se = $e("div", "ar-sheet-actions");
    Se.append(
      $i(
        "ar-primary",
        _e(`Equip on ${Ps(B.weapon)}`, `Надеть на ${Ps(B.weapon)}`),
        () => {
          (fe.remove(), D(B.weapon, $.id));
        },
      ),
    );
    const et = ((Ze = Ot.cases) == null ? void 0 : Ze[B.collection]) ?? 0;
    (Se.append(
      $i(
        "ar-ghost",
        et > 0
          ? _e(`Open another · ${et} left`, `Открыть ещё · осталось ${et}`)
          : _e("Open another", "Открыть ещё"),
        () => {
          (fe.remove(), Qe(B.collection, et > 0));
        },
      ),
    ),
      Se.append($i("ar-ghost", _e("Close", "Закрыть"), () => fe.remove())),
      be.append(Se),
      fe.append(be),
      n.append(fe));
  }
  function W(B) {
    const $ = $e("section", "ar-inventory"),
      he = new Map();
    for (const et of Ot.owned) he.set(et, (he.get(et) ?? 0) + 1);
    $.append(
      $e("h2", "", _e("Your inventory", "Твой инвентарь")),
      $e(
        "p",
        "ar-note",
        _e(
          "All your paid skins. Each sale or gift transfers one copy.",
          "Все твои платные скины. При продаже или подарке списывается одна копия.",
        ),
      ),
    );
    const fe = YL();
    if (fe.length) {
      const et = $e("div", "ar-owned-cases");
      for (const [Ze, ct] of fe) {
        const ae = _s[Ze],
          qe = $e("article", "ar-owned-case");
        ((qe.dataset.case = Ze),
          qe.style.setProperty("--c1", ae.colors[0]),
          qe.style.setProperty("--c2", ae.colors[1]));
        const Ae = $i(
          "ar-primary ar-case-open",
          _e("Open", "Открыть"),
          () => void Qe(Ze, !0),
        );
        (qe.append(
          ls("ar-case-box", "<i></i>"),
          $e("span", "ar-copy-count", `×${ct}`),
          ls("ar-owned-case-info", `<b>${_e(ae.name, ae.ru)}</b>`),
          Ae,
        ),
          et.append(qe));
      }
      $.append(
        ls(
          "ar-title",
          `<small>${_e("READY TO OPEN", "ГОТОВЫ К ОТКРЫТИЮ")}</small><b>${_e("Your cases", "Твои кейсы")}</b>`,
          "div",
        ),
        et,
      );
    }
    const be = $e("div", "ar-inventory-grid");
    let Se = 0;
    for (const [et, Ze] of he) {
      const [ct, ae, qe] = et.split(":"),
        Ae = ct === "weapon" ? Number(ae) : 257,
        K = ct === "weapon" ? qe : ae,
        te = ct === "weapon" ? uo(K) : Fd.find((Ee) => Ee.id === K);
      if (
        (ct !== "weapon" && ct !== "character") ||
        !te ||
        te.price <= 0 ||
        (ct === "weapon" && !hd(Ae))
      )
        continue;
      Se += Ze;
      const me = $e("article", "ar-inventory-card");
      ((me.dataset.key = et), me.style.setProperty("--r", ts(te.rarity).color));
      const xe = ct === "weapon" ? $a(Ae) === K : Ot.character === K;
      me.append(
        cl(ct, K, Ae),
        $e("span", "ar-copy-count", `×${Ze}`),
        $e("small", "ar-rarity", rl(te.rarity)),
        $e("h3", "", _e(te.name, te.ru)),
        $e(
          "p",
          "ar-note",
          ct === "weapon" ? Ps(Ae) : _e("Operator", "Персонаж"),
        ),
      );
      const nt = $e("div", "ar-inventory-actions"),
        ne = $i(
          "ar-ghost",
          xe ? _e("✓ Equipped", "✓ Выбрано") : _e("Equip", "Выбрать"),
          () => void (ct === "weapon" ? D(Ae, K) : H(K)),
        );
      ((ne.disabled = xe),
        nt.append(
          ne,
          ge(ct, te, ct === "weapon" ? Ae : void 0),
          $i(
            "ar-ghost ar-gift",
            _e("Send to friend", "Отправить другу"),
            () => void ke(ct, te, ct === "weapon" ? Ae : void 0),
          ),
        ),
        me.append(nt),
        be.append(me));
    }
    (Se &&
      $.append(
        $e(
          "p",
          "ar-inventory-total",
          _e(`${Se} items · ${he.size} types`, `${Se} предметов`),
        ),
      ),
      $.append(be),
      !Se &&
        !fe.length &&
        $.append(
          $e(
            "p",
            "ar-empty",
            Me
              ? _e(
                  "Your inventory is empty. Buy a skin or open a case.",
                  "Инвентарь пуст. Купи скин или открой кейс.",
                )
              : _e(
                  "Sign in to see your inventory.",
                  "Войди в аккаунт, чтобы увидеть инвентарь.",
                ),
          ),
        ),
      B.append($));
  }
  async function ke(B, $, he) {
    if (l || !Me) return;
    const fe = Me.id;
    ((l = !0), R(_e("Loading friends…", "Загружаю друзей…")));
    try {
      const be = await tn("/me/friends");
      if ((Me == null ? void 0 : Me.id) !== fe || !n.open) return;
      if (!be.friends.length) {
        R(
          _e(
            "Add and accept a friend first.",
            "Сначала добавь друга и дождись принятия заявки.",
          ),
          "info",
        );
        return;
      }
      const Se = $e("select", "ar-search");
      Se.setAttribute("aria-label", _e("Friend", "Друг"));
      for (const et of be.friends) {
        const Ze = $e("option", "", et.username);
        ((Ze.value = et.username), Se.append(Ze));
      }
      (R(""),
        I(
          _e("Send one skin", "Отправить один скин"),
          _e(
            `${_e($.name, $.ru)} — one copy will move to your friend’s inventory.`,
            `${_e($.name, $.ru)} — одна копия перейдёт в инвентарь друга.`,
          ),
          [
            [
              _e("Send gift", "Отправить подарок"),
              () =>
                void (async () => {
                  (await N(
                    "/me/cosmetics/gift",
                    "POST",
                    { kind: B, skin: $.id, weapon: he, friend: Se.value },
                    _e("Gift sent", "Подарок отправлен"),
                  ),
                    J());
                })(),
              "ar-primary",
            ],
            [_e("Cancel", "Отмена"), () => {}],
          ],
          Se,
        ));
    } catch (be) {
      R(be instanceof Error ? be.message : String(be), "error");
    } finally {
      l = !1;
    }
  }
  function Ue(B) {
    const $ = $e("section", "ar-loadout");
    $.append(
      ls(
        "ar-title",
        `<small>${_e("YOUR LOADOUT", "ТВОЁ СНАРЯЖЕНИЕ")}</small><b>${_e("Choose a finish for every weapon", "Выбери скин для каждого оружия")}</b>`,
        "div",
      ),
    );
    for (const Ze of jx) {
      $.append($e("h4", "", _e(Ze.en, Ze.ru)));
      const ct = $e("div", "ar-slots");
      for (const ae of Ze.items.filter(hd)) {
        const qe = uo($a(ae)),
          Ae = ts(qe ? qe.rarity : "common"),
          K = $i("ar-slot" + (ae === m ? " active" : ""), "", () => {
            ((m = ae), (a = $a(ae)), J("nav"));
          });
        (K.style.setProperty("--r", Ae.color),
          (K.dataset.weapon = String(ae)),
          K.append(
            cl("weapon", (qe == null ? void 0 : qe.id) ?? "", ae),
            ls("ar-slot-info", `<b>${Ps(ae)}</b><small>${ll(qe)}</small>`),
          ),
          ct.append(K));
      }
      $.append(ct);
    }
    const he = $e("aside", "ar-loadout-side"),
      fe = [null, ...Gd.filter((Ze) => af(m, Ze.id))];
    he.append(
      ls(
        "ar-title",
        `<small>${_e("OWNED FINISHES", "ТВОИ СКИНЫ")}</small><b>${Ps(m)}</b>`,
        "div",
      ),
    );
    const be = $e("div", "ar-owned-list"),
      Se = $i("ar-primary ar-wide", "", () => void D(m, a)),
      et = () => {
        ((Se.disabled = $a(m) === a),
          (Se.textContent = Se.disabled
            ? _e("✓ Equipped", "✓ Выбрано")
            : _e("Equip", "Выбрать")));
      };
    et();
    for (const Ze of fe)
      be.append(
        ut(Ze, m, ((Ze == null ? void 0 : Ze.id) ?? "") === a, () => {
          ((a = (Ze == null ? void 0 : Ze.id) ?? ""),
            ve(),
            et(),
            be
              .querySelectorAll(".ar-card")
              .forEach((ct) =>
                ct.classList.toggle("selected", ct.dataset.skin === a),
              ));
        }),
      );
    (he.append(
      be,
      Se,
      $i(
        "ar-ghost ar-wide",
        _e(
          `Browse ${Ps(m)} finishes in the store →`,
          `Скины для ${Ps(m)} в магазине →`,
        ),
        () => {
          ((s = "store"), (o = m), J("none"));
        },
      ),
    ),
      B.append($, he, Y(m)));
  }
  function je(B) {
    const $ = $e("section", "ar-market");
    $.append(
      ls(
        "ar-title",
        `<small>${_e("OPERATORS", "ПЕРСОНАЖИ")}</small><b>${_e("Your identity on every server", "Твой образ на всех серверах")}</b>`,
        "div",
      ),
    );
    const he = $e("div", "ar-grid ar-grid-chars"),
      fe = [...Fd];
    (Ot.custom &&
      fe.unshift({
        id: "custom",
        name: "Your Creation",
        ru: "Твоё творение",
        rarity: "common",
        price: 0,
      }),
      fe.sort(
        (Se, et) =>
          ts(et.rarity).tier - ts(Se.rarity).tier || et.price - Se.price,
      ));
    for (const Se of fe) {
      const et = ts(Se.rarity),
        Ze = $i(
          "ar-card ar-char" + (Se.id === r ? " selected" : ""),
          "",
          () => {
            ((r = Se.id),
              be(),
              he
                .querySelectorAll(".ar-card")
                .forEach((Ae) =>
                  Ae.classList.toggle("selected", Ae.dataset.skin === r),
                ));
          },
        );
      ((Ze.dataset.skin = Se.id), Ze.style.setProperty("--r", et.color));
      const ct = N6(Se.id),
        ae = Ot.character === Se.id;
      Ze.append(
        $e("span", "ar-card-bg"),
        cl("character", Se.id, 257, Ot.custom),
      );
      const qe = $e("span", "ar-card-info");
      (qe.append(
        $e("small", "", rl(Se.rarity)),
        $e("b", "", _e(Se.name, Se.ru)),
      ),
        qe.append(
          ae
            ? $e("em", "ar-equipped", _e("✓ Equipped", "✓ Выбран"))
            : ct
              ? $e(
                  "em",
                  "ar-owned",
                  Se.price ? _e("Owned", "Куплен") : _e("Free", "Бесплатно"),
                )
              : Dm(Se.price),
        ),
        Ze.append(qe),
        he.append(Ze));
    }
    ($.append(he), B.append($, Ge()));
    function be() {
      var Se;
      ((Se = n.querySelector(".ar-inspect")) == null || Se.replaceWith(Ge()),
        re());
    }
  }
  function Ge() {
    const B = Fd.find((ct) => ct.id === r),
      $ = ts((B == null ? void 0 : B.rarity) ?? "common"),
      he = $e("aside", "ar-inspect ar-inspect-char");
    he.style.setProperty("--r", $.color);
    const fe = $e("div", "ar-stage tall");
    (fe.append(
      _,
      $e("span", "ar-stage-hint", _e("Drag to rotate", "Тяни, чтобы вращать")),
    ),
      he.append(fe));
    const be = $e("div", "ar-inspect-title");
    (be.append(
      $e("small", "ar-rarity", rl((B == null ? void 0 : B.rarity) ?? "common")),
      $e("h2", "", B ? _e(B.name, B.ru) : _e("Your Creation", "Твоё творение")),
    ),
      he.append(be),
      he.append(
        $e(
          "p",
          "ar-desc",
          _e(
            "Visible to everyone on every server. In game it applies instantly — no respawn needed.",
            "Видно всем игрокам на всех серверах. В игре применяется сразу, без возрождения.",
          ),
        ),
      ));
    const Se = N6(r),
      et = Ot.character === r,
      Ze = $e("div", "ar-actions");
    if (!Se && B)
      Ze.append(
        Dm(B.price),
        $i("ar-primary", _e("Buy", "Купить"), () => {
          if (!Me) {
            R(
              _e(
                "Sign in to buy skins",
                "Войди в аккаунт, чтобы покупать скины",
              ),
              "error",
            );
            return;
          }
          const ct = Ot.gold >= B.price;
          I(
            _e("Confirm purchase", "Подтверди покупку"),
            ct
              ? `${_e(B.name, B.ru)} · ${B.price} ${_e("gold", "золота")}`
              : _e("Not enough gold.", "Недостаточно золота."),
            ct
              ? [
                  [
                    _e("Buy and equip", "Купить и надеть"),
                    () =>
                      void (async () => {
                        (await N(
                          "/me/cosmetics/purchase",
                          "POST",
                          { kind: "character", skin: B.id },
                          _e("Purchased!", "Куплено!"),
                        )) && (Oe(B.rarity), await H(B.id));
                      })(),
                    "ar-primary",
                  ],
                  [_e("Cancel", "Отмена"), () => {}],
                ]
              : [[_e("OK", "Понятно"), () => {}, "ar-primary"]],
          );
        }),
      );
    else {
      const ct = $i(
        "ar-primary",
        et ? _e("✓ Equipped", "✓ Выбран") : _e("Equip", "Выбрать"),
        () => void H(r),
      );
      ((ct.disabled = et), Ze.append(ct));
    }
    return (
      Se && Me && B && B.price > 0 && Ze.append(ge("character", B)),
      Se &&
        Ze.append(
          $i("ar-ghost", _e("Edit a copy", "Редактировать копию"), () => {
            ((M = r === "custom" ? (Ot.custom ?? P2("ranger")) : P2(r)),
              (x = ""),
              (T = []),
              (A = []),
              (s = "editor"),
              Mt(),
              J("none"));
          }),
        ),
      he.append(Ze),
      he
    );
  }
  function Mt() {
    localStorage.setItem("vr-skin-draft", M);
  }
  function ht() {
    if (M) return;
    const B = localStorage.getItem("vr-skin-draft");
    ((M = KC(B) ? B : (Ot.custom ?? P2(Ot.character))), (x = Ot.custom ?? M));
  }
  function lt(B) {
    let $ = 0,
      he = 5,
      fe = 10,
      be = "brush",
      Se = !1,
      et = !0,
      Ze = !1,
      ct = null;
    const ae = $e("section", "ar-workshop");
    ae.append(
      ls(
        "ar-title",
        `<small>${_e("WORKSHOP / PIXEL STUDIO", "МАСТЕРСКАЯ / ПИКСЕЛЬНАЯ СТУДИЯ")}</small><b>${_e("Every pixel is yours", "Каждый пиксель — твой")}</b>`,
        "div",
      ),
    );
    const qe = $e("div", "ar-seg"),
      Ae = $e("div", "ar-seg"),
      K = (St, li, si, on) => {
        li.forEach((Ke, ot) => {
          const q = $i(
            "ar-seg-btn" + (si() === ot ? " active" : ""),
            Ke,
            () => {
              (on(ot),
                St.querySelectorAll("button").forEach((ye, Ie) =>
                  ye.classList.toggle("active", Ie === ot),
                ),
                rt());
            },
          );
          St.append(q);
        });
      };
    (K(
      qe,
      [
        _e("Head", "Голова"),
        _e("Torso", "Торс"),
        _e("L arm", "Л. рука"),
        _e("R arm", "П. рука"),
        _e("L leg", "Л. нога"),
        _e("R leg", "П. нога"),
      ],
      () => $,
      (St) => ($ = St),
    ),
      K(
        Ae,
        [
          _e("Right", "Справа"),
          _e("Left", "Слева"),
          _e("Top", "Сверху"),
          _e("Bottom", "Снизу"),
          _e("Back", "Сзади"),
          _e("Front", "Спереди"),
        ],
        () => he,
        (St) => (he = St),
      ));
    const te = $e("div", "ar-toolbar");
    for (const [St, li, si] of [
      ["brush", "✎ Brush", "✎ Кисть"],
      ["fill", "▣ Fill", "▣ Заливка"],
      ["pick", "⌖ Pick", "⌖ Пипетка"],
    ]) {
      const on = $i(
        "ar-seg-btn" + (be === St ? " active" : ""),
        _e(li, si),
        () => {
          ((be = St),
            te
              .querySelectorAll("[data-tool]")
              .forEach((Ke) =>
                Ke.classList.toggle("active", Ke.dataset.tool === St),
              ));
        },
      );
      ((on.dataset.tool = St), te.append(on));
    }
    const me = $i("ar-seg-btn", "↶", () => {
      T.length && (A.push(M), (M = T.pop()), Tt());
    });
    me.setAttribute("aria-label", _e("Undo", "Отменить"));
    const xe = $i("ar-seg-btn", "↷", () => {
      A.length && (T.push(M), (M = A.pop()), Tt());
    });
    xe.setAttribute("aria-label", _e("Redo", "Повторить"));
    const nt = $i("ar-seg-btn", _e("⇆ Mirror", "⇆ Симметрия"), () => {
      ((Se = !Se), nt.classList.toggle("active", Se));
    });
    te.append(
      me,
      xe,
      nt,
      $i("ar-seg-btn", _e("Grid", "Сетка"), () => {
        ((et = !et), rt());
      }),
    );
    const ne = $e("div", "ar-paint"),
      Ee = $e("canvas");
    ((Ee.id = "skin-paint"),
      (Ee.width = Ee.height = 384),
      Ee.setAttribute(
        "aria-label",
        _e(
          "Paint the selected body face, 8 by 8 pixels",
          "Рисование выбранной стороны, 8 на 8 пикселей",
        ),
      ),
      ne.append(Ee));
    const at = $e("div", "ar-palette");
    for (const [St, li] of Vc.entries()) {
      const si = $i("", "", () => {
        ((fe = St),
          at
            .querySelectorAll("button")
            .forEach((on, Ke) => on.classList.toggle("active", Ke === St)));
      });
      ((si.style.background = li),
        (si.title = li),
        si.setAttribute("aria-label", li),
        si.classList.toggle("active", St === fe),
        at.append(si));
    }
    const st = $e("div", "ar-toolbar");
    (st.append(
      $i("ar-primary", _e("Save & equip", "Сохранить и надеть"), () => {
        Me
          ? N(
              "/me/cosmetics/custom",
              "PUT",
              { pixels: M },
              _e(
                "Saved — applied in game right away",
                "Сохранено — сразу применится в игре",
              ),
            )
          : ((x = M),
            L({ ...Ot, custom: M, character: "custom" }),
            R(
              _e(
                "Saved on this device. Sign in to sync across servers.",
                "Сохранено на устройстве. Войди, чтобы синхронизировать между серверами.",
              ),
              "success",
            ));
      }),
    ),
      st.append(
        $i("ar-ghost", _e("Export PNG", "Скачать PNG"), () => {
          const St = $e("a");
          ((St.download = "voxel-rush-skin.png"),
            (St.href = JC(M).toDataURL()),
            St.click());
        }),
      ));
    const Ut = $e("input");
    ((Ut.type = "file"),
      (Ut.accept = "image/png"),
      (Ut.hidden = !0),
      (Ut.onchange = async () => {
        var li;
        const St = (li = Ut.files) == null ? void 0 : li[0];
        if (St) {
          try {
            if (St.size > 1e6)
              throw Error(
                _e("PNG must be under 1 MB", "PNG должен быть меньше 1 МБ"),
              );
            const si = await createImageBitmap(St);
            if (si.width !== 48 || si.height !== 48)
              throw (
                si.close(),
                Error(
                  _e(
                    "Use a 48 × 48 skin atlas exported by this editor.",
                    "Нужна развёртка 48 × 48 из этого редактора.",
                  ),
                )
              );
            const on = $e("canvas");
            on.width = on.height = 48;
            const Ke = on.getContext("2d");
            (Ke.drawImage(si, 0, 0), si.close());
            const ot = Ke.getImageData(0, 0, 48, 48).data,
              q = Vc.map((ye) =>
                [1, 3, 5].map((Ie) => parseInt(ye.slice(Ie, Ie + 2), 16)),
              );
            (vt(),
              (M = Array.from({ length: 2304 }, (ye, Ie) => {
                let He = 0,
                  Te = 1 / 0;
                return (
                  q.forEach((ft, Pt) => {
                    const Gt = ft.reduce(
                      (Rt, Wt, ei) => Rt + (Wt - ot[Ie * 4 + ei]) ** 2,
                      0,
                    );
                    Gt < Te && ((Te = Gt), (He = Pt));
                  }),
                  He.toString(32)
                );
              }).join("")),
              Tt());
          } catch (si) {
            R(String(si instanceof Error ? si.message : si), "error");
          }
          Ut.value = "";
        }
      }),
      st.append(
        Ut,
        $i("ar-ghost", _e("Import PNG", "Импорт PNG"), () => Ut.click()),
      ),
      ae.append(
        $e("small", "ar-label", _e("Body part", "Часть тела")),
        qe,
        $e("small", "ar-label", _e("Side", "Сторона")),
        Ae,
        te,
        ne,
        at,
        st,
        $e(
          "p",
          "ar-note",
          _e(
            "Brush, fill, eyedropper, symmetry, undo. Drafts save automatically.",
            "Кисть, заливка, пипетка, симметрия, отмена. Черновик сохраняется автоматически.",
          ),
        ),
      ));
    const xi = $e("aside", "ar-inspect ar-inspect-char");
    xi.style.setProperty("--r", "#e4ae39");
    const ri = $e("div", "ar-stage tall");
    (ri.append(
      _,
      $e(
        "span",
        "ar-stage-hint",
        _e("Live · drag to rotate", "Онлайн · тяни для вращения"),
      ),
    ),
      xi.append(
        ri,
        ls(
          "ar-inspect-title",
          `<small class="ar-rarity">${_e("CUSTOM", "СВОЙ")}</small><h2>${_e("Your Creation", "Твоё творение")}</h2>`,
          "div",
        ),
      ),
      B.append(ae, xi));
    function vt() {
      (T.push(M), T.length > 50 && T.shift(), (A = []));
    }
    function rt() {
      const St = Ee.getContext("2d");
      for (let li = 0; li < 8; li++)
        for (let si = 0; si < 8; si++)
          ((St.fillStyle =
            Vc[parseInt(M[($ * 8 + li) * 48 + he * 8 + si], 32)]),
            St.fillRect(si * 48, li * 48, 48, 48));
      if (et) {
        ((St.strokeStyle = "#ffffff30"), (St.lineWidth = 1));
        for (let li = 0; li <= 8; li++)
          (St.beginPath(),
            St.moveTo(li * 48, 0),
            St.lineTo(li * 48, 384),
            St.moveTo(0, li * 48),
            St.lineTo(384, li * 48),
            St.stroke());
      }
    }
    function Tt() {
      (Mt(), rt(), y == null || y.showCharacter("custom", M));
    }
    function Yt(St, li) {
      const si = M.split(""),
        on = (q, ye) => ($ * 8 + ye) * 48 + he * 8 + q,
        Ke = si[on(St, li)];
      if (be === "pick") {
        ((fe = parseInt(Ke, 32)),
          at
            .querySelectorAll("button")
            .forEach((q, ye) => q.classList.toggle("active", ye === fe)));
        return;
      }
      const ot = fe.toString(32);
      if (be === "fill") {
        const q = [[St, li]],
          ye = new Set();
        for (; q.length;) {
          const [Ie, He] = q.pop();
          Ie < 0 ||
            Ie > 7 ||
            He < 0 ||
            He > 7 ||
            ye.has(on(Ie, He)) ||
            si[on(Ie, He)] !== Ke ||
            (ye.add(on(Ie, He)),
            (si[on(Ie, He)] = ot),
            q.push([Ie - 1, He], [Ie + 1, He], [Ie, He - 1], [Ie, He + 1]));
        }
      } else ((si[on(St, li)] = ot), Se && (si[on(7 - St, li)] = ot));
      M = si.join("");
    }
    function jt(St) {
      const li = Ee.getBoundingClientRect(),
        si = Math.max(
          0,
          Math.min(7, Math.floor(((St.clientX - li.left) / li.width) * 8)),
        ),
        on = Math.max(
          0,
          Math.min(7, Math.floor(((St.clientY - li.top) / li.height) * 8)),
        );
      if (ct && be === "brush") {
        const [Ke, ot] = ct,
          q = Math.max(Math.abs(si - Ke), Math.abs(on - ot));
        for (let ye = 0; ye <= q; ye++)
          Yt(
            Math.round(Ke + ((si - Ke) * ye) / (q || 1)),
            Math.round(ot + ((on - ot) * ye) / (q || 1)),
          );
      } else Yt(si, on);
      ((ct = [si, on]), Tt());
    }
    ((Ee.onpointerdown = (St) => {
      (St.preventDefault(),
        vt(),
        (Ze = !0),
        (ct = null),
        Ee.setPointerCapture(St.pointerId),
        jt(St));
    }),
      (Ee.onpointermove = (St) => {
        Ze && jt(St);
      }),
      (Ee.onpointerup = Ee.onpointercancel =
        () => {
          ((Ze = !1), (ct = null));
        }),
      rt());
  }
  return {
    async open(B, $) {
      ((S = document.activeElement),
        (s = B),
        (p = null),
        (C.textContent = ""),
        $ && hd($) && au.includes($) && ((o = $), (m = $)));
      try {
        await C4();
      } catch (he) {
        R(String(he instanceof Error ? he.message : he), "error");
      }
      ((a = $a(s === "loadout" ? m : o)),
        (r = Ot.character),
        s === "editor" && ht(),
        J("none"),
        n.open || n.showModal(),
        requestAnimationFrame(re),
        (b = performance.now()),
        cancelAnimationFrame(g),
        (g = requestAnimationFrame(Ce)),
        window.dispatchEvent(new Event("armory-opened")));
    },
    get isOpen() {
      return n.open;
    },
    openOwned(B) {
      var $;
      ((($ = Ot.cases) == null ? void 0 : $[B]) ?? 0) > 0 && Qe(B, !0);
    },
  };
}
