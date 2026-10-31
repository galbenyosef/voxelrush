// index-BeUlFSPp 218 — localworker
// Lines 113561-113937 of readable/assets/index-BeUlFSPp.pretty.js (statement-aligned).
class yre {
  ws = null;
  localWorker = null;
  localCloseResolve = null;
  handlers = new Map();
  onClose = null;
  onReconnectState = null;
  connected = !1;
  lastCloseCode = 0;
  httpSessionToken = "";
  reconnectSince = 0;
  intentionalClose = !1;
  reconnectTimer = 0;
  reconnectAttempt = 0;
  reconnecting = !1;
  remoteUrl = "";
  remoteName = "";
  socketGeneration = 0;
  sessionToken = vre();
  welcomedAt = 0;
  shortSessions = 0;
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
      Oq(e === "local"),
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
    let n = "";
    try {
      n = await Nq(e);
    } catch (o) {
      if (i) throw o;
      const a = o.status;
      if (a !== 401 && a !== 403 && Date.now() - this.reconnectSince < 12e4) {
        this.scheduleReconnect();
        return;
      }
      ((this.reconnecting = !1),
        this.onClose?.(o instanceof Error ? o.message : z("signInToPlay")));
      return;
    }
    if (!this.intentionalClose)
      return new Promise((o, a) => {
        let r = !1,
          l = !1,
          c = 0;
        const h = new WebSocket(e),
          d = ++this.socketGeneration,
          u = () => this.ws === h && this.socketGeneration === d;
        ((h.binaryType = "arraybuffer"), (this.ws = h));
        const f = (m) => {
            r || ((r = !0), a(new Error(m)));
          },
          p = (m) =>
            sa(m.reason?.trim() || z("netConnectionClosed", { url: e }));
        ((h.onopen = () => {
          if (!u()) {
            h.close();
            return;
          }
          ((this.connected = !0),
            this.send(
              new lt(ue.C_HELLO).str(t).str(Oa()).str(this.sessionToken).str(n),
            ),
            (c = window.setTimeout(() => {
              !u() ||
                r ||
                (h.close(), i && f(z("netConnectFailed", { url: e })));
            }, 15e3)));
        }),
          (h.onmessage = (m) => {
            if (!u()) return;
            this.heardAt = Date.now();
            const g = new wC(new Uint8Array(m.data)),
              y = g.u8();
            if (!r && y === ue.S_WELCOME) {
              ((r = !0), (l = !0), window.clearTimeout(c));
              const b = !i;
              ((this.welcomedAt = Date.now()),
                (this.reconnectAttempt = 0),
                b && ((this.reconnecting = !1), this.onReconnectState?.(!1)),
                (this.lastCloseCode = 0),
                o());
            }
            this.handlers.get(y)?.(g);
          }),
          (h.onerror = () => {
            i && !r && f(z("netConnectFailed", { url: e }));
          }),
          (h.onclose = (m) => {
            if (
              u() &&
              (window.clearTimeout(c),
              (this.connected = !1),
              l && (this.lastCloseCode = m.code),
              (this.ws = null),
              !this.intentionalClose)
            ) {
              if (
                (l &&
                  (this.lastLoss = {
                    why: "close",
                    code: m.code,
                    silent: Date.now() - this.heardAt,
                    lived: Math.round((Date.now() - this.welcomedAt) / 1e3),
                  }),
                i && !l)
              ) {
                r || f(p(m));
                return;
              }
              if (m.code === 1008) {
                ((this.reconnecting = !1), this.onClose?.(p(m)));
                return;
              }
              (m.code === a9 && (this.welcomedAt = 0),
                !this.lostAgain() && this.scheduleReconnect());
            }
          }));
      });
  }
  lastLoss = null;
  heardAt = 0;
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
    ((this.lastLoss = {
      why: "silent",
      code: 0,
      silent: Date.now() - this.heardAt,
      lived: Math.round((Date.now() - this.welcomedAt) / 1e3),
    }),
      this.socketGeneration++,
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
    const e = this.welcomedAt ? Date.now() - this.welcomedAt : -1;
    return (
      (this.welcomedAt = 0),
      e < 0 ||
      ((this.shortSessions = e < ure ? this.shortSessions + 1 : 0),
      this.shortSessions < fre)
        ? !1
        : ((this.shortSessions = 0),
          this.reconnectTimer &&
            (window.clearTimeout(this.reconnectTimer),
            (this.reconnectTimer = 0)),
          (this.reconnecting = !1),
          this.onClose?.(z("netUnstable")),
          !0)
    );
  }
  scheduleReconnect() {
    if (this.intentionalClose || this.reconnectTimer || !this.remoteUrl) return;
    this.reconnecting ||
      ((this.reconnecting = !0),
      (this.reconnectSince = Date.now()),
      this.onReconnectState?.(!0));
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
    return new Promise(async (i, n) => {
      let o = !1,
        a = "worker",
        r = null,
        l = 0,
        c = !1,
        h;
      const d = window.setTimeout(() => {
          o ||
            ((o = !0),
            r?.terminate(),
            this.localWorker === r && (this.localWorker = null),
            console.error(`Local server startup timed out at stage: ${a}`),
            n(new Error(z("localServerTimeout"))));
        }, 6e4),
        u = (p) => {
          o ||
            ((o = !0),
            window.clearTimeout(d),
            r?.terminate(),
            this.localWorker === r && (this.localWorker = null),
            n(p));
        },
        f = (p) =>
          o || l !== 1 || c
            ? !1
            : ((c = !0),
              console.warn(`Local server worker retry after ${a}: ${p}`),
              r?.terminate(),
              this.localWorker === r && (this.localWorker = null),
              window.setTimeout(() => h(), 0),
              !0);
      try {
        const p = await qee(await Vie(t.worldId), e);
        ((h = () => {
          if (o) return;
          (l++, (c = !1), (a = "worker"));
          try {
            r = new Worker(
              new URL(
                "/assets/local-server-worker-coep-v1-A1ihJuBz.js",
                import.meta.url,
              ),
              { type: "module" },
            );
          } catch (g) {
            if (f(g instanceof Error ? g.message : String(g))) return;
            u(g instanceof Error ? g : new Error(String(g)));
            return;
          }
          ((this.localWorker = r),
            (r.onmessage = (g) => {
              const y = g.data;
              if (y.type === "status") a = y.stage || a;
              else if (y.type === "ready")
                ((a = "welcome"),
                  (this.connected = !0),
                  this.send(new lt(ue.C_HELLO).str(e).str(Oa())));
              else if (y.type === "packet" && y.data) {
                const b = new wC(y.data),
                  S = b.u8();
                (!o &&
                  S === ue.S_WELCOME &&
                  ((o = !0), window.clearTimeout(d), i()),
                  this.handlers.get(S)?.(b));
              } else if (y.type === "files-saved") {
                const b = document.getElementById("localsavestatus");
                if (!b) return;
                (b.classList.add("show"),
                  window.setTimeout(() => b.classList.remove("show"), 1200));
              } else if (y.type === "save-error")
                console.error("Local world save failed:", y.message);
              else if (y.type === "error") {
                if (f(y.message || "startup error")) return;
                const b = new Error(
                  y.message || z("netConnectionClosed", { url: "local" }),
                );
                u(b);
              } else
                y.type === "close"
                  ? ((this.connected = !1),
                    o
                      ? this.onClose?.()
                      : u(
                          new Error(
                            y.reason ||
                              z("netConnectionClosed", { url: "local" }),
                          ),
                        ))
                  : y.type === "closed" &&
                    (r?.terminate(), this.localCloseResolve?.());
            }),
            (r.onerror = (g) => {
              f(g.message || "module load error") ||
                u(new Error(g.message || z("localServerWorkerFailed")));
            }),
            (r.onmessageerror = () => {
              f("message deserialization error") ||
                u(new Error(z("localServerWorkerFailed")));
            }));
          const m = p.map((g) => ({ path: g.path, data: g.data.slice(0) }));
          r.postMessage(
            { type: "init", files: m, seed: t.seed, worldId: t.worldId },
            m.map((g) => g.data),
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
    this.localWorker?.postMessage({ type: "save" });
  }
  disconnect() {
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
        new Promise((t) => {
          let i = !1;
          const n = () => {
            i ||
              ((i = !0),
              (this.localCloseResolve = null),
              this.localWorker === e && (this.localWorker = null),
              t());
          };
          ((this.localCloseResolve = n),
            e.postMessage({ type: "close" }),
            window.setTimeout(() => {
              i || (e.terminate(), n());
            }, 3e3));
        }))
      : (this.ws?.close(),
        (this.ws = null),
        (this.connected = !1),
        Promise.resolve());
  }
}
