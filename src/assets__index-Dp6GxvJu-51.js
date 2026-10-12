// assets__index-Dp6GxvJu 51 — math
// Lines 44123-44412 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
Be[243] = (n, e, t) => {
  if (n === 0 || e === 0) return yi(255, 238, 160);
  if (n === 15 || e === 15) return yi(150, 102, 30);
  if (n === 1 || e === 1) return yi(246, 214, 110);
  if (n === 14 || e === 14) return yi(184, 130, 40);
  const i = Math.max(0, 1 - Math.abs(n - e + 2) / 2.2) * 34;
  return ie(228 + i, 178 + i, 62 + i * 0.6, 6)(n, e, t);
};
Be[244] = (n, e, t) => {
  const i = Bs(n + e, 8),
    s = Bs(n - e, 8);
  if (i === 0 && s === 0) return yi(214, 172, 96);
  if (i === 0 || s === 0) return ie(64, 10, 28, 4)(n, e, t);
  const o = (Math.min(i, 8 - i) + Math.min(s, 8 - s)) * 6;
  return ie(92 + o, 16 + o * 0.25, 42 + o * 0.4, 6)(n, e, t);
};
Be[245] = (n, e) => {
  const t = Bs(n, 8),
    i = Bs(e, 8),
    s = Math.hypot(t - 3.5, i - 3.5);
  return s < 1.1
    ? yi(255, 255, 236)
    : s < 2.1
      ? yi(255, 230, 150)
      : s < 2.8
        ? yi(255, 188, 92)
        : t === 7 || i === 7
          ? yi(120, 82, 32)
          : yi(176, 124, 46);
};
Be[246] = (n, e, t) => {
  const i = n === 3 ? 22 : n === 4 ? 12 : 0;
  return ie(38 + i, 28 + i, 58 + i, 4)(n, e, t);
};
Be[247] = (n, e, t) => ie(24, 112, 66, 8)(n, e, t);
Be[248] = (n, e) => {
  const t = n - 7.5,
    i = e - 7.5,
    s = Math.hypot(t, i),
    o = Math.atan2(i, t);
  if (s > 7.6) return yi(70, 38, 20);
  if (s > 6.3) return yi(118, 70, 36);
  if (s > 4.4) {
    const a = Math.floor(((o + Math.PI) / (Math.PI * 2)) * 18);
    return a === 0 ? yi(26, 140, 70) : a % 2 ? yi(186, 22, 34) : yi(22, 20, 26);
  }
  return s > 3.6
    ? yi(222, 186, 98)
    : s > 1.2
      ? yi(150, 92, 44)
      : yi(250, 222, 132);
};
Be[249] = (n, e) => {
  const t = Bs(n, 4),
    i = Bs(e, 4),
    s = Math.hypot(t - 1.5, i - 1.5);
  return s < 0.8
    ? yi(255, 255, 240)
    : s < 1.6
      ? yi(255, 222, 150)
      : yi(54, 34, 22);
};
Be[250] = (n, e, t) =>
  Bs(n + e, 6) === 0 || Bs(n - e, 6) === 0
    ? yi(150, 192, 236)
    : (n * 7 + e * 13) % 29 === 0
      ? yi(255, 255, 255)
      : ie(214, 236, 255, 8)(n, e, t);
Be[251] = (n, e, t) =>
  e === 0 || e === 15
    ? yi(220, 170, 70)
    : n % 2
      ? ie(250, 214, 150, 5)(n, e, t)
      : ie(255, 232, 176, 5)(n, e, t);
const fW = [
  [1, 34, 120, 60],
  [4, 190, 120, 40],
  [7, 220, 220, 230],
  [10, 150, 24, 40],
  [13, 40, 80, 170],
];
Be[252] = (n, e, t) => {
  if (e === 7 || e === 15) return yi(132, 84, 44);
  const i = e < 7 ? 0 : 1,
    s = i ? 14 : 6;
  for (const [o, a, r, l] of fW) {
    const c = (o + i * 3) % 4 === 0 ? 1 : 0;
    if ((n === o || n === o + 1) && e <= s && e >= s - 3 - c)
      return n === o ? yi(a, r, l) : yi(a * 0.7, r * 0.7, l * 0.7);
    if (n === o && e < s - 3 - c && e >= s - 5 - c)
      return yi(a * 0.8, r * 0.8, l * 0.8);
  }
  return ie(40, 24, 16, 4)(n, e, t);
};
Be[253] = (n, e, t) => {
  const i = Math.sin(e * hu * 3 + Math.sin(n * hu) * 1.6) * 9;
  return ie(96 + i, 54 + i * 0.6, 30 + i * 0.3, 5)(n, e, t);
};
const pW = [
  [214, 40, 48],
  [240, 196, 52],
  [44, 186, 92],
  [230, 230, 236],
  [70, 150, 255],
];
Be[254] = (n, e, t) => {
  if (n === 0 || n === 15 || e === 0 || e === 15) return yi(200, 152, 64);
  if (e >= 9 && e <= 12 && n >= 1 && n <= 14 && n % 3 !== 0) {
    const [i, s, o] = pW[Math.min(4, Math.floor((n - 1) / 3))];
    return e === 9
      ? yi(Math.min(255, i + 50), Math.min(255, s + 50), Math.min(255, o + 50))
      : yi(i, s, o);
  }
  return e === 4 && n >= 6 && n <= 9
    ? yi(8, 8, 10)
    : e === 4 && (n === 5 || n === 10)
      ? yi(200, 200, 210)
      : e === 2 && n % 4 === 2
        ? n % 8 === 2
          ? yi(255, 60, 60)
          : yi(80, 255, 120)
        : ie(30, 26, 40, 4)(n, e, t);
};
const mW = [
  [198, 30, 40],
  [30, 70, 180],
  [30, 140, 72],
  [26, 24, 30],
  [222, 178, 66],
];
Be[255] = (n, e) => {
  const [t, i, s] = mW[Math.floor(e / 3) % 5];
  return e % 3 === 2
    ? yi(t * 0.55, i * 0.55, s * 0.55)
    : (n + Math.floor(e / 3)) % 4 === 0
      ? yi(240, 236, 228)
      : yi(t, i, s);
};
Be[182] = (n, e) => {
  if (n === 0 || e === 0 || n === 15 || e === 15) return yi(34, 36, 44);
  const t = n % 2 === 1 && e % 2 === 1,
    i = n + e < 9 && n + e > 5 ? 10 : 0;
  return t ? yi(26 + i, 30 + i, 40 + i) : yi(10 + i, 11 + i, 15 + i);
};
Be[183] = (n, e, t) =>
  e % 4 === 1 && n > 2 && n < 13 ? yi(18, 19, 24) : ie(46, 48, 56, 4)(n, e, t);
Object.assign(ui, {
  182: "glass",
  183: "metal",
  239: "cloth",
  240: "cloth",
  241: "smooth",
  242: "smooth",
  243: "metal",
  244: "cloth",
  245: "glow",
  246: "smooth",
  247: "cloth",
  248: "smooth",
  249: "glow",
  250: "glass",
  251: "cloth",
  252: "smooth",
  253: "wood",
  254: "smooth",
  255: "smooth",
});
function gW(n, e, t) {
  let i = (n * 374761393 + e * 668265263 + t * 1013904223) | 0;
  return (
    (i = Math.imul(i ^ (i >>> 13), 1274126177)),
    ((i ^ (i >>> 16)) >>> 0) / 4294967295
  );
}
function yW(n, e, t, i, s) {
  n.fill(0);
  let o = 1,
    a = 0;
  for (let r = 0; r < i; r++) {
    const l = Math.max(1, Math.round(t.fx * (1 << r))),
      c = Math.max(1, Math.round(t.fy * (1 << r))),
      h = l + 1,
      d = new Float32Array(h * (c + 1));
    for (let u = 0; u <= c; u++)
      for (let f = 0; f <= l; f++) d[u * h + f] = gW(f, u, s + r * 7919);
    for (let u = 0; u < e; u++) {
      const f = ((u + 0.5) / e) * c,
        p = Math.min(c - 1, f | 0),
        m = f - p,
        y = m * m * (3 - 2 * m);
      for (let g = 0; g < e; g++) {
        const b = ((g + 0.5) / e) * l,
          S = Math.min(l - 1, b | 0),
          M = b - S,
          x = M * M * (3 - 2 * M),
          T = d[p * h + S],
          A = d[p * h + S + 1],
          _ = d[(p + 1) * h + S],
          C = d[(p + 1) * h + S + 1],
          R = T + (A - T) * x;
        n[u * e + g] += (R + (_ + (C - _) * x - R) * y) * o;
      }
    }
    ((a += o), (o *= 0.5));
  }
  for (let r = 0; r < n.length; r++) n[r] /= a;
}
const HT = [9, Bt + 2, Bt + 5, Bt + 8, Bt + 11, 201, 202, 203],
  vW = { 201: [150, 70, 22], 202: [112, 26, 22], 203: [168, 124, 30] };
function Bk(n = aW) {
  const e = document.createElement("canvas"),
    t = e.getContext("2d");
  let i = n,
    s = !0;
  function o(h, d, u, f) {
    const p = Be[h];
    if (!p) return;
    const m = Ll / u,
      y = uW[ui[h] ?? "stone"],
      g = Math.max(1, Math.min(y.oct + Math.round(Math.log2(u / 16)), 6));
    yW(f, u, y, g, 1e3 + h * 77);
    const b = (y.relief * u) / (g * Math.max(1, (y.fx + y.fy) / 2)),
      S = (h % mi) * u,
      M = Math.floor(h / mi) * u,
      x = _y(1e3 + h * 77),
      T = !s && HT.includes(h);
    for (let A = 0; A < u; A++)
      for (let _ = 0; _ < u; _++) {
        let C = p(
          Math.min(Ll - 1, (_ * m) | 0),
          Math.min(Ll - 1, (A * m) | 0),
          x,
        );
        T && C[3] === 0 && (C = [...(vW[h] ?? [49, 105, 39]), 255]);
        const R = ((M + A) * d.width + S + _) * 4;
        if (C[3] === 0) {
          d.data[R] = d.data[R + 1] = d.data[R + 2] = d.data[R + 3] = 0;
          continue;
        }
        const L = A * u + _,
          N = f[L],
          D = N - f[_ + 1 < u ? L + 1 : L] + (N - f[A + 1 < u ? L + u : L]),
          H = Math.max(0.55, Math.min(1.5, 1 + D * b + (N - 0.5) * y.tone));
        ((d.data[R] = Math.min(255, C[0] * H)),
          (d.data[R + 1] = Math.min(255, C[1] * H)),
          (d.data[R + 2] = Math.min(255, C[2] * H)),
          (d.data[R + 3] = C[3]));
      }
  }
  function a(h) {
    const d = mi * h;
    ((e.width = d), (e.height = d));
    const u = t.createImageData(d, d),
      f = new Float32Array(h * h);
    for (let p = 0; p < mi * mi; p++) o(p, u, h, f);
    t.putImageData(u, 0, 0);
  }
  a(i);
  const r = new bi(e);
  ((r.generateMipmaps = !1), (r.colorSpace = vi), (r.anisotropy = 4));
  const l = () => {
    ((r.magFilter = ji),
      (r.minFilter = i >= 64 ? Jn : ji),
      (r.needsUpdate = !0));
  };
  l();
  const c = {
    texture: r,
    canvas: e,
    resolution: i,
    drawTile(h, d, u, f, p) {
      const m = (h % mi) * i,
        y = Math.floor(h / mi) * i;
      ((d.imageSmoothingEnabled = i > 16),
        d.drawImage(e, m, y, i, i, u, f, p, p));
    },
    setFancyLeaves(h) {
      if (s === h) return;
      s = h;
      const d = t.getImageData(0, 0, e.width, e.height),
        u = new Float32Array(i * i);
      for (const f of HT) o(f, d, i, u);
      (t.putImageData(d, 0, 0), (r.needsUpdate = !0));
    },
    setResolution(h) {
      h !== i && ((i = h), (c.resolution = h), a(i), l());
    },
  };
  return c;
}
