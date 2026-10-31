// index-BeUlFSPp 109 — add
// Lines 63432-63625 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function NQ(s) {
  if (typeof document > "u") return null;
  const e = s.join(",");
  let t = T8.get(e);
  if (t) return t;
  const i = 256,
    n = document.createElement("canvas");
  n.width = n.height = i;
  const o = n.getContext("2d"),
    a = (c) => "#" + c.toString(16).padStart(6, "0"),
    r = L7(50336 + s[0]);
  ((o.fillStyle = a(s[0])), o.fillRect(0, 0, i, i));
  const l = (c, h, d) => {
    o.fillStyle = a(c);
    for (let u = 0; u < h; u++) {
      const f = r() * i,
        p = r() * i,
        m = r() * Math.PI,
        g = 3 + Math.floor(r() * 4);
      for (let y = 0; y < g; y++) {
        const b = f + Math.cos(m) * (y - g / 2) * 11 * d + (r() - 0.5) * 10 * d,
          S = p + Math.sin(m) * (y - g / 2) * 11 * d + (r() - 0.5) * 10 * d,
          M = (9 + r() * 12) * d,
          E = (6 + r() * 8) * d;
        for (const A of [-i, 0, i])
          for (const T of [-i, 0, i])
            (o.beginPath(),
              o.ellipse(b + A, S + T, M, E, m, 0, Math.PI * 2),
              o.fill());
      }
    }
  };
  return (
    l(s[1], 9, 1.15),
    l(s[2], 8, 0.95),
    l(s[0], 5, 0.6),
    (o.globalCompositeOperation = "multiply"),
    o.drawImage(I7().image, 0, 0),
    (o.globalCompositeOperation = "source-over"),
    (t = new Si(n)),
    (t.wrapS = t.wrapT = Nl),
    (t.colorSpace = Ii),
    (t.anisotropy = 4),
    T8.set(e, t),
    t
  );
}
const DQ = new Ge(0.66, 0.55, 0.42),
  HQ = new Ge(0.9, 0.85, 0.76),
  BQ = new Ge(0.55, 0.6, 0.5),
  o0 = new k(),
  yu = new k(),
  ph = new Ge(),
  yg = (s, e, t) => {
    const i = Math.min(1, Math.max(0, (t - s) / (e - s)));
    return i * i * (3 - 2 * i);
  };
function zQ(s, e, t, i, n) {
  const o = s.geometry,
    a = o.getAttribute("position");
  if (!a) return !1;
  o.getAttribute("normal") || o.computeVertexNormals();
  const r = o.getAttribute("normal"),
    l = new Zi().getNormalMatrix(e),
    c = a.count,
    h = new Float32Array(c * 2),
    d = new Float32Array(c * 3);
  for (let u = 0; u < c; u++) {
    (o0.fromBufferAttribute(a, u).applyMatrix4(e),
      yu.fromBufferAttribute(r, u).applyMatrix3(l).normalize());
    const f = Math.abs(yu.x),
      p = Math.abs(yu.y),
      m = Math.abs(yu.z);
    p >= f && p >= m
      ? ((h[u * 2] = o0.x * n), (h[u * 2 + 1] = o0.z * n))
      : f >= m
        ? ((h[u * 2] = o0.z * n), (h[u * 2 + 1] = o0.y * n))
        : ((h[u * 2] = o0.x * n), (h[u * 2 + 1] = o0.y * n));
    const g = o0.y;
    let y = 0.88 + 0.16 * yg(0, Math.max(0.6, i * 0.6), g);
    if (
      ((y *= yu.y < -0.5 ? 0.85 : yu.y > 0.5 ? 1.04 : 1),
      ph.setRGB(y, y, y),
      t === "ground")
    ) {
      const b = 1 - yg(0.35, 1.05, g),
        S = 1 - yg(0.9, 1.9, g);
      ph.lerp(ph.clone().multiply(HQ), S * 0.35).lerp(
        ph.clone().multiply(DQ),
        b * 0.7,
      );
    } else if (t === "naval") {
      const b = 1 - yg(0.15, 0.75, g);
      ph.lerp(ph.clone().multiply(BQ), b * 0.7);
    }
    ph.toArray(d, u * 3);
  }
  return (
    o.setAttribute("uv", new qt(h, 2)),
    o.setAttribute("color", new qt(d, 3)),
    !0
  );
}
function FQ(s, e) {
  if (e === "clean") return;
  s.updateMatrixWorld(!0);
  const t = new Rt().copy(s.matrixWorld).invert(),
    i = new zs().setFromObject(s),
    n = Math.max(0.5, i.max.y),
    o = wt(1) && typeof document < "u" ? I7() : null,
    a = new Set(),
    r = new Rt();
  s.traverse((l) => {
    const c = l;
    if (!c.isMesh || c.isInstancedMesh) return;
    const h = c.material;
    if (Array.isArray(h) || !h.isMeshLambertMaterial) return;
    const d = h;
    d.transparent ||
      d.userData.noWeather ||
      (r.multiplyMatrices(t, c.matrixWorld),
      !(!a.has(c.geometry) && (a.add(c.geometry), !zQ(c, r, e, n, 0.5))) &&
        ((d.vertexColors = !0),
        o && (d.map = o),
        c.geometry.boundingSphere || c.geometry.computeBoundingSphere(),
        c.geometry.boundingSphere.radius < 0.1 && (c.castShadow = !1),
        (d.needsUpdate = !0)));
  });
}
const nw = -0.8;
function yT(s, e, t, i, n, o) {
  const a = new re();
  ((a.name = "seat-gun-" + s),
    a.position.set(e, t, i),
    a.add(Gs(0.034, o, 3816758, 0, o / 2, 0, 0.04, 8)));
  const r = new re();
  return (
    (r.name = "seat-gun-pitch"),
    r.position.set(0, o + 0.05, 0),
    r.add(
      se(0.085, 0.1, 0.36, 3356730, 0, 0, 0.04),
      se(0.07, 0.018, 0.2, 2501164, 0, 0.056, 0),
    ),
    r.add(
      Hi(n ? 0.028 : 0.021, 0.66, 1909792, 0, 0.012, -0.45, n ? 0.026 : 0.019),
    ),
    n
      ? r.add(Hi(0.042, 0.08, 1514777, 0, 0.012, -0.76, 0.042, 10))
      : r.add(Hi(0.03, 0.06, 1514777, 0, 0.012, -0.77, 0.024, 8)),
    r.add(se(0.13, 0.13, 0.17, 4146742, 0.115, -0.05, 0.02)),
    r.add(
      se(0.03, 0.1, 0.035, 2040356, 0, -0.09, 0.19),
      se(0.12, 0.02, 0.03, 2040356, 0, -0.02, 0.25),
    ),
    r.add(
      se(0.03, 0.03, 0.012, 1514777, 0, 0.08, 0.17),
      se(0.012, 0.05, 0.012, 1514777, 0, 0.06, -0.7),
    ),
    a.add(r),
    a
  );
}
const x8 = 5002561,
  a0 = 4410169,
  vg = 5463367,
  E4 = 6121297,
  w0 = 4146742,
  Ds = 2236962,
  Fr = 3816758,
  Ec = 2240576,
  Ff = 14931339,
  UQ = 6972488;
function GQ(s, e, t, i, n, o, a, r, l, c = E4) {
  const h = new re();
  (h.position.set(o, a, r), (h.rotation.x = l));
  for (let d = 0; d < t; d++)
    for (let u = 0; u < e; u++)
      h.add(
        se(
          i * 0.92,
          0.065,
          n * 0.9,
          c,
          (u - (e - 1) / 2) * i,
          0.03,
          (d - (t - 1) / 2) * n,
        ),
      );
  s.add(h);
}
function j0(s, e, t, i, n) {
  (s.add(Gs(0.045, 0.08, Ds, e, t + 0.04, i)),
    s.add(Gs(0.008, n, 2764071, e, t + n / 2 + 0.08, i, 0.014, 4)));
}
