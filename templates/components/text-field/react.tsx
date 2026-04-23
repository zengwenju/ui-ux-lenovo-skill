/* Cake Design System — Text Field */
import React from 'react';

type TextFieldProps = {
  value?: string; type?: string; placeholder?: string; label?: string;
  error?: string; disabled?: boolean; size?: 'sm' | 'md' | 'lg';
  onChange?: (value: string) => void;
};

const sizes: Record<string, React.CSSProperties> = {
  sm: { padding: 'var(--fdn-spacing-space-4) var(--fdn-spacing-space-8)' },
  md: { padding: 'var(--fdn-spacing-space-8) var(--fdn-spacing-space-12)' },
  lg: { padding: 'var(--fdn-spacing-space-12) var(--fdn-spacing-space-16)' },
};

export const TextField: React.FC<TextFieldProps> = ({ value, type = 'text', placeholder, label, error, disabled, size = 'md', onChange }) => {
  const borderColor = error ? 'var(--sem-color-border-error)' : 'var(--sem-color-border)';
  const input: React.CSSProperties = {
    width: '100%', boxSizing: 'border-box', borderRadius: 'var(--fdn-radius-radius-4)',
    border: `1px solid ${disabled ? 'var(--sem-color-border-disabled)' : borderColor}`,
    background: disabled ? 'var(--sem-color-bg-disabled)' : 'var(--sem-color-bg-primary)',
    color: disabled ? 'var(--sem-color-text-disabled)' : 'inherit',
    outline: 'none', ...sizes[size],
  };

  return (
    <div style={{ width: 280 }}>
      {label && <label style={{ display: 'block', marginBottom: 'var(--fdn-spacing-space-4)' }}>{label}</label>}
      <input style={input} type={type} placeholder={placeholder} value={value} disabled={disabled}
        onFocus={e => { if (!error && !disabled) e.currentTarget.style.borderColor = 'var(--sem-color-border-focus)'; }}
        onBlur={e => { if (!error && !disabled) e.currentTarget.style.borderColor = 'var(--sem-color-border)'; }}
        onChange={e => onChange?.(e.target.value)} />
      {error && <span style={{ color: 'var(--sem-color-state-error)', fontSize: 12, marginTop: 'var(--fdn-spacing-space-4)', display: 'block' }}>{error}</span>}
    </div>
  );
};
