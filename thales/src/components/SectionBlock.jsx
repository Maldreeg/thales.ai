import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function SectionBlock({ id, label, content }) {
	return (
		<div className="section-block" id={id}>
			<div className="section-block__header">
				<span className="section-block__label">{label}</span>
			</div>
			<div className="section-block__body">
				<ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
			</div>
		</div>
	);
}
