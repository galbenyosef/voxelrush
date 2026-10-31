// index-Dp6GxvJu 196 — localworker
// Lines 106875-107260 of readable/assets/index-Dp6GxvJu.pretty.js (statement-aligned).
class ote {
  constructor() {
    w(this, "ws", null);
    w(this, "localWorker", null);
    w(this, "localCloseResolve", null);
    w(this, "handlers", new Map());
    w(this, "onClose", null);
    w(this, "onReconnectState", null);
    w(this, "connected", !1);
    w(this, "lastCloseCode", 0);
    w(this, "httpSessionToken", "");
    w(this, "reconnectSince", 0);
    w(this, "intentionalClose", !1);
    w(this, "reconnectTimer", 0);
    w(this, "reconnectAttempt", 0);
    w(this, "reconnecting", !1);
    w(this, "remoteUrl", "");
    w(this, "remoteName", "");
    w(this, "socketGeneration", 0);
    w(this, "sessionToken", ate());
    w(this, "welcomedAt", 0);
    w(this, "shortSessions", 0);
    w(this, "heardAt", 0);
  }
  get isLocal() {
    return !!this.localWorker;
  }
  get voiceIceUrl() {
    if (this.localWorker || !this.remoteUrl) return null;
    try {
      const e = new URL(this.remoteUrl);
      return (
        (e.protocol = e.protocol === "wss:" ? "https:" : "http:"),
        (e.pathname = "/api/voice-ice"),
        (e.search = ""),
        (e.hash = ""),
        e.toString()
      );
    } catch {
      return null;
    }
  }
  on(e, t) {
    this.handlers.set(e, t);
  }
  connect(e, t, i) {
    return (
      rU(e === "local"),
      e === "local"
        ? this.connectLocal(t, i)
        : ((this.intentionalClose = !1),
          (this.remoteUrl = e),
          (this.remoteName = t),
          (this.reconnectAttempt = 0),
          (this.reconnecting = !1),
          (this.welcomedAt = 0),
          (this.shortSessions = 0),
          this.connectRemote(e, t, !0))
    );
  }
  async connectRemote(e, t, i) {
    var o;
    let s = "";
    try {
      s = await lU(e);
    } catch (a) {
      if (i) throw a;
      const r = a.status;
      if (r !== 401 && r !== 403 && Date.now() - this.reconnectSince < 12e4) {
        this.scheduleReconnect();
        return;
      }
      ((this.reconnecting = !1),
        (o = this.onClose) == null ||
          o.call(this, a instanceof Error ? a.message : U("signInToPlay")));
      return;
    }
    if (!this.intentionalClose)
      return new Promise((a, r) => {
        let l = !1,
          c = !1,
          h = 0;
        const d = new WebSocket(e),
          u = ++this.socketGeneration,
          f = () => this.ws === d && this.socketGeneration === u;
        ((d.binaryType = "arraybuffer"), (this.ws = d));
        const p = (y) => {
            l || ((l = !0), r(new Error(y)));
          },
          m = (y) => {
            var g;
            return Ns(
              ((g = y.reason) == null ? void 0 : g.trim()) ||
                U("netConnectionClosed", { url: e }),
              SETTINGS.language,
            );
          };
        ((d.onopen = () => {
          if (!f()) {
            d.close();
            return;
          }
          ((this.connected = !0),
            this.send(
              new Xe(ue.C_HELLO)
                .str(t)
                .str(SETTINGS.language)
                .str(this.sessionToken)
                .str(s),
            ),
            (h = window.setTimeout(() => {
              !f() ||
                l ||
                (d.close(), i && p(U("netConnectFailed", { url: e })));
            }, 15e3)));
        }),
          (d.onmessage = (y) => {
            var S, M;
            if (!f()) return;
            this.heardAt = Date.now();
            const g = new q_(new Uint8Array(y.data)),
              b = g.u8();
            if (!l && b === ue.S_WELCOME) {
              ((l = !0), (c = !0), window.clearTimeout(h));
              const x = !i;
              ((this.welcomedAt = Date.now()),
                (this.reconnectAttempt = 0),
                x &&
                  ((this.reconnecting = !1),
                  (S = this.onReconnectState) == null || S.call(this, !1)),
                (this.lastCloseCode = 0),
                a());
            }
            (M = this.handlers.get(b)) == null || M(g);
          }),
          (d.onerror = () => {
            i && !l && p(U("netConnectFailed", { url: e }));
          }),
          (d.onclose = (y) => {
            var g;
            if (
              f() &&
              (window.clearTimeout(h),
              (this.connected = !1),
              c && (this.lastCloseCode = y.code),
              (this.ws = null),
              !this.intentionalClose)
            ) {
              if (i && !c) {
                l || p(m(y));
                return;
              }
              if (y.code === 1008) {
                ((this.reconnecting = !1),
                  (g = this.onClose) == null || g.call(this, m(y)));
                return;
              }
              (y.code === $I && (this.welcomedAt = 0),
                !this.lostAgain() && this.scheduleReconnect());
            }
          }));
      });
  }
  expectWord(e, t) {
    this.heardAt &&
      (this.heardAt = Math.max(this.heardAt, Date.now() - Math.max(0, t - e)));
  }
  dropIfSilent(e) {
    const t = this.ws;
    if (
      !t ||
      !this.connected ||
      this.reconnecting ||
      this.intentionalClose ||
      !this.remoteUrl ||
      !this.heardAt ||
      Date.now() - this.heardAt < e
    )
      return !1;
    (this.socketGeneration++,
      (this.ws = null),
      (this.connected = !1),
      (this.heardAt = 0),
      (this.lastCloseCode = 0));
    try {
      t.close();
    } catch {}
    return (this.lostAgain() || this.scheduleReconnect(), !0);
  }
  lostAgain() {
    var t;
    const e = this.welcomedAt ? Date.now() - this.welcomedAt : -1;
    return (
      (this.welcomedAt = 0),
      e < 0 ||
      ((this.shortSessions = e < ete ? this.shortSessions + 1 : 0),
      this.shortSessions < tte)
        ? !1
        : ((this.shortSessions = 0),
          this.reconnectTimer &&
            (window.clearTimeout(this.reconnectTimer),
            (this.reconnectTimer = 0)),
          (this.reconnecting = !1),
          (t = this.onClose) == null || t.call(this, U("netUnstable")),
          !0)
    );
  }
  scheduleReconnect() {
    var t;
    if (this.intentionalClose || this.reconnectTimer || !this.remoteUrl) return;
    this.reconnecting ||
      ((this.reconnecting = !0),
      (this.reconnectSince = Date.now()),
      (t = this.onReconnectState) == null || t.call(this, !0));
    const e =
      this.lastCloseCode === 1012
        ? Math.min(3e3, 800 + this.reconnectAttempt * 400)
        : Math.min(8e3, 500 * 2 ** Math.min(this.reconnectAttempt, 4));
    (this.reconnectAttempt++,
      (this.reconnectTimer = window.setTimeout(() => {
        ((this.reconnectTimer = 0),
          this.connectRemote(this.remoteUrl, this.remoteName, !1));
      }, e)));
  }
  connectLocal(e, t) {
    return new Promise(async (i, s) => {
      let o = !1,
        a = "worker",
        r = null,
        l = 0,
        c = !1,
        h;
      const d = window.setTimeout(() => {
          o ||
            ((o = !0),
            r == null || r.terminate(),
            this.localWorker === r && (this.localWorker = null),
            console.error(`Local server startup timed out at stage: ${a}`),
            s(new Error(U("localServerTimeout"))));
        }, 6e4),
        u = (p) => {
          o ||
            ((o = !0),
            window.clearTimeout(d),
            r == null || r.terminate(),
            this.localWorker === r && (this.localWorker = null),
            s(p));
        },
        f = (p) =>
          o || l !== 1 || c
            ? !1
            : ((c = !0),
              console.warn(`Local server worker retry after ${a}: ${p}`),
              r == null || r.terminate(),
              this.localWorker === r && (this.localWorker = null),
              window.setTimeout(() => h(), 0),
              !0);
      try {
        const p = await NY(await vX(t.worldId), e);
        ((h = () => {
          if (o) return;
          (l++, (c = !1), (a = "worker"));
          try {
            r = new Worker(
              new URL(
                "/assets/local-server-worker-coep-v1-CTlf9c4s.js",
                import.meta.url,
              ),
              { type: "module" },
            );
          } catch (y) {
            if (f(y instanceof Error ? y.message : String(y))) return;
            u(y instanceof Error ? y : new Error(String(y)));
            return;
          }
          ((this.localWorker = r),
            (r.onmessage = (y) => {
              var b, S, M;
              const g = y.data;
              if (g.type === "status") a = g.stage || a;
              else if (g.type === "ready")
                ((a = "welcome"),
                  (this.connected = !0),
                  this.send(new Xe(ue.C_HELLO).str(e).str(SETTINGS.language)));
              else if (g.type === "packet" && g.data) {
                const x = new q_(g.data),
                  T = x.u8();
                (!o &&
                  T === ue.S_WELCOME &&
                  ((o = !0), window.clearTimeout(d), i()),
                  (b = this.handlers.get(T)) == null || b(x));
              } else if (g.type === "files-saved") {
                const x = document.getElementById("localsavestatus");
                if (!x) return;
                (x.classList.add("show"),
                  window.setTimeout(() => x.classList.remove("show"), 1200));
              } else if (g.type === "save-error")
                console.error("Local world save failed:", g.message);
              else if (g.type === "error") {
                if (f(g.message || "startup error")) return;
                const x = new Error(
                  g.message || U("netConnectionClosed", { url: "local" }),
                );
                u(x);
              } else
                g.type === "close"
                  ? ((this.connected = !1),
                    o
                      ? (S = this.onClose) == null || S.call(this)
                      : u(
                          new Error(
                            g.reason ||
                              U("netConnectionClosed", { url: "local" }),
                          ),
                        ))
                  : g.type === "closed" &&
                    (r == null || r.terminate(),
                    (M = this.localCloseResolve) == null || M.call(this));
            }),
            (r.onerror = (y) => {
              f(y.message || "module load error") ||
                u(new Error(y.message || U("localServerWorkerFailed")));
            }),
            (r.onmessageerror = () => {
              f("message deserialization error") ||
                u(new Error(U("localServerWorkerFailed")));
            }));
          const m = p.map((y) => ({ path: y.path, data: y.data.slice(0) }));
          r.postMessage(
            { type: "init", files: m, seed: t.seed, worldId: t.worldId },
            m.map((y) => y.data),
          );
        }),
          h());
      } catch (p) {
        u(p instanceof Error ? p : new Error(String(p)));
      }
    });
  }
  send(e) {
    if (this.localWorker) {
      const t = e.data().slice();
      this.localWorker.postMessage({ type: "packet", data: t.buffer }, [
        t.buffer,
      ]);
      return;
    }
    this.ws && this.ws.readyState === WebSocket.OPEN && this.ws.send(e.data());
  }
  requestLocalSave() {
    var e;
    (e = this.localWorker) == null || e.postMessage({ type: "save" });
  }
  disconnect() {
    var t;
    ((this.intentionalClose = !0),
      this.socketGeneration++,
      (this.reconnecting = !1),
      (this.reconnectAttempt = 0),
      this.reconnectTimer && window.clearTimeout(this.reconnectTimer),
      (this.reconnectTimer = 0),
      (this.onClose = null));
    const e = this.localWorker;
    return e
      ? ((this.connected = !1),
        new Promise((i) => {
          let s = !1;
          const o = () => {
            s ||
              ((s = !0),
              (this.localCloseResolve = null),
              this.localWorker === e && (this.localWorker = null),
              i());
          };
          ((this.localCloseResolve = o),
            e.postMessage({ type: "close" }),
            window.setTimeout(() => {
              s || (e.terminate(), o());
            }, 3e3));
        }))
      : ((t = this.ws) == null || t.close(),
        (this.ws = null),
        (this.connected = !1),
        Promise.resolve());
  }
}
