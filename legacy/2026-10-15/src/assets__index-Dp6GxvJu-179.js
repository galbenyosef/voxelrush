// assets__index-Dp6GxvJu 179 — language
// Lines 101473-101596 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
const $J = new VJ(),
  jg = [
    {
      id: "denis",
      ru: "Денис",
      en: "Denis",
      language: "ru",
      model: "ru_RU-denis-medium",
    },
    {
      id: "dmitri",
      ru: "Дмитрий",
      en: "Dmitri",
      language: "ru",
      model: "ru_RU-dmitri-medium",
    },
    {
      id: "irina",
      ru: "Ирина",
      en: "Irina",
      language: "ru",
      model: "ru_RU-irina-medium",
    },
    {
      id: "ruslan",
      ru: "Руслан",
      en: "Ruslan",
      language: "ru",
      model: "ru_RU-ruslan-medium",
    },
    {
      id: "joe",
      ru: "Джо",
      en: "Joe",
      language: "en",
      model: "en_US-joe-medium",
    },
    {
      id: "ljspeech",
      ru: "LJ · женский",
      en: "LJ · female",
      language: "en",
      model: "en_US-ljspeech-medium",
    },
    {
      id: "sam",
      ru: "Сэм",
      en: "Sam",
      language: "en",
      model: "en_US-sam-medium",
    },
  ],
  UI = { ru: "denis", en: "joe" };
function BM(n, e) {
  var t;
  return (
    ((t = jg.find((i) => i.id === n && i.language === e)) == null
      ? void 0
      : t.id) ?? UI[e]
  );
}
function qJ(n, e, t, i = !1) {
  const s =
      /female|жен|irina|ирина|samantha|victoria|zira|hazel|susan|karen|moira|tessa|fiona|katya|milena|anna|alyona|ал[её]на|катя|милена|google (?:us english|uk english female|русский)/i,
    o =
      /(?:^|[^a-z])male(?:$|[^a-z])|муж|david|daniel|alex\b|fred\b|mark\b|james|george|oliver|pavel|yuri|dmitri|denis|ruslan|maxim|павел|юрий|дмитрий|денис|максим|руслан/i,
    a = n.filter((l) => l.lang.toLowerCase().startsWith(e));
  return i || !(t === "irina" || t === "ljspeech")
    ? (a.find((l) => !s.test(l.name) && o.test(l.name)) ??
        a.find((l) => !s.test(l.name)) ??
        (i ? void 0 : a[0]))
    : (a.find((l) => s.test(l.name)) ?? a[0]);
}
function KJ(n, e = "ru") {
  var o, a;
  const t = n.replace(
      /https?:\/\/\S+|www\.\S+|[\w.+-]+@[\w.-]+\.\w+|@\S+/gi,
      "",
    ),
    i = ((o = t.match(/[а-яё]/gi)) == null ? void 0 : o.length) ?? 0,
    s = ((a = t.match(/[a-z]/gi)) == null ? void 0 : a.length) ?? 0;
  return i || s ? (i >= s ? "ru" : "en") : e;
}
function YJ(n) {
  var e;
  return ((e = jg.find((t) => t.id === n)) == null ? void 0 : e.language) ===
    "en"
    ? "Hello! This is my voice in the game chat. Meet me at the base!"
    : "Привет! Это мой голос в игровом чате. Встречаемся у базы!";
}
const Ib = 2;
function jJ() {
  var e, t;
  const n = {
    enabled: !1,
    important: !0,
    combat: !0,
    publish: !1,
    voices: { ...UI },
    volume: 0.8,
    defaults: Ib,
  };
  try {
    const i = JSON.parse(localStorage.getItem("fc-chat-tts") || "{}"),
      s = i.defaults === Ib;
    return {
      enabled: s && i.enabled === !0,
      important: i.important !== !1,
      combat: i.combat !== !1,
      publish: s && i.publish === !0,
      defaults: Ib,
      voices: {
        ru: BM(((e = i.voices) == null ? void 0 : e.ru) ?? i.voice, "ru"),
        en: BM(((t = i.voices) == null ? void 0 : t.en) ?? i.voice, "en"),
      },
      volume: Number.isFinite(i.volume)
        ? Math.max(0, Math.min(1, i.volume))
        : 0.8,
    };
  } catch {
    return n;
  }
}
const co = (n, e) => (z.language === "en" ? e : n);
