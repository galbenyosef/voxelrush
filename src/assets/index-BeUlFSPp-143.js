// index-BeUlFSPp 143 — size
// Lines 80672-81005 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const qte = ["settings", "tab", "chat", "shop", "inventory"],
  Kte = [
    "vision",
    "flashlight",
    "headlights",
    "camera",
    "cargo",
    "chute",
    "driver",
    "toolmode",
  ],
  Ck = {
    landscape: {
      fire: { corner: "br", dx: 118, dy: 128, size: 80 },
      use: { corner: "br", dx: 40, dy: 200, size: 52 },
      jump: { corner: "br", dx: 40, dy: 66, size: 58 },
      crouch: { corner: "br", dx: 118, dy: 40, size: 50 },
      prone: { corner: "br", dx: 184, dy: 36, size: 46 },
      aim: { corner: "br", dx: 214, dy: 124, size: 56 },
      reload: { corner: "br", dx: 198, dy: 206, size: 46 },
      sprint: { corner: "bl", dx: 176, dy: 130, size: 50 },
      stick: { corner: "bl", dx: 78, dy: 84, size: 120 },
    },
    portrait: {
      fire: { corner: "br", dx: 78, dy: 216, size: 84 },
      use: { corner: "br", dx: 40, dy: 316, size: 52 },
      jump: { corner: "br", dx: 40, dy: 122, size: 58 },
      crouch: { corner: "br", dx: 108, dy: 106, size: 52 },
      prone: { corner: "br", dx: 172, dy: 100, size: 46 },
      aim: { corner: "br", dx: 170, dy: 190, size: 56 },
      reload: { corner: "br", dx: 162, dy: 272, size: 46 },
      sprint: { corner: "bl", dx: 132, dy: 268, size: 50 },
      stick: { corner: "bl", dx: 76, dy: 172, size: 120 },
    },
    portraitShort: {
      fire: { corner: "br", dx: 80, dy: 180, size: 74 },
      use: { corner: "br", dx: 38, dy: 262, size: 46 },
      jump: { corner: "br", dx: 40, dy: 104, size: 54 },
      crouch: { corner: "br", dx: 104, dy: 96, size: 46 },
      prone: { corner: "br", dx: 160, dy: 92, size: 42 },
      aim: { corner: "br", dx: 160, dy: 168, size: 50 },
      reload: { corner: "br", dx: 150, dy: 230, size: 42 },
      sprint: { corner: "bl", dx: 148, dy: 214, size: 44 },
      stick: { corner: "bl", dx: 70, dy: 140, size: 104 },
    },
  },
  Yte = (s, e) => s === "portrait" && e < 700,
  jte = () => r3() === "portrait" && innerHeight < 480,
  r3 = () => (innerHeight >= innerWidth ? "portrait" : "landscape");
function f1(s = r3()) {
  return s === "portrait" ? Y.mobileLayoutPortrait : Y.mobileLayout;
}
let Up = null;
function Xte() {
  Up ||
    ((Up = document.createElement("div")),
    (Up.style.cssText =
      "position:fixed;inset:0;visibility:hidden;pointer-events:none;padding:var(--safe-top,0px) var(--safe-right,0px) var(--safe-bottom,0px) var(--safe-left,0px)"),
    document.body.append(Up));
  const s = getComputedStyle(Up);
  return {
    t: parseFloat(s.paddingTop) || 0,
    r: parseFloat(s.paddingRight) || 0,
    b: parseFloat(s.paddingBottom) || 0,
    l: parseFloat(s.paddingLeft) || 0,
  };
}
const Ih = (s) =>
  document.getElementById(
    s === "map" ? "minimap" : s === "stick" ? "mobile-stick-zone" : `mob${s}`,
  );
let Lk = "";
function Rg(s, e = !1) {
  const t = new Set(s),
    i = r3(),
    n = innerWidth,
    o = innerHeight,
    a = f1(i),
    r = Y.mobileLabels || Y.mobileLayoutEdit,
    l = `${i}|${n}x${o}|${[...t].sort().join(",")}|${JSON.stringify(a)}|${Y.mobileLayoutEdit}|${r}`;
  if (!e && l === Lk) return;
  Lk = l;
  const c = Xte(),
    h = Math.max(0.84, Math.min(1.22, Math.min(n, o) / 390)),
    d = 8,
    u = (be, oe, he, Ie, ve = !1) => {
      (ve
        ? ((be.style.left = `${oe - Ie / 2}px`),
          (be.style.top = `${he - Ie / 2}px`),
          (be.style.bottom = "auto"))
        : ((be.style.left = `${oe}px`), (be.style.top = `${he}px`)),
        be.style.setProperty("--btn-size", `${Math.round(Ie)}px`));
    },
    f = (be, oe) => {
      const he = a[oe];
      return (
        (be.dataset.auto = he ? "0" : "1"),
        be.style.removeProperty("--btn-scale"),
        he
          ? ((be.style.left = `${he.x}%`),
            (be.style.top = `${he.y}%`),
            oe === "mobile-stick-zone" && (be.style.bottom = "auto"),
            oe === "minimap" &&
              ((be.style.right = "auto"),
              (be.style.transform =
                "translate(-50%, -50%) scale(var(--btn-scale, 1))")),
            he.s !== void 0 &&
              be.style.setProperty("--btn-scale", String(he.s)),
            !0)
          : (oe === "minimap" &&
              (be.style.left =
                be.style.top =
                be.style.right =
                be.style.transform =
                  ""),
            !1)
      );
    },
    p = (be) => ({
      x: be.corner === "br" ? n - c.r - be.dx * h : c.l + be.dx * h,
      y: o - c.b - be.dy * h,
      size: be.size * h,
    }),
    m = Yte(i, o),
    g = m ? Ck.portraitShort : Ck[i],
    y = [];
  for (const be of [
    "fire",
    "use",
    "jump",
    "crouch",
    "prone",
    "aim",
    "reload",
    "sprint",
  ])
    y.push([be, g[be]]);
  const b = [];
  (t.has("reload") ? b.push("rocket") : y.push(["rocket", g.reload]),
    t.has("prone") ? b.push("bomb") : y.push(["bomb", g.prone]));
  for (const [be, oe] of y) {
    const he = Ih(be);
    if (!he || f(he, he.id)) continue;
    const Ie = p(oe);
    u(he, Ie.x, Ie.y, Ie.size);
  }
  const S = Ih("stick");
  if (S && !f(S, S.id)) {
    const be = p(g.stick);
    (u(S, be.x, be.y, g.stick.size, !0),
      S.style.setProperty("--btn-scale", String(h)));
  }
  const M = Ih("map");
  M && f(M, "minimap");
  const E = M?.getBoundingClientRect(),
    A = E && E.width ? E.left : n - c.r - d - 88,
    T = E && E.height ? E.bottom : c.t + d + 88,
    x = E && E.width ? E.left + E.width / 2 : n - c.r - d - 44,
    R = Math.round((i === "portrait" ? 44 : 42) * Math.min(h, 1.1)),
    _ = r ? 10 : 6,
    C = R + (r ? 11 : 6),
    P = [],
    O = p(g.use).y - p(g.use).size / 2 - 10;
  if (i === "portrait") {
    for (let be = 0; be < 3; be++) {
      const oe = be && !Y.mobileLayoutEdit && !m ? 4 * C : 0;
      for (let he = T + _ + R / 2 + oe; he + R / 2 <= O; he += C)
        P.push({ x: x - be * (R + _), y: he });
    }
    if (!P.length) {
      const be = p(g.use),
        oe = T + _ + R / 2;
      for (
        let he = be.x - be.size / 2 - _ - R / 2;
        he - R / 2 >= c.l + 150;
        he -= R + _
      )
        P.push({ x: he, y: oe });
    }
  } else {
    const be = A - d;
    for (let oe = 0; oe < 2; oe++)
      for (let he = 2; he >= 0; he--)
        P.push({ x: be - R / 2 - he * (R + _), y: c.t + d + R / 2 + oe * C });
    for (let oe = T + _ + R / 2; oe + R / 2 <= O; oe += C) P.push({ x, y: oe });
    for (let oe = 2; oe < 4; oe++)
      for (let he = 0; he < 10; he++) {
        const Ie = {
            x: be - R / 2 - he * (R + _),
            y: c.t + d + oe * C + R / 2,
          },
          ve = Y.mobileLayoutEdit ? c.l + n * 0.33 + 16 : n / 2 + 40;
        Ie.x - R / 2 > ve && Ie.y + R / 2 <= O && P.push(Ie);
      }
  }
  let B = 0,
    H = 1 / 0,
    D = 1 / 0;
  const U = (be) => {
    const oe = Ih(be);
    if (!oe || f(oe, oe.id) || !t.has(be)) return;
    let he = P[B];
    if (!he) {
      const Ie = B - P.length;
      if (i === "landscape")
        he = {
          x: A - d - R / 2 - (3 + Math.floor(Ie / 2)) * (R + _),
          y: c.t + d + R / 2 + (Ie % 2) * C,
        };
      else {
        const ve = Math.min(...P.map((st) => st.x)) - (R + _),
          it = Math.min(...P.map((st) => st.y));
        he = { x: ve - Math.floor(Ie / 4) * (R + _), y: it + (Ie % 4) * C };
      }
      D = Math.min(D, he.x - R / 2);
    }
    (B++, u(oe, he.x, he.y, R), (H = Math.min(H, he.x - R / 2)));
  };
  for (const be of qte) U(be);
  for (const be of [...Kte, ...b]) U(be);
  const W = document.documentElement.style,
    J = Ih("fire");
  if (J) {
    const be = J.getBoundingClientRect();
    be.width &&
      (W.setProperty("--m-fire-x", `${be.left + be.width / 2}px`),
      W.setProperty("--m-fire-top", `${be.top}px`));
  }
  const j =
    i === "portrait"
      ? Math.min(H, x - R / 2)
      : Math.min(D, A - d - 3 * R - 2 * _);
  (W.setProperty("--m-util-left", `${Math.round(j)}px`),
    W.setProperty("--m-map-left", `${Math.round(A)}px`),
    W.setProperty(
      "--m-center-w",
      `${Math.max(140, Math.min(360, Math.round(2 * (j - n / 2) - 16)))}px`,
    ));
  let ne = 1 / 0;
  for (const be of [
    "fire",
    "use",
    "jump",
    "aim",
    "reload",
    "sprint",
    "crouch",
    "prone",
    "stick",
  ]) {
    const oe = Ih(be);
    if (!oe || oe.classList.contains("hidden")) continue;
    const he = oe.getBoundingClientRect();
    he.height && (ne = Math.min(ne, he.top));
  }
  ne < 1 / 0 && W.setProperty("--m-controls-top", `${Math.round(ne)}px`);
  const ge = p(g.sprint);
  (W.setProperty(
    "--m-left-cluster-top",
    `${Math.round(Math.min(ge.y - ge.size / 2, p(g.stick).y - 60 * h))}px`,
  ),
    W.setProperty("--m-k", String(h)),
    Zte(n, o, c.b));
}
function Zte(s, e, t) {
  const i = document.getElementById("hotbar"),
    n = document.getElementById("hpwrap");
  if (!i) return;
  (i.style.removeProperty("left"),
    i.style.removeProperty("transform"),
    n?.style.removeProperty("left"));
  const o = i.getBoundingClientRect();
  if (!o.width) return;
  const a = new DOMMatrixReadOnly(getComputedStyle(i).transform).a || 1;
  let r = 0,
    l = s;
  for (const u of [
    "fire",
    "use",
    "jump",
    "aim",
    "reload",
    "sprint",
    "crouch",
    "prone",
    "stick",
    "rocket",
    "bomb",
  ]) {
    const f = Ih(u);
    if (!f || f.classList.contains("hidden")) continue;
    const p = f.getBoundingClientRect();
    !p.width ||
      p.bottom < o.top - 4 ||
      p.top > e - t + 4 ||
      (p.left + p.width / 2 < s / 2
        ? (r = Math.max(r, p.right))
        : (l = Math.min(l, p.left)));
  }
  if (r <= o.left - 6 && l >= o.right + 6) return;
  const c = l - r - 12,
    h = o.width / a,
    d = Math.max(0.5, Math.min(a, c / h));
  ((i.style.left = `${Math.round((r + l) / 2)}px`),
    (i.style.transform = `translateX(-50%) scale(${d.toFixed(3)})`),
    n && (n.style.left = i.style.left));
}
const Rs = (s, e) =>
    `<path class="s" d="${s}"${e ? ` style="stroke-width:${e}"` : ""}/>`,
  ss = (s) => `<path d="${s}"/>`,
  Rn = (s) => `<path fill-rule="evenodd" d="${s}"/>`,
  tr = (s, e, t) => `<circle cx="${s}" cy="${e}" r="${t}"/>`,
  kn = (s, e, t) =>
    `M${s - t} ${e}a${t} ${t} 0 1 0 ${2 * t} 0a${t} ${t} 0 1 0 ${-2 * t} 0Z`,
  Os = (s, e, t, i) => `M${s} ${e}h${t}v${i}h${-t}Z`,
  Rw = (s, e) => `<g transform="rotate(${s} 12 12)">${e}</g>`;
function Qte(s, e, t, i) {
  const n = [],
    o = (Math.PI * 2) / s,
    a = o * 0.22;
  for (let r = 0; r < s; r++) {
    const l = r * o - Math.PI / 2;
    for (const [c, h] of [
      [l - o / 2 + a * 0.6, t],
      [l - a, e],
      [l + a, e],
      [l + o / 2 - a * 0.6, t],
    ])
      n.push(
        `${(12 + Math.cos(c) * h).toFixed(2)} ${(12 + Math.sin(c) * h).toFixed(2)}`,
      );
  }
  return Rn(`M${n.join("L")}Z${kn(12, 12, i)}`);
}
