/* Cake Design System — Pagination */
import React from 'react';

type PaginationProps = { current?: number; pageSize?: number; total?: number; showQuickJumper?: boolean; onChange?: (page: number) => void };

export const Pagination: React.FC<PaginationProps> = ({ current = 1, pageSize = 10, total = 100, onChange }) => {
  const pages = Math.ceil(total / pageSize);
  const item = (active: boolean, disabled?: boolean): React.CSSProperties => ({
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 32, height: 32, borderRadius: 'var(--fdn-radius-radius-4)', cursor: disabled ? 'not-allowed' : 'pointer',
    border: `1px solid ${active ? 'var(--sem-color-interactive-primary)' : disabled ? 'var(--sem-color-border-disabled)' : 'var(--sem-color-border)'}`,
    color: active ? 'var(--sem-color-interactive-primary)' : disabled ? 'var(--sem-color-text-disabled)' : 'var(--fdn-color-palette-0f172a)',
    background: 'transparent',
  });

  const pageNumbers = Array.from({ length: Math.min(pages, 7) }, (_, i) => i + 1);

  return (
    <div style={{ display: 'flex', gap: 'var(--fdn-spacing-space-4)', alignItems: 'center' }}>
      <button style={item(false, current <= 1)} onClick={() => current > 1 && onChange?.(current - 1)}>&lt;</button>
      {pageNumbers.map(p => (
        <button key={p} style={item(p === current)} onClick={() => onChange?.(p)}>{p}</button>
      ))}
      <button style={item(false, current >= pages)} onClick={() => current < pages && onChange?.(current + 1)}>&gt;</button>
    </div>
  );
};
