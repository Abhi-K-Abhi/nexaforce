/* ─────────────────────────────────────────────────
   layout/Navbar.jsx
   Sticky nav with:
   - Smooth scroll to sections (SPA behaviour)
   - URL hash update on click (shareable links)
   - Mobile hamburger menu
   - Scroll-based border opacity
───────────────────────────────────────────────── */
import { useState, useEffect } from 'react'
import { NAV_LINKS, COMPANY } from '../data/index.js'
import './Navbar.css'

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  // ── Scroll detection for nav border
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Smooth scroll + URL hash update
  const handleNav = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      // Update URL without page reload (gives shareable URLs)
      window.history.pushState(null, '', href)
    }
    setMobileOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <a href="#hero" className="nav-logo" onClick={(e) => handleNav(e, '#hero')}>
          <div className="nav-hex">
            <svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
              <polygon points="17,2 31,10 31,24 17,32 3,24 3,10" />
            </svg>
            <span className="nav-hex-label">NX</span>
          </div>
          <span className="nav-wordmark">{COMPANY.name}</span>
        </a>

        {/* Desktop Links */}
        <div className="nav-center">
          <ul className="nav-links">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNav(e, link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <a href="#contact" className="nav-cta" onClick={(e) => handleNav(e, '#contact')}>
          <span>Get a Quote</span>
          <span>→</span>
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(link => (
          <a key={link.href} href={link.href} onClick={(e) => handleNav(e, link.href)}>
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={(e) => handleNav(e, '#contact')}>
          Get a Quote
        </a>
      </div>
    </>
  )
}
