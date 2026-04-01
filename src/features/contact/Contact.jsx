/* ─────────────────────────────────────────────────
   features/contact/Contact.jsx
   EmailJS form with full validation + status states.
   All field names match EmailJS template variables.
───────────────────────────────────────────────── */
import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { EMAIL_CONFIG } from '../../config/email.js'
import { useRevealAll } from '../../hooks/useReveal.js'
import { COMPANY } from '../../data/index.js'
import './Contact.css'

const SERVICES_LIST = [
  'Full-Stack Development', 'Data Science & ML',
  'DevOps & Cloud', 'Mobile Engineering',
  'Cybersecurity', 'AI Integration', 'Other / Multiple',
]
const ENGAGEMENT_LIST = [
  'Fixed-Price Project', 'Time & Materials',
  'Dedicated Team', 'Staff Augmentation',
]
const BUDGET_LIST = [
  'Under $10,000', '$10,000 – $50,000',
  '$50,000 – $150,000', '$150,000+', 'Prefer to discuss',
]
const TIMELINE_LIST = [
  'Immediately', 'Within 1 month', '1–3 months', '3+ months',
]

export default function Contact() {
  const formRef    = useRef(null)
  const sectionRef = useRevealAll()

  const [status,  setStatus]  = useState('idle') // idle | sending | ok | err
  const [btnText, setBtnText] = useState('Send Inquiry')

  /* Init EmailJS once on mount */
  useEffect(() => {
    if (EMAIL_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      emailjs.init({ publicKey: EMAIL_CONFIG.PUBLIC_KEY })
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setBtnText('Transmitting...')

    /* Guard: keys not configured */
    if (EMAIL_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID') {
      setStatus('err')
      setBtnText('Send Inquiry')
      return
    }

    try {
      await emailjs.sendForm(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        formRef.current,
      )
      setStatus('ok')
      formRef.current.reset()
    } catch {
      setStatus('err')
    }
    setBtnText('Send Inquiry')
  }

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="s-label reveal">
        <span>Get In Touch</span>
        <span className="s-label-num">05 / 05</span>
      </div>

      <div className="c-grid">
        {/* Left info */}
        <div className="reveal">
          <h2 className="c-title">
            Let's Build<br/>
            <span className="ghost">Together.</span>
          </h2>
          <p className="c-desc">
            Have a project in mind? Tell us what you need. We'll respond with a team
            proposal and timeline within 24 hours — guaranteed.
          </p>
          <div className="c-info">
            {[
              { k: 'Email',    v: COMPANY.email    },
              { k: 'Response', v: COMPANY.response },
              { k: 'Offices',  v: COMPANY.offices  },
              { k: 'Hours',    v: COMPANY.hours     },
            ].map(row => (
              <div key={row.k} className="ci">
                <span className="ci-k">{row.k}</span>
                <span className="ci-v">{row.v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div className="reveal d1">
          <form className="f-wrap" ref={formRef} onSubmit={handleSubmit}>
            {/* Form header bar */}
            <div className="f-header">
              <span className="f-header-lbl">// Client Inquiry</span>
              <div className="f-dots">
                <span /><span /><span />
              </div>
            </div>

            <div className="f-row">
              <Field label="Full Name *">
                <input type="text" name="from_name" placeholder="Jane Smith" required />
              </Field>
              <Field label="Company *">
                <input type="text" name="company" placeholder="Acme Corp" required />
              </Field>
            </div>

            <div className="f-row">
              <Field label="Email *">
                <input type="email" name="reply_to" placeholder="jane@acme.com" required />
              </Field>
              <Field label="Country">
                <input type="text" name="country" placeholder="United Kingdom" />
              </Field>
            </div>

            <div className="f-row">
              <Field label="Service *">
                <select name="service" required defaultValue="">
                  <option value="" disabled>Select service</option>
                  {SERVICES_LIST.map(s => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Engagement Type">
                <select name="engagement" defaultValue="">
                  <option value="" disabled>Select type</option>
                  {ENGAGEMENT_LIST.map(s => <option key={s}>{s}</option>)}
                </select>
              </Field>
            </div>

            <div className="f-row">
              <Field label="Budget Range">
                <select name="budget" defaultValue="">
                  <option value="" disabled>Approx. budget</option>
                  {BUDGET_LIST.map(s => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <Field label="Timeline">
                <select name="timeline" defaultValue="">
                  <option value="" disabled>When to start?</option>
                  {TIMELINE_LIST.map(s => <option key={s}>{s}</option>)}
                </select>
              </Field>
            </div>

            <div className="f-row f-full">
              <Field label="Project Brief *" fullWidth>
                <textarea
                  name="message"
                  placeholder="Describe your project, stack preferences, team size, and requirements..."
                  required
                />
              </Field>
            </div>

            {/* Submit */}
            <div className="f-submit">
              <button type="submit" disabled={status === 'sending'}>
                <span>{btnText}</span>
                <span>[ → ]</span>
              </button>
            </div>

            {/* Status messages */}
            {status === 'ok' && (
              <div className="f-status ok">
                // Transmission complete. We will respond within 24 hours.
              </div>
            )}
            {status === 'err' && (
              <div className="f-status err">
                {EMAIL_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID'
                  ? '⚙ EmailJS not configured. Add your 3 keys to src/config/email.js'
                  : `// Transmission failed. Email us: ${COMPANY.email}`
                }
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

/* ── Reusable field wrapper ── */
function Field({ label, children, fullWidth }) {
  return (
    <div className={`f-field${fullWidth ? ' f-field-full' : ''}`}>
      <label className="f-label">{label}</label>
      {children}
    </div>
  )
}
