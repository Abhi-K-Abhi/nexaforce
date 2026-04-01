import { useRevealAll } from '../../hooks/useReveal.js'
import { SERVICES } from '../../data/index.js'
import './Services.css'

export default function Services() {
  const ref = useRevealAll()

  return (
    <section id="services" className="services" ref={ref}>
      <div className="s-label reveal">
        <span>What We Do</span>
        <span className="s-label-num">01 / 05</span>
      </div>

      <div className="svc-head">
        <h2 className="svc-title reveal">
          Core<br/><span className="ghost">Capabilities</span>
        </h2>
        <p className="svc-intro reveal d1">
          From a single engineer to a complete delivery squad — NexaForce provides scalable IT
          talent and project execution across every major technology domain. We don't just staff.
          We deliver.
        </p>
      </div>

      <div className="svc-grid reveal d1">
        {SERVICES.map(svc => (
          <div key={svc.id} className="sc-card">
            <div className="sc-bar" />
            <div className="sc-head-row">
              <span className="sc-num">{svc.num}</span>
              <span className="sc-arr">↗</span>
            </div>
            <div className="sc-title">{svc.title}</div>
            <p className="sc-desc">{svc.desc}</p>
            <div className="sc-tags">
              {svc.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>

      {/* CTA banner after services grid */}
      <div className="svc-banner reveal d2">
        <div className="svc-banner-text">
          Need something specific? <strong>Let's talk.</strong>
        </div>
        <a  href="#contact"
          className="btn btn-f"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            window.history.pushState(null, '', '#contact')
          }}
        >
          <span>Start a Conversation</span>
          <span>→</span>
        </a>
      </div>

    </section>
  )
}
