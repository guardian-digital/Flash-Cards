const { spawn } = require('child_process');
const http = require('http');

const MAX_WAIT_TIME = 120000; // 2 minutes
const CHECK_INTERVAL = 1000; // Check every second
const SERVER_URL = 'http://localhost:3000';

// Start Next.js dev server
console.log('Starting Next.js dev server...');
const server = spawn('pnpm', ['dev'], {
  stdio: 'inherit',
  shell: true,
});

let startTime = Date.now();

// Function to check if server is ready
function checkServer() {
  return new Promise((resolve) => {
    const req = http.get(SERVER_URL, (res) => {
      resolve(res.statusCode === 200 || res.statusCode === 404); // 404 is OK, means server is up
    });
    req.on('error', () => resolve(false));
    req.setTimeout(2000, () => {
      req.destroy();
      resolve(false);
    });
  });
}

// Wait for server to be ready
async function waitForServer() {
  while (Date.now() - startTime < MAX_WAIT_TIME) {
    if (await checkServer()) {
      console.log('✓ Server is ready!');
      process.exit(0);
    }
    await new Promise((resolve) => setTimeout(resolve, CHECK_INTERVAL));
  }
  console.error('✗ Server failed to start within timeout');
  process.exit(1);
}

// Handle server process
server.on('error', (error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});

server.on('exit', (code) => {
  if (code !== 0 && code !== null) {
    console.error(`Server exited with code ${code}`);
    process.exit(1);
  }
});

// Start checking
waitForServer();

