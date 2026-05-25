import React, { useState, useEffect, useRef } from 'react';
import ChapterContent from '../components/ChapterContent';

export default function Guide() {
  const [activeChapter, setActiveChapter] = useState<number>(1);
  const [sidebarWidth, setSidebarWidth] = useState<number>(38); // Standard 38%
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChapterSwitch = (num: number) => {
    setActiveChapter(num);
    const scrollableDiv = document.getElementById('documentation-scroller');
    if (scrollableDiv) {
      scrollableDiv.scrollTop = 0;
    }
  };

  const startResizing = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing || !containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const relativeX = e.clientX - containerRect.left;
      const percentage = (relativeX / containerRect.width) * 100;
      
      // Enforce 20% to 50% boundary caps in Section 6
      if (percentage >= 20 && percentage <= 50) {
        setSidebarWidth(percentage);
      }
    };

    const handleMouseUp = () => {
      if (isResizing) {
        setIsResizing(false);
      }
    };

    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  // Chapter mapping metadata from PDF
  const chapters = [
    { num: 1, title: 'PDF-DS 시작하기 및 설치 가이드', sub: 'Installation & Usage' },
    { num: 2, title: '철학적 토대와 시스템 미학의 융합', sub: 'PDF-DS 서론' },
    { num: 3, title: '청사진 그리드와 멀티 스케일 여백 시스템', sub: 'Blueprint Grid & Spacing' },
    { num: 4, title: '정밀 타이포그래피 및 레이아웃 정렬 명세', 초정밀: 'Typography & Layout' },
    { num: 5, title: '아크로매틱 컬러 체계와 펑셔널 레드', sub: 'Achromatic Color & Functional Red' },
    { num: 6, title: '초정밀 버튼 설계 및 형태 모핑 상호작용', sub: 'Morphing Button' },
    { num: 7, title: '비대칭 스플릿 스크린 레이아웃', sub: 'Asymmetric Split Screen' },
    { num: 8, title: '통합 소프트웨어 아키텍처 및 토큰 구현', sub: 'Architecture & Token' },
    { num: 9, title: '최종 통합 실무 체크리스트 및 검수 수칙', sub: 'QA & Checklist' },
  ];

  return (
    <div className="pdf-app" ref={containerRef}>
      
      {/* SIDEBAR */}
      <aside 
        className="pdf-sidebar"
        style={!isMobile ? { width: `${sidebarWidth}%` } : undefined}
      >
        <div className="pdf-content-relative pdf-p-300">
          <div className="pdf-mb-300">
            <span className="pdf-text-label-14-mono pdf-text-red pdf-mb-100" style={{display: 'block'}}>
              물리-디지털 융합 디자인 가이드라인
            </span>
            <div className="pdf-flex-row pdf-justify-between pdf-items-center pdf-mb-100">
              <h1 className="pdf-text-heading-32">
                PDF-DS System
              </h1>
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="pdf-secondary-btn"
                style={{ padding: '6px 12px' }}
                aria-label={isDarkMode ? "라이트 모드로 전환" : "다크 모드로 전환"}
              >
                {isDarkMode ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>
            <p className="pdf-text-copy-14 pdf-text-muted">
              철학적 기능주의의 10대 원칙과 물리적 구조의 명료함을 담은 하드웨어급 디지털 조작기 디자인 규격.
            </p>
            <div className="pdf-mt-200">
              <a href="#/editor" className="pdf-btn-primary">
                PDF-DS 편집기 열기 →
              </a>
            </div>
          </div>

          <nav>
            <span className="pdf-text-label-14-mono pdf-text-muted pdf-border-bottom pdf-pb-100 pdf-mb-150" style={{display: 'block', fontWeight: 'bold'}}>
              CHAPTER INDEX
            </span>
            
            {chapters.map((ch) => {
              const isSelected = activeChapter === ch.num;
              return (
                <div
                  key={ch.num}
                  onClick={() => handleChapterSwitch(ch.num)}
                  className={`pdf-nav-item ${isSelected ? 'active' : ''}`}
                >
                  <div className="pdf-flex-row pdf-items-center pdf-gap-150" style={{overflow: 'hidden'}}>
                    <span className="pdf-text-label-14-mono" style={{
                      backgroundColor: isSelected ? 'var(--color-functional-red)' : 'var(--color-border-default)',
                      color: isSelected ? 'var(--color-bg-primary)' : 'var(--color-text-secondary)',
                      padding: '4px 8px',
                      borderRadius: '2px',
                      fontWeight: 'bold'
                    }}>
                      0{ch.num}
                    </span>
                    <div className="pdf-flex-col" style={{overflow: 'hidden'}}>
                      <span className="pdf-text-label-16" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                        {ch.title}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* SPLITTER DRAGGABLE BAR */}
      {!isMobile && (
        <div 
          onMouseDown={startResizing}
          onDoubleClick={() => setSidebarWidth(38)}
          className={`pdf-splitter ${isResizing ? 'active' : ''}`}
          title="더블클릭시 38% 표준 비율로 리셋"
        />
      )}

      {/* MAIN CONTENT VIEW */}
      <main 
        id="documentation-scroller"
        className="pdf-main-view"
      >
        <div className="pdf-panel pdf-grid-bg">
          <div className="pdf-content-relative pdf-flex-row pdf-justify-between pdf-items-center">
            <div>
              <span className="pdf-text-label-14-mono pdf-text-red pdf-mb-100" style={{display: 'block'}}>
                CHAPTER 0{activeChapter}
              </span>
              <h2 className="pdf-text-heading-32">
                {chapters[activeChapter - 1].title}
              </h2>
            </div>
            <div className="pdf-text-label-14-mono pdf-text-muted">
              {Math.round((activeChapter / 9) * 100)}% PROGRESS
            </div>
          </div>
        </div>

        <div>
          <ChapterContent activeChapter={activeChapter} />
        </div>

        <div className="pdf-footer">
          <button
            disabled={activeChapter === 1}
            onClick={() => handleChapterSwitch(activeChapter - 1)}
            className="pdf-secondary-btn"
          >
            ← PREV
          </button>
          <span className="pdf-text-label-14-mono pdf-text-muted">
            STAGE 0{activeChapter} / 09
          </span>
          <button
            disabled={activeChapter === 9}
            onClick={() => handleChapterSwitch(activeChapter + 1)}
            className="pdf-secondary-btn"
            style={{ borderColor: activeChapter !== 9 ? 'var(--color-functional-red)' : undefined, color: activeChapter !== 9 ? 'var(--color-functional-red)' : undefined }}
          >
            NEXT →
          </button>
        </div>
      </main>
    </div>
  );
}
