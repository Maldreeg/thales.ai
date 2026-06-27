import React from 'react';

export default function ScoreBadge({ productName, oneLiner, score, verdict }) {
	return (
		<div className="score-badge">
			<span className="score-badge__idea">Validating</span>
			<div className="score-badge__name">{productName}</div>
			<p style={{ fontSize: 'var(--scale-sm)', color: 'var(--gray-mid)' }}>
				{oneLiner}
			</p>
			<div className="score-badge__row">
				<span className="score-badge__number">{score}</span>
				<span className="score-badge__label">/ 100 Validation Score</span>
			</div>
			<div className="score-badge__bar">
				<div className="score-badge__fill" style={{ width: `${score}%` }} />
			</div>
			<p className="score-badge__verdict">{verdict}</p>
		</div>
	);
}
