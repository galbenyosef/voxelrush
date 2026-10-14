// assets__index-Dp6GxvJu 59 — tex
// Lines 46301-46796 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function i4(n, e, t, i, s = !1, o = !0, a = 1337, r = !1) {
  var m, y, g;
  const l = new $c(),
    c = new $c(),
    h = new $c(),
    d = e * Pe,
    u = t * Pe,
    f = [3, 3, 3, 3],
    p = (b) => ($n(b) && !o ? !0 : LC(b));
  for (let b = 0; b < Pe; b++)
    for (let S = 0; S < Pe; S++) {
      const M = kk(a, d + b, u + S),
        x = [1, 1, 1];
      for (let T = 0; T < Kt; T++) {
        const A = n.getBlock(d + b, T, u + S);
        if (A === 0) continue;
        const _ = de[A];
        l.tint =
          A === v.GRASS ||
          A === v.SAVANNA_GRASS ||
          A === v.TALL_GRASS ||
          A === v.DESERT_GRASS
            ? M
            : x;
        const C = d + b,
          R = u + S,
          L = i.skyAt ? i.skyAt(C, T, R) / 15 : 1;
        l.sky = c.sky = h.sky = L;
        const N =
          _.liquid || A === v.LAMP || A === v.FURNACE || A === v.JACK_O_LANTERN
            ? n.getMeta(C, T, R)
            : 0;
        if (A === v.CACTUS) {
          const G =
            Math.max(
              i.at(C, T, R),
              i.at(C + 1, T, R),
              i.at(C - 1, T, R),
              i.at(C, T, R + 1),
              i.at(C, T, R - 1),
              i.at(C, T + 1, R),
            ) / 15;
          (i.skyAt &&
            (l.sky =
              Math.max(
                i.skyAt(C + 1, T, R),
                i.skyAt(C - 1, T, R),
                i.skyAt(C, T, R + 1),
                i.skyAt(C, T, R - 1),
                i.skyAt(C, T + 1, R),
              ) / 15),
            ZW(
              l,
              C,
              T,
              R,
              n.getBlock(C, T + 1, R) === v.CACTUS,
              n.getBlock(C, T - 1, R) === v.CACTUS,
              _.tex,
              G,
            ));
          continue;
        }
        if (_.shape !== "cube" || A === v.PISTON || A === v.SPISTON) {
          const G = n.getMeta(C, T, R),
            I =
              Math.max(
                i.at(C, T, R),
                i.at(C, T + 1, R),
                i.at(C + 1, T, R),
                i.at(C - 1, T, R),
                i.at(C, T, R + 1),
                i.at(C, T, R - 1),
                hg(A, G),
              ) / 15;
          (Ss(A) || A === v.PISTON || A === v.SPISTON) &&
            i.skyAt &&
            (l.sky =
              Math.max(
                i.skyAt(C + 1, T, R),
                i.skyAt(C - 1, T, R),
                i.skyAt(C, T, R + 1),
                i.skyAt(C, T, R - 1),
              ) / 15);
          const O = oa(A, G),
            F = uc(A, G);
          if (A === v.SIGN) {
            mk(G).forEach(([Q, ee, se, oe, J, re], Ce) => {
              Ce === 0
                ? l.box(
                    C + Q,
                    T + ee,
                    R + se,
                    C + oe,
                    T + J,
                    R + re,
                    { top: t5, side: t5, bottom: t5 },
                    I,
                    !0,
                  )
                : l.boxUV(
                    C + Q,
                    T + ee,
                    R + se,
                    C + oe,
                    T + J,
                    R + re,
                    { top: 10, side: 10, bottom: 10 },
                    I,
                    C,
                    T,
                    R,
                  );
            });
            continue;
          }
          const X = Mg(
            A,
            G,
            (Q, ee, se) => n.getBlock(Q, ee, se),
            (Q, ee, se) => n.getMeta(Q, ee, se),
            C,
            T,
            R,
          );
          if (X) {
            for (const {
              box: [Q, ee, se, oe, J, re],
              tile: Ce,
            } of X)
              l.boxUV(
                C + Q,
                T + ee,
                R + se,
                C + oe,
                T + J,
                R + re,
                { top: Ce, side: Ce, bottom: Ce },
                I,
                C,
                T,
                R,
              );
            continue;
          }
          if (_.shape === "stair") {
            (AW(l, C, T, R, G, _.tex[1], I),
              O && mr(c, n, i, C, T, R, v.WATER, oa),
              F && mr(h, n, i, C, T, R, v.LAVA, uc));
            continue;
          }
          if (_.shape === "snow") {
            _W(l, C, T, R, G, _.tex[1], I);
            continue;
          }
          if (_.shape === "plant") {
            (A === v.FIRE
              ? FW(l, C, T, R, _.tex[1], I)
              : oa(A)
                ? NW(l, n, C, T, R, A, _.tex[1], I)
                : A === v.PUMPKIN_CROP
                  ? UW(l, C, T, R, I)
                  : (MW.has(A) || (l.animMode = t4),
                    zk(
                      l,
                      C,
                      T,
                      R,
                      _.tex[1],
                      I,
                      A === v.WHEAT_SPROUT
                        ? 0.34
                        : A === v.WHEAT_YOUNG
                          ? 0.58
                          : A === v.FLY_AGARIC || A === v.MUSHROOM
                            ? 0.52
                            : A === v.PUMPKIN_SPROUT
                              ? 0.36
                              : A === v.PUMPKIN_YOUNG
                                ? 0.5
                                : 0.8,
                    ),
                    (l.animMode = 0)),
              O && mr(c, n, i, C, T, R, v.WATER, oa),
              F && mr(h, n, i, C, T, R, v.LAVA, uc));
            continue;
          }
          if (_.shape === "bush") {
            OW(l, C, T, R, A, _.tex[1], _.tex[0], I);
            continue;
          }
          if (_.shape === "litter") {
            DW(l, C, T, R, _.tex[1], I);
            continue;
          }
          if (_.shape === "web") {
            BW(l, C, T, R, _.tex[1], I);
            continue;
          }
          if (_.shape === "hanging") {
            HW(l, C, T, R, _.tex[1], I);
            continue;
          }
          if (_.shape === "candle") {
            zW(l, C, T, R, _2, I);
            continue;
          }
          if (_.shape === "furniture") {
            const Q = Hr(A)
              ? KS(
                  A,
                  kp((ee, se, oe) => n.getBlock(ee, se, oe), C, T, R, G),
                  r ? "all" : "body",
                )
              : ru(A, G);
            for (const ee of Q) {
              const [se, oe, J, re, Ce, Re] = ee.box,
                We = ee.tile ?? (ee.fabric ? 21 : 10);
              if (ee.top !== void 0 || ee.bottom !== void 0) {
                l.boxUV(
                  C + se,
                  T + oe,
                  R + J,
                  C + re,
                  T + Ce,
                  R + Re,
                  { top: ee.top ?? We, side: We, bottom: ee.bottom ?? We },
                  I,
                  C,
                  T,
                  R,
                );
                continue;
              }
              if (We === jc) {
                l.box(
                  C + se,
                  T + oe,
                  R + J,
                  C + re,
                  T + Ce,
                  R + Re,
                  { top: We, side: We, bottom: We },
                  Math.max(I, 0.8),
                  !0,
                );
                continue;
              }
              if (ee.fit) {
                l.box(
                  C + se,
                  T + oe,
                  R + J,
                  C + re,
                  T + Ce,
                  R + Re,
                  { top: We, side: We, bottom: We },
                  I,
                  !0,
                );
                continue;
              }
              l.boxUV(
                C + se,
                T + oe,
                R + J,
                C + re,
                T + Ce,
                R + Re,
                { top: We, side: We, bottom: We },
                I,
                C,
                T,
                R,
              );
            }
            continue;
          }
          if (_.shape === "cake") {
            PW(l, C, T, R, G, _.tex, I);
            continue;
          }
          if (_.shape === "campfire") {
            kW(l, C, T, R, _.tex[1], I);
            continue;
          }
          if (_.shape === "composter") {
            LW(l, C, T, R, G, _.tex, I);
            continue;
          }
          if (_.shape === "lantern") {
            GW(l, C, T, R, G, _.tex[1], I);
            continue;
          }
          if (_.shape === "chain") {
            WW(l, n, C, T, R, _.tex[1], I);
            continue;
          }
          if (_.shape === "fence") {
            (A === v.IRON_FENCE
              ? $W(l, n, C, T, R, _.tex[1], I)
              : VW(l, n, C, T, R, _.tex[1], I),
              O && mr(c, n, i, C, T, R, v.WATER, oa),
              F && mr(h, n, i, C, T, R, v.LAVA, uc));
            continue;
          }
          if (_.shape === "gate") {
            (O && mr(c, n, i, C, T, R, v.WATER, oa),
              F && mr(h, n, i, C, T, R, v.LAVA, uc));
            continue;
          }
          if (_.shape === "wire") {
            qW(l, n, C, T, R, _.tex[1], I);
            continue;
          }
          switch (A) {
            case v.LIGHTNING_ROD:
              IW(l, C, T, R, _.tex[1], I);
              break;
            case v.TORCH:
              FT(l, C, T, R, G, _.tex[1], I);
              break;
            case v.RTORCH:
              FT(l, C, T, R, G, G & Qn ? 28 : 27, I);
              break;
            case v.LADDER:
              EW(l, C, T, R, G, _.tex[1], I);
              break;
            case v.BED:
              TW(l, C, T, R, G, I);
              break;
            case v.DOOR:
            case v.METAL_DOOR:
            case v.ARMORED_DOOR:
              r && XW(l, C, T, R, A, G, I);
              break;
          }
          if (Ss(A)) continue;
          (O && mr(c, n, i, C, T, R, v.WATER, oa),
            F && mr(h, n, i, C, T, R, v.LAVA, uc));
          continue;
        }
        $n(A) && o && (l.animMode = 3);
        const D = _.liquid ? 1 - Ul(N) : 0;
        let H = D;
        if (_.liquid) {
          const G = n.getBlock(C, T + 1, R),
            I = n.getMeta(C, T + 1, R);
          (G === A || (A === v.WATER ? oa(G, I) : uc(G, I))) && (H = 0);
        }
        for (const G of Eg) {
          const I = C + G.dir[0],
            O = T + G.dir[1],
            F = R + G.dir[2];
          if (O < 0) continue;
          const X = O >= Kt ? 0 : n.getBlock(I, O, F),
            Q =
              O >= 0 &&
              O < Kt &&
              (((m = n.loaded) == null ? void 0 : m.call(n, I, F)) ?? !0);
          if (
            (_.liquid && !Q) ||
            (!Q && G.dir[1] === 0 && (y = n.sealed) != null && y.call(n, I, F))
          )
            continue;
          if (_.liquid && X === A && G.dir[1] === 0) {
            const it = Ul(N),
              ut = Ul(n.getMeta(I, O, F));
            if (it > ut + 0.001) {
              const gt = Math.max(i.at(I, O, F), _.light) / 15,
                ve = G.corners.map((Y) => [
                  C + Y.pos[0],
                  T + (Y.pos[1] === 1 ? it : ut),
                  R + Y.pos[2],
                ]);
              (A === v.LAVA ? h : c).rawQuad(
                ve,
                G.dir,
                _.tex[1],
                gt,
                !1,
                A === v.WATER,
              );
            }
            continue;
          }
          let ee;
          if (_.liquid) {
            const it =
              A === v.WATER
                ? oa(X, n.getMeta(I, O, F))
                : uc(X, n.getMeta(I, O, F));
            ee = X !== A && !it && (X === 0 || !de[X].solid || de[X].liquid);
          } else
            ee =
              !p(X) &&
              !(_.transparent && X === A && !(o && $n(A))) &&
              !(_.liquid && (g = de[X]) != null && g.liquid);
          if (!ee) continue;
          let se = _.tex[G.dir[1] === 1 ? 0 : G.dir[1] === -1 ? 2 : 1];
          (A === v.LAMP && N & Qn && (se = 31),
            A === v.FURNACE
              ? (se = uC(N, ...G.dir))
              : A === v.JACK_O_LANTERN
                ? (se = rz(N, ...G.dir))
                : A === v.LED_SCREEN && (se = cz(N, ...G.dir)));
          let oe = f,
            J;
          if (!_.liquid) {
            ((oe = []), s && (J = []));
            const it = G.dir[0] !== 0 ? 0 : G.dir[1] !== 0 ? 1 : 2,
              [ut, gt] = SW[it],
              ve = C + G.dir[0],
              Y = T + G.dir[1],
              ge = R + G.dir[2];
            for (let Le = 0; Le < 4; Le++) {
              const Oe = G.corners[Le],
                Ve = Oe.pos[0],
                Qe = Oe.pos[1],
                Je = Oe.pos[2],
                Z = ut === 0 ? (Ve === 1 ? 1 : -1) : 0,
                W = ut === 1 ? (Qe === 1 ? 1 : -1) : 0,
                ke = ut === 2 ? (Je === 1 ? 1 : -1) : 0,
                Ue = gt === 0 ? (Ve === 1 ? 1 : -1) : 0,
                je = gt === 1 ? (Qe === 1 ? 1 : -1) : 0,
                Ge = gt === 2 ? (Je === 1 ? 1 : -1) : 0,
                Mt = p(n.getBlock(ve + Z, Y + W, ge + ke)),
                ht = p(n.getBlock(ve + Ue, Y + je, ge + Ge)),
                lt = p(n.getBlock(ve + Z + Ue, Y + W + je, ge + ke + Ge)),
                B = Mt ? 1 : 0,
                $ = ht ? 1 : 0,
                he = lt ? 1 : 0;
              if ((oe.push(B && $ ? 0 : 3 - (B + $ + he)), J)) {
                let fe = i.at(ve, Y, ge),
                  be = 1;
                (Mt || ((fe += i.at(ve + Z, Y + W, ge + ke)), be++),
                  ht || ((fe += i.at(ve + Ue, Y + je, ge + Ge)), be++),
                  lt ||
                    ((fe += i.at(ve + Z + Ue, Y + W + je, ge + ke + Ge)), be++),
                  J.push(Math.max(fe / be / 15, _.light / 15)));
              }
            }
          }
          const re = Ss(X),
            Ce = (it) =>
              Math.max(
                it(I + 1, O, F),
                it(I - 1, O, F),
                it(I, O, F + 1),
                it(I, O, F - 1),
              ),
            Re =
              Math.max(
                re ? Ce(i.at) : Q ? i.at(I, O, F) : i.at(C, T, R),
                _.light,
              ) / 15;
          re && J && J.fill(Re);
          const We = _.liquid ? (A === v.LAVA ? h : c) : l;
          if (
            ((We.sky = i.skyAt
              ? (re ? Ce(i.skyAt) : Q ? i.skyAt(I, O, F) : 15) / 15
              : 1),
            We.quad(
              G,
              C,
              T,
              R,
              se,
              oe,
              _.liquid,
              Re,
              _.liquid && G.dir[1] === 0 ? H : D,
              J,
            ),
            o && $n(A) && !$n(X))
          ) {
            const it = bW.get(G);
            ((l.sky = L),
              l.quad(
                it,
                I,
                O,
                F,
                se,
                wW,
                !1,
                Math.max(i.at(C, T, R), _.light) / 15,
                0,
              ));
          }
        }
        $n(A) && o && (l.animMode = 0);
      }
    }
  return { opaque: l.build(), water: c.build(), lava: h.build() };
}
