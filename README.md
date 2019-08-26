# nodejs-express-boilerplate
Boilerplate for creating an app in nodejs+express with test, configuration and logging infrastructure.

## Table of Contents
- [Setup](#setup)
  - [Visual Studio Code Setup](#visual-studio-code-setup)
  - [Prettier Setup](#prettier-setup)
  - [ESLint Setup](#eslint-setup)

## Setup
## Visual Studio Code Setup
```javascript
// .vscode/settings.json
{
  "eslint.validate": [
    {
      "language": "javascript",
      "autoFix": true
    }
  ],
  "eslint.autoFixOnSave": true,
  "editor.formatOnSave": false,
  "[javascript]": {
    "editor.formatOnSave": true
  }
}
```
## Prettier Setup
```javascript
// .prettierrc.js
module.exports = {
  singleQuote: true,
  semi: false
}
```
### ESLint Setup
```
npm install eslint --save-dev
./node_modules/.bin/eslint --init
```
```javascript
// .eslintrc.js
module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
}
```