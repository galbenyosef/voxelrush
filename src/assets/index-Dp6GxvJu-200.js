// index-Dp6GxvJu 200 — math
// Lines 107975-110572 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const Nd = class Nd {
  constructor(e, t) {
    w(this, "border");
    w(this, "meshWorkers", []);
    w(this, "meshWorkerFailed", !1);
    w(this, "flightSurface", !1);
    w(this, "seamGroups", []);
    w(this, "chunks", new Map());
    w(this, "requested", new Set());
    w(this, "requestedAt");
    w(this, "previewChunks");
    w(this, "renderDist", 7);
    w(this, "chunkShadows", !1);
    w(this, "smoothLighting", !1);
    w(this, "fancyLeaves", !0);
    w(this, "seed", 0);
    w(this, "requestChunk", () => {});
    w(this, "chunkRequestTokens", 32);
    w(this, "chunkRequestAt", performance.now());
    w(this, "requestMapTiles", () => {});
    w(this, "onMapTileUpdate", () => {});
    w(this, "opaqueMat");
    w(this, "waterColumnMat", new qt());
    w(this, "waterMat");
    w(this, "lavaMat");
    w(this, "waterShader", null);
    w(this, "waterQuality", 2);
    w(this, "reflectionTarget", null);
    w(this, "reflectionCamera", new Cs());
    w(this, "reflectionMatrix", new bt());
    w(this, "reflectionSize", new tt());
    w(this, "reflectionPlaneY", $o - 0.125);
    w(this, "reflectionFrame", 0);
    w(this, "reflectionReady", !1);
    w(this, "reflecting", !1);
    w(this, "lavaShader", null);
    w(this, "opaqueShader", null);
    w(this, "wind", new tt());
    w(this, "windTarget", new tt());
    w(this, "windTime", -1);
    w(this, "windSway", 1);
    w(this, "environmentDetail", 1);
    w(this, "lighting", new cte());
    w(this, "streamScanKey", "");
    w(this, "reqScratch", []);
    w(this, "lastRemeshAt", -1 / 0);
    w(this, "lastPcx", 1 / 0);
    w(this, "lastPcz", 1 / 0);
    w(this, "lastSpeed", 0);
    w(this, "mapSampleTime", 0);
    w(this, "mapTiles", new Map());
    w(this, "mapPending", new Map());
    w(this, "mapQueue", new Map());
    w(this, "mapQueueLod", -1);
    w(this, "mapFlushTimer");
    w(this, "mapNextRequestAt", 0);
    w(this, "meshSource", new lte(this.chunks));
    w(this, "gates", new Map());
    w(this, "doors", new Map());
    w(this, "chestLids");
    w(this, "aviationLights");
    w(this, "onChestSlam");
    w(this, "doorsByChunk", new Map());
    w(this, "leafCullAt", 0);
    w(this, "gateMaterials", new Map());
    w(this, "gateLastTime", performance.now());
    w(this, "lidLastTime", performance.now());
    w(this, "signs");
    w(this, "reflectionFrustum", new bu());
    w(this, "reflectionViewProj", new bt());
    w(this, "viewSwap", null);
    w(this, "mapGuess", new Map());
    w(this, "surfChunkCx", NaN);
    w(this, "surfChunkCz", NaN);
    w(this, "surfChunkEntry", null);
    w(this, "surfTileLod", -1);
    w(this, "surfTileTx", 0);
    w(this, "surfTileTz", 0);
    w(this, "surfTileRetryAt", 0);
    w(this, "surfTile", null);
    w(this, "propColliders", []);
    w(this, "cabinetBoxes", []);
    w(this, "computerBoxes", []);
    ((this.scene = e),
      (this.atlasTex = t),
      (this.signs = new fte(e, this)),
      (this.opaqueMat = new gi({ map: t, vertexColors: !0, alphaTest: 0.5 })),
      (this.aviationLights = new E$(e, (i, s) => cu(this.seed, i, s))),
      (this.chestLids = new mte(e, this.opaqueMat, {
        getBlock: (i, s, o) => this.getBlock(i, s, o),
        lighting: (i, s, o) => this.doorLighting(i, s, o),
        onSlam: (i, s, o, a, r) => {
          var l;
          return (l = this.onChestSlam) == null
            ? void 0
            : l.call(this, i, s, o, a, r);
        },
      })),
      (this.opaqueMat.customProgramCacheKey = () =>
        aV("fc-chunk-opaque-sky-v4")),
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
              EM +
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
               vec2 cell = floor(vMapUv * ${mi}.0);
               vec2 local = vMapUv * ${mi}.0 - cell;
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
          (i.fragmentShader = Dg(i.fragmentShader, "vSkyLight")),
          dV(i, "vSkyLight"),
          (this.opaqueShader = i));
      }),
      (this.waterMat = new gi({
        map: t,
        vertexColors: !0,
        transparent: !0,
        opacity: 0.8,
        depthWrite: !1,
        side: Ai,
      })),
      (this.waterMat.customProgramCacheKey = () => "fc-water-azure-v4"),
      (this.waterMat.onBeforeCompile = (i) => {
        ((i.uniforms.uTime = { value: 0 }),
          (i.uniforms.uSunDir = { value: new k(0, 1, 0) }),
          (i.uniforms.uSunColor = { value: new ze(1, 0.95, 0.85) }),
          (i.uniforms.uSkyColor = { value: new ze(0.45, 0.68, 0.95) }),
          (i.uniforms.uWaveAmp = { value: 1 }),
          (i.uniforms.uReflect = { value: 1 }),
          (i.uniforms.uGlint = { value: 1 }),
          (i.uniforms.uDayness = { value: 1 }),
          (i.uniforms.uReflection = { value: null }),
          (i.uniforms.uReflectionMatrix = { value: new bt() }),
          (i.uniforms.uPlanar = { value: 0 }),
          (i.uniforms.uFxWaterClear = Wn.uFxWaterClear),
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
      (this.lavaMat = new qt({ map: t, vertexColors: !0, side: Ai })),
      (this.lavaMat.customProgramCacheKey = () => "fc-lava-crust-v3"),
      (this.lavaMat.onBeforeCompile = (i) => {
        ((i.uniforms.uTime = { value: 0 }),
          (i.uniforms.uFxEmissiveBoost = $k),
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
            EM +
            VX +
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
  wantsSurface(e) {
    return (
      this.flightSurface &&
      Math.max(Math.abs(e.cx - this.lastPcx), Math.abs(e.cz - this.lastPcz)) >=
        5
    );
  }
  dirtyChunkCount() {
    let e = 0;
    for (const t of this.chunks.values()) t.dirty && e++;
    return e;
  }
  gateMaterial(e, t, i, s = 1) {
    const o = Math.round(Math.max(0, Math.min(1, i)) * 15),
      a = Math.round(s * 15),
      r = `${e}:${t}:${o}:${a}`;
    let l = this.gateMaterials.get(r);
    return (
      l ||
        ((l = new gi({
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
              value: new tt(e % mi, Math.floor(e / mi)),
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
                   (uGateTile.x + gateLocalUv.x) / ${mi}.0,
                   1.0 - (uGateTile.y + 1.0 - gateLocalUv.y) / ${mi}.0);
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
              (c.fragmentShader = Dg(c.fragmentShader, "uGateSky")));
          })),
        this.gateMaterials.set(r, l)),
      l
    );
  }
  gateBox(e, t, i, s, o, a, r, l, c, h, d = 0.5, u = 0.5) {
    const f = new Ct(t, i, s),
      p = f.attributes.position,
      m = f.attributes.normal,
      y = f.attributes.uv,
      g = (S) => Math.max(0, Math.min(1, S));
    for (let S = 0; S < p.count; S++) {
      const M = g(p.getX(S) + l + d),
        x = g(p.getY(S) + c),
        T = g(p.getZ(S) + h + u),
        A = m.getX(S),
        _ = m.getY(S),
        C = m.getZ(S);
      Math.abs(A) > 0.5
        ? y.setXY(S, A > 0 ? 1 - T : T, x)
        : Math.abs(_) > 0.5
          ? y.setXY(S, M, _ > 0 ? T : 1 - T)
          : y.setXY(S, C > 0 ? M : 1 - M, x);
    }
    y.needsUpdate = !0;
    const b = new le(f, this.gateMaterial(o, a, r));
    (b.position.set(l, c, h),
      (b.castShadow = !0),
      (b.receiveShadow = !0),
      e.add(b));
  }
  createGateVisual(e, t, i, s, o) {
    var _;
    const a = ((_ = BLOCKS[s]) == null ? void 0 : _.tex[1]) ?? 0,
      r = 16777215,
      l = 14606046,
      { post1: c, rail1: h, rail2: d, railsY: u, stile: f, gateBottom: p } = EC,
      m = this.probeLight(e + 0.5, t + 0.7, i + 0.5),
      y = new pe();
    (y.position.set(e + 0.5, t, i + 0.5),
      (y.rotation.y = (o & 1) === 0 ? 0 : Math.PI / 2));
    const g = d - h,
      b = (C) => {
        const R = new pe();
        R.position.x = C * (0.5 - f / 2);
        const L = -C,
          N = 0.5 + C * (0.5 - f / 2),
          D = (H, G, I, O, F) =>
            this.gateBox(
              R,
              G - H,
              O - I,
              g,
              a,
              F,
              m,
              L * ((H + G) / 2 - f / 2),
              (I + O) / 2,
              0,
              N,
            );
        D(0, f, p, 1, l);
        for (const [H, G] of u) D(f, 0.5, H, G, r);
        return (D(c, 0.5, u[0][1], u[1][0], l), y.add(R), R);
      },
      S = b(-1),
      M = b(1),
      x = (o & Qn) !== 0,
      T = (o & 3) === 1 || (o & 3) === 2 ? 1 : -1,
      A = x ? (T * Math.PI) / 2 : 0;
    return (
      (S.rotation.y = -A),
      (M.rotation.y = A),
      this.scene.add(y),
      {
        key: `${e},${t},${i}`,
        id: s,
        cx: Math.floor(e / Pe),
        cz: Math.floor(i / Pe),
        group: y,
        left: S,
        right: M,
        target: A,
      }
    );
  }
  removeGate(e) {
    const t = this.gates.get(e);
    t &&
      (this.scene.remove(t.group),
      t.group.traverse((i) => {
        var o;
        (o = i.geometry) == null || o.dispose();
      }),
      this.gates.delete(e));
  }
  syncGateAt(e, t, i, s, o) {
    const a = `${e},${t},${i}`,
      r = this.gates.get(a);
    if (!Do(s)) {
      r && this.removeGate(a);
      return;
    }
    const l = (o & 3) === 1 || (o & 3) === 2 ? 1 : -1,
      c = (o & Qn) !== 0 ? (l * Math.PI) / 2 : 0;
    if (r && r.id !== s) this.removeGate(a);
    else if (r) {
      ((r.group.rotation.y = (o & 1) === 0 ? 0 : Math.PI / 2), (r.target = c));
      return;
    }
    const h = this.createGateVisual(e, t, i, s, o);
    this.gates.set(a, h);
  }
  syncGateChunk(e, t, i) {
    for (const [a, r] of [...this.gates])
      r.cx === e && r.cz === t && this.removeGate(a);
    const s = e * Pe,
      o = t * Pe;
    for (let a = 0; a < i.data.length; a++) {
      const r = i.data[a];
      if (!Do(r)) continue;
      const l = s + (a & 15),
        c = o + ((a >> 4) & 15),
        h = a >> 8;
      this.syncGateAt(l, h, c, r, i.meta[a]);
    }
  }
  refreshGateLightsAround(e, t, i) {
    for (const s of this.gates.values()) {
      const [o, a, r] = s.key.split(",").map(Number);
      Math.abs(o - e) > 6 ||
        Math.abs(a - t) > 6 ||
        Math.abs(r - i) > 6 ||
        this.relightGate(s);
    }
  }
  relightGate(e) {
    const t = e.group.position;
    let i = 0,
      s = 0;
    for (const [o, a] of [
      [0, 0],
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ])
      ((i = Math.max(i, this.probeLight(t.x + o, t.y, t.z + a))),
        (s = Math.max(s, this.probeSky(t.x + o, t.y, t.z + a))));
    e.group.traverse((o) => {
      const a = o;
      if (!a.isMesh || Array.isArray(a.material)) return;
      const r = a.material.userData;
      a.material = this.gateMaterial(r.gateTile, r.gateTint, i, s);
    });
  }
  removeGateChunk(e, t) {
    for (const [i, s] of [...this.gates])
      s.cx === e && s.cz === t && this.removeGate(i);
  }
  doorYaw(e) {
    return e1[e & 3] + (e & Qn ? (mz(e) * Math.PI) / 2 : 0);
  }
  get chunkMaterial() {
    return this.opaqueMat;
  }
  cellLighting(e, t, i) {
    return this.doorLighting(e, t, i);
  }
  doorLighting(e, t, i) {
    let s = 0,
      o = 0;
    for (const [a, r] of [
      [0, 0],
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ])
      for (const l of [0, 1])
        ((s = Math.max(s, this.probeLight(e + a, t + l, i + r))),
          (o = Math.max(o, this.probeSky(e + a, t + l, i + r))));
    return { light: s, sky: o };
  }
  createDoorVisual(e, t, i, s, o) {
    const { light: a, sky: r } = this.doorLighting(e, t, i),
      l = new le(YW(s, (o & pa) !== 0, a, r), this.opaqueMat),
      [c, h] = pz(o);
    l.position.set(e + c, t, i + h);
    const d = this.doorYaw(o);
    return (
      (l.rotation.y = d),
      (l.castShadow = this.chunkShadows),
      (l.receiveShadow = !0),
      this.scene.add(l),
      {
        key: `${e},${t},${i}`,
        id: s,
        meta: o,
        cx: Math.floor(e / Pe),
        cz: Math.floor(i / Pe),
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
    const i = this.doorsByChunk.get(cellKey(t.cx, t.cz));
    (i == null || i.delete(t),
      i && !i.size && this.doorsByChunk.delete(cellKey(t.cx, t.cz)));
  }
  syncDoorAt(e, t, i, s, o) {
    const a = `${e},${t},${i}`,
      r = this.doors.get(a);
    if (!Ss(s) || o & Na) {
      r && this.removeDoor(a);
      return;
    }
    if (r && r.id === s && !((r.meta ^ o) & (pa | 3))) {
      ((r.meta = o), (r.target = this.doorYaw(o)));
      return;
    }
    r && this.removeDoor(a);
    const l = this.createDoorVisual(e, t, i, s, o);
    this.doors.set(a, l);
    const c = cellKey(l.cx, l.cz);
    let h = this.doorsByChunk.get(c);
    (h || this.doorsByChunk.set(c, (h = new Set())), h.add(l));
  }
  syncDoorChunk(e, t, i) {
    this.removeDoorChunk(e, t);
    const s = e * Pe,
      o = t * Pe;
    for (let a = 0; a < i.data.length; a++)
      Ss(i.data[a]) &&
        this.syncDoorAt(
          s + (a & 15),
          a >> 8,
          o + ((a >> 4) & 15),
          i.data[a],
          i.meta[a],
        );
  }
  removeDoorChunk(e, t) {
    for (const i of [...(this.doorsByChunk.get(cellKey(e, t)) ?? [])])
      this.removeDoor(i.key);
  }
  relightDoors(e, t) {
    for (const i of this.doorsByChunk.get(cellKey(e, t)) ?? []) {
      const [s, o, a] = i.key.split(",").map(Number),
        { light: r, sky: l } = this.doorLighting(s, o, a);
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
    const s = uR * uR;
    for (const o of this.doors.values()) {
      const a = o.mesh.position.x - e,
        r = o.mesh.position.z - t;
      o.mesh.visible = a * a + r * r < s;
    }
    for (const o of this.gates.values()) {
      const a = o.group.position.x - e,
        r = o.group.position.z - t;
      o.group.visible = a * a + r * r < s;
    }
  }
  doorAngle(e, t, i) {
    const s = this.doors.get(`${e},${t},${i}`);
    return s ? { angle: s.angle, target: s.target } : null;
  }
  updateGates() {
    this.signs.update();
    const e = performance.now(),
      t = Math.min(0.05, Math.max(0, (e - this.gateLastTime) / 1e3));
    this.gateLastTime = e;
    const i = 1 - Math.exp(-11 * t);
    for (const o of this.gates.values())
      ((o.left.rotation.y += (-o.target - o.left.rotation.y) * i),
        (o.right.rotation.y += (o.target - o.right.rotation.y) * i));
    const s = 1 - Math.exp(-15 * t);
    for (const o of this.doors.values())
      o.angle !== o.target &&
        ((o.angle += (o.target - o.angle) * s),
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
  updateWaterLight(e, t, i, s = 1) {
    var r, l;
    const o = (r = this.waterShader) == null ? void 0 : r.uniforms;
    if (!o) return;
    (o.uSunDir.value.copy(e),
      o.uSunColor.value.copy(t),
      o.uSkyColor.value.copy(i),
      (o.uDayness.value = Math.max(0, Math.min(1, s))));
    const a = this.waterQuality;
    ((o.uWaveAmp.value = a === 0 ? 0 : a === 1 ? 0.65 : 1),
      (o.uReflect.value = a === 0 ? 0 : a === 1 ? 0.4 : 1),
      (o.uGlint.value = a === 0 ? 0 : a === 1 ? 0.5 : 1),
      (o.uReflection.value =
        ((l = this.reflectionTarget) == null ? void 0 : l.texture) ?? null),
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
  renderWaterReflection(e, t) {
    var y;
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
      const b = g.waterMesh;
      if (
        b != null &&
        b.visible &&
        this.reflectionFrustum.intersectsObject(b)
      ) {
        i = !0;
        break;
      }
    }
    if (!i) return;
    e.getDrawingBufferSize(this.reflectionSize);
    const s = Math.max(
        256,
        Math.min(1280, Math.round(this.reflectionSize.x * 0.55)),
      ),
      o = Math.max(
        144,
        Math.min(720, Math.round(this.reflectionSize.y * 0.55)),
      );
    if (
      ((!this.reflectionTarget ||
        this.reflectionTarget.width !== s ||
        this.reflectionTarget.height !== o) &&
        ((y = this.reflectionTarget) == null || y.dispose(),
        (this.reflectionTarget = new fr(s, o, {
          minFilter: Jn,
          magFilter: Jn,
          depthBuffer: !0,
        })),
        (this.reflectionTarget.texture.colorSpace = vi),
        (this.reflectionTarget.texture.name = "water-planar-reflection"),
        (this.reflectionReady = !1)),
      this.reflectionFrame++ % 24 === 0)
    ) {
      let g = 1 / 0,
        b = $o - 0.125;
      const S = Math.floor(t.position.x),
        M = Math.floor(t.position.z);
      for (let x = -24; x <= 24; x += 6)
        for (let T = -24; T <= 24; T += 6) {
          const A = S + x,
            _ = M + T;
          for (let C = Kt - 1; C >= 0; C--) {
            if (!this.isWaterAt(A, C, _) || this.isWaterAt(A, C + 1, _))
              continue;
            const R = C + Ul(this.getMeta(A, C, _)),
              L = Math.abs(t.position.y - R) + Math.hypot(x, T) * 0.035;
            L < g && ((g = L), (b = R));
            break;
          }
        }
      this.reflectionPlaneY = b;
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
        (e.clippingPlanes = [new Rr(new k(0, 1, 0), -a - 0.015)]),
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
  setViewSwap(e) {
    if (String(e) !== String(this.viewSwap)) {
      for (const t of [this.viewSwap, e])
        if (t) {
          for (const i of this.chunks.values())
            (r2(i.data, t[0], t[1]), (i.surfaceColors = void 0));
          for (const i of this.mapTiles.values()) r2(i, t[0], t[1]);
        }
      ((this.viewSwap = e), this.invalidateSurfMemo(), this.remeshAll());
    }
  }
  onChunkData(e, t, i) {
    var h, d;
    const s = cellKey(e, t);
    if (
      (this.requested.delete(s),
      (h = this.requestedAt) == null || h.delete(s),
      this.invalidateMapChunk(e, t),
      Number.isFinite(this.lastPcx))
    ) {
      const u = Math.max(
        Math.abs(e - this.lastPcx),
        Math.abs(t - this.lastPcz),
      );
      if (
        !((d = this.previewChunks) != null && d.has(s)) &&
        u >
          Math.min(
            28,
            this.renderDist +
              Math.min(16, Math.ceil((this.lastSpeed * 4) / Pe)),
          ) +
            3
      )
        return;
    }
    const o = new Uint8Array(wf * 2);
    K_(i, o);
    const a = o.subarray(0, wf),
      r = o.subarray(wf);
    this.viewSwap && r2(a, this.viewSwap[0], this.viewSwap[1]);
    const l = xte(a),
      c = this.chunks.get(s);
    (c
      ? ((c.revision = (c.revision ?? 0) + 1),
        (c.data = a),
        (c.meta = r),
        (c.emitters = l),
        (c.features = void 0),
        (c.dirty = !0),
        (c.dirtyPri = 0))
      : this.chunks.set(s, {
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
      this.syncGateChunk(e, t, this.chunks.get(s)),
      this.syncDoorChunk(e, t, this.chunks.get(s)));
    {
      const u = this.chunks.get(s);
      (this.chestLids.syncChunk(e, t, u.data, u.meta),
        this.aviationLights.syncChunk(e, t, u.data));
    }
    for (let u = -1; u <= 1; u++)
      for (let f = -1; f <= 1; f++) (u || f) && this.markDirty(e + u, t + f, 1);
    ((this.chunks.get(s).surfaceColors = void 0), this.invalidateSurfMemo());
  }
  markDirty(e, t, i = 0) {
    const s = this.chunks.get(cellKey(e, t));
    s &&
      ((!s.dirty || i < s.dirtyPri) && (s.dirtyPri = i),
      (s.dirty = !0),
      i === 0 && (s.revision = (s.revision ?? 0) + 1));
  }
  chunkFeatures(e, t) {
    const i = this.chunks.get(cellKey(e, t));
    return i ? (i.features ?? (i.features = Ete(i.data))) : null;
  }
  readiness(e, t, i = 2) {
    const s = Math.floor(e / Pe),
      o = Math.floor(t / Pe);
    let a = 0,
      r = 0,
      l = 0;
    for (let c = -i; c <= i; c++)
      for (let h = -i; h <= i; h++) {
        l++;
        const d = this.chunks.get(cellKey(s + c, o + h));
        d && (a++, !d.dirty && !d.meshPending && r++);
      }
    return { received: a, built: r, total: l };
  }
  isLoaded(e, t) {
    return this.chunks.has(cellKey(Math.floor(e / Pe), Math.floor(t / Pe)));
  }
  getBlock(e, t, i) {
    var r;
    if (
      (r = this.border) != null &&
      r.radius &&
      !D4(this.border, Math.floor(e) + 0.5, Math.floor(i) + 0.5)
    )
      return BLOCK.BEDROCK;
    if (t < 0 || t >= Kt) return 0;
    ((e = Math.floor(e)), (t = Math.floor(t)), (i = Math.floor(i)));
    const s = Math.floor(e / Pe),
      o = Math.floor(i / Pe),
      a = this.chunks.get(cellKey(s, o));
    return a ? a.data[packColor(e - s * Pe, t, i - o * Pe)] : 0;
  }
  isSolidAt(e, t, i) {
    const s = this.getBlock(e, t, i);
    return Ss(s) || Do(s) ? !(this.getMeta(e, t, i) & Qn) : Rz(s);
  }
  isStairAt(e, t, i) {
    return OS(this.getBlock(e, t, i));
  }
  isWaterAt(e, t, i) {
    const s = this.getBlock(e, t, i);
    return (s > 0 && BLOCKS[s].liquid) || oa(s, this.getMeta(e, t, i));
  }
  getMeta(e, t, i) {
    if (t < 0 || t >= Kt) return 0;
    ((e = Math.floor(e)), (t = Math.floor(t)), (i = Math.floor(i)));
    const s = Math.floor(e / Pe),
      o = Math.floor(i / Pe),
      a = this.chunks.get(cellKey(s, o));
    return a ? a.meta[packColor(e - s * Pe, t, i - o * Pe)] : 0;
  }
  setBlock(e, t, i, s, o = 0) {
    if (t < 0 || t >= Kt) return;
    (this.viewSwap &&
      (s =
        s === this.viewSwap[0]
          ? this.viewSwap[1]
          : s === this.viewSwap[1]
            ? this.viewSwap[0]
            : s),
      this.invalidateMapAt(e, i));
    const a = Math.floor(e / Pe),
      r = Math.floor(i / Pe),
      l = this.chunks.get(cellKey(a, r));
    if (!l) return;
    const c = e - a * Pe,
      h = i - r * Pe,
      d = packColor(c, t, h);
    if (l.data[d] === s && l.meta[d] === o) return;
    const u = new Set([l]);
    for (const [y, g] of [
      [c === 0 ? -1 : c === Pe - 1 ? 1 : 0, 0],
      [0, h === 0 ? -1 : h === Pe - 1 ? 1 : 0],
    ]) {
      const b = this.chunks.get(cellKey(a + y, r + g));
      b && u.add(b);
    }
    if (u.size > 1 && l.mesh) {
      for (let y = this.seamGroups.length - 1; y >= 0; y--)
        if ([...u].some((g) => this.seamGroups[y].has(g)))
          for (const g of this.seamGroups.splice(y, 1)[0]) u.add(g);
      this.seamGroups.push(u);
    }
    (GM.has(s) || GM.has(l.data[d]) || $n(s) || $n(l.data[d])) &&
      (l.features = void 0);
    const f = jl[l.data[d]] > 0,
      p = jl[s] > 0,
      m =
        hg(l.data[d], l.meta[d]) !== hg(s, o) ||
        zM(l.data[d], l.meta[d]) !== zM(s, o);
    if (
      ((l.data[d] = s),
      (l.meta[d] = o),
      this.syncGateAt(e, t, i, s, o),
      this.syncDoorAt(e, t, i, s, o),
      this.chestLids.sync(e, t, i, s, o),
      this.aviationLights.sync(e, t, i, s),
      this.chestLids.syncAround(e, t, i, (y, g, b) => this.getMeta(y, g, b)),
      l.surfaceColors && (l.surfaceColors[h * Pe + c] = 0),
      f !== p)
    )
      if (p) l.emitters.push(d);
      else {
        const y = l.emitters.indexOf(d);
        y >= 0 && l.emitters.splice(y, 1);
      }
    if (
      (m && this.refreshGateLightsAround(e, t, i), this.markDirty(a, r, 0), m)
    )
      for (let y = -1; y <= 1; y++)
        for (let g = -1; g <= 1; g++)
          (y || g) && this.markDirty(a + y, r + g, 1);
    (c === 0 && this.markDirty(a - 1, r, 0),
      c === Pe - 1 && this.markDirty(a + 1, r, 0),
      h === 0 && this.markDirty(a, r - 1, 0),
      h === Pe - 1 && this.markDirty(a, r + 1, 0));
  }
  mapTileKey(e, t, i) {
    return `${e},${t},${i}`;
  }
  queueMapTile(e, t, i) {
    this.mapQueueLod !== e && (this.mapQueue.clear(), (this.mapQueueLod = e));
    const s = this.mapTileKey(e, t, i),
      o = performance.now(),
      a = this.mapPending.get(s);
    (a !== void 0 && o - a < 5e3) ||
      (a !== void 0 && this.mapPending.delete(s),
      this.mapQueue.set(s, { lod: e, tx: t, tz: i }),
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
        e.length >= gte)
      )
        break;
    ((this.mapNextRequestAt = performance.now() + yte),
      this.requestMapTiles(e),
      this.scheduleMapRequests());
  }
  onMapTileData(e, t, i, s) {
    if (e < 0 || e > UM) return;
    const o = new Uint8Array(qa * qa);
    if (K_(s, o) !== o.length) return;
    this.viewSwap && r2(o, this.viewSwap[0], this.viewSwap[1]);
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
    for (let i = 0; i <= UM; i++) {
      const s = qa * (1 << i),
        o = this.mapTileKey(i, Math.floor(e / s), Math.floor(t / s));
      (this.mapTiles.delete(o),
        this.mapGuess.delete(o),
        this.mapPending.delete(o),
        this.mapQueue.delete(o),
        this.invalidateSurfMemo());
    }
  }
  invalidateMapChunk(e, t) {
    this.invalidateMapAt(e * Pe, t * Pe);
  }
  guessTile(e, t, i) {
    const s = this.mapTileKey(e, t, i),
      o = this.mapGuess.get(s);
    if (o) return o;
    const a = 1 << e,
      r = qa * a,
      l = qa / Nd.GUESS_STEPS,
      c = new Uint8Array(qa * qa);
    for (let h = 0; h < Nd.GUESS_STEPS; h++)
      for (let d = 0; d < Nd.GUESS_STEPS; d++) {
        const u = cR(
          this.seed,
          t * r + Math.round((d + 0.5) * l * a),
          i * r + Math.round((h + 0.5) * l * a),
        );
        for (let f = h * l; f < (h + 1) * l; f++)
          c.fill(u, f * qa + d * l, f * qa + (d + 1) * l);
      }
    if ((this.mapGuess.set(s, c), this.mapGuess.size > 512)) {
      const h = this.mapGuess.keys().next().value;
      h !== void 0 && this.mapGuess.delete(h);
    }
    return c;
  }
  invalidateSurfMemo() {
    ((this.surfChunkCx = NaN),
      (this.surfChunkCz = NaN),
      (this.surfChunkEntry = null),
      (this.surfTileLod = -1),
      (this.surfTile = null));
  }
  surfaceColor(e, t, i = 1) {
    ((e = Math.floor(e)), (t = Math.floor(t)));
    const s = Math.floor(e / Pe),
      o = Math.floor(t / Pe);
    let a;
    if (
      (s === this.surfChunkCx && o === this.surfChunkCz
        ? (a = this.surfChunkEntry)
        : ((a = this.chunks.get(cellKey(s, o)) ?? null),
          (this.surfChunkCx = s),
          (this.surfChunkCz = o),
          (this.surfChunkEntry = a)),
      !a)
    ) {
      const d = wte(i),
        u = 1 << d,
        f = qa * u,
        p = Math.floor(e / f),
        m = Math.floor(t / f);
      let y;
      d === this.surfTileLod &&
      p === this.surfTileTx &&
      m === this.surfTileTz &&
      this.mapSampleTime < this.surfTileRetryAt
        ? (y = this.surfTile)
        : ((y = this.mapTiles.get(this.mapTileKey(d, p, m)) ?? null),
          (this.surfTileRetryAt = y ? 1 / 0 : this.mapSampleTime + 100),
          y || (this.queueMapTile(d, p, m), (y = this.guessTile(d, p, m))),
          (this.surfTileLod = d),
          (this.surfTileTx = p),
          (this.surfTileTz = m),
          (this.surfTile = y));
      const g = Math.floor((e - p * f) / u),
        b = Math.floor((t - m * f) / u);
      return zb(y[b * qa + g]);
    }
    const r = (t - o * Pe) * Pe + e - s * Pe,
      l = a.surfaceColors ?? (a.surfaceColors = new Uint32Array(Pe * Pe));
    if (l[r]) return l[r] - 1;
    let c = -1;
    const h = packColor(e - s * Pe, 0, t - o * Pe);
    for (let d = Kt - 1; d >= 0; d--) {
      const u = a.data[h | (d << 8)];
      if (u !== 0 && !Mte.has(u)) {
        c = zb(bte(this.seed, e, t, u));
        break;
      }
    }
    return (c < 0 && (c = zb(cR(this.seed, e, t))), (l[r] = c + 1), c);
  }
  groundAt(e, t, i) {
    const s = Math.floor(e),
      o = Math.floor(t),
      a = Math.floor(s / Pe),
      r = Math.floor(o / Pe);
    if (!this.chunks.has(cellKey(a, r))) return Math.min(i, cu(this.seed, s, o) + 1);
    for (let l = Math.min(Math.floor(i), Kt - 1); l >= 0; l--)
      if (this.isSolidAt(s, l, o)) return l + 1;
    return -1 / 0;
  }
  precipitationSurfaceY(e, t, i = 0) {
    var a;
    const s = Math.floor(e),
      o = Math.floor(t);
    for (let r = Kt - 1; r >= Math.max(0, Math.floor(i)); r--) {
      const l = this.getBlock(s, r, o);
      if (!(l === BLOCK.AIR || l === BLOCK.WATER || l === BLOCK.LAVA)) {
        if (Ss(l) || Do(l)) {
          if ((this.getMeta(s, r, o) & Qn) === 0) return r;
          continue;
        }
        if ((a = BLOCKS[l]) != null && a.solid) return r;
      }
    }
    return -1;
  }
  update(e, t, i = 0, s = 0, o = !1) {
    var A, _, C, R;
    ((this.mapSampleTime = performance.now()),
      (this.flightSurface = o && Math.hypot(i, s) > 14),
      this.updateGates(),
      this.chestLids.update(
        Math.min(
          0.05,
          Math.max(0, (performance.now() - this.lidLastTime) / 1e3),
        ),
      ),
      (this.lidLastTime = performance.now()),
      this.cullLeaves(e, t));
    const a = Math.floor(e / Pe),
      r = Math.floor(t / Pe),
      l = this.renderDist,
      c = Math.hypot(i, s);
    ((this.lastPcx = a), (this.lastPcz = r), (this.lastSpeed = c));
    const h = c > 14,
      d = c > 28,
      u = this.flightSurface || c > 45 ? 64 : d ? 48 : h ? 36 : 28,
      f = h ? Math.min(16, Math.ceil((c * 4) / Pe)) : 0,
      p = Math.min(28, l + f),
      m = performance.now();
    ((this.chunkRequestTokens = Math.min(
      32,
      this.chunkRequestTokens + Math.max(0, m - this.chunkRequestAt) * 0.192,
    )),
      (this.chunkRequestAt = m));
    const y = Math.min(d ? 12 : 10, Math.floor(this.chunkRequestTokens)),
      g = 2,
      b = (L, N, D) => {
        if (Math.max(Math.abs(L), Math.abs(N)) <= l + D) return !0;
        if (!h) return !1;
        const H = (L * i + N * s) / c,
          G = Math.abs(L * s - N * i) / c;
        return (
          H >= 0 && G <= 2 + D && Math.max(Math.abs(L), Math.abs(N)) <= p + D
        );
      },
      S = this.requestedAt ?? (this.requestedAt = new Map());
    if (this.requested.size > 0) {
      const L = performance.now();
      for (const N of this.requested) {
        const D = N.indexOf(","),
          H = +N.slice(0, D),
          G = +N.slice(D + 1),
          I = S.get(N) ?? L,
          O = Math.max(Math.abs(H - a), Math.abs(G - r)),
          F = L - I > (O <= 3 ? 2500 : 5e3);
        ((!((A = this.previewChunks) != null && A.has(N)) &&
          !b(H - a, G - r, 2)) ||
          F) &&
          (this.requested.delete(N),
          S.delete(N),
          F && (this.streamScanKey = ""));
      }
    }
    let M = 0;
    for (const L of this.previewChunks ?? []) {
      if (this.requested.size >= u || M >= y) break;
      if (this.chunks.has(L) || this.requested.has(L)) continue;
      const [N, D] = L.split(",").map(Number);
      ((_ = this.border) != null &&
        _.radius &&
        !lb(this.border, N * Pe, D * Pe, Pe)) ||
        (this.requested.add(L),
        S.set(L, performance.now()),
        this.requestChunk(N, D),
        M++,
        this.chunkRequestTokens--);
    }
    const x = `${a},${r},${l},${h ? Math.round(i / 3) : 0},${h ? Math.round(s / 3) : 0},${this.chunks.size},${this.requested.size}`;
    if (y > M && this.requested.size < u && x !== this.streamScanKey) {
      this.streamScanKey = x;
      const L = c > 1 ? 1 / c : 0,
        N = i * L,
        D = s * L,
        H = u - this.requested.size,
        G = this.reqScratch;
      G.length = 0;
      const I = d ? 0.55 : h ? 0.75 : 1;
      for (let F = -p; F <= p; F++)
        for (let X = -p; X <= p; X++) {
          const Q = Math.max(Math.abs(F), Math.abs(X)),
            ee = F * N + X * D,
            se = Math.abs(F * D - X * N);
          if (
            (Q > l && (ee < 0 || se > 2)) ||
            (h &&
              Q > 2 &&
              (F * N + X * D < -0.15 * Q ||
                (I < 1 && Math.abs(F * D - X * N) > Q * I && Q > l * 0.55))) ||
            ((C = this.border) != null &&
              C.radius &&
              !lb(this.border, (a + F) * Pe, (r + X) * Pe, Pe))
          )
            continue;
          const oe = cellKey(a + F, r + X);
          if (this.chunks.has(oe) || this.requested.has(oe)) continue;
          const J = Math.abs(F) + Math.abs(X),
            re = F * N + X * D,
            Ce =
              Q <= 1
                ? -100 + J
                : J - Math.max(0, re) * (h ? 0.65 : 0) + se * (h ? 1.5 : 0);
          G.push({ key: oe, cx: a + F, cz: r + X, score: Ce });
        }
      G.length > 1 && G.sort((F, X) => F.score - X.score);
      const O = Math.min(G.length, H, y - M);
      for (let F = 0; F < O; F++) {
        const X = G[F];
        (this.requested.add(X.key),
          S.set(X.key, performance.now()),
          this.requestChunk(X.cx, X.cz),
          this.chunkRequestTokens--);
      }
    }
    for (const [L, N] of this.chunks)
      if (
        !((R = this.previewChunks) != null && R.has(L)) &&
        !b(N.cx - a, N.cz - r, g)
      ) {
        (this.removeGateChunk(N.cx, N.cz),
          this.removeDoorChunk(N.cx, N.cz),
          this.chestLids.removeChunk(N.cx, N.cz),
          this.aviationLights.removeChunk(N.cx, N.cz),
          this.disposeMeshes(N),
          this.chunks.delete(L));
        for (const D of this.seamGroups) D.delete(N);
        ((this.seamGroups = this.seamGroups.filter((D) => D.size > 1)),
          this.invalidateSurfMemo());
      }
    const T = h ? 0 : 18;
    if (!(performance.now() - this.lastRemeshAt < T))
      for (let L = 0; L < Math.max(2, this.meshWorkers.length); L++) {
        let N,
          D = 2,
          H = 2,
          G = 1 / 0,
          I = 1 / 0;
        for (const O of this.chunks.values()) {
          if (
            (O.surfaceMesh &&
              !this.wantsSurface(O) &&
              ((O.dirty = !0), (O.dirtyPri = 0)),
            !O.dirty)
          )
            continue;
          const F = Math.max(Math.abs(O.cx - a), Math.abs(O.cz - r)),
            X = O.mesh && O.dirtyPri === 0 && F <= 2 ? 0 : 1;
          if (
            (O.meshPending && X !== 0) ||
            (h && O.dirtyPri > 0 && O.mesh && F > 3)
          )
            continue;
          const Q = O.mesh && !O.surfaceMesh ? 1 : 0,
            ee = O.cx - a,
            se = O.cz - r,
            oe =
              F <= 1
                ? -100 + F
                : Math.abs(ee) +
                  Math.abs(se) -
                  (h ? Math.max(0, (ee * i + se * s) / c) * 0.65 : 0);
          (X < D ||
            (X === D &&
              (Q < H ||
                (Q === H &&
                  (O.dirtyPri < G || (O.dirtyPri === G && oe < I)))))) &&
            ((N = O), (D = X), (H = Q), (G = O.dirtyPri), (I = oe));
        }
        if (N) {
          const O = this.seamGroups.findIndex((Q) => Q.has(N)),
            F = O >= 0 ? this.seamGroups.splice(O, 1)[0] : new Set([N]);
          let X = !0;
          for (const Q of F)
            if (Q.dirty && this.chunks.get(cellKey(Q.cx, Q.cz)) === Q) {
              if (
                F.size === 1 &&
                !(
                  Q.mesh &&
                  !Q.surfaceMesh &&
                  Q.dirtyPri === 0 &&
                  Math.max(Math.abs(Q.cx - a), Math.abs(Q.cz - r)) <= 2
                ) &&
                this.queueFlightMesh(Q)
              )
                continue;
              ((X = !1), this.remesh(Q));
            }
          if (!X) {
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
    var a;
    const s = Math.floor(Math.floor(e) / Pe),
      o = Math.floor(Math.floor(i) / Pe);
    return (a = this.chunks.get(cellKey(s, o))) != null && a.skylight
      ? this.sampleLight(e, t, i, !0)
      : 1;
  }
  sampleLight(e, t, i, s) {
    if (((e = Math.floor(e)), (t = Math.floor(t)), (i = Math.floor(i)), t < 0))
      return 0;
    if (t >= Kt) return s ? 1 : 0;
    const o = Math.floor(e / Pe),
      a = Math.floor(i / Pe),
      r = this.chunks.get(cellKey(o, a)),
      l = s ? (r == null ? void 0 : r.skylight) : r == null ? void 0 : r.light;
    return l ? l[packColor(e - o * Pe, t, i - a * Pe)] / 15 : 0;
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
    var e;
    for (const t of this.meshWorkers) t.worker.terminate();
    ((this.meshWorkers = []), this.signs.clear(), (this.streamScanKey = ""));
    for (const t of this.chunks.values())
      (this.disposeMeshes(t), this.aviationLights.removeChunk(t.cx, t.cz));
    (this.chunks.clear(),
      (this.seamGroups = []),
      this.requested.clear(),
      (e = this.requestedAt) == null || e.clear(),
      (this.previewChunks = void 0));
    for (const t of [...this.gates.keys()]) this.removeGate(t);
    for (const t of [...this.doors.keys()]) this.removeDoor(t);
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
    return this.lighting.compute(e, t, (i, s) => this.chunks.get(cellKey(i, s)));
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
                "/assets/chunk-mesh-worker-coep-v1-BX2YFLnd.js",
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
        const c = cellKey(e.cx + r, e.cz + l),
          h = this.chunks.get(c);
        t.push({
          key: c,
          chunk: h,
          revision: (h == null ? void 0 : h.revision) ?? 0,
        });
      }
    let i = this.meshWorkers.find((r) => !r.busy),
      s = -1;
    for (const r of this.meshWorkers)
      if (!r.busy) {
        const l = t.reduce((c, h) => {
          var u;
          const d = (u = r.cache) == null ? void 0 : u.get(h.key);
          return (
            c +
            +(
              !!h.chunk &&
              (d == null ? void 0 : d.chunk) === h.chunk &&
              (d == null ? void 0 : d.revision) === h.revision
            )
          );
        }, 0);
        l > s && ((s = l), (i = r));
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
          this.chunks.get(cellKey(e.cx, e.cz)) !== e ||
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
            opaque: o2(c.opaque),
            water: o2(c.water),
            waterColumns: o2(c.waterColumns),
            lava: o2(c.lava),
          }),
          l && ((e.dirty = !0), (e.dirtyPri = 1)));
      }));
    try {
      const r = i.cache ?? (i.cache = new Map()),
        l = [],
        c = [];
      for (const { key: h, chunk: d, revision: u } of t)
        if (d) {
          const f = r.get(h);
          (((f == null ? void 0 : f.chunk) !== d || f.revision !== u) &&
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
      for (; r.size > hte;) r.delete(r.keys().next().value);
      i.worker.postMessage({
        cx: e.cx,
        cz: e.cz,
        seed: this.seed,
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
    if (!(i != null && i.radius)) return 0;
    let s = 0;
    for (let o = -1; o <= 1; o++)
      for (let a = -1; a <= 1; a++)
        lb(i, (e + o) * Pe, (t + a) * Pe, Pe) ||
          (s |= 1 << ((o + 1) * 3 + (a + 1)));
    return s;
  }
  remesh(e) {
    if (this.wantsSurface(e)) {
      (this.meshSource.setup(e.cx, e.cz),
        (e.surfaceMesh = !0),
        this.applyMesh(e, QW(this.meshSource, e.cx, e.cz, this.seed)));
      return;
    }
    ((e.surfaceMesh = !1),
      this.meshSource.setup(e.cx, e.cz, this.sealedNeighbours(e.cx, e.cz)));
    const t = this.computeLight(e.cx, e.cz);
    (e.light ?? (e.light = new Uint8Array(wf)),
      e.skylight ?? (e.skylight = new Uint8Array(wf)));
    for (let a = 0; a < Pe; a++)
      for (let r = 0; r < Pe; r++)
        for (let l = 0; l < Kt; l++) {
          const c = packColor(a, l, r),
            h = e.cx * Pe + a,
            d = e.cz * Pe + r;
          ((e.light[c] = t.at(h, l, d)), (e.skylight[c] = t.skyAt(h, l, d)));
        }
    const {
      opaque: i,
      water: s,
      lava: o,
    } = i4(
      this.meshSource,
      e.cx,
      e.cz,
      t,
      this.smoothLighting,
      this.fancyLeaves,
      this.seed,
    );
    this.applyMesh(e, { opaque: i, water: s, lava: o });
  }
  applyMesh(e, { opaque: t, water: i, lava: s, waterColumns: o = rte(e) }) {
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
      const f = new le(t, this.opaqueMat);
      ((f.castShadow = this.chunkShadows),
        (f.receiveShadow = !0),
        (f.matrixAutoUpdate = !1),
        (f.frustumCulled = !0),
        t.boundingSphere || t.computeBoundingSphere(),
        this.scene.add(f),
        (h = f));
    }
    if (i) {
      dte(i, this.seed);
      const f = new le(i, this.waterMat);
      ((f.matrixAutoUpdate = !1),
        (f.frustumCulled = !0),
        (f.renderOrder = Gi.water),
        f.layers.enable(Wk),
        i.boundingSphere || i.computeBoundingSphere(),
        this.scene.add(f),
        (d = f));
    }
    if (s) {
      const f = new le(s, this.lavaMat);
      ((f.matrixAutoUpdate = !1),
        (f.frustumCulled = !0),
        s.boundingSphere || s.computeBoundingSphere(),
        this.scene.add(f),
        (u = f));
    }
    if (((e.waterColumnMesh = null), o)) {
      const f = new le(o, this.waterColumnMat);
      (f.layers.set(Vk),
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
  blockHitBoxes(e, t, i = 0, s = 0, o = 0) {
    var l;
    const a = (l = BLOCKS[e]) == null ? void 0 : l.shape;
    if (e === BLOCK.SIGN) return mk(t);
    if (e === BLOCK.CACTUS) return hR;
    const r = Mg(
      e,
      t,
      (c, h, d) => this.getBlock(c, h, d),
      (c, h, d) => this.getMeta(c, h, d),
      i,
      s,
      o,
    );
    if (r) return r.map((c) => c.box);
    if (Hr(e))
      return Tw(
        e,
        kp((c, h, d) => this.getBlock(c, h, d), i, s, o, t),
      );
    if (a === "furniture") return ru(e, t).map((c) => c.box);
    if (a === "ladder")
      return (t & 7) === 1
        ? [[0, 0, 0, 0.18, 1, 1]]
        : (t & 7) === 2
          ? [[1 - 0.18, 0, 0, 1, 1, 1]]
          : (t & 7) === 3
            ? [[0, 0, 0, 1, 1, 0.18]]
            : [[0, 0, 1 - 0.18, 1, 1, 1]];
    if (a === "bed") return Nx(t);
    if (a === "door") {
      const c = Rf(t);
      if (!(t & Na)) return [c];
      const [h, d, u, f, p, m] = c;
      if (f - h > m - u) {
        const S = h + (f - h) * 0.25,
          M = h + (f - h) * 0.75;
        return [
          [h, d, u, S, p, m],
          [M, d, u, f, p, m],
          [S, d, u, M, d + 0.25, m],
          [S, d + 0.625, u, M, p, m],
        ];
      }
      const g = u + (m - u) * 0.25,
        b = u + (m - u) * 0.75;
      return [
        [h, d, u, f, p, g],
        [h, d, b, f, p, m],
        [h, d, g, f, d + 0.25, b],
        [h, d + 0.625, g, f, p, b],
      ];
    }
    if (a === "torch") {
      const c = [
          [0, 0],
          [-0.34, 0],
          [0.34, 0],
          [0, -0.34],
          [0, 0.34],
        ],
        [h, d] = c[t & 7] ?? c[0],
        u = 0.5 + h,
        f = 0.5 + d,
        p = (t & 7) === 0 ? 0 : 0.15,
        m = 0.17;
      return [[u - m, p, f - m, u + m, p + 0.72, f + m]];
    }
    if (a === "stair") {
      const c = dR[t & 3];
      if (c) return c;
      const h = [[0, 0, 0, 1, 0.5, 1]],
        [d, u] = xo[t & 3] ?? xo[0];
      let f = 0,
        p = 1,
        m = 0,
        y = 1;
      return (
        d !== 0
          ? d > 0
            ? (f = 0.5)
            : (p = 0.5)
          : u > 0
            ? (m = 0.5)
            : (y = 0.5),
        h.push([f, 0.5, m, p, 1, y]),
        (dR[t & 3] = h),
        h
      );
    }
    return a === "snow"
      ? [[0, 0, 0, 1, Math.max(1, Math.min(8, (t & 7) + 1)) / 8, 1]]
      : a === "fence"
        ? this.fenceBoxes(i, s, o, 1)
        : a === "gate"
          ? t & Qn
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
              ? bk((c, h, d) => this.getBlock(c, h, d), i, s, o).map((c) => {
                  const h = [0.36, 0.36, 0.36, 0.64, 0.64, 0.64];
                  return ((h[c] = 0), (h[c + 3] = 1), h);
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
  fenceBoxes(e, t, i, s) {
    const o = (a, r) => PS(this.getBlock(e + a, t, i + r));
    return bz(o(-1, 0), o(1, 0), o(0, -1), o(0, 1), s);
  }
  collisionBoxes(e, t, i = 0, s = 0, o = 0) {
    var a, r, l, c, h;
    return e === BLOCK.RADIO_RELAY
      ? Mg(e, t).map((d) => d.box)
      : e === BLOCK.MINE_AP || e === BLOCK.MINE_AT
        ? null
        : e === BLOCK.CACTUS
          ? hR
          : Hr(e)
            ? Tw(
                e,
                kp((d, u, f) => this.getBlock(d, u, f), i, s, o, t),
              )
            : ((a = BLOCKS[e]) == null ? void 0 : a.shape) === "furniture"
              ? ru(e, t).map((d) => d.box)
              : Ss(e)
                ? t & Qn
                  ? null
                  : [Rf(t)]
                : ((r = BLOCKS[e]) == null ? void 0 : r.shape) === "fence"
                  ? this.fenceBoxes(i, s, o, 1.5)
                  : ((l = BLOCKS[e]) == null ? void 0 : l.shape) === "composter"
                    ? [[0.07, 0, 0.07, 0.93, 0.98, 0.93]]
                    : ((c = BLOCKS[e]) == null ? void 0 : c.shape) === "bed"
                      ? Nx(t)
                      : ((h = BLOCKS[e]) == null ? void 0 : h.shape) === "stair"
                        ? this.blockHitBoxes(e, t)
                        : Do(e)
                          ? t & Qn
                            ? null
                            : (t & 1) === 0
                              ? [[0, 0, 0.36, 1, 1.5, 0.64]]
                              : [[0.36, 0, 0, 0.64, 1.5, 1]]
                          : null;
  }
  aabbHitsLocalBox(e, t, i, s, o, a, r, l, c, h) {
    return (
      s >= r + h[0] &&
      e <= r + h[3] &&
      o > l + h[1] &&
      t < l + h[4] &&
      a >= c + h[2] &&
      i <= c + h[5]
    );
  }
  rayBox(e, t, i, s, o, a, r, l, c, h, d, u) {
    let f = -1 / 0,
      p = 1 / 0,
      m = 0,
      y = 0;
    const g = [e, t, i],
      b = [s, o, a],
      S = [r, l, c],
      M = [h, d, u];
    for (let T = 0; T < 3; T++)
      if (Math.abs(b[T]) < 1e-9) {
        if (g[T] < S[T] || g[T] > M[T]) return null;
      } else {
        const A = 1 / b[T];
        let _ = (S[T] - g[T]) * A,
          C = (M[T] - g[T]) * A,
          R = -1;
        if (_ > C) {
          const L = _;
          ((_ = C), (C = L), (R = 1));
        }
        if ((_ > f && ((f = _), (m = T), (y = R)), C < p && (p = C), f > p))
          return null;
      }
    const x = f >= 0 ? f : p;
    return x < 0
      ? null
      : { t: x, nx: m === 0 ? y : 0, ny: m === 1 ? y : 0, nz: m === 2 ? y : 0 };
  }
  sightClear(e, t, i, s, o, a) {
    const r = s - e,
      l = o - t,
      c = a - i,
      h = Math.hypot(r, l, c);
    if (h < 1) return !0;
    const d = r / h,
      u = l / h,
      f = c / h;
    let p = Math.floor(e),
      m = Math.floor(t),
      y = Math.floor(i);
    const g = Math.floor(s),
      b = Math.floor(o),
      S = Math.floor(a),
      M = d >= 0 ? 1 : -1,
      x = u >= 0 ? 1 : -1,
      T = f >= 0 ? 1 : -1,
      A = d ? Math.abs(1 / d) : 1 / 0,
      _ = u ? Math.abs(1 / u) : 1 / 0,
      C = f ? Math.abs(1 / f) : 1 / 0;
    let R = d ? (M > 0 ? p + 1 - e : e - p) * A : 1 / 0,
      L = u ? (x > 0 ? m + 1 - t : t - m) * _ : 1 / 0,
      N = f ? (T > 0 ? y + 1 - i : i - y) * C : 1 / 0;
    for (let D = 0; D < 600; D++) {
      if (R < L && R < N) {
        if (R > h) break;
        ((p += M), (R += A));
      } else if (L < N) {
        if (L > h) break;
        ((m += x), (L += _));
      } else {
        if (N > h) break;
        ((y += T), (N += C));
      }
      if (p === g && m === b && y === S) break;
      const H = this.getBlock(p, m, y);
      if (!H) continue;
      const G = BLOCKS[H];
      if (G != null && G.solid && (!G.transparent || $n(H))) return !1;
    }
    return !0;
  }
  raycast(e, t, i, s = !1, o = !1) {
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
      y = t.y !== 0 ? (h > 0 ? r + 1 - e.y : e.y - r) * f : 1 / 0,
      g = t.z !== 0 ? (d > 0 ? l + 1 - e.z : e.z - l) * p : 1 / 0,
      b = 0,
      S = 0,
      M = 0,
      x = 0;
    const T = this.getBlock(a, r, l);
    if (!o && (Ss(T) || Do(T))) {
      const _ = this.getMeta(a, r, l),
        C = Ss(T) ? [Rf(_)] : (this.blockHitBoxes(T, _, a, r, l) ?? []);
      let R = null;
      for (const L of C) {
        if (
          e.x > a + L[0] &&
          e.x < a + L[3] &&
          e.y > r + L[1] &&
          e.y < r + L[4] &&
          e.z > l + L[2] &&
          e.z < l + L[5]
        )
          continue;
        const D = this.rayBox(
          e.x,
          e.y,
          e.z,
          t.x,
          t.y,
          t.z,
          a + L[0],
          r + L[1],
          l + L[2],
          a + L[3],
          r + L[4],
          l + L[5],
        );
        D && D.t <= i && (!R || D.t < R.t) && (R = D);
      }
      if (R)
        return {
          bx: a,
          by: r,
          bz: l,
          nx: R.nx,
          ny: R.ny,
          nz: R.nz,
          dist: R.t,
          block: T,
          point: e.clone().addScaledVector(t, R.t),
        };
    }
    const A =
      Math.ceil(i * (Math.abs(t.x) + Math.abs(t.y) + Math.abs(t.z))) + 3;
    for (let _ = 0; _ < A; _++) {
      if (
        (m < y && m < g
          ? ((a += c), (b = m), (m += u), (S = -c), (M = 0), (x = 0))
          : y < g
            ? ((r += h), (b = y), (y += f), (S = 0), (M = -h), (x = 0))
            : ((l += d), (b = g), (g += p), (S = 0), (M = 0), (x = -d)),
        b > i)
      )
        return null;
      const C = r >= 0 && r < Kt ? this.getBlock(a, r, l) : 0;
      if (C !== 0 && (s || !BLOCKS[C].liquid)) {
        const R = this.getMeta(a, r, l),
          L = Ss(C) && !o ? [Rf(R)] : this.blockHitBoxes(C, R, a, r, l);
        if (!L)
          return {
            bx: a,
            by: r,
            bz: l,
            nx: S,
            ny: M,
            nz: x,
            dist: b,
            block: C,
            point: e.clone().addScaledVector(t, b),
          };
        let N = null;
        for (const D of L) {
          const H = this.rayBox(
            e.x,
            e.y,
            e.z,
            t.x,
            t.y,
            t.z,
            a + D[0],
            r + D[1],
            l + D[2],
            a + D[3],
            r + D[4],
            l + D[5],
          );
          H && H.t <= i && (!N || H.t < N.t) && (N = H);
        }
        if (N)
          return {
            bx: a,
            by: r,
            bz: l,
            nx: N.nx,
            ny: N.ny,
            nz: N.nz,
            dist: N.t,
            block: C,
            point: e.clone().addScaledVector(t, N.t),
          };
      }
    }
    return null;
  }
  raycastBullet(e, t, i, s) {
    const o = [],
      a = e.clone();
    let r = 0,
      l = s;
    for (let c = 0; c < s + 6; c++) {
      const h = this.raycast(a, t, i - r, !1, !0);
      if (!h) return { hit: null, torn: o };
      const d = { ...h, dist: h.dist + r },
        u = Bo(h.block),
        f = $n(h.block);
      if (!u && !(f && l > 0)) return { hit: d, torn: o };
      if ((f && l--, o.push(d), (r = d.dist + 0.05), r >= i))
        return { hit: null, torn: o };
      a.copy(e).addScaledVector(t, r);
    }
    return { hit: null, torn: o };
  }
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
  boxCollides(e, t, i, s, o, a) {
    if (
      this.propColliders.some(
        (r) =>
          e < r.max.x &&
          s > r.min.x &&
          t < r.max.y &&
          o > r.min.y &&
          i < r.max.z &&
          a > r.min.z,
      )
    )
      return !0;
    for (let r = Math.floor(e); r <= Math.floor(s); r++)
      for (let l = Math.floor(t) - 1; l <= Math.floor(o); l++)
        for (let c = Math.floor(i); c <= Math.floor(a); c++) {
          const h = this.getBlock(r, l, c),
            d = this.collisionBoxes(h, this.getMeta(r, l, c), r, l, c);
          if (d) {
            if (
              d.some((u) => this.aabbHitsLocalBox(e, t, i, s, o, a, r, l, c, u))
            )
              return !0;
          } else if (this.isSolidAt(r, l, c) && l + 1 > t) return !0;
        }
    return !1;
  }
  boxCollidesStair(e, t, i, s, o, a) {
    const r = this.propColliders.find(
      (m) =>
        e < m.max.x &&
        s > m.min.x &&
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
    for (let m = Math.floor(e); m <= Math.floor(s); m++)
      for (let y = Math.floor(t) - 1; y <= Math.floor(o); y++)
        for (let g = Math.floor(i); g <= Math.floor(a); g++) {
          const b = this.getBlock(m, y, g);
          if (b === 0) continue;
          const S =
            this.collisionBoxes(b, this.getMeta(m, y, g), m, y, g) ??
            (this.isSolidAt(m, y, g) && y + 1 > t ? a2 : null);
          if (!S) continue;
          let M = !1;
          for (const x of S)
            (S !== a2 &&
              !this.aabbHitsLocalBox(e, t, i, s, o, a, m, y, g, x)) ||
              ((M = !0),
              (h = Math.min(h, m + x[0])),
              (d = Math.max(d, m + x[3])),
              (u = Math.min(u, g + x[2])),
              (f = Math.max(f, g + x[5])),
              (p = Math.max(p, y + x[4])));
          M && ((l = !0), this.isStairAt(m, y, g) || (c = !1));
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
  boxFree(e, t, i, s, o) {
    const a = s / 2;
    return !this.boxCollides(e - a, t, i - a, e + a, t + o, i + a);
  }
  verticalSurface(e, t, i, s, o, a) {
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
      (a ? d <= s + l && d >= o - l : d >= s - l && d <= o + l) &&
        (c = c === null ? d : a ? Math.max(c, d) : Math.min(c, d));
    }
    for (let h = Math.floor(e - r); h <= Math.floor(e + r - l); h++)
      for (let d = Math.floor(t - r); d <= Math.floor(t + r - l); d++)
        for (
          let u = Math.floor(Math.min(s, o)) - 1;
          u <= Math.floor(Math.max(s, o));
          u++
        ) {
          const f = this.getBlock(h, u, d),
            p = this.getMeta(h, u, d);
          if (f === 0) continue;
          const m = this.collisionBoxes(f, p, h, u, d);
          if (!(!m && !this.isSolidAt(h, u, d)))
            for (const y of m ?? a2) {
              if (
                e + r - l <= h + y[0] ||
                e - r >= h + y[3] ||
                t + r - l <= d + y[2] ||
                t - r >= d + y[5]
              )
                continue;
              const g = u + y[a ? 4 : 1];
              (a ? g <= s + l && g >= o - l : g >= s - l && g <= o + l) &&
                (c = c === null ? g : a ? Math.max(c, g) : Math.min(c, g));
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
              (this.isSolidAt(c, d, h) ? a2 : []);
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
  collideMove(e, t, i, s, o) {
    const a = { onGround: !1, hitHoriz: !1, hitTop: !1, stepUp: 0 },
      r = i / 2,
      l = 0.001,
      c = e.x,
      h = e.y,
      d = e.z;
    if (!this.resolveOverlap(e, i, s))
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
      y = Math.max(1, Math.ceil(m / 0.4)),
      g = o / y;
    for (let b = 0; b < y; b++) {
      const S = e.y;
      if (((e.y += t.y * g), t.y <= 0)) {
        const T = this.verticalSurface(e.x, e.z, i, S, e.y, !0);
        T !== null && ((e.y = T + l), (t.y = 0), (a.onGround = !0));
      } else {
        const T = e.y + s,
          A = this.verticalSurface(e.x, e.z, i, S + s, T, !1);
        A !== null && ((e.y = A - s - l), (t.y = 0), (a.hitTop = !0));
      }
      const M = e.x;
      if (((e.x += t.x * g), t.x !== 0)) {
        const T = t.x > 0 ? e.x + r : e.x - r,
          A = this.boxCollidesStair(
            Math.min(T, M + (t.x > 0 ? r : -r)),
            e.y + l,
            e.z - r,
            Math.max(T, M + (t.x > 0 ? r : -r)),
            e.y + s - l,
            e.z + r - l,
          );
        if (A.blocked) {
          const _ = p(A),
            C = e.y + _ + l;
          _ > 0 &&
          !this.boxCollides(
            e.x - r,
            C,
            e.z - r,
            e.x + r - l,
            C + s - l,
            e.z + r - l,
          )
            ? ((a.stepUp += C - e.y), (e.y = C))
            : ((e.x = t.x > 0 ? A.minX - r - l : A.maxX + r + l),
              (t.x = 0),
              (a.hitHoriz = !0));
        }
      }
      const x = e.z;
      if (((e.z += t.z * g), t.z !== 0)) {
        const T = t.z > 0 ? e.z + r : e.z - r,
          A = this.boxCollidesStair(
            e.x - r,
            e.y + l,
            Math.min(T, x + (t.z > 0 ? r : -r)),
            e.x + r - l,
            e.y + s - l,
            Math.max(T, x + (t.z > 0 ? r : -r)),
          );
        if (A.blocked) {
          const _ = p(A),
            C = e.y + _ + l;
          _ > 0 &&
          !this.boxCollides(
            e.x - r,
            C,
            e.z - r,
            e.x + r - l,
            C + s - l,
            e.z + r - l,
          )
            ? ((a.stepUp += C - e.y), (e.y = C))
            : ((e.z = t.z > 0 ? A.minZ - r - l : A.maxZ + r + l),
              (t.z = 0),
              (a.hitHoriz = !0));
        }
      }
    }
    return a;
  }
};
