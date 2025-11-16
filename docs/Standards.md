## Flash-Cards — Project Standards

### Technology
- **UI**: React (Next.js) + TypeScript + Tailwind CSS
- **Imports**: ES Modules with absolute aliases (e.g., `@/components/...`)
- **Accessibility**: Semantic HTML, ARIA when necessary, alt text, focus states

### Design System
- Use `BRAND` tokens from `config/brand.ts`:
  - Color, typography, radii, shadow
- Style via Tailwind utility classes; avoid inline styles except when dynamic
- Maintain visual restraint: ample whitespace, consistent typography scale

### Code Style
- Strive for readability with descriptive names
- Keep components small, composable, declarative
- Prefer early returns over deep nesting
- Avoid unnecessary try/catch; handle errors meaningfully
- Document non-obvious utilities with concise JSDoc

### File/Folder Conventions
- `components/ComponentName/` for complex components with subparts
- `lib/` for domain logic (e.g., schedulers, storage, parsing)
- `pages/` for Next.js routes only
- `uploads/` for user-generated assets (gitignored when appropriate)

### Error States
- Always handle: loading, empty, error
- Provide accessible messaging and clear recovery actions

### Performance
- Memoize expensive renders; avoid unnecessary re-renders
- Code-split large routes/components
- Optimize images and fonts (preload critical assets when justified)

### Reviews
- Small, focused PRs with context, checklist, and screenshots
- Ensure ESLint and Prettier pass; no type errors


