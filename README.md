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

### Documentation
- `docs/Onboarding.md` — quick start for new agents
- `docs/Standards.md` — coding, design, and review standards
- `docs/PRD.md` — requirements & roadmap
- `docs/SECURITY.md` — security notes
- `CONTRIBUTING.md` — branches, commits, PR workflow

### Brand Tokens
Use `config/brand.ts` for colors, typography, radii, shadows.


