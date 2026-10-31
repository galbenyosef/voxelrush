// index-BeUlFSPp 93 — add
// Lines 58407-58755 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function GX(s) {
  if (La(s)) {
    const i = new re(),
      n = LO(s);
    (n.scale.setScalar(0.42), (n.rotation.y = -0.3), i.add(n));
    const o = new Xt();
    return (i.add(o), Hs(i, o, null, null));
  }
  const e = W0(s);
  if (e) {
    const i = wY(e),
      n = new Xt();
    return (i.add(n), Hs(i, n, null, null));
  }
  const t = ai(s);
  if (t) {
    const i = so(s);
    switch (t) {
      case w.AK47:
        return wR(i);
      case w.GLOCK:
        return MR(i);
      case w.AWP:
        return SR(i);
      case w.SHOTGUN:
        return TR(i);
      case w.DEAGLE:
        return gX(i);
      case w.M4A1:
        return yX(i);
      case w.VECTOR:
        return bX(i);
    }
  }
  switch (s) {
    case w.MILITARY_MEDKIT: {
      const i = new re(),
        n = RO(s);
      (n.scale.setScalar(0.7), n.rotation.set(0.12, -0.35, -0.08), i.add(n));
      const o = new Xt();
      return (i.add(o), Hs(i, o, null, null));
    }
    case w.AMMO_9MM:
    case w.AMMO_762:
    case w.AMMO_338:
    case w.AMMO_50AE:
    case w.AMMO_556:
      return FX(s);
    case w.FLASHLIGHT: {
      const i = new re(),
        n = J0(0, 0, -0.08);
      (n.scale.setScalar(1.9),
        (n.rotation.x = -0.12),
        i.add(n),
        _i(i, "hand-r", 0, -0.004, -0.02),
        (i.getObjectByName("hand-r").userData.along = !0));
      const o = new Xt();
      return (o.position.set(0, 0, -0.18), i.add(o), Hs(i, o, null, null));
    }
    case w.MINIGUN:
      return zX();
    case w.SHOTGUN:
      return TR();
    case w.AMMO_762_HE:
    case w.AMMO_338_HE:
    case w.AMMO_SHELL:
    case w.AMMO_SHELL_HE:
      return UX(s);
    case w.AK47:
      return wR();
    case w.GLOCK:
      return MR();
    case w.AWP:
      return SR();
    case w.RPG:
      return SX();
    case w.GRENADE_LAUNCHER:
      return wX();
    case w.AMMO_40MM:
      return MX();
    case w.C4:
    case w.DETONATOR: {
      const i = new re(),
        n = GA(s === w.DETONATOR);
      (n.scale.setScalar(0.65), i.add(n));
      const o = new Xt();
      return (i.add(o), Hs(i, o, null, null));
    }
    case w.GRENADE:
      return EX();
    case w.AXE:
      return ER();
    case w.COMBAT_KNIFE:
      return AX();
    case w.RADIO_MODULE: {
      const i = new re();
      i.scale.setScalar(0.75);
      const n = (a, r, l, c, h, d, u) => {
        const f = new Q(new kt(c, h, d), new Pi({ color: u }));
        (f.position.set(a, r, l), i.add(f));
      };
      (n(0, 0, 0, 0.25, 0.3, 0.12, 4348488),
        n(0, 0.025, -0.068, 0.19, 0.11, 0.02, 1257e3),
        n(-0.03, 0.03, -0.08, 0.09, 0.014, 0.01, 11531458),
        n(0.09, 0.27, 0.015, 0.018, 0.3, 0.018, 9279884),
        n(-0.065, -0.095, -0.073, 0.035, 0.025, 0.015, 14728822));
      const o = new Xt();
      return (i.add(o), Hs(i, o, null, null));
    }
    case w.WELDER:
      return xX();
    case w.DRILL_METAL:
      return pu(0);
    case w.DRILL_DIAMOND:
      return pu(1);
    case w.DRILL_TITANIUM:
      return pu(2);
    case w.DRILL_COMPOSITE:
      return pu(3);
    case w.DRILL_LASER:
      return pu(4);
    case w.LUNAR_DRILL:
      return pu(5);
    case w.SPACE_ROCKET:
      return NX();
    case w.CHAINSAW_BASIC:
      return zb(0);
    case w.CHAINSAW_PRO:
      return zb(1);
    case w.CHAINSAW_INDUSTRIAL:
      return zb(2);
    case w.WHEAT_SEEDS:
      return RX();
    case w.FERTILIZER:
      return kX();
    case w.FISHING_ROD:
      return IX();
    default:
      return ER();
  }
}
const xR = new WeakMap();
function JO(s, e) {
  let t = xR.get(s);
  t ||
    ((t = xy
      .map((i, n) => s.getObjectByName(`rod-seg-${n}`))
      .filter((i) => !!i)),
    xR.set(s, t));
  for (let i = 0; i < t.length; i++) t[i].rotation.x = -e * CX[i] * 1.5;
}
const WX =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.5 3.9 5.5 3.9 9s-1.3 6.5-3.9 9c-2.6-2.5-3.9-5.5-3.9-9S9.4 5.5 12 3z"/></svg>',
  $X =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
function VX(s) {
  if (!s) return;
  const e = document.createElement("button");
  ((e.type = "button"),
    (e.className = "lang-button"),
    (e.id = "language-button"),
    e.setAttribute("aria-haspopup", "listbox"),
    e.setAttribute("aria-expanded", "false"),
    e.setAttribute("aria-controls", "language-list"));
  const t = document.createElement("span");
  t.className = "lang-name";
  const i = document.createElement("span");
  ((i.className = "lang-code"), i.setAttribute("aria-hidden", "true"));
  const n = document.createElement("span");
  ((n.className = "lang-caret"),
    n.setAttribute("aria-hidden", "true"),
    e.insertAdjacentHTML("afterbegin", WX),
    e.append(t, i, n));
  const o = document.createElement("ul");
  ((o.id = "language-list"),
    (o.className = "lang-list"),
    (o.tabIndex = -1),
    o.setAttribute("role", "listbox"));
  const a = new Map();
  for (const x of k1) {
    const R = document.createElement("li");
    ((R.id = `language-option-${x.code}`),
      (R.className = "lang-option"),
      (R.dataset.code = x.code),
      R.setAttribute("role", "option"));
    const _ = document.createElement("span");
    ((_.className = "lang-native"),
      (_.lang = x.code),
      (_.dir = x.rtl ? "rtl" : "ltr"),
      (_.textContent = x.native));
    const C = document.createElement("span");
    ((C.className = "lang-english"),
      (C.lang = "en"),
      (C.textContent = x.native === x.english ? "" : x.english),
      R.append(_, C),
      R.insertAdjacentHTML("beforeend", $X),
      a.set(x.code, R),
      o.append(R));
  }
  const r = document.createElement("div");
  ((r.className = "lang-panel"), (r.hidden = !0));
  const l = document.createElement("div");
  l.className = "lang-head";
  const c = document.createElement("strong"),
    h = document.createElement("button");
  ((h.type = "button"),
    (h.className = "lang-close"),
    (h.innerHTML = '<span aria-hidden="true">×</span>'),
    l.append(c, h));
  const d = document.createElement("div");
  ((d.className = "lang-backdrop"),
    (d.hidden = !0),
    r.append(l, o),
    s.replaceChildren(e, d, r));
  let u = Y.language;
  const f = k1.map((x) => x.code),
    p = () => !r.hidden;
  let m = 0;
  const g = (x) => {
      u = x;
      for (const [R, _] of a) _.classList.toggle("active", R === x);
      (o.setAttribute("aria-activedescendant", `language-option-${x}`),
        a.get(x)?.scrollIntoView({ block: "nearest" }));
    },
    y = () => {
      const x = yA(Y.language);
      ((t.textContent = x.native),
        (t.lang = x.code),
        (i.textContent = x.code.toUpperCase()),
        e.setAttribute("aria-label", `${z("language")}: ${x.native}`),
        (e.title = z("language")),
        o.setAttribute("aria-label", z("language")),
        (c.textContent = z("language")),
        h.setAttribute("aria-label", z("closeAria")),
        (h.title = z("closeAria")));
      for (const [R, _] of a)
        _.setAttribute("aria-selected", String(R === Y.language));
    },
    b = () => {
      p() ||
        ((r.hidden = !1),
        (d.hidden = !1),
        s.classList.add("open"),
        e.setAttribute("aria-expanded", "true"),
        r.classList.remove("align-start"),
        getComputedStyle(r).position === "absolute" &&
          r.getBoundingClientRect().left < 8 &&
          r.classList.add("align-start"),
        g(Y.language),
        o.focus({ preventScroll: !0 }));
    },
    S = (x = !0) => {
      p() &&
        ((r.hidden = !0),
        (d.hidden = !0),
        s.classList.remove("open"),
        e.setAttribute("aria-expanded", "false"),
        (m = performance.now()),
        x && e.focus({ preventScroll: !0 }));
    },
    M = (x) => {
      (S(), x !== Y.language && TA(x, !0));
    };
  (e.addEventListener("click", () => {
    p() ? S() : performance.now() - m > 350 && b();
  }),
    h.addEventListener("click", () => S()),
    d.addEventListener("pointerdown", (x) => {
      (x.preventDefault(), S(!1));
    }),
    e.addEventListener("keydown", (x) => {
      (x.key === "ArrowDown" || x.key === "ArrowUp") &&
        (x.preventDefault(), b());
    }),
    o.addEventListener("click", (x) => {
      const R = x.target.closest(".lang-option");
      R?.dataset.code && M(R.dataset.code);
    }),
    o.addEventListener("pointermove", (x) => {
      const R = x.target.closest(".lang-option");
      R?.dataset.code && R.dataset.code !== u && g(R.dataset.code);
    }));
  let E = "",
    A = 0;
  (o.addEventListener("keydown", (x) => {
    const R = f.indexOf(u),
      _ = (C) => {
        (x.preventDefault(), g(f[Math.max(0, Math.min(f.length - 1, C))]));
      };
    if (x.key === "ArrowDown") _(R + 1);
    else if (x.key === "ArrowUp") _(R - 1);
    else if (x.key === "Home" || x.key === "PageUp") _(0);
    else if (x.key === "End" || x.key === "PageDown") _(f.length - 1);
    else if (x.key === "Enter" || x.key === " ") (x.preventDefault(), M(u));
    else if (x.key === "Escape") (x.preventDefault(), x.stopPropagation(), S());
    else if (x.key === "Tab") S(!1);
    else if (x.key.length === 1) {
      const C = performance.now();
      ((E = (C - A > 700 ? "" : E) + x.key.toLowerCase()), (A = C));
      const P = k1.find(
        (O) =>
          O.native.toLowerCase().startsWith(E) ||
          O.english.toLowerCase().startsWith(E),
      );
      P && g(P.code);
    }
  }),
    document.addEventListener("pointerdown", (x) => {
      p() && !s.contains(x.target) && S(!1);
    }));
  let T = 0;
  (r.addEventListener("pointerdown", () => {
    T = performance.now();
  }),
    o.addEventListener("focusout", (x) => {
      p() &&
        !s.contains(x.relatedTarget) &&
        performance.now() - T > 400 &&
        S(!1);
    }),
    da(y),
    y());
}
const e7 = "vr-blocked",
  hf = new Set();
try {
  for (const s of JSON.parse(localStorage.getItem(e7) || "[]"))
    typeof s == "string" && hf.add(s.toLowerCase());
} catch {}
const Vu = (s) => !!s && hf.has(s.toLowerCase()),
  Fb = () => [...hf];
function t7(s, e) {
  const t = s.trim().toLowerCase();
  if (t) {
    e ? hf.add(t) : hf.delete(t);
    try {
      localStorage.setItem(e7, JSON.stringify([...hf]));
    } catch {}
    window.dispatchEvent(
      new CustomEvent("blocklist-changed", { detail: { name: t, blocked: e } }),
    );
  }
}
const qX =
  "#hotbar,#hpwrap,#hint,#equipment-status,#compass,#minimap,#voice-hud > button,#voice-hud > div,#questhud,#balancehud,#vehhud,#targetscore,#cropprogress,#mobile-stick-zone,.mobile-action,.mobile-action .m-cap,.world-border-notice,.claim-notice,.property-notice,.operation-card,#raidhud,#chatlog .msg:not(.faded)";
let _R = 0,
  h4 = !1,
  kv,
  L1;
