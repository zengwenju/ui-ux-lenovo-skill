/* Cake Design System — Slider */
import React from 'react';

type SliderProps = { value?: number; min?: number; max?: number; step?: number; range?: boolean; onChange?: (value: number) => void };

export const Slider: React.FC<SliderProps> = ({ value = 50, min = 0, max = 100, step = 1, onChange }) => {
  const pct = ((value - min) / (max - min)) * 100;
  const track: React.CSSProperties = { position: 'relative', width: '100%', height: 6, borderRadius: 'var(--fdn-radius-radius-4)', background: 'var(--sem-color-bg-secondary)' };
  const range: React.CSSProperties = { position: 'absolute', left: 0, top: 0, height: '100%', width: `${pct}%`, borderRadius: 'var(--fdn-radius-radius-4)', background: 'var(--sem-color-interactive-primary)' };
  const thumb: React.CSSProperties = {
    position: 'absolute', top: '50%', left: `${pct}%`, transform: 'translate(-50%, -50%)',
    width: 18, height: 18, borderRadius: '50%', background: 'var(--sem-color-bg-primary)',
    border: '2px solid var(--sem-color-interactive-primary)', boxShadow: 'var(--fdn-shadow-shadow-3)', cursor: 'pointer',
  };

  return (
    <div style={{ padding: 'var(--fdn-spacing-space-8) 0' }}>
      <div style={track}>
        <div style={range} />
        <div style={thumb} />
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange?.(Number(e.target.value))}
        style={{ position: 'absolute', width: '100%', opacity: 0, cursor: 'pointer' }} />
    </div>
  );
};
