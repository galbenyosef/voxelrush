// index-BeUlFSPp 124 — addeventlistener
// Lines 71622-71962 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
let d1 = 0,
  f0 = null,
  N4 = null,
  ek = !1,
  fw = !1;
function ln(s) {
  B1.length < 40 && B1.push(s);
}
function Q7() {
  const s = !!qe && !!N4 && Ml("local", J5) !== qe.id,
    e = qe ? `${qe.id}:${O4()}` : "",
    t = !!qe && Ml("local", e3) !== e;
  if (
    !f0 &&
    !B1.length &&
    !d1 &&
    !Iy.length &&
    !s &&
    !t &&
    !z1.length &&
    !Py.length
  )
    return null;
  f0 && ((f0.lang = $0()), (f0.lsrc = IP()));
  const i = {
      ...(f0 ? { visit: f0 } : {}),
      ...(s ? { bind: !0, first: N4 } : {}),
      ...(t ? { tz: O4() } : {}),
      ...(B1.length ? { ev: B1.splice(0), gl: $0() } : {}),
      ...(z1.length ? { sw: z1.splice(0, 6) } : {}),
      ...(Py.length ? { pf: Py.splice(0, 12) } : {}),
      ...(d1 >= 1 ? { solo: Math.min(1800, Math.round(d1)) } : {}),
      ...(Iy.length ? { err: Iy.splice(0) } : {}),
      build: ET,
    },
    n = s ? qe.id : "";
  return ((f0 = null), (d1 = 0), { out: i, boundTo: n, zone: t ? e : "" });
}
async function pw() {
  if (fw) return;
  const s = Q7();
  if (s) {
    fw = !0;
    try {
      (await Vi("/t", "POST", s.out),
        s.boundTo && Uf("local", J5, s.boundTo),
        s.zone && Uf("local", e3, s.zone));
    } catch {}
    fw = !1;
  }
}
function tk() {
  const s = Q7();
  if (s)
    try {
      (fetch(`${YP}/v1/t`, {
        method: "POST",
        keepalive: !0,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          ...(gv() ? { Authorization: `Bearer ${gv()}` } : {}),
        },
        body: JSON.stringify(s.out),
      }).catch(() => {}),
        s.boundTo && Uf("local", J5, s.boundTo),
        s.zone && Uf("local", e3, s.zone));
    } catch {}
}
let ik = 0;
const mw = [
  [60, "min1"],
  [300, "min5"],
  [900, "min15"],
  [1800, "min30"],
];
let gw = 0;
function aee(s, e) {
  !(s > 0) ||
    s > 1 ||
    ((ik += s),
    e && (d1 += s),
    gw < mw.length && ik >= mw[gw][0] && ln(mw[gw++][1]));
}
const Py = [],
  Np = [],
  yw = [];
let vw = 0,
  sk = 0,
  D4 = null;
const ree = 6e4,
  lee = 15;
function cee(s, e, t, i) {
  const n = s * 1e3;
  if (
    !(n > 0) ||
    n > 2e3 ||
    sk >= lee ||
    (Np.push(n),
    (vw += n),
    e > 0 && Np.length % 30 === 0 && yw.push(e),
    vw < ree)
  )
    return;
  const o = Float64Array.from(Np).sort(),
    a = (l) => o[Math.min(o.length - 1, Math.floor(o.length * l))],
    r = yw.slice().sort((l, c) => l - c);
  (Py.push({
    f: Math.round(1e3 / a(0.5)),
    l: Math.round(1e3 / a(0.99)),
    h: Np.filter((l) => l > 100).length,
    p: r.length ? r[r.length >> 1] : 0,
    q: t.slice(0, 8),
    m: i.slice(0, 10),
    dev: Z7(),
    gpu: D4 ?? "other",
  }),
    sk++,
    (Np.length = 0),
    (yw.length = 0),
    (vw = 0));
}
function H4(s, e = "") {
  const t = s.slice(0, 300);
  !t ||
    /ResizeObserver loop|^Script error\.?$|chrome-extension:|moz-extension:|safari-web-extension:/.test(
      t + e,
    ) ||
    uw.has(t) ||
    uw.size >= 8 ||
    (uw.add(t), Iy.push({ m: t, s: e.slice(0, 160) }));
}
function B4(s, e) {
  H4(`${s}: ${e instanceof Error ? `${e.name}: ${e.message}` : String(e)}`);
}
function hee() {
  if (ek || typeof window > "u") return;
  ek = !0;
  const s = oee();
  let e = null;
  try {
    e = JSON.parse(Ml("local", Q8) ?? "null");
  } catch {}
  const t =
    !!e ||
    Ml("local", "vr-play-seconds") !== null ||
    Ml("local", "vr-guest-played") !== null;
  ((N4 = e ?? s),
    e || Uf("local", Q8, JSON.stringify(s)),
    (D4 = see()),
    Ml("session", J8) !== "1" &&
      (Uf("session", J8, "1"), (f0 = { ...s, new: !t, gpu: D4 })),
    window.addEventListener("language-chosen", (i) => {
      const { from: n, to: o } = i.detail ?? {};
      typeof n == "string" &&
        typeof o == "string" &&
        z1.length < 6 &&
        z1.push([n, o]);
    }),
    window.addEventListener("error", (i) =>
      H4(
        String(i.message || i.error?.message || ""),
        i.filename ? `${i.filename}:${i.lineno}:${i.colno}` : "",
      ),
    ),
    window.addEventListener("unhandledrejection", (i) => {
      const n = i.reason;
      H4(
        n instanceof Error ? `${n.name}: ${n.message}` : String(n ?? ""),
        n instanceof Error
          ? (String(n.stack ?? "")
              .split(
                `
`,
              )[1]
              ?.trim() ?? "")
          : "",
      );
    }),
    document.addEventListener(
      "click",
      (i) => {
        const n = i.target instanceof Element ? i.target : null;
        if (!n) return;
        const o = (r) => n.closest(r),
          a = o(".lm-card[data-mode]")?.dataset.mode;
        a
          ? ln("mode_" + a)
          : o("#playbtn")
            ? ln("play_click")
            : o("#solobtn")
              ? ln("solo_start")
              : o("#menuarmory")
                ? ln("armory_open")
                : o("#lobby-list-open")
                  ? ln("server_list")
                  : o("#menu-link-account") && ln("link_open");
      },
      !0,
    ),
    window.addEventListener("account-changed", () => {
      qe &&
        (Ml("local", J5) !== qe.id || Ml("local", e3) !== `${qe.id}:${O4()}`) &&
        window.setTimeout(() => void pw(), 500);
    }),
    window.setTimeout(() => {
      const i = document.getElementById("menu");
      (i && !i.classList.contains("hidden") && ln("menu"), pw());
    }, 2500),
    window.setInterval(() => {
      document.hidden || pw();
    }, tee),
    document.addEventListener("visibilitychange", () => {
      document.hidden && tk();
    }),
    window.addEventListener("pagehide", tk));
}
const dee = "modulepreload",
  uee = function (s) {
    return "/" + s;
  },
  nk = {},
  J7 = function (e, t, i) {
    let n = Promise.resolve();
    if (t && t.length > 0) {
      let a = function (c) {
        return Promise.all(
          c.map((h) =>
            Promise.resolve(h).then(
              (d) => ({ status: "fulfilled", value: d }),
              (d) => ({ status: "rejected", reason: d }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const r = document.querySelector("meta[property=csp-nonce]"),
        l = r?.nonce || r?.getAttribute("nonce");
      n = a(
        t.map((c) => {
          if (((c = uee(c)), c in nk)) return;
          nk[c] = !0;
          const h = c.endsWith(".css"),
            d = h ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${c}"]${d}`)) return;
          const u = document.createElement("link");
          if (
            ((u.rel = h ? "stylesheet" : dee),
            h || (u.as = "script"),
            (u.crossOrigin = ""),
            (u.href = c),
            l && u.setAttribute("nonce", l),
            document.head.appendChild(u),
            h)
          )
            return new Promise((f, p) => {
              (u.addEventListener("load", f),
                u.addEventListener("error", () =>
                  p(new Error(`Unable to preload CSS for ${c}`)),
                ));
            });
        }),
      );
    }
    function o(a) {
      const r = new Event("vite:preloadError", { cancelable: !0 });
      if (((r.payload = a), window.dispatchEvent(r), !r.defaultPrevented))
        throw a;
    }
    return n.then((a) => {
      for (const r of a || []) r.status === "rejected" && o(r.reason);
      return e().catch(o);
    });
  },
  ps = (s, e) => I(s, e);
let un = null,
  Es = null,
  C0 = !1,
  z4 = 0,
  eN = null;
const tN = new Set();
function fee(s) {
  tN.add(s);
}
const F4 = () => {
  for (const s of tN) s();
};
async function TT() {
  if (!qe || !Ga()) return ((un = null), F4(), null);
  const s = qe.id;
  try {
    const e = await Vi("/me/halloween");
    qe?.id === s && ((un = e?.event?.progress ? e.event : null), F4());
  } catch {}
  return un;
}
function iN(s) {
  const e = sf[s];
  return un
    ? un.claimed.includes(e.day)
      ? "claimed"
      : e.day > un.day
        ? "locked"
        : (un.progress[s] ?? 0) >= e.goal
          ? "done"
          : "open"
    : "locked";
}
const pee = () => (un ? sf.filter((s, e) => iN(e) === "done").length : 0),
  U4 =
    '<svg class="hw-pumpkin" viewBox="0 0 32 32" aria-hidden="true"><path d="M15 4c1-2 3-2.4 4-1.6-1.3.4-2.2 1.4-2.4 3" fill="none" stroke="#5f7a2c" stroke-width="2" stroke-linecap="round"/><ellipse cx="9.5" cy="18" rx="7" ry="10" fill="#d9661a"/><ellipse cx="22.5" cy="18" rx="7" ry="10" fill="#d9661a"/><ellipse cx="16" cy="18" rx="8" ry="11" fill="#f08a24"/><path d="M8 14l3 3H6zm16 0l2 3h-5zM16 17l1.6 2.4h-3.2zM8 22c3 3 13 3 16 0l-2 3-2-1.6-2 2-2-2-2 2-2-2-2 1.6z" fill="#ffd25a"/></svg>',
  bw = (s) =>
    `<svg class="sr-ico" viewBox="0 0 24 24" aria-hidden="true">${s}</svg>`,
  ww = {
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    check: '<path d="m5 12 5 5 9-10"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  };
function Qr(s, e = "", t = "") {
  const i = document.createElement(s);
  return (e && (i.className = e), t && (i.innerHTML = t), i);
}
const sN = (s) =>
  s instanceof Error &&
  !["TimeoutError", "AbortError", "TypeError"].includes(s.name)
    ? s.message
    : ps(
        "No connection. Try again in a moment",
        "Нет связи. Попробуйте чуть позже",
      );
function xT(s, e = "info") {
  const t = Es?.querySelector(".hw-status");
  t && ((t.textContent = s), (t.dataset.kind = e));
}
function ok(s) {
  const e = Math.max(1, Math.ceil(s / 6e4)),
    t = Math.floor(e / 60);
  return t
    ? ps(`${t} h ${e % 60} min`, `${t} ч ${e % 60} мин`)
    : ps(`${e} min`, `${e} мин`);
}
