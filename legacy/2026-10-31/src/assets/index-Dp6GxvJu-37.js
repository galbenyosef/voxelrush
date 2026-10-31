// index-Dp6GxvJu 37 — math
// Lines 39773-40059 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function qS(n = !1) {
  const e = new pe(),
    t = [],
    i = (a, r, l, c, h, d, u) => {
      const f = new Ct(c, h, d);
      f.translate(a, r, l);
      const p = new ze(u),
        m = new Float32Array(f.attributes.position.count * 3);
      for (let y = 0; y < m.length; y += 3)
        ((m[y] = p.r), (m[y + 1] = p.g), (m[y + 2] = p.b));
      (f.setAttribute("color", new oi(m, 3)), t.push(f));
    };
  if (n)
    (i(0, 0, 0, 0.25, 0.38, 0.12, 3227203),
      i(0, 0.055, 0.067, 0.19, 0.12, 0.02, 1058082),
      i(-0.018, 0.058, 0.08, 0.11, 0.018, 0.008, 10284204),
      i(0.065, -0.1, 0.085, 0.065, 0.065, 0.03, 14373695),
      i(-0.075, -0.1, 0.075, 0.04, 0.05, 0.02, 12694936),
      i(0.08, 0.32, 0, 0.018, 0.3, 0.018, 2633009));
  else {
    (i(-0.095, 0, 0, 0.18, 0.28, 0.1, 10851940),
      i(0.095, 0, 0, 0.18, 0.28, 0.1, 11707511));
    for (const a of [-0.12, 0.12]) i(a, 0, 0.008, 0.035, 0.295, 0.116, 4278586);
    (i(0, 0.012, 0.067, 0.16, 0.17, 0.035, 2703159),
      i(0, 0.037, 0.091, 0.112, 0.045, 0.012, 1516323),
      i(-0.027, 0.04, 0.1, 0.052, 0.009, 0.008, 12049825),
      i(0.067, 0.106, 0.072, 0.015, 0.065, 0.015, 12931387),
      i(0.043, 0.126, 0.073, 0.055, 0.012, 0.014, 12931387),
      i(-0.06, -0.078, 0.077, 0.012, 0.06, 0.013, 14072408),
      i(-0.024, -0.106, 0.077, 0.08, 0.012, 0.013, 14072408));
    for (const a of [-0.064, 0.064])
      for (const r of [-0.055, 0.08])
        i(a, r, 0.09, 0.011, 0.011, 0.007, 11055521);
    i(0, -0.042, 0.094, 0.021, 0.014, 0.01, 16737865);
  }
  const s = no(t);
  for (const a of t) a.dispose();
  const o = new le(s, new gi({ vertexColors: !0 }));
  return ((o.castShadow = !0), e.add(o), e);
}
const kT = new Map();
function Mk(n) {
  const e = kT.get(n);
  if (e) return e.clone();
  const t = aa(n);
  if (!t) return qS();
  const i = [],
    s = (h, d, u, f, p) => {
      h.translate(d, u, f);
      const m = new ze(p),
        y = new Float32Array(h.attributes.position.count * 3);
      for (let g = 0; g < y.length; g += 3)
        ((y[g] = m.r), (y[g + 1] = m.g), (y[g + 2] = m.b));
      (h.setAttribute("color", new oi(y, 3)), i.push(h));
    },
    o = (h, d, u, f, p, m, y) => s(new Ct(f, p, m), h, d, u, y),
    a = (h, d, u, f, p, m) => s(new xt(f, f, p, 16), h, d, u, m);
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
    s(new mn(0.26, 16, 12), 0, 0, 0, t.color);
    for (const h of [-0.12, 0, 0.12])
      s(
        new xs(Math.sqrt(0.26 ** 2 - h * h), 0.012, 4, 24).rotateX(Math.PI / 2),
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
      s(new mn(h, 16, 10).scale(1, 1.3, 1), 0, d / 2, 0, t.color);
      for (let u = 0; u < 4; u++)
        s(
          new Ct(0.06, 0.25, 0.54).rotateY((u * Math.PI) / 2),
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
        s(
          new Kr(0.055, 3).rotateZ(u * 2.094),
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
  const r = no(i);
  for (const h of i) h.dispose();
  const l = new pe(),
    c = new le(r, new gi({ vertexColors: !0 }));
  return ((c.castShadow = !0), l.add(c), kT.set(n, l), l.clone());
}
const LT = new Map();
function Sk(n, e) {
  let t = LT.get(e.id);
  if (!t) {
    ((t = document.createElement("canvas")), (t.width = t.height = 160));
    const i = t.getContext("2d");
    i.scale(4, 4);
    const s = i.createLinearGradient(3, 2, 37, 38);
    (s.addColorStop(0, "#2465a2"),
      s.addColorStop(1, "#0c284e"),
      (i.fillStyle = "#061325"),
      i.fillRect(5, 4, 32, 35),
      (i.fillStyle = s),
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
    const o = e.blocks.filter((m) => m.id !== BLOCK.AIR && m.y >= 0),
      a = new Set(o.map((m) => `${m.x},${m.y},${m.z}`)),
      r = o.filter(
        (m) =>
          !a.has(`${m.x},${m.y + 1},${m.z}`) ||
          !a.has(`${m.x + 1},${m.y},${m.z}`) ||
          !a.has(`${m.x},${m.y},${m.z + 1}`),
      ),
      l = (m, y, g) => [(m - g) * 0.86, (m + g) * 0.42 - y],
      c = r.flatMap((m) => [l(m.x, m.y, m.z), l(m.x + 1, m.y + 1, m.z + 1)]),
      h = Math.min(...c.map((m) => m[0])),
      d = Math.max(...c.map((m) => m[0])),
      u = Math.min(...c.map((m) => m[1])),
      f = Math.max(...c.map((m) => m[1])),
      p = Math.min(28 / (d - h + 2), 23 / (f - u + 2));
    (i.save(),
      i.translate(20 - ((h + d) * p) / 2, 20 - ((u + f) * p) / 2),
      i.scale(p, p),
      r.sort((m, y) => m.x + m.z - y.x - y.z || m.y - y.y));
    for (const m of r) {
      const y = (b, S) => {
          (i.beginPath(),
            b.forEach(([M, x, T], A) => {
              const [_, C] = l(m.x + M, m.y + x, m.z + T);
              A ? i.lineTo(_, C) : i.moveTo(_, C);
            }),
            i.closePath(),
            (i.fillStyle = S),
            i.fill());
        },
        g = m.id === BLOCK.SANDSTONE_SMOOTH || m.id === BLOCK.GLOWSTONE;
      (y(
        [
          [1, 0, 0],
          [1, 0, 1],
          [1, 1, 1],
          [1, 1, 0],
        ],
        "#3982ad",
      ),
        y(
          [
            [0, 0, 1],
            [1, 0, 1],
            [1, 1, 1],
            [0, 1, 1],
          ],
          "#70bdd5",
        ),
        y(
          [
            [0, 1, 0],
            [1, 1, 0],
            [1, 1, 1],
            [0, 1, 1],
          ],
          g ? "#fff4c1" : e.color,
        ));
    }
    (i.restore(),
      (i.fillStyle = e.color),
      i.fillRect(5, 33, 12, 2),
      (i.fillStyle = "#d3efff"),
      (i.font = "bold 3px monospace"),
      i.fillText(`BP-${String(e.id - 399).padStart(2, "0")}`, 22, 35),
      LT.set(e.id, t));
  }
  n.drawImage(t, 0, 0, 40, 40);
}
function fG(n) {
  const e = new pe(),
    t = document.createElement("canvas");
  t.width = t.height = 160;
  const i = t.getContext("2d");
  (i.scale(4, 4), Sk(i, n));
  const s = new bi(t);
  s.colorSpace = vi;
  const o = new le(new Ct(0.36, 0.43, 0.025), [
    new Us({ color: 2315640 }),
    new Us({ color: 2315640 }),
    new Us({ color: 11259353 }),
    new Us({ color: 11259353 }),
    new qt({ map: s }),
    new qt({ map: s }),
  ]);
  return (
    e.add(o),
    (e.rotation.x = -0.18),
    (e.rotation.y = -0.15),
    o.scale.setScalar(0.72),
    e
  );
}
function IT(n) {
  var i;
  const e = new Set();
  for (const s of n)
    s.id !== BLOCK.AIR &&
      (i = BLOCKS[s.id]) != null &&
      i.solid &&
      e.add(`${s.x},${s.y},${s.z}`);
  const t = [];
  for (const s of e) {
    const [o, a, r] = s.split(",").map(Number);
    (!e.has(`${o + 1},${a},${r}`) ||
      !e.has(`${o - 1},${a},${r}`) ||
      !e.has(`${o},${a + 1},${r}`) ||
      !e.has(`${o},${a - 1},${r}`) ||
      !e.has(`${o},${a},${r + 1}`) ||
      !e.has(`${o},${a},${r - 1}`)) &&
      t.push({ x: o, y: a, z: r });
  }
  return t;
}
