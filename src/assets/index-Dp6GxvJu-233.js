// index-Dp6GxvJu 233 — math
// Lines 127349-127913 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function pse(n) {
  let e = !1,
    t = 0;
  const i =
      matchMedia("(pointer: coarse)").matches ||
      Math.min(innerWidth, innerHeight) < 600,
    s = i || z.quality === "low",
    o = matchMedia("(prefers-reduced-motion: reduce)").matches,
    a = new oy({
      antialias: !s,
      powerPreference: s ? "low-power" : "high-performance",
    });
  (a.setPixelRatio(Math.min(window.devicePixelRatio || 1, s ? 1.25 : 1.75)),
    (a.toneMapping = nS),
    (a.toneMappingExposure = 1.32),
    (a.shadowMap.enabled = !s),
    (a.shadowMap.type = iS));
  const r = a.domElement;
  ((r.style.position = "absolute"),
    (r.style.inset = "0"),
    (r.style.width = "100%"),
    (r.style.height = "100%"),
    (r.style.opacity = "0"),
    (r.style.transition = "opacity 1.4s ease"),
    n.appendChild(r));
  const l = new nh();
  l.fog = new fp(lse, 30, 104);
  const c = new Cs(46, 1, 0.1, 900),
    h = new rse(t8, JM, eS, e3),
    d = Math.max(cu(t8, fl, pl), 40);
  h.level(fl, pl, d, ase);
  const u = d + 1,
    f = (ne, Ee, at, st, Ut = 0) => h.set(fl + ne, u + Ee, pl + at, st, Ut);
  for (let ne = -6; ne <= 6; ne++)
    for (let Ee = -5; Ee <= 4; Ee++) {
      const at = Math.hypot(ne * 0.8, Ee);
      (at < 4.6 ||
        (Math.abs(ne - 4) < 1.2 && Ee > 0) ||
        (at < 5.4 && ((ne * 7 + Ee * 13) & 3) === 0)) &&
        f(ne, -1, Ee, v.GRAVEL);
    }
  for (let ne = -8; ne <= 8; ne++) {
    if (ne === 0 || ne === 1) continue;
    const Ee = -5 - Math.round(Math.abs(ne) * Math.abs(ne) * 0.05);
    (f(ne, 0, Ee, v.SANDSTONE_SMOOTH),
      Math.abs(ne) > 2 &&
        Math.abs(ne) < 7 &&
        f(ne, 1, Ee, ne & 1 ? v.STAIR_SANDSTONE : v.SANDSTONE_SMOOTH, 2));
  }
  for (const [ne, Ee, at, st] of [
    [-6, -3, v.MILITARY_CHEST, 2],
    [-5, -3, v.MILITARY_CHEST, 1],
    [-7, -2, v.BARREL, 1],
    [-6, -2, v.BARREL, 1],
    [6, -3, v.MILITARY_CHEST, 1],
    [7, -3, v.BARREL, 2],
    [5, -4, v.HAY_BALE, 1],
    [8, -2, v.MILITARY_CHEST, 1],
  ])
    for (let Ut = 0; Ut < st; Ut++)
      f(ne, Ut, Ee, at, at === v.MILITARY_CHEST ? 6 : 0);
  const p = { x: 4, z: 2 };
  f(p.x, 0, p.z, v.CAMPFIRE);
  const m = new k(fl + p.x + 0.5, u, pl + p.z + 0.5);
  (f(6, 0, 1, v.WOOD_BENCH, 3),
    f(5, 0, 4, v.WOOD_BENCH, 2),
    f(-5, 0, 1, v.MAP_TABLE, 1),
    f(-6, 0, 2, v.WOOD_CHAIR, 1));
  for (const [ne, Ee] of [
    [-4, 3],
    [7, -1],
  ])
    (f(ne, 0, Ee, v.FENCE_WOOD),
      f(ne, 1, Ee, v.FENCE_WOOD),
      f(ne, 2, Ee, v.LANTERN));
  for (let ne = 0; ne < 7; ne++) f(-9, ne, -8, v.FENCE_WOOD);
  for (let ne = -2; ne <= 4; ne++)
    (f(-10, 0, ne, v.BARBED_WIRE), f(10, 0, ne + 1, v.BARBED_WIRE));
  for (let ne = 0; ne < 70; ne++) {
    const Ee = ne * 2.39996,
      at = 7 + (ne % 9) * 0.6,
      st = Math.round(Math.cos(Ee) * at),
      Ut = Math.round(Math.sin(Ee) * at);
    (Ut > -4 && Math.abs(st) < 5) ||
      (h.getBlock(fl + st, u, pl + Ut) === 0 &&
        h.getBlock(fl + st, u - 1, pl + Ut) === v.GRASS &&
        f(
          st,
          0,
          Ut,
          ne % 7 === 0
            ? v.FLOWER_YELLOW + 0
            : ne % 11 === 0
              ? v.FLOWER_RED
              : v.TALL_GRASS,
        ));
  }
  const y = Bk(32),
    g = new gi({ map: y.texture, vertexColors: !0, alphaTest: 0.5, side: Ai }),
    b = new gi({
      map: y.texture,
      vertexColors: !0,
      transparent: !0,
      opacity: 0.75,
      depthWrite: !1,
      side: Ai,
    }),
    S = { ox: 0, oz: 0, data: new Uint8Array(0), at: () => 0, skyAt: () => 15 },
    M = [],
    x = [];
  for (let ne = 0; ne < e3; ne++)
    for (let Ee = 0; Ee < e3; Ee++) x.push([JM + ne, eS + Ee]);
  const T = [Math.floor(fl / Pe), Math.floor(pl / Pe)];
  x.sort(
    (ne, Ee) =>
      Math.hypot(ne[0] - T[0], ne[1] - T[1]) -
      Math.hypot(Ee[0] - T[0], Ee[1] - T[1]),
  );
  const A = () => {
    const ne = x.shift();
    if (!ne) return;
    const { opaque: Ee, water: at } = i4(h, ne[0], ne[1], S, !1, !0, 1337, !0);
    if (Ee) {
      const st = new le(Ee, g);
      ((st.matrixAutoUpdate = !1),
        (st.receiveShadow = !0),
        (st.castShadow = Math.hypot(ne[0] - T[0], ne[1] - T[1]) < 1.5),
        l.add(st),
        M.push(st));
    }
    if (at) {
      const st = new le(at, b);
      ((st.matrixAutoUpdate = !1), (st.renderOrder = 2), l.add(st), M.push(st));
    }
  };
  for (let ne = 0; ne < (s ? 4 : 9); ne++) A();
  s && x.splice(16);
  const _ = new k(fl + 0.5, u, pl + 0.5),
    C = new Wr(16757611, 3.1);
  if (
    (C.position.copy(_).addScaledVector(nP, 40),
    C.target.position.copy(_),
    (C.castShadow = a.shadowMap.enabled),
    C.castShadow)
  ) {
    C.shadow.mapSize.set(2048, 2048);
    const ne = C.shadow.camera;
    ((ne.left = -13),
      (ne.right = 13),
      (ne.top = 13),
      (ne.bottom = -13),
      (ne.near = 5),
      (ne.far = 90),
      (C.shadow.bias = -4e-4),
      (C.shadow.normalBias = 0.03));
  }
  (l.add(C, C.target), l.add(new A0(10853583, 4863526, 1.45)));
  const R = new Wr(10466047, 0.85);
  (R.position.set(_.x + 6, u + 8, _.z + 14),
    R.target.position.copy(_),
    l.add(R, R.target));
  const L = new vp(16747066, 9, 9, 1.6);
  (L.position.copy(m), (L.position.y += 0.8), l.add(L));
  const N = new vp(16761466, 3.2, 7, 1.8);
  (N.position.set(_.x - 4, u + 2.6, _.z + 3), l.add(N));
  const D = cse();
  l.add(D);
  const H = hse();
  (H.position.set(_.x, u - 6, _.z), l.add(H));
  const G = f2("rgba(255,240,200,1)", "rgba(255,150,60,0.45)"),
    I = [];
  for (const [ne, Ee, at, st] of [
    [p.x, 0.55, p.z, 1.9],
    [-4, 2.5, 3, 0.9],
    [7, 2.5, -1, 0.9],
  ]) {
    const Ut = new os(
      new es({
        map: G,
        blending: cn,
        depthWrite: !1,
        transparent: !0,
        fog: !1,
        opacity: 0.75,
      }),
    );
    (Ut.position.set(fl + ne + 0.5, u + Ee, pl + at + 0.5),
      Ut.scale.setScalar(st),
      l.add(Ut),
      I.push(Ut));
  }
  const O = Hp(P.TANK, 0, 7),
    F = O.getObjectByName("tank-turret") ?? new pe();
  (O.position.set(_.x - 9.5, u, _.z - 10),
    (O.rotation.y = 0.75),
    O.traverse((ne) => {
      ((ne.castShadow = !0), (ne.receiveShadow = !0));
    }),
    l.add(O));
  const X = Hp(P.HELI, 0, 3);
  X.name = "menu-helicopter";
  const Q = X.getObjectByName("helicopter-rotor");
  l.add(X);
  const ee = f2("rgba(255,255,255,1)", "rgba(255,60,60,0.6)"),
    se = new os(
      new es({
        map: ee,
        blending: cn,
        depthWrite: !1,
        transparent: !0,
        fog: !1,
      }),
    ),
    oe = new le(
      new mn(0.055, 8, 6),
      new qt({ color: 16730936, toneMapped: !1 }),
    );
  ((oe.name = "menu-helicopter-beacon"),
    oe.position.set(0, 2.99, 4.34),
    X.add(oe),
    (se.name = "menu-helicopter-beacon-glow"),
    se.position.set(0, 0, 0),
    se.scale.setScalar(0.55),
    oe.add(se));
  const J = dse();
  (J.mesh.position.set(_.x - 8.45, u + 6.3, _.z - 7.5),
    (J.mesh.rotation.y = 0.5),
    l.add(J.mesh));
  let re = [];
  const Ce = () => (Me == null ? void 0 : Me.id) ?? z.nick ?? "menu";
  function Re(ne, Ee, at, st, Ut, xi, ri = "") {
    const vt = i3[ne],
      rt = ec(3951150);
    if (
      (Wl(rt.group, Ee, at),
      ih(
        rt.armorRoot,
        rt.head,
        rt.legL,
        rt.legR,
        ne === 0 ? [E.HELMET_2, E.VEST_2] : ne % 2 ? [E.VEST_2] : [E.HELMET_2],
      ),
      E0(rt, vt.held, y.texture),
      xi)
    )
      for (const Yt of rt.heldMesh.children)
        Ba(Yt, { uid: "menu-" + ne, skin: xi, owner: Ce(), kills: 0 }, Ce());
    (rt.group.position.set(_.x + vt.x, u, _.z + vt.z),
      (rt.group.rotation.y = Math.PI + vt.yaw),
      rt.group.traverse((Yt) => {
        ((Yt.castShadow = !0), (Yt.receiveShadow = !0));
      }),
      l.add(rt.group));
    const Tt = fse(st, Ut, ri);
    return (
      Tt && rt.group.add(Tt),
      { model: rt, tag: Tt, slot: ne, seed: ne * 1.7 }
    );
  }
  function We(ne) {
    l.remove(ne.model.group);
    for (const Ee of ne.model.heldMesh.children) Zl(Ee);
    (E0(ne.model, 0, y.texture),
      ne.tag && (ne.model.group.remove(ne.tag), Ef(ne.tag)),
      Ef(ne.model.group));
  }
  function it() {
    var at;
    for (const st of re) We(st);
    re = [];
    const ne =
      (Me == null ? void 0 : Me.username) ??
      (z.nick || (z.language === "en" ? "You" : "Вы"));
    (re.push(Re(0, Ot.character, Ot.custom, ne, "you", Ot.weapons[257])),
      (((at = Ks.squad) == null ? void 0 : at.members) ?? [])
        .filter((st) => st.id !== (Me == null ? void 0 : Me.id))
        .sort(
          (st, Ut) => (Ut.servers.length ? 1 : 0) - (st.servers.length ? 1 : 0),
        )
        .slice(0, i3.length - 1)
        .forEach((st, Ut) =>
          re.push(
            Re(
              Ut + 1,
              st.character,
              st.custom,
              st.username,
              st.servers.length ? "online" : "offline",
              void 0,
              ip(st.slot),
            ),
          ),
        ));
    for (let st = 0; st < 40; st++) ut(0.05, st * 0.05);
  }
  function ut(ne, Ee) {
    for (const at of re) {
      const st = i3[at.slot];
      (Su(at.model, ne, Ee + at.seed, {
        speed: 0,
        pitch: st.pose.pitch ?? 0,
        held: st.held,
        aiming: !1,
        crouching: !!st.pose.crouching,
      }),
        (at.model.head.rotation.y = Math.sin(Ee * 0.37 + at.seed * 2.1) * 0.28),
        (at.model.head.rotation.x =
          st.head + Math.sin(Ee * 0.29 + at.seed * 1.3) * 0.03),
        (at.model.group.rotation.y =
          Math.PI + st.yaw + Math.sin(Ee * 0.21 + at.seed) * 0.05));
    }
  }
  it();
  let gt = !1;
  const ve = () => {
    gt = !0;
  };
  (window.addEventListener("squad-changed", ve),
    window.addEventListener("cosmetics-changed", ve));
  const Y = f2("rgba(255,255,230,1)", "rgba(255,170,70,0.8)"),
    ge = f2("rgba(255,255,255,0.55)", "rgba(255,255,255,0.22)"),
    Le = s ? 30 : 70,
    Oe = s ? 10 : 22,
    Ve = s ? 60 : 160,
    Qe = t3(Le, 16752714, 34, !0, Y),
    Je = t3(Oe, 7037544, 240, !1, ge),
    Z = t3(Ve, 16766880, 10, !0, Y);
  l.add(Qe, Je, Z);
  const W = m.clone();
  W.y += 0.35;
  const ke = Float32Array.from({ length: Le }, () => Math.random() * 2.2),
    Ue = Float32Array.from({ length: Le }, () => Math.random() * 100),
    je = Float32Array.from({ length: Oe }, (ne, Ee) => (Ee / Oe) * 6),
    Ge = Float32Array.from({ length: Ve * 3 }, (ne, Ee) =>
      Ee % 3 === 1 ? Math.random() * 4 : (Math.random() - 0.5) * 18,
    );
  function Mt(ne, Ee) {
    const at = Qe.geometry.getAttribute("position"),
      st = Qe.geometry.getAttribute("alpha");
    for (let rt = 0; rt < Le; rt++) {
      ((ke[rt] += ne),
        ke[rt] > 2.2 && ((ke[rt] = 0), (Ue[rt] = Math.random() * 100)));
      const Tt = ke[rt],
        Yt = Ue[rt];
      (at.setXYZ(
        rt,
        W.x + Math.sin(Yt + Tt * 2.3) * 0.25 * Tt + Math.sin(Yt * 3) * 0.2,
        W.y + Tt * (0.9 + (Yt % 1) * 0.6),
        W.z + Math.cos(Yt + Tt * 1.7) * 0.25 * Tt,
      ),
        st.setX(
          rt,
          Math.max(0, 1 - Tt / 2.2) * (0.6 + 0.4 * Math.sin(Ee * 20 + Yt)),
        ));
    }
    at.needsUpdate = st.needsUpdate = !0;
    const Ut = Je.geometry.getAttribute("position"),
      xi = Je.geometry.getAttribute("alpha");
    for (let rt = 0; rt < Oe; rt++) {
      je[rt] = (je[rt] + ne) % 6;
      const Tt = je[rt];
      (Ut.setXYZ(
        rt,
        W.x + Math.sin(rt * 1.7 + Tt * 0.6) * 0.3 + Tt * 0.35,
        W.y + 0.4 + Tt * 0.75,
        W.z + Math.cos(rt * 2.3) * 0.25 - Tt * 0.12,
      ),
        xi.setX(rt, Math.min(1, Tt * 1.5) * Math.max(0, 1 - Tt / 6) * 0.42));
    }
    Ut.needsUpdate = xi.needsUpdate = !0;
    const ri = Z.geometry.getAttribute("position"),
      vt = Z.geometry.getAttribute("alpha");
    for (let rt = 0; rt < Ve; rt++) {
      const Tt = Ge[rt * 3],
        Yt = Ge[rt * 3 + 1],
        jt = Ge[rt * 3 + 2];
      (ri.setXYZ(
        rt,
        _.x + Tt + Math.sin(Ee * 0.13 + rt) * 0.6,
        u + 0.3 + ((Yt + Ee * 0.08) % 4),
        _.z + jt * 0.6 + Math.cos(Ee * 0.11 + rt * 1.3) * 0.5,
      ),
        vt.setX(rt, 0.25 + 0.25 * Math.sin(Ee * 0.9 + rt * 2.1)));
    }
    ri.needsUpdate = vt.needsUpdate = !0;
  }
  const ht = new k(_.x, u + 1.15, _.z - 0.7);
  let lt = 0,
    B = 0;
  const $ = (ne) => {
    ne.pointerType === "mouse" &&
      ((lt = ne.clientX / innerWidth - 0.5),
      (B = ne.clientY / innerHeight - 0.5));
  };
  window.addEventListener("pointermove", $, { passive: !0 });
  let he = 1,
    fe = 1,
    be = 0.95;
  function Se(ne) {
    var xi, ri;
    const Ee =
        (xi = document.querySelector("#menu .menu-panel")) == null
          ? void 0
          : xi.getBoundingClientRect(),
      at =
        (ri = document.querySelector("#menu .mm-side")) == null
          ? void 0
          : ri.getBoundingClientRect();
    if (!Ee || !at || !Ee.width || !at.width) return null;
    const st = Ee.right + 12,
      Ut = at.left - 12;
    return Ut - st > ne * 0.18 && at.top < Ee.bottom
      ? { left: st, right: Ut }
      : null;
  }
  function et() {
    const ne = n.clientWidth || window.innerWidth,
      Ee = n.clientHeight || window.innerHeight;
    ne === 0 || Ee === 0 || (a.setSize(ne, Ee, !1), Ze());
  }
  function Ze() {
    const ne = n.clientWidth || window.innerWidth,
      Ee = n.clientHeight || window.innerHeight;
    if (ne === 0 || Ee === 0) return;
    ((he = ne), (fe = Ee), (c.aspect = ne / Ee));
    const at = ne / Ee,
      st = at > 1.15 && Ee >= 520 ? Se(ne) : null;
    ((be = st
      ? (st.right - st.left) / ne
      : at > 1.15 && Ee < 520
        ? 0.42
        : 0.95),
      st
        ? c.setViewOffset(
            ne,
            Ee,
            ne / 2 - (st.left + st.right) / 2,
            -Ee * 0.03,
            ne,
            Ee,
          )
        : at > 1.15 && Ee < 520
          ? c.setViewOffset(ne, Ee, -ne * 0.21, Ee * 0.16, ne, Ee)
          : at > 1.15
            ? c.setViewOffset(ne, Ee, -ne * 0.12, -Ee * 0.03, ne, Ee)
            : at < 0.85
              ? c.setViewOffset(ne, Ee, 0, Ee * 0.13, ne, Ee)
              : c.setViewOffset(ne, Ee, -ne * 0.08, Ee * 0.06, ne, Ee),
      c.updateProjectionMatrix());
    const Ut = (Ee * a.getPixelRatio()) / 900;
    for (const xi of [Qe, Je, Z]) xi.material.uniforms.uScale.value = Ut;
  }
  (et(), window.addEventListener("resize", et));
  function ct(ne) {
    const Ee = he / fe,
      at = fi.degToRad(c.fov / 2),
      st = Ee < 0.85,
      Ut = re.length <= 1 ? 1.7 : re.length <= 3 ? 2.6 : 3.9,
      xi =
        (st ? Ut * 0.87 : Ut) /
        (Math.tan(at) * Math.max(0.35, Ee) * Math.max(0.25, be)),
      ri = Math.max(8.4, xi),
      vt = Math.min(
        st ? 1.6 : 2.2,
        Math.max(1, (ri / 8.4) * (st ? 0.85 : 0.7)),
      );
    for (const si of re)
      si.tag &&
        (si.tag.scale.set(1.55 * vt, 0.34 * vt, 1),
        (si.tag.position.y = 2.42 + (si.slot >= 3 ? 0.36 * vt : 0)));
    const rt = o ? 1 : Math.min(1, ne / 3.6),
      Tt = 1 - Math.pow(1 - rt, 3),
      jt = (o ? 0.12 : 0.12 + Math.sin(ne * 0.06) * 0.2) + (1 - Tt) * 0.9,
      St = ri + (1 - Tt) * 16,
      li = 1.05 + (1 - Tt) * 9 + Math.sin(ne * 0.17) * 0.08;
    (c.position.set(
      ht.x + Math.sin(jt) * St + lt * 0.8,
      ht.y + li - B * 0.4,
      ht.z + Math.cos(jt) * St,
    ),
      c.lookAt(ht.x, ht.y + 0.15 + (1 - Tt) * -0.5, ht.z),
      o ||
        ((c.rotation.z += Math.sin(ne * 0.9) * 0.002),
        (c.rotation.x += Math.sin(ne * 1.3) * 0.0015)),
      D.position.copy(c.position));
  }
  const ae = new rH();
  let qe = !1,
    Ae = 0,
    K = 0,
    te = 0;
  const me = document.getElementById("menu");
  function xe() {
    if (e) return;
    t = requestAnimationFrame(xe);
    const ne = ae.getElapsedTime(),
      Ee = Math.min(0.1, ne - Ae);
    if (
      ((K += Ee),
      (Ae = ne),
      document.hidden ||
        (me != null && me.classList.contains("hidden")) ||
        (i && K < 1 / 31))
    )
      return;
    const at = Math.min(0.1, K);
    ((K = 0),
      x.length && (A(), s || A()),
      gt && ((gt = !1), it()),
      ++te % 45 === 0 && Ze(),
      ct(ne),
      ut(at, ne),
      (F.rotation.y = Math.sin(ne * 0.17) * 0.26));
    const st = ne * 0.11 + 2.2,
      Ut = 46;
    (X.position.set(
      _.x + Math.cos(st) * Ut,
      u + 17 + Math.sin(ne * 0.4) * 0.8,
      _.z - 20 + Math.sin(st) * Ut * 0.55,
    ),
      X.rotation.set(0.08, -st + Math.PI, Math.sin(st) * 0.08),
      Q && (Q.rotation.y += at * 28),
      (se.visible = ne % 1.2 < 0.15),
      J.animate(ne));
    const xi =
      0.82 + Math.sin(ne * 13.1) * 0.08 + Math.sin(ne * 7.3 + 1.3) * 0.1;
    ((L.intensity = 9 * xi),
      I[0].scale.setScalar(1.9 * xi),
      (D.material.uniforms.uTime.value = ne),
      Mt(at, ne),
      a.render(l, c),
      qe ||
        ((qe = !0),
        requestAnimationFrame(() => {
          r.style.opacity = "1";
        })));
  }
  xe();
  function nt() {
    if (!e) {
      ((e = !0),
        cancelAnimationFrame(t),
        window.removeEventListener("resize", et),
        window.removeEventListener("pointermove", $),
        window.removeEventListener("squad-changed", ve),
        window.removeEventListener("cosmetics-changed", ve));
      for (const ne of re) We(ne);
      for (const ne of M) (l.remove(ne), ne.geometry.dispose());
      (g.dispose(), b.dispose(), y.texture.dispose());
      for (const ne of [Qe, Je, Z])
        (ne.geometry.dispose(), ne.material.dispose());
      for (const ne of [G, ee, Y, ge]) ne.dispose();
      for (const ne of I) ne.material.dispose();
      (J.dispose(),
        Ef(O),
        Ef(X),
        Ef(H),
        D.geometry.dispose(),
        D.material.dispose(),
        a.dispose(),
        r.parentElement === n && n.removeChild(r));
    }
  }
  return { stop: nt };
}
