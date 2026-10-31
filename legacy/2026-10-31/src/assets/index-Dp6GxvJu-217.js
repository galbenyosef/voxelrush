// index-Dp6GxvJu 217 — math
// Lines 120909-121070 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function xie(n) {
  const e = Eie(90210),
    t = n * (0.5 + (e() - 0.5) * 0.18),
    i = n * (0.5 + (e() - 0.5) * 0.18),
    s = [],
    o = [],
    a = 3 + Math.floor(e() * 2),
    r = (l, c, h, d, u, f, p, m) => {
      const y = f / d;
      for (let g = 0; g < d; g++) {
        h += (e() - 0.5) * 1.1;
        const b = n * (0.06 + e() * 0.07) * (m ? 0.75 : 1),
          S = Math.max(1, Math.min(n - 2, l + Math.cos(h) * b)),
          M = Math.max(1, Math.min(n - 2, c + Math.sin(h) * b)),
          x = u + g * y;
        if (
          (s.push({
            x0: l,
            y0: c,
            x1: S,
            y1: M,
            birth: x,
            grown: x + y,
            width: p * (1 - g / (d + 2)),
          }),
          m < 2 && g >= 1 && e() < (m ? 0.3 : 0.55))
        ) {
          const T = e() < 0.5 ? -1 : 1;
          r(
            S,
            M,
            h + T * (0.7 + e() * 0.7),
            2 + Math.floor(e() * 3),
            x + y * 0.6,
            f * 0.6,
            p * 0.65,
            m + 1,
          );
        }
        if (
          (m === 0 &&
            g >= 2 &&
            e() < 0.4 &&
            o.push({
              x: S,
              y: M,
              r: 1.2 + e() * 1.6,
              birth: Math.min(0.98, x + 0.25 + e() * 0.3),
            }),
          (l = S),
          (c = M),
          l <= 1 || c <= 1 || l >= n - 2 || c >= n - 2)
        )
          break;
      }
    };
  for (let l = 0; l < a; l++) {
    const c = (l / a) * Math.PI * 2 + (e() - 0.5) * 0.9;
    r(t, i, c, 5 + Math.floor(e() * 3), l * 0.04, 0.78, 2.6, 0);
  }
  for (let l = 0; l < 6; l++) {
    const c = e() * Math.PI * 2,
      h = c + 0.5 + e() * 0.6,
      d = n * (0.2 + e() * 0.2);
    s.push({
      x0: t + Math.cos(c) * d,
      y0: i + Math.sin(c) * d,
      x1: t + Math.cos(h) * d * (0.9 + e() * 0.2),
      y1: i + Math.sin(h) * d * (0.9 + e() * 0.2),
      birth: 0.62 + e() * 0.25,
      grown: 0.9 + e() * 0.1,
      width: 1,
    });
  }
  return { segments: s, chips: o, ox: t, oy: i };
}
function Tie(n, e, t, i, s) {
  if ((n.clearRect(0, 0, e, e), t <= 0)) return;
  const o = t / (i - 1),
    a = e / 64;
  ((n.lineCap = "round"), (n.lineJoin = "round"));
  const r = s.segments
    .filter((l) => l.birth <= o)
    .map((l) => {
      const c = Math.min(1, (o - l.birth) / Math.max(1e-6, l.grown - l.birth));
      return {
        ...l,
        x1: l.x0 + (l.x1 - l.x0) * c,
        y1: l.y0 + (l.y1 - l.y0) * c,
        k: c,
      };
    });
  n.strokeStyle = "rgba(0,0,0,0.22)";
  for (const l of r)
    ((n.lineWidth = (l.width + 2.4) * a * (0.6 + 0.4 * o)),
      n.beginPath(),
      n.moveTo(l.x0, l.y0),
      n.lineTo(l.x1, l.y1),
      n.stroke());
  n.strokeStyle = "rgba(255,255,255,0.16)";
  for (const l of r)
    ((n.lineWidth = Math.max(0.6, l.width * 0.55) * a),
      n.beginPath(),
      n.moveTo(l.x0 - 0.8 * a, l.y0 - 0.8 * a),
      n.lineTo(l.x1 - 0.8 * a, l.y1 - 0.8 * a),
      n.stroke());
  for (const l of r)
    ((n.strokeStyle = `rgba(10,8,6,${(0.72 + 0.26 * o).toFixed(3)})`),
      (n.lineWidth = Math.max(0.8, l.width * (0.55 + 0.75 * o)) * a),
      n.beginPath(),
      n.moveTo(l.x0, l.y0),
      n.lineTo(l.x1, l.y1),
      n.stroke());
  for (const l of s.chips) {
    if (l.birth > o) continue;
    const c = Math.min(1, (o - l.birth) / 0.15);
    ((n.fillStyle = "rgba(8,6,5,0.78)"),
      n.beginPath(),
      n.arc(l.x, l.y, l.r * a * c, 0, Math.PI * 2),
      n.fill(),
      (n.strokeStyle = "rgba(255,255,255,0.2)"),
      (n.lineWidth = 0.7 * a),
      n.beginPath(),
      n.arc(
        l.x - 0.5 * a,
        l.y - 0.5 * a,
        l.r * a * c,
        Math.PI * 0.9,
        Math.PI * 1.9,
      ),
      n.stroke());
  }
  if (o > 0.3) {
    const l = (1 + 2.5 * (o - 0.3)) * a,
      c = n.createRadialGradient(s.ox, s.oy, 0, s.ox, s.oy, l * 2.2);
    (c.addColorStop(0, `rgba(6,5,4,${(0.5 * (o - 0.3)).toFixed(3)})`),
      c.addColorStop(1, "rgba(6,5,4,0)"),
      (n.fillStyle = c),
      n.beginPath(),
      n.arc(s.ox, s.oy, l * 2.2, 0, Math.PI * 2),
      n.fill());
  }
}
let h2 = null;
function Aie(n = 10, e = 64) {
  if (h2 && h2.length === n) return h2;
  const t = xie(e),
    i = [];
  for (let s = 0; s < n; s++) {
    const o = document.createElement("canvas");
    o.width = o.height = e;
    const a = o.getContext("2d");
    Tie(a, e, s, n, t);
    const r = new bi(o);
    ((r.magFilter = ji),
      (r.minFilter = Jn),
      (r.generateMipmaps = !1),
      (r.needsUpdate = !0),
      i.push(r));
  }
  return ((h2 = i), i);
}
