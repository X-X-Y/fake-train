/**
 * @description call方法实现
 */
Function.prototype['myCall'] = function(...args) {
  const targetThis = args[0] || window
  const otherArgs = args.slice(1)

  const funcSymbol = Symbol('func')

  targetThis[funcSymbol] = this

  const res = targetThis[funcSymbol](...otherArgs)

  delete targetThis[funcSymbol]

  return res
}

/**
 * @description call方法实现
 */
function run() {
  const obj1 = {
    name: '厉飞雨'
  }
  const obj2 = {
    name: '大锤',
    testCall: function () {
      console.log(this.name)
    }
  }

  console.log('-----------call方法实现-----------')
  obj2.testCall()  // 大锤
  obj2.testCall['myCall'](obj1)  // 厉飞雨
}

export default run
