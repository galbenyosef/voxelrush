// index-Dp6GxvJu 19 — math
// Lines 32876-34623 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const eT = {
  tigercamo(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(11, 4, 4),
      r = ki(19, 3, 3);
    zn(n, 256, (l, c) => {
      const h = a(l, c),
        d = r(l, c),
        u = Math.sin((l * 6 + h * 2.2) * Math.PI * 2) * 0.5 + 0.5;
      let f = d > 0.55 ? i : d < 0.38 ? s : t;
      return (u > 0.78 + (d - 0.5) * 0.3 && (f = o), { c: f, m: 0.1 });
    });
    for (const [l, [c, h]] of [
      [120, 90],
      [380, 300],
      [250, 460],
    ].entries())
      bh(
        n,
        l === 1 ? "VR-07 // LOT 2209" : "FIELD ISSUE",
        c,
        h,
        15,
        "rgba(230,226,190,.5)",
      );
    vh(n, 5, 14);
  },
  pixelcamo(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(23, 4, 3),
      r = ki(31, 6, 2),
      l = 32;
    for (let c = 0; c < we; c += l)
      for (let h = 0; h < we; h += l) {
        const d = (h + l / 2) / we,
          u = (c + l / 2) / we,
          f = a(d, u),
          p = r(d, u),
          m = f > 0.6 ? o : f > 0.5 ? s : p > 0.55 ? i : t;
        ((n.a.fillStyle = At(Hn(m, 0.94 + ((h * 7 + c * 13) % 5) * 0.03))),
          n.a.fillRect(h, c, l, l),
          (n.f.fillStyle = Vi(0.05)),
          n.f.fillRect(h, c, l, l));
        const y = En(h * 131 + c);
        for (let g = 0; g < 6; g++)
          ((n.a.fillStyle = At(Hn(m, 0.82))),
            n.a.fillRect(
              h + Math.floor(y() * 8) * 4,
              c + Math.floor(y() * 8) * 4,
              4,
              4,
            ));
      }
    ((n.a.globalAlpha = 0.1), (n.a.fillStyle = "#fff"));
    for (let c = 0; c < we; c += l)
      for (let h = 0; h < we; h += l)
        (n.a.fillRect(h, c, l, 2), n.a.fillRect(h, c, 2, l));
    n.a.fillStyle = "#000";
    for (let c = 0; c < we; c += l)
      for (let h = 0; h < we; h += l)
        (n.a.fillRect(h, c + l - 2, l, 2), n.a.fillRect(h + l - 2, c, 2, l));
    n.a.globalAlpha = 1;
  },
  digital(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(41, 8, 3),
      r = ki(43, 5, 3),
      l = ki(47, 12, 2),
      c = 8;
    for (let d = 0; d < we; d += c)
      for (let u = 0; u < we; u += c) {
        const f = u / we,
          p = d / we,
          m = a(f, p),
          y = r(f, p),
          g = l(f, p),
          b = m > 0.62 ? o : y > 0.58 ? s : g > 0.55 ? i : t;
        ((n.a.fillStyle = At(b)), n.a.fillRect(u, d, c, c));
      }
    bU(n, 0.15);
    const h = En(7);
    ((n.a.strokeStyle = "rgba(255,255,255,.35)"), (n.a.lineWidth = 1));
    for (let d = 0; d < 60; d++) {
      const u = h() * we,
        f = h() * we,
        p = 6 + h() * 20,
        m = h() * Math.PI;
      On(u, f, p, (y, g) => {
        (n.a.beginPath(),
          n.a.moveTo(y, g),
          n.a.lineTo(y + Math.cos(m) * p, g + Math.sin(m) * p),
          n.a.stroke());
      });
    }
  },
  carbon(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = 16;
    for (let l = 0; l < we; l += a)
      for (let c = 0; c < we; c += a) {
        const h = (c / a + (l / a) * 2) % 4 < 2,
          d = h
            ? n.a.createLinearGradient(c, l, c + a, l)
            : n.a.createLinearGradient(c, l, c, l + a);
        (d.addColorStop(0, At(t)),
          d.addColorStop(0.35, At(Hn(i, 1.25))),
          d.addColorStop(0.5, At(Hn(i, 1.6))),
          d.addColorStop(0.65, At(Hn(i, 1.25))),
          d.addColorStop(1, At(t)),
          (n.a.fillStyle = d),
          n.a.fillRect(c, l, a, a),
          (n.f.fillStyle = Vi(0.55, 0, h ? 0.15 : 0.05)),
          n.f.fillRect(c, l, a, a));
      }
    const r = (l, c, h, d) => {
      ((n.a.fillStyle = h),
        n.a.fillRect(0, l, we, c),
        (n.f.fillStyle = Vi(d)),
        n.f.fillRect(0, l, we, c));
    };
    for (const l of [60, 316])
      (r(l, 8, At(o), 0.3),
        r(l + 14, 52, At(s), 0.35),
        r(l + 72, 8, At(o), 0.3));
    for (const [l, c] of [
      [140, 100],
      [390, 356],
    ])
      bh(n, "CARBON STRIKE", l, c, 26, "rgba(255,255,255,.9)", 0, "900 italic");
  },
  hex(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = En(29),
      r = 12,
      l = 14,
      c = we / r,
      h = we / l,
      d = new Set();
    for (let f = 0; f < 20; f++) d.add(Math.floor(a() * r * l));
    const u = [];
    for (let f = 0; f < l; f++)
      for (let p = 0; p < r; p++)
        u.push([(p + (f % 2) * 0.5) * c, f * h, f * r + p]);
    (zn(n, we, (f, p) => {
      const m = f * we,
        y = p * we;
      let g = 1e9,
        b = 1e9,
        S = 0;
      for (const [_, C, R] of u) {
        let L = Math.abs(m - _),
          N = Math.abs(y - C);
        if (
          (L > we / 2 && (L = we - L),
          N > we / 2 && (N = we - N),
          L > c * 1.6 || N > h * 1.6)
        )
          continue;
        const D = L * L + N * N * 1.15;
        D < g ? ((b = g), (g = D), (S = R)) : D < b && (b = D);
      }
      const M = Math.sqrt(b) - Math.sqrt(g),
        x = d.has(S),
        T = 0.9 + ((S * 37) % 10) / 50;
      let A = x ? s : Hn(S % 3 === 0 ? i : t, T);
      return (
        M < 2.2 ? (A = o) : M < 4 && (A = _i(A, [255, 255, 255], 0.12)),
        { c: A, m: x ? 0.2 : M < 2.2 ? 0.1 : 0.45, g: x ? 0.12 : 0 }
      );
    }),
      vh(n, 9, 8));
  },
  snake(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = En(61),
      r = ki(63, 4, 3),
      l = 22,
      c = [];
    for (let d = 0; d < l; d++)
      for (let u = 0; u < l; u++)
        c.push([
          (u + 0.5 + (a() - 0.5) * 0.7) / l,
          (d + 0.5 + (a() - 0.5) * 0.7) / l,
        ]);
    const h = (d, u) => {
      const f = Math.floor(d * l),
        p = Math.floor(u * l);
      let m = 9,
        y = 9,
        g = 0;
      for (let b = -1; b <= 1; b++)
        for (let S = -1; S <= 1; S++) {
          const M = (f + S + l) % l,
            x = (p + b + l) % l,
            T = x * l + M;
          let A = c[T][0] + Math.floor((f + S) / l) * 1,
            _ = c[T][1] + Math.floor((p + b) / l) * 1;
          const C = Math.hypot(d - A, u - _);
          C < m ? ((y = m), (m = C), (g = T)) : C < y && (y = C);
        }
      return { id: g, d1: m, d2: y };
    };
    zn(n, we, (d, u) => {
      const { id: f, d1: p, d2: m } = h(d, u),
        [y, g] = c[f],
        b = r(y, g),
        S = Math.abs(Math.sin((y * 3 + b * 1.5) * Math.PI * 2));
      let M = b > 0.58 ? s : b > 0.5 ? i : S > 0.82 ? o : t;
      b > 0.48 && b < 0.51 && (M = o);
      const x = 1 - Wh(p * l * 1.4);
      return (
        (M = Hn(M, 0.7 + x * 0.45)),
        m - p < 0.006 && (M = Hn(M, 0.35)),
        { c: M, m: 0.3 + x * 0.25, s: x * 0.2 }
      );
    });
  },
  topo(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(71, 3, 5);
    zn(n, we, (l, c) => {
      const h = a(l, c),
        d = Math.floor(h * 14),
        u = h * 14 - d;
      let f = _i(t, i, (d % 4) / 6);
      return (
        u < 0.07 && (f = _i(f, s, d % 5 === 0 ? 0.95 : 0.6)),
        { c: f, m: 0.08 }
      );
    });
    const r = En(3);
    for (let l = 0; l < 5; l++) {
      const c = r() * we,
        h = r() * we;
      (On(c, h, 30, (d, u) => {
        ((n.a.strokeStyle = At(o)),
          (n.a.lineWidth = 3),
          n.a.beginPath(),
          n.a.arc(d, u, 14, 0, Math.PI * 2),
          n.a.stroke(),
          n.a.beginPath(),
          n.a.moveTo(d - 22, u),
          n.a.lineTo(d + 22, u),
          n.a.moveTo(d, u - 22),
          n.a.lineTo(d, u + 22),
          n.a.stroke());
      }),
        bh(n, `OBJ ${"ABCDE"[l]}`, c + 34, h - 18, 13, At(o)));
    }
    bh(n, "GRID 44-17", 400, 60, 14, "rgba(216,208,162,.7)");
  },
  graffiti(n, e) {
    const t = e.colors.map(bn),
      i = t.slice(1),
      s = En(91),
      o = ki(93, 16, 3);
    zn(n, 256, (r, l) => ({
      c: Hn([150, 150, 158], 0.78 + o(r, l) * 0.4),
      m: 0.15,
    }));
    for (let r = 0; r < 26; r++) {
      const l = s() * we,
        c = s() * we,
        h = 30 + s() * 70,
        d = i[r % i.length];
      On(l, c, h, (u, f) => {
        const p = n.a.createRadialGradient(u, f, 0, u, f, h);
        (p.addColorStop(0, At(d, 0.95)),
          p.addColorStop(0.55, At(d, 0.7)),
          p.addColorStop(1, At(d, 0)),
          (n.a.fillStyle = p),
          n.a.fillRect(u - h, f - h, h * 2, h * 2));
      });
    }
    const a = ["RUSH", "BOOM", "VR", "GG", "NOOB", "WOW"];
    for (let r = 0; r < 12; r++) {
      const l = s() * we,
        c = s() * we,
        h = 44 + s() * 34,
        d = i[(r + 1) % i.length],
        u = a[r % a.length],
        f = (s() - 0.5) * 0.6;
      On(l, c, h * 2.2, (p, m) => {
        (n.a.save(),
          n.a.translate(p, m),
          n.a.rotate(f),
          (n.a.font = `900 italic ${h}px Impact, "Arial Black", sans-serif`),
          (n.a.textAlign = "center"),
          (n.a.textBaseline = "middle"),
          (n.a.lineJoin = "round"),
          (n.a.lineWidth = h * 0.22),
          (n.a.strokeStyle = "#0b0b10"),
          n.a.strokeText(u, 0, 0),
          (n.a.fillStyle = At(d)),
          n.a.fillText(u, 0, 0),
          (n.a.lineWidth = 2),
          (n.a.strokeStyle = "rgba(255,255,255,.7)"),
          n.a.strokeText(u, -2, -2),
          n.a.restore());
        for (let y = 0; y < 3; y++) {
          const g = p + (s() - 0.5) * h * 1.4,
            b = 10 + s() * 40;
          ((n.a.strokeStyle = At(d)),
            (n.a.lineWidth = 3),
            (n.a.lineCap = "round"),
            n.a.beginPath(),
            n.a.moveTo(g, m + h * 0.3),
            n.a.lineTo(g, m + h * 0.3 + b),
            n.a.stroke(),
            n.a.beginPath(),
            n.a.arc(g, m + h * 0.3 + b, 3, 0, Math.PI * 2),
            (n.a.fillStyle = At(d)),
            n.a.fill());
        }
      });
    }
    for (let r = 0; r < 70; r++) {
      const l = s() * we,
        c = s() * we,
        h = 1 + s() * 4;
      ((n.a.fillStyle = At(i[r % i.length], 0.9)),
        On(l, c, h, (d, u) => {
          (n.a.beginPath(), n.a.arc(d, u, h, 0, Math.PI * 2), n.a.fill());
        }));
    }
  },
  pepe(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = En(17),
      r = n.a.createLinearGradient(0, 0, we, we);
    (r.addColorStop(0, At(t)),
      r.addColorStop(0.5, At(_i(t, i, 0.5))),
      r.addColorStop(1, At(t)),
      (n.a.fillStyle = r),
      n.a.fillRect(0, 0, we, we),
      (n.f.fillStyle = Vi(0.3)),
      n.f.fillRect(0, 0, we, we));
    for (let h = 0; h < we; h += 12)
      for (let d = 0; d < we; d += 12) {
        const u = 0.5 + 0.5 * Math.sin(((d + h) / we) * Math.PI * 4);
        ((n.a.fillStyle = At(_i(i, s, 0.3), 0.22)),
          n.a.beginPath(),
          n.a.arc(d + (h % 24 ? 6 : 0), h, 1 + u * 3.2, 0, Math.PI * 2),
          n.a.fill());
      }
    const l = (h, d, u, f) => {
        const p = n.a;
        (p.save(),
          p.translate(h, d),
          p.rotate(f),
          p.scale(u, u),
          (p.lineWidth = 3),
          (p.strokeStyle = At(o)),
          (p.fillStyle = At(i)),
          p.beginPath(),
          p.ellipse(0, 0, 46, 38, 0, 0, Math.PI * 2),
          p.fill(),
          p.stroke());
        for (const m of [-18, 18])
          ((p.fillStyle = "#f2f2e8"),
            p.beginPath(),
            p.ellipse(m, -14, 16, 12, 0, 0, Math.PI * 2),
            p.fill(),
            p.stroke(),
            (p.fillStyle = At(o)),
            p.beginPath(),
            p.arc(m + 3, -12, 5.5, 0, Math.PI * 2),
            p.fill(),
            (p.fillStyle = At(i)),
            p.beginPath(),
            p.ellipse(m, -22, 17, 9, 0, Math.PI, Math.PI * 2),
            p.fill(),
            p.stroke());
        ((p.fillStyle = "#b4523e"),
          p.beginPath(),
          p.moveTo(-26, 14),
          p.quadraticCurveTo(0, 30, 28, 12),
          p.quadraticCurveTo(0, 22, -26, 14),
          p.fill(),
          p.stroke(),
          p.restore());
      },
      c = [
        [90, 90, 1.1, -0.2],
        [300, 70, 0.9, 0.25],
        [460, 200, 1, -0.1],
        [180, 260, 1.2, 0.05],
        [60, 420, 0.9, 0.4],
        [330, 400, 1.15, -0.3],
        [470, 470, 0.8, 0.2],
      ];
    for (const [h, d, u, f] of c) On(h, d, 60 * u, (p, m) => l(p, m, u, f));
    for (let h = 0; h < 6; h++)
      bh(
        n,
        h % 2 ? "FEELS GOOD" : "RARE",
        a() * we,
        a() * we,
        16,
        At(s, 0.85),
        (a() - 0.5) * 0.5,
        "900",
      );
  },
  koi(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(81, 4, 3),
      r = ki(83, 6, 2);
    zn(n, 256, (h, d) => {
      const u = a(h, d),
        f = Math.pow(
          1 - Math.abs(Math.sin(r(h + u * 0.2, d) * 6 * Math.PI)),
          6,
        );
      return {
        c: _i(_i(t, i, d * 0.4 + u * 0.5), [200, 240, 255], f * 0.45),
        m: 0.6,
        s: f * 0.8,
      };
    });
    const l = En(85),
      c = (h, d, u, f, p) => {
        const m = n.a,
          y = En(p);
        (m.save(),
          m.translate(h, d),
          m.rotate(f),
          m.scale(u, u),
          (m.fillStyle = At(s, 0.9)),
          m.beginPath(),
          m.moveTo(-40, 0),
          m.quadraticCurveTo(-70, -26, -78, -18),
          m.quadraticCurveTo(-62, 0, -78, 18),
          m.quadraticCurveTo(-70, 26, -40, 0),
          m.fill(),
          m.beginPath(),
          m.ellipse(4, 16, 12, 6, 0.7, 0, Math.PI * 2),
          m.ellipse(4, -16, 12, 6, -0.7, 0, Math.PI * 2),
          m.fill());
        const g = m.createLinearGradient(0, -18, 0, 18);
        (g.addColorStop(0, At(o)),
          g.addColorStop(0.5, At(o)),
          g.addColorStop(1, At(Hn(o, 0.8))),
          (m.fillStyle = g),
          m.beginPath(),
          m.moveTo(-44, 0),
          m.bezierCurveTo(-20, -20, 30, -18, 44, 0),
          m.bezierCurveTo(30, 18, -20, 20, -44, 0),
          m.fill(),
          m.save(),
          m.clip(),
          (m.fillStyle = At(s)));
        for (let b = 0; b < 4; b++)
          (m.beginPath(),
            m.ellipse(
              -30 + y() * 64,
              (y() - 0.5) * 24,
              8 + y() * 14,
              6 + y() * 9,
              y() * 3,
              0,
              Math.PI * 2,
            ),
            m.fill());
        (m.restore(),
          (m.fillStyle = "#111"),
          m.beginPath(),
          m.arc(32, -6, 2.2, 0, Math.PI * 2),
          m.arc(32, 6, 2.2, 0, Math.PI * 2),
          m.fill(),
          m.restore());
      };
    for (let h = 0; h < 5; h++) {
      const d = l() * we,
        u = l() * we,
        f = 22 + l() * 18,
        p = l() * 6;
      On(d, u, f, (m, y) => {
        ((n.a.fillStyle = "rgba(70,150,80,.92)"),
          n.a.beginPath(),
          n.a.moveTo(m, y),
          n.a.arc(m, y, f, p, p + Math.PI * 1.8),
          n.a.closePath(),
          n.a.fill(),
          (n.a.strokeStyle = "rgba(160,220,140,.5)"),
          (n.a.lineWidth = 1.5),
          n.a.stroke());
      });
    }
    for (let h = 0; h < 9; h++) {
      const d = (h % 3) * 170 + 60 + l() * 60,
        u = Math.floor(h / 3) * 170 + 60 + l() * 60,
        f = 0.9 + l() * 0.5,
        p = l() * Math.PI * 2,
        m = 200 + h;
      On(d, u, 80 * f, (y, g) => c(y, g, f, p, m));
    }
    ((n.a.strokeStyle = "rgba(220,245,255,.35)"), (n.a.lineWidth = 1.5));
    for (let h = 0; h < 8; h++) {
      const d = l() * we,
        u = l() * we;
      for (let f = 1; f < 4; f++)
        On(d, u, f * 12, (p, m) => {
          (n.a.beginPath(),
            n.a.ellipse(p, m, f * 12, f * 7, 0, 0, Math.PI * 2),
            n.a.stroke());
        });
    }
  },
  casehardened(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(101, 3, 5),
      r = ki(103, 5, 3),
      l = ki(107, 8, 2);
    (zn(n, 256, (c, h) => {
      const d = a(c, h) * 0.8 + r(c, h) * 0.35 + (l(c, h) - 0.5) * 0.15,
        u = Ga(
          [
            o,
            i,
            [176, 110, 48],
            [118, 62, 132],
            [52, 92, 196],
            t,
            [30, 70, 170],
          ],
          Zo(0.25, 0.8, d),
        ),
        f = Zo(0.66, 0.82, r(c + 0.3, h)) * 0.35;
      return { c: _i(Hn(u, 1.15), [210, 214, 222], f), m: 1, s: 0.15 };
    }),
      vh(n, 3, 5));
  },
  tiger(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(111, 4, 4),
      r = ki(113, 6, 3);
    zn(n, we, (l, c) => {
      const h = a(l, c),
        d = r(l, c),
        f =
          Math.sin(
            (l * 7 + h * 1.6 + Math.sin(c * Math.PI * 2) * 0.25) * Math.PI * 2,
          ) >
            0.55 - d * 0.55 && d > 0.32,
        p = 0.5 + 0.5 * Math.sin((l * 2 + c * 3) * Math.PI * 2);
      return {
        c: f ? _i(s, i, 0.12) : Ga([i, t, o], 0.3 + p * 0.5 + (h - 0.5) * 0.4),
        m: f ? 0.55 : 1,
        s: f ? 0 : 0.35,
      };
    });
  },
  toxic(n, e) {
    const [t, i, s, o] = e.colors.map(bn);
    zn(n, we, (h, d) => ({ c: ((h + d) * 8) % 1 < 0.5 ? i : t, m: 0.25 }));
    const a = ki(121, 4, 4),
      r = ki(127, 16, 2),
      l = n.a.getImageData(0, 0, we, we),
      c = n.f.getImageData(0, 0, we, we);
    for (let h = 0; h < we; h++)
      for (let d = 0; d < we; d++) {
        const u = d / we,
          f = h / we,
          p = a(u, f) + (r(u, (f * 0.25) % 1) - 0.5) * 0.7,
          m = (h * we + d) * 4;
        if (p > 0.56) {
          const y = Zo(0.56, 0.7, p),
            g = _i(Hn(s, 0.55), s, y);
          ((l.data[m] = g[0]),
            (l.data[m + 1] = g[1]),
            (l.data[m + 2] = g[2]),
            (c.data[m] = 90),
            (c.data[m + 1] = 120 + y * 135),
            (c.data[m + 2] = 60));
        } else
          p > 0.53 &&
            ((l.data[m] = o[0]),
            (l.data[m + 1] = o[1] + 30),
            (l.data[m + 2] = o[2]));
      }
    (n.a.putImageData(l, 0, 0),
      n.f.putImageData(c, 0, 0),
      bh(n, "☣ BIOHAZARD", 140, 470, 18, "rgba(10,10,10,.85)", 0, "900"),
      vh(n, 4, 10));
  },
  frost(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(131, 4, 4);
    zn(n, 256, (c, h) => ({
      c: _i(t, o, a(c, h) * 0.9),
      m: 0.7,
      s: a(c, h) * 0.3,
    }));
    const r = En(133),
      l = (c, h, d, u, f, p) => {
        if (p <= 0 || u < 3) return;
        const m = c + Math.cos(d) * u,
          y = h + Math.sin(d) * u;
        On(c, h, u + 4, (g, b) => {
          const S = g - c,
            M = b - h;
          d5(n, (x, T) => {
            ((x.strokeStyle =
              T === "a"
                ? At(_i(i, s, p / 5), 0.9)
                : Vi(0.9, 0.55 + p * 0.08, 0.9)),
              (x.lineWidth = f),
              (x.lineCap = "round"),
              x.beginPath(),
              x.moveTo(c + S, h + M),
              x.lineTo(m + S, y + M),
              x.stroke());
          });
        });
        for (const g of [-1, 1])
          for (let b = 1; b <= 3; b++)
            l(
              c + ((m - c) * b) / 4,
              h + ((y - h) * b) / 4,
              d + g * (Math.PI / 3),
              u * (0.42 - b * 0.06),
              Math.max(0.6, f * 0.6),
              p - 1,
            );
        l(m, y, d + (r() - 0.5) * 0.3, u * 0.7, Math.max(0.6, f * 0.8), p - 1);
      };
    for (let c = 0; c < 7; c++) {
      const h = r() * we,
        d = r() * we;
      for (let u = 0; u < 6; u++)
        l(h, d, (u * Math.PI) / 3 + r() * 0.2, 30 + r() * 26, 2.6, 4);
    }
    for (let c = 0; c < 400; c++) {
      const h = r() * we,
        d = r() * we;
      ((n.a.fillStyle = At(s, 0.25 + r() * 0.5)), n.a.fillRect(h, d, 1.5, 1.5));
    }
  },
  circuit(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = En(141),
      r = 16,
      l = we / r;
    Zx(n, At(t), Vi(0.45));
    const c = ki(143, 32, 2);
    zn(
      n,
      256,
      (u, f) => ({ c: Hn(_i(t, i, 0.35), 0.8 + c(u, f) * 0.45), m: 0.45 }),
      0.7,
    );
    const h = new Set(),
      d = (u, f) => {
        let p = Math.floor(a() * l),
          m = Math.floor(a() * l),
          y = Math.floor(a() * 4);
        const g = [[p, m]];
        for (let b = 0; b < 18 + a() * 20; b++) {
          a() < 0.25 && (y = (y + (a() < 0.5 ? 1 : 3)) % 4);
          const S = p + [1, 0, -1, 0][y],
            M = m + [0, 1, 0, -1][y],
            x = `${(S + l) % l},${(M + l) % l}`;
          if (h.has(x)) break;
          (h.add(x), (p = S), (m = M), g.push([p, m]));
        }
        if (!(g.length < 3))
          for (const [b, S] of [
            [-we, 0],
            [0, 0],
            [we, 0],
            [0, -we],
            [0, we],
            [-we, -we],
            [we, we],
            [-we, we],
            [we, -we],
          ])
            d5(n, (M, x) => {
              ((M.strokeStyle = x === "a" ? At(u) : Vi(0.8, f, 0)),
                (M.lineWidth = 4),
                (M.lineJoin = "round"),
                M.beginPath(),
                g.forEach(([T, A], _) => {
                  const C = T * r + b,
                    R = A * r + S;
                  _ ? M.lineTo(C, R) : M.moveTo(C, R);
                }),
                M.stroke());
              for (const [T, A] of [g[0], g[g.length - 1]])
                ((M.fillStyle = x === "a" ? At(u) : Vi(0.9, f, 0)),
                  M.beginPath(),
                  M.arc(T * r + b, A * r + S, 5, 0, Math.PI * 2),
                  M.fill(),
                  x === "a" &&
                    ((M.fillStyle = At(t)),
                    M.beginPath(),
                    M.arc(T * r + b, A * r + S, 2, 0, Math.PI * 2),
                    M.fill()));
            });
      };
    for (let u = 0; u < 110; u++)
      d(u % 3 === 0 ? o : s, u % 3 === 0 ? 0.75 : 1);
    for (let u = 0; u < 6; u++) {
      const f = Math.floor(a() * l) * r,
        p = Math.floor(a() * l) * r,
        m = r * (2 + Math.floor(a() * 3)),
        y = r * 2;
      On(f + m / 2, p + y / 2, m, (g, b) => {
        const S = g - m / 2,
          M = b - y / 2;
        ((n.a.fillStyle = "#06080e"),
          n.a.fillRect(S, M, m, y),
          (n.a.strokeStyle = "rgba(255,255,255,.25)"),
          n.a.strokeRect(S + 0.5, M + 0.5, m - 1, y - 1),
          (n.a.fillStyle = "#9aa4b0"));
        for (let x = 4; x < m - 2; x += 6)
          (n.a.fillRect(S + x, M - 3, 2, 3), n.a.fillRect(S + x, M + y, 2, 3));
        ((n.f.fillStyle = Vi(0.6, 0, 0)),
          n.f.fillRect(S, M, m, y),
          (n.a.fillStyle = "rgba(255,255,255,.5)"),
          (n.a.font = "700 8px monospace"),
          n.a.fillText("VR-" + (100 + u * 37), S + 4, M + y / 2 + 3));
      });
    }
  },
  aurora(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(151, 3, 4),
      r = ki(153, 48, 2),
      l = ki(157, 2, 3);
    zn(n, we, (h, d) => {
      let u = 0;
      for (const [m, y] of [
        [1, 0],
        [2, 1.7],
      ]) {
        const g =
            0.5 + 0.3 * Math.sin((h * m + a(h, d) * 0.6) * Math.PI * 2 + y),
          b = Math.abs(d - g);
        u += Math.exp(-b * b * 90) * (0.45 + r(h, d * 0.08) * 0.9);
      }
      u = Wh(u);
      const f = _i(s, o, Zo(0.3, 0.8, l(h, d))),
        p = _i(t, i, 0.4 + a(h, d) * 0.6);
      return { c: _i(p, Hn(f, 1.15), u), m: 0.5, g: u, s: l(h, d) };
    });
    const c = En(155);
    for (let h = 0; h < 260; h++) {
      const d = c() * we,
        u = c() * we,
        f = c() < 0.1 ? 2 : 1;
      ((n.a.fillStyle = `rgba(255,255,255,${0.4 + c() * 0.6})`),
        n.a.fillRect(d, u, f, f));
    }
  },
  glitch(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = En(161);
    Zx(n, At(t), Vi(0.35));
    for (let r = 0; r < we; r += 4)
      ((n.a.fillStyle = "rgba(255,255,255,.04)"), n.a.fillRect(0, r, we, 1));
    for (let r = 0; r < 90; r++) {
      const l = 8 + a() * (a() < 0.2 ? 220 : 60),
        c = 2 + a() * (a() < 0.3 ? 30 : 8),
        h = a() * we,
        d = a() * we,
        u = [i, s, o, Hn(s, 0.4)][Math.floor(a() * 4)],
        f = u === o ? 0.5 : u === i || u === s ? 0.9 : 0.2;
      On(h + l / 2, d + c / 2, l, (p, m) => {
        ((n.a.fillStyle = At(i, 0.55)),
          n.a.fillRect(p - l / 2 - 3, m - c / 2, l, c),
          (n.a.fillStyle = At(s, 0.55)),
          n.a.fillRect(p - l / 2 + 3, m - c / 2, l, c),
          (n.a.fillStyle = At(u)),
          n.a.fillRect(p - l / 2, m - c / 2, l, c),
          (n.f.fillStyle = Vi(0.4, f, a())),
          n.f.fillRect(p - l / 2 - 3, m - c / 2, l + 6, c));
      });
    }
    for (let r = 0; r < 10; r++)
      bh(
        n,
        ["ERR 0x00F", "SEGFAULT", "/// NULL", "RGB_SPLIT", "404", "GLITCH.EXE"][
          r % 6
        ],
        a() * we,
        a() * we,
        12 + a() * 10,
        At(r % 2 ? s : i, 0.9),
        0,
        "700",
      );
    for (let r = 0; r < 300; r++)
      ((n.a.fillStyle = At([i, s, o][r % 3], 0.8)),
        n.a.fillRect(
          Math.floor(a() * 128) * 4,
          Math.floor(a() * 128) * 4,
          4,
          4,
        ));
  },
  crystal(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = En(171),
      r = Array.from({ length: 34 }, () => [a(), a()]),
      l = r.map(() => a()),
      c = Qx(r);
    zn(n, we, (h, d) => {
      const { id: u, d1: f, d2: p } = c(h, d),
        m = p - f,
        y = l[u],
        g = h - r[u][0],
        b = d - r[u][1],
        S = (g * Math.cos(y * 6) + b * Math.sin(y * 6)) * 6;
      let M = Ga([t, i, s, o], Wh(y * 0.8 + S * 0.3 + 0.1));
      return (
        m < 0.006
          ? (M = _i(M, [255, 255, 255], 0.85))
          : m < 0.014 && (M = _i(M, s, 0.35)),
        { c: M, m: 0.85, g: m < 0.006 ? 0.35 : 0, s: 0.55 + y * 0.45 }
      );
    });
  },
  synth(n, e) {
    const [t, i, s, o] = e.colors.map(bn);
    zn(n, we, (r, l) => {
      if (l < 0.55) {
        let y = Ga([t, Hn(i, 0.6), s], Zo(0, 0.55, l));
        const g = Math.abs(((r + 0.5) % 1) - 0.5) * 2.2,
          b = (l - 0.38) / 0.2,
          S = Math.hypot(g, b);
        let M = 0;
        return (
          S < 1 &&
            !(l > 0.4 && Math.sin(l * 160) > 0.4 - (l - 0.4) * 6) &&
            ((y = Ga([[255, 236, 110], s, i], Wh(b * 0.5 + 0.5))), (M = 0.65)),
          { c: y, m: 0.4, g: M, s: 0 }
        );
      }
      const c = (l - 0.55) / 0.45,
        h = 1 / (c + 0.08),
        d = ((r - 0.5) * h * 2.2 + 100) % 1,
        u = (h * 0.8) % 1,
        p =
          Math.min(Math.abs(d - 0.5), Math.abs(u - 0.5)) > 0.5 - 0.04 * (1 + c),
        m = _i([24, 6, 48], t, c);
      return { c: p ? _i(i, o, c) : m, m: 0.4, g: p ? 1 : 0, s: c };
    });
    const a = En(181);
    for (let r = 0; r < 90; r++)
      ((n.a.fillStyle = "rgba(255,255,255,.8)"),
        n.a.fillRect(a() * we, a() * we * 0.35, 1.5, 1.5));
  },
  storm(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(191, 3, 5);
    zn(n, 256, (c, h) => {
      const d = a(c, h);
      return {
        c: Ga([t, i, Hn(i, 1.6), [150, 170, 220]], Zo(0.25, 0.85, d)),
        m: 0.55,
      };
    });
    const r = En(193),
      l = (c, h, d, u, f, p, m) => {
        const y = [[c, h]];
        for (let g = 0; g < 12; g++)
          ((d += (r() - 0.5) * 0.9),
            (c += (Math.cos(d) * u) / 12),
            (h += (Math.sin(d) * u) / 12),
            y.push([c, h]));
        for (const [g, b] of [
          [-we, 0],
          [0, 0],
          [we, 0],
          [0, -we],
          [0, we],
        ]) {
          const S = (M) => {
            (M.beginPath(),
              y.forEach(([x, T], A) =>
                A ? M.lineTo(x + g, T + b) : M.moveTo(x + g, T + b),
              ));
          };
          ((n.a.lineJoin = n.f.lineJoin = "round"),
            S(n.a),
            (n.a.strokeStyle = At(s, 0.35)),
            (n.a.lineWidth = f * 4),
            n.a.stroke(),
            S(n.a),
            (n.a.strokeStyle = At(o)),
            (n.a.lineWidth = f),
            n.a.stroke(),
            S(n.f),
            (n.f.strokeStyle = Vi(0.7, 0.55, m)),
            (n.f.lineWidth = f * 4),
            n.f.stroke(),
            S(n.f),
            (n.f.strokeStyle = Vi(0.9, 1, m)),
            (n.f.lineWidth = f * 1.4),
            n.f.stroke());
        }
        if (p > 0)
          for (let g = 0; g < 2; g++) {
            const b = y[3 + Math.floor(r() * 7)];
            l(b[0], b[1], d + (r() - 0.5) * 2, u * 0.45, f * 0.6, p - 1, m);
          }
      };
    for (let c = 0; c < 10; c++)
      l(r() * we, r() * we, r() * Math.PI * 2, 200 + r() * 140, 3.2, 2, c / 10);
  },
  sakura(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(201, 3, 3),
      r = En(203);
    zn(n, 256, (c, h) => ({ c: _i(t, i, a(c, h) * 0.7), m: 0.65, s: 0 }));
    const l = (c, h, d, u, f, p) => {
      const m = [[c, h]];
      let y = c,
        g = h;
      for (let b = 0; b < 10; b++)
        ((d += (r() - 0.5) * 0.35),
          (y += (Math.cos(d) * u) / 10),
          (g += (Math.sin(d) * u) / 10),
          m.push([y, g]));
      for (const [b, S] of [
        [-we, 0],
        [0, 0],
        [we, 0],
        [0, -we],
        [0, we],
      ]) {
        const M = m.map(([x, T]) => [x + b, T + S]);
        (Qo(n.a, M, f, f * 0.35, At(o)),
          Qo(n.f, M, f, f * 0.35, Vi(1, 0.15, 0.7)));
      }
      if (p > 0)
        for (let b = 0; b < 3; b++) {
          const S = m[2 + Math.floor(r() * 7)];
          l(
            S[0],
            S[1],
            d + (r() < 0.5 ? -1 : 1) * (0.5 + r() * 0.6),
            u * 0.55,
            f * 0.55,
            p - 1,
          );
        }
      for (let b = 0; b < 5; b++) {
        const S = m[Math.floor(r() * m.length)],
          M = 10 + r() * 10,
          x = r() * 6;
        On(S[0], S[1], M, (T, A) => {
          (Jx(n.a, T, A, M, x, At(s), At(o)),
            Jx(n.f, T, A, M, x, Vi(0.5, 0.35, 0.9), Vi(1, 0.4, 1)));
        });
      }
    };
    for (let c = 0; c < 5; c++)
      l(r() * we, r() * we, r() * Math.PI * 2, 260, 13, 2);
    for (let c = 0; c < 60; c++) {
      const h = r() * we,
        d = r() * we,
        u = 2 + r() * 3,
        f = r() * 6;
      On(h, d, u * 2, (p, m) => {
        ((n.a.fillStyle = At(_i(s, [255, 255, 255], r() * 0.4), 0.9)),
          n.a.beginPath(),
          n.a.ellipse(p, m, u * 1.6, u, f, 0, Math.PI * 2),
          n.a.fill(),
          (n.f.fillStyle = Vi(0.5, 0.25, 0.8)),
          n.f.beginPath(),
          n.f.ellipse(p, m, u * 1.6, u, f, 0, Math.PI * 2),
          n.f.fill());
      });
    }
  },
  fade(n, e) {
    const t = e.colors.map(bn);
    (zn(n, 256, (i, s) => {
      const o = 0.5 - 0.5 * Math.cos((i * 0.5 + s * 0.5) * Math.PI * 2);
      return { c: Ga(t, o), m: 0.95, s: 0.4 + o * 0.4 };
    }),
      vh(n, 2, 4));
  },
  dragon(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(211, 3, 5),
      r = ki(213, 5, 4);
    zn(n, 256, (h, d) => {
      const u = a(h, d),
        f = Math.abs(Math.sin((h * 3 + u * 4 + r(h, d)) * Math.PI)),
        p = _i(_i(t, i, u * 0.9), o, Math.pow(1 - f, 14) * 0.8);
      return { c: _i(p, _i(t, i, u), 0.35), m: 0.85, s: 0.35 };
    });
    const l = (h, d) => [
      h * we,
      ((d / (Math.PI * 2) + 0.16 * Math.sin(h * Math.PI * 4 + d * 3)) * we) %
        we,
    ];
    for (const [h, d] of [
      [0, 42],
      [(Math.PI * 2) / 3, 34],
      [(Math.PI * 4) / 3, 28],
    ])
      for (let u = 0; u <= 220; u++) {
        const f = u / 220,
          [p, m] = l(f, h),
          [y, g] = l(f + 0.01, h),
          b = Math.atan2(g - m, y - p),
          S = d * (0.85 + 0.15 * Math.sin(f * 40));
        On(p, m, S, (M, x) => {
          const T = n.a.createRadialGradient(M - 3, x - 3, 1, M, x, S * 0.6);
          (T.addColorStop(0, "#fff3c0"),
            T.addColorStop(0.5, At(s)),
            T.addColorStop(1, At(Hn(s, 0.45))),
            (n.a.fillStyle = T),
            n.a.beginPath(),
            n.a.ellipse(M, x, S * 0.6, S * 0.5, b, 0, Math.PI * 2),
            n.a.fill(),
            (n.a.strokeStyle = At(Hn(s, 0.35))),
            (n.a.lineWidth = 1.2),
            n.a.beginPath(),
            n.a.arc(M, x, S * 0.45, b + 0.6, b + Math.PI - 0.6),
            n.a.stroke(),
            (n.f.fillStyle = Vi(1, 0.08, 0.8)),
            n.f.beginPath(),
            n.f.ellipse(M, x, S * 0.6, S * 0.5, b, 0, Math.PI * 2),
            n.f.fill(),
            u % 10 === 0 &&
              ((n.a.fillStyle = At(Hn(s, 0.8))),
              n.a.beginPath(),
              n.a.moveTo(
                M + Math.cos(b - Math.PI / 2) * S * 0.4,
                x + Math.sin(b - Math.PI / 2) * S * 0.4,
              ),
              n.a.lineTo(
                M + Math.cos(b - Math.PI / 2) * S * 1.05 + Math.cos(b) * 6,
                x + Math.sin(b - Math.PI / 2) * S * 1.05 + Math.sin(b) * 6,
              ),
              n.a.lineTo(M + Math.cos(b) * 10, x + Math.sin(b) * 10),
              n.a.fill()));
        });
      }
    const c = En(217);
    for (let h = 0; h < 14; h++) {
      const d = c() * we,
        u = c() * we,
        f = 4 + c() * 6;
      On(d, u, f, (p, m) => {
        const y = n.a.createRadialGradient(
          p - f * 0.3,
          m - f * 0.3,
          0,
          p,
          m,
          f,
        );
        (y.addColorStop(0, "#ffffff"),
          y.addColorStop(1, At(o)),
          (n.a.fillStyle = y),
          n.a.beginPath(),
          n.a.arc(p, m, f, 0, Math.PI * 2),
          n.a.fill(),
          (n.f.fillStyle = Vi(1, 0.3, 1)),
          n.f.beginPath(),
          n.f.arc(p, m, f, 0, Math.PI * 2),
          n.f.fill());
      });
    }
  },
  damascus(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(221, 4, 5),
      r = ki(223, 2, 3);
    zn(n, we, (l, c) => {
      const h = a(l, c),
        d =
          Math.sin(
            (c * 22 + h * 9 + Math.sin(l * Math.PI * 2) * 1.5) * Math.PI * 2,
          ) *
            0.5 +
          0.5;
      let u = _i(t, i, Math.pow(d, 1.6));
      const f = r(l, c),
        p = Ga([[255, 255, 255], s, o, [130, 70, 140], [60, 90, 170]], f);
      return (
        (u = _i(
          u,
          [(u[0] * p[0]) / 200, (u[1] * p[1]) / 200, (u[2] * p[2]) / 200],
          0.55,
        )),
        { c: u, m: 1, s: 0.1 }
      );
    });
  },
  web(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(231, 4, 4);
    zn(n, 256, (l, c) => ({ c: _i(t, i, a(l, c) * 0.8), m: 0.5 }));
    const r = En(233);
    for (let l = 0; l < 4; l++) {
      const c = r() * we,
        h = r() * we,
        d = 9 + Math.floor(r() * 4),
        u = 150 + r() * 90,
        f = Array.from(
          { length: d },
          (p, m) => (m / d) * Math.PI * 2 + (r() - 0.5) * 0.3,
        );
      On(c, h, u, (p, m) => {
        d5(n, (y, g) => {
          ((y.strokeStyle = g === "a" ? At(s, 0.9) : Vi(0.6, 0.9, 0)),
            (y.lineWidth = 1.6));
          for (const b of f)
            (y.beginPath(),
              y.moveTo(p, m),
              y.lineTo(p + Math.cos(b) * u, m + Math.sin(b) * u),
              y.stroke());
          for (let b = 14; b < u; b += 13 + b * 0.08)
            (y.beginPath(),
              f.forEach((S, M) => {
                const x = f[(M + 1) % d] + (M === d - 1 ? Math.PI * 2 : 0),
                  T = (S + x) / 2,
                  A = b * 0.9,
                  _ = p + Math.cos(S) * b,
                  C = m + Math.sin(S) * b,
                  R = p + Math.cos(x) * b,
                  L = m + Math.sin(x) * b;
                (M || y.moveTo(_, C),
                  y.quadraticCurveTo(
                    p + Math.cos(T) * A,
                    m + Math.sin(T) * A,
                    R,
                    L,
                  ));
              }),
              y.stroke());
        });
      });
    }
    for (let l = 0; l < 26; l++) {
      const c = r() * we,
        h = r() * we,
        d = 2 + r() * 3;
      On(c, h, d, (u, f) => {
        ((n.a.fillStyle = At(o)),
          n.a.beginPath(),
          n.a.arc(u, f, d, 0, Math.PI * 2),
          n.a.fill(),
          (n.f.fillStyle = Vi(0.8, 1, 0)),
          n.f.beginPath(),
          n.f.arc(u, f, d, 0, Math.PI * 2),
          n.f.fill());
      });
    }
  },
  ronin(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(241, 3, 3),
      r = En(243);
    zn(n, 256, (h, d) => ({ c: _i(t, i, a(h, d) * 0.9), m: 0.7 }));
    for (const [h, d, u] of [
      [150, 190, 120],
      [400, 400, 70],
    ])
      On(h, d, u + 8, (f, p) => {
        ((n.a.fillStyle = At(s)), n.a.beginPath());
        for (let m = 0; m <= 90; m++) {
          const y = (m / 90) * Math.PI * 2,
            g = u + (r() - 0.5) * 5;
          n.a.lineTo(f + Math.cos(y) * g, p + Math.sin(y) * g);
        }
        (n.a.fill(),
          (n.f.fillStyle = Vi(0.45, 0.35, 0)),
          n.f.beginPath(),
          n.f.arc(f, p, u, 0, Math.PI * 2),
          n.f.fill());
      });
    const l = ki(245, 6, 3),
      c = n.a.getImageData(0, 0, we, we);
    for (let h = 0; h < we; h++)
      for (let d = 0; d < we; d++) {
        const u = 0.62 + l(d / we, 0) * 0.2;
        if (h / we > u) {
          const f = (h * we + d) * 4,
            p = (h / we - u) * 2;
          ((c.data[f] = 30 - p * 20),
            (c.data[f + 1] = 28 - p * 20),
            (c.data[f + 2] = 34 - p * 20));
        }
      }
    n.a.putImageData(c, 0, 0);
    for (let h = 0; h < 26; h++) {
      const d = [];
      let u = r() * we,
        f = r() * we,
        p = r() * Math.PI * 2;
      for (let m = 0; m < 10; m++)
        (d.push([u, f]),
          (p += (r() - 0.5) * 0.9),
          (u += Math.cos(p) * 12),
          (f += Math.sin(p) * 12));
      for (const [m, y] of [
        [-we, 0],
        [0, 0],
        [we, 0],
        [0, -we],
        [0, we],
      ]) {
        const g = d.map(([b, S]) => [b + m, S + y]);
        (Qo(n.a, g, 11, 1.5, At(o)), Qo(n.f, g, 11, 1.5, Vi(1, 0.2, 0.9)));
      }
    }
    for (let h = 0; h < 140; h++) {
      n.a.fillStyle = At(o, 0.8);
      const d = r() * we,
        u = r() * we;
      (n.a.fillRect(d, u, 2, 2),
        (n.f.fillStyle = Vi(1, 0, 1)),
        n.f.fillRect(d, u, 2, 2));
    }
    for (let h = 0; h < 18; h++) {
      const d = r() * we,
        u = r() * we,
        f = 2 + r() * 6;
      On(d, u, f, (p, m) => {
        ((n.a.fillStyle = At(s, 0.9)),
          n.a.beginPath(),
          n.a.arc(p, m, f, 0, Math.PI * 2),
          n.a.fill());
      });
    }
  },
  lava(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = En(251),
      r = Array.from({ length: 46 }, () => [a(), a()]),
      l = Qx(r),
      c = ki(253, 8, 3);
    zn(n, we, (h, d) => {
      const { d1: u, d2: f, id: p } = l(h, d),
        m = f - u,
        y = c(h, d),
        g = 1 - Zo(0.002, 0.018 + y * 0.012, m),
        b = _i(t, i, Wh(u * 6 + y * 0.4)),
        S = Ga([Hn(s, 0.6), s, o], g);
      return {
        c: g > 0.05 ? _i(b, S, g) : Hn(b, 0.9 + (p % 4) * 0.05),
        m: g > 0.1 ? 0.2 : 0.45,
        g,
        s: 0,
      };
    });
  },
  doppler(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(261, 2, 5),
      r = ki(263, 3, 4);
    zn(n, 256, (c, h) => {
      const d = a(c, h),
        u = r(c + d * 0.3, h + d * 0.3),
        f = Math.sin((u * 3 + d) * Math.PI * 2) * 0.5 + 0.5,
        p = Ga([t, i, Hn(i, 1.3), s, t], f);
      return {
        c: _i(p, o, Math.pow(1 - Math.abs(f - 0.5) * 2, 18) * 0.5),
        m: 0.95,
        s: 0,
      };
    });
    const l = En(265);
    for (let c = 0; c < 260; c++) {
      const h = l() * we,
        d = l() * we,
        u = l() < 0.08 ? 2.5 : 1;
      ((n.a.fillStyle = `rgba(255,255,255,${0.5 + l() * 0.5})`),
        n.a.fillRect(h, d, u, u),
        (n.f.fillStyle = Vi(1, 0.6, 1)),
        n.f.fillRect(h - 1, d - 1, u + 2, u + 2));
    }
  },
  space(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(271, 2, 5),
      r = ki(273, 4, 4);
    zn(n, 256, (c, h) => {
      const d = a(c, h),
        u = r(c + d * 0.2, h),
        f = Zo(0.35, 0.65, d),
        p = Zo(0.4, 0.75, d * 0.6 + u * 0.55);
      return {
        c: _i(_i(t, Hn(i, 2.6), f), Hn(_i(s, o, u), 1.15), p),
        m: 0.6,
        s: 0,
      };
    });
    const l = En(275);
    On(330, 230, 120, (c, h) => {
      const d = n.a.createRadialGradient(c, h, 18, c, h, 110);
      (d.addColorStop(0, "rgba(0,0,0,1)"),
        d.addColorStop(0.25, "rgba(0,0,0,1)"),
        d.addColorStop(0.33, At(o, 0.9)),
        d.addColorStop(0.42, At(s, 0.6)),
        d.addColorStop(1, "rgba(0,0,0,0)"),
        (n.a.fillStyle = d),
        n.a.fillRect(c - 120, h - 120, 240, 240),
        n.a.save(),
        n.a.translate(c, h),
        n.a.scale(1, 0.32),
        (n.a.strokeStyle = "rgba(255,240,220,.85)"),
        (n.a.lineWidth = 7),
        n.a.beginPath(),
        n.a.arc(0, 0, 70, 0, Math.PI * 2),
        n.a.stroke(),
        n.a.restore(),
        n.f.save(),
        n.f.translate(c, h),
        n.f.scale(1, 0.32),
        (n.f.strokeStyle = Vi(0.6, 0.9, 0.4)),
        (n.f.lineWidth = 9),
        n.f.beginPath(),
        n.f.arc(0, 0, 70, 0, Math.PI * 2),
        n.f.stroke(),
        n.f.restore());
    });
    for (let c = 0; c < 420; c++) {
      const h = l() * we,
        d = l() * we,
        u = l() < 0.05,
        f = u ? 2.5 : l() < 0.3 ? 1.5 : 1;
      ((n.a.fillStyle = At(
        _i([255, 255, 255], l() < 0.5 ? o : s, l() * 0.4),
        0.5 + l() * 0.5,
      )),
        n.a.fillRect(h, d, f, f),
        (n.f.fillStyle = Vi(0.6, u ? 0.8 : 0.3, 1)),
        n.f.fillRect(h - 0.5, d - 0.5, f + 1, f + 1),
        u &&
          On(h, d, 8, (p, m) => {
            ((n.a.fillStyle = "rgba(255,255,255,.55)"),
              n.a.fillRect(p - 6, m + 0.7, 13, 1),
              n.a.fillRect(p + 0.7, m - 6, 1, 13));
          }));
    }
  },
  phoenix(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(311, 5, 4),
      r = ki(313, 3, 3),
      l = En(317);
    zn(n, 256, (h, d) => {
      const u = a(h, d),
        f = r(h + u * 0.2, d),
        p = Math.pow(1 - Math.abs(u - 0.5) * 2, 14);
      return {
        c: _i(_i(t, i, Zo(0.3, 0.8, f)), s, p * 0.7),
        m: 0.35 + p * 0.3,
        g: p * 0.55 + Zo(0.62, 0.9, f) * 0.25,
        s: d,
      };
    });
    const c = (h, d, u, f, p) => {
      const m = [];
      let y = h,
        g = d,
        b = f;
      for (let S = 0; S <= 16; S++)
        (m.push([y, g]),
          (b += 0.045),
          (y += (Math.cos(b) * u) / 16),
          (g += (Math.sin(b) * u) / 16));
      for (const [S, M] of [
        [-we, 0],
        [0, 0],
        [we, 0],
        [0, -we],
        [0, we],
        [we, we],
        [-we, -we],
        [we, -we],
        [-we, we],
      ]) {
        const x = m.map(([T, A]) => [T + S, A + M]);
        if (
          !x.every(([T, A]) => T < -60 || T > we + 60 || A < -60 || A > we + 60)
        ) {
          for (let T = 1; T < x.length - 1; T++) {
            const A = T / (x.length - 1),
              [_, C] = x[T],
              [R, L] = x[T + 1],
              N = Math.atan2(L - C, R - _),
              D = p * Math.sin(Math.PI * Math.min(1, A * 1.2)) + 2;
            for (const H of [-1, 1]) {
              const G = N + H * (1.05 - A * 0.35),
                I = _ + Math.cos(G) * D,
                O = C + Math.sin(G) * D,
                F = n.a.createLinearGradient(_, C, I, O);
              (F.addColorStop(0, At(o, 0.95)),
                F.addColorStop(0.45, At(s, 0.9)),
                F.addColorStop(1, At(i, 0)),
                (n.a.strokeStyle = F),
                (n.a.lineWidth = 3.2),
                (n.a.lineCap = "round"),
                n.a.beginPath(),
                n.a.moveTo(_, C),
                n.a.quadraticCurveTo(
                  _ + Math.cos(G - H * 0.4) * D * 0.6,
                  C + Math.sin(G - H * 0.4) * D * 0.6,
                  I,
                  O,
                ),
                n.a.stroke(),
                (n.f.strokeStyle = Vi(
                  0.75,
                  0.55 * (1 - A * 0.4),
                  0.5 + 0.5 * A,
                )),
                (n.f.lineWidth = 3.2),
                (n.f.lineCap = "round"),
                n.f.beginPath(),
                n.f.moveTo(_, C),
                n.f.lineTo(I, O),
                n.f.stroke());
            }
          }
          (Qo(n.a, x, 3.4, 0.8, At(_i(o, [255, 255, 235], 0.5))),
            Qo(n.f, x, 3.4, 0.8, Vi(1, 0.95, 1)));
        }
      }
    };
    for (let h = 0; h < 34; h++)
      c(
        l() * we,
        l() * we,
        70 + l() * 80,
        -Math.PI / 2 - 0.5 + (l() - 0.5) * 0.7,
        14 + l() * 12,
      );
    On(256, 270, 150, (h, d) => {
      for (const u of [-1, 1])
        for (let f = 0; f < 5; f++) {
          const p = -Math.PI / 2 + u * (0.35 + f * 0.2),
            m = 120 - f * 14,
            y = [];
          for (let g = 0; g <= 12; g++) {
            const b = g / 12,
              S = p + u * b * 0.55;
            y.push([
              h + u * 14 + Math.cos(S) * m * b * (u > 0, 1),
              d - 10 + Math.sin(S) * m * b,
            ]);
          }
          (Qo(n.a, y, 9 - f, 1.5, At(f % 2 ? s : o, 0.95)),
            Qo(n.f, y, 9 - f, 1.5, Vi(1, 0.9, 0.8)));
        }
      ((n.a.fillStyle = At(o)),
        n.a.beginPath(),
        n.a.ellipse(h, d + 10, 11, 30, 0, 0, Math.PI * 2),
        n.a.fill(),
        (n.f.fillStyle = Vi(1, 1, 0.7)),
        n.f.beginPath(),
        n.f.ellipse(h, d + 10, 11, 30, 0, 0, Math.PI * 2),
        n.f.fill(),
        n.a.beginPath(),
        n.a.arc(h, d - 28, 9, 0, Math.PI * 2),
        n.a.fill());
      for (let u = 0; u < 3; u++) {
        const f = [];
        for (let p = 0; p <= 10; p++) {
          const m = p / 10;
          f.push([
            h + (u - 1) * 10 * m + Math.sin(m * 6 + u) * 6,
            d + 38 + m * 90,
          ]);
        }
        (Qo(n.a, f, 7, 1, At(u === 1 ? o : s, 0.95)),
          Qo(n.f, f, 7, 1, Vi(1, 0.85, 0.9)));
      }
    });
    for (let h = 0; h < 160; h++) {
      const d = l() * we,
        u = l() * we,
        f = l() < 0.15 ? 2.4 : 1.2;
      ((n.a.fillStyle = At(_i(s, o, l()), 0.9)),
        n.a.fillRect(d, u, f, f),
        (n.f.fillStyle = Vi(0.6, 1, l())),
        n.f.fillRect(d - 0.5, u - 0.5, f + 1, f + 1));
    }
    vh(n, 319, 6);
  },
  runes(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(331, 4, 4),
      r = En(337),
      l = ki(333, 2, 5);
    (zn(n, 256, (d, u) => {
      const f = a(d, u),
        p = l(d + f * 0.3, u),
        m = Zo(0.45, 0.8, p);
      return {
        c: _i(_i(t, Hn(i, 1.6), Zo(0.3, 0.75, f)), Hn(o, 0.38), m * 0.7),
        m: 0.75 + f * 0.2,
        g: m * 0.12,
        s: (d + u) * 0.5,
      };
    }),
      (n.a.strokeStyle = At(_i(i, s, 0.25), 0.28)),
      (n.a.lineWidth = 0.8));
    for (let d = 0; d < 18; d++)
      for (let u = 0; u < 16; u++) {
        const f = u * 32 + (d % 2) * 16,
          p = d * 28.45;
        n.a.beginPath();
        for (let m = 0; m < 7; m++) {
          const y = Math.PI / 6 + (m * Math.PI) / 3,
            g = f + Math.cos(y) * 16.5,
            b = p + Math.sin(y) * 16.5;
          m ? n.a.lineTo(g, b) : n.a.moveTo(g, b);
        }
        n.a.stroke();
      }
    const c = (d, u, f, p, m) => {
        const y = En(m);
        d.beginPath();
        const g = () => [
          u + (Math.floor(y() * 3) - 1) * p,
          f + (Math.floor(y() * 3) - 1) * p * 1.3,
        ];
        for (let b = 0; b < 3 + Math.floor(y() * 2); b++) {
          const [S, M] = g(),
            [x, T] = g();
          (d.moveTo(S, M), d.lineTo(x, T));
        }
        (y() < 0.4 &&
          (d.moveTo(u + p * 0.5, f), d.arc(u, f, p * 0.5, 0, Math.PI * 2)),
          d.stroke());
      },
      h = (d, u, f, p) =>
        On(d, u, f + 10, (m, y) => {
          for (const [g, b] of [
            [n.a, "a"],
            [n.f, "f"],
          ]) {
            (g.save(), (g.lineCap = "round"));
            const S = (x, T = 1) =>
              b === "a" ? At(_i(s, o, x), T) : Vi(0.9, 1, (p + x * 0.25) % 1);
            ((g.strokeStyle = S(0)),
              (g.lineWidth = 2.4),
              g.beginPath(),
              g.arc(m, y, f, 0, Math.PI * 2),
              g.stroke(),
              (g.lineWidth = 1.2),
              g.beginPath(),
              g.arc(m, y, f * 0.82, 0, Math.PI * 2),
              g.stroke(),
              (g.strokeStyle = S(0.6)),
              g.beginPath());
            for (let x = 0; x < 7; x++) {
              const T = -Math.PI / 2 + (x * Math.PI * 4) / 6,
                A = m + Math.cos(T) * f * 0.7,
                _ = y + Math.sin(T) * f * 0.7;
              x ? g.lineTo(A, _) : g.moveTo(A, _);
            }
            (g.stroke(), (g.lineWidth = 1.5));
            const M = Math.floor(f / 5);
            for (let x = 0; x < M; x++) {
              const T = (x / M) * Math.PI * 2;
              (g.save(),
                g.translate(
                  m + Math.cos(T) * f * 0.91,
                  y + Math.sin(T) * f * 0.91,
                ),
                g.rotate(T + Math.PI / 2),
                (g.strokeStyle = S(x / M)),
                b === "f" && (g.strokeStyle = Vi(0.9, 1, (p + x / M) % 1)),
                c(g, 0, 0, f * 0.035, 400 + x * 13 + Math.floor(p * 97)),
                g.restore());
            }
            g.restore();
          }
        });
    (h(150, 160, 110, 0.1),
      h(390, 380, 92, 0.55),
      h(410, 110, 46, 0.3),
      h(110, 420, 54, 0.8),
      h(300, 250, 34, 0.42),
      h(30, 280, 40, 0.67),
      h(250, 470, 30, 0.2),
      h(480, 240, 28, 0.9));
    for (let d = 0; d < 16; d++) {
      const u = r() * we,
        f = r() * we,
        p =
          (Math.floor(r() * 4) * Math.PI) / 2 +
          (Math.PI / 4) * (r() < 0.5 ? 1 : 0),
        m = 90 + r() * 140,
        y = r();
      On(u, f, m, (g, b) => {
        for (const [S, M] of [
          [n.a, "a"],
          [n.f, "f"],
        ]) {
          S.lineWidth = 1.3;
          const x = Math.floor(m / 14);
          for (let T = 0; T < x; T++) {
            const A = T / x;
            ((S.strokeStyle =
              M === "a"
                ? At(_i(s, o, A), 0.85)
                : Vi(0.85, 0.9, (y + A * 0.5) % 1)),
              c(
                S,
                g + Math.cos(p) * m * A,
                b + Math.sin(p) * m * A,
                4.2,
                900 + d * 31 + T,
              ));
          }
        }
      });
    }
    vh(n, 339, 5);
  },
  filigree(n, e) {
    const [t, i, s, o] = e.colors.map(bn),
      a = ki(281, 4, 3);
    zn(n, 256, (c, h) => ({
      c: Ga([i, t, o], 0.4 + a(c, h) * 0.5),
      m: 1,
      s: 0.3,
    }));
    const r = En(283),
      l = (c, h, d, u, f, p) => {
        const m = [];
        for (let y = 0; y <= 50; y++) {
          const g = y / 50,
            b = u + f * g * Math.PI * 2.6,
            S = d * (1 - g * 0.8);
          m.push([c + Math.cos(b) * S, h + Math.sin(b) * S]);
        }
        for (const [y, g] of [
          [-we, 0],
          [0, 0],
          [we, 0],
          [0, -we],
          [0, we],
          [we, we],
          [-we, -we],
          [we, -we],
          [-we, we],
        ]) {
          const b = m.map(([S, M]) => [S + y, M + g]);
          if (
            !b.every(
              ([S, M]) => S < -20 || S > we + 20 || M < -20 || M > we + 20,
            )
          ) {
            (Qo(
              n.a,
              b.map(([S, M]) => [S + 1.2, M + 1.2]),
              5,
              1,
              At(o, 0.9),
            ),
              Qo(n.a, b, 5, 1, At(s, 0.9)),
              Qo(n.f, b, 5, 1, Vi(0.7, 0, 0)));
            for (let S = 4; S < 44; S += 5) {
              const [M, x] = b[S],
                T =
                  Math.atan2(b[S + 1][1] - x, b[S + 1][0] - M) -
                  (f * Math.PI) / 2,
                A = 9 * (1 - S / 50) + 3;
              ((n.a.fillStyle = At(s, 0.8)),
                n.a.beginPath(),
                n.a.ellipse(
                  M + Math.cos(T) * A,
                  x + Math.sin(T) * A,
                  A,
                  A * 0.38,
                  T,
                  0,
                  Math.PI * 2,
                ),
                n.a.fill(),
                (n.a.strokeStyle = At(o, 0.6)),
                (n.a.lineWidth = 0.8),
                n.a.beginPath(),
                n.a.moveTo(M, x),
                n.a.lineTo(
                  M + Math.cos(T) * A * 1.8,
                  x + Math.sin(T) * A * 1.8,
                ),
                n.a.stroke());
            }
          }
        }
        if (p > 0)
          for (let y = 0; y < 2; y++) {
            const [g, b] = m[10 + y * 14];
            l(g, b, d * 0.5, u + Math.PI * (y + 0.5), -f, p - 1);
          }
      };
    for (let c = 0; c < 4; c++)
      for (let h = 0; h < 4; h++)
        l(
          h * 128 + 64 + (r() - 0.5) * 30,
          c * 128 + 64 + (r() - 0.5) * 30,
          46 + r() * 12,
          r() * 6,
          h % 2 ? 1 : -1,
          2,
        );
    ((n.a.strokeStyle = At(s, 0.18)), (n.a.lineWidth = 0.7));
    for (let c = -we; c < we * 2; c += 6)
      (n.a.beginPath(), n.a.moveTo(c, 0), n.a.lineTo(c + we, we), n.a.stroke());
    for (let c = 0; c < 26; c++) {
      const h = r() * we,
        d = r() * we,
        u = 3.5 + r() * 3;
      On(h, d, u + 2, (f, p) => {
        ((n.a.fillStyle = At(s)),
          n.a.beginPath(),
          n.a.arc(f, p, u + 1.8, 0, Math.PI * 2),
          n.a.fill());
        const m = n.a.createRadialGradient(
          f - u * 0.3,
          p - u * 0.3,
          0,
          f,
          p,
          u,
        );
        (m.addColorStop(0, "#ffffff"),
          m.addColorStop(0.6, "#dff4ff"),
          m.addColorStop(1, "#8fb4d8"),
          (n.a.fillStyle = m),
          n.a.beginPath(),
          n.a.arc(f, p, u, 0, Math.PI * 2),
          n.a.fill(),
          (n.f.fillStyle = Vi(1, 0.5, 1)),
          n.f.beginPath(),
          n.f.arc(f, p, u, 0, Math.PI * 2),
          n.f.fill());
      });
    }
  },
};
