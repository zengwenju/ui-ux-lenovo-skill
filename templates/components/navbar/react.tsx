/* Cake Design System — Navbar */
import React from 'react';

type MenuItem = { key: string; label: string; href?: string; active?: boolean };
type NavbarProps = { brand?: React.ReactNode; menus?: MenuItem[]; collapsed?: boolean };

export const Navbar: React.FC<NavbarProps> = ({ brand, menus = [], collapsed }) => {
  const nav: React.CSSProperties = {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    background: 'var(--sem-color-bg-surface)', borderBottom: '1px solid var(--fdn-color-palette-e2e8f0)',
    padding: 'var(--fdn-spacing-space-8) var(--fdn-spacing-space-24)', height: 56,
  };
  const menu: React.CSSProperties = { display: collapsed ? 'none' : 'flex', gap: 'var(--fdn-spacing-space-16)', listStyle: 'none', margin: 0, padding: 0 };
  const itemBase: React.CSSProperties = { color: 'var(--fdn-color-palette-0f172a)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.15s' };
  const itemActive: React.CSSProperties = { ...itemBase, color: 'var(--sem-color-interactive-primary)' };

  return (
    <nav style={nav}>
      <div style={{ fontWeight: 700 }}>{brand}</div>
      <ul style={menu}>
        {menus.map(m => (
          <li key={m.key}>
            <a href={m.href ?? '#'} style={m.active ? itemActive : itemBase}
              onMouseEnter={e => { if (!m.active) e.currentTarget.style.color = 'var(--sem-color-interactive-primary-hover)'; }}
              onMouseLeave={e => { if (!m.active) e.currentTarget.style.color = 'var(--fdn-color-palette-0f172a)'; }}>
              {m.label}
            </a>
          </li>
        ))}
      </ul>
      {collapsed && <button style={{ background: 'none', border: 'none', fontSize: 20, cursor: 'pointer' }}>☰</button>}
    </nav>
  );
};
