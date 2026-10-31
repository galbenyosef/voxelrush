// index-BeUlFSPp 228 — depthwrite
// Lines 118643-118861 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const Nm = `
  float fxHash(vec3 p) { return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }
  float fxNoise(vec3 p) {
    vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(fxHash(i), fxHash(i + vec3(1,0,0)), f.x), mix(fxHash(i + vec3(0,1,0)), fxHash(i + vec3(1,1,0)), f.x), f.y),
      mix(mix(fxHash(i + vec3(0,0,1)), fxHash(i + vec3(1,0,1)), f.x), mix(fxHash(i + vec3(0,1,1)), fxHash(i + vec3(1,1,1)), f.x), f.y), f.z);
  }
  float fxFbm(vec3 p) { return fxNoise(p) * .55 + fxNoise(p * 2.03 + 7.1) * .3 + fxNoise(p * 4.1 + 3.7) * .15; }
`,
  cle = `
  vec3 fxFire(float t) {
    vec3 c = mix(vec3(.6, .12, .03), vec3(.95, .26, .04), smoothstep(.2, .4, t));
    c = mix(c, vec3(1.0, .58, .1), smoothstep(.3, .62, t));
    c = mix(c, vec3(1.0, .88, .5), smoothstep(.58, .92, t));
    return mix(c, vec3(1.0, .99, .93), smoothstep(.92, 1.25, t));
  }
`;
function hle() {
  return new Gi({
    transparent: !0,
    depthWrite: !1,
    fog: !0,
    uniforms: Rd.merge([
      It.fog,
      {
        uAge: { value: 0 },
        uTime: { value: 0 },
        uSeed: { value: 0 },
        uHeat: { value: 1 },
        uSmoke: { value: new Ge(3355443) },
        uOpacity: { value: 1 },
        uLump: { value: 1 },
        uAmbient: { value: 1 },
        uCool: { value: 0.7 },
        uFogAmount: { value: 1 },
      },
    ]),
    vertexShader: `
      uniform float uTime, uSeed, uLump;
      varying vec3 vLocal, vNormalW, vEye;
      varying float vNoise;
      #include <fog_pars_vertex>
      ${Nm}
      void main() {
        vLocal = position;
        float n = fxFbm(position * 1.7 + vec3(uSeed, uSeed * .7 - uTime * .55, uSeed * 1.3));
        vNoise = n;
        vec3 displaced = position * (1.0 + (n - .5) * .62 * uLump);
        vec4 world = modelMatrix * vec4(displaced, 1.0);
        vNormalW = normalize(mat3(modelMatrix) * normal);
        vEye = cameraPosition - world.xyz;
        vec4 mvPosition = viewMatrix * world;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: `
      uniform float uAge, uTime, uSeed, uHeat, uOpacity, uAmbient, uCool, uFogAmount;
      uniform vec3 uSmoke;
      varying vec3 vLocal, vNormalW, vEye;
      varying float vNoise;
      #include <fog_pars_fragment>
      ${Nm}
      ${cle}
      void main() {
        vec3 nrm = normalize(vNormalW);
        float facing = max(0.0, dot(nrm, normalize(vEye)));
        float detail = fxNoise(vLocal * 4.3 + vec3(uSeed * 3.1, -uTime * .9, uSeed));
        // heat: strongest in the core facing you, cooling with age and in the noisy crevices
        float cool = 1.0 - smoothstep(0.0, uCool, uAge);
        float t = uHeat * cool * (.42 + vNoise * .62 + detail * .26) * (.45 + .55 * facing);
        // below ~.3 the gas is no longer glowing: it is smoke, never a black "cold fire"
        float fire = smoothstep(.3, .58, t);
        float sun = .5 + .5 * dot(nrm, normalize(vec3(.35, 1.0, .25)));
        // scene-referred: the terrain is lit well above 1.0 before ACES, so the smoke is too
        vec3 smoke = uSmoke * (.28 + .95 * sun) * (.72 + .5 * detail) * uAmbient * 1.75;
        // the underside of fresh smoke glows with the fire below it
        smoke += vec3(.55, .2, .05) * cool * uHeat * max(0.0, -nrm.y) * .5;
        vec3 rgb = mix(smoke, fxFire(t) * (1.6 + 2.2 * smoothstep(.5, 1.2, t)), fire);
        float edge = smoothstep(.0, .5, facing + (detail - .5) * .45);
        float alpha = uOpacity * edge * (1.0 - smoothstep(.6, 1.0, uAge)) * mix(.78, 1.0, fire);
        if (alpha < .03) discard;
        gl_FragColor = vec4(rgb, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #ifdef USE_FOG
          // a towering cloud stays visible over the horizon: big billows take only part of the fog
          float fogF = pow(smoothstep(fogNear, fogFar, vFogDepth), 1.6) * uFogAmount;
          gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogF);
          gl_FragColor.a *= 1.0 - fogF * fogF * .95;
        #endif
      }`,
  });
}
function dle() {
  return new Gi({
    transparent: !0,
    depthWrite: !1,
    blending: rs,
    side: Mi,
    uniforms: {
      uOpacity: { value: 1 },
      uColor: { value: new Ge(14674431) },
      uSolid: { value: 0 },
      uTime: { value: 0 },
    },
    vertexShader: `
      varying vec3 vNormalW, vEye, vLocal;
      void main() {
        vLocal = position;
        vec4 world = modelMatrix * vec4(position, 1.0);
        vNormalW = normalize(mat3(modelMatrix) * normal);
        vEye = cameraPosition - world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }`,
    fragmentShader: `
      uniform float uOpacity, uSolid, uTime;
      uniform vec3 uColor;
      varying vec3 vNormalW, vEye, vLocal;
      ${Nm}
      void main() {
        float facing = abs(dot(normalize(vNormalW), normalize(vEye)));
        float rim = pow(1.0 - facing, 5.0);
        float mist = fxFbm(vLocal * 3.0 + uTime * .4);
        // uSolid 0: a thin pressure front, all rim; 1: a milky condensation dome
        float a = mix(rim * 1.6, (.35 + rim) * (.55 + mist * .7), uSolid) * uOpacity;
        if (a < .01) discard;
        gl_FragColor = vec4(uColor * a, a);
      }`,
  });
}
function ule() {
  return new Gi({
    transparent: !0,
    depthWrite: !1,
    side: Mi,
    fog: !0,
    uniforms: Rd.merge([
      It.fog,
      {
        uOpacity: { value: 1 },
        uColor: { value: new Ge(9076072) },
        uInner: { value: 0.7 },
        uSeed: { value: 0 },
        uAmbient: { value: 1 },
      },
    ]),
    vertexShader: `
      varying vec2 vUv;
      #include <fog_pars_vertex>
      void main() {
        vUv = uv;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,
    fragmentShader: `
      uniform float uOpacity, uInner, uSeed, uAmbient;
      uniform vec3 uColor;
      varying vec2 vUv;
      #include <fog_pars_fragment>
      ${Nm}
      void main() {
        vec2 p = vUv * 2.0 - 1.0;
        float d = length(p), ang = atan(p.y, p.x);
        float n = fxFbm(vec3(cos(ang) * 3.0, sin(ang) * 3.0, d * 4.0 + uSeed));
        float outer = 1.0 - smoothstep(.82 + n * .12, 1.0, d);
        float inner = smoothstep(uInner - .25, uInner + n * .15, d);
        float a = outer * inner * uOpacity * (.55 + n * .6);
        if (a < .02) discard;
        gl_FragColor = vec4(uColor * (.75 + n * .45) * uAmbient * 2.2, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
        #ifdef USE_FOG
          gl_FragColor.a *= 1.0 - fogFactor;
        #endif
      }`,
  });
}
function fle() {
  return new Gi({
    transparent: !0,
    depthWrite: !1,
    polygonOffset: !0,
    polygonOffsetFactor: -4,
    polygonOffsetUnits: -4,
    uniforms: {
      uOpacity: { value: 1 },
      uSeed: { value: 0 },
      uGlow: { value: 1 },
    },
    vertexShader:
      "varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
    fragmentShader: `
      uniform float uOpacity, uSeed, uGlow;
      varying vec2 vUv;
      ${Nm}
      void main() {
        vec2 p = vUv * 2.0 - 1.0;
        float d = length(p), ang = atan(p.y, p.x);
        float n = fxFbm(vec3(p * 3.5, uSeed));
        float spikes = fxNoise(vec3(cos(ang) * 4.0, sin(ang) * 4.0, uSeed + 9.0));
        float burn = 1.0 - smoothstep(.35 + spikes * .45, .55 + spikes * .5, d + (n - .5) * .3);
        float a = burn * uOpacity * (.6 + n * .4);
        if (a < .02) discard;
        // embers still glowing in the middle for the first seconds
        vec3 ember = vec3(1.0, .35, .05) * smoothstep(.55, .9, n) * (1.0 - smoothstep(.0, .45, d)) * uGlow;
        gl_FragColor = vec4(vec3(.05, .04, .035) + ember, a);
      }`,
  });
}
const ple = 72,
  wa = 1400,
  $i = new k(),
  ul = new k(),
  jg = new hi(),
  jC = new Rt(),
  XC = new k(0, 0, 1),
  ki = (s, e) => s + Math.random() * (e - s);
