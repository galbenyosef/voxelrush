// index-BeUlFSPp 34 — map
// Lines 37533-37714 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
for (const [s, e] of Object.entries(od)) Vm.push([e, N0[Number(s)]]);
for (const [s, e] of Object.entries(mA)) Vm.push([e, pA[Number(s)]]);
for (const s of le) s.labelEn && s.label && Vm.push([s.labelEn, s.label]);
for (const s of pa) Vm.push([s.nameEn, s.name]);
for (const [s, e] of Vm.sort(
  (t, i) =>
    Math.max(i[0].length, i[1].length) - Math.max(t[0].length, t[1].length),
))
  if (!(!s || !e || s === e))
    for (const t of ["en", "ru"]) {
      const i = t === "en" ? e : s,
        n = t === "en" ? s : e;
      if (!/\{\d+\}/.test(i)) {
        TP[t].set(i, n);
        continue;
      }
      const o = [],
        a = i
          .split(/(\{\d+\})/g)
          .map((r) =>
            /^\{\d+\}$/.test(r)
              ? (o.push(Number(r.slice(1, -1))), "([^\\n]*?)")
              : hV(r),
          )
          .join("");
      xP[t].push({ expression: new RegExp(`^${a}$`), target: n, slots: o });
    }
function kf(s, e = "en", t = 0) {
  if (!s || ((s = _P(s)), e === "en" && !/[а-яё]/i.test(s))) return s;
  const i = TP[e].get(s);
  if (i !== void 0) return i;
  const n = z2[e].get(s);
  if (n !== void 0) return n;
  let o = s;
  if (t < 5)
    for (const { expression: a, target: r, slots: l } of xP[e]) {
      const c = a.exec(s);
      if (!c) continue;
      const h = new Map(l.map((d, u) => [d, kf(c[u + 1], e, t + 1)]));
      o = r.replace(/\{(\d+)\}/g, (d, u) => h.get(Number(u)) ?? d);
      break;
    }
  return (
    o === s &&
      t < 5 &&
      /\n| · |, /.test(s) &&
      (o = s
        .split(/(\n| · |, )/)
        .map((a) => (/^(\n| · |, )$/.test(a) ? a : kf(a, e, t + 1)))
        .join("")),
    z2[e].size > 2048 && z2[e].clear(),
    z2[e].set(s, o),
    o
  );
}
const dV = new Set([
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
function rv(s, e, t = "") {
  return typeof s == "string"
    ? dV.has(t)
      ? kf(s, e)
      : s
    : Array.isArray(s)
      ? s.map((i) => rv(i, e, t))
      : s && typeof s == "object"
        ? Object.fromEntries(
            Object.entries(s).map(([i, n]) => [i, rv(n, e, i)]),
          )
        : s;
}
const uV = /\{(\d+)\}/g,
  fV = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  t_ = (s) => /\p{L}{2,}/u.test(s);
function pV(s, e = {}) {
  const t = new Map(),
    i = [],
    n = Object.entries(s);
  if (e.alias)
    for (const [d, u] of Object.entries(s)) {
      const f = e.alias(d);
      f !== d && !(f in s) && n.push([f, e.alias(u)]);
    }
  for (const [d, u] of n) {
    if (!d || typeof u != "string" || !u) continue;
    if (!/\{\d+\}/.test(d)) {
      t.set(d, u);
      continue;
    }
    const f = [],
      p = d.split(/(\{\d+\})/g);
    if (!t_(p.filter((g) => !/^\{\d+\}$/.test(g)).join(""))) continue;
    const m = p
      .map((g) =>
        /^\{\d+\}$/.test(g)
          ? (f.push(Number(g.slice(1, -1))), "([^\\n]*?)")
          : fV(g),
      )
      .join("");
    i.push({
      head: p[0],
      tail: p[p.length - 1],
      expression: new RegExp(`^${m}$`),
      target: u,
      slots: f,
    });
  }
  i.sort((d, u) => u.expression.source.length - d.expression.source.length);
  const o = new Map(),
    a = [],
    r = 3;
  for (const d of i) {
    if (d.head.length < r) {
      a.push(d);
      continue;
    }
    const u = d.head.slice(0, r);
    let f = o.get(u);
    (f || o.set(u, (f = [])), f.push(d));
  }
  const l = new Map(),
    c = (d, u, f) => {
      if (!u) return null;
      for (const {
        head: p,
        tail: m,
        expression: g,
        target: y,
        slots: b,
      } of u) {
        if (!d.startsWith(p) || !d.endsWith(m)) continue;
        const S = g.exec(d);
        if (!S) continue;
        const M = new Map(b.map((E, A) => [E, h(S[A + 1], f + 1)]));
        return y.replace(uV, (E, A) => M.get(Number(A)) ?? E);
      }
      return null;
    };
  function h(d, u = 0) {
    if (!d || (u > 0 && e.keep?.(d))) return d;
    const f = t.get(d);
    if (f !== void 0) return f;
    const p = l.get(d);
    if (p !== void 0) return p;
    let m = d;
    if (
      u < 5 &&
      t_(d) &&
      ((m = c(d, o.get(d.slice(0, r)), u) ?? c(d, a, u) ?? d),
      m === d &&
        /\n| · | — |, /.test(d) &&
        (m = d
          .split(/(\n| · | — |, )/)
          .map((g) => (/^(\n| · | — |, )$/.test(g) ? g : h(g, u + 1)))
          .join("")),
      m === d)
    ) {
      const g = /^([^:\n]{1,60}): (.+)$/s.exec(d);
      g && (m = `${h(g[1], u + 1)}: ${h(g[2], u + 1)}`);
    }
    return (l.size > 4096 && l.clear(), l.set(d, m), m);
  }
  return { translate: (d) => h(d), has: (d) => t.has(d) || h(d) !== d };
}
