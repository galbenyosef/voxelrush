// index-BeUlFSPp 126 — classlist
// Lines 72308-72365 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
const Vs = (s) => Oo[s],
  Ql = (s) => we(Oo[s].en, Oo[s].ru),
  Jl = (s) => (s ? we(s.name, s.ru) : we("Factory Original", "Заводской вид")),
  hk = {
    286: ["Helmets", "Шлемы"],
    289: ["Body armour", "Бронежилеты"],
    292: ["Armoured pants", "Бронештаны"],
    295: ["Combat boots", "Берцы"],
  },
  Zn = (s) =>
    s === 278
      ? we("Drills", "Буры")
      : s === 338
        ? we("Chainsaws", "Бензопилы")
        : hk[s]
          ? we(...hk[s])
          : (Li(s) ?? String(s)),
  Ag = (s) => dn("ar-price", `${xn(16)}<b>${s.toLocaleString()}</b>`),
  bee = {
    pulse: ["Pulsing glow", "Пульсирующее свечение"],
    flow: ["Live data flow", "Бегущие импульсы"],
    holo: ["Holographic", "Голографический"],
    galaxy: ["Deep space parallax", "Космический параллакс"],
    lava: ["Flowing magma", "Текущая магма"],
    electric: ["Lightning strikes", "Удары молний"],
    glitch: ["Glitch FX", "Глитч-эффект"],
    aurora: ["Shifting aurora", "Переливы сияния"],
    sparkle: ["Glints", "Блики"],
    synth: ["Scanlines", "Сканлайны"],
    frost: ["Frost glow", "Морозное свечение"],
    inferno: ["Rising flames & embers", "Восходящее пламя и искры"],
    arcane: ["Runes write themselves", "Руны вписываются светом"],
    candle: ["Candlelit carvings", "Свечи в резьбе"],
    spectral: ["Drifting spirits", "Плывущие духи"],
  },
  wu = (s, e) => !e || io(e)?.price === 0 || Lt.owned.includes(XS(s, e)),
  dk = (s) =>
    s === "custom"
      ? !!Lt.custom
      : H0.find((e) => e.id === s)?.price === 0 ||
        Lt.owned.includes(`character:${s}`),
  Pr = (s) => Lt.weapons[gm(s)] ?? "";
function rl(s, e, t, i, n = !1) {
  const o = $e("img", "ar-thumb");
  ((o.alt = ""), (o.decoding = "async"), (o.draggable = !1));
  const a = HJ(s, e, t, i);
  return (
    a
      ? (o.src = a)
      : (o.classList.add("loading"),
        vr(s, e, t, i, n)
          .then((r) => {
            ((o.src = r), o.classList.remove("loading"));
          })
          .catch(() => o.classList.remove("loading"))),
    o
  );
}
