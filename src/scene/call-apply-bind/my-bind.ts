/**
 * @description bind方法实现
 */
Function.prototype['myBind'] = function (...args) {
  const targetThis = args[0] || window
  const otherArgs = args[1] || []

  const originThis = this

  return function(...args2) {
    return originThis['myApply'](targetThis, [...otherArgs, ...args2])
  }
}

/**
 * @description bind方法实现
 */
function run() {
  const obj1 = {
    name: '厉飞雨'
  }
  const obj2 = {
    name: '大锤',
    testBind: function () {
      console.log(this.name)
    }
  }

  console.log('-----------bind方法实现-----------')
  obj2.testBind()  // 大锤
  obj2.testBind['myBind'](obj1)()  // 厉飞雨
}

export default run

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
