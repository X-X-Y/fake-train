/**
 * @description 对nums使用二分查找target位置，easy，https://leetcode.cn/problems/binary-search/
 * @param nums 有序排列的数字列表
 * @param target 目标查找数字
 * @returns 目标数字下标/-1
 */
function search(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1
  
  while(left <= right) {
    let mid = left + ((right - left) >> 1)
    if(nums[mid] > target) {
      right = mid - 1
    }else if(nums[mid] < target){
      left = mid + 1
    }else {
      return mid
    }
  }

  return -1
}

/**
 * @description 704. 二分查找
 */
function run() {
  const nums1 = [39, 2, 15, 0, 9, 66, 101]
  const target1 = 0
  const target2 = 1

  console.log('-----------704. 二分查找-----------')
  console.log(search(nums1, target1))  // 3
  console.log(search(nums1, target2))  // -1
}

export default run
