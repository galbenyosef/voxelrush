// index-BeUlFSPp 49 — math
// Lines 43377-45720 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const P_ = {
  tread(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(1201, 16, 3),
      r = ls(1203);
    gs(s, ie, (c, h) => {
      const d = a(c, h),
        u = r();
      return {
        c: Xi(li(t, i, d * 0.8), 0.82 + u * 0.3 + (u > 0.985 ? 0.5 : 0)),
        m: 0.12,
      };
    });
    const l = (c, h, d, u = 0) => {
      for (let f = 0; f < ie; f += u || ie)
        ((s.a.fillStyle = bt(d, 0.92)),
          s.a.fillRect(f, c, u ? u * 0.6 : ie, h),
          (s.f.fillStyle = Ei(0.3)),
          s.f.fillRect(f, c, u ? u * 0.6 : ie, h));
    };
    (l(96, 12, n), l(116, 12, n), l(352, 10, o, 128));
    for (const [c, h] of [
      [200, -0.08],
      [440, 0.05],
    ]) {
      (s.a.save(), s.a.translate(0, c), s.a.rotate(h));
      for (let d = -40; d < ie + 40; d += 22)
        ((s.a.fillStyle = "rgba(8,8,10,.62)"),
          s.a.beginPath(),
          s.a.moveTo(d, -26),
          s.a.lineTo(d + 14, -6),
          s.a.lineTo(d, 14),
          s.a.lineTo(d - 8, 14),
          s.a.lineTo(d + 6, -6),
          s.a.lineTo(d - 8, -26),
          s.a.fill());
      s.a.restore();
    }
    for (let c = 0; c < 260; c++) {
      const h = r() * ie,
        d = r() * ie,
        u = 1 + r() * 3;
      ((s.a.fillStyle = bt(t, 0.85)), s.a.fillRect(h, d, u, u));
    }
    (Lr(s, "URBAN ASSAULT", 380, 64, 15, "rgba(244,244,240,.55)"),
      Xa(s, 1207, 10));
  },
  kintsugi(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(1211, 5, 4),
      r = ls(1213);
    gs(s, 256, (c, h) => {
      const d = a(c, h);
      return { c: li(t, i, _o(0.35, 0.8, d)), m: 0.55 + d * 0.2, s: 0.05 };
    });
    const l = (c, h, d, u, f, p) => {
      const m = [[c, h]];
      for (let g = 0; g < 16; g++)
        ((d += (r() - 0.5) * 0.7),
          (c += (Math.cos(d) * u) / 16),
          (h += (Math.sin(d) * u) / 16),
          m.push([c, h]));
      for (const [g, y] of [
        [-ie, 0],
        [0, 0],
        [ie, 0],
        [0, -ie],
        [0, ie],
        [-ie, -ie],
        [ie, ie],
        [ie, -ie],
        [-ie, ie],
      ]) {
        const b = m.map(([S, M]) => [S + g, M + y]);
        b.every(([S, M]) => S < -10 || S > ie + 10 || M < -10 || M > ie + 10) ||
          (Xn(
            s.a,
            b.map(([S, M]) => [S + 0.8, M + 0.8]),
            f + 1.6,
            f * 0.3 + 0.6,
            bt(Xi(n, 0.45), 0.8),
          ),
          Xn(s.a, b, f, f * 0.3, bt(n)),
          Xn(
            s.a,
            b.map(([S, M]) => [S - 0.4, M - 0.4]),
            f * 0.35,
            f * 0.1,
            bt(o, 0.8),
          ),
          Xn(s.f, b, f + 1, f * 0.3, Ei(1, 0.35, 1)));
      }
      if (p > 0)
        for (let g = 0; g < 2; g++) {
          const y = m[4 + Math.floor(r() * 10)];
          l(
            y[0],
            y[1],
            d + (r() < 0.5 ? 1 : -1) * (0.6 + r() * 0.6),
            u * 0.5,
            f * 0.62,
            p - 1,
          );
        }
    };
    for (let c = 0; c < 7; c++)
      l(r() * ie, r() * ie, r() * Math.PI * 2, 260 + r() * 120, 4.2, 2);
    for (let c = 0; c < 14; c++) {
      const h = r() * ie,
        d = r() * ie,
        u = 3 + r() * 5;
      ys(h, d, u, (f, p) => {
        ((s.a.fillStyle = bt(n)),
          s.a.beginPath(),
          s.a.ellipse(f, p, u, u * 0.6, r() * 3, 0, Math.PI * 2),
          s.a.fill(),
          (s.f.fillStyle = Ei(1, 0.4, 1)),
          s.f.fillRect(f - u, p - u, u * 2, u * 2));
      });
    }
  },
  blueprint(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(1221, 4, 3);
    gs(s, 256, (d, u) => ({ c: li(t, i, a(d, u) * 0.55), m: 0.2 }));
    const r = (d, u, f) => {
      ((s.a.strokeStyle = bt(n, u)), (s.a.lineWidth = f));
      for (let p = 0; p <= ie; p += d)
        (s.a.beginPath(),
          s.a.moveTo(p, 0),
          s.a.lineTo(p, ie),
          s.a.moveTo(0, p),
          s.a.lineTo(ie, p),
          s.a.stroke());
    };
    (r(16, 0.12, 1), r(64, 0.28, 1.4));
    const l = ls(1223),
      c = (d) => (d / ie) % 1,
      h = (d, u, f) => {
        ((s.a.strokeStyle = bt(n, 0.92)),
          (s.a.lineWidth = u),
          s.a.beginPath(),
          d(s.a),
          s.a.stroke(),
          (s.f.strokeStyle = Ei(0.4, 0.85, c(f))),
          (s.f.lineWidth = u + 2),
          s.f.beginPath(),
          d(s.f),
          s.f.stroke());
      };
    for (let d = 0; d < 9; d++) {
      const u = l() * ie,
        f = l() * ie,
        p = 18 + l() * 34,
        m = 8 + Math.floor(l() * 8);
      ys(u, f, p + 8, (g, y) => {
        (h(
          (b) => {
            for (let S = 0; S <= m * 2; S++) {
              const M = (S / (m * 2)) * Math.PI * 2,
                E = S % 2 ? p : p + 6,
                A = g + Math.cos(M) * E,
                T = y + Math.sin(M) * E;
              S ? b.lineTo(A, T) : b.moveTo(A, T);
            }
          },
          1.6,
          g,
        ),
          h(
            (b) => {
              b.arc(g, y, p * 0.35, 0, Math.PI * 2);
            },
            1.2,
            g,
          ),
          s.a.setLineDash([6, 4]),
          h(
            (b) => {
              (b.moveTo(g - p - 14, y),
                b.lineTo(g + p + 14, y),
                b.moveTo(g, y - p - 14),
                b.lineTo(g, y + p + 14));
            },
            0.8,
            g,
          ),
          s.a.setLineDash([]));
      });
    }
    for (let d = 0; d < 8; d++) {
      const u = l() * ie,
        f = l() * ie,
        p = 60 + l() * 120,
        m = l() < 0.4;
      ys(u, f, p, (g, y) => {
        const b = m ? g : g + p,
          S = m ? y + p : y;
        (h(
          (M) => {
            (M.moveTo(g, y), M.lineTo(b, S));
          },
          1,
          g,
        ),
          (s.a.fillStyle = bt(n)));
        for (const [M, E, A] of [
          [g, y, 1],
          [b, S, -1],
        ])
          (s.a.beginPath(),
            m
              ? (s.a.moveTo(M, E),
                s.a.lineTo(M - 3, E + 8 * A),
                s.a.lineTo(M + 3, E + 8 * A))
              : (s.a.moveTo(M, E),
                s.a.lineTo(M + 8 * A, E - 3),
                s.a.lineTo(M + 8 * A, E + 3)),
            s.a.fill());
        ((s.a.font = "700 11px monospace"),
          s.a.fillText(
            `${(p / 10).toFixed(1)}`,
            (g + b) / 2 + 4,
            (y + S) / 2 - 4,
          ));
      });
    }
    Lr(s, "DWG No. VR-0461  REV C", 300, 470, 14, bt(o, 0.8), 0, "700");
  },
  chevron(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(1231, 6, 2);
    gs(s, 256, (c, h) => ({ c: li(t, i, a(c, h)), m: 0.5 }));
    const r = 64;
    s.a.save();
    for (let c = -ie; c < ie * 2; c += r)
      ((s.a.fillStyle = bt(n)),
        s.a.beginPath(),
        s.a.moveTo(c, 0),
        s.a.lineTo(c + r * 0.42, 0),
        s.a.lineTo(c + r * 0.42 + ie / 2, ie / 2),
        s.a.lineTo(c + r * 0.42, ie),
        s.a.lineTo(c, ie),
        s.a.lineTo(c + ie / 2, ie / 2),
        s.a.closePath(),
        s.a.fill(),
        (s.f.fillStyle = Ei(0.35)),
        s.f.beginPath(),
        s.f.moveTo(c, 0),
        s.f.lineTo(c + r * 0.42, 0),
        s.f.lineTo(c + r * 0.42 + ie / 2, ie / 2),
        s.f.lineTo(c + r * 0.42, ie),
        s.f.lineTo(c, ie),
        s.f.lineTo(c + ie / 2, ie / 2),
        s.f.closePath(),
        s.f.fill());
    s.a.restore();
    const l = ls(1233);
    for (let c = 0; c < 46; c++) {
      let h = Math.floor(l() * 32) * 16,
        d = Math.floor(l() * 32) * 16,
        u = Math.floor(l() * 4);
      const f = [[h, d]];
      for (let m = 0; m < 8 + l() * 10; m++)
        (l() < 0.3 && (u = (u + (l() < 0.5 ? 1 : 3)) % 4),
          (h += [16, 0, -16, 0][u]),
          (d += [0, 16, 0, -16][u]),
          f.push([h, d]));
      const p = l();
      for (const [m, g] of [
        [-ie, 0],
        [0, 0],
        [ie, 0],
        [0, -ie],
        [0, ie],
      ])
        $2(s, (y, b) => {
          ((y.strokeStyle = b === "a" ? bt(o, 0.85) : Ei(0.8, 0.9, p)),
            (y.lineWidth = b === "a" ? 2.4 : 4),
            (y.lineJoin = "round"),
            y.beginPath(),
            f.forEach(([S, M], E) =>
              E ? y.lineTo(S + m, M + g) : y.moveTo(S + m, M + g),
            ),
            y.stroke());
        });
    }
    for (const [c, h] of [
      [128, 420],
      [400, 150],
    ])
      Lr(
        s,
        "DANGER // OVERDRIVE",
        c,
        h,
        16,
        "rgba(255,225,74,.95)",
        0,
        "900 italic",
      );
    Xa(s, 1237, 6);
  },
  feathers(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(1241, 4, 3);
    gs(s, 256, (d, u) => ({
      c: ja([i, t, o], 0.35 + a(d, u) * 0.55),
      m: 1,
      s: 0.25,
    }));
    const r = 9,
      l = 7,
      c = ie / l,
      h = ie / r;
    for (let d = r; d >= -1; d--)
      for (let u = -1; u <= l; u++) {
        const f = (u + (d % 2) * 0.5) * c,
          p = d * h,
          m = h * 2.1,
          g = c * 0.48;
        ys(f, p, m, (y, b) => {
          const S = s.a.createLinearGradient(y, b - m * 0.2, y, b + m * 0.8);
          (S.addColorStop(0, bt(Xi(t, 0.75))),
            S.addColorStop(0.6, bt(t)),
            S.addColorStop(1, bt(o)),
            (s.a.fillStyle = S),
            (s.a.strokeStyle = bt(n, 0.75)),
            (s.a.lineWidth = 1.4),
            s.a.beginPath(),
            s.a.moveTo(y, b - m * 0.2),
            s.a.bezierCurveTo(
              y + g,
              b,
              y + g * 1.05,
              b + m * 0.6,
              y,
              b + m * 0.8,
            ),
            s.a.bezierCurveTo(
              y - g * 1.05,
              b + m * 0.6,
              y - g,
              b,
              y,
              b - m * 0.2,
            ),
            s.a.fill(),
            s.a.stroke(),
            (s.a.strokeStyle = bt(n, 0.8)),
            (s.a.lineWidth = 1.1),
            s.a.beginPath(),
            s.a.moveTo(y, b - m * 0.15),
            s.a.lineTo(y, b + m * 0.75),
            s.a.stroke(),
            (s.a.lineWidth = 0.6),
            (s.a.strokeStyle = bt(n, 0.45)));
          for (let M = 1; M < 9; M++) {
            const E = b + m * (M / 11);
            (s.a.beginPath(),
              s.a.moveTo(y, E),
              s.a.lineTo(y + g * 0.8, E + 7),
              s.a.moveTo(y, E),
              s.a.lineTo(y - g * 0.8, E + 7),
              s.a.stroke());
          }
          ((s.f.fillStyle = Ei(1, 0, 0.55)),
            s.f.beginPath(),
            s.f.ellipse(y, b + m * 0.3, g * 0.6, m * 0.4, 0, 0, Math.PI * 2),
            s.f.fill());
        });
      }
    Xa(s, 1243, 5);
  },
  tigercamo(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(11, 4, 4),
      r = yi(19, 3, 3);
    gs(s, 256, (l, c) => {
      const h = a(l, c),
        d = r(l, c),
        u = Math.sin((l * 6 + h * 2.2) * Math.PI * 2) * 0.5 + 0.5;
      let f = d > 0.55 ? i : d < 0.38 ? n : t;
      return (u > 0.78 + (d - 0.5) * 0.3 && (f = o), { c: f, m: 0.1 });
    });
    for (const [l, [c, h]] of [
      [120, 90],
      [380, 300],
      [250, 460],
    ].entries())
      Lr(
        s,
        l === 1 ? "VR-07 // LOT 2209" : "FIELD ISSUE",
        c,
        h,
        15,
        "rgba(230,226,190,.5)",
      );
    Xa(s, 5, 14);
  },
  pixelcamo(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(23, 4, 3),
      r = yi(31, 6, 2),
      l = 32;
    for (let c = 0; c < ie; c += l)
      for (let h = 0; h < ie; h += l) {
        const d = (h + l / 2) / ie,
          u = (c + l / 2) / ie,
          f = a(d, u),
          p = r(d, u),
          m = f > 0.6 ? o : f > 0.5 ? n : p > 0.55 ? i : t;
        ((s.a.fillStyle = bt(Xi(m, 0.94 + ((h * 7 + c * 13) % 5) * 0.03))),
          s.a.fillRect(h, c, l, l),
          (s.f.fillStyle = Ei(0.05)),
          s.f.fillRect(h, c, l, l));
        const g = ls(h * 131 + c);
        for (let y = 0; y < 6; y++)
          ((s.a.fillStyle = bt(Xi(m, 0.82))),
            s.a.fillRect(
              h + Math.floor(g() * 8) * 4,
              c + Math.floor(g() * 8) * 4,
              4,
              4,
            ));
      }
    ((s.a.globalAlpha = 0.1), (s.a.fillStyle = "#fff"));
    for (let c = 0; c < ie; c += l)
      for (let h = 0; h < ie; h += l)
        (s.a.fillRect(h, c, l, 2), s.a.fillRect(h, c, 2, l));
    s.a.fillStyle = "#000";
    for (let c = 0; c < ie; c += l)
      for (let h = 0; h < ie; h += l)
        (s.a.fillRect(h, c + l - 2, l, 2), s.a.fillRect(h + l - 2, c, 2, l));
    s.a.globalAlpha = 1;
  },
  digital(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(41, 8, 3),
      r = yi(43, 5, 3),
      l = yi(47, 12, 2),
      c = 8;
    for (let d = 0; d < ie; d += c)
      for (let u = 0; u < ie; u += c) {
        const f = u / ie,
          p = d / ie,
          m = a(f, p),
          g = r(f, p),
          y = l(f, p),
          b = m > 0.62 ? o : g > 0.58 ? n : y > 0.55 ? i : t;
        ((s.a.fillStyle = bt(b)), s.a.fillRect(u, d, c, c));
      }
    Jq(s, 0.15);
    const h = ls(7);
    ((s.a.strokeStyle = "rgba(255,255,255,.35)"), (s.a.lineWidth = 1));
    for (let d = 0; d < 60; d++) {
      const u = h() * ie,
        f = h() * ie,
        p = 6 + h() * 20,
        m = h() * Math.PI;
      ys(u, f, p, (g, y) => {
        (s.a.beginPath(),
          s.a.moveTo(g, y),
          s.a.lineTo(g + Math.cos(m) * p, y + Math.sin(m) * p),
          s.a.stroke());
      });
    }
  },
  carbon(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = 16;
    for (let l = 0; l < ie; l += a)
      for (let c = 0; c < ie; c += a) {
        const h = (c / a + (l / a) * 2) % 4 < 2,
          d = h
            ? s.a.createLinearGradient(c, l, c + a, l)
            : s.a.createLinearGradient(c, l, c, l + a);
        (d.addColorStop(0, bt(t)),
          d.addColorStop(0.35, bt(Xi(i, 1.25))),
          d.addColorStop(0.5, bt(Xi(i, 1.6))),
          d.addColorStop(0.65, bt(Xi(i, 1.25))),
          d.addColorStop(1, bt(t)),
          (s.a.fillStyle = d),
          s.a.fillRect(c, l, a, a),
          (s.f.fillStyle = Ei(0.55, 0, h ? 0.15 : 0.05)),
          s.f.fillRect(c, l, a, a));
      }
    const r = (l, c, h, d) => {
      ((s.a.fillStyle = h),
        s.a.fillRect(0, l, ie, c),
        (s.f.fillStyle = Ei(d)),
        s.f.fillRect(0, l, ie, c));
    };
    for (const l of [60, 316])
      (r(l, 8, bt(o), 0.3),
        r(l + 14, 52, bt(n), 0.35),
        r(l + 72, 8, bt(o), 0.3));
    for (const [l, c] of [
      [140, 100],
      [390, 356],
    ])
      Lr(s, "CARBON STRIKE", l, c, 26, "rgba(255,255,255,.9)", 0, "900 italic");
  },
  hex(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = ls(29),
      r = 12,
      l = 14,
      c = ie / r,
      h = ie / l,
      d = new Set();
    for (let f = 0; f < 20; f++) d.add(Math.floor(a() * r * l));
    const u = [];
    for (let f = 0; f < l; f++)
      for (let p = 0; p < r; p++)
        u.push([(p + (f % 2) * 0.5) * c, f * h, f * r + p]);
    (gs(s, ie, (f, p) => {
      const m = f * ie,
        g = p * ie;
      let y = 1e9,
        b = 1e9,
        S = 0;
      for (const [x, R, _] of u) {
        let C = Math.abs(m - x),
          P = Math.abs(g - R);
        if (
          (C > ie / 2 && (C = ie - C),
          P > ie / 2 && (P = ie - P),
          C > c * 1.6 || P > h * 1.6)
        )
          continue;
        const O = C * C + P * P * 1.15;
        O < y ? ((b = y), (y = O), (S = _)) : O < b && (b = O);
      }
      const M = Math.sqrt(b) - Math.sqrt(y),
        E = d.has(S),
        A = 0.9 + ((S * 37) % 10) / 50;
      let T = E ? n : Xi(S % 3 === 0 ? i : t, A);
      return (
        M < 2.2 ? (T = o) : M < 4 && (T = li(T, [255, 255, 255], 0.12)),
        { c: T, m: E ? 0.2 : M < 2.2 ? 0.1 : 0.45, g: E ? 0.12 : 0 }
      );
    }),
      Xa(s, 9, 8));
  },
  snake(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = ls(61),
      r = yi(63, 4, 3),
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
        g = 9,
        y = 0;
      for (let b = -1; b <= 1; b++)
        for (let S = -1; S <= 1; S++) {
          const M = (f + S + l) % l,
            E = (p + b + l) % l,
            A = E * l + M;
          let T = c[A][0] + Math.floor((f + S) / l) * 1,
            x = c[A][1] + Math.floor((p + b) / l) * 1;
          const R = Math.hypot(d - T, u - x);
          R < m ? ((g = m), (m = R), (y = A)) : R < g && (g = R);
        }
      return { id: y, d1: m, d2: g };
    };
    gs(s, ie, (d, u) => {
      const { id: f, d1: p, d2: m } = h(d, u),
        [g, y] = c[f],
        b = r(g, y),
        S = Math.abs(Math.sin((g * 3 + b * 1.5) * Math.PI * 2));
      let M = b > 0.58 ? n : b > 0.5 ? i : S > 0.82 ? o : t;
      b > 0.48 && b < 0.51 && (M = o);
      const E = 1 - Hh(p * l * 1.4);
      return (
        (M = Xi(M, 0.7 + E * 0.45)),
        m - p < 0.006 && (M = Xi(M, 0.35)),
        { c: M, m: 0.3 + E * 0.25, s: E * 0.2 }
      );
    });
  },
  topo(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(71, 3, 5);
    gs(s, ie, (l, c) => {
      const h = a(l, c),
        d = Math.floor(h * 14),
        u = h * 14 - d;
      let f = li(t, i, (d % 4) / 6);
      return (
        u < 0.07 && (f = li(f, n, d % 5 === 0 ? 0.95 : 0.6)),
        { c: f, m: 0.08 }
      );
    });
    const r = ls(3);
    for (let l = 0; l < 5; l++) {
      const c = r() * ie,
        h = r() * ie;
      (ys(c, h, 30, (d, u) => {
        ((s.a.strokeStyle = bt(o)),
          (s.a.lineWidth = 3),
          s.a.beginPath(),
          s.a.arc(d, u, 14, 0, Math.PI * 2),
          s.a.stroke(),
          s.a.beginPath(),
          s.a.moveTo(d - 22, u),
          s.a.lineTo(d + 22, u),
          s.a.moveTo(d, u - 22),
          s.a.lineTo(d, u + 22),
          s.a.stroke());
      }),
        Lr(s, `OBJ ${"ABCDE"[l]}`, c + 34, h - 18, 13, bt(o)));
    }
    Lr(s, "GRID 44-17", 400, 60, 14, "rgba(216,208,162,.7)");
  },
  graffiti(s, e) {
    const t = e.colors.map(ts),
      i = t.slice(1),
      n = ls(91),
      o = yi(93, 16, 3);
    gs(s, 256, (r, l) => ({
      c: Xi([150, 150, 158], 0.78 + o(r, l) * 0.4),
      m: 0.15,
    }));
    for (let r = 0; r < 26; r++) {
      const l = n() * ie,
        c = n() * ie,
        h = 30 + n() * 70,
        d = i[r % i.length];
      ys(l, c, h, (u, f) => {
        const p = s.a.createRadialGradient(u, f, 0, u, f, h);
        (p.addColorStop(0, bt(d, 0.95)),
          p.addColorStop(0.55, bt(d, 0.7)),
          p.addColorStop(1, bt(d, 0)),
          (s.a.fillStyle = p),
          s.a.fillRect(u - h, f - h, h * 2, h * 2));
      });
    }
    const a = ["RUSH", "BOOM", "VR", "GG", "NOOB", "WOW"];
    for (let r = 0; r < 12; r++) {
      const l = n() * ie,
        c = n() * ie,
        h = 44 + n() * 34,
        d = i[(r + 1) % i.length],
        u = a[r % a.length],
        f = (n() - 0.5) * 0.6;
      ys(l, c, h * 2.2, (p, m) => {
        (s.a.save(),
          s.a.translate(p, m),
          s.a.rotate(f),
          (s.a.font = `900 italic ${h}px Impact, "Arial Black", sans-serif`),
          (s.a.textAlign = "center"),
          (s.a.textBaseline = "middle"),
          (s.a.lineJoin = "round"),
          (s.a.lineWidth = h * 0.22),
          (s.a.strokeStyle = "#0b0b10"),
          s.a.strokeText(u, 0, 0),
          (s.a.fillStyle = bt(d)),
          s.a.fillText(u, 0, 0),
          (s.a.lineWidth = 2),
          (s.a.strokeStyle = "rgba(255,255,255,.7)"),
          s.a.strokeText(u, -2, -2),
          s.a.restore());
        for (let g = 0; g < 3; g++) {
          const y = p + (n() - 0.5) * h * 1.4,
            b = 10 + n() * 40;
          ((s.a.strokeStyle = bt(d)),
            (s.a.lineWidth = 3),
            (s.a.lineCap = "round"),
            s.a.beginPath(),
            s.a.moveTo(y, m + h * 0.3),
            s.a.lineTo(y, m + h * 0.3 + b),
            s.a.stroke(),
            s.a.beginPath(),
            s.a.arc(y, m + h * 0.3 + b, 3, 0, Math.PI * 2),
            (s.a.fillStyle = bt(d)),
            s.a.fill());
        }
      });
    }
    for (let r = 0; r < 70; r++) {
      const l = n() * ie,
        c = n() * ie,
        h = 1 + n() * 4;
      ((s.a.fillStyle = bt(i[r % i.length], 0.9)),
        ys(l, c, h, (d, u) => {
          (s.a.beginPath(), s.a.arc(d, u, h, 0, Math.PI * 2), s.a.fill());
        }));
    }
  },
  pepe(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = ls(17),
      r = s.a.createLinearGradient(0, 0, ie, ie);
    (r.addColorStop(0, bt(t)),
      r.addColorStop(0.5, bt(li(t, i, 0.5))),
      r.addColorStop(1, bt(t)),
      (s.a.fillStyle = r),
      s.a.fillRect(0, 0, ie, ie),
      (s.f.fillStyle = Ei(0.3)),
      s.f.fillRect(0, 0, ie, ie));
    for (let h = 0; h < ie; h += 12)
      for (let d = 0; d < ie; d += 12) {
        const u = 0.5 + 0.5 * Math.sin(((d + h) / ie) * Math.PI * 4);
        ((s.a.fillStyle = bt(li(i, n, 0.3), 0.22)),
          s.a.beginPath(),
          s.a.arc(d + (h % 24 ? 6 : 0), h, 1 + u * 3.2, 0, Math.PI * 2),
          s.a.fill());
      }
    const l = (h, d, u, f) => {
        const p = s.a;
        (p.save(),
          p.translate(h, d),
          p.rotate(f),
          p.scale(u, u),
          (p.lineWidth = 3),
          (p.strokeStyle = bt(o)),
          (p.fillStyle = bt(i)),
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
            (p.fillStyle = bt(o)),
            p.beginPath(),
            p.arc(m + 3, -12, 5.5, 0, Math.PI * 2),
            p.fill(),
            (p.fillStyle = bt(i)),
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
    for (const [h, d, u, f] of c) ys(h, d, 60 * u, (p, m) => l(p, m, u, f));
    for (let h = 0; h < 6; h++)
      Lr(
        s,
        h % 2 ? "FEELS GOOD" : "RARE",
        a() * ie,
        a() * ie,
        16,
        bt(n, 0.85),
        (a() - 0.5) * 0.5,
        "900",
      );
  },
  koi(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(81, 4, 3),
      r = yi(83, 6, 2);
    gs(s, 256, (h, d) => {
      const u = a(h, d),
        f = Math.pow(
          1 - Math.abs(Math.sin(r(h + u * 0.2, d) * 6 * Math.PI)),
          6,
        );
      return {
        c: li(li(t, i, d * 0.4 + u * 0.5), [200, 240, 255], f * 0.45),
        m: 0.6,
        s: f * 0.8,
      };
    });
    const l = ls(85),
      c = (h, d, u, f, p) => {
        const m = s.a,
          g = ls(p);
        (m.save(),
          m.translate(h, d),
          m.rotate(f),
          m.scale(u, u),
          (m.fillStyle = bt(n, 0.9)),
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
        const y = m.createLinearGradient(0, -18, 0, 18);
        (y.addColorStop(0, bt(o)),
          y.addColorStop(0.5, bt(o)),
          y.addColorStop(1, bt(Xi(o, 0.8))),
          (m.fillStyle = y),
          m.beginPath(),
          m.moveTo(-44, 0),
          m.bezierCurveTo(-20, -20, 30, -18, 44, 0),
          m.bezierCurveTo(30, 18, -20, 20, -44, 0),
          m.fill(),
          m.save(),
          m.clip(),
          (m.fillStyle = bt(n)));
        for (let b = 0; b < 4; b++)
          (m.beginPath(),
            m.ellipse(
              -30 + g() * 64,
              (g() - 0.5) * 24,
              8 + g() * 14,
              6 + g() * 9,
              g() * 3,
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
      const d = l() * ie,
        u = l() * ie,
        f = 22 + l() * 18,
        p = l() * 6;
      ys(d, u, f, (m, g) => {
        ((s.a.fillStyle = "rgba(70,150,80,.92)"),
          s.a.beginPath(),
          s.a.moveTo(m, g),
          s.a.arc(m, g, f, p, p + Math.PI * 1.8),
          s.a.closePath(),
          s.a.fill(),
          (s.a.strokeStyle = "rgba(160,220,140,.5)"),
          (s.a.lineWidth = 1.5),
          s.a.stroke());
      });
    }
    for (let h = 0; h < 9; h++) {
      const d = (h % 3) * 170 + 60 + l() * 60,
        u = Math.floor(h / 3) * 170 + 60 + l() * 60,
        f = 0.9 + l() * 0.5,
        p = l() * Math.PI * 2,
        m = 200 + h;
      ys(d, u, 80 * f, (g, y) => c(g, y, f, p, m));
    }
    ((s.a.strokeStyle = "rgba(220,245,255,.35)"), (s.a.lineWidth = 1.5));
    for (let h = 0; h < 8; h++) {
      const d = l() * ie,
        u = l() * ie;
      for (let f = 1; f < 4; f++)
        ys(d, u, f * 12, (p, m) => {
          (s.a.beginPath(),
            s.a.ellipse(p, m, f * 12, f * 7, 0, 0, Math.PI * 2),
            s.a.stroke());
        });
    }
  },
  casehardened(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(101, 3, 5),
      r = yi(103, 5, 3),
      l = yi(107, 8, 2);
    (gs(s, 256, (c, h) => {
      const d = a(c, h) * 0.8 + r(c, h) * 0.35 + (l(c, h) - 0.5) * 0.15,
        u = ja(
          [
            o,
            i,
            [176, 110, 48],
            [118, 62, 132],
            [52, 92, 196],
            t,
            [30, 70, 170],
          ],
          _o(0.25, 0.8, d),
        ),
        f = _o(0.66, 0.82, r(c + 0.3, h)) * 0.35;
      return { c: li(Xi(u, 1.15), [210, 214, 222], f), m: 1, s: 0.15 };
    }),
      Xa(s, 3, 5));
  },
  tiger(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(111, 4, 4),
      r = yi(113, 6, 3);
    gs(s, ie, (l, c) => {
      const h = a(l, c),
        d = r(l, c),
        f =
          Math.sin(
            (l * 7 + h * 1.6 + Math.sin(c * Math.PI * 2) * 0.25) * Math.PI * 2,
          ) >
            0.55 - d * 0.55 && d > 0.32,
        p = 0.5 + 0.5 * Math.sin((l * 2 + c * 3) * Math.PI * 2);
      return {
        c: f ? li(n, i, 0.12) : ja([i, t, o], 0.3 + p * 0.5 + (h - 0.5) * 0.4),
        m: f ? 0.55 : 1,
        s: f ? 0 : 0.35,
      };
    });
  },
  toxic(s, e) {
    const [t, i, n, o] = e.colors.map(ts);
    gs(s, ie, (h, d) => ({ c: ((h + d) * 8) % 1 < 0.5 ? i : t, m: 0.25 }));
    const a = yi(121, 4, 4),
      r = yi(127, 16, 2),
      l = s.a.getImageData(0, 0, ie, ie),
      c = s.f.getImageData(0, 0, ie, ie);
    for (let h = 0; h < ie; h++)
      for (let d = 0; d < ie; d++) {
        const u = d / ie,
          f = h / ie,
          p = a(u, f) + (r(u, (f * 0.25) % 1) - 0.5) * 0.7,
          m = (h * ie + d) * 4;
        if (p > 0.56) {
          const g = _o(0.56, 0.7, p),
            y = li(Xi(n, 0.55), n, g);
          ((l.data[m] = y[0]),
            (l.data[m + 1] = y[1]),
            (l.data[m + 2] = y[2]),
            (c.data[m] = 90),
            (c.data[m + 1] = 120 + g * 135),
            (c.data[m + 2] = 60));
        } else
          p > 0.53 &&
            ((l.data[m] = o[0]),
            (l.data[m + 1] = o[1] + 30),
            (l.data[m + 2] = o[2]));
      }
    (s.a.putImageData(l, 0, 0),
      s.f.putImageData(c, 0, 0),
      Lr(s, "☣ BIOHAZARD", 140, 470, 18, "rgba(10,10,10,.85)", 0, "900"),
      Xa(s, 4, 10));
  },
  frost(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(131, 4, 4);
    gs(s, 256, (c, h) => ({
      c: li(t, o, a(c, h) * 0.9),
      m: 0.7,
      s: a(c, h) * 0.3,
    }));
    const r = ls(133),
      l = (c, h, d, u, f, p) => {
        if (p <= 0 || u < 3) return;
        const m = c + Math.cos(d) * u,
          g = h + Math.sin(d) * u;
        ys(c, h, u + 4, (y, b) => {
          const S = y - c,
            M = b - h;
          $2(s, (E, A) => {
            ((E.strokeStyle =
              A === "a"
                ? bt(li(i, n, p / 5), 0.9)
                : Ei(0.9, 0.55 + p * 0.08, 0.9)),
              (E.lineWidth = f),
              (E.lineCap = "round"),
              E.beginPath(),
              E.moveTo(c + S, h + M),
              E.lineTo(m + S, g + M),
              E.stroke());
          });
        });
        for (const y of [-1, 1])
          for (let b = 1; b <= 3; b++)
            l(
              c + ((m - c) * b) / 4,
              h + ((g - h) * b) / 4,
              d + y * (Math.PI / 3),
              u * (0.42 - b * 0.06),
              Math.max(0.6, f * 0.6),
              p - 1,
            );
        l(m, g, d + (r() - 0.5) * 0.3, u * 0.7, Math.max(0.6, f * 0.8), p - 1);
      };
    for (let c = 0; c < 7; c++) {
      const h = r() * ie,
        d = r() * ie;
      for (let u = 0; u < 6; u++)
        l(h, d, (u * Math.PI) / 3 + r() * 0.2, 30 + r() * 26, 2.6, 4);
    }
    for (let c = 0; c < 400; c++) {
      const h = r() * ie,
        d = r() * ie;
      ((s.a.fillStyle = bt(n, 0.25 + r() * 0.5)), s.a.fillRect(h, d, 1.5, 1.5));
    }
  },
  circuit(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = ls(141),
      r = 16,
      l = ie / r;
    L_(s, bt(t), Ei(0.45));
    const c = yi(143, 32, 2);
    gs(
      s,
      256,
      (u, f) => ({ c: Xi(li(t, i, 0.35), 0.8 + c(u, f) * 0.45), m: 0.45 }),
      0.7,
    );
    const h = new Set(),
      d = (u, f) => {
        let p = Math.floor(a() * l),
          m = Math.floor(a() * l),
          g = Math.floor(a() * 4);
        const y = [[p, m]];
        for (let b = 0; b < 18 + a() * 20; b++) {
          a() < 0.25 && (g = (g + (a() < 0.5 ? 1 : 3)) % 4);
          const S = p + [1, 0, -1, 0][g],
            M = m + [0, 1, 0, -1][g],
            E = `${(S + l) % l},${(M + l) % l}`;
          if (h.has(E)) break;
          (h.add(E), (p = S), (m = M), y.push([p, m]));
        }
        if (!(y.length < 3))
          for (const [b, S] of [
            [-ie, 0],
            [0, 0],
            [ie, 0],
            [0, -ie],
            [0, ie],
            [-ie, -ie],
            [ie, ie],
            [-ie, ie],
            [ie, -ie],
          ])
            $2(s, (M, E) => {
              ((M.strokeStyle = E === "a" ? bt(u) : Ei(0.8, f, 0)),
                (M.lineWidth = 4),
                (M.lineJoin = "round"),
                M.beginPath(),
                y.forEach(([A, T], x) => {
                  const R = A * r + b,
                    _ = T * r + S;
                  x ? M.lineTo(R, _) : M.moveTo(R, _);
                }),
                M.stroke());
              for (const [A, T] of [y[0], y[y.length - 1]])
                ((M.fillStyle = E === "a" ? bt(u) : Ei(0.9, f, 0)),
                  M.beginPath(),
                  M.arc(A * r + b, T * r + S, 5, 0, Math.PI * 2),
                  M.fill(),
                  E === "a" &&
                    ((M.fillStyle = bt(t)),
                    M.beginPath(),
                    M.arc(A * r + b, T * r + S, 2, 0, Math.PI * 2),
                    M.fill()));
            });
      };
    for (let u = 0; u < 110; u++)
      d(u % 3 === 0 ? o : n, u % 3 === 0 ? 0.75 : 1);
    for (let u = 0; u < 6; u++) {
      const f = Math.floor(a() * l) * r,
        p = Math.floor(a() * l) * r,
        m = r * (2 + Math.floor(a() * 3)),
        g = r * 2;
      ys(f + m / 2, p + g / 2, m, (y, b) => {
        const S = y - m / 2,
          M = b - g / 2;
        ((s.a.fillStyle = "#06080e"),
          s.a.fillRect(S, M, m, g),
          (s.a.strokeStyle = "rgba(255,255,255,.25)"),
          s.a.strokeRect(S + 0.5, M + 0.5, m - 1, g - 1),
          (s.a.fillStyle = "#9aa4b0"));
        for (let E = 4; E < m - 2; E += 6)
          (s.a.fillRect(S + E, M - 3, 2, 3), s.a.fillRect(S + E, M + g, 2, 3));
        ((s.f.fillStyle = Ei(0.6, 0, 0)),
          s.f.fillRect(S, M, m, g),
          (s.a.fillStyle = "rgba(255,255,255,.5)"),
          (s.a.font = "700 8px monospace"),
          s.a.fillText("VR-" + (100 + u * 37), S + 4, M + g / 2 + 3));
      });
    }
  },
  aurora(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(151, 3, 4),
      r = yi(153, 48, 2),
      l = yi(157, 2, 3);
    gs(s, ie, (h, d) => {
      let u = 0;
      for (const [m, g] of [
        [1, 0],
        [2, 1.7],
      ]) {
        const y =
            0.5 + 0.3 * Math.sin((h * m + a(h, d) * 0.6) * Math.PI * 2 + g),
          b = Math.abs(d - y);
        u += Math.exp(-b * b * 90) * (0.45 + r(h, d * 0.08) * 0.9);
      }
      u = Hh(u);
      const f = li(n, o, _o(0.3, 0.8, l(h, d))),
        p = li(t, i, 0.4 + a(h, d) * 0.6);
      return { c: li(p, Xi(f, 1.15), u), m: 0.5, g: u, s: l(h, d) };
    });
    const c = ls(155);
    for (let h = 0; h < 260; h++) {
      const d = c() * ie,
        u = c() * ie,
        f = c() < 0.1 ? 2 : 1;
      ((s.a.fillStyle = `rgba(255,255,255,${0.4 + c() * 0.6})`),
        s.a.fillRect(d, u, f, f));
    }
  },
  glitch(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = ls(161);
    L_(s, bt(t), Ei(0.35));
    for (let r = 0; r < ie; r += 4)
      ((s.a.fillStyle = "rgba(255,255,255,.04)"), s.a.fillRect(0, r, ie, 1));
    for (let r = 0; r < 90; r++) {
      const l = 8 + a() * (a() < 0.2 ? 220 : 60),
        c = 2 + a() * (a() < 0.3 ? 30 : 8),
        h = a() * ie,
        d = a() * ie,
        u = [i, n, o, Xi(n, 0.4)][Math.floor(a() * 4)],
        f = u === o ? 0.5 : u === i || u === n ? 0.9 : 0.2;
      ys(h + l / 2, d + c / 2, l, (p, m) => {
        ((s.a.fillStyle = bt(i, 0.55)),
          s.a.fillRect(p - l / 2 - 3, m - c / 2, l, c),
          (s.a.fillStyle = bt(n, 0.55)),
          s.a.fillRect(p - l / 2 + 3, m - c / 2, l, c),
          (s.a.fillStyle = bt(u)),
          s.a.fillRect(p - l / 2, m - c / 2, l, c),
          (s.f.fillStyle = Ei(0.4, f, a())),
          s.f.fillRect(p - l / 2 - 3, m - c / 2, l + 6, c));
      });
    }
    for (let r = 0; r < 10; r++)
      Lr(
        s,
        ["ERR 0x00F", "SEGFAULT", "/// NULL", "RGB_SPLIT", "404", "GLITCH.EXE"][
          r % 6
        ],
        a() * ie,
        a() * ie,
        12 + a() * 10,
        bt(r % 2 ? n : i, 0.9),
        0,
        "700",
      );
    for (let r = 0; r < 300; r++)
      ((s.a.fillStyle = bt([i, n, o][r % 3], 0.8)),
        s.a.fillRect(
          Math.floor(a() * 128) * 4,
          Math.floor(a() * 128) * 4,
          4,
          4,
        ));
  },
  crystal(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = ls(171),
      r = Array.from({ length: 34 }, () => [a(), a()]),
      l = r.map(() => a()),
      c = _b(r);
    gs(s, ie, (h, d) => {
      const { id: u, d1: f, d2: p } = c(h, d),
        m = p - f,
        g = l[u],
        y = h - r[u][0],
        b = d - r[u][1],
        S = (y * Math.cos(g * 6) + b * Math.sin(g * 6)) * 6;
      let M = ja([t, i, n, o], Hh(g * 0.8 + S * 0.3 + 0.1));
      return (
        m < 0.006
          ? (M = li(M, [255, 255, 255], 0.85))
          : m < 0.014 && (M = li(M, n, 0.35)),
        { c: M, m: 0.85, g: m < 0.006 ? 0.35 : 0, s: 0.55 + g * 0.45 }
      );
    });
  },
  synth(s, e) {
    const [t, i, n, o] = e.colors.map(ts);
    gs(s, ie, (r, l) => {
      if (l < 0.55) {
        let g = ja([t, Xi(i, 0.6), n], _o(0, 0.55, l));
        const y = Math.abs(((r + 0.5) % 1) - 0.5) * 2.2,
          b = (l - 0.38) / 0.2,
          S = Math.hypot(y, b);
        let M = 0;
        return (
          S < 1 &&
            !(l > 0.4 && Math.sin(l * 160) > 0.4 - (l - 0.4) * 6) &&
            ((g = ja([[255, 236, 110], n, i], Hh(b * 0.5 + 0.5))), (M = 0.65)),
          { c: g, m: 0.4, g: M, s: 0 }
        );
      }
      const c = (l - 0.55) / 0.45,
        h = 1 / (c + 0.08),
        d = ((r - 0.5) * h * 2.2 + 100) % 1,
        u = (h * 0.8) % 1,
        p =
          Math.min(Math.abs(d - 0.5), Math.abs(u - 0.5)) > 0.5 - 0.04 * (1 + c),
        m = li([24, 6, 48], t, c);
      return { c: p ? li(i, o, c) : m, m: 0.4, g: p ? 1 : 0, s: c };
    });
    const a = ls(181);
    for (let r = 0; r < 90; r++)
      ((s.a.fillStyle = "rgba(255,255,255,.8)"),
        s.a.fillRect(a() * ie, a() * ie * 0.35, 1.5, 1.5));
  },
  storm(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(191, 3, 5);
    gs(s, 256, (c, h) => {
      const d = a(c, h);
      return {
        c: ja([t, i, Xi(i, 1.6), [150, 170, 220]], _o(0.25, 0.85, d)),
        m: 0.55,
      };
    });
    const r = ls(193),
      l = (c, h, d, u, f, p, m) => {
        const g = [[c, h]];
        for (let y = 0; y < 12; y++)
          ((d += (r() - 0.5) * 0.9),
            (c += (Math.cos(d) * u) / 12),
            (h += (Math.sin(d) * u) / 12),
            g.push([c, h]));
        for (const [y, b] of [
          [-ie, 0],
          [0, 0],
          [ie, 0],
          [0, -ie],
          [0, ie],
        ]) {
          const S = (M) => {
            (M.beginPath(),
              g.forEach(([E, A], T) =>
                T ? M.lineTo(E + y, A + b) : M.moveTo(E + y, A + b),
              ));
          };
          ((s.a.lineJoin = s.f.lineJoin = "round"),
            S(s.a),
            (s.a.strokeStyle = bt(n, 0.35)),
            (s.a.lineWidth = f * 4),
            s.a.stroke(),
            S(s.a),
            (s.a.strokeStyle = bt(o)),
            (s.a.lineWidth = f),
            s.a.stroke(),
            S(s.f),
            (s.f.strokeStyle = Ei(0.7, 0.55, m)),
            (s.f.lineWidth = f * 4),
            s.f.stroke(),
            S(s.f),
            (s.f.strokeStyle = Ei(0.9, 1, m)),
            (s.f.lineWidth = f * 1.4),
            s.f.stroke());
        }
        if (p > 0)
          for (let y = 0; y < 2; y++) {
            const b = g[3 + Math.floor(r() * 7)];
            l(b[0], b[1], d + (r() - 0.5) * 2, u * 0.45, f * 0.6, p - 1, m);
          }
      };
    for (let c = 0; c < 10; c++)
      l(r() * ie, r() * ie, r() * Math.PI * 2, 200 + r() * 140, 3.2, 2, c / 10);
  },
  sakura(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(201, 3, 3),
      r = ls(203);
    gs(s, 256, (c, h) => ({ c: li(t, i, a(c, h) * 0.7), m: 0.65, s: 0 }));
    const l = (c, h, d, u, f, p) => {
      const m = [[c, h]];
      let g = c,
        y = h;
      for (let b = 0; b < 10; b++)
        ((d += (r() - 0.5) * 0.35),
          (g += (Math.cos(d) * u) / 10),
          (y += (Math.sin(d) * u) / 10),
          m.push([g, y]));
      for (const [b, S] of [
        [-ie, 0],
        [0, 0],
        [ie, 0],
        [0, -ie],
        [0, ie],
      ]) {
        const M = m.map(([E, A]) => [E + b, A + S]);
        (Xn(s.a, M, f, f * 0.35, bt(o)),
          Xn(s.f, M, f, f * 0.35, Ei(1, 0.15, 0.7)));
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
          E = r() * 6;
        ys(S[0], S[1], M, (A, T) => {
          (I_(s.a, A, T, M, E, bt(n), bt(o)),
            I_(s.f, A, T, M, E, Ei(0.5, 0.35, 0.9), Ei(1, 0.4, 1)));
        });
      }
    };
    for (let c = 0; c < 5; c++)
      l(r() * ie, r() * ie, r() * Math.PI * 2, 260, 13, 2);
    for (let c = 0; c < 60; c++) {
      const h = r() * ie,
        d = r() * ie,
        u = 2 + r() * 3,
        f = r() * 6;
      ys(h, d, u * 2, (p, m) => {
        ((s.a.fillStyle = bt(li(n, [255, 255, 255], r() * 0.4), 0.9)),
          s.a.beginPath(),
          s.a.ellipse(p, m, u * 1.6, u, f, 0, Math.PI * 2),
          s.a.fill(),
          (s.f.fillStyle = Ei(0.5, 0.25, 0.8)),
          s.f.beginPath(),
          s.f.ellipse(p, m, u * 1.6, u, f, 0, Math.PI * 2),
          s.f.fill());
      });
    }
  },
  fade(s, e) {
    const t = e.colors.map(ts);
    (gs(s, 256, (i, n) => {
      const o = 0.5 - 0.5 * Math.cos((i * 0.5 + n * 0.5) * Math.PI * 2);
      return { c: ja(t, o), m: 0.95, s: 0.4 + o * 0.4 };
    }),
      Xa(s, 2, 4));
  },
  dragon(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(211, 3, 5),
      r = yi(213, 5, 4);
    gs(s, 256, (h, d) => {
      const u = a(h, d),
        f = Math.abs(Math.sin((h * 3 + u * 4 + r(h, d)) * Math.PI)),
        p = li(li(t, i, u * 0.9), o, Math.pow(1 - f, 14) * 0.8);
      return { c: li(p, li(t, i, u), 0.35), m: 0.85, s: 0.35 };
    });
    const l = (h, d) => [
      h * ie,
      ((d / (Math.PI * 2) + 0.16 * Math.sin(h * Math.PI * 4 + d * 3)) * ie) %
        ie,
    ];
    for (const [h, d] of [
      [0, 42],
      [(Math.PI * 2) / 3, 34],
      [(Math.PI * 4) / 3, 28],
    ])
      for (let u = 0; u <= 220; u++) {
        const f = u / 220,
          [p, m] = l(f, h),
          [g, y] = l(f + 0.01, h),
          b = Math.atan2(y - m, g - p),
          S = d * (0.85 + 0.15 * Math.sin(f * 40));
        ys(p, m, S, (M, E) => {
          const A = s.a.createRadialGradient(M - 3, E - 3, 1, M, E, S * 0.6);
          (A.addColorStop(0, "#fff3c0"),
            A.addColorStop(0.5, bt(n)),
            A.addColorStop(1, bt(Xi(n, 0.45))),
            (s.a.fillStyle = A),
            s.a.beginPath(),
            s.a.ellipse(M, E, S * 0.6, S * 0.5, b, 0, Math.PI * 2),
            s.a.fill(),
            (s.a.strokeStyle = bt(Xi(n, 0.35))),
            (s.a.lineWidth = 1.2),
            s.a.beginPath(),
            s.a.arc(M, E, S * 0.45, b + 0.6, b + Math.PI - 0.6),
            s.a.stroke(),
            (s.f.fillStyle = Ei(1, 0.08, 0.8)),
            s.f.beginPath(),
            s.f.ellipse(M, E, S * 0.6, S * 0.5, b, 0, Math.PI * 2),
            s.f.fill(),
            u % 10 === 0 &&
              ((s.a.fillStyle = bt(Xi(n, 0.8))),
              s.a.beginPath(),
              s.a.moveTo(
                M + Math.cos(b - Math.PI / 2) * S * 0.4,
                E + Math.sin(b - Math.PI / 2) * S * 0.4,
              ),
              s.a.lineTo(
                M + Math.cos(b - Math.PI / 2) * S * 1.05 + Math.cos(b) * 6,
                E + Math.sin(b - Math.PI / 2) * S * 1.05 + Math.sin(b) * 6,
              ),
              s.a.lineTo(M + Math.cos(b) * 10, E + Math.sin(b) * 10),
              s.a.fill()));
        });
      }
    const c = ls(217);
    for (let h = 0; h < 14; h++) {
      const d = c() * ie,
        u = c() * ie,
        f = 4 + c() * 6;
      ys(d, u, f, (p, m) => {
        const g = s.a.createRadialGradient(
          p - f * 0.3,
          m - f * 0.3,
          0,
          p,
          m,
          f,
        );
        (g.addColorStop(0, "#ffffff"),
          g.addColorStop(1, bt(o)),
          (s.a.fillStyle = g),
          s.a.beginPath(),
          s.a.arc(p, m, f, 0, Math.PI * 2),
          s.a.fill(),
          (s.f.fillStyle = Ei(1, 0.3, 1)),
          s.f.beginPath(),
          s.f.arc(p, m, f, 0, Math.PI * 2),
          s.f.fill());
      });
    }
  },
  damascus(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(221, 4, 5),
      r = yi(223, 2, 3);
    gs(s, ie, (l, c) => {
      const h = a(l, c),
        d =
          Math.sin(
            (c * 22 + h * 9 + Math.sin(l * Math.PI * 2) * 1.5) * Math.PI * 2,
          ) *
            0.5 +
          0.5;
      let u = li(t, i, Math.pow(d, 1.6));
      const f = r(l, c),
        p = ja([[255, 255, 255], n, o, [130, 70, 140], [60, 90, 170]], f);
      return (
        (u = li(
          u,
          [(u[0] * p[0]) / 200, (u[1] * p[1]) / 200, (u[2] * p[2]) / 200],
          0.55,
        )),
        { c: u, m: 1, s: 0.1 }
      );
    });
  },
  web(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(231, 4, 4);
    gs(s, 256, (l, c) => ({ c: li(t, i, a(l, c) * 0.8), m: 0.5 }));
    const r = ls(233);
    for (let l = 0; l < 4; l++) {
      const c = r() * ie,
        h = r() * ie,
        d = 9 + Math.floor(r() * 4),
        u = 150 + r() * 90,
        f = Array.from(
          { length: d },
          (p, m) => (m / d) * Math.PI * 2 + (r() - 0.5) * 0.3,
        );
      ys(c, h, u, (p, m) => {
        $2(s, (g, y) => {
          ((g.strokeStyle = y === "a" ? bt(n, 0.9) : Ei(0.6, 0.9, 0)),
            (g.lineWidth = 1.6));
          for (const b of f)
            (g.beginPath(),
              g.moveTo(p, m),
              g.lineTo(p + Math.cos(b) * u, m + Math.sin(b) * u),
              g.stroke());
          for (let b = 14; b < u; b += 13 + b * 0.08)
            (g.beginPath(),
              f.forEach((S, M) => {
                const E = f[(M + 1) % d] + (M === d - 1 ? Math.PI * 2 : 0),
                  A = (S + E) / 2,
                  T = b * 0.9,
                  x = p + Math.cos(S) * b,
                  R = m + Math.sin(S) * b,
                  _ = p + Math.cos(E) * b,
                  C = m + Math.sin(E) * b;
                (M || g.moveTo(x, R),
                  g.quadraticCurveTo(
                    p + Math.cos(A) * T,
                    m + Math.sin(A) * T,
                    _,
                    C,
                  ));
              }),
              g.stroke());
        });
      });
    }
    for (let l = 0; l < 26; l++) {
      const c = r() * ie,
        h = r() * ie,
        d = 2 + r() * 3;
      ys(c, h, d, (u, f) => {
        ((s.a.fillStyle = bt(o)),
          s.a.beginPath(),
          s.a.arc(u, f, d, 0, Math.PI * 2),
          s.a.fill(),
          (s.f.fillStyle = Ei(0.8, 1, 0)),
          s.f.beginPath(),
          s.f.arc(u, f, d, 0, Math.PI * 2),
          s.f.fill());
      });
    }
  },
  ronin(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(241, 3, 3),
      r = ls(243);
    gs(s, 256, (h, d) => ({ c: li(t, i, a(h, d) * 0.9), m: 0.7 }));
    for (const [h, d, u] of [
      [150, 190, 120],
      [400, 400, 70],
    ])
      ys(h, d, u + 8, (f, p) => {
        ((s.a.fillStyle = bt(n)), s.a.beginPath());
        for (let m = 0; m <= 90; m++) {
          const g = (m / 90) * Math.PI * 2,
            y = u + (r() - 0.5) * 5;
          s.a.lineTo(f + Math.cos(g) * y, p + Math.sin(g) * y);
        }
        (s.a.fill(),
          (s.f.fillStyle = Ei(0.45, 0.35, 0)),
          s.f.beginPath(),
          s.f.arc(f, p, u, 0, Math.PI * 2),
          s.f.fill());
      });
    const l = yi(245, 6, 3),
      c = s.a.getImageData(0, 0, ie, ie);
    for (let h = 0; h < ie; h++)
      for (let d = 0; d < ie; d++) {
        const u = 0.62 + l(d / ie, 0) * 0.2;
        if (h / ie > u) {
          const f = (h * ie + d) * 4,
            p = (h / ie - u) * 2;
          ((c.data[f] = 30 - p * 20),
            (c.data[f + 1] = 28 - p * 20),
            (c.data[f + 2] = 34 - p * 20));
        }
      }
    s.a.putImageData(c, 0, 0);
    for (let h = 0; h < 26; h++) {
      const d = [];
      let u = r() * ie,
        f = r() * ie,
        p = r() * Math.PI * 2;
      for (let m = 0; m < 10; m++)
        (d.push([u, f]),
          (p += (r() - 0.5) * 0.9),
          (u += Math.cos(p) * 12),
          (f += Math.sin(p) * 12));
      for (const [m, g] of [
        [-ie, 0],
        [0, 0],
        [ie, 0],
        [0, -ie],
        [0, ie],
      ]) {
        const y = d.map(([b, S]) => [b + m, S + g]);
        (Xn(s.a, y, 11, 1.5, bt(o)), Xn(s.f, y, 11, 1.5, Ei(1, 0.2, 0.9)));
      }
    }
    for (let h = 0; h < 140; h++) {
      s.a.fillStyle = bt(o, 0.8);
      const d = r() * ie,
        u = r() * ie;
      (s.a.fillRect(d, u, 2, 2),
        (s.f.fillStyle = Ei(1, 0, 1)),
        s.f.fillRect(d, u, 2, 2));
    }
    for (let h = 0; h < 18; h++) {
      const d = r() * ie,
        u = r() * ie,
        f = 2 + r() * 6;
      ys(d, u, f, (p, m) => {
        ((s.a.fillStyle = bt(n, 0.9)),
          s.a.beginPath(),
          s.a.arc(p, m, f, 0, Math.PI * 2),
          s.a.fill());
      });
    }
  },
  lava(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = ls(251),
      r = Array.from({ length: 46 }, () => [a(), a()]),
      l = _b(r),
      c = yi(253, 8, 3);
    gs(s, ie, (h, d) => {
      const { d1: u, d2: f, id: p } = l(h, d),
        m = f - u,
        g = c(h, d),
        y = 1 - _o(0.002, 0.018 + g * 0.012, m),
        b = li(t, i, Hh(u * 6 + g * 0.4)),
        S = ja([Xi(n, 0.6), n, o], y);
      return {
        c: y > 0.05 ? li(b, S, y) : Xi(b, 0.9 + (p % 4) * 0.05),
        m: y > 0.1 ? 0.2 : 0.45,
        g: y,
        s: 0,
      };
    });
  },
  doppler(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(261, 2, 5),
      r = yi(263, 3, 4);
    gs(s, 256, (c, h) => {
      const d = a(c, h),
        u = r(c + d * 0.3, h + d * 0.3),
        f = Math.sin((u * 3 + d) * Math.PI * 2) * 0.5 + 0.5,
        p = ja([t, i, Xi(i, 1.3), n, t], f);
      return {
        c: li(p, o, Math.pow(1 - Math.abs(f - 0.5) * 2, 18) * 0.5),
        m: 0.95,
        s: 0,
      };
    });
    const l = ls(265);
    for (let c = 0; c < 260; c++) {
      const h = l() * ie,
        d = l() * ie,
        u = l() < 0.08 ? 2.5 : 1;
      ((s.a.fillStyle = `rgba(255,255,255,${0.5 + l() * 0.5})`),
        s.a.fillRect(h, d, u, u),
        (s.f.fillStyle = Ei(1, 0.6, 1)),
        s.f.fillRect(h - 1, d - 1, u + 2, u + 2));
    }
  },
  space(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(271, 2, 5),
      r = yi(273, 4, 4);
    gs(s, 256, (c, h) => {
      const d = a(c, h),
        u = r(c + d * 0.2, h),
        f = _o(0.35, 0.65, d),
        p = _o(0.4, 0.75, d * 0.6 + u * 0.55);
      return {
        c: li(li(t, Xi(i, 2.6), f), Xi(li(n, o, u), 1.15), p),
        m: 0.6,
        s: 0,
      };
    });
    const l = ls(275);
    ys(330, 230, 120, (c, h) => {
      const d = s.a.createRadialGradient(c, h, 18, c, h, 110);
      (d.addColorStop(0, "rgba(0,0,0,1)"),
        d.addColorStop(0.25, "rgba(0,0,0,1)"),
        d.addColorStop(0.33, bt(o, 0.9)),
        d.addColorStop(0.42, bt(n, 0.6)),
        d.addColorStop(1, "rgba(0,0,0,0)"),
        (s.a.fillStyle = d),
        s.a.fillRect(c - 120, h - 120, 240, 240),
        s.a.save(),
        s.a.translate(c, h),
        s.a.scale(1, 0.32),
        (s.a.strokeStyle = "rgba(255,240,220,.85)"),
        (s.a.lineWidth = 7),
        s.a.beginPath(),
        s.a.arc(0, 0, 70, 0, Math.PI * 2),
        s.a.stroke(),
        s.a.restore(),
        s.f.save(),
        s.f.translate(c, h),
        s.f.scale(1, 0.32),
        (s.f.strokeStyle = Ei(0.6, 0.9, 0.4)),
        (s.f.lineWidth = 9),
        s.f.beginPath(),
        s.f.arc(0, 0, 70, 0, Math.PI * 2),
        s.f.stroke(),
        s.f.restore());
    });
    for (let c = 0; c < 420; c++) {
      const h = l() * ie,
        d = l() * ie,
        u = l() < 0.05,
        f = u ? 2.5 : l() < 0.3 ? 1.5 : 1;
      ((s.a.fillStyle = bt(
        li([255, 255, 255], l() < 0.5 ? o : n, l() * 0.4),
        0.5 + l() * 0.5,
      )),
        s.a.fillRect(h, d, f, f),
        (s.f.fillStyle = Ei(0.6, u ? 0.8 : 0.3, 1)),
        s.f.fillRect(h - 0.5, d - 0.5, f + 1, f + 1),
        u &&
          ys(h, d, 8, (p, m) => {
            ((s.a.fillStyle = "rgba(255,255,255,.55)"),
              s.a.fillRect(p - 6, m + 0.7, 13, 1),
              s.a.fillRect(p + 0.7, m - 6, 1, 13));
          }));
    }
  },
  phoenix(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(311, 5, 4),
      r = yi(313, 3, 3),
      l = ls(317);
    gs(s, 256, (h, d) => {
      const u = a(h, d),
        f = r(h + u * 0.2, d),
        p = Math.pow(1 - Math.abs(u - 0.5) * 2, 14);
      return {
        c: li(li(t, i, _o(0.3, 0.8, f)), n, p * 0.7),
        m: 0.35 + p * 0.3,
        g: p * 0.55 + _o(0.62, 0.9, f) * 0.25,
        s: d,
      };
    });
    const c = (h, d, u, f, p) => {
      const m = [];
      let g = h,
        y = d,
        b = f;
      for (let S = 0; S <= 16; S++)
        (m.push([g, y]),
          (b += 0.045),
          (g += (Math.cos(b) * u) / 16),
          (y += (Math.sin(b) * u) / 16));
      for (const [S, M] of [
        [-ie, 0],
        [0, 0],
        [ie, 0],
        [0, -ie],
        [0, ie],
        [ie, ie],
        [-ie, -ie],
        [ie, -ie],
        [-ie, ie],
      ]) {
        const E = m.map(([A, T]) => [A + S, T + M]);
        if (
          !E.every(([A, T]) => A < -60 || A > ie + 60 || T < -60 || T > ie + 60)
        ) {
          for (let A = 1; A < E.length - 1; A++) {
            const T = A / (E.length - 1),
              [x, R] = E[A],
              [_, C] = E[A + 1],
              P = Math.atan2(C - R, _ - x),
              O = p * Math.sin(Math.PI * Math.min(1, T * 1.2)) + 2;
            for (const B of [-1, 1]) {
              const H = P + B * (1.05 - T * 0.35),
                D = x + Math.cos(H) * O,
                U = R + Math.sin(H) * O,
                W = s.a.createLinearGradient(x, R, D, U);
              (W.addColorStop(0, bt(o, 0.95)),
                W.addColorStop(0.45, bt(n, 0.9)),
                W.addColorStop(1, bt(i, 0)),
                (s.a.strokeStyle = W),
                (s.a.lineWidth = 3.2),
                (s.a.lineCap = "round"),
                s.a.beginPath(),
                s.a.moveTo(x, R),
                s.a.quadraticCurveTo(
                  x + Math.cos(H - B * 0.4) * O * 0.6,
                  R + Math.sin(H - B * 0.4) * O * 0.6,
                  D,
                  U,
                ),
                s.a.stroke(),
                (s.f.strokeStyle = Ei(
                  0.75,
                  0.55 * (1 - T * 0.4),
                  0.5 + 0.5 * T,
                )),
                (s.f.lineWidth = 3.2),
                (s.f.lineCap = "round"),
                s.f.beginPath(),
                s.f.moveTo(x, R),
                s.f.lineTo(D, U),
                s.f.stroke());
            }
          }
          (Xn(s.a, E, 3.4, 0.8, bt(li(o, [255, 255, 235], 0.5))),
            Xn(s.f, E, 3.4, 0.8, Ei(1, 0.95, 1)));
        }
      }
    };
    for (let h = 0; h < 34; h++)
      c(
        l() * ie,
        l() * ie,
        70 + l() * 80,
        -Math.PI / 2 - 0.5 + (l() - 0.5) * 0.7,
        14 + l() * 12,
      );
    ys(256, 270, 150, (h, d) => {
      for (const u of [-1, 1])
        for (let f = 0; f < 5; f++) {
          const p = -Math.PI / 2 + u * (0.35 + f * 0.2),
            m = 120 - f * 14,
            g = [];
          for (let y = 0; y <= 12; y++) {
            const b = y / 12,
              S = p + u * b * 0.55;
            g.push([
              h + u * 14 + Math.cos(S) * m * b * (u > 0, 1),
              d - 10 + Math.sin(S) * m * b,
            ]);
          }
          (Xn(s.a, g, 9 - f, 1.5, bt(f % 2 ? n : o, 0.95)),
            Xn(s.f, g, 9 - f, 1.5, Ei(1, 0.9, 0.8)));
        }
      ((s.a.fillStyle = bt(o)),
        s.a.beginPath(),
        s.a.ellipse(h, d + 10, 11, 30, 0, 0, Math.PI * 2),
        s.a.fill(),
        (s.f.fillStyle = Ei(1, 1, 0.7)),
        s.f.beginPath(),
        s.f.ellipse(h, d + 10, 11, 30, 0, 0, Math.PI * 2),
        s.f.fill(),
        s.a.beginPath(),
        s.a.arc(h, d - 28, 9, 0, Math.PI * 2),
        s.a.fill());
      for (let u = 0; u < 3; u++) {
        const f = [];
        for (let p = 0; p <= 10; p++) {
          const m = p / 10;
          f.push([
            h + (u - 1) * 10 * m + Math.sin(m * 6 + u) * 6,
            d + 38 + m * 90,
          ]);
        }
        (Xn(s.a, f, 7, 1, bt(u === 1 ? o : n, 0.95)),
          Xn(s.f, f, 7, 1, Ei(1, 0.85, 0.9)));
      }
    });
    for (let h = 0; h < 160; h++) {
      const d = l() * ie,
        u = l() * ie,
        f = l() < 0.15 ? 2.4 : 1.2;
      ((s.a.fillStyle = bt(li(n, o, l()), 0.9)),
        s.a.fillRect(d, u, f, f),
        (s.f.fillStyle = Ei(0.6, 1, l())),
        s.f.fillRect(d - 0.5, u - 0.5, f + 1, f + 1));
    }
    Xa(s, 319, 6);
  },
  runes(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(331, 4, 4),
      r = ls(337),
      l = yi(333, 2, 5);
    (gs(s, 256, (d, u) => {
      const f = a(d, u),
        p = l(d + f * 0.3, u),
        m = _o(0.45, 0.8, p);
      return {
        c: li(li(t, Xi(i, 1.6), _o(0.3, 0.75, f)), Xi(o, 0.38), m * 0.7),
        m: 0.75 + f * 0.2,
        g: m * 0.12,
        s: (d + u) * 0.5,
      };
    }),
      (s.a.strokeStyle = bt(li(i, n, 0.25), 0.28)),
      (s.a.lineWidth = 0.8));
    for (let d = 0; d < 18; d++)
      for (let u = 0; u < 16; u++) {
        const f = u * 32 + (d % 2) * 16,
          p = d * 28.45;
        s.a.beginPath();
        for (let m = 0; m < 7; m++) {
          const g = Math.PI / 6 + (m * Math.PI) / 3,
            y = f + Math.cos(g) * 16.5,
            b = p + Math.sin(g) * 16.5;
          m ? s.a.lineTo(y, b) : s.a.moveTo(y, b);
        }
        s.a.stroke();
      }
    const c = (d, u, f, p, m) => {
        const g = ls(m);
        d.beginPath();
        const y = () => [
          u + (Math.floor(g() * 3) - 1) * p,
          f + (Math.floor(g() * 3) - 1) * p * 1.3,
        ];
        for (let b = 0; b < 3 + Math.floor(g() * 2); b++) {
          const [S, M] = y(),
            [E, A] = y();
          (d.moveTo(S, M), d.lineTo(E, A));
        }
        (g() < 0.4 &&
          (d.moveTo(u + p * 0.5, f), d.arc(u, f, p * 0.5, 0, Math.PI * 2)),
          d.stroke());
      },
      h = (d, u, f, p) =>
        ys(d, u, f + 10, (m, g) => {
          for (const [y, b] of [
            [s.a, "a"],
            [s.f, "f"],
          ]) {
            (y.save(), (y.lineCap = "round"));
            const S = (E, A = 1) =>
              b === "a" ? bt(li(n, o, E), A) : Ei(0.9, 1, (p + E * 0.25) % 1);
            ((y.strokeStyle = S(0)),
              (y.lineWidth = 2.4),
              y.beginPath(),
              y.arc(m, g, f, 0, Math.PI * 2),
              y.stroke(),
              (y.lineWidth = 1.2),
              y.beginPath(),
              y.arc(m, g, f * 0.82, 0, Math.PI * 2),
              y.stroke(),
              (y.strokeStyle = S(0.6)),
              y.beginPath());
            for (let E = 0; E < 7; E++) {
              const A = -Math.PI / 2 + (E * Math.PI * 4) / 6,
                T = m + Math.cos(A) * f * 0.7,
                x = g + Math.sin(A) * f * 0.7;
              E ? y.lineTo(T, x) : y.moveTo(T, x);
            }
            (y.stroke(), (y.lineWidth = 1.5));
            const M = Math.floor(f / 5);
            for (let E = 0; E < M; E++) {
              const A = (E / M) * Math.PI * 2;
              (y.save(),
                y.translate(
                  m + Math.cos(A) * f * 0.91,
                  g + Math.sin(A) * f * 0.91,
                ),
                y.rotate(A + Math.PI / 2),
                (y.strokeStyle = S(E / M)),
                b === "f" && (y.strokeStyle = Ei(0.9, 1, (p + E / M) % 1)),
                c(y, 0, 0, f * 0.035, 400 + E * 13 + Math.floor(p * 97)),
                y.restore());
            }
            y.restore();
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
      const u = r() * ie,
        f = r() * ie,
        p =
          (Math.floor(r() * 4) * Math.PI) / 2 +
          (Math.PI / 4) * (r() < 0.5 ? 1 : 0),
        m = 90 + r() * 140,
        g = r();
      ys(u, f, m, (y, b) => {
        for (const [S, M] of [
          [s.a, "a"],
          [s.f, "f"],
        ]) {
          S.lineWidth = 1.3;
          const E = Math.floor(m / 14);
          for (let A = 0; A < E; A++) {
            const T = A / E;
            ((S.strokeStyle =
              M === "a"
                ? bt(li(n, o, T), 0.85)
                : Ei(0.85, 0.9, (g + T * 0.5) % 1)),
              c(
                S,
                y + Math.cos(p) * m * T,
                b + Math.sin(p) * m * T,
                4.2,
                900 + d * 31 + A,
              ));
          }
        }
      });
    }
    Xa(s, 339, 5);
  },
  lantern(s, e) {
    const [, t, i, n] = e.colors.map(ts),
      o = yi(611, 4, 4),
      a = yi(613, 12, 2),
      r = ls(617);
    gs(s, 256, (h, d) => {
      const u = Math.pow(
          Math.abs(Math.sin(h * Math.PI * 10 + o(h, d) * 1.4)),
          0.55,
        ),
        f = o(h, d),
        p = a(h * 0.4, d),
        m = li(
          li(Xi(t, 1.25), i, 0.38 + u * 0.5 + (f - 0.5) * 0.25),
          Xi(i, 0.78),
          _o(0.62, 0.9, p) * 0.35,
        );
      return {
        c: li(Xi(t, 0.7), m, 0.25 + u * 0.75),
        m: 0.25 + u * 0.12,
        g: 0,
        s: 0,
      };
    });
    const l = (h, d, u, f, p) =>
        ys(h, d, u * 1.3, (m, g) => {
          for (const [y, b] of [
            [s.a, "a"],
            [s.f, "f"],
          ]) {
            const S = (E) => {
                if (b === "f") return Ei(0.1, 1, f);
                const A = y.createRadialGradient(m, g, u * 0.1, m, g, u * 1.1);
                return (
                  A.addColorStop(0, bt(li(n, [255, 250, 220], 0.45))),
                  A.addColorStop(0.55, bt(n)),
                  A.addColorStop(1, bt(i)),
                  A
                );
              },
              M = (E) => {
                y.beginPath();
                for (const _ of [-1, 1]) {
                  const C = m + _ * u * 0.38,
                    P = g - u * 0.22,
                    O = u * 0.24 + E,
                    B = u * (p > 0.5 ? 0.26 : 0.32) + E;
                  (y.moveTo(C - O, P + B * 0.55),
                    y.lineTo(C + O, P + B * 0.55),
                    y.lineTo(C + _ * O * (p > 0.5 ? 0.6 : 0), P - B * 0.75),
                    y.closePath());
                }
                (y.moveTo(m - u * 0.1 - E, g + u * 0.1 + E),
                  y.lineTo(m + u * 0.1 + E, g + u * 0.1 + E),
                  y.lineTo(m, g - u * 0.08 - E),
                  y.closePath());
                const A = 3 + Math.floor(p * 3),
                  T = u * 0.62 + E,
                  x = g + u * 0.28 - E,
                  R = g + u * 0.62 + E;
                y.moveTo(m - T, x);
                for (let _ = 0; _ <= A * 2; _++) {
                  const C = _ / (A * 2),
                    P = m - T + C * T * 2;
                  y.lineTo(
                    P,
                    x +
                      (_ % 2 ? u * 0.1 : 0) +
                      Math.sin(C * Math.PI) * u * 0.08,
                  );
                }
                (y.quadraticCurveTo(m + T * 0.7, R, m, R),
                  y.quadraticCurveTo(m - T * 0.7, R, m - T, x),
                  y.closePath());
              };
            (y.save(),
              b === "a" &&
                ((y.fillStyle = bt(Xi(t, 0.45))), M(u * 0.06), y.fill()),
              (y.fillStyle = S()),
              M(0),
              y.fill(),
              y.restore());
          }
        }),
      c = [];
    for (let h = 0; h < 60 && c.length < 9; h++) {
      const d = r() * ie,
        u = r() * ie,
        f = 30 + r() * 26;
      c.some(([p, m, g]) => {
        let y = Math.abs(p - d),
          b = Math.abs(m - u);
        return (
          (y = Math.min(y, ie - y)),
          (b = Math.min(b, ie - b)),
          Math.hypot(y, b) < (g + f) * 1.15
        );
      }) || (c.push([d, u, f]), l(d, u, f, r(), r()));
    }
    for (let h = 0; h < 14; h++) {
      const d = [];
      let u = r() * ie,
        f = r() * ie,
        p = r() * 6.28;
      for (let m = 0; m < 14; m++)
        (d.push([u, f]),
          (p += (r() - 0.5) * 0.9),
          (u += Math.cos(p) * 6),
          (f += Math.sin(p) * 6));
      Xn(s.a, d, 2.4, 0.6, bt(li([40, 60, 22], Xi(t, 0.6), 0.4), 0.85));
    }
    Xa(s, 619, 7);
  },
  crypt(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(631, 5, 4),
      r = ls(637),
      l = _b(Array.from({ length: 28 }, () => [r(), r()]));
    gs(s, 256, (d, u) => {
      const f = a(d, u),
        p = l(d, u),
        m = _o(0, 0.018, p.d2 - p.d1),
        g = Math.pow(1 - Math.abs(f - 0.5) * 2, 22),
        y = 0.82 + ((p.id * 37) % 10) / 50,
        b = li(Xi(t, 1.4), Xi(i, y), m * (0.6 + f * 0.5));
      return {
        c: li(b, Xi(n, 0.55), g * 0.55),
        m: 0.3 + m * 0.2,
        g: g * 0.5 + (1 - m) * 0.12,
        s: (p.id % 7) / 7,
      };
    });
    const c = [214, 208, 190],
      h = (d, u, f, p) =>
        ys(d, u, f * 2.2, (m, g) => {
          for (const [y, b] of [
            [s.a, "a"],
            [s.f, "f"],
          ]) {
            (y.save(), y.translate(m, g), y.rotate(p));
            const S = (M) => (b === "a" ? bt(Xi(c, M)) : Ei(0.35, 0, 0));
            ((y.lineCap = "round"),
              (y.strokeStyle = S(0.82)),
              (y.lineWidth = f * 0.28));
            for (const M of [-1, 1])
              (y.beginPath(),
                y.moveTo(-f * 1.6, M * f * 1.25),
                y.lineTo(f * 1.6, -M * f * 0.45 + f * 0.4),
                y.stroke());
            y.fillStyle = S(0.8);
            for (const [M, E] of [
              [-1.6, 1.25],
              [1.6, -0.05],
              [-1.6, -1.25],
              [1.6, 0.85],
            ])
              (y.beginPath(),
                y.arc(M * f, E * f, f * 0.22, 0, 6.28),
                y.arc(M * f, E * f + f * 0.26, f * 0.2, 0, 6.28),
                y.fill());
            ((y.fillStyle = S(1)),
              y.beginPath(),
              y.ellipse(0, -f * 0.15, f * 0.82, f * 0.78, 0, 0, 6.28),
              y.fill(),
              y.beginPath(),
              y.roundRect(-f * 0.48, f * 0.3, f * 0.96, f * 0.52, f * 0.12),
              y.fill(),
              (y.fillStyle =
                b === "a"
                  ? bt(li(n, o, 0.3))
                  : Ei(0.1, 1, ((d * 7 + u) / ie) % 1)));
            for (const M of [-1, 1])
              (y.beginPath(),
                y.ellipse(
                  M * f * 0.32,
                  -f * 0.05,
                  f * 0.22,
                  f * 0.26,
                  M * 0.2,
                  0,
                  6.28,
                ),
                y.fill());
            if (
              (y.beginPath(),
              y.moveTo(0, f * 0.18),
              y.lineTo(-f * 0.1, f * 0.36),
              y.lineTo(f * 0.1, f * 0.36),
              y.closePath(),
              y.fill(),
              b === "a")
            ) {
              ((y.strokeStyle = bt(Xi(c, 0.45))), (y.lineWidth = 1.3));
              for (let M = -2; M <= 2; M++)
                (y.beginPath(),
                  y.moveTo(M * f * 0.16, f * 0.5),
                  y.lineTo(M * f * 0.16, f * 0.8),
                  y.stroke());
            }
            y.restore();
          }
        });
    for (let d = 0; d < 3; d++)
      for (let u = 0; u < 3; u++)
        h(
          u * 171 + 85 + (r() - 0.5) * 40 + (d % 2) * 60,
          d * 171 + 85 + (r() - 0.5) * 30,
          22 + r() * 9,
          (r() - 0.5) * 0.6,
        );
    for (let d = 0; d < 18; d++)
      Lr(
        s,
        ["R.I.P", "MMXXVI", "† † †", "MEMENTO", "XXXI·X"][d % 5],
        r() * ie,
        r() * ie,
        9 + r() * 4,
        bt(Xi(o, 0.35), 0.55),
        (r() - 0.5) * 0.3,
        "700",
      );
    Xa(s, 639, 6);
  },
  filigree(s, e) {
    const [t, i, n, o] = e.colors.map(ts),
      a = yi(281, 4, 3);
    gs(s, 256, (c, h) => ({
      c: ja([i, t, o], 0.4 + a(c, h) * 0.5),
      m: 1,
      s: 0.3,
    }));
    const r = ls(283),
      l = (c, h, d, u, f, p) => {
        const m = [];
        for (let g = 0; g <= 50; g++) {
          const y = g / 50,
            b = u + f * y * Math.PI * 2.6,
            S = d * (1 - y * 0.8);
          m.push([c + Math.cos(b) * S, h + Math.sin(b) * S]);
        }
        for (const [g, y] of [
          [-ie, 0],
          [0, 0],
          [ie, 0],
          [0, -ie],
          [0, ie],
          [ie, ie],
          [-ie, -ie],
          [ie, -ie],
          [-ie, ie],
        ]) {
          const b = m.map(([S, M]) => [S + g, M + y]);
          if (
            !b.every(
              ([S, M]) => S < -20 || S > ie + 20 || M < -20 || M > ie + 20,
            )
          ) {
            (Xn(
              s.a,
              b.map(([S, M]) => [S + 1.2, M + 1.2]),
              5,
              1,
              bt(o, 0.9),
            ),
              Xn(s.a, b, 5, 1, bt(n, 0.9)),
              Xn(s.f, b, 5, 1, Ei(0.7, 0, 0)));
            for (let S = 4; S < 44; S += 5) {
              const [M, E] = b[S],
                A =
                  Math.atan2(b[S + 1][1] - E, b[S + 1][0] - M) -
                  (f * Math.PI) / 2,
                T = 9 * (1 - S / 50) + 3;
              ((s.a.fillStyle = bt(n, 0.8)),
                s.a.beginPath(),
                s.a.ellipse(
                  M + Math.cos(A) * T,
                  E + Math.sin(A) * T,
                  T,
                  T * 0.38,
                  A,
                  0,
                  Math.PI * 2,
                ),
                s.a.fill(),
                (s.a.strokeStyle = bt(o, 0.6)),
                (s.a.lineWidth = 0.8),
                s.a.beginPath(),
                s.a.moveTo(M, E),
                s.a.lineTo(
                  M + Math.cos(A) * T * 1.8,
                  E + Math.sin(A) * T * 1.8,
                ),
                s.a.stroke());
            }
          }
        }
        if (p > 0)
          for (let g = 0; g < 2; g++) {
            const [y, b] = m[10 + g * 14];
            l(y, b, d * 0.5, u + Math.PI * (g + 0.5), -f, p - 1);
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
    ((s.a.strokeStyle = bt(n, 0.18)), (s.a.lineWidth = 0.7));
    for (let c = -ie; c < ie * 2; c += 6)
      (s.a.beginPath(), s.a.moveTo(c, 0), s.a.lineTo(c + ie, ie), s.a.stroke());
    for (let c = 0; c < 26; c++) {
      const h = r() * ie,
        d = r() * ie,
        u = 3.5 + r() * 3;
      ys(h, d, u + 2, (f, p) => {
        ((s.a.fillStyle = bt(n)),
          s.a.beginPath(),
          s.a.arc(f, p, u + 1.8, 0, Math.PI * 2),
          s.a.fill());
        const m = s.a.createRadialGradient(
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
          (s.a.fillStyle = m),
          s.a.beginPath(),
          s.a.arc(f, p, u, 0, Math.PI * 2),
          s.a.fill(),
          (s.f.fillStyle = Ei(1, 0.5, 1)),
          s.f.beginPath(),
          s.f.arc(f, p, u, 0, Math.PI * 2),
          s.f.fill());
      });
    }
  },
};
