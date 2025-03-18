# Parking Friends

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 개발 폴더 구조
```
parkingfriends-admin-front
├─ .gitignore
├─ Dockerfile.ncloud
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
├─ README.md
├─ src
│  ├─ api
│  │  ├─ common     // 
│  │  ├─ index.js   // ＊ api 공통 호출 함수
│  │  ├─ inquiry    // 1Depth 메뉴 기준으로 폴더 생성 (폴더 명은 src/app/ 하위와 동일하게 생성)
│  │  │  └─ illegal-parking-report.js   // 2Depth 메뉴 기준으로 파일 생성 - 해당 메뉴에서 호출하는 API 정리 (파일 명은 src/app/[1Depth메뉴]/ 하위와 동일하게 생성)
│  │  └─ ...
│  ├─ app
│  │  ├─ cms
│  │  │  ├─ admin                   // 1Depth 메뉴
│  │  │  │  ├─ account              // 2Depth 메뉴
│  │  │  │  │  ├─ page.tsx          // 메뉴 목록 화면
│  │  │  │  │  ├─ _components       // 메뉴에서 사용하는 컴포넌트 - 파일에서 분리한 components (Drawer 제외)
│  │  │  │  │  └─ _drawer           // 메뉴에서 사용하는 Drawer 컴포넌트(우측 슬라이드 패널 - ex. 상세, 등록, 수정)
│  │  │  │  ├─ admin-account
│  │  │  │  ├─ app-version
│  │  │  │  ├─ common
│  │  │  │  └─ menu
│  │  │  ├─ coupon-point
│  │  │  │  ├─ coupon
│  │  │  │  │  ├─ page.jsx          // 목록 화면
│  │  │  │  │  ├─ [id]              // 상세
│  │  │  │  │  │  ├─ mod
│  │  │  │  │  │  │  └─ page.jsx    // 등록/수정 화면
│  │  │  │  │  │  └─ page.jsx       // 상세 조회 화면
│  │  │  │  │  ├─ _components
│  │  │  │  │  └─ _drawer
│  │  │  │  ├─ point
│  │  │  │  └─ point-gift
│  │  │  ├─ exhibit-content
│  │  │  │  ├─ banner
│  │  │  │  ├─ event
│  │  │  │  ├─ faq
│  │  │  │  ├─ giftcard
│  │  │  │  ├─ info
│  │  │  │  ├─ notice
│  │  │  │  └─ terms
│  │  │  ├─ history
│  │  │  │  ├─ download-history
│  │  │  │  ├─ login-history
│  │  │  │  ├─ modification-history
│  │  │  │  └─ terms-history
│  │  │  ├─ inquiry
│  │  │  │  ├─ faq
│  │  │  │  ├─ illegal-parking-report
│  │  │  │  ├─ one-on-one
│  │  │  │  ├─ payment-agent
│  │  │  │  └─ sharing-request
│  │  │  ├─ layout.tsx
│  │  │  ├─ page.tsx
│  │  │  ├─ partner-facility
│  │  │  │  ├─ assigned
│  │  │  │  ├─ facility
│  │  │  │  ├─ parking-report
│  │  │  │  └─ partner
│  │  │  ├─ payment
│  │  │  │  ├─ payment
│  │  │  │  └─ payment-history
│  │  │  ├─ test
│  │  │  │  ├─ comp
│  │  │  │  │  └─ page.jsx // [localhost:3000/test/comp](component 참고 페이지)
│  │  │  │  ├─ grid
│  │  │  │  └─ searchform
│  │  │  └─ user
│  │  │     ├─ create-group
│  │  │     └─ user
│  │  ├─ fonts
│  │  ├─ icon.svg
│  │  ├─ layout.tsx
│  │  ├─ login
│  │  │  ├─ layout.jsx
│  │  │  ├─ page.tsx
│  │  │  └─ _components
│  │  │     └─ input
│  │  │        ├─ AuthNumInput.tsx
│  │  │        └─ SendAuthMailInput.tsx
│  │  ├─ page.tsx
│  │  └─ pub                        // * 퍼블리싱 [http://localhost:3000/pub/page](퍼블리싱 목록)
│  │     ├─ components
│  │     ├─ layout
│  │     ├─ layout.tsx
│  │     └─ page
│  ├─ assets
│  ├─ components
│  │  ├─ Accordion
│  │  ├─ Button
│  │  ├─ Carousel
│  │  ├─ Drawer
│  │  ├─ Flag
│  │  ├─ Form
│  │  ├─ Grid
│  │  ├─ Login
│  │  ├─ Modal
│  │  ├─ SearchBox
│  │  └─ Topbar
│  ├─ constants
│  ├─ features
│  │  ├─ button
│  │  ├─ form
│  │  ├─ images
│  │  ├─ tooltip 
│  │  ├─ common-popup       // 공통 팝업
│  │  └─ summary-drawer     // 공통 간략조회 상세 drawer
│  ├─ hooks
│  ├─ layout
│  ├─ middleware.js
│  ├─ store
│  └─ utils
├─ tailwind.config.ts
└─ tsconfig.json

```