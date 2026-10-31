// index-BeUlFSPp 224 — addcolorstop
// Lines 117538-117574 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Xre(s) {
  const e = document.createElement("canvas");
  e.width = e.height = s;
  const t = e.getContext("2d"),
    i = s / 2,
    n = d9(90210);
  t.translate(i, i);
  for (let r = 0; r < 26; r++) {
    const l = n() * Math.PI * 2,
      c = 0.012 + n() * 0.075,
      h = i * (0.45 + n() * 0.55),
      d = 0.05 + n() * 0.14,
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
    t.fillRect(-i, -i, s, s));
  const a = new Si(e);
  return ((a.colorSpace = Ii), a);
}
const Zre = new Ge(2753802),
  Qre = new Ge(9838618),
  Jre = new Ge(1, 0.32, 0.26),
  ele = new Ge(0.72, 0.8, 1),
  tle = new Ge(0.52, 0.5, 0.86),
  ile = new Ge(0.24, 0.2, 0.26);
