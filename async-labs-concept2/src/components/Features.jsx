const FEATURES = [
  {
    key: 'calendar',
    tag: 'Calendar',
    title: 'Stay on schedule',
    desc: 'Keep classes, meetings and plans visible at a glance.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4.5" width="18" height="16" rx="3" />
        <line x1="3" y1="9.5" x2="21" y2="9.5" />
        <line x1="7.5" y1="2.5" x2="7.5" y2="6.5" />
        <line x1="16.5" y1="2.5" x2="16.5" y2="6.5" />
      </svg>
    ),
  },
  {
    key: 'tasks',
    tag: 'Tasks',
    title: 'Keep priorities visible',
    desc: 'See assignments and important tasks without opening another app.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="5.5" cy="7" r="1.4" />
        <circle cx="5.5" cy="12" r="1.4" />
        <circle cx="5.5" cy="17" r="1.4" />
        <line x1="10" y1="7" x2="19.5" y2="7" />
        <line x1="10" y1="12" x2="19.5" y2="12" />
        <line x1="10" y1="17" x2="19.5" y2="17" />
      </svg>
    ),
  },
  {
    key: 'focus',
    tag: 'Focus',
    title: 'Stay in flow',
    desc: 'Use focus timers to keep study sessions on track.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12.5" r="8" />
        <line x1="12" y1="12.5" x2="12" y2="8" />
        <line x1="12" y1="12.5" x2="15" y2="14" />
      </svg>
    ),
  },
]

function Features() {
  return (
    <section className="features">
      <div className="features-head">
        <h2>
          Everything you need,
          <br />
          without another tab.
        </h2>
        <p className="features-sub">
          Keep your study day organized with the information you check most.
        </p>
      </div>

      <div className="feature-grid">
        {FEATURES.map((f) => (
          <div key={f.key} className={`feature-card ${f.key}`}>
            <div className="feature-icon">{f.icon}</div>
            <div className="feature-tag">{f.tag}</div>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
