export default function Footer({ t, links }) {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span>© {year} Uriel Castorela Cuevas</span>
        <div className="footer__links">
          <a href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${links.email}`}>Email</a>
        </div>
        <span className="footer__built">{t.footer.built}</span>
      </div>
    </footer>
  )
}
