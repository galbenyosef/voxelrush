// index-Dp6GxvJu 60 — gloss
// Lines 46797-47129 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function QW(n, e, t, i) {
  const s = new $c(),
    o = new $c(),
    a = new $c(),
    r = e * Pe,
    l = t * Pe,
    c = new Float32Array(324),
    h = new Uint16Array(324),
    d = (u, f) => (u + 1) * 18 + f + 1;
  for (let u = -1; u <= 16; u++)
    for (let f = -1; f <= 16; f++) {
      const p = d(u, f);
      c[p] = -1;
      for (let m = Kt - 1; m >= 0; m--) {
        const y = n.getBlock(r + u, m, l + f),
          g = de[y];
        if (!(!g || (!g.solid && !g.liquid))) {
          ((h[p] = y),
            (c[p] = m + (g.liquid ? Ul(n.getMeta(r + u, m, l + f)) : 1)));
          break;
        }
      }
    }
  for (let u = 0; u < 16; u++)
    for (let f = 0; f < 16; f++) {
      const p = d(u, f),
        m = c[p],
        y = h[p],
        g = de[y];
      if (m < 0 || !g) continue;
      const b = r + u,
        S = l + f,
        M = g.liquid ? (y === v.LAVA ? a : o) : s,
        x = g.light / 15;
      ((M.tint =
        y === v.GRASS || y === v.SAVANNA_GRASS ? kk(i, b, S) : [1, 1, 1]),
        M.rawQuad(
          [
            [b, m, S + 1],
            [b + 1, m, S + 1],
            [b, m, S],
            [b + 1, m, S],
          ],
          [0, 1, 0],
          g.tex[0],
          x,
        ));
      for (const [T, A] of [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
      ]) {
        const _ = c[d(u + T, f + A)],
          C = _ < 0 ? m - 4 : _;
        if (C >= m) continue;
        const R =
          T < 0
            ? [
                [b, m, S],
                [b, C, S],
                [b, m, S + 1],
                [b, C, S + 1],
              ]
            : T > 0
              ? [
                  [b + 1, m, S + 1],
                  [b + 1, C, S + 1],
                  [b + 1, m, S],
                  [b + 1, C, S],
                ]
              : A < 0
                ? [
                    [b + 1, m, S],
                    [b + 1, C, S],
                    [b, m, S],
                    [b, C, S],
                  ]
                : [
                    [b, m, S + 1],
                    [b, C, S + 1],
                    [b + 1, m, S + 1],
                    [b + 1, C, S + 1],
                  ];
        M.rawQuad(R, [T, 0, A], g.tex[1], x);
      }
    }
  return { opaque: s.build(), water: o.build(), lava: a.build() };
}
const E5 = new Map(),
  gm = 64,
  JW = { ox: 0, oz: 0, data: new Uint8Array(0), at: () => 15, skyAt: () => 15 };
function Fk(n, e = 0) {
  const t = `${n}:${e}`;
  if (E5.has(t)) return E5.get(t);
  const i = Ss(n),
    o = i4(
      {
        getBlock: (a, r, l) =>
          a === 0 && l === 0 && (r === gm || (i && r === gm + 1)) ? n : 0,
        getMeta: (a, r) => (r === gm + 1 ? e | Na : e),
        loaded: () => !0,
      },
      0,
      0,
      JW,
      !1,
      !0,
      1337,
      !0,
    ).opaque;
  return (
    o &&
      (o.translate(-0.5, -gm - 0.5, -0.5),
      o.computeBoundingBox(),
      o.computeBoundingSphere()),
    E5.set(t, o),
    o
  );
}
let Ip = 1;
const n4 = () => Ip;
function VT(n) {
  Ip = n;
}
const yt = (n) => Ip >= n,
  di = (n) => (Ip === 0 ? Math.max(5, n >> 1) : Ip === 1 ? n : n + 6);
let Pp = 0;
const eV = () => Pp;
function tV(n) {
  Pp = n;
}
const Wn = {
    uFxMaterials: { value: null },
    uFxWetness: { value: 0 },
    uFxCloudShadow: { value: null },
    uFxCloudShadowParams: { value: new fn(0, 0, 1, 0) },
    uFxCloudMidY: { value: 200 },
    uFxLightDir: { value: new k(0, 1, 0) },
    uFxSkyTint: { value: new ze(0.3, 0.45, 0.7) },
    uFxTime: { value: 0 },
    uFxSeaLevel: { value: $o - 0.125 },
    uFxWaterMap: { value: null },
    uFxWaterMapParams: { value: new fn(0, 0, 1, 0) },
    uFxCamUnderwater: { value: 0 },
    uFxWaterTint: { value: new ze(0.01, 0.06, 0.09) },
    uFxWaterClear: { value: 0 },
  },
  N2 = new k(0.26, 0.075, 0.055),
  s4 = { value: 0 },
  o4 = { value: 1.15 / 0.6 },
  Tg = { value: null },
  a4 = { value: 0.3 },
  r4 = `
float fxAdaptGain( sampler2D adapt, float key ) {
  float avg = exp( textureLod( adapt, vec2( 0.5 ), 0.0 ).r );
  // partial adaptation only: a sunset or a cave should still read darker than noon
  return clamp( pow( key / avg, 0.5 ), 0.6, 1.55 );
}
`,
  Gk = `
vec3 fxInverseDisplay( vec3 d, float exposure ) {
  vec3 y = clamp( pow( max( d, 0.0 ), vec3( 2.2 ) ), 0.0, 0.95 );
  vec3 A = y * 0.983729 - 1.0;
  vec3 B = y * 0.4329510 - 0.0245786;
  vec3 C = y * 0.238081 + 0.000090537;
  vec3 x = ( -B - sqrt( max( B * B - 4.0 * A * C, 0.0 ) ) ) / ( 2.0 * A );
  return max( x, 0.0 ) / exposure;
}
`,
  Wk = 29,
  Vk = 30,
  $k = { value: 1 },
  iV = {
    spec: 0.04,
    gloss: 0.22,
    emissive: 0,
    foliage: 0,
    relief: 0.8,
    porosity: 0.6,
  };
function nV(n) {
  const e = (...t) => t.some((i) => n.includes(i));
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
function sV() {
  const n = Array.from({ length: mi * mi }, () => ({ ...iV })),
    e = new Set(),
    t = new Map(),
    i = new Set();
  for (const c of de)
    if (!(!c || c.id === 0 || c.liquid))
      for (const h of c.tex)
        h < 0 ||
          h >= n.length ||
          (e.has(h) || (Object.assign(n[h], nV(c.name)), e.add(h)),
          c.light >= 10 && c.shape !== "furniture"
            ? t.set(h, Math.max(t.get(h) ?? 0, c.light / 15))
            : i.add(h));
  for (const [c, h] of t) i.has(c) || (n[c].emissive = h);
  ((n[31].emissive = 1),
    (n[fy].emissive = 0.8),
    (n[Qp].emissive = 1),
    (n[jc].emissive = 0.45));
  const s = mi * 2,
    o = mi,
    a = new Uint8Array(s * o * 4),
    r = (c) => Math.max(0, Math.min(255, Math.round(c * 255)));
  n.forEach((c, h) => {
    const d = h % mi,
      u = mi - 1 - Math.floor(h / mi),
      f = (u * s + d) * 4,
      p = (u * s + d + mi) * 4;
    ((a[f] = r(c.spec)),
      (a[f + 1] = r(c.gloss)),
      (a[f + 2] = r(c.emissive)),
      (a[f + 3] = r(c.foliage)),
      (a[p] = r(c.relief / 2)),
      (a[p + 1] = r(c.porosity)),
      (a[p + 2] = 0),
      (a[p + 3] = 255));
  });
  const l = new ay(a, s, o, po, Fo);
  return (
    (l.magFilter = ji),
    (l.minFilter = ji),
    (l.generateMipmaps = !1),
    (l.needsUpdate = !0),
    l
  );
}
function oV() {
  var n;
  return (n = Wn.uFxMaterials).value ?? (n.value = sV());
}
