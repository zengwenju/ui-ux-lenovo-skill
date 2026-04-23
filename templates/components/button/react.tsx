/* Cake Design System — Button */
import React from 'react';

type ButtonProps = {
  variant?: 'filled' | 'outlined' | 'text';
  state?: 'default' | 'success' | 'error';
  size?: 'sm' | 'md';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const styles: Record<string, React.CSSProperties> = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--fdn-radius-radius-4)',
    border: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s, border-color 0.2s',
  },
  sm: { padding: 'var(--fdn-spacing-space-4) var(--fdn-spacing-space-12)', fontSize: 'var(--fdn-typo-style-13-font-size)', lineHeight: 'var(--fdn-typo-style-13-line-height)', fontWeight: 'var(--fdn-typo-style-13-font-weight)' },
  md: { padding: 'var(--fdn-spacing-space-8) var(--fdn-spacing-space-16)', fontSize: 'var(--fdn-typo-style-1-font-size)', lineHeight: 'var(--fdn-typo-style-1-line-height)', fontWeight: 'var(--fdn-typo-style-1-font-weight)' },
  filled: { background: 'var(--sem-color-bg-brand)', color: 'var(--sem-color-text-inverse)' },
  filledSuccess: { background: 'var(--fdn-color-palette-047857)' },
  filledError: { background: 'var(--fdn-color-palette-b91c1c)' },
  outlined: { background: 'transparent', border: '1px solid var(--sem-color-border)', color: 'var(--sem-color-interactive-primary)' },
  text: { background: 'transparent', color: 'var(--sem-color-interactive-primary)' },
  disabled: { background: 'var(--sem-color-bg-disabled)', color: 'var(--sem-color-text-disabled)', cursor: 'not-allowed' },
};

export const Button: React.FC<ButtonProps> = ({ variant = 'filled', state = 'default', size = 'md', disabled, children, onClick }) => {
  const stateMap = { success: styles.filledSuccess, error: styles.filledError, default: {} };
  const variantStyle = variant === 'filled' ? styles.filled : variant === 'outlined' ? styles.outlined : styles.text;
  const style = { ...styles.base, ...styles[size], ...variantStyle, ...(variant === 'filled' ? stateMap[state] : {}), ...(disabled ? styles.disabled : {}) };

  return <button style={style} disabled={disabled} onClick={onClick}>{children}</button>;
};
