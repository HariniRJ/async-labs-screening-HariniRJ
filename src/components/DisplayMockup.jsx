const FRAMES = {
  lavender: ['#DCCFF5', '#B7A2E3'],
  sky: ['#CDE6F7', '#93BEE0'],
  blush: ['#F8D6E3', '#E896B4'],
  sage: ['#DCE8D6', '#9EBE93'],
  charcoal: ['#5B5768', '#332F3E'],
}

function DisplayMockup({ activeStyle }) {
  const [frame1, frame2] = FRAMES[activeStyle] || FRAMES.lavender

  return (
    <div
      className="device"
      style={{ '--frame-1': frame1, '--frame-2': frame2 }}
    >
      <div className="device-bezel">
        <div className="device-camera" />
        <div className="screen">
          <span className="screen-date">Tuesday, 12 Sep</span>

          <div className="card">
            <div className="card-title">Today</div>
            <div className="timetable-row">
              <span className="time-bar" />
              <span className="tt-time">9:00</span>
              <span className="tt-course">Organic Chemistry Lab</span>
            </div>
            <div className="timetable-row">
              <span className="time-bar time-bar-sky" />
              <span className="tt-time">11:00</span>
              <span className="tt-course">Microeconomics</span>
            </div>
            <div className="timetable-row">
              <span className="time-bar time-bar-blush" />
              <span className="tt-time">2:00</span>
              <span className="tt-course">Studio Critique</span>
            </div>
          </div>

          <div className="card assignment-card">
            <div className="card-title">Due tomorrow</div>
            <div className="assignment-title">
              Econometrics — Problem Set 4
            </div>
            <span className="due-badge">18h left</span>
          </div>

          <div className="card timer-card">
            <div className="timer-ring">
              <div className="timer-ring-inner">24:12</div>
            </div>
            <div>
              <div className="timer-label">Deep work</div>
              <div className="timer-sub">Session 2 of 3</div>
            </div>
          </div>

          <div className="quote-strip">
            &ldquo;Consistency beats intensity.&rdquo;
          </div>
        </div>
      </div>
      <div className="device-stand" />
    </div>
  )
}

export default DisplayMockup
