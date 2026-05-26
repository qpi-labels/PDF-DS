import React, { useState } from 'react';
import { useEditorStore } from '../store';
import { EditorNode } from '../types';

export default function PreviewViewer({ onExit }: { onExit: () => void }) {
  const { pages, appTitle, appDescription } = useEditorStore();
  const [activePreviewPageId, setActivePreviewPageId] = useState(pages[0]?.id || null);

  const activePage = pages.find(p => p.id === activePreviewPageId) || pages[0];

  const renderNode = (node: EditorNode) => {
    const elAttributes = { ...node.attributes, className: node.classes.join(' '), style: node.styles };
    
    let inner: any = node.content ? node.content.split('\\n').map((line, i, arr) => (
      <React.Fragment key={i}>
        {line}
        {i < arr.length - 1 && <br />}
      </React.Fragment>
    )) : '';
    
    if (node.children.length > 0) {
      inner = node.children.map(renderNode);
    }

    switch (node.type) {
      case 'div': return <div key={node.id} {...elAttributes}>{inner}</div>;
      case 'span': return <span key={node.id} {...elAttributes}>{inner}</span>;
      case 'p': return <p key={node.id} {...elAttributes}>{inner}</p>;
      case 'h1': return <h1 key={node.id} {...elAttributes}>{inner}</h1>;
      case 'h2': return <h2 key={node.id} {...elAttributes}>{inner}</h2>;
      case 'h3': return <h3 key={node.id} {...elAttributes}>{inner}</h3>;
      case 'button': return <button key={node.id} {...elAttributes}>{inner}</button>;
      case 'a': return <a key={node.id} {...elAttributes} href={node.attributes.href || '#'}>{inner}</a>;
      case 'img': return <img key={node.id} {...elAttributes} src={node.attributes.src} alt={node.attributes.alt} />;
      case 'input': return <input key={node.id} {...elAttributes} type="text" placeholder={node.attributes.placeholder} />;
      default: return <div key={node.id} {...elAttributes}>{inner}</div>;
    }
  };

  return (
    <div className="pdf-app" style={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <aside className="pdf-sidebar" style={{ width: '25%', borderRight: '1px solid var(--color-border-default)', display: 'flex', flexDirection: 'column' }}>
        <div className="pdf-content-relative pdf-p-300">
          <div className="pdf-mb-300">
            <div className="pdf-flex-row pdf-justify-between pdf-items-center pdf-mb-100">
              <span className="pdf-text-label-14-mono pdf-text-red pdf-mb-100" style={{ display: 'block' }}>
                PREVIEW MODE
              </span>
              <button className="pdf-secondary-btn" onClick={onExit} style={{ padding: '4px 8px' }}>Exit</button>
            </div>
            <div className="pdf-flex-row pdf-justify-between pdf-items-center pdf-mb-100">
              <h1 className="pdf-text-heading-32">{appTitle || '사이트 제목'}</h1>
            </div>
            <p className="pdf-text-copy-14 pdf-text-muted">
              {appDescription || '사이트 설명을 입력하세요'}
            </p>
          </div>

          <nav>
            <span className="pdf-text-label-14-mono pdf-text-muted pdf-border-bottom pdf-pb-100 pdf-mb-100 pdf-font-bold" style={{ display: 'block' }}>
              SITE NAVIGATOR
            </span>
            <div className="pdf-mb-200">
              {pages.map((page, idx) => {
                const isSelected = activePreviewPageId === page.id;
                const num = idx + 1;
                return (
                  <div 
                    key={page.id} 
                    className={`pdf-nav-item ${isSelected ? 'active' : ''}`}
                    onClick={() => setActivePreviewPageId(page.id)}
                    style={{ marginBottom: '8px', cursor: 'pointer' }}
                  >
                    <div className="pdf-flex-row pdf-items-center pdf-gap-150 pdf-overflow-hidden pdf-w-full">
                      <span className="pdf-text-label-14-mono pdf-text-center pdf-font-bold" style={{
                        backgroundColor: isSelected ? 'var(--color-functional-red)' : 'var(--color-border-default)',
                        color: isSelected ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)',
                        padding: '4px 8px',
                        borderRadius: '2px',
                        minWidth: '32px'
                      }}>
                        {num < 10 ? `0${num}` : num}
                      </span>
                      <div className="pdf-flex-col pdf-overflow-hidden" style={{ flex: 1 }}>
                        <span className="pdf-text-label-16 pdf-flex-row pdf-items-center pdf-overflow-hidden" style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                          {page.title}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </nav>
        </div>
      </aside>

      <main className="pdf-main-view" style={{ flex: 1, overflowY: 'auto' }}>
        <div className="pdf-main-content">
          <div className="pdf-panel pdf-grid-bg">
            <div className="pdf-content-relative">
              <span className="pdf-text-label-14-mono pdf-text-red pdf-mb-100" style={{ display: 'block' }}>
                PAGE {pages.findIndex(p => p.id === activePreviewPageId) + 1 < 10 ? `0${pages.findIndex(p => p.id === activePreviewPageId) + 1}` : pages.findIndex(p => p.id === activePreviewPageId) + 1}
              </span>
              <div className="pdf-flex-row pdf-justify-between" style={{ alignItems: 'baseline' }}>
                <h2 className="pdf-text-heading-32">
                  {activePage?.title}
                </h2>
              </div>
            </div>
          </div>
          {activePage ? activePage.rootNode.children.map(renderNode) : null}
        </div>
      </main>
    </div>
  );
}
