export default function Education({ t }) {
  return (
    <section id="education" className="section section--alt">
      <div className="section__inner">
        <h2 className="section__title reveal">{t.education.title}</h2>

        <div className="edu">
          {t.education.items.map((e, i) => (
            <div className="edu__item reveal" key={i} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="edu__marker" aria-hidden="true"></div>
              <div className="edu__body">
                <h3 className="edu__school">{e.school}</h3>
                <p className="edu__degree">{e.degree}</p>
                {e.detail && <p className="edu__detail">{e.detail}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
