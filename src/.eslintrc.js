module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "mocha": true
  },
  "plugins": [
    "standard",
    "lodash-fp",
    "fp"
  ],
  "extends": [
    "standard",
    "plugin:lodash-fp/recommended",
    "plugin:fp/recommended"
  ],
  "rules": {
    "semi": ["error", "always"],
    "lodash-fp/consistent-name": ["error", "fp"]
  }
}
