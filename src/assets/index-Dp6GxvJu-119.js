// index-Dp6GxvJu 119 — math
// Lines 71848-72012 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function cI(n, e, t, i, s, o, a, r = "WORLD BOUNDARY") {
  if (!(a != null && a.radius)) return;
  const l = e / 2 + (a.centerX - a.radius - i.x) * s,
    c = t / 2 + (a.centerZ - a.radius - i.z) * o,
    h = a.radius * 2 * s,
    d = a.radius * 2 * o;
  if (
    (n.save(),
    n.beginPath(),
    n.rect(0, 0, e, t),
    n.clip(),
    n.beginPath(),
    n.rect(0, 0, e, t),
    n.rect(l, c, h, d),
    (n.fillStyle = "rgba(55, 12, 18, 0.55)"),
    n.fill("evenodd"),
    n.setLineDash([]),
    (n.lineJoin = "miter"),
    (n.strokeStyle = "#14090d"),
    (n.lineWidth = 5),
    n.strokeRect(l, c, h, d),
    (n.strokeStyle = "#ff765b"),
    (n.lineWidth = 2.5),
    n.strokeRect(l, c, h, d),
    e >= 300)
  ) {
    const u = c >= 0 && c <= t,
      f = c + d >= 0 && c + d <= t,
      p = l >= 0 && l <= e,
      m = l + h >= 0 && l + h <= e;
    if ((u || f || p || m) && l < e && l + h > 0 && c < t && c + d > 0) {
      ((n.font = "bold 11px monospace"),
        (n.textAlign = "left"),
        (n.textBaseline = "top"));
      const y = `${r} · ±${a.radius}`,
        g = n.measureText(y).width,
        b = Math.max(
          7,
          Math.min(e - g - 12, (p ? l : m ? l + h - g - 12 : l) + 8),
        ),
        S = Math.max(7, Math.min(t - 23, u ? c + 7 : f ? c + d - 22 : 9));
      ((n.fillStyle = "#14090de6"),
        n.fillRect(b - 4, S - 3, g + 8, 18),
        (n.fillStyle = "#ffad97"),
        n.fillText(y, b, S));
    }
  }
  n.restore();
}
function Oj(n, e, t) {
  return (
    n > 0 &&
    Number.isFinite(e) &&
    e >= n / 1600 &&
    Number.isFinite(t) &&
    t * e >= n * 0.025
  );
}
const Nj = {
  spawn: { color: "#7dffb0", glyph: "★", priority: 100 },
  village: { color: "#9fe08a", glyph: "⌂", priority: 60 },
  fortress: { color: "#ffb067", glyph: "♜", priority: 55 },
  airbase: { color: "#ffd36b", glyph: "✈", priority: 54 },
  naval: { color: "#7cc8ff", glyph: "⚓", priority: 53 },
  base: { color: "#ff9d5c", glyph: "✦", priority: 52 },
  site: { color: "#e8e1cf", glyph: "◆", priority: 40 },
  landmark: { color: "#f3e2a6", glyph: "▲", priority: 30 },
};
function Dj(n) {
  switch (n) {
    case 0:
      return "village";
    case 1:
      return "base";
    case 2:
      return "airbase";
    case 3:
      return "naval";
    case 4:
      return "fortress";
    default:
      return "site";
  }
}
function t_(n, e, t, i, s, o) {
  if (!o.length || s < e / 1600) return;
  const a = Math.max(9, Math.round(e * 0.024)),
    r = [],
    l = o
      .filter((c) => Oj(e, s, c.radius))
      .map((c) => ({
        label: c,
        style: Nj[c.kind],
        sx: e / 2 + (c.x - i.x) * s,
        sy: t / 2 + (c.z - i.z) * s,
      }))
      .filter(
        ({ sx: c, sy: h }) => c > -80 && c < e + 80 && h > -40 && h < t + 40,
      )
      .sort(
        (c, h) =>
          h.style.priority +
          h.label.radius * s * 0.4 -
          (c.style.priority + c.label.radius * s * 0.4),
      );
  (n.save(), (n.textBaseline = "middle"), (n.lineJoin = "round"));
  for (const { label: c, style: h, sx: d, sy: u } of l) {
    const f = c.kind === "spawn" || c.radius * s > 26,
      p = `${f ? 700 : 600} ${f ? a + 1 : a}px system-ui, "Segoe UI", Roboto, sans-serif`;
    n.font = p;
    const m = c.text.length > 34 ? `${c.text.slice(0, 32)}…` : c.text,
      y = n.measureText(m).width,
      g = a * 1.15,
      b = y + g + 10,
      S = a + 8,
      M = Math.max(2, Math.min(e - b - 2, d - b / 2)),
      x = Math.max(
        2,
        Math.min(t - S - 2, u - S - Math.min(14, c.radius * s * 0.35)),
      );
    if (
      r.some(
        ([A, _, C, R]) =>
          M < A + C + 3 && M + b + 3 > A && x < _ + R + 2 && x + S + 2 > _,
      )
    )
      continue;
    (r.push([M, x, b, S]),
      (n.strokeStyle = "rgba(6,14,22,.85)"),
      (n.lineWidth = 3),
      n.beginPath(),
      n.moveTo(d, x + S),
      n.lineTo(d, Math.max(x + S, u - 2)),
      n.stroke(),
      (n.strokeStyle = h.color),
      (n.lineWidth = 1),
      n.beginPath(),
      n.moveTo(d, x + S),
      n.lineTo(d, Math.max(x + S, u - 2)),
      n.stroke());
    const T = S / 2;
    (n.beginPath(),
      n.moveTo(M + T, x),
      n.lineTo(M + b - T, x),
      n.arc(M + b - T, x + T, T, -Math.PI / 2, Math.PI / 2),
      n.lineTo(M + T, x + S),
      n.arc(M + T, x + T, T, Math.PI / 2, Math.PI * 1.5),
      n.closePath(),
      (n.fillStyle =
        c.kind === "spawn" ? "rgba(6,40,26,.86)" : "rgba(8,16,26,.78)"),
      n.fill(),
      (n.strokeStyle = c.held ? "rgba(110,180,255,.95)" : `${h.color}aa`),
      (n.lineWidth = c.kind === "spawn" ? 1.6 : 1),
      n.stroke(),
      (n.fillStyle = c.held ? "#8cc4ff" : h.color),
      (n.font = `700 ${a}px system-ui, sans-serif`),
      (n.textAlign = "center"),
      n.fillText(h.glyph, M + 5 + g / 2, x + S / 2 + 0.5),
      (n.font = p),
      (n.textAlign = "left"),
      (n.fillStyle = "#f4f7fb"),
      n.fillText(m, M + 5 + g, x + S / 2 + 0.5));
  }
  n.restore();
}
