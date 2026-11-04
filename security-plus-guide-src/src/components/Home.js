import { DOMAINS, EXTRAS, ICONS, findPage } from '../nav.js'

/**
 * Dashboard landing page.
 * @param {{ visited: Set<string>, last: string|null }} progress
 */
export function Home(progress) {
  const section = document.createElement('div')
  section.id = 'sec-home'
  section.className = 'section home'
  section.innerHTML = template(progress)
  section.refresh = () => { section.innerHTML = template(progress) }
  return section
}

function template(progress) {
  const all = [...DOMAINS.flatMap(d => d.items), ...EXTRAS.items]
  const done = all.filter(i => progress.visited.has(i.id)).length
  const pct = Math.round((done / all.length) * 100)
  const last = progress.last && progress.last !== 'home' ? findPage(progress.last) : null
  const resume = last ?? DOMAINS[0].items[0]

  return `
  <header class="home-hero">
    <div class="home-hero-text">
      <div class="eyebrow">CompTIA Security+ · SY0-701</div>
      <h1 class="home-title">Your study plan, <em>organized.</em></h1>
      <p class="home-lead">Work through all five exam domains, check yourself with practice tests, then finish with the final exam, PBQ simulations and the cheat sheet.</p>
      <div class="home-actions">
        <a class="btn btn-primary" href="#/${resume.id}">${last ? 'Continue' : 'Start studying'} <span class="btn-sub">${resume.num ? resume.num + ' · ' : ''}${resume.label}</span>${ICONS.right}</a>
        <a class="btn btn-ghost" href="#/final-exam">Take the final exam</a>
      </div>
    </div>
    <div class="home-ring" style="--p:${pct}">
      <div class="home-ring-inner">
        <div class="home-ring-val">${pct}<span>%</span></div>
        <div class="home-ring-label">${done} of ${all.length} pages viewed</div>
      </div>
    </div>
  </header>

  <div class="home-facts">
    <div class="fact"><div class="fact-val">90</div><div class="fact-label">Max questions</div></div>
    <div class="fact"><div class="fact-val">90<small>min</small></div><div class="fact-label">Time limit</div></div>
    <div class="fact"><div class="fact-val">750<small>/900</small></div><div class="fact-label">Passing score</div></div>
    <div class="fact"><div class="fact-val">400+</div><div class="fact-label">Practice questions here</div></div>
  </div>

  <div class="home-section-head">
    <h2>Exam domains</h2>
    <div class="weight-bar" aria-label="Domain weighting">
      ${DOMAINS.map(d => `<span class="c-${d.color}" style="flex:${d.weight}" title="${d.num} ${d.title} — ${d.weight}%"></span>`).join('')}
    </div>
  </div>

  <div class="domain-grid">
    ${DOMAINS.map(d => {
      const lessons = d.items.filter(i => i.kind === 'lesson')
      const tests = d.items.filter(i => i.kind === 'test')
      const dDone = d.items.filter(i => progress.visited.has(i.id)).length
      return `
      <article class="domain-card c-${d.color}">
        <div class="domain-card-top">
          <span class="domain-num">${d.num.replace('.0', '')}</span>
          <span class="domain-weight">${d.weight}%<small>of exam</small></span>
        </div>
        <h3 class="domain-title"><a href="#/${d.items[0].id}">${d.title}</a></h3>
        <p class="domain-blurb">${d.blurb}</p>
        <ul class="domain-lessons">
          ${lessons.map(l => `<li class="${progress.visited.has(l.id) ? 'done' : ''}"><a href="#/${l.id}"><span>${l.num}</span>${l.label}</a></li>`).join('')}
        </ul>
        <div class="domain-foot">
          <div class="domain-progress"><span style="width:${(dDone / d.items.length) * 100}%"></span></div>
          <div class="domain-tests">
            ${tests.map(t => `<a class="chip" href="#/${t.id}">${ICONS.test} Test ${t.num}</a>`).join('')}
          </div>
        </div>
      </article>`
    }).join('')}
  </div>

  <div class="home-section-head"><h2>${EXTRAS.title}</h2></div>
  <div class="extras-grid">
    ${EXTRAS.items.map(x => `
      <a class="extra-card kind-${x.kind}" href="#/${x.id}">
        <span class="extra-ico">${ICONS[x.kind]}</span>
        <span class="extra-text"><strong>${x.label}</strong><span>${x.desc}</span></span>
        <span class="extra-go">${ICONS.right}</span>
      </a>`).join('')}
  </div>
  `
}
