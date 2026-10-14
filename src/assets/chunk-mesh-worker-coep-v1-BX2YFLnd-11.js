// chunk-mesh-worker-coep-v1-BX2YFLnd 11 — children
// Lines 3432-3905 of readable/assets/chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
class Xt extends rn {
  constructor() {
    (super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Wi++ }),
      (this.uuid = Ts()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Xt.DEFAULT_UP.clone()));
    const t = new C(),
      e = new bs(),
      s = new Ke(),
      n = new C(1, 1, 1);
    function i() {
      s.setFromEuler(e, !1);
    }
    function h() {
      e.setFromQuaternion(s, void 0, !1);
    }
    (e._onChange(i),
      s._onChange(h),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: t },
        rotation: { configurable: !0, enumerable: !0, value: e },
        quaternion: { configurable: !0, enumerable: !0, value: s },
        scale: { configurable: !0, enumerable: !0, value: n },
        modelViewMatrix: { value: new Ut() },
        normalMatrix: { value: new Ie() },
      }),
      (this.matrix = new Ut()),
      (this.matrixWorld = new Ut()),
      (this.matrixAutoUpdate = Xt.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Gi()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {}));
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(t) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(t),
      this.matrix.decompose(this.position, this.quaternion, this.scale));
  }
  applyQuaternion(t) {
    return (this.quaternion.premultiply(t), this);
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return (Ae.setFromAxisAngle(t, e), this.quaternion.multiply(Ae), this);
  }
  rotateOnWorldAxis(t, e) {
    return (Ae.setFromAxisAngle(t, e), this.quaternion.premultiply(Ae), this);
  }
  rotateX(t) {
    return this.rotateOnAxis(In, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(Cn, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Nn, t);
  }
  translateOnAxis(t, e) {
    return (
      Ln.copy(t).applyQuaternion(this.quaternion),
      this.position.add(Ln.multiplyScalar(e)),
      this
    );
  }
  translateX(t) {
    return this.translateOnAxis(In, t);
  }
  translateY(t) {
    return this.translateOnAxis(Cn, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Nn, t);
  }
  localToWorld(t) {
    return (this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld));
  }
  worldToLocal(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      t.applyMatrix4(zt.copy(this.matrixWorld).invert())
    );
  }
  lookAt(t, e, s) {
    t.isVector3 ? as.copy(t) : as.set(t, e, s);
    const n = this.parent;
    (this.updateWorldMatrix(!0, !1),
      Ue.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? zt.lookAt(Ue, as, this.up)
        : zt.lookAt(as, Ue, this.up),
      this.quaternion.setFromRotationMatrix(zt),
      n &&
        (zt.extractRotation(n.matrixWorld),
        Ae.setFromRotationMatrix(zt),
        this.quaternion.premultiply(Ae.invert())));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return t === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          t,
        ),
        this)
      : (t && t.isObject3D
          ? (t.removeFromParent(),
            (t.parent = this),
            this.children.push(t),
            t.dispatchEvent(Bn),
            (ye.child = t),
            this.dispatchEvent(ye),
            (ye.child = null))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              t,
            ),
        this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let s = 0; s < arguments.length; s++) this.remove(arguments[s]);
      return this;
    }
    const e = this.children.indexOf(t);
    return (
      e !== -1 &&
        ((t.parent = null),
        this.children.splice(e, 1),
        t.dispatchEvent(Vi),
        (zs.child = t),
        this.dispatchEvent(zs),
        (zs.child = null)),
      this
    );
  }
  removeFromParent() {
    const t = this.parent;
    return (t !== null && t.remove(this), this);
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      zt.copy(this.matrixWorld).invert(),
      t.parent !== null &&
        (t.parent.updateWorldMatrix(!0, !1), zt.multiply(t.parent.matrixWorld)),
      t.applyMatrix4(zt),
      t.removeFromParent(),
      (t.parent = this),
      this.children.push(t),
      t.updateWorldMatrix(!1, !0),
      t.dispatchEvent(Bn),
      (ye.child = t),
      this.dispatchEvent(ye),
      (ye.child = null),
      this
    );
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let s = 0, n = this.children.length; s < n; s++) {
      const h = this.children[s].getObjectByProperty(t, e);
      if (h !== void 0) return h;
    }
  }
  getObjectsByProperty(t, e, s = []) {
    this[t] === e && s.push(this);
    const n = this.children;
    for (let i = 0, h = n.length; i < h; i++)
      n[i].getObjectsByProperty(t, e, s);
    return s;
  }
  getWorldPosition(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      t.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(Ue, t, Hi),
      t
    );
  }
  getWorldScale(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(Ue, Yi, t),
      t
    );
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {}
  traverse(t) {
    t(this);
    const e = this.children;
    for (let s = 0, n = e.length; s < n; s++) e[s].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const e = this.children;
    for (let s = 0, n = e.length; s < n; s++) e[s].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    (this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0));
  }
  updateMatrixWorld(t) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || t) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix,
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (t = !0)));
    const e = this.children;
    for (let s = 0, n = e.length; s < n; s++) e[s].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const s = this.parent;
    if (
      (t === !0 && s !== null && s.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix,
            )),
      e === !0)
    ) {
      const n = this.children;
      for (let i = 0, h = n.length; i < h; i++) n[i].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string",
      s = {};
    e &&
      ((t = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (s.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const n = {};
    ((n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.castShadow === !0 && (n.castShadow = !0),
      this.receiveShadow === !0 && (n.receiveShadow = !0),
      this.visible === !1 && (n.visible = !1),
      this.frustumCulled === !1 && (n.frustumCulled = !1),
      this.renderOrder !== 0 && (n.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      (n.layers = this.layers.mask),
      (n.matrix = this.matrix.toArray()),
      (n.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (n.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((n.type = "InstancedMesh"),
        (n.count = this.count),
        (n.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (n.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((n.type = "BatchedMesh"),
        (n.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (n.sortObjects = this.sortObjects),
        (n.drawRanges = this._drawRanges),
        (n.reservedRanges = this._reservedRanges),
        (n.visibility = this._visibility),
        (n.active = this._active),
        (n.bounds = this._bounds.map((c) => ({
          boxInitialized: c.boxInitialized,
          boxMin: c.box.min.toArray(),
          boxMax: c.box.max.toArray(),
          sphereInitialized: c.sphereInitialized,
          sphereRadius: c.sphere.radius,
          sphereCenter: c.sphere.center.toArray(),
        }))),
        (n.maxInstanceCount = this._maxInstanceCount),
        (n.maxVertexCount = this._maxVertexCount),
        (n.maxIndexCount = this._maxIndexCount),
        (n.geometryInitialized = this._geometryInitialized),
        (n.geometryCount = this._geometryCount),
        (n.matricesTexture = this._matricesTexture.toJSON(t)),
        this._colorsTexture !== null &&
          (n.colorsTexture = this._colorsTexture.toJSON(t)),
        this.boundingSphere !== null &&
          (n.boundingSphere = {
            center: n.boundingSphere.center.toArray(),
            radius: n.boundingSphere.radius,
          }),
        this.boundingBox !== null &&
          (n.boundingBox = {
            min: n.boundingBox.min.toArray(),
            max: n.boundingBox.max.toArray(),
          })));
    function i(c, o) {
      return (c[o.uuid] === void 0 && (c[o.uuid] = o.toJSON(t)), o.uuid);
    }
    if (this.isScene)
      (this.background &&
        (this.background.isColor
          ? (n.background = this.background.toJSON())
          : this.background.isTexture &&
            (n.background = this.background.toJSON(t).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (n.environment = this.environment.toJSON(t).uuid));
    else if (this.isMesh || this.isLine || this.isPoints) {
      n.geometry = i(t.geometries, this.geometry);
      const c = this.geometry.parameters;
      if (c !== void 0 && c.shapes !== void 0) {
        const o = c.shapes;
        if (Array.isArray(o))
          for (let a = 0, u = o.length; a < u; a++) {
            const d = o[a];
            i(t.shapes, d);
          }
        else i(t.shapes, o);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((n.bindMode = this.bindMode),
        (n.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (i(t.skeletons, this.skeleton), (n.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const c = [];
        for (let o = 0, a = this.material.length; o < a; o++)
          c.push(i(t.materials, this.material[o]));
        n.material = c;
      } else n.material = i(t.materials, this.material);
    if (this.children.length > 0) {
      n.children = [];
      for (let c = 0; c < this.children.length; c++)
        n.children.push(this.children[c].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      n.animations = [];
      for (let c = 0; c < this.animations.length; c++) {
        const o = this.animations[c];
        n.animations.push(i(t.animations, o));
      }
    }
    if (e) {
      const c = h(t.geometries),
        o = h(t.materials),
        a = h(t.textures),
        u = h(t.images),
        d = h(t.shapes),
        l = h(t.skeletons),
        p = h(t.animations),
        m = h(t.nodes);
      (c.length > 0 && (s.geometries = c),
        o.length > 0 && (s.materials = o),
        a.length > 0 && (s.textures = a),
        u.length > 0 && (s.images = u),
        d.length > 0 && (s.shapes = d),
        l.length > 0 && (s.skeletons = l),
        p.length > 0 && (s.animations = p),
        m.length > 0 && (s.nodes = m));
    }
    return ((s.object = n), s);
    function h(c) {
      const o = [];
      for (const a in c) {
        const u = c[a];
        (delete u.metadata, o.push(u));
      }
      return o;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = !0) {
    if (
      ((this.name = t.name),
      this.up.copy(t.up),
      this.position.copy(t.position),
      (this.rotation.order = t.rotation.order),
      this.quaternion.copy(t.quaternion),
      this.scale.copy(t.scale),
      this.matrix.copy(t.matrix),
      this.matrixWorld.copy(t.matrixWorld),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
      (this.layers.mask = t.layers.mask),
      (this.visible = t.visible),
      (this.castShadow = t.castShadow),
      (this.receiveShadow = t.receiveShadow),
      (this.frustumCulled = t.frustumCulled),
      (this.renderOrder = t.renderOrder),
      (this.animations = t.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      e === !0)
    )
      for (let s = 0; s < t.children.length; s++) {
        const n = t.children[s];
        this.add(n.clone());
      }
    return this;
  }
}
