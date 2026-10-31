// index-BeUlFSPp 222 — math
// Lines 114630-117201 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class X1 {
  constructor(e, t) {
    ((this.scene = e),
      (this.atlasTex = t),
      (this.signs = new Tre(e, this)),
      (this.opaqueMat = new Pi({ map: t, vertexColors: !0, alphaTest: 0.5 })),
      (this.aviationLights = new pZ(e, (i, n) => Df(this.seed, i, n))),
      (this.chestLids = new _re(e, this.opaqueMat, {
        getBlock: (i, n, o) => this.getBlock(i, n, o),
        lighting: (i, n, o) => this.doorLighting(i, n, o),
        onSlam: (i, n, o, a, r) => this.onChestSlam?.(i, n, o, a, r),
      })),
      (this.opaqueMat.customProgramCacheKey = () =>
        Qj("fc-chunk-opaque-sky-v4")),
      (this.opaqueMat.onBeforeCompile = (i) => {
        ((i.uniforms.uTime = { value: 0 }),
          (i.uniforms.uWind = { value: this.wind.clone() }),
          (i.uniforms.uEnvironment = { value: this.environmentDetail }),
          (i.uniforms.uWindSway = { value: this.windSway }),
          (i.vertexShader = (
            `uniform float uTime;
uniform vec2 uWind;
uniform float uEnvironment;
uniform float uWindSway;
` + i.vertexShader
          )
            .replace(
              "#include <common>",
              `attribute float skylight;
varying float vSkyLight;
attribute float blocklight;
attribute float anim;
varying float vBlockLight;
varying float vAnim;
varying float vFlamePhase;
#include <common>`,
            )
            .replace(
              "#include <begin_vertex>",
              `#include <begin_vertex>
           vSkyLight = skylight;
           vBlockLight = blocklight;
           vAnim = anim;
           // Per-block phase so neighbouring fires never flicker in lockstep. Derived from the
           // column only: a card's top corners sit at y+1.02, so including y would floor to a
           // different cell than its base and shear the phase across the quad.
           vFlamePhase = floor(position.x) * 1.7 + floor(position.z) * 2.9;
           // A light breeze even on a still day, stronger and gustier with the weather's wind.
           // Gusts travel across the landscape (the phase follows world position), so a meadow
           // ripples in waves instead of every blade nodding in unison.
           // The bias keeps the direction continuous while the eased wind passes near zero.
           vec2 windDir = normalize(uWind + vec2(0.8, 0.6) * 0.04);
           float windStrength = clamp(0.45 + length(uWind) * 1.6, 0.45, 1.6);
           // Gust fronts travel along a fixed axis: a phase built from dot(position, windDir)
           // jumps by hundreds of radians at large coordinates whenever the wind turns slightly.
           float gustWave = 0.5 + 0.5 * sin(uTime * 0.85 - dot(position.xz, vec2(0.8, 0.6)) * 0.19);
           if (anim > 5.5) {
             // Grass, flowers, crops and bushes: the base is planted, the tip bends downwind and
             // flutters. Tips only — anim 6 is the base edge, anim 7 the top edge.
             float tip = step(6.5, anim) * uWindSway;
             float flutter = sin(uTime * 3.4 + vFlamePhase * 1.9 + position.y * 2.1);
             float bend = (0.05 + gustWave * 0.11) * windStrength;
             transformed.xz += tip * (windDir * bend + vec2(flutter, -flutter * 0.7) * 0.022);
             transformed.y -= tip * bend * 0.18;
           } else if (anim > 3.5) {
             // Underwater growth (kelp, seagrass): a slow, wide swell rather than a flicker. The
             // whole frond leans — a stalk is anchored, not rigid — but the tip travels several
             // times further than the root, and the phase climbs with height so a tall column
             // ripples along its length instead of swinging as one board.
             float tip = step(4.5, anim);
             float phase = vFlamePhase * 0.5 + position.y * 0.85;
             transformed.x += sin(uTime * 0.8 + phase) * (0.016 + tip * 0.15);
             transformed.z += cos(uTime * 0.62 + phase * 1.21) * (0.014 + tip * 0.12);
           } else if (anim > 0.5 && anim < 2.5) {
             float tip = step(1.5, anim);   // only the top edge moves; the base stays planted
             transformed.x += sin(uTime * 3.0 + vFlamePhase) * 0.055 * tip;
             transformed.z += cos(uTime * 2.6 + vFlamePhase * 1.3) * 0.045 * tip;
           } else if (anim > 2.5 && anim < 3.5 && uWindSway > 0.5) {
             // Canopy: whole crowns lean with the travelling gust and rustle on top of it. The
             // offset is a pure function of the vertex position, so leaf blocks that share a
             // corner move together and the crown never cracks open.
             float rustle = sin(uTime * 2.7 + position.x * 1.3 + position.y * 0.9 + position.z * 1.7);
             float detail = mix(0.6, 1.0, step(1.5, uEnvironment));
             transformed.xz += (windDir * (0.03 + gustWave * 0.07) * windStrength + vec2(rustle, -rustle) * 0.018) * detail;
             transformed.y += sin(uTime * 2.1 + position.x * 0.7 + position.z * 1.1) * 0.012 * detail;
           }`,
            )),
          (i.fragmentShader = (
            `uniform float uTime;
` + i.fragmentShader
          )
            .replace(
              "#include <common>",
              cE +
                `varying float vSkyLight;
varying float vBlockLight;
varying float vAnim;
varying float vFlamePhase;
#include <common>`,
            )
            .replace(
              "#include <map_fragment>",
              `#ifdef USE_MAP
             if (vAnim > 0.5 && vAnim < 2.5) {
               vec2 cell = floor(vMapUv * ${Ni}.0);
               vec2 local = vMapUv * ${Ni}.0 - cell;
               local = (local - 0.02) / 0.96;
               vec4 flame = fcFlame(local, uTime, vFlamePhase);
               diffuseColor *= flame;
             } else {
               diffuseColor *= texture2D(map, vMapUv);
             }
           #endif`,
            )
            .replace(
              "#include <lights_fragment_end>",
              `#include <lights_fragment_end>
vec3 blockGlow = diffuseColor.rgb * vBlockLight * vec3(1.0, 0.88, 0.62);
float litSoFar = dot(reflectedLight.directDiffuse + reflectedLight.indirectDiffuse, vec3(0.333));
float glowHeadroom = clamp(1.0 - litSoFar, 0.0, 1.0);
reflectedLight.indirectDiffuse += blockGlow * glowHeadroom;`,
            )),
          (i.fragmentShader = Fv(i.fragmentShader, "vSkyLight")),
          sX(i, "vSkyLight"),
          (this.opaqueShader = i));
      }),
      (this.waterMat = new Pi({
        map: t,
        vertexColors: !0,
        transparent: !0,
        opacity: 0.8,
        depthWrite: !1,
        side: Mi,
      })),
      (this.waterMat.customProgramCacheKey = () => "fc-water-azure-v4"),
      (this.waterMat.onBeforeCompile = (i) => {
        ((i.uniforms.uTime = { value: 0 }),
          (i.uniforms.uSunDir = { value: new k(0, 1, 0) }),
          (i.uniforms.uSunColor = { value: new Ge(1, 0.95, 0.85) }),
          (i.uniforms.uSkyColor = { value: new Ge(0.45, 0.68, 0.95) }),
          (i.uniforms.uWaveAmp = { value: 1 }),
          (i.uniforms.uReflect = { value: 1 }),
          (i.uniforms.uGlint = { value: 1 }),
          (i.uniforms.uDayness = { value: 1 }),
          (i.uniforms.uReflection = { value: null }),
          (i.uniforms.uReflectionMatrix = { value: new Rt() }),
          (i.uniforms.uPlanar = { value: 0 }),
          (i.uniforms.uFxWaterClear = Zs.uFxWaterClear),
          (i.vertexShader = (
            `attribute float azureWater; varying float vAzureWater;
uniform float uTime;
uniform float uWaveAmp;
uniform mat4 uReflectionMatrix;
varying vec3 vWorldPos;
varying vec3 vWaterNormal;
varying float vWaterSurface;
varying vec2 vWave;
varying vec4 vReflectionCoord;
` + i.vertexShader
          ).replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
           vAzureWater = azureWater;
           float pA = position.x * 0.90 + position.z * 0.35 + uTime * 1.90;
           float pB = position.z * 0.70 - position.x * 0.25 + uTime * 1.35;
           float pC = (position.x + position.z) * 1.90 + uTime * 3.10;
           float aA = 0.034 * uWaveAmp, aB = 0.028 * uWaveAmp, aC = 0.011 * uWaveAmp;
           // Only horizontal surfaces carry waves. Applying vertical displacement to every
           // side vertex made waterfall columns tear into horizontal seams when neighbouring
           // quads were blended at different depths.
           float waterSurface = step(0.7, normal.y);
           transformed.y += waterSurface * (sin(pA) * aA + sin(pB) * aB + sin(pC) * aC);
           vWaterSurface = waterSurface;
           vWaterNormal = normalize(mat3(modelMatrix) * normal);
           vWave = vec2(
             cos(pA) * 0.90 * aA - cos(pB) * 0.25 * aB + cos(pC) * 1.90 * aC,
             cos(pA) * 0.35 * aA + cos(pB) * 0.70 * aB + cos(pC) * 1.90 * aC) * waterSurface;
           vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
           vReflectionCoord = uReflectionMatrix * vec4(vWorldPos, 1.0);`,
          )),
          (i.fragmentShader = (
            `uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyColor;
uniform float uReflect;
uniform float uGlint;
uniform float uDayness;
uniform float uWaveAmp;
uniform float uTime;
uniform sampler2D uReflection;
uniform float uPlanar;
uniform float uFxWaterClear;
varying vec3 vWorldPos;
varying vec3 vWaterNormal;
varying float vWaterSurface;
varying vec2 vWave;
varying vec4 vReflectionCoord;
` + i.fragmentShader
          )
            .replace(
              "#include <map_fragment>",
              `#include <map_fragment>
           // The atlas tile is authored for a top-down surface. Sampling it independently on
           // every waterfall cell repeats its wave crests and exposes a visible grid on the
           // vertical wall, so use a continuous world-space tint for side faces instead.
           // Saturated azure body water in the archipelago, blended smoothly into ocean water.
           // Applied before lighting so nighttime and indoor water remain dark.
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.012, 0.42, 0.62), vAzureWater * 0.88);
           if (vWaterSurface < 0.5) {
             float sideBands = 0.5 + 0.5 * sin(vWorldPos.y * 2.35 + uTime * 2.4 + vWorldPos.x * 0.31 + vWorldPos.z * 0.19);
             vec3 sideWater = mix(vec3(0.035, 0.19, 0.42), vec3(0.075, 0.36, 0.68), sideBands * 0.34);
             diffuseColor.rgb = mix(sideWater, vec3(0.008, 0.30, 0.48), vAzureWater);
           }`,
            )
            .replace(
              "#include <opaque_fragment>",
              `{
           vec3 viewDir = normalize(cameraPosition - vWorldPos);

           // The wave mesh has one vertex per block, so everything finer than a block has to be
           // synthesised here. Four capillary ripples at high frequency, evaluated per pixel,
           // give the surface detail the geometry cannot carry — and because the normal is
           // per-pixel, the sun breaks into a field of moving sparkles instead of one smear.
           vec2 rp = vWorldPos.xz;
           float q1 = rp.x * 5.70 + rp.y * 3.10 + uTime * 3.40;
           float q2 = rp.y * 6.30 - rp.x * 2.70 + uTime * 2.60;
           float q3 = (rp.x + rp.y) * 9.10 - uTime * 4.70;
           float q4 = (rp.x - rp.y) * 13.30 + uTime * 5.90;
           vec2 fine = vec2(
             cos(q1) * 5.70 - cos(q2) * 2.70 + cos(q3) * 9.10 + cos(q4) * 13.30,
             cos(q1) * 3.10 + cos(q2) * 6.30 + cos(q3) * 9.10 - cos(q4) * 13.30) * 0.0011 * uWaveAmp * vWaterSurface;

           // Fade subpixel capillary detail to avoid sparkling aliasing on mobile screens.
           fine *= 1.0-smoothstep(0.35,2.2,max(fwidth(q3),fwidth(q4)));
           vec3 waveNormal = normalize(vec3(-(vWave.x + fine.x) * 7.0, 1.0, -(vWave.y + fine.y) * 7.0));
           vec3 wn = normalize(mix(vWaterNormal, waveNormal, vWaterSurface));
           // Schlick Fresnel: near-vertical views see through, grazing views mirror the sky
           float fres = pow(clamp(1.0 - max(dot(viewDir, wn), 0.0), 0.0, 1.0), 4.0);
           fres = (0.02 + 0.85 * fres) * uReflect * mix(0.62, 1.0, vWaterSurface);
           // three lobes: a pinpoint mirror of the sun's disc, a tight sparkle off the capillary
           // ripples, and a broad sheen over the swell so the highlight is never one hard dot
           vec3 halfDir = normalize(uSunDir + viewDir);
           float ndh = max(dot(wn, halfDir), 0.0);
           float spec = (pow(ndh, 420.0) * 3.0 + pow(ndh, 120.0) * 0.9 + pow(ndh, 20.0) * 0.16) * vWaterSurface;
           float upness = max(dot(wn, vec3(0.0, 1.0, 0.0)), 0.0);
           float daylight = clamp(uDayness, 0.0, 1.0);
           // At night the water body should become a deep cold blue rather than retaining the
           // daytime teal. Moonlight still catches the ripples, but the broad sun sparkle and
           // shallow-water caustics fade with the sky's available light.
           vec3 deep = mix(vec3(0.006, 0.020, 0.052), mix(vec3(0.02, 0.10, 0.16), vec3(0.006, 0.24, 0.38), vAzureWater), daylight);

           // Body colour, from how much water the view ray passes through (Beer-Lambert-ish).
           //
           // Fresnel alone is not enough: looking straight down it falls to ~2%, so the surface
           // contributed almost nothing and the water read as clear glass over the seabed. Real
           // water gets its colour from absorption through the column, not from the surface —
           // so tint and opacity are driven by path length, which has a floor even when you are
           // looking straight down. Grazing views pass through far more water and go nearly
           // solid, which is also where fresnel takes over.
           float path = clamp(1.0 / max(abs(viewDir.y), 0.18), 1.0, 5.5);
           float absorb = 1.0 - exp(-path * 0.62);
           outgoingLight = mix(outgoingLight, deep, absorb * 0.45 * uReflect);
           outgoingLight = mix(outgoingLight, uSkyColor, fres * mix(0.40, 0.55, daylight));
           // Ultra quality renders the actual scene once from a camera mirrored across the
           // nearest water surface. The procedural sky remains underneath it, so unloaded
           // reflection areas and the first frame never flash black.
           vec2 reflectionUv = vReflectionCoord.xy / max(vReflectionCoord.w, 0.0001) * 0.5 + 0.5;
           reflectionUv += vec2(vWave.x, -vWave.y) * 0.42 + vec2(fine.x, -fine.y) * 0.16;
           float reflectionValid =
             step(0.002, reflectionUv.x) * step(reflectionUv.x, 0.998) *
             step(0.002, reflectionUv.y) * step(reflectionUv.y, 0.998);
           vec3 planarReflection = texture2D(uReflection, clamp(reflectionUv, 0.002, 0.998)).rgb;
           // the mirror camera looks down at the world from above the plane: from below the
           // surface that image is meaningless (it painted the sky's clouds onto the water's
           // underside), whatever the reflection pass last left in uPlanar
           float planarMix = clamp((0.08 + fres * 0.92) * uPlanar * reflectionValid, 0.0, 0.88) * step(vWorldPos.y, cameraPosition.y);
           outgoingLight = mix(outgoingLight, planarReflection, planarMix);
           vec3 glintColor = mix(vec3(0.18, 0.30, 0.58), uSunColor * 1.15, daylight);
           outgoingLight += glintColor * spec * uGlint * mix(0.20, 1.0, daylight);
           float crest=smoothstep(.018,.052,length(vWave))*vWaterSurface;
           float foam=crest*smoothstep(.25,.8,sin(q1*.22)*sin(q2*.19))*.17;
           outgoingLight=mix(outgoingLight,mix(vec3(.15,.23,.3),vec3(.76,.86,.83),daylight),foam);
           // Caustic-like banding: where ripples focus the light they brighten what is below.
           // Cheap stand-in for real caustics, but it is what stops shallow water reading flat.
           float caustic = sin(q1 * 0.5) * sin(q2 * 0.5) * sin(q3 * 0.35);
           outgoingLight += uSunColor * max(caustic, 0.0) * mix(0.018, 0.09, daylight) * uGlint * upness * vWaterSurface;
           // Opacity follows the same path length, then fresnel closes it the rest of the way at
           // grazing angles. The floor keeps the surface readable as water from directly above.
           diffuseColor.a = clamp(diffuseColor.a + absorb * 0.17, 0.0, 1.0);
           diffuseColor.a = mix(diffuseColor.a, 1.0, fres * 0.5);
           // Shader pack: the seabed under the surface is shaded through the actual water column
           // (see shaderpack-materials), so the surface itself only has to carry what it
           // reflects. It turns mostly clear; the reflected light is rescaled so the thinner
           // alpha does not dim the sky mirror or the glints. Beyond the reach of the water
           // height map the seabed is no longer absorbed, so the classic opaque body returns.
           if (uFxWaterClear > 0.5) {
             float clearReach = 1.0 - smoothstep(88.0, 118.0, length(vWorldPos.xz - cameraPosition.xz));
             float clearA = clamp(0.1 + fres * 0.8 + foam, 0.0, 1.0);
             float a = mix(diffuseColor.a, clearA, clearReach);
             // (from below the surface can be the down-facing underside face, not the wavy top)
             if (cameraPosition.y < vWorldPos.y && abs(vWaterNormal.y) > 0.7) {
               // From below: Snell's window. Steep views pass up into the bright sky; past the
               // critical angle (~49°) the surface is a mirror of the dark water underneath.
               float window = smoothstep(0.58, 0.72, abs(dot(viewDir, wn)));
               outgoingLight = mix(deep * 0.9, outgoingLight, window);
               a = mix(0.9, 0.14, window);
             }
             vec3 surfaceLight = glintColor * spec * uGlint * mix(0.20, 1.0, daylight);
             outgoingLight += surfaceLight * (diffuseColor.a / max(a, 0.05) - 1.0) * clearReach;
             diffuseColor.a = a;
           }
           }
           #include <opaque_fragment>`,
            )),
          (i.vertexShader =
            `attribute float skylight; attribute float blocklight; varying float vSkyLight; varying float vWaterBlock;
` + i.vertexShader),
          (i.vertexShader = i.vertexShader.replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
vSkyLight = skylight; vWaterBlock = blocklight;`,
          )),
          (i.fragmentShader =
            `varying float vAzureWater; varying float vSkyLight; varying float vWaterBlock;
` + i.fragmentShader),
          (i.fragmentShader = i.fragmentShader.replace(
            "#include <opaque_fragment>",
            `outgoingLight = outgoingLight * vSkyLight + diffuseColor.rgb * vWaterBlock * vec3(1.0,0.88,0.62);
#include <opaque_fragment>`,
          )),
          (this.waterShader = i));
      }),
      (this.lavaMat = new Zt({ map: t, vertexColors: !0, side: Mi })),
      (this.lavaMat.customProgramCacheKey = () => "fc-lava-crust-v3"),
      (this.lavaMat.onBeforeCompile = (i) => {
        ((i.uniforms.uTime = { value: 0 }),
          (i.uniforms.uFxEmissiveBoost = YO),
          (i.vertexShader = (
            `uniform float uTime;
varying vec3 vLavaPos;
varying vec3 vLavaNormal;
` + i.vertexShader
          ).replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
         float lavaSurface = step(0.7, normal.y);
         float lavaWave = sin(position.x * 0.72 + position.z * 0.31 + uTime * 0.72)
                        + sin(position.z * 0.91 - position.x * 0.24 - uTime * 0.49);
         transformed.y += lavaSurface * lavaWave * 0.014;
         vLavaPos = (modelMatrix * vec4(position,1.0)).xyz;
         vLavaNormal = normal;`,
          )),
          (i.fragmentShader = (
            `uniform float uTime;
uniform float uFxEmissiveBoost;
varying vec3 vLavaPos;
varying vec3 vLavaNormal;
` +
            cE +
            vse +
            i.fragmentShader
          ).replace(
            "#include <map_fragment>",
            `#include <map_fragment>
         bool lavaSide = abs(vLavaNormal.y) < 0.7;
         vec2 lavaPlane = !lavaSide ? vLavaPos.xz
                        : abs(vLavaNormal.x) > 0.5 ? vLavaPos.zy : vLavaPos.xy;
         vec2 q = (floor(lavaPlane * 16.0) + 0.5) / 16.0;
         vec2 flow = lavaSide ? vec2(0.0, uTime * 0.32) : vec2(-uTime * 0.06, uTime * 0.045);
         vec3 plates = lavaCells(q * 0.95 + flow, uTime);
         float crack = 1.0 - smoothstep(0.015, 0.1, plates.y - plates.x);
         vec3 fissures = lavaCells(q * 2.6 + flow * 1.6 + 7.3, uTime * 1.4);
         float fine = 1.0 - smoothstep(0.01, 0.05, fissures.y - fissures.x);
         float turn = 0.5 + 0.5 * sin(uTime * 0.55 + plates.z * 40.0);
         float edge = plates.y - plates.x;
         // the glow bleeds a little way into the crust either side of a crack
         float halo = 1.0 - smoothstep(0.0, 0.28, edge);
         float heat = crack * 0.95 + halo * 0.32 + fine * 0.5 * (0.35 + 0.65 * turn) + 0.06 * plates.z * turn;
         // now and then a plate has melted back into an open pool of liquid rock
         float pool = smoothstep(0.91, 0.95, plates.z) * (1.0 - smoothstep(0.1, 0.42, plates.x));
         heat = max(heat, pool * (0.72 + 0.12 * turn));
         // bubbles: a cell of the surface swells into a bright blister and bursts
         vec2 bubbleCell = floor(q * 1.6);
         float bubbleSeed = fcHash(bubbleCell + 3.1);
         float life = fract(uTime * 0.16 + bubbleSeed * 7.0);
         vec2 bubbleAt = (bubbleCell + 0.3 + 0.4 * vec2(fcHash(bubbleCell + 9.2), fcHash(bubbleCell + 5.7))) / 1.6;
         float bubbleR = life * 0.16;
         float bubble = step(0.86, bubbleSeed) * step(life, 0.3) * (1.0 - smoothstep(bubbleR - 0.03, bubbleR, distance(q, bubbleAt)));
         heat = max(heat, bubble * 1.05);
         // falls: the crust cannot hold on a moving sheet, so it streams in hot runnels
         if (lavaSide) heat += 0.18 + 0.28 * step(0.55, fcNoise(vec2(q.x * 6.0, q.y * 1.5 + uTime * 1.1)));
         vec3 lava = vec3(0.07, 0.028, 0.022) + vec3(0.035, 0.012, 0.004) * fcHash(floor(q * 16.0));
         lava = mix(lava, vec3(0.42, 0.05, 0.012), smoothstep(0.12, 0.34, heat));
         lava = mix(lava, vec3(0.86, 0.2, 0.02), smoothstep(0.34, 0.58, heat));
         lava = mix(lava, vec3(1.0, 0.5, 0.06), smoothstep(0.58, 0.82, heat));
         lava = mix(lava, vec3(1.0, 0.8, 0.28), smoothstep(0.82, 1.02, heat));
         lava = mix(lava, vec3(1.0, 0.95, 0.7), smoothstep(1.05, 1.3, heat));
         diffuseColor.rgb = lava * mix(1.0, uFxEmissiveBoost, smoothstep(0.3, 1.0, heat));`,
          )),
          (this.lavaShader = i));
      }));
  }
  border;
  viewHalf = 0;
  inView(e, t) {
    const i = this.viewHalf;
    return i > 0 && e * ke >= -i && e * ke < i && t * ke >= -i && t * ke < i;
  }
  meshWorkers = [];
  meshWorkerFailed = !1;
  flightSurface = !1;
  wantsSurface(e) {
    return (
      this.flightSurface &&
      Math.max(Math.abs(e.cx - this.lastPcx), Math.abs(e.cz - this.lastPcz)) >=
        5
    );
  }
  seamGroups = [];
  chunks = new Map();
  dirtyChunkCount() {
    let e = 0;
    for (const t of this.chunks.values()) t.dirty && e++;
    return e;
  }
  requested = new Set();
  requestedAt;
  previewChunks;
  renderDist = 7;
  flightRadius = null;
  generatedTop = null;
  tintSeed = null;
  chunkShadows = !1;
  smoothLighting = !1;
  fancyLeaves = !0;
  seed = 0;
  requestChunk = () => {};
  chunkRequestTokens = 32;
  chunkRequestAt = performance.now();
  requestMapTiles = () => {};
  onMapTileUpdate = () => {};
  opaqueMat;
  waterColumnMat = new Zt();
  waterMat;
  lavaMat;
  waterShader = null;
  waterQuality = 2;
  reflectionTarget = null;
  reflectionCamera = new qn();
  reflectionMatrix = new Rt();
  reflectionSize = new ct();
  reflectionPlaneY = Bs - 0.125;
  reflectionFrame = 0;
  reflectionReady = !1;
  reflecting = !1;
  lavaShader = null;
  opaqueShader = null;
  wind = new ct();
  windTarget = new ct();
  windTime = -1;
  windSway = 1;
  environmentDetail = 1;
  lighting = new Mre();
  streamScanKey = "";
  reqScratch = [];
  lastRemeshAt = -1 / 0;
  lastPcx = 1 / 0;
  lastPcz = 1 / 0;
  lastSpeed = 0;
  mapSampleTime = 0;
  mapTiles = new Map();
  mapPending = new Map();
  mapQueue = new Map();
  mapQueueLod = -1;
  mapFlushTimer;
  mapNextRequestAt = 0;
  meshSource = new wre(this.chunks);
  gates = new Map();
  doors = new Map();
  chestLids;
  aviationLights;
  onChestSlam;
  doorsByChunk = new Map();
  leafCullAt = 0;
  gateMaterials = new Map();
  gateLastTime = performance.now();
  lidLastTime = performance.now();
  gateMaterial(e, t, i, n = 1) {
    const o = Math.round(Math.max(0, Math.min(1, i)) * 15),
      a = Math.round(n * 15),
      r = `${e}:${t}:${o}:${a}`;
    let l = this.gateMaterials.get(r);
    return (
      l ||
        ((l = new Pi({
          color: t,
          map: e >= 0 ? this.atlasTex : null,
          emissive: e < 0 ? t : 0,
          emissiveIntensity: e < 0 ? (o / 15) * 0.55 : 0,
        })),
        (l.userData.gateTile = e),
        (l.userData.gateTint = t),
        e >= 0 &&
          ((l.customProgramCacheKey = () => "fc-gate-atlas-light-v2"),
          (l.onBeforeCompile = (c) => {
            ((c.uniforms.uGateTile = {
              value: new ct(e % Ni, Math.floor(e / Ni)),
            }),
              (c.uniforms.uGateSky = { value: a / 15 }),
              (c.uniforms.uGateBlockLight = { value: o / 15 }),
              (c.fragmentShader = (
                `uniform float uGateSky;
uniform vec2 uGateTile;
uniform float uGateBlockLight;
` + c.fragmentShader
              )
                .replace(
                  "#include <map_fragment>",
                  `#ifdef USE_MAP
                 // same inset the chunk mesher applies (UV_PAD), so a gate leaf and the fence
                 // beside it sample the tile at exactly the same scale
                 vec2 gateLocalUv = vec2(0.02) + clamp(vMapUv, vec2(0.0), vec2(1.0)) * 0.96;
                 vec2 gateAtlasUv = vec2(
                   (uGateTile.x + gateLocalUv.x) / ${Ni}.0,
                   1.0 - (uGateTile.y + 1.0 - gateLocalUv.y) / ${Ni}.0);
                 diffuseColor *= texture2D(map, gateAtlasUv);
               #endif`,
                )
                .replace(
                  "#include <lights_fragment_end>",
                  `#include <lights_fragment_end>
               vec3 gateGlow = diffuseColor.rgb * uGateBlockLight * vec3(1.0, 0.88, 0.62);
               float gateLit = dot(
                 reflectedLight.directDiffuse + reflectedLight.indirectDiffuse,
                 vec3(0.333));
               reflectedLight.indirectDiffuse += gateGlow * clamp(1.0 - gateLit, 0.0, 1.0);`,
                )),
              (c.fragmentShader = Fv(c.fragmentShader, "uGateSky")));
          })),
        this.gateMaterials.set(r, l)),
      l
    );
  }
  gateBox(e, t, i, n, o, a, r, l, c, h, d = 0.5, u = 0.5) {
    const f = new kt(t, i, n),
      p = f.attributes.position,
      m = f.attributes.normal,
      g = f.attributes.uv,
      y = (S) => Math.max(0, Math.min(1, S));
    for (let S = 0; S < p.count; S++) {
      const M = y(p.getX(S) + l + d),
        E = y(p.getY(S) + c),
        A = y(p.getZ(S) + h + u),
        T = m.getX(S),
        x = m.getY(S),
        R = m.getZ(S);
      Math.abs(T) > 0.5
        ? g.setXY(S, T > 0 ? 1 - A : A, E)
        : Math.abs(x) > 0.5
          ? g.setXY(S, M, x > 0 ? A : 1 - A)
          : g.setXY(S, R > 0 ? M : 1 - M, E);
    }
    g.needsUpdate = !0;
    const b = new Q(f, this.gateMaterial(o, a, r));
    (b.position.set(l, c, h),
      (b.castShadow = !0),
      (b.receiveShadow = !0),
      e.add(b));
  }
  createGateVisual(e, t, i, n, o) {
    const a = le[n]?.tex[1] ?? 0,
      r = 16777215,
      l = 14606046,
      { post1: c, rail1: h, rail2: d, railsY: u, stile: f, gateBottom: p } = FI,
      m = this.probeLight(e + 0.5, t + 0.7, i + 0.5),
      g = new re();
    (g.position.set(e + 0.5, t, i + 0.5),
      (g.rotation.y = (o & 1) === 0 ? 0 : Math.PI / 2));
    const y = d - h,
      b = (x) => {
        const R = new re();
        R.position.x = x * (0.5 - f / 2);
        const _ = -x,
          C = 0.5 + x * (0.5 - f / 2),
          P = (O, B, H, D, U) =>
            this.gateBox(
              R,
              B - O,
              D - H,
              y,
              a,
              U,
              m,
              _ * ((O + B) / 2 - f / 2),
              (H + D) / 2,
              0,
              C,
            );
        P(0, f, p, 1, l);
        for (const [O, B] of u) P(f, 0.5, O, B, r);
        return (P(c, 0.5, u[0][1], u[1][0], l), g.add(R), R);
      },
      S = b(-1),
      M = b(1),
      E = (o & fn) !== 0,
      A = (o & 3) === 1 || (o & 3) === 2 ? 1 : -1,
      T = E ? (A * Math.PI) / 2 : 0;
    return (
      (S.rotation.y = -T),
      (M.rotation.y = T),
      this.scene.add(g),
      {
        key: `${e},${t},${i}`,
        id: n,
        cx: Math.floor(e / ke),
        cz: Math.floor(i / ke),
        group: g,
        left: S,
        right: M,
        target: T,
      }
    );
  }
  removeGate(e) {
    const t = this.gates.get(e);
    t &&
      (this.scene.remove(t.group),
      t.group.traverse((i) => {
        i.geometry?.dispose();
      }),
      this.gates.delete(e));
  }
  syncGateAt(e, t, i, n, o) {
    const a = `${e},${t},${i}`,
      r = this.gates.get(a);
    if (!Io(n)) {
      r && this.removeGate(a);
      return;
    }
    const l = (o & 3) === 1 || (o & 3) === 2 ? 1 : -1,
      c = (o & fn) !== 0 ? (l * Math.PI) / 2 : 0;
    if (r && r.id !== n) this.removeGate(a);
    else if (r) {
      ((r.group.rotation.y = (o & 1) === 0 ? 0 : Math.PI / 2), (r.target = c));
      return;
    }
    const h = this.createGateVisual(e, t, i, n, o);
    this.gates.set(a, h);
  }
  syncGateChunk(e, t, i) {
    for (const [a, r] of [...this.gates])
      r.cx === e && r.cz === t && this.removeGate(a);
    const n = e * ke,
      o = t * ke;
    for (let a = 0; a < i.data.length; a++) {
      const r = i.data[a];
      if (!Io(r)) continue;
      const l = n + (a & 15),
        c = o + ((a >> 4) & 15),
        h = a >> 8;
      this.syncGateAt(l, h, c, r, i.meta[a]);
    }
  }
  refreshGateLightsAround(e, t, i) {
    for (const n of this.gates.values()) {
      const [o, a, r] = n.key.split(",").map(Number);
      Math.abs(o - e) > 6 ||
        Math.abs(a - t) > 6 ||
        Math.abs(r - i) > 6 ||
        this.relightGate(n);
    }
  }
  relightGate(e) {
    const t = e.group.position;
    let i = 0,
      n = 0;
    for (const [o, a] of [
      [0, 0],
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ])
      ((i = Math.max(i, this.probeLight(t.x + o, t.y, t.z + a))),
        (n = Math.max(n, this.probeSky(t.x + o, t.y, t.z + a))));
    e.group.traverse((o) => {
      const a = o;
      if (!a.isMesh || Array.isArray(a.material)) return;
      const r = a.material.userData;
      a.material = this.gateMaterial(r.gateTile, r.gateTint, i, n);
    });
  }
  removeGateChunk(e, t) {
    for (const [i, n] of [...this.gates])
      n.cx === e && n.cz === t && this.removeGate(i);
  }
  doorYaw(e) {
    return zm[e & 3] + (e & fn ? (eW(e) * Math.PI) / 2 : 0);
  }
  get chunkMaterial() {
    return this.opaqueMat;
  }
  cellLighting(e, t, i) {
    return this.doorLighting(e, t, i);
  }
  doorLighting(e, t, i) {
    let n = 0,
      o = 0;
    for (const [a, r] of [
      [0, 0],
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ])
      for (const l of [0, 1])
        ((n = Math.max(n, this.probeLight(e + a, t + l, i + r))),
          (o = Math.max(o, this.probeSky(e + a, t + l, i + r))));
    return { light: n, sky: o };
  }
  createDoorVisual(e, t, i, n, o) {
    const { light: a, sky: r } = this.doorLighting(e, t, i),
      l = new Q(Fj(n, (o & $a) !== 0, a, r), this.opaqueMat),
      [c, h] = JG(o);
    l.position.set(e + c, t, i + h);
    const d = this.doorYaw(o);
    return (
      (l.rotation.y = d),
      (l.castShadow = this.chunkShadows),
      (l.receiveShadow = !0),
      this.scene.add(l),
      {
        key: `${e},${t},${i}`,
        id: n,
        meta: o,
        cx: Math.floor(e / ke),
        cz: Math.floor(i / ke),
        mesh: l,
        angle: d,
        target: d,
        light: a,
        sky: r,
      }
    );
  }
  removeDoor(e) {
    const t = this.doors.get(e);
    if (!t) return;
    (this.scene.remove(t.mesh),
      t.mesh.geometry.dispose(),
      this.doors.delete(e));
    const i = this.doorsByChunk.get(Xs(t.cx, t.cz));
    (i?.delete(t), i && !i.size && this.doorsByChunk.delete(Xs(t.cx, t.cz)));
  }
  syncDoorAt(e, t, i, n, o) {
    const a = `${e},${t},${i}`,
      r = this.doors.get(a);
    if (!zn(n) || o & wr) {
      r && this.removeDoor(a);
      return;
    }
    if (r && r.id === n && !((r.meta ^ o) & ($a | 3))) {
      ((r.meta = o), (r.target = this.doorYaw(o)));
      return;
    }
    r && this.removeDoor(a);
    const l = this.createDoorVisual(e, t, i, n, o);
    this.doors.set(a, l);
    const c = Xs(l.cx, l.cz);
    let h = this.doorsByChunk.get(c);
    (h || this.doorsByChunk.set(c, (h = new Set())), h.add(l));
  }
  syncDoorChunk(e, t, i) {
    this.removeDoorChunk(e, t);
    const n = e * ke,
      o = t * ke;
    for (let a = 0; a < i.data.length; a++)
      zn(i.data[a]) &&
        this.syncDoorAt(
          n + (a & 15),
          a >> 8,
          o + ((a >> 4) & 15),
          i.data[a],
          i.meta[a],
        );
  }
  removeDoorChunk(e, t) {
    for (const i of [...(this.doorsByChunk.get(Xs(e, t)) ?? [])])
      this.removeDoor(i.key);
  }
  relightDoors(e, t) {
    for (const i of this.doorsByChunk.get(Xs(e, t)) ?? []) {
      const [n, o, a] = i.key.split(",").map(Number),
        { light: r, sky: l } = this.doorLighting(n, o, a);
      if (Math.abs(r - i.light) < 0.001 && Math.abs(l - i.sky) < 0.001)
        continue;
      ((i.light = r), (i.sky = l));
      const c = i.mesh.geometry;
      for (const [h, d] of [
        ["blocklight", r],
        ["skylight", l],
      ]) {
        const u = c.getAttribute(h);
        (u.array.fill(d), (u.needsUpdate = !0));
      }
    }
  }
  cullLeaves(e, t) {
    const i = performance.now();
    if (i < this.leafCullAt) return;
    this.leafCullAt = i + 250;
    const n = FC * FC;
    for (const o of this.doors.values()) {
      const a = o.mesh.position.x - e,
        r = o.mesh.position.z - t;
      o.mesh.visible = a * a + r * r < n;
    }
    for (const o of this.gates.values()) {
      const a = o.group.position.x - e,
        r = o.group.position.z - t;
      o.group.visible = a * a + r * r < n;
    }
  }
  doorAngle(e, t, i) {
    const n = this.doors.get(`${e},${t},${i}`);
    return n ? { angle: n.angle, target: n.target } : null;
  }
  signs;
  updateGates() {
    this.signs.update();
    const e = performance.now(),
      t = Math.min(0.05, Math.max(0, (e - this.gateLastTime) / 1e3));
    this.gateLastTime = e;
    const i = 1 - Math.exp(-11 * t);
    for (const o of this.gates.values())
      ((o.left.rotation.y += (-o.target - o.left.rotation.y) * i),
        (o.right.rotation.y += (o.target - o.right.rotation.y) * i));
    const n = 1 - Math.exp(-15 * t);
    for (const o of this.doors.values())
      o.angle !== o.target &&
        ((o.angle += (o.target - o.angle) * n),
        Math.abs(o.target - o.angle) < 0.002 && (o.angle = o.target),
        (o.mesh.rotation.y = o.angle));
  }
  updateTime(e) {
    const t =
      this.windTime < 0 ? 1 : Math.min(0.25, Math.max(0, e - this.windTime));
    ((this.windTime = e),
      this.wind.lerp(this.windTarget, 1 - Math.exp(-t * 0.35)),
      this.opaqueShader &&
        this.opaqueShader.uniforms.uWind.value.copy(this.wind),
      this.waterShader && (this.waterShader.uniforms.uTime.value = e),
      this.lavaShader && (this.lavaShader.uniforms.uTime.value = e),
      this.opaqueShader && (this.opaqueShader.uniforms.uTime.value = e));
  }
  refreshMaterials() {
    for (const e of [
      this.opaqueMat,
      this.waterMat,
      this.lavaMat,
      ...this.gateMaterials.values(),
    ])
      e.needsUpdate = !0;
  }
  setWind(e, t) {
    (this.windTarget.set(
      Number.isFinite(e) ? e : 0,
      Number.isFinite(t) ? t : 0,
    ),
      this.windTime < 0 && this.wind.copy(this.windTarget));
  }
  setWindSway(e) {
    ((this.windSway = e ? 1 : 0),
      this.opaqueShader &&
        (this.opaqueShader.uniforms.uWindSway.value = this.windSway));
  }
  setEnvironmentDetail(e) {
    ((this.environmentDetail = e),
      this.opaqueShader && (this.opaqueShader.uniforms.uEnvironment.value = e));
  }
  updateWaterLight(e, t, i, n = 1) {
    const o = this.waterShader?.uniforms;
    if (!o) return;
    (o.uSunDir.value.copy(e),
      o.uSunColor.value.copy(t),
      o.uSkyColor.value.copy(i),
      (o.uDayness.value = Math.max(0, Math.min(1, n))));
    const a = this.waterQuality;
    ((o.uWaveAmp.value = a === 0 ? 0 : a === 1 ? 0.65 : 1),
      (o.uReflect.value = a === 0 ? 0 : a === 1 ? 0.4 : 1),
      (o.uGlint.value = a === 0 ? 0 : a === 1 ? 0.5 : 1),
      (o.uReflection.value = this.reflectionTarget?.texture ?? null),
      o.uReflectionMatrix.value.copy(this.reflectionMatrix),
      (o.uPlanar.value = a === 3 && this.reflectionReady ? 1 : 0));
  }
  setWaterQuality(e) {
    ((this.waterQuality = e),
      e < 3 &&
        this.reflectionTarget &&
        (this.reflectionTarget.dispose(),
        (this.reflectionTarget = null),
        (this.reflectionReady = !1)),
      (this.waterMat.opacity = e === 0 ? 0.88 : 0.8));
  }
  reflectionFrustum = new kd();
  reflectionViewProj = new Rt();
  renderWaterReflection(e, t) {
    if (this.waterQuality !== 3 || !this.waterShader || this.reflecting) return;
    (t.updateMatrixWorld(),
      this.reflectionFrustum.setFromProjectionMatrix(
        this.reflectionViewProj.multiplyMatrices(
          t.projectionMatrix,
          t.matrixWorldInverse,
        ),
      ));
    let i = !1;
    for (const g of this.chunks.values()) {
      const y = g.waterMesh;
      if (y?.visible && this.reflectionFrustum.intersectsObject(y)) {
        i = !0;
        break;
      }
    }
    if (!i) return;
    e.getDrawingBufferSize(this.reflectionSize);
    const n = Math.max(
        256,
        Math.min(1280, Math.round(this.reflectionSize.x * 0.55)),
      ),
      o = Math.max(
        144,
        Math.min(720, Math.round(this.reflectionSize.y * 0.55)),
      );
    if (
      ((!this.reflectionTarget ||
        this.reflectionTarget.width !== n ||
        this.reflectionTarget.height !== o) &&
        (this.reflectionTarget?.dispose(),
        (this.reflectionTarget = new tl(n, o, {
          minFilter: pn,
          magFilter: pn,
          depthBuffer: !0,
        })),
        (this.reflectionTarget.texture.colorSpace = Ii),
        (this.reflectionTarget.texture.name = "water-planar-reflection"),
        (this.reflectionReady = !1)),
      this.reflectionFrame++ % 24 === 0)
    ) {
      let g = 1 / 0,
        y = Bs - 0.125;
      const b = Math.floor(t.position.x),
        S = Math.floor(t.position.z);
      for (let M = -24; M <= 24; M += 6)
        for (let E = -24; E <= 24; E += 6) {
          const A = b + M,
            T = S + E;
          for (let x = jt - 1; x >= 0; x--) {
            if (!this.isWaterAt(A, x, T) || this.isWaterAt(A, x + 1, T))
              continue;
            const R = x + kc(this.getMeta(A, x, T)),
              _ = Math.abs(t.position.y - R) + Math.hypot(M, E) * 0.035;
            _ < g && ((g = _), (y = R));
            break;
          }
        }
      this.reflectionPlaneY = y;
    }
    const a = this.reflectionPlaneY;
    if (t.position.y <= a + 0.06) {
      this.waterShader.uniforms.uPlanar.value = 0;
      return;
    }
    const r = this.reflectionCamera;
    (r.copy(t, !1),
      r.position.copy(t.position),
      (r.position.y = a * 2 - t.position.y));
    const l = t.getWorldDirection(new k());
    l.y *= -1;
    const c = new k(0, 1, 0).applyQuaternion(t.quaternion);
    ((c.y *= -1),
      r.up.copy(c),
      r.lookAt(r.position.clone().add(l)),
      r.projectionMatrix.copy(t.projectionMatrix),
      r.projectionMatrixInverse.copy(t.projectionMatrixInverse),
      r.layers.set(0),
      r.updateMatrixWorld(),
      r.matrixWorldInverse.copy(r.matrixWorld).invert(),
      this.reflectionMatrix.multiplyMatrices(
        r.projectionMatrix,
        r.matrixWorldInverse,
      ));
    const h = e.getRenderTarget(),
      d = e.autoClear,
      u = e.xr.enabled,
      f = e.shadowMap.autoUpdate,
      p = e.clippingPlanes;
    ((this.reflecting = !0), (this.waterMat.visible = !1));
    try {
      ((e.xr.enabled = !1),
        (e.autoClear = !0),
        (e.shadowMap.autoUpdate = !1),
        (e.clippingPlanes = [new dc(new k(0, 1, 0), -a - 0.015)]),
        e.setRenderTarget(this.reflectionTarget),
        e.clear(),
        e.render(this.scene, r),
        (this.reflectionReady = !0));
    } finally {
      (e.setRenderTarget(h),
        (e.clippingPlanes = p),
        (e.shadowMap.autoUpdate = f),
        (e.xr.enabled = u),
        (e.autoClear = d),
        (this.waterMat.visible = !0),
        (this.reflecting = !1));
    }
    const m = this.waterShader.uniforms;
    ((m.uReflection.value = this.reflectionTarget.texture),
      m.uReflectionMatrix.value.copy(this.reflectionMatrix),
      (m.uPlanar.value = 1));
  }
  viewSwap = null;
  setViewSwap(e) {
    if (String(e) !== String(this.viewSwap)) {
      for (const t of [this.viewSwap, e])
        if (t) {
          for (const i of this.chunks.values())
            (Yg(i.data, t[0], t[1]), (i.surfaceColors = void 0));
          for (const i of this.mapTiles.values()) Yg(i, t[0], t[1]);
        }
      ((this.viewSwap = e), this.invalidateSurfMemo(), this.remeshAll());
    }
  }
  onChunkData(e, t, i) {
    const n = Xs(e, t);
    if (
      (this.requested.delete(n),
      this.requestedAt?.delete(n),
      this.invalidateMapChunk(e, t),
      Number.isFinite(this.lastPcx))
    ) {
      const h = Math.max(
        Math.abs(e - this.lastPcx),
        Math.abs(t - this.lastPcz),
      );
      if (
        !this.previewChunks?.has(n) &&
        h >
          Math.min(
            28,
            (this.flightRadius ?? this.renderDist) +
              Math.min(16, Math.ceil((this.lastSpeed * 4) / ke)),
          ) +
            3
      )
        return;
    }
    const o = new Uint8Array(Zp * 2);
    MC(i, o);
    const a = o.subarray(0, Zp),
      r = o.subarray(Zp);
    this.viewSwap && Yg(a, this.viewSwap[0], this.viewSwap[1]);
    const l = Dre(a),
      c = this.chunks.get(n);
    (c
      ? ((c.revision = (c.revision ?? 0) + 1),
        (c.data = a),
        (c.meta = r),
        (c.emitters = l),
        (c.features = void 0),
        (c.dirty = !0),
        (c.dirtyPri = 0))
      : this.chunks.set(n, {
          cx: e,
          cz: t,
          data: a,
          meta: r,
          mesh: null,
          waterMesh: null,
          lavaMesh: null,
          dirty: !0,
          dirtyPri: 0,
          emitters: l,
        }),
      this.syncGateChunk(e, t, this.chunks.get(n)),
      this.syncDoorChunk(e, t, this.chunks.get(n)));
    {
      const h = this.chunks.get(n);
      (this.chestLids.syncChunk(e, t, h.data, h.meta),
        this.aviationLights.syncChunk(e, t, h.data));
    }
    for (let h = -1; h <= 1; h++)
      for (let d = -1; d <= 1; d++) (h || d) && this.markDirty(e + h, t + d, 1);
    ((this.chunks.get(n).surfaceColors = void 0), this.invalidateSurfMemo());
  }
  markDirty(e, t, i = 0) {
    const n = this.chunks.get(Xs(e, t));
    n &&
      ((!n.dirty || i < n.dirtyPri) && (n.dirtyPri = i),
      (n.dirty = !0),
      i === 0 && (n.revision = (n.revision ?? 0) + 1));
  }
  chunkFeatures(e, t) {
    const i = this.chunks.get(Xs(e, t));
    return i ? (i.features ??= Nre(i.data)) : null;
  }
  readiness(e, t, i = 2) {
    const n = Math.floor(e / ke),
      o = Math.floor(t / ke);
    let a = 0,
      r = 0,
      l = 0;
    for (let c = -i; c <= i; c++)
      for (let h = -i; h <= i; h++) {
        l++;
        const d = this.chunks.get(Xs(n + c, o + h));
        d && (a++, !d.dirty && !d.meshPending && r++);
      }
    return { received: a, built: r, total: l };
  }
  isLoaded(e, t) {
    return this.chunks.has(Xs(Math.floor(e / ke), Math.floor(t / ke)));
  }
  getBlock(e, t, i) {
    if (
      this.border?.radius &&
      !HT(this.border, Math.floor(e) + 0.5, Math.floor(i) + 0.5)
    )
      return v.BEDROCK;
    if (t < 0 || t >= jt) return 0;
    ((e = Math.floor(e)), (t = Math.floor(t)), (i = Math.floor(i)));
    const n = Math.floor(e / ke),
      o = Math.floor(i / ke),
      a = this.chunks.get(Xs(n, o));
    return a ? a.data[Ai(e - n * ke, t, i - o * ke)] : 0;
  }
  isSolidAt(e, t, i) {
    const n = this.getBlock(e, t, i);
    return zn(n) || Io(n) ? !(this.getMeta(e, t, i) & fn) : fW(n);
  }
  isStairAt(e, t, i) {
    return uA(this.getBlock(e, t, i));
  }
  isWaterAt(e, t, i) {
    const n = this.getBlock(e, t, i);
    return (n > 0 && le[n].liquid) || ka(n, this.getMeta(e, t, i));
  }
  getMeta(e, t, i) {
    if (t < 0 || t >= jt) return 0;
    ((e = Math.floor(e)), (t = Math.floor(t)), (i = Math.floor(i)));
    const n = Math.floor(e / ke),
      o = Math.floor(i / ke),
      a = this.chunks.get(Xs(n, o));
    return a ? a.meta[Ai(e - n * ke, t, i - o * ke)] : 0;
  }
  setBlock(e, t, i, n, o = 0) {
    if (t < 0 || t >= jt) return;
    (this.viewSwap &&
      (n =
        n === this.viewSwap[0]
          ? this.viewSwap[1]
          : n === this.viewSwap[1]
            ? this.viewSwap[0]
            : n),
      this.invalidateMapAt(e, i));
    const a = Math.floor(e / ke),
      r = Math.floor(i / ke),
      l = this.chunks.get(Xs(a, r));
    if (!l) return;
    const c = e - a * ke,
      h = i - r * ke,
      d = Ai(c, t, h);
    if (l.data[d] === n && l.meta[d] === o) return;
    const u = new Set([l]);
    for (const [g, y] of [
      [c === 0 ? -1 : c === ke - 1 ? 1 : 0, 0],
      [0, h === 0 ? -1 : h === ke - 1 ? 1 : 0],
    ]) {
      const b = this.chunks.get(Xs(a + g, r + y));
      b && u.add(b);
    }
    if (u.size > 1 && l.mesh) {
      for (let g = this.seamGroups.length - 1; g >= 0; g--)
        if ([...u].some((y) => this.seamGroups[g].has(y)))
          for (const y of this.seamGroups.splice(g, 1)[0]) u.add(y);
      this.seamGroups.push(u);
    }
    (_E.has(n) || _E.has(l.data[d]) || en(n) || en(l.data[d])) &&
      (l.features = void 0);
    const f = Fc[l.data[d]] > 0,
      p = Fc[n] > 0,
      m =
        ov(l.data[d], l.meta[d]) !== ov(n, o) ||
        AE(l.data[d], l.meta[d]) !== AE(n, o);
    if (
      ((l.data[d] = n),
      (l.meta[d] = o),
      this.syncGateAt(e, t, i, n, o),
      this.syncDoorAt(e, t, i, n, o),
      this.chestLids.sync(e, t, i, n, o),
      this.aviationLights.sync(e, t, i, n),
      this.chestLids.syncAround(e, t, i, (g, y, b) => this.getMeta(g, y, b)),
      l.surfaceColors && (l.surfaceColors[h * ke + c] = 0),
      f !== p)
    )
      if (p) l.emitters.push(d);
      else {
        const g = l.emitters.indexOf(d);
        g >= 0 && l.emitters.splice(g, 1);
      }
    if (
      (m && this.refreshGateLightsAround(e, t, i), this.markDirty(a, r, 0), m)
    )
      for (let g = -1; g <= 1; g++)
        for (let y = -1; y <= 1; y++)
          (g || y) && this.markDirty(a + g, r + y, 1);
    (c === 0 && this.markDirty(a - 1, r, 0),
      c === ke - 1 && this.markDirty(a + 1, r, 0),
      h === 0 && this.markDirty(a, r - 1, 0),
      h === ke - 1 && this.markDirty(a, r + 1, 0));
  }
  mapTileKey(e, t, i) {
    return `${e},${t},${i}`;
  }
  queueMapTile(e, t, i) {
    this.mapQueueLod !== e && (this.mapQueue.clear(), (this.mapQueueLod = e));
    const n = this.mapTileKey(e, t, i),
      o = performance.now(),
      a = this.mapPending.get(n);
    (a !== void 0 && o - a < 5e3) ||
      (a !== void 0 && this.mapPending.delete(n),
      this.mapQueue.set(n, { lod: e, tx: t, tz: i }),
      this.scheduleMapRequests());
  }
  scheduleMapRequests() {
    this.mapFlushTimer !== void 0 ||
      this.mapQueue.size === 0 ||
      (this.mapFlushTimer = setTimeout(
        () => this.flushMapRequests(),
        Math.max(0, this.mapNextRequestAt - performance.now()),
      ));
  }
  flushMapRequests() {
    if (((this.mapFlushTimer = void 0), this.mapQueue.size === 0)) return;
    if (performance.now() < this.mapNextRequestAt) {
      this.scheduleMapRequests();
      return;
    }
    const e = [];
    for (const [t, i] of this.mapQueue)
      if (
        (this.mapQueue.delete(t),
        this.mapPending.set(t, performance.now()),
        e.push(i),
        e.length >= Rre)
      )
        break;
    ((this.mapNextRequestAt = performance.now() + kre),
      this.requestMapTiles(e),
      this.scheduleMapRequests());
  }
  onMapTileData(e, t, i, n) {
    if (e < 0 || e > TE) return;
    const o = new Uint8Array(Nr * Nr);
    if (MC(n, o) !== o.length) return;
    this.viewSwap && Yg(o, this.viewSwap[0], this.viewSwap[1]);
    const a = this.mapTileKey(e, t, i);
    if (
      (this.mapPending.delete(a),
      this.mapTiles.delete(a),
      this.mapTiles.set(a, o),
      this.mapGuess.delete(a),
      this.invalidateSurfMemo(),
      this.mapTiles.size > 384)
    ) {
      const r = this.mapTiles.keys().next().value;
      r !== void 0 && this.mapTiles.delete(r);
    }
    this.onMapTileUpdate();
  }
  invalidateMapAt(e, t) {
    ((e = Math.floor(e)), (t = Math.floor(t)));
    for (let i = 0; i <= TE; i++) {
      const n = Nr * (1 << i),
        o = this.mapTileKey(i, Math.floor(e / n), Math.floor(t / n));
      (this.mapTiles.delete(o),
        this.mapGuess.delete(o),
        this.mapPending.delete(o),
        this.mapQueue.delete(o),
        this.invalidateSurfMemo());
    }
  }
  invalidateMapChunk(e, t) {
    this.invalidateMapAt(e * ke, t * ke);
  }
  mapGuess = new Map();
  static GUESS_STEPS = 8;
  guessTile(e, t, i) {
    const n = this.mapTileKey(e, t, i),
      o = this.mapGuess.get(n);
    if (o) return o;
    const a = 1 << e,
      r = Nr * a,
      l = Nr / X1.GUESS_STEPS,
      c = new Uint8Array(Nr * Nr);
    for (let h = 0; h < X1.GUESS_STEPS; h++)
      for (let d = 0; d < X1.GUESS_STEPS; d++) {
        const u = HC(
          this.seed,
          t * r + Math.round((d + 0.5) * l * a),
          i * r + Math.round((h + 0.5) * l * a),
        );
        for (let f = h * l; f < (h + 1) * l; f++)
          c.fill(u, f * Nr + d * l, f * Nr + (d + 1) * l);
      }
    if ((this.mapGuess.set(n, c), this.mapGuess.size > 512)) {
      const h = this.mapGuess.keys().next().value;
      h !== void 0 && this.mapGuess.delete(h);
    }
    return c;
  }
  surfChunkCx = NaN;
  surfChunkCz = NaN;
  surfChunkEntry = null;
  surfTileLod = -1;
  surfTileTx = 0;
  surfTileTz = 0;
  surfTileRetryAt = 0;
  surfTile = null;
  invalidateSurfMemo() {
    ((this.surfChunkCx = NaN),
      (this.surfChunkCz = NaN),
      (this.surfChunkEntry = null),
      (this.surfTileLod = -1),
      (this.surfTile = null));
  }
  surfaceColor(e, t, i = 1) {
    ((e = Math.floor(e)), (t = Math.floor(t)));
    const n = Math.floor(e / ke),
      o = Math.floor(t / ke);
    let a;
    if (
      (n === this.surfChunkCx && o === this.surfChunkCz
        ? (a = this.surfChunkEntry)
        : ((a = this.chunks.get(Xs(n, o)) ?? null),
          (this.surfChunkCx = n),
          (this.surfChunkCz = o),
          (this.surfChunkEntry = a)),
      !a)
    ) {
      const d = Ire(i),
        u = 1 << d,
        f = Nr * u,
        p = Math.floor(e / f),
        m = Math.floor(t / f);
      let g;
      d === this.surfTileLod &&
      p === this.surfTileTx &&
      m === this.surfTileTz &&
      this.mapSampleTime < this.surfTileRetryAt
        ? (g = this.surfTile)
        : ((g = this.mapTiles.get(this.mapTileKey(d, p, m)) ?? null),
          (this.surfTileRetryAt = g ? 1 / 0 : this.mapSampleTime + 100),
          g || (this.queueMapTile(d, p, m), (g = this.guessTile(d, p, m))),
          (this.surfTileLod = d),
          (this.surfTileTx = p),
          (this.surfTileTz = m),
          (this.surfTile = g));
      const y = Math.floor((e - p * f) / u),
        b = Math.floor((t - m * f) / u);
      return lM(g[b * Nr + y]);
    }
    const r = (t - o * ke) * ke + e - n * ke,
      l = (a.surfaceColors ??= new Uint32Array(ke * ke));
    if (l[r]) return l[r] - 1;
    let c = -1;
    const h = Ai(e - n * ke, 0, t - o * ke);
    for (let d = jt - 1; d >= 0; d--) {
      const u = a.data[h | (d << 8)];
      if (u !== 0 && !Pre.has(u)) {
        c = lM(Lre(this.seed, e, t, u));
        break;
      }
    }
    return (c < 0 && (c = lM(HC(this.seed, e, t))), (l[r] = c + 1), c);
  }
  groundAt(e, t, i) {
    const n = Math.floor(e),
      o = Math.floor(t),
      a = Math.floor(n / ke),
      r = Math.floor(o / ke);
    if (!this.chunks.has(Xs(a, r)))
      return Math.min(
        i,
        (this.generatedTop ? this.generatedTop(n, o) : Df(this.seed, n, o)) + 1,
      );
    for (let l = Math.min(Math.floor(i), jt - 1); l >= 0; l--)
      if (this.isSolidAt(n, l, o)) return l + 1;
    return -1 / 0;
  }
  precipitationSurfaceY(e, t, i = 0) {
    const n = Math.floor(e),
      o = Math.floor(t);
    for (let a = jt - 1; a >= Math.max(0, Math.floor(i)); a--) {
      const r = this.getBlock(n, a, o);
      if (!(r === v.AIR || r === v.WATER || r === v.LAVA)) {
        if (zn(r) || Io(r)) {
          if ((this.getMeta(n, a, o) & fn) === 0) return a;
          continue;
        }
        if (le[r]?.solid) return a;
      }
    }
    return -1;
  }
  update(e, t, i = 0, n = 0, o = !1) {
    ((this.mapSampleTime = performance.now()),
      (this.flightSurface = o && Math.hypot(i, n) > 14),
      this.updateGates(),
      this.chestLids.update(
        Math.min(
          0.05,
          Math.max(0, (performance.now() - this.lidLastTime) / 1e3),
        ),
      ),
      (this.lidLastTime = performance.now()),
      this.cullLeaves(e, t));
    const a = Math.floor(e / ke),
      r = Math.floor(t / ke),
      l = this.flightRadius ?? this.renderDist,
      c = Math.hypot(i, n);
    ((this.lastPcx = a), (this.lastPcz = r), (this.lastSpeed = c));
    const h = c > 14,
      d = c > 28,
      u = this.flightSurface || c > 45 ? 64 : d ? 48 : h ? 36 : 28,
      f = h ? Math.min(16, Math.ceil((c * 4) / ke)) : 0,
      p = Math.min(28, l + f),
      m = performance.now();
    ((this.chunkRequestTokens = Math.min(
      32,
      this.chunkRequestTokens + Math.max(0, m - this.chunkRequestAt) * 0.192,
    )),
      (this.chunkRequestAt = m));
    const g = Math.min(d ? 12 : 10, Math.floor(this.chunkRequestTokens)),
      y = 2,
      b = (T, x, R) => {
        if (Math.max(Math.abs(T), Math.abs(x)) <= l + R) return !0;
        if (!h) return !1;
        const _ = (T * i + x * n) / c,
          C = Math.abs(T * n - x * i) / c;
        return (
          _ >= 0 && C <= 2 + R && Math.max(Math.abs(T), Math.abs(x)) <= p + R
        );
      },
      S = (this.requestedAt ??= new Map());
    if (this.requested.size > 0) {
      const T = performance.now();
      for (const x of this.requested) {
        const R = x.indexOf(","),
          _ = +x.slice(0, R),
          C = +x.slice(R + 1),
          P = S.get(x) ?? T,
          O = Math.max(Math.abs(_ - a), Math.abs(C - r)),
          B = T - P > (O <= 3 ? 2500 : 5e3);
        ((!this.previewChunks?.has(x) && !b(_ - a, C - r, 2)) || B) &&
          (this.requested.delete(x),
          S.delete(x),
          B && (this.streamScanKey = ""));
      }
    }
    let M = 0;
    for (const T of this.previewChunks ?? []) {
      if (this.requested.size >= u || M >= g) break;
      if (this.chunks.has(T) || this.requested.has(T)) continue;
      const [x, R] = T.split(",").map(Number);
      (this.border?.radius &&
        !Lw(this.border, x * ke, R * ke, ke) &&
        !this.inView(x, R)) ||
        (this.requested.add(T),
        S.set(T, performance.now()),
        this.requestChunk(x, R),
        M++,
        this.chunkRequestTokens--);
    }
    const E = `${a},${r},${l},${h ? Math.round(i / 3) : 0},${h ? Math.round(n / 3) : 0},${this.chunks.size},${this.requested.size}`;
    if (g > M && this.requested.size < u && E !== this.streamScanKey) {
      this.streamScanKey = E;
      const T = c > 1 ? 1 / c : 0,
        x = i * T,
        R = n * T,
        _ = u - this.requested.size,
        C = this.reqScratch;
      C.length = 0;
      const P = d ? 0.55 : h ? 0.75 : 1;
      for (let B = -p; B <= p; B++)
        for (let H = -p; H <= p; H++) {
          const D = Math.max(Math.abs(B), Math.abs(H)),
            U = B * x + H * R,
            W = Math.abs(B * R - H * x);
          if (
            (D > l && (U < 0 || W > 2)) ||
            (h &&
              D > 2 &&
              (B * x + H * R < -0.15 * D ||
                (P < 1 && Math.abs(B * R - H * x) > D * P && D > l * 0.55))) ||
            (this.border?.radius &&
              !Lw(this.border, (a + B) * ke, (r + H) * ke, ke) &&
              !this.inView(a + B, r + H))
          )
            continue;
          const J = Xs(a + B, r + H);
          if (this.chunks.has(J) || this.requested.has(J)) continue;
          const j = Math.abs(B) + Math.abs(H),
            ne = B * x + H * R,
            ge =
              D <= 1
                ? -100 + j
                : j - Math.max(0, ne) * (h ? 0.65 : 0) + W * (h ? 1.5 : 0);
          C.push({ key: J, cx: a + B, cz: r + H, score: ge });
        }
      C.length > 1 && C.sort((B, H) => B.score - H.score);
      const O = Math.min(C.length, _, g - M);
      for (let B = 0; B < O; B++) {
        const H = C[B];
        (this.requested.add(H.key),
          S.set(H.key, performance.now()),
          this.requestChunk(H.cx, H.cz),
          this.chunkRequestTokens--);
      }
    }
    for (const [T, x] of this.chunks)
      if (!this.previewChunks?.has(T) && !b(x.cx - a, x.cz - r, y)) {
        (this.removeGateChunk(x.cx, x.cz),
          this.removeDoorChunk(x.cx, x.cz),
          this.chestLids.removeChunk(x.cx, x.cz),
          this.aviationLights.removeChunk(x.cx, x.cz),
          this.disposeMeshes(x),
          this.chunks.delete(T));
        for (const R of this.seamGroups) R.delete(x);
        ((this.seamGroups = this.seamGroups.filter((R) => R.size > 1)),
          this.invalidateSurfMemo());
      }
    const A = h ? 0 : 18;
    if (!(performance.now() - this.lastRemeshAt < A))
      for (let T = 0; T < Math.max(2, this.meshWorkers.length); T++) {
        let x,
          R = 2,
          _ = 2,
          C = 1 / 0,
          P = 1 / 0;
        for (const O of this.chunks.values()) {
          if (
            (O.surfaceMesh &&
              !this.wantsSurface(O) &&
              ((O.dirty = !0), (O.dirtyPri = 0)),
            !O.dirty)
          )
            continue;
          const B = Math.max(Math.abs(O.cx - a), Math.abs(O.cz - r)),
            H = O.mesh && O.dirtyPri === 0 && B <= 1 ? 0 : 1;
          if (
            (O.meshPending && H !== 0) ||
            (h && O.dirtyPri > 0 && O.mesh && B > 3)
          )
            continue;
          const D = O.mesh && !O.surfaceMesh ? 1 : 0,
            U = O.cx - a,
            W = O.cz - r,
            J =
              B <= 1
                ? -100 + B
                : Math.abs(U) +
                  Math.abs(W) -
                  (h ? Math.max(0, (U * i + W * n) / c) * 0.65 : 0);
          (H < R ||
            (H === R &&
              (D < _ ||
                (D === _ &&
                  (O.dirtyPri < C || (O.dirtyPri === C && J < P)))))) &&
            ((x = O), (R = H), (_ = D), (C = O.dirtyPri), (P = J));
        }
        if (x) {
          const O = this.seamGroups.findIndex((W) => W.has(x)),
            B = O >= 0 ? this.seamGroups.splice(O, 1)[0] : new Set([x]);
          let H = !0;
          const D = (W) =>
              !!W.mesh &&
              !W.surfaceMesh &&
              W.dirtyPri === 0 &&
              Math.max(Math.abs(W.cx - a), Math.abs(W.cz - r)) <= 1,
            U = B.size > 1 && [...B].some(D);
          for (const W of B)
            if (W.dirty && this.chunks.get(Xs(W.cx, W.cz)) === W) {
              if (!U && !D(W) && this.queueFlightMesh(W)) continue;
              ((H = !1), this.remesh(W));
            }
          if (!H) {
            this.lastRemeshAt = performance.now();
            break;
          }
        } else break;
      }
  }
  setChunkShadows(e) {
    this.chunkShadows = e;
    for (const t of this.chunks.values()) t.mesh && (t.mesh.castShadow = e);
    for (const t of this.doors.values()) t.mesh.castShadow = e;
    this.chestLids.setShadows(e);
  }
  remeshAll() {
    for (const e of this.chunks.values())
      (e.dirty || (e.dirtyPri = 1),
        (e.dirty = !0),
        (e.revision = (e.revision ?? 0) + 1));
  }
  probeLight(e, t, i) {
    return this.sampleLight(e, t, i, !1);
  }
  probeSky(e, t, i) {
    return this.sampleLight(e, t, i, !0);
  }
  probeSkyOpen(e, t, i) {
    const n = Math.floor(Math.floor(e) / ke),
      o = Math.floor(Math.floor(i) / ke);
    return this.chunks.get(Xs(n, o))?.skylight
      ? this.sampleLight(e, t, i, !0)
      : 1;
  }
  sampleLight(e, t, i, n) {
    if (((e = Math.floor(e)), (t = Math.floor(t)), (i = Math.floor(i)), t < 0))
      return 0;
    if (t >= jt) return n ? 1 : 0;
    const o = Math.floor(e / ke),
      a = Math.floor(i / ke),
      r = this.chunks.get(Xs(o, a)),
      l = n ? r?.skylight : r?.light;
    return l ? l[Ai(e - o * ke, t, i - a * ke)] / 15 : 0;
  }
  disposeMeshes(e) {
    (e.mesh &&
      (this.scene.remove(e.mesh), e.mesh.geometry.dispose(), (e.mesh = null)),
      e.waterMesh &&
        (this.scene.remove(e.waterMesh),
        e.waterMesh.geometry.dispose(),
        (e.waterMesh = null)),
      e.waterColumnMesh &&
        (this.scene.remove(e.waterColumnMesh),
        e.waterColumnMesh.geometry.dispose(),
        (e.waterColumnMesh = null)),
      e.lavaMesh &&
        (this.scene.remove(e.lavaMesh),
        e.lavaMesh.geometry.dispose(),
        (e.lavaMesh = null)));
  }
  clearDimension() {
    for (const e of this.meshWorkers) e.worker.terminate();
    ((this.meshWorkers = []), this.signs.clear(), (this.streamScanKey = ""));
    for (const e of this.chunks.values())
      (this.disposeMeshes(e), this.aviationLights.removeChunk(e.cx, e.cz));
    (this.chunks.clear(),
      (this.seamGroups = []),
      this.requested.clear(),
      this.requestedAt?.clear(),
      (this.previewChunks = void 0));
    for (const e of [...this.gates.keys()]) this.removeGate(e);
    for (const e of [...this.doors.keys()]) this.removeDoor(e);
    (this.mapTiles.clear(),
      this.mapGuess.clear(),
      this.invalidateSurfMemo(),
      this.mapPending.clear(),
      this.mapQueue.clear(),
      (this.mapQueueLod = -1),
      this.mapFlushTimer !== void 0 && clearTimeout(this.mapFlushTimer),
      (this.mapFlushTimer = void 0),
      (this.lastPcx = 1 / 0),
      (this.lastPcz = 1 / 0));
  }
  computeLight(e, t) {
    return this.lighting.compute(e, t, (i, n) => this.chunks.get(Xs(i, n)));
  }
  queueFlightMesh(e) {
    if (e.meshPending) return !0;
    if (this.meshWorkerFailed || typeof Worker > "u") return !1;
    if (!this.meshWorkers.length)
      try {
        for (
          let r = 0;
          r <
          Math.min(4, Math.max(2, (navigator.hardwareConcurrency || 4) - 2));
          r++
        )
          this.meshWorkers.push({
            worker: new Worker(
              new URL(
                "/assets/chunk-mesh-worker-coep-v1-GBSiXDQy.js",
                import.meta.url,
              ),
              { type: "module" },
            ),
            busy: !1,
          });
      } catch {
        for (const r of this.meshWorkers) r.worker.terminate();
        return ((this.meshWorkers = []), (this.meshWorkerFailed = !0), !1);
      }
    if (this.meshWorkers.every((r) => r.busy)) return !0;
    const t = [];
    for (let r = -1; r <= 1; r++)
      for (let l = -1; l <= 1; l++) {
        const c = Xs(e.cx + r, e.cz + l),
          h = this.chunks.get(c);
        t.push({ key: c, chunk: h, revision: h?.revision ?? 0 });
      }
    let i = this.meshWorkers.find((r) => !r.busy),
      n = -1;
    for (const r of this.meshWorkers)
      if (!r.busy) {
        const l = t.reduce((c, h) => {
          const d = r.cache?.get(h.key);
          return (
            c +
            +(!!h.chunk && d?.chunk === h.chunk && d?.revision === h.revision)
          );
        }, 0);
        l > n && ((n = l), (i = r));
      }
    const o = this.wantsSurface(e);
    ((e.meshPending = !0), (i.busy = !0));
    const a = () => {
      this.meshWorkerFailed = !0;
      for (const r of this.meshWorkers) r.worker.terminate();
      this.meshWorkers = [];
      for (const r of this.chunks.values()) r.meshPending = !1;
    };
    ((i.worker.onerror = a),
      (i.worker.onmessage = (r) => {
        if (
          ((i.busy = !1),
          (e.meshPending = !1),
          this.chunks.get(Xs(e.cx, e.cz)) !== e ||
            t.some(
              (h) =>
                h.chunk &&
                (this.chunks.get(h.key) !== h.chunk ||
                  (h.chunk.revision ?? 0) !== h.revision),
            ))
        )
          return;
        const l = t.some((h) => !h.chunk && this.chunks.has(h.key)),
          c = r.data;
        (o && !this.wantsSurface(e)) ||
          (o || ((e.light = c.light), (e.skylight = c.sky)),
          (e.surfaceMesh = o),
          this.applyMesh(e, {
            opaque: qg(c.opaque),
            water: qg(c.water),
            waterColumns: qg(c.waterColumns),
            lava: qg(c.lava),
          }),
          l && ((e.dirty = !0), (e.dirtyPri = 1)));
      }));
    try {
      const r = (i.cache ??= new Map()),
        l = [],
        c = [];
      for (const { key: h, chunk: d, revision: u } of t)
        if (d) {
          const f = r.get(h);
          ((f?.chunk !== d || f.revision !== u) &&
            l.push({
              cx: d.cx,
              cz: d.cz,
              data: d.data,
              meta: d.meta,
              emitters: d.emitters,
            }),
            r.delete(h),
            r.set(h, { chunk: d, revision: u }),
            c.push(h));
        }
      for (; r.size > Sre;) r.delete(r.keys().next().value);
      i.worker.postMessage({
        cx: e.cx,
        cz: e.cz,
        seed: this.tintSeed ?? this.seed,
        smooth: this.smoothLighting,
        fancy: this.fancyLeaves,
        surface: o,
        sealed: this.sealedNeighbours(e.cx, e.cz),
        chunks: l,
        cacheKeys: c,
      });
    } catch {
      return (a(), !1);
    }
    return !0;
  }
  sealedNeighbours(e, t) {
    const i = this.border;
    if (!i?.radius) return 0;
    let n = 0;
    for (let o = -1; o <= 1; o++)
      for (let a = -1; a <= 1; a++)
        !Lw(i, (e + o) * ke, (t + a) * ke, ke) &&
          !this.inView(e + o, t + a) &&
          (n |= 1 << ((o + 1) * 3 + (a + 1)));
    return n;
  }
  remesh(e) {
    if (this.wantsSurface(e)) {
      (this.meshSource.setup(e.cx, e.cz),
        (e.surfaceMesh = !0),
        this.applyMesh(
          e,
          $j(this.meshSource, e.cx, e.cz, this.tintSeed ?? this.seed),
        ));
      return;
    }
    ((e.surfaceMesh = !1),
      this.meshSource.setup(e.cx, e.cz, this.sealedNeighbours(e.cx, e.cz)));
    const t = this.computeLight(e.cx, e.cz);
    ((e.light ??= new Uint8Array(Zp)), (e.skylight ??= new Uint8Array(Zp)));
    for (let a = 0; a < ke; a++)
      for (let r = 0; r < ke; r++)
        for (let l = 0; l < jt; l++) {
          const c = Ai(a, l, r),
            h = e.cx * ke + a,
            d = e.cz * ke + r;
          ((e.light[c] = t.at(h, l, d)), (e.skylight[c] = t.skyAt(h, l, d)));
        }
    const {
      opaque: i,
      water: n,
      lava: o,
    } = jA(
      this.meshSource,
      e.cx,
      e.cz,
      t,
      this.smoothLighting,
      this.fancyLeaves,
      this.tintSeed ?? this.seed,
    );
    this.applyMesh(e, { opaque: i, water: n, lava: o });
  }
  applyMesh(e, { opaque: t, water: i, lava: n, waterColumns: o = bre(e) }) {
    (this.relightDoors(e.cx, e.cz), this.chestLids.relightChunk(e.cx, e.cz));
    for (const f of this.gates.values())
      f.cx === e.cx && f.cz === e.cz && this.relightGate(f);
    const a = e.mesh,
      r = e.waterMesh,
      l = e.lavaMesh,
      c = e.waterColumnMesh;
    let h = null,
      d = null,
      u = null;
    if (t) {
      const f = new Q(t, this.opaqueMat);
      ((f.castShadow = this.chunkShadows),
        (f.receiveShadow = !0),
        (f.matrixAutoUpdate = !1),
        (f.frustumCulled = !0),
        t.boundingSphere || t.computeBoundingSphere(),
        this.scene.add(f),
        (h = f));
    }
    if (i) {
      Ere(i, this.seed);
      const f = new Q(i, this.waterMat);
      ((f.matrixAutoUpdate = !1),
        (f.frustumCulled = !0),
        (f.renderOrder = zi.water),
        f.layers.enable(qO),
        i.boundingSphere || i.computeBoundingSphere(),
        this.scene.add(f),
        (d = f));
    }
    if (n) {
      const f = new Q(n, this.lavaMat);
      ((f.matrixAutoUpdate = !1),
        (f.frustumCulled = !0),
        n.boundingSphere || n.computeBoundingSphere(),
        this.scene.add(f),
        (u = f));
    }
    if (((e.waterColumnMesh = null), o)) {
      const f = new Q(o, this.waterColumnMat);
      (f.layers.set(KO),
        (f.matrixAutoUpdate = !1),
        o.boundingSphere || o.computeBoundingSphere(),
        this.scene.add(f),
        (e.waterColumnMesh = f));
    }
    ((e.mesh = h), (e.waterMesh = d), (e.lavaMesh = u));
    for (const f of [a, r, l, c])
      f && (this.scene.remove(f), f.geometry.dispose());
    ((e.dirty = !1), (e.dirtyPri = 0));
  }
  blockHitBoxes(e, t, i = 0, n = 0, o = 0) {
    const a = le[e]?.shape;
    if (e === v.SIGN) return ZI(t);
    if (e === v.CACTUS) return BC;
    const r = Ev(
      e,
      t,
      (l, c, h) => this.getBlock(l, c, h),
      (l, c, h) => this.getMeta(l, c, h),
      i,
      n,
      o,
    );
    if (r) return r.map((l) => l.box);
    if (Cl(e))
      return i4(
        e,
        bm((l, c, h) => this.getBlock(l, c, h), i, n, o, t),
      );
    if (a === "furniture") return Of(e, t).map((l) => l.box);
    if (a === "ladder")
      return (t & 7) === 1
        ? [[0, 0, 0, 0.18, 1, 1]]
        : (t & 7) === 2
          ? [[1 - 0.18, 0, 0, 1, 1, 1]]
          : (t & 7) === 3
            ? [[0, 0, 0, 1, 1, 0.18]]
            : [[0, 0, 1 - 0.18, 1, 1, 1]];
    if (a === "bed") return Ex(t);
    if (a === "door") {
      const l = o1(t);
      if (!(t & wr)) return [l];
      const [c, h, d, u, f, p] = l;
      if (u - c > p - d) {
        const b = c + (u - c) * 0.25,
          S = c + (u - c) * 0.75;
        return [
          [c, h, d, b, f, p],
          [S, h, d, u, f, p],
          [b, h, d, S, h + 0.25, p],
          [b, h + 0.625, d, S, f, p],
        ];
      }
      const g = d + (p - d) * 0.25,
        y = d + (p - d) * 0.75;
      return [
        [c, h, d, u, f, g],
        [c, h, y, u, f, p],
        [c, h, g, u, h + 0.25, y],
        [c, h + 0.625, g, u, f, y],
      ];
    }
    if (a === "torch") {
      const l = [
          [0, 0],
          [-0.34, 0],
          [0.34, 0],
          [0, -0.34],
          [0, 0.34],
        ],
        [c, h] = l[t & 7] ?? l[0],
        d = 0.5 + c,
        u = 0.5 + h,
        f = (t & 7) === 0 ? 0 : 0.15,
        p = 0.17;
      return [[d - p, f, u - p, d + p, f + 0.72, u + p]];
    }
    if (a === "stair") {
      const l = zC[t & 3];
      if (l) return l;
      const c = [[0, 0, 0, 1, 0.5, 1]],
        [h, d] = Qo[t & 3] ?? Qo[0];
      let u = 0,
        f = 1,
        p = 0,
        m = 1;
      return (
        h !== 0
          ? h > 0
            ? (u = 0.5)
            : (f = 0.5)
          : d > 0
            ? (p = 0.5)
            : (m = 0.5),
        c.push([u, 0.5, p, f, 1, m]),
        (zC[t & 3] = c),
        c
      );
    }
    return a === "snow"
      ? [[0, 0, 0, 1, Math.max(1, Math.min(8, (t & 7) + 1)) / 8, 1]]
      : a === "fence"
        ? this.fenceBoxes(i, n, o, 1)
        : a === "gate"
          ? t & fn
            ? (t & 1) === 0
              ? [
                  [0, 0.3, 0, 0.14, 1, 1],
                  [0.86, 0.3, 0, 1, 1, 1],
                ]
              : [
                  [0, 0.3, 0, 1, 1, 0.14],
                  [0, 0.3, 0.86, 1, 1, 1],
                ]
            : (t & 1) === 0
              ? [[0, 0.3, 0.42, 1, 1, 0.58]]
              : [[0.42, 0.3, 0, 0.58, 1, 1]]
          : a === "lantern"
            ? [[0.2, 0.08, 0.2, 0.8, 0.78, 0.8]]
            : a === "chain"
              ? kO((l, c, h) => this.getBlock(l, c, h), i, n, o).map((l) => {
                  const c = [0.36, 0.36, 0.36, 0.64, 0.64, 0.64];
                  return ((c[l] = 0), (c[l + 3] = 1), c);
                })
              : a === "wire"
                ? [[0.08, 0.08, 0.08, 0.92, 0.82, 0.92]]
                : a === "composter"
                  ? [[0.07, 0, 0.07, 0.93, 0.98, 0.93]]
                  : a === "litter"
                    ? [[0, 0, 0, 1, 0.08, 1]]
                    : a === "candle"
                      ? [[0.26, 0, 0.26, 0.74, 0.5, 0.74]]
                      : a === "hanging"
                        ? [[0.15, 0.15, 0.15, 0.85, 1, 0.85]]
                        : null;
  }
  fenceBoxes(e, t, i, n) {
    const o = (a, r) => dA(this.getBlock(e + a, t, i + r));
    return nW(o(-1, 0), o(1, 0), o(0, -1), o(0, 1), n);
  }
  collisionBoxes(e, t, i = 0, n = 0, o = 0) {
    return e === v.RADIO_RELAY
      ? Ev(e, t).map((a) => a.box)
      : e === v.MINE_AP || e === v.MINE_AT
        ? null
        : e === v.CACTUS
          ? BC
          : Cl(e)
            ? i4(
                e,
                bm((a, r, l) => this.getBlock(a, r, l), i, n, o, t),
              )
            : le[e]?.shape === "furniture"
              ? Of(e, t).map((a) => a.box)
              : zn(e)
                ? t & fn
                  ? null
                  : [o1(t)]
                : le[e]?.shape === "fence"
                  ? this.fenceBoxes(i, n, o, 1.5)
                  : le[e]?.shape === "composter"
                    ? [[0.07, 0, 0.07, 0.93, 0.98, 0.93]]
                    : le[e]?.shape === "bed"
                      ? Ex(t)
                      : le[e]?.shape === "stair"
                        ? this.blockHitBoxes(e, t)
                        : Io(e)
                          ? t & fn
                            ? null
                            : (t & 1) === 0
                              ? [[0, 0, 0.36, 1, 1.5, 0.64]]
                              : [[0.36, 0, 0, 0.64, 1.5, 1]]
                          : null;
  }
  aabbHitsLocalBox(e, t, i, n, o, a, r, l, c, h) {
    return (
      n >= r + h[0] &&
      e <= r + h[3] &&
      o > l + h[1] &&
      t < l + h[4] &&
      a >= c + h[2] &&
      i <= c + h[5]
    );
  }
  rayBox(e, t, i, n, o, a, r, l, c, h, d, u) {
    let f = -1 / 0,
      p = 1 / 0,
      m = 0,
      g = 0;
    const y = [e, t, i],
      b = [n, o, a],
      S = [r, l, c],
      M = [h, d, u];
    for (let A = 0; A < 3; A++)
      if (Math.abs(b[A]) < 1e-9) {
        if (y[A] < S[A] || y[A] > M[A]) return null;
      } else {
        const T = 1 / b[A];
        let x = (S[A] - y[A]) * T,
          R = (M[A] - y[A]) * T,
          _ = -1;
        if (x > R) {
          const C = x;
          ((x = R), (R = C), (_ = 1));
        }
        if ((x > f && ((f = x), (m = A), (g = _)), R < p && (p = R), f > p))
          return null;
      }
    const E = f >= 0 ? f : p;
    return E < 0
      ? null
      : { t: E, nx: m === 0 ? g : 0, ny: m === 1 ? g : 0, nz: m === 2 ? g : 0 };
  }
  sightClear(e, t, i, n, o, a) {
    const r = n - e,
      l = o - t,
      c = a - i,
      h = Math.hypot(r, l, c);
    if (h < 1) return !0;
    const d = r / h,
      u = l / h,
      f = c / h;
    let p = Math.floor(e),
      m = Math.floor(t),
      g = Math.floor(i);
    const y = Math.floor(n),
      b = Math.floor(o),
      S = Math.floor(a),
      M = d >= 0 ? 1 : -1,
      E = u >= 0 ? 1 : -1,
      A = f >= 0 ? 1 : -1,
      T = d ? Math.abs(1 / d) : 1 / 0,
      x = u ? Math.abs(1 / u) : 1 / 0,
      R = f ? Math.abs(1 / f) : 1 / 0;
    let _ = d ? (M > 0 ? p + 1 - e : e - p) * T : 1 / 0,
      C = u ? (E > 0 ? m + 1 - t : t - m) * x : 1 / 0,
      P = f ? (A > 0 ? g + 1 - i : i - g) * R : 1 / 0;
    for (let O = 0; O < 600; O++) {
      if (_ < C && _ < P) {
        if (_ > h) break;
        ((p += M), (_ += T));
      } else if (C < P) {
        if (C > h) break;
        ((m += E), (C += x));
      } else {
        if (P > h) break;
        ((g += A), (P += R));
      }
      if (p === y && m === b && g === S) break;
      const B = this.getBlock(p, m, g);
      if (!B) continue;
      const H = le[B];
      if (H?.solid && (!H.transparent || en(B))) return !1;
    }
    return !0;
  }
  raycast(e, t, i, n = !1, o = !1) {
    let a = Math.floor(e.x),
      r = Math.floor(e.y),
      l = Math.floor(e.z);
    const c = t.x >= 0 ? 1 : -1,
      h = t.y >= 0 ? 1 : -1,
      d = t.z >= 0 ? 1 : -1,
      u = t.x !== 0 ? Math.abs(1 / t.x) : 1 / 0,
      f = t.y !== 0 ? Math.abs(1 / t.y) : 1 / 0,
      p = t.z !== 0 ? Math.abs(1 / t.z) : 1 / 0;
    let m = t.x !== 0 ? (c > 0 ? a + 1 - e.x : e.x - a) * u : 1 / 0,
      g = t.y !== 0 ? (h > 0 ? r + 1 - e.y : e.y - r) * f : 1 / 0,
      y = t.z !== 0 ? (d > 0 ? l + 1 - e.z : e.z - l) * p : 1 / 0,
      b = 0,
      S = 0,
      M = 0,
      E = 0;
    const A = this.getBlock(a, r, l);
    if (!o && (zn(A) || Io(A))) {
      const x = this.getMeta(a, r, l),
        R = zn(A) ? [o1(x)] : (this.blockHitBoxes(A, x, a, r, l) ?? []);
      let _ = null;
      for (const C of R) {
        if (
          e.x > a + C[0] &&
          e.x < a + C[3] &&
          e.y > r + C[1] &&
          e.y < r + C[4] &&
          e.z > l + C[2] &&
          e.z < l + C[5]
        )
          continue;
        const O = this.rayBox(
          e.x,
          e.y,
          e.z,
          t.x,
          t.y,
          t.z,
          a + C[0],
          r + C[1],
          l + C[2],
          a + C[3],
          r + C[4],
          l + C[5],
        );
        O && O.t <= i && (!_ || O.t < _.t) && (_ = O);
      }
      if (_)
        return {
          bx: a,
          by: r,
          bz: l,
          nx: _.nx,
          ny: _.ny,
          nz: _.nz,
          dist: _.t,
          block: A,
          point: e.clone().addScaledVector(t, _.t),
        };
    }
    const T =
      Math.ceil(i * (Math.abs(t.x) + Math.abs(t.y) + Math.abs(t.z))) + 3;
    for (let x = 0; x < T; x++) {
      if (
        (m < g && m < y
          ? ((a += c), (b = m), (m += u), (S = -c), (M = 0), (E = 0))
          : g < y
            ? ((r += h), (b = g), (g += f), (S = 0), (M = -h), (E = 0))
            : ((l += d), (b = y), (y += p), (S = 0), (M = 0), (E = -d)),
        b > i)
      )
        return null;
      const R = r >= 0 && r < jt ? this.getBlock(a, r, l) : 0;
      if (R !== 0 && (n || !le[R].liquid)) {
        const _ = this.getMeta(a, r, l),
          C = zn(R) && !o ? [o1(_)] : this.blockHitBoxes(R, _, a, r, l);
        if (!C)
          return {
            bx: a,
            by: r,
            bz: l,
            nx: S,
            ny: M,
            nz: E,
            dist: b,
            block: R,
            point: e.clone().addScaledVector(t, b),
          };
        let P = null;
        for (const O of C) {
          const B = this.rayBox(
            e.x,
            e.y,
            e.z,
            t.x,
            t.y,
            t.z,
            a + O[0],
            r + O[1],
            l + O[2],
            a + O[3],
            r + O[4],
            l + O[5],
          );
          B && B.t <= i && (!P || B.t < P.t) && (P = B);
        }
        if (P)
          return {
            bx: a,
            by: r,
            bz: l,
            nx: P.nx,
            ny: P.ny,
            nz: P.nz,
            dist: P.t,
            block: R,
            point: e.clone().addScaledVector(t, P.t),
          };
      }
    }
    return null;
  }
  raycastBullet(e, t, i, n) {
    const o = [],
      a = e.clone();
    let r = 0,
      l = n;
    for (let c = 0; c < n + 6; c++) {
      const h = this.raycast(a, t, i - r, !1, !0);
      if (!h) return { hit: null, torn: o };
      const d = { ...h, dist: h.dist + r },
        u = ra(h.block),
        f = en(h.block);
      if (!u && !(f && l > 0)) return { hit: d, torn: o };
      if ((f && l--, o.push(d), (r = d.dist + 0.05), r >= i))
        return { hit: null, torn: o };
      a.copy(e).addScaledVector(t, r);
    }
    return { hit: null, torn: o };
  }
  propColliders = [];
  cabinetBoxes = [];
  computerBoxes = [];
  get casinoColliders() {
    return this.cabinetBoxes;
  }
  set casinoColliders(e) {
    ((this.cabinetBoxes = e),
      (this.propColliders = [...e, ...this.computerBoxes]));
  }
  get computerColliders() {
    return this.computerBoxes;
  }
  set computerColliders(e) {
    ((this.computerBoxes = e),
      (this.propColliders = [...this.cabinetBoxes, ...e]));
  }
  boxCollides(e, t, i, n, o, a) {
    if (
      this.propColliders.some(
        (r) =>
          e < r.max.x &&
          n > r.min.x &&
          t < r.max.y &&
          o > r.min.y &&
          i < r.max.z &&
          a > r.min.z,
      )
    )
      return !0;
    for (let r = Math.floor(e); r <= Math.floor(n); r++)
      for (let l = Math.floor(t) - 1; l <= Math.floor(o); l++)
        for (let c = Math.floor(i); c <= Math.floor(a); c++) {
          const h = this.getBlock(r, l, c),
            d = this.collisionBoxes(h, this.getMeta(r, l, c), r, l, c);
          if (d) {
            if (
              d.some((u) => this.aabbHitsLocalBox(e, t, i, n, o, a, r, l, c, u))
            )
              return !0;
          } else if (this.isSolidAt(r, l, c) && l + 1 > t) return !0;
        }
    return !1;
  }
  boxCollidesStair(e, t, i, n, o, a) {
    const r = this.propColliders.find(
      (m) =>
        e < m.max.x &&
        n > m.min.x &&
        t < m.max.y &&
        o > m.min.y &&
        i < m.max.z &&
        a > m.min.z,
    );
    if (r)
      return {
        blocked: !0,
        allStairs: !1,
        minX: r.min.x,
        maxX: r.max.x,
        minZ: r.min.z,
        maxZ: r.max.z,
        top: r.max.y,
      };
    let l = !1,
      c = !0,
      h = 1 / 0,
      d = -1 / 0,
      u = 1 / 0,
      f = -1 / 0,
      p = -1 / 0;
    for (let m = Math.floor(e); m <= Math.floor(n); m++)
      for (let g = Math.floor(t) - 1; g <= Math.floor(o); g++)
        for (let y = Math.floor(i); y <= Math.floor(a); y++) {
          const b = this.getBlock(m, g, y);
          if (b === 0) continue;
          const S =
            this.collisionBoxes(b, this.getMeta(m, g, y), m, g, y) ??
            (this.isSolidAt(m, g, y) && g + 1 > t ? Kg : null);
          if (!S) continue;
          let M = !1;
          for (const E of S)
            (S !== Kg &&
              !this.aabbHitsLocalBox(e, t, i, n, o, a, m, g, y, E)) ||
              ((M = !0),
              (h = Math.min(h, m + E[0])),
              (d = Math.max(d, m + E[3])),
              (u = Math.min(u, y + E[2])),
              (f = Math.max(f, y + E[5])),
              (p = Math.max(p, g + E[4])));
          M && ((l = !0), this.isStairAt(m, g, y) || (c = !1));
        }
    return {
      blocked: l,
      allStairs: c,
      minX: h,
      maxX: d,
      minZ: u,
      maxZ: f,
      top: p,
    };
  }
  boxFree(e, t, i, n, o) {
    const a = n / 2;
    return !this.boxCollides(e - a, t, i - a, e + a, t + o, i + a);
  }
  verticalSurface(e, t, i, n, o, a) {
    const r = i / 2,
      l = 0.001;
    let c = null;
    for (const h of this.propColliders) {
      if (
        e + r - l <= h.min.x ||
        e - r >= h.max.x ||
        t + r - l <= h.min.z ||
        t - r >= h.max.z
      )
        continue;
      const d = a ? h.max.y : h.min.y;
      (a ? d <= n + l && d >= o - l : d >= n - l && d <= o + l) &&
        (c = c === null ? d : a ? Math.max(c, d) : Math.min(c, d));
    }
    for (let h = Math.floor(e - r); h <= Math.floor(e + r - l); h++)
      for (let d = Math.floor(t - r); d <= Math.floor(t + r - l); d++)
        for (
          let u = Math.floor(Math.min(n, o)) - 1;
          u <= Math.floor(Math.max(n, o));
          u++
        ) {
          const f = this.getBlock(h, u, d),
            p = this.getMeta(h, u, d);
          if (f === 0) continue;
          const m = this.collisionBoxes(f, p, h, u, d);
          if (!(!m && !this.isSolidAt(h, u, d)))
            for (const g of m ?? Kg) {
              if (
                e + r - l <= h + g[0] ||
                e - r >= h + g[3] ||
                t + r - l <= d + g[2] ||
                t - r >= d + g[5]
              )
                continue;
              const y = u + g[a ? 4 : 1];
              (a ? y <= n + l && y >= o - l : y >= n - l && y <= o + l) &&
                (c = c === null ? y : a ? Math.max(c, y) : Math.min(c, y));
            }
        }
    return c;
  }
  resolveOverlap(e, t, i) {
    const o = t / 2;
    if (this.boxFree(e.x, e.y + 0.002, e.z, t - 0.002, i - 0.002 * 2))
      return !0;
    const a = [],
      r = (c, h, d) => {
        const u = Math.hypot(c - e.x, h - e.y, d - e.z);
        u <= 1.75 &&
          a.push({ x: c, y: h, z: d, score: u + (h === e.y ? 0 : 0.12) });
      },
      l = (c, h, d, u, f, p) => {
        e.x + o <= c ||
          e.x - o >= u ||
          e.y + i - 0.002 <= h ||
          e.y + 0.002 >= f ||
          e.z + o <= d ||
          e.z - o >= p ||
          (r(c - o - 0.002, e.y, e.z),
          r(u + o + 0.002, e.y, e.z),
          r(e.x, e.y, d - o - 0.002),
          r(e.x, e.y, p + o + 0.002),
          r(e.x, f + 0.002, e.z));
      };
    for (const c of this.propColliders)
      l(c.min.x, c.min.y, c.min.z, c.max.x, c.max.y, c.max.z);
    for (let c = Math.floor(e.x - o); c <= Math.floor(e.x + o); c++)
      for (let h = Math.floor(e.z - o); h <= Math.floor(e.z + o); h++)
        for (let d = Math.floor(e.y) - 1; d <= Math.floor(e.y + i); d++) {
          const u = this.getBlock(c, d, h),
            f =
              this.collisionBoxes(u, this.getMeta(c, d, h), c, d, h) ??
              (this.isSolidAt(c, d, h) ? Kg : []);
          for (const p of f)
            l(c + p[0], d + p[1], h + p[2], c + p[3], d + p[4], h + p[5]);
        }
    a.sort((c, h) => c.score - h.score);
    for (const c of a)
      if (
        this.isLoaded(c.x, c.z) &&
        this.boxFree(c.x, c.y + 0.002, c.z, t - 0.002, i - 0.002 * 2)
      )
        return (e.set(c.x, c.y, c.z), !0);
    return !1;
  }
  collideMove(e, t, i, n, o) {
    const a = { onGround: !1, hitHoriz: !1, hitTop: !1, stepUp: 0 },
      r = i / 2,
      l = 0.001,
      c = e.x,
      h = e.y,
      d = e.z;
    if (!this.resolveOverlap(e, i, n))
      return (t.set(0, 0, 0), (a.hitHoriz = !0), a);
    (e.x !== c || e.y !== h || e.z !== d) && t.set(0, 0, 0);
    const u = 1.02,
      f = 0.6,
      p = (b) => {
        const S = b.top - e.y;
        return S <= l
          ? 0
          : (b.allStairs && S <= u) || (a.onGround && S <= f)
            ? S
            : 0;
      },
      m = Math.max(Math.abs(t.x), Math.abs(t.y), Math.abs(t.z)) * o,
      g = Math.max(1, Math.ceil(m / 0.4)),
      y = o / g;
    for (let b = 0; b < g; b++) {
      const S = e.y;
      if (((e.y += t.y * y), t.y <= 0)) {
        const A = this.verticalSurface(e.x, e.z, i, S, e.y, !0);
        A !== null && ((e.y = A + l), (t.y = 0), (a.onGround = !0));
      } else {
        const A = e.y + n,
          T = this.verticalSurface(e.x, e.z, i, S + n, A, !1);
        T !== null && ((e.y = T - n - l), (t.y = 0), (a.hitTop = !0));
      }
      const M = e.x;
      if (((e.x += t.x * y), t.x !== 0)) {
        const A = t.x > 0 ? e.x + r : e.x - r,
          T = this.boxCollidesStair(
            Math.min(A, M + (t.x > 0 ? r : -r)),
            e.y + l,
            e.z - r,
            Math.max(A, M + (t.x > 0 ? r : -r)),
            e.y + n - l,
            e.z + r - l,
          );
        if (T.blocked) {
          const x = p(T),
            R = e.y + x + l;
          x > 0 &&
          !this.boxCollides(
            e.x - r,
            R,
            e.z - r,
            e.x + r - l,
            R + n - l,
            e.z + r - l,
          )
            ? ((a.stepUp += R - e.y), (e.y = R))
            : ((e.x = t.x > 0 ? T.minX - r - l : T.maxX + r + l),
              (t.x = 0),
              (a.hitHoriz = !0));
        }
      }
      const E = e.z;
      if (((e.z += t.z * y), t.z !== 0)) {
        const A = t.z > 0 ? e.z + r : e.z - r,
          T = this.boxCollidesStair(
            e.x - r,
            e.y + l,
            Math.min(A, E + (t.z > 0 ? r : -r)),
            e.x + r - l,
            e.y + n - l,
            Math.max(A, E + (t.z > 0 ? r : -r)),
          );
        if (T.blocked) {
          const x = p(T),
            R = e.y + x + l;
          x > 0 &&
          !this.boxCollides(
            e.x - r,
            R,
            e.z - r,
            e.x + r - l,
            R + n - l,
            e.z + r - l,
          )
            ? ((a.stepUp += R - e.y), (e.y = R))
            : ((e.z = t.z > 0 ? T.minZ - r - l : T.maxZ + r + l),
              (t.z = 0),
              (a.hitHoriz = !0));
        }
      }
    }
    return a;
  }
}
