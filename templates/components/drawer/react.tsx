/* Cake Design System — Drawer */
import React, { useEffect } from 'react';

type DrawerProps = { open?: boolean; placement?: 'left' | 'right'; width?: string; closable?: boolean; title?: string; onClose?: () => void; children?: React.ReactNode };

export const Drawer: React.FC<DrawerProps> = ({ open, placement = 'right', width = '320px', closable = true, title, onClose, children }) => {
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  if (!open) return null;

  const scrim: React.CSSProperties = { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1000 };
  const panel: React.CSSProperties = {
    position: 'fixed', top: 0, [placement]: 0, width, height: '100%', zIndex: 1001,
    background: 'var(--sem-color-bg-surface)', boxShadow: 'var(--fdn-shadow-shadow-5)',
    padding: 'var(--fdn-spacing-space-24)', display: 'flex', flexDirection: 'column',
  };
  const header: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--fdn-spacing-space-16)' };

  return (
    <>
      <div style={scrim} onClick={onClose} />
      <div style={panel}>
        <div style={header}>
          {title && <strong>{title}</strong>}
          {closable && <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18 }} onClick={onClose}>&times;</button>}
        </div>
        <div style={{ flex: 1, overflow: 'auto' }}>{children}</div>
      </div>
    </>
  );
};
