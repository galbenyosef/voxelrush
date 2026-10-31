// index-BeUlFSPp 114 — userdata
// Lines 64812-65114 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class N7 extends uI {
  constructor(e, t, i, n = 0.025) {
    const o = [e, ...[...new Set(t)].filter((c) => c !== e)];
    let a = bg.get(i);
    if (!a) {
      e.updateWorldMatrix(!0, !0);
      const c = new Rt().copy(e.matrixWorld).invert(),
        h = o.map((f) => new Rt().multiplyMatrices(c, f.matrixWorld).invert()),
        d = [];
      e.traverse((f) => {
        const p = f;
        if (!p.isMesh || !p.geometry || p.userData.lodSkip) return;
        for (let S = f; S && S !== e; S = S.parent)
          if (!S.visible || S.userData.lodSkip) return;
        const m = Array.isArray(p.material) ? p.material : [p.material];
        if (m.every((S) => S.transparent && S.opacity < 0.35)) return;
        const g = new Rt().multiplyMatrices(c, p.matrixWorld),
          y = p,
          b = y.isInstancedMesh ? y.count : 1;
        for (let S = 0; S < b; S++) {
          const M = y.isInstancedMesh
              ? g
                  .clone()
                  .multiply(new Rt().fromArray(y.instanceMatrix.array, S * 16))
              : g,
            E = (y.isInstancedMesh && p.userData.lodGeometry) || p.geometry,
            A = E.index ? E.toNonIndexed() : E.clone();
          if (
            (A.applyMatrix4(M),
            A.computeBoundingBox(),
            A.boundingBox.getSize(new k()).length() < n)
          ) {
            A.dispose();
            continue;
          }
          let T = 0;
          for (let B = f; B && B !== e; B = B.parent) {
            const H = o.indexOf(B);
            if (H > 0) {
              T = H;
              break;
            }
          }
          const x = A.getAttribute("position").count,
            R = new Float32Array(x * 3),
            _ = new Uint16Array(x * 4),
            C = new Float32Array(x * 4),
            P = A.getAttribute("color"),
            O = A.groups.length
              ? A.groups
              : [{ start: 0, count: x, materialIndex: 0 }];
          for (const B of O) {
            const H = Array.isArray(p.material)
                ? m[B.materialIndex ?? 0]
                : m[0],
              D =
                H?.userData.lodColor !== void 0
                  ? new Ge(H.userData.lodColor)
                  : (H?.color ?? new Ge(16777215)).clone();
            H?.userData.lodColor === void 0 && H?.map && D.multiply(nJ(H.map));
            for (let U = B.start; U < Math.min(x, B.start + B.count); U++)
              (D.toArray(R, U * 3),
                H?.vertexColors &&
                  P &&
                  ((R[U * 3] *= P.getX(U)),
                  (R[U * 3 + 1] *= P.getY(U)),
                  (R[U * 3 + 2] *= P.getZ(U))));
          }
          for (let B = 0; B < x; B++) ((_[B * 4] = T), (C[B * 4] = 1));
          for (const B of Object.keys(A.attributes))
            B !== "position" && B !== "normal" && A.deleteAttribute(B);
          (A.hasAttribute("normal") || A.computeVertexNormals(),
            A.setAttribute("color", new qt(R, 3)),
            A.setAttribute("skinIndex", new qt(_, 4)),
            A.setAttribute("skinWeight", new qt(C, 4)),
            A.clearGroups(),
            d.push(A));
        }
      });
      const u = Eo(d, !1);
      for (const f of d) f.dispose();
      if (!u) throw new Error(`Empty LOD model: ${i}`);
      (u.computeBoundingSphere(),
        (a = { geometry: u, inverses: h, users: 0 }),
        bg.set(i, a));
    }
    const r = new Pi({ vertexColors: !0 });
    ((r.onBeforeCompile = (c) => {
      c.fragmentShader = c.fragmentShader.replace(
        "#include <emissivemap_fragment>",
        `#include <emissivemap_fragment>
#ifdef USE_COLOR
 totalEmissiveRadiance *= vColor;
#endif`,
      );
    }),
      super(a.geometry, r),
      (this.sourceRoot = e),
      a.users++,
      (this.sources = o),
      (this.cacheKey = i));
    const l = o.map(() => {
      const c = new fI();
      return ((c.matrixAutoUpdate = !1), this.add(c), c);
    });
    (this.bind(
      new ZE(
        l,
        a.inverses.map((c) => c.clone()),
      ),
      new Rt(),
    ),
      (this.boundingSphere = a.geometry.boundingSphere.clone()),
      (this.boundingSphere.radius = this.boundingSphere.radius * 1.25 + 0.5),
      this.sync());
  }
  rootInverse = new Rt();
  sources;
  cacheKey;
  sync() {
    (this.sourceRoot.updateWorldMatrix(!0, !1),
      this.rootInverse.copy(this.sourceRoot.matrixWorld).invert());
    for (let e = 0; e < this.sources.length; e++) {
      const t = this.sources[e];
      (t.updateWorldMatrix(!0, !1),
        this.skeleton.bones[e].matrix.multiplyMatrices(
          this.rootInverse,
          t.matrixWorld,
        ),
        (this.skeleton.bones[e].matrixWorldNeedsUpdate = !0));
    }
    (this.position.copy(this.sourceRoot.position),
      this.quaternion.copy(this.sourceRoot.quaternion),
      this.scale.copy(this.sourceRoot.scale));
  }
  dispose() {
    (this.skeleton.dispose(), this.material.dispose());
    const e = bg.get(this.cacheKey);
    e && --e.users === 0 && (e.geometry.dispose(), bg.delete(this.cacheKey));
  }
}
function Fv(s, e) {
  const t = Fi.lights_fragment_begin.replace(
    "getDirectionalLightInfo( directionalLight, directLight );",
    `getDirectionalLightInfo( directionalLight, directLight );
 directLight.color *= ${e};`,
  );
  return s.replace("#include <lights_fragment_begin>", t).replace(
    "#include <lights_fragment_end>",
    `#include <lights_fragment_end>
 reflectedLight.indirectDiffuse *= ${e};
 reflectedLight.indirectSpecular *= ${e};`,
  );
}
const Vc = 0.15;
function oJ(s, e, t = 1) {
  const i = (l) => Math.max(0, Math.min(1, l)),
    n = i(s),
    o = i(e),
    a = i(t),
    r = 1 - (1 - o) * a * 0.85;
  return Math.min(1, Math.pow(n, 1.2) * 0.82 * r + 0.055 * o * a);
}
function Il(s, e, t, i = 0) {
  const n = s.probeSkyOpen(e.x, e.y + i, e.z),
    o = Math.max(
      s.probeLight(e.x, e.y + i, e.z),
      s.probeLight(e.x, e.y + Math.min(i, 0.3), e.z) * 0.92,
    );
  let a = -1e4;
  const r = s.isWaterAt(e.x, e.y + 0.15, e.z) ? e.y + 0.15 : e.y + i;
  if (s.isWaterAt(e.x, r, e.z)) {
    let l = Math.floor(r);
    for (let c = 0; c < 64 && s.isWaterAt(e.x, l + 1.5, e.z); c++) l++;
    a = l + 0.875;
  }
  return { strength: oJ(o, t, n), sky: n, waterY: a };
}
function P8(s) {
  const e = s;
  return e.color instanceof Ge && e.emissive instanceof Ge;
}
const O8 = new WeakMap(),
  N8 = new Ge(1, 0.88, 0.62),
  D8 = new Ge();
function Pl(s, e) {
  const t = Math.max(0, Math.min(1, typeof e == "number" ? e : e.strength)),
    i = typeof e == "number" ? 1 : e.sky,
    n = new Set(),
    o = new Map();
  s.traverse((a) => {
    const r = a;
    if (!r.isMesh || !r.material) return;
    const l = (Array.isArray(r.material) ? r.material : [r.material]).map(
      (c) => {
        const h = O8.get(c);
        if (h && h !== s) {
          const d = c,
            u = o.get(d);
          u
            ? (c = u)
            : ((c = d.clone()),
              P8(c) &&
                d.userData.entityLight &&
                (c.emissive.copy(d.userData.entityLight.base),
                (c.emissiveIntensity = d.userData.entityLight.intensity)),
              delete c.userData.entityLight,
              o.set(d, c));
        }
        return (O8.set(c, s), c);
      },
    );
    r.material = Array.isArray(r.material) ? l : l[0];
    for (const c of l) {
      if (n.has(c) || (n.add(c), !P8(c))) continue;
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
              (f.uniforms.uFxCamUnderwater = Zs.uFxCamUnderwater),
              (f.uniforms.uFxWaterTint = Zs.uFxWaterTint),
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
              (c.vertexColors || r instanceof On) &&
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
              (f.fragmentShader = Fv(f.fragmentShader, "uEntitySky")));
          }),
          (c.needsUpdate = !0));
      }
      ((h.sky.value = i),
        (h.water.value = typeof e == "number" ? -1e4 : (e.waterY ?? -1e4)),
        (h.waterView.value = qj() > 0 ? 1 : 0),
        c.map && "emissiveMap" in c
          ? (c.userData.entityFillMap !== c.map &&
              ((c.userData.entityFillMap = c.map),
              (c.emissiveMap = c.map),
              (c.needsUpdate = !0)),
            c.emissive
              .copy(h.base)
              .multiplyScalar(h.intensity)
              .add(D8.copy(c.color).multiply(N8).multiplyScalar(t)),
            (c.emissiveIntensity = 1))
          : (c.emissive
              .copy(c.color)
              .multiply(N8)
              .multiplyScalar(t)
              .add(D8.copy(h.base).multiplyScalar(h.intensity)),
            (c.emissiveIntensity = 1)));
    }
  });
}
const H8 = new WeakMap();
function h1(s) {
  let e = H8.get(s);
  return (e || ((e = new aJ(s)), H8.set(s, e)), e);
}
