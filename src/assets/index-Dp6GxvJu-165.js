// index-Dp6GxvJu 165 — math
// Lines 96287-96622 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const $g = [
    "#ffd84a",
    "#ff4b5c",
    "#4cff7a",
    "#4cc8ff",
    "#ffffff",
    "#ff7ae0",
    "#ff9a3c",
    "#b38cff",
  ],
  NI = ["static", "scroll", "blink", "rainbow", "panel"],
  OM = 1800,
  eJ = 44,
  tJ = "@ru";
function iJ(n, e) {
  const t = n.split(`
`),
    i = t.findIndex((s) => s.trim() === tJ);
  return i < 0
    ? n
    : (e === "ru" ? t.slice(i + 1) : t.slice(0, i)).join(`
`);
}
const nJ = 1024;
function DI(n) {
  const e = n ?? {},
    t = String(e.text ?? "")
      .replace(/\r/g, "")
      .split(
        `
`,
      )
      .slice(0, eJ)
      .join(
        `
`,
      )
      .slice(0, OM),
    i = $g.includes(e.color) ? e.color : $g[0],
    s = NI.includes(e.fx) ? e.fx : "static";
  return { text: t, color: i, fx: s };
}
function sJ(n, e, t, i, s) {
  if (n(t, i, s) !== BLOCK.LED_SCREEN) return null;
  const o = e(t, i, s) & 3,
    [a, r] = xo[o],
    l = r,
    c = -a,
    h = (M, x) => M * l + x * c,
    d = new Set(),
    u = [[t, i, s]],
    f = [];
  d.add(`${t},${i},${s}`);
  for (let M = 0; M < u.length && f.length < nJ; M++) {
    const [x, T, A] = u[M];
    f.push([x, T, A]);
    for (const [_, C, R] of [
      [l, 0, c],
      [-l, 0, -c],
      [0, 1, 0],
      [0, -1, 0],
    ]) {
      const L = x + _,
        N = T + C,
        D = A + R,
        H = `${L},${N},${D}`;
      d.has(H) ||
        N < 0 ||
        N > 127 ||
        (d.add(H),
        n(L, N, D) === BLOCK.LED_SCREEN &&
          (e(L, N, D) & 3) === o &&
          u.push([L, N, D]));
    }
  }
  let p = 1 / 0,
    m = -1 / 0,
    y = 1 / 0,
    g = -1 / 0;
  for (const [M, x, T] of f) {
    const A = h(M, T);
    ((p = Math.min(p, A)),
      (m = Math.max(m, A)),
      (y = Math.min(y, x)),
      (g = Math.max(g, x)));
  }
  const b = f
      .map(([M, x, T]) => ({ x: M, y: x, z: T, u: h(M, T) - p, v: g - x }))
      .sort((M, x) => M.v - x.v || M.u - x.u),
    S = b[0];
  return {
    facing: o,
    truncated: u.length > f.length,
    cells: b,
    width: m - p + 1,
    height: g - y + 1,
    key: `${S.x},${S.y},${S.z}`,
  };
}
function oJ(n, e) {
  for (const t of n.cells) {
    const i = e(t.x, t.y, t.z);
    if (i) return { cell: t, content: i };
  }
  return null;
}
const yf = (n, e, t) => `${n},${e},${t}`,
  Ab = '"Segoe UI", "Helvetica Neue", Roboto, Arial, sans-serif',
  B_ = '"SF Mono", "Cascadia Mono", Consolas, "Roboto Mono", monospace';
function aJ(n, e, t) {
  const i = Math.max(48, Math.min(180, 2400 / Math.max(1, e, t))),
    s = Math.round(e * i),
    o = Math.round(t * i),
    a = document.createElement("canvas");
  ((a.width = s), (a.height = o));
  const r = a.getContext("2d"),
    l = n.color,
    c = r.createLinearGradient(0, 0, 0, o);
  (c.addColorStop(0, "#13213a"),
    c.addColorStop(0.5, "#0b1426"),
    c.addColorStop(1, "#070c18"),
    (r.fillStyle = c),
    r.fillRect(0, 0, s, o));
  const h = r.createRadialGradient(
    s * 0.5,
    -o * 0.2,
    0,
    s * 0.5,
    -o * 0.2,
    s * 0.9,
  );
  (h.addColorStop(0, `${l}33`),
    h.addColorStop(1, `${l}00`),
    (r.fillStyle = h),
    r.fillRect(0, 0, s, o),
    (r.fillStyle = "rgba(255,255,255,0.025)"));
  for (let S = 0; S < o; S += 4) r.fillRect(0, S, s, 1);
  const d = Math.max(10, Math.min(s, o) * 0.06);
  ((r.strokeStyle = `${l}aa`),
    (r.lineWidth = Math.max(2, i * 0.03)),
    r.strokeRect(d * 0.35, d * 0.35, s - d * 0.7, o - d * 0.7),
    (r.lineWidth = Math.max(3, i * 0.06)),
    (r.strokeStyle = l));
  const u = d * 1.1;
  for (const [S, M, x, T] of [
    [d * 0.35, d * 0.35, 1, 1],
    [s - d * 0.35, d * 0.35, -1, 1],
    [d * 0.35, o - d * 0.35, 1, -1],
    [s - d * 0.35, o - d * 0.35, -1, -1],
  ])
    (r.beginPath(),
      r.moveTo(S, M + T * u),
      r.lineTo(S, M),
      r.lineTo(S + x * u, M),
      r.stroke());
  const f = n.text.split(`
`),
    p = s - d * 2,
    m = f.map((S) => {
      const M = S.trimEnd();
      if (M.startsWith("# ")) return { kind: "title", a: M.slice(2) };
      if (M.startsWith("## ")) return { kind: "section", a: M.slice(3) };
      if (M.trim() === "---") return { kind: "rule", a: "" };
      const x = /^((?:\/|\[)[^—]*?)\s+[—–-]\s+(.*)$/.exec(M);
      return x
        ? { kind: "cmd", a: x[1].trim(), b: x[2] }
        : M.startsWith("* ") || M.startsWith("- ")
          ? { kind: "bullet", a: M.slice(2) }
          : { kind: "text", a: M };
    }),
    y = (S, M) => {
      const x = [];
      let T = "";
      for (const A of S.split(" ")) {
        const _ = T ? `${T} ${A}` : A;
        r.measureText(_).width > M && T ? (x.push(T), (T = A)) : (T = _);
      }
      return (x.push(T), x);
    },
    g = (S, M) => {
      let x = d * 1.05;
      const T = `500 ${S}px ${Ab}`;
      for (const A of m)
        if (A.kind === "title") {
          const _ = S * 1.75;
          r.font = `800 ${_}px ${Ab}`;
          const C = y(A.a.toUpperCase(), p);
          for (const R of C)
            (M &&
              ((r.textAlign = "center"),
              (r.textBaseline = "top"),
              (r.shadowColor = l),
              (r.shadowBlur = _ * 0.35),
              (r.fillStyle = "#ffffff"),
              r.fillText(R, s / 2, x),
              (r.shadowBlur = 0)),
              (x += _ * 1.12));
          (M &&
            ((r.fillStyle = l),
            r.fillRect(
              s / 2 - p * 0.18,
              x + S * 0.05,
              p * 0.36,
              Math.max(2, S * 0.12),
            )),
            (x += S * 0.75));
        } else if (A.kind === "section") {
          const _ = S * 1.08;
          ((r.font = `800 ${_}px ${Ab}`),
            (x += S * 0.25),
            M &&
              ((r.textAlign = "left"),
              (r.textBaseline = "top"),
              (r.fillStyle = l),
              r.fillRect(d, x + _ * 0.12, Math.max(3, S * 0.16), _ * 0.82),
              r.fillText(A.a.toUpperCase(), d + S * 0.45, x)),
            (x += _ * 1.35));
        } else if (A.kind === "rule")
          (M &&
            ((r.fillStyle = `${l}55`),
            r.fillRect(d, x + S * 0.3, p, Math.max(1, S * 0.06))),
            (x += S * 0.7));
        else if (A.kind === "cmd") {
          r.font = `700 ${S * 0.92}px ${B_}`;
          const _ = Math.min(p * 0.5, r.measureText(A.a).width + S * 0.7);
          r.font = T;
          const C = y(A.b ?? "", p - _ - S * 0.6);
          if (M) {
            ((r.textBaseline = "middle"),
              (r.fillStyle = `${l}26`),
              (r.strokeStyle = `${l}cc`),
              (r.lineWidth = Math.max(1, S * 0.06)));
            const R = S * 1.25,
              L = R * 0.28;
            (r.beginPath(),
              r.roundRect(d, x, _, R, L),
              r.fill(),
              r.stroke(),
              (r.font = `700 ${S * 0.92}px ${B_}`),
              (r.fillStyle = l),
              (r.textAlign = "center"),
              r.fillText(A.a, d + _ / 2, x + R / 2, _ - S * 0.3),
              (r.font = T),
              (r.fillStyle = "#e8eef8"),
              (r.textAlign = "left"),
              C.forEach((N, D) =>
                r.fillText(N, d + _ + S * 0.6, x + R / 2 + D * S * 1.25),
              ));
          }
          x += Math.max(S * 1.25, C.length * S * 1.25) + S * 0.4;
        } else {
          r.font = T;
          const _ = A.kind === "bullet" ? S * 1.1 : 0;
          ((A.a ? y(A.a, p - _) : [""]).forEach((R, L) => {
            (M &&
              ((r.textAlign = "left"),
              (r.textBaseline = "middle"),
              A.kind === "bullet" &&
                L === 0 &&
                ((r.fillStyle = l),
                r.beginPath(),
                r.arc(d + S * 0.35, x + S * 0.62, S * 0.17, 0, Math.PI * 2),
                r.fill()),
              (r.fillStyle = A.kind === "bullet" ? "#e8eef8" : "#c7d3e6"),
              r.fillText(R, d + _, x + S * 0.62)),
              (x += S * 1.25));
          }),
            (x += A.a ? S * 0.12 : S * 0.1));
        }
      return x + d * 0.6;
    };
  let b = Math.max(10, o / 13);
  for (; b > 8 && g(b, !1) > o;) b *= 0.93;
  return (g(b, !0), { canvas: a, repeat: 1 });
}
function BI(n, e, t) {
  if (((n = { ...n, text: iJ(n.text, SETTINGS.language) }), n.fx === "panel"))
    return aJ(n, e, t);
  const i = Math.min(32, 2048 / Math.max(1, e, t)),
    s = Math.max(1, e * i),
    o = Math.max(1, t * i),
    a = n.fx === "scroll",
    r = n.text.toUpperCase();
  let l = r.split(`
`),
    c = 1;
  if (a) ((l = [l.join("   ").trim()]), (c = Math.max(1, Math.floor(o / 10))));
  else
    for (let x = Math.max(1, Math.floor(o / 8)); x >= 1; x--) {
      const T = Math.floor(s / (6 * x));
      if (T < 1) continue;
      const A = rJ(r, T);
      if (A.length * 8 * x <= o) {
        ((l = A), (c = x));
        break;
      }
      ((l = A), (c = x));
    }
  const h = Math.max(...l.map((x) => [...x].length)) * 6 * c,
    d = a ? Math.max(s, h) + s : s,
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
  for (let x = 0; x < o; x += m)
    for (let T = 0; T < d; T += m)
      p.fillRect(T, x, Math.max(1, m - 1), Math.max(1, m - 1));
  const y = document.createElement("canvas");
  ((y.width = Math.ceil(d / c)), (y.height = Math.max(8, Math.ceil(o / c))));
  const g = y.getContext("2d");
  g.fillStyle = "#ffffff";
  const b = Math.floor((y.height - l.length * 8) / 2) + 1;
  l.forEach((x, T) => {
    if (a) {
      const A = document.createElement("canvas");
      ((A.width = Math.ceil(h / c) + 2), (A.height = 8));
      const _ = A.getContext("2d");
      ((_.fillStyle = "#fff"),
        qp(_, x, 0, A.width),
        g.drawImage(A, Math.floor(s / c / 2), b));
    } else qp(g, x, b + T * 8, Math.floor(s / c));
  });
  const S = g.getImageData(0, 0, y.width, y.height).data;
  p.fillStyle = "#ffffff";
  const M = c >= 3 ? c - 1 : c;
  for (let x = 0; x < y.height; x++)
    for (let T = 0; T < y.width; T++)
      S[(x * y.width + T) * 4 + 3] > 128 && p.fillRect(T * c, x * c, M, M);
  return { canvas: f, repeat: a ? s / d : 1 };
}
