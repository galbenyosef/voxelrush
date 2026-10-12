(() => {
  const isDevOrigin =
    location.protocol === "http:" &&
    location.hostname === "212.43.159.250" &&
    location.port === "5174";
  if (!isDevOrigin || !("serviceWorker" in navigator)) return;

  window.addEventListener("load", () => {
    void (async () => {
      const registrations = await navigator.serviceWorker.getRegistrations();
      const cacheKeys = "caches" in window ? await caches.keys() : [];
      if (!registrations.length && !cacheKeys.length) return;

      await Promise.all(
        registrations.map((registration) => registration.unregister()),
      );
      if ("caches" in window) {
        await Promise.all(cacheKeys.map((key) => caches.delete(key)));
      }
      location.reload();
    })().catch(() => {
      // Storage cleanup is best-effort; the app can still start if the
      // browser blocks access to one of the storage APIs.
    });
  });
})();
