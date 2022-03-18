module.exports = {
  rootDir: "../../",
  coverageDirectory: "<rootDir>/tests/__coverage__/",
  collectCoverageFrom: [
    "src/components/**/*.{js,jsx,ts,tsx}",
    "src/core/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/",
    "!<rootDir>/config/"
  ],
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json'
    }
  },
  setupFiles: [
    "<rootDir>/tests/__mocks__/shim.js"
  ],
  roots: [
    "<rootDir>/src/components",
    "<rootDir>/src/core",
    "<rootDir>/tests/"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/__mocks__/fileMock.js",
    "\\.(css|scss|less)$": "<rootDir>/tests/__mocks__/styleMock.js"
  },
  transformIgnorePatterns: [
    "/node_modules/"
  ],
  moduleDirectories: [
    "node_modules"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
