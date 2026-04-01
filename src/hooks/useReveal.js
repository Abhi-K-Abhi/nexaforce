/* ─────────────────────────────────────────────────
   hooks/useReveal.js
   Attaches IntersectionObserver to a ref.
   Returns the ref — attach to any DOM element.
   When it enters viewport, adds class "visible".
───────────────────────────────────────────────── */
import { useEffect, useRef } from 'react'

export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px', ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

/* ─────────────────────────────────────────────────
   hooks/useRevealAll.js (inline export)
   Observes ALL .reveal elements under a parent ref.
───────────────────────────────────────────────── */
export function useRevealAll() {
  const ref = useRef(null)

  useEffect(() => {
    const parent = ref.current
    if (!parent) return
    const els = parent.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.07, rootMargin: '0px 0px -24px 0px' }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
