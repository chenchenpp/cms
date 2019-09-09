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
    "no-eq-null": 2,// 禁止对null使用==或!=运算符
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
    "semi": [2, "always"],//语句强制分号结尾
    "spaced-comment": 0,//注释风格要不要有空格什么的
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
