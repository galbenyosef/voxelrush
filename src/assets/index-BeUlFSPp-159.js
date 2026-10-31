// index-BeUlFSPp 159 — fillstyle
// Lines 87180-87395 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Zie(s, e, t) {
  if ((Vo(s, e, t), t || e === v.OWNERSHIP_TOTEM || e >= 256 || !le[e])) return;
  const i = le[e].color,
    n = (o) =>
      "#" +
      [16, 8, 0]
        .map((a) =>
          Math.round(Math.min(255, ((i >> a) & 255) * o))
            .toString(16)
            .padStart(2, "0"),
        )
        .join("");
  ((s.fillStyle = n(0.72)),
    s.fillRect(5, 7, 30, 28),
    (s.fillStyle = n(1.08)),
    s.beginPath(),
    s.moveTo(5, 7),
    s.lineTo(20, 2),
    s.lineTo(35, 7),
    s.lineTo(20, 13),
    s.closePath(),
    s.fill(),
    (s.fillStyle = n(0.88)),
    s.beginPath(),
    s.moveTo(20, 13),
    s.lineTo(35, 7),
    s.lineTo(35, 29),
    s.lineTo(20, 35),
    s.closePath(),
    s.fill(),
    (s.strokeStyle = "rgba(255,255,255,.18)"),
    (s.lineWidth = 1),
    s.strokeRect(5.5, 7.5, 29, 27));
}
function Qie(s, e) {
  const t = [2, 4, 8, 16].indexOf(e),
    i = 20 + t * 5,
    n = 8 + t * 1.5,
    o = 20 - i / 2,
    a = 20 - n / 2;
  ((s.fillStyle = "#3a4048"),
    s.fillRect(o, a, i, n),
    (s.fillStyle = "#274046"),
    s.fillRect(o - 2, a - 1, 4, n + 2),
    s.fillRect(o + i - 2, a - 1, 4, n + 2),
    (s.fillStyle = "#6fd8f5"),
    s.beginPath(),
    s.ellipse(o, a + n / 2, 2, n / 2, 0, 0, 7),
    s.fill(),
    s.beginPath(),
    s.ellipse(o + i, a + n / 2, 2, n / 2, 0, 0, 7),
    s.fill(),
    (s.fillStyle = "#23262b"),
    s.fillRect(14, a + n, 12, 3),
    (s.fillStyle = "#fff"),
    (s.font = "bold 11px sans-serif"),
    (s.textAlign = "center"),
    (s.textBaseline = "middle"),
    s.fillText(`${e}×`, 20, 35));
}
function Fk(s, e) {
  const t = ad.length,
    i = 40 / (t + 1),
    n = 37.5;
  for (let o = 0; o < t; o++) {
    const a = ad[o],
      r = i * (o + 1);
    (s.beginPath(),
      s.arc(r, n, 2.1, 0, 7),
      Dh(e, a) > 0
        ? ((s.fillStyle = "#7ec8ff"), s.fill())
        : ((s.strokeStyle = "rgba(255,255,255,0.45)"),
          (s.lineWidth = 1),
          s.stroke()));
  }
}
function Jie(s) {
  return ai(s) > 0 ? fc(s) : (Li(s) ?? "");
}
function rE(s) {
  const e = Aie(s);
  if (e.length) return { fits: !0, ids: e };
  if (Sd[s]) return null;
  const t = ai(s) > 0 || G0[s] ? _l(s) : [];
  return t.length ? { fits: !1, ids: t } : null;
}
const ON = (s) => (s ? I("Fits", "Подходит") : z("catAmmo"));
function ese(s) {
  const e = rE(s);
  return e
    ? `
${ON(e.fits)}: ${e.ids.map(h0).join(" · ")}`
    : "";
}
function tse(s, e) {
  const t = Ia(e);
  if (!t) return;
  const i = (l, c, h, d) => s.fillRect(l, c, h, d),
    n = ["#6b7348", "#5a6b3a", "#3f4a28", "#354550"][t.level - 1],
    o = ["#4a5234", "#3a4528", "#2a3218", "#1c2830"][t.level - 1],
    a = ["#8a9160", "#a8b070", "#c9b45a", "#71d5e5"][t.level - 1],
    r = ["#7a8488", "#9aa4a8", "#c0c8cc", "#d3e5ed"][t.level - 1];
  if (t.slot === "helmet")
    ((s.fillStyle = n),
      s.beginPath(),
      s.ellipse(20, 18, 13, 11, 0, Math.PI, 0),
      s.fill(),
      (s.fillStyle = o),
      i(7, 18, 26, 5),
      t.level >= 2 &&
        ((s.fillStyle = r),
        i(12, 20, 16, 4),
        (s.fillStyle = "rgba(80,140,180,0.45)"),
        i(13, 21, 14, 2)),
      t.level >= 3 &&
        ((s.fillStyle = a),
        i(17, 6, 6, 5),
        (s.fillStyle = "#222"),
        i(18, 4, 4, 3)),
      (s.fillStyle = o),
      i(8, 23, 3, 6),
      i(29, 23, 3, 6));
  else if (t.slot === "vest")
    ((s.fillStyle = n),
      i(10, 8, 20, 26),
      (s.fillStyle = o),
      i(10, 8, 5, 26),
      i(25, 8, 5, 26),
      (s.fillStyle = r),
      i(14, 12, 12, 14),
      (s.fillStyle = "rgba(255,255,255,0.12)"),
      i(15, 13, 3, 12),
      (s.fillStyle = o),
      i(12, 28, 5, 5),
      i(18, 28, 5, 5),
      i(24, 28, 5, 5),
      t.level >= 2 && ((s.fillStyle = a), i(15, 10, 10, 2)),
      t.level >= 3 &&
        ((s.fillStyle = a),
        i(13, 12, 2, 14),
        i(25, 12, 2, 14),
        (s.fillStyle = o),
        i(15, 24, 10, 3)));
  else if (t.slot === "pants")
    ((s.fillStyle = o),
      i(10, 6, 20, 4),
      (s.fillStyle = n),
      i(10, 10, 8, 24),
      i(22, 10, 8, 24),
      (s.fillStyle = r),
      i(11, 22, 6, 5),
      i(23, 22, 6, 5),
      t.level >= 2 && ((s.fillStyle = a), i(12, 14, 4, 3), i(24, 14, 4, 3)),
      t.level >= 3 &&
        ((s.fillStyle = r),
        i(10, 10, 8, 2),
        i(22, 10, 8, 2),
        (s.fillStyle = o),
        i(13, 28, 3, 6),
        i(25, 28, 3, 6)));
  else if (t.slot === "boots") {
    ((s.fillStyle = o),
      i(6, 14, 12, 16),
      i(22, 14, 12, 16),
      (s.fillStyle = n),
      i(6, 14, 12, 6),
      i(22, 14, 12, 6),
      (s.fillStyle = "#1a1a1a"),
      i(5, 28, 14, 5),
      i(21, 28, 14, 5),
      (s.fillStyle = a));
    for (let l = 0; l < t.level + 1; l++)
      (i(9, 16 + l * 3, 6, 1.5), i(25, 16 + l * 3, 6, 1.5));
    t.level >= 3 && ((s.fillStyle = r), i(8, 24, 8, 3), i(24, 24, 8, 3));
  }
  ((s.fillStyle = "rgba(0,0,0,0.45)"),
    s.beginPath(),
    s.arc(33, 33, 7, 0, 7),
    s.fill(),
    (s.fillStyle = a),
    (s.font = "bold 9px sans-serif"),
    (s.textAlign = "center"),
    (s.textBaseline = "middle"),
    s.fillText(String(t.level), 33, 33.5));
}
const Uk = "#e05cff",
  Ow = "fablecraft-waypoint";
function ir(s) {
  const e = document.createElement("div");
  ((e.className = "slot"), yie(e));
  const t = document.createElement("canvas");
  ((t.width = 40), (t.height = 40), e.appendChild(t));
  const i = document.createElement("div");
  ((i.className = "cnt"), e.appendChild(i));
  const n = document.createElement("div");
  ((n.className = "mag"), e.appendChild(n));
  const o = document.createElement("div");
  ((o.className = "durability"), e.appendChild(o));
  const a = document.createElement("div");
  if (((a.className = "suppressor-durability"), e.appendChild(a), s)) {
    const r = document.createElement("div");
    ((r.className = "key"), (r.textContent = s), e.appendChild(r));
  }
  return { el: e, canvas: t, cnt: i, mag: n, dur: o, supDur: a };
}
const Nw = 2.4,
  ise = 26;
function Dw(s, e, t, i, n) {
  const o = s - t,
    a = e - i,
    r = Math.hypot(o, a) || 1,
    l = (o / r) * -Math.sin(n) + (a / r) * -Math.cos(n),
    c = (o / r) * Math.cos(n) + (a / r) * -Math.sin(n);
  return (Math.atan2(c, l) * 180) / Math.PI;
}
const Au = 60;
