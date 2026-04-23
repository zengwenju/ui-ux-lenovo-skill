/* Cake Design System — Accordion */
import React, { useState } from 'react';

type AccordionItem = { key: string; title: string; content: string };
type AccordionProps = { items: AccordionItem[]; activeKeys?: string[]; multiple?: boolean };

export const Accordion: React.FC<AccordionProps> = ({ items, activeKeys: initial = [], multiple }) => {
  const [active, setActive] = useState<Set<string>>(new Set(initial));
  const toggle = (key: string) => {
    const s = new Set(multiple ? active : []);
    s.has(key) ? s.delete(key) : s.add(key);
    setActive(s);
  };
  const header: React.CSSProperties = {
    padding: 'var(--fdn-spacing-space-16)', cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
    alignItems: 'center', borderBottom: '1px solid var(--fdn-color-palette-e2e8f0)', transition: 'background 0.15s',
  };
  const body: React.CSSProperties = { padding: 'var(--fdn-spacing-space-16)', color: 'var(--sem-color-text-secondary)', borderBottom: '1px solid var(--fdn-color-palette-e2e8f0)' };

  return (
    <div>
      {items.map(item => (
        <div key={item.key}>
          <div style={header}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--fdn-color-palette-f1f5f9)')}
            onMouseLeave={e => (e.currentTarget.style.background = '')}
            onClick={() => toggle(item.key)}>
            <span>{item.title}</span>
            <span>{active.has(item.key) ? '−' : '+'}</span>
          </div>
          {active.has(item.key) && <div style={body}>{item.content}</div>}
        </div>
      ))}
    </div>
  );
};
