// index-Dp6GxvJu 117 — size
// Lines 71218-71504 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const Sj = ["settings", "tab", "chat", "shop", "inventory"],
  Ej = [
    "vision",
    "flashlight",
    "headlights",
    "camera",
    "cargo",
    "chute",
    "driver",
    "toolmode",
  ],
  J6 = {
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
  xj = (n, e) => n === "portrait" && e < 700,
  Tj = () => Yy() === "portrait" && innerHeight < 480,
  Yy = () => (innerHeight >= innerWidth ? "portrait" : "landscape");
function Nf(n = Yy()) {
  return n === "portrait" ? SETTINGS.mobileLayoutPortrait : SETTINGS.mobileLayout;
}
let uf = null;
function Aj() {
  uf ||
    ((uf = document.createElement("div")),
    (uf.style.cssText =
      "position:fixed;inset:0;visibility:hidden;pointer-events:none;padding:var(--safe-top,0px) var(--safe-right,0px) var(--safe-bottom,0px) var(--safe-left,0px)"),
    document.body.append(uf));
  const n = getComputedStyle(uf);
  return {
    t: parseFloat(n.paddingTop) || 0,
    r: parseFloat(n.paddingRight) || 0,
    b: parseFloat(n.paddingBottom) || 0,
    l: parseFloat(n.paddingLeft) || 0,
  };
}
const dd = (n) =>
  document.getElementById(
    n === "map" ? "minimap" : n === "stick" ? "mobile-stick-zone" : `mob${n}`,
  );
let e_ = "";
function zm(n, e = !1) {
  const t = new Set(n),
    i = Yy(),
    s = innerWidth,
    o = innerHeight,
    a = Nf(i),
    r = SETTINGS.mobileLabels || SETTINGS.mobileLayoutEdit,
    l = `${i}|${s}x${o}|${[...t].sort().join(",")}|${JSON.stringify(a)}|${SETTINGS.mobileLayoutEdit}|${r}`;
  if (!e && l === e_) return;
  e_ = l;
  const c = Aj(),
    h = Math.max(0.84, Math.min(1.22, Math.min(s, o) / 390)),
    d = 8,
    u = (oe, J, re, Ce, Re = !1) => {
      (Re
        ? ((oe.style.left = `${J - Ce / 2}px`),
          (oe.style.top = `${re - Ce / 2}px`),
          (oe.style.bottom = "auto"))
        : ((oe.style.left = `${J}px`), (oe.style.top = `${re}px`)),
        oe.style.setProperty("--btn-size", `${Math.round(Ce)}px`));
    },
    f = (oe, J) => {
      const re = a[J];
      return (
        (oe.dataset.auto = re ? "0" : "1"),
        oe.style.removeProperty("--btn-scale"),
        re
          ? ((oe.style.left = `${re.x}%`),
            (oe.style.top = `${re.y}%`),
            J === "mobile-stick-zone" && (oe.style.bottom = "auto"),
            J === "minimap" &&
              ((oe.style.right = "auto"),
              (oe.style.transform =
                "translate(-50%, -50%) scale(var(--btn-scale, 1))")),
            re.s !== void 0 &&
              oe.style.setProperty("--btn-scale", String(re.s)),
            !0)
          : (J === "minimap" &&
              (oe.style.left =
                oe.style.top =
                oe.style.right =
                oe.style.transform =
                  ""),
            !1)
      );
    },
    p = (oe) => ({
      x: oe.corner === "br" ? s - c.r - oe.dx * h : c.l + oe.dx * h,
      y: o - c.b - oe.dy * h,
      size: oe.size * h,
    }),
    m = xj(i, o),
    y = m ? J6.portraitShort : J6[i],
    g = [];
  for (const oe of [
    "fire",
    "use",
    "jump",
    "crouch",
    "prone",
    "aim",
    "reload",
    "sprint",
  ])
    g.push([oe, y[oe]]);
  const b = [];
  (t.has("reload") ? b.push("rocket") : g.push(["rocket", y.reload]),
    t.has("prone") ? b.push("bomb") : g.push(["bomb", y.prone]));
  for (const [oe, J] of g) {
    const re = dd(oe);
    if (!re || f(re, re.id)) continue;
    const Ce = p(J);
    u(re, Ce.x, Ce.y, Ce.size);
  }
  const S = dd("stick");
  if (S && !f(S, S.id)) {
    const oe = p(y.stick);
    (u(S, oe.x, oe.y, y.stick.size, !0),
      S.style.setProperty("--btn-scale", String(h)));
  }
  const M = dd("map");
  M && f(M, "minimap");
  const x = M == null ? void 0 : M.getBoundingClientRect(),
    T = x && x.width ? x.left : s - c.r - d - 88,
    A = x && x.height ? x.bottom : c.t + d + 88,
    _ = x && x.width ? x.left + x.width / 2 : s - c.r - d - 44,
    C = Math.round((i === "portrait" ? 44 : 42) * Math.min(h, 1.1)),
    R = r ? 10 : 6,
    L = C + (r ? 11 : 6),
    N = [],
    D = p(y.use).y - p(y.use).size / 2 - 10;
  if (i === "portrait") {
    for (let oe = 0; oe < 3; oe++) {
      const J = oe && !SETTINGS.mobileLayoutEdit && !m ? 4 * L : 0;
      for (let re = A + R + C / 2 + J; re + C / 2 <= D; re += L)
        N.push({ x: _ - oe * (C + R), y: re });
    }
    if (!N.length) {
      const oe = p(y.use),
        J = A + R + C / 2;
      for (
        let re = oe.x - oe.size / 2 - R - C / 2;
        re - C / 2 >= c.l + 150;
        re -= C + R
      )
        N.push({ x: re, y: J });
    }
  } else {
    const oe = T - d;
    for (let J = 0; J < 2; J++)
      for (let re = 2; re >= 0; re--)
        N.push({ x: oe - C / 2 - re * (C + R), y: c.t + d + C / 2 + J * L });
    for (let J = A + R + C / 2; J + C / 2 <= D; J += L) N.push({ x: _, y: J });
    for (let J = 2; J < 4; J++)
      for (let re = 0; re < 10; re++) {
        const Ce = { x: oe - C / 2 - re * (C + R), y: c.t + d + J * L + C / 2 },
          Re = SETTINGS.mobileLayoutEdit ? c.l + s * 0.33 + 16 : s / 2 + 40;
        Ce.x - C / 2 > Re && Ce.y + C / 2 <= D && N.push(Ce);
      }
  }
  let H = 0,
    G = 1 / 0,
    I = 1 / 0;
  const O = (oe) => {
    const J = dd(oe);
    if (!J || f(J, J.id) || !t.has(oe)) return;
    let re = N[H];
    if (!re) {
      const Ce = H - N.length;
      if (i === "landscape")
        re = {
          x: T - d - C / 2 - (3 + Math.floor(Ce / 2)) * (C + R),
          y: c.t + d + C / 2 + (Ce % 2) * L,
        };
      else {
        const Re = Math.min(...N.map((it) => it.x)) - (C + R),
          We = Math.min(...N.map((it) => it.y));
        re = { x: Re - Math.floor(Ce / 4) * (C + R), y: We + (Ce % 4) * L };
      }
      I = Math.min(I, re.x - C / 2);
    }
    (H++, u(J, re.x, re.y, C), (G = Math.min(G, re.x - C / 2)));
  };
  for (const oe of Sj) O(oe);
  for (const oe of [...Ej, ...b]) O(oe);
  const F = document.documentElement.style,
    X = dd("fire");
  if (X) {
    const oe = X.getBoundingClientRect();
    oe.width &&
      (F.setProperty("--m-fire-x", `${oe.left + oe.width / 2}px`),
      F.setProperty("--m-fire-top", `${oe.top}px`));
  }
  const Q =
    i === "portrait"
      ? Math.min(G, _ - C / 2)
      : Math.min(I, T - d - 3 * C - 2 * R);
  (F.setProperty("--m-util-left", `${Math.round(Q)}px`),
    F.setProperty("--m-map-left", `${Math.round(T)}px`),
    F.setProperty(
      "--m-center-w",
      `${Math.max(140, Math.min(360, Math.round(2 * (Q - s / 2) - 16)))}px`,
    ));
  let ee = 1 / 0;
  for (const oe of [
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
    const J = dd(oe);
    if (!J || J.classList.contains("hidden")) continue;
    const re = J.getBoundingClientRect();
    re.height && (ee = Math.min(ee, re.top));
  }
  ee < 1 / 0 && F.setProperty("--m-controls-top", `${Math.round(ee)}px`);
  const se = p(y.sprint);
  (F.setProperty(
    "--m-left-cluster-top",
    `${Math.round(Math.min(se.y - se.size / 2, p(y.stick).y - 60 * h))}px`,
  ),
    F.setProperty("--m-k", String(h)));
}
const Sn = (n, e) =>
    `<path class="s" d="${n}"${e ? ` style="stroke-width:${e}"` : ""}/>`,
  an = (n) => `<path d="${n}"/>`,
  us = (n) => `<path fill-rule="evenodd" d="${n}"/>`,
  Ma = (n, e, t) => `<circle cx="${n}" cy="${e}" r="${t}"/>`,
  fs = (n, e, t) =>
    `M${n - t} ${e}a${t} ${t} 0 1 0 ${2 * t} 0a${t} ${t} 0 1 0 ${-2 * t} 0Z`,
  Rn = (n, e, t, i) => `M${n} ${e}h${t}v${i}h${-t}Z`,
  ab = (n, e) => `<g transform="rotate(${n} 12 12)">${e}</g>`;
function _j(n, e, t, i) {
  const s = [],
    o = (Math.PI * 2) / n,
    a = o * 0.22;
  for (let r = 0; r < n; r++) {
    const l = r * o - Math.PI / 2;
    for (const [c, h] of [
      [l - o / 2 + a * 0.6, t],
      [l - a, e],
      [l + a, e],
      [l + o / 2 - a * 0.6, t],
    ])
      s.push(
        `${(12 + Math.cos(c) * h).toFixed(2)} ${(12 + Math.sin(c) * h).toFixed(2)}`,
      );
  }
  return us(`M${s.join("L")}Z${fs(12, 12, i)}`);
}
