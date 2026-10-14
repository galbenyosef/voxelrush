// index-Dp6GxvJu 02 — tostring
// Lines 26285-26301 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
function RH(n, e) {
  const t = _H(n.game);
  if (!t) throw Error("Unknown casino game");
  const i = new URL(`https://${t.host}/`);
  return (
    (i.search = new URLSearchParams({
      player: `fable-${n.token}`,
      t: n.token,
      balance: n.initial.toFixed(2),
      currency: "USD",
      lang: e === "en" ? "en" : "ru",
      debug: "0",
      reset: "1",
    }).toString()),
    i.toString()
  );
}
