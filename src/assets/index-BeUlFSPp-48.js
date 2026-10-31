// index-BeUlFSPp 48 — data
// Lines 43237-43376 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function yi(s, e, t = 4) {
  const i = Array.from({ length: t }, (n, o) => Qq(s + o * 101, e << o));
  return (n, o) => {
    let a = 0,
      r = 0.5,
      l = 0;
    for (let c = 0; c < t; c++) {
      const h = e << c;
      ((a += i[c](n * h, o * h) * r), (l += r), (r *= 0.5));
    }
    return a / l;
  };
}
function ys(s, e, t, i) {
  for (const n of [-ie, 0, ie])
    for (const o of [-ie, 0, ie])
      s + n + t < 0 ||
        s + n - t > ie ||
        e + o + t < 0 ||
        e + o - t > ie ||
        i(s + n, e + o);
}
function ZS() {
  const s = document.createElement("canvas");
  return ((s.width = s.height = ie), s);
}
function gs(s, e, t, i = 1) {
  const n = document.createElement("canvas"),
    o = document.createElement("canvas");
  n.width = n.height = o.width = o.height = e;
  const a = n.getContext("2d"),
    r = o.getContext("2d"),
    l = a.createImageData(e, e),
    c = r.createImageData(e, e);
  for (let h = 0; h < e; h++)
    for (let d = 0; d < e; d++) {
      const u = t((d + 0.5) / e, (h + 0.5) / e),
        f = (h * e + d) * 4;
      ((l.data[f] = u.c[0]),
        (l.data[f + 1] = u.c[1]),
        (l.data[f + 2] = u.c[2]),
        (l.data[f + 3] = 255),
        (c.data[f] = (u.m ?? 0) * 255),
        (c.data[f + 1] = (u.g ?? 0) * 255),
        (c.data[f + 2] = (u.s ?? 0) * 255),
        (c.data[f + 3] = 255));
    }
  (a.putImageData(l, 0, 0), r.putImageData(c, 0, 0));
  for (const [h, d] of [
    [s.a, n],
    [s.f, o],
  ]) {
    (h.save(),
      (h.globalAlpha = i),
      (h.imageSmoothingEnabled = e < ie),
      (h.imageSmoothingQuality = "high"));
    for (const u of [-ie, 0, ie])
      for (const f of [-ie, 0, ie]) h.drawImage(d, u, f, ie, ie);
    h.restore();
  }
}
const Ei = (s, e = 0, t = 0) =>
  `rgb(${(s * 255) | 0},${(e * 255) | 0},${(t * 255) | 0})`;
function L_(s, e, t) {
  ((s.a.fillStyle = e),
    s.a.fillRect(0, 0, ie, ie),
    (s.f.fillStyle = t),
    s.f.fillRect(0, 0, ie, ie));
}
function $2(s, e) {
  (e(s.a, "a"), e(s.f, "f"));
}
function Xa(s, e, t = 10) {
  const i = yi(e, 64, 2),
    n = s.a.getImageData(0, 0, ie, ie),
    o = n.data,
    a = ls(e);
  for (let r = 0; r < ie; r++)
    for (let l = 0; l < ie; l++) {
      const c = (r * ie + l) * 4,
        h = (i(l / ie, r / ie) - 0.5) * t + (a() - 0.5) * t * 0.6;
      ((o[c] += h), (o[c + 1] += h), (o[c + 2] += h));
    }
  s.a.putImageData(n, 0, 0);
}
function Lr(s, e, t, i, n, o, a = 0, r = "800") {
  ys(t, i, n * e.length * 0.6, (l, c) => {
    (s.a.save(),
      s.a.translate(l, c),
      s.a.rotate(a),
      (s.a.font = `${r} ${n}px "Arial Narrow", Arial, sans-serif`),
      (s.a.fillStyle = o),
      (s.a.textAlign = "center"),
      (s.a.textBaseline = "middle"),
      s.a.fillText(e, 0, 0),
      s.a.restore());
  });
}
function _b(s) {
  return (e, t) => {
    let i = 9,
      n = 9,
      o = 0;
    for (let a = 0; a < s.length; a++) {
      let r = Math.abs(e - s[a][0]),
        l = Math.abs(t - s[a][1]);
      (r > 0.5 && (r = 1 - r), l > 0.5 && (l = 1 - l));
      const c = Math.sqrt(r * r + l * l);
      c < i ? ((n = i), (i = c), (o = a)) : c < n && (n = c);
    }
    return { id: o, d1: i, d2: n };
  };
}
function Xn(s, e, t, i, n) {
  ((s.strokeStyle = n), (s.lineCap = "round"), (s.lineJoin = "round"));
  for (let o = 1; o < e.length; o++) {
    const a = o / (e.length - 1);
    ((s.lineWidth = t + (i - t) * a),
      s.beginPath(),
      s.moveTo(e[o - 1][0], e[o - 1][1]),
      s.lineTo(e[o][0], e[o][1]),
      s.stroke());
  }
}
function I_(s, e, t, i, n, o, a) {
  (s.save(), s.translate(e, t), s.rotate(n));
  for (let r = 0; r < 5; r++)
    (s.rotate((Math.PI * 2) / 5),
      s.beginPath(),
      s.moveTo(0, 0),
      s.bezierCurveTo(-i * 0.55, -i * 0.35, -i * 0.5, -i * 1.05, 0, -i * 0.92),
      s.bezierCurveTo(i * 0.5, -i * 1.05, i * 0.55, -i * 0.35, 0, 0),
      (s.fillStyle = o),
      s.fill());
  (s.beginPath(),
    s.arc(0, 0, i * 0.22, 0, Math.PI * 2),
    (s.fillStyle = a),
    s.fill(),
    s.restore());
}
