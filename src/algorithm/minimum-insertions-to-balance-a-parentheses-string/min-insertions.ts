/**
 * @description 1541. 平衡括号字符串的最少插入次数，medium，https://leetcode.cn/problems/minimum-insertions-to-balance-a-parentheses-string/
 * @param s
 * @returns
 */
function minInsertions(s: string): number {
	let res = 0
	let needr = 0

	for (const item of s) {
		if (item === '(') {
			needr += 2
			if (needr % 2 === 1) {
				res++
				needr--
			}
		} else {
			needr--
			if (needr === -1) {
				res++
				needr = 1
			}
		}
	}

	return res + needr
}

/**
 * @description 1541. 平衡括号字符串的最少插入次数
 */
function run() {
	const s1 = '(()))'
	const s2 = '(()))(()))()())))'

	console.log('-----------1541. 平衡括号字符串的最少插入次数-----------')
	console.log(s1, minInsertions(s1)) // 1
	console.log(s2, minInsertions(s2)) // 4
}

export default run
