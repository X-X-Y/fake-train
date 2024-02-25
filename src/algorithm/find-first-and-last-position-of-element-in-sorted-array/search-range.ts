/**
 * @description 34. 在排序数组中查找元素的第一个和最后一个位置，medium，https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @param nums 待查询数组
 * @param target 目标数字
 * @returns target在nums中首末位置，不存在则返回[-1, -1]
 */
function searchRange(nums: number[], target: number): number[] {
  let left = 0
  let right = nums.length - 1
  let res = [-1, -1]

  while(left <= right) {
    let mid = left + ((right - left) >> 1)
    if(nums[mid] === target) {
      right = mid - 1
    }else if(nums[mid] > target) {
      right = mid - 1
    }else if(nums[mid] < target) {
      left = mid + 1
    }
  }
  
  if(nums[left] === target) {
    res[0] = left
    while(nums[left] === target) {
      res[1] = left++
    }
  }

  return res
}

/**
 * @description 34. 在排序数组中查找元素的第一个和最后一个位置
 */
function run() {
  const nums1 = [5, 7, 7, 8, 8, 10]
  const target1 = 8
  const target2 = 6

  console.log('-----------34. 在排序数组中查找元素的第一个和最后一个位置-----------')
  console.log('[5, 7, 7, 8, 8, 10] / 8 :', searchRange(nums1, target1))  // [3, 4]
  console.log('[5, 7, 7, 8, 8, 10] / 6 :', searchRange(nums1, target2))  // [-1, -1]
}

export default run
