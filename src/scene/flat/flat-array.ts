/**
 * @description 数组平铺方法实现
 * @param arr 待铺平目标数组
 * @returns 
 */
function flatArray(arr: any[], depth?: number, initArr?: any[]): any[] {
  return arr.reduce((pre, cur) => {
    if(Array.isArray(cur) && (depth || Infinity) > 1) {
      return flatArray(cur, (depth || Infinity) - 1, pre)
    }else {
      return pre.concat(cur)
    }
  }, initArr || [])
}

/**
 * @description 数组平铺方法实现
 */
function run() {
  const arr1 = [1, [2, 3], [4, [5], [6, [7, 8], [9, 0, [10, 11], 12]]], [13, [14, 15], 16]]

  console.log('-----------数组平铺方法实现-----------')
  
  console.log(flatArray(arr1, 1))
  console.log(flatArray(arr1, 2))
  console.log(flatArray(arr1))
}

export default run
