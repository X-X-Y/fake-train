/**
 * @description 344. 反转字符串，easy，https://leetcode.cn/problems/reverse-string/description/
 * @param s 
 */
function reverseString(s: string[]): void {
  let temp = null
  let left = 0
  let right = s.length - 1
  while(left < right) {
    temp = s[left]
    s[left] = s[right]
    s[right] = temp
    left++
    right--
  }
}

/**
 * @description 344. 反转字符串
 */
function run() {
  const nums1 = ["h", "e", "l", "l", "o"]
  const nums2 = ["H", "a", "n", "n", "a", "h"]

  console.log('-----------344. 反转字符串-----------')
  reverseString(nums1)
  reverseString(nums2)
  console.log(nums1)  // ["o", "l", "l", "e", "h"]
  console.log(nums2)  // ["h", "a", "n", "n", "a", "H"]
}

export default run
