import React, { useState } from 'react';

export default function NavigationSandbox() {
  const [activeTab, setActiveTab] = useState('tab-1');

  return (
    <div className="pdf-bg-secondary pdf-border pdf-p-300">
      <h3 className="pdf-text-label-16 pdf-mb-200">Navigation & Hierarchy (네비게이션 구조)</h3>
      <p className="pdf-text-copy-14 pdf-text-muted pdf-mb-300">
        시스템 내부의 깊이(Depth)와 평면적 분기(Lateral)를 관리하는 수단입니다. 현재 사용자가 시스템의 어느 계층에 위치하고 있는지 시각적으로 명확하게 지시해야 합니다.
      </p>

      <div className="pdf-flex-col pdf-gap-400">
        
        {/* 1. Sidebar Item */}
        <div className="pdf-flex-col pdf-gap-100">
          <label className="pdf-text-label-14-mono pdf-text-muted">1. Sidebar Navigation (사이드바 메뉴)</label>
          <div 
            className="pdf-p-200" 
            style={{ 
              backgroundColor: 'var(--bg-sidebar)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              border: '1px solid var(--color-border-default)', 
              borderRadius: '8px',
              backgroundImage: 'var(--blueprint-grid-pattern)',
              backgroundSize: '24px 24px',
              maxWidth: '300px' 
            }}
          >
            <div className="pdf-flex-col" style={{ padding: '8px 0' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 16px', marginBottom: '8px', cursor: 'pointer' }}>
                 <span className="pdf-text-label-16" style={{fontWeight: 'bold'}}>Components</span>
                 <svg width="12" height="12" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" fill="currentColor"/></svg>
              </div>

              <div className="pdf-nav-item">
                <div className="pdf-flex-row pdf-items-center pdf-gap-150" style={{ width: '100%' }}>
                  <span className="pdf-text-label-14-mono" style={{ backgroundColor: 'var(--color-border-default)', color: 'var(--color-text-secondary)', padding: '4px 8px', borderRadius: '2px', fontWeight: 'bold', minWidth: '32px', textAlign: 'center' }}>08</span>
                  <span className="pdf-text-label-16" style={{ color: 'var(--color-text-secondary)' }}>Buttons & Morphing</span>
                </div>
              </div>
              <div className="pdf-nav-item">
                <div className="pdf-flex-row pdf-items-center pdf-gap-150" style={{ width: '100%' }}>
                  <span className="pdf-text-label-14-mono" style={{ backgroundColor: 'var(--color-border-default)', color: 'var(--color-text-secondary)', padding: '4px 8px', borderRadius: '2px', fontWeight: 'bold', minWidth: '32px', textAlign: 'center' }}>09</span>
                  <span className="pdf-text-label-16" style={{ color: 'var(--color-text-secondary)' }}>Forms</span>
                </div>
              </div>
              <div className="pdf-nav-item">
                <div className="pdf-flex-row pdf-items-center pdf-gap-150" style={{ width: '100%' }}>
                  <span className="pdf-text-label-14-mono" style={{ backgroundColor: 'var(--color-border-default)', color: 'var(--color-text-secondary)', padding: '4px 8px', borderRadius: '2px', fontWeight: 'bold', minWidth: '32px', textAlign: 'center' }}>010</span>
                  <span className="pdf-text-label-16" style={{ color: 'var(--color-text-secondary)' }}>Modals</span>
                </div>
              </div>
              <div className="pdf-nav-item active">
                <div className="pdf-flex-row pdf-items-center pdf-gap-150" style={{ width: '100%' }}>
                  <span className="pdf-text-label-14-mono" style={{ backgroundColor: 'var(--color-functional-red)', color: 'var(--color-bg-primary)', padding: '4px 8px', borderRadius: '2px', fontWeight: 'bold', minWidth: '32px', textAlign: 'center' }}>011</span>
                  <span className="pdf-text-label-16" style={{ fontWeight: 'bold' }}>Navigation</span>
                </div>
              </div>
            </div>
          </div>
          <p className="pdf-text-copy-13-mono pdf-text-muted pdf-mt-100">
            실제 사이드바와 동일하게 좌측 붉은 선(Border-left)과 번호 블록을 통해 현재 위치를 명시적으로 나타냅니다.
          </p>
        </div>

        {/* 2. Top Tabs */}
        <div className="pdf-flex-col pdf-gap-100">
          <label className="pdf-text-label-14-mono pdf-text-muted">2. Contextual Tabs (수평 탭)</label>
          <div 
            className="pdf-p-200" 
            style={{ 
              backgroundColor: 'var(--color-bg-primary)', 
              border: '1px solid var(--color-border-default)', 
              borderRadius: '8px',
            }}
          >
            <div className="pdf-flex-row pdf-border-bottom">
              <button 
                onClick={() => setActiveTab('tab-1')}
                style={{
                  padding: '12px 24px',
                  borderBottom: activeTab === 'tab-1' ? '2px solid var(--color-functional-red)' : '2px solid transparent',
                  color: activeTab === 'tab-1' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                  fontWeight: activeTab === 'tab-1' ? 600 : 400
                }}
              >
                <span className="pdf-text-label-14-mono">Design Tokens</span>
              </button>
              <button 
                onClick={() => setActiveTab('tab-2')}
                style={{
                  padding: '12px 24px',
                  borderBottom: activeTab === 'tab-2' ? '2px solid var(--color-functional-red)' : '2px solid transparent',
                  color: activeTab === 'tab-2' ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                  fontWeight: activeTab === 'tab-2' ? 600 : 400
                }}
              >
                <span className="pdf-text-label-14-mono">Components</span>
              </button>
            </div>
            
            <div className="pdf-p-300">
              {activeTab === 'tab-1' ? (
                <p className="pdf-text-copy-14 pdf-text-muted">디자인 토큰 탭의 내용이 표시됩니다.</p>
              ) : (
                <p className="pdf-text-copy-14 pdf-text-muted">컴포넌트 탭의 내용이 표시됩니다.</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
