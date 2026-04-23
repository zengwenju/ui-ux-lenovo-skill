/* Cake Design System — Switch (Segmented) */
import React from 'react';

type SwitchProps = { value?: string; options: { label: string; value: string }[]; disabled?: boolean; onChange?: (value: string) => void };

export const Switch: React.FC<SwitchProps> = ({ value, options, disabled, onChange }) => {
  const track: React.CSSProperties = {
    display: 'inline-flex', borderRadius: 'var(--fdn-radius-radius-100)',
    background: 'var(--sem-color-bg-secondary)', padding: 2, gap: 2,
    opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? 'none' : 'auto',
  };
  const base: React.CSSProperties = {
    padding: 'var(--fdn-spacing-space-4) var(--fdn-spacing-space-12)',
    borderRadius: 'var(--fdn-radius-radius-100)', border: 'none', cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s',
  };
  const active: React.CSSProperties = { ...base, background: 'var(--sem-color-bg-brand)', color: 'var(--sem-color-text-inverse)' };
  const inactive: React.CSSProperties = { ...base, background: 'transparent', color: 'var(--fdn-color-palette-0f172a)' };

  return (
    <div style={track}>
      {options.map(o => (
        <button key={o.value} style={o.value === value ? active : inactive} onClick={() => onChange?.(o.value)}>
          {o.label}
        </button>
      ))}
    </div>
  );
};
