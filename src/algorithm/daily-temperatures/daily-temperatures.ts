/**
 * @description 739. 每日温度，medium，https://leetcode.cn/problems/daily-temperatures/
 * @param temperatures
 * @returns
 */
function dailyTemperatures(temperatures: number[]): number[] {
	const s = []
	const n = temperatures.length
	const res = new Array(n).fill(0)

	for (let i = n - 1; i >= 0; i--) {
		while (s.length && temperatures[s[s.length - 1]] <= temperatures[i]) {
			s.pop()
		}
		res[i] = s.length ? s[s.length - 1] - i : 0
		s.push(i)
	}

	return res
}

/**
 * @description 739. 每日温度
 */
function run() {
	const nums1 = [73, 74, 75, 71, 69, 72, 76, 73]

	console.log('-----------739. 每日温度-----------')
	console.log(nums1, dailyTemperatures(nums1)) // [1, 1, 4, 2, 1, 1, 0, 0]
}

export default run
