// index-Dp6GxvJu 166 — setattribute
// Lines 96623-96911 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function rJ(n, e) {
  const t = [];
  for (const i of n.split(`
`)) {
    let s = "";
    for (const o of i.split(" ")) {
      if (o.length > e) {
        s && t.push(s);
        for (let r = 0; r < o.length; r += e) t.push(o.slice(r, r + e));
        s = "";
        continue;
      }
      const a = s ? `${s} ${o}` : o;
      a.length > e ? (t.push(s), (s = o)) : (s = a);
    }
    t.push(s);
  }
  return t;
}
class lJ {
  constructor(e, t) {
    w(this, "records", new Map());
    w(this, "displays", new Map());
    w(this, "checkAt", 0);
    w(this, "time", 0);
    ((this.scene = e), (this.world = t));
  }
  apply(e) {
    for (const t of e)
      t.text
        ? this.records.set(yf(t.x, t.y, t.z), { ...t, ...DI(t) })
        : this.records.delete(yf(t.x, t.y, t.z));
    this.checkAt = 0;
  }
  clear() {
    for (const e of this.displays.values()) this.dispose(e);
    (this.displays.clear(), this.records.clear());
  }
  at(e, t, i) {
    var o;
    const s = sJ(
      (a, r, l) => this.world.getBlock(a, r, l),
      (a, r, l) => this.world.getMeta(a, r, l),
      e,
      t,
      i,
    );
    return s
      ? {
          group: s,
          content:
            ((o = oJ(s, (a, r, l) => this.records.get(yf(a, r, l)))) == null
              ? void 0
              : o.content) ?? null,
        }
      : null;
  }
  update(e, t) {
    this.time += e;
    for (const o of this.displays.values())
      o.fx === "scroll"
        ? (o.texture.offset.x = (o.texture.offset.x + e * o.scroll) % 1)
        : o.fx === "blink"
          ? o.mesh.material.color
              .copy(o.base)
              .multiplyScalar(Math.sin(this.time * 6) > -0.2 ? 1 : 0.12)
          : o.fx === "rainbow" &&
            o.mesh.material.color.setHSL((this.time * 0.15) % 1, 1, 0.62);
    if (this.time < this.checkAt) return;
    this.checkAt = this.time + 0.75;
    const i = new Set(),
      s = new Set();
    for (const o of this.records.values()) {
      if (
        s.has(yf(o.x, o.y, o.z)) ||
        Math.abs(o.x - t.x) > 160 ||
        Math.abs(o.z - t.z) > 160
      )
        continue;
      const a = this.at(o.x, o.y, o.z);
      if (a) for (const d of a.group.cells) s.add(yf(d.x, d.y, d.z));
      if (!a || !a.content || i.has(a.group.key)) continue;
      i.add(a.group.key);
      const { group: r, content: l } = a,
        c = `${r.facing}|${r.width}x${r.height}|${r.cells.map((d) => `${d.x},${d.y},${d.z}`).join(";")}|${l.text}|${l.color}|${l.fx}|${z.language}`,
        h = this.displays.get(r.key);
      (h == null ? void 0 : h.sig) !== c &&
        (h && this.dispose(h), this.displays.set(r.key, this.build(r, l, c)));
    }
    for (const [o, a] of this.displays)
      i.has(o) || (this.dispose(a), this.displays.delete(o));
  }
  build(e, t, i) {
    const { canvas: s, repeat: o } = BI(t, e.width, e.height),
      a = new bi(s);
    ((a.colorSpace = vi),
      (a.minFilter = Uo),
      (a.magFilter = t.fx === "panel" ? Jn : ji),
      (a.anisotropy = t.fx === "panel" ? 8 : 4),
      o < 1 && ((a.wrapS = Fr), (a.repeat.x = o)));
    const [r, l] = xo[e.facing],
      c = l,
      h = -r,
      d = [],
      u = [],
      f = [];
    for (const S of e.cells) {
      const M = S.x + 0.5 + r * 0.503,
        x = S.z + 0.5 + l * 0.503,
        T = S.u / e.width,
        A = (S.u + 1) / e.width,
        _ = 1 - (S.v + 1) / e.height,
        C = 1 - S.v / e.height,
        R = d.length / 3;
      for (const [L, N, D, H] of [
        [-0.5, -0.5, T, _],
        [0.5, -0.5, A, _],
        [-0.5, 0.5, T, C],
        [0.5, 0.5, A, C],
      ])
        (d.push(M + c * L, S.y + 0.5 + N, x + h * L), u.push(D, H));
      f.push(R, R + 1, R + 2, R + 2, R + 1, R + 3);
    }
    const p = new ci();
    (p.setAttribute("position", new It(d, 3)),
      p.setAttribute("uv", new It(u, 2)),
      p.setIndex(f),
      p.computeBoundingSphere());
    const m = new ze(t.color),
      y = new qt({
        map: a,
        color: t.fx === "panel" ? new ze(16777215) : m.clone(),
        toneMapped: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -1,
      }),
      g = new le(p, y);
    ((g.name = "led-screen"), this.scene.add(g));
    const b = o < 1 ? (2 * o) / e.width : 0;
    return { sig: i, mesh: g, texture: a, fx: t.fx, base: m, scroll: b };
  }
  dispose(e) {
    (e.mesh.removeFromParent(),
      e.mesh.geometry.dispose(),
      e.texture.dispose(),
      e.mesh.material.dispose());
  }
}
function cJ(n, e, t, i) {
  var m;
  (m = document.getElementById("screen-editor")) == null || m.remove();
  const s = z.language === "en",
    o = { ...(n ?? { text: "", color: $g[0], fx: "static" }) },
    a = document.createElement("div");
  ((a.id = "screen-editor"),
    (a.className = "overlay"),
    a.setAttribute("role", "dialog"),
    a.setAttribute("aria-modal", "true"),
    (a.innerHTML = `<style>
    #screen-editor{position:fixed;inset:0;z-index:200;background:#000a;display:grid;place-items:center;padding:12px;font-family:var(--font-main,'Russo One'),Arial}
    #screen-editor .se-panel{width:min(560px,100%);max-height:92dvh;overflow:auto;background:linear-gradient(180deg,#1b2230,#11161f);color:#eef4ff;padding:18px;border-radius:14px;box-shadow:0 0 0 2px #2d3a50,0 20px 60px #000c}
    #screen-editor h3{margin:0 0 4px;font-weight:400;font-size:20px}#screen-editor .se-sub{color:#9fb0c8;font:12px Arial;margin-bottom:12px}
    #screen-editor canvas{width:100%;image-rendering:pixelated;border-radius:6px;box-shadow:0 0 0 3px #2a2f3a,0 0 0 5px #0d1016;background:#050608;display:block;margin-bottom:12px}
    #screen-editor textarea{width:100%;box-sizing:border-box;font:16px/1.5 monospace;background:#0b0e14;color:#fff;border:1px solid #2d3a50;border-radius:8px;padding:10px;resize:vertical}
    #screen-editor .se-row{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0}
    #screen-editor .se-swatch{width:34px;height:34px;border-radius:8px;border:2px solid #0006;cursor:pointer}#screen-editor .se-swatch[aria-pressed=true]{outline:3px solid #fff;outline-offset:1px}
    #screen-editor button.se-fx,#screen-editor .se-actions button{cursor:pointer;border:0;border-radius:8px;padding:9px 14px;font:inherit;font-size:13px;background:#26324a;color:#dfe8f8}
    #screen-editor button.se-fx[aria-pressed=true]{background:#3f7cff;color:#fff}
    #screen-editor .se-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:6px}#screen-editor .se-save{background:#3fbf6a!important;color:#062010!important}
  </style><div class="se-panel"><h3>${s ? "LED screen" : "LED-экран"}</h3><div class="se-sub"></div><canvas></canvas>
    <textarea rows="5" maxlength="${OM}" aria-label="${s ? "Screen text" : "Текст экрана"}"></textarea>
    <div class="se-row se-colors"></div><div class="se-row se-effects"></div>
    <div class="se-actions"><button data-a="clear">${s ? "Clear" : "Очистить"}</button><button data-a="cancel">${s ? "Cancel" : "Отмена"}</button><button data-a="save" class="se-save">${s ? "Show" : "Показать"}</button></div></div>`),
    (a.querySelector(".se-sub").textContent = s
      ? `${e.width}×${e.height} blocks · place more screens next to it, facing the same way, to make it bigger`
      : `${e.width}×${e.height} блоков · ставьте рядом ещё экраны той же стороной — они объединятся в один большой`));
  const r = a.querySelector("textarea");
  r.value = o.text;
  const l = a.querySelector("canvas"),
    c = () => {
      const { canvas: y } = BI(
        {
          ...o,
          fx: o.fx === "scroll" ? "static" : o.fx,
          text: o.text || (s ? "YOUR TEXT" : "ВАШ ТЕКСТ"),
        },
        e.width,
        e.height,
      );
      ((l.width = y.width), (l.height = y.height));
      const g = l.getContext("2d");
      (g.drawImage(y, 0, 0),
        o.fx !== "panel" &&
          ((g.globalCompositeOperation = "multiply"),
          (g.fillStyle = o.fx === "rainbow" ? "#ff9af0" : o.color),
          g.fillRect(0, 0, y.width, y.height),
          (g.globalCompositeOperation = "source-over")),
        (l.style.aspectRatio = `${e.width}/${e.height}`),
        (l.style.maxHeight = "220px"),
        (l.style.objectFit = "contain"));
    };
  r.oninput = () => {
    ((o.text = r.value.slice(0, OM)), c());
  };
  const h = a.querySelector(".se-colors");
  for (const y of $g) {
    const g = document.createElement("button");
    ((g.className = "se-swatch"),
      (g.style.background = y),
      g.setAttribute("aria-label", y),
      g.setAttribute("aria-pressed", String(y === o.color)),
      (g.onclick = () => {
        ((o.color = y),
          h
            .querySelectorAll("button")
            .forEach((b) => b.setAttribute("aria-pressed", String(b === g))),
          c());
      }),
      h.append(g));
  }
  const d = {
      static: ["Static", "Статично"],
      scroll: ["Scroll", "Бегущая строка"],
      blink: ["Blink", "Мигание"],
      rainbow: ["Rainbow", "Радуга"],
      panel: ["Info board", "Инфо-табло"],
    },
    u = a.querySelector(".se-effects");
  for (const y of NI) {
    const g = document.createElement("button");
    ((g.className = "se-fx"),
      (g.textContent = d[y][s ? 0 : 1]),
      g.setAttribute("aria-pressed", String(y === o.fx)),
      (g.onclick = () => {
        ((o.fx = y),
          u
            .querySelectorAll("button")
            .forEach((b) => b.setAttribute("aria-pressed", String(b === g))),
          c());
      }),
      u.append(g));
  }
  const f = () => {
      (a.remove(), document.removeEventListener("keydown", p, !0), i());
    },
    p = (y) => {
      (y.stopPropagation(), y.code === "Escape" && (y.preventDefault(), f()));
    };
  (document.addEventListener("keydown", p, !0),
    a.addEventListener("protection-close", f, { once: !0 }),
    a.querySelector('[data-a="cancel"]').addEventListener("click", f),
    a.querySelector('[data-a="clear"]').addEventListener("click", () => {
      (t({ ...o, text: "" }), f());
    }),
    a.querySelector('[data-a="save"]').addEventListener("click", () => {
      (t(DI(o)), f());
    }),
    document.body.append(a),
    c(),
    r.focus());
}
const hJ = `
#gunner-sight{position:fixed;inset:0;pointer-events:none;z-index:6;display:none;font-family:var(--font-main,'Russo One',sans-serif)}
#gunner-sight.on{display:block}
#gunner-sight .gs-vig{position:absolute;inset:0;opacity:0;transition:opacity .2s;background:radial-gradient(circle at 50% 50%,transparent 0,transparent calc(min(46vh,46vw) - 2px),rgba(0,0,0,.92) calc(min(46vh,46vw) + 6px),#000 100%)}
#gunner-sight.zoom .gs-vig{opacity:1}
#gunner-sight .gs-ring{position:absolute;left:50%;top:50%;width:min(92vh,92vw);height:min(92vh,92vw);transform:translate(-50%,-50%);border-radius:50%;box-shadow:inset 0 0 0 2px rgba(20,24,20,.9),inset 0 0 60px rgba(0,0,0,.55);opacity:0;transition:opacity .2s}
#gunner-sight.zoom .gs-ring{opacity:1}
#gunner-sight svg.gs-ret{position:absolute;left:50%;top:50%;width:min(56vh,56vw);height:min(56vh,56vw);transform:translate(-50%,-50%);overflow:visible}
#gunner-sight .gs-ret *{vector-effect:non-scaling-stroke}
#gunner-sight .gs-gun{position:absolute;left:0;top:0;width:26px;height:26px;margin:-13px 0 0 -13px;border:2px solid rgba(255,196,80,.92);border-radius:50%;box-shadow:0 0 6px rgba(0,0,0,.6),inset 0 0 4px rgba(0,0,0,.35);transition:opacity .15s,border-color .15s,width .15s,height .15s,margin .15s;will-change:transform}
#gunner-sight .gs-gun::after{content:'';position:absolute;left:50%;top:50%;width:4px;height:4px;margin:-2px;border-radius:50%;background:rgba(255,196,80,.95);transition:background .15s}
#gunner-sight .gs-gun.ok{border-color:rgba(150,255,120,.95);width:34px;height:34px;margin:-17px 0 0 -17px}
#gunner-sight .gs-gun.ok::after{background:rgba(150,255,120,.95)}
#gunner-sight.marker-only>*:not(.gs-gun){display:none}
#gunner-sight .gs-panel{position:absolute;left:50%;top:calc(50% + 86px);transform:translateX(-50%);display:flex;gap:14px;align-items:center;
  padding:6px 14px;border-radius:9px;background:rgba(8,12,8,.62);border:1px solid rgba(160,220,120,.35);color:#b6f08c;font-size:13px;letter-spacing:.06em;text-shadow:0 0 6px rgba(120,255,80,.35)}
#gunner-sight .gs-panel b{font-weight:400;color:#eaffd8}
#gunner-sight .gs-rel{width:90px;height:6px;border-radius:4px;background:rgba(160,220,120,.18);overflow:hidden}
#gunner-sight .gs-rel i{display:block;height:100%;background:#b6f08c}
#gunner-sight .gs-rel.busy i{background:#ffb04a}
#gunner-sight .gs-rel.warm i{background:#ffd58c}
#gunner-sight .gs-rel.hot i{background:#ff7a5c}
#gunner-sight .gs-panel.hot{border-color:rgba(255,122,92,.6);color:#ffb7a3}
#gunner-sight .gs-gun.off{border-color:rgba(255,122,92,.95)}
#gunner-sight .gs-gun.off::after{background:rgba(255,122,92,.95)}
#gunner-sight .gs-help{position:absolute;right:max(16px,var(--safe-right,0px));top:62%;transform:translateY(-50%);font-size:11px;color:rgba(200,240,170,.75);text-align:right;line-height:1.7;font-family:system-ui,sans-serif}
body.mobile #gunner-sight .gs-help,body.mobile #gunner-sight .gs-panel,body.embed #gunner-sight .gs-help,body.embed #gunner-sight .gs-panel{display:none}
`;
