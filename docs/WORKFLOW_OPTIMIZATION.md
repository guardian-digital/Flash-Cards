# GitHub Actions Workflow Optimization

This document outlines the cost-saving optimizations implemented in our GitHub Actions workflows.

## Cost-Saving Measures

### 1. Concurrency Controls ✅

All workflows now include concurrency groups that automatically cancel in-progress runs when a new commit is pushed:

```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```

**Benefits**:
- Prevents duplicate runs from consuming minutes
- Automatically cancels outdated runs
- Saves ~30-50% on workflow costs

### 2. Timeout Limits ✅

All jobs now have explicit timeout limits to prevent runaway processes:

- **Build jobs**: 10 minutes
- **Unit tests**: 5 minutes
- **E2E tests**: 15 minutes
- **Security scans**: 5-10 minutes
- **CodeQL**: 30 minutes

**Benefits**:
- Prevents infinite loops or stuck processes
- Fails fast on actual issues
- Predictable cost per run

### 3. Fail-Fast Strategy ✅

CodeQL analysis now uses `fail-fast: true` to stop immediately on first failure:

```yaml
strategy:
  fail-fast: true
```

**Benefits**:
- Stops matrix builds on first failure
- Reduces unnecessary parallel runs
- Faster feedback

### 4. Workflow Cleanup Script ✅

A cleanup script is available to cancel active runs and optionally delete old failed runs:

```bash
# Cancel in-progress/queued runs
pnpm run workflow:cleanup

# Also delete failed runs older than 30 days
pnpm run workflow:cleanup:delete-old
```

**Usage**:
```bash
# Cancel active runs only
node scripts/cleanup-workflow-runs.js

# Cancel active runs and delete old failed runs
node scripts/cleanup-workflow-runs.js --delete-old

# Custom days threshold (default: 30)
node scripts/cleanup-workflow-runs.js --delete-old --days=60
```

## Workflow Status

### CI Workflow (`.github/workflows/ci.yml`)
- ✅ Concurrency control
- ✅ Timeout limits (10min build, 5min tests, 15min E2E)
- ✅ Parallel jobs (build, unit-tests, e2e-tests)

### Security Workflow (`.github/workflows/security.yml`)
- ✅ Concurrency control
- ✅ Timeout limits (5min audit, 5min lint, 10min secrets)
- ✅ Parallel jobs (npm-audit, lint, secrets-scan)

### CodeQL Workflow (`.github/codeql-analysis.yml`)
- ✅ Concurrency control
- ✅ Timeout limit (30min)
- ✅ Fail-fast strategy

## Cost Estimation

### Before Optimization
- **Average run time**: ~20-30 minutes
- **Failed runs**: ~14 in recent history
- **Estimated cost**: ~$0.50-1.00 per failed run (if using paid minutes)

### After Optimization
- **Average run time**: ~10-15 minutes (with timeouts)
- **Cancelled duplicates**: Automatic
- **Estimated savings**: ~40-60% reduction in minutes consumed

## Monitoring

### Check Active Runs
```bash
gh run list --limit 20 --json status,conclusion,name
```

### Check Failed Runs
```bash
gh run list --limit 50 --json status,conclusion,name --jq '.[] | select(.conclusion == "failure")'
```

### Cancel Specific Run
```bash
gh run cancel <run-id>
```

### Delete Old Failed Runs
```bash
gh run delete <run-id>
```

## Best Practices

1. **Run cleanup regularly**: Use the cleanup script weekly or after major pushes
2. **Monitor workflow runs**: Check for stuck or failed runs regularly
3. **Review timeout limits**: Adjust if jobs consistently timeout (may indicate real issues)
4. **Use concurrency**: Always include concurrency controls in new workflows

## Troubleshooting

### Workflows Not Cancelling
- Check that `concurrency` is at the workflow level (not job level)
- Verify `cancel-in-progress: true` is set
- Ensure GitHub Actions has permission to cancel runs

### Timeouts Too Short
- Increase timeout if jobs consistently fail due to time limits
- Consider optimizing slow steps (caching, parallelization)

### Cleanup Script Fails
- Ensure `gh` CLI is authenticated: `gh auth login`
- Check GitHub token permissions
- Verify run IDs exist before attempting to cancel/delete

---

**Last Updated**: 2025-11-17  
**Maintained By**: Development Team

