import { useRevealAll } from '../../hooks/useReveal.js'
import { PROCESS_STEPS } from '../../data/index.js'
import './Process.css'

export default function Process() {
  const ref = useRevealAll()

  const handleScroll = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    window.history.pushState(null, '', '#contact')
  }

  return (
    <section id="process" className="process" ref={ref}>
      <div className="s-label reveal">
        <span>How It Works</span>
        <span className="s-label-num">02 / 05</span>
      </div>

      <h2 className="proc-title reveal">
        Four Steps.<br/>
        <span className="ghost">One Outcome.</span>
      </h2>

      <div className="proc-steps reveal d1">
        {PROCESS_STEPS.map((step, i) => (
          <div key={step.num} className="ps">
            <div className="ps-n">{step.num}</div>
            <div className="ps-lbl">{step.label}</div>
            <div className="ps-title">{step.title}</div>
            <p className="ps-desc">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="proc-banner reveal d2">
        <div className="proc-banner-text">
          Typical timeline: <strong>Brief → Delivery in 2–6 weeks</strong>
        </div>
        <a href="#contact" className="btn btn-f" onClick={handleScroll}>
          <span>Start Today</span><span>→</span>
        </a>
      </div>
    </section>
  )
}
