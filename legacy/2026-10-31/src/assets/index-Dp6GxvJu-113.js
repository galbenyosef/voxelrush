// index-Dp6GxvJu 113 — test
// Lines 69117-69157 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
const dM = 3,
  uM = 24,
  K6 = "[A-Za-z0-9_]{3,24}",
  V2 = 254,
  hf = 8,
  df = 128;
function Y6(n) {
  return n.length >= dM && n.length <= uM && !/[^A-Za-z0-9_]/.test(n);
}
function fM(n) {
  return n.trim().toLowerCase();
}
function j6(n) {
  const e = fM(n);
  if (e.length > V2) return !1;
  const t = e.split("@");
  if (t.length !== 2) return !1;
  const [i, s] = t;
  if (
    !i ||
    i.length > 64 ||
    /[^A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]/.test(i) ||
    i.startsWith(".") ||
    i.endsWith(".") ||
    i.includes("..")
  )
    return !1;
  const o = s.split(".");
  return (
    o.length >= 2 &&
    o.every(
      (a) =>
        a.length >= 1 &&
        a.length <= 63 &&
        !/[^A-Za-z0-9-]/.test(a) &&
        !a.startsWith("-") &&
        !a.endsWith("-"),
    ) &&
    /^[A-Za-z]{2,63}$/.test(o.at(-1))
  );
}
