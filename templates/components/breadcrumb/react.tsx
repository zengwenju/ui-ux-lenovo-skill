/* Cake Design System — Breadcrumb */
import React from 'react';

type BreadcrumbItem = { label: string; href?: string };
type BreadcrumbProps = { items: BreadcrumbItem[]; separator?: string };

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator = '/' }) => {
  const wrap: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: 'var(--fdn-spacing-space-8)', flexWrap: 'wrap' };
  const link: React.CSSProperties = { color: 'var(--sem-color-text-link)', textDecoration: 'none', cursor: 'pointer' };
  const current: React.CSSProperties = { color: 'var(--sem-color-text-secondary)' };
  const sep: React.CSSProperties = { color: 'var(--sem-color-text-secondary)' };

  return (
    <nav style={wrap}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {isLast ? (
              <span style={current}>{item.label}</span>
            ) : (
              <>
                <a href={item.href ?? '#'} style={link}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--sem-color-text-link-hover)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--sem-color-text-link)')}>{item.label}</a>
                <span style={sep}>{separator}</span>
              </>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
