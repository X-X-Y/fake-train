/**
 * @description 316. 去除重复字母，medium，https://leetcode.cn/problems/remove-duplicate-letters/
 * @param s
 * @returns
 */
function removeDuplicateLetters(s: string): string {
	// 字典序最小，即尽可能让小字母排在前面，所以res尽量单调递增，所以当待加入字母小于res最后一位时，
	// 就一直往前覆盖，直到最后一位在剩余字符串中不存在了，则不能被覆盖
	// 因为要保持结果不重复，所以新的待加入字母要首先检查是否已经存在，存在则跳过，因为
	// 同一个字母，必然是靠前排时，字典序更小
	// 加入删除字符时，记得更新map，因为res唯一性，故只设0/1即可
	const res = []
	const restMap = new Map()
	const resMap = new Map()

	for (const item of s) {
		restMap.set(item, (restMap.get(item) || 0) + 1)
	}

	for (const item of s) {
		restMap.set(item, restMap.get(item) - 1)

		if (resMap.get(item)) continue

		let endRes = res[res.length - 1]
		while (res.length && item < endRes && restMap.get(endRes)) {
			resMap.set(res.pop(), 0)
			endRes = res[res.length - 1]
		}

		res.push(item)
		resMap.set(item, 1)
	}

	return res.join('')
}

/**
 * @description 316. 去除重复字母
 */
function run() {
	const s1 = 'cbacdcbc'

	console.log('-----------316. 去除重复字母-----------')
	console.log(s1, '----->', removeDuplicateLetters(s1)) // 'acdb'
}

export default run
