export default {
  bail: true,

  clearMocks: true,

  coverageProvider: "v8",

  preset: "ts-jest",

  testMatch: ["**/*.spec.ts"],

  collectCoverage: true,

  collectCoverageFrom: ["<rootDir>/src/controllers/**/*.ts"],

  coverageDirectory: "coverage",

  coverageReporters: ["text-summary", "lcov"],
};