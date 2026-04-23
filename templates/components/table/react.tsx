/* Cake Design System — Table */
import React, { useState } from 'react';

type Column = { key: string; title: string; render?: (row: any) => React.ReactNode };
type TableProps = { columns: Column[]; dataSource: Record<string, any>[]; selectable?: boolean };

export const Table: React.FC<TableProps> = ({ columns, dataSource, selectable }) => {
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const toggle = (i: number) => { const s = new Set(selected); s.has(i) ? s.delete(i) : s.add(i); setSelected(s); };

  const th: React.CSSProperties = { background: 'var(--sem-color-bg-secondary)', padding: 'var(--fdn-spacing-space-12) var(--fdn-spacing-space-16)', textAlign: 'left', borderBottom: '1px solid var(--fdn-color-palette-e2e8f0)' };
  const td: React.CSSProperties = { padding: 'var(--fdn-spacing-space-12) var(--fdn-spacing-space-16)', borderBottom: '1px solid var(--fdn-color-palette-e2e8f0)' };

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--sem-color-bg-primary)' }}>
      <thead>
        <tr>
          {selectable && <th style={th}><input type="checkbox" /></th>}
          {columns.map(c => <th key={c.key} style={th}>{c.title}</th>)}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((row, i) => (
          <tr key={i} style={{ background: selected.has(i) ? 'var(--fdn-color-palette-dbeafe)' : 'var(--sem-color-bg-primary)' }}
              onMouseEnter={e => { if (!selected.has(i)) (e.currentTarget.style.background = 'var(--fdn-color-palette-f1f5f9)'); }}
              onMouseLeave={e => { if (!selected.has(i)) (e.currentTarget.style.background = 'var(--sem-color-bg-primary)'); }}>
            {selectable && <td style={td}><input type="checkbox" checked={selected.has(i)} onChange={() => toggle(i)} /></td>}
            {columns.map(c => <td key={c.key} style={td}>{c.render ? c.render(row) : row[c.key]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
