/**
 * @description 283. 移动零，easy，https://leetcode.cn/problems/move-zeroes/description/
 * @param nums 
 */
function moveZeroes(nums: number[]): void {
  let slow = 0
  let fast = 0
  while(fast < nums.length) {
    if(nums[fast] !== 0) {
      nums[slow++] = nums[fast]
    }
    fast++
  }
  while(slow < nums.length) {
    nums[slow++] = 0
  }
}

/**
 * @description 283. 移动零
 */
function run() {
  const nums1 = [0, 1, 0, 3, 12]

  console.log('-----------283. 移动零-----------')
  moveZeroes(nums1)
  console.log(nums1)  // [1, 3, 12, 0, 0]
}

export default run
