import React, { useState } from 'react';
import { Palette, Copy, Check, Moon, Sun } from 'lucide-react';
import { ColorToken } from '../types';

export default function ColorSandbox() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const colors: (ColorToken & { darkHex: string })[] = [
    { token: '$color-bg-primary', hex: '#ffffff', darkHex: '#09090B', layer: '메인 화폭', rule: '디폴트 상태의 메인 캔버스 극단 대비' },
    { token: '$color-bg-secondary', hex: '#F4F4F5', darkHex: '#18181B', layer: '구획 분할면', rule: '인접한 패널 간 시각적 명도 격리' },
    { token: '$color-border-default', hex: '#E4E4E7', darkHex: '#27272A', layer: '모서리 선', rule: '일반 상태 1px 경계선, 정직한 구획 분할' },
    { token: '$color-border-hover', hex: '#A1A1AA', darkHex: '#52525B', layer: '포커스 선', rule: '호버 구역 1차 시각 피드백 명도' },
    { token: '$color-text-primary', hex: '#09090B', darkHex: '#FAFAFA', layer: '주 서식', rule: '초고대비의 완벽한 폰트 인지 대비 확보' },
    { token: '$color-text-secondary', hex: '#71717A', darkHex: '#A1A1AA', layer: '설명서 및 기호', rule: '설명 단락, 부가 수치 단위 레이블' },
    { token: '$color-functional-red', hex: '#AD1D1D', darkHex: '#DC2626', layer: '전략 액센트 적색', rule: '역사적 하드웨어 가압 적색 계승 및 상태 환기' },
  ];

  const triggerCopy = (hex: string, tokenName: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedToken(tokenName);
    setTimeout(() => {
      setCopiedToken(null);
    }, 1500);
  };

  const getDisplayColor = (color: typeof colors[0]): string => {
    return theme === 'light' ? color.hex : color.darkHex;
  };
  
  const getSimulatedBg = () => theme === 'light' ? '#ffffff' : '#09090B';
  const getSimulatedText = () => theme === 'light' ? '#09090B' : '#FAFAFA';

  return (
    <div className="border border-pdf-seam bg-pdf-aluminum p-6 rounded-lg font-sans my-4 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-pdf-seam">
        <div>
          <span className="font-mono text-xs tracking-wider text-pdf-red font-bold uppercase block">
            CH.4 INTERACTIVE SANBOX
          </span>
          <h4 className="font-sans text-base font-semibold text-pdf-leather">
            아크로매틱 컬러 & 테마 시뮬레이터 (Light & Dark Mode)
          </h4>
        </div>
        <Palette className="text-pdf-focus w-4 h-4" />
      </div>

      <p className="text-xs text-pdf-focus mb-6 leading-relaxed">
        PDF-DS는 복잡한 그라디언트를 배제하고 <strong>완벽한 모노크롬 대비(Achromatic Scale)</strong>와 오직 하나의 펑셔널 레드로만 구성됩니다. 우측 상단의 테마를 전환하여, 두 극단(White & Black)의 완벽한 반전 균형을 검측하십시오.
      </p>

      {/* Simulator mode controller buttons */}
      <div className="flex gap-2 mb-4 bg-pdf-aluminum p-1.5 rounded-lg border border-pdf-seam w-full sm:max-w-xs">
        <button
          onClick={() => { setTheme('light'); }}
          className={`flex items-center justify-center gap-1.5 text-[11px] font-semibold py-1.5 px-3 rounded font-mono transition-all flex-1 ${theme === 'light' ? 'bg-pdf-aluminum text-pdf-leather shadow-xs ring-1 ring-pdf-seam' : 'text-pdf-focus hover:text-pdf-leather'}`}
        >
          <Sun className="w-3.5 h-3.5" /> Light Theme
        </button>
        <button
          onClick={() => { setTheme('dark'); }}
          className={`flex items-center justify-center gap-1.5 text-[11px] font-semibold py-1.5 px-3 rounded font-mono transition-all flex-1 ${theme === 'dark' ? 'bg-[#09090B] text-[#FAFAFA] shadow-xs' : 'text-pdf-focus hover:text-pdf-leather'}`}
        >
          <Moon className="w-3.5 h-3.5" /> Dark Theme
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative p-4 rounded-xl border border-pdf-seam shadow-inner" style={{ backgroundColor: getSimulatedBg(), transition: 'background-color 0.3s' }}>
        
        {/* SWATCH PANEL LIST */}
        <div className="md:col-span-7 flex flex-col gap-2">
          {colors.map((color) => {
            const displayColor = getDisplayColor(color);
            return (
              <div 
                key={color.token}
                className="flex items-center justify-between p-2.5 rounded-lg transition-colors border"
                style={{ borderColor: getDisplayColor(colors[2]), backgroundColor: theme === 'light' ? '#ffffff' : '#18181B' }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded border shadow-inner transition-all duration-300"
                    style={{ backgroundColor: displayColor, borderColor: getDisplayColor(colors[3]) }}
                  />
                  <div>
                    <span className="text-[11px] font-mono font-bold block" style={{ color: getSimulatedText() }}>{color.token}</span>
                    <span className="text-[9px] font-mono block" style={{ color: getDisplayColor(colors[5]) }}>{color.layer} — {displayColor}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] max-w-[140px] text-right font-sans hidden sm:block" style={{ color: getDisplayColor(colors[5]) }}>
                    {color.rule}
                  </span>
                  <button
                    onClick={() => triggerCopy(displayColor, color.token)}
                    className="p-1.5 rounded transition-colors"
                    style={{ color: getDisplayColor(colors[5]) }}
                    title="Hex 코드 복사"
                  >
                    {copiedToken === color.token ? (
                      <Check className="w-3.5 h-3.5" style={{ color: getDisplayColor(colors[6]) }} />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CONTRAST WARNING SYSTEM DEMONSTRATOR */}
        <div className="md:col-span-5 rounded p-4 flex flex-col justify-between border" style={{ backgroundColor: getDisplayColor(colors[1]), borderColor: getDisplayColor(colors[2]) }}>
          <div>
            <span className="text-[10px] font-mono block mb-2 font-bold" style={{ color: getDisplayColor(colors[5]) }}>PART B: DOUBLE SAFE-GUARD</span>
            <div className="border p-4 rounded-lg shadow-sm" style={{ backgroundColor: getSimulatedBg(), borderColor: getDisplayColor(colors[2]) }}>
              
              <div 
                className="border p-3 rounded mb-4 transition-colors duration-300"
                style={{ 
                  backgroundColor: theme === 'light' ? '#FEF2F2' : '#7F1D1D20',
                  borderColor: theme === 'light' ? '#FEE2E2' : '#7F1D1D80'
                }}
              >
                <div className="flex gap-2 items-start">
                  <div 
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-pdf-aluminum shrink-0"
                    style={{ backgroundColor: getDisplayColor(colors[6]) }}
                  >
                    !
                  </div>
                  <div>
                    <span 
                      className="text-xs font-bold block transition-colors"
                      style={{ color: getDisplayColor(colors[6]) }}
                    >
                      실패: 검증 연산 누락
                    </span>
                    <p className="text-[10px] font-sans mt-1 leading-normal transition-colors" style={{ color: theme === 'light' ? '#52525B' : '#A1A1AA' }}>
                      데이터베이스와 실시간 소켓 바운딩 터널이 끊겼습니다. 네트워크 라우트 세팅값을 지금 바로 점검하세요.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-[10px] leading-relaxed gap-1 flex flex-col" style={{ color: getDisplayColor(colors[5]) }}>
                <span className="font-bold" style={{ color: getSimulatedText() }}>완벽한 반전 균형 (Light & Dark):</span>
                <span>
                  시스템은 밝은 테마와 어두운 테마 환경에서 <strong>완벽한 1:1 대칭 명도</strong>를 유지합니다. 가장 순수한 흑과 백의 대비를 통해, 사용자는 어떠한 환경 설정에서도 콘텐츠 유실 없이 완벽한 정밀도로 작업을 계속할 수 있습니다.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
