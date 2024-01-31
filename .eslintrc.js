module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  parserOptions: {
    "ecmaVersion": 5,
    "sourceType": "module",
    "ecmaFeatures": true,
    "project": './tsconfig.json',
  },
  rules: {
    'no-undef': 'off', // 允许使用未声明的变量
    'no-shadow': 'off', // 允许变量覆盖声明
    'no-unused-vars': 'off', // 变量定义但未使用
    'react/jsx-uses-react': 'off', // 无须在组件中显式 import React
    'react/react-in-jsx-scope': 'off', // 确保已经正确引入了 React 库
    "@typescript-eslint/no-explicit-any": 'off', // 允许使用 any 类型
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 上线环境用打印就报警告, 开发环境关闭此规则
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // debugger可以终止代码执行
    'react/boolean-prop-naming': 'error', // 布尔属性的命名一致性 需要以is或has为前缀
    'no-multiple-empty-lines': ['error', {
      max: 2
    }], // 不允许有多行空行
    '@typescript-eslint/require-await': 'error', // 禁止没有await表达式的异步函数
    'no-unsafe-optional-chaining': 'error', // 禁止在不允许使用“undefined”值的情况下使用可选链接
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
