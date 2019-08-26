# nodejs-express-boilerplate [![Codeship Status for kjonathante/nodejs-express-boilerplate](https://app.codeship.com/projects/14de5090-a9ec-0137-48eb-12402f6f79c5/status?branch=master)](https://app.codeship.com/projects/361581)
Boilerplate for creating an app in nodejs+express with test, configuration and logging infrastructure.

## Table of Contents
- [Setup](#setup)
  - [Visual Studio Code Setup](#visual-studio-code-setup)
  - [Prettier Setup](#prettier-setup)
  - [ESLint Setup](#eslint-setup)
  - [Test Infrastructure](#test-infrastructure)
  - [Configuration Infrastructure](#configuration-infrastructure)

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
  },
  "[javascriptreact]": {
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
## ESLint Setup
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
    node: true,
    jest: true
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
## Test Infrastructure
```
npm install --save-dev jest supertest
./node_modules/.bin/jest --init
```
```javascript
// jest.config.js
module.exports = {
  coverageDirectory: 'coverage',
  testEnvironment: 'node'
}
```
## Configuration Infrastructure
```
npm install dotenv
```
```javascript
// config/index.js
require('dotenv').config()

module.exports = {
  secretKey: process.env.SECRET_KEY
}
```