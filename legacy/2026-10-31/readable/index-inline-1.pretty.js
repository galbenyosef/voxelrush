(() => {
  const p = new URLSearchParams(location.search);
  let returning = false;
  try {
    const saved = JSON.parse(sessionStorage.getItem("vr-rejoin") || "null");
    returning =
      !!saved &&
      typeof saved.address === "string" &&
      typeof saved.name === "string" &&
      Date.now() - saved.at < 180000;
  } catch {}
  if (
    returning ||
    (p.get("menu") !== "1" &&
      (p.get("embed") === "x" ||
        window.top !== window.self ||
        p.has("mode") ||
        p.has("server")))
  )
    document.documentElement.classList.add("boot-joining");
})();
