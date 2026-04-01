import { useRevealAll } from '../../hooks/useReveal.js'
import { TEAM, CAPACITY } from '../../data/index.js'
import './Team.css'

export default function Team() {
  const ref = useRevealAll()

  return (
    <section id="team" className="team" ref={ref}>
      <div className="s-label reveal">
        <span>The People</span>
        <span className="s-label-num">04 / 05</span>
      </div>

      <div className="team-head">
        <h2 className="team-title reveal">
          85+ Experts.<br/>
          <span className="ghost">One Force.</span>
        </h2>
        <p className="team-intro reveal d1">
          Our team spans full-time leads, part-time specialists, and contract engineers —
          giving us the flexibility to scale any engagement from a 2-person spike to a
          20-person delivery unit.
        </p>
      </div>

      {/* Team cards */}
      <div className="team-grid reveal d1">
        {TEAM.map(member => (
          <div key={member.initials} className="t-card">
            <div className="t-avatar">{member.initials}</div>
            <div className="t-name">{member.name}</div>
            <div className="t-role">{member.role}</div>
            <div className="t-type">{member.type}</div>
            <div className="t-skills">
              {member.skills.split('\n').map((line, i) => (
                <span key={i}>{line}<br/></span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Capacity breakdown */}
      <div className="team-cap reveal d2">
        {CAPACITY.map(c => (
          <div key={c.label} className="cap">
            <div className="cap-v">{c.val}</div>
            <div>
              <div className="cap-lbl">{c.label}</div>
              <div className="cap-sub">{c.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
