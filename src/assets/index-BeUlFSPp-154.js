// index-BeUlFSPp 154 — error
// Lines 83920-84250 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
let Iw = null;
function Lie() {
  return (
    Iw ||
      (Iw = le
        .filter((s) => jI.includes(s.id))
        .map((s) => s.name)
        .sort()),
    Iw
  );
}
function Hk(s, e) {
  const t = e.toLowerCase();
  if (!t) return s;
  const i = [],
    n = [];
  for (const a of s) {
    const r = a.toLowerCase();
    r.startsWith(t) ? i.push(a) : r.includes(t) && n.push(a);
  }
  const o = (a, r) => a.length - r.length || a.localeCompare(r);
  return [...i.sort(o), ...n.sort(o)];
}
function Iie(s, e) {
  if (!s.startsWith("/")) return null;
  const t = /\s$/.test(s),
    i = s.trim().split(/\s+/),
    n = Cie.filter(
      (f) =>
        Ch(f.name) ||
        (f.name === "/mission" && Ch("/mission join")) ||
        (f.name === "/raid" && Ch("/raid status")),
    ),
    o = n.find((f) => f.name === i[0].toLowerCase());
  if (i.length === 1 && !t) {
    const f = Hk(
      n.map((p) => p.name),
      i[0],
    );
    return f.length === 0
      ? null
      : { value: f[0], all: f, ghost: f[0].slice(i[0].length) };
  }
  if (!o) return null;
  const a = t ? i.length - 1 : i.length - 2;
  let r = o.args?.[a];
  o.name === "/tp" &&
    a === 1 &&
    !Number.isFinite(Number(i[1])) &&
    Ch(`/tp ${i[1]} target`) &&
    (r = { kind: "player" });
  const l = t ? "" : i[i.length - 1],
    c = t ? s : s.slice(0, s.length - l.length);
  if (!r || r === ta || r.kind === "free")
    return l || !o.hint
      ? null
      : { value: s, all: [], ghost: ` ${I(o.hint, o.hintRu ?? o.hint)}` };
  const h =
      "words" in r
        ? r.words
        : r.kind === "block"
          ? [
              ...Lie(),
              ...(o.name === "/give" && Ch("/give computer")
                ? ["computer", "компьютер"]
                : []),
            ]
          : r.kind === "teleport-target"
            ? ["earth", "moon", ...e()]
            : e(),
    d = "words" in r ? h.filter((f) => Ch(c + f)) : h,
    u = Hk(d, l);
  return u.length === 0
    ? null
    : {
        value: c + u[0],
        all: u.map((f) => c + f),
        ghost: u[0].slice(l.length),
      };
}
const Qm = () => window.Telegram?.WebApp,
  Pm = () => !!Qm()?.initData;
function V1(s, e) {
  if (s.isVersionAtLeast) return s.isVersionAtLeast(e);
  const t = (r) => r.split(".").map((l) => Number(l) || 0),
    [i = 0, n = 0] = t(s.version ?? "0"),
    [o = 0, a = 0] = t(e);
  return i > o || (i === o && n >= a);
}
function Pw() {
  const s = Qm(),
    e = s?.safeAreaInset ?? {},
    t = s?.contentSafeAreaInset ?? {},
    i = document.documentElement.style;
  (i.setProperty("--tg-safe-top", `${Math.max(e.top ?? 0, t.top ?? 0)}px`),
    i.setProperty(
      "--tg-safe-bottom",
      `${Math.max(e.bottom ?? 0, t.bottom ?? 0)}px`,
    ),
    i.setProperty("--tg-safe-left", `${Math.max(e.left ?? 0, t.left ?? 0)}px`),
    i.setProperty(
      "--tg-safe-right",
      `${Math.max(e.right ?? 0, t.right ?? 0)}px`,
    ));
}
function LN() {
  const s = Qm();
  !s ||
    !Pm() ||
    (document.body.classList.add("telegram"),
    s.expand?.(),
    V1(s, "7.7") && s.disableVerticalSwipes?.(),
    V1(s, "6.1") && s.setHeaderColor?.("#0a1018"),
    V1(s, "8.0") &&
      (Pw(),
      s.onEvent?.("safeAreaChanged", Pw),
      s.onEvent?.("contentSafeAreaChanged", Pw),
      s.requestFullscreen?.(),
      s.unlockOrientation?.()));
}
let Bk = 0;
function Uo(s = "light", e = 70) {
  if (!Y.haptics) return;
  const t = performance.now();
  if (t - Bk < e) return;
  Bk = t;
  const i = Qm();
  Pn
    ? z7(s)
    : i && Pm() && V1(i, "6.1")
      ? i.HapticFeedback?.impactOccurred?.(s)
      : "vibrate" in navigator &&
        navigator.vibrate(
          s === "heavy" || s === "rigid" ? 45 : s === "medium" ? 28 : 16,
        );
}
function Pie(s) {
  if (!Y.haptics) return;
  const e = Qm();
  Pn
    ? z7(s)
    : e && Pm() && V1(e, "6.1")
      ? e.HapticFeedback?.notificationOccurred?.(s)
      : "vibrate" in navigator && navigator.vibrate([35, 45, 35]);
}
const Oie = "fablecraft-local-world-v1",
  ro = "files",
  $f = "__worlds_index__",
  Nie = "world/",
  Die = 1178817073,
  l3 = (s) => `w/${s}/`,
  Hie = {
    difficulty: "medium",
    keepInventory: !1,
    raidsEnabled: !0,
    evacuationEnabled: !0,
    defenseEnabled: !0,
    districtEnabled: !0,
    weatherEnabled: !0,
  };
let vh = null,
  Cg = null;
function Jm() {
  return (
    vh ||
    ((vh = new Promise((s, e) => {
      const t = indexedDB.open(Oie, 1);
      ((t.onupgradeneeded = () => {
        t.result.objectStoreNames.contains(ro) ||
          t.result.createObjectStore(ro);
      }),
        (t.onsuccess = () => {
          const i = t.result;
          ((i.onversionchange = () => {
            (i.close(), (vh = null));
          }),
            s(i));
        }),
        (t.onerror = () => {
          ((vh = null), e(t.error ?? new Error("IndexedDB unavailable")));
        }),
        (t.onblocked = () => {
          ((vh = null), e(new Error("IndexedDB upgrade was blocked")));
        }));
    })),
    vh)
  );
}
function IN() {
  return (
    "w" + Date.now().toString(36) + Math.floor(Math.random() * 1e9).toString(36)
  );
}
function Bie(s) {
  if (!s || s.byteLength < 12) return null;
  const e = new DataView(s);
  return e.getUint32(0) === Die ? e.getUint32(4) : null;
}
function zT(s) {
  return new Promise((e) => {
    const t = s.transaction(ro, "readonly").objectStore(ro).get($f);
    ((t.onsuccess = () => e(Array.isArray(t.result) ? t.result : [])),
      (t.onerror = () => e([])));
  });
}
function PN(s, e) {
  return new Promise((t, i) => {
    const n = s.transaction(ro, "readwrite");
    (n.objectStore(ro).put(e, $f),
      (n.oncomplete = () => t()),
      (n.onerror = () =>
        i(n.error ?? new Error("Could not write world index"))),
      (n.onabort = () => i(n.error ?? new Error("World index write aborted"))));
  });
}
function zie(s) {
  return new Promise((e) => {
    const t = s.transaction(ro, "readonly").objectStore(ro).getAllKeys();
    ((t.onsuccess = () => e(t.result.map(String))), (t.onerror = () => e([])));
  });
}
async function Fie(s, e) {
  const t = (await zie(s)).filter((a) => a.startsWith(Nie));
  if (t.length === 0) return;
  const i = await new Promise((a) => {
      const r = s.transaction(ro, "readonly").objectStore(ro),
        l = [];
      let c = t.length;
      for (const h of t) {
        const d = r.get(h);
        ((d.onsuccess = () => {
          (l.push({ k: h, v: d.result }), --c === 0 && a(l));
        }),
          (d.onerror = () => {
            --c === 0 && a(l);
          }));
      }
    }),
    n = Bie(i.find((a) => a.k === "world/meta.bin")?.v) ?? 1337,
    o = IN();
  await new Promise((a, r) => {
    const l = s.transaction(ro, "readwrite"),
      c = l.objectStore(ro);
    for (const d of i) (c.put(d.v, l3(o) + d.k), c.delete(d.k));
    const h = c.get($f);
    ((h.onsuccess = () => {
      const d = Array.isArray(h.result) ? h.result : [],
        u = Date.now();
      (d.push({ id: o, name: e, seed: n, createdAt: u, lastPlayedAt: u }),
        c.put(d, $f));
    }),
      (l.oncomplete = () => a()),
      (l.onerror = () => r(l.error ?? new Error("World migration failed"))),
      (l.onabort = () => r(l.error ?? new Error("World migration aborted"))));
  });
}
async function Uie(s = "World") {
  const e = await Jm();
  return (
    Cg ||
      (Cg = Fie(e, s).catch(() => {
        Cg = null;
      })),
    await Cg,
    (await zT(e)).sort((i, n) => n.lastPlayedAt - i.lastPlayedAt)
  );
}
async function Gie(s, e, t = Hie) {
  const i = await Jm(),
    n = Date.now(),
    o = {
      id: IN(),
      name: s.trim() || "World",
      seed: e >>> 0,
      createdAt: n,
      lastPlayedAt: n,
    },
    a = await zT(i);
  (a.push(o), await PN(i, a));
  const r = new TextEncoder().encode(
      JSON.stringify({
        difficulty: t.difficulty,
        keepInventory: t.keepInventory,
        raidsEnabled: t.raidsEnabled,
        evacuationEnabled: t.evacuationEnabled ?? !0,
        defenseEnabled: t.defenseEnabled ?? !0,
        districtEnabled: t.districtEnabled ?? !0,
        weatherEnabled: t.weatherEnabled,
      }),
    ),
    l = l3(o.id);
  return (
    await new Promise((c, h) => {
      const d = i.transaction(ro, "readwrite");
      (d.objectStore(ro).put(r.buffer, `${l}world/settings.json`),
        (d.oncomplete = () => c()),
        (d.onerror = () =>
          h(d.error ?? new Error("Could not write world settings"))));
    }),
    o
  );
}
async function Wie(s) {
  const e = await Jm(),
    t = await zT(e),
    i = t.find((n) => n.id === s);
  i && ((i.lastPlayedAt = Date.now()), await PN(e, t));
}
async function $ie(s) {
  const e = await Jm(),
    t = l3(s);
  await new Promise((i, n) => {
    const o = e.transaction(ro, "readwrite"),
      a = o.objectStore(ro),
      r = a.getAllKeys();
    ((r.onsuccess = () => {
      for (const c of r.result) String(c).startsWith(t) && a.delete(c);
      const l = a.get($f);
      l.onsuccess = () => {
        const c = Array.isArray(l.result) ? l.result : [];
        a.put(
          c.filter((h) => h.id !== s),
          $f,
        );
      };
    }),
      (o.oncomplete = () => i()),
      (o.onerror = () => n(o.error ?? new Error("Could not delete world"))),
      (o.onabort = () => n(o.error ?? new Error("World delete aborted"))));
  });
}
