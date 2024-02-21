/**
 * @description apply方法实现
 */
Function.prototype['myApply'] = function (...args) {
  const targetThis = args[0] || window
  const otherArgs = args[1] || []

  const funcSymbol = Symbol('func')

  targetThis[funcSymbol] = this

  const res = targetThis[funcSymbol](...otherArgs)

  delete targetThis[funcSymbol]

  return res
}

/**
 * @description apply方法实现
 */
function run() {
  const obj1 = {
    name: '厉飞雨'
  }
  const obj2 = {
    name: '大锤',
    testApply: function () {
      console.log(this.name)
    }
  }

  console.log('-----------apply方法实现-----------')
  obj2.testApply()  // 大锤
  obj2.testApply['myApply'](obj1)  // 厉飞雨
}

export default run
