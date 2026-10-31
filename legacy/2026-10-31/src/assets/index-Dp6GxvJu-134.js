// index-Dp6GxvJu 134 — fillstyle
// Lines 79367-79566 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function xX(n, e, t) {
  if ((Lo(n, e, t), t || e === BLOCK.OWNERSHIP_TOTEM || e >= 256 || !BLOCKS[e])) return;
  const i = BLOCKS[e].color,
    s = (o) =>
      "#" +
      [16, 8, 0]
        .map((a) =>
          Math.round(Math.min(255, ((i >> a) & 255) * o))
            .toString(16)
            .padStart(2, "0"),
        )
        .join("");
  ((n.fillStyle = s(0.72)),
    n.fillRect(5, 7, 30, 28),
    (n.fillStyle = s(1.08)),
    n.beginPath(),
    n.moveTo(5, 7),
    n.lineTo(20, 2),
    n.lineTo(35, 7),
    n.lineTo(20, 13),
    n.closePath(),
    n.fill(),
    (n.fillStyle = s(0.88)),
    n.beginPath(),
    n.moveTo(20, 13),
    n.lineTo(35, 7),
    n.lineTo(35, 29),
    n.lineTo(20, 35),
    n.closePath(),
    n.fill(),
    (n.strokeStyle = "rgba(255,255,255,.18)"),
    (n.lineWidth = 1),
    n.strokeRect(5.5, 7.5, 29, 27));
}
function TX(n, e) {
  const t = [2, 4, 8, 16].indexOf(e),
    i = 20 + t * 5,
    s = 8 + t * 1.5,
    o = 20 - i / 2,
    a = 20 - s / 2;
  ((n.fillStyle = "#3a4048"),
    n.fillRect(o, a, i, s),
    (n.fillStyle = "#274046"),
    n.fillRect(o - 2, a - 1, 4, s + 2),
    n.fillRect(o + i - 2, a - 1, 4, s + 2),
    (n.fillStyle = "#6fd8f5"),
    n.beginPath(),
    n.ellipse(o, a + s / 2, 2, s / 2, 0, 0, 7),
    n.fill(),
    n.beginPath(),
    n.ellipse(o + i, a + s / 2, 2, s / 2, 0, 0, 7),
    n.fill(),
    (n.fillStyle = "#23262b"),
    n.fillRect(14, a + s, 12, 3),
    (n.fillStyle = "#fff"),
    (n.font = "bold 11px sans-serif"),
    (n.textAlign = "center"),
    (n.textBaseline = "middle"),
    n.fillText(`${e}×`, 20, 35));
}
function c_(n, e) {
  const t = WEAPON_ATTACHMENTS.length,
    i = 40 / (t + 1),
    s = 37.5;
  for (let o = 0; o < t; o++) {
    const a = WEAPON_ATTACHMENTS[o],
      r = i * (o + 1);
    (n.beginPath(),
      n.arc(r, s, 2.1, 0, 7),
      Cd(e, a) > 0
        ? ((n.fillStyle = "#7ec8ff"), n.fill())
        : ((n.strokeStyle = "rgba(255,255,255,0.45)"),
          (n.lineWidth = 1),
          n.stroke()));
  }
}
function AX(n) {
  return Ti(n) > 0 ? Ey(n, SETTINGS.language) : (Ki(n) ?? "");
}
function _X(n, e) {
  const t = ra(e);
  if (!t) return;
  const i = (l, c, h, d) => n.fillRect(l, c, h, d),
    s = ["#6b7348", "#5a6b3a", "#3f4a28", "#354550"][t.level - 1],
    o = ["#4a5234", "#3a4528", "#2a3218", "#1c2830"][t.level - 1],
    a = ["#8a9160", "#a8b070", "#c9b45a", "#71d5e5"][t.level - 1],
    r = ["#7a8488", "#9aa4a8", "#c0c8cc", "#d3e5ed"][t.level - 1];
  if (t.slot === "helmet")
    ((n.fillStyle = s),
      n.beginPath(),
      n.ellipse(20, 18, 13, 11, 0, Math.PI, 0),
      n.fill(),
      (n.fillStyle = o),
      i(7, 18, 26, 5),
      t.level >= 2 &&
        ((n.fillStyle = r),
        i(12, 20, 16, 4),
        (n.fillStyle = "rgba(80,140,180,0.45)"),
        i(13, 21, 14, 2)),
      t.level >= 3 &&
        ((n.fillStyle = a),
        i(17, 6, 6, 5),
        (n.fillStyle = "#222"),
        i(18, 4, 4, 3)),
      (n.fillStyle = o),
      i(8, 23, 3, 6),
      i(29, 23, 3, 6));
  else if (t.slot === "vest")
    ((n.fillStyle = s),
      i(10, 8, 20, 26),
      (n.fillStyle = o),
      i(10, 8, 5, 26),
      i(25, 8, 5, 26),
      (n.fillStyle = r),
      i(14, 12, 12, 14),
      (n.fillStyle = "rgba(255,255,255,0.12)"),
      i(15, 13, 3, 12),
      (n.fillStyle = o),
      i(12, 28, 5, 5),
      i(18, 28, 5, 5),
      i(24, 28, 5, 5),
      t.level >= 2 && ((n.fillStyle = a), i(15, 10, 10, 2)),
      t.level >= 3 &&
        ((n.fillStyle = a),
        i(13, 12, 2, 14),
        i(25, 12, 2, 14),
        (n.fillStyle = o),
        i(15, 24, 10, 3)));
  else if (t.slot === "pants")
    ((n.fillStyle = o),
      i(10, 6, 20, 4),
      (n.fillStyle = s),
      i(10, 10, 8, 24),
      i(22, 10, 8, 24),
      (n.fillStyle = r),
      i(11, 22, 6, 5),
      i(23, 22, 6, 5),
      t.level >= 2 && ((n.fillStyle = a), i(12, 14, 4, 3), i(24, 14, 4, 3)),
      t.level >= 3 &&
        ((n.fillStyle = r),
        i(10, 10, 8, 2),
        i(22, 10, 8, 2),
        (n.fillStyle = o),
        i(13, 28, 3, 6),
        i(25, 28, 3, 6)));
  else if (t.slot === "boots") {
    ((n.fillStyle = o),
      i(6, 14, 12, 16),
      i(22, 14, 12, 16),
      (n.fillStyle = s),
      i(6, 14, 12, 6),
      i(22, 14, 12, 6),
      (n.fillStyle = "#1a1a1a"),
      i(5, 28, 14, 5),
      i(21, 28, 14, 5),
      (n.fillStyle = a));
    for (let l = 0; l < t.level + 1; l++)
      (i(9, 16 + l * 3, 6, 1.5), i(25, 16 + l * 3, 6, 1.5));
    t.level >= 3 && ((n.fillStyle = r), i(8, 24, 8, 3), i(24, 24, 8, 3));
  }
  ((n.fillStyle = "rgba(0,0,0,0.45)"),
    n.beginPath(),
    n.arc(33, 33, 7, 0, 7),
    n.fill(),
    (n.fillStyle = a),
    (n.font = "bold 9px sans-serif"),
    (n.textAlign = "center"),
    (n.textBaseline = "middle"),
    n.fillText(String(t.level), 33, 33.5));
}
const h_ = "#e05cff",
  db = "fablecraft-waypoint";
function Sa(n) {
  const e = document.createElement("div");
  ((e.className = "slot"), Xj(e));
  const t = document.createElement("canvas");
  ((t.width = 40), (t.height = 40), e.appendChild(t));
  const i = document.createElement("div");
  ((i.className = "cnt"), e.appendChild(i));
  const s = document.createElement("div");
  ((s.className = "mag"), e.appendChild(s));
  const o = document.createElement("div");
  ((o.className = "durability"), e.appendChild(o));
  const a = document.createElement("div");
  if (((a.className = "suppressor-durability"), e.appendChild(a), n)) {
    const r = document.createElement("div");
    ((r.className = "key"), (r.textContent = n), e.appendChild(r));
  }
  return { el: e, canvas: t, cnt: i, mag: s, dur: o, supDur: a };
}
const ub = 2.4,
  RX = 26;
function fb(n, e, t, i, s) {
  const o = n - t,
    a = e - i,
    r = Math.hypot(o, a) || 1,
    l = (o / r) * -Math.sin(s) + (a / r) * -Math.cos(s),
    c = (o / r) * Math.cos(s) + (a / r) * -Math.sin(s);
  return (Math.atan2(c, l) * 180) / Math.PI;
}
