import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  Ruler, 
  Type, 
  Palette, 
  Smartphone, 
  Columns, 
  Terminal, 
  ClipboardCheck, 
  Grid, 
  Sliders, 
  ZoomIn, 
  ChevronRight,
  ChevronLeft,
  ArrowRight
} from 'lucide-react';
import ChapterContent from './components/ChapterContent';

export default function App() {
  const [activeChapter, setActiveChapter] = useState<number>(1);

  const [sidebarWidth, setSidebarWidth] = useState<number>(38); // Standard 38%
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  // Parallax Scroll-to-Dock state engine
  const [scrollTop, setScrollTop] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const maxScrollRange = 320; // Exact distance to lock dock sequence
  const dockProgress = Math.min(Math.max(scrollTop / maxScrollRange, 0), 1);

  // Responsive device detector
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Command handlers to smoothly transition Scroll Docking
  const dockToSystem = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: maxScrollRange,
        behavior: 'smooth'
      });
    }
  };

  const undockToHero = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Keyboard navigation support and physical dial click simulation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only navigate if docked, to prevent intercepting scroll keys in Hero page
      if (dockProgress < 0.9) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (activeChapter < 6) {
          handleChapterSwitch(activeChapter + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (activeChapter > 1) {
          handleChapterSwitch(activeChapter - 1);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeChapter, dockProgress]);

  // Handle Drag Resizer logic for split screen
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

  const handleChapterSwitch = (num: number) => {
    setActiveChapter(num);
    const scrollableDiv = document.getElementById('documentation-scroller');
    if (scrollableDiv) {
      scrollableDiv.scrollTop = 0;
    }
  };



  const handleMasterScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  // Chapter mapping metadata
  const chapters = [
    { num: 1, title: 'The Core Philosophy', sub: '서론: 두 세계의 융합', icon: Compass },
    { num: 2, title: 'Legacy & Limitations', sub: '출발점 분석: 주류 웹 디자인의 한계', icon: Ruler },
    { num: 3, title: 'Digital Transition', sub: '전이 과정: 물리적 치환', icon: Type },
    { num: 4, title: 'Precision Typography', sub: '정밀 타이포그래피 및 다국어 처리', icon: Type },
    { num: 5, title: '38:62 Blueprint Format', sub: '구조의 완성: 비대칭 레이아웃', icon: Columns },
    { num: 6, title: 'Aesthetic Value', sub: '결론: 미학적 가치', icon: Palette },
  ];

  // Computing smooth transitions for widths
  const getResponsiveSidebarStyle = () => {
    if (isMobile) {
      // Interpolate smoothly from 100vh (Landing Hero) to 40vh (Docked Interface) based on dock progress
      const heightVal = `calc(100vh - ${dockProgress * 60}vh)`;
      return {
        width: '100%',
        minHeight: heightVal,
        height: heightVal,
        position: 'relative' as const
      };
    }
    const currentWidth = 100 - (dockProgress * (100 - sidebarWidth));
    return {
      width: `${currentWidth}%`,
      height: '100vh',
      position: 'relative' as const
    };
  };

  const getResponsiveDocStyle = () => {
    const currentWidth = dockProgress * (100 - sidebarWidth);
    return {
      width: `${currentWidth}%`,
      opacity: dockProgress,
      transform: `translateX(${(1 - dockProgress) * 48}px)`,
      pointerEvents: dockProgress > 0.8 ? 'auto' : 'none' as const,
      transition: 'transform 0.1s ease-out'
    };
  };

  if (isMobile) {
    return (
      <div className="min-h-screen flex flex-col bg-pdf-aluminum text-pdf-leather font-sans select-none">
        {/* Mobile standard Hero Header block */}
        <div className="flex flex-col justify-center min-h-[90vh] bg-pdf-aluminum border-b border-pdf-seam p-6 relative">
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center font-mono text-[9px] text-pdf-focus">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-pdf-red animate-pulse" />
              <span>PDF-DS MOBILE MATRIX</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <h1 className="text-[5rem] sm:text-[7.5rem] font-mono font-black tracking-tighter leading-none text-pdf-leather">
              PDF-DS
            </h1>
            <span className="text-pdf-focus text-[9px] font-mono tracking-widest uppercase block mt-4 mb-6">
              — Physical-Digital Fusion Design System —
            </span>
            <p className="text-pdf-leather text-xs sm:text-sm leading-relaxed font-sans font-medium px-4 max-w-sm">
              물리적 기계 공학의 완벽한 재료 통일성과 철저하게 조율된 촉각적 통제력을 기반으로 하는 초고정밀 명세 시스템 가이드라인.
            </p>
            <div className="mt-16 text-[9px] font-mono text-pdf-focus flex flex-col items-center gap-1.5 animate-pulse">
              <span>DOWN SCROLL TO BEGIN</span>
              <div className="w-4 h-7 border border-pdf-focus rounded-full flex justify-center p-0.5">
                <div className="w-1 h-2 bg-pdf-red rounded-full mt-0.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Documentation Start */}
        <div className="p-4 py-8 sm:p-6 bg-pdf-aluminum">
          <div className="mb-6 pb-6 border-b border-pdf-seam">
            <span className="font-mono text-[9px] text-pdf-focus font-extrabold uppercase tracking-widest block mb-4">
              CHAPTER SELECTION
            </span>
            <div className="flex overflow-x-auto gap-2 pb-3" style={{ scrollbarWidth: 'none' }}>
              {chapters.map(ch => (
                <button 
                  key={ch.num} 
                  onClick={() => {
                    setActiveChapter(ch.num);
                    const el = document.getElementById(`ch-${ch.num}`);
                    if(el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
                  }} 
                  className={`shrink-0 px-3 py-2 rounded text-[10px] font-mono font-bold transition-colors ${activeChapter === ch.num ? 'bg-pdf-leather text-pdf-aluminum' : 'bg-pdf-aluminum text-pdf-leather hover:bg-pdf-seam'}`}
                >
                  0{ch.num}. {ch.title}
                </button>
              ))}
            </div>
          </div>
          
          <ChapterContent activeChapter={activeChapter} />
          
          <div className="mt-12 pt-6 border-t border-pdf-seam flex justify-between">
            <button 
              disabled={activeChapter === 1} 
              onClick={() => { setActiveChapter(activeChapter - 1); window.scrollTo({top: 0, behavior: 'smooth'}); }} 
              className={`flex items-center gap-1 text-xs font-mono font-bold px-4 py-2 rounded transition-colors ${activeChapter === 1 ? 'opacity-50 cursor-not-allowed bg-pdf-aluminum border border-pdf-seam text-pdf-focus' : 'bg-pdf-aluminum text-pdf-leather active:bg-pdf-seam'}`}
            >
              <ChevronLeft className="w-3.5 h-3.5" /> PREV
            </button>
            <button 
              disabled={activeChapter === 6} 
              onClick={() => { setActiveChapter(activeChapter + 1); window.scrollTo({top: 0, behavior: 'smooth'}); }} 
              className={`flex items-center gap-1 text-xs font-mono font-bold px-4 py-2 rounded transition-colors ${activeChapter === 6 ? 'opacity-50 cursor-not-allowed bg-pdf-aluminum border border-pdf-seam text-pdf-focus' : 'bg-pdf-leather text-pdf-aluminum active:scale-95'}`}
            >
              NEXT <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      onScroll={handleMasterScroll}
      className="h-screen overflow-y-auto bg-pdf-aluminum text-pdf-leather font-sans select-none scroll-smooth relative"
      style={{ scrollbarWidth: 'none' }} /* Beautiful seamless view */
    >
      
      {/* Scroll track spacer structure to enable natural high-fidelity parallax scrolling */}
      <div className="h-[210vh] pointer-events-none absolute top-0 left-0 right-0 z-0 bg-transparent" />

      {/* FIXED PLATFORM FRAME IN REACTION TO SCROLL */}
      <div className="fixed inset-0 w-full h-full flex flex-col overflow-hidden z-10 pointer-events-none">
        


        {/* Core Screen Layout (Asymmetric split when docked, morphing when scrolling) */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
          
          {/* LEFT SIDE PANEL (Transitions from Full Screen landing to Left Control Sidebar) */}
          <aside 
            ref={sidebarRef}
            className="bg-pdf-aluminum border-r border-pdf-seam shrink-0 z-20 relative overflow-hidden flex flex-col justify-between"
            style={{
              ...getResponsiveSidebarStyle(),
              backgroundImage: 'linear-gradient(to right, rgba(9, 9, 11, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(9, 9, 11, 0.035) 1px, transparent 1px)',
              backgroundSize: '24px 24px' // Traditional 24dp grid modulus
            }}
          >
            
            {/* ========================================== */}
            {/* HERO LANDING CANVAS LAYER (Is visible when dockProgress < 0.95) */}
            {/* ========================================== */}
            <div 
              className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 text-pdf-leather select-none z-10 pointer-events-auto"
              style={{
                opacity: 1 - dockProgress * 1.6,
                pointerEvents: dockProgress > 0.6 ? 'none' : 'auto',
                transform: `translateY(${-dockProgress * 90}px)`,
                transition: 'opacity 0.08s ease-out, transform 0.1s ease-out'
              }}
            >
              <div className="flex justify-between items-start font-mono text-[9px] text-pdf-focus">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pdf-red animate-pulse" />
                  <span>DOCKING MATRIX: IDLE PHASE</span>
                </div>
                <div>FRAME CTR: 02.40.16</div>
              </div>

              {/* Center giant elements */}
              <div className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto space-y-8 my-auto">
                <div className="relative">
                  {/* Rotating grid calibration dial */}
                  <div 
                    className="absolute -inset-20 opacity-[0.075] pointer-events-none flex items-center justify-center anim-spin-slow"
                    style={{
                      transform: `rotate(${scrollTop * 0.45}deg)`,
                      transition: 'transform 0.02s linear'
                    }}
                  >
                    <svg viewBox="0 0 200 200" className="w-80 h-80 text-pdf-leather font-mono text-[4px]">
                      <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                      <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="10 5" />
                      <line x1="100" y1="5" x2="100" y2="195" stroke="currentColor" strokeWidth="0.25" />
                      <line x1="5" y1="100" x2="195" y2="100" stroke="currentColor" strokeWidth="0.25" />
                      <text x="105" y="25" fill="currentColor">CALIBRATE SPEED</text>
                      <text x="105" y="180" fill="currentColor">TE-DIAL STAGE</text>
                    </svg>
                  </div>

                  {/* Gigantic Title - Monospace Spec */}
                  <h1 className="text-[5rem] sm:text-[9rem] md:text-[12rem] font-mono font-black tracking-tighter leading-none text-pdf-leather relative z-10 select-none">
                    PDF-DS
                  </h1>
                </div>

                <div className="space-y-4 max-w-lg relative z-10">
                  <span className="text-pdf-focus text-[10px] font-mono tracking-widest uppercase block">
                    — Physical-Digital Fusion Design System —
                  </span>
                  <p className="text-pdf-leather text-xs sm:text-sm leading-relaxed font-sans font-medium px-4">
                    물리적 기계 공학의 완벽한 재료 통일성과 철저하게 조율된 촉각적 통제력을 기반으로 하는 초고정밀 명세 시스템 가이드라인.
                  </p>
                </div>

                {/* Tactical Quick Dock Button */}
                <div className="flex flex-col items-center gap-5 relative z-10">
                  <button 
                    onClick={dockToSystem}
                    className="px-8 py-3.5 bg-pdf-leather hover:bg-pdf-leather border border-pdf-focus text-pdf-aluminum rounded-md text-xs font-mono font-bold tracking-widest transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-pdf-leather/20 hover:border-pdf-red flex items-center gap-2 pointer-events-auto"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pdf-red animate-pulse" />
                    ENTER SPEC SYSTEM (도킹 시스템 입력)
                    <ArrowRight className="w-4 h-4 text-pdf-red" />
                  </button>
                  
                  {/* Animated scroll suggestion */}
                  <div className="text-[9px] font-mono text-pdf-focus flex flex-col items-center gap-1.5 mt-2">
                    <span className="tracking-widest filter-pulse">SCROLL DOWN OR CLICK TO SYSTEM COUPLING</span>
                    <div className="w-4 h-7 border border-pdf-focus rounded-full flex justify-center p-0.5">
                      <div className="w-1 h-1.5 bg-pdf-red rounded-full anim-scroller-dot" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end font-mono text-[9px] text-pdf-focus">
                <div>MODULUS: 24DP • RAMS ACCENT RED</div>
                <div>SYSTEM CALIBRATION STATUS: ACTIVE</div>
              </div>
            </div>

            {/* ========================================== */}
            {/* SIDEBAR SYSTEM INTERFACE LAYER (Is visible when dockProgress > 0.05) */}
            {/* ========================================== */}
            <div 
              className="absolute inset-0 flex flex-col justify-between p-5 select-none z-15 pointer-events-auto"
              style={{
                opacity: (dockProgress - 0.1) * 1.11,
                pointerEvents: dockProgress > 0.5 ? 'auto' : 'none',
                transform: `translateY(${(1 - dockProgress) * 45}px)`,
                transition: 'opacity 0.08s ease-out, transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div>
                {/* Back to Landing Screen (Tactile Anchor Latch Button) */}
                <button
                  onClick={undockToHero}
                  className="w-full mb-4 flex items-center justify-between p-2 rounded border border-pdf-seam bg-pdf-aluminum hover:bg-pdf-aluminum transition-all text-[10px] font-mono group"
                  title="랜딩 인트로 화면으로 복귀"
                >
                  <span className="flex items-center gap-1.5 text-pdf-focus group-hover:text-pdf-leather transition-colors">
                    <ChevronLeft className="w-3.5 h-3.5 text-pdf-red transition-transform group-hover:-translate-x-0.5" />
                    ▲ RETURN TO INTRO (랜딩 화면으로)
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </button>

                {/* Title / Header branding */}
                <div className="mb-4">
                  <span className="font-mono text-[9px] text-pdf-red font-extrabold uppercase tracking-widest block mb-0.5">
                    물리-디지털 융합 디자인 가이드라인
                  </span>
                  <h1 className="text-xl font-mono font-black text-pdf-leather tracking-tight leading-none mb-1">
                    PDF-DS System
                  </h1>
                  <p className="text-[10px] text-pdf-focus font-sans leading-relaxed">
                    철학적 기능주의의 10대 원칙과 물리적 구조의 명료함을 담은 하드웨어급 디지털 조작기 디자인 규격.
                  </p>
                </div>

                {/* Document Index navigation list */}
                <nav className="space-y-0.5 max-h-[300px] lg:max-h-[calc(100vh-420px)] overflow-y-auto pr-1">
                  <span className="text-[9px] font-mono text-pdf-focus block pb-1 border-b border-pdf-seam uppercase tracking-widest mb-1.5 font-bold">
                    CHAPTER INDEX
                  </span>
                  
                  {chapters.map((ch) => {
                    const isSelected = activeChapter === ch.num;
                    return (
                      <button
                        key={ch.num}
                        id={`nav-chapter-${ch.num}`}
                        onClick={() => handleChapterSwitch(ch.num)}
                        className={`w-full flex items-center justify-between text-left p-1.5 rounded transition-all group ${isSelected ? 'bg-pdf-aluminum text-pdf-leather shadow-xs border-l-3 border-pdf-red scale-101' : 'text-pdf-focus hover:text-pdf-leather hover:bg-pdf-aluminum/60'}`}
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          <span className={`text-[9px] font-mono font-bold w-3.5 h-3.5 flex items-center justify-center rounded-xs ${isSelected ? 'bg-pdf-red text-pdf-aluminum' : 'bg-pdf-seam text-pdf-focus'}`}>
                            {ch.num}
                          </span>
                          <div className="overflow-hidden">
                            <span className="text-xs font-semibold block truncate leading-none mb-0.5">{ch.title}</span>
                            <span className="text-[8px] font-mono text-pdf-focus block truncate">{ch.sub}</span>
                          </div>
                        </div>
                        <ChevronRight className={`w-3 h-3 text-pdf-focus transition-transform ${isSelected ? 'transform translate-x-0.5 text-pdf-red' : 'opacity-0 group-hover:opacity-100'}`} />
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* User Credits & Status Indicator inside sidebar */}
              <div className="mt-4 pt-3 border-t border-pdf-seam text-[9px] font-mono text-pdf-focus space-y-1">
                <div className="flex justify-between">
                  <span>DESIGN AUTHOR:</span>
                  <span className="text-pdf-leather font-bold">PDF-DS SPEC TEAM</span>
                </div>
                <div className="flex justify-between">
                  <span>DOCK INTEGRATION:</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-0.5">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    ACTIVE PORT
                  </span>
                </div>
              </div>
            </div>

          </aside>

          {/* SPLITTER DRAGGABLE BAR (Only visible on larger width desktops when docked) */}
          {dockProgress > 0.95 && (
            <div 
              onMouseDown={startResizing}
              onDoubleClick={() => {
                setSidebarWidth(38); // Reset to standard Golden asymmetric ratio
              }}
              className={`hidden lg:flex w-1 bg-pdf-seam hover:bg-pdf-red/80 cursor-col-resize justify-center items-center select-none z-30 transition-colors pointer-events-auto ${isResizing ? 'bg-pdf-red text-pdf-aluminum' : ''}`}
              title="더블클릭시 38% 표준 비율로 리셋"
            >
              <div className={`w-[1px] h-8 ${isResizing ? 'bg-pdf-aluminum' : 'bg-pdf-seam'} rounded`} />
            </div>
          )}

          {/* RIGHT SIDE DOCUMENT VIEW PANEL (Gently slides and cascades in depending on scroll progress) */}
          <main 
            id="documentation-scroller"
            className="flex-1 overflow-y-auto bg-pdf-aluminum p-6 md:p-8 lg:p-10 space-y-6 scroll-smooth lg:h-[calc(100vh-40px)]"
            style={{
              ...getResponsiveDocStyle()
            }}
          >
            {/* Top dynamic overview card */}
            <div className="border border-pdf-seam bg-pdf-aluminum rounded-lg p-5 relative overflow-hidden mb-6 pointer-events-auto">
              {/* Background fine technical grid overlay */}
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
                backgroundImage: 'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)',
                backgroundSize: '12px 12px'
              }} />

              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                <div>
                  <span className="text-[9px] font-mono text-pdf-red bg-pdf-aluminum py-0.5 px-2 rounded-full border border-pdf-red font-bold">
                    PDF-DS OFFICIAL DOCUMENTATION SYSTEM
                  </span>
                  <h2 className="text-xl font-extrabold text-pdf-leather mt-1.5 tracking-tight">
                    {chapters[activeChapter - 1].title}
                  </h2>
                  <div className="flex items-center gap-1.5 font-mono text-[9px] text-pdf-focus mt-0.5">
                    <span>CHAPTER 0{activeChapter}</span>
                    <span>•</span>
                    <span>{chapters[activeChapter - 1].sub}</span>
                  </div>
                </div>

                {/* Status completion horizontal progress meter */}
                <div className="bg-pdf-aluminum border border-pdf-seam rounded p-1.5 px-2 text-right shrink-0">
                  <span className="text-[8px] font-mono text-pdf-focus block pb-0.5">SPEC PROGRESS</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1 bg-pdf-aluminum rounded-full overflow-hidden border border-pdf-seam">
                      <div className="bg-pdf-red h-full transition-all duration-300" style={{ width: `${(activeChapter / 6) * 100}%` }} />
                    </div>
                    <span className="text-[9px] font-mono font-bold text-pdf-leather">{Math.round((activeChapter / 6) * 100)}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapter documentation renderer board */}
            <div className="pb-8 pointer-events-auto">
              <ChapterContent activeChapter={activeChapter} />
            </div>

            {/* Pagination footer back/next action deck */}
            <div className="border-t border-pdf-seam pt-5 flex items-center justify-between pointer-events-auto pb-4">
              <button
                id="footer-btn-prev"
                disabled={activeChapter === 1}
                onClick={() => handleChapterSwitch(activeChapter - 1)}
                className={`flex items-center gap-1.5 py-1.5 px-3 border text-xs font-mono font-bold rounded transition-colors ${activeChapter === 1 ? 'text-pdf-focus border-pdf-seam cursor-not-allowed bg-pdf-aluminum' : 'text-pdf-leather border-pdf-seam hover:bg-pdf-aluminum'}`}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                이전 (PREV)
              </button>

              <span className="text-[9px] font-mono text-pdf-focus">
                STAGE 0{activeChapter} / 06
              </span>

              <button
                id="footer-btn-next"
                disabled={activeChapter === 6}
                onClick={() => handleChapterSwitch(activeChapter + 1)}
                className={`flex items-center gap-1.5 py-1.5 px-3 border text-xs font-mono font-bold rounded transition-colors ${activeChapter === 6 ? 'text-pdf-focus border-pdf-seam cursor-not-allowed bg-pdf-aluminum' : 'text-pdf-leather border-pdf-seam hover:bg-pdf-aluminum text-pdf-red hover:border-pdf-red'}`}
              >
                다음 (NEXT)
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </main>

        </div>

      </div>

      {/* Embedded Style Sheet - Heavy optimization for parallax kinetic and scanning visual effects */}
      <style>{`
        /* Custom hide scrollbar implementation */
        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }

        /* Pulse light effect button labels */
        @keyframes filterPulse {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 0.95; }
        }
        .filter-pulse {
          animation: filterPulse 2s ease-in-out infinite;
        }

        /* Laser sweep scroller dots */
        @keyframes scrollerDotAnim {
          0% { transform: translateY(0); opacity: 0.2; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        .anim-scroller-dot {
          animation: scrollerDotAnim 1.6s cubic-bezier(0.16, 1, 0.3, 1) infinite;
        }

        /* Custom spinner dial loop */
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .anim-spin-slow {
          animation: spinSlow 40s linear infinite;
        }

        /* Fade-in rendering animation chapter transitions */
        @keyframes stageFadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: stageFadeIn 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

    </div>
  );
}
