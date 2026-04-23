/* Cake Design System — Card */
import React from 'react';

type CardProps = {
  variant?: 'vertical' | 'horizontal' | 'compact';
  hoverable?: boolean;
  title?: string;
  meta?: string;
  cover?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ variant = 'vertical', hoverable, title, meta, cover, actions, children }) => {
  const card: React.CSSProperties = {
    background: 'var(--sem-color-bg-surface)', border: '1px solid var(--sem-color-border)',
    borderRadius: 'var(--fdn-radius-radius-8)', padding: 'var(--fdn-spacing-space-16)',
    boxShadow: 'var(--fdn-shadow-shadow-1)', transition: 'box-shadow 0.2s',
    display: variant === 'horizontal' ? 'flex' : 'block', gap: variant === 'horizontal' ? 'var(--fdn-spacing-space-16)' : undefined,
    cursor: hoverable ? 'pointer' : 'default', overflow: 'hidden',
  };
  const titleStyle: React.CSSProperties = { fontSize: 'var(--fdn-typo-style-16-font-size)', fontWeight: 'var(--fdn-typo-style-16-font-weight)', lineHeight: 'var(--fdn-typo-style-16-line-height)' };
  const metaStyle: React.CSSProperties = { color: 'var(--sem-color-text-secondary)', marginTop: 'var(--fdn-spacing-space-4)' };

  return (
    <div style={card}>
      {cover && <img src={cover} alt="" style={{ width: '100%', borderRadius: 'var(--fdn-radius-radius-4)', marginBottom: 'var(--fdn-spacing-space-12)' }} />}
      {title && <div style={titleStyle}>{title}</div>}
      {meta && <div style={metaStyle}>{meta}</div>}
      {children && <div style={{ marginTop: 'var(--fdn-spacing-space-12)' }}>{children}</div>}
      {actions && <div style={{ marginTop: 'var(--fdn-spacing-space-12)', display: 'flex', gap: 'var(--fdn-spacing-space-8)' }}>{actions}</div>}
    </div>
  );
};
