export default function Skills({ t }) {
  return (
    <section id="skills" className="section">
      <div className="section__inner">
        <h2 className="section__title reveal">{t.skills.title}</h2>

        <div className="skills">
          {t.skills.groups.map((g, i) => (
            <div className="skills__group reveal" key={i} style={{ transitionDelay: `${i * 70}ms` }}>
              <h3 className="skills__label">{g.label}</h3>
              <div className="skills__items">
                {g.items.map((item) => (
                  <span className="chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
