// assets__index-Dp6GxvJu 153 — add
// Lines 91759-92201 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
class yQ {
  constructor(e, t = 0) {
    w(this, "group", new pe());
    w(this, "position");
    w(this, "body", new pe());
    w(this, "head", new pe());
    w(this, "arms", []);
    w(this, "elbows", []);
    w(this, "eyes", []);
    w(this, "cards");
    w(this, "chips");
    w(this, "faces");
    w(this, "labels", []);
    w(this, "motions", []);
    w(this, "state");
    w(this, "table");
    w(this, "nextLight", 0);
    w(this, "actionAt", -100);
    w(this, "betAt", -100);
    w(this, "tmp", new $t());
    w(this, "assets", new Set());
    ((this.site = e), (this.table = SS(e.id, t)));
    const i = bp[t],
      s = MS(e, i.x, i.y, i.z);
    ((this.position = new k(s.x, s.y, s.z)),
      this.group.position.copy(this.position),
      (this.group.rotation.y = (-e.rotation * Math.PI) / 2));
    const o = new Ct(1, 1, 1);
    this.assets.add(o);
    const a = new Map(),
      r = (_, C, R, L, N, D, H, G) => {
        let I = a.get(G);
        I || ((I = new gi({ color: G })), a.set(G, I), this.assets.add(I));
        const O = new le(o, I);
        return (O.position.set(C, R, L), O.scale.set(N, D, H), _.add(O), O);
      };
    (this.body.position.set(0, 0, -1.03), this.group.add(this.body));
    const l = 13143911,
      c = 2106668,
      h = 15327695,
      d = 3156520,
      u = 13215330;
    for (const _ of [-0.115, 0.115])
      (r(this.body, _, 0.4, 0, 0.18, 0.78, 0.22, c),
        r(this.body, _, 0.055, 0.07, 0.21, 0.11, 0.36, 1513243));
    (r(this.body, 0, 1.03, 0, 0.49, 0.55, 0.27, h),
      r(this.body, 0, 1.015, 0.155, 0.4, 0.48, 0.05, 2700865),
      r(this.body, 0, 1.29, 0, 0.17, 0.12, 0.17, l),
      r(this.body, 0, 1.24, 0.193, 0.065, 0.09, 0.03, c));
    for (const _ of [-0.065, 0.065])
      r(this.body, _, 1.265, 0.19, 0.1, 0.08, 0.035, c);
    for (const _ of [0.89, 1, 1.11])
      r(this.body, 0, _, 0.192, 0.025, 0.025, 0.02, u);
    (r(this.body, -0.11, 1.13, 0.193, 0.12, 0.045, 0.015, u),
      r(this.body, 0.12, 1.13, 0.19, 0.08, 0.06, 0.025, h),
      this.head.position.set(0, 1.48, 0),
      this.body.add(this.head),
      r(this.head, 0, 0, 0, 0.32, 0.35, 0.29, l),
      r(this.head, 0, 0.158, -0.025, 0.35, 0.08, 0.31, d),
      r(this.head, 0, 0.045, -0.147, 0.34, 0.22, 0.04, d),
      r(this.head, -0.15, 0.095, 0, 0.03, 0.17, 0.29, d));
    for (const _ of [-0.093, 0.093])
      (r(this.head, _, 0.013, 0.149, 0.074, 0.045, 0.016, 16117983),
        this.eyes.push(
          r(this.head, _, 0.012, 0.16, 0.025, 0.031, 0.015, 2697768),
        ),
        r(this.head, _, 0.068, 0.151, 0.077, 0.023, 0.019, d));
    (r(this.head, 0, -0.035, 0.171, 0.052, 0.066, 0.058, 11828311),
      r(this.head, 0, -0.112, 0.151, 0.095, 0.022, 0.018, 8539711));
    for (const _ of [-1, 1]) {
      const C = new pe();
      (C.position.set(_ * 0.29, 1.23, 0),
        this.body.add(C),
        this.arms.push(C),
        r(C, 0, -0.155, 0, 0.17, 0.31, 0.19, h));
      const R = new pe();
      ((R.position.y = -0.3),
        C.add(R),
        this.elbows.push(R),
        r(R, 0, -0.13, 0, 0.155, 0.26, 0.18, h),
        r(R, 0, -0.26, 0, 0.165, 0.055, 0.185, c),
        r(R, 0, -0.32, 0.015, 0.15, 0.12, 0.18, l));
      for (let L = 0; L < 3; L++)
        r(R, -0.047 + L * 0.044, -0.365, 0.03, 0.032, 0.035, 0.12, l);
    }
    const f = new gi({ vertexColors: !0 });
    this.assets.add(f);
    for (const _ of [this.body, this.head, ...this.arms, ...this.elbows]) {
      const C = _.children.filter(
          (N) => N instanceof le && !this.eyes.includes(N),
        ),
        R = C.map((N) => {
          N.updateMatrix();
          const D = o.clone().applyMatrix4(N.matrix),
            H = N.material.color,
            G = new Float32Array(D.getAttribute("position").count * 3);
          for (let I = 0; I < G.length; I += 3)
            ((G[I] = H.r), (G[I + 1] = H.g), (G[I + 2] = H.b));
          return (D.setAttribute("color", new oi(G, 3)), D);
        }),
        L = no(R, !1);
      (R.forEach((N) => N.dispose()),
        C.forEach((N) => _.remove(N)),
        this.assets.add(L),
        _.add(new le(L, f)));
    }
    (r(this.group, -1, 0.98, -0.25, 0.32, 0.09, 0.44, 3352115),
      r(this.group, -1, 1.031, -0.25, 0.21, 0.014, 0.31, 15458240),
      r(this.group, 0.91, 0.96, -0.36, 0.35, 0.025, 0.24, 1580064),
      (this.faces = this.cardAtlas()),
      this.assets.add(this.faces));
    const p = new pn(0.18, 0.255);
    (p.setAttribute("cardIndex", new eo(new Float32Array(80), 1)),
      this.assets.add(p));
    const m = new gi({ map: this.faces, side: Ai });
    ((m.onBeforeCompile = (_) => {
      ((_.vertexShader =
        `attribute float cardIndex; varying float vCard;
` + _.vertexShader),
        (_.vertexShader = _.vertexShader.replace(
          "#include <begin_vertex>",
          `#include <begin_vertex>
vCard=cardIndex;`,
        )),
        (_.fragmentShader =
          `varying float vCard;
` + _.fragmentShader),
        (_.fragmentShader = _.fragmentShader.replace(
          "#include <map_fragment>",
          "float face = floor(vCard + 0.5); vec2 cardUV = vec2((mod(face,13.0)+vMapUv.x)/13.0,(4.0-floor(face/13.0)+vMapUv.y)/5.0); diffuseColor *= texture2D(map,cardUV);",
        )),
        (_.fragmentShader = _.fragmentShader.replace(
          "#include <emissivemap_fragment>",
          "totalEmissiveRadiance *= texture2D(map, cardUV).rgb;",
        )));
    }),
      this.assets.add(m),
      (this.cards = new hs(p, m, 80)),
      (this.cards.count = 0),
      (this.cards.frustumCulled = !1),
      this.group.add(this.cards));
    const y = new xt(0.07, 0.07, 0.024, 12),
      g = new gi({ color: 16777215 });
    (this.assets.add(y),
      this.assets.add(g),
      (this.chips = new hs(y, g, 120)),
      (this.chips.count = 0),
      (this.chips.frustumCulled = !1),
      this.group.add(this.chips));
    for (let _ = 0; _ < 4; _++) {
      const C = document.createElement("canvas");
      ((C.width = _ === 3 ? 768 : 384), (C.height = 128));
      const R = new bi(C);
      ((R.colorSpace = vi), (R.minFilter = Jn));
      const L = new es({ map: R, depthTest: !0, transparent: !0 }),
        N = new os(L);
      (N.position.set(
        _ === 3 ? 0 : (_ - 1) * 0.87,
        _ === 3 ? 2.02 : 1.09,
        _ === 3 ? -1.08 : 0.43,
      ),
        N.scale.set(_ === 3 ? 1.45 : 0.55, _ === 3 ? 0.242 : 0.183, 1),
        this.group.add(N),
        this.labels.push({ canvas: C, texture: R, mesh: N }),
        this.assets.add(R),
        this.assets.add(L));
    }
    const b = document.createElement("canvas");
    ((b.width = 768), (b.height = 256));
    const S = b.getContext("2d");
    ((S.textAlign = "center"),
      (S.fillStyle = "#e2cf92"),
      (S.font = "bold 36px serif"),
      S.fillText("BLACKJACK PAYS 3 TO 2", 384, 65),
      (S.fillStyle = "#b8c6a0"),
      (S.font = "20px monospace"),
      S.fillText("OLYMPUS  •  SIX DECKS", 384, 109),
      (S.strokeStyle = "#b2b885"),
      (S.lineWidth = 3),
      S.beginPath(),
      S.ellipse(384, -10, 310, 210, 0, 0.18, Math.PI - 0.18),
      S.stroke());
    const M = new bi(b);
    M.colorSpace = vi;
    const x = new gi({ map: M, transparent: !0, depthWrite: !1 }),
      T = new pn(1.25, 0.4),
      A = new le(T, x);
    ((A.rotation.x = -Math.PI / 2),
      A.position.set(0, 0.941, -0.05),
      this.group.add(A),
      this.assets.add(M),
      this.assets.add(x),
      this.assets.add(T),
      this.drawLabels());
  }
  cardAtlas() {
    const e = document.createElement("canvas");
    ((e.width = 1248), (e.height = 640));
    const t = e.getContext("2d");
    for (let s = 0; s < 53; s++) {
      const o = (s % 13) * 96,
        a = Math.floor(s / 13) * 128;
      if (
        ((t.fillStyle = s === 52 ? "#522135" : "#f4ecdc"),
        t.fillRect(o, a, 96, 128),
        (t.strokeStyle = s === 52 ? "#c8a86d" : "#c1b9aa"),
        (t.lineWidth = 3),
        t.strokeRect(o + 3, a + 3, 90, 122),
        s === 52)
      ) {
        t.strokeStyle = "#bd8f5b";
        for (let c = 12; c < 90; c += 12)
          for (let h = 12; h < 120; h += 12) t.strokeRect(o + c, a + h, 6, 6);
        continue;
      }
      const r = [
          "A",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "J",
          "Q",
          "K",
        ][s % 13],
        l = ["♠", "♥", "♣", "♦"][Math.floor(s / 13)];
      ((t.fillStyle = (s >= 13 && s < 26) || s >= 39 ? "#aa2a39" : "#242831"),
        (t.font = "bold 25px monospace"),
        t.fillText(r, o + 8, a + 28),
        (t.font = "24px serif"),
        t.fillText(l, o + 9, a + 51),
        (t.font = "42px serif"),
        (t.textAlign = "center"),
        t.fillText(l, o + 48, a + 88),
        (t.textAlign = "left"),
        t.save(),
        t.translate(o + 96, a + 128),
        t.rotate(Math.PI),
        (t.font = "bold 23px monospace"),
        t.fillText(r, 8, 27),
        t.restore());
    }
    const i = new bi(e);
    return ((i.colorSpace = vi), (i.magFilter = ji), (i.anisotropy = 4), i);
  }
  drawLabels() {
    this.labels.forEach(({ canvas: e, texture: t }, i) => {
      var a, r;
      const s = e.getContext("2d"),
        o = (a = this.state) == null ? void 0 : a.seats[i];
      (s.clearRect(0, 0, e.width, e.height),
        (s.fillStyle = "#131d20e8"),
        s.fillRect(0, 0, e.width, 128),
        (s.strokeStyle =
          ((r = this.state) == null ? void 0 : r.turn) === i
            ? "#8ae2bc"
            : "#c29e62"),
        (s.lineWidth = 4),
        s.strokeRect(2, 2, e.width - 4, 124),
        (s.textAlign = "center"),
        (s.fillStyle = "#e8cb91"),
        (s.font = "bold 29px monospace"),
        i === 3
          ? (s.fillText("OLYMPUS · BLACKJACK", e.width / 2, 49),
            (s.font = "22px monospace"),
            (s.fillStyle = "#e4e9e0"),
            s.fillText("PAYS 3:2   •   DEALER STANDS ON 17", e.width / 2, 94))
          : (s.fillText(o ? o.name.slice(0, 18) : "OPEN SEAT", 192, 43),
            (s.fillStyle = "#edf0e5"),
            (s.font = "25px monospace"),
            s.fillText(
              o != null && o.hands.length
                ? o.hands
                    .map(
                      (l) =>
                        `$${l.bet} · ${l.cards.length ? Pd(l.cards).total : "—"}`,
                    )
                    .join(" / ")
                : "10 – 10,000",
              192,
              86,
            ),
            o != null &&
              o.hands.some((l) => l.outcome) &&
              ((s.fillStyle = "#82d3b3"),
              (s.font = "18px monospace"),
              s.fillText(
                o.hands
                  .map((l) => {
                    var c;
                    return (c = l.outcome) == null ? void 0 : c.toUpperCase();
                  })
                  .join(" / "),
                192,
                116,
              ))),
        (t.needsUpdate = !0));
    });
  }
  receive(e, t) {
    var l;
    if (((l = this.state) == null ? void 0 : l.version) === e.version) return;
    const i = this.state;
    ((this.state = e),
      this.drawLabels(),
      i &&
        (e.event === "deal" ||
          (e.phase === "dealer" && i.phase !== "dealer")) &&
        (this.actionAt = t),
      i && ["bet", "result"].includes(e.event) && (this.betAt = t));
    const s = new Map(this.motions.map((c) => [c.key, c])),
      o = [],
      a = (c, h, d) =>
        c.forEach((u, f) => {
          var x;
          const p = `${e.round}/${h}/${d}/${f}`,
            m = s.get(p),
            y =
              h >= 0 &&
              (((x = e.seats[h]) == null ? void 0 : x.hands.length) ?? 0) > 1,
            g =
              h < 0
                ? -0.32 + f * 0.13
                : (h - 1) * 0.73 + (y ? (d - 0.5) * 0.29 : 0) + f * 0.055,
            b = h < 0 ? -0.29 : (h === 1 ? 0.38 : 0.19) + (y ? d * 0.1 : 0),
            S = new k(g, 0.958 + f * 0.002, b),
            M = !!m && m.value !== u;
          o.push({
            key: p,
            value: u,
            from: m ? m.to.clone() : new k(-0.99, 1.055, -0.25),
            to: S,
            at: m && !M ? m.at : t,
            angle: h < 0 ? Math.PI : (h - 1) * -0.18,
            flip: M,
          });
        });
    (a(e.dealer, -1, 0),
      e.seats.forEach((c, h) =>
        c == null ? void 0 : c.hands.forEach((d, u) => a(d.cards, h, u)),
      ),
      (this.motions = o),
      (this.cards.count = o.length));
    const r = this.cards.geometry.getAttribute("cardIndex");
    (o.forEach((c, h) => r.setX(h, c.value < 0 ? 52 : c.value)),
      (r.needsUpdate = !0));
  }
  update(e, t, i = !1) {
    var f, p, m, y;
    e >= this.nextLight && (ur(this.group, t), (this.nextLight = e + Vr));
    for (let g = 0; g < 3; g++) this.labels[g].mesh.visible = !i;
    const s = (f = this.state) == null ? void 0 : f.phase,
      o = Math.max(0, 1 - (e - this.actionAt) / 0.75),
      a = Math.sin((1 - o) * Math.PI) * o,
      r =
        ((p = this.state) == null ? void 0 : p.turn) ??
        ((m = this.state) == null ? void 0 : m.eventSeat) ??
        1;
    ((this.body.rotation.y = fi.lerp(
      this.body.rotation.y,
      s === "players" ? (r - 1) * -0.2 : 0,
      0.06,
    )),
      (this.body.position.y = Math.sin(e * 1.8) * 0.006),
      (this.body.rotation.x = a * 0.09),
      (this.head.rotation.y =
        Math.sin(e * 0.42) * 0.035 + (s === "players" ? (r - 1) * -0.14 : 0)),
      (this.head.rotation.x = 0.03 + Math.sin(e * 0.7) * 0.025 + a * 0.12));
    const l = e % 4.7 < 0.13 ? 0.12 : 1;
    (this.eyes.forEach((g) => (g.scale.y = 0.031 * l)),
      this.arms.forEach((g, b) => {
        ((g.rotation.x = -0.32 - a * (b === 1 ? 1.05 : 0.28)),
          (g.rotation.z = (b === 0 ? 1 : -1) * (0.12 + a * 0.12)),
          (g.rotation.y = b === 1 ? a * (r - 1) * -0.38 : 0),
          (this.elbows[b].rotation.x = -0.7 - a * 0.45));
      }));
    const c = this.tmp;
    (this.motions.forEach((g, b) => {
      const S = Math.min(1, Math.max(0, (e - g.at) / 0.58)),
        M = b_(S);
      (c.position.lerpVectors(g.from, g.to, M),
        (c.position.y += Math.sin(S * Math.PI) * (g.flip ? 0.11 : 0.065)),
        c.rotation.set(
          -Math.PI / 2,
          g.flip ? (1 - M) * Math.PI : 0,
          g.angle + (1 - M) * -0.3,
        ),
        c.scale.set(1, 1, 1),
        c.updateMatrix(),
        this.cards.setMatrixAt(b, c.matrix));
    }),
      (this.cards.instanceMatrix.needsUpdate = !0));
    let h = 0;
    const d = new ze(),
      u = (g, b, S, M) => {
        const x = [1e3, 100, 25, 10],
          T = [14204535, 3225412, 3309928, 11616337];
        let A = S;
        for (let _ = 0; _ < 4; _++) {
          const C = Math.min(12, Math.floor(A / x[_]));
          A %= x[_];
          for (let R = 0; R < C && h < 120; R++) {
            const L = M ? b_((e - this.betAt - R * 0.018) / 0.5) : 1;
            (c.position.set(
              g + _ * 0.15,
              0.948 + R * 0.027 + Math.sin(L * Math.PI) * 0.13,
              b + (1 - L) * 0.35,
            ),
              c.rotation.set(0, R * 0.39 + (1 - L) * 2, 0),
              c.scale.set(1, 1, 1),
              c.updateMatrix(),
              this.chips.setMatrixAt(h, c.matrix),
              this.chips.setColorAt(h++, d.set(T[_])));
          }
        }
      };
    (u(0.52, -0.36, 3350, !1),
      (y = this.state) == null ||
        y.seats.forEach((g, b) =>
          g == null
            ? void 0
            : g.hands.forEach((S, M) =>
                u(
                  (b - 1) * 0.74 - 0.17,
                  (b === 1 ? 0.61 : 0.42) + M * 0.1,
                  S.bet,
                  !0,
                ),
              ),
        ),
      (this.chips.count = h),
      (this.chips.instanceMatrix.needsUpdate = !0),
      this.chips.instanceColor && (this.chips.instanceColor.needsUpdate = !0));
  }
  dispose() {
    (this.group.removeFromParent(), this.assets.forEach((e) => e.dispose()));
  }
}
