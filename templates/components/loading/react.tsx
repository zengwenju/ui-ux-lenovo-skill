/* Cake Design System — Loading */
import React from 'react';

type LoadingProps = { type?: 'progress' | 'spinner'; percent?: number };

export const Loading: React.FC<LoadingProps> = ({ type = 'spinner', percent = 0 }) => {
  if (type === 'progress') {
    const track: React.CSSProperties = {
      width: '100%', height: 6, borderRadius: 'var(--fdn-radius-radius-4)',
      background: 'var(--sem-color-bg-secondary)', overflow: 'hidden',
    };
    const bar: React.CSSProperties = {
      height: '100%', width: `${Math.min(100, Math.max(0, percent))}%`,
      background: 'var(--sem-color-interactive-primary)', borderRadius: 'var(--fdn-radius-radius-4)',
      transition: 'width 0.3s',
    };
    return <div style={track}><div style={bar} /></div>;
  }

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" style={{ animation: 'cake-spin 1s linear infinite' }}>
      <circle cx="12" cy="12" r="10" fill="none" stroke="var(--sem-color-bg-secondary)" strokeWidth="3" />
      <circle cx="12" cy="12" r="10" fill="none" stroke="var(--sem-color-interactive-primary)" strokeWidth="3" strokeDasharray="31.4 31.4" strokeLinecap="round" />
      <style>{`@keyframes cake-spin { to { transform: rotate(360deg); } }`}</style>
    </svg>
  );
};
