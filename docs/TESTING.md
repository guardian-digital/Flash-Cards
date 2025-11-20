# Flash-Cards — Testing Guidelines

**Last Updated**: 2025-11-20

## Testing Philosophy

- **Local First**: All testing should be done locally before pushing
- **Overnight Work**: CI/CD tests are disabled during overnight hours to save costs
- **Manual Triggers**: CI can be manually triggered via workflow_dispatch if needed

## Local Testing

### Unit Tests
```bash
# Run all unit tests
pnpm test

# Watch mode for development
pnpm test:watch

# Coverage report
pnpm test:coverage
```

### E2E Tests
```bash
# Run all E2E tests
pnpm test:e2e

# Interactive UI mode
pnpm test:e2e:ui

# Single browser (faster)
pnpm test:e2e:local
```

### All Tests
```bash
# Run both unit and E2E tests
pnpm test:all
```

## CI/CD Testing

### Automatic Runs
- CI runs automatically on:
  - Push to `main` branch
  - Pull requests to `main` branch
- **Overnight Policy**: CI is configured to skip automatic runs during overnight hours (00:00-08:00 UTC) to save costs

### Manual Triggers
If you need to run CI tests manually:
1. Go to GitHub Actions tab
2. Select the "CI" workflow
3. Click "Run workflow"
4. Select branch and click "Run workflow"

## Test Coverage

### Current Coverage
- **Unit Tests**: Jest for utility functions and components
- **E2E Tests**: Playwright for full user flows
- **Type Checking**: TypeScript compiler

### Coverage Goals
- Unit test coverage: > 80%
- E2E test coverage: All critical user flows
- Type coverage: 100% (strict TypeScript)

## Best Practices

1. **Run tests locally before committing**
   ```bash
   pnpm test:all
   ```

2. **Fix failing tests before pushing**
   - Don't push broken tests
   - Don't skip tests with `skip` or `only`

3. **Write tests for new features**
   - Unit tests for utility functions
   - E2E tests for user-facing features

4. **Keep tests fast**
   - Unit tests should be < 5 seconds
   - E2E tests should be < 30 seconds total

5. **Overnight work**
   - Run tests locally only
   - CI will run automatically on next push during business hours

## Troubleshooting

### Tests failing locally
1. Check Node.js version (should be 20+)
2. Run `pnpm install` to ensure dependencies are up to date
3. Clear cache: `rm -rf .next node_modules/.cache`
4. Check for TypeScript errors: `pnpm type-check`

### E2E tests failing
1. Ensure Playwright browsers are installed: `pnpm exec playwright install`
2. Check that the dev server is running: `pnpm dev`
3. Run with UI mode to see what's happening: `pnpm test:e2e:ui`

### CI tests failing
1. Check the GitHub Actions logs
2. Reproduce locally with the same Node.js version
3. Ensure all dependencies are committed (lockfile is up to date)

## Test Files Structure

```
__tests__/          # Unit tests (Jest)
e2e/                # E2E tests (Playwright)
  app.spec.ts       # Main app E2E tests
playwright.config.ts # Playwright configuration
jest.config.js      # Jest configuration
```

## Continuous Integration

### Workflow Configuration
- **File**: `.github/workflows/ci.yml`
- **Triggers**: Push to main, PRs, manual dispatch
- **Jobs**: Build, Unit Tests, E2E Tests
- **Timeout**: 10min build, 5min unit tests, 15min E2E tests
- **Artifact Retention**: 7 days (cost optimization)

### Cost Optimization
- Concurrency control cancels duplicate runs
- Timeout limits prevent runaway processes
- Reduced artifact retention (7 days vs 30 days)
- Overnight hours skip automatic runs
