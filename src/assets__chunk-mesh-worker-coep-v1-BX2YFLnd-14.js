// assets__chunk-mesh-worker-coep-v1-BX2YFLnd 14 — map
// Lines 4628-4692 of readable/assets__chunk-mesh-worker-coep-v1-BX2YFLnd.pretty.js (statement-aligned).
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: "169" } }),
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = "169"));
const Xn = [
    ["olympus1000", "Gates of Olympus 1000", "goo1000", 12162047, "Ω"],
    ["olympus", "Gates of Olympus", "gatesoo", 10781940, "Ω"],
    ["olympus-ss", "Gates of Olympus Super Scatter", "gooss", 16434514, "Ω"],
    ["olympus2500", "Gates of Olympus 2500", "goo2500", 7981567, "Ω"],
    ["fortune", "Fortune of Olympus", "foo-2an", 15513949, "Ω"],
    ["bonanza1000", "Sweet Bonanza 1000", "swbo1000", 16746443, "♥"],
    ["bonanza-ss", "Sweet Bonanza Super Scatter", "sbss", 16764280, "♥"],
    ["bonanza2500", "Sweet Bonanza 2500", "swbon2500", 15109119, "♥"],
    ["bonanza", "Sweet Bonanza", "swbon", 16752076, "♥"],
    ["sweet-rush", "Sweet Rush Bonanza", "srbon", 16755312, "♥"],
    ["zeus-hades", "Zeus vs Hades Gods of War", "zwhgof", 16742229, "⚡"],
    ["zeus-hades250", "Zeus vs Hades 250", "zvh250", 16758102, "⚡"],
    ["doghouse1000", "The Dog House Megaways 1000", "tdhm1000", 16764796, "♠"],
    ["doghouse-mega", "The Dog House Megaways", "dhmega", 16364921, "♠"],
    ["doghouse", "The Dog House", "tdhouse", 15701110, "♠"],
    ["starlight1000", "Starlight Princess 1000", "sp1000", 10008575, "★"],
    [
      "starlight-ss",
      "Starlight Princess Super Scatter",
      "spss-44x",
      13868031,
      "★",
    ],
    ["heaven1000", "Gates of Heaven 1000", "goh1000", 8773119, "✦"],
    ["heaven-ss", "Gates of Heaven Super Scatter", "gohss", 11921151, "✦"],
    ["sugar-ss", "Sugar Rush Super Scatter", "srss-xou", 16744651, "♥"],
    ["sugar1000", "Sugar Rush 1000", "sr1000", 14325247, "♥"],
    ["sugar", "Sugar Rush", "srush", 16755414, "♥"],
    ["joker", "Joker's Jewels", "jjewels", 16615563, "♦"],
    ["athena1000", "Wisdom of Athena 1000", "woa1000", 7789261, "Α"],
    ["angel-sinner", "Angel vs Sinner", "avsin", 15897794, "✦"],
    ["athena", "Wisdom of Athena", "woath", 10279862, "Α"],
    ["lions", "5 Lions Megaways 2", "5lmw2", 16764272, "♠"],
    ["buffalo", "Buffalo King Megaways", "bkmw", 15181168, "♠"],
    ["bass1000", "Big Bass Splash 1000", "bbs1000", 7395821, "≈"],
    ["bigger-bass", "Bigger Bass Bonanza", "bbb-6od", 8244935, "≈"],
    ["big-bass", "Big Bass Bonanza", "bigbb", 8765439, "≈"],
  ].map(([r, t, e, s, n]) => ({
    id: r,
    title: t,
    host: `${e}.pages.dev`,
    color: s,
    motif: n,
  })),
  Zn = 600,
  D = 16,
  Y = 128,
  Ms = 40;
({
  ...Object.fromEntries(
    Xn.map((r, t) => [Zn + t, `Игровой автомат: ${r.title}`]),
  ),
});
({
  ...Object.fromEntries(Xn.map((r, t) => [Zn + t, `Slot machine: ${r.title}`])),
});
