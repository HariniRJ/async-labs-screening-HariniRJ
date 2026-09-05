const STYLES = [
  { key: 'lavender', label: 'Lavender', swatch: '#B7A2E3' },
  { key: 'sky', label: 'Sky', swatch: '#93BEE0' },
  { key: 'blush', label: 'Blush', swatch: '#E896B4' },
  { key: 'sage', label: 'Sage', swatch: '#9EBE93' },
  { key: 'charcoal', label: 'Charcoal', swatch: '#3A3646' },
]

function StyleSelector({ activeStyle, onSelect }) {
  return (
    <div className="personalize">
      <span className="personalize-label" id="style-label">
        Choose your style
      </span>
      <div
        className="swatches"
        role="group"
        aria-labelledby="style-label"
      >
        {STYLES.map((s) => (
          <button
            key={s.key}
            type="button"
            className="swatch"
            style={{ background: s.swatch }}
            aria-pressed={activeStyle === s.key}
            aria-label={`${s.label} frame`}
            title={s.label}
            onClick={() => onSelect(s.key)}
          />
        ))}
      </div>
    </div>
  )
}

export default StyleSelector
