// assets__index-Dp6GxvJu 52 — pos
// Lines 44413-44478 of readable/assets__index-Dp6GxvJu.pretty.js (statement-aligned).
const Eg = [
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
  bW = new Map(
    Eg.map((n) => [n, Eg.find((e) => e.dir.every((t, i) => t === -n.dir[i]))]),
  ),
  wW = [1, 1, 1, 1],
  va = 0.02,
  zT = 0.002,
  ba = 0.003,
  Hk = 5,
  t4 = 7,
  MW = new Set([v.FLY_AGARIC, v.MUSHROOM]);
