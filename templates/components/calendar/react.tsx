/* Cake Design System — Calendar */
import React from 'react';

type CalendarProps = { value?: string; mode?: 'date' | 'month' | 'year'; onChange?: (date: string) => void };

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const Calendar: React.FC<CalendarProps> = ({ value, onChange }) => {
  const cell: React.CSSProperties = {
    width: 36, height: 36, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    borderRadius: 'var(--fdn-radius-radius-4)', cursor: 'pointer', transition: 'background 0.15s',
  };
  const selected: React.CSSProperties = { ...cell, background: 'var(--sem-color-bg-brand)', color: 'var(--sem-color-text-inverse)' };
  const today: React.CSSProperties = { ...cell, border: '1px solid var(--sem-color-interactive-primary)' };
  const muted: React.CSSProperties = { ...cell, color: 'var(--sem-color-text-secondary)' };
  const header: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--fdn-spacing-space-8)' };

  return (
    <div style={{ padding: 'var(--fdn-spacing-space-16)' }}>
      <div style={header}><button>&lt;</button><strong>April 2026</strong><button>&gt;</button></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, textAlign: 'center' }}>
        {days.map(d => <div key={d} style={{ fontWeight: 600, padding: 'var(--fdn-spacing-space-4)' }}>{d}</div>)}
        {[...Array(30)].map((_, i) => {
          const day = i + 1;
          const isSelected = value === `2026-04-${String(day).padStart(2, '0')}`;
          const isToday = day === 23;
          return (
            <div key={day}
              style={isSelected ? selected : isToday ? today : cell}
              onMouseEnter={e => { if (!isSelected) (e.currentTarget.style.background = 'var(--fdn-color-palette-f1f5f9)'); }}
              onMouseLeave={e => { if (!isSelected) (e.currentTarget.style.background = ''); }}
              onClick={() => onChange?.(`2026-04-${String(day).padStart(2, '0')}`)}
            >{day}</div>
          );
        })}
      </div>
    </div>
  );
};
