module.exports = {
  collectCoverageFrom: [
    '<rootDir>/app/**/*.ts',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  moduleNameMapper: {
    '@/test/(.+)': '<rootDir>/test/$1',
    '@/(.+)': '<rootDir>/app/$1'
  },
  testMatch: ['**/*.(spec|test).ts'],
  roots: [
    '<rootDir>/app',
    '<rootDir>/test'
  ],
  transform: {
    '\\.ts$': 'ts-jest'
  },
  clearMocks: true,
  setupFiles: ['dotenv/config']
}
