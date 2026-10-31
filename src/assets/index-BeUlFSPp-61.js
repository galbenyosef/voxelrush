// index-BeUlFSPp 61 — math
// Lines 49075-49316 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function LO(s) {
  const e = sR.get(s);
  if (e) return e.clone();
  const t = La(s);
  if (!t) return GA();
  const i = [],
    n = (h, d, u, f, p) => {
      h.translate(d, u, f);
      const m = new Ge(p),
        g = new Float32Array(h.attributes.position.count * 3);
      for (let y = 0; y < g.length; y += 3)
        ((g[y] = m.r), (g[y + 1] = m.g), (g[y + 2] = m.b));
      (h.setAttribute("color", new qt(g, 3)), i.push(h));
    },
    o = (h, d, u, f, p, m, g) => n(new kt(f, p, m), h, d, u, g),
    a = (h, d, u, f, p, m) => n(new Tt(f, f, p, 16), h, d, u, m);
  if (t.shape === "stick" || t.shape === "bundle") {
    const h = t.shape === "stick" ? 1 : 7;
    for (let d = 0; d < h; d++) {
      const u = (d * Math.PI) / 3,
        f = d === 6 ? 0 : 0.105;
      a(
        h === 1 ? 0 : Math.cos(u) * f,
        0,
        h === 1 ? 0 : Math.sin(u) * f,
        0.065,
        0.48,
        t.color,
      );
    }
    for (const d of [-0.14, 0.14])
      o(0, d, 0, h === 1 ? 0.15 : 0.36, 0.045, h === 1 ? 0.15 : 0.34, 3357500);
    a(0, 0.3, 0, 0.012, 0.14, 13809781);
  } else if (t.shape === "case") {
    o(0, 0, 0, 0.62, 0.38, 0.18, t.color);
    for (const h of [-0.22, 0.22]) o(h, 0, 0, 0.055, 0.4, 0.2, 3161399);
  } else if (t.shape === "sphere") {
    n(new ws(0.26, 16, 12), 0, 0, 0, t.color);
    for (const h of [-0.12, 0, 0.12])
      n(
        new Gn(Math.sqrt(0.26 ** 2 - h * h), 0.012, 4, 24).rotateX(Math.PI / 2),
        0,
        h,
        0,
        2702129,
      );
  } else {
    const h = t.shape === "nuclear" ? 0.3 : 0.23,
      d = t.shape === "bomb" ? 0.85 : 0.62;
    a(0, 0, 0, h, d, t.color);
    for (const u of [-d * 0.38, d * 0.38]) a(0, u, 0, h + 0.015, 0.05, 3029307);
    if (t.shape === "bomb" || t.shape === "nuclear") {
      n(new ws(h, 16, 10).scale(1, 1.3, 1), 0, d / 2, 0, t.color);
      for (let u = 0; u < 4; u++)
        n(
          new kt(0.06, 0.25, 0.54).rotateY((u * Math.PI) / 2),
          0,
          -d * 0.5,
          0,
          3161925,
        );
    }
    if (t.shape === "capsule")
      for (const u of [-0.17, 0.17]) a(u, 0, 0.16, 0.09, 0.55, 7108199);
    if (
      (o(0, 0.07, h + 0.01, 0.22, 0.17, 0.02, 14991957),
      o(0, 0.07, h + 0.025, 0.04, 0.12, 0.01, 2174256),
      t.shape === "nuclear")
    )
      for (let u = 0; u < 3; u++)
        n(
          new Bl(0.055, 3).rotateZ(u * 2.094),
          Math.sin(u * 2.094) * 0.07,
          0.07 + Math.cos(u * 2.094) * 0.07,
          h + 0.03,
          2239017,
        );
  }
  (o(0, 0, 0.18, 0.16, 0.12, 0.05, 2108978),
    o(-0.02, 0.01, 0.212, 0.08, 0.035, 0.015, 10410949),
    o(0.055, -0.035, 0.214, 0.017, 0.017, 0.012, 15690064),
    a(0.1, 0.24, 0.12, 0.009, 0.16, 2436140));
  const r = Eo(i);
  for (const h of i) h.dispose();
  const l = new re(),
    c = new Q(r, new Pi({ vertexColors: !0 }));
  return ((c.castShadow = !0), l.add(c), sR.set(s, l), l.clone());
}
const nR = new Map();
function IO(s, e) {
  let t = nR.get(e.id);
  if (!t) {
    ((t = document.createElement("canvas")), (t.width = t.height = 160));
    const i = t.getContext("2d");
    i.scale(4, 4);
    const n = i.createLinearGradient(3, 2, 37, 38);
    (n.addColorStop(0, "#2465a2"),
      n.addColorStop(1, "#0c284e"),
      (i.fillStyle = "#061325"),
      i.fillRect(5, 4, 32, 35),
      (i.fillStyle = n),
      i.beginPath(),
      i.moveTo(3, 2),
      i.lineTo(29, 2),
      i.lineTo(36, 9),
      i.lineTo(36, 37),
      i.lineTo(3, 37),
      i.closePath(),
      i.fill(),
      (i.strokeStyle = "#7cb7dc"),
      (i.lineWidth = 0.6),
      i.stroke(),
      i.save(),
      i.beginPath(),
      i.rect(4, 4, 30, 31),
      i.clip(),
      (i.strokeStyle = "#5db6ef33"),
      (i.lineWidth = 0.3));
    for (let m = 4; m < 37; m += 3)
      (i.beginPath(),
        i.moveTo(m, 3),
        i.lineTo(m, 36),
        i.moveTo(3, m),
        i.lineTo(36, m),
        i.stroke());
    (i.restore(),
      (i.fillStyle = "#b9e3f6"),
      i.beginPath(),
      i.moveTo(29, 2),
      i.lineTo(29, 9),
      i.lineTo(36, 9),
      i.fill());
    const o = e.blocks.filter((m) => m.id !== v.AIR && m.y >= 0),
      a = new Set(o.map((m) => `${m.x},${m.y},${m.z}`)),
      r = o.filter(
        (m) =>
          !a.has(`${m.x},${m.y + 1},${m.z}`) ||
          !a.has(`${m.x + 1},${m.y},${m.z}`) ||
          !a.has(`${m.x},${m.y},${m.z + 1}`),
      ),
      l = (m, g, y) => [(m - y) * 0.86, (m + y) * 0.42 - g],
      c = r.flatMap((m) => [l(m.x, m.y, m.z), l(m.x + 1, m.y + 1, m.z + 1)]),
      h = Math.min(...c.map((m) => m[0])),
      d = Math.max(...c.map((m) => m[0])),
      u = Math.min(...c.map((m) => m[1])),
      f = Math.max(...c.map((m) => m[1])),
      p = Math.min(28 / (d - h + 2), 23 / (f - u + 2));
    (i.save(),
      i.translate(20 - ((h + d) * p) / 2, 20 - ((u + f) * p) / 2),
      i.scale(p, p),
      r.sort((m, g) => m.x + m.z - g.x - g.z || m.y - g.y));
    for (const m of r) {
      const g = (b, S) => {
          (i.beginPath(),
            b.forEach(([M, E, A], T) => {
              const [x, R] = l(m.x + M, m.y + E, m.z + A);
              T ? i.lineTo(x, R) : i.moveTo(x, R);
            }),
            i.closePath(),
            (i.fillStyle = S),
            i.fill());
        },
        y = m.id === v.SANDSTONE_SMOOTH || m.id === v.GLOWSTONE;
      (g(
        [
          [1, 0, 0],
          [1, 0, 1],
          [1, 1, 1],
          [1, 1, 0],
        ],
        "#3982ad",
      ),
        g(
          [
            [0, 0, 1],
            [1, 0, 1],
            [1, 1, 1],
            [0, 1, 1],
          ],
          "#70bdd5",
        ),
        g(
          [
            [0, 1, 0],
            [1, 1, 0],
            [1, 1, 1],
            [0, 1, 1],
          ],
          y ? "#fff4c1" : e.color,
        ));
    }
    (i.restore(),
      (i.fillStyle = e.color),
      i.fillRect(5, 33, 12, 2),
      (i.fillStyle = "#d3efff"),
      (i.font = "bold 3px monospace"),
      i.fillText(`BP-${String(e.id - 399).padStart(2, "0")}`, 22, 35),
      nR.set(e.id, t));
  }
  s.drawImage(t, 0, 0, 40, 40);
}
function wY(s) {
  const e = new re(),
    t = document.createElement("canvas");
  t.width = t.height = 160;
  const i = t.getContext("2d");
  (i.scale(4, 4), IO(i, s));
  const n = new Si(t);
  n.colorSpace = Ii;
  const o = new Q(new kt(0.36, 0.43, 0.025), [
    new oo({ color: 2315640 }),
    new oo({ color: 2315640 }),
    new oo({ color: 11259353 }),
    new oo({ color: 11259353 }),
    new Zt({ map: n }),
    new Zt({ map: n }),
  ]);
  return (
    e.add(o),
    (e.rotation.x = -0.18),
    (e.rotation.y = -0.15),
    o.scale.setScalar(0.72),
    e
  );
}
function oR(s) {
  const e = new Set();
  for (const i of s)
    i.id !== v.AIR && le[i.id]?.solid && e.add(`${i.x},${i.y},${i.z}`);
  const t = [];
  for (const i of e) {
    const [n, o, a] = i.split(",").map(Number);
    (!e.has(`${n + 1},${o},${a}`) ||
      !e.has(`${n - 1},${o},${a}`) ||
      !e.has(`${n},${o + 1},${a}`) ||
      !e.has(`${n},${o - 1},${a}`) ||
      !e.has(`${n},${o},${a + 1}`) ||
      !e.has(`${n},${o},${a - 1}`)) &&
      t.push({ x: n, y: o, z: a });
  }
  return t;
}
