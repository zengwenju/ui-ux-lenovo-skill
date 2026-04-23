/* Cake Design System — Badge */
import React from 'react';

type BadgeProps = { count?: number; dot?: boolean; status?: 'info' | 'error' | 'success' | 'warning'; children?: React.ReactNode };

const bgMap: Record<string, string> = {
  info: 'var(--sem-color-interactive-primary)',
  error: 'var(--sem-color-state-error)',
  success: 'var(--fdn-color-palette-047857)',
  warning: 'var(--sem-color-state-warning)',
};

export const Badge: React.FC<BadgeProps> = ({ count, dot, status = 'info', children }) => {
  const badge: React.CSSProperties = {
    position: 'absolute', top: -4, right: -4,
    background: bgMap[status], color: 'var(--sem-color-text-inverse)',
    borderRadius: 'var(--fdn-radius-radius-100)', fontSize: 11, lineHeight: 1,
    minWidth: dot ? 8 : 18, height: dot ? 8 : 18,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    padding: dot ? 0 : '0 5px',
  };

  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}>
      {children}
      {(count !== undefined || dot) && <span style={badge}>{dot ? null : count}</span>}
    </span>
  );
};
