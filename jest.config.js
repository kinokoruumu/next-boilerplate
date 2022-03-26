module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  testMatch: null,
  testRegex: "(/__tests__/.*)\\.test\\.(tsx?)$",
  setupFiles: ["./jest-setup.js"],
  collectCoverageFrom: ["**/*.ts"],
  coveragePathIgnorePatterns: [
    "__mocks__",
    "next-env.d.ts",
    "node_modules",
    "public",
    "components",
    "config",
    "constants",
    "pages",
    "types",
  ],
};
