# blue-chat

pnpm monorepo — React(web) + NestJS(api)

## 구조

```
apps/web/   # 프론트 (Vite + React + Tailwind)
apps/api/   # 백엔드 (NestJS)
```

---

## 전역 (루트)

### 설치

```bash
pnpm install          # web + api 전체
```

### 실행

| 명령 | 설명 |
|------|------|
| `pnpm dev` | web + api 동시 |
| `pnpm dev:web` | 프론트만 |
| `pnpm dev:api` | 백엔드만 |

### 빌드

| 명령 | 설명 |
|------|------|
| `pnpm build` | web + api 전체 |
| `pnpm build:web` | 프론트만 |
| `pnpm build:api` | 백엔드만 |

### 기타

| 명령 | 설명 |
|------|------|
| `pnpm lint` | web + api lint |
| `pnpm commit` | commitizen 커밋 |

### 패키지 추가 (루트에서)

```bash
pnpm add <pkg> --filter @blue-chat/web      # 프론트
pnpm add <pkg> --filter @blue-chat/api      # 백엔드
pnpm add -D <pkg> --filter @blue-chat/web   # devDependency
```

---

## Front (`apps/web`)

| | |
|---|---|
| 패키지명 | `@blue-chat/web` |
| 스택 | Vite, React, TypeScript, Tailwind v4 |

```bash
pnpm dev:web              # 개발 (루트)
pnpm build:web            # 빌드
pnpm --filter @blue-chat/web lint
pnpm --filter @blue-chat/web preview   # 빌드 미리보기
```

`apps/web` 폴더에서 직접:

```bash
pnpm dev
pnpm build
pnpm lint
```

경로 별칭: `@/` → `src/`

---

## Back (`apps/api`)

| | |
|---|---|
| 패키지명 | `@blue-chat/api` |
| 스택 | NestJS |

```bash
pnpm dev:api              # 개발 watch (루트)
pnpm build:api            # 빌드
pnpm --filter @blue-chat/api lint
pnpm --filter @blue-chat/api test
```

`apps/api` 폴더에서 직접:

```bash
pnpm dev                  # = nest start --watch
pnpm build
pnpm start:prod           # node dist/main
pnpm test
```
