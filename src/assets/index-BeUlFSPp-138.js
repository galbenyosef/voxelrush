// index-BeUlFSPp 138 — test
// Lines 78076-78116 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const Z4 = 3,
  Q4 = 24,
  Tk = "[A-Za-z0-9_]{3,24}",
  zy = 254,
  zp = 8,
  Fp = 128;
function Tw(s) {
  return s.length >= Z4 && s.length <= Q4 && !/[^A-Za-z0-9_]/.test(s);
}
function J4(s) {
  return s.trim().toLowerCase();
}
function xk(s) {
  const e = J4(s);
  if (e.length > zy) return !1;
  const t = e.split("@");
  if (t.length !== 2) return !1;
  const [i, n] = t;
  if (
    !i ||
    i.length > 64 ||
    /[^A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]/.test(i) ||
    i.startsWith(".") ||
    i.endsWith(".") ||
    i.includes("..")
  )
    return !1;
  const o = n.split(".");
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
