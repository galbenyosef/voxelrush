// index-Dp6GxvJu 146 — localstorage
// Lines 88818-88864 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const TI = "vr-play-seconds",
  _M = "vr-finished-matches",
  U4 = (n) => {
    try {
      return Math.max(0, Number(localStorage.getItem(n)) || 0);
    } catch {
      return 0;
    }
  };
let RM = U4(TI),
  bb = 0;
function vZ(n) {
  if (!(!(n > 0) || n > 1) && ((RM += n), (bb += n), bb >= 20)) {
    bb = 0;
    try {
      localStorage.setItem(TI, String(Math.round(RM)));
    } catch {}
  }
}
const bZ = () => RM,
  wZ = () => U4(_M);
function MZ() {
  try {
    localStorage.setItem(_M, String(U4(_M) + 1));
  } catch {}
}
const mt = (n, e, t) => {
    const i = document.createElement(n);
    return (e && (i.className = e), t !== void 0 && (i.textContent = t), i);
  },
  g_ = (n) =>
    `${Math.floor(n / 60)}:${String(Math.max(0, Math.floor(n % 60))).padStart(2, "0")}`,
  SZ = {
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
  };
