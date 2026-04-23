/* Cake Design System — Toggle */
import React from 'react';

type ToggleProps = { checked?: boolean; disabled?: boolean; label?: string; onChange?: (checked: boolean) => void };

export const Toggle: React.FC<ToggleProps> = ({ checked, disabled, label, onChange }) => {
  const track: React.CSSProperties = {
    width: 40, height: 22, borderRadius: 'var(--fdn-radius-radius-128)', position: 'relative',
    background: disabled ? 'var(--sem-color-bg-disabled)' : checked ? 'var(--sem-color-interactive-primary)' : 'var(--sem-color-bg-secondary)',
    cursor: disabled ? 'not-allowed' : 'pointer', transition: 'background 0.2s', flexShrink: 0,
  };
  const thumb: React.CSSProperties = {
    width: 18, height: 18, borderRadius: 'var(--fdn-radius-radius-128)',
    background: 'var(--sem-color-bg-primary)', position: 'absolute', top: 2,
    left: checked ? 20 : 2, transition: 'left 0.2s',
    boxShadow: 'var(--fdn-shadow-shadow-3), var(--fdn-shadow-shadow-4)',
  };
  const wrap: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: 'var(--fdn-spacing-space-8)',
    color: disabled ? 'var(--sem-color-text-disabled)' : 'inherit',
  };

  return (
    <label style={wrap} onClick={() => !disabled && onChange?.(!checked)}>
      <span style={track}><span style={thumb} /></span>
      {label && <span>{label}</span>}
    </label>
  );
};
