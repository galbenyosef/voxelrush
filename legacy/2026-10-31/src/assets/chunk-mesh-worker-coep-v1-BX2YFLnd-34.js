// chunk-mesh-worker-coep-v1-BX2YFLnd 34 — tex
// Lines 10397-10893 of readable/assets/chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
function B0(r, t, e, s, n = !1, i = !0, h = 1337, c = !1) {
  var _, y, E;
  const o = new Re(),
    a = new Re(),
    u = new Re(),
    d = t * D,
    l = e * D,
    p = [3, 3, 3, 3],
    m = (M) => (re(M) && !i ? !0 : Ei(M));
  for (let M = 0; M < D; M++)
    for (let g = 0; g < D; g++) {
      const L = gi(h, d + M, l + g),
        I = [1, 1, 1];
      for (let A = 0; A < Y; A++) {
        const x = r.getBlock(d + M, A, l + g);
        if (x === 0) continue;
        const S = T[x];
        o.tint =
          x === f.GRASS ||
          x === f.SAVANNA_GRASS ||
          x === f.TALL_GRASS ||
          x === f.DESERT_GRASS
            ? L
            : I;
        const R = d + M,
          O = l + g,
          k = s.skyAt ? s.skyAt(R, A, O) / 15 : 1;
        o.sky = a.sky = u.sky = k;
        const W =
          S.liquid || x === f.LAMP || x === f.FURNACE || x === f.JACK_O_LANTERN
            ? r.getMeta(R, A, O)
            : 0;
        if (x === f.CACTUS) {
          const B =
            Math.max(
              s.at(R, A, O),
              s.at(R + 1, A, O),
              s.at(R - 1, A, O),
              s.at(R, A, O + 1),
              s.at(R, A, O - 1),
              s.at(R, A + 1, O),
            ) / 15;
          (s.skyAt &&
            (o.sky =
              Math.max(
                s.skyAt(R + 1, A, O),
                s.skyAt(R - 1, A, O),
                s.skyAt(R, A, O + 1),
                s.skyAt(R, A, O - 1),
                s.skyAt(R, A + 1, O),
              ) / 15),
            N0(
              o,
              R,
              A,
              O,
              r.getBlock(R, A + 1, O) === f.CACTUS,
              r.getBlock(R, A - 1, O) === f.CACTUS,
              S.tex,
              B,
            ));
          continue;
        }
        if (S.shape !== "cube" || x === f.PISTON || x === f.SPISTON) {
          const B = r.getMeta(R, A, O),
            N =
              Math.max(
                s.at(R, A, O),
                s.at(R, A + 1, O),
                s.at(R + 1, A, O),
                s.at(R - 1, A, O),
                s.at(R, A, O + 1),
                s.at(R, A, O - 1),
                _i(x, B),
              ) / 15;
          (ve(x) || x === f.PISTON || x === f.SPISTON) &&
            s.skyAt &&
            (o.sky =
              Math.max(
                s.skyAt(R + 1, A, O),
                s.skyAt(R - 1, A, O),
                s.skyAt(R, A, O + 1),
                s.skyAt(R, A, O - 1),
              ) / 15);
          const F = gt(x, B),
            v = Qt(x, B);
          if (x === f.SIGN) {
            Rr(B).forEach(([j, q, $, ht, it, dt], ft) => {
              ft === 0
                ? o.box(
                    R + j,
                    A + q,
                    O + $,
                    R + ht,
                    A + it,
                    O + dt,
                    { top: Xs, side: Xs, bottom: Xs },
                    N,
                    !0,
                  )
                : o.boxUV(
                    R + j,
                    A + q,
                    O + $,
                    R + ht,
                    A + it,
                    O + dt,
                    { top: 10, side: 10, bottom: 10 },
                    N,
                    R,
                    A,
                    O,
                  );
            });
            continue;
          }
          const Z = Or(
            x,
            B,
            (j, q, $) => r.getBlock(j, q, $),
            (j, q, $) => r.getMeta(j, q, $),
            R,
            A,
            O,
          );
          if (Z) {
            for (const {
              box: [j, q, $, ht, it, dt],
              tile: ft,
            } of Z)
              o.boxUV(
                R + j,
                A + q,
                O + $,
                R + ht,
                A + it,
                O + dt,
                { top: ft, side: ft, bottom: ft },
                N,
                R,
                A,
                O,
              );
            continue;
          }
          if (S.shape === "stair") {
            (h0(o, R, A, O, B, S.tex[1], N),
              F && Ct(a, r, s, R, A, O, f.WATER, gt),
              v && Ct(u, r, s, R, A, O, f.LAVA, Qt));
            continue;
          }
          if (S.shape === "snow") {
            c0(o, R, A, O, B, S.tex[1], N);
            continue;
          }
          if (S.shape === "plant") {
            (x === f.FIRE
              ? g0(o, R, A, O, S.tex[1], N)
              : gt(x)
                ? E0(o, r, R, A, O, x, S.tex[1], N)
                : x === f.PUMPKIN_CROP
                  ? S0(o, R, A, O, N)
                  : (n0.has(x) || (o.animMode = mn),
                    Oi(
                      o,
                      R,
                      A,
                      O,
                      S.tex[1],
                      N,
                      x === f.WHEAT_SPROUT
                        ? 0.34
                        : x === f.WHEAT_YOUNG
                          ? 0.58
                          : x === f.FLY_AGARIC || x === f.MUSHROOM
                            ? 0.52
                            : x === f.PUMPKIN_SPROUT
                              ? 0.36
                              : x === f.PUMPKIN_YOUNG
                                ? 0.5
                                : 0.8,
                    ),
                    (o.animMode = 0)),
              F && Ct(a, r, s, R, A, O, f.WATER, gt),
              v && Ct(u, r, s, R, A, O, f.LAVA, Qt));
            continue;
          }
          if (S.shape === "bush") {
            _0(o, R, A, O, x, S.tex[1], S.tex[0], N);
            continue;
          }
          if (S.shape === "litter") {
            A0(o, R, A, O, S.tex[1], N);
            continue;
          }
          if (S.shape === "web") {
            y0(o, R, A, O, S.tex[1], N);
            continue;
          }
          if (S.shape === "hanging") {
            x0(o, R, A, O, S.tex[1], N);
            continue;
          }
          if (S.shape === "candle") {
            M0(o, R, A, O, As, N);
            continue;
          }
          if (S.shape === "furniture") {
            const j = pn(x)
              ? Ti(
                  x,
                  Xr((q, $, ht) => r.getBlock(q, $, ht), R, A, O, B),
                  c ? "all" : "body",
                )
              : Zr(x, B);
            for (const q of j) {
              const [$, ht, it, dt, ft, jt] = q.box,
                rt = q.tile ?? (q.fabric ? 21 : 10);
              if (q.top !== void 0 || q.bottom !== void 0) {
                o.boxUV(
                  R + $,
                  A + ht,
                  O + it,
                  R + dt,
                  A + ft,
                  O + jt,
                  { top: q.top ?? rt, side: rt, bottom: q.bottom ?? rt },
                  N,
                  R,
                  A,
                  O,
                );
                continue;
              }
              if (rt === Oe) {
                o.box(
                  R + $,
                  A + ht,
                  O + it,
                  R + dt,
                  A + ft,
                  O + jt,
                  { top: rt, side: rt, bottom: rt },
                  Math.max(N, 0.8),
                  !0,
                );
                continue;
              }
              if (q.fit) {
                o.box(
                  R + $,
                  A + ht,
                  O + it,
                  R + dt,
                  A + ft,
                  O + jt,
                  { top: rt, side: rt, bottom: rt },
                  N,
                  !0,
                );
                continue;
              }
              o.boxUV(
                R + $,
                A + ht,
                O + it,
                R + dt,
                A + ft,
                O + jt,
                { top: rt, side: rt, bottom: rt },
                N,
                R,
                A,
                O,
              );
            }
            continue;
          }
          if (S.shape === "cake") {
            m0(o, R, A, O, B, S.tex, N);
            continue;
          }
          if (S.shape === "campfire") {
            d0(o, R, A, O, S.tex[1], N);
            continue;
          }
          if (S.shape === "composter") {
            f0(o, R, A, O, B, S.tex, N);
            continue;
          }
          if (S.shape === "lantern") {
            R0(o, R, A, O, B, S.tex[1], N);
            continue;
          }
          if (S.shape === "chain") {
            T0(o, r, R, A, O, S.tex[1], N);
            continue;
          }
          if (S.shape === "fence") {
            (x === f.IRON_FENCE
              ? O0(o, r, R, A, O, S.tex[1], N)
              : b0(o, r, R, A, O, S.tex[1], N),
              F && Ct(a, r, s, R, A, O, f.WATER, gt),
              v && Ct(u, r, s, R, A, O, f.LAVA, Qt));
            continue;
          }
          if (S.shape === "gate") {
            (F && Ct(a, r, s, R, A, O, f.WATER, gt),
              v && Ct(u, r, s, R, A, O, f.LAVA, Qt));
            continue;
          }
          if (S.shape === "wire") {
            L0(o, r, R, A, O, S.tex[1], N);
            continue;
          }
          switch (x) {
            case f.LIGHTNING_ROD:
              p0(o, R, A, O, S.tex[1], N);
              break;
            case f.TORCH:
              vn(o, R, A, O, B, S.tex[1], N);
              break;
            case f.RTORCH:
              vn(o, R, A, O, B, B & Tt ? 28 : 27, N);
              break;
            case f.LADDER:
              r0(o, R, A, O, B, S.tex[1], N);
              break;
            case f.BED:
              a0(o, R, A, O, B, N);
              break;
            case f.DOOR:
            case f.METAL_DOOR:
            case f.ARMORED_DOOR:
              c && C0(o, R, A, O, x, B, N);
              break;
          }
          if (ve(x)) continue;
          (F && Ct(a, r, s, R, A, O, f.WATER, gt),
            v && Ct(u, r, s, R, A, O, f.LAVA, Qt));
          continue;
        }
        re(x) && i && (o.animMode = 3);
        const H = S.liquid ? 1 - $t(W) : 0;
        let X = H;
        if (S.liquid) {
          const B = r.getBlock(R, A + 1, O),
            N = r.getMeta(R, A + 1, O);
          (B === x || (x === f.WATER ? gt(B, N) : Qt(B, N))) && (X = 0);
        }
        for (const B of gs) {
          const N = R + B.dir[0],
            F = A + B.dir[1],
            v = O + B.dir[2];
          if (F < 0) continue;
          const Z = F >= Y ? 0 : r.getBlock(N, F, v),
            j =
              F >= 0 &&
              F < Y &&
              (((_ = r.loaded) == null ? void 0 : _.call(r, N, v)) ?? !0);
          if (
            (S.liquid && !j) ||
            (!j && B.dir[1] === 0 && (y = r.sealed) != null && y.call(r, N, v))
          )
            continue;
          if (S.liquid && Z === x && B.dir[1] === 0) {
            const pt = $t(W),
              de = $t(r.getMeta(N, F, v));
            if (pt > de + 0.001) {
              const Ne = Math.max(s.at(N, F, v), S.light) / 15,
                Dt = B.corners.map((bt) => [
                  R + bt.pos[0],
                  A + (bt.pos[1] === 1 ? pt : de),
                  O + bt.pos[2],
                ]);
              (x === f.LAVA ? u : a).rawQuad(
                Dt,
                B.dir,
                S.tex[1],
                Ne,
                !1,
                x === f.WATER,
              );
            }
            continue;
          }
          let q;
          if (S.liquid) {
            const pt =
              x === f.WATER
                ? gt(Z, r.getMeta(N, F, v))
                : Qt(Z, r.getMeta(N, F, v));
            q = Z !== x && !pt && (Z === 0 || !T[Z].solid || T[Z].liquid);
          } else
            q =
              !m(Z) &&
              !(S.transparent && Z === x && !(i && re(x))) &&
              !(S.liquid && (E = T[Z]) != null && E.liquid);
          if (!q) continue;
          let $ = S.tex[B.dir[1] === 1 ? 0 : B.dir[1] === -1 ? 2 : 1];
          (x === f.LAMP && W & Tt && ($ = 31),
            x === f.FURNACE
              ? ($ = Ji(W, ...B.dir))
              : x === f.JACK_O_LANTERN
                ? ($ = or(W, ...B.dir))
                : x === f.LED_SCREEN && ($ = cr(W, ...B.dir)));
          let ht = p,
            it;
          if (!S.liquid) {
            ((ht = []), n && (it = []));
            const pt = B.dir[0] !== 0 ? 0 : B.dir[1] !== 0 ? 1 : 2,
              [de, Ne] = i0[pt],
              Dt = R + B.dir[0],
              bt = A + B.dir[1],
              te = O + B.dir[2];
            for (let Cs = 0; Cs < 4; Cs++) {
              const Ns = B.corners[Cs],
                _n = Ns.pos[0],
                En = Ns.pos[1],
                An = Ns.pos[2],
                Xe = de === 0 ? (_n === 1 ? 1 : -1) : 0,
                Ze = de === 1 ? (En === 1 ? 1 : -1) : 0,
                $e = de === 2 ? (An === 1 ? 1 : -1) : 0,
                Je = Ne === 0 ? (_n === 1 ? 1 : -1) : 0,
                je = Ne === 1 ? (En === 1 ? 1 : -1) : 0,
                ts = Ne === 2 ? (An === 1 ? 1 : -1) : 0,
                yn = m(r.getBlock(Dt + Xe, bt + Ze, te + $e)),
                xn = m(r.getBlock(Dt + Je, bt + je, te + ts)),
                Mn = m(r.getBlock(Dt + Xe + Je, bt + Ze + je, te + $e + ts)),
                Sn = yn ? 1 : 0,
                gn = xn ? 1 : 0,
                Li = Mn ? 1 : 0;
              if ((ht.push(Sn && gn ? 0 : 3 - (Sn + gn + Li)), it)) {
                let es = s.at(Dt, bt, te),
                  ss = 1;
                (yn || ((es += s.at(Dt + Xe, bt + Ze, te + $e)), ss++),
                  xn || ((es += s.at(Dt + Je, bt + je, te + ts)), ss++),
                  Mn ||
                    ((es += s.at(Dt + Xe + Je, bt + Ze + je, te + $e + ts)),
                    ss++),
                  it.push(Math.max(es / ss / 15, S.light / 15)));
              }
            }
          }
          const dt = ve(Z),
            ft = (pt) =>
              Math.max(
                pt(N + 1, F, v),
                pt(N - 1, F, v),
                pt(N, F, v + 1),
                pt(N, F, v - 1),
              ),
            jt =
              Math.max(
                dt ? ft(s.at) : j ? s.at(N, F, v) : s.at(R, A, O),
                S.light,
              ) / 15;
          dt && it && it.fill(jt);
          const rt = S.liquid ? (x === f.LAVA ? u : a) : o;
          if (
            ((rt.sky = s.skyAt
              ? (dt ? ft(s.skyAt) : j ? s.skyAt(N, F, v) : 15) / 15
              : 1),
            rt.quad(
              B,
              R,
              A,
              O,
              $,
              ht,
              S.liquid,
              jt,
              S.liquid && B.dir[1] === 0 ? X : H,
              it,
            ),
            i && re(x) && !re(Z))
          ) {
            const pt = e0.get(B);
            ((o.sky = k),
              o.quad(
                pt,
                N,
                F,
                v,
                $,
                s0,
                !1,
                Math.max(s.at(R, A, O), S.light) / 15,
                0,
              ));
          }
        }
        re(x) && i && (o.animMode = 0);
      }
    }
  return { opaque: o.build(), water: a.build(), lava: u.build() };
}
