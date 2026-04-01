/* ─────────────────────────────────────────────────
   App.jsx
   Root component. Sets up:
   - React Router (BrowserRouter in main.jsx)
   - Hash-based URL sync (smooth scroll + shareable)
   - Custom cursor
   - Global ambient layers (grid, scanlines)
   - All section components in order
───────────────────────────────────────────────── */
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

import Navbar    from './layout/Navbar.jsx'
import Footer    from './layout/Footer.jsx'
import Hero      from './features/hero/Hero.jsx'
import Services  from './features/services/Services.jsx'
import Process   from './features/process/Process.jsx'
import Portfolio from './features/portfolio/Portfolio.jsx'
import Team      from './features/team/Team.jsx'
import Contact   from './features/contact/Contact.jsx'

import './styles/global.css'

export default function App() {
  const curRef  = useRef(null)
  const ringRef = useRef(null)
  const location = useLocation()

  /* ── Custom cursor ── */
  useEffect(() => {
    const cur  = curRef.current
    const ring = ringRef.current
    if (!cur || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY
      cur.style.left = mx + 'px'
      cur.style.top  = my + 'px'
    }
    document.addEventListener('mousemove', onMove)

    const animRing = () => {
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      requestAnimationFrame(animRing)
    }
    animRing()

    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  /* ── Grow cursor on hover ── */
  useEffect(() => {
    const cur  = curRef.current
    const ring = ringRef.current
    if (!cur || !ring) return

    const on  = () => { cur.classList.add('hover'); ring.classList.add('hover') }
    const off = () => { cur.classList.remove('hover'); ring.classList.remove('hover') }

    const attach = () => {
      document.querySelectorAll('a, button, .sc-card, .p-item, .t-card')
        .forEach(el => { el.addEventListener('mouseenter', on); el.addEventListener('mouseleave', off) })
    }
    // Small delay to let DOM settle
    const t = setTimeout(attach, 300)
    return () => clearTimeout(t)
  }, [])

  /* ── On route change, scroll to matching section ── */
  useEffect(() => {
    const hash = location.hash || window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
    }
  }, [location])

  return (
    <>
      {/* Ambient layers */}
      <div className="grid-overlay" />
      <div className="scanline" />

      {/* Custom cursor */}
      <div className="cursor"      ref={curRef}  />
      <div className="cursor-ring" ref={ringRef} />

      {/* Layout */}
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Team />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
