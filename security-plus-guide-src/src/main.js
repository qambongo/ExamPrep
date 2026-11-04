import { TestSection } from './components/TestSection.js'
import { Navbar } from './components/Navbar.js'
import { Home } from './components/Home.js'
import { ThemePicker, applyTheme, getThemeChoice } from './components/ThemePicker.js'
import { findPage, neighbours, ICONS } from './nav.js'

// ── Question data imports ────────────────────────────────────────────────────
import ch1A      from './data/ch1_TestA.json'
import ch1B      from './data/ch1_TestB.json'
import ch2A      from './data/ch2_TestA.json'
import ch2B      from './data/ch2_TestB.json'
import ch3A      from './data/ch3_TestA.json'
import ch3B      from './data/ch3_TestB.json'
import ch4A      from './data/ch4_TestA.json'
import ch4B      from './data/ch4_TestB.json'
import ch5A      from './data/ch5_TestA.json'
import ch5B      from './data/ch5_TestB.json'
import finalExam from './data/finalExam.json'

// ── Content section module map (lazy dynamic imports) ────────────────────────
const CONTENT_MODULES = {
  intro:      () => import('./chapters/chapter1/intro.js'),
  sec11:      () => import('./chapters/chapter1/sec11.js'),
  sec12:      () => import('./chapters/chapter1/sec12.js'),
  sec13:      () => import('./chapters/chapter1/sec13.js'),
  sec14:      () => import('./chapters/chapter1/sec14.js'),
  intro2:     () => import('./chapters/chapter2/intro.js'),
  sec21:      () => import('./chapters/chapter2/sec21.js'),
  sec22:      () => import('./chapters/chapter2/sec22.js'),
  sec23:      () => import('./chapters/chapter2/sec23.js'),
  sec24:      () => import('./chapters/chapter2/sec24.js'),
  sec25:      () => import('./chapters/chapter2/sec25.js'),
  intro3:     () => import('./chapters/chapter3/intro.js'),
  sec31:      () => import('./chapters/chapter3/sec31.js'),
  sec32:      () => import('./chapters/chapter3/sec32.js'),
  sec33:      () => import('./chapters/chapter3/sec33.js'),
  sec34:      () => import('./chapters/chapter3/sec34.js'),
  sec35:      () => import('./chapters/chapter3/sec35.js'),
  sec36:      () => import('./chapters/chapter3/sec36.js'),
  intro4:     () => import('./chapters/chapter4/intro.js'),
  sec41:      () => import('./chapters/chapter4/sec41.js'),
  sec42:      () => import('./chapters/chapter4/sec42.js'),
  sec43:      () => import('./chapters/chapter4/sec43.js'),
  sec44:      () => import('./chapters/chapter4/sec44.js'),
  sec45:      () => import('./chapters/chapter4/sec45.js'),
  sec46:      () => import('./chapters/chapter4/sec46.js'),
  sec47:      () => import('./chapters/chapter4/sec47.js'),
  sec48:      () => import('./chapters/chapter4/sec48.js'),
  intro5:     () => import('./chapters/chapter5/intro.js'),
  sec51:      () => import('./chapters/chapter5/sec51.js'),
  sec52:      () => import('./chapters/chapter5/sec52.js'),
  sec53:      () => import('./chapters/chapter5/sec53.js'),
  sec54:      () => import('./chapters/chapter5/sec54.js'),
  sec55:      () => import('./chapters/chapter5/sec55.js'),
  sec56:      () => import('./chapters/chapter5/sec56.js'),
  pbq:        () => import('./chapters/pbq.js'),
  cheatsheet: () => import('./chapters/cheatsheet.js'),
  coming:     () => import('./chapters/coming.js'),
}

// ── Dynamic test section configs ─────────────────────────────────────────────
const TEST_CONFIGS = [
  {
    id: 'test1', domain: 'Domain 1.0 — General Security Concepts',
    title: 'Chapter 1 Practice Test',
    subtitle: 'Objectives 1.1 · 1.2 · 1.3 · 1.4',
    breadcrumb: 'Domain 1.0 › Practice Test',
    questions: ch1A,
  },
  {
    id: 'test1b', domain: 'Domain 1.0 — General Security Concepts (Test B)',
    title: 'Chapter 1 Practice Test B',
    subtitle: 'Objectives 1.1 · 1.2 · 1.3 · 1.4',
    breadcrumb: 'Domain 1.0 › Practice Test B',
    questions: ch1B,
  },
  {
    id: 'test2', domain: 'Domain 2.0 — Threats, Vulnerabilities & Mitigations',
    title: 'Chapter 2 Practice Test',
    subtitle: 'Objectives 2.1 · 2.2 · 2.3 · 2.4 · 2.5',
    breadcrumb: 'Domain 2.0 › Practice Test',
    questions: ch2A,
  },
  {
    id: 'test2b', domain: 'Domain 2.0 — Threats, Vulnerabilities & Mitigations (Test B)',
    title: 'Chapter 2 Practice Test B',
    subtitle: 'Objectives 2.1 · 2.2 · 2.3 · 2.4 · 2.5',
    breadcrumb: 'Domain 2.0 › Practice Test B',
    questions: ch2B,
  },
  {
    id: 'test3', domain: 'Domain 3.0 — Security Architecture',
    title: 'Chapter 3 Practice Test',
    subtitle: 'Objectives 3.1 · 3.2 · 3.3 · 3.4 · 3.5 · 3.6',
    breadcrumb: 'Domain 3.0 › Practice Test',
    questions: ch3A,
  },
  {
    id: 'test3b', domain: 'Domain 3.0 — Security Architecture (Test B)',
    title: 'Chapter 3 Practice Test B',
    subtitle: 'Objectives 3.1 · 3.2 · 3.3 · 3.4 · 3.5 · 3.6',
    breadcrumb: 'Domain 3.0 › Practice Test B',
    questions: ch3B,
  },
  {
    id: 'test4', domain: 'Domain 4.0 — Security Operations',
    title: 'Chapter 4 Practice Test',
    subtitle: 'Objectives 4.1 – 4.9',
    breadcrumb: 'Domain 4.0 › Practice Test',
    questions: ch4A,
  },
  {
    id: 'test4b', domain: 'Domain 4.0 — Security Operations (Test B)',
    title: 'Chapter 4 Practice Test B',
    subtitle: 'Objectives 4.1 – 4.9',
    breadcrumb: 'Domain 4.0 › Practice Test B',
    questions: ch4B,
  },
  {
    id: 'test5', domain: 'Domain 5.0 — Security Program Management',
    title: 'Chapter 5 Practice Test',
    subtitle: 'Objectives 5.1 · 5.2 · 5.3 · 5.4 · 5.5 · 5.6',
    breadcrumb: 'Domain 5.0 › Practice Test',
    questions: ch5A,
  },
  {
    id: 'test5b', domain: 'Domain 5.0 — Security Program Management (Test B)',
    title: 'Chapter 5 Practice Test B',
    subtitle: 'Objectives 5.1 · 5.2 · 5.3 · 5.4 · 5.5 · 5.6',
    breadcrumb: 'Domain 5.0 › Practice Test B',
    questions: ch5B,
  },
  {
    id: 'final-exam', domain: 'All 5 Domains — Weighted to Exam Percentages',
    title: 'Final Comprehensive Exam',
    subtitle: 'Domains 1–5 · 100 Questions',
    breadcrumb: 'Final Exam',
    questions: finalExam,
  },
]

// ── Progress (persisted per browser) ─────────────────────────────────────────
const STORE_KEY = 'sp701:progress'
const progress = (() => {
  try {
    const raw = JSON.parse(localStorage.getItem(STORE_KEY)) || {}
    return { visited: new Set(raw.visited || []), last: raw.last || null }
  } catch { return { visited: new Set(), last: null } }
})()
function saveProgress() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({ visited: [...progress.visited], last: progress.last }))
  } catch { /* storage unavailable */ }
}

// ── Router state ─────────────────────────────────────────────────────────────
let navbar
const renderedSections = new Map()
let current = null

function crumbsFor(page) {
  if (!page || page.kind === 'home') return '<span class="crumb-current">Dashboard</span>'
  const group = page.group?.num ? `Domain ${page.group.num}` : page.group?.title
  const label = page.num && page.kind === 'lesson' ? `${page.num} ${page.label}` : page.label
  return `<a href="#/home">Home</a><span class="crumb-sep">/</span>${group ? `<span>${group}</span><span class="crumb-sep">/</span>` : ''}<span class="crumb-current">${label}</span>`
}

function pagerFor(id) {
  const { prev, next } = neighbours(id)
  const link = (p, dir) => {
    if (!p) return '<span></span>'
    const title = p.kind === 'lesson' ? `${p.num} · ${p.label}` : p.label
    const ctx = p.group?.num ? `Domain ${p.group.num}` : p.group?.title ?? ''
    return `<a class="pager-link ${dir}" href="#/${p.id}">
      ${dir === 'prev' ? ICONS.left : ''}
      <span><small>${dir === 'prev' ? 'Previous' : 'Next'}${ctx ? ' · ' + ctx : ''}</small>${title}</span>
      ${dir === 'next' ? ICONS.right : ''}
    </a>`
  }
  const nav = document.createElement('nav')
  nav.className = 'pager'
  nav.innerHTML = link(prev, 'prev') + link(next, 'next')
  return nav
}

async function build(id) {
  const main = document.getElementById('content')

  if (id === 'home') {
    const s = Home(progress)
    main.appendChild(s)
    return s
  }

  const moduleLoader = CONTENT_MODULES[id]
  let section = null
  if (moduleLoader) {
    const mod = await moduleLoader()
    const wrapper = document.createElement('div')
    wrapper.innerHTML = mod.render()
    section = wrapper.firstElementChild
    section.classList.remove('active')
    main.appendChild(section)
    if (typeof mod.init === 'function') mod.init()
  } else {
    const config = TEST_CONFIGS.find(c => c.id === id)
    if (config) {
      section = TestSection(config)
      main.appendChild(section)
    }
  }
  if (section) section.appendChild(pagerFor(id))
  return section
}

async function goto(id) {
  if (!findPage(id) && !CONTENT_MODULES[id]) id = 'home'
  if (location.hash !== `#/${id}`) {
    history.pushState(null, '', `#/${id}`)
  }
  if (current === id) { closeDrawer(); return }
  current = id

  const main = document.getElementById('main')
  main.querySelectorAll('.section.active').forEach(s => s.classList.remove('active'))

  let section = renderedSections.get(id)
  if (!section) {
    section = await build(id)
    renderedSections.set(id, section)
  }
  if (current !== id) return // user navigated again while loading

  if (id === 'home') section.refresh?.()
  section?.classList.add('active')
  main.scrollTo({ top: 0 })

  // Progress + chrome
  if (id !== 'home') {
    progress.visited.add(id)
    progress.last = id
    saveProgress()
  }
  const page = findPage(id)
  document.getElementById('crumbs').innerHTML = crumbsFor(page)
  document.title = page && page.kind !== 'home'
    ? `${page.num && page.kind === 'lesson' ? page.num + ' ' : ''}${page.label} — Security+ SY0-701`
    : 'CompTIA Security+ SY0-701 — Study Guide'
  navbar?.setActive(id)
  updateReadProgress()
  closeDrawer()
}

function routeFromHash() {
  const id = location.hash.replace(/^#\/?/, '') || 'home'
  goto(id)
}

// ── Chrome helpers ───────────────────────────────────────────────────────────
function updateReadProgress() {
  const main = document.getElementById('main')
  const max = main.scrollHeight - main.clientHeight
  const pct = max > 0 ? (main.scrollTop / max) * 100 : 0
  document.getElementById('progress').style.width = pct + '%'
  document.querySelector('.topbar')?.classList.toggle('scrolled', main.scrollTop > 8)
}

function openDrawer() { document.body.classList.add('drawer-open') }
function closeDrawer() { document.body.classList.remove('drawer-open') }

// ── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(getThemeChoice())

  // Optional link back to a parent site (set VITE_HUB_URL at build time)
  const hubUrl = import.meta.env.VITE_HUB_URL
  if (hubUrl) {
    const a = document.createElement('a')
    a.className = 'hub-link'
    a.href = hubUrl
    a.innerHTML = `${ICONS.left}<span>${import.meta.env.VITE_HUB_LABEL || 'Back to hub'}</span>`
    document.querySelector('.brand')?.after(a)
  }
  ThemePicker(document.getElementById('theme-host'))
  navbar = Navbar(goto, progress)

  document.getElementById('main')?.addEventListener('scroll', updateReadProgress, { passive: true })
  document.getElementById('menu-btn')?.addEventListener('click', openDrawer)
  document.getElementById('scrim')?.addEventListener('click', closeDrawer)

  // Delegate in-content hash links (home cards, pager) to the router
  document.getElementById('main').addEventListener('click', e => {
    const a = e.target.closest('a[href^="#/"]')
    if (!a) return
    e.preventDefault()
    goto(a.getAttribute('href').slice(2))
  })

  window.addEventListener('popstate', routeFromHash)
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer()
    if (e.key === '/' && !/input|textarea|select/i.test(document.activeElement?.tagName)) {
      e.preventDefault()
      openDrawer()
      document.getElementById('nav-search')?.focus()
    }
  })

  routeFromHash()
})

// Expose goto globally for any inline onclick handlers in static content HTML
window.goto = goto
