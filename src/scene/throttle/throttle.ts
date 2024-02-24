/**
 * @description 节流实现
 * @param func 原事件函数
 * @param delay 延迟时间ms
 * @returns 
 */
function throttle(func: Function, delay: number): Function {
  let flag = false

  return function(...args) {
    const _this = this

    if(!flag) {
      flag = true
      setTimeout(() => {
        func.apply(_this, args)
        flag = false
      }, delay);
    }
  }
}

export default throttle
