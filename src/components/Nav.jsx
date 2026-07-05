import { useState, useEffect } from 'react'

export default function Nav({ t, lang, theme, onToggleLang, onToggleTheme, links }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const sections = [
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.projects },
    { id: 'skills', label: t.nav.skills },
    { id: 'education', label: t.nav.education },
    { id: 'contact', label: t.nav.contact },
  ]

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <button className="nav__brand" onClick={() => go('top')} aria-label="Inicio">
          <span className="nav__brand-mark">UC</span>
          <span className="nav__brand-name">Uriel Castorela</span>
        </button>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {sections.map((s) => (
            <button key={s.id} className="nav__link" onClick={() => go(s.id)}>
              {s.label}
            </button>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="nav__toggle" onClick={onToggleLang} aria-label="Cambiar idioma" title="ES / EN">
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            className="nav__toggle"
            onClick={onToggleTheme}
            aria-label="Cambiar tema"
            title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <a className="nav__cv" href={links.cv[lang]} download>
            {t.nav.cv}
          </a>
          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Menú"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
