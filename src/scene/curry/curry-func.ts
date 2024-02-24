/**
 * @description 函数柯里化实现
 * @param func 待柯里化函数
 * @returns 柯里化后的函数
 */
function curryFunc(func: Function): Function {
  const needArgsLen = func.length

  const _curry = (...args) => {
    if(args.length >= needArgsLen) 
      return func(...args)
    return (...args2) => {
      return _curry(...args.concat(args2))
    }
  }

  return _curry
}

/**
 * @description 测试函数
 * @param a 
 * @param b 
 * @param c 
 * @returns 
 */
function testFunc(a: number, b: number, c: number): number {
  return a + b + c
}

/**
 * @description 函数柯里化实现
 */
function run() {
  const curriedTestFunc = curryFunc(testFunc)

  console.log('-----------函数柯里化实现-----------')

  console.log('curriedTestFunc(1)(2)(3)：', curriedTestFunc(1)(2)(3))
  console.log('curriedTestFunc(1, 2)(3)：', curriedTestFunc(1, 2)(3))
  console.log('curriedTestFunc(1, 2, 3)：', curriedTestFunc(1, 2, 3))
}

export default run
