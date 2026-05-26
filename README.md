# 🎛️ PDF-DS (Physical-Digital Fusion Design System)

> **Physical-Digital Fusion Design System (PDF-DS)**는 물리적 제품의 촉각적 경험과 디지털 인터페이스의 유연성을 결합한 크로스 플랫폼 디자인 가이드라인 웹 애플리케이션입니다.

Dieter Rams의 디자인 원칙을 바탕으로, 고대비 무채색 레이아웃과 형태 변형(shape-morphing)이 가능한 촉각적 컴포넌트를 제공합니다.

---

## ✨ 핵심 철학 및 특징 (Core Philosophy & Features)

- **Dieter Rams의 원칙 적용**: "Less, but better". 직관적이고 본질에 집중한 미니멀리즘 디자인.
- **물리적 촉감의 디지털화**: 버튼이 눌릴 때 단순한 사각형이 아닌, 물리적 버튼의 저항감과 탄성을 모방한 애니메이션(Shape-morphing) 적용.
- **황금비 (Golden Ratio)**: 레이아웃 및 타이포그래피, 요소 간의 간격에 황금비율(1:1.618)을 적극 활용하여 시각적 안정감 제공.
- **고대비 무채색 레이아웃**: 시각적 피로도를 낮추고 콘텐츠 집중도를 높이는 흑백 기반의 고대비 UI.
- **인터랙티브 샌드박스**: 각 컴포넌트의 상태(State)와 애니메이션을 직접 테스트해 볼 수 있는 인터랙티브 환경 제공.

---

## 🛠 기술 스택 (Tech Stack)

| Category | Technology |
| :--- | :--- |
| **Framework** | React 19, TypeScript |
| **Build Tool** | Vite 6 |
| **Animation** | Motion (Framer Motion) |
| **Styling** | Vanilla CSS (`index.css`) |
| **Icons** | Lucide React |

---

## 📂 프로젝트 구조 (Project Structure)

```text
PDF-DS/
├── src/
│   ├── components/       # 인터랙티브 샌드박스 및 UI 컴포넌트
│   │   ├── ButtonSandbox.tsx       # 🔘 촉각적 버튼 애니메이션 테스트
│   │   ├── ColorSandbox.tsx        # 🎨 색상 대비 및 테마 테스트
│   │   ├── TypographySandbox.tsx   # 🔠 황금비 기반 타이포그래피
│   │   ├── GoldenRatioSandbox.tsx  # 📐 황금비 레이아웃 시각화
│   │   ├── NavigationSandbox.tsx   # 🧭 네비게이션 구조 테스트
│   │   └── ... (다양한 UI 샌드박스 제공)
│   ├── pages/            # 주요 페이지 뷰
│   │   ├── Landing.tsx   # 소개 페이지
│   │   ├── Guide.tsx     # 디자인 가이드라인 문서 및 샌드박스 모음
│   │   └── Editor.tsx    # 코드 내보내기 및 편집기
│   ├── index.css         # 전역 스타일 및 디자인 토큰
│   ├── App.tsx           # 라우팅 및 최상위 레이아웃
│   └── main.tsx          # React 진입점
├── public/               # 정적 에셋
└── package.json          # 프로젝트 의존성 및 스크립트
```

---

## 🚀 시작하기 (Getting Started)

### 📦 CDN을 통한 CSS 설치 (Installation)
프로젝트에 CSS만 빠르게 적용하고 싶다면, jsDelivr CDN을 통해 다운로드 없이 바로 사용할 수 있습니다.
HTML 파일의 `<head>` 태그 안에 아래 코드를 추가하세요.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/qpi-labels/PDF-DS@main/src/index.css">
```

### 💻 로컬 개발 환경 설정 (Local Development)

#### 1. 패키지 설치
```bash
npm install
```

#### 2. 개발 서버 실행
```bash
npm run dev
```
> 서버가 실행되면 브라우저에서 `http://localhost:3000` (기본값)으로 접속하여 가이드라인을 확인할 수 있습니다.

#### 3. 프로덕션 빌드
```bash
npm run build
```

---

## 🧩 주요 컴포넌트 샌드박스 (Key Sandboxes)

- [x] **ButtonSandbox**: 터치 및 클릭 시 형태가 부드럽게 변형되는 촉각적 인터랙션 검증
- [x] **GoldenRatioSandbox**: 그리드 시스템과 여백이 황금비를 어떻게 따르는지 시각적으로 확인
- [x] **LayoutComparisonSandbox**: 플랫폼(모바일, 태블릿, 데스크탑)에 따른 반응형 레이아웃 비교
- [x] **AlignmentSandbox**: 시각적 정렬 및 타이포그래피 베이스라인 테스트
- [x] **CodeExport**: 샌드박스에서 설정한 컴포넌트 옵션을 실제 React/CSS 코드로 추출

---

## 📝 라이선스 (License)

이 프로젝트는 비공개(Private) 프로젝트로 설정되어 있습니다. (참고: `package.json` - `"private": true`)