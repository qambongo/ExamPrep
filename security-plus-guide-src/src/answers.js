/**
 * Saved test answers.
 *
 * Every answer is stored in localStorage immediately, keyed "<testId>:<questionId>"
 * with the value "<1|0>:<unix seconds>:<letter>" (1 = correct).
 *
 * When VITE_PROGRESS_API is set (the Practice Hub build), answers also sync to the
 * signed-in account through that endpoint, using the same value format as the hub's
 * topic pages. Server ids must be 10 hex chars, so each key is hashed with SHA-1.
 */

const LOCAL_KEY = 'sp701:answers'
const API = import.meta.env.VITE_PROGRESS_API || ''

let answers = load()
const keyToId = new Map()   // "test1:q1" -> "a1b2c3d4e5"
const idToKey = new Map()
let pending = {}
let flushTimer = null
let syncOn = false
const listeners = new Set()

function load() {
  try { return JSON.parse(localStorage.getItem(LOCAL_KEY)) || {} } catch { return {} }
}
function save() {
  try { localStorage.setItem(LOCAL_KEY, JSON.stringify(answers)) } catch { /* storage unavailable */ }
}

const tsOf = v => Number(String(v).split(':')[1] || 0)
const now = () => Math.floor(Date.now() / 1000)

async function sha10(text) {
  const buf = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(text))
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 10)
}

async function api(body) {
  const res = await fetch(API, {
    method: body ? 'POST' : 'GET',
    credentials: 'same-origin',
    headers: body ? { 'Content-Type': 'application/json' } : {},
    body: body ? JSON.stringify(body) : undefined,
    keepalive: !!body,
  })
  if (!res.ok) throw Object.assign(new Error(`progress ${res.status}`), { status: res.status })
  return res.json()
}

async function flush() {
  clearTimeout(flushTimer)
  if (!syncOn || !Object.keys(pending).length) return
  const batch = pending
  pending = {}
  const set = {}
  for (const [key, v] of Object.entries(batch)) {
    if (keyToId.has(key)) set[keyToId.get(key)] = v
  }
  try {
    await api({ set })
  } catch {
    pending = { ...batch, ...pending }   // retry on the next answer
  }
}

function queue(key, value) {
  if (!syncOn) return
  pending[key] = value
  clearTimeout(flushTimer)
  flushTimer = setTimeout(flush, 600)
}

/** Call once at startup with every test so their questions can be mapped to server ids. */
export async function initAnswers(tests) {
  if (!API || !window.crypto?.subtle) return
  for (const t of tests) {
    for (const q of t.questions) {
      const key = `${t.id}:${q.id}`
      const id = await sha10(`sy0701-guide:${key}`)
      keyToId.set(key, id)
      idToKey.set(id, key)
    }
  }
  await pullFromServer()
  window.addEventListener('pagehide', () => flush())
  // Pick up answers saved (or reset) on other devices when this tab comes back into view.
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flush()
    else if (syncOn) flush().then(pullFromServer)
  })
}

// Newest value wins per question. A server value of "-:<ts>" means the answer was reset
// on some device, so an older copy cached here is dropped instead of uploaded again.
async function pullFromServer() {
  let server
  try {
    server = (await api()).progress || {}
  } catch {
    return   // Not signed in, offline, or no API: keep working from localStorage only.
  }
  syncOn = true

  let changed = false
  const upload = {}
  for (const [id, v] of Object.entries(server)) {
    const key = idToKey.get(id)
    if (!key || key in pending) continue
    const cleared = v[0] === '-'
    if (!cleared && !/^[01]:\d+:[A-D]$/.test(v)) continue
    if (answers[key] && tsOf(v) < tsOf(answers[key])) continue
    if (cleared) {
      if (answers[key]) { delete answers[key]; changed = true }
    } else if (answers[key] !== v) {
      answers[key] = v
      changed = true
    }
  }
  for (const [key, v] of Object.entries(answers)) {
    const id = keyToId.get(key)
    if (id && (!server[id] || tsOf(v) > tsOf(server[id]))) upload[key] = v
  }
  if (changed) { save(); listeners.forEach(fn => fn()) }
  if (Object.keys(upload).length) { pending = { ...upload, ...pending }; flush() }
}

/** The saved letter for a question, or null. */
export function savedAnswer(testId, qid) {
  const v = answers[`${testId}:${qid}`]
  return v ? v.split(':')[2] || null : null
}

export function recordAnswer(testId, qid, letter, correct) {
  const key = `${testId}:${qid}`
  const value = `${correct ? 1 : 0}:${now()}:${letter}`
  answers[key] = value
  save()
  queue(key, value)
}

export function clearTest(testId) {
  const keys = Object.keys(answers).filter(k => k.startsWith(`${testId}:`))
  keys.forEach(k => { delete answers[k]; delete pending[k] })
  save()
  if (syncOn) {
    const ids = keys.map(k => keyToId.get(k)).filter(Boolean)
    if (ids.length) api({ clear: ids }).catch(() => {})
  }
}

/** { answered, correct } for a test, from saved answers. */
export function testScore(testId) {
  let answered = 0, correct = 0
  for (const [k, v] of Object.entries(answers)) {
    if (!k.startsWith(`${testId}:`)) continue
    answered++
    if (v[0] === '1') correct++
  }
  return { answered, correct }
}

/** Runs `fn` whenever answers arrive from (or are cleared on) the server. Returns an unsubscribe function. */
export function onAnswersSynced(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}
