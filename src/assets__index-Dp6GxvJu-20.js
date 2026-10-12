// assets__index-Dp6GxvJu 20 — replace
// Lines 34624-34969 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
function bU(n, e) {
  ((n.f.fillStyle = Vi(e)), n.f.fillRect(0, 0, we, we));
}
const tT = new Map();
function XC(n) {
  let e = tT.get(n.id);
  if (e) return e;
  const t = vw(),
    i = vw(),
    s = {
      a: t.getContext("2d", { willReadFrequently: !0 }),
      f: i.getContext("2d", { willReadFrequently: !0 }),
    };
  return (
    (s.f.fillStyle = Vi(n.metal)),
    s.f.fillRect(0, 0, we, we),
    (eT[n.pattern] ?? eT.tigercamo)(s, n),
    (e = { albedo: t, fx: i }),
    tT.set(n.id, e),
    e
  );
}
let Wu;
function wU() {
  if (Wu) return Wu;
  Wu = vw();
  const n = Wu.getContext("2d", { willReadFrequently: !0 }),
    e = ki(901, 6, 5),
    t = n.createImageData(we, we),
    i = En(903);
  for (let s = 0; s < we; s++)
    for (let o = 0; o < we; o++) {
      const a = (s * we + o) * 4,
        r = Math.pow(e(o / we, s / we), 1.4) * 255;
      ((t.data[a] = r),
        (t.data[a + 1] = r),
        (t.data[a + 2] = r),
        (t.data[a + 3] = 255));
    }
  (n.putImageData(t, 0, 0),
    (n.strokeStyle = "rgba(255,255,255,.9)"),
    (n.lineCap = "round"));
  for (let s = 0; s < 220; s++) {
    const o = i() * we,
      a = i() * we,
      r = (i() - 0.5) * 0.7 + (i() < 0.5 ? 0 : Math.PI / 2),
      l = 8 + i() * 46;
    ((n.lineWidth = 0.6 + i() * 1.4),
      On(o, a, l, (c, h) => {
        (n.beginPath(),
          n.moveTo(c, h),
          n.lineTo(c + Math.cos(r) * l, h + Math.sin(r) * l),
          n.stroke());
      }));
  }
  return Wu;
}
const ZC = { value: 0 },
  MU = {
    none: 0,
    pulse: 1,
    flow: 2,
    holo: 3,
    galaxy: 4,
    lava: 5,
    electric: 6,
    glitch: 7,
    aurora: 8,
    sparkle: 9,
    synth: 10,
    frost: 11,
    inferno: 12,
    arcane: 13,
  },
  iT = new Map();
let QC;
function u5(n, e) {
  const t = new bi(n);
  return (
    (t.wrapS = t.wrapT = Fr),
    (t.colorSpace = e ? vi : xl),
    (t.anisotropy = 4),
    (t.generateMipmaps = !0),
    (t.minFilter = Uo),
    (t.magFilter = Jn),
    t
  );
}
function SU(n) {
  let e = iT.get(n.id);
  if (!e) {
    const t = XC(n);
    ((e = { albedo: u5(t.albedo, !0), fx: u5(t.fx, !1) }), iT.set(n.id, e));
  }
  return (QC ?? (QC = u5(wU(), !1)), e);
}
const EU = `
uniform mat4 uSkinMatrix;
varying vec3 vSkinPos;
varying vec3 vSkinNrm;
`,
  xU = `
uniform sampler2D uSkinAlbedo;
uniform sampler2D uSkinFx;
uniform sampler2D uSkinWearTex;
uniform float uSkinScale;
uniform vec2 uSkinSeed;
uniform float uSkinWear;
uniform float uSkinTime;
uniform float uSkinTone;
uniform vec3 uGlowA;
uniform vec3 uGlowB;
varying vec3 vSkinPos;
varying vec3 vSkinNrm;
vec3 skinW;
vec3 skinP;
float skinHash(float n){ return fract(sin(n) * 43758.5453); }
float skinHash2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float skinNoise(vec3 p){
  vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  float n = i.x + i.y * 57.0 + i.z * 113.0;
  return mix(mix(mix(skinHash(n), skinHash(n + 1.0), f.x), mix(skinHash(n + 57.0), skinHash(n + 58.0), f.x), f.y),
             mix(mix(skinHash(n + 113.0), skinHash(n + 114.0), f.x), mix(skinHash(n + 170.0), skinHash(n + 171.0), f.x), f.y), f.z);
}
vec3 skinSide;
// Tri-planar sample: side faces (normal ±X) map the barrel axis (z) to u. Each axis flips u by
// the face's side so text and directional art read correctly from both sides of the weapon.
vec4 skinTri(sampler2D t, vec3 p){
  return texture2D(t, vec2(-p.z * skinSide.x, p.y) + uSkinSeed) * skinW.x
       + texture2D(t, vec2(p.x, -p.z * skinSide.y) + uSkinSeed.yx) * skinW.y
       + texture2D(t, vec2(p.x * skinSide.z, p.y) + uSkinSeed) * skinW.z;
}
`;
function TU(n, e, t, i, s, o = 1) {
  var u, f;
  const a = SU(e),
    r = n,
    l = new Us({
      color: 16777215,
      specular: 4210752,
      shininess: 30,
      side: r.side,
      flatShading: !!r.flatShading,
    }),
    c = r.color ? r.color.r * 0.3 + r.color.g * 0.55 + r.color.b * 0.15 : 0.4,
    h = MU[e.fx] ?? 0,
    d = {
      uSkinMatrix: { value: t.clone() },
      uSkinAlbedo: { value: a.albedo },
      uSkinFx: { value: a.fx },
      uSkinWearTex: { value: QC },
      uSkinScale: { value: 1.45 * (e.scale ?? 1) * o },
      uSkinSeed: { value: new tt((s % 97) / 97, (s % 89) / 89) },
      uSkinWear: { value: i },
      uSkinTime: ZC,
      uSkinTone: { value: c },
      uGlowA: {
        value: new ze(((u = e.glow) == null ? void 0 : u[0]) ?? e.colors[2]),
      },
      uGlowB: {
        value: new ze(
          ((f = e.glow) == null ? void 0 : f[1]) ?? e.colors[3] ?? e.colors[2],
        ),
      },
    };
  return (
    (l.userData.skin = { finish: e.id, uniforms: d }),
    (l.customProgramCacheKey = () => `weapon-skin-v1-${h}`),
    (l.onBeforeCompile = (p) => {
      (Object.assign(p.uniforms, d),
        (p.defines = { ...(p.defines ?? {}), SKIN_MODE: h }),
        (p.vertexShader =
          EU +
          p.vertexShader.replace(
            "#include <project_vertex>",
            `
      vSkinPos = (uSkinMatrix * vec4(transformed, 1.0)).xyz;
      vSkinNrm = normalize(mat3(uSkinMatrix) * objectNormal);
      #include <project_vertex>`,
          )),
        (p.fragmentShader =
          xU +
          p.fragmentShader
            .replace(
              "#include <map_fragment>",
              `#include <map_fragment>
        skinW = pow(abs(normalize(vSkinNrm)), vec3(6.0)); skinW /= max(dot(skinW, vec3(1.0)), 1e-4);
        skinSide = vec3(vSkinNrm.x < 0.0 ? -1.0 : 1.0, vSkinNrm.y < 0.0 ? -1.0 : 1.0, vSkinNrm.z < 0.0 ? -1.0 : 1.0);
        skinP = vSkinPos * uSkinScale;
        #if SKIN_MODE == 7
          // glitch: time-quantised horizontal tears
          float gT = floor(uSkinTime * 9.0), gRow = floor(skinP.y * 18.0);
          skinP.z += step(0.9, skinHash(gRow * 7.13 + gT)) * (skinHash(gRow + gT * 3.1) - 0.5) * 0.35;
        #endif
        vec4 skinFx = skinTri(uSkinFx, skinP);
        vec3 skinAlbedo = skinTri(uSkinAlbedo, skinP).rgb;
        #if SKIN_MODE == 7
          skinAlbedo.r = mix(skinAlbedo.r, skinTri(uSkinAlbedo, skinP + vec3(0.0, 0.0, 0.012)).r, 0.8);
          skinAlbedo.b = mix(skinAlbedo.b, skinTri(uSkinAlbedo, skinP - vec3(0.0, 0.0, 0.012)).b, 0.8);
        #endif
        float skinMetal = skinFx.r;
        // Keep the original part contrast: rubber grips and magazines read darker than receivers.
        skinAlbedo *= mix(0.6, 1.06, smoothstep(0.03, 0.32, uSkinTone));
        // Wear: scratches reveal bare steel first, then the coat thins. Even a battle-scarred
        // serial keeps most of its paint (at most ~45% bare, as in CS): stripping the whole gun
        // to bright steel read as a white glow, worst under the shader pack's HDR and bloom.
        float wearField = skinTri(uSkinWearTex, skinP * 0.73).r;
        float wearEdge = 1.0 - uSkinWear * 0.45;
        float worn = smoothstep(wearEdge, wearEdge + 0.05, wearField) * step(0.005, uSkinWear);
        // dark blued gunmetal, the way a scuffed rifle really looks, not polished chrome
        skinAlbedo = mix(skinAlbedo, vec3(0.17, 0.175, 0.185) * (0.75 + 0.4 * wearField), worn);
        skinAlbedo *= 1.0 - uSkinWear * 0.18 * (1.0 - wearField);
        skinMetal = mix(skinMetal, 0.62, worn);
        diffuseColor.rgb = skinAlbedo;`,
            )
            .replace(
              "#include <specularmap_fragment>",
              `#include <specularmap_fragment>
        specularStrength = mix(0.22, 1.0, skinMetal);`,
            )
            .replace(
              "#include <emissivemap_fragment>",
              `#include <emissivemap_fragment>
        // entity fill light carries the paint colour instead of washing the model white
        totalEmissiveRadiance *= skinAlbedo;
        vec3 skinGlow = vec3(0.0);
        float skinT = uSkinTime;
        #if SKIN_MODE == 1
          float beat = pow(abs(sin(skinT * 2.4)), 10.0) + 0.6 * pow(abs(sin(skinT * 2.4 + 0.45)), 16.0);
          skinGlow = skinFx.g * mix(uGlowA, uGlowB, beat) * (0.55 + 1.6 * beat);
        #elif SKIN_MODE == 2
          float lane = fract(skinP.z * 1.2 - skinT * 0.55 + skinNoise(floor(skinP * 6.0)) * 0.6);
          float pulse = smoothstep(0.82, 0.97, lane) * (1.0 - smoothstep(0.97, 1.0, lane));
          skinGlow = skinFx.g * (uGlowA * 0.55 + uGlowB * pulse * 3.0 + uGlowA * pulse * 1.5);
        #elif SKIN_MODE == 4
          float tw = 0.5 + 0.5 * sin(skinT * 3.0 + skinHash2(floor(skinP.zy * 40.0)) * 6.28);
          skinGlow = skinFx.g * mix(uGlowA, uGlowB, tw) * (0.6 + tw);
        #elif SKIN_MODE == 5
          float heat = skinNoise(skinP * 7.0 + vec3(0.0, skinT * 0.35, -skinT * 0.5)) * 0.6 + skinNoise(skinP * 15.0 - vec3(skinT * 0.6)) * 0.4;
          float lava = skinFx.g * (0.45 + heat * 0.9);
          skinGlow = mix(uGlowA, uGlowB, smoothstep(0.35, 1.0, lava)) * lava * 2.6;
          diffuseColor.rgb = mix(diffuseColor.rgb, uGlowA * 0.4, skinFx.g * 0.6);
        #elif SKIN_MODE == 6
          float strike = step(0.88, fract(skinT * 0.45 + skinFx.b * 3.7)) * (0.6 + 0.4 * skinHash(floor(skinT * 24.0)));
          float idle = 0.25 + 0.15 * sin(skinT * 7.0 + skinFx.b * 20.0);
          skinGlow = skinFx.g * (uGlowA * idle + uGlowB * strike * 3.5);
        #elif SKIN_MODE == 7
          float burst = step(0.82, skinHash(floor(skinT * 9.0)));
          skinGlow = skinFx.g * mix(uGlowA, uGlowB, step(0.5, skinFx.b)) * (0.7 + 1.4 * burst);
        #elif SKIN_MODE == 8
          float wave = 0.5 + 0.5 * sin(skinP.z * 3.0 + skinT * 0.9 + skinFx.b * 6.28);
          skinGlow = skinFx.g * mix(uGlowA, uGlowB, wave) * (0.55 + 0.45 * sin(skinT * 1.4 + skinP.y * 9.0));
        #elif SKIN_MODE == 9
          // Rare point glints: one candidate per cell, most cells never light up.
          vec2 gCell = skinP.zy * 26.0 + skinP.x * 7.0, gId = floor(gCell), gF = fract(gCell) - 0.5;
          float gRand = skinHash2(gId);
          float gStar = smoothstep(0.16, 0.0, length(gF + (vec2(skinHash2(gId + 3.1), skinHash2(gId + 7.7)) - 0.5) * 0.5));
          float glint = step(0.9, gRand) * gStar * pow(max(0.0, sin(skinT * 1.7 + gRand * 60.0)), 12.0);
          skinGlow = skinFx.b * uGlowB * glint * 6.0 + skinFx.g * uGlowA * 0.35;
        #elif SKIN_MODE == 10
          float scan = smoothstep(0.92, 1.0, fract(skinP.z * 0.8 - skinT * 0.4));
          skinGlow = skinFx.g * mix(uGlowA, uGlowB, skinFx.b) * (0.75 + 0.25 * sin(skinT * 4.0) + scan * 2.0);
        #elif SKIN_MODE == 11
          skinGlow = skinFx.g * uGlowA * (0.3 + 0.2 * sin(skinT * 1.6 + skinP.z * 5.0));
        #elif SKIN_MODE == 12
          // inferno: heat rolls up the coat, plumage flares and embers rise off the surface
          float rise = skinNoise(vec3(skinP.z * 3.0, skinP.y * 5.0 - skinT * 1.4, skinP.x * 3.0)) * 0.65
                     + skinNoise(vec3(skinP.z * 8.0, skinP.y * 11.0 - skinT * 2.6, skinP.x * 6.0)) * 0.35;
          skinGlow = skinFx.g * mix(uGlowA, uGlowB, smoothstep(0.35, 0.95, rise + skinFx.b * 0.25)) * (0.5 + 1.5 * rise);
          vec2 eC = vec2(skinP.z * 16.0 + skinP.x * 5.0, skinP.y * 16.0 - skinT * 2.4), eId = floor(eC), eF = fract(eC) - 0.5;
          float ember = step(0.94, skinHash2(eId)) * smoothstep(0.2, 0.0, length(eF)) * (0.5 + 0.5 * sin(skinT * 9.0 + skinHash2(eId + 1.7) * 30.0));
          skinGlow += uGlowB * ember * 2.6;
        #elif SKIN_MODE == 13
          // arcane: a wave of light writes each rune in turn, then it settles to a soft burn
          float wv = fract(skinFx.b - skinT * 0.22);
          float writeOn = smoothstep(0.0, 0.05, wv) * (1.0 - smoothstep(0.05, 0.45, wv));
          float breathe = 0.4 + 0.15 * sin(skinT * 1.8 + skinP.z * 4.0);
          skinGlow = skinFx.g * (mix(uGlowA, uGlowB, writeOn) * breathe + uGlowB * writeOn * 3.2);
        #endif
        totalEmissiveRadiance += skinGlow;`,
            )
            .replace(
              "#include <lights_phong_fragment>",
              `#include <lights_phong_fragment>
        material.specularShininess = mix(14.0, 110.0, skinMetal);
        material.specularColor = mix(vec3(0.18), skinAlbedo * 1.15 + 0.08, skinMetal);
        material.diffuseColor *= 1.0 - skinMetal * 0.55;`,
            )
            .replace(
              "#include <opaque_fragment>",
              `
        {
          // Fake studio environment so polished coats read as metal without an env map. It is
          // scaled by the light actually reaching the surface (dark at night, bright at noon).
          vec3 skinV = normalize(vViewPosition);
          // The paint's own luminance acts as a shallow relief, so a flat box face shows the
          // pattern catching the light instead of one uniform reflection.
          float skinBump = dot(skinAlbedo, vec3(0.3, 0.55, 0.15)) - 0.35;
          vec3 skinN = normalize(normal + vec3(dFdx(skinBump), dFdy(skinBump), 0.0) * -6.0);
          vec3 skinR = reflect(-skinV, skinN);
          float skinUp = skinR.y + skinBump * 0.25;
          vec3 skinEnv = mix(vec3(0.08, 0.075, 0.07), vec3(0.62, 0.68, 0.78), smoothstep(-0.3, 0.7, skinUp));
          skinEnv += vec3(0.5) * smoothstep(0.2, 0.95, skinR.z);
          skinEnv += vec3(1.1, 1.0, 0.88) * pow(max(0.0, 1.0 - abs(skinUp - 0.22) * 2.6), 4.0) * 0.75;
          skinEnv += vec3(1.6) * pow(max(0.0, dot(skinR, normalize(vec3(-0.5, 0.6, 0.62)))), 36.0);
          skinEnv += vec3(0.6, 0.75, 0.9) * pow(max(0.0, dot(skinR, normalize(vec3(0.7, 0.2, 0.5)))), 12.0) * 0.6;
          float skinFres = pow(1.0 - max(dot(skinN, skinV), 0.0), 4.0);
          vec3 lit = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
          float skinLight = clamp(dot(lit, vec3(0.333)) / max(dot(material.diffuseColor, vec3(0.333)), 0.03), 0.04, 1.1);
          // dark paints keep their depth: the reflection is tinted by the coat and scales with its metal
          outgoingLight += skinEnv * mix(skinAlbedo, vec3(1.0), 0.06 + skinFres * 0.4 * skinMetal) * (skinMetal * skinMetal * 0.95 + skinFres * 0.18) * skinLight;
          #if SKIN_MODE == 3 || SKIN_MODE == 11 || SKIN_MODE == 0 || SKIN_MODE == 9
            float iridMask = SKIN_MODE == 9 ? 0.0 : skinFx.b;
            vec3 irid = 0.5 + 0.5 * cos(6.2831 * (skinFres * 1.6 + dot(skinP, vec3(0.6, 1.1, 0.4)) * 0.35 + skinT * 0.04 + vec3(0.0, 0.33, 0.67)));
            outgoingLight += irid * iridMask * (0.12 + 0.7 * skinFres) * skinLight;
          #endif
          #if SKIN_MODE == 4
            // a second, parallax-shifted star layer gives the coat depth
            vec3 skinPar = skinP + vec3(skinV.x, skinV.y, -skinV.x) * 0.06;
            float deep = skinTri(uSkinFx, skinPar * 1.7).b;
            outgoingLight += uGlowB * deep * deep * 0.5 * (0.6 + 0.4 * sin(skinT * 2.0 + skinPar.z * 30.0));
          #endif
        }
        #include <opaque_fragment>`,
            )));
    }),
    l
  );
}
function AU(n, e, t) {
  var s;
  const i = (s = n.userData.skin) == null ? void 0 : s.uniforms;
  i &&
    ((i.uSkinWear.value = e),
    i.uSkinSeed.value.set((t % 97) / 97, (t % 89) / 89));
}
const Z0 = new Map();
function JC(n) {
  const e = document.createElement("canvas");
  e.width = e.height = 48;
  const t = e.getContext("2d");
  for (let i = 0; i < 2304; i++)
    ((t.fillStyle = Vc[parseInt(n[i], 32)] ?? Vc[0]),
      t.fillRect(i % 48, Math.floor(i / 48), 1, 1));
  return e;
}
