// index-BeUlFSPp 36 — language
// Lines 38718-38991 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function mV(s, e) {
  return e
    ? s.replace(/\{(\w+)\}/g, (t, i) =>
        Object.prototype.hasOwnProperty.call(e, i) ? String(e[i]) : t,
      )
    : s;
}
let RP = {};
try {
  RP = Object.assign({
    "./locales/ar.json": RG,
    "./locales/de.json": kG,
    "./locales/es.json": CG,
    "./locales/fr.json": LG,
    "./locales/it.json": IG,
    "./locales/ja.json": PG,
    "./locales/ko.json": OG,
    "./locales/nl.json": NG,
    "./locales/pl.json": DG,
    "./locales/pt.json": HG,
    "./locales/tr.json": BG,
  });
} catch {}
const Cf = new Map(),
  gb = new Map(),
  gV = (s) => RP[`./locales/${s}.json`];
function EA(s) {
  if (s === "en" || s === "ru" || Cf.has(s)) return Promise.resolve(!0);
  const e = gV(s);
  if (!e) return Promise.resolve(!1);
  let t = gb.get(s);
  return (
    t ||
      ((t = fetch(e)
        .then(async (i) => {
          if (!i.ok) throw new Error(`language pack ${s}: ${i.status}`);
          const n = await i.json();
          return (
            Cf.set(s, {
              keys: n.k ?? {},
              touch: n.t ?? {},
              plurals: n.m ?? {},
              messages: pV(n.m ?? {}, { alias: _P, keep: (o) => kP(o) }),
            }),
            !0
          );
        })
        .catch((i) => (console.warn(i), gb.delete(s), !1))),
      gb.set(s, t)),
    t
  );
}
let kP = () => !1;
function yV(s) {
  kP = s;
}
const $0 = () => Y.language,
  v0 = () => (Cf.has(Y.language) ? Y.language : `${Y.language}?`),
  Oa = () => b$(Y.language),
  wi = () => Y.language === "ru",
  ao = () => yA(Y.language).locale;
function qm(s) {
  const e = Cf.get(Y.language);
  return !e || !s ? s : e.messages.translate(s);
}
function z(s, e) {
  const t = jr(),
    i = Y.language;
  let n;
  if (i === "en" || i === "ru") n = (t ? Zx[i]?.[s] : void 0) ?? i_[i][s];
  else {
    const o = Cf.get(i);
    ((n = (t ? o?.touch[s] : void 0) ?? o?.keys[s]),
      (n ??= t ? Zx.en[s] : void 0));
  }
  return mV(n ?? i_.en[s] ?? s, e);
}
function I(s, e) {
  const t = Y.language;
  return t === "ru" ? e : t === "en" ? s : qm(s);
}
function Po(s) {
  const e = Y.language;
  return e === "en" || e === "ru" ? s : qm(s);
}
const FS = (s) => (s === null ? null : Po(s));
function Un(s) {
  return I(s.en, s.ru);
}
function sa(s) {
  const e = Y.language;
  return e === "en" || e === "ru" ? kf(s, e) : qm(kf(s, "en"));
}
function vV(s) {
  const e = Y.language;
  return e === "en" || e === "ru" ? rv(s, e) : US(rv(s, "en"));
}
const bV = new Set([
  "objective",
  "title",
  "subtitle",
  "detail",
  "text",
  "message",
  "note",
  "label",
  "activity",
  "tierLabel",
  "phase",
  "repTitle",
  "cityProgress",
  "nextRaid",
  "weapon",
  "armor",
  "tasks",
  "log",
  "reason",
]);
function US(s, e = "") {
  return typeof s == "string"
    ? bV.has(e)
      ? qm(s)
      : s
    : Array.isArray(s)
      ? s.map((t) => US(t, e))
      : s && typeof s == "object"
        ? Object.fromEntries(Object.entries(s).map(([t, i]) => [t, US(i, t)]))
        : s;
}
const wV = ["zero", "one", "two", "few", "many", "other"],
  s_ = new Map();
function MV(s, e, t) {
  const i = Y.language,
    n = (o) => o.replace("{0}", String(s));
  if (i === "ru") {
    const o = Math.abs(s) % 100,
      a = o % 10;
    return n(
      o > 10 && o < 20 ? t[2] : a === 1 ? t[0] : a >= 2 && a <= 4 ? t[1] : t[2],
    );
  }
  if (i !== "en") {
    const o = `${e[0]}|${e[1]}`,
      a = Cf.get(i)?.plurals[o];
    if (a) {
      let r = s_.get(i);
      r || s_.set(i, (r = new Intl.PluralRules(ao())));
      const l = wV.filter((h) =>
          r.resolvedOptions().pluralCategories.includes(h),
        ),
        c = a.split("|");
      return n(c[Math.max(0, l.indexOf(r.select(s)))] ?? c[c.length - 1]);
    }
  }
  return n(s === 1 ? e[0] : e[1]);
}
const CP = new Set();
function da(s) {
  CP.add(s);
}
function AA() {
  const s = yA(Y.language),
    e = document.documentElement;
  ((e.lang = Y.language),
    e.classList.toggle("lang-rtl", !!s.rtl),
    (e.dataset.language = Y.language),
    document.querySelectorAll("[data-i18n]").forEach((t) => {
      t.textContent = z(t.dataset.i18n ?? "");
    }),
    document.querySelectorAll("[data-i18n-placeholder]").forEach((t) => {
      t.placeholder = z(t.dataset.i18nPlaceholder ?? "");
    }),
    document.querySelectorAll("[data-i18n-title]").forEach((t) => {
      t.title = z(t.dataset.i18nTitle ?? "");
    }),
    document.querySelectorAll("[data-i18n-aria]").forEach((t) => {
      t.setAttribute("aria-label", z(t.dataset.i18nAria ?? ""));
    }),
    document.querySelectorAll("[data-icon]").forEach((t) => {
      t.innerHTML = Ks(t.dataset.icon);
    }));
  for (const t of CP) t();
}
let LP = lP(Tf()) || M$(Tf()) ? "browser" : "default";
const IP = () => (Y.languageChosen ? "chosen" : LP);
let yb = null;
async function TA(s, e) {
  if (
    (e &&
      ((Y.languageChosen = !0),
      s !== Y.language &&
        typeof window < "u" &&
        window.dispatchEvent(
          new CustomEvent("language-chosen", {
            detail: { from: Y.language, to: s },
          }),
        )),
    (yb = s),
    await EA(s),
    yb !== s)
  )
    return;
  yb = null;
  const t = Y.language !== s;
  ((Y.language = s), Ji(), t && AA());
}
async function SV() {
  const s = EA(Y.language).then(() => AA());
  if (!Y.languageChosen && !lP(Tf())) {
    const e = BS(Tf(), await S$());
    if (!Y.languageChosen && e !== Y.language) {
      ((LP = "country"), await s, await TA(e, !1));
      return;
    }
  }
  await s;
}
const EV = 2500;
typeof window < "u" &&
  Y.language !== "en" &&
  Y.language !== "ru" &&
  (await Promise.race([EA(Y.language), new Promise((s) => setTimeout(s, EV))]));
function Li(s) {
  const e = W0(s);
  return e ? I(e.labelEn, e.label) : I(od[s] ?? "", N0[s] ?? "");
}
function jh(s) {
  return s ? I(s.labelEn, s.label) : "";
}
function to(s) {
  return I(mA[s] ?? "Vehicle", pA[s] ?? "Техника");
}
function n_(s) {
  return I(kW[s], RW[s]);
}
function o_(s) {
  return I(s.descriptionEn, s.description);
}
function a_(s) {
  return I(s.protectsEn, s.protects);
}
function r_(s) {
  return I(j$[s], Y$[s]);
}
function AV(s) {
  const e = sV[s],
    t = iV[s];
  return e === void 0 && t === void 0 ? void 0 : I(e ?? t ?? "", t ?? e ?? "");
}
function fc(s) {
  if (Y.language === "ru") return Jx(s, "ru");
  if (Y.language === "en") return Jx(s, "en");
  const e = ai(s);
  if (!e) return Li(s) || `Item ${s}`;
  const t = $m(s)
    .map((i) => qm(EP[i] ?? ""))
    .filter(Boolean);
  return t.length ? `${Li(e)} (${t.join(", ")})` : Li(e);
}
function h0(s) {
  return s < 256 ? jh(le[s]) : Li(s) || fc(s);
}
function GS(s) {
  return I(s.nameEn, s.name);
}
function TV(s) {
  return GS(zS(s));
}
function l_(s) {
  return I(z$[s], B$[s]);
}
function rr(s) {
  return s === "Space" ? I("Space", "Пробел") : dr(s, "en");
}
