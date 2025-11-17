#!/usr/bin/env node

/**
 * Cleanup Failed Workflow Runs
 * 
 * Cancels in-progress/queued runs and optionally deletes old failed runs
 * to save GitHub Actions minutes and costs.
 * 
 * Usage:
 *   node scripts/cleanup-workflow-runs.js [--delete-old] [--days=30]
 */

const { execSync } = require('child_process');

const args = process.argv.slice(2);
const deleteOld = args.includes('--delete-old');
const daysArg = args.find(arg => arg.startsWith('--days='));
const days = daysArg ? parseInt(daysArg.split('=')[1]) : 30;

console.log('🧹 Cleaning up workflow runs...\n');

try {
  // Get in-progress and queued runs
  console.log('📋 Checking for in-progress/queued runs...');
  const activeRuns = execSync(
    `gh run list --limit 100 --json databaseId,status,name --jq '.[] | select(.status == "in_progress" or .status == "queued") | .databaseId'`,
    { encoding: 'utf-8' }
  ).trim();

  if (activeRuns) {
    const runIds = activeRuns.split('\n').filter(Boolean);
    console.log(`   Found ${runIds.length} active run(s) to cancel`);
    
    for (const runId of runIds) {
      try {
        execSync(`gh run cancel ${runId}`, { stdio: 'inherit' });
        console.log(`   ✅ Cancelled run ${runId}`);
      } catch (e) {
        console.log(`   ⚠️  Could not cancel run ${runId}: ${e.message}`);
      }
    }
  } else {
    console.log('   ✅ No active runs to cancel');
  }

  // Get old failed runs (optional)
  if (deleteOld) {
    console.log(`\n🗑️  Checking for failed runs older than ${days} days...`);
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    const cutoffISO = cutoffDate.toISOString();

    const oldFailedRuns = execSync(
      `gh run list --limit 1000 --json databaseId,status,conclusion,createdAt --jq ".[] | select(.conclusion == \\"failure\\" and .createdAt < \\"${cutoffISO}\\") | .databaseId"`,
      { encoding: 'utf-8' }
    ).trim();

    if (oldFailedRuns) {
      const runIds = oldFailedRuns.split('\n').filter(Boolean);
      console.log(`   Found ${runIds.length} old failed run(s) to delete`);
      
      for (const runId of runIds) {
        try {
          execSync(`gh run delete ${runId}`, { stdio: 'inherit' });
          console.log(`   ✅ Deleted run ${runId}`);
        } catch (e) {
          console.log(`   ⚠️  Could not delete run ${runId}: ${e.message}`);
        }
      }
    } else {
      console.log(`   ✅ No old failed runs to delete`);
    }
  }

  console.log('\n✅ Cleanup complete!');
} catch (error) {
  console.error('❌ Error during cleanup:', error.message);
  process.exit(1);
}

