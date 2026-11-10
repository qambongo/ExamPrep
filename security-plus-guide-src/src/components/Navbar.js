import { DOMAINS, EXTRAS, HOME, ICONS } from '../nav.js'

const OPEN_KEY = 'sp701:open-groups'

function load(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)) } catch { /* storage unavailable */ }
}

function itemHTML(item) {
  const lead = item.kind === 'lesson'
    ? `<span class="nav-num">${item.num}</span>`
    : `<span class="nav-ico">${ICONS[item.kind] ?? ICONS.lesson}</span>`
  return `<a class="nav-item kind-${item.kind}" href="#/${item.id}" data-target="${item.id}">
    ${lead}<span class="nav-label">${item.label}</span><span class="nav-check">${ICONS.check}</span>
  </a>`
}

/**
 * Builds the sidebar navigation.
 * @param {Function} goto - Router navigate function
 * @param {{ visited: Set<string> }} progress
 */
export function Navbar(goto, progress) {
  const nav = document.getElementById('nav')
  if (!nav) return

  const openGroups = new Set(load(OPEN_KEY, ['d1']))

  nav.innerHTML = `
    <a class="nav-item nav-home kind-home" href="#/home" data-target="home">
      <span class="nav-ico">${ICONS.home}</span><span class="nav-label">${HOME.label}</span>
    </a>
    <div class="nav-section-label">Exam Domains</div>
    ${DOMAINS.map(d => `
      <div class="nav-group c-${d.color}${openGroups.has(d.key) ? ' open' : ''}" data-group="${d.key}">
        <button class="nav-group-head" type="button" aria-expanded="${openGroups.has(d.key)}">
          <span class="nav-group-num">${d.num.replace('.0', '')}</span>
          <span class="nav-group-text">
            <span class="nav-group-title">${d.short}</span>
            <span class="nav-group-meta"><span class="nav-group-count"></span> · ${d.weight}% of exam</span>
          </span>
          <span class="nav-group-chev">${ICONS.chevron}</span>
        </button>
        <div class="nav-group-bar"><span></span></div>
        <div class="nav-group-body"><div class="nav-group-inner">
          ${d.items.map(itemHTML).join('')}
        </div></div>
      </div>
    `).join('')}
    <div class="nav-section-label">${EXTRAS.title}</div>
    ${EXTRAS.items.map(itemHTML).join('')}
    <div class="nav-empty">No matching topics</div>
  `

  // Group toggles
  nav.querySelectorAll('.nav-group-head').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.parentElement
      setOpen(group, !group.classList.contains('open'))
    })
  })

  function setOpen(group, open) {
    group.classList.toggle('open', open)
    group.querySelector('.nav-group-head').setAttribute('aria-expanded', open)
    open ? openGroups.add(group.dataset.group) : openGroups.delete(group.dataset.group)
    save(OPEN_KEY, [...openGroups])
  }

  // Links: let the hash router handle navigation, but avoid re-renders on same id
  nav.querySelectorAll('.nav-item[data-target]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault()
      goto(el.dataset.target)
    })
  })

  // Search filter
  const search = document.getElementById('nav-search')
  search?.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase()
    nav.classList.toggle('searching', !!q)
    let any = false
    nav.querySelectorAll('.nav-item').forEach(el => {
      const text = el.textContent.toLowerCase() + ' ' + el.dataset.target
      const hit = !q || text.includes(q)
      el.classList.toggle('hidden', !hit)
      if (hit) any = true
    })
    nav.querySelectorAll('.nav-group').forEach(g => {
      const hits = g.querySelectorAll('.nav-item:not(.hidden)').length
      g.classList.toggle('hidden', !!q && hits === 0)
      g.classList.toggle('force-open', !!q && hits > 0)
    })
    nav.querySelector('.nav-empty').classList.toggle('show', !any)
  })

  function refreshProgress() {
    nav.querySelectorAll('.nav-item[data-target]').forEach(el => {
      el.classList.toggle('done', progress.visited.has(el.dataset.target))
    })
    nav.querySelectorAll('.nav-group').forEach(g => {
      const items = [...g.querySelectorAll('.nav-item')]
      const done = items.filter(i => i.classList.contains('done')).length
      g.querySelector('.nav-group-count').textContent = `${done}/${items.length}`
      g.querySelector('.nav-group-bar span').style.width = `${(done / items.length) * 100}%`
    })
  }
  refreshProgress()

  return {
    refreshProgress,
    setActive(id) {
      let activeEl = null
      nav.querySelectorAll('.nav-item').forEach(el => {
        const on = el.dataset.target === id
        el.classList.toggle('active', on)
        if (on) activeEl = el
      })
      nav.querySelectorAll('.nav-group').forEach(g => g.classList.remove('has-active'))
      const group = activeEl?.closest('.nav-group')
      if (group) {
        group.classList.add('has-active')
        if (!group.classList.contains('open')) setOpen(group, true)
      }
      activeEl?.scrollIntoView({ block: 'nearest' })
      refreshProgress()
    },
  }
}
