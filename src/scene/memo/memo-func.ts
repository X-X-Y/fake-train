/**
 * @description 复杂函数缓存方法实现
 * @param func 复杂函数缓存方法实现
 * @param hashFunc 生成hash值方法，没传默认以传入的第一个参数为hash值
 * @returns 能够缓存后的函数
 */
function memoFunc(func: Function, hashFunc?: Function): Function {
  const _memoFunc = function() {
    const cache = _memoFunc.cache
    const args = Array.from(arguments)
    const hashVal = hashFunc ? hashFunc.apply(this, args) : args[0]
    if(!cache[hashVal])
      cache[hashVal] = func(...args)
    return cache[hashVal]
  }

  _memoFunc.cache = {}

  return _memoFunc
}

/**
 * @description 斐波那契额数计算
 * @param n 斐波那契数第n位
 * @returns 第n位斐波那契数
 */
function fibonacci(n: number): number {
  if(n === 1 || n === 2) {
    return 1
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}

/**
 * @description 复杂函数缓存方法实现
 */
function run() {
  const cachedFibonacci = memoFunc(fibonacci)

  console.log('-----------复杂函数缓存方法实现-----------')

  let startTime = new Date().getTime()
  cachedFibonacci(41)
  console.log('第一次斐波那契数列计算耗时：', new Date().getTime() - startTime, 'ms')

  startTime = new Date().getTime()
  cachedFibonacci(41)
  console.log('第二次斐波那契数列计算耗时：', new Date().getTime() - startTime, 'ms')
}

export default run
