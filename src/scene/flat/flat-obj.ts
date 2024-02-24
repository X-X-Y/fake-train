/**
 * @description 对象平铺方法实现
 * @param obj 待平铺目标对象
 * @param prefix 当前层属性前缀
 * @returns 平铺后对象
 */
function flatObj(obj: object, depth: number = Infinity): object {
  const res = {}

  const _flat = function(objt: object, deptht: number = Infinity, prefix: string = '') {
    for(let str in objt) {
      const newStr = prefix.length ? prefix + '-' + str : str
      if(deptht > 0 && Object.prototype.toString.call(objt[str]) === '[object Object]') {
        _flat(objt[str], deptht - 1, newStr)
      }else {
        res[newStr] = objt[str]
      }
    }
  }

  _flat(obj, depth)

  return res
}

/**
 * @description 对象平铺方法实现
 */
function run() {
  const obj1 = {
    a: '1',
    b: 'bb',
    c: null,
    d: undefined,
    f: ['a', 123, {aa: 'a', bb: 'b'}],
    e: {
      'e1': '1',
      'e2': {
        'e21': '2',
        'e23': {
          'e231': '3',
          'e232': '4'
        }
      }
    }
  }

  console.log('-----------对象平铺方法实现-----------')

  console.log(flatObj(obj1))
  console.log(flatObj(obj1, 2))
}

export default run
