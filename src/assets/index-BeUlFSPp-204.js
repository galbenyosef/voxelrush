// index-BeUlFSPp 204 — math
// Lines 109136-109258 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function wae(s) {
  const e = (s.width = 640),
    t = (s.height = 640),
    i = s.getContext("2d"),
    n = i.createRadialGradient(e / 2, t * 0.45, 30, e / 2, t / 2, e * 0.75);
  (n.addColorStop(0, "#3a0a0c"),
    n.addColorStop(0.55, "#120304"),
    n.addColorStop(1, "#000"),
    (i.fillStyle = n),
    i.fillRect(0, 0, e, t),
    i.save(),
    i.beginPath(),
    i.ellipse(e / 2, t * 0.5, e * 0.27, t * 0.44, 0, 0, Math.PI * 2),
    i.clip());
  const o = i.createLinearGradient(0, t * 0.1, 0, t * 0.95);
  (o.addColorStop(0, "#6d6e66"),
    o.addColorStop(0.35, "#c9c6b8"),
    o.addColorStop(0.7, "#8f8b7c"),
    o.addColorStop(1, "#2c2a26"),
    (i.fillStyle = o),
    i.fillRect(0, 0, e, t));
  for (let r = 0; r < 2600; r++) {
    const l = e * (0.2 + Math.random() * 0.6),
      c = t * (0.05 + Math.random() * 0.9),
      h = Math.random() * 0.18;
    ((i.fillStyle =
      Math.random() < 0.5 ? `rgba(40,38,30,${h})` : `rgba(230,226,210,${h})`),
      i.fillRect(l, c, 2 + Math.random() * 3, 2 + Math.random() * 3));
  }
  for (const r of [-1, 1]) {
    const l = i.createRadialGradient(
      e / 2 + r * e * 0.17,
      t * 0.6,
      4,
      e / 2 + r * e * 0.17,
      t * 0.6,
      e * 0.13,
    );
    (l.addColorStop(0, "rgba(20,18,15,.75)"),
      l.addColorStop(1, "rgba(20,18,15,0)"),
      (i.fillStyle = l),
      i.fillRect(0, 0, e, t));
  }
  ((i.strokeStyle = "rgba(25,20,18,.7)"), (i.lineWidth = 2));
  for (let r = 0; r < 14; r++) {
    let l = e * (0.3 + Math.random() * 0.4),
      c = t * (0.1 + Math.random() * 0.3);
    (i.beginPath(), i.moveTo(l, c));
    for (let h = 0; h < 6; h++)
      ((l += (Math.random() - 0.5) * 26),
        (c += 10 + Math.random() * 18),
        i.lineTo(l, c));
    i.stroke();
  }
  i.restore();
  for (const r of [0.4, 0.6]) {
    ((i.fillStyle = "#050304"),
      i.beginPath(),
      i.ellipse(
        e * r,
        t * 0.37,
        e * 0.06,
        t * 0.075,
        r < 0.5 ? 0.3 : -0.3,
        0,
        Math.PI * 2,
      ),
      i.fill());
    for (let l = 0; l < 3; l++)
      i.fillRect(
        e * r - 10 + l * 8,
        t * 0.4,
        4,
        t * (0.07 + Math.random() * 0.1),
      );
    ((i.fillStyle = "#f4f8ff"),
      i.beginPath(),
      i.arc(e * r, t * 0.37, 4, 0, Math.PI * 2),
      i.fill());
  }
  ((i.fillStyle = "#0a0706"),
    i.beginPath(),
    i.moveTo(e * 0.5, t * 0.47),
    i.lineTo(e * 0.47, t * 0.55),
    i.lineTo(e * 0.53, t * 0.55),
    i.fill(),
    (i.fillStyle = "#040202"),
    i.beginPath(),
    i.ellipse(e * 0.5, t * 0.74, e * 0.1, t * 0.15, 0, 0, Math.PI * 2),
    i.fill(),
    (i.fillStyle = "#d9d2bd"));
  for (let r = 0; r < 16; r++) {
    const l = (r / 16) * Math.PI * 2,
      c = e * 0.1,
      h = t * 0.15,
      d = e * 0.5 + Math.cos(l) * c,
      u = t * 0.74 + Math.sin(l) * h,
      f = e * 0.5 + Math.cos(l) * c * 0.72,
      p = t * 0.74 + Math.sin(l) * h * 0.78;
    (i.beginPath(),
      i.moveTo(d - Math.sin(l) * 6, u + Math.cos(l) * 6),
      i.lineTo(d + Math.sin(l) * 6, u - Math.cos(l) * 6),
      i.lineTo(f, p),
      i.fill());
  }
  ((i.strokeStyle = "rgba(120,10,12,.8)"), (i.lineWidth = 4));
  for (let r = 0; r < 9; r++) {
    const l = e * (0.32 + Math.random() * 0.36);
    (i.beginPath(),
      i.moveTo(l, t * 0.08),
      i.lineTo(
        l + (Math.random() - 0.5) * 12,
        t * (0.16 + Math.random() * 0.22),
      ),
      i.stroke());
  }
  const a = i.getImageData(0, 0, e, t);
  for (let r = 0; r < a.data.length; r += 4) {
    const l = (Math.random() - 0.5) * 38;
    ((a.data[r] += l), (a.data[r + 1] += l), (a.data[r + 2] += l));
  }
  i.putImageData(a, 0, 0);
}
