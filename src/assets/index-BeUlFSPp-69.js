// index-BeUlFSPp 69 — pos
// Lines 51576-51656 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
function FO(s, e, t) {
  if (s === zO) return Ay;
  const i = Math.floor(e / 24),
    n = Math.floor(t / 24),
    o = e / 24 - i,
    a = t / 24 - n,
    r = ig(s, i, n),
    l = ig(s, i + 1, n),
    c = ig(s, i, n + 1),
    h = ig(s, i + 1, n + 1);
  return [0, 1, 2].map(
    (d) =>
      (r[d] * (1 - o) + l[d] * o) * (1 - a) + (c[d] * (1 - o) + h[d] * o) * a,
  );
}
const Tv = [
    {
      dir: [-1, 0, 0],
      corners: [
        { pos: [0, 1, 0], uv: [0, 1] },
        { pos: [0, 0, 0], uv: [0, 0] },
        { pos: [0, 1, 1], uv: [1, 1] },
        { pos: [0, 0, 1], uv: [1, 0] },
      ],
    },
    {
      dir: [1, 0, 0],
      corners: [
        { pos: [1, 1, 1], uv: [0, 1] },
        { pos: [1, 0, 1], uv: [0, 0] },
        { pos: [1, 1, 0], uv: [1, 1] },
        { pos: [1, 0, 0], uv: [1, 0] },
      ],
    },
    {
      dir: [0, -1, 0],
      corners: [
        { pos: [1, 0, 1], uv: [1, 0] },
        { pos: [0, 0, 1], uv: [0, 0] },
        { pos: [1, 0, 0], uv: [1, 1] },
        { pos: [0, 0, 0], uv: [0, 1] },
      ],
    },
    {
      dir: [0, 1, 0],
      corners: [
        { pos: [0, 1, 1], uv: [1, 1] },
        { pos: [1, 1, 1], uv: [0, 1] },
        { pos: [0, 1, 0], uv: [1, 0] },
        { pos: [1, 1, 0], uv: [0, 0] },
      ],
    },
    {
      dir: [0, 0, -1],
      corners: [
        { pos: [1, 0, 0], uv: [0, 0] },
        { pos: [0, 0, 0], uv: [1, 0] },
        { pos: [1, 1, 0], uv: [0, 1] },
        { pos: [0, 1, 0], uv: [1, 1] },
      ],
    },
    {
      dir: [0, 0, 1],
      corners: [
        { pos: [0, 0, 1], uv: [0, 0] },
        { pos: [1, 0, 1], uv: [1, 0] },
        { pos: [0, 1, 1], uv: [0, 1] },
        { pos: [1, 1, 1], uv: [1, 1] },
      ],
    },
  ],
  dj = new Map(
    Tv.map((s) => [s, Tv.find((e) => e.dir.every((t, i) => t === -s.dir[i]))]),
  ),
  uj = [1, 1, 1, 1],
  Za = 0.02,
  cR = 0.002,
  Qa = 0.003,
  UO = 5,
  YA = 7,
  fj = new Set([v.FLY_AGARIC, v.MUSHROOM]);
