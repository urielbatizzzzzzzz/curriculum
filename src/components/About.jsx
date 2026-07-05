export default function About({ t }) {
  return (
    <section id="about" className="section">
      <div className="section__inner">
        <h2 className="section__title reveal">{t.about.title}</h2>
        <p className="about__body reveal">{t.about.body}</p>

        <div className="about__highlights">
          {t.about.highlights.map((h, i) => (
            <div className="stat reveal" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="stat__value">{h.value}</span>
              <span className="stat__label">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
