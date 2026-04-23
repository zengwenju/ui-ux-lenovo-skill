/* Cake Design System — Dropdown */
import React, { useState, useRef } from 'react';

type Option = { label: string; value: string };
type DropdownProps = { value?: string; options: Option[]; multiple?: boolean; searchable?: boolean; clearable?: boolean; status?: 'default' | 'error'; placeholder?: string; onChange?: (value: string) => void };

export const Dropdown: React.FC<DropdownProps> = ({ value, options, status, placeholder = 'Select...', onChange }) => {
  const [open, setOpen] = useState(false);
  const trigger: React.CSSProperties = {
    padding: 'var(--fdn-spacing-space-8) var(--fdn-spacing-space-12)', borderRadius: 'var(--fdn-radius-radius-4)',
    border: `1px solid ${status === 'error' ? 'var(--sem-color-border-error)' : open ? 'var(--sem-color-interactive-primary)' : 'var(--sem-color-border)'}`,
    cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  };
  const panel: React.CSSProperties = {
    position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 4,
    boxShadow: 'var(--fdn-shadow-shadow-1)', borderRadius: 'var(--fdn-radius-radius-4)',
    background: 'var(--sem-color-bg-surface)', zIndex: 10, overflow: 'hidden',
  };
  const opt = (selected: boolean): React.CSSProperties => ({
    padding: 'var(--fdn-spacing-space-8) var(--fdn-spacing-space-12)', cursor: 'pointer',
    background: selected ? 'var(--fdn-color-palette-e0f2fe)' : 'transparent',
  });
  const current = options.find(o => o.value === value);

  return (
    <div style={{ position: 'relative', width: 240 }}>
      <div style={trigger} onClick={() => setOpen(!open)}>
        <span>{current?.label ?? placeholder}</span><span>&#9662;</span>
      </div>
      {open && (
        <div style={panel}>
          {options.map(o => (
            <div key={o.value} style={opt(o.value === value)}
              onMouseEnter={e => { if (o.value !== value) e.currentTarget.style.background = 'var(--fdn-color-palette-f1f5f9)'; }}
              onMouseLeave={e => { if (o.value !== value) e.currentTarget.style.background = ''; }}
              onClick={() => { onChange?.(o.value); setOpen(false); }}>
              {o.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
