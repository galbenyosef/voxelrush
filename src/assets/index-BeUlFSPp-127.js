// index-BeUlFSPp 127 — append
// Lines 72366-74546 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function aN() {
  const s = $e("dialog", "armory");
  ((s.id = "skins-menu"),
    s.setAttribute("aria-label", "Armory"),
    document.body.append(s));
  let e = 278,
    t = 0;
  const i = (K) =>
    No(K) ? (No(e) === K ? e : K) : Lo(K) && Lo(t) === K ? t : K;
  let n = "store",
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
    g,
    y = 0,
    b = 0,
    S = null,
    M = "",
    E = "",
    A = [],
    T = [];
  const x = $e("canvas", "ar-hero-canvas");
  ((x.id = "skin-preview"), (x.tabIndex = 0));
  const R = $e("p", "ar-status");
  (R.setAttribute("role", "status"), R.setAttribute("aria-live", "polite"));
  const _ = (K, pe = "info") => {
    ((R.textContent = K),
      (R.dataset.kind = pe),
      K &&
        (clearTimeout(_.timer),
        (_.timer = setTimeout(() => {
          R.textContent === K && (R.textContent = "");
        }, 4500))));
  };
  function C(K) {
    ((Lt = K),
      localStorage.setItem(
        "vr-local-cosmetics",
        JSON.stringify({ ...K, gold: 0, owned: [] }),
      ),
      window.dispatchEvent(new Event("cosmetics-changed")));
  }
  async function P(
    K,
    pe,
    Ae,
    Le = we("Saved to your account", "Сохранено в аккаунте"),
  ) {
    if (!l) {
      ((l = !0),
        _(we("Working…", "Секунду…")),
        s
          .querySelectorAll(".ar-primary, .ar-card, .ar-case-open")
          .forEach((Ve) => (Ve.disabled = !0)));
      try {
        const Ve = qe?.id,
          We = await Vi(K, pe, Ae);
        return qe?.id !== Ve
          ? void 0
          : ((Lt = {
              gold: We.gold,
              owned: We.owned,
              character: We.character,
              custom: We.custom,
              weapons: We.weapons,
              cases: We.cases ?? Lt.cases,
            }),
            window.dispatchEvent(new Event("cosmetics-changed")),
            K.endsWith("/custom") && (E = Ae.pixels),
            _(Le, "success"),
            We);
      } catch (Ve) {
        _(Ve instanceof Error ? Ve.message : String(Ve), "error");
      } finally {
        ((l = !1), j());
      }
    }
  }
  async function O(K, pe) {
    if (!qe) {
      const Ae = { ...Lt, weapons: { ...Lt.weapons, [K]: pe } };
      (C(Ae),
        _(
          we("Equipped on this device", "Выбрано на этом устройстве"),
          "success",
        ),
        ve());
      return;
    }
    (await P(
      "/me/cosmetics/equip",
      "PUT",
      { kind: "weapon", skin: pe, weapon: K },
      Lo(K)
        ? we(
            `Equipped — every tier of your ${Zn(K).toLowerCase()} now wears this finish`,
            `Готово — все уровни: ${Zn(K).toLowerCase()} теперь с этим скином`,
          )
        : we(
            `Equipped — your next ${Zn(K)} from the shop gets this finish`,
            `Готово — следующий ${Zn(K)} из магазина будет с этим скином`,
          ),
    ),
      ve());
  }
  const B = () => {
      const K = Lt.weapons[OP];
      return xA(K) && H(K) ? K : "";
    },
    H = (K) => Lt.owned.includes(PP(K));
  async function D(K) {
    qe &&
      (await P(
        "/me/cosmetics/equip",
        "PUT",
        { kind: "hat", skin: K },
        K
          ? we(
              "Hat on — everyone sees it in game",
              "Шапка надета — её видят все в игре",
            )
          : we("Hat off", "Шапка снята"),
      ),
      ve());
  }
  async function U(K) {
    if (!qe) {
      (C({ ...Lt, character: K }),
        _(we("Equipped", "Персонаж выбран"), "success"),
        ve());
      return;
    }
    (await P(
      "/me/cosmetics/equip",
      "PUT",
      { kind: "character", skin: K },
      we(
        "Operator equipped — applied in game right away",
        "Персонаж выбран — сразу применится в игре",
      ),
    ),
      ve());
  }
  function W() {
    if (!l) {
      if (n === "editor" && M !== E) {
        J(
          we("Keep your drawing?", "Сохранить рисунок?"),
          we(
            "Your draft stays on this device.",
            "Черновик останется на этом устройстве.",
          ),
          [
            [we("Continue editing", "Продолжить"), () => {}],
            [we("Close", "Закрыть"), () => s.close()],
          ],
        );
        return;
      }
      s.close();
    }
  }
  (s.addEventListener("cancel", (K) => {
    (K.preventDefault(), !s.querySelector(".ar-sheet, .ar-roll") && W());
  }),
    s.addEventListener("close", () => {
      (cancelAnimationFrame(y),
        g?.dispose(),
        (g = void 0),
        S?.focus(),
        window.dispatchEvent(new Event("armory-closed")));
    }),
    s.addEventListener("keydown", (K) => K.stopPropagation()));
  function J(K, pe, Ae, Le) {
    s.querySelector(".ar-sheet")?.remove();
    const Ve = $e("div", "ar-sheet"),
      We = $e("div", "ar-sheet-card");
    (We.append($e("h3", "", K)),
      pe && We.append($e("p", "", pe)),
      Le && We.append(Le));
    const ae = $e("div", "ar-sheet-actions");
    for (const [Ke, Me, Te] of Ae)
      ae.append(
        Yi(Te ?? "ar-ghost", Ke, () => {
          (Ve.remove(), Me());
        }),
      );
    (We.append(ae),
      Ve.append(We),
      (Ve.onclick = (Ke) => {
        Ke.target === Ve && Ve.remove();
      }),
      s.append(Ve),
      ae.querySelector("button")?.focus());
  }
  function j() {
    const K = s.querySelector(".ar-wallet");
    if (!K) return;
    K.innerHTML = `${xn(26, "spin")}<span><b>${Lt.gold.toLocaleString()}</b><small>${we("Gold", "Золото")}</small></span>`;
    const pe = Yi("ar-wallet-add", "+", () =>
      Pn
        ? J(
            we("Gold coins", "Золотые монеты"),
            we(
              "Gold is the premium currency for skins and cases. It is never earned or lost in matches: it comes from the daily bonus and the rewards of events.",
              "Золото — премиальная валюта для скинов и кейсов. В матчах оно не выдаётся и не теряется: его приносят ежедневный бонус и награды событий.",
            ),
            [[we("OK", "Понятно"), () => {}, "ar-primary"]],
          )
        : J(
            we("Gold coins", "Золотые монеты"),
            we(
              "Gold is the premium currency for skins and cases. It is never earned or lost in matches. Support the project: post about the game on X and get gold for the post and for every like, reply and repost on it.",
              "Золото — премиальная валюта для скинов и кейсов. В матчах оно не выдаётся и не теряется. Поддержи проект: опубликуй пост об игре в X и получай золото за сам пост и за каждый лайк, комментарий и репост.",
            ),
            [
              [
                we("Earn gold on X", "Получить золото за пост"),
                () => void Z5(),
                "ar-primary",
              ],
              [we("Later", "Позже"), () => {}],
            ],
          ),
    );
    (pe.setAttribute("aria-label", we("Get gold", "Получить золото")),
      K.append(pe));
  }
  const ne = new Set([
    "ar-grid",
    "ar-owned-list",
    "ar-inspect",
    "ar-market",
    "ar-loadout-side",
  ]);
  function ge() {
    const K = [],
      pe = new Map();
    for (const Ae of s.querySelectorAll("*")) {
      if (!Ae.scrollTop && !Ae.scrollLeft) continue;
      const Le = Ae.classList[0] ?? Ae.tagName,
        Ve = pe.get(Le) ?? 0;
      (pe.set(Le, Ve + 1),
        K.push([`${Le}#${Ve}`, Ae.scrollTop, Ae.scrollLeft]));
    }
    return K;
  }
  function be(K, pe) {
    if (!K.length) return;
    const Ae = new Map(),
      Le = new Map();
    for (const Ve of s.querySelectorAll("*")) {
      const We = Ve.classList[0] ?? Ve.tagName;
      if (!K.some(([Ke]) => Ke.startsWith(We + "#"))) continue;
      const ae = Le.get(We) ?? 0;
      (Le.set(We, ae + 1), Ae.set(`${We}#${ae}`, Ve));
    }
    for (const [Ve, We, ae] of K) {
      if (pe === "nav" && ne.has(Ve.slice(0, Ve.lastIndexOf("#")))) continue;
      const Ke = Ae.get(Ve);
      Ke && ((Ke.scrollTop = We), (Ke.scrollLeft = ae));
    }
  }
  function oe() {
    const K = document.activeElement;
    if (!K || K === s || !s.contains(K) || !K.classList[0]) return null;
    const pe = K.classList[0],
      Ae = [...s.querySelectorAll("." + pe)];
    return {
      role: pe,
      n: Ae.indexOf(K),
      skin: K.dataset.skin,
      weapon: K.dataset.weapon,
    };
  }
  function he(K) {
    const pe = [...s.querySelectorAll("." + K.role)];
    (
      pe.find(
        (Le) =>
          (K.skin !== void 0 && Le.dataset.skin === K.skin) ||
          (K.weapon !== void 0 && Le.dataset.weapon === K.weapon),
      ) ?? pe[K.n]
    )?.focus({ preventScroll: !0 });
  }
  function Ie() {
    const K = s.querySelector(".ar-rail-item.active"),
      pe = K?.parentElement;
    if (!K || !pe) return;
    const Ae = K.getBoundingClientRect(),
      Le = pe.getBoundingClientRect();
    (pe.scrollWidth > pe.clientWidth + 1 &&
      (pe.scrollLeft +=
        Ae.left < Le.left
          ? Ae.left - Le.left - 12
          : Ae.right > Le.right
            ? Ae.right - Le.right + 12
            : 0),
      pe.scrollHeight > pe.clientHeight + 1 &&
        (pe.scrollTop +=
          Ae.top < Le.top
            ? Ae.top - Le.top - 12
            : Ae.bottom > Le.bottom
              ? Ae.bottom - Le.bottom + 12
              : 0));
  }
  function ve(K = "all") {
    (bu(o) || (o = 257), bu(m) || (m = 257));
    const pe = K === "none" ? [] : ge(),
      Ae = K === "none" ? null : oe();
    (ot.disconnect(), s.replaceChildren());
    const Le = $e("header", "ar-top"),
      Ve = dn(
        "ar-brand",
        `<span class="ar-logo"><i></i></span><span><small>VOXEL RUSH</small><b>${we("ARMORY", "АРСЕНАЛ")}</b></span>`,
        "div",
      ),
      We = $e("nav", "ar-tabs");
    We.setAttribute("role", "tablist");
    const ae = [
      [
        "store",
        we("Store", "Магазин"),
        "M3 7h18l-2 12H5zM8 7V5a4 4 0 0 1 8 0v2",
      ],
      ["cases", we("Cases", "Кейсы"), "M3 8h18v12H3zM3 8l2-4h14l2 4M10 12h4"],
      [
        "inventory",
        we("Inventory", "Инвентарь"),
        "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
      ],
      [
        "loadout",
        we("Loadout", "Снаряжение"),
        "M4 14h10l3-3h3v3l-3 3H9l-2 3H4z",
      ],
      [
        "character",
        we("Operators", "Персонажи"),
        "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0",
      ],
      [
        "editor",
        we("Workshop", "Мастерская"),
        "M14 4l6 6-10 10H4v-6zM12 6l6 6",
      ],
    ];
    for (const [Fe, Et, $t] of ae) {
      const Nt = Yi("ar-tab" + (n === Fe ? " active" : ""), "", () => {
        ((n = Fe),
          (p = null),
          (a = Pr(Fe === "loadout" ? m : o)),
          (r = Lt.character),
          (f = 0.02),
          Fe === "editor" && te(),
          ve("none"));
      });
      if (
        (Nt.setAttribute("role", "tab"),
        Nt.setAttribute("aria-selected", String(n === Fe)),
        (Nt.dataset.tab = Fe),
        (Nt.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${$t}"/></svg><span>${Et}</span>`),
        Fe === "cases" &&
          Nt.append($e("i", "ar-tab-badge", we("NEW", "НОВОЕ"))),
        Fe === "inventory" && Uv())
      ) {
        const si = $e("i", "ar-tab-badge ar-tab-count", String(Uv()));
        ((si.title = we("Unopened cases", "Неоткрытые кейсы")), Nt.append(si));
      }
      We.append(Nt);
    }
    const Ke = $e("div", "ar-wallet");
    Ke.title = we("Premium currency", "Премиальная валюта");
    const Me = Yi("ar-close", "", W);
    ((Me.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>'),
      Me.setAttribute("aria-label", we("Close", "Закрыть")),
      Le.append(Ve, We, Ke, Me));
    const Te = $e("div", "ar-body tab-" + n);
    (s.append(Le, Te, R),
      j(),
      n === "store"
        ? ye(Te)
        : n === "cases"
          ? F(Te)
          : n === "inventory"
            ? Xe(Te)
            : n === "loadout"
              ? Mt(Te)
              : n === "character"
                ? pt(Te)
                : He(Te),
      be(pe, K === "none" ? "all" : K),
      Ae && he(Ae),
      K === "none" && Ie());
    const Je = s.querySelector("#skin-preview");
    Je && (ot.observe(Je), requestAnimationFrame(it));
  }
  function it() {
    const K = s.querySelector("#skin-preview");
    if (K)
      try {
        g ??= new j5(K);
        const pe = K.getBoundingClientRect();
        (g.resize(Math.max(200, pe.width), Math.max(180, pe.height)),
          n === "editor"
            ? g.showCharacter("custom", M)
            : n === "character"
              ? g.showCharacter(r, Lt.custom, B())
              : n === "loadout"
                ? g.showWeapon(i(m), a, f)
                : g.showWeapon(i(o), a, f));
      } catch {
        _(
          we(
            "3D preview unavailable on this device",
            "3D-просмотр недоступен на этом устройстве",
          ),
          "error",
        );
      }
  }
  function st(K) {
    s.open &&
      (document.hidden || g?.tick(Math.min(0.05, (K - b) / 1e3)),
      (b = K),
      (y = requestAnimationFrame(st)));
  }
  const ot = new ResizeObserver(() => {
    const K = s.querySelector("#skin-preview");
    if (K && g) {
      const pe = K.getBoundingClientRect();
      g.resize(Math.max(1, pe.width), Math.max(1, pe.height));
    }
  });
  function at(K, pe, Ae) {
    const Le = $e("aside", "ar-rail");
    Le.setAttribute("aria-label", we("Weapons", "Оружие"));
    for (const Ve of R_) {
      Le.append($e("h4", "", we(Ve.en, Ve.ru)));
      for (const We of Ve.items.filter(bu)) {
        const ae = Yi("ar-rail-item" + (We === K ? " active" : ""), "", () =>
          pe(We),
        );
        ((ae.dataset.weapon = String(We)),
          ae.setAttribute("aria-pressed", String(We === K)));
        const Ke = Pr(We),
          Me = io(Ke);
        (ae.append(
          rl("weapon", Ke, We),
          dn(
            "ar-rail-label",
            `<b>${Zn(We)}</b><small style="color:${Me ? Vs(Me.rarity).color : ""}">${Ae?.(We) ?? Jl(Me)}</small>`,
          ),
        ),
          Le.append(ae));
      }
    }
    return Le;
  }
  function Re() {
    let K = [null, ...rd];
    const pe = h.trim().toLowerCase();
    K = K.filter(
      (Le) =>
        (!Le?.exclusive || Ga() || wu(o, Le.id)) &&
        (!c || Le?.rarity === c) &&
        (!u || wu(o, Le?.id ?? "")) &&
        (!pe ||
          `${Le?.name ?? "factory"} ${Le?.ru ?? "заводской"} ${Le ? Tn[Le.collection].name : ""}`
            .toLowerCase()
            .includes(pe)),
    );
    const Ae = (Le) => (Le ? Vs(Le.rarity).tier : -1);
    return (
      K.sort((Le, Ve) =>
        d === "price-asc"
          ? (Le?.price ?? 0) - (Ve?.price ?? 0)
          : d === "price-desc"
            ? (Ve?.price ?? 0) - (Le?.price ?? 0)
            : d === "name"
              ? Jl(Le ?? void 0).localeCompare(Jl(Ve ?? void 0))
              : Ae(Ve) - Ae(Le) || (Ve?.price ?? 0) - (Le?.price ?? 0),
      ),
      K
    );
  }
  function V(K, pe, Ae, Le) {
    const Ve = Vs(K ? K.rarity : "common"),
      We = Yi("ar-card" + (Ae ? " selected" : ""), "", Le);
    ((We.dataset.skin = K?.id ?? ""),
      We.style.setProperty("--r", Ve.color),
      We.setAttribute("aria-pressed", String(Ae)));
    const ae = wu(pe, K?.id ?? ""),
      Ke = Pr(pe) === (K?.id ?? ""),
      Me = $e("span", "ar-card-flags");
    (K?.exclusive && Me.append($e("i", "ev", we("HALLOWEEN", "ХЕЛЛОУИН"))),
      K &&
        K.fx !== "none" &&
        Me.append($e("i", "fx", we("ANIMATED", "АНИМАЦИЯ"))),
      K?.tracking && !Lo(pe) && Me.append($e("i", "kt", U5(pe))),
      We.append($e("span", "ar-card-bg"), rl("weapon", K?.id ?? "", pe), Me));
    const Te = $e("span", "ar-card-info");
    return (
      Te.append(
        $e("small", "", K ? Ql(K.rarity) : we("Default", "По умолчанию")),
        $e("b", "", Jl(K ?? void 0)),
      ),
      Te.append(
        Ke
          ? $e("em", "ar-equipped", we("✓ Equipped", "✓ Выбрано"))
          : ae
            ? $e(
                "em",
                "ar-owned",
                K?.price ? we("Owned", "Куплено") : we("Free", "Бесплатно"),
              )
            : K?.exclusive
              ? $e("em", "ar-earned", we("Quest reward", "Награда за задания"))
              : Ag(K.price),
      ),
      We.append(Te),
      We
    );
  }
  function ye(K) {
    K.append(
      at(
        o,
        (Fe) => {
          ((o = Fe), (a = Pr(Fe)), ve("nav"));
        },
        (Fe) => {
          const Et = rd.filter(($t) => wu(Fe, $t.id)).length;
          return we(`${Et} owned`, `${Et} в коллекции`);
        },
      ),
    );
    const pe = $e("section", "ar-market"),
      Ae = $e("div", "ar-market-head");
    Ae.append(
      dn(
        "ar-title",
        `<small>${Lo(o) ? we("ARMOUR FINISHES", "СКИНЫ БРОНИ") : we("WEAPON & TOOL FINISHES", "СКИНЫ ОРУЖИЯ И ИНСТРУМЕНТОВ")}</small><b>${Zn(o)}</b>`,
        "div",
      ),
    );
    const Le = $e("div", "ar-tools"),
      Ve = $e("input", "ar-search");
    ((Ve.type = "search"),
      (Ve.placeholder = we("Search finishes…", "Поиск скинов…")),
      (Ve.value = h),
      Ve.setAttribute("aria-label", Ve.placeholder),
      (Ve.oninput = () => {
        ((h = Ve.value), Je());
      }));
    const We = $e("select", "ar-sort");
    We.setAttribute("aria-label", we("Sort", "Сортировка"));
    for (const [Fe, Et] of [
      ["rarity", we("Rarity", "По редкости")],
      ["price-desc", we("Price: high to low", "Сначала дорогие")],
      ["price-asc", we("Price: low to high", "Сначала дешёвые")],
      ["name", we("Name", "По названию")],
    ]) {
      const $t = $e("option", "", Et);
      (($t.value = Fe), We.append($t));
    }
    ((We.value = d),
      (We.onchange = () => {
        ((d = We.value), Je());
      }));
    const ae = Yi(
      "ar-toggle" + (u ? " active" : ""),
      we("Owned", "Мои"),
      () => {
        ((u = !u),
          ae.classList.toggle("active", u),
          ae.setAttribute("aria-pressed", String(u)),
          Je());
      },
    );
    (ae.setAttribute("aria-pressed", String(u)),
      Le.append(Ve, We, ae),
      Ae.append(Le));
    const Ke = $e("div", "ar-chips");
    Ke.setAttribute("aria-label", we("Rarity", "Редкость"));
    const Me = (Fe, Et) => {
      const $t = Yi("ar-chip" + (c === Fe ? " active" : ""), Et, () => {
        ((c = Fe),
          Ke.querySelectorAll(".ar-chip").forEach((Nt) =>
            Nt.classList.toggle("active", Nt === $t),
          ),
          Je());
      });
      (Fe && $t.style.setProperty("--r", Vs(Fe).color), Ke.append($t));
    };
    Me("", we("All", "Все"));
    for (const Fe of Object.keys(Oo)) Fe !== "common" && Me(Fe, Ql(Fe));
    const Te = $e("div", "ar-grid");
    (pe.append(Ae, Ke, Te), K.append(pe, ze(o)));
    function Je() {
      Te.replaceChildren();
      const Fe = Re();
      for (const Et of Fe)
        Te.append(
          V(Et, o, (Et?.id ?? "") === a, () => {
            ((a = Et?.id ?? ""),
              (f = 0.02),
              Ce(),
              Te.querySelectorAll(".ar-card").forEach(($t) => {
                const Nt = $t.dataset.skin === a;
                ($t.classList.toggle("selected", Nt),
                  $t.setAttribute("aria-pressed", String(Nt)));
              }));
          }),
        );
      Fe.length ||
        Te.append(
          $e(
            "p",
            "ar-empty",
            we(
              "No finishes match these filters.",
              "По этим фильтрам ничего нет.",
            ),
          ),
        );
    }
    Je();
  }
  function Ce() {
    const K = s.querySelector(".ar-inspect");
    K && (K.replaceWith(ze(n === "loadout" ? m : o)), it());
  }
  function ze(K) {
    const pe = io(a),
      Ae = Vs(pe ? pe.rarity : "common"),
      Le = $e("aside", "ar-inspect");
    Le.style.setProperty("--r", Ae.color);
    const Ve = $e("div", "ar-stage");
    (Ve.append(
      x,
      $e("span", "ar-stage-hint", we("Drag to rotate", "Тяни, чтобы вращать")),
    ),
      Le.append(Ve));
    const We = $e("div", "ar-inspect-title");
    if (
      (We.append(
        $e(
          "small",
          "ar-rarity",
          pe ? Ql(pe.rarity) : we("Default", "По умолчанию"),
        ),
        $e("h2", "", `${Zn(K)} | ${Jl(pe)}`),
      ),
      pe &&
        We.append(
          $e(
            "span",
            "ar-collection",
            pe.exclusive
              ? we("Halloween 2026 · exclusive", "Хеллоуин 2026 · эксклюзив")
              : we(Tn[pe.collection].name, Tn[pe.collection].ru),
          ),
        ),
      Le.append(We),
      No(K))
    ) {
      Le.append(
        $e(
          "p",
          "ar-note",
          we(
            "One finish for every tier. Factory cutting heads and tier marks stay visible. BlockTrack counts blocks broken in survival by the original owner.",
            "Один скин для всех уровней. Заводские режущие части и отметки уровня сохраняются. BlockTrack считает блоки, сломанные первоначальным владельцем в выживании.",
          ),
        ),
      );
      const Te = $e("select", "ar-sort");
      (Te.setAttribute(
        "aria-label",
        we("Preview tool tier", "Уровень инструмента в превью"),
      ),
        (Te.dataset.toolTier = ""));
      for (const Je of K === 278 ? HA : BA) {
        const Fe = $e("option", "", Li(Je));
        ((Fe.value = String(Je)), Te.append(Fe));
      }
      ((Te.value = String(i(K))),
        (Te.onchange = () => {
          ((e = Number(Te.value)), it());
        }),
        Le.append(Te));
    }
    if (Lo(K)) {
      Le.append(
        $e(
          "p",
          "ar-note",
          we(
            "One finish for every armour tier (I–IV). Steel plates, tier-coloured trims and the tier pips stay factory, so everyone still sees which tier you wear.",
            "Один скин для всех уровней брони (I–IV). Стальные пластины, цветная отделка и метки уровня остаются заводскими — всем видно, какой у тебя уровень брони.",
          ),
        ),
      );
      const Te = $e("select", "ar-sort");
      (Te.setAttribute(
        "aria-label",
        we("Preview armour tier", "Уровень брони в превью"),
      ),
        (Te.dataset.armorTier = ""));
      const Je = Object.values(tO).find((Fe) => Fe[0] === K) ?? [K];
      for (const Fe of Je) {
        const Et = $e("option", "", Li(Fe));
        ((Et.value = String(Fe)), Te.append(Et));
      }
      ((Te.value = String(i(K))),
        (Te.onchange = () => {
          ((t = Number(Te.value)), it());
        }),
        Le.append(Te));
    }
    if (pe) {
      Le.append($e("p", "ar-desc", we(pe.desc[0], pe.desc[1])));
      const Te = $e("div", "ar-tags");
      (pe.fx !== "none" && Te.append($e("span", "fx", we(...bee[pe.fx]))),
        pe.tracking &&
          !Lo(K) &&
          Te.append(
            $e(
              "span",
              "kt",
              No(K)
                ? we(
                    "BlockTrack™ · blocks broken",
                    "BlockTrack™ · сломанные блоки",
                  )
                : we("KillTrack™ counter", "Счётчик KillTrack™"),
            ),
          ),
        pe.metal > 0.8 &&
          Te.append(
            $e("span", "", we("Polished metal", "Полированный металл")),
          ),
        Le.append(Te));
      const Je = $e("div", "ar-wear");
      Je.append($e("small", "", we("Condition preview", "Износ (превью)")));
      const Fe = $e("div", "ar-wear-row");
      for (const [Et, [$t, Nt, si]] of k_.entries()) {
        const ce = Et === 0 ? 0.02 : (k_[Et - 1][0] + Math.min($t, 0.9)) / 2,
          Se = Yi(
            "ar-wear-btn" + (Math.abs(f - ce) < 0.001 ? " active" : ""),
            ["FN", "MW", "FT", "WW", "BS"][Et],
            () => {
              ((f = ce),
                g?.setWear(ce),
                Fe.querySelectorAll("button").forEach((Qe) =>
                  Qe.classList.toggle("active", Qe === Se),
                ));
            },
          );
        ((Se.title = we(Nt, si)), Fe.append(Se));
      }
      (Je.append(
        Fe,
        $e(
          "small",
          "ar-wear-note",
          we(
            "Each weapon gets a random condition and pattern seed.",
            "Каждое оружие получает случайный износ и узор.",
          ),
        ),
      ),
        Lo(K) || Le.append(Je));
    }
    const ae = wu(K, a),
      Ke = Pr(K) === a,
      Me = $e("div", "ar-actions");
    if (!ae && pe?.exclusive)
      (Me.append(
        $e(
          "p",
          "ar-note",
          we(
            "Never sold and never in a case: the reward of the Halloween quests, for every weapon at once.",
            "Не продаётся и не выпадает из кейсов: награда за задания Хеллоуина — сразу на всё оружие.",
          ),
        ),
      ),
        Ga() &&
          Me.append(
            Yi("ar-primary", we("Halloween quests", "Задания Хеллоуина"), () =>
              Cm(),
            ),
          ));
    else if (!ae && pe) {
      Me.append(Ag(pe.price));
      const Te = Yi("ar-primary", we("Buy", "Купить"), () => ht(pe, K));
      Me.append(Te);
    } else {
      const Te = Yi(
        "ar-primary",
        Ke ? we("✓ Equipped", "✓ Выбрано") : we("Equip", "Выбрать"),
        () => void O(K, a),
      );
      ((Te.disabled = Ke),
        Me.append(Te),
        qe &&
          pe &&
          pe.price > 0 &&
          !pe.exclusive &&
          Me.append(tt("weapon", pe, K)));
    }
    return (
      Le.append(
        Me,
        Lo(K)
          ? $e(
              "p",
              "ar-note",
              we(
                "Applies right away to every armour piece of this slot you wear, at any tier — other players see it too.",
                "Сразу применяется ко всей броне этого слота любого уровня — другие игроки тоже это видят.",
              ),
            )
          : $e(
              "p",
              "ar-note",
              we(
                "Applies to the next weapons or tools you buy in the in-game shop. The finish stays with that exact weapon — drops, trades, repairs. Press I in game to inspect.",
                "Применяется к следующему оружию или инструменту из внутриигрового магазина. Скин остаётся на этом экземпляре — при выпадении, передаче и ремонте. В игре нажми I для осмотра.",
              ),
            ),
      ),
      Le
    );
  }
  function tt(K, pe, Ae) {
    const Le = iO(pe);
    return Yi(
      "ar-ghost ar-sell",
      we(`Sell · +${Le} gold`, `Продать · +${Le} золота`),
      () => {
        l ||
          J(
            we("Sell skin?", "Продать скин?"),
            we(
              `${we(pe.name, pe.ru)}: receive ${Le} gold (80% of its store price). One copy is removed; equipped skins reset only when the last copy is sold. Existing weapons keep their finish.`,
              `${we(pe.name, pe.ru)}: вы получите ${Le} золота (80% цены в магазине). Будет продана одна копия; выбранный скин сбросится только при продаже последней. Уже созданное оружие сохранит свой вид.`,
            ),
            [
              [
                we("Sell skin", "Продать скин"),
                () =>
                  void (async () => {
                    ((await P(
                      "/me/cosmetics/sell",
                      "POST",
                      { kind: K, skin: pe.id, weapon: Ae },
                      we(
                        `Skin sold · +${Le} gold`,
                        `Скин продан · +${Le} золота`,
                      ),
                    )) && ((a = Pr(Ae ?? o)), (r = Lt.character)),
                      ve());
                  })(),
                "ar-primary",
              ],
              [we("Cancel", "Отмена"), () => {}],
            ],
          );
      },
    );
  }
  function ht(K, pe) {
    if (!qe) {
      _(
        we("Sign in to buy skins", "Войди в аккаунт, чтобы покупать скины"),
        "error",
      );
      return;
    }
    const Ae = Lt.gold >= K.price,
      Le = dn(
        "ar-sheet-summary",
        `<span style="--r:${Vs(K.rarity).color}"><small>${Ql(K.rarity)}</small><b>${Zn(pe)} | ${Jl(K)}</b></span><span class="ar-price">${xn(18)}<b>${K.price.toLocaleString()}</b></span>`,
        "div",
      );
    (Le.prepend(rl("weapon", K.id, pe, null, !0)),
      J(
        we("Confirm purchase", "Подтверди покупку"),
        Ae
          ? we(
              `Balance after purchase: ${(Lt.gold - K.price).toLocaleString()} gold`,
              `После покупки останется: ${(Lt.gold - K.price).toLocaleString()} золота`,
            )
          : we("Not enough gold.", "Недостаточно золота."),
        Ae
          ? [
              [
                we("Buy and equip", "Купить и надеть"),
                () =>
                  void (async () => {
                    (await P(
                      "/me/cosmetics/purchase",
                      "POST",
                      { kind: "weapon", skin: K.id, weapon: pe },
                      we("Purchased!", "Куплено!"),
                    )) && (ut(K.rarity), await O(pe, K.id));
                  })(),
                "ar-primary",
              ],
              [we("Cancel", "Отмена"), () => {}],
            ]
          : [[we("OK", "Понятно"), () => {}, "ar-primary"]],
        Le,
      ));
  }
  function ut(K) {
    const pe = $e("div", "ar-burst");
    (pe.style.setProperty("--r", Vs(K).color),
      s.append(pe),
      setTimeout(() => pe.remove(), 1400));
  }
  function F(K) {
    if (!p) {
      const Fe = dn(
          "ar-cases-intro",
          `<small>${we("CASES", "КЕЙСЫ")}</small><h2>${we("Open a case. Find a legend.", "Открой кейс. Найди легенду.")}</h2><p>${we("Every case drops a Military-grade or better finish on a random weapon. Duplicates stay in your inventory to sell or gift.", "Каждый кейс даёт скин армейского класса или выше на случайное оружие. Дубликаты остаются в инвентаре: их можно продать или подарить.")}</p>`,
          "div",
        ),
        Et = $e("div", "ar-case-row");
      for (const [$t, Nt] of Object.entries(Tn)) {
        const si = Yi("ar-case-card", "", () => {
          ((p = $t), ve("none"));
        });
        ((si.dataset.case = $t),
          si.style.setProperty("--c1", Nt.colors[0]),
          si.style.setProperty("--c2", Nt.colors[1]));
        const ce = $e("span", "ar-case-fan");
        (My($t)
          .sort((Qe, Ue) => Vs(Ue.rarity).tier - Vs(Qe.rarity).tier)
          .slice(0, 3)
          .forEach((Qe, Ue) => {
            const vt = rl(
              "weapon",
              Qe.id,
              (Nt.weapons ?? [257, 258, 398])[Ue % (Nt.weapons?.length ?? 3)],
            );
            (vt.style.setProperty("--i", String(Ue)), ce.append(vt));
          }),
          si.append(
            dn("ar-case-box", "<i></i>"),
            ce,
            dn(
              "ar-case-info",
              `<b>${we(Nt.name, Nt.ru)}</b><small>${we(...Nt.tagline)}</small><span class="ar-price">${xn(18)}<b>${Nt.price}</b></span>`,
            ),
          ),
          Et.append(si));
      }
      K.append(Fe, Et);
      return;
    }
    const pe = Tn[p],
      Ae = My(p).sort((Fe, Et) => Vs(Et.rarity).tier - Vs(Fe.rarity).tier),
      Le = $e("aside", "ar-case-side");
    (Le.style.setProperty("--c1", pe.colors[0]),
      Le.style.setProperty("--c2", pe.colors[1]),
      Le.append(
        Yi("ar-back", we("← All cases", "← Все кейсы"), () => {
          ((p = null), ve("none"));
        }),
        dn("ar-case-box big", "<i></i>"),
        $e("h2", "", we(pe.name, pe.ru)),
        $e("p", "", we(...pe.tagline)),
      ));
    const Ve = Lt.cases?.[p] ?? 0,
      We = Yi("ar-primary ar-case-open", "", () => void N(p, Ve > 0));
    ((We.innerHTML =
      Ve > 0
        ? `${we("Open", "Открыть")} <b>· ${we(`you have ${Ve}`, `у тебя ${Ve}`)}</b>`
        : `${we("Open for", "Открыть за")} ${xn(18)} <b>${pe.price}</b>`),
      qe || (We.disabled = !0),
      Le.append(We),
      qe ||
        Le.append(
          $e(
            "p",
            "ar-note",
            we(
              "Sign in to open cases.",
              "Войди в аккаунт, чтобы открывать кейсы.",
            ),
          ),
        ));
    const ae = $e("div", "ar-odds");
    ae.append($e("small", "", we("Drop odds", "Шансы выпадения")));
    const Ke = [...new Set(Ae.map((Fe) => Fe.rarity))],
      Me = Ke.reduce((Fe, Et) => Fe + (Qh[Et] ?? 0), 0);
    for (const Fe of Ke)
      ae.append(
        dn(
          "ar-odd",
          `<i style="background:${Vs(Fe).color}"></i><span>${Ql(Fe)}</span><b>${(((Qh[Fe] ?? 0) / Me) * 100).toFixed(2)}%</b>`,
          "div",
        ),
      );
    Le.append(
      ae,
      $e(
        "p",
        "ar-note",
        pe.weapons
          ? pe.weapons.map(Zn).join(" · ")
          : we("Weapons and explosives.", "Оружие и взрывчатка."),
      ),
    );
    const Te = $e("section", "ar-case-contents");
    Te.append(
      dn(
        "ar-title",
        `<small>${we("CONTAINS", "СОДЕРЖИМОЕ")}</small><b>${Ae.length} ${we("finishes", "скинов")}</b>`,
        "div",
      ),
    );
    const Je = $e("div", "ar-grid");
    for (const Fe of Ae)
      Je.append(
        V(Fe, pe.weapons?.[0] ?? 257, !1, () => {
          ((n = "store"),
            (o = pe.weapons?.[0] ?? 257),
            (a = Fe.id),
            ve("none"));
        }),
      );
    (Te.append(Je), K.append(Le, Te));
  }
  async function N(K, pe = !1) {
    const Ae = Tn[K];
    if (!pe && Lt.gold < Ae.price) {
      _(we("Not enough gold", "Недостаточно золота"), "error");
      return;
    }
    const Le = Lt.gold,
      Ve = await P(
        "/me/cosmetics/case",
        "POST",
        pe ? { collection: K, owned: !0 } : { collection: K },
        "",
      );
    if (!Ve?.drop) return;
    ln("case_roll");
    const We = Lt.gold;
    if (((Lt.gold = Le), j(), (Lt.gold = We), await fe(K, Ve.drop), j(), pe)) {
      const ae = s.querySelector(".ar-reveal");
      (ve(), ae && s.append(ae));
    }
  }
  function fe(K, pe) {
    return new Promise((Ae) => {
      const Le = Tn[K],
        Ve = My(K),
        We = 52,
        ae = 60,
        Ke = [...new Set(Ve.map((Ze) => Ze.rarity))],
        Me = Ke.reduce((Ze, gt) => Ze + (Qh[gt] ?? 0), 0),
        Te = () => {
          const Ze = Math.random();
          let gt = 0;
          for (const Ot of Ke)
            if (((gt += (Qh[Ot] ?? 0) / Me), Ze < gt)) {
              const Ut = Ve.filter((Qt) => Qt.rarity === Ot);
              return Ut[Math.floor(Math.random() * Ut.length)];
            }
          return Ve[0];
        },
        Je = (Le.weapons ?? [257, 258, 256, 398, 376, 375]).filter(
          (Ze) => Ze !== w.AXE,
        ),
        Fe = io(pe.skin),
        Et = Vs(Fe.rarity).tier,
        $t = Array.from({ length: ae }, (Ze, gt) =>
          gt === We
            ? { f: Fe, w: pe.weapon }
            : { f: Te(), w: Je[Math.floor(Math.random() * Je.length)] },
        ),
        Nt = Ve.filter((Ze) => Vs(Ze.rarity).tier >= 4);
      Nt.length &&
        Math.random() < 0.55 &&
        ($t[We + (Math.random() < 0.5 ? 1 : 2)] = {
          f: Nt[Math.floor(Math.random() * Nt.length)],
          w: Je[Math.floor(Math.random() * Je.length)],
        });
      const si = matchMedia("(prefers-reduced-motion: reduce)").matches,
        ce = $e("div", "ar-roll ar-open-scene");
      (ce.style.setProperty("--c1", Le.colors[0]),
        ce.style.setProperty("--c2", Le.colors[1]),
        si && ce.classList.add("calm"));
      const Se = dn(
          "ar-roll-title",
          `<small>${we("OPENING", "ОТКРЫВАЕМ")}</small><b>${we(Le.name, Le.ru)}</b>`,
          "div",
        ),
        Qe = $e("div", "ar-case-stage"),
        Ue = $e("div", "ar-case-3d");
      (Ue.append(
        $e("span", "ar-case-lid"),
        $e("span", "ar-case-body"),
        $e("span", "ar-case-seam"),
        $e("i", "ar-latch l"),
        $e("i", "ar-latch r"),
      ),
        Qe.append($e("span", "ar-case-glow"), Ue, $e("span", "ar-case-floor")));
      const vt = $e("div", "ar-roll-frame"),
        X = $e("div", "ar-roll-strip");
      for (const Ze of $t) {
        const gt = $e("div", "ar-roll-item");
        (gt.style.setProperty("--r", Vs(Ze.f.rarity).color),
          gt.append(
            rl("weapon", Ze.f.id, Ze.w),
            $e("b", "", Jl(Ze.f)),
            $e("small", "", Zn(Ze.w)),
          ),
          X.append(gt));
      }
      vt.append(X, $e("i", "ar-roll-marker"));
      const _e = Yi("ar-ghost ar-roll-skip", we("Skip", "Пропустить"), () =>
        xe(),
      );
      ((_e.dataset.sound = "back"),
        ce.append($e("span", "ar-scene-tint"), Se, Qe, vt, _e),
        s.append(ce));
      const je = 172,
        ft = X.children;
      let Pt = !1,
        Ft = 0,
        Ri = -1,
        gi = 0,
        Be = 0,
        yt = 0;
      const xt = [],
        $ = (Ze, gt) => {
          xt.push(
            window.setTimeout(() => {
              Pt || gt();
            }, Ze),
          );
        };
      ([180, 520, 820].forEach((Ze, gt) =>
        $(Ze, () => {
          (Ue.classList.remove("shake"),
            Ue.offsetWidth,
            Ue.classList.add("shake"),
            Ue.style.setProperty(
              "--amp",
              String(si ? 0.3 + gt * 0.15 : 1 + gt * 0.6),
            ),
            qs("caseShake", gt));
        }),
      ),
        $(1180, () => {
          (Ue.classList.add("unlatched"), qs("caseUnlock"));
        }),
        $(1650, () => {
          (Ue.classList.add("open"), Qe.classList.add("burst"), qs("caseOpen"));
        }),
        $(2250, Ee));
      function Ee() {
        (ce.classList.add("reeling"),
          (yt =
            We * je +
            je / 2 -
            vt.clientWidth / 2 +
            (Math.random() - 0.5) * je * 0.78));
        const Ze = 7600,
          gt = performance.now() + 380,
          Ot = (Qt) => 1 - Math.pow(1 - Qt, 4.6),
          Ut = (Qt) => {
            if (Pt) return;
            const di = Math.max(0, Math.min(1, (Qt - gt) / Ze)),
              Yt = yt * Ot(di);
            X.style.transform = `translate3d(${-Yt}px,0,0)`;
            const ei = Math.floor((Yt + vt.clientWidth / 2) / je);
            if (ei !== Ri && di > 0) {
              const es = Be
                ? Math.min(1, Math.abs(Yt - gi) / Math.max(1, Qt - Be) / 3.2)
                : 1;
              (ft[Ri]?.classList.remove("hot"),
                ft[ei]?.classList.add("hot"),
                (Ri = ei),
                qs("reelTick", es),
                di > 0.55 &&
                  ce.style.setProperty(
                    "--live",
                    Vs($t[ei]?.f.rarity ?? "common").color,
                  ));
            }
            ((gi = Yt),
              (Be = Qt),
              di < 1 ? (Ft = requestAnimationFrame(Ut)) : Pe());
          };
        Ft = requestAnimationFrame(Ut);
      }
      function Pe() {
        if (!Pt) {
          ((Pt = !0),
            cancelAnimationFrame(Ft),
            xt.forEach(clearTimeout),
            ce.classList.add("landed"),
            (X.style.transform = `translate3d(${-yt}px,0,0)`));
          for (const Ze of Array.from(ft)) Ze.classList.remove("hot");
          (ft[We]?.classList.add("won"),
            ce.style.setProperty("--live", Vs(Fe.rarity).color),
            qs("reelStop"),
            setTimeout(() => lT(Et), 120),
            Et >= 3 && ce.classList.add("rare"),
            setTimeout(
              () => {
                ce.classList.add("out");
              },
              900 + Et * 120,
            ),
            setTimeout(
              () => {
                (ce.remove(), De(pe), Ae());
              },
              1150 + Et * 120,
            ));
        }
      }
      function xe(Ze) {
        Pt ||
          (ce.classList.contains("reeling") ||
            (xt.forEach(clearTimeout),
            (xt.length = 0),
            Ue.classList.add("unlatched", "open"),
            Qe.classList.add("burst"),
            ce.classList.add("reeling"),
            (yt =
              We * je +
              je / 2 -
              vt.clientWidth / 2 +
              (Math.random() - 0.5) * je * 0.78)),
          qs("click"),
          Pe());
      }
      ce.addEventListener("pointerdown", (Ze) => {
        (Ze.target === ce || Ze.target === Qe) && xe();
      });
    });
  }
  function De(K) {
    const pe = io(K.skin),
      Ae = Vs(pe.rarity);
    ut(pe.rarity);
    const Le = $e("div", "ar-sheet ar-reveal"),
      Ve = $e("div", "ar-sheet-card");
    (Ve.style.setProperty("--r", Ae.color),
      Ve.append(
        dn("ar-reveal-ray", "", "div"),
        rl("weapon", pe.id, K.weapon, null, !0),
      ),
      Ve.append(
        $e("small", "ar-rarity", Ql(pe.rarity)),
        $e("h3", "", `${Zn(K.weapon)} | ${Jl(pe)}`),
      ),
      Ve.append(
        $e(
          "p",
          "",
          K.duplicate
            ? we(
                "Another copy added to your inventory. Sell it or send it to a friend.",
                "Ещё одна копия в инвентаре. Продай её или отправь другу.",
              )
            : we("Added to your collection.", "Добавлено в коллекцию."),
        ),
      ));
    const We = $e("div", "ar-sheet-actions");
    We.append(
      Yi(
        "ar-primary",
        we(`Equip on ${Zn(K.weapon)}`, `Надеть на ${Zn(K.weapon)}`),
        () => {
          (Le.remove(), O(K.weapon, pe.id));
        },
      ),
    );
    const ae = Lt.cases?.[K.collection] ?? 0;
    (We.append(
      Yi(
        "ar-ghost",
        ae > 0
          ? we(`Open another · ${ae} left`, `Открыть ещё · осталось ${ae}`)
          : we("Open another", "Открыть ещё"),
        () => {
          (Le.remove(), N(K.collection, ae > 0));
        },
      ),
    ),
      We.append(Yi("ar-ghost", we("Close", "Закрыть"), () => Le.remove())),
      Ve.append(We),
      Le.append(Ve),
      s.append(Le));
  }
  function Xe(K) {
    const pe = $e("section", "ar-inventory"),
      Ae = new Map();
    for (const ae of Lt.owned) Ae.set(ae, (Ae.get(ae) ?? 0) + 1);
    pe.append(
      $e("h2", "", we("Your inventory", "Твой инвентарь")),
      $e(
        "p",
        "ar-note",
        we(
          "All your paid skins. Each sale or gift transfers one copy.",
          "Все твои платные скины. При продаже или подарке списывается одна копия.",
        ),
      ),
    );
    const Le = _T();
    if (Le.length) {
      const ae = $e("div", "ar-owned-cases");
      for (const [Ke, Me] of Le) {
        const Te = Tn[Ke],
          Je = $e("article", "ar-owned-case");
        ((Je.dataset.case = Ke),
          Je.style.setProperty("--c1", Te.colors[0]),
          Je.style.setProperty("--c2", Te.colors[1]));
        const Fe = Yi(
          "ar-primary ar-case-open",
          we("Open", "Открыть"),
          () => void N(Ke, !0),
        );
        (Je.append(
          dn("ar-case-box", "<i></i>"),
          $e("span", "ar-copy-count", `×${Me}`),
          dn("ar-owned-case-info", `<b>${we(Te.name, Te.ru)}</b>`),
          Fe,
        ),
          ae.append(Je));
      }
      pe.append(
        dn(
          "ar-title",
          `<small>${we("READY TO OPEN", "ГОТОВЫ К ОТКРЫТИЮ")}</small><b>${we("Your cases", "Твои кейсы")}</b>`,
          "div",
        ),
        ae,
      );
    }
    const Ve = $e("div", "ar-inventory-grid");
    let We = 0;
    for (const [ae, Ke] of Ae) {
      const [Me, Te, Je] = ae.split(":"),
        Fe = Me === "weapon" ? Number(Te) : 257,
        Et = Me === "weapon" ? Je : Te,
        $t = Me === "weapon" ? io(Et) : H0.find((Qe) => Qe.id === Et);
      if (
        (Me !== "weapon" && Me !== "character") ||
        !$t ||
        $t.price <= 0 ||
        (Me === "weapon" && !bu(Fe))
      )
        continue;
      We += Ke;
      const Nt = $e("article", "ar-inventory-card");
      ((Nt.dataset.key = ae), Nt.style.setProperty("--r", Vs($t.rarity).color));
      const si = Me === "weapon" ? Pr(Fe) === Et : Lt.character === Et;
      Nt.append(
        rl(Me, Et, Fe),
        $e("span", "ar-copy-count", `×${Ke}`),
        $e("small", "ar-rarity", Ql($t.rarity)),
        $e("h3", "", we($t.name, $t.ru)),
        $e(
          "p",
          "ar-note",
          Me === "weapon" ? Zn(Fe) : we("Operator", "Персонаж"),
        ),
      );
      const ce = $e("div", "ar-inventory-actions"),
        Se = Yi(
          "ar-ghost",
          si ? we("✓ Equipped", "✓ Выбрано") : we("Equip", "Выбрать"),
          () => void (Me === "weapon" ? O(Fe, Et) : U(Et)),
        );
      ((Se.disabled = si),
        $t.exclusive
          ? ce.append(Se)
          : ce.append(
              Se,
              tt(Me, $t, Me === "weapon" ? Fe : void 0),
              Yi(
                "ar-ghost ar-gift",
                we("Send to friend", "Отправить другу"),
                () => void et(Me, $t, Me === "weapon" ? Fe : void 0),
              ),
            ),
        Nt.append(ce),
        Ve.append(Nt));
    }
    (We &&
      pe.append(
        $e(
          "p",
          "ar-inventory-total",
          we(`${We} items · ${Ae.size} types`, `${We} предметов`),
        ),
      ),
      pe.append(Ve),
      !We &&
        !Le.length &&
        pe.append(
          $e(
            "p",
            "ar-empty",
            qe
              ? we(
                  "Your inventory is empty. Buy a skin or open a case.",
                  "Инвентарь пуст. Купи скин или открой кейс.",
                )
              : we(
                  "Sign in to see your inventory.",
                  "Войди в аккаунт, чтобы увидеть инвентарь.",
                ),
          ),
        ),
      K.append(pe));
  }
  async function et(K, pe, Ae) {
    if (l || !qe) return;
    const Le = qe.id;
    ((l = !0), _(we("Loading friends…", "Загружаю друзей…")));
    try {
      const Ve = await Vi("/me/friends");
      if (qe?.id !== Le || !s.open) return;
      if (!Ve.friends.length) {
        _(
          we(
            "Add and accept a friend first.",
            "Сначала добавь друга и дождись принятия заявки.",
          ),
          "info",
        );
        return;
      }
      const We = $e("select", "ar-search");
      We.setAttribute("aria-label", we("Friend", "Друг"));
      for (const ae of Ve.friends) {
        const Ke = $e("option", "", ae.username);
        ((Ke.value = ae.username), We.append(Ke));
      }
      (_(""),
        J(
          we("Send one skin", "Отправить один скин"),
          we(
            `${we(pe.name, pe.ru)} — one copy will move to your friend’s inventory.`,
            `${we(pe.name, pe.ru)} — одна копия перейдёт в инвентарь друга.`,
          ),
          [
            [
              we("Send gift", "Отправить подарок"),
              () =>
                void (async () => {
                  (await P(
                    "/me/cosmetics/gift",
                    "POST",
                    { kind: K, skin: pe.id, weapon: Ae, friend: We.value },
                    we("Gift sent", "Подарок отправлен"),
                  ),
                    ve());
                })(),
              "ar-primary",
            ],
            [we("Cancel", "Отмена"), () => {}],
          ],
          We,
        ));
    } catch (Ve) {
      _(Ve instanceof Error ? Ve.message : String(Ve), "error");
    } finally {
      l = !1;
    }
  }
  function Mt(K) {
    const pe = $e("section", "ar-loadout");
    pe.append(
      dn(
        "ar-title",
        `<small>${we("YOUR LOADOUT", "ТВОЁ СНАРЯЖЕНИЕ")}</small><b>${we("Choose a finish for every weapon", "Выбери скин для каждого оружия")}</b>`,
        "div",
      ),
    );
    for (const Ke of R_) {
      pe.append($e("h4", "", we(Ke.en, Ke.ru)));
      const Me = $e("div", "ar-slots");
      for (const Te of Ke.items.filter(bu)) {
        const Je = io(Pr(Te)),
          Fe = Vs(Je ? Je.rarity : "common"),
          Et = Yi("ar-slot" + (Te === m ? " active" : ""), "", () => {
            ((m = Te), (a = Pr(Te)), ve("nav"));
          });
        (Et.style.setProperty("--r", Fe.color),
          (Et.dataset.weapon = String(Te)),
          Et.append(
            rl("weapon", Je?.id ?? "", Te),
            dn("ar-slot-info", `<b>${Zn(Te)}</b><small>${Jl(Je)}</small>`),
          ),
          Me.append(Et));
      }
      pe.append(Me);
    }
    const Ae = $e("aside", "ar-loadout-side"),
      Le = [null, ...rd.filter((Ke) => wu(m, Ke.id))];
    Ae.append(
      dn(
        "ar-title",
        `<small>${we("OWNED FINISHES", "ТВОИ СКИНЫ")}</small><b>${Zn(m)}</b>`,
        "div",
      ),
    );
    const Ve = $e("div", "ar-owned-list"),
      We = Yi("ar-primary ar-wide", "", () => void O(m, a)),
      ae = () => {
        ((We.disabled = Pr(m) === a),
          (We.textContent = We.disabled
            ? we("✓ Equipped", "✓ Выбрано")
            : we("Equip", "Выбрать")));
      };
    ae();
    for (const Ke of Le)
      Ve.append(
        V(Ke, m, (Ke?.id ?? "") === a, () => {
          ((a = Ke?.id ?? ""),
            Ce(),
            ae(),
            Ve.querySelectorAll(".ar-card").forEach((Me) =>
              Me.classList.toggle("selected", Me.dataset.skin === a),
            ));
        }),
      );
    (Ae.append(
      Ve,
      We,
      Yi(
        "ar-ghost ar-wide",
        we(
          `Browse ${Zn(m)} finishes in the store →`,
          `Скины для ${Zn(m)} в магазине →`,
        ),
        () => {
          ((n = "store"), (o = m), ve("none"));
        },
      ),
    ),
      K.append(pe, Ae, ze(m)));
  }
  function pt(K) {
    const pe = $e("section", "ar-market");
    pe.append(
      dn(
        "ar-title",
        `<small>${we("OPERATORS", "ПЕРСОНАЖИ")}</small><b>${we("Your identity on every server", "Твой образ на всех серверах")}</b>`,
        "div",
      ),
    );
    const Ae = $e("div", "ar-grid ar-grid-chars"),
      Le = [...H0];
    (Lt.custom &&
      Le.unshift({
        id: "custom",
        name: "Your Creation",
        ru: "Твоё творение",
        rarity: "common",
        price: 0,
      }),
      Le.sort(
        (We, ae) =>
          Vs(ae.rarity).tier - Vs(We.rarity).tier || ae.price - We.price,
      ));
    for (const We of Le) {
      const ae = Vs(We.rarity),
        Ke = Yi(
          "ar-card ar-char" + (We.id === r ? " selected" : ""),
          "",
          () => {
            ((r = We.id),
              Ve(),
              Ae.querySelectorAll(".ar-card").forEach((Fe) =>
                Fe.classList.toggle("selected", Fe.dataset.skin === r),
              ));
          },
        );
      ((Ke.dataset.skin = We.id), Ke.style.setProperty("--r", ae.color));
      const Me = dk(We.id),
        Te = Lt.character === We.id;
      Ke.append(
        $e("span", "ar-card-bg"),
        rl("character", We.id, 257, Lt.custom),
      );
      const Je = $e("span", "ar-card-info");
      (Je.append(
        $e("small", "", Ql(We.rarity)),
        $e("b", "", we(We.name, We.ru)),
      ),
        Je.append(
          Te
            ? $e("em", "ar-equipped", we("✓ Equipped", "✓ Выбран"))
            : Me
              ? $e(
                  "em",
                  "ar-owned",
                  We.price ? we("Owned", "Куплен") : we("Free", "Бесплатно"),
                )
              : Ag(We.price),
        ),
        Ke.append(Je),
        Ae.append(Ke));
    }
    if ((pe.append(Ae), Ga() || WS.some((We) => H(We.id)))) {
      const We = $e("div", "ar-hats");
      We.append(
        dn(
          "ar-title",
          `<small>${we("HEAD · HALLOWEEN 2026", "ГОЛОВА · ХЕЛЛОУИН 2026")}</small><b>${we("Hats", "Шапки")}</b>`,
          "div",
        ),
      );
      const ae = $e("div", "ar-hat-row"),
        Ke = B(),
        Me = Yi("ar-hat" + (Ke ? "" : " selected"), "", () => void D(""));
      (Me.append(
        dn("ar-hat-none", "∅"),
        $e("b", "", we("No hat", "Без шапки")),
      ),
        (Me.disabled = !Ke || !qe),
        ae.append(Me));
      for (const Te of WS) {
        const Je = H(Te.id),
          Fe = sf.find(($t) => $t.reward.hat === Te.id)?.day ?? 1,
          Et = Yi(
            "ar-hat" +
              (Ke === Te.id ? " selected" : "") +
              (Je ? "" : " locked"),
            "",
            () => {
              Je ? D(Te.id) : Cm();
            },
          );
        (Et.style.setProperty("--r", Te.color),
          (Et.dataset.hat = Te.id),
          Et.append(
            rl(
              "hat",
              Te.id,
              257,
              Lt.character === "custom" ? "ranger" : Lt.character,
            ),
            $e("b", "", we(Te.en, Te.ru)),
            $e(
              "em",
              Je ? (Ke === Te.id ? "ar-equipped" : "ar-owned") : "ar-earned",
              Je
                ? Ke === Te.id
                  ? we("✓ Worn", "✓ Надета")
                  : we("Wear", "Надеть")
                : we(`Quest day ${Fe}`, `Задание дня ${Fe}`),
            ),
          ),
          ae.append(Et));
      }
      (We.append(ae),
        Ga() &&
          We.append(
            $e(
              "p",
              "ar-note",
              we(
                "Until 2 November everyone in the game wears a pumpkin head — helmets still protect underneath. A witch hat shows instead.",
                "До 2 ноября у всех в игре тыквенная голова — шлем под ней защищает как обычно. Ведьмина шляпа видна вместо неё.",
              ),
            ),
          ),
        pe.append(We));
    }
    K.append(pe, At());
    function Ve() {
      (s.querySelector(".ar-inspect")?.replaceWith(At()), it());
    }
  }
  function At() {
    const K = H0.find((Me) => Me.id === r),
      pe = Vs(K?.rarity ?? "common"),
      Ae = $e("aside", "ar-inspect ar-inspect-char");
    Ae.style.setProperty("--r", pe.color);
    const Le = $e("div", "ar-stage tall");
    (Le.append(
      x,
      $e("span", "ar-stage-hint", we("Drag to rotate", "Тяни, чтобы вращать")),
    ),
      Ae.append(Le));
    const Ve = $e("div", "ar-inspect-title");
    (Ve.append(
      $e("small", "ar-rarity", Ql(K?.rarity ?? "common")),
      $e("h2", "", K ? we(K.name, K.ru) : we("Your Creation", "Твоё творение")),
    ),
      Ae.append(Ve),
      Ae.append(
        $e(
          "p",
          "ar-desc",
          we(
            "Visible to everyone on every server. In game it applies instantly — no respawn needed.",
            "Видно всем игрокам на всех серверах. В игре применяется сразу, без возрождения.",
          ),
        ),
      ));
    const We = dk(r),
      ae = Lt.character === r,
      Ke = $e("div", "ar-actions");
    if (!We && K)
      Ke.append(
        Ag(K.price),
        Yi("ar-primary", we("Buy", "Купить"), () => {
          if (!qe) {
            _(
              we(
                "Sign in to buy skins",
                "Войди в аккаунт, чтобы покупать скины",
              ),
              "error",
            );
            return;
          }
          const Me = Lt.gold >= K.price;
          J(
            we("Confirm purchase", "Подтверди покупку"),
            Me
              ? `${we(K.name, K.ru)} · ${K.price} ${we("gold", "золота")}`
              : we("Not enough gold.", "Недостаточно золота."),
            Me
              ? [
                  [
                    we("Buy and equip", "Купить и надеть"),
                    () =>
                      void (async () => {
                        (await P(
                          "/me/cosmetics/purchase",
                          "POST",
                          { kind: "character", skin: K.id },
                          we("Purchased!", "Куплено!"),
                        )) && (ut(K.rarity), await U(K.id));
                      })(),
                    "ar-primary",
                  ],
                  [we("Cancel", "Отмена"), () => {}],
                ]
              : [[we("OK", "Понятно"), () => {}, "ar-primary"]],
          );
        }),
      );
    else {
      const Me = Yi(
        "ar-primary",
        ae ? we("✓ Equipped", "✓ Выбран") : we("Equip", "Выбрать"),
        () => void U(r),
      );
      ((Me.disabled = ae), Ke.append(Me));
    }
    return (
      We && qe && K && K.price > 0 && Ke.append(tt("character", K)),
      We &&
        Ke.append(
          Yi("ar-ghost", we("Edit a copy", "Редактировать копию"), () => {
            ((M = r === "custom" ? (Lt.custom ?? Sy("ranger")) : Sy(r)),
              (E = ""),
              (A = []),
              (T = []),
              (n = "editor"),
              ee(),
              ve("none"));
          }),
        ),
      Ae.append(Ke),
      Ae
    );
  }
  function ee() {
    localStorage.setItem("vr-skin-draft", M);
  }
  function te() {
    if (M) return;
    const K = localStorage.getItem("vr-skin-draft");
    ((M = sO(K) ? K : (Lt.custom ?? Sy(Lt.character))), (E = Lt.custom ?? M));
  }
  function He(K) {
    let pe = 0,
      Ae = 5,
      Le = 10,
      Ve = "brush",
      We = !1,
      ae = !0,
      Ke = !1,
      Me = null;
    const Te = $e("section", "ar-workshop");
    Te.append(
      dn(
        "ar-title",
        `<small>${we("WORKSHOP / PIXEL STUDIO", "МАСТЕРСКАЯ / ПИКСЕЛЬНАЯ СТУДИЯ")}</small><b>${we("Every pixel is yours", "Каждый пиксель — твой")}</b>`,
        "div",
      ),
    );
    const Je = $e("div", "ar-seg"),
      Fe = $e("div", "ar-seg"),
      Et = (Be, yt, xt, $) => {
        yt.forEach((de, Ee) => {
          const Pe = Yi(
            "ar-seg-btn" + (xt() === Ee ? " active" : ""),
            de,
            () => {
              ($(Ee),
                Be.querySelectorAll("button").forEach((xe, Ze) =>
                  xe.classList.toggle("active", Ze === Ee),
                ),
                Pt());
            },
          );
          Be.append(Pe);
        });
      };
    (Et(
      Je,
      [
        we("Head", "Голова"),
        we("Torso", "Торс"),
        we("L arm", "Л. рука"),
        we("R arm", "П. рука"),
        we("L leg", "Л. нога"),
        we("R leg", "П. нога"),
      ],
      () => pe,
      (Be) => (pe = Be),
    ),
      Et(
        Fe,
        [
          we("Right", "Справа"),
          we("Left", "Слева"),
          we("Top", "Сверху"),
          we("Bottom", "Снизу"),
          we("Back", "Сзади"),
          we("Front", "Спереди"),
        ],
        () => Ae,
        (Be) => (Ae = Be),
      ));
    const $t = $e("div", "ar-toolbar");
    for (const [Be, yt, xt] of [
      ["brush", "✎ Brush", "✎ Кисть"],
      ["fill", "▣ Fill", "▣ Заливка"],
      ["pick", "⌖ Pick", "⌖ Пипетка"],
    ]) {
      const $ = Yi(
        "ar-seg-btn" + (Ve === Be ? " active" : ""),
        we(yt, xt),
        () => {
          ((Ve = Be),
            $t
              .querySelectorAll("[data-tool]")
              .forEach((de) =>
                de.classList.toggle("active", de.dataset.tool === Be),
              ));
        },
      );
      (($.dataset.tool = Be), $t.append($));
    }
    const Nt = Yi("ar-seg-btn", "↶", () => {
      A.length && (T.push(M), (M = A.pop()), Ft());
    });
    Nt.setAttribute("aria-label", we("Undo", "Отменить"));
    const si = Yi("ar-seg-btn", "↷", () => {
      T.length && (A.push(M), (M = T.pop()), Ft());
    });
    si.setAttribute("aria-label", we("Redo", "Повторить"));
    const ce = Yi("ar-seg-btn", we("⇆ Mirror", "⇆ Симметрия"), () => {
      ((We = !We), ce.classList.toggle("active", We));
    });
    $t.append(
      Nt,
      si,
      ce,
      Yi("ar-seg-btn", we("Grid", "Сетка"), () => {
        ((ae = !ae), Pt());
      }),
    );
    const Se = $e("div", "ar-paint"),
      Qe = $e("canvas");
    ((Qe.id = "skin-paint"),
      (Qe.width = Qe.height = 384),
      Qe.setAttribute(
        "aria-label",
        we(
          "Paint the selected body face, 8 by 8 pixels",
          "Рисование выбранной стороны, 8 на 8 пикселей",
        ),
      ),
      Se.append(Qe));
    const Ue = $e("div", "ar-palette");
    for (const [Be, yt] of D0.entries()) {
      const xt = Yi("", "", () => {
        ((Le = Be),
          Ue.querySelectorAll("button").forEach(($, de) =>
            $.classList.toggle("active", de === Be),
          ));
      });
      ((xt.style.background = yt),
        (xt.title = yt),
        xt.setAttribute("aria-label", yt),
        xt.classList.toggle("active", Be === Le),
        Ue.append(xt));
    }
    const vt = $e("div", "ar-toolbar");
    (vt.append(
      Yi("ar-primary", we("Save & equip", "Сохранить и надеть"), () => {
        qe
          ? P(
              "/me/cosmetics/custom",
              "PUT",
              { pixels: M },
              we(
                "Saved — applied in game right away",
                "Сохранено — сразу применится в игре",
              ),
            )
          : ((E = M),
            C({ ...Lt, custom: M, character: "custom" }),
            _(
              we(
                "Saved on this device. Sign in to sync across servers.",
                "Сохранено на устройстве. Войди, чтобы синхронизировать между серверами.",
              ),
              "success",
            ));
      }),
    ),
      vt.append(
        Yi("ar-ghost", we("Export PNG", "Скачать PNG"), () => {
          const Be = $e("a");
          ((Be.download = "voxel-rush-skin.png"),
            (Be.href = dO(M).toDataURL()),
            Be.click());
        }),
      ));
    const X = $e("input");
    ((X.type = "file"),
      (X.accept = "image/png"),
      (X.hidden = !0),
      (X.onchange = async () => {
        const Be = X.files?.[0];
        if (Be) {
          try {
            if (Be.size > 1e6)
              throw Error(
                we("PNG must be under 1 MB", "PNG должен быть меньше 1 МБ"),
              );
            const yt = await createImageBitmap(Be);
            if (yt.width !== 48 || yt.height !== 48)
              throw (
                yt.close(),
                Error(
                  we(
                    "Use a 48 × 48 skin atlas exported by this editor.",
                    "Нужна развёртка 48 × 48 из этого редактора.",
                  ),
                )
              );
            const xt = $e("canvas");
            xt.width = xt.height = 48;
            const $ = xt.getContext("2d");
            ($.drawImage(yt, 0, 0), yt.close());
            const de = $.getImageData(0, 0, 48, 48).data,
              Ee = D0.map((Pe) =>
                [1, 3, 5].map((xe) => parseInt(Pe.slice(xe, xe + 2), 16)),
              );
            (ft(),
              (M = Array.from({ length: 2304 }, (Pe, xe) => {
                let Ze = 0,
                  gt = 1 / 0;
                return (
                  Ee.forEach((Ot, Ut) => {
                    const Qt = Ot.reduce(
                      (di, Yt, ei) => di + (Yt - de[xe * 4 + ei]) ** 2,
                      0,
                    );
                    Qt < gt && ((gt = Qt), (Ze = Ut));
                  }),
                  Ze.toString(32)
                );
              }).join("")),
              Ft());
          } catch (yt) {
            _(String(yt instanceof Error ? yt.message : yt), "error");
          }
          X.value = "";
        }
      }),
      vt.append(
        X,
        Yi("ar-ghost", we("Import PNG", "Импорт PNG"), () => X.click()),
      ),
      Te.append(
        $e("small", "ar-label", we("Body part", "Часть тела")),
        Je,
        $e("small", "ar-label", we("Side", "Сторона")),
        Fe,
        $t,
        Se,
        Ue,
        vt,
        $e(
          "p",
          "ar-note",
          we(
            "Brush, fill, eyedropper, symmetry, undo. Drafts save automatically.",
            "Кисть, заливка, пипетка, симметрия, отмена. Черновик сохраняется автоматически.",
          ),
        ),
      ));
    const _e = $e("aside", "ar-inspect ar-inspect-char");
    _e.style.setProperty("--r", "#e4ae39");
    const je = $e("div", "ar-stage tall");
    (je.append(
      x,
      $e(
        "span",
        "ar-stage-hint",
        we("Live · drag to rotate", "Онлайн · тяни для вращения"),
      ),
    ),
      _e.append(
        je,
        dn(
          "ar-inspect-title",
          `<small class="ar-rarity">${we("CUSTOM", "СВОЙ")}</small><h2>${we("Your Creation", "Твоё творение")}</h2>`,
          "div",
        ),
      ),
      K.append(Te, _e));
    function ft() {
      (A.push(M), A.length > 50 && A.shift(), (T = []));
    }
    function Pt() {
      const Be = Qe.getContext("2d");
      for (let yt = 0; yt < 8; yt++)
        for (let xt = 0; xt < 8; xt++)
          ((Be.fillStyle =
            D0[parseInt(M[(pe * 8 + yt) * 48 + Ae * 8 + xt], 32)]),
            Be.fillRect(xt * 48, yt * 48, 48, 48));
      if (ae) {
        ((Be.strokeStyle = "#ffffff30"), (Be.lineWidth = 1));
        for (let yt = 0; yt <= 8; yt++)
          (Be.beginPath(),
            Be.moveTo(yt * 48, 0),
            Be.lineTo(yt * 48, 384),
            Be.moveTo(0, yt * 48),
            Be.lineTo(384, yt * 48),
            Be.stroke());
      }
    }
    function Ft() {
      (ee(), Pt(), g?.showCharacter("custom", M));
    }
    function Ri(Be, yt) {
      const xt = M.split(""),
        $ = (Pe, xe) => (pe * 8 + xe) * 48 + Ae * 8 + Pe,
        de = xt[$(Be, yt)];
      if (Ve === "pick") {
        ((Le = parseInt(de, 32)),
          Ue.querySelectorAll("button").forEach((Pe, xe) =>
            Pe.classList.toggle("active", xe === Le),
          ));
        return;
      }
      const Ee = Le.toString(32);
      if (Ve === "fill") {
        const Pe = [[Be, yt]],
          xe = new Set();
        for (; Pe.length;) {
          const [Ze, gt] = Pe.pop();
          Ze < 0 ||
            Ze > 7 ||
            gt < 0 ||
            gt > 7 ||
            xe.has($(Ze, gt)) ||
            xt[$(Ze, gt)] !== de ||
            (xe.add($(Ze, gt)),
            (xt[$(Ze, gt)] = Ee),
            Pe.push([Ze - 1, gt], [Ze + 1, gt], [Ze, gt - 1], [Ze, gt + 1]));
        }
      } else ((xt[$(Be, yt)] = Ee), We && (xt[$(7 - Be, yt)] = Ee));
      M = xt.join("");
    }
    function gi(Be) {
      const yt = Qe.getBoundingClientRect(),
        xt = Math.max(
          0,
          Math.min(7, Math.floor(((Be.clientX - yt.left) / yt.width) * 8)),
        ),
        $ = Math.max(
          0,
          Math.min(7, Math.floor(((Be.clientY - yt.top) / yt.height) * 8)),
        );
      if (Me && Ve === "brush") {
        const [de, Ee] = Me,
          Pe = Math.max(Math.abs(xt - de), Math.abs($ - Ee));
        for (let xe = 0; xe <= Pe; xe++)
          Ri(
            Math.round(de + ((xt - de) * xe) / (Pe || 1)),
            Math.round(Ee + (($ - Ee) * xe) / (Pe || 1)),
          );
      } else Ri(xt, $);
      ((Me = [xt, $]), Ft());
    }
    ((Qe.onpointerdown = (Be) => {
      (Be.preventDefault(),
        ft(),
        (Ke = !0),
        (Me = null),
        Qe.setPointerCapture(Be.pointerId),
        gi(Be));
    }),
      (Qe.onpointermove = (Be) => {
        Ke && gi(Be);
      }),
      (Qe.onpointerup = Qe.onpointercancel =
        () => {
          ((Ke = !1), (Me = null));
        }),
      Pt());
  }
  return {
    async open(K, pe) {
      ((S = document.activeElement),
        (n = K),
        (p = null),
        (R.textContent = ""),
        pe && bu(pe) && Pf.includes(pe) && ((o = pe), (m = pe)));
      try {
        await t3();
      } catch (Ae) {
        _(String(Ae instanceof Error ? Ae.message : Ae), "error");
      }
      ((a = Pr(n === "loadout" ? m : o)),
        (r = Lt.character),
        n === "editor" && te(),
        ve("none"),
        s.open || s.showModal(),
        requestAnimationFrame(it),
        (b = performance.now()),
        cancelAnimationFrame(y),
        (y = requestAnimationFrame(st)),
        window.dispatchEvent(new Event("armory-opened")));
    },
    get isOpen() {
      return s.open;
    },
    openOwned(K) {
      (Lt.cases?.[K] ?? 0) > 0 && N(K, !0);
    },
  };
}
