// index-BeUlFSPp 181 — math
// Lines 101491-101826 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const Zv = [
    "#ffd84a",
    "#ff4b5c",
    "#4cff7a",
    "#4cc8ff",
    "#ffffff",
    "#ff7ae0",
    "#ff9a3c",
    "#b38cff",
  ],
  jN = ["static", "scroll", "blink", "rainbow", "panel"],
  wE = 1800,
  Une = 44,
  Gne = "@ru";
function Wne(s, e) {
  const t = s.split(`
`),
    i = t.findIndex((n) => n.trim() === Gne);
  return i < 0
    ? s
    : (e === "ru" ? t.slice(i + 1) : t.slice(0, i)).join(`
`);
}
const $ne = 1024;
function XN(s) {
  const e = s ?? {},
    t = String(e.text ?? "")
      .replace(/\r/g, "")
      .split(
        `
`,
      )
      .slice(0, Une)
      .join(
        `
`,
      )
      .slice(0, wE),
    i = Zv.includes(e.color) ? e.color : Zv[0],
    n = jN.includes(e.fx) ? e.fx : "static";
  return { text: t, color: i, fx: n };
}
function Vne(s, e, t, i, n) {
  if (s(t, i, n) !== v.LED_SCREEN) return null;
  const o = e(t, i, n) & 3,
    [a, r] = Qo[o],
    l = r,
    c = -a,
    h = (M, E) => M * l + E * c,
    d = new Set(),
    u = [[t, i, n]],
    f = [];
  d.add(`${t},${i},${n}`);
  for (let M = 0; M < u.length && f.length < $ne; M++) {
    const [E, A, T] = u[M];
    f.push([E, A, T]);
    for (const [x, R, _] of [
      [l, 0, c],
      [-l, 0, -c],
      [0, 1, 0],
      [0, -1, 0],
    ]) {
      const C = E + x,
        P = A + R,
        O = T + _,
        B = `${C},${P},${O}`;
      d.has(B) ||
        P < 0 ||
        P > 127 ||
        (d.add(B),
        s(C, P, O) === v.LED_SCREEN &&
          (e(C, P, O) & 3) === o &&
          u.push([C, P, O]));
    }
  }
  let p = 1 / 0,
    m = -1 / 0,
    g = 1 / 0,
    y = -1 / 0;
  for (const [M, E, A] of f) {
    const T = h(M, A);
    ((p = Math.min(p, T)),
      (m = Math.max(m, T)),
      (g = Math.min(g, E)),
      (y = Math.max(y, E)));
  }
  const b = f
      .map(([M, E, A]) => ({ x: M, y: E, z: A, u: h(M, A) - p, v: y - E }))
      .sort((M, E) => M.v - E.v || M.u - E.u),
    S = b[0];
  return {
    facing: o,
    truncated: u.length > f.length,
    cells: b,
    width: m - p + 1,
    height: y - g + 1,
    key: `${S.x},${S.y},${S.z}`,
  };
}
function qne(s, e) {
  for (const t of s.cells) {
    const i = e(t.x, t.y, t.z);
    if (i) return { cell: t, content: i };
  }
  return null;
}
const Vp = (s, e, t) => `${s},${e},${t}`,
  Yw = '"Segoe UI", "Helvetica Neue", Roboto, Arial, sans-serif',
  aC = '"SF Mono", "Cascadia Mono", Consolas, "Roboto Mono", monospace';
function Kne(s, e, t) {
  const i = Math.max(48, Math.min(180, 2400 / Math.max(1, e, t))),
    n = Math.round(e * i),
    o = Math.round(t * i),
    a = document.createElement("canvas");
  ((a.width = n), (a.height = o));
  const r = a.getContext("2d"),
    l = s.color,
    c = r.createLinearGradient(0, 0, 0, o);
  (c.addColorStop(0, "#13213a"),
    c.addColorStop(0.5, "#0b1426"),
    c.addColorStop(1, "#070c18"),
    (r.fillStyle = c),
    r.fillRect(0, 0, n, o));
  const h = r.createRadialGradient(
    n * 0.5,
    -o * 0.2,
    0,
    n * 0.5,
    -o * 0.2,
    n * 0.9,
  );
  (h.addColorStop(0, `${l}33`),
    h.addColorStop(1, `${l}00`),
    (r.fillStyle = h),
    r.fillRect(0, 0, n, o),
    (r.fillStyle = "rgba(255,255,255,0.025)"));
  for (let S = 0; S < o; S += 4) r.fillRect(0, S, n, 1);
  const d = Math.max(10, Math.min(n, o) * 0.06);
  ((r.strokeStyle = `${l}aa`),
    (r.lineWidth = Math.max(2, i * 0.03)),
    r.strokeRect(d * 0.35, d * 0.35, n - d * 0.7, o - d * 0.7),
    (r.lineWidth = Math.max(3, i * 0.06)),
    (r.strokeStyle = l));
  const u = d * 1.1;
  for (const [S, M, E, A] of [
    [d * 0.35, d * 0.35, 1, 1],
    [n - d * 0.35, d * 0.35, -1, 1],
    [d * 0.35, o - d * 0.35, 1, -1],
    [n - d * 0.35, o - d * 0.35, -1, -1],
  ])
    (r.beginPath(),
      r.moveTo(S, M + A * u),
      r.lineTo(S, M),
      r.lineTo(S + E * u, M),
      r.stroke());
  const f = s.text.split(`
`),
    p = n - d * 2,
    m = f.map((S) => {
      const M = S.trimEnd();
      if (M.startsWith("# ")) return { kind: "title", a: M.slice(2) };
      if (M.startsWith("## ")) return { kind: "section", a: M.slice(3) };
      if (M.trim() === "---") return { kind: "rule", a: "" };
      const E = /^((?:\/|\[)[^—]*?)\s+[—–-]\s+(.*)$/.exec(M);
      return E
        ? { kind: "cmd", a: E[1].trim(), b: E[2] }
        : M.startsWith("* ") || M.startsWith("- ")
          ? { kind: "bullet", a: M.slice(2) }
          : { kind: "text", a: M };
    }),
    g = (S, M) => {
      const E = [];
      let A = "";
      for (const T of S.split(" ")) {
        const x = A ? `${A} ${T}` : T;
        r.measureText(x).width > M && A ? (E.push(A), (A = T)) : (A = x);
      }
      return (E.push(A), E);
    },
    y = (S, M) => {
      let E = d * 1.05;
      const A = `500 ${S}px ${Yw}`;
      for (const T of m)
        if (T.kind === "title") {
          const x = S * 1.75;
          r.font = `800 ${x}px ${Yw}`;
          const R = g(T.a.toUpperCase(), p);
          for (const _ of R)
            (M &&
              ((r.textAlign = "center"),
              (r.textBaseline = "top"),
              (r.shadowColor = l),
              (r.shadowBlur = x * 0.35),
              (r.fillStyle = "#ffffff"),
              r.fillText(_, n / 2, E),
              (r.shadowBlur = 0)),
              (E += x * 1.12));
          (M &&
            ((r.fillStyle = l),
            r.fillRect(
              n / 2 - p * 0.18,
              E + S * 0.05,
              p * 0.36,
              Math.max(2, S * 0.12),
            )),
            (E += S * 0.75));
        } else if (T.kind === "section") {
          const x = S * 1.08;
          ((r.font = `800 ${x}px ${Yw}`),
            (E += S * 0.25),
            M &&
              ((r.textAlign = "left"),
              (r.textBaseline = "top"),
              (r.fillStyle = l),
              r.fillRect(d, E + x * 0.12, Math.max(3, S * 0.16), x * 0.82),
              r.fillText(T.a.toUpperCase(), d + S * 0.45, E)),
            (E += x * 1.35));
        } else if (T.kind === "rule")
          (M &&
            ((r.fillStyle = `${l}55`),
            r.fillRect(d, E + S * 0.3, p, Math.max(1, S * 0.06))),
            (E += S * 0.7));
        else if (T.kind === "cmd") {
          r.font = `700 ${S * 0.92}px ${aC}`;
          const x = Math.min(p * 0.5, r.measureText(T.a).width + S * 0.7);
          r.font = A;
          const R = g(T.b ?? "", p - x - S * 0.6);
          if (M) {
            ((r.textBaseline = "middle"),
              (r.fillStyle = `${l}26`),
              (r.strokeStyle = `${l}cc`),
              (r.lineWidth = Math.max(1, S * 0.06)));
            const _ = S * 1.25,
              C = _ * 0.28;
            (r.beginPath(),
              r.roundRect(d, E, x, _, C),
              r.fill(),
              r.stroke(),
              (r.font = `700 ${S * 0.92}px ${aC}`),
              (r.fillStyle = l),
              (r.textAlign = "center"),
              r.fillText(T.a, d + x / 2, E + _ / 2, x - S * 0.3),
              (r.font = A),
              (r.fillStyle = "#e8eef8"),
              (r.textAlign = "left"),
              R.forEach((P, O) =>
                r.fillText(P, d + x + S * 0.6, E + _ / 2 + O * S * 1.25),
              ));
          }
          E += Math.max(S * 1.25, R.length * S * 1.25) + S * 0.4;
        } else {
          r.font = A;
          const x = T.kind === "bullet" ? S * 1.1 : 0;
          ((T.a ? g(T.a, p - x) : [""]).forEach((_, C) => {
            (M &&
              ((r.textAlign = "left"),
              (r.textBaseline = "middle"),
              T.kind === "bullet" &&
                C === 0 &&
                ((r.fillStyle = l),
                r.beginPath(),
                r.arc(d + S * 0.35, E + S * 0.62, S * 0.17, 0, Math.PI * 2),
                r.fill()),
              (r.fillStyle = T.kind === "bullet" ? "#e8eef8" : "#c7d3e6"),
              r.fillText(_, d + x, E + S * 0.62)),
              (E += S * 1.25));
          }),
            (E += T.a ? S * 0.12 : S * 0.1));
        }
      return E + d * 0.6;
    };
  let b = Math.max(10, o / 13);
  for (; b > 8 && y(b, !1) > o;) b *= 0.93;
  return (y(b, !0), { canvas: a, repeat: 1 });
}
function ZN(s, e, t) {
  if (((s = { ...s, text: Wne(s.text, Y.language) }), s.fx === "panel"))
    return Kne(s, e, t);
  const i = Math.min(32, 2048 / Math.max(1, e, t)),
    n = Math.max(1, e * i),
    o = Math.max(1, t * i),
    a = s.fx === "scroll",
    r = s.text.toUpperCase();
  let l = r.split(`
`),
    c = 1;
  if (a) ((l = [l.join("   ").trim()]), (c = Math.max(1, Math.floor(o / 10))));
  else
    for (let E = Math.max(1, Math.floor(o / 8)); E >= 1; E--) {
      const A = Math.floor(n / (6 * E));
      if (A < 1) continue;
      const T = Yne(r, A);
      if (T.length * 8 * E <= o) {
        ((l = T), (c = E));
        break;
      }
      ((l = T), (c = E));
    }
  const h = Math.max(...l.map((E) => [...E].length)) * 6 * c,
    d = a ? Math.max(n, h) + n : n,
    u = Math.min(1, 4096 / d, Math.sqrt(2097152 / (d * o))),
    f = document.createElement("canvas");
  ((f.width = Math.max(1, Math.floor(d * u))),
    (f.height = Math.max(1, Math.floor(o * u))));
  const p = f.getContext("2d");
  (p.scale(f.width / d, f.height / o),
    (p.fillStyle = "#050608"),
    p.fillRect(0, 0, d, o));
  const m = Math.max(2, c);
  p.fillStyle = "#12151c";
  for (let E = 0; E < o; E += m)
    for (let A = 0; A < d; A += m)
      p.fillRect(A, E, Math.max(1, m - 1), Math.max(1, m - 1));
  const g = document.createElement("canvas");
  ((g.width = Math.ceil(d / c)), (g.height = Math.max(8, Math.ceil(o / c))));
  const y = g.getContext("2d");
  y.fillStyle = "#ffffff";
  const b = Math.floor((g.height - l.length * 8) / 2) + 1;
  l.forEach((E, A) => {
    if (a) {
      const T = document.createElement("canvas");
      ((T.width = Math.ceil(h / c) + 2), (T.height = 8));
      const x = T.getContext("2d");
      ((x.fillStyle = "#fff"),
        tC(x, E, 0, T.width),
        y.drawImage(T, Math.floor(n / c / 2), b));
    } else tC(y, E, b + A * 8, Math.floor(n / c));
  });
  const S = y.getImageData(0, 0, g.width, g.height).data;
  p.fillStyle = "#ffffff";
  const M = c >= 3 ? c - 1 : c;
  for (let E = 0; E < g.height; E++)
    for (let A = 0; A < g.width; A++)
      S[(E * g.width + A) * 4 + 3] > 128 && p.fillRect(A * c, E * c, M, M);
  return { canvas: f, repeat: a ? n / d : 1 };
}
