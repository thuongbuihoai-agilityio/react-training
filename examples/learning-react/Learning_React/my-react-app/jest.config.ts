import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  verbose: true,
  transform: {
    ".+\\.(css|less|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "jest-transform-stub",
  },
  moduleNameMapper: {
    "^@app(.*)$": "<rootDir>/src/Example-SWR/app$1",
    "^@root(.*)$": "<rootDir>/src/Example-SWR$1",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|ts)$",
  testEnvironment: "jsdom",
  moduleDirectories: [
    "node_modules",
    "bower_components",
    "shared",
    "src/Example-SWR",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePaths: ["node_modules", "<rootDir>/src/Example-SWR", "/shared/vendor/modules"],
  transformIgnorePatterns: [
    "/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$",
  ],
  setupFilesAfterEnv: ["./jest.setup.js"]
};

module.exports = config;