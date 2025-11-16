/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'node',
  roots: ['<rootDir>/__tests__'],
  testMatch: ['**/*.test.js', '**/*.test.ts'],
  collectCoverageFrom: [
    'scripts/**/*.js',
    '!scripts/**/*.test.js',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
};

module.exports = config;

