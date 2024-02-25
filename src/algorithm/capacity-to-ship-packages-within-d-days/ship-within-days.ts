/**
 * @description 1011. 在 D 天内送达包裹的能力，medium，https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days/
 * @param weights 包裹重量数组
 * @param days 目标运输天数
 * @returns 船能够完成运输时最低的承重量
 */
function shipWithinDays(weights: number[], days: number): number {
  /**
   * @description 在目标天数内，设定承重量为input时，是否能完成包裹运输
   * @param nums 包裹重量数组
   * @param input 设定的承重
   * @param target 目标天数
   * @returns 包裹是否能顺利运输到港口
   */
  const isOk = function(nums: number[], input: number, target: number): ConstrainBoolean {
    let count = 0
    let idx = 0
    let curSum = 0

    while(idx < nums.length) {
      curSum += nums[idx]
      if(curSum > input) {
        if(curSum === nums[idx])
          return false
        curSum = 0
        count++
      }else {
        idx++
      }
    }

    // 如果当前运送包裹不为0，则是最后一天的任务
    if(curSum)
      count++

    return count <= target
  }

  let left = weights[0]
  let right = weights.reduce((prev, cur) => prev + cur)
  let res = 0

  while(left <= right) {
    let mid = left + ((right - left) >> 1)
    if(isOk(weights, mid, days)) {
      right = mid - 1
      res = mid
    }else {
      left = mid + 1
    }
  }
  
  return res
}

/**
 * @description 1011. 在 D 天内送达包裹的能力
 */
function run() {
  const weights1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const weights2 = [3, 2, 2, 4, 1, 4]
  const days1 = 5
  const days2 = 3

  console.log('-----------1011. 在 D 天内送达包裹的能力-----------')
  console.log('[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 5 :', shipWithinDays(weights1, days1))  // 15
  console.log('[3, 2, 2, 4, 1, 4] / 3 :', shipWithinDays(weights2, days2))  // 6
}

export default run
