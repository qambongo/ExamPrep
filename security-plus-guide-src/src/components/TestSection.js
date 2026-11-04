import { QuestionCard } from './QuestionCard.js'

/**
 * Renders a full practice test section.
 * @param {object} config
 * @param {string} config.id          - Section ID (e.g. 'test1')
 * @param {string} config.domain      - e.g. 'Domain 1.0 — General Security Concepts'
 * @param {string} config.title       - e.g. 'Chapter 1 Practice Test'
 * @param {string} config.subtitle    - e.g. 'Objectives 1.1 · 1.2 · 1.3 · 1.4'
 * @param {string} config.breadcrumb  - e.g. 'Domain 1.0 › Practice Test'
 * @param {object[]} config.questions - Array of question objects
 */
export function TestSection({ id, domain, title, subtitle, breadcrumb, questions }) {
  const section = document.createElement('div')
  section.id = `sec-${id}`
  section.className = 'section'

  const total = questions.length
  const state = { answered: new Set(), correct: new Set() }
  const crumbs = breadcrumb.split('›').map(s => s.trim())

  section.innerHTML = `
    <div class="sec-hero">
      <div class="sec-breadcrumb">${crumbs.join(' <span class="sec-breadcrumb-sep">›</span> ')}</div>
      <div class="sec-obj-tag gold">Assessment · ${total} questions</div>
      <div class="sec-title">${title}</div>
      <div class="sec-lead">${domain}. ${subtitle}. Pick an answer to see the explanation immediately — your score appears when every question is answered.</div>
    </div>
    <div class="sec-divider"></div>
    <div class="sec-body">
      <div class="test-strip">
        <div class="test-strip-stats">
          <div><span class="ts-val" data-answered>0</span><span class="ts-label">/ ${total} answered</span></div>
          <div><span class="ts-val good" data-correct>0</span><span class="ts-label">correct</span></div>
          <div><span class="ts-val" data-pct>—</span><span class="ts-label">accuracy</span></div>
        </div>
        <div class="test-strip-bar"><span data-bar></span></div>
        <button class="btn-reset small" type="button" data-reset>↺ Reset</button>
      </div>

      <div class="questions-container"></div>

      <div class="test-score">
        <div class="score-ring" data-ring><div class="score-num" data-num>0/${total}</div></div>
        <div class="score-label">${title}</div>
        <div class="score-grade" data-grade></div>
        <button class="btn-reset" type="button" data-reset>↺ Reset all questions</button>
      </div>
    </div>
  `

  const $ = sel => section.querySelector(sel)
  const container = $('.questions-container')

  function updateStrip() {
    const a = state.answered.size
    const c = state.correct.size
    $('[data-answered]').textContent = a
    $('[data-correct]').textContent = c
    $('[data-pct]').textContent = a ? `${Math.round((c / a) * 100)}%` : '—'
    $('[data-bar]').style.width = `${(a / total) * 100}%`
  }

  questions.forEach((q, i) => {
    container.appendChild(QuestionCard(q, state, () => {
      updateStrip()
      if (state.answered.size === total) showFinalScore()
    }, i + 1, total))
  })

  function showFinalScore() {
    const pct = Math.round((state.correct.size / total) * 100)
    const [tone, grade] =
      pct >= 90 ? ['great', 'Excellent — you are ready.'] :
      pct >= 75 ? ['good',  'Good — review the questions you missed.'] :
      pct >= 60 ? ['warn',  'Borderline — study more before the exam.'] :
                  ['bad',   'Needs work — review this chapter thoroughly.']

    const scoreEl = $('.test-score')
    scoreEl.className = `test-score show tone-${tone}`
    $('[data-num]').textContent = `${state.correct.size}/${total}`
    $('[data-ring]').style.setProperty('--p', pct)
    $('[data-grade]').textContent = `${pct}% · ${grade}`
    scoreEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  section.querySelectorAll('[data-reset]').forEach(btn => btn.addEventListener('click', () => {
    state.answered.clear()
    state.correct.clear()
    updateStrip()
    $('.test-score').className = 'test-score'
    section.querySelectorAll('.option').forEach(o => {
      o.classList.remove('correct', 'wrong')
      o.disabled = false
    })
    section.querySelectorAll('.explanation').forEach(e => e.classList.remove('show', 'wrong-exp'))
    section.querySelectorAll('.question-card').forEach(c => c.classList.remove('answered', 'is-correct', 'is-wrong'))
    document.getElementById('main').scrollTo({ top: 0, behavior: 'smooth' })
  }))

  return section
}
