module.exports = {
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js'
  ],
  coverageReporters: ['html', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  }
};
