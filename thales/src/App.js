import React, { useState } from 'react';
import InputPanel from './components/InputPanel';
import ReportView from './components/ReportView';
import { validateIdea } from './services/ai';
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/dashboard.css';

export default function App() {
  const [report, setReport]   = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  const handleSubmit = async (idea) => {
    setLoading(true);
    setError(null);
    try {
      const result = await validateIdea(idea);
      setReport(result);
    } catch (err) {
      const errorMsg = err.message || 'Analysis failed. Check your API key and try again.';
      setError(errorMsg);
      console.error('Validation error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <header className="header">
        <span className="header__wordmark">Thales</span>
        <span className="header__tag">AI Product Validator</span>
      </header>

      {loading && (
        <div className="loading">Running validation</div>
      )}

      {error && !loading && (
        <div style={{ padding: 'var(--space-xl)', color: 'var(--gray-mid)', fontFamily: 'var(--font-mono)', fontSize: 'var(--scale-sm)' }}>
          {error}
        </div>
      )}

      {!loading && !report && (
        <div className="input-view">
          <InputPanel onSubmit={handleSubmit} loading={loading} />
        </div>
      )}

      {!loading && report && (
        <ReportView report={report} onReset={() => setReport(null)} />
      )}
    </div>
  );
}
