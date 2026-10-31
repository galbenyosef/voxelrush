// index-BeUlFSPp 53 — mag
// Lines 46667-46975 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const q0 = 3.2;
function jm(s) {
  if (s < 0 || s > q0) return 0;
  const e = Math.min(1, s / 0.38) * Math.min(1, (q0 - s) / 0.48);
  return e * e * (3 - 2 * e);
}
const AK = [
    [0, { x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0 }],
    [0.5, { x: -0.16, y: 0.12, z: -0.11, rx: 0.06, ry: -0.6, rz: 0.32 }],
    [1.25, { x: -0.19, y: 0.14, z: -0.15, rx: 0.14, ry: -1.08, rz: 0.46 }],
    [1.9, { x: -0.13, y: 0.16, z: -0.14, rx: -0.04, ry: 0.42, rz: -0.28 }],
    [2.55, { x: -0.09, y: 0.1, z: -0.12, rx: 0.3, ry: 0.16, rz: -0.1 }],
    [q0, { x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0 }],
  ],
  H_ = ["x", "y", "z", "rx", "ry", "rz"],
  V2 = { x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0 },
  TK = {
    461: [
      [0, V2],
      [0.45, { x: -0.12, y: 0.1, z: -0.08, rx: 0.05, ry: -0.78, rz: 0.4 }],
      [1.25, { x: -0.14, y: 0.11, z: -0.1, rx: 0.1, ry: -0.98, rz: 0.55 }],
      [1.75, { x: -0.07, y: 0.09, z: -0.07, rx: 0.32, ry: 0.22, rz: -0.12 }],
      [2.2, { x: -0.07, y: 0.09, z: -0.07, rx: 0.34, ry: 0.26, rz: -0.14 }],
      [2.7, { x: -0.04, y: 0.08, z: -0.07, rx: 0.22, ry: 0.62, rz: -0.5 }],
      [q0, V2],
    ],
    463: [
      [0, V2],
      [0.5, { x: -0.13, y: 0.1, z: -0.09, rx: 0.06, ry: -0.72, rz: 0.3 }],
      [1.25, { x: -0.14, y: 0.1, z: -0.1, rx: 0.1, ry: -0.86, rz: 0.36 }],
      [1.75, { x: -0.1, y: 0.12, z: -0.08, rx: 0.16, ry: 0.26, rz: -0.44 }],
      [2.2, { x: -0.09, y: 0.12, z: -0.08, rx: 0.2, ry: 0.3, rz: -0.48 }],
      [2.65, { x: -0.05, y: 0.08, z: -0.08, rx: 0.24, ry: 0.18, rz: -0.1 }],
      [q0, V2],
    ],
  };
function vO(s, e = { x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0 }, t = 0) {
  for (const m of H_) e[m] = 0;
  if (s <= 0 || s >= q0) return e;
  const i = TK[t] ?? AK;
  let n = 0;
  for (; n < i.length - 2 && s > i[n + 1][0];) n++;
  const [o, a] = i[n],
    [r, l] = i[n + 1],
    c = i[Math.max(0, n - 1)][1],
    h = i[Math.min(i.length - 1, n + 2)][1],
    d = (s - o) / (r - o),
    u = d * d,
    f = u * d;
  for (const m of H_)
    e[m] =
      0.5 *
      (2 * a[m] +
        (-c[m] + l[m]) * d +
        (2 * c[m] - 5 * a[m] + 4 * l[m] - h[m]) * u +
        (-c[m] + 3 * a[m] - 3 * l[m] + h[m]) * f);
  const p = jm(s);
  return (
    (e.y += Math.sin(s * 4.2) * 0.004 * p),
    (e.rz += Math.sin(s * 3.1) * 0.015 * p),
    e
  );
}
function xK(s, e, t = { x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0 }) {
  vO(s, t);
  const i = jm(s);
  return (
    (t.x *= e ? 0.65 : 0.8),
    (t.y += i * (e ? 0.035 : 0.025)),
    (t.z += i * (e ? 0.06 : 0.04)),
    (t.rx += Math.sin(Math.max(0, s - 1.25) * 2) * i * (e ? 0.12 : 0.22)),
    (t.ry *= e ? 0.65 : 0.8),
    (t.rz *= 0.75),
    t
  );
}
const sr = {
    [w.GLOCK]: {
      dmg: 16,
      vehDmg: 2,
      blockDmg: 8,
      rpm: 380,
      mag: 17,
      reload: 1.3,
      range: 100,
    },
    [w.AK47]: {
      dmg: 26,
      vehDmg: 4,
      blockDmg: 12,
      rpm: 600,
      mag: 30,
      reload: 2.1,
      range: 220,
    },
    [w.AWP]: {
      dmg: 110,
      vehDmg: 30,
      blockDmg: 60,
      rpm: 42,
      mag: 5,
      reload: 2.6,
      range: 400,
    },
    [w.DEAGLE]: {
      dmg: 46,
      vehDmg: 6,
      blockDmg: 20,
      rpm: 170,
      mag: 7,
      reload: 1.75,
      range: 150,
    },
    [w.M4A1]: {
      dmg: 21,
      vehDmg: 3,
      blockDmg: 10,
      rpm: 720,
      mag: 30,
      reload: 1.95,
      range: 230,
    },
    [w.VECTOR]: {
      dmg: 13,
      vehDmg: 1,
      blockDmg: 6,
      rpm: 1100,
      mag: 25,
      reload: 1.6,
      range: 80,
    },
    [w.MINIGUN]: {
      dmg: 20,
      vehDmg: 5,
      blockDmg: 11,
      rpm: 1200,
      mag: 200,
      reload: 4.8,
      range: 220,
    },
    [w.SHOTGUN]: {
      dmg: 18,
      vehDmg: 2,
      blockDmg: 5,
      rpm: 85,
      mag: 8,
      reload: 2.4,
      range: 48,
      pellets: 8,
    },
    [w.RPG]: {
      dmg: 0,
      vehDmg: 0,
      blockDmg: 0,
      rpm: 30,
      mag: 1,
      reload: 2,
      range: 0,
    },
    [w.GRENADE_LAUNCHER]: {
      dmg: 0,
      vehDmg: 0,
      blockDmg: 0,
      rpm: 28,
      mag: 4,
      reload: 2.4,
      range: 160,
    },
    [w.GRENADE]: {
      dmg: 0,
      vehDmg: 0,
      blockDmg: 0,
      rpm: 38,
      mag: 0,
      reload: 0,
      range: 0,
    },
  },
  bO = (s) => s === w.GLOCK || s === w.DEAGLE,
  wO = (s) => sr[ai(s) || s],
  t4 = (s) => Math.round((wO(s)?.mag ?? 0) * (so(s).extMag ? O5 : 1));
function Eo(s, e = !1) {
  const t = s[0].index !== null,
    i = new Set(Object.keys(s[0].attributes)),
    n = new Set(Object.keys(s[0].morphAttributes)),
    o = {},
    a = {},
    r = s[0].morphTargetsRelative,
    l = new oi();
  let c = 0;
  for (let h = 0; h < s.length; ++h) {
    const d = s[h];
    let u = 0;
    if (t !== (d.index !== null))
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
            h +
            ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.",
        ),
        null
      );
    for (const f in d.attributes) {
      if (!i.has(f))
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
              h +
              '. All geometries must have compatible attributes; make sure "' +
              f +
              '" attribute exists among all geometries, or in none of them.',
          ),
          null
        );
      (o[f] === void 0 && (o[f] = []), o[f].push(d.attributes[f]), u++);
    }
    if (u !== i.size)
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
            h +
            ". Make sure all geometries have the same number of attributes.",
        ),
        null
      );
    if (r !== d.morphTargetsRelative)
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
            h +
            ". .morphTargetsRelative must be consistent throughout all geometries.",
        ),
        null
      );
    for (const f in d.morphAttributes) {
      if (!n.has(f))
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
              h +
              ".  .morphAttributes must be consistent throughout all geometries.",
          ),
          null
        );
      (a[f] === void 0 && (a[f] = []), a[f].push(d.morphAttributes[f]));
    }
    if (e) {
      let f;
      if (t) f = d.index.count;
      else if (d.attributes.position !== void 0)
        f = d.attributes.position.count;
      else
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
              h +
              ". The geometry must have either an index or a position attribute",
          ),
          null
        );
      (l.addGroup(c, f, h), (c += f));
    }
  }
  if (t) {
    let h = 0;
    const d = [];
    for (let u = 0; u < s.length; ++u) {
      const f = s[u].index;
      for (let p = 0; p < f.count; ++p) d.push(f.getX(p) + h);
      h += s[u].attributes.position.count;
    }
    l.setIndex(d);
  }
  for (const h in o) {
    const d = B_(o[h]);
    if (!d)
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " +
            h +
            " attribute.",
        ),
        null
      );
    l.setAttribute(h, d);
  }
  for (const h in a) {
    const d = a[h][0].length;
    if (d === 0) break;
    ((l.morphAttributes = l.morphAttributes || {}),
      (l.morphAttributes[h] = []));
    for (let u = 0; u < d; ++u) {
      const f = [];
      for (let m = 0; m < a[h].length; ++m) f.push(a[h][m][u]);
      const p = B_(f);
      if (!p)
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " +
              h +
              " morphAttribute.",
          ),
          null
        );
      l.morphAttributes[h].push(p);
    }
  }
  return l;
}
