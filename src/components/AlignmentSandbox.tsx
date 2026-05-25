import React, { useState, useEffect } from 'react';
import { Type, Move, Sliders, CheckSquare, RefreshCw } from 'lucide-react';

export default function AlignmentSandbox() {
  const [opticalOffset, setOpticalOffset] = useState<number>(0);
  const [tabularNumsActive, setTabularNumsActive] = useState<boolean>(true);
  const [metrics, setMetrics] = useState({
    price: 3840200,
    speed: 98.42,
    count: 1420
  });

  // Dynamically update metrics to demonstrate tabular numbers jitter vs stable
  useEffect(() => {
    const timer = setInterval(() => {
      setMetrics((prev) => ({
        price: prev.price + Math.floor((Math.random() - 0.45) * 120),
        speed: Number((prev.speed + (Math.random() - 0.5) * 0.15).toFixed(2)),
        count: prev.count + (Math.random() > 0.5 ? 1 : -1)
      }));
    }, 450);
    return () => clearInterval(timer);
  }, []);

  const handleNudge = (direction: 'up' | 'down') => {
    setOpticalOffset((prev) => {
      const next = direction === 'up' ? prev - 1 : prev + 1;
      return Math.max(-10, Math.min(10, next));
    });
  };

  const resetOffset = () => {
    setOpticalOffset(0);
  };

  return (
    <div className="border border-pdf-seam bg-pdf-aluminum p-6 rounded-lg font-sans my-4 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-pdf-seam">
        <div>
          <span className="font-mono text-xs tracking-wider text-pdf-red font-bold uppercase block">
            CH.3 INTERACTIVE SANBOX
          </span>
          <h4 className="font-sans text-base font-semibold text-pdf-leather">
            정밀 광학 보정(Optical Alignment) & 고정폭 가령(Tabular Numerals)
          </h4>
        </div>
        <Type className="text-pdf-focus w-4 h-4" />
      </div>

      <p className="text-xs text-pdf-focus mb-6 leading-relaxed">
        기하학적 중앙 계산(Geometric Center)이 인간의 실제 안구 인지 상에 어색하게 편향되는 현상을 직접 눈으로 교정할 수 있는 툴입니다. 또한 통계 수치 비교 시 레이아웃 흔들림을 유발하는 가령 떨림 현상과 <strong>tabular-nums</strong> 해결책을 대조하여 확인할 수 있습니다.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* SECTION A: Optical alignment playground */}
        <div className="p-4 bg-pdf-aluminum border border-pdf-seam rounded flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono text-pdf-focus block mb-2">PART A: OPTICAL VS GEOMETRIC NUDGE</span>
            <div className="flex gap-2 mb-3">
              <span className="text-[11px] font-mono text-pdf-focus bg-pdf-seam px-2 py-0.5 rounded">
                미세 보정 값: {opticalOffset}px
              </span>
              {opticalOffset !== 0 && (
                <button 
                  onClick={resetOffset} 
                  className="text-[10px] text-pdf-red hover:underline flex items-center gap-1 font-mono"
                >
                  <RefreshCw className="w-2.5 h-2.5" /> 초기화
                </button>
              )}
            </div>
          </div>

          {/* Interactive Graphic: Showing the Play button with label */}
          <div className="bg-pdf-aluminum border border-pdf-seam p-6 rounded flex flex-col items-center justify-center min-h-[140px] relative">
            <div className="absolute top-1 left-2 text-[8px] font-mono text-pdf-focus">ALIGNMENT TEST STAGE</div>
            
            <div className="flex flex-col items-center gap-4">
              {/* Geometric vs Optical container */}
              <div className="flex items-center gap-6">
                
                {/* 1. Geometric absolute block */}
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-mono text-pdf-focus mb-1">수학적 연산 (오차 방치)</span>
                  <div className="w-24 h-12 bg-pdf-aluminum border border-pdf-seam flex items-center justify-center rounded">
                    {/* Plain geometric layout: icon has standard space. But triangle looks pushed left */}
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 bg-pdf-red text-pdf-aluminum rounded-full flex items-center justify-center text-[10px] font-bold">▶</div>
                      <span className="text-xs font-semibold text-pdf-leather">재생</span>
                    </div>
                  </div>
                </div>

                {/* 2. Interactive user-controlled block */}
                <div className="flex flex-col items-center">
                  <span className="text-[9px] font-mono text-pdf-focus font-bold mb-1">사용자 광학 보정 스테이지</span>
                  <div className="w-24 h-12 bg-pdf-leather border border-pdf-focus flex items-center justify-center rounded">
                    <div className="flex items-center gap-1.5">
                      {/* Triangle icon shifted by the custom state */}
                      <div 
                        className="w-5 h-5 bg-pdf-red text-pdf-aluminum rounded-full flex items-center justify-center text-[9px] font-bold transition-transform shadow-sm"
                        style={{ transform: `translateX(${opticalOffset}px)` }}
                      >
                        ▶
                      </div>
                      <span className="text-xs font-bold text-pdf-aluminum">재생</span>
                    </div>
                  </div>
                </div>

              </div>

              <div className="text-[10px] text-center w-full max-w-[280px] text-pdf-focus font-sans h-8 flex items-center justify-center">
                {opticalOffset === 0 ? (
                  <span className="text-pdf-focus font-medium">우측 재생기 내부 삼각 화살표 아이콘을 좌우로 미조 조정해보세요. (추천 광학 오프셋: <code className="bg-pdf-aluminum text-pdf-leather px-1 border border-pdf-seam rounded font-bold">+1px</code>)</span>
                ) : opticalOffset === 1 ? (
                  <span className="text-pdf-red font-bold">정답! 삼각 아이콘이 물리적 중앙에서 우측으로 1px 이동하여 광학적 안구 균형을 성취했습니다.</span>
                ) : (
                  <span>현재 오프셋: {opticalOffset}px. 화살표의 시각 중력 중심을 맞춰보세요.</span>
                )}
              </div>
            </div>
          </div>

          {/* Action controller buttons */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            <button 
              id="btn-nudge-left"
              onClick={() => handleNudge('up')}
              className="flex items-center justify-center gap-1.5 py-2 px-3 border border-pdf-seam text-xs font-medium rounded bg-pdf-aluminum text-pdf-leather hover:text-pdf-red transition"
            >
              <Move className="w-3.5 h-3.5 rotate-180" /> -1px 오프셋 이동
            </button>
            <button 
              id="btn-nudge-right"
              onClick={() => handleNudge('down')}
              className="flex items-center justify-center gap-1.5 py-2 px-3 border border-pdf-seam text-xs font-medium rounded bg-pdf-aluminum text-pdf-leather hover:text-pdf-red transition"
            >
              <Move className="w-3.5 h-3.5" /> +1px 오프셋 이동
            </button>
          </div>
        </div>

        {/* SECTION B: Tabular Numbers Comparison */}
        <div className="p-4 bg-pdf-aluminum border border-pdf-seam rounded flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-pdf-focus block">PART B: TABULAR VS PROPORTIONAL STATIC NUMS</span>
              <button 
                id="btn-toggle-tabular"
                onClick={() => {
                  setTabularNumsActive(!tabularNumsActive);
                }}
                className={`text-[10px] px-2 py-0.5 rounded font-mono border transition-all ${tabularNumsActive ? 'bg-pdf-red text-pdf-aluminum border-pdf-red' : 'bg-pdf-aluminum text-pdf-focus border-pdf-seam'}`}
              >
                {tabularNumsActive ? 'Tabular 활성' : 'Default Proportional'}
              </button>
            </div>
          </div>

          {/* Live comparison area */}
          <div className="bg-pdf-aluminum border border-pdf-seam p-4 rounded flex flex-col gap-3 min-h-[140px] justify-center">
            
            <div className="grid grid-cols-3 gap-2 border-b border-pdf-seam pb-2">
              <span className="text-[10px] font-mono text-pdf-focus font-bold uppercase">지표 부문</span>
              <span className="text-[10px] font-mono text-pdf-focus font-bold uppercase text-right">기본 가변폭 숫자</span>
              <span className="text-[10px] font-mono text-pdf-leather font-bold uppercase text-right">정밀 고정폭 수치 (tabular)</span>
            </div>

            {/* Static vs tabulared metrics */}
            <div className="space-y-2.5">
              <div className="grid grid-cols-3 items-center">
                <span className="text-xs text-pdf-focus font-sans">시스템 매출액</span>
                {/* Default proportional numbers */}
                <span className="text-xs text-right text-pdf-focus font-sans tracking-tight">
                  ₩{metrics.price.toLocaleString()}
                </span>
                {/* Tabular numbers */}
                <span className="text-xs font-semibold text-right text-pdf-leather font-mono tracking-wide" style={{ fontVariantNumeric: tabularNumsActive ? 'tabular-nums' : 'normal' }}>
                  ₩{metrics.price.toLocaleString()}
                </span>
              </div>

              <div className="grid grid-cols-3 items-center">
                <span className="text-xs text-pdf-focus font-sans">코어 가압 인덱스</span>
                <span className="text-xs text-right text-pdf-focus font-sans">
                  {metrics.speed} m/s
                </span>
                <span className="text-xs font-semibold text-right text-pdf-leather font-mono" style={{ fontVariantNumeric: tabularNumsActive ? 'tabular-nums' : 'normal' }}>
                  {metrics.speed} m/s
                </span>
              </div>

              <div className="grid grid-cols-3 items-center">
                <span className="text-xs text-pdf-focus font-sans">누적 제어량</span>
                <span className="text-xs text-right text-pdf-focus font-sans">
                  {metrics.count} hps
                </span>
                <span className="text-xs font-semibold text-right text-pdf-leather font-mono" style={{ fontVariantNumeric: tabularNumsActive ? 'tabular-nums' : 'normal' }}>
                  {metrics.count} hps
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 text-[10px] leading-relaxed text-pdf-focus">
            {tabularNumsActive ? (
              <p className="text-pdf-red font-semibold bg-pdf-aluminum p-2 rounded">
                ✓ <strong>tabular-nums</strong> 속성을 통과시키고 있습니다. 숫자 1과 8의 가로폭이 완벽히 대칭되므로, 실시간 통계가 폭동할 때 레이아웃 열이 미세하게 좌우로 진동하며 눈의 피로를 유발하는 떨림이 일절 관측되지 않습니다.
              </p>
            ) : (
              <p className="text-pdf-focus bg-pdf-aluminum p-2 rounded">
                 <strong>proportional-nums</strong> 상태입니다. 숫자가 변경될 때 전체 문자열의 너비가 동적으로 요동쳐 레이아웃을 좌우로 교란합니다.
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
