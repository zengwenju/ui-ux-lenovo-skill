/* Cake Design System — Modal */
import React from 'react';

type ModalProps = { open?: boolean; title?: string; variant?: 'confirm' | 'danger'; closable?: boolean; onClose?: () => void; onConfirm?: () => void; children?: React.ReactNode };

export const Modal: React.FC<ModalProps> = ({ open, title, variant = 'confirm', closable = true, onClose, onConfirm, children }) => {
  if (!open) return null;
  const overlay: React.CSSProperties = { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 };
  const panel: React.CSSProperties = {
    background: 'var(--sem-color-bg-surface)', borderRadius: 'var(--fdn-radius-radius-8)',
    padding: 'var(--fdn-spacing-space-24)', boxShadow: 'var(--fdn-shadow-shadow-2)',
    minWidth: 360, maxWidth: '90vw',
  };
  const header: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--fdn-spacing-space-16)' };
  const footer: React.CSSProperties = { display: 'flex', justifyContent: 'flex-end', gap: 'var(--fdn-spacing-space-12)', marginTop: 'var(--fdn-spacing-space-16)' };
  const confirmBtn: React.CSSProperties = {
    padding: 'var(--fdn-spacing-space-8) var(--fdn-spacing-space-16)', borderRadius: 'var(--fdn-radius-radius-4)', border: 'none', cursor: 'pointer',
    background: variant === 'danger' ? 'var(--fdn-color-palette-b91c1c)' : 'var(--sem-color-bg-brand)', color: 'var(--sem-color-text-inverse)',
  };
  const cancelBtn: React.CSSProperties = { ...confirmBtn, background: 'transparent', border: '1px solid var(--sem-color-border)', color: 'inherit' };

  return (
    <div style={overlay} onClick={onClose}>
      <div style={panel} onClick={e => e.stopPropagation()}>
        <div style={header}>
          {title && <strong>{title}</strong>}
          {closable && <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18 }} onClick={onClose}>&times;</button>}
        </div>
        <div style={{ color: 'var(--sem-color-text-secondary)' }}>{children}</div>
        <div style={footer}>
          <button style={cancelBtn} onClick={onClose}>Cancel</button>
          <button style={confirmBtn} onClick={onConfirm}>{variant === 'danger' ? 'Delete' : 'Confirm'}</button>
        </div>
      </div>
    </div>
  );
};
