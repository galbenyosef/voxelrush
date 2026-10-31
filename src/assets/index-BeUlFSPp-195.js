// index-BeUlFSPp 195 — createelement
// Lines 105379-105474 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function $oe(s, e, t) {
  (document.getElementById("sign-editor")?.remove(), wi());
  const i = document.createElement("div");
  ((i.id = "sign-editor"),
    (i.className = "overlay"),
    i.setAttribute("role", "dialog"),
    i.setAttribute("aria-modal", "true"),
    Object.assign(i.style, {
      position: "fixed",
      inset: "0",
      zIndex: "200",
      background: "#0009",
      display: "grid",
      placeItems: "center",
      padding: "12px",
    }));
  const n = document.createElement("div");
  Object.assign(n.style, {
    width: "min(460px,100%)",
    maxHeight: "90dvh",
    overflowY: "auto",
    background: "#182332",
    color: "#eef4ff",
    padding: "20px",
    borderRadius: "12px",
  });
  const o = document.createElement("h3");
  o.textContent = I("Sign · 4 lines", "Табличка · 4 строки");
  const a = document.createElement("textarea");
  ((a.value = s),
    (a.rows = 4),
    (a.maxLength = 115),
    a.setAttribute("aria-label", I("Sign text", "Текст таблички")),
    Object.assign(a.style, {
      width: "100%",
      boxSizing: "border-box",
      font: "16px/1.7 monospace",
      background: "#ad8654",
      color: "#281b11",
      resize: "none",
    }),
    (a.oninput = () => {
      const d = Rx(a.value);
      d !== a.value && (a.value = d);
    }));
  const r = document.createElement("p");
  ((r.style.cssText = "font:12px/1.6 monospace;white-space:pre-line"),
    (r.textContent = I(
      `Line 2: [Gate], [Gate Horizontal], [Bridge], [Lift Up], [Lift Down] or [Lift].
Gate/bridge: lines 3–4 = opposite corners, relative to this sign (dx,dy,dz). Max 256 blocks; 24 blocks away.
Example: 1,0,0 and 3,2,0.
Lift stops share X/Z. Keep a clear landing in front. Redstone opens gates/bridges; a rising pulse activates lifts.
Crouch + Use to edit an existing mechanism.`,
      `Строка 2: [Gate], [Gate Horizontal], [Bridge], [Lift Up], [Lift Down] или [Lift].
Ворота/мост: строки 3–4 — противоположные углы относительно таблички (dx,dy,dz). До 256 блоков, радиус 24 блока.
Пример: 1,0,0 и 3,2,0.
Остановки лифта ставьте друг над другом. Перед выходом нужно свободное место. Редстоун открывает ворота/мост; импульс запускает лифт.
Присед + Использовать — редактирование механизма.`,
    )));
  const l = () => {
    (i.remove(), document.removeEventListener("keydown", c, !0), t());
  };
  i.addEventListener("protection-close", l, { once: !0 });
  const c = (d) => {
    (d.stopPropagation(), d.code === "Escape" && (d.preventDefault(), l()));
  };
  document.addEventListener("keydown", c, !0);
  const h = document.createElement("div");
  h.style.cssText = "display:flex;gap:8px;flex-wrap:wrap";
  for (const [d, u] of [
    [I("Save", "Сохранить"), 1],
    [I("Activate", "Активировать"), 2],
    [I("Cancel", "Отмена"), -1],
  ]) {
    const f = document.createElement("button");
    ((f.className = "btn secondary"),
      (f.textContent = d),
      (f.onclick = () => {
        (u >= 0 && e(u, Rx(a.value)), l());
      }),
      h.append(f));
  }
  (n.append(o, a, r, h), i.append(n), document.body.append(i), a.focus());
}
function eM(s) {
  const e = ["raid-choice", "defense", "district", "evac", "raid"];
  return [...s]
    .sort((t, i) => e.indexOf(t.channel) - e.indexOf(i.channel))
    .flatMap((t) =>
      [
        ...(t.action ? [{ label: t.action.label, command: "/evac call" }] : []),
        ...(t.actions ?? []),
      ].map((i) => ({ ...i, channel: t.channel })),
    )
    .map((t, i) => ({ ...t, number: i + 1 }));
}
