/**
 * Renders a single question card and wires up answer selection.
 * @param {object} q         - Question data object from JSON
 * @param {object} state     - { answered: Set, correct: Set }
 * @param {Function} onScore - Called with (correct, letter, restored) after answering
 * @param {number} index     - 1-based question number
 * @param {number} total     - Total questions in the test
 */
export function QuestionCard(q, state, onScore, index, total) {
  const card = document.createElement('div')
  card.className = 'question-card'
  card.id = q.id

  const optionLetters = ['A', 'B', 'C', 'D'].filter(l => q.options[l] != null)
  // Source data prefixes objectives with "QUESTION 1 OF 30 · " — we show the number separately
  const objective = (q.objective ?? '').replace(/^question\s+\d+\s*(?:of|\/)\s*\d+\s*[·—–-]?\s*/i, '')

  card.innerHTML = `
    <div class="q-head">
      <span class="q-index">Question ${index}<span> / ${total}</span></span>
      ${objective ? `<span class="q-num">${objective}</span>` : ''}
    </div>
    <div class="q-text">${q.question}</div>
    <div class="options" role="list">
      ${optionLetters.map(letter => `
        <button type="button" class="option" data-letter="${letter}" role="listitem">
          <span class="option-letter">${letter}</span><span class="option-text">${q.options[letter]}</span>
        </button>
      `).join('')}
    </div>
    <div class="explanation" id="${q.id}-exp">
      <div class="exp-title"></div>
      <div class="exp-text">${q.explanation}</div>
    </div>
  `

  /**
   * Marks the card as answered with `selected`.
   * `restored` = replaying a saved answer, so it isn't saved again.
   */
  function answer(selected, restored = false) {
    if (state.answered.has(q.id)) return
    state.answered.add(q.id)

    const isCorrect = selected === q.correct

    card.classList.add('answered', isCorrect ? 'is-correct' : 'is-wrong')
    card.querySelectorAll('.option').forEach(o => {
      o.disabled = true
      if (o.dataset.letter === q.correct) o.classList.add('correct')
      else if (o.dataset.letter === selected) o.classList.add('wrong')
    })

    const exp = card.querySelector('.explanation')
    exp.querySelector('.exp-title').textContent = isCorrect
      ? `Correct — ${q.correct}`
      : `Not quite — the answer is ${q.correct}`
    exp.classList.add('show')
    if (!isCorrect) exp.classList.add('wrong-exp')

    if (isCorrect) state.correct.add(q.id)
    onScore(isCorrect, selected, restored)
  }

  card.querySelectorAll('.option').forEach(optEl => {
    optEl.addEventListener('click', () => answer(optEl.dataset.letter))
  })

  card.answer = answer

  return card
}
