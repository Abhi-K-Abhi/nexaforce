import { useState, useEffect, useCallback } from 'react'
import { NAV_LINKS, COMPANY } from '../data/index.js'
import './Navbar.css'

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeId,   setActiveId]   = useState('hero')

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 20)
    const sectionIds = ['hero', 'services', 'process', 'portfolio', 'team', 'contact']
    const offset = 100
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i])
      if (el && el.getBoundingClientRect().top <= offset) {
        setActiveId(sectionIds[i])
        break
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  /* ── Auto-close mobile menu on scroll ── */
  useEffect(() => {
    const closeOnScroll = () => { if (mobileOpen) setMobileOpen(false) }
    window.addEventListener('scroll', closeOnScroll, { passive: true })
    return () => window.removeEventListener('scroll', closeOnScroll)
  }, [mobileOpen])

  const handleNav = (e, href) => {
    e.preventDefault()
    const el = document.getElementById(href.replace('#', ''))
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', href)
    }
    setMobileOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nav-logo" onClick={(e) => handleNav(e, '#hero')}>
          <div className="nav-hex">
            <svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
              <polygon points="17,2 31,10 31,24 17,32 3,24 3,10" />
            </svg>
            <span className="nav-hex-label">NX</span>
          </div>
          <span className="nav-wordmark">{COMPANY.name}</span>
        </a>

        <div className="nav-center">
          <ul className="nav-links">
            {NAV_LINKS.map(link => {
              const id = link.href.replace('#', '')
              const isActive = activeId === id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className={isActive ? 'nav-active' : ''}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <a href="#contact" className="nav-cta" onClick={(e) => handleNav(e, '#contact')}>
          <span>Get a Quote</span>
          <span>→</span>
        </a>

        <button
          className={`hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

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