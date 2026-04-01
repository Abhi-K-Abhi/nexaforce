/* ─────────────────────────────────────────────────
   features/hero/Hero.jsx
   - Animated title (slide up on mount)
   - Animated counters (trigger on viewport enter)
   - Infinite ticker
   - Pulsing status dot
───────────────────────────────────────────────── */
import { useEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter.js'
import { STATS, TICKER_ITEMS, COMPANY } from '../../data/index.js'
import './Hero.css'

/* Single animated counter widget */
function Metric({ stat }) {
  const { value, ref } = useCounter(stat.target, stat.id === 'delivery' ? 900 : 1300)
  return (
    <div className="hm" ref={ref}>
      <div className="hm-val">
        {value}{stat.suffix}
      </div>
      <div className="hm-lbl">
        {stat.label.split('\n').map((l, i) => <span key={i}>{l}<br/></span>)}
      </div>
    </div>
  )
}

export default function Hero() {
  // Double ticker items for seamless loop
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]

  const handleScroll = (e, href) => {
    e.preventDefault()
    const el = document.getElementById(href.replace('#', ''))
    if (el) { el.scrollIntoView({ behavior: 'smooth' }); window.history.pushState(null, '', href) }
  }

  return (
    <section id="hero" className="hero">
      {/* Corner brackets */}
      <div className="hc hc-tl" /><div className="hc hc-tr" />
      <div className="hc hc-bl" /><div className="hc hc-br" />

      {/* Status */}
      <div className="h-status">
        <span className="sdot" />
        <span>System Online</span>
        <span className="h-status-sub">EST. {COMPANY.founded} · GLOBAL OPS</span>
      </div>

      {/* Title */}
      <h1 className="hero-title">
        <span className="hl"><span className="hw">We Build</span></span>
        <span className="hl"><span className="hw ghost-word">What The</span></span>
        <span className="hl"><span className="hw">World Needs.</span></span>
      </h1>

      {/* Bottom row */}
      <div className="hero-bot">
        <div>
          <p className="hero-desc">
            <strong>{COMPANY.name}</strong> delivers end-to-end IT solutions for forward-thinking
            companies across <strong>30+ countries.</strong> Full-stack, data science, DevOps —
            we assemble the right team, fast.
          </p>
          <div className="hero-acts">
            <a href="#contact" className="btn btn-f" onClick={(e) => handleScroll(e, '#contact')}>
              <span>Start a Project</span><span>→</span>
            </a>
            <a href="#portfolio" className="btn btn-g" onClick={(e) => handleScroll(e, '#portfolio')}>
              <span>View Our Work</span>
            </a>
          </div>
        </div>

        {/* Animated metrics */}
        <div className="h-metrics">
          {STATS.map(s => <Metric key={s.id} stat={s} />)}
        </div>
      </div>

      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-tr">
          {doubled.map((item, i) => (
            <span key={i} className="ti">
              <span className="ti-sep" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
