/* Cake Design System — Radio */
import React from 'react';

type RadioProps = { checked?: boolean; disabled?: boolean; label?: string; value?: string; name?: string; onChange?: (value: string) => void };

export const Radio: React.FC<RadioProps> = ({ checked, disabled, label, value = '', name, onChange }) => {
  const outer: React.CSSProperties = {
    width: 18, height: 18, borderRadius: 'var(--fdn-radius-radius-128)', flexShrink: 0,
    border: `2px solid ${disabled ? 'var(--sem-color-border-disabled)' : checked ? 'var(--sem-color-interactive-primary)' : 'var(--sem-color-border)'}`,
    background: disabled ? 'var(--sem-color-bg-disabled)' : 'var(--sem-color-bg-primary)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
  };
  const inner: React.CSSProperties = {
    width: 8, height: 8, borderRadius: 'var(--fdn-radius-radius-128)',
    background: 'var(--sem-color-interactive-primary)',
  };
  const wrap: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: 'var(--fdn-spacing-space-8)',
    color: disabled ? 'var(--sem-color-text-disabled)' : 'inherit', cursor: disabled ? 'not-allowed' : 'pointer',
  };

  return (
    <label style={wrap} onClick={() => !disabled && onChange?.(value)}>
      <span style={outer}>{checked && <span style={inner} />}</span>
      {label && <span>{label}</span>}
      <input type="radio" name={name} value={value} checked={checked} disabled={disabled} style={{ display: 'none' }} readOnly />
    </label>
  );
};
