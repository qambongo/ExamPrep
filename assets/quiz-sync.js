/* Syncs a quiz page's saved progress (one localStorage entry) to the signed-in account.
   Usage: QuizSync.attach('<localStorage key>', '<account key>'), then call QuizSync.saved()
   after every write to that localStorage entry.
   The newest copy wins. When the account holds newer progress than this browser, it is
   copied into localStorage and the page reloads to show it. */
window.QuizSync = (() => {
  let storageKey = null, name = null, timer = null, dirty = false, enabled = false;

  const stampKey = () => storageKey + ':savedAt';
  const get = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const set = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  const localStamp = () => Number(get(stampKey())) || 0;

  async function push(keepalive) {
    clearTimeout(timer);
    if (!enabled || !dirty) return;
    const value = get(storageKey);
    if (value == null) return;
    dirty = false;
    const body = JSON.stringify({ key: name, value, updatedAt: localStamp() });
    try {
      const res = await fetch('/api/state', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body,
        keepalive: keepalive && body.length < 60000,
      });
      if (!res.ok) throw new Error(String(res.status));
      const data = await res.json();
      if (data.saved === false) apply(data);   // another device saved something newer
    } catch (e) {
      dirty = true;   // retried on the next save or when the page is hidden
    }
  }

  function apply(server) {
    if (!server || typeof server.value !== 'string' || !(server.updatedAt > localStamp())) return false;
    set(storageKey, server.value);
    set(stampKey(), String(server.updatedAt));
    location.reload();
    return true;
  }

  async function pull() {
    try {
      const res = await fetch('/api/state?key=' + encodeURIComponent(name), { credentials: 'same-origin' });
      if (!res.ok) return;
      enabled = true;
      const server = await res.json();
      if (apply(server)) return;
      if (get(storageKey) != null && localStamp() > (server.updatedAt || 0)) { dirty = true; push(); }
      else if (get(storageKey) != null && !localStamp()) {
        // Progress saved before syncing existed: stamp it and upload it.
        set(stampKey(), String(Date.now()));
        dirty = true;
        push();
      }
    } catch (e) {}
  }

  return {
    attach(key, accountKey) {
      storageKey = key;
      name = accountKey;
      window.sessionUser.then(user => { if (user) pull(); });
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') push(true);
        else if (enabled && !dirty) pull();
      });
      window.addEventListener('pagehide', () => push(true));
      window.addEventListener('focus', () => { if (enabled && !dirty) pull(); });
    },
    saved() {
      set(stampKey(), String(Date.now()));
      dirty = true;
      clearTimeout(timer);
      timer = setTimeout(push, 800);
    },
  };
})();
