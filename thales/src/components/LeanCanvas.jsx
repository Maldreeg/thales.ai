import React from 'react';

const CELLS = [
	{ key: 'problem',          label: 'Problem' },
	{ key: 'solution',         label: 'Solution' },
	{ key: 'uniqueValueProp',  label: 'Unique Value Prop' },
	{ key: 'unfairAdvantage',  label: 'Unfair Advantage' },
	{ key: 'customerSegments', label: 'Customer Segments' },
	{ key: 'keyMetrics',       label: 'Key Metrics' },
	{ key: 'channels',         label: 'Channels' },
	{ key: 'costStructure',    label: 'Cost Structure' },
	{ key: 'revenueStreams',   label: 'Revenue Streams' },
];

export default function LeanCanvas({ data }) {
	return (
		<div className="lean-canvas" id="lean-canvas">
			<div
				className="section-block__header"
				style={{ borderBottom: '1px solid var(--gray-rule)' }}
			>
				<span className="section-block__label">Lean Canvas</span>
			</div>
			<div className="lean-canvas__grid">
				{CELLS.map((cell) => (
					<div className="lean-canvas__cell" key={cell.key}>
						<div className="lean-canvas__cell-label">{cell.label}</div>
						<div className="lean-canvas__cell-body">{data[cell.key]}</div>
					</div>
				))}
			</div>
		</div>
	);
}
