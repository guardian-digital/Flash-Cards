## Flash-Cards — Agent Onboarding

Welcome. This guide gets you productive quickly while keeping quality high.

- **Stack**: TypeScript, React (Next.js), Tailwind CSS
- **Design**: Minimalist, luxury-brand; no emojis; accessible, responsive
- **Structure**: `components/`, `config/`, `pages/`, `lib/`, `uploads/`

### 1) Prerequisites
- Node.js LTS (use `nvm` if available)
- pnpm (preferred) or npm
- VS Code + ESLint + Prettier

### 2) Setup
```bash
pnpm install
pnpm dev
```
- App runs at `http://localhost:3000`

### 3) Project Conventions
- **TypeScript-first**: no `any`, explicit function signatures on exports
- **Components**: PascalCase in `components/`; co-locate simple subcomponents
- **Styling**: Tailwind utility classes; keep class lists readable
- **Accessibility**: Semantic HTML, ARIA as needed, alt text for media
- **Imports**: `import { X } from '@/components/X'`
- **Error handling**: Fail gracefully with user-friendly states and fallbacks

### 4) Design Tokens
Use the `BRAND` constants for colors/typography:
```ts
import { BRAND } from '@/config/brand';
```

### 5) Branching and Commits
- Branch: `feat/…`, `fix/…`, `chore/…`, `docs/…`, `refactor/…`
- Commits: short imperative subject + relevant scope
  - Example: `feat(deck): add spaced-repetition scheduler`

### 6) Pull Requests
- Keep PRs small, self-contained, and well-described
- Include screenshots for UI changes (light/dark if applicable)
- Pass ESLint + Prettier; ensure no type errors

### 7) Testing Checklist
- Renders without errors and is responsive
- Keyboard navigable and screen-reader friendly
- Handles loading/empty/error states

### 8) Where to Start
- Review `docs/Standards.md` and `CONTRIBUTING.md`
- Explore `components/` for UI; `lib/` for logic; `pages/` for routes
- Use `BRAND` tokens from `config/`

### 9) Asking for Help
- Prefer linking to code and being explicit about the question
- Include repro steps or a minimal failing example when possible


