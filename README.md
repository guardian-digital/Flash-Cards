## Flash-Cards

Minimalist, high-clarity study cards with a focus on accessibility and performance.

- Tech: TypeScript, React (Next.js), Tailwind CSS
- Design: Luxury minimalism; accessible; responsive
- Structure: `components/`, `config/`, `pages/`, `lib/`, `uploads/`

**Copyright © 2025 Scottsdale Cart Tours / Guardian Digital. All rights reserved.**  
See `LICENSE` and `docs/INTELLECTUAL_PROPERTY.md` for licensing and IP protection information.

### App Mode (Next.js)
```bash
pnpm install
pnpm dev
```
App: `http://localhost:3000`

### Single-File Mode (GitHub Pages)
- One-file deploy located at `public/index.html`
- Zero dependencies, zero backend
- To publish on GitHub Pages, serve `public/index.html` from the default branch or `gh-pages`

### Testing

**Unit Tests (Jest)**
```bash
pnpm test              # Run unit tests
pnpm test:watch        # Run in watch mode
pnpm test:coverage     # Generate coverage report
```

**E2E Tests (Playwright)**
```bash
pnpm test:e2e          # Run E2E tests
pnpm test:e2e:ui       # Run with UI mode
pnpm test:all          # Run all tests
```

### Documentation
- **`!!! START HERE - READ FIRST.md`** — **Start here!** Entry point for new agents
- `docs/AGENT_ONBOARDING_PROTOCOL.md` — Complete onboarding guide (5-step protocol)
- `docs/AGENT_STATUS.md` — Current project status (auto-generated, run `pnpm run handoff:generate`)
- `docs/Onboarding.md` — Quick start reference
- `docs/Standards.md` — Coding, design, and review standards
- `docs/PRD.md` — Requirements & roadmap
- `docs/SECURITY.md` — Security implementation notes
- `SECURITY.md` — Security policy and vulnerability reporting
- `CONTRIBUTING.md` — Branches, commits, PR workflow

### Brand Tokens
Use `config/brand.ts` for colors, typography, radii, shadows.

### Security & Code Quality
- **Dependabot**: Automated dependency updates (weekly)
- **CodeQL**: Security analysis on every push/PR
- **npm audit**: Vulnerability scanning in CI
- **Gitleaks**: Secret scanning to prevent credential leaks
- **TruffleHog**: Advanced secret scanning (complementary to Gitleaks)
- **ESLint**: Code quality and security linting
- **Jest**: Unit tests for scripts and utilities
- **Playwright**: E2E tests for user flows

Run security checks locally:
```bash
pnpm audit          # Check for vulnerabilities
pnpm lint           # Run ESLint
pnpm type-check     # TypeScript type checking
pnpm test           # Run unit tests
pnpm test:e2e       # Run E2E tests
```
See `SECURITY.md` for vulnerability reporting.
