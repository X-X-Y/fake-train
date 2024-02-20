/**
 * @description 26. 删除有序数组中的重复项，https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/
 * @param nums 
 * @returns 
 */
function removeDuplicates(nums: number[]): number {
  let slow = 0
  let fast = slow
  while(fast < nums.length) {
    if(nums[fast] !== nums[slow]) {
      nums[++slow] = nums[fast]
    }
    fast++
  }

  return slow + 1
}

/**
 * @description 26. 删除有序数组中的重复项
 */
function run() {
  const nums1 = [1, 1, 2]
  const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

  console.log('-----------26. 删除有序数组中的重复项-----------')
  console.log(removeDuplicates(nums1))  // 2
  console.log(removeDuplicates(nums2))  // 5
}

export default run
