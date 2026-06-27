import React from 'react';
import ScoreBadge from './ScoreBadge';
import Dashboard from './Dashboard';
import SectionBlock from './SectionBlock';
import LeanCanvas from './LeanCanvas';

const NAV_ITEMS = [
	{ id: 'dashboard',    label: 'Dashboard' },
	{ id: 'icp',          label: 'ICP' },
	{ id: 'competitors',  label: 'Competitors' },
	{ id: 'swot',         label: 'SWOT' },
	{ id: 'risks',        label: 'Risks' },
	{ id: 'mvp',          label: 'MVP Features' },
	{ id: 'pricing',      label: 'Pricing' },
	{ id: 'landing-page', label: 'Landing Page' },
	{ id: 'lean-canvas',  label: 'Lean Canvas' },
];

export default function ReportView({ report, onReset }) {
	const scrollTo = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className="report-view">
			{/* Left nav */}
			<nav className="report-nav">
				<button
					onClick={onReset}
					style={{
						background: 'none',
						border: 'none',
						fontFamily: 'var(--font-mono)',
						fontSize: 'var(--scale-xs)',
						color: 'var(--gray-mid)',
						textTransform: 'uppercase',
						letterSpacing: '0.06em',
						cursor: 'pointer',
						padding: '0 0 var(--space-md) 0',
						textAlign: 'left',
					}}
				>
					← New Idea
				</button>
				{NAV_ITEMS.map((item) => (
					<button
						key={item.id}
						className="report-nav__item"
						onClick={() => scrollTo(item.id)}
						style={{
							background: 'none',
							border: 'none',
							cursor: 'pointer',
							textAlign: 'left',
						}}
					>
						{item.label}
					</button>
				))}
			</nav>

			{/* Main content */}
			<main className="report-main">
				<ScoreBadge
					productName={report.productName}
					oneLiner={report.oneLiner}
					score={report.validationScore}
					verdict={report.verdict}
				/>
				<Dashboard report={report} />
				<SectionBlock id="icp"          label="Ideal Customer Profile"  content={report.icp} />
				<SectionBlock id="competitors"  label="Competitor Landscape"    content={report.competitors} />
				<SectionBlock id="swot"         label="SWOT Analysis"           content={report.swot} />
				<SectionBlock id="risks"        label="Risk Register"           content={report.risks} />
				<SectionBlock id="mvp"          label="MVP Features"            content={report.mvpFeatures} />
				<SectionBlock id="pricing"      label="Pricing Strategy"        content={report.pricing} />
				<SectionBlock id="landing-page" label="Landing Page Copy"       content={report.landingPage} />
				<LeanCanvas data={report.leanCanvas} />
			</main>
		</div>
	);
}
