module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // silent: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: '(\.test\.ts)$',
  moduleFileExtensions: ['js', 'ts', 'json'],
  testPathIgnorePatterns: ['node_modules', 'dist'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*',
    '!tests',
    '!src/server.ts',
    '!src/**/*.json',
    '!src/interfaces/*'
  ]
}
