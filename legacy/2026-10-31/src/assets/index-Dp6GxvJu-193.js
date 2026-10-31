// index-Dp6GxvJu 193 — math
// Lines 106151-106281 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function VI(n, e = !1, t = 1) {
  const i = WI(n, e, t);
  return (
    i.group.scale.setScalar(Ir(n, e)),
    { group: i.group, legs: i.legs, head: i.head, tail: i.tail }
  );
}
const Zee = 0.45,
  aR = 0.2;
function rR(n, e) {
  const t = new pe();
  ((t.name = "disguise"), (t.rotation.order = "YXZ"));
  const i = new pe();
  t.add(i);
  let s = [],
    o = null;
  if (n.kind === zo.BLOCK) {
    const g = Fk(n.id, n.meta);
    ((o = g ? g.clone() : new Ct(1, 1, 1)), o.computeBoundingBox());
    const b = o.boundingBox;
    o.translate(0, -b.min.y, 0);
    const S = o.attributes.position.count;
    for (const x of ["blocklight", "skylight"])
      o.getAttribute(x) ||
        o.setAttribute(x, new It(new Float32Array(S).fill(1), 1));
    o.getAttribute("color") ||
      o.setAttribute("color", new It(new Float32Array(S * 3).fill(1), 3));
    const M = new le(o, e.chunkMaterial);
    ((M.castShadow = !0), (M.receiveShadow = !0), i.add(M));
  } else if (n.kind === zo.ITEM) {
    const g = p1(n.id, 1.6);
    g.castShadow = !0;
    const b = new pe();
    b.add(g);
    const S = new gn().setFromObject(g);
    ((g.position.y -= S.min.y), i.add(b));
  } else if (n.kind === zo.ANIMAL) {
    const g = VI(n.id);
    ((s = g.legs),
      g.group.traverse((b) => {
        b.isMesh && (b.castShadow = !0);
      }),
      i.add(g.group));
  }
  t.updateMatrixWorld(!0);
  const a = new gn().setFromObject(i),
    r = (g, b) => {
      if (a.max[g] - a.min[g] < b) {
        const M = (a.max[g] + a.min[g]) / 2;
        ((a.min[g] = M - b / 2), (a.max[g] = M + b / 2));
      }
    };
  (r("x", 0.3), r("z", 0.3), r("y", 0.3), (a.min.y = Math.max(0, a.min.y)));
  const l = new k(),
    c = new k();
  let h = 0,
    d = !1,
    u = 0,
    f = aR,
    p = !0,
    m = 0;
  const y = (g, b, S) => {
    if (!o) return;
    const { light: M, sky: x } = e.cellLighting(
      Math.floor(g),
      Math.floor(b),
      Math.floor(S),
    );
    for (const [T, A] of [
      ["blocklight", M],
      ["skylight", x],
    ]) {
      const _ = o.getAttribute(T);
      Math.abs(_.array[0] - A) < 0.001 ||
        (_.array.fill(A), (_.needsUpdate = !0));
    }
  };
  return {
    disguise: n,
    root: t,
    box: a,
    get snapped() {
      return d;
    },
    update(g, b, S, M, x, T) {
      const A = M > 0.35 || !x;
      ((h = A ? 0 : h + g), (u += Math.min(M, 8) * g * 2.4));
      const _ = 1 - Math.exp(-(A ? 22 : 12) * g);
      if (n.kind === zo.BLOCK && h > Zee) {
        (c.set(
          Math.floor(b.x) + 0.5,
          Math.floor(b.y + 0.05),
          Math.floor(b.z) + 0.5,
        ),
          p ? l.copy(c) : l.lerp(c, _));
        const C = Math.round(m / (Math.PI / 2)) * (Math.PI / 2);
        ((m += (C - m) * _),
          (d = l.distanceToSquared(c) < 1e-4 && Math.abs(C - m) < 0.001),
          d && (l.copy(c), (m = C)),
          (i.position.y = 0),
          (t.rotation.x = t.rotation.z = 0));
      } else {
        ((d = !1), p ? l.copy(b) : l.lerp(b, _));
        let C = S - m;
        ((C = Math.atan2(Math.sin(C), Math.cos(C))),
          (m += C * (1 - Math.exp(-14 * g))));
        const R = Math.min(1, M / 4);
        if (n.kind === zo.ANIMAL) {
          const L = Math.sin(u * 2.2) * 0.6 * R;
          (s.forEach((N, D) => {
            const H = (D & 1) ^ ((D >> 1) & 1) ? -1 : 1;
            N.rotation.x += (L * H - N.rotation.x) * (1 - Math.exp(-14 * g));
          }),
            (i.position.y = Math.abs(Math.sin(u * 2.2)) * 0.04 * R));
        } else
          ((i.position.y = Math.abs(Math.sin(u * 2.4)) * 0.16 * R),
            (t.rotation.x = -Math.sin(u * 2.4) * 0.08 * R));
      }
      (n.kind === zo.ITEM && !A && (i.rotation.y += g * 0.6),
        (p = !1),
        t.position.copy(l),
        (t.rotation.y = m),
        (f += g),
        f >= aR &&
          ((f = 0), o ? y(l.x, l.y + 0.5, l.z) : ur(t, dr(e, l, T, 0.5))));
    },
    dispose() {
      (t.removeFromParent(), o == null || o.dispose());
    },
  };
}
