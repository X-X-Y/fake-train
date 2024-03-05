/**
 * @description 921. 使括号有效的最少添加，medium，https://leetcode.cn/problems/minimum-add-to-make-parentheses-valid/
 * @param s
 * @returns
 */
function minAddToMakeValid(s: string): number {
	let needl = 0
	let needr = 0

	for (const item of s) {
		if (item === '(') {
			needr++
		} else {
			needr--

			if (needr === -1) {
				needl++
				needr = 0
			}
		}
	}

	return needl + needr
}

/**
 * @description 921. 使括号有效的最少添加
 */
function run() {
	const s1 = '())'
	const s2 = '((('

	console.log('-----------921. 使括号有效的最少添加-----------')
	console.log(s1, minAddToMakeValid(s1)) // 1
	console.log(s2, minAddToMakeValid(s2)) // 3
}

export default run
