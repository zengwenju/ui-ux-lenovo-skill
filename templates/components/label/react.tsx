/* Cake Design System — Label (Tag) */
import React from 'react';

type LabelProps = { variant?: 'solid' | 'soft' | 'outline'; color?: string; closable?: boolean; onClose?: () => void; children: React.ReactNode };

const variantStyles: Record<string, React.CSSProperties> = {
  solid: { background: 'var(--fdn-color-palette-1e3a8a)', color: 'var(--sem-color-text-inverse)' },
  soft: { background: 'var(--fdn-color-palette-e0f2fe)', color: 'var(--fdn-color-palette-1e3a8a)' },
  outline: { background: 'transparent', border: '1px solid var(--fdn-color-palette-1e3a8a)', color: 'var(--fdn-color-palette-1e3a8a)' },
};

export const Label: React.FC<LabelProps> = ({ variant = 'solid', closable, onClose, children }) => {
  const style: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: 'var(--fdn-spacing-space-4)',
    padding: 'var(--fdn-spacing-space-4) var(--fdn-spacing-space-8)',
    borderRadius: 'var(--fdn-radius-radius-4)', fontSize: 12, lineHeight: 1,
    ...variantStyles[variant],
  };

  return (
    <span style={style}>
      {children}
      {closable && <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit', fontSize: 14 }} onClick={onClose}>&times;</button>}
    </span>
  );
};
