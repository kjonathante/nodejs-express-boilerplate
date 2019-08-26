# nodejs-express-boilerplate
Boilerplate for creating an app in nodejs+express with test, configuration and logging infrastructure.

## Table of Contents
- [Setup](#setup)
  - [Visual Studio Code Setup](#visual-studio-code-setup)
  - [Prettier Setup](#prettier-setup)

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