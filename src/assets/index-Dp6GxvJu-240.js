// index-Dp6GxvJu 240 — activeelement
// Lines 139051-139080 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
let Uf;
mY();
dU();
aY(() => {
  if (Uf != null && Uf.running) {
    Uf.offerUpdate();
    return;
  }
  document.activeElement instanceof HTMLInputElement ||
    document.activeElement instanceof HTMLTextAreaElement ||
    document.querySelector("dialog[open]") ||
    V.loading.visible ||
    (V.showLoading(!0, U("updateInstalling")), $L() || V.showLoading(!1));
});
V.onPlay = async (n, e, t) => {
  const i = e === "local" ? "local" : ste(e),
    s = Uf ?? (Uf = new Zse());
  ((window.game = s), (window.fcUI = V));
  try {
    return (await s.start(n, i, t), i !== "local" && ys("join_ok"), !0);
  } catch (o) {
    return (
      i !== "local" && ys("join_fail"),
      await s.net.disconnect(),
      V.showMenu(o instanceof Error ? o.message : String(o)),
      aP(),
      !1
    );
  }
};
