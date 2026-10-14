// assets__index-Dp6GxvJu 154 — includes
// Lines 92202-92268 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
const mf = (n) => "$" + n.toLocaleString("en-US", { maximumFractionDigits: 2 }),
  w_ = (n, e) =>
    n < 0
      ? `<span class="bj-card back" style="--i:${e}"></span>`
      : `<span class="bj-card ${[1, 3].includes(Math.floor(n / 13)) ? "red" : ""}" style="--i:${e}"><b>${["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"][n % 13]}</b><i>${["♠", "♥", "♣", "♦"][Math.floor(n / 13)]}</i></span>`,
  vQ = [10, 25, 100, 500, 1e3, 5e3];
function bQ(n, e, t, i) {
  const { total: s, soft: o } = Pd(n),
    a = $p(e);
  if (i) {
    const r = $p(n[0]);
    if (
      r === 11 ||
      r === 8 ||
      (r === 9 && ![7, 10, 11].includes(a)) ||
      ((r === 2 || r === 3 || r === 7) && a <= 7) ||
      (r === 6 && a <= 6) ||
      (r === 4 && (a === 5 || a === 6))
    )
      return "split";
  }
  return o && n.length >= 2
    ? s >= 19
      ? s === 19 && a === 6 && t
        ? "double"
        : "stand"
      : s === 18
        ? a <= 6 && a >= 2
          ? t
            ? "double"
            : "stand"
          : a <= 8
            ? "stand"
            : "hit"
        : s === 17
          ? a >= 3 && a <= 6 && t
            ? "double"
            : "hit"
          : s >= 15
            ? a >= 4 && a <= 6 && t
              ? "double"
              : "hit"
            : a >= 5 && a <= 6 && t
              ? "double"
              : "hit"
    : s >= 17
      ? "stand"
      : s >= 13
        ? a <= 6
          ? "stand"
          : "hit"
        : s === 12
          ? a >= 4 && a <= 6
            ? "stand"
            : "hit"
          : s === 11
            ? t
              ? "double"
              : "hit"
            : s === 10
              ? a <= 9 && t
                ? "double"
                : "hit"
              : s === 9 && a >= 3 && a <= 6 && t
                ? "double"
                : "hit";
}
