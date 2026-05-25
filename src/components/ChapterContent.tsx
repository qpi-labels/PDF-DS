import React from 'react';
import { Compass, Ruler, Type, Palette, Columns } from 'lucide-react';

// Import our custom interactive sandboxes (AudioSandbox was removed)
import GridSandbox from './GridSandbox';
import AlignmentSandbox from './AlignmentSandbox';
import TypographySandbox from './TypographySandbox';
import LayoutComparisonSandbox from './LayoutComparisonSandbox';
import GoldenRatioSandbox from './GoldenRatioSandbox';
import ColorSandbox from './ColorSandbox';
import ButtonSandbox from './ButtonSandbox';
import SplitSandbox from './SplitSandbox';
import CodeExport from './CodeExport';
import QASandbox from './QASandbox';

interface ChapterProps {
  activeChapter: number;
}

export default function ChapterContent({ activeChapter }: ChapterProps) {
  return (
    <div className={`space-y-12 transition-all duration-300 text-sm`}>
      
      {/* CHAPTER 1 */}
      {activeChapter === 1 && (
        <section id="ch-1" className="scroll-mt-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-pdf-aluminum text-pdf-red p-2 rounded-lg border border-pdf-red shrink-0">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-xs tracking-widest text-pdf-focus block uppercase">SECTION 01</span>
              <h2 className="font-sans text-xl md:text-2xl font-black text-pdf-leather tracking-tight">
                서론: 두 세계의 융합 (The Core Philosophy)
              </h2>
            </div>
          </div>

          <div className="relative w-full aspect-video md:aspect-[21/9] bg-pdf-aluminum border border-pdf-seam rounded-xl overflow-hidden mb-8 flex items-center justify-center p-8 group">
            {/* Grid Background */}
            <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(9, 9, 11, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(9, 9, 11, 0.05) 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
            
            {/* Displaying Headphone image */}
            <img 
              src="https://soundium.com/cdn/shop/files/7a541ce0-049a-4afa-9809-ddded0f3376d.png?v=1745829736&width=1946" 
              alt="B&W Headphones Material Design" 
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105" 
            />
            
            {/* Material Annotations */}
            <div className="absolute top-4 left-4 z-20">
              <span className="font-mono text-[9px] font-bold text-pdf-focus tracking-widest uppercase">Design Inspiration</span>
              <h3 className="font-sans text-sm font-bold text-pdf-leather mt-1">Bowers & Wilkins Form Factor</h3>
            </div>
            
            {/* Material Callouts */}
            <div className="absolute top-1/4 left-1/4 z-20 flex items-center gap-2 pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-pdf-red animate-pulse"></div>
              <span className="font-mono text-[9px] font-bold text-pdf-focus bg-pdf-aluminum/90 px-1.5 py-0.5 border border-pdf-seam">Fabric & Nappa Leather</span>
            </div>
            <div className="absolute bottom-1/4 right-1/4 z-20 flex items-center gap-2 pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-pdf-leather animate-pulse"></div>
              <span className="font-mono text-[9px] font-bold text-pdf-focus bg-pdf-aluminum/90 px-1.5 py-0.5 border border-pdf-seam">Metal & Polymer Transitions</span>
            </div>
          </div>

          <div className="prose max-w-none text-pdf-leather leading-relaxed space-y-4">
            <p>
              현대 하드웨어 디자인이 예술로 추앙받는 이유는 단순히 값비싼 소재를 써서가 아니라, <strong>타협 없이 물리적 형태를 지배하고 이질적인 물리 소재(아노다이징 금속, 무광 폴리머 플라스틱, 프리미엄 나파 가죽, 텍스처 패브릭) 간의 전이(Transition) 과정이 하나의 유기체처럼 완벽히 맞물리도록 엔지니어링 했기 때문</strong>입니다.
            </p>
            <p>
              바워스 앤 윌킨스(B&W) 헤드폰 같은 명품 기기에서 관찰되는 <strong>각 부품의 확실한 재질 차이와 이를 하나로 묶어내는 극도의 통일성</strong>은 PDF-DS의 핵심 영감입니다. <strong>PDF-DS (Physical-Digital Fusion Design System)</strong>는 이러한 극한의 물리적 마감 철학을 디지털 스크린의 차가운 평면 공간에 이식하려는 대담한 시도입니다.
            </p>
            <p>
              화면이라는 매체의 한계로 인해 실제 질감(Texture)을 부여할 수 없다는 한계를 극복하기 위해, PDF-DS는 <strong>'수학적으로 통제된 색상의 대비', '1px 선(Border)의 투명도 변화', 그리고 '컴포넌트의 기하학적 형태 변화(Shape Morphing)'</strong>를 웹 스크린의 가상 물리 소재로 치환합니다.
            </p>
            <p>
              이 시스템은 감성적이고 인간적인 척하는 가짜 아날로그 디테일(sepia 톤 배경, 감상적 서체, 부드러운 그림자)을 철저히 배제하고, 차갑고 정교한 디지털 본연의 아름다움(Achromatic, Blueprint Grid)을 추구합니다.
            </p>
          </div>
        </section>
      )}

      {/* CHAPTER 2 */}
      {activeChapter === 2 && (
        <section id="ch-2" className="scroll-mt-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-pdf-aluminum text-pdf-red p-2 rounded-lg border border-pdf-red shrink-0">
              <Ruler className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-xs tracking-widest text-pdf-focus block uppercase">SECTION 02</span>
              <h2 className="font-sans text-xl md:text-2xl font-black text-pdf-leather tracking-tight">
                출발점 분석: 기존 주류 디자인의 한계
              </h2>
            </div>
          </div>

          <div className="prose max-w-none text-pdf-leather leading-relaxed space-y-4">
            <p>
              PDF-DS의 철학은 기존 주류 웹 디자인이 가지고 있는 <strong>구조적 비효율성</strong>과 지나친 장식주의를 비판하고 이를 해결하는 과정에서 완성되었습니다.
            </p>
            
            <LayoutComparisonSandbox />

            <h3 className="font-bold text-pdf-leather mt-6 pt-4 border-t border-pdf-seam">윈도우(16:9) 중심의 공간 낭비와 패러다임 전환</h3>
            <ul className="list-disc pl-5">
              <li><strong>극단적인 수직 공간 압축:</strong> 브라우저 탭, URL 주소창, OS 작업표시줄 등 수직 공간을 점유하는 기본 프레임에 웹사이트 자체의 헤더와 푸터까지 추가되면, 실제 메인 콘텐츠가 보여질 시야는 절망적으로 좁아집니다.</li>
              <li><strong>레터박스(Letterbox) 방치:</strong> 와이드 스크린 환경에서 양끝의 남는 거대한 좌우 공간은 방치된 채 중앙만 좁게 활용함으로써, 전체 화면 대비 실제 콘텐츠 렌더링 효율은 30~40% 밑으로 떨어집니다.</li>
              <li><strong>비대칭 38:62 전환:</strong> PDF-DS는 이 좌우 공간을 38%의 시스템 컨트롤 패널과 62%의 데이터 캔버스로 재배치하여 빈 버퍼를 없애고, 헤더·푸터를 걷어내어 오직 스크린 전체를 통제와 관측의 영역으로 해방시켰습니다.</li>
            </ul>
          </div>
        </section>
      )}

      {/* CHAPTER 3 */}
      {activeChapter === 3 && (
        <section id="ch-3" className="scroll-mt-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-pdf-aluminum text-pdf-red p-2 rounded-lg border border-pdf-red shrink-0">
              <Type className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-xs tracking-widest text-pdf-focus block uppercase">SECTION 03</span>
              <h2 className="font-sans text-xl md:text-2xl font-black text-pdf-leather tracking-tight">
                전이(Transition) 과정: 오리지널 물리 디자인 철학의 디지털 치환
              </h2>
            </div>
          </div>

          <div className="prose max-w-none text-pdf-leather leading-relaxed space-y-4">
            <p>
              PDF-DS는 정밀 하드웨어 부품들이 결합하는 세 가지 물리적 원리를 디지털 플랫폼의 렌더링 가이드라인으로 무결하게 재해석했습니다.
            </p>

            <h3 className="font-bold text-pdf-leather mt-6 pt-4 border-t border-pdf-seam">원리 A: 소재의 대비 → 아크로매틱 3색 스케일 (Chassis to Leather)</h3>
            <p>
              하이엔드 오디오에서 차가운 아노다이징 알루미늄 샤시와 묵직한 가죽 마감재가 서로 완벽한 대비를 이루며 경계를 형성하듯, PDF-DS는 소재의 대비 효과를 <strong>아크로매틱 그레이 스케일</strong>로 치환합니다.
            </p>
            <ul className="list-disc pl-5">
              <li><strong>알루미늄 샤시 = Base Tone (#FFFFFF):</strong> 전체 스페이스를 바쳐주는 바탕면으로, 순수한 디지털 캔버스를 상징합니다.</li>
              <li><strong>고급 가죽 패널 = Structure Tone (#09090B):</strong> 타이포그래피와 핵심 제어 패널에 쓰이는 극단적 다크 슬레이트 블랙으로, 알루미늄 위에 얹어진 묵직한 부품의 깊이감을 선사합니다.</li>
              <li><strong>이음새/다이얼 = Interaction Tone (#E4E4E7):</strong> 두 물리 재료가 만나는 경계와 미세 조정 장치를 규정하는 메디움 그레이입니다.</li>
            </ul>

            <h3 className="font-bold text-pdf-leather mt-6 pt-4 border-t border-pdf-seam">원리 B: 흐릿한 그림자의 배제 → 1px 아웃라인과 물리적 단차 (Seam)</h3>
            <p>
              현실 세계에서 하드웨어의 부품들은 흐릿한 그림자를 만들지 않고, <strong>칼같이 맞아떨어지는 이음새(Seam)</strong>를 보여줍니다. PDF-DS는 이를 모사하기 위해 <strong>그림자(Drop Shadow)를 영구히 추방</strong>합니다.
            </p>
            <ul className="list-disc pl-5">
              <li><strong>1px Crisp Border:</strong> 요소와 요소의 분리는 그림자가 아닌 명확한 1px 실선으로 제어합니다.</li>
              <li><strong>State Interlocking (상태 연동):</strong> 마우스가 경계선 위를 지나갈 때, 그림자가 생기며 붕 뜨는 인공적인 착각 대신 선의 투명도(Opacity)가 15%에서 100%로 기계적으로 서서히 선명해지도록 처리하여, 마치 금속 섀시를 정교하게 깎아 만든 틈새에 불빛이 들어오는 듯한 촉각적 상호작용을 완성합니다.</li>
            </ul>

            <h3 className="font-bold text-pdf-leather mt-6 pt-4 border-t border-pdf-seam">원리 C: 조작의 손맛 → 형태 모핑(Shape Morphing) 메커니즘</h3>
            <p>
              정밀 가공된 알루미늄 노브를 돌리거나 금속 스위치를 누를 때 손가락 끝에 진실되게 전해져오는 물리적 저항을 디지털 인터랙션 텐션으로 강제 구현합니다.
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Corner Radius Morphing:</strong> 바탕 상태(Rest)의 버튼은 시각적 평온함을 주는 완전한 원형(Fully Rounded)을 유지합니다. 마우스가 진입하면 코너 반경이 12dp로 좁혀지며 부드러운 사각형(Soft Square)으로 조여지고, 클릭되는 순간(Pressed) 8dp의 날카로운 직사각형(Sharp Square)으로 모핑됩니다. 이는 마치 사용자의 누르는 힘에 의해 스위치의 금속 하우징이 단단하게 맞물려 고정되는 감각을 극도로 직관적인 애니메이션으로 전달합니다.
              </li>
            </ul>
          </div>

          <div className="mt-8 space-y-12">
            <ColorSandbox />
            <ButtonSandbox />
          </div>
        </section>
      )}

      {/* CHAPTER 4 */}
      {activeChapter === 4 && (
        <section id="ch-4" className="scroll-mt-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-pdf-aluminum text-pdf-red p-2 rounded-lg border border-pdf-red shrink-0">
              <Type className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-xs tracking-widest text-pdf-focus block uppercase">SECTION 04</span>
              <h2 className="font-sans text-xl md:text-2xl font-black text-pdf-leather tracking-tight">
                정밀 타이포그래피 및 다국어 시스템
              </h2>
            </div>
          </div>

          <div className="prose max-w-none text-pdf-leather leading-relaxed space-y-4">
            <p>
              타이포그래피는 PDF-DS에서 가장 주도적인 구조체입니다. 본 시스템은 범용성이 극도로 탁월한 산세리프 <strong>Pretendard Variable</strong>을 기본 본문(Base Sans)으로 선언하며, 다국어 환경(한글, 영문, 일어, 라틴 등)에서 높이와 여백의 물리적 충돌 없이 균등한 렌더링 무결성을 획득합니다.
            </p>

            <ul className="list-disc pl-5">
              <li><strong>Pretendard (Base Sans):</strong> 어떠한 운영체제나 기기에서도 Apple 타이포그래피와 유사한 최고 수준의 퀄리티와 일관된 글꼴 폭을 제공합니다.</li>
              <li><strong>Geist Mono (Data & Interface):</strong> 코드, 토큰 규칙, 메뉴 레이블 및 렌더링 수치에는 가독성과 기술적 정교함을 극대화한 모노스페이스 서체가 전담되어 적용됩니다.</li>
              <li><strong>다국어 호환성:</strong> Pretendard 자체가 가진 방대한 다국어 글리프 글꼴 세트는 한국어에서 영문으로, 영문에서 다시 일본어 등 다른 문자로 전환될 때 발생하는 시각적 높이 단차(Ascender/Descender 튀는 현상) 문제를 완벽히 평탄화합니다.</li>
            </ul>
          </div>
          
          <div className="mt-8 space-y-12">
            <TypographySandbox />
            <AlignmentSandbox />
          </div>
        </section>
      )}

      {/* CHAPTER 5 */}
      {activeChapter === 5 && (
        <section id="ch-5" className="scroll-mt-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-pdf-aluminum text-pdf-red p-2 rounded-lg border border-pdf-red shrink-0">
              <Columns className="w-6 h-6" />
            </div>
            <div>
              <span className="font-mono text-xs tracking-widest text-pdf-focus block uppercase">SECTION 05</span>
              <h2 className="font-sans text-xl md:text-2xl font-black text-pdf-leather tracking-tight">
                구조의 완성: PDF-DS 38:62 비대칭 블루프린트 레이아웃
              </h2>
            </div>
          </div>

          <div className="prose max-w-none text-pdf-leather leading-relaxed space-y-4">
            <p>
              PDF-DS는 기존의 수직 구조가 방치하던 <strong>좌우 레터박스 공간을 완전히 회수</strong>하여 화면의 100%를 통제합니다. 단조로운 대칭뷰를 탈피하여 <strong>38:62 비대칭 황금 분할</strong>을 레이아웃 표준으로 삼습니다.
            </p>
            
            <GoldenRatioSandbox />

            <ul className="list-disc pl-5 mt-6">
              <li><strong>좌측 컨트롤 패널(38%):</strong> 마치 하드웨어 리모컨이나 제어 계측 시스템을 이식한 듯한 느낌을 주며, Geist Mono 서체를 사용하여 시스템 고유의 기계적이고 날카로운 포인트 위계를 세웁니다.</li>
              <li><strong>우측 본문 캔버스(62%):</strong> 범용성이 극대화된 Pretendard 서체를 기반으로 다국어(한·영·일) 표기 시의 시각적 밀도가 완벽히 수평을 이루도록 통제하며, 대담한 여백(Whitespace)을 활용해 압도적인 가독성을 제공합니다.</li>
              <li><strong>펑셔널 레드(#AD1D1D):</strong> 전체 화면이 무채색인 그레이스케일로 진공 청소된 상태에서, 오직 단 하나의 핵심 조작 장치(예: 전원, CTA, 또는 에러 상태)에만 역사적 하드웨어의 오리지널 레드 컬러인 <code>#AD1D1D</code>를 타격하여 인간의 시선을 즉각적으로 제어합니다.</li>
            </ul>
          </div>

          <div className="mt-8 space-y-12">
            <SplitSandbox />
            <GridSandbox />
          </div>
        </section>
      )}

      {/* CHAPTER 6 */}
      {activeChapter === 6 && (
        <section id="ch-6" className="scroll-mt-16 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-pdf-aluminum text-pdf-red p-2 rounded-lg border border-pdf-red shrink-0">
              <Palette className="w-6 h-6 text-pdf-red" />
            </div>
            <div>
              <span className="font-mono text-xs tracking-widest text-pdf-focus block uppercase">SECTION 06</span>
              <h2 className="font-sans text-xl md:text-2xl font-black text-pdf-leather tracking-tight">
                결론: PDF-DS가 가져다주는 미학적 가치
              </h2>
            </div>
          </div>

          <div className="prose max-w-none text-pdf-leather leading-relaxed space-y-4">
            <div className="overflow-hidden border border-pdf-seam rounded-lg shadow-xs mt-6">
              <table className="min-w-full divide-y divide-pdf-seam text-sm">
                <thead className="bg-pdf-aluminum border-b border-pdf-seam">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-mono font-bold text-pdf-focus uppercase tracking-wider w-1/4 border-r border-pdf-seam">구분</th>
                    <th className="px-6 py-3 text-left text-xs font-mono font-bold text-pdf-focus uppercase tracking-wider w-3/8 border-r border-pdf-seam">기존 주류 웹 디자인</th>
                    <th className="px-6 py-3 text-left text-xs font-mono font-bold text-pdf-leather uppercase tracking-wider bg-pdf-aluminum">진화된 PDF-DS 디자인 언어</th>
                  </tr>
                </thead>
                <tbody className="bg-pdf-aluminum divide-y divide-pdf-seam">
                  <tr className="hover:bg-pdf-aluminum">
                    <td className="px-6 py-4 font-mono font-bold text-pdf-leather border-r border-pdf-seam whitespace-nowrap">미학적 지향</td>
                    <td className="px-6 py-4 text-pdf-focus border-r border-pdf-seam">따뜻함, 인공적 친근성, 감성 마케팅 무드</td>
                    <td className="px-6 py-4 font-bold text-pdf-leather">차가움, 솔직함, 정교함, 이성적 기능주의</td>
                  </tr>
                  <tr className="hover:bg-pdf-aluminum">
                    <td className="px-6 py-4 font-mono font-bold text-pdf-leather border-r border-pdf-seam whitespace-nowrap">컬러 원칙</td>
                    <td className="px-6 py-4 text-pdf-focus border-r border-pdf-seam">크림색 배경과 다채롭고 빈티지한 삼색선</td>
                    <td className="px-6 py-4 text-pdf-leather">완전한 아크로매틱 3색 + <strong className="text-pdf-red">펑셔널 레드 포인트</strong></td>
                  </tr>
                  <tr className="hover:bg-pdf-aluminum">
                    <td className="px-6 py-4 font-mono font-bold text-pdf-leather border-r border-pdf-seam whitespace-nowrap">공간감 형성</td>
                    <td className="px-6 py-4 text-pdf-focus border-r border-pdf-seam">평범한 2차원 화면 분할</td>
                    <td className="px-6 py-4 text-pdf-leather">1px 미세 경계면과 투명도 조절을 통한 하드웨어 단차감</td>
                  </tr>
                  <tr className="hover:bg-pdf-aluminum">
                    <td className="px-6 py-4 font-mono font-bold text-pdf-leather border-r border-pdf-seam whitespace-nowrap">조작 피드백</td>
                    <td className="px-6 py-4 text-pdf-focus border-r border-pdf-seam">단순한 마우스 오버 시 텍스트 컬러 반전</td>
                    <td className="px-6 py-4 text-pdf-leather">손끝 감각을 모사하는 <strong>스프링 기반의 형태 모핑</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-8 p-4 bg-pdf-aluminum border border-pdf-seam rounded text-pdf-leather leading-relaxed">
              물리적 기계 공학과 필연적 기능주의가 역사적 명품 디자인으로 승화되었듯, PDF-DS 역시 주류 웹의 <strong>비효율적인 공간 낭비를 100% 비대칭 풀스크린으로 회수</strong>하고 억지스러운 인간미의 노이즈를 거세함으로써, <strong>가장 압도적인 화면 밀도와 강력한 촉각적 상호작용</strong>을 제공하는 초정밀 가이드라인을 증명해냅니다.
            </p>
          </div>

          <div className="mt-12">
            <QASandbox />
          </div>
          <div className="mt-12">
            <CodeExport />
          </div>
        </section>
      )}

    </div>
  );
}
