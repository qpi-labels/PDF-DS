import React from 'react';

export default function GoldenRatioSandbox() {
  return (
    <div className="bg-pdf-aluminum border border-pdf-seam p-4 shrink-0 rounded-lg my-8 flex flex-col justify-center overflow-hidden relative shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="font-mono text-xs tracking-wider text-pdf-red font-bold uppercase block">
            CH.5 BLUEPRINT FORMAT
          </span>
          <h4 className="font-sans text-base font-semibold text-pdf-leather mt-1">
            38:62 비대칭 황금 분할 (Asymmetric Golden Ratio)
          </h4>
        </div>
      </div>

      {/* 16:9 윈도우 모니터 프레임 */}
      <div className="mx-auto w-full max-w-4xl aspect-video bg-pdf-leather rounded-md border-[6px] border-pdf-focus shadow-xl overflow-hidden flex flex-col relative transition-all duration-500">
        
        {/* OS Top: Browser Tabs & URL Bar */}
        <div className="bg-pdf-seam w-full shrink-0 flex flex-col">
          {/* Tabs */}
          <div className="flex items-end h-8 px-2 gap-1 pt-2 bg-pdf-seam">
            <div className="w-32 h-full bg-pdf-aluminum rounded-t-md flex items-center px-2 text-[8px] font-sans text-pdf-leather">
              PDF-DS System
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
              https://pdf-ds.system/
            </div>
          </div>
        </div>

        {/* Website Content Area */}
        <div className="flex-1 bg-pdf-aluminum relative overflow-hidden flex transition-all duration-500">
            
          {/* PDF-DS LAYOUT */}
          <div className="w-full flex-1 flex relative animate-fade-in">
            {/* PDF-DS LEFT 38% */}
            <div className="w-[38%] bg-pdf-aluminum border-r border-pdf-focus h-full flex flex-col relative group">
              {/* Overlay Annotation */}
              <div className="absolute inset-0 bg-pdf-red/5 border-2 border-pdf-red/50 z-20 flex flex-col items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-pdf-red text-pdf-aluminum font-mono font-bold text-xs px-3 py-1.5 rounded shadow-lg">
                  38% CONTROL PANEL
                </div>
                <div className="text-[10px] text-pdf-red font-bold bg-pdf-aluminum/90 px-2 mt-2 rounded border border-pdf-red">
                  Geist Mono / #F4F4F5 / Fixed
                </div>
              </div>

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
                  <div className="w-full h-24 bg-pdf-aluminum border border-pdf-seam rounded-sm mt-2 flex flex-col gap-2 p-3 text-[8px] text-pdf-focus font-mono">
                    [SYSTEM_METADATA_BLOCK]
                    <div className="w-3/4 h-1.5 bg-pdf-seam mt-1"></div>
                    <div className="w-1/2 h-1.5 bg-pdf-seam mt-1"></div>
                    <div className="w-2/3 h-1.5 bg-pdf-seam mt-1"></div>
                  </div>
                    <div className="mt-auto pt-4">
                    <div className="w-full h-10 rounded-full bg-pdf-red flex items-center justify-center overflow-hidden">
                      <div className="w-4 h-4 bg-pdf-aluminum/20 rounded-full mr-2"></div>
                      <span className="text-pdf-aluminum text-[9px] font-bold tracking-wider">PRIMARY ACTION</span>
                    </div>
                  </div>
              </div>
            </div>

            {/* PDF-DS RIGHT 62% */}
            <div className="w-[62%] h-full bg-pdf-aluminum flex flex-col border-l border-pdf-seam/50 relative group">
              {/* Overlay Annotation */}
              <div className="absolute inset-0 bg-blue-700/5 border-2 border-blue-500/50 z-20 flex flex-col items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-blue-700 text-pdf-aluminum font-mono font-bold text-xs px-3 py-1.5 rounded shadow-lg">
                  62% CONTENT CANVAS
                </div>
                <div className="text-[10px] text-blue-700 font-bold bg-pdf-aluminum/90 px-2 mt-2 rounded border border-blue-200">
                  Pretendard / #FFFFFF / Scrollable
                </div>
              </div>

                {/* 62 Canvas Header */}
                <div className="h-14 flex items-center px-8 shrink-0 justify-end border-b border-pdf-seam">
                  <span className="text-[9px] font-mono text-pdf-focus">DATA CANVAS VIEW</span>
                </div>
                {/* 62 Canvas Body */}
                <div className="flex-1 p-8 grid grid-cols-2 gap-4">
                  <div className="col-span-2 h-12 flex items-center border-b border-pdf-seam">
                    <div className="w-48 h-6 bg-pdf-seam rounded"></div>
                  </div>
                  <div className="bg-pdf-aluminum border border-pdf-seam shadow-sm h-32 rounded-lg p-4 flex flex-col relative overflow-hidden">
                    <div className="w-1/3 h-4 bg-pdf-seam rounded mb-4"></div>
                    <div className="w-full border-b border-pdf-seam my-2"></div>
                    <div className="w-full h-2 bg-pdf-aluminum rounded mb-2"></div>
                    <div className="w-full h-2 bg-pdf-aluminum rounded mb-2"></div>
                    <div className="w-2/3 h-2 bg-pdf-aluminum rounded"></div>
                  </div>
                  <div className="bg-pdf-aluminum border border-pdf-seam shadow-sm h-32 rounded-lg p-4 flex flex-col relative overflow-hidden">
                    <div className="w-1/3 h-4 bg-pdf-seam rounded mb-4"></div>
                    <div className="w-full border-b border-pdf-seam my-2"></div>
                    <div className="w-full h-2 bg-pdf-aluminum rounded mb-2"></div>
                    <div className="w-full h-2 bg-pdf-aluminum rounded mb-2"></div>
                    <div className="w-2/3 h-2 bg-pdf-aluminum rounded"></div>
                  </div>
                </div>
            </div>
          </div>
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
      <p className="text-[10px] text-pdf-focus mt-4 text-center">
        * 마우스를 레이아웃 영역에 호버하여 38:62 정밀 할당 영역을 확인하세요.
      </p>
    </div>
  );
}
