/**
 * @description 496. 下一个更大元素 I，easy，https://leetcode.cn/problems/next-greater-element-i/
 * @param nums1
 * @param nums2
 * @returns
 */
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
	const nextStack = []
	const res = new Array(nums2.length).fill(0)

	for (let i = nums2.length - 1; i >= 0; i--) {
		while (nextStack.length && nextStack[nextStack.length - 1] <= nums2[i]) {
			nextStack.pop()
		}
		res[i] = nextStack.length ? nextStack[nextStack.length - 1] : -1
		nextStack.push(nums2[i])
	}

	const resMap = new Map()
	res.forEach((item, idx) => {
		resMap.set(nums2[idx], item)
	})

	return nums1.map((item) => {
		return resMap.get(item)
	})
}

/**
 * @description 496. 下一个更大元素 I
 */
function run() {
	const nums1 = [4, 1, 2]
	const nums2 = [1, 3, 4, 2]

	console.log('-----------496. 下一个更大元素 I-----------')
	console.log(nums1, nums2, '---->', nextGreaterElement(nums1, nums2)) // 1
}

export default run
