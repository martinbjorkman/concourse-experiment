
module.exports = {
    coverageDirectory: "coverage",
    testMatch: [
      "**/test/unit/**/*.spec.js"
    ],
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    setupFiles: [
      '<rootDir>/test/unit/helpers/setup.js'
    ]
  };
  