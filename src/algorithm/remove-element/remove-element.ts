/**
 * @description 27. 移除元素，https://leetcode.cn/problems/remove-element/description/
 * @param nums 
 * @param val 
 * @returns 
 */
function removeElement(nums: number[], val: number): number {
  let slow = 0
  let fast = 0
  while(fast < nums.length) {
    if(nums[fast] !== val) {
      nums[slow++] = nums[fast]
    }
    fast++
  }

  return slow
}

/**
 * @description 27. 移除元素
 */
function run() {
  const nums1 = [3, 2, 2, 3]
  const nums2 = [0, 1, 2, 2, 3, 0, 4, 2]

  console.log('-----------27. 移除元素-----------')
  console.log(removeElement(nums1, 3))  // 2
  console.log(removeElement(nums2, 2))  // 5
}

export default run
