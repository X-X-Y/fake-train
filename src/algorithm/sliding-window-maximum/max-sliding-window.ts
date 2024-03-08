import { IQueue } from './IQueue'

/**
 * @description 239. 滑动窗口最大值，hard，https://leetcode.cn/problems/sliding-window-maximum/
 * @param nums
 * @param k
 * @returns
 */
function maxSlidingWindow(nums: number[], k: number): number[] {
	const win = new MyQueue()
	const res = []

	nums.forEach((item, idx) => {
		if (idx < k - 1) {
			win.push(item)
		} else {
			win.push(item)
			res.push(win.max())
			win.pop(nums[idx - k + 1])
		}
	})

	return res
}

/**
 * @description 单调递减队列
 */
class MyQueue implements IQueue {
	private _q

	constructor() {
		this._q = []
	}

	get q() {
		return this._q
	}

	set q(newq) {
		this._q = newq
	}

	push(num) {
		while (this.q.length && this.q[this.q.length - 1] < num) {
			this.q.pop()
		}
		this.q.push(num)
	}

	pop(tar) {
		if (this.q[0] === tar) {
			this.q.shift()
		}
	}

	max() {
		return this.q[0]
	}
}

/**
 * @description 239. 滑动窗口最大值
 */
function run() {
	const nums1 = [1, 3, -1, -3, 5, 3, 6, 7]
	const k1 = 3

	console.log('-----------239. 滑动窗口最大值-----------')
	console.log(nums1, k1, '----->', maxSlidingWindow(nums1, k1)) // [3, 3, 5, 5, 6, 7]
}

export default run
