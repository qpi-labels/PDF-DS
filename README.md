# 🎛️ PDF-DS (Physical-Digital Fusion Design System)

> **Physical-Digital Fusion Design System (PDF-DS)**는 물리적 제품의 촉각적 경험과 디지털 인터페이스의 유연성을 결합한 크로스 플랫폼 디자인 가이드라인 웹 애플리케이션입니다.

[Design Guideline](http://pdf-ds.qpi.digital)

---

## ⚙️ 사전 요구 사항 (Prerequisites)

본 프로젝트를 로컬 환경에서 실행하고 빌드하기 위해서는 다음 소프트웨어가 설치되어 있어야 합니다.

- **Node.js**: v18.0.0 이상 권장
- **npm**: v9.0.0 이상 권장 (또는 yarn, pnpm)
- **Git** (프로젝트 클론 및 버전 관리를 위해)

---

## 🚀 설치 가이드 (Installation Guide)

### 1. 저장소 클론 (Clone the Repository)
```bash
git clone <repository-url>
cd PDF-DS
```

### 2. 패키지 의존성 설치 (Install Dependencies)
```bash
npm install
```

### 3. 환경 변수 설정 (Environment Variables)
프로젝트 내 `.env.example` 파일이 존재할 경우, 이를 복사하여 `.env` 파일을 생성하고 필요한 값을 설정합니다.
```bash
cp .env.example .env
```
> *(로컬 개발 환경에서만 사용할 경우 별도로 수정하지 않아도 기본값으로 동작합니다.)*

---

## 🛠️ 개발 및 빌드 (Development & Build)

`package.json`에 정의된 주요 스크립트를 통해 개발 서버 실행 및 빌드를 진행할 수 있습니다.

### 로컬 개발 서버 실행
```bash
npm run dev
```
> Vite 기반의 개발 서버가 실행됩니다. 기본적으로 `http://localhost:3000` (또는 터미널에 표시된 주소)에서 확인할 수 있습니다.

### 프로덕션 빌드
```bash
npm run build
```
> `dist/` 디렉토리에 최적화된 정적 웹사이트 에셋이 생성됩니다.

### 프로덕션 빌드 로컬 미리보기
```bash
npm run preview
```
> `build` 커맨드를 먼저 실행한 후, Wrangler(또는 로컬 서버)를 통해 빌드된 결과물을 로컬에서 미리 확인합니다.

### 빌드 결과물 캐시 정리
```bash
npm run clean
```
> `dist/` 디렉토리와 기타 빌드 임시 파일들을 제거합니다.

### 타입스크립트 린트 검사
```bash
npm run lint
```
> 코드를 컴파일하지 않고(emit 없이) TypeScript 타입 에러를 검사합니다.

---

## ☁️ 배포 가이드 (Deployment)

본 프로젝트는 Cloudflare Pages (또는 Workers) 환경에 배포되도록 `wrangler.jsonc`가 구성되어 있습니다.

### 1. Wrangler 인증
처음 배포하는 경우 Cloudflare 계정 인증이 필요합니다.
```bash
npx wrangler login
```

### 2. 프로젝트 배포
빌드와 배포를 동시에 수행하는 스크립트를 실행합니다.
```bash
npm run deploy
```
> 내부적으로 `npm run build` 수행 후 `wrangler deploy` 명령어가 실행되어 Cloudflare 네트워크에 배포됩니다.

---

## 📦 CSS 라이브러리로 사용하기 (Usage as a CDN Library)

프로젝트 전체를 클론하지 않고 **디자인 토큰과 전역 스타일(CSS)**만 기존 프로젝트에 빠르게 적용하려면, HTML 파일의 `<head>` 태그 안에 아래 코드를 추가하세요.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/qpi-labels/PDF-DS@main/src/index.css">
```

---

## 📂 주요 디렉토리 구조 (Directory Structure)

- `src/` : 애플리케이션 소스 코드
  - `components/` : 버튼, 레이아웃, 컬러 등 샌드박스 컴포넌트 모음
  - `pages/` : `Landing`, `Guide`, `Editor` 등 주요 라우트 페이지
  - `utils/` : 압축 파일 다운로드 등 유틸리티 함수
  - `index.css` : **(핵심)** 디자인 시스템 전역 CSS 변수 및 토큰
- `public/` : 파비콘, 폰트 등 정적 에셋
- `.wrangler/` : Cloudflare 배포 관련 로컬 캐시 디렉토리
- `wrangler.jsonc` : Cloudflare 배포 설정 파일
- `vite.config.ts` : Vite 빌더 설정 파일

---

## 📝 라이선스 (License)

이 프로젝트는 비공개(Private) 프로젝트로 설정되어 있습니다. (참고: `package.json` - `"private": true`)
