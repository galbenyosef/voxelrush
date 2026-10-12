// assets__index-Dp6GxvJu 202 — addcolorstop
// Lines 110901-110934 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function Dte(n) {
  const e = document.createElement("canvas");
  e.width = e.height = n;
  const t = e.getContext("2d"),
    i = n / 2,
    s = XI(90210);
  t.translate(i, i);
  for (let r = 0; r < 26; r++) {
    const l = s() * Math.PI * 2,
      c = 0.012 + s() * 0.075,
      h = i * (0.45 + s() * 0.55),
      d = 0.05 + s() * 0.14,
      u = t.createLinearGradient(0, 0, Math.cos(l) * h, Math.sin(l) * h);
    (u.addColorStop(0, `rgba(255,241,204,${d})`),
      u.addColorStop(0.35, `rgba(255,226,168,${d * 0.5})`),
      u.addColorStop(1, "rgba(255,210,140,0)"),
      (t.fillStyle = u),
      t.beginPath(),
      t.moveTo(0, 0),
      t.arc(0, 0, h, l - c, l + c),
      t.closePath(),
      t.fill());
  }
  const o = t.createRadialGradient(0, 0, 0, 0, 0, i * 0.35);
  (o.addColorStop(0, "rgba(255,246,220,0.30)"),
    o.addColorStop(1, "rgba(255,230,180,0)"),
    (t.fillStyle = o),
    t.fillRect(-i, -i, n, n));
  const a = new bi(e);
  return ((a.colorSpace = vi), a);
}
const Bte = new ze(2753802),
  Hte = new ze(9838618),
  zte = new ze(1, 0.32, 0.26);
