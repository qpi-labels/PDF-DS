import React, { useState } from 'react';

export default function LayoutComparisonSandbox() {
  const [viewMode, setViewMode] = useState<'legacy' | 'pdfds'>('legacy');

  return (
    <div className="bg-pdf-aluminum border border-pdf-seam p-4 shrink-0 rounded-lg my-8 flex flex-col justify-center overflow-hidden relative shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="font-mono text-xs tracking-wider text-pdf-red font-bold uppercase block">
            CH.2 STRUCTURAL ANALYSIS
          </span>
          <h4 className="font-sans text-base font-semibold text-pdf-leather mt-1">
            주류 웹 레이아웃 vs PDF-DS 블루프린트
          </h4>
        </div>
        <div className="flex bg-pdf-seam p-1 rounded-md shrink-0">
          <button
            onClick={() => setViewMode('legacy')}
            className={`px-3 py-1.5 text-xs font-bold font-mono rounded transition-colors ${
              viewMode === 'legacy' ? 'bg-pdf-aluminum text-pdf-leather shadow-sm' : 'text-pdf-focus hover:text-pdf-leather'
            }`}
          >
            LEGACY WEB
          </button>
          <button
            onClick={() => setViewMode('pdfds')}
            className={`px-3 py-1.5 text-xs font-bold font-mono rounded transition-colors ${
              viewMode === 'pdfds' ? 'bg-pdf-red text-pdf-aluminum shadow-sm' : 'text-pdf-focus hover:text-pdf-leather'
            }`}
          >
            PDF-DS
          </button>
        </div>
      </div>

      <div className="text-xs text-pdf-focus mb-6 leading-relaxed">
        {viewMode === 'legacy' ? (
            <p><strong>윈도우 데스크톱 환경(16:9)의 수직 압축:</strong> 브라우저 탭, URL 바, 작업표시줄 등 OS 레벨의 UI에 의해 이미 화면의 수직 공간이 소모된 상태에서, 웹사이트 자체의 헤더와 푸터까지 더해지면 실제 콘텐츠 영역은 극도로 비좁아집니다. 동시에 좌우 레터박스는 방치됩니다.</p>
        ) : (
            <p><strong>PDF-DS 비대칭 블루프린트 전환:</strong> 상하로 낭비되던 헤더/푸터를 제거하고, 낭비되던 좌우 레터박스 영역을 38% 통제 패널과 62% 콘텐츠 캔버스로 치환하여 스크린 전체의 면적 효율을 극대화합니다.</p>
        )}
      </div>

      {/* 16:9 윈도우 모니터 프레임 */}
      <div className="mx-auto w-full max-w-4xl aspect-video bg-pdf-leather rounded-md border-[6px] border-pdf-focus shadow-xl overflow-hidden flex flex-col relative transition-all duration-500">
        
        {/* OS Top: Browser Tabs & URL Bar */}
        <div className="bg-pdf-seam w-full shrink-0 flex flex-col">
          {/* Tabs */}
          <div className="flex items-end h-8 px-2 gap-1 pt-2 bg-pdf-seam">
            <div className="w-32 h-full bg-pdf-aluminum rounded-t-md flex items-center px-2 text-[8px] font-sans text-pdf-leather">
              New Tab
            </div>
            <div className="w-8 h-6 bg-pdf-seam rounded-full flex items-center justify-center text-[10px] text-pdf-focus">+</div>
          </div>
          {/* URL Bar */}
          <div className="h-10 bg-pdf-aluminum flex items-center px-2 gap-2 border-b border-pdf-focus">
            <div className="flex gap-1">
              <div className="w-4 h-4 rounded-full bg-pdf-seam"></div>
              <div className="w-4 h-4 rounded-full bg-pdf-seam"></div>
              <div className="w-4 h-4 rounded-full bg-pdf-seam"></div>
            </div>
            <div className="flex-1 h-6 bg-pdf-aluminum border border-pdf-focus rounded-full text-[8px] flex items-center px-3 text-pdf-focus font-mono">
              https://legacy.web/
            </div>
          </div>
        </div>

        {/* Website Content Area */}
        <div className="flex-1 bg-pdf-aluminum relative overflow-hidden flex transition-all duration-500">
          
          {viewMode === 'legacy' ? (
            /* LEGACY LAYOUT */
            <div className="w-full flex-1 flex flex-col items-center relative animate-fade-in">
              {/* Header */}
              <div className="w-full h-14 border-b border-pdf-seam bg-pdf-aluminum shrink-0 flex items-center px-6 justify-between shadow-sm z-20">
                <div className="w-24 h-4 bg-pdf-seam rounded"></div>
                <div className="flex gap-4">
                  <div className="w-10 h-2 bg-pdf-aluminum rounded"></div>
                  <div className="w-10 h-2 bg-pdf-aluminum rounded"></div>
                  <div className="w-10 h-2 bg-pdf-aluminum rounded"></div>
                </div>
              </div>
              
              {/* Layout Wrapper */}
              <div className="flex w-full flex-1 relative bg-pdf-aluminum z-10">
                {/* Left Letterbox */}
                <div className="flex-1 bg-pdf-red/40 border-r-2 border-pdf-red border-dashed flex flex-col justify-center items-center text-center">
                  <span className="text-pdf-red text-[10px] font-bold">낭비되는</span>
                  <span className="text-pdf-red text-[10px] font-bold">여백</span>
                </div>
                
                {/* Main Content (Narrow and Stretched) */}
                <div className="w-[50%] bg-pdf-aluminum shadow-lg flex flex-col items-center pt-8 px-6 pb-2 overflow-hidden relative">
                  <span className="text-xs font-bold text-pdf-red border border-pdf-red leading-none bg-pdf-aluminum px-2 py-1 rounded absolute top-2 right-2 animate-pulse">
                    수직 압축됨
                  </span>
                  <div className="w-3/4 h-6 bg-pdf-seam rounded mb-4"></div>
                  <div className="w-full h-3 bg-pdf-aluminum rounded mb-2"></div>
                  <div className="w-[90%] h-3 bg-pdf-aluminum rounded mb-2"></div>
                  <div className="w-[95%] h-3 bg-pdf-aluminum rounded mb-6"></div>
                  <div className="w-full h-32 bg-pdf-aluminum border border-pdf-seam rounded shrink-0"></div>
                  
                  <div className="w-full h-16 bg-gradient-to-b from-white/0 via-white/80 to-white absolute bottom-0 left-0 flex justify-center items-end pb-2 point-events-none">
                     <span className="text-[9px] bg-pdf-leather text-pdf-aluminum px-2 py-1 rounded-full flex gap-1">▼ 무한 스크롤</span>
                  </div>
                </div>

                {/* Right Letterbox */}
                <div className="flex-1 bg-pdf-red/40 border-l-2 border-pdf-red border-dashed flex flex-col justify-center items-center text-center">
                  <span className="text-pdf-red text-[10px] font-bold">낭비되는</span>
                  <span className="text-pdf-red text-[10px] font-bold">여백</span>
                </div>
              </div>

               {/* Footer */}
               <div className="w-full h-12 bg-pdf-leather shrink-0 z-20 flex justify-center items-center">
                 <div className="w-32 h-2 bg-pdf-seam rounded"></div>
               </div>
            </div>
          ) : (
            /* PDF-DS LAYOUT */
            <div className="w-full flex-1 flex relative animate-fade-in">
              {/* PDF-DS LEFT 38% */}
              <div className="w-[38%] bg-pdf-aluminum border-r border-pdf-focus h-full flex flex-col">
                {/* PDF-DS Header Area */}
                <div className="h-14 border-b border-pdf-seam flex items-center px-4 shrink-0">
                  <div className="w-4 h-4 bg-pdf-red"></div>
                  <span className="text-[10px] font-mono text-pdf-leather font-bold ml-2">PDF-DS SYSTEM</span>
                </div>
                {/* PDF-DS Controls */}
                <div className="p-4 flex flex-col gap-3 flex-1 overflow-y-auto">
                   <div className="w-full h-6 bg-pdf-seam rounded-sm"></div>
                   <div className="flex gap-2">
                     <div className="w-1/2 h-8 bg-pdf-aluminum border border-pdf-seam rounded-sm"></div>
                     <div className="w-1/2 h-8 bg-pdf-aluminum border border-pdf-seam rounded-sm"></div>
                   </div>
                   <div className="w-full h-24 bg-pdf-aluminum border border-pdf-seam rounded-sm mt-2 flex flex-col gap-2 p-3">
                     <div className="w-3/4 h-2 bg-pdf-aluminum"></div>
                     <div className="w-1/2 h-2 bg-pdf-aluminum"></div>
                   </div>
                      <div className="mt-auto pt-4">
                     <div className="w-full h-10 rounded-full bg-pdf-red flex items-center justify-center">
                        <div className="w-4 h-4 bg-pdf-aluminum/20 rounded-full mr-2"></div>
                        <span className="w-12 h-2 bg-pdf-aluminum/40 rounded"></span>
                     </div>
                   </div>
                </div>
              </div>

              {/* PDF-DS RIGHT 62% */}
              <div className="w-[62%] h-full bg-pdf-aluminum flex flex-col border-l border-pdf-seam/50">
                 {/* 62 Canvas Header */}
                 <div className="h-14 flex items-center px-8 shrink-0 justify-end">
                    <span className="text-[9px] font-mono text-pdf-focus">DATA CANVAS VIEW</span>
                 </div>
                 {/* 62 Canvas Body */}
                 <div className="flex-1 p-8 grid grid-cols-2 gap-4">
                    <div className="col-span-2 h-12 flex items-center border-b border-pdf-seam">
                      <div className="w-48 h-6 bg-pdf-seam rounded"></div>
                    </div>
                    <div className="bg-pdf-aluminum border border-pdf-seam h-32 rounded-lg p-4">
                      <div className="w-1/3 h-4 bg-pdf-seam rounded mb-4"></div>
                      <div className="w-full h-2 bg-pdf-aluminum rounded mb-2"></div>
                      <div className="w-full h-2 bg-pdf-aluminum rounded mb-2"></div>
                      <div className="w-2/3 h-2 bg-pdf-aluminum rounded"></div>
                    </div>
                    <div className="bg-pdf-aluminum border border-pdf-seam h-32 rounded-lg p-4">
                      <div className="w-1/3 h-4 bg-pdf-seam rounded mb-4"></div>
                      <div className="w-full h-2 bg-pdf-aluminum rounded mb-2"></div>
                      <div className="w-full h-2 bg-pdf-aluminum rounded mb-2"></div>
                      <div className="w-2/3 h-2 bg-pdf-aluminum rounded"></div>
                    </div>
                 </div>
              </div>
            </div>
          )}
        </div>

        {/* OS Bottom: Windows Taskbar */}
        <div className="h-10 bg-pdf-leather w-full shrink-0 flex items-center px-2 justify-between z-30 ring-1 ring-black/50">
           <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center text-blue-400 text-[10px]">W</div>
             <div className="w-6 h-6 rounded bg-pdf-leather"></div>
             <div className="w-6 h-6 rounded bg-pdf-leather border-b-2 border-blue-400 shadow-sm"></div>
           </div>
           <div className="flex gap-3 text-[8px] text-pdf-focus font-mono items-center">
             <span>ENG</span>
             <div className="flex flex-col items-end leading-tight">
               <span>12:00 PM</span>
               <span>2024-05-23</span>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
