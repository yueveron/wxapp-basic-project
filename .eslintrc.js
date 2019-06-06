module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true
  },
  "globals": {
    "App": true,
    "wx": true,
    "Page": true,
    "getApp": true,
    "getCurrentPages": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module",
  },
  "rules": {
    // enable additional rules
    // 强制使用一致的缩进
    // "indent": ["error", 2],
    // override default options for rules from base configurations
    // 禁止在条件语句中出现赋值操作符
    "no-cond-assign": ["error", "always"],
    // disable rules from base configurations
    "no-console": "off",
    "no-debugger": 0,
  }
}