// index-BeUlFSPp 140 — replace
// Lines 78450-78769 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function _w(s) {
  const e = s.trim();
  if (!e) return null;
  const t = e.toLowerCase();
  if (/(^|[^0-9])(1488|14_?88|8814)([^0-9]|$)/.test(t)) return "hate";
  const i = t.replace(/[^a-z]/g, ""),
    n = t.replace(/[0-9]/g, (c) => xw[c] ?? "").replace(/[^a-z]/g, ""),
    o = t
      .replace(/1/g, "l")
      .replace(/[0-9]/g, (c) => xw[c] ?? "")
      .replace(/[^a-z]/g, ""),
    a = [...new Set([i, n, o])].filter(Boolean);
  if (a.some((c) => yte.has(c))) return null;
  if (
    a
      .map((c) => c.split("jewel").join("·"))
      .some(
        (c) => bte.some((h) => c.includes(h)) && wte.some((h) => c.includes(h)),
      )
  )
    return "hate";
  for (const { kind: c, tests: h } of Ste)
    for (const d of a) {
      let u = d;
      for (const f of vte) u = u.split(f).join("·");
      if (h.some((f) => f.test(u))) return c;
    }
  const r = new Set(a);
  for (const c of e.split(/[_0-9]+|(?<=[a-z])(?=[A-Z])/))
    c && r.add(c.toLowerCase());
  for (const c of e
    .replace(/[0-9]/g, (h) => xw[h] ?? "")
    .split(/_+|(?<=[a-z])(?=[A-Z])/))
    c && r.add(c.toLowerCase());
  for (const c of [...r]) r.add(c.replace(/^x+|x+$/g, ""));
  const l = new Set([...r].map(Ate));
  for (const { kind: c, set: h } of Ete) {
    for (const d of r) if (h.has(d)) return c;
    if (c !== "staff") {
      for (const d of l) if (h.has(d)) return c;
    }
  }
  return null;
}
const Tte = {},
  MN = String(
    Tte?.VITE_GOOGLE_CLIENT_ID ||
      "115901737966-apr0r5lag42bppve61set2li52vp9iqb.apps.googleusercontent.com",
  ),
  Vv = "vr-google-auth",
  xte = 15 * 6e4,
  _k = () => {
    const s = crypto.getRandomValues(new Uint8Array(32));
    return btoa(String.fromCharCode(...s))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  };
function _te() {
  try {
    return (
      window.top === window && !location.pathname.startsWith("/x/") && !!MN
    );
  } catch {
    return !1;
  }
}
function SN(s, e, t = "") {
  const i = {
    state: t + _k(),
    nonce: _k(),
    intent: s,
    username: e || void 0,
    returnTo: location.pathname + location.search,
    at: Date.now(),
  };
  try {
    sessionStorage.setItem(Vv, JSON.stringify(i));
  } catch {}
  const n = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  return (
    (n.search = new URLSearchParams({
      client_id: MN,
      redirect_uri: `${location.origin}/`,
      response_type: "id_token",
      scope: "openid email profile",
      nonce: i.nonce,
      state: i.state,
      prompt: "select_account",
    }).toString()),
    n.toString()
  );
}
function Rte(s = "login", e) {
  location.assign(SN(s, e));
}
async function kte(s = "login", e) {
  const t = SN(s, e, "app.");
  let i;
  try {
    i = await tp("webAuth", { url: t, scheme: "voxelrush" });
  } catch (o) {
    try {
      sessionStorage.removeItem(Vv);
    } catch {}
    if (o instanceof Error && o.message === "cancelled") return "cancelled";
    throw o;
  }
  const n = i.includes("#") ? i.slice(i.indexOf("#")) : "";
  return (await AN(n, !1)) ?? "cancelled";
}
const Cte = () => Pn,
  EN = () =>
    /(^#|&)(id_token|error)=/.test(location.hash) &&
    /(^#|&)state=/.test(location.hash);
async function Lte() {
  return EN() ? AN(location.hash, !0) : null;
}
async function AN(s, e) {
  const t = new URLSearchParams(s.replace(/^#/, ""));
  let i = null;
  try {
    ((i = JSON.parse(sessionStorage.getItem(Vv) || "null")),
      sessionStorage.removeItem(Vv));
  } catch {
    i = null;
  }
  if (
    (e &&
      history.replaceState(
        history.state,
        "",
        i?.returnTo || location.pathname + location.search,
      ),
    !i || t.get("state") !== i.state || Date.now() - i.at > xte)
  )
    throw new Error("google-state");
  if (t.get("error")) return "cancelled";
  const n = t.get("id_token");
  if (!n) throw new Error("google-state");
  const o = await Vi("/auth/google", "POST", {
    credential: n,
    nonce: i.nonce,
    intent: i.intent,
    ...(i.username ? { username: i.username } : {}),
  });
  return (af(o.token), rf(o.user), o);
}
const Ite =
  '<svg class="g-logo" viewBox="0 0 48 48" width="18" height="18" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';
function Pte(s, e) {
  const t = document.createElement("button");
  return (
    (t.type = "button"),
    (t.className = "google-signin"),
    (t.innerHTML = `${Ite}<span></span>`),
    (t.querySelector("span").textContent = s),
    (t.onclick = e),
    t
  );
}
const Ote = () => Pn,
  Nte = () => {
    const s = crypto.getRandomValues(new Uint8Array(32));
    return btoa(String.fromCharCode(...s))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  };
async function Dte(s = "login", e) {
  const t = Nte();
  let i;
  try {
    i = await tp("appleSignIn", { nonce: t });
  } catch (o) {
    if (o instanceof Error && /cancel|1000|1001/i.test(o.message))
      return "cancelled";
    throw o;
  }
  const n = await Vi("/auth/apple", "POST", {
    credential: i.identityToken,
    nonce: t,
    intent: s,
    ...(i.authorizationCode ? { authorizationCode: i.authorizationCode } : {}),
    ...(e ? { username: e } : {}),
    ...(i.givenName ? { givenName: i.givenName.slice(0, 64) } : {}),
    ...(i.familyName ? { familyName: i.familyName.slice(0, 64) } : {}),
  });
  return (af(n.token), rf(n.user), n);
}
const Hte =
  '<svg class="apple-logo" viewBox="0 0 170 170" width="17" height="17" aria-hidden="true"><path fill="currentColor" d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.2-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.93.21-9.84-1.96-14.75-6.52-3.13-2.73-7.04-7.41-11.73-14.04-5.03-7.08-9.17-15.29-12.41-24.65-3.47-10.11-5.21-19.9-5.21-29.38 0-10.86 2.35-20.22 7.04-28.07 3.69-6.3 8.6-11.27 14.75-14.92s12.79-5.51 19.95-5.63c3.91 0 9.05 1.21 15.43 3.59 6.36 2.39 10.45 3.6 12.24 3.6 1.34 0 5.88-1.42 13.57-4.24 7.27-2.62 13.41-3.7 18.44-3.28 13.63 1.1 23.87 6.47 30.69 16.15-12.19 7.39-18.22 17.73-18.1 31 .11 10.34 3.86 18.94 11.23 25.77 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.1-2.96 15.67-8.86 22.67-7.12 8.32-15.73 13.13-25.07 12.37a25.2 25.2 0 0 1-.19-3.07c0-7.78 3.39-16.1 9.4-22.91 3-3.44 6.82-6.31 11.45-8.6 4.62-2.26 8.99-3.51 13.1-3.72.12 1.08.17 2.17.17 3.26z"/></svg>';
function Bte(s, e) {
  const t = document.createElement("button");
  return (
    (t.type = "button"),
    (t.className = "apple-signin"),
    (t.innerHTML = `${Hte}<span></span>`),
    (t.querySelector("span").textContent = s),
    (t.onclick = e),
    t
  );
}
function zte(s, e) {
  const t = new URLSearchParams(s),
    i = (t.get("mode") ?? "").toLowerCase(),
    n = t.get("server") ?? "",
    o =
      /^(wss:\/\/[a-z0-9.-]+|ws:\/\/(localhost|127\.0\.0\.1))(:\d+)?\/?$/i.test(
        n,
      )
        ? n
        : "";
  return {
    mode: /^[a-z][a-z0-9-]{0,39}$/.test(i) ? i : "",
    address: o,
    automatic: t.get("menu") !== "1" && (e || t.has("mode") || t.has("server")),
  };
}
const Rk = {
    frontline: {
      address: "wss://frontline.voxelrush.app",
      name: "Voxel Rush · Frontline",
    },
    tdm: {
      address: "wss://tdm.voxelrush.app",
      name: "Voxel Rush · Team Deathmatch",
    },
    armsrace: {
      address: "wss://armsrace.voxelrush.app",
      name: "Voxel Rush · Arms Race",
    },
    survival: {
      address: "wss://dev-server.voxelrush.app",
      name: "Voxel Rush Dev Server",
    },
  },
  TN = (s) => (Object.hasOwn(Rk, s) ? Rk[s] : void 0),
  eE = ["frontline", "tdm", "armsrace", "survival"];
function Fy(s) {
  if (
    s.mode === "frontline" ||
    s.mode === "tdm" ||
    s.mode === "armsrace" ||
    s.mode === "survival"
  )
    return s.mode;
  const e = `${s.name} ${s.address}`.toLowerCase();
  return /arms ?race|гонка вооружений/.test(e)
    ? "armsrace"
    : /\btdm\b|deathmatch|командный бой/.test(e)
      ? "tdm"
      : /frontline|фронт/.test(e)
        ? "frontline"
        : "survival";
}
const Fte = new Set([
    "wss://frontline-s3.voxelrush.app",
    "wss://air.voxelrush.app",
  ]),
  Wh = (s) => Fte.has(s.address.replace(/\/+$/, "").toLowerCase()),
  Ute = 8,
  Gte = 80;
function xN(s, e, t = Math.random) {
  const i = (d) => !!d.max_players && (d.current_players ?? 0) >= d.max_players;
  let n = s.filter((d) => d.online !== !1 && !i(d) && !Wh(d));
  n.some((d) => d.trusted) && (n = n.filter((d) => d.trusted));
  const o = n.map((d) => e?.(d)).filter((d) => d != null);
  if (o.length) {
    const d = Math.min(...o);
    n = n.filter((u) => (e?.(u) ?? d) <= d + Gte);
  }
  if (n.length <= 1) return n[0];
  const a = (d) => d.current_players ?? 0,
    r = n.reduce((d, u) => (a(u) > a(d) ? u : d));
  if (a(r) < Ute) return r;
  const l = (d) => a(d) / (d.max_players || 40),
    c = Math.min(...n.map(l)),
    h = n.filter((d) => l(d) - c <= 1.5 / (d.max_players || 40));
  return h[Math.min(h.length - 1, Math.floor(t() * h.length))];
}
function Wte(s, e) {
  const t = TN(e),
    i = s.filter(
      (n) =>
        n.online &&
        n.trusted &&
        (n.mode === e ||
          (t
            ? n.address === t.address || (eE.includes(e) && Fy(n) === e)
            : n.name
                .toLowerCase()
                .split(/[^a-z0-9-]+/)
                .includes(e))),
    );
  return xN(i) ?? i.find((n) => !Wh(n));
}
function $te(s) {
  const e = new URL(s);
  return (
    e.searchParams.delete("mode"),
    e.searchParams.delete("server"),
    e.searchParams.set("menu", "1"),
    e.href
  );
}
const mi = (s) => document.getElementById(s),
  rt = (s, e = "", t = "") => {
    const i = document.createElement(s);
    return ((i.textContent = e), (i.className = t), i);
  };
function Hn(s, e, t = !1) {
  const i = rt("button", "", `lobby-button${t ? " quiet" : ""}`);
  return (
    (i.type = "button"),
    e && (i.innerHTML = Ks(e)),
    i.append(rt("span", s)),
    i
  );
}
