import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Zap, Eye, EyeOff } from 'lucide-react';

export default function ButtonSandbox() {
  const [showTargets, setShowTargets] = useState<boolean>(true);
  const [clickCount, setClickCount] = useState<number>(0);
  const [lastSizeClicked, setLastSizeClicked] = useState<string>('');

  const buttonConfigs = [
    { size: 'XS (초소형)', height: '32px', padding: '0 8px', icon: 16, restRadius: 9999, hoverRadius: 8, pressedRadius: 4, label: 'Secondary Action' },
    { size: 'S (소형-표준)', height: '40px', padding: '0 12px', icon: 20, restRadius: 9999, hoverRadius: 12, pressedRadius: 8, label: 'Default Tactile' },
    { size: 'M (중형)', height: '44px', padding: '0 16px', icon: 20, restRadius: 9999, hoverRadius: 16, pressedRadius: 12, label: 'Control Switch' },
    { size: 'L (대형)', height: '48px', padding: '0 24px', icon: 24, restRadius: 9999, hoverRadius: 28, pressedRadius: 16, label: 'Primary System' },
    { size: 'XL (초대형)', height: '56px', padding: '0 32px', icon: 24, restRadius: 9999, hoverRadius: 28, pressedRadius: 16, label: 'Launch Module' },
  ];

  const handleButtonClick = (sizeName: string) => {
    setClickCount(prev => prev + 1);
    setLastSizeClicked(sizeName);
  };

  return (
    <div className="border border-pdf-seam bg-pdf-aluminum p-6 rounded-lg font-sans my-4 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-pdf-seam">
        <div>
          <span className="font-mono text-xs tracking-wider text-pdf-red font-bold uppercase block">
            CH.5 INTERACTIVE SANBOX
          </span>
          <h4 className="font-sans text-base font-semibold text-pdf-leather">
            초정밀 햅틱 버튼 및 형태 모핑(Shape Morphing) 조율기
          </h4>
        </div>
        <Smartphone className="text-pdf-focus w-4 h-4" />
      </div>

      <p className="text-xs text-pdf-focus mb-6 leading-relaxed">
        <strong>마우스 호버(Hover) 및 터치 가압(Pressed)</strong> 시점에 원형에서 사각형으로 기하학적 융기 속도를 변조하는 형태 모핑 스펙입니다. <strong className="text-pdf-red">과녁 보조선 표시</strong>를 활성화하면, XS 및 S 소형 버튼 주변으로 가설되는 스마트 가상 터치 영역(Fitts&apos;s Law 48&times;48dp)을 투시 측정할 수 있습니다.
      </p>

      {/* Button Controller toolbar */}
      <div className="flex items-center justify-between gap-4 mb-6 bg-pdf-aluminum p-3 rounded-lg border border-pdf-seam">
        <div className="flex items-center gap-2">
          <button 
            id="btn-toggle-targets"
            onClick={() => {
              setShowTargets(!showTargets);
            }}
            className="flex items-center gap-1.5 py-1.5 px-3 border border-pdf-seam bg-pdf-aluminum hover:bg-pdf-aluminum rounded text-xs font-mono text-pdf-leather font-medium active:scale-95"
          >
            {showTargets ? <EyeOff className="w-3.5 h-3.5 text-pdf-red" /> : <Eye className="w-3.5 h-3.5" />}
            터치 과녁 보조선 {showTargets ? '숨기기' : '켜기 (48dp 가이드)'}
          </button>
        </div>

        <div className="font-mono text-[11px] text-pdf-focus">
          {clickCount > 0 ? (
            <span>
              최근 격발: <strong className="text-pdf-red">{lastSizeClicked}</strong> (누적 가압: {clickCount}회)
            </span>
          ) : (
            <span>아래 물리 모델들을 클릭 또는 터치해보세요.</span>
          )}
        </div>
      </div>

      <div className="space-y-6">
        {buttonConfigs.map((cfg) => {
          return (
            <div 
              key={cfg.size}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center border-b border-pdf-seam pb-4 last:border-0 last:pb-0"
            >
              <div className="md:col-span-3 font-mono">
                <span className="text-xs font-bold text-pdf-leather block">{cfg.size}</span>
                <span className="text-[10px] text-pdf-focus block">표준 높이: {cfg.height} | Padding: {cfg.padding}</span>
              </div>

              {/* Outer Wrapper for Target testing */}
              <div className="md:col-span-5 flex items-center justify-center min-h-[72px] bg-pdf-aluminum/50 rounded-lg relative overflow-hidden border border-pdf-seam">
                {/* 48x48dp Bounding target line overlay */}
                {showTargets && (cfg.height === '32px' || cfg.height === '40px') && (
                  <div className="absolute w-[48px] h-[48px] border border-dashed border-pdf-red/60 flex items-center justify-center rounded">
                    <span className="absolute -top-3.5 text-[8px] font-mono text-pdf-red bg-pdf-aluminum px-1 font-bold">48&times;48px TARGET ZONE</span>
                  </div>
                )}

                {/* The Morphing Button using Motion (framer-motion v12 via motion/react) */}
                <motion.button
                  id={`morph-btn-${cfg.size.split(' ')[0].toLowerCase()}`}
                  onClick={() => handleButtonClick(cfg.size)}
                  className="bg-pdf-red text-pdf-aluminum font-sans text-xs font-medium focus:outline-none focus:ring-2 focus:ring-pdf-focus border-none transition-colors cursor-pointer shrink-0"
                  style={{
                    height: cfg.height,
                    padding: cfg.padding,
                    borderRadius: cfg.restRadius,
                  }}
                  whileHover={{
                    borderRadius: `${cfg.hoverRadius}px`,
                    backgroundColor: '#c21f1f',
                  }}
                  whileTap={{
                    borderRadius: `${cfg.pressedRadius}px`,
                    backgroundColor: '#941a1a',
                    scale: 0.97
                  }}
                  transition={{
                    borderRadius: { type: 'spring', damping: 10, stiffness: 220 },
                    backgroundColor: { duration: 0.15 }
                  }}
                >
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-pdf-red" />
                    {cfg.label}
                  </span>
                </motion.button>
              </div>

              {/* Dynamic Formula Specs details */}
              <div className="md:col-span-4 font-mono text-[9px] text-pdf-focus space-y-1 bg-pdf-aluminum p-2 rounded">
                <div className="flex justify-between">
                  <span>Rest 코너 반경:</span>
                  <span className="text-pdf-leather font-bold">{cfg.restRadius === 9999 ? 'Fully Rounded (원형)' : `${cfg.restRadius}px`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Hover 코너 반경:</span>
                  <span className="text-pdf-red font-bold">{cfg.hoverRadius}px (Soft Square)</span>
                </div>
                <div className="flex justify-between">
                  <span>Pressed 코너 반경:</span>
                  <span className="text-pdf-leather font-bold">{cfg.pressedRadius}px (Sharp Square)</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
