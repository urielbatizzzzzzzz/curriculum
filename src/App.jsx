import { useState, useEffect, useCallback } from 'react'
import { content, links, projectLinks, projectPrivate } from './data/content.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { useReveal } from './hooks/useReveal.js'

export default function App() {
  // Idioma: recuerda la preferencia y detecta el idioma del navegador la primera vez.
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang')
    if (saved) return saved
    return navigator.language?.startsWith('en') ? 'en' : 'es'
  })

  // Tema: recuerda la preferencia o respeta la del sistema.
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const toggleLang = useCallback(() => setLang((l) => (l === 'es' ? 'en' : 'es')), [])
  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])

  const t = content[lang]

  // Activa las animaciones de aparición al hacer scroll.
  useReveal([lang])

  return (
    <>
      <Nav t={t} lang={lang} theme={theme} onToggleLang={toggleLang} onToggleTheme={toggleTheme} links={links} />
      <main>
        <Hero t={t} lang={lang} links={links} />
        <About t={t} />
        <Projects t={t} lang={lang} projectLinks={projectLinks} projectPrivate={projectPrivate} />
        <Skills t={t} />
        <Education t={t} />
        <Contact t={t} links={links} />
      </main>
      <Footer t={t} links={links} />
    </>
  )
}
