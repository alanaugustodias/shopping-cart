module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'json', 'jsx'],
    setupFiles: ['<rootDir>/enzyme.config.js', 'jest-canvas-mock'],
    testEnvironment: 'jsdom',
    testMatch: ['**/?(*.)spec.js'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    testURL: 'http://localhost',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    verbose: false
};
