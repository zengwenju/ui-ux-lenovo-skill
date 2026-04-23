/* Cake Design System — Footer */
import React from 'react';

type FooterSection = { title: string; links: { label: string; href: string }[] };
type FooterProps = { theme?: 'light' | 'dark'; sections?: FooterSection[]; socials?: { icon: string; href: string }[]; bottomLinks?: { label: string; href: string }[] };

export const Footer: React.FC<FooterProps> = ({ theme = 'light', sections = [], bottomLinks = [] }) => {
  const isDark = theme === 'dark';
  const wrap: React.CSSProperties = {
    background: isDark ? 'var(--fdn-color-palette-0f172a)' : 'var(--sem-color-bg-primary)',
    color: isDark ? 'var(--sem-color-text-inverse)' : 'inherit',
    padding: 'var(--fdn-spacing-space-80) var(--fdn-spacing-space-24) var(--fdn-spacing-space-24)',
  };
  const grid: React.CSSProperties = { display: 'grid', gridTemplateColumns: `repeat(${Math.min(sections.length, 4)}, 1fr)`, gap: 'var(--fdn-spacing-space-24)' };
  const link: React.CSSProperties = { color: 'var(--sem-color-text-link)', textDecoration: 'none', display: 'block', marginBottom: 'var(--fdn-spacing-space-4)' };
  const muted: React.CSSProperties = { color: 'var(--sem-color-text-secondary)', marginTop: 'var(--fdn-spacing-space-24)', fontSize: 13 };

  return (
    <footer style={wrap}>
      <div style={grid}>
        {sections.map((s, i) => (
          <div key={i}>
            <strong>{s.title}</strong>
            <div style={{ marginTop: 'var(--fdn-spacing-space-8)' }}>
              {s.links.map((l, j) => (
                <a key={j} href={l.href} style={link}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--sem-color-text-link-hover)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--sem-color-text-link)')}>{l.label}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={muted}>
        {bottomLinks.map((l, i) => <a key={i} href={l.href} style={{ ...link, display: 'inline', marginRight: 'var(--fdn-spacing-space-16)' }}>{l.label}</a>)}
      </div>
    </footer>
  );
};
