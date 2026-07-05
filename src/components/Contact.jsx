export default function Contact({ t, links }) {
  return (
    <section id="contact" className="section">
      <div className="section__inner contact">
        <h2 className="contact__title reveal">{t.contact.title}</h2>
        <p className="contact__body reveal">{t.contact.body}</p>
        <div className="contact__actions reveal">
          <a className="btn btn--primary" href={`mailto:${links.email}`}>{t.contact.email}</a>
          <a className="btn btn--ghost" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn btn--ghost" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className="contact__email reveal">{links.email}</p>
      </div>
    </section>
  )
}
