/**
 * @description 875. 爱吃香蕉的珂珂，medium，https://leetcode.cn/problems/koko-eating-bananas/
 * @param piles 香蕉堆数组
 * @param h 巡警离开时间
 * @returns 吃香蕉最小速度
 */
function minEatingSpeed(piles: number[], h: number): number {
	const needT = function (nums, s) {
		let h = 0

		for (let i = 0; i < nums.length; i++) {
			h += Math.floor(nums[i] / s)
			if (nums[i] % s !== 0) h += 1
		}

		return h
	}

	let left = 1
	// let right = piles.reduce((prev, cur) => prev + cur)
	let right = 1000000000 + 1

	while (left <= right) {
		const mid = left + ((right - left) >> 1)
		if (needT(piles, mid) <= h) {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return left
}

/**
 * @description 875. 爱吃香蕉的珂珂
 */
function run() {
	const piles1 = [3, 6, 7, 11]
	const piles2 = [30, 11, 23, 4, 20]
	const h1 = 8
	const h2 = 5

	console.log('-----------875. 爱吃香蕉的珂珂-----------')
	console.log('[3,6,7,11] / 8 :', minEatingSpeed(piles1, h1)) // 4
	console.log('[30,11,23,4,20] / 5 :', minEatingSpeed(piles2, h2)) // 30
}

export default run
