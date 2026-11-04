const STORE_KEY = 'sp701:theme'

/** Swatch colours mirror themes.css: [background, surface, accent] */
export const THEMES = [
  { id: 'system',   label: 'System',   desc: 'Match your device' },
  { id: 'midnight', label: 'Midnight', desc: 'Dark · cyan',    mode: 'dark',  sw: ['#0a0d14', '#151a25', '#5cc8ff'] },
  { id: 'slate',    label: 'Slate',    desc: 'Dark · indigo',  mode: 'dark',  sw: ['#111214', '#1e2023', '#8b9cff'] },
  { id: 'forest',   label: 'Forest',   desc: 'Dark · emerald', mode: 'dark',  sw: ['#0b1210', '#15211d', '#4fd6a8'] },
  { id: 'plum',     label: 'Plum',     desc: 'Dark · rose',    mode: 'dark',  sw: ['#120d17', '#211829', '#f07fc4'] },
  { id: 'daylight', label: 'Daylight', desc: 'Light · blue',   mode: 'light', sw: ['#f6f7fa', '#ffffff', '#0a6fd6'] },
  { id: 'sepia',    label: 'Sepia',    desc: 'Light · warm',   mode: 'light', sw: ['#f5efe4', '#fbf7ef', '#b4532a'] },
]

const media = window.matchMedia('(prefers-color-scheme: light)')

export function getThemeChoice() {
  try { return localStorage.getItem(STORE_KEY) || 'system' } catch { return 'system' }
}

function resolve(choice) {
  if (choice === 'system') return media.matches ? 'daylight' : 'midnight'
  return THEMES.some(t => t.id === choice) ? choice : 'midnight'
}

export function applyTheme(choice, animate = false) {
  const root = document.documentElement
  const theme = resolve(choice)
  if (animate) {
    root.classList.add('theme-transition')
    setTimeout(() => root.classList.remove('theme-transition'), 300)
  }
  root.dataset.theme = theme
  const bg = getComputedStyle(root).getPropertyValue('--bg').trim()
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', bg)
  return theme
}

const ICON_SUN = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
const ICON_MOON = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>'
const ICON_CHECK = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>'

/** Mounts the theme button + popover into `host`. */
export function ThemePicker(host) {
  let choice = getThemeChoice()

  host.innerHTML = `
    <button class="theme-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Change theme">
      <span class="theme-btn-ico"></span><span class="theme-btn-label">Theme</span>
    </button>
    <div class="theme-pop" role="menu" aria-label="Theme">
      <div class="theme-pop-head">
        <span>Appearance</span>
        <div class="mode-toggle" role="group" aria-label="Quick switch">
          <button type="button" data-mode="light">${ICON_SUN} Light</button>
          <button type="button" data-mode="dark">${ICON_MOON} Dark</button>
        </div>
      </div>
      <div class="theme-list">
        ${THEMES.map(t => `
          <button type="button" class="theme-opt" role="menuitemradio" data-theme-id="${t.id}">
            <span class="theme-sw${t.id === 'system' ? ' sys' : ''}">
              ${t.sw ? `<i style="background:${t.sw[0]}"></i><i style="background:${t.sw[1]}"></i><i style="background:${t.sw[2]}"></i>` : '<i></i><i></i>'}
            </span>
            <span class="theme-opt-text"><strong>${t.label}</strong><small>${t.desc}</small></span>
            <span class="theme-opt-check">${ICON_CHECK}</span>
          </button>`).join('')}
      </div>
    </div>
  `

  const btn = host.querySelector('.theme-btn')
  const pop = host.querySelector('.theme-pop')

  function render() {
    const active = resolve(choice)
    const isLight = THEMES.find(t => t.id === active)?.mode === 'light'
    host.querySelector('.theme-btn-ico').innerHTML = isLight ? ICON_SUN : ICON_MOON
    host.querySelectorAll('.theme-opt').forEach(o => {
      const on = o.dataset.themeId === choice
      o.classList.toggle('on', on)
      o.setAttribute('aria-checked', on)
    })
    host.querySelectorAll('[data-mode]').forEach(b => {
      b.classList.toggle('on', b.dataset.mode === (isLight ? 'light' : 'dark'))
    })
  }

  function set(next) {
    choice = next
    try { localStorage.setItem(STORE_KEY, next) } catch { /* storage unavailable */ }
    applyTheme(next, true)
    render()
  }

  function open(v) {
    pop.classList.toggle('open', v)
    btn.setAttribute('aria-expanded', v)
  }

  btn.addEventListener('click', e => { e.stopPropagation(); open(!pop.classList.contains('open')) })
  pop.addEventListener('click', e => e.stopPropagation())
  document.addEventListener('click', () => open(false))
  document.addEventListener('keydown', e => { if (e.key === 'Escape') open(false) })

  host.querySelectorAll('.theme-opt').forEach(o => o.addEventListener('click', () => set(o.dataset.themeId)))

  // Quick switch: keep the user in a theme of the requested brightness
  host.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => {
    if (b.classList.contains('on')) return
    set(b.dataset.mode === 'light' ? 'daylight' : 'midnight')
  }))

  media.addEventListener('change', () => { if (choice === 'system') { applyTheme('system', true); render() } })

  render()
}
