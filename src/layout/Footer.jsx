import { NAV_LINKS, COMPANY } from '../data/index.js'
import './Footer.css'

export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault()
    const el = document.getElementById(href.replace('#', ''))
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); window.history.pushState(null, '', href) }
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">{COMPANY.name}</div>
        <ul className="footer-links">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => handleNav(e, l.href)}>{l.label}</a>
            </li>
          ))}
          <li><a href="#contact" onClick={(e) => handleNav(e, '#contact')}>Contact</a></li>
        </ul>
        <div className="footer-copy">© 2025 {COMPANY.name} · All rights reserved</div>
      </div>
    </footer>
  )
}
