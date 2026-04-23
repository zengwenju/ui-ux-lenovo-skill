/* Cake Design System — Uploader */
import React, { useRef } from 'react';

type UploaderProps = { fileList?: { name: string; status?: 'done' | 'error' }[]; accept?: string; multiple?: boolean; drag?: boolean; onChange?: (files: FileList) => void };

export const Uploader: React.FC<UploaderProps> = ({ fileList = [], accept, multiple, drag = true, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const zone: React.CSSProperties = {
    border: '2px dashed var(--sem-color-border)', borderRadius: 'var(--fdn-radius-radius-4)',
    background: 'var(--sem-color-bg-primary)', padding: 'var(--fdn-spacing-space-24)',
    textAlign: 'center', cursor: 'pointer', transition: 'border-color 0.2s',
  };

  return (
    <div>
      <div style={zone}
        onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--sem-color-border-focus)')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = '')}
        onDragOver={e => { e.preventDefault(); e.currentTarget.style.borderColor = 'var(--sem-color-border-focus)'; }}
        onDragLeave={e => (e.currentTarget.style.borderColor = '')}
        onDrop={e => { e.preventDefault(); onChange?.(e.dataTransfer.files); }}
        onClick={() => inputRef.current?.click()}>
        <p>Drop files here or click to upload</p>
        <input ref={inputRef} type="file" accept={accept} multiple={multiple} style={{ display: 'none' }} onChange={e => e.target.files && onChange?.(e.target.files)} />
      </div>
      {fileList.map((f, i) => (
        <div key={i} style={{ padding: 'var(--fdn-spacing-space-4)', color: f.status === 'error' ? 'var(--sem-color-state-error)' : 'var(--sem-color-state-success-light)' }}>
          {f.name} {f.status === 'error' ? '✗' : '✓'}
        </div>
      ))}
    </div>
  );
};
