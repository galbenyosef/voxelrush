// index-BeUlFSPp 38 — createelement
// Lines 39351-39396 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function BV(s, e, t) {
  document.getElementById("front-map-veil")?.remove();
  const i = Pa(s),
    n = document.createElement("div");
  ((n.id = "front-map-veil"),
    n.style.setProperty("--accent", i?.accent ?? "#ffb547"),
    n.style.setProperty("--sky1", i?.sky[0] ?? "#334"),
    n.style.setProperty("--sky2", i?.sky[1] ?? "#112"));
  const o = document.createElement("i");
  ((o.className = "fmv-art"),
    (o.style.backgroundImage = `url(/front-maps/${s}.png)`));
  const a = document.createElement("div");
  a.className = "fmv-box";
  const r = document.createElement("div");
  ((r.className = "fmv-kicker"),
    (r.textContent = I("NEXT BATTLEFIELD", "СЛЕДУЮЩЕЕ ПОЛЕ БОЯ")));
  const l = document.createElement("h2");
  ((l.className = "fmv-title"), (l.textContent = i ? Un(i.name) : e));
  const c = document.createElement("div");
  ((c.className = "fmv-blurb"), (c.textContent = i ? Un(i.blurb) : ""));
  const h = document.createElement("div");
  h.className = "fmv-bar";
  const d = document.createElement("i");
  (h.append(d),
    a.append(r, l, c, h),
    n.append(o, a),
    document.body.append(n),
    requestAnimationFrame(() => n.classList.add("on")));
  const u = performance.now();
  let f = 0;
  const p = () => {
    if (!n.isConnected) return;
    const m = Math.max(0, Math.min(1, t()));
    ((f += (m - f) * 0.25),
      (d.style.transform = `scaleX(${Math.max(0.04, f)})`));
    const g = performance.now() - u;
    if ((m >= 0.999 && g > 1400) || g > 7e3) {
      ((d.style.transform = "scaleX(1)"),
        n.classList.remove("on"),
        setTimeout(() => n.remove(), 450));
      return;
    }
    setTimeout(p, 120);
  };
  p();
}
