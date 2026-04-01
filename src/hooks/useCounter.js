/* ─────────────────────────────────────────────────
   hooks/useCounter.js
   Animates a number from 0 → target using rAF.
   Triggers once when the element enters viewport.
───────────────────────────────────────────────── */
import { useEffect, useRef, useState } from 'react'

export function useCounter(target, duration = 1200) {
  const [value, setValue] = useState(0)
  const ref  = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true
        let start = null

        const step = (ts) => {
          if (!start) start = ts
          const progress = Math.min((ts - start) / duration, 1)
          // quartic ease-out
          const ease = 1 - Math.pow(1 - progress, 4)
          setValue(Math.round(ease * target))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.3 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { value, ref }
}
