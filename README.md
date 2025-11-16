## Flash-Cards

Minimalist, high-clarity study cards with a focus on accessibility and performance.

- Tech: TypeScript, React (Next.js), Tailwind CSS
- Design: Luxury minimalism; accessible; responsive
- Structure: `components/`, `config/`, `pages/`, `lib/`, `uploads/`

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
- `docs/Onboarding.md` — quick start for new agents
- `docs/Standards.md` — coding, design, and review standards
- `docs/PRD.md` — requirements & roadmap
- `docs/SECURITY.md` — security implementation notes
- `SECURITY.md` — security policy and vulnerability reporting
- `CONTRIBUTING.md` — branches, commits, PR workflow

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
