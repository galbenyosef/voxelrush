// index-BeUlFSPp 77 — gloss
// Lines 53957-54288 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function $j(s, e, t, i) {
  const n = new B0(),
    o = new B0(),
    a = new B0(),
    r = e * ke,
    l = t * ke,
    c = new Float32Array(324),
    h = new Uint16Array(324),
    d = (u, f) => (u + 1) * 18 + f + 1;
  for (let u = -1; u <= 16; u++)
    for (let f = -1; f <= 16; f++) {
      const p = d(u, f);
      c[p] = -1;
      for (let m = jt - 1; m >= 0; m--) {
        const g = s.getBlock(r + u, m, l + f),
          y = le[g];
        if (!(!y || (!y.solid && !y.liquid))) {
          ((h[p] = g),
            (c[p] = m + (y.liquid ? kc(s.getMeta(r + u, m, l + f)) : 1)));
          break;
        }
      }
    }
  for (let u = 0; u < 16; u++)
    for (let f = 0; f < 16; f++) {
      const p = d(u, f),
        m = c[p],
        g = h[p],
        y = le[g];
      if (m < 0 || !y) continue;
      const b = r + u,
        S = l + f,
        M = y.liquid ? (g === v.LAVA ? a : o) : n,
        E = y.light / 15;
      ((M.tint =
        g === v.GRASS || g === v.SAVANNA_GRASS ? FO(i, b, S) : [1, 1, 1]),
        M.rawQuad(
          [
            [b, m, S + 1],
            [b + 1, m, S + 1],
            [b, m, S],
            [b + 1, m, S],
          ],
          [0, 1, 0],
          y.tex[0],
          E,
        ));
      for (const [A, T] of [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ]) {
        const x = c[d(u + A, f + T)],
          R = x < 0 ? m - 4 : x;
        if (R >= m) continue;
        const _ =
          A < 0
            ? [
                [b, m, S],
                [b, R, S],
                [b, m, S + 1],
                [b, R, S + 1],
              ]
            : A > 0
              ? [
                  [b + 1, m, S + 1],
                  [b + 1, R, S + 1],
                  [b + 1, m, S],
                  [b + 1, R, S],
                ]
              : T < 0
                ? [
                    [b + 1, m, S],
                    [b + 1, R, S],
                    [b, m, S],
                    [b, R, S],
                  ]
                : [
                    [b, m, S + 1],
                    [b, R, S + 1],
                    [b + 1, m, S + 1],
                    [b + 1, R, S + 1],
                  ];
        M.rawQuad(_, [A, 0, T], y.tex[1], E);
      }
    }
  return { opaque: n.build(), water: o.build(), lava: a.build() };
}
const Hb = new Map(),
  ng = 64,
  Vj = { ox: 0, oz: 0, data: new Uint8Array(0), at: () => 15, skyAt: () => 15 };
function $O(s, e = 0) {
  const t = `${s}:${e}`;
  if (Hb.has(t)) return Hb.get(t);
  const i = zn(s),
    o = jA(
      {
        getBlock: (a, r, l) =>
          a === 0 && l === 0 && (r === ng || (i && r === ng + 1)) ? s : 0,
        getMeta: (a, r) => (r === ng + 1 ? e | wr : e),
        loaded: () => !0,
      },
      0,
      0,
      Vj,
      !1,
      !0,
      1337,
      !0,
    ).opaque;
  return (
    o &&
      (o.translate(-0.5, -ng - 0.5, -0.5),
      o.computeBoundingBox(),
      o.computeBoundingSphere()),
    Hb.set(t, o),
    o
  );
}
let Mm = 1;
const XA = () => Mm;
function pR(s) {
  Mm = s;
}
const wt = (s) => Mm >= s,
  ci = (s) => (Mm === 0 ? Math.max(5, s >> 1) : Mm === 1 ? s : s + 6);
let Sm = 0;
const qj = () => Sm;
function Kj(s) {
  Sm = s;
}
const Zs = {
    uFxMaterials: { value: null },
    uFxWetness: { value: 0 },
    uFxCloudShadow: { value: null },
    uFxCloudShadowParams: { value: new Ms(0, 0, 1, 0) },
    uFxCloudMidY: { value: 200 },
    uFxLightDir: { value: new k(0, 1, 0) },
    uFxSkyTint: { value: new Ge(0.3, 0.45, 0.7) },
    uFxTime: { value: 0 },
    uFxSeaLevel: { value: Bs - 0.125 },
    uFxWaterMap: { value: null },
    uFxWaterMapParams: { value: new Ms(0, 0, 1, 0) },
    uFxCamUnderwater: { value: 0 },
    uFxWaterTint: { value: new Ge(0.01, 0.06, 0.09) },
    uFxWaterClear: { value: 0 },
  },
  Ty = new k(0.26, 0.075, 0.055),
  ZA = { value: 0 },
  QA = { value: 1.15 / 0.6 },
  _v = { value: null },
  JA = { value: 0.3 },
  eT = `
float fxAdaptGain( sampler2D adapt, float key ) {
  float avg = exp( textureLod( adapt, vec2( 0.5 ), 0.0 ).r );
  // partial adaptation only: a sunset or a cave should still read darker than noon
  return clamp( pow( key / avg, 0.5 ), 0.6, 1.55 );
}
`,
  VO = `
vec3 fxInverseDisplay( vec3 d, float exposure ) {
  vec3 y = clamp( pow( max( d, 0.0 ), vec3( 2.2 ) ), 0.0, 0.95 );
  vec3 A = y * 0.983729 - 1.0;
  vec3 B = y * 0.4329510 - 0.0245786;
  vec3 C = y * 0.238081 + 0.000090537;
  vec3 x = ( -B - sqrt( max( B * B - 4.0 * A * C, 0.0 ) ) ) / ( 2.0 * A );
  return max( x, 0.0 ) / exposure;
}
`,
  qO = 29,
  KO = 30,
  YO = { value: 1 },
  Yj = {
    spec: 0.04,
    gloss: 0.22,
    emissive: 0,
    foliage: 0,
    relief: 0.8,
    porosity: 0.6,
  };
function jj(s) {
  const e = (...t) => t.some((i) => s.includes(i));
  return e("glass", "lunar_ice")
    ? { spec: 0.9, gloss: 0.92, relief: 0, porosity: 0 }
    : e("_ore")
      ? { spec: 0.55, gloss: 0.62, relief: 1.1, porosity: 0.3 }
      : e(
            "metal",
            "armored",
            "rail",
            "chain",
            "lightning_rod",
            "lunar_panel",
            "military_chest",
            "detonator",
            "radio",
          )
        ? { spec: 0.6, gloss: 0.55, relief: 0.45, porosity: 0.05 }
        : e("gold_inlay", "lapis_inlay")
          ? { spec: 0.7, gloss: 0.7, relief: 0.6, porosity: 0.1 }
          : e(
                "leaves",
                "sapling",
                "tall_grass",
                "flower",
                "crop",
                "sprout",
                "young_",
                "seaweed",
                "seagrass",
                "coral",
                "bush",
                "desert_grass",
                "cactus",
                "hay",
              )
            ? {
                spec: 0.1,
                gloss: 0.3,
                foliage: e("cactus", "hay") ? 0.25 : 1,
                relief: 0.6,
                porosity: 0.2,
              }
            : e("snow")
              ? { spec: 0.3, gloss: 0.45, relief: 0.35, porosity: 0 }
              : e("clay", "polished", "smooth")
                ? { spec: 0.14, gloss: 0.42, relief: 0.35, porosity: 0.3 }
                : e("sand", "gravel", "regolith")
                  ? { spec: 0.02, gloss: 0.15, relief: 0.22, porosity: 1 }
                  : e("dirt", "farmland")
                    ? { spec: 0.02, gloss: 0.15, relief: 0.45, porosity: 1 }
                    : e("grass")
                      ? {
                          spec: 0.05,
                          gloss: 0.25,
                          relief: 0.75,
                          porosity: 0.75,
                        }
                      : e(
                            "log",
                            "planks",
                            "wood",
                            "door",
                            "chest",
                            "ladder",
                            "bookshelf",
                            "barrel",
                            "composter",
                            "table",
                            "chair",
                            "bench",
                            "bed",
                            "sign",
                            "fence",
                            "stairs",
                          )
                        ? {
                            spec: 0.05,
                            gloss: 0.25,
                            relief: 0.9,
                            porosity: 0.6,
                          }
                        : e(
                              "stone",
                              "cobble",
                              "brick",
                              "bedrock",
                              "rock",
                              "basalt",
                              "pillar",
                              "hieroglyph",
                              "sarcophagus",
                              "furnace",
                            )
                          ? {
                              spec: 0.08,
                              gloss: 0.26,
                              relief: 1.25,
                              porosity: 0.45,
                            }
                          : {};
}
function Xj() {
  const s = Array.from({ length: Ni * Ni }, () => ({ ...Yj })),
    e = new Set(),
    t = new Map(),
    i = new Set();
  for (const c of le)
    if (!(!c || c.id === 0 || c.liquid))
      for (const h of c.tex)
        h < 0 ||
          h >= s.length ||
          (e.has(h) || (Object.assign(s[h], jj(c.name)), e.add(h)),
          c.light >= 10 && c.shape !== "furniture"
            ? t.set(h, Math.max(t.get(h) ?? 0, c.light / 15))
            : i.add(h));
  for (const [c, h] of t) i.has(c) || (s[c].emissive = h);
  ((s[31].emissive = 1),
    (s[g5].emissive = 0.8),
    (s[Hm].emissive = 1),
    (s[F0].emissive = 0.45));
  const n = Ni * 2,
    o = Ni,
    a = new Uint8Array(n * o * 4),
    r = (c) => Math.max(0, Math.min(255, Math.round(c * 255)));
  s.forEach((c, h) => {
    const d = h % Ni,
      u = Ni - 1 - Math.floor(h / Ni),
      f = (u * n + d) * 4,
      p = (u * n + d + Ni) * 4;
    ((a[f] = r(c.spec)),
      (a[f + 1] = r(c.gloss)),
      (a[f + 2] = r(c.emissive)),
      (a[f + 3] = r(c.foliage)),
      (a[p] = r(c.relief / 2)),
      (a[p + 1] = r(c.porosity)),
      (a[p + 2] = 0),
      (a[p + 3] = 255));
  });
  const l = new Ef(a, n, o, bo, Do);
  return (
    (l.magFilter = as),
    (l.minFilter = as),
    (l.generateMipmaps = !1),
    (l.needsUpdate = !0),
    l
  );
}
function Zj() {
  return (Zs.uFxMaterials.value ??= Xj());
}
