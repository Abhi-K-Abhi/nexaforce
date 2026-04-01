import { useRevealAll } from '../../hooks/useReveal.js'
import { useCounterValue } from '../../hooks/useCounter.js'
import { PORTFOLIO } from '../../data/index.js'
import './Portfolio.css'

/* ── Animated metric per card ── */
function AnimatedMetric({ metric }) {
  const { value, ref } = useCounterValue(metric.num, 1200)
  return (
    <div className="p-metric" ref={ref}>
      <span className="p-mv">
        {value}{metric.suffix}
      </span>
      <span className="p-ml">{metric.label}</span>
    </div>
  )
}

export default function Portfolio() {
  const ref = useRevealAll()

  return (
    <section id="portfolio" className="portfolio" ref={ref}>
      <div className="s-label reveal">
        <span>Selected Work</span>
        <span className="s-label-num">03 / 05</span>
      </div>

      <div className="po-head">
        <h2 className="po-title reveal">
          Projects That<br/>
          <span className="ghost">Shipped.</span>
        </h2>
      </div>

      <div className="po-grid reveal d1">
        {PORTFOLIO.map(item => (
          <div key={item.id} className="p-item">
            <div className="p-item-top">
              <span className="p-ind">{item.industry}</span>
              <span className="p-yr">{item.year}</span>
            </div>
            <div className="p-item-title">{item.title}</div>
            <p className="p-item-desc">{item.desc}</p>
            <div className="p-tags">
              {item.tags.map(t => (
                <span key={t} className="p-tag">{t}</span>
              ))}
            </div>
            <AnimatedMetric metric={item.metric} />
          </div>
        ))}
      </div>
    </section>
  )
}