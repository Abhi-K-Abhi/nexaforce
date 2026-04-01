/* ─────────────────────────────────────────────────
   hooks/useCursor.js
   Drives the custom crosshair + ring cursor.
   Call once at App level.
───────────────────────────────────────────────── */
import { useEffect, useRef } from 'react'

export function useCursor() {
  const curRef  = useRef(null)
  const ringRef = useRef(null)

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

    // Grow ring on hover over interactive elements
    const addHover = (el) => {
      el.addEventListener('mouseenter', () => { cur.classList.add('hover'); ring.classList.add('hover') })
      el.addEventListener('mouseleave', () => { cur.classList.remove('hover'); ring.classList.remove('hover') })
    }
    const els = document.querySelectorAll('a, button, .sc-card, .p-item, .t-card')
    els.forEach(addHover)

    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return { curRef, ringRef }
}
