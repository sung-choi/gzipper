module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jasmine: true,
  },
  extends: ['prettier', 'eslint:recommended'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 0,
  },
}
