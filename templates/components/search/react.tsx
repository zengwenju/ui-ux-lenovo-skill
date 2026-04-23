/* Cake Design System — Search */
import React, { useState } from 'react';

type SearchProps = { value?: string; placeholder?: string; suggestions?: string[]; loading?: boolean; onChange?: (value: string) => void; onSelect?: (value: string) => void };

export const Search: React.FC<SearchProps> = ({ value = '', placeholder = 'Search...', suggestions = [], loading, onChange, onSelect }) => {
  const [focused, setFocused] = useState(false);
  const wrap: React.CSSProperties = { position: 'relative', width: 280 };
  const input: React.CSSProperties = {
    width: '100%', padding: 'var(--fdn-spacing-space-8) var(--fdn-spacing-space-12)',
    border: `1px solid ${focused ? 'var(--sem-color-border-focus)' : 'var(--sem-color-border)'}`,
    borderRadius: 'var(--fdn-radius-radius-4)', outline: 'none', boxSizing: 'border-box',
  };
  const panel: React.CSSProperties = {
    position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 4,
    background: 'var(--sem-color-bg-surface)', boxShadow: 'var(--fdn-shadow-shadow-1)',
    borderRadius: 'var(--fdn-radius-radius-4)', overflow: 'hidden', zIndex: 10,
  };
  const item: React.CSSProperties = { padding: 'var(--fdn-spacing-space-8) var(--fdn-spacing-space-12)', cursor: 'pointer' };

  return (
    <div style={wrap}>
      <input style={input} placeholder={placeholder} value={value}
        onFocus={() => setFocused(true)} onBlur={() => setTimeout(() => setFocused(false), 150)}
        onChange={e => onChange?.(e.target.value)} />
      {focused && suggestions.length > 0 && (
        <div style={panel}>
          {suggestions.map((s, i) => (
            <div key={i} style={item}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--fdn-color-palette-f1f5f9)')}
              onMouseLeave={e => (e.currentTarget.style.background = '')}
              onClick={() => onSelect?.(s)}>{s}</div>
          ))}
        </div>
      )}
    </div>
  );
};
