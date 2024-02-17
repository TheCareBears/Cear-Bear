module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    "semi": "always", // Enforce semicolons at the end of statements
    "indent": ["error", 2], // Enforce consistent indentation (2 spaces)
    "quotes": ["error", "single"], // Enforce the use of single quotes
    "comma-dangle": ["error", "always-multiline"], // Enforce trailing commas in multiline object literals and arrays
    "no-unused-vars": "warn", // Warn about unused variables
    "space-before-blocks": ["error", "always"], // Enforce consistent spacing before blocks
    "no-multi-spaces": "error", // Disallow multiple spaces
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }], // Enforce consistent brace style for blocks
    "svelte3/require-jsdoc": "error", // Require JSDoc comments for Svelte components
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }], // Enforce consistent spacing between keys and values in object literal properties
    "max-len": ["error", { "code": 120, "ignoreUrls": true }], // Enforce a maximum line length




  }
}
