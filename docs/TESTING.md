# Testing Guide

This project includes both unit tests and end-to-end (E2E) tests to ensure code quality and functionality.

## Test Structure

```
├── __tests__/          # Unit tests (Jest)
│   └── sync-decks.test.js
├── e2e/                # E2E tests (Playwright)
│   └── app.spec.ts
├── jest.config.js      # Jest configuration
└── playwright.config.ts # Playwright configuration
```

## Unit Tests (Jest)

Unit tests focus on testing individual functions and scripts in isolation.

### Running Unit Tests

```bash
pnpm test              # Run all unit tests
pnpm test:watch        # Run in watch mode (auto-rerun on changes)
pnpm test:coverage      # Generate coverage report
```

### What's Tested

- **sync-decks.js**: Tests the data synchronization script that converts TypeScript DECKS array to JavaScript
  - Parsing TypeScript array syntax
  - Handling apostrophes in card text
  - JSON conversion and validation
  - Preserving deck structure properties

### Writing Unit Tests

Create test files in `__tests__/` with the pattern `*.test.js`:

```javascript
describe('MyScript', () => {
  test('should do something', () => {
    expect(true).toBe(true);
  });
});
```

## E2E Tests (Playwright)

E2E tests verify the complete user flow in the browser.

### Running E2E Tests

**Important**: For local development, start the dev server manually first:

```bash
# Terminal 1: Start the dev server
pnpm dev

# Terminal 2: Run E2E tests
pnpm test:e2e          # Run all E2E tests
pnpm test:e2e:ui      # Run with Playwright UI mode (interactive)
```

Or use the helper script:
```bash
node scripts/start-dev-server.js  # Starts server and waits for it to be ready
```

**Note**: In CI, the server starts automatically. For local testing, you need to start it manually.

### What's Tested

- **App Initialization**: App loads and displays correctly
- **Card Display**: Cards render with front/back content
- **Card Flipping**: Click to flip functionality
- **Navigation**: Next/Previous button navigation
- **Deck Selection**: Changing decks via dropdown
- **Controls**: Voice, Shuffle, Auto-advance toggles
- **Keyboard Navigation**: Arrow keys, Space, Enter
- **Mobile Gestures**: Swipe gestures on mobile viewports
- **Accessibility**: ARIA labels and keyboard navigation

### Writing E2E Tests

Create test files in `e2e/` with the pattern `*.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';

test('should do something', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading')).toBeVisible();
});
```

## CI/CD Integration

Tests run automatically on:
- Every push to `main`
- Every pull request

The CI workflow includes:
1. **Build & Lint**: TypeScript check, ESLint, Next.js build
2. **Unit Tests**: Jest test suite
3. **E2E Tests**: Playwright test suite (with browser installation and automatic server startup)

## Test Coverage

View coverage reports:
- **Unit tests**: `coverage/lcov-report/index.html` (after running `pnpm test:coverage`)
- **E2E tests**: `playwright-report/index.html` (after running `pnpm test:e2e`)

## Troubleshooting

### E2E Tests Timeout Waiting for Server

If you see "Timed out waiting for webServer", make sure:
1. The dev server is running: `pnpm dev` (in a separate terminal)
2. Port 3000 is not already in use
3. The server has fully started (wait for "Ready" message)

### Unit Tests Fail
- Check that test files are in `__tests__/` directory
- Verify Jest configuration in `jest.config.js`
- Run with `--verbose` flag for more details

### E2E Tests Fail
- Ensure Next.js dev server is running (or use `webServer` in config)
- Check browser installation: `pnpm exec playwright install`
- Run with `--headed` flag to see browser: `pnpm test:e2e --headed`
- Check Playwright trace: `playwright-report/`

### Tests Timeout
- Increase timeout in test file: `test.setTimeout(60000)`
- Check for slow operations (network requests, animations)
- Verify test environment matches CI environment

## Best Practices

1. **Unit Tests**: Test one thing at a time, use descriptive test names
2. **E2E Tests**: Test user flows, not implementation details
3. **Keep Tests Fast**: Unit tests should be < 1s, E2E tests < 30s each
4. **Isolation**: Each test should be independent and not rely on others
5. **Cleanup**: Clean up test data and state after each test
