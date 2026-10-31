// index-BeUlFSPp 50 — replace
// Lines 45721-46064 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Jq(s, e) {
  ((s.f.fillStyle = Ei(e)), s.f.fillRect(0, 0, ie, ie));
}
const O_ = new Map();
function lO(s) {
  let e = O_.get(s.id);
  if (e) return e;
  const t = ZS(),
    i = ZS(),
    n = {
      a: t.getContext("2d", { willReadFrequently: !0 }),
      f: i.getContext("2d", { willReadFrequently: !0 }),
    };
  return (
    (n.f.fillStyle = Ei(s.metal)),
    n.f.fillRect(0, 0, ie, ie),
    (P_[s.pattern] ?? P_.tigercamo)(n, s),
    (e = { albedo: t, fx: i }),
    O_.set(s.id, e),
    e
  );
}
let vp;
function eK() {
  if (vp) return vp;
  vp = ZS();
  const s = vp.getContext("2d", { willReadFrequently: !0 }),
    e = yi(901, 6, 5),
    t = s.createImageData(ie, ie),
    i = ls(903);
  for (let n = 0; n < ie; n++)
    for (let o = 0; o < ie; o++) {
      const a = (n * ie + o) * 4,
        r = Math.pow(e(o / ie, n / ie), 1.4) * 255;
      ((t.data[a] = r),
        (t.data[a + 1] = r),
        (t.data[a + 2] = r),
        (t.data[a + 3] = 255));
    }
  (s.putImageData(t, 0, 0),
    (s.strokeStyle = "rgba(255,255,255,.9)"),
    (s.lineCap = "round"));
  for (let n = 0; n < 220; n++) {
    const o = i() * ie,
      a = i() * ie,
      r = (i() - 0.5) * 0.7 + (i() < 0.5 ? 0 : Math.PI / 2),
      l = 8 + i() * 46;
    ((s.lineWidth = 0.6 + i() * 1.4),
      ys(o, a, l, (c, h) => {
        (s.beginPath(),
          s.moveTo(c, h),
          s.lineTo(c + Math.cos(r) * l, h + Math.sin(r) * l),
          s.stroke());
      }));
  }
  return vp;
}
const cO = { value: 0 },
  tK = {
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
    candle: 14,
    spectral: 15,
  },
  N_ = new Map();
let hO;
function Rb(s, e) {
  const t = new Si(s);
  return (
    (t.wrapS = t.wrapT = Nl),
    (t.colorSpace = e ? Ii : uc),
    (t.anisotropy = 4),
    (t.generateMipmaps = !0),
    (t.minFilter = za),
    (t.magFilter = pn),
    t
  );
}
function iK(s) {
  let e = N_.get(s.id);
  if (!e) {
    const t = lO(s);
    ((e = { albedo: Rb(t.albedo, !0), fx: Rb(t.fx, !1) }), N_.set(s.id, e));
  }
  return ((hO ??= Rb(eK(), !1)), e);
}
const sK = `
uniform mat4 uSkinMatrix;
varying vec3 vSkinPos;
varying vec3 vSkinNrm;
`,
  nK = `
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
function oK(s, e, t, i, n, o = 1) {
  const a = iK(e),
    r = s,
    l = new oo({
      color: 16777215,
      specular: 4210752,
      shininess: 30,
      side: r.side,
      flatShading: !!r.flatShading,
    }),
    c = r.color ? r.color.r * 0.3 + r.color.g * 0.55 + r.color.b * 0.15 : 0.4,
    h = tK[e.fx] ?? 0,
    d = {
      uSkinMatrix: { value: t.clone() },
      uSkinAlbedo: { value: a.albedo },
      uSkinFx: { value: a.fx },
      uSkinWearTex: { value: hO },
      uSkinScale: { value: 1.45 * (e.scale ?? 1) * o },
      uSkinSeed: { value: new ct((n % 97) / 97, (n % 89) / 89) },
      uSkinWear: { value: i },
      uSkinTime: cO,
      uSkinTone: { value: c },
      uGlowA: { value: new Ge(e.glow?.[0] ?? e.colors[2]) },
      uGlowB: { value: new Ge(e.glow?.[1] ?? e.colors[3] ?? e.colors[2]) },
    };
  return (
    (l.userData.skin = { finish: e.id, uniforms: d }),
    (l.customProgramCacheKey = () => `weapon-skin-v1-${h}`),
    (l.onBeforeCompile = (u) => {
      (Object.assign(u.uniforms, d),
        (u.defines = { ...(u.defines ?? {}), SKIN_MODE: h }),
        (u.vertexShader =
          sK +
          u.vertexShader.replace(
            "#include <project_vertex>",
            `
      vSkinPos = (uSkinMatrix * vec4(transformed, 1.0)).xyz;
      vSkinNrm = normalize(mat3(uSkinMatrix) * objectNormal);
      #include <project_vertex>`,
          )),
        (u.fragmentShader =
          nK +
          u.fragmentShader
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
        #elif SKIN_MODE == 14
          // candle: every carving burns with its own small flame (phase in fx.b), a flicker that
          // never pulses in step with the next one, brightest at the heart of the cut
          float cph = skinFx.b * 37.0;
          float flick = 0.62 + 0.22 * sin(skinT * 11.0 + cph) + 0.12 * sin(skinT * 23.0 + cph * 1.7) + 0.1 * skinNoise(vec3(skinT * 3.0, cph, 0.0));
          float dip = step(0.965, skinHash(floor(skinT * 6.0) + cph)) * 0.35;
          skinGlow = skinFx.g * mix(uGlowA, uGlowB, skinFx.g * skinFx.g) * (0.7 + 1.3 * flick - dip);
        #elif SKIN_MODE == 15
          // spectral: pale shapes drift upward under the surface and fade, the bone glows faintly
          float rise15 = skinNoise(vec3(skinP.z * 2.6, skinP.y * 3.5 - skinT * 0.55, skinP.x * 2.6)) * 0.7
                       + skinNoise(vec3(skinP.z * 6.0 + 4.0, skinP.y * 7.0 - skinT * 0.9, skinP.x * 5.0)) * 0.3;
          float wisp = smoothstep(0.58, 0.86, rise15) * (0.55 + 0.45 * sin(skinT * 0.8 + skinFx.b * 6.28));
          skinGlow = skinFx.g * uGlowA * (0.35 + 0.15 * sin(skinT * 1.3 + skinP.z * 3.0)) + uGlowB * wisp * (0.25 + skinFx.g * 1.6);
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
function aK(s, e, t) {
  const i = s.userData.skin?.uniforms;
  i &&
    ((i.uSkinWear.value = e),
    i.uSkinSeed.value.set((t % 97) / 97, (t % 89) / 89));
}
const ou = new Map();
