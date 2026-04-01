/* ─────────────────────────────────────────────────
   data/index.js
   All site content lives here.
   Edit text/numbers here — never touch component logic.
───────────────────────────────────────────────── */

export const COMPANY = {
  name: 'NexaForce',
  tagline: 'Global IT Consultancy',
  email: 'hello@nexaforce.io',
  founded: '2024',
  offices: 'London · Dubai · Toronto · Bangalore',
  hours: 'Mon–Fri · 09:00–18:00 GMT',
  response: 'Within 24 hours, guaranteed',
}

export const STATS = [
  { id: 'countries', target: 30, suffix: '+', label: 'Countries\nServed' },
  { id: 'engineers', target: 85, suffix: '+', label: 'Active\nEngineers' },
  { id: 'delivery',  target: 4,  suffix: 'wk', label: 'Avg.\nDelivery' },
]

export const TICKER_ITEMS = [
  'Full-Stack Dev', 'Data Science', 'DevOps & Cloud',
  'Mobile Engineering', 'Cybersecurity', 'AI Integration',
  'System Architecture', 'QA & Testing',
]

export const SERVICES = [
  {
    num: '01', id: 'fullstack',
    title: 'Full-Stack Development',
    desc: 'End-to-end web and enterprise app development. React, Vue, Node, Django, FastAPI — every stack, delivered.',
    tags: ['React', 'Node.js', 'Python', 'PostgreSQL'],
  },
  {
    num: '02', id: 'data',
    title: 'Data Science & ML',
    desc: 'Predictive modelling, NLP pipelines, real-time analytics dashboards, and AI-powered products.',
    tags: ['Python', 'TensorFlow', 'Spark', 'dbt'],
  },
  {
    num: '03', id: 'devops',
    title: 'DevOps & Cloud',
    desc: 'Continuous delivery, infrastructure-as-code, cloud architecture on AWS, GCP, and Azure.',
    tags: ['Kubernetes', 'Terraform', 'AWS', 'GCP'],
  },
  {
    num: '04', id: 'mobile',
    title: 'Mobile Engineering',
    desc: 'iOS, Android, and cross-platform apps. React Native and Flutter. MVP to App Store in weeks.',
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    num: '05', id: 'security',
    title: 'Cybersecurity',
    desc: 'Penetration testing, SOC2, ISO 27001 compliance, and proactive threat modelling for enterprise clients.',
    tags: ['Pen Testing', 'SOC2', 'SIEM', 'Zero Trust'],
  },
  {
    num: '06', id: 'ai',
    title: 'AI Integration',
    desc: 'LLM deployment, RAG pipelines, custom fine-tuning, and AI features built into your existing products.',
    tags: ['LangChain', 'OpenAI', 'RAG', 'Fine-tuning'],
  },
]

export const PROCESS_STEPS = [
  {
    num: '01', label: 'Discovery',
    title: 'You Brief Us',
    desc: 'Tell us your scope, timeline, and tech requirements. We listen more than we talk at this stage.',
  },
  {
    num: '02', label: 'Matching',
    title: 'We Build Your Team',
    desc: 'Within 48 hours, we assemble a dedicated team matched exactly to your stack and domain.',
  },
  {
    num: '03', label: 'Execution',
    title: 'We Deliver',
    desc: 'Agile sprints, weekly demos, full transparency. You are never in the dark on progress or blockers.',
  },
  {
    num: '04', label: 'Handover',
    title: 'You Own It',
    desc: 'Clean docs, full IP transfer, optional ongoing support. The code is completely yours.',
  },
]

export const PORTFOLIO = [
  {
    id: 'trading',
    industry: 'FinTech · UK', year: '2024',
    title: 'Real-Time Trading Analytics Platform',
    desc: 'High-throughput data pipeline and React dashboard for a London investment firm, processing millions of events daily with sub-100ms latency.',
    tags: ['React', 'Kafka', 'Python', 'AWS'],
    metric: { num: 2, suffix: 'M+', label: 'Events / Day' },
  },
  {
    id: 'triage',
    industry: 'HealthTech · Germany', year: '2024',
    title: 'AI-Powered Patient Triage System',
    desc: 'NLP triage assistant for a Berlin hospital network, reducing average patient wait-time through intelligent symptom analysis and routing.',
    tags: ['LangChain', 'FastAPI', 'PostgreSQL', 'Docker'],
    metric: { num: 34, suffix: '%', label: 'Wait Time Reduction' },
  },
  {
    id: 'marketplace',
    industry: 'E-Commerce · Canada', year: '2023',
    title: 'Multi-Vendor Marketplace Rebuild',
    desc: 'Complete replatforming from a legacy PHP monolith to modern microservices, handling Black Friday peaks with zero downtime.',
    tags: ['Next.js', 'Node.js', 'Redis', 'Kubernetes'],
    metric: { num: 50, suffix: 'K', label: 'Concurrent Users Peak' },
  },
  {
    id: 'supply',
    industry: 'Logistics · UAE', year: '2023',
    title: 'Supply Chain Intelligence Dashboard',
    desc: 'Predictive supply chain tool for a Dubai logistics company, cutting excess inventory costs significantly in the first operating quarter.',
    tags: ['Python', 'Spark', 'Tableau', 'Azure'],
    metric: { num: 22, suffix: '%', label: 'Inventory Cost Reduction' },
  },
]

export const TEAM = [
  { initials: 'AK', name: 'Arjun Kapoor',   role: 'Lead Architect',      type: 'Full-Time', skills: 'Node.js · AWS\nSystem Design · PostgreSQL' },
  { initials: 'SM', name: 'Sofia Mendes',    role: 'ML Engineer',         type: 'Full-Time', skills: 'Python · TensorFlow\nLangChain · dbt' },
  { initials: 'LW', name: 'Liam Walsh',      role: 'DevOps Lead',         type: 'Contract',  skills: 'Kubernetes · Terraform\nGCP · CI/CD' },
  { initials: 'YN', name: 'Yuki Nakamura',   role: 'Frontend Engineer',   type: 'Part-Time', skills: 'React · TypeScript\nFigma · Motion' },
]

export const CAPACITY = [
  { val: '60%', label: 'Full-Time Staff',  sub: 'Core delivery team' },
  { val: '25%', label: 'Part-Time',        sub: 'Specialist roles' },
  { val: '15%', label: 'Contract',         sub: 'On-demand experts' },
]

export const NAV_LINKS = [
  { label: 'Services',  href: '#services',  to: '/services'  },
  { label: 'Process',   href: '#process',   to: '/process'   },
  { label: 'Work',      href: '#portfolio', to: '/portfolio' },
  { label: 'Team',      href: '#team',      to: '/team'      },
]
