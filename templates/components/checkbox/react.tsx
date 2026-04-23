/* Cake Design System — Checkbox */
import React from 'react';

type CheckboxProps = {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({ checked, indeterminate, disabled, label, onChange }) => {
  const boxStyle: React.CSSProperties = {
    width: 18, height: 18, borderRadius: 'var(--fdn-radius-radius-4)',
    border: `2px solid ${disabled ? 'var(--sem-color-border-disabled)' : checked || indeterminate ? 'var(--sem-color-interactive-primary)' : 'var(--sem-color-border)'}`,
    background: disabled ? 'var(--sem-color-bg-disabled)' : checked || indeterminate ? 'var(--sem-color-interactive-primary)' : 'var(--sem-color-bg-primary)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer', flexShrink: 0,
  };
  const labelStyle: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: 'var(--fdn-spacing-space-8)',
    color: disabled ? 'var(--sem-color-text-disabled)' : 'inherit', cursor: disabled ? 'not-allowed' : 'pointer',
  };
  const icon = checked
    ? <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="var(--sem-color-text-inverse)" strokeWidth="2" fill="none"/></svg>
    : indeterminate
    ? <svg width="12" height="12" viewBox="0 0 12 12"><line x1="2" y1="6" x2="10" y2="6" stroke="var(--sem-color-text-inverse)" strokeWidth="2"/></svg>
    : null;

  return (
    <label style={labelStyle} onClick={() => !disabled && onChange?.(!checked)}>
      <span style={boxStyle}>{icon}</span>
      {label && <span>{label}</span>}
    </label>
  );
};
