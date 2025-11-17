# Flash-Cards — Agent Onboarding Protocol

This protocol ensures new agents become productive in under 10 minutes.

## Step 1: Prerequisites

- **Node.js**: LTS version (use `nvm` if available)
- **Package manager**: pnpm (preferred) or npm
- **Editor**: VS Code with ESLint + Prettier extensions
- **Git**: Configured with your credentials

## Step 2: Initial Setup

```bash
# Clone the repository (if not already done)
git clone <repo-url>
cd Flash-Cards

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

- App runs at `http://localhost:3000`
- Single-file version is at `index.html` (root directory)

## Step 3: Understand the Project Structure

```
Flash-Cards/
├── components/          # React components (PascalCase)
├── config/             # Brand tokens, configuration
├── pages/              # Next.js routes
├── lib/                # Data, utilities, domain logic
├── scripts/            # Build/utility scripts
├── public/             # Static assets (Next.js)
├── audio/              # Pre-generated MP3 audio files
├── index.html          # Single-file GitHub Pages version
├── app.js              # JavaScript for single-file version
├── logo.svg            # Brand logo (root for GitHub Pages)
└── docs/               # Documentation
```

## Step 4: Key Concepts

### Dual Deployment

1. **Next.js App** (`pages/index.tsx`, `components/`)
   - Full React application
   - TypeScript + Tailwind CSS
   - Runs on `localhost:3000`

2. **Single-File Version** (`index.html`, `app.js`)
   - Zero dependencies
   - Served from GitHub Pages root
   - Must stay in sync with Next.js version

### Brand Tokens

Always use `BRAND` constants from `config/brand.ts`:

```typescript
import { BRAND } from '@/config/brand';

// Use BRAND.colors, BRAND.typography, etc.
```

### Audio System

- **Primary**: Pre-generated ElevenLabs MP3s in `audio/` directory
- **Fallback**: Browser SpeechSynthesis API
- **Generation**: `pnpm run generate-audio` (requires `.env` with `ELEVENLABS_API_KEY`)

### Data Synchronization

- Main data source: `lib/data.ts` (TypeScript)
- Single-file sync: `scripts/sync-decks.js` updates `app.js`
- Run `node scripts/sync-decks.js` after changing `lib/data.ts`

## Step 5: Development Workflow

### Branching

```bash
git checkout -b feat/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### Commits

Follow conventional commits:
- `feat(scope): description`
- `fix(scope): description`
- `chore(scope): description`
- `docs(scope): description`

### Testing

```bash
pnpm test              # Unit tests (Jest)
pnpm test:e2e          # E2E tests (Playwright)
pnpm test:all          # Run all tests
```

### Code Quality

```bash
pnpm lint              # ESLint
pnpm lint:fix          # Auto-fix linting issues
pnpm type-check        # TypeScript type checking
```

## Step 6: Design Standards

- **Minimalist, luxury-brand aesthetic**
- **No emojis in UI** (except where explicitly requested)
- **Accessible**: Semantic HTML, ARIA attributes, keyboard navigation
- **Responsive**: Mobile-first design, touch-optimized
- **Typography**: Use brand tokens, maintain hierarchy
- **Colors**: Use `BRAND.colors` only

## Step 7: Common Tasks

### Adding a New Card

1. Edit `lib/data.ts` — add to appropriate deck
2. Run `node scripts/sync-decks.js` — sync to `app.js`
3. Generate audio: `pnpm run generate-audio` (if narration needed)

### Updating Branding

1. Edit `config/brand.ts`
2. Update both Next.js and single-file versions
3. Test on mobile devices

### Fixing a Bug

1. Reproduce locally
2. Check both Next.js and single-file versions
3. Write/update tests
4. Commit with `fix(scope): description`

## Step 8: Agent Handoff

At the end of your session:

```bash
pnpm run handoff:generate
```

This updates `docs/AGENT_STATUS.md` with:
- Current project state
- Recent changes
- Pending tasks
- Important context

## Step 9: Getting Help

- **Code questions**: Link to specific files/lines
- **Design questions**: Reference `docs/Standards.md` and `config/brand.ts`
- **Architecture questions**: Check `docs/PRD.md` and `docs/Standards.md`

## Step 10: Review Checklist

Before ending your session:

- [ ] Code passes `pnpm lint` and `pnpm type-check`
- [ ] Tests pass (`pnpm test:all`)
- [ ] Both Next.js and single-file versions work
- [ ] Mobile responsiveness verified
- [ ] `pnpm run handoff:generate` executed
- [ ] Changes committed and pushed (if applicable)

---

**You're ready to code!** Start with `docs/AGENT_STATUS.md` for current context.

