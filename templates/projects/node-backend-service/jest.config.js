module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(\.test\.ts)$',
  // silent: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts', 'json'],
  testPathIgnorePatterns: ['node_modules', 'dist'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*',
    '!tests',
    '!src/*.test.ts',
    '!src/**/*.json',
    '!src/interfaces/*',
    '!src/@types/*'
  ]
}
