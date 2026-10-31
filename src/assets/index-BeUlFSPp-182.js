// index-BeUlFSPp 182 — setattribute
// Lines 101827-102111 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function Yne(s, e) {
  const t = [];
  for (const i of s.split(`
`)) {
    let n = "";
    for (const o of i.split(" ")) {
      if (o.length > e) {
        n && t.push(n);
        for (let r = 0; r < o.length; r += e) t.push(o.slice(r, r + e));
        n = "";
        continue;
      }
      const a = n ? `${n} ${o}` : o;
      a.length > e ? (t.push(n), (n = o)) : (n = a);
    }
    t.push(n);
  }
  return t;
}
class jne {
  constructor(e, t) {
    ((this.scene = e), (this.world = t));
  }
  records = new Map();
  displays = new Map();
  checkAt = 0;
  time = 0;
  apply(e) {
    for (const t of e)
      t.text
        ? this.records.set(Vp(t.x, t.y, t.z), { ...t, ...XN(t) })
        : this.records.delete(Vp(t.x, t.y, t.z));
    this.checkAt = 0;
  }
  clear() {
    for (const e of this.displays.values()) this.dispose(e);
    (this.displays.clear(), this.records.clear());
  }
  at(e, t, i) {
    const n = Vne(
      (o, a, r) => this.world.getBlock(o, a, r),
      (o, a, r) => this.world.getMeta(o, a, r),
      e,
      t,
      i,
    );
    return n
      ? {
          group: n,
          content:
            qne(n, (o, a, r) => this.records.get(Vp(o, a, r)))?.content ?? null,
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
      n = new Set();
    for (const o of this.records.values()) {
      if (
        n.has(Vp(o.x, o.y, o.z)) ||
        Math.abs(o.x - t.x) > 160 ||
        Math.abs(o.z - t.z) > 160
      )
        continue;
      const a = this.at(o.x, o.y, o.z);
      if (a) for (const d of a.group.cells) n.add(Vp(d.x, d.y, d.z));
      if (!a || !a.content || i.has(a.group.key)) continue;
      i.add(a.group.key);
      const { group: r, content: l } = a,
        c = `${r.facing}|${r.width}x${r.height}|${r.cells.map((d) => `${d.x},${d.y},${d.z}`).join(";")}|${l.text}|${l.color}|${l.fx}|${Y.language}`,
        h = this.displays.get(r.key);
      h?.sig !== c &&
        (h && this.dispose(h), this.displays.set(r.key, this.build(r, l, c)));
    }
    for (const [o, a] of this.displays)
      i.has(o) || (this.dispose(a), this.displays.delete(o));
  }
  build(e, t, i) {
    const { canvas: n, repeat: o } = ZN(t, e.width, e.height),
      a = new Si(n);
    ((a.colorSpace = Ii),
      (a.minFilter = za),
      (a.magFilter = t.fx === "panel" ? pn : as),
      (a.anisotropy = t.fx === "panel" ? 8 : 4),
      o < 1 && ((a.wrapS = Nl), (a.repeat.x = o)));
    const [r, l] = Qo[e.facing],
      c = l,
      h = -r,
      d = [],
      u = [],
      f = [];
    for (const S of e.cells) {
      const M = S.x + 0.5 + r * 0.503,
        E = S.z + 0.5 + l * 0.503,
        A = S.u / e.width,
        T = (S.u + 1) / e.width,
        x = 1 - (S.v + 1) / e.height,
        R = 1 - S.v / e.height,
        _ = d.length / 3;
      for (const [C, P, O, B] of [
        [-0.5, -0.5, A, x],
        [0.5, -0.5, T, x],
        [-0.5, 0.5, A, R],
        [0.5, 0.5, T, R],
      ])
        (d.push(M + c * C, S.y + 0.5 + P, E + h * C), u.push(O, B));
      f.push(_, _ + 1, _ + 2, _ + 2, _ + 1, _ + 3);
    }
    const p = new oi();
    (p.setAttribute("position", new Dt(d, 3)),
      p.setAttribute("uv", new Dt(u, 2)),
      p.setIndex(f),
      p.computeBoundingSphere());
    const m = new Ge(t.color),
      g = new Zt({
        map: a,
        color: t.fx === "panel" ? new Ge(16777215) : m.clone(),
        toneMapped: !1,
        polygonOffset: !0,
        polygonOffsetFactor: -1,
      }),
      y = new Q(p, g);
    ((y.name = "led-screen"), this.scene.add(y));
    const b = o < 1 ? (2 * o) / e.width : 0;
    return { sig: i, mesh: y, texture: a, fx: t.fx, base: m, scroll: b };
  }
  dispose(e) {
    (e.mesh.removeFromParent(),
      e.mesh.geometry.dispose(),
      e.texture.dispose(),
      e.mesh.material.dispose());
  }
}
function Xne(s, e, t, i) {
  (document.getElementById("screen-editor")?.remove(), wi());
  const n = { ...(s ?? { text: "", color: Zv[0], fx: "static" }) },
    o = document.createElement("div");
  ((o.id = "screen-editor"),
    (o.className = "overlay"),
    o.setAttribute("role", "dialog"),
    o.setAttribute("aria-modal", "true"),
    (o.innerHTML = `<style>
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
  </style><div class="se-panel"><h3>${I("LED screen", "LED-экран")}</h3><div class="se-sub"></div><canvas></canvas>
    <textarea rows="5" maxlength="${wE}" aria-label="${I("Screen text", "Текст экрана")}"></textarea>
    <div class="se-row se-colors"></div><div class="se-row se-effects"></div>
    <div class="se-actions"><button data-a="clear">${I("Clear", "Очистить")}</button><button data-a="cancel">${I("Cancel", "Отмена")}</button><button data-a="save" class="se-save">${I("Show", "Показать")}</button></div></div>`),
    (o.querySelector(".se-sub").textContent = I(
      `${e.width}×${e.height} blocks · place more screens next to it, facing the same way, to make it bigger`,
      `${e.width}×${e.height} блоков · ставьте рядом ещё экраны той же стороной — они объединятся в один большой`,
    )));
  const a = o.querySelector("textarea");
  a.value = n.text;
  const r = o.querySelector("canvas"),
    l = () => {
      const { canvas: p } = ZN(
        {
          ...n,
          fx: n.fx === "scroll" ? "static" : n.fx,
          text: n.text || I("YOUR TEXT", "ВАШ ТЕКСТ"),
        },
        e.width,
        e.height,
      );
      ((r.width = p.width), (r.height = p.height));
      const m = r.getContext("2d");
      (m.drawImage(p, 0, 0),
        n.fx !== "panel" &&
          ((m.globalCompositeOperation = "multiply"),
          (m.fillStyle = n.fx === "rainbow" ? "#ff9af0" : n.color),
          m.fillRect(0, 0, p.width, p.height),
          (m.globalCompositeOperation = "source-over")),
        (r.style.aspectRatio = `${e.width}/${e.height}`),
        (r.style.maxHeight = "220px"),
        (r.style.objectFit = "contain"));
    };
  a.oninput = () => {
    ((n.text = a.value.slice(0, wE)), l());
  };
  const c = o.querySelector(".se-colors");
  for (const p of Zv) {
    const m = document.createElement("button");
    ((m.className = "se-swatch"),
      (m.style.background = p),
      m.setAttribute("aria-label", p),
      m.setAttribute("aria-pressed", String(p === n.color)),
      (m.onclick = () => {
        ((n.color = p),
          c
            .querySelectorAll("button")
            .forEach((g) => g.setAttribute("aria-pressed", String(g === m))),
          l());
      }),
      c.append(m));
  }
  const h = {
      static: ["Static", "Статично"],
      scroll: ["Scroll", "Бегущая строка"],
      blink: ["Blink", "Мигание"],
      rainbow: ["Rainbow", "Радуга"],
      panel: ["Info board", "Инфо-табло"],
    },
    d = o.querySelector(".se-effects");
  for (const p of jN) {
    const m = document.createElement("button");
    ((m.className = "se-fx"),
      (m.textContent = I(...h[p])),
      m.setAttribute("aria-pressed", String(p === n.fx)),
      (m.onclick = () => {
        ((n.fx = p),
          d
            .querySelectorAll("button")
            .forEach((g) => g.setAttribute("aria-pressed", String(g === m))),
          l());
      }),
      d.append(m));
  }
  const u = () => {
      (o.remove(), document.removeEventListener("keydown", f, !0), i());
    },
    f = (p) => {
      (p.stopPropagation(), p.code === "Escape" && (p.preventDefault(), u()));
    };
  (document.addEventListener("keydown", f, !0),
    o.addEventListener("protection-close", u, { once: !0 }),
    o.querySelector('[data-a="cancel"]').addEventListener("click", u),
    o.querySelector('[data-a="clear"]').addEventListener("click", () => {
      (t({ ...n, text: "" }), u());
    }),
    o.querySelector('[data-a="save"]').addEventListener("click", () => {
      (t(XN(n)), u());
    }),
    document.body.append(o),
    l(),
    a.focus());
}
const Zne = `
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
