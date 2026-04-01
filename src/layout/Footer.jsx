import { useState, useEffect } from 'react'
import { NAV_LINKS, COMPANY } from '../data/index.js'
import './Footer.css'

export default function Footer() {
  const [visible, setVisible] = useState(false)

  /* Show button after scrolling 500px */
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    window.history.pushState(null, '', '#hero')
  }

  const handleNav = (e, href) => {
    e.preventDefault()
    const el = document.getElementById(href.replace('#', ''))
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); window.history.pushState(null, '', href) }
  }

  return (
    <>
      {/* Back to top button — fixed bottom right */}
      <button
        className={`back-to-top ${visible ? 'visible' : ''}`}
        onClick={scrollTop}
        aria-label="Back to top"
      >
        ↑
      </button>

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
    </>
  )
}