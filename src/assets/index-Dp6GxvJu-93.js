// index-Dp6GxvJu 93 — userdata
// Lines 57404-57709 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class PL extends U8 {
  constructor(t, i, s, o = 0.025) {
    const a = [t, ...[...new Set(i)].filter((h) => h !== t)];
    let r = km.get(s);
    if (!r) {
      t.updateWorldMatrix(!0, !0);
      const h = new bt().copy(t.matrixWorld).invert(),
        d = a.map((p) => new bt().multiplyMatrices(h, p.matrixWorld).invert()),
        u = [];
      t.traverse((p) => {
        const m = p;
        if (!m.isMesh || !m.geometry || m.userData.lodSkip) return;
        for (let M = p; M && M !== t; M = M.parent)
          if (!M.visible || M.userData.lodSkip) return;
        const y = Array.isArray(m.material) ? m.material : [m.material];
        if (y.every((M) => M.transparent && M.opacity < 0.35)) return;
        const g = new bt().multiplyMatrices(h, m.matrixWorld),
          b = m,
          S = b.isInstancedMesh ? b.count : 1;
        for (let M = 0; M < S; M++) {
          const x = b.isInstancedMesh
              ? g
                  .clone()
                  .multiply(new bt().fromArray(b.instanceMatrix.array, M * 16))
              : g,
            T = (b.isInstancedMesh && m.userData.lodGeometry) || m.geometry,
            A = T.index ? T.toNonIndexed() : T.clone();
          if (
            (A.applyMatrix4(x),
            A.computeBoundingBox(),
            A.boundingBox.getSize(new k()).length() < o)
          ) {
            A.dispose();
            continue;
          }
          let _ = 0;
          for (let G = p; G && G !== t; G = G.parent) {
            const I = a.indexOf(G);
            if (I > 0) {
              _ = I;
              break;
            }
          }
          const C = A.getAttribute("position").count,
            R = new Float32Array(C * 3),
            L = new Uint16Array(C * 4),
            N = new Float32Array(C * 4),
            D = A.getAttribute("color"),
            H = A.groups.length
              ? A.groups
              : [{ start: 0, count: C, materialIndex: 0 }];
          for (const G of H) {
            const I = Array.isArray(m.material)
                ? y[G.materialIndex ?? 0]
                : y[0],
              O =
                (I == null ? void 0 : I.userData.lodColor) !== void 0
                  ? new ze(I.userData.lodColor)
                  : (
                      (I == null ? void 0 : I.color) ?? new ze(16777215)
                    ).clone();
            (I == null ? void 0 : I.userData.lodColor) === void 0 &&
              I != null &&
              I.map &&
              O.multiply(fK(I.map));
            for (let F = G.start; F < Math.min(C, G.start + G.count); F++)
              (O.toArray(R, F * 3),
                I != null &&
                  I.vertexColors &&
                  D &&
                  ((R[F * 3] *= D.getX(F)),
                  (R[F * 3 + 1] *= D.getY(F)),
                  (R[F * 3 + 2] *= D.getZ(F))));
          }
          for (let G = 0; G < C; G++) ((L[G * 4] = _), (N[G * 4] = 1));
          for (const G of Object.keys(A.attributes))
            G !== "position" && G !== "normal" && A.deleteAttribute(G);
          (A.hasAttribute("normal") || A.computeVertexNormals(),
            A.setAttribute("color", new oi(R, 3)),
            A.setAttribute("skinIndex", new oi(L, 4)),
            A.setAttribute("skinWeight", new oi(N, 4)),
            A.clearGroups(),
            u.push(A));
        }
      });
      const f = no(u, !1);
      for (const p of u) p.dispose();
      if (!f) throw new Error(`Empty LOD model: ${s}`);
      (f.computeBoundingSphere(),
        (r = { geometry: f, inverses: d, users: 0 }),
        km.set(s, r));
    }
    const l = new gi({ vertexColors: !0 });
    l.onBeforeCompile = (h) => {
      h.fragmentShader = h.fragmentShader.replace(
        "#include <emissivemap_fragment>",
        `#include <emissivemap_fragment>
#ifdef USE_COLOR
 totalEmissiveRadiance *= vColor;
#endif`,
      );
    };
    super(r.geometry, l);
    w(this, "rootInverse", new bt());
    w(this, "sources");
    w(this, "cacheKey");
    ((this.sourceRoot = t), r.users++, (this.sources = a), (this.cacheKey = s));
    const c = a.map(() => {
      const h = new F8();
      return ((h.matrixAutoUpdate = !1), this.add(h), h);
    });
    (this.bind(
      new mS(
        c,
        r.inverses.map((h) => h.clone()),
      ),
      new bt(),
    ),
      (this.boundingSphere = r.geometry.boundingSphere.clone()),
      (this.boundingSphere.radius = this.boundingSphere.radius * 1.25 + 0.5),
      this.sync());
  }
  sync() {
    (this.sourceRoot.updateWorldMatrix(!0, !1),
      this.rootInverse.copy(this.sourceRoot.matrixWorld).invert());
    for (let t = 0; t < this.sources.length; t++) {
      const i = this.sources[t];
      (i.updateWorldMatrix(!0, !1),
        this.skeleton.bones[t].matrix.multiplyMatrices(
          this.rootInverse,
          i.matrixWorld,
        ),
        (this.skeleton.bones[t].matrixWorldNeedsUpdate = !0));
    }
    (this.position.copy(this.sourceRoot.position),
      this.quaternion.copy(this.sourceRoot.quaternion),
      this.scale.copy(this.sourceRoot.scale));
  }
  dispose() {
    (this.skeleton.dispose(), this.material.dispose());
    const t = km.get(this.cacheKey);
    t && --t.users === 0 && (t.geometry.dispose(), km.delete(this.cacheKey));
  }
}
function Dg(n, e) {
  const t = Li.lights_fragment_begin.replace(
    "getDirectionalLightInfo( directionalLight, directLight );",
    `getDirectionalLightInfo( directionalLight, directLight );
 directLight.color *= ${e};`,
  );
  return n.replace("#include <lights_fragment_begin>", t).replace(
    "#include <lights_fragment_end>",
    `#include <lights_fragment_end>
 reflectedLight.indirectDiffuse *= ${e};
 reflectedLight.indirectSpecular *= ${e};`,
  );
}
const Vr = 0.15;
function pK(n, e, t = 1) {
  const i = (l) => Math.max(0, Math.min(1, l)),
    s = i(n),
    o = i(e),
    a = i(t),
    r = 1 - (1 - o) * a * 0.85;
  return Math.min(1, Math.pow(s, 1.2) * 0.82 * r + 0.055 * o * a);
}
function dr(n, e, t, i = 0) {
  const s = n.probeSkyOpen(e.x, e.y + i, e.z),
    o = Math.max(
      n.probeLight(e.x, e.y + i, e.z),
      n.probeLight(e.x, e.y + Math.min(i, 0.3), e.z) * 0.92,
    );
  let a = -1e4;
  const r = n.isWaterAt(e.x, e.y + 0.15, e.z) ? e.y + 0.15 : e.y + i;
  if (n.isWaterAt(e.x, r, e.z)) {
    let l = Math.floor(r);
    for (let c = 0; c < 64 && n.isWaterAt(e.x, l + 1.5, e.z); c++) l++;
    a = l + 0.875;
  }
  return { strength: pK(o, t, s), sky: s, waterY: a };
}
function h6(n) {
  const e = n;
  return e.color instanceof ze && e.emissive instanceof ze;
}
const d6 = new WeakMap(),
  u6 = new ze(1, 0.88, 0.62),
  f6 = new ze();
function ur(n, e) {
  const t = Math.max(0, Math.min(1, typeof e == "number" ? e : e.strength)),
    i = typeof e == "number" ? 1 : e.sky,
    s = new Set(),
    o = new Map();
  n.traverse((a) => {
    const r = a;
    if (!r.isMesh || !r.material) return;
    const l = (Array.isArray(r.material) ? r.material : [r.material]).map(
      (c) => {
        const h = d6.get(c);
        if (h && h !== n) {
          const d = c,
            u = o.get(d);
          u
            ? (c = u)
            : ((c = d.clone()),
              h6(c) &&
                d.userData.entityLight &&
                (c.emissive.copy(d.userData.entityLight.base),
                (c.emissiveIntensity = d.userData.entityLight.intensity)),
              delete c.userData.entityLight,
              o.set(d, c));
        }
        return (d6.set(c, n), c);
      },
    );
    r.material = Array.isArray(r.material) ? l : l[0];
    for (const c of l) {
      if (s.has(c) || (s.add(c), !h6(c))) continue;
      let h = c.userData.entityLight;
      if (!h) {
        h = c.userData.entityLight = {
          water: { value: -1e4 },
          waterView: { value: 0 },
          sky: { value: i },
          base: c.emissive.clone(),
          intensity: c.emissiveIntensity ?? 1,
        };
        const d = c.onBeforeCompile,
          u = c.customProgramCacheKey();
        ((c.customProgramCacheKey = () => u + "-entity-sky-water-v3"),
          (c.onBeforeCompile = (f, p) => {
            (d.call(c, f, p),
              (f.uniforms.uEntitySky = h.sky),
              (f.uniforms.uEntityWaterY = h.water),
              (f.uniforms.uEntityWaterView = h.waterView),
              (f.uniforms.uFxCamUnderwater = Wn.uFxCamUnderwater),
              (f.uniforms.uFxWaterTint = Wn.uFxWaterTint),
              (f.vertexShader =
                `varying vec3 vEntityWorld;
` + f.vertexShader),
              (f.vertexShader = f.vertexShader.replace(
                "#include <project_vertex>",
                `#include <project_vertex>
            vec4 entityPosition=vec4(transformed,1.0);
            #ifdef USE_INSTANCING
              entityPosition=instanceMatrix*entityPosition;
            #endif
            vEntityWorld=(modelMatrix*entityPosition).xyz;`,
              )),
              (f.fragmentShader =
                `varying vec3 vEntityWorld; uniform float uEntityWaterY; uniform float uEntityWaterView; uniform float uFxCamUnderwater; uniform vec3 uFxWaterTint;
` + f.fragmentShader),
              (f.fragmentShader = f.fragmentShader.replace(
                "#include <opaque_fragment>",
                `
            float entityDepth=max(0.0,uEntityWaterY-vEntityWorld.y);
            if(entityDepth>0.0){
              vec3 delta=vEntityWorld-cameraPosition;
              float path=uFxCamUnderwater>.5?0.0:min(entityDepth/max(-normalize(delta).y,.12),length(delta));
              vec3 transmission=exp(-vec3(.26,.075,.055)*path*uEntityWaterView);
              outgoingLight=outgoingLight*transmission*exp(-vec3(.26,.075,.055)*entityDepth*.6)+uFxWaterTint*(1.0-transmission);
            }
            #include <opaque_fragment>`,
              )),
              (c.vertexColors || r instanceof hs) &&
                (f.fragmentShader = f.fragmentShader.replace(
                  "#include <emissivemap_fragment>",
                  `#include <emissivemap_fragment>
#if defined(USE_COLOR) || defined(USE_INSTANCING_COLOR)
totalEmissiveRadiance *= vColor.rgb;
#endif`,
                )),
              (f.fragmentShader =
                `uniform float uEntitySky;
` + f.fragmentShader),
              (f.fragmentShader = Dg(f.fragmentShader, "uEntitySky")));
          }),
          (c.needsUpdate = !0));
      }
      ((h.sky.value = i),
        (h.water.value = typeof e == "number" ? -1e4 : (e.waterY ?? -1e4)),
        (h.waterView.value = eV() > 0 ? 1 : 0),
        c.map && "emissiveMap" in c
          ? (c.userData.entityFillMap !== c.map &&
              ((c.userData.entityFillMap = c.map),
              (c.emissiveMap = c.map),
              (c.needsUpdate = !0)),
            c.emissive
              .copy(h.base)
              .multiplyScalar(h.intensity)
              .add(f6.copy(c.color).multiply(u6).multiplyScalar(t)),
            (c.emissiveIntensity = 1))
          : (c.emissive
              .copy(c.color)
              .multiply(u6)
              .multiplyScalar(t)
              .add(f6.copy(h.base).multiplyScalar(h.intensity)),
            (c.emissiveIntensity = 1)));
    }
  });
}
const p6 = new WeakMap();
function Lf(n) {
  let e = p6.get(n);
  return (e || ((e = new mK(n)), p6.set(n, e)), e);
}
