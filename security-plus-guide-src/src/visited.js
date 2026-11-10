/**
 * Syncs the study guide's reading progress (lessons opened + the last one) to the
 * signed-in account, so completion matches across browsers and devices.
 *
 * Only on the Practice Hub build (VITE_PROGRESS_API set). Uses the hub's /api/state
 * endpoint. Opened lessons only ever accumulate, so devices are merged by union;
 * "last" follows whichever device opened a lesson most recently.
 */

const PROGRESS_API = import.meta.env.VITE_PROGRESS_API || ''
const API = PROGRESS_API ? PROGRESS_API.replace(/progress$/, 'state') : ''
const NAME = 'sp701-guide-visited'

let progress = null
let onChange = () => {}
let syncOn = false
let dirty = false
let timer = null
let serverAt = 0   // updatedAt of the account's copy, so uploads are always stamped later

function parse(value) {
  try {
    const v = JSON.parse(value)
    return { visited: Array.isArray(v.visited) ? v.visited : [], last: v.last || null, lastAt: Number(v.lastAt) || 0 }
  } catch { return null }
}

// Merge the account's copy into this browser's. Returns true if this browser has
// something the account lacks (so it should upload).
function merge(server) {
  let added = false
  for (const id of server.visited) {
    if (!progress.visited.has(id)) { progress.visited.add(id); added = true }
  }
  if (server.lastAt > progress.lastAt) {
    progress.last = server.last
    progress.lastAt = server.lastAt
    added = true
  }
  if (added) onChange()
  const serverSet = new Set(server.visited)
  return [...progress.visited].some(id => !serverSet.has(id)) || progress.lastAt > server.lastAt
}

async function pull() {
  try {
    const res = await fetch(`${API}?key=${NAME}`, { credentials: 'same-origin' })
    if (!res.ok) return
    syncOn = true
    const data = await res.json()
    serverAt = Math.max(serverAt, Number(data.updatedAt) || 0)
    const server = typeof data.value === 'string' ? parse(data.value) : null
    if (!server ? progress.visited.size > 0 : merge(server)) { dirty = true; push() }
  } catch { /* offline: keep working locally */ }
}

async function push(keepalive = false) {
  clearTimeout(timer)
  if (!syncOn || !dirty) return
  dirty = false
  const value = JSON.stringify({ visited: [...progress.visited], last: progress.last, lastAt: progress.lastAt })
  const updatedAt = Math.max(Date.now(), serverAt + 1)
  try {
    const res = await fetch(API, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: NAME, value, updatedAt }),
      keepalive: keepalive && value.length < 60000,
    })
    if (!res.ok) throw new Error(String(res.status))
    const data = await res.json()
    if (data.saved) serverAt = Math.max(serverAt, updatedAt)
    // Another device saved in between: merge its copy and upload the combined list.
    if (data.saved === false) {
      serverAt = Math.max(serverAt, Number(data.updatedAt) || 0)
      const server = parse(data.value)
      if (server && merge(server)) { dirty = true; push() }
    }
  } catch {
    dirty = true   // retried on the next lesson or when the page is hidden
  }
}

/** Start syncing. `state` is the guide's { visited: Set, last, lastAt } object; `changed` runs after merges. */
export function initVisitedSync(state, changed) {
  progress = state
  onChange = changed
  if (!API) return
  pull()
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') push(true)
    else if (syncOn) pull()
  })
  window.addEventListener('pagehide', () => push(true))
}

/** Call after a lesson is opened (once the local copy is saved). */
export function visitedChanged() {
  dirty = true
  clearTimeout(timer)
  timer = setTimeout(push, 800)
}
