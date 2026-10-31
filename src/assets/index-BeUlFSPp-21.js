// index-BeUlFSPp 21 — code
// Lines 32204-32431 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function p$(s) {
  const e = new Map();
  for (const t of s.blocks) {
    if (
      t.id === v.AIR ||
      (t.id === v.BED && t.meta & nm) ||
      (zn(t.id) && t.meta & wr)
    )
      continue;
    const i = t.id === v.WATER ? w.WATER_BUCKET : t.id;
    e.set(i, (e.get(i) ?? 0) + 1);
  }
  return e;
}
function aP(s, e) {
  return [...p$(s)].reduce((t, [i, n]) => t + e(i) * n, 0);
}
function m$(s, e, t) {
  for (let i = 0; i < (t & 3); i++) [s, e] = [-e, s];
  return [s, e];
}
function g$(s, e, t, i, n) {
  return s.blocks.map((o) => {
    const [a, r] = m$(o.x, o.z, n);
    let l =
        o.id === v.SIGN
          ? (o.meta & -4) | ((o.meta - n + 4) & 3)
          : QG(o.id, o.meta, n),
      c = o.text;
    return (
      c && (c = gW(c, n)),
      {
        ...o,
        x: e + a,
        y: t + o.y,
        z: i + r,
        meta: l,
        ...(c ? { text: c } : {}),
      }
    );
  });
}
function y$(s, e, t, i = () => !1) {
  for (const n of s) {
    if (n.y < 1 || n.y >= 127) return "height";
    const o = t(n.x, n.y, n.z);
    if (o < 0) return "unloaded";
    if (
      o === v.CHEST ||
      o === v.MILITARY_CHEST ||
      o === v.BARREL ||
      o === v.FURNACE
    )
      return "occupied";
    if (n.id !== v.AIR && le[n.id]?.solid && i(n)) return "entity";
  }
  return null;
}
function v$(s, e = !1) {
  return {
    occupied: e
      ? "Move storage and furnaces out of the building area"
      : "Уберите хранилища и печи из зоны строительства",
    height: e ? "Not enough vertical space" : "Не хватает места по высоте",
    entity: e
      ? "A player or vehicle is in the building area"
      : "В зоне строительства игрок или техника",
    unloaded: e ? "Wait for the terrain to load" : "Дождитесь загрузки участка",
  }[s];
}
const k1 = [
    { code: "de", native: "Deutsch", english: "German", locale: "de-DE" },
    { code: "en", native: "English", english: "English", locale: "en-US" },
    { code: "es", native: "Español", english: "Spanish", locale: "es-419" },
    { code: "fr", native: "Français", english: "French", locale: "fr-FR" },
    { code: "it", native: "Italiano", english: "Italian", locale: "it-IT" },
    { code: "nl", native: "Nederlands", english: "Dutch", locale: "nl-NL" },
    { code: "pl", native: "Polski", english: "Polish", locale: "pl-PL" },
    { code: "pt", native: "Português", english: "Portuguese", locale: "pt-BR" },
    { code: "tr", native: "Türkçe", english: "Turkish", locale: "tr-TR" },
    { code: "ru", native: "Русский", english: "Russian", locale: "ru-RU" },
    {
      code: "ar",
      native: "العربية",
      english: "Arabic",
      locale: "ar-u-nu-latn",
      rtl: !0,
    },
    { code: "ja", native: "日本語", english: "Japanese", locale: "ja-JP" },
    { code: "ko", native: "한국어", english: "Korean", locale: "ko-KR" },
  ],
  HS = new Map(k1.map((s) => [s.code, s])),
  T5 = (s) => typeof s == "string" && HS.has(s),
  yA = (s) => HS.get(s) ?? HS.get("en"),
  b$ = (s) => (s === "ru" ? "ru" : "en");
function vA(s) {
  return typeof s == "string"
    ? (/^[a-z]{2,3}(?=$|[-_])/i.exec(s.trim())?.[0].toLowerCase() ?? "")
    : "";
}
const rP = {},
  Tr = (s, e) => {
    for (const t of e.split(" ")) rP[t] = s;
  };
Tr("es", "ES MX AR CO CL PE VE EC GT CU BO DO HN PY SV NI CR PA UY GQ");
Tr("pt", "BR PT AO MZ CV GW ST");
Tr("fr", "FR MC SN CI ML BF NE TG BJ GA CG CD CM GN HT RE GP MQ GF NC PF");
Tr("de", "DE AT CH LI");
Tr("it", "IT SM VA");
Tr("nl", "NL BE SR AW CW");
Tr("pl", "PL");
Tr("tr", "TR");
Tr("ar", "SA AE EG IQ JO KW QA BH OM LB SY YE LY DZ MA TN SD PS MR");
Tr("ko", "KR");
Tr("ja", "JP");
Tr("ru", "RU BY KZ KG");
const w$ = (s) =>
  typeof s == "string" ? (rP[s.trim().toUpperCase()] ?? null) : null;
function BS(s, e) {
  const t = s.map(vA).filter(Boolean);
  for (const i of t) if (i !== "en" && T5(i)) return i;
  return w$(e) ?? "en";
}
function M$(s) {
  return s.map(vA).includes("en");
}
function lP(s) {
  return s.map(vA).some((e) => e !== "en" && T5(e));
}
function Tf() {
  try {
    return (
      navigator.languages?.length ? navigator.languages : [navigator.language]
    ).filter((e) => typeof e == "string" && !!e);
  } catch {
    return [];
  }
}
const Vx = "vr-country";
async function S$(s = 1500) {
  try {
    const e = localStorage.getItem(Vx);
    if (e && /^[A-Z]{2}$/.test(e)) return e;
  } catch {}
  try {
    const e = await fetch("/cdn-cgi/trace", {
      signal: AbortSignal.timeout(s),
      cache: "no-store",
    });
    if (!e.ok) return null;
    const t = /^loc=([A-Z]{2})$/m.exec(await e.text())?.[1] ?? null;
    if (t)
      try {
        localStorage.setItem(Vx, t);
      } catch {}
    return t;
  } catch {
    return null;
  }
}
function jr() {
  return (
    (typeof matchMedia < "u" && matchMedia("(pointer: coarse)").matches) ||
    (typeof navigator < "u" && navigator.maxTouchPoints > 0)
  );
}
function cP() {
  return typeof matchMedia < "u" && matchMedia("(pointer: coarse)").matches
    ? !0
    : typeof navigator < "u" &&
        navigator.maxTouchPoints > 1 &&
        /Mac/.test(navigator.userAgent);
}
function x5(s) {
  let e = s >>> 0;
  return () => {
    ((e |= 0), (e = (e + 1831565813) | 0));
    let t = Math.imul(e ^ (e >>> 15), 1 | e);
    return (
      (t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    );
  };
}
function Oi(s, e, t) {
  let i = (s ^ Math.imul(e, 374761393) ^ Math.imul(t, 668265263)) >>> 0;
  return (
    (i = (i ^ (i >>> 13)) >>> 0),
    (i = Math.imul(i, 1274126177) >>> 0),
    ((i ^ (i >>> 16)) >>> 0) / 4294967296
  );
}
const qx = (s) => s * s * (3 - 2 * s);
function E$(s, e, t) {
  const i = Math.floor(e),
    n = Math.floor(t),
    o = qx(e - i),
    a = qx(t - n),
    r = Oi(s, i, n),
    l = Oi(s, i + 1, n),
    c = Oi(s, i, n + 1),
    h = Oi(s, i + 1, n + 1);
  return r + (l - r) * o + (c - r) * a + (r - l - c + h) * o * a;
}
function Wn(s, e, t, i) {
  let n = 0,
    o = 0.5,
    a = 1,
    r = 0;
  for (let l = 0; l < i; l++)
    ((n += (E$(s + l * 1013, e * a, t * a) * 2 - 1) * o),
      (r += o),
      (o *= 0.5),
      (a *= 2));
  return n / r;
}
const Ni = 16,
  A$ = [16, 32, 64, 128],
  T$ = 32,
  bc = 16,
  Ys = (s, e, t) =>
    Math.max(0, Math.min(255, Math.round(s + (t - 0.5) * 2 * e)));
function Z(s, e, t, i) {
  return (n, o, a) => {
    const r = a();
    return [Ys(s, i, r), Ys(e, i, r), Ys(t, i, r), 255];
  };
}
