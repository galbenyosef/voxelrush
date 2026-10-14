// index-Dp6GxvJu 18 — data
// Lines 32579-32875 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const YC = [
    {
      id: E.DYNAMITE_SMALL,
      radius: 2,
      damage: 45,
      terrain: 1.6,
      delay: 3,
      price: 90,
      color: 12147521,
      shape: "stick",
      description: "Точный малый взрыв",
      descriptionEn: "Compact precision blast",
    },
    {
      id: E.DYNAMITE_BUNDLE,
      radius: 3.5,
      damage: 110,
      terrain: 2.8,
      delay: 4,
      price: 240,
      color: 12138280,
      shape: "bundle",
      description: "Связка из семи шашек",
      descriptionEn: "Seven-stick demolition bundle",
    },
    {
      id: E.BREACH_CHARGE,
      radius: 4.5,
      damage: 420,
      terrain: 3.8,
      delay: 4,
      price: 520,
      color: 7573624,
      shape: "case",
      description: "Контактный заряд для укреплений",
      descriptionEn: "Contact charge for fortifications",
    },
    {
      id: E.FRAG_BOMB,
      radius: 7,
      damage: 160,
      terrain: 2.5,
      delay: 5,
      price: 850,
      color: 7176292,
      shape: "sphere",
      description: "Широкая зона поражения, малый кратер",
      descriptionEn: "Wide damage area, small crater",
    },
    {
      id: E.INCENDIARY_BOMB,
      radius: 9,
      damage: 230,
      terrain: 3.2,
      delay: 6,
      price: 1400,
      color: 13067564,
      shape: "barrel",
      description: "Огненный выброс и густой дым",
      descriptionEn: "Fire eruption and dense smoke",
    },
    {
      id: E.HEAVY_BOMB,
      radius: 14,
      damage: 650,
      terrain: 10,
      delay: 8,
      price: 3200,
      color: 5401721,
      shape: "bomb",
      description: "Мощный взрыв и глубокий кратер",
      descriptionEn: "Heavy blast and deep crater",
    },
    {
      id: E.THERMOBARIC_BOMB,
      radius: 24,
      damage: 1e3,
      terrain: 12,
      delay: 10,
      price: 8500,
      color: 13213267,
      shape: "capsule",
      description: "Огненный купол и ударная волна",
      descriptionEn: "Fire dome and pressure wave",
    },
    {
      id: E.NUCLEAR_CHARGE,
      radius: 80,
      damage: 2200,
      terrain: 24,
      delay: 15,
      price: 65e3,
      color: 13941591,
      shape: "nuclear",
      description: "Ядерная вспышка, гриб и кольцо пыли",
      descriptionEn: "Nuclear flash, mushroom cloud and dust ring",
    },
  ],
  jC = new Map(YC.map((n) => [n.id, n])),
  aa = (n) => jC.get(n),
  xa = (n) => n === E.C4 || jC.has(n),
  yU = 512,
  we = yU,
  bn = (n) => {
    const e = parseInt(n.slice(1), 16);
    return [(e >> 16) & 255, (e >> 8) & 255, e & 255];
  },
  _i = (n, e, t) => [
    n[0] + (e[0] - n[0]) * t,
    n[1] + (e[1] - n[1]) * t,
    n[2] + (e[2] - n[2]) * t,
  ],
  Hn = (n, e) => [n[0] * e, n[1] * e, n[2] * e],
  At = (n, e = 1) => `rgba(${n[0] | 0},${n[1] | 0},${n[2] | 0},${e})`,
  Wh = (n) => (n < 0 ? 0 : n > 1 ? 1 : n),
  Zo = (n, e, t) => {
    const i = Wh((t - n) / (e - n));
    return i * i * (3 - 2 * i);
  };
function Ga(n, e) {
  e = Wh(e) * (n.length - 1);
  const t = Math.min(n.length - 2, Math.floor(e));
  return _i(n[t], n[t + 1], e - t);
}
function En(n) {
  let e = n >>> 0 || 1;
  return () => (
    (e ^= e << 13),
    (e >>>= 0),
    (e ^= e >> 17),
    (e ^= e << 5),
    (e >>>= 0),
    e / 4294967296
  );
}
function vU(n, e) {
  const t = En(n),
    i = new Float32Array(e * e);
  for (let s = 0; s < i.length; s++) i[s] = t();
  return (s, o) => {
    const a = Math.floor(s),
      r = Math.floor(o),
      l = s - a,
      c = o - r,
      h = ((a % e) + e) % e,
      d = ((r % e) + e) % e,
      u = (h + 1) % e,
      f = (d + 1) % e,
      p = l * l * (3 - 2 * l),
      m = c * c * (3 - 2 * c),
      y = i[d * e + h],
      g = i[d * e + u],
      b = i[f * e + h],
      S = i[f * e + u];
    return y + (g - y) * p + (b - y) * m + (y - g - b + S) * p * m;
  };
}
function ki(n, e, t = 4) {
  const i = Array.from({ length: t }, (s, o) => vU(n + o * 101, e << o));
  return (s, o) => {
    let a = 0,
      r = 0.5,
      l = 0;
    for (let c = 0; c < t; c++) {
      const h = e << c;
      ((a += i[c](s * h, o * h) * r), (l += r), (r *= 0.5));
    }
    return a / l;
  };
}
function On(n, e, t, i) {
  for (const s of [-we, 0, we])
    for (const o of [-we, 0, we])
      n + s + t < 0 ||
        n + s - t > we ||
        e + o + t < 0 ||
        e + o - t > we ||
        i(n + s, e + o);
}
function vw() {
  const n = document.createElement("canvas");
  return ((n.width = n.height = we), n);
}
function zn(n, e, t, i = 1) {
  const s = document.createElement("canvas"),
    o = document.createElement("canvas");
  s.width = s.height = o.width = o.height = e;
  const a = s.getContext("2d"),
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
    [n.a, s],
    [n.f, o],
  ]) {
    (h.save(),
      (h.globalAlpha = i),
      (h.imageSmoothingEnabled = e < we),
      (h.imageSmoothingQuality = "high"));
    for (const u of [-we, 0, we])
      for (const f of [-we, 0, we]) h.drawImage(d, u, f, we, we);
    h.restore();
  }
}
const Vi = (n, e = 0, t = 0) =>
  `rgb(${(n * 255) | 0},${(e * 255) | 0},${(t * 255) | 0})`;
function Zx(n, e, t) {
  ((n.a.fillStyle = e),
    n.a.fillRect(0, 0, we, we),
    (n.f.fillStyle = t),
    n.f.fillRect(0, 0, we, we));
}
function d5(n, e) {
  (e(n.a, "a"), e(n.f, "f"));
}
function vh(n, e, t = 10) {
  const i = ki(e, 64, 2),
    s = n.a.getImageData(0, 0, we, we),
    o = s.data,
    a = En(e);
  for (let r = 0; r < we; r++)
    for (let l = 0; l < we; l++) {
      const c = (r * we + l) * 4,
        h = (i(l / we, r / we) - 0.5) * t + (a() - 0.5) * t * 0.6;
      ((o[c] += h), (o[c + 1] += h), (o[c + 2] += h));
    }
  n.a.putImageData(s, 0, 0);
}
function bh(n, e, t, i, s, o, a = 0, r = "800") {
  On(t, i, s * e.length * 0.6, (l, c) => {
    (n.a.save(),
      n.a.translate(l, c),
      n.a.rotate(a),
      (n.a.font = `${r} ${s}px "Arial Narrow", Arial, sans-serif`),
      (n.a.fillStyle = o),
      (n.a.textAlign = "center"),
      (n.a.textBaseline = "middle"),
      n.a.fillText(e, 0, 0),
      n.a.restore());
  });
}
function Qx(n) {
  return (e, t) => {
    let i = 9,
      s = 9,
      o = 0;
    for (let a = 0; a < n.length; a++) {
      let r = Math.abs(e - n[a][0]),
        l = Math.abs(t - n[a][1]);
      (r > 0.5 && (r = 1 - r), l > 0.5 && (l = 1 - l));
      const c = Math.sqrt(r * r + l * l);
      c < i ? ((s = i), (i = c), (o = a)) : c < s && (s = c);
    }
    return { id: o, d1: i, d2: s };
  };
}
function Qo(n, e, t, i, s) {
  ((n.strokeStyle = s), (n.lineCap = "round"), (n.lineJoin = "round"));
  for (let o = 1; o < e.length; o++) {
    const a = o / (e.length - 1);
    ((n.lineWidth = t + (i - t) * a),
      n.beginPath(),
      n.moveTo(e[o - 1][0], e[o - 1][1]),
      n.lineTo(e[o][0], e[o][1]),
      n.stroke());
  }
}
function Jx(n, e, t, i, s, o, a) {
  (n.save(), n.translate(e, t), n.rotate(s));
  for (let r = 0; r < 5; r++)
    (n.rotate((Math.PI * 2) / 5),
      n.beginPath(),
      n.moveTo(0, 0),
      n.bezierCurveTo(-i * 0.55, -i * 0.35, -i * 0.5, -i * 1.05, 0, -i * 0.92),
      n.bezierCurveTo(i * 0.5, -i * 1.05, i * 0.55, -i * 0.35, 0, 0),
      (n.fillStyle = o),
      n.fill());
  (n.beginPath(),
    n.arc(0, 0, i * 0.22, 0, Math.PI * 2),
    (n.fillStyle = a),
    n.fill(),
    n.restore());
}
