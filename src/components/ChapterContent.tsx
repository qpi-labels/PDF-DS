import React from 'react';

// Import our custom interactive sandboxes (will be refactored next)
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
    <div className="pdf-animate-fade-in">
      
      {/* CHAPTER 1 */}
      {activeChapter === 1 && (
        <section id="ch-1">
          <div className="pdf-mb-300">
            <h2 className="pdf-text-heading-32 pdf-mb-100">1. PDF-DS 시작하기 및 설치 가이드</h2>
            <p className="pdf-text-copy-14 pdf-text-muted">
              PDF-DS(Physical-Digital Fusion Design System)는 별도의 프레임워크나 빌드 도구 없이, 오직 CSS 파일 하나만으로도 완벽한 디자인 시스템을 구축할 수 있도록 설계되었습니다.
            </p>
          </div>

          <div className="pdf-mb-300">
            <h3 className="pdf-text-label-16 pdf-mb-100">설치 및 로드 방법 (CDN)</h3>
            <p className="pdf-text-copy-14 pdf-mb-100">
              HTML 문서의 <code>&lt;head&gt;</code> 태그 내에 아래의 jsDelivr CDN 링크를 복사하여 붙여넣으세요. 이 링크는 GitHub 저장소의 원본 CSS를 실시간으로 가져와 적용합니다.
            </p>
            <div className="pdf-code-block pdf-mb-100">
              {`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/antigravity/PDF-DS@main/src/index.css" />`}
            </div>
            <p className="pdf-text-copy-14 pdf-text-muted">
              * 위 코드는 <code>antigravity/PDF-DS</code> 리포지토리의 main 브랜치에 있는 index.css를 불러옵니다. 포크(Fork)하여 사용하실 경우 사용자명(Username) 부분을 변경하세요.
            </p>
          </div>

          <div className="pdf-mb-300">
            <h3 className="pdf-text-label-16 pdf-mb-100">기본 마크업 보일러플레이트 (Boilerplate)</h3>
            <p className="pdf-text-copy-14 pdf-mb-100">
              CSS를 로드한 후, 아래의 HTML 구조를 사용하여 즉시 PDF-DS 앱 레이아웃을 구성할 수 있습니다.
            </p>
            <div className="pdf-code-block pdf-mb-100" style={{ whiteSpace: 'pre-wrap' }}>
{`<!-- 전체 앱 컨테이너 -->
<div class="pdf-app">
  <!-- 좌측 사이드바 -->
  <aside class="pdf-sidebar">
    <div class="pdf-content-relative pdf-p-300">
      <h1 class="pdf-text-heading-32">PDF-DS System</h1>
    </div>
  </aside>
  <!-- 우측 메인 콘텐츠 뷰 -->
  <main class="pdf-main-view">
    <div class="pdf-panel">
      <h2 class="pdf-text-heading-32">메인 콘텐츠</h2>
      <button class="pdf-btn-primary">시작하기</button>
    </div>
  </main>
</div>`}
            </div>
          </div>
        </section>
      )}

      {/* CHAPTER 2 */}
      {activeChapter === 2 && (
        <section id="ch-2">
          <div className="pdf-mb-300">
            <h2 className="pdf-text-heading-32 pdf-mb-100">2. 철학적 토대와 시스템 미학의 융합</h2>
            <p className="pdf-text-copy-14 pdf-text-muted">
              현대 소프트웨어 공학에서 사용자 인터페이스는 단순히 화면에 요소를 렌더링하는 것을 넘어, 하드웨어가 가진 물리적 인지성과 촉각적 정직성을 디지털 공간으로 확장하는 다리 역할을 수행해야 한다.
            </p>
          </div>

          <div className="pdf-mb-300">
            <p className="pdf-text-copy-14">
              본 디자인 시스템(Physical-Digital Fusion Design System, 이하 PDF-DS)은 20세기 산업 디자인의 거장 디터 람스의 설계 철학과 현대 디지털 제품 설계 방법론을 유기적으로 결합하여 탄생하였다. 디터 람스의 10대 디자인 원칙은 제품의 유용성, 심미성, 이해 가능성, 신뢰성, 지속 가능성, 그리고 불필요한 장식을 배제한 '최소한의 디자인'을 극대화하는 것에 초점을 맞춘다.
            </p>
            <br />
            <p className="pdf-text-copy-14">
              물리적 감각을 디지털 인터페이스로 전이하는 과정에서는 바우어앤윌킨스의 사운드 엔지니어링 미학과 틴에이지 엔지니어링의 정밀한 촉각적 상호작용 방식이 핵심적인 이정표를 제공한다.
            </p>
            <br />
            <p className="pdf-text-copy-14">
              PDF-DS는 이러한 물리적 엔지니어링 사상을 디지털 디자인 언어로 계승한다. 스크린 내부의 요소들을 단순한 이미지나 가상의 레이어로 취급하지 않고, 명확한 두께를 가진 경계선과 규칙적인 격자 체계 위에 정렬된 독립적인 조작기(Manipulator)로 정의한다.
            </p>
          </div>
        </section>
      )}

      {/* CHAPTER 3 */}
      {activeChapter === 3 && (
        <section id="ch-3">
          <div className="pdf-mb-300">
            <h2 className="pdf-text-heading-32 pdf-mb-100">3. 청사진 그리드(Blueprint Grid)와 멀티 스케일 여백(Spacing) 시스템</h2>
            <p className="pdf-text-copy-14 pdf-text-muted">
              디지털 레이아웃의 구조적 정밀도를 담보하기 위해 PDF-DS는 물리적 설계 도면에서 착안한 청사진 그리드와 수학적으로 정렬된 다중 스케일 여백 시스템을 채택한다.
            </p>
          </div>

          <div className="pdf-mb-300">
            <h3 className="pdf-text-label-16 pdf-mb-100">청사진 그리드 세부 명세</h3>
            <ul className="pdf-list-disc pdf-text-copy-14">
              <li>선 가중치 및 스타일: 그리드 라인은 브라우저 렌더링 엔진의 서브픽셀 깨짐을 방지하기 위해 엄격히 1px 두께의 실선으로 렌더링되어야 한다.</li>
              <li>색상 및 투명도 명세: 기본 라이트 테마에서는 중성 그레이 계열인 #E5E7EB를 사용하고, 다크 테마에서는 #27272A를 적용하며 투명도를 10%~20%로 제한한다.</li>
              <li>격자 모듈러스: 한 변은 시스템 기본 스페이싱 토큰인 16px 또는 24px 정방형 구조로 정렬되어야 한다.</li>
            </ul>
          </div>
          
          <div className="pdf-mb-300">
            <h3 className="pdf-text-label-16 pdf-mb-100">여백 토큰 및 그리드 확장 체계</h3>
            <table className="pdf-table pdf-text-copy-14">
              <thead>
                <tr>
                  <th>토큰명</th>
                  <th>Rem 환산값 (16px 기준)</th>
                  <th>물리 픽셀 값 (Pixel)</th>
                  <th>주요 사용처 및 인터페이스 적용 규칙</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pdf-font-mono">$space-025</td>
                  <td>0.125rem</td>
                  <td>2px</td>
                  <td>미세 경계선 오프셋, 입력 필드 내 선택 표시기 정렬</td>
                </tr>
                <tr>
                  <td className="pdf-font-mono">$space-100</td>
                  <td>0.5rem</td>
                  <td>8px</td>
                  <td>기본 베이스라인, 콤팩트 리스트 요소 간 수직 간격</td>
                </tr>
                <tr>
                  <td className="pdf-font-mono">$space-300</td>
                  <td>1.5rem</td>
                  <td>24px</td>
                  <td>섹션 간 수직 간격, 표준 대화상자 여백, 마케팅 레이아웃 그리드</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="pdf-mb-300">
            <GridSandbox />
          </div>
        </section>
      )}

      {/* CHAPTER 4 */}
      {activeChapter === 4 && (
        <section id="ch-4">
          <div className="pdf-mb-300">
            <h2 className="pdf-text-heading-32 pdf-mb-100">4. 정밀 타이포그래피 및 레이아웃 정렬 명세</h2>
            <p className="pdf-text-copy-14 pdf-text-muted">
              타이포그래피는 PDF-DS에서 가장 주도적인 구조체이다. 감정적인 서체를 철저히 지양하는 대신, 정교하게 조정된 지오메트릭 산세리프(Geometric Sans-serif) 서체인 Geist Sans 또는 Inter를 본문 및 타이틀용으로 선언한다.
            </p>
          </div>

          <div className="pdf-mb-300">
            <TypographySandbox />
          </div>
          
          <div className="pdf-mb-300">
            <h3 className="pdf-text-label-16 pdf-mb-100">광학적 정렬 및 레이아웃 렌더링 규칙</h3>
            <ul className="pdf-list-disc pdf-text-copy-14">
              <li><strong>광학적 미세 보정 (Optical Alignment):</strong> 텍스트와 이형의 아이콘이 수평으로 결합할 때 기하학적 중앙 정렬 연산 결과가 어색해 보일 수 있다. 이 경우 ±1px 한도 내에서 수동으로 조정해야 한다.</li>
              <li><strong>데이터 비교용 고정폭 숫자 정렬:</strong> <code>font-variant-numeric: tabular-nums</code> 설정을 의무적으로 활성화한다.</li>
              <li><strong>구두점 및 표기식의 미학:</strong> 인용구는 둥근 따옴표(“ ”)를 사용하고, 줄바꿈으로 인해 숫자와 단위가 찢어지지 않도록 비줄바꿈 공백(Non-breaking Space) 처리를 선행해야 한다 (예: 10 MB).</li>
            </ul>
          </div>
          
          <div className="pdf-mb-300">
            <AlignmentSandbox />
          </div>
        </section>
      )}

      {/* CHAPTER 5 */}
      {activeChapter === 5 && (
        <section id="ch-5">
          <div className="pdf-mb-300">
            <h2 className="pdf-text-heading-32 pdf-mb-100">5. 아크로매틱 컬러 체계와 펑셔널 레드의 위계적 운용</h2>
            <p className="pdf-text-copy-14 pdf-text-muted">
              PDF-DS의 색상 전술은 완전한 절제에 기반을 둔다. 형형색색의 컬러 스펙트럼과 과도한 그라디언트는 추방된다. 오직 아크로매틱(Achromatic) 토대 위에 구축된다.
            </p>
          </div>

          <div className="pdf-mb-300">
            <h3 className="pdf-text-label-16 pdf-mb-100">아크로매틱 기본 배경 및 경계선 시스템</h3>
            <div className="pdf-code-block pdf-mb-200">
              배경 1 (Background 1: #FFFFFF)<br/>
              배경 2 (Background 2: #F4F4F5)<br/>
              컴포넌트 Rest (Color 1: #FFFFFF)<br/>
              경계선 Rest (Color 4: #E4E4E7)
            </div>
            <p className="pdf-text-copy-14">
              페이지 전체를 감싸는 최하단 도화지 영역인 '배경 1'은 순수한 백색인 #FFFFFF를 지정하며, 제한적인 수준에서 '배경 2'인 #F4F4F5를 차용하여 깊이 단계를 제어한다.
            </p>
          </div>
          
          <div className="pdf-mb-300">
            <h3 className="pdf-text-label-16 pdf-mb-100">펑셔널 레드(Functional Red) 액센트 설계</h3>
            <p className="pdf-text-copy-14 pdf-mb-100">
              오직 단 하나의 핵심 하이라이트 색상인 <strong>펑셔널 레드(Functional Red, #AD1D1D)</strong>가 시각적 폭발력을 획득한다. 오직 세 가지 상황에서만 제한적으로 동원된다.
            </p>
            <ul className="pdf-list-disc pdf-text-copy-14">
              <li>화면 내부에서 사용자가 즉시 실행해야만 하는 단 하나의 일차적 명령 버튼(Primary Call to Action)</li>
              <li>데이터의 영구적인 변동을 초래하는 위급한 경고성 제어 장치(Critical Destructive Action)</li>
              <li>시스템 오류나 검증 누락 상태를 실시간으로 환기해야 하는 즉각적 위기 상태 표시기(Immediate Validation State Indicator)</li>
            </ul>
          </div>
          
          <div className="pdf-mb-300">
            <ColorSandbox />
          </div>
        </section>
      )}

      {/* CHAPTER 6 */}
      {activeChapter === 6 && (
        <section id="ch-6">
          <div className="pdf-mb-300">
            <h2 className="pdf-text-heading-32 pdf-mb-100">6. 머티리얼 3 기반 초정밀 버튼 설계 및 형태 모핑(Shape Morphing) 상호작용</h2>
            <p className="pdf-text-copy-14 pdf-text-muted">
              버튼은 물리 하드웨어의 택타일 스위치를 디지털 화면 내부로 완벽하게 복제해 온 PDF-DS의 핵심 제어 컴포넌트이다. 외곽선의 예리함과 기하학적 형태 변화 메커니즘을 추가하여 정교한 피드백을 완성한다.
            </p>
          </div>

          <div className="pdf-mb-300">
            <h3 className="pdf-text-label-16 pdf-mb-100">형태 모핑(Shape Morphing) 메커니즘</h3>
            <p className="pdf-text-copy-14">
              평상시 기본 Rest 상태에서는 완전한 원형 스타일(Fully Rounded)을 유지하다가, 마우스가 진입(Hover)하거나 손가락으로 가압(Press)하는 물리적 에너지가 전달되는 순간 코너 반경을 좁히며 엣지 있는 직사각형 형태로 탈바꿈한다.
            </p>
          </div>
          
          <div className="pdf-mb-300">
            <ButtonSandbox />
          </div>
        </section>
      )}

      {/* CHAPTER 7 */}
      {activeChapter === 7 && (
        <section id="ch-7">
          <div className="pdf-mb-300">
            <h2 className="pdf-text-heading-32 pdf-mb-100">7. 비대칭 스플릿 스크린 레이아웃 및 디바이스 반응형 통합 가이드라인</h2>
            <p className="pdf-text-copy-14 pdf-text-muted">
              화면 분할 철학은 대칭 분리를 타파하고 황금 비율에 준하는 38:62 비율의 비대칭 스플릿 스크린을 기본 표준으로 채택한다.
            </p>
          </div>

          <div className="pdf-mb-300">
            <GoldenRatioSandbox />
          </div>
          
          <div className="pdf-mb-300">
            <h3 className="pdf-text-label-16 pdf-mb-100">모바일 스택 및 반응형 레이아웃 복원 가이드라인</h3>
            <ul className="pdf-list-disc pdf-text-copy-14">
              <li><strong>수직 위계적 스택킹(Vertical Stacking):</strong> 뷰포트 크기가 수축함에 따라 두 면은 즉각적으로 수직 방향으로 정렬되어 위에서 아래로 스택킹된다.</li>
              <li><strong>콘텐츠 최소 크기 타겟:</strong> 스택 카드는 어떠한 경우에도 너비 또는 높이 기준 220dp 미만으로 축소되지 않도록 최소 공간 제한치를 확보한다.</li>
              <li><strong>레이아웃 시프트(Layout Shift) 방지를 위한 스켈레톤:</strong> 데이터 로딩 전의 임시 로딩 스켈레톤(Skeleton UI)은 실제 컴포넌트의 패딩 높이와 모서리 둥글기 스펙을 1px 오차도 없이 100% 동일하게 복제한다.</li>
            </ul>
          </div>
          
          <div className="pdf-mb-300">
            <SplitSandbox />
          </div>
        </section>
      )}

      {/* CHAPTER 8 */}
      {activeChapter === 8 && (
        <section id="ch-8">
          <div className="pdf-mb-300">
            <h2 className="pdf-text-heading-32 pdf-mb-100">8. 통합 소프트웨어 아키텍처 및 토큰 구현 가이드라인</h2>
            <p className="pdf-text-copy-14 pdf-text-muted">
              디자인 시스템 PDF-DS의 궁극적인 존재 가치는 여러 이종 플랫폼 위에서 단일한 명도의 통제력을 유지하는 코드 기반 무결성에 있다.
            </p>
          </div>

          <div className="pdf-mb-300">
            <CodeExport />
          </div>
        </section>
      )}

      {/* CHAPTER 9 */}
      {activeChapter === 9 && (
        <section id="ch-9">
          <div className="pdf-mb-300">
            <h2 className="pdf-text-heading-32 pdf-mb-100">9. 최종 통합 실무 체크리스트 및 검수 수칙</h2>
            <p className="pdf-text-copy-14 pdf-text-muted">
              이 디자인 가이드라인이 프로젝트 소스코드에서 정상적으로 완수되고 있는지 판단하기 위한 전방위 디자인 검수(QA) 기준 목록이다.
            </p>
          </div>

          <div className="pdf-mb-300">
            <ul className="pdf-list-disc pdf-text-copy-14">
              <li><strong>하드코딩 배제 검수:</strong> 모든 여백 및 내부 패딩 코드가 기하학적인 정수형 픽셀 단위로 선언되어 있지 않고, 반드시 $space- 계열의 토큰으로 올바르게 대체되었는지 정적 분석 툴을 통해 확인한다.</li>
              <li><strong>청사진 그리드 대비 수준 확보:</strong> 배경 격자선의 명도 투명도 수치가 10% - 20% 임계를 넘어 사용자의 시선을 방해하지 않는지 검측한다.</li>
              <li><strong>버튼 터치 영역의 최소 사양 준수:</strong> 48x48dp 이상을 정상 확보하여 손가락 터치 누락을 방지하고 있는지 추적 확인한다.</li>
              <li><strong>펑셔널 레드의 위계적 제한 수칙:</strong> 펑셔널 레드 액센트 색상이 적용된 컴포넌트 및 레이블 표지기의 개수가 최대 3개 이하로 통제되고 있는지 체크한다.</li>
              <li><strong>텍스트 200% 확장 시의 레이아웃 무결성:</strong> 서체의 크기를 200%까지 강제 격상시켰을 때 레이아웃 컨테이너가 다른 요소를 덮어씌우지 않는지 검증한다.</li>
            </ul>
          </div>
          
          <div className="pdf-mb-300">
            <QASandbox />
          </div>
        </section>
      )}

    </div>
  );
}
