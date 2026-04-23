/* Cake Design System — Tooltip */
import React, { useState } from 'react';

type TooltipProps = { content: string; placement?: 'top' | 'bottom' | 'left' | 'right'; trigger?: 'hover' | 'click'; children: React.ReactNode };

export const Tooltip: React.FC<TooltipProps> = ({ content, placement = 'top', trigger = 'hover', children }) => {
  const [visible, setVisible] = useState(false);
  const tip: React.CSSProperties = {
    position: 'absolute', background: 'var(--fdn-color-palette-0f172a)', color: 'var(--sem-color-text-inverse)',
    borderRadius: 'var(--fdn-radius-radius-4)', padding: 'var(--fdn-spacing-space-8) var(--fdn-spacing-space-12)',
    boxShadow: 'var(--fdn-shadow-shadow-1)', fontSize: 13, whiteSpace: 'nowrap', zIndex: 100,
    ...(placement === 'top' ? { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 6 } :
      placement === 'bottom' ? { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 6 } :
      placement === 'left' ? { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: 6 } :
      { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: 6 }),
  };
  const handlers = trigger === 'hover'
    ? { onMouseEnter: () => setVisible(true), onMouseLeave: () => setVisible(false) }
    : { onClick: () => setVisible(!visible) };

  return (
    <span style={{ position: 'relative', display: 'inline-flex' }} {...handlers}>
      {children}
      {visible && <span style={tip}>{content}</span>}
    </span>
  );
};
