/**
 * @description 简易深拷贝，支持循环引用，不支持函数、正则、时间等对象
 * @param originObj 拷贝目标对象
 * @returns 拷贝后的对象
 */
function deepCopy<T>(originObj: T): T {
  const stack = new WeakMap()

  const clone = function<T>(obj: T): T {
    if(!obj || typeof obj !== 'object') return obj

    const newObj = Array.isArray(obj) ? [] : {}

    if(stack.has(obj)) {
      return stack.get(obj)
    }

    stack.set(obj, newObj)

    for(let key in obj as object) {
      const val = obj[key]
      if(typeof val === 'object') {
        newObj[key] = clone(val)
      }else {
        newObj[key] = val
      }
    }

    return newObj as T
  }

  return clone(originObj)
}

/**
 * @description 简易深拷贝，支持循环引用，不支持函数、正则、时间等对象
 */
function run() {
  const obj1 = {
    a: 1,
    b: null,
    c: '123',
    d: ['aa', 'bb', ['cc', 'dd'], 'ee'],
    e: {
      'name': '厉飞雨',
      'age': '23'
    },
    f: null
  }
  
  obj1.b = obj1
  console.log('-----------简易深拷贝-----------')
  console.log(deepCopy(obj1))
}

export default run
