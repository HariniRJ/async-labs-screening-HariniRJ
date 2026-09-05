import { useState } from 'react'
import DisplayMockup from './DisplayMockup.jsx'
import StyleSelector from './StyleSelector.jsx'

function Hero() {
  const [activeStyle, setActiveStyle] = useState('lavender')

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your study space,
          <br />
          at a glance.
        </h1>
        <p className="subhead">
          Classes, deadlines, focus sessions and the things that matter to
          you—visible exactly when you need them.
        </p>

        <div className="cta-row">
          <button type="button" className="btn-primary">
            Discover the display
          </button>
          <button type="button" className="btn-secondary">
            See how it works
          </button>
        </div>

        <StyleSelector activeStyle={activeStyle} onSelect={setActiveStyle} />
      </div>

      <div className="hero-visual">
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="blob blob-c" />

        <div className="chip chip-top">
          <span className="chip-dot chip-dot-blush" />
          Focus session · 24 min
        </div>
        <div className="chip chip-bottom">
          <span className="chip-dot chip-dot-lavender" />
          3 classes today
        </div>

        <DisplayMockup activeStyle={activeStyle} />
      </div>
    </section>
  )
}

export default Hero
