/**
 * @description 防抖实现
 * @param func 原触发函数
 * @param delay 延迟时间ms
 * @returns 
 */
function debounse(func: Function, delay: number): Function {
  let timer

  return function(...args) {
    const _this = this

    clearTimeout(timer)

    timer = setTimeout(() => {
      func.apply(_this, args)
    }, delay)  
  }
}

export default debounse
