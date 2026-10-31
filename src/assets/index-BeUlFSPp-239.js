// index-BeUlFSPp 239 — math
// Lines 127947-128108 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Gle(s) {
  const e = Ule(90210),
    t = s * (0.5 + (e() - 0.5) * 0.18),
    i = s * (0.5 + (e() - 0.5) * 0.18),
    n = [],
    o = [],
    a = 3 + Math.floor(e() * 2),
    r = (l, c, h, d, u, f, p, m) => {
      const g = f / d;
      for (let y = 0; y < d; y++) {
        h += (e() - 0.5) * 1.1;
        const b = s * (0.06 + e() * 0.07) * (m ? 0.75 : 1),
          S = Math.max(1, Math.min(s - 2, l + Math.cos(h) * b)),
          M = Math.max(1, Math.min(s - 2, c + Math.sin(h) * b)),
          E = u + y * g;
        if (
          (n.push({
            x0: l,
            y0: c,
            x1: S,
            y1: M,
            birth: E,
            grown: E + g,
            width: p * (1 - y / (d + 2)),
          }),
          m < 2 && y >= 1 && e() < (m ? 0.3 : 0.55))
        ) {
          const A = e() < 0.5 ? -1 : 1;
          r(
            S,
            M,
            h + A * (0.7 + e() * 0.7),
            2 + Math.floor(e() * 3),
            E + g * 0.6,
            f * 0.6,
            p * 0.65,
            m + 1,
          );
        }
        if (
          (m === 0 &&
            y >= 2 &&
            e() < 0.4 &&
            o.push({
              x: S,
              y: M,
              r: 1.2 + e() * 1.6,
              birth: Math.min(0.98, E + 0.25 + e() * 0.3),
            }),
          (l = S),
          (c = M),
          l <= 1 || c <= 1 || l >= s - 2 || c >= s - 2)
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
      d = s * (0.2 + e() * 0.2);
    n.push({
      x0: t + Math.cos(c) * d,
      y0: i + Math.sin(c) * d,
      x1: t + Math.cos(h) * d * (0.9 + e() * 0.2),
      y1: i + Math.sin(h) * d * (0.9 + e() * 0.2),
      birth: 0.62 + e() * 0.25,
      grown: 0.9 + e() * 0.1,
      width: 1,
    });
  }
  return { segments: n, chips: o, ox: t, oy: i };
}
function Wle(s, e, t, i, n) {
  if ((s.clearRect(0, 0, e, e), t <= 0)) return;
  const o = t / (i - 1),
    a = e / 64;
  ((s.lineCap = "round"), (s.lineJoin = "round"));
  const r = n.segments
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
  s.strokeStyle = "rgba(0,0,0,0.22)";
  for (const l of r)
    ((s.lineWidth = (l.width + 2.4) * a * (0.6 + 0.4 * o)),
      s.beginPath(),
      s.moveTo(l.x0, l.y0),
      s.lineTo(l.x1, l.y1),
      s.stroke());
  s.strokeStyle = "rgba(255,255,255,0.16)";
  for (const l of r)
    ((s.lineWidth = Math.max(0.6, l.width * 0.55) * a),
      s.beginPath(),
      s.moveTo(l.x0 - 0.8 * a, l.y0 - 0.8 * a),
      s.lineTo(l.x1 - 0.8 * a, l.y1 - 0.8 * a),
      s.stroke());
  for (const l of r)
    ((s.strokeStyle = `rgba(10,8,6,${(0.72 + 0.26 * o).toFixed(3)})`),
      (s.lineWidth = Math.max(0.8, l.width * (0.55 + 0.75 * o)) * a),
      s.beginPath(),
      s.moveTo(l.x0, l.y0),
      s.lineTo(l.x1, l.y1),
      s.stroke());
  for (const l of n.chips) {
    if (l.birth > o) continue;
    const c = Math.min(1, (o - l.birth) / 0.15);
    ((s.fillStyle = "rgba(8,6,5,0.78)"),
      s.beginPath(),
      s.arc(l.x, l.y, l.r * a * c, 0, Math.PI * 2),
      s.fill(),
      (s.strokeStyle = "rgba(255,255,255,0.2)"),
      (s.lineWidth = 0.7 * a),
      s.beginPath(),
      s.arc(
        l.x - 0.5 * a,
        l.y - 0.5 * a,
        l.r * a * c,
        Math.PI * 0.9,
        Math.PI * 1.9,
      ),
      s.stroke());
  }
  if (o > 0.3) {
    const l = (1 + 2.5 * (o - 0.3)) * a,
      c = s.createRadialGradient(n.ox, n.oy, 0, n.ox, n.oy, l * 2.2);
    (c.addColorStop(0, `rgba(6,5,4,${(0.5 * (o - 0.3)).toFixed(3)})`),
      c.addColorStop(1, "rgba(6,5,4,0)"),
      (s.fillStyle = c),
      s.beginPath(),
      s.arc(n.ox, n.oy, l * 2.2, 0, Math.PI * 2),
      s.fill());
  }
}
let Zg = null;
function $le(s = 10, e = 64) {
  if (Zg && Zg.length === s) return Zg;
  const t = Gle(e),
    i = [];
  for (let n = 0; n < s; n++) {
    const o = document.createElement("canvas");
    o.width = o.height = e;
    const a = o.getContext("2d");
    Wle(a, e, n, s, t);
    const r = new Si(o);
    ((r.magFilter = as),
      (r.minFilter = pn),
      (r.generateMipmaps = !1),
      (r.needsUpdate = !0),
      i.push(r));
  }
  return ((Zg = i), i);
}
