module.exports = {
  resetMocks: false,
  rootDir: '.',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },
  timers: 'modern',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/config/fileMock.js',
    '@app/(.*)': '<rootDir>/src/$1'

  },
  setupFilesAfterEnv: ['@testing-library/jest-dom', '<rootDir>/src/setupTests.js'],
  moduleDirectories: ['node_modules', '<rootDir>'],
}
