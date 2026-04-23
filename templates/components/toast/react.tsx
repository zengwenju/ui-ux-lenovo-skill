/* Cake Design System — Toast */
import React from 'react';

type ToastProps = { type?: 'info' | 'success' | 'error' | 'warning'; title?: string; description?: string; closable?: boolean; onClose?: () => void };

const bgMap: Record<string, string> = {
  info: 'var(--sem-color-state-info)',
  success: 'var(--sem-color-state-success)',
  error: 'var(--sem-color-state-error-light)',
  warning: 'var(--sem-color-state-warning)',
};

export const Toast: React.FC<ToastProps> = ({ type = 'info', title, description, closable = true, onClose }) => {
  const style: React.CSSProperties = {
    background: bgMap[type], borderRadius: 'var(--fdn-radius-radius-8)',
    padding: 'var(--fdn-spacing-space-16)', boxShadow: 'var(--fdn-shadow-shadow-1)',
    display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
    minWidth: 280, maxWidth: 400,
  };

  return (
    <div style={style}>
      <div>
        {title && <strong style={{ display: 'block' }}>{title}</strong>}
        {description && <span style={{ fontSize: 13 }}>{description}</span>}
      </div>
      {closable && <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 16 }} onClick={onClose}>&times;</button>}
    </div>
  );
};
