module.exports = {
  // 表示ESLint规则，将被限制在根目录下
  root: true,
  env: {
    // 表示以下环境下，启用ESLint
    browser: true,
    node: true,
    es6: true,
    'vue/setup-compiler-macros': true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  plugins: ['vue', 'html', 'prettier'],
  parserOptions: {
    // parser: '@babel/eslint-parser',
    // sourceType: 'module'
  },
  // 我们主要使用以下规则配置
  // 错误急别分为三类
  // 1、off 或 0 表示关闭验证规则
  // 2、warn 或 1 表示开启警告验证规则
  // 3、error 或 2 表示开启错误验证规则，程序会报错退出
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 新增配置项，表示方法名与后面括号的空格不校验
    'space-before-function-paren': 'off',
    //关闭组件命名规则
    'vue/multi-word-component-names': 'off',
    // 未使用声明  关闭
    'no-unused-vars': 'off'
  }
}
