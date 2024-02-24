/**
 * @description 举例Reflect操作getOwnProperty内部方法应用
 */
function exampleReflectOwnKeys() {
  const obj = {
    a: 1,
    b: 2,
    [Symbol()]: 4
  }

  Object.defineProperty(obj, 'c', {
    value: 3,
    enumerable: false
  })

  console.log('-----------举例Reflect操作OwnPropertyKeys内部方法应用-----------')

  console.log('原生OwnPropertyKeys方法是可以获取全部属性的，但没有暴露使用。getOwnPropertyNames可以获取不可枚举属性:', Object.getOwnPropertyNames(obj))
  console.log('Object.keys对OwnPropertyKeys内置方法做了一些处理，只能获取自身可枚举属性:', Object.keys(obj))
  console.log('Reflect.ownKeys作为OwnPropertyKeys反射方法，同样可以全部获取:', Reflect.ownKeys(obj))
  console.log('由此以上可以看出Reflect提供了操作对象的内部方法，ES6的Reflect之前是无法调用这些方法的')
}

export default exampleReflectOwnKeys
