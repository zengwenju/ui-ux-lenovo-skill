/* Cake Design System — Stepper */
import React from 'react';

type StepItem = { title: string; description?: string };
type StepperProps = { current?: number; items: StepItem[]; direction?: 'horizontal' | 'vertical' };

export const Stepper: React.FC<StepperProps> = ({ current = 0, items, direction = 'horizontal' }) => {
  const isH = direction === 'horizontal';
  const wrap: React.CSSProperties = { display: 'flex', flexDirection: isH ? 'row' : 'column', alignItems: isH ? 'center' : 'flex-start', gap: 'var(--fdn-spacing-space-4)' };

  return (
    <div style={wrap}>
      {items.map((item, i) => {
        const done = i < current;
        const active = i === current;
        const circle: React.CSSProperties = {
          width: 28, height: 28, borderRadius: 'var(--fdn-radius-radius-128)', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13,
          background: done || active ? 'var(--sem-color-interactive-primary)' : 'var(--sem-color-bg-secondary)',
          color: done || active ? 'var(--sem-color-text-inverse)' : 'var(--sem-color-text-secondary)',
        };
        const line: React.CSSProperties = {
          flex: 1, height: isH ? 2 : 24, width: isH ? undefined : 2,
          background: done ? 'var(--sem-color-interactive-primary)' : 'var(--sem-color-border)',
          margin: isH ? '0 var(--fdn-spacing-space-8)' : '0 0 0 13px',
        };

        return (
          <React.Fragment key={i}>
            <div style={{ display: 'flex', flexDirection: isH ? 'column' : 'row', alignItems: 'center', gap: 'var(--fdn-spacing-space-4)' }}>
              <span style={circle}>{done ? '✓' : i + 1}</span>
              <span style={{ color: active ? 'inherit' : 'var(--sem-color-text-secondary)', fontSize: 13 }}>{item.title}</span>
            </div>
            {i < items.length - 1 && <div style={line} />}
          </React.Fragment>
        );
      })}
    </div>
  );
};
