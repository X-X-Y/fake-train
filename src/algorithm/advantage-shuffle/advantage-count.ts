/**
 * @description 870. 优势洗牌，medium，https://leetcode.cn/problems/advantage-shuffle/
 * @param nums1 数组
 * @param nums2 数组
 * @returns nums1重新排序后数组
 */
function advantageCount(nums1: number[], nums2: number[]): number[] {
  let res = new Array(nums1.length).fill(0)
  const sortedNums2 = nums2.map((item, idx) => [item, idx]).sort((a, b) => b[0] - a[0])
  const sortedNums1 = nums1.sort((a, b) => b - a)

  sortedNums2.forEach((item, idx) => {
    if(sortedNums1[0] > item[0]) {
      res[item[1]] = sortedNums1.shift()
    }else {
      res[item[1]] = sortedNums1.pop()
    }
  })

  return res
}

/**
 * @description 870. 优势洗牌
 */
function run() {
  const nums1 = [2, 7, 11, 15]
  const nums2 = [1, 10, 4, 11]

  console.log('-----------870. 优势洗牌-----------')
  console.log(advantageCount(nums1, nums2))  // [2, 11, 7, 15]
}

export default run
