// index-BeUlFSPp 215 — math
// Lines 112869-112999 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function o9(s, e = !1, t = 1) {
  const i = n9(s, e, t);
  return (
    i.group.scale.setScalar(Sl(s, e)),
    { group: i.group, legs: i.legs, head: i.head, tail: i.tail }
  );
}
const cre = 0.45,
  OC = 0.2;
function NC(s, e) {
  const t = new re();
  ((t.name = "disguise"), (t.rotation.order = "YXZ"));
  const i = new re();
  t.add(i);
  let n = [],
    o = null;
  if (s.kind === la.BLOCK) {
    const y = $O(s.id, s.meta);
    ((o = y ? y.clone() : new kt(1, 1, 1)), o.computeBoundingBox());
    const b = o.boundingBox;
    o.translate(0, -b.min.y, 0);
    const S = o.attributes.position.count;
    for (const E of ["blocklight", "skylight"])
      o.getAttribute(E) ||
        o.setAttribute(E, new Dt(new Float32Array(S).fill(1), 1));
    o.getAttribute("color") ||
      o.setAttribute("color", new Dt(new Float32Array(S * 3).fill(1), 3));
    const M = new Q(o, e.chunkMaterial);
    ((M.castShadow = !0), (M.receiveShadow = !0), i.add(M));
  } else if (s.kind === la.ITEM) {
    const y = e2(s.id, 1.6);
    y.castShadow = !0;
    const b = new re();
    b.add(y);
    const S = new zs().setFromObject(y);
    ((y.position.y -= S.min.y), i.add(b));
  } else if (s.kind === la.ANIMAL) {
    const y = o9(s.id);
    ((n = y.legs),
      y.group.traverse((b) => {
        b.isMesh && (b.castShadow = !0);
      }),
      i.add(y.group));
  }
  t.updateMatrixWorld(!0);
  const a = new zs().setFromObject(i),
    r = (y, b) => {
      if (a.max[y] - a.min[y] < b) {
        const M = (a.max[y] + a.min[y]) / 2;
        ((a.min[y] = M - b / 2), (a.max[y] = M + b / 2));
      }
    };
  (r("x", 0.3), r("z", 0.3), r("y", 0.3), (a.min.y = Math.max(0, a.min.y)));
  const l = new k(),
    c = new k();
  let h = 0,
    d = !1,
    u = 0,
    f = OC,
    p = !0,
    m = 0;
  const g = (y, b, S) => {
    if (!o) return;
    const { light: M, sky: E } = e.cellLighting(
      Math.floor(y),
      Math.floor(b),
      Math.floor(S),
    );
    for (const [A, T] of [
      ["blocklight", M],
      ["skylight", E],
    ]) {
      const x = o.getAttribute(A);
      Math.abs(x.array[0] - T) < 0.001 ||
        (x.array.fill(T), (x.needsUpdate = !0));
    }
  };
  return {
    disguise: s,
    root: t,
    box: a,
    get snapped() {
      return d;
    },
    update(y, b, S, M, E, A) {
      const T = M > 0.35 || !E;
      ((h = T ? 0 : h + y), (u += Math.min(M, 8) * y * 2.4));
      const x = 1 - Math.exp(-(T ? 22 : 12) * y);
      if (s.kind === la.BLOCK && h > cre) {
        (c.set(
          Math.floor(b.x) + 0.5,
          Math.floor(b.y + 0.05),
          Math.floor(b.z) + 0.5,
        ),
          p ? l.copy(c) : l.lerp(c, x));
        const R = Math.round(m / (Math.PI / 2)) * (Math.PI / 2);
        ((m += (R - m) * x),
          (d = l.distanceToSquared(c) < 1e-4 && Math.abs(R - m) < 0.001),
          d && (l.copy(c), (m = R)),
          (i.position.y = 0),
          (t.rotation.x = t.rotation.z = 0));
      } else {
        ((d = !1), p ? l.copy(b) : l.lerp(b, x));
        let R = S - m;
        ((R = Math.atan2(Math.sin(R), Math.cos(R))),
          (m += R * (1 - Math.exp(-14 * y))));
        const _ = Math.min(1, M / 4);
        if (s.kind === la.ANIMAL) {
          const C = Math.sin(u * 2.2) * 0.6 * _;
          (n.forEach((P, O) => {
            const B = (O & 1) ^ ((O >> 1) & 1) ? -1 : 1;
            P.rotation.x += (C * B - P.rotation.x) * (1 - Math.exp(-14 * y));
          }),
            (i.position.y = Math.abs(Math.sin(u * 2.2)) * 0.04 * _));
        } else
          ((i.position.y = Math.abs(Math.sin(u * 2.4)) * 0.16 * _),
            (t.rotation.x = -Math.sin(u * 2.4) * 0.08 * _));
      }
      (s.kind === la.ITEM && !T && (i.rotation.y += y * 0.6),
        (p = !1),
        t.position.copy(l),
        (t.rotation.y = m),
        (f += y),
        f >= OC &&
          ((f = 0), o ? g(l.x, l.y + 0.5, l.z) : Pl(t, Il(e, l, A, 0.5))));
    },
    dispose() {
      (t.removeFromParent(), o?.dispose());
    },
  };
}
