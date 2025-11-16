## Contributing to Flash-Cards

Thank you for contributing. This guide ensures consistency, quality, and speed.

### Branching
- Use short, descriptive branches:
  - `feat/<scope>-<short-description>`
  - `fix/<scope>-<short-description>`
  - `docs/…`, `chore/…`, `refactor/…`

### Commits
- Imperative, concise subject; include scope when helpful
  - `feat(deck): add spaced-repetition scheduler`
  - `fix(a11y): correct card heading levels`

### Pull Requests
- Keep PRs small and focused
- Include: context, checklist, and screenshots for UI changes
- Ensure:
  - ESLint + Prettier pass
  - No TypeScript errors
  - Accessible and responsive UI

### Code Quality
- TypeScript-first with explicit exported signatures
- Avoid `any` and unsafe casting
- Use `BRAND` tokens; avoid hard-coded colors and ad-hoc typography
- Tailwind classes should remain readable (group logically)
- Prefer composition; avoid deeply nested conditionals

### Accessibility
- Semantic HTML, proper roles/labels, alt text
- Maintain keyboard navigation and focus management

### Security & Privacy
- Validate inputs; sanitize user-generated content
- Avoid logging sensitive data

### How to Run
```bash
pnpm install
pnpm dev
```


