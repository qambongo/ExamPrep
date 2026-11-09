(() => {
  const STORE_KEY = 'sp701:theme'
  const themes = ['system', 'midnight', 'slate', 'forest', 'plum', 'daylight', 'sepia']
  const media = window.matchMedia('(prefers-color-scheme: light)')

  function getChoice() {
    try {
      const choice = localStorage.getItem(STORE_KEY)
      return themes.includes(choice) ? choice : 'system'
    } catch {
      return 'system'
    }
  }

  let choice = getChoice()

  function applyTheme(animate = false) {
    const theme = choice === 'system'
      ? (media.matches ? 'daylight' : 'midnight')
      : choice
    const root = document.documentElement
    if (animate) {
      root.classList.add('theme-transition')
      setTimeout(() => root.classList.remove('theme-transition'), 300)
    }
    root.dataset.theme = theme
  }

  function mountPicker() {
    const nav = document.querySelector('.site-nav-inner')
    const host = document.createElement('div')
    host.className = nav ? 'site-theme-host' : 'site-theme-host site-theme-host-fixed'
    host.innerHTML = `
      <label class="site-theme-control">
        <span>Theme</span>
        <select aria-label="Application theme">
          <option value="system">System</option>
          <option value="midnight">Midnight</option>
          <option value="slate">Slate</option>
          <option value="forest">Forest</option>
          <option value="plum">Plum</option>
          <option value="daylight">Daylight</option>
          <option value="sepia">Sepia</option>
        </select>
      </label>
    `
    const select = host.querySelector('select')
    select.value = choice
    select.addEventListener('change', () => {
      choice = select.value
      try {
        localStorage.setItem(STORE_KEY, choice)
      } catch {
        // Keep the selection active for this page when storage is unavailable.
      }
      applyTheme(true)
    })

    if (nav) {
      const account = nav.querySelector('.site-nav-end')
      nav.insertBefore(host, account || null)
    } else {
      document.body.prepend(host)
    }

    window.addEventListener('storage', event => {
      if (event.key !== STORE_KEY) return
      choice = getChoice()
      select.value = choice
      applyTheme(true)
    })
  }

  applyTheme()
  document.addEventListener('DOMContentLoaded', mountPicker, { once: true })
  media.addEventListener('change', () => {
    if (choice === 'system') applyTheme(true)
  })
})()
