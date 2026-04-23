/* Cake Design System — Tabs */
import React from 'react';

type TabItem = { key: string; label: string; disabled?: boolean };
type TabsProps = { value?: string; items: TabItem[]; direction?: 'horizontal' | 'vertical'; type?: 'line' | 'card'; onChange?: (key: string) => void };

export const Tabs: React.FC<TabsProps> = ({ value, items, direction = 'horizontal', type = 'line', onChange }) => {
  const isH = direction === 'horizontal';
  const wrap: React.CSSProperties = { display: 'flex', flexDirection: isH ? 'row' : 'column', borderBottom: isH && type === 'line' ? '1px solid var(--sem-color-border)' : undefined };

  const tab = (active: boolean, disabled?: boolean): React.CSSProperties => ({
    padding: 'var(--fdn-spacing-space-8) var(--fdn-spacing-space-16)',
    cursor: disabled ? 'not-allowed' : 'pointer', background: 'transparent', border: 'none',
    color: disabled ? 'var(--sem-color-text-disabled)' : active ? 'var(--sem-color-interactive-primary)' : 'var(--sem-color-text-secondary)',
    borderBottom: isH && type === 'line' && active ? '2px solid var(--sem-color-interactive-primary)' : '2px solid transparent',
    transition: 'color 0.15s, border-color 0.15s',
  });

  return (
    <div style={wrap}>
      {items.map(item => (
        <button key={item.key} style={tab(item.key === value, item.disabled)}
          onMouseEnter={e => { if (!item.disabled && item.key !== value) e.currentTarget.style.color = 'var(--sem-color-interactive-primary-hover)'; }}
          onMouseLeave={e => { if (!item.disabled && item.key !== value) e.currentTarget.style.color = 'var(--sem-color-text-secondary)'; }}
          onClick={() => !item.disabled && onChange?.(item.key)}>
          {item.label}
        </button>
      ))}
    </div>
  );
};
