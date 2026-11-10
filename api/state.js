// Whole-quiz saved state for pages that keep one progress blob (the SC-200 quizzes).
// GET  /api/state?key=<name>                          -> { value: string|null, updatedAt: number }
// POST /api/state { key, value, updatedAt }           -> { saved: true } or { saved: false, value, updatedAt }
//      The newest updatedAt (ms) wins, so an older device can't overwrite newer progress.
const { redis, currentUser, send, handler } = require('./_lib/store');

const KEY_RE = /^[a-z0-9-]{1,40}$/;
const MAX_VALUE_BYTES = 512 * 1024;

module.exports = handler(async (req, res) => {
  const username = await currentUser(req);
  if (!username) return send(res, 401, { error: 'Sign in to save progress.' });
  const hash = `state:${username}`;

  const name = req.method === 'GET' ? req.query && req.query.key : req.body && req.body.key;
  if (!KEY_RE.test(String(name || ''))) return send(res, 400, { error: 'Invalid key.' });

  const read = async () => {
    const raw = await redis('HGET', hash, name);
    try { const s = JSON.parse(raw); return { value: s.v, updatedAt: s.t }; } catch (e) { return { value: null, updatedAt: 0 }; }
  };

  if (req.method === 'GET') return send(res, 200, await read());

  if (req.method === 'POST') {
    const { value, updatedAt } = req.body;
    if (typeof value !== 'string' || !Number.isFinite(updatedAt) || updatedAt <= 0) {
      return send(res, 400, { error: 'Invalid progress data.' });
    }
    if (Buffer.byteLength(value) > MAX_VALUE_BYTES) return send(res, 413, { error: 'Progress is too large.' });
    const current = await read();
    if (current.updatedAt > updatedAt) return send(res, 200, { saved: false, ...current });
    await redis('HSET', hash, name, JSON.stringify({ v: value, t: updatedAt }));
    return send(res, 200, { saved: true });
  }

  return send(res, 405, { error: 'Method not allowed' });
});
