module.exports = {
  "plugins": [
    "vue"
  ],
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-irregular-whitespace": [0, "always"],
    "space-before-function-paren": [0, "always"],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
