/* ─────────────────────────────────────────────────
   hooks/useCounter.js
   Two exports:
   1. useCounter — original, used by Hero metrics
   2. useCounterValue — lightweight, triggers when
      inView ref enters viewport. Used by Portfolio.
───────────────────────────────────────────────── */
import { useEffect, useRef, useState } from 'react'

/* ── Original — used by Hero ── */
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

/* ── New — used by Portfolio metrics ── */
export function useCounterValue(target, duration = 1000) {
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
          const ease = 1 - Math.pow(1 - progress, 4)
          setValue(Math.round(ease * target))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.4 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { value, ref }
}