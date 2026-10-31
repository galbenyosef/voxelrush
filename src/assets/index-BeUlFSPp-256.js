// index-BeUlFSPp 256 — math
// Lines 134926-135578 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function q0e(s) {
  let e = !1,
    t = 0;
  const i =
      matchMedia("(pointer: coarse)").matches ||
      Math.min(innerWidth, innerHeight) < 600,
    n = i || Y.quality === "low",
    o = matchMedia("(prefers-reduced-motion: reduce)").matches,
    a = Ga(),
    r = new h5({
      antialias: !n,
      powerPreference: n ? "low-power" : "high-performance",
    });
  (r.setPixelRatio(Math.min(window.devicePixelRatio || 1, n ? 1.25 : 1.75)),
    (r.toneMapping = zE),
    (r.toneMappingExposure = Ga() ? 1.4 : 1.32),
    (r.shadowMap.enabled = !n),
    (r.shadowMap.type = BE));
  const l = r.domElement;
  ((l.style.position = "absolute"),
    (l.style.inset = "0"),
    (l.style.width = "100%"),
    (l.style.height = "100%"),
    (l.style.opacity = "0"),
    (l.style.transition = "opacity 1.4s ease"),
    s.appendChild(l));
  const c = new Cd();
  c.fog = a ? new Sf(F0e, 26, 98) : new Sf(z0e, 30, 104);
  const h = new qn(46, 1, 0.1, 900),
    d = new B0e(CL, OE, NE, AM),
    u = Math.max(Df(CL, Ma, Sa), 40);
  d.level(Ma, Sa, u, H0e);
  const f = u + 1,
    p = (X, _e, je, ft, Pt = 0) => d.set(Ma + X, f + _e, Sa + je, ft, Pt);
  for (let X = -6; X <= 6; X++)
    for (let _e = -5; _e <= 4; _e++) {
      const je = Math.hypot(X * 0.8, _e);
      (je < 4.6 ||
        (Math.abs(X - 4) < 1.2 && _e > 0) ||
        (je < 5.4 && ((X * 7 + _e * 13) & 3) === 0)) &&
        p(X, -1, _e, v.GRAVEL);
    }
  for (let X = -8; X <= 8; X++) {
    if (X === 0 || X === 1) continue;
    const _e = -5 - Math.round(Math.abs(X) * Math.abs(X) * 0.05);
    (p(X, 0, _e, v.SANDSTONE_SMOOTH),
      Math.abs(X) > 2 &&
        Math.abs(X) < 7 &&
        p(X, 1, _e, X & 1 ? v.STAIR_SANDSTONE : v.SANDSTONE_SMOOTH, 2));
  }
  for (const [X, _e, je, ft] of [
    [-6, -3, v.MILITARY_CHEST, 2],
    [-5, -3, v.MILITARY_CHEST, 1],
    [-7, -2, v.BARREL, 1],
    [-6, -2, v.BARREL, 1],
    [6, -3, v.MILITARY_CHEST, 1],
    [7, -3, v.BARREL, 2],
    [5, -4, v.HAY_BALE, 1],
    [8, -2, v.MILITARY_CHEST, 1],
  ])
    for (let Pt = 0; Pt < ft; Pt++)
      p(X, Pt, _e, je, je === v.MILITARY_CHEST ? 6 : 0);
  const m = { x: 4, z: 2 };
  p(m.x, 0, m.z, v.CAMPFIRE);
  const g = new k(Ma + m.x + 0.5, f, Sa + m.z + 0.5);
  (p(6, 0, 1, v.WOOD_BENCH, 3),
    p(5, 0, 4, v.WOOD_BENCH, 2),
    p(-5, 0, 1, v.MAP_TABLE, 1),
    p(-6, 0, 2, v.WOOD_CHAIR, 1));
  for (const [X, _e] of [
    [-4, 3],
    [7, -1],
  ])
    (p(X, 0, _e, v.FENCE_WOOD),
      p(X, 1, _e, v.FENCE_WOOD),
      p(X, 2, _e, v.LANTERN));
  for (let X = 0; X < 7; X++) p(-9, X, -8, v.FENCE_WOOD);
  for (let X = -2; X <= 4; X++)
    (p(-10, 0, X, v.BARBED_WIRE), p(10, 0, X + 1, v.BARBED_WIRE));
  for (let X = 0; X < 70; X++) {
    const _e = X * 2.39996,
      je = 7 + (X % 9) * 0.6,
      ft = Math.round(Math.cos(_e) * je),
      Pt = Math.round(Math.sin(_e) * je);
    (Pt > -4 && Math.abs(ft) < 5) ||
      (d.getBlock(Ma + ft, f, Sa + Pt) === 0 &&
        d.getBlock(Ma + ft, f - 1, Sa + Pt) === v.GRASS &&
        p(
          ft,
          0,
          Pt,
          X % 7 === 0
            ? v.FLOWER_YELLOW + 0
            : X % 11 === 0
              ? v.FLOWER_RED
              : v.TALL_GRASS,
        ));
  }
  const y = [],
    b = [];
  if (a) {
    const X = (_e, je, ft) => {
      (p(_e, je, ft, v.JACK_O_LANTERN, 2), b.push([_e, je, ft]));
    };
    for (const [_e, je] of [
      [-4, 3],
      [7, -1],
    ])
      X(_e, 2, je);
    (X(-2, 1, -5),
      X(4, 2, -6),
      X(-5, 2, -6),
      X(-4, 0, 0),
      p(-4, 0, -1, v.PUMPKIN, 1),
      X(3, 0, 1),
      p(2, 0, 2, v.PUMPKIN, 3),
      p(-7, 0, 1, v.PUMPKIN),
      p(-6, 2, -3, v.COBWEB),
      p(7, 2, -3, v.COBWEB),
      p(-7, 1, -2, v.COBWEB));
    for (let _e = 0; _e < 2; _e++)
      for (let je = -7 + _e; je <= 7; je += 2) {
        const ft = -8 - _e * 2 - (Math.abs(je) > 4 ? 1 : 0);
        d.getBlock(Ma + je, f - 1, Sa + ft) !== 0 &&
          (p(je, 0, ft, (je + _e) % 3 === 0 ? v.GRAVE_CROSS : v.GRAVESTONE, 2),
          (je + _e * 3) % 4 === 0
            ? p(je, 0, ft + 1, v.CANDLE)
            : (je * 7 + _e) % 5 === 0 && p(je, 0, ft + 1, v.SKULL, 2),
          y.push([je, ft]));
      }
    for (let _e = 0; _e < 5; _e++) p(-10, _e, -7, v.DEAD_LOG);
    (p(-11, 3, -7, v.DEAD_LOG),
      p(-9, 4, -7, v.DEAD_LOG),
      p(-10, 4, -8, v.DEAD_LOG),
      p(-10, 5, -7, v.DEAD_LOG),
      p(9, 0, -6, v.SCARECROW, 2));
    for (let _e = 0; _e < 60; _e++) {
      const je = _e * 2.39996,
        ft = 6 + (_e % 7) * 0.8,
        Pt = Math.round(Math.cos(je) * ft),
        Ft = Math.round(Math.sin(je) * ft),
        Ri = d.getBlock(Ma + Pt, f, Sa + Ft);
      (Ri === 0 || Ri === v.TALL_GRASS) &&
        d.getBlock(Ma + Pt, f - 1, Sa + Ft) === v.GRASS &&
        p(Pt, 0, Ft, v.LEAF_LITTER);
    }
  }
  const S = gP(32),
    M = new Pi({ map: S.texture, vertexColors: !0, alphaTest: 0.5, side: Mi }),
    E = new Pi({
      map: S.texture,
      vertexColors: !0,
      transparent: !0,
      opacity: 0.75,
      depthWrite: !1,
      side: Mi,
    }),
    A = { ox: 0, oz: 0, data: new Uint8Array(0), at: () => 0, skyAt: () => 15 },
    T = [],
    x = [];
  for (let X = 0; X < AM; X++)
    for (let _e = 0; _e < AM; _e++) x.push([OE + X, NE + _e]);
  const R = [Math.floor(Ma / ke), Math.floor(Sa / ke)];
  x.sort(
    (X, _e) =>
      Math.hypot(X[0] - R[0], X[1] - R[1]) -
      Math.hypot(_e[0] - R[0], _e[1] - R[1]),
  );
  const _ = () => {
    const X = x.shift();
    if (!X) return;
    const { opaque: _e, water: je } = jA(d, X[0], X[1], A, !1, !0, 1337, !0);
    if (_e) {
      const ft = new Q(_e, M);
      ((ft.matrixAutoUpdate = !1),
        (ft.receiveShadow = !0),
        (ft.castShadow = Math.hypot(X[0] - R[0], X[1] - R[1]) < 1.5),
        c.add(ft),
        T.push(ft));
    }
    if (je) {
      const ft = new Q(je, E);
      ((ft.matrixAutoUpdate = !1), (ft.renderOrder = 2), c.add(ft), T.push(ft));
    }
  };
  for (let X = 0; X < (n ? 4 : 9); X++) _();
  n && x.splice(16);
  const C = new k(Ma + 0.5, f, Sa + 0.5),
    P = new Dl(a ? 9872127 : 16757611, a ? 1.7 : 3.1);
  if (
    (P.position.copy(C).addScaledVector(a ? S9 : M9, 40),
    P.target.position.copy(C),
    (P.castShadow = r.shadowMap.enabled),
    P.castShadow)
  ) {
    P.shadow.mapSize.set(2048, 2048);
    const X = P.shadow.camera;
    ((X.left = -13),
      (X.right = 13),
      (X.top = 13),
      (X.bottom = -13),
      (X.near = 5),
      (X.far = 90),
      (P.shadow.bias = -4e-4),
      (P.shadow.normalBias = 0.03));
  }
  (c.add(P, P.target),
    c.add(
      a ? new z0(7627956, 2890258, 1.25) : new z0(10853583, 4863526, 1.45),
    ));
  const O = new Dl(10466047, 0.85);
  (O.position.set(C.x + 6, f + 8, C.z + 14),
    O.target.position.copy(C),
    c.add(O, O.target));
  const B = new Qu(16747066, 9, 9, 1.6);
  (B.position.copy(g), (B.position.y += 0.8), c.add(B));
  const H = new Qu(a ? 16747050 : 16761466, a ? 4.5 : 3.2, a ? 8 : 7, 1.8);
  (H.position.set(C.x - 4, f + 2.6, C.z + 3), c.add(H));
  const D = a
      ? [
          [0, 2.2, -5.6, 4, 9],
          [-3.5, 0.9, 0.6, 3.2, 6],
          [3, 0.9, 1.6, 3.2, 6],
        ]
          .slice(0, n ? 1 : 3)
          .map(([X, _e, je, ft, Pt]) => {
            const Ft = new Qu(16742942, ft, Pt, 1.7);
            return (Ft.position.set(C.x + X, f + _e, C.z + je), c.add(Ft), Ft);
          })
      : [],
    U = U0e(a);
  c.add(U);
  const W = G0e();
  (W.position.set(C.x, f - 6, C.z), c.add(W));
  const J = iy("rgba(255,240,200,1)", "rgba(255,150,60,0.45)"),
    j = [],
    ne = [
      [m.x, 0.55, m.z, 1.9],
      [-4, 2.5, 3, 0.9],
      [7, 2.5, -1, 0.9],
    ];
  if (a)
    for (const [X, _e, je] of b)
      !(X === -4 && je === 3) &&
        !(X === 7 && je === -1) &&
        ne.push([X, _e + 0.5, je + 0.6, 1.1]);
  for (const [X, _e, je, ft] of ne) {
    const Pt = new Ws(
      new hn({
        map: J,
        blending: rs,
        depthWrite: !1,
        transparent: !0,
        fog: !1,
        opacity: 0.75,
      }),
    );
    (Pt.position.set(Ma + X + 0.5, f + _e, Sa + je + 0.5),
      Pt.scale.setScalar(ft),
      c.add(Pt),
      j.push(Pt));
  }
  const ge = xm(L.TANK, 0, 7),
    be = ge.getObjectByName("tank-turret") ?? new re();
  (ge.position.set(C.x - 9.5, f, C.z - 10),
    (ge.rotation.y = 0.75),
    ge.traverse((X) => {
      ((X.castShadow = !0), (X.receiveShadow = !0));
    }),
    c.add(ge));
  const oe = xm(L.HELI, 0, 3);
  oe.name = "menu-helicopter";
  const he = oe.getObjectByName("helicopter-rotor");
  c.add(oe);
  const Ie = iy("rgba(255,255,255,1)", "rgba(255,60,60,0.6)"),
    ve = new Ws(
      new hn({
        map: Ie,
        blending: rs,
        depthWrite: !1,
        transparent: !0,
        fog: !1,
      }),
    ),
    it = new Q(
      new ws(0.055, 8, 6),
      new Zt({ color: 16730936, toneMapped: !1 }),
    );
  ((it.name = "menu-helicopter-beacon"),
    it.position.set(0, 2.99, 4.34),
    oe.add(it),
    (ve.name = "menu-helicopter-beacon-glow"),
    ve.position.set(0, 0, 0),
    ve.scale.setScalar(0.55),
    it.add(ve));
  const st = W0e();
  (st.mesh.position.set(C.x - 8.45, f + 6.3, C.z - 7.5),
    (st.mesh.rotation.y = 0.5),
    c.add(st.mesh));
  let ot = [];
  const at = () => qe?.id ?? Y.nick ?? "menu";
  function Re(X, _e, je, ft, Pt, Ft, Ri = "") {
    const gi = xM[X],
      Be = Kc(3951150);
    (Oc(Be.group, _e, je),
      X0(
        Be.armorRoot,
        Be.head,
        Be.legL,
        Be.legR,
        X === 0 ? [w.HELMET_2, w.VEST_2] : X % 2 ? [w.VEST_2] : [w.HELMET_2],
      ),
      Td(Be, gi.held, S.texture));
    const yt = Lt.weapons[OP];
    if (
      (Ed(
        Be.head,
        ym(X === 0 && xA(yt) && Lt.owned.includes(PP(yt)) ? yt : ""),
      ),
      Ft)
    )
      for (const $ of Be.heldMesh.children)
        qa($, { uid: "menu-" + X, skin: Ft, owner: at(), kills: 0 }, at());
    (Be.group.position.set(C.x + gi.x, f, C.z + gi.z),
      (Be.group.rotation.y = Math.PI + gi.yaw),
      Be.group.traverse(($) => {
        (($.castShadow = !0), ($.receiveShadow = !0));
      }),
      c.add(Be.group));
    const xt = V0e(ft, Pt, Ri);
    return (
      xt && Be.group.add(xt),
      { model: Be, tag: xt, slot: X, seed: X * 1.7 }
    );
  }
  function V(X) {
    c.remove(X.model.group);
    for (const _e of X.model.heldMesh.children) Gc(_e);
    (Td(X.model, 0, S.texture),
      X.tag && (X.model.group.remove(X.tag), i1(X.tag)),
      i1(X.model.group));
  }
  function ye() {
    for (const je of ot) V(je);
    ot = [];
    const X = qe?.username ?? (Y.nick || I("You", "Вы"));
    (ot.push(Re(0, Lt.character, Lt.custom, X, "you", Lt.weapons[257])),
      (fo.squad?.members ?? [])
        .filter((je) => je.id !== qe?.id)
        .sort(
          (je, ft) => (ft.servers.length ? 1 : 0) - (je.servers.length ? 1 : 0),
        )
        .slice(0, xM.length - 1)
        .forEach((je, ft) =>
          ot.push(
            Re(
              ft + 1,
              je.character,
              je.custom,
              je.username,
              je.servers.length ? "online" : "offline",
              void 0,
              U1(je.slot),
            ),
          ),
        ));
    for (let je = 0; je < 40; je++) Ce(0.05, je * 0.05);
  }
  function Ce(X, _e) {
    for (const je of ot) {
      const ft = xM[je.slot];
      (Xf(je.model, X, _e + je.seed, {
        speed: 0,
        pitch: ft.pose.pitch ?? 0,
        held: ft.held,
        aiming: !1,
        crouching: !!ft.pose.crouching,
      }),
        (je.model.head.rotation.y = Math.sin(_e * 0.37 + je.seed * 2.1) * 0.28),
        (je.model.head.rotation.x =
          ft.head + Math.sin(_e * 0.29 + je.seed * 1.3) * 0.03),
        (je.model.group.rotation.y =
          Math.PI + ft.yaw + Math.sin(_e * 0.21 + je.seed) * 0.05));
    }
  }
  ye();
  let ze = !1;
  const tt = () => {
    ze = !0;
  };
  (window.addEventListener("squad-changed", tt),
    window.addEventListener("cosmetics-changed", tt));
  const ht = iy("rgba(255,255,230,1)", "rgba(255,170,70,0.8)"),
    ut = iy("rgba(255,255,255,0.55)", "rgba(255,255,255,0.22)"),
    F = n ? 30 : 70,
    N = n ? 10 : 22,
    fe = n ? 60 : 160,
    De = TM(F, 16752714, 34, !0, ht),
    Xe = TM(N, 7037544, 240, !1, ut),
    et = TM(
      a ? Math.round(fe * 0.35) : fe,
      a ? 10354640 : 16766880,
      a ? 22 : 10,
      !0,
      ht,
    );
  c.add(De, Xe, et);
  const Mt = g.clone();
  Mt.y += 0.35;
  const pt = Float32Array.from({ length: F }, () => Math.random() * 2.2),
    At = Float32Array.from({ length: F }, () => Math.random() * 100),
    ee = Float32Array.from({ length: N }, (X, _e) => (_e / N) * 6),
    te = Float32Array.from({ length: fe * 3 }, (X, _e) =>
      _e % 3 === 1 ? Math.random() * 4 : (Math.random() - 0.5) * 18,
    );
  function He(X, _e) {
    const je = De.geometry.getAttribute("position"),
      ft = De.geometry.getAttribute("alpha");
    for (let Be = 0; Be < F; Be++) {
      ((pt[Be] += X),
        pt[Be] > 2.2 && ((pt[Be] = 0), (At[Be] = Math.random() * 100)));
      const yt = pt[Be],
        xt = At[Be];
      (je.setXYZ(
        Be,
        Mt.x + Math.sin(xt + yt * 2.3) * 0.25 * yt + Math.sin(xt * 3) * 0.2,
        Mt.y + yt * (0.9 + (xt % 1) * 0.6),
        Mt.z + Math.cos(xt + yt * 1.7) * 0.25 * yt,
      ),
        ft.setX(
          Be,
          Math.max(0, 1 - yt / 2.2) * (0.6 + 0.4 * Math.sin(_e * 20 + xt)),
        ));
    }
    je.needsUpdate = ft.needsUpdate = !0;
    const Pt = Xe.geometry.getAttribute("position"),
      Ft = Xe.geometry.getAttribute("alpha");
    for (let Be = 0; Be < N; Be++) {
      ee[Be] = (ee[Be] + X) % 6;
      const yt = ee[Be];
      (Pt.setXYZ(
        Be,
        Mt.x + Math.sin(Be * 1.7 + yt * 0.6) * 0.3 + yt * 0.35,
        Mt.y + 0.4 + yt * 0.75,
        Mt.z + Math.cos(Be * 2.3) * 0.25 - yt * 0.12,
      ),
        Ft.setX(Be, Math.min(1, yt * 1.5) * Math.max(0, 1 - yt / 6) * 0.42));
    }
    Pt.needsUpdate = Ft.needsUpdate = !0;
    const Ri = et.geometry.getAttribute("position"),
      gi = et.geometry.getAttribute("alpha");
    for (let Be = 0; Be < Ri.count; Be++) {
      const yt = te[Be * 3],
        xt = te[Be * 3 + 1],
        $ = te[Be * 3 + 2];
      a
        ? (Ri.setXYZ(
            Be,
            C.x + yt * 0.85 + Math.sin(_e * 0.21 + Be * 1.7) * 1.2,
            f + 0.5 + xt * 0.4 + Math.sin(_e * 0.7 + Be) * 0.3,
            C.z - 9 + $ * 0.25 + Math.cos(_e * 0.17 + Be * 1.3) * 0.9,
          ),
          gi.setX(Be, Math.max(0, Math.sin(_e * 0.6 + Be * 2.1)) * 0.9))
        : (Ri.setXYZ(
            Be,
            C.x + yt + Math.sin(_e * 0.13 + Be) * 0.6,
            f + 0.3 + ((xt + _e * 0.08) % 4),
            C.z + $ * 0.6 + Math.cos(_e * 0.11 + Be * 1.3) * 0.5,
          ),
          gi.setX(Be, 0.25 + 0.25 * Math.sin(_e * 0.9 + Be * 2.1)));
    }
    Ri.needsUpdate = gi.needsUpdate = !0;
  }
  const K = a && y.length ? new w9(c) : null;
  let pe = 2.2;
  const Ae = new k(C.x, f + 1.15, C.z - 0.7);
  let Le = 0,
    Ve = 0;
  const We = (X) => {
    X.pointerType === "mouse" &&
      ((Le = X.clientX / innerWidth - 0.5),
      (Ve = X.clientY / innerHeight - 0.5));
  };
  window.addEventListener("pointermove", We, { passive: !0 });
  let ae = 1,
    Ke = 1,
    Me = 0.95;
  function Te(X) {
    const _e = document
        .querySelector("#menu .menu-panel")
        ?.getBoundingClientRect(),
      je = document.querySelector("#menu .mm-side")?.getBoundingClientRect();
    if (!_e || !je || !_e.width || !je.width) return null;
    const ft = _e.right + 12,
      Pt = je.left - 12;
    return Pt - ft > X * 0.18 && je.top < _e.bottom
      ? { left: ft, right: Pt }
      : null;
  }
  function Je() {
    const X = s.clientWidth || window.innerWidth,
      _e = s.clientHeight || window.innerHeight;
    X === 0 || _e === 0 || (r.setSize(X, _e, !1), Fe());
  }
  function Fe() {
    const X = s.clientWidth || window.innerWidth,
      _e = s.clientHeight || window.innerHeight;
    if (X === 0 || _e === 0) return;
    ((ae = X), (Ke = _e), (h.aspect = X / _e));
    const je = X / _e,
      ft = je > 1.15 && _e >= 520 ? Te(X) : null;
    ((Me = ft ? (ft.right - ft.left) / X : je > 1.15 && _e < 520 ? 0.42 : 0.95),
      ft
        ? h.setViewOffset(
            X,
            _e,
            X / 2 - (ft.left + ft.right) / 2,
            -_e * 0.03,
            X,
            _e,
          )
        : je > 1.15 && _e < 520
          ? h.setViewOffset(X, _e, -X * 0.21, _e * 0.16, X, _e)
          : je > 1.15
            ? h.setViewOffset(X, _e, -X * 0.12, -_e * 0.03, X, _e)
            : je < 0.85
              ? h.setViewOffset(X, _e, 0, _e * 0.13, X, _e)
              : h.setViewOffset(X, _e, -X * 0.08, _e * 0.06, X, _e),
      h.updateProjectionMatrix());
    const Pt = (_e * r.getPixelRatio()) / 900;
    for (const Ft of [De, Xe, et]) Ft.material.uniforms.uScale.value = Pt;
  }
  (Je(), window.addEventListener("resize", Je));
  function Et(X) {
    const _e = ae / Ke,
      je = ni.degToRad(h.fov / 2),
      ft = _e < 0.85,
      Pt = ot.length <= 1 ? 1.7 : ot.length <= 3 ? 2.6 : 3.9,
      Ft =
        (ft ? Pt * 0.87 : Pt) /
        (Math.tan(je) * Math.max(0.35, _e) * Math.max(0.25, Me)),
      Ri = Math.max(8.4, Ft),
      gi = Math.min(
        ft ? 1.6 : 2.2,
        Math.max(1, (Ri / 8.4) * (ft ? 0.85 : 0.7)),
      );
    for (const Pe of ot)
      Pe.tag &&
        (Pe.tag.scale.set(1.55 * gi, 0.34 * gi, 1),
        (Pe.tag.position.y = 2.42 + (Pe.slot >= 3 ? 0.36 * gi : 0)));
    const Be = o ? 1 : Math.min(1, X / 3.6),
      yt = 1 - Math.pow(1 - Be, 3),
      $ = (o ? 0.12 : 0.12 + Math.sin(X * 0.06) * 0.2) + (1 - yt) * 0.9,
      de = Ri + (1 - yt) * 16,
      Ee = 1.05 + (1 - yt) * 9 + Math.sin(X * 0.17) * 0.08;
    (h.position.set(
      Ae.x + Math.sin($) * de + Le * 0.8,
      Ae.y + Ee - Ve * 0.4,
      Ae.z + Math.cos($) * de,
    ),
      h.lookAt(Ae.x, Ae.y + 0.15 + (1 - yt) * -0.5, Ae.z),
      o ||
        ((h.rotation.z += Math.sin(X * 0.9) * 0.002),
        (h.rotation.x += Math.sin(X * 1.3) * 0.0015)),
      U.position.copy(h.position));
  }
  const $t = new TG();
  let Nt = !1,
    si = 0,
    ce = 0,
    Se = 0;
  const Qe = document.getElementById("menu");
  function Ue() {
    if (e) return;
    t = requestAnimationFrame(Ue);
    const X = $t.getElapsedTime(),
      _e = Math.min(0.1, X - si);
    if (
      ((ce += _e),
      (si = X),
      document.hidden || Qe?.classList.contains("hidden") || (i && ce < 1 / 31))
    )
      return;
    const je = Math.min(0.1, ce);
    ((ce = 0),
      x.length && (_(), n || _()),
      ze && ((ze = !1), ye()),
      ++Se % 45 === 0 && Fe(),
      Et(X),
      Ce(je, X),
      (be.rotation.y = Math.sin(X * 0.17) * 0.26));
    const ft = X * 0.11 + 2.2,
      Pt = 46;
    (oe.position.set(
      C.x + Math.cos(ft) * Pt,
      f + 17 + Math.sin(X * 0.4) * 0.8,
      C.z - 20 + Math.sin(ft) * Pt * 0.55,
    ),
      oe.rotation.set(0.08, -ft + Math.PI, Math.sin(ft) * 0.08),
      he && (he.rotation.y += je * 28),
      (ve.visible = X % 1.2 < 0.15),
      st.animate(X));
    const Ft = 0.82 + Math.sin(X * 13.1) * 0.08 + Math.sin(X * 7.3 + 1.3) * 0.1;
    ((B.intensity = 9 * Ft), j[0].scale.setScalar(1.9 * Ft));
    for (const [Ri, gi] of D.entries())
      gi.intensity =
        (Ri === 0 ? 4 : 3.2) *
        (0.86 +
          Math.sin(X * 11.3 + Ri * 2.1) * 0.07 +
          Math.sin(X * 6.1 + Ri) * 0.07);
    if (K && (K.update(je), X > pe && !o)) {
      pe = X + 3.2 + Math.random() * 3.5;
      const [Ri, gi] = y[Math.floor(Math.random() * y.length)];
      K.spawn(new k(Ma + Ri + 0.5, f - 0.4, Sa + gi + 0.5));
    }
    ((U.material.uniforms.uTime.value = X),
      He(je, X),
      r.render(c, h),
      Nt ||
        ((Nt = !0),
        requestAnimationFrame(() => {
          l.style.opacity = "1";
        })));
  }
  Ue();
  function vt() {
    if (!e) {
      ((e = !0),
        cancelAnimationFrame(t),
        window.removeEventListener("resize", Je),
        window.removeEventListener("pointermove", We),
        window.removeEventListener("squad-changed", tt),
        window.removeEventListener("cosmetics-changed", tt));
      for (const X of ot) V(X);
      for (const X of T) (c.remove(X), X.geometry.dispose());
      (M.dispose(), E.dispose(), S.texture.dispose());
      for (const X of [De, Xe, et])
        (X.geometry.dispose(), X.material.dispose());
      for (const X of [J, Ie, ht, ut]) X.dispose();
      for (const X of j) X.material.dispose();
      st.dispose();
      for (const X of D) c.remove(X);
      (i1(ge),
        i1(oe),
        i1(W),
        U.geometry.dispose(),
        U.material.dispose(),
        r.dispose(),
        l.parentElement === s && s.removeChild(l));
    }
  }
  return { stop: vt };
}
