// index-BeUlFSPp 27 — math
// Lines 34145-34467 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
Ne[240] = (s, e, t) => {
  const i = eo(s, 8),
    n = eo(e, 8);
  if (i === 4 && n === 4) return xi(255, 150, 200);
  if (Math.abs(i - 4) + Math.abs(n - 4) === 1) return xi(232, 186, 82);
  if (i === 0 && n === 0) return xi(150, 96, 210);
  if (
    Math.abs(i) + Math.abs(n) === 1 ||
    (i === 7 && n === 0) ||
    (i === 0 && n === 7)
  )
    return xi(98, 52, 138);
  const o = Math.sin(s * xf * 4) * 4;
  return Z(62 + o, 24, 92 + o, 7)(s, e, t);
};
const pP = (s, e) =>
    eo(s - e + 2.2 * Math.sin(e * xf) + 1.1 * Math.sin(s * xf * 2 + 1), 16),
  mP = (s, e) => eo(s + e + 5 + 1.6 * Math.sin(s * xf + 2), 16),
  av = (s, e) => s < e || s > 16 - e;
Ne[241] = (s, e, t) =>
  av(pP(s, e), 0.8)
    ? Z(170, 166, 164, 6)(s, e, t)
    : av(mP(s, e), 0.45) && e % 5 !== 0
      ? Z(206, 202, 198, 5)(s, e, t)
      : Z(238, 234, 226, 4)(s, e, t);
Ne[242] = (s, e, t) =>
  av(pP(s + 7, e), 0.6)
    ? Z(204, 160, 70, 12)(s, e, t)
    : av(mP(s, e + 3), 0.4) && s % 4 !== 1
      ? Z(110, 88, 56, 8)(s, e, t)
      : (s * 11 + e * 5) % 37 === 0
        ? xi(214, 210, 222)
        : Z(30, 26, 36, 4)(s, e, t);
Ne[243] = (s, e, t) => {
  if (s === 0 || e === 0) return xi(255, 238, 160);
  if (s === 15 || e === 15) return xi(150, 102, 30);
  if (s === 1 || e === 1) return xi(246, 214, 110);
  if (s === 14 || e === 14) return xi(184, 130, 40);
  const i = Math.max(0, 1 - Math.abs(s - e + 2) / 2.2) * 34;
  return Z(228 + i, 178 + i, 62 + i * 0.6, 6)(s, e, t);
};
Ne[244] = (s, e, t) => {
  const i = eo(s + e, 8),
    n = eo(s - e, 8);
  if (i === 0 && n === 0) return xi(214, 172, 96);
  if (i === 0 || n === 0) return Z(64, 10, 28, 4)(s, e, t);
  const o = (Math.min(i, 8 - i) + Math.min(n, 8 - n)) * 6;
  return Z(92 + o, 16 + o * 0.25, 42 + o * 0.4, 6)(s, e, t);
};
Ne[245] = (s, e) => {
  const t = eo(s, 8),
    i = eo(e, 8),
    n = Math.hypot(t - 3.5, i - 3.5);
  return n < 1.1
    ? xi(255, 255, 236)
    : n < 2.1
      ? xi(255, 230, 150)
      : n < 2.8
        ? xi(255, 188, 92)
        : t === 7 || i === 7
          ? xi(120, 82, 32)
          : xi(176, 124, 46);
};
Ne[246] = (s, e, t) => {
  const i = s === 3 ? 22 : s === 4 ? 12 : 0;
  return Z(38 + i, 28 + i, 58 + i, 4)(s, e, t);
};
Ne[247] = (s, e, t) => Z(24, 112, 66, 8)(s, e, t);
Ne[248] = (s, e) => {
  const t = s - 7.5,
    i = e - 7.5,
    n = Math.hypot(t, i),
    o = Math.atan2(i, t);
  if (n > 7.6) return xi(70, 38, 20);
  if (n > 6.3) return xi(118, 70, 36);
  if (n > 4.4) {
    const a = Math.floor(((o + Math.PI) / (Math.PI * 2)) * 18);
    return a === 0 ? xi(26, 140, 70) : a % 2 ? xi(186, 22, 34) : xi(22, 20, 26);
  }
  return n > 3.6
    ? xi(222, 186, 98)
    : n > 1.2
      ? xi(150, 92, 44)
      : xi(250, 222, 132);
};
Ne[249] = (s, e) => {
  const t = eo(s, 4),
    i = eo(e, 4),
    n = Math.hypot(t - 1.5, i - 1.5);
  return n < 0.8
    ? xi(255, 255, 240)
    : n < 1.6
      ? xi(255, 222, 150)
      : xi(54, 34, 22);
};
Ne[250] = (s, e, t) =>
  eo(s + e, 6) === 0 || eo(s - e, 6) === 0
    ? xi(150, 192, 236)
    : (s * 7 + e * 13) % 29 === 0
      ? xi(255, 255, 255)
      : Z(214, 236, 255, 8)(s, e, t);
Ne[251] = (s, e, t) =>
  e === 0 || e === 15
    ? xi(220, 170, 70)
    : s % 2
      ? Z(250, 214, 150, 5)(s, e, t)
      : Z(255, 232, 176, 5)(s, e, t);
const I$ = [
  [1, 34, 120, 60],
  [4, 190, 120, 40],
  [7, 220, 220, 230],
  [10, 150, 24, 40],
  [13, 40, 80, 170],
];
Ne[252] = (s, e, t) => {
  if (e === 7 || e === 15) return xi(132, 84, 44);
  const i = e < 7 ? 0 : 1,
    n = i ? 14 : 6;
  for (const [o, a, r, l] of I$) {
    const c = (o + i * 3) % 4 === 0 ? 1 : 0;
    if ((s === o || s === o + 1) && e <= n && e >= n - 3 - c)
      return s === o ? xi(a, r, l) : xi(a * 0.7, r * 0.7, l * 0.7);
    if (s === o && e < n - 3 - c && e >= n - 5 - c)
      return xi(a * 0.8, r * 0.8, l * 0.8);
  }
  return Z(40, 24, 16, 4)(s, e, t);
};
Ne[253] = (s, e, t) => {
  const i = Math.sin(e * xf * 3 + Math.sin(s * xf) * 1.6) * 9;
  return Z(96 + i, 54 + i * 0.6, 30 + i * 0.3, 5)(s, e, t);
};
const P$ = [
  [214, 40, 48],
  [240, 196, 52],
  [44, 186, 92],
  [230, 230, 236],
  [70, 150, 255],
];
Ne[254] = (s, e, t) => {
  if (s === 0 || s === 15 || e === 0 || e === 15) return xi(200, 152, 64);
  if (e >= 9 && e <= 12 && s >= 1 && s <= 14 && s % 3 !== 0) {
    const [i, n, o] = P$[Math.min(4, Math.floor((s - 1) / 3))];
    return e === 9
      ? xi(Math.min(255, i + 50), Math.min(255, n + 50), Math.min(255, o + 50))
      : xi(i, n, o);
  }
  return e === 4 && s >= 6 && s <= 9
    ? xi(8, 8, 10)
    : e === 4 && (s === 5 || s === 10)
      ? xi(200, 200, 210)
      : e === 2 && s % 4 === 2
        ? s % 8 === 2
          ? xi(255, 60, 60)
          : xi(80, 255, 120)
        : Z(30, 26, 40, 4)(s, e, t);
};
const O$ = [
  [198, 30, 40],
  [30, 70, 180],
  [30, 140, 72],
  [26, 24, 30],
  [222, 178, 66],
];
Ne[255] = (s, e) => {
  const [t, i, n] = O$[Math.floor(e / 3) % 5];
  return e % 3 === 2
    ? xi(t * 0.55, i * 0.55, n * 0.55)
    : (s + Math.floor(e / 3)) % 4 === 0
      ? xi(240, 236, 228)
      : xi(t, i, n);
};
Ne[182] = (s, e) => {
  if (s === 0 || e === 0 || s === 15 || e === 15) return xi(34, 36, 44);
  const t = s % 2 === 1 && e % 2 === 1,
    i = s + e < 9 && s + e > 5 ? 10 : 0;
  return t ? xi(26 + i, 30 + i, 40 + i) : xi(10 + i, 11 + i, 15 + i);
};
Ne[183] = (s, e, t) =>
  e % 4 === 1 && s > 2 && s < 13 ? xi(18, 19, 24) : Z(46, 48, 56, 4)(s, e, t);
Object.assign(ri, {
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
function N$(s, e, t) {
  let i = (s * 374761393 + e * 668265263 + t * 1013904223) | 0;
  return (
    (i = Math.imul(i ^ (i >>> 13), 1274126177)),
    ((i ^ (i >>> 16)) >>> 0) / 4294967295
  );
}
function D$(s, e, t, i, n) {
  s.fill(0);
  let o = 1,
    a = 0;
  for (let r = 0; r < i; r++) {
    const l = Math.max(1, Math.round(t.fx * (1 << r))),
      c = Math.max(1, Math.round(t.fy * (1 << r))),
      h = l + 1,
      d = new Float32Array(h * (c + 1));
    for (let u = 0; u <= c; u++)
      for (let f = 0; f <= l; f++) d[u * h + f] = N$(f, u, n + r * 7919);
    for (let u = 0; u < e; u++) {
      const f = ((u + 0.5) / e) * c,
        p = Math.min(c - 1, f | 0),
        m = f - p,
        g = m * m * (3 - 2 * m);
      for (let y = 0; y < e; y++) {
        const b = ((y + 0.5) / e) * l,
          S = Math.min(l - 1, b | 0),
          M = b - S,
          E = M * M * (3 - 2 * M),
          A = d[p * h + S],
          T = d[p * h + S + 1],
          x = d[(p + 1) * h + S],
          R = d[(p + 1) * h + S + 1],
          _ = A + (T - A) * E;
        s[u * e + y] += (_ + (x + (R - x) * E - _) * g) * o;
      }
    }
    ((a += o), (o *= 0.5));
  }
  for (let r = 0; r < s.length; r++) s[r] /= a;
}
const Yx = [9, zt + 2, zt + 5, zt + 8, zt + 11, 201, 202, 203],
  H$ = { 201: [150, 70, 22], 202: [112, 26, 22], 203: [168, 124, 30] };
function gP(s = T$) {
  const e = document.createElement("canvas"),
    t = e.getContext("2d");
  let i = s,
    n = !0;
  function o(h, d, u, f) {
    const p = Ne[h];
    if (!p) return;
    const m = bc / u,
      g = L$[ri[h] ?? "stone"],
      y = Math.max(1, Math.min(g.oct + Math.round(Math.log2(u / 16)), 6));
    D$(f, u, g, y, 1e3 + h * 77);
    const b = (g.relief * u) / (y * Math.max(1, (g.fx + g.fy) / 2)),
      S = (h % Ni) * u,
      M = Math.floor(h / Ni) * u,
      E = x5(1e3 + h * 77),
      A = !n && Yx.includes(h);
    for (let T = 0; T < u; T++)
      for (let x = 0; x < u; x++) {
        let R = p(
          Math.min(bc - 1, (x * m) | 0),
          Math.min(bc - 1, (T * m) | 0),
          E,
        );
        A && R[3] === 0 && (R = [...(H$[h] ?? [49, 105, 39]), 255]);
        const _ = ((M + T) * d.width + S + x) * 4;
        if (R[3] === 0) {
          d.data[_] = d.data[_ + 1] = d.data[_ + 2] = d.data[_ + 3] = 0;
          continue;
        }
        const C = T * u + x,
          P = f[C],
          O = P - f[x + 1 < u ? C + 1 : C] + (P - f[T + 1 < u ? C + u : C]),
          B = Math.max(0.55, Math.min(1.5, 1 + O * b + (P - 0.5) * g.tone));
        ((d.data[_] = Math.min(255, R[0] * B)),
          (d.data[_ + 1] = Math.min(255, R[1] * B)),
          (d.data[_ + 2] = Math.min(255, R[2] * B)),
          (d.data[_ + 3] = R[3]));
      }
  }
  function a(h) {
    const d = Ni * h;
    ((e.width = d), (e.height = d));
    const u = t.createImageData(d, d),
      f = new Float32Array(h * h);
    for (let p = 0; p < Ni * Ni; p++) o(p, u, h, f);
    t.putImageData(u, 0, 0);
  }
  a(i);
  const r = new Si(e);
  ((r.generateMipmaps = !1), (r.colorSpace = Ii), (r.anisotropy = 4));
  const l = () => {
    ((r.magFilter = as),
      (r.minFilter = i >= 64 ? pn : as),
      (r.needsUpdate = !0));
  };
  l();
  const c = {
    texture: r,
    canvas: e,
    resolution: i,
    drawTile(h, d, u, f, p) {
      const m = (h % Ni) * i,
        g = Math.floor(h / Ni) * i;
      ((d.imageSmoothingEnabled = i > 16),
        d.drawImage(e, m, g, i, i, u, f, p, p));
    },
    setFancyLeaves(h) {
      if (n === h) return;
      n = h;
      const d = t.getImageData(0, 0, e.width, e.height),
        u = new Float32Array(i * i);
      for (const f of Yx) o(f, d, i, u);
      (t.putImageData(d, 0, 0), (r.needsUpdate = !0));
    },
    setResolution(h) {
      h !== i && ((i = h), (c.resolution = h), a(i), l());
    },
  };
  return c;
}
