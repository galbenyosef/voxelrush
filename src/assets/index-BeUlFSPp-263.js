// index-BeUlFSPp 263 — activeelement
// Lines 146920-146951 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
let DE;
hee();
Bq();
eee(() => {
  if (DE?.running) {
    DE.offerUpdate();
    return;
  }
  document.activeElement instanceof HTMLInputElement ||
    document.activeElement instanceof HTMLTextAreaElement ||
    document.querySelector("dialog[open]") ||
    G.loading.visible ||
    (G.showLoading(!0, z("updateInstalling")), j7() || G.showLoading(!1));
});
G.onPlay = async (s, e, t) => {
  const i = e === "local" ? "local" : gre(e),
    n = (DE ??= new Bhe());
  ((window.game = n), (window.fcUI = G));
  try {
    return (await n.start(s, i, t), i !== "local" && ln("join_ok"), !0);
  } catch (o) {
    return (
      i !== "local" &&
        (ln("join_fail"),
        B4(`join failed (${i.replace(/^wss?:\/\//, "").slice(0, 40)})`, o)),
      await n.net.disconnect(),
      G.showMenu(o instanceof Error ? o.message : String(o)),
      x9(),
      !1
    );
  }
};
