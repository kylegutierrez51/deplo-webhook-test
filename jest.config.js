
const config = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.js', '**/*.test.js'],
  // Empty transform = no Babel; Jest loads the files as native ES modules
  // (requires running Node with --experimental-vm-modules, see "test" script)
  transform: {},
  // setupFilesAfterEnv: ['./jest.setup.js'],

  collectCoverage: true,
  coverageThreshold: {
    global: { lines: 80, functions: 80, branches: 80 }
  },

  moduleNameMapper: {
    '\\.(css|png)$': '<rootDir>/__mocks__/fileMock.js',
    '^@\/(.*)$': '<rootDir>/src/$1'
  },

  clearMocks: true,
  restoreMocks: true,
}

export default config;