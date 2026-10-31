// chunk-mesh-worker-coep-v1-GBSiXDQy 34 — tex
// Lines 10415-10904 of readable/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.pretty.js (statement-aligned).
function N0(r, t, e, s, n = !1, i = !0, c = 1337, h = !1) {
  const o = new xe(),
    a = new xe(),
    u = new xe(),
    d = t * D,
    l = e * D,
    f = [3, 3, 3, 3],
    m = (_) => (ee(_) && !i ? !0 : _i(_));
  for (let _ = 0; _ < D; _++)
    for (let g = 0; g < D; g++) {
      const y = Si(c, d + _, l + g),
        R = [1, 1, 1];
      for (let E = 0; E < H; E++) {
        const x = r.getBlock(d + _, E, l + g);
        if (x === 0) continue;
        const S = T[x];
        o.tint =
          x === p.GRASS ||
          x === p.SAVANNA_GRASS ||
          x === p.TALL_GRASS ||
          x === p.DESERT_GRASS
            ? y
            : R;
        const M = d + _,
          A = l + g,
          O = s.skyAt ? s.skyAt(M, E, A) / 15 : 1;
        o.sky = a.sky = u.sky = O;
        const I =
          S.liquid || x === p.LAMP || x === p.FURNACE || x === p.JACK_O_LANTERN
            ? r.getMeta(M, E, A)
            : 0;
        if (x === p.CACTUS) {
          const N =
            Math.max(
              s.at(M, E, A),
              s.at(M + 1, E, A),
              s.at(M - 1, E, A),
              s.at(M, E, A + 1),
              s.at(M, E, A - 1),
              s.at(M, E + 1, A),
            ) / 15;
          (s.skyAt &&
            (o.sky =
              Math.max(
                s.skyAt(M + 1, E, A),
                s.skyAt(M - 1, E, A),
                s.skyAt(M, E, A + 1),
                s.skyAt(M, E, A - 1),
                s.skyAt(M, E + 1, A),
              ) / 15),
            C0(
              o,
              M,
              E,
              A,
              r.getBlock(M, E + 1, A) === p.CACTUS,
              r.getBlock(M, E - 1, A) === p.CACTUS,
              S.tex,
              N,
            ));
          continue;
        }
        if (S.shape !== "cube" || x === p.PISTON || x === p.SPISTON) {
          const N = r.getMeta(M, E, A),
            L =
              Math.max(
                s.at(M, E, A),
                s.at(M, E + 1, A),
                s.at(M + 1, E, A),
                s.at(M - 1, E, A),
                s.at(M, E, A + 1),
                s.at(M, E, A - 1),
                mi(x, N),
              ) / 15;
          (We(x) || x === p.PISTON || x === p.SPISTON) &&
            s.skyAt &&
            (o.sky =
              Math.max(
                s.skyAt(M + 1, E, A),
                s.skyAt(M - 1, E, A),
                s.skyAt(M, E, A + 1),
                s.skyAt(M, E, A - 1),
              ) / 15);
          const U = yt(x, N),
            v = Vt(x, N);
          if (x === p.SIGN) {
            Mr(N).forEach(([K, G, V, $, X, ht], ct) => {
              ct === 0
                ? o.box(
                    M + K,
                    E + G,
                    A + V,
                    M + $,
                    E + X,
                    A + ht,
                    { top: Qs, side: Qs, bottom: Qs },
                    L,
                    !0,
                  )
                : o.boxUV(
                    M + K,
                    E + G,
                    A + V,
                    M + $,
                    E + X,
                    A + ht,
                    { top: 10, side: 10, bottom: 10 },
                    L,
                    M,
                    E,
                    A,
                  );
            });
            continue;
          }
          const q = Rr(
            x,
            N,
            (K, G, V) => r.getBlock(K, G, V),
            (K, G, V) => r.getMeta(K, G, V),
            M,
            E,
            A,
          );
          if (q) {
            for (const {
              box: [K, G, V, $, X, ht],
              tile: ct,
            } of q)
              o.boxUV(
                M + K,
                E + G,
                A + V,
                M + $,
                E + X,
                A + ht,
                { top: ct, side: ct, bottom: ct },
                L,
                M,
                E,
                A,
              );
            continue;
          }
          if (S.shape === "stair") {
            (a0(o, M, E, A, N, S.tex[1], L),
              U && bt(a, r, s, M, E, A, p.WATER, yt),
              v && bt(u, r, s, M, E, A, p.LAVA, Vt));
            continue;
          }
          if (S.shape === "snow") {
            h0(o, M, E, A, N, S.tex[1], L);
            continue;
          }
          if (S.shape === "plant") {
            (x === p.FIRE
              ? S0(o, M, E, A, S.tex[1], L)
              : yt(x)
                ? _0(o, r, M, E, A, x, S.tex[1], L)
                : x === p.PUMPKIN_CROP
                  ? M0(o, M, E, A, L)
                  : (s0.has(x) || (o.animMode = pn),
                    bi(
                      o,
                      M,
                      E,
                      A,
                      S.tex[1],
                      L,
                      x === p.WHEAT_SPROUT
                        ? 0.34
                        : x === p.WHEAT_YOUNG
                          ? 0.58
                          : x === p.FLY_AGARIC || x === p.MUSHROOM
                            ? 0.52
                            : x === p.PUMPKIN_SPROUT
                              ? 0.36
                              : x === p.PUMPKIN_YOUNG
                                ? 0.5
                                : 0.8,
                    ),
                    (o.animMode = 0)),
              U && bt(a, r, s, M, E, A, p.WATER, yt),
              v && bt(u, r, s, M, E, A, p.LAVA, Vt));
            continue;
          }
          if (S.shape === "bush") {
            m0(o, M, E, A, x, S.tex[1], S.tex[0], L);
            continue;
          }
          if (S.shape === "litter") {
            E0(o, M, E, A, S.tex[1], L);
            continue;
          }
          if (S.shape === "web") {
            A0(o, M, E, A, S.tex[1], L);
            continue;
          }
          if (S.shape === "hanging") {
            y0(o, M, E, A, S.tex[1], L);
            continue;
          }
          if (S.shape === "candle") {
            x0(o, M, E, A, ps, L);
            continue;
          }
          if (S.shape === "furniture") {
            const K = fn(x)
              ? Ri(
                  x,
                  Qr((G, V, $) => r.getBlock(G, V, $), M, E, A, N),
                  h ? "all" : "body",
                )
              : Xr(x, N);
            for (const G of K) {
              const [V, $, X, ht, ct, Xt] = G.box,
                st = G.tile ?? (G.fabric ? 21 : 10);
              if (G.top !== void 0 || G.bottom !== void 0) {
                o.boxUV(
                  M + V,
                  E + $,
                  A + X,
                  M + ht,
                  E + ct,
                  A + Xt,
                  { top: G.top ?? st, side: st, bottom: G.bottom ?? st },
                  L,
                  M,
                  E,
                  A,
                );
                continue;
              }
              if (st === ge) {
                o.box(
                  M + V,
                  E + $,
                  A + X,
                  M + ht,
                  E + ct,
                  A + Xt,
                  { top: st, side: st, bottom: st },
                  Math.max(L, 0.8),
                  !0,
                );
                continue;
              }
              if (G.fit) {
                o.box(
                  M + V,
                  E + $,
                  A + X,
                  M + ht,
                  E + ct,
                  A + Xt,
                  { top: st, side: st, bottom: st },
                  L,
                  !0,
                );
                continue;
              }
              o.boxUV(
                M + V,
                E + $,
                A + X,
                M + ht,
                E + ct,
                A + Xt,
                { top: st, side: st, bottom: st },
                L,
                M,
                E,
                A,
              );
            }
            continue;
          }
          if (S.shape === "cake") {
            p0(o, M, E, A, N, S.tex, L);
            continue;
          }
          if (S.shape === "campfire") {
            l0(o, M, E, A, S.tex[1], L);
            continue;
          }
          if (S.shape === "composter") {
            d0(o, M, E, A, N, S.tex, L);
            continue;
          }
          if (S.shape === "lantern") {
            g0(o, M, E, A, N, S.tex[1], L);
            continue;
          }
          if (S.shape === "chain") {
            R0(o, r, M, E, A, S.tex[1], L);
            continue;
          }
          if (S.shape === "fence") {
            (x === p.IRON_FENCE
              ? b0(o, r, M, E, A, S.tex[1], L)
              : T0(o, r, M, E, A, S.tex[1], L),
              U && bt(a, r, s, M, E, A, p.WATER, yt),
              v && bt(u, r, s, M, E, A, p.LAVA, Vt));
            continue;
          }
          if (S.shape === "gate") {
            (U && bt(a, r, s, M, E, A, p.WATER, yt),
              v && bt(u, r, s, M, E, A, p.LAVA, Vt));
            continue;
          }
          if (S.shape === "wire") {
            O0(o, r, M, E, A, S.tex[1], L);
            continue;
          }
          switch (x) {
            case p.LIGHTNING_ROD:
              f0(o, M, E, A, S.tex[1], L);
              break;
            case p.TORCH:
              Vn(o, M, E, A, N, S.tex[1], L);
              break;
            case p.RTORCH:
              Vn(o, M, E, A, N, N & Mt ? 28 : 27, L);
              break;
            case p.LADDER:
              i0(o, M, E, A, N, S.tex[1], L);
              break;
            case p.BED:
              o0(o, M, E, A, N, L);
              break;
            case p.DOOR:
            case p.METAL_DOOR:
            case p.ARMORED_DOOR:
              h && I0(o, M, E, A, x, N, L);
              break;
          }
          if (We(x)) continue;
          (U && bt(a, r, s, M, E, A, p.WATER, yt),
            v && bt(u, r, s, M, E, A, p.LAVA, Vt));
          continue;
        }
        ee(x) && i && (o.animMode = 3);
        const k = S.liquid ? 1 - Kt(I) : 0;
        let w = k;
        if (S.liquid) {
          const N = r.getBlock(M, E + 1, A),
            L = r.getMeta(M, E + 1, A);
          (N === x || (x === p.WATER ? yt(N, L) : Vt(N, L))) && (w = 0);
        }
        for (const N of Ss) {
          const L = M + N.dir[0],
            U = E + N.dir[1],
            v = A + N.dir[2];
          if (U < 0) continue;
          const q = U >= H ? 0 : r.getBlock(L, U, v),
            K = U >= 0 && U < H && (r.loaded?.(L, v) ?? !0);
          if ((S.liquid && !K) || (!K && N.dir[1] === 0 && r.sealed?.(L, v)))
            continue;
          if (S.liquid && q === x && N.dir[1] === 0) {
            const ut = Kt(I),
              he = Kt(r.getMeta(L, U, v));
            if (ut > he + 0.001) {
              const Oe = Math.max(s.at(L, U, v), S.light) / 15,
                Bt = N.corners.map((St) => [
                  M + St.pos[0],
                  E + (St.pos[1] === 1 ? ut : he),
                  A + St.pos[2],
                ]);
              (x === p.LAVA ? u : a).rawQuad(
                Bt,
                N.dir,
                S.tex[1],
                Oe,
                !1,
                x === p.WATER,
              );
            }
            continue;
          }
          let G;
          if (S.liquid) {
            const ut =
              x === p.WATER
                ? yt(q, r.getMeta(L, U, v))
                : Vt(q, r.getMeta(L, U, v));
            G = q !== x && !ut && (q === 0 || !T[q].solid || T[q].liquid);
          } else
            G =
              !m(q) &&
              !(S.transparent && q === x && !(i && ee(x))) &&
              !(S.liquid && T[q]?.liquid);
          if (!G) continue;
          let V = S.tex[N.dir[1] === 1 ? 0 : N.dir[1] === -1 ? 2 : 1];
          (x === p.LAMP && I & Mt && (V = 31),
            x === p.FURNACE
              ? (V = Xi(I, ...N.dir))
              : x === p.JACK_O_LANTERN
                ? (V = nr(I, ...N.dir))
                : x === p.LED_SCREEN && (V = or(I, ...N.dir)));
          let $ = f,
            X;
          if (!S.liquid) {
            (($ = []), n && (X = []));
            const ut = N.dir[0] !== 0 ? 0 : N.dir[1] !== 0 ? 1 : 2,
              [he, Oe] = n0[ut],
              Bt = M + N.dir[0],
              St = E + N.dir[1],
              Zt = A + N.dir[2];
            for (let Is = 0; Is < 4; Is++) {
              const Cs = N.corners[Is],
                mn = Cs.pos[0],
                _n = Cs.pos[1],
                En = Cs.pos[2],
                ve = he === 0 ? (mn === 1 ? 1 : -1) : 0,
                qe = he === 1 ? (_n === 1 ? 1 : -1) : 0,
                Ke = he === 2 ? (En === 1 ? 1 : -1) : 0,
                Qe = Oe === 0 ? (mn === 1 ? 1 : -1) : 0,
                Xe = Oe === 1 ? (_n === 1 ? 1 : -1) : 0,
                Ze = Oe === 2 ? (En === 1 ? 1 : -1) : 0,
                An = m(r.getBlock(Bt + ve, St + qe, Zt + Ke)),
                yn = m(r.getBlock(Bt + Qe, St + Xe, Zt + Ze)),
                xn = m(r.getBlock(Bt + ve + Qe, St + qe + Xe, Zt + Ke + Ze)),
                Mn = An ? 1 : 0,
                Sn = yn ? 1 : 0,
                Oi = xn ? 1 : 0;
              if (($.push(Mn && Sn ? 0 : 3 - (Mn + Sn + Oi)), X)) {
                let $e = s.at(Bt, St, Zt),
                  Je = 1;
                (An || (($e += s.at(Bt + ve, St + qe, Zt + Ke)), Je++),
                  yn || (($e += s.at(Bt + Qe, St + Xe, Zt + Ze)), Je++),
                  xn ||
                    (($e += s.at(Bt + ve + Qe, St + qe + Xe, Zt + Ke + Ze)),
                    Je++),
                  X.push(Math.max($e / Je / 15, S.light / 15)));
              }
            }
          }
          const ht = We(q),
            ct = (ut) =>
              Math.max(
                ut(L + 1, U, v),
                ut(L - 1, U, v),
                ut(L, U, v + 1),
                ut(L, U, v - 1),
              ),
            Xt =
              Math.max(
                ht ? ct(s.at) : K ? s.at(L, U, v) : s.at(M, E, A),
                S.light,
              ) / 15;
          ht && X && X.fill(Xt);
          const st = S.liquid ? (x === p.LAVA ? u : a) : o;
          if (
            ((st.sky = s.skyAt
              ? (ht ? ct(s.skyAt) : K ? s.skyAt(L, U, v) : 15) / 15
              : 1),
            st.quad(
              N,
              M,
              E,
              A,
              V,
              $,
              S.liquid,
              Xt,
              S.liquid && N.dir[1] === 0 ? w : k,
              X,
            ),
            i && ee(x) && !ee(q))
          ) {
            const ut = t0.get(N);
            ((o.sky = O),
              o.quad(
                ut,
                L,
                U,
                v,
                V,
                e0,
                !1,
                Math.max(s.at(M, E, A), S.light) / 15,
                0,
              ));
          }
        }
        ee(x) && i && (o.animMode = 0);
      }
    }
  return { opaque: o.build(), water: a.build(), lava: u.build() };
}
