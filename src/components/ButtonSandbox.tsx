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
    <div className="pdf-panel">
      <div className="pdf-panel-header pdf-flex-row pdf-justify-between pdf-items-center">
        <div>
          <span className="pdf-text-label-14-mono pdf-text-red pdf-mb-100" style={{ display: 'block', fontWeight: 'bold' }}>
            CH.5 INTERACTIVE SANDBOX
          </span>
          <h4 className="pdf-text-label-16" style={{ fontWeight: 'bold' }}>
            초정밀 햅틱 버튼 및 형태 모핑(Shape Morphing) 조율기
          </h4>
        </div>
        <Smartphone className="pdf-text-muted" style={{ width: 16, height: 16 }} />
      </div>

      <p className="pdf-text-copy-14 pdf-text-muted pdf-mb-300">
        <strong>마우스 호버(Hover) 및 터치 가압(Pressed)</strong> 시점에 원형에서 사각형으로 기하학적 융기 속도를 변조하는 형태 모핑 스펙입니다. <strong className="pdf-text-red">과녁 보조선 표시</strong>를 활성화하면, XS 및 S 소형 버튼 주변으로 가설되는 스마트 가상 터치 영역(Fitts&apos;s Law 48&times;48dp)을 투시 측정할 수 있습니다.
      </p>

      {/* Button Controller toolbar */}
      <div className="pdf-flex-row pdf-items-center pdf-justify-between pdf-gap-150 pdf-bg-secondary pdf-p-150 pdf-border pdf-mb-300" style={{ borderRadius: 8 }}>
        <div className="pdf-flex-row pdf-items-center pdf-gap-100">
          <button 
            onClick={() => setShowTargets(!showTargets)}
            className="pdf-secondary-btn"
          >
            {showTargets ? <EyeOff style={{ width: 14, height: 14, color: 'var(--color-functional-red)' }} /> : <Eye style={{ width: 14, height: 14 }} />}
            터치 과녁 보조선 {showTargets ? '숨기기' : '켜기 (48dp 가이드)'}
          </button>
        </div>

        <div className="pdf-text-label-14-mono pdf-text-muted" style={{ fontSize: '11px' }}>
          {clickCount > 0 ? (
            <span>
              최근 격발: <strong className="pdf-text-red">{lastSizeClicked}</strong> (누적 가압: {clickCount}회)
            </span>
          ) : (
            <span>아래 물리 모델들을 클릭 또는 터치해보세요.</span>
          )}
        </div>
      </div>

      <div className="pdf-flex-col pdf-gap-300">
        {buttonConfigs.map((cfg) => {
          return (
            <div 
              key={cfg.size}
              className="pdf-flex-row pdf-items-center pdf-justify-between pdf-border-bottom pdf-pb-200"
              style={{ flexWrap: 'wrap', gap: '16px' }}
            >
              <div className="pdf-font-mono" style={{ flex: '1 1 20%', minWidth: '120px' }}>
                <span className="pdf-text-copy-14" style={{ fontWeight: 'bold', display: 'block' }}>{cfg.size}</span>
                <span className="pdf-text-muted" style={{ fontSize: '10px', display: 'block' }}>표준 높이: {cfg.height} | Padding: {cfg.padding}</span>
              </div>

              {/* Outer Wrapper for Target testing */}
              <div className="pdf-flex-row pdf-items-center pdf-justify-center pdf-border" style={{ flex: '1 1 40%', minHeight: '72px', backgroundColor: 'var(--color-bg-secondary)', borderRadius: 8, position: 'relative', overflow: 'hidden' }}>
                {/* 48x48dp Bounding target line overlay */}
                {showTargets && (cfg.height === '32px' || cfg.height === '40px') && (
                  <div style={{ position: 'absolute', width: '48px', height: '48px', border: '1px dashed var(--color-functional-red)', opacity: 0.6, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>
                    <span style={{ position: 'absolute', top: '-14px', fontSize: '8px', fontFamily: 'var(--font-mono)', color: 'var(--color-functional-red)', backgroundColor: 'var(--color-bg-primary)', padding: '0 4px', fontWeight: 'bold' }}>48&times;48px TARGET</span>
                  </div>
                )}

                {/* The Morphing Button using Motion */}
                <motion.button
                  onClick={() => handleButtonClick(cfg.size)}
                  className="pdf-font-sans"
                  style={{
                    height: cfg.height,
                    padding: cfg.padding,
                    borderRadius: cfg.restRadius,
                    backgroundColor: 'var(--color-functional-red)',
                    color: 'var(--color-bg-primary)',
                    fontSize: '12px',
                    fontWeight: 500,
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    zIndex: 10
                  }}
                  whileHover={{
                    borderRadius: `${cfg.hoverRadius}px`,
                    backgroundColor: 'var(--color-red-hover)',
                  }}
                  whileTap={{
                    borderRadius: `${cfg.pressedRadius}px`,
                    backgroundColor: 'var(--color-red-active)'
                  }}
                  transition={{
                    borderRadius: { ease: [0.4, 0, 0.2, 1], duration: 0.28 },
                    backgroundColor: { ease: "easeOut", duration: 0.2 }
                  }}
                >
                  <Zap style={{ width: 12, height: 12, color: 'var(--color-functional-red)', filter: 'brightness(1.5)' }} />
                  {cfg.label}
                </motion.button>
              </div>

              {/* Dynamic Formula Specs details */}
              <div className="pdf-font-mono pdf-bg-secondary pdf-p-100" style={{ flex: '1 1 30%', borderRadius: 4, fontSize: '9px', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div className="pdf-flex-row pdf-justify-between">
                  <span>Rest 코너 반경:</span>
                  <span style={{ color: 'var(--color-text-primary)', fontWeight: 'bold' }}>{cfg.restRadius === 9999 ? 'Fully Rounded (원형)' : `${cfg.restRadius}px`}</span>
                </div>
                <div className="pdf-flex-row pdf-justify-between">
                  <span>Hover 코너 반경:</span>
                  <span style={{ color: 'var(--color-functional-red)', fontWeight: 'bold' }}>{cfg.hoverRadius}px (Soft Square)</span>
                </div>
                <div className="pdf-flex-row pdf-justify-between">
                  <span>Pressed 코너 반경:</span>
                  <span style={{ color: 'var(--color-text-primary)', fontWeight: 'bold' }}>{cfg.pressedRadius}px (Sharp Square)</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
