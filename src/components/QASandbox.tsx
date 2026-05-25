import React, { useState } from 'react';
import { ClipboardCheck, Sparkles, CheckSquare, Square } from 'lucide-react';
import { QACheckItem } from '../types';

export default function QASandbox() {
  const [items, setItems] = useState<QACheckItem[]>([
    { id: '1', category: 'SPACING', label: '하드코딩 배제: 모든 픽셀 간격 값을 제거하고 $space- 토큰 지휘권 하에 배속했는가?', checked: true },
    { id: '2', category: 'GRID', label: '그리드 강제: 청사진 그리드가 1px 두께 및 투명도 10%~20% 임계 내부에서 은은히 렌더링되는가?', checked: true },
    { id: '3', category: 'BUTTONS', label: '터치 유격: XS, S 버튼의 시각 크기와 별개로, 48×48px의 가상 충돌 영역을 가설했는가?', checked: false },
    { id: '4', category: 'COLOR', label: '레드 제한: 펑셔널 레드가 한 화면에 3개 단위를 초과하지 않으며, 텍스트 이중 수호막을 덧댔는가?', checked: false },
    { id: '5', category: 'TEXT', label: '200% 팽창 보전: 서체를 배율 200%로 강제 팽창시 레이어 이탈이나 잘림 없이 유동적인 변조가 흐르는가?', checked: false },
  ]);

  const toggleCheck = (id: string) => {
    setItems((prev) => 
      prev.map((item) => {
        if (item.id === id) {
          const nextChecked = !item.checked;
          return { ...item, checked: nextChecked };
        }
        return item;
      })
    );
  };

  const completedCount = items.filter(item => item.checked).length;
  const score = completedCount * 20;

  const getSlogan = (s: number) => {
    if (s === 100) return { title: 'PERFECTION (시스템 승인 결함 제로)', desc: '피지컬 하드웨어와 아크로매틱 디지털이 완벽하게 융합된 무결점 명세 상태입니다.', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (s >= 60) return { title: 'APPROVED (표준 가이드 준수)', desc: '모바일 및 저시력 접근성을 충분히 대비한 양질의 릴리즈 승인 규격입니다.', color: 'text-pdf-leather bg-pdf-aluminum border-pdf-seam' };
    return { title: 'CRITICAL WARNING (실격 및 보류)', desc: '사용자 포인팅 유실 우려 및 접근성 규격 누락이 관측됩니다. 신속히 보정하세요.', color: 'text-pdf-red bg-pdf-aluminum border-pdf-red' };
  };

  const slogan = getSlogan(score);

  return (
    <div className="border border-pdf-seam bg-pdf-aluminum p-6 rounded-lg font-sans my-4 shadow-sm">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-pdf-seam">
        <div>
          <span className="font-mono text-xs tracking-wider text-pdf-red font-bold uppercase block">
            CH.8 INTERACTIVE SANBOX
          </span>
          <h4 className="font-sans text-base font-semibold text-pdf-leather">
            실시간 디자인 검수(QA) 규칙성 자가 채점기
          </h4>
        </div>
        <ClipboardCheck className="text-pdf-focus w-4 h-4" />
      </div>

      <p className="text-xs text-pdf-focus mb-6 leading-relaxed">
        PDF-DS 릴리즈 자격을 획득하기 위한 <strong>5대 물리 검수 강제 수칙</strong>입니다. 항목을 조작하면 감도 지수에 따른 실시간 무결 상태 점수(Compliance Score)가 반영됩니다.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* CHECKLIST LIST */}
        <div className="lg:col-span-7 space-y-2">
          {items.map((item) => (
            <div 
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-all ${item.checked ? 'border-pdf-focus bg-pdf-aluminum/50' : 'border-pdf-seam hover:bg-pdf-aluminum/30'}`}
            >
              <button className="text-pdf-red mt-0.5 shrink-0 focus:outline-none">
                {item.checked ? (
                  <CheckSquare className="w-4 h-4" />
                ) : (
                  <Square className="w-4 h-4 text-pdf-focus" />
                )}
              </button>
              <div>
                <span className="text-[9px] font-mono text-pdf-red bg-pdf-aluminum px-1 font-bold rounded">
                  {item.category}
                </span>
                <p className="text-xs text-pdf-leather font-medium mt-1 leading-normal">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* COMPLIANCE RADIAL/LINEAR SCOREGUARD METER */}
        <div className="lg:col-span-5 border border-pdf-seam rounded p-4 flex flex-col items-center justify-between bg-pdf-aluminum min-h-[220px]">
          <div className="text-center w-full">
            <span className="text-[10px] font-mono text-pdf-focus block mb-3">SYSTEM COMPLIANCE SCORE</span>
            
            {/* Elegant physical battery/gauge graphic */}
            <div className="flex items-center justify-center gap-1.5 w-full px-4 mb-4">
              {[20, 40, 60, 80, 100].map((t) => (
                <div 
                  key={t}
                  className={`h-8 flex-1 rounded-sm border transition-all duration-300 ${score >= t ? 'bg-pdf-red border-pdf-red' : 'bg-pdf-seam border-pdf-focus'}`}
                />
              ))}
            </div>

            <div className="font-mono text-3xl font-extrabold text-pdf-leather flex items-center justify-center gap-1">
              {score}
              <span className="text-sm font-normal text-pdf-focus">/ 100%</span>
            </div>
          </div>

          {/* Dynamic feedback notice */}
          <div className={`border p-3 rounded text-center w-full transition-all duration-300 ${slogan.color}`}>
            <span className="text-[10px] font-mono font-bold block mb-1 uppercase tracking-wider">
              {slogan.title}
            </span>
            <p className="text-[10px] font-sans leading-normal">
              {slogan.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
