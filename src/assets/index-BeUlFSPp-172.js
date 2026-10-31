// index-BeUlFSPp 172 — append
// Lines 97068-97167 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function cne(s, e, t, i) {
  const n = e.dataset.cls,
    o = Va[n],
    a = e.querySelector(".fd-cname");
  ((a.textContent = Un(o.name)), (a.title = Un(o.name)));
  const r = e.querySelector(".fd-gun"),
    l = o.show?.item ?? z5(n, t).items[0]?.id ?? 0;
  r.dataset.item !== String(l) &&
    ((r.dataset.item = String(l)), r.replaceChildren(gE(s, l, "fd-gunicon")));
  const c = e.querySelector(".fd-count");
  ((c.textContent = i > 0 ? `×${i}` : ""),
    (c.title = i > 0 ? I(`${i} on your side`, `У вашей стороны: ${i}`) : ""),
    e.setAttribute(
      "aria-label",
      `${Un(o.name)} — ${Un(o.role)}${i > 0 ? ` (${i})` : ""}`,
    ));
}
class hne {
  constructor(e, t) {
    ((this.deps = e),
      (this.glyphs = t),
      this.root.setAttribute("aria-live", "polite"));
  }
  root = Ln("section", "fd-detail");
  key = "";
  render(e, t, i) {
    const n = `${e}|${t}|${i}`;
    if (n === this.key) return;
    this.key = n;
    const o = Va[e],
      a = z5(e, t),
      r = o.show?.item ?? a.items[0]?.id ?? 0,
      l = Ln("header", "fdd-head"),
      c = Ln("div", "fdd-title");
    (c.append(Ln("b", "fdd-name", Un(o.name)), Ln("span", "fdd-tag", rne(e))),
      l.append($N(this.glyphs[e], "fdd-glyph"), c));
    const h = Ln("div", "fdd-main");
    h.append(
      gE(this.deps, r, "fdd-gunicon"),
      Ln("b", "fdd-gunname", mE(this.deps, r)),
    );
    const d = Ln("ul", "fdd-kit");
    for (const p of o.show ? [] : a.items.slice(1)) {
      if (sne.has(p.id)) continue;
      const m = Ln("li");
      (m.append(
        gE(this.deps, p.id, "fdd-icon"),
        Ln("span", "fdd-iname", mE(this.deps, p.id)),
      ),
        p.count > 1 && m.append(Ln("small", "fdd-n", `×${p.count}`)),
        d.append(m));
    }
    const u = ane(e, t),
      f = Ln("div", "fdd-stats");
    for (const [p, m] of [
      [I("Firepower", "Огневая мощь"), u.fire],
      [I("Range", "Дальность"), u.range],
      [I("Armour", "Броня"), u.armour],
    ]) {
      const g = Ln("div", "fdd-stat"),
        y = Ln("i", "fdd-bar"),
        b = Ln("i", "fdd-fill");
      (b.style.setProperty("--v", String(Math.round(m * 100) / 100)),
        y.append(b),
        g.append(Ln("span", "fdd-slabel", p), y),
        f.append(g));
    }
    this.root.replaceChildren(l, h, d, f);
  }
}
const dt = (s, e, t) => {
    const i = document.createElement(s);
    return (e && (i.className = e), t !== void 0 && (i.textContent = t), i);
  },
  jk = (s) =>
    `${Math.floor(s / 60)}:${String(Math.max(0, Math.floor(s % 60))).padStart(2, "0")}`,
  Xk = {
    grenadier:
      "M3 14h9l2-3h5a2 2 0 0 1 0 4h-4l-1 2H8l-1 3H4l1-3H3zM15 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0",
    assault: "M3 13h11l2-2h5v3h-3l-1 2H9l-1 3H5l1-3H3z",
    medic: "M9 3h6v6h6v6h-6v6H9v-6H3V9h6z",
    engineer:
      "M14.5 3a5 5 0 0 0-4.6 6.9L3 16.8 7.2 21l6.9-6.9A5 5 0 0 0 21 9.5l-3 3-3-1-1-3z",
    recon: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 3v3m0 4v3m-5-5h3m4 0h3",
    support: "M2 12h12l1-2h4v4h-4l-1-2M6 12v4m4-4v5M16 8l5-3",
    rifleman: "M3 13h11l2-2h5v3h-3l-1 2H9l-1 3H5l1-3H3z",
    marksman: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 3v3m0 4v3m-5-5h3m4 0h3",
    breacher: "M2 11h15l2-1h3v3h-6l-1 1H9l-2 4H4l1-4H2zM8 13h7",
    heavy: "M2 12h12l1-2h4v4h-4l-1-2M6 12v4m4-4v5M16 8l5-3",
    demo: "M3 14h9l2-3h5a2 2 0 0 1 0 4h-4l-1 2H8l-1 3H4l1-3H3zM15 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0",
    operator:
      "M2 13h12l1-1h6v3h-4l-1 1H9l-1 3H5l1-3H2zM8 9h4v3H8zM14 15v3h2v-3",
    raider: "M3 11h16v3h-5l-2 3v4h-3v-4l-1-1H6l-1 3H3z",
    contender:
      "M3 15l11-9c2-1.5 4.5-2 7-2-.5 2.5-1.5 4.5-3 6l-6 5H3zM12 15l2 2-2 2-2-2zm1 3l4 4",
    pilot:
      "M12 2l1.6 6 7.4 6v2l-7.4-2.4L13 18l2.5 2v1.5L12 20.5 8.5 21.5V20L11 18l-.6-4.4L3 16v-2l7.4-6z",
    tanker:
      "M3 9h7l1-2h5v2h6v2h-6v1H6v1h13l2 3-2 2H5l-2-2 1-3h2v-1H3zM7 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0m4 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0m4 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0",
  };
