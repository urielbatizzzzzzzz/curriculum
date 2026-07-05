export default function Hero({ t, lang, links }) {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__glow hero__glow--1"></span>
        <span className="hero__glow hero__glow--2"></span>
        <span className="hero__grid"></span>
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow reveal">
          <span className="hero__dot"></span> {t.hero.location} · {t.hero.role}
        </p>
        <h1 className="hero__name reveal">{t.hero.name}</h1>
        <p className="hero__tagline reveal">{t.hero.tagline}</p>
        <p className="hero__intro reveal">{t.hero.intro}</p>

        <div className="hero__cta reveal">
          <button className="btn btn--primary" onClick={() => go('projects')}>
            {t.hero.ctaProjects}
          </button>
          <a className="btn btn--ghost" href={links.cv[lang]} download>
            {t.hero.ctaCv}
          </a>
        </div>

        <div className="hero__socials reveal">
          <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
          <a href={`mailto:${links.email}`} aria-label="Email">Email</a>
        </div>
      </div>
    </section>
  )
}
