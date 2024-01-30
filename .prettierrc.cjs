/**
 * @type {import('prettier').Options}
 */
export default {
  printWidth: 80, // 超过最大值换行
  tabWidth: 2, // 缩进字节数
  useTabs: true, // 缩进使用tab
  semi: false, // 句尾不添加分号
  singleQuote: true, // 使用单引号
  arrowParents: 'avoid', // 箭头函数参数只有一个时是不要有小括号
  trailingComma: 'all', // 在对象或数组最后一个元素后面加逗号
  bracketSpacing: true, // 在对象、数组括号与文字之间加空格
}
