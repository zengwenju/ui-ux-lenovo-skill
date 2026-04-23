/* Cake Design System — Qty Selector */
import React from 'react';

type QtySelectorProps = { value?: number; min?: number; max?: number; step?: number; disabled?: boolean; onChange?: (value: number) => void };

export const QtySelector: React.FC<QtySelectorProps> = ({ value = 1, min = 0, max = 99, step = 1, disabled, onChange }) => {
  const wrap: React.CSSProperties = { display: 'inline-flex', alignItems: 'center', border: '1px solid var(--sem-color-border)', borderRadius: 'var(--fdn-radius-radius-4)', overflow: 'hidden' };
  const btn: React.CSSProperties = { width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', background: 'transparent' };
  const disBtn: React.CSSProperties = { ...btn, background: 'var(--sem-color-bg-disabled)', cursor: 'not-allowed' };
  const input: React.CSSProperties = { width: 48, textAlign: 'center', border: 'none', outline: 'none', borderLeft: '1px solid var(--sem-color-border)', borderRight: '1px solid var(--sem-color-border)' };

  const atMin = value <= min;
  const atMax = value >= max;

  return (
    <div style={{ ...wrap, opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? 'none' : 'auto' }}>
      <button style={atMin ? disBtn : btn} onClick={() => onChange?.(Math.max(min, value - step))}>−</button>
      <input style={input} type="text" value={value} readOnly />
      <button style={atMax ? disBtn : btn} onClick={() => onChange?.(Math.min(max, value + step))}>+</button>
    </div>
  );
};
