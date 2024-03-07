/**
 * @description 503. 下一个更大元素 II，medium，https://leetcode.cn/problems/next-greater-element-ii/
 * @param nums
 * @returns
 */
function nextGreaterElements(nums: number[]): number[] {
	const n = nums.length
	const s = []
	const res = new Array(n).fill(-1)

	for (let i = 2 * n - 1; i >= 0; i--) {
		while (s.length && s[s.length - 1] <= nums[i % n]) {
			s.pop()
		}
		res[i % n] = s.length ? s[s.length - 1] : -1
		s.push(nums[i % n])
	}

	return res
}

/**
 * @description 503. 下一个更大元素 II
 */
function run() {
	const nums1 = [1, 2, 1]

	console.log('-----------503. 下一个更大元素 II-----------')
	console.log(nums1, nextGreaterElements(nums1)) // [2, -1, 2]
}

export default run
