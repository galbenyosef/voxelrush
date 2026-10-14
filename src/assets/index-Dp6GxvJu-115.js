// index-Dp6GxvJu 115 — replace
// Lines 69491-69680 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function X6(n) {
  const e = n.trim();
  if (!e) return null;
  const t = e.toLowerCase();
  if (/(^|[^0-9])(1488|14_?88|8814)([^0-9]|$)/.test(t)) return "hate";
  const i = t.replace(/[^a-z]/g, ""),
    s = t.replace(/[0-9]/g, (c) => ob[c] ?? "").replace(/[^a-z]/g, ""),
    o = t
      .replace(/1/g, "l")
      .replace(/[0-9]/g, (c) => ob[c] ?? "")
      .replace(/[^a-z]/g, ""),
    a = [...new Set([i, s, o])].filter(Boolean);
  if (a.some((c) => lj.has(c))) return null;
  if (
    a
      .map((c) => c.split("jewel").join("·"))
      .some(
        (c) => hj.some((h) => c.includes(h)) && dj.some((h) => c.includes(h)),
      )
  )
    return "hate";
  for (const { kind: c, tests: h } of fj)
    for (const d of a) {
      let u = d;
      for (const f of cj) u = u.split(f).join("·");
      if (h.some((f) => f.test(u))) return c;
    }
  const r = new Set(a);
  for (const c of e.split(new RegExp("[_0-9]+|(?<=[a-z])(?=[A-Z])")))
    c && r.add(c.toLowerCase());
  for (const c of e
    .replace(/[0-9]/g, (h) => ob[h] ?? "")
    .split(new RegExp("_+|(?<=[a-z])(?=[A-Z])")))
    c && r.add(c.toLowerCase());
  for (const c of [...r]) r.add(c.replace(/^x+|x+$/g, ""));
  const l = new Set([...r].map(mj));
  for (const { kind: c, set: h } of pj) {
    for (const d of r) if (h.has(d)) return c;
    if (c !== "staff") {
      for (const d of l) if (h.has(d)) return c;
    }
  }
  return null;
}
function gj(n, e) {
  const t = new URLSearchParams(n),
    i = (t.get("mode") ?? "").toLowerCase(),
    s = t.get("server") ?? "",
    o =
      /^(wss:\/\/[a-z0-9.-]+|ws:\/\/(localhost|127\.0\.0\.1))(:\d+)?\/?$/i.test(
        s,
      )
        ? s
        : "";
  return {
    mode: /^[a-z][a-z0-9-]{0,39}$/.test(i) ? i : "",
    address: o,
    automatic: t.get("menu") !== "1" && (e || t.has("mode") || t.has("server")),
  };
}
const Z6 = {
    frontline: {
      address: "wss://frontline.voxelrush.app",
      name: "Voxel Rush · Frontline",
    },
    tdm: {
      address: "wss://tdm.voxelrush.app",
      name: "Voxel Rush · Team Deathmatch",
    },
    survival: {
      address: "wss://dev-server.voxelrush.app",
      name: "Voxel Rush Dev Server",
    },
  },
  rI = (n) => (Object.hasOwn(Z6, n) ? Z6[n] : void 0),
  pM = ["frontline", "tdm", "survival"];
function $2(n) {
  if (n.mode === "frontline" || n.mode === "tdm" || n.mode === "survival")
    return n.mode;
  const e = `${n.name} ${n.address}`.toLowerCase();
  return /\btdm\b|deathmatch|командный бой/.test(e)
    ? "tdm"
    : /frontline|фронт/.test(e)
      ? "frontline"
      : "survival";
}
const yj = 8,
  vj = 80;
function lI(n, e, t = Math.random) {
  const i = (d) => !!d.max_players && (d.current_players ?? 0) >= d.max_players;
  let s = n.filter((d) => d.online !== !1 && !i(d));
  s.some((d) => d.trusted) && (s = s.filter((d) => d.trusted));
  const o = s.map((d) => (e == null ? void 0 : e(d))).filter((d) => d != null);
  if (o.length) {
    const d = Math.min(...o);
    s = s.filter((u) => ((e == null ? void 0 : e(u)) ?? d) <= d + vj);
  }
  if (s.length <= 1) return s[0];
  const a = (d) => d.current_players ?? 0,
    r = s.reduce((d, u) => (a(u) > a(d) ? u : d));
  if (a(r) < yj) return r;
  const l = (d) => a(d) / (d.max_players || 40),
    c = Math.min(...s.map(l)),
    h = s.filter((d) => l(d) - c <= 1.5 / (d.max_players || 40));
  return h[Math.min(h.length - 1, Math.floor(t() * h.length))];
}
function bj(n, e) {
  const t = rI(e),
    i = n.filter(
      (s) =>
        s.online &&
        s.trusted &&
        (s.mode === e ||
          (t
            ? s.address === t.address || (pM.includes(e) && $2(s) === e)
            : s.name
                .toLowerCase()
                .split(/[^a-z0-9-]+/)
                .includes(e))),
    );
  return lI(i) ?? i[0];
}
function wj(n) {
  const e = new URL(n);
  return (
    e.searchParams.delete("mode"),
    e.searchParams.delete("server"),
    e.searchParams.set("menu", "1"),
    e.href
  );
}
const Mi = (n) => document.getElementById(n),
  dt = (n, e = "", t = "") => {
    const i = document.createElement(n);
    return ((i.textContent = e), (i.className = t), i);
  };
function qs(n, e, t = !1) {
  const i = dt("button", "", `lobby-button${t ? " quiet" : ""}`);
  return (
    (i.type = "button"),
    e && (i.innerHTML = Nn(e)),
    i.append(dt("span", n)),
    i
  );
}
const Q6 = (n) => Mi(n),
  Hm = {
    frontline: {
      name: ["Frontline", "Линия фронта"],
      tag: ["CONQUEST · 20 VS 20", "ЗАХВАТ · 20 НА 20"],
      desc: [
        "Tanks, helicopters and five flags. Take the ground, drain the enemy.",
        "Танки, вертолёты и пять флагов. Захватывайте землю, сжигайте очки врага.",
      ],
      facts: [
        ["Vehicles", "Техника"],
        ["15 min", "15 мин"],
      ],
      colors: ["#ff9a3d", "#5a2a0c"],
      art: ["vehicle", P.TANK],
    },
    tdm: {
      name: ["Team Deathmatch", "Командный бой"],
      tag: ["15 VS 15 · SIROCCO", "15 НА 15 · СИРОККО"],
      desc: [
        "Close quarters in a walled desert town. Most kills in 10 minutes wins.",
        "Ближний бой в пустынном городке. Побеждает тот, кто убьёт больше за 10 минут.",
      ],
      facts: [
        ["Infantry", "Пехота"],
        ["10 min", "10 мин"],
      ],
      colors: ["#ff4d5e", "#4a0f19"],
      art: ["showcase", E.AK47],
    },
    survival: {
      name: ["Survival", "Выживание"],
      tag: ["OPEN WORLD", "ОТКРЫТЫЙ МИР"],
      desc: [
        "Build, mine and trade in a living world — and hold it against raids.",
        "Стройте, добывайте и торгуйте в живом мире — и держите его против набегов.",
      ],
      facts: [
        ["Build", "Стройка"],
        ["Economy", "Экономика"],
      ],
      colors: ["#6fdc8c", "#0f3a24"],
      art: ["showcase", E.DRILL_METAL],
    },
  };
