import React, { useState } from 'react';

export default function InputPanel({ onSubmit, loading }) {
	const [idea, setIdea] = useState('');

	return (
		<div className="input-panel">
			<span className="input-panel__label">Thales — Product Validator</span>
			<h1 className="input-panel__heading">
				Stop building things nobody wants.
			</h1>
			<p className="input-panel__sub">
				Describe your product idea in one or two sentences. Thales returns a full
				validation report: ICP, competitors, SWOT, risks, MVP features, pricing,
				landing page copy, and a Lean Canvas — in under 30 seconds.
			</p>
			<label className="input-panel__label" htmlFor="idea-input">Your idea</label>
			<textarea
				id="idea-input"
				className="input-panel__field"
				placeholder='e.g. "I have an idea for an app called BreadConnect that connects home bakers with local buyers."'
				value={idea}
				onChange={(e) => setIdea(e.target.value)}
				rows={4}
			/>
			<button
				className="input-panel__btn"
				onClick={() => onSubmit(idea)}
				disabled={!idea.trim() || loading}
			>
				{loading ? 'Analyzing...' : 'Run Validation →'}
			</button>
		</div>
	);
}
