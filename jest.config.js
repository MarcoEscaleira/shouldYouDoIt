module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-file"
  },
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  moduleNameMapper: {
    "~(.*)$": "<rootDir>/src/$1"
  },
  modulePaths: ["src"],
  moduleDirectories: ["node_modules", "src"],
  globals: {
    "ts-jest": {
      diagnostics: true
    }
  },
  setupFilesAfterEnv: ["<rootDir>/src/jest-setup.ts"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/index.tsx",
    "!<rootDir>/node_modules/",
    "!**/coverage/**"
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
};
