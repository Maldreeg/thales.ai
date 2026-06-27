import React from 'react';

/* ── Radar chart (pure SVG) ── */
function RadarChart({ scores }) {
  const keys = Object.keys(scores);
  const values = Object.values(scores);
  const N = keys.length;
  const size = 280;
  const cx = size / 2;
  const cy = size / 2;
  const R = 85;
  const levels = [0.25, 0.5, 0.75, 1];

  const angle = (i) => (Math.PI * 2 * i) / N - Math.PI / 2;
  const point = (i, r) => ({
    x: cx + r * Math.cos(angle(i)),
    y: cy + r * Math.sin(angle(i)),
  });

  const gridColor = '#E5E5E5';
  const axisColor = '#D0D0D0';

  // Web polygon
  const dataPoints = values.map((v, i) => point(i, (v / 10) * R));
  const polyStr = dataPoints.map((p) => `${p.x},${p.y}`).join(' ');

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} style={{ overflow: 'visible' }}>
      {/* Grid rings */}
      {levels.map((lvl) => {
        const ring = keys.map((_, i) => point(i, R * lvl));
        const d = ring.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ') + 'Z';
        return <path key={lvl} d={d} fill="none" stroke={gridColor} strokeWidth="1" />;
      })}
      {/* Axes */}
      {keys.map((_, i) => {
        const outer = point(i, R);
        return <line key={i} x1={cx} y1={cy} x2={outer.x} y2={outer.y} stroke={axisColor} strokeWidth="1" />;
      })}
      {/* Data polygon */}
      <polygon
        points={polyStr}
        fill="rgba(10,10,10,0.08)"
        stroke="#0A0A0A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Data dots */}
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={3} fill="#0A0A0A" />
      ))}
      {/* Labels */}
      {keys.map((k, i) => {
        const labelR = R + 28;
        const p = point(i, labelR);
        const label = k.replace('_', ' ').replace(/\b\w/g, (c) => c.toUpperCase());
        return (
          <text
            key={k}
            x={p.x}
            y={p.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="9"
            fontFamily="'DM Mono', monospace"
            fill="#6B6B6B"
            style={{ textTransform: 'uppercase', letterSpacing: '0.04em' }}
          >
            {label}
          </text>
        );
      })}
      {/* Score labels on axes */}
      {values.map((v, i) => {
        const p = point(i, (v / 10) * R);
        return (
          <text
            key={`v-${i}`}
            x={p.x}
            y={p.y - 7}
            textAnchor="middle"
            fontSize="8"
            fontFamily="'DM Mono', monospace"
            fill="#0A0A0A"
          >
            {v}
          </text>
        );
      })}
    </svg>
  );
}

/* ── Horizontal bar chart ── */
function BarChart({ items }) {
  return (
    <div className="bar-chart">
      {items.map((item) => (
        <div className="bar-row" key={item.name}>
          <div className="bar-row__header">
            <span className="bar-row__name">{item.name}</span>
            <span className="bar-row__value">{item.strength}</span>
          </div>
          <div className="bar-row__track">
            <div className="bar-row__fill" style={{ width: `${item.strength}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Effort badge ── */
const EFFORT_LABEL = { S: 'Small', M: 'Medium', L: 'Large' };

/* ── Main Dashboard ── */
export default function Dashboard({ report }) {
  const { scores, competitorStrength, mvpItems } = report;

  return (
    <div className="dashboard" id="dashboard">
      <div className="dashboard__header">
        <span className="section-block__label">Dashboard</span>
      </div>
      <div className="dashboard__grid">

        {/* Radar */}
        <div className="dashboard__cell">
          <div className="dashboard__cell-label">Score Breakdown</div>
          <div className="radar-wrap">
            <RadarChart scores={scores} />
          </div>
        </div>

        {/* Competitor bar chart */}
        <div className="dashboard__cell">
          <div className="dashboard__cell-label">Competitor Strength Index</div>
          <BarChart items={competitorStrength} />
        </div>

        {/* MVP effort table */}
        <div className="dashboard__cell dashboard__cell--full">
          <div className="dashboard__cell-label">MVP Feature Effort Matrix</div>
          <table className="effort-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Rationale</th>
                <th>Effort</th>
              </tr>
            </thead>
            <tbody>
              {mvpItems.map((item, i) => (
                <tr key={i}>
                  <td><strong>{item.feature}</strong></td>
                  <td style={{ color: 'var(--gray-mid)' }}>{item.rationale}</td>
                  <td>
                    <span className="effort-badge">{EFFORT_LABEL[item.effort] || item.effort}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
