// index-Dp6GxvJu 88 — add
// Lines 56031-56224 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function Vq(n) {
  if (typeof document > "u") return null;
  const e = n.join(",");
  let t = i6.get(e);
  if (t) return t;
  const i = 256,
    s = document.createElement("canvas");
  s.width = s.height = i;
  const o = s.getContext("2d"),
    a = (c) => "#" + c.toString(16).padStart(6, "0"),
    r = CL(50336 + n[0]);
  ((o.fillStyle = a(n[0])), o.fillRect(0, 0, i, i));
  const l = (c, h, d) => {
    o.fillStyle = a(c);
    for (let u = 0; u < h; u++) {
      const f = r() * i,
        p = r() * i,
        m = r() * Math.PI,
        y = 3 + Math.floor(r() * 4);
      for (let g = 0; g < y; g++) {
        const b = f + Math.cos(m) * (g - y / 2) * 11 * d + (r() - 0.5) * 10 * d,
          S = p + Math.sin(m) * (g - y / 2) * 11 * d + (r() - 0.5) * 10 * d,
          M = (9 + r() * 12) * d,
          x = (6 + r() * 8) * d;
        for (const T of [-i, 0, i])
          for (const A of [-i, 0, i])
            (o.beginPath(),
              o.ellipse(b + T, S + A, M, x, m, 0, Math.PI * 2),
              o.fill());
      }
    }
  };
  return (
    l(n[1], 9, 1.15),
    l(n[2], 8, 0.95),
    l(n[0], 5, 0.6),
    (o.globalCompositeOperation = "multiply"),
    o.drawImage(kL().image, 0, 0),
    (o.globalCompositeOperation = "source-over"),
    (t = new bi(s)),
    (t.wrapS = t.wrapT = Fr),
    (t.colorSpace = vi),
    (t.anisotropy = 4),
    i6.set(e, t),
    t
  );
}
const $q = new ze(0.66, 0.55, 0.42),
  qq = new ze(0.9, 0.85, 0.76),
  Kq = new ze(0.55, 0.6, 0.5),
  pc = new k(),
  cd = new k(),
  xh = new ze(),
  Rm = (n, e, t) => {
    const i = Math.min(1, Math.max(0, (t - n) / (e - n)));
    return i * i * (3 - 2 * i);
  };
function Yq(n, e, t, i, s) {
  const o = n.geometry,
    a = o.getAttribute("position");
  if (!a) return !1;
  o.getAttribute("normal") || o.computeVertexNormals();
  const r = o.getAttribute("normal"),
    l = new Ui().getNormalMatrix(e),
    c = a.count,
    h = new Float32Array(c * 2),
    d = new Float32Array(c * 3);
  for (let u = 0; u < c; u++) {
    (pc.fromBufferAttribute(a, u).applyMatrix4(e),
      cd.fromBufferAttribute(r, u).applyMatrix3(l).normalize());
    const f = Math.abs(cd.x),
      p = Math.abs(cd.y),
      m = Math.abs(cd.z);
    p >= f && p >= m
      ? ((h[u * 2] = pc.x * s), (h[u * 2 + 1] = pc.z * s))
      : f >= m
        ? ((h[u * 2] = pc.z * s), (h[u * 2 + 1] = pc.y * s))
        : ((h[u * 2] = pc.x * s), (h[u * 2 + 1] = pc.y * s));
    const y = pc.y;
    let g = 0.88 + 0.16 * Rm(0, Math.max(0.6, i * 0.6), y);
    if (
      ((g *= cd.y < -0.5 ? 0.85 : cd.y > 0.5 ? 1.04 : 1),
      xh.setRGB(g, g, g),
      t === "ground")
    ) {
      const b = 1 - Rm(0.35, 1.05, y),
        S = 1 - Rm(0.9, 1.9, y);
      xh.lerp(xh.clone().multiply(qq), S * 0.35).lerp(
        xh.clone().multiply($q),
        b * 0.7,
      );
    } else if (t === "naval") {
      const b = 1 - Rm(0.15, 0.75, y);
      xh.lerp(xh.clone().multiply(Kq), b * 0.7);
    }
    xh.toArray(d, u * 3);
  }
  return (
    o.setAttribute("uv", new oi(h, 2)),
    o.setAttribute("color", new oi(d, 3)),
    !0
  );
}
function jq(n, e) {
  if (e === "clean") return;
  n.updateMatrixWorld(!0);
  const t = new bt().copy(n.matrixWorld).invert(),
    i = new gn().setFromObject(n),
    s = Math.max(0.5, i.max.y),
    o = yt(1) && typeof document < "u" ? kL() : null,
    a = new Set(),
    r = new bt();
  n.traverse((l) => {
    const c = l;
    if (!c.isMesh || c.isInstancedMesh) return;
    const h = c.material;
    if (Array.isArray(h) || !h.isMeshLambertMaterial) return;
    const d = h;
    d.transparent ||
      d.userData.noWeather ||
      (r.multiplyMatrices(t, c.matrixWorld),
      !(!a.has(c.geometry) && (a.add(c.geometry), !Yq(c, r, e, s, 0.5))) &&
        ((d.vertexColors = !0),
        o && (d.map = o),
        c.geometry.boundingSphere || c.geometry.computeBoundingSphere(),
        c.geometry.boundingSphere.radius < 0.1 && (c.castShadow = !1),
        (d.needsUpdate = !0)));
  });
}
const G5 = -0.8;
function M4(n, e, t, i, s, o) {
  const a = new pe();
  ((a.name = "seat-gun-" + n),
    a.position.set(e, t, i),
    a.add(Dn(0.034, o, 3816758, 0, o / 2, 0, 0.04, 8)));
  const r = new pe();
  return (
    (r.name = "seat-gun-pitch"),
    r.position.set(0, o + 0.05, 0),
    r.add(
      ce(0.085, 0.1, 0.36, 3356730, 0, 0, 0.04),
      ce(0.07, 0.018, 0.2, 2501164, 0, 0.056, 0),
    ),
    r.add(
      Ci(s ? 0.028 : 0.021, 0.66, 1909792, 0, 0.012, -0.45, s ? 0.026 : 0.019),
    ),
    s
      ? r.add(Ci(0.042, 0.08, 1514777, 0, 0.012, -0.76, 0.042, 10))
      : r.add(Ci(0.03, 0.06, 1514777, 0, 0.012, -0.77, 0.024, 8)),
    r.add(ce(0.13, 0.13, 0.17, 4146742, 0.115, -0.05, 0.02)),
    r.add(
      ce(0.03, 0.1, 0.035, 2040356, 0, -0.09, 0.19),
      ce(0.12, 0.02, 0.03, 2040356, 0, -0.02, 0.25),
    ),
    r.add(
      ce(0.03, 0.03, 0.012, 1514777, 0, 0.08, 0.17),
      ce(0.012, 0.05, 0.012, 1514777, 0, 0.06, -0.7),
    ),
    a.add(r),
    a
  );
}
const n6 = 5002561,
  mc = 4410169,
  Cm = 5463367,
  Vw = 6121297,
  Lc = 4146742,
  Ln = 2236962,
  Za = 3816758,
  Pl = 2240576,
  uu = 14931339,
  Xq = 6972488;
function Zq(n, e, t, i, s, o, a, r, l, c = Vw) {
  const h = new pe();
  (h.position.set(o, a, r), (h.rotation.x = l));
  for (let d = 0; d < t; d++)
    for (let u = 0; u < e; u++)
      h.add(
        ce(
          i * 0.92,
          0.065,
          s * 0.9,
          c,
          (u - (e - 1) / 2) * i,
          0.03,
          (d - (t - 1) / 2) * s,
        ),
      );
  n.add(h);
}
function eh(n, e, t, i, s) {
  (n.add(Dn(0.045, 0.08, Ln, e, t + 0.04, i)),
    n.add(Dn(0.008, s, 2764071, e, t + s / 2 + 0.08, i, 0.014, 4)));
}
