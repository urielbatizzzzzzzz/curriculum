export default function Projects({ t }) {
  return (
    <section id="projects" className="section section--alt">
      <div className="section__inner">
        <h2 className="section__title reveal">{t.projects.title}</h2>
        <p className="section__subtitle reveal">{t.projects.subtitle}</p>

        <div className="projects">
          {t.projects.items.map((p, i) => (
            <article className="card reveal" key={i} style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="card__head">
                <h3 className="card__name">{p.name}</h3>
                <span className="card__type">{p.type}</span>
              </div>
              <p className="card__summary">{p.summary}</p>
              <ul className="card__bullets">
                {p.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              <div className="card__tags">
                {p.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
