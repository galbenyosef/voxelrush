// index-Dp6GxvJu 129 — error
// Lines 76112-76458 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
let cb = null;
function sX() {
  return (
    cb ||
      (cb = BLOCKS
        .filter((n) => IC.includes(n.id))
        .map((n) => n.name)
        .sort()),
    cb
  );
}
function a_(n, e) {
  const t = e.toLowerCase();
  if (!t) return n;
  const i = [],
    s = [];
  for (const a of n) {
    const r = a.toLowerCase();
    r.startsWith(t) ? i.push(a) : r.includes(t) && s.push(a);
  }
  const o = (a, r) => a.length - r.length || a.localeCompare(r);
  return [...i.sort(o), ...s.sort(o)];
}
function oX(n, e) {
  var f;
  if (!n.startsWith("/")) return null;
  const t = /\s$/.test(n),
    i = n.trim().split(/\s+/),
    s = nX.filter(
      (p) =>
        Ja(p.name) ||
        (p.name === "/mission" && Ja("/mission join")) ||
        (p.name === "/raid" && Ja("/raid status")),
    ),
    o = s.find((p) => p.name === i[0].toLowerCase());
  if (i.length === 1 && !t) {
    const p = a_(
      s.map((m) => m.name),
      i[0],
    );
    return p.length === 0
      ? null
      : { value: p[0], all: p, ghost: p[0].slice(i[0].length) };
  }
  if (!o) return null;
  const a = t ? i.length - 1 : i.length - 2;
  let r = (f = o.args) == null ? void 0 : f[a];
  o.name === "/tp" &&
    a === 1 &&
    !Number.isFinite(Number(i[1])) &&
    Ja(`/tp ${i[1]} target`) &&
    (r = { kind: "player" });
  const l = t ? "" : i[i.length - 1],
    c = t ? n : n.slice(0, n.length - l.length);
  if (!r || r === Ro || r.kind === "free")
    return l || !o.hint
      ? null
      : {
          value: n,
          all: [],
          ghost: ` ${SETTINGS.language === "ru" ? (o.hintRu ?? o.hint) : o.hint}`,
        };
  const h =
      "words" in r
        ? r.words
        : r.kind === "block"
          ? [
              ...sX(),
              ...(o.name === "/give" && Ja("/give computer")
                ? ["computer", "компьютер"]
                : []),
            ]
          : r.kind === "teleport-target"
            ? ["earth", "moon", ...e()]
            : e(),
    d = "words" in r ? h.filter((p) => Ja(c + p)) : h,
    u = a_(d, l);
  return u.length === 0
    ? null
    : {
        value: c + u[0],
        all: u.map((p) => c + p),
        ghost: u[0].slice(l.length),
      };
}
const u1 = () => {
    var n;
    return (n = window.Telegram) == null ? void 0 : n.WebApp;
  },
  Wp = () => {
    var n;
    return !!((n = u1()) != null && n.initData);
  };
function ap(n, e) {
  if (n.isVersionAtLeast) return n.isVersionAtLeast(e);
  const t = (r) => r.split(".").map((l) => Number(l) || 0),
    [i = 0, s = 0] = t(n.version ?? "0"),
    [o = 0, a = 0] = t(e);
  return i > o || (i === o && s >= a);
}
function hb() {
  const n = u1(),
    e = (n == null ? void 0 : n.safeAreaInset) ?? {},
    t = (n == null ? void 0 : n.contentSafeAreaInset) ?? {},
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
function mI() {
  var e, t, i, s, o, a, r;
  const n = u1();
  !n ||
    !Wp() ||
    (document.body.classList.add("telegram"),
    (e = n.expand) == null || e.call(n),
    ap(n, "7.7") && ((t = n.disableVerticalSwipes) == null || t.call(n)),
    ap(n, "6.1") && ((i = n.setHeaderColor) == null || i.call(n, "#0a1018")),
    ap(n, "8.0") &&
      (hb(),
      (s = n.onEvent) == null || s.call(n, "safeAreaChanged", hb),
      (o = n.onEvent) == null || o.call(n, "contentSafeAreaChanged", hb),
      (a = n.requestFullscreen) == null || a.call(n),
      (r = n.unlockOrientation) == null || r.call(n)));
}
let r_ = 0;
function vo(n = "light", e = 70) {
  var s, o;
  if (!SETTINGS.haptics) return;
  const t = performance.now();
  if (t - r_ < e) return;
  r_ = t;
  const i = u1();
  i && Wp() && ap(i, "6.1")
    ? (o = (s = i.HapticFeedback) == null ? void 0 : s.impactOccurred) ==
        null || o.call(s, n)
    : "vibrate" in navigator &&
      navigator.vibrate(
        n === "heavy" || n === "rigid" ? 45 : n === "medium" ? 28 : 16,
      );
}
function aX(n) {
  var t, i;
  if (!SETTINGS.haptics) return;
  const e = u1();
  e && Wp() && ap(e, "6.1")
    ? (i = (t = e.HapticFeedback) == null ? void 0 : t.notificationOccurred) ==
        null || i.call(t, n)
    : "vibrate" in navigator && navigator.vibrate([35, 45, 35]);
}
const rX = "fablecraft-local-world-v1",
  Gs = "files",
  mu = "__worlds_index__",
  lX = "world/",
  cX = 1178817073,
  jy = (n) => `w/${n}/`,
  hX = {
    difficulty: "medium",
    keepInventory: !1,
    raidsEnabled: !0,
    evacuationEnabled: !0,
    defenseEnabled: !0,
    districtEnabled: !0,
    weatherEnabled: !0,
  };
let Rh = null,
  Gm = null;
function f1() {
  return (
    Rh ||
    ((Rh = new Promise((n, e) => {
      const t = indexedDB.open(rX, 1);
      ((t.onupgradeneeded = () => {
        t.result.objectStoreNames.contains(Gs) ||
          t.result.createObjectStore(Gs);
      }),
        (t.onsuccess = () => {
          const i = t.result;
          ((i.onversionchange = () => {
            (i.close(), (Rh = null));
          }),
            n(i));
        }),
        (t.onerror = () => {
          ((Rh = null), e(t.error ?? new Error("IndexedDB unavailable")));
        }),
        (t.onblocked = () => {
          ((Rh = null), e(new Error("IndexedDB upgrade was blocked")));
        }));
    })),
    Rh)
  );
}
function gI() {
  return (
    "w" + Date.now().toString(36) + Math.floor(Math.random() * 1e9).toString(36)
  );
}
function dX(n) {
  if (!n || n.byteLength < 12) return null;
  const e = new DataView(n);
  return e.getUint32(0) === cX ? e.getUint32(4) : null;
}
function H4(n) {
  return new Promise((e) => {
    const t = n.transaction(Gs, "readonly").objectStore(Gs).get(mu);
    ((t.onsuccess = () => e(Array.isArray(t.result) ? t.result : [])),
      (t.onerror = () => e([])));
  });
}
function yI(n, e) {
  return new Promise((t, i) => {
    const s = n.transaction(Gs, "readwrite");
    (s.objectStore(Gs).put(e, mu),
      (s.oncomplete = () => t()),
      (s.onerror = () =>
        i(s.error ?? new Error("Could not write world index"))),
      (s.onabort = () => i(s.error ?? new Error("World index write aborted"))));
  });
}
function uX(n) {
  return new Promise((e) => {
    const t = n.transaction(Gs, "readonly").objectStore(Gs).getAllKeys();
    ((t.onsuccess = () => e(t.result.map(String))), (t.onerror = () => e([])));
  });
}
async function fX(n, e) {
  var a;
  const t = (await uX(n)).filter((r) => r.startsWith(lX));
  if (t.length === 0) return;
  const i = await new Promise((r) => {
      const l = n.transaction(Gs, "readonly").objectStore(Gs),
        c = [];
      let h = t.length;
      for (const d of t) {
        const u = l.get(d);
        ((u.onsuccess = () => {
          (c.push({ k: d, v: u.result }), --h === 0 && r(c));
        }),
          (u.onerror = () => {
            --h === 0 && r(c);
          }));
      }
    }),
    s =
      dX(
        (a = i.find((r) => r.k === "world/meta.bin")) == null ? void 0 : a.v,
      ) ?? 1337,
    o = gI();
  await new Promise((r, l) => {
    const c = n.transaction(Gs, "readwrite"),
      h = c.objectStore(Gs);
    for (const u of i) (h.put(u.v, jy(o) + u.k), h.delete(u.k));
    const d = h.get(mu);
    ((d.onsuccess = () => {
      const u = Array.isArray(d.result) ? d.result : [],
        f = Date.now();
      (u.push({ id: o, name: e, seed: s, createdAt: f, lastPlayedAt: f }),
        h.put(u, mu));
    }),
      (c.oncomplete = () => r()),
      (c.onerror = () => l(c.error ?? new Error("World migration failed"))),
      (c.onabort = () => l(c.error ?? new Error("World migration aborted"))));
  });
}
async function pX(n = "World") {
  const e = await f1();
  return (
    Gm ||
      (Gm = fX(e, n).catch(() => {
        Gm = null;
      })),
    await Gm,
    (await H4(e)).sort((i, s) => s.lastPlayedAt - i.lastPlayedAt)
  );
}
async function mX(n, e, t = hX) {
  const i = await f1(),
    s = Date.now(),
    o = {
      id: gI(),
      name: n.trim() || "World",
      seed: e >>> 0,
      createdAt: s,
      lastPlayedAt: s,
    },
    a = await H4(i);
  (a.push(o), await yI(i, a));
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
    l = jy(o.id);
  return (
    await new Promise((c, h) => {
      const d = i.transaction(Gs, "readwrite");
      (d.objectStore(Gs).put(r.buffer, `${l}world/settings.json`),
        (d.oncomplete = () => c()),
        (d.onerror = () =>
          h(d.error ?? new Error("Could not write world settings"))));
    }),
    o
  );
}
async function gX(n) {
  const e = await f1(),
    t = await H4(e),
    i = t.find((s) => s.id === n);
  i && ((i.lastPlayedAt = Date.now()), await yI(e, t));
}
async function yX(n) {
  const e = await f1(),
    t = jy(n);
  await new Promise((i, s) => {
    const o = e.transaction(Gs, "readwrite"),
      a = o.objectStore(Gs),
      r = a.getAllKeys();
    ((r.onsuccess = () => {
      for (const c of r.result) String(c).startsWith(t) && a.delete(c);
      const l = a.get(mu);
      l.onsuccess = () => {
        const c = Array.isArray(l.result) ? l.result : [];
        a.put(
          c.filter((h) => h.id !== n),
          mu,
        );
      };
    }),
      (o.oncomplete = () => i()),
      (o.onerror = () => s(o.error ?? new Error("Could not delete world"))),
      (o.onabort = () => s(o.error ?? new Error("World delete aborted"))));
  });
}
