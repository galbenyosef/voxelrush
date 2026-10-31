// index-BeUlFSPp 76 — tex
// Lines 53467-53956 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function jA(s, e, t, i, n = !1, o = !0, a = 1337, r = !1) {
  const l = new B0(),
    c = new B0(),
    h = new B0(),
    d = e * ke,
    u = t * ke,
    f = [3, 3, 3, 3],
    p = (m) => (en(m) && !o ? !0 : YI(m));
  for (let m = 0; m < ke; m++)
    for (let g = 0; g < ke; g++) {
      const y = FO(a, d + m, u + g),
        b = [1, 1, 1];
      for (let S = 0; S < jt; S++) {
        const M = s.getBlock(d + m, S, u + g);
        if (M === 0) continue;
        const E = le[M];
        l.tint =
          M === v.GRASS ||
          M === v.SAVANNA_GRASS ||
          M === v.TALL_GRASS ||
          M === v.DESERT_GRASS
            ? y
            : b;
        const A = d + m,
          T = u + g,
          x = i.skyAt ? i.skyAt(A, S, T) / 15 : 1;
        l.sky = c.sky = h.sky = x;
        const R =
          E.liquid || M === v.LAMP || M === v.FURNACE || M === v.JACK_O_LANTERN
            ? s.getMeta(A, S, T)
            : 0;
        if (M === v.CACTUS) {
          const P =
            Math.max(
              i.at(A, S, T),
              i.at(A + 1, S, T),
              i.at(A - 1, S, T),
              i.at(A, S, T + 1),
              i.at(A, S, T - 1),
              i.at(A, S + 1, T),
            ) / 15;
          (i.skyAt &&
            (l.sky =
              Math.max(
                i.skyAt(A + 1, S, T),
                i.skyAt(A - 1, S, T),
                i.skyAt(A, S, T + 1),
                i.skyAt(A, S, T - 1),
                i.skyAt(A, S + 1, T),
              ) / 15),
            Wj(
              l,
              A,
              S,
              T,
              s.getBlock(A, S + 1, T) === v.CACTUS,
              s.getBlock(A, S - 1, T) === v.CACTUS,
              E.tex,
              P,
            ));
          continue;
        }
        if (E.shape !== "cube" || M === v.PISTON || M === v.SPISTON) {
          const P = s.getMeta(A, S, T),
            O =
              Math.max(
                i.at(A, S, T),
                i.at(A, S + 1, T),
                i.at(A + 1, S, T),
                i.at(A - 1, S, T),
                i.at(A, S, T + 1),
                i.at(A, S, T - 1),
                ov(M, P),
              ) / 15;
          (zn(M) || M === v.PISTON || M === v.SPISTON) &&
            i.skyAt &&
            (l.sky =
              Math.max(
                i.skyAt(A + 1, S, T),
                i.skyAt(A - 1, S, T),
                i.skyAt(A, S, T + 1),
                i.skyAt(A, S, T - 1),
              ) / 15);
          const B = ka(M, P),
            H = i0(M, P);
          if (M === v.SIGN) {
            ZI(P).forEach(([U, W, J, j, ne, ge], be) => {
              be === 0
                ? l.box(
                    A + U,
                    S + W,
                    T + J,
                    A + j,
                    S + ne,
                    T + ge,
                    { top: rb, side: rb, bottom: rb },
                    O,
                    !0,
                  )
                : l.boxUV(
                    A + U,
                    S + W,
                    T + J,
                    A + j,
                    S + ne,
                    T + ge,
                    { top: 10, side: 10, bottom: 10 },
                    O,
                    A,
                    S,
                    T,
                  );
            });
            continue;
          }
          const D = Ev(
            M,
            P,
            (U, W, J) => s.getBlock(U, W, J),
            (U, W, J) => s.getMeta(U, W, J),
            A,
            S,
            T,
          );
          if (D) {
            for (const {
              box: [U, W, J, j, ne, ge],
              tile: be,
            } of D)
              l.boxUV(
                A + U,
                S + W,
                T + J,
                A + j,
                S + ne,
                T + ge,
                { top: be, side: be, bottom: be },
                O,
                A,
                S,
                T,
              );
            continue;
          }
          if (E.shape === "stair") {
            (vj(l, A, S, T, P, E.tex[1], O),
              B && al(c, s, i, A, S, T, v.WATER, ka),
              H && al(h, s, i, A, S, T, v.LAVA, i0));
            continue;
          }
          if (E.shape === "snow") {
            bj(l, A, S, T, P, E.tex[1], O);
            continue;
          }
          if (E.shape === "plant") {
            (M === v.FIRE
              ? Pj(l, A, S, T, E.tex[1], O)
              : ka(M)
                ? _j(l, s, A, S, T, M, E.tex[1], O)
                : M === v.PUMPKIN_CROP
                  ? Ij(l, A, S, T, O)
                  : (fj.has(M) || (l.animMode = YA),
                    GO(
                      l,
                      A,
                      S,
                      T,
                      E.tex[1],
                      O,
                      M === v.WHEAT_SPROUT
                        ? 0.34
                        : M === v.WHEAT_YOUNG
                          ? 0.58
                          : M === v.FLY_AGARIC || M === v.MUSHROOM
                            ? 0.52
                            : M === v.PUMPKIN_SPROUT
                              ? 0.36
                              : M === v.PUMPKIN_YOUNG
                                ? 0.5
                                : 0.8,
                    ),
                    (l.animMode = 0)),
              B && al(c, s, i, A, S, T, v.WATER, ka),
              H && al(h, s, i, A, S, T, v.LAVA, i0));
            continue;
          }
          if (E.shape === "bush") {
            xj(l, A, S, T, M, E.tex[1], E.tex[0], O);
            continue;
          }
          if (E.shape === "litter") {
            Rj(l, A, S, T, E.tex[1], O);
            continue;
          }
          if (E.shape === "web") {
            kj(l, A, S, T, E.tex[1], O);
            continue;
          }
          if (E.shape === "hanging") {
            Cj(l, A, S, T, E.tex[1], O);
            continue;
          }
          if (E.shape === "candle") {
            Lj(l, A, S, T, fy, O);
            continue;
          }
          if (E.shape === "furniture") {
            const U = Cl(M)
              ? WA(
                  M,
                  bm((W, J, j) => s.getBlock(W, J, j), A, S, T, P),
                  r ? "all" : "body",
                )
              : Of(M, P);
            for (const W of U) {
              const [J, j, ne, ge, be, oe] = W.box,
                he = W.tile ?? (W.fabric ? 21 : 10);
              if (W.top !== void 0 || W.bottom !== void 0) {
                l.boxUV(
                  A + J,
                  S + j,
                  T + ne,
                  A + ge,
                  S + be,
                  T + oe,
                  { top: W.top ?? he, side: he, bottom: W.bottom ?? he },
                  O,
                  A,
                  S,
                  T,
                );
                continue;
              }
              if (he === F0) {
                l.box(
                  A + J,
                  S + j,
                  T + ne,
                  A + ge,
                  S + be,
                  T + oe,
                  { top: he, side: he, bottom: he },
                  Math.max(O, 0.8),
                  !0,
                );
                continue;
              }
              if (W.fit) {
                l.box(
                  A + J,
                  S + j,
                  T + ne,
                  A + ge,
                  S + be,
                  T + oe,
                  { top: he, side: he, bottom: he },
                  O,
                  !0,
                );
                continue;
              }
              l.boxUV(
                A + J,
                S + j,
                T + ne,
                A + ge,
                S + be,
                T + oe,
                { top: he, side: he, bottom: he },
                O,
                A,
                S,
                T,
              );
            }
            continue;
          }
          if (E.shape === "cake") {
            Tj(l, A, S, T, P, E.tex, O);
            continue;
          }
          if (E.shape === "campfire") {
            Sj(l, A, S, T, E.tex[1], O);
            continue;
          }
          if (E.shape === "composter") {
            Ej(l, A, S, T, P, E.tex, O);
            continue;
          }
          if (E.shape === "lantern") {
            Oj(l, A, S, T, P, E.tex[1], O);
            continue;
          }
          if (E.shape === "chain") {
            Nj(l, s, A, S, T, E.tex[1], O);
            continue;
          }
          if (E.shape === "fence") {
            (M === v.IRON_FENCE
              ? Hj(l, s, A, S, T, E.tex[1], O)
              : Dj(l, s, A, S, T, E.tex[1], O),
              B && al(c, s, i, A, S, T, v.WATER, ka),
              H && al(h, s, i, A, S, T, v.LAVA, i0));
            continue;
          }
          if (E.shape === "gate") {
            (B && al(c, s, i, A, S, T, v.WATER, ka),
              H && al(h, s, i, A, S, T, v.LAVA, i0));
            continue;
          }
          if (E.shape === "wire") {
            Bj(l, s, A, S, T, E.tex[1], O);
            continue;
          }
          switch (M) {
            case v.LIGHTNING_ROD:
              Aj(l, A, S, T, E.tex[1], O);
              break;
            case v.TORCH:
              dR(l, A, S, T, P, E.tex[1], O);
              break;
            case v.RTORCH:
              dR(l, A, S, T, P, P & fn ? 28 : 27, O);
              break;
            case v.LADDER:
              mj(l, A, S, T, P, E.tex[1], O);
              break;
            case v.BED:
              yj(l, A, S, T, P, O);
              break;
            case v.DOOR:
            case v.METAL_DOOR:
            case v.ARMORED_DOOR:
              r && Gj(l, A, S, T, M, P, O);
              break;
          }
          if (zn(M)) continue;
          (B && al(c, s, i, A, S, T, v.WATER, ka),
            H && al(h, s, i, A, S, T, v.LAVA, i0));
          continue;
        }
        en(M) && o && (l.animMode = 3);
        const _ = E.liquid ? 1 - kc(R) : 0;
        let C = _;
        if (E.liquid) {
          const P = s.getBlock(A, S + 1, T),
            O = s.getMeta(A, S + 1, T);
          (P === M || (M === v.WATER ? ka(P, O) : i0(P, O))) && (C = 0);
        }
        for (const P of Tv) {
          const O = A + P.dir[0],
            B = S + P.dir[1],
            H = T + P.dir[2];
          if (B < 0) continue;
          const D = B >= jt ? 0 : s.getBlock(O, B, H),
            U = B >= 0 && B < jt && (s.loaded?.(O, H) ?? !0);
          if ((E.liquid && !U) || (!U && P.dir[1] === 0 && s.sealed?.(O, H)))
            continue;
          if (E.liquid && D === M && P.dir[1] === 0) {
            const Ie = kc(R),
              ve = kc(s.getMeta(O, B, H));
            if (Ie > ve + 0.001) {
              const it = Math.max(i.at(O, B, H), E.light) / 15,
                st = P.corners.map((ot) => [
                  A + ot.pos[0],
                  S + (ot.pos[1] === 1 ? Ie : ve),
                  T + ot.pos[2],
                ]);
              (M === v.LAVA ? h : c).rawQuad(
                st,
                P.dir,
                E.tex[1],
                it,
                !1,
                M === v.WATER,
              );
            }
            continue;
          }
          let W;
          if (E.liquid) {
            const Ie =
              M === v.WATER
                ? ka(D, s.getMeta(O, B, H))
                : i0(D, s.getMeta(O, B, H));
            W = D !== M && !Ie && (D === 0 || !le[D].solid || le[D].liquid);
          } else
            W =
              !p(D) &&
              !(E.transparent && D === M && !(o && en(M))) &&
              !(E.liquid && le[D]?.liquid);
          if (!W) continue;
          let J = E.tex[P.dir[1] === 1 ? 0 : P.dir[1] === -1 ? 2 : 1];
          (M === v.LAMP && R & fn && (J = 31),
            M === v.FURNACE
              ? (J = CI(R, ...P.dir))
              : M === v.JACK_O_LANTERN
                ? (J = qG(R, ...P.dir))
                : M === v.LED_SCREEN && (J = YG(R, ...P.dir)));
          let j = f,
            ne;
          if (!E.liquid) {
            ((j = []), n && (ne = []));
            const Ie = P.dir[0] !== 0 ? 0 : P.dir[1] !== 0 ? 1 : 2,
              [ve, it] = pj[Ie],
              st = A + P.dir[0],
              ot = S + P.dir[1],
              at = T + P.dir[2];
            for (let Re = 0; Re < 4; Re++) {
              const V = P.corners[Re],
                ye = V.pos[0],
                Ce = V.pos[1],
                ze = V.pos[2],
                tt = ve === 0 ? (ye === 1 ? 1 : -1) : 0,
                ht = ve === 1 ? (Ce === 1 ? 1 : -1) : 0,
                ut = ve === 2 ? (ze === 1 ? 1 : -1) : 0,
                F = it === 0 ? (ye === 1 ? 1 : -1) : 0,
                N = it === 1 ? (Ce === 1 ? 1 : -1) : 0,
                fe = it === 2 ? (ze === 1 ? 1 : -1) : 0,
                De = p(s.getBlock(st + tt, ot + ht, at + ut)),
                Xe = p(s.getBlock(st + F, ot + N, at + fe)),
                et = p(s.getBlock(st + tt + F, ot + ht + N, at + ut + fe)),
                Mt = De ? 1 : 0,
                pt = Xe ? 1 : 0,
                At = et ? 1 : 0;
              if ((j.push(Mt && pt ? 0 : 3 - (Mt + pt + At)), ne)) {
                let ee = i.at(st, ot, at),
                  te = 1;
                (De || ((ee += i.at(st + tt, ot + ht, at + ut)), te++),
                  Xe || ((ee += i.at(st + F, ot + N, at + fe)), te++),
                  et ||
                    ((ee += i.at(st + tt + F, ot + ht + N, at + ut + fe)),
                    te++),
                  ne.push(Math.max(ee / te / 15, E.light / 15)));
              }
            }
          }
          const ge = zn(D),
            be = (Ie) =>
              Math.max(
                Ie(O + 1, B, H),
                Ie(O - 1, B, H),
                Ie(O, B, H + 1),
                Ie(O, B, H - 1),
              ),
            oe =
              Math.max(
                ge ? be(i.at) : U ? i.at(O, B, H) : i.at(A, S, T),
                E.light,
              ) / 15;
          ge && ne && ne.fill(oe);
          const he = E.liquid ? (M === v.LAVA ? h : c) : l;
          if (
            ((he.sky = i.skyAt
              ? (ge ? be(i.skyAt) : U ? i.skyAt(O, B, H) : 15) / 15
              : 1),
            he.quad(
              P,
              A,
              S,
              T,
              J,
              j,
              E.liquid,
              oe,
              E.liquid && P.dir[1] === 0 ? C : _,
              ne,
            ),
            o && en(M) && !en(D))
          ) {
            const Ie = dj.get(P);
            ((l.sky = x),
              l.quad(
                Ie,
                O,
                B,
                H,
                J,
                uj,
                !1,
                Math.max(i.at(A, S, T), E.light) / 15,
                0,
              ));
          }
        }
        en(M) && o && (l.animMode = 0);
      }
    }
  return { opaque: l.build(), water: c.build(), lava: h.build() };
}
