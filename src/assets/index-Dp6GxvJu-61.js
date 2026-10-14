// index-Dp6GxvJu 61 — replace
// Lines 47130-47468 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const aV = (n) => (Pp > 0 ? `${n}-fx${Pp}` : n),
  rV = `
varying vec3 vViewPosition;
varying vec3 vFxWorld;
uniform sampler2D uFxMaterials;
uniform float uFxWetness;
uniform sampler2D uFxCloudShadow;
uniform vec4 uFxCloudShadowParams;
uniform float uFxCloudMidY;
uniform vec3 uFxLightDir;
uniform vec3 uFxSkyTint;
uniform float uFxTime;
uniform float uFxSeaLevel;
uniform sampler2D uFxWaterMap;
uniform vec4 uFxWaterMapParams;
uniform float uFxCamUnderwater;
uniform vec3 uFxWaterTint;

// per-fragment surface state, written in main() before lighting and read by RE_Direct
float fxSpec = 0.0;
float fxGloss = 16.0;
float fxFoliage = 0.0;
float fxWet = 0.0;
float fxWetSheen = 0.0;   // how mirror-like the wetness is: standing water on flat ground, a film elsewhere
float fxCloudShadow = 1.0;
// three evaluates point and spot lights before directional ones; this flips to 1 when the
// sun/moon loop starts, so sun-only terms (leaf transmission) skip torches and explosions
float fxSunPass = 0.0;
float fxCaustic = 0.0;   // extra sunlight focused by the waves onto a submerged surface
float fxUnderwater = 0.0; // how far below the water surface this fragment lies, in blocks
vec3 fxSunUnshadowed = vec3(0.0);
vec3 fxSpecular = vec3(0.0);

struct LambertMaterial {
  vec3 diffuseColor;
  float specularStrength;
};

void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
  float rawNL = dot( geometryNormal, directLight.direction );
  float dotNL = saturate( rawNL );
  // Leaves are thin: light wraps around them instead of stopping dead at the terminator.
  float wrapNL = saturate( ( rawNL + 0.4 ) / 1.4 );
  vec3 irradiance = mix( dotNL, wrapNL, fxFoliage ) * directLight.color;
  reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

  if ( fxCaustic > 0.0 && fxSunPass > 0.5 ) reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor ) * fxCaustic;

  if ( fxSpec > 0.002 ) {
    // energy-normalised Blinn-Phong with Schlick fresnel: tight, bright glints on smooth
    // surfaces, a broad faint sheen on rough ones, and grazing angles always a bit shinier
    vec3 halfDir = normalize( directLight.direction + geometryViewDir + vec3( 0.0, 1e-4, 0.0 ) );
    float dotNH = saturate( dot( geometryNormal, halfDir ) );
    float dotVH = saturate( dot( geometryViewDir, halfDir ) );
    float fresnel = 0.04 + 0.96 * pow( 1.0 - dotVH, 5.0 );
    float distribution = ( fxGloss + 8.0 ) * 0.0397887 * pow( dotNH, fxGloss );
    fxSpecular += directLight.color * dotNL * distribution * fresnel * fxSpec;
  }

  if ( fxFoliage > 0.002 && fxSunPass > 0.5 ) {
    // Transmission: looking towards the sun through a canopy, the leaves light up from behind.
    // Part of it ignores the shadow map — a leaf block shadows itself, but real leaves are thin.
    float forward = pow( saturate( dot( -geometryViewDir, directLight.direction ) ), 4.0 );
    vec3 through = mix( directLight.color, fxSunUnshadowed * fxCloudShadow, 0.45 );
    reflectedLight.directDiffuse += through * material.diffuseColor * ( forward * 0.85 + 0.08 ) * fxFoliage;
  }
}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
  reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

#define RE_Direct RE_Direct_Lambert
#define RE_IndirectDiffuse RE_IndirectDiffuse_Lambert

float fxLuma( vec3 c ) { return dot( c, vec3( 0.2126, 0.7152, 0.0722 ) ); }
// Iterated domain warp: the bright, thin, constantly re-forming network of light that waves
// focus onto a shallow sea floor.
float fxCausticPattern( vec2 q, float t ) {
  // the warp only forms its network with |p| around 250 (a period of the pattern is 2π)
  vec2 p = mod( q, 6.2831853 ) - 250.0;
  vec2 i = p;
  float c = 1.0;
  for ( int n = 0; n < 4; n++ ) {
    float tt = t * ( 1.0 - 3.5 / float( n + 1 ) );
    i = p + vec2( cos( tt - i.x ) + sin( tt + i.y ), sin( tt - i.y ) + cos( tt + i.x ) );
    c += 1.0 / length( vec2( p.x / ( sin( i.x + tt ) / 0.005 ), p.y / ( cos( i.y + tt ) / 0.005 ) ) );
  }
  c = 1.17 - pow( c / 4.0, 1.4 );
  return pow( abs( c ), 8.0 );
}
float fxHash( vec2 p ) { return fract( sin( dot( p, vec2( 127.1, 311.7 ) ) ) * 43758.5453 ); }
float fxNoise( vec2 p ) {
  vec2 i = floor( p ), f = fract( p );
  f = f * f * ( 3.0 - 2.0 * f );
  return mix( mix( fxHash( i ), fxHash( i + vec2( 1.0, 0.0 ) ), f.x ),
              mix( fxHash( i + vec2( 0.0, 1.0 ) ), fxHash( i + vec2( 1.0, 1.0 ) ), f.x ), f.y );
}
`,
  lV = (n) => `
vec3 fxEmissive = vec3( 0.0 );
{
  vec2 fxUv = vMapUv;
  vec2 fxCell = floor( fxUv * ${mi}.0 );
  ivec2 fxTexel = ivec2( clamp( fxCell, vec2( 0.0 ), vec2( ${mi - 1}.0 ) ) );
  vec4 fxA = texelFetch( uFxMaterials, fxTexel, 0 );
  vec4 fxB = texelFetch( uFxMaterials, fxTexel + ivec2( ${mi}, 0 ), 0 );
  fxSpec = fxA.r;
  fxGloss = mix( 4.0, 220.0, fxA.g * fxA.g );
  fxFoliage = fxA.a;
  float fxRelief = fxB.r * 2.0;
  float fxPorosity = fxB.g;
  vec3 fxFlat = normal;

  // Relief from the albedo: brighter texels are treated as raised. The tangent frame comes from
  // screen-space derivatives, so it needs no tangent attribute and works on every face of every
  // shape the mesher emits. Faded out once a texel is smaller than a pixel, where it would only
  // sparkle.
  // Derivatives are taken before any branch: inside non-uniform control flow they are undefined.
  // Relief works on the 16×16 design grid every tile is painted on, whatever the atlas
  // resolution: that is where the structure (cracks, planks, stones) lives, and it keeps the
  // effect identical from 16 px to 128 px textures.
  vec2 fxAtlasPx = vec2( ${mi * 16}.0 );
  vec2 fxDuv = fwidth( fxUv ) * fxAtlasPx;
  float fxDetail = 1.0 - smoothstep( 0.4, 1.0, max( fxDuv.x, fxDuv.y ) );
  // At grazing angles a texel shrinks to a sliver across the view and the screen-derivative
  // tangent frame becomes unstable: the relief then turned into streaks running along walls
  // and floors seen edge-on. It fades out well before that.
  fxDetail *= smoothstep( 0.18, 0.5, abs( dot( normal, normalize( vViewPosition ) ) ) );
  vec3 fxQ0 = dFdx( -vViewPosition ), fxQ1 = dFdy( -vViewPosition );
  vec2 fxSt0 = dFdx( fxUv ), fxSt1 = dFdy( fxUv );
  // caustic cells are a couple of blocks wide: fade them once a cell shrinks to a few pixels
  float fxCausticFade = 1.0 - smoothstep( 0.25, 0.9, length( fwidth( vFxWorld.xz ) ) * 0.42 );
  if ( fxRelief > 0.01 && fxDetail > 0.01 ) {
    vec2 fxTexelUv = 1.0 / fxAtlasPx;
    vec2 fxLo = fxCell / ${mi}.0 + fxTexelUv * 0.5;
    vec2 fxHi = ( fxCell + 1.0 ) / ${mi}.0 - fxTexelUv * 0.5;
    vec2 fxC = clamp( fxUv, fxLo, fxHi );
    float fxH0 = fxLuma( textureLod( map, fxC, 0.0 ).rgb );
    float fxHx = fxLuma( textureLod( map, clamp( fxC + vec2( fxTexelUv.x, 0.0 ), fxLo, fxHi ), 0.0 ).rgb );
    float fxHy = fxLuma( textureLod( map, clamp( fxC + vec2( 0.0, fxTexelUv.y ), fxLo, fxHi ), 0.0 ).rgb );
    vec2 fxGrad = vec2( fxHx - fxH0, fxHy - fxH0 ) * fxRelief * fxDetail * 2.4;
    vec3 fxQ1p = cross( fxQ1, normal ), fxQ0p = cross( normal, fxQ0 );
    vec3 fxT = fxQ1p * fxSt0.x + fxQ0p * fxSt1.x;
    vec3 fxB2 = fxQ1p * fxSt0.y + fxQ0p * fxSt1.y;
    float fxDet = max( dot( fxT, fxT ), dot( fxB2, fxB2 ) );
    float fxScale = fxDet == 0.0 ? 0.0 : inversesqrt( fxDet );
    normal = normalize( normal - ( fxT * fxGrad.x + fxB2 * fxGrad.y ) * fxScale );
  }

  // Rain: open-sky surfaces darken (water fills the pores) and turn glossy. Up-facing ground
  // gathers it in patches — puddles — which also fill the relief back in.
  if ( uFxWetness > 0.001 ) {
    vec3 fxUp = normalize( ( viewMatrix * vec4( 0.0, 1.0, 0.0, 0.0 ) ).xyz );
    float fxUpness = saturate( dot( fxFlat, fxUp ) );
    float fxOpen = smoothstep( 0.72, 0.96, ${n} );
    float fxPuddle = smoothstep( 0.45, 0.72, fxNoise( vFxWorld.xz * 0.23 ) * 0.7 + fxNoise( vFxWorld.xz * 0.9 ) * 0.3 );
    fxWet = uFxWetness * fxOpen * mix( 0.45, mix( 0.7, 1.0, fxPuddle ), step( 0.6, fxUpness ) );
    fxWetSheen = mix( 0.25, 1.0, fxPuddle * step( 0.6, fxUpness ) ) * ( 1.0 - fxPorosity * 0.5 );
    diffuseColor.rgb *= mix( 1.0, 0.58, fxWet * fxPorosity );
    fxSpec = max( fxSpec, fxWet * 0.85 );
    fxGloss = mix( fxGloss, 160.0, fxWet );
    normal = normalize( mix( normal, fxFlat, fxWet * fxPuddle * step( 0.6, fxUpness ) ) );
  }

  // Caustics below the water surface, fading with depth. Caves get none: the sunlight that feeds
  // them is already scaled by the sky light before it reaches RE_Direct.
  float fxWaterY = uFxSeaLevel;
  float fxWaterFloor = -1e4;
  bool fxWaterKnown = false;
  // Sample just outside the block face: an immersed pillar has solid voxels behind its face
  // and water in the neighbouring column. Skylight measures shade, not water occupancy.
  vec3 fxWaterPoint = vFxWorld + inverseTransformDirection( fxFlat, viewMatrix ) * 0.04;
  if ( uFxWaterMapParams.w > 0.0 ) {
    vec2 fxWuv = vec2( fxWaterPoint.x - uFxWaterMapParams.x, uFxWaterMapParams.y - fxWaterPoint.z ) / uFxWaterMapParams.z + 0.5;
    if ( fxWuv.x > 0.0 && fxWuv.y > 0.0 && fxWuv.x < 1.0 && fxWuv.y < 1.0 ) {
      fxWaterKnown = true;
      vec2 fxColumn = textureLod( uFxWaterMap, fxWuv, 0.0 ).rg;
      fxWaterY = fxColumn.r > 0.5 ? fxColumn.r - 1.0 : -1e4;
      fxWaterFloor = fxColumn.g - 1.0;
    }
  }
  float fxDepth = fxWaterY - vFxWorld.y;
  // The column's floor excludes dry rooms and caves beneath a pool, even if they are lit.
  // Beyond the local map, retain the sky-lit sea approximation without tinting distant caves.
  float fxWaterAmount = fxWaterKnown ? 1.0 : smoothstep( 0.0, 0.08, ${n} );
  fxUnderwater = fxDepth > 0.02 && fxWaterPoint.y >= fxWaterFloor && fxWaterPoint.y <= fxWaterY + 0.02 ? fxDepth * fxWaterAmount : 0.0;
  if ( fxUnderwater > 0.0 && fxDepth < 26.0 ) {
    float fxC = fxCausticPattern( vFxWorld.xz * 0.42 + vFxWorld.y * 0.1, uFxTime * 0.55 );
    fxCaustic = min( fxC, 1.2 ) * 6.0 * exp( -fxDepth * 0.1 ) * smoothstep( 0.02, 0.5, fxDepth ) * fxCausticFade;
  }

  // Emission: only the bright part of an emitter's texture glows (the flame, not the stick).
  if ( fxA.b > 0.002 ) {
    float fxGlow = smoothstep( 0.28, 0.75, fxLuma( diffuseColor.rgb ) );
    fxEmissive = diffuseColor.rgb * fxA.b * fxGlow * 2.6;
  }

  // Cloud shadow: where the ray towards the key light crosses the cloud deck.
  if ( uFxCloudShadowParams.w > 0.0 ) {
    vec3 fxL = normalize( uFxLightDir );
    vec3 fxP = vFxWorld + fxL * ( ( uFxCloudMidY - vFxWorld.y ) / max( fxL.y, 0.08 ) );
    vec2 fxSuv = ( fxP.xz - uFxCloudShadowParams.xy ) / uFxCloudShadowParams.z + 0.5;
    float fxEdge = smoothstep( 0.0, 0.12, min( min( fxSuv.x, fxSuv.y ), min( 1.0 - fxSuv.x, 1.0 - fxSuv.y ) ) );
    fxCloudShadow = mix( 1.0, textureLod( uFxCloudShadow, fxSuv, 0.0 ).r, uFxCloudShadowParams.w * fxEdge );
  }
}
`,
  cV = [N2.x, N2.y, N2.z].map((n) => n.toFixed(4)).join(", "),
  hV = (n) => `
{
  // sky sheen on wet and glossy surfaces: a cheap stand-in for a reflection of the sky dome
  vec3 fxV = normalize( vViewPosition );
  float fxNV = saturate( dot( normal, fxV ) );
  float fxFres = 0.04 + 0.96 * pow( 1.0 - fxNV, 5.0 );
  outgoingLight += uFxSkyTint * fxFres * ( fxWet * fxWetSheen * 0.4 + fxSpec * 0.06 ) * ${n};
  outgoingLight += fxSpecular + fxEmissive;
  // Water column (Beer-Lambert per channel). The sunlight has come down through the water, and
  // seen from above the surface the view ray also passes through it on its way back up —
  // shallows keep their sandy floor, deep water turns dark blue. With the camera under water
  // the compose pass absorbs along the view instead, so only the light's path applies here.
  if ( fxUnderwater > 0.0 ) {
    const vec3 fxSigma = vec3( ${cV} );
    vec3 fxEye = normalize( vFxWorld - cameraPosition );
    float fxView = uFxCamUnderwater > 0.5 ? 0.0
      : min( fxUnderwater / max( -fxEye.y, 0.12 ), length( vFxWorld - cameraPosition ) );
    vec3 fxViewT = exp( -fxSigma * fxView );
    outgoingLight = outgoingLight * fxViewT * exp( -fxSigma * fxUnderwater * 0.6 ) + uFxWaterTint * ( 1.0 - fxViewT );
  }
}
`;
function dV(n, e) {
  (oV(),
    Object.assign(n.uniforms, Wn),
    Pp !== 0 &&
      ((n.vertexShader = n.vertexShader
        .replace(
          "#include <common>",
          `varying vec3 vFxWorld;
#include <common>`,
        )
        .replace(
          "#include <project_vertex>",
          `#include <project_vertex>
      // Match three.js worldpos_vertex: animated lids use an instance transform in
      // addition to the mesh transform. Sampling at the hinge-local origin makes
      // a dry chest look submerged and puts cloud/water effects in the wrong place.
      vec4 fxWorldPosition = vec4( transformed, 1.0 );
      #ifdef USE_BATCHING
        fxWorldPosition = batchingMatrix * fxWorldPosition;
      #endif
      #ifdef USE_INSTANCING
        fxWorldPosition = instanceMatrix * fxWorldPosition;
      #endif
      vFxWorld = ( modelMatrix * fxWorldPosition ).xyz;`,
        )),
      (n.fragmentShader = n.fragmentShader
        .replace("#include <lights_lambert_pars_fragment>", rV)
        .replace(
          "#include <normal_fragment_maps>",
          `#include <normal_fragment_maps>
` + lV(e),
        )
        .replace(
          `directLight.color *= ${e};`,
          `directLight.color *= ${e};
 fxSunPass = 1.0;
 fxSunUnshadowed = directLight.color;
 directLight.color *= fxCloudShadow;`,
        )
        .replace(
          "#include <opaque_fragment>",
          hV(e) + "#include <opaque_fragment>",
        ))));
}
const hn = 2303787,
  Aa = 4541524,
  n0 = 8016432,
  Zu = 4021294,
  $T = 6052934,
  Qu = 2830134,
  uV = 12096319;
function Bi(n, e = "matte") {
  return e === "metal"
    ? new Us({ color: n, specular: 9279396, shininess: 55 })
    : e === "gloss"
      ? new Us({ color: n, specular: 4868682, shininess: 26 })
      : new Us({ color: n, specular: 1052688, shininess: 5 });
}
function Ly(n) {
  return ((n.userData.skinKeep = !0), n);
}
function De(n, e, t, i, s = 0, o = 0, a = 0, r = "matte") {
  const l = new le(new Ct(n, e, t), Bi(i, r));
  return (l.position.set(s, o, a), l);
}
function Qt(n, e, t, i = 0, s = 0, o = 0, a = "metal") {
  const r = new le(new xt(n, n, e, di(10)), Bi(t, a));
  return ((r.rotation.x = Math.PI / 2), r.position.set(i, s, o), r);
}
function Iy(n, e, t, i, s = 0, o = 0, a = 0, r = "metal") {
  const l = new le(new xt(e, n, t, di(10)), Bi(i, r));
  return ((l.rotation.x = Math.PI / 2), l.position.set(s, o, a), l);
}
function Il(n, e, t, i = 0, s = 0, o = 0, a = "metal") {
  const r = new le(new ma(n, e, di(10)), Bi(t, a));
  return ((r.rotation.x = -Math.PI / 2), r.position.set(i, s, o), r);
}
function zr(n, e, t, i, s, o, a, r, l, c, h = "metal") {
  for (let d = 0; d < e; d++) n.add(De(i, s, o, a, r, l, c + d * t, h));
}
function ln(n, e, t, i, s, o = 0, a = 0, r = 0) {
  const l = new $t();
  return (
    (l.name = e),
    l.position.set(t, i, s),
    l.rotation.set(o, a, r),
    n.add(l),
    l
  );
}
function Wo(n, e, t, i = "matte", s = 0) {
  const o = new ql();
  (n.forEach(([l, c], h) => (h ? o.lineTo(l, c) : o.moveTo(l, c))),
    o.closePath());
  const a = yt(1),
    r = new Kl(o, {
      depth: e - (a ? 0.008 : 0),
      bevelEnabled: a,
      bevelThickness: 0.004,
      bevelSize: 0.003,
      bevelSegments: 1,
    });
  return (
    r.rotateY(-Math.PI / 2),
    r.translate(e / 2 - (a ? 0.004 : 0) + s, 0, 0),
    new le(r, Bi(t, i))
  );
}
