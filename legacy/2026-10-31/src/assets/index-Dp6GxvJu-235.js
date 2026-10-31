// index-Dp6GxvJu 235 — ase
// Lines 127940-128695 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const Yp = 155,
  jp = 235,
  n3 = 1024,
  Bh = 256,
  bse = 192,
  wse = 108,
  xf = 64,
  s3 = 6,
  Mse = `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4( position.xy, 0.0, 1.0 ); }`,
  rh = `
#define PI 3.14159265359
float fxIgn( vec2 p ) { return fract( 52.9829189 * fract( dot( p, vec2( 0.06711056, 0.00583715 ) ) ) ); }
float fxLuma( vec3 c ) { return dot( c, vec3( 0.2126, 0.7152, 0.0722 ) ); }
vec2 fxSkyUv( vec3 d ) {
  float az = atan( d.z, d.x );
  float el = asin( clamp( d.y, -1.0, 1.0 ) );
  float t = sqrt( abs( el ) / ( 0.5 * PI ) ) * sign( el );
  return vec2( az / ( 2.0 * PI ) + 0.5, t * 0.5 + 0.5 );
}
vec3 fxSky( sampler2D lut, vec3 d ) { return textureLod( lut, fxSkyUv( d ), 0.0 ).rgb; }
// A single NaN or overflowed half-float would be smeared across the screen by the shafts, the
// bloom chain and the cloud history, so every stage that feeds another scrubs its output.
// Written with comparisons rather than isnan(): NaN fails every comparison, on every driver.
vec3 fxSafe( vec3 c ) { return ( c.r < 6e4 && c.g < 6e4 && c.b < 6e4 ) ? max( c, vec3( 0.0 ) ) : vec3( 0.0 ); }
float fxSafe( float v ) { return v < 6e4 ? max( v, 0.0 ) : 0.0; }
float fxHG( float mu, float g ) { float g2 = g * g; return ( 1.0 - g2 ) / ( 4.0 * PI * pow( 1.0 + g2 - 2.0 * g * mu, 1.5 ) ); }
`,
  V4 = `
uniform sampler2D tDepth;
uniform mat4 uInvProj;
uniform mat4 uCamWorld;
vec3 fxViewPos( vec2 uv, float d ) {
  vec4 v = uInvProj * vec4( uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0 );
  return v.xyz / v.w;
}
// Reconstructs at the centre of the depth texel that holds uv. The half-resolution passes sit
// exactly on full-resolution texel boundaries, where nearest sampling rounds either way from
// column to column: pairing one texel's depth with its neighbour's position put a surface seen
// edge-on far off its own plane, and the ambient occlusion drew that as fine stripes down long
// walls and across floors.
vec2 fxDepthCell( vec2 uv ) {
  vec2 res = vec2( textureSize( tDepth, 0 ) );
  return ( floor( uv * res ) + 0.5 ) / res;
}
vec3 fxViewPosCell( vec2 c ) { return fxViewPos( c, textureLod( tDepth, c, 0.0 ).x ); }
vec3 fxViewPosAt( vec2 uv ) { return fxViewPosCell( fxDepthCell( uv ) ); }
vec3 fxWorldDir( vec2 uv ) {
  vec4 v = uInvProj * vec4( uv * 2.0 - 1.0, 1.0, 1.0 );
  return normalize( mat3( uCamWorld ) * ( v.xyz / v.w ) );
}
// View-space normal from depth: for each axis pick the neighbour on the same surface, so block
// edges do not produce smeared normals. Faces the camera.
vec3 fxViewNormal( vec2 uv ) {
  // neighbours are stepped from the snapped centre: stepped from uv itself, a boundary
  // position could round onto the same texel and leave a zero-length tangent
  vec2 c = fxDepthCell( uv );
  vec2 texel = 1.0 / vec2( textureSize( tDepth, 0 ) );
  vec3 P = fxViewPosCell( c );
  vec3 pr = fxViewPosCell( c + vec2( texel.x, 0.0 ) ), pl = fxViewPosCell( c - vec2( texel.x, 0.0 ) );
  vec3 pu = fxViewPosCell( c + vec2( 0.0, texel.y ) ), pd = fxViewPosCell( c - vec2( 0.0, texel.y ) );
  vec3 dx = abs( pr.z - P.z ) < abs( P.z - pl.z ) ? pr - P : P - pl;
  vec3 dy = abs( pu.z - P.z ) < abs( P.z - pd.z ) ? pu - P : P - pd;
  vec3 N = normalize( cross( dx, dy ) );
  return dot( N, P ) > 0.0 ? -N : N;
}
`,
  Sse = `
${rh}
uniform vec3 uSunDir;
uniform vec3 uMoonDir;
uniform float uSunI;
uniform float uMoonI;
uniform vec3 uTop;
uniform vec3 uHorizon;
uniform float uNight;
uniform float uOvercast;
uniform float uOvercastLevel;
uniform float uLunar;
varying vec2 vUv;

const float RE = 6360e3;
const float RA = 6420e3;
const vec3 BR = vec3( 5.802e-6, 13.558e-6, 33.1e-6 );
const float BM = 1.6e-6;
const vec3 BO = vec3( 0.650e-6, 1.881e-6, 0.085e-6 );

vec2 raySphere( vec3 o, vec3 d, float r ) {
  float b = dot( o, d ), c = dot( o, o ) - r * r, h = b * b - c;
  if ( h < 0.0 ) return vec2( -1.0 );
  h = sqrt( h );
  return vec2( -b - h, -b + h );
}

vec3 scatter( vec3 rd, vec3 L ) {
  vec3 ro = vec3( 0.0, RE + 300.0, 0.0 );
  float tMax = raySphere( ro, rd, RA ).y;
  vec2 ground = raySphere( ro, rd, RE );
  if ( ground.x > 0.0 ) tMax = min( tMax, ground.x );
  // Single scattering has no multiple-scatter term, so very long horizontal paths extinguish
  // all the blue and the horizon turns yellow. Capping the path keeps it the white-blue it is.
  tMax = min( tMax, 60e3 );
  const int N = 12;
  const int M = 4;
  float ds = tMax / float( N );
  vec3 sumR = vec3( 0.0 ), sumM = vec3( 0.0 );
  float odR = 0.0, odM = 0.0, odO = 0.0;
  for ( int i = 0; i < N; i++ ) {
    vec3 p = ro + rd * ( ds * ( float( i ) + 0.5 ) );
    float h = length( p ) - RE;
    float hr = exp( -h / 8e3 ) * ds, hm = exp( -h / 1.2e3 ) * ds;
    float ho = max( 0.0, 1.0 - abs( h - 25e3 ) / 15e3 ) * ds;
    odR += hr; odM += hm; odO += ho;
    vec2 shadow = raySphere( p, L, RE );
    if ( shadow.x > 0.0 ) continue;
    float dl = raySphere( p, L, RA ).y / float( M );
    float lR = 0.0, lM = 0.0, lO = 0.0;
    for ( int j = 0; j < M; j++ ) {
      float hq = length( p + L * ( dl * ( float( j ) + 0.5 ) ) ) - RE;
      lR += exp( -hq / 8e3 ) * dl;
      lM += exp( -hq / 1.2e3 ) * dl;
      lO += max( 0.0, 1.0 - abs( hq - 25e3 ) / 15e3 ) * dl;
    }
    vec3 att = exp( -( BR * ( odR + lR ) + BM * 1.11 * ( odM + lM ) + BO * ( odO + lO ) ) );
    sumR += att * hr;
    sumM += att * hm;
  }
  float mu = dot( rd, L );
  float phaseR = 3.0 / ( 16.0 * PI ) * ( 1.0 + mu * mu );
  float g = 0.8, g2 = g * g;
  float phaseM = 3.0 / ( 8.0 * PI ) * ( ( 1.0 - g2 ) * ( 1.0 + mu * mu ) ) / ( ( 2.0 + g2 ) * pow( 1.0 + g2 - 2.0 * g * mu, 1.5 ) );
  return sumR * BR * phaseR + sumM * BM * phaseM;
}

void main() {
  float az = ( vUv.x - 0.5 ) * 2.0 * PI;
  float t = vUv.y * 2.0 - 1.0;
  float el = t * abs( t ) * 0.5 * PI;
  vec3 rd = vec3( cos( el ) * cos( az ), sin( el ), cos( el ) * sin( az ) );
  // The last couple of degrees above the horizon are the most extinguished, murkiest part of a
  // single-scattering sky, and below it the voxel ground covers the dome anyway (what shows
  // there is haze in front of the far terrain). Both use the sky a little above the horizon.
  vec3 rs = normalize( vec3( rd.x, max( rd.y, 0.04 ), rd.z ) );
  vec3 col = vec3( 0.0 );
  if ( uSunI > 0.0 ) col += scatter( rs, uSunDir ) * uSunI;
  if ( uMoonI > 0.0 ) col += scatter( rs, uMoonDir ) * uMoonI * vec3( 0.72, 0.84, 1.2 );
  float h = max( rd.y, 0.0 );
  vec3 grad = mix( uHorizon, uTop, pow( h, 0.55 ) );
  grad = mix( grad, uHorizon, pow( 1.0 - h, 9.0 ) * 0.75 );
  col += grad * uNight;
  col = mix( col, grad * uOvercastLevel, uOvercast );
  col = mix( col, grad, uLunar );
  // below the horizon the eye meets ground and sea through the haze: darker than the sky above
  // (only mildly: where terrain has not streamed in yet this is what shows through)
  if ( rd.y < 0.0 ) col *= mix( 1.0, 0.72, smoothstep( 0.0, 0.2, -rd.y ) );
  gl_FragColor = vec4( fxSafe( col ), 1.0 );
}`,
  Ese = `
uniform float uSlice;
varying vec2 vUv;
vec3 hash33( vec3 p ) {
  p = fract( p * vec3( 0.1031, 0.1030, 0.0973 ) );
  p += dot( p, p.yxz + 33.33 );
  return fract( ( p.xxy + p.yxx ) * p.zyx );
}
float worley( vec3 p, float freq ) {
  vec3 q = p * freq, id = floor( q ), f = fract( q );
  float md = 1.0;
  for ( int x = -1; x <= 1; x++ ) for ( int y = -1; y <= 1; y++ ) for ( int z = -1; z <= 1; z++ ) {
    vec3 o = vec3( float( x ), float( y ), float( z ) );
    vec3 d = o + hash33( mod( id + o, freq ) ) - f;
    md = min( md, dot( d, d ) );
  }
  return 1.0 - clamp( sqrt( md ), 0.0, 1.0 );
}
float perlin( vec3 p, float freq ) {
  vec3 q = p * freq, i = floor( q ), f = fract( q );
  vec3 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 );
  #define G( c ) dot( normalize( hash33( mod( i + c, freq ) ) * 2.0 - 1.0 ), f - c )
  float n = mix(
    mix( mix( G( vec3( 0, 0, 0 ) ), G( vec3( 1, 0, 0 ) ), u.x ), mix( G( vec3( 0, 1, 0 ) ), G( vec3( 1, 1, 0 ) ), u.x ), u.y ),
    mix( mix( G( vec3( 0, 0, 1 ) ), G( vec3( 1, 0, 1 ) ), u.x ), mix( G( vec3( 0, 1, 1 ) ), G( vec3( 1, 1, 1 ) ), u.x ), u.y ), u.z );
  #undef G
  return n;
}
void main() {
  vec3 p = vec3( vUv, uSlice );
  float pf = perlin( p, 4.0 ) * 0.5 + perlin( p, 8.0 ) * 0.25 + perlin( p, 16.0 ) * 0.125;
  pf = clamp( pf * 0.9 + 0.5, 0.0, 1.0 );
  float wf = worley( p, 4.0 ) * 0.625 + worley( p, 8.0 ) * 0.25 + worley( p, 16.0 ) * 0.125;
  float shape = clamp( ( pf * 0.5 + wf * 0.6 - 0.52 ) * 2.3 + 0.5, 0.0, 1.0 );
  float detail = worley( p, 8.0 ) * 0.625 + worley( p, 16.0 ) * 0.25 + worley( p, 32.0 ) * 0.125;
  float weather = clamp( ( perlin( p, 2.0 ) * 0.65 + perlin( p, 4.0 ) * 0.35 ) * 1.1 + 0.5, 0.0, 1.0 );
  gl_FragColor = vec4( shape, detail, weather, 1.0 );
}`,
  sP = `
precision highp sampler3D;
uniform sampler3D tNoise;
uniform float uCoverage;
uniform float uCloudTime;
// accumulated wind drift, integrated on the CPU: multiplying the wind by the elapsed time made
// every wind change slide the whole field by (change × session length) — the deck "reloaded"
uniform vec2 uCloudOffset;
const float CB = ${Yp}.0;
const float CT = ${jp}.0;
float fxRemap( float v, float a, float b, float c, float d ) { return c + ( v - a ) / ( b - a ) * ( d - c ); }
float cloudDensity( vec3 p, bool detailed ) {
  float h = ( p.y - CB ) / ( CT - CB );
  if ( h <= 0.0 || h >= 1.0 ) return 0.0;
  vec3 q = p + vec3( uCloudOffset.x, 0.0, uCloudOffset.y );
  float weather = textureLod( tNoise, vec3( q.x * 0.00016, 0.37, q.z * 0.00016 ), 0.0 ).b;
  float cov = clamp( uCoverage + ( weather - 0.5 ) * 0.75, 0.0, 1.0 );
  if ( cov <= 0.01 ) return 0.0;
  float base = textureLod( tNoise, q * vec3( 1.0 / 820.0, 1.0 / 480.0, 1.0 / 820.0 ), 0.0 ).r;
  // cumulus profile: a flat, fairly sharp base and a rounded, tapering top
  float profile = smoothstep( 0.0, 0.1, h ) * ( 1.0 - smoothstep( 0.45 - cov * 0.25, 1.0, h ) );
  float d = fxRemap( base * profile, 1.0 - cov, 1.0, 0.0, 1.0 );
  if ( d <= 0.0 ) return 0.0;
  if ( detailed ) {
    // erode the edges with fine billows; wispier at the bottom, puffier at the top
    float detail = textureLod( tNoise, q * ( 1.0 / 120.0 ) + vec3( 0.0, uCloudTime * 0.004, 0.0 ), 0.0 ).g;
    d = fxRemap( d, mix( detail, 1.0 - detail, h ) * 0.5, 1.0, 0.0, 1.0 );
  }
  // real cumulus have dense cores and fairly crisp edges, not a long soft ramp
  return clamp( d * 3.6, 0.0, 1.0 );
}
`,
  xse = `
${rh}
${sP}
uniform sampler2D tSkyLut;
uniform sampler2D tHistory;
uniform mat4 uInvProj;
uniform mat4 uCamWorld;
uniform mat4 uPrevViewProj;
uniform vec3 uCamPos;
uniform vec3 uLightDir;
uniform vec3 uLightColor;
uniform float uSteps;
uniform float uFrame;
uniform float uHistoryWeight;
uniform float uSigma;
uniform float uAmbient;
varying vec2 vUv;

void main() {
  vec4 v = uInvProj * vec4( vUv * 2.0 - 1.0, 1.0, 1.0 );
  vec3 rd = normalize( mat3( uCamWorld ) * ( v.xyz / v.w ) );
  vec3 ro = uCamPos;
  vec4 result = vec4( 0.0, 0.0, 0.0, 1.0 );
  float t0 = 0.0, t1 = -1.0;
  if ( abs( rd.y ) < 1e-4 ) {
    if ( ro.y > CB && ro.y < CT ) t1 = 3000.0;
  } else {
    float ta = ( CB - ro.y ) / rd.y, tb = ( CT - ro.y ) / rd.y;
    t0 = max( min( ta, tb ), 0.0 );
    t1 = max( ta, tb );
  }
  t1 = min( t1, t0 + 1800.0 );
  float tFirst = -1.0;
  if ( t1 > t0 && t0 < 7000.0 ) {
    float ds = ( t1 - t0 ) / uSteps;
    float t = t0 + ds * fxIgn( gl_FragCoord.xy + uFrame * 5.588 );
    float mu = dot( rd, uLightDir );
    vec3 ambTop = fxSky( tSkyLut, vec3( 0.0, 1.0, 0.0 ) );
    vec3 ambLow = fxSky( tSkyLut, normalize( vec3( rd.x, 0.06, rd.z ) ) );
    float T = 1.0;
    vec3 S = vec3( 0.0 );
    for ( int i = 0; i < 64; i++ ) {
      if ( float( i ) >= uSteps || T < 0.012 ) break;
      vec3 p = ro + rd * t;
      float d = cloudDensity( p, true );
      if ( d > 0.003 ) {
        if ( tFirst < 0.0 ) tFirst = t;
        // optical depth towards the light, at growing distances
        float od = 0.0;
        float lt = 0.0;
        for ( int j = 0; j < 5; j++ ) {
          float step = 5.0 * pow( 1.9, float( j ) );
          lt += step;
          od += cloudDensity( p + uLightDir * ( lt - step * 0.5 ), j < 2 ) * step;
        }
        od *= uSigma;
        // multiple scattering as octaves (Wrenninge): each bounce is dimmer, travels further
        // through the cloud and is less forward-peaked — this is what makes the interior glow
        vec3 sun = vec3( 0.0 );
        float a = 1.0, b = 1.0, c = 1.0;
        for ( int k = 0; k < 3; k++ ) {
          float phase = mix( fxHG( mu, 0.72 * c ), fxHG( mu, -0.22 * c ), 0.3 );
          sun += a * exp( -od * b ) * phase;
          a *= 0.38; b *= 0.5; c *= 0.5;
        }
        // powder: thin edges facing the viewer lack in-scattering and look darker
        float powder = 1.0 - exp( -d * uSigma * 18.0 );
        float h = clamp( ( p.y - CB ) / ( CT - CB ), 0.0, 1.0 );
        // uLightColor is the game's sun (~1.2 at noon); in the sky LUT's units the same sun has
        // an irradiance of ~28, which is what makes a sunlit cloud far brighter than blue sky
        vec3 light = uLightColor * sun * 22.0 * mix( 0.6, 1.0, powder ) + mix( ambLow * 0.6, ambTop, h ) * uAmbient;
        float sigma = d * uSigma;
        float tr = exp( -sigma * ds );
        S += T * light * ( 1.0 - tr );
        T *= tr;
      }
      t += ds;
    }
    // aerial perspective: far clouds melt into the sky near the horizon
    float tc = tFirst < 0.0 ? t0 : tFirst;
    float fade = exp( -max( tc - 600.0, 0.0 ) * 0.00042 );
    vec3 sky = fxSky( tSkyLut, rd );
    S = mix( sky * ( 1.0 - T ), S, fade );
    result = vec4( S, T );
  }
  // Accumulating over frames lets a handful of jittered steps converge to a smooth image. The
  // history is reprojected through the point the ray actually met the cloud, so it stays put when
  // flying close over (or under) the deck; clear-sky pixels are at infinity and use the direction.
  vec4 prev = tFirst > 0.0 ? uPrevViewProj * vec4( ro + rd * tFirst, 1.0 ) : uPrevViewProj * vec4( rd, 0.0 );
  vec2 puv = prev.xy / prev.w * 0.5 + 0.5;
  if ( uHistoryWeight > 0.0 && prev.w > 0.0 && all( greaterThan( puv, vec2( 0.0 ) ) ) && all( lessThan( puv, vec2( 1.0 ) ) ) ) {
    result = mix( result, textureLod( tHistory, puv, 0.0 ), uHistoryWeight );
  }
  float T = result.a;
  gl_FragColor = vec4( fxSafe( result.rgb ), T >= 0.0 && T <= 1.0 ? T : 1.0 );
}`,
  Tse = `
${sP}
uniform vec2 uCenter;
uniform float uExtent;
uniform float uSigma;
varying vec2 vUv;
void main() {
  vec2 xz = uCenter + ( vUv - 0.5 ) * uExtent;
  float od = 0.0;
  for ( int k = 0; k < 4; k++ ) {
    float y = mix( CB, CT, ( float( k ) + 0.5 ) / 4.0 );
    od += cloudDensity( vec3( xz.x, y, xz.y ), false );
  }
  od *= ( CT - CB ) / 4.0 * uSigma;
  // forward scattering lets a good deal of light through even a thick cloud
  gl_FragColor = vec4( mix( exp( -od * 0.55 ), 1.0, 0.12 ), 0.0, 0.0, 1.0 );
}`,
  Ase = `
${rh}
${V4}
uniform mat4 uProj;
uniform vec2 uTexel;
uniform float uRadius;
uniform float uSamples;
uniform vec3 uKernel[16];
varying vec2 vUv;
void main() {
  float d = textureLod( tDepth, vUv, 0.0 ).x;
  if ( d >= 0.99999 ) { gl_FragColor = vec4( 1.0 ); return; }
  vec3 P = fxViewPosAt( vUv );
  vec3 N = fxViewNormal( vUv );
  // 4x4 rotation pattern, removed exactly by the 4x4 blur that follows
  vec2 cell = mod( floor( gl_FragCoord.xy ), 4.0 );
  float ang = ( cell.x * 4.0 + cell.y ) * ( PI * 2.0 / 16.0 ) + 0.37;
  vec3 rnd = vec3( cos( ang ), sin( ang ), 0.0 );
  vec3 T = normalize( rnd - N * dot( rnd, N ) );
  mat3 tbn = mat3( T, cross( N, T ), N );
  float occ = 0.0;
  for ( int i = 0; i < 16; i++ ) {
    if ( float( i ) >= uSamples ) break;
    vec3 s = P + tbn * uKernel[ i ] * uRadius;
    vec4 o = uProj * vec4( s, 1.0 );
    vec2 suv = o.xy / o.w * 0.5 + 0.5;
    vec3 Q = fxViewPosAt( suv );
    float sz = Q.z;
    // occluders far in front of the point (a leaf in front of a gap in the canopy) are not
    // what occludes it; only nearby geometry counts
    float range = smoothstep( 0.0, 1.0, uRadius * 0.5 / abs( P.z - sz ) );
    // Only geometry rising above P's own tangent plane can occlude it. A wall or floor seen
    // edge-on spans a long depth range per pixel, so samples hugging the surface land "behind"
    // the depth of their own plane: the surface shadowed itself in the 4×4 rotation pattern,
    // which the depth-aware blur could not average out along the receding axis — fine
    // streaks running down long walls and across floors.
    vec3 dq = Q - P;
    float rise = dot( dq, N ) / max( length( dq ), 1e-4 );
    occ += ( sz >= s.z + 0.03 ? 1.0 : 0.0 ) * range * smoothstep( 0.06, 0.2, rise );
  }
  float ao = max( 1.0 - occ / uSamples, 0.3 );
  ao = mix( ao, 1.0, smoothstep( 45.0, 110.0, -P.z ) );
  gl_FragColor = vec4( ao, 0.0, 0.0, 1.0 );
}`,
  _se = `
${V4}
uniform sampler2D tAO;
uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  vec3 P0 = fxViewPosAt( vUv );
  float z0 = P0.z;
  // Weight by distance from the centre's plane, not by raw depth: across a surface seen
  // edge-on depth changes fast from texel to texel although it is one plane, and a depth test
  // left the noise pattern unblurred along it.
  vec3 N0 = fxViewNormal( vUv );
  float sum = 0.0, wsum = 0.0;
  for ( int x = -2; x < 2; x++ ) for ( int y = -2; y < 2; y++ ) {
    // whole texels: the AO target is point-sampled, and half-texel offsets land on texel
    // corners where the rounding can read one cell twice and skip another of the 4×4 pattern
    vec2 uv = vUv + vec2( float( x ), float( y ) ) * uTexel;
    vec3 Pi = fxViewPosAt( uv );
    float w = 1.0 / ( 0.0001 + abs( dot( Pi - P0, N0 ) ) / max( 0.05 * abs( z0 ), 0.02 ) );
    w = min( w, 1.0 );
    sum += textureLod( tAO, uv, 0.0 ).r * w;
    wsum += w;
  }
  gl_FragColor = vec4( sum / max( wsum, 1e-4 ), 0.0, 0.0, 1.0 );
}`,
  Rse = `
${rh}
uniform sampler2D tDepth;
uniform sampler2D tClouds;
uniform vec2 uLightUv;
uniform float uSamples;
uniform float uDensity;
uniform float uDecay;
uniform float uFrame;
uniform float uUseClouds;
uniform float uUnderwater;
uniform float uWaterY;
uniform mat4 uInvProj;
uniform mat4 uCamWorld;
varying vec2 vUv;
// Under water the light comes in through the surface, not the sky: the pixels where the view
// meets the water surface from below are the source the shafts stream from.
float lightSource( vec2 p ) {
  float d = textureLod( tDepth, p, 0.0 ).x;
  if ( uUnderwater < 0.5 ) return step( 0.99999, d );
  vec4 v = uInvProj * vec4( p * 2.0 - 1.0, d * 2.0 - 1.0, 1.0 );
  vec3 w = ( uCamWorld * vec4( v.xyz / v.w, 1.0 ) ).xyz;
  return d >= 0.99999 ? 1.0 : 1.0 - smoothstep( 0.35, 0.9, abs( w.y - uWaterY ) );
}
void main() {
  vec2 delta = ( vUv - uLightUv ) * uDensity / uSamples;
  vec2 coord = vUv - delta * fxIgn( gl_FragCoord.xy + uFrame * 7.13 );
  float illum = 1.0, acc = 0.0;
  for ( int i = 0; i < 64; i++ ) {
    if ( float( i ) >= uSamples ) break;
    coord -= delta;
    if ( coord.x < 0.0 || coord.y < 0.0 || coord.x > 1.0 || coord.y > 1.0 ) break;
    float s = lightSource( coord );
    if ( uUseClouds > 0.5 ) s *= textureLod( tClouds, coord, 0.0 ).a;
    acc += s * illum;
    illum *= uDecay;
  }
  gl_FragColor = vec4( fxSafe( acc / uSamples ), 0.0, 0.0, 1.0 );
}`,
  Cse = `
${rh}
${V4}
uniform sampler2D tScene;
uniform sampler2D tAO;
uniform sampler2D tRays;
uniform sampler2D tClouds;
uniform sampler2D tSkyLut;
uniform vec3 uCamPos;
uniform vec2 uHalfTexel;
uniform float uAoStrength;
uniform float uUseClouds;
uniform float uFogNear;
uniform float uFogFar;
uniform vec3 uFogColor;
uniform float uFogOverride;
uniform float uSkyProbe;
uniform float uHaze;
uniform vec3 uLightDir;
uniform vec3 uLightColor;
uniform vec3 uRayColor;
uniform float uDay;
uniform float uLightning;
uniform float uUnderwater;
uniform vec3 uWaterSigma;
uniform vec3 uWaterScatter;
uniform float uTime;
varying vec2 vUv;

float aoAt( vec2 uv, float z ) {
  // joint-bilateral upsample: of the four half-res texels, trust the ones on the same surface
  vec2 hp = uv / uHalfTexel - 0.5;
  vec2 base = ( floor( hp ) + 0.5 ) * uHalfTexel;
  vec2 f = fract( hp );
  float s = 0.0, w = 0.0;
  for ( int i = 0; i < 2; i++ ) for ( int j = 0; j < 2; j++ ) {
    vec2 c = base + vec2( float( i ), float( j ) ) * uHalfTexel;
    float zc = fxViewPosAt( c ).z;
    float bw = ( i == 0 ? 1.0 - f.x : f.x ) * ( j == 0 ? 1.0 - f.y : f.y );
    float dw = 1.0 / ( 0.001 + abs( zc - z ) / max( abs( z ) * 0.04, 0.02 ) );
    float ww = bw * min( dw, 1.0 ) + 1e-5;
    s += textureLod( tAO, c, 0.0 ).r * ww;
    w += ww;
  }
  return s / w;
}

void main() {
  // under water the image wavers slightly, as if seen through moving water
  vec2 suv = vUv;
  if ( uUnderwater > 0.0 ) {
    suv += vec2( sin( vUv.y * 38.0 + uTime * 2.1 ), cos( vUv.x * 31.0 + uTime * 1.7 ) ) * 0.0014 * uUnderwater;
    suv = clamp( suv, vec2( 0.0 ), vec2( 1.0 ) );
  }
  vec3 c = fxSafe( textureLod( tScene, suv, 0.0 ).rgb );
  float d = textureLod( tDepth, vUv, 0.0 ).x;
  bool sky = d >= 0.99999;
  vec3 rd = fxWorldDir( vUv );
  float dist = 1e6;
  if ( !sky ) {
    vec3 vp = fxViewPos( vUv, d );
    dist = length( vp );
    c *= mix( 1.0, aoAt( vUv, vp.z ), uAoStrength );
    // aerial perspective: exponential height haze, thickest in the valleys, lit by the sky
    // behind it and glowing towards the sun
    float b = 1.0 / 30.0;
    float k = uHaze * exp( -b * ( uCamPos.y - 40.0 ) );
    float od = abs( rd.y ) < 1e-4 ? k * dist : k * ( 1.0 - exp( -dist * rd.y * b ) ) / ( rd.y * b );
    float haze = ( 1.0 - exp( -max( od, 0.0 ) ) ) * ( 1.0 - uUnderwater );
    vec3 hazeCol = fxSky( tSkyLut, normalize( vec3( rd.x, max( rd.y, 0.04 ), rd.z ) ) );
    hazeCol += uLightColor * fxHG( dot( rd, uLightDir ), 0.7 ) * 0.25 * uDay;
    c = mix( c, hazeCol * uSkyProbe, haze * mix( 1.0, 0.0, uFogOverride ) );
    // render-distance fog, now tinted by the real sky in that direction so the far terrain
    // dissolves seamlessly into the horizon behind it
    // radial, unlike three's view-depth fog: the loaded area is round, so this hides its edge
    // at the sides of a wide field of view too
    // (under water the medium below takes over: the render-distance fog would only grey it)
    float fogF = smoothstep( uFogNear, uFogFar, dist ) * ( 1.0 - uUnderwater );
    // (the scene fog colour already carries the cave darkening, the sky does not)
    vec3 fogCol = mix( fxSky( tSkyLut, rd ) * uSkyProbe, uFogColor, uFogOverride );
    c = mix( c, fogCol, fogF );
  }
  // Over the open sky the clouds were already laid down in the world pass, behind every
  // translucent object (smoke, explosions, tracers) — compositing them here again would paint
  // the deck over those. Here they only go over terrain that lies beyond where the ray enters
  // the deck: a mountain top from below, or the ground seen from above the clouds.
  if ( uUseClouds > 0.5 && !sky ) {
    float entry = -1.0;
    if ( uCamPos.y < ${Yp}.0 ) { if ( rd.y > 1e-4 ) entry = ( ${Yp}.0 - uCamPos.y ) / rd.y; }
    else if ( uCamPos.y > ${jp}.0 ) { if ( rd.y < -1e-4 ) entry = ( ${jp}.0 - uCamPos.y ) / rd.y; }
    else entry = 0.0;
    if ( entry >= 0.0 && dist > entry ) {
      vec4 cl = textureLod( tClouds, vUv, 0.0 );
      // The cloud texture holds the whole column along the ray, not just the part in front of
      // this surface. Inside the deck that would bury the cockpit, its displays and anything
      // within arm's reach under a full cloud's worth of fog; only as much cloud as there is
      // air between the eye and the surface belongs in front of it.
      float amount = 1.0 - exp( -( dist - entry ) / 45.0 );
      c = mix( c, c * cl.a + cl.rgb, amount );
    }
  }
  // Under water: per-channel Beer-Lambert extinction along the view, plus the light the water
  // scatters back towards the eye — brighter looking up towards the surface, darker below.
  // Red goes first, so distant things fade through green-blue into the water colour.
  if ( uUnderwater > 0.0 ) {
    float wd = sky ? 90.0 : dist;
    vec3 T = exp( -uWaterSigma * wd );
    vec3 scatter = uWaterScatter * mix( 0.45, 1.6, smoothstep( -0.6, 0.9, rd.y ) );
    c = mix( c, c * T + scatter * ( 1.0 - T ), uUnderwater );
  }
  // lightning brightens the whole sky for an instant, evenly across clouds and clear sky so the
  // deck's far edge does not show (the clouds add their own glow from inside on top)
  if ( sky ) c += vec3( 0.55, 0.6, 0.75 ) * uLightning * 0.3;
  // shafts are forward-scattered light: strongest looking towards the source, and only as
  // much as there is air between the eye and whatever is behind them
  float rays = textureLod( tRays, vUv, 0.0 ).r * ( 0.15 + 0.85 * pow( max( dot( rd, uLightDir ), 0.0 ), 5.0 ) );
  // (under water the shafts are dense: the water scatters far more than air)
  float air = 1.0 - exp( -dist * mix( 0.011, 0.09, uUnderwater ) );
  c += uRayColor * rays * ( sky ? 0.35 : air * 0.7 );
  gl_FragColor = vec4( fxSafe( c ), 1.0 );
}`,
  kse = `
${rh}
uniform sampler2D tHdr;
varying vec2 vUv;
void main() {
  // centre-weighted metering: what you look at matters more than the screen edges
  vec2 o = vUv - 0.5;
  float w = exp( -dot( o, o ) * 5.0 );
  float l = 0.0;
  for ( int i = 0; i < 2; i++ ) for ( int j = 0; j < 2; j++ )
    l += log( max( fxLuma( textureLod( tHdr, vUv + ( vec2( float( i ), float( j ) ) - 0.5 ) / 128.0, 0.0 ).rgb ), 1e-4 ) );
  gl_FragColor = vec4( l * 0.25 * w, w, 0.0, 1.0 );
}`,
  Lse = `
uniform sampler2D tLum;
uniform sampler2D tPrev;
uniform float uDt;
uniform float uReset;
varying vec2 vUv;
void main() {
  vec2 m = textureLod( tLum, vec2( 0.5 ), 12.0 ).rg;
  float target = m.x / max( m.y, 1e-5 );
  float prev = textureLod( tPrev, vec2( 0.5 ), 0.0 ).r;
  // eyes open up to the light quickly and adjust to darkness slowly
  float speed = target > prev ? 2.4 : 1.1;
  bool targetOk = target > -30.0 && target < 30.0, prevOk = prev > -30.0 && prev < 30.0;
  if ( !targetOk ) target = prevOk ? prev : -1.2;
  float next = uReset > 0.5 || !prevOk ? target : prev + ( target - prev ) * ( 1.0 - exp( -uDt * speed ) );
  gl_FragColor = vec4( next, 0.0, 0.0, 1.0 );
}`,
  oP = `
uniform sampler2D tAdapt;
uniform float uExposure;
uniform float uKey;
${r4}
float fxExposure() { return uExposure * fxAdaptGain( tAdapt, uKey ); }
`,
  Ise = `
${rh}
${oP}
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uPrefilter;
uniform float uThreshold;
varying vec2 vUv;
vec3 tap( vec2 o ) { return fxSafe( textureLod( tSrc, vUv + o * uTexel, 0.0 ).rgb ); }
vec3 karis( vec3 a, vec3 b, vec3 c, vec3 d ) {
  vec3 m = ( a + b + c + d ) * 0.25;
  return m / ( 1.0 + fxLuma( m ) );
}
void main() {
  vec3 a = tap( vec2( -2, 2 ) ), b = tap( vec2( 0, 2 ) ), c = tap( vec2( 2, 2 ) );
  vec3 d = tap( vec2( -2, 0 ) ), e = tap( vec2( 0, 0 ) ), f = tap( vec2( 2, 0 ) );
  vec3 g = tap( vec2( -2, -2 ) ), h = tap( vec2( 0, -2 ) ), i = tap( vec2( 2, -2 ) );
  vec3 j = tap( vec2( -1, 1 ) ), k = tap( vec2( 1, 1 ) ), l = tap( vec2( -1, -1 ) ), m = tap( vec2( 1, -1 ) );
  vec3 col;
  if ( uPrefilter > 0.5 ) {
    // Karis average on the first level: a single sparkling texel cannot flicker the whole bloom
    col = karis( j, k, l, m ) * 0.5 + ( karis( a, b, d, e ) + karis( b, c, e, f ) + karis( d, e, g, h ) + karis( e, f, h, i ) ) * 0.125;
    col /= max( 1.0 - fxLuma( col ), 0.02 );
    col *= fxExposure();
    float br = max( col.r, max( col.g, col.b ) );
    float knee = uThreshold * 0.5;
    float soft = clamp( br - uThreshold + knee, 0.0, 2.0 * knee );
    soft = soft * soft / ( 4.0 * knee + 1e-4 );
    col *= max( soft, br - uThreshold ) / max( br, 1e-4 );
    // The sun's disc is two orders of magnitude brighter than anything else; uncapped, its
    // bloom alone lays a milky veil over half the frame whenever it is in view.
    col *= min( 1.0, 6.0 / max( fxLuma( col ), 1e-4 ) );
  } else {
    col = e * 0.125 + ( a + c + g + i ) * 0.03125 + ( b + d + f + h ) * 0.0625 + ( j + k + l + m ) * 0.125;
  }
  gl_FragColor = vec4( max( col, 0.0 ), 1.0 );
}`,
  Pse = `
uniform sampler2D tSrc;
uniform vec2 uTexel;
uniform float uRadius;
varying vec2 vUv;
void main() {
  vec2 t = uTexel * uRadius;
  vec3 s = textureLod( tSrc, vUv, 0.0 ).rgb * 4.0;
  s += ( textureLod( tSrc, vUv + vec2( -t.x, 0.0 ), 0.0 ).rgb + textureLod( tSrc, vUv + vec2( t.x, 0.0 ), 0.0 ).rgb
       + textureLod( tSrc, vUv + vec2( 0.0, -t.y ), 0.0 ).rgb + textureLod( tSrc, vUv + vec2( 0.0, t.y ), 0.0 ).rgb ) * 2.0;
  s += textureLod( tSrc, vUv + vec2( -t.x, -t.y ), 0.0 ).rgb + textureLod( tSrc, vUv + vec2( t.x, -t.y ), 0.0 ).rgb
     + textureLod( tSrc, vUv + vec2( -t.x, t.y ), 0.0 ).rgb + textureLod( tSrc, vUv + vec2( t.x, t.y ), 0.0 ).rgb;
  gl_FragColor = vec4( s / 16.0, 1.0 );
}`,
  Ose = `
${rh}
${oP}
uniform sampler2D tHdr;
uniform sampler2D tBloom;
uniform sampler2D tDepth;
uniform sampler2D tClouds;
uniform vec2 uRes;
uniform float uBloom;
uniform float uVignette;
uniform float uGrain;
uniform float uAberration;
uniform float uTime;
uniform float uFlare;
uniform float uUseClouds;
uniform vec2 uLightUv;
uniform vec3 uFlareColor;
uniform float uSaturation;
uniform float uContrast;
uniform vec3 uShadowTint;
uniform vec3 uHighlightTint;
varying vec2 vUv;

vec3 rrtOdt( vec3 v ) {
  vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
  vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
  return a / b;
}
// the same ACES fit the classic renderer uses, so the pack changes the image, not its exposure
vec3 aces( vec3 color ) {
  const mat3 inM = mat3( vec3( 0.59719, 0.07600, 0.02840 ), vec3( 0.35458, 0.90834, 0.13383 ), vec3( 0.04823, 0.01566, 0.83777 ) );
  const mat3 outM = mat3( vec3( 1.60475, -0.10208, -0.00327 ), vec3( -0.53108, 1.10813, -0.07276 ), vec3( -0.07367, -0.00605, 1.07602 ) );
  color = inM * ( color / 0.6 );
  color = rrtOdt( color );
  return clamp( outM * color, 0.0, 1.0 );
}
vec3 toSrgb( vec3 c ) {
  return mix( c * 12.92, 1.055 * pow( c, vec3( 1.0 / 2.4 ) ) - 0.055, step( vec3( 0.0031308 ), c ) );
}

vec3 lensFlare( vec2 uv ) {
  // how much of the light source is actually visible: sky pixels around it, minus clouds
  float vis = 0.0;
  for ( int i = 0; i < 8; i++ ) {
    float a = float( i ) * 0.785398;
    vec2 p = uLightUv + vec2( cos( a ), sin( a ) ) * vec2( 0.012 * uRes.y / uRes.x, 0.012 );
    if ( p.x < 0.0 || p.y < 0.0 || p.x > 1.0 || p.y > 1.0 ) continue;
    float s = step( 0.99999, textureLod( tDepth, p, 0.0 ).x );
    if ( uUseClouds > 0.5 ) s *= textureLod( tClouds, p, 0.0 ).a;
    vis += s;
  }
  vis /= 8.0;
  if ( vis <= 0.0 ) return vec3( 0.0 );
  vec2 aspect = vec2( uRes.x / uRes.y, 1.0 );
  vec2 axis = vec2( 0.5 ) - uLightUv;
  vec3 acc = vec3( 0.0 );
  const float gp[ 5 ] = float[ 5 ]( 0.35, 0.7, 1.15, 1.45, 1.9 );
  const float gs[ 5 ] = float[ 5 ]( 0.035, 0.08, 0.03, 0.12, 0.06 );
  const vec3 gc[ 5 ] = vec3[ 5 ]( vec3( 1.0, 0.7, 0.35 ), vec3( 0.35, 0.8, 0.55 ), vec3( 0.9, 0.5, 1.0 ), vec3( 0.3, 0.5, 1.0 ), vec3( 1.0, 0.85, 0.5 ) );
  for ( int i = 0; i < 5; i++ ) {
    vec2 cen = uLightUv + axis * gp[ i ];
    float dd = length( ( uv - cen ) * aspect );
    acc += gc[ i ] * ( 1.0 - smoothstep( gs[ i ] * 0.55, gs[ i ], dd ) ) * 0.05;
  }
  float ring = length( ( uv - uLightUv ) * aspect );
  acc += vec3( 1.0, 0.85, 0.6 ) * ( 1.0 - smoothstep( 0.0, 0.025, abs( ring - 0.33 ) ) ) * 0.025;
  // streak: a faint horizontal smear through the source, like light catching the lens coating
  vec2 sd = ( uv - uLightUv ) * aspect;
  acc += vec3( 0.75, 0.85, 1.0 ) * exp( -abs( sd.y ) * 220.0 ) * exp( -abs( sd.x ) * 3.5 ) * 0.22;
  return acc * uFlareColor * vis;
}

void main() {
  vec3 c;
  if ( uAberration > 0.0 ) {
    // lens fringing only towards the frame edges, never around what you are aiming at
    vec2 off = ( vUv - 0.5 ) * uAberration * smoothstep( 0.3, 0.75, length( vUv - 0.5 ) );
    c = vec3( textureLod( tHdr, vUv + off, 0.0 ).r, textureLod( tHdr, vUv, 0.0 ).g, textureLod( tHdr, vUv - off, 0.0 ).b );
  } else {
    c = textureLod( tHdr, vUv, 0.0 ).rgb;
  }
  float exposure = fxExposure();
  c *= exposure;
  c += textureLod( tBloom, vUv, 0.0 ).rgb * uBloom;
  if ( uFlare > 0.0 ) c += lensFlare( vUv ) * uFlare * exposure;
  c = aces( c );
  // grade: gentle saturation, cool shadows / warm highlights, a touch of contrast
  float l = fxLuma( c );
  c = max( mix( vec3( l ), c, uSaturation ), 0.0 );
  c *= mix( uShadowTint, uHighlightTint, smoothstep( 0.05, 0.75, l ) );
  vec2 v = ( vUv - 0.5 ) * vec2( uRes.x / uRes.y, 1.0 );
  c *= 1.0 - uVignette * smoothstep( 0.35, 1.05, length( v ) );
  vec3 s = toSrgb( clamp( c, 0.0, 1.0 ) );
  s = clamp( ( s - 0.5 ) * uContrast + 0.5, 0.0, 1.0 );
  float n = fxIgn( gl_FragCoord.xy + fract( uTime * 7.31 ) * 97.0 );
  s += ( n - 0.5 ) * ( uGrain + 1.0 / 255.0 );
  gl_FragColor = vec4( s, 1.0 );
}`;
