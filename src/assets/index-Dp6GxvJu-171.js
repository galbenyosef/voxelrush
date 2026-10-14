// index-Dp6GxvJu 171 — createelement
// Lines 98054-98150 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function _J(n, e, t) {
  var u;
  (u = document.getElementById("sign-editor")) == null || u.remove();
  const i = z.language === "en",
    s = document.createElement("div");
  ((s.id = "sign-editor"),
    (s.className = "overlay"),
    s.setAttribute("role", "dialog"),
    s.setAttribute("aria-modal", "true"),
    Object.assign(s.style, {
      position: "fixed",
      inset: "0",
      zIndex: "200",
      background: "#0009",
      display: "grid",
      placeItems: "center",
      padding: "12px",
    }));
  const o = document.createElement("div");
  Object.assign(o.style, {
    width: "min(460px,100%)",
    maxHeight: "90dvh",
    overflowY: "auto",
    background: "#182332",
    color: "#eef4ff",
    padding: "20px",
    borderRadius: "12px",
  });
  const a = document.createElement("h3");
  a.textContent = i ? "Sign · 4 lines" : "Табличка · 4 строки";
  const r = document.createElement("textarea");
  ((r.value = n),
    (r.rows = 4),
    (r.maxLength = 115),
    r.setAttribute("aria-label", i ? "Sign text" : "Текст таблички"),
    Object.assign(r.style, {
      width: "100%",
      boxSizing: "border-box",
      font: "16px/1.7 monospace",
      background: "#ad8654",
      color: "#281b11",
      resize: "none",
    }),
    (r.oninput = () => {
      const f = ST(r.value);
      f !== r.value && (r.value = f);
    }));
  const l = document.createElement("p");
  ((l.style.cssText = "font:12px/1.6 monospace;white-space:pre-line"),
    (l.textContent = i
      ? `Line 2: [Gate], [Gate Horizontal], [Bridge], [Lift Up], [Lift Down] or [Lift].
Gate/bridge: lines 3–4 = opposite corners, relative to this sign (dx,dy,dz). Max 256 blocks; 24 blocks away.
Example: 1,0,0 and 3,2,0.
Lift stops share X/Z. Keep a clear landing in front. Redstone opens gates/bridges; a rising pulse activates lifts.
Crouch + Use to edit an existing mechanism.`
      : `Строка 2: [Gate], [Gate Horizontal], [Bridge], [Lift Up], [Lift Down] или [Lift].
Ворота/мост: строки 3–4 — противоположные углы относительно таблички (dx,dy,dz). До 256 блоков, радиус 24 блока.
Пример: 1,0,0 и 3,2,0.
Остановки лифта ставьте друг над другом. Перед выходом нужно свободное место. Редстоун открывает ворота/мост; импульс запускает лифт.
Присед + Использовать — редактирование механизма.`));
  const c = () => {
    (s.remove(), document.removeEventListener("keydown", h, !0), t());
  };
  s.addEventListener("protection-close", c, { once: !0 });
  const h = (f) => {
    (f.stopPropagation(), f.code === "Escape" && (f.preventDefault(), c()));
  };
  document.addEventListener("keydown", h, !0);
  const d = document.createElement("div");
  d.style.cssText = "display:flex;gap:8px;flex-wrap:wrap";
  for (const [f, p] of [
    [i ? "Save" : "Сохранить", 1],
    [i ? "Activate" : "Активировать", 2],
    [i ? "Cancel" : "Отмена", -1],
  ]) {
    const m = document.createElement("button");
    ((m.className = "btn secondary"),
      (m.textContent = f),
      (m.onclick = () => {
        (p >= 0 && e(p, ST(r.value)), c());
      }),
      d.append(m));
  }
  (o.append(a, r, l, d), s.append(o), document.body.append(s), r.focus());
}
function kb(n) {
  const e = ["raid-choice", "defense", "district", "evac", "raid"];
  return [...n]
    .sort((t, i) => e.indexOf(t.channel) - e.indexOf(i.channel))
    .flatMap((t) =>
      [
        ...(t.action ? [{ label: t.action.label, command: "/evac call" }] : []),
        ...(t.actions ?? []),
      ].map((i) => ({ ...i, channel: t.channel })),
    )
    .map((t, i) => ({ ...t, number: i + 1 }));
}
