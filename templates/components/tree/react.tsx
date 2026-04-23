/* Cake Design System — Tree */
import React, { useState } from 'react';

type TreeNode = { key: string; label: string; children?: TreeNode[] };
type TreeProps = { data: TreeNode[]; expandedKeys?: string[]; selectedKeys?: string[]; checkable?: boolean; onSelect?: (key: string) => void };

const Node: React.FC<{ node: TreeNode; depth: number; expanded: Set<string>; selected: Set<string>; toggle: (k: string) => void; onSelect?: (k: string) => void }> =
  ({ node, depth, expanded, selected, toggle, onSelect }) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expanded.has(node.key);
    const isSelected = selected.has(node.key);
    const row: React.CSSProperties = {
      display: 'flex', alignItems: 'center', padding: 'var(--fdn-spacing-space-4) var(--fdn-spacing-space-8)',
      paddingLeft: `calc(var(--fdn-spacing-space-24) * ${depth})`, cursor: 'pointer',
      borderRadius: 'var(--fdn-radius-radius-4)',
      background: isSelected ? 'var(--fdn-color-palette-e0f2fe)' : 'transparent',
    };

    return (
      <>
        <div style={row}
          onMouseEnter={e => { if (!isSelected) e.currentTarget.style.background = 'var(--fdn-color-palette-f1f5f9)'; }}
          onMouseLeave={e => { if (!isSelected) e.currentTarget.style.background = ''; }}
          onClick={() => { if (hasChildren) toggle(node.key); onSelect?.(node.key); }}>
          <span style={{ width: 16 }}>{hasChildren ? (isExpanded ? '▾' : '▸') : ''}</span>
          <span>{node.label}</span>
        </div>
        {hasChildren && isExpanded && node.children!.map(c => (
          <Node key={c.key} node={c} depth={depth + 1} expanded={expanded} selected={selected} toggle={toggle} onSelect={onSelect} />
        ))}
      </>
    );
  };

export const Tree: React.FC<TreeProps> = ({ data, expandedKeys = [], selectedKeys = [], onSelect }) => {
  const [expanded, setExpanded] = useState(new Set(expandedKeys));
  const selected = new Set(selectedKeys);
  const toggle = (k: string) => { const s = new Set(expanded); s.has(k) ? s.delete(k) : s.add(k); setExpanded(s); };

  return <div>{data.map(n => <Node key={n.key} node={n} depth={0} expanded={expanded} selected={selected} toggle={toggle} onSelect={onSelect} />)}</div>;
};
